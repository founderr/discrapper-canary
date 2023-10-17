"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [40706], {
        619584: (e, t, n) => {
            n.d(t, {
                Q: () => u,
                T: () => a
            });
            var r = n(202351),
                o = n(61209),
                i = n(563135),
                s = n(269300),
                l = n(3155),
                c = n(2590);

            function u(e, t) {
                return i.ZP.canEveryoneRole(c.Plq.VIEW_CHANNEL, e) || t === l.WX.EXTERNAL
            }

            function a(e, t) {
                return (0, r.e7)([o.Z, s.ZP], (function() {
                    var n = o.Z.getChannel(e),
                        r = s.ZP.getGuildScheduledEvent(t);
                    return u(n, null == r ? void 0 : r.entity_type)
                }), [e, t])
            }
        },
        951687: (e, t, n) => {
            n.d(t, {
                ku: () => m,
                S0: () => w,
                Lh: () => L,
                ZP: () => S
            });
            var r = n(785893),
                o = n(667294),
                i = n(513328),
                s = n(304548),
                l = n(414392),
                c = n(621329),
                u = n(316388),
                a = n(154451),
                f = n(859592),
                p = n(3155),
                b = n(473708),
                O = n(326507),
                y = n.n(O);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function g(e, t, n) {
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
                        g(e, t, n[t])
                    }))
                }
                return e
            }

            function j(e, t) {
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

            function v(e, t) {
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

            function C(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            s = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function E(e) {
                var t = e.isJoined,
                    n = e.canJoin,
                    r = e.isVoiceChannel;
                return n ? t ? b.Z.Messages.GO_TO_CHANNEL : r ? b.Z.Messages.GUILD_EVENT_JOIN : b.Z.Messages.STAGE_CHANNEL_JOIN_BUTTON : b.Z.Messages.CHANNEL_LOCKED_SHORT
            }

            function P(e) {
                var t = e.text,
                    n = e.disabled,
                    o = e.onJoinClick;
                return (0, r.jsx)(s.Button, {
                    className: y().button,
                    size: s.Button.Sizes.SMALL,
                    onClick: o,
                    color: s.Button.Colors.GREEN,
                    disabled: n,
                    children: t
                })
            }

            function m(e) {
                var t = e.onInviteClick,
                    n = e.canInvite,
                    l = e.isChannelPublic,
                    a = new i.V7,
                    p = C(o.useState(!1), 2),
                    O = p[0],
                    d = p[1];
                o.useEffect((function() {
                    return function() {
                        a.stop()
                    }
                }), []);
                var g = function(e) {
                    null != t && t(e);
                    d(!0);
                    a.start(1e3, (function() {
                        return d(!1)
                    }))
                };
                return null == t ? null : (0, r.jsx)(s.Tooltip, {
                    text: k(n, l),
                    position: "top",
                    tooltipClassName: y().tooltips,
                    "aria-label": b.Z.Messages.SHARE_LINK,
                    children: function(e) {
                        return n && l ? (0, r.jsxs)(s.Button, j(h({}, e), {
                            className: y().button,
                            innerClassName: y().innerButton,
                            color: s.Button.Colors.PRIMARY,
                            size: s.Button.Sizes.SMALL,
                            onClick: t,
                            children: [(0, r.jsx)(f.Z, {
                                width: 16,
                                height: 16
                            }), b.Z.Messages.SHARE]
                        })) : (0, r.jsxs)(s.Button, j(h({}, e), {
                            className: y().button,
                            innerClassName: y().innerButton,
                            color: s.Button.Colors.PRIMARY,
                            size: s.Button.Sizes.SMALL,
                            disabled: O,
                            look: O ? s.Button.Looks.OUTLINED : s.Button.Looks.FILLED,
                            onClick: g,
                            children: [O ? (0, r.jsx)(c.Z, {
                                width: 16,
                                height: 16
                            }) : (0, r.jsx)(u.Z, {
                                width: 16,
                                height: 16
                            }), O ? b.Z.Messages.COPIED : b.Z.Messages.SHARE]
                        }))
                    }
                })
            }

            function w(e) {
                var t = e.isUserRsvped,
                    n = e.isUserLurking,
                    o = e.onRsvpClick,
                    i = v(e, ["isUserRsvped", "isUserLurking", "onRsvpClick"]),
                    u = t && !n;
                return (0, r.jsxs)(s.Button, j(h({}, i), {
                    className: y().button,
                    innerClassName: y().innerButton,
                    size: s.Button.Sizes.SMALL,
                    onClick: o,
                    color: s.Button.Colors.PRIMARY,
                    look: u ? s.Button.Looks.OUTLINED : s.Button.Looks.FILLED,
                    disabled: n,
                    children: [u ? (0, r.jsx)(c.Z, {
                        width: 16,
                        height: 16
                    }) : (0, r.jsx)(l.Z, {
                        width: 16,
                        height: 16
                    }), b.Z.Messages.INDICATE_RSVP]
                }))
            }

            function L(e) {
                return (0, r.jsx)(s.Tooltip, {
                    text: b.Z.Messages.GUILD_MEMBER_REQUIRED_FOR_EVENT,
                    position: "top",
                    tooltipClassName: y().tooltips,
                    "aria-label": b.Z.Messages.SHARE_LINK,
                    children: function(t) {
                        return (0, r.jsx)(w, h({}, t, e))
                    }
                })
            }
            var N = function(e) {
                    return null == e || e
                },
                k = function(e, t) {
                    return N(e) ? b.Z.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE : N(t) ? b.Z.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_WITHOUT_PERMISSION : b.Z.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_PRIVATE_CHANNEL
                };

            function S(e) {
                var t = e.isActive,
                    n = e.isUserLurking,
                    o = e.rsvped,
                    i = e.canInvite,
                    l = e.isChannelPublic,
                    c = void 0 === l || l,
                    u = e.entityType,
                    f = e.onContextMenu,
                    O = e.onJoinClick,
                    d = e.onRsvpClick,
                    g = e.onStartClick,
                    v = e.onInviteClick,
                    C = e.onEndClick,
                    N = e.isJoined,
                    k = void 0 !== N && N,
                    S = void 0 !== O;
                return (0, r.jsxs)("div", {
                    className: y().container,
                    children: [null != f ? (0, r.jsx)(s.Tooltip, {
                        text: b.Z.Messages.MORE,
                        position: "top",
                        "aria-label": b.Z.Messages.EDIT,
                        children: function(e) {
                            return (0, r.jsx)(s.Clickable, j(h({}, e), {
                                onClick: f,
                                className: y().iconButton,
                                children: (0, r.jsx)(a.Z, {
                                    width: 20,
                                    height: 20,
                                    className: y().icon
                                })
                            }))
                        }
                    }) : null, (0, r.jsx)(m, {
                        onInviteClick: v,
                        canInvite: i,
                        isChannelPublic: c
                    }), t && u !== p.WX.EXTERNAL ? (0, r.jsx)(P, {
                        text: E({
                            isJoined: k,
                            canJoin: S,
                            isVoiceChannel: u === p.WX.VOICE
                        }),
                        disabled: !S,
                        onJoinClick: O
                    }) : null, n && !t && (0, r.jsx)(L, {
                        isUserRsvped: o,
                        isUserLurking: n
                    }), !n && !t && null != d && (0, r.jsx)(w, {
                        isUserRsvped: o,
                        isUserLurking: n,
                        onRsvpClick: d
                    }), t || null == g ? null : (0, r.jsx)(s.Button, {
                        className: y().button,
                        innerClassName: y().innerButton,
                        size: s.Button.Sizes.SMALL,
                        onClick: g,
                        color: s.Button.Colors.GREEN,
                        children: b.Z.Messages.START
                    }), t && null != C ? (0, r.jsx)(s.Button, {
                        className: y().button,
                        innerClassName: y().innerButton,
                        size: s.Button.Sizes.SMALL,
                        onClick: C,
                        color: s.Button.Colors.PRIMARY,
                        children: b.Z.Messages.END_EVENT
                    }) : null]
                })
            }
        },
        26601: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                o = (n(667294), n(304548)),
                i = n(154451),
                s = n(951687),
                l = n(473708),
                c = n(379818),
                u = n.n(c);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e, t) {
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

            function p(e) {
                var t = e.isActive,
                    n = e.isUserLurking,
                    c = e.rsvped,
                    p = e.onContextMenu,
                    b = e.onRsvpClick,
                    O = e.onGoToGuildClick,
                    y = e.isDetailsView,
                    d = void 0 !== y && y,
                    g = e.isMember,
                    h = e.onJoinGuildClick,
                    j = e.guildName,
                    v = e.onInviteClick,
                    C = e.canInvite,
                    E = e.isChannelPublic;
                return (0, r.jsxs)("div", {
                    className: u().container,
                    children: [null != p ? (0, r.jsx)(o.Tooltip, {
                        text: l.Z.Messages.MORE,
                        position: "top",
                        "aria-label": l.Z.Messages.EDIT,
                        children: function(e) {
                            return (0, r.jsx)(o.Clickable, f(function(e) {
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
                            }({}, e), {
                                onClick: p,
                                className: u().iconButton,
                                children: (0, r.jsx)(i.Z, {
                                    width: 20,
                                    height: 20,
                                    className: u().icon
                                })
                            }))
                        }
                    }) : null, g && (0, r.jsx)(s.ku, {
                        onInviteClick: v,
                        canInvite: C,
                        isChannelPublic: E
                    }), n && !t && (0, r.jsx)(s.Lh, {
                        isUserRsvped: c,
                        isUserLurking: n
                    }), g && !n && !t && null != b && (0, r.jsx)(s.S0, {
                        isUserRsvped: c,
                        isUserLurking: n,
                        onRsvpClick: b
                    }), !g || n || d && !t ? null : (0, r.jsx)(o.Button, {
                        className: u().button,
                        innerClassName: u().innerButton,
                        size: o.Button.Sizes.SMALL,
                        onClick: O,
                        color: o.Button.Colors.GREEN,
                        children: l.Z.Messages.HUB_EVENTS_GO_TO_GUILD
                    }), g ? null : (0, r.jsx)(o.Button, {
                        className: u().button,
                        innerClassName: u().innerButton,
                        size: o.Button.Sizes.SMALL,
                        onClick: h,
                        color: o.Button.Colors.GREEN,
                        children: l.Z.Messages.HUB_EVENTS_JOIN_GUILD.format({
                            guildName: j
                        })
                    })]
                })
            }
        },
        859592: (e, t, n) => {
            n.d(t, {
                Z: () => b
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(795308),
                s = n(633878);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e, t) {
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

            function u(e, t) {
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

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e, t) {
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
            const b = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 32 : t,
                    o = e.height,
                    i = void 0 === o ? 32 : o,
                    l = e.color,
                    c = void 0 === l ? "currentColor" : l,
                    u = p(e, ["width", "height", "color"]);
                return (0, r.jsx)("svg", f(function(e) {
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
                }({}, (0, s.Z)(u)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.4866 7.91647L7 6.54308L12 2L17 6.54308L15.5134 7.91647L13.0513 5.71805L13.0513 16H10.9487V5.71805L8.4866 7.91647ZM16.9997 9H19C20.1044 9 20.9997 9.89532 20.9997 10.9997V19C20.9997 20.1044 20.1043 20.9997 19 20.9997H4.99998C3.8956 20.9997 3.00031 20.1044 3.00031 19V10.9997C3.00031 9.8953 3.89562 9 4.99998 9H7.00031C7.00031 9 6.99969 9.44813 6.99969 10.0003C6.99969 10.5525 7.00031 10.9997 7.00031 10.9997H4.99998V19H19V10.9997H16.9997L17.0003 10.0003L16.9997 9Z",
                        fill: c
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    a = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    b = e.colorClass,
                    O = void 0 === b ? "" : b,
                    y = u(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            l(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, s.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M13 16V5.414l3.293 3.293a1 1 0 1 0 1.414-1.414l-5-5-.007-.007a.997.997 0 0 0-1.4 0l-.008.008-5 4.999a1 1 0 0 0 1.415 1.414L11 5.414V16a1 1 0 1 0 2 0Zm-9-1a1 1 0 0 1 1-1h2a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-2a1 1 0 1 0 0 2h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4Z",
                        clipRule: "evenodd",
                        className: O
                    })
                }))
            }))
        }
    }
]);