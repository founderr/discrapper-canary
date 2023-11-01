(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["87480"], {
        121432: function(e, t, s) {
            "use strict";
            e.exports = s.p + "21351b92881882ca8597.svg"
        },
        169903: function(e, t, s) {
            "use strict";
            e.exports = s.p + "867436a0aaf9edda9601.svg"
        },
        389291: function(e, t, s) {
            "use strict";
            e.exports = s.p + "bb95de121233bf246961.svg"
        },
        676084: function(e, t, s) {
            "use strict";
            e.exports = s.p + "2b2bc7e0b5e6dc0c2182.svg"
        },
        215429: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var n = s("37983");
            s("884691");
            var r = s("669491"),
                a = s("819855"),
                i = s("77078"),
                l = s("841098"),
                o = e => {
                    let {
                        className: t
                    } = e, s = (0, l.default)(), o = (0, i.useToken)(r.default.colors.BACKGROUND_ACCENT).hex();
                    return (0, n.jsx)("svg", {
                        width: "700",
                        height: "120",
                        viewBox: "0 0 700 120",
                        className: t,
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)("path", {
                            fill: (0, a.isThemeDark)(s) ? o : "white",
                            opacity: "1",
                            d: "M351 39.047C185.4 -31.2102 48 9.77319 0 39.047V583.068C0 587.486 3.58174 591.068 8.00002 591.068H692C696.418 591.068 700 587.486 700 583.068V39.047C653.333 68.3208 516.6 109.304 351 39.047Z"
                        })
                    })
                }
        },
        986675: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                isEligibleForQ4DropAnnouncementModal: function() {
                    return U
                },
                default: function() {
                    return v
                }
            });
            var n = s("37983");
            s("884691");
            var r = s("151426"),
                a = s("819855"),
                i = s("77078"),
                l = s("997289"),
                o = s("841098"),
                u = s("812204"),
                d = s("685665"),
                _ = s("10641"),
                c = s("649844"),
                E = s("697218"),
                N = s("181114"),
                m = s("599110"),
                f = s("701909"),
                T = s("719923"),
                O = s("896630"),
                A = s("837797"),
                p = s("154889"),
                C = s("917247"),
                R = s("400307"),
                I = s("702542"),
                D = s("646718"),
                M = s("49111"),
                g = s("782340"),
                P = s("454275"),
                S = s("169903"),
                b = s("389291"),
                L = s("676084"),
                h = s("121432");
            let x = "2023_q4_nitro_drop",
                U = () => {
                    let e = E.default.getCurrentUser();
                    if ((0, T.isPremiumExactly)(e, D.PremiumTypes.TIER_2) || (0, _.isDismissibleContentDismissed)(r.DismissibleContent.Q4_2023_NITRO_DROP_ANNOUNCEMENT_MODAL)) return !1;
                    let {
                        enabled: t
                    } = O.Q4DropExperiment.getCurrentConfig({
                        location: "isEligibleForQ4DropAnnouncementModal"
                    });
                    return t
                };

            function v(e) {
                let {
                    renderModalProps: t
                } = e, {
                    onClose: s
                } = t, {
                    location: _
                } = (0, l.useAnalyticsContext)(), {
                    analyticsLocations: E
                } = (0, d.default)(u.default.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), O = (0, o.default)(), U = (0, C.usePremiumTrialOffer)(), v = null == U ? void 0 : U.subscription_trial, y = (0, p.usePremiumDiscountOffer)(), H = (0, T.formatTrialCtaIntervalDuration)({
                    intervalType: null == v ? void 0 : v.interval,
                    intervalCount: null == v ? void 0 : v.interval_count
                }), j = (0, A.useResponseOnUserState)({
                    onCustomCriteria: () => {
                        if ((null == v ? void 0 : v.id) === D.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID) return g.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_TRIAL_ELIGIBLE
                    },
                    defaultResponse: g.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_NON_TRIAL_ELIGIBLE,
                    onTier0TrialOffer: g.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_NON_TRIAL_ELIGIBLE,
                    onTier2TrialOffer: g.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_NON_TRIAL_ELIGIBLE,
                    onNonTier2Subscriber: g.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_UPGRADE_ELIGIBLE
                }), k = (0, A.useResponseOnUserState)({
                    defaultResponse: () => null,
                    onCustomCriteria: () => {
                        if ((null == v ? void 0 : v.id) === D.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID) return () => (0, n.jsx)(i.Anchor, {
                            className: P.termsApplyAnchor,
                            href: f.default.getArticleURL(M.HelpdeskArticles.Q4_DROP),
                            children: (0, n.jsx)(i.Heading, {
                                variant: "heading-md/normal",
                                className: P.termsApplyBodyText,
                                children: g.default.Messages.BOGO_TERMS_APPLY
                            })
                        })
                    }
                }), G = (0, A.useResponseOnUserState)({
                    defaultResponse: g.default.Messages.BILLING_SUBSCRIBE_TO_PLAN,
                    onDiscountOffer: g.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                        percent: null == y ? void 0 : y.discount.amount
                    }),
                    onTier0TrialOffer: H,
                    onTier2TrialOffer: H,
                    onNonTier2Subscriber: g.default.Messages.INTERACTION_PREMIUM_UPSELL_CTA
                }), B = (0, A.useResponseOnUserState)({
                    defaultResponse: "get_nitro_button",
                    onNonTier2Subscriber: "upgrade_plan_button",
                    onDiscountOffer: "discount_offer_button",
                    onTier0TrialOffer: "trial_offer_button",
                    onTier2TrialOffer: "trial_offer_button"
                }), Q = (0, A.useResponseOnUserState)({
                    defaultResponse: () => (0, c.default)({
                        subscriptionTier: D.PremiumSubscriptionSKUs.TIER_2,
                        analyticsLocations: E,
                        analyticsObject: {
                            ..._,
                            object: M.AnalyticsObjects.BUTTON_CTA,
                            objectType: M.AnalyticsObjectTypes.TIER_2
                        },
                        onClose: e => {
                            e && s()
                        }
                    })
                }), w = (0, a.isThemeDark)(O) ? R.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL : R.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL;
                return (0, n.jsx)(I.default, {
                    renderModalProps: t,
                    video: {
                        type: "video",
                        src: "https://cdn.discordapp.com/attachments/986110506119069696/1168984935332319262/04_DIS_Nitro_Drop_In_Product_2X_With_Audio.webm"
                    },
                    videoClassname: P.video,
                    modalDismissibleContent: r.DismissibleContent.Q4_2023_NITRO_DROP_ANNOUNCEMENT_MODAL,
                    modalTopExtra: () => null != v ? (0, n.jsx)(R.PremiumPillWithSparkles, {
                        text: g.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                        className: P.trialPill,
                        colorOptions: w
                    }) : null,
                    header: g.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_HEADER,
                    subHeader: j,
                    subHeaderExtra: k,
                    featureCards: [{
                        header: g.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_EARLY_ACCESS_HEADER,
                        subHeader: g.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_EARLY_ACCESS_DESCRIPTION,
                        imageSrc: S
                    }, {
                        header: g.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SPECIAL_PRICING_HEADER,
                        subHeader: g.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SPECIAL_PRICING_DESCRIPTION,
                        imageSrc: L
                    }, {
                        header: g.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_CUSTOM_APP_ICON_HEADER,
                        subHeader: g.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_CUSTOM_APP_ICON_DESCRIPTION,
                        imageSrc: b
                    }, {
                        header: g.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_UNLIMITED_SUPER_REACTIONS_HEADER,
                        subHeader: g.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_UNLIMITED_SUPER_REACTIONS_DESCRIPTION,
                        imageSrc: b
                    }],
                    changeLogId: x,
                    button: () => {
                        let e = Date.now();
                        return (0, n.jsxs)(N.default, {
                            className: P.buttonWide,
                            innerClassName: P.innerButton,
                            color: i.Button.Colors.GREEN,
                            size: i.Button.Sizes.SMALL,
                            onClick: () => {
                                m.default.track(M.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: x,
                                    cta_type: B,
                                    seconds_open: Math.round((Date.now() - e) / 1e3),
                                    target: "q4_drop_payment_modal"
                                }), Q()
                            },
                            children: [(0, n.jsx)("img", {
                                alt: "",
                                className: P.nitroIconSubHeader,
                                src: h
                            }), G]
                        })
                    }
                })
            }
        },
        896630: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                Q4DropExperiment: function() {
                    return r
                },
                useQ4DropExperiment: function() {
                    return a
                },
                default: function() {
                    return i
                }
            });
            var n = s("862205");
            let r = (0, n.createExperiment)({
                    kind: "user",
                    id: "2023-10_q4_drop",
                    label: "Q4 Drop",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                a = function() {
                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return r.useExperiment({
                        location: "experiment_hook"
                    }, {
                        autoTrackExposure: e,
                        disable: t
                    })
                };
            var i = a
        },
        837797: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useResponseOnUserState: function() {
                    return u
                }
            });
            var n = s("446674"),
                r = s("521012"),
                a = s("719923"),
                i = s("154889"),
                l = s("917247"),
                o = s("646718");

            function u(e) {
                let {
                    defaultResponse: t,
                    onDiscountOffer: s,
                    onNonSubscriber: u,
                    onTier0TrialOffer: d,
                    onTier2TrialOffer: _,
                    onTier0TrialPeriod: c,
                    onTier2TrialPeriod: E,
                    onNonTier2Subscriber: N,
                    onTier2Subscriber: m,
                    onCustomCriteria: f
                } = e, T = (0, l.usePremiumTrialOffer)(), O = (0, i.usePremiumDiscountOffer)(), A = (0, n.useStateFromStores)([r.default], () => r.default.getPremiumTypeSubscription()), p = a.default.getPremiumTypeFromSubscription(A);
                if (null != f) {
                    let e = f();
                    if (null != e) return e
                }
                return null != T && (0, o.SubscriptionTrials)[T.trial_id].skus.includes(o.PremiumSubscriptionSKUs.TIER_0) ? null != d ? d : t : null != T && (0, o.SubscriptionTrials)[T.trial_id].skus.includes(o.PremiumSubscriptionSKUs.TIER_2) ? null != _ ? _ : t : null != A && null != A.trialId && p === o.PremiumTypes.TIER_0 ? null != c ? c : t : null != A && null != A.trialId && p === o.PremiumTypes.TIER_2 ? null != E ? E : t : null != O ? null != s ? s : t : null == p ? null != u ? u : t : p === o.PremiumTypes.TIER_0 || p === o.PremiumTypes.TIER_1 ? null != N ? N : t : p === o.PremiumTypes.TIER_2 ? null != m ? m : t : t
            }
        },
        702542: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            });
            var n = s("37983"),
                r = s("884691"),
                a = s("414456"),
                i = s.n(a),
                l = s("446674"),
                o = s("77078"),
                u = s("206230"),
                d = s("10641"),
                _ = s("933629"),
                c = s("560176"),
                E = s("476765"),
                N = s("956089"),
                m = s("58608"),
                f = s("599110"),
                T = s("215429"),
                O = s("49111"),
                A = s("994428"),
                p = s("236998");
            let C = e => {
                    let {
                        tagText: t,
                        className: s
                    } = e;
                    return (0, n.jsx)(N.TextBadge, {
                        className: i(p.tag, s),
                        text: t
                    })
                },
                R = e => {
                    let {
                        header: t,
                        subHeader: s,
                        imageSrc: r,
                        tagText: a,
                        wideStyle: l
                    } = e;
                    return (0, n.jsxs)("div", {
                        className: i(p.featureCard, {
                            [p.wideStyle]: l
                        }),
                        children: [null != a ? (0, n.jsx)(C, {
                            tagText: a,
                            className: p.featureCardTag
                        }) : null, (0, n.jsx)("img", {
                            alt: "",
                            className: i(p.featureCardImg, {
                                [p.wideStyle]: l
                            }),
                            src: r
                        }), (0, n.jsxs)("div", {
                            className: p.featureCardTextGroup,
                            children: [(0, n.jsx)(o.Heading, {
                                variant: "heading-lg/extrabold",
                                className: p.featureCardTextHeader,
                                children: t
                            }), (0, n.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                children: s
                            })]
                        })]
                    })
                };

            function I(e) {
                let {
                    className: t,
                    renderModalProps: s,
                    video: a,
                    videoClassname: N,
                    modalDismissibleContent: C,
                    modalTopExtra: I,
                    header: D,
                    subHeader: M,
                    subHeaderExtra: g,
                    featureCards: P,
                    changeLogId: S,
                    button: b
                } = e, {
                    onClose: L,
                    transitionState: h
                } = s, x = (0, E.useUID)(), U = P.length % 2 == 0, v = (0, l.useStateFromStores)([u.default], () => u.default.useReducedMotion);
                return r.useEffect(() => {
                    (0, d.requestMarkDismissibleContentAsShown)(C);
                    let e = Date.now();
                    return f.default.track(O.AnalyticEvents.CHANGE_LOG_OPENED, {
                        change_log_id: S
                    }), () => {
                        f.default.track(O.AnalyticEvents.CHANGE_LOG_CLOSED, {
                            change_log_id: S,
                            seconds_open: Math.round((Date.now() - e) / 1e3)
                        }), (0, d.markDismissibleContentAsDismissed)(C, {
                            dismissAction: A.ContentDismissActionType.DISMISS
                        })
                    }
                }, [C, S]), (0, n.jsxs)(o.ModalRoot, {
                    className: i(p.root, t),
                    transitionState: h,
                    "aria-labelledby": x,
                    children: [(0, n.jsx)(o.ModalCloseButton, {
                        className: p.closeButton,
                        onClick: L
                    }), (0, n.jsx)(T.default, {
                        className: p.splash
                    }), null == I ? void 0 : I(), (0, n.jsxs)(o.ModalContent, {
                        className: p.content,
                        children: [(0, n.jsx)(o.Heading, {
                            variant: "display-md",
                            className: p.headerText,
                            children: D
                        }), "video" === a.type ? (0, n.jsx)(m.default, {
                            className: i(p.video, N),
                            autoPlay: !v,
                            loop: !0,
                            muted: !0,
                            controls: !0,
                            src: a.src,
                            onPlay: () => {
                                f.default.track(O.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
                                    change_log_id: S
                                })
                            }
                        }) : (0, n.jsx)(c.EmbedVideo, {
                            className: i(p.video, N),
                            allowFullScreen: !1,
                            href: a.href,
                            thumbnail: a.thumbnail,
                            video: a.embed,
                            maxWidth: a.embed.width,
                            maxHeight: a.embed.height,
                            renderVideoComponent: _.renderVideoComponent,
                            renderImageComponent: _.renderImageComponent,
                            renderLinkComponent: _.renderMaskedLinkComponent,
                            onPlay: () => {
                                f.default.track(O.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
                                    change_log_id: S
                                })
                            }
                        }), (0, n.jsx)(o.Heading, {
                            variant: "heading-lg/extrabold",
                            className: p.bodyText,
                            children: M
                        }), null == g ? void 0 : g(), (0, n.jsx)("div", {
                            className: i(p.featureCardGroup, {
                                [p.wideStyle]: U
                            }),
                            children: P.map((e, t) => (0, n.jsx)(R, {
                                ...e,
                                wideStyle: U
                            }, "".concat(e.header, "_").concat(t)))
                        }), b()]
                    })]
                })
            }
        }
    }
]);