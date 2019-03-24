import { getAddTodoButton, getTodos } from '../support/app.po';
describe('TodoApps', function () {
    beforeEach(function () { return cy.visit('/'); });
    it('should display todos', function () {
        getTodos().should(function (t) { return expect(t.length).equal(2); });
        getAddTodoButton().click();
        getTodos().should(function (t) { return expect(t.length).equal(3); });
    });
});
//# sourceMappingURL=app.spec.js.map