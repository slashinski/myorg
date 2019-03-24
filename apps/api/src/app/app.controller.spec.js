var _this = this;
import * as tslib_1 from "tslib";
import { Test } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
describe('AppController', function () {
    var app;
    beforeAll(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Test.createTestingModule({
                        controllers: [AppController],
                        providers: [AppService],
                    }).compile()];
                case 1:
                    app = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    describe('getData', function () {
        it('should return "Welcome to api!"', function () {
            var appController = app.get(AppController);
            expect(appController.getData()).toEqual({ message: 'Welcome to api!' });
        });
    });
});
//# sourceMappingURL=app.controller.spec.js.map