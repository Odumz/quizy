// import packages
const express = require("express"),
      cors = require("cors"),
      dotenv = require("dotenv"),
      app = express(),
      morgan = require('morgan');

const YAML = require('yamljs')
const { errorRes, successRes } = require('./utils/responseHandler');
      
// enable swagger for documentation
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

// log requests to the console with morgan
app.use(morgan("dev"))

// define swagger document
const swaggerDoc = YAML.load(`${process.cwd()}/swagger.yaml`);

// use swagger doc
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc, { explorer: true }))

// const upload = require('./utils/multer');
// const { cloudinary } = require('./utils/cloudinary')

// stock api
// const finnhub = require('./services/finnhub')

// import routes
const routes = require("./routes");

// enable env
dotenv.config();

// import port from env
const { PORT } = process.env;

// import db connection
require("./db/config")();

// Enable All CORS Requests
app.use(cors());

// Body-Parser Middleware
app.use(express.json({ limit: "50mb" })); // handle raw json
app.use(express.urlencoded({ limit: "50mb", extended: false })); // handle form submission

// enable routes
app.use("/api/v1", routes);

// simple route
app.get("/", (req, res) => successRes(res, 200, { message: 'Welcome to Quizy application with nodejs and mongodb.'}));

app.all('*', (req, res, next) => errorRes(next, 404, 'The Route you are requesting for does not exist'));

const port = process.env.PORT || PORT;

// error handling middleware
app.use((err,req,res,next) => {
  res.status(err.status >= 100 && err.status < 600 ? err.status : 500);
  res.send({
    status: err.status ? err.status : 500,
    error: err.message,
  });
});

// listen for requests
try {
  app.listen(port, () => {
    console.log(`App now running on port: ${port}`);
  });
} catch (e) {
  console.error(e);
}

module.exports = app;