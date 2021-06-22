const swaggerJsdoc = require("swagger-jsdoc"),
      swaggerUi = require("swagger-ui-express");
      
const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Stocka API",
        version: "0.1.0",
        description:
          "This is the documentation for stocka API",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Stocka",
          url: "https://stocka.com",
          email: "info@email.com",
        },
      },
      servers: [
        {
          url: "http://localhost:5002",
        },
      ],
    },
    apis: ["./routes/*.js"],
  };
  
  
  const specs = swaggerJsdoc(options);
  
  app.use(
    "/stocka-api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
  );