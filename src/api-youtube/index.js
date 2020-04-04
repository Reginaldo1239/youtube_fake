

        const  host='https://www.googleapis.com/youtube/v3/';
        const keyYoutube = 'AIzaSyBPgWWX0ZQVlTQqxs167LxF9vKKGKN8Ttw'; 
    
        const  myHeaders = new Headers();
   
export default class ApiYoutube {
    

    constructor(){
        this.host = 'https://www.googleapis.com/youtube/v3/';
        this.keyYoutube ='AIzaSyBPgWWX0ZQVlTQqxs167LxF9vKKGKN8Ttw'  
        this.myHeaders=new Headers();
        this.myInit = { method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default',
        Authorization:'Bearer '+ this.keyYoutube,
        Accept: 'application/json'
     }; 
    } 
     get= (endpoint)=>{   
           return new Promise((resolver,reject)=>{
            fetch(this.host+endpoint+'key='+keyYoutube,this.myInit)
            .then((res)=>{
                resolver(res.json());

            }).catch((e)=>{
                reject(e.json());
            })

            

        })
    }
}