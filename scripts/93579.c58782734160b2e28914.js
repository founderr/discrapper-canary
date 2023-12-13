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
                    return l
                }
            });
            var r = n("872717"),
                i = n("913144"),
                a = n("843823"),
                s = n("49111");

            function l() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return a.default.needsRefresh() ? (i.default.dispatch({
                    type: "LOAD_USER_AFFINITIES"
                }), r.default.get({
                    url: s.Endpoints.USER_AFFINITIES,
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
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87a2.9 2.9 0 0 1-1.66-.49 3.18 3.18 0 0 1-1.12-1.35A4.88 4.88 0 0 1 4 12c0-.75.14-1.42.42-2 .29-.59.7-1.04 1.24-1.37a3.7 3.7 0 0 1 1.95-.5c.64 0 1.21.14 1.72.4.5.28.89.67 1.15 1.16l-1.22.88a1.76 1.76 0 0 0-1.64-1.02c-.66 0-1.17.22-1.52.65a2.74 2.74 0 0 0-.53 1.8c0 .78.18 1.39.53 1.81.35.42.86.64 1.52.64.3 0 .57-.06.81-.16.25-.12.45-.27.58-.47v-.93H7.3v-1.4h3.24v4.23H9.27l-.2-.71c-.43.57-1.06.86-1.89.86Zm6.34-.15h-1.57V8.28h1.57v7.44Zm1.51 0h1.57v-2.83h2.76v-1.42H16.6V9.7H20V8.28h-4.97v7.44Z",
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
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.79 3.37a.25.25 0 0 0-.22-.37h-3.13a.75.75 0 0 0-.66.38L6.21 18.63c-.1.16.03.37.22.37h3.13c.27 0 .52-.14.66-.38l7.57-13.25Z",
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
                    return s
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
                a = n("49111");

            function s(e, t, n, r) {
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
                    onCreate: a,
                    onSuccess: s,
                    onFailure: l
                } = t;
                i.default.dispatch({
                    type: "INTERACTION_QUEUE",
                    data: n,
                    nonce: e,
                    messageId: r,
                    onCreate: a,
                    onSuccess: s,
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
                    url: a.Endpoints.MESSAGE_INTERACTION_DATA(e, t),
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
            var r, i, a = n("249654"),
                s = n("872717"),
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
                return null == e || "" === e || Number.isNaN(e) ? Date.now() : a.default.extractTimestamp(e) + 9e5
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
                } = e, _ = a.default.fromTimestamp(Date.now());
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
                await s.default.post({
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
                let s = e.state === E.MessageStates.SEND_FAILED && (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : a.default.extractTimestamp(n) + 3e3) < Date.now(),
                    l = (null == t ? void 0 : t.data.interactionType) === o.InteractionTypes.APPLICATION_COMMAND,
                    u = e.isCommandType();
                if (l && r === m.InteractionState.QUEUED || u && e.state === E.MessageStates.SENDING && null != t) return 0;
                if (l && r === m.InteractionState.CREATED || e.hasFlag(E.MessageFlags.LOADING) && !i) return 1;
                if (null != e.interaction && e.hasFlag(E.MessageFlags.LOADING) && i) return 3;
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
                    return i
                }
            }), n("222007");
            let r = "_errors";

            function i(e) {
                return function e(t, n) {
                    let i = t[r];
                    if (null != i && Array.isArray(i)) return i[0];
                    for (let [i, a] of Object.entries(t))
                        if (i !== r && null != a && "object" == typeof a) return e(a, null != n ? n : i);
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
            var r = n("37983");
            n("884691");
            var i = n("907002"),
                a = n("65597"),
                s = n("77078"),
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
                    } = (0, o.default)(), E = (0, a.default)([l.default], () => l.default.useReducedMotion), I = (0, i.useSpring)({
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
                    return (0, r.jsxs)(i.animated.div, {
                        style: I,
                        className: m.container,
                        children: [(0, r.jsx)("img", {
                            className: m.image,
                            src: S,
                            alt: ""
                        }), (0, r.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "header-primary",
                            children: p.default.Messages.COLLECTIBLES_GIFT_CODE_MODAL_UPSELL.format({
                                checkItOut: e => (0, r.jsx)(s.Clickable, {
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
            var r = n("37983"),
                i = n("884691"),
                a = n("748820"),
                s = n("872717"),
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
                            o = (0, a.v4)();
                        l.searchParams.append("handoff_key", o), l.searchParams.append("redirect_to", i), s.default.post({
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
                    return a
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
            var a = i
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
                a = n("177998"),
                s = n("145131"),
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
                            justify: s.default.Justify.BETWEEN,
                            align: s.default.Align.CENTER,
                            children: [(0, r.jsx)(i.Button, {
                                color: i.Button.Colors.BRAND,
                                onClick: () => {
                                    t(l.Step.ADD_PAYMENT_STEPS)
                                },
                                children: u.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_NEXT_BUTTON
                            }), (0, r.jsx)(a.default, {
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
            var r = n("37983"),
                i = n("884691"),
                a = n("627445"),
                s = n.n(a),
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
                let a, {
                        handleClose: I,
                        planGroup: _,
                        onSubscriptionConfirmation: C,
                        renderPurchaseConfirmation: T,
                        postSuccessGuild: P,
                        followupSKUInfo: h
                    } = e,
                    {
                        activeSubscription: A,
                        paymentSources: g,
                        paymentSourceId: N,
                        selectedPlan: y,
                        selectedSkuId: x,
                        step: M,
                        updatedSubscription: v,
                        startingPremiumSubscriptionPlanIdRef: L
                    } = (0, p.usePaymentContext)(),
                    {
                        isGift: O,
                        giftRecipient: R,
                        giftCode: b,
                        hasSentMessage: j,
                        isSendingMessage: U,
                        sendGiftMessage: k
                    } = (0, f.useGiftContext)();
                s(null != y, "Expected plan to selected"), s(null != x, "Expected selectedSkuId"), s(null != M, "Step should be set");
                let {
                    successUpsellEnabled: D
                } = (0, l.default)({
                    location: "PremiumPaymentConfirmStep"
                }), F = i.useCallback(() => {
                    I(), null == C || C()
                }, [I, C]);
                return i.useEffect(() => {
                    if (!O || null == R || null == b || j || U || (0, d.shouldShowCustomGiftExperience)(R, !0, "PremiumPaymentConfirmStep")) return;
                    let e = u.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
                        location: "36b986_1"
                    }).enabled;
                    e && k({
                        onSubscriptionConfirmation: C
                    })
                }, [k, O, R, b, j, U, C]), a = null != T ? T(y, F, v) : O ? (0, r.jsx)(o.PremiumSubscriptionGiftPurchaseConfirmation, {
                    planId: y.id,
                    onClose: F
                }) : L.current === y.id ? (0, r.jsx)(o.default, {
                    planId: y.id,
                    postSuccessGuild: P,
                    onClose: F,
                    paymentSourceType: null === (t = g[null != N ? N : ""]) || void 0 === t ? void 0 : t.type
                }) : (0, r.jsx)(o.default, {
                    followupSKUInfo: h,
                    startingPremiumSubscriptionPlanId: L.current,
                    planId: y.id,
                    onClose: F,
                    isDowngrade: null != A && (0, c.subscriptionCanDowngrade)(A, y.id, _),
                    paymentSourceType: null === (n = g[null != N ? N : ""]) || void 0 === n ? void 0 : n.type
                }), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(S.PaymentPortalBody, {
                        children: [(0, r.jsx)(E.default, {}), a]
                    }), D && O && (0, r.jsx)(m.default, {
                        onClose: F
                    })]
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
                a = n("446674"),
                s = n("913144"),
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
                M = n("498475"),
                v = n("254350"),
                L = n("49111"),
                O = n("646718"),
                R = n("782340");
            let b = [E.Step.PLAN_SELECT, E.Step.ADD_PAYMENT_STEPS, E.Step.REVIEW, E.Step.CONFIRM];

            function j(e) {
                let {
                    analyticsLocation: t,
                    analyticsObject: n,
                    analyticsSourceLocation: a,
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
                i.useEffect(() => {
                    !c.default.isLoadedForPremiumSKUs() && s.default.wait(() => (0, l.fetchPremiumSubscriptionPlans)())
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
                    analyticsSourceLocation: a,
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
                    reviewWarningMessage: g,
                    planGroup: O.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
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
                    paymentSources: a,
                    selectedSkuId: s
                } = (0, S.usePaymentContext)(), {
                    isGift: l
                } = (0, m.useGiftContext)(), u = (0, v.default)({
                    isGift: l,
                    skuId: s,
                    referralTrialOfferId: i
                }), o = U(u);
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(_.PaymentModalAddPaymentStep, {
                        ...e,
                        breadcrumbSteps: b,
                        onReturn: () => {
                            let e = Object.values(a).length < 1 && null == t ? E.Step.PLAN_SELECT : E.Step.REVIEW;
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
                renderStep: e => (0, r.jsx)(M.PremiumPaymentWhatYouLoseStep, {
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
                let t = (0, a.useStateFromStores)([f.default], () => f.default.getPremiumTypeSubscription()),
                    {
                        AnalyticsLocationProvider: n
                    } = (0, o.default)(e.analyticsLocations, u.default.PREMIUM_PAYMENT_MODAL),
                    {
                        subscriptionTier: i,
                        isGift: s,
                        giftRecipient: l,
                        giftMessage: d,
                        loadId: c,
                        defaultPlanId: p,
                        referralCode: E
                    } = e;
                if (null != i && !Object.values(O.PremiumSubscriptionSKUs).includes(i)) throw Error("subscriptionTier must be a premium subscription");
                return (0, r.jsx)(n, {
                    children: (0, r.jsx)(S.PaymentContextProvider, {
                        loadId: c,
                        activeSubscription: t,
                        stepConfigs: D,
                        skuIDs: [...O.ACTIVE_PREMIUM_SKUS],
                        isGift: s,
                        defaultPlanId: p,
                        referralCode: E,
                        children: (0, r.jsx)(m.GiftContextProvider, {
                            isGift: s,
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
                a = n("627445"),
                s = n.n(a),
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
                M = n("650484"),
                v = n("310093"),
                L = n("367767"),
                O = n("49111"),
                R = n("646718"),
                b = n("782340"),
                j = n("424650");

            function U(e) {
                var t, n, a;
                let {
                    handleStepChange: U,
                    initialPlanId: k,
                    subscriptionTier: D,
                    trialId: F,
                    referralTrialOfferId: w,
                    handleClose: G
                } = e, {
                    activeSubscription: B,
                    hasFetchedSubscriptions: H,
                    paymentSourceId: W,
                    paymentSources: V,
                    selectedSkuId: Y,
                    selectedPlan: K,
                    step: Z,
                    defaultPlanId: Q,
                    priceOptions: z,
                    isPremium: q
                } = (0, g.usePaymentContext)(), {
                    isGift: X,
                    giftRecipient: J,
                    giftMessage: $
                } = (0, A.useGiftContext)(), ee = null != W ? V[W] : null, {
                    newPlans: et
                } = d.default.useExperiment({
                    location: "d17fd6_3"
                }, {
                    autoTrackExposure: !1
                }), en = (0, l.default)([I.default], () => I.default.getCurrentUser()), er = !X && null != Y && Y === R.PremiumSubscriptionSKUs.TIER_2 && null != en && en.hasHadPremium() && H && null == B && (0, d.isPaymentSourceEligibleForMultiMonthPlans)(ee), ei = (0, m.usePremiumTrialOffer)(w), ea = !X && null != ei && null != Y && (0, R.SubscriptionTrials)[ei.trial_id].skus.includes(Y), es = (0, p.usePremiumDiscountOffer)(), el = null == es ? void 0 : null === (t = es.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => R.SubscriptionPlanInfo[e].skuId === Y), eu = !X && null != es && null != Y && el, eo = null !== (n = ea || eu) && void 0 !== n && n, {
                    defaultToMonthlyPlan: ed
                } = f.TrialRedemptionDefaultPlanExperiment.useExperiment({
                    location: "d17fd6_4"
                }, {
                    autoTrackExposure: !1
                }), ec = i.useMemo(() => (0, h.getPremiumPlanOptions)({
                    skuId: Y,
                    isPremium: q,
                    multiMonthPlans: er ? et : [],
                    currentSubscription: B,
                    isGift: X,
                    isEligibleForTrial: ea,
                    defaultPlanId: Q,
                    defaultToMonthlyPlan: ed
                }), [Y, q, et, B, er, X, ea, Q, ed]), ef = eu && ec.includes(R.SubscriptionPlans.PREMIUM_MONTH_TIER_2) ? R.SubscriptionPlans.PREMIUM_MONTH_TIER_2 : ec[0], ep = (0, l.default)([_.default], () => _.default.get(ef)), em = [{
                    planId: null == ep ? void 0 : ep.id,
                    quantity: 1
                }], [eS, eE] = i.useState(eo), [eI, e_] = (0, c.useSubscriptionInvoicePreview)({
                    items: em,
                    renewal: !1,
                    preventFetch: !eo,
                    applyEntitlements: !0,
                    trialId: F,
                    paymentSourceId: z.paymentSourceId,
                    currency: z.currency
                });
                i.useEffect(() => {
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
                let eC = null !== (a = null == e_ ? void 0 : e_.message) && void 0 !== a ? a : b.default.Messages.ERROR_GENERIC_TITLE,
                    eT = eo && null == e_,
                    eP = eo && null != e_;
                return eT && (null == eI ? void 0 : eI.subscriptionPeriodEnd) == null ? (0, r.jsx)(x.default, {}) : (s(null != Z, "Step should be set"), s(ec.length > 0, "Premium plan options should be set"), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(v.GiftNote, {
                        giftMessage: $
                    }), !(X && (0, T.shouldShowCustomGiftExperience)(J, !0, "PremiumPaymentPlanSelectStep")) && (0, r.jsx)(y.default, {
                        isEligibleForTrial: ea
                    }), (0, r.jsxs)(M.PaymentPortalBody, {
                        children: [eT && (0, r.jsx)("hr", {
                            className: j.planSelectSeparatorUpper
                        }), (0, r.jsx)(S.default, {
                            isGift: X,
                            plan: K
                        }), (0, r.jsx)(L.default, {}), eP ? (0, r.jsx)(u.FormErrorBlock, {
                            children: eC
                        }) : (0, r.jsx)(E.PremiumSwitchPlanSelectBody, {
                            planOptions: ec,
                            eligibleForMultiMonthPlans: er,
                            referralTrialOfferId: w,
                            selectedPlanId: null == K ? void 0 : K.id,
                            subscriptionPeriodEnd: null == eI ? void 0 : eI.subscriptionPeriodEnd,
                            discountInvoiceItems: eu ? null == eI ? void 0 : eI.invoiceItems : void 0,
                            handleClose: G
                        }), eT && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("hr", {
                                className: j.planSelectSeparatorLower
                            }), (0, r.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                children: b.default.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
                                    link: P.default.getArticleURL(O.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB)
                                })
                            })]
                        })]
                    }), (0, r.jsx)(M.PaymentPortalFooter, {
                        children: (0, r.jsx)(u.ModalFooter, {
                            justify: C.default.Justify.BETWEEN,
                            align: C.default.Align.CENTER,
                            children: (0, r.jsx)(E.PremiumSwitchPlanSelectFooter, {
                                onStepChange: U,
                                onBackClick: () => U(N.Step.SKU_SELECT),
                                showBackButton: null == k && null == D,
                                planOptions: ec,
                                shouldRenderUpdatedPaymentModal: eT,
                                isTrial: ea
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
                a = n("917247"),
                s = n("279171"),
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
                    setSelectedSkuId: s,
                    activeSubscription: l,
                    startedPaymentFlowWithPaymentSourcesRef: S,
                    setSelectedPlanId: E
                } = (0, d.usePaymentContext)(), {
                    isGift: I
                } = (0, o.useGiftContext)(), C = (0, a.usePremiumTrialOffer)(i);
                return (0, r.jsx)(_, {
                    selectSku: e => (function(e) {
                        let {
                            activeSubscription: t,
                            newSkuId: n,
                            setSelectedSkuId: r,
                            handleStepChange: i,
                            isGift: a,
                            userTrialOffer: s,
                            setSelectedPlanId: l,
                            startedPaymentFlowWithPaymentSources: o
                        } = e;
                        r(n);
                        let d = c.Step.PLAN_SELECT,
                            S = (0, u.getPremiumSkuIdForSubscription)(t);
                        (S === m.PremiumSubscriptionSKUs.TIER_1 || S === m.PremiumSubscriptionSKUs.TIER_2) && n === m.PremiumSubscriptionSKUs.TIER_0 && !a && (d = c.Step.WHAT_YOU_LOSE);
                        let E = (0, p.isInTrialRedemption)({
                                userTrialOffer: s,
                                isGift: a,
                                skuId: n
                            }),
                            I = (0, f.inOneStepSubscriptionCheckout)({
                                isTrial: E,
                                isGift: a,
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
                    isGift: a
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
                        children: [(0, r.jsx)(s.default, {
                            fromBoostCancelModal: !1,
                            className: E.legacyPricingNotice
                        }), (0, r.jsx)(l.default, {
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
                    return I
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("627445"),
                a = n.n(i),
                s = n("819855"),
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
                return a(null != g, "Expected premium type"), (0, r.jsx)(o.default, {
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
                            color: (0, s.isThemeDark)(i) ? l.Button.Colors.WHITE : l.Button.Colors.PRIMARY,
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
                a = n("132554"),
                s = n("646718"),
                l = n("782340"),
                u = n("880865"),
                o = e => {
                    let {
                        isGift: t,
                        plan: n
                    } = e, o = (0, i.useIsEligibleForBogoPromotion)();
                    return t || (null == n ? void 0 : n.skuId) !== s.PremiumSubscriptionSKUs.TIER_2 || !o ? null : (0, r.jsx)(a.default, {
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
                a = n("400307"),
                s = n("646718"),
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
                    children: (0, r.jsx)(a.Tier2Card, {
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
                return (0, r.jsx)(i.Clickable, {
                    onClick: t,
                    style: {
                        cursor: "pointer"
                    },
                    children: (0, r.jsx)(a.Tier0Card, {
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
                        onClick: () => t(s.PremiumSubscriptionSKUs.TIER_2),
                        isGift: n
                    }), (0, r.jsx)(o, {
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
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                a = n.n(i),
                s = n("77078"),
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
                    className: a(u.bannerContainer, t),
                    children: [null == i ? null : (0, r.jsx)("img", {
                        alt: "",
                        className: u.banner,
                        src: i
                    }), (0, r.jsxs)("div", {
                        className: u.textContainer,
                        children: [(0, r.jsx)(l.default, {
                            className: u.giftIcon
                        }), (0, r.jsx)(s.Heading, {
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
                a = n("27618");
            let s = !1,
                l = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                u = {
                    ...l
                };

            function o() {
                u.affinityUserIds = new Set(u.userAffinities.map(e => e.user_id).filter(e => !a.default.isBlocked(e)))
            }
            class d extends r.default.PersistedStore {
                initialize(e) {
                    this.waitFor(a.default), null != e && (u.userAffinities = e.userAffinities, u.affinityUserIds = new Set(e.affinityUserIds), u.lastFetched = e.lastFetched), this.syncWith([a.default], o)
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
            var c = new d(i.default, {
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
                a = n("926001"),
                s = n("75196"),
                l = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, s.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: a,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, a.SlashBoxIcon, void 0, {
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
                a = n("578478"),
                s = n("75196"),
                l = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, s.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: a,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: i
                        })
                    })
                }, a.ImageIcon, void 0, {
                    size: 24
                })
        }
    }
]);