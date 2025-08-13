"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleGreeting = void 0;
var lit_1 = require("lit");
var decorators_js_1 = require("lit/decorators.js");
var SimpleGreeting = function () {
    var _classDecorators = [(0, decorators_js_1.customElement)('simple-greeting')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = lit_1.LitElement;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _count_decorators;
    var _count_initializers = [];
    var _count_extraInitializers = [];
    var SimpleGreeting = _classThis = /** @class */ (function (_super) {
        __extends(SimpleGreeting_1, _super);
        function SimpleGreeting_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = __runInitializers(_this, _name_initializers, 'World');
            _this.count = (__runInitializers(_this, _name_extraInitializers), __runInitializers(_this, _count_initializers, 0));
            __runInitializers(_this, _count_extraInitializers);
            return _this;
        }
        SimpleGreeting_1.prototype.changeName = function () {
            var names = ['Alice', 'Bob', 'Charlie', 'Diana'];
            this.name = names[Math.floor(Math.random() * names.length)];
        };
        SimpleGreeting_1.prototype.increment = function () {
            this.count++;
        };
        SimpleGreeting_1.prototype.render = function () {
            return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      <p>Hello, ", "!</p>\n      <p>You clicked ", " times.</p>\n      <button @click=", ">Change Name</button>\n      <button @click=", ">Click Me</button>\n    "], ["\n      <p>Hello, ", "!</p>\n      <p>You clicked ", " times.</p>\n      <button @click=", ">Change Name</button>\n      <button @click=", ">Click Me</button>\n    "])), this.name, this.count, this.changeName, this.increment);
        };
        return SimpleGreeting_1;
    }(_classSuper));
    __setFunctionName(_classThis, "SimpleGreeting");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _name_decorators = [(0, decorators_js_1.property)()];
        _count_decorators = [(0, decorators_js_1.state)()];
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _count_decorators, { kind: "field", name: "count", static: false, private: false, access: { has: function (obj) { return "count" in obj; }, get: function (obj) { return obj.count; }, set: function (obj, value) { obj.count = value; } }, metadata: _metadata }, _count_initializers, _count_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SimpleGreeting = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    _classThis.styles = (0, lit_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    :host {\n      display: block;\n      padding: 16px;\n      background: #f0f8ff;\n      border: 1px solid #ccc;\n      border-radius: 8px;\n      font-family: sans-serif;\n      color: #333;\n    }\n\n    p {\n      font-size: 1.2em;\n    }\n\n    button {\n      padding: 8px 12px;\n      margin-top: 8px;\n      font-size: 1em;\n      cursor: pointer;\n    }\n  "], ["\n    :host {\n      display: block;\n      padding: 16px;\n      background: #f0f8ff;\n      border: 1px solid #ccc;\n      border-radius: 8px;\n      font-family: sans-serif;\n      color: #333;\n    }\n\n    p {\n      font-size: 1.2em;\n    }\n\n    button {\n      padding: 8px 12px;\n      margin-top: 8px;\n      font-size: 1em;\n      cursor: pointer;\n    }\n  "])));
    (function () {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SimpleGreeting = _classThis;
}();
exports.SimpleGreeting = SimpleGreeting;
var templateObject_1, templateObject_2;
