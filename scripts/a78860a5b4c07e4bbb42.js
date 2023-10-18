(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [24816], {
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
                Z: () => y
            });
            var n = r(785893),
                a = r(667294),
                s = r(294184),
                o = r.n(s),
                c = r(70418),
                i = r(515169),
                l = r(386364),
                d = r(802139),
                u = r(443812),
                _ = r(531441),
                O = r(652591),
                p = r(575945),
                N = r(74535);
            const f = function(e) {
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
            var g = r(2590),
                b = r(458947),
                E = r(408532),
                h = r.n(E);

            function C(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function m(e, t) {
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
            var M = function(e) {
                    var t = e.tagText,
                        r = e.className;
                    return (0, n.jsx)(_.IG, {
                        className: o()(h().tag, r),
                        text: t
                    })
                },
                j = function(e) {
                    var t = e.header,
                        r = e.subHeader,
                        a = e.imageSrc,
                        s = e.tagText,
                        i = e.wideStyle;
                    return (0, n.jsxs)("div", {
                        className: o()(h().featureCard, C({}, h().wideStyle, i)),
                        children: [null != s ? (0, n.jsx)(M, {
                            tagText: s,
                            className: h().featureCardTag
                        }) : null, (0, n.jsx)("img", {
                            alt: "",
                            className: o()(h().featureCardImg, C({}, h().wideStyle, i)),
                            src: a
                        }), (0, n.jsxs)("div", {
                            className: h().featureCardTextGroup,
                            children: [(0, n.jsx)(c.Heading, {
                                variant: "heading-lg/extrabold",
                                className: h().featureCardTextHeader,
                                children: t
                            }), (0, n.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                children: r
                            })]
                        })]
                    })
                };

            function y(e) {
                var t = e.className,
                    r = e.renderModalProps,
                    s = e.videoHref,
                    _ = e.video,
                    p = e.videoThumbnail,
                    N = e.modalDismissibleContent,
                    E = e.header,
                    M = e.subHeader,
                    y = e.subHeaderExtra,
                    A = e.featureCards,
                    D = e.changeLogId,
                    x = e.button,
                    P = r.onClose,
                    S = r.transitionState,
                    v = (0, u.Dt)(),
                    T = A.length % 2 == 0;
                a.useEffect((function() {
                    (0, i.kk)(N);
                    var e = Date.now();
                    O.default.track(g.rMx.CHANGE_LOG_OPENED, {
                        change_log_id: D
                    });
                    return function() {
                        O.default.track(g.rMx.CHANGE_LOG_CLOSED, {
                            change_log_id: D,
                            seconds_open: Math.round((Date.now() - e) / 1e3)
                        });
                        (0, i.EW)(N, {
                            dismissAction: b.L.DISMISS
                        })
                    }
                }), [N, D]);
                return (0, n.jsxs)(c.ModalRoot, {
                    className: o()(h().root, t),
                    transitionState: S,
                    "aria-labelledby": v,
                    children: [(0, n.jsx)(c.ModalCloseButton, {
                        className: h().closeButton,
                        onClick: P
                    }), (0, n.jsx)(f, {
                        className: h().splash
                    }), (0, n.jsxs)(c.ModalContent, {
                        className: h().content,
                        children: [(0, n.jsx)(c.Heading, {
                            variant: "display-md",
                            className: h().headerText,
                            children: E
                        }), (0, n.jsx)(d.BC, {
                            className: h().video,
                            allowFullScreen: !1,
                            href: s,
                            thumbnail: p,
                            video: _,
                            maxWidth: _.width,
                            maxHeight: _.height,
                            renderVideoComponent: l.lV,
                            renderImageComponent: l.Yi,
                            renderLinkComponent: l.iT,
                            onPlay: function() {
                                O.default.track(g.rMx.CHANGE_LOG_VIDEO_INTERACTED, {
                                    change_log_id: D
                                })
                            }
                        }), (0, n.jsx)(c.Heading, {
                            variant: "heading-lg/extrabold",
                            className: h().bodyText,
                            children: M
                        }), null == y ? void 0 : y(), (0, n.jsx)("div", {
                            className: o()(h().featureCardGroup, C({}, h().wideStyle, T)),
                            children: A.map((function(e, t) {
                                return (0, n.jsx)(j, m(function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {},
                                            n = Object.keys(r);
                                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                                        }))));
                                        n.forEach((function(t) {
                                            C(e, t, r[t])
                                        }))
                                    }
                                    return e
                                }({}, e), {
                                    wideStyle: T
                                }), "".concat(e.header, "_").concat(t))
                            }))
                        }), x()]
                    })]
                })
            }
        },
        724816: (e, t, r) => {
            "use strict";
            r.r(t);
            r.d(t, {
                default: () => L
            });
            var n = r(785893),
                a = (r(667294), r(202351)),
                s = r(418705),
                o = r(70418),
                c = r(579581),
                i = r(153686),
                l = r(19585),
                d = r(276611),
                u = r(384411),
                _ = r(473903),
                O = r(709189),
                p = r(652591),
                N = r(348592),
                f = r(116094),
                g = r(95189),
                b = r(203600),
                E = r(2590),
                h = r(473708),
                C = r(586271),
                m = r.n(C),
                M = r(939992),
                j = r.n(M),
                y = r(518996),
                A = r.n(y),
                D = r(252635),
                x = r.n(D),
                P = r(497206),
                S = r.n(P);

            function v(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        v(e, t, r[t])
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
            var R = "2023_q4_nitro_drop",
                I = "DnkvLW5052Y";

            function L(e) {
                var t = e.renderModalProps,
                    r = t.onClose,
                    C = (0, a.e7)([u.default], (function() {
                        return u.default.locale
                    })),
                    M = C.split("-")[0],
                    y = "en" === M ? "0" : "1",
                    D = "zh-CN" === C ? "zh-Hans" : "zh-TW" === C ? "zh-Hant" : M,
                    P = {
                        url: "".concat((0,
                            E.ivE)(I), "?vq=large&rel=0&controls=0&showinfo=0&cc_load_policy=").concat(y, "&cc_lang_pref=").concat(D),
                        width: 498,
                        height: 280
                    },
                    v = {
                        url: "https://i.ytimg.com/vi/".concat(I, "/maxresdefault.jpg"),
                        width: 498,
                        height: 280
                    },
                    L = (0, c.O)().location,
                    H = (0, l.Z)(i.Z.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL).analyticsLocations,
                    U = (0, a.e7)([_.default], (function() {
                        return _.default.getCurrentUser()
                    })),
                    G = (0, f.M5)(U, b.p9.TIER_2),
                    Z = (0, f.I5)(U) && !G;
                return (0, n.jsx)(g.Z, {
                    renderModalProps: t,
                    videoHref: "https://youtu.be/".concat(I),
                    video: P,
                    videoThumbnail: v,
                    modalDismissibleContent: s.z$.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL,
                    header: h.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_HEADER_NON_SUB,
                    subHeader: h.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_NON_SUB,
                    subHeaderExtra: function() {
                        return (0, n.jsx)(o.Anchor, {
                            className: m().termsApplyAnchor,
                            href: N.Z.getArticleURL(E.BhN.SUMMER_2023_BOGO),
                            children: (0, n.jsx)(o.Heading, {
                                variant: "heading-md/normal",
                                className: m().termsApplyBodyText,
                                children: h.Z.Messages.BOGO_TERMS_APPLY
                            })
                        })
                    },
                    featureCards: [{
                        header: h.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_EARLY_ACCESS_HEADER,
                        subHeader: h.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_EARLY_ACCESS_DESCRIPTION,
                        imageSrc: j()
                    }, {
                        header: h.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SPECIAL_PRICING_HEADER,
                        subHeader: h.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SPECIAL_PRICING_DESCRIPTION,
                        imageSrc: x()
                    }, {
                        header: h.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_CUSTOM_APP_ICON_HEADER,
                        subHeader: h.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_CUSTOM_APP_ICON_DESCRIPTION,
                        imageSrc: A()
                    }, {
                        header: h.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_UNLIMITED_SUPER_REACTIONS_HEADER,
                        subHeader: h.Z.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_UNLIMITED_SUPER_REACTIONS_DESCRIPTION,
                        imageSrc: A()
                    }],
                    changeLogId: R,
                    button: function() {
                        var e = Z ? "upgrade_plan_button" : "get_nitro_button",
                            t = Date.now();
                        return (0, n.jsxs)(O.C, {
                            className: m().buttonWide,
                            innerClassName: m().innerButton,
                            color: o.Button.Colors.GREEN,
                            size: o.Button.Sizes.SMALL,
                            onClick: function() {
                                p.default.track(E.rMx.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: R,
                                    cta_type: e,
                                    seconds_open: Math.round((Date.now() - t) / 1e3),
                                    target: "q4_drop_payment_modal"
                                });
                                (0, d.Z)({
                                    subscriptionTier: b.Si.TIER_2,
                                    analyticsLocations: H,
                                    analyticsObject: w(T({}, L), {
                                        object: E.qAy.BUTTON_CTA,
                                        objectType: E.Qqv.TIER_2
                                    }),
                                    onClose: function(e) {
                                        e && r()
                                    }
                                })
                            },
                            children: [(0, n.jsx)("img", {
                                alt: "",
                                className: m().nitroIconSubHeader,
                                src: S()
                            }), h.Z.Messages.BOGO_CLAIM_OFFER]
                        })
                    }
                })
            }
        }
    }
]);