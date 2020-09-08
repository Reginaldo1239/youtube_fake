import React, { useEffect, useState } from 'react'
import './style.scss'
 export default function AwaiVideoAnimation(props){
   const [videosAwait,setVideosAwait] = useState([]);
     useEffect(()=>{
        totaldevideosAwait();
     })
  
      const  totaldevideosAwait = ()=>{
            for(let i = 0;i<props.max_result;i++){
                let videos = videosAwait;
                videos.push(i);
                setVideosAwait(videos);
            }
        }
    
    return(
    <div className="await_video_animation flex">
        {videosAwait.map((e,i)=>
            <div key={i} className="video_animation">
            
            <div className="circle">

            </div>
         </div>   
         )}
    
     
    </div>
    
    
    )
}