var i = r(703825)(),
    a = r(192853)('Object.prototype.toString'),
    s = function (e) {
        return (!i || !e || 'object' != typeof e || !(Symbol.toStringTag in e)) && '[object Arguments]' === a(e);
    },
    o = function (e) {
        return !!s(e) || (null !== e && 'object' == typeof e && 'number' == typeof e.length && e.length >= 0 && '[object Array]' !== a(e) && '[object Function]' === a(e.callee));
    },
    l = (function () {
        return s(arguments);
    })();
(s.isLegacyArguments = o), (e.exports = l ? s : o);
