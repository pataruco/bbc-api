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

}); // end of describe LetterList
