const log = (msg) => {
    console.log(new Date().toUTCString(),' ',msg);
}
const A = () => {
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            log("A");
            resolve();
        }, 2000);
    })
}

const B = () => {
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            log("B");
            resolve();
        }, 2000);
    })
}
const C = () => {
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            log("C");
            resolve();
        }, 1000);
    })
}
const D = () => {
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            log("D");
            resolve();
        }, 1000);
    })
}

const main = () => {
    log("Start");
    Promise.all(
        [ 
                A().then(() => {  BB=B() }), 
                D() 
        ])
        .then( (e) => {
            CC=C();
            Promise.all([BB,CC])
            .then(() => {
                log("End");
            })
        })
    .catch((e) =>{
        console.log("error:",e); 
     });
}
main();