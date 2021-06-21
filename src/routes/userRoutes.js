const express = require("express"),
      
      authController = require("../controllers/autthControl"),
      router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Login:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          description: user email
 *        password:
 *          type: string
 *          description: user password
 *      example:
 *        email: Joeflashbak@gmail.com
 *        password: flashbakjoe123
 */

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Client authentication.
 */

/**
 * @swagger
 *   /api/v1/login:
 *     post:
 *       summary: Login a user.
 *       tags: [Authentication]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Login"
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

router.post("/login", authController.loginUser);

module.exports = router;