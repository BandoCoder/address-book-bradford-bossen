const { expect } = require("chai");
const supertest = require("supertest");
const app = require("../src/app");

describe("App", () => {
  it("GET /address responds with 200 AND an array when data is present", () => {
    return supertest(app)
      .get("/address")
      .expect(200)
      .expect("Content-type", "application/json; charset=utf-8")
      .then((res) => {
        expect(res.body).to.be.an("array");
        const app = res.body[0];
        expect(app).to.include.all.keys(
          "id",
          "firstName",
          "lastName",
          "address1",
          "address2",
          "city",
          "state",
          "zip"
        );
      });
  });
});
