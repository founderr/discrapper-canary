(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [70245], {
        182765: (e, t, r) => {
            e.exports = r.p + "092b071c3b3141a58787415450c27857.png"
        },
        130058: (e, t, r) => {
            e.exports = r.p + "5653db0e5f0ad6258ede457561a86b97.png"
        },
        361820: (e, t, r) => {
            e.exports = r.p + "239c4e9bd43706cd775a16162391b234.png"
        },
        488687: (e, t, r) => {
            e.exports = r.p + "068fab5e97080d7f61de96c40808aff5.png"
        },
        312805: (e, t, r) => {
            e.exports = r.p + "a04d48658b7cded5ac237dfa0c3a15a7.png"
        },
        358324: (e, t, r) => {
            "use strict";
            r.d(t, {
                i: () => a
            });
            var n = r(785893),
                o = (r(667294), r(795308)),
                i = r(633878);

            function c(e, t, r) {
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

            function l(e, t) {
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
            var a = function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    a = e.height,
                    u = void 0 === a ? 24 : a,
                    O = e.color,
                    f = void 0 === O ? o.Z.colors.INTERACTIVE_NORMAL : O,
                    p = e.colorClass,
                    d = void 0 === p ? "" : p,
                    C = l(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", s(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            c(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(C)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        fillRule: "evenodd",
                        d: "M20.968 4.063c0 .177.083.35.241.43.554.28.894.812 1.038 1.416C22.543 7.152 23 9.62 23 13v4.912a3.089 3.089 0 0 1-5.854 1.38l-1.758-3.515c-.223-.445-.74-.661-1.225-.549-.572.132-1.367.273-2.163.273-.796 0-1.591-.14-2.163-.273-.485-.112-1.002.104-1.225.549l-1.758 3.516A3.09 3.09 0 0 1 1 17.912V13c0-3.381.457-5.848.753-7.09.144-.605.484-1.137 1.038-1.417a.472.472 0 0 0 .241-.43 1.5 1.5 0 0 1 1.189-1.468l2.934-.624a1.499 1.499 0 0 1 1.36.394c.356.346.784.716 1.28.69A42.392 42.392 0 0 1 12 3c.793 0 1.526.02 2.205.055.496.026.924-.344 1.28-.69.347-.338.85-.502 1.36-.394l2.934.624a1.5 1.5 0 0 1 1.189 1.468ZM20 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 7a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2H7v1a1 1 0 1 1-2 0v-1H4a1 1 0 1 1 0-2h1V7Z",
                        clipRule: "evenodd",
                        className: d
                    })
                }))
            }
        },
        550677: (e, t, r) => {
            "use strict";
            r.d(t, {
                bJ: () => i,
                X3: () => c,
                zM: () => s,
                tA: () => l,
                uu: () => a,
                KL: () => u,
                Lc: () => O,
                YE: () => n,
                al: () => p,
                Ry: () => f,
                e8: () => d,
                Lw: () => C
            });
            var n, o = r(2590),
                i = "xbox://communitylinking/donut/audio",
                c = "https://www.xbox.com/en-US/apps/xbox-app-for-mobile",
                s = "https://login.live.com",
                l = [o.xVR.VOICE, o.xVR.DM_CHANNELS_READ, o.xVR.GUILDS, o.xVR.GUILDS_MEMBERS_READ, o.xVR.IDENTIFY, o.xVR.CONNECTIONS],
                a = "https://my.account.sony.com",
                u = l,
                O = function(e) {
                    var t = e.guildId,
                        r = e.channelName,
                        n = e.guildName,
                        o = e.channelId,
                        i = e.muted,
                        c = e.deafened,
                        s = e.nonce,
                        l = {
                            channelid: o,
                            guildid: t,
                            channelname: r,
                            guildname: n,
                            muted: String(i),
                            deafened: String(c)
                        };
                    null != s && (l.nonce = s);
                    return new URLSearchParams(l)
                };
            ! function(e) {
                e.PLAYSTATION = "playstation";
                e.XBOX = "xbox"
            }(n || (n = {}));
            var f, p = new Set([n.XBOX, n.PLAYSTATION]);
            new Set([o.M7m.XBOX, o.M7m.PS5]);
            ! function(e) {
                e[e.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED = 27e4] = "CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED";
                e[e.CONSOLE_DEVICE_UNAVAILABLE = 270001] = "CONSOLE_DEVICE_UNAVAILABLE";
                e[e.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS = 270002] = "CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS";
                e[e.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED = 270003] = "CONSOLE_DEVICE_COMMUNICATION_RESTRICTED";
                e[e.CONSOLE_DEVICE_INVALID_POWER_MODE = 270004] = "CONSOLE_DEVICE_INVALID_POWER_MODE";
                e[e.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR = 270005] = "CONSOLE_DEVICE_ACCOUNT_LINK_ERROR";
                e[e.CONSOLE_DEVICE_MAX_MEMBERS_REACHED = 270006] = "CONSOLE_DEVICE_MAX_MEMBERS_REACHED";
                e[e.CONSOLE_DEVICE_BAD_COMMAND = 270007] = "CONSOLE_DEVICE_BAD_COMMAND"
            }(f || (f = {}));
            var d = new Set([f.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED]),
                C = "console error alert"
        },
        670245: (e, t, r) => {
            "use strict";
            r.r(t);
            r.d(t, {
                default: () => F
            });
            var n = r(785893),
                o = (r(667294), r(304548)),
                i = r(786648),
                c = r(254758),
                s = r(959153),
                l = r(2590),
                a = r(550677);

            function u(e) {
                var t = e.authToken,
                    r = e.onContinue,
                    o = e.onError,
                    i = e.onClose;
                return (0, n.jsx)(s.h, {
                    platformType: l.ABu.XBOX,
                    clientId: c.t.XBOX_APPLICATION_ID,
                    scopes: a.tA,
                    authToken: t,
                    onContinue: r,
                    onError: o,
                    onClose: i
                })
            }
            var O = r(227363),
                f = r(473708);

            function p(e) {
                var t = e.onContinue,
                    r = e.onClose;
                return (0, n.jsx)(O.C, {
                    title: f.Z.Messages.CONNECT_XBOX_ERROR_TITLE,
                    body: f.Z.Messages.CONNECT_XBOX_ERROR_BODY,
                    onClose: r,
                    onContinue: t
                })
            }
            var d = r(168075),
                C = r(358324),
                b = r(633878);

            function E(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
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

            function g(e, t) {
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
            const y = (0, d.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    c = e.color,
                    s = void 0 === c ? "currentColor" : c,
                    l = e.foreground,
                    a = g(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", h(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            E(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, b.Z)(a)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        className: l,
                        fill: s,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5.66493 5H18.3351C19.9079 5 21.2137 6.21463 21.3273 7.78329L21.9932 16.9774C22.0684 18.0165 21.2871 18.9198 20.248 18.9951C20.2027 18.9984 20.1572 19 20.1117 19C18.9191 19 17.8786 18.1904 17.5855 17.0342L17.0699 15H6.93021L6.41455 17.0342C6.12148 18.1904 5.081 19 3.88832 19C2.84651 19 2.00195 18.1554 2.00195 17.1136C2.00195 17.0682 2.0036 17.0227 2.00688 16.9774L2.67277 7.78329C2.78638 6.21463 4.09216 5 5.66493 5ZM14.5001 10C15.3285 10 16.0001 9.32843 16.0001 8.5C16.0001 7.67157 15.3285 7 14.5001 7C13.6716 7 13.0001 7.67157 13.0001 8.5C13.0001 9.32843 13.6716 10 14.5001 10ZM18.5001 13C19.3285 13 20.0001 12.3284 20.0001 11.5C20.0001 10.6716 19.3285 10 18.5001 10C17.6716 10 17.0001 10.6716 17.0001 11.5C17.0001 12.3284 17.6716 13 18.5001 13ZM6.00007 9H4.00008V11H6.00007V13H8.00007V11H10.0001V9H8.00007V7H6.00007V9Z",
                        "aria-hidden": !0
                    })
                }))
            }), C.i);
            var _ = r(755914),
                j = r(348592),
                v = r(525493),
                S = r(271663),
                N = r(488687),
                x = r.n(N);

            function m() {
                return (0, n.jsxs)(S.yC, {
                    children: [(0, n.jsx)(S.Ux, {
                        text: f.Z.Messages.CONNECT_XBOX_TRANSFER_VOICE_VALUE_PROP,
                        children: (0, n.jsx)(_.Z, {})
                    }), (0, n.jsx)(S.Ux, {
                        text: f.Z.Messages.CONNECT_XBOX_DISPLAY_GAME_VALUE_PROP,
                        children: (0, n.jsx)(y, {})
                    })]
                })
            }

            function I(e) {
                var t = e.onContinue,
                    r = e.onClose,
                    o = j.Z.getArticleURL(l.BhN.XBOX_CONNECTION);
                return (0, n.jsx)(v.m, {
                    platformType: l.ABu.XBOX,
                    headerConnect: f.Z.Messages.CONNECT_XBOX_LANDING_TITLE,
                    headerReconnect: f.Z.Messages.RECONNECT_XBOX_LANDING_TITLE,
                    body: f.Z.Messages.CONNECT_XBOX_LANDING_BODY,
                    learnMoreLink: o,
                    onClose: r,
                    onContinue: t,
                    img: (0, n.jsx)("img", {
                        src: x(),
                        width: 234,
                        height: 152,
                        alt: ""
                    }),
                    valueProps: (0, n.jsx)(m, {})
                })
            }
            var P = r(797916),
                w = r(130058),
                A = r.n(w),
                D = r(361820),
                L = r.n(D);

            function T(e) {
                var t = e.isWaitingForConnection,
                    r = e.onWaitingForConnection,
                    o = e.expectedCallbackState,
                    i = e.onAuthToken,
                    c = e.onError,
                    s = e.onClose,
                    u = t ? (0, n.jsx)("img", {
                        src: L(),
                        width: "168",
                        height: "124",
                        alt: ""
                    }) : (0, n.jsx)("img", {
                        src: A(),
                        width: "152",
                        height: "124",
                        alt: ""
                    }),
                    O = t ? f.Z.Messages.XBOX_DETAILS_TITLE_WAITING : f.Z.Messages.XBOX_DETAILS_TITLE,
                    p = t ? f.Z.Messages.XBOX_DETAILS_BODY_WAITING : f.Z.Messages.XBOX_DETAILS_BODY;
                return (0, n.jsx)(P.t, {
                    platformType: l.ABu.XBOX,
                    isWaitingForConnection: t,
                    onWaitingForConnection: r,
                    expectedCallbackState: o,
                    onAuthToken: i,
                    onError: c,
                    onClose: s,
                    img: u,
                    title: O,
                    body: p,
                    redirectDestination: a.zM
                })
            }
            var R = r(265688),
                X = r(846765),
                M = r(361618),
                B = r(226739),
                V = r.n(B),
                Z = r(312805),
                k = r.n(Z);

            function U() {
                return (0, n.jsxs)("div", {
                    className: V().getXboxApp,
                    children: [(0, n.jsxs)("div", {
                        className: V().getXboxAppBody,
                        children: [(0, n.jsxs)(o.Heading, {
                            className: V().getXboxAppHeading,
                            variant: "text-lg/semibold",
                            children: [(0, n.jsx)("div", {
                                className: V().xboxLogoBox,
                                children: (0, n.jsx)("img", {
                                    src: R.Z.get(l.ABu.XBOX).icon.whiteSVG,
                                    alt: ""
                                })
                            }), f.Z.Messages.GET_XBOX_APP]
                        }), (0, n.jsx)(o.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: f.Z.Messages.CONNECT_XBOX_SUCCESS_APP_BODY
                        }), (0, n.jsx)(o.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: (0, n.jsx)(o.Anchor, {
                                href: j.Z.getArticleURL(l.BhN.XBOX_CONNECTION),
                                children: f.Z.Messages.LEARN_MORE
                            })
                        })]
                    }), (0, n.jsx)(X.ZP, {
                        className: V().getXboxAppQR,
                        text: a.X3,
                        size: 90
                    })]
                })
            }

            function H(e) {
                var t = e.onClose;
                return (0, n.jsx)(M.L, {
                    img: (0, n.jsx)("img", {
                        src: k(),
                        width: "232",
                        height: "113",
                        alt: ""
                    }),
                    title: f.Z.Messages.CONNECT_XBOX_SUCCESS_TITLE,
                    body: f.Z.Messages.CONNECT_XBOX_SUCCESS_BODY,
                    content: (0, n.jsx)(U, {}),
                    onClose: t
                })
            }
            var G = r(757942),
                Y = r(20476),
                W = r.n(Y);

            function F(e) {
                var t = e.transitionState,
                    r = e.onClose,
                    c = e.analyticsLocation,
                    s = (0, i.k)(c, l.ABu.XBOX),
                    a = s.slide,
                    O = s.gotoNext,
                    f = s.gotoError,
                    d = s.handleWaitingForConnection,
                    C = s.handleAuthToken,
                    b = s.expectedCallbackState,
                    E = s.callbackData;
                return (0, n.jsx)(o.ModalRoot, {
                    className: W().modal,
                    transitionState: t,
                    disableTrack: !0,
                    children: (0, n.jsxs)(o.Slides, {
                        activeSlide: a,
                        width: 408,
                        children: [(0, n.jsx)(o.Slide, {
                            id: G.O.LANDING,
                            children: (0, n.jsx)(I, {
                                onContinue: O,
                                onClose: r
                            })
                        }), (0, n.jsx)(o.Slide, {
                            id: G.O.PRE_CONNECT,
                            children: (0, n.jsx)(T, {
                                isWaitingForConnection: !1,
                                onWaitingForConnection: d,
                                onAuthToken: C,
                                onError: f,
                                onClose: r
                            })
                        }), (0, n.jsx)(o.Slide, {
                            id: G.O.PRE_CONNECT_WAITING,
                            children: (0, n.jsx)(T, {
                                isWaitingForConnection: !0,
                                expectedCallbackState: b,
                                onAuthToken: C,
                                onError: f,
                                onClose: r
                            })
                        }), (0, n.jsx)(o.Slide, {
                            id: G.O.DISCORD_CONSENT,
                            children: (0, n.jsx)(u, {
                                authToken: E,
                                onContinue: O,
                                onError: f,
                                onClose: r
                            })
                        }), (0, n.jsx)(o.Slide, {
                            id: G.O.ERROR,
                            children: (0, n.jsx)(p, {
                                onContinue: O,
                                onClose: r
                            })
                        }), (0, n.jsx)(o.Slide, {
                            id: G.O.SUCCESS,
                            children: (0, n.jsx)(H, {
                                onClose: r
                            })
                        })]
                    })
                })
            }
        },
        846765: (e, t, r) => {
            "use strict";
            r.d(t, {
                cK: () => b,
                c2: () => v,
                ZP: () => S
            });
            var n = r(785893),
                o = r(667294),
                i = r(101653),
                c = r(399482),
                s = r.n(c);

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function O(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                t && C(e, t)
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        a(e, t, r[t])
                    }))
                }
                return e
            }

            function p(e, t) {
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

            function d(e, t) {
                return !t || "object" !== h(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function C(e, t) {
                C = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return C(e, t)
            }
            var b, E, h = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function g(e) {
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
                    var r, n = u(e);
                    if (t) {
                        var o = u(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return d(this, r)
                }
            }! function(e) {
                e.SIZE_40 = "SIZE_40";
                e.SIZE_60 = "SIZE_60"
            }(b || (b = {}));
            var y = Object.freeze((a(E = {}, b.SIZE_40, "size-40"), a(E, b.SIZE_60, "size-60"), E)),
                _ = r(182765),
                j = function(e) {
                    O(r, e);
                    var t = g(r);

                    function r() {
                        l(this, r);
                        return t.apply(this, arguments)
                    }
                    r.prototype.render = function() {
                        var e = this.props,
                            t = e.className,
                            r = e.text,
                            o = p(e, ["className", "text"]);
                        return (0, n.jsx)("div", {
                            style: {
                                padding: 8,
                                borderRadius: 4,
                                width: o.size,
                                height: o.size,
                                backgroundColor: o.bgColor
                            },
                            className: t,
                            children: (0, n.jsx)(i.Z, f({
                                value: r,
                                level: "M"
                            }, o))
                        })
                    };
                    return r
                }(o.PureComponent);
            j.defaultProps = {
                size: 128,
                bgColor: "#ffffff",
                fgColor: "#000000"
            };
            var v = function(e) {
                O(r, e);
                var t = g(r);

                function r() {
                    l(this, r);
                    return t.apply(this, arguments)
                }
                r.prototype.render = function() {
                    var e = this.props.overlaySize,
                        t = y[null != e ? e : b.SIZE_40];
                    return (0, n.jsxs)("div", {
                        className: s().qrCodeContainer,
                        children: [(0, n.jsx)(j, f({}, this.props)), (0, n.jsx)("div", {
                            className: s().qrCodeOverlay,
                            children: (0, n.jsx)("img", {
                                className: s()[t],
                                src: _,
                                alt: ""
                            })
                        })]
                    })
                };
                return r
            }(o.PureComponent);
            v.defaultProps = {
                size: 144,
                bgColor: "#ffffff",
                fgColor: "#000000"
            };
            const S = j
        },
        755914: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => p
            });
            var n = r(785893),
                o = (r(667294), r(168075)),
                i = r(795308),
                c = r(633878);

            function s(e, t, r) {
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

            function u(e, t, r) {
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

            function f(e, t) {
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
                    s = e.color,
                    l = void 0 === s ? "currentColor" : s,
                    a = e.foreground,
                    p = f(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", O(function(e) {
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
                }({}, (0, c.Z)(p)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        className: a,
                        fill: l,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                        "aria-hidden": !0
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    u = void 0 === o ? 24 : o,
                    O = e.color,
                    f = void 0 === O ? i.Z.colors.INTERACTIVE_NORMAL : O,
                    p = e.colorClass,
                    d = void 0 === p ? "" : p,
                    C = a(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            s(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(C)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        fillRule: "evenodd",
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.737.324L5.917 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.917l4.286 4.676a1 1 0 0 0 .737.324H11a1 1 0 0 0 1-1V3Zm3.1 17.754c-.58.138-1.1-.33-1.1-.926v-.032c0-.497.369-.912.849-1.043a7.003 7.003 0 0 0 0-13.506C14.369 5.116 14 4.7 14 4.204v-.032c0-.596.52-1.064 1.1-.926a9.004 9.004 0 0 1 0 17.508Zm.057-4.242c-.57.273-1.157-.203-1.157-.835v-.14c0-.424.277-.789.633-1.02A2.997 2.997 0 0 0 16 12a2.997 2.997 0 0 0-1.367-2.517c-.356-.231-.633-.596-.633-1.02v-.14c0-.632.587-1.108 1.157-.835a5 5 0 0 1 0 9.024Z",
                        clipRule: "evenodd",
                        className: d
                    })
                }))
            }))
        },
        254758: (e, t, r) => {
            "use strict";
            r.d(t, {
                t: () => n,
                M: () => o
            });
            var n;
            ! function(e) {
                e.XBOX_APPLICATION_ID = "622174530214821906";
                e.PLAYSTATION_APPLICATION_ID = "1008890872156405890";
                e.PLAYSTATION_STAGING_APPLICATION_ID = "984193235868065795"
            }(n || (n = {}));
            var o = {
                PLAYSTATION_APPLICATION_IDS: new Set(["984193235868065795", "1008890872156405890"]),
                ALL: new Set(["622174530214821906", "984193235868065795", "1008890872156405890"])
            }
        }
    }
]);