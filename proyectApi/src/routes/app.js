const express= require("express")
const cors = require("cors")
const errorHandling = require ("../error/errorHandling")


const app = express();

//app.set("port", process.env.PORT|| 3000)
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(usuarioRoutes);
app.use(librosRoutes);
app.use (function(req, res, next)
        {
            res.status(404).json
                        ({
                            error:true,
                            codigo: 404,
                            message:"Upss, something went wrong!"
                        })
        })
app.use(errorHandling);

module.exports = app;