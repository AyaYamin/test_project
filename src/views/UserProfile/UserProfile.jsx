import InputLabel from "@material-ui/core/InputLabel";
import withStyles from "@material-ui/core/styles/withStyles";
import BugReport from "@material-ui/icons/BugReport";

import React from "react";

import classNames from 'classnames';

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import InputForm from './InputForm';

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
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


/*const {  password } = '';
const passwordGroupClass = classNames('form-group',
{ 'has-error': !password.isValid };
)*/

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      confirmPassword: '',
      flag: false,
    };
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(event) {
    let state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }




  handleSubmit(event) {
    event.preventDefault();
    // console.log(this.state);
    postData(`http://localhost/material-dashboard-react-v1.5.0/teacher/src/views/UserProfile/Edit.php`, this.state)
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));
    // alert(`Updated Successfully ^_^`)
    event.target.reset();
    return (
      <div>
        <h4>Updated Successfuly</h4>
      </div>
    )

  }



  /* handleSubmit1(event) {
     event.preventDefault();
     //console.log(this.state);
     postData(`http://localhost/material-dashboard-react-v1.5.0/teacher/src/views/UserProfile/Edit1.php`, this.state)
       .then(data => console.log(JSON.stringify(data)))
       .catch(error => console.error(error));
       alert(`Updated Successfully ^_^`)
      event.target.reset();
 
   }*/

  resetPass = (event) => {
    event.preventDefault();
    console.log(this.state);
    postData(`http://localhost/material-dashboard-react-v1.5.0/teacher/src/views/UserProfile/Edit1.php`, this.state)
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));
    //  alert(`Updated Successfully ^_^`)
    event.target.reset();
    this.setState({ flag: true });
    return (
      <div>
        {this.state.flag ?
          <h4 color="primary">Updated Successfuly</h4> :
          <span> </span>}
      </div>

    )
  }
  validate(event) {
    var pass = event.target.value;
    console.log('aya');
    var reg = /^[A-Z]*$/;
    console.log('aya');
    var test = reg.test(pass);
    console.log('aya');
    if (test) {
      return (
        <div>

        </div>
      )
      // alert('pass');

    } else {
      console.log('aya');
      alert('fail');
    }
  }



  onChange = (e) => {
    const state = {
      ...this.state,
      [e.target.name]: {
        ...this.state[e.target.name],
        value: e.target.value,
      }
    };

    this.setState(state);
  }

  render() {

    const { classes } = this.props;
    const { password } = this.state;
    const passwordGroupClass = classNames('form-group',
      { 'has-error': !password.isValid }
    )


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
            <GridItem xs={12} sm={12} md={8}>
              <CustomTabs
                title="teacher:"
                headerColor="info"
                tabs={[
                  {
                    tabName: "Personal Information",
                    tabIcon: BugReport,
                    tabContent: (
                      <GridContainer justify="center">
                      <form action="Edit.php" onSubmit={this.handleSubmit} style={{ alignContent: "Center" }}>
                        <GridItem xs={12} sm={12} md={10}>
                          <Card justify="center">

                            <CardHeader color="info">
                              <h4 className={classes.cardTitleWhite}>Edit Your  Personal Information</h4>

                            </CardHeader>
                            <CardBody>
                              <GridContainer justify="center" style={{ alignContent: "Center" }}>
                                <GridContainer>
                                  <InputForm inputType="number" inputKey="id" inputLabel="User ID: " updateInput={this.updateInput} />
                                  <InputForm inputType="text" inputKey="address" inputLabel="Personal Address : " updateInput={this.updateInput} />
                                  <InputForm inputType="text" inputKey="city" inputLabel="City : " updateInput={this.updateInput} />
                                  <InputForm inputType="number" inputKey="phone" inputLabel="Phone : " updateInput={this.updateInput} />
                                </GridContainer>
                              </GridContainer>
                            </CardBody>

                            <CardFooter>
                              <Button color="info" name="UpdateProfile" type="submit" value="UpdateProfile">Update</Button>
                            </CardFooter>

                          </Card>
                        </GridItem>

                      </form>
                      </GridContainer>
                    )
                  },
                  {
                    tabName: "Password",
                    tabIcon: BugReport,
                    tabContent: (

                      <form action="Edit1.php" onSubmit={this.resetPass} className={passwordGroupClass}>
                        <GridItem xs={12} sm={12} md={10}>
                          <Card>

                            <CardHeader color="info">
                              <h4 className={classes.cardTitleWhite}>Reset Your Password</h4>

                            </CardHeader>
                            <CardBody>
                              <GridContainer>
                                <GridContainer>
                                  <InputForm inputType="number" inputKey="id" inputLabel="User ID: " updateInput={this.updateInput} />
                                  <InputForm onChange={this.onChange} inputType="password" inputKey="pwd" inputLabel="Current Password : " updateInput={this.updateInput} />
                                  <InputForm inputType="password" inputKey="new_pwd" inputLabel="New Password : " updateInput={this.updateInput} />
                                  <InputForm inputType="password" inputKey="ConfirmPassword" inputLabel="Confirm Password : " updateInput={this.updateInput} />

                                  
                                </GridContainer>
                              </GridContainer>
                            </CardBody>

                            <CardFooter>
                              <Button color="info" name="UpdateProfile" type="submit" value="UpdateProfile">Update </Button>
                            </CardFooter>

                          </Card>
                        </GridItem>

                      </form>



                    )
                  }
                ]}
              />
            </GridItem>


          </GridContainer>
      
      </div>
    );
  }
}

export default withStyles(styles)(UserProfile);
