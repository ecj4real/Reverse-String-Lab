(function(){

	var app = require("../app/palindromes");

	describe("Produce the reverse order of a word: ", function() {
  describe("Case for en empty string", function() {

    it("should return null for empty string", function() {
      expect(app.reverseString('')).toEqual(null);
    });

  });

  describe("Case for palindromes", function() {

    it("should return true for `anna`", function() {
      expect(app.reverseString('anna')).toEqual(true);
    });

    it("should return true for `NaN`", function() {
      expect(app.reverseString('NaN')).toEqual(true);
    });

    it("should return true for `civic`", function() {
      expect(app.reverseString('civic')).toEqual(true);
    });

    it("should return true for `madam`", function() {
      expect(app.reverseString('madam')).toEqual(true);
    });

    it("should return true for `sore was i ere i saw eros`", function() {
      expect(app.reverseString('sore was i ere i saw eros')).toEqual(true);
    });

    it("should return true for `racecar`", function() {
      expect(app.reverseString('racecar')).toEqual(true);
    });

  });

  describe("Case for normal words", function() {

    it("should return `skoob` for `books`", function() {
      expect(app.reverseString('books')).toEqual('skoob');
    });

    it("should return `nomolos` for `solomon`", function() {
      expect(app.reverseString('solomon')).toEqual('nomolos');
    });

    it("should return `csim` for `misc`", function() {
      expect(app.reverseString('misc')).toEqual('csim');
    });

    it("should return `chukwudi` for `iduwkuhc`", function() {
      expect(app.reverseString('iduwkuhc')).toEqual('chukwudi');
    });

    it("should return `potpal` for `laptop`", function() {
      expect(app.reverseString('laptop')).toEqual('potpal');
    });

  });

});

})();