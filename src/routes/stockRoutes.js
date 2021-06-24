// import required constants
const express = require("express")
const finnhub = require("../services/finnhub"), // auth controller
      router = express.Router(); // enable router

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
router.get("/", (req, res) =>{
      res.status(200).json({
            message: "This is stock routes"
      })
});

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
*   /stocks/news-sentiment:
*     get:
*       summary: get news sentiment
*       tags: [Stock]
*       responses:
*         "200":
*           description: get news sentiment
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
router.get("/news-sentiment", finnhub.getNewsSentiment);

/**
*  @swagger
*  paths:
*   /stocks/basic-financials:
*     get:
*       summary: get basic financials
*       tags: [Stock]
*       responses:
*         "200":
*           description: get basic financials
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
router.get("/basic-financials", finnhub.getBasicFinancials);

/**
*  @swagger
*  paths:
*   /stocks/ipo-calendar:
*     get:
*       summary: get ipo calendar
*       tags: [Stock]
*       responses:
*         "200":
*           description: get ipo calendar
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
router.get("/ipo-calendar", finnhub.getIPOCalendar);

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
*   /stocks/forex-candles:
*     get:
*       summary: get forex candles
*       tags: [Stock]
*       responses:
*         "200":
*           description: get forex candles
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
router.get("/forex-candles", finnhub.getForexCandles);

/**
*  @swagger
*  paths:
*   /stocks/forex-rates:
*     get:
*       summary: get forex rates
*       tags: [Stock]
*       responses:
*         "200":
*           description: get forex rates
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
router.get("/forex-rates", finnhub.getForexRates);

/**
*  @swagger
*  paths:
*   /stocks/crypto-candle:
*     get:
*       summary: get crypto candle
*       tags: [Stock]
*       responses:
*         "200":
*           description: get crypto candle
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
router.get("/crypto-candle", finnhub.getCryptoCandle);

module.exports = router;