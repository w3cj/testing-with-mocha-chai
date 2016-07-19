module.exports = {
  hey: function (phrase) {
    if(phrase.toUpperCase() == phrase) {
      return 'Whoa, chill out!';
    }
    if(phrase.indexOf('?') > -1) {
      return 'Sure.';
    }

    return 'Whatever';
  }
};
