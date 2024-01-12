(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["25314"], {
        78349: function(e, t, n) {
            "use strict";
            n("424973"), e.exports.parse = function(e) {
                var t = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!t) return null;
                t.shift();
                var n = null,
                    i = [];
                t[2] && (n = (o = t[2].split("-")).shift(), i = o);
                var l = [];
                t[5] && (l = t[5].split("-")).shift();
                var u = [];
                if (t[6]) {
                    (o = t[6].split("-")).shift();
                    for (var o, r, s = []; o.length;) {
                        var a = o.shift();
                        1 === a.length ? r ? (u.push({
                            singleton: r,
                            extension: s
                        }), r = a, s = []) : r = a : s.push(a)
                    }
                    u.push({
                        singleton: r,
                        extension: s
                    })
                }
                var d = [];
                t[7] && ((d = t[7].split("-")).shift(), d.shift());
                var c = [];
                return t[8] && (c = t[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: n,
                            extlang: i
                        },
                        script: t[3] || null,
                        region: t[4] || null,
                        variant: l,
                        extension: u,
                        privateuse: d
                    },
                    privateuse: c,
                    grandfathered: {
                        irregular: t[0] || null,
                        regular: t[1] || null
                    }
                }
            }
        },
        48648: function(e, t, n) {
            if (n("808653"), n("424973"), !i) var i = {
                map: function(e, t) {
                    var n = {};
                    return t ? e.map(function(e, i) {
                        return n.index = i, t.call(n, e)
                    }) : e.slice()
                },
                naturalOrder: function(e, t) {
                    return e < t ? -1 : e > t ? 1 : 0
                },
                sum: function(e, t) {
                    var n = {};
                    return e.reduce(t ? function(e, i, l) {
                        return n.index = l, e + t.call(n, i)
                    } : function(e, t) {
                        return e + t
                    }, 0)
                },
                max: function(e, t) {
                    return Math.max.apply(null, t ? i.map(e, t) : e)
                }
            };
            var l = function() {
                var e = 3;

                function t(e, t, n) {
                    return (e << 10) + (t << 5) + n
                }

                function n(e) {
                    var t = [],
                        n = !1;

                    function i() {
                        t.sort(e), n = !0
                    }
                    return {
                        push: function(e) {
                            t.push(e), n = !1
                        },
                        peek: function(e) {
                            return !n && i(), void 0 === e && (e = t.length - 1), t[e]
                        },
                        pop: function() {
                            return !n && i(), t.pop()
                        },
                        size: function() {
                            return t.length
                        },
                        map: function(e) {
                            return t.map(e)
                        },
                        debug: function() {
                            return !n && i(), t
                        }
                    }
                }

                function l(e, t, n, i, l, u, o) {
                    this.r1 = e, this.r2 = t, this.g1 = n, this.g2 = i, this.b1 = l, this.b2 = u, this.histo = o
                }

                function u() {
                    this.vboxes = new n(function(e, t) {
                        return i.naturalOrder(e.vbox.count() * e.vbox.volume(), t.vbox.count() * t.vbox.volume())
                    })
                }
                return l.prototype = {
                    volume: function(e) {
                        return (!this._volume || e) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(e) {
                        var n = this.histo;
                        if (!this._count_set || e) {
                            var i, l, u, o = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (l = this.g1; l <= this.g2; l++)
                                    for (u = this.b1; u <= this.b2; u++) o += n[t(i, l, u)] || 0;
                            this._count = o, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new l(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(e) {
                        var n = this.histo;
                        if (!this._avg || e) {
                            var i, l, u, o, r = 0,
                                s = 8,
                                a = 0,
                                d = 0,
                                c = 0;
                            for (l = this.r1; l <= this.r2; l++)
                                for (u = this.g1; u <= this.g2; u++)
                                    for (o = this.b1; o <= this.b2; o++) r += i = n[t(l, u, o)] || 0, a += i * (l + .5) * s, d += i * (u + .5) * s, c += i * (o + .5) * s;
                            r ? this._avg = [~~(a / r), ~~(d / r), ~~(c / r)] : this._avg = [~~(s * (this.r1 + this.r2 + 1) / 2), ~~(s * (this.g1 + this.g2 + 1) / 2), ~~(s * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(t) {
                        var n = t[0] >> e;
                        return gval = t[1] >> e, bval = t[2] >> e, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, u.prototype = {
                    push: function(e) {
                        this.vboxes.push({
                            vbox: e,
                            color: e.avg()
                        })
                    },
                    palette: function() {
                        return this.vboxes.map(function(e) {
                            return e.color
                        })
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
                        for (var t, n, i, l = this.vboxes, u = 0; u < l.size(); u++)((n = Math.sqrt(Math.pow(e[0] - l.peek(u).color[0], 2) + Math.pow(e[1] - l.peek(u).color[1], 2) + Math.pow(e[2] - l.peek(u).color[2], 2))) < t || void 0 === t) && (t = n, i = l.peek(u).color);
                        return i
                    },
                    forcebw: function() {
                        var e = this.vboxes;
                        e.sort(function(e, t) {
                            return i.naturalOrder(i.sum(e.color), i.sum(t.color))
                        });
                        var t = e[0].color;
                        t[0] < 5 && t[1] < 5 && t[2] < 5 && (e[0].color = [0, 0, 0]);
                        var n = e.length - 1,
                            l = e[n].color;
                        l[0] > 251 && l[1] > 251 && l[2] > 251 && (e[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(o, r) {
                        if (!o.length || r < 2 || r > 256) return !1;
                        var s, a, d, c, f, h, _, g, p, v, m, E, N, b, S, w, C = (s = o, f = Array(32768), s.forEach(function(n) {
                                d = n[0] >> e, c = n[1] >> e, f[a = t(d, c, n[2] >> e)] = (f[a] || 0) + 1
                            }), f),
                            A = 0;
                        C.forEach(function() {
                            A++
                        });
                        var I = (h = o, _ = C, m = 1e6, E = 0, N = 1e6, b = 0, S = 1e6, w = 0, h.forEach(function(t) {
                                g = t[0] >> e, p = t[1] >> e, v = t[2] >> e, g < m ? m = g : g > E && (E = g), p < N ? N = p : p > b && (b = p), v < S ? S = v : v > w && (w = v)
                            }), new l(m, E, N, b, S, w, _)),
                            O = new n(function(e, t) {
                                return i.naturalOrder(e.count(), t.count())
                            });

                        function y(e, n) {
                            for (var l, u = 1, o = 0; o < 1e3;) {
                                if (!(l = e.pop()).count()) {
                                    e.push(l), o++;
                                    continue
                                }
                                var r = function(e, n) {
                                        if (n.count()) {
                                            var l = n.r2 - n.r1 + 1,
                                                u = n.g2 - n.g1 + 1,
                                                o = n.b2 - n.b1 + 1,
                                                r = i.max([l, u, o]);
                                            if (1 == n.count()) return [n.copy()];
                                            var s, a, d, c, f, h = 0,
                                                _ = [],
                                                g = [];
                                            if (r == l)
                                                for (s = n.r1; s <= n.r2; s++) {
                                                    for (c = 0, a = n.g1; a <= n.g2; a++)
                                                        for (d = n.b1; d <= n.b2; d++) c += e[f = t(s, a, d)] || 0;
                                                    h += c, _[s] = h
                                                } else if (r == u)
                                                    for (s = n.g1; s <= n.g2; s++) {
                                                        for (c = 0, a = n.r1; a <= n.r2; a++)
                                                            for (d = n.b1; d <= n.b2; d++) c += e[f = t(a, s, d)] || 0;
                                                        h += c, _[s] = h
                                                    } else
                                                        for (s = n.b1; s <= n.b2; s++) {
                                                            for (c = 0, a = n.r1; a <= n.r2; a++)
                                                                for (d = n.g1; d <= n.g2; d++) c += e[f = t(a, d, s)] || 0;
                                                            h += c, _[s] = h
                                                        }
                                            return _.forEach(function(e, t) {
                                                g[t] = h - e
                                            }), p(r == l ? "r" : r == u ? "g" : "b")
                                        }

                                        function p(e) {
                                            var t, i, l, u, o, r = e + "1",
                                                a = e + "2",
                                                d = 0;
                                            for (s = n[r]; s <= n[a]; s++)
                                                if (_[s] > h / 2) {
                                                    for (l = n.copy(), u = n.copy(), t = s - n[r], o = t <= (i = n[a] - s) ? Math.min(n[a] - 1, ~~(s + i / 2)) : Math.max(n[r], ~~(s - 1 - t / 2)); !_[o];) o++;
                                                    for (d = g[o]; !d && _[o - 1];) d = g[--o];
                                                    return l[a] = o, u[r] = l[a] + 1, [l, u]
                                                }
                                        }
                                    }(C, l),
                                    s = r[0],
                                    a = r[1];
                                if (!s) return;
                                if (e.push(s), a && (e.push(a), u++), u >= n || o++ > 1e3) return
                            }
                        }
                        O.push(I), y(O, .75 * r);
                        for (var T = new n(function(e, t) {
                                return i.naturalOrder(e.count() * e.volume(), t.count() * t.volume())
                            }); O.size();) T.push(O.pop());
                        y(T, r - T.size());
                        for (var M = new u; T.size();) M.push(T.pop());
                        return M
                    }
                }
            }();
            e.exports = l.quantize
        },
        48174: function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            })
        },
        775560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return i.default
                },
                useStableMemo: function() {
                    return l.default
                },
                useLazyValue: function() {
                    return u.default
                }
            });
            var i = n("14716"),
                l = n("745510"),
                u = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007");
            var i = n("884691");

            function l() {
                let [, e] = (0, i.useState)({});
                return (0, i.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("884691");
            let l = {};

            function u(e) {
                let t = (0, i.useRef)(l);
                return t.current === l && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("884691"),
                l = n("48174");
            let u = [];

            function o(e, t) {
                let n = (0, i.useRef)(),
                    o = (0, i.useRef)(u);
                return o.current === u ? (n.current = e(), o.current = t) : !(0, l.default)(t, o.current) && (n.current = e(), o.current = t), n.current
            }
        },
        267363: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ack: function() {
                    return c
                },
                ackChannel: function() {
                    return f
                },
                bulkAck: function() {
                    return h
                },
                localAck: function() {
                    return _
                },
                enableAutomaticAck: function() {
                    return g
                },
                disableAutomaticAck: function() {
                    return p
                },
                ackGuildFeature: function() {
                    return v
                },
                ackUserFeature: function() {
                    return m
                }
            }), n("222007"), n("424973");
            var i = n("249654"),
                l = n("913144"),
                u = n("401690"),
                o = n("233069"),
                r = n("42203"),
                s = n("245997"),
                a = n("697218"),
                d = n("49111");

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = arguments.length > 3 ? arguments[3] : void 0,
                    u = arguments.length > 4 ? arguments[4] : void 0;
                l.default.dispatch({
                    type: "CHANNEL_ACK",
                    channelId: e,
                    messageId: i,
                    immediate: t,
                    force: n,
                    context: d.CURRENT_APP_CONTEXT,
                    location: u
                })
            }

            function f(e) {
                e.isCategory() ? ! function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = r.default.getChannel(e);
                    if (null == i || null == i.guild_id) return;
                    let l = s.default.getCategories(i.guild_id);
                    if (null == l[e]) return;
                    let a = l[e].filter(e => {
                            let {
                                channel: t
                            } = e;
                            return (0, o.isGuildReadableType)(t.type)
                        }).map(e => {
                            let {
                                channel: t
                            } = e;
                            return t.id
                        }),
                        d = [...a];
                    for (let e of (a.forEach(e => {
                            let t = u.default.getActiveJoinedThreadsForParent(i.guild_id, e);
                            for (let e in t) d.push(e)
                        }), d)) c(e, t, n)
                }(e.id, !0, !0) : e.isForumLikeChannel() ? c(e.id, !0, !0, i.default.fromTimestamp(Date.now())) : c(e.id, !0, !0)
            }

            function h(e, t) {
                l.default.dispatch({
                    type: "BULK_ACK",
                    channels: e,
                    context: d.CURRENT_APP_CONTEXT,
                    onFinished: t
                })
            }

            function _(e) {
                l.default.dispatch({
                    type: "CHANNEL_LOCAL_ACK",
                    channelId: e
                })
            }

            function g(e, t) {
                l.default.dispatch({
                    type: "ENABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function p(e, t) {
                l.default.dispatch({
                    type: "DISABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function v(e, t, n) {
                l.default.dispatch({
                    type: "GUILD_FEATURE_ACK",
                    id: e,
                    ackType: t,
                    ackedId: n,
                    local: !1
                })
            }

            function m(e, t) {
                var n;
                let i = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                null != i && l.default.dispatch({
                    type: "USER_NON_CHANNEL_ACK",
                    ackType: e,
                    ackedId: t,
                    local: !1
                })
            }
        },
        276825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CheckmarkSmallIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                u = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, u.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M18.7 7.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.29 7.3-7.3a1 1 0 0 1 1.4 0Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("773336");
            async function l(e, t) {
                let {
                    default: l
                } = await n.el("572544").then(n.bind(n, "572544")), u = l(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != u) u(null);
                else if (i.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        320954: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("917351"),
                l = n.n(i);

            function u(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
                return l(e).map(e => "null" === e.channel.id ? t[e.channel.id] : [e, t[e.channel.id]]).flattenDeep().filter(n).value()
            }
        },
        637929: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackMessageNotificationTimestamps: function() {
                    return s
                },
                default: function() {
                    return m
                }
            });
            var i = n("446674"),
                l = n("913144"),
                u = n("26989"),
                o = n("282109"),
                r = n("697218");

            function s(e, t) {
                var n;
                let i = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
                    s = o.default.isSuppressEveryoneEnabled(t),
                    a = o.default.isSuppressRolesEnabled(t),
                    d = null != e.mentions && e.mentions.some(e => e.id === i),
                    c = null == t || null == i ? null : u.default.getMember(t, i),
                    f = null != e.mention_roles && null != c && null != c.roles && e.mention_roles.some(e => c.roles.includes(e));
                l.default.dispatch({
                    type: "MESSAGE_NOTIFICATION_SHOWN",
                    guildId: t,
                    mentioned: d,
                    roleMentioned: f && !a,
                    everyoneMentioned: !0 === e.mention_everyone && !s
                })
            }
            let a = null,
                d = null,
                c = null,
                f = null,
                h = {},
                _ = {},
                g = {},
                p = {};
            class v extends i.default.Store {
                getGlobalStats() {
                    let e = e => null == e ? null : Math.floor((Date.now() - e) / 1e3);
                    return {
                        approx_seconds_since_last_notification: e(a),
                        approx_seconds_since_last_mention: e(d),
                        approx_seconds_since_last_role_mention: e(c),
                        approx_seconds_since_last_everyone_mention: e(f)
                    }
                }
                getStats(e) {
                    let t = e => null == e ? null : Math.floor((Date.now() - e) / 1e3);
                    return {
                        approx_seconds_since_last_notification: t(a),
                        approx_seconds_since_last_mention: t(d),
                        approx_seconds_since_last_role_mention: t(c),
                        approx_seconds_since_last_everyone_mention: t(f),
                        approx_seconds_since_last_guild_notification: null == e ? null : t(h[e]),
                        approx_seconds_since_last_guild_mention: null == e ? null : t(_[e]),
                        approx_seconds_since_last_guild_role_mention: null == e ? null : t(p[e]),
                        approx_seconds_since_last_guild_everyone_mention: null == e ? null : t(g[e])
                    }
                }
            }
            var m = new v(l.default, {
                CONNECTION_OPEN: function() {
                    let e = e => null != e && Date.now() - e < 6e4;
                    for (let t in !e(a) && (a = null), !e(d) && (d = null), !e(c) && (c = null), !e(f) && (f = null), h) !e(h[t]) && delete h[t];
                    for (let t in _) !e(_[t]) && delete _[t];
                    for (let t in p) !e(p[t]) && delete p[t];
                    for (let t in g) !e(g[t]) && delete g[t]
                },
                MESSAGE_NOTIFICATION_SHOWN: function(e) {
                    let {
                        guildId: t,
                        mentioned: n,
                        roleMentioned: i,
                        everyoneMentioned: l
                    } = e, u = Date.now();
                    a = u, null != t && (h[t] = u), n && (d = u, null != t && (_[t] = u)), i && (c = u, null != t && (p[t] = u)), l && (f = u, null != t && (g[t] = u))
                }
            })
        },
        245997: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("424973"), n("222007"), n("808653");
            var i = n("446674"),
                l = n("913144"),
                u = n("320954"),
                o = n("379881"),
                r = n("271938"),
                s = n("42203"),
                a = n("923959"),
                d = n("305961"),
                c = n("49111");
            let f = null,
                h = {},
                _ = null;

            function g() {
                return {
                    _categories: [],
                    null: []
                }
            }
            let p = g();

            function v(e, t) {
                e.index = t
            }

            function m(e) {
                let t = a.default.getChannels(e),
                    n = g(),
                    i = e => {
                        var t;
                        let {
                            channel: i
                        } = e, l = null !== (t = n[null != i.parent_id ? i.parent_id : "null"]) && void 0 !== t ? t : n.null;
                        l.push({
                            channel: i,
                            index: -1
                        })
                    };
                return t[c.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                    let {
                        channel: t
                    } = e;
                    n._categories.push({
                        channel: t,
                        index: -1
                    }), n[t.id] = []
                }), t[0, a.GUILD_SELECTABLE_CHANNELS_KEY].forEach(i), t[0, a.GUILD_VOCAL_CHANNELS_KEY].forEach(i), (0, u.default)(n._categories, n).forEach(v), h[e] = n, n
            }

            function E() {
                h = {}, null != f && m(f)
            }

            function N(e) {
                let {
                    guild: {
                        id: t
                    }
                } = e;
                h[t] = void 0, f === t && m(t)
            }

            function b(e) {
                let {
                    channel: {
                        guild_id: t
                    }
                } = e;
                if (null == t) return !1;
                h[t] = void 0, f === t && m(t)
            }

            function S(e) {
                let {
                    guildId: t
                } = e;
                h[t] = void 0, t === f && m(t)
            }

            function w(e, t) {
                if (_ = t, null == e || null == e.getGuildId()) return !1;
                let n = e.getGuildId();
                return null != n && (h[n] = void 0, n === f && m(n), !0)
            }

            function C() {
                m(c.FAVORITES)
            }
            class A extends i.default.Store {
                initialize() {
                    this.waitFor(a.default, d.default, r.default, s.default, o.default), this.syncWith([o.default], C)
                }
                getCategories(e) {
                    return null != e ? function(e) {
                        let t = h[e];
                        return null != t ? t : m(e)
                    }(e) : p
                }
            }
            A.displayName = "GuildCategoryStore";
            var I = new A(l.default, {
                CHANNEL_SELECT: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (f = null != t ? t : null, null == t || null != h[t]) return !1;
                    m(t)
                },
                CONNECTION_OPEN: E,
                OVERLAY_INITIALIZE: E,
                CACHE_LOADED_LAZY: E,
                GUILD_CREATE: N,
                GUILD_UPDATE: N,
                GUILD_DELETE: function(e) {
                    let {
                        guild: {
                            id: t
                        }
                    } = e;
                    delete h[t]
                },
                CHANNEL_CREATE: b,
                CHANNEL_DELETE: b,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e, n = !1;
                    for (let {
                            guild_id: e
                        }
                        of t) null != e && (h[e] = void 0, n = !0, f === e && m(e));
                    return n
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: n
                    } = e;
                    if (r.default.getId() !== n.id) return !1;
                    h[t] = void 0, t === f && m(t)
                },
                CURRENT_USER_UPDATE: function() {
                    if (null == f) return !1;
                    m(f)
                },
                GUILD_ROLE_CREATE: S,
                GUILD_ROLE_UPDATE: S,
                GUILD_ROLE_DELETE: S,
                IMPERSONATE_UPDATE: S,
                IMPERSONATE_STOP: S,
                VOICE_CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return null == t && null != _ ? w(s.default.getChannel(_), null) : w(s.default.getChannel(t), t)
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return t.reduce((e, t) => {
                        let {
                            channelId: n,
                            sessionId: i
                        } = t;
                        return r.default.getSessionId() !== i ? e : w(s.default.getChannel(n), n) || e
                    }, !1)
                }
            })
        },
        471671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var i = n("627445"),
                l = n.n(i),
                u = n("446674"),
                o = n("913144"),
                r = n("816454");
            let s = new Map;

            function a(e) {
                let t = s.get(e);
                return null == t ? (console.warn("Window state not initialized", e), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : t
            }
            class d extends u.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, r.getMainWindowId)();
                    return a(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return s.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, r.getMainWindowId)();
                    return a(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, r.getMainWindowId)();
                    return a(e).windowSize
                }
            }
            d.displayName = "WindowStore";
            let c = new d(o.default, {
                WINDOW_INIT: function(e) {
                    l(!s.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: i,
                        focused: u
                    } = e;
                    return s.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: i,
                        focused: u
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    let t = a(e.windowId);
                    return t.isElementFullscreen !== e.isElementFullscreen && (s.set(e.windowId, {
                        ...t,
                        isElementFullscreen: e.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(e) {
                    let t = a(e.windowId);
                    return t.focused !== e.focused && (s.set(e.windowId, {
                        ...t,
                        focused: e.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(e) {
                    let t = a(e.windowId);
                    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (s.set(e.windowId, {
                        ...t,
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(e) {
                    return s.delete(e.windowId), !0
                }
            });
            n.el("599110").then(n.bind(n, "599110")).then(e => {
                let {
                    addExtraAnalyticsDecorator: t
                } = e;
                t(e => {
                    e.client_app_state = c.isFocused() ? "focused" : "unfocused"
                })
            });
            var f = c
        },
        486952: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                u = n("276825"),
                o = n("75196"),
                r = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, i.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: l
                        })
                    })
                }, u.CheckmarkSmallIcon, void 0, {
                    size: 16
                })
        },
        103603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fit: function() {
                    return a
                },
                zoomFit: function() {
                    return d
                },
                getRatio: function() {
                    return c
                },
                getCoverRatio: function() {
                    return f
                },
                makeCssUrlString: function() {
                    return h
                },
                getPalette: function() {
                    return g
                },
                getPaletteForAvatar: function() {
                    return p
                },
                readFileAsBase64: function() {
                    return m
                },
                dataUriFileSize: function() {
                    return E
                },
                dataUrlToFile: function() {
                    return N
                },
                isPNGAnimated: function() {
                    return b
                }
            }), n("424973"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
            var i = n("627445"),
                l = n.n(i),
                u = n("917351"),
                o = n.n(u),
                r = n("48648"),
                s = n.n(r);

            function a(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: l,
                    minWidth: u = 0,
                    minHeight: o = 0
                } = e;
                if (t !== i || n !== l) {
                    let e = t > i ? i / t : 1;
                    t = Math.max(Math.round(t * e), u), n = Math.max(Math.round(n * e), o);
                    let r = n > l ? l / n : 1;
                    t = Math.max(Math.round(t * r), u), n = Math.max(Math.round(n * r), o)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function d(e, t) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    i = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return a({
                    width: e,
                    height: t,
                    maxWidth: i,
                    maxHeight: n
                })
            }

            function c(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: l
                } = e, u = 1;
                t > i && (u = i / t), t = Math.round(t * u);
                let o = 1;
                return (n = Math.round(n * u)) > l && (o = l / n), Math.min(u * o, 1)
            }

            function f(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: l
                } = e;
                return t === n ? 1 : Math.min(Math.max(i / t, l / n), 1)
            }

            function h(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            let _ = [
                [0, 0, 0]
            ];

            function g(e, t, n) {
                let i = document.createElement("canvas"),
                    l = i.getContext("2d");
                if (null == l) return _;
                let u = i.width = 0 === e.width ? 128 : e.width,
                    o = i.height = 0 === e.height ? 128 : e.height;
                l.drawImage(e, 0, 0, u, o);
                let r = l.getImageData(0, 0, u, o).data,
                    a = function(e, t, n) {
                        let i = [];
                        for (let l = 0, u, o, r, s, a; l < t; l += n) o = e[(u = 4 * l) + 0], r = e[u + 1], s = e[u + 2], (void 0 === (a = e[u + 3]) || a >= 125) && !(o > 250 && r > 250 && s > 250) && i.push([o, r, s]);
                        return i
                    }(r, u * o, n),
                    d = s(a, t);
                return "boolean" == typeof d ? _ : d.palette()
            }
            let p = e => "number" == typeof e ? null : v(e),
                v = o.memoize(e => new Promise((t, n) => {
                    let i = new Image;
                    i.crossOrigin = "Anonymous", i.onerror = e => {
                        n(e), i.onerror = i.onload = null, i = null
                    }, i.onload = () => {
                        t(g(i, 5, 10)), i.onerror = i.onload = null, i = null
                    }, i.src = e
                }));

            function m(e) {
                return new Promise((t, n) => {
                    let i = new FileReader;
                    i.readAsDataURL(e), i.onload = () => {
                        l("string" == typeof i.result, "Result must be a string"), t(i.result)
                    }, i.onerror = e => n(e)
                })
            }

            function E(e) {
                let t = e.split(";base64,");
                return l(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
            }
            async function N(e, t, n) {
                let i = function(e) {
                        let t;
                        t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                        let n = e.split(",")[0].split(":")[1].split(";")[0],
                            i = new Uint8Array(t.length);
                        for (var l = 0; l < t.length; l++) i[l] = t.charCodeAt(l);
                        return new Blob([i], {
                            type: n
                        })
                    }(e),
                    l = await i.arrayBuffer();
                return new File([l], t, {
                    type: n
                })
            }
            async function b(e) {
                var t;
                let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let i = await e.text(),
                    l = i.indexOf("IDAT");
                return !!(l > 0) && -1 !== i.substring(0, l).indexOf("acTL") || !1
            }
        },
        34676: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NotificationLabels: function() {
                    return l
                },
                NotificationLabel: function() {
                    return g
                },
                MessageNotificationSettings: function() {
                    return p
                },
                trackGuildNotificationSettingsUpdate: function() {
                    return v
                },
                muteConfigToTimestamp: function() {
                    return E
                },
                trackChannelNotificationSettingsUpdate: function() {
                    return N
                },
                getCurrentGuildSettings: function() {
                    return b
                },
                getManyCurrentGuildSettings: function() {
                    return S
                },
                getCurrentChannelSettings: function() {
                    return w
                },
                getManyCurrentChannelSettings: function() {
                    return C
                }
            }), n("702976"), n("222007");
            var i, l, u, o, r = n("716241"),
                s = n("637929"),
                a = n("42203"),
                d = n("282109"),
                c = n("568734"),
                f = n("49111"),
                h = n("133335"),
                _ = n("397336");
            (u = i || (i = {})).GUILD = "guild", u.CHANNEL = "channel", (o = l || (l = {})).ForumThreadsCreatedOn = "enabled forum thread created notifs", o.ForumThreadsCreatedOff = "disabled forum thread created notifs", o.SuppressEveryoneOn = "enabled suppress everyone", o.SuppressEveryoneOff = "disabled suppress everyone", o.SuppressRolesOn = "enabled suppress roles", o.SuppressRolesOff = "disabled suppress roles", o.HighlightsOn = "enabled highlights", o.HighlightsOff = "disabled highlights", o.MobilePushOn = "enabled mobile push notifications", o.MobilePushOff = "disabled mobile push notifications", o.UnreadsAll = "unreads set to all messages", o.UnreadsMentions = "unreads set to mentions", o.UnreadsDefault = "unreads set to the default", o.NotificationsAll = "notifications set to all messages", o.NotificationsMentions = "notifications set to mentions", o.NotificationsNothing = "notifications set to nothing", o.NotificationsDefault = "notifications set to the default", o.PresetAll = "notification preset set to all messages", o.PresetMentions = "notification preset set to mentions", o.PresetNothing = "notification preset set to nothing", o.PresetDefault = "notification preset set to the default", o.OptedIn = "opted in to entity", o.OptedOut = "opted out from entity", o.Favorited = "favorited", o.UnFavorited = "unfavorited", o.Muted = "muted", o.Unmuted = "unmuted", o.MutedScheduledEvents = "muted scheduled events", o.UnmutedScheduledEvents = "unmuted scheduled events", o.OverrideCreated = "channel override created", o.OverrideDeleted = "channel override deleted";
            let g = {
                    forumThreadsCreated: e => e ? "enabled forum thread created notifs" : "disabled forum thread created notifs",
                    suppressEveryone: e => e ? "enabled suppress everyone" : "disabled suppress everyone",
                    suppressRoles: e => e ? "enabled suppress roles" : "disabled suppress roles",
                    highlights: e => e ? "enabled highlights" : "disabled highlights",
                    mobilePush: e => e ? "enabled mobile push notifications" : "disabled mobile push notifications",
                    optedIn: e => e ? "opted in to entity" : "opted out from entity",
                    favorited: e => e ? "favorited" : "unfavorited",
                    muted: e => e ? "muted" : "unmuted",
                    mutedEvents: e => e ? "muted scheduled events" : "unmuted scheduled events",
                    unreads: e => e === h.UnreadSetting.ALL_MESSAGES ? "unreads set to all messages" : e === h.UnreadSetting.ONLY_MENTIONS ? "unreads set to mentions" : "unreads set to the default",
                    notifications: e => e === f.UserNotificationSettings.ALL_MESSAGES ? "notifications set to all messages" : e === f.UserNotificationSettings.ONLY_MENTIONS ? "notifications set to mentions" : e === f.UserNotificationSettings.NO_MESSAGES ? "notifications set to nothing" : "notifications set to the default"
                },
                p = Object.freeze({
                    [f.UserNotificationSettings.ALL_MESSAGES]: "All",
                    [f.UserNotificationSettings.ONLY_MENTIONS]: "Mentions",
                    [f.UserNotificationSettings.NO_MESSAGES]: "Nothing",
                    [f.UserNotificationSettings.NULL]: null
                });

            function v(e, t, n, i, l) {
                var u, o;
                let a = function(e) {
                        var t, n, i, l, u, o, r;
                        let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            a = null != s.mute_config && null != s.mute_config.end_time ? new Date(s.mute_config.end_time).getTime() : e.guild_muted_until,
                            d = null != s.message_notifications ? p[s.message_notifications] : e.guild_message_notification_settings;
                        return {
                            guild_muted_until: a,
                            guild_flags: null !== (t = s.flags) && void 0 !== t ? t : e.guild_flags,
                            guild_is_muted: null !== (n = s.muted) && void 0 !== n ? n : e.guild_is_muted,
                            guild_message_notification_settings: d,
                            guild_suppress_roles: null !== (i = s.suppress_roles) && void 0 !== i ? i : e.guild_suppress_roles,
                            guild_receive_mobile_push: null !== (l = s.mobile_push) && void 0 !== l ? l : e.guild_receive_mobile_push,
                            guild_notify_highlights: null !== (u = s.notify_highlights) && void 0 !== u ? u : e.guild_notify_highlights,
                            guild_suppress_everyone: null !== (o = s.suppress_everyone) && void 0 !== o ? o : e.guild_suppress_everyone,
                            guild_scheduled_events_muted: null !== (r = s.mute_scheduled_events) && void 0 !== r ? r : e.guild_scheduled_events_muted
                        }
                    },
                    d = a(n),
                    h = a(b(e), t),
                    g = m(d, h, "RETURN_PREVIOUS_WHEN_CHANGED"),
                    v = null !== (u = g("guild_flags")) && void 0 !== u ? u : 0,
                    E = (null !== (o = h.guild_flags) && void 0 !== o ? o : 0) ^ v,
                    N = 0 === (0, c.removeFlags)(E, _.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_OFF, _.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON);
                r.default.trackWithMetadata(f.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
                    ...h,
                    ...s.default.getStats(e),
                    location: l,
                    guild_id: e,
                    update_type: "guild",
                    label: i,
                    guild_flags_old: g("guild_flags"),
                    guild_is_muted_old: g("guild_is_muted"),
                    guild_suppress_roles_old: g("guild_suppress_roles"),
                    guild_notify_highlights_old: g("guild_notify_highlights"),
                    guild_suppress_everyone_old: g("guild_suppress_everyone"),
                    guild_receive_mobile_push_old: g("guild_receive_mobile_push"),
                    guild_scheduled_events_muted_old: g("guild_scheduled_events_muted"),
                    guild_message_notification_settings_old: g("guild_message_notification_settings"),
                    is_opt_in_only_change: N
                })
            }

            function m(e, t, n) {
                return i => {
                    if ("RETURN_PREVIOUS_WHEN_CHANGED" === n) return e[i] !== t[i] ? e[i] : void 0
                }
            }

            function E(e) {
                return null != e && null != e.end_time ? new Date(e.end_time).getTime() : null
            }

            function N(e, t, n, i, l, u) {
                var o, d;
                let h = function(t) {
                        var n, i;
                        let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            u = null !== (n = l.muted) && void 0 !== n ? n : null == t ? void 0 : t.channel_is_muted,
                            o = null != l.message_notifications ? p[l.message_notifications] : null == t ? void 0 : t.channel_message_notification_settings,
                            r = null == e ? null : !0 === u || null != o;
                        return {
                            channel_is_muted: u,
                            channel_is_overridden: r,
                            channel_flags: null !== (i = l.flags) && void 0 !== i ? i : null == t ? void 0 : t.channel_flags,
                            channel_message_notification_settings: o,
                            channel_muted_until: E(l.mute_config)
                        }
                    },
                    g = h(i),
                    v = h(w(e, t), n),
                    N = m(g, v, "RETURN_PREVIOUS_WHEN_CHANGED"),
                    b = a.default.getChannel(t),
                    S = null !== (o = N("channel_flags")) && void 0 !== o ? o : 0,
                    C = (null !== (d = v.channel_flags) && void 0 !== d ? d : 0) ^ S,
                    A = 0 === (0, c.removeFlags)(C, _.ChannelNotificationSettingsFlags.FAVORITED, _.ChannelNotificationSettingsFlags.OPT_IN_ENABLED);
                r.default.trackWithMetadata(f.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
                    ...v,
                    ...s.default.getStats(e),
                    location: u,
                    guild_id: e,
                    channel_id: t,
                    update_type: "channel",
                    label: l,
                    parent_id: null != b ? b.parent_id : null,
                    channel_flags_old: N("channel_flags"),
                    channel_is_muted_old: N("channel_is_muted"),
                    channel_muted_until_old: N("channel_muted_until"),
                    channel_is_overridden_old: N("channel_is_overridden"),
                    channel_message_notification_settings_old: N("channel_message_notification_settings"),
                    is_opt_in_only_change: A
                })
            }

            function b(e) {
                let t = d.default.isMuted(e),
                    n = d.default.getMuteConfig(e);
                return {
                    guild_suppress_everyone: d.default.isSuppressEveryoneEnabled(e),
                    guild_suppress_roles: d.default.isSuppressRolesEnabled(e),
                    guild_scheduled_events_muted: d.default.isMuteScheduledEventsEnabled(e),
                    guild_is_muted: t,
                    guild_muted_until: null != n && null != n.end_time ? new Date(n.end_time).getTime() : null,
                    guild_receive_mobile_push: d.default.isMobilePushEnabled(e),
                    guild_message_notification_settings: p[d.default.getMessageNotifications(e)],
                    guild_notify_highlights: d.default.getNotifyHighlights(e),
                    guild_flags: d.default.getGuildFlags(e)
                }
            }

            function S(e) {
                let t = new Map;
                return e.forEach(e => t.set(e, b(e))), t
            }

            function w(e, t) {
                let n = d.default.isChannelMuted(e, t),
                    i = d.default.getChannelMuteConfig(e, t);
                return {
                    channel_is_muted: n,
                    channel_muted_until: null != i && null != i.end_time ? new Date(i.end_time).getTime() : null,
                    channel_message_notification_settings: p[d.default.getChannelMessageNotifications(e, t)],
                    channel_flags: d.default.getChannelIdFlags(e, t)
                }
            }

            function C(e, t) {
                let n = new Map;
                return t.forEach(t => n.set(t, w(e, t))), n
            }
        },
        655518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("781738");
            var i = {
                escape: e => e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }
        }
    }
]);