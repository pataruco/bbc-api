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
});
