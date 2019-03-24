import * as tslib_1 from "tslib";
import { Injectable } from '@nestjs/common';
var AppService = /** @class */ (function () {
    function AppService() {
        this.todos = [{ title: 'Todo 1' }, { title: 'Todo 2' }];
    }
    AppService.prototype.getData = function () {
        return this.todos;
    };
    AppService.prototype.addTodo = function () {
        this.todos.push({
            title: "New todo " + Math.floor(Math.random() * 1000)
        });
    };
    AppService = tslib_1.__decorate([
        Injectable()
    ], AppService);
    return AppService;
}());
export { AppService };
//# sourceMappingURL=app.service.js.map