import color from '@material-ui/core/colors/deepOrange';

import React, { Component } from 'react';

import Button from "components/CustomButtons/Button.jsx";
function postData(url, data) {
    // Default options are marked with *
    return fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then(response => response.text()); // parses response to JSON
  }
function getData(url = ``, data = {}) {
    // Default options are marked with *
    return fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",

             "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        //body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
        .then(response => response.json()); // parses response to JSON
}




class Build extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.updateInput = this.updateInput.bind(this);


        //this.getData = this.getData.bind(this);
        this.handleSubmit5 = this.handleSubmit5.bind(this);
    }



    componentDidMount() {
        var th = this;
        //this.serverRequest = axios.get(this.props.source)
        getData(`http://localhost/xx-master/src/views/Icons/getclass.php`)
            .then(function (event) {
                th.setState({
                    data: event//.data
                });
            })
    }

    componentWillUnmount() {
        //this.serverRequest.abort();
    }

    updateInput = (event) => {
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
    }



    handleSubmit5 = (event) => {
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        getData(`http://localhost/xx-master/src/views/Icons/getclass.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));

    }


    send=(e)=>{
        var data = [...this.state.data];
       data.splice(e, 1);
       data.slice(0, 0);
        this.setState({   data  });
        e.preventDefault();
        postData(`http://localhost/xx-master/src/views/Icons/send.php`, this.state)
        .then(data => console.log(JSON.stringify(data)))
        .catch(error => console.error(error));
    }

    render() {
        const contents = this.state.data.map(item => {
            //change the title and location key based on your API
            return (
            <tr key={item.id}>

                <tr>
                <td>{item.level}</td>
                 <td>{item.section}</td>
              <td><Button color="rose" type="submit" >View</Button></td>
              <td><Button color="rose" type="submit" >View</Button></td>
               <td><Button color="rose" type="submit" >View</Button></td>
               <td><Button color="rose" type="submit" >View</Button></td>
                </tr>
            </tr>
            )
        })
        return (
            <div className="Table">
                <table style={{ border: " 1px solid rose" ,align:"center"}} onChange={this.props.get}>
                    <thead style={{ border: " 1px solid rose", background: "rose"}}>
                        <tr style={{ border: " 1px solid rose"}}>
                        <th>Level</th>
                        <th>Section</th>
                        <th>Students</th>
                        <th>Grades</th>
                        <th>Attendance</th>
                        <th>Activities</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {
                            this.state.data.map(item =>
                               
                                <tr key={item.id3}>
                                <td>{item.level}</td>
                                <td>{item.section}</td>
                                <td>
                                        <Button color="rose" type="submit" > <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.assign('/admin/Students/');
                                            }}> View</a>
                                        </Button>
                                </td>
                                <td>
                                      <Button color="rose" type="submit" >
                                      {this.send}
                                      <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                               
                                                window.location.assign('/admin/Grades/');
                                            }}> View</a>
                                      </Button>
                                </td>
                                <td>
                                   <Button color="rose" type="submit" ><a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.assign('/admin/Attendance/');
                                            }}> View</a>
                                    </Button>
                                </td>
                                <td>
                                     <Button color="rose" type="submit" ><a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.assign('/admin/Activities/');
                                            }}> View</a>
                                     </Button>
                                     </td>
                                </tr>
                               
                            
                            )
                            
                            
                        }
                        
                    </tbody>
                    
                </table>
            </div>
        );
    }
}

export default Build

