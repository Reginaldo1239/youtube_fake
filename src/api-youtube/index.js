
   
export default class ApiYoutube {
    

    constructor(){
        this.host = 'https://www.googleapis.com/youtube/v3/';
        this.keyYoutube ='AIzaSyBfTbIGoDLSWgG5YGgYIBq3-P1m-IxN3oc';
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
           return new Promise(async (resolver,reject)=>{
        fetch(this.host+endpoint+'&key='+this.keyYoutube,this.myInit)
            .then((res)=>{
              
              resolver({status:res.status, data:res.json()});
            }).catch((e)=>{
                console.log(e);
               reject(e.json()); 
            })
        
        }) 
    }
}