import React,{useEffect,useState} from 'react';
import Api from '../../api-youtube';
import ApiYoutube from '../../api-youtube';
import Header from '../../components/header';
import Main from '../../components/main';
import './style.scss'
export default function WatchVideo(){

    const[idVideo,setIdVideo] =  useState(window.location.pathname.split('/')[2]);
    const[infoVideo,setInfoVideo] = useState(null);
    const [arrayDescription,setArrayDescription]=useState(null);
    const [searchValue,setSearchValue] = useState('');
    const [updateVideo,setUpdateVideo] = useState(true);

    useEffect(() => {
        if(updateVideo){
            getVideo();
            setUpdateVideo(false);  
        }            
         
      });

    const  getVideo = async () =>{
        let video = new ApiYoutube();
            let result =  await video.get(`videos?part=snippet&id=${idVideo}&`)
            setInfoVideo(result.items[0])
        let   arrayDescription = result.items[0].snippet.description.split(': ');
        setArrayDescription(arrayDescription);
           arrayDescription.map((e)=>{
               console.log(e) 
           })
        } 
      
    return(
        <div className="watch_video">
            <Header change_input_search={(value)=>{setSearchValue(value)}}  search_youtube={()=>{window.location.href=`/?q=${searchValue}`}} ></Header>
                <Main>
            {infoVideo != null&&
                <div className="container">
                <h2>{infoVideo.snippet.title}</h2>
                <iframe src={`https://www.youtube.com/embed/${idVideo}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="box_text">
                        {arrayDescription != undefined && arrayDescription.map((e)=>
                            <p>{e}</p>
                        )}
                    </div>
                </div>
}
                </Main>
        </div>
    )
} 