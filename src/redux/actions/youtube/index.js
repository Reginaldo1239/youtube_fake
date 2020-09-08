
const addVideoToListAction =(values)=>{
    let {newVideos,nextPageToken,prevPageToken} = values;
    return{type:'ADD_VIDEO_TO_LIST',newVideos,nextPageToken,prevPageToken};
}
const restarVideoListAction  = (values)=>{
    let {newVideos,nextPageToken}=values;
    return{type:'RESTART_VIDEO_LIST',newVideos,nextPageToken};
}
export {
    addVideoToListAction,
    restarVideoListAction
}