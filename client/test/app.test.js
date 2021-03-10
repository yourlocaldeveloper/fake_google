const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

global.fetch = require('jest-fetch-mock');
let app;

describe('app', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    app = require('../assets/js/app.js');
  });

  afterEach(() => {
    fetch.resetMocks();
  });

  describe('requests ', () => {
    test('it makes a get request to /search', () => {
      app.getAllSearches();
      expect(fetch.mock.calls[0][0]).toMatch(/search$/);
    });
  });

  describe('submit search', () => {
    test('it makes a request to fetch results of a search', () => {
      const fakeSearch = {
        preventDefault: jest.fn(),
        target: {
          search: { value: 'football' },
        },
      };
    });
  });
});
