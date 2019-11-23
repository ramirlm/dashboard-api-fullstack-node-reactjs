const request = require('supertest');
const app = require('../../app.js');

const scan = {
   id: '1', // Unique generated by mongoDB
   status: 'Queued', // Queued, In Progress, Success, Failure  - TDD
   repositoryName: 'Repo-Name-Test',
   queuedAt: Date.now(),
   scanningAt: Date.now(),
   finishedAt: Date.now(),
   findings:
   [
       {
           type: '',
           ruleId: '2',
           location: {
               path: 'dss',
               positions: 'A',
               begin: 1,
               line: 2
           },
           metadata: {
               description: 'DSADa',
               severity: 'HIGH'
           }
       }
   ]
};

<<<<<<< HEAD
describe('Scan Endpoints', () => {
=======
beforeAll(() => {
   console.log('Starting TDD development');
});

afterAll(() => {
    // server.close(); TODO Fix
    console.log('server closed');
});


describe('Scan Flow', () => {
>>>>>>> 851f0d941157358ca90e3a2223eeebad51762630

   it('should return the scans list', async () => {
      const scanId = 1;
      const res = await request(app).get(`/scans/${scanId}`);
      expect(res.status).toEqual(200);
<<<<<<< HEAD
      expect(res.body.scans).toHaveLength(0);
   });

   it('should save a valid scan and return HTTP 201', () => {   
=======
      // expect(res.body).toHaveProperty('post');
   });

   it('should save a scan and return HTTP 201', () => {   
>>>>>>> 851f0d941157358ca90e3a2223eeebad51762630
      app.post('/scans', async (req, res) => {
         res.send(scan)
            .expect(201, done);  
       });
<<<<<<< HEAD
       expect(res.body).toHaveProperty('id');
=======
       expect(res.body.scans).toHaveLength(0);
>>>>>>> 851f0d941157358ca90e3a2223eeebad51762630
   });

   it('should save a scan without findings', async () => {

      const response = await request(app)
         .get('/scans');

      expect(response.status).toEqual(200);
      
   });

   it('should respond with status code 400 when an invalid status is sent', async () => {
      const response = await request(app)
         .post('/scans')
         .send(scan);
      
      expect(response.status).toEqual(400);
   });

   it('should respond with status code 400 when an invalid timestamp is sent', async () => {
      const response = await request(app)
         .post('/scans')
<<<<<<< HEAD
         .send(Object.assign({}, scan, { scanningAt: "Invalid timestamp" }));
=======
         .send(scan);
>>>>>>> 851f0d941157358ca90e3a2223eeebad51762630
      
      expect(response.status).toEqual(400);
   });

   it('should fetch a scan', async () => {
      const scanId = 1;
      const res = await request(app).get(`/scans/${scanId}`);
      expect(res.statusCode).toEqual(200);
      expect(res.body.scan).toHaveProperty('id', scanId);
    });

    it('should respond with status code 404 if a scan is not found', async () => {
      const scanId = 2;
      const res = await request(app).get(`/scans/${scanId}`);
      expect(res.statusCode).toEqual(404);
    });

<<<<<<< HEAD
    it('should respond with status code 400 when an invalid finding record is sent', async () => {
      const response = await request(app)
         .post('/scans')
         .send(Object.assign({}, scan, { findings: [{id: 'Invalid Finding'}] }));
      
      expect(response.status).toEqual(400);
   });
=======
>>>>>>> 851f0d941157358ca90e3a2223eeebad51762630
});
