"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
const chai_1 = require("chai");
describe('Greeter tests', () => {
    it('greets you', () => {
        const greeter = new index_1.Greeter();
        (0, chai_1.expect)(greeter.greet('nobody')).to.equal('Hello nobody');
    });
});
//# sourceMappingURL=greeter.test.js.map