var should              = require("chai").should(),
    expect              = require("chai").expect,
    assert              = require("chai").assert,
    letterAPageOneData  = require('./letter-a-page-1-data-helper.js'),
    letterAPageFourData = require('./letter-a-page-4-data-helper.js'),
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

   it("should get a programme elements array length of 20 when Letter A page 1", (done) => {
     letter.init(letterAPageOneData);
     expect(letter.programmes()).to.be.an('array');
     letter.programmes().length.should.be.equal(20)
     done();
   });

   it("should get a programme elements array length less of  20 when Letter A page 4", (done) => {
     letter.init(letterAPageFourData);
     expect(letter.programmes()).to.be.an('array');
     assert.isBelow(letter.programmes().length, 20, 'is strictly less than 20');
     done();
   });

   it("should return an array of programmes titles and image URL's", (done) => {
     letter.init(letterAPageOneData);
     expect(letter.programmesList()).to.be.an('array');
     done();
   });

   it("should return a programme list element with image and title values", (done) => {
     letter.init(letterAPageOneData);
     letter.programmesList()[0].should.have.property('title');
     letter.programmesList()[0].should.have.property('image');
     done();
   });

   it("should change the image URL string", (done) => {
     letter.init(letterAPageOneData);
     letter.programmesList()[0].image.should.match(/560x315/);
     done();
   });

   it("should know if a next page is need it", (done) => {
     var letter1 = new LetterList();
     letter1.init(letterAPageOneData);
     var letter2 = new LetterList();
     letter2.init(letterAPageFourData);
     expect(letter1.nextPage()).to.equal(true);
     expect(letter2.nextPage()).to.equal(false);
     done();
   });
   
   it("should know if a before page is need it", (done) => {
     var letter1 = new LetterList();
     letter1.init(letterAPageOneData);
     var letter2 = new LetterList();
     letter2.init(letterAPageFourData);
     expect(letter1.beforePage()).to.equal(false);
     expect(letter2.beforePage()).to.equal(true);
     done();
   });

 });// end of BBC API response
}); // end of describe LetterList
