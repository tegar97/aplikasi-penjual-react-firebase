import React from 'react'

import {Switch ,Route,Redirect} from 'react-router-dom'

//komponent halaman setting
import Users from './Users'
import Store from './Store'

function SettingRouter() {
    return (
        <div>
        <Switch>
            <Route path="/setting/users" component={Users}/>
            <Route path="/setting/store" component={Store}/>
            <Redirect to="/setting/users" />
        </Switch>
             
        </div>
    )
}

export default SettingRouter
