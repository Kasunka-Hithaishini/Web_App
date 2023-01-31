var SongPage=require("../Js/SongPage.js");
var objSongPage = new SongPage();
var chai = require("chai");
var expect = chai.expect;

describe("TestResult", function(){
    it("Test the MyFunction method", function () {
        expect(objSongPage.MyFunction(objSongPage.vid).to.be.equal("objSongPage.Author"));
    });
});





