var r = String.prototype.valueOf,
    i = function (e) {
        try {
            return r.call(e), !0;
        } catch (e) {
            return !1;
        }
    },
    a = Object.prototype.toString,
    o = '[object String]',
    s = n(703825)();
e.exports = function (e) {
    return 'string' == typeof e || ('object' == typeof e && (s ? i(e) : a.call(e) === o));
};
