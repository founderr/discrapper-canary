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
                    return C
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
                S = n("3765"),
                m = n("606981"),
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
                    channelId: S,
                    guildId: m,
                    localState: I
                } = e, _ = s.default.fromTimestamp(Date.now());
                if (!p.default.canQueueInteraction(n, _)) return;
                await d.default.unarchiveThreadIfNecessary(S), (0, f.addQueued)(_, {
                    messageId: n,
                    data: {
                        interactionType: o.InteractionTypes.MESSAGE_COMPONENT,
                        customId: i,
                        indices: l
                    },
                    onFailure: (e, t) => T(S, e, t)
                }), null != I && (0, f.queueInteractionComponentState)(n, _, I, l);
                let P = {
                    type: o.InteractionTypes.MESSAGE_COMPONENT,
                    nonce: _,
                    guild_id: m,
                    channel_id: S,
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
                    C(_, S, m, e)
                })
            }, T = (e, t, n) => {
                null == n && null != t && u.default.sendClydeError(e, t)
            }, C = (e, t, n, r) => {
                if (!r.ok) {
                    if (!r.hasErr) {
                        var i;
                        if (r.status >= 400 && r.status < 500 && r.body) {
                            if (r.body.code === E.AbortCodes.INVALID_FORM_BODY && r.body.errors) {
                                let i = (0, m.getFirstSkemaError)(r.body.errors);
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
                if (l && r === S.InteractionState.QUEUED || u && e.state === E.MessageStates.SENDING && null != t) return 0;
                if (l && r === S.InteractionState.CREATED || e.hasFlag(E.MessageFlags.LOADING) && !i) return 1;
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
                    return I
                }
            }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var r = n("37983"),
                i = n("884691"),
                s = n("748820"),
                a = n("872717"),
                l = n("850068"),
                u = n("253981"),
                o = n("642906"),
                d = n("85336"),
                c = n("149833"),
                f = n("523591"),
                p = n("153727"),
                S = n("650484"),
                m = n("49111"),
                E = n("646718");

            function I(e) {
                let {
                    handleStepChange: t
                } = e, {
                    selectedPlan: n,
                    isGift: I,
                    browserCheckoutState: _,
                    browserCheckoutStateLoadId: T,
                    contextMetadata: C
                } = (0, o.usePaymentContext)(), [P, h] = i.useState(!1);
                return i.useEffect(() => {
                    var e;
                    !P && (h(!0), (0, l.startBrowserCheckout)(C.loadId), ! function(e, t, n, r) {
                        let i = m.Endpoints.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, n),
                            l = new URL(u.default.makeUrl(m.Routes.BILLING_LOGIN_HANDOFF)),
                            o = (0, s.v4)();
                        l.searchParams.append("handoff_key", o), l.searchParams.append("redirect_to", i), a.default.post({
                            url: m.Endpoints.HANDOFF,
                            body: {
                                key: o
                            },
                            oldFormErrors: !0
                        }).then(e => {
                            l.searchParams.append("handoff_token", e.body.handoff_token), window.open(l.href)
                        }, () => {
                            r()
                        })
                    }(null !== (e = null == n ? void 0 : n.id) && void 0 !== e ? e : E.SubscriptionPlans.PREMIUM_MONTH_TIER_2, I, C.loadId, () => t(d.Step.ADD_PAYMENT_STEPS)))
                }, [n, I, P, h, C, t]), i.useEffect(() => {
                    T === C.loadId && _ === f.BrowserCheckoutState.DONE && t(d.Step.CONFIRM)
                }, [_, T, C, t]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(p.default, {}), (0, r.jsx)(S.PaymentPortalBody, {
                        children: (0, r.jsx)(c.AwaitingBrowserCheckoutStepBody, {})
                    }), (0, r.jsx)(S.PaymentPortalFooter, {
                        children: (0, r.jsx)(c.AwaitingBrowserCheckoutStepFooter, {
                            onStepChange: t,
                            onBackClick: () => t(d.Step.PLAN_SELECT)
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
                    return m
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                s = n("627445"),
                a = n.n(s),
                l = n("210721"),
                u = n("491523"),
                o = n("775155"),
                d = n("659632"),
                c = n("380186"),
                f = n("642906"),
                p = n("650484"),
                S = n("367767");

            function m(e) {
                var t, n;
                let s, {
                        handleClose: m,
                        planGroup: E,
                        onSubscriptionConfirmation: I,
                        renderPurchaseConfirmation: _,
                        postSuccessGuild: T,
                        followupSKUInfo: C
                    } = e,
                    {
                        activeSubscription: P,
                        isGift: h,
                        paymentSources: A,
                        paymentSourceId: g,
                        selectedPlan: N,
                        selectedSkuId: y,
                        step: x,
                        updatedSubscription: M,
                        selectedGiftStyle: v,
                        startingPremiumSubscriptionPlanIdRef: O
                    } = (0, f.usePaymentContext)();
                a(null != N, "Expected plan to selected"), a(null != y, "Expected selectedSkuId"), a(null != x, "Step should be set");
                let L = i.useCallback(() => {
                        m(), null == I || I()
                    }, [m, I]),
                    {
                        giftRecipient: R
                    } = (0, f.usePaymentContext)(),
                    b = (0, d.useGetGiftCode)(y, h),
                    [j, U] = i.useState(!1),
                    [k, D] = i.useState(!1),
                    [F, w] = i.useState();
                return i.useEffect(() => {
                    if (!h || null == R || null == b || j || k || (0, d.shouldShowCustomGiftExperience)(R, !0, "PremiumPaymentConfirmStep")) return;
                    let e = u.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
                        location: "36b986_1"
                    }).enabled;
                    e && (D(!0), (0, l.sendGiftMessage)(R, b).then(() => {
                        D(!1), null == I || I(), U(!0)
                    }).catch(e => {
                        D(!1), w(e), U(!0)
                    }))
                }, [h, R, b, j, U, D, k, w, I]), s = null != _ ? _(N, L, M) : h ? (0, r.jsx)(o.PremiumSubscriptionGiftPurchaseConfirmation, {
                    planId: N.id,
                    selectedGiftStyle: v,
                    onClose: L,
                    hasSentMessage: j,
                    giftMessageError: F,
                    isSendingMessage: k
                }) : O.current === N.id ? (0, r.jsx)(o.default, {
                    planId: N.id,
                    postSuccessGuild: T,
                    onClose: L,
                    paymentSourceType: null === (t = A[null != g ? g : ""]) || void 0 === t ? void 0 : t.type
                }) : (0, r.jsx)(o.default, {
                    followupSKUInfo: C,
                    startingPremiumSubscriptionPlanId: O.current,
                    planId: N.id,
                    onClose: L,
                    isDowngrade: null != P && (0, c.subscriptionCanDowngrade)(P, N.id, E),
                    paymentSourceType: null === (n = A[null != g ? g : ""]) || void 0 === n ? void 0 : n.type
                }), (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)(p.PaymentPortalBody, {
                        children: [(0, r.jsx)(S.default, {}), s]
                    })
                })
            }
        },
        646139: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentModal: function() {
                    return b
                },
                STEPS: function() {
                    return k
                },
                default: function() {
                    return D
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
                S = n("642906"),
                m = n("85336"),
                E = n("385179"),
                I = n("262683"),
                _ = n("946359"),
                T = n("307367"),
                C = n("724269"),
                P = n("99836"),
                h = n("263820"),
                A = n("992049"),
                g = n("176108"),
                N = n("97461"),
                y = n("403365"),
                x = n("498475"),
                M = n("254350"),
                v = n("49111"),
                O = n("646718"),
                L = n("782340");
            let R = [m.Step.PLAN_SELECT, m.Step.ADD_PAYMENT_STEPS, m.Step.REVIEW, m.Step.CONFIRM];

            function b(e) {
                let {
                    analyticsLocation: t,
                    analyticsObject: n,
                    analyticsSourceLocation: s,
                    onComplete: u,
                    transitionState: f,
                    initialPlanId: I,
                    giftMessage: _,
                    subscriptionTier: T,
                    onClose: C,
                    trialId: P,
                    isGift: A = !1,
                    trialFooterMessageOverride: g,
                    reviewWarningMessage: N,
                    openInvoiceId: y,
                    onSubscriptionConfirmation: x,
                    renderPurchaseConfirmation: M,
                    postSuccessGuild: L,
                    followupSKUInfo: R,
                    renderHeader: b,
                    applicationId: j,
                    guildId: U,
                    referralTrialOfferId: k,
                    skuId: D,
                    returnRef: F
                } = e, {
                    analyticsLocations: w
                } = (0, o.default)();
                i.useEffect(() => {
                    !c.default.isLoadedForPremiumSKUs() && a.default.wait(() => (0, l.fetchPremiumSubscriptionPlans)())
                }, []), h.default.getCurrentConfig({
                    location: "3a6d55_1"
                }, {
                    autoTrackExposure: !0
                });
                let {
                    giftRecipient: G,
                    step: B
                } = (0, S.usePaymentContext)(), H = A && (0, p.shouldShowCustomGiftExperience)(G, !0, "PremiumPaymentModal") && B === m.Step.PLAN_SELECT;
                return null != G && d.CustomGiftExperiment.getCurrentConfig({
                    location: "initialRelease_PremiumPaymentModal"
                }), (0, r.jsx)(E.PaymentModal, {
                    analyticsLocations: w,
                    analyticsLocation: t,
                    analyticsObject: n,
                    analyticsSourceLocation: s,
                    analyticsSubscriptionType: v.SubscriptionTypes.PREMIUM,
                    onComplete: u,
                    transitionState: f,
                    initialPlanId: I,
                    giftMessage: _,
                    subscriptionTier: T,
                    onClose: C,
                    trialId: P,
                    isGift: A,
                    trialFooterMessageOverride: g,
                    reviewWarningMessage: N,
                    planGroup: O.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                    openInvoiceId: y,
                    onSubscriptionConfirmation: x,
                    renderPurchaseConfirmation: M,
                    postSuccessGuild: L,
                    followupSKUInfo: R,
                    renderHeader: b,
                    applicationId: j,
                    guildId: U,
                    referralTrialOfferId: k,
                    skuId: D,
                    shakeWhilePurchasing: !0,
                    isLargeModal: H,
                    returnRef: F
                })
            }

            function j(e) {
                let {
                    startedPaymentFlowWithPaymentSourcesRef: t,
                    isGift: n,
                    selectedSkuId: r
                } = (0, S.usePaymentContext)();
                return (0, g.inOneStepSubscriptionCheckout)({
                    isTrial: null != e && e,
                    isGift: n,
                    selectedSkuId: r,
                    startedPaymentFlowWithPaymentSources: t.current
                })
            }

            function U(e) {
                let {
                    initialPlanId: t,
                    handleStepChange: n,
                    referralTrialOfferId: i
                } = e, {
                    paymentSources: s,
                    selectedSkuId: a,
                    isGift: l
                } = (0, S.usePaymentContext)(), u = (0, M.default)({
                    isGift: l,
                    skuId: a,
                    referralTrialOfferId: i
                }), o = j(u);
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(I.PaymentModalAddPaymentStep, {
                        ...e,
                        breadcrumbSteps: R,
                        onReturn: () => {
                            let e = Object.values(s).length < 1 && null == t ? m.Step.PLAN_SELECT : m.Step.REVIEW;
                            o && (e = m.Step.REVIEW), n(e, {
                                trackedFromStep: m.Step.PAYMENT_TYPE
                            })
                        }
                    })
                })
            }
            let k = [{
                key: null,
                renderStep: e => (0, r.jsx)(E.PaymentPredicateStep, {
                    ...e
                })
            }, {
                key: m.Step.SKU_SELECT,
                renderStep: e => (0, r.jsx)(y.PremiumPaymentSKUSelectStep, {
                    ...e
                }),
                options: {
                    renderHeader: !1,
                    hideSlider: !0
                }
            }, {
                key: m.Step.WHAT_YOU_LOSE,
                renderStep: e => (0, r.jsx)(x.PremiumPaymentWhatYouLoseStep, {
                    ...e
                }),
                options: {
                    renderHeader: !1,
                    hideSlider: !0
                }
            }, {
                key: m.Step.PLAN_SELECT,
                renderStep: e => (0, r.jsx)(N.PremiumPaymentPlanSelectStep, {
                    ...e
                }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: e => {
                        let t = j(e);
                        return t ? null : L.default.Messages.BILLING_STEP_SELECT_PLAN
                    }
                }
            }, {
                key: m.Step.ADD_PAYMENT_STEPS,
                renderStep: e => (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(U, {
                        ...e
                    })
                }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: e => {
                        let t = j(e);
                        return t ? null : L.default.Messages.BILLING_STEP_PAYMENT
                    }
                }
            }, {
                key: m.Step.AWAITING_BROWSER_CHECKOUT,
                renderStep: e => (0, r.jsx)(T.default, {
                    ...e
                })
            }, {
                key: m.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                renderStep: () => (0, r.jsx)(C.default, {})
            }, {
                key: m.Step.AWAITING_AUTHENTICATION,
                renderStep: () => (0, r.jsx)(_.default, {})
            }, {
                key: m.Step.REVIEW,
                renderStep: e => (0, r.jsx)(P.PaymentModalReviewStep, {
                    ...e
                }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: e => {
                        let t = j(e);
                        return t ? L.default.Messages.BILLING_STEP_PLAN_AND_PAYMENT : L.default.Messages.BILLING_STEP_REVIEW
                    }
                }
            }, {
                key: m.Step.CONFIRM,
                renderStep: e => (0, r.jsx)(A.PremiumPaymentConfirmStep, {
                    ...e
                })
            }];

            function D(e) {
                let t = (0, s.useStateFromStores)([f.default], () => f.default.getPremiumTypeSubscription()),
                    {
                        AnalyticsLocationProvider: n
                    } = (0, o.default)(e.analyticsLocations, u.default.PREMIUM_PAYMENT_MODAL),
                    {
                        subscriptionTier: i,
                        isGift: a,
                        giftRecipient: l,
                        loadId: d,
                        defaultPlanId: c,
                        referralCode: p
                    } = e;
                if (null != i && !Object.values(O.PremiumSubscriptionSKUs).includes(i)) throw Error("subscriptionTier must be a premium subscription");
                return (0, r.jsx)(n, {
                    children: (0, r.jsx)(S.PaymentContextProvider, {
                        loadId: d,
                        activeSubscription: t,
                        stepConfigs: k,
                        skuIDs: [...O.ACTIVE_PREMIUM_SKUS],
                        isGift: a,
                        defaultPlanId: c,
                        referralCode: p,
                        giftRecipient: null == l ? void 0 : l,
                        children: (0, r.jsx)(b, {
                            ...e
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
                S = n("917247"),
                m = n("358821"),
                E = n("570727"),
                I = n("697218"),
                _ = n("10514"),
                T = n("145131"),
                C = n("659632"),
                P = n("701909"),
                h = n("719923"),
                A = n("642906"),
                g = n("85336"),
                N = n("153727"),
                y = n("628738"),
                x = n("650484"),
                M = n("310093"),
                v = n("367767"),
                O = n("49111"),
                L = n("646718"),
                R = n("782340"),
                b = n("424650");

            function j(e) {
                var t, n, s;
                let {
                    giftMessage: j,
                    handleStepChange: U,
                    initialPlanId: k,
                    subscriptionTier: D,
                    trialId: F,
                    referralTrialOfferId: w,
                    customGiftMessage: G,
                    emojiConfetti: B,
                    soundEffect: H,
                    setCustomGiftMessage: W,
                    setEmojiConfetti: V,
                    setSoundEffect: K
                } = e, {
                    activeSubscription: Y,
                    hasFetchedSubscriptions: Z,
                    isGift: Q,
                    paymentSourceId: q,
                    paymentSources: X,
                    selectedSkuId: z,
                    selectedPlan: J,
                    step: $,
                    defaultPlanId: ee,
                    priceOptions: et,
                    isPremium: en,
                    selectedGiftStyle: er,
                    setSelectedGiftStyle: ei,
                    giftRecipient: es
                } = (0, A.usePaymentContext)(), ea = null != q ? X[q] : null, {
                    newPlans: el
                } = d.default.useExperiment({
                    location: "d17fd6_3"
                }, {
                    autoTrackExposure: !1
                }), eu = (0, l.default)([I.default], () => I.default.getCurrentUser()), eo = !Q && null != z && z === L.PremiumSubscriptionSKUs.TIER_2 && null != eu && eu.hasHadPremium() && Z && null == Y && (0, d.isPaymentSourceEligibleForMultiMonthPlans)(ea), ed = (0, S.usePremiumTrialOffer)(w), ec = !Q && null != ed && null != z && (0, L.SubscriptionTrials)[ed.trial_id].skus.includes(z), ef = (0, p.usePremiumDiscountOffer)(), ep = null == ef ? void 0 : null === (t = ef.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => L.SubscriptionPlanInfo[e].skuId === z), eS = !Q && null != ef && null != z && ep, em = null !== (n = ec || eS) && void 0 !== n && n, {
                    defaultToMonthlyPlan: eE
                } = f.TrialRedemptionDefaultPlanExperiment.useExperiment({
                    location: "d17fd6_4"
                }, {
                    autoTrackExposure: !1
                }), eI = i.useMemo(() => (0, h.getPremiumPlanOptions)({
                    skuId: z,
                    isPremium: en,
                    multiMonthPlans: eo ? el : [],
                    currentSubscription: Y,
                    isGift: Q,
                    isEligibleForTrial: ec,
                    defaultPlanId: ee,
                    defaultToMonthlyPlan: eE
                }), [z, en, el, Y, eo, Q, ec, ee, eE]), e_ = eS && eI.includes(L.SubscriptionPlans.PREMIUM_MONTH_TIER_2) ? L.SubscriptionPlans.PREMIUM_MONTH_TIER_2 : eI[0], eT = (0, l.default)([_.default], () => _.default.get(e_)), eC = [{
                    planId: null == eT ? void 0 : eT.id,
                    quantity: 1
                }], [eP, eh] = i.useState(em), [eA, eg] = (0, c.useSubscriptionInvoicePreview)({
                    items: eC,
                    renewal: !1,
                    preventFetch: !em,
                    applyEntitlements: !0,
                    trialId: F,
                    paymentSourceId: et.paymentSourceId,
                    currency: et.currency
                });
                i.useEffect(() => {
                    em && eh((null == eA ? void 0 : eA.subscriptionPeriodEnd) == null)
                }, [eA, em]), (0, o.default)("Payment Modal Plan Select Step", eP, 5, {
                    proratedInvoicePreview: eA,
                    proratedInvoiceError: eg,
                    isEligibleForOffer: em
                }, {
                    tags: {
                        app_context: "billing"
                    }
                });
                let eN = null !== (s = null == eg ? void 0 : eg.message) && void 0 !== s ? s : R.default.Messages.ERROR_GENERIC_TITLE,
                    ey = em && null == eg,
                    ex = em && null != eg;
                return ey && (null == eA ? void 0 : eA.subscriptionPeriodEnd) == null ? (0, r.jsx)(y.default, {}) : (a(null != $, "Step should be set"), a(eI.length > 0, "Premium plan options should be set"), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(M.GiftNote, {
                        giftMessage: j
                    }), !(Q && (0, C.shouldShowCustomGiftExperience)(es, !0, "PremiumPaymentPlanSelectStep")) && (0, r.jsx)(N.default, {
                        isEligibleForTrial: ec
                    }), (0, r.jsxs)(x.PaymentPortalBody, {
                        children: [ey && (0, r.jsx)("hr", {
                            className: b.planSelectSeparatorUpper
                        }), (0, r.jsx)(m.default, {
                            isGift: Q,
                            plan: J
                        }), (0, r.jsx)(v.default, {}), ex ? (0, r.jsx)(u.FormErrorBlock, {
                            children: eN
                        }) : (0, r.jsx)(E.PremiumSwitchPlanSelectBody, {
                            isGift: Q,
                            selectedGiftStyle: er,
                            setSelectedGiftStyle: ei,
                            planOptions: eI,
                            eligibleForMultiMonthPlans: eo,
                            referralTrialOfferId: w,
                            selectedPlanId: null == J ? void 0 : J.id,
                            subscriptionPeriodEnd: null == eA ? void 0 : eA.subscriptionPeriodEnd,
                            customGiftMessage: G,
                            emojiConfetti: B,
                            soundEffect: H,
                            setCustomGiftMessage: W,
                            setEmojiConfetti: V,
                            setSoundEffect: K,
                            discountInvoiceItems: eS ? null == eA ? void 0 : eA.invoiceItems : void 0
                        }), ey && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("hr", {
                                className: b.planSelectSeparatorLower
                            }), (0, r.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                children: R.default.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
                                    link: P.default.getArticleURL(O.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB)
                                })
                            })]
                        })]
                    }), (0, r.jsx)(x.PaymentPortalFooter, {
                        children: (0, r.jsx)(u.ModalFooter, {
                            justify: T.default.Justify.BETWEEN,
                            align: T.default.Align.CENTER,
                            children: (0, r.jsx)(E.PremiumSwitchPlanSelectFooter, {
                                onStepChange: U,
                                isGift: Q,
                                onBackClick: () => U(g.Step.SKU_SELECT),
                                showBackButton: null == k && null == D,
                                planOptions: eI,
                                shouldRenderUpdatedPaymentModal: ey,
                                isTrial: ec
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
                    return E
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                s = n("917247"),
                a = n("279171"),
                l = n("49735"),
                u = n("719923"),
                o = n("642906"),
                d = n("85336"),
                c = n("176108"),
                f = n("254350"),
                p = n("646718"),
                S = n("782340"),
                m = n("600465");

            function E(e) {
                let {
                    handleStepChange: t,
                    handleClose: n,
                    referralTrialOfferId: i
                } = e, {
                    setSelectedSkuId: a,
                    activeSubscription: l,
                    isGift: S,
                    startedPaymentFlowWithPaymentSourcesRef: m,
                    setSelectedPlanId: E
                } = (0, o.usePaymentContext)(), _ = (0, s.usePremiumTrialOffer)(i);
                return (0, r.jsx)(I, {
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
                        let S = d.Step.PLAN_SELECT,
                            m = (0, u.getPremiumSkuIdForSubscription)(t);
                        (m === p.PremiumSubscriptionSKUs.TIER_1 || m === p.PremiumSubscriptionSKUs.TIER_2) && n === p.PremiumSubscriptionSKUs.TIER_0 && !s && (S = d.Step.WHAT_YOU_LOSE);
                        let E = (0, f.isInTrialRedemption)({
                                userTrialOffer: a,
                                isGift: s,
                                skuId: n
                            }),
                            I = (0, c.inOneStepSubscriptionCheckout)({
                                isTrial: E,
                                isGift: s,
                                selectedSkuId: n,
                                startedPaymentFlowWithPaymentSources: o
                            });
                        if (S !== d.Step.WHAT_YOU_LOSE && I) {
                            S = d.Step.REVIEW;
                            let e = (0, c.getDefaultPlanOneStepCheckout)(n, t);
                            l(e)
                        }
                        i(S, {
                            analyticsDataOverride: {
                                sku_id: n
                            }
                        })
                    })({
                        activeSubscription: l,
                        newSkuId: e,
                        setSelectedSkuId: a,
                        handleStepChange: t,
                        isGift: S,
                        userTrialOffer: _,
                        startedPaymentFlowWithPaymentSources: m.current,
                        setSelectedPlanId: E
                    }),
                    onClose: n,
                    isGift: S
                })
            }

            function I(e) {
                let {
                    selectSku: t,
                    onClose: n,
                    isGift: s
                } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(i.ModalHeader, {
                        className: m.skuSelectModalHeader,
                        separator: !1,
                        children: [(0, r.jsx)(i.FormTitle, {
                            tag: i.FormTitleTags.H4,
                            children: S.default.Messages.BILLING_STEP_SELECT_PLAN
                        }), (0, r.jsx)(i.ModalCloseButton, {
                            onClick: n
                        })]
                    }), (0, r.jsxs)(i.ModalContent, {
                        className: m.skuSelectModalContent,
                        children: [(0, r.jsx)(a.default, {
                            fromBoostCancelModal: !1,
                            className: m.legacyPricingNotice
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
                    return E
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
                c = n("642906"),
                f = n("85336"),
                p = n("176108"),
                S = n("782340"),
                m = n("943490");

            function E(e) {
                let {
                    handleStepChange: t,
                    handleClose: n
                } = e, i = (0, u.default)(), {
                    activeSubscription: E,
                    selectedSkuId: I,
                    setSelectedPlanId: _,
                    isGift: T,
                    startedPaymentFlowWithPaymentSourcesRef: C
                } = (0, c.usePaymentContext)(), P = null != E ? (0, d.getPremiumPlanItem)(E) : null, h = null != P ? (0, d.getDisplayPremiumType)(P.planId) : null, A = null != P ? (0, d.getPremiumType)(P.planId) : null, g = (0, p.inOneStepSubscriptionCheckout)({
                    isTrial: !1,
                    isGift: T,
                    selectedSkuId: I,
                    startedPaymentFlowWithPaymentSources: C.current
                });
                return s(null != A, "Expected premium type"), (0, r.jsx)(o.default, {
                    premiumType: A,
                    titleText: S.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
                    subtitleText: S.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
                        subscriptionName: h
                    }),
                    footer: (0, r.jsxs)("div", {
                        className: m.whatYouLoseButtonContainer,
                        children: [(0, r.jsx)(l.Button, {
                            onClick: () => {
                                if (g) {
                                    let e = (0, p.getDefaultPlanOneStepCheckout)(I, E);
                                    _(e), t(f.Step.REVIEW)
                                } else t(f.Step.PLAN_SELECT)
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
                }, s.SlashBoxIcon)
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
                }, s.ImageIcon)
        }
    }
]);