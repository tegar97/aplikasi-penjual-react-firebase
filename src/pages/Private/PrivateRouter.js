import React from 'react'
import {Switch ,Route} from 'react-router-dom'
import SettingRouter from './setting/SettingRouter'

function PrivateRouter() {
    return (
        <div>
            <Switch>
                <Route path="/setting" component={SettingRouter}/>
            </Switch>
        </div>
    )
}

export default PrivateRouter
