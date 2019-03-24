import * as tslib_1 from "tslib";
import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
var AppController = /** @class */ (function () {
    function AppController(appService) {
        this.appService = appService;
    }
    AppController.prototype.getData = function () {
        return this.appService.getData();
    };
    AppController.prototype.addTodo = function () {
        return this.appService.addTodo();
    };
    tslib_1.__decorate([
        Get('todos'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], AppController.prototype, "getData", null);
    tslib_1.__decorate([
        Post('addTodo'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], AppController.prototype, "addTodo", null);
    AppController = tslib_1.__decorate([
        Controller(),
        tslib_1.__metadata("design:paramtypes", [AppService])
    ], AppController);
    return AppController;
}());
export { AppController };
//# sourceMappingURL=app.controller.js.map