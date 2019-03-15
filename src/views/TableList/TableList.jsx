import AppBar from '@material-ui/core/AppBar';
import TabList from '@material-ui/core/Tab';
import Update from "@material-ui/icons/Update";
import LocalOffer from "@material-ui/icons/LocalOffer";
import TabLink from '@material-ui/core/Tab';
import Cloud from "@material-ui/icons/Cloud";
import BugReport from "@material-ui/icons/BugReport";
import DateRange from "@material-ui/icons/DateRange";
import Accessibility from "@material-ui/icons/Accessibility";
import AccessTime from "@material-ui/icons/AccessTime";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import InputLabel from '@material-ui/core/InputLabel';
import Tab from '@material-ui/core/Tab';
import Store from "@material-ui/icons/Store";
import withStyles from "@material-ui/core/styles/withStyles";
import Code from "@material-ui/icons/Code";
import TabPanel from '@material-ui/core/Tab';
import Search from '@material-ui/icons/Search';
import TabContent from '@material-ui/core/Tab';

import React from "react";

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";

import InputForm from "./InputForm.jsx";


const style = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "200px"
  },
  cardCategoryWhite: {
    color: "rgba(200,2,2,.62)",
    margin: "0",
    fontSize: "16px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFffff",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};



const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

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
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then(response => response.text()); // parses response to JSON
}


//function TypographyPage(props) {
class TypographyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flag: false,
  };
   // this.updateInput = this.updateInput.bind(this);
   // this.handleSubmit = this.handleSubmit.bind(this);
   // this.handleSubmit_upload = this.handleSubmit_upload.bind(this);
   // this.handleSubmit3 = this.handleSubmit3.bind(this);
   // this.handleSubmit4 = this.handleSubmit4.bind(this);
   // this.onClick=this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    this.setState({ flag: true });
}
  updateInput(event) {
    let state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }
  handleselectedFile = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }
 /* handleSubmit(event) {
    event.preventDefault();
    //alert('Handle it on your own');
    console.log(this.state);
    postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/a.php`, this.state)
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));
      event.target.reset();
  }

  handleSubmit3 = (event) => {
    event.preventDefault();
    //alert('Handle it on your own');
    console.log(this.state);
    postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/delete.php`, this.state)
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));
      event.target.reset();

  }
  handleSubmit4 = (event) => {
    event.preventDefault();
    //alert('Handle it on your own');
    console.log(this.state);
    postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/delete_all.php`, this.state)
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));
      event.target.reset();
  }

  Search() {
    return { flag: false };
}*/
  /* handleSubmit_upload(event) {
    event.preventDefault();
    //alert('Handle it on your own');
    console.log(this.state);
    postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/upload_csvfile.php`, this.state)
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));
  }

 handleSubmit5 = (event) => {
    event.preventDefault();
    //alert('Handle it on your own');
    console.log(this.state);
    getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/search.php`, this.state)
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));
      <Table1 />

  }
  onSubmit() {
    postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/search1.php`, this.state)
        .then(data => console.log(JSON.stringify(data)))
        .catch(error => console.error(error));
    return (
        <div>


            {this.state.flag ? <Table1 /> : <div></div>}
        </div>
    );
}

difference=(event)=>{
var x=document.getElementsByName('selected');
x.target.value=event;
}
handlechangedate=(e)=>{
  e.preventDefault();
  var date1=e.target.value;
  var date2 = new Date().toJSON().slice(0,10).replace(/-/g,'/');
  var diff=date2-date1;

  this.difference(diff);
   
  // this.updateInput(diff);

}
*/
 



  updateInput_upload(event) {
    //let state = {};
    //state[event.target.name] = event.target.value;
    this.readFile(event);
    event.target.value = null;

  }

  handleUpload = () => {
    const data = new FormData()
    data.append('file', this.state.selectedFile, this.state.selectedFile.name)


    postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/upload_csvfile.php`, {
      onUploadProgress: ProgressEvent => {
        this.setState({
          loaded: (ProgressEvent.loaded / ProgressEvent.total * 100),
        })
      },
    })
      .then(res => {
        console.log(res.statusText)
      })

  }

  render() {
    // var props;
    const { classes } = this.props;
    const styleInput = {
      width: "100%",
      alignContent: "Center",
      height: "20px",
      margin: "3px 0",
      border: "1px solid #ccc",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
      borderTopRightRadius: "10px",
      borderTopLeftRadius: "10px"
    };
    return (

      <div style={{ alignContent: "Center" }}>
        <GridContainer justify="center">

          <GridItem xs={12} sm={12} md={10}>
            <CustomTabs
              title="Students"
              headerColor="info"
              tabs={[
                {
                  tabName: "Search",
                  tabIcon: Code,
                  tabContent: (
                    <form action="search1.php" onSubmit={this.onSubmit} onChange={this.updateInput}>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                          <Card>
                            <CardHeader color="info">
                              <h4 className={classes.cardTitleWhite}>Search on a specific Student</h4>
                              <p className={classes.cardCategoryWhite}>by id </p>
                            </CardHeader>

                            <CardBody>
                              <div className={classes.searchWrapper} style={{ textAlign: "center" }} >
                              
                                 <input style={{ width: "50%", color: "#000", margin: "3px 0", height: "40px", border: "1px solid #ccc", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}
                                          /*  Key="id"     type="text" placeholder="id"  */ onChange={this.updateInput} />
                                <Button color="white" justIcon round name="search" type="submit" value="search" 
                                onClick={this.onClick} >
                               
                                  <Search  /* onSubmit={this.onSubmit} */ />

                                </Button> 
                            
                                <CardBody>
                            {/* this.onSubmit()*/}
                             {/*   <Table1 />*/}

                           {/*   <FilteredList/>*/}

                                </CardBody>
                              </div>
                            </CardBody>



                          </Card>
                        </GridItem>
                      </GridContainer>
                    </form>
                  )
                },
                
               
              ]}
            />
          </GridItem>


        </GridContainer>






      </div>
    );
  }
}

export default withStyles(style)(TypographyPage);

