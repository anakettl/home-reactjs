import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/Landing'

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path='/fab-foundation' component={() => { 
                window.location.href = 'http://www.fabfoundation.org/index.php/the-fab-charter/index.html'; 
                return null;
            }}/>
        </BrowserRouter>
    )
}

export default Routes;