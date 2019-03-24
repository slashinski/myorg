import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'Todos';
        // todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];
        // addTodo() {
        //   this.todos.push({
        //     title: `New todo ${Math.floor(Math.random() * 1000)}`
        //   });
        // }
        this.todos = [];
        this.fetch();
    }
    AppComponent.prototype.fetch = function () {
        var _this = this;
        this.http.get('/api/todos').subscribe(function (t) { return (_this.todos = t); });
    };
    AppComponent.prototype.addTodo = function () {
        var _this = this;
        this.http.post('/api/addTodo', {}).subscribe(function () {
            _this.fetch();
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'myorg-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map