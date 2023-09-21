(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [32790], {
        173654: (t, i, o) => {
            t.exports = o.p + "72a8b168ad2c7eea7b2559b5690c7695.svg"
        },
        5084: (t, i, o) => {
            t.exports = o.p + "e1349377226366f95f85ab9eac4586d3.svg"
        },
        950175: (t, i, o) => {
            t.exports = o.p + "b1d4c5e276e3aaa8ec41e6014dd572b2.svg"
        },
        248978: (t, i, o) => {
            t.exports = o.p + "7d883ba72b5dbc0229f5d1980205ee34.svg"
        },
        622507: (t, i, o) => {
            t.exports = o.p + "e843c51c0eec3801b70cae5c45ad343f.svg"
        },
        131687: (t, i, o) => {
            t.exports = o.p + "c6ce0010471b65c0faeda6c53ab297bd.svg"
        },
        12668: (t, i, o) => {
            t.exports = o.p + "70275fe3104cf1d3388586ad8ffd478e.svg"
        },
        740097: (t, i, o) => {
            t.exports = o.p + "81084ff5a27b6e6ff487e479c37d1660.svg"
        },
        477101: (t, i, o) => {
            "use strict";
            o.d(i, {
                te: () => r,
                nv: () => s,
                Os: () => n,
                xh: () => x,
                E9: () => y,
                sz: () => d,
                A4: () => p,
                jx: () => c
            });
            var e = o(744564),
                a = o(226810);

            function r(t, i) {
                var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.Gr;
                e.Z.dispatch({
                    type: "LAYOUT_CREATE",
                    layoutId: t,
                    widgets: i,
                    defaultResolution: o
                })
            }

            function s(t, i, o) {
                e.Z.dispatch({
                    type: "LAYOUT_UPDATE_WIDGET",
                    widgetId: t,
                    anchor: i,
                    size: o
                })
            }

            function n(t) {
                e.Z.dispatch({
                    type: "LAYOUT_SET_TOP_WIDGET",
                    widgetId: t
                })
            }

            function x(t) {
                e.Z.dispatch({
                    type: "LAYOUT_SET_PINNED",
                    widgetId: t
                })
            }

            function y(t) {
                e.Z.dispatch({
                    type: "LAYOUT_DELETE_WIDGET",
                    widgetId: t
                })
            }

            function d(t) {
                e.Z.dispatch({
                    type: "LAYOUT_DELETE_ALL_WIDGETS",
                    layoutId: t
                })
            }

            function p(t) {
                c([t])
            }

            function c(t) {
                e.Z.dispatch({
                    type: "LAYOUT_CREATE_WIDGETS",
                    widgetConfigs: t
                })
            }
        },
        993754: (t, i, o) => {
            "use strict";
            o.d(i, {
                Z: () => E
            });
            var e = o(468811),
                a = o.n(e),
                r = o(744564),
                s = o(597967),
                n = o(117112),
                x = o(901654),
                y = o(66121),
                d = o(226810),
                p = o(477101),
                c = o(2590);

            function l(t, i) {
                (null == i || i > t.length) && (i = t.length);
                for (var o = 0, e = new Array(i); o < i; o++) e[o] = t[o];
                return e
            }

            function u(t, i, o) {
                i in t ? Object.defineProperty(t, i, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[i] = o;
                return t
            }

            function k(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var o = null != arguments[i] ? arguments[i] : {},
                        e = Object.keys(o);
                    "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(o).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(o, t).enumerable
                    }))));
                    e.forEach((function(i) {
                        u(t, i, o[i])
                    }))
                }
                return t
            }

            function m(t, i) {
                i = null != i ? i : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : function(t, i) {
                    var o = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var e = Object.getOwnPropertySymbols(t);
                        i && (e = e.filter((function(i) {
                            return Object.getOwnPropertyDescriptor(t, i).enumerable
                        })));
                        o.push.apply(o, e)
                    }
                    return o
                }(Object(i)).forEach((function(o) {
                    Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(i, o))
                }));
                return t
            }

            function f(t, i) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, i) {
                    var o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != o) {
                        var e, a, r = [],
                            s = !0,
                            n = !1;
                        try {
                            for (o = o.call(t); !(s = (e = o.next()).done); s = !0) {
                                r.push(e.value);
                                if (i && r.length === i) break
                            }
                        } catch (t) {
                            n = !0;
                            a = t
                        } finally {
                            try {
                                s || null == o.return || o.return()
                            } finally {
                                if (n) throw a
                            }
                        }
                        return r
                    }
                }(t, i) || function(t, i) {
                    if (!t) return;
                    if ("string" == typeof t) return l(t, i);
                    var o = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === o && t.constructor && (o = t.constructor.name);
                    if ("Map" === o || "Set" === o) return Array.from(o);
                    if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return l(t, i)
                }(t, i) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var _ = {
                track: function(t) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (!__OVERLAY__) throw new Error("OverlayActionCreators.track: Must be called within Overlay context");
                    (0, s.Q)(t, i, o)
                },
                overlayReady: function(t) {
                    r.Z.dispatch({
                        type: "OVERLAY_READY",
                        pid: t
                    })
                },
                overlayMounted: function(t) {
                    r.Z.dispatch({
                        type: "OVERLAY_MOUNTED",
                        nudge: t
                    })
                },
                setFocusedPID: function(t) {
                    r.Z.dispatch({
                        type: "OVERLAY_FOCUSED",
                        pid: t
                    })
                },
                setInputLocked: function(t, i) {
                    r.Z.dispatch({
                        type: "OVERLAY_SET_INPUT_LOCKED",
                        locked: t,
                        pid: i
                    })
                },
                setUILocked: function(t, i) {
                    r.Z.dispatch({
                        type: "OVERLAY_SET_UI_LOCKED",
                        locked: t,
                        pid: i
                    })
                },
                setLocked: function(t, i) {
                    r.Z.dispatch({
                        type: "OVERLAY_SET_INPUT_LOCKED",
                        locked: t,
                        pid: i
                    });
                    r.Z.dispatch({
                        type: "OVERLAY_SET_UI_LOCKED",
                        locked: t,
                        pid: i
                    })
                },
                setInstanceLocked: function(t) {
                    if (!__OVERLAY__) throw new Error("OverlayActionCreators.setInstanceLocked: Must be called within Overlay context");
                    _.setLocked(t, (0, d.QF)())
                },
                setEnabled: function(t) {
                    r.Z.dispatch({
                        type: "OVERLAY_SET_ENABLED",
                        enabled: t
                    })
                },
                setMethod: function(t) {
                    r.Z.dispatch({
                        type: "OVERLAY_SET_METHOD",
                        method: t
                    })
                },
                selectCall: function(t) {
                    r.Z.dispatch({
                        type: "OVERLAY_SELECT_CALL",
                        callId: t
                    })
                },
                setDisplayNameMode: function(t) {
                    r.Z.dispatch({
                        type: "OVERLAY_SET_DISPLAY_NAME_MODE",
                        mode: t
                    })
                },
                setDisplayUserMode: function(t) {
                    r.Z.dispatch({
                        type: "OVERLAY_SET_DISPLAY_USER_MODE",
                        mode: t
                    })
                },
                setAvatarSizeMode: function(t) {
                    r.Z.dispatch({
                        type: "OVERLAY_SET_AVATAR_SIZE_MODE",
                        mode: t
                    })
                },
                setNotificationPositionMode: function(t) {
                    r.Z.dispatch({
                        type: "OVERLAY_SET_NOTIFICATION_POSITION_MODE",
                        mode: t
                    })
                },
                setTextChatNotificationMode: function(t) {
                    r.Z.dispatch({
                        type: "OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE",
                        mode: t
                    })
                },
                callPrivateChannel: function(t, i) {
                    r.Z.dispatch({
                        type: "OVERLAY_CALL_PRIVATE_CHANNEL",
                        channelId: t,
                        ring: i
                    })
                },
                setTextWidgetOpacity: function(t) {
                    r.Z.dispatch({
                        type: "OVERLAY_SET_TEXT_WIDGET_OPACITY",
                        opacity: t
                    })
                },
                disableExternalLinkAlert: function() {
                    r.Z.dispatch({
                        type: "OVERLAY_DISABLE_EXTERNAL_LINK_ALERT"
                    })
                },
                startSession: function() {
                    if (!__OVERLAY__) throw new Error("Attempting to start an overlay session outside of the overlay context");
                    r.Z.dispatch({
                        type: "OVERLAY_START_SESSION"
                    })
                },
                activateRegion: function(t) {
                    r.Z.dispatch({
                        type: "OVERLAY_ACTIVATE_REGION",
                        region: t
                    })
                },
                deactivateAllRegions: function() {
                    r.Z.dispatch({
                        type: "OVERLAY_DEACTIVATE_ALL_REGIONS"
                    })
                },
                setPreviewInGameMode: function(t) {
                    r.Z.dispatch({
                        type: "OVERLAY_SET_PREVIEW_IN_GAME_MODE",
                        isPreviewingInGame: t
                    })
                },
                updateNotificationStatus: function(t) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c._1z.DISMISSED;
                    r.Z.dispatch({
                        type: "OVERLAY_UPDATE_NOTIFICATION_STATUS",
                        notificationId: t,
                        status: i
                    })
                },
                setPinChat: function(t) {
                    var i = d.qU,
                        o = n.Z.getWidgetsForLayout(i),
                        e = n.Z.getWidgetConfig(c.Odu.GUILDS),
                        r = n.Z.getWidgetConfig(c.Odu.TEXT),
                        s = n.Z.getWidgetConfig(c.Odu.GUILDS_TEXT);
                    if (0 !== o.length && null != e && null != r && null != s) {
                        var l = x.Z.windowSize(),
                            u = {
                                width: 0,
                                height: 0
                            },
                            _ = {
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0
                            },
                            E = {
                                width: 312,
                                height: 0
                            },
                            h = {
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0
                            },
                            b = {
                                width: 0,
                                height: 0
                            };
                        o.forEach((function(t) {
                            var i = t.type,
                                o = t.id,
                                e = t.anchor,
                                a = t.size;
                            switch (i) {
                                case c.Odu.TEXT:
                                    u = (0, y.w_)(a, l);
                                    (0, p.E9)(o);
                                    break;
                                case c.Odu.GUILDS:
                                    _ = (0, y.vS)(e, a, l);
                                    E = (0, y.w_)(a, l);
                                    (0, p.E9)(o);
                                    break;
                                case c.Odu.GUILDS_TEXT:
                                    h = (0, y.vS)(e, a, l);
                                    b = (0, y.w_)(a, l);
                                    (0, p.E9)(o)
                            }
                        }));
                        if (t) {
                            var I = "auto" === b.width ? s.minSize.width : b.width;
                            I -= e.minSize.width;
                            var O = f((0, y.o4)(h, m(k({}, b), {
                                    width: e.minSize.width
                                }), l), 2),
                                v = O[0],
                                w = O[1],
                                g = f((0, y.uq)(h, m(k({}, b), {
                                    width: I
                                }), l, {
                                    x: 10,
                                    y: 10
                                }), 2),
                                S = g[0],
                                T = g[1],
                                A = n.Z.getWidgetDefaultSettings(c.Odu.TEXT);
                            if (null == A) throw new Error("OverlayActionCreators.setPinChat: No config for TEXT exists");
                            (0, p.A4)(m(k({}, A), {
                                type: c.Odu.TEXT,
                                id: a().v4(),
                                size: T,
                                anchor: S,
                                layoutId: i
                            }));
                            var C = n.Z.getWidgetDefaultSettings(c.Odu.GUILDS);
                            if (null == C) throw new Error("OverlayActionCreators.setPinChat: No config for GUILDS exists");
                            (0, p.A4)(m(k({}, C), {
                                type: c.Odu.GUILDS,
                                id: a().v4(),
                                size: w,
                                anchor: v,
                                layoutId: i
                            }))
                        } else {
                            var N = "auto" === u.width ? r.minSize.width : u.width;
                            N += e.minSize.width;
                            var P = f((0, y.o4)(_, {
                                    height: E.height,
                                    width: N
                                }, l), 2),
                                L = P[0],
                                D = P[1],
                                R = n.Z.getWidgetDefaultSettings(c.Odu.GUILDS_TEXT);
                            if (null == R) throw new Error("OverlayActionCreators.setPinChat: No config for GUILDS_TEXT exists");
                            (0, p.A4)(m(k({}, R), {
                                type: c.Odu.GUILDS_TEXT,
                                id: a().v4(),
                                layoutId: i,
                                anchor: L,
                                size: D
                            }))
                        }
                    }
                },
                resetDefaultLayout: function(t) {
                    if (null != n.Z.getLayout(t)) {
                        (0, p.sz)(t);
                        (0, p.jx)(n.Z.getDefaultLayout(t))
                    }
                }
            };
            const E = _
        },
        311425: (t, i, o) => {
            "use strict";
            o.d(i, {
                Z: () => a,
                i: () => r
            });
            var e = (0, o(260561).B)({
                kind: "user",
                id: "2023-06_custom_call_sounds",
                label: "Custom Call Sounds",
                defaultConfig: {
                    enabled: !1,
                    showVoiceChannelCoachmark: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0,
                        showVoiceChannelCoachmark: !1
                    }
                }, {
                    id: 2,
                    label: "Enabled w/VC Coachmark",
                    config: {
                        enabled: !0,
                        showVoiceChannelCoachmark: !0
                    }
                }]
            });
            const a = e;
            var r = function() {
                return e.useExperiment({
                    location: "bba779_1"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        249159: (t, i, o) => {
            "use strict";
            o.d(i, {
                Z: () => a
            });
            var e = o(667294);

            function a(t, i) {
                var o = e.useRef(t);
                e.useEffect((function() {
                    var t = function(t) {
                        null == o.current || o.current.contains(t.target) || i()
                    };
                    document.addEventListener("mousedown", t);
                    return function() {
                        document.removeEventListener("mousedown", t)
                    }
                }), [o, i]);
                return o
            }
        },
        255875: (t, i, o) => {
            "use strict";
            o.d(i, {
                E: () => l,
                h: () => u
            });
            var e = o(785893),
                a = o(667294),
                r = o(652411),
                s = o(318715),
                n = o(316878),
                x = o(2590);

            function y(t, i, o) {
                i in t ? Object.defineProperty(t, i, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[i] = o;
                return t
            }

            function d(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var o = null != arguments[i] ? arguments[i] : {},
                        e = Object.keys(o);
                    "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(o).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(o, t).enumerable
                    }))));
                    e.forEach((function(i) {
                        y(t, i, o[i])
                    }))
                }
                return t
            }

            function p(t, i) {
                i = null != i ? i : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : function(t, i) {
                    var o = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var e = Object.getOwnPropertySymbols(t);
                        i && (e = e.filter((function(i) {
                            return Object.getOwnPropertyDescriptor(t, i).enumerable
                        })));
                        o.push.apply(o, e)
                    }
                    return o
                }(Object(i)).forEach((function(o) {
                    Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(i, o))
                }));
                return t
            }
            var c = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: function() {},
                    createConfettiAt: function() {},
                    createMultipleConfetti: function() {
                        return []
                    },
                    createMultipleConfettiAt: function() {
                        return []
                    },
                    addClickListener: function() {
                        return x.dG4
                    },
                    removeClickListener: x.dG4
                },
                l = a.createContext(c);

            function u(t) {
                var i = t.children,
                    o = t.confettiCanvas,
                    x = t.spriteCanvas,
                    y = t.baseConfig,
                    u = t.addClickListener,
                    k = t.removeClickListener,
                    m = (0, r.uR)(o, x),
                    f = (0, s.ZP)([n.Z], (function() {
                        return n.Z.useReducedMotion
                    })),
                    _ = a.useMemo((function() {
                        return f ? c : {
                            confettiCanvas: o,
                            cannon: m,
                            createConfetti: function(t, i) {
                                return m.createConfetti(d({}, y, t), i)
                            },
                            createConfettiAt: function(t, i, o, e) {
                                return m.createConfetti(d(p(d({}, y), {
                                    position: {
                                        type: "static",
                                        value: {
                                            x: t,
                                            y: i
                                        }
                                    }
                                }), o), e)
                            },
                            createMultipleConfetti: function(t) {
                                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                                    o = arguments.length > 2 ? arguments[2] : void 0;
                                return m.createMultipleConfetti(d({}, y, t), i, o)
                            },
                            createMultipleConfettiAt: function(t, i, o) {
                                var e = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                                    a = arguments.length > 4 ? arguments[4] : void 0;
                                return m.createMultipleConfetti(d(p(d({}, y), {
                                    position: {
                                        type: "static",
                                        value: {
                                            x: t,
                                            y: i
                                        }
                                    }
                                }), o), e, a)
                            },
                            addClickListener: u,
                            removeClickListener: k
                        }
                    }), [u, y, m, o, f, k]);
                return (0, e.jsx)(l.Provider, {
                    value: _,
                    children: i
                })
            }
        },
        4958: (t, i, o) => {
            "use strict";
            o.d(i, {
                vv: () => r,
                Br: () => s,
                CA: () => n,
                Ko: () => x,
                We: () => y,
                rq: () => d
            });
            var e = o(652411),
                a = o(5084),
                r = o.n(a)(),
                s = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
                n = [o(173654), r, o(950175), o(248978), o(622507), o(131687), o(12668), {
                    src: o(740097),
                    colorize: !1
                }],
                x = 28,
                y = {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: 30,
                            y: -80
                        },
                        maxValue: {
                            x: -30,
                            y: -180
                        }
                    },
                    rotation: {
                        type: "linear-random",
                        minValue: 0,
                        maxValue: 360,
                        minAddValue: -25,
                        maxAddValue: 25
                    },
                    size: {
                        type: "static-random",
                        minValue: 14,
                        maxValue: x
                    }
                },
                d = new e.qA
        },
        627342: (t, i, o) => {
            "use strict";
            o.d(i, {
                B: () => p,
                Z: () => c
            });
            var e = o(785893),
                a = o(667294),
                r = o(318715),
                s = o(674482),
                n = o(202223),
                x = o(113865);

            function y(t, i) {
                (null == i || i > t.length) && (i = t.length);
                for (var o = 0, e = new Array(i); o < i; o++) e[o] = t[o];
                return e
            }

            function d(t, i) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, i) {
                    var o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != o) {
                        var e, a, r = [],
                            s = !0,
                            n = !1;
                        try {
                            for (o = o.call(t); !(s = (e = o.next()).done); s = !0) {
                                r.push(e.value);
                                if (i && r.length === i) break
                            }
                        } catch (t) {
                            n = !0;
                            a = t
                        } finally {
                            try {
                                s || null == o.return || o.return()
                            } finally {
                                if (n) throw a
                            }
                        }
                        return r
                    }
                }(t, i) || function(t, i) {
                    if (!t) return;
                    if ("string" == typeof t) return y(t, i);
                    var o = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === o && t.constructor && (o = t.constructor.name);
                    if ("Map" === o || "Set" === o) return Array.from(o);
                    if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return y(t, i)
                }(t, i) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function p(t, i) {
                var o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    e = (0, r.ZP)([s.Z], (function() {
                        return !!__OVERLAY__ && s.Z.isInstanceUILocked()
                    })),
                    y = d((0,
                        x.c)(t, i, e), 2),
                    p = y[0],
                    c = y[1],
                    l = !o && null != p && !n.O.has(p);
                a.useEffect((function() {
                    return function() {
                        l && c()
                    }
                }), [l, c]);
                return [p, c]
            }

            function c(t) {
                var i = t.contentTypes,
                    o = t.children,
                    a = d(p(i, t.groupName, t.bypassAutoDismiss), 2),
                    r = a[0],
                    s = a[1];
                return (0, e.jsx)(e.Fragment, {
                    children: o({
                        visibleContent: r,
                        markAsDismissed: s
                    })
                })
            }
        },
        398344: (t, i, o) => {
            "use strict";
            o.d(i, {
                K: () => k,
                Z: () => O
            });
            var e = o(202351),
                a = o(744564),
                r = o(536392),
                s = o(162308),
                n = o(203600);

            function x(t, i) {
                if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function")
            }

            function y(t, i) {
                for (var o = 0; o < i.length; o++) {
                    var e = i[o];
                    e.enumerable = e.enumerable || !1;
                    e.configurable = !0;
                    "value" in e && (e.writable = !0);
                    Object.defineProperty(t, e.key, e)
                }
            }

            function d(t, i, o) {
                i in t ? Object.defineProperty(t, i, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[i] = o;
                return t
            }

            function p(t) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return p(t)
            }

            function c(t, i) {
                i = null != i ? i : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : function(t, i) {
                    var o = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var e = Object.getOwnPropertySymbols(t);
                        i && (e = e.filter((function(i) {
                            return Object.getOwnPropertyDescriptor(t, i).enumerable
                        })));
                        o.push.apply(o, e)
                    }
                    return o
                }(Object(i)).forEach((function(o) {
                    Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(i, o))
                }));
                return t
            }

            function l(t, i) {
                return !i || "object" !== m(i) && "function" != typeof i ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : i
            }

            function u(t, i) {
                u = Object.setPrototypeOf || function(t, i) {
                    t.__proto__ = i;
                    return t
                };
                return u(t, i)
            }
            var k, m = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function f(t) {
                var i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var o, e = p(t);
                    if (i) {
                        var a = p(this).constructor;
                        o = Reflect.construct(e, arguments, a)
                    } else o = e.apply(this, arguments);
                    return l(this, o)
                }
            }! function(t) {
                t.FILE_UPLOAD = "file_upload";
                t.STICKER_PICKER = "sticker_picker";
                t.EMOJI_PICKER = "emoji_picker";
                t.BOOSTING_FLOW = "boosting_flow"
            }(k || (k = {}));
            var _ = {
                isPersistentCoachmarkCollapsed: !1,
                hasFlowStartEventBeenEmitted: {},
                canPlayWowMoment: !1,
                isPersistentHelperHidden: !0,
                isFetchingWowMomentMedia: !1,
                wowMomentWumpusMediaUrl: null,
                wowMomentHelperMediaUrl: null,
                navigatedFromHelper: !1,
                tutorialExpirationTime: null
            };

            function E() {
                _ = {
                    isPersistentCoachmarkCollapsed: !1,
                    hasFlowStartEventBeenEmitted: {},
                    canPlayWowMoment: !1,
                    isPersistentHelperHidden: !0,
                    isFetchingWowMomentMedia: !1,
                    wowMomentWumpusMediaUrl: null,
                    wowMomentHelperMediaUrl: null,
                    navigatedFromHelper: !1,
                    tutorialExpirationTime: null
                }
            }

            function h() {
                var t = new Date;
                t.setDate(t.getDate() + 14);
                _.tutorialExpirationTime = t.getTime()
            }
            var b, I = function(t) {
                ! function(t, i) {
                    if ("function" != typeof i && null !== i) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(i && i.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    i && u(t, i)
                }(o, t);
                var i = f(o);

                function o() {
                    x(this, o);
                    return i.apply(this, arguments)
                }
                var e = o.prototype;
                e.initialize = function(t) {
                    null != t && (_ = t);
                    _.isPersistentHelperHidden = !1;
                    _.canPlayWowMoment = !1;
                    _.isFetchingWowMomentMedia = !1;
                    _.wowMomentWumpusMediaUrl = null;
                    _.wowMomentHelperMediaUrl = null
                };
                e.getState = function() {
                    return _
                };
                e.hasFlowStartEventBeenEmitted = function(t) {
                    null == _.hasFlowStartEventBeenEmitted[t] && (_.hasFlowStartEventBeenEmitted[t] = !1);
                    return _.hasFlowStartEventBeenEmitted[t]
                };
                e.__getLocalVars = function() {
                    return {
                        state: _
                    }
                };
                ! function(t, i, o) {
                    i && y(t.prototype, i);
                    o && y(t, o)
                }(o, [{
                    key: "isPersistentCoachmarkCollapsed",
                    get: function() {
                        return _.isPersistentCoachmarkCollapsed
                    }
                }, {
                    key: "canPlayWowMoment",
                    get: function() {
                        return _.canPlayWowMoment
                    }
                }, {
                    key: "isPersistentHelperHidden",
                    get: function() {
                        return _.isPersistentHelperHidden
                    }
                }, {
                    key: "isFetchingWowMomentMedia",
                    get: function() {
                        return _.isFetchingWowMomentMedia
                    }
                }, {
                    key: "wowMomentWumpusMedia",
                    get: function() {
                        return _.wowMomentWumpusMediaUrl
                    }
                }, {
                    key: "wowMomentHelperMedia",
                    get: function() {
                        return _.wowMomentHelperMediaUrl
                    }
                }, {
                    key: "navigatedFromHelper",
                    get: function() {
                        return _.navigatedFromHelper
                    }
                }, {
                    key: "tutorialExpirationTime",
                    get: function() {
                        return _.tutorialExpirationTime
                    }
                }]);
                return o
            }(e.ZP.PersistedStore);
            I.displayName = "PremiumTutorialStore";
            I.persistKey = "PremiumTutorialStore";
            I.migrations = [function(t) {
                return c(function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var o = null != arguments[i] ? arguments[i] : {},
                            e = Object.keys(o);
                        "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(o).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(o, t).enumerable
                        }))));
                        e.forEach((function(i) {
                            d(t, i, o[i])
                        }))
                    }
                    return t
                }({}, t), {
                    hasFlowStartEventBeenEmitted: null !== (b = t.hasFlowStartEventBeenEmitted) && void 0 !== b ? b : {}
                })
            }];
            const O = new I(a.Z, {
                PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE: function() {
                    _.isPersistentCoachmarkCollapsed = !_.isPersistentCoachmarkCollapsed
                },
                UPDATE_HAS_FLOW_START_EVENT_BEEN_EMITTED: function(t) {
                    var i = t.event,
                        o = t.value;
                    _.hasFlowStartEventBeenEmitted[i] = o
                },
                LOGOUT: function() {
                    E()
                },
                RESET_PREMIUM_TUTORIAL_STORE: E,
                PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT: function(t) {
                    var i = t.value;
                    _.canPlayWowMoment = i
                },
                PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN: function(t) {
                    var i = t.value;
                    _.isPersistentHelperHidden = i
                },
                PREMIUM_TUTORIAL_IS_FETCHING_WOW_MOMENT_MEDIA: function(t) {
                    var i = t.value;
                    _.isFetchingWowMomentMedia = i
                },
                PREMIUM_TUTORIAL_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function(t) {
                    var i = t.wumpusMedia,
                        o = t.helperMedia;
                    _.wowMomentWumpusMediaUrl = i;
                    _.wowMomentHelperMediaUrl = o;
                    _.isFetchingWowMomentMedia = !1
                },
                PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER: function(t) {
                    var i = t.value;
                    _.navigatedFromHelper = i
                },
                PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function(t) {
                    var i = t.subscription;
                    s.Z.getCurrentConfig({
                        location: "5f2710_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled && null != i.items.find((function(t) {
                        return n.UD.has(t.plan_id)
                    })) && h()
                },
                GIFT_CODE_REDEEM_SUCCESS: function(t) {
                    var i = t.entitlement;
                    s.Z.getCurrentConfig({
                        location: "5f2710_2"
                    }, {
                        autoTrackExposure: !1
                    }).enabled && (null == i ? void 0 : i.sku_id) === n.Si.TIER_2 && null == r.Z.getPremiumSubscription(!1) && null == _.tutorialExpirationTime && h()
                }
            })
        },
        156620: (t, i, o) => {
            "use strict";
            o.d(i, {
                Z: () => e
            });
            const e = (0, o(260561).B)({
                kind: "user",
                id: "2023-02_nitroduction_experience",
                label: "Nitroduction Experience",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "One month trial users recieve the Nitroduction experience",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        162308: (t, i, o) => {
            "use strict";
            o.d(i, {
                Z: () => e
            });
            const e = (0, o(260561).B)({
                kind: "user",
                id: "2023-08_premium_tutorial_for_all",
                label: "Premium Tutorial Experience For All",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "All net new users (exclude trial) receive premium tutorial experience",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        305082: (t, i, o) => {
            "use strict";
            o.d(i, {
                dA: () => h,
                z2: () => O,
                eM: () => g
            });
            var e = o(667294),
                a = o(202351),
                r = o(418705),
                s = o(673679),
                n = o(896490),
                x = o(473419),
                y = o(473903),
                d = o(536392),
                p = o(116094),
                c = o(666870),
                l = o(398344),
                u = o(156620),
                k = o(162308),
                m = o(203600),
                f = 18e5,
                _ = function() {
                    var t = (0, a.e7)([d.Z], (function() {
                            return d.Z.getPremiumTypeSubscription()
                        })),
                        i = (0, n.wE)(r.z$.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, c.s6)(t) && !i
                },
                E = function() {
                    var t = (0, c._O)(),
                        i = (0, n.wE)(r.z$.PREMIUM_TUTORIAL_EXPERIENCE),
                        o = (0, a.e7)([y.default], (function() {
                            return y.default.getCurrentUser()
                        })),
                        x = (0, p.M5)(o, m.p9.TIER_2),
                        l = (0, a.e7)([d.Z], (function() {
                            return d.Z.hasFetchedPreviousPremiumTypeSubscription()
                        })),
                        u = (0, a.e7)([d.Z], (function() {
                            return d.Z.getPreviousPremiumTypeSubscription()
                        })),
                        k = !t && x;
                    e.useEffect((function() {
                        !k || l || i || (0, s.ou)()
                    }), [k, l, i]);
                    return k && l && null == u && !i
                };

            function h(t) {
                var i, o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    e = _() && o,
                    r = u.Z.useExperiment({
                        location: t
                    }, {
                        autoTrackExposure: e,
                        disable: !e
                    }),
                    s = r.enabled,
                    n = (0, a.e7)([l.Z], (function() {
                        return l.Z.tutorialExpirationTime
                    })),
                    x = (new Date).getTime(),
                    y = null != n && n > x,
                    p = (0, a.e7)([d.Z], (function() {
                        var t, o;
                        return null !== (i = null === (t = d.Z.getPremiumSubscription()) || void 0 === t || null === (o = t.createdAt) || void 0 === o ? void 0 : o.getTime()) && void 0 !== i ? i : 0
                    })),
                    c = x - p < f,
                    m = E() && o,
                    h = k.Z.useExperiment({
                        location: t
                    }, {
                        autoTrackExposure: m && c,
                        disable: !m
                    }).enabled && y;
                return s || h
            }
            var b = function() {
                    var t = d.Z.getPremiumTypeSubscription(),
                        i = (0, n.un)(r.z$.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, c.s6)(t) && !i
                },
                I = function() {
                    var t = (0, c.se)(),
                        i = (0, n.un)(r.z$.PREMIUM_TUTORIAL_EXPERIENCE),
                        o = y.default.getCurrentUser(),
                        e = (0, p.M5)(o, m.p9.TIER_2),
                        a = d.Z.hasFetchedPreviousPremiumTypeSubscription(),
                        x = d.Z.getPreviousPremiumTypeSubscription();
                    a || !e || i || (0, s.ou)();
                    return !i && (!t && e && a && null == x)
                },
                O = function(t) {
                    var i, o, e, a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        r = b() && a,
                        s = u.Z.getCurrentConfig({
                            location: t
                        }, {
                            disable: !r,
                            autoTrackExposure: r
                        }),
                        n = s.enabled,
                        x = (new Date).getTime(),
                        y = l.Z.tutorialExpirationTime,
                        p = null != y && y > x,
                        c = null !== (e = null === (i = d.Z.getPremiumSubscription()) || void 0 === i || null === (o = i.createdAt) || void 0 === o ? void 0 : o.getTime()) && void 0 !== e ? e : 0,
                        m = x - c < f,
                        _ = I() && a,
                        E = k.Z.getCurrentConfig({
                            location: t
                        }, {
                            disable: !_,
                            autoTrackExposure: _ && m
                        }).enabled && p;
                    return n || E
                };
            var v = [];

            function w() {
                return m.N$.filter((function(t) {
                    return (0, n.un)(t)
                }))
            }

            function g() {
                return t = w, i = v, o = h("useMemoizedValueSyncedWithDismissibleContents"), r = (0, a.e7)([x.Z], (function() {
                    var t;
                    return null === (t = x.Z.settings.userContent) || void 0 === t ? void 0 : t.dismissedContents
                })), e.useMemo((function() {
                    return o ? t() : i
                }), [o, i, t, r]);
                var t, i, o, r
            }
        },
        604343: (t, i, o) => {
            "use strict";
            o.d(i, {
                Z: () => s
            });
            var e = o(664625),
                a = o(61209),
                r = o(407561);

            function s() {
                var t = r.Z.getVoiceStateForSession(e.default.getId(), e.default.getSessionId()),
                    i = null == t ? void 0 : t.channelId;
                return a.Z.getChannel(i)
            }
        },
        815378: (t, i, o) => {
            "use strict";
            o.d(i, {
                pI: () => S,
                Nq: () => A,
                ly: () => C,
                GN: () => N,
                M2: () => L,
                sR: () => R,
                aC: () => M,
                SZ: () => U,
                tt: () => Z
            });
            var e = o(318715),
                a = o(418705),
                r = o(311425),
                s = o(604343),
                n = o(968449),
                x = o(917019),
                y = o(473419),
                d = o(933878),
                p = o(382060),
                c = o(682776),
                l = o(473903),
                u = o(652591),
                k = o(116094),
                m = o(749565),
                f = o(336177),
                _ = o(656907),
                E = o(911980),
                h = o(182306),
                b = o(550352),
                I = o(460214),
                O = o(2590);

            function v(t, i, o, e, a, r, s) {
                try {
                    var n = t[r](s),
                        x = n.value
                } catch (t) {
                    o(t);
                    return
                }
                n.done ? i(x) : Promise.resolve(x).then(e, a)
            }

            function w(t) {
                return function() {
                    var i = this,
                        o = arguments;
                    return new Promise((function(e, a) {
                        var r = t.apply(i, o);

                        function s(t) {
                            v(r, e, a, s, n, "next", t)
                        }

                        function n(t) {
                            v(r, e, a, s, n, "throw", t)
                        }
                        s(void 0)
                    }))
                }
            }
            var g = function(t, i) {
                var o, e, a, r, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                        next: n(0),
                        throw: n(1),
                        return: n(2)
                    },
                    "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                        return this
                    }), r;

                function n(r) {
                    return function(n) {
                        return function(r) {
                            if (o) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (o = 1, e && (a = 2 & r[0] ? e.return : r[0] ? e.throw || ((a = e.return) && a.call(e), 0) : e.next) && !(a = a.call(e, r[1])).done) return a;
                                (e = 0, a) && (r = [2 & r[0], a.value]);
                                switch (r[0]) {
                                    case 0:
                                    case 1:
                                        a = r;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: r[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        e = r[1];
                                        r = [0];
                                        continue;
                                    case 7:
                                        r = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = s.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                                            s.label = r[1];
                                            break
                                        }
                                        if (6 === r[0] && s.label < a[1]) {
                                            s.label = a[1];
                                            a = r;
                                            break
                                        }
                                        if (a && s.label < a[2]) {
                                            s.label = a[2];
                                            s.ops.push(r);
                                            break
                                        }
                                        a[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                r = i.call(t, s)
                            } catch (t) {
                                r = [6, t];
                                e = 0
                            } finally {
                                o = a = 0
                            }
                            if (5 & r[0]) throw r[1];
                            return {
                                value: r[0] ? r[1] : void 0,
                                done: !0
                            }
                        }([r, n])
                    }
                }
            };

            function S() {
                var t, i = n.kU.getSetting();
                return null !== (t = null == i ? void 0 : i.volume) && void 0 !== t ? t : 100
            }

            function T(t, i) {
                return null == (null == i ? void 0 : i.guild_id) || c.Z.can(O.Plq.USE_EXTERNAL_SOUNDS, i) || t.guildId === I.X8 || t.guildId === (null == i ? void 0 : i.guild_id)
            }

            function A(t, i, o) {
                var e = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                return (k.ZP.canUseSoundboardEverywhere(t) || i.guildId === (null == o ? void 0 : o.guild_id) || i.guildId === I.X8) && T(i, o) && (!e || i.available)
            }

            function C(t) {
                var i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    o = r.Z.getCurrentConfig({
                        location: "65e71d_1"
                    }, {
                        autoTrackExposure: i
                    }).enabled;
                return k.ZP.canUseCustomCallSounds(t) && o
            }

            function N(t, i, o) {
                (0, f.XE)(i, t);
                (0, d.kq)(i, t, __OVERLAY__, o)
            }

            function P(t, i) {
                (0, f.XE)(i, t);
                (0, d.vy)(i, t, __OVERLAY__)
            }

            function L(t) {
                return D.apply(this, arguments)
            }

            function D() {
                return (D = w((function(t) {
                    var i, o, e, a, r;
                    return g(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                i = l.default.getCurrentUser();
                                o = (0, s.Z)();
                                e = (0, b.k9)(t);
                                return null != o && !p.Lr.has(o.type) && null != e && C(i) && (0,
                                    h.D)() ? [4, (0, f.w)()] : [2];
                            case 1:
                                n.sent();
                                a = e.guildId === I.hY ? I.X8 : e.guildId;
                                if (null == (r = _.Z.getSound(a, e.soundId))) return [2];
                                if (!T(r, o) || !A(i, r, o, !0)) return [2, null];
                                P(r, o.id);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function R(t) {
                var i = t.isSoundboardButtonDisabled,
                    o = void 0 !== i && i,
                    s = (0, e.ZP)([l.default], (function() {
                        return l.default.getCurrentUser()
                    })),
                    n = [a.z$.SOUNDBOARD_EDUCATION],
                    x = r.Z.useExperiment({
                        location: "65e71d_2"
                    }, {
                        autoTrackExposure: !1
                    }),
                    d = x.enabled,
                    p = x.showVoiceChannelCoachmark;
                if (d && !o && ! function() {
                        var t, i, o = null !== (i = null === (t = y.Z.settings.guilds) || void 0 === t ? void 0 : t.guilds) && void 0 !== i ? i : {};
                        return Object.values(o).some((function(t) {
                            return null != t.joinSound
                        }))
                    }()) {
                    n.push(a.z$.CUSTOM_CALL_SOUNDS_SPARKLES);
                    var c = k.ZP.canUseCustomCallSounds(s),
                        u = (0, m.Fc)(s);
                    p && !k.ZP.isPremium(s) && u && n.push(a.z$.CUSTOM_CALL_SOUNDS_VOICE_COACHMARK);
                    (c || u) && n.push(a.z$.CUSTOM_CALL_SOUNDS_PICKER_UPSELL)
                }
                return n
            }

            function M(t, i) {
                (0, x.PS)(t, (function(o) {
                    o.joinSound = void 0;
                    j({
                        guildId: t,
                        changeType: E.MW.REMOVED,
                        soundType: E.jy.ENTRY,
                        location: i
                    })
                }), x.fy.INFREQUENT_USER_ACTION)
            }

            function U(t, i, o) {
                (0, x.PS)(t, (function(e) {
                    var a = i.guildId === I.X8,
                        r = a ? E.H$.DEFAULT : E.H$.CUSTOM,
                        s = null != e.joinSound ? E.MW.UPDATED : E.MW.ADDED;
                    e.joinSound = {
                        soundId: i.soundId,
                        guildId: a ? I.hY : i.guildId
                    };
                    j({
                        guildId: t,
                        changeType: s,
                        soundSource: r,
                        soundType: E.jy.ENTRY,
                        location: o
                    })
                }), x.fy.INFREQUENT_USER_ACTION)
            }

            function j(t) {
                var i = t.guildId,
                    o = t.changeType,
                    e = t.soundType,
                    a = t.soundSource,
                    r = t.location;
                u.default.track(O.rMx.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
                    location_stack: r,
                    guild_id: "" === i ? 0 : Number(i),
                    change_type: o,
                    sound_type: e,
                    sound_source: a
                })
            }

            function Z(t) {
                var i = t.location;
                u.default.track(O.rMx.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, {
                    location_stack: i
                })
            }
        },
        182306: (t, i, o) => {
            "use strict";
            o.d(i, {
                D: () => n,
                Z: () => x
            });
            var e = o(61209),
                a = o(682776),
                r = o(715107),
                s = o(2590);

            function n() {
                var t = r.Z.getVoiceChannelId();
                return x(e.Z.getChannel(t))
            }

            function x(t) {
                if (null == t) return !1;
                if (s.TPd.CALLABLE.has(t.type)) return !0;
                var i = a.Z.can(s.Plq.USE_SOUNDBOARD, t),
                    o = a.Z.can(s.Plq.SPEAK, t);
                return t.type === s.d4z.GUILD_VOICE && i && o
            }
        },
        550352: (t, i, o) => {
            "use strict";
            o.d(i, {
                zx: () => e,
                tT: () => y,
                k9: () => d
            });
            var e, a = o(202351),
                r = o(473419),
                s = o(460214);

            function n(t, i, o) {
                i in t ? Object.defineProperty(t, i, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[i] = o;
                return t
            }

            function x(t, i) {
                i = null != i ? i : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : function(t, i) {
                    var o = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var e = Object.getOwnPropertySymbols(t);
                        i && (e = e.filter((function(i) {
                            return Object.getOwnPropertyDescriptor(t, i).enumerable
                        })));
                        o.push.apply(o, e)
                    }
                    return o
                }(Object(i)).forEach((function(o) {
                    Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(i, o))
                }));
                return t
            }! function(t) {
                t[t.GLOBAL = 0] = "GLOBAL";
                t[t.GUILD = 1] = "GUILD"
            }(e || (e = {}));

            function y(t) {
                return (0, a.e7)([r.Z], (function() {
                    var i, o, e = null !== (o = null === (i = r.Z.settings.guilds) || void 0 === i ? void 0 : i.guilds) && void 0 !== o ? o : {};
                    return p(t, e)
                }))
            }

            function d(t) {
                var i, o;
                return p(t, null !== (o = null === (i = r.Z.settings.guilds) || void 0 === i ? void 0 : i.guilds) && void 0 !== o ? o : {})
            }

            function p(t, i) {
                var o, a, r = null === (o = i[t]) || void 0 === o ? void 0 : o.joinSound,
                    y = null === (a = i[s.hY]) || void 0 === a ? void 0 : a.joinSound,
                    d = null != r ? r : y;
                return null != d ? x(function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var o = null != arguments[i] ? arguments[i] : {},
                            e = Object.keys(o);
                        "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(o).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(o, t).enumerable
                        }))));
                        e.forEach((function(i) {
                            n(t, i, o[i])
                        }))
                    }
                    return t
                }({}, d), {
                    type: null != r ? e.GUILD : e.GLOBAL
                }) : void 0
            }
        },
        933878: (t, i, o) => {
            "use strict";
            o.d(i, {
                yX: () => g,
                vy: () => A,
                Lx: () => D,
                kq: () => C
            });
            var e = o(496486),
                a = o(281110),
                r = o(744564),
                s = o(153686),
                n = o(396043),
                x = o(245353),
                y = o(911980),
                d = o(61209),
                p = o(563367),
                c = o(671723),
                l = o(715107),
                u = o(652591),
                k = o(460214),
                m = o(2590),
                f = o(203600);

            function _(t, i, o, e) {
                var a, r = d.Z.getChannel(l.Z.getVoiceChannelId()),
                    s = null == r ? void 0 : r.getGuildId(),
                    n = p.Z.getMediaSessionId(),
                    x = p.Z.getRTCConnectionId(),
                    y = null === (a = c.ZP.getCurrentGameForAnalytics()) || void 0 === a ? void 0 : a.name,
                    _ = s !== o.guildId && o.guildId !== k.X8,
                    E = function(t, i) {
                        return t.guildId === k.X8 ? "default" : i ? "custom-external" : "custom"
                    }(o, _);
                u.default.track(m.rMx.PREMIUM_FEATURE_USAGE, {
                    feature_name: f.QP.SOUNDBOARD_PLAY,
                    feature_tier: _ ? f.h1.PREMIUM_STANDARD : f.h1.FREE,
                    guild_id: s,
                    location_stack: t,
                    rtc_connection_id: x,
                    media_session_id: n,
                    in_overlay: i,
                    application_name: y,
                    emoji_count: null != o.emojiId || null != o.emojiName ? 1 : 0,
                    feature_selection: E,
                    feature_selection_id: o.soundId,
                    sound_type: e,
                    is_broadcast: null != r && r.isBroadcastChannel()
                })
            }
            var E = o(38004),
                h = o(710981),
                b = o(986279),
                I = o(285629),
                O = o(143692);

            function v(t, i, o, e, a, r, s) {
                try {
                    var n = t[r](s),
                        x = n.value
                } catch (t) {
                    o(t);
                    return
                }
                n.done ? i(x) : Promise.resolve(x).then(e, a)
            }

            function w(t, i, o) {
                i in t ? Object.defineProperty(t, i, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[i] = o;
                return t
            }
            var g, S = function(t, i) {
                var o, e, a, r, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: n(0),
                    throw: n(1),
                    return: n(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function n(r) {
                    return function(n) {
                        return function(r) {
                            if (o) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (o = 1, e && (a = 2 & r[0] ? e.return : r[0] ? e.throw || ((a = e.return) && a.call(e), 0) : e.next) && !(a = a.call(e, r[1])).done) return a;
                                (e = 0, a) && (r = [2 & r[0], a.value]);
                                switch (r[0]) {
                                    case 0:
                                    case 1:
                                        a = r;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: r[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        e = r[1];
                                        r = [0];
                                        continue;
                                    case 7:
                                        r = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = s.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                                            s.label = r[1];
                                            break
                                        }
                                        if (6 === r[0] && s.label < a[1]) {
                                            s.label = a[1];
                                            a = r;
                                            break
                                        }
                                        if (a && s.label < a[2]) {
                                            s.label = a[2];
                                            s.ops.push(r);
                                            break
                                        }
                                        a[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                r = i.call(t, s)
                            } catch (t) {
                                r = [6, t];
                                e = 0
                            } finally {
                                o = a = 0
                            }
                            if (5 & r[0]) throw r[1];
                            return {
                                value: r[0] ? r[1] : void 0,
                                done: !0
                            }
                        }([r, n])
                    }
                }
            };
            ! function(t) {
                t.EMOJI_PICKER = "emoji_picker";
                t.EFFECT_BAR = "effect_bar"
            }(g || (g = {}));

            function T(t) {
                var i = new AbortController,
                    o = (0, e.throttle)((function(o) {
                        l.Z.getVoiceChannelId() !== t && i.abort()
                    }), 1e3);
                return {
                    abortController: i,
                    onRequestProgress: o
                }
            }

            function A(t, i, o) {
                var e, r = T(t),
                    n = r.abortController,
                    x = r.onRequestProgress,
                    d = null !== (e = h.Z.getState().animationType) && void 0 !== e ? e : O.q.BASIC,
                    p = {
                        animation_type: d,
                        animation_id: (0, I.Iu)(d, I.v)
                    };
                a.ZP.post({
                    url: m.ANM.CUSTOM_CALL_SOUNDS(t),
                    body: p,
                    signal: n.signal,
                    onRequestProgress: x
                }).then(m.VqG, (function() {
                    n.signal.aborted
                }));
                _([s.Z.CHANNEL_CALL], o, i, y.jy.ENTRY)
            }

            function C(t, i, o, e) {
                var r, s, n = x.Z.getCustomEmojiById(null !== (r = i.emojiId) && void 0 !== r ? r : ""),
                    d = T(t),
                    p = d.abortController,
                    c = d.onRequestProgress,
                    l = {
                        sound_id: i.soundId,
                        emoji_id: i.emojiId,
                        emoji_name: null !== (s = i.emojiName) && void 0 !== s ? s : null == n ? void 0 : n.name
                    };
                i.guildId !== k.X8 && (l.source_guild_id = i.guildId);
                a.ZP.post({
                    url: m.ANM.VOICE_CHANNEL_EFFECTS(t),
                    body: l,
                    signal: p.signal,
                    onRequestProgress: c
                }).then(m.VqG, (function() {
                    p.signal.aborted
                }));
                _(null != e ? e : [], o, i, y.jy.DEFAULT)
            }
            var N, P, L, D = (P = (N = function(t) {
                    var i, o, e, s, n, x, y, d, p, c;
                    return S(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                i = t.channel, o = t.emoji, e = t.location, s = t.animationType, n = t.animationId, x = t.isPremium;
                                if (null == o || b.Z.isOnCooldown) return [2];
                                y = x && null != s ? s : O.q.BASIC;
                                l.label = 1;
                            case 1:
                                l.trys.push([1, 3, , 4]);
                                d = null != o.id ? {
                                    emoji_id: o.id,
                                    emoji_name: o.name,
                                    animation_type: y,
                                    animation_id: n
                                } : {
                                    emoji_id: null,
                                    emoji_name: o.optionallyDiverseSequence,
                                    animation_type: y,
                                    animation_id: n
                                };
                                return [4, a.ZP.post({
                                    url: m.ANM.VOICE_CHANNEL_EFFECTS(i.id),
                                    body: d
                                })];
                            case 2:
                                l.sent();
                                M(i, o, e, y);
                                r.Z.dispatch({
                                    type: "VOICE_CHANNEL_EFFECT_SENT_LOCAL"
                                });
                                return [3, 4];
                            case 3:
                                if (429 === (p = l.sent()).status && null != p.body.retry_after) {
                                    c = 1e3 * p.body.retry_after;
                                    r.Z.dispatch({
                                        type: "VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP",
                                        cooldownEndsAtMs: c
                                    })
                                }
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }, function() {
                    var t = this,
                        i = arguments;
                    return new Promise((function(o, e) {
                        var a = N.apply(t, i);

                        function r(t) {
                            v(a, o, e, r, s, "next", t)
                        }

                        function s(t) {
                            v(a, o, e, r, s, "throw", t)
                        }
                        r(void 0)
                    }))
                }), function(t) {
                    return P.apply(this, arguments)
                }),
                R = (w(L = {}, O.q.BASIC, "Basic"), w(L, O.q.PREMIUM, "Premium"), L),
                M = function(t, i, o, e) {
                    var a = (0, E.sp)([i], t.getGuildId()),
                        r = a.unicode,
                        s = a.custom,
                        x = a.customExternal,
                        y = a.managed,
                        d = a.managedExternal,
                        p = a.animated,
                        c = R[e];
                    n.ZP.trackWithMetadata(m.rMx.VOICE_CHANNEL_EFFECT_SENT, {
                        channel_id: t.id,
                        guild_id: t.getGuildId(),
                        location: o,
                        emoji_unicode: r,
                        emoji_custom: s,
                        emoji_custom_external: x,
                        emoji_managed: y,
                        emoji_managed_external: d,
                        emoji_animated: p,
                        animation_type: c,
                        is_broadcast: t.isBroadcastChannel()
                    })
                }
        },
        143692: (t, i, o) => {
            "use strict";
            o.d(i, {
                q: () => e,
                v: () => a
            });
            var e;
            ! function(t) {
                t[t.PREMIUM = 0] = "PREMIUM";
                t[t.BASIC = 1] = "BASIC"
            }(e || (e = {}));
            var a = 32
        },
        710981: (t, i, o) => {
            "use strict";
            o.d(i, {
                Z: () => k
            });
            var e = o(202351),
                a = o(744564),
                r = o(143692);

            function s(t, i) {
                if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function")
            }

            function n(t) {
                n = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return n(t)
            }

            function x(t, i) {
                return !i || "object" !== p(i) && "function" != typeof i ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : i
            }

            function y(t, i) {
                y = Object.setPrototypeOf || function(t, i) {
                    t.__proto__ = i;
                    return t
                };
                return y(t, i)
            }
            var d, p = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function c(t) {
                var i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var o, e = n(t);
                    if (i) {
                        var a = n(this).constructor;
                        o = Reflect.construct(e, arguments, a)
                    } else o = e.apply(this, arguments);
                    return x(this, o)
                }
            }
            var l = function() {
                    d = d === r.q.BASIC ? r.q.PREMIUM : r.q.BASIC
                },
                u = function(t) {
                    ! function(t, i) {
                        if ("function" != typeof i && null !== i) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(i && i.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        i && y(t, i)
                    }(o, t);
                    var i = c(o);

                    function o() {
                        s(this, o);
                        return i.apply(this, arguments)
                    }
                    var e = o.prototype;
                    e.initialize = function(t) {
                        var i;
                        d = null !== (i = null == t ? void 0 : t.animationType) && void 0 !== i ? i : r.q.PREMIUM
                    };
                    e.getState = function() {
                        return {
                            animationType: d
                        }
                    };
                    e.__getLocalVars = function() {
                        return {
                            animationType: d,
                            handleToggleAnimationType: l
                        }
                    };
                    return o
                }(e.ZP.PersistedStore);
            u.displayName = "VoiceChannelEffectsPersistedStore";
            u.persistKey = "VoiceChannelEffectsPersistedStore";
            const k = new u(a.Z, {
                VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: l
            })
        },
        986279: (t, i, o) => {
            "use strict";
            o.d(i, {
                H: () => I,
                Z: () => P
            });
            var e = o(496486),
                a = o(202351),
                r = o(575945),
                s = o(744564),
                n = o(285629),
                x = o(358500);

            function y(t, i) {
                (null == i || i > t.length) && (i = t.length);
                for (var o = 0, e = new Array(i); o < i; o++) e[o] = t[o];
                return e
            }

            function d(t, i) {
                if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function")
            }

            function p(t, i) {
                for (var o = 0; o < i.length; o++) {
                    var e = i[o];
                    e.enumerable = e.enumerable || !1;
                    e.configurable = !0;
                    "value" in e && (e.writable = !0);
                    Object.defineProperty(t, e.key, e)
                }
            }

            function c(t) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return c(t)
            }

            function l(t, i) {
                return !i || "object" !== f(i) && "function" != typeof i ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : i
            }

            function u(t, i) {
                u = Object.setPrototypeOf || function(t, i) {
                    t.__proto__ = i;
                    return t
                };
                return u(t, i)
            }

            function k(t) {
                return function(t) {
                    if (Array.isArray(t)) return y(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, i) {
                    if (!t) return;
                    if ("string" == typeof t) return y(t, i);
                    var o = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === o && t.constructor && (o = t.constructor.name);
                    if ("Map" === o || "Set" === o) return Array.from(o);
                    if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return y(t, i)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var m, f = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function _(t) {
                var i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var o, e = c(t);
                    if (i) {
                        var a = c(this).constructor;
                        o = Reflect.construct(e, arguments, a)
                    } else o = e.apply(this, arguments);
                    return l(this, o)
                }
            }
            var E = [],
                h = {},
                b = [],
                I = function(t) {
                    null != t && s.Z.dispatch({
                        type: "VOICE_CHANNEL_EFFECT_CLEAR",
                        userId: t
                    })
                },
                O = [],
                v = 1e4,
                w = function() {
                    var t = new Date;
                    if ((O = [t].concat(k(O)).slice(0, 20)).length >= 20) {
                        var i = O[O.length - 1],
                            o = t.getTime() - i.getTime();
                        o < v && (m = new Date(t.getTime() + v - o))
                    }
                },
                g = function(t) {
                    var i = t.cooldownEndsAtMs;
                    m = new Date(Date.now() + i)
                },
                S = (0, e.debounce)((function() {
                    var t = (0, n.cX)(b);
                    r.uv.announce(t, "polite");
                    b = []
                }), 500),
                T = function(t) {
                    var i = t.emoji,
                        o = t.userId,
                        e = t.animationType;
                    if (null != i && null != e) {
                        h[o] = {
                            emoji: i,
                            sentAt: Date.now(),
                            animationType: e
                        };
                        b = k(b).concat([{
                            emojiName: i.name,
                            userId: o
                        }]);
                        S()
                    }
                },
                A = function(t) {
                    var i = t.emoji;
                    if (null != i) {
                        E.unshift(i);
                        (E = (0, e.uniqBy)(E, "name")).length > x.e5 + 1 && E.pop()
                    }
                },
                C = function(t) {
                    var i = t.userId;
                    null != h[i] && delete h[i]
                },
                N = function(t) {
                    ! function(t, i) {
                        if ("function" != typeof i && null !== i) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(i && i.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        i && u(t, i)
                    }(o, t);
                    var i = _(o);

                    function o() {
                        d(this, o);
                        return i.apply(this, arguments)
                    }
                    var e = o.prototype;
                    e.getEffectForUserId = function(t) {
                        return h[t]
                    };
                    e.__getLocalVars = function() {
                        return {
                            effectCooldownEndTime: m,
                            recentlyUsedEmojis: E,
                            effectsByUserId: h,
                            effectsToAnnounce: b,
                            lastSentEffects: O,
                            MAX_EFFECTS_COUNT: 20,
                            MAX_EFFECTS_INTERVAL_MS: v,
                            handleVoiceChannelEffectSentLocal: w,
                            handleTimestampUpdate: g,
                            announceReaction: S,
                            handleReceivedVoiceChannelEffect: T,
                            handleAddRecentlyUsedEmojis: A,
                            handleClearVoiceChannelEffect: C
                        }
                    };
                    ! function(t, i, o) {
                        i && p(t.prototype, i);
                        o && p(t, o)
                    }(o, [{
                        key: "recentlyUsedEmojis",
                        get: function() {
                            return E
                        }
                    }, {
                        key: "isOnCooldown",
                        get: function() {
                            return null != m && new Date < m
                        }
                    }, {
                        key: "effectCooldownEndTime",
                        get: function() {
                            return m
                        }
                    }]);
                    return o
                }(a.ZP.Store);
            N.displayName = "VoiceChannelEffectsStore";
            const P = new N(s.Z, {
                VOICE_CHANNEL_EFFECT_CLEAR: C,
                VOICE_CHANNEL_EFFECT_RECENT_EMOJI: A,
                VOICE_CHANNEL_EFFECT_SEND: T,
                VOICE_CHANNEL_EFFECT_SENT_LOCAL: w,
                VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: g
            })
        },
        285629: (t, i, o) => {
            "use strict";
            o.d(i, {
                Jw: () => j,
                v: () => M,
                cX: () => V,
                _r: () => G,
                lv: () => Z,
                Iu: () => F
            });
            var e = o(496486),
                a = o.n(e);
            const r = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.0.2","a":"","k":"","d":"","tc":""},"fr":60,"ip":2,"op":81,"w":1280,"h":720,"nm":"FrameEffect_10-1_Out","ddd":0,"assets":[{"id":"image_0","w":35,"h":35,"u":"","p":"","e":1},{"id":"comp_0","layers":[{"ddd":0,"ind":3,"ty":2,"nm":"smile","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[19.875,20.125,0],"ix":2},"a":{"a":0,"k":[17.25,17.25,0],"ix":1},"s":{"a":0,"k":[108.7,108.7,100],"ix":6}},"ao":0,"ip":0,"op":914,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.487,"y":1},"o":{"x":0,"y":0},"t":2,"s":[640,883.838,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":16,"s":[640,296,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":28,"s":[640,392,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":40,"s":[640,347.2,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.167,"y":0.167},"t":51,"s":[640,360,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.397,"y":1},"o":{"x":0.442,"y":0},"t":61,"s":[640,360,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.641,"y":0},"t":69,"s":[640,433.6,0],"to":[0,0,0],"ti":[0,0,0]},{"t":81,"s":[640,-156.8,0]}],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":9,"s":[543.68,704,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":19,"s":[634.72,532.16,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":25,"s":[571.68,617.6,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":31,"s":[603.84,561.76,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":38,"s":[581.44,604.16,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":43,"s":[592,592,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":61,"s":[592,592,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":67,"s":[552.32,624.32,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":71,"s":[634.72,532.16,100]},{"t":74,"s":[560,704,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":3,"op":80,"st":-2,"bm":0}],"markers":[]}'),
                s = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.0.0","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":120,"w":1280,"h":720,"nm":"FrameEffect_01-1_Out","ddd":0,"assets":[{"id":"image_0","w":35,"h":35,"u":"","p":"","e":1},{"id":"comp_0","layers":[{"ddd":0,"ind":3,"ty":2,"nm":"smile","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[19.875,20.125,0],"ix":2},"a":{"a":0,"k":[17.25,17.25,0],"ix":1},"s":{"a":0,"k":[108.7,108.7,100],"ix":6}},"ao":0,"ip":0,"op":914,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Null_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-186,720,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6}},"ao":0,"shapes":[],"ip":1,"op":361,"st":1,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"Bounce_3","parent":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":26,"s":[-44]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":43,"s":[-19.578]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":49,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":57,"s":[26.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":79,"s":[-20.9]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":84,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":90,"s":[24.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":107,"s":[-25.3]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":110,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":113,"s":[15.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":128,"s":[-19.4]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":133,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":137,"s":[20.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":149,"s":[-14.7]},{"t":151,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":1,"y":1},"o":{"x":0.846,"y":0.058},"t":26,"s":[-1325.228,-905.882,0],"to":[246.828,34.746,0],"ti":[0,0,0]},{"i":{"x":0.094,"y":0.841},"o":{"x":0.167,"y":0.167},"t":49,"s":[-938.028,0,0],"to":[0,0,0],"ti":[-256.428,-4.346,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":1,"y":0.22},"t":64,"s":[-626.028,-455.146,0],"to":[256.428,4.346,0],"ti":[0,0,0]},{"i":{"x":0.163,"y":0.681},"o":{"x":0,"y":0},"t":84,"s":[-315.628,0,0],"to":[0,0,0],"ti":[-232.428,-7.546,0]},{"i":{"x":0.833,"y":0.915},"o":{"x":0.972,"y":0.447},"t":96,"s":[-46.828,-224.746,0],"to":[232.428,7.546,0],"ti":[0,0,0]},{"i":{"x":0.157,"y":0.663},"o":{"x":0.167,"y":0.167},"t":110,"s":[199.572,0,0],"to":[0,0,0],"ti":[-136.428,-1.6,0]},{"i":{"x":0.833,"y":0.875},"o":{"x":0.805,"y":0.371},"t":121,"s":[402.772,-138.8,0],"to":[136.428,1.6,0],"ti":[0,0,0]},{"i":{"x":0.111,"y":0.788},"o":{"x":0.167,"y":0.167},"t":133,"s":[586.772,0,0],"to":[0,0,0],"ti":[-134.828,-1.6,0]},{"i":{"x":0.833,"y":0.895},"o":{"x":0.657,"y":0.192},"t":141,"s":[756.372,-115.2,0],"to":[134.828,1.6,0],"ti":[0,0,0]},{"t":151,"s":[933.972,0,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":26,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":48,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":49,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":53,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":63,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":83,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":84,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":87,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":98,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":106,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":110,"s":[414.08,307.76,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":115,"s":[360.04,417.28,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":121,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":131,"s":[356.32,416.82,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":133,"s":[394.08,323.36,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":136,"s":[375.84,404.48,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":141,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":149,"s":[356.32,416.82,100]},{"t":151,"s":[394.08,323.36,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":21,"op":140,"st":21,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Null_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1340,720,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[],"ip":0,"op":360,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"Bounce_2","parent":3,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":17,"s":[-44]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":34,"s":[-19.578]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":48,"s":[26.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":70,"s":[-20.9]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":75,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":81,"s":[24.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":98,"s":[-25.3]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":101,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":104,"s":[15.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":119,"s":[-19.4]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":124,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":128,"s":[20.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":140,"s":[-14.7]},{"t":142,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":1,"y":1},"o":{"x":0.846,"y":0.058},"t":17,"s":[-1325.228,-905.882,0],"to":[246.828,34.746,0],"ti":[0,0,0]},{"i":{"x":0.094,"y":0.856},"o":{"x":0.167,"y":0.167},"t":40,"s":[-938.028,0,0],"to":[0,0,0],"ti":[-256.428,-4.346,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":1,"y":0.198},"t":55,"s":[-626.028,-529.146,0],"to":[256.428,4.346,0],"ti":[0,0,0]},{"i":{"x":0.163,"y":0.718},"o":{"x":0,"y":0},"t":75,"s":[-315.628,0,0],"to":[0,0,0],"ti":[-232.428,-7.546,0]},{"i":{"x":0.833,"y":0.926},"o":{"x":0.972,"y":0.391},"t":87,"s":[-46.828,-290.746,0],"to":[232.428,7.546,0],"ti":[0,0,0]},{"i":{"x":0.157,"y":0.716},"o":{"x":0.167,"y":0.167},"t":101,"s":[199.572,0,0],"to":[0,0,0],"ti":[-136.428,-1.6,0]},{"i":{"x":0.833,"y":0.897},"o":{"x":0.805,"y":0.308},"t":112,"s":[402.772,-204.8,0],"to":[136.428,1.6,0],"ti":[0,0,0]},{"i":{"x":0.111,"y":0.788},"o":{"x":0.167,"y":0.167},"t":124,"s":[586.772,0,0],"to":[0,0,0],"ti":[-134.828,-1.6,0]},{"i":{"x":0.833,"y":0.895},"o":{"x":0.657,"y":0.192},"t":132,"s":[756.372,-115.2,0],"to":[134.828,1.6,0],"ti":[0,0,0]},{"t":142,"s":[933.972,0,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":17,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":39,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":40,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":44,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":54,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":74,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":75,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":78,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":89,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":97,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":101,"s":[414.08,307.76,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":106,"s":[360.04,417.28,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":112,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":122,"s":[356.32,416.82,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":124,"s":[394.08,323.36,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":127,"s":[375.84,404.48,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":132,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":140,"s":[356.32,416.82,100]},{"t":142,"s":[394.08,323.36,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":12,"op":131,"st":12,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Null_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[640,720,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[],"ip":0,"op":360,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":0,"nm":"Bounce_1","parent":5,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":5,"s":[-44]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":22,"s":[-19.578]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":28,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":36,"s":[26.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":58,"s":[-20.9]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":63,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":69,"s":[24.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":86,"s":[-25.3]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":89,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":92,"s":[15.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":107,"s":[-19.4]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":112,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":116,"s":[20.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":128,"s":[-14.7]},{"t":130,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":1,"y":1},"o":{"x":0.846,"y":0.058},"t":5,"s":[-1325.228,-905.882,0],"to":[246.828,34.746,0],"ti":[0,0,0]},{"i":{"x":0.094,"y":0.856},"o":{"x":0.167,"y":0.167},"t":28,"s":[-938.028,0,0],"to":[0,0,0],"ti":[-256.428,-4.346,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":1,"y":0.198},"t":43,"s":[-626.028,-529.146,0],"to":[256.428,4.346,0],"ti":[0,0,0]},{"i":{"x":0.163,"y":0.718},"o":{"x":0,"y":0},"t":63,"s":[-315.628,0,0],"to":[0,0,0],"ti":[-232.428,-7.546,0]},{"i":{"x":0.833,"y":0.926},"o":{"x":0.972,"y":0.391},"t":75,"s":[-46.828,-290.746,0],"to":[232.428,7.546,0],"ti":[0,0,0]},{"i":{"x":0.157,"y":0.716},"o":{"x":0.167,"y":0.167},"t":89,"s":[199.572,0,0],"to":[0,0,0],"ti":[-136.428,-1.6,0]},{"i":{"x":0.833,"y":0.897},"o":{"x":0.805,"y":0.308},"t":100,"s":[402.772,-204.8,0],"to":[136.428,1.6,0],"ti":[0,0,0]},{"i":{"x":0.111,"y":0.788},"o":{"x":0.167,"y":0.167},"t":112,"s":[586.772,0,0],"to":[0,0,0],"ti":[-134.828,-1.6,0]},{"i":{"x":0.833,"y":0.895},"o":{"x":0.657,"y":0.192},"t":120,"s":[756.372,-115.2,0],"to":[134.828,1.6,0],"ti":[0,0,0]},{"t":130,"s":[933.972,0,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":5,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":27,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":28,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":32,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":42,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":62,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":63,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":66,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":77,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":85,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":89,"s":[414.08,307.76,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":94,"s":[360.04,417.28,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":100,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":110,"s":[356.32,416.82,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":112,"s":[394.08,323.36,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":115,"s":[375.84,404.48,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":120,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":128,"s":[356.32,416.82,100]},{"t":130,"s":[394.08,323.36,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":35,"op":119,"st":0,"bm":0}],"markers":[]}'),
                n = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.0.0","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":120,"w":1280,"h":720,"nm":"FrameEffect_01-2_Out","ddd":0,"assets":[{"id":"image_0","w":35,"h":35,"u":"","p":"","e":1},{"id":"comp_0","layers":[{"ddd":0,"ind":3,"ty":2,"nm":"smile","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[19.875,20.125,0],"ix":2},"a":{"a":0,"k":[17.25,17.25,0],"ix":1},"s":{"a":0,"k":[108.7,108.7,100],"ix":6}},"ao":0,"ip":0,"op":914,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Null_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[724,720,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6}},"ao":0,"shapes":[],"ip":3,"op":363,"st":3,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"Bounce_3","parent":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":-8,"s":[-44]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":9,"s":[-19.578]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":15,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":23,"s":[26.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":45,"s":[-20.9]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":50,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":56,"s":[24.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":73,"s":[-25.3]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":76,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":79,"s":[15.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":94,"s":[-19.4]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":99,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":103,"s":[20.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":115,"s":[-14.7]},{"t":117,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":1,"y":1},"o":{"x":0.846,"y":0.058},"t":-8,"s":[-1325.228,-905.882,0],"to":[246.828,34.746,0],"ti":[0,0,0]},{"i":{"x":0.094,"y":0.856},"o":{"x":0.167,"y":0.167},"t":15,"s":[-938.028,0,0],"to":[0,0,0],"ti":[-256.428,-4.346,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":1,"y":0.198},"t":30,"s":[-626.028,-529.146,0],"to":[256.428,4.346,0],"ti":[0,0,0]},{"i":{"x":0.163,"y":0.718},"o":{"x":0,"y":0},"t":50,"s":[-315.628,0,0],"to":[0,0,0],"ti":[-232.428,-7.546,0]},{"i":{"x":0.833,"y":0.926},"o":{"x":0.972,"y":0.391},"t":62,"s":[-46.828,-290.746,0],"to":[232.428,7.546,0],"ti":[0,0,0]},{"i":{"x":0.157,"y":0.716},"o":{"x":0.167,"y":0.167},"t":76,"s":[199.572,0,0],"to":[0,0,0],"ti":[-136.428,-1.6,0]},{"i":{"x":0.833,"y":0.897},"o":{"x":0.805,"y":0.308},"t":87,"s":[402.772,-204.8,0],"to":[136.428,1.6,0],"ti":[0,0,0]},{"i":{"x":0.111,"y":0.788},"o":{"x":0.167,"y":0.167},"t":99,"s":[586.772,0,0],"to":[0,0,0],"ti":[-134.828,-1.6,0]},{"i":{"x":0.833,"y":0.895},"o":{"x":0.657,"y":0.192},"t":107,"s":[756.372,-115.2,0],"to":[134.828,1.6,0],"ti":[0,0,0]},{"t":117,"s":[933.972,0,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":-8,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":14,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":15,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":19,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":29,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":49,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":50,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":53,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":64,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":72,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":76,"s":[414.08,307.76,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":81,"s":[360.04,417.28,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":87,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":97,"s":[356.32,416.82,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":99,"s":[394.08,323.36,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":102,"s":[375.84,404.48,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":107,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":115,"s":[356.32,416.82,100]},{"t":117,"s":[394.08,323.36,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":-13,"op":106,"st":-13,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Null_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1334,720,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[],"ip":1,"op":361,"st":1,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"Bounce_2","parent":3,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":17,"s":[-44]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":34,"s":[-19.578]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":48,"s":[26.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":70,"s":[-20.9]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":75,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":81,"s":[24.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":98,"s":[-25.3]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":101,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":104,"s":[15.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":119,"s":[-19.4]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":124,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":128,"s":[20.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":140,"s":[-14.7]},{"t":142,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":1,"y":1},"o":{"x":0.846,"y":0.058},"t":17,"s":[-1325.228,-905.882,0],"to":[246.828,34.746,0],"ti":[0,0,0]},{"i":{"x":0.094,"y":0.856},"o":{"x":0.167,"y":0.167},"t":40,"s":[-938.028,0,0],"to":[0,0,0],"ti":[-256.428,-4.346,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":1,"y":0.198},"t":55,"s":[-626.028,-529.146,0],"to":[256.428,4.346,0],"ti":[0,0,0]},{"i":{"x":0.163,"y":0.718},"o":{"x":0,"y":0},"t":75,"s":[-315.628,0,0],"to":[0,0,0],"ti":[-232.428,-7.546,0]},{"i":{"x":0.833,"y":0.926},"o":{"x":0.972,"y":0.391},"t":87,"s":[-46.828,-290.746,0],"to":[232.428,7.546,0],"ti":[0,0,0]},{"i":{"x":0.157,"y":0.716},"o":{"x":0.167,"y":0.167},"t":101,"s":[199.572,0,0],"to":[0,0,0],"ti":[-136.428,-1.6,0]},{"i":{"x":0.833,"y":0.897},"o":{"x":0.805,"y":0.308},"t":112,"s":[402.772,-204.8,0],"to":[136.428,1.6,0],"ti":[0,0,0]},{"i":{"x":0.111,"y":0.788},"o":{"x":0.167,"y":0.167},"t":124,"s":[586.772,0,0],"to":[0,0,0],"ti":[-134.828,-1.6,0]},{"i":{"x":0.833,"y":0.895},"o":{"x":0.657,"y":0.192},"t":132,"s":[756.372,-115.2,0],"to":[134.828,1.6,0],"ti":[0,0,0]},{"t":142,"s":[933.972,0,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":17,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":39,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":40,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":44,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":54,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":74,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":75,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":78,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":89,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":97,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":101,"s":[414.08,307.76,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":106,"s":[360.04,417.28,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":112,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":122,"s":[356.32,416.82,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":124,"s":[394.08,323.36,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":127,"s":[375.84,404.48,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":132,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":140,"s":[356.32,416.82,100]},{"t":142,"s":[394.08,323.36,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":12,"op":131,"st":12,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Null_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1392,720,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[],"ip":2,"op":362,"st":2,"bm":0},{"ddd":0,"ind":6,"ty":0,"nm":"Bounce_1","parent":5,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":41,"s":[-44]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":58,"s":[-19.578]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":64,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":72,"s":[26.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":94,"s":[-20.9]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":99,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":105,"s":[24.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":122,"s":[-25.3]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":125,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":128,"s":[15.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":143,"s":[-19.4]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":148,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":152,"s":[20.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":164,"s":[-14.7]},{"t":166,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":1,"y":1},"o":{"x":0.846,"y":0.058},"t":41,"s":[-1325.228,-905.882,0],"to":[246.828,34.746,0],"ti":[0,0,0]},{"i":{"x":0.094,"y":0.856},"o":{"x":0.167,"y":0.167},"t":64,"s":[-938.028,0,0],"to":[0,0,0],"ti":[-256.428,-4.346,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":1,"y":0.198},"t":79,"s":[-626.028,-529.146,0],"to":[256.428,4.346,0],"ti":[0,0,0]},{"i":{"x":0.163,"y":0.718},"o":{"x":0,"y":0},"t":99,"s":[-315.628,0,0],"to":[0,0,0],"ti":[-232.428,-7.546,0]},{"i":{"x":0.833,"y":0.926},"o":{"x":0.972,"y":0.391},"t":111,"s":[-46.828,-290.746,0],"to":[232.428,7.546,0],"ti":[0,0,0]},{"i":{"x":0.157,"y":0.716},"o":{"x":0.167,"y":0.167},"t":125,"s":[199.572,0,0],"to":[0,0,0],"ti":[-136.428,-1.6,0]},{"i":{"x":0.833,"y":0.897},"o":{"x":0.805,"y":0.308},"t":136,"s":[402.772,-204.8,0],"to":[136.428,1.6,0],"ti":[0,0,0]},{"i":{"x":0.111,"y":0.788},"o":{"x":0.167,"y":0.167},"t":148,"s":[586.772,0,0],"to":[0,0,0],"ti":[-134.828,-1.6,0]},{"i":{"x":0.833,"y":0.895},"o":{"x":0.657,"y":0.192},"t":156,"s":[756.372,-115.2,0],"to":[134.828,1.6,0],"ti":[0,0,0]},{"t":166,"s":[933.972,0,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":41,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":63,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":64,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":68,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":78,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":98,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":99,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":102,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":113,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":121,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":125,"s":[414.08,307.76,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":130,"s":[360.04,417.28,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":136,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":146,"s":[356.32,416.82,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":148,"s":[394.08,323.36,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":151,"s":[375.84,404.48,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":156,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":164,"s":[356.32,416.82,100]},{"t":166,"s":[394.08,323.36,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":36,"op":155,"st":36,"bm":0}],"markers":[]}'),
                x = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.0.0","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":120,"w":1280,"h":720,"nm":"FrameEffect_01-3_Out","ddd":0,"assets":[{"id":"image_0","w":35,"h":35,"u":"","p":"","e":1},{"id":"comp_0","layers":[{"ddd":0,"ind":3,"ty":2,"nm":"smile","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[19.875,20.125,0],"ix":2},"a":{"a":0,"k":[17.25,17.25,0],"ix":1},"s":{"a":0,"k":[108.7,108.7,100],"ix":6}},"ao":0,"ip":0,"op":914,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Null_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-8,720,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6}},"ao":0,"shapes":[],"ip":3,"op":363,"st":3,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"Bounce_3","parent":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":52,"s":[-44]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":69,"s":[-19.578]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":75,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":83,"s":[26.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":105,"s":[-20.9]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":110,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":116,"s":[24.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":133,"s":[-25.3]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":136,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":139,"s":[15.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":154,"s":[-19.4]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":159,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":163,"s":[20.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":175,"s":[-14.7]},{"t":177,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":1,"y":1},"o":{"x":0.846,"y":0.058},"t":52,"s":[-1325.228,-905.882,0],"to":[246.828,34.746,0],"ti":[0,0,0]},{"i":{"x":0.094,"y":0.856},"o":{"x":0.167,"y":0.167},"t":75,"s":[-938.028,0,0],"to":[0,0,0],"ti":[-256.428,-4.346,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":1,"y":0.198},"t":90,"s":[-626.028,-529.146,0],"to":[256.428,4.346,0],"ti":[0,0,0]},{"i":{"x":0.163,"y":0.718},"o":{"x":0,"y":0},"t":110,"s":[-315.628,0,0],"to":[0,0,0],"ti":[-232.428,-7.546,0]},{"i":{"x":0.833,"y":0.926},"o":{"x":0.972,"y":0.391},"t":122,"s":[-46.828,-290.746,0],"to":[232.428,7.546,0],"ti":[0,0,0]},{"i":{"x":0.157,"y":0.716},"o":{"x":0.167,"y":0.167},"t":136,"s":[199.572,0,0],"to":[0,0,0],"ti":[-136.428,-1.6,0]},{"i":{"x":0.833,"y":0.897},"o":{"x":0.805,"y":0.308},"t":147,"s":[402.772,-204.8,0],"to":[136.428,1.6,0],"ti":[0,0,0]},{"i":{"x":0.111,"y":0.788},"o":{"x":0.167,"y":0.167},"t":159,"s":[586.772,0,0],"to":[0,0,0],"ti":[-134.828,-1.6,0]},{"i":{"x":0.833,"y":0.895},"o":{"x":0.657,"y":0.192},"t":167,"s":[756.372,-115.2,0],"to":[134.828,1.6,0],"ti":[0,0,0]},{"t":177,"s":[933.972,0,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":52,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":74,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":75,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":79,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":89,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":109,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":110,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":113,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":124,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":132,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":136,"s":[414.08,307.76,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":141,"s":[360.04,417.28,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":147,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":157,"s":[356.32,416.82,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":159,"s":[394.08,323.36,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":162,"s":[375.84,404.48,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":167,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":175,"s":[356.32,416.82,100]},{"t":177,"s":[394.08,323.36,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":47,"op":166,"st":47,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Null_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[770,720,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6}},"ao":0,"shapes":[],"ip":7,"op":367,"st":7,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"Bounce_2","parent":3,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":-13,"s":[-44]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":4,"s":[-19.578]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":18,"s":[26.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[-20.9]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":45,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":51,"s":[24.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":68,"s":[-25.3]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":71,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":74,"s":[15.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":89,"s":[-19.4]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":94,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":98,"s":[20.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":110,"s":[-14.7]},{"t":112,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":1,"y":1},"o":{"x":0.846,"y":0.058},"t":-13,"s":[-1325.228,-905.882,0],"to":[246.828,34.746,0],"ti":[0,0,0]},{"i":{"x":0.094,"y":0.856},"o":{"x":0.167,"y":0.167},"t":10,"s":[-938.028,0,0],"to":[0,0,0],"ti":[-256.428,-4.346,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":1,"y":0.198},"t":25,"s":[-626.028,-529.146,0],"to":[256.428,4.346,0],"ti":[0,0,0]},{"i":{"x":0.163,"y":0.718},"o":{"x":0,"y":0},"t":45,"s":[-315.628,0,0],"to":[0,0,0],"ti":[-232.428,-7.546,0]},{"i":{"x":0.833,"y":0.926},"o":{"x":0.972,"y":0.391},"t":57,"s":[-46.828,-290.746,0],"to":[232.428,7.546,0],"ti":[0,0,0]},{"i":{"x":0.157,"y":0.716},"o":{"x":0.167,"y":0.167},"t":71,"s":[199.572,0,0],"to":[0,0,0],"ti":[-136.428,-1.6,0]},{"i":{"x":0.833,"y":0.897},"o":{"x":0.805,"y":0.308},"t":82,"s":[402.772,-204.8,0],"to":[136.428,1.6,0],"ti":[0,0,0]},{"i":{"x":0.111,"y":0.788},"o":{"x":0.167,"y":0.167},"t":94,"s":[586.772,0,0],"to":[0,0,0],"ti":[-134.828,-1.6,0]},{"i":{"x":0.833,"y":0.895},"o":{"x":0.657,"y":0.192},"t":102,"s":[756.372,-115.2,0],"to":[134.828,1.6,0],"ti":[0,0,0]},{"t":112,"s":[933.972,0,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":-13,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":9,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":10,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":14,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":24,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":44,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":45,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":48,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":59,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":67,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":71,"s":[414.08,307.76,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":76,"s":[360.04,417.28,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":82,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":92,"s":[356.32,416.82,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":94,"s":[394.08,323.36,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":97,"s":[375.84,404.48,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":102,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":110,"s":[356.32,416.82,100]},{"t":112,"s":[394.08,323.36,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":-18,"op":101,"st":-18,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Null_4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1606,720,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[],"ip":2,"op":362,"st":2,"bm":0},{"ddd":0,"ind":6,"ty":0,"nm":"Bounce_4","parent":5,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[-44]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":27,"s":[-19.578]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":33,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":41,"s":[26.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":63,"s":[-20.9]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":68,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":74,"s":[24.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":91,"s":[-25.3]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":94,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":97,"s":[15.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":112,"s":[-19.4]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":117,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":121,"s":[20.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":133,"s":[-14.7]},{"t":135,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":1,"y":1},"o":{"x":0.846,"y":0.058},"t":10,"s":[-1325.228,-905.882,0],"to":[246.828,34.746,0],"ti":[0,0,0]},{"i":{"x":0.094,"y":0.856},"o":{"x":0.167,"y":0.167},"t":33,"s":[-938.028,0,0],"to":[0,0,0],"ti":[-256.428,-4.346,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":1,"y":0.198},"t":48,"s":[-626.028,-529.146,0],"to":[256.428,4.346,0],"ti":[0,0,0]},{"i":{"x":0.163,"y":0.718},"o":{"x":0,"y":0},"t":68,"s":[-315.628,0,0],"to":[0,0,0],"ti":[-232.428,-7.546,0]},{"i":{"x":0.833,"y":0.926},"o":{"x":0.972,"y":0.391},"t":80,"s":[-46.828,-290.746,0],"to":[232.428,7.546,0],"ti":[0,0,0]},{"i":{"x":0.157,"y":0.716},"o":{"x":0.167,"y":0.167},"t":94,"s":[199.572,0,0],"to":[0,0,0],"ti":[-136.428,-1.6,0]},{"i":{"x":0.833,"y":0.897},"o":{"x":0.805,"y":0.308},"t":105,"s":[402.772,-204.8,0],"to":[136.428,1.6,0],"ti":[0,0,0]},{"i":{"x":0.111,"y":0.788},"o":{"x":0.167,"y":0.167},"t":117,"s":[586.772,0,0],"to":[0,0,0],"ti":[-134.828,-1.6,0]},{"i":{"x":0.833,"y":0.895},"o":{"x":0.657,"y":0.192},"t":125,"s":[756.372,-115.2,0],"to":[134.828,1.6,0],"ti":[0,0,0]},{"t":135,"s":[933.972,0,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":10,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":32,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":33,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":37,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":47,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":67,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":68,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":71,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":82,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":90,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":94,"s":[414.08,307.76,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":99,"s":[360.04,417.28,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":105,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":115,"s":[356.32,416.82,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":117,"s":[394.08,323.36,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":120,"s":[375.84,404.48,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":125,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":133,"s":[356.32,416.82,100]},{"t":135,"s":[394.08,323.36,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":5,"op":124,"st":5,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Null_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1462,720,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[],"ip":2,"op":362,"st":2,"bm":0},{"ddd":0,"ind":8,"ty":0,"nm":"Bounce_1","parent":7,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":35,"s":[-44]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":52,"s":[-19.578]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":58,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":66,"s":[26.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":88,"s":[-20.9]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":93,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":99,"s":[24.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":116,"s":[-25.3]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":119,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":122,"s":[15.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":137,"s":[-19.4]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":142,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":146,"s":[20.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":158,"s":[-14.7]},{"t":160,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":1,"y":1},"o":{"x":0.846,"y":0.058},"t":35,"s":[-1325.228,-905.882,0],"to":[246.828,34.746,0],"ti":[0,0,0]},{"i":{"x":0.094,"y":0.856},"o":{"x":0.167,"y":0.167},"t":58,"s":[-938.028,0,0],"to":[0,0,0],"ti":[-256.428,-4.346,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":1,"y":0.198},"t":73,"s":[-626.028,-529.146,0],"to":[256.428,4.346,0],"ti":[0,0,0]},{"i":{"x":0.163,"y":0.718},"o":{"x":0,"y":0},"t":93,"s":[-315.628,0,0],"to":[0,0,0],"ti":[-232.428,-7.546,0]},{"i":{"x":0.833,"y":0.926},"o":{"x":0.972,"y":0.391},"t":105,"s":[-46.828,-290.746,0],"to":[232.428,7.546,0],"ti":[0,0,0]},{"i":{"x":0.157,"y":0.716},"o":{"x":0.167,"y":0.167},"t":119,"s":[199.572,0,0],"to":[0,0,0],"ti":[-136.428,-1.6,0]},{"i":{"x":0.833,"y":0.897},"o":{"x":0.805,"y":0.308},"t":130,"s":[402.772,-204.8,0],"to":[136.428,1.6,0],"ti":[0,0,0]},{"i":{"x":0.111,"y":0.788},"o":{"x":0.167,"y":0.167},"t":142,"s":[586.772,0,0],"to":[0,0,0],"ti":[-134.828,-1.6,0]},{"i":{"x":0.833,"y":0.895},"o":{"x":0.657,"y":0.192},"t":150,"s":[756.372,-115.2,0],"to":[134.828,1.6,0],"ti":[0,0,0]},{"t":160,"s":[933.972,0,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":35,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":57,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":58,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":62,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":72,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":92,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":93,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":96,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":107,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":115,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":119,"s":[414.08,307.76,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":124,"s":[360.04,417.28,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":130,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":140,"s":[356.32,416.82,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":142,"s":[394.08,323.36,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":145,"s":[375.84,404.48,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":150,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":158,"s":[356.32,416.82,100]},{"t":160,"s":[394.08,323.36,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":30,"op":149,"st":30,"bm":0}],"markers":[]}'),
                y = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.0.0","a":"","k":"","d":"","tc":""},"fr":60,"ip":2,"op":122,"w":1280,"h":720,"nm":"FrameEffect_01-4_Out","ddd":0,"assets":[{"id":"image_0","w":35,"h":35,"u":"","p":"","e":1},{"id":"comp_0","layers":[{"ddd":0,"ind":3,"ty":2,"nm":"smile","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[19.875,20.125,0],"ix":2},"a":{"a":0,"k":[17.25,17.25,0],"ix":1},"s":{"a":0,"k":[108.7,108.7,100],"ix":6}},"ao":0,"ip":0,"op":914,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Null_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-8,720,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6}},"ao":0,"shapes":[],"ip":-1,"op":359,"st":-1,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"Bounce_3","parent":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":11,"s":[-44]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":28,"s":[-19.578]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":34,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":42,"s":[26.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":64,"s":[-20.9]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":69,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":75,"s":[24.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":92,"s":[-25.3]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":95,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":98,"s":[15.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":113,"s":[-19.4]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":118,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":122,"s":[20.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":134,"s":[-14.7]},{"t":136,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":1,"y":1},"o":{"x":0.846,"y":0.058},"t":11,"s":[-1325.228,-905.882,0],"to":[246.828,34.746,0],"ti":[0,0,0]},{"i":{"x":0.094,"y":0.856},"o":{"x":0.167,"y":0.167},"t":34,"s":[-938.028,0,0],"to":[0,0,0],"ti":[-256.428,-4.346,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":1,"y":0.198},"t":49,"s":[-626.028,-529.146,0],"to":[256.428,4.346,0],"ti":[0,0,0]},{"i":{"x":0.163,"y":0.718},"o":{"x":0,"y":0},"t":69,"s":[-315.628,0,0],"to":[0,0,0],"ti":[-232.428,-7.546,0]},{"i":{"x":0.833,"y":0.926},"o":{"x":0.972,"y":0.391},"t":81,"s":[-46.828,-290.746,0],"to":[232.428,7.546,0],"ti":[0,0,0]},{"i":{"x":0.157,"y":0.716},"o":{"x":0.167,"y":0.167},"t":95,"s":[199.572,0,0],"to":[0,0,0],"ti":[-136.428,-1.6,0]},{"i":{"x":0.833,"y":0.897},"o":{"x":0.805,"y":0.308},"t":106,"s":[402.772,-204.8,0],"to":[136.428,1.6,0],"ti":[0,0,0]},{"i":{"x":0.111,"y":0.788},"o":{"x":0.167,"y":0.167},"t":118,"s":[586.772,0,0],"to":[0,0,0],"ti":[-134.828,-1.6,0]},{"i":{"x":0.833,"y":0.895},"o":{"x":0.657,"y":0.192},"t":126,"s":[756.372,-115.2,0],"to":[134.828,1.6,0],"ti":[0,0,0]},{"t":136,"s":[933.972,0,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":11,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":33,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":34,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":38,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":48,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":68,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":69,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":72,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":83,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":91,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":95,"s":[414.08,307.76,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":100,"s":[360.04,417.28,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":106,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":116,"s":[356.32,416.82,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":118,"s":[394.08,323.36,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":121,"s":[375.84,404.48,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":126,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":134,"s":[356.32,416.82,100]},{"t":136,"s":[394.08,323.36,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":6,"op":125,"st":6,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Null_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[336,720,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6}},"ao":0,"shapes":[],"ip":21,"op":381,"st":21,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"Bounce_2","parent":3,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":22,"s":[-44]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":39,"s":[-19.578]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":45,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":53,"s":[26.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":75,"s":[-20.9]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":80,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":86,"s":[24.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":103,"s":[-25.3]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":106,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":109,"s":[15.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":124,"s":[-19.4]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":129,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":133,"s":[20.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":145,"s":[-14.7]},{"t":147,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":1,"y":1},"o":{"x":0.846,"y":0.058},"t":22,"s":[-1325.228,-905.882,0],"to":[246.828,34.746,0],"ti":[0,0,0]},{"i":{"x":0.094,"y":0.856},"o":{"x":0.167,"y":0.167},"t":45,"s":[-938.028,0,0],"to":[0,0,0],"ti":[-256.428,-4.346,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":1,"y":0.198},"t":60,"s":[-626.028,-529.146,0],"to":[256.428,4.346,0],"ti":[0,0,0]},{"i":{"x":0.163,"y":0.718},"o":{"x":0,"y":0},"t":80,"s":[-315.628,0,0],"to":[0,0,0],"ti":[-232.428,-7.546,0]},{"i":{"x":0.833,"y":0.926},"o":{"x":0.972,"y":0.391},"t":92,"s":[-46.828,-290.746,0],"to":[232.428,7.546,0],"ti":[0,0,0]},{"i":{"x":0.157,"y":0.716},"o":{"x":0.167,"y":0.167},"t":106,"s":[199.572,0,0],"to":[0,0,0],"ti":[-136.428,-1.6,0]},{"i":{"x":0.833,"y":0.897},"o":{"x":0.805,"y":0.308},"t":117,"s":[402.772,-204.8,0],"to":[136.428,1.6,0],"ti":[0,0,0]},{"i":{"x":0.111,"y":0.788},"o":{"x":0.167,"y":0.167},"t":129,"s":[586.772,0,0],"to":[0,0,0],"ti":[-134.828,-1.6,0]},{"i":{"x":0.833,"y":0.895},"o":{"x":0.657,"y":0.192},"t":137,"s":[756.372,-115.2,0],"to":[134.828,1.6,0],"ti":[0,0,0]},{"t":147,"s":[933.972,0,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":22,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":44,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":45,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":49,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":59,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":79,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":80,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":83,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":94,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":102,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":106,"s":[414.08,307.76,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":111,"s":[360.04,417.28,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":117,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":127,"s":[356.32,416.82,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":129,"s":[394.08,323.36,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":132,"s":[375.84,404.48,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":137,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":145,"s":[356.32,416.82,100]},{"t":147,"s":[394.08,323.36,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":17,"op":136,"st":17,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Null_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[634,720,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[],"ip":2,"op":362,"st":2,"bm":0},{"ddd":0,"ind":6,"ty":0,"nm":"Bounce_1","parent":5,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":-26,"s":[-44]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":-9,"s":[-19.578]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":-3,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":5,"s":[26.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":27,"s":[-20.9]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":32,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":38,"s":[24.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":55,"s":[-25.3]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":58,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":61,"s":[15.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":76,"s":[-19.4]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":81,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":85,"s":[20.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":97,"s":[-14.7]},{"t":99,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":1,"y":1},"o":{"x":0.846,"y":0.058},"t":-26,"s":[-1325.228,-905.882,0],"to":[246.828,34.746,0],"ti":[0,0,0]},{"i":{"x":0.094,"y":0.856},"o":{"x":0.167,"y":0.167},"t":-3,"s":[-938.028,0,0],"to":[0,0,0],"ti":[-256.428,-4.346,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":1,"y":0.198},"t":12,"s":[-626.028,-529.146,0],"to":[256.428,4.346,0],"ti":[0,0,0]},{"i":{"x":0.163,"y":0.718},"o":{"x":0,"y":0},"t":32,"s":[-315.628,0,0],"to":[0,0,0],"ti":[-232.428,-7.546,0]},{"i":{"x":0.833,"y":0.926},"o":{"x":0.972,"y":0.391},"t":44,"s":[-46.828,-290.746,0],"to":[232.428,7.546,0],"ti":[0,0,0]},{"i":{"x":0.157,"y":0.716},"o":{"x":0.167,"y":0.167},"t":58,"s":[199.572,0,0],"to":[0,0,0],"ti":[-136.428,-1.6,0]},{"i":{"x":0.833,"y":0.897},"o":{"x":0.805,"y":0.308},"t":69,"s":[402.772,-204.8,0],"to":[136.428,1.6,0],"ti":[0,0,0]},{"i":{"x":0.111,"y":0.788},"o":{"x":0.167,"y":0.167},"t":81,"s":[586.772,0,0],"to":[0,0,0],"ti":[-134.828,-1.6,0]},{"i":{"x":0.833,"y":0.895},"o":{"x":0.657,"y":0.192},"t":89,"s":[756.372,-115.2,0],"to":[134.828,1.6,0],"ti":[0,0,0]},{"t":99,"s":[933.972,0,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":-26,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":-4,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":-3,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":1,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":11,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":31,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":32,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":35,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":46,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":54,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":58,"s":[414.08,307.76,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":63,"s":[360.04,417.28,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":69,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":79,"s":[356.32,416.82,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":81,"s":[394.08,323.36,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":84,"s":[375.84,404.48,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":89,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":97,"s":[356.32,416.82,100]},{"t":99,"s":[394.08,323.36,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":-31,"op":104,"st":-31,"bm":0}],"markers":[]}'),
                d = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.0.0","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":120,"w":1280,"h":720,"nm":"FrameEffect_01-5_Out","ddd":0,"assets":[{"id":"image_0","w":35,"h":35,"u":"","p":"","e":1},{"id":"comp_0","layers":[{"ddd":0,"ind":3,"ty":2,"nm":"smile","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[19.875,20.125,0],"ix":2},"a":{"a":0,"k":[17.25,17.25,0],"ix":1},"s":{"a":0,"k":[108.7,108.7,100],"ix":6}},"ao":0,"ip":0,"op":914,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Null_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[2,720,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6}},"ao":0,"shapes":[],"ip":-1,"op":359,"st":-1,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"Bounce_3","parent":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":4,"s":[-44]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":21,"s":[-19.578]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":27,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":35,"s":[26.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":57,"s":[-20.9]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":62,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":68,"s":[24.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":85,"s":[-25.3]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":88,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":91,"s":[15.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":106,"s":[-19.4]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":111,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":115,"s":[20.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":127,"s":[-14.7]},{"t":129,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":1,"y":1},"o":{"x":0.846,"y":0.058},"t":4,"s":[-1325.228,-905.882,0],"to":[246.828,34.746,0],"ti":[0,0,0]},{"i":{"x":0.094,"y":0.856},"o":{"x":0.167,"y":0.167},"t":27,"s":[-938.028,0,0],"to":[0,0,0],"ti":[-256.428,-4.346,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":1,"y":0.198},"t":42,"s":[-626.028,-529.146,0],"to":[256.428,4.346,0],"ti":[0,0,0]},{"i":{"x":0.163,"y":0.718},"o":{"x":0,"y":0},"t":62,"s":[-315.628,0,0],"to":[0,0,0],"ti":[-232.428,-7.546,0]},{"i":{"x":0.833,"y":0.926},"o":{"x":0.972,"y":0.391},"t":74,"s":[-46.828,-290.746,0],"to":[232.428,7.546,0],"ti":[0,0,0]},{"i":{"x":0.157,"y":0.716},"o":{"x":0.167,"y":0.167},"t":88,"s":[199.572,0,0],"to":[0,0,0],"ti":[-136.428,-1.6,0]},{"i":{"x":0.833,"y":0.897},"o":{"x":0.805,"y":0.308},"t":99,"s":[402.772,-204.8,0],"to":[136.428,1.6,0],"ti":[0,0,0]},{"i":{"x":0.111,"y":0.788},"o":{"x":0.167,"y":0.167},"t":111,"s":[586.772,0,0],"to":[0,0,0],"ti":[-134.828,-1.6,0]},{"i":{"x":0.833,"y":0.895},"o":{"x":0.657,"y":0.192},"t":119,"s":[756.372,-115.2,0],"to":[134.828,1.6,0],"ti":[0,0,0]},{"t":129,"s":[933.972,0,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":4,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":26,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":27,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":31,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":41,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":61,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":62,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":65,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":76,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":84,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":88,"s":[414.08,307.76,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":93,"s":[360.04,417.28,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":99,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":109,"s":[356.32,416.82,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":111,"s":[394.08,323.36,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":114,"s":[375.84,404.48,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":119,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":127,"s":[356.32,416.82,100]},{"t":129,"s":[394.08,323.36,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":-1,"op":118,"st":-1,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Null_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[768,720,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6}},"ao":0,"shapes":[],"ip":21,"op":381,"st":21,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"Bounce_2","parent":3,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[-44]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":17,"s":[-19.578]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":23,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":31,"s":[26.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":53,"s":[-20.9]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":58,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":64,"s":[24.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":81,"s":[-25.3]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":84,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":87,"s":[15.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":102,"s":[-19.4]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":107,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":111,"s":[20.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":123,"s":[-14.7]},{"t":125,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":1,"y":1},"o":{"x":0.846,"y":0.058},"t":0,"s":[-1325.228,-905.882,0],"to":[246.828,34.746,0],"ti":[0,0,0]},{"i":{"x":0.094,"y":0.856},"o":{"x":0.167,"y":0.167},"t":23,"s":[-938.028,0,0],"to":[0,0,0],"ti":[-256.428,-4.346,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":1,"y":0.198},"t":38,"s":[-626.028,-529.146,0],"to":[256.428,4.346,0],"ti":[0,0,0]},{"i":{"x":0.163,"y":0.718},"o":{"x":0,"y":0},"t":58,"s":[-315.628,0,0],"to":[0,0,0],"ti":[-232.428,-7.546,0]},{"i":{"x":0.833,"y":0.926},"o":{"x":0.972,"y":0.391},"t":70,"s":[-46.828,-290.746,0],"to":[232.428,7.546,0],"ti":[0,0,0]},{"i":{"x":0.157,"y":0.716},"o":{"x":0.167,"y":0.167},"t":84,"s":[199.572,0,0],"to":[0,0,0],"ti":[-136.428,-1.6,0]},{"i":{"x":0.833,"y":0.897},"o":{"x":0.805,"y":0.308},"t":95,"s":[402.772,-204.8,0],"to":[136.428,1.6,0],"ti":[0,0,0]},{"i":{"x":0.111,"y":0.551},"o":{"x":0.167,"y":0.167},"t":107,"s":[586.772,0,0],"to":[0,0,0],"ti":[-134.828,-1.6,0]},{"i":{"x":0.833,"y":0.895},"o":{"x":0.657,"y":0.435},"t":115,"s":[756.372,-115.2,0],"to":[134.828,1.6,0],"ti":[0,0,0]},{"t":125,"s":[933.972,0,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":22,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":23,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":27,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":37,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":57,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":58,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":61,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":72,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":80,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":84,"s":[414.08,307.76,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":89,"s":[360.04,417.28,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":95,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":105,"s":[356.32,416.82,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":107,"s":[394.08,323.36,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":110,"s":[375.84,404.48,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":115,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":123,"s":[356.32,416.82,100]},{"t":125,"s":[394.08,323.36,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":-5,"op":125,"st":-5,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Null_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1498,720,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[],"ip":20,"op":413,"st":53,"bm":0},{"ddd":0,"ind":6,"ty":0,"nm":"Bounce_1","parent":5,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":19,"s":[-44]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":36,"s":[-19.578]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":42,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":50,"s":[26.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":72,"s":[-20.9]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":77,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":83,"s":[24.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":100,"s":[-25.3]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":103,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":106,"s":[15.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":121,"s":[-19.4]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":126,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":130,"s":[20.6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":142,"s":[-14.7]},{"t":144,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":1,"y":1},"o":{"x":0.846,"y":0.058},"t":19,"s":[-1325.228,-905.882,0],"to":[246.828,34.746,0],"ti":[0,0,0]},{"i":{"x":0.094,"y":0.856},"o":{"x":0.167,"y":0.167},"t":42,"s":[-938.028,0,0],"to":[0,0,0],"ti":[-256.428,-4.346,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":1,"y":0.198},"t":57,"s":[-626.028,-529.146,0],"to":[256.428,4.346,0],"ti":[0,0,0]},{"i":{"x":0.163,"y":0.718},"o":{"x":0,"y":0},"t":77,"s":[-315.628,0,0],"to":[0,0,0],"ti":[-232.428,-7.546,0]},{"i":{"x":0.833,"y":0.926},"o":{"x":0.972,"y":0.391},"t":89,"s":[-46.828,-290.746,0],"to":[232.428,7.546,0],"ti":[0,0,0]},{"i":{"x":0.157,"y":0.716},"o":{"x":0.167,"y":0.167},"t":103,"s":[199.572,0,0],"to":[0,0,0],"ti":[-136.428,-1.6,0]},{"i":{"x":0.833,"y":0.897},"o":{"x":0.805,"y":0.308},"t":114,"s":[402.772,-204.8,0],"to":[136.428,1.6,0],"ti":[0,0,0]},{"i":{"x":0.111,"y":0.788},"o":{"x":0.167,"y":0.167},"t":126,"s":[586.772,0,0],"to":[0,0,0],"ti":[-134.828,-1.6,0]},{"i":{"x":0.833,"y":0.895},"o":{"x":0.657,"y":0.192},"t":134,"s":[756.372,-115.2,0],"to":[134.828,1.6,0],"ti":[0,0,0]},{"t":144,"s":[933.972,0,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":19,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":41,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":42,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":46,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":56,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":76,"s":[321.28,497.12,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":77,"s":[457.6,277.92,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":80,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":91,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":99,"s":[367.52,450.08,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":103,"s":[414.08,307.76,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":108,"s":[360.04,417.28,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":114,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":124,"s":[356.32,416.82,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":126,"s":[394.08,323.36,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":129,"s":[375.84,404.48,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":134,"s":[380.32,380.32,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":142,"s":[356.32,416.82,100]},{"t":144,"s":[394.08,323.36,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":14,"op":149,"st":14,"bm":0}],"markers":[]}'),
                p = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.0.0","a":"","k":"","d":"","tc":""},"fr":60,"ip":3,"op":102,"w":1280,"h":720,"nm":"FrameEffect_02-1_Out","ddd":0,"assets":[{"id":"image_0","w":35,"h":35,"u":"","p":"","e":1},{"id":"comp_0","layers":[{"ddd":0,"ind":3,"ty":2,"nm":"smile","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[19.875,20.125,0],"ix":2},"a":{"a":0,"k":[17.25,17.25,0],"ix":1},"s":{"a":0,"k":[108.7,108.7,100],"ix":6}},"ao":0,"ip":0,"op":914,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":50,"s":[784,720,0],"to":[-73.6,0,0],"ti":[73.6,0,0]},{"t":104,"s":[342.4,720,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[130.88,130.88,100],"ix":6}},"ao":0,"shapes":[],"ip":50,"op":360,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"particle","parent":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.575,"y":1},"o":{"x":0.699,"y":0},"t":59,"s":[465.988,-410,0],"to":[-138.328,0,0],"ti":[138.328,0,0]},{"t":104,"s":[-363.982,-410,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":59,"op":960,"st":59,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"particle","parent":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.575,"y":1},"o":{"x":0.699,"y":0},"t":56,"s":[465.988,-272,0],"to":[-138.328,0,0],"ti":[138.328,0,0]},{"t":101,"s":[-363.982,-272,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":56,"op":957,"st":56,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"particle","parent":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.575,"y":1},"o":{"x":0.699,"y":0},"t":53,"s":[465.988,-136,0],"to":[-138.328,0,0],"ti":[138.328,0,0]},{"t":98,"s":[-363.982,-136,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":53,"op":954,"st":53,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"particle","parent":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.575,"y":1},"o":{"x":0.699,"y":0},"t":50,"s":[465.988,0,0],"to":[-138.328,0,0],"ti":[138.328,0,0]},{"t":95,"s":[-363.982,0,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":50,"op":951,"st":50,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[342.4,720,0],"to":[73.6,0,0],"ti":[-73.6,0,0]},{"t":54,"s":[784,720,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[130.88,130.88,100],"ix":6}},"ao":0,"shapes":[],"ip":0,"op":360,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":0,"nm":"particle","parent":6,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.301,"y":1},"o":{"x":0.425,"y":0},"t":9,"s":[-363.982,-410,0],"to":[138.328,0,0],"ti":[-138.328,0,0]},{"t":54,"s":[465.988,-410,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":9,"op":910,"st":9,"bm":0},{"ddd":0,"ind":8,"ty":0,"nm":"particle","parent":6,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.301,"y":1},"o":{"x":0.425,"y":0},"t":6,"s":[-363.982,-272,0],"to":[138.328,0,0],"ti":[-138.328,0,0]},{"t":51,"s":[465.988,-272,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":6,"op":907,"st":6,"bm":0},{"ddd":0,"ind":9,"ty":0,"nm":"particle","parent":6,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.301,"y":1},"o":{"x":0.425,"y":0},"t":3,"s":[-363.982,-136,0],"to":[138.328,0,0],"ti":[-138.328,0,0]},{"t":48,"s":[465.988,-136,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":3,"op":904,"st":3,"bm":0},{"ddd":0,"ind":10,"ty":0,"nm":"particle","parent":6,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.301,"y":1},"o":{"x":0.425,"y":0},"t":0,"s":[-363.982,0,0],"to":[138.328,0,0],"ti":[-138.328,0,0]},{"t":45,"s":[465.988,0,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":0,"op":901,"st":0,"bm":0}],"markers":[]}'),
                c = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.0.0","a":"","k":"","d":"","tc":""},"fr":60,"ip":3,"op":102,"w":1280,"h":720,"nm":"FrameEffect_02-2_Out","ddd":0,"assets":[{"id":"image_0","w":35,"h":35,"u":"","p":"","e":1},{"id":"comp_0","layers":[{"ddd":0,"ind":3,"ty":2,"nm":"smile","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[19.875,20.125,0],"ix":2},"a":{"a":0,"k":[17.25,17.25,0],"ix":1},"s":{"a":0,"k":[108.7,108.7,100],"ix":6}},"ao":0,"ip":0,"op":914,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":50,"s":[784,720,0],"to":[-73.6,0,0],"ti":[73.6,0,0]},{"t":104,"s":[342.4,720,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[130.88,130.88,100],"ix":6}},"ao":0,"shapes":[],"ip":50,"op":101,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"particle","parent":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.575,"y":1},"o":{"x":0.699,"y":0},"t":50,"s":[465.988,-410,0],"to":[-138.328,0,0],"ti":[138.328,0,0]},{"t":95,"s":[-363.982,-410,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":50,"op":101,"st":50,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"particle","parent":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.575,"y":1},"o":{"x":0.699,"y":0},"t":53,"s":[465.988,-272,0],"to":[-138.328,0,0],"ti":[138.328,0,0]},{"t":98,"s":[-363.982,-272,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":53,"op":101,"st":53,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"particle","parent":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.575,"y":1},"o":{"x":0.699,"y":0},"t":56,"s":[465.988,-136,0],"to":[-138.328,0,0],"ti":[138.328,0,0]},{"t":101,"s":[-363.982,-136,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":56,"op":101,"st":56,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"particle","parent":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.575,"y":1},"o":{"x":0.699,"y":0},"t":59,"s":[465.988,0,0],"to":[-138.328,0,0],"ti":[138.328,0,0]},{"t":104,"s":[-363.982,0,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":59,"op":101,"st":59,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[342.4,720,0],"to":[73.6,0,0],"ti":[-73.6,0,0]},{"t":54,"s":[784,720,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[130.88,130.88,100],"ix":6}},"ao":0,"shapes":[],"ip":0,"op":54,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":0,"nm":"particle","parent":6,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.301,"y":1},"o":{"x":0.425,"y":0},"t":0,"s":[-363.982,-410,0],"to":[138.328,0,0],"ti":[-138.328,0,0]},{"t":45,"s":[465.988,-410,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":0,"op":54,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":0,"nm":"particle","parent":6,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.301,"y":1},"o":{"x":0.425,"y":0},"t":3,"s":[-363.982,-272,0],"to":[138.328,0,0],"ti":[-138.328,0,0]},{"t":48,"s":[465.988,-272,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":3,"op":54,"st":3,"bm":0},{"ddd":0,"ind":9,"ty":0,"nm":"particle","parent":6,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.301,"y":1},"o":{"x":0.425,"y":0},"t":6,"s":[-363.982,-136,0],"to":[138.328,0,0],"ti":[-138.328,0,0]},{"t":51,"s":[465.988,-136,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":6,"op":54,"st":6,"bm":0},{"ddd":0,"ind":10,"ty":0,"nm":"particle","parent":6,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.301,"y":1},"o":{"x":0.425,"y":0},"t":9,"s":[-363.982,0,0],"to":[138.328,0,0],"ti":[-138.328,0,0]},{"t":54,"s":[465.988,0,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":9,"op":54,"st":9,"bm":0}],"markers":[]}'),
                l = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.0.0","a":"","k":"","d":"","tc":""},"fr":60,"ip":3,"op":102,"w":1280,"h":720,"nm":"FrameEffect_02-3_Out","ddd":0,"assets":[{"id":"image_0","w":35,"h":35,"u":"","p":"","e":1},{"id":"comp_0","layers":[{"ddd":0,"ind":3,"ty":2,"nm":"smile","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[19.875,20.125,0],"ix":2},"a":{"a":0,"k":[17.25,17.25,0],"ix":1},"s":{"a":0,"k":[108.7,108.7,100],"ix":6}},"ao":0,"ip":0,"op":914,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[784,720,0],"to":[-73.6,0,0],"ti":[73.6,0,0]},{"t":54,"s":[342.4,720,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[130.88,130.88,100],"ix":6}},"ao":0,"shapes":[],"ip":0,"op":51,"st":-50,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"particle","parent":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.575,"y":1},"o":{"x":0.699,"y":0},"t":0,"s":[465.988,-410,0],"to":[-138.328,0,0],"ti":[138.328,0,0]},{"t":45,"s":[-363.982,-410,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":1,"op":51,"st":-11,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"particle","parent":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.575,"y":1},"o":{"x":0.699,"y":0},"t":3,"s":[465.988,-272,0],"to":[-138.328,0,0],"ti":[138.328,0,0]},{"t":48,"s":[-363.982,-272,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":1,"op":51,"st":-8,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"particle","parent":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.575,"y":1},"o":{"x":0.699,"y":0},"t":6,"s":[465.988,-136,0],"to":[-138.328,0,0],"ti":[138.328,0,0]},{"t":51,"s":[-363.982,-136,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":1,"op":51,"st":-5,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"particle","parent":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.575,"y":1},"o":{"x":0.699,"y":0},"t":9,"s":[465.988,0,0],"to":[-138.328,0,0],"ti":[138.328,0,0]},{"t":54,"s":[-363.982,0,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":1,"op":51,"st":-2,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":50,"s":[342.4,720,0],"to":[73.6,0,0],"ti":[-73.6,0,0]},{"t":104,"s":[784,720,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[130.88,130.88,100],"ix":6}},"ao":0,"shapes":[],"ip":50,"op":104,"st":50,"bm":0},{"ddd":0,"ind":7,"ty":0,"nm":"particle","parent":6,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.301,"y":1},"o":{"x":0.425,"y":0},"t":50,"s":[-363.982,-410,0],"to":[138.328,0,0],"ti":[-138.328,0,0]},{"t":95,"s":[465.988,-410,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":50,"op":104,"st":39,"bm":0},{"ddd":0,"ind":8,"ty":0,"nm":"particle","parent":6,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.301,"y":1},"o":{"x":0.425,"y":0},"t":53,"s":[-363.982,-272,0],"to":[138.328,0,0],"ti":[-138.328,0,0]},{"t":98,"s":[465.988,-272,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":50,"op":104,"st":42,"bm":0},{"ddd":0,"ind":9,"ty":0,"nm":"particle","parent":6,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.301,"y":1},"o":{"x":0.425,"y":0},"t":56,"s":[-363.982,-136,0],"to":[138.328,0,0],"ti":[-138.328,0,0]},{"t":101,"s":[465.988,-136,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":50,"op":104,"st":45,"bm":0},{"ddd":0,"ind":10,"ty":0,"nm":"particle","parent":6,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.301,"y":1},"o":{"x":0.425,"y":0},"t":59,"s":[-363.982,0,0],"to":[138.328,0,0],"ti":[-138.328,0,0]},{"t":104,"s":[465.988,0,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":50,"op":104,"st":48,"bm":0}],"markers":[]}'),
                u = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.0.0","a":"","k":"","d":"","tc":""},"fr":60,"ip":3,"op":102,"w":1280,"h":720,"nm":"FrameEffect_02-4_Out","ddd":0,"assets":[{"id":"image_0","w":35,"h":35,"u":"","p":"","e":1},{"id":"comp_0","layers":[{"ddd":0,"ind":3,"ty":2,"nm":"smile","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[19.875,20.125,0],"ix":2},"a":{"a":0,"k":[17.25,17.25,0],"ix":1},"s":{"a":0,"k":[108.7,108.7,100],"ix":6}},"ao":0,"ip":0,"op":914,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[784,720,0],"to":[-73.6,0,0],"ti":[73.6,0,0]},{"t":54,"s":[342.4,720,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[130.88,130.88,100],"ix":6}},"ao":0,"shapes":[],"ip":0,"op":310,"st":-50,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"particle","parent":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.575,"y":1},"o":{"x":0.699,"y":0},"t":9,"s":[465.988,-410,0],"to":[-138.328,0,0],"ti":[138.328,0,0]},{"t":54,"s":[-363.982,-410,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":0,"op":55,"st":-15,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"particle","parent":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.575,"y":1},"o":{"x":0.699,"y":0},"t":6,"s":[465.988,-272,0],"to":[-138.328,0,0],"ti":[138.328,0,0]},{"t":51,"s":[-363.982,-272,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":0,"op":55,"st":-18,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"particle","parent":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.575,"y":1},"o":{"x":0.699,"y":0},"t":3,"s":[465.988,-136,0],"to":[-138.328,0,0],"ti":[138.328,0,0]},{"t":48,"s":[-363.982,-136,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":0,"op":55,"st":-21,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"particle","parent":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.575,"y":1},"o":{"x":0.699,"y":0},"t":0,"s":[465.988,0,0],"to":[-138.328,0,0],"ti":[138.328,0,0]},{"t":45,"s":[-363.982,0,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":0,"op":55,"st":-24,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":50,"s":[342.4,720,0],"to":[73.6,0,0],"ti":[-73.6,0,0]},{"t":104,"s":[784,720,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[130.88,130.88,100],"ix":6}},"ao":0,"shapes":[],"ip":50,"op":410,"st":50,"bm":0},{"ddd":0,"ind":7,"ty":0,"nm":"particle","parent":6,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.301,"y":1},"o":{"x":0.425,"y":0},"t":59,"s":[-363.982,-410,0],"to":[138.328,0,0],"ti":[-138.328,0,0]},{"t":104,"s":[465.988,-410,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":50,"op":105,"st":42,"bm":0},{"ddd":0,"ind":8,"ty":0,"nm":"particle","parent":6,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.301,"y":1},"o":{"x":0.425,"y":0},"t":56,"s":[-363.982,-272,0],"to":[138.328,0,0],"ti":[-138.328,0,0]},{"t":101,"s":[465.988,-272,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":50,"op":105,"st":39,"bm":0},{"ddd":0,"ind":9,"ty":0,"nm":"particle","parent":6,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.301,"y":1},"o":{"x":0.425,"y":0},"t":53,"s":[-363.982,-136,0],"to":[138.328,0,0],"ti":[-138.328,0,0]},{"t":98,"s":[465.988,-136,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":50,"op":105,"st":36,"bm":0},{"ddd":0,"ind":10,"ty":0,"nm":"particle","parent":6,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.301,"y":1},"o":{"x":0.425,"y":0},"t":50,"s":[-363.982,0,0],"to":[138.328,0,0],"ti":[-138.328,0,0]},{"t":95,"s":[465.988,0,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":50,"op":105,"st":33,"bm":0}],"markers":[]}'),
                k = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.0.0","a":"","k":"","d":"","tc":""},"fr":60,"ip":3,"op":102,"w":1280,"h":720,"nm":"FrameEffect_02-5_Out","ddd":0,"assets":[{"id":"image_0","w":35,"h":35,"u":"","p":"","e":1},{"id":"comp_0","layers":[{"ddd":0,"ind":3,"ty":2,"nm":"smile","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[19.875,20.125,0],"ix":2},"a":{"a":0,"k":[17.25,17.25,0],"ix":1},"s":{"a":0,"k":[108.7,108.7,100],"ix":6}},"ao":0,"ip":0,"op":914,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[784,720,0],"to":[-73.6,0,0],"ti":[73.6,0,0]},{"t":54,"s":[342.4,720,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[130.88,130.88,100],"ix":6}},"ao":0,"shapes":[],"ip":0,"op":310,"st":-50,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"particle","parent":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.575,"y":1},"o":{"x":0.699,"y":0},"t":0,"s":[465.988,-410,0],"to":[-138.328,0,0],"ti":[138.328,0,0]},{"t":45,"s":[-363.982,-410,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":0,"op":55,"st":-24,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"particle","parent":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.575,"y":1},"o":{"x":0.699,"y":0},"t":3,"s":[465.988,-272,0],"to":[-138.328,0,0],"ti":[138.328,0,0]},{"t":48,"s":[-363.982,-272,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":0,"op":55,"st":-21,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"particle","parent":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.575,"y":1},"o":{"x":0.699,"y":0},"t":6,"s":[465.988,-136,0],"to":[-138.328,0,0],"ti":[138.328,0,0]},{"t":51,"s":[-363.982,-136,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":0,"op":55,"st":-18,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"particle","parent":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.575,"y":1},"o":{"x":0.699,"y":0},"t":9,"s":[465.988,0,0],"to":[-138.328,0,0],"ti":[138.328,0,0]},{"t":54,"s":[-363.982,0,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":0,"op":55,"st":-15,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":50,"s":[342.4,720,0],"to":[73.6,0,0],"ti":[-73.6,0,0]},{"t":104,"s":[784,720,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[130.88,130.88,100],"ix":6}},"ao":0,"shapes":[],"ip":50,"op":410,"st":50,"bm":0},{"ddd":0,"ind":7,"ty":0,"nm":"particle","parent":6,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.301,"y":1},"o":{"x":0.425,"y":0},"t":59,"s":[-363.982,-410,0],"to":[138.328,0,0],"ti":[-138.328,0,0]},{"t":104,"s":[465.988,-410,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":50,"op":105,"st":42,"bm":0},{"ddd":0,"ind":8,"ty":0,"nm":"particle","parent":6,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.301,"y":1},"o":{"x":0.425,"y":0},"t":56,"s":[-363.982,-272,0],"to":[138.328,0,0],"ti":[-138.328,0,0]},{"t":101,"s":[465.988,-272,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":50,"op":105,"st":39,"bm":0},{"ddd":0,"ind":9,"ty":0,"nm":"particle","parent":6,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.301,"y":1},"o":{"x":0.425,"y":0},"t":53,"s":[-363.982,-136,0],"to":[138.328,0,0],"ti":[-138.328,0,0]},{"t":98,"s":[465.988,-136,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":50,"op":105,"st":36,"bm":0},{"ddd":0,"ind":10,"ty":0,"nm":"particle","parent":6,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.301,"y":1},"o":{"x":0.425,"y":0},"t":50,"s":[-363.982,0,0],"to":[138.328,0,0],"ti":[-138.328,0,0]},{"t":95,"s":[465.988,0,0]}],"ix":2},"a":{"a":0,"k":[20,40,0],"ix":1},"s":{"a":0,"k":[341.7,341.7,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":50,"op":105,"st":33,"bm":0}],"markers":[]}'),
                m = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.0.0","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":110,"w":1280,"h":720,"nm":"FrameEffect_07-1_Out","ddd":0,"assets":[{"id":"image_0","w":35,"h":35,"u":"","p":"","e":1},{"id":"comp_0","layers":[{"ddd":0,"ind":3,"ty":2,"nm":"smile","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[19.875,20.125,0],"ix":2},"a":{"a":0,"k":[17.25,17.25,0],"ix":1},"s":{"a":0,"k":[108.7,108.7,100],"ix":6}},"ao":0,"ip":0,"op":914,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1185.086,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":80,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":91.053,"s":[447.217,447.217,100]},{"t":110,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":82,"op":108,"st":80,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1002.02,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":77,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":88.053,"s":[447.217,447.217,100]},{"t":107,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":79,"op":105,"st":77,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[820.42,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":74,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":85.053,"s":[447.217,447.217,100]},{"t":104,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":76,"op":102,"st":74,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[638.82,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":71,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":82.053,"s":[447.217,447.217,100]},{"t":101,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":73,"op":99,"st":71,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[458.02,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":68,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":79.053,"s":[447.217,447.217,100]},{"t":98,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":70,"op":96,"st":68,"bm":0},{"ddd":0,"ind":6,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[278.02,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":65,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":76.053,"s":[447.217,447.217,100]},{"t":95,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":67,"op":93,"st":65,"bm":0},{"ddd":0,"ind":7,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[94.82,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":62,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":73.053,"s":[447.217,447.217,100]},{"t":92,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":64,"op":90,"st":62,"bm":0},{"ddd":0,"ind":8,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1185.086,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":59,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":70.053,"s":[447.217,447.217,100]},{"t":89,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":61,"op":87,"st":59,"bm":0},{"ddd":0,"ind":9,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1002.02,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":56,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":67.053,"s":[447.217,447.217,100]},{"t":86,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":58,"op":84,"st":56,"bm":0},{"ddd":0,"ind":10,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[820.42,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":53,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":64.053,"s":[447.217,447.217,100]},{"t":83,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":55,"op":81,"st":53,"bm":0},{"ddd":0,"ind":11,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[638.82,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":50,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":61.053,"s":[447.217,447.217,100]},{"t":80,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":52,"op":78,"st":50,"bm":0},{"ddd":0,"ind":12,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[458.02,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":47,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":58.053,"s":[447.217,447.217,100]},{"t":77,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":49,"op":75,"st":47,"bm":0},{"ddd":0,"ind":13,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[278.02,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":44,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":55.053,"s":[447.217,447.217,100]},{"t":74,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":46,"op":72,"st":44,"bm":0},{"ddd":0,"ind":14,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[94.82,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":41,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":52.053,"s":[447.217,447.217,100]},{"t":71,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":43,"op":69,"st":41,"bm":0},{"ddd":0,"ind":15,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1185.086,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":38,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":49.053,"s":[447.217,447.217,100]},{"t":68,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":40,"op":66,"st":38,"bm":0},{"ddd":0,"ind":16,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1002.02,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":35,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":46.053,"s":[447.217,447.217,100]},{"t":65,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":37,"op":63,"st":35,"bm":0},{"ddd":0,"ind":17,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[820.42,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":32,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":43.053,"s":[447.217,447.217,100]},{"t":62,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":34,"op":60,"st":32,"bm":0},{"ddd":0,"ind":18,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[638.82,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":29,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":40.053,"s":[447.217,447.217,100]},{"t":59,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":31,"op":57,"st":29,"bm":0},{"ddd":0,"ind":19,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[458.02,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":26,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":37.053,"s":[447.217,447.217,100]},{"t":56,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":28,"op":54,"st":26,"bm":0},{"ddd":0,"ind":20,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[278.02,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":23,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":34.053,"s":[447.217,447.217,100]},{"t":53,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":25,"op":51,"st":23,"bm":0},{"ddd":0,"ind":21,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[94.82,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":20,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":31.053,"s":[447.217,447.217,100]},{"t":50,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":22,"op":48,"st":20,"bm":0},{"ddd":0,"ind":22,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1185.086,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":17,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":28.053,"s":[447.217,447.217,100]},{"t":47,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":19,"op":45,"st":17,"bm":0},{"ddd":0,"ind":23,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1002.02,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":14,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":25.053,"s":[447.217,447.217,100]},{"t":44,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":16,"op":42,"st":14,"bm":0},{"ddd":0,"ind":24,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[820.42,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":11,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":22.053,"s":[447.217,447.217,100]},{"t":41,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":13,"op":39,"st":11,"bm":0},{"ddd":0,"ind":25,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[638.82,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":8,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":19.053,"s":[447.217,447.217,100]},{"t":38,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":10,"op":36,"st":8,"bm":0},{"ddd":0,"ind":26,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[458.02,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":5,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":16.053,"s":[447.217,447.217,100]},{"t":35,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":7,"op":33,"st":5,"bm":0},{"ddd":0,"ind":27,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[278.02,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":2,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":13.053,"s":[447.217,447.217,100]},{"t":32,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":4,"op":30,"st":2,"bm":0},{"ddd":0,"ind":28,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[94.82,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":-1,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":10.053,"s":[447.217,447.217,100]},{"t":29,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":1,"op":27,"st":-1,"bm":0}],"markers":[]}'),
                f = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.0.0","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":110,"w":1280,"h":720,"nm":"FrameEffect_07-2_Out","ddd":0,"assets":[{"id":"image_0","w":35,"h":35,"u":"","p":"","e":1},{"id":"comp_0","layers":[{"ddd":0,"ind":3,"ty":2,"nm":"smile","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[19.875,20.125,0],"ix":2},"a":{"a":0,"k":[17.25,17.25,0],"ix":1},"s":{"a":0,"k":[108.7,108.7,100],"ix":6}},"ao":0,"ip":0,"op":914,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1185.086,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":79,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":90.053,"s":[447.217,447.217,100]},{"t":109,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":81,"op":107,"st":79,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1002.02,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":76,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":87.053,"s":[447.217,447.217,100]},{"t":106,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":78,"op":104,"st":76,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[820.42,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":73,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":84.053,"s":[447.217,447.217,100]},{"t":103,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":75,"op":101,"st":73,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[638.82,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":70,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":81.053,"s":[447.217,447.217,100]},{"t":100,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":72,"op":98,"st":70,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[458.02,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":67,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":78.053,"s":[447.217,447.217,100]},{"t":97,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":69,"op":95,"st":67,"bm":0},{"ddd":0,"ind":6,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[278.02,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":64,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":75.053,"s":[447.217,447.217,100]},{"t":94,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":66,"op":92,"st":64,"bm":0},{"ddd":0,"ind":7,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[94.82,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":61,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":72.053,"s":[447.217,447.217,100]},{"t":91,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":63,"op":89,"st":61,"bm":0},{"ddd":0,"ind":8,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1185.086,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":58,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":69.053,"s":[447.217,447.217,100]},{"t":88,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":60,"op":86,"st":58,"bm":0},{"ddd":0,"ind":9,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1002.02,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":55,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":66.053,"s":[447.217,447.217,100]},{"t":85,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":57,"op":83,"st":55,"bm":0},{"ddd":0,"ind":10,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[820.42,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":52,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":63.053,"s":[447.217,447.217,100]},{"t":82,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":54,"op":80,"st":52,"bm":0},{"ddd":0,"ind":11,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[638.82,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":49,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":60.053,"s":[447.217,447.217,100]},{"t":79,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":51,"op":77,"st":49,"bm":0},{"ddd":0,"ind":12,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[458.02,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":46,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":57.053,"s":[447.217,447.217,100]},{"t":76,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":48,"op":74,"st":46,"bm":0},{"ddd":0,"ind":13,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[278.02,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":43,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":54.053,"s":[447.217,447.217,100]},{"t":73,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":45,"op":71,"st":43,"bm":0},{"ddd":0,"ind":14,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[94.82,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":40,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":51.053,"s":[447.217,447.217,100]},{"t":70,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":42,"op":68,"st":40,"bm":0},{"ddd":0,"ind":15,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1185.086,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":37,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":48.053,"s":[447.217,447.217,100]},{"t":67,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":39,"op":65,"st":37,"bm":0},{"ddd":0,"ind":16,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1002.02,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":34,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":45.053,"s":[447.217,447.217,100]},{"t":64,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":36,"op":62,"st":34,"bm":0},{"ddd":0,"ind":17,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[820.42,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":31,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":42.053,"s":[447.217,447.217,100]},{"t":61,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":33,"op":59,"st":31,"bm":0},{"ddd":0,"ind":18,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[638.82,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":28,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":39.053,"s":[447.217,447.217,100]},{"t":58,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":30,"op":56,"st":28,"bm":0},{"ddd":0,"ind":19,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[458.02,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":25,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":36.053,"s":[447.217,447.217,100]},{"t":55,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":27,"op":53,"st":25,"bm":0},{"ddd":0,"ind":20,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[278.02,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":22,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":33.053,"s":[447.217,447.217,100]},{"t":52,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":24,"op":50,"st":22,"bm":0},{"ddd":0,"ind":21,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[94.82,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":19,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":30.053,"s":[447.217,447.217,100]},{"t":49,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":21,"op":47,"st":19,"bm":0},{"ddd":0,"ind":22,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1185.086,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":16,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":27.053,"s":[447.217,447.217,100]},{"t":46,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":18,"op":44,"st":16,"bm":0},{"ddd":0,"ind":23,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1002.02,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":13,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":24.053,"s":[447.217,447.217,100]},{"t":43,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":15,"op":41,"st":13,"bm":0},{"ddd":0,"ind":24,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[820.42,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":10,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":21.053,"s":[447.217,447.217,100]},{"t":40,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":12,"op":38,"st":10,"bm":0},{"ddd":0,"ind":25,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[638.82,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":7,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":18.053,"s":[447.217,447.217,100]},{"t":37,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":9,"op":35,"st":7,"bm":0},{"ddd":0,"ind":26,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[458.02,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":4,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":15.053,"s":[447.217,447.217,100]},{"t":34,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":6,"op":32,"st":4,"bm":0},{"ddd":0,"ind":27,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[278.02,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":1,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":12.053,"s":[447.217,447.217,100]},{"t":31,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":3,"op":29,"st":1,"bm":0},{"ddd":0,"ind":28,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[94.82,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":-2,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":9.053,"s":[447.217,447.217,100]},{"t":28,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":0,"op":26,"st":-2,"bm":0}],"markers":[]}'),
                _ = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.0.0","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":110,"w":1280,"h":720,"nm":"FrameEffect_07-3_Out","ddd":0,"assets":[{"id":"image_0","w":35,"h":35,"u":"","p":"","e":1},{"id":"comp_0","layers":[{"ddd":0,"ind":3,"ty":2,"nm":"smile","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[19.875,20.125,0],"ix":2},"a":{"a":0,"k":[17.25,17.25,0],"ix":1},"s":{"a":0,"k":[108.7,108.7,100],"ix":6}},"ao":0,"ip":0,"op":914,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[94.82,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":-2,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":9.053,"s":[447.217,447.217,100]},{"t":28,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":0,"op":26,"st":-2,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[94.82,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":1,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":12.053,"s":[447.217,447.217,100]},{"t":31,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":3,"op":29,"st":1,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[94.82,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":4,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":15.053,"s":[447.217,447.217,100]},{"t":34,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":6,"op":32,"st":4,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[94.82,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":7,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":18.053,"s":[447.217,447.217,100]},{"t":37,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":9,"op":35,"st":7,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[278.02,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":10,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":21.053,"s":[447.217,447.217,100]},{"t":40,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":12,"op":38,"st":10,"bm":0},{"ddd":0,"ind":6,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[278.02,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":13,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":24.053,"s":[447.217,447.217,100]},{"t":43,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":15,"op":41,"st":13,"bm":0},{"ddd":0,"ind":7,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[278.02,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":16,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":27.053,"s":[447.217,447.217,100]},{"t":46,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":18,"op":44,"st":16,"bm":0},{"ddd":0,"ind":8,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[278.02,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":19,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":30.053,"s":[447.217,447.217,100]},{"t":49,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":21,"op":47,"st":19,"bm":0},{"ddd":0,"ind":9,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[458.02,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":22,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":33.053,"s":[447.217,447.217,100]},{"t":52,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":24,"op":50,"st":22,"bm":0},{"ddd":0,"ind":10,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[458.02,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":25,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":36.053,"s":[447.217,447.217,100]},{"t":55,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":27,"op":53,"st":25,"bm":0},{"ddd":0,"ind":11,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[458.02,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":28,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":39.053,"s":[447.217,447.217,100]},{"t":58,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":30,"op":56,"st":28,"bm":0},{"ddd":0,"ind":12,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[458.02,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":31,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":42.053,"s":[447.217,447.217,100]},{"t":61,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":33,"op":59,"st":31,"bm":0},{"ddd":0,"ind":13,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[638.82,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":34,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":45.053,"s":[447.217,447.217,100]},{"t":64,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":36,"op":62,"st":34,"bm":0},{"ddd":0,"ind":14,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[638.82,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":37,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":48.053,"s":[447.217,447.217,100]},{"t":67,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":39,"op":65,"st":37,"bm":0},{"ddd":0,"ind":15,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[638.82,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":40,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":51.053,"s":[447.217,447.217,100]},{"t":70,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":42,"op":68,"st":40,"bm":0},{"ddd":0,"ind":16,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[638.82,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":43,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":54.053,"s":[447.217,447.217,100]},{"t":73,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":45,"op":71,"st":43,"bm":0},{"ddd":0,"ind":17,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[820.42,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":46,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":57.053,"s":[447.217,447.217,100]},{"t":76,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":48,"op":74,"st":46,"bm":0},{"ddd":0,"ind":18,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[820.42,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":49,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":60.053,"s":[447.217,447.217,100]},{"t":79,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":51,"op":77,"st":49,"bm":0},{"ddd":0,"ind":19,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[820.42,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":52,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":63.053,"s":[447.217,447.217,100]},{"t":82,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":54,"op":80,"st":52,"bm":0},{"ddd":0,"ind":20,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[820.42,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":55,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":66.053,"s":[447.217,447.217,100]},{"t":85,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":57,"op":83,"st":55,"bm":0},{"ddd":0,"ind":21,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1002.02,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":58,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":69.053,"s":[447.217,447.217,100]},{"t":88,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":60,"op":86,"st":58,"bm":0},{"ddd":0,"ind":22,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1002.02,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":61,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":72.053,"s":[447.217,447.217,100]},{"t":91,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":63,"op":89,"st":61,"bm":0},{"ddd":0,"ind":23,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1002.02,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":64,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":75.053,"s":[447.217,447.217,100]},{"t":94,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":66,"op":92,"st":64,"bm":0},{"ddd":0,"ind":24,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1002.02,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":67,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":78.053,"s":[447.217,447.217,100]},{"t":97,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":69,"op":95,"st":67,"bm":0},{"ddd":0,"ind":25,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1185.086,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":70,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":81.053,"s":[447.217,447.217,100]},{"t":100,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":72,"op":98,"st":70,"bm":0},{"ddd":0,"ind":26,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1185.086,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":73,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":84.053,"s":[447.217,447.217,100]},{"t":103,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":75,"op":101,"st":73,"bm":0},{"ddd":0,"ind":27,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1185.086,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":76,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":87.053,"s":[447.217,447.217,100]},{"t":106,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":78,"op":104,"st":76,"bm":0},{"ddd":0,"ind":28,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1185.086,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":79,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":90.053,"s":[447.217,447.217,100]},{"t":109,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":81,"op":107,"st":79,"bm":0}],"markers":[]}'),
                E = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.0.0","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":110,"w":1280,"h":720,"nm":"FrameEffect_07-4_Out","ddd":0,"assets":[{"id":"image_0","w":35,"h":35,"u":"","p":"","e":1},{"id":"comp_0","layers":[{"ddd":0,"ind":3,"ty":2,"nm":"smile","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[19.875,20.125,0],"ix":2},"a":{"a":0,"k":[17.25,17.25,0],"ix":1},"s":{"a":0,"k":[108.7,108.7,100],"ix":6}},"ao":0,"ip":0,"op":914,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[94.82,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":79,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":90.053,"s":[447.217,447.217,100]},{"t":109,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":81,"op":107,"st":79,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[94.82,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":76,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":87.053,"s":[447.217,447.217,100]},{"t":106,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":78,"op":104,"st":76,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[94.82,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":73,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":84.053,"s":[447.217,447.217,100]},{"t":103,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":75,"op":101,"st":73,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[94.82,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":70,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":81.053,"s":[447.217,447.217,100]},{"t":100,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":72,"op":98,"st":70,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[278.02,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":67,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":78.053,"s":[447.217,447.217,100]},{"t":97,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":69,"op":95,"st":67,"bm":0},{"ddd":0,"ind":6,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[278.02,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":64,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":75.053,"s":[447.217,447.217,100]},{"t":94,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":66,"op":92,"st":64,"bm":0},{"ddd":0,"ind":7,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[278.02,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":61,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":72.053,"s":[447.217,447.217,100]},{"t":91,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":63,"op":89,"st":61,"bm":0},{"ddd":0,"ind":8,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[278.02,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":58,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":69.053,"s":[447.217,447.217,100]},{"t":88,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":60,"op":86,"st":58,"bm":0},{"ddd":0,"ind":9,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[458.02,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":55,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":66.053,"s":[447.217,447.217,100]},{"t":85,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":57,"op":83,"st":55,"bm":0},{"ddd":0,"ind":10,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[458.02,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":52,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":63.053,"s":[447.217,447.217,100]},{"t":82,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":54,"op":80,"st":52,"bm":0},{"ddd":0,"ind":11,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[458.02,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":49,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":60.053,"s":[447.217,447.217,100]},{"t":79,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":51,"op":77,"st":49,"bm":0},{"ddd":0,"ind":12,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[458.02,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":46,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":57.053,"s":[447.217,447.217,100]},{"t":76,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":48,"op":74,"st":46,"bm":0},{"ddd":0,"ind":13,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[638.82,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":43,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":54.053,"s":[447.217,447.217,100]},{"t":73,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":45,"op":71,"st":43,"bm":0},{"ddd":0,"ind":14,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[638.82,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":40,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":51.053,"s":[447.217,447.217,100]},{"t":70,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":42,"op":68,"st":40,"bm":0},{"ddd":0,"ind":15,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[638.82,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":37,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":48.053,"s":[447.217,447.217,100]},{"t":67,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":39,"op":65,"st":37,"bm":0},{"ddd":0,"ind":16,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[638.82,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":34,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":45.053,"s":[447.217,447.217,100]},{"t":64,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":36,"op":62,"st":34,"bm":0},{"ddd":0,"ind":17,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[820.42,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":31,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":42.053,"s":[447.217,447.217,100]},{"t":61,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":33,"op":59,"st":31,"bm":0},{"ddd":0,"ind":18,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[820.42,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":28,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":39.053,"s":[447.217,447.217,100]},{"t":58,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":30,"op":56,"st":28,"bm":0},{"ddd":0,"ind":19,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[820.42,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":25,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":36.053,"s":[447.217,447.217,100]},{"t":55,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":27,"op":53,"st":25,"bm":0},{"ddd":0,"ind":20,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[820.42,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":22,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":33.053,"s":[447.217,447.217,100]},{"t":52,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":24,"op":50,"st":22,"bm":0},{"ddd":0,"ind":21,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1002.02,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":19,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":30.053,"s":[447.217,447.217,100]},{"t":49,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":21,"op":47,"st":19,"bm":0},{"ddd":0,"ind":22,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1002.02,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":16,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":27.053,"s":[447.217,447.217,100]},{"t":46,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":18,"op":44,"st":16,"bm":0},{"ddd":0,"ind":23,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1002.02,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":13,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":24.053,"s":[447.217,447.217,100]},{"t":43,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":15,"op":41,"st":13,"bm":0},{"ddd":0,"ind":24,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1002.02,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":10,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":21.053,"s":[447.217,447.217,100]},{"t":40,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":12,"op":38,"st":10,"bm":0},{"ddd":0,"ind":25,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1185.086,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":7,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":18.053,"s":[447.217,447.217,100]},{"t":37,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":9,"op":35,"st":7,"bm":0},{"ddd":0,"ind":26,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1185.086,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":4,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":15.053,"s":[447.217,447.217,100]},{"t":34,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":6,"op":32,"st":4,"bm":0},{"ddd":0,"ind":27,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1185.086,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":1,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":12.053,"s":[447.217,447.217,100]},{"t":31,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":3,"op":29,"st":1,"bm":0},{"ddd":0,"ind":28,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1185.086,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":-2,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":9.053,"s":[447.217,447.217,100]},{"t":28,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":0,"op":26,"st":-2,"bm":0}],"markers":[]}'),
                h = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.0.0","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":110,"w":1280,"h":720,"nm":"FrameEffect_07-5_Out","ddd":0,"assets":[{"id":"image_0","w":35,"h":35,"u":"","p":"","e":1},{"id":"comp_0","layers":[{"ddd":0,"ind":3,"ty":2,"nm":"smile","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[19.875,20.125,0],"ix":2},"a":{"a":0,"k":[17.25,17.25,0],"ix":1},"s":{"a":0,"k":[108.7,108.7,100],"ix":6}},"ao":0,"ip":0,"op":914,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[638.82,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":-2,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":9.053,"s":[447.217,447.217,100]},{"t":28,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":0,"op":26,"st":-2,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[638.82,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":1,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":12.053,"s":[447.217,447.217,100]},{"t":31,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":3,"op":29,"st":1,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[638.82,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":4,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":15.053,"s":[447.217,447.217,100]},{"t":34,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":6,"op":32,"st":4,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[638.82,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":7,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":18.053,"s":[447.217,447.217,100]},{"t":37,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":9,"op":35,"st":7,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[458.02,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":10,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":21.053,"s":[447.217,447.217,100]},{"t":40,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":12,"op":38,"st":10,"bm":0},{"ddd":0,"ind":6,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[458.02,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":13,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":24.053,"s":[447.217,447.217,100]},{"t":43,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":15,"op":41,"st":13,"bm":0},{"ddd":0,"ind":7,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[458.02,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":16,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":27.053,"s":[447.217,447.217,100]},{"t":46,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":18,"op":44,"st":16,"bm":0},{"ddd":0,"ind":8,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[458.02,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":19,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":30.053,"s":[447.217,447.217,100]},{"t":49,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":21,"op":47,"st":19,"bm":0},{"ddd":0,"ind":9,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[278.02,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":22,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":33.053,"s":[447.217,447.217,100]},{"t":52,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":24,"op":50,"st":22,"bm":0},{"ddd":0,"ind":10,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[278.02,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":25,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":36.053,"s":[447.217,447.217,100]},{"t":55,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":27,"op":53,"st":25,"bm":0},{"ddd":0,"ind":11,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[278.02,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":28,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":39.053,"s":[447.217,447.217,100]},{"t":58,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":30,"op":56,"st":28,"bm":0},{"ddd":0,"ind":12,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[278.02,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":31,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":42.053,"s":[447.217,447.217,100]},{"t":61,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":33,"op":59,"st":31,"bm":0},{"ddd":0,"ind":13,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[94.82,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":34,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":45.053,"s":[447.217,447.217,100]},{"t":64,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":36,"op":62,"st":34,"bm":0},{"ddd":0,"ind":14,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[94.82,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":37,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":48.053,"s":[447.217,447.217,100]},{"t":67,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":39,"op":65,"st":37,"bm":0},{"ddd":0,"ind":15,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[94.82,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":40,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":51.053,"s":[447.217,447.217,100]},{"t":70,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":42,"op":68,"st":40,"bm":0},{"ddd":0,"ind":16,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[94.82,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":43,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":54.053,"s":[447.217,447.217,100]},{"t":73,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":45,"op":71,"st":43,"bm":0},{"ddd":0,"ind":17,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[820.42,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":10,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":21.053,"s":[447.217,447.217,100]},{"t":40,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":12,"op":38,"st":10,"bm":0},{"ddd":0,"ind":18,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[820.42,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":13,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":24.053,"s":[447.217,447.217,100]},{"t":43,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":15,"op":41,"st":13,"bm":0},{"ddd":0,"ind":19,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[820.42,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":16,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":27.053,"s":[447.217,447.217,100]},{"t":46,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":18,"op":44,"st":16,"bm":0},{"ddd":0,"ind":20,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[820.42,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":19,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":30.053,"s":[447.217,447.217,100]},{"t":49,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":21,"op":47,"st":19,"bm":0},{"ddd":0,"ind":21,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1002.02,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":22,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":33.053,"s":[447.217,447.217,100]},{"t":52,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":24,"op":50,"st":22,"bm":0},{"ddd":0,"ind":22,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1002.02,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":25,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":36.053,"s":[447.217,447.217,100]},{"t":55,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":27,"op":53,"st":25,"bm":0},{"ddd":0,"ind":23,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1002.02,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":28,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":39.053,"s":[447.217,447.217,100]},{"t":58,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":30,"op":56,"st":28,"bm":0},{"ddd":0,"ind":24,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1002.02,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":31,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":42.053,"s":[447.217,447.217,100]},{"t":61,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":33,"op":59,"st":31,"bm":0},{"ddd":0,"ind":25,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1185.086,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":34,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":45.053,"s":[447.217,447.217,100]},{"t":64,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":36,"op":62,"st":34,"bm":0},{"ddd":0,"ind":26,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1185.086,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":37,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":48.053,"s":[447.217,447.217,100]},{"t":67,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":39,"op":65,"st":37,"bm":0},{"ddd":0,"ind":27,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1185.086,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":40,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":51.053,"s":[447.217,447.217,100]},{"t":70,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":42,"op":68,"st":40,"bm":0},{"ddd":0,"ind":28,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1185.086,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":43,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":54.053,"s":[447.217,447.217,100]},{"t":73,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":45,"op":71,"st":43,"bm":0}],"markers":[]}'),
                b = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.0.0","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":110,"w":1280,"h":720,"nm":"FrameEffect_07-6_Out","ddd":0,"assets":[{"id":"image_0","w":35,"h":35,"u":"","p":"","e":1},{"id":"comp_0","layers":[{"ddd":0,"ind":3,"ty":2,"nm":"smile","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[19.875,20.125,0],"ix":2},"a":{"a":0,"k":[17.25,17.25,0],"ix":1},"s":{"a":0,"k":[108.7,108.7,100],"ix":6}},"ao":0,"ip":0,"op":914,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1185.086,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":-2,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":9.053,"s":[447.217,447.217,100]},{"t":28,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":0,"op":26,"st":-2,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1002.02,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":1,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":12.053,"s":[447.217,447.217,100]},{"t":31,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":3,"op":29,"st":1,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[820.42,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":4,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":15.053,"s":[447.217,447.217,100]},{"t":34,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":6,"op":32,"st":4,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[638.82,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":7,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":18.053,"s":[447.217,447.217,100]},{"t":37,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":9,"op":35,"st":7,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[458.02,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":10,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":21.053,"s":[447.217,447.217,100]},{"t":40,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":12,"op":38,"st":10,"bm":0},{"ddd":0,"ind":6,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[278.02,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":13,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":24.053,"s":[447.217,447.217,100]},{"t":43,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":15,"op":41,"st":13,"bm":0},{"ddd":0,"ind":7,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[94.82,274.563,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":16,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":27.053,"s":[447.217,447.217,100]},{"t":46,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":18,"op":44,"st":16,"bm":0},{"ddd":0,"ind":8,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1185.086,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":37,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":48.053,"s":[447.217,447.217,100]},{"t":67,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":39,"op":65,"st":37,"bm":0},{"ddd":0,"ind":9,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1002.02,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":34,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":45.053,"s":[447.217,447.217,100]},{"t":64,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":36,"op":62,"st":34,"bm":0},{"ddd":0,"ind":10,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[820.42,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":31,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":42.053,"s":[447.217,447.217,100]},{"t":61,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":33,"op":59,"st":31,"bm":0},{"ddd":0,"ind":11,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[638.82,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":28,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":39.053,"s":[447.217,447.217,100]},{"t":58,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":30,"op":56,"st":28,"bm":0},{"ddd":0,"ind":12,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[458.02,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":25,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":36.053,"s":[447.217,447.217,100]},{"t":55,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":27,"op":53,"st":25,"bm":0},{"ddd":0,"ind":13,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[278.02,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":22,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":33.053,"s":[447.217,447.217,100]},{"t":52,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":24,"op":50,"st":22,"bm":0},{"ddd":0,"ind":14,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[94.82,93.949,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":19,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":30.053,"s":[447.217,447.217,100]},{"t":49,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":21,"op":47,"st":19,"bm":0},{"ddd":0,"ind":15,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[94.82,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":-2,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":9.053,"s":[447.217,447.217,100]},{"t":28,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":0,"op":26,"st":-2,"bm":0},{"ddd":0,"ind":16,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[278.02,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":1,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":12.053,"s":[447.217,447.217,100]},{"t":31,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":3,"op":29,"st":1,"bm":0},{"ddd":0,"ind":17,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[458.02,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":4,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":15.053,"s":[447.217,447.217,100]},{"t":34,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":6,"op":32,"st":4,"bm":0},{"ddd":0,"ind":18,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[638.82,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":7,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":18.053,"s":[447.217,447.217,100]},{"t":37,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":9,"op":35,"st":7,"bm":0},{"ddd":0,"ind":19,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[820.42,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":10,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":21.053,"s":[447.217,447.217,100]},{"t":40,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":12,"op":38,"st":10,"bm":0},{"ddd":0,"ind":20,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1002.02,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":13,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":24.053,"s":[447.217,447.217,100]},{"t":43,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":15,"op":41,"st":13,"bm":0},{"ddd":0,"ind":21,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1185.086,452.56,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":16,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":27.053,"s":[447.217,447.217,100]},{"t":46,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":18,"op":44,"st":16,"bm":0},{"ddd":0,"ind":22,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1185.086,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":19,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":30.053,"s":[447.217,447.217,100]},{"t":49,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":21,"op":47,"st":19,"bm":0},{"ddd":0,"ind":23,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1002.02,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":22,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":33.053,"s":[447.217,447.217,100]},{"t":52,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":24,"op":50,"st":22,"bm":0},{"ddd":0,"ind":24,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[820.42,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":25,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":36.053,"s":[447.217,447.217,100]},{"t":55,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":27,"op":53,"st":25,"bm":0},{"ddd":0,"ind":25,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[638.82,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":28,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":39.053,"s":[447.217,447.217,100]},{"t":58,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":30,"op":56,"st":28,"bm":0},{"ddd":0,"ind":26,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[458.02,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":31,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":42.053,"s":[447.217,447.217,100]},{"t":61,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":33,"op":59,"st":31,"bm":0},{"ddd":0,"ind":27,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[278.02,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":34,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":45.053,"s":[447.217,447.217,100]},{"t":64,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":36,"op":62,"st":34,"bm":0},{"ddd":0,"ind":28,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[94.82,630.557,0],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":37,"s":[0,0,100]},{"i":{"x":[1,1,0.833],"y":[1,1,17.667]},"o":{"x":[0.727,0.727,0.333],"y":[0,0,0]},"t":48.053,"s":[447.217,447.217,100]},{"t":67,"s":[0,0,100]}],"ix":6}},"ao":0,"w":40,"h":40,"ip":39,"op":65,"st":37,"bm":0}],"markers":[]}'),
                I = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.0.0","a":"","k":"","d":"","tc":""},"fr":60,"ip":7,"op":83,"w":1280,"h":720,"nm":"FrameEffect_09-1_Out","ddd":0,"assets":[{"id":"image_0","w":35,"h":35,"u":"","p":"","e":1},{"id":"comp_0","layers":[{"ddd":0,"ind":3,"ty":2,"nm":"smile","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[19.875,20.125,0],"ix":2},"a":{"a":0,"k":[17.25,17.25,0],"ix":1},"s":{"a":0,"k":[108.7,108.7,100],"ix":6}},"ao":0,"ip":0,"op":914,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":32,"s":[809.6,-236.8,0],"to":[0,199.467,0],"ti":[0,-199.467,0]},{"t":87,"s":[809.6,960,0]}],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":0,"k":[512,512,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":32,"op":88,"st":30,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":43,"s":[313.6,-236.8,0],"to":[0,92.687,0],"ti":[0,-106.78,0]},{"t":77,"s":[313.6,960,0]}],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":0,"k":[583.2,583.2,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":43,"op":78,"st":41,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":21,"s":[1065.6,-236.8,0],"to":[0,92.687,0],"ti":[0,-106.78,0]},{"t":55,"s":[1065.6,960,0]}],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":0,"k":[583.2,583.2,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":21,"op":56,"st":19,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":9,"s":[704,-236.8,0],"to":[0,199.467,0],"ti":[0,-199.467,0]},{"t":77,"s":[704,960,0]}],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":0,"k":[412.8,412.8,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":9,"op":77,"st":7,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":2,"s":[156.8,-236.8,0],"to":[0,199.467,0],"ti":[0,-199.467,0]},{"t":57,"s":[156.8,960,0]}],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":0,"k":[512,512,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":2,"op":58,"st":0,"bm":0}],"markers":[]}'),
                O = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.0.0","a":"","k":"","d":"","tc":""},"fr":60,"ip":11,"op":87,"w":1280,"h":720,"nm":"FrameEffect_09-2_Out","ddd":0,"assets":[{"id":"image_0","w":35,"h":35,"u":"","p":"","e":1},{"id":"comp_0","layers":[{"ddd":0,"ind":3,"ty":2,"nm":"smile","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[19.875,20.125,0],"ix":2},"a":{"a":0,"k":[17.25,17.25,0],"ix":1},"s":{"a":0,"k":[108.7,108.7,100],"ix":6}},"ao":0,"ip":0,"op":914,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":2,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":24,"s":[984.8,956,0],"to":[0,0,0],"ti":[0,0,0]},{"t":62,"s":[984.8,-240.8,0]}],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":0,"k":[651,651,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":12,"op":103,"st":10,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":8,"s":[549.6,960,0],"to":[0,0,0],"ti":[0,0,0]},{"t":53,"s":[549.6,-236.8,0]}],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":0,"k":[512,512,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":8,"op":102,"st":6,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":19,"s":[313.6,960,0],"to":[0,0,0],"ti":[0,0,0]},{"t":73,"s":[313.6,-236.8,0]}],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":0,"k":[552,552,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":19,"op":103,"st":17,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":45,"s":[1065.6,960,0],"to":[0,0,0],"ti":[0,0,0]},{"t":82,"s":[1065.6,-236.8,0]}],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":0,"k":[472,472,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":26,"op":103,"st":24,"bm":0},{"ddd":0,"ind":6,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":17,"s":[704,960,0],"to":[0,0,0],"ti":[0,0,0]},{"t":85,"s":[704,-236.8,0]}],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":0,"k":[352,352,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":17,"op":118,"st":15,"bm":0}],"markers":[]}'),
                v = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.0.0","a":"","k":"","d":"","tc":""},"fr":60,"ip":11,"op":87,"w":1280,"h":720,"nm":"FrameEffect_09-3_Out","ddd":0,"assets":[{"id":"image_0","w":35,"h":35,"u":"","p":"","e":1},{"id":"comp_0","layers":[{"ddd":0,"ind":3,"ty":2,"nm":"smile","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[19.875,20.125,0],"ix":2},"a":{"a":0,"k":[17.25,17.25,0],"ix":1},"s":{"a":0,"k":[108.7,108.7,100],"ix":6}},"ao":0,"ip":0,"op":914,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":2,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":22,"s":[-280,152,0],"to":[0,0,0],"ti":[0,0,0]},{"t":87,"s":[1520,156,0]}],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":0,"k":[353,353,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":22,"op":113,"st":20,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":10,"s":[-280,584,0],"to":[0,0,0],"ti":[0,0,0]},{"t":78,"s":[1520,588,0]}],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":0,"k":[385.1,385.1,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":10,"op":104,"st":8,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":14,"s":[-280,184,0],"to":[0,0,0],"ti":[0,0,0]},{"t":67,"s":[1520,188,0]}],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":0,"k":[512,512,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":14,"op":98,"st":12,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":28,"s":[-280,344,0],"to":[0,0,0],"ti":[0,0,0]},{"t":71,"s":[1520,348,0]}],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":0,"k":[621.1,621.1,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":29,"op":106,"st":27,"bm":0},{"ddd":0,"ind":6,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":34,"s":[-280,472,0],"to":[0,0,0],"ti":[0,0,0]},{"t":87,"s":[1520,476,0]}],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":0,"k":[512,512,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":19,"op":120,"st":17,"bm":0}],"markers":[]}'),
                w = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.0.0","a":"","k":"","d":"","tc":""},"fr":60,"ip":13,"op":89,"w":1280,"h":720,"nm":"FrameEffect_09-4_Out","ddd":0,"assets":[{"id":"image_0","w":35,"h":35,"u":"","p":"","e":1},{"id":"comp_0","layers":[{"ddd":0,"ind":3,"ty":2,"nm":"smile","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[19.875,20.125,0],"ix":2},"a":{"a":0,"k":[17.25,17.25,0],"ix":1},"s":{"a":0,"k":[108.7,108.7,100],"ix":6}},"ao":0,"ip":0,"op":914,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":18,"s":[1520,156,0],"to":[0,0,0],"ti":[0,0,0]},{"t":76,"s":[-280,152,0]}],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":0,"k":[353,353,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":18,"op":109,"st":16,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":9,"s":[1520,588,0],"to":[0,0,0],"ti":[0,0,0]},{"t":73,"s":[-280,584,0]}],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":0,"k":[385.1,385.1,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":9,"op":103,"st":7,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":29,"s":[1520,496,0],"to":[0,0,0],"ti":[0,0,0]},{"t":78,"s":[-280,492,0]}],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":0,"k":[512,512,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":29,"op":113,"st":27,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":41,"s":[1520,264,0],"to":[0,0,0],"ti":[0,0,0]},{"t":79,"s":[-280,260,0]}],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":0,"k":[621.1,621.1,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":41,"op":118,"st":39,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":17,"s":[1520,200,0],"to":[0,0,0],"ti":[0,0,0]},{"t":59,"s":[-280,196,0]}],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":0,"k":[512,512,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":3,"op":104,"st":1,"bm":0}],"markers":[]}'),
                g = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.0.0","a":"","k":"","d":"","tc":""},"fr":60,"ip":13,"op":89,"w":1280,"h":720,"nm":"FrameEffect_09-5_Out","ddd":0,"assets":[{"id":"image_0","w":35,"h":35,"u":"","p":"","e":1},{"id":"comp_0","layers":[{"ddd":0,"ind":3,"ty":2,"nm":"smile","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[19.875,20.125,0],"ix":2},"a":{"a":0,"k":[17.25,17.25,0],"ix":1},"s":{"a":0,"k":[108.7,108.7,100],"ix":6}},"ao":0,"ip":0,"op":914,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":45,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":18,"s":[136.54,-437.616,0],"to":[0,0,0],"ti":[0,0,0]},{"t":76,"s":[1406.504,838.004,0]}],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":0,"k":[353,353,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":18,"op":109,"st":16,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":45,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":30,"s":[-676.93,-288.146,0],"to":[0,0,0],"ti":[0,0,0]},{"t":60,"s":[593.034,987.474,0]}],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":0,"k":[702.1,702.1,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":29,"op":123,"st":27,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":45,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":9,"s":[-168.93,-132.146,0],"to":[0,0,0],"ti":[0,0,0]},{"t":73,"s":[1101.034,1143.474,0]}],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":0,"k":[385.1,385.1,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":9,"op":103,"st":7,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":45,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":29,"s":[356.124,-653.2,0],"to":[0,0,0],"ti":[0,0,0]},{"t":66,"s":[1626.087,622.42,0]}],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":0,"k":[512,512,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":29,"op":113,"st":27,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":45,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":29,"s":[-103.876,-197.2,0],"to":[0,0,0],"ti":[0,0,0]},{"t":78,"s":[1166.087,1078.42,0]}],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":0,"k":[512,512,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":29,"op":113,"st":27,"bm":0},{"ddd":0,"ind":6,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":45,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":41,"s":[60.172,-361.249,0],"to":[0,0,0],"ti":[0,0,0]},{"t":79,"s":[1330.136,914.372,0]}],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":0,"k":[621.1,621.1,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":41,"op":118,"st":39,"bm":0},{"ddd":0,"ind":7,"ty":0,"nm":"particle","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":45,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":17,"s":[105.427,-406.504,0],"to":[0,0,0],"ti":[0,0,0]},{"t":59,"s":[1375.391,869.117,0]}],"ix":2},"a":{"a":0,"k":[20,20,0],"ix":1},"s":{"a":0,"k":[512,512,100],"ix":6}},"ao":0,"w":40,"h":40,"ip":3,"op":104,"st":1,"bm":0}],"markers":[]}');
            var S = o(135855),
                T = o(874049),
                A = o(473903),
                C = o(775173),
                N = o(38004),
                P = o(143692),
                L = o(473708);

            function D(t, i, o) {
                i in t ? Object.defineProperty(t, i, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[i] = o;
                return t
            }
            var R, M = {
                    start: 10,
                    end: 15
                },
                U = {
                    BASIC: [r],
                    PREMIUM: [s, n, x, y, d, p, c, l, u, k, m, f, _, E, h, b, I, O, v, w, g]
                },
                j = (D(R = {}, P.q.BASIC, U.BASIC), D(R, P.q.PREMIUM, U.PREMIUM), R),
                Z = a().memoize((function(t) {
                    return new Promise((function(i) {
                        var o = new Image;
                        o.src = t;
                        o.crossOrigin = "Anonymous";
                        o.onload = function() {
                            var e = P.v * (0, T.x_)();
                            if (o.width === e && o.height === e) i(t);
                            else {
                                var a, r = document.createElement("canvas");
                                r.width = e;
                                r.height = e;
                                null === (a = r.getContext("2d")) || void 0 === a || a.drawImage(o, 0, 0);
                                i(r.toDataURL("image/png"))
                            }
                        }
                    }))
                })),
                F = function(t, i) {
                    var o = j[t];
                    if (null != i && t === P.q.PREMIUM) {
                        var e = i.end + 1;
                        return Math.floor(Math.random() * (i.start - e) + e)
                    }
                    return Math.floor(Math.random() * o.length)
                };

            function G(t) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P.v;
                if (null != t.id) {
                    var o;
                    return C.ZP.getEmojiURL({
                        id: t.id,
                        animated: null !== (o = t.animated) && void 0 !== o && o,
                        size: i
                    })
                }
                var e = S.ZP.convertSurrogateToName(t.name, !1),
                    a = S.ZP.getByName(e);
                return null != a ? N.ZP.getURL(a.surrogates) : ""
            }

            function H(t, i) {
                var o;
                return a()(t).map((function(t) {
                    return null !== (o = t[i]) && void 0 !== o ? o : null
                })).filter((function(t) {
                    return null != t
                })).uniq().value()
            }

            function V(t) {
                if (t.length < 1) return "";
                var i, o, e, a = H(t, "userId"),
                    r = H(t, "emojiName"),
                    s = r.length < 2 ? null !== (i = null == r ? void 0 : r[0]) && void 0 !== i ? i : "" : r.join(", ");
                if (a.length < 1) return "";
                if (1 === a.length) {
                    var n;
                    return L.Z.Messages.A11Y_ANNOUNCEMENT_VOICE_CHANNEL_EFFECTS_SINGLE.format({
                        firstUsername: null === (n = A.default.getUser(a[0])) || void 0 === n ? void 0 : n.username,
                        emojiNames: s
                    })
                }
                if (2 === a.length) {
                    var x, y;
                    return L.Z.Messages.A11Y_ANNOUNCEMENT_VOICE_CHANNEL_EFFECTS_DOUBLE.format({
                        firstUsername: null === (x = A.default.getUser(a[0])) || void 0 === x ? void 0 : x.username,
                        secondUsername: null === (y = A.default.getUser(a[1])) || void 0 === y ? void 0 : y.username,
                        emojiNames: s
                    })
                }
                return L.Z.Messages.A11Y_ANNOUNCEMENT_VOICE_CHANNEL_EFFECTS_MULTIPLE.format({
                    firstUsername: null === (o = A.default.getUser(a[0])) || void 0 === o ? void 0 : o.username,
                    secondUsername: null === (e = A.default.getUser(a[1])) || void 0 === e ? void 0 : e.username,
                    count: a.length - 2,
                    emojiNames: s
                })
            }
        },
        138049: (t, i, o) => {
            "use strict";
            o.d(i, {
                Z: () => Q
            });
            var e = o(238736),
                a = o.n(e),
                r = o(877533),
                s = o.n(r),
                n = o(110251),
                x = o.n(n),
                y = o(496486),
                d = o.n(y),
                p = o(202351),
                c = o(744564),
                l = o(241166),
                u = o(296602),
                k = o(525077),
                m = o(652591),
                f = o(120415),
                _ = o(310126),
                E = o(79251),
                h = o(887643),
                b = o(2590),
                I = o(453790),
                O = o(460214),
                v = o(734155);

            function w(t, i) {
                (null == i || i > t.length) && (i = t.length);
                for (var o = 0, e = new Array(i); o < i; o++) e[o] = t[o];
                return e
            }

            function g(t, i) {
                if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function")
            }

            function S(t, i, o) {
                i in t ? Object.defineProperty(t, i, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[i] = o;
                return t
            }

            function T(t) {
                T = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return T(t)
            }

            function A(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var o = null != arguments[i] ? arguments[i] : {},
                        e = Object.keys(o);
                    "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(o).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(o, t).enumerable
                    }))));
                    e.forEach((function(i) {
                        S(t, i, o[i])
                    }))
                }
                return t
            }

            function C(t, i) {
                i = null != i ? i : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : function(t, i) {
                    var o = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var e = Object.getOwnPropertySymbols(t);
                        i && (e = e.filter((function(i) {
                            return Object.getOwnPropertyDescriptor(t, i).enumerable
                        })));
                        o.push.apply(o, e)
                    }
                    return o
                }(Object(i)).forEach((function(o) {
                    Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(i, o))
                }));
                return t
            }

            function N(t, i) {
                return !i || "object" !== D(i) && "function" != typeof i ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : i
            }

            function P(t, i) {
                P = Object.setPrototypeOf || function(t, i) {
                    t.__proto__ = i;
                    return t
                };
                return P(t, i)
            }

            function L(t) {
                return function(t) {
                    if (Array.isArray(t)) return w(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, i) {
                    if (!t) return;
                    if ("string" == typeof t) return w(t, i);
                    var o = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === o && t.constructor && (o = t.constructor.name);
                    if ("Map" === o || "Set" === o) return Array.from(o);
                    if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return w(t, i)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var D = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function R(t) {
                var i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var o, e = T(t);
                    if (i) {
                        var a = T(this).constructor;
                        o = Reflect.construct(e, arguments, a)
                    } else o = e.apply(this, arguments);
                    return N(this, o)
                }
            }
            var M = new u.Z("KeybindsStore"),
                U = {},
                j = {},
                Z = 0,
                F = !0,
                G = {},
                H = [b.kg4.PUSH_TO_TALK, b.kg4.TOGGLE_OVERLAY_INPUT_LOCK, b.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET];

            function V(t) {
                if (f.FB) _.ZP.inputEventUnregister(parseInt(t, 10));
                else {
                    if (U[t]) {
                        var i = j[t],
                            o = G[i.action];
                        !0 === (null == o ? void 0 : o.isPressed) && v.nextTick((function() {
                            return o.onTrigger(!1, i)
                        }));
                        U[t].reset();
                        U[t] = null
                    }
                }
            }

            function Y(t) {
                if (F && !__OVERLAY__) {
                    var i = t.shortcut,
                        o = t.action,
                        e = t.enabled;
                    if ("" !== i && null != i && o !== b.kg4.UNASSIGNED && e)
                        if (null != G[o]) {
                            var r = t.id,
                                n = G[o].keyEvents;
                            ! function(t, i, o, e) {
                                if (f.FB) _.ZP.inputEventRegister(parseInt(t), i, o, e);
                                else {
                                    V(t);
                                    var r = s()(new(a())(document));
                                    e.keyup && r.bindGlobal((0, E.BB)(i), (function() {
                                        return o(!1)
                                    }), "keyup");
                                    e.keydown && r.bindGlobal((0, E.BB)(i), (function() {
                                        return o(!0)
                                    }), "keydown");
                                    U[t] = r
                                }
                            }(r, i, (function(t) {
                                return function(t, i) {
                                    var o = j[t];
                                    null != o && G[o.action].onTrigger(i, o)
                                }(r, t)
                            }), A({
                                focused: !0,
                                blurred: !0,
                                keydown: !1,
                                keyup: !1
                            }, n));
                            l.Z.validateKeybind((0, E.BB)(t.shortcut))
                        } else M.error("[kb store] KeybindStore: Looking for callback action ".concat(o, " but it doesn't exist in this version. Skipping"))
                }
            }

            function B(t) {
                var i = A({
                    id: Z.toString(),
                    enabled: !0,
                    action: b.kg4.UNASSIGNED,
                    shortcut: [],
                    managed: !1,
                    params: {}
                }, t);
                j = C(A({}, j), S({}, i.id, i));
                Z += 1;
                return i
            }

            function W(t) {
                V(t.id);
                delete(j = A({}, j))[t.id]
            }

            function K(t) {
                var i = t.keybind;
                j = C(A({}, j), S({}, i.id, i));
                if (!__OVERLAY__) {
                    m.default.track(b.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
                        keybind_action: i.action,
                        keybind_is_bound: !0,
                        keybind_has_shortcut: i.shortcut.length > 0
                    });
                    i.action === b.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? m.default.track(b.rMx.OVERLAY_SETTINGS_UPDATED, {
                        hotkey: i.action === b.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? (0, E.BB)(i.shortcut) : null
                    }) : i.action === b.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET && m.default.track(b.rMx.OVERLAY_SETTINGS_UPDATED, {
                        text_activation_hotkey: i.action === b.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, E.BB)(i.shortcut) : null
                    })
                }
                Y(i)
            }

            function X(t, i) {
                var o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    e = d().find(j, (function(i) {
                        return i.action === t && (!o || i.managed === o)
                    }));
                if (null != e) return !1;
                Y(B({
                    action: t,
                    enabled: !0,
                    shortcut: (0, E.Kd)(i),
                    managed: !0,
                    params: {}
                }));
                return !0
            }
            var q = [function() {
                var t = k.Z.getShortcuts();
                d().each(j, (function(i) {
                    i.action !== b.kg4.PUSH_TO_TALK || !0 !== i.managed || null != i.context && null != t[i.context] || W(i)
                }));
                return d().reduce(k.Z.getShortcuts(), (function(t, i, o) {
                    var e = d().find(j, (function(t) {
                        return t.action === b.kg4.PUSH_TO_TALK && !0 === t.managed && t.context === o
                    }));
                    if (null == e) Y(B({
                        action: b.kg4.PUSH_TO_TALK,
                        enabled: !0,
                        shortcut: i,
                        managed: !0,
                        params: {},
                        context: o
                    }));
                    else {
                        if (null == i) return t || !1;
                        K({
                            keybind: C(A({}, e), {
                                shortcut: "string" == typeof i ? (0, E.Kd)(i) : i,
                                context: o
                            })
                        })
                    }
                    return !0
                }), !1)
            }, function() {
                return !!h.Z.enabled && X(b.kg4.TOGGLE_OVERLAY_INPUT_LOCK, "shift+`")
            }, function() {
                return !!h.Z.enabled && X(b.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, "]`")
            }, function() {
                return X(b.kg4.SOUNDBOARD_HOLD, O.D_, !1)
            }, function() {
                return X(b.kg4.SAVE_CLIP, I.D_)
            }];

            function z() {
                return q.reduce((function(t, i) {
                    return i() || t
                }), !1)
            }
            l.Z.setGetKeybindList((function() {
                var t = [];
                for (var i in j) j.hasOwnProperty(i) && t.push((0, E.BB)(j[i].shortcut));
                return t
            }));
            var J = function(t) {
                ! function(t, i) {
                    if ("function" != typeof i && null !== i) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(i && i.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    i && P(t, i)
                }(o, t);
                var i = R(o);

                function o() {
                    g(this, o);
                    return i.apply(this, arguments)
                }
                var e = o.prototype;
                e.initialize = function(t) {
                    __OVERLAY__ || this.waitFor(k.Z, h.Z);
                    j = null != t ? t : {}
                };
                e.getUserAgnosticState = function() {
                    return j
                };
                e.hasKeybind = function(t, i, o) {
                    for (var e in j) {
                        var a = !0,
                            r = !1,
                            s = void 0;
                        try {
                            for (var n, x = j[e].shortcut[Symbol.iterator](); !(a = (n = x.next()).done); a = !0) {
                                var y = n.value;
                                if (y[0] === t && y[1] === i && (void 0 === o || o === y[2])) return !0
                            }
                        } catch (t) {
                            r = !0;
                            s = t
                        } finally {
                            try {
                                a || null == x.return || x.return()
                            } finally {
                                if (r) throw s
                            }
                        }
                    }
                    return !1
                };
                e.hasExactKeybind = function(t) {
                    for (var i in j) {
                        var o = j[i];
                        if (d().isEqual(o.shortcut, t)) return !0
                    }
                    return !1
                };
                e.getKeybindForAction = function(t) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return d().find(j, (function(o) {
                        return o.action === t && (!i || i && !0 === o.managed)
                    }))
                };
                e.getOverlayKeybind = function() {
                    return this.getKeybindForAction(b.kg4.TOGGLE_OVERLAY_INPUT_LOCK, !0)
                };
                e.getOverlayChatKeybind = function() {
                    return this.getKeybindForAction(b.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0)
                };
                e.__getLocalVars = function() {
                    return {
                        logger: M,
                        inputEvents: U,
                        keybinds: j,
                        nextId: Z,
                        areKeybindsEnabled: F,
                        callbackHandlers: G,
                        managedActions: H,
                        _managedUpdates: q
                    }
                };
                return o
            }(p.ZP.DeviceSettingsStore);
            J.displayName = "KeybindsStore";
            J.persistKey = "keybinds";
            J.migrations = [function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    i = t.v,
                    o = t.keybinds,
                    e = void 0 === o ? t : o;
                return d().reduce(e, (function(t, o, e) {
                    var a = parseInt(o.id, 10);
                    if (isNaN(a) || o.id !== e) return t;
                    if (null == i || i < 2)
                        if ("string" == typeof o.shortcut) {
                            o.shortcut = o.shortcut.replace("escape", "esc").replace("capslock", "caps lock").replace("numlock", "num lock").replace("pageup", "page up").replace("pagedown", "page down");
                            o.shortcut = (0, E.Kd)(o.shortcut)
                        } else o.shortcut = o.shortcut.map((function(t) {
                            return t.length < 3 ? L(t).concat([(0, E.dU)()]) : t
                        }));
                    t[e] = o;
                    return t
                }), {})
            }, function(t) {
                return t
            }, function(t) {
                var i = t.keybinds,
                    o = void 0 === i ? t : i;
                return d().reduce(o, (function(t, i, o) {
                    if ((0, f.IJ)() && i.action === b.kg4.SOUNDBOARD_HOLD) {
                        var e = i.shortcut.map((function(t) {
                                return t[1]
                            })),
                            a = (0, E.Kd)("`").map((function(t) {
                                return t[1]
                            }));
                        if (x()(e, a)) return t
                    }
                    return C(A({}, t), S({}, o, i))
                }), {})
            }, function(t) {
                var i = {};
                for (var o in t) {
                    var e = t[o];
                    if (null != e) {
                        if (null == e.params || null == e.enabled) {
                            var a;
                            e = C(A({}, e), {
                                enabled: !1 !== e.enabled,
                                params: null !== (a = e.params) && void 0 !== a ? a : {}
                            })
                        }
                        i[o] = e
                    }
                }
                return i
            }];
            const Q = new J(c.Z, {
                CONNECTION_OPEN: z,
                AUDIO_SET_MODE: z,
                OVERLAY_SET_ENABLED: z,
                RPC_APP_CONNECTED: z,
                RPC_APP_DISCONNECTED: z,
                KEYBINDS_ADD_KEYBIND: function(t) {
                    Y(B(t.keybind))
                },
                KEYBINDS_DELETE_KEYBIND: function(t) {
                    var i = t.id,
                        o = j[i];
                    __OVERLAY__ || m.default.track(b.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
                        keybind_action: o.action,
                        keybind_is_bound: !1,
                        keybind_has_shortcut: !1
                    });
                    null != o && W(o)
                },
                KEYBINDS_SET_KEYBIND: K,
                KEYBINDS_ENABLE_ALL_KEYBINDS: function(t) {
                    var i = t.enable;
                    F = i;
                    if (i) {
                        l.Z.enable();
                        d().forEach(j, Y)
                    } else {
                        l.Z.disable();
                        d().forEach(j, (function(t) {
                            return V(t.id)
                        }))
                    }
                },
                KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: function(t) {
                    var i = t.keybinds;
                    G = i;
                    U = {};
                    Z = 0;
                    Object.values(j).filter((function(t) {
                        return H.includes(t.action) && t.managed
                    })).length !== H.length && z();
                    d().forEach(j, (function(t) {
                        Z = Math.max(parseInt(t.id, 10), Z) + 1;
                        try {
                            Y(t)
                        } catch (i) {
                            M.error("Failed to register keybind", t, i)
                        }
                    }));
                    F = !0
                }
            })
        },
        887643: (t, i, o) => {
            "use strict";
            o.d(i, {
                Z: () => Ht,
                Y: () => Ot
            });
            var e = o(938002),
                a = o(202351),
                r = o(744564),
                s = o(997244),
                n = o(875700),
                x = o(477101),
                y = o(993754),
                d = o(116404),
                p = o(306472),
                c = o(652735),
                l = o(458960),
                u = o(296602),
                k = o(611841),
                m = o(921273),
                f = o(575494);

            function _(t, i) {
                var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new f.Z;
                return o.e(88310).then(o.bind(o, 488310)).then((function(o) {
                    return (0, o.default)(t, i, e)
                }))
            }
            var E = o(609182),
                h = o(664625),
                b = o(959207),
                I = o(117112),
                O = o(671723),
                v = o(652591);
            var w = o(310126),
                g = o(226810),
                S = o(2590),
                T = o(122253);

            function A(t, i) {
                (null == i || i > t.length) && (i = t.length);
                for (var o = 0, e = new Array(i); o < i; o++) e[o] = t[o];
                return e
            }

            function C(t, i, o, e, a, r, s) {
                try {
                    var n = t[r](s),
                        x = n.value
                } catch (t) {
                    o(t);
                    return
                }
                n.done ? i(x) : Promise.resolve(x).then(e, a)
            }

            function N(t) {
                return function() {
                    var i = this,
                        o = arguments;
                    return new Promise((function(e, a) {
                        var r = t.apply(i, o);

                        function s(t) {
                            C(r, e, a, s, n, "next", t)
                        }

                        function n(t) {
                            C(r, e, a, s, n, "throw", t)
                        }
                        s(void 0)
                    }))
                }
            }

            function P(t, i) {
                if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function")
            }

            function L(t, i) {
                for (var o = 0; o < i.length; o++) {
                    var e = i[o];
                    e.enumerable = e.enumerable || !1;
                    e.configurable = !0;
                    "value" in e && (e.writable = !0);
                    Object.defineProperty(t, e.key, e)
                }
            }

            function D(t, i, o) {
                i in t ? Object.defineProperty(t, i, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[i] = o;
                return t
            }

            function R(t) {
                R = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return R(t)
            }

            function M(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var o = null != arguments[i] ? arguments[i] : {},
                        e = Object.keys(o);
                    "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(o).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(o, t).enumerable
                    }))));
                    e.forEach((function(i) {
                        D(t, i, o[i])
                    }))
                }
                return t
            }

            function U(t, i) {
                i = null != i ? i : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : function(t, i) {
                    var o = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var e = Object.getOwnPropertySymbols(t);
                        i && (e = e.filter((function(i) {
                            return Object.getOwnPropertyDescriptor(t, i).enumerable
                        })));
                        o.push.apply(o, e)
                    }
                    return o
                }(Object(i)).forEach((function(o) {
                    Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(i, o))
                }));
                return t
            }

            function j(t, i) {
                return !i || "object" !== H(i) && "function" != typeof i ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : i
            }

            function Z(t, i) {
                Z = Object.setPrototypeOf || function(t, i) {
                    t.__proto__ = i;
                    return t
                };
                return Z(t, i)
            }

            function F(t, i) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, i) {
                    var o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != o) {
                        var e, a, r = [],
                            s = !0,
                            n = !1;
                        try {
                            for (o = o.call(t); !(s = (e = o.next()).done); s = !0) {
                                r.push(e.value);
                                if (i && r.length === i) break
                            }
                        } catch (t) {
                            n = !0;
                            a = t
                        } finally {
                            try {
                                s || null == o.return || o.return()
                            } finally {
                                if (n) throw a
                            }
                        }
                        return r
                    }
                }(t, i) || V(t, i) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function G(t) {
                return function(t) {
                    if (Array.isArray(t)) return A(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || V(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var H = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function V(t, i) {
                if (t) {
                    if ("string" == typeof t) return A(t, i);
                    var o = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === o && t.constructor && (o = t.constructor.name);
                    return "Map" === o || "Set" === o ? Array.from(o) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? A(t, i) : void 0
                }
            }

            function Y(t) {
                var i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var o, e = R(t);
                    if (i) {
                        var a = R(this).constructor;
                        o = Reflect.construct(e, arguments, a)
                    } else o = e.apply(this, arguments);
                    return j(this, o)
                }
            }
            var B, W = function(t, i) {
                var o, e, a, r, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: n(0),
                    throw: n(1),
                    return: n(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function n(r) {
                    return function(n) {
                        return function(r) {
                            if (o) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (o = 1, e && (a = 2 & r[0] ? e.return : r[0] ? e.throw || ((a = e.return) && a.call(e),
                                        0) : e.next) && !(a = a.call(e, r[1])).done) return a;
                                (e = 0, a) && (r = [2 & r[0], a.value]);
                                switch (r[0]) {
                                    case 0:
                                    case 1:
                                        a = r;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: r[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        e = r[1];
                                        r = [0];
                                        continue;
                                    case 7:
                                        r = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = s.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                                            s.label = r[1];
                                            break
                                        }
                                        if (6 === r[0] && s.label < a[1]) {
                                            s.label = a[1];
                                            a = r;
                                            break
                                        }
                                        if (a && s.label < a[2]) {
                                            s.label = a[2];
                                            s.ops.push(r);
                                            break
                                        }
                                        a[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                r = i.call(t, s)
                            } catch (t) {
                                r = [6, t];
                                e = 0
                            } finally {
                                o = a = 0
                            }
                            if (5 & r[0]) throw r[1];
                            return {
                                value: r[0] ? r[1] : void 0,
                                done: !0
                            }
                        }([r, n])
                    }
                }
            };
            ! function(t) {
                t.ATTACHING = "ATTACHING";
                t.CONNECTING = "CONNECTING";
                t.CONNECTED = "CONNECTED";
                t.READY = "READY";
                t.CRASHED = "CRASHED";
                t.CONNECT_FAILED = "CONNECT_FAILED";
                t.HOOK_FAILED = "HOOK_FAILED"
            }(B || (B = {}));
            var K, X, q = (0,
                    e.Y)(),
                z = new Map,
                J = !1,
                Q = new Set,
                $ = new Set,
                tt = !1,
                it = T.gl.Default,
                ot = !1,
                et = null,
                at = "",
                rt = new Set,
                st = !1,
                nt = new Set(["CONNECTION_OPEN", "CONNECTION_RESUMED", "CONNECTION_CLOSED", "WINDOW_INIT", "WINDOW_FULLSCREEN_CHANGE", "WINDOW_FOCUS", "WINDOW_RESIZED", "WINDOW_HIDDEN", "CHANNEL_SELECT", "DELAYED_CHANNEL_SELECT", "DELAYED_SELECT_FLUSH", "LOAD_MESSAGES_SUCCESS", "LOAD_MESSAGES_FAILURE", "LOAD_MESSAGES", "MESSAGE_START_EDIT", "MESSAGE_UPDATE_EDIT", "MESSAGE_END_EDIT", "APP_VIEW_SET_HOME_LINK", "APPLICATION_STORE_LOCATION_CHANGE", "LOGIN", "LOGIN_SUCCESS", "LOGIN_FAILURE", "LOGIN_MFA_STEP", "LOGIN_MFA", "LOGIN_MFA_FAILURE", "LOGIN_MFA_SMS", "LOGIN_MFA_SMS_REQUEST_SUCCESS", "LOGIN_MFA_SMS_FAILURE", "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION", "LOGIN_ACCOUNT_DISABLED", "LOGIN_RESET", "FINGERPRINT", "REGISTER", "REGISTER_SUCCESS", "REGISTER_FAILURE", "VERIFY_FAILURE", "VERIFY_SUCCESS", "START_SESSION", "FORGOT_PASSWORD_SENT", "UPDATE_TOKEN", "SET_CONSENT_REQUIRED", "CONTEXT_MENU_OPEN", "CONTEXT_MENU_CLOSE", "MODAL_PUSH", "MODAL_POP", "MODAL_UPDATE", "MODAL_POP_ALL", "GUILD_SETTINGS_OPEN", "USER_SETTINGS_MODAL_OPEN", "CHANNEL_SETTINGS_OPEN", "NOTIFICATION_SETTINGS_MODAL_OPEN", "EMAIL_VERIFICATION_MODAL_OPEN", "MENTION_MODAL_OPEN", "QUICKSWITCHER_SHOW", "SEARCH_MODAL_OPEN", "INTERACTION_MODAL_CREATE", "INTERACTION_IFRAME_MODAL_CREATE", "GUILD_SETTINGS_CLOSE", "USER_SETTINGS_MODAL_CLOSE", "CHANNEL_SETTINGS_CLOSE", "NOTIFICATION_SETTINGS_MODAL_CLOSE", "EMAIL_VERIFICATION_MODAL_CLOSE", "MENTION_MODAL_CLOSE", "QUICKSWITCHER_HIDE", "SEARCH_MODAL_CLOSE", "QUICKSWITCHER_SHOW", "QUICKSWITCHER_HIDE", "QUICKSWITCHER_SWITCH_TO", "QUICKSWITCHER_SEARCH", "QUICKSWITCHER_SELECT", "UPDATE_CHANNEL_DIMENSIONS", "UPDATE_CHANNEL_LIST_DIMENSIONS", "UPDATE_GUILD_LIST_DIMENSIONS", "TRACK", "CHANNEL_SETTINGS_OPEN", "CHANNEL_SETTINGS_INIT", "CHANNEL_SETTINGS_CLOSE", "GUILD_SETTINGS_INIT", "GUILD_SETTINGS_OPEN", "GUILD_SETTINGS_CLOSE", "TUTORIAL_INDICATOR_SHOW", "TUTORIAL_INDICATOR_HIDE", "TUTORIAL_INDICATOR_SUPPRESS_ALL", "USER_SETTINGS_ACCOUNT_INIT", "USER_SETTINGS_ACCOUNT_CLOSE", "NOTICE_SHOW", "NOTICE_DISMISS", "NOTICE_DISABLE", "SEARCH_EDITOR_STATE_CHANGE", "SEARCH_EDITOR_STATE_CLEAR", "SEARCH_START", "SEARCH_FINISH", "SEARCH_INDEXING", "SEARCH_CLEAR", "SEARCH_ENSURE_SEARCH_STATE", "SEARCH_AUTOCOMPLETE_QUERY_UPDATE", "SEARCH_CLEAR_HISTORY", "SEARCH_SET_SHOW_BLOCKED_RESULTS", "LAYOUT_CREATE", "EXPERIMENT_REGISTER_LEGACY", "POPOUT_WINDOW_OPEN", "POPOUT_WINDOW_CLOSE", "POPOUT_WINDOW_SET_ALWAYS_ON_TOP", "TYPING_START_LOCAL", "TYPING_STOP_LOCAL", "SPOTIFY_SET_ACTIVE_DEVICE", "LOAD_INVITE_SUGGESTIONS", "INVITE_SUGGESTIONS_SEARCH", "IMPERSONATE_UPDATE", "IMPERSONATE_STOP", "CREATE_PENDING_REPLY", "CREATE_SHALLOW_PENDING_REPLY", "DELETE_PENDING_REPLY", "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO", "GUILD_FEED_FETCH_SUCCESS", "APPLICATION_COMMAND_SEARCH_STORE_QUERY", "APPLICATION_COMMAND_SEARCH_STORE_UPDATE", "APPLICATION_COMMAND_SEARCH_STORE_UI_UPDATE", "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST", "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", "APPLICATION_COMMAND_SET_ACTIVE_COMMAND", "APPLICATION_COMMAND_SET_PREFERRED_COMMAND", "APPLICATION_COMMAND_UPDATE_OPTIONS", "APPLICATION_COMMAND_UPDATE_CHANNEL_STATE", "APPLICATION_COMMAND_USED", "DCF_HANDLE_DC_SHOWN"]),
                xt = new Set,
                yt = new u.Z("OverlayBridgeStore");

            function dt(t, i) {
                return function() {
                    for (var o = arguments.length, e = new Array(o), a = 0; a < o; a++) e[a] = arguments[a];
                    t((function() {
                        return i.apply(void 0, G(e))
                    }))
                }
            }

            function pt(t, i) {
                var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    e = z.get(t);
                if ((null === o || e === o) && e !== i) {
                    null == i ? z.delete(t) : z.set(t, i);
                    if (null == i || i === B.CRASHED) {
                        var a;
                        et = null;
                        var r = null === p.Z || void 0 === p.Z || null === (a = p.Z.fileManager) || void 0 === a ? void 0 : a.uploadDiscordHookCrashes;
                        null != r && r().then((function(t) {
                            if (Array.isArray(t) && 0 !== t.length) {
                                yt.log("transitionOverlayPIDStatus: Uploaded minidumps", t);
                                var i = !0,
                                    o = !1,
                                    e = void 0;
                                try {
                                    for (var a, r = t[Symbol.iterator](); !(i = (a = r.next()).done); i = !0) {
                                        var s = a.value;
                                        if (null != s) {
                                            var n, x, y, d, p, c, l, u = null != s.processName ? b.Z.getGameByExecutable(s.processName) : null;
                                            v.default.track(S.rMx.OVERLAY_HOOK_CRASHED, {
                                                process_name: null == s ? void 0 : s.processName,
                                                game_name: null !== (n = null == u ? void 0 : u.name) && void 0 !== n ? n : null,
                                                game_id: null !== (x = null == u ? void 0 : u.id) && void 0 !== x ? x : null,
                                                minidump_exception_type: null !== (y = s.exceptionString) && void 0 !== y ? y : null,
                                                minidump_exception_module_name: null !== (d = s.exceptionModuleName) && void 0 !== d ? d : null,
                                                minidump_relative_crash_address: null !== (p = s.relativeCrashAddress) && void 0 !== p ? p : null,
                                                minidump_exception_module_version: null !== (c = s.exceptionModuleVersion) && void 0 !== c ? c : null,
                                                minidump_exception_module_code_id: null !== (l = s.exceptionModuleCodeId) && void 0 !== l ? l : null
                                            })
                                        }
                                    }
                                } catch (t) {
                                    o = !0;
                                    e = t
                                } finally {
                                    try {
                                        i || null == r.return || r.return()
                                    } finally {
                                        if (o) throw e
                                    }
                                }
                            }
                        }))
                    }
                    0;
                    it === T.gl.Global && t === g.Js && i === B.READY && setTimeout((function() {
                        St(g.Js)
                    }), 1e3);
                    rt.delete(t);
                    yt.info("pid=".concat(t, " status transition ").concat(null != e ? e : "DISCONNECTED", " -> ").concat(null != i ? i : "DISCONNECTED"));
                    J = Array.from(z.values()).some((function(t) {
                        return t === B.READY
                    }))
                }
            }

            function ct(t) {
                return lt.apply(this, arguments)
            }

            function lt() {
                return (lt = N((function(t) {
                    var i, o;
                    return W(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return w.ZP.supportsFeature(S.eRX.CREATE_HOST_ON_ATTACH) ? z.size > 0 ? [4, Ot()] : [3, 2] : [3, 4];
                            case 1:
                                i = e.sent();
                                t.createHostProcess(i, Tt, St);
                                return [3, 3];
                            case 2:
                                t.destroyHostProcess();
                                e.label = 3;
                            case 3:
                                return [3, 7];
                            case 4:
                                return tt ? [4, Ot()] : [3, 6];
                            case 5:
                                o = e.sent();
                                t.createHostProcess(o, Tt, St);
                                return [3, 7];
                            case 6:
                                t.destroyHostProcess();
                                e.label = 7;
                            case 7:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function ut(t) {
                return kt.apply(this, arguments)
            }

            function kt() {
                return (kt = N((function(t) {
                    var i, o, e;
                    return W(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                if (null != (i = z.get(t))) {
                                    yt.warn("Trying to attach to pid=".concat(t, ", that is already in status: ").concat(i));
                                    return [2]
                                }
                                return [4, wt()];
                            case 1:
                                o = a.sent();
                                pt(t, B.ATTACHING);
                                return [4, c.YT(t)];
                            case 2:
                                if (null != (e = a.sent())) return [3, 4];
                                pt(t, B.CONNECTING, B.ATTACHING);
                                return [4, ct(o)];
                            case 3:
                                a.sent();
                                o.connectProcess(t);
                                return [3, 5];
                            case 4:
                                pt(t, B.HOOK_FAILED, B.ATTACHING);
                                yt.warn("Could not hook to pid=".concat(t, ", error=").concat(e));
                                a.label = 5;
                            case 5:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function mt(t) {
                return ft.apply(this, arguments)
            }

            function ft() {
                return (ft = N((function(t) {
                    var i;
                    return W(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                if (!z.has(t)) {
                                    yt.warn("Trying to detach from pid ".concat(t, ", which is in an unknown state"));
                                    return [2]
                                }
                                return [4, wt()];
                            case 1:
                                i = o.sent();
                                pt(t, null);
                                if (t !== g.Js) {
                                    c.pn(t);
                                    i.disconnectProcess(t)
                                }
                                return [4, ct(i)];
                            case 2:
                                o.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function _t() {
                return Et.apply(this, arguments)
            }

            function Et() {
                return (Et = N((function() {
                    var t, i, o, e, a, r;
                    return W(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                t = !0, i = !1, o = void 0;
                                s.label = 1;
                            case 1:
                                s.trys.push([1, 6, 7, 8]);
                                e = z.keys()[Symbol.iterator]();
                                s.label = 2;
                            case 2:
                                return (t = (a = e.next()).done) ? [3, 5] : [4, mt(a.value)];
                            case 3:
                                s.sent();
                                s.label = 4;
                            case 4:
                                t = !0;
                                return [3, 2];
                            case 5:
                                return [3, 8];
                            case 6:
                                r = s.sent();
                                i = !0;
                                o = r;
                                return [3, 8];
                            case 7:
                                try {
                                    t || null == e.return || e.return()
                                } finally {
                                    if (i) throw o
                                }
                                return [7];
                            case 8:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function ht() {
                return bt.apply(this, arguments)
            }

            function bt() {
                bt = N((function() {
                    var t, i, o, e, a, r, s, n, x, y, d, c, l, u, k, m, f, _, E, h, b = arguments;
                    return W(this, (function(I) {
                        switch (I.label) {
                            case 0:
                                null == (t = b.length > 0 && void 0 !== b[0] ? b[0] : null) && (t = tt && ot ? O.ZP.getOverlayEligiblePIDs() : []);
                                switch (it) {
                                    case T.gl.Global:
                                        return [3, 1];
                                    case T.gl.Hook:
                                    case T.gl.Default:
                                        return [3, 9]
                                }
                                return [3, 26];
                            case 1:
                                return null != t && 0 !== t.length ? [3, 3] : [4, null === p.Z || void 0 === p.Z || null === (i = p.Z.globalOverlay) || void 0 === i || null === (o = i.closeOverlay) || void 0 === o ? void 0 : o.call(i)];
                            case 2:
                                I.sent();
                                return [3, 8];
                            case 3:
                                return [4, Ot()];
                            case 4:
                                e = I.sent();
                                I.label = 5;
                            case 5:
                                I.trys.push([5, 7, , 8]);
                                return [4, null === p.Z || void 0 === p.Z || null === (a = p.Z.globalOverlay) || void 0 === a || null === (r = a.openOverlay) || void 0 === r ? void 0 : r.call(a, e)];
                            case 6:
                                I.sent();
                                return [3, 8];
                            case 7:
                                s = I.sent();
                                yt.log("globalOverlay: Failed to open overlay: ".concat(s), s);
                                return [3, 8];
                            case 8:
                                return [3, 27];
                            case 9:
                                n = !0, x = !1, y = void 0;
                                I.label = 10;
                            case 10:
                                I.trys.push([10, 15, 16, 17]);
                                d = t[Symbol.iterator]();
                                I.label = 11;
                            case 11:
                                if (n = (c = d.next()).done) return [3, 14];
                                l = c.value;
                                return z.has(l) ? [3, 13] : [4, ut(l)];
                            case 12:
                                I.sent();
                                I.label = 13;
                            case 13:
                                n = !0;
                                return [3, 11];
                            case 14:
                                return [3, 17];
                            case 15:
                                h = I.sent();
                                x = !0;
                                y = h;
                                return [3, 17];
                            case 16:
                                try {
                                    n || null == d.return || d.return()
                                } finally {
                                    if (x) throw y
                                }
                                return [7];
                            case 17:
                                u = !0, k = !1, m = void 0;
                                I.label = 18;
                            case 18:
                                I.trys.push([18, 23, 24, 25]);
                                f = z.keys()[Symbol.iterator]();
                                I.label = 19;
                            case 19:
                                if (u = (_ = f.next()).done) return [3, 22];
                                E = _.value;
                                return t.includes(E) ? [3, 21] : [4, mt(E)];
                            case 20:
                                I.sent();
                                I.label = 21;
                            case 21:
                                u = !0;
                                return [3, 19];
                            case 22:
                                return [3, 25];
                            case 23:
                                h = I.sent();
                                k = !0;
                                m = h;
                                return [3, 25];
                            case 24:
                                try {
                                    u || null == f.return || f.return()
                                } finally {
                                    if (k) throw m
                                }
                                return [7];
                            case 25:
                                return [3, 27];
                            case 26:
                                yt.error("Unknown overlay method: ".concat(it));
                                return [3, 27];
                            case 27:
                                return [2]
                        }
                    }))
                }));
                return bt.apply(this, arguments)
            }
            var It = dt(q, (function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return ht(t)
            }));

            function Ot() {
                return new Promise((function(t) {
                    Gt.addConditionalChangeListener((function() {
                        if (null != K) {
                            var i = K;
                            it === T.gl.Global && (i = "".concat(K, "&pid=").concat(g.Js));
                            t(i);
                            return !1
                        }
                    }))
                }))
            }
            var vt, wt = function() {
                    var t = function(t) {
                            var i = !0,
                                o = !1,
                                e = void 0;
                            try {
                                for (var a, r = ["createHostProcess", "connectProcess", "disconnectProcess", "destroyHostProcess"][Symbol.iterator](); !(i = (a = r.next()).done); i = !0) {
                                    var s = a.value;
                                    if (null == t[s]) {
                                        yt.info("polyfilling OverlayModule.".concat(s, "(); Overlay module is probably out of date."));
                                        t[s] = function() {}
                                    }
                                }
                            } catch (t) {
                                o = !0;
                                e = t
                            } finally {
                                try {
                                    i || null == r.return || r.return()
                                } finally {
                                    if (o) throw e
                                }
                            }
                            return t
                        },
                        i = null;

                    function o() {
                        return (o = N((function() {
                            var i;
                            return W(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (!T.iP) {
                                            yt.error("Attempted to load overlay on an unsupported platform.");
                                            throw new Error("Overlay is not supported on this platform.")
                                        }
                                        o.label = 1;
                                    case 1:
                                        o.trys.push([1, 3, , 4]);
                                        return [4, w.ZP.ensureModule("discord_overlay2")];
                                    case 2:
                                        o.sent();
                                        return [2, t(w.ZP.requireModule("discord_overlay2"))];
                                    case 3:
                                        i = o.sent();
                                        yt.error("failed ensuring discord_overlay2", i);
                                        throw i;
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))).apply(this, arguments)
                    }
                    return function() {
                        null == i && (i = function() {
                            return o.apply(this, arguments)
                        }());
                        return i
                    }
                }(),
                gt = dt(q, (vt = N((function(t) {
                    var i;
                    return W(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                if (!T.iP || tt === t) return [2];
                                tt = t;
                                m.v.update({
                                    enabled: t
                                });
                                Gt.emitChange();
                                return [4, wt()];
                            case 1:
                                i = o.sent();
                                return tt ? [4, ct(i)] : [3, 3];
                            case 2:
                                o.sent();
                                It();
                                return [3, 6];
                            case 3:
                                return [4, _t()];
                            case 4:
                                o.sent();
                                return [4, ct(i)];
                            case 5:
                                o.sent();
                                o.label = 6;
                            case 6:
                                return [2]
                        }
                    }))
                })), function(t) {
                    return vt.apply(this, arguments)
                }));

            function St(t) {
                y.Z.setFocusedPID(0 === t ? null : t)
            }

            function Tt(t, i, o) {
                var e, a = null === (e = O.ZP.getGameForPID(t)) || void 0 === e ? void 0 : e.name,
                    r = b.Z.getGameByName(a),
                    s = M({
                        game_name: a,
                        game_id: null == r ? null : r.id,
                        success: i
                    }, o);
                (0, x.te)(g.qU, I.Z.getDefaultLayout(g.qU), {
                    width: o.graphics_width,
                    height: o.graphics_height
                });
                v.default.track(S.rMx.OVERLAY_HOOK_RESULT, s);
                yt.info("Overlay connection to ".concat(t, " ").concat(i ? "succeeded" : "failed"), s);
                pt(t, i ? B.CONNECTED : B.CONNECT_FAILED, B.CONNECTING)
            }

            function At() {
                var t = h.default.getToken(),
                    i = h.default.getId();
                null != t && l.lW({
                    type: S.BmY.DISPATCH,
                    pid: null,
                    token: null,
                    payloads: [{
                        type: "UPDATE_TOKEN",
                        token: t,
                        userId: i
                    }]
                })
            }

            function Ct() {
                It();
                return !1
            }

            function Nt(t) {
                return Pt.apply(this, arguments)
            }

            function Pt() {
                return (Pt = N((function(t) {
                    var i, o, e;
                    return W(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, wt()];
                            case 1:
                                e = a.sent();
                                null != et && et !== g.Js && e.sendCommand(et, {
                                    message: "intercept_input",
                                    intercept: !t
                                });
                                null === p.Z || void 0 === p.Z || null === (i = p.Z.globalOverlay) || void 0 === i || null === (o = i.setInteractionEnabled) || void 0 === o || o.call(i, !t);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function Lt(t) {
                t ? setTimeout((function() {
                    return Nt(t)
                }), 200) : Nt(t)
            }
            var Dt = null;

            function Rt(t) {
                if (st || !J || nt.has(t.type)) return !1;
                "USER_SETTINGS_PROTO_UPDATE" === t.type && (t = U(M({}, t), {
                    settings: {
                        type: t.settings.type,
                        proto: (0, E.cv)(t.settings.type, t.settings.proto)
                    }
                }));
                Q.add(t);
                null == X && (X = setTimeout(Mt, 1));
                return !1
            }

            function Mt() {
                if (null != X) {
                    clearTimeout(X);
                    X = null
                }
                if (J) {
                    if (Q.size > 0) {
                        l.lW({
                            type: S.BmY.DISPATCH,
                            pid: null,
                            token: null,
                            payloads: Array.from(Q)
                        });
                        Q.clear()
                    }
                } else Q.clear()
            }

            function Ut(t) {
                return null != t && function(t, i) {
                    for (var o = 0, e = Math.min(t.length, i.length), a = 0; a < e; a++) o |= t.charCodeAt(a) ^ i.charCodeAt(a);
                    return 0 === o && t.length === i.length
                }(t, at)
            }

            function jt(t) {
                false;
                switch (t.type) {
                    case S.BmY.CONNECT:
                        var i = h.default.getToken();
                        if (null == i) break;
                        (0, x.te)(g.qU, I.Z.getDefaultLayout(g.qU));
                        Promise.all([_(i, t.pid), a.ZP.PersistedStore.getAllStates()]).then((function(i) {
                            var o = F(i, 2),
                                e = o[0],
                                a = o[1],
                                r = t.pid,
                                s = t.token;
                            l.lW({
                                type: S.BmY.STORAGE_SYNC,
                                pid: r,
                                token: s,
                                states: a
                            });
                            l.lW({
                                type: S.BmY.DISPATCH,
                                pid: r,
                                token: s,
                                payloads: [e]
                            });
                            pt(r, B.READY);
                            y.Z.overlayReady(r)
                        }));
                        break;
                    case S.BmY.DISPATCH:
                        null != t.payloads && function(t) {
                            st = !0;
                            t.forEach((function(t) {
                                return r.Z.dispatch(t)
                            }));
                            st = !1
                        }(t.payloads);
                        break;
                    case S.BmY.LOG_MESSAGES:
                        yt.info("[overlay data received]", t.payload)
                }
            }
            var Zt = new Promise((function(t) {
                    k.Z.subscribe({
                        location: "1"
                    }, (function(i) {
                        null != i && i.useGlobalOverlay && $.add(T.gl.Global);
                        it = m.v.method;
                        t()
                    }))
                })),
                Ft = function(t) {
                    ! function(t, i) {
                        if ("function" != typeof i && null !== i) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(i && i.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        i && Z(t, i)
                    }(o, t);
                    var i = Y(o);

                    function o() {
                        P(this, o);
                        return i.apply(this, arguments)
                    }
                    var e = o.prototype;
                    e.initialize = function() {
                        if (T.iP && !__OVERLAY__) {
                            $.add(T.gl.Hook);
                            this.waitFor(O.ZP, h.default);
                            this.syncWith([O.ZP], Ct);
                            l.sr(jt, Ut);
                            h.default.addChangeListener(At);
                            Zt.then((function() {
                                gt(m.v.enabled);
                                r.Z.addInterceptor(Rt)
                            }))
                        }
                    };
                    e.isInputLocked = function(t) {
                        return !rt.has(t)
                    };
                    e.isSupported = function() {
                        return T.iP
                    };
                    e.isMethodSupported = function(t) {
                        return T.iP && $.has(t)
                    };
                    e.getFocusedPID = function() {
                        return et
                    };
                    e.isReady = function(t) {
                        return z.get(t) === B.READY
                    };
                    e.isCrashed = function(t) {
                        return z.get(t) === B.CRASHED
                    };
                    e.__getLocalVars = function() {
                        return {
                            OverlayPIDStatus: B,
                            overlayMutex: q,
                            overlayPIDStatuses: z,
                            anyOverlayPIDReady: J,
                            actionsToFlush: Q,
                            supportedOverlayMethods: $,
                            overlayEnabled: tt,
                            overlayMethod: it,
                            isConnectionOpened: ot,
                            focusedPID: et,
                            _overlayURL: K,
                            _overlayAuthToken: at,
                            unlockedOverlayPIDs: rt,
                            isDispatching: st,
                            timeout: X,
                            ACTION_DENYLIST: nt,
                            activeRegions: xt,
                            LOG_ALL_RPC_MESSAGES: false,
                            logger: yt,
                            updateIntendedOverlayPIDs: It,
                            getOverlayModule: wt,
                            setOverlayEnabled: gt,
                            unlockTimeout: Dt,
                            globalExperimentConfig: Zt,
                            overlayBridgeStoreInstance: Gt
                        }
                    };
                    ! function(t, i, o) {
                        i && L(t.prototype, i);
                        o && L(t, o)
                    }(o, [{
                        key: "enabled",
                        get: function() {
                            return tt
                        }
                    }, {
                        key: "method",
                        get: function() {
                            return it
                        }
                    }]);
                    return o
                }(a.ZP.Store);
            Ft.displayName = "OverlayBridgeStore";
            var Gt = new Ft(r.Z, __OVERLAY__ ? {} : {
                CONNECTION_OPEN: function() {
                    ot = !0;
                    It()
                },
                CONNECTION_CLOSED: function() {
                    ot = !1;
                    et = null;
                    It()
                },
                OVERLAY_SET_ENABLED: function(t) {
                    var i = t.enabled;
                    gt(i);
                    return !1
                },
                OVERLAY_SET_METHOD: function(t) {
                    if (t.method !== it) {
                        q(N((function() {
                            return W(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, ht([])];
                                    case 1:
                                        i.sent();
                                        it = t.method;
                                        m.v.update({
                                            method: it
                                        });
                                        return [4, ht()];
                                    case 2:
                                        i.sent();
                                        Gt.emitChange();
                                        return [2]
                                }
                            }))
                        })));
                        return !1
                    }
                },
                OVERLAY_FOCUSED: function(t) {
                    var i = t.pid;
                    et = i
                },
                OVERLAY_GAMES_CHANGE: Ct,
                OVERLAY_SET_INPUT_LOCKED: function(t) {
                    var i = t.locked,
                        o = t.pid,
                        e = z.get(o);
                    if (i || e === B.READY || e === B.CRASHED) {
                        i ? rt.delete(o) : rt.add(o);
                        xt.clear();
                        if (null != Dt) {
                            clearTimeout(Dt);
                            Dt = null;
                            if (i) return
                        }
                        i ? Lt(i) : Dt = setTimeout((function() {
                            Lt(i);
                            Dt = null
                        }), 100)
                    }
                },
                OVERLAY_ACTIVATE_REGION: function(t) {
                    var i = t.region;
                    xt.add(i);
                    Lt(!1)
                },
                OVERLAY_DEACTIVATE_ALL_REGIONS: function() {
                    xt.clear();
                    Lt(!0)
                },
                RPC_SERVER_READY: function(t) {
                    var i, o = t.port,
                        e = crypto.getRandomValues(new Uint8Array(8));
                    at = btoa((i = String).fromCharCode.apply(i, G(e)));
                    var a = new URLSearchParams;
                    a.append("build_id", "e66f1320cdef5dcf2ef34d2292de8405b9e987b2");
                    a.append("rpc", String(o));
                    a.append("rpc_auth_token", at);
                    K = "".concat(location.protocol, "//").concat(location.host, "/overlay?").concat(a.toString())
                },
                OVERLAY_CALL_PRIVATE_CHANNEL: function(t) {
                    var i = t.channelId,
                        o = t.ring;
                    setImmediate((function() {
                        d.default.selectPrivateChannel(i);
                        s.Z.call(i, !1, Boolean(o))
                    }))
                },
                OVERLAY_JOIN_GAME: function(t) {
                    var i = t.userId,
                        o = t.sessionId,
                        e = t.applicationId,
                        a = t.channelId,
                        r = t.messageId;
                    setImmediate((function() {
                        n.Z.join({
                            userId: i,
                            sessionId: o,
                            applicationId: e,
                            channelId: a,
                            messageId: r
                        });
                        null != et && y.Z.setLocked(!0, et)
                    }))
                },
                OVERLAY_CRASHED: function(t) {
                    pt(t.pid, B.CRASHED)
                }
            });
            const Ht = Gt
        },
        727599: (t, i, o) => {
            "use strict";
            o.d(i, {
                Z: () => x
            });
            var e = o(785893),
                a = (o(667294), o(633878));

            function r(t, i, o) {
                i in t ? Object.defineProperty(t, i, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[i] = o;
                return t
            }

            function s(t, i) {
                i = null != i ? i : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : function(t, i) {
                    var o = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var e = Object.getOwnPropertySymbols(t);
                        i && (e = e.filter((function(i) {
                            return Object.getOwnPropertyDescriptor(t, i).enumerable
                        })));
                        o.push.apply(o, e)
                    }
                    return o
                }(Object(i)).forEach((function(o) {
                    Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(i, o))
                }));
                return t
            }

            function n(t, i) {
                if (null == t) return {};
                var o, e, a = function(t, i) {
                    if (null == t) return {};
                    var o, e, a = {},
                        r = Object.keys(t);
                    for (e = 0; e < r.length; e++) {
                        o = r[e];
                        i.indexOf(o) >= 0 || (a[o] = t[o])
                    }
                    return a
                }(t, i);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    for (e = 0; e < r.length; e++) {
                        o = r[e];
                        i.indexOf(o) >= 0 || Object.prototype.propertyIsEnumerable.call(t, o) && (a[o] = t[o])
                    }
                }
                return a
            }

            function x(t) {
                var i = t.width,
                    o = void 0 === i ? 24 : i,
                    x = t.height,
                    y = void 0 === x ? 24 : x,
                    d = t.color,
                    p = void 0 === d ? "currentColor" : d,
                    c = t.foreground,
                    l = n(t, ["width", "height", "color", "foreground"]);
                return (0, e.jsx)("svg", s(function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var o = null != arguments[i] ? arguments[i] : {},
                            e = Object.keys(o);
                        "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(o).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(o, t).enumerable
                        }))));
                        e.forEach((function(i) {
                            r(t, i, o[i])
                        }))
                    }
                    return t
                }({}, (0, a.Z)(l)), {
                    width: o,
                    height: y,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: (0, e.jsx)("path", {
                        className: c,
                        fill: p,
                        d: "M20 10.9378H14.2199H8.06628L10.502 8.50202L9 7L4 12L9 17L10.502 15.498L8.06628 13.0622H20V10.9378Z"
                    })
                }))
            }
        },
        532378: (t, i, o) => {
            "use strict";
            o.d(i, {
                Z: () => x
            });
            var e = o(785893),
                a = (o(667294), o(633878));

            function r(t, i, o) {
                i in t ? Object.defineProperty(t, i, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[i] = o;
                return t
            }

            function s(t, i) {
                i = null != i ? i : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : function(t, i) {
                    var o = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var e = Object.getOwnPropertySymbols(t);
                        i && (e = e.filter((function(i) {
                            return Object.getOwnPropertyDescriptor(t, i).enumerable
                        })));
                        o.push.apply(o, e)
                    }
                    return o
                }(Object(i)).forEach((function(o) {
                    Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(i, o))
                }));
                return t
            }

            function n(t, i) {
                if (null == t) return {};
                var o, e, a = function(t, i) {
                    if (null == t) return {};
                    var o, e, a = {},
                        r = Object.keys(t);
                    for (e = 0; e < r.length; e++) {
                        o = r[e];
                        i.indexOf(o) >= 0 || (a[o] = t[o])
                    }
                    return a
                }(t, i);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    for (e = 0; e < r.length; e++) {
                        o = r[e];
                        i.indexOf(o) >= 0 || Object.prototype.propertyIsEnumerable.call(t, o) && (a[o] = t[o])
                    }
                }
                return a
            }

            function x(t) {
                var i = t.width,
                    o = void 0 === i ? 16 : i,
                    x = t.height,
                    y = void 0 === x ? 16 : x,
                    d = t.color,
                    p = void 0 === d ? "currentColor" : d,
                    c = t.foreground,
                    l = n(t, ["width", "height", "color", "foreground"]);
                return (0, e.jsxs)("svg", s(function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var o = null != arguments[i] ? arguments[i] : {},
                            e = Object.keys(o);
                        "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(o).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(o, t).enumerable
                        }))));
                        e.forEach((function(i) {
                            r(t, i, o[i])
                        }))
                    }
                    return t
                }({}, (0, a.Z)(l)), {
                    width: o,
                    height: y,
                    viewBox: "0 0 24 24",
                    children: [(0, e.jsx)("path", {
                        fill: p,
                        className: c,
                        d: "M12 5C5.648 5 1 12 1 12C1 12 5.648 19 12 19C18.352 19 23 12 23 12C23 12 18.352 5 12 5ZM12 16C9.791 16 8 14.21 8 12C8 9.79 9.791 8 12 8C14.209 8 16 9.79 16 12C16 14.21 14.209 16 12 16Z"
                    }), (0, e.jsx)("path", {
                        fill: p,
                        className: c,
                        d: "M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                    })]
                }))
            }
        },
        235606: (t, i, o) => {
            "use strict";
            o.d(i, {
                Z: () => a
            });
            var e = o(785893);
            o(667294);

            function a(t) {
                var i = t.width,
                    o = void 0 === i ? 24 : i,
                    a = t.height,
                    r = void 0 === a ? 24 : a,
                    s = t.color,
                    n = void 0 === s ? "currentColor" : s,
                    x = t.className,
                    y = t.foreground;
                return (0, e.jsx)("svg", {
                    className: x,
                    width: o,
                    height: r,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, e.jsx)("path", {
                        className: y,
                        fill: n,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 4.5C2 3.397 2.897 2.5 4 2.5H20C21.103 2.5 22 3.397 22 4.5V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5ZM13.2 14.3375V11.6C9.864 11.6 7.668 12.6625 6 15C6.672 11.6625 8.532 8.3375 13.2 7.6625V5L18 9.6625L13.2 14.3375Z"
                    })
                })
            }
        }
    }
]);