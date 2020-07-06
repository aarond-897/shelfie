import React from 'react';
import {Switch, Route} from 'react-router-dom';


export default(
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/add' component={Form} />
        <Route exact path='/edit/:id' component={Form} />
    </Switch>
)