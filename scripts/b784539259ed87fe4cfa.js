(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["39108"], {
        717837: function(t, e, n) {
            "use strict";
            t.exports = function(t) {
                return (t = String(t || ""), o.test(t)) ? "rtl" : c.test(t) ? "ltr" : "neutral"
            };
            var r = "֑-߿יִ-﷽ﹰ-ﻼ",
                i = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                o = RegExp("^[^" + i + "]*[" + r + "]"),
                c = RegExp("^[^" + r + "]*[" + i + "]")
        },
        448105: function(t, e, n) {
            "use strict";
            t.exports = function(t, e) {
                var n = e.length,
                    r = t.length;
                if (r > n) return !1;
                if (r === n) return t === e;
                t: for (var i = 0, o = 0; i < r; i++) {
                    for (var c = t.charCodeAt(i); o < n;)
                        if (e.charCodeAt(o++) === c) continue t;
                    return !1
                }
                return !0
            }
        },
        766665: function(t, e, n) {
            var r = n("424498");
            t.exports = function(t, e, n) {
                "__proto__" == e && r ? r(t, e, {
                    configurable: !0,
                    enumerable: !0,
                    value: n,
                    writable: !0
                }) : t[e] = n
            }
        },
        69448: function(t, e, n) {
            "use strict";
            t.exports = n.p + "f6da6e7ed1d57e445d0e.svg"
        },
        926001: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                SlashBoxIcon: function() {
                    return c
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                o = n("75196");
            let c = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: c = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = t;
                return (0, r.jsx)("svg", {
                    ...(0, o.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof c ? c : c.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.79 3.37a.25.25 0 0 0-.22-.37h-3.13a.75.75 0 0 0-.66.38L6.21 18.63c-.1.16.03.37.22.37h3.13c.27 0 .52-.14.66-.38l7.57-13.25Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
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
                    return h
                },
                canGuildUseRoleIcons: function() {
                    return p
                }
            }), n("781738");
            var r = n("867805"),
                i = n("407063"),
                o = n("315102"),
                c = n("773336"),
                l = n("49111");
            let u = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                a = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                s = (0, c.isAndroid)(),
                d = (t, e) => {
                    if (null == t) return null;
                    let n = null != t.unicodeEmoji ? r.default.getByName(r.default.convertSurrogateToName(t.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: v(t, e),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                f = (t, e) => t.replace(/size=[0-9]+/g, "size=".concat((0, i.getBestMediaProxySize)(e * (0, i.getDevicePixelRatio)()))),
                v = (t, e) => {
                    let {
                        id: n,
                        icon: r
                    } = t;
                    if (null == r) return;
                    if (r.startsWith("data:")) return r;
                    let c = o.SUPPORTS_WEBP ? "webp" : "png",
                        d = "",
                        f = "quality=lossless";
                    return (null != e && (d = "size=" + (0, i.getBestMediaProxySize)(e * (0, i.getDevicePixelRatio)()), f = s ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(u, "/").concat(n, "/").concat(r, ".").concat(c, "?").concat(d).concat(f) : "".concat(a).concat(l.Endpoints.ROLE_ICON(n, r), "?").concat(d)
                },
                h = t => t.startsWith(u) || t.startsWith("".concat(a, "/roles")) && t.includes("/icons/"),
                p = (t, e) => {
                    var n;
                    let r = (null == e ? void 0 : null === (n = e.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return r || t.features.has(l.GuildFeatures.ROLE_ICONS)
                }
        },
        232268: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("65597"),
                o = n("880731");

            function c(t) {
                let {
                    children: e,
                    confettiLocation: n
                } = t, c = (0, i.default)([o.default], () => o.default.isEnabled({
                    confettiLocation: n
                }));
                return c ? (0, r.jsx)(r.Fragment, {
                    children: e
                }) : null
            }
        },
        798592: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var r = n("884691"),
                i = n("65597"),
                o = n("526887"),
                c = n("880731");

            function l() {
                let {
                    createMultipleConfettiAt: t
                } = r.useContext(o.ConfettiCannonContext), e = (0, i.default)([c.default], () => c.default.getState()), n = r.useCallback(t => ({
                    size: {
                        type: "static-random",
                        minValue: t.confettiSize - 7,
                        maxValue: t.confettiSize + 7
                    }
                }), []), l = r.useMemo(() => ({
                    fire: (r, i, o) => {
                        var c, l;
                        let u = (null == o ? void 0 : o.settings) != null ? {
                                ...e,
                                ...o.settings
                            } : e,
                            a = n(u);
                        t(r, i, a, (null !== (c = null == o ? void 0 : o.count) && void 0 !== c ? c : u.confettiCount) * (null !== (l = null == o ? void 0 : o.countMultiplier) && void 0 !== l ? l : 1), {
                            sprite: null == o ? void 0 : o.sprite
                        })
                    }
                }), [t, n, e]);
                return l
            }
        },
        555158: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                HelpMessageTypes: function() {
                    return i
                },
                default: function() {
                    return h
                }
            });
            var r, i, o = n("37983");
            n("884691");
            var c = n("414456"),
                l = n.n(c),
                u = n("77078"),
                a = n("36694"),
                s = n("381546"),
                d = n("68238"),
                f = n("423487"),
                v = n("557296");
            (r = i || (i = {}))[r.WARNING = 0] = "WARNING", r[r.INFO = 1] = "INFO", r[r.ERROR = 2] = "ERROR", r[r.POSITIVE = 3] = "POSITIVE";
            var h = function(t) {
                let {
                    children: e,
                    messageType: n,
                    className: r,
                    textColor: i = "text-normal",
                    textVariant: c = "text-sm/medium"
                } = t, h = function(t) {
                    switch (t) {
                        case 0:
                            return f.default;
                        case 1:
                            return d.default;
                        case 2:
                            return s.default;
                        case 3:
                            return a.default
                    }
                }(n), p = function(t) {
                    switch (t) {
                        case 0:
                            return v.warning;
                        case 1:
                            return v.info;
                        case 2:
                            return v.error;
                        case 3:
                            return v.positive
                    }
                }(n);
                return (0, o.jsxs)("div", {
                    className: l(v.container, p, r),
                    children: [(0, o.jsx)("div", {
                        className: v.iconDiv,
                        children: (0, o.jsx)(h, {
                            className: v.icon
                        })
                    }), (0, o.jsx)(u.Text, {
                        className: v.text,
                        color: i,
                        variant: c,
                        children: e
                    })]
                })
            }
        },
        83910: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                o = n("926001"),
                c = n("75196"),
                l = (0, i.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: o,
                        ...l
                    } = t;
                    return (0, r.jsx)("svg", {
                        ...(0, c.default)(l),
                        width: e,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: o,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, o.SlashBoxIcon, void 0, {
                    size: 24
                })
        },
        95689: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                o = n("578478"),
                c = n("75196"),
                l = (0, i.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: o,
                        ...l
                    } = t;
                    return (0, r.jsx)("svg", {
                        ...(0, c.default)(l),
                        width: e,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: o,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: i
                        })
                    })
                }, o.ImageIcon, void 0, {
                    size: 24
                })
        }
    }
]);