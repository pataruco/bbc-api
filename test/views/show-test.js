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
        res.text.should.not.match(/Previous/);
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
        res.text.should.match(/Previous/);
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

    it("should have navigtation menu with the alphabet", function (done) {
      api
      .get(letterAPageFour)
      .set("Accept", "application/json")
      .expect(200)
      .expect('Content-Type', /html/)
      .end(function(err, res) {
        should.not.exist(err);
        res.text.should.match(/letter=a/);
        res.text.should.match(/letter=b/);
        res.text.should.match(/letter=c/);
        res.text.should.match(/letter=d/);
        res.text.should.match(/letter=f/);
        res.text.should.match(/letter=g/);
        res.text.should.match(/letter=h/);
        res.text.should.match(/letter=i/);
        res.text.should.match(/letter=j/);
        res.text.should.match(/letter=k/);
        res.text.should.match(/letter=l/);
        res.text.should.match(/letter=m/);
        res.text.should.match(/letter=n/);
        res.text.should.match(/letter=o/);
        res.text.should.match(/letter=p/);
        res.text.should.match(/letter=q/);
        res.text.should.match(/letter=r/);
        res.text.should.match(/letter=s/);
        res.text.should.match(/letter=t/);
        res.text.should.match(/letter=u/);
        res.text.should.match(/letter=v/);
        res.text.should.match(/letter=w/);
        res.text.should.match(/letter=x/);
        res.text.should.match(/letter=y/);
        res.text.should.match(/letter=z/);
        res.text.should.match(/letter=0-9/);
        done();
      });
    });
  });
}); // end of View
