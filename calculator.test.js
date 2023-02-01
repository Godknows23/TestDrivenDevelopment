const calculator = require('./calculator')

it('Calculator - Add', () => {
  expect(calculator(100, '+', 100))
    .toBe(200);
});
it('Calculator - Subtract', () => {
  expect(calculator(500, '-', 2))
    .toBe(498);
});
it('Calculator - Multiplication', () => {
  expect(calculator(11, '*', 5))
    .toBe(55);
});
it('Calculator - Division', () => {
  expect(calculator(500, '/', 5))
    .toBe(100);
});