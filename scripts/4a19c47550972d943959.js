(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["48732"], {
        121432: function(e, t, a) {
            "use strict";
            e.exports = a.p + "21351b92881882ca8597.svg"
        },
        169903: function(e, t, a) {
            "use strict";
            e.exports = a.p + "867436a0aaf9edda9601.svg"
        },
        389291: function(e, t, a) {
            "use strict";
            e.exports = a.p + "bb95de121233bf246961.svg"
        },
        676084: function(e, t, a) {
            "use strict";
            e.exports = a.p + "2b2bc7e0b5e6dc0c2182.svg"
        },
        981125: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return R
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("446674"),
                r = a("151426"),
                l = a("77078"),
                i = a("997289"),
                o = a("812204"),
                d = a("685665"),
                c = a("649844"),
                u = a("915639"),
                _ = a("697218"),
                m = a("181114"),
                E = a("599110"),
                N = a("701909"),
                h = a("719923"),
                A = a("702542"),
                g = a("646718"),
                f = a("49111"),
                C = a("782340"),
                O = a("444552"),
                M = a("169903"),
                p = a("389291"),
                D = a("676084"),
                x = a("121432");
            let T = "2023_summer_bogo",
                b = "DnkvLW5052Y";

            function R(e) {
                let {
                    renderModalProps: t
                } = e, {
                    onClose: a
                } = t, R = (0, n.useStateFromStores)([u.default], () => u.default.locale), y = R.split("-")[0], v = "en" === y ? "0" : "1", S = "zh-CN" === R ? "zh-Hans" : "zh-TW" === R ? "zh-Hant" : y, L = {
                    url: "".concat((0, f.YOUTUBE_EMBED_URL)(b), "?vq=large&rel=0&controls=0&showinfo=0&cc_load_policy=").concat(v, "&cc_lang_pref=").concat(S),
                    width: 498,
                    height: 280
                }, {
                    location: j
                } = (0, i.useAnalyticsContext)(), {
                    analyticsLocations: B
                } = (0, d.default)(o.default.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), G = (0, n.useStateFromStores)([_.default], () => _.default.getCurrentUser()), H = (0, h.isPremiumExactly)(G, g.PremiumTypes.TIER_2), U = (0, h.isPremium)(G) && !H;
                return (0, s.jsx)(A.default, {
                    renderModalProps: t,
                    video: {
                        type: "embed",
                        embed: L,
                        thumbnail: {
                            url: "https://i.ytimg.com/vi/".concat(b, "/maxresdefault.jpg"),
                            width: 498,
                            height: 280
                        },
                        href: "https://youtu.be/".concat(b)
                    },
                    modalDismissibleContent: r.DismissibleContent.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL,
                    header: C.default.Messages.BOGO_ANNOUNCEMENT_MODAL_HEADER,
                    subHeader: C.default.Messages.BOGO_ANNOUNCEMENT_MODAL_SUBHEADER,
                    subHeaderExtra: () => (0, s.jsx)(l.Anchor, {
                        className: O.termsApplyAnchor,
                        href: N.default.getArticleURL(f.HelpdeskArticles.SUMMER_2023_BOGO),
                        children: (0, s.jsx)(l.Heading, {
                            variant: "heading-md/normal",
                            className: O.termsApplyBodyText,
                            children: C.default.Messages.BOGO_TERMS_APPLY
                        })
                    }),
                    featureCards: [{
                        header: C.default.Messages.BOGO_ANNOUNCEMENT_MODAL_REMIXING_CARD_HEADER,
                        subHeader: C.default.Messages.BOGO_ANNOUNCEMENT_MODAL_REMIXING_CARD_BODY_FORMATTED.format({
                            helpCenterLink: N.default.getArticleURL(f.HelpdeskArticles.REMIXING)
                        }),
                        imageSrc: M,
                        tagText: C.default.Messages.EARLY_ACCESS
                    }, {
                        header: C.default.Messages.BOGO_ANNOUNCEMENT_MODAL_THEMES_CARD_HEADER,
                        subHeader: C.default.Messages.BOGO_ANNOUNCEMENT_MODAL_THEMES_CARD_BODY,
                        imageSrc: D
                    }, {
                        header: C.default.Messages.BOGO_ANNOUNCEMENT_MODAL_SOUNDBOARD_CARD_HEADER,
                        subHeader: C.default.Messages.BOGO_ANNOUNCEMENT_MODAL_SOUNDBOARD_CARD_BODY_FORMATTED,
                        imageSrc: p
                    }],
                    changeLogId: T,
                    button: () => {
                        let e = U ? "upgrade_plan_button" : "get_nitro_button",
                            t = Date.now();
                        return (0, s.jsxs)(m.default, {
                            className: O.buttonWide,
                            innerClassName: O.innerButton,
                            color: l.Button.Colors.GREEN,
                            size: l.Button.Sizes.SMALL,
                            onClick: () => {
                                E.default.track(f.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: T,
                                    cta_type: e,
                                    seconds_open: Math.round((Date.now() - t) / 1e3),
                                    target: "bogo_payment_model"
                                }), (0, c.default)({
                                    subscriptionTier: g.PremiumSubscriptionSKUs.TIER_2,
                                    analyticsLocations: B,
                                    analyticsObject: {
                                        ...j,
                                        object: f.AnalyticsObjects.BUTTON_CTA,
                                        objectType: f.AnalyticsObjectTypes.TIER_2
                                    },
                                    onClose: e => {
                                        e && a()
                                    }
                                })
                            },
                            children: [(0, s.jsx)("img", {
                                alt: "",
                                className: O.nitroIconSubHeader,
                                src: x
                            }), C.default.Messages.BOGO_CLAIM_OFFER]
                        })
                    }
                })
            }
        },
        215429: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("669491"),
                r = a("819855"),
                l = a("77078"),
                i = a("841098"),
                o = e => {
                    let {
                        className: t
                    } = e, a = (0, i.default)(), o = (0, l.useToken)(n.default.colors.BACKGROUND_ACCENT).hex();
                    return (0, s.jsx)("svg", {
                        width: "700",
                        height: "120",
                        viewBox: "0 0 700 120",
                        className: t,
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, s.jsx)("path", {
                            fill: (0, r.isThemeDark)(a) ? o : "white",
                            opacity: "1",
                            d: "M351 39.047C185.4 -31.2102 48 9.77319 0 39.047V583.068C0 587.486 3.58174 591.068 8.00002 591.068H692C696.418 591.068 700 587.486 700 583.068V39.047C653.333 68.3208 516.6 109.304 351 39.047Z"
                        })
                    })
                }
        },
        702542: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return p
                }
            });
            var s = a("37983"),
                n = a("884691"),
                r = a("414456"),
                l = a.n(r),
                i = a("446674"),
                o = a("77078"),
                d = a("206230"),
                c = a("10641"),
                u = a("933629"),
                _ = a("560176"),
                m = a("476765"),
                E = a("956089"),
                N = a("58608"),
                h = a("599110"),
                A = a("215429"),
                g = a("49111"),
                f = a("994428"),
                C = a("236998");
            let O = e => {
                    let {
                        tagText: t,
                        className: a
                    } = e;
                    return (0, s.jsx)(E.TextBadge, {
                        className: l(C.tag, a),
                        text: t
                    })
                },
                M = e => {
                    let {
                        header: t,
                        subHeader: a,
                        imageSrc: n,
                        tagText: r,
                        wideStyle: i
                    } = e;
                    return (0, s.jsxs)("div", {
                        className: l(C.featureCard, {
                            [C.wideStyle]: i
                        }),
                        children: [null != r ? (0, s.jsx)(O, {
                            tagText: r,
                            className: C.featureCardTag
                        }) : null, (0, s.jsx)("img", {
                            alt: "",
                            className: l(C.featureCardImg, {
                                [C.wideStyle]: i
                            }),
                            src: n
                        }), (0, s.jsxs)("div", {
                            className: C.featureCardTextGroup,
                            children: [(0, s.jsx)(o.Heading, {
                                variant: "heading-lg/extrabold",
                                className: C.featureCardTextHeader,
                                children: t
                            }), (0, s.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                children: a
                            })]
                        })]
                    })
                };

            function p(e) {
                let {
                    className: t,
                    renderModalProps: a,
                    video: r,
                    videoClassname: E,
                    modalDismissibleContent: O,
                    modalTopExtra: p,
                    header: D,
                    subHeader: x,
                    subHeaderExtra: T,
                    featureCards: b,
                    changeLogId: R,
                    button: y
                } = e, {
                    onClose: v,
                    transitionState: S
                } = a, L = (0, m.useUID)(), j = b.length % 2 == 0, B = (0, i.useStateFromStores)([d.default], () => d.default.useReducedMotion);
                return n.useEffect(() => {
                    (0, c.requestMarkDismissibleContentAsShown)(O);
                    let e = Date.now();
                    return h.default.track(g.AnalyticEvents.CHANGE_LOG_OPENED, {
                        change_log_id: R
                    }), () => {
                        h.default.track(g.AnalyticEvents.CHANGE_LOG_CLOSED, {
                            change_log_id: R,
                            seconds_open: Math.round((Date.now() - e) / 1e3)
                        }), (0, c.markDismissibleContentAsDismissed)(O, {
                            dismissAction: f.ContentDismissActionType.DISMISS
                        })
                    }
                }, [O, R]), (0, s.jsxs)(o.ModalRoot, {
                    className: l(C.root, t),
                    transitionState: S,
                    "aria-labelledby": L,
                    children: [(0, s.jsx)(o.ModalCloseButton, {
                        className: C.closeButton,
                        onClick: v
                    }), (0, s.jsx)(A.default, {
                        className: C.splash
                    }), null == p ? void 0 : p(), (0, s.jsxs)(o.ModalContent, {
                        className: C.content,
                        children: [(0, s.jsx)(o.Heading, {
                            variant: "display-md",
                            className: C.headerText,
                            children: D
                        }), "video" === r.type ? (0, s.jsx)(N.default, {
                            className: l(C.video, E),
                            autoPlay: !B,
                            loop: !0,
                            muted: !0,
                            controls: !0,
                            src: r.src,
                            onPlay: () => {
                                h.default.track(g.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
                                    change_log_id: R
                                })
                            }
                        }) : (0, s.jsx)(_.EmbedVideo, {
                            className: l(C.video, E),
                            allowFullScreen: !1,
                            href: r.href,
                            thumbnail: r.thumbnail,
                            video: r.embed,
                            maxWidth: r.embed.width,
                            maxHeight: r.embed.height,
                            renderVideoComponent: u.renderVideoComponent,
                            renderImageComponent: u.renderImageComponent,
                            renderLinkComponent: u.renderMaskedLinkComponent,
                            onPlay: () => {
                                h.default.track(g.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
                                    change_log_id: R
                                })
                            }
                        }), (0, s.jsx)(o.Heading, {
                            variant: "heading-lg/extrabold",
                            className: C.bodyText,
                            children: x
                        }), null == T ? void 0 : T(), (0, s.jsx)("div", {
                            className: l(C.featureCardGroup, {
                                [C.wideStyle]: j
                            }),
                            children: b.map((e, t) => (0, s.jsx)(M, {
                                ...e,
                                wideStyle: j
                            }, "".concat(e.header, "_").concat(t)))
                        }), y()]
                    })]
                })
            }
        }
    }
]);