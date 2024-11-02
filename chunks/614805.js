var r,
    i = n(531478).codes,
    a = i.ERR_MISSING_ARGS,
    s = i.ERR_STREAM_DESTROYED;
function o(e) {
    if (e) throw e;
}
function l(e) {
    e();
}
function u(e, t) {
    return e.pipe(t);
}
e.exports = function () {
    for (var e, t, i = arguments.length, c = Array(i), d = 0; d < i; d++) c[d] = arguments[d];
    var f = (e = c).length && 'function' == typeof e[e.length - 1] ? e.pop() : o;
    if ((Array.isArray(c[0]) && (c = c[0]), c.length < 2)) throw new a('streams');
    var _ = c.map(function (e, i) {
        var a,
            o,
            u,
            d,
            h,
            p,
            m,
            g,
            E = i < c.length - 1;
        return (
            (a = e),
            (o = E),
            (u = i > 0),
            (h = d =
                function (e) {
                    !t && (t = e), e && _.forEach(l), !E && (_.forEach(l), f(t));
                }),
            (p = !1),
            (d = function () {
                !p && ((p = !0), h.apply(void 0, arguments));
            }),
            (m = !1),
            a.on('close', function () {
                m = !0;
            }),
            void 0 === r && (r = n(133495)),
            r(
                a,
                {
                    readable: o,
                    writable: u
                },
                function (e) {
                    if (e) return d(e);
                    (m = !0), d();
                }
            ),
            (g = !1),
            function (e) {
                if (!m) {
                    if (!g) {
                        var t;
                        if (((g = !0), (t = a).setHeader && 'function' == typeof t.abort)) return a.abort();
                        if ('function' == typeof a.destroy) return a.destroy();
                        d(e || new s('pipe'));
                    }
                }
            }
        );
    });
    return c.reduce(u);
};
