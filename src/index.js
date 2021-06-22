const express = require("express"),

      cors = require("cors"),
      dotenv = require("dotenv");
      app = express();

const userRouter = require("./routes/userRoutes");
      // stockRouter = require("./routes/stockRoutes");

// Config Env   
dotenv.config({path: "./config.env"});

// DB
require("./db/config");

// Enable All CORS Requests
app.use(cors());

// Body-Parser Middleware
app.use(express.json()); // handle raw json
app.use(express.urlencoded({extended: false})); // handle form submission

// ROUTES
app.use("/api/v1", userRouter);
// app.use("/api/v1/stock", stockRouter);

// SWAGGER
require("./utils/swagger");

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`App now running on port: ${PORT}`);
});