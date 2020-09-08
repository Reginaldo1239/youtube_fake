import React from 'react';
import { GoSearch } from 'react-icons/go';
import {useHistory} from 'react-router-dom';

import './style.scss';
export default function Header(props){

    const history = useHistory();
    return(
        <header className="flex">
                <div className="container"> 
                        <input id="search"   ></input>
                        <div className="btn_search"  onClick={(e)=>history.push('/'+document.getElementById('search').value)}>
                        <GoSearch />
                        </div>   
                    </div> 
                
        </header>
    )
} 