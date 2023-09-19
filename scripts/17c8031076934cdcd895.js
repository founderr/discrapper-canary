(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [92358, 29202, 91683, 58635, 84832, 57678, 58621, 96043, 86502, 71402], {
        737264: e => {
            "use strict";
            e.exports.Q = function(e) {
                var t, n = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!n) return null;
                n.shift();
                var r = null,
                    i = [];
                if (n[2]) {
                    r = (t = n[2].split("-")).shift();
                    i = t
                }
                var o = [];
                n[5] && (o = n[5].split("-")).shift();
                var u = [];
                if (n[6]) {
                    (t = n[6].split("-")).shift();
                    for (var a, l = []; t.length;) {
                        var c = t.shift();
                        if (1 === c.length)
                            if (a) {
                                u.push({
                                    singleton: a,
                                    extension: l
                                });
                                a = c;
                                l = []
                            } else a = c;
                        else l.push(c)
                    }
                    u.push({
                        singleton: a,
                        extension: l
                    })
                }
                var s = [];
                if (n[7]) {
                    (s = n[7].split("-")).shift();
                    s.shift()
                }
                var f = [];
                n[8] && (f = n[8].split("-")).shift();
                return {
                    langtag: {
                        language: {
                            language: r,
                            extlang: i
                        },
                        script: n[3] || null,
                        region: n[4] || null,
                        variant: o,
                        extension: u,
                        privateuse: s
                    },
                    privateuse: f,
                    grandfathered: {
                        irregular: n[0] || null,
                        regular: n[1] || null
                    }
                }
            }
        },
        824390: e => {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    r = e.length;
                if (r > n) return !1;
                if (r === n) return e === t;
                e: for (var i = 0, o = 0; i < r; i++) {
                    for (var u = e.charCodeAt(i); o < n;)
                        if (t.charCodeAt(o++) === u) continue e;
                    return !1
                }
                return !0
            }
        },
        896874: e => {
            e.exports = function(e, t, n) {
                switch (n.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, n[0]);
                    case 2:
                        return e.call(t, n[0], n[1]);
                    case 3:
                        return e.call(t, n[0], n[1], n[2])
                }
                return e.apply(t, n)
            }
        },
        269199: (e, t, n) => {
            var r = n(989881),
                i = n(498612);
            e.exports = function(e, t) {
                var n = -1,
                    o = i(e) ? Array(e.length) : [];
                r(e, (function(e, r, i) {
                    o[++n] = t(e, r, i)
                }));
                return o
            }
        },
        882689: (e, t, n) => {
            var r = n(829932),
                i = n(267206),
                o = n(269199),
                u = n(571131),
                a = n(307518),
                l = n(285022),
                c = n(406557);
            e.exports = function(e, t, n) {
                var s = -1;
                t = r(t.length ? t : [c], a(i));
                var f = o(e, (function(e, n, i) {
                    return {
                        criteria: r(t, (function(t) {
                            return t(e)
                        })),
                        index: ++s,
                        value: e
                    }
                }));
                return u(f, (function(e, t) {
                    return l(e, t, n)
                }))
            }
        },
        105976: (e, t, n) => {
            var r = n(406557),
                i = n(545357),
                o = n(430061);
            e.exports = function(e, t) {
                return o(i(e, t, r), e + "")
            }
        },
        356560: (e, t, n) => {
            var r = n(575703),
                i = n(538777),
                o = n(406557),
                u = i ? function(e, t) {
                    return i(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: r(t),
                        writable: !0
                    })
                } : o;
            e.exports = u
        },
        571131: e => {
            e.exports = function(e, t) {
                var n = e.length;
                e.sort(t);
                for (; n--;) e[n] = e[n].value;
                return e
            }
        },
        626393: (e, t, n) => {
            var r = n(733448);
            e.exports = function(e, t) {
                if (e !== t) {
                    var n = void 0 !== e,
                        i = null === e,
                        o = e == e,
                        u = r(e),
                        a = void 0 !== t,
                        l = null === t,
                        c = t == t,
                        s = r(t);
                    if (!l && !s && !u && e > t || u && a && c && !l && !s || i && a && c || !n && c || !o) return 1;
                    if (!i && !u && !s && e < t || s && n && o && !i && !u || l && n && o || !a && o || !c) return -1
                }
                return 0
            }
        },
        285022: (e, t, n) => {
            var r = n(626393);
            e.exports = function(e, t, n) {
                for (var i = -1, o = e.criteria, u = t.criteria, a = o.length, l = n.length; ++i < a;) {
                    var c = r(o[i], u[i]);
                    if (c) {
                        return i >= l ? c : c * ("desc" == n[i] ? -1 : 1)
                    }
                }
                return e.index - t.index
            }
        },
        545357: (e, t, n) => {
            var r = n(896874),
                i = Math.max;
            e.exports = function(e, t, n) {
                t = i(void 0 === t ? e.length - 1 : t, 0);
                return function() {
                    for (var o = arguments, u = -1, a = i(o.length - t, 0), l = Array(a); ++u < a;) l[u] = o[t + u];
                    u = -1;
                    for (var c = Array(t + 1); ++u < t;) c[u] = o[u];
                    c[t] = n(l);
                    return r(e, this, c)
                }
            }
        },
        430061: (e, t, n) => {
            var r = n(356560),
                i = n(521275)(r);
            e.exports = i
        },
        521275: e => {
            var t = Date.now;
            e.exports = function(e) {
                var n = 0,
                    r = 0;
                return function() {
                    var i = t(),
                        o = 16 - (i - r);
                    r = i;
                    if (o > 0) {
                        if (++n >= 800) return arguments[0]
                    } else n = 0;
                    return e.apply(void 0, arguments)
                }
            }
        },
        575703: e => {
            e.exports = function(e) {
                return function() {
                    return e
                }
            }
        },
        208804: (e, t, n) => {
            e.exports = n(91175)
        },
        91175: e => {
            e.exports = function(e) {
                return e && e.length ? e[0] : void 0
            }
        },
        531351: e => {
            var t = Array.prototype.reverse;
            e.exports = function(e) {
                return null == e ? e : t.call(e)
            }
        },
        189734: (e, t, n) => {
            var r = n(121078),
                i = n(882689),
                o = n(105976),
                u = n(816612),
                a = o((function(e, t) {
                    if (null == e) return [];
                    var n = t.length;
                    n > 1 && u(e, t[0], t[1]) ? t = [] : n > 2 && u(t[0], t[1], t[2]) && (t = [t[0]]);
                    return i(e, r(t, 1), [])
                }));
            e.exports = a
        },
        16243: e => {
            if (!t) var t = {
                map: function(e, t) {
                    var n = {};
                    return t ? e.map((function(e, r) {
                        n.index = r;
                        return t.call(n, e)
                    })) : e.slice()
                },
                naturalOrder: function(e, t) {
                    return e < t ? -1 : e > t ? 1 : 0
                },
                sum: function(e, t) {
                    var n = {};
                    return e.reduce(t ? function(e, r, i) {
                        n.index = i;
                        return e + t.call(n, r)
                    } : function(e, t) {
                        return e + t
                    }, 0)
                },
                max: function(e, n) {
                    return Math.max.apply(null, n ? t.map(e, n) : e)
                }
            };
            var n = function() {
                function e(e, t, n) {
                    return (e << 10) + (t << 5) + n
                }

                function n(e) {
                    var t = [],
                        n = !1;

                    function r() {
                        t.sort(e);
                        n = !0
                    }
                    return {
                        push: function(e) {
                            t.push(e);
                            n = !1
                        },
                        peek: function(e) {
                            n || r();
                            void 0 === e && (e = t.length - 1);
                            return t[e]
                        },
                        pop: function() {
                            n || r();
                            return t.pop()
                        },
                        size: function() {
                            return t.length
                        },
                        map: function(e) {
                            return t.map(e)
                        },
                        debug: function() {
                            n || r();
                            return t
                        }
                    }
                }

                function r(e, t, n, r, i, o, u) {
                    var a = this;
                    a.r1 = e;
                    a.r2 = t;
                    a.g1 = n;
                    a.g2 = r;
                    a.b1 = i;
                    a.b2 = o;
                    a.histo = u
                }
                r.prototype = {
                    volume: function(e) {
                        var t = this;
                        t._volume && !e || (t._volume = (t.r2 - t.r1 + 1) * (t.g2 - t.g1 + 1) * (t.b2 - t.b1 + 1));
                        return t._volume
                    },
                    count: function(t) {
                        var n = this,
                            r = n.histo;
                        if (!n._count_set || t) {
                            var i, o, u, a = 0;
                            for (i = n.r1; i <= n.r2; i++)
                                for (o = n.g1; o <= n.g2; o++)
                                    for (u = n.b1; u <= n.b2; u++) a += r[e(i, o, u)] || 0;
                            n._count = a;
                            n._count_set = !0
                        }
                        return n._count
                    },
                    copy: function() {
                        var e = this;
                        return new r(e.r1, e.r2, e.g1, e.g2, e.b1, e.b2, e.histo)
                    },
                    avg: function(t) {
                        var n = this,
                            r = n.histo;
                        if (!n._avg || t) {
                            var i, o, u, a, l = 0,
                                c = 0,
                                s = 0,
                                f = 0;
                            for (o = n.r1; o <= n.r2; o++)
                                for (u = n.g1; u <= n.g2; u++)
                                    for (a = n.b1; a <= n.b2; a++) {
                                        l += i = r[e(o, u, a)] || 0;
                                        c += i * (o + .5) * 8;
                                        s += i * (u + .5) * 8;
                                        f += i * (a + .5) * 8
                                    }
                            n._avg = l ? [~~(c / l), ~~(s / l), ~~(f / l)] : [~~(8 * (n.r1 + n.r2 + 1) / 2), ~~(8 * (n.g1 + n.g2 + 1) / 2), ~~(8 * (n.b1 + n.b2 + 1) / 2)]
                        }
                        return n._avg
                    },
                    contains: function(e) {
                        var t = this,
                            n = e[0] >> 3;
                        gval = e[1] >> 3;
                        bval = e[2] >> 3;
                        return n >= t.r1 && n <= t.r2 && gval >= t.g1 && gval <= t.g2 && bval >= t.b1 && bval <= t.b2
                    }
                };

                function i() {
                    this.vboxes = new n((function(e, n) {
                        return t.naturalOrder(e.vbox.count() * e.vbox.volume(), n.vbox.count() * n.vbox.volume())
                    }))
                }
                i.prototype = {
                    push: function(e) {
                        this.vboxes.push({
                            vbox: e,
                            color: e.avg()
                        })
                    },
                    palette: function() {
                        return this.vboxes.map((function(e) {
                            return e.color
                        }))
                    },
                    size: function() {
                        return this.vboxes.size()
                    },
                    map: function(e) {
                        for (var t = this.vboxes, n = 0; n < t.size(); n++)
                            if (t.peek(n).vbox.contains(e)) return t.peek(n).color;
                        return this.nearest(e)
                    },
                    nearest: function(e) {
                        for (var t, n, r, i = this.vboxes, o = 0; o < i.size(); o++)
                            if ((n = Math.sqrt(Math.pow(e[0] - i.peek(o).color[0], 2) + Math.pow(e[1] - i.peek(o).color[1], 2) + Math.pow(e[2] - i.peek(o).color[2], 2))) < t || void 0 === t) {
                                t = n;
                                r = i.peek(o).color
                            } return r
                    },
                    forcebw: function() {
                        var e = this.vboxes;
                        e.sort((function(e, n) {
                            return t.naturalOrder(t.sum(e.color), t.sum(n.color))
                        }));
                        var n = e[0].color;
                        n[0] < 5 && n[1] < 5 && n[2] < 5 && (e[0].color = [0, 0, 0]);
                        var r = e.length - 1,
                            i = e[r].color;
                        i[0] > 251 && i[1] > 251 && i[2] > 251 && (e[r].color = [255, 255, 255])
                    }
                };

                function o(n, r) {
                    if (r.count()) {
                        var i = r.r2 - r.r1 + 1,
                            o = r.g2 - r.g1 + 1,
                            u = r.b2 - r.b1 + 1,
                            a = t.max([i, o, u]);
                        if (1 == r.count()) return [r.copy()];
                        var l, c, s, f, d = 0,
                            _ = [],
                            E = [];
                        if (a == i)
                            for (l = r.r1; l <= r.r2; l++) {
                                f = 0;
                                for (c = r.g1; c <= r.g2; c++)
                                    for (s = r.b1; s <= r.b2; s++) f += n[e(l, c, s)] || 0;
                                d += f;
                                _[l] = d
                            } else if (a == o)
                                for (l = r.g1; l <= r.g2; l++) {
                                    f = 0;
                                    for (c = r.r1; c <= r.r2; c++)
                                        for (s = r.b1; s <= r.b2; s++) f += n[e(c, l, s)] || 0;
                                    d += f;
                                    _[l] = d
                                } else
                                    for (l = r.b1; l <= r.b2; l++) {
                                        f = 0;
                                        for (c = r.r1; c <= r.r2; c++)
                                            for (s = r.g1; s <= r.g2; s++) f += n[e(c, s, l)] || 0;
                                        d += f;
                                        _[l] = d
                                    }
                        _.forEach((function(e, t) {
                            E[t] = d - e
                        }));
                        return p(a == i ? "r" : a == o ? "g" : "b")
                    }

                    function p(e) {
                        var t, n, i, o, u, a = e + "1",
                            c = e + "2",
                            s = 0;
                        for (l = r[a]; l <= r[c]; l++)
                            if (_[l] > d / 2) {
                                i = r.copy();
                                o = r.copy();
                                u = (t = l - r[a]) <= (n = r[c] - l) ? Math.min(r[c] - 1, ~~(l + n / 2)) : Math.max(r[a], ~~(l - 1 - t / 2));
                                for (; !_[u];) u++;
                                s = E[u];
                                for (; !s && _[u - 1];) s = E[--u];
                                i[c] = u;
                                o[a] = i[c] + 1;
                                return [i, o]
                            }
                    }
                }
                return {
                    quantize: function(u, a) {
                        if (!u.length || a < 2 || a > 256) return !1;
                        var l = function(t) {
                            var n, r, i, o, u = new Array(32768);
                            t.forEach((function(t) {
                                r = t[0] >> 3;
                                i = t[1] >> 3;
                                o = t[2] >> 3;
                                n = e(r, i, o);
                                u[n] = (u[n] || 0) + 1
                            }));
                            return u
                        }(u);
                        l.forEach((function() {
                            0
                        }));
                        var c = function(e, t) {
                                var n, i, o, u = 1e6,
                                    a = 0,
                                    l = 1e6,
                                    c = 0,
                                    s = 1e6,
                                    f = 0;
                                e.forEach((function(e) {
                                    n = e[0] >> 3;
                                    i = e[1] >> 3;
                                    o = e[2] >> 3;
                                    n < u ? u = n : n > a && (a = n);
                                    i < l ? l = i : i > c && (c = i);
                                    o < s ? s = o : o > f && (f = o)
                                }));
                                return new r(u, a, l, c, s, f, t)
                            }(u, l),
                            s = new n((function(e, n) {
                                return t.naturalOrder(e.count(), n.count())
                            }));
                        s.push(c);

                        function f(e, t) {
                            for (var n, r = 1, i = 0; i < 1e3;)
                                if ((n = e.pop()).count()) {
                                    var u = o(l, n),
                                        a = u[0],
                                        c = u[1];
                                    if (!a) return;
                                    e.push(a);
                                    if (c) {
                                        e.push(c);
                                        r++
                                    }
                                    if (r >= t) return;
                                    if (i++ > 1e3) return
                                } else {
                                    e.push(n);
                                    i++
                                }
                        }
                        f(s, .75 * a);
                        for (var d = new n((function(e, n) {
                                return t.naturalOrder(e.count() * e.volume(), n.count() * n.volume())
                            })); s.size();) d.push(s.pop());
                        f(d, a - d.size());
                        for (var _ = new i; d.size();) _.push(d.pop());
                        return _
                    }
                }
            }();
            e.exports = n.quantize
        },
        620745: (e, t, n) => {
            "use strict";
            var r = n(973935);
            t.s = r.createRoot;
            r.hydrateRoot
        },
        971402: (e, t, n) => {
            "use strict";
            n.d(t, {
                Zy: () => f,
                vq: () => d,
                jW: () => _
            });
            var r = n(744564),
                i = n(26468),
                o = n(120415),
                u = n(73105),
                a = n(2590);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        l(e, t, n[t])
                    }))
                }
                return e
            }

            function s(e) {
                r.Z.dispatch({
                    type: "CONTEXT_MENU_OPEN",
                    contextMenu: e
                })
            }

            function f(e) {
                (0, n(973935).flushSync)((function() {
                    r.Z.wait((function() {
                        r.Z.dispatch({
                            type: "CONTEXT_MENU_CLOSE"
                        }).finally(e)
                    }))
                }))
            }

            function d(e, t, n, r) {
                e.stopPropagation();
                if (null == e.currentTarget.contains || e.currentTarget.contains(e.target)) {
                    var l, f, d = 0,
                        _ = 0;
                    if ("pageX" in e) {
                        d = e.pageX;
                        _ = e.pageY
                    }
                    if (0 === d && 0 === _) {
                        var E, p = null === (E = e.target) || void 0 === E ? void 0 : E.getBoundingClientRect(),
                            I = null != p ? p : {},
                            h = I.left,
                            v = void 0 === h ? 0 : h,
                            O = I.top,
                            T = void 0 === O ? 0 : O,
                            g = I.width,
                            m = void 0 === g ? 0 : g,
                            S = I.height;
                        d = v + m / 2;
                        _ = T + (void 0 === S ? 0 : S) / 2
                    }
                    var y = {
                        render: t,
                        renderLazy: r,
                        target: null !== (l = e.target) && void 0 !== l ? l : e.currentTarget,
                        rect: new DOMRect(d, _, 0, 0),
                        config: c({
                            context: __OVERLAY__ ? a.IlC.OVERLAY : null !== (f = (0, i.GB)()) && void 0 !== f ? f : a.IlC.APP
                        }, n)
                    };
                    if ((null == n ? void 0 : n.enableSpellCheck) && (0, o.nI)()) var N = (0, u.RD)((function() {
                        N();
                        s(y)
                    }));
                    else {
                        e.preventDefault();
                        s(y)
                    }
                }
            }

            function _(e, t, n) {
                d(e, void 0, n, t)
            }
        },
        735885: (e, t, n) => {
            "use strict";
            n.d(t, {
                jN: () => i,
                xf: () => o,
                Ou: () => u
            });
            var r = n(744564);

            function i(e) {
                r.Z.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function o() {
                r.Z.dispatch({
                    type: "LAYER_POP"
                })
            }

            function u() {
                r.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        810978: (e, t, n) => {
            "use strict";
            n.d(t, {
                GZ: () => E,
                Gn: () => I,
                Y2: () => h,
                mE: () => v
            });
            var r = n(281110),
                i = n(744564),
                o = n(973889),
                u = n(615796),
                a = n(264628),
                l = n(673679),
                c = n(2590),
                s = n(203600);

            function f(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function d(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            f(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            f(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var _ = function(e, t) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = t.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };

            function E(e, t, n, r, i) {
                return p.apply(this, arguments)
            }

            function p() {
                return (p = d((function(e, t, n, s, f) {
                    var d, E, p, I;
                    return _(this, (function(_) {
                        switch (_.label) {
                            case 0:
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH",
                                    skuId: e
                                });
                                _.label = 1;
                            case 1:
                                _.trys.push([1, 5, , 6]);
                                d = {
                                    url: c.ANM.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                                    oldFormErrors: !0
                                };
                                E = {};
                                null != t && (E.country_code = t);
                                null != n && (E.payment_source_id = n);
                                null != s && (E.include_unpublished = s);
                                null != f && (E.revenue_surface = f);
                                d.query = E;
                                return u.Z.ipCountryCodeLoaded ? [3, 3] : [4, (0, l.GE)()];
                            case 2:
                                _.sent();
                                _.label = 3;
                            case 3:
                                return [4, r.ZP.get(d)];
                            case 4:
                                p = _.sent();
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                                    skuId: e,
                                    subscriptionPlans: p.body
                                });
                                return [3, 6];
                            case 5:
                                I = _.sent();
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                                    skuId: e
                                });
                                (0, a.q2)(I);
                                throw new o.Z(I);
                            case 6:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function I(e, t) {
                return Promise.all(e.filter((function(e) {
                    return e !== s.Si.NONE
                })).map((function(e) {
                    return E(e, t)
                })))
            }

            function h(e, t, n) {
                return Promise.all(s.YQ.filter((function(e) {
                    return e !== s.Si.NONE
                })).map((function(r) {
                    return E(r, e, t, void 0, n)
                })))
            }

            function v() {
                i.Z.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        758635: (e, t, n) => {
            "use strict";
            n.d(t, {
                W: () => a
            });
            var r = n(281110),
                i = n(744564),
                o = n(239734),
                u = n(2590);

            function a() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (o.Z.needsRefresh()) {
                    i.Z.dispatch({
                        type: "LOAD_USER_AFFINITIES"
                    });
                    return r.ZP.get({
                        url: u.ANM.USER_AFFINITIES,
                        retries: e ? 3 : 0,
                        oldFormErrors: !0
                    }).then((function(e) {
                        var t = e.body;
                        i.Z.dispatch({
                            type: "LOAD_USER_AFFINITIES_SUCCESS",
                            affinities: t
                        })
                    }), (function() {
                        i.Z.dispatch({
                            type: "LOAD_USER_AFFINITIES_FAILURE"
                        })
                    }))
                }
                return Promise.resolve()
            }
        },
        919244: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => v
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                u = n.n(o),
                a = n(882723),
                l = n(473708),
                c = n(775823),
                s = n.n(c);

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return d(e)
            }

            function _(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function E(e, t) {
                E = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return E(e, t)
            }
            var p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function I(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = d(e);
                    if (t) {
                        var i = d(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return _(this, n)
                }
            }
            var h = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && E(e, t)
                }(n, e);
                var t = I(n);

                function n() {
                    f(this, n);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    };
                    e.setRef = function(t) {
                        e._input = t
                    };
                    e.getLabelText = function() {
                        var t;
                        return null !== (t = e.props.label) && void 0 !== t ? t : e.props.disallowBackupCodes ? l.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : l.Z.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    };
                    e.getSupportedCodeTypes = function() {
                        return e.props.disallowBackupCodes ? l.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : l.Z.Messages.TWO_FA_AUTH_CODE
                    };
                    e.getPlaceholder = function() {
                        return e.props.forceNoPlaceholder ? null : null !== (t = e.props.placeholder) && void 0 !== t ? t : e.getSupportedCodeTypes();
                        var t
                    };
                    e.errorPresent = function() {
                        return null != e.props.error && "" !== e.props.error || null != e.state.errorMessage && "" !== e.state.errorMessage
                    };
                    e.handleRetry = function() {
                        var t = e.props.onRetry;
                        null == t || t().then((function() {
                            return e.setState({
                                retrySuccess: !0
                            })
                        }))
                    };
                    e.handleSubmit = function(t) {
                        t.preventDefault();
                        var n = e.props,
                            r = n.handleSubmit,
                            i = n.onError;
                        r(e.state.code).catch((function(t) {
                            if (null != t.body) {
                                null == i || i(t.body);
                                t.body.message && e.setState({
                                    errorMessage: t.body.message
                                })
                            }
                        }))
                    };
                    e.handleCancel = function() {
                        var t = e.props,
                            n = t.onClose,
                            r = t.handleEarlyClose;
                        n();
                        null == r || r()
                    };
                    e.handleCodeChange = function(t) {
                        e.setState({
                            code: t
                        })
                    };
                    return e
                }
                n.prototype.render = function() {
                    var e, t = this.props,
                        n = t.title,
                        o = t.actionText,
                        c = t.children,
                        f = t.error,
                        d = t.isLoading,
                        _ = t.maxLength,
                        E = t.transitionState,
                        p = t.helpMessage,
                        I = t.retryPrompt,
                        h = t.retrySuccessMessage,
                        v = this.state,
                        O = v.code,
                        T = v.errorMessage,
                        g = v.retrySuccess,
                        m = i.Children.count(c) > 0 ? (0, r.jsx)(a.Card, {
                            type: a.Card.Types.WARNING,
                            className: s().card,
                            children: (0, r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: c
                            })
                        }) : null,
                        S = null != I ? (0, r.jsxs)(a.Text, {
                            className: u()(s().submitText, s().spacing),
                            variant: "text-sm/normal",
                            children: [(0,
                                r.jsx)("br", {}), (0, r.jsx)(a.Clickable, {
                                className: u()(s().spacing, s().link),
                                onClick: this.handleRetry,
                                children: (0, r.jsx)(a.Anchor, {
                                    children: I
                                })
                            })]
                        }) : null,
                        y = g ? (0, r.jsx)(a.Card, {
                            type: a.Card.Types.SUCCESS,
                            className: s().card,
                            children: (0, r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: h
                            })
                        }) : null;
                    return (0, r.jsx)(a.ModalRoot, {
                        transitionState: E,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(a.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: n
                                })
                            }), (0, r.jsxs)(a.ModalContent, {
                                children: [null != p ? (0, r.jsx)(a.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: s().spacing,
                                    children: p
                                }) : null, m, y, (0, r.jsxs)(a.FormItem, {
                                    title: this.getLabelText(),
                                    className: s().spacing,
                                    children: [(0, r.jsx)(a.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != _ ? _ : 10,
                                        value: O,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0,
                                        r.jsx)(a.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: s().error,
                                        children: null != f ? f : T
                                    }) : null, S]
                                })]
                            }), (0, r.jsxs)(a.ModalFooter, {
                                children: [(0, r.jsx)(a.Button, {
                                    type: "submit",
                                    disabled: d || 0 === O.length,
                                    children: null != o ? o : l.Z.Messages.CONFIRM
                                }), (0, r.jsx)(a.Button, {
                                    onClick: this.handleCancel,
                                    disabled: d,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.PRIMARY,
                                    children: l.Z.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                };
                return n
            }(i.PureComponent);
            h.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            const v = h
        },
        973889: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => f
            });
            var r = n(281110),
                i = n(2590),
                o = n(473708);

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function a(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function l(e, t) {
                l = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return l(e, t)
            }
            var c = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function s(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = u(e);
                    if (t) {
                        var i = u(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return a(this, n)
                }
            }
            var f = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && l(e, t)
                }(n, e);
                var t = s(n);

                function n(e, r) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    return t.call(this, e, r, o.Z.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: i.yXt.STATUS
                    }))
                }
                return n
            }(r.ZP.V6OrEarlierAPIError)
        },
        218190: (e, t, n) => {
            "use strict";
            n.d(t, {
                G: () => r
            });
            var r = (0, n(260561).B)({
                kind: "user",
                id: "2023-03_channel_name_emojis",
                label: "Channel Emojis",
                defaultConfig: {
                    enabled: !1,
                    left: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable channel name emojis",
                    config: {
                        enabled: !0,
                        left: !1
                    }
                }, {
                    id: 2,
                    label: "Emojis to left of channel icon",
                    config: {
                        enabled: !0,
                        left: !0
                    }
                }]
            })
        },
        83797: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n(2590);

            function i(e) {
                return null != e && e.type !== r.IIU.CUSTOM_STATUS && (null != e.details || null != e.assets && (null != e.assets.large_image || null != e.assets.small_text) || null != e.party || null != e.secrets || null != e.state)
            }
        },
        153686: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r;
            ! function(e) {
                e.POPOUT_WINDOW = "popout window";
                e.OVERLAY = "overlay";
                e.NOTICE = "notice";
                e.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip";
                e.BADGE = "badge";
                e.USER_SETTINGS = "user settings";
                e.USER_SETTINGS_MENU = "user settings menu";
                e.ACCOUNT = "account";
                e.TEXT_AND_IMAGES = "text and images";
                e.GUILD_SETTINGS = "guild settings";
                e.OVERVIEW = "overview";
                e.STICKERS = "stickers";
                e.VANITY_URL = "vanity url";
                e.PREMIUM_MARKETING = "premium marketing";
                e.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison";
                e.PREMIUM_PAYMENT_MODAL = "premium payment modal";
                e.PREMIUM_UPSELL_ALERT = "premium upsell alert";
                e.PREMIUM_UPSELL_MODAL = "premium upsell modal";
                e.PREMIUM_SETTINGS = "premium settings";
                e.PAYMENT_FLOW_TEST_PAGE = "payment flow test page";
                e.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet";
                e.CHANNEL_CALL = "channel call";
                e.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen";
                e.RTC_PANEL = "rtc panel";
                e.SOUNDBOARD_BUTTON = "soundboard button";
                e.SOUNDBOARD_POPOUT = "soundboard popout";
                e.SOUNDBOARD_WHEEL = "soundboard wheel";
                e.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet";
                e.GIFT_BUTTON = "gift button";
                e.EXPRESSION_SUGGESTIONS = "expression suggestions";
                e.EMOJI_PICKER = "emoji picker";
                e.STICKER_PICKER = "sticker picker";
                e.STICKER_POPOUT = "sticker popout";
                e.PREMIUM_UPSELL = "premium upsell";
                e.EMPTY_STATE = "empty state";
                e.SUBSCRIPTION_DETAILS = "subscription details";
                e.SUBSCRIPTION_HEADER = "subscription header";
                e.ACCOUNT_CREDIT_BANNER = "account credit banner";
                e.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal";
                e.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner";
                e.STREAM_QUALITY_INDICATOR = "stream quality indicator";
                e.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice";
                e.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice";
                e.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal";
                e.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell";
                e.RPC = "rpc";
                e.BILLING_STANDALONE = "billing standalone";
                e.GUILD_CHANNEL_LIST = "guild channel list";
                e.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer";
                e.STICKER_MESSAGE = "sticker message";
                e.CHANNEL_TEXT_AREA = "channel text area";
                e.HEADER_BAR = "header bar";
                e.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal";
                e.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message";
                e.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell";
                e.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell";
                e.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal";
                e.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal";
                e.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice";
                e.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal";
                e.GUILD_HEADER = "guild header";
                e.GUILD_BANNER = "guild banner";
                e.GUILD_BANNER_NOTICE = "guild banner notice";
                e.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal";
                e.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal";
                e.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal";
                e.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar";
                e.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none";
                e.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1";
                e.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2";
                e.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3";
                e.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner";
                e.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display";
                e.GUILDS_LIST = "guilds list";
                e.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector";
                e.ACTIVITY_DIRECTORY = "activity directory";
                e.ACTIVITY_TILE = "activity tile";
                e.ACTIVITY_UPSELL = "activity upsell";
                e.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle";
                e.INSTANT_INVITE_MODAL = "instant invite modal";
                e.IMAGE_CROPPING_MODAL = "image cropping modal";
                e.GIF_PICKER = "gif picker";
                e.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal";
                e.INVITE_MODAL = "invite modal";
                e.INVITE_EMBED = "invite embed";
                e.NEW_GUILD_BUTTON = "new guild button";
                e.CHARACTER_COUNT = "character count";
                e.DM_CHANNEL = "dm channel";
                e.GUILD_CHANNEL = "guild channel";
                e.FORUM_CHANNEL = "forum channel";
                e.FILE_UPLOAD_POPOUT = "file upload popout";
                e.EMOJI = "emoji";
                e.PROFILE = "profile";
                e.PROFILE_MODAL = "profile modal";
                e.PROFILE_POPOUT = "profile popout";
                e.GUILD_PROFILE = "guild profile";
                e.EDIT_AVATAR = "edit avatar";
                e.EDIT_BANNER = "edit banner";
                e.CHAT_INPUT = "chat input";
                e.CREATE_THREAD = "create thread";
                e.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header";
                e.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay";
                e.SELECT_IMAGE_MODAL = "select image modal";
                e.VIDEO_BACKGROUND_OPTIONS = "video background options";
                e.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option";
                e.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell";
                e.CAMERA_PREVIEW = "camera preview";
                e.HOME_PAGE_PREMIUM_TAB = "home page premium tab";
                e.PREMIUM_MARKETING_SURFACE = "premium marketing surface";
                e.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta";
                e.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta";
                e.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta";
                e.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta";
                e.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta";
                e.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta";
                e.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta";
                e.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card";
                e.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card";
                e.PREMIUM_MARKETING_FEATURE = "premium marketing feature";
                e.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table";
                e.PREMIUM_MARKETING_FOOTER = "premium marketing footer";
                e.CHANNEL_CALL_ACTION_BAR = "channel call action bar";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo";
                e.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls";
                e.VOICE_CONTROL_TRAY = "voice control tray";
                e.ACTIVE_NOW_COLUMN = "active now column";
                e.CONTEXT_MENU = "context menu";
                e.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu";
                e.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu";
                e.CHANNEL_CATEGORY_MENU = "channel category menu";
                e.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu";
                e.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu";
                e.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu";
                e.CHANNEL_LIST_THREAD_MENU = "channel list thread menu";
                e.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu";
                e.CHANNEL_TITLE_MENU = "channel title menu";
                e.GROUP_DM_MENU = "group dm menu";
                e.AUDIT_LOG_USER_MENU = "audit log user menu";
                e.BANNED_USER_MENU = "banned user menu";
                e.DM_USER_MENU = "dm user menu";
                e.GROUP_DM_USER_MENU = "group dm user menu";
                e.GUILD_CHANNEL_USER_MENU = "guild channel user menu";
                e.GUILD_MODERATION_USER_MENU = "guild moderation user menu";
                e.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu";
                e.GUILD_SETTINGS_USER_MENU = "guild settings user menu";
                e.GUILD_USER_MENU = "guild user menu";
                e.THREAD_USER_MENU = "thread user menu";
                e.USER_GENERIC_MENU = "user generic menu";
                e.USER_PROFILE_ACTIONS_MENU = "user profile actions menu";
                e.VOICE_ACTION_SHEET = "voice action sheet";
                e.FOCUSED_VOICE_CONTROLS = "focused voice controls";
                e.MASKED_LINK = "masked link";
                e.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet";
                e.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet";
                e.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet";
                e.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell";
                e.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal";
                e.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal";
                e.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet";
                e.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal";
                e.ACCOUNT_PROFILE_POPOUT = "account profile popout";
                e.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet";
                e.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium";
                e.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro";
                e.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting";
                e.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022";
                e.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark";
                e.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip";
                e.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out";
                e.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker";
                e.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone";
                e.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night";
                e.STAGE_VIDEO_LIMIT = "stage video limit";
                e.ACTIVITIES_MINI_SHELF = "activities mini shelf";
                e.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner";
                e.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite";
                e.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion";
                e.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button";
                e.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark";
                e.CLIENT_THEMES_EDITOR = "client themes editor";
                e.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector";
                e.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert";
                e.SHARE_NITRO_EMBED = "share nitro embed";
                e.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message";
                e.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button";
                e.REFERRAL_TRIALS_POPOUT = "referral trials popout";
                e.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal";
                e.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner";
                e.ACTIVITY_BOOKMARK = "activity bookmark";
                e.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher";
                e.ACTIVITY_DETAIL_PAGE = "activity detail page";
                e.ACTIVITIES_PAGE = "activities page";
                e.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta";
                e.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile";
                e.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content";
                e.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky";
                e.ACTIVITIES_HAPPENING_NOW = "activities happening now";
                e.MEDIA_VIEWER = "media viewer";
                e.MESSAGE_LONG_PRESS_MENU = "message long press menu";
                e.COLLECTIBLES_SHOP = "collectibles shop";
                e.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal";
                e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell";
                e.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell";
                e.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal";
                e.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal";
                e.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell";
                e.PREMIUM_BILLING_INFO = "premium billing info";
                e.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details";
                e.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice";
                e.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview";
                e.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview";
                e.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated";
                e.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal";
                e.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice";
                e.PREMIUM_PLAN_SELECT = "premium_plan_select";
                e.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview";
                e.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content";
                e.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer";
                e.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview";
                e.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview";
                e.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT";
                e.MEMBER_SAFETY_PAGE = "member safety page";
                e.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page";
                e.GUILD_MEMBER_MOD_VIEW = "guild member mod view";
                e.GUILD_PRODUCT_EMBED_CARD = "guild product embed card";
                e.GUILD_PRODUCT_INFO_MODAL = "guild product info modal";
                e.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal";
                e.GUILD_SHOP_PAGE = "guild shop page";
                e.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details";
                e.MESSAGE_REMIX_TAG = "message remix tag";
                e.MESSAGE_REMIX_BUTTON = "message remix button";
                e.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity";
                e.CLIPS_SETTINGS = "clips settings";
                e.CLIPS_GALLERY = "clips gallery";
                e.CLIPS_GALLERY_ITEM = "clips gallery item";
                e.CLIPS_EDITOR = "clips editor";
                e.CLIPS_SHARE_MODAL = "clips share modal";
                e.CHANNEL_ATTACH_BUTTON = "channel attach button";
                e.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet"
            }(r || (r = {}));
            const i = r
        },
        396043: (e, t, n) => {
            "use strict";
            n.d(t, {
                v_: () => L,
                JS: () => C,
                hH: () => R,
                AB: () => U,
                ZP: () => Z,
                oG: () => G,
                kO: () => D,
                yw: () => w
            });
            var r = n(496486),
                i = n.n(r),
                o = n(940060),
                u = n(382060),
                a = n(664625),
                l = n(61209),
                c = n(5544),
                s = n(27851),
                f = n(21372),
                d = n(567403),
                _ = n(525077),
                E = n(682776),
                p = n(491260),
                I = n(563367),
                h = n(715107),
                v = n(464187),
                O = n(407561),
                T = n(652591),
                g = n(563135),
                m = n(671723);
            var S = n(2590),
                y = n(897196);

            function N(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        N(e, t, n[t])
                    }))
                }
                return e
            }

            function A(e) {
                var t = 0;
                for (var n in e) t += 1;
                return t
            }

            function R(e) {
                if (null == e) return null;
                var t = d.Z.getGuild(e);
                if (null == t) return null;
                var n, r = a.default.getId(),
                    i = f.ZP.getMember(e, r),
                    o = c.ZP.getChannels(e),
                    u = o[c.sH].length,
                    l = o[c.Zb].length,
                    _ = O.Z.getVoiceStates(e);
                return {
                    guild_id: t.id,
                    guild_size_total: s.Z.getMemberCount(e),
                    guild_num_channels: u + l,
                    guild_num_text_channels: u,
                    guild_num_voice_channels: l,
                    guild_num_roles: A(t.roles),
                    guild_member_num_roles: null != i ? i.roles.length : 0,
                    guild_member_perms: String(null !== (n = E.Z.getGuildPermissions(t)) && void 0 !== n ? n : g.ZP.NONE),
                    guild_is_vip: t.hasFeature(S.oNc.VIP_REGIONS),
                    is_member: null != i,
                    num_voice_channels_active: A(_)
                }
            }

            function P(e, t) {
                return {
                    channel_static_route: t,
                    channel_hidden: !1
                }
            }

            function C(e) {
                if (null == e) return null;
                var t = l.Z.getChannel(e);
                return null == t ? null : L(t)
            }

            function L(e) {
                if (null == e) return null;
                var t, n = !1,
                    r = e.getGuildId();
                if (null != r) {
                    var i = function(e) {
                        if (null == e) return !1;
                        var t = e.permissionOverwrites[r];
                        return null != t && o.Z.has(t.deny, S.Plq.VIEW_CHANNEL)
                    };
                    n = u.Ec.has(e.type) && null != e.parent_id ? i(l.Z.getChannel(e.parent_id)) : i(e)
                }
                return {
                    channel_id: e.id,
                    channel_type: e.type,
                    channel_size_total: e.isPrivate() ? e.recipients.length : 0,
                    channel_member_perms: String(null != r && null !== (t = E.Z.getChannelPermissions(e)) && void 0 !== t ? t : g.ZP.NONE),
                    channel_hidden: n
                }
            }

            function U(e) {
                if (null == e) return null;
                var t = l.Z.getChannel(e);
                if (null == t) return null;
                var n, r = _.Z.isVideoEnabled(),
                    i = I.Z.getMediaSessionId();
                return b({
                    channel_id: t.id,
                    channel_type: t.type,
                    guild_id: t.getGuildId(),
                    media_session_id: i
                }, D(t.getGuildId(), t.id, r), {
                    game_name: null != (n = m.ZP.getCurrentGameForAnalytics()) ? n.name : null,
                    game_id: null != n ? n.id : null
                })
            }

            function M(e, t) {
                return null == e ? null != t ? t : null : e.isPrivate() ? null : null !== (r = null !== (n = e.getGuildId()) && void 0 !== n ? n : t) && void 0 !== r ? r : null;
                var n, r
            }

            function w(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!T.default.isThrottled(e)) {
                    var r = !("location" in t) || t.location !== S.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        i = "guild_id" in t ? t.guild_id : r ? v.Z.getGuildId() : null,
                        o = "channel_id" in t ? t.channel_id : r ? h.Z.getChannelId(i) : null,
                        u = l.Z.getChannel(o),
                        a = M(u, i),
                        c = b({}, t, R(a), null != i && null != o && (0, y.AB)(o) ? P(0, o) : L(u));
                    T.default.track(e, c, {
                        flush: n
                    })
                }
            }

            function D(e, t, n) {
                var r = {
                    voice_state_count: 0,
                    video_stream_count: 0,
                    video_enabled: n
                };
                i()(O.Z.getVoiceStates(e)).filter((function(e) {
                    return e.channelId === t
                })).filter((function(e) {
                    return e.userId !== a.default.getId()
                })).forEach((function(e) {
                    r.voice_state_count++;
                    (e.selfVideo || e.selfStream) && r.video_stream_count++
                }));
                return r
            }

            function G(e, t) {
                var n = {
                    custom_status_count: 0
                };
                i()(O.Z.getVoiceStates(e)).forEach((function(e) {
                    e.channelId === t && null != p.Z.findActivity(e.userId, (function(e) {
                        return e.type === S.IIU.CUSTOM_STATUS
                    })) && n.custom_status_count++
                }));
                return n
            }
            const Z = {
                trackWithMetadata: w,
                getVoiceStateMetadata: D
            }
        },
        272200: (e, t, n) => {
            "use strict";
            n.d(t, {
                Qi: () => r,
                iw: () => i,
                Kw: () => o,
                Vh: () => u,
                ub: () => a,
                bB: () => l
            });
            var r, i, o, u, a, l;
            ! function(e) {
                e[e.BUILT_IN = 0] = "BUILT_IN";
                e[e.APPLICATION = 1] = "APPLICATION"
            }(r || (r = {}));
            ! function(e) {
                e[e.BUILT_IN = 0] = "BUILT_IN";
                e[e.BUILT_IN_TEXT = 1] = "BUILT_IN_TEXT";
                e[e.BUILT_IN_INTEGRATION = 2] = "BUILT_IN_INTEGRATION";
                e[e.BOT = 3] = "BOT";
                e[e.PLACEHOLDER = 4] = "PLACEHOLDER"
            }(i || (i = {}));
            ! function(e) {
                e[e.ROLE = 1] = "ROLE";
                e[e.USER = 2] = "USER";
                e[e.CHANNEL = 3] = "CHANNEL"
            }(o || (o = {}));
            ! function(e) {
                e.DISCOVERY = "discovery";
                e.SUGGESTION = "suggestion";
                e.MENTION = "mention";
                e.PASTE = "paste";
                e.RECALL = "recall";
                e.POPULAR_COMMANDS = "popular_commands";
                e.MJ_CHAT_BAR = "mj_chat_bar";
                e.QUERY = "query"
            }(u || (u = {}));
            ! function(e) {
                e[e.BUILT_IN = 1] = "BUILT_IN";
                e[e.FRECENCY = 2] = "FRECENCY";
                e[e.APP = 3] = "APP"
            }(a || (a = {}));
            ! function(e) {
                e[e.CHAT = 0] = "CHAT";
                e[e.APPLICATION_LAUNCHER = 1] = "APPLICATION_LAUNCHER"
            }(l || (l = {}))
        },
        28661: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(667294),
                i = n(202351),
                o = n(199731),
                u = n(875700),
                a = n(959207);

            function l(e, t) {
                return e.length === t.length && !e.some((function(e, n) {
                    return !(0, o.Z)(t[n], e)
                }))
            }

            function c(e) {
                r.useEffect((function() {
                    u.Z.fetchApplications(e, !1)
                }), [e]);
                var t = (0, i.e7)([a.Z], (function() {
                    return e.map((function(e) {
                        return {
                            id: e,
                            application: a.Z.getGame(e),
                            fetching: a.Z.isFetching(e),
                            failed: a.Z.didFetchingFail(e)
                        }
                    }))
                }), [e], l);
                return r.useMemo((function() {
                    return t.map((function(e) {
                        return e.application
                    }))
                }), [t])
            }
        },
        792800: (e, t, n) => {
            "use strict";
            n.d(t, {
                PR: () => p,
                EM: () => I,
                Tt: () => v,
                yY: () => O,
                ZD: () => m
            });
            var r = n(667294),
                i = n(38736);

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function l(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || s(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c(e) {
                return function(e) {
                    if (Array.isArray(e)) return o(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || s(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(e, t) {
                if (e) {
                    if ("string" == typeof e) return o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
                }
            }
            var f = {
                    base: n(120415).FB ? void 0 : "Discord"
                },
                d = 0,
                _ = {
                    count: 3,
                    onlyWhenBlurred: !1,
                    interval: 1e3
                },
                E = (0, i.Z)((function() {
                    return {
                        titles: [f],
                        notificationCount: void 0,
                        flashQueue: []
                    }
                }));

            function p(e) {
                E.setState({
                    notificationCount: e
                })
            }

            function I(e) {
                var t = a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            u(e, t, n[t])
                        }))
                    }
                    return e
                }({}, _, e), {
                    id: d++
                });
                t.count = Math.max(t.count, t.messages.length);
                E.setState((function(e) {
                    return {
                        flashQueue: c(e.flashQueue).concat([t])
                    }
                }));
                return function() {
                    return h(t.id)
                }
            }

            function h(e) {
                E.setState((function(t) {
                    return {
                        flashQueue: t.flashQueue.filter((function(t) {
                            return t.id !== e
                        }))
                    }
                }))
            }

            function v(e) {
                r.useEffect((function() {
                    return function(e) {
                        E.setState((function(t) {
                            return {
                                titles: [e].concat(c(t.titles))
                            }
                        }));
                        return function() {
                            E.setState((function(t) {
                                return {
                                    titles: t.titles.filter((function(t) {
                                        return t !== e
                                    }))
                                }
                            }))
                        }
                    }(e)
                }), c(Object.values(e)))
            }

            function O(e) {
                v(e);
                return null
            }

            function T() {
                var e = l(E((function(e) {
                        var t = e.flashQueue,
                            n = function(e) {
                                var t, n, r, i = !0,
                                    o = !1,
                                    u = void 0;
                                try {
                                    for (var a, l = e.titles[Symbol.iterator](); !(i = (a = l.next()).done); i = !0) {
                                        var c = a.value;
                                        if (null != t && null != n) break;
                                        t = null != t ? t : c.base;
                                        n = null != n ? n : c.location;
                                        r = null != r ? r : c.subsection
                                    }
                                } catch (e) {
                                    o = !0;
                                    u = e
                                } finally {
                                    try {
                                        i || null == l.return || l.return()
                                    } finally {
                                        if (o) throw u
                                    }
                                }
                                return [t, r, n]
                            }(e).filter((function(e) {
                                return null != e
                            })).join(" | "),
                            r = function(e) {
                                var t = e.notificationCount;
                                return null == t || 0 === t ? "" : t < 0 ? "• " : "(".concat(t, ") ")
                            }(e);
                        return ["".concat(r).concat(n), t[0]]
                    })), 2),
                    t = e[0],
                    n = e[1],
                    i = l(r.useState(!1), 2),
                    o = i[0],
                    u = i[1],
                    a = r.useRef(0),
                    c = null == n ? void 0 : n.messages[a.current % n.messages.length];
                r.useEffect((function() {
                    if (null != n) {
                        if (!document.hasFocus() || !n.onlyWhenBlurred) {
                            var e = setInterval((function() {
                                if (a.current >= n.count) {
                                    h(n.id);
                                    u(!1)
                                } else u((function(e) {
                                    if (e) {
                                        a.current += 1;
                                        return !1
                                    }
                                    return !0
                                }))
                            }), n.interval);
                            return function() {
                                return clearInterval(e)
                            }
                        }
                        h(n.id);
                        u(!1)
                    } else {
                        a.current = 0;
                        u(!1)
                    }
                }), [n]);
                return o ? c : t
            }

            function g() {
                r.useEffect((function() {
                    var e = function() {
                        E.setState({
                            flashQueue: []
                        })
                    };
                    document.addEventListener("focusin", e, {
                        capture: !0
                    });
                    return function() {
                        return document.removeEventListener("focusin", e, {
                            capture: !0
                        })
                    }
                }), [])
            }

            function m() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).skipsSettingDefaultPageTitle;
                g();
                var t = T();
                r.useEffect((function() {
                    e && t === f.base || (document.title = t)
                }), [e, t])
            }
        },
        165586: (e, t, n) => {
            "use strict";
            n.d(t, {
                LY: () => r,
                aW: () => f,
                ws: () => i,
                tI: () => o,
                L9: () => d,
                no: () => _,
                ND: () => E,
                WC: () => I,
                z8: () => h,
                km: () => O,
                k0: () => T,
                af: () => g
            });
            var r, i, o, u, a = n(2590),
                l = n(203600),
                c = n(473708);

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }! function(e) {
                e[e.RESOLUTION_480 = 480] = "RESOLUTION_480";
                e[e.RESOLUTION_720 = 720] = "RESOLUTION_720";
                e[e.RESOLUTION_1080 = 1080] = "RESOLUTION_1080";
                e[e.RESOLUTION_1440 = 1440] = "RESOLUTION_1440";
                e[e.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE"
            }(r || (r = {}));

            function f(e) {
                switch (e) {
                    case r.RESOLUTION_480:
                        return r.RESOLUTION_480;
                    case r.RESOLUTION_720:
                        return r.RESOLUTION_720;
                    case r.RESOLUTION_1080:
                        return r.RESOLUTION_1080;
                    case r.RESOLUTION_SOURCE:
                        return r.RESOLUTION_SOURCE;
                    default:
                        throw new Error("Unknown resolution: ".concat(e))
                }
            }! function(e) {
                e[e.FPS_5 = 5] = "FPS_5";
                e[e.FPS_15 = 15] = "FPS_15";
                e[e.FPS_30 = 30] = "FPS_30";
                e[e.FPS_60 = 60] = "FPS_60"
            }(i || (i = {}));
            ! function(e) {
                e[e.PRESET_VIDEO = 1] = "PRESET_VIDEO";
                e[e.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS";
                e[e.PRESET_CUSTOM = 3] = "PRESET_CUSTOM"
            }(o || (o = {}));

            function d(e) {
                switch (e) {
                    case i.FPS_5:
                        return i.FPS_5;
                    case i.FPS_15:
                        return i.FPS_15;
                    case i.FPS_30:
                        return i.FPS_30;
                    case i.FPS_60:
                        return i.FPS_60;
                    default:
                        throw new Error("Unknown frame rate: ".concat(e))
                }
            }
            var _ = (s(u = {}, o.PRESET_DOCUMENTS, [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_15
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_5
                }]), s(u, o.PRESET_VIDEO, [{
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_60
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_60
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_60
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_30
                }]), s(u, o.PRESET_CUSTOM, []), u),
                E = [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_60,
                    quality: l.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_30,
                    quality: l.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_15,
                    quality: l.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_5,
                    preset: o.PRESET_DOCUMENTS
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_30,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_15,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_30,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_15,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_1,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_30
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_15
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_5
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: i.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_1,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: i.FPS_30
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: i.FPS_15
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: i.FPS_5
                }];

            function p(e, t) {
                return {
                    value: e,
                    get label() {
                        return null != t ? t() : e
                    }
                }
            }
            var I = [p(r.RESOLUTION_720), p(r.RESOLUTION_1080), p(r.RESOLUTION_1440), p(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                h = [p(r.RESOLUTION_720), p(r.RESOLUTION_1080), p(r.RESOLUTION_1440)],
                v = function(e) {
                    return "".concat(e, "p")
                },
                O = [p(r.RESOLUTION_480, (function() {
                    return v(r.RESOLUTION_480)
                })), p(r.RESOLUTION_720, (function() {
                    return v(r.RESOLUTION_720)
                })), p(r.RESOLUTION_1080, (function() {
                    return v(r.RESOLUTION_1080)
                })), p(r.RESOLUTION_1440, (function() {
                    return v(r.RESOLUTION_1440)
                })), p(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                T = [p(i.FPS_15), p(i.FPS_30), p(i.FPS_60)],
                g = [p(i.FPS_15, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_15
                    })
                })), p(i.FPS_30, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_30
                    })
                })), p(i.FPS_60, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_60
                    })
                }))]
        },
        773411: (e, t, n) => {
            "use strict";
            n.d(t, {
                N2: () => f,
                YM: () => d,
                Dx: () => _,
                jD: () => E,
                bO: () => p,
                Xp: () => I,
                fV: () => h
            });
            var r = n(202351),
                i = n(747820),
                o = n(260561),
                u = n(339432),
                a = n(5544),
                l = n(567403),
                c = n(2590);

            function s(e, t, n) {
                return t.getChannels(e)[a.sH].filter((function(t) {
                    var r = t.channel;
                    return !n.isChannelGated(e, r.id)
                })).length > 5
            }

            function f(e) {
                var t = (0, r.e7)([a.ZP, i.Z], (function() {
                    return null != e && s(e.id, a.ZP, i.Z)
                }));
                return !__OVERLAY__ && (!!t && (null != e && e.hasFeature(c.oNc.GUILD_HOME_DEPRECATION_OVERRIDE)))
            }

            function d(e) {
                if (__OVERLAY__) return !1;
                if (e === c.ME || e === c.I_8) return !1;
                if ((0, u.cn)()) return !1;
                var t = l.Z.getGuild(e);
                return null != t && (!!s(e, a.ZP, i.Z) && t.hasFeature(c.oNc.GUILD_HOME_DEPRECATION_OVERRIDE))
            }
            var _ = (0, o.B)({
                    kind: "user",
                    id: "2022-01_home_feed_toggle",
                    label: "Show Guild Feed Sorting Selector",
                    defaultConfig: {
                        showSelector: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes Selector",
                        config: {
                            showSelector: !0
                        }
                    }]
                }),
                E = (0, o.B)({
                    kind: "user",
                    id: "2022-06_home_refresh_button",
                    label: "Show refresh button",
                    defaultConfig: {
                        showRefreshButton: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes button",
                        config: {
                            showRefreshButton: !0
                        }
                    }]
                }),
                p = (0, o.B)({
                    kind: "user",
                    id: "2022-08_home_badge",
                    label: "Show badge on home channel",
                    defaultConfig: {
                        showBadge: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "show badge",
                        config: {
                            showBadge: !0
                        }
                    }]
                }),
                I = ((0, o.B)({
                    kind: "user",
                    id: "2022-08_home_drawer_autoclose",
                    label: "Auto close home drawer",
                    defaultConfig: {
                        autoCloseDrawer: !1,
                        animation: !1,
                        delay: null
                    },
                    treatments: [{
                        id: 1,
                        label: "normal animation",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !0,
                            delay: null
                        }
                    }, {
                        id: 2,
                        label: "no animate",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !1,
                            delay: null
                        }
                    }, {
                        id: 3,
                        label: "150 delayed animation",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !0,
                            delay: 150
                        }
                    }, {
                        id: 4,
                        label: "250 delayed animation",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !0,
                            delay: 250
                        }
                    }, {
                        id: 5,
                        label: "500 delayed animation",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !0,
                            delay: 500
                        }
                    }]
                }), (0, o.B)({
                    kind: "user",
                    id: "2022-09_welcome_header",
                    label: "Show welcome header for home",
                    defaultConfig: {
                        showWelcomeHeader: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "show welcome header",
                        config: {
                            showWelcomeHeader: !0
                        }
                    }]
                }), (0, o.B)({
                    kind: "user",
                    id: "2022-12_home_feedback_ux",
                    label: "Show post feedback for home",
                    defaultConfig: {
                        showFeedback: !1
                    },
                    treatments: [{
                        id: 100,
                        label: "show feedback",
                        config: {
                            showFeedback: !0
                        }
                    }]
                })),
                h = (0, o.B)({
                    kind: "guild",
                    id: "2023-03_home_deprecation",
                    label: "Home Deprecation",
                    defaultConfig: {
                        showDeprecationNotice: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show notice",
                        config: {
                            showDeprecationNotice: !0
                        }
                    }]
                })
        },
        414306: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c,
                $: () => s
            });
            var r = n(202351),
                i = n(747820),
                o = n(61209),
                u = n(682776),
                a = n(2590),
                l = {
                    needSubscriptionToAccess: !1,
                    isSubscriptionGated: !1
                };

            function c(e) {
                return (0, r.cj)([o.Z, i.Z, u.Z], (function() {
                    return s(e, o.Z, i.Z, u.Z)
                }), [e])
            }

            function s(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Z,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Z,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u.Z,
                    c = t.getChannel(e);
                if (null == c ? void 0 : c.isRoleSubscriptionTemplatePreviewChannel()) return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: !0
                };
                if (null == c || !n.isChannelGated(c.guild_id, c.id)) return l;
                var s = c.isGuildVocal() ? !r.can(a.Plq.CONNECT, c) : !r.can(a.Plq.VIEW_CHANNEL, c);
                return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: s
                }
            }
        },
        58387: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                i = (n(667294), n(882723));

            function o(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function u(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var u = e.apply(t, n);

                        function a(e) {
                            o(u, r, i, a, l, "next", e)
                        }

                        function l(e) {
                            o(u, r, i, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var l = function(e, t) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = t.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };
            const c = {
                open: function() {
                    (0, i.openModalLazy)(u((function() {
                        var e, t;
                        return l(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, Promise.all([n.e(40532), n.e(47405), n.e(43586), n.e(27499), n.e(3790), n.e(96043), n.e(30796)]).then(n.bind(n, 834883))];
                                case 1:
                                    e = i.sent(), t = e.default;
                                    return [2, function(e) {
                                        return (0, r.jsx)(t, function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    r = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                }))));
                                                r.forEach((function(t) {
                                                    a(e, t, n[t])
                                                }))
                                            }
                                            return e
                                        }({}, e))
                                    }]
                            }
                        }))
                    })))
                }
            }
        },
        980604: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => ie
            });
            var r = n(496486),
                i = n.n(r),
                o = n(202351),
                u = n(630631),
                a = n(744564),
                l = n(73457),
                c = n(773011),
                s = n(61209),
                f = n(840922),
                d = n(473903),
                _ = n(499477),
                E = n(2590);
            var p = n(18882),
                I = n(64234),
                h = n(664625),
                v = n(284610),
                O = n(5544),
                T = n(21372),
                g = n(567403),
                m = n(682776),
                S = n(179913),
                y = n(715107),
                N = n(464187),
                b = n(9430),
                A = n(504275),
                R = n(72580),
                P = n(473708);

            function C(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function L(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function U(e) {
                U = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return U(e)
            }

            function M(e, t) {
                return !t || "object" !== G(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function w(e, t) {
                w = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return w(e, t)
            }

            function D(e) {
                return function(e) {
                    if (Array.isArray(e)) return C(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return C(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return C(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var G = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Z(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = U(e);
                    if (t) {
                        var i = U(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return M(this, n)
                }
            }
            var j, F = "seenQSTutorial",
                H = 0,
                k = !1,
                V = !1,
                x = null,
                B = [],
                Y = null,
                W = 0,
                K = [],
                z = [];

            function q() {
                V = g.Z.getGuildCount() >= 3 || i().size(s.Z.getMutablePrivateChannels()) >= 20;
                K = []
            }

            function Q(e) {
                var t = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.Z,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.default,
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : f.Z,
                        i = t.getChannel(e);
                    if (null == i) return null;
                    var o = (0, c.F6)(i, n, r);
                    switch (i.type) {
                        case E.d4z.DM:
                            var u = n.getUser(i.getRecipientId());
                            return null == u ? null : {
                                type: _.h8.USER,
                                record: u,
                                score: 0,
                                comparator: o
                            };
                        case E.d4z.GROUP_DM:
                            return {
                                type: _.h8.GROUP_DM, record: i, score: 0, comparator: o
                            };
                        case E.d4z.GUILD_VOICE:
                        case E.d4z.GUILD_STAGE_VOICE:
                            return {
                                type: _.h8.VOICE_CHANNEL, record: i, score: 0, comparator: o
                            };
                        default:
                            return {
                                type: _.h8.TEXT_CHANNEL, record: i, score: 0, comparator: o
                            }
                    }
                }(e);
                return null == t || null != x && x !== t.type ? null : t
            }

            function X() {
                var e, t, n = null !== (e = N.Z.getGuildId()) && void 0 !== e ? e : void 0,
                    r = null !== (t = y.Z.getChannelId()) && void 0 !== t ? t : void 0;
                switch (x) {
                    case l.h8.USER:
                        var o = h.default.getId();
                        return A.ZP.getRecentlyTalked(r, 100).filter((function(e) {
                            return e.record.id !== o
                        }));
                    case l.h8.APPLICATION:
                        return A.ZP.queryApplications({
                            query: "",
                            limit: 100,
                            fuzzy: !0
                        });
                    case l.h8.GUILD:
                        return A.ZP.queryGuilds({
                            query: "",
                            limit: 100,
                            fuzzy: !0
                        });
                    case l.h8.TEXT_CHANNEL:
                        return A.ZP.queryChannels({
                            query: "",
                            guildId: N.Z.getGuildId(),
                            limit: 100,
                            fuzzy: !0
                        });
                    case l.h8.VOICE_CHANNEL:
                        return A.ZP.queryChannels({
                            query: "",
                            guildId: N.Z.getGuildId(),
                            limit: 100,
                            fuzzy: !0,
                            filter: function() {
                                return !0
                            },
                            type: O.Zb
                        })
                }
                for (var u = [], a = [], c = 1; c < z.length; c += 1) {
                    var f = Q(z[c]);
                    null != f && ((f.type !== l.h8.TEXT_CHANNEL && f.type !== l.h8.VOICE_CHANNEL || m.Z.can(E.Plq.VIEW_CHANNEL, f.record)) && a.push(f))
                }
                if (a.length > 0) {
                    var d;
                    (d = u).push.apply(d, [(0, l.o6)(P.Z.Messages.QUICKSWITCHER_LAST_CHANNEL)].concat(D(a)))
                }
                var _ = function(e) {
                    var t = [];
                    v.Z.getRecentlyEditedDrafts(v.d.ChannelMessage).forEach((function(n) {
                        var r = n.channelId;
                        if (!e(r)) {
                            var i = Q(r);
                            null != i && t.push(i)
                        }
                    }));
                    return t
                }((function(e) {
                    return e === r || z.includes(e)
                }));
                if (_.length > 0) {
                    var I;
                    (I = u).push.apply(I, [(0, l.o6)(P.Z.Messages.QUICKSWITCHER_DRAFTS)].concat(D(_)))
                }
                var T = S.ZP.getMentionChannelIds().filter((function(e) {
                    return e !== r && !z.includes(e)
                })).map((function(e) {
                    return Q(e)
                })).filter(R.lm).reverse();
                if (T.length > 0) {
                    u.push((0, l.o6)(P.Z.Messages.QUICKSWITCHER_MENTIONS));
                    u = u.concat(T)
                }
                if (null != n) {
                    var g = O.ZP.getSelectableChannelIds(n).filter((function(e) {
                        var t = s.Z.getChannel(e);
                        return !(null == t || e === r || z.includes(e) || b.Z.isChannelMuted(t.guild_id, e) || null != t.parent_id && b.Z.isChannelMuted(t.guild_id, t.parent_id)) && S.ZP.hasRelevantUnread(t)
                    })).map((function(e) {
                        return Q(e)
                    })).filter((function(e) {
                        return e
                    }));
                    Object.values(p.Z.getActiveJoinedUnreadThreadsForGuild(n)).forEach((function(e) {
                        for (var t in e) {
                            var n = Q(t);
                            null != n && g.push(n)
                        }
                    }));
                    if (g.length > 0) {
                        u.push((0, l.o6)(P.Z.Messages.QUICKSWITCHER_UNREAD_CHANNELS));
                        u = u.concat(g)
                    }
                }
                return i()(u).uniqBy((function(e) {
                    return e.record.id
                })).value()
            }

            function J(e, t) {
                switch (x) {
                    case l.h8.USER:
                        var n = g.Z.getGuild(N.Z.getGuildId());
                        e.unshift((0, l.o6)(null != n ? P.Z.Messages.QUICKSWITCHER_QUERYMODE_USERS_IN_GUILD.format({
                            name: n.name
                        }) : P.Z.Messages.QUICKSWITCHER_QUERYMODE_USERS));
                        B = e;
                        break;
                    case l.h8.TEXT_CHANNEL:
                        e.unshift((0, l.o6)(P.Z.Messages.QUICKSWITCHER_QUERYMODE_TEXT_CHANNELS));
                        B = e;
                        break;
                    case l.h8.VOICE_CHANNEL:
                        e.unshift((0, l.o6)(P.Z.Messages.QUICKSWITCHER_QUERYMODE_VOICE_CHANNELS));
                        B = e;
                        break;
                    case l.h8.GUILD:
                        e.unshift((0,
                            l.o6)(P.Z.Messages.QUICKSWITCHER_QUERYMODE_GUILDS));
                        B = e;
                        break;
                    case l.h8.APPLICATION:
                        e.unshift((0, l.o6)(P.Z.Messages.QUICKSWITCHER_QUERYMODE_APPLICATIONS));
                        B = e;
                        break;
                    default:
                        B = e
                }
                if (t !== Y) {
                    Y = t;
                    W = Math.max(t.length, W);
                    H = (0, l.gJ)(l.a8.DOWN, -1, B)
                } else {
                    var r = B[H];
                    null != r && r.type === l.h8.HEADER && (H = (0, l.gJ)(l.a8.DOWN, H, B))
                }
                re.emitChange()
            }

            function $(e) {
                var t, n = e.query,
                    r = e.queryMode,
                    i = null !== (t = N.Z.getGuildId()) && void 0 !== t ? t : void 0,
                    o = new Set(["user:".concat(h.default.getId())]);
                null != i && o.add("guild:".concat(i));
                j = null != j ? j : new l.ZP(ee, null, null != r ? 100 : 5, {
                    frecencyBoosters: !0,
                    blacklist: o
                });
                Y = null;
                W = n.length;
                x = r;
                j.search(n)
            }

            function ee(e, t) {
                if (! function(e, t) {
                        if (e.length !== t.length) return !1;
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n],
                                i = t[n];
                            if (r.record.id !== i.record.id) return !1
                        }
                        return !0
                    }(e = "" === (t = t.trim()).trim() ? X() : e, K)) {
                    K = e;
                    J(e, t)
                }
            }

            function te() {
                Y = null;
                W = 0;
                K = [];
                if (null != j) {
                    j.destroy();
                    j = null
                }
            }
            var ne = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && w(e, t)
                }(n, e);
                var t = Z(n);

                function n() {
                    L(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    this.waitFor(T.ZP, g.Z, s.Z);
                    this.syncWith([I.Z], (function() {
                        return !0
                    }));
                    k = u.Z.get(F) || !1;
                    var t;
                    z = null !== (t = null == e ? void 0 : e.channelHistory) && void 0 !== t ? t : []
                };
                r.getState = function() {
                    return {
                        channelHistory: z
                    }
                };
                r.isOpen = function() {
                    return null != j
                };
                r.getResultTotals = function(e) {
                    return null == j ? 0 : null == e ? j.results.reduce((function(e, t) {
                        return t.type !== l.h8.HEADER ? e + 1 : e
                    }), 0) : j.results.reduce((function(t, n) {
                        return n.type === e ? t + 1 : t
                    }), 0)
                };
                r.channelNoticePredicate = function(e, t) {
                    var n = Date.now() - t >= E.Hqc;
                    return V && n
                };
                r.getFrequentGuilds = function() {
                    return null != j ? j.queryGuilds("", 100) : null
                };
                r.getFrequentGuildsLength = function() {
                    return null != j ? j.queryGuilds("", 100).length : 0
                };
                r.getChannelHistory = function() {
                    return z
                };
                r.getProps = function() {
                    return {
                        theme: I.Z.theme,
                        query: null != j ? j.query : "",
                        queryMode: x,
                        results: B,
                        selectedIndex: H,
                        seenTutorial: k,
                        maxQueryLength: W
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        SEEN_TUTORIAL_KEY: F,
                        MAX_GENERAL_RESULTS: 5,
                        MAX_QUERY_MODE_RESULTS: 100,
                        autocompleter: j,
                        selectedIndex: H,
                        seenTutorial: k,
                        isUseful: V,
                        queryMode: x,
                        results: B,
                        lastQuery: Y,
                        maxQueryLength: W,
                        cachedUserSearchResults: K,
                        channelHistory: z,
                        instance: re
                    }
                };
                return n
            }(o.ZP.PersistedStore);
            ne.displayName = "QuickSwitcherStore";
            ne.persistKey = "QuickSwitcherStore";
            var re = new ne(a.Z, {
                CONNECTION_OPEN: q,
                CONNECTION_OPEN_SUPPLEMENTAL: q,
                QUICKSWITCHER_SHOW: $,
                SHOW_ACTION_SHEET_QUICK_SWITCHER: $,
                QUICKSWITCHER_HIDE: te,
                OVERLAY_SET_INPUT_LOCKED: te,
                HIDE_ACTION_SHEET_QUICK_SWITCHER: te,
                QUICKSWITCHER_SEARCH: function(e) {
                    var t, n = e.query,
                        r = e.queryMode;
                    if (null == j) return !1;
                    var i = null !== (t = N.Z.getGuildId()) && void 0 !== t ? t : null;
                    if (x !== r) {
                        j.setResultTypes(null != r ? [r] : null);
                        j.setLimit(null != r ? 100 : 5);
                        var o, u = null !== (o = N.Z.getGuildId()) && void 0 !== o ? o : void 0;
                        r === l.h8.USER && null != u ? j.setOptions({
                            userFilters: {
                                guild: u,
                                friends: !0
                            }
                        }, !0) : r === l.h8.VOICE_CHANNEL ? j.setOptions({
                            voiceChannelGuildFilter: null
                        }, !0) : j.setOptions({
                            userFilters: null,
                            voiceChannelGuildFilter: void 0
                        }, !0)
                    }
                    x = r;
                    j.search(n, x === l.h8.USER ? i : void 0)
                },
                QUICKSWITCHER_SELECT: function(e) {
                    H = e.selectedIndex
                },
                QUICKSWITCHER_SWITCH_TO: function() {
                    if (k) return !1;
                    k = !0;
                    u.Z.set(F, !0)
                },
                CHANNEL_SELECT: function(e) {
                    var t = e.channelId;
                    if (null == t) return !1;
                    (z = z.filter((function(e) {
                        return e !== t
                    }))).unshift(t);
                    z.length > 4 && (z.length = 4)
                }
            });
            const ie = re
        },
        18882: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => le
            });
            var r = n(496486),
                i = n.n(r),
                o = n(842227),
                u = n(202351),
                a = n(744564),
                l = n(656793),
                c = n(382060),
                s = n(61209),
                f = n(567403),
                d = n(179913),
                _ = n(715107),
                E = n(536945),
                p = n(487685),
                I = n(102921);

            function h(e) {
                if (null == e.threadMetadata) return 0;
                var t = 60 * e.threadMetadata.autoArchiveDuration * 1e3;
                return function(e) {
                    if (null == e.threadMetadata) return 0;
                    var t, n = null !== (t = d.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.id,
                        r = I.Z.extractTimestamp(n),
                        i = null != e.threadMetadata.archiveTimestamp ? new Date(e.threadMetadata.archiveTimestamp).getTime() : 0;
                    return Math.max(r, i)
                }(e) + t
            }
            var v = n(897196);

            function O(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function T(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function g(e) {
                g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return g(e)
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        T(e, t, n[t])
                    }))
                }
                return e
            }

            function S(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function y(e, t) {
                return !t || "object" !== b(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function N(e, t) {
                N = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return N(e, t)
            }
            var b = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function A(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = g(e);
                    if (t) {
                        var i = g(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return y(this, n)
                }
            }
            var R = {},
                P = {},
                C = {},
                L = {},
                U = {},
                M = {},
                w = null,
                D = {};

            function G() {
                R = {};
                U = {};
                P = {};
                C = {};
                L = {};
                w = _.Z.getChannelId();
                for (var e in D) clearTimeout(D[e]);
                D = {};
                E.Z.forEachGuild((function(e) {
                    j(e)
                }));
                F()
            }

            function Z(e) {
                delete R[e];
                delete U[e];
                delete P[e];
                delete C[e];
                delete L[e];
                j(e);
                for (var t in C[e]) k(e, t)
            }

            function j(e) {
                var t = E.Z.getThreadsForGuild(e);
                for (var n in t)
                    for (var r in t[n]) {
                        X(r);
                        var i = s.Z.getChannel(r);
                        if (null != i) {
                            var o = p.Z.joinTimestamp(r);
                            if (null != o) {
                                var u = {
                                        channel: i,
                                        joinTimestamp: o.getTime()
                                    },
                                    a = q(i),
                                    l = a.isUnread,
                                    c = a.isRelevant,
                                    f = a.isTimedRelevant;
                                J(R, i, u, !1);
                                J(U, i, c ? u : null, !1);
                                J(P, i, l ? u : null, !1);
                                f && Q(i, !0)
                            } else {
                                J(C, i, i, !1);
                                var _ = d.ZP.isForumPostUnread(i.id);
                                J(L, i, _ ? i : null, !1)
                            }
                        }
                    }
            }

            function F() {
                M = {};
                for (var e in C)
                    for (var t in C[e]) k(e, t)
            }

            function H(e) {
                var t = s.Z.getBasicChannel(e);
                null != t && c.uC.has(t.type) && k(t.guild_id, t.id)
            }

            function k(e, t) {
                var n = s.Z.getChannel(t);
                if (null != n && n.isForumLikeChannel()) {
                    null == M[e] && (M[e] = {});
                    M[e][t] = 0;
                    if (null != C[e] && null != C[e][t]) {
                        var r = f.Z.getGuild(e);
                        if (null != r) {
                            var i = d.ZP.getTrackedAckMessageId(t);
                            if (null == i) {
                                var u = Date.now();
                                null != r.joinedAt && (r.joinedAt instanceof Date ? u = r.joinedAt.getTime() : "string" == typeof r.joinedAt && (u = new Date(r.joinedAt).getTime()));
                                i = o.default.fromTimestamp(u)
                            }
                            for (var a in C[e][t]) t === w ? d.ZP.isNewForumThread(a, t, r) && M[e][t]++ : o.default.compare(a, i) > 0 && !d.ZP.hasOpenedThread(a) && M[e][t]++
                        }
                    }
                }
            }

            function V(e, t, n) {
                if (null == t) return !1;
                var r = s.Z.getChannel(n),
                    i = p.Z.joinTimestamp(n);
                if (null != r && E.Z.isActive(e, t, n)) {
                    if (null != i) {
                        var o = {
                                channel: r,
                                joinTimestamp: i.getTime()
                            },
                            u = q(r),
                            a = u.isUnread,
                            l = u.isRelevant,
                            c = u.isTimedRelevant;
                        J(R, r, o, !0);
                        J(U, r, l ? o : null, !0);
                        J(P, r, a ? o : null, !0);
                        J(C, r, null, !0);
                        J(L, r, null, !0);
                        Q(r, c)
                    } else {
                        var f = d.ZP.isForumPostUnread(r.id);
                        J(R, r, null, !0);
                        J(P, r, null, !0);
                        J(U, r, null, !0);
                        J(C, r, r, !0);
                        J(L, r, f ? r : null, !0);
                        X(r.id)
                    }
                    k(e, t)
                } else {
                    $(R, e, t, n);
                    $(U, e, t, n);
                    $(P, e, t, n);
                    $(C, e, t, n);
                    $(L, e, t, n);
                    X(n);
                    k(e, t)
                }
            }

            function x(e) {
                return V(e.channel.guild_id, e.channel.parent_id, e.channel.id)
            }

            function B(e, t) {
                if (null == t) return !1;
                var n = R[e],
                    r = null == n ? null : n[t];
                if (null != r)
                    for (var i in r)
                        if (r[i].channel.isNSFW()) return !0;
                var o = C[e],
                    u = null == o ? null : o[t];
                if (null != u)
                    for (var a in u)
                        if (u[a].isNSFW()) return !0;
                return !1
            }

            function Y(e) {
                var t = s.Z.getChannel(e.id);
                return !(null == t || !E.Z.isActive(e.guildId, t.parent_id, e.id)) && V(t.guild_id, t.parent_id, t.id)
            }

            function W(e) {
                var t = s.Z.getChannel(e.channelId);
                if (null == t) K();
                else {
                    var n = t.guild_id,
                        r = t.parent_id;
                    if (!c.Ec.has(t.type)) {
                        var i;
                        if (Number(null === (i = M[n]) || void 0 === i ? void 0 : i[t.id]) > 0) {
                            k(n, t.id);
                            return !0
                        }
                        return !1
                    }
                    if (null == r) return !1;
                    if (ee(R, t)) {
                        var o = q(t),
                            u = o.isUnread,
                            a = o.isRelevant;
                        Q(t, o.isTimedRelevant);
                        var l = ee(P, t),
                            f = ee(U, t);
                        if (u === l && a === f) return !1;
                        var _ = R[n][r][t.id],
                            E = a ? _ : null;
                        J(P, t, u ? _ : null, !0);
                        J(U, t, E, !0);
                        k(n, r)
                    } else {
                        var p = ee(L, t),
                            I = d.ZP.isForumPostUnread(t.id);
                        if (I === p) return !1;
                        J(L, t, I ? t : null, !0)
                    }
                }
            }

            function K() {
                P = {};
                U = {};
                for (var e in R)
                    for (var t in R[e])
                        for (var n in R[e][t]) {
                            var r = R[e][t][n],
                                i = q(r.channel),
                                o = i.isUnread,
                                u = i.isRelevant,
                                a = i.isTimedRelevant;
                            o && J(P, r.channel, r, !1);
                            u && J(U, r.channel, r, !1);
                            Q(r.channel, a)
                        }
                L = {};
                for (var l in C)
                    for (var c in C[l])
                        for (var s in C[l][c]) {
                            var f = C[l][c][s];
                            d.ZP.isForumPostUnread(s) && J(L, f, f, !1)
                        }
                F()
            }

            function z() {
                var e = w;
                if ((w = _.Z.getChannelId()) === e) return !1;
                H(e);
                H(w)
            }

            function q(e) {
                var t = d.ZP.getMentionCount(e.id) > 0,
                    n = d.ZP.hasRelevantUnread(e) && (!p.Z.isMuted(e.id) || t) || (0, l.c)() && t,
                    r = e.hasFlag(v.zZ.PINNED),
                    i = e.isActiveThread(),
                    o = i && h(e) > Date.now();
                return {
                    isUnread: (i || r) && n,
                    isRelevant: o || r || n,
                    isTimedRelevant: o
                }
            }

            function Q(e, t) {
                X(e.id);
                t && function(e) {
                    D[e.id] = setTimeout((function() {
                        var t = s.Z.getChannel(e.id);
                        null != t && a.Z.dispatch({
                            type: "THREAD_UPDATE",
                            channel: t
                        })
                    }), h(e) - Date.now() + 1)
                }(e)
            }

            function X(e) {
                if (e in D) {
                    clearTimeout(D[e]);
                    delete D[e]
                }
            }

            function J(e, t, n, r) {
                var o = t.guild_id,
                    u = t.parent_id,
                    a = t.id;
                if (null != o && null != u && null != a) {
                    o in e || (e[o] = {});
                    u in e[o] || (e[o][u] = {});
                    r && (e[o] = S(m({}, e[o]), T({}, u, m({}, e[o][u]))));
                    if (null === n) {
                        delete e[o][u][a];
                        i().isEmpty(e[o][u]) && delete e[o][u]
                    } else e[o][u][a] = n
                }
            }

            function $(e, t, n, r) {
                if (null != t && null != n && null != r && te(e, t, n, r)) {
                    e[t] = S(m({}, e[t]), T({}, n, m({}, e[t][n])));
                    delete e[t][n][r];
                    i().isEmpty(e[t][n]) && delete e[t][n]
                }
            }

            function ee(e, t) {
                return te(e, t.guild_id, t.parent_id, t.id)
            }

            function te(e, t, n, r) {
                return t in e && n in e[t] && r in e[t][n]
            }
            var ne = {},
                re = {},
                ie = {},
                oe = {},
                ue = {},
                ae = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && N(e, t)
                    }(n, e);
                    var t = A(n);

                    function n() {
                        O(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function() {
                        this.waitFor(E.Z, s.Z, p.Z, d.ZP);
                        this.syncWith([_.Z], z)
                    };
                    r.hasActiveJoinedUnreadThreads = function(e, t) {
                        return e in P && t in P[e]
                    };
                    r.getActiveUnjoinedThreadsForParent = function(e, t) {
                        var n;
                        return e in C && null !== (n = C[e][t]) && void 0 !== n ? n : oe
                    };
                    r.getActiveJoinedThreadsForParent = function(e, t) {
                        var n;
                        return e in R && null !== (n = R[e][t]) && void 0 !== n ? n : ie
                    };
                    r.getActiveJoinedThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = R[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveJoinedUnreadThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = P[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveJoinedUnreadThreadsForParent = function(e, t) {
                        var n;
                        return null !== (n = this.getActiveJoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : ie
                    };
                    r.getActiveJoinedRelevantThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = U[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveJoinedRelevantThreadsForParent = function(e, t) {
                        var n;
                        return null !== (n = this.getActiveJoinedRelevantThreadsForGuild(e)[t]) && void 0 !== n ? n : ie
                    };
                    r.getActiveUnjoinedThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = C[e]) && void 0 !== t ? t : re
                    };
                    r.getActiveUnjoinedUnreadThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = L[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveUnjoinedUnreadThreadsForParent = function(e, t) {
                        var n;
                        return null !== (n = this.getActiveUnjoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : ie
                    };
                    r.getNewThreadCountsForGuild = function(e) {
                        var t;
                        return null !== (t = M[e]) && void 0 !== t ? t : ue
                    };
                    r.computeAllActiveJoinedThreads = function(e) {
                        var t = [];
                        for (var n in R)
                            if (n === e || null == e)
                                for (var r in R[n])
                                    for (var i in R[n][r]) t.push(R[n][r][i].channel);
                        return t
                    };
                    r.getNewThreadCount = function(e, t) {
                        var n, r;
                        return null !== (r = null === (n = M[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : 0
                    };
                    r.getActiveThreadCount = function(e, t) {
                        var n, r, o, u;
                        return i().size(null !== (o = null === (n = R[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== o ? o : {}) + i().size(null !== (u = null === (r = C[e]) || void 0 === r ? void 0 : r[t]) && void 0 !== u ? u : {})
                    };
                    r.__getLocalVars = function() {
                        return {
                            activeJoinedThreads: R,
                            activeJoinedUnreadThreads: P,
                            activeUnjoinedThreads: C,
                            activeUnjoinedUnreadThreads: L,
                            activeJoinedRelevantThreads: U,
                            newThreadCounts: M,
                            selectedChannelId: w,
                            timers: D,
                            NO_GUILD_UNJOINED_THREADS: re,
                            NO_JOINED_THREADS: ie,
                            NO_UNJOINED_THREADS: oe,
                            NO_NEW_THREADS: ue
                        }
                    };
                    return n
                }(u.ZP.Store);
            ae.displayName = "ActiveJoinedThreadsStore";
            const le = new ae(a.Z, {
                CONNECTION_OPEN: G,
                OVERLAY_INITIALIZE: G,
                THREAD_LIST_SYNC: function(e) {
                    return Z(e.guildId)
                },
                LOAD_THREADS_SUCCESS: G,
                LOAD_ARCHIVED_THREADS_SUCCESS: G,
                SEARCH_FINISH: G,
                GUILD_CREATE: function(e) {
                    return Z(e.guild.id)
                },
                GUILD_DELETE: G,
                CURRENT_USER_UPDATE: G,
                THREAD_CREATE: x,
                THREAD_UPDATE: x,
                THREAD_DELETE: x,
                CHANNEL_UPDATES: function(e) {
                    var t = e.channels,
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = t[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            var a = o.value;
                            if (a.isNSFW() !== B(a.guild_id, a.parent_id)) {
                                G();
                                return
                            }
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return !1
                },
                CHANNEL_DELETE: function(e) {
                    var t = e.channel,
                        n = !1;
                    if (null != t.guild_id && null != t.parent_id) {
                        if (t.guild_id in R && t.parent_id in R[t.guild_id]) {
                            delete R[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in P && t.parent_id in P[t.guild_id]) {
                            delete P[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in U && t.parent_id in U[t.guild_id]) {
                            Object.keys(U[t.guild_id][t.parent_id]).forEach(X);
                            delete U[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in C && t.parent_id in C[t.guild_id]) {
                            delete C[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in L && t.parent_id in L[t.guild_id]) {
                            delete L[t.guild_id][t.parent_id];
                            n = !0
                        }
                        n && k(t.guild_id, t.parent_id)
                    }
                    return n
                },
                THREAD_MEMBER_UPDATE: Y,
                THREAD_MEMBERS_UPDATE: Y,
                LOAD_MESSAGES_SUCCESS: W,
                MESSAGE_CREATE: W,
                MESSAGE_DELETE: W,
                MESSAGE_DELETE_BULK: W,
                MESSAGE_ACK: W,
                CHANNEL_ACK: W,
                CHANNEL_LOCAL_ACK: W,
                CHANNEL_SELECT: function(e) {
                    W(e);
                    z()
                },
                PASSIVE_UPDATE_V1: function(e) {
                    null != e.channels && K()
                },
                WINDOW_FOCUS: K,
                UPDATE_CHANNEL_DIMENSIONS: K,
                DRAWER_OPEN: K,
                DRAWER_CLOSE: K,
                BULK_ACK: K
            })
        },
        491260: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => k
            });
            var r = n(110251),
                i = n.n(r),
                o = n(496486),
                u = n.n(o),
                a = n(202351),
                l = n(744564),
                c = n(83797),
                s = n(664625),
                f = n(473903),
                d = n(2590);

            function _(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function E(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function I(e) {
                I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return I(e)
            }

            function h(e, t) {
                return !t || "object" !== g(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function v(e, t) {
                v = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return v(e, t)
            }

            function O(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || m(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function T(e) {
                return function(e) {
                    if (Array.isArray(e)) return _(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || m(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var g = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function m(e, t) {
                if (e) {
                    if ("string" == typeof e) return _(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _(e, t) : void 0
                }
            }

            function S(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = I(e);
                    if (t) {
                        var i = I(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return h(this, n)
                }
            }
            var y = Object.freeze([]),
                N = {},
                b = {},
                A = {},
                R = {},
                P = {};

            function C(e, t) {
                var n = N[e];
                return null != n ? n[t] : null
            }
            var L = function(e) {
                switch (e.type) {
                    case d.IIU.CUSTOM_STATUS:
                        return 4;
                    case d.IIU.COMPETING:
                        return 3;
                    case d.IIU.STREAMING:
                        return 2;
                    case d.IIU.PLAYING:
                        return 1;
                    default:
                        return 0
                }
            };
            var U = function(e) {
                return (0, c.Z)(e) ? 1 : 0
            };

            function M(e, t) {
                return function(e, t) {
                    return L(t) - L(e)
                }(e, t) || function(e, t) {
                    return U(t) - U(e)
                }(e, t) || function(e, t) {
                    var n, r;
                    return (null !== (n = t.created_at) && void 0 !== n ? n : 0) - (null !== (r = e.created_at) && void 0 !== r ? r : 0)
                }(e, t)
            }

            function w(e) {
                delete b[e];
                delete A[e];
                delete R[e];
                if (null != N[e]) {
                    var t = O(u().sortBy(N[e], (function(e) {
                            return -e.timestamp
                        })), 1),
                        n = t[0];
                    if (n.status !== d.Skl.OFFLINE) {
                        b[e] = n.status;
                        A[e] = n.activities;
                        null != n.clientStatus && (R[e] = n.clientStatus)
                    } else u().every(N[e], (function(e) {
                        return e.status === d.Skl.OFFLINE
                    })) && delete N[e]
                }
            }

            function D(e) {
                var t = N[e];
                if (null != t) {
                    var n = u().maxBy(Object.values(t), (function(e) {
                        return e.timestamp
                    }));
                    if (n.status !== d.Skl.OFFLINE) {
                        b[e] = n.status;
                        A[e] = n.activities;
                        null != n.clientStatus && (R[e] = n.clientStatus)
                    }
                }
            }

            function G(e) {
                var t = e.guildId,
                    n = e.userId,
                    r = e.status,
                    o = e.clientStatus,
                    u = e.activities;
                if (n === s.default.getId()) return !1;
                var a = N[n];
                if (null == a) {
                    if (r === d.Skl.OFFLINE) return !1;
                    a = N[n] = {}
                }
                if (r === d.Skl.OFFLINE) a[t] = {
                    status: r,
                    clientStatus: o,
                    activities: y,
                    timestamp: Date.now()
                };
                else {
                    var l = u.length > 1 ? T(u).sort(M) : u,
                        c = a[t];
                    u = null != c && i()(c.activities, l) ? c.activities : l;
                    a[t] = {
                        status: r,
                        clientStatus: o,
                        activities: u,
                        timestamp: Date.now()
                    }
                }
                delete P[n];
                w(n);
                return !0
            }

            function Z(e) {
                var t = e.guildId,
                    n = e.userId,
                    r = e.status,
                    i = e.clientStatus,
                    o = e.activities,
                    u = e.timestamp;
                if (n !== s.default.getId()) {
                    var a = N[n];
                    if (null == a) {
                        if (r === d.Skl.OFFLINE) return;
                        a = N[n] = {}
                    }
                    if (r === d.Skl.OFFLINE) a[t] = {
                        status: r,
                        clientStatus: i,
                        activities: y,
                        timestamp: Date.now()
                    };
                    else {
                        var l = o.length > 1 ? T(o).sort(M) : o;
                        a[t] = {
                            status: r,
                            clientStatus: i,
                            activities: l,
                            timestamp: u
                        }
                    }
                }
            }

            function j(e, t) {
                if (t === s.default.getId()) return !1;
                var n = N[t];
                if (null == n || null == n[e]) return !1;
                delete n[e];
                0 === Object.keys(n).length && delete N[t];
                w(t)
            }

            function F(e) {
                var t = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var i, o = Object.keys(N)[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                        j(e, i.value)
                    }
                } catch (e) {
                    n = !0;
                    r = e
                } finally {
                    try {
                        t || null == o.return || o.return()
                    } finally {
                        if (n) throw r
                    }
                }
            }
            var H = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && v(e, t)
                }(n, e);
                var t = S(n);

                function n() {
                    E(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(s.default)
                };
                r.setCurrentUserOnConnectionOpen = function(e, t) {
                    b[s.default.getId()] = e;
                    A[s.default.getId()] = t
                };
                r.getStatus = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.Skl.OFFLINE,
                        r = f.default.getUser(e);
                    null != r && r.hasFlag(d.xW$.BOT_HTTP_INTERACTIONS) && (n = d.Skl.UNKNOWN);
                    if (null == r ? void 0 : r.isClyde()) return d.Skl.ONLINE;
                    if (null == t) {
                        var i;
                        return null !== (i = b[e]) && void 0 !== i ? i : n
                    }
                    var o, u = C(e, t);
                    return null !== (o = null == u ? void 0 : u.status) && void 0 !== o ? o : n
                };
                r.getActivities = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == t) {
                        var n;
                        return null !== (n = A[e]) && void 0 !== n ? n : y
                    }
                    var r = C(e, t);
                    return null == r || null == r.activities ? y : r.activities
                };
                r.getPrimaryActivity = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = this.getActivities(e, t);
                    return n[0]
                };
                r.getAllApplicationActivities = function(e) {
                    var t = [],
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = Object.keys(A)[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            var a = o.value,
                                l = A[a],
                                c = !0,
                                s = !1,
                                f = void 0;
                            try {
                                for (var d, _ = l[Symbol.iterator](); !(c = (d = _.next()).done); c = !0) {
                                    var E = d.value;
                                    E.application_id === e && t.push({
                                        userId: a,
                                        activity: E
                                    })
                                }
                            } catch (e) {
                                s = !0;
                                f = e
                            } finally {
                                try {
                                    c || null == _.return || _.return()
                                } finally {
                                    if (s) throw f
                                }
                            }
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return t
                };
                r.getApplicationActivity = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.findActivity(e, (function(e) {
                        return e.application_id === t
                    }), n)
                };
                r.findActivity = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.getActivities(e, n).find(t)
                };
                r.getActivityMetadata = function(e) {
                    return P[e]
                };
                r.getUserIds = function() {
                    return Object.keys(A)
                };
                r.isMobileOnline = function(e) {
                    var t = R[e];
                    return null != t && t[d.X5t.MOBILE] === d.Skl.ONLINE && t[d.X5t.DESKTOP] !== d.Skl.ONLINE
                };
                r.getState = function() {
                    return {
                        presencesForGuilds: N,
                        statuses: b,
                        activities: A,
                        activityMetadata: P,
                        clientStatuses: R
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        NO_ACTIVITIES: y,
                        presencesForGuilds: N,
                        statuses: b,
                        activities: A,
                        clientStatuses: R,
                        activityMetadata: P,
                        typeScore: L,
                        richnessScore: U
                    }
                };
                return n
            }(a.ZP.Store);
            H.displayName = "PresenceStore";
            const k = new H(l.Z, {
                CONNECTION_OPEN: function() {
                    return !0
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    var t = e.guilds,
                        n = e.presences,
                        r = s.default.getId();
                    N = {};
                    P = {};
                    b = p({}, r, b[r]);
                    A = p({}, r, A[r]);
                    R = p({}, r, {});
                    var i = new Set,
                        o = Date.now();
                    t.forEach((function(e) {
                        e.presences.forEach((function(t) {
                            var n = t.user,
                                r = t.status,
                                u = t.clientStatus,
                                a = t.activities;
                            Z({
                                guildId: e.id,
                                userId: n.id,
                                status: r,
                                clientStatus: u,
                                activities: a,
                                timestamp: o
                            });
                            i.add(n.id)
                        }))
                    }));
                    n.forEach((function(e) {
                        var t = e.user,
                            n = e.status,
                            r = e.clientStatus,
                            u = e.activities;
                        if (null != t) {
                            Z({
                                guildId: d.ME,
                                userId: t.id,
                                status: n,
                                clientStatus: r,
                                activities: u,
                                timestamp: o
                            });
                            i.add(t.id)
                        }
                    }));
                    i.delete(r);
                    i.forEach(D)
                },
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.presences;
                    N = t.presencesForGuilds;
                    b = t.statuses;
                    A = t.activities;
                    P = t.activityMetadata
                },
                GUILD_CREATE: function(e) {
                    var t = e.guild;
                    t.presences.forEach((function(e) {
                        var n = e.user,
                            r = e.status,
                            i = e.clientStatus,
                            o = e.activities;
                        G({
                            guildId: t.id,
                            userId: n.id,
                            status: r,
                            clientStatus: i,
                            activities: o
                        })
                    }))
                },
                GUILD_DELETE: function(e) {
                    F(e.guild.id)
                },
                GUILD_MEMBER_REMOVE: function(e) {
                    return j(e.guildId, e.user.id)
                },
                PRESENCE_UPDATES: function(e) {
                    return e.updates.map((function(e) {
                        var t = e.guildId,
                            n = e.user,
                            r = e.status,
                            i = e.clientStatus,
                            o = e.activities;
                        return G({
                            guildId: null != t ? t : d.ME,
                            userId: n.id,
                            status: r,
                            clientStatus: i,
                            activities: o
                        })
                    })).some((function(e) {
                        return e
                    }))
                },
                PRESENCES_REPLACE: function(e) {
                    var t = e.presences;
                    F(d.ME);
                    t.forEach((function(e) {
                        var t = e.user,
                            n = e.status,
                            r = e.clientStatus,
                            i = e.activities;
                        null != t && G({
                            guildId: d.ME,
                            userId: t.id,
                            status: n,
                            clientStatus: r,
                            activities: i
                        })
                    }))
                },
                ACTIVITY_METADATA_UPDATE: function(e) {
                    var t = e.userId,
                        n = e.metadata;
                    P[t] = n;
                    return !1
                },
                THREAD_MEMBER_LIST_UPDATE: function(e) {
                    var t = e.guildId;
                    e.members.forEach((function(e) {
                        null != e.presence && G({
                            guildId: t,
                            userId: e.user_id,
                            status: e.presence.status,
                            clientStatus: e.presence.clientStatus,
                            activities: e.presence.activities
                        })
                    }))
                },
                THREAD_MEMBERS_UPDATE: function(e) {
                    var t = e.guildId,
                        n = e.addedMembers;
                    null == n || n.forEach((function(e) {
                        null != e.presence && G({
                            guildId: t,
                            userId: e.userId,
                            status: e.presence.status,
                            clientStatus: e.presence.clientStatus,
                            activities: e.presence.activities
                        })
                    }))
                },
                SELF_PRESENCE_STORE_UPDATE: function(e) {
                    var t = s.default.getId();
                    if (b[t] === e.status && A[t] === e.activities) return !1;
                    b[t] = e.status;
                    A[t] = e.activities;
                    delete P[t]
                }
            })
        },
        788169: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => A
            });
            var r = n(202351),
                i = n(281110),
                o = n(744564),
                u = n(664625),
                a = n(539273),
                l = n(2590),
                c = n(897196);

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return d(e)
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        f(e, t, n[t])
                    }))
                }
                return e
            }

            function E(e, t) {
                return !t || "object" !== I(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function p(e, t) {
                p = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return p(e, t)
            }
            var I = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function h(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = d(e);
                    if (t) {
                        var i = d(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return E(this, n)
                }
            }
            var v, O = 1e4,
                T = {},
                g = Object.freeze({});

            function m(e) {
                var t;
                return null !== (t = T[e]) && void 0 !== t ? t : g
            }

            function S(e) {
                var t = e.channelId,
                    n = e.userId,
                    r = _({}, m(t));
                clearTimeout(r[n]);
                r[n] = function(e, t) {
                    return setTimeout((function() {
                        o.Z.dispatch({
                            type: "TYPING_STOP",
                            channelId: e,
                            userId: t
                        })
                    }), O)
                }(t, n);
                T[t] = r
            }

            function y(e) {
                var t = e.channelId,
                    n = e.userId,
                    r = T[t];
                if (null == r || null == r[n]) return !1;
                var i = _({}, r);
                clearTimeout(i[n]);
                delete i[n];
                T[t] = i
            }

            function N() {
                T = {}
            }
            var b = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && p(e, t)
                }(n, e);
                var t = h(n);

                function n() {
                    s(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getTypingUsers = function(e) {
                    return m(e)
                };
                r.isTyping = function(e, t) {
                    return null != m(e)[t]
                };
                r.__getLocalVars = function() {
                    return {
                        TYPING_TIMEOUT: O,
                        TYPING_DELAY_LOCAL: 1500,
                        MAX_TYPING_USERS: 5,
                        typingUsersByChannel: T,
                        localTypingDelay: v,
                        EMPTY_TYPING: g
                    }
                };
                return n
            }(r.ZP.Store);
            b.displayName = "TypingStore";
            const A = new b(o.Z, {
                TYPING_START: S,
                TYPING_STOP: y,
                TYPING_START_LOCAL: function(e) {
                    var t = e.channelId,
                        n = u.default.getId();
                    if (null == n) return !1;
                    if (t === c.V) return !1;
                    if (null != v && v.channelId !== t) {
                        null != v.timeout && clearTimeout(v.timeout);
                        v = null
                    }
                    var r = Date.now();
                    if (null != v && (null != v.timeout || v.prevSend + 8e3 > r)) return !1;
                    var s = null == v || v.prevSend > r - 16e3 ? 1500 : 0,
                        f = setTimeout((function() {
                            if (null != v && v.channelId === t && n === u.default.getId() && null != v.timeout) {
                                v.timeout = null;
                                (function(e) {
                                    var t = m(e);
                                    return t === g ? 0 : Object.keys(t).length
                                })(t) > 5 || i.ZP.post({
                                    url: l.ANM.TYPING(t),
                                    oldFormErrors: !0
                                }).then((function(e) {
                                    if (200 === e.status) {
                                        var n, r, i = null !== (n = e.body.message_send_cooldown_ms) && void 0 !== n ? n : 0,
                                            u = null !== (r = e.body.thread_create_cooldown_ms) && void 0 !== r ? r : 0;
                                        i > 0 && o.Z.dispatch({
                                            type: "SLOWMODE_SET_COOLDOWN",
                                            channelId: t,
                                            slowmodeType: a.S.SendMessage,
                                            cooldownMs: i
                                        });
                                        u > 0 && o.Z.dispatch({
                                            type: "SLOWMODE_SET_COOLDOWN",
                                            channelId: t,
                                            slowmodeType: a.S.CreateThread,
                                            cooldownMs: u
                                        })
                                    }
                                }))
                            }
                        }), s);
                    v = {
                        channelId: t,
                        timeout: f,
                        prevSend: r
                    };
                    return S({
                        channelId: t,
                        userId: n
                    })
                },
                TYPING_STOP_LOCAL: function(e) {
                    var t = e.channelId,
                        n = u.default.getId();
                    if (null == n) return !1;
                    if (null != v && v.channelId === t && null != v.timeout) {
                        clearTimeout(v.timeout);
                        v = null;
                        return y({
                            channelId: t,
                            userId: n
                        })
                    }
                    return !1
                },
                CONNECTION_OPEN: N,
                OVERLAY_INITIALIZE: N,
                MESSAGE_CREATE: function(e) {
                    var t = e.channelId,
                        n = e.message.author;
                    e.optimistic && function(e) {
                        if (null == v || v.channelId !== e) return !1;
                        null != v.timeout && clearTimeout(v.timeout);
                        v = null
                    }(t);
                    return y({
                        channelId: t,
                        userId: n.id
                    })
                }
            })
        },
        239734: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => T
            });
            var r = n(202351),
                i = n(744564),
                o = n(840922);

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        a(e, t, n[t])
                    }))
                }
                return e
            }

            function s(e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function f(e, t) {
                f = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return f(e, t)
            }
            var d = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function _(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = l(e);
                    if (t) {
                        var i = l(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return s(this, n)
                }
            }
            var E = 864e5,
                p = !1,
                I = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                h = c({}, I);

            function v() {
                h.affinityUserIds = new Set(h.userAffinities.map((function(e) {
                    return e.user_id
                })).filter((function(e) {
                    return !o.Z.isBlocked(e)
                })))
            }
            var O = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && f(e, t)
                }(n, e);
                var t = _(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    this.waitFor(o.Z);
                    if (null != e) {
                        h.userAffinities = e.userAffinities;
                        h.affinityUserIds = new Set(e.affinityUserIds);
                        h.lastFetched = e.lastFetched
                    }
                    this.syncWith([o.Z], v)
                };
                r.needsRefresh = function() {
                    return Date.now() - h.lastFetched > E
                };
                r.getFetching = function() {
                    return p
                };
                r.getState = function() {
                    return h
                };
                r.getUserAffinities = function() {
                    return h.userAffinities
                };
                r.getUserAffinitiesUserIds = function() {
                    return h.affinityUserIds
                };
                r.__getLocalVars = function() {
                    return {
                        USER_AFFINITY_TTL: E,
                        fetching: p,
                        DEFAULT_AFFINITY_STORE_STATE: I,
                        state: h
                    }
                };
                return n
            }(r.ZP.PersistedStore);
            O.displayName = "UserAffinitiesStore";
            O.persistKey = "UserAffinitiesStore";
            O.migrations = [function(e) {
                return null
            }];
            const T = new O(i.Z, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t, n = e.affinities;
                    h.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [];
                    h.lastFetched = Date.now();
                    v();
                    p = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    p = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    p = !1
                },
                LOGOUT: function() {
                    h = c({}, I)
                }
            })
        },
        796909: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => Z
            });
            var r = n(730381),
                i = n.n(r),
                o = n(202351),
                u = n(575626),
                a = n(744564),
                l = n(339432),
                c = n(112328),
                s = n(996344),
                f = n(48315),
                d = n(382060),
                _ = n(61209),
                E = n(567403),
                p = n(179913),
                I = n(9430),
                h = n(473903),
                v = n(102921),
                O = n(897196);

            function T(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e) {
                g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return g(e)
            }

            function m(e, t) {
                return !t || "object" !== N(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function S(e, t) {
                S = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return S(e, t)
            }
            var y, N = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function b(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = g(e);
                    if (t) {
                        var i = g(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return m(this, n)
                }
            }! function(e) {
                e.DEFAULT = "DEFAULT";
                e.FAVORITE = "FAVORITE"
            }(y || (y = {}));
            var A = new u.Z((function(e) {
                var t = e.isRequest,
                    n = e.isFavorite;
                return t ? [] : [n ? y.FAVORITE : y.DEFAULT]
            }), (function(e) {
                return -e.lastMessageId
            }));

            function R(e) {
                var t, n, r = null !== (n = null !== (t = p.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                    o = e.isMessageRequestTimestamp;
                if (null != o) {
                    var u = i()(o).valueOf(),
                        a = v.Z.fromTimestamp(u);
                    return v.Z.compare(r, a) > 0 ? r : a
                }
                return r
            }

            function P(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : R(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: I.Z.isMessagesFavorite(e.id) && (0, l.cn)(),
                    isRequest: s.Z.isMessageRequest(e.id) || f.Z.isSpam(e.id)
                }
            }

            function C() {
                A.clear();
                Object.values(_.Z.getMutablePrivateChannels()).forEach((function(e) {
                    A.set(e.id, P(e))
                }));
                (0, l.cn)() && (0, c.x7)() && I.Z.getAddedToMessages().forEach((function(e) {
                    var t = _.Z.getChannel(e);
                    null != t && (0, d.zi)(t.type) && A.set(t.id, P(t))
                }))
            }

            function L() {
                var e = _.Z.getMutablePrivateChannels();
                for (var t in e) A.set(t, P(e[t]))
            }
            var U, M, w, D = (U = [], M = [], w = [], function() {
                    var e = A.values(y.FAVORITE),
                        t = A.values(y.DEFAULT);
                    if (U !== e || M !== t) {
                        w = [];
                        e.forEach((function(e) {
                            var t = e.channelId;
                            return w.push(t)
                        }));
                        U = e;
                        t.forEach((function(e) {
                            var t = e.channelId;
                            return w.push(t)
                        }));
                        M = t
                    }
                    return w
                }),
                G = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && S(e, t)
                    }(n, e);
                    var t = b(n);

                    function n() {
                        T(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function() {
                        this.waitFor(_.Z, E.Z, h.default, s.Z, I.Z);
                        this.syncWith([I.Z, s.Z], C)
                    };
                    r.getPrivateChannelIds = function() {
                        return D()
                    };
                    r.getSortedChannels = function() {
                        return [A.values(y.FAVORITE), A.values(y.DEFAULT)]
                    };
                    r.serializeForOverlay = function() {
                        var e = {};
                        A.values().forEach((function(t) {
                            var n = t.channelId,
                                r = t.lastMessageId;
                            e[n] = r
                        }));
                        return e
                    };
                    r.__getLocalVars = function() {
                        return {
                            SortedChannelType: y,
                            data: A,
                            getPrivateChannelIds: D
                        }
                    };
                    return n
                }(o.ZP.Store);
            G.displayName = "PrivateChannelSortStore";
            const Z = new G(a.Z, {
                CONNECTION_OPEN: C,
                CONNECTION_OPEN_SUPPLEMENTAL: C,
                OVERLAY_INITIALIZE: C,
                CACHE_LOADED: L,
                CACHE_LOADED_LAZY: L,
                CHANNEL_UPDATES: function(e) {
                    e.channels.forEach((function(e) {
                        ((0, d.hv)(e.type) || A.has(e.id)) && A.set(e.id, P(e))
                    }))
                },
                CHANNEL_CREATE: function(e) {
                    var t = e.channel;
                    if (!(0, d.hv)(t.type)) return !1;
                    if (t.id === O.V) return !1;
                    A.set(t.id, P(t))
                },
                CHANNEL_DELETE: function(e) {
                    var t = e.channel;
                    return A.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    var t = e.channelId,
                        n = e.message;
                    if (!A.has(t)) return !1;
                    var r = _.Z.getChannel(t);
                    return null != r && A.set(t, P(r, n.id))
                },
                GUILD_CREATE: function(e) {
                    var t = e.guild.id;
                    return A.delete(t)
                }
            })
        },
        971611: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                u = n.n(o),
                a = n(882723),
                l = n(797343),
                c = n.n(l);

            function s(e) {
                var t = e.children,
                    n = e["aria-label"],
                    o = e.className,
                    l = e.position,
                    s = i.useRef(null),
                    f = null != n ? n : "string" == typeof t && t;
                return (0, r.jsx)(a.Tooltip, {
                    position: null != l ? l : "top",
                    delay: 500,
                    text: t,
                    "aria-label": f,
                    children: function(n) {
                        var i = n.onMouseEnter,
                            a = n.onMouseLeave;
                        return (0, r.jsx)("div", {
                            className: u()(o, c().overflow),
                            ref: s,
                            "aria-hidden": e["aria-hidden"],
                            onMouseEnter: function() {
                                var e = s.current;
                                null != e && e.offsetWidth < e.scrollWidth && (null == i || i())
                            },
                            onMouseLeave: a,
                            children: t
                        })
                    }
                })
            }
        },
        466317: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                i = (n(667294), n(633878));

            function o(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        o(e, t, n[t])
                    }))
                }
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function l(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function c(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    c = void 0 === o ? 24 : o,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    _ = l(e, ["width", "height", "color", "foreground"]);
                return 16 === n || 16 === c ? (0, r.jsx)("svg", a(u({}, (0, i.Z)(_)), {
                    width: n,
                    height: c,
                    viewBox: "0 0 16 16",
                    children: (0, r.jsx)("path", {
                        fill: f,
                        className: d,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                    })
                })) : (0, r.jsx)("svg", a(u({}, (0, i.Z)(_)), {
                    width: n,
                    height: c,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: f,
                        className: d,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                    })
                }))
            }
        },
        81308: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                i = (n(667294), n(633878));

            function o(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function a(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function l(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    l = e.height,
                    c = void 0 === l ? 24 : l,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    _ = a(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", u(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            o(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(_)), {
                    width: n,
                    height: c,
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        d: "M19 1C19.552 1 20 1.447 20 2V3L23 2V6L20 5V6C20 6.553 19.552 7 19 7H15C14.448 7 14 6.553 14 6V2C14 1.447 14.448 1 15 1H19Z",
                        className: d,
                        fill: f
                    }), (0, r.jsx)("path", {
                        d: "M20 13.5V9H22V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5C2 3.397 2.897 2.5 4 2.5H12V4.5H4V13.5H20Z",
                        className: d,
                        fill: f
                    })]
                }))
            }
        },
        691797: (e, t, n) => {
            "use strict";
            n.d(t, {
                wS: () => u,
                JG: () => a
            });
            var r = n(482507),
                i = n(120415),
                o = n(310126),
                u = function() {
                    if (i.FB) return null != o.ZP.copy;
                    try {
                        return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                    } catch (e) {
                        return !1
                    }
                }();

            function a(e) {
                if (!u) return !1;
                if (i.FB) {
                    o.ZP.copy(e);
                    return !0
                }
                return r.J(e)
            }
        },
        347117: (e, t, n) => {
            "use strict";
            n.d(t, {
                Tj: () => d,
                zp: () => _,
                Dc: () => E,
                rn: () => p,
                rv: () => I,
                XN: () => v,
                OF: () => O,
                fD: () => g,
                QB: () => m,
                Bo: () => S,
                c0: () => b
            });
            var r = n(441143),
                i = n.n(r),
                o = n(496486),
                u = n.n(o),
                a = n(16243),
                l = n.n(a);

            function c(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function s(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            c(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            c(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var f = function(e, t) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = t.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };
            0;

            function d(e) {
                var t = e.width,
                    n = e.height,
                    r = e.maxWidth,
                    i = e.maxHeight,
                    o = e.minWidth,
                    u = void 0 === o ? 0 : o,
                    a = e.minHeight,
                    l = void 0 === a ? 0 : a;
                if (t !== r || n !== i) {
                    var c = t > r ? r / t : 1;
                    t = Math.max(Math.round(t * c), u);
                    var s = (n = Math.max(Math.round(n * c), l)) > i ? i / n : 1;
                    t = Math.max(Math.round(t * s), u);
                    n = Math.max(Math.round(n * s), l)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function _(e, t) {
                var n = Math.min(Math.round(.65 * window.innerHeight), 2e3);
                return d({
                    width: e,
                    height: t,
                    maxWidth: Math.min(Math.round(.75 * window.innerWidth), 2e3),
                    maxHeight: n
                })
            }

            function E(e) {
                var t = e.width,
                    n = e.height,
                    r = e.maxWidth,
                    i = e.maxHeight,
                    o = 1;
                t > r && (o = r / t);
                t = Math.round(t * o);
                var u = 1;
                (n = Math.round(n * o)) > i && (u = i / n);
                return Math.min(o * u, 1)
            }

            function p(e) {
                var t = e.width,
                    n = e.height,
                    r = e.maxWidth,
                    i = e.maxHeight;
                if (t === n) return 1;
                var o = Math.max(r / t, i / n);
                return Math.min(o, 1)
            }

            function I(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            var h = [
                [0, 0, 0]
            ];

            function v(e, t, n) {
                var r = document.createElement("canvas"),
                    i = r.getContext("2d");
                if (null == i) return h;
                var o = r.width = 0 === e.width ? 128 : e.width,
                    u = r.height = 0 === e.height ? 128 : e.height;
                i.drawImage(e, 0, 0, o, u);
                var a = function(e, t, n) {
                        for (var r, i, o, u, a, l = [], c = 0; c < t; c += n) {
                            i = e[0 + (r = 4 * c)];
                            o = e[r + 1];
                            u = e[r + 2];
                            (void 0 === (a = e[r + 3]) || a >= 125) && (i > 250 && o > 250 && u > 250 || l.push([i, o, u]))
                        }
                        return l
                    }(i.getImageData(0, 0, o, u).data, o * u, n),
                    c = l()(a, t);
                return "boolean" == typeof c ? h : c.palette()
            }
            var O = function(e) {
                    return T(e)
                },
                T = u().memoize((function(e) {
                    return new Promise((function(t, n) {
                        var r = new Image;
                        r.crossOrigin = "Anonymous";
                        r.onerror = function(e) {
                            n(e);
                            r.onerror = r.onload = null;
                            r = null
                        };
                        r.onload = function() {
                            t(v(r, 5, 10));
                            r.onerror = r.onload = null;
                            r = null
                        };
                        r.src = e
                    }))
                }));

            function g(e) {
                return new Promise((function(t, n) {
                    var r = new FileReader;
                    r.readAsDataURL(e);
                    r.onload = function() {
                        i()("string" == typeof r.result, "Result must be a string");
                        t(r.result)
                    };
                    r.onerror = function(e) {
                        return n(e)
                    }
                }))
            }

            function m(e) {
                var t = e.split(";base64,");
                i()(2 === t.length, "Input data is not a valid image.");
                return atob(t[1]).length
            }

            function S(e, t, n) {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = s((function(e, t, n) {
                    var r;
                    return f(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, N(e).arrayBuffer()];
                            case 1:
                                r = i.sent();
                                return [2, new File([r], t, {
                                    type: n
                                })]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function N(e) {
                var t;
                t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                for (var n = e.split(",")[0].split(":")[1].split(";")[0], r = new Uint8Array(t.length), i = 0; i < t.length; i++) r[i] = t.charCodeAt(i);
                return new Blob([r], {
                    type: n
                })
            }

            function b(e) {
                return A.apply(this, arguments)
            }

            function A() {
                return (A = s((function(e) {
                    var t, n, r;
                    return f(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                if ("image/png" !== (null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0])) throw new Error("File is not a PNG");
                                return [4, e.text()];
                            case 1:
                                n = i.sent();
                                return (r = n.indexOf("IDAT")) > 0 && -1 !== n.substring(0, r).indexOf("acTL") ? [2, !0] : [2, !1]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        786502: (e, t, n) => {
            "use strict";
            n.d(t, {
                bm: () => i,
                an: () => g,
                rh: () => m,
                Sz: () => S,
                Vg: () => C,
                ZP: () => L
            });
            var r, i, o = n(258104),
                u = n(61209),
                a = n(21372),
                l = n(179913),
                c = n(840922),
                s = n(473903),
                f = n(796909),
                d = n(504275),
                _ = n(2590),
                E = n(718634),
                p = n(473708);

            function I(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        I(e, t, n[t])
                    }))
                }
                return e
            }

            function v(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            r = n(218146);
            ! function(e) {
                e.GROUP_DM = "GROUP_DM";
                e.DM = "DM";
                e.FRIEND = "FRIEND";
                e.CHANNEL = "CHANNEL"
            }(i || (i = {}));
            var O = function(e, t) {
                    return null != e && a.ZP.isMember(e, t)
                },
                T = function(e) {
                    var t = e.omitUserIds,
                        n = e.maxRowsWithoutQuery,
                        r = e.omitGuildId,
                        o = e.shownUserIds,
                        a = e.rows,
                        c = e.counts,
                        d = e.includeGroupDms,
                        E = e.limit,
                        p = 0,
                        I = !0,
                        h = !1,
                        v = void 0;
                    try {
                        for (var T, g = f.Z.getPrivateChannelIds()[Symbol.iterator](); !(I = (T = g.next()).done); I = !0) {
                            var m = T.value;
                            if (null != n && n > 0 && a.length >= n) break;
                            if (null != E && p >= E) break;
                            var S = u.Z.getChannel(m);
                            if (null != S && S.isPrivate())
                                if (d && S.type === _.d4z.GROUP_DM) {
                                    a.push({
                                        type: i.GROUP_DM,
                                        item: S,
                                        isSuggested: !1
                                    });
                                    c.numGroupDms++;
                                    p++
                                } else {
                                    if (null != l.ZP.lastMessageId(S.id)) {
                                        var y = S.getRecipientId();
                                        if (null != y && !t.has(y) && !o.has(y)) {
                                            var N = s.default.getUser(y);
                                            if (null == N || N.bot || O(r, N.id)) continue;
                                            o.add(N.id);
                                            a.push({
                                                type: i.DM,
                                                item: N,
                                                isSuggested: !1
                                            });
                                            c.numDms++;
                                            p++
                                        }
                                    }
                                }
                        }
                    } catch (e) {
                        h = !0;
                        v = e
                    } finally {
                        try {
                            I || null == g.return || g.return()
                        } finally {
                            if (h) throw v
                        }
                    }
                };

            function g(e) {
                var t = e.query,
                    n = e.inviteTargetType,
                    r = e.omitUserIds,
                    o = e.suggestedUserIds,
                    a = e.suggestedChannelIds,
                    f = e.maxRowsWithoutQuery,
                    _ = e.omitGuildId,
                    p = new Set,
                    I = [],
                    g = {
                        numFriends: 0,
                        numDms: 0,
                        numGroupDms: 0,
                        numGuildMembers: 0,
                        numChannels: 0
                    };
                if ("" === t) {
                    var m = {
                        omitUserIds: r,
                        maxRowsWithoutQuery: f,
                        omitGuildId: _,
                        shownUserIds: p,
                        rows: I,
                        counts: g
                    };
                    if (n === E.Iq.EMBEDDED_APPLICATION) {
                        T(v(h({}, m), {
                            includeGroupDms: !1,
                            limit: 1
                        }));
                        ! function(e) {
                            var t = e.suggestedChannelIds,
                                n = e.maxRowsWithoutQuery,
                                r = e.rows,
                                o = e.counts;
                            if (null != t) {
                                var a = !0,
                                    l = !1,
                                    c = void 0;
                                try {
                                    for (var s, f = t[Symbol.iterator](); !(a = (s = f.next()).done); a = !0) {
                                        var d = s.value;
                                        if (null != n && n > 0 && r.length >= n) break;
                                        var _ = u.Z.getChannel(d);
                                        if (null != _) {
                                            r.push({
                                                type: i.CHANNEL,
                                                item: _,
                                                isSuggested: !0
                                            });
                                            o.numChannels++
                                        }
                                    }
                                } catch (e) {
                                    l = !0;
                                    c = e
                                } finally {
                                    try {
                                        a || null == f.return || f.return()
                                    } finally {
                                        if (l) throw c
                                    }
                                }
                            }
                        }(v(h({}, m), {
                            suggestedChannelIds: a
                        }))
                    }! function(e) {
                        var t = e.omitUserIds,
                            n = e.suggestedUserIds,
                            r = e.maxRowsWithoutQuery,
                            o = e.omitGuildId,
                            u = e.shownUserIds,
                            a = e.rows,
                            l = e.counts;
                        if (null != n) {
                            var c = !0,
                                f = !1,
                                d = void 0;
                            try {
                                for (var _, E = n[Symbol.iterator](); !(c = (_ = E.next()).done); c = !0) {
                                    var p = _.value;
                                    if (null != r && r > 0 && a.length >= r) break;
                                    if (!t.has(p) && !u.has(p)) {
                                        var I = s.default.getUser(p);
                                        if (null != I && !O(o, I.id)) {
                                            u.add(I.id);
                                            a.push({
                                                type: i.FRIEND,
                                                item: I,
                                                isSuggested: !0
                                            });
                                            l.numFriends++
                                        }
                                    }
                                }
                            } catch (e) {
                                f = !0;
                                d = e
                            } finally {
                                try {
                                    c || null == E.return || E.return()
                                } finally {
                                    if (f) throw d
                                }
                            }
                        }
                    }(v(h({}, m), {
                        suggestedUserIds: o
                    }));
                    T(v(h({}, m), {
                        includeGroupDms: !0
                    }));
                    ! function(e) {
                        var t = e.omitUserIds,
                            n = e.maxRowsWithoutQuery,
                            r = e.omitGuildId,
                            o = e.shownUserIds,
                            u = e.rows,
                            a = e.counts,
                            l = !0,
                            f = !1,
                            d = void 0;
                        try {
                            for (var _, E = c.Z.getFriendIDs()[Symbol.iterator](); !(l = (_ = E.next()).done); l = !0) {
                                var p = _.value;
                                if (null != n && n > 0 && u.length >= n) break;
                                if (!t.has(p) && !o.has(p)) {
                                    var I = s.default.getUser(p);
                                    if (null != I && !O(r, I.id)) {
                                        u.push({
                                            type: i.FRIEND,
                                            item: I,
                                            isSuggested: !1
                                        });
                                        a.numFriends++
                                    }
                                }
                            }
                        } catch (e) {
                            f = !0;
                            d = e
                        } finally {
                            try {
                                l || null == E.return || E.return()
                            } finally {
                                if (f) throw d
                            }
                        }
                    }(m)
                } else {
                    var S = {
                        query: t,
                        rows: I,
                        counts: g
                    };
                    n === E.Iq.EMBEDDED_APPLICATION && function(e) {
                        var t = e.query,
                            n = e.rows,
                            r = e.counts;
                        e.inviteTargetType === E.Iq.EMBEDDED_APPLICATION && d.ZP.queryChannels({
                            query: t,
                            limit: 3,
                            guildId: void 0
                        }).forEach((function(e) {
                            var t = e.record;
                            n.push({
                                type: i.CHANNEL,
                                item: t,
                                isSuggested: !1
                            });
                            r.numChannels++
                        }))
                    }(v(h({}, S), {
                        inviteTargetType: n
                    }));
                    ! function(e) {
                        var t = e.query,
                            n = e.omitUserIds,
                            r = e.shownUserIds,
                            o = e.rows,
                            a = e.counts;
                        d.ZP.queryDMUsers({
                            query: t,
                            limit: 50
                        }).forEach((function(e) {
                            var t = e.record;
                            if (!n.has(t.id)) {
                                var c = u.Z.getDMFromUserId(t.id);
                                if (null != c && null != l.ZP.lastMessageId(c)) {
                                    r.add(t.id);
                                    o.push({
                                        type: i.DM,
                                        item: t,
                                        isSuggested: !1
                                    });
                                    a.numDms++
                                }
                            }
                        }))
                    }(v(h({}, S), {
                        omitUserIds: r,
                        shownUserIds: p
                    }));
                    ! function(e) {
                        var t = e.query,
                            n = e.rows,
                            r = e.counts;
                        d.ZP.queryGroupDMs({
                            query: t,
                            limit: 50,
                            fuzzy: !1
                        }).forEach((function(e) {
                            var t = e.record;
                            n.push({
                                type: i.GROUP_DM,
                                item: t,
                                isSuggested: !1
                            });
                            r.numGroupDms++
                        }))
                    }(S);
                    ! function(e) {
                        var t = e.query,
                            n = e.rows,
                            r = e.counts,
                            o = e.omitUserIds,
                            u = e.shownUserIds;
                        d.ZP.queryFriends({
                            query: t,
                            limit: 500,
                            _fuzzy: !1
                        }).forEach((function(e) {
                            var t = e.record;
                            if (!o.has(t.id) && !u.has(t.id)) {
                                u.add(t.id);
                                n.push({
                                    type: i.FRIEND,
                                    item: t,
                                    isSuggested: !1
                                });
                                r.numFriends++
                            }
                        }))
                    }(v(h({}, S), {
                        omitUserIds: r,
                        shownUserIds: p
                    }))
                }
                return {
                    rows: I,
                    counts: g
                }
            }

            function m(e, t) {
                var n = !0,
                    r = !1,
                    i = void 0;
                try {
                    for (var o, a = f.Z.getPrivateChannelIds()[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                        var c = o.value,
                            d = u.Z.getChannel(c);
                        if (null != d && d.isDM() && null != l.ZP.lastMessageId(d.id)) {
                            var _ = d.getRecipientId();
                            if (null != _ && !e.has(_)) {
                                var E = s.default.getUser(_);
                                if (null == E || E.bot || O(t, E.id)) continue;
                                return E
                            }
                        }
                    }
                } catch (e) {
                    r = !0;
                    i = e
                } finally {
                    try {
                        n || null == a.return || a.return()
                    } finally {
                        if (r) throw i
                    }
                }
                return null
            }

            function S(e) {
                var t = e.channel,
                    n = e.inviteTargetType,
                    r = e.applicationId;
                if (n === E.Iq.EMBEDDED_APPLICATION)
                    if (null != t) {
                        var i = !0,
                            u = !1,
                            a = void 0;
                        try {
                            for (var l, c = o.ZP.getEmbeddedActivitiesForChannel(t.id)[Symbol.iterator](); !(i = (l = c.next()).done); i = !0) {
                                var s = l.value;
                                if (s.application_id === r) return new Set(s.connections.keys())
                            }
                        } catch (e) {
                            u = !0;
                            a = e
                        } finally {
                            try {
                                i || null == c.return || c.return()
                            } finally {
                                if (u) throw a
                            }
                        }
                    } return new Set
            }
            var y, N = "minutes",
                b = "hours",
                A = "days",
                R = "never",
                P = (I(y = {}, r.INVITE_OPTIONS_30_MINUTES.value, {
                        value: 30,
                        type: N
                    }),
                    I(y, r.INVITE_OPTIONS_1_HOUR.value, {
                        value: 1,
                        type: b
                    }), I(y, r.INVITE_OPTIONS_6_HOURS.value, {
                        value: 6,
                        type: b
                    }), I(y, r.INVITE_OPTIONS_12_HOURS.value, {
                        value: 12,
                        type: b
                    }), I(y, r.INVITE_OPTIONS_1_DAY.value, {
                        value: 1,
                        type: A
                    }), I(y, r.INVITE_OPTIONS_7_DAYS.value, {
                        value: 7,
                        type: A
                    }), I(y, r.INVITE_OPTIONS_30_DAYS.value, {
                        value: 30,
                        type: A
                    }), I(y, r.INVITE_OPTIONS_FOREVER.value, {
                        value: 0,
                        type: R
                    }), y);

            function C(e, t) {
                var n = parseInt(t, 10),
                    r = 0 === n,
                    i = P[e].value;
                switch (P[e].type) {
                    case N:
                        return r ? p.Z.Messages.INVITE_EXPIRES_MINUTES : p.Z.Messages.INVITE_EXPIRES_MINUTES_OR_USES.format({
                            numUses: n
                        });
                    case b:
                        return r ? p.Z.Messages.INVITE_EXPIRES_HOURS.format({
                            numHours: i
                        }) : p.Z.Messages.INVITE_EXPIRES_HOURS_OR_USES.format({
                            numHours: i,
                            numUses: n
                        });
                    case A:
                        return r ? p.Z.Messages.INVITE_EXPIRES_DAYS_PLURAL.format({
                            numDays: i
                        }) : p.Z.Messages.INVITE_EXPIRES_DAYS_OR_USES_PLURAL.format({
                            numDays: i,
                            numUses: n
                        });
                    case R:
                        return r ? p.Z.Messages.INVITE_EXPIRES_NEVER : p.Z.Messages.INVITE_EXPIRES_USES.format({
                            numUses: n
                        });
                    default:
                        return ""
                }
            }
            const L = {
                getMaxAgeOptions: r.MAX_AGE_OPTIONS,
                getMaxUsesOptions: r.MAX_USES_OPTIONS,
                INVITE_OPTIONS_FOREVER: r.INVITE_OPTIONS_FOREVER,
                INVITE_OPTIONS_1_DAY: r.INVITE_OPTIONS_1_DAY,
                INVITE_OPTIONS_7_DAYS: r.INVITE_OPTIONS_7_DAYS,
                INVITE_OPTIONS_30_DAYS: r.INVITE_OPTIONS_30_DAYS,
                INVITE_OPTIONS_12_HOURS: r.INVITE_OPTIONS_12_HOURS,
                INVITE_OPTIONS_6_HOURS: r.INVITE_OPTIONS_6_HOURS,
                INVITE_OPTIONS_1_HOUR: r.INVITE_OPTIONS_1_HOUR,
                INVITE_OPTIONS_30_MINUTES: r.INVITE_OPTIONS_30_MINUTES,
                INVITE_OPTIONS_UNLIMITED: r.INVITE_OPTIONS_UNLIMITED,
                INVITE_OPTIONS_ONCE: r.INVITE_OPTIONS_ONCE,
                INVITE_OPTIONS_5_TIMES: r.INVITE_OPTIONS_5_TIMES,
                INVITE_OPTIONS_10_TIMES: r.INVITE_OPTIONS_10_TIMES,
                INVITE_OPTIONS_25_TIMES: r.INVITE_OPTIONS_25_TIMES,
                INVITE_OPTIONS_50_TIMES: r.INVITE_OPTIONS_50_TIMES,
                INVITE_OPTIONS_100_TIMES: r.INVITE_OPTIONS_100_TIMES
            }
        },
        488110: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => I
            });
            var r = n(473903),
                i = n(496486),
                o = function(e) {
                    return "function" == typeof e ? e() : e
                };
            n.n(i)().curry((function(e, t, n) {
                return o(t) ? e(n) : n({})
            }));

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        u(e, t, n[t])
                    }))
                }
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function c(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }
            var s, f, d = function() {
                    throw new Error("updateModal has not been implemented.")
                },
                _ = n(680918);
            s = _.showModal;
            d = _.updateModalProps;
            f = n(264817).Mr;

            function E(e) {
                var t = e.promiseFn,
                    n = e.resolve,
                    r = e.reject,
                    i = e.modalProps,
                    o = void 0 === i ? {} : i,
                    u = e.hooks,
                    c = (void 0 === u ? {} : u).onEarlyClose,
                    _ = function() {
                        null == c || c()
                    },
                    E = function(e) {
                        f(v);
                        n(e)
                    },
                    I = function(e) {
                        f(v);
                        r(e)
                    },
                    h = function(e) {
                        var t = e.res;
                        d(v, O, _, l(a({}, o), {
                            error: t.body.message
                        }))
                    };
                if (null != s) var v = s(O, _, o);
                else null == c || c();

                function O(e) {
                    d(v, O, _, l(a({}, o), {
                        isLoading: !0
                    }));
                    return p({
                        promiseFn: t,
                        resolve: E,
                        reject: I,
                        code: e,
                        mfaCodeHandler: h,
                        isModalOpen: !0
                    })
                }
            }

            function p(e) {
                var t = e.promiseFn,
                    n = e.resolve,
                    r = e.reject,
                    i = e.code,
                    o = e.mfaCodeHandler,
                    u = void 0 === o ? E : o,
                    l = e.isModalOpen,
                    s = void 0 !== l && l,
                    f = c(e, ["promiseFn", "resolve", "reject", "code", "mfaCodeHandler", "isModalOpen"]);
                return t(null != i ? {
                    code: i
                } : {}).then(n, (function(e) {
                    if (function(e, t) {
                            return e.body && 60008 === e.body.code || t && 429 === e.status
                        }(e, s)) return u(a({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e
                    }, f));
                    r(e)
                }))
            }

            function I(e, t) {
                var n, i, u = null != t ? t : {},
                    l = u.checkEnabled,
                    s = void 0 === l ? null !== (i = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i : l,
                    f = c(u, ["checkEnabled"]);
                return new Promise((function(t, n) {
                    (o(s) ? E : p)(a({
                        promiseFn: e,
                        resolve: t,
                        reject: n
                    }, f))
                }))
            }
        },
        73105: (e, t, n) => {
            "use strict";
            n.d(t, {
                RD: () => K,
                WA: () => k,
                f5: () => F,
                Gb: () => M,
                Rs: () => x,
                _2: () => Y,
                gL: () => D,
                fG: () => Z
            });
            var r = n(306472),
                i = n(737264),
                o = n(496486),
                u = n.n(o),
                a = n(809784),
                l = n(296602),
                c = n(384411),
                s = n(72580),
                f = n(310126);

            function d(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }
            var _ = function() {
                function e(t, n) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this._shouldProcess = !1;
                    this._processing = !1;
                    this._minimumTimeRemaining = 5;
                    this._language = t;
                    this._languageHint = t;
                    this._onChange = n;
                    n(t)
                }
                var t = e.prototype;
                t.process = function(e) {
                    var t = this;
                    if (!this._processing) {
                        this._processing = !0;
                        requestIdleCallback((function(n) {
                            if (n.timeRemaining() <= t._minimumTimeRemaining) t._processEnd();
                            else {
                                e.length > 256 && (e = e.slice(0, 256));
                                (function(e, t) {
                                    return f.ZP.ensureModule("discord_spellcheck").then((function() {
                                        var n = f.ZP.requireModule("discord_spellcheck").cld;
                                        return new Promise((function(r, i) {
                                            n.detect(e, {
                                                httpHint: t,
                                                encodingHint: "UTF8"
                                            }, (function(e, t) {
                                                null != e ? i(new Error(e.message)) : !t.reliable || t.languages[0].percent < 90 || t.languages[0].score < 500 ? i(new Error("Not enough reliable text.")) : r(t.languages[0].code)
                                            }))
                                        }))
                                    }))
                                })(e, t._languageHint).then((function(e) {
                                    t.language = e;
                                    t._processEnd(n.didTimeout)
                                }), (function() {
                                    t._processEnd(n.didTimeout)
                                }))
                            }
                        }))
                    }
                };
                t._processEnd = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this._processing = !1;
                    e && this._minimumTimeRemaining++
                };
                ! function(e, t, n) {
                    t && d(e.prototype, t);
                    n && d(e, n)
                }(e, [{
                    key: "language",
                    get: function() {
                        return this._language
                    },
                    set: function(e) {
                        if (this._language !== e) {
                            this._language = e;
                            this._onChange(e)
                        }
                    }
                }, {
                    key: "languageHint",
                    set: function(e) {
                        this._languageHint = e
                    }
                }]);
                return e
            }();
            const E = {
                aa: "aa-ET",
                af: "af-ZA",
                ak: "ak-GH",
                am: "am-ET",
                an: "an-ES",
                ar: "ar-MA",
                as: "as-IN",
                ay: "ay-PE",
                az: "az-AZ",
                be: "be-BY",
                bg: "bg-BG",
                bi: "bi-TV",
                bn: "bn-BD",
                bo: "bo-CN",
                br: "br-FR",
                bs: "bs-BA",
                ca: "ca-ES",
                ce: "ce-RU",
                cs: "cs-CZ",
                cv: "cv-RU",
                cy: "cy-GB",
                da: "da-DK",
                de: "de-DE",
                dv: "dv-MV",
                dz: "dz-BT",
                el: "el-GR",
                en: "en-US",
                es: "es-ES",
                et: "et-EE",
                eu: "eu-ES",
                fa: "fa-IR",
                ff: "ff-SN",
                fi: "fi-FI",
                fo: "fo-FO",
                fr: "fr-FR",
                fy: "fy-DE",
                ga: "ga-IE",
                gd: "gd-GB",
                gl: "gl-ES",
                gu: "gu-IN",
                gv: "gv-GB",
                ha: "ha-NG",
                he: "he-IL",
                hi: "hi-IN",
                hr: "hr-HR",
                ht: "ht-HT",
                hu: "hu-HU",
                hy: "hy-AM",
                ia: "ia-FR",
                id: "id-ID",
                ig: "ig-NG",
                ik: "ik-CA",
                is: "is-IS",
                it: "it-IT",
                iu: "iu-CA",
                ja: "ja-JP",
                ka: "ka-GE",
                kk: "kk-KZ",
                kl: "kl-GL",
                km: "km-KH",
                kn: "kn-IN",
                ko: "ko-KR",
                ks: "ks-IN",
                ku: "ku-TR",
                kw: "kw-GB",
                ky: "ky-KG",
                lb: "lb-LU",
                lg: "lg-UG",
                li: "li-BE",
                ln: "ln-CD",
                lo: "lo-LA",
                lt: "lt-LT",
                lv: "lv-LV",
                mg: "mg-MG",
                mh: "mh-MH",
                mi: "mi-NZ",
                mk: "mk-MK",
                ml: "ml-IN",
                mn: "mn-MN",
                mr: "mr-IN",
                ms: "ms-MY",
                mt: "mt-MT",
                my: "my-MM",
                nb: "nb-NO",
                ne: "ne-NP",
                nl: "nl-NL",
                nn: "nn-NO",
                nr: "nr-ZA",
                oc: "oc-FR",
                om: "om-KE",
                or: "or-IN",
                os: "os-RU",
                pa: "pa-PK",
                pl: "pl-PL",
                ps: "ps-AF",
                pt: "pt-PT",
                ro: "ro-RO",
                ru: "ru-RU",
                rw: "rw-RW",
                sa: "sa-IN",
                sc: "sc-IT",
                sd: "sd-IN",
                se: "se-NO",
                si: "si-LK",
                sk: "sk-SK",
                sl: "sl-SI",
                so: "so-SO",
                sq: "sq-AL",
                sr: "sr-RS",
                ss: "ss-ZA",
                st: "st-ZA",
                sv: "sv-SE",
                sw: "sw-KE",
                ta: "ta-IN",
                te: "te-IN",
                tg: "tg-TJ",
                th: "th-TH",
                ti: "ti-ER",
                tk: "tk-TM",
                tl: "tl-PH",
                tn: "tn-ZA",
                tr: "tr-TR",
                ts: "ts-ZA",
                tt: "tt-RU",
                ug: "ug-CN",
                uk: "uk-UA",
                ur: "ur-PK",
                uz: "uz-UZ",
                ve: "ve-ZA",
                vi: "vi-VN",
                wa: "wa-BE",
                wo: "wo-SN",
                xh: "xh-ZA",
                yi: "yi-US",
                yo: "yo-NG",
                zh: "zh-CN",
                zu: "zu-ZA"
            };

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function I(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function h(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            I(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            I(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function v(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function O(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var T = function(e, t) {
                    var n, r, i, o, u = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(o) {
                        return function(a) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            u.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            u.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = u.ops.pop();
                                            u.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                u.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && u.label < i[1]) {
                                                u.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && u.label < i[2]) {
                                                u.label = i[2];
                                                u.ops.push(o);
                                                break
                                            }
                                            i[2] && u.ops.pop();
                                            u.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, u)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, a])
                        }
                    }
                },
                g = new l.Z("Spellchecker"),
                m = null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck;

            function S(e) {
                var t;
                e = null !== (t = E[e]) && void 0 !== t ? t : e;
                var n = (0, i.Q)(e.replace(/[_-]/g, "-"));
                if (null != n && null != n.langtag.language && null != n.langtag.region) {
                    var r = n.langtag,
                        o = r.language,
                        u = r.region;
                    return "".concat(o.language.toLowerCase(), "-").concat(u.toUpperCase())
                }
                g.error("".concat(e, " is not a valid locale."))
            }
            var y = function() {
                    function e(t) {
                        var n = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        this._enabled = !0;
                        this.misspelledWord = "";
                        this.corrections = [];
                        var r = O(c.default.locale.split("-"), 2),
                            i = r[0],
                            o = r[1];
                        this.regionPreference = o;
                        var u = this.getAvailableLanguages(t);
                        this.languageDetector = new _(i, (function(e) {
                            var r = "".concat(e, "-").concat(n.regionPreference);
                            if (-1 !== t.indexOf(r)) n.setLocale(r);
                            else {
                                var o, a = null !== (o = u[e]) && void 0 !== o ? o : E[i];
                                null != a && n.setLocale(a)
                            }
                        }));
                        m.on("spellcheck-result", (function(e, t) {
                            n.misspelledWord = null != e ? e : "";
                            n.corrections = null != t ? t : []
                        }))
                    }
                    var t = e.prototype;
                    t.setLearnedWords = function(e) {
                        m.setLearnedWords(e)
                    };
                    t.setLocale = function(e) {
                        var t;
                        null === (t = m.setLocale(e)) || void 0 === t || t.then((function(t) {
                            g.info("Switching to ".concat(e), t ? "(available)" : "(unavailable)")
                        }))
                    };
                    t.setAppLocale = function(e) {
                        this.regionPreference = e.split("-")[1]
                    };
                    t.detectLanguage = function(e) {
                        this.enabled && this.languageDetector.process(e)
                    };
                    t.getAvailableLanguages = function(e) {
                        var t = {};
                        e.forEach((function(e) {
                            var n, r = O(e.split("-"), 1)[0];
                            t[r] = null !== (n = t[r]) && void 0 !== n ? n : e
                        }));
                        return t
                    };
                    t.isMisspelled = function(e, t) {
                        return "" !== this.misspelledWord && e === this.misspelledWord
                    };
                    t.getCorrectionsForMisspelling = function(e, t) {
                        return this.isMisspelled(e, t) ? this.corrections : []
                    };
                    t.replaceMisspelling = function(e) {
                        m.replaceMisspelling(e)
                    };
                    ! function(e, t, n) {
                        t && v(e.prototype, t);
                        n && v(e, n)
                    }(e, [{
                        key: "enabled",
                        get: function() {
                            return this._enabled
                        },
                        set: function(e) {
                            this._enabled = e
                        }
                    }]);
                    return e
                }(),
                N = u().debounce((function(e, t) {
                    var n = function(e) {
                        if (null == e) return null;
                        if ((0, a.k)(e, HTMLInputElement) || (0, a.k)(e, HTMLTextAreaElement)) return e.value;
                        if ((0, a.k)(e) && e.hasAttribute("contenteditable")) return e.textContent
                    }(t);
                    null != n && e.detectLanguage(n)
                }), 250);

            function b(e) {
                null != document.body && document.body.addEventListener("beforeinput", (function(t) {
                    return N(e, t.target)
                }), !0)
            }

            function A() {
                return (A = h((function() {
                    var e, t, n, r;
                    return T(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, m.getAvailableDictionaries()];
                            case 1:
                                t = null !== (e = i.sent()) && void 0 !== e ? e : [];
                                n = t.map(S).filter(s.lm);
                                b(r = new y(n));
                                return [2, r]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var R = n(120415);

            function P(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function C(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            P(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            P(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var L = function(e, t) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = t.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };

            function U() {
                return null != (null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck)
            }

            function M() {
                return (0, R.nI)() && U()
            }
            var w = M() ? function() {
                return A.apply(this, arguments)
            }() : null;

            function D(e) {
                return G.apply(this, arguments)
            }

            function G() {
                return (G = C((function(e) {
                    var t;
                    return L(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, w];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.enabled = e;
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function Z(e) {
                return j.apply(this, arguments)
            }

            function j() {
                return (j = C((function(e) {
                    var t;
                    return L(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, w];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.setLearnedWords(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function F(e) {
                return H.apply(this, arguments)
            }

            function H() {
                H = C((function(e) {
                    var t, n, r = arguments;
                    return L(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                t = r.length > 1 && void 0 !== r[1] && r[1];
                                return [4, w];
                            case 1:
                                return null == (n = i.sent()) ? [2, !1] : [2, n.isMisspelled(e, t)]
                        }
                    }))
                }));
                return H.apply(this, arguments)
            }

            function k(e) {
                return V.apply(this, arguments)
            }

            function V() {
                V = C((function(e) {
                    var t, n, r, i = arguments;
                    return L(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                t = i.length > 1 && void 0 !== i[1] && i[1], n = i.length > 2 && void 0 !== i[2] ? i[2] : 5;
                                return [4, w];
                            case 1:
                                return null == (r = o.sent()) ? [2, []] : [2, r.getCorrectionsForMisspelling(e, t).slice(0, n)]
                        }
                    }))
                }));
                return V.apply(this, arguments)
            }

            function x(e) {
                return B.apply(this, arguments)
            }

            function B() {
                return (B = C((function(e) {
                    var t;
                    return L(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, w];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.replaceMisspelling(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function Y(e) {
                return W.apply(this, arguments)
            }

            function W() {
                return (W = C((function(e) {
                    var t;
                    return L(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, w];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.setAppLocale(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function K(e) {
                if (!U()) return function() {};
                var t = r.Z.spellCheck.on("spellcheck-result", e);
                return null != t ? t : function() {}
            }
        },
        391438: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(281110),
                i = n(652591);

            function o(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        o(e, t, n[t])
                    }))
                }
                return e
            }

            function a(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function l(e, t, n) {
                var r = t.trackedActionData,
                    o = a(t, ["trackedActionData"]),
                    l = {
                        url: o.url,
                        request_method: n
                    };
                return new Promise((function(t, n) {
                    e(o).then((function(e) {
                        var n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e));
                        (0, i.trackNetworkAction)(r.event, u({
                            status_code: e.status
                        }, l, n));
                        t(e)
                    })).catch((function(e) {
                        var t, o, a = r.properties;
                        "function" == typeof r.properties && (a = r.properties(e));
                        (0, i.trackNetworkAction)(r.event, u({
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (o = e.body) || void 0 === o ? void 0 : o.message
                        }, l, a));
                        n(e)
                    }))
                }))
            }
            const c = {
                get: function(e) {
                    return l(r.ZP.get, e, "get")
                },
                post: function(e) {
                    return l(r.ZP.post, e, "post")
                },
                put: function(e) {
                    return l(r.ZP.put, e, "put")
                },
                patch: function(e) {
                    return l(r.ZP.patch, e, "patch")
                },
                delete: function(e) {
                    return l(r.ZP.delete, e, "del")
                }
            }
        },
        322500: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i,
                i = /^((https:\/\/)?(discord\.gg\/)|(discord\.com\/)(invite\/)?)?[A-Za-z0-9]{8,8}$/,
                o = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                u = /^(.*)#[0-9]{1,5}$/,
                a = ["@", "#", ":", "```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage"],
                l = ["discordtag", "everyone", "here", "discord nitro", "discord"];
            const c = {
                isEmail: function(e) {
                    return r.test(e)
                },
                isInvite: function(e) {
                    return i.test(e)
                },
                isPhoneNumber: function(e) {
                    return o.test(e)
                },
                isUserTagLike: function(e) {
                    var t = u.exec(e);
                    if (null != t && t.length > 1) {
                        var n = t[1],
                            r = a.some((function(e) {
                                return n.includes(e)
                            })),
                            i = l.includes(n);
                        return !r && !i
                    }
                    return !1
                }
            }
        },
        218146: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                INVITE_OPTIONS_UNLIMITED: () => o,
                INVITE_OPTIONS_ONCE: () => u,
                INVITE_OPTIONS_5_TIMES: () => a,
                INVITE_OPTIONS_10_TIMES: () => l,
                INVITE_OPTIONS_25_TIMES: () => c,
                INVITE_OPTIONS_50_TIMES: () => s,
                INVITE_OPTIONS_100_TIMES: () => f,
                MAX_USES_OPTIONS: () => d,
                INVITE_OPTIONS_30_MINUTES: () => _,
                INVITE_OPTIONS_1_HOUR: () => E,
                INVITE_OPTIONS_6_HOURS: () => p,
                INVITE_OPTIONS_12_HOURS: () => I,
                INVITE_OPTIONS_1_DAY: () => h,
                INVITE_OPTIONS_7_DAYS: () => v,
                INVITE_OPTIONS_30_DAYS: () => O,
                INVITE_OPTIONS_FOREVER: () => T,
                MAX_AGE_OPTIONS: () => g
            });
            var r = n(473708);

            function i(e, t) {
                return {
                    value: e,
                    get label() {
                        return t()
                    }
                }
            }
            var o = i(0, (function() {
                    return r.Z.Messages.MAX_USES.format({
                        maxUses: 0
                    })
                })),
                u = i(1, (function() {
                    return r.Z.Messages.MAX_USES.format({
                        maxUses: 1
                    })
                })),
                a = i(5, (function() {
                    return r.Z.Messages.MAX_USES.format({
                        maxUses: 5
                    })
                })),
                l = i(10, (function() {
                    return r.Z.Messages.MAX_USES.format({
                        maxUses: 10
                    })
                })),
                c = i(25, (function() {
                    return r.Z.Messages.MAX_USES.format({
                        maxUses: 25
                    })
                })),
                s = i(50, (function() {
                    return r.Z.Messages.MAX_USES.format({
                        maxUses: 50
                    })
                })),
                f = i(100, (function() {
                    return r.Z.Messages.MAX_USES.format({
                        maxUses: 100
                    })
                })),
                d = [o, u, a, l, c, s, f],
                _ = i(1800, (function() {
                    return r.Z.Messages.DURATION_MINUTES.format({
                        minutes: 30
                    })
                })),
                E = i(3600, (function() {
                    return r.Z.Messages.DURATION_HOURS.format({
                        hours: 1
                    })
                })),
                p = i(21600, (function() {
                    return r.Z.Messages.DURATION_HOURS.format({
                        hours: 6
                    })
                })),
                I = i(43200, (function() {
                    return r.Z.Messages.DURATION_HOURS.format({
                        hours: 12
                    })
                })),
                h = i(86400, (function() {
                    return r.Z.Messages.DURATION_DAYS.format({
                        days: 1
                    })
                })),
                v = i(604800, (function() {
                    return r.Z.Messages.DURATION_DAYS.format({
                        days: 7
                    })
                })),
                O = i(2592e3, (function() {
                    return r.Z.Messages.DURATION_DAYS.format({
                        days: 30
                    })
                })),
                T = i(0, (function() {
                    return r.Z.Messages.MAX_AGE_NEVER
                })),
                g = [_, E, p, I, h, v, O, T]
        },
        680918: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                showModal: () => l,
                updateModalProps: () => c
            });
            var r = n(785893),
                i = (n(667294), n(264817)),
                o = n(919244);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var a = function(e, t, n) {
                return function(i) {
                    return (0, r.jsx)(o.Z, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                u(e, t, n[t])
                            }))
                        }
                        return e
                    }({
                        handleSubmit: e,
                        handleEarlyClose: t
                    }, n, i))
                }
            };

            function l(e, t, n) {
                return (0, i.h7)(a(e, t, n), {
                    onCloseCallback: t
                })
            }

            function c(e, t, n, r) {
                return (0, i.o)(e, a(t, n, r))
            }
        },
        180735: (e, t, n) => {
            "use strict";
            n.d(t, {
                h: () => r
            });
            var r;
            ! function(e) {
                e[e.USER = 100] = "USER";
                e[e.STREAM = 18] = "STREAM"
            }(r || (r = {}))
        },
        284157: (e, t, n) => {
            "use strict";
            n.d(t, {
                n: () => r
            });
            var r;
            ! function(e) {
                e.CONNECT_VOICE = "connect_voice"
            }(r || (r = {}));
            new Set(["connect_voice"])
        },
        349139: (e, t, n) => {
            "use strict";
            n.d(t, {
                o: () => r
            });
            var r;
            ! function(e) {
                e.TRANSFER_EXISTING_CALL = "TRANSFER_EXISTING_CALL";
                e.CREATE_NEW_CALL = "CREATE_NEW_CALL"
            }(r || (r = {}));
            new Set(["CREATE_NEW_CALL", "TRANSFER_EXISTING_CALL"])
        },
        248634: (e, t, n) => {
            "use strict";
            n.d(t, {
                z: () => r
            });
            var r;
            ! function(e) {
                e.MATCH_ALL = "match_all";
                e.MATCH_SOME = "match_some"
            }(r || (r = {}));
            new Set(["match_all", "match_some"])
        },
        482507: (e, t, n) => {
            "use strict";
            n.d(t, {
                J: () => r
            });

            function r(e) {
                var t = document.body;
                if (null == t) throw new Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                var n = document.createRange(),
                    r = window.getSelection(),
                    i = document.createElement("textarea");
                i.value = e;
                i.contentEditable = "true";
                i.style.visibility = "none";
                t.appendChild(i);
                n.selectNodeContents(i);
                null == r || r.removeAllRanges();
                null == r || r.addRange(n);
                i.focus();
                i.setSelectionRange(0, e.length);
                var o = document.execCommand("copy");
                t.removeChild(i);
                return o
            }
        },
        125333: (e, t, n) => {
            "use strict";
            n.d(t, {
                z0: () => r,
                Oh: () => i,
                Gk: () => o
            });

            function r(e) {
                return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.INVITE_HOST, "/").concat(e)
            }

            function i(e) {
                return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST, "/").concat(e)
            }

            function o() {
                return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, "/channels/@me")
            }
        },
        58964: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZP: () => E,
                WS: () => d,
                zS: () => _
            });
            var r = n(131795),
                i = n.n(r),
                o = n(468811),
                u = n.n(o);
            const a = n(426080).Z;

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function c(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function s(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var f = "https://discordapp.page.link";

            function d() {
                return u().v4()
            }

            function _(e) {
                if (!e.startsWith(f)) return null;
                try {
                    var t = new URL(e).searchParams,
                        n = t.get("link");
                    if (null == n) return null;
                    var r, i = decodeURIComponent(n),
                        o = new URL(i).searchParams,
                        u = {
                            utmSource: null !== (r = t.get("utm_source")) && void 0 !== r ? r : void 0
                        },
                        a = !0,
                        l = !1,
                        c = void 0;
                    try {
                        for (var d, _ = o.entries()[Symbol.iterator](); !(a = (d = _.next()).done); a = !0) {
                            var E = s(d.value, 2),
                                p = E[0],
                                I = E[1];
                            u[p] = I
                        }
                    } catch (e) {
                        l = !0;
                        c = e
                    } finally {
                        try {
                            a || null == _.return || _.return()
                        } finally {
                            if (l) throw c
                        }
                    }
                    return u
                } catch (e) {
                    return null
                }
            }

            function E(e, t) {
                var n = t.utmSource,
                    r = t.androidFallbackLink,
                    o = t.iosFallbackLink,
                    u = c(t, ["utmSource", "androidFallbackLink", "iosFallbackLink"]),
                    l = new URL(e);
                for (var s in u) {
                    var d = u[s];
                    null != d && l.searchParams.set(s, d)
                }
                var _, E, p, I, h, v = encodeURIComponent(l.toString()),
                    O = encodeURIComponent(a()),
                    T = (p = new RegExp("(".concat(["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)"].join("|"), ")"), "ig"), I = null != (null === i() || void 0 === i() || null === (_ = i().ua) || void 0 === _ ? void 0 : _.match(p)), h = "Safari" === (null === i() || void 0 === i() ? void 0 : i().name) && !I,
                        "iOS" !== (null === i() || void 0 === i() || null === (E = i().os) || void 0 === E ? void 0 : E.family) || h ? 1 : 0),
                    g = null != r ? encodeURIComponent(r) : null,
                    m = null != o ? encodeURIComponent(o) : null,
                    S = "".concat(f, "/?link=").concat(v, "&utm_source=").concat(n, "&apn=").concat("com.discord", "&isi=").concat(985746746, "&ibi=").concat("com.hammerandchisel.discord", "&sd=").concat(O, "&efr=").concat(T);
                null != g && (S += "&afl=".concat(g));
                null != m && (S += "&ifl=".concat(m));
                return S
            }
        },
        426080: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n(805829);

            function i() {
                return r.Z.Messages.DynamicLinks.IOS_APP_PREVIEW_DESCRIPTION
            }
        }
    }
]);