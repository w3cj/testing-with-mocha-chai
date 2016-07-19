var Bob = require('../bob');
var expect = require('chai').expect;
// Bob is a lackadaisical teenager. In conversation, his responses are very limited.

// Bob answers 'Sure.' if you ask him a question.
//
// He answers 'Whoa, chill out!' if you yell at him.
//
// He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// He answers 'Whatever.' to anything else.

describe('Bob', function () {
  describe('hey', function () {
    it('should respond sure if you ask him a question', function () {
      var response = Bob.hey('What time is it?');
      expect(response).to.equal('Sure.');
    });
    it('should respond Whoa, chill out! if yelled at', function () {
      var response = Bob.hey('WHO ARE YOU??');
      expect(response).to.equal('Whoa, chill out!');
    });
    it('should respond Whatever to anything else', function () {
      var response = Bob.hey('1 + 1 equals 2');
      expect(response).to.equal('Whatever');
    });
  });

  it('should be equal', function () {
    var firstArray = [1,2,3];
    var secondArray = [1,2,3];

    expect(firstArray).to.deep.equal(secondArray);
  });
});
