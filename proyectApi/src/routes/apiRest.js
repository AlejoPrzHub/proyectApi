const app = require("./app")

app.listen(process.env.PORT|| 3000)
// require("./database")

// app.listen(app.get("port"),function(){console.log("Server listen on port " + app.get("port"))})