import React from 'react'

import {Switch ,Route} from 'react-router-dom'
import ProductEdit from './ProductEdit'
import GridProduct from './GridProduct'



function ProdukRouter() {
    return (
       <Switch>
            <Route path="/product/edit/:produkId" component={ProductEdit}/>
            <Route component={GridProduct}/>
       </Switch>
    )
}

export default ProdukRouter
