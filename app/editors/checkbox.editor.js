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
var CheckBox = (function () {
    function CheckBox(ele) {
        this.ele = ele;
    }
    CheckBox.prototype.ngOnInit = function () {
    };
    CheckBox.prototype.checked = function (value) {
    };
    __decorate([
        core_1.Input('label'), 
        __metadata('design:type', String)
    ], CheckBox.prototype, "label", void 0);
    __decorate([
        core_1.Input('type'), 
        __metadata('design:type', String)
    ], CheckBox.prototype, "type", void 0);
    CheckBox = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'checkbox',
            styleUrls: ['editor.control.css'],
            styles: ["\n     .commonEditor{\n        font-size:20px;\n        font-weight:400\n     }\n\n    #Rcheckbox1:checked + .checkcontrol-label:before {\n        background: #2aa1c0;\n    }\n\n   #Rcheckbox2:checked + .checkcontrol-label:before {\n        background: #2aa1c0;\n        box-shadow: inset 0px 0px 0px 4px #fff;\n    }\n    \n   .fancycheck input:checked ~ .fancydraw {\n        background: #2aa1c0;\n    }\n\n    .fancycheck:hover input:not([disabled]):checked ~ .fancydraw,\n    .fancycheck input:checked:focus ~ .fancydraw {\n        background: #0e647d;\n    }\n\n"],
            template: "\n    <div [ngSwitch]=\"type\" style=\"display:inline-block\">\n        <div *ngSwitchCase=\"'fancy1'\">    \n            <input name=\"Rcheckbox1\" id=\"Rcheckbox1\" class=\"checkcontrol\"  type=\"checkbox\" checked>\n            <label for=\"Rcheckbox1\" class=\"checkcontrol-label text-muted\">{{label}}</label>    \n        </div>\n        <div *ngSwitchCase=\"'fancy2' \">\n            <input name=\"Rcheckbox2\" id=\"Rcheckbox2\" class=\"checkcontrol\" type=\"checkbox\" checked>\n            <label for=\"Rcheckbox2\" class=\"checkcontrol-label text-muted\">{{label}}</label>\n        </div>\n        <div *ngSwitchCase=\"'fancy3'\">   \n        <div style=\"display:inline-block\">         \n            <label class=\"fancycheck fancycheckbox text-muted\">{{label}}\n                <input type=\"checkbox\" checked=\"checked\"/>\n                <div class=\"fancydraw\"></div>\n            </label>  \n        </div>               \n        </div>\n        <div *ngSwitchDefault>   \n            <input id=\"Rcheckbox4\" #check class=\"\" name=\"Rcheckbox4\" type=\"checkbox\" checked>\n            <label for=\"Rcheckbox4\" class=\"Rcheckbox-label text-muted commonEditor\">{{label}}</label>\n        </div>\n    </div>\n "
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], CheckBox);
    return CheckBox;
}());
exports.CheckBox = CheckBox;
//# sourceMappingURL=checkbox.editor.js.map