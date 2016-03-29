var should              = require("chai").should(),
    expect              = require("chai").expect,
    LetterList          = require('../../models/letter-list.js');

describe("Model LetterList", () => {
  var letter = new LetterList();

  it("should be declare", (done) => {
    expect(LetterList).to.be.a('function');
    done();
  });

  it("should instantiated", (done) => {
    expect(letter.list).to.equal(null);
    done();
  });

  it("should have a method to get character value", (done) => {
      letter.should.have.property('character');
      letter.character.should.be.a('function');
      done();
  });

  it("should have a method to get programme elements", (done) => {
    letter.should.have.property('programmes');
    letter.programmes.should.be.a('function');
    done();
});

}); // end of describe LetterList