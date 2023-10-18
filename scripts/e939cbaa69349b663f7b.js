(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [8728, 86174], {
        497206: (e, t, r) => {
            e.exports = r.p + "5fe15d1753b3a2c9050dc9750d255163.svg"
        },
        939992: (e, t, r) => {
            e.exports = r.p + "e8ebbad9be20a7ec5f74220813a67a62.svg"
        },
        518996: (e, t, r) => {
            e.exports = r.p + "93e9402a7f92ccbfa4b10d7f4d85b589.svg"
        },
        252635: (e, t, r) => {
            e.exports = r.p + "610c09ac0a80ea131e656001dfc5d1fb.svg"
        },
        486174: (e, t, r) => {
            "use strict";
            r.r(t);
            r.d(t, {
                default: () => L
            });
            var n = r(785893),
                a = (r(667294), r(202351)),
                s = r(418705),
                o = r(304548),
                c = r(579581),
                i = r(153686),
                l = r(19585),
                d = r(276611),
                u = r(384411),
                O = r(473903),
                p = r(709189),
                _ = r(652591),
                g = r(348592),
                f = r(116094),
                b = r(95189),
                h = r(203600),
                N = r(2590),
                m = r(473708),
                E = r(917199),
                C = r.n(E),
                j = r(939992),
                y = r.n(j),
                M = r(518996),
                x = r.n(M),
                A = r(252635),
                D = r.n(A),
                v = r(497206),
                w = r.n(v);

            function T(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        T(e, t, r[t])
                    }))
                }
                return e
            }

            function P(e, t) {
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
            var R = "2023_summer_bogo",
                H = "DnkvLW5052Y";

            function L(e) {
                var t = e.renderModalProps,
                    r = t.onClose,
                    E = (0, a.e7)([u.default], (function() {
                        return u.default.locale
                    })),
                    j = E.split("-")[0],
                    M = "en" === j ? "0" : "1",
                    A = "zh-CN" === E ? "zh-Hans" : "zh-TW" === E ? "zh-Hant" : j,
                    v = {
                        url: "".concat((0,
                            N.ivE)(H), "?vq=large&rel=0&controls=0&showinfo=0&cc_load_policy=").concat(M, "&cc_lang_pref=").concat(A),
                        width: 498,
                        height: 280
                    },
                    T = {
                        url: "https://i.ytimg.com/vi/".concat(H, "/maxresdefault.jpg"),
                        width: 498,
                        height: 280
                    },
                    L = (0, c.O)().location,
                    B = (0, l.Z)(i.Z.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL).analyticsLocations,
                    G = (0, a.e7)([O.default], (function() {
                        return O.default.getCurrentUser()
                    })),
                    I = (0, f.M5)(G, h.p9.TIER_2),
                    U = (0, f.I5)(G) && !I;
                return (0, n.jsx)(b.Z, {
                    renderModalProps: t,
                    videoHref: "https://youtu.be/".concat(H),
                    video: v,
                    videoThumbnail: T,
                    modalDismissibleContent: s.z$.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL,
                    header: m.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_HEADER,
                    subHeader: m.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_SUBHEADER,
                    subHeaderExtra: function() {
                        return (0, n.jsx)(o.Anchor, {
                            className: C().termsApplyAnchor,
                            href: g.Z.getArticleURL(N.BhN.SUMMER_2023_BOGO),
                            children: (0, n.jsx)(o.Heading, {
                                variant: "heading-md/normal",
                                className: C().termsApplyBodyText,
                                children: m.Z.Messages.BOGO_TERMS_APPLY
                            })
                        })
                    },
                    featureCards: [{
                        header: m.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_REMIXING_CARD_HEADER,
                        subHeader: m.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_REMIXING_CARD_BODY_FORMATTED.format({
                            helpCenterLink: g.Z.getArticleURL(N.BhN.REMIXING)
                        }),
                        imageSrc: y(),
                        tagText: m.Z.Messages.EARLY_ACCESS
                    }, {
                        header: m.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_THEMES_CARD_HEADER,
                        subHeader: m.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_THEMES_CARD_BODY,
                        imageSrc: D()
                    }, {
                        header: m.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_SOUNDBOARD_CARD_HEADER,
                        subHeader: m.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_SOUNDBOARD_CARD_BODY_FORMATTED,
                        imageSrc: x()
                    }],
                    changeLogId: R,
                    button: function() {
                        var e = U ? "upgrade_plan_button" : "get_nitro_button",
                            t = Date.now();
                        return (0, n.jsxs)(p.C, {
                            className: C().buttonWide,
                            innerClassName: C().innerButton,
                            color: o.Button.Colors.GREEN,
                            size: o.Button.Sizes.SMALL,
                            onClick: function() {
                                _.default.track(N.rMx.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: R,
                                    cta_type: e,
                                    seconds_open: Math.round((Date.now() - t) / 1e3),
                                    target: "bogo_payment_model"
                                });
                                (0, d.Z)({
                                    subscriptionTier: h.Si.TIER_2,
                                    analyticsLocations: B,
                                    analyticsObject: P(S({}, L), {
                                        object: N.qAy.BUTTON_CTA,
                                        objectType: N.Qqv.TIER_2
                                    }),
                                    onClose: function(e) {
                                        e && r()
                                    }
                                })
                            },
                            children: [(0, n.jsx)("img", {
                                alt: "",
                                className: C().nitroIconSubHeader,
                                src: w()
                            }), m.Z.Messages.BOGO_CLAIM_OFFER]
                        })
                    }
                })
            }
        },
        95189: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => M
            });
            var n = r(785893),
                a = r(667294),
                s = r(294184),
                o = r.n(s),
                c = r(304548),
                i = r(515169),
                l = r(386364),
                d = r(802139),
                u = r(443812),
                O = r(531441),
                p = r(652591),
                _ = r(575945),
                g = r(74535);
            const f = function(e) {
                var t = e.className,
                    r = (0, g.ZP)();
                return (0, n.jsxs)("svg", {
                    width: "700",
                    height: "613",
                    viewBox: "0 0 700 613",
                    className: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, n.jsx)("path", {
                        fill: (0, _.wj)(r) ? "url(#paint0_linear_127_14184)" : "white",
                        opacity: (0, _.wj)(r) ? "0.5" : "1",
                        d: "M351 41C185.4 -31.8 48 10.6667 0 41V605C0 609.418 3.58174 613 8.00002 613H692C696.418 613 700 609.418 700 605V41C653.333 71.3333 516.6 113.8 351 41Z"
                    }), (0, n.jsx)("defs", {
                        children: (0, n.jsxs)("linearGradient", {
                            id: "paint0_linear_127_14184",
                            x1: "349",
                            y1: "0.803345",
                            x2: "349",
                            y2: "613",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, n.jsx)("stop", {
                                stopColor: "#606060"
                            }), (0, n.jsx)("stop", {
                                offset: "1",
                                stopColor: "#313338"
                            })]
                        })
                    })]
                })
            };
            var b = r(2590),
                h = r(458947),
                N = r(408532),
                m = r.n(N);

            function E(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function C(e, t) {
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
            var j = function(e) {
                    var t = e.tagText,
                        r = e.className;
                    return (0, n.jsx)(O.IG, {
                        className: o()(m().tag, r),
                        text: t
                    })
                },
                y = function(e) {
                    var t = e.header,
                        r = e.subHeader,
                        a = e.imageSrc,
                        s = e.tagText,
                        i = e.wideStyle;
                    return (0, n.jsxs)("div", {
                        className: o()(m().featureCard, E({}, m().wideStyle, i)),
                        children: [null != s ? (0, n.jsx)(j, {
                            tagText: s,
                            className: m().featureCardTag
                        }) : null, (0, n.jsx)("img", {
                            alt: "",
                            className: o()(m().featureCardImg, E({}, m().wideStyle, i)),
                            src: a
                        }), (0, n.jsxs)("div", {
                            className: m().featureCardTextGroup,
                            children: [(0, n.jsx)(c.Heading, {
                                variant: "heading-lg/extrabold",
                                className: m().featureCardTextHeader,
                                children: t
                            }), (0, n.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                children: r
                            })]
                        })]
                    })
                };

            function M(e) {
                var t = e.className,
                    r = e.renderModalProps,
                    s = e.videoHref,
                    O = e.video,
                    _ = e.videoThumbnail,
                    g = e.modalDismissibleContent,
                    N = e.header,
                    j = e.subHeader,
                    M = e.subHeaderExtra,
                    x = e.featureCards,
                    A = e.changeLogId,
                    D = e.button,
                    v = r.onClose,
                    w = r.transitionState,
                    T = (0, u.Dt)(),
                    S = x.length % 2 == 0;
                a.useEffect((function() {
                    (0, i.kk)(g);
                    var e = Date.now();
                    p.default.track(b.rMx.CHANGE_LOG_OPENED, {
                        change_log_id: A
                    });
                    return function() {
                        p.default.track(b.rMx.CHANGE_LOG_CLOSED, {
                            change_log_id: A,
                            seconds_open: Math.round((Date.now() - e) / 1e3)
                        });
                        (0, i.EW)(g, {
                            dismissAction: h.L.DISMISS
                        })
                    }
                }), [g, A]);
                return (0, n.jsxs)(c.ModalRoot, {
                    className: o()(m().root, t),
                    transitionState: w,
                    "aria-labelledby": T,
                    children: [(0, n.jsx)(c.ModalCloseButton, {
                        className: m().closeButton,
                        onClick: v
                    }), (0, n.jsx)(f, {
                        className: m().splash
                    }), (0, n.jsxs)(c.ModalContent, {
                        className: m().content,
                        children: [(0, n.jsx)(c.Heading, {
                            variant: "display-md",
                            className: m().headerText,
                            children: N
                        }), (0, n.jsx)(d.BC, {
                            className: m().video,
                            allowFullScreen: !1,
                            href: s,
                            thumbnail: _,
                            video: O,
                            maxWidth: O.width,
                            maxHeight: O.height,
                            renderVideoComponent: l.lV,
                            renderImageComponent: l.Yi,
                            renderLinkComponent: l.iT,
                            onPlay: function() {
                                p.default.track(b.rMx.CHANGE_LOG_VIDEO_INTERACTED, {
                                    change_log_id: A
                                })
                            }
                        }), (0, n.jsx)(c.Heading, {
                            variant: "heading-lg/extrabold",
                            className: m().bodyText,
                            children: j
                        }), null == M ? void 0 : M(), (0, n.jsx)("div", {
                            className: o()(m().featureCardGroup, E({}, m().wideStyle, S)),
                            children: x.map((function(e, t) {
                                return (0, n.jsx)(y, C(function(e) {
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
                                }({}, e), {
                                    wideStyle: S
                                }), "".concat(e.header, "_").concat(t))
                            }))
                        }), D()]
                    })]
                })
            }
        }
    }
]);