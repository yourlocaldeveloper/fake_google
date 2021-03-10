const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('index.html', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  describe('header', () => {
    test('it has a header', () => {
      const header = document.querySelector('header');
      expect(header).toBeTruthy();
    });
  });

  describe('body', () => {
    test('it has a main', () => {
      const header = document.querySelector('main');
      expect(header).toBeTruthy();
    });

    describe('main', () => {
      describe('form', () => {
        let form;
        let searchInput, submitButton, submitRandom;

        beforeEach(() => {
          form = document.querySelector('form');
          searchInput = document.querySelector('#search');
          submitButton = document.querySelector('#searchButton');
          submitRandom = document.querySelector('#searchButtonRandom');
        });

        test('it exists', () => {
          expect(form).toBeTruthy();
        });

        describe('name input', () => {
          test('it has an id of "search"', () => {
            expect(searchInput).toBeTruthy();
          });

          test('it is a text input"', () => {
            expect(searchInput.getAttribute('type')).toBe('text');
          });

          describe('submitButton', () => {
            test('it says "Google Search', () => {
              expect(submitButton.value).toBe('Google Search');
            });
          });

          describe('submitRandom', () => {
            test('it says "Feeling Lucky?', () => {
              expect(submitRandom.value).toBe('Feeling Lucky?');
            });
          });
        });
      });
    });
  });
});
