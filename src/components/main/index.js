import React from 'react';
import './style.scss'
 export default function Main (props){

    return(
        <main className="center flex">
                {props.children}

        </main>
    )
}