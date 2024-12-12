r.d(n, {
    V: function () {
        return s;
    }
});
var i = r(239189);
r(444675);
var a = function (e) {
        return (0, i.requestAnimationFrame)(e);
    },
    s = (function () {
        return function e(e) {
            void 0 === e && (e = a);
            var n = !0,
                r = !1,
                s = 0,
                l = [],
                u = 0,
                c = new Set(),
                d = new Set(),
                f = new Set(),
                _ = function (e) {
                    var n = l.indexOf(e);
                    n < 0 &&
                        ((n = l.findIndex(function (n) {
                            return n.priority > e.priority;
                        })),
                        l.splice(~n ? n : l.length, 0, e));
                },
                h = function () {
                    if (!n)
                        try {
                            g(), e(h);
                        } catch (e) {
                            console.error(e);
                        }
                },
                p = function () {
                    n && ((n = !1), 0 == s && ((s = i.now()), e(h)));
                },
                m = [];
            this.setTimeout = function (e, n) {
                var r = i.now() + n,
                    a = function () {
                        var e = m.findIndex(function (e) {
                            return e.cancel == a;
                        });
                        e >= 0 && m.splice(e, 1);
                    },
                    s = o(m, function (e) {
                        return e.time > r;
                    }),
                    l = {
                        time: r,
                        handler: e,
                        cancel: a
                    };
                return m.splice(s, 0, l), p(), l;
            };
            var g = (this.advance = function () {
                var e = i.now();
                if (
                    (c.size && (c.forEach(_), c.clear()),
                    m.length &&
                        i.batchedUpdates(function () {
                            var n = o(m, function (n) {
                                return n.time > e;
                            });
                            m.splice(0, n).forEach(function (e) {
                                return e.handler();
                            });
                        }),
                    e > s)
                ) {
                    var n = Math.min(64, e - s);
                    (s = e),
                        i.batchedUpdates(function () {
                            l.length &&
                                (i.willAdvance(l),
                                (l = l.filter(function (e) {
                                    return (u = e.priority), !e.idle && e.advance(n), !e.idle;
                                })),
                                (u = 0)),
                                d.size &&
                                    (d.forEach(function (n) {
                                        return n(e);
                                    }),
                                    d.clear()),
                                f.size &&
                                    ((r = !0),
                                    f.forEach(function (n) {
                                        return n(e);
                                    }),
                                    f.clear(),
                                    (r = !1));
                        });
                }
            });
            (this.start = function (e) {
                u > e.priority ? c.add(e) : (_(e), p());
            }),
                (this.onFrame = function (e) {
                    d.add(e), p();
                }),
                (this.onWrite = function (e) {
                    r ? e(s) : f.add(e);
                });
        };
    })();
function o(e, n) {
    var r = e.findIndex(n);
    return r < 0 ? e.length : r;
}
