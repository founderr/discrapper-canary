n(301563);
var r = n(173850),
    i = n(859209),
    a = n(213265),
    o = n(936940),
    s = n(641236),
    l = n(251069),
    u = s('species'),
    c = RegExp.prototype;
e.exports = function (e, t, n, d) {
    var _ = s(e),
        E = !o(function () {
            var t = {};
            return (
                (t[_] = function () {
                    return 7;
                }),
                7 !== ''[e](t)
            );
        }),
        f =
            E &&
            !o(function () {
                var t = !1,
                    n = /a/;
                return (
                    'split' === e &&
                        (((n = {}).constructor = {}),
                        (n.constructor[u] = function () {
                            return n;
                        }),
                        (n.flags = ''),
                        (n[_] = /./[_])),
                    (n.exec = function () {
                        return (t = !0), null;
                    }),
                    n[_](''),
                    !t
                );
            });
    if (!E || !f || n) {
        var h = r(/./[_]),
            p = t(_, ''[e], function (e, t, n, i, o) {
                var s = r(e),
                    l = t.exec;
                if (l === a || l === c.exec)
                    return E && !o
                        ? {
                              done: !0,
                              value: h(t, n, i)
                          }
                        : {
                              done: !0,
                              value: s(n, t, i)
                          };
                return { done: !1 };
            });
        i(String.prototype, e, p[0]), i(c, _, p[1]);
    }
    d && l(c[_], 'sham', !0);
};
