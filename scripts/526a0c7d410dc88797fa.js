"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [37452], {
        356845: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(318715),
                a = t(61209),
                u = t(897196);

            function l(e) {
                var n = (0, r.ZP)([a.Z], (function() {
                    var n = a.Z.getChannel(e);
                    return null != (null == n ? void 0 : n.parent_id) && n.isForumPost() ? a.Z.getChannel(null == n ? void 0 : n.parent_id) : null
                }));
                return !0 === (null == n ? void 0 : n.hasFlag(u.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS))
            }
        },
        220461: (e, n, t) => {
            t.d(n, {
                v: () => u
            });
            var r = t(715107),
                a = t(897196);

            function u() {
                var e, n = null !== (e = r.Z.getCurrentlySelectedChannelId()) && void 0 !== e ? e : void 0;
                return null != n && (0, a.AB)(n) ? {
                    channel_static_route: n
                } : {
                    channel_id: n
                }
            }
        },
        937452: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => s
            });
            var r = t(785893),
                a = (t(667294), t(70418)),
                u = t(971402),
                l = t(120415),
                i = t(893516),
                o = t(480657),
                c = t(473708);

            function s(e) {
                var n = e.src,
                    t = e.onSelect,
                    s = (0, i.Z)(n),
                    f = (0, o.Z)(n, null);
                return l.FB ? (0, r.jsxs)(a.Menu, {
                    navId: "image-context",
                    onClose: u.Zy,
                    "aria-label": c.Z.Messages.IMAGE_ACTIONS_MENU_LABEL,
                    onSelect: t,
                    children: [(0,
                        r.jsx)(a.MenuGroup, {
                        children: s
                    }), (0, r.jsx)(a.MenuGroup, {
                        children: f
                    })]
                }) : null
            }
        },
        893516: (e, n, t) => {
            t.d(n, {
                Z: () => C
            });
            var r = t(785893),
                a = (t(667294), t(70418)),
                u = t(105783),
                l = t(440922),
                i = t(356845),
                o = t(652591),
                c = t(120415),
                s = t(22176),
                f = t(310126),
                p = t(220461),
                d = t(2590),
                h = t(473708);

            function v(e, n, t, r, a, u, l) {
                try {
                    var i = e[u](l),
                        o = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(o) : Promise.resolve(o).then(r, a)
            }

            function b(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var u = e.apply(n, t);

                        function l(e) {
                            v(u, r, a, l, i, "next", e)
                        }

                        function i(e) {
                            v(u, r, a, l, i, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function g(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function E(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        g(e, n, t[n])
                    }))
                }
                return e
            }
            var _ = function(e, n) {
                    var t, r, a, u, l = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return u = {
                        next: i(0),
                        throw: i(1),
                        return: i(2)
                    }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                        return this
                    }), u;

                    function i(u) {
                        return function(i) {
                            return function(u) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (t = 1, r && (a = 2 & u[0] ? r.return : u[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, u[1])).done) return a;
                                    (r = 0, a) && (u = [2 & u[0], a.value]);
                                    switch (u[0]) {
                                        case 0:
                                        case 1:
                                            a = u;
                                            break;
                                        case 4:
                                            l.label++;
                                            return {
                                                value: u[1], done: !1
                                            };
                                        case 5:
                                            l.label++;
                                            r = u[1];
                                            u = [0];
                                            continue;
                                        case 7:
                                            u = l.ops.pop();
                                            l.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = l.trys, a = a.length > 0 && a[a.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === u[0] && (!a || u[1] > a[0] && u[1] < a[3])) {
                                                l.label = u[1];
                                                break
                                            }
                                            if (6 === u[0] && l.label < a[1]) {
                                                l.label = a[1];
                                                a = u;
                                                break
                                            }
                                            if (a && l.label < a[2]) {
                                                l.label = a[2];
                                                l.ops.push(u);
                                                break
                                            }
                                            a[2] && l.ops.pop();
                                            l.trys.pop();
                                            continue
                                    }
                                    u = n.call(e, l)
                                } catch (e) {
                                    u = [6, e];
                                    r = 0
                                } finally {
                                    t = a = 0
                                }
                                if (5 & u[0]) throw u[1];
                                return {
                                    value: u[0] ? u[1] : void 0,
                                    done: !0
                                }
                            }([u, i])
                        }
                    }
                },
                y = "https://media.discordapp.net",
                M = /^.*\.discordapp\.net$/,
                O = "https://cdn.discordapp.com",
                m = "".concat(y, "/stickers"),
                I = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
                w = new Set(["jpg", "jpeg", "png"]),
                P = function(e) {
                    var n;
                    return null === (n = new URL(e).pathname.split(".").pop()) || void 0 === n ? void 0 : n.toLowerCase()
                };

            function Z(e) {
                var n = P(e);
                return null != n && w.has(n)
            }

            function N(e, n) {
                u.Z.show({
                    title: h.Z.Messages.ERROR,
                    body: e
                });
                s.Z.captureException(n)
            }

            function C(e, n, t) {
                var u, s, v;
                if ((0, i.Z)(null == n ? void 0 : n.getChannelId()) || !0 === (null == t ? void 0 : t.shouldHideMediaOptions)) return null;
                if (!c.FB || null == e || !(u = e, s = new URL(u), v = P(u), (M.test(s.hostname) || s.origin === O) && !u.startsWith(m) && !(0, l.zt)(u) && null != v && I.has(v))) return null;
                var g, w = function(e) {
                        var n = new URL(e);
                        if (n.origin === O) return e;
                        if (n.origin === y) return O + n.pathname;
                        n.searchParams.delete("width");
                        n.searchParams.delete("height");
                        n.searchParams.set("quality", "lossless");
                        return n.toString()
                    }(e),
                    C = (g = b((function() {
                        var e;
                        return _(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    n.trys.push([0, 2, , 3]);
                                    return [4, f.ZP.saveImage(w)];
                                case 1:
                                    n.sent();
                                    o.default.track(d.rMx.CONTEXT_MENU_IMAGE_SAVED, E({}, (0, p.v)()));
                                    return [3, 3];
                                case 2:
                                    e = n.sent();
                                    o.default.track(d.rMx.CONTEXT_MENU_IMAGE_SAVE_FAILED, E({}, (0, p.v)()));
                                    N(h.Z.Messages.ERROR_SAVING_IMAGE, e);
                                    return [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    })), function() {
                        return g.apply(this, arguments)
                    }),
                    j = function() {
                        var e = b((function() {
                            var e;
                            return _(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        n.trys.push([0, 2, , 3]);
                                        return [4, f.ZP.copyImage(w)];
                                    case 1:
                                        n.sent();
                                        o.default.track(d.rMx.CONTEXT_MENU_IMAGE_COPIED, E({}, (0, p.v)()));
                                        return [3, 3];
                                    case 2:
                                        e = n.sent();
                                        N(h.Z.Messages.ERROR_COPYING_IMAGE, e);
                                        o.default.track(d.rMx.CONTEXT_MENU_IMAGE_COPY_FAILED, E({}, (0, p.v)()));
                                        return [3, 3];
                                    case 3:
                                        return [2]
                                }
                            }))
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return [f.ZP.canCopyImage() && Z(e) ? (0, r.jsx)(a.MenuItem, {
                    id: "copy-image",
                    label: h.Z.Messages.COPY_IMAGE_MENU_ITEM,
                    action: j
                }, "copy-image") : null, (0, r.jsx)(a.MenuItem, {
                    id: "save-image",
                    label: h.Z.Messages.SAVE_IMAGE_MENU_ITEM,
                    action: C
                }, "save-image")]
            }
        },
        480657: (e, n, t) => {
            t.d(n, {
                Z: () => E
            });
            var r = t(785893),
                a = (t(667294), t(70418)),
                u = t(440922),
                l = t(356845),
                i = t(513586),
                o = t(457696),
                c = t(652591),
                s = t(955121),
                f = t(120415),
                p = t(310126),
                d = t(220461),
                h = t(2590),
                v = t(473708);

            function b(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function g(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        b(e, n, t[n])
                    }))
                }
                return e
            }

            function E(e, n, t, b) {
                var E = (0, l.Z)(null == t ? void 0 : t.getChannelId());
                if (!f.FB || null == e || "" === e) return null;
                if (E || !0 === (null == b ? void 0 : b.shouldHideMediaOptions)) return null;
                if (null != e && null != (0, i.B0)(e)) return null;
                if (null != e && (0, u.zt)(e)) return null;
                var _ = (0, o.F)(e);
                return [(0, r.jsx)(a.MenuItem, {
                    id: "copy-native-link",
                    label: v.Z.Messages.COPY_LINK,
                    action: function() {
                        c.default.track(h.rMx.CONTEXT_MENU_LINK_COPIED, g({
                            hostname: _
                        }, (0, d.v)()));
                        p.ZP.copy(e)
                    }
                }, "copy-native-link"), (0, r.jsx)(a.MenuItem, {
                    id: "open-native-link",
                    label: v.Z.Messages.OPEN_LINK,
                    action: function(t) {
                        return function(t) {
                            c.default.track(h.rMx.CONTEXT_MENU_LINK_OPENED, g({
                                hostname: _
                            }, (0, d.v)()));
                            (0, s.q)({
                                href: e,
                                trusted: (0, s.r)(e, n),
                                shouldConfirm: !0
                            }, t)
                        }(t)
                    }
                }, "open-native-link")]
            }
        }
    }
]);