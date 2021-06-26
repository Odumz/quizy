// import packages
const finnhub = require('finnhub')
const axios = require('axios');
require('dotenv').config();
const { FINNHUB_API, FINNHUB_BASE_URL } = process.env;
const { errorRes, successRes } = require('../utils/responseHandler');

// Load method categories.
const lodash = require('lodash');

// console.log(FINNHUB_API)

const api_key = finnhub.ApiClient.instance.authentications['api_key']
// console.log("first api_key", api_key)
api_key.api_key = FINNHUB_API
// console.log("second api_key", api_key)

class stockAPI {
    static async webhooks (req, res) {
        await axios.post('https://finnhub.io/api/v1/webhook/add?token=c36tleqad3ib6g7eequg', {'event': 'earnings', 'symbol': 'AAPL'})
        .then((response) => {
            // console.log("webhook", response.data)
            const webhook  = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async listWebhooks (req, res) {
        await axios.get('https://finnhub.io/api/v1/webhook/list?token=c36tleqad3ib6g7eequg', {'event': 'earnings', 'symbol': 'AAPL'})
        .then((response) => {
            // console.log("list webhook", response.data)
            const listWebhook  = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getSymbolLookup (req, res) {
        const query = 'search?q=apple&token='  // /search?q=apple  |  /search?q=US5949181045
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then(response => {
            // console.log("symbol lookup returned", response.data)
            const symbollookup  = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getStockSymbol (req, res) {
        const query = 'stock/symbol?exchange=US&token='  // /stock/symbol?exchange=US  |  /stock/symbol?exchange=US&mic=XNYS
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("stock symbol returned", response.data)
            const stocksymbol  = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    // get company prrofile
    static async getCompanyProfile (req, res) {
        const query = 'stock/profile2?symbol=AAPL&token=' // /stock/profile2?symbol=AAPL  |  /stock/profile2?isin=US5949181045  |  /stock/profile2?cusip=023135106
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then(response => {
            // console.log("company profile returned", response.data)
            const profile  = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))   
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getMarketNews (req, res) {
        const query = 'news?category=general&token=' // /news?category=general  |  /news?category=forex&minId=10 
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("market news returned", response.data)
            const marketnews  = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getCompanyNews (req, res) {
        const query = 'company-news?symbol=AAPL&from=2021-03-01&to=2021-03-09&token=' // /news?category=general  |  /news?category=forex&minId=10 
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("Company news returned", response.data)
            const companynews  = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getNewsSentiment (req, res) {
        const query = 'news-sentiment?symbol=V&token=' // /news-sentiment?symbol=V  |  /news-sentiment?symbol=AAPL
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("news sentiment returned", response.data)
            const newssentiment  = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getPeers (req, res) {
        const query = 'stock/peers?symbol=AAPL&token=' // /stock/peers?symbol=AAPL
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("peers returned", response.data)
            const peers  = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getBasicFinancials (req, res) {
        const query = 'stock/metric?symbol=AAPL&metric=all&token=' // /stock/metric?symbol=AAPL&metric=all
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("basic financials returned", response.data)
            const basicfinancials  = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getInsiderTransactions (req, res) {
        const query = 'stock/insider-transactions?symbol=AAPL&limit=20&token=' // /stock/insider-transactions?symbol=AAPL&limit=20  |  /stock/insider-transactions?symbol=TSLA
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("insider transactions returned", response.data)
            const insidertransaction  = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getFAR (req, res) {
        const query = 'stock/financials-reported?accessNumber=0000320193-20-000052&token=' // /stock/financials-reported?symbol=AAPL  |  /stock/financials-reported?cik=320193&freq=quarterly  |  /stock/financials-reported?accessNumber=0000320193-20-000052
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("financials as reported returned", response.data)
            const far  = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getSECFilings (req, res) {
        const query = 'stock/filings?accessNumber=0000320193-20-000052&token=' // /stock/filings?symbol=AAPL  |  /stock/filings?cik=320193  |  /stock/filings?accessNumber=0000320193-20-000052
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("sec filings returned", response.data)
            const secfiling  = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getIPOCalendar (req, res) {
        const query = 'calendar/ipo?from=2020-01-01&to=2020-04-30&token=' // /calendar/ipo?from=2020-01-01&to=2020-04-30
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("IPO calendar returned", response.data)
            const ipocalendar  = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getRecommendationTrends (req, res) {
        const query = 'stock/recommendation?symbol=TSLA&token=' // /stock/recommendation?symbol=AAPL  |  /stock/recommendation?symbol=TSLA
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("recommendation trends returned", response.data)
            const recommendation  = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getEarningSurprises (req, res) {
        const query = 'stock/earnings?symbol=TSLA&token=' // /stock/earnings?symbol=AAPL  |  /stock/earnings?symbol=TSLA
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("earnings surprises returned", response.data)
            const earningsuprises  = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getEarningsCalendar (req, res) {
        const query = 'calendar/earnings?from=2021-03-01&to=2021-03-09&symbol=AAPL&token=' // /calendar/earnings?from=2021-03-01&to=2021-03-09  |  /calendar/earnings?from=2021-03-01&to=2021-03-09&symbol=AAPL
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("earnings calendar returned", response.data)
            const earningcalendar   = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getQuote (req, res) {
        const query = 'quote?symbol=AAPL&token=' // /quote?symbol=AAPL  |  /quote?symbol=MSFT
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("Quote returned", response.data)
            const quote   = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getStockCandle (req, res) {
        const query = 'stock/candle?symbol=AAPL&resolution=1&from=1615298999&to=1615302599&token='
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("stock candle returned", response.data)
            const stockcandle   = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getIndicesConstituents (req, res) {
        const query = 'index/constituents?symbol=^GSPC&token='
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("indices constituents returned", response.data)
            const indicesconstituents   = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getETFSectorExposure (req, res) {
        const query = 'etf/sector?symbol=SPY&token='
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("etf sector exposure returned", response.data)
            const eftsectorexpo   = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getETFCountryExposure (req, res) {
        const query = 'etf/country?symbol=SPY&token='
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("etf country exposure returned", response.data)
            const eftcountryexpo  = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getForexExchanges (req, res) {
        const query = 'forex/exchange?token='
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("forex exchanges returned", response.data)
            const forexexchange  = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getForexSymbol (req, res) {
        const query = 'forex/symbol?exchange=oanda&token='
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("forex symbol returned", response.data)
            const forexsymbol  = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getForexCandles (req, res) {
        const query = 'forex/candle?symbol=OANDA:EUR_USD&resolution=D&from=1572651390&to=1575243390&token='
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("forex candle returned", response.data)
            const forexcandle  = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getForexRates (req, res) {
        const query = 'forex/rates?base=USD&token='
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("forex rates returned", response.data)
            const forexrate  = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getCryptoExchange (req, res) {
        const query = 'crypto/exchange?token='
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("crypto exchange returned", response.data)
            const cryptoexchange  = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getCryptoSymbol (req, res) {
        const query = 'symbol?exchange=binance&token='
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("crypto symbol returned", response.data)
            const cryptosymbol  = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getCryptoCandle (req, res) {
        const query = 'crypto/candle?symbol=BINANCE:BTCUSDT&resolution=D&from=1572651390&to=1575243390&token='
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("crypto candle returned", response.data)
            const cryptocandle  = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getPatternRecognition (req, res) {
        const query = 'scan/pattern?symbol=AAPL&resolution=D&token='
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("pattern recognition returned", response.data)
            const patternrecognition  = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getSupport (req, res) {
        const query = 'scan/support-resistance?symbol=IBM&resolution=D&token='
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("support/resistance returned", response.data)
            const support  = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getAggregatorIndicator (req, res) {
        const query = 'scan/technical-indicator?symbol=AAPL&resolution=D&token='
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("aggregator indicators returned", response.data)
            const aggregator  = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getTechnicalIndicator (req, res) {
        const query = 'indicator?symbol=symbol=AAPL&resolution=D&from=1583098857&to=1584308457&indicator=sma&timeperiod=3&token='
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("technical indicator returned", response.data)
            const technicalindicator  = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getSocialSentiment (req, res) {
        const query = 'stock/social-sentiment?symbol=GME&token='
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("social sentiment returned", response.data)
            const socialsentiment  = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getCovid (req, res) {
        const query = 'covid19/us?token='
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("covid returned", response.data)
            const covid  = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getFDACalendar (req, res) {
        const query = 'fda-advisory-committee-calendar?token='
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("FDA committee meeting calendar returned", response.data)
            const fdacalendar = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }

    static async getCountryMetadata (req, res) {
        const query = 'country?token='
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("country metadata returned", response.data)
            const countrymetadata = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        })
    }

    static async getEconomicCalendar (req, res) {
        const query = 'calendar/economic?token='
        const url = FINNHUB_BASE_URL.concat(query).concat(FINNHUB_API)
        // console.log("query url", url);

        await axios
        .get(url)
        .then((response) => {
            // console.log("economic calendar returned", response.data)
            const economiccalendar = !lodash.isEmpty(response.data) ? (successRes(res, 200, response.data)) : (errorRes(next, 500, 'Whoops! Call Houston.'))
        })
        .catch(error => {
        //   console.log(error)
          res.status(500).json({
              error: error.message
          })
        });
    }
}

// stockAPI.webhooks(req, res);
// stockAPI.listWebhooks(req, res);
// stockAPI.getSymbolLookup(req, res);
// stockAPI.getStockSymbol(req, res);
// stockAPI.getCompanyProfile(req, res);
// stockAPI.getMarketNews(req, res);
// stockAPI.getCompanyNews(req, res);
// stockAPI.getNewsSentiment(req, res);
// stockAPI.getPeers(req, res);
// stockAPI.getBasicFinancials(req, res);
// stockAPI.getInsiderTransactions(req, res);
// stockAPI.getFAR(req, res);
// stockAPI.getSECFilings(req, res);
// stockAPI.getIPOCalendar(req, res);
// stockAPI.getRecommendationTrends(req, res);
// stockAPI.getEarningSurprises(req, res);
// stockAPI.getEarningsCalendar(req, res);
// stockAPI.getQuote(req, res);
// stockAPI.getStockCandle(req, res);
// stockAPI.getIndicesConstituents(req, res);
// stockAPI.getETFSectorExposure(req, res);
// stockAPI.getETFCountryExposure(req, res);
// stockAPI.getForexExchanges(req, res)
// stockAPI.getForexSymbol(req, res)
// stockAPI.getForexCandles(req, res)
// stockAPI.getForexRates(req, res)
// stockAPI.getCryptoExchange(req, res)
// stockAPI.getCryptoSymbol(req, res)
// stockAPI.getCryptoCandle(req, res)
// stockAPI.getPatternRecognition(req, res)
// stockAPI.getSupport(req, res)
// stockAPI.getAggregatorIndicator(req, res)
// stockAPI.getTechnicalIndicator(req, res)
// stockAPI.getSocialSentiment(req, res)
// stockAPI.getCovid(req, res)
// stockAPI.getFDACalendar(req, res)
// stockAPI.getCountryMetadata(req, res)
// stockAPI.getEconomicCalendar(req, res)

module.exports = stockAPI;