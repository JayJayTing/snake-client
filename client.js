const net = require('net');
const connect = function() {
    const conn = net.createConnection({ 
      host: '172.46.0.110',
      port: 50541
    });
    // interpret incoming data as text
    conn.setEncoding('utf8'); 
  
    conn.on("connect", ()=> {
      console.log("connected to server, hello from client");

      conn.write("Name: JAY");
      // conn.write("Move: up");
      
      //   setInterval(()=>{
      // conn.write("Move: up");
      // },50)
      
      
      
      
      
      // conn.write("Move: up");
      // conn.write("Move: left");
     
    })
    conn.on("data", (data)=>{
      console.log(data);
  
    } )

    
  
  
  
    return conn;
  }

  module.exports = {connect};