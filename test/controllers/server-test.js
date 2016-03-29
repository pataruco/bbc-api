var should        = require("chai").should(),
    expect        = require("chai").expect,
    supertest     = require("supertest"),
    api           = supertest("http://localhost:3000");

describe("Controller", () => {

  describe("GET /", () =>{
    it ("should return redirect to /letter=a/page=1", (done)=>{
      api
      .get("/")
      .set("Accept", "application/json")
      .expect(302, done)
    });
  });

  describe("GET //letter=a/page=1", () =>{
  var letterAPageOne = "/letter=a/page=1"

    it ("should return a 200 response", (done)=>{
      api
      .get(letterAPageOne)
      .set("Accept", "application/json")
      .expect(200, done);
    });
  });
});
