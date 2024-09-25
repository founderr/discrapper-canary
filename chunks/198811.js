var r = Date.prototype.getDay,
    i = function (e) {
        try {
            return r.call(e), !0;
        } catch (e) {
            return !1;
        }
    },
    a = Object.prototype.toString,
    o = '[object Date]',
    s = n(703825)();
e.exports = function (e) {
    return 'object' == typeof e && null !== e && (s ? i(e) : a.call(e) === o);
};
