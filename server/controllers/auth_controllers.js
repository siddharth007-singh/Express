const {response} = require("express");

const home = async (req, res)=>{
    try {
        res.status(200).send("This data is comming from router");
    }
    catch (e) {
        console.log(e);
    }
}


module.exports = {home};
//we have to export the functions in that