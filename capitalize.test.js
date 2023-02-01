const capitalize = require('./capitalize').default;

it.only('Capitalizes first letter', () => {
  expect(capitalize('test'))
    .toBe('Test');
});