import React from 'react';

import { Switch, Route } from 'react-router';

import Homepage from '../containers/pages/homepage/Homepage';
import TeamPage from '../containers/pages/teampage/TeamPage';

const Routes = () =>{
    return(
        <div>
            <Switch>
                <Route exact path='/team/:teamName/:id' component={(props)=> <TeamPage year='2021' {...props} /> } />
                <Route exact path='/' component={Homepage} />
            </Switch>
        </div>
    )
}

export default Routes;
