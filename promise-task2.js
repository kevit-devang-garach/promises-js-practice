const axios = require('axios');
const fs = require('fs');
const { resolve } = require('path/posix');
const main = async() => {
    // using promise .then .catch

    // function logFetch(url) {
    //     return axios.get(url)
    //       .then(text => {
    //         console.log(text);
    //       }).catch(err => {
    //         console.error('fetch failed', err);
    //       });
    // }
    // console.log("data ",logFetch('https://jsonplaceholder.typicode.com/comments?postId=1'));

    // using try catch and async to main
    // try{
    //     function logFetch(url) {
    //         try{
    //             return axios.get(url)
    //         }
    //         catch(err){
    //             console.log("error", err);
    //         }
    //     }
    //     console.log("data ", (await logFetch('https://jsonplaceholder.typicode.com/comments?postId=1')).data);
    // }
    // catch(err){
    //     console.log("error in main")
    // }

    // reading file and return result after contructor get data
    // class Storage {
    //     constructor() {
    //       this.cachePromise = fs.readFileSync('package.json','utf8');
    //     }
      
    //     async getAvatar(name) {
    //       const cache = await this.cachePromise;
    //       console.log("name", name)
    //       return console.log("result of data ",cache)
    //     }
    //   }
      
    //   const storage = new Storage();
    //   storage.getAvatar('devang').then();


    //   const wait = (time, msg) => { 
    //       return new Promise(rs => {
    //         setTimeout(() => {
    //             console.log(new Date().toUTCString(), msg)
    //             rs()
    //         }, time );
    //     })
    //   }
    // const wait = time => new Promise(resolve => setTimeout(resolve, time))
    //   async function series() {
    //     try{
    //         console.log(new Date().toUTCString());
    //         await wait(5000);
    //         console.log(new Date().toUTCString(),"A");
    //         await wait(7000);
    //         console.log(new Date().toUTCString(),"B");
    //         console.log("done");
    //     }catch(e){
    //         console.log("err",err);
    //     }
    //   }
    //   series()
    const arr = [1,2,3,4,5]
    const func = (item) => {
    //    console.log(item, `hello ${item}`);
      return axios.get(`https://jsonplaceholder.typicode.com/posts/${item}`)
    }
    async function arrayProcess(arr) {
        // async await using forEach, getting random output not in sequence
        // arr.forEach(async (item) => {
        //     console.log(`data: ${item}`,(await func(item)).data)
        // })

        // getting same result using for loop, getting output in sequence
        for(let i = 1; i<=arr.length; i++){
            console.log(`data: ${i}`,(await func(i)).data);
        }
        console.log('done');
    }
    arrayProcess(arr)
}
main();