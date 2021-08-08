const chai = require('chai')
const jwt = require('jsonwebtoken')
const chaiHttp = require('chai-http')
const { it, describe } = require('mocha')
const app = require('../src/index')
const { expect } = require('chai')

chai.use(chaiHttp);
chai.should();

let request;
beforeEach(() => {
    request = chai.request(app);
});

describe('POST questions', () => {
    it('SHOULD NOT add the question if description is omitted', async () => {
        const newQuestion = {
            option: [
              {
                answer: 'some option'
              },
              {
                answer: 'some option',
                isCorrect: true
              },
              {
                answer: 'some option'
              }
            ]
        };
        const res = await request.post('/api/v1/questions').send(newQuestion);
        res.should.have.status(500);
        res.body.should.have.property('error');
        res.body.should.have.property('status').eql(500);
    });
    it('SHOULD NOT add the question if answer is omitted', async () => {
      const newQuestion = {
        description: 'What is the name of Apple\'s desktop operating system?'
      };
      const res = await request.post('/api/v1/questions').send(newQuestion);
      // expect(res).to.equal('promise resolved');
      res.should.have.status(500);
      res.body.should.have.property('error');
      res.body.should.have.property('status').eql(500);
    });
    it('SHOULD register the account if details are complete', async () => {
      const newQuestion = {
        description: 'What is the name of Apple\'s desktop operating system?',
        option: [
          {
            answer: 'some option'
          },
          {
            answer: 'some option',
            isCorrect: true
          },
          {
            answer: 'some option'
          }
        ]
      };
      const res = await request.post('/api/v1/questions').send(newQuestion);
      res.should.have.status(201);
      // res.body.should.have.property('status').eql(201);
      // res.body.should.be.a('object');
      // res.body.data.should.be.a('object');
      // res.body.data.should.have.property('token');
    });
})