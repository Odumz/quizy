// import required constants
const express = require("express");
const { authenticateUser } = require("../middleware/auth");
const finnhub = require("../services/finnhub"), // auth controller
      router = express.Router(); // enable router;

const { successRes } = require('../utils/responseHandler');

/**
 * @swagger
 * tags:
 *   name: Stock
 *   description: Stock endpoints
 */


/**
*  @swagger
*  paths:
*   /stocks:
*     get:
*       summary: test stock route
*       tags: [Stock]
*       responses:
*         "200":
*           description: test stock route
*           content:
*             application/json:
*               schema:
*                 $ref: ''
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Response status
 *                 token:
 *                   type: string
 *                   description: JWT client token
 *             example: 
 * 
*/
router.get("/", (req, res) => successRes(res, 200, { message: 'Welcome to the Stocka API v1.0! This is stock routes'}));

/**
*  @swagger
*  paths:
*   /stocks/company-profile:
*     get:
*       summary: Get company profile
*       tags: [Stock]
*       responses:
*         "200":
*           description: Get company profile.
*           content:
*             application/json:
*               schema:
*                 $ref: ''
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Response status
 *                 token:
 *                   type: string
 *                   description: JWT client token
 *             example: 
 * 
*/
router.get("/company-profile", finnhub.getCompanyProfile);


/**
*  @swagger
*  paths:
*   /stocks/market-news:
*     get:
*       summary: get market news
*       tags: [Stock]
*       responses:
*         "200":
*           description: get market news
*           content:
*             application/json:
*               schema:
*                 $ref: ''
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Response status
 *                 token:
 *                   type: string
 *                   description: JWT client token
 *             example: 
 *               
*/
router.get("/market-news", finnhub.getMarketNews);

/**
*  @swagger
*  paths:
*   /stocks/company-news:
*     get:
*       summary: get company news
*       tags: [Stock]
*       responses:
*         "200":
*           description: get company news
*           content:
*             application/json:
*               schema:
*                 $ref: ''
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Response status
 *                 token:
 *                   type: string
 *                   description: JWT client token
 *             example: 
 *               
*/
router.get("/company-news", finnhub.getCompanyNews);

/**
*  @swagger
*  paths:
*   /stocks/social-sentiment:
*     get:
*       summary: get social sentiment
*       tags: [Stock]
*       responses:
*         "200":
*           description: get social sentiment
*           content:
*             application/json:
*               schema:
*                 $ref: ''
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Response status
 *                 token:
 *                   type: string
 *                   description: JWT client token
 *             example: 
 *               
*/
router.get("/social-sentiment", finnhub.getSocialSentiment);

/**
*  @swagger
*  paths:
*   /stocks/peers:
*     get:
*       summary: get peers
*       tags: [Stock]
*       responses:
*         "200":
*           description: get peers
*           content:
*             application/json:
*               schema:
*                 $ref: ''
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Response status
 *                 token:
 *                   type: string
 *                   description: JWT client token
 *             example: 
 *               
*/
router.get("/peers", finnhub.getPeers);

/**
*  @swagger
*  paths:
*   /stocks/earning-suprises:
*     get:
*       summary: get earning surprises
*       tags: [Stock]
*       responses:
*         "200":
*           description: get earning surprises
*           content:
*             application/json:
*               schema:
*                 $ref: ''
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Response status
 *                 token:
 *                   type: string
 *                   description: JWT client token
 *             example: 
 *               
*/
router.get("/earning-surprises", finnhub.getEarningSurprises);

/**
*  @swagger
*  paths:
*   /stocks/recommendation-trends:
*     get:
*       summary: get recommendation trends
*       tags: [Stock]
*       responses:
*         "200":
*           description: get recommendation trends
*           content:
*             application/json:
*               schema:
*                 $ref: ''
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Response status
 *                 token:
 *                   type: string
 *                   description: JWT client token
 *             example: 
 *               
*/
router.get("/recommendation-trends", finnhub.getRecommendationTrends);

/**
*  @swagger
*  paths:
*   /stocks/stock-candle:
*     get:
*       summary: get stock candle
*       tags: [Stock]
*       responses:
*         "200":
*           description: get stock candle
*           content:
*             application/json:
*               schema:
*                 $ref: ''
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Response status
 *                 token:
 *                   type: string
 *                   description: JWT client token
 *             example: 
 *               
*/
router.get("/stock-candle", finnhub.getStockCandle);

/**
*  @swagger
*  paths:
*   /stocks/earning-calendar:
*     get:
*       summary: get earnings calendar
*       tags: [Stock]
*       responses:
*         "200":
*           description: get earnings calendar
*           content:
*             application/json:
*               schema:
*                 $ref: ''
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Response status
 *                 token:
 *                   type: string
 *                   description: JWT client token
 *             example: 
 *               
*/
router.get("/earning-calendar", finnhub.getEarningsCalendar);

/**
*  @swagger
*  paths:
*   /stocks/quote:
*     get:
*       summary: get quote
*       tags: [Stock]
*       responses:
*         "200":
*           description: get quote
*           content:
*             application/json:
*               schema:
*                 $ref: ''
*               properties:
*                 status:
*                   type: string
*                   description: Response status
*                 token:
*                   type: string
*                   description: JWT client token
*             example: 
*               
*/
router.get("/quote", finnhub.getQuote);

module.exports = router;