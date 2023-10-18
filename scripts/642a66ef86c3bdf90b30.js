"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [25753], {
        786522: (e, n, t) => {
            t.d(n, {
                N5: () => a,
                c4: () => o,
                lc: () => u,
                mJ: () => i
            });
            var r = t(744564);

            function o(e) {
                r.Z.dispatch({
                    type: "CATEGORY_COLLAPSE",
                    id: e
                })
            }

            function i(e) {
                r.Z.dispatch({
                    type: "CATEGORY_EXPAND",
                    id: e
                })
            }

            function a(e) {
                r.Z.dispatch({
                    type: "CATEGORY_COLLAPSE_ALL",
                    guildId: e
                })
            }

            function u(e) {
                r.Z.dispatch({
                    type: "CATEGORY_EXPAND_ALL",
                    guildId: e
                })
            }
        },
        470856: (e, n, t) => {
            t.d(n, {
                K: () => r
            });
            var r;
            ! function(e) {
                e[e.STREAM = 0] = "STREAM";
                e[e.VIDEO = 1] = "VIDEO"
            }(r || (r = {}))
        },
        284278: (e, n, t) => {
            t.d(n, {
                Z: () => s
            });
            var r = t(785893),
                o = (t(667294), t(944010)),
                i = t(895303),
                a = t(470856),
                u = t(473708);

            function l(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function c(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function s(e) {
                var n = e.type,
                    t = e.onConfirm,
                    s = c(e, ["type", "onConfirm"]),
                    f = n === a.K.STREAM ? u.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : u.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER,
                    d = n === a.K.STREAM ? u.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : u.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
                return (0, r.jsx)(i.default, function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            l(e, n, t[n])
                        }))
                    }
                    return e
                }({
                    confirmText: u.Z.Messages.CONFIRM,
                    secondaryConfirmText: u.Z.Messages.DONT_ASK_AGAIN,
                    title: f,
                    cancelText: u.Z.Messages.CANCEL,
                    onConfirm: t,
                    onConfirmSecondary: function() {
                        o.ZP.updatedUnsyncedSettings({
                            disableHideSelfStreamAndVideoConfirmationAlert: !0
                        });
                        t()
                    },
                    body: d
                }, s))
            }
        },
        950761: (e, n, t) => {
            t.d(n, {
                Z: () => c
            });
            var r = t(785893),
                o = (t(667294), t(202351)),
                i = t(70418),
                a = t(247250),
                u = t(347874),
                l = t(473708);

            function c(e) {
                var n = (0, o.e7)([u.Z], (function() {
                    return u.Z.getVoiceParticipantsHidden(e)
                }));
                return (0, r.jsx)(i.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: l.Z.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !n,
                    action: function() {
                        return a.Z.toggleVoiceParticipantsHidden(e, !n)
                    }
                })
            }
        },
        492692: (e, n, t) => {
            t.d(n, {
                Z: () => m
            });
            var r = t(785893),
                o = (t(667294), t(202351)),
                i = t(70418),
                a = t(379991),
                u = t(656645),
                l = t(664625),
                c = t(602351),
                s = t(2590),
                f = t(36256);

            function d(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT,
                    t = (0, o.e7)([l.default], (function() {
                        return l.default.getId()
                    })),
                    r = (0, o.e7)([c.Z], (function() {
                        return c.Z.supports(f.AN.DISABLE_VIDEO) && c.Z.isVideoEnabled()
                    })),
                    i = (0, o.e7)([c.Z], (function() {
                        return c.Z.isLocalVideoDisabled(t, n)
                    }), [t, n]),
                    a = function(e) {
                        var r = e ? s.ZUi.DISABLED : s.ZUi.MANUAL_ENABLED;
                        u.Z.setDisableLocalVideo(t, r, n)
                    },
                    d = null == e || e === t,
                    p = d && (r || i);
                return [p, i, a]
            }
            var p = t(284278),
                b = t(470856),
                y = t(473708);

            function O(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function E(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function v(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        E(e, n, t[n])
                    }))
                }
                return e
            }

            function h(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function g(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return O(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return O(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT,
                    t = g(d(e, n), 3),
                    u = t[0],
                    l = t[1],
                    c = t[2],
                    s = (0, o.e7)([a.ZP], (function() {
                        return a.ZP.disableHideSelfStreamAndVideoConfirmationAlert
                    })),
                    O = function() {
                        if (s || l) return c(!l);
                        (0, i.openModal)((function(e) {
                            return (0, r.jsx)(p.Z, h(v({}, e), {
                                type: b.K.VIDEO,
                                onConfirm: function() {
                                    return c(!l)
                                }
                            }))
                        }))
                    };
                return u ? (0, r.jsx)(i.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: y.Z.Messages.SHOW_SELF_VIDEO,
                    checked: !l,
                    action: O
                }) : null
            }
        },
        289150: (e, n, t) => {
            t.d(n, {
                Z: () => E
            });
            var r = t(785893),
                o = (t(667294), t(202351)),
                i = t(70418),
                a = t(504001),
                u = t(664625),
                l = t(602351),
                c = t(473708),
                s = t(352062),
                f = t.n(s);

            function d(e, n, t, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(l) : Promise.resolve(l).then(r, o)
            }

            function p(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function a(e) {
                            d(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            d(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function b(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function y(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }
            var O = function(e, n) {
                var t, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = n.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };

            function E(e) {
                var n = (0, i.useModalContext)(),
                    s = (0, o.e7)([l.Z], (function() {
                        return l.Z.isVideoEnabled()
                    })),
                    d = (0, o.e7)([u.default], (function() {
                        return u.default.getId() === e
                    })),
                    E = (0, a.Z)();
                return s && !E || !d ? null : (0,
                    r.jsx)(i.MenuItem, {
                    id: "change-video-background",
                    label: (0, r.jsx)("div", {
                        className: f().item,
                        children: s ? c.Z.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : c.Z.Messages.CAMERA_PREVIEW_MENU_ITEM
                    }),
                    action: function() {
                        (0, i.openModalLazy)(p((function() {
                            var e, n;
                            return O(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(58905), t.e(75331)]).then(t.bind(t, 763361))];
                                    case 1:
                                        e = o.sent(), n = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(n, y(function(e) {
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
                                            }({}, e), {
                                                videoEnabled: s
                                            }))
                                        }]
                                }
                            }))
                        })), {
                            modalKey: "camera-preview",
                            contextKey: n
                        })
                    }
                })
            }
        },
        380477: (e, n, t) => {
            t.d(n, {
                ZP: () => h,
                k: () => v
            });
            var r = t(785893),
                o = (t(667294),
                    t(730381)),
                i = t.n(o),
                a = t(202351),
                u = t(70418),
                l = t(786522),
                c = t(201459),
                s = t(70983),
                f = t(9430),
                d = t(773011),
                p = t(2590),
                b = t(247530),
                y = t(473708);

            function O(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function E(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return O(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return O(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var v = function() {
                return [{
                    value: b.Oe.MINUTES_15,
                    label: y.Z.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: b.Oe.HOURS_1,
                    label: y.Z.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: b.Oe.HOURS_3,
                    label: y.Z.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: b.Oe.HOURS_8,
                    label: y.Z.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: b.Oe.HOURS_24,
                    label: y.Z.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: b.Oe.ALWAYS,
                    label: y.Z.Messages.MUTE_DURATION_ALWAYS
                }]
            };

            function h(e, n) {
                var t = function(t) {
                        e.type === p.d4z.GUILD_CATEGORY && (0, l.c4)(e.id);
                        var r = function(e) {
                            return {
                                muted: !0,
                                mute_config: {
                                    selected_time_window: e,
                                    end_time: e > 0 ? i()().add(e, "second").toISOString() : null
                                }
                            }
                        }(t);
                        c.Z.updateChannelOverrideSettings(e.guild_id, e.id, r, n)
                    },
                    o = function(n) {
                        n && e.type === p.d4z.GUILD_CATEGORY && (0, l.c4)(e.id);
                        c.Z.updateChannelOverrideSettings(e.guild_id, e.id, {
                            muted: n
                        })
                    },
                    b = E((0, a.Wu)([f.Z], (function() {
                        return [f.Z.isChannelMuted(e.guild_id, e.id), f.Z.getChannelMuteConfig(e.guild_id, e.id)]
                    })), 2),
                    O = b[0],
                    h = b[1],
                    g = (0, s.U)(h),
                    m = (0, d.ZP)(e, !0),
                    C = y.Z.Messages.MUTE_CHANNEL_GENERIC,
                    _ = y.Z.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case p.d4z.GUILD_CATEGORY:
                        C = y.Z.Messages.MUTE_CATEGORY;
                        _ = y.Z.Messages.UNMUTE_CATEGORY;
                        break;
                    case p.d4z.GROUP_DM:
                        C = y.Z.Messages.MUTE_CONVERSATION;
                        _ = y.Z.Messages.UNMUTE_CONVERSATION;
                        break;
                    case p.d4z.DM:
                        C = y.Z.Messages.MUTE_CHANNEL.format({
                            name: m
                        });
                        _ = y.Z.Messages.UNMUTE_CHANNEL.format({
                            name: m
                        });
                        break;
                    default:
                        C = y.Z.Messages.MUTE_CHANNEL_GENERIC;
                        _ = y.Z.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return O ? (0, r.jsx)(u.MenuItem, {
                    id: "unmute-channel",
                    label: _,
                    subtext: g,
                    action: function() {
                        return o(!1)
                    }
                }) : (0, r.jsx)(u.MenuItem, {
                    id: "mute-channel",
                    label: C,
                    action: function() {
                        return o(!0)
                    },
                    children: v().map((function(e) {
                        var n = e.value,
                            o = e.label;
                        return (0, r.jsx)(u.MenuItem, {
                            id: "".concat(n),
                            label: o,
                            action: function() {
                                return t(n)
                            }
                        }, n)
                    }))
                })
            }
        },
        112897: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(785893),
                o = (t(667294),
                    t(70418)),
                i = t(968449),
                a = t(416644),
                u = t(691797);

            function l(e) {
                var n = e.id,
                    t = e.label,
                    l = e.onSuccess,
                    c = e.shiftId,
                    s = e.showIconFirst,
                    f = i.Sb.useSetting();
                if (__OVERLAY__ || !f || !u.wS) return null;
                var d = "devmode-copy-id-".concat(n);
                return (0, r.jsx)(o.MenuItem, {
                    id: d,
                    label: t,
                    action: function(e) {
                        var t = null != c && e.shiftKey ? c : n;
                        (0, u.JG)(t);
                        null == l || l()
                    },
                    icon: a.Z,
                    showIconFirst: s
                }, d)
            }
        },
        963985: (e, n, t) => {
            t.d(n, {
                CM: () => y,
                UT: () => b,
                _Z: () => v,
                kj: () => d,
                oC: () => p,
                s3: () => E,
                xh: () => O
            });
            var r = t(842227),
                o = t(418705),
                i = t(917019),
                a = t(61209),
                u = t(682776),
                l = t(419051),
                c = t(520453);

            function s() {
                var e = l.Z.getFavoriteChannels(),
                    n = 1;
                for (var t in e) n = Math.max(n, e[t].order);
                return n + 1
            }

            function f(e) {
                for (var n in e) {
                    var t = e[n];
                    if (null != t) {
                        if (t.type !== o.Dd.CATEGORY) {
                            var r = a.Z.getChannel(n);
                            null != r && (r.isPrivate() || u.Z.can(c.Pl.VIEW_CHANNEL, r)) || delete e[n]
                        }
                    } else delete e[n]
                }
            }

            function d(e, n) {
                l.Z.isFavorite(e) || i.hW.updateAsync("favorites", (function(t) {
                    t.favoriteChannels[e] = o.aV.create({
                        nickname: "",
                        type: o.Dd.REFERENCE_ORIGINAL,
                        position: s(),
                        parentId: null != n ? n : "0"
                    });
                    f(t.favoriteChannels)
                }), i.fy.FREQUENT_USER_ACTION)
            }

            function p(e) {
                var n = l.Z.getFavorite(e);
                null != n && i.hW.updateAsync("favorites", (function(t) {
                    delete t.favoriteChannels[e];
                    if (n.type === o.Dd.CATEGORY)
                        for (var r in t.favoriteChannels) t.favoriteChannels[r].parentId === e && (t.favoriteChannels[r].parentId = "0");
                    f(t.favoriteChannels)
                }), i.fy.FREQUENT_USER_ACTION)
            }

            function b(e, n) {
                l.Z.isFavorite(e) && i.hW.updateAsync("favorites", (function(t) {
                    t.favoriteChannels[e].nickname = null != n ? n : ""
                }), i.fy.FREQUENT_USER_ACTION)
            }

            function y(e) {
                var n = r.default.fromTimestamp(Date.now());
                i.hW.updateAsync("favorites", (function(t) {
                    t.favoriteChannels[n] = o.aV.create({
                        nickname: e,
                        type: o.Dd.CATEGORY,
                        position: s(),
                        parentId: "0"
                    })
                }), i.fy.FREQUENT_USER_ACTION)
            }

            function O(e) {
                p(e)
            }

            function E(e) {
                i.hW.updateAsync("favorites", (function(n) {
                    var t = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, a = e[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                            var u = i.value;
                            null != u.position && (n.favoriteChannels[u.id].position = u.position);
                            if (void 0 !== u.parent_id) {
                                var l;
                                n.favoriteChannels[u.id].parentId = null !== (l = u.parent_id) && void 0 !== l ? l : "0"
                            }
                        }
                    } catch (e) {
                        r = !0;
                        o = e
                    } finally {
                        try {
                            t || null == a.return || a.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                }), i.fy.FREQUENT_USER_ACTION)
            }

            function v() {
                i.hW.updateAsync("favorites", (function(e) {
                    e.muted = !e.muted
                }), i.fy.INFREQUENT_USER_ACTION)
            }
        },
        15970: (e, n, t) => {
            t.d(n, {
                b: () => o
            });
            var r = t(2590);

            function o(e, n, t, o) {
                var i = null != t ? t : n;
                return null != i && e.can(r.Plq.CREATE_INSTANT_INVITE, i) || null != n && null != n.vanityURLCode || null != (null == o ? void 0 : o.invite_code)
            }
        },
        562205: (e, n, t) => {
            t.d(n, {
                e4: () => f,
                qR: () => p,
                hi: () => E,
                Xy: () => b,
                gN: () => y,
                r_: () => O
            });
            var r, o = t(281110),
                i = t(744564),
                a = t(84441);
            ! function(e) {
                e[e.UNSPECIFIED = 0] = "UNSPECIFIED";
                e[e.PENDING = 1] = "PENDING";
                e[e.ACCEPTED = 2] = "ACCEPTED";
                e[e.REJECTED = 3] = "REJECTED"
            }(r || (r = {}));
            var u = t(2590);

            function l(e, n, t, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(l) : Promise.resolve(l).then(r, o)
            }

            function c(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function a(e) {
                            l(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            l(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var s = function(e, n) {
                var t, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = n.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };

            function f(e) {
                return d.apply(this, arguments)
            }

            function d() {
                return (d = c((function(e) {
                    return s(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, o.ZP.put({
                                    url: u.ANM.CHANNEL_RECIPIENT_CONSENT(e),
                                    body: {
                                        consent_status: r.ACCEPTED
                                    }
                                })];
                            case 1:
                                n.sent();
                                i.Z.dispatch({
                                    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
                                    channelId: e
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function p(e) {
                return o.ZP.put({
                    url: u.ANM.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: r.UNSPECIFIED
                    }
                })
            }

            function b(e) {
                return o.ZP.put({
                    url: u.ANM.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: r.PENDING
                    }
                })
            }

            function y(e) {
                return o.ZP.delete({
                    url: u.ANM.CHANNEL_RECIPIENT_CONSENT(e)
                })
            }

            function O(e) {
                return o.ZP.put({
                    url: u.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
                    body: {
                        channel_ids: e
                    }
                })
            }

            function E() {
                a.Z.getLocationMetadata()
            }
        },
        499219: (e, n, t) => {
            t.d(n, {
                Z: () => a
            });
            var r = t(202351),
                o = t(61209),
                i = t(715107);

            function a() {
                return (0, r.e7)([i.Z, o.Z], (function() {
                    var e = i.Z.getVoiceChannelId();
                    if (null != e) {
                        var n = o.Z.getChannel(e);
                        if (null == n ? void 0 : n.isGuildStageVoice()) return n
                    }
                    return null
                }))
            }
        },
        699050: (e, n, t) => {
            t.d(n, {
                Z: () => C
            });
            var r = t(785893),
                o = t(667294),
                i = t(441143),
                a = t.n(i),
                u = t(202351),
                l = t(70418),
                c = t(219217),
                s = t(272200),
                f = t(248046),
                d = t(698847),
                p = t(242922),
                b = t(767846),
                y = t.n(b);
            const O = function() {
                return (0, r.jsx)("div", {
                    className: y().loadingWrapper,
                    children: (0, r.jsx)(l.Dots, {
                        dotRadius: 4,
                        themed: !0
                    })
                })
            };
            var E = t(567403),
                v = t(127624),
                h = t(473708),
                g = t(929945),
                m = t.n(g);
            const C = function(e) {
                var n = e.commandType,
                    t = e.commandTargetId,
                    i = e.channel,
                    b = e.guildId,
                    y = e.onShow,
                    g = e.location,
                    C = o.useRef(!1),
                    _ = o.useRef(0),
                    N = (0, u.e7)([E.Z], (function() {
                        return E.Z.getGuild(null != b ? b : i.guild_id)
                    })),
                    A = (0, c.o)(i, {
                        commandType: n
                    }, {
                        location: g,
                        placeholderCount: v.Mn,
                        limit: v.lr
                    }),
                    I = A.hasMoreAfter,
                    w = A.scrollDown,
                    S = A.sectionDescriptors,
                    T = A.commands,
                    j = A.placeholders,
                    M = o.useMemo((function() {
                        var e = T.concat(j),
                            n = {};
                        S.forEach((function(e) {
                            n[e.id] = e
                        }));
                        return {
                            visibleCommands: e,
                            sections: n
                        }
                    }), [T, S, j]),
                    P = M.visibleCommands,
                    Z = M.sections,
                    R = o.useMemo((function() {
                        return (0, f.nT)(i, n, P.length, null == N ? void 0 : N.applicationCommandCounts)
                    }), [i, n, null == N ? void 0 : N.applicationCommandCounts, P.length]);
                o.useEffect((function() {
                    if (R !== C.current) {
                        R && (null == y || y());
                        C.current = R
                    }
                }), [R, y]);
                o.useEffect((function() {
                    D(_.current)
                }), [P]);
                var D = o.useCallback((function(e) {
                        I && e + 500 > 34 * P.length - 40 && w();
                        _.current = e
                    }), [I, w, P]),
                    U = o.useCallback((function(e) {
                        if (e.inputType === s.iw.PLACEHOLDER) return (0, r.jsx)(l.MenuItem, {
                            id: "menu-command-".concat(e.id),
                            render: function() {
                                return (0, r.jsx)(O, {})
                            }
                        }, "menu-command-".concat(e.id));
                        a()(null != i, "menu item should not show if channel is null");
                        var n = Z[e.applicationId],
                            o = null != n ? (0, p.ky)(n) : void 0;
                        return (0, r.jsx)(l.MenuItem, {
                            id: e.id,
                            label: e.displayName,
                            showIconFirst: !0,
                            icon: function() {
                                return null != o ? (0, r.jsx)(o, {
                                    channel: i,
                                    section: n,
                                    width: 18,
                                    height: 18,
                                    selectable: !1
                                }) : null
                            },
                            action: function() {
                                (0, d.Z)({
                                    command: e,
                                    optionValues: {},
                                    context: {
                                        channel: i,
                                        guild: N
                                    },
                                    commandTargetId: t
                                })
                            }
                        }, e.id)
                    }), [i, N, t, Z]);
                return R && (0, r.jsx)(l.MenuItem, {
                    id: "apps",
                    label: h.Z.Messages.APPS,
                    onChildrenScroll: D,
                    childRowHeight: 34,
                    listClassName: m().list,
                    disabled: 0 === P.length,
                    children: P.map(U)
                })
            }
        },
        504001: (e, n, t) => {
            t.d(n, {
                Z: () => a
            });
            var r = t(202351),
                o = t(602351),
                i = t(630926);

            function a() {
                return (0, r.e7)([o.Z], (function() {
                    return (0, i.Z)(o.Z)
                }))
            }
        },
        416644: (e, n, t) => {
            t.d(n, {
                Z: () => p
            });
            var r = t(785893),
                o = (t(667294), t(168075)),
                i = t(795308),
                a = t(633878);

            function u(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function l(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function c(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function s(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function f(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function d(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }
            const p = (0, o.hN)((function(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.color,
                    l = void 0 === u ? "currentColor" : u,
                    c = e.foreground,
                    p = d(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", f(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            s(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(p)), {
                    width: t,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: c,
                        fill: l,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                    })
                }))
            }), (function(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    b = void 0 === p ? "" : p,
                    y = c(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            u(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Zm5.292 7.14c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }))
        }
    }
]);