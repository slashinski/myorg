var _this = this;
import * as tslib_1 from "tslib";
import { Test } from '@nestjs/testing';
import { AppService } from './app.service';
describe('AppService', function () {
    var service;
    beforeAll(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var app;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Test.createTestingModule({
                        providers: [AppService],
                    }).compile()];
                case 1:
                    app = _a.sent();
                    service = app.get(AppService);
                    return [2 /*return*/];
            }
        });
    }); });
    describe('getData', function () {
        it('should return "Welcome to api!"', function () {
            expect(service.getData()).toEqual({ message: 'Welcome to api!' });
        });
    });
});
//# sourceMappingURL=app.service.spec.js.map