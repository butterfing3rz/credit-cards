import React from 'react'
import { Routes, Route } from "react-router-dom"

import IndexProduct from '../components/products/Index'

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={ <IndexProduct /> } />
            </Routes>
        </div>
    )
}

export default Router
