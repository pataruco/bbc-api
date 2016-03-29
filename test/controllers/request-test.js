var should        = require("chai").should(),
    expect        = require("chai").expect,
    assert        = require("chai").assert,
    supertest     = require("supertest"),
    api           = supertest("https://ibl.api.bbci.co.uk");

describe('Request to BBC API', () => {
  var letterAPageOne = '/ibl/v1/atoz/a/programmes?page=1'
  var letterNumberPageOne = '/ibl/v1/atoz/0-9/programmes?page=1'

  it("should return a 200 response", (done) => {
    api
      .get(letterAPageOne)
      .set("Accept", "application/json")
      .expect(200);
      done();
  });

  it("should return an object", (done) => {
    api
      .get(letterAPageOne)
      .set("Accept", "application/json")
      .end(function(err, res) {
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it("should return an object that have a field called character", (done) => {
    api
      .get(letterAPageOne)
      .set("Accept", "application/json")
      .end(function(err, res){
        expect(res.body.atoz_programmes).to.have.property('character');
        done();
      });
  });

  it("should return an object that have a field called page", (done) => {
    api
      .get(letterAPageOne)
      .set("Accept", "application/json")
      .end(function(err, res){
        expect(res.body.atoz_programmes).to.have.property('page');
        done();
      });
  });

  it("should return 'a' as character value when letter A is requested", (done) => {
    api
      .get(letterAPageOne)
      .set("Accept", "application/json")
      .end(function(err, res){
        expect(res.body.atoz_programmes.character).to.equal('a');
        expect(res.body.atoz_programmes.character).to.not.equal('b');
        done();
      });
  });

  it("should return '0-9' as character value when letter 0-9 is requested", (done) => {
    api
      .get(letterNumberPageOne)
      .set("Accept", "application/json")
      .end(function(err, res){
        expect(res.body.atoz_programmes.character).to.equal('0-9');
        expect(res.body.atoz_programmes.character).to.not.equal('a');
        done();
      });
  });

  it("should return 1 when page 1 is requested", (done) => {
    api
      .get(letterNumberPageOne)
      .set("Accept", "application/json")
      .end(function(err, res){
        expect(res.body.atoz_programmes.page).to.equal(1);
        expect(res.body.atoz_programmes.character).to.not.equal(2);
        done();
      });
  });

  describe('programme elements', ()=>{
    it("should have an array of 20 programm elemments", (done) => {
      api
      .get(letterAPageOne)
      .set("Accept", "application/json")
      .end(function(err, res){
        expect(res.body.atoz_programmes.elements).to.be.an('array');
        expect(res.body.atoz_programmes.elements.length).to.equal(20);
      })
      done();
    });

    it("should have an array less than 20 programm elemments", (done) => {
      api
      .get(letterNumberPageOne)
      .set("Accept", "application/json")
      .end(function(err, res){
        var elements = res.body.atoz_programmes.elements
        expect(elements).to.be.an('array');
        assert.isBelow(elements.length, 20, 'is strictly less than 20');
      })
      done();
    });
  });

  describe('a programme element', ()=>{

    it("should have a field called title", (done) => {
      api
      .get(letterAPageOne)
      .set("Accept", "application/json")
      .end(function(err, res){
        expect(res.body.atoz_programmes.elements[0]).to.have.property('title');
        done();
      })
    });

    it("should title value begins with 'A'", (done) => {
      api
      .get(letterAPageOne)
      .set("Accept", "application/json")
      .end(function(err, res){
        expect(res.body.atoz_programmes.elements[0]).to.have.property('title');
        expect(res.body.atoz_programmes.elements[0].title[0]).to.equal('A');
        done();
      })
    });

    it("should have a field for images", (done) => {
      api
      .get(letterAPageOne)
      .set("Accept", "application/json")
      .end(function(err, res){
        expect(res.body.atoz_programmes.elements[0]).to.have.property('images');
        done();
      })
    });

    it("should image value have a {recipe} string ", (done) => {
      api
      .get(letterAPageOne)
      .set("Accept", "application/json")
      .end(function(err, res){
        expect(res.body.atoz_programmes.elements[0]).to.have.property('images');
        res.body.atoz_programmes.elements[0].images.standard.should.match(/{recipe}/);
      });
      done();
    });
  });
}); //end of BBC API
