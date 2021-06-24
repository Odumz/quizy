// import packages
const express = require("express"),
      cors = require("cors"),
      dotenv = require("dotenv"),
      app = express(),
      morgan = require('morgan');

      
// enable swagger for documentation
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

// log requests to the console with morgan
app.use(morgan("dev"))

// define swagger options
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Stocka API',
      version: '1.0.0',
      description: 'This is an inventory digital solution that will take account of trader\'s sales and stocks, calculates their profits or losses over a specific period of time and offer suggestions to build profits',
    },
    servers: [
      {
        url: 'http://localhost:5002/api/v1'
      }
    ]
  },
  apis: [`${__dirname}/routes/*.js`], // files containing annotations as above
};

const specs = swaggerJsDoc(swaggerOptions);

// swagger doc
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs, { explorer: true }))

// const upload = require('./utils/multer');
// const { cloudinary } = require('./utils/cloudinary')
// stock api
const finnhub = require('./services/finnhub')

// import routes
const routes = require("./routes");

// enable env
dotenv.config({path: "./.env.local"});
// dotenv.config({path: "./.env.development"});
// dotenv.config({path: "./.env.production"});

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
app.get("/", (req, res) => {
  res.status(200).send('Welcome to Stocka application with nodejs and mongodb.');
});


const port = process.env.PORT || PORT;

// error handling middleware
app.use((err,req,res,next) => {
    //console.log(err);
    res.status(422).send({error: err.message});
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