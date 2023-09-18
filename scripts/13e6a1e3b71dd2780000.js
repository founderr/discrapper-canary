"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [59725], {
        440922: (n, t, e) => {
            e.d(t, {
                zy: () => d,
                o: () => f,
                zt: () => _,
                _b: () => O
            });
            var o = e(135855),
                l = e(874049),
                r = e(775173),
                i = e(120415),
                u = e(2590),
                c = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                a = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                s = (0, i.Dt)(),
                d = function(n, t) {
                    if (null == n) return null;
                    var e = null != n.unicodeEmoji ? o.ZP.getByName(o.ZP.convertSurrogateToName(n.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: v(n, t),
                        unicodeEmoji: null != e ? e : void 0
                    }
                },
                f = function(n, t) {
                    return n.replace(/size=[0-9]+/g, "size=".concat((0, l.oO)(t * (0, l.x_)())))
                },
                v = function(n, t) {
                    var e = n.id,
                        o = n.icon;
                    if (null != o) {
                        if (o.startsWith("data:")) return o;
                        var i = r.$k ? "webp" : "png",
                            d = "",
                            f = "quality=lossless";
                        if (null != t) {
                            d = "size=" + (0, l.oO)(t * (0, l.x_)());
                            f = s ? "" : "&" + f
                        }
                        return null != window.GLOBAL_ENV.CDN_HOST ? "".concat(c, "/").concat(e, "/").concat(o, ".").concat(i, "?").concat(d).concat(f) : "".concat(a).concat(u.ANM.ROLE_ICON(e, o), "?").concat(d)
                    }
                },
                _ = function(n) {
                    return n.startsWith(c) || n.startsWith("".concat(a, "/roles")) && n.includes("/icons/")
                },
                O = function(n, t) {
                    var e;
                    return null != (null == t || null === (e = t.tags) || void 0 === e ? void 0 : e.subscription_listing_id) || n.features.has(u.oNc.ROLE_ICONS)
                }
        },
        356845: (n, t, e) => {
            e.d(t, {
                Z: () => i
            });
            var o = e(318715),
                l = e(61209),
                r = e(897196);

            function i(n) {
                var t = (0, o.ZP)([l.Z], (function() {
                    var t = l.Z.getChannel(n);
                    return null != (null == t ? void 0 : t.parent_id) && t.isForumPost() ? l.Z.getChannel(null == t ? void 0 : t.parent_id) : null
                }));
                return !0 === (null == t ? void 0 : t.hasFlag(r.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS))
            }
        },
        220461: (n, t, e) => {
            e.d(t, {
                v: () => r
            });
            var o = e(715107),
                l = e(897196);

            function r() {
                var n, t = null !== (n = o.Z.getCurrentlySelectedChannelId()) && void 0 !== n ? n : void 0;
                return null != t && (0, l.AB)(t) ? {
                    channel_static_route: t
                } : {
                    channel_id: t
                }
            }
        },
        759725: (n, t, e) => {
            e.r(t);
            e.d(t, {
                default: () => a
            });
            var o = e(785893),
                l = (e(667294), e(882723)),
                r = e(971402),
                i = e(120415),
                u = e(480657),
                c = e(473708);

            function a(n) {
                var t = n.href,
                    e = n.textContent,
                    a = n.onSelect,
                    s = (0, u.Z)(t, e);
                return i.FB ? null == s ? null : (0, o.jsx)(l.Menu, {
                    navId: "image-context",
                    onClose: r.Zy,
                    "aria-label": c.Z.Messages.IMAGE_ACTIONS_MENU_LABEL,
                    onSelect: a,
                    children: (0, o.jsx)(l.MenuGroup, {
                        children: s
                    })
                }) : null
            }
        },
        480657: (n, t, e) => {
            e.d(t, {
                Z: () => h
            });
            var o = e(785893),
                l = (e(667294), e(882723)),
                r = e(440922),
                i = e(356845),
                u = e(513586),
                c = e(457696),
                a = e(652591),
                s = e(955121),
                d = e(120415),
                f = e(310126),
                v = e(220461),
                _ = e(2590),
                O = e(473708);

            function p(n, t, e) {
                t in n ? Object.defineProperty(n, t, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[t] = e;
                return n
            }

            function N(n) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(e);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))));
                    o.forEach((function(t) {
                        p(n, t, e[t])
                    }))
                }
                return n
            }

            function h(n, t, e, p) {
                var h = (0, i.Z)(null == e ? void 0 : e.getChannelId());
                if (!d.FB || null == n || "" === n) return null;
                if (h || !0 === (null == p ? void 0 : p.shouldHideMediaOptions)) return null;
                if (null != n && null != (0, u.B0)(n)) return null;
                if (null != n && (0, r.zt)(n)) return null;
                var E = (0, c.F)(n);
                return [(0, o.jsx)(l.MenuItem, {
                    id: "copy-native-link",
                    label: O.Z.Messages.COPY_LINK,
                    action: function() {
                        a.default.track(_.rMx.CONTEXT_MENU_LINK_COPIED, N({
                            hostname: E
                        }, (0, v.v)()));
                        f.ZP.copy(n)
                    }
                }, "copy-native-link"), (0, o.jsx)(l.MenuItem, {
                    id: "open-native-link",
                    label: O.Z.Messages.OPEN_LINK,
                    action: function(e) {
                        return function(e) {
                            a.default.track(_.rMx.CONTEXT_MENU_LINK_OPENED, N({
                                hostname: E
                            }, (0, v.v)()));
                            (0, s.q)({
                                href: n,
                                trusted: (0, s.r)(n, t),
                                shouldConfirm: !0
                            }, e)
                        }(e)
                    }
                }, "open-native-link")]
            }
        }
    }
]);