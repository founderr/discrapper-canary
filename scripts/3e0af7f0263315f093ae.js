"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [61205], {
        224134: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(744564);
            const o = {
                startTyping: function(e) {
                    r.Z.dispatch({
                        type: "TYPING_START_LOCAL",
                        channelId: e
                    })
                },
                stopTyping: function(e) {
                    r.Z.dispatch({
                        type: "TYPING_STOP_LOCAL",
                        channelId: e
                    })
                }
            }
        },
        470856: (e, t, n) => {
            n.d(t, {
                K: () => r
            });
            var r;
            ! function(e) {
                e[e.STREAM = 0] = "STREAM";
                e[e.VIDEO = 1] = "VIDEO"
            }(r || (r = {}))
        },
        284278: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(944010)),
                i = n(895303),
                u = n(470856),
                c = n(473708);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function s(e) {
                var t = e.type,
                    n = e.onConfirm,
                    s = l(e, ["type", "onConfirm"]),
                    f = t === u.K.STREAM ? c.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : c.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER,
                    d = t === u.K.STREAM ? c.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : c.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
                return (0, r.jsx)(i.default, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    confirmText: c.Z.Messages.CONFIRM,
                    secondaryConfirmText: c.Z.Messages.DONT_ASK_AGAIN,
                    title: f,
                    cancelText: c.Z.Messages.CANCEL,
                    onConfirm: n,
                    onConfirmSecondary: function() {
                        o.ZP.updatedUnsyncedSettings({
                            disableHideSelfStreamAndVideoConfirmationAlert: !0
                        });
                        n()
                    },
                    body: d
                }, s))
            }
        },
        950761: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(882723),
                u = n(247250),
                c = n(566706),
                a = n(473708);

            function l(e) {
                var t = (0, o.e7)([c.Z], (function() {
                    return c.Z.getVoiceParticipantsHidden(e)
                }));
                return (0, r.jsx)(i.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: a.Z.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !t,
                    action: function() {
                        return u.Z.toggleVoiceParticipantsHidden(e, !t)
                    }
                })
            }
        },
        492692: (e, t, n) => {
            n.d(t, {
                Z: () => E
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(882723),
                u = n(379991),
                c = n(656645),
                a = n(664625),
                l = n(525077),
                s = n(2590),
                f = n(36256);

            function d(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT,
                    n = (0, o.e7)([a.default], (function() {
                        return a.default.getId()
                    })),
                    r = (0, o.e7)([l.Z], (function() {
                        return l.Z.supports(f.AN.DISABLE_VIDEO) && l.Z.isVideoEnabled()
                    })),
                    i = (0, o.e7)([l.Z], (function() {
                        return l.Z.isLocalVideoDisabled(n, t)
                    }), [n, t]),
                    u = function(e) {
                        var r = e ? s.ZUi.DISABLED : s.ZUi.MANUAL_ENABLED;
                        c.Z.setDisableLocalVideo(n, r, t)
                    },
                    d = null == e || e === n,
                    p = d && (r || i);
                return [p, i, u]
            }
            var p = n(284278),
                y = n(470856),
                b = n(473708);

            function O(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function v(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        v(e, t, n[t])
                    }))
                }
                return e
            }

            function m(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function g(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            c = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return O(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return O(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function E(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT,
                    n = g(d(e, t), 3),
                    c = n[0],
                    a = n[1],
                    l = n[2],
                    s = (0, o.e7)([u.ZP], (function() {
                        return u.ZP.disableHideSelfStreamAndVideoConfirmationAlert
                    })),
                    O = function() {
                        if (s || a) return l(!a);
                        (0, i.openModal)((function(e) {
                            return (0, r.jsx)(p.Z, m(h({}, e), {
                                type: y.K.VIDEO,
                                onConfirm: function() {
                                    return l(!a)
                                }
                            }))
                        }))
                    };
                return c ? (0, r.jsx)(i.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: b.Z.Messages.SHOW_SELF_VIDEO,
                    checked: !a,
                    action: O
                }) : null
            }
        },
        289150: (e, t, n) => {
            n.d(t, {
                Z: () => v
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(882723),
                u = n(504001),
                c = n(664625),
                a = n(525077),
                l = n(473708),
                s = n(965126),
                f = n.n(s);

            function d(e, t, n, r, o, i, u) {
                try {
                    var c = e[i](u),
                        a = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function p(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            d(i, r, o, u, c, "next", e)
                        }

                        function c(e) {
                            d(i, r, o, u, c, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function b(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var O = function(e, t) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0,
                                    o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = t.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, c])
                    }
                }
            };

            function v(e) {
                var t = (0, i.useModalContext)(),
                    s = (0, o.e7)([a.Z], (function() {
                        return a.Z.isVideoEnabled()
                    })),
                    d = (0, o.e7)([c.default], (function() {
                        return c.default.getId() === e
                    })),
                    v = (0, u.Z)();
                return s && !v || !d ? null : (0, r.jsx)(i.MenuItem, {
                    id: "change-video-background",
                    label: (0, r.jsx)("div", {
                        className: f().item,
                        children: s ? l.Z.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : l.Z.Messages.CAMERA_PREVIEW_MENU_ITEM
                    }),
                    action: function() {
                        (0, i.openModalLazy)(p((function() {
                            var e, t;
                            return O(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(47405), n.e(79249), n.e(17586), n.e(43586), n.e(73679), n.e(10675), n.e(96043), n.e(71402), n.e(61012), n.e(21977)]).then(n.bind(n, 763361))];
                                    case 1:
                                        e = o.sent(), t = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(t, b(function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        r = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                    }))));
                                                    r.forEach((function(t) {
                                                        y(e, t, n[t])
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
                            contextKey: t
                        })
                    }
                })
            }
        },
        855483: (e, t, n) => {
            n.d(t, {
                H2: () => r,
                eK: () => o,
                JM: () => u,
                VI: () => c
            });

            function r() {
                return {
                    textValue: "",
                    richValue: [{
                        type: "line",
                        children: [{
                            text: ""
                        }]
                    }]
                }
            }

            function o(e) {
                return {
                    textValue: e,
                    richValue: u(e)
                }
            }
            var i = Object.freeze([Object.freeze({
                type: "line",
                children: Object.freeze([Object.freeze({
                    text: ""
                })])
            })]);

            function u(e) {
                return "" !== e ? e.split("\n").map((function(e) {
                    return {
                        type: "line",
                        children: [{
                            text: e
                        }]
                    }
                })) : i
            }

            function c(e) {
                switch (e.type) {
                    case "userMention":
                        return {
                            type: "userMention", userId: e.userId
                        };
                    case "channelMention":
                        return {
                            type: "channelMention", channelId: e.channelId
                        };
                    case "staticRouteLink":
                        return {
                            type: "staticRouteLink", channelId: e.channelId
                        };
                    case "soundboard":
                        return {
                            type: "soundboard", soundId: e.soundId
                        };
                    case "roleMention":
                        return {
                            type: "roleMention", roleId: e.roleId
                        };
                    case "textMention":
                        return {
                            type: "textMention", text: e.name
                        };
                    case "emoji":
                        return {
                            type: "emoji", name: e.emoji.name, surrogate: e.emoji.surrogate
                        };
                    case "customEmoji":
                        return {
                            type: "customEmoji", emojiId: e.emoji.emojiId, name: e.emoji.name, animated: e.emoji.animated
                        };
                    case "testInlineVoid":
                        throw new Error("Unable to convert test types")
                }
                return null
            }
        },
        112897: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(785893),
                o = (n(667294), n(882723)),
                i = n(968449),
                u = n(763933),
                c = n(691797);

            function a(e) {
                var t = e.id,
                    n = e.label,
                    a = e.onSuccess,
                    l = e.shiftId,
                    s = e.showIconFirst,
                    f = i.Sb.useSetting();
                if (__OVERLAY__ || !f || !c.wS) return null;
                var d = "devmode-copy-id-".concat(t);
                return (0, r.jsx)(o.MenuItem, {
                    id: d,
                    label: n,
                    action: function(e) {
                        var n = null != l && e.shiftKey ? l : t;
                        (0, c.JG)(n);
                        null == a || a()
                    },
                    icon: u.Z,
                    showIconFirst: s
                }, d)
            }
        },
        90003: (e, t, n) => {
            n.d(t, {
                z: () => s,
                q: () => f
            });
            var r = n(785893),
                o = (n(667294), n(882723));

            function i(e, t, n, r, o, i, u) {
                try {
                    var c = e[i](u),
                        a = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function u(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var u = e.apply(t, n);

                        function c(e) {
                            i(u, r, o, c, a, "next", e)
                        }

                        function a(e) {
                            i(u, r, o, c, a, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        c(e, t, n[t])
                    }))
                }
                return e
            }
            var l = function(e, t) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = t.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, c])
                    }
                }
            };

            function s(e, t, i) {
                (0, o.openModalLazy)(u((function() {
                    var o, u;
                    return l(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(47405), n.e(43586), n.e(27499), n.e(6331)]).then(n.bind(n, 736576))];
                            case 1:
                                o = c.sent(), u = o.default;
                                return [2, function(n) {
                                    return (0, r.jsx)(u, a({
                                        guildId: e,
                                        userId: t,
                                        anaylticsLocations: i
                                    }, n))
                                }]
                        }
                    }))
                })))
            }

            function f(e, t, i) {
                (0, o.openModalLazy)(u((function() {
                    var o, u;
                    return l(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(47405), n.e(43586), n.e(27499), n.e(76141)]).then(n.bind(n, 916782))];
                            case 1:
                                o = c.sent(), u = o.default;
                                return [2, function(n) {
                                    return (0, r.jsx)(u, a({
                                        guildId: e,
                                        userId: t,
                                        anaylticsLocations: i
                                    }, n))
                                }]
                        }
                    }))
                })))
            }
        },
        872017: (e, t, n) => {
            n.d(t, {
                AB: () => c,
                ZP: () => s,
                s5: () => f
            });
            var r = n(202351),
                o = n(21372),
                i = n(473903),
                u = n(309945);

            function c(e) {
                var t = (0, r.e7)([i.default], (function() {
                    return i.default.getCurrentUser()
                }));
                return s(null == t ? void 0 : t.id, e)
            }

            function a(e, t, n) {
                return null != t && null != e ? n.getMember(t, e) : null
            }

            function l(e) {
                var t;
                return [null !== (t = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== t ? t : null, (0, u.b)(e)]
            }

            function s(e, t) {
                return l((0, r.e7)([o.ZP], (function() {
                    return a(e, t, o.ZP)
                }), [t, e]))
            }

            function f(e, t) {
                return l(a(e, t, o.ZP))
            }
        },
        822003: (e, t, n) => {
            n.d(t, {
                gm: () => p,
                BG: () => y,
                aY: () => r,
                dW: () => b,
                jQ: () => o,
                sE: () => O
            });
            var r, o, i = n(667294),
                u = n(153686),
                c = n(396043),
                a = n(664625),
                l = n(652591),
                s = n(2590);

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e, t, n) {
                var r, o = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            f(e, t, n[t])
                        }))
                    }
                    return e
                }({}, t, (0, c.hH)(null !== (r = t.guild_id) && void 0 !== r ? r : n));
                l.default.track(e, o)
            }

            function p(e) {
                return i.useCallback((function(t) {
                    ! function(e) {
                        var t = {
                            guild_id: e,
                            location: u.Z.MEMBER_SAFETY_PAGE
                        };
                        d(s.rMx.MOD_DASH_SEARCH_MEMBERS, t)
                    }(e)
                }), [e])
            }

            function y(e) {
                return i.useCallback((function(t) {
                    ! function(e, t) {
                        var n = {
                            selected_role_count: t.size,
                            guild_id: e,
                            location: u.Z.MEMBER_SAFETY_PAGE
                        };
                        d(s.rMx.MOD_DASH_FILTER_ROLES, n)
                    }(e, t)
                }), [e])
            }! function(e) {
                e.UNUSUAL_DM_ACTIVITY = "unusual_dm_activity";
                e.COMMUNICATION_DISABLED = "communication_disabled"
            }(r || (r = {}));

            function b(e) {
                return i.useCallback((function(t) {
                    ! function(e, t) {
                        var n = {
                            flag_type: t,
                            guild_id: e,
                            location: u.Z.MEMBER_SAFETY_PAGE
                        };
                        d(s.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, n)
                    }(e, t)
                }), [e])
            }! function(e) {
                e.BAN = "ban";
                e.KICK = "kick";
                e.MUTE = "mute";
                e.TIMEOUT = "timeout";
                e.ADD_ROLE = "add_role";
                e.REMOVE_ROLE = "remove_role";
                e.COPY_ID = "copy_id";
                e.CHANGE_NICKNAME = "change_nickname"
            }(o || (o = {}));

            function O(e, t) {
                var n = t.location,
                    r = t.targetUserId,
                    o = t.targets;
                return i.useCallback((function(t) {
                    var i = {
                        action_type: t,
                        mod_user_id: a.default.getId(),
                        guild_id: e,
                        location: n,
                        target_user_id: null != r ? r : void 0,
                        targets: null != o ? o : void 0
                    };
                    d(s.rMx.MODERATION_ACTION, i)
                }), [e, n, r, o])
            }
        },
        15970: (e, t, n) => {
            n.d(t, {
                b: () => o
            });
            var r = n(2590);

            function o(e, t, n, o) {
                var i = null != n ? n : t;
                return null != i && e.can(r.Plq.CREATE_INSTANT_INVITE, i) || null != t && null != t.vanityURLCode || null != (null == o ? void 0 : o.invite_code)
            }
        },
        869854: (e, t, n) => {
            n.d(t, {
                B0: () => l,
                kz: () => s,
                yr: () => f,
                OG: () => d
            });
            var r = n(281110),
                o = n(744564),
                i = n(2590);

            function u(e, t, n, r, o, i, u) {
                try {
                    var c = e[i](u),
                        a = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function c(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function c(e) {
                            u(i, r, o, c, a, "next", e)
                        }

                        function a(e) {
                            u(i, r, o, c, a, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }
            var a = function(e, t) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = t.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, c])
                    }
                }
            };

            function l(e, t, n, r) {
                o.Z.dispatch({
                    type: "QUEUE_INTERACTION_COMPONENT_STATE",
                    messageId: e,
                    nonce: t,
                    state: n,
                    indices: r
                })
            }

            function s(e, t) {
                var n = t.data,
                    r = t.messageId,
                    i = t.onCreate,
                    u = t.onSuccess,
                    c = t.onFailure;
                o.Z.dispatch({
                    type: "INTERACTION_QUEUE",
                    data: n,
                    nonce: e,
                    messageId: r,
                    onCreate: i,
                    onSuccess: u,
                    onFailure: c
                })
            }

            function f(e, t, n) {
                o.Z.dispatch({
                    type: "INTERACTION_FAILURE",
                    nonce: e,
                    errorMessage: n,
                    errorCode: t
                })
            }

            function d(e, t) {
                return p.apply(this, arguments)
            }

            function p() {
                return (p = c((function(e, t) {
                    var n, u;
                    return a(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return [4, r.ZP.get({
                                    url: i.ANM.MESSAGE_INTERACTION_DATA(e, t),
                                    oldFormErrors: !0
                                })];
                            case 1:
                                if ((n = c.sent()).ok) {
                                    u = n.body;
                                    o.Z.dispatch({
                                        type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",
                                        channelId: e,
                                        messageId: t,
                                        interactionData: u
                                    })
                                }
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        873934: (e, t, n) => {
            n.d(t, {
                Z: () => S
            });
            var r = n(202351),
                o = n(744564),
                i = n(73904),
                u = n(61209),
                c = n(457896);

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return f(e)
            }

            function d(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function p(e, t) {
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function y(e, t) {
                y = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return y(e, t)
            }

            function b(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            c = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var O = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function v(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = f(e);
                    if (t) {
                        var o = f(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }
            var h = {},
                m = {},
                g = {},
                E = void 0,
                I = void 0;

            function j(e) {
                delete h[e];
                var t = g[e];
                null != t && delete m[t];
                delete g[e]
            }
            var w = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && y(e, t)
                }(n, e);
                var t = v(n);

                function n() {
                    l(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getInteraction = function(e) {
                    var t = m[e.id];
                    return null != t ? h[t] : null
                };
                r.getMessageInteractionStates = function() {
                    var e = {},
                        t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var o, i = Object.entries(h)[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                            var u = b(o.value, 2),
                                c = u[0],
                                a = u[1],
                                l = g[c];
                            null != l && (e[l] = a.state)
                        }
                    } catch (e) {
                        n = !0;
                        r = e
                    } finally {
                        try {
                            t || null == i.return || i.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                    return e
                };
                r.canQueueInteraction = function(e, t) {
                    var n = m[e];
                    return !(null != n && null != h[n] && h[n].state !== c.F.FAILED || null != h[t] && h[t].state !== c.F.FAILED)
                };
                r.getIFrameModalApplicationId = function() {
                    return I
                };
                r.getIFrameModalKey = function() {
                    return E
                };
                r.__getLocalVars = function() {
                    return {
                        interactions: h,
                        messageIdToNonce: m,
                        nonceToMessageId: g,
                        iFrameModalKey: E,
                        iFrameModalApplicationId: I
                    }
                };
                return n
            }(r.ZP.Store);
            w.displayName = "InteractionStore";
            const S = new w(o.Z, {
                LOGOUT: function() {
                    h = {};
                    m = {};
                    g = {}
                },
                INTERACTION_QUEUE: function(e) {
                    var t = e.nonce,
                        n = e.messageId,
                        r = e.data,
                        o = e.onCreate,
                        i = e.onCancel,
                        u = e.onSuccess,
                        a = e.onFailure;
                    if (null != n) {
                        m[n] = t;
                        g[t] = n
                    }
                    h[t] = {
                        state: c.F.QUEUED,
                        data: r,
                        onCreate: o,
                        onCancel: i,
                        onSuccess: u,
                        onFailure: a
                    }
                },
                INTERACTION_CREATE: function(e) {
                    var t, n = e.nonce,
                        r = e.interactionId;
                    if (null == n) return !1;
                    var o = h[n];
                    if (null == o || o.state !== c.F.QUEUED) return !1;
                    o.state = c.F.CREATED;
                    null === (t = o.onCreate) || void 0 === t || t.call(o, r)
                },
                INTERACTION_SUCCESS: function(e) {
                    var t, n = e.nonce;
                    if (null == n) return !1;
                    var r = h[n];
                    if (null == r) return !1;
                    null === (t = r.onSuccess) || void 0 === t || t.call(r);
                    j(n)
                },
                INTERACTION_FAILURE: function(e) {
                    var t, n = e.nonce,
                        r = e.errorCode,
                        o = e.errorMessage;
                    if (null == n) return !1;
                    var u = h[n];
                    if (null == u) return !1;
                    null === (t = u.onFailure) || void 0 === t || t.call(u, r, o);
                    u.data.interactionType === i.B8.APPLICATION_COMMAND ? j(n) : h[n] = d(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                s(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, u), {
                        state: c.F.FAILED,
                        errorCode: r,
                        errorMessage: o
                    })
                },
                MESSAGE_CREATE: function(e) {
                    var t = e.message;
                    if (null == t.nonce) return !1;
                    var n, r = h[t.nonce];
                    if (null == r) return !1;
                    null === (n = r.onSuccess) || void 0 === n || n.call(r);
                    j(t.nonce)
                },
                CHANNEL_SELECT: function(e) {
                    var t = e.channelId;
                    if (null == u.Z.getChannel(t)) return !1;
                    var n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, a = Object.entries(h)[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                            var l = b(i.value, 2),
                                s = l[0];
                            l[1].state === c.F.FAILED && j(s)
                        }
                    } catch (e) {
                        r = !0;
                        o = e
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                },
                INTERACTION_IFRAME_MODAL_CREATE: function(e) {
                    var t = e.application;
                    I = t.id
                },
                INTERACTION_IFRAME_MODAL_CLOSE: function() {
                    E = void 0;
                    I = void 0
                },
                INTERACTION_IFRAME_MODAL_KEY_CREATE: function(e) {
                    var t = e.modalKey;
                    E = t
                }
            })
        },
        457896: (e, t, n) => {
            n.d(t, {
                F: () => r
            });
            var r;
            ! function(e) {
                e[e.QUEUED = 0] = "QUEUED";
                e[e.CREATED = 1] = "CREATED";
                e[e.FAILED = 2] = "FAILED"
            }(r || (r = {}))
        },
        166076: (e, t, n) => {
            n.d(t, {
                ow: () => v,
                tM: () => g,
                Sg: () => S,
                rQ: () => I,
                t$: () => A,
                $s: () => _
            });
            var r = n(842227),
                o = n(281110),
                i = n(720419),
                u = n(73904),
                c = n(671293),
                a = n(664625),
                l = n(869854),
                s = n(873934),
                f = n(457896),
                d = n(2590);

            function p(e, t, n, r, o, i, u) {
                try {
                    var c = e[i](u),
                        a = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        y(e, t, n[t])
                    }))
                }
                return e
            }
            var O = function(e, t) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = t.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, c])
                    }
                }
            };

            function v(e) {
                return null == e || "" === e || Number.isNaN(e) ? Date.now() : r.default.extractTimestamp(e) + 9e5
            }
            var h, m, g = (m = (h = function(e) {
                var t, n, i, f, p, y, v, h, m, g, I;
                return O(this, (function(O) {
                    switch (O.label) {
                        case 0:
                            t = e.componentType, n = e.messageId, i = e.messageFlags, f = e.customId, p = e.indices, y = e.applicationId, v = e.channelId, h = e.guildId, m = e.localState;
                            g = r.default.fromTimestamp(Date.now());
                            return s.Z.canQueueInteraction(n, g) ? [4, c.Z.unarchiveThreadIfNecessary(v)] : [2];
                        case 1:
                            O.sent();
                            (0, l.kz)(g, {
                                messageId: n,
                                data: {
                                    interactionType: u.B8.MESSAGE_COMPONENT,
                                    customId: f,
                                    indices: p
                                },
                                onFailure: function(e, t) {
                                    return j(v, e, t)
                                }
                            });
                            null != m && (0, l.B0)(n, g, m, p);
                            I = {
                                type: u.B8.MESSAGE_COMPONENT,
                                nonce: g,
                                guild_id: h,
                                channel_id: v,
                                message_flags: i,
                                message_id: n,
                                application_id: y,
                                session_id: a.default.getSessionId(),
                                data: b({
                                    component_type: t,
                                    custom_id: f
                                }, E(m))
                            };
                            return [4, o.ZP.post({
                                url: d.ANM.INTERACTIONS,
                                body: I,
                                timeout: 3e3
                            }, (function(e) {
                                return S(g, e)
                            }))];
                        case 2:
                            O.sent();
                            return [2]
                    }
                }))
            }, function() {
                var e = this,
                    t = arguments;
                return new Promise((function(n, r) {
                    var o = h.apply(e, t);

                    function i(e) {
                        p(o, n, r, i, u, "next", e)
                    }

                    function u(e) {
                        p(o, n, r, i, u, "throw", e)
                    }
                    i(void 0)
                }))
            }), function(e) {
                return m.apply(this, arguments)
            });

            function E(e) {
                if (null == e) return null;
                if (e.type === u.re.STRING_SELECT || e.type === u.re.INPUT_TEXT) return e;
                var t = e.selectedOptions.map((function(e) {
                    return e.value
                }));
                return {
                    type: e.type,
                    values: t
                }
            }
            var I, j = function(e, t, n) {
                    null == n && null != t && i.Z.sendClydeError(e, t)
                },
                w = function(e) {
                    for (var t in e) {
                        var n = e[t];
                        if (null != n) {
                            if ("_errors" === t && Array.isArray(n)) {
                                var r, o;
                                return null !== (o = null === (r = n[0]) || void 0 === r ? void 0 : r.message) && void 0 !== o ? o : null
                            }
                            if ("object" == typeof n) return w(n)
                        }
                    }
                    return null
                },
                S = function(e, t) {
                    if (!t.ok) {
                        if (!t.hasErr) {
                            if (t.status >= 400 && t.status < 500 && t.body) {
                                var n = null;
                                if (t.body.code === d.evJ.INVALID_FORM_BODY && t.body.errors) {
                                    n = w(t.body.errors);
                                    (0, l.yr)(e, void 0, n);
                                    return
                                }(0, l.yr)(e, void 0, t.body.message);
                                return
                            }
                            var r;
                            (0, l.yr)(e, null === (r = t.body) || void 0 === r ? void 0 : r.code);
                            return
                        }(0, l.yr)(e)
                    }
                };
            ! function(e) {
                e[e.SENDING = 0] = "SENDING";
                e[e.CREATED = 1] = "CREATED";
                e[e.FAILED = 2] = "FAILED";
                e[e.TIMED_OUT = 3] = "TIMED_OUT"
            }(I || (I = {}));
            var A = function(e, t) {
                var n, o = null == t ? void 0 : t.state,
                    i = e.state === d.yb.SENT && v(e.id) < Date.now(),
                    c = e.state === d.yb.SEND_FAILED && (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : r.default.extractTimestamp(n) + 3e3) < Date.now(),
                    a = (null == t ? void 0 : t.data.interactionType) === u.B8.APPLICATION_COMMAND,
                    l = e.isCommandType();
                return a && o === f.F.QUEUED || l && e.state === d.yb.SENDING && null != t ? I.SENDING : a && o === f.F.CREATED || e.hasFlag(d.iLy.LOADING) && !i ? I.CREATED : null != e.interaction && e.hasFlag(d.iLy.LOADING) && i || null != e.interaction && !e.hasFlag(d.iLy.LOADING) && c ? I.TIMED_OUT : l && e.state === d.yb.SEND_FAILED ? I.FAILED : void 0
            };

            function _(e) {
                for (var t = e.options; 1 === (null == t ? void 0 : t.length) && (t[0].type === u.jw.SUB_COMMAND_GROUP || t[0].type === u.jw.SUB_COMMAND);) t = t[0].options;
                var n = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var i, c = (null != t ? t : [])[Symbol.iterator](); !(n = (i = c.next()).done); n = !0) {
                        if (i.value.type === u.jw.ATTACHMENT) return !1
                    }
                } catch (e) {
                    r = !0;
                    o = e
                } finally {
                    try {
                        n || null == c.return || c.return()
                    } finally {
                        if (r) throw o
                    }
                }
                return !0
            }
        },
        499219: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(202351),
                o = n(61209),
                i = n(715107);

            function u() {
                return (0, r.e7)([i.Z, o.Z], (function() {
                    var e = i.Z.getVoiceChannelId();
                    if (null != e) {
                        var t = o.Z.getChannel(e);
                        if (null == t ? void 0 : t.isGuildStageVoice()) return t
                    }
                    return null
                }))
            }
        },
        699050: (e, t, n) => {
            n.d(t, {
                Z: () => I
            });
            var r = n(785893),
                o = n(667294),
                i = n(441143),
                u = n.n(i),
                c = n(202351),
                a = n(882723),
                l = n(219217),
                s = n(272200),
                f = n(248046),
                d = n(698847),
                p = n(242922),
                y = n(76131),
                b = n.n(y);
            const O = function() {
                return (0, r.jsx)("div", {
                    className: b().loadingWrapper,
                    children: (0, r.jsx)(a.Dots, {
                        dotRadius: 4,
                        themed: !0
                    })
                })
            };
            var v = n(567403),
                h = n(127624),
                m = n(473708),
                g = n(98526),
                E = n.n(g);
            const I = function(e) {
                var t = e.commandType,
                    n = e.commandTargetId,
                    i = e.channel,
                    y = e.guildId,
                    b = e.onShow,
                    g = e.location,
                    I = o.useRef(!1),
                    j = o.useRef(0),
                    w = (0, c.e7)([v.Z], (function() {
                        return v.Z.getGuild(null != y ? y : i.guild_id)
                    })),
                    S = (0, l.o)(i, {
                        commandType: t
                    }, {
                        location: g,
                        placeholderCount: h.Mn,
                        limit: h.lr
                    }),
                    A = S.hasMoreAfter,
                    _ = S.scrollDown,
                    C = S.sectionDescriptors,
                    P = S.commands,
                    T = S.placeholders,
                    M = o.useMemo((function() {
                        var e = P.concat(T),
                            t = {};
                        C.forEach((function(e) {
                            t[e.id] = e
                        }));
                        return {
                            visibleCommands: e,
                            sections: t
                        }
                    }), [P, C, T]),
                    D = M.visibleCommands,
                    N = M.sections,
                    Z = o.useMemo((function() {
                        return (0, f.nT)(i, t, D.length, null == w ? void 0 : w.applicationCommandCounts)
                    }), [i, t, null == w ? void 0 : w.applicationCommandCounts, D.length]);
                o.useEffect((function() {
                    if (Z !== I.current) {
                        Z && (null == b || b());
                        I.current = Z
                    }
                }), [Z, b]);
                o.useEffect((function() {
                    R(j.current)
                }), [D]);
                var R = o.useCallback((function(e) {
                        A && e + 500 > 34 * D.length - 40 && _();
                        j.current = e
                    }), [A, _, D]),
                    x = o.useCallback((function(e) {
                        if (e.inputType === s.iw.PLACEHOLDER) return (0, r.jsx)(a.MenuItem, {
                            id: "menu-command-".concat(e.id),
                            render: function() {
                                return (0, r.jsx)(O, {})
                            }
                        }, "menu-command-".concat(e.id));
                        u()(null != i, "menu item should not show if channel is null");
                        var t = N[e.applicationId],
                            o = null != t ? (0, p.ky)(t) : void 0;
                        return (0, r.jsx)(a.MenuItem, {
                            id: e.id,
                            label: e.displayName,
                            showIconFirst: !0,
                            icon: function() {
                                return null != o ? (0, r.jsx)(o, {
                                    channel: i,
                                    section: t,
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
                                        guild: w
                                    },
                                    commandTargetId: n
                                })
                            }
                        }, e.id)
                    }), [i, w, n, N]);
                return Z && (0, r.jsx)(a.MenuItem, {
                    id: "apps",
                    label: m.Z.Messages.APPS,
                    onChildrenScroll: R,
                    childRowHeight: 34,
                    listClassName: E().list,
                    disabled: 0 === D.length,
                    children: D.map(x)
                })
            }
        },
        827991: (e, t, n) => {
            n.d(t, {
                q: () => O,
                Z: () => v
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(882723),
                u = n(224134),
                c = n(61209),
                a = n(682776),
                l = n(715107),
                s = n(930948),
                f = n(749565),
                d = n(2590),
                p = n(473708);

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function b(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            c = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return y(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function O(e, t) {
                var n = e.id,
                    r = "@".concat(f.ZP.getUserTag(e, {
                        decoration: "never"
                    })),
                    o = "<@".concat(n, ">");
                s.S.dispatchToLastSubscribed(d.CkL.INSERT_TEXT, {
                    plainText: r,
                    rawText: o
                });
                null != t && u.Z.startTyping(t)
            }

            function v(e, t, n) {
                var u = b((0, o.Wu)([l.Z, c.Z, a.Z], (function() {
                        var e = l.Z.getChannelId(t),
                            n = c.Z.getChannel(e);
                        return [e, null != n && (n.isMultiUserDM() || a.Z.can(d.Plq.SEND_MESSAGES, n))]
                    }), [t]), 2),
                    s = u[0],
                    f = u[1],
                    y = n === d.IlC.POPOUT;
                return !f || y ? null : (0, r.jsx)(i.MenuItem, {
                    id: "mention",
                    label: p.Z.Messages.MENTION,
                    action: function() {
                        O(e, s)
                    }
                })
            }
        },
        504001: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(202351),
                o = n(525077),
                i = n(630926);

            function u() {
                return (0, r.e7)([o.Z], (function() {
                    return (0, i.Z)(o.Z)
                }))
            }
        },
        318313: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function c(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function a(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    a = e.height,
                    l = void 0 === a ? 24 : a,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    p = c(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", u(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(p)), {
                    width: n,
                    height: l,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: f,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        className: d,
                        d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                    })
                }))
            }
        },
        457997: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function c(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function a(e) {
                var t = e.width,
                    n = void 0 === t ? 20 : t,
                    a = e.height,
                    l = void 0 === a ? 20 : a,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    p = c(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", u(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(p)), {
                    width: n,
                    height: l,
                    viewBox: "0 0 20 20",
                    children: (0, r.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, r.jsx)("path", {
                            className: d,
                            fill: f,
                            d: "M9.99999 1.66675C5.39699 1.66675 1.66666 5.39708 1.66666 10.0001C1.66666 14.6031 5.39699 18.3334 9.99999 18.3334C14.603 18.3334 18.3333 14.6031 18.3333 10.0001C18.3333 5.39708 14.603 1.66675 9.99999 1.66675ZM9.99999 4.66675C10.3685 4.66675 10.6667 4.96493 10.6667 5.33342V9.61475L13.8021 11.4272C14.1211 11.6108 14.2252 12.0145 14.0416 12.3335C13.8581 12.6525 13.4544 12.7567 13.1354 12.5731L9.73937 10.6148C9.71333 10.6043 9.68989 10.5874 9.66646 10.5731C9.46724 10.4572 9.33312 10.2463 9.33312 10.0002V5.3335C9.33312 4.965 9.6315 4.66675 9.99999 4.66675Z"
                        })
                    })
                }))
            }
        },
        763933: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function c(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function a(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    a = e.height,
                    l = void 0 === a ? 24 : a,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    p = c(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", u(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(p)), {
                    width: n,
                    height: l,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: d,
                        fill: f,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                    })
                }))
            }
        }
    }
]);