process.env.NODE_ENV = 'test';

const Xendit = require('../../src/xendit');
const managePaymentsTest = require('./manage_payments.test');
const operatePaymentsTest = require('./operate_payments.test');
const managePlansTest = require('./manage_plans.test');

const x = new Xendit({
  secretKey: 'fake_secret_key',
});

describe('Recurring Payment Service', function() {
  managePaymentsTest(x);
  operatePaymentsTest(x);
});
describe('Recurring Plan Service', function() {
  managePlansTest(x);
});
