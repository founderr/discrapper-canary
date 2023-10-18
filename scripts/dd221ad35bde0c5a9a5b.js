"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [59725], {
        356845: (n, e, t) => {
            t.d(e, {
                Z: () => i
            });
            var l = t(318715),
                r = t(61209),
                u = t(897196);

            function i(n) {
                var e = (0, l.ZP)([r.Z], (function() {
                    var e = r.Z.getChannel(n);
                    return null != (null == e ? void 0 : e.parent_id) && e.isForumPost() ? r.Z.getChannel(null == e ? void 0 : e.parent_id) : null
                }));
                return !0 === (null == e ? void 0 : e.hasFlag(u.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS))
            }
        },
        220461: (n, e, t) => {
            t.d(e, {
                v: () => u
            });
            var l = t(715107),
                r = t(897196);

            function u() {
                var n, e = null !== (n = l.Z.getCurrentlySelectedChannelId()) && void 0 !== n ? n : void 0;
                return null != e && (0, r.AB)(e) ? {
                    channel_static_route: e
                } : {
                    channel_id: e
                }
            }
        },
        759725: (n, e, t) => {
            t.r(e);
            t.d(e, {
                default: () => c
            });
            var l = t(785893),
                r = (t(667294), t(70418)),
                u = t(971402),
                i = t(120415),
                a = t(480657),
                o = t(473708);

            function c(n) {
                var e = n.href,
                    t = n.textContent,
                    c = n.onSelect,
                    d = (0, a.Z)(e, t);
                return i.FB ? null == d ? null : (0, l.jsx)(r.Menu, {
                    navId: "image-context",
                    onClose: u.Zy,
                    "aria-label": o.Z.Messages.IMAGE_ACTIONS_MENU_LABEL,
                    onSelect: c,
                    children: (0,
                        l.jsx)(r.MenuGroup, {
                        children: d
                    })
                }) : null
            }
        },
        480657: (n, e, t) => {
            t.d(e, {
                Z: () => b
            });
            var l = t(785893),
                r = (t(667294), t(70418)),
                u = t(440922),
                i = t(356845),
                a = t(513586),
                o = t(457696),
                c = t(652591),
                d = t(955121),
                s = t(120415),
                f = t(310126),
                v = t(220461),
                h = t(2590),
                p = t(473708);

            function _(n, e, t) {
                e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t;
                return n
            }

            function O(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        l = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }))));
                    l.forEach((function(e) {
                        _(n, e, t[e])
                    }))
                }
                return n
            }

            function b(n, e, t, _) {
                var b = (0, i.Z)(null == t ? void 0 : t.getChannelId());
                if (!s.FB || null == n || "" === n) return null;
                if (b || !0 === (null == _ ? void 0 : _.shouldHideMediaOptions)) return null;
                if (null != n && null != (0, a.B0)(n)) return null;
                if (null != n && (0, u.zt)(n)) return null;
                var C = (0, o.F)(n);
                return [(0, l.jsx)(r.MenuItem, {
                    id: "copy-native-link",
                    label: p.Z.Messages.COPY_LINK,
                    action: function() {
                        c.default.track(h.rMx.CONTEXT_MENU_LINK_COPIED, O({
                            hostname: C
                        }, (0, v.v)()));
                        f.ZP.copy(n)
                    }
                }, "copy-native-link"), (0, l.jsx)(r.MenuItem, {
                    id: "open-native-link",
                    label: p.Z.Messages.OPEN_LINK,
                    action: function(t) {
                        return function(t) {
                            c.default.track(h.rMx.CONTEXT_MENU_LINK_OPENED, O({
                                hostname: C
                            }, (0, v.v)()));
                            (0, d.q)({
                                href: n,
                                trusted: (0, d.r)(n, e),
                                shouldConfirm: !0
                            }, t)
                        }(t)
                    }
                }, "open-native-link")]
            }
        }
    }
]);