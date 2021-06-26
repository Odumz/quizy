const chai = require('chai')
const jwt = require('jsonwebtoken')
const chaiHttp = require('chai-http')
const { it, describe } = require('mocha')
const app = require('../src/index')

chai.use(chaiHttp);
chai.should();

let request;
beforeEach(() => {
    request = chai.request(app);
});

describe('POST auth/register', () => {
    it('SHOULD NOT register the user if firstname is omitted', async () => {
        const newUser = {
            lastname: 'ewale',
            email: 'ewaleorio@stocka.com',
            phone: 4567389485,
            password: '1lov3d0gz'
        };
        const res = await request.post('/api/v1/auth/register').send(newUser);
        res.should.have.status(400);
        res.body.should.have.property('error');
        res.body.should.have.property('status').eql(400);
    });
    it('SHOULD NOT register the user if lastname is omitted', async () => {
      const newUser = {
        firstname: 'michael',
        email: 'mikewagner@stocka.com',
        phone: 18007593000,
        password: 'Ilove0cats#',
      };
      const res = await request.post('/api/v1/auth/register').send(newUser);
      res.should.have.status(400);
      res.body.should.have.property('error');
      res.body.should.have.property('status').eql(400);
    });
    it('SHOULD NOT register the user if email is omitted', async () => {
      const newUser = {
        firstname: 'michael',
        lastname: 'wagner',
        phone: 18007593000,
        password: 'Ilove0cats#',
      };
      const res = await request.post('/api/v1/auth/register').send(newUser);
      res.should.have.status(400);
      res.body.should.have.property('error');
      res.body.should.have.property('status').eql(400);
    });
    it('SHOULD NOT register the user if phone number is omitted', async () => {
      const newUser = {
        firstname: 'michael',
        lastname: 'wagner',
        email: 'mikewagner@stocka.com',
        password: 'Ilove0cats#',
      };
      const res = await request.post('/api/v1/auth/register').send(newUser);
      res.should.have.status(400);
      res.body.should.have.property('error');
      res.body.should.have.property('status').eql(400);
    });
    it('SHOULD NOT register the user if password is omitted', async () => {
      const newUser = {
        firstname: 'michael',
        lastname: 'wagner',
        email: 'mikewagner@stocka.com',
        phone: 18007593000,
      };
      const res = await request.post('/api/v1/auth/register').send(newUser);
      res.should.have.status(400);
      res.body.should.have.property('error');
      res.body.should.have.property('status').eql(400);
    });
    // it('SHOULD NOT register the user if address is omitted', async () => {
    //   const newUser = {
    //     firstname: 'michael',
    //     lastname: 'wagner',
    //     password: 'six',
    //     email: 'mikewagner@stocka.com',
    //     phone: 18007593000,
    //   };
    //   const res = await request.post('/api/v1/auth/register').send(newUser);
    //   res.should.have.status(400);
    //   res.body.should.have.property('error');
    //   res.body.should.have.property('status').eql(400);
    // });
    it('SHOULD NOT register the user if password is less than 8 characters', async () => {
      const newUser = {
        firstname: 'michael',
        lastname: 'wagner',
        password: 'six',
        email: 'mikewagner@stocka.com',
        phone: 18007593000
      };
      const res = await request.post('/api/v1/auth/register').send(newUser);
      res.should.have.status(400);
      res.body.should.have.property('error');
      res.body.should.have.property('status').eql(400);
    });
    it('SHOULD register the user if user doesn\'t exist', async () => {
      const newUser = {
        firstname: 'Tom',
        lastname: 'huddlestone',
        email: 'losa@caela.com',
        phone: 19002000800,
        password: 'Ilove0dogs#'
      };
      const res = await request.post('/api/v1/auth/register').send(newUser);
      res.should.have.status(201);
      res.body.should.have.property('status').eql(201);
      // res.body.should.be.a('object');
      // res.body.data.should.be.a('object');
      // res.body.data.should.have.property('token');
    });
    it('SHOULD NOT register the user if user already exists', async () => {
      const newUser = {
        firstname: 'Tom',
        lastname: 'huddlestone',
        email: 'tomblack@mandela.com',
        phone: 19002000800,
        password: 'Ilove0dogs#',
        address: '674 Hoffman Circle',
      };
      const res = await request.post('/api/v1/auth/register').send(newUser);
      res.should.have.status(409);
      res.body.should.have.property('error');
      res.body.should.have.property('status').eql(409);
    });
    it('SHOULD not register the user if there are conflicting unique parameters', async () => {
      const newUser = {
        firstname: 'Nigel',
        lastname: 'henderson',
        email: 'nigelhenderson@great.com',
        phone: 19002000800,
        password: 'Ilovelove#'
      };
      const res = await request.post('/api/v1/auth/register').send(newUser);
      res.should.have.status(409);
      res.body.should.have.property('status').eql(409);
    });
  });
  
  describe('POST auth/login', () => {
    it('SHOULD NOT login the user if user is not found', async () => {
      const loginDetails = {
        email: 'aaronkramer@hotmail.com',
        password: 'Ilove0cats#',
      };
      const res = await request.post('/api/v1/auth/login').send(loginDetails);
      res.should.have.status(401);
      res.body.should.have.property('error');
      res.body.should.have.property('status').eql(401);
    });
    it('SHOULD NOT login the user if email is omitted', async () => {
      const loginDetails = {
        password: 'Ilove0dogs#',
      };
      const res = await request.post('/api/v1/auth/login').send(loginDetails);
      res.should.have.status(400);
      res.body.should.be.a('object');
      res.body.should.have.property('error');
    });
    it('SHOULD NOT login the user if password field is omitted', async () => {
      const loginDetails = {
        email: 'tomblack@mandela.com',
      };
      const res = await request.post('/api/v1/auth/login').send(loginDetails);
      res.should.have.status(400);
      res.body.should.be.a('object');
      res.body.should.have.property('error');
    });
    it('SHOULD NOT login the user if password is wrong', async () => {
      const loginDetails = {
        email: 'tomblack@mandela.com',
        password: 'Ilovdogs#',
      };
      const res = await request.post('/api/v1/auth/login').send(loginDetails);
      res.should.have.status(401);
      res.body.should.be.a('object');
      res.body.should.have.property('error');
    });
    it('SHOULD login the user if user is found', async () => {
      const loginDetails = {
        email: 'tomblack@mandela.com',
        password: 'Ilove0dogs#',
      };
      const res = await request.post('/api/v1/auth/login').send(loginDetails);
      res.should.have.status(200);
      res.body.should.have.property('status').eql(200);
      res.body.should.be.a('object');
      res.body.data.should.be.a('object');
      res.body.data.should.have.property('token');
    });
})