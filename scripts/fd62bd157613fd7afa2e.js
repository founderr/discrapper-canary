(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["94530"], {
        850046: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b4906e79cd865370415e.png"
        },
        229394: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5d0f441ce98c8e4c71f3.png"
        },
        140413: function(e, t, n) {
            "use strict";
            e.exports = n.p + "06d0041aeaeff90570a2.png"
        },
        997265: function(e, t, n) {
            "use strict";
            e.exports = n.p + "74dbc18d1c4fb53b3b66.png"
        },
        362847: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TvIcon: function() {
                    return r
                }
            });
            var s = n("37983");
            n("884691");
            var o = n("669491"),
                i = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = o.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...a
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, i.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, s.jsx)("path", {
                        d: "M4 3C2.34315 3 1 4.34315 1 6V15C1 16.6569 2.34315 18 4 18H20C21.6569 18 23 16.6569 23 15V6C23 4.34315 21.6569 3 20 3H4Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: l
                    }), (0, s.jsx)("path", {
                        d: "M6 20C5.44772 20 5 20.4477 5 21C5 21.5523 5.44772 22 6 22H18C18.5523 22 19 21.5523 19 21C19 20.4477 18.5523 20 18 20H6Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: l
                    })]
                })
            }
        },
        655485: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CRUNCHYROLL_LINK_DEST_ORIGIN: function() {
                    return o
                },
                CRUNCHYROLL_CLIENT_ID: function() {
                    return i
                },
                CRUNCHYROLL_CLIENT_SCOPES: function() {
                    return r
                }
            });
            var s = n("843455");
            let o = "https://crunchyroll.com",
                i = "981509069309354054",
                r = [s.OAuth2Scopes.ACTIVITIES_WRITE, s.OAuth2Scopes.EMAIL, s.OAuth2Scopes.IDENTIFY]
        },
        780421: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("37983");
            n("884691");
            var o = n("755993"),
                i = n("655485"),
                r = n("49111");

            function l(e) {
                let {
                    authToken: t,
                    onContinue: n,
                    onError: l,
                    onClose: a
                } = e;
                return (0, s.jsx)(o.TwoWayLinkDiscordConsent, {
                    platformType: r.PlatformTypes.CRUNCHYROLL,
                    clientId: i.CRUNCHYROLL_CLIENT_ID,
                    scopes: i.CRUNCHYROLL_CLIENT_SCOPES,
                    authToken: t,
                    onContinue: n,
                    onError: l,
                    onClose: a
                })
            }
        },
        768064: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("37983");
            n("884691");
            var o = n("871988"),
                i = n("782340");

            function r(e) {
                let {
                    onContinue: t,
                    onClose: n
                } = e;
                return (0, s.jsx)(o.TwoWayLinkError, {
                    title: i.default.Messages.CONNECT_CRUNCHYROLL_ERROR_TITLE,
                    body: i.default.Messages.CONNECT_CRUNCHYROLL_ERROR_BODY,
                    onClose: n,
                    onContinue: t
                })
            }
        },
        579574: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var s = n("37983");
            n("884691");
            var o = n("855670"),
                i = n("701909"),
                r = n("634644"),
                l = n("106390"),
                a = n("49111"),
                C = n("782340"),
                d = n("140413");

            function c() {
                return (0, s.jsx)(l.ValuePropContainer, {
                    children: (0, s.jsx)(l.ValueProp, {
                        text: C.default.Messages.CONNECT_CRUNCHYROLL_DISPLAY_SHOW_VALUE_PROP,
                        children: (0, s.jsx)(o.default, {})
                    })
                })
            }

            function u(e) {
                let {
                    onContinue: t,
                    onClose: n
                } = e, o = i.default.getArticleURL(a.HelpdeskArticles.CRUNCHYROLL_CONNECTION);
                return (0, s.jsx)(r.TwoWayLinkLanding, {
                    platformType: a.PlatformTypes.CRUNCHYROLL,
                    headerConnect: C.default.Messages.CONNECT_CRUNCHYROLL_LANDING_TITLE,
                    body: C.default.Messages.CONNECT_CRUNCHYROLL_LANDING_BODY,
                    learnMoreLink: o,
                    onClose: n,
                    onContinue: t,
                    img: (0, s.jsx)("img", {
                        src: d,
                        width: 234,
                        height: 152,
                        alt: ""
                    }),
                    valueProps: (0, s.jsx)(c, {})
                })
            }
        },
        620595: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var s = n("37983");
            n("884691");
            var o = n("77078"),
                i = n("997511"),
                r = n("780421"),
                l = n("768064"),
                a = n("579574"),
                C = n("168503"),
                d = n("920460"),
                c = n("598347"),
                u = n("49111"),
                L = n("429152");

            function f(e) {
                let {
                    transitionState: t,
                    onClose: n,
                    analyticsLocation: f
                } = e, {
                    slide: N,
                    gotoNext: T,
                    gotoError: R,
                    handleWaitingForConnection: h,
                    handleAuthToken: p,
                    expectedCallbackState: _,
                    callbackData: O
                } = (0, i.useTwoWayLinkModalSlideManager)(f, u.PlatformTypes.CRUNCHYROLL);
                return (0, s.jsx)(o.ModalRoot, {
                    className: L.modal,
                    transitionState: t,
                    disableTrack: !0,
                    children: (0, s.jsxs)(o.Slides, {
                        activeSlide: N,
                        width: 408,
                        children: [(0, s.jsx)(o.Slide, {
                            id: c.TwoWayLinkModalSlideTypes.LANDING,
                            children: (0, s.jsx)(a.default, {
                                onContinue: T,
                                onClose: n
                            })
                        }), (0, s.jsx)(o.Slide, {
                            id: c.TwoWayLinkModalSlideTypes.PRE_CONNECT,
                            children: (0, s.jsx)(C.default, {
                                isWaitingForConnection: !1,
                                onWaitingForConnection: h,
                                onAuthToken: p,
                                onError: R,
                                onClose: n
                            })
                        }), (0, s.jsx)(o.Slide, {
                            id: c.TwoWayLinkModalSlideTypes.PRE_CONNECT_WAITING,
                            children: (0, s.jsx)(C.default, {
                                isWaitingForConnection: !0,
                                expectedCallbackState: _,
                                onAuthToken: p,
                                onError: R,
                                onClose: n
                            })
                        }), (0, s.jsx)(o.Slide, {
                            id: c.TwoWayLinkModalSlideTypes.DISCORD_CONSENT,
                            children: (0, s.jsx)(r.default, {
                                authToken: O,
                                onContinue: T,
                                onError: R,
                                onClose: n
                            })
                        }), (0, s.jsx)(o.Slide, {
                            id: c.TwoWayLinkModalSlideTypes.ERROR,
                            children: (0, s.jsx)(l.default, {
                                onContinue: T,
                                onClose: n
                            })
                        }), (0, s.jsx)(o.Slide, {
                            id: c.TwoWayLinkModalSlideTypes.SUCCESS,
                            children: (0, s.jsx)(d.default, {
                                onClose: n
                            })
                        })]
                    })
                })
            }
        },
        168503: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var s = n("37983");
            n("884691");
            var o = n("79528"),
                i = n("655485"),
                r = n("49111"),
                l = n("782340"),
                a = n("850046"),
                C = n("229394");

            function d(e) {
                let {
                    isWaitingForConnection: t,
                    onWaitingForConnection: n,
                    expectedCallbackState: d,
                    onAuthToken: c,
                    onError: u,
                    onClose: L
                } = e, f = t ? (0, s.jsx)("img", {
                    src: C,
                    width: "168",
                    height: "124",
                    alt: ""
                }) : (0, s.jsx)("img", {
                    src: a,
                    width: "152",
                    height: "123",
                    alt: ""
                }), N = t ? l.default.Messages.CRUNCHYROLL_DETAILS_TITLE_WAITING : l.default.Messages.CRUNCHYROLL_DETAILS_TITLE, T = t ? l.default.Messages.CRUNCHYROLL_DETAILS_BODY_WAITING : l.default.Messages.CRUNCHYROLL_DETAILS_BODY;
                return (0, s.jsx)(o.TwoWayLinkPreConnect, {
                    platformType: r.PlatformTypes.CRUNCHYROLL,
                    isWaitingForConnection: t,
                    onWaitingForConnection: n,
                    expectedCallbackState: d,
                    onAuthToken: c,
                    onError: u,
                    onClose: L,
                    img: f,
                    title: N,
                    body: T,
                    redirectDestination: i.CRUNCHYROLL_LINK_DEST_ORIGIN
                })
            }
        },
        920460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var s = n("37983");
            n("884691");
            var o = n("77078"),
                i = n("701909"),
                r = n("451039"),
                l = n("49111"),
                a = n("782340"),
                C = n("612827"),
                d = n("997265");

            function c() {
                return (0, s.jsx)("div", {
                    className: C.getCrunchyrollApp,
                    children: (0, s.jsx)("div", {
                        className: C.getCrunchyrollAppBody,
                        children: (0, s.jsx)(o.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: (0, s.jsx)(o.Anchor, {
                                href: i.default.getArticleURL(l.HelpdeskArticles.CRUNCHYROLL_CONNECTION),
                                children: a.default.Messages.LEARN_MORE
                            })
                        })
                    })
                })
            }

            function u(e) {
                let {
                    onClose: t
                } = e;
                return (0, s.jsx)(r.TwoWayLinkSuccess, {
                    img: (0, s.jsx)("img", {
                        src: d,
                        width: "224",
                        height: "104",
                        alt: ""
                    }),
                    title: a.default.Messages.CONNECT_CRUNCHYROLL_SUCCESS_TITLE,
                    body: a.default.Messages.CONNECT_CRUNCHYROLL_SUCCESS_BODY,
                    content: (0, s.jsx)(c, {}),
                    onClose: t
                })
            }
        },
        855670: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("37983");
            n("884691");
            var o = n("469563"),
                i = n("362847"),
                r = n("75196"),
                l = (0, o.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: o = "currentColor",
                        className: i,
                        foreground: l,
                        ...a
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, r.default)(a),
                        className: i,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            className: l,
                            fill: o,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.781 2.27293L14.081 5.7126H9.919L7.219 2.27293L8.781 1L12 5.10008L15.219 1L16.781 2.27293ZM4 6.73175H20C21.1 6.73175 22 7.649 22 8.77007V18.9617C22 20.0828 21.1 21 20 21H4C2.9 21 2 20.0828 2 18.9617V8.77007C2 7.649 2.9 6.73175 4 6.73175ZM4 18.9617H16V8.77007H4V18.9617ZM18 16.4138C18 16.9764 18.448 17.4329 19 17.4329C19.552 17.4329 20 16.9764 20 16.4138C20 15.8512 19.552 15.3946 19 15.3946C18.448 15.3946 18 15.8512 18 16.4138ZM18 11.318C18 11.8806 18.448 12.3371 19 12.3371C19.552 12.3371 20 11.8806 20 11.318C20 10.7554 19.552 10.2988 19 10.2988C18.448 10.2988 18 10.7554 18 11.318Z"
                        })
                    })
                }, i.TvIcon, void 0, {
                    size: 24
                })
        }
    }
]);