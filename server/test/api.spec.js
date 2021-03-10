const request = require('supertest');
// import server
const server = require('../server');

describe('API server', () => {
  let api;

  beforeAll(() => {
    // start the server and store it in the api variable
    api = server.listen(5000, () =>
      console.log('Test server running on port 5000')
    );
  });

  afterAll((done) => {
    // close the server, then run done
    console.log('Gracefully stopping test server');
    api.close(done);
  });

  it('responds to get / with status 200', (done) => {
    request(api).get('/').expect(200, done);
  });

  it('responds to get /search with status 200', (done) => {
    request(api).get('/search').expect(200, done);
  });

  it('retrieves a search keyword by its id', (done) => {
    request(api)
      .get('/search/football')
      .expect(200)
      .expect(
        {
          id: 1,
          title: 'Football - BBC Sport',
          url: 'https://www.bbc.co.uk/sport/football',
          desc: 'All things football yay',
          keywords: ['football', 'sports', 'foot', 'ball', 'scores', 'league'],
        },
        done
      );
  });
});
