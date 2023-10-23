(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [51694], {
        497206: (e, r, t) => {
            e.exports = t.p + "5fe15d1753b3a2c9050dc9750d255163.svg"
        },
        939992: (e, r, t) => {
            e.exports = t.p + "e8ebbad9be20a7ec5f74220813a67a62.svg"
        },
        518996: (e, r, t) => {
            e.exports = t.p + "93e9402a7f92ccbfa4b10d7f4d85b589.svg"
        },
        252635: (e, r, t) => {
            e.exports = t.p + "610c09ac0a80ea131e656001dfc5d1fb.svg"
        },
        95189: (e, r, t) => {
            "use strict";
            t.d(r, {
                Z: () => y
            });
            var n = t(785893),
                a = t(667294),
                o = t(294184),
                s = t.n(o),
                i = t(70418),
                l = t(515169),
                c = t(386364),
                u = t(802139),
                d = t(443812),
                _ = t(531441),
                O = t(652591),
                p = t(575945),
                f = t(74535);
            const N = function(e) {
                var r = e.className,
                    t = (0, f.ZP)();
                return (0, n.jsxs)("svg", {
                    width: "700",
                    height: "613",
                    viewBox: "0 0 700 613",
                    className: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, n.jsx)("path", {
                        fill: (0, p.wj)(t) ? "url(#paint0_linear_127_14184)" : "white",
                        opacity: (0, p.wj)(t) ? "0.5" : "1",
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
            var b = t(2590),
                E = t(458947),
                g = t(408532),
                T = t.n(g);

            function h(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function C(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }
            var m = function(e) {
                    var r = e.tagText,
                        t = e.className;
                    return (0, n.jsx)(_.IG, {
                        className: s()(T().tag, t),
                        text: r
                    })
                },
                M = function(e) {
                    var r = e.header,
                        t = e.subHeader,
                        a = e.imageSrc,
                        o = e.tagText,
                        l = e.wideStyle;
                    return (0, n.jsxs)("div", {
                        className: s()(T().featureCard, h({}, T().wideStyle, l)),
                        children: [null != o ? (0, n.jsx)(m, {
                            tagText: o,
                            className: T().featureCardTag
                        }) : null, (0, n.jsx)("img", {
                            alt: "",
                            className: s()(T().featureCardImg, h({}, T().wideStyle, l)),
                            src: a
                        }), (0, n.jsxs)("div", {
                            className: T().featureCardTextGroup,
                            children: [(0, n.jsx)(i.Heading, {
                                variant: "heading-lg/extrabold",
                                className: T().featureCardTextHeader,
                                children: r
                            }), (0, n.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                children: t
                            })]
                        })]
                    })
                };

            function y(e) {
                var r = e.className,
                    t = e.renderModalProps,
                    o = e.videoHref,
                    _ = e.video,
                    p = e.videoThumbnail,
                    f = e.modalDismissibleContent,
                    g = e.header,
                    m = e.subHeader,
                    y = e.subHeaderExtra,
                    P = e.featureCards,
                    A = e.changeLogId,
                    j = e.button,
                    S = t.onClose,
                    D = t.transitionState,
                    v = (0, d.Dt)(),
                    I = P.length % 2 == 0;
                a.useEffect((function() {
                    (0, l.kk)(f);
                    var e = Date.now();
                    O.default.track(b.rMx.CHANGE_LOG_OPENED, {
                        change_log_id: A
                    });
                    return function() {
                        O.default.track(b.rMx.CHANGE_LOG_CLOSED, {
                            change_log_id: A,
                            seconds_open: Math.round((Date.now() - e) / 1e3)
                        });
                        (0, l.EW)(f, {
                            dismissAction: E.L.DISMISS
                        })
                    }
                }), [f, A]);
                return (0, n.jsxs)(i.ModalRoot, {
                    className: s()(T().root, r),
                    transitionState: D,
                    "aria-labelledby": v,
                    children: [(0, n.jsx)(i.ModalCloseButton, {
                        className: T().closeButton,
                        onClick: S
                    }), (0, n.jsx)(N, {
                        className: T().splash
                    }), (0, n.jsxs)(i.ModalContent, {
                        className: T().content,
                        children: [(0, n.jsx)(i.Heading, {
                            variant: "display-md",
                            className: T().headerText,
                            children: g
                        }), (0, n.jsx)(u.BC, {
                            className: T().video,
                            allowFullScreen: !1,
                            href: o,
                            thumbnail: p,
                            video: _,
                            maxWidth: _.width,
                            maxHeight: _.height,
                            renderVideoComponent: c.lV,
                            renderImageComponent: c.Yi,
                            renderLinkComponent: c.iT,
                            onPlay: function() {
                                O.default.track(b.rMx.CHANGE_LOG_VIDEO_INTERACTED, {
                                    change_log_id: A
                                })
                            }
                        }), (0, n.jsx)(i.Heading, {
                            variant: "heading-lg/extrabold",
                            className: T().bodyText,
                            children: m
                        }), null == y ? void 0 : y(), (0, n.jsx)("div", {
                            className: s()(T().featureCardGroup, h({}, T().wideStyle, I)),
                            children: P.map((function(e, r) {
                                return (0, n.jsx)(M, C(function(e) {
                                    for (var r = 1; r < arguments.length; r++) {
                                        var t = null != arguments[r] ? arguments[r] : {},
                                            n = Object.keys(t);
                                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                                        }))));
                                        n.forEach((function(r) {
                                            h(e, r, t[r])
                                        }))
                                    }
                                    return e
                                }({}, e), {
                                    wideStyle: I
                                }), "".concat(e.header, "_").concat(r))
                            }))
                        }), j()]
                    })]
                })
            }
        },
        651694: (e, r, t) => {
            "use strict";
            t.r(r);
            t.d(r, {
                default: () => U
            });
            var n = t(785893),
                a = (t(667294), t(202351)),
                o = t(418705),
                s = t(70418),
                i = t(579581),
                l = t(153686),
                c = t(19585),
                u = t(276611),
                d = t(384411),
                _ = t(709189),
                O = t(652591),
                p = t(348592),
                f = t(116094),
                N = t(536392),
                b = t(717035),
                E = t(203600);

            function g(e) {
                var r = e.defaultResponse,
                    t = e.onNonSubscriber,
                    n = e.onTier0TrialOffer,
                    o = e.onTier2TrialOffer,
                    s = e.onTier0TrialPeriod,
                    i = e.onTier2TrialPeriod,
                    l = e.onNonTier2Subscriber,
                    c = e.onTier2Subscriber,
                    u = e.onCustomCriteria,
                    d = (0, b.N)(),
                    _ = (0, a.e7)([N.Z], (function() {
                        return N.Z.getPremiumTypeSubscription()
                    })),
                    O = f.ZP.getPremiumTypeFromSubscription(_);
                return null != u ? u() : null != d && E.nG[d.trial_id].skus.includes(E.Si.TIER_0) ? null != n ? n : r : null != d && E.nG[d.trial_id].skus.includes(E.Si.TIER_2) ? null != o ? o : r : null != _ && null != _.trialId && O === E.p9.TIER_0 ? null != s ? s : r : null != _ && null != _.trialId && O === E.p9.TIER_2 ? null != i ? i : r : null == O ? null != t ? t : r : O === E.p9.TIER_0 || O === E.p9.TIER_1 ? null != l ? l : r : O === E.p9.TIER_2 && null != c ? c : r
            }
            var T = t(95189),
                h = t(2590),
                C = t(473708),
                m = t(586271),
                M = t.n(m),
                y = t(939992),
                P = t.n(y),
                A = t(518996),
                j = t.n(A),
                S = t(252635),
                D = t.n(S),
                v = t(497206),
                I = t.n(v);

            function R(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function x(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    n.forEach((function(r) {
                        R(e, r, t[r])
                    }))
                }
                return e
            }

            function L(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }
            var w = "2023_q4_nitro_drop",
                H = "DnkvLW5052Y";

            function U(e) {
                var r = e.renderModalProps,
                    t = r.onClose,
                    N = (0, a.e7)([d.default], (function() {
                        return d.default.locale
                    })),
                    m = N.split("-")[0],
                    y = "en" === m ? "0" : "1",
                    A = "zh-CN" === N ? "zh-Hans" : "zh-TW" === N ? "zh-Hant" : m,
                    S = {
                        url: "".concat((0, h.ivE)(H), "?vq=large&rel=0&controls=0&showinfo=0&cc_load_policy=").concat(y, "&cc_lang_pref=").concat(A),
                        width: 498,
                        height: 280
                    },
                    v = {
                        url: "https://i.ytimg.com/vi/".concat(H, "/maxresdefault.jpg"),
                        width: 498,
                        height: 280
                    },
                    R = (0, i.O)().location,
                    U = (0, c.Z)(l.Z.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL).analyticsLocations,
                    Z = (0,
                        b.N)(),
                    G = null == Z ? void 0 : Z.subscription_trial,
                    k = (0, f.Rt)({
                        intervalType: null == G ? void 0 : G.interval,
                        intervalCount: null == G ? void 0 : G.interval_count
                    }),
                    B = g({
                        defaultResponse: C.Z.Messages.BILLING_SUBSCRIBE_TO_PLAN,
                        onTier0TrialOffer: k,
                        onTier2TrialOffer: k,
                        onNonTier2Subscriber: C.Z.Messages.INTERACTION_PREMIUM_UPSELL_CTA
                    }),
                    Q = g({
                        defaultResponse: "get_nitro_button",
                        onNonTier2Subscriber: "upgrade_plan_button",
                        onTier0TrialOffer: "trial_offer_button",
                        onTier2TrialOffer: "trial_offer_button"
                    }),
                    z = g({
                        defaultResponse: function() {
                            return (0, u.Z)({
                                subscriptionTier: E.Si.TIER_2,
                                analyticsLocations: U,
                                analyticsObject: L(x({}, R), {
                                    object: h.qAy.BUTTON_CTA,
                                    objectType: h.Qqv.TIER_2
                                }),
                                onClose: function(e) {
                                    e && t()
                                }
                            })
                        }
                    });
                return (0, n.jsx)(T.Z, {
                    renderModalProps: r,
                    videoHref: "https://youtu.be/".concat(H),
                    video: S,
                    videoThumbnail: v,
                    modalDismissibleContent: o.z$.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL,
                    header: C.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_HEADER,
                    subHeader: null != G ? C.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_TRIAL_ELIGIBLE : C.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_NON_TRIAL_ELIGIBLE,
                    subHeaderExtra: function() {
                        return (0, n.jsx)(s.Anchor, {
                            className: M().termsApplyAnchor,
                            href: p.Z.getArticleURL(h.BhN.SUMMER_2023_BOGO),
                            children: (0, n.jsx)(s.Heading, {
                                variant: "heading-md/normal",
                                className: M().termsApplyBodyText,
                                children: C.Z.Messages.BOGO_TERMS_APPLY
                            })
                        })
                    },
                    featureCards: [{
                        header: C.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_EARLY_ACCESS_HEADER,
                        subHeader: C.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_EARLY_ACCESS_DESCRIPTION,
                        imageSrc: P()
                    }, {
                        header: C.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SPECIAL_PRICING_HEADER,
                        subHeader: C.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SPECIAL_PRICING_DESCRIPTION,
                        imageSrc: D()
                    }, {
                        header: C.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_CUSTOM_APP_ICON_HEADER,
                        subHeader: C.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_CUSTOM_APP_ICON_DESCRIPTION,
                        imageSrc: j()
                    }, {
                        header: C.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_UNLIMITED_SUPER_REACTIONS_HEADER,
                        subHeader: C.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_UNLIMITED_SUPER_REACTIONS_DESCRIPTION,
                        imageSrc: j()
                    }],
                    changeLogId: w,
                    button: function() {
                        var e = Date.now();
                        return (0, n.jsxs)(_.C, {
                            className: M().buttonWide,
                            innerClassName: M().innerButton,
                            color: s.Button.Colors.GREEN,
                            size: s.Button.Sizes.SMALL,
                            onClick: function() {
                                O.default.track(h.rMx.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: w,
                                    cta_type: Q,
                                    seconds_open: Math.round((Date.now() - e) / 1e3),
                                    target: "q4_drop_payment_modal"
                                });
                                z()
                            },
                            children: [(0, n.jsx)("img", {
                                alt: "",
                                className: M().nitroIconSubHeader,
                                src: I()
                            }), B]
                        })
                    }
                })
            }
        }
    }
]);