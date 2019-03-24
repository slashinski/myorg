/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/
import * as tslib_1 from "tslib";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var app, port;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, NestFactory.create(AppModule)];
                case 1:
                    app = _a.sent();
                    app.setGlobalPrefix("api");
                    port = process.env.port || 3333;
                    return [4 /*yield*/, app.listen(port, function () {
                            console.log("Listening at http://localhost:" + port);
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
bootstrap();
//# sourceMappingURL=main.js.map