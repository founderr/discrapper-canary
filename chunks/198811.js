var i = Date.prototype.getDay,
    a = function (e) {
        try {
            return i.call(e), !0;
        } catch (e) {
            return !1;
        }
    },
    s = Object.prototype.toString,
    o = '[object Date]',
    l = r(703825)();
e.exports = function (e) {
    return 'object' == typeof e && null !== e && (l ? a(e) : s.call(e) === o);
};
