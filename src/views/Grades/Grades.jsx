import BugReport from "@material-ui/icons/BugReport";
import InputLabel from "@material-ui/core/InputLabel";

import Card from "components/Card/Card.jsx";

import React,{Component} from 'react';

import GridItem from "components/Grid/GridItem.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";

import InputForm from './InputForm';

import App from './table/index';


function getData(url ) {
    return fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
  
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        //body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then(response => response.json()); // parses response to JSON
  }
  function postData(url , data ) {
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

export default class Grades extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            data:[],
        }
     // this.getlevel=this.getlevel.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
      this.updateInput=this.updateInput.bind(this);
    }

    updateInput = (event) => {
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
    }
  /*  getlevel=(e)=>{
        e.preventDefault();
        getData(`http://localhost/xx-master/src/views/Grades/get.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));
    }*/


 componentDidMount(){
    postData(`http://localhost/xx-master/src/views/Grades/create.php`, this.state)
  .then(data => console.log(JSON.stringify(data)))
   .catch(error => console.error(error));
 }

    handleSubmit=(e)=>{
        e.preventDefault();
        postData(`http://localhost/xx-master/src/views/Grades/create.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));

        e.target.reset();
    }
  /*  getsubject=(e)=>{
        e.preventDefault();
        getData(`http://localhost/xx-master/src/views/Grades/gets.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));
    }*/


   // _handleChange(event) {
     //   let state = {};
     //   this.setState({ value: event.target.value }) // I tried before target.value, or nativeEvent.value
   // }

    render(){

        const styleInput = {
            width: "50%",
            alignContent: "right",
            height: "25px",
            margin: "3px 0",
            border: "1px solid #ccc",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
            
          };
          
        return(
            <center>
            <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
            <CustomTabs
                headerColor="info"
                tabs={[
                  {
                    tabName: "Create_An_Exam",
                    tabIcon: BugReport,
                    tabContent: ( 
                    <form action="create.php" onSubmit={this.handleSubmit} style={{ alignContent: "Center" }}  >
                     {/* <GridContainer justify="center">   
                         
                             
                        <GridItem xs={12} sm={12} md={10}>*/}
                                <CardHeader></CardHeader>
                                <CardBody>
                          
                                    
                                <InputForm inputType="text" inputKey="level" inputLabel="Level " updateInput={this.updateInput} />
                                <InputForm inputType="text" inputKey="subject" inputLabel="Subject  " updateInput={this.updateInput} />
                               
           
                                
                                
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <GridItem xs={12} sm={6} md={10} style={{ textAlign: "center" }}>
                                   <label style={{ color: "#000", alignContent: "Center",width:"100%" }}> Semester  </label>
                                        <select name="sel_s" required style={styleInput}  onChange={this.updateInput}   /*updateInput={this.updateInput} */ value={this.state.value}>
                                            <option></option>
                                            <option name="sel_s">1st_Semester</option>
                                            <option name="sel_s">2nd_Semester</option>
                                        </select>
                                    </GridItem>
                                </div>

                                <InputForm inputType="number" inputKey="max" inputLabel="Max_Limit " updateInput={this.updateInput} />
                                <InputForm inputType="number" inputKey="min" inputLabel="Min_Limit  " updateInput={this.updateInput} />

                                <div style={{ display: 'flex', width: '100%' }}>
                                    <GridItem xs={12} sm={6} md={10} style={{ textAlign: "center" }}>
                                    <label style={{ color: "#000", alignContent: "Center",width:"100%" }}> Type_Exam </label>
                                        <select name="sel_t" required style={styleInput} onChange={this.updateInput} /*updateInput={this.updateInput}*/ value={this.state.value}>
                                            <option></option>
                                            <option name="sel_t" value="Daily_Exam">Daily_Exam</option>
                                            <option name="sel_t"   value="Mid_Exam">Mid_Exam</option>
                                            <option name="sel_t" value="Final_Exam">Final_Exam</option>
                                        </select>
                                    </GridItem>
                                </div>

                                
                                <InputForm inputType="date" inputKey="date" inputLabel="Date_Of_Exam  " updateInput={this.updateInput} />

                       
                            </CardBody>
                            <CardFooter>
                                <Button color="info" name="create" type="submit" value="create">Create </Button>
                            </CardFooter>
                          {/* </GridItem>
                              
                        </GridContainer>  */}  

                          </form>
                       
                    ),
                  }
                ]}

                >

                </CustomTabs>
                </GridItem>
            </GridContainer>














            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                <CustomTabs
                headerColor="info"
                tabs={[
                  {
                    tabName: "Create_An_Exam",
                    tabIcon: BugReport,
                    tabContent: (
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={10}>
                                <CardHeader></CardHeader>
                                <CardBody>
                                    <App />
                                </CardBody>

                            </GridItem>
                        </GridContainer>
                       
                    ),
                  }
                ]}

                >

                </CustomTabs>
                </GridItem>
            </GridContainer>















            </center>
        )
    }
}
