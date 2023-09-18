(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [63230, 96043], {
        55146: (t, e, n) => {
            t.exports = n.p + "608f64b01193073a0148ebd815d86784.webm"
        },
        485618: (t, e, n) => {
            t.exports = n.p + "ac85024be0ac6a35c59ceff448502169.webm"
        },
        745920: (t, e, n) => {
            t.exports = n.p + "2d889bf9114df188325d15f9e517c325.mov"
        },
        161693: (t, e, n) => {
            t.exports = n.p + "6d5b64b094944af6d52d895c8c2b8a59.mp4"
        },
        28743: (t, e, n) => {
            t.exports = n.p + "dff87c953f43b561d71fbcfe8a93a79a.png"
        },
        106632: (t, e, n) => {
            t.exports = n.p + "3b0d96ed8113994f3d139088726cfecd.webm"
        },
        894919: (t, e, n) => {
            t.exports = n.p + "d44a33e33f751afe9a0e5e42e2156d8f.mov"
        },
        858739: (t, e, n) => {
            t.exports = n.p + "90c2f45413660019fa25f4f9f40ecb5d.mp4"
        },
        172129: (t, e, n) => {
            t.exports = n.p + "61c5375ee8d8dbf35c109b06044394d8.png"
        },
        243874: (t, e, n) => {
            t.exports = n.p + "1eae6aab9a6b4e7da646db415479560b.webm"
        },
        665369: (t, e, n) => {
            t.exports = n.p + "214ec30d4b1191df4e04a35063e5d9e6.mov"
        },
        537020: (t, e, n) => {
            t.exports = n.p + "56dfe2d14c375037f02ae2144856c939.webm"
        },
        978476: (t, e, n) => {
            t.exports = n.p + "98808f8535c2ac6947658982e27e6e1e.mov"
        },
        88070: (t, e, n) => {
            t.exports = n.p + "49b63c2ef79b40545d891bde041934b4.webm"
        },
        753074: t => {
            "use strict";
            var e = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                n = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                r = "function" == typeof Object.getOwnPropertySymbols;
            t.exports = function(t, i, o) {
                if ("string" != typeof i) {
                    var u = Object.getOwnPropertyNames(i);
                    r && (u = u.concat(Object.getOwnPropertySymbols(i)));
                    for (var a = 0; a < u.length; ++a)
                        if (!(e[u[a]] || n[u[a]] || o && o[u[a]])) try {
                            t[u[a]] = i[u[a]]
                        } catch (t) {}
                }
                return t
            }
        },
        16243: t => {
            if (!e) var e = {
                map: function(t, e) {
                    var n = {};
                    return e ? t.map((function(t, r) {
                        n.index = r;
                        return e.call(n, t)
                    })) : t.slice()
                },
                naturalOrder: function(t, e) {
                    return t < e ? -1 : t > e ? 1 : 0
                },
                sum: function(t, e) {
                    var n = {};
                    return t.reduce(e ? function(t, r, i) {
                        n.index = i;
                        return t + e.call(n, r)
                    } : function(t, e) {
                        return t + e
                    }, 0)
                },
                max: function(t, n) {
                    return Math.max.apply(null, n ? e.map(t, n) : t)
                }
            };
            var n = function() {
                function t(t, e, n) {
                    return (t << 10) + (e << 5) + n
                }

                function n(t) {
                    var e = [],
                        n = !1;

                    function r() {
                        e.sort(t);
                        n = !0
                    }
                    return {
                        push: function(t) {
                            e.push(t);
                            n = !1
                        },
                        peek: function(t) {
                            n || r();
                            void 0 === t && (t = e.length - 1);
                            return e[t]
                        },
                        pop: function() {
                            n || r();
                            return e.pop()
                        },
                        size: function() {
                            return e.length
                        },
                        map: function(t) {
                            return e.map(t)
                        },
                        debug: function() {
                            n || r();
                            return e
                        }
                    }
                }

                function r(t, e, n, r, i, o, u) {
                    var a = this;
                    a.r1 = t;
                    a.r2 = e;
                    a.g1 = n;
                    a.g2 = r;
                    a.b1 = i;
                    a.b2 = o;
                    a.histo = u
                }
                r.prototype = {
                    volume: function(t) {
                        var e = this;
                        e._volume && !t || (e._volume = (e.r2 - e.r1 + 1) * (e.g2 - e.g1 + 1) * (e.b2 - e.b1 + 1));
                        return e._volume
                    },
                    count: function(e) {
                        var n = this,
                            r = n.histo;
                        if (!n._count_set || e) {
                            var i, o, u, a = 0;
                            for (i = n.r1; i <= n.r2; i++)
                                for (o = n.g1; o <= n.g2; o++)
                                    for (u = n.b1; u <= n.b2; u++) a += r[t(i, o, u)] || 0;
                            n._count = a;
                            n._count_set = !0
                        }
                        return n._count
                    },
                    copy: function() {
                        var t = this;
                        return new r(t.r1, t.r2, t.g1, t.g2, t.b1, t.b2, t.histo)
                    },
                    avg: function(e) {
                        var n = this,
                            r = n.histo;
                        if (!n._avg || e) {
                            var i, o, u, a, c = 0,
                                l = 0,
                                s = 0,
                                f = 0;
                            for (o = n.r1; o <= n.r2; o++)
                                for (u = n.g1; u <= n.g2; u++)
                                    for (a = n.b1; a <= n.b2; a++) {
                                        c += i = r[t(o, u, a)] || 0;
                                        l += i * (o + .5) * 8;
                                        s += i * (u + .5) * 8;
                                        f += i * (a + .5) * 8
                                    }
                            n._avg = c ? [~~(l / c), ~~(s / c), ~~(f / c)] : [~~(8 * (n.r1 + n.r2 + 1) / 2), ~~(8 * (n.g1 + n.g2 + 1) / 2), ~~(8 * (n.b1 + n.b2 + 1) / 2)]
                        }
                        return n._avg
                    },
                    contains: function(t) {
                        var e = this,
                            n = t[0] >> 3;
                        gval = t[1] >> 3;
                        bval = t[2] >> 3;
                        return n >= e.r1 && n <= e.r2 && gval >= e.g1 && gval <= e.g2 && bval >= e.b1 && bval <= e.b2
                    }
                };

                function i() {
                    this.vboxes = new n((function(t, n) {
                        return e.naturalOrder(t.vbox.count() * t.vbox.volume(), n.vbox.count() * n.vbox.volume())
                    }))
                }
                i.prototype = {
                    push: function(t) {
                        this.vboxes.push({
                            vbox: t,
                            color: t.avg()
                        })
                    },
                    palette: function() {
                        return this.vboxes.map((function(t) {
                            return t.color
                        }))
                    },
                    size: function() {
                        return this.vboxes.size()
                    },
                    map: function(t) {
                        for (var e = this.vboxes, n = 0; n < e.size(); n++)
                            if (e.peek(n).vbox.contains(t)) return e.peek(n).color;
                        return this.nearest(t)
                    },
                    nearest: function(t) {
                        for (var e, n, r, i = this.vboxes, o = 0; o < i.size(); o++)
                            if ((n = Math.sqrt(Math.pow(t[0] - i.peek(o).color[0], 2) + Math.pow(t[1] - i.peek(o).color[1], 2) + Math.pow(t[2] - i.peek(o).color[2], 2))) < e || void 0 === e) {
                                e = n;
                                r = i.peek(o).color
                            } return r
                    },
                    forcebw: function() {
                        var t = this.vboxes;
                        t.sort((function(t, n) {
                            return e.naturalOrder(e.sum(t.color), e.sum(n.color))
                        }));
                        var n = t[0].color;
                        n[0] < 5 && n[1] < 5 && n[2] < 5 && (t[0].color = [0, 0, 0]);
                        var r = t.length - 1,
                            i = t[r].color;
                        i[0] > 251 && i[1] > 251 && i[2] > 251 && (t[r].color = [255, 255, 255])
                    }
                };

                function o(n, r) {
                    if (r.count()) {
                        var i = r.r2 - r.r1 + 1,
                            o = r.g2 - r.g1 + 1,
                            u = r.b2 - r.b1 + 1,
                            a = e.max([i, o, u]);
                        if (1 == r.count()) return [r.copy()];
                        var c, l, s, f, d = 0,
                            p = [],
                            v = [];
                        if (a == i)
                            for (c = r.r1; c <= r.r2; c++) {
                                f = 0;
                                for (l = r.g1; l <= r.g2; l++)
                                    for (s = r.b1; s <= r.b2; s++) f += n[t(c, l, s)] || 0;
                                d += f;
                                p[c] = d
                            } else if (a == o)
                                for (c = r.g1; c <= r.g2; c++) {
                                    f = 0;
                                    for (l = r.r1; l <= r.r2; l++)
                                        for (s = r.b1; s <= r.b2; s++) f += n[t(l, c, s)] || 0;
                                    d += f;
                                    p[c] = d
                                } else
                                    for (c = r.b1; c <= r.b2; c++) {
                                        f = 0;
                                        for (l = r.r1; l <= r.r2; l++)
                                            for (s = r.g1; s <= r.g2; s++) f += n[t(l, s, c)] || 0;
                                        d += f;
                                        p[c] = d
                                    }
                        p.forEach((function(t, e) {
                            v[e] = d - t
                        }));
                        return h(a == i ? "r" : a == o ? "g" : "b")
                    }

                    function h(t) {
                        var e, n, i, o, u, a = t + "1",
                            l = t + "2",
                            s = 0;
                        for (c = r[a]; c <= r[l]; c++)
                            if (p[c] > d / 2) {
                                i = r.copy();
                                o = r.copy();
                                u = (e = c - r[a]) <= (n = r[l] - c) ? Math.min(r[l] - 1, ~~(c + n / 2)) : Math.max(r[a], ~~(c - 1 - e / 2));
                                for (; !p[u];) u++;
                                s = v[u];
                                for (; !s && p[u - 1];) s = v[--u];
                                i[l] = u;
                                o[a] = i[l] + 1;
                                return [i, o]
                            }
                    }
                }
                return {
                    quantize: function(u, a) {
                        if (!u.length || a < 2 || a > 256) return !1;
                        var c = function(e) {
                            var n, r, i, o, u = new Array(32768);
                            e.forEach((function(e) {
                                r = e[0] >> 3;
                                i = e[1] >> 3;
                                o = e[2] >> 3;
                                n = t(r, i, o);
                                u[n] = (u[n] || 0) + 1
                            }));
                            return u
                        }(u);
                        c.forEach((function() {
                            0
                        }));
                        var l = function(t, e) {
                                var n, i, o, u = 1e6,
                                    a = 0,
                                    c = 1e6,
                                    l = 0,
                                    s = 1e6,
                                    f = 0;
                                t.forEach((function(t) {
                                    n = t[0] >> 3;
                                    i = t[1] >> 3;
                                    o = t[2] >> 3;
                                    n < u ? u = n : n > a && (a = n);
                                    i < c ? c = i : i > l && (l = i);
                                    o < s ? s = o : o > f && (f = o)
                                }));
                                return new r(u, a, c, l, s, f, e)
                            }(u, c),
                            s = new n((function(t, n) {
                                return e.naturalOrder(t.count(), n.count())
                            }));
                        s.push(l);

                        function f(t, e) {
                            for (var n, r = 1, i = 0; i < 1e3;)
                                if ((n = t.pop()).count()) {
                                    var u = o(c, n),
                                        a = u[0],
                                        l = u[1];
                                    if (!a) return;
                                    t.push(a);
                                    if (l) {
                                        t.push(l);
                                        r++
                                    }
                                    if (r >= e) return;
                                    if (i++ > 1e3) return
                                } else {
                                    t.push(n);
                                    i++
                                }
                        }
                        f(s, .75 * a);
                        for (var d = new n((function(t, n) {
                                return e.naturalOrder(t.count() * t.volume(), n.count() * n.volume())
                            })); s.size();) d.push(s.pop());
                        f(d, a - d.size());
                        for (var p = new i; d.size();) p.push(d.pop());
                        return p
                    }
                }
            }();
            t.exports = n.quantize
        },
        810978: (t, e, n) => {
            "use strict";
            n.d(e, {
                GZ: () => v,
                Gn: () => O,
                Y2: () => m,
                mE: () => y
            });
            var r = n(281110),
                i = n(744564),
                o = n(973889),
                u = n(615796),
                a = n(264628),
                c = n(673679),
                l = n(2590),
                s = n(203600);

            function f(t, e, n, r, i, o, u) {
                try {
                    var a = t[o](u),
                        c = a.value
                } catch (t) {
                    n(t);
                    return
                }
                a.done ? e(c) : Promise.resolve(c).then(r, i)
            }

            function d(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = t.apply(e, n);

                        function u(t) {
                            f(o, r, i, u, a, "next", t)
                        }

                        function a(t) {
                            f(o, r, i, u, a, "throw", t)
                        }
                        u(void 0)
                    }))
                }
            }
            var p = function(t, e) {
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
                                o = e.call(t, u)
                            } catch (t) {
                                o = [6, t];
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

            function v(t, e, n, r, i) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = d((function(t, e, n, s, f) {
                    var d, v, h, O;
                    return p(this, (function(p) {
                        switch (p.label) {
                            case 0:
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH",
                                    skuId: t
                                });
                                p.label = 1;
                            case 1:
                                p.trys.push([1, 5, , 6]);
                                d = {
                                    url: l.ANM.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(t),
                                    oldFormErrors: !0
                                };
                                v = {};
                                null != e && (v.country_code = e);
                                null != n && (v.payment_source_id = n);
                                null != s && (v.include_unpublished = s);
                                null != f && (v.revenue_surface = f);
                                d.query = v;
                                return u.Z.ipCountryCodeLoaded ? [3, 3] : [4, (0, c.GE)()];
                            case 2:
                                p.sent();
                                p.label = 3;
                            case 3:
                                return [4, r.ZP.get(d)];
                            case 4:
                                h = p.sent();
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                                    skuId: t,
                                    subscriptionPlans: h.body
                                });
                                return [3, 6];
                            case 5:
                                O = p.sent();
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                                    skuId: t
                                });
                                (0, a.q2)(O);
                                throw new o.Z(O);
                            case 6:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function O(t, e) {
                return Promise.all(t.filter((function(t) {
                    return t !== s.Si.NONE
                })).map((function(t) {
                    return v(t, e)
                })))
            }

            function m(t, e, n) {
                return Promise.all(s.YQ.filter((function(t) {
                    return t !== s.Si.NONE
                })).map((function(r) {
                    return v(r, t, e, void 0, n)
                })))
            }

            function y() {
                i.Z.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        973889: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => f
            });
            var r = n(281110),
                i = n(2590),
                o = n(473708);

            function u(t) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return u(t)
            }

            function a(t, e) {
                return !e || "object" !== l(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function c(t, e) {
                c = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return c(t, e)
            }
            var l = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function s(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = u(t);
                    if (e) {
                        var i = u(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return a(this, n)
                }
            }
            var f = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && c(t, e)
                }(n, t);
                var e = s(n);

                function n(t, r) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    return e.call(this, t, r, o.Z.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: i.yXt.STATUS
                    }))
                }
                return n
            }(r.ZP.V6OrEarlierAPIError)
        },
        83797: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => i
            });
            var r = n(2590);

            function i(t) {
                return null != t && t.type !== r.IIU.CUSTOM_STATUS && (null != t.details || null != t.assets && (null != t.assets.large_image || null != t.assets.small_text) || null != t.party || null != t.secrets || null != t.state)
            }
        },
        396043: (t, e, n) => {
            "use strict";
            n.d(e, {
                v_: () => L,
                JS: () => j,
                hH: () => w,
                AB: () => x,
                ZP: () => F,
                oG: () => M,
                kO: () => U,
                yw: () => A
            });
            var r = n(496486),
                i = n.n(r),
                o = n(940060),
                u = n(382060),
                a = n(664625),
                c = n(61209),
                l = n(5544),
                s = n(27851),
                f = n(21372),
                d = n(567403),
                p = n(525077),
                v = n(682776),
                h = n(491260),
                O = n(563367),
                m = n(715107),
                y = n(464187),
                b = n(407561),
                g = n(652591),
                S = n(563135),
                _ = n(671723);
            var E = n(2590),
                I = n(897196);

            function T(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function N(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        T(t, e, n[e])
                    }))
                }
                return t
            }

            function P(t) {
                var e = 0;
                for (var n in t) e += 1;
                return e
            }

            function w(t) {
                if (null == t) return null;
                var e = d.Z.getGuild(t);
                if (null == e) return null;
                var n, r = a.default.getId(),
                    i = f.ZP.getMember(t, r),
                    o = l.ZP.getChannels(t),
                    u = o[l.sH].length,
                    c = o[l.Zb].length,
                    p = b.Z.getVoiceStates(t);
                return {
                    guild_id: e.id,
                    guild_size_total: s.Z.getMemberCount(t),
                    guild_num_channels: u + c,
                    guild_num_text_channels: u,
                    guild_num_voice_channels: c,
                    guild_num_roles: P(e.roles),
                    guild_member_num_roles: null != i ? i.roles.length : 0,
                    guild_member_perms: String(null !== (n = v.Z.getGuildPermissions(e)) && void 0 !== n ? n : S.ZP.NONE),
                    guild_is_vip: e.hasFeature(E.oNc.VIP_REGIONS),
                    is_member: null != i,
                    num_voice_channels_active: P(p)
                }
            }

            function R(t, e) {
                return {
                    channel_static_route: e,
                    channel_hidden: !1
                }
            }

            function j(t) {
                if (null == t) return null;
                var e = c.Z.getChannel(t);
                return null == e ? null : L(e)
            }

            function L(t) {
                if (null == t) return null;
                var e, n = !1,
                    r = t.getGuildId();
                if (null != r) {
                    var i = function(t) {
                        if (null == t) return !1;
                        var e = t.permissionOverwrites[r];
                        return null != e && o.Z.has(e.deny, E.Plq.VIEW_CHANNEL)
                    };
                    n = u.Ec.has(t.type) && null != t.parent_id ? i(c.Z.getChannel(t.parent_id)) : i(t)
                }
                return {
                    channel_id: t.id,
                    channel_type: t.type,
                    channel_size_total: t.isPrivate() ? t.recipients.length : 0,
                    channel_member_perms: String(null != r && null !== (e = v.Z.getChannelPermissions(t)) && void 0 !== e ? e : S.ZP.NONE),
                    channel_hidden: n
                }
            }

            function x(t) {
                if (null == t) return null;
                var e = c.Z.getChannel(t);
                if (null == e) return null;
                var n, r = p.Z.isVideoEnabled(),
                    i = O.Z.getMediaSessionId();
                return N({
                    channel_id: e.id,
                    channel_type: e.type,
                    guild_id: e.getGuildId(),
                    media_session_id: i
                }, U(e.getGuildId(), e.id, r), {
                    game_name: null != (n = _.ZP.getCurrentGameForAnalytics()) ? n.name : null,
                    game_id: null != n ? n.id : null
                })
            }

            function C(t, e) {
                return null == t ? null != e ? e : null : t.isPrivate() ? null : null !== (r = null !== (n = t.getGuildId()) && void 0 !== n ? n : e) && void 0 !== r ? r : null;
                var n, r
            }

            function A(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!g.default.isThrottled(t)) {
                    var r = !("location" in e) || e.location !== E.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        i = "guild_id" in e ? e.guild_id : r ? y.Z.getGuildId() : null,
                        o = "channel_id" in e ? e.channel_id : r ? m.Z.getChannelId(i) : null,
                        u = c.Z.getChannel(o),
                        a = C(u, i),
                        l = N({}, e, w(a), null != i && null != o && (0, I.AB)(o) ? R(0, o) : L(u));
                    g.default.track(t, l, {
                        flush: n
                    })
                }
            }

            function U(t, e, n) {
                var r = {
                    voice_state_count: 0,
                    video_stream_count: 0,
                    video_enabled: n
                };
                i()(b.Z.getVoiceStates(t)).filter((function(t) {
                    return t.channelId === e
                })).filter((function(t) {
                    return t.userId !== a.default.getId()
                })).forEach((function(t) {
                    r.voice_state_count++;
                    (t.selfVideo || t.selfStream) && r.video_stream_count++
                }));
                return r
            }

            function M(t, e) {
                var n = {
                    custom_status_count: 0
                };
                i()(b.Z.getVoiceStates(t)).forEach((function(t) {
                    t.channelId === e && null != h.Z.findActivity(t.userId, (function(t) {
                        return t.type === E.IIU.CUSTOM_STATUS
                    })) && n.custom_status_count++
                }));
                return n
            }
            const F = {
                trackWithMetadata: A,
                getVoiceStateMetadata: U
            }
        },
        165586: (t, e, n) => {
            "use strict";
            n.d(e, {
                LY: () => r,
                aW: () => f,
                ws: () => i,
                tI: () => o,
                L9: () => d,
                no: () => p,
                ND: () => v,
                WC: () => O,
                z8: () => m,
                km: () => b,
                k0: () => g,
                af: () => S
            });
            var r, i, o, u, a = n(2590),
                c = n(203600),
                l = n(473708);

            function s(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }! function(t) {
                t[t.RESOLUTION_480 = 480] = "RESOLUTION_480";
                t[t.RESOLUTION_720 = 720] = "RESOLUTION_720";
                t[t.RESOLUTION_1080 = 1080] = "RESOLUTION_1080";
                t[t.RESOLUTION_1440 = 1440] = "RESOLUTION_1440";
                t[t.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE"
            }(r || (r = {}));

            function f(t) {
                switch (t) {
                    case r.RESOLUTION_480:
                        return r.RESOLUTION_480;
                    case r.RESOLUTION_720:
                        return r.RESOLUTION_720;
                    case r.RESOLUTION_1080:
                        return r.RESOLUTION_1080;
                    case r.RESOLUTION_SOURCE:
                        return r.RESOLUTION_SOURCE;
                    default:
                        throw new Error("Unknown resolution: ".concat(t))
                }
            }! function(t) {
                t[t.FPS_5 = 5] = "FPS_5";
                t[t.FPS_15 = 15] = "FPS_15";
                t[t.FPS_30 = 30] = "FPS_30";
                t[t.FPS_60 = 60] = "FPS_60"
            }(i || (i = {}));
            ! function(t) {
                t[t.PRESET_VIDEO = 1] = "PRESET_VIDEO";
                t[t.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS";
                t[t.PRESET_CUSTOM = 3] = "PRESET_CUSTOM"
            }(o || (o = {}));

            function d(t) {
                switch (t) {
                    case i.FPS_5:
                        return i.FPS_5;
                    case i.FPS_15:
                        return i.FPS_15;
                    case i.FPS_30:
                        return i.FPS_30;
                    case i.FPS_60:
                        return i.FPS_60;
                    default:
                        throw new Error("Unknown frame rate: ".concat(t))
                }
            }
            var p = (s(u = {}, o.PRESET_DOCUMENTS, [{
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
                v = [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_60,
                    quality: c.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_30,
                    quality: c.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_15,
                    quality: c.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_5,
                    preset: o.PRESET_DOCUMENTS
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_30,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_15,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_30,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_15,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_1,
                    quality: c.ys.MID_STREAMING_QUALITY
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
                    quality: c.ys.MID_STREAMING_QUALITY
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

            function h(t, e) {
                return {
                    value: t,
                    get label() {
                        return null != e ? e() : t
                    }
                }
            }
            var O = [h(r.RESOLUTION_720), h(r.RESOLUTION_1080), h(r.RESOLUTION_1440), h(r.RESOLUTION_SOURCE, (function() {
                    return l.Z.Messages.SCREENSHARE_SOURCE
                }))],
                m = [h(r.RESOLUTION_720), h(r.RESOLUTION_1080), h(r.RESOLUTION_1440)],
                y = function(t) {
                    return "".concat(t, "p")
                },
                b = [h(r.RESOLUTION_480, (function() {
                    return y(r.RESOLUTION_480)
                })), h(r.RESOLUTION_720, (function() {
                    return y(r.RESOLUTION_720)
                })), h(r.RESOLUTION_1080, (function() {
                    return y(r.RESOLUTION_1080)
                })), h(r.RESOLUTION_1440, (function() {
                    return y(r.RESOLUTION_1440)
                })), h(r.RESOLUTION_SOURCE, (function() {
                    return l.Z.Messages.SCREENSHARE_SOURCE
                }))],
                g = [h(i.FPS_15), h(i.FPS_30), h(i.FPS_60)],
                S = [h(i.FPS_15, (function() {
                    return l.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_15
                    })
                })), h(i.FPS_30, (function() {
                    return l.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_30
                    })
                })), h(i.FPS_60, (function() {
                    return l.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_60
                    })
                }))]
        },
        491260: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => G
            });
            var r = n(110251),
                i = n.n(r),
                o = n(496486),
                u = n.n(o),
                a = n(202351),
                c = n(744564),
                l = n(83797),
                s = n(664625),
                f = n(473903),
                d = n(2590);

            function p(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function v(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function h(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function O(t) {
                O = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return O(t)
            }

            function m(t, e) {
                return !e || "object" !== S(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function y(t, e) {
                y = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return y(t, e)
            }

            function b(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (e && o.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            i = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(t, e) || _(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(t) {
                return function(t) {
                    if (Array.isArray(t)) return p(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || _(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var S = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function _(t, e) {
                if (t) {
                    if ("string" == typeof t) return p(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(t, e) : void 0
                }
            }

            function E(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = O(t);
                    if (e) {
                        var i = O(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return m(this, n)
                }
            }
            var I = Object.freeze([]),
                T = {},
                N = {},
                P = {},
                w = {},
                R = {};

            function j(t, e) {
                var n = T[t];
                return null != n ? n[e] : null
            }
            var L = function(t) {
                switch (t.type) {
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
            var x = function(t) {
                return (0, l.Z)(t) ? 1 : 0
            };

            function C(t, e) {
                return function(t, e) {
                    return L(e) - L(t)
                }(t, e) || function(t, e) {
                    return x(e) - x(t)
                }(t, e) || function(t, e) {
                    var n, r;
                    return (null !== (n = e.created_at) && void 0 !== n ? n : 0) - (null !== (r = t.created_at) && void 0 !== r ? r : 0)
                }(t, e)
            }

            function A(t) {
                delete N[t];
                delete P[t];
                delete w[t];
                if (null != T[t]) {
                    var e = b(u().sortBy(T[t], (function(t) {
                            return -t.timestamp
                        })), 1),
                        n = e[0];
                    if (n.status !== d.Skl.OFFLINE) {
                        N[t] = n.status;
                        P[t] = n.activities;
                        null != n.clientStatus && (w[t] = n.clientStatus)
                    } else u().every(T[t], (function(t) {
                        return t.status === d.Skl.OFFLINE
                    })) && delete T[t]
                }
            }

            function U(t) {
                var e = T[t];
                if (null != e) {
                    var n = u().maxBy(Object.values(e), (function(t) {
                        return t.timestamp
                    }));
                    if (n.status !== d.Skl.OFFLINE) {
                        N[t] = n.status;
                        P[t] = n.activities;
                        null != n.clientStatus && (w[t] = n.clientStatus)
                    }
                }
            }

            function M(t) {
                var e = t.guildId,
                    n = t.userId,
                    r = t.status,
                    o = t.clientStatus,
                    u = t.activities;
                if (n === s.default.getId()) return !1;
                var a = T[n];
                if (null == a) {
                    if (r === d.Skl.OFFLINE) return !1;
                    a = T[n] = {}
                }
                if (r === d.Skl.OFFLINE) a[e] = {
                    status: r,
                    clientStatus: o,
                    activities: I,
                    timestamp: Date.now()
                };
                else {
                    var c = u.length > 1 ? g(u).sort(C) : u,
                        l = a[e];
                    u = null != l && i()(l.activities, c) ? l.activities : c;
                    a[e] = {
                        status: r,
                        clientStatus: o,
                        activities: u,
                        timestamp: Date.now()
                    }
                }
                delete R[n];
                A(n);
                return !0
            }

            function F(t) {
                var e = t.guildId,
                    n = t.userId,
                    r = t.status,
                    i = t.clientStatus,
                    o = t.activities,
                    u = t.timestamp;
                if (n !== s.default.getId()) {
                    var a = T[n];
                    if (null == a) {
                        if (r === d.Skl.OFFLINE) return;
                        a = T[n] = {}
                    }
                    if (r === d.Skl.OFFLINE) a[e] = {
                        status: r,
                        clientStatus: i,
                        activities: I,
                        timestamp: Date.now()
                    };
                    else {
                        var c = o.length > 1 ? g(o).sort(C) : o;
                        a[e] = {
                            status: r,
                            clientStatus: i,
                            activities: c,
                            timestamp: u
                        }
                    }
                }
            }

            function D(t, e) {
                if (e === s.default.getId()) return !1;
                var n = T[e];
                if (null == n || null == n[t]) return !1;
                delete n[t];
                0 === Object.keys(n).length && delete T[e];
                A(e)
            }

            function k(t) {
                var e = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var i, o = Object.keys(T)[Symbol.iterator](); !(e = (i = o.next()).done); e = !0) {
                        D(t, i.value)
                    }
                } catch (t) {
                    n = !0;
                    r = t
                } finally {
                    try {
                        e || null == o.return || o.return()
                    } finally {
                        if (n) throw r
                    }
                }
            }
            var Z = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && y(t, e)
                }(n, t);
                var e = E(n);

                function n() {
                    v(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(s.default)
                };
                r.setCurrentUserOnConnectionOpen = function(t, e) {
                    N[s.default.getId()] = t;
                    P[s.default.getId()] = e
                };
                r.getStatus = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.Skl.OFFLINE,
                        r = f.default.getUser(t);
                    null != r && r.hasFlag(d.xW$.BOT_HTTP_INTERACTIONS) && (n = d.Skl.UNKNOWN);
                    if (null == r ? void 0 : r.isClyde()) return d.Skl.ONLINE;
                    if (null == e) {
                        var i;
                        return null !== (i = N[t]) && void 0 !== i ? i : n
                    }
                    var o, u = j(t, e);
                    return null !== (o = null == u ? void 0 : u.status) && void 0 !== o ? o : n
                };
                r.getActivities = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == e) {
                        var n;
                        return null !== (n = P[t]) && void 0 !== n ? n : I
                    }
                    var r = j(t, e);
                    return null == r || null == r.activities ? I : r.activities
                };
                r.getPrimaryActivity = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = this.getActivities(t, e);
                    return n[0]
                };
                r.getAllApplicationActivities = function(t) {
                    var e = [],
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = Object.keys(P)[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            var a = o.value,
                                c = P[a],
                                l = !0,
                                s = !1,
                                f = void 0;
                            try {
                                for (var d, p = c[Symbol.iterator](); !(l = (d = p.next()).done); l = !0) {
                                    var v = d.value;
                                    v.application_id === t && e.push({
                                        userId: a,
                                        activity: v
                                    })
                                }
                            } catch (t) {
                                s = !0;
                                f = t
                            } finally {
                                try {
                                    l || null == p.return || p.return()
                                } finally {
                                    if (s) throw f
                                }
                            }
                        }
                    } catch (t) {
                        r = !0;
                        i = t
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return e
                };
                r.getApplicationActivity = function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.findActivity(t, (function(t) {
                        return t.application_id === e
                    }), n)
                };
                r.findActivity = function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.getActivities(t, n).find(e)
                };
                r.getActivityMetadata = function(t) {
                    return R[t]
                };
                r.getUserIds = function() {
                    return Object.keys(P)
                };
                r.isMobileOnline = function(t) {
                    var e = w[t];
                    return null != e && e[d.X5t.MOBILE] === d.Skl.ONLINE && e[d.X5t.DESKTOP] !== d.Skl.ONLINE
                };
                r.getState = function() {
                    return {
                        presencesForGuilds: T,
                        statuses: N,
                        activities: P,
                        activityMetadata: R,
                        clientStatuses: w
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        NO_ACTIVITIES: I,
                        presencesForGuilds: T,
                        statuses: N,
                        activities: P,
                        clientStatuses: w,
                        activityMetadata: R,
                        typeScore: L,
                        richnessScore: x
                    }
                };
                return n
            }(a.ZP.Store);
            Z.displayName = "PresenceStore";
            const G = new Z(c.Z, {
                CONNECTION_OPEN: function() {
                    return !0
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(t) {
                    var e = t.guilds,
                        n = t.presences,
                        r = s.default.getId();
                    T = {};
                    R = {};
                    N = h({}, r, N[r]);
                    P = h({}, r, P[r]);
                    w = h({}, r, {});
                    var i = new Set,
                        o = Date.now();
                    e.forEach((function(t) {
                        t.presences.forEach((function(e) {
                            var n = e.user,
                                r = e.status,
                                u = e.clientStatus,
                                a = e.activities;
                            F({
                                guildId: t.id,
                                userId: n.id,
                                status: r,
                                clientStatus: u,
                                activities: a,
                                timestamp: o
                            });
                            i.add(n.id)
                        }))
                    }));
                    n.forEach((function(t) {
                        var e = t.user,
                            n = t.status,
                            r = t.clientStatus,
                            u = t.activities;
                        if (null != e) {
                            F({
                                guildId: d.ME,
                                userId: e.id,
                                status: n,
                                clientStatus: r,
                                activities: u,
                                timestamp: o
                            });
                            i.add(e.id)
                        }
                    }));
                    i.delete(r);
                    i.forEach(U)
                },
                OVERLAY_INITIALIZE: function(t) {
                    var e = t.presences;
                    T = e.presencesForGuilds;
                    N = e.statuses;
                    P = e.activities;
                    R = e.activityMetadata
                },
                GUILD_CREATE: function(t) {
                    var e = t.guild;
                    e.presences.forEach((function(t) {
                        var n = t.user,
                            r = t.status,
                            i = t.clientStatus,
                            o = t.activities;
                        M({
                            guildId: e.id,
                            userId: n.id,
                            status: r,
                            clientStatus: i,
                            activities: o
                        })
                    }))
                },
                GUILD_DELETE: function(t) {
                    k(t.guild.id)
                },
                GUILD_MEMBER_REMOVE: function(t) {
                    return D(t.guildId, t.user.id)
                },
                PRESENCE_UPDATES: function(t) {
                    return t.updates.map((function(t) {
                        var e = t.guildId,
                            n = t.user,
                            r = t.status,
                            i = t.clientStatus,
                            o = t.activities;
                        return M({
                            guildId: null != e ? e : d.ME,
                            userId: n.id,
                            status: r,
                            clientStatus: i,
                            activities: o
                        })
                    })).some((function(t) {
                        return t
                    }))
                },
                PRESENCES_REPLACE: function(t) {
                    var e = t.presences;
                    k(d.ME);
                    e.forEach((function(t) {
                        var e = t.user,
                            n = t.status,
                            r = t.clientStatus,
                            i = t.activities;
                        null != e && M({
                            guildId: d.ME,
                            userId: e.id,
                            status: n,
                            clientStatus: r,
                            activities: i
                        })
                    }))
                },
                ACTIVITY_METADATA_UPDATE: function(t) {
                    var e = t.userId,
                        n = t.metadata;
                    R[e] = n;
                    return !1
                },
                THREAD_MEMBER_LIST_UPDATE: function(t) {
                    var e = t.guildId;
                    t.members.forEach((function(t) {
                        null != t.presence && M({
                            guildId: e,
                            userId: t.user_id,
                            status: t.presence.status,
                            clientStatus: t.presence.clientStatus,
                            activities: t.presence.activities
                        })
                    }))
                },
                THREAD_MEMBERS_UPDATE: function(t) {
                    var e = t.guildId,
                        n = t.addedMembers;
                    null == n || n.forEach((function(t) {
                        null != t.presence && M({
                            guildId: e,
                            userId: t.userId,
                            status: t.presence.status,
                            clientStatus: t.presence.clientStatus,
                            activities: t.presence.activities
                        })
                    }))
                },
                SELF_PRESENCE_STORE_UPDATE: function(t) {
                    var e = s.default.getId();
                    if (N[e] === t.status && P[e] === t.activities) return !1;
                    N[e] = t.status;
                    P[e] = t.activities;
                    delete R[e]
                }
            })
        },
        443812: (t, e, n) => {
            "use strict";
            n.d(e, {
                hQ: () => u,
                Dt: () => a,
                FG: () => c
            });
            var r = n(873955),
                i = n.n(r),
                o = n(989824),
                u = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return i()(t)
                },
                a = function() {
                    return (0, o.Z)((function() {
                        return u()
                    }))
                },
                c = function(t) {
                    return (0, t.children)(a())
                }
        },
        558820: (t, e, n) => {
            "use strict";
            n.d(e, {
                Dx: () => _,
                DK: () => E,
                Ee: () => I,
                zx: () => T,
                qE: () => N,
                Vj: () => P,
                MC: () => w,
                II: () => R,
                gO: () => j,
                i_: () => L,
                Hh: () => x,
                EJ: () => C,
                jQ: () => A,
                v6: () => U,
                ZP: () => M
            });
            var r = n(785893),
                i = (n(667294), n(294184)),
                o = n.n(i),
                u = n(882723),
                a = n(621647),
                c = n(107364),
                l = n(124251),
                s = n(443812),
                f = n(408481),
                d = n(646161),
                p = n(348592),
                v = n(463473),
                h = n(2590),
                O = n(473708),
                m = n(955025),
                y = n.n(m);

            function b(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function g(t, e) {
                if (null == t) return {};
                var n, r, i = function(t, e) {
                    if (null == t) return {};
                    var n, r, i = {},
                        o = Object.keys(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || (i[n] = t[n])
                    }
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                    }
                }
                return i
            }
            var S = u.Avatar;
            null == S && (S = function() {
                return null
            });
            var _ = function(t) {
                    var e = t.className,
                        n = t.id,
                        i = t.children;
                    return (0, r.jsx)(u.Heading, {
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        className: o()(y().title, e),
                        id: n,
                        children: i
                    })
                },
                E = function(t) {
                    var e = t.className,
                        n = t.children;
                    return (0, r.jsx)(u.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: e,
                        children: n
                    })
                },
                I = function(t) {
                    var e = t.className,
                        n = t.src;
                    return (0, r.jsx)("img", {
                        alt: "",
                        src: n,
                        className: o()(y().image, e)
                    })
                },
                T = function(t) {
                    var e, n = t.className,
                        i = g(t, ["className"]),
                        a = i.look === u.Button.Looks.LINK;
                    return (0, r.jsx)(u.Button, function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                                return Object.getOwnPropertyDescriptor(n, t).enumerable
                            }))));
                            r.forEach((function(e) {
                                b(t, e, n[e])
                            }))
                        }
                        return t
                    }({
                        size: a ? u.Button.Sizes.MIN : u.Button.Sizes.LARGE,
                        fullWidth: !a,
                        className: o()(n, (e = {}, b(e, y().button, !a), b(e, y().linkButton, a), e))
                    }, i))
                };
            T.Looks = u.Button.Looks;
            T.Colors = u.Button.Colors;
            T.Sizes = u.Button.Sizes;
            var N = function(t) {
                    var e = t.className,
                        n = t.src,
                        i = t.size;
                    return (0, r.jsx)(S, {
                        src: n,
                        size: i,
                        className: o()(y().inviteLargeIcon, e),
                        "aria-hidden": !0
                    })
                },
                P = function(t) {
                    var e = t.guild,
                        n = t.size,
                        i = t.animate,
                        o = void 0 !== i && i,
                        u = t.className;
                    return (0, r.jsx)(l.Z, {
                        active: !0,
                        guild: e,
                        size: n,
                        animate: o,
                        className: u
                    })
                };
            P.Sizes = l.Z.Sizes;
            var w = function(t) {
                var e = t.className,
                    n = t.channel,
                    i = t.size;
                return (0, r.jsx)(S, {
                    src: (0, a.x)(n),
                    size: i,
                    className: o()(y().inviteIcon, e),
                    "aria-hidden": !0
                })
            };
            w.Sizes = u.AvatarSizes;
            var R = function(t) {
                    var e = t.label,
                        n = t.error,
                        i = t.placeholder,
                        a = t.value,
                        c = t.className,
                        l = t.inputClassName,
                        f = t.setRef,
                        d = t.type,
                        p = void 0 === d ? "text" : d,
                        v = t.onChange,
                        h = t.autoComplete,
                        O = t.autoFocus,
                        m = t.maxLength,
                        g = t.spellCheck,
                        S = t.name,
                        _ = t.description,
                        E = t.required,
                        I = t.onFocus,
                        T = t.onBlur,
                        N = (0, s.Dt)();
                    return (0, r.jsxs)(u.FormItem, {
                        title: e,
                        error: n,
                        className: c,
                        required: E,
                        tag: "label",
                        htmlFor: N,
                        children: [(0, r.jsx)(u.TextInput, {
                            name: S,
                            type: p,
                            value: a,
                            inputRef: f,
                            placeholder: i,
                            inputClassName: o()(l, b({}, y().inputError, null != n)),
                            "aria-label": e,
                            onChange: v,
                            autoComplete: h,
                            autoFocus: O,
                            maxLength: m,
                            spellCheck: g,
                            id: N,
                            onFocus: I,
                            onBlur: T
                        }), null != _ ? (0, r.jsx)(u.FormText, {
                            type: u.FormText.Types.DESCRIPTION,
                            className: y().description,
                            children: _
                        }) : null]
                    })
                },
                j = function(t) {
                    var e = t.className,
                        n = t.children;
                    return (0, r.jsx)("div", {
                        className: o()(y().block, e),
                        children: n
                    })
                },
                L = function(t) {
                    var e = t.className,
                        n = t.children,
                        i = t.isProminent;
                    return (0, r.jsx)(u.Text, {
                        variant: i ? "text-sm/normal" : "text-xs/normal",
                        className: o()(y().subText, e),
                        children: n
                    })
                },
                x = function(t) {
                    var e = t.className;
                    return (0, r.jsx)(c.Z, {
                        direction: c.Z.Direction.VERTICAL,
                        align: c.Z.Align.CENTER,
                        className: e,
                        children: (0, r.jsx)(f.Z, {
                            className: y().spinnerVideo
                        })
                    })
                },
                C = function(t) {
                    var e, n = t.online,
                        i = t.total,
                        a = t.className,
                        l = t.flat,
                        s = t.textClassName;
                    if (null == i) return null;
                    null != n && n > 0 && (e = (0, r.jsxs)("div", {
                        className: o()(y().pill, y().pillOnline, l && y().pillFlat),
                        children: [(0, r.jsx)("i", {
                            className: y().pillIconOnline
                        }), (0, r.jsx)(u.Text, {
                            tag: "span",
                            className: o()(y().pillMessage, s),
                            variant: "text-sm/normal",
                            children: O.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                membersOnline: n
                            })
                        })]
                    }));
                    return (0, r.jsxs)(c.Z, {
                        justify: c.Z.Justify.CENTER,
                        className: a,
                        children: [e, (0, r.jsxs)("div", {
                            className: o()(y().pill, l && y().pillFlat),
                            children: [(0, r.jsx)("i", {
                                className: y().pillIconTotal
                            }), (0, r.jsx)(u.Text, {
                                tag: "span",
                                className: o()(y().pillMessage, s),
                                variant: "text-sm/normal",
                                children: O.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                    count: i
                                })
                            })]
                        })]
                    })
                },
                A = function(t) {
                    var e = t.user;
                    return null == e ? null : (0, r.jsxs)("div", {
                        className: y().joiningAs,
                        children: [(0, r.jsx)(u.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: O.Z.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS
                        }), (0, r.jsx)(N, {
                            className: y().joiningAsAvatar,
                            src: e.getAvatarURL(void 0, 24),
                            size: u.AvatarSizes.SIZE_24,
                            "aria-label": e.username
                        }), (0, r.jsx)(u.Text, {
                            className: y().joiningAsUsername,
                            tag: "span",
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: e.username
                        })]
                    })
                },
                U = function(t) {
                    var e = t.className;
                    return (0, r.jsxs)(j, {
                        className: e,
                        children: [(0, r.jsx)(T, {
                            onClick: function() {
                                return window.open((0, d.t3)())
                            },
                            children: O.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                                platform: (0, d.DW)()
                            })
                        }), (0, r.jsx)(L, {
                            className: y().downloadButtonSubtext,
                            children: O.Z.Messages.INCOMPATIBLE_BROWSER.format({
                                supportedBrowserURL: p.Z.getArticleURL(h.BhN.SUPPORTED_BROWSERS)
                            })
                        })]
                    })
                };
            const M = function(t) {
                var e = t.className,
                    n = t.contentClassName,
                    i = t.tag,
                    u = void 0 === i ? "section" : i,
                    a = t.onSubmit,
                    c = t.children,
                    l = t.expanded,
                    s = void 0 !== l && l,
                    f = t.theme,
                    d = void 0 === f ? h.BRd.DARK : f,
                    p = t.style;
                return (0, r.jsxs)(u, {
                    onSubmit: a,
                    style: p,
                    className: o()(s ? y().authBoxExpanded : y().authBox, (0, v.Q)(d), e),
                    children: [(0, r.jsx)("div", {
                        className: y().discordLogo
                    }), (0, r.jsx)("div", {
                        className: o()(y().centeringWrapper, n),
                        children: c
                    })]
                })
            }
        },
        718831: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => v
            });
            var r = n(785893),
                i = (n(667294), n(294184)),
                o = n.n(i),
                u = n(633878),
                a = n(871979),
                c = n.n(a);

            function l(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function s(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function f(t, e) {
                if (null == t) return {};
                var n, r, i = function(t, e) {
                    if (null == t) return {};
                    var n, r, i = {},
                        o = Object.keys(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || (i[n] = t[n])
                    }
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                    }
                }
                return i
            }
            var d = {
                    UP: c().directionUp,
                    RIGHT: c().directionRight,
                    DOWN: c().directionDown,
                    LEFT: c().directionLeft
                },
                p = function(t) {
                    var e = t.direction,
                        n = void 0 === e ? d.DOWN : e,
                        i = t.width,
                        a = void 0 === i ? 24 : i,
                        p = t.height,
                        v = void 0 === p ? 24 : p,
                        h = t.color,
                        O = void 0 === h ? "currentColor" : h,
                        m = t.transition,
                        y = void 0 === m ? c().transition : m,
                        b = t.className,
                        g = t.foreground,
                        S = t.expanded,
                        _ = f(t, ["direction", "width", "height", "color", "transition", "className", "foreground", "expanded"]),
                        E = n;
                    !0 === S ? E = d.DOWN : !1 === S && (E = d.RIGHT);
                    return (0, r.jsx)("svg", s(function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                                return Object.getOwnPropertyDescriptor(n, t).enumerable
                            }))));
                            r.forEach((function(e) {
                                l(t, e, n[e])
                            }))
                        }
                        return t
                    }({
                        className: o()(b, y, E),
                        width: a,
                        height: v,
                        viewBox: "0 0 24 24"
                    }, (0, u.Z)(_)), {
                        children: (0, r.jsx)("path", {
                            className: g,
                            fill: "none",
                            stroke: O,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    }))
                };
            p.Directions = d;
            const v = p
        },
        436622: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => c
            });
            var r = n(785893),
                i = (n(667294), n(633878));

            function o(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function u(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function a(t, e) {
                if (null == t) return {};
                var n, r, i = function(t, e) {
                    if (null == t) return {};
                    var n, r, i = {},
                        o = Object.keys(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || (i[n] = t[n])
                    }
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                    }
                }
                return i
            }

            function c(t) {
                var e = t.width,
                    n = void 0 === e ? 24 : e,
                    c = t.height,
                    l = void 0 === c ? 24 : c,
                    s = t.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = t.className,
                    p = t.foreground,
                    v = a(t, ["width", "height", "color", "className", "foreground"]);
                return (0, r.jsx)("svg", u(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            o(t, e, n[e])
                        }))
                    }
                    return t
                }({
                    width: n,
                    height: l,
                    viewBox: "0 0 24 24",
                    className: d
                }, (0, i.Z)(v)), {
                    children: (0, r.jsx)("path", {
                        className: p,
                        fill: f,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"
                    })
                }))
            }
        },
        796938: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => c
            });
            var r = n(785893),
                i = (n(667294), n(633878));

            function o(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function u(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function a(t, e) {
                if (null == t) return {};
                var n, r, i = function(t, e) {
                    if (null == t) return {};
                    var n, r, i = {},
                        o = Object.keys(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || (i[n] = t[n])
                    }
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                    }
                }
                return i
            }

            function c(t) {
                var e = t.width,
                    n = void 0 === e ? 24 : e,
                    c = t.height,
                    l = void 0 === c ? 24 : c,
                    s = t.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = t.foreground,
                    p = a(t, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", u(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            o(t, e, n[e])
                        }))
                    }
                    return t
                }({}, (0, i.Z)(p)), {
                    width: n,
                    height: l,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: d,
                        fill: f,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                        "aria-hidden": !0
                    })
                }))
            }
        },
        939198: (t, e, n) => {
            "use strict";
            n.d(e, {
                mT: () => i,
                Jj: () => o,
                OF: () => u,
                hV: () => r,
                WW: () => a
            });
            var r, i = 550,
                o = 350,
                u = 40;
            ! function(t) {
                t.STATIC = "STATIC";
                t.RESPONSIVE = "RESPONSIVE";
                t.MOSAIC = "MOSAIC"
            }(r || (r = {}));
            var a = 20
        },
        408481: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => Q
            });
            var r = n(785893),
                i = n(667294),
                o = n(730381),
                u = n.n(o),
                a = n(575945),
                c = n(882723),
                l = n(245305),
                s = n(745920),
                f = n.n(s),
                d = n(894919),
                p = n.n(d),
                v = n(665369),
                h = n.n(v),
                O = n(978476),
                m = n.n(O),
                y = n(786170),
                b = n(2590),
                g = n(55146),
                S = n.n(g),
                _ = n(485618),
                E = n.n(_),
                I = n(161693),
                T = n.n(I),
                N = n(28743),
                P = n.n(N),
                w = n(106632),
                R = n.n(w),
                j = n(858739),
                L = n.n(j),
                x = n(172129),
                C = n.n(x),
                A = n(243874),
                U = n.n(A),
                M = n(537020),
                F = n.n(M),
                D = n(88070),
                k = n.n(D);

            function Z(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function G(t) {
                var e, n = t.movDark,
                    i = void 0 === n ? f() : n,
                    o = t.movLight,
                    u = void 0 === o ? p() : o,
                    a = t.mp4Dark,
                    c = void 0 === a ? T() : a,
                    s = t.mp4Light,
                    d = void 0 === s ? L() : s,
                    v = t.pngDark,
                    h = void 0 === v ? P() : v,
                    O = t.pngLight,
                    m = void 0 === O ? C() : O,
                    y = t.webmDark,
                    g = void 0 === y ? R() : y,
                    S = t.webmLight,
                    _ = void 0 === S ? U() : S,
                    E = (0, l.vu)(),
                    I = [(0, r.jsx)("source", {
                        src: c,
                        type: "video/mp4"
                    }, "mp4"), (0, r.jsx)("img", {
                        alt: "",
                        src: h
                    }, "png")],
                    N = [(0, r.jsx)("source", {
                        src: d,
                        type: "video/mp4"
                    }, "mp4"), (0, r.jsx)("img", {
                        alt: "",
                        src: m
                    }, "png")];
                if (E > 52 || -1 === E) {
                    I.unshift((0, r.jsx)("source", {
                        src: g,
                        type: "video/webm"
                    }, "webm"));
                    N.unshift((0, r.jsx)("source", {
                        src: _,
                        type: "video/webm"
                    }, "webm"))
                }
                if ((0, l.rO)()) {
                    I.unshift((0, r.jsx)("source", {
                        src: i,
                        type: "video/mp4"
                    }, "hevc"));
                    N.unshift((0, r.jsx)("source", {
                        src: u,
                        type: "video/mp4"
                    }, "hevc"))
                }
                return Z(e = {}, b.BRd.DARK, I), Z(e, b.BRd.LIGHT, N), e
            }
            var B = u()("5/13/2022 10:00 -0800").valueOf(),
                H = u()("5/16/2022 17:00 -0800").valueOf(),
                z = G({
                    webmDark: S(),
                    webmLight: E()
                }),
                V = u()("10/24/2022 08:00 -0800").valueOf(),
                W = u()("11/3/2022 11:00 -0800").valueOf(),
                q = G({
                    webmDark: F(),
                    webmLight: k(),
                    movDark: h(),
                    movLight: m()
                }),
                Y = G({});
            const Q = function(t) {
                var e = t.loop,
                    n = void 0 === e || e,
                    o = t.autoPlay,
                    u = void 0 === o || o,
                    l = t.setRef,
                    s = t.className,
                    f = t.onReady,
                    d = (0, c.useThemeContext)().theme,
                    p = i.useContext(c.AccessibilityPreferencesContext).reducedMotion,
                    v = Date.now(),
                    h = Y;
                v >= B && v <= H ? h = z : v >= V && v <= W && (h = q);
                var O, m = null !== (O = h[(0, a.wj)(d) ? b.BRd.DARK : b.BRd.LIGHT]) && void 0 !== O ? O : h[b.BRd.DARK];
                return (0, r.jsx)(y.Z, {
                    ref: l,
                    onLoadedData: f,
                    className: s,
                    loop: !p.enabled && n,
                    autoPlay: !p.enabled && u,
                    playsInline: !0,
                    "data-testid": "app-spinner",
                    children: m
                }, d)
            }
        },
        786170: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => v
            });
            var r = n(785893),
                i = n(667294),
                o = n(809784),
                u = n(202351),
                a = n(316878),
                c = n(939198);

            function l(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function s(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        l(t, e, n[e])
                    }))
                }
                return t
            }

            function f(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function d(t, e) {
                if (null == t) return {};
                var n, r, i = function(t, e) {
                    if (null == t) return {};
                    var n, r, i = {},
                        o = Object.keys(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || (i[n] = t[n])
                    }
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                    }
                }
                return i
            }
            var p = function(t) {
                var e = function() {
                        var t;
                        v && (null == b || null === (t = b.current) || void 0 === t || t.play())
                    },
                    n = function() {
                        var t;
                        v && (null == b || null === (t = b.current) || void 0 === t || t.pause())
                    },
                    l = function() {
                        return {
                            maxWidth: m.width,
                            maxHeight: m.height,
                            width: "100%",
                            height: "100%"
                        }
                    },
                    f = t.externalRef,
                    p = t.autoPlay,
                    v = t.playOnHover,
                    h = t.responsive,
                    O = t.mediaLayoutType,
                    m = d(t, ["externalRef", "autoPlay", "playOnHover", "responsive", "mediaLayoutType"]),
                    y = !(0, u.e7)([a.Z], (function() {
                        return a.Z.useReducedMotion
                    })) && !v && p,
                    b = i.useRef(null);
                i.useLayoutEffect((function() {
                    return function() {
                        var t = b.current;
                        null != t && function(t) {
                            t.removeAttribute("src");
                            Array.from(t.children).forEach((function(t) {
                                if ((0, o.k)(t, HTMLSourceElement)) {
                                    t.removeAttribute("src");
                                    t.removeAttribute("type")
                                }(0, o.k)(t, HTMLImageElement) && t.removeAttribute("src")
                            }));
                            try {
                                t.load()
                            } catch (t) {}
                        }(t)
                    }
                }), []);
                i.useLayoutEffect((function() {
                    if ("function" == typeof f) {
                        f(null);
                        f(b.current)
                    } else null != f && (f.current = b.current);
                    return function() {
                        "function" == typeof f ? f(null) : null != f && (f.current = null)
                    }
                }), [f, b]);
                return (0, r.jsx)("video", s({
                    ref: b,
                    autoPlay: y,
                    onMouseEnter: e,
                    onMouseLeave: n,
                    onFocus: e,
                    onBlur: n,
                    style: O === c.hV.MOSAIC ? {
                        width: "100%",
                        height: "100%",
                        maxHeight: "inherit",
                        objectFit: "cover"
                    } : h ? l() : {}
                }, m))
            };
            const v = i.forwardRef((function(t, e) {
                return (0, r.jsx)(p, f(s({}, t), {
                    externalRef: e
                }))
            }))
        },
        347117: (t, e, n) => {
            "use strict";
            n.d(e, {
                Tj: () => d,
                zp: () => p,
                Dc: () => v,
                rn: () => h,
                rv: () => O,
                XN: () => y,
                OF: () => b,
                fD: () => S,
                QB: () => _,
                Bo: () => E,
                c0: () => N
            });
            var r = n(441143),
                i = n.n(r),
                o = n(496486),
                u = n.n(o),
                a = n(16243),
                c = n.n(a);

            function l(t, e, n, r, i, o, u) {
                try {
                    var a = t[o](u),
                        c = a.value
                } catch (t) {
                    n(t);
                    return
                }
                a.done ? e(c) : Promise.resolve(c).then(r, i)
            }

            function s(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = t.apply(e, n);

                        function u(t) {
                            l(o, r, i, u, a, "next", t)
                        }

                        function a(t) {
                            l(o, r, i, u, a, "throw", t)
                        }
                        u(void 0)
                    }))
                }
            }
            var f = function(t, e) {
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
                                o = e.call(t, u)
                            } catch (t) {
                                o = [6, t];
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

            function d(t) {
                var e = t.width,
                    n = t.height,
                    r = t.maxWidth,
                    i = t.maxHeight,
                    o = t.minWidth,
                    u = void 0 === o ? 0 : o,
                    a = t.minHeight,
                    c = void 0 === a ? 0 : a;
                if (e !== r || n !== i) {
                    var l = e > r ? r / e : 1;
                    e = Math.max(Math.round(e * l), u);
                    var s = (n = Math.max(Math.round(n * l), c)) > i ? i / n : 1;
                    e = Math.max(Math.round(e * s), u);
                    n = Math.max(Math.round(n * s), c)
                }
                return {
                    width: e,
                    height: n
                }
            }

            function p(t, e) {
                var n = Math.min(Math.round(.65 * window.innerHeight), 2e3);
                return d({
                    width: t,
                    height: e,
                    maxWidth: Math.min(Math.round(.75 * window.innerWidth), 2e3),
                    maxHeight: n
                })
            }

            function v(t) {
                var e = t.width,
                    n = t.height,
                    r = t.maxWidth,
                    i = t.maxHeight,
                    o = 1;
                e > r && (o = r / e);
                e = Math.round(e * o);
                var u = 1;
                (n = Math.round(n * o)) > i && (u = i / n);
                return Math.min(o * u, 1)
            }

            function h(t) {
                var e = t.width,
                    n = t.height,
                    r = t.maxWidth,
                    i = t.maxHeight;
                if (e === n) return 1;
                var o = Math.max(r / e, i / n);
                return Math.min(o, 1)
            }

            function O(t) {
                return null == t || "" === t ? "none" : "url(".concat(t, ")")
            }
            var m = [
                [0, 0, 0]
            ];

            function y(t, e, n) {
                var r = document.createElement("canvas"),
                    i = r.getContext("2d");
                if (null == i) return m;
                var o = r.width = 0 === t.width ? 128 : t.width,
                    u = r.height = 0 === t.height ? 128 : t.height;
                i.drawImage(t, 0, 0, o, u);
                var a = function(t, e, n) {
                        for (var r, i, o, u, a, c = [], l = 0; l < e; l += n) {
                            i = t[0 + (r = 4 * l)];
                            o = t[r + 1];
                            u = t[r + 2];
                            (void 0 === (a = t[r + 3]) || a >= 125) && (i > 250 && o > 250 && u > 250 || c.push([i, o, u]))
                        }
                        return c
                    }(i.getImageData(0, 0, o, u).data, o * u, n),
                    l = c()(a, e);
                return "boolean" == typeof l ? m : l.palette()
            }
            var b = function(t) {
                    return g(t)
                },
                g = u().memoize((function(t) {
                    return new Promise((function(e, n) {
                        var r = new Image;
                        r.crossOrigin = "Anonymous";
                        r.onerror = function(t) {
                            n(t);
                            r.onerror = r.onload = null;
                            r = null
                        };
                        r.onload = function() {
                            e(y(r, 5, 10));
                            r.onerror = r.onload = null;
                            r = null
                        };
                        r.src = t
                    }))
                }));

            function S(t) {
                return new Promise((function(e, n) {
                    var r = new FileReader;
                    r.readAsDataURL(t);
                    r.onload = function() {
                        i()("string" == typeof r.result, "Result must be a string");
                        e(r.result)
                    };
                    r.onerror = function(t) {
                        return n(t)
                    }
                }))
            }

            function _(t) {
                var e = t.split(";base64,");
                i()(2 === e.length, "Input data is not a valid image.");
                return atob(e[1]).length
            }

            function E(t, e, n) {
                return I.apply(this, arguments)
            }

            function I() {
                return (I = s((function(t, e, n) {
                    var r;
                    return f(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, T(t).arrayBuffer()];
                            case 1:
                                r = i.sent();
                                return [2, new File([r], e, {
                                    type: n
                                })]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function T(t) {
                var e;
                e = t.split(",")[0].indexOf("base64") >= 0 ? atob(t.split(",")[1]) : btoa(t.split(",")[1]);
                for (var n = t.split(",")[0].split(":")[1].split(";")[0], r = new Uint8Array(e.length), i = 0; i < e.length; i++) r[i] = e.charCodeAt(i);
                return new Blob([r], {
                    type: n
                })
            }

            function N(t) {
                return P.apply(this, arguments)
            }

            function P() {
                return (P = s((function(t) {
                    var e, n, r;
                    return f(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                if ("image/png" !== (null === (e = t.type) || void 0 === e ? void 0 : e.split(";")[0])) throw new Error("File is not a PNG");
                                return [4, t.text()];
                            case 1:
                                n = i.sent();
                                return (r = n.indexOf("IDAT")) > 0 && -1 !== n.substring(0, r).indexOf("acTL") ? [2, !0] : [2, !1]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        990554: (t, e, n) => {
            "use strict";
            n.d(e, {
                l: () => i
            });
            var r = n(421281);

            function i(t, e) {
                for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) i[o - 2] = arguments[o];
                var u = i.reduce((function(t, e) {
                        return t + (0, r.De)(e)
                    }), ""),
                    a = "".concat(e).concat(u),
                    c = t[a];
                if (null != c) return c;
                0
            }
        },
        391438: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => l
            });
            var r = n(281110),
                i = n(652591);

            function o(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        o(t, e, n[e])
                    }))
                }
                return t
            }

            function a(t, e) {
                if (null == t) return {};
                var n, r, i = function(t, e) {
                    if (null == t) return {};
                    var n, r, i = {},
                        o = Object.keys(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || (i[n] = t[n])
                    }
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                    }
                }
                return i
            }

            function c(t, e, n) {
                var r = e.trackedActionData,
                    o = a(e, ["trackedActionData"]),
                    c = {
                        url: o.url,
                        request_method: n
                    };
                return new Promise((function(e, n) {
                    t(o).then((function(t) {
                        var n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(t));
                        (0, i.trackNetworkAction)(r.event, u({
                            status_code: t.status
                        }, c, n));
                        e(t)
                    })).catch((function(t) {
                        var e, o, a = r.properties;
                        "function" == typeof r.properties && (a = r.properties(t));
                        (0,
                            i.trackNetworkAction)(r.event, u({
                            status_code: t.status,
                            error_code: null === (e = t.body) || void 0 === e ? void 0 : e.code,
                            error_message: null === (o = t.body) || void 0 === o ? void 0 : o.message
                        }, c, a));
                        n(t)
                    }))
                }))
            }
            const l = {
                get: function(t) {
                    return c(r.ZP.get, t, "get")
                },
                post: function(t) {
                    return c(r.ZP.post, t, "post")
                },
                put: function(t) {
                    return c(r.ZP.put, t, "put")
                },
                patch: function(t) {
                    return c(r.ZP.patch, t, "patch")
                },
                delete: function(t) {
                    return c(r.ZP.delete, t, "del")
                }
            }
        },
        322500: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => l
            });
            var r = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i,
                i = /^((https:\/\/)?(discord\.gg\/)|(discord\.com\/)(invite\/)?)?[A-Za-z0-9]{8,8}$/,
                o = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                u = /^(.*)#[0-9]{1,5}$/,
                a = ["@", "#", ":", "```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage"],
                c = ["discordtag", "everyone", "here", "discord nitro", "discord"];
            const l = {
                isEmail: function(t) {
                    return r.test(t)
                },
                isInvite: function(t) {
                    return i.test(t)
                },
                isPhoneNumber: function(t) {
                    return o.test(t)
                },
                isUserTagLike: function(t) {
                    var e = u.exec(t);
                    if (null != e && e.length > 1) {
                        var n = e[1],
                            r = a.some((function(t) {
                                return n.includes(t)
                            })),
                            i = c.includes(n);
                        return !r && !i
                    }
                    return !1
                }
            }
        },
        180735: (t, e, n) => {
            "use strict";
            n.d(e, {
                h: () => r
            });
            var r;
            ! function(t) {
                t[t.USER = 100] = "USER";
                t[t.STREAM = 18] = "STREAM"
            }(r || (r = {}))
        },
        284157: (t, e, n) => {
            "use strict";
            n.d(e, {
                n: () => r
            });
            var r;
            ! function(t) {
                t.CONNECT_VOICE = "connect_voice"
            }(r || (r = {}));
            new Set(["connect_voice"])
        },
        349139: (t, e, n) => {
            "use strict";
            n.d(e, {
                o: () => r
            });
            var r;
            ! function(t) {
                t.TRANSFER_EXISTING_CALL = "TRANSFER_EXISTING_CALL";
                t.CREATE_NEW_CALL = "CREATE_NEW_CALL"
            }(r || (r = {}));
            new Set(["CREATE_NEW_CALL", "TRANSFER_EXISTING_CALL"])
        },
        989824: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => o
            });
            var r = n(667294),
                i = {};

            function o(t) {
                var e = (0, r.useRef)(i);
                e.current === i && (e.current = t());
                return e.current
            }
        }
    }
]);
//# sourceMappingURL=c60f084b2d9dbdeaf523.js.map