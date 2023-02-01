const reverseString = require('./reverseString').default;
it('Reverses string', () => {
    expect(reverseString('test'))
      .toBe('tset');
  });