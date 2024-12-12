var i = r(538315),
    a = 'function' == typeof Symbol && 'symbol' == typeof Symbol('foo'),
    s = Object.prototype.toString,
    o = Array.prototype.concat,
    l = r(445086),
    u = function (e) {
        return 'function' == typeof e && '[object Function]' === s.call(e);
    },
    c = r(768175)(),
    d = function (e, n, r, i) {
        if (n in e) {
            if (!0 === i) {
                if (e[n] === r) return;
            } else if (!u(i) || !i()) return;
        }
        c ? l(e, n, r, !0) : l(e, n, r);
    },
    f = function (e, n) {
        var r = arguments.length > 2 ? arguments[2] : {},
            s = i(n);
        a && (s = o.call(s, Object.getOwnPropertySymbols(n)));
        for (var l = 0; l < s.length; l += 1) d(e, s[l], n[s[l]], r[s[l]]);
    };
(f.supportsDescriptors = !!c), (e.exports = f);
