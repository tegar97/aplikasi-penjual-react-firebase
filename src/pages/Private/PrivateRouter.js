import React from 'react'
import {Switch ,Route} from 'react-router-dom'
import SettingRouter from './setting/SettingRouter'
import ProdukRouter from './Produk/ProductRouter'
import Transactions from './Transactions/Transactions'
import Home from './Home/Home'

function PrivateRouter() {
    return (
            <Switch>
                <Route path="/setting" component={SettingRouter}/>
                <Route path="/product" component={ProdukRouter}/>
                <Route path="/transactions" component={Transactions}/>
                <Route component={Home}/>
            </Switch>
    )
}

export default PrivateRouter
