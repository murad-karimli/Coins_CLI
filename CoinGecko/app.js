import https from "https";
import fs from "fs";
let myData={

}
const options = {
    hostname: 'api.coingecko.com',
    port: 443,
    path: '/api/v3/coins/list',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  
  const req = https.request(options, res => {
   
  
    res.on('data', function (d) {
      let buff=Buffer.from(d);
      let arr=buff.toString();
      fs.writeFile("./cache/coins.json",arr,(err)=>
      {
        if (err) throw err;
      })
    });
  });
  
  req.on('error', error => {
    console.error(error);
  }); 
  req.end();

  fs.readFile("./cache/coins.json",(err,data)=>
  {
    console.log(JSON.parse(data)[0].id)
  })