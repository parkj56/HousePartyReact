import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";
import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import Info from "./Info";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomCode: null,
    };
    this.clearRoomCode = this.clearRoomCode.bind(this);
  }

  async componentDidMount() {
    fetch("http://127.0.0.1:8000/api/user-in-room")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          roomCode: data.code,
        });
      });
  }
  
  clearRoomCode() {
    this.setState({
      roomCode: null,
    });
  }

  renderHomePage() {
    if(this.state.roomCode ==null){
      <CreateRoomPage></CreateRoomPage>
    }
    else{
      return (
      <Grid container spacing={3}>
        <Grid item xs={12} align="center">
          <Typography variant="h3" compact="h3">
            House Party
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <ButtonGroup disableElevation variant="contained" color="primary">
            <Button color="primary" to="/join" component={Link}>
              Join a Room
            </Button>
            <Button color="default" to="/info" component={Link}>
              Info
            </Button>
            <Button color="secondary" to="/create" component={Link}>
              Create a Room
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    );
    }
    
  }

  
  render() {
    return (
      <BrowserRouter>
      <Routes>
        
          <Route
            exact
            path="/"
            element={this.renderHomePage()}
          />
          <Route path="/join" element={<RoomJoinPage/>} />
          <Route path="/info" element={<Info/>} />
          <Route path="/create" element={<CreateRoomPage/>} />
          {/* <Route
            path="/room/:roomCode"
            render={(props) => {
              return <Room {...props} leaveRoomCallback={this.clearRoomCode} />;
            }} */}
          
      </Routes>
      </BrowserRouter>
    );
  }
}
