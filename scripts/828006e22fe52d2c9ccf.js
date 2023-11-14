(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["91213"], {
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
                    return s
                }
            });
            var i = n("872717"),
                r = n("913144"),
                a = n("843823"),
                l = n("49111");

            function s() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return a.default.needsRefresh() ? (r.default.dispatch({
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
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87c-.625 0-1.178-.162-1.66-.485-.482-.324-.855-.777-1.121-1.359C4.133 13.437 4 12.762 4 12c0-.755.14-1.423.42-2.005.288-.583.701-1.039 1.24-1.37.546-.33 1.197-.495 1.951-.495.64 0 1.211.136 1.714.41.51.272.895.657 1.154 1.153l-1.218.873c-.367-.676-.913-1.013-1.639-1.013-.661 0-1.168.215-1.52.646-.352.425-.528 1.025-.528 1.8 0 .784.176 1.388.528 1.812.352.424.859.636 1.52.636.295 0 .564-.054.809-.162.251-.115.445-.27.582-.463v-.927H7.299v-1.402h3.245v4.226H9.272l-.205-.712c-.424.575-1.053.863-1.887.863Zm6.34-.151h-1.574V8.28h1.574v7.438Zm1.51 0h1.574v-2.824h2.76v-1.423h-2.76V9.704H20V8.28h-4.97v7.438Z",
                        clipRule: "evenodd",
                        className: s
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
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.786 3.374A.25.25 0 0 0 17.57 5h-3.134a.75.75 0 0 0-.65.378L6.213 18.626A.25.25 0 0 0 6.43 19h3.134a.75.75 0 0 0 .65-.378l7.571-13.248Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        478272: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                a = n("974889"),
                l = n("954016"),
                s = n("49111");

            function o(e) {
                let {
                    channel: t,
                    guildId: o,
                    locationObject: u,
                    openInPopout: d,
                    initialSelectedApplicationId: c,
                    initialSlide: f = l.ActivityShelfSlides.DIRECTORY,
                    enableSelectedTextChannelInvite: p = !1,
                    analyticsLocations: m
                } = e;
                d && (0, a.default)(s.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                let S = d ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
                return (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("605455").then(n.bind(n, "605455"));
                    return n => (0, i.jsx)(e, {
                        ...n,
                        channel: t,
                        guildId: o,
                        locationObject: u,
                        initialSlide: f,
                        initialSelectedApplicationId: c,
                        enableSelectedTextChannelInvite: p,
                        analyticsLocations: m
                    })
                }, {
                    modalKey: l.ACTIVITY_SHELF_WEB_MODAL_KEY,
                    contextKey: S
                })
            }
        },
        149022: function(e, t, n) {
            "use strict";

            function i() {
                return {
                    textValue: "",
                    richValue: [{
                        type: "line",
                        children: [{
                            text: ""
                        }]
                    }]
                }
            }

            function r(e) {
                return {
                    textValue: e,
                    richValue: l(e)
                }
            }
            n.r(t), n.d(t, {
                createEmptyState: function() {
                    return i
                },
                createState: function() {
                    return r
                },
                toRichValue: function() {
                    return l
                },
                voidToOptionValue: function() {
                    return s
                }
            }), n("70102");
            let a = Object.freeze([Object.freeze({
                type: "line",
                children: Object.freeze([Object.freeze({
                    text: ""
                })])
            })]);

            function l(e) {
                return "" !== e ? e.split("\n").map(e => ({
                    type: "line",
                    children: [{
                        text: e
                    }]
                })) : a
            }

            function s(e) {
                switch (e.type) {
                    case "userMention":
                        return {
                            type: "userMention", userId: e.userId
                        };
                    case "channelMention":
                        return {
                            type: "channelMention", channelId: e.channelId
                        };
                    case "staticRouteLink":
                        return {
                            type: "staticRouteLink", channelId: e.channelId
                        };
                    case "soundboard":
                        return {
                            type: "soundboard", soundId: e.soundId
                        };
                    case "roleMention":
                        return {
                            type: "roleMention", roleId: e.roleId
                        };
                    case "textMention":
                        return {
                            type: "textMention", text: e.name
                        };
                    case "emoji":
                        return {
                            type: "emoji", name: e.emoji.name, surrogate: e.emoji.surrogate
                        };
                    case "customEmoji":
                        return {
                            type: "customEmoji", emojiId: e.emoji.emojiId, name: e.emoji.name, animated: e.emoji.animated
                        };
                    case "testInlineVoid":
                        throw Error("Unable to convert test types")
                }
                return null
            }
        },
        274800: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                queueInteractionComponentState: function() {
                    return l
                },
                addQueued: function() {
                    return s
                },
                setFailed: function() {
                    return o
                },
                fetchMessageInteractionData: function() {
                    return u
                }
            });
            var i = n("872717"),
                r = n("913144"),
                a = n("49111");

            function l(e, t, n, i) {
                r.default.dispatch({
                    type: "QUEUE_INTERACTION_COMPONENT_STATE",
                    messageId: e,
                    nonce: t,
                    state: n,
                    indices: i
                })
            }

            function s(e, t) {
                let {
                    data: n,
                    messageId: i,
                    onCreate: a,
                    onSuccess: l,
                    onFailure: s
                } = t;
                r.default.dispatch({
                    type: "INTERACTION_QUEUE",
                    data: n,
                    nonce: e,
                    messageId: i,
                    onCreate: a,
                    onSuccess: l,
                    onFailure: s
                })
            }

            function o(e, t, n) {
                r.default.dispatch({
                    type: "INTERACTION_FAILURE",
                    nonce: e,
                    errorMessage: n,
                    errorCode: t
                })
            }
            async function u(e, t) {
                let n = await i.default.get({
                    url: a.Endpoints.MESSAGE_INTERACTION_DATA(e, t),
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
                    return h
                },
                handleInteractionResponse: function() {
                    return T
                },
                InteractionStatusViewState: function() {
                    return i
                },
                getInteractionStatusViewState: function() {
                    return C
                },
                canRetryInteractionData: function() {
                    return g
                }
            }), n("222007");
            var i, r, a = n("249654"),
                l = n("872717"),
                s = n("913144"),
                o = n("819689"),
                u = n("798609"),
                d = n("263024"),
                c = n("271938"),
                f = n("274800"),
                p = n("809810"),
                m = n("3765"),
                S = n("606981"),
                E = n("49111");

            function I(e) {
                return null == e || "" === e || Number.isNaN(e) ? Date.now() : a.default.extractTimestamp(e) + 9e5
            }
            let h = async e => {
                let {
                    componentType: t,
                    messageId: n,
                    messageFlags: i,
                    customId: r,
                    indices: s,
                    applicationId: o,
                    channelId: m,
                    guildId: S,
                    localState: I
                } = e, h = a.default.fromTimestamp(Date.now());
                if (!p.default.canQueueInteraction(n, h)) return;
                await d.default.unarchiveThreadIfNecessary(m), (0, f.addQueued)(h, {
                    messageId: n,
                    data: {
                        interactionType: u.InteractionTypes.MESSAGE_COMPONENT,
                        customId: r,
                        indices: s
                    },
                    onFailure: (e, t) => _(m, e, t)
                }), null != I && (0, f.queueInteractionComponentState)(n, h, I, s);
                let C = {
                    type: u.InteractionTypes.MESSAGE_COMPONENT,
                    nonce: h,
                    guild_id: S,
                    channel_id: m,
                    message_flags: i,
                    message_id: n,
                    application_id: o,
                    session_id: c.default.getSessionId(),
                    data: {
                        component_type: t,
                        custom_id: r,
                        ... function(e) {
                            if (null == e) return null;
                            if (e.type === u.ComponentType.STRING_SELECT || e.type === u.ComponentType.INPUT_TEXT) return e;
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
                    body: C,
                    timeout: 3e3
                }, e => {
                    T(h, m, S, e)
                })
            }, _ = (e, t, n) => {
                null == n && null != t && o.default.sendClydeError(e, t)
            }, T = (e, t, n, i) => {
                if (!i.ok) {
                    if (!i.hasErr) {
                        var r;
                        if (i.status >= 400 && i.status < 500 && i.body) {
                            if (i.body.code === E.AbortCodes.INVALID_FORM_BODY && i.body.errors) {
                                let r = (0, S.getFirstSkemaError)(i.body.errors);
                                null != r && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === r.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === r.code) && s.default.dispatch({
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
                let l = e.state === E.MessageStates.SEND_FAILED && (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : a.default.extractTimestamp(n) + 3e3) < Date.now(),
                    s = (null == t ? void 0 : t.data.interactionType) === u.InteractionTypes.APPLICATION_COMMAND,
                    o = e.isCommandType();
                if (s && i === m.InteractionState.QUEUED || o && e.state === E.MessageStates.SENDING && null != t) return 0;
                if (s && i === m.InteractionState.CREATED || e.hasFlag(E.MessageFlags.LOADING) && !r) return 1;
                if (null != e.interaction && e.hasFlag(E.MessageFlags.LOADING) && r) return 3;
                else if (null != e.interaction && !e.hasFlag(E.MessageFlags.LOADING) && l) return 3;
                else if (o && e.state === E.MessageStates.SEND_FAILED) return 2
            };

            function g(e) {
                let t = e.options;
                for (;
                    (null == t ? void 0 : t.length) === 1 && (t[0].type === u.ApplicationCommandOptionType.SUB_COMMAND_GROUP || t[0].type === u.ApplicationCommandOptionType.SUB_COMMAND);) t = t[0].options;
                for (let e of null != t ? t : [])
                    if (e.type === u.ApplicationCommandOptionType.ATTACHMENT) return !1;
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
                    for (let [r, a] of Object.entries(t))
                        if (r !== i && null != a && "object" == typeof a) return e(a, null != n ? n : r);
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
            var i = n("37983"),
                r = n("884691"),
                a = n("748820"),
                l = n("872717"),
                s = n("850068"),
                o = n("253981"),
                u = n("642906"),
                d = n("85336"),
                c = n("149833"),
                f = n("523591"),
                p = n("153727"),
                m = n("650484"),
                S = n("49111"),
                E = n("646718");

            function I(e) {
                let {
                    handleStepChange: t
                } = e, {
                    selectedPlan: n,
                    isGift: I,
                    browserCheckoutState: h,
                    browserCheckoutStateLoadId: _,
                    contextMetadata: T
                } = (0, u.usePaymentContext)(), [C, g] = r.useState(!1);
                return r.useEffect(() => {
                    var e;
                    !C && (g(!0), (0, s.startBrowserCheckout)(T.loadId), ! function(e, t, n, i) {
                        let r = S.Endpoints.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, n),
                            s = new URL(o.default.makeUrl(S.Routes.BILLING_LOGIN_HANDOFF)),
                            u = (0, a.v4)();
                        s.searchParams.append("handoff_key", u), s.searchParams.append("redirect_to", r), l.default.post({
                            url: S.Endpoints.HANDOFF,
                            body: {
                                key: u
                            },
                            oldFormErrors: !0
                        }).then(e => {
                            s.searchParams.append("handoff_token", e.body.handoff_token), window.open(s.href)
                        }, () => {
                            i()
                        })
                    }(null !== (e = null == n ? void 0 : n.id) && void 0 !== e ? e : E.SubscriptionPlans.PREMIUM_MONTH_TIER_2, I, T.loadId, () => t(d.Step.ADD_PAYMENT_STEPS)))
                }, [n, I, C, g, T, t]), r.useEffect(() => {
                    _ === T.loadId && h === f.BrowserCheckoutState.DONE && t(d.Step.CONFIRM)
                }, [h, _, T, t]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(p.default, {}), (0, i.jsx)(m.PaymentPortalBody, {
                        children: (0, i.jsx)(c.AwaitingBrowserCheckoutStepBody, {})
                    }), (0, i.jsx)(m.PaymentPortalFooter, {
                        children: (0, i.jsx)(c.AwaitingBrowserCheckoutStepFooter, {
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
                    return a
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
            var a = r
        },
        149833: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AwaitingBrowserCheckoutStepBody: function() {
                    return u
                },
                AwaitingBrowserCheckoutStepFooter: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                a = n("177998"),
                l = n("145131"),
                s = n("85336"),
                o = n("782340");
            let u = () => (0, i.jsx)("div", {
                    children: (0, i.jsx)(r.Heading, {
                        variant: "heading-xl/bold",
                        children: o.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_HEADER
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
                                    t(s.Step.ADD_PAYMENT_STEPS)
                                },
                                children: o.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_NEXT_BUTTON
                            }), (0, i.jsx)(a.default, {
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
            }), n("222007");
            var i = n("37983"),
                r = n("884691"),
                a = n("627445"),
                l = n.n(a),
                s = n("210721"),
                o = n("491523"),
                u = n("775155"),
                d = n("659632"),
                c = n("380186"),
                f = n("642906"),
                p = n("650484"),
                m = n("367767");

            function S(e) {
                var t, n;
                let a, {
                        handleClose: S,
                        planGroup: E,
                        onSubscriptionConfirmation: I,
                        renderPurchaseConfirmation: h,
                        postSuccessGuild: _,
                        followupSKUInfo: T
                    } = e,
                    {
                        activeSubscription: C,
                        isGift: g,
                        paymentSources: A,
                        paymentSourceId: y,
                        selectedPlan: P,
                        selectedSkuId: N,
                        step: M,
                        updatedSubscription: v,
                        selectedGiftStyle: x,
                        startingPremiumSubscriptionPlanIdRef: O
                    } = (0, f.usePaymentContext)();
                l(null != P, "Expected plan to selected"), l(null != N, "Expected selectedSkuId"), l(null != M, "Step should be set");
                let L = r.useCallback(() => {
                        S(), null == I || I()
                    }, [S, I]),
                    {
                        giftRecipient: R
                    } = (0, f.usePaymentContext)(),
                    b = (0, d.useGetGiftCode)(N, g),
                    [D, j] = r.useState(!1),
                    [U, F] = r.useState(!1),
                    [k, w] = r.useState();
                return r.useEffect(() => {
                    if (!g || null == R || null == b || D || U || (0, d.shouldShowCustomGiftExperience)(R, !0, "PremiumPaymentConfirmStep")) return;
                    let e = o.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
                        location: "36b986_1"
                    }).enabled;
                    e && (F(!0), (0, s.sendGiftMessage)(R, b).then(() => {
                        F(!1), null == I || I(), j(!0)
                    }).catch(e => {
                        F(!1), w(e), j(!0)
                    }))
                }, [g, R, b, D, j, F, U, w, I]), a = null != h ? h(P, L, v) : g ? (0, i.jsx)(u.PremiumSubscriptionGiftPurchaseConfirmation, {
                    planId: P.id,
                    selectedGiftStyle: x,
                    onClose: L,
                    hasSentMessage: D,
                    giftMessageError: k,
                    isSendingMessage: U
                }) : O.current === P.id ? (0, i.jsx)(u.default, {
                    planId: P.id,
                    postSuccessGuild: _,
                    onClose: L,
                    paymentSourceType: null === (t = A[null != y ? y : ""]) || void 0 === t ? void 0 : t.type
                }) : (0, i.jsx)(u.default, {
                    followupSKUInfo: T,
                    startingPremiumSubscriptionPlanId: O.current,
                    planId: P.id,
                    onClose: L,
                    isDowngrade: null != C && (0, c.subscriptionCanDowngrade)(C, P.id, E),
                    paymentSourceType: null === (n = A[null != y ? y : ""]) || void 0 === n ? void 0 : n.type
                }), (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)(p.PaymentPortalBody, {
                        children: [(0, i.jsx)(m.default, {}), a]
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
                    return U
                },
                default: function() {
                    return F
                }
            }), n("70102"), n("222007");
            var i = n("37983"),
                r = n("884691"),
                a = n("446674"),
                l = n("913144"),
                s = n("775433"),
                o = n("812204"),
                u = n("685665"),
                d = n("677156"),
                c = n("10514"),
                f = n("521012"),
                p = n("659632"),
                m = n("642906"),
                S = n("85336"),
                E = n("385179"),
                I = n("262683"),
                h = n("946359"),
                _ = n("307367"),
                T = n("724269"),
                C = n("99836"),
                g = n("263820"),
                A = n("992049"),
                y = n("176108"),
                P = n("97461"),
                N = n("403365"),
                M = n("498475"),
                v = n("254350"),
                x = n("49111"),
                O = n("646718"),
                L = n("782340");
            let R = [S.Step.PLAN_SELECT, S.Step.ADD_PAYMENT_STEPS, S.Step.REVIEW, S.Step.CONFIRM];

            function b(e) {
                let {
                    analyticsLocation: t,
                    analyticsObject: n,
                    analyticsSourceLocation: a,
                    onComplete: o,
                    transitionState: f,
                    initialPlanId: I,
                    giftMessage: h,
                    subscriptionTier: _,
                    onClose: T,
                    trialId: C,
                    isGift: A = !1,
                    trialFooterMessageOverride: y,
                    reviewWarningMessage: P,
                    openInvoiceId: N,
                    onSubscriptionConfirmation: M,
                    renderPurchaseConfirmation: v,
                    postSuccessGuild: L,
                    followupSKUInfo: R,
                    renderHeader: b,
                    applicationId: D,
                    guildId: j,
                    referralTrialOfferId: U,
                    skuId: F,
                    returnRef: k
                } = e, {
                    analyticsLocations: w
                } = (0, u.default)();
                r.useEffect(() => {
                    !c.default.isLoadedForPremiumSKUs() && l.default.wait(() => (0, s.fetchPremiumSubscriptionPlans)())
                }, []), g.default.getCurrentConfig({
                    location: "3a6d55_1"
                }, {
                    autoTrackExposure: !0
                });
                let {
                    giftRecipient: G,
                    step: B
                } = (0, m.usePaymentContext)(), H = A && (0, p.shouldShowCustomGiftExperience)(G, !0, "PremiumPaymentModal") && B === S.Step.PLAN_SELECT;
                return null != G && d.CustomGiftExperiment.getCurrentConfig({
                    location: "initialRelease_PremiumPaymentModal"
                }), (0, i.jsx)(E.PaymentModal, {
                    analyticsLocations: w,
                    analyticsLocation: t,
                    analyticsObject: n,
                    analyticsSourceLocation: a,
                    analyticsSubscriptionType: x.SubscriptionTypes.PREMIUM,
                    onComplete: o,
                    transitionState: f,
                    initialPlanId: I,
                    giftMessage: h,
                    subscriptionTier: _,
                    onClose: T,
                    trialId: C,
                    isGift: A,
                    trialFooterMessageOverride: y,
                    reviewWarningMessage: P,
                    planGroup: O.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                    openInvoiceId: N,
                    onSubscriptionConfirmation: M,
                    renderPurchaseConfirmation: v,
                    postSuccessGuild: L,
                    followupSKUInfo: R,
                    renderHeader: b,
                    applicationId: D,
                    guildId: j,
                    referralTrialOfferId: U,
                    skuId: F,
                    shakeWhilePurchasing: !0,
                    isLargeModal: H,
                    returnRef: k
                })
            }

            function D(e) {
                let {
                    startedPaymentFlowWithPaymentSourcesRef: t,
                    isGift: n,
                    selectedSkuId: i
                } = (0, m.usePaymentContext)();
                return (0, y.inOneStepSubscriptionCheckout)({
                    isTrial: null != e && e,
                    isGift: n,
                    selectedSkuId: i,
                    startedPaymentFlowWithPaymentSources: t.current
                })
            }

            function j(e) {
                let {
                    initialPlanId: t,
                    handleStepChange: n,
                    referralTrialOfferId: r
                } = e, {
                    paymentSources: a,
                    selectedSkuId: l,
                    isGift: s
                } = (0, m.usePaymentContext)(), o = (0, v.default)({
                    isGift: s,
                    skuId: l,
                    referralTrialOfferId: r
                }), u = D(o);
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(I.PaymentModalAddPaymentStep, {
                        ...e,
                        breadcrumbSteps: R,
                        onReturn: () => {
                            let e = Object.values(a).length < 1 && null == t ? S.Step.PLAN_SELECT : S.Step.REVIEW;
                            u && (e = S.Step.REVIEW), n(e, {
                                trackedFromStep: S.Step.PAYMENT_TYPE
                            })
                        }
                    })
                })
            }
            let U = [{
                key: null,
                renderStep: e => (0, i.jsx)(E.PaymentPredicateStep, {
                    ...e
                })
            }, {
                key: S.Step.SKU_SELECT,
                renderStep: e => (0, i.jsx)(N.PremiumPaymentSKUSelectStep, {
                    ...e
                }),
                options: {
                    renderHeader: !1,
                    hideSlider: !0
                }
            }, {
                key: S.Step.WHAT_YOU_LOSE,
                renderStep: e => (0, i.jsx)(M.PremiumPaymentWhatYouLoseStep, {
                    ...e
                }),
                options: {
                    renderHeader: !1,
                    hideSlider: !0
                }
            }, {
                key: S.Step.PLAN_SELECT,
                renderStep: e => (0, i.jsx)(P.PremiumPaymentPlanSelectStep, {
                    ...e
                }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: e => {
                        let t = D(e);
                        return t ? null : L.default.Messages.BILLING_STEP_SELECT_PLAN
                    }
                }
            }, {
                key: S.Step.ADD_PAYMENT_STEPS,
                renderStep: e => (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(j, {
                        ...e
                    })
                }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: e => {
                        let t = D(e);
                        return t ? null : L.default.Messages.BILLING_STEP_PAYMENT
                    }
                }
            }, {
                key: S.Step.AWAITING_BROWSER_CHECKOUT,
                renderStep: e => (0, i.jsx)(_.default, {
                    ...e
                })
            }, {
                key: S.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                renderStep: () => (0, i.jsx)(T.default, {})
            }, {
                key: S.Step.AWAITING_AUTHENTICATION,
                renderStep: () => (0, i.jsx)(h.default, {})
            }, {
                key: S.Step.REVIEW,
                renderStep: e => (0, i.jsx)(C.PaymentModalReviewStep, {
                    ...e
                }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: e => {
                        let t = D(e);
                        return t ? L.default.Messages.BILLING_STEP_PLAN_AND_PAYMENT : L.default.Messages.BILLING_STEP_REVIEW
                    }
                }
            }, {
                key: S.Step.CONFIRM,
                renderStep: e => (0, i.jsx)(A.PremiumPaymentConfirmStep, {
                    ...e
                })
            }];

            function F(e) {
                let t = (0, a.useStateFromStores)([f.default], () => f.default.getPremiumTypeSubscription()),
                    {
                        AnalyticsLocationProvider: n
                    } = (0, u.default)(e.analyticsLocations, o.default.PREMIUM_PAYMENT_MODAL),
                    {
                        subscriptionTier: r,
                        isGift: l,
                        giftRecipient: s,
                        loadId: d,
                        defaultPlanId: c,
                        referralCode: p
                    } = e;
                if (null != r && !Object.values(O.PremiumSubscriptionSKUs).includes(r)) throw Error("subscriptionTier must be a premium subscription");
                return (0, i.jsx)(n, {
                    children: (0, i.jsx)(m.PaymentContextProvider, {
                        loadId: d,
                        activeSubscription: t,
                        stepConfigs: U,
                        skuIDs: [...O.ACTIVE_PREMIUM_SKUS],
                        isGift: l,
                        defaultPlanId: c,
                        referralCode: p,
                        giftRecipient: null == s ? void 0 : s,
                        children: (0, i.jsx)(b, {
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
                    return D
                }
            }), n("222007");
            var i = n("37983"),
                r = n("884691"),
                a = n("627445"),
                l = n.n(a),
                s = n("65597"),
                o = n("77078"),
                u = n("856413"),
                d = n("916187"),
                c = n("809071"),
                f = n("669073"),
                p = n("154889"),
                m = n("917247"),
                S = n("358821"),
                E = n("570727"),
                I = n("697218"),
                h = n("10514"),
                _ = n("145131"),
                T = n("659632"),
                C = n("701909"),
                g = n("719923"),
                A = n("642906"),
                y = n("85336"),
                P = n("153727"),
                N = n("628738"),
                M = n("650484"),
                v = n("310093"),
                x = n("367767"),
                O = n("49111"),
                L = n("646718"),
                R = n("782340"),
                b = n("424650");

            function D(e) {
                var t, n, a;
                let {
                    giftMessage: D,
                    handleStepChange: j,
                    initialPlanId: U,
                    subscriptionTier: F,
                    trialId: k,
                    referralTrialOfferId: w,
                    customGiftMessage: G,
                    emojiConfetti: B,
                    soundEffect: H,
                    setCustomGiftMessage: W,
                    setEmojiConfetti: V,
                    setSoundEffect: Y
                } = e, {
                    activeSubscription: K,
                    hasFetchedSubscriptions: Z,
                    isGift: z,
                    paymentSourceId: X,
                    paymentSources: Q,
                    selectedSkuId: q,
                    selectedPlan: J,
                    step: $,
                    defaultPlanId: ee,
                    priceOptions: et,
                    isPremium: en,
                    selectedGiftStyle: ei,
                    setSelectedGiftStyle: er,
                    giftRecipient: ea
                } = (0, A.usePaymentContext)(), el = null != X ? Q[X] : null, {
                    newPlans: es
                } = d.default.useExperiment({
                    location: "d17fd6_3"
                }, {
                    autoTrackExposure: !1
                }), eo = (0, s.default)([I.default], () => I.default.getCurrentUser()), eu = !z && null != q && q === L.PremiumSubscriptionSKUs.TIER_2 && null != eo && eo.hasHadPremium() && Z && null == K && (0, d.isPaymentSourceEligibleForMultiMonthPlans)(el), ed = (0, m.usePremiumTrialOffer)(w), ec = !z && null != ed && null != q && (0, L.SubscriptionTrials)[ed.trial_id].skus.includes(q), ef = (0, p.usePremiumDiscountOffer)(), ep = null == ef ? void 0 : null === (t = ef.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => L.SubscriptionPlanInfo[e].skuId === q), em = !z && null != ef && null != q && ep, eS = null !== (n = ec || em) && void 0 !== n && n, {
                    defaultToMonthlyPlan: eE
                } = f.TrialRedemptionDefaultPlanExperiment.useExperiment({
                    location: "d17fd6_4"
                }, {
                    autoTrackExposure: !1
                }), eI = r.useMemo(() => (0, g.getPremiumPlanOptions)({
                    skuId: q,
                    isPremium: en,
                    multiMonthPlans: eu ? es : [],
                    currentSubscription: K,
                    isGift: z,
                    isEligibleForTrial: ec,
                    defaultPlanId: ee,
                    defaultToMonthlyPlan: eE
                }), [q, en, es, K, eu, z, ec, ee, eE]), eh = em && eI.includes(L.SubscriptionPlans.PREMIUM_MONTH_TIER_2) ? L.SubscriptionPlans.PREMIUM_MONTH_TIER_2 : eI[0], e_ = (0, s.default)([h.default], () => h.default.get(eh)), eT = [{
                    planId: null == e_ ? void 0 : e_.id,
                    quantity: 1
                }], [eC, eg] = r.useState(eS), [eA, ey] = (0, c.useSubscriptionInvoicePreview)({
                    items: eT,
                    renewal: !1,
                    preventFetch: !eS,
                    applyEntitlements: !0,
                    trialId: k,
                    paymentSourceId: et.paymentSourceId,
                    currency: et.currency
                });
                r.useEffect(() => {
                    eS && eg((null == eA ? void 0 : eA.subscriptionPeriodEnd) == null)
                }, [eA, eS]), (0, u.default)("Payment Modal Plan Select Step", eC, 5, {
                    proratedInvoicePreview: eA,
                    proratedInvoiceError: ey,
                    isEligibleForOffer: eS
                }, {
                    tags: {
                        app_context: "billing"
                    }
                });
                let eP = null !== (a = null == ey ? void 0 : ey.message) && void 0 !== a ? a : R.default.Messages.ERROR_GENERIC_TITLE,
                    eN = eS && null == ey,
                    eM = eS && null != ey;
                return eN && (null == eA ? void 0 : eA.subscriptionPeriodEnd) == null ? (0, i.jsx)(N.default, {}) : (l(null != $, "Step should be set"), l(eI.length > 0, "Premium plan options should be set"), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(v.GiftNote, {
                        giftMessage: D
                    }), !(z && (0, T.shouldShowCustomGiftExperience)(ea, !0, "PremiumPaymentPlanSelectStep")) && (0, i.jsx)(P.default, {
                        isEligibleForTrial: ec
                    }), (0, i.jsxs)(M.PaymentPortalBody, {
                        children: [eN && (0, i.jsx)("hr", {
                            className: b.planSelectSeparatorUpper
                        }), (0, i.jsx)(S.default, {
                            isGift: z,
                            plan: J
                        }), (0, i.jsx)(x.default, {}), eM ? (0, i.jsx)(o.FormErrorBlock, {
                            children: eP
                        }) : (0, i.jsx)(E.PremiumSwitchPlanSelectBody, {
                            isGift: z,
                            selectedGiftStyle: ei,
                            setSelectedGiftStyle: er,
                            planOptions: eI,
                            eligibleForMultiMonthPlans: eu,
                            referralTrialOfferId: w,
                            selectedPlanId: null == J ? void 0 : J.id,
                            subscriptionPeriodEnd: null == eA ? void 0 : eA.subscriptionPeriodEnd,
                            customGiftMessage: G,
                            emojiConfetti: B,
                            soundEffect: H,
                            setCustomGiftMessage: W,
                            setEmojiConfetti: V,
                            setSoundEffect: Y,
                            discountInvoiceItems: em ? null == eA ? void 0 : eA.invoiceItems : void 0
                        }), eN && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("hr", {
                                className: b.planSelectSeparatorLower
                            }), (0, i.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                children: R.default.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
                                    link: C.default.getArticleURL(O.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB)
                                })
                            })]
                        })]
                    }), (0, i.jsx)(M.PaymentPortalFooter, {
                        children: (0, i.jsx)(o.ModalFooter, {
                            justify: _.default.Justify.BETWEEN,
                            align: _.default.Align.CENTER,
                            children: (0, i.jsx)(E.PremiumSwitchPlanSelectFooter, {
                                onStepChange: j,
                                isGift: z,
                                onBackClick: () => j(y.Step.SKU_SELECT),
                                showBackButton: null == U && null == F,
                                planOptions: eI,
                                shouldRenderUpdatedPaymentModal: eN,
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
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                a = n("917247"),
                l = n("279171"),
                s = n("49735"),
                o = n("719923"),
                u = n("642906"),
                d = n("85336"),
                c = n("176108"),
                f = n("254350"),
                p = n("646718"),
                m = n("782340"),
                S = n("600465");

            function E(e) {
                let {
                    handleStepChange: t,
                    handleClose: n,
                    referralTrialOfferId: r
                } = e, {
                    setSelectedSkuId: l,
                    activeSubscription: s,
                    isGift: m,
                    startedPaymentFlowWithPaymentSourcesRef: S,
                    setSelectedPlanId: E
                } = (0, u.usePaymentContext)(), h = (0, a.usePremiumTrialOffer)(r);
                return (0, i.jsx)(I, {
                    selectSku: e => (function(e) {
                        let {
                            activeSubscription: t,
                            newSkuId: n,
                            setSelectedSkuId: i,
                            handleStepChange: r,
                            isGift: a,
                            userTrialOffer: l,
                            setSelectedPlanId: s,
                            startedPaymentFlowWithPaymentSources: u
                        } = e;
                        i(n);
                        let m = d.Step.PLAN_SELECT,
                            S = (0, o.getPremiumSkuIdForSubscription)(t);
                        (S === p.PremiumSubscriptionSKUs.TIER_1 || S === p.PremiumSubscriptionSKUs.TIER_2) && n === p.PremiumSubscriptionSKUs.TIER_0 && !a && (m = d.Step.WHAT_YOU_LOSE);
                        let E = (0, f.isInTrialRedemption)({
                                userTrialOffer: l,
                                isGift: a,
                                skuId: n
                            }),
                            I = (0, c.inOneStepSubscriptionCheckout)({
                                isTrial: E,
                                isGift: a,
                                selectedSkuId: n,
                                startedPaymentFlowWithPaymentSources: u
                            });
                        if (m !== d.Step.WHAT_YOU_LOSE && I) {
                            m = d.Step.REVIEW;
                            let e = (0, c.getDefaultPlanOneStepCheckout)(n, t);
                            s(e)
                        }
                        r(m, {
                            analyticsDataOverride: {
                                sku_id: n
                            }
                        })
                    })({
                        activeSubscription: s,
                        newSkuId: e,
                        setSelectedSkuId: l,
                        handleStepChange: t,
                        isGift: m,
                        userTrialOffer: h,
                        startedPaymentFlowWithPaymentSources: S.current,
                        setSelectedPlanId: E
                    }),
                    onClose: n,
                    isGift: m
                })
            }

            function I(e) {
                let {
                    selectSku: t,
                    onClose: n,
                    isGift: a
                } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(r.ModalHeader, {
                        className: S.skuSelectModalHeader,
                        separator: !1,
                        children: [(0, i.jsx)(r.FormTitle, {
                            tag: r.FormTitleTags.H4,
                            children: m.default.Messages.BILLING_STEP_SELECT_PLAN
                        }), (0, i.jsx)(r.ModalCloseButton, {
                            onClick: n
                        })]
                    }), (0, i.jsxs)(r.ModalContent, {
                        className: S.skuSelectModalContent,
                        children: [(0, i.jsx)(l.default, {
                            fromBoostCancelModal: !1,
                            className: S.legacyPricingNotice
                        }), (0, i.jsx)(s.default, {
                            onSelectSku: t,
                            isGift: a
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
            var i = n("37983");
            n("884691");
            var r = n("627445"),
                a = n.n(r),
                l = n("819855"),
                s = n("77078"),
                o = n("841098"),
                u = n("360262"),
                d = n("719923"),
                c = n("642906"),
                f = n("85336"),
                p = n("176108"),
                m = n("782340"),
                S = n("943490");

            function E(e) {
                let {
                    handleStepChange: t,
                    handleClose: n
                } = e, r = (0, o.default)(), {
                    activeSubscription: E,
                    selectedSkuId: I,
                    setSelectedPlanId: h,
                    isGift: _,
                    startedPaymentFlowWithPaymentSourcesRef: T
                } = (0, c.usePaymentContext)(), C = null != E ? (0, d.getPremiumPlanItem)(E) : null, g = null != C ? (0, d.getDisplayPremiumType)(C.planId) : null, A = null != C ? (0, d.getPremiumType)(C.planId) : null, y = (0, p.inOneStepSubscriptionCheckout)({
                    isTrial: !1,
                    isGift: _,
                    selectedSkuId: I,
                    startedPaymentFlowWithPaymentSources: T.current
                });
                return a(null != A, "Expected premium type"), (0, i.jsx)(u.default, {
                    premiumType: A,
                    titleText: m.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
                    subtitleText: m.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
                        subscriptionName: g
                    }),
                    footer: (0, i.jsxs)("div", {
                        className: S.whatYouLoseButtonContainer,
                        children: [(0, i.jsx)(s.Button, {
                            onClick: () => {
                                if (y) {
                                    let e = (0, p.getDefaultPlanOneStepCheckout)(I, E);
                                    h(e), t(f.Step.REVIEW)
                                } else t(f.Step.PLAN_SELECT)
                            },
                            children: m.default.Messages.CONTINUE
                        }), (0, i.jsx)(s.Button, {
                            look: s.Button.Looks.LINK,
                            color: (0, l.isThemeDark)(r) ? s.Button.Colors.WHITE : s.Button.Colors.PRIMARY,
                            onClick: n,
                            children: m.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
                        })]
                    }),
                    onClose: n,
                    isDowngrade: !0
                })
            }
        },
        53253: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SeasonalGiftingMarketingExperiment: function() {
                    return c
                },
                useIsSeasonalGiftingActive: function() {
                    return f
                },
                default: function() {
                    return p
                }
            }), n("222007");
            var i = n("884691"),
                r = n("866227"),
                a = n.n(r),
                l = n("862337"),
                s = n("296892");
            let o = new Date("2024-01-01T07:59:59.000Z"),
                u = a(o),
                d = (0, s.default)({
                    id: "2022-12_seasonal_gifting",
                    label: "Seasonal Gifting",
                    kind: "user",
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
                c = (0, s.default)({
                    id: "2023-11_seasonal_gifting_marketing_2023",
                    label: "Seasonal Gifting Marketing 2023",
                    kind: "user",
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
                });

            function f() {
                let [e, t] = i.useState(() => u.isAfter(Date.now()));
                return i.useEffect(() => {
                    let n = new l.Timeout,
                        i = () => {
                            let e = u.diff(Date.now(), "millisecond");
                            null == n || n.start(e, () => {
                                u.isBefore(Date.now()) ? t(!1) : i()
                            })
                        };
                    return e && i(), () => n.stop()
                }), e
            }
            var p = d
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
        166960: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-05_referral_trials_birthday_moment",
                label: "Referral Trials Birthday Moment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Users will see the birthday moment referral trial UX",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var a = r
        },
        1607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-02_referral_trials",
                label: "Referral Trials",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Nitro users can send a Nitro trial offer to another user.",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var a = r
        },
        358821: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("641078"),
                a = n("132554"),
                l = n("646718"),
                s = n("782340"),
                o = n("311050"),
                u = e => {
                    let {
                        isGift: t,
                        plan: n
                    } = e, u = (0, r.useIsEligibleForBogoPromotion)();
                    return t || (null == n ? void 0 : n.skuId) !== l.PremiumSubscriptionSKUs.TIER_2 || !u ? null : (0, i.jsx)(a.default, {
                        copy: s.default.Messages.BOGO_ANNOUNCEMENT_MODAL_UPGRADE_HEADER,
                        bannerImage: o
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
                a = n("400307"),
                l = n("646718"),
                s = n("414539");

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
                    children: (0, i.jsx)(a.Tier2Card, {
                        className: s.tier2MarketingCard,
                        ctaButton: null,
                        showWumpus: !0,
                        showYearlyPrice: !0,
                        isGift: n
                    })
                })
            }

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
                    children: (0, i.jsx)(a.Tier0Card, {
                        className: s.tier0MarketingCard,
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
                    children: [(0, i.jsx)(o, {
                        onClick: () => t(l.PremiumSubscriptionSKUs.TIER_2),
                        isGift: n
                    }), (0, i.jsx)(u, {
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
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                a = n.n(r),
                l = n("77078"),
                s = n("978679"),
                o = n("265469");

            function u(e) {
                let {
                    className: t,
                    copy: n,
                    bannerImage: r,
                    textColor: u = "always-white"
                } = e;
                return (0, i.jsxs)("div", {
                    className: a(o.bannerContainer, t),
                    children: [null == r ? null : (0, i.jsx)("img", {
                        alt: "",
                        className: o.banner,
                        src: r
                    }), (0, i.jsxs)("div", {
                        className: o.textContainer,
                        children: [(0, i.jsx)(s.default, {
                            className: o.giftIcon
                        }), (0, i.jsx)(l.Heading, {
                            className: o.textHeader,
                            color: u,
                            variant: "eyebrow",
                            children: n
                        })]
                    })]
                })
            }
        },
        967241: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openThreadSidebarForViewing: function() {
                    return g
                },
                openThreadSidebarForCreating: function() {
                    return A
                },
                closeThreadSidebar: function() {
                    return y
                },
                closeAndClearThreadSidebar: function() {
                    return P
                }
            });
            var i = n("627445"),
                r = n.n(i),
                a = n("917351"),
                l = n.n(a),
                s = n("913144"),
                o = n("295426"),
                u = n("244201"),
                d = n("716241"),
                c = n("565298"),
                f = n("393414"),
                p = n("144491"),
                m = n("845579"),
                S = n("474643"),
                E = n("18494"),
                I = n("800762"),
                h = n("659500"),
                _ = n("648564"),
                T = n("49111"),
                C = n("724210");

            function g(e, t, n) {
                u.MainWindowDispatch.dispatch(T.ComponentActions.POPOUT_CLOSE);
                let i = !l.isEmpty(I.default.getVoiceStatesForChannel(e.id));
                if (t || !m.UseThreadSidebar.getSetting() || __OVERLAY__ || i) {
                    s.default.dispatch({
                        type: "SIDEBAR_CLOSE",
                        baseChannelId: e.parent_id
                    }), null != n ? (0, p.transitionToThread)(e, n) : (0, p.transitionToChannel)(e.id);
                    return
                }
                r(null != e.parent_id, "all threads must have parents");
                let a = E.default.getChannelId();
                e.parent_id !== a && !(0, C.isGuildHomeChannel)(a) && (0, p.transitionToChannel)(e.parent_id), (0, f.transitionTo)(T.Routes.CHANNEL_THREAD_VIEW((0, c.getGuildIdForGenericRedirect)(e), (0, C.isGuildHomeChannel)(a) ? C.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? _.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
                    h.ComponentDispatch.dispatch(T.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: e.id
                    })
                }, 0)
            }

            function A(e, t, n) {
                r(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), r(!__OVERLAY__, "Cannot create threads in the overlay."), (0, d.trackWithMetadata)(T.AnalyticEvents.THREAD_CREATION_STARTED, {
                    location: n,
                    channel_id: e.id,
                    guild_id: e.guild_id
                }), u.MainWindowDispatch.dispatch(T.ComponentActions.POPOUT_CLOSE), E.default.getChannelId() !== e.id && (0, p.transitionToChannel)(e.id);
                let i = S.default.getDraft(e.id, S.DraftType.FirstThreadMessage);
                if ("" === i) {
                    let t = S.default.getDraft(e.id, S.DraftType.ChannelMessage);
                    o.default.saveDraft(e.id, "", S.DraftType.ChannelMessage), o.default.saveDraft(e.id, t, S.DraftType.FirstThreadMessage)
                }
                setTimeout(() => {
                    s.default.dispatch({
                        type: "SIDEBAR_CREATE_THREAD",
                        parentChannelId: e.id,
                        parentMessageId: null == t ? void 0 : t.id,
                        location: n
                    })
                }, 0)
            }

            function y(e, t) {
                (0, f.transitionTo)(T.Routes.CHANNEL(e, (0, C.isGuildHomeChannel)(t) ? C.StaticChannelRoute.GUILD_HOME : t)), s.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: t
                })
            }

            function P(e) {
                s.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: e
                }), s.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: S.DraftType.FirstThreadMessage
                }), s.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: S.DraftType.ThreadSettings
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
                a = n("27618");
            let l = !1,
                s = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                o = {
                    ...s
                };

            function u() {
                o.affinityUserIds = new Set(o.userAffinities.map(e => e.user_id).filter(e => !a.default.isBlocked(e)))
            }
            class d extends i.default.PersistedStore {
                initialize(e) {
                    this.waitFor(a.default), null != e && (o.userAffinities = e.userAffinities, o.affinityUserIds = new Set(e.affinityUserIds), o.lastFetched = e.lastFetched), this.syncWith([a.default], u)
                }
                needsRefresh() {
                    return Date.now() - o.lastFetched > 864e5
                }
                getFetching() {
                    return l
                }
                getState() {
                    return o
                }
                getUserAffinities() {
                    return o.userAffinities
                }
                getUserAffinitiesUserIds() {
                    return o.affinityUserIds
                }
            }
            d.displayName = "UserAffinitiesStore", d.persistKey = "UserAffinitiesStore", d.migrations = [e => null];
            var c = new d(r.default, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t;
                    let {
                        affinities: n
                    } = e;
                    o.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [], o.lastFetched = Date.now(), u(), l = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    l = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    l = !1
                },
                LOGOUT: function() {
                    o = {
                        ...s
                    }
                }
            })
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                a = n("926001"),
                l = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: a,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, a.SlashBoxIcon)
        },
        346955: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                a = n("509317"),
                l = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: a,
                            d: "M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7Z"
                        })
                    })
                }, a.FolderIcon)
        },
        95689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                a = n("578478"),
                l = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: a,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: r
                        })
                    })
                }, a.ImageIcon)
        },
        659186: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatLayerContainer: function() {
                    return s
                },
                ChatLayerProvider: function() {
                    return o
                },
                default: function() {
                    return u
                }
            });
            var i = n("228256");
            let {
                Layer: r,
                LayerContainer: a,
                LayerProvider: l
            } = (0, i.createLayer)("Chat"), s = a, o = l;
            var u = r
        }
    }
]);