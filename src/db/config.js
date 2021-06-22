const path = require("path"),

      mongoose = require("mongoose"),
      dotenv = require("dotenv"),      
      dbConnectedMsg = `[Connection to mongodb successful... ]`,
      dbNotConnectedMsg = `[Connection to mongodb not successful... ]`;

// Config Env   
dotenv.config({ path: path.resolve(__dirname, "../../config.env") });

const mongoURI = process.env.MONGO_URI_LOCAL_CLOUD;
     
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }).then(() => {
      console.log(`${dbConnectedMsg}`)
  }).catch((err) => {
      console.error(`${dbNotConnectedMsg}`, err.message)
  });


