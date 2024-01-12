(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["40443"], {
        48648: function(t, n, e) {
            if (e("808653"), e("424973"), !r) var r = {
                map: function(t, n) {
                    var e = {};
                    return n ? t.map(function(t, r) {
                        return e.index = r, n.call(e, t)
                    }) : t.slice()
                },
                naturalOrder: function(t, n) {
                    return t < n ? -1 : t > n ? 1 : 0
                },
                sum: function(t, n) {
                    var e = {};
                    return t.reduce(n ? function(t, r, i) {
                        return e.index = i, t + n.call(e, r)
                    } : function(t, n) {
                        return t + n
                    }, 0)
                },
                max: function(t, n) {
                    return Math.max.apply(null, n ? r.map(t, n) : t)
                }
            };
            var i = function() {
                var t = 3;

                function n(t, n, e) {
                    return (t << 10) + (n << 5) + e
                }

                function e(t) {
                    var n = [],
                        e = !1;

                    function r() {
                        n.sort(t), e = !0
                    }
                    return {
                        push: function(t) {
                            n.push(t), e = !1
                        },
                        peek: function(t) {
                            return !e && r(), void 0 === t && (t = n.length - 1), n[t]
                        },
                        pop: function() {
                            return !e && r(), n.pop()
                        },
                        size: function() {
                            return n.length
                        },
                        map: function(t) {
                            return n.map(t)
                        },
                        debug: function() {
                            return !e && r(), n
                        }
                    }
                }

                function i(t, n, e, r, i, u, o) {
                    this.r1 = t, this.r2 = n, this.g1 = e, this.g2 = r, this.b1 = i, this.b2 = u, this.histo = o
                }

                function u() {
                    this.vboxes = new e(function(t, n) {
                        return r.naturalOrder(t.vbox.count() * t.vbox.volume(), n.vbox.count() * n.vbox.volume())
                    })
                }
                return i.prototype = {
                    volume: function(t) {
                        return (!this._volume || t) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(t) {
                        var e = this.histo;
                        if (!this._count_set || t) {
                            var r, i, u, o = 0;
                            for (r = this.r1; r <= this.r2; r++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (u = this.b1; u <= this.b2; u++) o += e[n(r, i, u)] || 0;
                            this._count = o, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new i(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(t) {
                        var e = this.histo;
                        if (!this._avg || t) {
                            var r, i, u, o, l = 0,
                                a = 8,
                                c = 0,
                                s = 0,
                                f = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (u = this.g1; u <= this.g2; u++)
                                    for (o = this.b1; o <= this.b2; o++) l += r = e[n(i, u, o)] || 0, c += r * (i + .5) * a, s += r * (u + .5) * a, f += r * (o + .5) * a;
                            l ? this._avg = [~~(c / l), ~~(s / l), ~~(f / l)] : this._avg = [~~(a * (this.r1 + this.r2 + 1) / 2), ~~(a * (this.g1 + this.g2 + 1) / 2), ~~(a * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(n) {
                        var e = n[0] >> t;
                        return gval = n[1] >> t, bval = n[2] >> t, e >= this.r1 && e <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
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
                        for (var n = this.vboxes, e = 0; e < n.size(); e++)
                            if (n.peek(e).vbox.contains(t)) return n.peek(e).color;
                        return this.nearest(t)
                    },
                    nearest: function(t) {
                        for (var n, e, r, i = this.vboxes, u = 0; u < i.size(); u++)((e = Math.sqrt(Math.pow(t[0] - i.peek(u).color[0], 2) + Math.pow(t[1] - i.peek(u).color[1], 2) + Math.pow(t[2] - i.peek(u).color[2], 2))) < n || void 0 === n) && (n = e, r = i.peek(u).color);
                        return r
                    },
                    forcebw: function() {
                        var t = this.vboxes;
                        t.sort(function(t, n) {
                            return r.naturalOrder(r.sum(t.color), r.sum(n.color))
                        });
                        var n = t[0].color;
                        n[0] < 5 && n[1] < 5 && n[2] < 5 && (t[0].color = [0, 0, 0]);
                        var e = t.length - 1,
                            i = t[e].color;
                        i[0] > 251 && i[1] > 251 && i[2] > 251 && (t[e].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(o, l) {
                        if (!o.length || l < 2 || l > 256) return !1;
                        var a, c, s, f, d, h, p, v, g, w, m, b, _, E, M, I, x = (a = o, d = Array(32768), a.forEach(function(e) {
                                s = e[0] >> t, f = e[1] >> t, d[c = n(s, f, e[2] >> t)] = (d[c] || 0) + 1
                            }), d),
                            C = 0;
                        x.forEach(function() {
                            C++
                        });
                        var O = (h = o, p = x, m = 1e6, b = 0, _ = 1e6, E = 0, M = 1e6, I = 0, h.forEach(function(n) {
                                v = n[0] >> t, g = n[1] >> t, w = n[2] >> t, v < m ? m = v : v > b && (b = v), g < _ ? _ = g : g > E && (E = g), w < M ? M = w : w > I && (I = w)
                            }), new i(m, b, _, E, M, I, p)),
                            N = new e(function(t, n) {
                                return r.naturalOrder(t.count(), n.count())
                            });

                        function y(t, e) {
                            for (var i, u = 1, o = 0; o < 1e3;) {
                                if (!(i = t.pop()).count()) {
                                    t.push(i), o++;
                                    continue
                                }
                                var l = function(t, e) {
                                        if (e.count()) {
                                            var i = e.r2 - e.r1 + 1,
                                                u = e.g2 - e.g1 + 1,
                                                o = e.b2 - e.b1 + 1,
                                                l = r.max([i, u, o]);
                                            if (1 == e.count()) return [e.copy()];
                                            var a, c, s, f, d, h = 0,
                                                p = [],
                                                v = [];
                                            if (l == i)
                                                for (a = e.r1; a <= e.r2; a++) {
                                                    for (f = 0, c = e.g1; c <= e.g2; c++)
                                                        for (s = e.b1; s <= e.b2; s++) f += t[d = n(a, c, s)] || 0;
                                                    h += f, p[a] = h
                                                } else if (l == u)
                                                    for (a = e.g1; a <= e.g2; a++) {
                                                        for (f = 0, c = e.r1; c <= e.r2; c++)
                                                            for (s = e.b1; s <= e.b2; s++) f += t[d = n(c, a, s)] || 0;
                                                        h += f, p[a] = h
                                                    } else
                                                        for (a = e.b1; a <= e.b2; a++) {
                                                            for (f = 0, c = e.r1; c <= e.r2; c++)
                                                                for (s = e.g1; s <= e.g2; s++) f += t[d = n(c, s, a)] || 0;
                                                            h += f, p[a] = h
                                                        }
                                            return p.forEach(function(t, n) {
                                                v[n] = h - t
                                            }), g(l == i ? "r" : l == u ? "g" : "b")
                                        }

                                        function g(t) {
                                            var n, r, i, u, o, l = t + "1",
                                                c = t + "2",
                                                s = 0;
                                            for (a = e[l]; a <= e[c]; a++)
                                                if (p[a] > h / 2) {
                                                    for (i = e.copy(), u = e.copy(), n = a - e[l], o = n <= (r = e[c] - a) ? Math.min(e[c] - 1, ~~(a + r / 2)) : Math.max(e[l], ~~(a - 1 - n / 2)); !p[o];) o++;
                                                    for (s = v[o]; !s && p[o - 1];) s = v[--o];
                                                    return i[c] = o, u[l] = i[c] + 1, [i, u]
                                                }
                                        }
                                    }(x, i),
                                    a = l[0],
                                    c = l[1];
                                if (!a) return;
                                if (t.push(a), c && (t.push(c), u++), u >= e || o++ > 1e3) return
                            }
                        }
                        N.push(O), y(N, .75 * l);
                        for (var R = new e(function(t, n) {
                                return r.naturalOrder(t.count() * t.volume(), n.count() * n.volume())
                            }); N.size();) R.push(N.pop());
                        y(R, l - R.size());
                        for (var S = new u; R.size();) S.push(R.pop());
                        return S
                    }
                }
            }();
            t.exports = i.quantize
        },
        48174: function(t, n, e) {
            "use strict";

            function r(t, n) {
                if (t.length !== n.length) return !1;
                for (let e = 0; e < n.length && e < t.length; e++)
                    if (!Object.is(t[e], n[e])) return !1;
                return !0
            }
            e.r(n), e.d(n, {
                default: function() {
                    return r
                }
            })
        },
        775560: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
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
            var r = e("14716"),
                i = e("745510"),
                u = e("315378")
        },
        14716: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return i
                }
            }), e("222007");
            var r = e("884691");

            function i() {
                let [, t] = (0, r.useState)({});
                return (0, r.useCallback)(() => t({}), [])
            }
        },
        315378: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return u
                }
            });
            var r = e("884691");
            let i = {};

            function u(t) {
                let n = (0, r.useRef)(i);
                return n.current === i && (n.current = t()), n.current
            }
        },
        745510: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return o
                }
            });
            var r = e("884691"),
                i = e("48174");
            let u = [];

            function o(t, n) {
                let e = (0, r.useRef)(),
                    o = (0, r.useRef)(u);
                return o.current === u ? (e.current = t(), o.current = n) : !(0, i.default)(n, o.current) && (e.current = t(), o.current = n), e.current
            }
        },
        276825: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                CheckmarkSmallIcon: function() {
                    return o
                }
            });
            var r = e("37983");
            e("884691");
            var i = e("669491"),
                u = e("75196");
            let o = t => {
                let {
                    width: n = 24,
                    height: e = 24,
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...a
                } = t;
                return (0, r.jsx)("svg", {
                    ...(0, u.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: e,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M18.7 7.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.29 7.3-7.3a1 1 0 0 1 1.4 0Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        333805: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return r
                }
            });
            var r, i = e("872717"),
                u = e("49111"),
                o = e("782340");
            r = class extends i.default.V6OrEarlierAPIError {
                constructor(t, n) {
                    super(t, n, null != n ? o.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: u.Links.STATUS,
                        details: "".concat(n)
                    }) : o.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: u.Links.STATUS
                    }))
                }
            }
        },
        689988: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return r
                }
            }), e("70102"), e("222007"), e("704744");
            var r, i = e("913144");
            r = class {
                initialize() {
                    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(t => {
                        let [n, e] = t;
                        i.default.subscribe(n, "function" == typeof e ? e : e.callback)
                    }), this.stores.forEach((t, n) => {
                        n.addChangeListener(t), t()
                    }))
                }
                terminate(t) {
                    !(this.initializedCount <= 0) && (t ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(t => {
                        let [n, e] = t;
                        i.default.unsubscribe(n, "function" == typeof e ? e : e.callback)
                    })))
                }
                _initialize() {}
                _terminate() {}
                constructor() {
                    this.initializedCount = 0, this.actions = {}, this.stores = new Map
                }
            }
        },
        545158: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return i
                }
            });
            var r = e("773336");
            async function i(t, n) {
                let {
                    default: i
                } = await e.el("572544").then(e.bind(e, "572544")), u = i(t, {
                    skipExtensionCheck: n,
                    analyticsLocations: []
                });
                if (null != u) u(null);
                else if (r.isPlatformEmbedded) window.open(t);
                else {
                    let n = document.createElement("a");
                    n.href = t, n.target = "_blank", n.rel = "noreferrer noopener", n.click()
                }
            }
        },
        616265: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return r
                }
            });
            var r = {
                openCreateGuildModal: t => {
                    e.el("297267").then(e.bind(e, "297267")).then(n => {
                        let {
                            openCreateGuildModal: e
                        } = n;
                        return e(t)
                    })
                },
                updateCreateGuildModal: t => {
                    e.el("297267").then(e.bind(e, "297267")).then(n => {
                        let {
                            updateCreateGuildModal: e
                        } = n;
                        return e(t)
                    })
                }
            }
        },
        689226: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                getRoleIconData: function() {
                    return f
                },
                replaceRoleIconSourceSize: function() {
                    return d
                },
                isRoleIconAssetUrl: function() {
                    return p
                },
                canGuildUseRoleIcons: function() {
                    return v
                }
            }), e("781738");
            var r = e("867805"),
                i = e("407063"),
                u = e("315102"),
                o = e("773336"),
                l = e("49111");
            let a = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                c = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                s = (0, o.isAndroid)(),
                f = (t, n) => {
                    if (null == t) return null;
                    let e = null != t.unicodeEmoji ? r.default.getByName(r.default.convertSurrogateToName(t.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: h(t, n),
                        unicodeEmoji: null != e ? e : void 0
                    }
                },
                d = (t, n) => t.replace(/size=[0-9]+/g, "size=".concat((0, i.getBestMediaProxySize)(n * (0, i.getDevicePixelRatio)()))),
                h = (t, n) => {
                    let {
                        id: e,
                        icon: r
                    } = t;
                    if (null == r) return;
                    if (r.startsWith("data:")) return r;
                    let o = u.SUPPORTS_WEBP ? "webp" : "png",
                        f = "",
                        d = "quality=lossless";
                    return (null != n && (f = "size=" + (0, i.getBestMediaProxySize)(n * (0, i.getDevicePixelRatio)()), d = s ? "" : "&" + d), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(a, "/").concat(e, "/").concat(r, ".").concat(o, "?").concat(f).concat(d) : "".concat(c).concat(l.Endpoints.ROLE_ICON(e, r), "?").concat(f)
                },
                p = t => t.startsWith(a) || t.startsWith("".concat(c, "/roles")) && t.includes("/icons/"),
                v = (t, n) => {
                    var e;
                    let r = (null == n ? void 0 : null === (e = n.tags) || void 0 === e ? void 0 : e.subscription_listing_id) != null;
                    return r || t.features.has(l.GuildFeatures.ROLE_ICONS)
                }
        },
        153498: function(t, n, e) {
            "use strict";

            function r(t) {
                let {} = t;
                return !1
            }

            function i(t, n) {
                return !1
            }

            function u(t) {
                return !1
            }

            function o() {
                return !1
            }

            function l() {
                return !1
            }

            function a(t) {
                let {} = t;
                return !1
            }

            function c(t, n) {
                return !1
            }

            function s() {
                return !1
            }

            function f(t) {}

            function d(t) {}

            function h(t) {}

            function p(t) {
                return !1
            }
            e.r(n), e.d(n, {
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
                    return l
                },
                pushModal: function() {
                    return a
                },
                popModal: function() {
                    return c
                },
                popAllModals: function() {
                    return s
                },
                coerceChannelRoute: function() {
                    return f
                },
                coerceGuildsRoute: function() {
                    return d
                },
                coerceModalRoute: function() {
                    return h
                },
                useIsModalOpen: function() {
                    return p
                }
            })
        },
        467475: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return o
                }
            });
            var r = e("65597"),
                i = e("42203"),
                u = e("724210");

            function o(t) {
                let n = (0, r.default)([i.default], () => {
                    let n = i.default.getChannel(t);
                    return (null == n ? void 0 : n.parent_id) != null && n.isForumPost() ? i.default.getChannel(null == n ? void 0 : n.parent_id) : null
                });
                return (null == n ? void 0 : n.hasFlag(u.ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0
            }
        },
        146574: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                getNativeContextMenuChannelAnalytics: function() {
                    return u
                }
            });
            var r = e("18494"),
                i = e("724210");

            function u() {
                var t;
                let n = null !== (t = r.default.getCurrentlySelectedChannelId()) && void 0 !== t ? t : void 0;
                return null != n && (0, i.isStaticChannelRoute)(n) ? {
                    channel_static_route: n
                } : {
                    channel_id: n
                }
            }
        },
        399758: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return c
                }
            });
            var r = e("37983");
            e("884691");
            var i = e("77078"),
                u = e("272030"),
                o = e("773336"),
                l = e("26051"),
                a = e("782340");

            function c(t) {
                let {
                    href: n,
                    textContent: e,
                    onSelect: c
                } = t, s = (0, l.default)(n, e);
                return o.isPlatformEmbedded && null != s ? (0, r.jsx)(i.Menu, {
                    navId: "image-context",
                    onClose: u.closeContextMenu,
                    "aria-label": a.default.Messages.IMAGE_ACTIONS_MENU_LABEL,
                    onSelect: c,
                    children: (0, r.jsx)(i.MenuGroup, {
                        children: s
                    })
                }) : null
            }
        },
        26051: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return g
                }
            });
            var r = e("37983");
            e("884691");
            var i = e("77078"),
                u = e("689226"),
                o = e("467475"),
                l = e("24373"),
                a = e("48703"),
                c = e("599110"),
                s = e("128259"),
                f = e("773336"),
                d = e("50885"),
                h = e("146574"),
                p = e("49111"),
                v = e("782340");

            function g(t, n, e, g) {
                let w = (0, o.default)(null == e ? void 0 : e.getChannelId());
                if (!f.isPlatformEmbedded || null == t || "" === t || w || (null == g ? void 0 : g.shouldHideMediaOptions) === !0 || null != t && null != (0, l.isStickerAssetUrl)(t) || null != t && (0, u.isRoleIconAssetUrl)(t)) return null;
                let m = (0, a.getHostname)(t),
                    b = e => {
                        c.default.track(p.AnalyticEvents.CONTEXT_MENU_LINK_OPENED, {
                            hostname: m,
                            ...(0, h.getNativeContextMenuChannelAnalytics)()
                        }), (0, s.handleClick)({
                            href: t,
                            trusted: (0, s.isLinkTrusted)(t, n),
                            shouldConfirm: !0
                        }, e)
                    };
                return [(0, r.jsx)(i.MenuItem, {
                    id: "copy-native-link",
                    label: v.default.Messages.COPY_LINK,
                    action: () => {
                        c.default.track(p.AnalyticEvents.CONTEXT_MENU_LINK_COPIED, {
                            hostname: m,
                            ...(0, h.getNativeContextMenuChannelAnalytics)()
                        }), d.default.copy(t)
                    }
                }, "copy-native-link"), (0, r.jsx)(i.MenuItem, {
                    id: "open-native-link",
                    label: v.default.Messages.OPEN_LINK,
                    action: t => b(t)
                }, "open-native-link")]
            }
        },
        471671: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return d
                }
            }), e("222007");
            var r = e("627445"),
                i = e.n(r),
                u = e("446674"),
                o = e("913144"),
                l = e("816454");
            let a = new Map;

            function c(t) {
                let n = a.get(t);
                return null == n ? (console.warn("Window state not initialized", t), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : n
            }
            class s extends u.default.Store {
                isFocused() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, l.getMainWindowId)();
                    return c(t).focused
                }
                getFocusedWindowId() {
                    let t = null;
                    return a.forEach((n, e) => {
                        n.focused && (t = e)
                    }), t
                }
                isElementFullScreen() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, l.getMainWindowId)();
                    return c(t).isElementFullscreen
                }
                windowSize() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, l.getMainWindowId)();
                    return c(t).windowSize
                }
            }
            s.displayName = "WindowStore";
            let f = new s(o.default, {
                WINDOW_INIT: function(t) {
                    i(!a.has(t.windowId), "Window initialized multiple times");
                    let {
                        width: n,
                        height: e,
                        isElementFullscreen: r,
                        focused: u
                    } = t;
                    return a.set(t.windowId, {
                        windowSize: {
                            width: n,
                            height: e
                        },
                        isElementFullscreen: r,
                        focused: u
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(t) {
                    let n = c(t.windowId);
                    return n.isElementFullscreen !== t.isElementFullscreen && (a.set(t.windowId, {
                        ...n,
                        isElementFullscreen: t.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(t) {
                    let n = c(t.windowId);
                    return n.focused !== t.focused && (a.set(t.windowId, {
                        ...n,
                        focused: t.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(t) {
                    let n = c(t.windowId);
                    return (n.windowSize.width !== t.width || n.windowSize.height !== t.height) && (a.set(t.windowId, {
                        ...n,
                        windowSize: {
                            width: t.width,
                            height: t.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(t) {
                    return a.delete(t.windowId), !0
                }
            });
            e.el("599110").then(e.bind(e, "599110")).then(t => {
                let {
                    addExtraAnalyticsDecorator: n
                } = t;
                n(t => {
                    t.client_app_state = f.isFocused() ? "focused" : "unfocused"
                })
            });
            var d = f
        },
        486952: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return l
                }
            });
            var r = e("37983");
            e("884691");
            var i = e("469563"),
                u = e("276825"),
                o = e("75196"),
                l = (0, i.replaceIcon)(function(t) {
                    let {
                        width: n = 16,
                        height: e = 16,
                        color: i = "currentColor",
                        ...u
                    } = t;
                    return (0, r.jsx)("svg", {
                        ...(0, o.default)(u),
                        width: n,
                        height: e,
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
        103603: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                fit: function() {
                    return c
                },
                zoomFit: function() {
                    return s
                },
                getRatio: function() {
                    return f
                },
                getCoverRatio: function() {
                    return d
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
                    return m
                },
                dataUriFileSize: function() {
                    return b
                },
                dataUrlToFile: function() {
                    return _
                },
                isPNGAnimated: function() {
                    return E
                }
            }), e("424973"), e("101997"), e("311790"), e("477657"), e("811875"), e("90301"), e("652153"), e("28797"), e("817884"), e("597349"), e("667536"), e("690341"), e("70102");
            var r = e("627445"),
                i = e.n(r),
                u = e("917351"),
                o = e.n(u),
                l = e("48648"),
                a = e.n(l);

            function c(t) {
                let {
                    width: n,
                    height: e,
                    maxWidth: r,
                    maxHeight: i,
                    minWidth: u = 0,
                    minHeight: o = 0
                } = t;
                if (n !== r || e !== i) {
                    let t = n > r ? r / n : 1;
                    n = Math.max(Math.round(n * t), u), e = Math.max(Math.round(e * t), o);
                    let l = e > i ? i / e : 1;
                    n = Math.max(Math.round(n * l), u), e = Math.max(Math.round(e * l), o)
                }
                return {
                    width: n,
                    height: e
                }
            }

            function s(t, n) {
                let e = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    r = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return c({
                    width: t,
                    height: n,
                    maxWidth: r,
                    maxHeight: e
                })
            }

            function f(t) {
                let {
                    width: n,
                    height: e,
                    maxWidth: r,
                    maxHeight: i
                } = t, u = 1;
                n > r && (u = r / n), n = Math.round(n * u);
                let o = 1;
                return (e = Math.round(e * u)) > i && (o = i / e), Math.min(u * o, 1)
            }

            function d(t) {
                let {
                    width: n,
                    height: e,
                    maxWidth: r,
                    maxHeight: i
                } = t;
                return n === e ? 1 : Math.min(Math.max(r / n, i / e), 1)
            }

            function h(t) {
                return null == t || "" === t ? "none" : "url(".concat(t, ")")
            }
            let p = [
                [0, 0, 0]
            ];

            function v(t, n, e) {
                let r = document.createElement("canvas"),
                    i = r.getContext("2d");
                if (null == i) return p;
                let u = r.width = 0 === t.width ? 128 : t.width,
                    o = r.height = 0 === t.height ? 128 : t.height;
                i.drawImage(t, 0, 0, u, o);
                let l = i.getImageData(0, 0, u, o).data,
                    c = function(t, n, e) {
                        let r = [];
                        for (let i = 0, u, o, l, a, c; i < n; i += e) o = t[(u = 4 * i) + 0], l = t[u + 1], a = t[u + 2], (void 0 === (c = t[u + 3]) || c >= 125) && !(o > 250 && l > 250 && a > 250) && r.push([o, l, a]);
                        return r
                    }(l, u * o, e),
                    s = a(c, n);
                return "boolean" == typeof s ? p : s.palette()
            }
            let g = t => "number" == typeof t ? null : w(t),
                w = o.memoize(t => new Promise((n, e) => {
                    let r = new Image;
                    r.crossOrigin = "Anonymous", r.onerror = t => {
                        e(t), r.onerror = r.onload = null, r = null
                    }, r.onload = () => {
                        n(v(r, 5, 10)), r.onerror = r.onload = null, r = null
                    }, r.src = t
                }));

            function m(t) {
                return new Promise((n, e) => {
                    let r = new FileReader;
                    r.readAsDataURL(t), r.onload = () => {
                        i("string" == typeof r.result, "Result must be a string"), n(r.result)
                    }, r.onerror = t => e(t)
                })
            }

            function b(t) {
                let n = t.split(";base64,");
                return i(2 === n.length, "Input data is not a valid image."), atob(n[1]).length
            }
            async function _(t, n, e) {
                let r = function(t) {
                        let n;
                        n = t.split(",")[0].indexOf("base64") >= 0 ? atob(t.split(",")[1]) : btoa(t.split(",")[1]);
                        let e = t.split(",")[0].split(":")[1].split(";")[0],
                            r = new Uint8Array(n.length);
                        for (var i = 0; i < n.length; i++) r[i] = n.charCodeAt(i);
                        return new Blob([r], {
                            type: e
                        })
                    }(t),
                    i = await r.arrayBuffer();
                return new File([i], n, {
                    type: e
                })
            }
            async function E(t) {
                var n;
                let e = null === (n = t.type) || void 0 === n ? void 0 : n.split(";")[0];
                if ("image/png" !== e) throw Error("File is not a PNG");
                let r = await t.text(),
                    i = r.indexOf("IDAT");
                return !!(i > 0) && -1 !== r.substring(0, i).indexOf("acTL") || !1
            }
        },
        655518: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return r
                }
            }), e("781738");
            var r = {
                escape: t => t.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }
        },
        840707: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return o
                }
            });
            var r = e("872717"),
                i = e("599110");

            function u(t, n, e) {
                let {
                    trackedActionData: r,
                    ...u
                } = n, o = {
                    url: u.url,
                    request_method: e
                };
                return new Promise((n, e) => {
                    t(u).then(t => {
                        let e = r.properties;
                        "function" == typeof r.properties && (e = r.properties(t)), (0, i.trackNetworkAction)(r.event, {
                            status_code: t.status,
                            ...o,
                            ...e
                        }), n(t)
                    }).catch(t => {
                        var n, u;
                        let l = r.properties;
                        "function" == typeof r.properties && (l = r.properties(t)), (0, i.trackNetworkAction)(r.event, {
                            status_code: t.status,
                            error_code: null === (n = t.body) || void 0 === n ? void 0 : n.code,
                            error_message: null === (u = t.body) || void 0 === u ? void 0 : u.message,
                            ...o,
                            ...l
                        }), e(t)
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