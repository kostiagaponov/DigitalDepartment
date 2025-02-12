"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1_1 = require("./1");
var logHello = _1_1.default.createLogger('Hello, this is a closure demonstration!');
var logBye = _1_1.default.createLogger('Goodbye, closure world!');
logHello();
_1_1.default.startTimer();
logBye();
