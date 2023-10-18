(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [75309], {
        517330: (e, t, n) => {
            e.exports = n.p + "3fda15e4017bf48093ecc22ae460ea95.svg"
        },
        425153: (e, t, n) => {
            e.exports = n.p + "19fc21e5552d3ca1db4fe212f853fbd3.svg"
        },
        431649: (e, t, n) => {
            e.exports = n.p + "81f2bc5355bbc730d1695986b5bfe4de.svg"
        },
        635092: (e, t, n) => {
            e.exports = n.p + "0dec0be5de35086553e75e13a443d2a5.svg"
        },
        775309: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => B
            });
            var r, o = n(785893),
                i = (n(667294), n(70418)),
                s = n(786648);
            ! function(e) {
                e.PLAYSTATION = "https://discord.com/connections/playstation/link";
                e.PLAYSTATION_STAGING = "https://discord.com/connections/playstation-stg/link"
            }(r || (r = {}));
            new Set(["https://discord.com/connections/playstation-stg/link", "https://discord.com/connections/playstation/link"]);
            var l = n(254758),
                c = n(959153),
                a = n(2590),
                C = n(550677);

            function d(e) {
                var t = e.platformType,
                    n = e.authToken,
                    i = e.onContinue,
                    s = e.onError,
                    d = e.onClose,
                    u = t === a.ABu.PLAYSTATION_STAGING ? l.t.PLAYSTATION_STAGING_APPLICATION_ID : l.t.PLAYSTATION_APPLICATION_ID,
                    O = t === a.ABu.PLAYSTATION_STAGING ? r.PLAYSTATION_STAGING : r.PLAYSTATION;
                return (0, o.jsx)(c.h, {
                    platformType: t,
                    clientId: u,
                    scopes: C.KL,
                    authToken: n,
                    onContinue: i,
                    onError: s,
                    onClose: d,
                    redirectUri: O
                })
            }
            var u = n(227363),
                O = n(473708);

            function p(e) {
                var t = e.onContinue,
                    n = e.onClose;
                return (0, o.jsx)(u.C, {
                    title: O.Z.Messages.CONNECT_CONSOLE_ERROR_TITLE,
                    body: O.Z.Messages.CONNECT_PS_ERROR_BODY,
                    onClose: n,
                    onContinue: t
                })
            }
            var f = n(633878);

            function g(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function h(e, t) {
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

            function b(e, t) {
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

            function T(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    r = e.height,
                    i = void 0 === r ? 24 : r,
                    s = e.color,
                    l = void 0 === s ? "currentColor" : s,
                    c = e.foreground,
                    a = b(e, ["width", "height", "color", "foreground"]);
                return (0, o.jsx)("svg", h(function(e) {
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
                }({}, (0, f.Z)(a)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 25",
                    children: (0, o.jsx)("path", {
                        className: c,
                        fill: l,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M17.9598 11.9353C17.4729 11.6167 16.8191 11.2112 15.9803 11.2112C14.5817 11.2112 13.3483 12.1684 12.932 13.4612H0.525391L3.90301 7.61133H23.4748L21.3882 11.2261C21.2883 11.2162 21.1876 11.2112 21.0863 11.2112C20.2471 11.2112 19.5928 11.6167 19.1063 11.9353H17.9598ZM15.7138 18.3989C16.2002 17.8094 16.5066 17.2843 16.8108 16.7205H20.2546C20.5588 17.2843 20.8657 17.8094 21.3517 18.3989C21.6203 18.7193 22.1464 18.8611 22.4731 18.8611C22.7232 18.8611 23.5251 18.8611 23.4725 18.025C23.423 17.233 22.9077 14.1051 22.9041 14.0862C22.7421 13.2312 21.9515 12.5612 21.0862 12.5612C20.6117 12.5612 20.1933 12.8362 19.7794 13.1083C19.6878 13.1686 19.5963 13.2287 19.5045 13.2857H17.561C17.469 13.2287 17.3775 13.1684 17.2857 13.1081C16.872 12.8361 16.454 12.5612 15.9793 12.5612C15.1139 12.5612 14.3237 13.2312 14.1613 14.0862C14.1582 14.1051 13.6429 17.233 13.5934 18.025C13.5403 18.8611 14.3426 18.8611 14.5924 18.8611C14.9191 18.8611 15.446 18.7193 15.7138 18.3989Z",
                        "aria-hidden": !0
                    })
                }))
            }
            var P = n(634233),
                j = n(348592),
                S = n(525493),
                y = n(271663),
                N = n(431649),
                _ = n.n(N);

            function A() {
                var e = [O.Z.Messages.PS_VALUE_PROP_VOICE, O.Z.Messages.PS_VALUE_PROP_GAME],
                    t = [O.Z.Messages.PS_VALUE_PROP_GAME];
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(y.yC, {
                        children: (0, o.jsx)(y.pT, {
                            icon: (0, o.jsx)(P.Z, {}),
                            title: O.Z.Messages.PS5,
                            bulletPoints: e
                        })
                    }), (0, o.jsx)(y.yC, {
                        children: (0, o.jsx)(y.pT, {
                            icon: (0, o.jsx)(T, {}),
                            title: O.Z.Messages.PS4,
                            bulletPoints: t
                        })
                    })]
                })
            }

            function v(e) {
                var t = e.platformType,
                    n = e.onContinue,
                    r = e.onClose;
                return (0, o.jsx)(S.m, {
                    platformType: t,
                    headerConnect: O.Z.Messages.CONNECT_PS_LANDING_TITLE,
                    headerReconnect: O.Z.Messages.RECONNECT_PS_LANDING_TITLE,
                    body: O.Z.Messages.CONNECT_PS_LANDING_BODY,
                    onClose: r,
                    onContinue: n,
                    img: (0, o.jsx)("img", {
                        src: _(),
                        width: 230,
                        height: 138,
                        alt: ""
                    }),
                    valueProps: (0, o.jsx)(A, {}),
                    learnMoreLink: j.Z.getArticleURL(a.BhN.PS_CONNECTION)
                })
            }
            var I = n(797916),
                E = n(517330),
                x = n.n(E),
                m = n(425153),
                L = n.n(m);

            function w(e) {
                var t = e.platformType,
                    n = e.isWaitingForConnection,
                    r = e.onWaitingForConnection,
                    i = e.expectedCallbackState,
                    s = e.onAuthToken,
                    l = e.onError,
                    c = e.onClose,
                    a = n ? (0, o.jsx)("img", {
                        src: L(),
                        width: "180",
                        height: "125",
                        alt: ""
                    }) : (0, o.jsx)("img", {
                        src: x(),
                        width: "180",
                        height: "111",
                        alt: ""
                    }),
                    d = n ? O.Z.Messages.CONSOLE_PRECONNECT_TITLE_WAITING : O.Z.Messages.PS_PRECONNECT_TITLE,
                    u = n ? O.Z.Messages.PS_PRECONNECT_BODY_WAITING : O.Z.Messages.PS_PRECONNECT_BODY;
                return (0, o.jsx)(I.t, {
                    platformType: t,
                    isWaitingForConnection: n,
                    onWaitingForConnection: r,
                    expectedCallbackState: i,
                    onAuthToken: s,
                    onError: l,
                    onClose: c,
                    img: a,
                    title: d,
                    body: u,
                    redirectDestination: C.uu
                })
            }
            var R = n(361618),
                k = n(635092),
                D = n.n(k);

            function M(e) {
                var t = e.onClose;
                return (0, o.jsx)(R.L, {
                    img: (0, o.jsx)("img", {
                        src: D(),
                        width: "241 ",
                        height: "118",
                        alt: ""
                    }),
                    title: O.Z.Messages.PS_LINK_SUCCESS_TITLE,
                    body: O.Z.Messages.PS_LINK_SUCCESS_BODY,
                    onClose: t
                })
            }
            var Z = n(757942),
                G = n(20476),
                Y = n.n(G);

            function B(e) {
                var t = e.transitionState,
                    n = e.onClose,
                    r = e.analyticsLocation,
                    l = e.platformType,
                    c = (0,
                        s.k)(r, l),
                    a = c.slide,
                    C = c.gotoNext,
                    u = c.gotoError,
                    O = c.handleWaitingForConnection,
                    f = c.handleAuthToken,
                    g = c.expectedCallbackState,
                    h = c.callbackData;
                return (0, o.jsx)(i.ModalRoot, {
                    className: Y().modal,
                    transitionState: t,
                    disableTrack: !0,
                    children: (0, o.jsxs)(i.Slides, {
                        activeSlide: a,
                        width: 408,
                        children: [(0, o.jsx)(i.Slide, {
                            id: Z.O.LANDING,
                            children: (0, o.jsx)(v, {
                                platformType: l,
                                onContinue: C,
                                onClose: n
                            })
                        }), (0, o.jsx)(i.Slide, {
                            id: Z.O.PRE_CONNECT,
                            children: (0, o.jsx)(w, {
                                platformType: l,
                                isWaitingForConnection: !1,
                                onWaitingForConnection: O,
                                onAuthToken: f,
                                onError: u,
                                onClose: n
                            })
                        }), (0, o.jsx)(i.Slide, {
                            id: Z.O.PRE_CONNECT_WAITING,
                            children: (0, o.jsx)(w, {
                                platformType: l,
                                isWaitingForConnection: !0,
                                expectedCallbackState: g,
                                onAuthToken: f,
                                onError: u,
                                onClose: n
                            })
                        }), (0, o.jsx)(i.Slide, {
                            id: Z.O.DISCORD_CONSENT,
                            children: (0, o.jsx)(d, {
                                platformType: l,
                                authToken: h,
                                onContinue: C,
                                onError: u,
                                onClose: n
                            })
                        }), (0, o.jsx)(i.Slide, {
                            id: Z.O.ERROR,
                            children: (0, o.jsx)(p, {
                                onContinue: C,
                                onClose: n
                            })
                        }), (0, o.jsx)(i.Slide, {
                            id: Z.O.SUCCESS,
                            children: (0, o.jsx)(M, {
                                onClose: n
                            })
                        })]
                    })
                })
            }
        },
        634233: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
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

            function s(e, t) {
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

            function c(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    c = e.height,
                    a = void 0 === c ? 24 : c,
                    C = e.color,
                    d = void 0 === C ? "currentColor" : C,
                    u = e.foreground,
                    O = l(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", s(function(e) {
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
                }({}, (0, o.Z)(O)), {
                    width: n,
                    height: a,
                    viewBox: "0 0 24 25",
                    children: [(0, r.jsx)("path", {
                        className: u,
                        fill: d,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7.72934 2.36505C7.91813 1.79235 8.34289 1.84008 8.76766 1.8878C9.99478 2.03098 11.2219 2.2696 12.449 2.41277C13.1098 2.50822 13.3457 2.84229 13.3929 3.51044C13.4873 7.66249 13.4873 11.8145 13.9593 15.9189C14.0065 16.2529 14.1009 16.6824 13.6289 16.8256C11.7882 17.446 11.3635 19.1164 10.9859 20.739C10.4195 23.2685 10.4667 23.2685 8.01252 23.698C5.93587 24.032 5.93587 24.032 6.03026 21.9322C6.36064 15.5371 6.97419 9.18968 7.68214 2.84229C7.58775 2.69912 7.58775 2.55595 7.72934 2.36505Z",
                        "aria-hidden": !0
                    }), (0, r.jsx)("path", {
                        className: u,
                        fill: d,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M21 22.2862C21 22.4246 21 22.7474 20.9042 23.0703C20.8083 23.5316 20.4729 23.7622 19.9937 23.8545C19.4667 23.9006 19.1312 23.7161 19.0354 23.2548C18.7479 21.9633 17.7896 21.8249 16.5916 21.8249C15.3937 21.8249 14.2437 21.7788 13.9562 23.2548C13.8604 23.67 13.6208 23.9006 13.0937 23.8545C12.5666 23.8083 12.1354 23.5777 12.0874 23.0703C11.7999 21.3637 12.2312 19.7493 13.2374 18.3194C13.5729 17.8582 14.1958 17.7659 14.7229 17.9504C15.8729 18.2733 17.0229 18.2733 18.2208 17.9504C19.1792 17.6737 19.8021 18.181 20.1854 18.9652C20.7125 19.9338 21 20.9486 21 22.2862Z",
                        "aria-hidden": !0
                    }), (0, r.jsx)("path", {
                        className: u,
                        fill: d,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7 2.14794C7 2.28884 7 2.47672 7 2.61763C4.78283 2.57066 3.89596 3.4161 3.9403 5.81153C4.02899 11.0721 4.20636 16.2856 4.29505 21.5462C4.29505 21.9689 4.42808 22.4386 4.11767 22.8613C3.80727 22.6265 3.89596 22.3447 3.89596 22.1098C3.85161 15.8629 3.67424 9.61603 3.05343 3.36913C2.9204 1.81915 2.9204 1.77218 4.47242 1.91309C5.31495 2.00703 6.15747 2.10097 7 2.14794Z",
                        "aria-hidden": !0
                    })]
                }))
            }
        },
        254758: (e, t, n) => {
            "use strict";
            n.d(t, {
                M: () => o,
                t: () => r
            });
            var r;
            ! function(e) {
                e.XBOX_APPLICATION_ID = "622174530214821906";
                e.PLAYSTATION_APPLICATION_ID = "1008890872156405890";
                e.PLAYSTATION_STAGING_APPLICATION_ID = "984193235868065795"
            }(r || (r = {}));
            var o = {
                PLAYSTATION_APPLICATION_IDS: new Set(["984193235868065795", "1008890872156405890"]),
                ALL: new Set(["622174530214821906", "984193235868065795", "1008890872156405890"])
            }
        }
    }
]);