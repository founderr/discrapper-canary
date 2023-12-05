(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["86875"], {
        78349: function(t, e, n) {
            "use strict";
            n("424973"), t.exports.parse = function(t) {
                var e = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
                if (!e) return null;
                e.shift();
                var n = null,
                    r = [];
                e[2] && (n = (o = e[2].split("-")).shift(), r = o);
                var i = [];
                e[5] && (i = e[5].split("-")).shift();
                var u = [];
                if (e[6]) {
                    (o = e[6].split("-")).shift();
                    for (var o, a, l = []; o.length;) {
                        var s = o.shift();
                        1 === s.length ? a ? (u.push({
                            singleton: a,
                            extension: l
                        }), a = s, l = []) : a = s : l.push(s)
                    }
                    u.push({
                        singleton: a,
                        extension: l
                    })
                }
                var c = [];
                e[7] && ((c = e[7].split("-")).shift(), c.shift());
                var d = [];
                return e[8] && (d = e[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: n,
                            extlang: r
                        },
                        script: e[3] || null,
                        region: e[4] || null,
                        variant: i,
                        extension: u,
                        privateuse: c
                    },
                    privateuse: d,
                    grandfathered: {
                        irregular: e[0] || null,
                        regular: e[1] || null
                    }
                }
            }
        },
        717837: function(t, e, n) {
            "use strict";
            t.exports = function(t) {
                return (t = String(t || ""), u.test(t)) ? "rtl" : o.test(t) ? "ltr" : "neutral"
            };
            var r = "֑-߿יִ-﷽ﹰ-ﻼ",
                i = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                u = RegExp("^[^" + i + "]*[" + r + "]"),
                o = RegExp("^[^" + r + "]*[" + i + "]")
        },
        448105: function(t, e, n) {
            "use strict";
            t.exports = function(t, e) {
                var n = e.length,
                    r = t.length;
                if (r > n) return !1;
                if (r === n) return t === e;
                t: for (var i = 0, u = 0; i < r; i++) {
                    for (var o = t.charCodeAt(i); u < n;)
                        if (e.charCodeAt(u++) === o) continue t;
                    return !1
                }
                return !0
            }
        },
        48648: function(t, e, n) {
            if (n("808653"), n("424973"), !r) var r = {
                map: function(t, e) {
                    var n = {};
                    return e ? t.map(function(t, r) {
                        return n.index = r, e.call(n, t)
                    }) : t.slice()
                },
                naturalOrder: function(t, e) {
                    return t < e ? -1 : t > e ? 1 : 0
                },
                sum: function(t, e) {
                    var n = {};
                    return t.reduce(e ? function(t, r, i) {
                        return n.index = i, t + e.call(n, r)
                    } : function(t, e) {
                        return t + e
                    }, 0)
                },
                max: function(t, e) {
                    return Math.max.apply(null, e ? r.map(t, e) : t)
                }
            };
            var i = function() {
                var t = 3;

                function e(t, e, n) {
                    return (t << 10) + (e << 5) + n
                }

                function n(t) {
                    var e = [],
                        n = !1;

                    function r() {
                        e.sort(t), n = !0
                    }
                    return {
                        push: function(t) {
                            e.push(t), n = !1
                        },
                        peek: function(t) {
                            return !n && r(), void 0 === t && (t = e.length - 1), e[t]
                        },
                        pop: function() {
                            return !n && r(), e.pop()
                        },
                        size: function() {
                            return e.length
                        },
                        map: function(t) {
                            return e.map(t)
                        },
                        debug: function() {
                            return !n && r(), e
                        }
                    }
                }

                function i(t, e, n, r, i, u, o) {
                    this.r1 = t, this.r2 = e, this.g1 = n, this.g2 = r, this.b1 = i, this.b2 = u, this.histo = o
                }

                function u() {
                    this.vboxes = new n(function(t, e) {
                        return r.naturalOrder(t.vbox.count() * t.vbox.volume(), e.vbox.count() * e.vbox.volume())
                    })
                }
                return i.prototype = {
                    volume: function(t) {
                        return (!this._volume || t) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(t) {
                        var n = this.histo;
                        if (!this._count_set || t) {
                            var r, i, u, o = 0;
                            for (r = this.r1; r <= this.r2; r++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (u = this.b1; u <= this.b2; u++) o += n[e(r, i, u)] || 0;
                            this._count = o, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new i(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(t) {
                        var n = this.histo;
                        if (!this._avg || t) {
                            var r, i, u, o, a = 0,
                                l = 8,
                                s = 0,
                                c = 0,
                                d = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (u = this.g1; u <= this.g2; u++)
                                    for (o = this.b1; o <= this.b2; o++) a += r = n[e(i, u, o)] || 0, s += r * (i + .5) * l, c += r * (u + .5) * l, d += r * (o + .5) * l;
                            a ? this._avg = [~~(s / a), ~~(c / a), ~~(d / a)] : this._avg = [~~(l * (this.r1 + this.r2 + 1) / 2), ~~(l * (this.g1 + this.g2 + 1) / 2), ~~(l * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(e) {
                        var n = e[0] >> t;
                        return gval = e[1] >> t, bval = e[2] >> t, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, u.prototype = {
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
                        for (var e = this.vboxes, n = 0; n < e.size(); n++)
                            if (e.peek(n).vbox.contains(t)) return e.peek(n).color;
                        return this.nearest(t)
                    },
                    nearest: function(t) {
                        for (var e, n, r, i = this.vboxes, u = 0; u < i.size(); u++)((n = Math.sqrt(Math.pow(t[0] - i.peek(u).color[0], 2) + Math.pow(t[1] - i.peek(u).color[1], 2) + Math.pow(t[2] - i.peek(u).color[2], 2))) < e || void 0 === e) && (e = n, r = i.peek(u).color);
                        return r
                    },
                    forcebw: function() {
                        var t = this.vboxes;
                        t.sort(function(t, e) {
                            return r.naturalOrder(r.sum(t.color), r.sum(e.color))
                        });
                        var e = t[0].color;
                        e[0] < 5 && e[1] < 5 && e[2] < 5 && (t[0].color = [0, 0, 0]);
                        var n = t.length - 1,
                            i = t[n].color;
                        i[0] > 251 && i[1] > 251 && i[2] > 251 && (t[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(o, a) {
                        if (!o.length || a < 2 || a > 256) return !1;
                        var l, s, c, d, f, h, v, E, p, _, I, g, m, R, S, M, A = (l = o, f = Array(32768), l.forEach(function(n) {
                                c = n[0] >> t, d = n[1] >> t, f[s = e(c, d, n[2] >> t)] = (f[s] || 0) + 1
                            }), f),
                            N = 0;
                        A.forEach(function() {
                            N++
                        });
                        var w = (h = o, v = A, I = 1e6, g = 0, m = 1e6, R = 0, S = 1e6, M = 0, h.forEach(function(e) {
                                E = e[0] >> t, p = e[1] >> t, _ = e[2] >> t, E < I ? I = E : E > g && (g = E), p < m ? m = p : p > R && (R = p), _ < S ? S = _ : _ > M && (M = _)
                            }), new i(I, g, m, R, S, M, v)),
                            O = new n(function(t, e) {
                                return r.naturalOrder(t.count(), e.count())
                            });

                        function T(t, n) {
                            for (var i, u = 1, o = 0; o < 1e3;) {
                                if (!(i = t.pop()).count()) {
                                    t.push(i), o++;
                                    continue
                                }
                                var a = function(t, n) {
                                        if (n.count()) {
                                            var i = n.r2 - n.r1 + 1,
                                                u = n.g2 - n.g1 + 1,
                                                o = n.b2 - n.b1 + 1,
                                                a = r.max([i, u, o]);
                                            if (1 == n.count()) return [n.copy()];
                                            var l, s, c, d, f, h = 0,
                                                v = [],
                                                E = [];
                                            if (a == i)
                                                for (l = n.r1; l <= n.r2; l++) {
                                                    for (d = 0, s = n.g1; s <= n.g2; s++)
                                                        for (c = n.b1; c <= n.b2; c++) d += t[f = e(l, s, c)] || 0;
                                                    h += d, v[l] = h
                                                } else if (a == u)
                                                    for (l = n.g1; l <= n.g2; l++) {
                                                        for (d = 0, s = n.r1; s <= n.r2; s++)
                                                            for (c = n.b1; c <= n.b2; c++) d += t[f = e(s, l, c)] || 0;
                                                        h += d, v[l] = h
                                                    } else
                                                        for (l = n.b1; l <= n.b2; l++) {
                                                            for (d = 0, s = n.r1; s <= n.r2; s++)
                                                                for (c = n.g1; c <= n.g2; c++) d += t[f = e(s, c, l)] || 0;
                                                            h += d, v[l] = h
                                                        }
                                            return v.forEach(function(t, e) {
                                                E[e] = h - t
                                            }), p(a == i ? "r" : a == u ? "g" : "b")
                                        }

                                        function p(t) {
                                            var e, r, i, u, o, a = t + "1",
                                                s = t + "2",
                                                c = 0;
                                            for (l = n[a]; l <= n[s]; l++)
                                                if (v[l] > h / 2) {
                                                    for (i = n.copy(), u = n.copy(), e = l - n[a], o = e <= (r = n[s] - l) ? Math.min(n[s] - 1, ~~(l + r / 2)) : Math.max(n[a], ~~(l - 1 - e / 2)); !v[o];) o++;
                                                    for (c = E[o]; !c && v[o - 1];) c = E[--o];
                                                    return i[s] = o, u[a] = i[s] + 1, [i, u]
                                                }
                                        }
                                    }(A, i),
                                    l = a[0],
                                    s = a[1];
                                if (!l) return;
                                if (t.push(l), s && (t.push(s), u++), u >= n || o++ > 1e3) return
                            }
                        }
                        O.push(w), T(O, .75 * a);
                        for (var b = new n(function(t, e) {
                                return r.naturalOrder(t.count() * t.volume(), e.count() * e.volume())
                            }); O.size();) b.push(O.pop());
                        T(b, a - b.size());
                        for (var C = new u; b.size();) C.push(b.pop());
                        return C
                    }
                }
            }();
            t.exports = i.quantize
        },
        48174: function(t, e, n) {
            "use strict";

            function r(t, e) {
                if (t.length !== e.length) return !1;
                for (let n = 0; n < e.length && n < t.length; n++)
                    if (!Object.is(t[n], e[n])) return !1;
                return !0
            }
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            })
        },
        775560: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return i.default
                },
                useLazyValue: function() {
                    return u.default
                }
            });
            var r = n("14716"),
                i = n("745510"),
                u = n("315378")
        },
        14716: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            }), n("222007");
            var r = n("884691");

            function i() {
                let [, t] = (0, r.useState)({});
                return (0, r.useCallback)(() => t({}), [])
            }
        },
        315378: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var r = n("884691");
            let i = {};

            function u(t) {
                let e = (0, r.useRef)(i);
                return e.current === i && (e.current = t()), e.current
            }
        },
        745510: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("884691"),
                i = n("48174");
            let u = [];

            function o(t, e) {
                let n = (0, r.useRef)(),
                    o = (0, r.useRef)(u);
                return o.current === u ? (n.current = t(), o.current = e) : !(0, i.default)(e, o.current) && (n.current = t(), o.current = e), n.current
            }
        },
        69448: function(t, e, n) {
            "use strict";
            t.exports = n.p + "f6da6e7ed1d57e445d0e.svg"
        },
        276825: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                CheckmarkSmallIcon: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                u = n("75196");
            let o = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...l
                } = t;
                return (0, r.jsx)("svg", {
                    ...(0, u.default)(l),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M18.7 7.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.29 7.3-7.3a1 1 0 0 1 1.4 0Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        599417: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var r, i = n("872717"),
                u = n("49111"),
                o = n("782340");
            r = class extends i.default.V8APIError {
                constructor(t, e) {
                    super(t, e, null != e ? o.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: u.Links.STATUS,
                        details: "".concat(e)
                    }) : o.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: u.Links.STATUS
                    }))
                }
            }
        },
        545158: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var r = n("773336");
            async function i(t, e) {
                let {
                    default: i
                } = await n.el("572544").then(n.bind(n, "572544")), u = i(t, {
                    skipExtensionCheck: e,
                    analyticsLocations: []
                });
                if (null != u) u(null);
                else if (r.isPlatformEmbedded) window.open(t);
                else {
                    let e = document.createElement("a");
                    e.href = t, e.target = "_blank", e.rel = "noreferrer noopener", e.click()
                }
            }
        },
        988268: function(t, e, n) {
            "use strict";
            var r, i, u, o;
            n.r(e), n.d(e, {
                ApplicationTypes: function() {
                    return r
                },
                BotTagTypes: function() {
                    return i
                }
            }), (u = r || (r = {}))[u.GAME = 1] = "GAME", u[u.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", u[u.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (o = i || (i = {}))[o.BOT = 0] = "BOT", o[o.SERVER = 1] = "SERVER", o[o.SYSTEM_DM = 2] = "SYSTEM_DM", o[o.OFFICIAL = 3] = "OFFICIAL", o[o.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", o[o.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", o[o.AI = 6] = "AI", o[o.REMIX = 7] = "REMIX"
        },
        616265: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var r = {
                openCreateGuildModal: t => {
                    n.el("297267").then(n.bind(n, "297267")).then(e => {
                        let {
                            openCreateGuildModal: n
                        } = e;
                        return n(t)
                    })
                },
                updateCreateGuildModal: t => {
                    n.el("297267").then(n.bind(n, "297267")).then(e => {
                        let {
                            updateCreateGuildModal: n
                        } = e;
                        return n(t)
                    })
                }
            }
        },
        413266: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                openReportRaidModal: function() {
                    return u
                },
                openSafetyChannelSetupModal: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078");

            function u(t) {
                (0, i.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("423588").then(n.bind(n, "423588"));
                    return n => (0, r.jsx)(e, {
                        ...n,
                        guildId: t
                    })
                })
            }

            function o(t) {
                (0, i.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("982537").then(n.bind(n, "982537"));
                    return n => (0, r.jsx)(e, {
                        ...n,
                        guildId: t
                    })
                })
            }
        },
        701203: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useCanReportRaid: function() {
                    return d
                },
                useCanEnableRaidAlerts: function() {
                    return f
                }
            });
            var r = n("884691"),
                i = n("446674");
            n("926809");
            var u = n("957255"),
                o = n("610174"),
                a = n("413476"),
                l = n("311161"),
                s = n("54346"),
                c = n("49111");

            function d(t) {
                var e;
                let n = null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : "",
                    {
                        enableRaidReporting: o
                    } = a.ReportRaidExperiment.useExperiment({
                        guildId: n,
                        location: "4467c7_1"
                    }, {
                        autoTrackExposure: !1
                    }),
                    d = (0, i.useStateFromStores)([u.default], () => (function(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default;
                        return e.can(c.Permissions.BAN_MEMBERS, t) || e.can(c.Permissions.KICK_MEMBERS, t) || e.can(c.Permissions.MANAGE_GUILD, t)
                    })(t, u.default), [t]),
                    f = (0, i.useStateFromStores)([s.default], () => null != t ? s.default.getGuildIncident(t.id) : null, [t]),
                    h = null != f && (0, l.hasDetectedActivity)(f);
                return r.useEffect(() => {
                    !h && d && a.ReportRaidExperiment.trackExposure({
                        guildId: n,
                        location: "4467c7_2"
                    })
                }, [h, d, n]), !h && d && o
            }

            function f(t) {
                var e;
                let n = null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : "",
                    r = (0, i.useStateFromStores)([u.default], () => (function(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default;
                        return e.can(c.Permissions.MANAGE_GUILD, t)
                    })(t, u.default), [t]),
                    {
                        enableRaidAlerts: l
                    } = a.RaidAlertExperiment.useExperiment({
                        guildId: n,
                        location: "4467c7_3"
                    }, {
                        autoTrackExposure: r
                    }),
                    {
                        showAlertMode: s
                    } = (0, o.useGuildAlertModeEnabled)(n);
                return r && (l || s)
            }
        },
        689226: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getRoleIconData: function() {
                    return d
                },
                replaceRoleIconSourceSize: function() {
                    return f
                },
                isRoleIconAssetUrl: function() {
                    return v
                },
                canGuildUseRoleIcons: function() {
                    return E
                }
            }), n("781738");
            var r = n("867805"),
                i = n("407063"),
                u = n("315102"),
                o = n("773336"),
                a = n("49111");
            let l = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                s = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                c = (0, o.isAndroid)(),
                d = (t, e) => {
                    if (null == t) return null;
                    let n = null != t.unicodeEmoji ? r.default.getByName(r.default.convertSurrogateToName(t.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: h(t, e),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                f = (t, e) => t.replace(/size=[0-9]+/g, "size=".concat((0, i.getBestMediaProxySize)(e * (0, i.getDevicePixelRatio)()))),
                h = (t, e) => {
                    let {
                        id: n,
                        icon: r
                    } = t;
                    if (null == r) return;
                    if (r.startsWith("data:")) return r;
                    let o = u.SUPPORTS_WEBP ? "webp" : "png",
                        d = "",
                        f = "quality=lossless";
                    return (null != e && (d = "size=" + (0, i.getBestMediaProxySize)(e * (0, i.getDevicePixelRatio)()), f = c ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(l, "/").concat(n, "/").concat(r, ".").concat(o, "?").concat(d).concat(f) : "".concat(s).concat(a.Endpoints.ROLE_ICON(n, r), "?").concat(d)
                },
                v = t => t.startsWith(l) || t.startsWith("".concat(s, "/roles")) && t.includes("/icons/"),
                E = (t, e) => {
                    var n;
                    let r = (null == e ? void 0 : null === (n = e.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return r || t.features.has(a.GuildFeatures.ROLE_ICONS)
                }
        },
        50926: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return _
                }
            });
            var r = n("872717"),
                i = n("913144"),
                u = n("479756"),
                o = n("38654"),
                a = n("9294"),
                l = n("26989"),
                s = n("337543"),
                c = n("697218"),
                d = n("49111");
            let f = async (t, e) => {
                let n = null != e ? e : s.default.getInviteKeyForGuildId(t),
                    u = c.default.getCurrentUser(),
                    o = !l.default.isMember(t, null == u ? void 0 : u.id);
                try {
                    let e = await r.default.get({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(t),
                        query: {
                            with_guild: o,
                            invite_code: null != n ? (0, a.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == e.body) throw e;
                    let {
                        body: u
                    } = e;
                    return i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: t,
                        form: {
                            version: u.version,
                            description: u.description,
                            formFields: u.form_fields,
                            guild: u.guild
                        }
                    }), u
                } catch (e) {
                    i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: t
                    })
                }
            }, h = async (t, e) => {
                let n = await r.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(t),
                        body: {
                            form_fields: e
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: u
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: t,
                    form: {
                        version: u.version,
                        description: u.description,
                        formFields: u.form_fields
                    }
                })
            }, v = async (t, e) => {
                let n = await r.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(t),
                        body: {
                            description: e
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: u
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: t,
                    form: {
                        version: u.version,
                        description: u.description,
                        formFields: u.form_fields
                    }
                })
            }, E = async (t, e) => {
                await r.default.patch({
                    url: d.Endpoints.GUILD_MEMBER_VERIFICATION(t),
                    body: {
                        enabled: e
                    },
                    oldFormErrors: !0
                })
            }, p = async (t, e) => {
                if (o.default.isFullServerPreview(t)) {
                    (0, u.updateImpersonatedData)(t, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await r.default.put({
                            url: d.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(t),
                            body: {
                                version: e.version,
                                form_fields: e.formFields
                            }
                        }),
                        {
                            body: u
                        } = n;
                    return i.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: t,
                        request: u
                    }), u
                } catch (t) {
                    throw t
                }
            };
            var _ = {
                fetchVerificationForm: f,
                updateVerificationForm: h,
                updateVerificationFormDescription: v,
                enableVerificationForm: E,
                submitVerificationForm: p
            }
        },
        394294: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return u
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return o
                },
                MAX_FORM_ELEMENTS: function() {
                    return a
                },
                MAX_NUM_RULES: function() {
                    return l
                },
                MAX_RULE_LENGTH: function() {
                    return s
                },
                MAX_QUESTION_LENGTH: function() {
                    return c
                },
                MAX_NUM_CHOICES: function() {
                    return d
                },
                MAX_CHOICE_LENGTH: function() {
                    return f
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return h
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return v
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return E
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return p
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return _
                }
            }), n("222007");
            var r, i = n("567054");
            i.VerificationFormFieldTypes.VERIFICATION;
            let u = new Set([i.VerificationFormFieldTypes.TERMS]),
                o = new Set([i.VerificationFormFieldTypes.MULTIPLE_CHOICE, i.VerificationFormFieldTypes.TEXT_INPUT, i.VerificationFormFieldTypes.PARAGRAPH]),
                a = 5,
                l = 16,
                s = 300,
                c = 300,
                d = 8,
                f = 150,
                h = 150,
                v = 1e3,
                E = 300,
                p = "Membership Gating",
                _ = "in-app-member-verification";
            (r || (r = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(t, e, n) {
            "use strict";
            let r;
            n.r(e), n.d(e, {
                openMemberVerificationModal: function() {
                    return i
                }
            }), r = n("453265").default;
            let i = r.openMemberVerificationModal;
            r.closeMemberVerificationModal
        },
        347977: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useMemberVerificationFormNoticeStore: function() {
                    return a
                },
                setHasUnsubmittedChanges: function() {
                    return l
                },
                setShowWarning: function() {
                    return s
                }
            });
            var r = n("308503"),
                i = n("659500"),
                u = n("49111");
            let o = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                a = (0, r.default)(t => o),
                l = t => {
                    a.setState({
                        hasUnsubmittedChanges: t
                    })
                },
                s = t => {
                    a.setState({
                        shouldShowWarning: t
                    }), t && i.ComponentDispatch.dispatch(u.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return f
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                u = n("599110"),
                o = n("50926"),
                a = n("347977"),
                l = n("394294"),
                s = n("49111");
            let c = () => {
                    u.default.track(s.AnalyticEvents.MODAL_DISMISSED, {
                        type: l.MEMBER_VERIFICATION_TYPE
                    })
                },
                d = t => {
                    u.default.track(s.AnalyticEvents.OPEN_MODAL, {
                        type: l.MEMBER_VERIFICATION_TYPE,
                        guild_id: t
                    })
                };
            var f = {
                openMemberVerificationModal(t, e) {
                    d(t);
                    let u = async e => {
                        await o.default.submitVerificationForm(t, e)
                    };
                    (0, i.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, r.jsx)(e, {
                            ...n,
                            guildId: t,
                            onComplete: u,
                            onClose: function() {
                                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!t) {
                                    if (a.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, a.setShowWarning)(!0);
                                        return
                                    }
                                    c()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: l.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            c(), a.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, a.setShowWarning)(!0) : (0, i.closeModal)(l.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: e
                    })
                },
                closeMemberVerificationModal() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !t && c(), (0, i.closeModal)(l.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        199938: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                staffOnlyGuildSettingsAccess: function() {
                    return a
                },
                useGuildAccessRateInsightExperiment: function() {
                    return l
                }
            });
            var r = n("884691"),
                i = n("862205"),
                u = n("697218");
            let o = (0, i.createExperiment)({
                kind: "guild",
                id: "2022-03_guild_access_rate_insight_experiment",
                label: "Guild Access Rate Insight Experiment",
                defaultConfig: {
                    showAccessRate: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show guild access rate in insights",
                    config: {
                        showAccessRate: !0
                    }
                }]
            });

            function a(t) {
                var e;
                let n = null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff();
                return n && o.getCurrentConfig({
                    guildId: t,
                    location: "77b4b2_1"
                }).showAccessRate
            }

            function l(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return r.useEffect(() => {
                    !e && null != t && o.trackExposure({
                        guildId: t,
                        location: "77b4b2_2"
                    })
                }, [t, e]), o.useExperiment({
                    guildId: null != t ? t : "",
                    location: "77b4b2_3"
                }, {
                    autoTrackExposure: !1,
                    disable: e || null == t
                })
            }
        },
        9294: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                generateInviteKeyFromUrlParams: function() {
                    return o
                },
                generateInviteKeyFromExtraData: function() {
                    return a
                },
                parseExtraDataFromInviteKey: function() {
                    return l
                },
                parseInviteCodeFromInviteKey: function() {
                    return s
                }
            }), n("222007");
            var r = n("522632"),
                i = n("833858");
            let u = "event";

            function o(t, e) {
                if (null == e) return t;
                let n = function(t) {
                    let e = "?" === t.charAt(0) ? t.substring(1) : t;
                    try {
                        let t = r.parse(e);
                        return (0, i.getFirstQueryStringValue)(t[u])
                    } catch (t) {
                        return
                    }
                }(e);
                return a({
                    baseCode: t,
                    guildScheduledEventId: n
                })
            }

            function a(t) {
                let {
                    baseCode: e,
                    guildScheduledEventId: n
                } = t;
                return null == n ? e : "".concat(e, "?").concat(u, "=").concat(n)
            }

            function l(t) {
                let [e, n] = t.split("?");
                if (null == n) return {
                    baseCode: e
                };
                let o = r.parse(n),
                    a = (0, i.getFirstQueryStringValue)(o[u]);
                return {
                    baseCode: e,
                    guildScheduledEventId: a
                }
            }

            function s(t) {
                let [e] = t.split("?");
                return e
            }
        },
        232268: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("65597"),
                u = n("880731");

            function o(t) {
                let {
                    children: e,
                    confettiLocation: n
                } = t, o = (0, i.default)([u.default], () => u.default.isEnabled({
                    confettiLocation: n
                }));
                return o ? (0, r.jsx)(r.Fragment, {
                    children: e
                }) : null
            }
        },
        798592: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var r = n("884691"),
                i = n("65597"),
                u = n("526887"),
                o = n("880731");

            function a() {
                let {
                    createMultipleConfettiAt: t
                } = r.useContext(u.ConfettiCannonContext), e = (0, i.default)([o.default], () => o.default.getState()), n = r.useCallback(t => ({
                    size: {
                        type: "static-random",
                        minValue: t.confettiSize - 7,
                        maxValue: t.confettiSize + 7
                    }
                }), []), a = r.useMemo(() => ({
                    fire: (r, i, u) => {
                        var o, a;
                        let l = (null == u ? void 0 : u.settings) != null ? {
                                ...e,
                                ...u.settings
                            } : e,
                            s = n(l);
                        t(r, i, s, (null !== (o = null == u ? void 0 : u.count) && void 0 !== o ? o : l.confettiCount) * (null !== (a = null == u ? void 0 : u.countMultiplier) && void 0 !== a ? a : 1), {
                            sprite: null == u ? void 0 : u.sprite
                        })
                    }
                }), [t, n, e]);
                return a
            }
        },
        337543: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return h
                }
            }), n("702976");
            var r = n("446674"),
                i = n("913144"),
                u = n("9294"),
                o = n("49111");
            let a = {},
                l = {},
                s = {};

            function c(t, e) {
                var n;
                t = null != t ? t : "";
                let r = (0, u.parseExtraDataFromInviteKey)(t),
                    i = a[t],
                    l = null != i ? {
                        state: o.InviteStates.RESOLVING,
                        ...i
                    } : {
                        state: o.InviteStates.RESOLVING,
                        code: r.baseCode
                    };
                e(l), a = {
                    ...a,
                    [t]: l
                }, (null === (n = l.guild) || void 0 === n ? void 0 : n.id) != null && (s = {
                    ...s,
                    [l.guild.id]: t
                })
            }

            function d(t) {
                return c(t.code, e => {
                    e.state = "banned" in t && t.banned ? o.InviteStates.BANNED : o.InviteStates.EXPIRED
                })
            }
            class f extends r.default.Store {
                getInvite(t) {
                    return a[t]
                }
                getInviteError(t) {
                    return l[t]
                }
                getInvites() {
                    return a
                }
                getInviteKeyForGuildId(t) {
                    return s[t]
                }
            }
            f.displayName = "InviteStore";
            var h = new f(i.default, {
                INVITE_RESOLVE: function(t) {
                    let {
                        code: e
                    } = t, n = (0, u.parseExtraDataFromInviteKey)(e);
                    a = {
                        ...a,
                        [e]: {
                            code: n.baseCode,
                            state: o.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(t) {
                    return c(t.code, e => {
                        var n, r;
                        e.state = o.InviteStates.RESOLVED, e.guild = t.invite.guild, e.channel = t.invite.channel, e.inviter = t.invite.inviter, e.approximate_member_count = null !== (n = t.invite.approximate_member_count) && void 0 !== n ? n : null, e.approximate_presence_count = null !== (r = t.invite.approximate_presence_count) && void 0 !== r ? r : null, e.target_type = t.invite.target_type, e.target_user = t.invite.target_user, e.target_application = t.invite.target_application, e.expires_at = t.invite.expires_at, e.stage_instance = t.invite.stage_instance, e.friends_count = t.invite.friends_count, e.is_contact = t.invite.is_contact, e.guild_scheduled_event = t.invite.guild_scheduled_event, e.type = t.invite.type, e.flags = t.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: d,
                INSTANT_INVITE_REVOKE_SUCCESS: d,
                FRIEND_INVITE_CREATE_SUCCESS: function(t) {
                    return c(t.invite.code, e => {
                        e.state = o.InviteStates.RESOLVED, e.inviter = t.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(t) {
                    t.invites.forEach(t => c(t.code, t => {
                        t.state = o.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(t) {
                    return c(t.invite.code, e => {
                        var n, r;
                        e.state = o.InviteStates.RESOLVED, e.guild = t.invite.guild, e.channel = t.invite.channel, e.inviter = t.invite.inviter, e.approximate_member_count = null !== (n = t.invite.approximate_member_count) && void 0 !== n ? n : null, e.approximate_presence_count = null !== (r = t.invite.approximate_presence_count) && void 0 !== r ? r : null, e.target_type = t.invite.target_type, e.target_user = t.invite.target_user, e.target_application = t.invite.target_application, e.stage_instance = t.invite.stage_instance, e.guild_scheduled_event = t.invite.guild_scheduled_event, e.type = t.invite.type
                    })
                },
                INVITE_ACCEPT: function(t) {
                    return c(t.code, t => {
                        t.state = o.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(t) {
                    return c(t.code, e => {
                        e.state = o.InviteStates.ACCEPTED, e.guild = t.invite.guild, e.new_member = t.invite.new_member, e.channel = {
                            ...e.channel,
                            ...t.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(t) {
                    return l[t.code] = t.error, c(t.code, t => {
                        t.state = o.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(t) {
                    return c(t.code, t => {
                        t.state = o.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(t) {
                    return c(t.code, t => {
                        t.state = o.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(t) {
                    return c(t.code, t => {
                        t.state = o.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        471671: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return f
                }
            }), n("222007");
            var r = n("627445"),
                i = n.n(r),
                u = n("446674"),
                o = n("913144"),
                a = n("816454");
            let l = new Map;

            function s(t) {
                let e = l.get(t);
                return null == e ? (console.warn("Window state not initialized", t), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : e
            }
            class c extends u.default.Store {
                isFocused() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return s(t).focused
                }
                getFocusedWindowId() {
                    let t = null;
                    return l.forEach((e, n) => {
                        e.focused && (t = n)
                    }), t
                }
                isElementFullScreen() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return s(t).isElementFullscreen
                }
                windowSize() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return s(t).windowSize
                }
            }
            c.displayName = "WindowStore";
            let d = new c(o.default, {
                WINDOW_INIT: function(t) {
                    i(!l.has(t.windowId), "Window initialized multiple times");
                    let {
                        width: e,
                        height: n,
                        isElementFullscreen: r,
                        focused: u
                    } = t;
                    return l.set(t.windowId, {
                        windowSize: {
                            width: e,
                            height: n
                        },
                        isElementFullscreen: r,
                        focused: u
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(t) {
                    let e = s(t.windowId);
                    return e.isElementFullscreen !== t.isElementFullscreen && (l.set(t.windowId, {
                        ...e,
                        isElementFullscreen: t.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(t) {
                    let e = s(t.windowId);
                    return e.focused !== t.focused && (l.set(t.windowId, {
                        ...e,
                        focused: t.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(t) {
                    let e = s(t.windowId);
                    return (e.windowSize.width !== t.width || e.windowSize.height !== t.height) && (l.set(t.windowId, {
                        ...e,
                        windowSize: {
                            width: t.width,
                            height: t.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(t) {
                    return l.delete(t.windowId), !0
                }
            });
            n.el("599110").then(n.bind(n, "599110")).then(t => {
                let {
                    addExtraAnalyticsDecorator: e
                } = t;
                e(t => {
                    t.client_app_state = d.isFocused() ? "focused" : "unfocused"
                })
            });
            var f = d
        },
        555158: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                HelpMessageTypes: function() {
                    return i
                },
                default: function() {
                    return v
                }
            });
            var r, i, u = n("37983");
            n("884691");
            var o = n("414456"),
                a = n.n(o),
                l = n("77078"),
                s = n("36694"),
                c = n("381546"),
                d = n("68238"),
                f = n("423487"),
                h = n("557296");
            (r = i || (i = {}))[r.WARNING = 0] = "WARNING", r[r.INFO = 1] = "INFO", r[r.ERROR = 2] = "ERROR", r[r.POSITIVE = 3] = "POSITIVE";
            var v = function(t) {
                let {
                    children: e,
                    messageType: n,
                    className: r,
                    textColor: i = "text-normal",
                    textVariant: o = "text-sm/medium"
                } = t, v = function(t) {
                    switch (t) {
                        case 0:
                            return f.default;
                        case 1:
                            return d.default;
                        case 2:
                            return c.default;
                        case 3:
                            return s.default
                    }
                }(n), E = function(t) {
                    switch (t) {
                        case 0:
                            return h.warning;
                        case 1:
                            return h.info;
                        case 2:
                            return h.error;
                        case 3:
                            return h.positive
                    }
                }(n);
                return (0, u.jsxs)("div", {
                    className: a(h.container, E, r),
                    children: [(0, u.jsx)("div", {
                        className: h.iconDiv,
                        children: (0, u.jsx)(v, {
                            className: h.icon
                        })
                    }), (0, u.jsx)(l.Text, {
                        className: h.text,
                        color: i,
                        variant: o,
                        children: e
                    })]
                })
            }
        },
        476765: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                uid: function() {
                    return o
                },
                useUID: function() {
                    return a
                },
                UID: function() {
                    return l
                }
            });
            var r = n("995008"),
                i = n.n(r),
                u = n("775560");
            let o = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return i(t)
                },
                a = () => (0, u.useLazyValue)(() => o()),
                l = t => {
                    let {
                        children: e
                    } = t;
                    return e(a())
                }
        },
        756609: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                u = n("308472"),
                o = n("75196"),
                a = (0, i.replaceIcon)(function(t) {
                    let {
                        width: e = 18,
                        height: n = 18,
                        color: i = "currentColor",
                        foreground: u,
                        ...a
                    } = t;
                    return (0, r.jsxs)("svg", {
                        ...(0, o.default)(a),
                        width: e,
                        height: n,
                        viewBox: "0 0 18 18",
                        children: [(0, r.jsx)("path", {
                            fill: i,
                            className: u,
                            d: "M4.5,16.5v-3H3A1.5,1.5,0,0,1,1.5,12V3A1.5,1.5,0,0,1,3,1.5H15A1.5,1.5,0,0,1,16.5,3v9A1.5,1.5,0,0,1,15,13.5H8.5ZM3,3v9H6v1.5L8,12h7V3Z"
                        }), (0, r.jsx)("path", {
                            fill: i,
                            className: u,
                            d: "M6.75,4.5H5.25v6h1.5Z"
                        }), (0, r.jsx)("path", {
                            fill: i,
                            className: u,
                            d: "M9.75,7.5H8.25v3h1.5Z"
                        }), (0, r.jsx)("path", {
                            fill: i,
                            className: u,
                            d: "M12.75,6h-1.5v4.5h1.5Z"
                        })]
                    })
                }, u.AnalyticsIcon, void 0, {
                    size: 18
                })
        },
        486952: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                u = n("276825"),
                o = n("75196"),
                a = (0, i.replaceIcon)(function(t) {
                    let {
                        width: e = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        ...u
                    } = t;
                    return (0, r.jsx)("svg", {
                        ...(0, o.default)(u),
                        width: e,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, r.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: i
                        })
                    })
                }, u.CheckmarkSmallIcon, void 0, {
                    size: 16
                })
        },
        103603: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                fit: function() {
                    return s
                },
                zoomFit: function() {
                    return c
                },
                getRatio: function() {
                    return d
                },
                getCoverRatio: function() {
                    return f
                },
                makeCssUrlString: function() {
                    return h
                },
                getPalette: function() {
                    return E
                },
                getPaletteForAvatar: function() {
                    return p
                },
                readFileAsBase64: function() {
                    return I
                },
                dataUriFileSize: function() {
                    return g
                },
                dataUrlToFile: function() {
                    return m
                },
                isPNGAnimated: function() {
                    return R
                }
            }), n("424973"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
            var r = n("627445"),
                i = n.n(r),
                u = n("917351"),
                o = n.n(u),
                a = n("48648"),
                l = n.n(a);

            function s(t) {
                let {
                    width: e,
                    height: n,
                    maxWidth: r,
                    maxHeight: i,
                    minWidth: u = 0,
                    minHeight: o = 0
                } = t;
                if (e !== r || n !== i) {
                    let t = e > r ? r / e : 1;
                    e = Math.max(Math.round(e * t), u), n = Math.max(Math.round(n * t), o);
                    let a = n > i ? i / n : 1;
                    e = Math.max(Math.round(e * a), u), n = Math.max(Math.round(n * a), o)
                }
                return {
                    width: e,
                    height: n
                }
            }

            function c(t, e) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    r = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return s({
                    width: t,
                    height: e,
                    maxWidth: r,
                    maxHeight: n
                })
            }

            function d(t) {
                let {
                    width: e,
                    height: n,
                    maxWidth: r,
                    maxHeight: i
                } = t, u = 1;
                e > r && (u = r / e), e = Math.round(e * u);
                let o = 1;
                return (n = Math.round(n * u)) > i && (o = i / n), Math.min(u * o, 1)
            }

            function f(t) {
                let {
                    width: e,
                    height: n,
                    maxWidth: r,
                    maxHeight: i
                } = t;
                return e === n ? 1 : Math.min(Math.max(r / e, i / n), 1)
            }

            function h(t) {
                return null == t || "" === t ? "none" : "url(".concat(t, ")")
            }
            let v = [
                [0, 0, 0]
            ];

            function E(t, e, n) {
                let r = document.createElement("canvas"),
                    i = r.getContext("2d");
                if (null == i) return v;
                let u = r.width = 0 === t.width ? 128 : t.width,
                    o = r.height = 0 === t.height ? 128 : t.height;
                i.drawImage(t, 0, 0, u, o);
                let a = i.getImageData(0, 0, u, o).data,
                    s = function(t, e, n) {
                        let r = [];
                        for (let i = 0, u, o, a, l, s; i < e; i += n) o = t[(u = 4 * i) + 0], a = t[u + 1], l = t[u + 2], (void 0 === (s = t[u + 3]) || s >= 125) && !(o > 250 && a > 250 && l > 250) && r.push([o, a, l]);
                        return r
                    }(a, u * o, n),
                    c = l(s, e);
                return "boolean" == typeof c ? v : c.palette()
            }
            let p = t => "number" == typeof t ? null : _(t),
                _ = o.memoize(t => new Promise((e, n) => {
                    let r = new Image;
                    r.crossOrigin = "Anonymous", r.onerror = t => {
                        n(t), r.onerror = r.onload = null, r = null
                    }, r.onload = () => {
                        e(E(r, 5, 10)), r.onerror = r.onload = null, r = null
                    }, r.src = t
                }));

            function I(t) {
                return new Promise((e, n) => {
                    let r = new FileReader;
                    r.readAsDataURL(t), r.onload = () => {
                        i("string" == typeof r.result, "Result must be a string"), e(r.result)
                    }, r.onerror = t => n(t)
                })
            }

            function g(t) {
                let e = t.split(";base64,");
                return i(2 === e.length, "Input data is not a valid image."), atob(e[1]).length
            }
            async function m(t, e, n) {
                let r = function(t) {
                        let e;
                        e = t.split(",")[0].indexOf("base64") >= 0 ? atob(t.split(",")[1]) : btoa(t.split(",")[1]);
                        let n = t.split(",")[0].split(":")[1].split(";")[0],
                            r = new Uint8Array(e.length);
                        for (var i = 0; i < e.length; i++) r[i] = e.charCodeAt(i);
                        return new Blob([r], {
                            type: n
                        })
                    }(t),
                    i = await r.arrayBuffer();
                return new File([i], e, {
                    type: n
                })
            }
            async function R(t) {
                var e;
                let n = null === (e = t.type) || void 0 === e ? void 0 : e.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let r = await t.text(),
                    i = r.indexOf("IDAT");
                return !!(i > 0) && -1 !== r.substring(0, i).indexOf("acTL") || !1
            }
        },
        833858: function(t, e, n) {
            "use strict";

            function r(t) {
                return Array.isArray(t) ? t[0] : t
            }
            n.r(e), n.d(e, {
                getFirstQueryStringValue: function() {
                    return r
                }
            })
        },
        655518: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            }), n("781738");
            var r = {
                escape: t => t.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }
        }
    }
]);