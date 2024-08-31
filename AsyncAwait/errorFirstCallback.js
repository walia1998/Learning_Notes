function fetchCustom(url , fn) {
    // download content of the url 
    // this downloading can take sometime
    // We'll download the contet from utland then whatever is the result we nwill pass to the callback

    console.log("Starting downloading", url);
    setTimeout(function process() {
        console.log("Downlaod completed");
        let response  = "Dummy data";
        fn({error: "error"}, response);
    },3000);
   
}


fetchCustom("www.foogle.com" , function(err,response) {
    if(err) {
        console.log("error is ", err)
        return;
    }else {
        console.log("response is ", response)
    }
})