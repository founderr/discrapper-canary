(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [85473], {
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
        985473: (e, t, r) => {
            "use strict";
            r.r(t);
            r.d(t, {
                default: () => ee
            });
            var n = r(785893),
                a = r(667294),
                o = r(202351),
                s = r(418705),
                c = r(304548),
                i = r(579581),
                l = r(153686),
                d = r(19585),
                u = r(276611),
                O = r(384411),
                p = r(473903),
                _ = r(709189),
                g = r(652591),
                f = r(348592),
                b = r(116094),
                h = r(294184),
                N = r.n(h),
                m = r(515169),
                E = r(386364),
                y = r(802139),
                C = r(443812),
                j = r(531441),
                M = r(575945),
                x = r(74535);
            const A = function(e) {
                var t = e.className,
                    r = (0, x.ZP)();
                return (0, n.jsxs)("svg", {
                    width: "700",
                    height: "613",
                    viewBox: "0 0 700 613",
                    className: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, n.jsx)("path", {
                        fill: (0, M.wj)(r) ? "url(#paint0_linear_127_14184)" : "white",
                        opacity: (0, M.wj)(r) ? "0.5" : "1",
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
            var D = r(2590),
                v = r(458947),
                w = r(408532),
                T = r.n(w);

            function S(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
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
            var R = function(e) {
                    var t = e.tagText,
                        r = e.className;
                    return (0, n.jsx)(j.IG, {
                        className: N()(T().tag, r),
                        text: t
                    })
                },
                H = function(e) {
                    var t = e.header,
                        r = e.subHeader,
                        a = e.imageSrc,
                        o = e.tagText,
                        s = e.wideStyle;
                    return (0, n.jsxs)("div", {
                        className: N()(T().featureCard, S({}, T().wideStyle, s)),
                        children: [null != o ? (0, n.jsx)(R, {
                            tagText: o,
                            className: T().featureCardTag
                        }) : null, (0, n.jsx)("img", {
                            alt: "",
                            className: N()(T().featureCardImg, S({}, T().wideStyle, s)),
                            src: a
                        }), (0, n.jsxs)("div", {
                            className: N()(T().featureCardTextGroup, S({}, T().wideStyle, s)),
                            children: [(0, n.jsx)(c.Heading, {
                                variant: "heading-lg/extrabold",
                                className: T().featureCardTextHeader,
                                children: t
                            }), (0, n.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                children: r
                            })]
                        })]
                    })
                };

            function L(e) {
                var t = e.renderModalProps,
                    r = e.videoHref,
                    o = e.video,
                    s = e.videoThumbnail,
                    i = e.modalDismissibleContent,
                    l = e.header,
                    d = e.subHeader,
                    u = e.subHeaderExtra,
                    O = e.featureCards,
                    p = e.changeLogId,
                    _ = e.button,
                    f = t.onClose,
                    b = t.transitionState,
                    h = (0,
                        C.Dt)(),
                    j = O.length % 2 == 0;
                a.useEffect((function() {
                    (0, m.kk)(i);
                    var e = Date.now();
                    g.default.track(D.rMx.CHANGE_LOG_OPENED, {
                        change_log_id: p
                    });
                    return function() {
                        g.default.track(D.rMx.CHANGE_LOG_CLOSED, {
                            change_log_id: p,
                            seconds_open: Math.round((Date.now() - e) / 1e3)
                        });
                        (0, m.EW)(i, {
                            dismissAction: v.L.DISMISS
                        })
                    }
                }), [i, p]);
                return (0, n.jsxs)(c.ModalRoot, {
                    className: T().root,
                    transitionState: b,
                    "aria-labelledby": h,
                    children: [(0, n.jsx)(c.ModalCloseButton, {
                        className: T().closeButton,
                        onClick: f
                    }), (0, n.jsx)(A, {
                        className: T().splash
                    }), (0, n.jsxs)(c.ModalContent, {
                        className: T().content,
                        children: [(0, n.jsx)(c.Heading, {
                            variant: "display-md",
                            className: T().headerText,
                            children: l
                        }), (0, n.jsx)(y.BC, {
                            className: T().video,
                            allowFullScreen: !1,
                            href: r,
                            thumbnail: s,
                            video: o,
                            maxWidth: o.width,
                            maxHeight: o.height,
                            renderVideoComponent: E.lV,
                            renderImageComponent: E.Yi,
                            renderLinkComponent: E.iT,
                            onPlay: function() {
                                g.default.track(D.rMx.CHANGE_LOG_VIDEO_INTERACTED, {
                                    change_log_id: p
                                })
                            }
                        }), (0, n.jsx)(c.Heading, {
                            variant: "heading-lg/extrabold",
                            className: T().bodyText,
                            children: d
                        }), null == u ? void 0 : u(), (0, n.jsx)("div", {
                            className: N()(T().featureCardGroup, S({}, T().wideStyle, j)),
                            children: O.map((function(e, t) {
                                return (0, n.jsx)(H, P(function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {},
                                            n = Object.keys(r);
                                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                                        }))));
                                        n.forEach((function(t) {
                                            S(e, t, r[t])
                                        }))
                                    }
                                    return e
                                }({}, e), {
                                    wideStyle: j
                                }), "".concat(e.header, "_").concat(t))
                            }))
                        }), _()]
                    })]
                })
            }
            var B = r(203600),
                G = r(473708),
                I = r(917199),
                U = r.n(I),
                k = r(939992),
                Z = r.n(k),
                z = r(518996),
                Y = r.n(z),
                F = r(252635),
                V = r.n(F),
                W = r(497206),
                q = r.n(W);

            function X(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function K(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        X(e, t, r[t])
                    }))
                }
                return e
            }

            function Q(e, t) {
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
            var $ = "2023_summer_bogo",
                J = "DnkvLW5052Y";

            function ee(e) {
                var t = e.renderModalProps,
                    r = t.onClose,
                    a = (0, o.e7)([O.default], (function() {
                        return O.default.locale
                    })),
                    h = a.split("-")[0],
                    N = "en" === h ? "0" : "1",
                    m = "zh-CN" === a ? "zh-Hans" : "zh-TW" === a ? "zh-Hant" : h,
                    E = {
                        url: "".concat((0,
                            D.ivE)(J), "?vq=large&rel=0&controls=0&showinfo=0&cc_load_policy=").concat(N, "&cc_lang_pref=").concat(m),
                        width: 498,
                        height: 280
                    },
                    y = {
                        url: "https://i.ytimg.com/vi/".concat(J, "/maxresdefault.jpg"),
                        width: 498,
                        height: 280
                    },
                    C = (0, i.O)().location,
                    j = (0, d.Z)(l.Z.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL).analyticsLocations,
                    M = (0, o.e7)([p.default], (function() {
                        return p.default.getCurrentUser()
                    })),
                    x = (0, b.M5)(M, B.p9.TIER_2),
                    A = (0, b.I5)(M) && !x;
                return (0, n.jsx)(L, {
                    renderModalProps: t,
                    videoHref: "https://youtu.be/".concat(J),
                    video: E,
                    videoThumbnail: y,
                    modalDismissibleContent: s.z$.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL,
                    header: G.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_HEADER,
                    subHeader: G.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_SUBHEADER,
                    subHeaderExtra: function() {
                        return (0, n.jsx)(c.Anchor, {
                            className: U().termsApplyAnchor,
                            href: f.Z.getArticleURL(D.BhN.SUMMER_2023_BOGO),
                            children: (0, n.jsx)(c.Heading, {
                                variant: "heading-md/normal",
                                className: U().termsApplyBodyText,
                                children: G.Z.Messages.BOGO_TERMS_APPLY
                            })
                        })
                    },
                    featureCards: [{
                        header: G.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_REMIXING_CARD_HEADER,
                        subHeader: G.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_REMIXING_CARD_BODY_FORMATTED.format({
                            helpCenterLink: f.Z.getArticleURL(D.BhN.REMIXING)
                        }),
                        imageSrc: Z(),
                        tagText: G.Z.Messages.EARLY_ACCESS
                    }, {
                        header: G.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_THEMES_CARD_HEADER,
                        subHeader: G.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_THEMES_CARD_BODY,
                        imageSrc: V()
                    }, {
                        header: G.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_SOUNDBOARD_CARD_HEADER,
                        subHeader: G.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_SOUNDBOARD_CARD_BODY_FORMATTED,
                        imageSrc: Y()
                    }],
                    changeLogId: $,
                    button: function() {
                        var e = A ? "upgrade_plan_button" : "get_nitro_button",
                            t = Date.now();
                        return (0, n.jsxs)(_.C, {
                            className: U().buttonWide,
                            innerClassName: U().innerButton,
                            color: c.Button.Colors.GREEN,
                            size: c.Button.Sizes.SMALL,
                            onClick: function() {
                                g.default.track(D.rMx.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: $,
                                    cta_type: e,
                                    seconds_open: Math.round((Date.now() - t) / 1e3),
                                    target: "bogo_payment_model"
                                });
                                (0, u.Z)({
                                    subscriptionTier: B.Si.TIER_2,
                                    analyticsLocations: j,
                                    analyticsObject: Q(K({}, C), {
                                        object: D.qAy.BUTTON_CTA,
                                        objectType: D.Qqv.TIER_2
                                    }),
                                    onClose: function(e) {
                                        e && r()
                                    }
                                })
                            },
                            children: [(0, n.jsx)("img", {
                                alt: "",
                                className: U().nitroIconSubHeader,
                                src: q()
                            }), G.Z.Messages.BOGO_CLAIM_OFFER]
                        })
                    }
                })
            }
        }
    }
]);