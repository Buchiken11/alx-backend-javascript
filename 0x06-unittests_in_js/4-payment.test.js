const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const spying = sinon.spy(console);
    const create_dummy = sinon.stub(Utils, 'calculateNumber');

    create_dummy.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(create_dummy.calledWith('SUM', 100, 20)).to.be.true;
    expect(create_dummy.callCount).to.be.equal(1);
    expect(spying.log.calledWith('The total is: 10')).to.be.true;
    expect(spying.log.callCount).to.be.equal(1);
    create_dummy.restore();
    spying.log.restore();
  });
});
