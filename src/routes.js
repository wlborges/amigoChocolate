import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';


import Login from './pages/Login';
import Register from './pages/Register';
import MyProfile from './pages/MyProfile';
import ParticipantProfile from './pages/ParticipantProfile';
import Details from './pages/Details';
import AddParticipant from './pages/AddParticipant';
import RegisterDraw from './pages/RegisterDraw'
import Groups from './pages/Groups';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/groups" exact component={Groups}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/myprofile" exact component={MyProfile}/>
                <Route path="/participantprofile" exact component={ParticipantProfile}/>
                <Route path="/details/:_id" exact component={Details}/>
                <Route path="/addparticipant" exact component={AddParticipant}/>
                <Route path="/registerdraw" exact component={RegisterDraw}/>
            </Switch>
        </BrowserRouter>
    );
}