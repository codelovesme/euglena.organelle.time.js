"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by codelovesme on 6/19/2015.
 */
const index_1 = require("../src/index");
const template_1 = require("@euglena/template");
describe("euglena", () => {
    describe("js", () => {
        describe("Class", () => {
            describe("equals", () => {
                it("should return true if both of object empty", () => {
                    //given
                    let organelle = new index_1.Organelle();
                    let sap = { euglenaName: "" };
                    //when
                    organelle.receive(new template_1.euglena_template.being.alive.particle.TimeOrganelleSap(sap, ""));
                    //then
                    //TODO
                });
            });
        });
    });
});
//# sourceMappingURL=index.js.map