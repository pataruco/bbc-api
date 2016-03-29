var should        = require("chai").should(),
    expect        = require("chai").expect,
    supertest     = require("supertest"),
    api           = supertest("http://localhost:3000"),
    navData       = ("./nav-data")


describe("View", () => {

  describe("letter=a/page=1", () =>{
    var letterAPageOne = "/letter=a/page=1"

    it ("should render a Letter A Page 1 page", (done)=>{
      api
      .get(letterAPageOne)
      .set("Accept", "application/json")
      .expect(200)
      .expect('Content-Type', /html/)
      .end(function(err, res) {
        should.not.exist(err);
        res.text.should.match(/Page 1/);
        res.text.should.match(/Letter A/);
        done();
      });
    });

    it ("should not render a Letter A Page 2 page", (done)=>{
      api
      .get(letterAPageOne)
      .set("Accept", "application/json")
      .expect(200)
      .expect('Content-Type', /html/)
      .end(function(err, res) {
        should.not.exist(err);
        res.text.should.not.match(/Page 2/);
        res.text.should.match(/Letter A/);
        done();
      });
    });

    it ("should not render a Letter B Page 1 page", (done)=>{
      api
      .get(letterAPageOne)
      .set("Accept", "application/json")
      .expect(200)
      .expect('Content-Type', /html/)
      .end(function(err, res) {
        should.not.exist(err);
        res.text.should.match(/Page 1/);
        res.text.should.not.match(/Letter B/);
        done();
      });
    });
    
    it ("should render a next page link", (done)=>{
          api
          .get(letterAPageOne)
          .set("Accept", "application/json")
          .expect(200)
          .expect('Content-Type', /html/)
          .end(function(err, res) {
            should.not.exist(err);
            res.text.should.match(/Next/);
            done();
          })
        });

  });
});
