function fetchData(url) {
    return new Promise(function (resolve, reject) {
      console.log("Started downloading from", url);
      setTimeout(function processDownloading() {
        let data = undefined ;
        console.log("Donwload completed");
        if( typeof data == "undefined") {
            reject(data);
        }else {
            resolve(data);
        }
        
      }, 2000);
    });
  }

  let x = fetchData("Start");
  x.then(function success(v) {
    console.log("value is ", v);
    
  })
  
  .then(function success1(v) {
    console.log("error is", v)
  })
.catch(function errorHandle(err) {
    console.log("error coming beacuse ", err)
})