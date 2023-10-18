"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [84522], {
        224134: (e, t, r) => {
            r.d(t, {
                Z: () => o
            });
            var n = r(744564);
            const o = {
                startTyping: function(e) {
                    n.Z.dispatch({
                        type: "TYPING_START_LOCAL",
                        channelId: e
                    })
                },
                stopTyping: function(e) {
                    n.Z.dispatch({
                        type: "TYPING_STOP_LOCAL",
                        channelId: e
                    })
                }
            }
        },
        470856: (e, t, r) => {
            r.d(t, {
                K: () => n
            });
            var n;
            ! function(e) {
                e[e.STREAM = 0] = "STREAM";
                e[e.VIDEO = 1] = "VIDEO"
            }(n || (n = {}))
        },
        284278: (e, t, r) => {
            r.d(t, {
                Z: () => f
            });
            var n = r(785893),
                o = (r(667294), r(944010)),
                i = r(895303),
                c = r(470856),
                u = r(473708);

            function l(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function a(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function f(e) {
                var t = e.type,
                    r = e.onConfirm,
                    f = a(e, ["type", "onConfirm"]),
                    s = t === c.K.STREAM ? u.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : u.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER,
                    b = t === c.K.STREAM ? u.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : u.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
                return (0, n.jsx)(i.default, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            l(e, t, r[t])
                        }))
                    }
                    return e
                }({
                    confirmText: u.Z.Messages.CONFIRM,
                    secondaryConfirmText: u.Z.Messages.DONT_ASK_AGAIN,
                    title: s,
                    cancelText: u.Z.Messages.CANCEL,
                    onConfirm: r,
                    onConfirmSecondary: function() {
                        o.ZP.updatedUnsyncedSettings({
                            disableHideSelfStreamAndVideoConfirmationAlert: !0
                        });
                        r()
                    },
                    body: b
                }, f))
            }
        },
        950761: (e, t, r) => {
            r.d(t, {
                Z: () => a
            });
            var n = r(785893),
                o = (r(667294), r(202351)),
                i = r(70418),
                c = r(247250),
                u = r(347874),
                l = r(473708);

            function a(e) {
                var t = (0, o.e7)([u.Z], (function() {
                    return u.Z.getVoiceParticipantsHidden(e)
                }));
                return (0, n.jsx)(i.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: l.Z.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !t,
                    action: function() {
                        return c.Z.toggleVoiceParticipantsHidden(e, !t)
                    }
                })
            }
        },
        492692: (e, t, r) => {
            r.d(t, {
                Z: () => m
            });
            var n = r(785893),
                o = (r(667294), r(202351)),
                i = r(70418),
                c = r(379991),
                u = r(656645),
                l = r(664625),
                a = r(602351),
                f = r(2590),
                s = r(36256);

            function b(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.Yn.DEFAULT,
                    r = (0, o.e7)([l.default], (function() {
                        return l.default.getId()
                    })),
                    n = (0, o.e7)([a.Z], (function() {
                        return a.Z.supports(s.AN.DISABLE_VIDEO) && a.Z.isVideoEnabled()
                    })),
                    i = (0, o.e7)([a.Z], (function() {
                        return a.Z.isLocalVideoDisabled(r, t)
                    }), [r, t]),
                    c = function(e) {
                        var n = e ? f.ZUi.DISABLED : f.ZUi.MANUAL_ENABLED;
                        u.Z.setDisableLocalVideo(r, n, t)
                    },
                    b = null == e || e === r,
                    p = b && (n || i);
                return [p, i, c]
            }
            var p = r(284278),
                y = r(470856),
                O = r(473708);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function g(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        g(e, t, r[t])
                    }))
                }
                return e
            }

            function h(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function j(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            c = !0,
                            u = !1;
                        try {
                            for (r = r.call(e); !(c = (n = r.next()).done); c = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                c || null == r.return || r.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.Yn.DEFAULT,
                    r = j(b(e, t), 3),
                    u = r[0],
                    l = r[1],
                    a = r[2],
                    f = (0, o.e7)([c.ZP], (function() {
                        return c.ZP.disableHideSelfStreamAndVideoConfirmationAlert
                    })),
                    d = function() {
                        if (f || l) return a(!l);
                        (0, i.openModal)((function(e) {
                            return (0, n.jsx)(p.Z, h(v({}, e), {
                                type: y.K.VIDEO,
                                onConfirm: function() {
                                    return a(!l)
                                }
                            }))
                        }))
                    };
                return u ? (0, n.jsx)(i.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: O.Z.Messages.SHOW_SELF_VIDEO,
                    checked: !l,
                    action: d
                }) : null
            }
        },
        289150: (e, t, r) => {
            r.d(t, {
                Z: () => g
            });
            var n = r(785893),
                o = (r(667294), r(202351)),
                i = r(70418),
                c = r(504001),
                u = r(664625),
                l = r(602351),
                a = r(473708),
                f = r(352062),
                s = r.n(f);

            function b(e, t, r, n, o, i, c) {
                try {
                    var u = e[i](c),
                        l = u.value
                } catch (e) {
                    r(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function p(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function c(e) {
                            b(i, n, o, c, u, "next", e)
                        }

                        function u(e) {
                            b(i, n, o, c, u, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function y(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function O(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }
            var d = function(e, t) {
                var r, n, o, i, c = {
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
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0,
                                    o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        n = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            c.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(i);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                i = t.call(e, c)
                            } catch (e) {
                                i = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
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

            function g(e) {
                var t = (0, i.useModalContext)(),
                    f = (0, o.e7)([l.Z], (function() {
                        return l.Z.isVideoEnabled()
                    })),
                    b = (0, o.e7)([u.default], (function() {
                        return u.default.getId() === e
                    })),
                    g = (0, c.Z)();
                return f && !g || !b ? null : (0, n.jsx)(i.MenuItem, {
                    id: "change-video-background",
                    label: (0, n.jsx)("div", {
                        className: s().item,
                        children: f ? a.Z.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : a.Z.Messages.CAMERA_PREVIEW_MENU_ITEM
                    }),
                    action: function() {
                        (0, i.openModalLazy)(p((function() {
                            var e, t;
                            return d(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([r.e(40532), r.e(58905), r.e(75331)]).then(r.bind(r, 763361))];
                                    case 1:
                                        e = o.sent(), t = e.default;
                                        return [2, function(e) {
                                            return (0, n.jsx)(t, O(function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var r = null != arguments[t] ? arguments[t] : {},
                                                        n = Object.keys(r);
                                                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                                                    }))));
                                                    n.forEach((function(t) {
                                                        y(e, t, r[t])
                                                    }))
                                                }
                                                return e
                                            }({}, e), {
                                                videoEnabled: f
                                            }))
                                        }]
                                }
                            }))
                        })), {
                            modalKey: "camera-preview",
                            contextKey: t
                        })
                    }
                })
            }
        },
        112897: (e, t, r) => {
            r.d(t, {
                Z: () => l
            });
            var n = r(785893),
                o = (r(667294), r(70418)),
                i = r(968449),
                c = r(416644),
                u = r(691797);

            function l(e) {
                var t = e.id,
                    r = e.label,
                    l = e.onSuccess,
                    a = e.shiftId,
                    f = e.showIconFirst,
                    s = i.Sb.useSetting();
                if (__OVERLAY__ || !s || !u.wS) return null;
                var b = "devmode-copy-id-".concat(t);
                return (0, n.jsx)(o.MenuItem, {
                    id: b,
                    label: r,
                    action: function(e) {
                        var r = null != a && e.shiftKey ? a : t;
                        (0, u.JG)(r);
                        null == l || l()
                    },
                    icon: c.Z,
                    showIconFirst: f
                }, b)
            }
        },
        15970: (e, t, r) => {
            r.d(t, {
                b: () => o
            });
            var n = r(2590);

            function o(e, t, r, o) {
                var i = null != r ? r : t;
                return null != i && e.can(n.Plq.CREATE_INSTANT_INVITE, i) || null != t && null != t.vanityURLCode || null != (null == o ? void 0 : o.invite_code)
            }
        },
        499219: (e, t, r) => {
            r.d(t, {
                Z: () => c
            });
            var n = r(202351),
                o = r(61209),
                i = r(715107);

            function c() {
                return (0, n.e7)([i.Z, o.Z], (function() {
                    var e = i.Z.getVoiceChannelId();
                    if (null != e) {
                        var t = o.Z.getChannel(e);
                        if (null == t ? void 0 : t.isGuildStageVoice()) return t
                    }
                    return null
                }))
            }
        },
        827991: (e, t, r) => {
            r.d(t, {
                Z: () => g,
                q: () => d
            });
            var n = r(785893),
                o = (r(667294), r(202351)),
                i = r(70418),
                c = r(224134),
                u = r(61209),
                l = r(682776),
                a = r(715107),
                f = r(930948),
                s = r(749565),
                b = r(2590),
                p = r(473708);

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function O(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            c = !0,
                            u = !1;
                        try {
                            for (r = r.call(e); !(c = (n = r.next()).done); c = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                c || null == r.return || r.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return y(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return y(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(e, t) {
                var r = e.id,
                    n = "@".concat(s.ZP.getUserTag(e, {
                        decoration: "never"
                    })),
                    o = "<@".concat(r, ">");
                f.S.dispatchToLastSubscribed(b.CkL.INSERT_TEXT, {
                    plainText: n,
                    rawText: o
                });
                null != t && c.Z.startTyping(t)
            }

            function g(e, t, r) {
                var c = O((0, o.Wu)([a.Z, u.Z, l.Z], (function() {
                        var e = a.Z.getChannelId(t),
                            r = u.Z.getChannel(e);
                        return [e, null != r && (r.isMultiUserDM() || l.Z.can(b.Plq.SEND_MESSAGES, r))]
                    }), [t]), 2),
                    f = c[0],
                    s = c[1],
                    y = r === b.IlC.POPOUT;
                return !s || y ? null : (0, n.jsx)(i.MenuItem, {
                    id: "mention",
                    label: p.Z.Messages.MENTION,
                    action: function() {
                        d(e, f)
                    }
                })
            }
        },
        504001: (e, t, r) => {
            r.d(t, {
                Z: () => c
            });
            var n = r(202351),
                o = r(602351),
                i = r(630926);

            function c() {
                return (0, n.e7)([o.Z], (function() {
                    return (0, i.Z)(o.Z)
                }))
            }
        },
        416644: (e, t, r) => {
            r.d(t, {
                Z: () => p
            });
            var n = r(785893),
                o = (r(667294), r(168075)),
                i = r(795308),
                c = r(633878);

            function u(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function a(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function f(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function s(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function b(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const p = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.color,
                    l = void 0 === u ? "currentColor" : u,
                    a = e.foreground,
                    p = b(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", s(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            f(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(p)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        className: a,
                        fill: l,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    f = void 0 === o ? 24 : o,
                    s = e.color,
                    b = void 0 === s ? i.Z.colors.INTERACTIVE_NORMAL : s,
                    p = e.colorClass,
                    y = void 0 === p ? "" : p,
                    O = a(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            u(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(O)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: f,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof b ? b : b.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Zm5.292 7.14c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        clipRule: "evenodd",
                        className: y
                    })
                }))
            }))
        }
    }
]);