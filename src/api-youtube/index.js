
   
export default class ApiYoutube {
    

    constructor(){
        this.host = 'https://www.googleapis.com/youtube/v3/';
        this.keyYoutube ='AIzaSyBUKkrIe8CXTNOiZ7iqJ1c5-SxAir3jm7M'  
        this.myHeaders=new Headers();
        this.myInit = { method: 'GET',
        headers: this.myHeaders,
        mode: 'cors',
        cache: 'default',
        Authorization:'Bearer '+ this.keyYoutube,
        Accept: 'application/json'
     }; 
    } 
     get= (endpoint)=>{   
           return new Promise((resolver,reject)=>{
            fetch(this.host+endpoint+'key='+this.keyYoutube,this.myInit)
            .then((res)=>{
                resolver(res.json());

            }).catch((e)=>{
                reject(e.json());
            })

            

        })
    }
}