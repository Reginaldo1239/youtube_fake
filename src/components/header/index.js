import React from 'react';
import { GoSearch } from 'react-icons/go';

import './style.scss';
export default function Header(props){


    return(
        <header className="flex">
                <div className="container">
            
                  
                        <input id="search"  onChange={(e)=>{props.change_input_search(e.target.value)}} ></input>
                        <div className="btn_search"  onClick={(e)=>props.search_youtube(document.getElementById('search').value)}>
                        <GoSearch />
                        </div>   
                    </div> 
                
        </header>
    )
} 