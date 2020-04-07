
   
export default class ApiYoutube {
    

    constructor(){
        this.host = 'https://www.googleapis.com/youtube/v3/';
        this.keyYoutube ='AIzaSyBdb_sqbf_6kA20QIe7a7WqLI5jNGeUPtA';
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