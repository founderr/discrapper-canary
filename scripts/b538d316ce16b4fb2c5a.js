(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["98427"], {
        244333: function(e, t, l) {
            "use strict";
            e.exports = l.p + "dfece524b5ca38a16ead.png"
        },
        112679: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                updateStripePaymentRequest: function() {
                    return s
                },
                updateCardInfo: function() {
                    return a
                },
                clearCardInfo: function() {
                    return i
                },
                updateAddressInfo: function() {
                    return u
                },
                clearError: function() {
                    return r
                }
            });
            var n = l("913144");

            function s(e) {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function a(e, t) {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function i() {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function u(e, t) {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function r() {
                n.default.wait(() => n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return s
                }
            });
            var n = l("913144");

            function s() {
                n.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        998460: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                GiftIcon: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("669491"),
                a = l("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...r
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, a.default)(r),
                    width: t,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M4 6C4 3.79086 5.79086 2 8 2H8.08854C9.89557 2 11.4793 3.18456 12 4.89815C12.5208 3.18456 14.1044 2 15.9115 2H16C18.2091 2 20 3.79086 20 6C20 6.72857 19.8052 7.41165 19.4649 8H20C21.1046 8 22 8.89543 22 10V11.5C22 11.7761 21.7761 12 21.5 12H2.5C2.22386 12 2 11.7761 2 11.5V10C2 8.89543 2.89543 8 4 8H4.53513C4.19479 7.41165 4 6.72857 4 6ZM16 8C17.1046 8 18 7.10457 18 6C18 4.89543 17.1046 4 16 4H15.9115C14.9531 4 14.1177 4.65225 13.8853 5.58199L13.2808 8H16ZM10.1147 5.58199L10.7192 8H8C6.89543 8 6 7.10457 6 6C6 4.89543 6.89543 4 8 4H8.08854C9.0469 4 9.88229 4.65225 10.1147 5.58199Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: u
                    }), (0, n.jsx)("path", {
                        d: "M3 20C3 21.1046 3.89543 22 5 22H10.5C10.7761 22 11 21.7761 11 21.5V14.5C11 14.2239 10.7761 14 10.5 14H3.5C3.22386 14 3 14.2239 3 14.5V20Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: u
                    }), (0, n.jsx)("path", {
                        d: "M13.5 22C13.2239 22 13 21.7761 13 21.5V14.5C13 14.2239 13.2239 14 13.5 14H20.5C20.7761 14 21 14.2239 21 14.5V20C21 21.1046 20.1046 22 19 22H13.5Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: u
                    })]
                })
            }
        },
        252744: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            }), l("222007");
            var n = l("884691");

            function s(e) {
                let [t, l] = (0, n.useState)(!1), s = (0, n.useRef)(e.current);
                return (0, n.useEffect)(() => {
                    s.current = e.current
                }, [e]), (0, n.useEffect)(() => {
                    let e = s.current;
                    if (null == e) return;
                    let t = () => l(!0),
                        n = () => l(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", n), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", n)
                    }
                }, [s]), t
            }
        },
        649844: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return T
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("748820"),
                a = l("77078"),
                i = l("112679"),
                u = l("55689"),
                r = l("855133"),
                o = l("599110"),
                c = l("659500"),
                d = l("49111"),
                f = l("646718");

            function T(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: T,
                    onClose: _,
                    onComplete: E,
                    onSubscriptionConfirmation: p,
                    analyticsLocations: S,
                    analyticsObject: I,
                    analyticsLocation: m,
                    analyticsSourceLocation: C,
                    isGift: P = !1,
                    giftMessage: M,
                    subscriptionTier: R,
                    trialId: N,
                    postSuccessGuild: L,
                    openInvoiceId: A,
                    applicationId: U,
                    referralTrialOfferId: O,
                    giftRecipient: h,
                    returnRef: y
                } = null != e ? e : {}, v = !1, b = (0, s.v4)();
                (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await l.el("646139").then(l.bind(l, "646139"));
                    return l => {
                        let {
                            onClose: s,
                            ...a
                        } = l;
                        return (0, n.jsx)(e, {
                            ...a,
                            loadId: b,
                            subscriptionTier: R,
                            skuId: R,
                            isGift: P,
                            giftMessage: M,
                            giftRecipient: h,
                            initialPlanId: t,
                            followupSKUInfo: T,
                            onClose: e => {
                                s(), null == _ || _(e), e && (null == p || p())
                            },
                            onComplete: () => {
                                v = !0, null == E || E(), !P && ((0, r.setIsPersistentHelperHidden)(!0), (0, r.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: p,
                            analyticsLocations: S,
                            analyticsObject: I,
                            analyticsLocation: m,
                            analyticsSourceLocation: C,
                            trialId: N,
                            postSuccessGuild: L,
                            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: A,
                            applicationId: U,
                            referralTrialOfferId: O,
                            returnRef: y
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !v && o.default.track(d.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: b,
                            payment_type: d.PurchaseTypeToAnalyticsPaymentType[d.PurchaseTypes.SUBSCRIPTION],
                            location: null != m ? m : I,
                            source: C,
                            subscription_type: d.SubscriptionTypes.PREMIUM,
                            is_gift: P,
                            eligible_for_trial: null != N,
                            application_id: U,
                            location_stack: S
                        }), (0, i.clearError)(), (0, u.clearPurchaseTokenAuthState)(), null == _ || _(v), v && (!P && c.ComponentDispatch.dispatch(d.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == p || p())
                    },
                    onCloseRequest: d.NOOP
                })
            }
        },
        855133: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                togglePersistentHelper: function() {
                    return s
                },
                setHasCompletedStep: function() {
                    return a
                },
                resetPremiumTutorialStore: function() {
                    return i
                },
                setCanPlayWowMoment: function() {
                    return u
                },
                setIsPersistentHelperHidden: function() {
                    return r
                },
                setNavigatedFromHelper: function() {
                    return o
                }
            });
            var n = l("913144");
            let s = () => {
                    n.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                a = () => {
                    n.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                i = () => {
                    n.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                u = e => {
                    n.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                r = e => {
                    n.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                o = e => {
                    n.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        635956: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return L
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("414456"),
                a = l.n(s),
                i = l("446674"),
                u = l("77078"),
                r = l("79112"),
                o = l("685665"),
                c = l("788506"),
                d = l("649844"),
                f = l("393414"),
                T = l("797647"),
                _ = l("697218"),
                E = l("521012"),
                p = l("471671"),
                S = l("181114"),
                I = l("978679"),
                m = l("216422"),
                C = l("719923"),
                P = l("646718"),
                M = l("49111"),
                R = l("782340"),
                N = l("683437"),
                L = function(e) {
                    let {
                        isGift: t,
                        subscriptionTier: s,
                        onClick: L,
                        size: A,
                        className: U,
                        trialId: O,
                        isTrialCTA: h,
                        buttonText: y,
                        buttonTextClassName: v,
                        postSuccessGuild: b,
                        onSubscribeModalClose: x,
                        premiumModalAnalyticsLocation: g,
                        showIcon: H = !0,
                        disableShine: B,
                        applicationId: j,
                        giftMessage: D,
                        overrideDisabledButtonText: G,
                        shinyButtonClassName: F,
                        ...k
                    } = e, V = (0, i.useStateFromStores)([_.default], () => _.default.getCurrentUser()), w = (0, i.useStateFromStores)([p.default], () => p.default.isFocused()), z = (0, i.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()), {
                        analyticsLocations: Y
                    } = (0, o.default)(), W = e => {
                        if (e.preventDefault(), null == V) {
                            (0, f.transitionTo)(M.Routes.LOGIN);
                            return
                        }
                        if (null == L || L(e), (null == z ? void 0 : z.status) === M.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                            (0, c.trackPremiumSettingsPaneOpened)(), r.default.open(M.UserSettingsSections.PREMIUM), null == x || x(!1);
                            return
                        }! function(e) {
                            let {
                                isClaimed: t,
                                isVerified: s,
                                isGift: a,
                                subscriptionTier: i,
                                trialId: r,
                                postSuccessGuild: o,
                                onSubscribeModalClose: c,
                                analyticsLocations: f,
                                premiumModalAnalyticsLocation: T,
                                applicationId: _,
                                giftMessage: E
                            } = e;
                            if (!t) {
                                (0, u.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await l.el("984599").then(l.bind(l, "984599"));
                                    return t => {
                                        let {
                                            onClose: l,
                                            ...s
                                        } = t;
                                        return (0, n.jsx)(e, {
                                            ...s,
                                            onClose: l
                                        })
                                    }
                                });
                                return
                            }
                            if (!s) {
                                (0, u.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await l.el("899917").then(l.bind(l, "899917"));
                                    return t => {
                                        let {
                                            onClose: l,
                                            ...s
                                        } = t;
                                        return (0, n.jsx)(e, {
                                            ...s,
                                            onClose: l
                                        })
                                    }
                                });
                                return
                            }
                            let p = M.AnalyticsObjectTypes.BUY;
                            null != r ? p = M.AnalyticsObjectTypes.TRIAL : a && (p = M.AnalyticsObjectTypes.GIFT), (0, d.default)({
                                isGift: a,
                                initialPlanId: null,
                                subscriptionTier: i,
                                analyticsLocations: f,
                                analyticsObject: {
                                    object: M.AnalyticsObjects.BUTTON_CTA,
                                    objectType: p,
                                    ...T
                                },
                                trialId: r,
                                postSuccessGuild: o,
                                onClose: c,
                                applicationId: _,
                                giftMessage: E
                            })
                        }({
                            isClaimed: V.isClaimed(),
                            isVerified: V.verified,
                            isGift: t,
                            subscriptionTier: s,
                            trialId: O,
                            postSuccessGuild: b,
                            onSubscribeModalClose: x,
                            analyticsLocations: Y,
                            premiumModalAnalyticsLocation: g,
                            applicationId: j,
                            giftMessage: D
                        })
                    };
                    if (h) return (0, n.jsxs)(u.Button, {
                        size: A,
                        className: U,
                        innerClassName: N.premiumSubscribeButton,
                        look: u.Button.Looks.INVERTED,
                        onClick: W,
                        ...k,
                        children: [H && (0, n.jsx)(m.default, {
                            className: N.premiumIcon
                        }), (0, n.jsx)("span", {
                            className: a(N.buttonText, v),
                            children: null != y ? y : R.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                        })]
                    });
                    if (t) return (0, n.jsxs)(u.Button, {
                        size: A,
                        className: U,
                        innerClassName: N.giftButton,
                        color: u.Button.Colors.PRIMARY,
                        onClick: W,
                        ...k,
                        children: [(0, n.jsx)(I.default, {
                            className: N.giftIcon
                        }), (0, n.jsx)("span", {
                            className: a(N.buttonText, v),
                            children: null != y ? y : R.default.Messages.PREMIUM_GIFTING_BUTTON
                        })]
                    });
                    let K = R.default.Messages.APPLICATION_STORE_GET_PREMIUM,
                        Z = null != z ? (0, C.getPremiumPlanItem)(z) : null,
                        q = null != Z ? C.default.getPremiumType(Z.planId) : null == V ? void 0 : V.premiumType,
                        J = s === P.PremiumSubscriptionSKUs.TIER_2 && null != q && [P.PremiumTypes.TIER_0, P.PremiumTypes.TIER_1].includes(q);
                    J && (K = R.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
                    let Q = null != z && z.status !== M.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, T.isNoneSubscription)(z.planId) && !J,
                        X = Q ? null != G ? G : function(e) {
                            let {
                                ctaSubscriptionSkuId: t,
                                currentPremiumType: l
                            } = e, n = null, s = null;
                            if (null != t && t !== P.PremiumSubscriptionSKUs.LEGACY && t !== P.PremiumSubscriptionSKUs.TIER_0 && t !== P.PremiumSubscriptionSKUs.TIER_1 && t !== P.PremiumSubscriptionSKUs.TIER_2) return {
                                disabledButtonText: n,
                                disabledButtonTooltipText: s
                            };
                            let a = null != t ? P.PremiumSubscriptionSKUToPremiumType[t] : null,
                                i = null != a ? P.PremiumTypeOrder[a] : null,
                                u = null != l ? P.PremiumTypeOrder[l] : null;
                            return null != u && null != i && i < u ? (n = R.default.Messages.APPLICATION_STORE_GET_PREMIUM, s = R.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != a && null != l && a === l ? (n = R.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, s = R.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == a && null != l && l === P.PremiumTypes.TIER_2 && (s = R.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
                                disabledButtonText: n,
                                disabledButtonTooltipText: s
                            }
                        }({
                            ctaSubscriptionSkuId: s,
                            currentPremiumType: q
                        }) : null;

                    function $(e) {
                        var t, l;
                        return (0, n.jsxs)(S.default, {
                            disabled: Q,
                            onClick: W,
                            innerClassName: N.premiumSubscribeButton,
                            color: s === P.PremiumSubscriptionSKUs.TIER_1 ? u.Button.Colors.PRIMARY : u.Button.Colors.GREEN,
                            size: A,
                            className: F,
                            wrapperClassName: U,
                            pauseAnimation: !w || B,
                            ...k,
                            ...e,
                            children: [H && (0, n.jsx)(m.default, {
                                className: N.premiumIcon
                            }), (0, n.jsx)("span", {
                                className: a(N.buttonText, v),
                                children: null !== (l = null !== (t = null == X ? void 0 : X.disabledButtonText) && void 0 !== t ? t : y) && void 0 !== l ? l : K
                            })]
                        })
                    }
                    return (null == X ? void 0 : X.disabledButtonTooltipText) != null ? (0, n.jsx)(u.Tooltip, {
                        text: X.disabledButtonTooltipText,
                        children: $
                    }) : $()
                }
        },
        292890: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("446674"),
                i = l("77078"),
                u = l("812204"),
                r = l("685665"),
                o = l("635956"),
                c = l("697218"),
                d = l("599110"),
                f = l("719923"),
                T = l("38766"),
                _ = l("49111"),
                E = l("646718"),
                p = l("397336"),
                S = l("782340"),
                I = l("856049");

            function m(e) {
                let {
                    analyticsLocations: t,
                    transitionState: m,
                    onClose: C,
                    title: P,
                    description: M
                } = e, R = (0, a.useStateFromStores)([c.default], () => c.default.getCurrentUser()), {
                    AnalyticsLocationProvider: N,
                    analyticsLocations: L
                } = (0, r.default)(t, u.default.PROFILE_THEME_UPSELL_MODAL);
                s.useEffect(() => {
                    d.default.track(_.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: E.PremiumUpsellTypes.PROFILE_THEME_UPSELL_MODAL,
                        location_stack: t
                    })
                }, [t]);
                let A = (0, T.default)({
                    scrollPosition: p.ProfileCustomizationScrollPositions.TRY_IT_OUT,
                    analyticsLocations: L
                });
                return (0, n.jsx)(N, {
                    children: (0, n.jsxs)(i.ModalRoot, {
                        className: I.profileThemesUpsellModal,
                        "aria-label": null != P ? P : S.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_BANNER_MODAL_TITLE,
                        transitionState: m,
                        children: [(0, n.jsxs)(i.ModalHeader, {
                            className: I.profileThemesUpsellModalHeader,
                            separator: !1,
                            children: [(0, n.jsx)(i.Heading, {
                                variant: "heading-xl/extrabold",
                                className: I.profileThemesUpsellModalTitle,
                                children: null != P ? P : S.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_BANNER_MODAL_TITLE
                            }), (0, n.jsx)(i.ModalCloseButton, {
                                className: I.profileThemesUpsellModalCloseButton,
                                onClick: C
                            })]
                        }), (0, n.jsxs)(i.ModalContent, {
                            className: I.profileThemesUpsellModalContent,
                            children: [(0, n.jsx)(i.Text, {
                                className: I.profileThemesUpsellModalDescription,
                                variant: "text-md/normal",
                                children: null != M ? M : S.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_BANNER_MODAL_DESCRIPTION
                            }), (0, n.jsx)("img", {
                                className: I.profileThemesUpsellModalExampleImage,
                                src: l("244333"),
                                alt: S.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_MODAL_IMAGE_ALT
                            })]
                        }), (0, n.jsxs)(i.ModalFooter, {
                            className: I.profileThemesUpsellModalFooter,
                            children: [(0, n.jsx)(o.default, {
                                subscriptionTier: E.PremiumSubscriptionSKUs.TIER_2,
                                size: i.Button.Sizes.SMALL,
                                buttonText: f.default.isPremium(R) ? S.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE : S.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
                            }), (0, n.jsx)(i.Button, {
                                onClick: () => {
                                    C(), A()
                                },
                                color: i.Button.Colors.PRIMARY,
                                look: i.Button.Looks.LINK,
                                size: i.Button.Sizes.SMALL,
                                children: S.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_TRY_IT_OUT
                            })]
                        })]
                    })
                })
            }
        },
        181114: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                Shine: function() {
                    return p
                },
                default: function() {
                    return I
                }
            });
            var n, s, a = l("37983"),
                i = l("884691"),
                u = l("414456"),
                r = l.n(u),
                o = l("458960"),
                c = l("77078"),
                d = l("252744"),
                f = l("145131"),
                T = l("396792");
            (n = s || (s = {})).DEFAULT = "default", n.SMALL = "small";
            let _ = {
                    default: T.shineDefault,
                    small: T.shineSmall
                },
                E = {
                    default: T.shineInnerDefault,
                    small: T.shineInnerSmall
                };
            class p extends i.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: l,
                        ...n
                    } = this.props;
                    return (0, a.jsx)(o.default.div, {
                        ...n,
                        className: r(T.shineContainer, e, {
                            [T.shinePaused]: l
                        }),
                        children: (0, a.jsx)(f.default, {
                            align: f.default.Align.CENTER,
                            justify: f.default.Justify.CENTER,
                            className: _[t],
                            children: (0, a.jsx)("div", {
                                className: E[t]
                            })
                        })
                    })
                }
            }
            p.defaultProps = {
                shineSize: "default"
            };
            let S = e => {
                let {
                    children: t,
                    className: l,
                    disabled: n,
                    submitting: s,
                    pauseAnimation: u,
                    shineSize: o = "default",
                    shinePaused: f,
                    buttonShineClassName: _,
                    onlyShineOnHover: E,
                    ...S
                } = e, I = i.createRef(), m = (0, d.default)(I), C = !n && !s && !0 !== u && (!E || m);
                return (0, a.jsxs)(c.Button, {
                    buttonRef: I,
                    ...S,
                    className: r(T.shinyButton, l),
                    disabled: n,
                    submitting: s,
                    children: [t, C ? (0, a.jsx)(p, {
                        shinePaused: f,
                        className: r(T.buttonShine, E ? T.onlyShineOnHover : void 0, _),
                        shineSize: o
                    }) : null]
                })
            };
            S.ShineSizes = s;
            var I = S
        },
        978679: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("469563"),
                a = l("998460"),
                i = l("75196"),
                u = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: s = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, n.jsx)("svg", {
                        width: t,
                        height: l,
                        ...(0, i.default)(u),
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            fill: s,
                            className: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, a.GiftIcon, void 0, {
                    size: 24
                })
        }
    }
]);