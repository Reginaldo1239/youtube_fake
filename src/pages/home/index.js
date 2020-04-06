import React, { useEffect,useState } from 'react';
import Header from '../../components/header'
import Main from '../../components/main';
import AwaitVideo  from '../../components/animations/await_video';
import ApiYoutube from '../../api-youtube';
import './style.scss';
export default function Home (props){
    const [count, setCount] = useState(0);
    const [nextPageToken,setNextPageToken ] =useState('');
    const [maxResults,setMaxResults] = useState(16);
    const [search,setSearch] =useState(''); 
    const [videos,setVideos] = useState([]);
    const [order,setOrder] = useState('relevance')
    const [updateListVideo, setUpdateListVideo]= useState(true);

    useEffect(() => {


      
      if(window.location.search.indexOf('?q=') != -1 && updateListVideo){
        let q = window.location.search.split('?q=')[1];
          NewRequestVideos(q,order);
          setUpdateListVideo(false)
      }else{
        if(updateListVideo){
          NewRequestVideos(search,order);
          setUpdateListVideo(false)
           }     
           }
      

      });


    const  NewRequestVideos = async(q,forder)=>{
               setVideos([]);
               let resultApiYoutube= new  ApiYoutube()
               resultApiYoutube  =   await resultApiYoutube.get( `search?part=snippet&maxResults=${maxResults}&q=${q}&type=video&order=${forder}&`);
                    if(resultApiYoutube.items !=undefined){
               setVideos(resultApiYoutube.items)
               setNextPageToken(resultApiYoutube.nextPageToken)
               console.log(resultApiYoutube)
                }}


      const buscarMaisVideos = async ()=>{
            let resultApiYoutube = new ApiYoutube();
            resultApiYoutube = await resultApiYoutube.get( `search?part=snippet&maxResults=${maxResults}&q=${search}&type=video&order=${order}&pageToken=${nextPageToken}&`)
               for(let video  of resultApiYoutube.items){
                let todosVideos = videos;
                todosVideos.push(video); 
                setVideos(todosVideos);
              }
            setNextPageToken(resultApiYoutube.nextPageToken)
      }
    return(
    <div className="home">
        <Header   change_input_search={(value)=>{setSearch(value)} }  search_youtube={(value)=>{ NewRequestVideos(search,order)}} ></Header>   
       
          <Main> 
          <div className="filter flex">
         
                <select  onChange={(e)=>{setOrder(e.target.value); setUpdateListVideo(true)}}>
                        <option value='relevance'>revelancia</option>
                        <option value='date'>data</option>
                        <option value='videoCount'>videos enviados</option>
                        <option value='viewCount'>visualizações</option>
                </select>
            </div>    
                {videos.length<maxResults&& 
                         <AwaitVideo max_result={maxResults}></AwaitVideo>   }
    
            {videos.map((e)=>
               <div className="container_video" key={e.id.videoId}>
                    <div className="video">
                    <a href={'/watch/'+e.id.videoId}>
                                <figure>    
                                  <img src={e.snippet.thumbnails.high.url}></img>                                  
                                 </figure>
                                 </a> 
                     <div className="box_title">
                     <a href={'/watch/'+e.id.videoId}>
                            <span>{e.snippet.title}</span>
                            </a>
                        </div>
                  </div>
                 </div>
            

            )} 
        
                        <div className="container center">
                            {videos.length>0 && 
                             <span onClick={()=>buscarMaisVideos()}> ver mais</span> }
                         
                            </div>
        </Main>
          
        </div>)
}