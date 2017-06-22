"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by codelovesme on 6/19/2015.
 */
var index_1 = require("../src/index");
var euglena_template = require("@euglena/template");
describe("euglena", function () {
    describe("js", function () {
        describe("Class", function () {
            describe("equals", function () {
                it("should return true if both of object empty", function () {
                    //given
                    var organelle = new index_1.Organelle();
                    var sap = { euglenaName: "" };
                    //when
                    organelle.receive(new euglena_template.alive.particle.TimeOrganelleSap(sap, ""));
                    //then
                    //TODO
                });
            });
        });
    });
});
//# sourceMappingURL=index.js.map