"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var CheckComponent = (function () {
    function CheckComponent() {
    }
    CheckComponent = __decorate([
        core_1.Component({
            template: "\n    <br/>\n    <div>\n      <h1>Custom checkbox controls</h1>\n      <checkbox type=\"fancy2\" label=\"Testing\"></checkbox>\n       <checkbox type=\"fancy1\" label=\"Testing\"></checkbox>\n       <checkbox type=\"dd\" label=\"Testing\"></checkbox>\n    </div>\n    <br/>        \n    ",
            encapsulation: core_1.ViewEncapsulation.None,
            styles: ["\n    \n        .border{\n            border:2px solid blue;\n        }\n\n        .strong{\n            font-weight:bold;\n        }\n\n        .light{\n\n        }\n\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], CheckComponent);
    return CheckComponent;
}());
exports.CheckComponent = CheckComponent;
//# sourceMappingURL=CheckComponent.js.map