"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextBoxControl = exports.ButtonControl = void 0;
var age = 0;
age = 18; // String 
console.log(age > 18 ? "Adult" : "minor");
var ButtonControl = /** @class */ (function () {
    function ButtonControl() {
    }
    ButtonControl.prototype.createControl = function () {
        var button = new HTMLButtonElement();
        button.title = "Click me";
        button.textContent = "Click me";
        button.click = function () {
        };
        return button;
    };
    return ButtonControl;
}());
exports.ButtonControl = ButtonControl;
var TextBoxControl = /** @class */ (function () {
    function TextBoxControl() {
    }
    TextBoxControl.prototype.createControl = function () {
        var textbox = new HTMLInputElement();
        textbox.type = "text";
        textbox.placeholder = "Enter your name";
        return textbox;
    };
    return TextBoxControl;
}());
exports.TextBoxControl = TextBoxControl;
