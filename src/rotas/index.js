import React, { Component } from 'react';

import {BrowserRouter, Switch,Route } from 'react-router-dom';
import Home from '../pages/home'
import WatchVideo from '../pages/watch-video';
import App from '../App';


 class Rotas extends Component{

   

    render(){
        return(
            <BrowserRouter>
                        <Switch>
                            <Route exact={true}  path="/"><Home></Home>  </Route>
                            <Route exact={true}  path="/:q" component={Home}></Route>
                            <Route   path="/watch/:id_video" component={WatchVideo}></Route>
                        </Switch> 
            </BrowserRouter>
        
            
            
        );
    }
 } 
 export default Rotas;