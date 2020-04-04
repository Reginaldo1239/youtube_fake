import React, { Component } from 'react';

import {BrowserRouter, Switch,Route} from 'react-router-dom';
import Home from '../pages/home'
import App from '../App';


 class Rotas extends Component{

    render(){
        return(
            <BrowserRouter>
                        <Switch>
                            <Route exact={true}  path="/">
                                <Home></Home>
                            </Route>
                        
                        </Switch> 
            </BrowserRouter>
        
            
            
        );
    }
 } 
 export default Rotas;