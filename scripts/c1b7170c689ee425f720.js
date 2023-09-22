(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [82302, 21588, 96043, 71402], {
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
                var a = [];
                n[5] && (a = n[5].split("-")).shift();
                var o = [];
                if (n[6]) {
                    (t = n[6].split("-")).shift();
                    for (var u, l = []; t.length;) {
                        var s = t.shift();
                        if (1 === s.length)
                            if (u) {
                                o.push({
                                    singleton: u,
                                    extension: l
                                });
                                u = s;
                                l = []
                            } else u = s;
                        else l.push(s)
                    }
                    o.push({
                        singleton: u,
                        extension: l
                    })
                }
                var c = [];
                if (n[7]) {
                    (c = n[7].split("-")).shift();
                    c.shift()
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
                        variant: a,
                        extension: o,
                        privateuse: c
                    },
                    privateuse: f,
                    grandfathered: {
                        irregular: n[0] || null,
                        regular: n[1] || null
                    }
                }
            }
        },
        667237: e => {
            "use strict";

            function t(e) {
                this._capacity = i(e);
                this._length = 0;
                this._front = 0;
                this._makeCapacity();
                if (n(e)) {
                    for (var t = e.length, r = 0; r < t; ++r) this[r] = e[r];
                    this._length = t
                }
            }
            t.prototype.toArray = function() {
                for (var e = this._length, t = new Array(e), n = this._front, r = this._capacity, i = 0; i < e; ++i) t[i] = this[n + i & r - 1];
                return t
            };
            t.prototype.push = function(e) {
                var t = arguments.length,
                    n = this._length;
                if (t > 1) {
                    var r = this._capacity;
                    if (n + t > r) {
                        for (var i = 0; i < t; ++i) {
                            this._checkCapacity(n + 1);
                            this[a = this._front + n & this._capacity - 1] = arguments[i];
                            n++;
                            this._length = n
                        }
                        return n
                    }
                    for (var a = this._front, i = 0; i < t; ++i) {
                        this[a + n & r - 1] = arguments[i];
                        a++
                    }
                    this._length = n + t;
                    return n + t
                }
                if (0 === t) return n;
                this._checkCapacity(n + 1);
                this[i = this._front + n & this._capacity - 1] = e;
                this._length = n + 1;
                return n + 1
            };
            t.prototype.pop = function() {
                var e = this._length;
                if (0 !== e) {
                    var t = this._front + e - 1 & this._capacity - 1,
                        n = this[t];
                    this[t] = void 0;
                    this._length = e - 1;
                    return n
                }
            };
            t.prototype.shift = function() {
                var e = this._length;
                if (0 !== e) {
                    var t = this._front,
                        n = this[t];
                    this[t] = void 0;
                    this._front = t + 1 & this._capacity - 1;
                    this._length = e - 1;
                    return n
                }
            };
            t.prototype.unshift = function(e) {
                var t = this._length,
                    n = arguments.length;
                if (n > 1) {
                    if (t + n > (i = this._capacity)) {
                        for (var r = n - 1; r >= 0; r--) {
                            this._checkCapacity(t + 1);
                            var i = this._capacity;
                            this[o = (this._front - 1 & i - 1 ^ i) - i] = arguments[r];
                            t++;
                            this._length = t;
                            this._front = o
                        }
                        return t
                    }
                    var a = this._front;
                    for (r = n - 1; r >= 0; r--) {
                        var o;
                        this[o = (a - 1 & i - 1 ^ i) - i] = arguments[r];
                        a = o
                    }
                    this._front = a;
                    this._length = t + n;
                    return t + n
                }
                if (0 === n) return t;
                this._checkCapacity(t + 1);
                i = this._capacity;
                this[r = (this._front - 1 & i - 1 ^ i) - i] = e;
                this._length = t + 1;
                this._front = r;
                return t + 1
            };
            t.prototype.peekBack = function() {
                var e = this._length;
                if (0 !== e) {
                    return this[this._front + e - 1 & this._capacity - 1]
                }
            };
            t.prototype.peekFront = function() {
                if (0 !== this._length) return this[this._front]
            };
            t.prototype.get = function(e) {
                var t = e;
                if (t === (0 | t)) {
                    var n = this._length;
                    t < 0 && (t += n);
                    if (!(t < 0 || t >= n)) return this[this._front + t & this._capacity - 1]
                }
            };
            t.prototype.isEmpty = function() {
                return 0 === this._length
            };
            t.prototype.clear = function() {
                this._length = 0;
                this._front = 0;
                this._makeCapacity()
            };
            t.prototype.toString = function() {
                return this.toArray().toString()
            };
            t.prototype.valueOf = t.prototype.toString;
            t.prototype.removeFront = t.prototype.shift;
            t.prototype.removeBack = t.prototype.pop;
            t.prototype.insertFront = t.prototype.unshift;
            t.prototype.insertBack = t.prototype.push;
            t.prototype.enqueue = t.prototype.push;
            t.prototype.dequeue = t.prototype.shift;
            t.prototype.toJSON = t.prototype.toArray;
            Object.defineProperty(t.prototype, "length", {
                get: function() {
                    return this._length
                },
                set: function() {
                    throw new RangeError("")
                }
            });
            t.prototype._makeCapacity = function() {
                for (var e = this._capacity, t = 0; t < e; ++t) this[t] = void 0
            };
            t.prototype._checkCapacity = function(e) {
                this._capacity < e && this._resizeTo(i(1.5 * this._capacity + 16))
            };
            t.prototype._resizeTo = function(e) {
                var t = this._front,
                    n = this._capacity,
                    i = new Array(n),
                    a = this._length;
                r(this, 0, i, 0, n);
                this._capacity = e;
                this._makeCapacity();
                this._front = 0;
                if (t + a <= n) r(i, t, this, 0, a);
                else {
                    var o = a - (t + a & n - 1);
                    r(i, t, this, 0, o);
                    r(i, 0, this, o, a - o)
                }
            };
            var n = Array.isArray;

            function r(e, t, n, r, i) {
                for (var a = 0; a < i; ++a) n[a + r] = e[a + t]
            }

            function i(e) {
                if ("number" != typeof e) {
                    if (!n(e)) return 16;
                    e = e.length
                }
                return function(e) {
                    e >>>= 0;
                    e -= 1;
                    e |= e >> 1;
                    e |= e >> 2;
                    e |= e >> 4;
                    e |= e >> 8;
                    return 1 + (e |= e >> 16)
                }(Math.min(Math.max(16, e), 1073741824))
            }
            e.exports = t
        },
        823493: (e, t, n) => {
            var r = n(23279),
                i = n(513218);
            e.exports = function(e, t, n) {
                var a = !0,
                    o = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");
                if (i(n)) {
                    a = "leading" in n ? !!n.leading : a;
                    o = "trailing" in n ? !!n.trailing : o
                }
                return r(e, t, {
                    leading: a,
                    maxWait: t,
                    trailing: o
                })
            }
        },
        971402: (e, t, n) => {
            "use strict";
            n.d(t, {
                Zy: () => f,
                vq: () => d,
                jW: () => h
            });
            var r = n(744564),
                i = n(26468),
                a = n(120415),
                o = n(73105),
                u = n(2590);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e) {
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

            function c(e) {
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
                        h = 0;
                    if ("pageX" in e) {
                        d = e.pageX;
                        h = e.pageY
                    }
                    if (0 === d && 0 === h) {
                        var p, v = null === (p = e.target) || void 0 === p ? void 0 : p.getBoundingClientRect(),
                            g = null != v ? v : {},
                            y = g.left,
                            _ = void 0 === y ? 0 : y,
                            m = g.top,
                            b = void 0 === m ? 0 : m,
                            E = g.width,
                            O = void 0 === E ? 0 : E,
                            I = g.height;
                        d = _ + O / 2;
                        h = b + (void 0 === I ? 0 : I) / 2
                    }
                    var T = {
                        render: t,
                        renderLazy: r,
                        target: null !== (l = e.target) && void 0 !== l ? l : e.currentTarget,
                        rect: new DOMRect(d, h, 0, 0),
                        config: s({
                            context: __OVERLAY__ ? u.IlC.OVERLAY : null !== (f = (0, i.GB)()) && void 0 !== f ? f : u.IlC.APP
                        }, n)
                    };
                    if ((null == n ? void 0 : n.enableSpellCheck) && (0, a.nI)()) var S = (0, o.RD)((function() {
                        S();
                        c(T)
                    }));
                    else {
                        e.preventDefault();
                        c(T)
                    }
                }
            }

            function h(e, t, n) {
                d(e, void 0, n, t)
            }
        },
        623934: (e, t, n) => {
            "use strict";
            n.d(t, {
                ym: () => a,
                w5: () => o,
                b8: () => u,
                TV: () => l
            });
            var r = n(744564),
                i = n(168024);

            function a(e, t) {
                r.Z.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function o(e, t) {
                r.Z.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function u(e, t, n) {
                r.Z.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: e,
                    channelId: t,
                    ranges: n
                })
            }

            function l(e) {
                var t = e.guildId,
                    n = e.channelId,
                    r = e.y,
                    a = e.height,
                    o = e.rowHeight,
                    l = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        return Math.max(0, Math.ceil(Math.ceil(e / o)) + t)
                    },
                    s = function(e) {
                        var t = e + (i.dj - 1);
                        c.push([e, t]);
                        return t + 1
                    },
                    c = [],
                    f = l(.5 * a),
                    d = l(r, -f),
                    h = l(r + a, f);
                d > 0 && (d = Math.max(s(0), d));
                d = Math.floor(d / i.dj) * i.dj;
                for (; d <= h;) d = s(d);
                u(t, n, c)
            }
        },
        385028: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                i = n(667294),
                a = n(882723),
                o = n(908741);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function s(e, t, n, r) {
                return e.getAvatarURL(r, t, n)
            }
            const c = i.memo((function(e) {
                var t = e.user,
                    n = e.size,
                    c = void 0 === n ? a.AvatarSizes.SIZE_32 : n,
                    f = e.animate,
                    d = void 0 !== f && f,
                    h = e["aria-hidden"],
                    p = void 0 !== h && h,
                    v = l(e, ["user", "size", "animate", "aria-hidden"]),
                    g = i.useContext(o.Z);
                return (0, r.jsx)(a.Avatar, function(e) {
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
                    src: s(t, (0, a.getAvatarSize)(c), d, g),
                    size: c,
                    "aria-label": p ? void 0 : t.username,
                    "aria-hidden": p
                }, v))
            }))
        },
        973889: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => f
            });
            var r = n(281110),
                i = n(2590),
                a = n(473708);

            function o(e) {
                o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return o(e)
            }

            function u(e, t) {
                return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
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
            var s = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function c(e) {
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
                    var n, r = o(e);
                    if (t) {
                        var i = o(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return u(this, n)
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
                var t = c(n);

                function n(e, r) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    return t.call(this, e, r, a.Z.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: i.yXt.STATUS
                    }))
                }
                return n
            }(r.ZP.V6OrEarlierAPIError)
        },
        357088: (e, t, n) => {
            "use strict";
            n.d(t, {
                $: () => u
            });
            n(785893);
            var r = n(667294),
                i = n(496486),
                a = n.n(i),
                o = n(623934);

            function u(e) {
                r.useEffect((function() {
                    a().forEach(e, (function(e, t) {
                        return (0, o.ym)(t, e)
                    }));
                    return function() {
                        a().forEach(e, (function(e, t) {
                            return (0, o.w5)(t, e)
                        }))
                    }
                }), [e])
            }
        },
        320142: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var r = n(120415);

            function i(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function a(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(t, n);

                        function u(e) {
                            i(o, r, a, u, l, "next", e)
                        }

                        function l(e) {
                            i(o, r, a, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var o = function(e, t) {
                var n, r, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function u(a) {
                    return function(u) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = t.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            };

            function u(e, t) {
                return l.apply(this, arguments)
            }

            function l() {
                return (l = a((function(e, t) {
                    var i, a, u, l;
                    return o(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                0;
                                return [4, Promise.all([n.e(40532), n.e(29392), n.e(39685), n.e(47007), n.e(79249), n.e(69876), n.e(6543), n.e(29342), n.e(84832), n.e(27499), n.e(79913), n.e(27764), n.e(64466), n.e(92465), n.e(45353), n.e(10675), n.e(73679), n.e(73727), n.e(87440), n.e(52555), n.e(61953), n.e(84441), n.e(67367), n.e(14606), n.e(4230), n.e(24501), n.e(6252)]).then(n.bind(n, 624501))];
                            case 1:
                                i = o.sent(), a = i.default;
                                if (null != (u = a(e, {
                                        skipExtensionCheck: t,
                                        analyticsLocations: []
                                    }))) u(null);
                                else if (r.FB) window.open(e);
                                else {
                                    (l = document.createElement("a")).href = e;
                                    l.target = "_blank";
                                    l.rel = "noreferrer noopener";
                                    l.click()
                                }
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
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
        396043: (e, t, n) => {
            "use strict";
            n.d(t, {
                v_: () => Z,
                JS: () => C,
                hH: () => w,
                AB: () => R,
                ZP: () => k,
                oG: () => L,
                kO: () => D,
                yw: () => M
            });
            var r = n(496486),
                i = n.n(r),
                a = n(940060),
                o = n(382060),
                u = n(664625),
                l = n(61209),
                s = n(5544),
                c = n(27851),
                f = n(21372),
                d = n(567403),
                h = n(52467),
                p = n(682776),
                v = n(491260),
                g = n(563367),
                y = n(715107),
                _ = n(464187),
                m = n(407561),
                b = n(652591),
                E = n(563135),
                O = n(671723);
            var I = n(2590),
                T = n(897196);

            function S(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        S(e, t, n[t])
                    }))
                }
                return e
            }

            function P(e) {
                var t = 0;
                for (var n in e) t += 1;
                return t
            }

            function w(e) {
                if (null == e) return null;
                var t = d.Z.getGuild(e);
                if (null == t) return null;
                var n, r = u.default.getId(),
                    i = f.ZP.getMember(e, r),
                    a = s.ZP.getChannels(e),
                    o = a[s.sH].length,
                    l = a[s.Zb].length,
                    h = m.Z.getVoiceStates(e);
                return {
                    guild_id: t.id,
                    guild_size_total: c.Z.getMemberCount(e),
                    guild_num_channels: o + l,
                    guild_num_text_channels: o,
                    guild_num_voice_channels: l,
                    guild_num_roles: P(t.roles),
                    guild_member_num_roles: null != i ? i.roles.length : 0,
                    guild_member_perms: String(null !== (n = p.Z.getGuildPermissions(t)) && void 0 !== n ? n : E.ZP.NONE),
                    guild_is_vip: t.hasFeature(I.oNc.VIP_REGIONS),
                    is_member: null != i,
                    num_voice_channels_active: P(h)
                }
            }

            function N(e, t) {
                return {
                    channel_static_route: t,
                    channel_hidden: !1
                }
            }

            function C(e) {
                if (null == e) return null;
                var t = l.Z.getChannel(e);
                return null == t ? null : Z(t)
            }

            function Z(e) {
                if (null == e) return null;
                var t, n = !1,
                    r = e.getGuildId();
                if (null != r) {
                    var i = function(e) {
                        if (null == e) return !1;
                        var t = e.permissionOverwrites[r];
                        return null != t && a.Z.has(t.deny, I.Plq.VIEW_CHANNEL)
                    };
                    n = o.Ec.has(e.type) && null != e.parent_id ? i(l.Z.getChannel(e.parent_id)) : i(e)
                }
                return {
                    channel_id: e.id,
                    channel_type: e.type,
                    channel_size_total: e.isPrivate() ? e.recipients.length : 0,
                    channel_member_perms: String(null != r && null !== (t = p.Z.getChannelPermissions(e)) && void 0 !== t ? t : E.ZP.NONE),
                    channel_hidden: n
                }
            }

            function R(e) {
                if (null == e) return null;
                var t = l.Z.getChannel(e);
                if (null == t) return null;
                var n, r = h.Z.isVideoEnabled(),
                    i = g.Z.getMediaSessionId();
                return A({
                    channel_id: t.id,
                    channel_type: t.type,
                    guild_id: t.getGuildId(),
                    media_session_id: i
                }, D(t.getGuildId(), t.id, r), {
                    game_name: null != (n = O.ZP.getCurrentGameForAnalytics()) ? n.name : null,
                    game_id: null != n ? n.id : null
                })
            }

            function j(e, t) {
                return null == e ? null != t ? t : null : e.isPrivate() ? null : null !== (r = null !== (n = e.getGuildId()) && void 0 !== n ? n : t) && void 0 !== r ? r : null;
                var n, r
            }

            function M(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!b.default.isThrottled(e)) {
                    var r = !("location" in t) || t.location !== I.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        i = "guild_id" in t ? t.guild_id : r ? _.Z.getGuildId() : null,
                        a = "channel_id" in t ? t.channel_id : r ? y.Z.getChannelId(i) : null,
                        o = l.Z.getChannel(a),
                        u = j(o, i),
                        s = A({}, t, w(u), null != i && null != a && (0, T.AB)(a) ? N(0, a) : Z(o));
                    b.default.track(e, s, {
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
                i()(m.Z.getVoiceStates(e)).filter((function(e) {
                    return e.channelId === t
                })).filter((function(e) {
                    return e.userId !== u.default.getId()
                })).forEach((function(e) {
                    r.voice_state_count++;
                    (e.selfVideo || e.selfStream) && r.video_stream_count++
                }));
                return r
            }

            function L(e, t) {
                var n = {
                    custom_status_count: 0
                };
                i()(m.Z.getVoiceStates(e)).forEach((function(e) {
                    e.channelId === t && null != v.Z.findActivity(e.userId, (function(e) {
                        return e.type === I.IIU.CUSTOM_STATUS
                    })) && n.custom_status_count++
                }));
                return n
            }
            const k = {
                trackWithMetadata: M,
                getVoiceStateMetadata: D
            }
        },
        272200: (e, t, n) => {
            "use strict";
            n.d(t, {
                Qi: () => r,
                iw: () => i,
                Kw: () => a,
                Vh: () => o,
                ub: () => u,
                bB: () => l
            });
            var r, i, a, o, u, l;
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
            }(a || (a = {}));
            ! function(e) {
                e.DISCOVERY = "discovery";
                e.SUGGESTION = "suggestion";
                e.MENTION = "mention";
                e.PASTE = "paste";
                e.RECALL = "recall";
                e.POPULAR_COMMANDS = "popular_commands";
                e.MJ_CHAT_BAR = "mj_chat_bar";
                e.QUERY = "query"
            }(o || (o = {}));
            ! function(e) {
                e[e.BUILT_IN = 1] = "BUILT_IN";
                e[e.FRECENCY = 2] = "FRECENCY";
                e[e.APP = 3] = "APP"
            }(u || (u = {}));
            ! function(e) {
                e[e.CHAT = 0] = "CHAT";
                e[e.APPLICATION_LAUNCHER = 1] = "APPLICATION_LAUNCHER"
            }(l || (l = {}))
        },
        469023: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => C
            });
            var r = n(29891),
                i = n(749131),
                a = n(665118),
                o = n(120491),
                u = n(436622),
                l = n(823975),
                s = n(132457),
                c = n(603339),
                f = n(174144),
                d = n(489752),
                h = n(236563),
                p = n(143901),
                v = n(296047),
                g = n(660772),
                y = n(725060),
                _ = n(777203),
                m = n(544031),
                b = n(747890),
                E = n(730393),
                O = n(363582),
                I = n(183790),
                T = n(796938),
                S = n(787554),
                A = n(516909),
                P = n(890592),
                w = n(296916),
                N = n(2590);

            function C(e, t) {
                switch (e.type) {
                    case N.d4z.DM:
                        return i.Z;
                    case N.d4z.GROUP_DM:
                        return (0, r.V1)(e.id) ? c.Z : O.Z;
                    case N.d4z.GUILD_ANNOUNCEMENT:
                        return e.isNSFW() ? b.Z : (0, w.Z)(e) ? m.Z : _.Z;
                    case N.d4z.GUILD_TEXT:
                        return e.id === (null == t ? void 0 : t.rulesChannelId) ? o.Z : e.isNSFW() ? s.Z : (0, w.Z)(e) ? l.Z : u.Z;
                    case N.d4z.GUILD_FORUM:
                        var n = e.isMediaChannel();
                        return e.isNSFW() ? n ? y.Z : h.Z : (0, w.Z)(e) ? n ? g.Z : d.Z : n ? v.Z : f.Z;
                    case N.d4z.GUILD_MEDIA:
                        return e.isNSFW() ? y.Z : (0, w.Z)(e) ? g.Z : v.Z;
                    case N.d4z.GUILD_STAGE_VOICE:
                        return A.Z;
                    case N.d4z.GUILD_VOICE:
                        return (0, w.Z)(e) ? S.Z : T.Z;
                    case N.d4z.ANNOUNCEMENT_THREAD:
                    case N.d4z.PUBLIC_THREAD:
                        return e.isNSFW() ? E.Z : e.isForumPost() ? p.Z : P.Z;
                    case N.d4z.PRIVATE_THREAD:
                        return e.isNSFW() ? E.Z : I.Z;
                    case N.d4z.GUILD_DIRECTORY:
                        return a.Z;
                    default:
                        return null
                }
            }
        },
        372518: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var r = n(281110),
                i = n(744564),
                a = n(105783),
                o = n(671293),
                u = n(129586),
                l = n(858519),
                s = n(980204),
                c = n(854602),
                f = n(2590),
                d = n(473708);

            function h(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function p(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);

                        function o(e) {
                            h(a, r, i, o, u, "next", e)
                        }

                        function u(e) {
                            h(a, r, i, o, u, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }
            var v = function(e, t) {
                var n, r, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function u(a) {
                    return function(u) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r),
                                        0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = t.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            };

            function g(e, t, n) {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = p((function(e, t, n) {
                    var r, i;
                    return v(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                o.trys.push([0, 2, , 3]);
                                return [4, e()];
                            case 1:
                                return [2, o.sent()];
                            case 2:
                                r = o.sent();
                                (null === (i = r.body) || void 0 === i ? void 0 : i.code) === f.evJ.NON_MODERATED_TAG_REQUIRED && a.Z.show({
                                    title: t,
                                    body: n
                                });
                                return [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
            const _ = {
                resort: function(e) {
                    i.Z.dispatch({
                        type: "RESORT_THREADS",
                        channelId: e
                    })
                },
                createForumTag: function(e, t) {
                    return r.ZP.post({
                        url: f.ANM.FORUM_TAGS(t),
                        body: {
                            name: e.name,
                            emoji_id: e.emojiId,
                            emoji_name: null != e.emojiId ? void 0 : e.emojiName,
                            moderated: e.moderated
                        }
                    })
                },
                updateForumTag: function(e, t) {
                    var n = r.ZP.put({
                        url: f.ANM.FORUM_TAG(t, e.id),
                        body: {
                            name: e.name,
                            emoji_id: e.emojiId,
                            emoji_name: null == e.emojiId ? e.emojiName : void 0,
                            moderated: e.moderated
                        }
                    });
                    g((function() {
                        return n
                    }), d.Z.Messages.FORUM_TAG_EDIT_ERROR, d.Z.Messages.FORUM_POST_NON_MODERATED_TAG_REQUIRED)
                },
                deleteForumTag: function(e, t) {
                    var n = r.ZP.delete({
                        url: f.ANM.FORUM_TAG(e, t)
                    });
                    g((function() {
                        return n
                    }), d.Z.Messages.FORUM_TAG_REMOVE_ERROR, d.Z.Messages.FORUM_POST_NON_MODERATED_TAG_REQUIRED)
                },
                updateForumPostTags: function(e, t) {
                    return p((function() {
                        return v(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, o.Z.unarchiveThreadIfNecessary(e)];
                                case 1:
                                    n.sent();
                                    return [2, r.ZP.patch({
                                        url: f.ANM.CHANNEL(e),
                                        body: {
                                            applied_tags: t
                                        }
                                    })]
                            }
                        }))
                    }))()
                },
                hideAdminOnboarding: function(e, t) {
                    i.Z.dispatch({
                        type: "ADMIN_ONBOARDING_GUIDE_HIDE",
                        channelId: e,
                        hide: t
                    })
                },
                markPostAsSeen: function(e, t, n) {
                    (0, u.a8)((0, s.UP)(e), t, n)
                },
                markPostAsUnseen: function(e, t, n) {
                    (0, u.FL)((0, s.UP)(e), t, n)
                },
                flushSeenItems: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.cs.IMMEDIATE_WITH_COOLDOWN;
                    (0, u.rS)((0, s.UP)(e), t)
                },
                searchForumPosts: function(e, t, n, r) {
                    return p((function() {
                        var a;
                        return v(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    i.Z.dispatch({
                                        type: "FORUM_SEARCH_START",
                                        channelId: t
                                    });
                                    u.label = 1;
                                case 1:
                                    u.trys.push([1, 3, , 4]);
                                    return [4, o.Z.searchThreads(e, t, n, r)];
                                case 2:
                                    a = u.sent();
                                    (0, c.Js)({
                                        guildId: e,
                                        channelId: t,
                                        numSearchResults: a.length
                                    });
                                    i.Z.dispatch({
                                        type: "FORUM_SEARCH_SUCCESS",
                                        channelId: t,
                                        threadIds: a
                                    });
                                    return [3, 4];
                                case 3:
                                    u.sent();
                                    i.Z.dispatch({
                                        type: "FORUM_SEARCH_FAILURE",
                                        channelId: t
                                    });
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))()
                },
                updateForumSearchQuery: function(e, t) {
                    i.Z.dispatch({
                        type: "FORUM_SEARCH_QUERY_UPDATED",
                        channelId: e,
                        query: t
                    })
                },
                clearForumSearch: function(e) {
                    i.Z.dispatch({
                        type: "FORUM_SEARCH_CLEAR",
                        channelId: e
                    })
                }
            }
        },
        980204: (e, t, n) => {
            "use strict";
            n.d(t, {
                UP: () => d,
                rj: () => h,
                Ct: () => p,
                ZP: () => v
            });
            var r = n(129586),
                i = n(858519),
                a = n(854602),
                o = n(734901);

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function l(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function s(e, t) {
                s = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return s(e, t)
            }
            var c = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function f(e) {
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
                    return l(this, n)
                }
            }

            function d(e) {
                return "".concat(i.AT.FORUM_CHANNEL, "_").concat(e)
            }

            function h(e, t, n) {
                (0, r.a8)(d(e), t, n)
            }

            function p(e, t, n) {
                (0, r.FL)(d(e), t, n)
            }
            var v = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && s(e, t)
                }(n, e);
                var t = f(n);

                function n(e) {
                    var r, i = e.guildId,
                        u = e.channelId,
                        l = e.windowId,
                        s = e.isPaused;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    (r = t.call(this, {
                        windowId: l,
                        isPaused: s,
                        id: d(u)
                    })).createFlushSeenItemsFunction = function(e) {
                        var t = r.trackedFeedItems,
                            n = r.channelId,
                            i = {
                                guildId: r.guildId,
                                channelId: n,
                                sessionId: r.sessionId,
                                trackedFeedItems: t,
                                isForcedFlush: null != e
                            };
                        return function() {
                            return function(e) {
                                var t = e.guildId,
                                    n = e.channelId,
                                    r = e.sessionId,
                                    i = e.trackedFeedItems,
                                    o = e.isForcedFlush,
                                    u = [],
                                    l = [],
                                    s = !0,
                                    c = !1,
                                    f = void 0;
                                try {
                                    for (var d, h = Object.keys(i)[Symbol.iterator](); !(s = (d = h.next()).done); s = !0) {
                                        var p = d.value,
                                            v = i[p].computeSeenTimeDestructive(o);
                                        if (v > 0) {
                                            u.push(p);
                                            l.push(v)
                                        }
                                    }
                                } catch (e) {
                                    c = !0;
                                    f = e
                                } finally {
                                    try {
                                        s || null == h.return || h.return()
                                    } finally {
                                        if (c) throw f
                                    }
                                }
                                0 !== u.length && (0, a.qs)({
                                    guildId: t,
                                    channelId: n,
                                    sessionId: r,
                                    postIds: u,
                                    additionalTimes: l
                                })
                            }(i)
                        }
                    };
                    r.guildId = i;
                    r.channelId = u;
                    r.sessionId = (0, o.WW)(u);
                    return r
                }
                return n
            }(i.zQ)
        },
        774930: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n(202351),
                i = n(409125);

            function a() {
                return (0, r.e7)([i.Z], (function() {
                    return null != i.Z.getRemoteSessionId() || null != i.Z.getAwaitingRemoteSessionInfo()
                }))
            }
        },
        908741: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = n(667294).createContext(void 0)
        },
        18882: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => le
            });
            var r = n(496486),
                i = n.n(r),
                a = n(842227),
                o = n(202351),
                u = n(744564),
                l = n(656793),
                s = n(382060),
                c = n(61209),
                f = n(567403),
                d = n(179913),
                h = n(715107),
                p = n(536945),
                v = n(487685),
                g = n(102921);

            function y(e) {
                if (null == e.threadMetadata) return 0;
                var t = 60 * e.threadMetadata.autoArchiveDuration * 1e3;
                return function(e) {
                    if (null == e.threadMetadata) return 0;
                    var t, n = null !== (t = d.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.id,
                        r = g.Z.extractTimestamp(n),
                        i = null != e.threadMetadata.archiveTimestamp ? new Date(e.threadMetadata.archiveTimestamp).getTime() : 0;
                    return Math.max(r, i)
                }(e) + t
            }
            var _ = n(897196);

            function m(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function b(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function E(e) {
                E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return E(e)
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        b(e, t, n[t])
                    }))
                }
                return e
            }

            function I(e, t) {
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

            function T(e, t) {
                return !t || "object" !== A(t) && "function" != typeof t ? function(e) {
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
            var A = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function P(e) {
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
                    var n, r = E(e);
                    if (t) {
                        var i = E(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return T(this, n)
                }
            }
            var w = {},
                N = {},
                C = {},
                Z = {},
                R = {},
                j = {},
                M = null,
                D = {};

            function L() {
                w = {};
                R = {};
                N = {};
                C = {};
                Z = {};
                M = h.Z.getChannelId();
                for (var e in D) clearTimeout(D[e]);
                D = {};
                p.Z.forEachGuild((function(e) {
                    F(e)
                }));
                x()
            }

            function k(e) {
                delete w[e];
                delete R[e];
                delete N[e];
                delete C[e];
                delete Z[e];
                F(e);
                for (var t in C[e]) H(e, t)
            }

            function F(e) {
                var t = p.Z.getThreadsForGuild(e);
                for (var n in t)
                    for (var r in t[n]) {
                        X(r);
                        var i = c.Z.getChannel(r);
                        if (null != i) {
                            var a = v.Z.joinTimestamp(r);
                            if (null != a) {
                                var o = {
                                        channel: i,
                                        joinTimestamp: a.getTime()
                                    },
                                    u = J(i),
                                    l = u.isUnread,
                                    s = u.isRelevant,
                                    f = u.isTimedRelevant;
                                Q(w, i, o, !1);
                                Q(R, i, s ? o : null, !1);
                                Q(N, i, l ? o : null, !1);
                                f && K(i, !0)
                            } else {
                                Q(C, i, i, !1);
                                var h = d.ZP.isForumPostUnread(i.id);
                                Q(Z, i, h ? i : null, !1)
                            }
                        }
                    }
            }

            function x() {
                j = {};
                for (var e in C)
                    for (var t in C[e]) H(e, t)
            }

            function U(e) {
                var t = c.Z.getBasicChannel(e);
                null != t && s.uC.has(t.type) && H(t.guild_id, t.id)
            }

            function H(e, t) {
                var n = c.Z.getChannel(t);
                if (null != n && n.isForumLikeChannel()) {
                    null == j[e] && (j[e] = {});
                    j[e][t] = 0;
                    if (null != C[e] && null != C[e][t]) {
                        var r = f.Z.getGuild(e);
                        if (null != r) {
                            var i = d.ZP.getTrackedAckMessageId(t);
                            if (null == i) {
                                var o = Date.now();
                                null != r.joinedAt && (r.joinedAt instanceof Date ? o = r.joinedAt.getTime() : "string" == typeof r.joinedAt && (o = new Date(r.joinedAt).getTime()));
                                i = a.default.fromTimestamp(o)
                            }
                            for (var u in C[e][t]) t === M ? d.ZP.isNewForumThread(u, t, r) && j[e][t]++ : a.default.compare(u, i) > 0 && !d.ZP.hasOpenedThread(u) && j[e][t]++
                        }
                    }
                }
            }

            function G(e, t, n) {
                if (null == t) return !1;
                var r = c.Z.getChannel(n),
                    i = v.Z.joinTimestamp(n);
                if (null != r && p.Z.isActive(e, t, n)) {
                    if (null != i) {
                        var a = {
                                channel: r,
                                joinTimestamp: i.getTime()
                            },
                            o = J(r),
                            u = o.isUnread,
                            l = o.isRelevant,
                            s = o.isTimedRelevant;
                        Q(w, r, a, !0);
                        Q(R, r, l ? a : null, !0);
                        Q(N, r, u ? a : null, !0);
                        Q(C, r, null, !0);
                        Q(Z, r, null, !0);
                        K(r, s)
                    } else {
                        var f = d.ZP.isForumPostUnread(r.id);
                        Q(w, r, null, !0);
                        Q(N, r, null, !0);
                        Q(R, r, null, !0);
                        Q(C, r, r, !0);
                        Q(Z, r, f ? r : null, !0);
                        X(r.id)
                    }
                    H(e, t)
                } else {
                    $(w, e, t, n);
                    $(R, e, t, n);
                    $(N, e, t, n);
                    $(C, e, t, n);
                    $(Z, e, t, n);
                    X(n);
                    H(e, t)
                }
            }

            function B(e) {
                return G(e.channel.guild_id, e.channel.parent_id, e.channel.id)
            }

            function W(e, t) {
                if (null == t) return !1;
                var n = w[e],
                    r = null == n ? null : n[t];
                if (null != r)
                    for (var i in r)
                        if (r[i].channel.isNSFW()) return !0;
                var a = C[e],
                    o = null == a ? null : a[t];
                if (null != o)
                    for (var u in o)
                        if (o[u].isNSFW()) return !0;
                return !1
            }

            function V(e) {
                var t = c.Z.getChannel(e.id);
                return !(null == t || !p.Z.isActive(e.guildId, t.parent_id, e.id)) && G(t.guild_id, t.parent_id, t.id)
            }

            function z(e) {
                var t = c.Z.getChannel(e.channelId);
                if (null == t) Y();
                else {
                    var n = t.guild_id,
                        r = t.parent_id;
                    if (!s.Ec.has(t.type)) {
                        var i;
                        if (Number(null === (i = j[n]) || void 0 === i ? void 0 : i[t.id]) > 0) {
                            H(n, t.id);
                            return !0
                        }
                        return !1
                    }
                    if (null == r) return !1;
                    if (ee(w, t)) {
                        var a = J(t),
                            o = a.isUnread,
                            u = a.isRelevant;
                        K(t, a.isTimedRelevant);
                        var l = ee(N, t),
                            f = ee(R, t);
                        if (o === l && u === f) return !1;
                        var h = w[n][r][t.id],
                            p = u ? h : null;
                        Q(N, t, o ? h : null, !0);
                        Q(R, t, p, !0);
                        H(n, r)
                    } else {
                        var v = ee(Z, t),
                            g = d.ZP.isForumPostUnread(t.id);
                        if (g === v) return !1;
                        Q(Z, t, g ? t : null, !0)
                    }
                }
            }

            function Y() {
                N = {};
                R = {};
                for (var e in w)
                    for (var t in w[e])
                        for (var n in w[e][t]) {
                            var r = w[e][t][n],
                                i = J(r.channel),
                                a = i.isUnread,
                                o = i.isRelevant,
                                u = i.isTimedRelevant;
                            a && Q(N, r.channel, r, !1);
                            o && Q(R, r.channel, r, !1);
                            K(r.channel, u)
                        }
                Z = {};
                for (var l in C)
                    for (var s in C[l])
                        for (var c in C[l][s]) {
                            var f = C[l][s][c];
                            d.ZP.isForumPostUnread(c) && Q(Z, f, f, !1)
                        }
                x()
            }

            function q() {
                var e = M;
                if ((M = h.Z.getChannelId()) === e) return !1;
                U(e);
                U(M)
            }

            function J(e) {
                var t = d.ZP.getMentionCount(e.id) > 0,
                    n = d.ZP.hasRelevantUnread(e) && (!v.Z.isMuted(e.id) || t) || (0, l.c)() && t,
                    r = e.hasFlag(_.zZ.PINNED),
                    i = e.isActiveThread(),
                    a = i && y(e) > Date.now();
                return {
                    isUnread: (i || r) && n,
                    isRelevant: a || r || n,
                    isTimedRelevant: a
                }
            }

            function K(e, t) {
                X(e.id);
                t && function(e) {
                    D[e.id] = setTimeout((function() {
                        var t = c.Z.getChannel(e.id);
                        null != t && u.Z.dispatch({
                            type: "THREAD_UPDATE",
                            channel: t
                        })
                    }), y(e) - Date.now() + 1)
                }(e)
            }

            function X(e) {
                if (e in D) {
                    clearTimeout(D[e]);
                    delete D[e]
                }
            }

            function Q(e, t, n, r) {
                var a = t.guild_id,
                    o = t.parent_id,
                    u = t.id;
                if (null != a && null != o && null != u) {
                    a in e || (e[a] = {});
                    o in e[a] || (e[a][o] = {});
                    r && (e[a] = I(O({}, e[a]), b({}, o, O({}, e[a][o]))));
                    if (null === n) {
                        delete e[a][o][u];
                        i().isEmpty(e[a][o]) && delete e[a][o]
                    } else e[a][o][u] = n
                }
            }

            function $(e, t, n, r) {
                if (null != t && null != n && null != r && te(e, t, n, r)) {
                    e[t] = I(O({}, e[t]), b({}, n, O({}, e[t][n])));
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
                ae = {},
                oe = {},
                ue = function(e) {
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
                    var t = P(n);

                    function n() {
                        m(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function() {
                        this.waitFor(p.Z, c.Z, v.Z, d.ZP);
                        this.syncWith([h.Z], q)
                    };
                    r.hasActiveJoinedUnreadThreads = function(e, t) {
                        return e in N && t in N[e]
                    };
                    r.getActiveUnjoinedThreadsForParent = function(e, t) {
                        var n;
                        return e in C && null !== (n = C[e][t]) && void 0 !== n ? n : ae
                    };
                    r.getActiveJoinedThreadsForParent = function(e, t) {
                        var n;
                        return e in w && null !== (n = w[e][t]) && void 0 !== n ? n : ie
                    };
                    r.getActiveJoinedThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = w[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveJoinedUnreadThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = N[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveJoinedUnreadThreadsForParent = function(e, t) {
                        var n;
                        return null !== (n = this.getActiveJoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : ie
                    };
                    r.getActiveJoinedRelevantThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = R[e]) && void 0 !== t ? t : ne
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
                        return null !== (t = Z[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveUnjoinedUnreadThreadsForParent = function(e, t) {
                        var n;
                        return null !== (n = this.getActiveUnjoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : ie
                    };
                    r.getNewThreadCountsForGuild = function(e) {
                        var t;
                        return null !== (t = j[e]) && void 0 !== t ? t : oe
                    };
                    r.computeAllActiveJoinedThreads = function(e) {
                        var t = [];
                        for (var n in w)
                            if (n === e || null == e)
                                for (var r in w[n])
                                    for (var i in w[n][r]) t.push(w[n][r][i].channel);
                        return t
                    };
                    r.getNewThreadCount = function(e, t) {
                        var n, r;
                        return null !== (r = null === (n = j[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : 0
                    };
                    r.getActiveThreadCount = function(e, t) {
                        var n, r, a, o;
                        return i().size(null !== (a = null === (n = w[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== a ? a : {}) + i().size(null !== (o = null === (r = C[e]) || void 0 === r ? void 0 : r[t]) && void 0 !== o ? o : {})
                    };
                    r.__getLocalVars = function() {
                        return {
                            activeJoinedThreads: w,
                            activeJoinedUnreadThreads: N,
                            activeUnjoinedThreads: C,
                            activeUnjoinedUnreadThreads: Z,
                            activeJoinedRelevantThreads: R,
                            newThreadCounts: j,
                            selectedChannelId: M,
                            timers: D,
                            NO_GUILD_UNJOINED_THREADS: re,
                            NO_JOINED_THREADS: ie,
                            NO_UNJOINED_THREADS: ae,
                            NO_NEW_THREADS: oe
                        }
                    };
                    return n
                }(o.ZP.Store);
            ue.displayName = "ActiveJoinedThreadsStore";
            const le = new ue(u.Z, {
                CONNECTION_OPEN: L,
                OVERLAY_INITIALIZE: L,
                THREAD_LIST_SYNC: function(e) {
                    return k(e.guildId)
                },
                LOAD_THREADS_SUCCESS: L,
                LOAD_ARCHIVED_THREADS_SUCCESS: L,
                SEARCH_FINISH: L,
                GUILD_CREATE: function(e) {
                    return k(e.guild.id)
                },
                GUILD_DELETE: L,
                CURRENT_USER_UPDATE: L,
                THREAD_CREATE: B,
                THREAD_UPDATE: B,
                THREAD_DELETE: B,
                CHANNEL_UPDATES: function(e) {
                    var t = e.channels,
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var a, o = t[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
                            var u = a.value;
                            if (u.isNSFW() !== W(u.guild_id, u.parent_id)) {
                                L();
                                return
                            }
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == o.return || o.return()
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
                        if (t.guild_id in w && t.parent_id in w[t.guild_id]) {
                            delete w[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in N && t.parent_id in N[t.guild_id]) {
                            delete N[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in R && t.parent_id in R[t.guild_id]) {
                            Object.keys(R[t.guild_id][t.parent_id]).forEach(X);
                            delete R[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in C && t.parent_id in C[t.guild_id]) {
                            delete C[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in Z && t.parent_id in Z[t.guild_id]) {
                            delete Z[t.guild_id][t.parent_id];
                            n = !0
                        }
                        n && H(t.guild_id, t.parent_id)
                    }
                    return n
                },
                THREAD_MEMBER_UPDATE: V,
                THREAD_MEMBERS_UPDATE: V,
                LOAD_MESSAGES_SUCCESS: z,
                MESSAGE_CREATE: z,
                MESSAGE_DELETE: z,
                MESSAGE_DELETE_BULK: z,
                MESSAGE_ACK: z,
                CHANNEL_ACK: z,
                CHANNEL_LOCAL_ACK: z,
                CHANNEL_SELECT: function(e) {
                    z(e);
                    q()
                },
                PASSIVE_UPDATE_V1: function(e) {
                    null != e.channels && Y()
                },
                WINDOW_FOCUS: Y,
                UPDATE_CHANNEL_DIMENSIONS: Y,
                DRAWER_OPEN: Y,
                DRAWER_CLOSE: Y,
                BULK_ACK: Y
            })
        },
        431611: (e, t, n) => {
            "use strict";
            n.d(t, {
                r7: () => E,
                FO: () => O,
                nA: () => I,
                qQ: () => T
            });
            var r = n(667294),
                i = n(496486),
                a = n.n(i),
                o = n(202351),
                u = n(372518),
                l = n(61209),
                s = n(682776),
                c = n(179913),
                f = n(72580),
                d = n(102921),
                h = n(536945),
                p = n(359067),
                v = n(487685),
                g = n(671293),
                y = n(217973),
                _ = n(520453);

            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function b(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            o = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return m(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function E() {
                r.useEffect((function() {
                    (0, y.A_)()
                }), [])
            }

            function O(e) {
                var t = function(e) {
                        var t = (0, o.Wu)([s.Z, h.Z, l.Z], (function() {
                            return a()(h.Z.getThreadsForParent(e.guild_id, e.id)).values().map((function(e) {
                                var t = e.id;
                                return l.Z.getChannel(t)
                            })).filter(f.lm).filter((function(e) {
                                return s.Z.can(_.Pl.VIEW_CHANNEL, e)
                            })).map((function(e) {
                                return e.id
                            })).value()
                        }), [e.guild_id, e.id]);
                        return r.useMemo((function() {
                            return a()(t).sort((function(e, t) {
                                return d.Z.compare(c.ZP.lastMessageId(e), c.ZP.lastMessageId(t))
                            })).reverse().value()
                        }), [t])
                    }(e),
                    n = b((0, o.e7)([v.Z], (function() {
                        return a().partition(t, (function(e) {
                            return v.Z.hasJoined(e)
                        }))
                    }), [t], o.pF), 2);
                return {
                    joinedThreadIds: n[0],
                    unjoinedThreadIds: n[1]
                }
            }

            function I(e) {
                var t = (0, o.Wu)([s.Z, h.Z, l.Z], (function() {
                    return a()(h.Z.getThreadsForGuild(e)).values().map((function(e) {
                        return a().values(e)
                    })).flatten().map((function(e) {
                        var t = e.id;
                        return l.Z.getChannel(t)
                    })).filter(f.lm).filter((function(e) {
                        return s.Z.can(_.Pl.VIEW_CHANNEL, e)
                    })).map((function(e) {
                        return e.id
                    })).value()
                }), [e]);
                return r.useMemo((function() {
                    return a()(t).sort((function(e, t) {
                        return d.Z.compare(c.ZP.lastMessageId(e), c.ZP.lastMessageId(t))
                    })).reverse().value()
                }), [t])
            }

            function T(e, t, n) {
                var i = (0, o.cj)([p.Z], (function() {
                        return {
                            loading: p.Z.isLoading(e.id, t, n),
                            isInitialLoad: p.Z.isInitialLoad,
                            canLoadMore: p.Z.canLoadMore,
                            nextOffset: p.Z.nextOffset
                        }
                    })),
                    c = i.canLoadMore,
                    f = i.loading,
                    d = i.nextOffset,
                    h = i.isInitialLoad,
                    v = r.useCallback((function() {
                        s.Z.can(_.Pl.READ_MESSAGE_HISTORY, e) && g.Z.loadArchivedThreads(e.guild_id, e.id, t, n, d)
                    }), [e, t, n, d]);
                r.useEffect((function() {
                    h && v()
                }), [e.id, t, n, h]);
                r.useEffect((function() {
                    u.Z.resort(e.id)
                }), [e.id]);
                return {
                    threadIds: (0, o.Wu)([p.Z, l.Z, s.Z], (function() {
                        return a()(p.Z.getThreads(e.id, t, n)).filter((function(e) {
                            var t = l.Z.getChannel(e);
                            return null != t && s.Z.can(_.Pl.VIEW_CHANNEL, t)
                        })).value()
                    })),
                    canLoadMore: c,
                    loading: f || h,
                    loadMore: v
                }
            }
        },
        225386: (e, t, n) => {
            "use strict";
            n.d(t, {
                tM: () => g,
                NE: () => y,
                ki: () => _,
                Xu: () => m,
                cD: () => b,
                Ek: () => O,
                JQ: () => I,
                C7: () => T,
                tc: () => P,
                kn: () => w,
                $R: () => N,
                RG: () => C,
                xl: () => Z,
                Xb: () => j,
                Y: () => D,
                Gu: () => L
            });
            var r = n(496486),
                i = n.n(r),
                a = n(940060),
                o = n(202351),
                u = n(249139),
                l = n(774930),
                s = n(791707),
                c = n(382060),
                f = n(664625),
                d = n(61209),
                h = n(682776),
                p = n(18882),
                v = n(2590),
                g = (0, u.Z)({
                    id: "2022-07_voice_in_threads",
                    label: "Voice in Threads",
                    kind: "guild",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "On",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function y(e, t) {
                return E((0, o.e7)([h.Z], (function() {
                    var t = e.isForumLikeChannel() ? v.Plq.SEND_MESSAGES : a.Z.combine(v.Plq.CREATE_PUBLIC_THREADS, v.Plq.READ_MESSAGE_HISTORY);
                    return h.Z.can(t, e)
                }), [e]), e, t)
            }

            function _(e, t) {
                var n = e.isForumLikeChannel() ? v.Plq.SEND_MESSAGES : a.Z.combine(v.Plq.CREATE_PUBLIC_THREADS, v.Plq.READ_MESSAGE_HISTORY);
                return E(h.Z.can(n, e), e, t)
            }

            function m(e) {
                var t = (0, o.e7)([h.Z], (function() {
                    return h.Z.can(a.Z.combine(v.Plq.CREATE_PRIVATE_THREADS), e)
                }), [e]);
                return e.type === v.d4z.GUILD_TEXT && E(t, e)
            }

            function b(e) {
                var t = y(e),
                    n = m(e);
                return t || n
            }

            function E(e, t, n) {
                if (__OVERLAY__) return !1;
                if (!e) return !1;
                if (!c.uC.has(t.type)) return !1;
                if (null != n) {
                    if (n.hasFlag(v.iLy.HAS_THREAD)) return !1;
                    if ((0, s.Z)(n)) return !1
                }
                return !0
            }

            function O(e) {
                var t = (0, o.e7)([d.Z], (function() {
                    return d.Z.getChannel(e.id)
                }), [e]);
                return function(e, t, n) {
                    return !!t.hasFlag(v.iLy.HAS_THREAD) && (null != n && !!e)
                }((0, o.e7)([h.Z], (function() {
                    return h.Z.can(v.Plq.VIEW_CHANNEL, t)
                }), [t]), e, t)
            }

            function I(e) {
                return (0, o.cj)([p.Z, h.Z], (function() {
                    var t = p.Z.getActiveJoinedThreadsForParent(e.guild_id, e.id),
                        n = p.Z.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
                        r = p.Z.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
                        a = i()(n).some((function(e) {
                            return h.Z.can(v.Plq.VIEW_CHANNEL, e.channel)
                        })),
                        o = i()(t).some((function(e) {
                            return !(e.channel.id in n) && h.Z.can(v.Plq.VIEW_CHANNEL, e.channel)
                        })),
                        u = i()(r).some((function(e) {
                            return h.Z.can(v.Plq.VIEW_CHANNEL, e)
                        }));
                    return {
                        hasActiveThreads: a || o || u,
                        hasMoreActiveThreads: u || o
                    }
                }))
            }

            function T(e) {
                var t = (0, o.e7)([d.Z], (function() {
                        return d.Z.getChannel(null == e ? void 0 : e.parent_id)
                    })),
                    n = (0, o.e7)([h.Z], (function() {
                        return null != t && h.Z.can(v.Plq.MANAGE_THREADS, t)
                    }), [t]),
                    r = (0, o.e7)([f.default], (function() {
                        return f.default.getId()
                    }));
                return null != e && null != t && (!!e.isThread() && (!!n || !e.isLockedThread() && e.ownerId === r))
            }

            function S(e, t) {
                return null != e && t.can(v.Plq.SEND_MESSAGES_IN_THREADS, e)
            }

            function A(e, t, n) {
                var r;
                return !(null == e || !e.isThread()) && ((null === (r = e.threadMetadata) || void 0 === r ? void 0 : r.locked) ? n : t)
            }

            function P(e) {
                var t = (0, o.e7)([h.Z], (function() {
                        return S(e, h.Z)
                    })),
                    n = j(e);
                return A(e, t, n)
            }

            function w(e) {
                return A(e, S(e, h.Z), M(e))
            }

            function N(e) {
                var t, n = (0, o.e7)([h.Z], (function() {
                    return null != e && h.Z.can(v.Plq.SEND_MESSAGES_IN_THREADS, e)
                }));
                return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && !0 !== (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) && n)
            }

            function C(e) {
                var t;
                return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && !0 !== (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) && h.Z.can(v.Plq.SEND_MESSAGES_IN_THREADS, e))
            }

            function Z(e) {
                var t = h.Z.can(v.Plq.MANAGE_THREADS, e);
                return e.isArchivedLockedThread() && !t
            }

            function R(e, t) {
                return null != e && t.can(v.Plq.MANAGE_THREADS, e)
            }

            function j(e) {
                return (0, o.e7)([h.Z], (function() {
                    return R(e, h.Z)
                }))
            }

            function M(e) {
                return R(e, h.Z)
            }

            function D(e) {
                var t = (0, l.Z)(),
                    n = (0, o.e7)([h.Z], (function() {
                        return h.Z.can(v.Plq.CONNECT, e)
                    })),
                    r = N(e),
                    i = g.useExperiment({
                        guildId: e.guild_id,
                        location: "e791ea_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled;
                return !t && e.isVocalThread() && i && n && r
            }

            function L(e) {
                var t = j(e);
                return e.isLockedThread() && !t
            }
        },
        270983: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => H
            });
            var r = n(785893),
                i = n(667294),
                a = n(294184),
                o = n.n(a),
                u = n(202351),
                l = n(882723),
                s = n(682776),
                c = n(190186),
                f = n(189865),
                d = n(890592),
                h = n(671293),
                p = n(225386),
                v = n(217973),
                g = n(465637),
                y = n(473708),
                _ = n(661570),
                m = n.n(_);

            function b(e) {
                var t = e.channel,
                    n = e.header,
                    i = e.startThread,
                    a = (0, p.NE)(t),
                    o = (0, p.Xu)(t);
                return (0, r.jsxs)("div", {
                    className: m().container,
                    children: [(0, r.jsxs)("div", {
                        className: m().iconContainer,
                        children: [(0, r.jsx)("div", {
                            className: m().icon,
                            children: (0, r.jsx)(d.Z, {
                                width: 36,
                                height: 36
                            })
                        }), (0, r.jsx)(g.Z, {
                            className: m().stars
                        })]
                    }), (0, r.jsx)(l.Heading, {
                        className: m().header,
                        variant: "heading-xl/semibold",
                        children: n
                    }), (0, r.jsx)(l.Text, {
                        color: "header-secondary",
                        variant: "text-md/normal",
                        children: y.Z.Messages.THREAD_BROWSER_EMPTY_STATE_SUBTEXT
                    }), a || o ? (0, r.jsx)(l.Button, {
                        className: m().cta,
                        onClick: i,
                        children: y.Z.Messages.CREATE_THREAD
                    }) : null]
                })
            }
            var E = n(661847),
                O = n(103738),
                I = n.n(O);

            function T(e) {
                var t = e.channel,
                    n = e.threadIds,
                    a = e.startThread,
                    u = e.goToThread,
                    s = i.useCallback((function(e) {
                        return (0, r.jsx)(E.Z, {
                            threadId: n[e.row],
                            goToThread: u
                        }, "".concat(e.section, "-").concat(e.row))
                    }), [n, u]);
                return 0 === n.length ? (0, r.jsx)(b, {
                    channel: t,
                    header: y.Z.Messages.THREAD_BROWSER_EMPTY_STATE_HEADER,
                    startThread: a
                }) : (0, r.jsx)(l.List, {
                    className: o()(I().list, I().activeThreadsList),
                    fade: !0,
                    sections: [n.length],
                    sectionHeight: 0,
                    rowHeight: 80,
                    renderRow: s,
                    renderSection: function() {
                        return null
                    },
                    chunkSize: 20
                })
            }
            var S = n(920883),
                A = n(431611),
                P = new Set;

            function w(e) {
                var t = e.channel,
                    n = e.startThread,
                    a = e.goToThread,
                    o = (0, A.FO)(t),
                    u = o.joinedThreadIds,
                    s = o.unjoinedThreadIds,
                    c = (0, A.qQ)(t, S.z.LATEST_ACTIVITY, P),
                    f = c.threadIds,
                    d = c.canLoadMore,
                    h = c.loading,
                    p = c.loadMore,
                    v = i.useRef(null);
                (0, A.r7)();
                var g = i.useCallback((function(e) {
                        var t = 0 === e.section ? u : 1 === e.section ? s : f;
                        return (0, r.jsx)(E.Z, {
                            threadId: t[e.row],
                            goToThread: a
                        }, "".concat(e.section, "-").concat(e.row))
                    }), [f, u, s, a]),
                    _ = i.useCallback((function(e) {
                        return 0 === e.section ? (0, r.jsx)(N, {
                            text: y.Z.Messages.THREAD_BROWSER_JOINED_HEADER.format({
                                count: u.length
                            })
                        }, e.section) : 1 === e.section ? (0, r.jsx)(N, {
                            text: y.Z.Messages.THREAD_BROWSER_OTHER_HEADER.format({
                                count: s.length
                            })
                        }, e.section) : (0, r.jsx)(N, {
                            text: y.Z.Messages.THREAD_BROWSER_ARCHIVED_HEADER
                        }, e.section)
                    }), [u.length, s.length]),
                    m = i.useCallback((function(e) {
                        return 1 === e && u.length > 0 || 2 === e && (u.length > 0 || s.length > 0) ? 64 : 32
                    }), [u.length, s.length]),
                    O = i.useCallback((function() {
                        var e, t = null === (e = v.current) || void 0 === e ? void 0 : e.getScrollerState();
                        if (null != t) {
                            var n = t.scrollTop + t.offsetHeight;
                            t.scrollHeight - n < 200 && p()
                        }
                    }), [p]);
                return 0 === u.length && 0 === s.length && 0 === f.length ? h ? (0, r.jsx)("div", {
                    className: I().list,
                    children: (0, r.jsx)(l.Spinner, {
                        className: I().spinner
                    })
                }) : (0, r.jsx)("div", {
                    className: I().list,
                    children: (0, r.jsx)(b, {
                        channel: t,
                        header: y.Z.Messages.THREAD_BROWSER_EMPTY_STATE_HEADER,
                        startThread: n
                    })
                }) : (0, r.jsx)(l.List, {
                    ref: v,
                    className: I().list,
                    fade: !0,
                    sections: [u.length, s.length, f.length],
                    sectionHeight: m,
                    rowHeight: 80,
                    renderRow: g,
                    renderSection: _,
                    chunkSize: 20,
                    onScroll: d ? O : void 0
                })
            }

            function N(e) {
                var t = e.text;
                return (0, r.jsx)(l.Text, {
                    color: "header-secondary",
                    variant: "text-xs/bold",
                    className: I().sectionHeader,
                    children: t
                })
            }
            var C = n(367406),
                Z = n(379364),
                R = n(2590),
                j = n(793191),
                M = n.n(j);

            function D(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function L(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function k(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function F(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        k(e, t, n[t])
                    }))
                }
                return e
            }

            function x(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            o = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return D(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return D(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var U = function(e, t) {
                var n, r, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function u(a) {
                    return function(u) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = t.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            };

            function H(e) {
                var t, n, a, c, g, _, m, b, E, O, I, S, A, P, N, j, D, k, H = e.channel,
                    B = e.className,
                    W = e.onClose,
                    V = (0, u.e7)([s.Z], (function() {
                        return s.Z.can(R.Plq.READ_MESSAGE_HISTORY, H)
                    })),
                    z = (0, p.cD)(H),
                    Y = function() {
                        W();
                        (0, C.R6)(H, void 0, "Thread Browser Empty State")
                    },
                    q = i.useCallback((function(e, t) {
                        W();
                        (0, C.ok)(e, !t, Z.on.BROWSER)
                    }), [W]),
                    J = (t = H.guild_id, n = H.id, a = x(i.useState(""), 2), c = a[0], g = a[1], _ = x(i.useState(!1), 2), m = _[0], b = _[1], E = x(i.useState(!1), 2), O = E[0], I = E[1], S = x(i.useState([]), 2), A = S[0], P = S[1], N = (k = (D = function() {
                        var e;
                        return U(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null == c || "" === c) return [2];
                                    if (m) return [2];
                                    b(!0);
                                    r.label = 1;
                                case 1:
                                    r.trys.push([1, , 3, 4]);
                                    return [4, h.Z.searchThreads(t, n, c)];
                                case 2:
                                    e = r.sent();
                                    I(!0);
                                    P(e);
                                    return [3, 4];
                                case 3:
                                    b(!1);
                                    return [7];
                                case 4:
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(n, r) {
                            var i = D.apply(e, t);

                            function a(e) {
                                L(i, n, r, a, o, "next", e)
                            }

                            function o(e) {
                                L(i, n, r, a, o, "throw", e)
                            }
                            a(void 0)
                        }))
                    }), function() {
                        return k.apply(this, arguments)
                    }), j = function(e) {
                        g(e);
                        0 === e.length && I(!1)
                    }, {
                        query: c,
                        setQuery: j,
                        isLoading: m,
                        hasResults: O,
                        submit: N,
                        results: A
                    });
                i.useEffect((function() {
                    (0, v.A_)()
                }), []);
                return (0, r.jsx)("div", {
                    className: o()(B, M().container),
                    children: (0, r.jsx)(l.HeadingLevel, {
                        component: (0, r.jsxs)("div", {
                            className: M().header,
                            children: [(0, r.jsx)(d.Z, {
                                className: M().threadIcon
                            }), (0, r.jsx)(l.Heading, {
                                variant: "heading-md/semibold",
                                className: M().title,
                                children: y.Z.Messages.THREAD_BROWSER_TITLE
                            }), V ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("div", {
                                    className: M().divider
                                }), (0, r.jsx)(G, F({}, J))]
                            }) : null, (0, r.jsx)("div", {
                                className: M().spacer
                            }), z ? (0, r.jsx)(l.Button, {
                                size: l.Button.Sizes.MIN,
                                className: M().createButton,
                                onClick: function() {
                                    W();
                                    (0, C.R6)(H, void 0, "Thread Browser Toolbar")
                                },
                                children: y.Z.Messages.CREATE
                            }) : null, (0, r.jsx)(l.Clickable, {
                                className: M().closeIcon,
                                onClick: W,
                                "aria-label": y.Z.Messages.CLOSE,
                                children: (0, r.jsx)(f.Z, {})
                            })]
                        }),
                        children: J.hasResults ? (0, r.jsx)(T, {
                            channel: H,
                            startThread: Y,
                            goToThread: q,
                            threadIds: J.results
                        }) : (0, r.jsx)(w, {
                            channel: H,
                            startThread: Y,
                            goToThread: q
                        })
                    })
                })
            }

            function G(e) {
                var t = e.query,
                    n = e.setQuery,
                    i = e.submit,
                    a = e.isLoading;
                return (0, r.jsx)(c.Z, {
                    autoFocus: !0,
                    className: M().searchBox,
                    query: t,
                    isLoading: a,
                    onChange: function(e) {
                        return n(e)
                    },
                    onClear: function() {
                        return n("")
                    },
                    onKeyDown: function(e) {
                        return "Enter" === e.key && i()
                    },
                    placeholder: y.Z.Messages.SEARCH_THREAD_NAMES,
                    "aria-label": y.Z.Messages.SEARCH_THREAD_NAMES
                })
            }
        },
        321588: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => f
            });
            var r = n(785893),
                i = n(667294),
                a = n(882723),
                o = n(217973),
                u = n(270983),
                l = n(473708),
                s = n(774630),
                c = n.n(s);

            function f(e) {
                var t = e.channel,
                    n = e.onClose,
                    s = e.transitionState;
                i.useEffect((function() {
                    (0, o.U4)()
                }), []);
                return (0, r.jsx)(a.ModalRoot, {
                    className: c().modal,
                    transitionState: s,
                    "aria-label": l.Z.Messages.THREADS,
                    size: a.ModalSize.DYNAMIC,
                    children: (0, r.jsx)(u.Z, {
                        className: c().browser,
                        channel: t,
                        onClose: n
                    })
                })
            }
        },
        661847: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => B
            });
            var r = n(785893),
                i = n(667294),
                a = n(202351),
                o = n(882723),
                u = n(971402),
                l = n(61209),
                s = n(984216),
                c = n(473903),
                f = n(96606),
                d = n(666613),
                h = n(385028),
                p = n(357088),
                v = n(469023),
                g = n(804808),
                y = n(550131),
                _ = n(21372),
                m = n(179913),
                b = n(840922),
                E = n(890592),
                O = n(763536),
                I = n(102921),
                T = n(749565),
                S = n(591684),
                A = n(217973),
                P = n(939198),
                w = n(473708),
                N = n(469076),
                C = n.n(N);

            function Z(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function R(e) {
                return e.isActiveThread() ? (0, r.jsx)(j, {
                    channel: e
                }) : (0, r.jsx)(L, {
                    channel: e
                })
            }

            function j(e) {
                var t = e.channel,
                    n = (0, a.e7)([S.Z], (function() {
                        return S.Z.getMostRecentMessage(t.id)
                    }));
                return null == n ? (0, r.jsx)(M, {
                    channel: t
                }) : (0, r.jsx)(D, {
                    channel: t,
                    message: n
                })
            }

            function M(e) {
                var t = e.channel,
                    n = (0, A.Ok)(t);
                return (0, r.jsxs)(o.Text, {
                    className: C().subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: [w.Z.Messages.THREAD_BROWSER_NO_RECENT_MESSAGES, "  •  ", (0, A.Ye)(n)]
                })
            }

            function D(e) {
                var t, n = e.channel,
                    u = e.message;
                (0, p.$)(Z({}, n.guild_id, [u.author.id]));
                var l = (0, a.e7)([c.default], (function() {
                        return null !== (t = c.default.getUser(u.author.id)) && void 0 !== t ? t : u.author
                    })),
                    s = (0, y.ZP)(u),
                    f = s.nick,
                    d = s.colorString,
                    v = (0, a.e7)([b.Z], (function() {
                        return b.Z.isBlocked(u.author.id)
                    })),
                    _ = i.useMemo((function() {
                        var e = null != u.content && "" !== u.content ? (0, g.ZP)(u, {
                                formatInline: !0
                            }).content : null,
                            t = (0, O.f)(u, e, v, C().messageContent, {
                                iconClass: C().messageContentIcon,
                                iconSize: P.WW
                            }),
                            n = t.contentPlaceholder,
                            i = t.renderedContent,
                            a = t.icon;
                        return (0, r.jsxs)(r.Fragment, {
                            children: [null != i ? i : (0, r.jsx)("span", {
                                children: n
                            }), a]
                        })
                    }), [u, v]);
                return (0, r.jsxs)(o.Text, {
                    className: C().subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: [(0, r.jsx)(h.Z, {
                        className: C().avatar,
                        user: l,
                        size: o.AvatarSizes.SIZE_16
                    }), (0, r.jsx)(o.NameWithRole, {
                        name: f,
                        color: d,
                        className: C().authorName
                    }), ": ", _, "  •  ", (0, A.Ye)(I.Z.extractTimestamp(u.id))]
                })
            }

            function L(e) {
                var t, n, i = e.channel,
                    u = (0, a.e7)([m.ZP], (function() {
                        return m.ZP.lastMessageId(i.id)
                    })),
                    l = null == u ? new Date(null !== (n = null === (t = i.threadMetadata) || void 0 === t ? void 0 : t.archiveTimestamp) && void 0 !== n ? n : Date.now()).getTime() : I.Z.extractTimestamp(u);
                (0, p.$)(Z({}, i.guild_id, [i.ownerId]));
                var s, f = (0, a.e7)([c.default], (function() {
                        return c.default.getUser(i.ownerId)
                    })),
                    d = (0, a.e7)([_.ZP], (function() {
                        return _.ZP.getMember(i.guild_id, i.ownerId)
                    })),
                    g = null !== (s = (0, v.Z)(i)) && void 0 !== s ? s : E.Z;
                return (0, r.jsx)(o.Text, {
                    className: C().subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: null == f ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: C().noAvatarIcon,
                            children: (0, r.jsx)(g, {
                                width: 10,
                                height: 10
                            })
                        }), w.Z.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
                            time: (0, A.Ye)(l)
                        })]
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(h.Z, {
                            className: C().avatar,
                            user: f,
                            size: o.AvatarSizes.SIZE_16
                        }), w.Z.Messages.THREAD_BROWSER_STARTED_BY.format({
                            authorHook: function(e, t) {
                                var n, i;
                                return (0, r.jsx)(o.NameWithRole, {
                                    className: C().startedByName,
                                    color: null !== (n = null == d ? void 0 : d.colorString) && void 0 !== n ? n : void 0,
                                    name: null !== (i = null == d ? void 0 : d.nick) && void 0 !== i ? i : T.ZP.getName(f)
                                }, t)
                            }
                        }), (0, r.jsx)("span", {
                            className: C().bullet,
                            children: "•"
                        }), w.Z.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
                            time: (0, A.Ye)(l)
                        })]
                    })
                })
            }
            var k = n(379364);

            function F(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function x(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);

                        function o(e) {
                            F(a, r, i, o, u, "next", e)
                        }

                        function u(e) {
                            F(a, r, i, o, u, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function U(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function H(e, t) {
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
            var G = function(e, t) {
                var n, r, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function u(a) {
                    return function(u) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = t.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            };
            const B = i.memo((function(e) {
                var t = e.threadId,
                    i = e.goToThread,
                    s = e.showChannelName,
                    c = (0, a.e7)([l.Z], (function() {
                        return l.Z.getChannel(t)
                    })),
                    f = (0, a.e7)([l.Z], (function() {
                        return l.Z.getChannel(c.parent_id)
                    }));
                return (0, r.jsxs)(o.Clickable, {
                    className: C().container,
                    onClick: function(e) {
                        return i(c, e.shiftKey)
                    },
                    onContextMenu: function(e) {
                        return (0, u.jW)(e, x((function() {
                            var e, t;
                            return G(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(6543), n.e(27499), n.e(45353), n.e(52555), n.e(61953), n.e(20419), n.e(58969), n.e(47749), n.e(43043), n.e(97516)]).then(n.bind(n, 881580))];
                                    case 1:
                                        e = i.sent(), t = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(t, H(function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        r = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                    }))));
                                                    r.forEach((function(t) {
                                                        U(e, t, n[t])
                                                    }))
                                                }
                                                return e
                                            }({}, e), {
                                                channel: c
                                            }))
                                        }]
                                }
                            }))
                        })))
                    },
                    children: [(0, r.jsxs)("div", {
                        className: C().left,
                        children: [(0, r.jsxs)(o.Heading, {
                            className: C().threadNameLine,
                            variant: "heading-md/semibold",
                            children: [(0, r.jsx)("span", {
                                className: C().threadName,
                                children: c.name
                            }), s && null != f ? (0, r.jsx)("span", {
                                className: C().parentName,
                                children: "#".concat(f.name)
                            }) : null]
                        }), R(c)]
                    }), (0, r.jsx)(W, {
                        channel: c
                    })]
                })
            }));

            function W(e) {
                var t, n, o = e.channel,
                    u = (0, a.e7)([d.Z], (function() {
                        return null !== (t = d.Z.getMemberIdsPreview(o.id)) && void 0 !== t ? t : []
                    })),
                    l = (0, a.e7)([d.Z], (function() {
                        return null !== (n = d.Z.getMemberCount(o.id)) && void 0 !== n ? n : 0
                    })),
                    h = (0, a.Wu)([c.default], (function() {
                        return u.map((function(e) {
                            return c.default.getUser(e)
                        }))
                    }));
                i.useEffect((function() {
                    u.filter((function(e, t) {
                        return null == h[t]
                    })).forEach((function(e) {
                        s.Z.requestMember(o.guild_id, e)
                    }))
                }), []);
                return 0 === u.length ? null : (0, r.jsx)(f.Z, {
                    className: C().facepile,
                    showDefaultAvatarsForNullUsers: !0,
                    guildId: o.guild_id,
                    users: h,
                    count: l,
                    max: k.yX
                })
            }
        },
        232806: (e, t, n) => {
            "use strict";
            n.d(t, {
                xV: () => a,
                dp: () => o,
                X7: () => u,
                E1: () => l,
                f7: () => s,
                HE: () => c,
                SJ: () => f
            });

            function r(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function i(e, t) {
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
            var a, o;
            ! function(e) {
                e[e.BACKGROUND = 0] = "BACKGROUND"
            }(a || (a = {}));
            ! function(e) {
                e[e.OPTION_1 = 0] = "OPTION_1";
                e[e.OPTION_2 = 1] = "OPTION_2";
                e[e.OPTION_3 = 2] = "OPTION_3";
                e[e.OPTION_4 = 3] = "OPTION_4";
                e[e.OPTION_7 = 7] = "OPTION_7";
                e[e.OPTION_8 = 8] = "OPTION_8";
                e[e.OPTION_9 = 9] = "OPTION_9";
                e[e.OPTION_10 = 10] = "OPTION_10"
            }(o || (o = {}));
            var u = [o.OPTION_7, o.OPTION_8, o.OPTION_9, o.OPTION_10],
                l = [o.OPTION_7, o.OPTION_8, o.OPTION_9, o.OPTION_10, o.OPTION_1, o.OPTION_2, o.OPTION_3, o.OPTION_4].reduce((function(e, t, n) {
                    return i(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            i.forEach((function(t) {
                                r(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, e), r({}, t, n))
                }), {}),
                s = "blur",
                c = {
                    width: 1280,
                    height: 720
                },
                f = 10485760
        },
        491260: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => H
            });
            var r = n(110251),
                i = n.n(r),
                a = n(496486),
                o = n.n(a),
                u = n(202351),
                l = n(744564),
                s = n(83797),
                c = n(664625),
                f = n(473903),
                d = n(2590);

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function v(e, t, n) {
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

            function y(e, t) {
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function _(e, t) {
                _ = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return _(e, t)
            }

            function m(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            o = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || O(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function b(e) {
                return function(e) {
                    if (Array.isArray(e)) return h(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || O(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function O(e, t) {
                if (e) {
                    if ("string" == typeof e) return h(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? h(e, t) : void 0
                }
            }

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
                    var n, r = g(e);
                    if (t) {
                        var i = g(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return y(this, n)
                }
            }
            var T = Object.freeze([]),
                S = {},
                A = {},
                P = {},
                w = {},
                N = {};

            function C(e, t) {
                var n = S[e];
                return null != n ? n[t] : null
            }
            var Z = function(e) {
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
            var R = function(e) {
                return (0, s.Z)(e) ? 1 : 0
            };

            function j(e, t) {
                return function(e, t) {
                    return Z(t) - Z(e)
                }(e, t) || function(e, t) {
                    return R(t) - R(e)
                }(e, t) || function(e, t) {
                    var n, r;
                    return (null !== (n = t.created_at) && void 0 !== n ? n : 0) - (null !== (r = e.created_at) && void 0 !== r ? r : 0)
                }(e, t)
            }

            function M(e) {
                delete A[e];
                delete P[e];
                delete w[e];
                if (null != S[e]) {
                    var t = m(o().sortBy(S[e], (function(e) {
                            return -e.timestamp
                        })), 1),
                        n = t[0];
                    if (n.status !== d.Skl.OFFLINE) {
                        A[e] = n.status;
                        P[e] = n.activities;
                        null != n.clientStatus && (w[e] = n.clientStatus)
                    } else o().every(S[e], (function(e) {
                        return e.status === d.Skl.OFFLINE
                    })) && delete S[e]
                }
            }

            function D(e) {
                var t = S[e];
                if (null != t) {
                    var n = o().maxBy(Object.values(t), (function(e) {
                        return e.timestamp
                    }));
                    if (n.status !== d.Skl.OFFLINE) {
                        A[e] = n.status;
                        P[e] = n.activities;
                        null != n.clientStatus && (w[e] = n.clientStatus)
                    }
                }
            }

            function L(e) {
                var t = e.guildId,
                    n = e.userId,
                    r = e.status,
                    a = e.clientStatus,
                    o = e.activities;
                if (n === c.default.getId()) return !1;
                var u = S[n];
                if (null == u) {
                    if (r === d.Skl.OFFLINE) return !1;
                    u = S[n] = {}
                }
                if (r === d.Skl.OFFLINE) u[t] = {
                    status: r,
                    clientStatus: a,
                    activities: T,
                    timestamp: Date.now()
                };
                else {
                    var l = o.length > 1 ? b(o).sort(j) : o,
                        s = u[t];
                    o = null != s && i()(s.activities, l) ? s.activities : l;
                    u[t] = {
                        status: r,
                        clientStatus: a,
                        activities: o,
                        timestamp: Date.now()
                    }
                }
                delete N[n];
                M(n);
                return !0
            }

            function k(e) {
                var t = e.guildId,
                    n = e.userId,
                    r = e.status,
                    i = e.clientStatus,
                    a = e.activities,
                    o = e.timestamp;
                if (n !== c.default.getId()) {
                    var u = S[n];
                    if (null == u) {
                        if (r === d.Skl.OFFLINE) return;
                        u = S[n] = {}
                    }
                    if (r === d.Skl.OFFLINE) u[t] = {
                        status: r,
                        clientStatus: i,
                        activities: T,
                        timestamp: Date.now()
                    };
                    else {
                        var l = a.length > 1 ? b(a).sort(j) : a;
                        u[t] = {
                            status: r,
                            clientStatus: i,
                            activities: l,
                            timestamp: o
                        }
                    }
                }
            }

            function F(e, t) {
                if (t === c.default.getId()) return !1;
                var n = S[t];
                if (null == n || null == n[e]) return !1;
                delete n[e];
                0 === Object.keys(n).length && delete S[t];
                M(t)
            }

            function x(e) {
                var t = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var i, a = Object.keys(S)[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                        F(e, i.value)
                    }
                } catch (e) {
                    n = !0;
                    r = e
                } finally {
                    try {
                        t || null == a.return || a.return()
                    } finally {
                        if (n) throw r
                    }
                }
            }
            var U = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && _(e, t)
                }(n, e);
                var t = I(n);

                function n() {
                    p(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(c.default)
                };
                r.setCurrentUserOnConnectionOpen = function(e, t) {
                    A[c.default.getId()] = e;
                    P[c.default.getId()] = t
                };
                r.getStatus = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.Skl.OFFLINE,
                        r = f.default.getUser(e);
                    null != r && r.hasFlag(d.xW$.BOT_HTTP_INTERACTIONS) && (n = d.Skl.UNKNOWN);
                    if (null == r ? void 0 : r.isClyde()) return d.Skl.ONLINE;
                    if (null == t) {
                        var i;
                        return null !== (i = A[e]) && void 0 !== i ? i : n
                    }
                    var a, o = C(e, t);
                    return null !== (a = null == o ? void 0 : o.status) && void 0 !== a ? a : n
                };
                r.getActivities = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == t) {
                        var n;
                        return null !== (n = P[e]) && void 0 !== n ? n : T
                    }
                    var r = C(e, t);
                    return null == r || null == r.activities ? T : r.activities
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
                        for (var a, o = Object.keys(P)[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
                            var u = a.value,
                                l = P[u],
                                s = !0,
                                c = !1,
                                f = void 0;
                            try {
                                for (var d, h = l[Symbol.iterator](); !(s = (d = h.next()).done); s = !0) {
                                    var p = d.value;
                                    p.application_id === e && t.push({
                                        userId: u,
                                        activity: p
                                    })
                                }
                            } catch (e) {
                                c = !0;
                                f = e
                            } finally {
                                try {
                                    s || null == h.return || h.return()
                                } finally {
                                    if (c) throw f
                                }
                            }
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == o.return || o.return()
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
                    return N[e]
                };
                r.getUserIds = function() {
                    return Object.keys(P)
                };
                r.isMobileOnline = function(e) {
                    var t = w[e];
                    return null != t && t[d.X5t.MOBILE] === d.Skl.ONLINE && t[d.X5t.DESKTOP] !== d.Skl.ONLINE
                };
                r.getState = function() {
                    return {
                        presencesForGuilds: S,
                        statuses: A,
                        activities: P,
                        activityMetadata: N,
                        clientStatuses: w
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        NO_ACTIVITIES: T,
                        presencesForGuilds: S,
                        statuses: A,
                        activities: P,
                        clientStatuses: w,
                        activityMetadata: N,
                        typeScore: Z,
                        richnessScore: R
                    }
                };
                return n
            }(u.ZP.Store);
            U.displayName = "PresenceStore";
            const H = new U(l.Z, {
                CONNECTION_OPEN: function() {
                    return !0
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    var t = e.guilds,
                        n = e.presences,
                        r = c.default.getId();
                    S = {};
                    N = {};
                    A = v({}, r, A[r]);
                    P = v({}, r, P[r]);
                    w = v({}, r, {});
                    var i = new Set,
                        a = Date.now();
                    t.forEach((function(e) {
                        e.presences.forEach((function(t) {
                            var n = t.user,
                                r = t.status,
                                o = t.clientStatus,
                                u = t.activities;
                            k({
                                guildId: e.id,
                                userId: n.id,
                                status: r,
                                clientStatus: o,
                                activities: u,
                                timestamp: a
                            });
                            i.add(n.id)
                        }))
                    }));
                    n.forEach((function(e) {
                        var t = e.user,
                            n = e.status,
                            r = e.clientStatus,
                            o = e.activities;
                        if (null != t) {
                            k({
                                guildId: d.ME,
                                userId: t.id,
                                status: n,
                                clientStatus: r,
                                activities: o,
                                timestamp: a
                            });
                            i.add(t.id)
                        }
                    }));
                    i.delete(r);
                    i.forEach(D)
                },
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.presences;
                    S = t.presencesForGuilds;
                    A = t.statuses;
                    P = t.activities;
                    N = t.activityMetadata
                },
                GUILD_CREATE: function(e) {
                    var t = e.guild;
                    t.presences.forEach((function(e) {
                        var n = e.user,
                            r = e.status,
                            i = e.clientStatus,
                            a = e.activities;
                        L({
                            guildId: t.id,
                            userId: n.id,
                            status: r,
                            clientStatus: i,
                            activities: a
                        })
                    }))
                },
                GUILD_DELETE: function(e) {
                    x(e.guild.id)
                },
                GUILD_MEMBER_REMOVE: function(e) {
                    return F(e.guildId, e.user.id)
                },
                PRESENCE_UPDATES: function(e) {
                    return e.updates.map((function(e) {
                        var t = e.guildId,
                            n = e.user,
                            r = e.status,
                            i = e.clientStatus,
                            a = e.activities;
                        return L({
                            guildId: null != t ? t : d.ME,
                            userId: n.id,
                            status: r,
                            clientStatus: i,
                            activities: a
                        })
                    })).some((function(e) {
                        return e
                    }))
                },
                PRESENCES_REPLACE: function(e) {
                    var t = e.presences;
                    x(d.ME);
                    t.forEach((function(e) {
                        var t = e.user,
                            n = e.status,
                            r = e.clientStatus,
                            i = e.activities;
                        null != t && L({
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
                    N[t] = n;
                    return !1
                },
                THREAD_MEMBER_LIST_UPDATE: function(e) {
                    var t = e.guildId;
                    e.members.forEach((function(e) {
                        null != e.presence && L({
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
                        null != e.presence && L({
                            guildId: t,
                            userId: e.userId,
                            status: e.presence.status,
                            clientStatus: e.presence.clientStatus,
                            activities: e.presence.activities
                        })
                    }))
                },
                SELF_PRESENCE_STORE_UPDATE: function(e) {
                    var t = c.default.getId();
                    if (A[t] === e.status && P[t] === e.activities) return !1;
                    A[t] = e.status;
                    P[t] = e.activities;
                    delete N[t]
                }
            })
        },
        603339: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                i = (n(667294), n(633878));

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function o(e, t) {
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

            function u(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function l(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    l = e.height,
                    s = void 0 === l ? 24 : l,
                    c = e.color,
                    f = void 0 === c ? "currentColor" : c,
                    d = e.className,
                    h = e.foreground,
                    p = u(e, ["width", "height", "color", "className", "foreground"]);
                return (0, r.jsx)("svg", o(function(e) {
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
                }({}, (0, i.Z)(p)), {
                    className: d,
                    width: n,
                    height: s,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: h,
                        fill: f,
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M2 11C2 6.02944 6.02944 2 11 2H13C17.9706 2 22 6.02944 22 11V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V11ZM5.88 5.82497C4.71048 6.55593 4 7.83781 4 9.21697V18.7192C4 19.3698 4.61139 19.8471 5.24254 19.6893L10.9558 18.261C11.5695 18.1076 12 17.5562 12 16.9236V9.21697C12 6.07522 8.5442 4.15985 5.88 5.82497ZM10 12C10 11.4477 9.55228 11 9 11C8.44772 11 8 11.4477 8 12V14C8 14.5523 8.44772 15 9 15C9.55228 15 10 14.5523 10 14V12ZM17.6832 9.47564C17.4485 8.84145 16.5515 8.84145 16.3168 9.47564L16.1387 9.95707C15.9361 10.5045 15.5045 10.9361 14.9571 11.1387L14.4756 11.3168C13.8415 11.5515 13.8415 12.4485 14.4756 12.6832L14.9571 12.8613C15.5045 13.0639 15.9361 13.4955 16.1387 14.0429L16.3168 14.5244C16.5515 15.1585 17.4485 15.1585 17.6832 14.5244L17.8613 14.0429C18.0639 13.4955 18.4955 13.0639 19.0429 12.8613L19.5244 12.6832C20.1585 12.4485 20.1585 11.5515 19.5244 11.3168L19.0429 11.1387C18.4955 10.9361 18.0639 10.5045 17.8613 9.95707L17.6832 9.47564ZM14.1584 5.23782C14.2758 4.92073 14.7242 4.92073 14.8416 5.23782C14.9994 5.66433 15.3357 6.0006 15.7622 6.15842C16.0793 6.27576 16.0793 6.72424 15.7622 6.84158C15.3357 6.9994 14.9994 7.33567 14.8416 7.76218C14.7242 8.07927 14.2758 8.07927 14.1584 7.76218C14.0006 7.33567 13.6643 6.9994 13.2378 6.84158C12.9207 6.72424 12.9207 6.27576 13.2378 6.15842C13.6643 6.0006 14.0006 5.66433 14.1584 5.23782ZM18.8416 16.2378C18.7242 15.9207 18.2758 15.9207 18.1584 16.2378C18.0006 16.6643 17.6643 17.0006 17.2378 17.1584C16.9207 17.2758 16.9207 17.7242 17.2378 17.8416C17.6643 17.9994 18.0006 18.3357 18.1584 18.7622C18.2758 19.0793 18.7242 19.0793 18.8416 18.7622C18.9994 18.3357 19.3357 17.9994 19.7622 17.8416C20.0793 17.7242 20.0793 17.2758 19.7622 17.1584C19.3357 17.0006 18.9994 16.6643 18.8416 16.2378Z"
                    })
                }))
            }
        },
        465637: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                i = (n(667294), n(633878));

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function o(e, t) {
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

            function u(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function l(e) {
                var t = e.width,
                    n = void 0 === t ? 104 : t,
                    l = e.height,
                    s = void 0 === l ? 80 : l,
                    c = u(e, ["width", "height"]);
                return (0, r.jsxs)("svg", o(function(e) {
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
                }({}, (0, i.Z)(c)), {
                    width: n,
                    height: s,
                    viewBox: "0 0 104 80",
                    fill: "none",
                    children: [(0, r.jsx)("path", {
                        d: "M95.6718 1.80634C95.6718 0.808724 94.863 0 93.8654 0C92.8678 0 92.0591 0.808724 92.0591 1.80634V3.64278C92.0591 4.64039 92.8678 5.44911 93.8654 5.44911C94.863 5.44911 95.6718 4.64039 95.6718 3.64278V1.80634Z",
                        fill: "#ADF3FF"
                    }), (0, r.jsx)("path", {
                        d: "M95.6713 16.3574C95.6713 15.3598 94.8625 14.5511 93.8649 14.5511C92.8673 14.5511 92.0586 15.3598 92.0586 16.3574V18.1939C92.0586 19.1915 92.8673 20.0002 93.8649 20.0002C94.8625 20.0002 95.6713 19.1915 95.6713 18.1939V16.3574Z",
                        fill: "#ADF3FF"
                    }), (0, r.jsx)("path", {
                        d: "M102.194 11.8412C103.191 11.8412 104 11.0325 104 10.0349C104 9.03724 103.191 8.22852 102.194 8.22852H100.357C99.3596 8.22852 98.5509 9.03724 98.5509 10.0349C98.5509 11.0325 99.3596 11.8412 100.357 11.8412H102.194Z",
                        fill: "#ADF3FF"
                    }), (0, r.jsx)("path", {
                        d: "M87.6434 11.7413C88.641 11.7413 89.4497 10.9325 89.4497 9.93494C89.4497 8.93733 88.641 8.1286 87.6434 8.1286H85.8069C84.8093 8.1286 84.0006 8.93733 84.0006 9.93494C84.0006 10.9325 84.8093 11.7413 85.8069 11.7413H87.6434Z",
                        fill: "#ADF3FF"
                    }), (0, r.jsx)("path", {
                        d: "M11.1501 74.4573L15.3147 73.0684C15.5192 72.9747 15.6925 72.8241 15.814 72.6347C15.9354 72.4454 16 72.225 16 72C16 71.775 15.9354 71.5546 15.814 71.3653C15.6925 71.1759 15.5192 71.0253 15.3147 70.9316L11.1501 69.5427C10.8657 69.4142 10.6378 69.1862 10.5094 68.9016L9.01446 64.7348C8.94423 64.521 8.80835 64.3349 8.62619 64.203C8.44403 64.071 8.22488 64 7.99999 64C7.77511 64 7.55597 64.071 7.37381 64.203C7.19165 64.3349 7.05576 64.521 6.98554 64.7348L5.49057 68.9016C5.36216 69.1862 5.13433 69.4142 4.84986 69.5427L0.685276 70.9316C0.480802 71.0253 0.307523 71.1759 0.186045 71.3653C0.0645662 71.5546 0 71.775 0 72C0 72.225 0.0645662 72.4454 0.186045 72.6347C0.307523 72.8241 0.480802 72.9747 0.685276 73.0684L4.84986 74.4573C5.0011 74.5032 5.1387 74.5858 5.25046 74.6976C5.36222 74.8094 5.44469 74.9471 5.49057 75.0984L6.98554 79.2652C7.05576 79.479 7.19165 79.6651 7.37381 79.797C7.55597 79.929 7.77511 80 7.99999 80C8.22488 80 8.44403 79.929 8.62619 79.797C8.80835 79.6651 8.94423 79.479 9.01446 79.2652L10.5094 75.0984C10.5553 74.9471 10.6378 74.8094 10.7495 74.6976C10.8613 74.5858 10.9989 74.5032 11.1501 74.4573Z",
                        fill: "#FFD01A"
                    })]
                }))
            }
        },
        363582: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                i = (n(667294), n(633878));

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function o(e, t) {
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

            function u(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function l(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    l = e.height,
                    s = void 0 === l ? 24 : l,
                    c = e.color,
                    f = void 0 === c ? "currentColor" : c,
                    d = e.foreground,
                    h = u(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", o(function(e) {
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
                }({}, (0, i.Z)(h)), {
                    width: n,
                    height: s,
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        className: d,
                        fill: f,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                    }), (0, r.jsx)("path", {
                        className: d,
                        fill: f,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                    }), (0, r.jsx)("path", {
                        className: d,
                        fill: f,
                        d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                    }), (0, r.jsx)("path", {
                        className: d,
                        fill: f,
                        d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                    })]
                }))
            }
        },
        939198: (e, t, n) => {
            "use strict";
            n.d(t, {
                mT: () => i,
                Jj: () => a,
                OF: () => o,
                hV: () => r,
                WW: () => u
            });
            var r, i = 550,
                a = 350,
                o = 40;
            ! function(e) {
                e.STATIC = "STATIC";
                e.RESPONSIVE = "RESPONSIVE";
                e.MOSAIC = "MOSAIC"
            }(r || (r = {}));
            var u = 20
        },
        129586: (e, t, n) => {
            "use strict";
            n.d(t, {
                a8: () => i,
                FL: () => a,
                rS: () => o
            });
            var r = n(744564);

            function i(e, t, n) {
                r.Z.dispatch({
                    type: "ANALYTICS_FEED_ITEM_SEEN",
                    id: e,
                    feedItemId: t,
                    timestampMillis: n
                })
            }

            function a(e, t, n) {
                r.Z.dispatch({
                    type: "ANALYTICS_FEED_ITEM_UNSEEN",
                    id: e,
                    feedItemId: t,
                    timestampMillis: n
                })
            }

            function o(e, t) {
                r.Z.dispatch({
                    type: "ANALYTICS_FEED_FLUSH",
                    id: e,
                    force: t
                })
            }
        },
        858519: (e, t, n) => {
            "use strict";
            n.d(t, {
                AT: () => s,
                cs: () => c,
                zQ: () => h
            });
            var r = n(441143),
                i = n.n(r),
                a = n(744564);

            function o(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function u(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);

                        function u(e) {
                            o(a, r, i, u, l, "next", e)
                        }

                        function l(e) {
                            o(a, r, i, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var s, c, f = function(e, t) {
                var n, r, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function u(a) {
                    return function(u) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = t.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            };
            ! function(e) {
                e.GUILD_HOME = "guild_home";
                e.FORUM_CHANNEL = "forum_channel"
            }(s || (s = {}));
            ! function(e) {
                e[e.IMMEDIATE = 0] = "IMMEDIATE";
                e[e.IMMEDIATE_WITH_COOLDOWN = 1] = "IMMEDIATE_WITH_COOLDOWN";
                e[e.IMMEDIATE_WITH_DELAY = 2] = "IMMEDIATE_WITH_DELAY"
            }(c || (c = {}));
            var d = function() {
                    function e() {
                        l(this, e);
                        this.seenIntervals = []
                    }
                    var t = e.prototype;
                    t.maybeMarkSeen = function(e) {
                        var t = this.seenIntervals[this.seenIntervals.length - 1];
                        if (null != t && null == t.endTimeMillis) return !1;
                        this.seenIntervals.push({
                            startTimeMillis: e
                        });
                        return !0
                    };
                    t.maybeMarkUnseen = function(e) {
                        var t = this.seenIntervals[this.seenIntervals.length - 1];
                        if (null == t || null != t.endTimeMillis) return !1;
                        t.endTimeMillis = e;
                        return !0
                    };
                    t.isVisible = function() {
                        var e = this.seenIntervals[this.seenIntervals.length - 1];
                        return null != (null == e ? void 0 : e.startTimeMillis) && null == (null == e ? void 0 : e.endTimeMillis)
                    };
                    t.computeSeenTimeDestructive = function(e) {
                        var t = 0,
                            n = [],
                            r = !0,
                            a = !1,
                            o = void 0;
                        try {
                            for (var u, l = this.seenIntervals[Symbol.iterator](); !(r = (u = l.next()).done); r = !0) {
                                var s = u.value;
                                if (null == s.endTimeMillis)
                                    if (e) {
                                        var c = Date.now();
                                        t += c - s.startTimeMillis;
                                        n.push({
                                            startTimeMillis: c
                                        })
                                    } else n.push(s);
                                else t += s.endTimeMillis - s.startTimeMillis
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                r || null == l.return || l.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        i()(n.length < 2, "there should only be a single left over data");
                        this.seenIntervals = n;
                        return Math.round(t)
                    };
                    return e
                }(),
                h = function() {
                    function e(t) {
                        var n = t.id,
                            r = t.windowId,
                            i = t.isPaused,
                            o = this;
                        l(this, e);
                        this.initialize = function() {
                            var e, t;
                            a.Z.subscribe("ANALYTICS_FEED_ITEM_SEEN", o.handleFeedItemSeen);
                            a.Z.subscribe("ANALYTICS_FEED_ITEM_UNSEEN", o.handleFeedItemUnseen);
                            a.Z.subscribe("ANALYTICS_FEED_FLUSH", o.handleFeedItemFlush);
                            a.Z.subscribe("APP_STATE_UPDATE", o.handleAppStateUpdate);
                            a.Z.subscribe("DRAWER_OPEN", o.handleDrawerOpen);
                            a.Z.subscribe("DRAWER_CLOSE", o.handleDrawerClose);
                            a.Z.subscribe("WINDOW_FOCUS", o.handleWindowFocus);
                            null === (t = (e = o).onInitialize) || void 0 === t || t.call(e)
                        };
                        this.terminate = function() {
                            var e, t;
                            a.Z.unsubscribe("ANALYTICS_FEED_ITEM_SEEN", o.handleFeedItemSeen);
                            a.Z.unsubscribe("ANALYTICS_FEED_ITEM_UNSEEN", o.handleFeedItemUnseen);
                            a.Z.unsubscribe("ANALYTICS_FEED_FLUSH", o.handleFeedItemFlush);
                            a.Z.unsubscribe("APP_STATE_UPDATE", o.handleAppStateUpdate);
                            a.Z.unsubscribe("DRAWER_OPEN", o.handleDrawerOpen);
                            a.Z.unsubscribe("DRAWER_CLOSE", o.handleDrawerClose);
                            a.Z.unsubscribe("WINDOW_FOCUS", o.handleWindowFocus);
                            null === (t = (e = o).onTerminate) || void 0 === t || t.call(e);
                            o.maybeFlushSeenItems(c.IMMEDIATE)
                        };
                        this.handleFeedItemFlush = function(e) {
                            var t = e.id,
                                n = e.force;
                            o._id === t && o.maybeFlushSeenItems(n)
                        };
                        this.handleFeedItemSeen = function(e) {
                            var t, n, r = e.id,
                                i = e.timestampMillis,
                                a = e.feedItemId;
                            if (r === o._id)
                                if (o._paused) o._pausedFeedItemIds.add(a);
                                else {
                                    var u = o.getTrackedFeedItem(a).maybeMarkSeen(i);
                                    null === (n = (t = o).onFeedItemSeen) || void 0 === n || n.call(t, a, u)
                                }
                        };
                        this.handleFeedItemUnseen = function(e) {
                            var t, n, r = e.id,
                                i = e.timestampMillis,
                                a = e.feedItemId;
                            if (r === o._id) {
                                o._paused && o._pausedFeedItemIds.delete(a);
                                var u = o.getTrackedFeedItem(a).maybeMarkUnseen(i);
                                null === (n = (t = o).onFeedItemUnseen) || void 0 === n || n.call(t, a, u);
                                o.maybeFlushSeenItems()
                            }
                        };
                        this.getTrackedFeedItem = function(e) {
                            null == o.trackedFeedItems[e] && (o.trackedFeedItems[e] = new d);
                            return o.trackedFeedItems[e]
                        };
                        this.getVisibleFeedItemIds = function() {
                            var e = Object.keys(o.trackedFeedItems);
                            return new Set(e.filter((function(e) {
                                var t;
                                return null === (t = o.trackedFeedItems[e]) || void 0 === t ? void 0 : t.isVisible()
                            })))
                        };
                        this.handleDrawerClose = function() {
                            o._isReactNavigationFocused && o.resume()
                        };
                        this.handleDrawerOpen = function() {
                            o._isReactNavigationFocused && o.pause()
                        };
                        this.handleAppStateUpdate = function(e) {
                            var t = e.state;
                            "active" === t && o._isReactNavigationFocused && o.resume();
                            if ("background" === t) {
                                o._isReactNavigationFocused && o.pause();
                                o.maybeFlushSeenItems(c.IMMEDIATE)
                            }
                        };
                        this.clearPausedFeedItemIds = function() {
                            o._pausedFeedItemIds = new Set;
                            o._paused = !1
                        };
                        this.pause = function() {
                            if (!o._paused) {
                                var e = o.getVisibleFeedItemIds();
                                e.forEach((function(e) {
                                    o.handleFeedItemUnseen({
                                        id: o._id,
                                        feedItemId: e,
                                        timestampMillis: Date.now(),
                                        type: "ANALYTICS_FEED_ITEM_UNSEEN"
                                    })
                                }));
                                o._paused = !0;
                                o._pausedFeedItemIds = e
                            }
                        };
                        this.resume = function() {
                            if (o._paused) {
                                o._paused = !1;
                                o._pausedFeedItemIds.forEach((function(e) {
                                    o.handleFeedItemSeen({
                                        id: o._id,
                                        feedItemId: e,
                                        timestampMillis: Date.now(),
                                        type: "ANALYTICS_FEED_ITEM_SEEN"
                                    })
                                }));
                                o.clearPausedFeedItemIds()
                            }
                        };
                        this.handleReactNavigationFocus = function(e, t) {
                            o._isReactNavigationFocused = e;
                            o._isReactNavigationFocused && !t ? o.resume() : o.pause()
                        };
                        this.handleWindowFocus = function(e) {
                            o._windowId === e.windowId && (e.focused ? o.resume() : o.pause())
                        };
                        this.trackedFeedItems = {};
                        this._id = n;
                        this._windowId = r;
                        this._pausedFeedItemIds = new Set;
                        this._paused = null != i && i;
                        this._isReactNavigationFocused = !0;
                        this._lastFlushTimeMillis = Date.now()
                    }
                    e.prototype.maybeFlushSeenItems = function(e) {
                        if (null == e && Date.now() - this._lastFlushTimeMillis < 6e4) return Promise.resolve();
                        if (e === c.IMMEDIATE_WITH_COOLDOWN && Date.now() - this._lastFlushTimeMillis < 3e3) return Promise.resolve();
                        var t, n = this.createFlushSeenItemsFunction(e);
                        if (null == n) return Promise.resolve();
                        this._lastFlushTimeMillis = Date.now();
                        return e === c.IMMEDIATE || e === c.IMMEDIATE_WITH_COOLDOWN ? new Promise((t = u((function(e) {
                            return f(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, n()];
                                    case 1:
                                        t.sent();
                                        e();
                                        return [2]
                                }
                            }))
                        })), function(e) {
                            return t.apply(this, arguments)
                        })) : new Promise((function(e) {
                            setTimeout(u((function() {
                                return f(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, n()];
                                        case 1:
                                            t.sent();
                                            e();
                                            return [2]
                                    }
                                }))
                            })), 100)
                        }))
                    };
                    return e
                }()
        },
        73105: (e, t, n) => {
            "use strict";
            n.d(t, {
                RD: () => Y,
                WA: () => H,
                f5: () => x,
                Gb: () => j,
                Rs: () => B,
                _2: () => V,
                gL: () => D,
                fG: () => k
            });
            var r = n(306472),
                i = n(737264),
                a = n(496486),
                o = n.n(a),
                u = n(809784),
                l = n(296602),
                s = n(384411),
                c = n(72580),
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
            var h = function() {
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
            const p = {
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

            function v(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function g(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function y(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);

                        function o(e) {
                            g(a, r, i, o, u, "next", e)
                        }

                        function u(e) {
                            g(a, r, i, o, u, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function _(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function m(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            o = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return v(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var b = function(e, t) {
                    var n, r, i, a, o = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function u(a) {
                        return function(u) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                    (r = 0, i) && (a = [2 & a[0], i.value]);
                                    switch (a[0]) {
                                        case 0:
                                        case 1:
                                            i = a;
                                            break;
                                        case 4:
                                            o.label++;
                                            return {
                                                value: a[1], done: !1
                                            };
                                        case 5:
                                            o.label++;
                                            r = a[1];
                                            a = [0];
                                            continue;
                                        case 7:
                                            a = o.ops.pop();
                                            o.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                                o.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && o.label < i[1]) {
                                                o.label = i[1];
                                                i = a;
                                                break
                                            }
                                            if (i && o.label < i[2]) {
                                                o.label = i[2];
                                                o.ops.push(a);
                                                break
                                            }
                                            i[2] && o.ops.pop();
                                            o.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, o)
                                } catch (e) {
                                    a = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, u])
                        }
                    }
                },
                E = new l.Z("Spellchecker"),
                O = null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck;

            function I(e) {
                var t;
                e = null !== (t = p[e]) && void 0 !== t ? t : e;
                var n = (0,
                    i.Q)(e.replace(/[_-]/g, "-"));
                if (null != n && null != n.langtag.language && null != n.langtag.region) {
                    var r = n.langtag,
                        a = r.language,
                        o = r.region;
                    return "".concat(a.language.toLowerCase(), "-").concat(o.toUpperCase())
                }
                E.error("".concat(e, " is not a valid locale."))
            }
            var T = function() {
                    function e(t) {
                        var n = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        this._enabled = !0;
                        this.misspelledWord = "";
                        this.corrections = [];
                        var r = m(s.default.locale.split("-"), 2),
                            i = r[0],
                            a = r[1];
                        this.regionPreference = a;
                        var o = this.getAvailableLanguages(t);
                        this.languageDetector = new h(i, (function(e) {
                            var r = "".concat(e, "-").concat(n.regionPreference);
                            if (-1 !== t.indexOf(r)) n.setLocale(r);
                            else {
                                var a, u = null !== (a = o[e]) && void 0 !== a ? a : p[i];
                                null != u && n.setLocale(u)
                            }
                        }));
                        O.on("spellcheck-result", (function(e, t) {
                            n.misspelledWord = null != e ? e : "";
                            n.corrections = null != t ? t : []
                        }))
                    }
                    var t = e.prototype;
                    t.setLearnedWords = function(e) {
                        O.setLearnedWords(e)
                    };
                    t.setLocale = function(e) {
                        var t;
                        null === (t = O.setLocale(e)) || void 0 === t || t.then((function(t) {
                            E.info("Switching to ".concat(e), t ? "(available)" : "(unavailable)")
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
                            var n, r = m(e.split("-"), 1)[0];
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
                        O.replaceMisspelling(e)
                    };
                    ! function(e, t, n) {
                        t && _(e.prototype, t);
                        n && _(e, n)
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
                S = o().debounce((function(e, t) {
                    var n = function(e) {
                        if (null == e) return null;
                        if ((0, u.k)(e, HTMLInputElement) || (0, u.k)(e, HTMLTextAreaElement)) return e.value;
                        if ((0,
                                u.k)(e) && e.hasAttribute("contenteditable")) return e.textContent
                    }(t);
                    null != n && e.detectLanguage(n)
                }), 250);

            function A(e) {
                null != document.body && document.body.addEventListener("beforeinput", (function(t) {
                    return S(e, t.target)
                }), !0)
            }

            function P() {
                return (P = y((function() {
                    var e, t, n, r;
                    return b(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, O.getAvailableDictionaries()];
                            case 1:
                                t = null !== (e = i.sent()) && void 0 !== e ? e : [];
                                n = t.map(I).filter(c.lm);
                                A(r = new T(n));
                                return [2, r]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var w = n(120415);

            function N(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function C(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);

                        function o(e) {
                            N(a, r, i, o, u, "next", e)
                        }

                        function u(e) {
                            N(a, r, i, o, u, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }
            var Z = function(e, t) {
                var n, r, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    },
                    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                function u(a) {
                    return function(u) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = t.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            };

            function R() {
                return null != (null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck)
            }

            function j() {
                return (0, w.nI)() && R()
            }
            var M = j() ? function() {
                return P.apply(this, arguments)
            }() : null;

            function D(e) {
                return L.apply(this, arguments)
            }

            function L() {
                return (L = C((function(e) {
                    var t;
                    return Z(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, M];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.enabled = e;
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function k(e) {
                return F.apply(this, arguments)
            }

            function F() {
                return (F = C((function(e) {
                    var t;
                    return Z(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, M];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.setLearnedWords(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function x(e) {
                return U.apply(this, arguments)
            }

            function U() {
                U = C((function(e) {
                    var t, n, r = arguments;
                    return Z(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                t = r.length > 1 && void 0 !== r[1] && r[1];
                                return [4, M];
                            case 1:
                                return null == (n = i.sent()) ? [2, !1] : [2, n.isMisspelled(e, t)]
                        }
                    }))
                }));
                return U.apply(this, arguments)
            }

            function H(e) {
                return G.apply(this, arguments)
            }

            function G() {
                G = C((function(e) {
                    var t, n, r, i = arguments;
                    return Z(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                t = i.length > 1 && void 0 !== i[1] && i[1], n = i.length > 2 && void 0 !== i[2] ? i[2] : 5;
                                return [4, M];
                            case 1:
                                return null == (r = a.sent()) ? [2, []] : [2, r.getCorrectionsForMisspelling(e, t).slice(0, n)]
                        }
                    }))
                }));
                return G.apply(this, arguments)
            }

            function B(e) {
                return W.apply(this, arguments)
            }

            function W() {
                return (W = C((function(e) {
                    var t;
                    return Z(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, M];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.replaceMisspelling(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function V(e) {
                return z.apply(this, arguments)
            }

            function z() {
                return (z = C((function(e) {
                    var t;
                    return Z(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, M];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.setAppLocale(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function Y(e) {
                if (!R()) return function() {};
                var t = r.Z.spellCheck.on("spellcheck-result", e);
                return null != t ? t : function() {}
            }
        },
        391438: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(281110),
                i = n(652591);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function o(e) {
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

            function u(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function l(e, t, n) {
                var r = t.trackedActionData,
                    a = u(t, ["trackedActionData"]),
                    l = {
                        url: a.url,
                        request_method: n
                    };
                return new Promise((function(t, n) {
                    e(a).then((function(e) {
                        var n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e));
                        (0, i.trackNetworkAction)(r.event, o({
                            status_code: e.status
                        }, l, n));
                        t(e)
                    })).catch((function(e) {
                        var t, a, u = r.properties;
                        "function" == typeof r.properties && (u = r.properties(e));
                        (0, i.trackNetworkAction)(r.event, o({
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (a = e.body) || void 0 === a ? void 0 : a.message
                        }, l, u));
                        n(e)
                    }))
                }))
            }
            const s = {
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
        142520: (e, t, n) => {
            "use strict";
            n.d(t, {
                x: () => r
            });
            var r;
            ! function(e) {
                e.THOUGHT_EMBED_TITLE = "Clyde Thoughts"
            }(r || (r = {}))
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
        }
    }
]);