var request = require("supertest");
var app = require("../app.js");

describe("GET /", function(){
	it("respond with Hello World! Testing Jenkins.", function(done){
		request(app).get("/").expect('Hello World! Testing Jenkins CI.', done);
	});
});