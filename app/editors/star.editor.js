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
var star = (function () {
    function star() {
    }
    return star;
}());
exports.star = star;
var StarRating = (function () {
    function StarRating(e1, render) {
        this.ratingvalueChange = new core_1.EventEmitter();
        this.OnRatingChanged = new core_1.EventEmitter();
        this.OnMouseOver = new core_1.EventEmitter();
        this.ele = e1;
        this.render = render;
        this.fillcolor = "gold";
    }
    StarRating.prototype.ngOnInit = function () {
    };
    StarRating.prototype.ngOnChanges = function () {
        if (this.readonly == undefined) {
            this.readonly = false;
        }
        if (typeof (this.readonly) == "string") {
            this.readonly = (String(this.readonly) == "true");
        }
        this.updateStars();
    };
    StarRating.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.starChildren.changes.subscribe(function (changes) {
            _this.changeElements = changes._results.map(function (eleref) { return eleref.nativeElement; });
            _this.OnRatingChanged.next({
                ratingvalue: _this.ratingvalue,
                max: _this.max,
                Changedelements: _this.changeElements
            });
        });
    };
    StarRating.prototype.OnMouseenter = function (evt) {
        this.OnMouseOver.next(evt);
    };
    StarRating.prototype.ngAfterViewChecked = function () {
    };
    StarRating.prototype.ngAfterContentInit = function () {
    };
    StarRating.prototype.updateStars = function () {
        this.stars = [];
        var j = this.max - this.ratingvalue;
        for (var i = 1; i <= this.max; i++) {
            this.stars.push({ filled: i > j });
        }
        this.render.setElementStyle(this.ele.nativeElement, 'color', this.color);
    };
    StarRating.prototype.toggle = function (index) {
        if (this.readonly === false) {
            this.ratingvalue = (this.max - index);
            this.updateStars();
            this.ratingvalueChange.emit(this.ratingvalue);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], StarRating.prototype, "ratingvalue", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], StarRating.prototype, "ratingvalueChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], StarRating.prototype, "OnRatingChanged", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], StarRating.prototype, "max", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], StarRating.prototype, "readonly", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], StarRating.prototype, "starsize", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], StarRating.prototype, "color", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], StarRating.prototype, "fillcolor", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], StarRating.prototype, "OnMouseOver", void 0);
    __decorate([
        core_1.ViewChildren('starfilled'), 
        __metadata('design:type', Object)
    ], StarRating.prototype, "starChildren", void 0);
    StarRating = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'star-rating',
            styleUrls: ['editor.control.css'],
            styles: ["\n        .rating {\n        unicode-bidi: bidi-override;              \n        text-align: start; \n        display:inline-block;  \n        direction:rtl;      \n    }    \n    .star{      \n        color: gold;    \n    }\n    .rating > span {\n        display: inline-block;\n        position: relative;\n        width: 0.9em;\n        font-size:30px;\n    }\n    .rating:hover{\n        cursor:pointer;\n    }\n    .rating > span:hover,\n    .rating > span:hover ~ span {\n        color: transparent;\n    }\n    .rating > span:hover:before,\n    .rating > span:hover ~ span:before {\n        content: \"\\2605\";\n        position: absolute;\n        left: 0;\n        color: gold;\n    }\n\n    "],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            host: {},
            template: "    \n    <div class=\"rating\">\n    <span   *ngFor=\"let star of stars; let i=index\" \n            [class.star]=\"star.filled\" \n            (click)=\"toggle(i)\">\n        <span   #starfilled (mouseenter)=\"OnMouseenter($event)\" \n                [style.color]=\"fillcolor\" *ngIf=\"star.filled\">\n                    &#9733;\n        </span>\n        <span   (mouseenter)=\"OnMouseenter($event)\" \n                *ngIf=\"!star.filled\">\n                    &#9734;\n        </span>        \n    </span>\n    </div>\n"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], StarRating);
    return StarRating;
}());
exports.StarRating = StarRating;
//# sourceMappingURL=star.editor.js.map