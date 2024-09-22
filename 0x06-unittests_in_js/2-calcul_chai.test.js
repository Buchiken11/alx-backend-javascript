const chai = require('chai');
const calculateNumber = require('./1-calcul');


describe('#calculateNumber()', () => {
  it('checking if numbers round', () => {
    const result = calculateNumber('SUM', 1, 2);
    chai.expect.to.equal(result, 3);
  });

  it('checking if numbers round', () => {
    const result = calculateNumber('SUBTRACT', 1.4, 2.2);
    chai.expect.to.equal(result, -1);
  });

  it('checking if numbers round', () => {
    const result = calculateNumber('SUBTRACT', 4.9, 2.7);
    chai.expect.to.equal(result, 2);
  });

  it('checking if numbers round', () => {
    const result = calculateNumber('DIVIDE', 4, 2);
    chai.expect.to.equal(result, 2);
  });

  it('checking if numbers round', () => {
    const result = calculateNumber('DIVIDE', 1.7, 0);
    chai.expect.to.equal(result, 'Error');
  });

  it('checking if numbers round', () => {
    const result = calculateNumber('DIVIDE', 1.4, 4.6);
    chai.expect.to.equal(result, 0.2);
  });
});
