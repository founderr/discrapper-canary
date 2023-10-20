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
                Z: () => M
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
                g = t(458947),
                E = t(408532),
                h = t.n(E);

            function T(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function m(e, r) {
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
            var C = function(e) {
                    var r = e.tagText,
                        t = e.className;
                    return (0, n.jsx)(_.IG, {
                        className: s()(h().tag, t),
                        text: r
                    })
                },
                y = function(e) {
                    var r = e.header,
                        t = e.subHeader,
                        a = e.imageSrc,
                        o = e.tagText,
                        l = e.wideStyle;
                    return (0, n.jsxs)("div", {
                        className: s()(h().featureCard, T({}, h().wideStyle, l)),
                        children: [null != o ? (0, n.jsx)(C, {
                            tagText: o,
                            className: h().featureCardTag
                        }) : null, (0, n.jsx)("img", {
                            alt: "",
                            className: s()(h().featureCardImg, T({}, h().wideStyle, l)),
                            src: a
                        }), (0, n.jsxs)("div", {
                            className: h().featureCardTextGroup,
                            children: [(0, n.jsx)(i.Heading, {
                                variant: "heading-lg/extrabold",
                                className: h().featureCardTextHeader,
                                children: r
                            }), (0, n.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                children: t
                            })]
                        })]
                    })
                };

            function M(e) {
                var r = e.className,
                    t = e.renderModalProps,
                    o = e.videoHref,
                    _ = e.video,
                    p = e.videoThumbnail,
                    f = e.modalDismissibleContent,
                    E = e.header,
                    C = e.subHeader,
                    M = e.subHeaderExtra,
                    P = e.featureCards,
                    S = e.changeLogId,
                    j = e.button,
                    v = t.onClose,
                    A = t.transitionState,
                    D = (0, d.Dt)(),
                    x = P.length % 2 == 0;
                a.useEffect((function() {
                    (0, l.kk)(f);
                    var e = Date.now();
                    O.default.track(b.rMx.CHANGE_LOG_OPENED, {
                        change_log_id: S
                    });
                    return function() {
                        O.default.track(b.rMx.CHANGE_LOG_CLOSED, {
                            change_log_id: S,
                            seconds_open: Math.round((Date.now() - e) / 1e3)
                        });
                        (0, l.EW)(f, {
                            dismissAction: g.L.DISMISS
                        })
                    }
                }), [f, S]);
                return (0, n.jsxs)(i.ModalRoot, {
                    className: s()(h().root, r),
                    transitionState: A,
                    "aria-labelledby": D,
                    children: [(0, n.jsx)(i.ModalCloseButton, {
                        className: h().closeButton,
                        onClick: v
                    }), (0, n.jsx)(N, {
                        className: h().splash
                    }), (0, n.jsxs)(i.ModalContent, {
                        className: h().content,
                        children: [(0, n.jsx)(i.Heading, {
                            variant: "display-md",
                            className: h().headerText,
                            children: E
                        }), (0, n.jsx)(u.BC, {
                            className: h().video,
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
                                    change_log_id: S
                                })
                            }
                        }), (0, n.jsx)(i.Heading, {
                            variant: "heading-lg/extrabold",
                            className: h().bodyText,
                            children: C
                        }), null == M ? void 0 : M(), (0, n.jsx)("div", {
                            className: s()(h().featureCardGroup, T({}, h().wideStyle, x)),
                            children: P.map((function(e, r) {
                                return (0, n.jsx)(y, m(function(e) {
                                    for (var r = 1; r < arguments.length; r++) {
                                        var t = null != arguments[r] ? arguments[r] : {},
                                            n = Object.keys(t);
                                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                                        }))));
                                        n.forEach((function(r) {
                                            T(e, r, t[r])
                                        }))
                                    }
                                    return e
                                }({}, e), {
                                    wideStyle: x
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
                g = t(203600);

            function E(e) {
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
                return null != u ? u() : null != d && g.nG[d.trial_id].skus.includes(g.Si.TIER_0) ? null != n ? n : r : null != d && g.nG[d.trial_id].skus.includes(g.Si.TIER_2) ? null != o ? o : r : null != _ && null != _.trialId && O === g.p9.TIER_0 ? null != s ? s : r : null != _ && null != _.trialId && O === g.p9.TIER_2 ? null != i ? i : r : null == O ? null != t ? t : r : O === g.p9.TIER_0 || O === g.p9.TIER_1 ? null != l ? l : r : O === g.p9.TIER_2 && null != c ? c : r
            }
            var h = t(95189),
                T = t(2590),
                m = t(473708),
                C = t(586271),
                y = t.n(C),
                M = t(939992),
                P = t.n(M),
                S = t(518996),
                j = t.n(S),
                v = t(252635),
                A = t.n(v),
                D = t(497206),
                x = t.n(D);

            function R(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function I(e) {
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

            function w(e, r) {
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
            var L = "2023_q4_nitro_drop",
                H = "DnkvLW5052Y";

            function U(e) {
                var r = e.renderModalProps,
                    t = r.onClose,
                    N = (0, a.e7)([d.default], (function() {
                        return d.default.locale
                    })),
                    C = N.split("-")[0],
                    M = "en" === C ? "0" : "1",
                    S = "zh-CN" === N ? "zh-Hans" : "zh-TW" === N ? "zh-Hant" : C,
                    v = {
                        url: "".concat((0, T.ivE)(H), "?vq=large&rel=0&controls=0&showinfo=0&cc_load_policy=").concat(M, "&cc_lang_pref=").concat(S),
                        width: 498,
                        height: 280
                    },
                    D = {
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
                    B = E({
                        defaultResponse: m.Z.Messages.BILLING_SUBSCRIBE_TO_PLAN,
                        onTier0TrialOffer: k,
                        onTier2TrialOffer: k,
                        onNonTier2Subscriber: m.Z.Messages.INTERACTION_PREMIUM_UPSELL_CTA
                    }),
                    Q = E({
                        defaultResponse: "get_nitro_button",
                        onNonTier2Subscriber: "upgrade_plan_button",
                        onTier0TrialOffer: "trial_offer_button",
                        onTier2TrialOffer: "trial_offer_button"
                    }),
                    z = E({
                        defaultResponse: function() {
                            return (0, u.Z)({
                                subscriptionTier: g.Si.TIER_2,
                                analyticsLocations: U,
                                analyticsObject: w(I({}, R), {
                                    object: T.qAy.BUTTON_CTA,
                                    objectType: T.Qqv.TIER_2
                                }),
                                onClose: function(e) {
                                    e && t()
                                }
                            })
                        }
                    });
                return (0, n.jsx)(h.Z, {
                    renderModalProps: r,
                    videoHref: "https://youtu.be/".concat(H),
                    video: v,
                    videoThumbnail: D,
                    modalDismissibleContent: o.z$.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL,
                    header: m.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_HEADER_NON_SUB,
                    subHeader: m.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_NON_SUB,
                    subHeaderExtra: function() {
                        return (0, n.jsx)(s.Anchor, {
                            className: y().termsApplyAnchor,
                            href: p.Z.getArticleURL(T.BhN.SUMMER_2023_BOGO),
                            children: (0, n.jsx)(s.Heading, {
                                variant: "heading-md/normal",
                                className: y().termsApplyBodyText,
                                children: m.Z.Messages.BOGO_TERMS_APPLY
                            })
                        })
                    },
                    featureCards: [{
                        header: m.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_EARLY_ACCESS_HEADER,
                        subHeader: m.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_EARLY_ACCESS_DESCRIPTION,
                        imageSrc: P()
                    }, {
                        header: m.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SPECIAL_PRICING_HEADER,
                        subHeader: m.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SPECIAL_PRICING_DESCRIPTION,
                        imageSrc: A()
                    }, {
                        header: m.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_CUSTOM_APP_ICON_HEADER,
                        subHeader: m.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_CUSTOM_APP_ICON_DESCRIPTION,
                        imageSrc: j()
                    }, {
                        header: m.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_UNLIMITED_SUPER_REACTIONS_HEADER,
                        subHeader: m.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_UNLIMITED_SUPER_REACTIONS_DESCRIPTION,
                        imageSrc: j()
                    }],
                    changeLogId: L,
                    button: function() {
                        var e = Date.now();
                        return (0, n.jsxs)(_.C, {
                            className: y().buttonWide,
                            innerClassName: y().innerButton,
                            color: s.Button.Colors.GREEN,
                            size: s.Button.Sizes.SMALL,
                            onClick: function() {
                                O.default.track(T.rMx.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: L,
                                    cta_type: Q,
                                    seconds_open: Math.round((Date.now() - e) / 1e3),
                                    target: "q4_drop_payment_modal"
                                });
                                z()
                            },
                            children: [(0, n.jsx)("img", {
                                alt: "",
                                className: y().nitroIconSubHeader,
                                src: x()
                            }), B]
                        })
                    }
                })
            }
        }
    }
]);