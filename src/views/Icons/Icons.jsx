import withStyles from "@material-ui/core/styles/withStyles";
import Hidden from "@material-ui/core/Hidden";

import React,{Component} from "react";

import Card from "components/Card/Card.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import iconsStyle from "assets/jss/material-dashboard-react/views/iconsStyle.jsx";

import Build from './Table';



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



 
  class Icons extends React.Component {

    constructor(props){
          super(props);
          this.state={
            data:[],
          };

          this.getClasses=this.getClasses.bind(this);
    }

    getClasses=(e)=>{
      getData(`http://localhost/xx-master/src/views/Icons/getclass.php`)
          .then(function (event) {
              //  this.setState({
               //     data: event//.data
               // });
            })

        return(<div><Build/></div>);
    }



  render(){
    const { classes } = this.props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>

          <CardHeader plain color="info">
           <center><h4 className={classes.cardTitleWhite} > ALL My Available Classes </h4></center> 
           <p className={classes.cardCategoryWhite}></p>  
          </CardHeader>

          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <Card >
                 <center>{this.getClasses()}</center>  
                </Card>
              </GridItem>
            </GridContainer>

          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );}
}



export default withStyles(iconsStyle)(Icons);
