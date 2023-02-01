const app = require("./app")

app.listen(process.env.PORT|| 3000)


require("./database")
// app.listen(app.get("port"),function(){console.log("Server listen on port " + app.get("port"))})


//{"DB_HOST":"containers-us-west-30.railway.app","DB_NAME":"railway","DB_PASSWORD":"64kVBQEECPmFShDvRh1L","DB_PORT":"7592","DB_USER":"root"}