var i = String.prototype.valueOf,
    a = function (e) {
        try {
            return i.call(e), !0;
        } catch (e) {
            return !1;
        }
    },
    s = Object.prototype.toString,
    o = '[object String]',
    l = r(703825)();
e.exports = function (e) {
    return 'string' == typeof e || ('object' == typeof e && (l ? a(e) : s.call(e) === o));
};
