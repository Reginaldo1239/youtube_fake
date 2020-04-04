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
    const [iniciar, setIniciar]= useState(true);
    useEffect(() => {
        // Atualiza o titulo do documento usando a API do browser
        document.title = `Você clicou ${count} vezes`;
        if(iniciar)
            NewRequestVideos();
            setIniciar(false)
      });
    const  NewRequestVideos = async()=>{
        let resultApiYoutube= new  ApiYoutube()
   
            resultApiYoutube  =   await resultApiYoutube.get( `search?part=snippet&maxResults=${maxResults}&q=${search}&type=video&order=${order}&`);
            console.log(resultApiYoutube)
            if(resultApiYoutube.items !=undefined){
            setTimeout(()=>{
                setVideos(resultApiYoutube.items)
            setNextPageToken(resultApiYoutube.nextPageToken)
            },2000) 
        }
        
      }

      const buscarMaisVideos = async ()=>{
            let resultApiYoutube = new ApiYoutube();
            resultApiYoutube = await resultApiYoutube.get( `search?part=snippet&maxResults=${maxResults}&q=${search}&type=video&order=${order}&pageToken=${nextPageToken}&`)
        console.log(resultApiYoutube)

           for(let video  of resultApiYoutube.items){
                let todosVideos = videos;
                todosVideos.push(video); 
                setVideos(todosVideos);
            }
            setNextPageToken(resultApiYoutube.nextPageToken)
      }
    return(
    
    <div className="home" onClick={()=>setCount(count +1)}>
        <Header  search_youtube={(value)=>{setSearch(value) ;}} ></Header>

        <Main> 
                {videos.length<maxResults&& 
                         <AwaitVideo max_result={maxResults}></AwaitVideo>   }
    
            {videos.map((e)=>
             <div className="container_video" key={e.id.videoId}>
                    <div className="video">
                                <figure>    
                                  <img src={e.snippet.thumbnails.high.url}></img>                                  
                                 </figure>
                     <div className="box_title">
                            <span>{e.snippet.title}</span>
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