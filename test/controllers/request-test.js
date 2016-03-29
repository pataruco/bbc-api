var should        = require("chai").should(),
    expect        = require("chai").expect,
    supertest     = require("supertest"),
    api           = supertest("https://ibl.api.bbci.co.uk");

describe('Request to BBC API', () => {
  var letterAPageOne = '/ibl/v1/atoz/a/programmes?page=1'

  it("should return a 200 response", (done) => {
    api
      .get(letterAPageOne)
      .set("Accept", "application/json")
      .expect(200, done);
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
}); //end of BBC API
