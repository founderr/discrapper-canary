(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [70462], {
        685004: (e, t, n) => {
            e.exports = n.p + "f1905d86f6055d12041b00b167c62bed.png"
        },
        679959: (e, t, n) => {
            e.exports = n.p + "3715adc7157ead5a67f809e60ccefdd4.png"
        },
        227048: (e, t, n) => {
            e.exports = n.p + "f79578c4110c6200e4852ac754887804.png"
        },
        400460: (e, t, n) => {
            e.exports = n.p + "76c020b452b9127b9064984f1324c7a1.png"
        },
        170462: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => H
            });
            var r = n(785893),
                o = (n(667294), n(882723)),
                i = n(786648),
                s = n(959153),
                c = n(520453),
                l = [c.xV.ACTIVITIES_WRITE, c.xV.EMAIL, c.xV.IDENTIFY],
                a = n(2590);

            function C(e) {
                var t = e.authToken,
                    n = e.onContinue,
                    o = e.onError,
                    i = e.onClose;
                return (0, r.jsx)(s.h, {
                    platformType: a.ABu.CRUNCHYROLL,
                    clientId: "981509069309354054",
                    scopes: l,
                    authToken: t,
                    onContinue: n,
                    onError: o,
                    onClose: i
                })
            }
            var u = n(227363),
                O = n(473708);

            function d(e) {
                var t = e.onContinue,
                    n = e.onClose;
                return (0, r.jsx)(u.C, {
                    title: O.Z.Messages.CONNECT_CRUNCHYROLL_ERROR_TITLE,
                    body: O.Z.Messages.CONNECT_CRUNCHYROLL_ERROR_BODY,
                    onClose: n,
                    onContinue: t
                })
            }
            var p = n(466049),
                h = n(348592),
                f = n(525493),
                g = n(271663),
                b = n(227048),
                j = n.n(b);

            function N() {
                return (0, r.jsx)(g.yC, {
                    children: (0, r.jsx)(g.Ux, {
                        text: O.Z.Messages.CONNECT_CRUNCHYROLL_DISPLAY_SHOW_VALUE_PROP,
                        children: (0, r.jsx)(p.Z, {})
                    })
                })
            }

            function y(e) {
                var t = e.onContinue,
                    n = e.onClose,
                    o = h.Z.getArticleURL(a.BhN.CRUNCHYROLL_CONNECTION);
                return (0, r.jsx)(f.m, {
                    platformType: a.ABu.CRUNCHYROLL,
                    headerConnect: O.Z.Messages.CONNECT_CRUNCHYROLL_LANDING_TITLE,
                    body: O.Z.Messages.CONNECT_CRUNCHYROLL_LANDING_BODY,
                    learnMoreLink: o,
                    onClose: n,
                    onContinue: t,
                    img: (0, r.jsx)("img", {
                        src: j(),
                        width: 234,
                        height: 152,
                        alt: ""
                    }),
                    valueProps: (0, r.jsx)(N, {})
                })
            }
            var L = n(797916),
                x = n(685004),
                R = n.n(x),
                v = n(679959),
                E = n.n(v);

            function T(e) {
                var t = e.isWaitingForConnection,
                    n = e.onWaitingForConnection,
                    o = e.expectedCallbackState,
                    i = e.onAuthToken,
                    s = e.onError,
                    c = e.onClose,
                    l = t ? (0, r.jsx)("img", {
                        src: E(),
                        width: "168",
                        height: "124",
                        alt: ""
                    }) : (0, r.jsx)("img", {
                        src: R(),
                        width: "152",
                        height: "123",
                        alt: ""
                    }),
                    C = t ? O.Z.Messages.CRUNCHYROLL_DETAILS_TITLE_WAITING : O.Z.Messages.CRUNCHYROLL_DETAILS_TITLE,
                    u = t ? O.Z.Messages.CRUNCHYROLL_DETAILS_BODY_WAITING : O.Z.Messages.CRUNCHYROLL_DETAILS_BODY;
                return (0, r.jsx)(L.t, {
                    platformType: a.ABu.CRUNCHYROLL,
                    isWaitingForConnection: t,
                    onWaitingForConnection: n,
                    expectedCallbackState: o,
                    onAuthToken: i,
                    onError: s,
                    onClose: c,
                    img: l,
                    title: C,
                    body: u,
                    redirectDestination: "https://crunchyroll.com"
                })
            }
            var m = n(361618),
                S = n(631452),
                _ = n.n(S),
                w = n(400460),
                I = n.n(w);

            function P() {
                return (0, r.jsx)("div", {
                    className: _().getCrunchyrollApp,
                    children: (0, r.jsx)("div", {
                        className: _().getCrunchyrollAppBody,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: (0, r.jsx)(o.Anchor, {
                                href: h.Z.getArticleURL(a.BhN.CRUNCHYROLL_CONNECTION),
                                children: O.Z.Messages.LEARN_MORE
                            })
                        })
                    })
                })
            }

            function A(e) {
                var t = e.onClose;
                return (0, r.jsx)(m.L, {
                    img: (0, r.jsx)("img", {
                        src: I(),
                        width: "224",
                        height: "104",
                        alt: ""
                    }),
                    title: O.Z.Messages.CONNECT_CRUNCHYROLL_SUCCESS_TITLE,
                    body: O.Z.Messages.CONNECT_CRUNCHYROLL_SUCCESS_BODY,
                    content: (0, r.jsx)(P, {}),
                    onClose: t
                })
            }
            var D = n(757942),
                k = n(99235),
                Z = n.n(k);

            function H(e) {
                var t = e.transitionState,
                    n = e.onClose,
                    s = e.analyticsLocation,
                    c = (0, i.k)(s, a.ABu.CRUNCHYROLL),
                    l = c.slide,
                    u = c.gotoNext,
                    O = c.gotoError,
                    p = c.handleWaitingForConnection,
                    h = c.handleAuthToken,
                    f = c.expectedCallbackState,
                    g = c.callbackData;
                return (0, r.jsx)(o.ModalRoot, {
                    className: Z().modal,
                    transitionState: t,
                    disableTrack: !0,
                    children: (0, r.jsxs)(o.Slides, {
                        activeSlide: l,
                        width: 408,
                        children: [(0, r.jsx)(o.Slide, {
                            id: D.O.LANDING,
                            children: (0, r.jsx)(y, {
                                onContinue: u,
                                onClose: n
                            })
                        }), (0, r.jsx)(o.Slide, {
                            id: D.O.PRE_CONNECT,
                            children: (0, r.jsx)(T, {
                                isWaitingForConnection: !1,
                                onWaitingForConnection: p,
                                onAuthToken: h,
                                onError: O,
                                onClose: n
                            })
                        }), (0, r.jsx)(o.Slide, {
                            id: D.O.PRE_CONNECT_WAITING,
                            children: (0, r.jsx)(T, {
                                isWaitingForConnection: !0,
                                expectedCallbackState: f,
                                onAuthToken: h,
                                onError: O,
                                onClose: n
                            })
                        }), (0, r.jsx)(o.Slide, {
                            id: D.O.DISCORD_CONSENT,
                            children: (0, r.jsx)(C, {
                                authToken: g,
                                onContinue: u,
                                onError: O,
                                onClose: n
                            })
                        }), (0, r.jsx)(o.Slide, {
                            id: D.O.ERROR,
                            children: (0, r.jsx)(d, {
                                onContinue: u,
                                onClose: n
                            })
                        }), (0, r.jsx)(o.Slide, {
                            id: D.O.SUCCESS,
                            children: (0, r.jsx)(A, {
                                onClose: n
                            })
                        })]
                    })
                })
            }
        },
        466049: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
                i = n(795308),
                s = n(633878);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
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

            function a(e, t) {
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

            function C(e, t, n) {
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

            function O(e, t) {
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
            const d = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    c = e.color,
                    l = void 0 === c ? "currentColor" : c,
                    a = e.className,
                    d = e.foreground,
                    p = O(e, ["width", "height", "color", "className", "foreground"]);
                return (0, r.jsx)("svg", u(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            C(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, s.Z)(p)), {
                    className: a,
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: d,
                        fill: l,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M16.781 2.27293L14.081 5.7126H9.919L7.219 2.27293L8.781 1L12 5.10008L15.219 1L16.781 2.27293ZM4 6.73175H20C21.1 6.73175 22 7.649 22 8.77007V18.9617C22 20.0828 21.1 21 20 21H4C2.9 21 2 20.0828 2 18.9617V8.77007C2 7.649 2.9 6.73175 4 6.73175ZM4 18.9617H16V8.77007H4V18.9617ZM18 16.4138C18 16.9764 18.448 17.4329 19 17.4329C19.552 17.4329 20 16.9764 20 16.4138C20 15.8512 19.552 15.3946 19 15.3946C18.448 15.3946 18 15.8512 18 16.4138ZM18 11.318C18 11.8806 18.448 12.3371 19 12.3371C19.552 12.3371 20 11.8806 20 11.318C20 10.7554 19.552 10.2988 19 10.2988C18.448 10.2988 18 10.7554 18 11.318Z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    C = void 0 === o ? 24 : o,
                    u = e.color,
                    O = void 0 === u ? i.Z.colors.INTERACTIVE_NORMAL : u,
                    d = e.colorClass,
                    p = void 0 === d ? "" : d,
                    h = a(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", l(function(e) {
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
                }({}, (0, s.Z)(h)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: C,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof O ? O : O.css,
                        fillRule: "evenodd",
                        d: "M4 3a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H4Zm2 17a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H6Z",
                        clipRule: "evenodd",
                        className: p
                    })
                }))
            }))
        }
    }
]);