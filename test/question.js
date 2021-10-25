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

describe('Index Test', () => {
  it('should always pass', async (done) => {
      expect(true).to.equal(true);
      done();
  });
  it('should connect to the server', async () => {
      const res = await request.get('/');
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('data');
      expect(res.body.data).to.have.property('message').equal('Welcome to Quizy application with nodejs and mongodb.');
  });
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
        res.should.have.status(400);
    });
    it('SHOULD NOT add the question if answer is omitted', async () => {
      const newQuestion = {
        description: 'What is the name of Apple\'s desktop operating system?'
      };
      const res = await request.post('/api/v1/questions').send(newQuestion);
      // expect(res).to.equal('promise resolved');
      res.should.have.status(400);
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
    });
})