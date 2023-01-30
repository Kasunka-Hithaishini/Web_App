var MyClass=require("../Js/myClass.js");
var myobj=new MyClass();
var chai = require ("chai");
var expect = chai.expect;

describe("Test suit", function(){
    it("Test the add method", function () {
       expect(myobj.Mul (1,2)).to.be.equal(3);
    });
});