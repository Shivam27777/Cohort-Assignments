
function isItAsync(){
    return new Promise(function(resolve){
        let i = 0;
        while(i<1000000){
            i++;
        }
        resolve();
    })
    
}
isItAsync().then(()=>console.log("done with promise"));
console.log("random");