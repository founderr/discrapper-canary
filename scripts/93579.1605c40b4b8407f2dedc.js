(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["93579"], {
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
                    return a
                }
            });
            var i = n("872717"),
                r = n("913144"),
                s = n("843823"),
                l = n("49111");

            function a() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return s.default.needsRefresh() ? (r.default.dispatch({
                    type: "LOAD_USER_AFFINITIES"
                }), i.default.get({
                    url: l.Endpoints.USER_AFFINITIES,
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
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                s = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, s.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5ZM7.18016 15.8698C6.55491 15.8698 6.00152 15.7081 5.52001 15.3847C5.03849 15.0613 4.66478 14.6085 4.39887 14.0264C4.13296 13.4371 4 12.7615 4 11.9997C4 11.2451 4.14014 10.5767 4.42043 9.99461C4.7079 9.41248 5.12114 8.95612 5.66015 8.62553C6.20635 8.29494 6.85675 8.12964 7.61137 8.12964C8.25099 8.12964 8.82234 8.26619 9.32542 8.53929C9.83568 8.81239 10.2202 9.19688 10.4789 9.69277L9.26074 10.566C8.89421 9.89041 8.34802 9.55263 7.62215 9.55263C6.96096 9.55263 6.45429 9.76823 6.10214 10.1994C5.74999 10.6235 5.57391 11.2236 5.57391 11.9997C5.57391 12.7831 5.74999 13.3868 6.10214 13.8108C6.45429 14.2348 6.96096 14.4468 7.62215 14.4468C7.91681 14.4468 8.18631 14.3929 8.43066 14.2851C8.6822 14.1701 8.87625 14.0156 9.0128 13.8216V12.8945H7.29874V11.4931H10.5436V15.7189H9.27152L9.0667 15.0074C8.64267 15.5824 8.01383 15.8698 7.18016 15.8698ZM13.5198 15.7189H11.9459V8.28056H13.5198V15.7189ZM15.0304 15.7189H16.6043V12.8945H19.3641V11.4715H16.6043V9.70355H20.0001V8.28056H15.0304V15.7189Z",
                        fill: "string" == typeof l ? l : l.css,
                        className: a
                    })
                })
            }
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                s = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, s.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5ZM17.7863 5.37403C17.8815 5.20737 17.7612 5 17.5692 5H14.4352C14.1661 5 13.9176 5.14421 13.7841 5.3779L6.21373 18.626C6.1185 18.7926 6.23884 19 6.43079 19H9.56476C9.8339 19 10.0824 18.8558 10.2159 18.6221L17.7863 5.37403Z",
                        fill: "string" == typeof l ? l : l.css,
                        className: a
                    })
                })
            }
        },
        274800: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                queueInteractionComponentState: function() {
                    return l
                },
                addQueued: function() {
                    return a
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

            function l(e, t, n, i) {
                r.default.dispatch({
                    type: "QUEUE_INTERACTION_COMPONENT_STATE",
                    messageId: e,
                    nonce: t,
                    state: n,
                    indices: i
                })
            }

            function a(e, t) {
                let {
                    data: n,
                    messageId: i,
                    onCreate: s,
                    onSuccess: l,
                    onFailure: a
                } = t;
                r.default.dispatch({
                    type: "INTERACTION_QUEUE",
                    data: n,
                    nonce: e,
                    messageId: i,
                    onCreate: s,
                    onSuccess: l,
                    onFailure: a
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
                    return C
                },
                handleInteractionResponse: function() {
                    return T
                },
                InteractionStatusViewState: function() {
                    return i
                },
                getInteractionStatusViewState: function() {
                    return P
                },
                canRetryInteractionData: function() {
                    return A
                }
            }), n("222007");
            var i, r, s = n("249654"),
                l = n("872717"),
                a = n("913144"),
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
            let C = async e => {
                let {
                    componentType: t,
                    messageId: n,
                    messageFlags: i,
                    customId: r,
                    indices: a,
                    applicationId: u,
                    channelId: S,
                    guildId: m,
                    localState: I
                } = e, C = s.default.fromTimestamp(Date.now());
                if (!p.default.canQueueInteraction(n, C)) return;
                await d.default.unarchiveThreadIfNecessary(S), (0, f.addQueued)(C, {
                    messageId: n,
                    data: {
                        interactionType: o.InteractionTypes.MESSAGE_COMPONENT,
                        customId: r,
                        indices: a
                    },
                    onFailure: (e, t) => _(S, e, t)
                }), null != I && (0, f.queueInteractionComponentState)(n, C, I, a);
                let P = {
                    type: o.InteractionTypes.MESSAGE_COMPONENT,
                    nonce: C,
                    guild_id: m,
                    channel_id: S,
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
                await l.default.post({
                    url: E.Endpoints.INTERACTIONS,
                    body: P,
                    timeout: 3e3
                }, e => {
                    T(C, S, m, e)
                })
            }, _ = (e, t, n) => {
                null == n && null != t && u.default.sendClydeError(e, t)
            }, T = (e, t, n, i) => {
                if (!i.ok) {
                    if (!i.hasErr) {
                        var r;
                        if (i.status >= 400 && i.status < 500 && i.body) {
                            if (i.body.code === E.AbortCodes.INVALID_FORM_BODY && i.body.errors) {
                                let r = (0, m.getFirstSkemaError)(i.body.errors);
                                null != r && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === r.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === r.code) && a.default.dispatch({
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
            let P = (e, t) => {
                var n;
                let i = null == t ? void 0 : t.state,
                    r = e.state === E.MessageStates.SENT && I(e.id) < Date.now();
                let l = e.state === E.MessageStates.SEND_FAILED && (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : s.default.extractTimestamp(n) + 3e3) < Date.now(),
                    a = (null == t ? void 0 : t.data.interactionType) === o.InteractionTypes.APPLICATION_COMMAND,
                    u = e.isCommandType();
                if (a && i === S.InteractionState.QUEUED || u && e.state === E.MessageStates.SENDING && null != t) return 0;
                if (a && i === S.InteractionState.CREATED || e.hasFlag(E.MessageFlags.LOADING) && !r) return 1;
                if (null != e.interaction && e.hasFlag(E.MessageFlags.LOADING) && r) return 3;
                else if (null != e.interaction && !e.hasFlag(E.MessageFlags.LOADING) && l) return 3;
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
        307367: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var i = n("37983"),
                r = n("884691"),
                s = n("748820"),
                l = n("872717"),
                a = n("850068"),
                u = n("253981"),
                o = n("635357"),
                d = n("642906"),
                c = n("85336"),
                f = n("149833"),
                p = n("523591"),
                S = n("153727"),
                m = n("650484"),
                E = n("49111"),
                I = n("646718");

            function C(e) {
                let {
                    handleStepChange: t
                } = e, {
                    selectedPlan: n,
                    browserCheckoutState: C,
                    browserCheckoutStateLoadId: _,
                    contextMetadata: T
                } = (0, d.usePaymentContext)(), {
                    isGift: P
                } = (0, o.useGiftContext)(), [A, h] = r.useState(!1);
                return r.useEffect(() => {
                    var e;
                    !A && (h(!0), (0, a.startBrowserCheckout)(T.loadId), ! function(e, t, n, i) {
                        let r = E.Endpoints.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, n),
                            a = new URL(u.default.makeUrl(E.Routes.BILLING_LOGIN_HANDOFF)),
                            o = (0, s.v4)();
                        a.searchParams.append("handoff_key", o), a.searchParams.append("redirect_to", r), l.default.post({
                            url: E.Endpoints.HANDOFF,
                            body: {
                                key: o
                            },
                            oldFormErrors: !0
                        }).then(e => {
                            a.searchParams.append("handoff_token", e.body.handoff_token), window.open(a.href)
                        }, () => {
                            i()
                        })
                    }(null !== (e = null == n ? void 0 : n.id) && void 0 !== e ? e : I.SubscriptionPlans.PREMIUM_MONTH_TIER_2, P, T.loadId, () => t(c.Step.ADD_PAYMENT_STEPS)))
                }, [n, P, A, h, T, t]), r.useEffect(() => {
                    _ === T.loadId && C === p.BrowserCheckoutState.DONE && t(c.Step.CONFIRM)
                }, [C, _, T, t]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(S.default, {}), (0, i.jsx)(m.PaymentPortalBody, {
                        children: (0, i.jsx)(f.AwaitingBrowserCheckoutStepBody, {})
                    }), (0, i.jsx)(m.PaymentPortalFooter, {
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
                l = n("145131"),
                a = n("85336"),
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
                            justify: l.default.Justify.BETWEEN,
                            align: l.default.Align.CENTER,
                            children: [(0, i.jsx)(r.Button, {
                                color: r.Button.Colors.BRAND,
                                onClick: () => {
                                    t(a.Step.ADD_PAYMENT_STEPS)
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
                    return m
                }
            });
            var i = n("37983"),
                r = n("884691"),
                s = n("627445"),
                l = n.n(s),
                a = n("491523"),
                u = n("775155"),
                o = n("659632"),
                d = n("380186"),
                c = n("635357"),
                f = n("642906"),
                p = n("650484"),
                S = n("367767");

            function m(e) {
                var t, n;
                let s, {
                        handleClose: m,
                        planGroup: E,
                        onSubscriptionConfirmation: I,
                        renderPurchaseConfirmation: C,
                        postSuccessGuild: _,
                        followupSKUInfo: T
                    } = e,
                    {
                        activeSubscription: P,
                        paymentSources: A,
                        paymentSourceId: h,
                        selectedPlan: g,
                        selectedSkuId: N,
                        step: y,
                        updatedSubscription: x,
                        startingPremiumSubscriptionPlanIdRef: M
                    } = (0, f.usePaymentContext)(),
                    {
                        isGift: v,
                        giftRecipient: O,
                        giftCode: L,
                        hasSentMessage: R,
                        isSendingMessage: b,
                        sendGiftMessage: j
                    } = (0, c.useGiftContext)();
                l(null != g, "Expected plan to selected"), l(null != N, "Expected selectedSkuId"), l(null != y, "Step should be set");
                let U = r.useCallback(() => {
                    m(), null == I || I()
                }, [m, I]);
                return r.useEffect(() => {
                    if (!v || null == O || null == L || R || b || (0, o.shouldShowCustomGiftExperience)(O, !0, "PremiumPaymentConfirmStep")) return;
                    let e = a.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
                        location: "36b986_1"
                    }).enabled;
                    e && j({
                        onSubscriptionConfirmation: I
                    })
                }, [j, v, O, L, R, b, I]), s = null != C ? C(g, U, x) : v ? (0, i.jsx)(u.PremiumSubscriptionGiftPurchaseConfirmation, {
                    planId: g.id,
                    onClose: U
                }) : M.current === g.id ? (0, i.jsx)(u.default, {
                    planId: g.id,
                    postSuccessGuild: _,
                    onClose: U,
                    paymentSourceType: null === (t = A[null != h ? h : ""]) || void 0 === t ? void 0 : t.type
                }) : (0, i.jsx)(u.default, {
                    followupSKUInfo: T,
                    startingPremiumSubscriptionPlanId: M.current,
                    planId: g.id,
                    onClose: U,
                    isDowngrade: null != P && (0, d.subscriptionCanDowngrade)(P, g.id, E),
                    paymentSourceType: null === (n = A[null != h ? h : ""]) || void 0 === n ? void 0 : n.type
                }), (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)(p.PaymentPortalBody, {
                        children: [(0, i.jsx)(S.default, {}), s]
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
            var i = n("37983"),
                r = n("884691"),
                s = n("446674"),
                l = n("913144"),
                a = n("775433"),
                u = n("812204"),
                o = n("685665"),
                d = n("677156"),
                c = n("10514"),
                f = n("521012"),
                p = n("659632"),
                S = n("635357"),
                m = n("642906"),
                E = n("85336"),
                I = n("385179"),
                C = n("262683"),
                _ = n("946359"),
                T = n("307367"),
                P = n("724269"),
                A = n("99836"),
                h = n("263820"),
                g = n("992049"),
                N = n("176108"),
                y = n("97461"),
                x = n("403365"),
                M = n("498475"),
                v = n("254350"),
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
                    initialPlanId: C,
                    subscriptionTier: _,
                    onClose: T,
                    trialId: P,
                    trialFooterMessageOverride: A,
                    reviewWarningMessage: g,
                    openInvoiceId: N,
                    onSubscriptionConfirmation: y,
                    renderPurchaseConfirmation: x,
                    postSuccessGuild: M,
                    followupSKUInfo: v,
                    renderHeader: R,
                    applicationId: b,
                    guildId: j,
                    referralTrialOfferId: U,
                    skuId: k,
                    returnRef: D
                } = e, {
                    analyticsLocations: F
                } = (0, o.default)();
                r.useEffect(() => {
                    !c.default.isLoadedForPremiumSKUs() && l.default.wait(() => (0, a.fetchPremiumSubscriptionPlans)())
                }, []), h.default.getCurrentConfig({
                    location: "3a6d55_1"
                }, {
                    autoTrackExposure: !0
                });
                let {
                    step: w
                } = (0, m.usePaymentContext)(), {
                    isGift: G,
                    giftMessage: B,
                    giftRecipient: H
                } = (0, S.useGiftContext)(), W = G && (0, p.shouldShowCustomGiftExperience)(H, !0, "PremiumPaymentModal") && w === E.Step.PLAN_SELECT;
                return null != H && d.CustomGiftExperiment.getCurrentConfig({
                    location: "initialRelease_PremiumPaymentModal"
                }), (0, i.jsx)(I.PaymentModal, {
                    analyticsLocations: F,
                    analyticsLocation: t,
                    analyticsObject: n,
                    analyticsSourceLocation: s,
                    analyticsSubscriptionType: O.SubscriptionTypes.PREMIUM,
                    onComplete: u,
                    transitionState: f,
                    initialPlanId: C,
                    giftMessage: B,
                    subscriptionTier: _,
                    onClose: T,
                    trialId: P,
                    isGift: G,
                    trialFooterMessageOverride: A,
                    reviewWarningMessage: g,
                    planGroup: L.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                    openInvoiceId: N,
                    onSubscriptionConfirmation: y,
                    renderPurchaseConfirmation: x,
                    postSuccessGuild: M,
                    followupSKUInfo: v,
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
                } = (0, m.usePaymentContext)(), {
                    isGift: i
                } = (0, S.useGiftContext)();
                return (0, N.inOneStepSubscriptionCheckout)({
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
                    selectedSkuId: l
                } = (0, m.usePaymentContext)(), {
                    isGift: a
                } = (0, S.useGiftContext)(), u = (0, v.default)({
                    isGift: a,
                    skuId: l,
                    referralTrialOfferId: r
                }), o = U(u);
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(C.PaymentModalAddPaymentStep, {
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
                renderStep: e => (0, i.jsx)(y.PremiumPaymentPlanSelectStep, {
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
                renderStep: e => (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(k, {
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
                renderStep: e => (0, i.jsx)(T.default, {
                    ...e
                })
            }, {
                key: E.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                renderStep: () => (0, i.jsx)(P.default, {})
            }, {
                key: E.Step.AWAITING_AUTHENTICATION,
                renderStep: () => (0, i.jsx)(_.default, {})
            }, {
                key: E.Step.REVIEW,
                renderStep: e => (0, i.jsx)(A.PaymentModalReviewStep, {
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
                renderStep: e => (0, i.jsx)(g.PremiumPaymentConfirmStep, {
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
                        isGift: l,
                        giftRecipient: a,
                        giftMessage: d,
                        loadId: c,
                        defaultPlanId: p,
                        referralCode: E
                    } = e;
                if (null != r && !Object.values(L.PremiumSubscriptionSKUs).includes(r)) throw Error("subscriptionTier must be a premium subscription");
                return (0, i.jsx)(n, {
                    children: (0, i.jsx)(m.PaymentContextProvider, {
                        loadId: c,
                        activeSubscription: t,
                        stepConfigs: D,
                        skuIDs: [...L.ACTIVE_PREMIUM_SKUS],
                        isGift: l,
                        defaultPlanId: p,
                        referralCode: E,
                        children: (0, i.jsx)(S.GiftContextProvider, {
                            isGift: l,
                            giftRecipient: null == a ? void 0 : a,
                            giftMessage: d,
                            children: (0, i.jsx)(j, {
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
            var i = n("37983"),
                r = n("884691"),
                s = n("627445"),
                l = n.n(s),
                a = n("65597"),
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
                C = n("10514"),
                _ = n("145131"),
                T = n("659632"),
                P = n("701909"),
                A = n("719923"),
                h = n("635357"),
                g = n("642906"),
                N = n("85336"),
                y = n("153727"),
                x = n("628738"),
                M = n("650484"),
                v = n("310093"),
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
                } = (0, h.useGiftContext)(), $ = null != H ? W[H] : null, {
                    newPlans: ee
                } = d.default.useExperiment({
                    location: "d17fd6_3"
                }, {
                    autoTrackExposure: !1
                }), et = (0, a.default)([I.default], () => I.default.getCurrentUser()), en = !q && null != V && V === R.PremiumSubscriptionSKUs.TIER_2 && null != et && et.hasHadPremium() && B && null == G && (0, d.isPaymentSourceEligibleForMultiMonthPlans)($), ei = (0, S.usePremiumTrialOffer)(w), er = !q && null != ei && null != V && (0, R.SubscriptionTrials)[ei.trial_id].skus.includes(V), es = (0, p.usePremiumDiscountOffer)(), el = null == es ? void 0 : null === (t = es.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => R.SubscriptionPlanInfo[e].skuId === V), ea = !q && null != es && null != V && el, eu = null !== (n = er || ea) && void 0 !== n && n, {
                    defaultToMonthlyPlan: eo
                } = f.TrialRedemptionDefaultPlanExperiment.useExperiment({
                    location: "d17fd6_4"
                }, {
                    autoTrackExposure: !1
                }), ed = r.useMemo(() => (0, A.getPremiumPlanOptions)({
                    skuId: V,
                    isPremium: z,
                    multiMonthPlans: en ? ee : [],
                    currentSubscription: G,
                    isGift: q,
                    isEligibleForTrial: er,
                    defaultPlanId: Z,
                    defaultToMonthlyPlan: eo
                }), [V, z, ee, G, en, q, er, Z, eo]), ec = ea && ed.includes(R.SubscriptionPlans.PREMIUM_MONTH_TIER_2) ? R.SubscriptionPlans.PREMIUM_MONTH_TIER_2 : ed[0], ef = (0, a.default)([C.default], () => C.default.get(ec)), ep = [{
                    planId: null == ef ? void 0 : ef.id,
                    quantity: 1
                }], [eS, em] = r.useState(eu), [eE, eI] = (0, c.useSubscriptionInvoicePreview)({
                    items: ep,
                    renewal: !1,
                    preventFetch: !eu,
                    applyEntitlements: !0,
                    trialId: F,
                    paymentSourceId: Q.paymentSourceId,
                    currency: Q.currency
                });
                r.useEffect(() => {
                    eu && em((null == eE ? void 0 : eE.subscriptionPeriodEnd) == null)
                }, [eE, eu]), (0, o.default)("Payment Modal Plan Select Step", eS, 5, {
                    proratedInvoicePreview: eE,
                    proratedInvoiceError: eI,
                    isEligibleForOffer: eu
                }, {
                    tags: {
                        app_context: "billing"
                    }
                });
                let eC = null !== (s = null == eI ? void 0 : eI.message) && void 0 !== s ? s : b.default.Messages.ERROR_GENERIC_TITLE,
                    e_ = eu && null == eI,
                    eT = eu && null != eI;
                return e_ && (null == eE ? void 0 : eE.subscriptionPeriodEnd) == null ? (0, i.jsx)(x.default, {}) : (l(null != Y, "Step should be set"), l(ed.length > 0, "Premium plan options should be set"), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(v.GiftNote, {
                        giftMessage: J
                    }), !(q && (0, T.shouldShowCustomGiftExperience)(X, !0, "PremiumPaymentPlanSelectStep")) && (0, i.jsx)(y.default, {
                        isEligibleForTrial: er
                    }), (0, i.jsxs)(M.PaymentPortalBody, {
                        children: [e_ && (0, i.jsx)("hr", {
                            className: j.planSelectSeparatorUpper
                        }), (0, i.jsx)(m.default, {
                            isGift: q,
                            plan: K
                        }), (0, i.jsx)(O.default, {}), eT ? (0, i.jsx)(u.FormErrorBlock, {
                            children: eC
                        }) : (0, i.jsx)(E.PremiumSwitchPlanSelectBody, {
                            planOptions: ed,
                            eligibleForMultiMonthPlans: en,
                            referralTrialOfferId: w,
                            selectedPlanId: null == K ? void 0 : K.id,
                            subscriptionPeriodEnd: null == eE ? void 0 : eE.subscriptionPeriodEnd,
                            discountInvoiceItems: ea ? null == eE ? void 0 : eE.invoiceItems : void 0
                        }), e_ && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("hr", {
                                className: j.planSelectSeparatorLower
                            }), (0, i.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                children: b.default.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
                                    link: P.default.getArticleURL(L.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB)
                                })
                            })]
                        })]
                    }), (0, i.jsx)(M.PaymentPortalFooter, {
                        children: (0, i.jsx)(u.ModalFooter, {
                            justify: _.default.Justify.BETWEEN,
                            align: _.default.Align.CENTER,
                            children: (0, i.jsx)(E.PremiumSwitchPlanSelectFooter, {
                                onStepChange: U,
                                onBackClick: () => U(N.Step.SKU_SELECT),
                                showBackButton: null == k && null == D,
                                planOptions: ed,
                                shouldRenderUpdatedPaymentModal: e_,
                                isTrial: er
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
                l = n("279171"),
                a = n("49735"),
                u = n("719923"),
                o = n("635357"),
                d = n("642906"),
                c = n("85336"),
                f = n("176108"),
                p = n("254350"),
                S = n("646718"),
                m = n("782340"),
                E = n("600465");

            function I(e) {
                let {
                    handleStepChange: t,
                    handleClose: n,
                    referralTrialOfferId: r
                } = e, {
                    setSelectedSkuId: l,
                    activeSubscription: a,
                    startedPaymentFlowWithPaymentSourcesRef: m,
                    setSelectedPlanId: E
                } = (0, d.usePaymentContext)(), {
                    isGift: I
                } = (0, o.useGiftContext)(), _ = (0, s.usePremiumTrialOffer)(r);
                return (0, i.jsx)(C, {
                    selectSku: e => (function(e) {
                        let {
                            activeSubscription: t,
                            newSkuId: n,
                            setSelectedSkuId: i,
                            handleStepChange: r,
                            isGift: s,
                            userTrialOffer: l,
                            setSelectedPlanId: a,
                            startedPaymentFlowWithPaymentSources: o
                        } = e;
                        i(n);
                        let d = c.Step.PLAN_SELECT,
                            m = (0, u.getPremiumSkuIdForSubscription)(t);
                        (m === S.PremiumSubscriptionSKUs.TIER_1 || m === S.PremiumSubscriptionSKUs.TIER_2) && n === S.PremiumSubscriptionSKUs.TIER_0 && !s && (d = c.Step.WHAT_YOU_LOSE);
                        let E = (0, p.isInTrialRedemption)({
                                userTrialOffer: l,
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
                            a(e)
                        }
                        r(d, {
                            analyticsDataOverride: {
                                sku_id: n
                            }
                        })
                    })({
                        activeSubscription: a,
                        newSkuId: e,
                        setSelectedSkuId: l,
                        handleStepChange: t,
                        isGift: I,
                        userTrialOffer: _,
                        startedPaymentFlowWithPaymentSources: m.current,
                        setSelectedPlanId: E
                    }),
                    onClose: n,
                    isGift: I
                })
            }

            function C(e) {
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
                            children: m.default.Messages.BILLING_STEP_SELECT_PLAN
                        }), (0, i.jsx)(r.ModalCloseButton, {
                            onClick: n
                        })]
                    }), (0, i.jsxs)(r.ModalContent, {
                        className: E.skuSelectModalContent,
                        children: [(0, i.jsx)(l.default, {
                            fromBoostCancelModal: !1,
                            className: E.legacyPricingNotice
                        }), (0, i.jsx)(a.default, {
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
                l = n("819855"),
                a = n("77078"),
                u = n("841098"),
                o = n("360262"),
                d = n("719923"),
                c = n("635357"),
                f = n("642906"),
                p = n("85336"),
                S = n("176108"),
                m = n("782340"),
                E = n("943490");

            function I(e) {
                let {
                    handleStepChange: t,
                    handleClose: n
                } = e, r = (0, u.default)(), {
                    activeSubscription: I,
                    selectedSkuId: C,
                    setSelectedPlanId: _,
                    startedPaymentFlowWithPaymentSourcesRef: T
                } = (0, f.usePaymentContext)(), {
                    isGift: P
                } = (0, c.useGiftContext)(), A = null != I ? (0, d.getPremiumPlanItem)(I) : null, h = null != A ? (0, d.getDisplayPremiumType)(A.planId) : null, g = null != A ? (0, d.getPremiumType)(A.planId) : null, N = (0, S.inOneStepSubscriptionCheckout)({
                    isTrial: !1,
                    isGift: P,
                    selectedSkuId: C,
                    startedPaymentFlowWithPaymentSources: T.current
                });
                return s(null != g, "Expected premium type"), (0, i.jsx)(o.default, {
                    premiumType: g,
                    titleText: m.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
                    subtitleText: m.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
                        subscriptionName: h
                    }),
                    footer: (0, i.jsxs)("div", {
                        className: E.whatYouLoseButtonContainer,
                        children: [(0, i.jsx)(a.Button, {
                            onClick: () => {
                                if (N) {
                                    let e = (0, S.getDefaultPlanOneStepCheckout)(C, I);
                                    _(e), t(p.Step.REVIEW)
                                } else t(p.Step.PLAN_SELECT)
                            },
                            children: m.default.Messages.CONTINUE
                        }), (0, i.jsx)(a.Button, {
                            look: a.Button.Looks.LINK,
                            color: (0, l.isThemeDark)(r) ? a.Button.Colors.WHITE : a.Button.Colors.PRIMARY,
                            onClick: n,
                            children: m.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
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
                l = n("646718"),
                a = n("782340"),
                u = n("311050"),
                o = e => {
                    let {
                        isGift: t,
                        plan: n
                    } = e, o = (0, r.useIsEligibleForBogoPromotion)();
                    return t || (null == n ? void 0 : n.skuId) !== l.PremiumSubscriptionSKUs.TIER_2 || !o ? null : (0, i.jsx)(s.default, {
                        copy: a.default.Messages.BOGO_ANNOUNCEMENT_MODAL_UPGRADE_HEADER,
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
                l = n("646718"),
                a = n("414539");

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
                        className: a.tier2MarketingCard,
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
                return (0, i.jsx)(r.Clickable, {
                    onClick: t,
                    style: {
                        cursor: "pointer"
                    },
                    children: (0, i.jsx)(s.Tier0Card, {
                        className: a.tier0MarketingCard,
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
                        onClick: () => t(l.PremiumSubscriptionSKUs.TIER_2),
                        isGift: n
                    }), (0, i.jsx)(o, {
                        onClick: () => t(l.PremiumSubscriptionSKUs.TIER_0),
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
                l = n("77078"),
                a = n("978679"),
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
                        children: [(0, i.jsx)(a.default, {
                            className: u.giftIcon
                        }), (0, i.jsx)(l.Heading, {
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
            let l = !1,
                a = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                u = {
                    ...a
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
                    return l
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
                    u.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [], u.lastFetched = Date.now(), o(), l = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    l = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    l = !1
                },
                LOGOUT: function() {
                    u = {
                        ...a
                    }
                }
            })
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                s = n("926001"),
                l = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: s,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
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
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                s = n("578478"),
                l = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: s,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: s,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: r
                        })
                    })
                }, s.ImageIcon, void 0, {
                    size: 24
                })
        }
    }
]);