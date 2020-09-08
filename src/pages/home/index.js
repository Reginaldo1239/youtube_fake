import React, { useEffect,useState } from 'react';
import {useDispatch,useSelector } from 'react-redux';
import {addVideoToListAction,restarVideoListAction} from '../../redux/actions/youtube';
import Header from '../../components/header'
import Main from '../../components/main';
import AwaiVideoAnimation  from '../../components/animations/await_video_animation';
import ApiYoutube from '../../api-youtube';
import ItemVideo from '../../components/item_video';
import {useHistory,useParams} from 'react-router-dom';
import './style.scss';
export default function Home (props){
  const {q} = useParams();
    const [maxResults,setMaxResults] = useState(16);
    const [order,setOrder] = useState('relevance')
    const [completedRequest,setCompletedRequest] = useState(false);
    const dispatch =useDispatch();
    const {nextPageToken,prevPageToken,listVideos}=useSelector(state=>state.YoutubeReducer);
 
    
    useEffect(() => {
          if(listVideos.length===0 ||q!= undefined){
            NewRequestVideos(q,order);
          }
      },[q,order]); 


 
    const  NewRequestVideos = async()=>{
      setCompletedRequest(false);
               let resultApiYoutube= new  ApiYoutube()
               resultApiYoutube  =   await resultApiYoutube.get( `search?part=snippet&maxResults=${maxResults}&q=${q}&type=video&order=${order}`);
               if(resultApiYoutube.status===200){
                resultApiYoutube = await resultApiYoutube.data;
                console.log(resultApiYoutube)
                    dispatch(restarVideoListAction(
                      {
                        newVideos:resultApiYoutube.items,
                        nextPageToken:resultApiYoutube.nextPageToken
                      }));
                      setCompletedRequest(true)
                }else{
                  resultApiYoutube = await resultApiYoutube.data;
                  setCompletedRequest(true)
                }}


      const buscarMaisVideos = async ()=>{
        setCompletedRequest(false)
            let resultApiYoutube = new ApiYoutube();
            resultApiYoutube = await resultApiYoutube.get( `search?part=snippet&maxResults=${maxResults}&q=${q}&type=video&order=${order}&pageToken=${nextPageToken}&`)
            if(resultApiYoutube.status===200){
              resultApiYoutube = await resultApiYoutube.data;  
              console.log(resultApiYoutube)
              dispatch(addVideoToListAction(
                {
                  newVideos:resultApiYoutube.items,
                  nextPageToken:resultApiYoutube.nextPageToken,
                  prevPageToken:resultApiYoutube.prevPageToken
                })); 
                setCompletedRequest(true)
            }
        
      }
    return(
    <div className="home">
      
        <Header ></Header>   
       
          <Main> 
        {/*  <div className="filter">
                <select  onChange={(e)=>{setOrder(e.target.value);}}>
                        <option value='relevance'>revelancia</option>
                        <option value='date'>data</option>
                        <option value='videoCount'>videos enviados</option>
                        <option value='viewCount'>visualizações</option>
                </select>
    </div>    */}
                {!completedRequest&& 
                         <AwaiVideoAnimation max_result={maxResults}></AwaiVideoAnimation>}
            {listVideos.map((e,index)=>
          <ItemVideo key={index} values={e}></ItemVideo>
            )} 
        
                        <div className="container center">
                            {listVideos.length>0 && 
                             <span onClick={()=>buscarMaisVideos()}> ver mais</span> }
                            </div>
        </Main>

        <footer>
              <span> todos direitos reservados 2020</span>
        </footer>
                              
        </div>)
}