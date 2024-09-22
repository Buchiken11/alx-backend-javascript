const assert = require('assert');
const calculateNumber = require('./1-calcul');


describe('#calculateNumber()', () => {
  it('checking if numbers round', () => {
    const result = calculateNumber('SUM', 1, 2);
    assert.strictEqual(result, 3);
  });

  it('checking if numbers round', () => {
    const result = calculateNumber('SUBTRACT', 1.4, 2.2);
    assert.strictEqual(result, -1);
  });

  it('checking if numbers round', () => {
    const result = calculateNumber('SUBTRACT', 4.9, 2.7);
    assert.strictEqual(result, 2);
  });

  it('checking if numbers round', () => {
    const result = calculateNumber('DIVIDE', 4, 2);
    assert.strictEqual(result, 2);
  });

  it('checking if numbers round', () => {
    const result = calculateNumber('DIVIDE', 1.7, 0);
    assert.strictEqual(result, 'Error');
  });

  it('checking if numbers round', () => {
    const result = calculateNumber('DIVIDE', 1.4, 4.6);
    assert.strictEqual(result, 0.2);
  });
});
