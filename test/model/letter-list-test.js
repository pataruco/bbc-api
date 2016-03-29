var should              = require("chai").should(),
    expect              = require("chai").expect,
    letterAPageOneData  = require('./letter-a-page-1-data-helper.js'),
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

  it("should have a method to get page value", (done) => {
      letter.should.have.property('page');
      letter.page.should.be.a('function');
      done();
  });

  it("should have a method to create an array of objects with titles and images url's", (done) => {
    letter.should.have.property('programmesList');
    letter.programmesList.should.be.a('function');
    done();
  });

  it("should have a method to know id a 'Next Page' is need it", (done) => {
    letter.should.have.property('nextPage');
    letter.nextPage.should.be.a('function');
    done();
  });

  it("should have a method to know id a 'Before Page' is need it", (done) => {
    letter.should.have.property('beforePage');
    letter.beforePage.should.be.a('function');
    done();
  });

  describe("when is parsed with BBC API response", () => {
    it("should get a character value", (done) => {
     letter.init(letterAPageOneData);
     expect(letter.character()).to.equal('a');
     done();
   });

   it("should get a page value", (done) => {
     letter.init(letterAPageOneData);
     expect(letter.page()).to.equal(1);
     done();
   });
   
   it("should get a programme elements", (done) => {
     letter.init(letterAPageOneData);
     expect(letter.programmes()).to.be.an('array');
     done();
   });

 });// end of BBC API response
}); // end of describe LetterList
