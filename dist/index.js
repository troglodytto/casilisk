"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONVERTERS = void 0;
const _ = require("lodash");
const R = require("rambda");
exports.CONVERTERS = {
    SNAKE: _.snakeCase,
    CAMEL: _.camelCase,
    KEBAB: _.kebabCase,
    PASCAL: R.compose((text) => text.replace(/ /g, ""), _.startCase, _.camelCase),
    MACRO: R.compose(R.toUpper, _.snakeCase),
};
const casilisk = (object, convertor = exports.CONVERTERS.CAMEL) => {
    if (!(object instanceof Object)) {
        return object;
    }
    else {
        const finalObject = Object.keys(object).map((key) => {
            const value = object[key];
            return [convertor(key), casilisk(value)];
        });
        return Object.fromEntries(finalObject);
    }
};
exports.default = casilisk;
