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
                    return a
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("843823"),
                s = n("49111");

            function a() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return l.default.needsRefresh() ? (r.default.dispatch({
                    type: "LOAD_USER_AFFINITIES"
                }), i.default.get({
                    url: s.Endpoints.USER_AFFINITIES,
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
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87a2.9 2.9 0 0 1-1.66-.49 3.18 3.18 0 0 1-1.12-1.35A4.88 4.88 0 0 1 4 12c0-.75.14-1.42.42-2 .29-.59.7-1.04 1.24-1.37a3.7 3.7 0 0 1 1.95-.5c.64 0 1.21.14 1.72.4.5.28.89.67 1.15 1.16l-1.22.88a1.76 1.76 0 0 0-1.64-1.02c-.66 0-1.17.22-1.52.65a2.74 2.74 0 0 0-.53 1.8c0 .78.18 1.39.53 1.81.35.42.86.64 1.52.64.3 0 .57-.06.81-.16.25-.12.45-.27.58-.47v-.93H7.3v-1.4h3.24v4.23H9.27l-.2-.71c-.43.57-1.06.86-1.89.86Zm6.34-.15h-1.57V8.28h1.57v7.44Zm1.51 0h1.57v-2.83h2.76v-1.42H16.6V9.7H20V8.28h-4.97v7.44Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.79 3.37a.25.25 0 0 0-.22-.37h-3.13a.75.75 0 0 0-.66.38L6.21 18.63c-.1.16.03.37.22.37h3.13c.27 0 .52-.14.66-.38l7.57-13.25Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        837148: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-12_collectibles_gifting_dm_entrypoint",
                label: "Collectibles Gifting From DM's",
                defaultConfig: {
                    confirmUpsellEnabled: !1,
                    successUpsellEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Collectibles Gifting From DM's Enabled With Success Step Upsell",
                    config: {
                        confirmUpsellEnabled: !1,
                        successUpsellEnabled: !0
                    }
                }, {
                    id: 2,
                    label: "Collectibles Gifting from DM's Enabled With Confirm Step Upsell",
                    config: {
                        confirmUpsellEnabled: !0,
                        successUpsellEnabled: !1
                    }
                }, {
                    id: 100,
                    label: "Collectibles Gifting from DM's Enabled With All Upsells",
                    config: {
                        confirmUpsellEnabled: !0,
                        successUpsellEnabled: !0
                    }
                }]
            });
            var l = e => {
                let {
                    location: t,
                    autoTrackExposure: n = !0,
                    trackExposureOptions: i = {}
                } = e;
                return r.useExperiment({
                    location: t
                }, {
                    autoTrackExposure: n,
                    trackExposureOptions: i
                })
            }
        },
        274800: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                queueInteractionComponentState: function() {
                    return s
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
                l = n("49111");

            function s(e, t, n, i) {
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
                    onCreate: l,
                    onSuccess: s,
                    onFailure: a
                } = t;
                r.default.dispatch({
                    type: "INTERACTION_QUEUE",
                    data: n,
                    nonce: e,
                    messageId: i,
                    onCreate: l,
                    onSuccess: s,
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
                    url: l.Endpoints.MESSAGE_INTERACTION_DATA(e, t),
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
                    return T
                },
                InteractionStatusViewState: function() {
                    return i
                },
                getInteractionStatusViewState: function() {
                    return P
                },
                canRetryInteractionData: function() {
                    return h
                }
            }), n("222007");
            var i, r, l = n("249654"),
                s = n("872717"),
                a = n("913144"),
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
                return null == e || "" === e || Number.isNaN(e) ? Date.now() : l.default.extractTimestamp(e) + 9e5
            }
            let _ = async e => {
                let {
                    componentType: t,
                    messageId: n,
                    messageFlags: i,
                    customId: r,
                    indices: a,
                    applicationId: u,
                    channelId: m,
                    guildId: S,
                    localState: I
                } = e, _ = l.default.fromTimestamp(Date.now());
                if (!p.default.canQueueInteraction(n, _)) return;
                await d.default.unarchiveThreadIfNecessary(m), (0, f.addQueued)(_, {
                    messageId: n,
                    data: {
                        interactionType: o.InteractionTypes.MESSAGE_COMPONENT,
                        customId: r,
                        indices: a
                    },
                    onFailure: (e, t) => C(m, e, t)
                }), null != I && (0, f.queueInteractionComponentState)(n, _, I, a);
                let P = {
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
                await s.default.post({
                    url: E.Endpoints.INTERACTIONS,
                    body: P,
                    timeout: 3e3
                }, e => {
                    T(_, m, S, e)
                })
            }, C = (e, t, n) => {
                null == n && null != t && u.default.sendClydeError(e, t)
            }, T = (e, t, n, i) => {
                if (!i.ok) {
                    if (!i.hasErr) {
                        var r;
                        if (i.status >= 400 && i.status < 500 && i.body) {
                            if (i.body.code === E.AbortCodes.INVALID_FORM_BODY && i.body.errors) {
                                let r = (0, S.getFirstSkemaError)(i.body.errors);
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
                let s = e.state === E.MessageStates.SEND_FAILED && (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : l.default.extractTimestamp(n) + 3e3) < Date.now(),
                    a = (null == t ? void 0 : t.data.interactionType) === o.InteractionTypes.APPLICATION_COMMAND,
                    u = e.isCommandType();
                if (a && i === m.InteractionState.QUEUED || u && e.state === E.MessageStates.SENDING && null != t) return 0;
                if (a && i === m.InteractionState.CREATED || e.hasFlag(E.MessageFlags.LOADING) && !r) return 1;
                if (null != e.interaction && e.hasFlag(E.MessageFlags.LOADING) && r) return 3;
                else if (null != e.interaction && !e.hasFlag(E.MessageFlags.LOADING) && s) return 3;
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
                    return r
                }
            }), n("222007");
            let i = "_errors";

            function r(e) {
                return function e(t, n) {
                    let r = t[i];
                    if (null != r && Array.isArray(r)) return r[0];
                    for (let [r, l] of Object.entries(t))
                        if (r !== i && null != l && "object" == typeof l) return e(l, null != n ? n : r);
                    return null
                }(e, void 0)
            }
        },
        236838: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("301165"),
                l = n("65597"),
                s = n("77078"),
                a = n("206230"),
                u = n("812204"),
                o = n("685665"),
                d = n("21526"),
                c = n("782340"),
                f = n("526380"),
                p = n("34125"),
                m = e => {
                    let {
                        onClose: t
                    } = e, {
                        analyticsLocations: n
                    } = (0, o.default)(), m = (0, l.default)([a.default], () => a.default.useReducedMotion), S = (0, r.useSpring)({
                        immediate: m,
                        delay: 800,
                        from: {
                            transform: "translate(0, -100%)"
                        },
                        to: {
                            transform: "translate(0, 0)"
                        }
                    }), E = () => {
                        t(), (0, d.openCollectiblesShop)({
                            analyticsSource: u.default.PREMIUM_PAYMENT_MODAL,
                            analyticsLocations: n
                        })
                    };
                    return (0, i.jsxs)(r.animated.div, {
                        style: S,
                        className: f.container,
                        children: [(0, i.jsx)("img", {
                            className: f.image,
                            src: p,
                            alt: ""
                        }), (0, i.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "header-primary",
                            children: c.default.Messages.COLLECTIBLES_GIFT_CODE_MODAL_UPSELL.format({
                                checkItOut: e => (0, i.jsx)(s.Clickable, {
                                    className: f.link,
                                    onClick: E,
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
                l = n("748820"),
                s = n("872717"),
                a = n("850068"),
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
                } = (0, o.useGiftContext)(), [h, g] = r.useState(!1);
                return r.useEffect(() => {
                    var e;
                    !h && (g(!0), (0, a.startBrowserCheckout)(T.loadId), ! function(e, t, n, i) {
                        let r = E.Endpoints.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, n),
                            a = new URL(u.default.makeUrl(E.Routes.BILLING_LOGIN_HANDOFF)),
                            o = (0, l.v4)();
                        a.searchParams.append("handoff_key", o), a.searchParams.append("redirect_to", r), s.default.post({
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
                }, [n, P, h, g, T, t]), r.useEffect(() => {
                    C === T.loadId && _ === p.BrowserCheckoutState.DONE && t(c.Step.CONFIRM)
                }, [_, C, T, t]), (0, i.jsxs)(i.Fragment, {
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
                    return l
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
            var l = r
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
                l = n("177998"),
                s = n("145131"),
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
                            justify: s.default.Justify.BETWEEN,
                            align: s.default.Align.CENTER,
                            children: [(0, i.jsx)(r.Button, {
                                color: r.Button.Colors.BRAND,
                                onClick: () => {
                                    t(a.Step.ADD_PAYMENT_STEPS)
                                },
                                children: u.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_NEXT_BUTTON
                            }), (0, i.jsx)(l.default, {
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
                l = n("627445"),
                s = n.n(l),
                a = n("837148"),
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
                let l, {
                        handleClose: I,
                        planGroup: _,
                        onSubscriptionConfirmation: C,
                        renderPurchaseConfirmation: T,
                        postSuccessGuild: P,
                        followupSKUInfo: h
                    } = e,
                    {
                        activeSubscription: g,
                        paymentSources: A,
                        paymentSourceId: N,
                        selectedPlan: y,
                        selectedSkuId: x,
                        step: M,
                        updatedSubscription: v,
                        startingPremiumSubscriptionPlanIdRef: L
                    } = (0, p.usePaymentContext)(),
                    {
                        isGift: O,
                        giftRecipient: b,
                        giftCode: R,
                        hasSentMessage: U,
                        isSendingMessage: j,
                        sendGiftMessage: D
                    } = (0, f.useGiftContext)();
                s(null != y, "Expected plan to selected"), s(null != x, "Expected selectedSkuId"), s(null != M, "Step should be set");
                let {
                    successUpsellEnabled: k
                } = (0, a.default)({
                    location: "PremiumPaymentConfirmStep"
                }), F = r.useCallback(() => {
                    I(), null == C || C()
                }, [I, C]);
                return r.useEffect(() => {
                    if (!O || null == b || null == R || U || j || (0, d.shouldShowCustomGiftExperience)(b, !0, "PremiumPaymentConfirmStep")) return;
                    let e = u.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
                        location: "36b986_1"
                    }).enabled;
                    e && D({
                        onSubscriptionConfirmation: C
                    })
                }, [D, O, b, R, U, j, C]), l = null != T ? T(y, F, v) : O ? (0, i.jsx)(o.PremiumSubscriptionGiftPurchaseConfirmation, {
                    planId: y.id,
                    onClose: F
                }) : L.current === y.id ? (0, i.jsx)(o.default, {
                    planId: y.id,
                    postSuccessGuild: P,
                    onClose: F,
                    paymentSourceType: null === (t = A[null != N ? N : ""]) || void 0 === t ? void 0 : t.type
                }) : (0, i.jsx)(o.default, {
                    followupSKUInfo: h,
                    startingPremiumSubscriptionPlanId: L.current,
                    planId: y.id,
                    onClose: F,
                    isDowngrade: null != g && (0, c.subscriptionCanDowngrade)(g, y.id, _),
                    paymentSourceType: null === (n = A[null != N ? N : ""]) || void 0 === n ? void 0 : n.type
                }), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(S.PaymentPortalBody, {
                        children: [(0, i.jsx)(E.default, {}), l]
                    }), k && O && (0, i.jsx)(m.default, {
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
                    return k
                },
                default: function() {
                    return F
                }
            }), n("70102"), n("222007");
            var i = n("37983"),
                r = n("884691"),
                l = n("446674"),
                s = n("913144"),
                a = n("775433"),
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
                g = n("263820"),
                A = n("992049"),
                N = n("176108"),
                y = n("97461"),
                x = n("403365"),
                M = n("498475"),
                v = n("254350"),
                L = n("49111"),
                O = n("646718"),
                b = n("782340");
            let R = [E.Step.PLAN_SELECT, E.Step.ADD_PAYMENT_STEPS, E.Step.REVIEW, E.Step.CONFIRM];

            function U(e) {
                let {
                    analyticsLocation: t,
                    analyticsObject: n,
                    analyticsSourceLocation: l,
                    onComplete: u,
                    transitionState: f,
                    initialPlanId: _,
                    subscriptionTier: C,
                    onClose: T,
                    trialId: P,
                    trialFooterMessageOverride: h,
                    reviewWarningMessage: A,
                    openInvoiceId: N,
                    onSubscriptionConfirmation: y,
                    renderPurchaseConfirmation: x,
                    postSuccessGuild: M,
                    followupSKUInfo: v,
                    renderHeader: b,
                    applicationId: R,
                    guildId: U,
                    referralTrialOfferId: j,
                    skuId: D,
                    returnRef: k
                } = e, {
                    analyticsLocations: F
                } = (0, o.default)();
                r.useEffect(() => {
                    !c.default.isLoadedForPremiumSKUs() && s.default.wait(() => (0, a.fetchPremiumSubscriptionPlans)())
                }, []), g.default.getCurrentConfig({
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
                    analyticsSourceLocation: l,
                    analyticsSubscriptionType: L.SubscriptionTypes.PREMIUM,
                    onComplete: u,
                    transitionState: f,
                    initialPlanId: _,
                    giftMessage: B,
                    subscriptionTier: C,
                    onClose: T,
                    trialId: P,
                    isGift: G,
                    trialFooterMessageOverride: h,
                    reviewWarningMessage: A,
                    planGroup: O.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                    openInvoiceId: N,
                    onSubscriptionConfirmation: y,
                    renderPurchaseConfirmation: x,
                    postSuccessGuild: M,
                    followupSKUInfo: v,
                    renderHeader: b,
                    applicationId: R,
                    guildId: U,
                    referralTrialOfferId: j,
                    skuId: D,
                    shakeWhilePurchasing: !0,
                    isLargeModal: W,
                    returnRef: k
                })
            }

            function j(e) {
                let {
                    startedPaymentFlowWithPaymentSourcesRef: t,
                    selectedSkuId: n
                } = (0, S.usePaymentContext)(), {
                    isGift: i
                } = (0, m.useGiftContext)();
                return (0, N.inOneStepSubscriptionCheckout)({
                    isTrial: null != e && e,
                    isGift: i,
                    selectedSkuId: n,
                    startedPaymentFlowWithPaymentSources: t.current
                })
            }

            function D(e) {
                let {
                    initialPlanId: t,
                    handleStepChange: n,
                    referralTrialOfferId: r
                } = e, {
                    paymentSources: l,
                    selectedSkuId: s
                } = (0, S.usePaymentContext)(), {
                    isGift: a
                } = (0, m.useGiftContext)(), u = (0, v.default)({
                    isGift: a,
                    skuId: s,
                    referralTrialOfferId: r
                }), o = j(u);
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(_.PaymentModalAddPaymentStep, {
                        ...e,
                        breadcrumbSteps: R,
                        onReturn: () => {
                            let e = Object.values(l).length < 1 && null == t ? E.Step.PLAN_SELECT : E.Step.REVIEW;
                            o && (e = E.Step.REVIEW), n(e, {
                                trackedFromStep: E.Step.PAYMENT_TYPE
                            })
                        }
                    })
                })
            }
            let k = [{
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
                        let t = j(e);
                        return t ? null : b.default.Messages.BILLING_STEP_SELECT_PLAN
                    }
                }
            }, {
                key: E.Step.ADD_PAYMENT_STEPS,
                renderStep: e => (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(D, {
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
                renderStep: e => (0, i.jsx)(T.default, {
                    ...e
                })
            }, {
                key: E.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                renderStep: () => (0, i.jsx)(P.default, {})
            }, {
                key: E.Step.AWAITING_AUTHENTICATION,
                renderStep: () => (0, i.jsx)(C.default, {})
            }, {
                key: E.Step.REVIEW,
                renderStep: e => (0, i.jsx)(h.PaymentModalReviewStep, {
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
                renderStep: e => (0, i.jsx)(A.PremiumPaymentConfirmStep, {
                    ...e
                })
            }];

            function F(e) {
                let t = (0, l.useStateFromStores)([f.default], () => f.default.getPremiumTypeSubscription()),
                    {
                        AnalyticsLocationProvider: n
                    } = (0, o.default)(e.analyticsLocations, u.default.PREMIUM_PAYMENT_MODAL),
                    {
                        subscriptionTier: r,
                        isGift: s,
                        giftRecipient: a,
                        giftMessage: d,
                        loadId: c,
                        defaultPlanId: p,
                        referralCode: E
                    } = e;
                if (null != r && !Object.values(O.PremiumSubscriptionSKUs).includes(r)) throw Error("subscriptionTier must be a premium subscription");
                return (0, i.jsx)(n, {
                    children: (0, i.jsx)(S.PaymentContextProvider, {
                        loadId: c,
                        activeSubscription: t,
                        stepConfigs: k,
                        skuIDs: [...O.ACTIVE_PREMIUM_SKUS],
                        isGift: s,
                        defaultPlanId: p,
                        referralCode: E,
                        children: (0, i.jsx)(m.GiftContextProvider, {
                            isGift: s,
                            giftRecipient: null == a ? void 0 : a,
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
                l = n("627445"),
                s = n.n(l),
                a = n("65597"),
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
                g = n("635357"),
                A = n("642906"),
                N = n("85336"),
                y = n("153727"),
                x = n("628738"),
                M = n("650484"),
                v = n("310093"),
                L = n("367767"),
                O = n("49111"),
                b = n("646718"),
                R = n("782340"),
                U = n("424650");

            function j(e) {
                var t, n, l;
                let {
                    handleStepChange: j,
                    initialPlanId: D,
                    subscriptionTier: k,
                    trialId: F,
                    referralTrialOfferId: w
                } = e, {
                    activeSubscription: G,
                    hasFetchedSubscriptions: B,
                    paymentSourceId: H,
                    paymentSources: W,
                    selectedSkuId: V,
                    selectedPlan: Y,
                    step: K,
                    defaultPlanId: Z,
                    priceOptions: Q,
                    isPremium: z
                } = (0, A.usePaymentContext)(), {
                    isGift: q,
                    giftRecipient: X,
                    giftMessage: J
                } = (0, g.useGiftContext)(), $ = null != H ? W[H] : null, {
                    newPlans: ee
                } = d.default.useExperiment({
                    location: "d17fd6_3"
                }, {
                    autoTrackExposure: !1
                }), et = (0, a.default)([I.default], () => I.default.getCurrentUser()), en = !q && null != V && V === b.PremiumSubscriptionSKUs.TIER_2 && null != et && et.hasHadPremium() && B && null == G && (0, d.isPaymentSourceEligibleForMultiMonthPlans)($), ei = (0, m.usePremiumTrialOffer)(w), er = !q && null != ei && null != V && (0, b.SubscriptionTrials)[ei.trial_id].skus.includes(V), el = (0, p.usePremiumDiscountOffer)(), es = null == el ? void 0 : null === (t = el.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => b.SubscriptionPlanInfo[e].skuId === V), ea = !q && null != el && null != V && es, eu = null !== (n = er || ea) && void 0 !== n && n, {
                    defaultToMonthlyPlan: eo
                } = f.TrialRedemptionDefaultPlanExperiment.useExperiment({
                    location: "d17fd6_4"
                }, {
                    autoTrackExposure: !1
                }), ed = r.useMemo(() => (0, h.getPremiumPlanOptions)({
                    skuId: V,
                    isPremium: z,
                    multiMonthPlans: en ? ee : [],
                    currentSubscription: G,
                    isGift: q,
                    isEligibleForTrial: er,
                    defaultPlanId: Z,
                    defaultToMonthlyPlan: eo
                }), [V, z, ee, G, en, q, er, Z, eo]), ec = ea && ed.includes(b.SubscriptionPlans.PREMIUM_MONTH_TIER_2) ? b.SubscriptionPlans.PREMIUM_MONTH_TIER_2 : ed[0], ef = (0, a.default)([_.default], () => _.default.get(ec)), ep = [{
                    planId: null == ef ? void 0 : ef.id,
                    quantity: 1
                }], [em, eS] = r.useState(eu), [eE, eI] = (0, c.useSubscriptionInvoicePreview)({
                    items: ep,
                    renewal: !1,
                    preventFetch: !eu,
                    applyEntitlements: !0,
                    trialId: F,
                    paymentSourceId: Q.paymentSourceId,
                    currency: Q.currency
                });
                r.useEffect(() => {
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
                let e_ = null !== (l = null == eI ? void 0 : eI.message) && void 0 !== l ? l : R.default.Messages.ERROR_GENERIC_TITLE,
                    eC = eu && null == eI,
                    eT = eu && null != eI;
                return eC && (null == eE ? void 0 : eE.subscriptionPeriodEnd) == null ? (0, i.jsx)(x.default, {}) : (s(null != K, "Step should be set"), s(ed.length > 0, "Premium plan options should be set"), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(v.GiftNote, {
                        giftMessage: J
                    }), !(q && (0, T.shouldShowCustomGiftExperience)(X, !0, "PremiumPaymentPlanSelectStep")) && (0, i.jsx)(y.default, {
                        isEligibleForTrial: er
                    }), (0, i.jsxs)(M.PaymentPortalBody, {
                        children: [eC && (0, i.jsx)("hr", {
                            className: U.planSelectSeparatorUpper
                        }), (0, i.jsx)(S.default, {
                            isGift: q,
                            plan: Y
                        }), (0, i.jsx)(L.default, {}), eT ? (0, i.jsx)(u.FormErrorBlock, {
                            children: e_
                        }) : (0, i.jsx)(E.PremiumSwitchPlanSelectBody, {
                            planOptions: ed,
                            eligibleForMultiMonthPlans: en,
                            referralTrialOfferId: w,
                            selectedPlanId: null == Y ? void 0 : Y.id,
                            subscriptionPeriodEnd: null == eE ? void 0 : eE.subscriptionPeriodEnd,
                            discountInvoiceItems: ea ? null == eE ? void 0 : eE.invoiceItems : void 0
                        }), eC && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("hr", {
                                className: U.planSelectSeparatorLower
                            }), (0, i.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                children: R.default.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
                                    link: P.default.getArticleURL(O.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB)
                                })
                            })]
                        })]
                    }), (0, i.jsx)(M.PaymentPortalFooter, {
                        children: (0, i.jsx)(u.ModalFooter, {
                            justify: C.default.Justify.BETWEEN,
                            align: C.default.Align.CENTER,
                            children: (0, i.jsx)(E.PremiumSwitchPlanSelectFooter, {
                                onStepChange: j,
                                onBackClick: () => j(N.Step.SKU_SELECT),
                                showBackButton: null == D && null == k,
                                planOptions: ed,
                                shouldRenderUpdatedPaymentModal: eC,
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
                l = n("917247"),
                s = n("279171"),
                a = n("49735"),
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
                    setSelectedSkuId: s,
                    activeSubscription: a,
                    startedPaymentFlowWithPaymentSourcesRef: S,
                    setSelectedPlanId: E
                } = (0, d.usePaymentContext)(), {
                    isGift: I
                } = (0, o.useGiftContext)(), C = (0, l.usePremiumTrialOffer)(r);
                return (0, i.jsx)(_, {
                    selectSku: e => (function(e) {
                        let {
                            activeSubscription: t,
                            newSkuId: n,
                            setSelectedSkuId: i,
                            handleStepChange: r,
                            isGift: l,
                            userTrialOffer: s,
                            setSelectedPlanId: a,
                            startedPaymentFlowWithPaymentSources: o
                        } = e;
                        i(n);
                        let d = c.Step.PLAN_SELECT,
                            S = (0, u.getPremiumSkuIdForSubscription)(t);
                        (S === m.PremiumSubscriptionSKUs.TIER_1 || S === m.PremiumSubscriptionSKUs.TIER_2) && n === m.PremiumSubscriptionSKUs.TIER_0 && !l && (d = c.Step.WHAT_YOU_LOSE);
                        let E = (0, p.isInTrialRedemption)({
                                userTrialOffer: s,
                                isGift: l,
                                skuId: n
                            }),
                            I = (0, f.inOneStepSubscriptionCheckout)({
                                isTrial: E,
                                isGift: l,
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
                        setSelectedSkuId: s,
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
                    isGift: l
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
                        children: [(0, i.jsx)(s.default, {
                            fromBoostCancelModal: !1,
                            className: E.legacyPricingNotice
                        }), (0, i.jsx)(a.default, {
                            onSelectSku: t,
                            isGift: l
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
                l = n.n(r),
                s = n("819855"),
                a = n("77078"),
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
                    setSelectedPlanId: C,
                    startedPaymentFlowWithPaymentSourcesRef: T
                } = (0, f.usePaymentContext)(), {
                    isGift: P
                } = (0, c.useGiftContext)(), h = null != I ? (0, d.getPremiumPlanItem)(I) : null, g = null != h ? (0, d.getDisplayPremiumType)(h.planId) : null, A = null != h ? (0, d.getPremiumType)(h.planId) : null, N = (0, m.inOneStepSubscriptionCheckout)({
                    isTrial: !1,
                    isGift: P,
                    selectedSkuId: _,
                    startedPaymentFlowWithPaymentSources: T.current
                });
                return l(null != A, "Expected premium type"), (0, i.jsx)(o.default, {
                    premiumType: A,
                    titleText: S.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
                    subtitleText: S.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
                        subscriptionName: g
                    }),
                    footer: (0, i.jsxs)("div", {
                        className: E.whatYouLoseButtonContainer,
                        children: [(0, i.jsx)(a.Button, {
                            onClick: () => {
                                if (N) {
                                    let e = (0, m.getDefaultPlanOneStepCheckout)(_, I);
                                    C(e), t(p.Step.REVIEW)
                                } else t(p.Step.PLAN_SELECT)
                            },
                            children: S.default.Messages.CONTINUE
                        }), (0, i.jsx)(a.Button, {
                            look: a.Button.Looks.LINK,
                            color: (0, s.isThemeDark)(r) ? a.Button.Colors.WHITE : a.Button.Colors.PRIMARY,
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
                l = n("132554"),
                s = n("646718"),
                a = n("782340"),
                u = n("880865"),
                o = e => {
                    let {
                        isGift: t,
                        plan: n
                    } = e, o = (0, r.useIsEligibleForBogoPromotion)();
                    return t || (null == n ? void 0 : n.skuId) !== s.PremiumSubscriptionSKUs.TIER_2 || !o ? null : (0, i.jsx)(l.default, {
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
                l = n("400307"),
                s = n("646718"),
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
                    children: (0, i.jsx)(l.Tier2Card, {
                        className: a.tier2MarketingCard,
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
                    children: (0, i.jsx)(l.Tier0Card, {
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
                        onClick: () => t(s.PremiumSubscriptionSKUs.TIER_2),
                        isGift: n
                    }), (0, i.jsx)(o, {
                        onClick: () => t(s.PremiumSubscriptionSKUs.TIER_0),
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
                l = n.n(r),
                s = n("77078"),
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
                    className: l(u.bannerContainer, t),
                    children: [null == r ? null : (0, i.jsx)("img", {
                        alt: "",
                        className: u.banner,
                        src: r
                    }), (0, i.jsxs)("div", {
                        className: u.textContainer,
                        children: [(0, i.jsx)(a.default, {
                            className: u.giftIcon
                        }), (0, i.jsx)(s.Heading, {
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
                l = n("27618");
            let s = !1,
                a = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                u = {
                    ...a
                };

            function o() {
                u.affinityUserIds = new Set(u.userAffinities.map(e => e.user_id).filter(e => !l.default.isBlocked(e)))
            }
            class d extends i.default.PersistedStore {
                initialize(e) {
                    this.waitFor(l.default), null != e && (u.userAffinities = e.userAffinities, u.affinityUserIds = new Set(e.affinityUserIds), u.lastFetched = e.lastFetched), this.syncWith([l.default], o)
                }
                needsRefresh() {
                    return Date.now() - u.lastFetched > 864e5
                }
                getFetching() {
                    return s
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
                    u.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [], u.lastFetched = Date.now(), o(), s = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    s = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    s = !1
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
                l = n("926001"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: l,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, l.SlashBoxIcon, void 0, {
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
                l = n("578478"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: l,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: r
                        })
                    })
                }, l.ImageIcon, void 0, {
                    size: 24
                })
        }
    }
]);