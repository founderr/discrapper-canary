(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["86699"], {
        619025: function(e, t, n) {
            "use strict";
            e.exports = n.p + "aa2afb65f20b2a22447c.svg"
        },
        258925: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c1957de296fc76c595c7.svg"
        },
        40755: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ea00a9ee82d2b42562bd.svg"
        },
        34125: function(e, t, n) {
            "use strict";
            e.exports = n.p + "0443790614dfcd466720.png"
        },
        880865: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c3389d3a16ceea3ef63a.svg"
        },
        777273: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserAffinities: function() {
                    return l
                }
            });
            var i = n("872717"),
                r = n("913144"),
                s = n("843823"),
                a = n("49111");

            function l() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return s.default.needsRefresh() ? (r.default.dispatch({
                    type: "LOAD_USER_AFFINITIES"
                }), i.default.get({
                    url: a.Endpoints.USER_AFFINITIES,
                    retries: e ? 3 : 0,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: t
                    } = e;
                    r.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_SUCCESS",
                        affinities: t
                    })
                }, () => {
                    r.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_FAILURE"
                    })
                })) : Promise.resolve()
            }
        },
        666031: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GifIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                s = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87a2.9 2.9 0 0 1-1.66-.49 3.18 3.18 0 0 1-1.12-1.35A4.88 4.88 0 0 1 4 12c0-.75.14-1.42.42-2 .29-.59.7-1.04 1.24-1.37a3.7 3.7 0 0 1 1.95-.5c.64 0 1.21.14 1.72.4.5.28.89.67 1.15 1.16l-1.22.88a1.76 1.76 0 0 0-1.64-1.02c-.66 0-1.17.22-1.52.65a2.74 2.74 0 0 0-.53 1.8c0 .78.18 1.39.53 1.81.35.42.86.64 1.52.64.3 0 .57-.06.81-.16.25-.12.45-.27.58-.47v-.93H7.3v-1.4h3.24v4.23H9.27l-.2-.71c-.43.57-1.06.86-1.89.86Zm6.34-.15h-1.57V8.28h1.57v7.44Zm1.51 0h1.57v-2.83h2.76v-1.42H16.6V9.7H20V8.28h-4.97v7.44Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        274800: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                queueInteractionComponentState: function() {
                    return a
                },
                addQueued: function() {
                    return l
                },
                setFailed: function() {
                    return u
                },
                fetchMessageInteractionData: function() {
                    return o
                }
            });
            var i = n("872717"),
                r = n("913144"),
                s = n("49111");

            function a(e, t, n, i) {
                r.default.dispatch({
                    type: "QUEUE_INTERACTION_COMPONENT_STATE",
                    messageId: e,
                    nonce: t,
                    state: n,
                    indices: i
                })
            }

            function l(e, t) {
                let {
                    data: n,
                    messageId: i,
                    onCreate: s,
                    onSuccess: a,
                    onFailure: l
                } = t;
                r.default.dispatch({
                    type: "INTERACTION_QUEUE",
                    data: n,
                    nonce: e,
                    messageId: i,
                    onCreate: s,
                    onSuccess: a,
                    onFailure: l
                })
            }

            function u(e, t, n) {
                r.default.dispatch({
                    type: "INTERACTION_FAILURE",
                    nonce: e,
                    errorMessage: n,
                    errorCode: t
                })
            }
            async function o(e, t) {
                let n = await i.default.get({
                    url: s.Endpoints.MESSAGE_INTERACTION_DATA(e, t),
                    oldFormErrors: !0
                });
                if (n.ok) {
                    let i = n.body;
                    r.default.dispatch({
                        type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",
                        channelId: e,
                        messageId: t,
                        interactionData: i
                    })
                }
            }
        },
        752598: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInteractionTimeoutTimestamp: function() {
                    return I
                },
                executeMessageComponentInteraction: function() {
                    return _
                },
                handleInteractionResponse: function() {
                    return P
                },
                InteractionStatusViewState: function() {
                    return i
                },
                getInteractionStatusViewState: function() {
                    return C
                },
                canRetryInteractionData: function() {
                    return A
                }
            }), n("222007");
            var i, r, s = n("249654"),
                a = n("872717"),
                l = n("913144"),
                u = n("819689"),
                o = n("798609"),
                d = n("263024"),
                c = n("271938"),
                f = n("274800"),
                p = n("809810"),
                m = n("3765"),
                S = n("606981"),
                E = n("49111");

            function I(e) {
                return null == e || "" === e || Number.isNaN(e) ? Date.now() : s.default.extractTimestamp(e) + 9e5
            }
            let _ = async e => {
                let {
                    componentType: t,
                    messageId: n,
                    messageFlags: i,
                    customId: r,
                    indices: l,
                    applicationId: u,
                    channelId: m,
                    guildId: S,
                    localState: I
                } = e, _ = s.default.fromTimestamp(Date.now());
                if (!p.default.canQueueInteraction(n, _)) return;
                await d.default.unarchiveThreadIfNecessary(m), (0, f.addQueued)(_, {
                    messageId: n,
                    data: {
                        interactionType: o.InteractionTypes.MESSAGE_COMPONENT,
                        customId: r,
                        indices: l
                    },
                    onFailure: (e, t) => T(m, e, t)
                }), null != I && (0, f.queueInteractionComponentState)(n, _, I, l);
                let C = {
                    type: o.InteractionTypes.MESSAGE_COMPONENT,
                    nonce: _,
                    guild_id: S,
                    channel_id: m,
                    message_flags: i,
                    message_id: n,
                    application_id: u,
                    session_id: c.default.getSessionId(),
                    data: {
                        component_type: t,
                        custom_id: r,
                        ... function(e) {
                            if (null == e) return null;
                            if (e.type === o.ComponentType.STRING_SELECT || e.type === o.ComponentType.INPUT_TEXT) return e;
                            let t = e.selectedOptions.map(e => e.value);
                            return {
                                type: e.type,
                                values: t
                            }
                        }(I)
                    }
                };
                await a.default.post({
                    url: E.Endpoints.INTERACTIONS,
                    body: C,
                    timeout: 3e3
                }, e => {
                    P(_, m, S, e)
                })
            }, T = (e, t, n) => {
                null == n && null != t && u.default.sendClydeError(e, t)
            }, P = (e, t, n, i) => {
                if (!i.ok) {
                    if (!i.hasErr) {
                        var r;
                        if (i.status >= 400 && i.status < 500 && i.body) {
                            if (i.body.code === E.AbortCodes.INVALID_FORM_BODY && i.body.errors) {
                                let r = (0, S.getFirstSkemaError)(i.body.errors);
                                null != r && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === r.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === r.code) && l.default.dispatch({
                                    type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                                    channelId: t,
                                    guildId: n
                                }), (0, f.setFailed)(e, void 0, null == r ? void 0 : r.message);
                                return
                            }(0, f.setFailed)(e, void 0, i.body.message);
                            return
                        }(0, f.setFailed)(e, null === (r = i.body) || void 0 === r ? void 0 : r.code);
                        return
                    }(0, f.setFailed)(e)
                }
            };
            (r = i || (i = {}))[r.SENDING = 0] = "SENDING", r[r.CREATED = 1] = "CREATED", r[r.FAILED = 2] = "FAILED", r[r.TIMED_OUT = 3] = "TIMED_OUT";
            let C = (e, t) => {
                var n;
                let i = null == t ? void 0 : t.state,
                    r = e.state === E.MessageStates.SENT && I(e.id) < Date.now();
                let a = e.state === E.MessageStates.SEND_FAILED && (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : s.default.extractTimestamp(n) + 3e3) < Date.now(),
                    l = (null == t ? void 0 : t.data.interactionType) === o.InteractionTypes.APPLICATION_COMMAND,
                    u = e.isCommandType();
                if (l && i === m.InteractionState.QUEUED || u && e.state === E.MessageStates.SENDING && null != t) return 0;
                if (l && i === m.InteractionState.CREATED || e.hasFlag(E.MessageFlags.LOADING) && !r) return 1;
                if (null != e.interaction && e.hasFlag(E.MessageFlags.LOADING) && r) return 3;
                else if (null != e.interaction && !e.hasFlag(E.MessageFlags.LOADING) && a) return 3;
                else if (u && e.state === E.MessageStates.SEND_FAILED) return 2
            };

            function A(e) {
                let t = e.options;
                for (;
                    (null == t ? void 0 : t.length) === 1 && (t[0].type === o.ApplicationCommandOptionType.SUB_COMMAND_GROUP || t[0].type === o.ApplicationCommandOptionType.SUB_COMMAND);) t = t[0].options;
                for (let e of null != t ? t : [])
                    if (e.type === o.ApplicationCommandOptionType.ATTACHMENT) return !1;
                return !0
            }
        },
        606981: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getFirstSkemaError: function() {
                    return r
                }
            }), n("222007");
            let i = "_errors";

            function r(e) {
                return function e(t, n) {
                    let r = t[i];
                    if (null != r && Array.isArray(r)) return r[0];
                    for (let [r, s] of Object.entries(t))
                        if (r !== i && null != s && "object" == typeof s) return e(s, null != n ? n : r);
                    return null
                }(e, void 0)
            }
        },
        236838: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("907002"),
                s = n("65597"),
                a = n("77078"),
                l = n("206230"),
                u = n("812204"),
                o = n("685665"),
                d = n("21526"),
                c = n("393414"),
                f = n("49111"),
                p = n("782340"),
                m = n("526380"),
                S = n("34125"),
                E = e => {
                    let {
                        onClose: t
                    } = e, {
                        analyticsLocations: n
                    } = (0, o.default)(), E = (0, s.default)([l.default], () => l.default.useReducedMotion), I = (0, r.useSpring)({
                        immediate: E,
                        delay: 800,
                        from: {
                            transform: "translate(0, -100%)"
                        },
                        to: {
                            transform: "translate(0, 0)"
                        }
                    }), _ = () => {
                        t(), (0, c.transitionTo)(f.Routes.COLLECTIBLES_SHOP), (0, d.openCollectiblesShop)({
                            openInLayer: !1,
                            analyticsSource: u.default.PREMIUM_PAYMENT_MODAL,
                            analyticsLocations: n
                        })
                    };
                    return (0, i.jsxs)(r.animated.div, {
                        style: I,
                        className: m.container,
                        children: [(0, i.jsx)("img", {
                            className: m.image,
                            src: S,
                            alt: ""
                        }), (0, i.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "header-primary",
                            children: p.default.Messages.COLLECTIBLES_GIFT_CODE_MODAL_UPSELL.format({
                                checkItOut: e => (0, i.jsx)(a.Clickable, {
                                    className: m.link,
                                    onClick: _,
                                    children: e
                                }, "COLLECTIBLES_GIFT_CODE_MODAL_UPSELL")
                            })
                        })]
                    })
                }
        },
        307367: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var i = n("37983"),
                r = n("884691"),
                s = n("748820"),
                a = n("872717"),
                l = n("850068"),
                u = n("253981"),
                o = n("635357"),
                d = n("642906"),
                c = n("85336"),
                f = n("149833"),
                p = n("523591"),
                m = n("153727"),
                S = n("650484"),
                E = n("49111"),
                I = n("646718");

            function _(e) {
                let {
                    handleStepChange: t
                } = e, {
                    selectedPlan: n,
                    browserCheckoutState: _,
                    browserCheckoutStateLoadId: T,
                    contextMetadata: P
                } = (0, d.usePaymentContext)(), {
                    isGift: C
                } = (0, o.useGiftContext)(), [A, h] = r.useState(!1);
                return r.useEffect(() => {
                    var e;
                    !A && (h(!0), (0, l.startBrowserCheckout)(P.loadId), ! function(e, t, n, i) {
                        let r = E.Endpoints.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, n),
                            l = new URL(u.default.makeUrl(E.Routes.BILLING_LOGIN_HANDOFF)),
                            o = (0, s.v4)();
                        l.searchParams.append("handoff_key", o), l.searchParams.append("redirect_to", r), a.default.post({
                            url: E.Endpoints.HANDOFF,
                            body: {
                                key: o
                            },
                            oldFormErrors: !0
                        }).then(e => {
                            l.searchParams.append("handoff_token", e.body.handoff_token), window.open(l.href)
                        }, () => {
                            i()
                        })
                    }(null !== (e = null == n ? void 0 : n.id) && void 0 !== e ? e : I.SubscriptionPlans.PREMIUM_MONTH_TIER_2, C, P.loadId, () => t(c.Step.ADD_PAYMENT_STEPS)))
                }, [n, C, A, h, P, t]), r.useEffect(() => {
                    T === P.loadId && _ === p.BrowserCheckoutState.DONE && t(c.Step.CONFIRM)
                }, [_, T, P, t]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(m.default, {}), (0, i.jsx)(S.PaymentPortalBody, {
                        children: (0, i.jsx)(f.AwaitingBrowserCheckoutStepBody, {})
                    }), (0, i.jsx)(S.PaymentPortalFooter, {
                        children: (0, i.jsx)(f.AwaitingBrowserCheckoutStepFooter, {
                            onStepChange: t,
                            onBackClick: () => t(c.Step.PLAN_SELECT)
                        })
                    })]
                })
            }
        },
        263820: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-08_checkout_aa_test",
                label: "Checkout AA Test",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "On",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var s = r
        },
        149833: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AwaitingBrowserCheckoutStepBody: function() {
                    return o
                },
                AwaitingBrowserCheckoutStepFooter: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                s = n("177998"),
                a = n("145131"),
                l = n("85336"),
                u = n("782340");
            let o = () => (0, i.jsx)("div", {
                    children: (0, i.jsx)(r.Heading, {
                        variant: "heading-xl/bold",
                        children: u.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_HEADER
                    })
                }),
                d = e => {
                    let {
                        onStepChange: t,
                        onBackClick: n
                    } = e;
                    return (0, i.jsx)("div", {
                        children: (0, i.jsxs)(r.ModalFooter, {
                            justify: a.default.Justify.BETWEEN,
                            align: a.default.Align.CENTER,
                            children: [(0, i.jsx)(r.Button, {
                                color: r.Button.Colors.BRAND,
                                onClick: () => {
                                    t(l.Step.ADD_PAYMENT_STEPS)
                                },
                                children: u.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_NEXT_BUTTON
                            }), (0, i.jsx)(s.default, {
                                onClick: n
                            })]
                        })
                    })
                }
        },
        992049: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentConfirmStep: function() {
                    return I
                }
            });
            var i = n("37983"),
                r = n("884691"),
                s = n("627445"),
                a = n.n(s),
                l = n("837148"),
                u = n("491523"),
                o = n("775155"),
                d = n("659632"),
                c = n("380186"),
                f = n("635357"),
                p = n("642906"),
                m = n("236838"),
                S = n("650484"),
                E = n("367767");

            function I(e) {
                var t, n;
                let s, {
                        handleClose: I,
                        planGroup: _,
                        onSubscriptionConfirmation: T,
                        renderPurchaseConfirmation: P,
                        postSuccessGuild: C,
                        followupSKUInfo: A
                    } = e,
                    {
                        activeSubscription: h,
                        paymentSources: N,
                        paymentSourceId: y,
                        selectedPlan: g,
                        selectedSkuId: x,
                        step: M,
                        updatedSubscription: O,
                        startingPremiumSubscriptionPlanIdRef: L
                    } = (0, p.usePaymentContext)(),
                    {
                        isGift: v,
                        giftRecipient: b,
                        giftCode: R,
                        hasSentMessage: U,
                        isSendingMessage: j,
                        sendGiftMessage: k
                    } = (0, f.useGiftContext)();
                a(null != g, "Expected plan to selected"), a(null != x, "Expected selectedSkuId"), a(null != M, "Step should be set");
                let {
                    successUpsellEnabled: D
                } = (0, l.default)({
                    location: "PremiumPaymentConfirmStep"
                }), F = r.useCallback(() => {
                    I(), null == T || T()
                }, [I, T]);
                return r.useEffect(() => {
                    if (!v || null == b || null == R || U || j || (0, d.shouldShowCustomGiftExperience)(b, !0, "PremiumPaymentConfirmStep")) return;
                    let e = u.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
                        location: "36b986_1"
                    }).enabled;
                    e && k({
                        onSubscriptionConfirmation: T
                    })
                }, [k, v, b, R, U, j, T]), s = null != P ? P(g, F, O) : v ? (0, i.jsx)(o.PremiumSubscriptionGiftPurchaseConfirmation, {
                    planId: g.id,
                    onClose: F
                }) : L.current === g.id ? (0, i.jsx)(o.default, {
                    planId: g.id,
                    postSuccessGuild: C,
                    onClose: F,
                    paymentSourceType: null === (t = N[null != y ? y : ""]) || void 0 === t ? void 0 : t.type
                }) : (0, i.jsx)(o.default, {
                    followupSKUInfo: A,
                    startingPremiumSubscriptionPlanId: L.current,
                    planId: g.id,
                    onClose: F,
                    isDowngrade: null != h && (0, c.subscriptionCanDowngrade)(h, g.id, _),
                    paymentSourceType: null === (n = N[null != y ? y : ""]) || void 0 === n ? void 0 : n.type
                }), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(S.PaymentPortalBody, {
                        children: [(0, i.jsx)(E.default, {}), s]
                    }), D && v && (0, i.jsx)(m.default, {
                        onClose: F
                    })]
                })
            }
        },
        646139: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentModal: function() {
                    return U
                },
                STEPS: function() {
                    return D
                },
                default: function() {
                    return F
                }
            }), n("70102"), n("222007");
            var i = n("37983"),
                r = n("884691"),
                s = n("446674"),
                a = n("913144"),
                l = n("775433"),
                u = n("812204"),
                o = n("685665"),
                d = n("677156"),
                c = n("10514"),
                f = n("521012"),
                p = n("659632"),
                m = n("635357"),
                S = n("642906"),
                E = n("85336"),
                I = n("385179"),
                _ = n("262683"),
                T = n("946359"),
                P = n("307367"),
                C = n("724269"),
                A = n("99836"),
                h = n("263820"),
                N = n("992049"),
                y = n("176108"),
                g = n("97461"),
                x = n("403365"),
                M = n("498475"),
                O = n("254350"),
                L = n("49111"),
                v = n("646718"),
                b = n("782340");
            let R = [E.Step.PLAN_SELECT, E.Step.ADD_PAYMENT_STEPS, E.Step.REVIEW, E.Step.CONFIRM];

            function U(e) {
                let {
                    analyticsLocation: t,
                    analyticsObject: n,
                    analyticsSourceLocation: s,
                    onComplete: u,
                    transitionState: f,
                    initialPlanId: _,
                    subscriptionTier: T,
                    onClose: P,
                    trialId: C,
                    trialFooterMessageOverride: A,
                    reviewWarningMessage: N,
                    openInvoiceId: y,
                    onSubscriptionConfirmation: g,
                    renderPurchaseConfirmation: x,
                    postSuccessGuild: M,
                    followupSKUInfo: O,
                    renderHeader: b,
                    applicationId: R,
                    guildId: U,
                    referralTrialOfferId: j,
                    skuId: k,
                    returnRef: D
                } = e, {
                    analyticsLocations: F
                } = (0, o.default)();
                r.useEffect(() => {
                    !c.default.isLoadedForPremiumSKUs() && a.default.wait(() => (0, l.fetchPremiumSubscriptionPlans)())
                }, []), h.default.getCurrentConfig({
                    location: "3a6d55_1"
                }, {
                    autoTrackExposure: !0
                });
                let {
                    step: w
                } = (0, S.usePaymentContext)(), {
                    isGift: G,
                    giftMessage: B,
                    giftRecipient: H
                } = (0, m.useGiftContext)(), W = G && (0, p.shouldShowCustomGiftExperience)(H, !0, "PremiumPaymentModal") && w === E.Step.PLAN_SELECT;
                return null != H && d.CustomGiftExperiment.getCurrentConfig({
                    location: "initialRelease_PremiumPaymentModal"
                }), (0, i.jsx)(I.PaymentModal, {
                    analyticsLocations: F,
                    analyticsLocation: t,
                    analyticsObject: n,
                    analyticsSourceLocation: s,
                    analyticsSubscriptionType: L.SubscriptionTypes.PREMIUM,
                    onComplete: u,
                    transitionState: f,
                    initialPlanId: _,
                    giftMessage: B,
                    subscriptionTier: T,
                    onClose: P,
                    trialId: C,
                    isGift: G,
                    trialFooterMessageOverride: A,
                    reviewWarningMessage: N,
                    planGroup: v.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                    openInvoiceId: y,
                    onSubscriptionConfirmation: g,
                    renderPurchaseConfirmation: x,
                    postSuccessGuild: M,
                    followupSKUInfo: O,
                    renderHeader: b,
                    applicationId: R,
                    guildId: U,
                    referralTrialOfferId: j,
                    skuId: k,
                    shakeWhilePurchasing: !0,
                    isLargeModal: W,
                    returnRef: D
                })
            }

            function j(e) {
                let {
                    startedPaymentFlowWithPaymentSourcesRef: t,
                    selectedSkuId: n
                } = (0, S.usePaymentContext)(), {
                    isGift: i
                } = (0, m.useGiftContext)();
                return (0, y.inOneStepSubscriptionCheckout)({
                    isTrial: null != e && e,
                    isGift: i,
                    selectedSkuId: n,
                    startedPaymentFlowWithPaymentSources: t.current
                })
            }

            function k(e) {
                let {
                    initialPlanId: t,
                    handleStepChange: n,
                    referralTrialOfferId: r
                } = e, {
                    paymentSources: s,
                    selectedSkuId: a
                } = (0, S.usePaymentContext)(), {
                    isGift: l
                } = (0, m.useGiftContext)(), u = (0, O.default)({
                    isGift: l,
                    skuId: a,
                    referralTrialOfferId: r
                }), o = j(u);
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(_.PaymentModalAddPaymentStep, {
                        ...e,
                        breadcrumbSteps: R,
                        onReturn: () => {
                            let e = Object.values(s).length < 1 && null == t ? E.Step.PLAN_SELECT : E.Step.REVIEW;
                            o && (e = E.Step.REVIEW), n(e, {
                                trackedFromStep: E.Step.PAYMENT_TYPE
                            })
                        }
                    })
                })
            }
            let D = [{
                key: null,
                renderStep: e => (0, i.jsx)(I.PaymentPredicateStep, {
                    ...e
                })
            }, {
                key: E.Step.SKU_SELECT,
                renderStep: e => (0, i.jsx)(x.PremiumPaymentSKUSelectStep, {
                    ...e
                }),
                options: {
                    renderHeader: !1,
                    hideSlider: !0
                }
            }, {
                key: E.Step.WHAT_YOU_LOSE,
                renderStep: e => (0, i.jsx)(M.PremiumPaymentWhatYouLoseStep, {
                    ...e
                }),
                options: {
                    renderHeader: !1,
                    hideSlider: !0
                }
            }, {
                key: E.Step.PLAN_SELECT,
                renderStep: e => (0, i.jsx)(g.PremiumPaymentPlanSelectStep, {
                    ...e
                }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: e => {
                        let t = j(e);
                        return t ? null : b.default.Messages.BILLING_STEP_SELECT_PLAN
                    }
                }
            }, {
                key: E.Step.ADD_PAYMENT_STEPS,
                renderStep: e => (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(k, {
                        ...e
                    })
                }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: e => {
                        let t = j(e);
                        return t ? null : b.default.Messages.BILLING_STEP_PAYMENT
                    }
                }
            }, {
                key: E.Step.AWAITING_BROWSER_CHECKOUT,
                renderStep: e => (0, i.jsx)(P.default, {
                    ...e
                })
            }, {
                key: E.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                renderStep: () => (0, i.jsx)(C.default, {})
            }, {
                key: E.Step.AWAITING_AUTHENTICATION,
                renderStep: () => (0, i.jsx)(T.default, {})
            }, {
                key: E.Step.REVIEW,
                renderStep: e => (0, i.jsx)(A.PaymentModalReviewStep, {
                    ...e
                }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: e => {
                        let t = j(e);
                        return t ? b.default.Messages.BILLING_STEP_PLAN_AND_PAYMENT : b.default.Messages.BILLING_STEP_REVIEW
                    }
                }
            }, {
                key: E.Step.CONFIRM,
                renderStep: e => (0, i.jsx)(N.PremiumPaymentConfirmStep, {
                    ...e
                })
            }];

            function F(e) {
                let t = (0, s.useStateFromStores)([f.default], () => f.default.getPremiumTypeSubscription()),
                    {
                        AnalyticsLocationProvider: n
                    } = (0, o.default)(e.analyticsLocations, u.default.PREMIUM_PAYMENT_MODAL),
                    {
                        subscriptionTier: r,
                        isGift: a,
                        giftRecipient: l,
                        giftMessage: d,
                        loadId: c,
                        defaultPlanId: p,
                        referralCode: E
                    } = e;
                if (null != r && !Object.values(v.PremiumSubscriptionSKUs).includes(r)) throw Error("subscriptionTier must be a premium subscription");
                return (0, i.jsx)(n, {
                    children: (0, i.jsx)(S.PaymentContextProvider, {
                        loadId: c,
                        activeSubscription: null != e.subscription ? e.subscription : t,
                        stepConfigs: D,
                        skuIDs: [...v.ACTIVE_PREMIUM_SKUS],
                        isGift: a,
                        defaultPlanId: p,
                        referralCode: E,
                        children: (0, i.jsx)(m.GiftContextProvider, {
                            isGift: a,
                            giftRecipient: null == l ? void 0 : l,
                            giftMessage: d,
                            children: (0, i.jsx)(U, {
                                ...e
                            })
                        })
                    })
                })
            }
        },
        97461: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentPlanSelectStep: function() {
                    return j
                }
            }), n("222007");
            var i = n("37983"),
                r = n("884691"),
                s = n("627445"),
                a = n.n(s),
                l = n("65597"),
                u = n("77078"),
                o = n("856413"),
                d = n("916187"),
                c = n("809071"),
                f = n("669073"),
                p = n("154889"),
                m = n("917247"),
                S = n("358821"),
                E = n("570727"),
                I = n("697218"),
                _ = n("10514"),
                T = n("145131"),
                P = n("659632"),
                C = n("701909"),
                A = n("719923"),
                h = n("635357"),
                N = n("642906"),
                y = n("85336"),
                g = n("153727"),
                x = n("628738"),
                M = n("650484"),
                O = n("310093"),
                L = n("367767"),
                v = n("49111"),
                b = n("646718"),
                R = n("782340"),
                U = n("424650");

            function j(e) {
                var t, n, s;
                let {
                    handleStepChange: j,
                    initialPlanId: k,
                    subscriptionTier: D,
                    trialId: F,
                    referralTrialOfferId: w,
                    handleClose: G
                } = e, {
                    activeSubscription: B,
                    hasFetchedSubscriptions: H,
                    paymentSourceId: W,
                    paymentSources: Y,
                    selectedSkuId: K,
                    selectedPlan: V,
                    step: Q,
                    defaultPlanId: Z,
                    priceOptions: q,
                    isPremium: X
                } = (0, N.usePaymentContext)(), {
                    isGift: z,
                    giftRecipient: J,
                    giftMessage: $
                } = (0, h.useGiftContext)(), ee = null != W ? Y[W] : null, {
                    newPlans: et
                } = d.default.useExperiment({
                    location: "d17fd6_3"
                }, {
                    autoTrackExposure: !1
                }), en = (0, l.default)([I.default], () => I.default.getCurrentUser()), ei = !z && null != K && K === b.PremiumSubscriptionSKUs.TIER_2 && null != en && en.hasHadPremium() && H && null == B && (0, d.isPaymentSourceEligibleForMultiMonthPlans)(ee), er = (0, m.usePremiumTrialOffer)(w), es = !z && null != er && null != K && (0, b.SubscriptionTrials)[er.trial_id].skus.includes(K), ea = (0, p.usePremiumDiscountOffer)(), el = null == ea ? void 0 : null === (t = ea.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => b.SubscriptionPlanInfo[e].skuId === K), eu = !z && null != ea && null != K && el, eo = null !== (n = es || eu) && void 0 !== n && n, {
                    defaultToMonthlyPlan: ed
                } = f.TrialRedemptionDefaultPlanExperiment.useExperiment({
                    location: "d17fd6_4"
                }, {
                    autoTrackExposure: !1
                }), ec = r.useMemo(() => (0, A.getPremiumPlanOptions)({
                    skuId: K,
                    isPremium: X,
                    multiMonthPlans: ei ? et : [],
                    currentSubscription: B,
                    isGift: z,
                    isEligibleForTrial: es,
                    defaultPlanId: Z,
                    defaultToMonthlyPlan: ed
                }), [K, X, et, B, ei, z, es, Z, ed]), ef = eu && ec.includes(b.SubscriptionPlans.PREMIUM_MONTH_TIER_2) ? b.SubscriptionPlans.PREMIUM_MONTH_TIER_2 : ec[0], ep = (0, l.default)([_.default], () => _.default.get(ef)), em = [{
                    planId: null == ep ? void 0 : ep.id,
                    quantity: 1
                }], [eS, eE] = r.useState(eo), [eI, e_] = (0, c.useSubscriptionInvoicePreview)({
                    items: em,
                    renewal: !1,
                    preventFetch: !eo,
                    applyEntitlements: !0,
                    trialId: F,
                    paymentSourceId: q.paymentSourceId,
                    currency: q.currency
                });
                r.useEffect(() => {
                    eo && eE((null == eI ? void 0 : eI.subscriptionPeriodEnd) == null)
                }, [eI, eo]), (0, o.default)("Payment Modal Plan Select Step", eS, 5, {
                    proratedInvoicePreview: eI,
                    proratedInvoiceError: e_,
                    isEligibleForOffer: eo
                }, {
                    tags: {
                        app_context: "billing"
                    }
                });
                let eT = null !== (s = null == e_ ? void 0 : e_.message) && void 0 !== s ? s : R.default.Messages.ERROR_GENERIC_TITLE,
                    eP = eo && null == e_,
                    eC = eo && null != e_;
                return eP && (null == eI ? void 0 : eI.subscriptionPeriodEnd) == null ? (0, i.jsx)(x.default, {}) : (a(null != Q, "Step should be set"), a(ec.length > 0, "Premium plan options should be set"), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(O.GiftNote, {
                        giftMessage: $
                    }), !(z && (0, P.shouldShowCustomGiftExperience)(J, !0, "PremiumPaymentPlanSelectStep")) && (0, i.jsx)(g.default, {
                        isEligibleForTrial: es
                    }), (0, i.jsxs)(M.PaymentPortalBody, {
                        children: [eP && (0, i.jsx)("hr", {
                            className: U.planSelectSeparatorUpper
                        }), (0, i.jsx)(S.default, {
                            isGift: z,
                            plan: V
                        }), (0, i.jsx)(L.default, {}), eC ? (0, i.jsx)(u.FormErrorBlock, {
                            children: eT
                        }) : (0, i.jsx)(E.PremiumSwitchPlanSelectBody, {
                            planOptions: ec,
                            eligibleForMultiMonthPlans: ei,
                            referralTrialOfferId: w,
                            selectedPlanId: null == V ? void 0 : V.id,
                            subscriptionPeriodEnd: null == eI ? void 0 : eI.subscriptionPeriodEnd,
                            discountInvoiceItems: eu ? null == eI ? void 0 : eI.invoiceItems : void 0,
                            handleClose: G
                        }), eP && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("hr", {
                                className: U.planSelectSeparatorLower
                            }), (0, i.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                children: R.default.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
                                    link: C.default.getArticleURL(v.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB)
                                })
                            })]
                        })]
                    }), (0, i.jsx)(M.PaymentPortalFooter, {
                        children: (0, i.jsx)(u.ModalFooter, {
                            justify: T.default.Justify.BETWEEN,
                            align: T.default.Align.CENTER,
                            children: (0, i.jsx)(E.PremiumSwitchPlanSelectFooter, {
                                onStepChange: j,
                                onBackClick: () => j(y.Step.SKU_SELECT),
                                showBackButton: null == k && null == D,
                                planOptions: ec,
                                shouldRenderUpdatedPaymentModal: eP,
                                isTrial: es
                            })
                        })
                    })]
                }))
            }
        },
        403365: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentSKUSelectStep: function() {
                    return I
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                s = n("917247"),
                a = n("279171"),
                l = n("49735"),
                u = n("719923"),
                o = n("635357"),
                d = n("642906"),
                c = n("85336"),
                f = n("176108"),
                p = n("254350"),
                m = n("646718"),
                S = n("782340"),
                E = n("600465");

            function I(e) {
                let {
                    handleStepChange: t,
                    handleClose: n,
                    referralTrialOfferId: r
                } = e, {
                    setSelectedSkuId: a,
                    activeSubscription: l,
                    startedPaymentFlowWithPaymentSourcesRef: S,
                    setSelectedPlanId: E
                } = (0, d.usePaymentContext)(), {
                    isGift: I
                } = (0, o.useGiftContext)(), T = (0, s.usePremiumTrialOffer)(r);
                return (0, i.jsx)(_, {
                    selectSku: e => (function(e) {
                        let {
                            activeSubscription: t,
                            newSkuId: n,
                            setSelectedSkuId: i,
                            handleStepChange: r,
                            isGift: s,
                            userTrialOffer: a,
                            setSelectedPlanId: l,
                            startedPaymentFlowWithPaymentSources: o
                        } = e;
                        i(n);
                        let d = c.Step.PLAN_SELECT,
                            S = (0, u.getPremiumSkuIdForSubscription)(t);
                        (S === m.PremiumSubscriptionSKUs.TIER_1 || S === m.PremiumSubscriptionSKUs.TIER_2) && n === m.PremiumSubscriptionSKUs.TIER_0 && !s && (d = c.Step.WHAT_YOU_LOSE);
                        let E = (0, p.isInTrialRedemption)({
                                userTrialOffer: a,
                                isGift: s,
                                skuId: n
                            }),
                            I = (0, f.inOneStepSubscriptionCheckout)({
                                isTrial: E,
                                isGift: s,
                                selectedSkuId: n,
                                startedPaymentFlowWithPaymentSources: o
                            });
                        if (d !== c.Step.WHAT_YOU_LOSE && I) {
                            d = c.Step.REVIEW;
                            let e = (0, f.getDefaultPlanOneStepCheckout)(n, t);
                            l(e)
                        }
                        r(d, {
                            analyticsDataOverride: {
                                sku_id: n
                            }
                        })
                    })({
                        activeSubscription: l,
                        newSkuId: e,
                        setSelectedSkuId: a,
                        handleStepChange: t,
                        isGift: I,
                        userTrialOffer: T,
                        startedPaymentFlowWithPaymentSources: S.current,
                        setSelectedPlanId: E
                    }),
                    onClose: n,
                    isGift: I
                })
            }

            function _(e) {
                let {
                    selectSku: t,
                    onClose: n,
                    isGift: s
                } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(r.ModalHeader, {
                        className: E.skuSelectModalHeader,
                        separator: !1,
                        children: [(0, i.jsx)(r.FormTitle, {
                            tag: r.FormTitleTags.H4,
                            children: S.default.Messages.BILLING_STEP_SELECT_PLAN
                        }), (0, i.jsx)(r.ModalCloseButton, {
                            onClick: n
                        })]
                    }), (0, i.jsxs)(r.ModalContent, {
                        className: E.skuSelectModalContent,
                        children: [(0, i.jsx)(a.default, {
                            fromBoostCancelModal: !1,
                            className: E.legacyPricingNotice
                        }), (0, i.jsx)(l.default, {
                            onSelectSku: t,
                            isGift: s
                        })]
                    })]
                })
            }
        },
        498475: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentWhatYouLoseStep: function() {
                    return I
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("627445"),
                s = n.n(r),
                a = n("819855"),
                l = n("77078"),
                u = n("841098"),
                o = n("360262"),
                d = n("719923"),
                c = n("635357"),
                f = n("642906"),
                p = n("85336"),
                m = n("176108"),
                S = n("782340"),
                E = n("943490");

            function I(e) {
                let {
                    handleStepChange: t,
                    handleClose: n
                } = e, r = (0, u.default)(), {
                    activeSubscription: I,
                    selectedSkuId: _,
                    setSelectedPlanId: T,
                    startedPaymentFlowWithPaymentSourcesRef: P
                } = (0, f.usePaymentContext)(), {
                    isGift: C
                } = (0, c.useGiftContext)(), A = null != I ? (0, d.getPremiumPlanItem)(I) : null, h = null != A ? (0, d.getDisplayPremiumType)(A.planId) : null, N = null != A ? (0, d.getPremiumType)(A.planId) : null, y = (0, m.inOneStepSubscriptionCheckout)({
                    isTrial: !1,
                    isGift: C,
                    selectedSkuId: _,
                    startedPaymentFlowWithPaymentSources: P.current
                });
                return s(null != N, "Expected premium type"), (0, i.jsx)(o.default, {
                    premiumType: N,
                    titleText: S.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
                    subtitleText: S.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
                        subscriptionName: h
                    }),
                    footer: (0, i.jsxs)("div", {
                        className: E.whatYouLoseButtonContainer,
                        children: [(0, i.jsx)(l.Button, {
                            onClick: () => {
                                if (y) {
                                    let e = (0, m.getDefaultPlanOneStepCheckout)(_, I);
                                    T(e), t(p.Step.REVIEW)
                                } else t(p.Step.PLAN_SELECT)
                            },
                            children: S.default.Messages.CONTINUE
                        }), (0, i.jsx)(l.Button, {
                            look: l.Button.Looks.LINK,
                            color: (0, a.isThemeDark)(r) ? l.Button.Colors.WHITE : l.Button.Colors.PRIMARY,
                            onClick: n,
                            children: S.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
                        })]
                    }),
                    onClose: n,
                    isDowngrade: !0
                })
            }
        },
        491523: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AutomatedGiftCodeMessageExperiment: function() {
                    return r
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-07_automated_gift_code_message",
                label: "Automatically send gift code message in direct message to gift recipient",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show the automated gift code message",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        677156: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CustomGiftExperiment: function() {
                    return r
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-08_custom_gift",
                label: "Custom Gift Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show gift purchaser custom gift flow",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        358821: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("641078"),
                s = n("132554"),
                a = n("646718"),
                l = n("782340"),
                u = n("880865"),
                o = e => {
                    let {
                        isGift: t,
                        plan: n
                    } = e, o = (0, r.useIsEligibleForBogoPromotion)();
                    return t || (null == n ? void 0 : n.skuId) !== a.PremiumSubscriptionSKUs.TIER_2 || !o ? null : (0, i.jsx)(s.default, {
                        copy: l.default.Messages.BOGO_ANNOUNCEMENT_MODAL_UPGRADE_HEADER,
                        bannerImage: u
                    })
                }
        },
        49735: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                s = n("400307"),
                a = n("646718"),
                l = n("414539");

            function u(e) {
                let {
                    onClick: t,
                    isGift: n
                } = e;
                return (0, i.jsx)(r.Clickable, {
                    onClick: t,
                    style: {
                        cursor: "pointer"
                    },
                    children: (0, i.jsx)(s.Tier2Card, {
                        className: l.tier2MarketingCard,
                        ctaButton: null,
                        showWumpus: !0,
                        showYearlyPrice: !0,
                        isGift: n,
                        isModal: !0
                    })
                })
            }

            function o(e) {
                let {
                    onClick: t,
                    isGift: n
                } = e;
                return (0, i.jsx)(r.Clickable, {
                    onClick: t,
                    style: {
                        cursor: "pointer"
                    },
                    children: (0, i.jsx)(s.Tier0Card, {
                        className: l.tier0MarketingCard,
                        ctaButton: null,
                        showWumpus: !0,
                        showYearlyPrice: !0,
                        isGift: n
                    })
                })
            }
            var d = function(e) {
                let {
                    onSelectSku: t,
                    isGift: n
                } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(u, {
                        onClick: () => t(a.PremiumSubscriptionSKUs.TIER_2),
                        isGift: n
                    }), (0, i.jsx)(o, {
                        onClick: () => t(a.PremiumSubscriptionSKUs.TIER_0),
                        isGift: n
                    })]
                })
            }
        },
        132554: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                a = n("77078"),
                l = n("978679"),
                u = n("265469");

            function o(e) {
                let {
                    className: t,
                    copy: n,
                    bannerImage: r,
                    textColor: o = "always-white"
                } = e;
                return (0, i.jsxs)("div", {
                    className: s(u.bannerContainer, t),
                    children: [null == r ? null : (0, i.jsx)("img", {
                        alt: "",
                        className: u.banner,
                        src: r
                    }), (0, i.jsxs)("div", {
                        className: u.textContainer,
                        children: [(0, i.jsx)(l.default, {
                            className: u.giftIcon
                        }), (0, i.jsx)(a.Heading, {
                            className: u.textHeader,
                            color: o,
                            variant: "eyebrow",
                            children: n
                        })]
                    })]
                })
            }
        },
        843823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var i = n("446674"),
                r = n("913144"),
                s = n("27618");
            let a = !1,
                l = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                u = {
                    ...l
                };

            function o() {
                u.affinityUserIds = new Set(u.userAffinities.map(e => e.user_id).filter(e => !s.default.isBlocked(e)))
            }
            class d extends i.default.PersistedStore {
                initialize(e) {
                    this.waitFor(s.default), null != e && (u.userAffinities = e.userAffinities, u.affinityUserIds = new Set(e.affinityUserIds), u.lastFetched = e.lastFetched), this.syncWith([s.default], o)
                }
                needsRefresh() {
                    return Date.now() - u.lastFetched > 864e5
                }
                getFetching() {
                    return a
                }
                getState() {
                    return u
                }
                getUserAffinities() {
                    return u.userAffinities
                }
                getUserAffinitiesUserIds() {
                    return u.affinityUserIds
                }
            }
            d.displayName = "UserAffinitiesStore", d.persistKey = "UserAffinitiesStore", d.migrations = [e => null];
            var c = new d(r.default, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t;
                    let {
                        affinities: n
                    } = e;
                    u.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [], u.lastFetched = Date.now(), o(), a = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    a = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    a = !1
                },
                LOGOUT: function() {
                    u = {
                        ...l
                    }
                }
            })
        }
    }
]);