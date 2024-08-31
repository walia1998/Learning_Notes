function fetchData(url) {
    return new Promise(function (resolve, reject) {
      console.log("Started downloading from", url);
      setTimeout(function processDownloading() {
        let data = "Dummy Data";
        console.log("Donwload completed");
        resolve(data);
      }, 4000);
    });
  }


  async function processing() {
    console.log("Entering Process")
    let value1 = await fetchData('www.google.com');
    console.log("google Downloaded")
    let value2 = await fetchData('www.instagram.com')
    console.log("instagram Downloaded")
    let value3 = await fetchData('www.facebook.com')
    console.log("facebook Downloaded")
    return value1 + value2
  }

  console.log("Start");
  setTimeout(function timer1() {
    console.log("timer 1")
  },0);
console.log("after setting timer 1")
  let x = processing();
  x.then(function (value) {
    console.log("finally processing promise resolves with ", value);
  });

  setTimeout(function timer2() {
    console.log("timer 2")
  }, 1000);
  setTimeout(function timer3() {
    console.log("timer 3")
  }, 0);

  console.log("End")