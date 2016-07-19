var User = require('../user');
var expect = require('chai').expect;

describe('User', function() {
  describe('firstname', function () {
    it('should not be undefined', function () {
      var cj = new User('CJ');
      expect(cj.firstname).to.not.equal(undefined);
    });
  });
  describe('age', function () {
    it('should be greater than 0', function () {
      var cj = new User('CJ', 26);
      expect(cj.age).to.be.above(0);
    });
  });
});
