import React from 'react';

import { Switch, Route } from 'react-router';

import Homepage from '../containers/pages/homepage/Homepage';
import TeamPage from '../containers/pages/teampage/TeamPage';
import TipsPage from '../containers/pages/tips/TipsPage';

import Navbar from '../components/Menu/Navbar';


const menuItems = [
    { name: "Team", link: `/team` },
    { name: "Games", link: "/games" },
    { name: "Tips", link: "/tips" },
  ];

const Routes = (props) =>{
    return(
        <div>
            <Navbar menuItems={menuItems} />
            <Switch>
                <Route exact path='/team/:teamName/:id' component={(props)=> <TeamPage year='2021' {...props} /> } />
                <Route exact path='/tips' component={(props)=> <TipsPage {...props} />} />
                <Route exact path='/' component={Homepage} />
            </Switch>
        </div>
    )
}

export default Routes;
