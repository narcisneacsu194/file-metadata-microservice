const expect = require('expect');
const request = require('supertest');
const { app } = require('../server');

describe('POST /api/fileanalyse', () => {
  it('should return uploaded file metadata', (done) => {
    const responseObj = {
      name: 'libreWriterFile.odt',
      type: 'application/vnd.oasis.opendocument.text',
      size: 8345,
    };

    request(app)
      .post('/api/fileanalyse')
      .attach('newfile', `${__dirname}/files/libreWriterFile.odt`)
      .expect(200)
      .expect((res) => {
        expect(res.body).toEqual(responseObj);
      })
      .end(done);
  });
});

describe('GET /', () => {
  it('should return upload file page', (done) => {
    request(app)
      .get('/')
      .expect(302)
      .expect((res) => {
        expect(res.header.location).toBe('/fileForm.html');
        expect(res.text).toBe('Found. Redirecting to /fileForm.html');
      })
      .end(done);
  });
});
