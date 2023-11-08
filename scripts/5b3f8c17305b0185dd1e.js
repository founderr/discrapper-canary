(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["83737"], {
        794252: function(t, e, r) {
            "use strict";
            var n = r("859514"),
                i = r("960049"),
                o = r("124852"),
                u = Array;
            n({
                target: "Array",
                proto: !0
            }, {
                with: function(t, e) {
                    return i(o(this), u, t, e)
                }
            })
        },
        448105: function(t, e, r) {
            "use strict";
            t.exports = function(t, e) {
                var r = e.length,
                    n = t.length;
                if (n > r) return !1;
                if (n === r) return t === e;
                t: for (var i = 0, o = 0; i < n; i++) {
                    for (var u = t.charCodeAt(i); o < r;)
                        if (e.charCodeAt(o++) === u) continue t;
                    return !1
                }
                return !0
            }
        },
        48648: function(t, e, r) {
            if (r("808653"), r("424973"), !n) var n = {
                map: function(t, e) {
                    var r = {};
                    return e ? t.map(function(t, n) {
                        return r.index = n, e.call(r, t)
                    }) : t.slice()
                },
                naturalOrder: function(t, e) {
                    return t < e ? -1 : t > e ? 1 : 0
                },
                sum: function(t, e) {
                    var r = {};
                    return t.reduce(e ? function(t, n, i) {
                        return r.index = i, t + e.call(r, n)
                    } : function(t, e) {
                        return t + e
                    }, 0)
                },
                max: function(t, e) {
                    return Math.max.apply(null, e ? n.map(t, e) : t)
                }
            };
            var i = function() {
                var t = 3;

                function e(t, e, r) {
                    return (t << 10) + (e << 5) + r
                }

                function r(t) {
                    var e = [],
                        r = !1;

                    function n() {
                        e.sort(t), r = !0
                    }
                    return {
                        push: function(t) {
                            e.push(t), r = !1
                        },
                        peek: function(t) {
                            return !r && n(), void 0 === t && (t = e.length - 1), e[t]
                        },
                        pop: function() {
                            return !r && n(), e.pop()
                        },
                        size: function() {
                            return e.length
                        },
                        map: function(t) {
                            return e.map(t)
                        },
                        debug: function() {
                            return !r && n(), e
                        }
                    }
                }

                function i(t, e, r, n, i, o, u) {
                    this.r1 = t, this.r2 = e, this.g1 = r, this.g2 = n, this.b1 = i, this.b2 = o, this.histo = u
                }

                function o() {
                    this.vboxes = new r(function(t, e) {
                        return n.naturalOrder(t.vbox.count() * t.vbox.volume(), e.vbox.count() * e.vbox.volume())
                    })
                }
                return i.prototype = {
                    volume: function(t) {
                        return (!this._volume || t) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(t) {
                        var r = this.histo;
                        if (!this._count_set || t) {
                            var n, i, o, u = 0;
                            for (n = this.r1; n <= this.r2; n++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (o = this.b1; o <= this.b2; o++) u += r[e(n, i, o)] || 0;
                            this._count = u, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new i(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(t) {
                        var r = this.histo;
                        if (!this._avg || t) {
                            var n, i, o, u, a = 0,
                                s = 8,
                                c = 0,
                                l = 0,
                                h = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (o = this.g1; o <= this.g2; o++)
                                    for (u = this.b1; u <= this.b2; u++) a += n = r[e(i, o, u)] || 0, c += n * (i + .5) * s, l += n * (o + .5) * s, h += n * (u + .5) * s;
                            a ? this._avg = [~~(c / a), ~~(l / a), ~~(h / a)] : this._avg = [~~(s * (this.r1 + this.r2 + 1) / 2), ~~(s * (this.g1 + this.g2 + 1) / 2), ~~(s * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(e) {
                        var r = e[0] >> t;
                        return gval = e[1] >> t, bval = e[2] >> t, r >= this.r1 && r <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, o.prototype = {
                    push: function(t) {
                        this.vboxes.push({
                            vbox: t,
                            color: t.avg()
                        })
                    },
                    palette: function() {
                        return this.vboxes.map(function(t) {
                            return t.color
                        })
                    },
                    size: function() {
                        return this.vboxes.size()
                    },
                    map: function(t) {
                        for (var e = this.vboxes, r = 0; r < e.size(); r++)
                            if (e.peek(r).vbox.contains(t)) return e.peek(r).color;
                        return this.nearest(t)
                    },
                    nearest: function(t) {
                        for (var e, r, n, i = this.vboxes, o = 0; o < i.size(); o++)((r = Math.sqrt(Math.pow(t[0] - i.peek(o).color[0], 2) + Math.pow(t[1] - i.peek(o).color[1], 2) + Math.pow(t[2] - i.peek(o).color[2], 2))) < e || void 0 === e) && (e = r, n = i.peek(o).color);
                        return n
                    },
                    forcebw: function() {
                        var t = this.vboxes;
                        t.sort(function(t, e) {
                            return n.naturalOrder(n.sum(t.color), n.sum(e.color))
                        });
                        var e = t[0].color;
                        e[0] < 5 && e[1] < 5 && e[2] < 5 && (t[0].color = [0, 0, 0]);
                        var r = t.length - 1,
                            i = t[r].color;
                        i[0] > 251 && i[1] > 251 && i[2] > 251 && (t[r].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(u, a) {
                        if (!u.length || a < 2 || a > 256) return !1;
                        var s, c, l, h, f, g, v, p, d, m, b, y, w, O, S, x, k = (s = u, f = Array(32768), s.forEach(function(r) {
                                l = r[0] >> t, h = r[1] >> t, f[c = e(l, h, r[2] >> t)] = (f[c] || 0) + 1
                            }), f),
                            A = 0;
                        k.forEach(function() {
                            A++
                        });
                        var z = (g = u, v = k, b = 1e6, y = 0, w = 1e6, O = 0, S = 1e6, x = 0, g.forEach(function(e) {
                                p = e[0] >> t, d = e[1] >> t, m = e[2] >> t, p < b ? b = p : p > y && (y = p), d < w ? w = d : d > O && (O = d), m < S ? S = m : m > x && (x = m)
                            }), new i(b, y, w, O, S, x, v)),
                            j = new r(function(t, e) {
                                return n.naturalOrder(t.count(), e.count())
                            });

                        function _(t, r) {
                            for (var i, o = 1, u = 0; u < 1e3;) {
                                if (!(i = t.pop()).count()) {
                                    t.push(i), u++;
                                    continue
                                }
                                var a = function(t, r) {
                                        if (r.count()) {
                                            var i = r.r2 - r.r1 + 1,
                                                o = r.g2 - r.g1 + 1,
                                                u = r.b2 - r.b1 + 1,
                                                a = n.max([i, o, u]);
                                            if (1 == r.count()) return [r.copy()];
                                            var s, c, l, h, f, g = 0,
                                                v = [],
                                                p = [];
                                            if (a == i)
                                                for (s = r.r1; s <= r.r2; s++) {
                                                    for (h = 0, c = r.g1; c <= r.g2; c++)
                                                        for (l = r.b1; l <= r.b2; l++) h += t[f = e(s, c, l)] || 0;
                                                    g += h, v[s] = g
                                                } else if (a == o)
                                                    for (s = r.g1; s <= r.g2; s++) {
                                                        for (h = 0, c = r.r1; c <= r.r2; c++)
                                                            for (l = r.b1; l <= r.b2; l++) h += t[f = e(c, s, l)] || 0;
                                                        g += h, v[s] = g
                                                    } else
                                                        for (s = r.b1; s <= r.b2; s++) {
                                                            for (h = 0, c = r.r1; c <= r.r2; c++)
                                                                for (l = r.g1; l <= r.g2; l++) h += t[f = e(c, l, s)] || 0;
                                                            g += h, v[s] = g
                                                        }
                                            return v.forEach(function(t, e) {
                                                p[e] = g - t
                                            }), d(a == i ? "r" : a == o ? "g" : "b")
                                        }

                                        function d(t) {
                                            var e, n, i, o, u, a = t + "1",
                                                c = t + "2",
                                                l = 0;
                                            for (s = r[a]; s <= r[c]; s++)
                                                if (v[s] > g / 2) {
                                                    for (i = r.copy(), o = r.copy(), e = s - r[a], u = e <= (n = r[c] - s) ? Math.min(r[c] - 1, ~~(s + n / 2)) : Math.max(r[a], ~~(s - 1 - e / 2)); !v[u];) u++;
                                                    for (l = p[u]; !l && v[u - 1];) l = p[--u];
                                                    return i[c] = u, o[a] = i[c] + 1, [i, o]
                                                }
                                        }
                                    }(k, i),
                                    s = a[0],
                                    c = a[1];
                                if (!s) return;
                                if (t.push(s), c && (t.push(c), o++), o >= r || u++ > 1e3) return
                            }
                        }
                        j.push(z), _(j, .75 * a);
                        for (var E = new r(function(t, e) {
                                return n.naturalOrder(t.count() * t.volume(), e.count() * e.volume())
                            }); j.size();) E.push(j.pop());
                        _(E, a - E.size());
                        for (var I = new o; E.size();) I.push(E.pop());
                        return I
                    }
                }
            }();
            t.exports = i.quantize
        },
        48174: function(t, e, r) {
            "use strict";

            function n(t, e) {
                if (t.length !== e.length) return !1;
                for (let r = 0; r < e.length && r < t.length; r++)
                    if (!Object.is(t[r], e[r])) return !1;
                return !0
            }
            r.r(e), r.d(e, {
                default: function() {
                    return n
                }
            })
        },
        775560: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                useForceUpdate: function() {
                    return n.default
                },
                useStableMemo: function() {
                    return i.default
                },
                useLazyValue: function() {
                    return o.default
                }
            });
            var n = r("14716"),
                i = r("745510"),
                o = r("315378")
        },
        14716: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return i
                }
            }), r("222007");
            var n = r("884691");

            function i() {
                let [, t] = (0, n.useState)({});
                return (0, n.useCallback)(() => t({}), [])
            }
        },
        315378: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return o
                }
            });
            var n = r("884691");
            let i = {};

            function o(t) {
                let e = (0, n.useRef)(i);
                return e.current === i && (e.current = t()), e.current
            }
        },
        745510: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return u
                }
            });
            var n = r("884691"),
                i = r("48174");
            let o = [];

            function u(t, e) {
                let r = (0, n.useRef)(),
                    u = (0, n.useRef)(o);
                return u.current === o ? (r.current = t(), u.current = e) : !(0, i.default)(e, u.current) && (r.current = t(), u.current = e), r.current
            }
        },
        136759: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                persist: function() {
                    return l
                }
            }), r("222007");
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            var n = Object.defineProperty,
                i = Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                u = Object.prototype.propertyIsEnumerable,
                a = (t, e, r) => e in t ? n(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                s = (t, e) => {
                    for (var r in e || (e = {})) o.call(e, r) && a(t, r, e[r]);
                    if (i)
                        for (var r of i(e)) u.call(e, r) && a(t, r, e[r]);
                    return t
                };
            let c = t => e => {
                    try {
                        let r = t(e);
                        if (r instanceof Promise) return r;
                        return {
                            then: t => c(t)(r),
                            catch (t) {
                                return this
                            }
                        }
                    } catch (t) {
                        return {
                            then(t) {
                                return this
                            },
                            catch: e => c(e)(t)
                        }
                    }
                },
                l = (t, e) => (r, n, i) => {
                    let o, u, a = s({
                        getStorage: () => localStorage,
                        serialize: JSON.stringify,
                        deserialize: JSON.parse,
                        partialize: t => t,
                        version: 0,
                        merge: (t, e) => s(s({}, e), t)
                    }, e);
                    (a.blacklist || a.whitelist) && console.warn("The ".concat(a.blacklist ? "blacklist" : "whitelist", " option is deprecated and will be removed in the next version. Please use the 'partialize' option instead."));
                    let l = !1,
                        h = new Set,
                        f = new Set;
                    try {
                        o = a.getStorage()
                    } catch (t) {}
                    if (!o) return t(function() {
                        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        console.warn("[zustand persist middleware] Unable to update item '".concat(a.name, "', the given storage is currently unavailable.")), r(...e)
                    }, n, i);
                    !o.removeItem && console.warn("[zustand persist middleware] The given storage for item '".concat(a.name, "' does not contain a 'removeItem' method, which will be required in v4."));
                    let g = c(a.serialize),
                        v = () => {
                            let t;
                            let e = a.partialize(s({}, n()));
                            a.whitelist && Object.keys(e).forEach(t => {
                                var r;
                                (null == (r = a.whitelist) ? void 0 : r.includes(t)) || delete e[t]
                            }), a.blacklist && a.blacklist.forEach(t => delete e[t]);
                            let r = g({
                                state: e,
                                version: a.version
                            }).then(t => o.setItem(a.name, t)).catch(e => {
                                t = e
                            });
                            if (t) throw t;
                            return r
                        },
                        p = i.setState;
                    i.setState = (t, e) => {
                        p(t, e), v()
                    };
                    let d = t(function() {
                            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            r(...e), v()
                        }, n, i),
                        m = () => {
                            var t;
                            if (!o) return;
                            l = !1, h.forEach(t => t(n()));
                            let e = (null == (t = a.onRehydrateStorage) ? void 0 : t.call(a, n())) || void 0;
                            return c(o.getItem.bind(o))(a.name).then(t => {
                                if (t) return a.deserialize(t)
                            }).then(t => {
                                if (t) {
                                    if ("number" != typeof t.version || t.version === a.version) return t.state;
                                    if (a.migrate) return a.migrate(t.state, t.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(t => {
                                var e;
                                return r(u = a.merge(t, null != (e = n()) ? e : d), !0), v()
                            }).then(() => {
                                null == e || e(u, void 0), l = !0, f.forEach(t => t(u))
                            }).catch(t => {
                                null == e || e(void 0, t)
                            })
                        };
                    return i.persist = {
                        setOptions: t => {
                            a = s(s({}, a), t), t.getStorage && (o = t.getStorage())
                        },
                        clearStorage: () => {
                            var t;
                            null == (t = null == o ? void 0 : o.removeItem) || t.call(o, a.name)
                        },
                        rehydrate: () => m(),
                        hasHydrated: () => l,
                        onHydrate: t => (h.add(t), () => {
                            h.delete(t)
                        }),
                        onFinishHydration: t => (f.add(t), () => {
                            f.delete(t)
                        })
                    }, m(), u || d
                }
        },
        506838: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                P: function() {
                    return G
                },
                match: function() {
                    return X
                }
            }), r("222007"), r("424973"), r("70102"), r("808653");
            let n = Symbol.for("@ts-pattern/matcher"),
                i = Symbol.for("@ts-pattern/isVariadic"),
                o = "@ts-pattern/anonymous-select-key",
                u = t => !!(t && "object" == typeof t),
                a = t => t && !!t[n],
                s = (t, e, r) => {
                    if (a(t)) {
                        let i = t[n](),
                            {
                                matched: o,
                                selections: u
                            } = i.match(e);
                        return o && u && Object.keys(u).forEach(t => r(t, u[t])), o
                    }
                    if (u(t)) {
                        if (!u(e)) return !1;
                        if (Array.isArray(t)) {
                            if (!Array.isArray(e)) return !1;
                            let n = [],
                                o = [],
                                u = [];
                            for (let e of t.keys()) {
                                let r = t[e];
                                a(r) && r[i] ? u.push(r) : u.length ? o.push(r) : n.push(r)
                            }
                            if (u.length) {
                                if (u.length > 1) throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                                if (e.length < n.length + o.length) return !1;
                                let t = e.slice(0, n.length),
                                    i = 0 === o.length ? [] : e.slice(-o.length),
                                    a = e.slice(n.length, 0 === o.length ? 1 / 0 : -o.length);
                                return n.every((e, n) => s(e, t[n], r)) && o.every((t, e) => s(t, i[e], r)) && (0 === u.length || s(u[0], a, r))
                            }
                            return t.length === e.length && t.every((t, n) => s(t, e[n], r))
                        }
                        return Object.keys(t).every(i => {
                            let o = t[i];
                            return (i in e || a(o) && "optional" === o[n]().matcherType) && s(o, e[i], r)
                        })
                    }
                    return Object.is(e, t)
                },
                c = t => {
                    var e, r, i;
                    return u(t) ? a(t) ? null != (e = null == (r = (i = t[n]()).getSelectionKeys) ? void 0 : r.call(i)) ? e : [] : Array.isArray(t) ? l(t, c) : l(Object.values(t), c) : []
                },
                l = (t, e) => t.reduce((t, r) => t.concat(e(r)), []);

            function h(t) {
                return Object.assign(t, {
                    optional: () => f(t),
                    and: e => p(t, e),
                    or: e => d(t, e),
                    select: e => void 0 === e ? b(t) : b(e, t)
                })
            }

            function f(t) {
                return h({
                    [n]: () => ({
                        match: e => {
                            let r = {},
                                n = (t, e) => {
                                    r[t] = e
                                };
                            return void 0 === e ? (c(t).forEach(t => n(t, void 0)), {
                                matched: !0,
                                selections: r
                            }) : {
                                matched: s(t, e, n),
                                selections: r
                            }
                        },
                        getSelectionKeys: () => c(t),
                        matcherType: "optional"
                    })
                })
            }
            let g = (t, e) => {
                    for (let r of t)
                        if (!e(r)) return !1;
                    return !0
                },
                v = (t, e) => {
                    for (let [r, n] of t.entries())
                        if (!e(n, r)) return !1;
                    return !0
                };

            function p() {
                for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return h({
                    [n]: () => ({
                        match: t => {
                            let r = {},
                                n = (t, e) => {
                                    r[t] = e
                                };
                            return {
                                matched: e.every(e => s(e, t, n)),
                                selections: r
                            }
                        },
                        getSelectionKeys: () => l(e, c),
                        matcherType: "and"
                    })
                })
            }

            function d() {
                for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return h({
                    [n]: () => ({
                        match: t => {
                            let r = {},
                                n = (t, e) => {
                                    r[t] = e
                                };
                            return l(e, c).forEach(t => n(t, void 0)), {
                                matched: e.some(e => s(e, t, n)),
                                selections: r
                            }
                        },
                        getSelectionKeys: () => l(e, c),
                        matcherType: "or"
                    })
                })
            }

            function m(t) {
                return {
                    [n]: () => ({
                        match: e => ({
                            matched: !!t(e)
                        })
                    })
                }
            }

            function b() {
                for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                let i = "string" == typeof e[0] ? e[0] : void 0,
                    u = 2 === e.length ? e[1] : "string" == typeof e[0] ? void 0 : e[0];
                return h({
                    [n]: () => ({
                        match: t => {
                            let e = {
                                [null != i ? i : o]: t
                            };
                            return {
                                matched: void 0 === u || s(u, t, (t, r) => {
                                    e[t] = r
                                }),
                                selections: e
                            }
                        },
                        getSelectionKeys: () => [null != i ? i : o].concat(void 0 === u ? [] : c(u))
                    })
                })
            }

            function y(t) {
                return "number" == typeof t
            }

            function w(t) {
                return "string" == typeof t
            }

            function O(t) {
                return "bigint" == typeof t
            }
            let S = h(m(function(t) {
                    return !0
                })),
                x = t => Object.assign(h(t), {
                    startsWith: e => x(p(t, m(t => w(t) && t.startsWith(e)))),
                    endsWith: e => x(p(t, m(t => w(t) && t.endsWith(e)))),
                    minLength: e => {
                        var r;
                        return x(p(t, (r = e, m(t => w(t) && t.length >= r))))
                    },
                    maxLength: e => {
                        var r;
                        return x(p(t, (r = e, m(t => w(t) && t.length <= r))))
                    },
                    includes: e => x(p(t, m(t => w(t) && t.includes(e)))),
                    regex: e => x(p(t, m(t => w(t) && !!t.match(e))))
                }),
                k = x(m(w)),
                A = (t, e) => m(r => y(r) && t <= r && e >= r),
                z = t => m(e => y(e) && e < t),
                j = t => m(e => y(e) && e > t),
                _ = t => m(e => y(e) && e <= t),
                E = t => m(e => y(e) && e >= t),
                I = () => m(t => y(t) && Number.isInteger(t)),
                P = () => m(t => y(t) && Number.isFinite(t)),
                M = () => m(t => y(t) && t > 0),
                K = () => m(t => y(t) && t < 0),
                T = t => Object.assign(h(t), {
                    between: (e, r) => T(p(t, A(e, r))),
                    lt: e => T(p(t, z(e))),
                    gt: e => T(p(t, j(e))),
                    lte: e => T(p(t, _(e))),
                    gte: e => T(p(t, E(e))),
                    int: () => T(p(t, I())),
                    finite: () => T(p(t, P())),
                    positive: () => T(p(t, M())),
                    negative: () => T(p(t, K()))
                }),
                B = T(m(y)),
                C = (t, e) => m(r => O(r) && t <= r && e >= r),
                N = t => m(e => O(e) && e < t),
                q = t => m(e => O(e) && e > t),
                R = t => m(e => O(e) && e <= t),
                W = t => m(e => O(e) && e >= t),
                F = () => m(t => O(t) && t > 0),
                H = () => m(t => O(t) && t < 0),
                J = t => Object.assign(h(t), {
                    between: (e, r) => J(p(t, C(e, r))),
                    lt: e => J(p(t, N(e))),
                    gt: e => J(p(t, q(e))),
                    lte: e => J(p(t, R(e))),
                    gte: e => J(p(t, W(e))),
                    positive: () => J(p(t, F())),
                    negative: () => J(p(t, H()))
                }),
                L = J(m(O)),
                U = h(m(function(t) {
                    return "boolean" == typeof t
                })),
                V = h(m(function(t) {
                    return "symbol" == typeof t
                })),
                D = h(m(function(t) {
                    return null == t
                }));
            var G = {
                __proto__: null,
                matcher: n,
                optional: f,
                array: function() {
                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    return function t(e) {
                        var r;
                        return Object.assign((r = e, Object.assign(r, {
                            *[Symbol.iterator]() {
                                yield Object.assign(r, {
                                    [i]: !0
                                })
                            }
                        })), {
                            optional: () => t(f(e)),
                            select: r => t(void 0 === r ? b(e) : b(r, e))
                        })
                    }({
                        [n]: () => ({
                            match: t => {
                                if (!Array.isArray(t)) return {
                                    matched: !1
                                };
                                if (0 === e.length) return {
                                    matched: !0
                                };
                                let r = e[0],
                                    n = {};
                                if (0 === t.length) return c(r).forEach(t => {
                                    n[t] = []
                                }), {
                                    matched: !0,
                                    selections: n
                                };
                                let i = (t, e) => {
                                    n[t] = (n[t] || []).concat([e])
                                };
                                return {
                                    matched: t.every(t => s(r, t, i)),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : c(e[0])
                        })
                    })
                },
                set: function() {
                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    return h({
                        [n]: () => ({
                            match: t => {
                                if (!(t instanceof Set)) return {
                                    matched: !1
                                };
                                let r = {};
                                if (0 === t.size) return {
                                    matched: !0,
                                    selections: r
                                };
                                if (0 === e.length) return {
                                    matched: !0
                                };
                                let n = (t, e) => {
                                        r[t] = (r[t] || []).concat([e])
                                    },
                                    i = e[0];
                                return {
                                    matched: g(t, t => s(i, t, n)),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : c(e[0])
                        })
                    })
                },
                map: function() {
                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    return h({
                        [n]: () => ({
                            match: t => {
                                var r;
                                if (!(t instanceof Map)) return {
                                    matched: !1
                                };
                                let n = {};
                                if (0 === t.size) return {
                                    matched: !0,
                                    selections: n
                                };
                                let i = (t, e) => {
                                    n[t] = (n[t] || []).concat([e])
                                };
                                if (0 === e.length) return {
                                    matched: !0
                                };
                                if (1 === e.length) throw Error("`P.map` wasn't given enough arguments. Expected (key, value), received ".concat(null == (r = e[0]) ? void 0 : r.toString()));
                                let [o, u] = e;
                                return {
                                    matched: v(t, (t, e) => {
                                        let r = s(o, e, i),
                                            n = s(u, t, i);
                                        return r && n
                                    }),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : [...c(e[0]), ...c(e[1])]
                        })
                    })
                },
                intersection: p,
                union: d,
                not: function(t) {
                    return h({
                        [n]: () => ({
                            match: e => ({
                                matched: !s(t, e, () => {})
                            }),
                            getSelectionKeys: () => [],
                            matcherType: "not"
                        })
                    })
                },
                when: m,
                select: b,
                any: S,
                _: S,
                string: k,
                between: A,
                lt: z,
                gt: j,
                lte: _,
                gte: E,
                int: I,
                finite: P,
                positive: M,
                negative: K,
                number: B,
                betweenBigInt: C,
                ltBigInt: N,
                gtBigInt: q,
                lteBigInt: R,
                gteBigInt: W,
                positiveBigInt: F,
                negativeBigInt: H,
                bigint: L,
                boolean: U,
                symbol: V,
                nullish: D,
                instanceOf: function(t) {
                    var e;
                    return h(m((e = t, t => t instanceof e)))
                },
                shape: function(t) {
                    return h(m(function() {
                        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                        if (1 === e.length) {
                            let [t] = e;
                            return e => s(t, e, () => {})
                        }
                        if (2 === e.length) {
                            let [t, r] = e;
                            return s(t, r, () => {})
                        }
                        throw Error("isMatching wasn't given the right number of arguments: expected 1 or 2, received ".concat(e.length, "."))
                    }(t)))
                }
            };
            let Q = {
                matched: !1,
                value: void 0
            };

            function X(t) {
                return new Y(t, Q)
            }
            class Y {
                with() {
                    let t;
                    for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                    if (this.state.matched) return this;
                    let i = r[r.length - 1],
                        u = [r[0]];
                    3 === r.length && "function" == typeof r[1] ? (u.push(r[0]), t = r[1]) : r.length > 2 && u.push(...r.slice(1, r.length - 1));
                    let a = !1,
                        c = {},
                        l = (t, e) => {
                            a = !0, c[t] = e
                        },
                        h = u.some(t => s(t, this.input, l)) && (!t || t(this.input)) ? {
                            matched: !0,
                            value: i(a ? o in c ? c[o] : c : this.input, this.input)
                        } : Q;
                    return new Y(this.input, h)
                }
                when(t, e) {
                    if (this.state.matched) return this;
                    let r = !!t(this.input);
                    return new Y(this.input, r ? {
                        matched: !0,
                        value: e(this.input, this.input)
                    } : Q)
                }
                otherwise(t) {
                    return this.state.matched ? this.state.value : t(this.input)
                }
                exhaustive() {
                    return this.run()
                }
                run() {
                    let t;
                    if (this.state.matched) return this.state.value;
                    try {
                        t = JSON.stringify(this.input)
                    } catch (e) {
                        t = this.input
                    }
                    throw Error("Pattern matching error: no pattern matches value ".concat(t))
                }
                returnType() {
                    return this
                }
                constructor(t, e) {
                    this.input = void 0, this.state = void 0, this.input = t, this.state = e
                }
            }
        }
    }
]);