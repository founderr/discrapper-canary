(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [51694], {
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
        95189: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => M
            });
            var n = r(785893),
                a = r(667294),
                s = r(294184),
                o = r.n(s),
                i = r(70418),
                l = r(515169),
                c = r(386364),
                u = r(802139),
                d = r(443812),
                _ = r(531441),
                O = r(652591),
                p = r(575945),
                N = r(74535);
            const b = function(e) {
                var t = e.className,
                    r = (0, N.ZP)();
                return (0, n.jsxs)("svg", {
                    width: "700",
                    height: "613",
                    viewBox: "0 0 700 613",
                    className: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, n.jsx)("path", {
                        fill: (0, p.wj)(r) ? "url(#paint0_linear_127_14184)" : "white",
                        opacity: (0, p.wj)(r) ? "0.5" : "1",
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
            var f = r(2590),
                g = r(458947),
                E = r(408532),
                h = r.n(E);

            function m(e, t, r) {
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
            var T = function(e) {
                    var t = e.tagText,
                        r = e.className;
                    return (0, n.jsx)(_.IG, {
                        className: o()(h().tag, r),
                        text: t
                    })
                },
                y = function(e) {
                    var t = e.header,
                        r = e.subHeader,
                        a = e.imageSrc,
                        s = e.tagText,
                        l = e.wideStyle;
                    return (0, n.jsxs)("div", {
                        className: o()(h().featureCard, m({}, h().wideStyle, l)),
                        children: [null != s ? (0, n.jsx)(T, {
                            tagText: s,
                            className: h().featureCardTag
                        }) : null, (0, n.jsx)("img", {
                            alt: "",
                            className: o()(h().featureCardImg, m({}, h().wideStyle, l)),
                            src: a
                        }), (0, n.jsxs)("div", {
                            className: h().featureCardTextGroup,
                            children: [(0, n.jsx)(i.Heading, {
                                variant: "heading-lg/extrabold",
                                className: h().featureCardTextHeader,
                                children: t
                            }), (0, n.jsx)(i.Text, {
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
                    _ = e.video,
                    p = e.videoThumbnail,
                    N = e.modalDismissibleContent,
                    E = e.header,
                    T = e.subHeader,
                    M = e.subHeaderExtra,
                    j = e.featureCards,
                    S = e.changeLogId,
                    P = e.button,
                    A = r.onClose,
                    D = r.transitionState,
                    x = (0, d.Dt)(),
                    v = j.length % 2 == 0;
                a.useEffect((function() {
                    (0, l.kk)(N);
                    var e = Date.now();
                    O.default.track(f.rMx.CHANGE_LOG_OPENED, {
                        change_log_id: S
                    });
                    return function() {
                        O.default.track(f.rMx.CHANGE_LOG_CLOSED, {
                            change_log_id: S,
                            seconds_open: Math.round((Date.now() - e) / 1e3)
                        });
                        (0, l.EW)(N, {
                            dismissAction: g.L.DISMISS
                        })
                    }
                }), [N, S]);
                return (0, n.jsxs)(i.ModalRoot, {
                    className: o()(h().root, t),
                    transitionState: D,
                    "aria-labelledby": x,
                    children: [(0, n.jsx)(i.ModalCloseButton, {
                        className: h().closeButton,
                        onClick: A
                    }), (0, n.jsx)(b, {
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
                            href: s,
                            thumbnail: p,
                            video: _,
                            maxWidth: _.width,
                            maxHeight: _.height,
                            renderVideoComponent: c.lV,
                            renderImageComponent: c.Yi,
                            renderLinkComponent: c.iT,
                            onPlay: function() {
                                O.default.track(f.rMx.CHANGE_LOG_VIDEO_INTERACTED, {
                                    change_log_id: S
                                })
                            }
                        }), (0, n.jsx)(i.Heading, {
                            variant: "heading-lg/extrabold",
                            className: h().bodyText,
                            children: T
                        }), null == M ? void 0 : M(), (0, n.jsx)("div", {
                            className: o()(h().featureCardGroup, m({}, h().wideStyle, v)),
                            children: j.map((function(e, t) {
                                return (0, n.jsx)(y, C(function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {},
                                            n = Object.keys(r);
                                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                                        }))));
                                        n.forEach((function(t) {
                                            m(e, t, r[t])
                                        }))
                                    }
                                    return e
                                }({}, e), {
                                    wideStyle: v
                                }), "".concat(e.header, "_").concat(t))
                            }))
                        }), P()]
                    })]
                })
            }
        },
        651694: (e, t, r) => {
            "use strict";
            r.r(t);
            r.d(t, {
                default: () => U
            });
            var n = r(785893),
                a = (r(667294), r(202351)),
                s = r(418705),
                o = r(70418),
                i = r(579581),
                l = r(153686),
                c = r(19585),
                u = r(276611),
                d = r(384411),
                _ = r(709189),
                O = r(652591),
                p = r(348592),
                N = r(536392),
                b = r(116094),
                f = r(717035),
                g = r(203600);

            function E(e) {
                var t = e.defaultString,
                    r = e.onNonSubscriber,
                    n = e.onTier0TrialOffer,
                    s = e.onTier2TrialOffer,
                    o = e.onTier0TrialPeriod,
                    i = e.onTier2TrialPeriod,
                    l = e.onNonTier2Subscriber,
                    c = e.onTier2Subscriber,
                    u = e.onCustomCriteria,
                    d = (0, f.N)(),
                    _ = (0, a.e7)([N.Z], (function() {
                        return N.Z.getPremiumTypeSubscription()
                    })),
                    O = b.ZP.getPremiumTypeFromSubscription(_);
                return null != u ? u() : null != d && g.nG[d.trial_id].skus.includes(g.Si.TIER_0) ? null != n ? n : t : null != d && g.nG[d.trial_id].skus.includes(g.Si.TIER_2) ? null != s ? s : t : null != _ && null != _.trialId && O === g.p9.TIER_0 ? null != o ? o : t : null != _ && null != _.trialId && O === g.p9.TIER_2 ? null != i ? i : t : null == O ? null != r ? r : t : O === g.p9.TIER_0 || O === g.p9.TIER_1 ? null != l ? l : t : O === g.p9.TIER_2 && null != c ? c : t
            }
            var h = r(95189),
                m = r(2590),
                C = r(473708),
                T = r(586271),
                y = r.n(T),
                M = r(939992),
                j = r.n(M),
                S = r(518996),
                P = r.n(S),
                A = r(252635),
                D = r.n(A),
                x = r(497206),
                v = r.n(x);

            function I(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        I(e, t, r[t])
                    }))
                }
                return e
            }

            function w(e, t) {
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
            var L = "2023_q4_nitro_drop",
                H = "DnkvLW5052Y";

            function U(e) {
                var t = e.renderModalProps,
                    r = t.onClose,
                    N = (0, a.e7)([d.default], (function() {
                        return d.default.locale
                    })),
                    b = N.split("-")[0],
                    f = "en" === b ? "0" : "1",
                    T = "zh-CN" === N ? "zh-Hans" : "zh-TW" === N ? "zh-Hant" : b,
                    M = {
                        url: "".concat((0, m.ivE)(H), "?vq=large&rel=0&controls=0&showinfo=0&cc_load_policy=").concat(f, "&cc_lang_pref=").concat(T),
                        width: 498,
                        height: 280
                    },
                    S = {
                        url: "https://i.ytimg.com/vi/".concat(H, "/maxresdefault.jpg"),
                        width: 498,
                        height: 280
                    },
                    A = (0, i.O)().location,
                    x = (0, c.Z)(l.Z.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL).analyticsLocations,
                    I = E({
                        defaultString: C.Z.Messages.BOGO_CLAIM_OFFER
                    }),
                    U = E({
                        defaultString: "get_nitro_button",
                        onNonTier2Subscriber: "upgrade_plan_button"
                    });
                return (0, n.jsx)(h.Z, {
                    renderModalProps: t,
                    videoHref: "https://youtu.be/".concat(H),
                    video: M,
                    videoThumbnail: S,
                    modalDismissibleContent: s.z$.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL,
                    header: C.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_HEADER_NON_SUB,
                    subHeader: C.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_NON_SUB,
                    subHeaderExtra: function() {
                        return (0, n.jsx)(o.Anchor, {
                            className: y().termsApplyAnchor,
                            href: p.Z.getArticleURL(m.BhN.SUMMER_2023_BOGO),
                            children: (0, n.jsx)(o.Heading, {
                                variant: "heading-md/normal",
                                className: y().termsApplyBodyText,
                                children: C.Z.Messages.BOGO_TERMS_APPLY
                            })
                        })
                    },
                    featureCards: [{
                        header: C.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_EARLY_ACCESS_HEADER,
                        subHeader: C.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_EARLY_ACCESS_DESCRIPTION,
                        imageSrc: j()
                    }, {
                        header: C.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SPECIAL_PRICING_HEADER,
                        subHeader: C.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SPECIAL_PRICING_DESCRIPTION,
                        imageSrc: D()
                    }, {
                        header: C.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_CUSTOM_APP_ICON_HEADER,
                        subHeader: C.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_CUSTOM_APP_ICON_DESCRIPTION,
                        imageSrc: P()
                    }, {
                        header: C.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_UNLIMITED_SUPER_REACTIONS_HEADER,
                        subHeader: C.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_UNLIMITED_SUPER_REACTIONS_DESCRIPTION,
                        imageSrc: P()
                    }],
                    changeLogId: L,
                    button: function() {
                        var e = Date.now();
                        return (0, n.jsxs)(_.C, {
                            className: y().buttonWide,
                            innerClassName: y().innerButton,
                            color: o.Button.Colors.GREEN,
                            size: o.Button.Sizes.SMALL,
                            onClick: function() {
                                O.default.track(m.rMx.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: L,
                                    cta_type: U,
                                    seconds_open: Math.round((Date.now() - e) / 1e3),
                                    target: "q4_drop_payment_modal"
                                });
                                (0, u.Z)({
                                    subscriptionTier: g.Si.TIER_2,
                                    analyticsLocations: x,
                                    analyticsObject: w(R({}, A), {
                                        object: m.qAy.BUTTON_CTA,
                                        objectType: m.Qqv.TIER_2
                                    }),
                                    onClose: function(e) {
                                        e && r()
                                    }
                                })
                            },
                            children: [(0, n.jsx)("img", {
                                alt: "",
                                className: y().nitroIconSubHeader,
                                src: v()
                            }), I]
                        })
                    }
                })
            }
        }
    }
]);