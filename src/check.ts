import request from 'request';

const urlWithText = 'http://localhost:3000/error-with-text';
const urlNoText = 'http://localhost:3000/error-no-text';

// Existing test for 500 with text
request(urlWithText, (error, response, body) => {
  console.log('--- Test with text ---');
  console.log('Error:', error);
  console.log('Status Code:', response && response.statusCode);
  console.log('Body:', body);
});

// New test for 500 without text
request(urlNoText, (error, response, body) => {
  console.log('--- Test without text ---');
  console.log('Error:', error);
  console.log('Status Code:', response && response.statusCode);
  console.log('Body:', body);
}); 