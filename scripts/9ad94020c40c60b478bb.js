(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["37961"], {
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
                        var l, s, c, d, f, h, p, v, g, m, w, E, _, M, b, I, C = (l = o, f = Array(32768), l.forEach(function(n) {
                                c = n[0] >> t, d = n[1] >> t, f[s = e(c, d, n[2] >> t)] = (f[s] || 0) + 1
                            }), f),
                            x = 0;
                        C.forEach(function() {
                            x++
                        });
                        var N = (h = o, p = C, w = 1e6, E = 0, _ = 1e6, M = 0, b = 1e6, I = 0, h.forEach(function(e) {
                                v = e[0] >> t, g = e[1] >> t, m = e[2] >> t, v < w ? w = v : v > E && (E = v), g < _ ? _ = g : g > M && (M = g), m < b ? b = m : m > I && (I = m)
                            }), new i(w, E, _, M, b, I, p)),
                            A = new n(function(t, e) {
                                return r.naturalOrder(t.count(), e.count())
                            });

                        function y(t, n) {
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
                                                p = [],
                                                v = [];
                                            if (a == i)
                                                for (l = n.r1; l <= n.r2; l++) {
                                                    for (d = 0, s = n.g1; s <= n.g2; s++)
                                                        for (c = n.b1; c <= n.b2; c++) d += t[f = e(l, s, c)] || 0;
                                                    h += d, p[l] = h
                                                } else if (a == u)
                                                    for (l = n.g1; l <= n.g2; l++) {
                                                        for (d = 0, s = n.r1; s <= n.r2; s++)
                                                            for (c = n.b1; c <= n.b2; c++) d += t[f = e(s, l, c)] || 0;
                                                        h += d, p[l] = h
                                                    } else
                                                        for (l = n.b1; l <= n.b2; l++) {
                                                            for (d = 0, s = n.r1; s <= n.r2; s++)
                                                                for (c = n.g1; c <= n.g2; c++) d += t[f = e(s, c, l)] || 0;
                                                            h += d, p[l] = h
                                                        }
                                            return p.forEach(function(t, e) {
                                                v[e] = h - t
                                            }), g(a == i ? "r" : a == u ? "g" : "b")
                                        }

                                        function g(t) {
                                            var e, r, i, u, o, a = t + "1",
                                                s = t + "2",
                                                c = 0;
                                            for (l = n[a]; l <= n[s]; l++)
                                                if (p[l] > h / 2) {
                                                    for (i = n.copy(), u = n.copy(), e = l - n[a], o = e <= (r = n[s] - l) ? Math.min(n[s] - 1, ~~(l + r / 2)) : Math.max(n[a], ~~(l - 1 - e / 2)); !p[o];) o++;
                                                    for (c = v[o]; !c && p[o - 1];) c = v[--o];
                                                    return i[s] = o, u[a] = i[s] + 1, [i, u]
                                                }
                                        }
                                    }(C, i),
                                    l = a[0],
                                    s = a[1];
                                if (!l) return;
                                if (t.push(l), s && (t.push(s), u++), u >= n || o++ > 1e3) return
                            }
                        }
                        A.push(N), y(A, .75 * a);
                        for (var O = new n(function(t, e) {
                                return r.naturalOrder(t.count() * t.volume(), e.count() * e.volume())
                            }); A.size();) O.push(A.pop());
                        y(O, a - O.size());
                        for (var R = new u; O.size();) R.push(O.pop());
                        return R
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
        333805: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var r, i = n("872717"),
                u = n("49111"),
                o = n("782340");
            r = class extends i.default.V6OrEarlierAPIError {
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
        689988: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            }), n("70102"), n("222007"), n("704744");
            var r, i = n("913144");
            r = class {
                initialize() {
                    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(t => {
                        let [e, n] = t;
                        i.default.subscribe(e, "function" == typeof n ? n : n.callback)
                    }), this.stores.forEach((t, e) => {
                        e.addChangeListener(t), t()
                    }))
                }
                terminate(t) {
                    !(this.initializedCount <= 0) && (t ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(t => {
                        let [e, n] = t;
                        i.default.unsubscribe(e, "function" == typeof n ? n : n.callback)
                    })))
                }
                _initialize() {}
                _terminate() {}
                constructor() {
                    this.initializedCount = 0, this.actions = {}, this.stores = new Map
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
                    return p
                },
                canGuildUseRoleIcons: function() {
                    return v
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
                p = t => t.startsWith(l) || t.startsWith("".concat(s, "/roles")) && t.includes("/icons/"),
                v = (t, e) => {
                    var n;
                    let r = (null == e ? void 0 : null === (n = e.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return r || t.features.has(a.GuildFeatures.ROLE_ICONS)
                }
        },
        153498: function(t, e, n) {
            "use strict";

            function r(t) {
                let {} = t;
                return !1
            }

            function i(t, e) {
                return !1
            }

            function u(t) {
                return !1
            }

            function o() {
                return !1
            }

            function a() {
                return !1
            }

            function l(t) {
                let {} = t;
                return !1
            }

            function s(t, e) {
                return !1
            }

            function c() {
                return !1
            }

            function d(t) {}

            function f(t) {}

            function h(t) {}

            function p(t) {
                return !1
            }
            n.r(e), n.d(e, {
                navigateToChannel: function() {
                    return r
                },
                navigateToMemberVerification: function() {
                    return i
                },
                navigateToRootTab: function() {
                    return u
                },
                resetToAuthRoute: function() {
                    return o
                },
                resetToPanelsUI: function() {
                    return a
                },
                pushModal: function() {
                    return l
                },
                popModal: function() {
                    return s
                },
                popAllModals: function() {
                    return c
                },
                coerceChannelRoute: function() {
                    return d
                },
                coerceGuildsRoute: function() {
                    return f
                },
                coerceModalRoute: function() {
                    return h
                },
                useIsModalOpen: function() {
                    return p
                }
            })
        },
        467475: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("65597"),
                i = n("42203"),
                u = n("724210");

            function o(t) {
                let e = (0, r.default)([i.default], () => {
                    let e = i.default.getChannel(t);
                    return (null == e ? void 0 : e.parent_id) != null && e.isForumPost() ? i.default.getChannel(null == e ? void 0 : e.parent_id) : null
                });
                return (null == e ? void 0 : e.hasFlag(u.ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0
            }
        },
        146574: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getNativeContextMenuChannelAnalytics: function() {
                    return u
                }
            });
            var r = n("18494"),
                i = n("724210");

            function u() {
                var t;
                let e = null !== (t = r.default.getCurrentlySelectedChannelId()) && void 0 !== t ? t : void 0;
                return null != e && (0, i.isStaticChannelRoute)(e) ? {
                    channel_static_route: e
                } : {
                    channel_id: e
                }
            }
        },
        467592: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                u = n("272030"),
                o = n("773336"),
                a = n("447651"),
                l = n("26051"),
                s = n("782340");

            function c(t) {
                let {
                    src: e,
                    onSelect: n
                } = t, c = (0, a.default)(e), d = (0, l.default)(e, null);
                return o.isPlatformEmbedded ? (0, r.jsxs)(i.Menu, {
                    navId: "image-context",
                    onClose: u.closeContextMenu,
                    "aria-label": s.default.Messages.IMAGE_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, r.jsx)(i.MenuGroup, {
                        children: c
                    }), (0, r.jsx)(i.MenuGroup, {
                        children: d
                    })]
                }) : null
            }
        },
        447651: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return I
                }
            }), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660");
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                u = n("404118"),
                o = n("689226"),
                a = n("467475"),
                l = n("599110"),
                s = n("773336"),
                c = n("286235"),
                d = n("50885"),
                f = n("146574"),
                h = n("49111"),
                p = n("782340");
            let v = "https://media.discordapp.net",
                g = /^.*\.discordapp\.net$/,
                m = "https://cdn.discordapp.com",
                w = "".concat(v, "/stickers"),
                E = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
                _ = new Set(["jpg", "jpeg", "png"]),
                M = t => {
                    var e;
                    return null === (e = new URL(t).pathname.split(".").pop()) || void 0 === e ? void 0 : e.toLowerCase()
                };

            function b(t, e) {
                u.default.show({
                    title: p.default.Messages.ERROR,
                    body: t
                }), c.default.captureException(e)
            }

            function I(t, e, n) {
                let u = (0, a.default)(null == e ? void 0 : e.getChannelId());
                if (u || (null == n ? void 0 : n.shouldHideMediaOptions) === !0 || !s.isPlatformEmbedded || null == t || ! function(t) {
                        let e = new URL(t),
                            n = M(t);
                        return (g.test(e.hostname) || e.origin === m) && !t.startsWith(w) && !(0, o.isRoleIconAssetUrl)(t) && null != n && E.has(n)
                    }(t)) return null;
                let c = function(t) {
                        let e = new URL(t);
                        return e.origin === m ? t : e.origin === v ? m + e.pathname : (e.searchParams.delete("width"), e.searchParams.delete("height"), e.searchParams.set("quality", "lossless"), e.toString())
                    }(t),
                    I = async () => {
                        try {
                            await d.default.saveImage(c), l.default.track(h.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVED, {
                                ...(0, f.getNativeContextMenuChannelAnalytics)()
                            })
                        } catch (t) {
                            l.default.track(h.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVE_FAILED, {
                                ...(0, f.getNativeContextMenuChannelAnalytics)()
                            }), b(p.default.Messages.ERROR_SAVING_IMAGE, t)
                        }
                    }, C = async () => {
                        try {
                            await d.default.copyImage(c), l.default.track(h.AnalyticEvents.CONTEXT_MENU_IMAGE_COPIED, {
                                ...(0, f.getNativeContextMenuChannelAnalytics)()
                            })
                        } catch (t) {
                            b(p.default.Messages.ERROR_COPYING_IMAGE, t), l.default.track(h.AnalyticEvents.CONTEXT_MENU_IMAGE_COPY_FAILED, {
                                ...(0, f.getNativeContextMenuChannelAnalytics)()
                            })
                        }
                    };
                return [d.default.canCopyImage() && function(t) {
                    let e = M(t);
                    return null != e && _.has(e)
                }(t) ? (0, r.jsx)(i.MenuItem, {
                    id: "copy-image",
                    label: p.default.Messages.COPY_IMAGE_MENU_ITEM,
                    action: C
                }, "copy-image") : null, (0, r.jsx)(i.MenuItem, {
                    id: "save-image",
                    label: p.default.Messages.SAVE_IMAGE_MENU_ITEM,
                    action: I
                }, "save-image")]
            }
        },
        26051: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return g
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                u = n("689226"),
                o = n("467475"),
                a = n("24373"),
                l = n("48703"),
                s = n("599110"),
                c = n("128259"),
                d = n("773336"),
                f = n("50885"),
                h = n("146574"),
                p = n("49111"),
                v = n("782340");

            function g(t, e, n, g) {
                let m = (0, o.default)(null == n ? void 0 : n.getChannelId());
                if (!d.isPlatformEmbedded || null == t || "" === t || m || (null == g ? void 0 : g.shouldHideMediaOptions) === !0 || null != t && null != (0, a.isStickerAssetUrl)(t) || null != t && (0, u.isRoleIconAssetUrl)(t)) return null;
                let w = (0, l.getHostname)(t),
                    E = n => {
                        s.default.track(p.AnalyticEvents.CONTEXT_MENU_LINK_OPENED, {
                            hostname: w,
                            ...(0, h.getNativeContextMenuChannelAnalytics)()
                        }), (0, c.handleClick)({
                            href: t,
                            trusted: (0, c.isLinkTrusted)(t, e),
                            shouldConfirm: !0
                        }, n)
                    };
                return [(0, r.jsx)(i.MenuItem, {
                    id: "copy-native-link",
                    label: v.default.Messages.COPY_LINK,
                    action: () => {
                        s.default.track(p.AnalyticEvents.CONTEXT_MENU_LINK_COPIED, {
                            hostname: w,
                            ...(0, h.getNativeContextMenuChannelAnalytics)()
                        }), f.default.copy(t)
                    }
                }, "copy-native-link"), (0, r.jsx)(i.MenuItem, {
                    id: "open-native-link",
                    label: v.default.Messages.OPEN_LINK,
                    action: t => E(t)
                }, "open-native-link")]
            }
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
                    return v
                },
                getPaletteForAvatar: function() {
                    return g
                },
                readFileAsBase64: function() {
                    return w
                },
                dataUriFileSize: function() {
                    return E
                },
                dataUrlToFile: function() {
                    return _
                },
                isPNGAnimated: function() {
                    return M
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
            let p = [
                [0, 0, 0]
            ];

            function v(t, e, n) {
                let r = document.createElement("canvas"),
                    i = r.getContext("2d");
                if (null == i) return p;
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
                return "boolean" == typeof c ? p : c.palette()
            }
            let g = t => "number" == typeof t ? null : m(t),
                m = o.memoize(t => new Promise((e, n) => {
                    let r = new Image;
                    r.crossOrigin = "Anonymous", r.onerror = t => {
                        n(t), r.onerror = r.onload = null, r = null
                    }, r.onload = () => {
                        e(v(r, 5, 10)), r.onerror = r.onload = null, r = null
                    }, r.src = t
                }));

            function w(t) {
                return new Promise((e, n) => {
                    let r = new FileReader;
                    r.readAsDataURL(t), r.onload = () => {
                        i("string" == typeof r.result, "Result must be a string"), e(r.result)
                    }, r.onerror = t => n(t)
                })
            }

            function E(t) {
                let e = t.split(";base64,");
                return i(2 === e.length, "Input data is not a valid image."), atob(e[1]).length
            }
            async function _(t, e, n) {
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
            async function M(t) {
                var e;
                let n = null === (e = t.type) || void 0 === e ? void 0 : e.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let r = await t.text(),
                    i = r.indexOf("IDAT");
                return !!(i > 0) && -1 !== r.substring(0, i).indexOf("acTL") || !1
            }
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
        },
        840707: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("872717"),
                i = n("599110");

            function u(t, e, n) {
                let {
                    trackedActionData: r,
                    ...u
                } = e, o = {
                    url: u.url,
                    request_method: n
                };
                return new Promise((e, n) => {
                    t(u).then(t => {
                        let n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(t)), (0, i.trackNetworkAction)(r.event, {
                            status_code: t.status,
                            ...o,
                            ...n
                        }), e(t)
                    }).catch(t => {
                        var e, u;
                        let a = r.properties;
                        "function" == typeof r.properties && (a = r.properties(t)), (0, i.trackNetworkAction)(r.event, {
                            status_code: t.status,
                            error_code: null === (e = t.body) || void 0 === e ? void 0 : e.code,
                            error_message: null === (u = t.body) || void 0 === u ? void 0 : u.message,
                            ...o,
                            ...a
                        }), n(t)
                    })
                })
            }
            var o = {
                get: function(t) {
                    return u(r.default.get, t, "get")
                },
                post: function(t) {
                    return u(r.default.post, t, "post")
                },
                put: function(t) {
                    return u(r.default.put, t, "put")
                },
                patch: function(t) {
                    return u(r.default.patch, t, "patch")
                },
                delete: function(t) {
                    return u(r.default.delete, t, "del")
                }
            }
        }
    }
]);