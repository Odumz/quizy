// import required constants
const express = require("express");
const authController = require("../controllers/authController"); // auth controller
const router = express.Router(); // enable router

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Client authentication.
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          required:
 *              - firstname
 *              - lastname
 *              - email
 *              - phone
 *              - password
 *              - role
 *          properties:
 *              id: 
 *                  type: string
 *                  description: The auto-generated id of the user
 *              firstname: 
 *                  type: string
 *                  description: The entered firstname of the user
 *              lastname: 
 *                  type: string
 *                  description: The entered lastname of the user
 *              email: 
 *                  type: string
 *                  description: The entered email of the user
 *              phone: 
 *                  type: number
 *                  description: The entered phone number of the user
 *              password: 
 *                  type: string
 *                  description: The entered password of the user
 *              role: 
 *                  type: string
 *                  description: The entered role of the user
 *          example:
 *              id: gu873h4j
 *              firstname: Fola,
 *              lastname: TheCoder
 *              phone: 08093434342
 *              email: folathecoder@stocka.org
 *              role: investor
 */


/**
*  @swagger
*  paths:
*   /auth:
*     get:
*       summary: test auth route
*       tags: [Authentication]
*       responses:
*         "200":
*           description: test auth route
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
          message: "This is auth routes"
    })
});

/**
 * @swagger
 *   auth/users:
 *     get:
 *       summary: Fetch all users.
 *       tags: [Authentication]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/User"
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               properties:
 *                 status:
 *                   type: string
 *                   decription: Response status
 *                 token:
 *                   type: string
 *                   description: JWT client token
 *             example: 
 *               status: success
 *               token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwY2UzNjQ2MzdlMTJhM2JiYzZjOGZmYiIsImlhdCI6MTYyNDIxNDg1NywiZXhwIjoxNjMxOTkwODU3fQ.-wqN0WBEoyTEwMu7HUJxvXGcYWuknKvo-FcccBsJy6k   
 */

 router.get("/users",  authController.fetchUser);



/**
*  @swagger
*  paths:
*   /auth/login:
*     post:
*       summary: Log all the users in
*       tags: [Authentication]
*       responses:
*         "200":
*           description: The authentication and authorization of users.
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/User'
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Response status
 *                 token:
 *                   type: string
 *                   description: JWT client token
 *             example: 
 *               status: success
 *               token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwY2UzNjQ2MzdlMTJhM2JiYzZjOGZmYiIsImlhdCI6MTYyNDIxNDg1NywiZXhwIjoxNjMxOTkwODU3fQ.-wqN0WBEoyTEwMu7HUJxvXGcYWuknKvo-FcccBsJy6k
*/
router.post("/login", authController.userLogin);


/**
*  @swagger
*  paths:
*   /auth/register:
*     post:
*       summary: Register all the users
*       tags: [Authentication]
*       responses:
*         "200":
*           description: The authentication and authorization of users.
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/User'
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Response status
 *                 token:
 *                   type: string
 *                   description: JWT client token
 *             example: 
 *               status: success
 *               token: eyJhbGciOiJIUzI11NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwY2UzNjQ2MzdlMTJhM2JiYzZjOGZmYiIsImlhdCI6MTYyNDIxNDg1NywiZXhwIjoxNjMxOTkwODU3fQ.-wqN0WBEoyTEwMu7HUJxvXGcYWuknKvo-FcccBsJy6k
 *               user: { firstname: Fola,
 *                       lastname: Arowolo,
 *                       email: user@email.com,
 *                       phone: 09051265526,
 *                       role: investor
 *                }
*/
router.post("/register", authController.userRegistration);

module.exports = router;