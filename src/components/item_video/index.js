import React from 'react';
import {Link} from 'react-router-dom'
import './style.scss';
export default function ItemVideo(props){
    let {id,snippet}= props.values;
    return(
        <div className="container_video" key={id.videoId}>
        <div className="video">
        <a href={'/watch/'+id.videoId}>
                    <figure>    
                      <div className='img'  style={{backgroundImage: `url(${snippet.thumbnails.high.url})`}}></div>                                  
                     </figure>
                     </a> 
         <div className="box_title">
         <Link to={'/watch/'+id.videoId}>
                <span>{snippet.title}</span>
                </Link>
            </div>
      </div>
     </div>
    )
}
