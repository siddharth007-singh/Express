const express = require("express");
const app = express();


//Importing the router file 
const router = require("./routers/auth_router");
app.use("/api", router);



//Starting the Server
const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server is runnig ${PORT}`);
})