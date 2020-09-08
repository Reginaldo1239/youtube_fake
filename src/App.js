import React from 'react';

import './App.scss';
import { Component } from 'react';
import {Provider} from 'react-redux';

import Rotas from './rotas'
import Store from './redux/store';


export default class App extends Component{
    constructor(props){
      super(props);
        this.state={
        
        }
    }


  componentDidMount() {

  }

render() {
 
  return (
    <Provider store={Store}>

<Rotas>

</Rotas>
    </Provider>
 
   
  );
}
}  




