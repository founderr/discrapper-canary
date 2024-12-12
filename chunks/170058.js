var i = Object.prototype.toString;
if (r(322499)()) {
    var a = Symbol.prototype.toString,
        s = /^Symbol\(.*\)$/,
        o = function (e) {
            return 'symbol' == typeof e.valueOf() && s.test(a.call(e));
        };
    e.exports = function (e) {
        if ('symbol' == typeof e) return !0;
        if ('[object Symbol]' !== i.call(e)) return !1;
        try {
            return o(e);
        } catch (e) {
            return !1;
        }
    };
} else
    e.exports = function (e) {
        return !1;
    };
