"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [37452], {
        440922: (n, e, t) => {
            t.d(e, {
                zy: () => f,
                o: () => d,
                zt: () => v,
                _b: () => h
            });
            var r = t(135855),
                o = t(874049),
                a = t(775173),
                i = t(120415),
                u = t(2590),
                l = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                c = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                s = (0, i.Dt)(),
                f = function(n, e) {
                    if (null == n) return null;
                    var t = null != n.unicodeEmoji ? r.ZP.getByName(r.ZP.convertSurrogateToName(n.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: p(n, e),
                        unicodeEmoji: null != t ? t : void 0
                    }
                },
                d = function(n, e) {
                    return n.replace(/size=[0-9]+/g, "size=".concat((0, o.oO)(e * (0, o.x_)())))
                },
                p = function(n, e) {
                    var t = n.id,
                        r = n.icon;
                    if (null != r) {
                        if (r.startsWith("data:")) return r;
                        var i = a.$k ? "webp" : "png",
                            f = "",
                            d = "quality=lossless";
                        if (null != e) {
                            f = "size=" + (0, o.oO)(e * (0, o.x_)());
                            d = s ? "" : "&" + d
                        }
                        return null != window.GLOBAL_ENV.CDN_HOST ? "".concat(l, "/").concat(t, "/").concat(r, ".").concat(i, "?").concat(f).concat(d) : "".concat(c).concat(u.ANM.ROLE_ICON(t, r), "?").concat(f)
                    }
                },
                v = function(n) {
                    return n.startsWith(l) || n.startsWith("".concat(c, "/roles")) && n.includes("/icons/")
                },
                h = function(n, e) {
                    var t;
                    return null != (null == e || null === (t = e.tags) || void 0 === t ? void 0 : t.subscription_listing_id) || n.features.has(u.oNc.ROLE_ICONS)
                }
        },
        356845: (n, e, t) => {
            t.d(e, {
                Z: () => i
            });
            var r = t(318715),
                o = t(61209),
                a = t(897196);

            function i(n) {
                var e = (0, r.ZP)([o.Z], (function() {
                    var e = o.Z.getChannel(n);
                    return null != (null == e ? void 0 : e.parent_id) && e.isForumPost() ? o.Z.getChannel(null == e ? void 0 : e.parent_id) : null
                }));
                return !0 === (null == e ? void 0 : e.hasFlag(a.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS))
            }
        },
        220461: (n, e, t) => {
            t.d(e, {
                v: () => a
            });
            var r = t(715107),
                o = t(897196);

            function a() {
                var n, e = null !== (n = r.Z.getCurrentlySelectedChannelId()) && void 0 !== n ? n : void 0;
                return null != e && (0, o.AB)(e) ? {
                    channel_static_route: e
                } : {
                    channel_id: e
                }
            }
        },
        637810: (n, e, t) => {
            t.r(e);
            t.d(e, {
                default: () => s
            });
            var r = t(785893),
                o = (t(667294), t(882723)),
                a = t(971402),
                i = t(120415),
                u = t(893516),
                l = t(480657),
                c = t(473708);

            function s(n) {
                var e = n.src,
                    t = n.onSelect,
                    s = (0, u.Z)(e),
                    f = (0, l.Z)(e, null);
                return i.FB ? (0, r.jsxs)(o.Menu, {
                    navId: "image-context",
                    onClose: a.Zy,
                    "aria-label": c.Z.Messages.IMAGE_ACTIONS_MENU_LABEL,
                    onSelect: t,
                    children: [(0, r.jsx)(o.MenuGroup, {
                        children: s
                    }), (0, r.jsx)(o.MenuGroup, {
                        children: f
                    })]
                }) : null
            }
        },
        893516: (n, e, t) => {
            t.d(e, {
                Z: () => C
            });
            var r = t(785893),
                o = (t(667294), t(882723)),
                a = t(105783),
                i = t(440922),
                u = t(356845),
                l = t(652591),
                c = t(120415),
                s = t(22176),
                f = t(310126),
                d = t(220461),
                p = t(2590),
                v = t(473708);

            function h(n, e, t, r, o, a, i) {
                try {
                    var u = n[a](i),
                        l = u.value
                } catch (n) {
                    t(n);
                    return
                }
                u.done ? e(l) : Promise.resolve(l).then(r, o)
            }

            function _(n) {
                return function() {
                    var e = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var a = n.apply(e, t);

                        function i(n) {
                            h(a, r, o, i, u, "next", n)
                        }

                        function u(n) {
                            h(a, r, o, i, u, "throw", n)
                        }
                        i(void 0)
                    }))
                }
            }

            function E(n, e, t) {
                e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t;
                return n
            }

            function g(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }))));
                    r.forEach((function(e) {
                        E(n, e, t[e])
                    }))
                }
                return n
            }
            var O = function(n, e) {
                    var t, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
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
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (t = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    (r = 0, o) && (a = [2 & a[0], o.value]);
                                    switch (a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            i.label++;
                                            return {
                                                value: a[1], done: !1
                                            };
                                        case 5:
                                            i.label++;
                                            r = a[1];
                                            a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop();
                                            i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1];
                                                o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2];
                                                i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop();
                                            i.trys.pop();
                                            continue
                                    }
                                    a = e.call(n, i)
                                } catch (n) {
                                    a = [6, n];
                                    r = 0
                                } finally {
                                    t = o = 0
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
                b = "https://media.discordapp.net",
                y = /^.*\.discordapp\.net$/,
                M = "https://cdn.discordapp.com",
                m = "".concat(b, "/stickers"),
                I = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
                N = new Set(["jpg", "jpeg", "png"]),
                w = function(n) {
                    var e;
                    return null === (e = new URL(n).pathname.split(".").pop()) || void 0 === e ? void 0 : e.toLowerCase()
                };

            function P(n) {
                var e = w(n);
                return null != e && N.has(e)
            }

            function Z(n, e) {
                a.Z.show({
                    title: v.Z.Messages.ERROR,
                    body: n
                });
                s.Z.captureException(e)
            }

            function C(n, e, t) {
                var a, s, h;
                if ((0,
                        u.Z)(null == e ? void 0 : e.getChannelId()) || !0 === (null == t ? void 0 : t.shouldHideMediaOptions)) return null;
                if (!c.FB || null == n || !(a = n, s = new URL(a), h = w(a), (y.test(s.hostname) || s.origin === M) && !a.startsWith(m) && !(0, i.zt)(a) && null != h && I.has(h))) return null;
                var E, N = function(n) {
                        var e = new URL(n);
                        if (e.origin === M) return n;
                        if (e.origin === b) return M + e.pathname;
                        e.searchParams.delete("width");
                        e.searchParams.delete("height");
                        e.searchParams.set("quality", "lossless");
                        return e.toString()
                    }(n),
                    C = (E = _((function() {
                        var n;
                        return O(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    e.trys.push([0, 2, , 3]);
                                    return [4, f.ZP.saveImage(N)];
                                case 1:
                                    e.sent();
                                    l.default.track(p.rMx.CONTEXT_MENU_IMAGE_SAVED, g({}, (0, d.v)()));
                                    return [3, 3];
                                case 2:
                                    n = e.sent();
                                    l.default.track(p.rMx.CONTEXT_MENU_IMAGE_SAVE_FAILED, g({}, (0, d.v)()));
                                    Z(v.Z.Messages.ERROR_SAVING_IMAGE, n);
                                    return [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    })), function() {
                        return E.apply(this, arguments)
                    }),
                    A = function() {
                        var n = _((function() {
                            var n;
                            return O(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        e.trys.push([0, 2, , 3]);
                                        return [4, f.ZP.copyImage(N)];
                                    case 1:
                                        e.sent();
                                        l.default.track(p.rMx.CONTEXT_MENU_IMAGE_COPIED, g({}, (0, d.v)()));
                                        return [3, 3];
                                    case 2:
                                        n = e.sent();
                                        Z(v.Z.Messages.ERROR_COPYING_IMAGE, n);
                                        l.default.track(p.rMx.CONTEXT_MENU_IMAGE_COPY_FAILED, g({}, (0, d.v)()));
                                        return [3, 3];
                                    case 3:
                                        return [2]
                                }
                            }))
                        }));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }();
                return [f.ZP.canCopyImage() && P(n) ? (0, r.jsx)(o.MenuItem, {
                    id: "copy-image",
                    label: v.Z.Messages.COPY_IMAGE_MENU_ITEM,
                    action: A
                }, "copy-image") : null, (0, r.jsx)(o.MenuItem, {
                    id: "save-image",
                    label: v.Z.Messages.SAVE_IMAGE_MENU_ITEM,
                    action: C
                }, "save-image")]
            }
        },
        480657: (n, e, t) => {
            t.d(e, {
                Z: () => g
            });
            var r = t(785893),
                o = (t(667294), t(882723)),
                a = t(440922),
                i = t(356845),
                u = t(513586),
                l = t(457696),
                c = t(652591),
                s = t(955121),
                f = t(120415),
                d = t(310126),
                p = t(220461),
                v = t(2590),
                h = t(473708);

            function _(n, e, t) {
                e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t;
                return n
            }

            function E(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }))));
                    r.forEach((function(e) {
                        _(n, e, t[e])
                    }))
                }
                return n
            }

            function g(n, e, t, _) {
                var g = (0, i.Z)(null == t ? void 0 : t.getChannelId());
                if (!f.FB || null == n || "" === n) return null;
                if (g || !0 === (null == _ ? void 0 : _.shouldHideMediaOptions)) return null;
                if (null != n && null != (0, u.B0)(n)) return null;
                if (null != n && (0, a.zt)(n)) return null;
                var O = (0, l.F)(n);
                return [(0, r.jsx)(o.MenuItem, {
                    id: "copy-native-link",
                    label: h.Z.Messages.COPY_LINK,
                    action: function() {
                        c.default.track(v.rMx.CONTEXT_MENU_LINK_COPIED, E({
                            hostname: O
                        }, (0, p.v)()));
                        d.ZP.copy(n)
                    }
                }, "copy-native-link"), (0, r.jsx)(o.MenuItem, {
                    id: "open-native-link",
                    label: h.Z.Messages.OPEN_LINK,
                    action: function(t) {
                        return function(t) {
                            c.default.track(v.rMx.CONTEXT_MENU_LINK_OPENED, E({
                                hostname: O
                            }, (0, p.v)()));
                            (0, s.q)({
                                href: n,
                                trusted: (0, s.r)(n, e),
                                shouldConfirm: !0
                            }, t)
                        }(t)
                    }
                }, "open-native-link")]
            }
        }
    }
]);
//# sourceMappingURL=2021b6d2f0017b333c68.js.map