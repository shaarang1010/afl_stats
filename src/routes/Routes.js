import React from 'react';

import { Switch, Route } from 'react-router';

import Homepage from '../containers/pages/homepage/Homepage';
import TeamPage from '../containers/pages/teampage/TeamPage';
import TipsPage from '../containers/pages/tips/TipsPage';
import GamePage from '../containers/pages/gamespage/GamePage';

import Navbar from '../components/Menu/Navbar';


const menuItems = [
    { name: "Team", link: `/team`, key: 'Item1' },
    { name: "Games", link: "/games", key: 'Item2' },
    { name: "Tips", link: "/tips", key: 'Item3' },
  ];

const Routes = (props) =>{
    return(
        <div>
            <Navbar menuItems={menuItems} />
            <Switch>
                <Route exact path='/team' component={TeamPage} />
                <Route exact path='/tips' component={(props)=> <TipsPage {...props} />} />
                <Route exact path='/games' component={(props) => <GamePage {...props} />} />
                <Route exact path='/' component={Homepage} />
            </Switch>
        </div>
    )
}

export default Routes;
