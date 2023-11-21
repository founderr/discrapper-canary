(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["31820"], {
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
        311050: function(e, t, n) {
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
            var r = n("872717"),
                i = n("913144"),
                s = n("843823"),
                a = n("49111");

            function l() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return s.default.needsRefresh() ? (i.default.dispatch({
                    type: "LOAD_USER_AFFINITIES"
                }), r.default.get({
                    url: a.Endpoints.USER_AFFINITIES,
                    retries: e ? 3 : 0,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: t
                    } = e;
                    i.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_SUCCESS",
                        affinities: t
                    })
                }, () => {
                    i.default.dispatch({
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
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87c-.625 0-1.178-.162-1.66-.485-.482-.324-.855-.777-1.121-1.359C4.133 13.437 4 12.762 4 12c0-.755.14-1.423.42-2.005.288-.583.701-1.039 1.24-1.37.546-.33 1.197-.495 1.951-.495.64 0 1.211.136 1.714.41.51.272.895.657 1.154 1.153l-1.218.873c-.367-.676-.913-1.013-1.639-1.013-.661 0-1.168.215-1.52.646-.352.425-.528 1.025-.528 1.8 0 .784.176 1.388.528 1.812.352.424.859.636 1.52.636.295 0 .564-.054.809-.162.251-.115.445-.27.582-.463v-.927H7.299v-1.402h3.245v4.226H9.272l-.205-.712c-.424.575-1.053.863-1.887.863Zm6.34-.151h-1.574V8.28h1.574v7.438Zm1.51 0h1.574v-2.824h2.76v-1.423h-2.76V9.704H20V8.28h-4.97v7.438Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.786 3.374A.25.25 0 0 0 17.57 5h-3.134a.75.75 0 0 0-.65.378L6.213 18.626A.25.25 0 0 0 6.43 19h3.134a.75.75 0 0 0 .65-.378l7.571-13.248Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        162426: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("222007");
            var r = n("884691"),
                i = n("599417"),
                s = n("782340");

            function a(e) {
                let [t, n] = r.useState(!1), [a, l] = r.useState(null), u = r.useCallback(async function() {
                    for (var t = arguments.length, r = Array(t), a = 0; a < t; a++) r[a] = arguments[a];
                    try {
                        return l(null), n(!0), await e(...r)
                    } catch (e) {
                        e.message !== s.default.Messages.MFA_V2_CANCELED && l(new i.default(e))
                    } finally {
                        n(!1)
                    }
                }, [e]);
                return [u, {
                    loading: t,
                    error: a
                }]
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
            var r = n("872717"),
                i = n("913144"),
                s = n("49111");

            function a(e, t, n, r) {
                i.default.dispatch({
                    type: "QUEUE_INTERACTION_COMPONENT_STATE",
                    messageId: e,
                    nonce: t,
                    state: n,
                    indices: r
                })
            }

            function l(e, t) {
                let {
                    data: n,
                    messageId: r,
                    onCreate: s,
                    onSuccess: a,
                    onFailure: l
                } = t;
                i.default.dispatch({
                    type: "INTERACTION_QUEUE",
                    data: n,
                    nonce: e,
                    messageId: r,
                    onCreate: s,
                    onSuccess: a,
                    onFailure: l
                })
            }

            function u(e, t, n) {
                i.default.dispatch({
                    type: "INTERACTION_FAILURE",
                    nonce: e,
                    errorMessage: n,
                    errorCode: t
                })
            }
            async function o(e, t) {
                let n = await r.default.get({
                    url: s.Endpoints.MESSAGE_INTERACTION_DATA(e, t),
                    oldFormErrors: !0
                });
                if (n.ok) {
                    let r = n.body;
                    i.default.dispatch({
                        type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",
                        channelId: e,
                        messageId: t,
                        interactionData: r
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
                    return T
                },
                InteractionStatusViewState: function() {
                    return r
                },
                getInteractionStatusViewState: function() {
                    return P
                },
                canRetryInteractionData: function() {
                    return h
                }
            }), n("222007");
            var r, i, s = n("249654"),
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
                    messageFlags: r,
                    customId: i,
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
                        customId: i,
                        indices: l
                    },
                    onFailure: (e, t) => C(m, e, t)
                }), null != I && (0, f.queueInteractionComponentState)(n, _, I, l);
                let P = {
                    type: o.InteractionTypes.MESSAGE_COMPONENT,
                    nonce: _,
                    guild_id: S,
                    channel_id: m,
                    message_flags: r,
                    message_id: n,
                    application_id: u,
                    session_id: c.default.getSessionId(),
                    data: {
                        component_type: t,
                        custom_id: i,
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
                    body: P,
                    timeout: 3e3
                }, e => {
                    T(_, m, S, e)
                })
            }, C = (e, t, n) => {
                null == n && null != t && u.default.sendClydeError(e, t)
            }, T = (e, t, n, r) => {
                if (!r.ok) {
                    if (!r.hasErr) {
                        var i;
                        if (r.status >= 400 && r.status < 500 && r.body) {
                            if (r.body.code === E.AbortCodes.INVALID_FORM_BODY && r.body.errors) {
                                let i = (0, S.getFirstSkemaError)(r.body.errors);
                                null != i && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === i.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === i.code) && l.default.dispatch({
                                    type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                                    channelId: t,
                                    guildId: n
                                }), (0, f.setFailed)(e, void 0, null == i ? void 0 : i.message);
                                return
                            }(0, f.setFailed)(e, void 0, r.body.message);
                            return
                        }(0, f.setFailed)(e, null === (i = r.body) || void 0 === i ? void 0 : i.code);
                        return
                    }(0, f.setFailed)(e)
                }
            };
            (i = r || (r = {}))[i.SENDING = 0] = "SENDING", i[i.CREATED = 1] = "CREATED", i[i.FAILED = 2] = "FAILED", i[i.TIMED_OUT = 3] = "TIMED_OUT";
            let P = (e, t) => {
                var n;
                let r = null == t ? void 0 : t.state,
                    i = e.state === E.MessageStates.SENT && I(e.id) < Date.now();
                let a = e.state === E.MessageStates.SEND_FAILED && (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : s.default.extractTimestamp(n) + 3e3) < Date.now(),
                    l = (null == t ? void 0 : t.data.interactionType) === o.InteractionTypes.APPLICATION_COMMAND,
                    u = e.isCommandType();
                if (l && r === m.InteractionState.QUEUED || u && e.state === E.MessageStates.SENDING && null != t) return 0;
                if (l && r === m.InteractionState.CREATED || e.hasFlag(E.MessageFlags.LOADING) && !i) return 1;
                if (null != e.interaction && e.hasFlag(E.MessageFlags.LOADING) && i) return 3;
                else if (null != e.interaction && !e.hasFlag(E.MessageFlags.LOADING) && a) return 3;
                else if (u && e.state === E.MessageStates.SEND_FAILED) return 2
            };

            function h(e) {
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
                    return i
                }
            }), n("222007");
            let r = "_errors";

            function i(e) {
                return function e(t, n) {
                    let i = t[r];
                    if (null != i && Array.isArray(i)) return i[0];
                    for (let [i, s] of Object.entries(t))
                        if (i !== r && null != s && "object" == typeof s) return e(s, null != n ? n : i);
                    return null
                }(e, void 0)
            }
        },
        307367: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var r = n("37983"),
                i = n("884691"),
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
                    browserCheckoutStateLoadId: C,
                    contextMetadata: T
                } = (0, d.usePaymentContext)(), {
                    isGift: P
                } = (0, o.useGiftContext)(), [h, A] = i.useState(!1);
                return i.useEffect(() => {
                    var e;
                    !h && (A(!0), (0, l.startBrowserCheckout)(T.loadId), ! function(e, t, n, r) {
                        let i = E.Endpoints.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, n),
                            l = new URL(u.default.makeUrl(E.Routes.BILLING_LOGIN_HANDOFF)),
                            o = (0, s.v4)();
                        l.searchParams.append("handoff_key", o), l.searchParams.append("redirect_to", i), a.default.post({
                            url: E.Endpoints.HANDOFF,
                            body: {
                                key: o
                            },
                            oldFormErrors: !0
                        }).then(e => {
                            l.searchParams.append("handoff_token", e.body.handoff_token), window.open(l.href)
                        }, () => {
                            r()
                        })
                    }(null !== (e = null == n ? void 0 : n.id) && void 0 !== e ? e : I.SubscriptionPlans.PREMIUM_MONTH_TIER_2, P, T.loadId, () => t(c.Step.ADD_PAYMENT_STEPS)))
                }, [n, P, h, A, T, t]), i.useEffect(() => {
                    C === T.loadId && _ === p.BrowserCheckoutState.DONE && t(c.Step.CONFIRM)
                }, [_, C, T, t]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(m.default, {}), (0, r.jsx)(S.PaymentPortalBody, {
                        children: (0, r.jsx)(f.AwaitingBrowserCheckoutStepBody, {})
                    }), (0, r.jsx)(S.PaymentPortalFooter, {
                        children: (0, r.jsx)(f.AwaitingBrowserCheckoutStepFooter, {
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
            var r = n("862205");
            let i = (0, r.createExperiment)({
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
            var s = i
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
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                s = n("177998"),
                a = n("145131"),
                l = n("85336"),
                u = n("782340");
            let o = () => (0, r.jsx)("div", {
                    children: (0, r.jsx)(i.Heading, {
                        variant: "heading-xl/bold",
                        children: u.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_HEADER
                    })
                }),
                d = e => {
                    let {
                        onStepChange: t,
                        onBackClick: n
                    } = e;
                    return (0, r.jsx)("div", {
                        children: (0, r.jsxs)(i.ModalFooter, {
                            justify: a.default.Justify.BETWEEN,
                            align: a.default.Align.CENTER,
                            children: [(0, r.jsx)(i.Button, {
                                color: i.Button.Colors.BRAND,
                                onClick: () => {
                                    t(l.Step.ADD_PAYMENT_STEPS)
                                },
                                children: u.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_NEXT_BUTTON
                            }), (0, r.jsx)(s.default, {
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
                    return S
                }
            });
            var r = n("37983"),
                i = n("884691"),
                s = n("627445"),
                a = n.n(s),
                l = n("491523"),
                u = n("775155"),
                o = n("659632"),
                d = n("380186"),
                c = n("635357"),
                f = n("642906"),
                p = n("650484"),
                m = n("367767");

            function S(e) {
                var t, n;
                let s, {
                        handleClose: S,
                        planGroup: E,
                        onSubscriptionConfirmation: I,
                        renderPurchaseConfirmation: _,
                        postSuccessGuild: C,
                        followupSKUInfo: T
                    } = e,
                    {
                        activeSubscription: P,
                        paymentSources: h,
                        paymentSourceId: A,
                        selectedPlan: g,
                        selectedSkuId: N,
                        step: y,
                        updatedSubscription: x,
                        startingPremiumSubscriptionPlanIdRef: v
                    } = (0, f.usePaymentContext)(),
                    {
                        isGift: M,
                        giftRecipient: O,
                        giftCode: L,
                        hasSentMessage: R,
                        isSendingMessage: b,
                        sendGiftMessage: j
                    } = (0, c.useGiftContext)();
                a(null != g, "Expected plan to selected"), a(null != N, "Expected selectedSkuId"), a(null != y, "Step should be set");
                let U = i.useCallback(() => {
                    S(), null == I || I()
                }, [S, I]);
                return i.useEffect(() => {
                    if (!M || null == O || null == L || R || b || (0, o.shouldShowCustomGiftExperience)(O, !0, "PremiumPaymentConfirmStep")) return;
                    let e = l.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
                        location: "36b986_1"
                    }).enabled;
                    e && j({
                        onSubscriptionConfirmation: I
                    })
                }, [j, M, O, L, R, b, I]), s = null != _ ? _(g, U, x) : M ? (0, r.jsx)(u.PremiumSubscriptionGiftPurchaseConfirmation, {
                    planId: g.id,
                    onClose: U
                }) : v.current === g.id ? (0, r.jsx)(u.default, {
                    planId: g.id,
                    postSuccessGuild: C,
                    onClose: U,
                    paymentSourceType: null === (t = h[null != A ? A : ""]) || void 0 === t ? void 0 : t.type
                }) : (0, r.jsx)(u.default, {
                    followupSKUInfo: T,
                    startingPremiumSubscriptionPlanId: v.current,
                    planId: g.id,
                    onClose: U,
                    isDowngrade: null != P && (0, d.subscriptionCanDowngrade)(P, g.id, E),
                    paymentSourceType: null === (n = h[null != A ? A : ""]) || void 0 === n ? void 0 : n.type
                }), (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)(p.PaymentPortalBody, {
                        children: [(0, r.jsx)(m.default, {}), s]
                    })
                })
            }
        },
        646139: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentModal: function() {
                    return j
                },
                STEPS: function() {
                    return D
                },
                default: function() {
                    return F
                }
            }), n("70102"), n("222007");
            var r = n("37983"),
                i = n("884691"),
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
                C = n("946359"),
                T = n("307367"),
                P = n("724269"),
                h = n("99836"),
                A = n("263820"),
                g = n("992049"),
                N = n("176108"),
                y = n("97461"),
                x = n("403365"),
                v = n("498475"),
                M = n("254350"),
                O = n("49111"),
                L = n("646718"),
                R = n("782340");
            let b = [E.Step.PLAN_SELECT, E.Step.ADD_PAYMENT_STEPS, E.Step.REVIEW, E.Step.CONFIRM];

            function j(e) {
                let {
                    analyticsLocation: t,
                    analyticsObject: n,
                    analyticsSourceLocation: s,
                    onComplete: u,
                    transitionState: f,
                    initialPlanId: _,
                    subscriptionTier: C,
                    onClose: T,
                    trialId: P,
                    trialFooterMessageOverride: h,
                    reviewWarningMessage: g,
                    openInvoiceId: N,
                    onSubscriptionConfirmation: y,
                    renderPurchaseConfirmation: x,
                    postSuccessGuild: v,
                    followupSKUInfo: M,
                    renderHeader: R,
                    applicationId: b,
                    guildId: j,
                    referralTrialOfferId: U,
                    skuId: k,
                    returnRef: D
                } = e, {
                    analyticsLocations: F
                } = (0, o.default)();
                i.useEffect(() => {
                    !c.default.isLoadedForPremiumSKUs() && a.default.wait(() => (0, l.fetchPremiumSubscriptionPlans)())
                }, []), A.default.getCurrentConfig({
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
                }), (0, r.jsx)(I.PaymentModal, {
                    analyticsLocations: F,
                    analyticsLocation: t,
                    analyticsObject: n,
                    analyticsSourceLocation: s,
                    analyticsSubscriptionType: O.SubscriptionTypes.PREMIUM,
                    onComplete: u,
                    transitionState: f,
                    initialPlanId: _,
                    giftMessage: B,
                    subscriptionTier: C,
                    onClose: T,
                    trialId: P,
                    isGift: G,
                    trialFooterMessageOverride: h,
                    reviewWarningMessage: g,
                    planGroup: L.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                    openInvoiceId: N,
                    onSubscriptionConfirmation: y,
                    renderPurchaseConfirmation: x,
                    postSuccessGuild: v,
                    followupSKUInfo: M,
                    renderHeader: R,
                    applicationId: b,
                    guildId: j,
                    referralTrialOfferId: U,
                    skuId: k,
                    shakeWhilePurchasing: !0,
                    isLargeModal: W,
                    returnRef: D
                })
            }

            function U(e) {
                let {
                    startedPaymentFlowWithPaymentSourcesRef: t,
                    selectedSkuId: n
                } = (0, S.usePaymentContext)(), {
                    isGift: r
                } = (0, m.useGiftContext)();
                return (0, N.inOneStepSubscriptionCheckout)({
                    isTrial: null != e && e,
                    isGift: r,
                    selectedSkuId: n,
                    startedPaymentFlowWithPaymentSources: t.current
                })
            }

            function k(e) {
                let {
                    initialPlanId: t,
                    handleStepChange: n,
                    referralTrialOfferId: i
                } = e, {
                    paymentSources: s,
                    selectedSkuId: a
                } = (0, S.usePaymentContext)(), {
                    isGift: l
                } = (0, m.useGiftContext)(), u = (0, M.default)({
                    isGift: l,
                    skuId: a,
                    referralTrialOfferId: i
                }), o = U(u);
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(_.PaymentModalAddPaymentStep, {
                        ...e,
                        breadcrumbSteps: b,
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
                renderStep: e => (0, r.jsx)(I.PaymentPredicateStep, {
                    ...e
                })
            }, {
                key: E.Step.SKU_SELECT,
                renderStep: e => (0, r.jsx)(x.PremiumPaymentSKUSelectStep, {
                    ...e
                }),
                options: {
                    renderHeader: !1,
                    hideSlider: !0
                }
            }, {
                key: E.Step.WHAT_YOU_LOSE,
                renderStep: e => (0, r.jsx)(v.PremiumPaymentWhatYouLoseStep, {
                    ...e
                }),
                options: {
                    renderHeader: !1,
                    hideSlider: !0
                }
            }, {
                key: E.Step.PLAN_SELECT,
                renderStep: e => (0, r.jsx)(y.PremiumPaymentPlanSelectStep, {
                    ...e
                }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: e => {
                        let t = U(e);
                        return t ? null : R.default.Messages.BILLING_STEP_SELECT_PLAN
                    }
                }
            }, {
                key: E.Step.ADD_PAYMENT_STEPS,
                renderStep: e => (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(k, {
                        ...e
                    })
                }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: e => {
                        let t = U(e);
                        return t ? null : R.default.Messages.BILLING_STEP_PAYMENT
                    }
                }
            }, {
                key: E.Step.AWAITING_BROWSER_CHECKOUT,
                renderStep: e => (0, r.jsx)(T.default, {
                    ...e
                })
            }, {
                key: E.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                renderStep: () => (0, r.jsx)(P.default, {})
            }, {
                key: E.Step.AWAITING_AUTHENTICATION,
                renderStep: () => (0, r.jsx)(C.default, {})
            }, {
                key: E.Step.REVIEW,
                renderStep: e => (0, r.jsx)(h.PaymentModalReviewStep, {
                    ...e
                }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: e => {
                        let t = U(e);
                        return t ? R.default.Messages.BILLING_STEP_PLAN_AND_PAYMENT : R.default.Messages.BILLING_STEP_REVIEW
                    }
                }
            }, {
                key: E.Step.CONFIRM,
                renderStep: e => (0, r.jsx)(g.PremiumPaymentConfirmStep, {
                    ...e
                })
            }];

            function F(e) {
                let t = (0, s.useStateFromStores)([f.default], () => f.default.getPremiumTypeSubscription()),
                    {
                        AnalyticsLocationProvider: n
                    } = (0, o.default)(e.analyticsLocations, u.default.PREMIUM_PAYMENT_MODAL),
                    {
                        subscriptionTier: i,
                        isGift: a,
                        giftRecipient: l,
                        giftMessage: d,
                        loadId: c,
                        defaultPlanId: p,
                        referralCode: E
                    } = e;
                if (null != i && !Object.values(L.PremiumSubscriptionSKUs).includes(i)) throw Error("subscriptionTier must be a premium subscription");
                return (0, r.jsx)(n, {
                    children: (0, r.jsx)(S.PaymentContextProvider, {
                        loadId: c,
                        activeSubscription: t,
                        stepConfigs: D,
                        skuIDs: [...L.ACTIVE_PREMIUM_SKUS],
                        isGift: a,
                        defaultPlanId: p,
                        referralCode: E,
                        children: (0, r.jsx)(m.GiftContextProvider, {
                            isGift: a,
                            giftRecipient: null == l ? void 0 : l,
                            giftMessage: d,
                            children: (0, r.jsx)(j, {
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
                    return U
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
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
                C = n("145131"),
                T = n("659632"),
                P = n("701909"),
                h = n("719923"),
                A = n("635357"),
                g = n("642906"),
                N = n("85336"),
                y = n("153727"),
                x = n("628738"),
                v = n("650484"),
                M = n("310093"),
                O = n("367767"),
                L = n("49111"),
                R = n("646718"),
                b = n("782340"),
                j = n("424650");

            function U(e) {
                var t, n, s;
                let {
                    handleStepChange: U,
                    initialPlanId: k,
                    subscriptionTier: D,
                    trialId: F,
                    referralTrialOfferId: w
                } = e, {
                    activeSubscription: G,
                    hasFetchedSubscriptions: B,
                    paymentSourceId: H,
                    paymentSources: W,
                    selectedSkuId: V,
                    selectedPlan: K,
                    step: Y,
                    defaultPlanId: Z,
                    priceOptions: Q,
                    isPremium: z
                } = (0, g.usePaymentContext)(), {
                    isGift: q,
                    giftRecipient: X,
                    giftMessage: J
                } = (0, A.useGiftContext)(), $ = null != H ? W[H] : null, {
                    newPlans: ee
                } = d.default.useExperiment({
                    location: "d17fd6_3"
                }, {
                    autoTrackExposure: !1
                }), et = (0, l.default)([I.default], () => I.default.getCurrentUser()), en = !q && null != V && V === R.PremiumSubscriptionSKUs.TIER_2 && null != et && et.hasHadPremium() && B && null == G && (0, d.isPaymentSourceEligibleForMultiMonthPlans)($), er = (0, m.usePremiumTrialOffer)(w), ei = !q && null != er && null != V && (0, R.SubscriptionTrials)[er.trial_id].skus.includes(V), es = (0, p.usePremiumDiscountOffer)(), ea = null == es ? void 0 : null === (t = es.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => R.SubscriptionPlanInfo[e].skuId === V), el = !q && null != es && null != V && ea, eu = null !== (n = ei || el) && void 0 !== n && n, {
                    defaultToMonthlyPlan: eo
                } = f.TrialRedemptionDefaultPlanExperiment.useExperiment({
                    location: "d17fd6_4"
                }, {
                    autoTrackExposure: !1
                }), ed = i.useMemo(() => (0, h.getPremiumPlanOptions)({
                    skuId: V,
                    isPremium: z,
                    multiMonthPlans: en ? ee : [],
                    currentSubscription: G,
                    isGift: q,
                    isEligibleForTrial: ei,
                    defaultPlanId: Z,
                    defaultToMonthlyPlan: eo
                }), [V, z, ee, G, en, q, ei, Z, eo]), ec = el && ed.includes(R.SubscriptionPlans.PREMIUM_MONTH_TIER_2) ? R.SubscriptionPlans.PREMIUM_MONTH_TIER_2 : ed[0], ef = (0, l.default)([_.default], () => _.default.get(ec)), ep = [{
                    planId: null == ef ? void 0 : ef.id,
                    quantity: 1
                }], [em, eS] = i.useState(eu), [eE, eI] = (0, c.useSubscriptionInvoicePreview)({
                    items: ep,
                    renewal: !1,
                    preventFetch: !eu,
                    applyEntitlements: !0,
                    trialId: F,
                    paymentSourceId: Q.paymentSourceId,
                    currency: Q.currency
                });
                i.useEffect(() => {
                    eu && eS((null == eE ? void 0 : eE.subscriptionPeriodEnd) == null)
                }, [eE, eu]), (0, o.default)("Payment Modal Plan Select Step", em, 5, {
                    proratedInvoicePreview: eE,
                    proratedInvoiceError: eI,
                    isEligibleForOffer: eu
                }, {
                    tags: {
                        app_context: "billing"
                    }
                });
                let e_ = null !== (s = null == eI ? void 0 : eI.message) && void 0 !== s ? s : b.default.Messages.ERROR_GENERIC_TITLE,
                    eC = eu && null == eI,
                    eT = eu && null != eI;
                return eC && (null == eE ? void 0 : eE.subscriptionPeriodEnd) == null ? (0, r.jsx)(x.default, {}) : (a(null != Y, "Step should be set"), a(ed.length > 0, "Premium plan options should be set"), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(M.GiftNote, {
                        giftMessage: J
                    }), !(q && (0, T.shouldShowCustomGiftExperience)(X, !0, "PremiumPaymentPlanSelectStep")) && (0, r.jsx)(y.default, {
                        isEligibleForTrial: ei
                    }), (0, r.jsxs)(v.PaymentPortalBody, {
                        children: [eC && (0, r.jsx)("hr", {
                            className: j.planSelectSeparatorUpper
                        }), (0, r.jsx)(S.default, {
                            isGift: q,
                            plan: K
                        }), (0, r.jsx)(O.default, {}), eT ? (0, r.jsx)(u.FormErrorBlock, {
                            children: e_
                        }) : (0, r.jsx)(E.PremiumSwitchPlanSelectBody, {
                            planOptions: ed,
                            eligibleForMultiMonthPlans: en,
                            referralTrialOfferId: w,
                            selectedPlanId: null == K ? void 0 : K.id,
                            subscriptionPeriodEnd: null == eE ? void 0 : eE.subscriptionPeriodEnd,
                            discountInvoiceItems: el ? null == eE ? void 0 : eE.invoiceItems : void 0
                        }), eC && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("hr", {
                                className: j.planSelectSeparatorLower
                            }), (0, r.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                children: b.default.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
                                    link: P.default.getArticleURL(L.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB)
                                })
                            })]
                        })]
                    }), (0, r.jsx)(v.PaymentPortalFooter, {
                        children: (0, r.jsx)(u.ModalFooter, {
                            justify: C.default.Justify.BETWEEN,
                            align: C.default.Align.CENTER,
                            children: (0, r.jsx)(E.PremiumSwitchPlanSelectFooter, {
                                onStepChange: U,
                                onBackClick: () => U(N.Step.SKU_SELECT),
                                showBackButton: null == k && null == D,
                                planOptions: ed,
                                shouldRenderUpdatedPaymentModal: eC,
                                isTrial: ei
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
            var r = n("37983");
            n("884691");
            var i = n("77078"),
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
                    referralTrialOfferId: i
                } = e, {
                    setSelectedSkuId: a,
                    activeSubscription: l,
                    startedPaymentFlowWithPaymentSourcesRef: S,
                    setSelectedPlanId: E
                } = (0, d.usePaymentContext)(), {
                    isGift: I
                } = (0, o.useGiftContext)(), C = (0, s.usePremiumTrialOffer)(i);
                return (0, r.jsx)(_, {
                    selectSku: e => (function(e) {
                        let {
                            activeSubscription: t,
                            newSkuId: n,
                            setSelectedSkuId: r,
                            handleStepChange: i,
                            isGift: s,
                            userTrialOffer: a,
                            setSelectedPlanId: l,
                            startedPaymentFlowWithPaymentSources: o
                        } = e;
                        r(n);
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
                        i(d, {
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
                        userTrialOffer: C,
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
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(i.ModalHeader, {
                        className: E.skuSelectModalHeader,
                        separator: !1,
                        children: [(0, r.jsx)(i.FormTitle, {
                            tag: i.FormTitleTags.H4,
                            children: S.default.Messages.BILLING_STEP_SELECT_PLAN
                        }), (0, r.jsx)(i.ModalCloseButton, {
                            onClick: n
                        })]
                    }), (0, r.jsxs)(i.ModalContent, {
                        className: E.skuSelectModalContent,
                        children: [(0, r.jsx)(a.default, {
                            fromBoostCancelModal: !1,
                            className: E.legacyPricingNotice
                        }), (0, r.jsx)(l.default, {
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
            var r = n("37983");
            n("884691");
            var i = n("627445"),
                s = n.n(i),
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
                } = e, i = (0, u.default)(), {
                    activeSubscription: I,
                    selectedSkuId: _,
                    setSelectedPlanId: C,
                    startedPaymentFlowWithPaymentSourcesRef: T
                } = (0, f.usePaymentContext)(), {
                    isGift: P
                } = (0, c.useGiftContext)(), h = null != I ? (0, d.getPremiumPlanItem)(I) : null, A = null != h ? (0, d.getDisplayPremiumType)(h.planId) : null, g = null != h ? (0, d.getPremiumType)(h.planId) : null, N = (0, m.inOneStepSubscriptionCheckout)({
                    isTrial: !1,
                    isGift: P,
                    selectedSkuId: _,
                    startedPaymentFlowWithPaymentSources: T.current
                });
                return s(null != g, "Expected premium type"), (0, r.jsx)(o.default, {
                    premiumType: g,
                    titleText: S.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
                    subtitleText: S.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
                        subscriptionName: A
                    }),
                    footer: (0, r.jsxs)("div", {
                        className: E.whatYouLoseButtonContainer,
                        children: [(0, r.jsx)(l.Button, {
                            onClick: () => {
                                if (N) {
                                    let e = (0, m.getDefaultPlanOneStepCheckout)(_, I);
                                    C(e), t(p.Step.REVIEW)
                                } else t(p.Step.PLAN_SELECT)
                            },
                            children: S.default.Messages.CONTINUE
                        }), (0, r.jsx)(l.Button, {
                            look: l.Button.Looks.LINK,
                            color: (0, a.isThemeDark)(i) ? l.Button.Colors.WHITE : l.Button.Colors.PRIMARY,
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
                    return i
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
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
                    return i
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
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
            var r = n("37983");
            n("884691");
            var i = n("641078"),
                s = n("132554"),
                a = n("646718"),
                l = n("782340"),
                u = n("311050"),
                o = e => {
                    let {
                        isGift: t,
                        plan: n
                    } = e, o = (0, i.useIsEligibleForBogoPromotion)();
                    return t || (null == n ? void 0 : n.skuId) !== a.PremiumSubscriptionSKUs.TIER_2 || !o ? null : (0, r.jsx)(s.default, {
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
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                s = n("400307"),
                a = n("646718"),
                l = n("414539");

            function u(e) {
                let {
                    onClick: t,
                    isGift: n
                } = e;
                return (0, r.jsx)(i.Clickable, {
                    onClick: t,
                    style: {
                        cursor: "pointer"
                    },
                    children: (0, r.jsx)(s.Tier2Card, {
                        className: l.tier2MarketingCard,
                        ctaButton: null,
                        showWumpus: !0,
                        showYearlyPrice: !0,
                        isGift: n
                    })
                })
            }

            function o(e) {
                let {
                    onClick: t,
                    isGift: n
                } = e;
                return (0, r.jsx)(i.Clickable, {
                    onClick: t,
                    style: {
                        cursor: "pointer"
                    },
                    children: (0, r.jsx)(s.Tier0Card, {
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
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(u, {
                        onClick: () => t(a.PremiumSubscriptionSKUs.TIER_2),
                        isGift: n
                    }), (0, r.jsx)(o, {
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
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                s = n.n(i),
                a = n("77078"),
                l = n("978679"),
                u = n("265469");

            function o(e) {
                let {
                    className: t,
                    copy: n,
                    bannerImage: i,
                    textColor: o = "always-white"
                } = e;
                return (0, r.jsxs)("div", {
                    className: s(u.bannerContainer, t),
                    children: [null == i ? null : (0, r.jsx)("img", {
                        alt: "",
                        className: u.banner,
                        src: i
                    }), (0, r.jsxs)("div", {
                        className: u.textContainer,
                        children: [(0, r.jsx)(l.default, {
                            className: u.giftIcon
                        }), (0, r.jsx)(a.Heading, {
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
            var r = n("446674"),
                i = n("913144"),
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
            class d extends r.default.PersistedStore {
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
            var c = new d(i.default, {
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
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("926001"),
                a = n("75196"),
                l = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: s,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: s,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, s.SlashBoxIcon, void 0, {
                    size: 24
                })
        },
        95689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("578478"),
                a = n("75196"),
                l = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: s,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: s,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: i
                        })
                    })
                }, s.ImageIcon, void 0, {
                    size: 24
                })
        }
    }
]);