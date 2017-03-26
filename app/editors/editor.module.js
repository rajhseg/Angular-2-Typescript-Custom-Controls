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
var common_1 = require('@angular/common');
var checkbox_editor_1 = require('./checkbox.editor');
var radiobutton_editor_1 = require('./radiobutton.editor');
var star_editor_1 = require('./star.editor');
var EditorModule = (function () {
    function EditorModule() {
    }
    EditorModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [star_editor_1.StarRating, checkbox_editor_1.CheckBox, radiobutton_editor_1.RadioButton],
            providers: [],
            exports: [star_editor_1.StarRating, checkbox_editor_1.CheckBox, radiobutton_editor_1.RadioButton]
        }), 
        __metadata('design:paramtypes', [])
    ], EditorModule);
    return EditorModule;
}());
exports.EditorModule = EditorModule;
//# sourceMappingURL=editor.module.js.map