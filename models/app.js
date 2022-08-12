const express = require('express');
var cors = require('cors');


class Server{

    constructor(){

        this.port = process.env.PORT || 3000
        this.app = express();
        this.homePath = '/'
        
        this.middlewares();

        //routes();

        //dataBase();

    }

    //async dataBase(){}
    

    middlewares(){
        this.app.use(cors());
        this.app.use(express.static('public'));
    }

    //routes(){}



    listener(){
        this.app.listen(this.port, ()=>{
            console.log(`Server running on port ${this.port}`);
        })
    }



}


module.exports = Server