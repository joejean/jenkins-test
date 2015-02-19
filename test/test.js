var request = require("supertest");
var app = require("../app.js");

describe("GET /", function(){
	it("respond with Hello World! Jenkins deployment done.", function(done){
		request(app).get("/").expect('Hello World! Jenkins deployment done.', done);
	});
});