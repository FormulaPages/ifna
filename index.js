(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'module', 'formula-errors'], factory);
    } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        factory(exports, module, require('formula-errors'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod, global.error);
        global.index = mod.exports;
    }
})(this, function (exports, module, _formulaErrors) {
    'use strict';

    module.exports = IFNA;

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _error = _interopRequireDefault(_formulaErrors);

    function IFNA(value, value_if_na) {
        return value === _error['default'].na ? value_if_na : value;
    }
});
