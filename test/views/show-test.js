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
        res.text.should.match(/Page <strong>1/);
        res.text.should.match(/Letter <strong>A/);
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
        res.text.should.not.match(/Page <strong>2/);
        res.text.should.match(/Letter <strong>A/);
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
        res.text.should.match(/Page <strong>1/);
        res.text.should.not.match(/Letter <strong>B/);
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

    it ("should not render a before page link", (done)=>{
      api
      .get(letterAPageOne)
      .set("Accept", "application/json")
      .expect(200)
      .expect('Content-Type', /html/)
      .end(function(err, res) {
        should.not.exist(err);
        res.text.should.not.match(/Before/);
        done();
      })
    });
  }); // end "letter=a/page=1"

  describe("/letter=a/page=4", () =>{
    var letterAPageFour = "/letter=a/page=4"

    it ("should render a Letter A Page 4 page", (done)=>{
      api
      .get(letterAPageFour)
      .set("Accept", "application/json")
      .expect(200)
      .expect('Content-Type', /html/)
      .end(function(err, res) {
        should.not.exist(err);
        res.text.should.match(/Page <strong>4/);
        res.text.should.match(/Letter <strong>A/);
        done();
      })
    });

    it ("should not render a next page link", (done)=>{
      api
      .get(letterAPageFour)
      .set("Accept", "application/json")
      .expect(200)
      .expect('Content-Type', /html/)
      .end(function(err, res) {
        should.not.exist(err);
        res.text.should.not.match(/Next/);
        done();
      })
    });

    it ("should render a before page link", (done)=>{
      api
      .get(letterAPageFour)
      .set("Accept", "application/json")
      .expect(200)
      .expect('Content-Type', /html/)
      .end(function(err, res) {
        should.not.exist(err);
        res.text.should.match(/Before/);
        done();
      });
    });

    it ("should render a programme element", (done)=>{
      api
      .get(letterAPageFour)
      .set("Accept", "application/json")
      .expect(200)
      .expect('Content-Type', /html/)
      .end(function(err, res) {
        should.not.exist(err);
        res.text.should.match(/<div class="programme">/);
        done();
      });
    });
  }); // end letter=a/page=4
  describe("Nav Menu", () => {
  var letterAPageFour = "/letter=a/page=4"

    it("should have a <nav> tag", function (done) {
      api
      .get(letterAPageFour)
      .set("Accept", "application/json")
      .expect(200)
      .expect('Content-Type', /html/)
      .end(function(err, res) {
        should.not.exist(err);
        res.text.should.match(/<nav>/);
        done();
      })
    });
  });
}); // end of View
