import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import { Switch } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Search from "@material-ui/icons/Search";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
import Dashboard from "@material-ui/icons/Dashboard";

import React, { Component } from "react";

import classNames from "classnames";

import { Route, Redirect } from 'react-router';

import UserProfile from "views/UserProfile/UserProfile.jsx";

import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import headerLinksStyle from "assets/jss/material-dashboard-react/components/headerLinksStyle.jsx";

//import Buildp from './Table_p';
function getData(url , data ) {
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
   // body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
   // .then(response => response.json()); // parses response to JSON
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
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then(response => response.text()); // parses response to JSON
}






class HeaderLinks extends React.Component {

  constructor(props) {
    super(props);
    //this.home = this.home.bind(this);


    //this.getName = this.getName.bind(this);
  

  this.state = {
    open: false
  };

}



  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  handleClick = (e) => {
    e.preventDefault();
    window.location.assign('/admin/user/');
  }


  
  handleClick1 = (e) => {
    e.preventDefault();
    window.location.assign('/admin/notifications/');
  }


 /* getName=()=>{
   // event.preventDefault();
    console.log(this.state);
    getData(`http://localhost/material-dashboard-react-v1.5.0/src/components/Header/Pname.php`, this.state)
        .then(data => console.log(JSON.stringify(data)))
        .catch(error => console.error(error));
    
      /*  return ( 
           <Buildp/> 
           );*/
    



  componentDidMount() {
   /* var th = this;
    getData(`http://localhost/newwwwwwwww/edit-master/src/components/Header/Pname.php`)

        .then(function (event) {
            th.setState({
                data: event//.data
            });
        })*/
}

  render() {

    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div>

  
      <Button
         // action="Pname.php"
         color={window.innerWidth > 2000 ? "transparent" : "primary"}
         justIcon={window.innerWidth > 2000}
          simple={!(window.innerWidth > 2000)}
          aria-label="ExitToAppIcon"
        >
         { /*this.getName()*/}
         <a><h4>Name</h4></a> 
     </Button>
    




        <Button
          color={window.innerWidth > 2000 ? "transparent" : "primary"}
          justIcon={window.innerWidth > 2000}
          simple={!(window.innerWidth > 2000)}
          aria-label="ExitToAppIcon"
        //className={classes.buttonLink}
        >
         <a><h4>LogOut</h4></a> 

        </Button>


        <Button
          aria-label="Dashboard"
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          color={window.innerWidth > 959 ? "transparent" : "white"}
          className={classes.buttonLink}

        >
 <a
            onClick={(e) => { 
            e.preventDefault();
            document.location.href = "../../views/Dashboard/Dashboard.jsx"; }}><Dashboard /> </a>
         
        </Button>






        <div className={classes.manager}>
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            color={window.innerWidth > 959 ? "transparent" : "white"}
            justIcon={window.innerWidth > 959}
            simple={!(window.innerWidth > 959)}
            aria-owns={open ? "menu-list-grow" : null}
            aria-haspopup="true"
            onClick={this.handleToggle}
            className={classes.buttonLink}
          >
     <a> <Notifications onClick={this.handleClick1} /></a>
          </Button>
        </div>


        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-label="Person"
          className={classes.buttonLink}
        >
          <a><Person onClick={this.handleClick} /></a>

        </Button>




      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
