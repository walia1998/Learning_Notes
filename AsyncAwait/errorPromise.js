function fetchData(url) {
    return new Promise(function (resolve, reject) {
      console.log("Started downloading from", url);
      setTimeout(function processDownloading() {
        let data = "Dummy Data";
        console.log("Donwload completed");
        reject(data);
      }, 7000);
    });
  }

  let x = fetchData("Start");
  x.then(function success(value) {
    console.log("value is ", value);
  }, 
  function err(err) {
    console.log("error is", err)
  }
)