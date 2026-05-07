function sleep(millis){
return new Promise(resolve=>setTimeout(resolve, millis))
}

sleep(300).then(()=>console.log("done"))