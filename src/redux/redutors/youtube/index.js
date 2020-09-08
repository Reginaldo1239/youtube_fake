
const stateInitial = {nextPageToken:null,prevPageToken:null,listVideos:[],listVideosWatch:[]}
export default function YoutubeReducer (state=stateInitial,action){
    console.log(state)
    switch(action.type){
        case 'ADD_VIDEO_TO_LIST':
            return {
                ...state,listVideos:state.listVideos.concat(action.newVideos),
                nextPageToken:action.nextPageToken,
                prevPageToken:action.prevPageToken
            }
        case 'RESTART_VIDEO_LIST':
            return {
                ...state,listVideos:action.newVideos,
                    nextPageToken:action.nextPageToken
            }
    default:
        return state; 
    } 
}