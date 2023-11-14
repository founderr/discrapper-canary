(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["77649"], {
        280968: function(e, t, n) {
            "use strict";
            e.exports = n.p + "21776a8b4fe8087b0bdc.svg"
        },
        361396: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d159a1f367b4a1eb7f2c.png"
        },
        291059: function(e, t, n) {
            "use strict";
            e.exports = n.p + "9254c6ef3fdf4d153df8.png"
        },
        356057: function(e, t, n) {
            "use strict";
            e.exports = n.p + "163c5051f6417b3bc324.png"
        },
        892712: function(e, t, n) {
            "use strict";
            e.exports = n.p + "13fbe1295be9098d06dd.png"
        },
        335430: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CurrencyWrapper: function() {
                    return l
                },
                default: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("77078"),
                a = n("575209");

            function l(e) {
                let {
                    currencies: t,
                    className: n,
                    children: s
                } = e;
                return t.length < 2 ? null : (0, r.jsx)("div", {
                    className: n,
                    children: s
                })
            }
            var i = function(e) {
                let {
                    currencies: t,
                    onChange: n,
                    selectedCurrency: l,
                    className: i,
                    disabled: u = !1
                } = e;
                if (t.length < 2) return null;
                let o = t.map((e, t) => ({
                    key: t,
                    value: e,
                    label: "".concat(e.toUpperCase(), " - ").concat((0, a.getCurrencyFullName)(e))
                }));
                return (0, r.jsx)(s.SingleSelect, {
                    value: l,
                    options: o,
                    onChange: e => {
                        null != e && n(e)
                    },
                    className: i,
                    isDisabled: u
                })
            }
        },
        405932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("77078"),
                a = n("135898"),
                l = function(e) {
                    let {
                        message: t
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: a.warnBlock,
                        children: [(0, r.jsx)("div", {
                            className: a.warnIcon
                        }), (0, r.jsx)(s.Text, {
                            className: a.warnText,
                            variant: "text-sm/normal",
                            children: t
                        })]
                    })
                }
        },
        50517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AwaitingPurchaseTokenAuthStepBody: function() {
                    return u
                },
                AwaitingPurchaseTokenAuthStepFooter: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("77078"),
                a = n("145131"),
                l = n("782340"),
                i = n("57153");
            let u = e => {
                    let {
                        className: t,
                        isEmailResent: n,
                        resendEmail: a
                    } = e;
                    return (0, r.jsx)("div", {
                        className: t,
                        children: (0, r.jsxs)("div", {
                            className: i.awaitingWrapper,
                            children: [(0, r.jsx)(s.Heading, {
                                variant: "heading-xl/bold",
                                children: l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_HEADER
                            }), (0, r.jsxs)("p", {
                                children: [(0, r.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    children: l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL
                                }), (0, r.jsx)("br", {}), (0, r.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    children: l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_INSTRUCTIONS
                                }), (0, r.jsx)("br", {}), (0, r.jsxs)(s.Text, {
                                    variant: "text-md/normal",
                                    children: [l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_PROMPT, "\xa0", n ? l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_SENT : (0, r.jsx)(s.Anchor, {
                                        onClick: a,
                                        children: l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_ACTION
                                    })]
                                })]
                            })]
                        })
                    })
                },
                o = () => (0, r.jsx)("div", {
                    children: (0, r.jsx)(s.ModalFooter, {
                        justify: a.default.Justify.BETWEEN,
                        align: a.default.Align.CENTER,
                        children: (0, r.jsx)(s.Button, {
                            "data-testid": "continue",
                            color: s.Button.Colors.BRAND,
                            disabled: !0,
                            children: l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_NEXT_BUTTON
                        })
                    })
                })
        },
        763377: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleQuestionIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: l = "transparent",
                    secondaryColorClass: i = "",
                    color: u = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...c
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, a.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof l ? l : l.css,
                        className: i
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm-.281-16c-.981 0-1.812.473-2.269 1.14A1 1 0 1 1 7.8 7.01C8.638 5.786 10.095 5 11.719 5c2.495 0 4.656 1.885 4.656 4.375 0 2.103-1.542 3.775-3.524 4.243l.14.993a1 1 0 0 1-1.981.278l-.281-2a1 1 0 0 1 .99-1.139c1.544 0 2.656-1.137 2.656-2.375S13.263 7 11.719 7ZM13 17.875a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Z",
                        clipRule: "evenodd",
                        className: o
                    })]
                })
            }
        },
        85941: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ListBulletsIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
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
                        fill: "string" == typeof l ? l : l.css,
                        d: "M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM4 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2 20a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM9 3a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2H9ZM8 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM9 19a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H9Z",
                        className: i
                    })
                })
            }
        },
        645156: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
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
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M19.117 2a.5.5 0 0 1 .429.757L8.218 21.636a.75.75 0 0 1-.643.364H4.883a.5.5 0 0 1-.429-.757L15.782 2.364A.75.75 0 0 1 16.424 2h2.692Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        594203: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ResizeOrientation: function() {
                    return r
                },
                default: function() {
                    return c
                }
            }), n("222007");
            var r, s, a, l, i = n("884691"),
                u = n("917351");

            function o(e) {
                return 2 === e || 3 === e ? 1 : 0
            }(a = r || (r = {}))[a.VERTICAL_TOP = 0] = "VERTICAL_TOP", a[a.VERTICAL_BOTTOM = 1] = "VERTICAL_BOTTOM", a[a.HORIZONTAL_LEFT = 2] = "HORIZONTAL_LEFT", a[a.HORIZONTAL_RIGHT = 3] = "HORIZONTAL_RIGHT", (l = s || (s = {}))[l.VERTICAL = 0] = "VERTICAL", l[l.HORIZONTAL = 1] = "HORIZONTAL";
            var c = e => {
                let {
                    initialElementDimension: t,
                    resizableDomNodeRef: n,
                    maxDimension: r,
                    minDimension: s,
                    onElementResize: a,
                    onElementResizeEnd: l,
                    throttleDuration: c = 300,
                    orientation: d,
                    usePointerEvents: f = !1
                } = e, [m, _] = i.useState(!1), I = i.useRef(0), E = i.useRef(null == t ? 0 : t);
                return i.useLayoutEffect(() => {
                    if (!m || null == n.current) return;

                    function e(e) {
                        let t = 1 === o(d) ? e.screenX : e.screenY,
                            n = 0 === d || 2 === d,
                            a = (t - I.current) * (n ? -1 : 1),
                            l = E.current + a;
                        return (0, u.clamp)(l, null != s ? s : 0, null != r ? r : l)
                    }
                    let t = (0, u.throttle)(a, c),
                        i = r => {
                            if (null == n.current) return null;
                            let s = e(r),
                                a = 1 === o(d) ? "width" : "height";
                            n.current.style[a] = "".concat(s, "px"), t(s)
                        },
                        p = t => {
                            _(!1);
                            let n = e(t);
                            a(n), null == l || l(n)
                        },
                        S = f ? "pointerup" : "mouseup",
                        N = f ? "pointermove" : "mousemove",
                        P = n.current.ownerDocument;
                    return P.addEventListener(S, p), P.addEventListener(N, i), () => {
                        P.removeEventListener(S, p), P.removeEventListener(N, i), t.cancel()
                    }
                }, [m, a, s, r, d, n, c, l, f]), i.useCallback(e => {
                    let t = 1 === o(d);
                    null != n.current && (E.current = t ? n.current.offsetWidth : n.current.offsetHeight), I.current = t ? e.screenX : e.screenY, _(!0)
                }, [d, n])
            }
        },
        605886: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                purchaseProduct: function() {
                    return N
                }
            }), n("70102"), n("222007");
            var r = n("627445"),
                s = n.n(r),
                a = n("913144"),
                l = n("850068"),
                i = n("112679"),
                u = n("596523"),
                o = n("465527"),
                c = n("388290"),
                d = n("599110"),
                f = n("745279"),
                m = n("659632"),
                _ = n("719923"),
                I = n("286350"),
                E = n("49111"),
                p = n("646718"),
                S = n("782340");
            async function N(e) {
                let {
                    setPurchaseState: t,
                    setHasAcceptedTerms: n,
                    setIsSubmitting: r,
                    setPurchaseError: N,
                    hasRedirectURL: P,
                    setHasRedirectURL: T,
                    isGift: C,
                    giftStyle: A,
                    baseAnalyticsData: O,
                    analyticsLocation: h,
                    analyticsLocations: R,
                    flowStartTime: g,
                    subscriptionPlan: M,
                    planGroup: v,
                    trialId: x,
                    priceOptions: y,
                    paymentSource: L,
                    isPrepaidPaymentPastDue: b,
                    openInvoiceId: j,
                    premiumSubscription: G,
                    onNext: D,
                    metadata: U,
                    sku: B,
                    skuPricePreview: F,
                    purchaseType: w,
                    referralCode: H,
                    loadId: k,
                    giftRecipient: Y,
                    customMessage: W,
                    emojiConfetti: Z,
                    soundEffect: V
                } = e;
                t(I.PurchaseState.PURCHASING), n(!0), r(!0), a.default.wait(i.clearError), N(null);
                try {
                    let e, n, r;
                    if (d.default.track(E.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
                            ...O,
                            duration_ms: Date.now() - g
                        }), P) return;
                    let a = (0, m.getGiftExperience)(Y),
                        i = m.GIFT_EXPERIENCES_WITH_CUSTOM_MESSAGING.has(a),
                        N = m.GIFT_EXPERIENCES_WITH_CUSTOM_EMOJI_SOUNDBOARD.has(a);
                    if (w === E.PurchaseTypes.ONE_TIME) s(null != B, "SKU must exist and be fetched."), s(null != F, "SKUPricePreview must exist."), e = await (0, o.purchaseSKU)(B.applicationId, B.id, {
                        expectedAmount: F.amount,
                        expectedCurrency: F.currency,
                        paymentSource: L,
                        loadId: k
                    });
                    else if (s(null != M, "Missing subscriptionPlan"), C) {
                        let t = (0, _.getPrice)(M.id, !1, !0, y);
                        if ("usd" === t.currency && (null == L ? void 0 : L.type) === E.PaymentSourceTypes.GCASH) {
                            var K;
                            let e = Error("Invalid USD currency for GCash");
                            (0, f.captureBillingException)(e, {
                                tags: {
                                    paymentSourceId: null !== (K = null == L ? void 0 : L.id) && void 0 !== K ? K : "",
                                    subscriptionPlanId: M.id,
                                    priceOptions: JSON.stringify(y)
                                }
                            })
                        }
                        e = await (0, o.purchaseSKU)(p.PREMIUM_SUBSCRIPTION_APPLICATION, M.skuId, {
                            expectedAmount: t.amount,
                            expectedCurrency: t.currency,
                            paymentSource: L,
                            subscriptionPlanId: M.id,
                            isGift: !0,
                            giftStyle: A,
                            loadId: k,
                            recipientId: a !== m.GiftExperience.DEFAULT ? null == Y ? void 0 : Y.id : void 0,
                            customMessage: i ? W : void 0,
                            emojiConfetti: N ? Z : void 0,
                            soundEffect: N ? V : void 0
                        })
                    } else e = b && null != j && null != L && null != G ? E.PREPAID_PAYMENT_SOURCES.has(L.type) ? await (0, l.payInvoiceManually)(G, j, L, y.currency) : await (0, l.updateSubscription)(G, {
                        paymentSource: L,
                        currency: y.currency
                    }, R, h) : null != G ? await (0, l.updateSubscription)(G, {
                        items: (0, _.getItemsWithUpsertedPlanIdForGroup)(G, M.id, 1, new Set(v)),
                        paymentSource: L,
                        currency: y.currency
                    }, R, h) : await (0, u.subscribe)({
                        planId: M.id,
                        currency: y.currency,
                        paymentSource: L,
                        trialId: x,
                        metadata: U,
                        referralCode: H,
                        loadId: k
                    });
                    if (e.redirectConfirmation) {
                        T(null != e.redirectURL);
                        return
                    }
                    let z = {
                        ...O,
                        duration_ms: Date.now() - g,
                        payment_source_type: null == L ? void 0 : L.type
                    };
                    C && (i && (z.is_custom_message_edited = W !== S.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE), N && (z.is_custom_emoji_sound_available = !0, null != Z && (z.emoji_name = Z.surrogates), null != V && (z.sound_id = V.soundId))), d.default.track(E.AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, z), t(I.PurchaseState.COMPLETED), "subscription" in e ? n = null != e.subscription ? c.default.createFromServer(e.subscription) : null : "entitlements" in e && (r = null != e.entitlements ? e.entitlements : void 0), D(n, r)
                } catch (e) {
                    t(I.PurchaseState.FAIL), N(e), d.default.track(E.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                        ...O,
                        payment_source_id: null == L ? void 0 : L.id,
                        payment_source_type: null == L ? void 0 : L.type,
                        duration_ms: Date.now() - g
                    })
                } finally {
                    !P && r(!1)
                }
            }
        },
        262683: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PaymentModalAddPaymentStep: function() {
                    return m
                }
            });
            var r = n("627445"),
                s = n.n(r),
                a = n("775560"),
                l = n("917247"),
                i = n("724522"),
                u = n("599110"),
                o = n("642906"),
                c = n("85336"),
                d = n("49111"),
                f = n("646718");

            function m(e) {
                let {
                    analyticsData: t,
                    initialPlanId: n,
                    breadcrumbSteps: r,
                    handleStepChange: m,
                    referralTrialOfferId: _,
                    onReturn: I
                } = e, {
                    contextMetadata: E,
                    step: p,
                    paymentSources: S,
                    paymentSourceId: N,
                    setPaymentSourceId: P,
                    purchaseError: T,
                    setPurchaseError: C,
                    purchaseErrorBlockRef: A,
                    paymentAuthenticationState: O,
                    isGift: h,
                    selectedSkuId: R
                } = (0, o.usePaymentContext)(), g = {
                    ...(0, i.useSharedPaymentModal)(),
                    paymentSources: S,
                    paymentSourceId: N,
                    setPaymentSourceId: P,
                    purchaseError: T,
                    setPurchaseError: C,
                    purchaseErrorBlockRef: A,
                    paymentAuthenticationState: O
                }, M = (0, l.usePremiumTrialOffer)(_), v = !h && null != M && null != R && (0, f.SubscriptionTrials)[M.trial_id].skus.includes(R), x = null != I ? I : () => {
                    let e = Object.values(S).length < 1 && null == n ? c.Step.PLAN_SELECT : c.Step.REVIEW;
                    m(e, {
                        trackedFromStep: c.Step.PAYMENT_TYPE
                    })
                };
                s(p, "Step should be set here");
                let y = (0, a.useStableMemo)(() => Date.now(), [p]);
                return (0, i.AddPaymentFlow)({
                    paymentModalArgs: g,
                    initialStep: c.Step.PAYMENT_TYPE,
                    prependSteps: [c.Step.PROMOTION_INFO],
                    appendSteps: [c.Step.REVIEW, c.Step.CONFIRM],
                    breadcrumpSteps: r,
                    currentBreadcrumpStep: p,
                    usePaymentModalStep: !0,
                    onReturn: x,
                    onComplete: e => {
                        m(c.Step.REVIEW, {
                            trackedFromStep: e
                        })
                    },
                    onStepChange: e => {
                        let {
                            currentStep: n,
                            toStep: r
                        } = e, s = Date.now();
                        u.default.track(d.AnalyticEvents.PAYMENT_FLOW_STEP, {
                            ...t,
                            from_step: n,
                            to_step: r,
                            step_duration_ms: s - y,
                            flow_duration_ms: s - E.startTime
                        })
                    },
                    isEligibleForTrial: v
                })
            }
        },
        946359: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("157009"),
                a = n("153727"),
                l = n("650484"),
                i = n("913390");

            function u() {
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(a.default, {}), (0, r.jsx)(l.PaymentPortalBody, {
                        children: (0, r.jsx)(s.AwaitingAuthenticationStepBody, {
                            className: i.awaitingAuthenticationStep
                        })
                    })]
                })
            }
        },
        724269: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                a = n("465527"),
                l = n("50517"),
                i = n("153727"),
                u = n("650484"),
                o = n("199142");

            function c() {
                let [e, t] = s.useState(!1), n = async () => {
                    t(!0), await (0, a.resendPaymentVerificationEmail)()
                };
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(i.default, {}), (0, r.jsx)(u.PaymentPortalBody, {
                        children: (0, r.jsx)(l.AwaitingPurchaseTokenAuthStepBody, {
                            className: o.body,
                            isEmailResent: e,
                            resendEmail: n
                        })
                    }), (0, r.jsx)(u.PaymentPortalFooter, {
                        children: (0, r.jsx)(l.AwaitingPurchaseTokenAuthStepFooter, {})
                    })]
                })
            }
        },
        883558: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("862205");
            let s = (0, r.createExperiment)({
                id: "2023-07_checkout_optimization_browser_autofill",
                label: "Checkout Optimization Browser Autofill",
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
            var a = s
        },
        102492: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                checkNoPaymentTrialEnabled: function() {
                    return i
                }
            });
            var r = n("862205"),
                s = n("719923");
            let a = (0, r.createExperiment)({
                    kind: "user",
                    id: "2022-06_no_payment_info_trial",
                    label: "No Payment Info Trial",
                    defaultConfig: {
                        bypassCheckout: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Bypass collecting payment info",
                        config: {
                            bypassCheckout: !0
                        }
                    }]
                }),
                l = (e, t, n) => {
                    let r = null == n || (0, s.isPremiumBaseSubscriptionPlan)(n);
                    return null != e && null == t && r
                },
                i = (e, t, n) => {
                    let {
                        bypassCheckout: r
                    } = a.useExperiment({
                        location: "aeb070_1"
                    }, {
                        autoTrackExposure: !1
                    }), s = l(e, t, n);
                    return r && s
                }
        },
        35188: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2022-12_localized_pricing_poland_notice",
                label: "Localized Pricing Poland Notice",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Poland Notice",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        909469: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PAYMENT_SOURCE_NAMES: function() {
                    return f
                },
                getLocalizedPricingNotice: function() {
                    return _
                },
                getLocalizedPricingBannerStrings: function() {
                    return I
                }
            }), n("222007"), n("424973");
            var r = n("592861"),
                s = n("988415"),
                a = n("701909"),
                l = n("153160"),
                i = n("49111"),
                u = n("843455"),
                o = n("782340");
            let c = new Set([u.CurrencyCodes.ARS, u.CurrencyCodes.CLP, u.CurrencyCodes.COP]),
                d = new Set([u.CurrencyCodes.USD, u.CurrencyCodes.JPY]),
                f = {
                    [i.PaymentSourceTypes.CARD]: () => o.default.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
                    [i.PaymentSourceTypes.PAYPAL]: () => o.default.Messages.PAYMENT_SOURCE_PAYPAL,
                    [i.PaymentSourceTypes.SOFORT]: () => o.default.Messages.PAYMENT_SOURCE_SOFORT,
                    [i.PaymentSourceTypes.GIROPAY]: () => o.default.Messages.PAYMENT_SOURCE_GIROPAY,
                    [i.PaymentSourceTypes.PRZELEWY24]: () => o.default.Messages.PAYMENT_SOURCE_PRZELEWY24,
                    [i.PaymentSourceTypes.PAYSAFE_CARD]: () => o.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
                    [i.PaymentSourceTypes.GCASH]: () => o.default.Messages.PAYMENT_SOURCE_GCASH,
                    [i.PaymentSourceTypes.GRABPAY_MY]: () => o.default.Messages.PAYMENT_SOURCE_GRABPAY,
                    [i.PaymentSourceTypes.MOMO_WALLET]: () => o.default.Messages.PAYMENT_SOURCE_MOMO_WALLET,
                    [i.PaymentSourceTypes.VENMO]: () => o.default.Messages.PAYMENT_SOURCE_VENMO,
                    [i.PaymentSourceTypes.KAKAOPAY]: () => o.default.Messages.PAYMENT_SOURCE_KAKAOPAY,
                    [i.PaymentSourceTypes.GOPAY_WALLET]: () => o.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
                    [i.PaymentSourceTypes.BANCONTACT]: () => o.default.Messages.PAYMENT_SOURCE_BANCONTACT,
                    [i.PaymentSourceTypes.EPS]: () => o.default.Messages.PAYMENT_SOURCE_EPS,
                    [i.PaymentSourceTypes.IDEAL]: () => o.default.Messages.PAYMENT_SOURCE_IDEAL,
                    [i.PaymentSourceTypes.CASH_APP]: () => o.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY
                },
                m = [i.PaymentSourceTypes.EPS, i.PaymentSourceTypes.BANCONTACT, i.PaymentSourceTypes.IDEAL, i.PaymentSourceTypes.SOFORT, i.PaymentSourceTypes.GIROPAY, i.PaymentSourceTypes.SEPA_DEBIT, i.PaymentSourceTypes.PAYSAFE_CARD],
                _ = (e, t, n, r) => {
                    if (null == e) return "";
                    let a = (0, s.getI18NCountryName)(e);
                    if (t === u.CurrencyCodes.EUR) return n ? o.default.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
                        country: a
                    }) : o.default.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
                        currencyISOCode: t.toUpperCase()
                    });
                    return r ? o.default.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
                        countryName: a
                    }) : o.default.Messages.LOCALIZED_PRICING_NOTICE.format({
                        country: a
                    })
                },
                I = e => {
                    let {
                        localizedPricingPromo: t,
                        subscription: n,
                        forceSingleLine: r = !1,
                        userLocale: _
                    } = e, {
                        countryCode: I,
                        amount: p,
                        currency: S,
                        paymentSourceTypes: N
                    } = t, P = 0 !== N.length, T = E(I), C = (0, l.formatPrice)(p, S, {
                        style: "currency",
                        currency: S,
                        currencyDisplay: "symbol",
                        localeOverride: T
                    }), A = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
                        helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
                        currencyISOCode: S.toUpperCase(),
                        localizedPriceWithCurrencySymbol: C
                    });
                    if (d.has(S) && (A = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
                            helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
                            localizedPriceWithCurrencySymbol: C
                        })), c.has(S) && (A = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
                            helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: S.toUpperCase(),
                            localizedPriceWithCurrencySymbol: C
                        })), null != n && !n.hasPremiumNitroMonthly && (A = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
                            helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: S.toUpperCase()
                        })), S === u.CurrencyCodes.EUR && (A = r ? o.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
                            country: (0, s.getI18NCountryName)(I),
                            currencyISOCode: S.toUpperCase(),
                            helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
                        }) : o.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
                            currencyISOCode: S.toUpperCase(),
                            helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
                        })), P) {
                        let e = m.filter(e => N.includes(e)),
                            t = N.filter(e => !m.includes(e)),
                            n = [...e, ...t],
                            r = n.slice(0, 2).map(e => {
                                var t, n;
                                return null !== (n = null === (t = f[e]) || void 0 === t ? void 0 : t.call(f)) && void 0 !== n ? n : o.default.Messages.PAYMENT_SOURCE_UNKNOWN
                            });
                        N.length >= 3 && r.push(o.default.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
                        let s = new Intl.ListFormat(_, {
                            style: "short",
                            type: "conjunction"
                        });
                        A = o.default.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
                            helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
                            paymentMethods: s.format(r)
                        })
                    }
                    return {
                        localizedPricingBannerHeader: o.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
                            country: (0, s.getI18NCountryName)(I)
                        }),
                        localizedPricingBannerBody: A,
                        localizedPricingBannerLinkOnly: o.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
                            helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
                        }),
                        localizedPricingBannerSubNotif: P ? void 0 : o.default.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
                    }
                },
                E = e => {
                    let t = r.default.find(t => t.alpha2 === e);
                    return null == t ? void 0 : t.localeForICU
                }
        },
        391533: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2023-05_localized_pricing_turkey_notice",
                label: "Localized Pricing Turkey Notice",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Turkey Notice",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        916187: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                },
                isPaymentSourceEligibleForMultiMonthPlans: function() {
                    return u
                }
            }), n("222007");
            var r = n("976979"),
                s = n("862205"),
                a = n("646718"),
                l = (0, s.createExperiment)({
                    kind: "user",
                    id: "2022-02_multi_month_plans",
                    label: "Multi Month Plans",
                    defaultConfig: {
                        newPlans: []
                    },
                    treatments: [{
                        id: 1,
                        label: "3 and 6 Month Plans",
                        config: {
                            newPlans: [a.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2, a.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2]
                        }
                    }, {
                        id: 2,
                        label: "3 Month Plan Only",
                        config: {
                            newPlans: [a.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2]
                        }
                    }]
                });
            let i = new Set([r.CountryCodes.US, r.CountryCodes.CA]);

            function u(e) {
                return null == e || i.has(e.country)
            }
        },
        809071: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateSubscriptionInvoicePreview: function() {
                    return f
                },
                useSubscriptionInvoicePreview: function() {
                    return I
                },
                useGetSubscriptionInvoice: function() {
                    return E
                },
                getItemUnitPriceWithDiscount: function() {
                    return p
                }
            }), n("222007");
            var r = n("884691"),
                s = n("446674"),
                a = n("872717"),
                l = n("448993"),
                i = n("195358"),
                u = n("521012"),
                o = n("719923"),
                c = n("49111");
            async function d(e) {
                let {
                    items: t,
                    paymentSourceId: n,
                    trialId: r,
                    code: s,
                    applyEntitlements: u = !1,
                    currency: d,
                    renewal: f,
                    metadata: m
                } = e;
                t = (0, o.coerceExistingItemsToNewItemInterval)(t);
                let _ = {
                    items: t.map(e => {
                        let {
                            planId: t,
                            ...n
                        } = e;
                        return {
                            ...n,
                            plan_id: t
                        }
                    }),
                    payment_source_id: n,
                    trial_id: r,
                    code: s,
                    apply_entitlements: u,
                    currency: d,
                    renewal: f,
                    metadata: m
                };
                try {
                    let e = await a.default.post({
                        url: c.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
                        body: _,
                        oldFormErrors: !0
                    });
                    return i.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new l.BillingError(e)
                }
            }
            async function f(e) {
                let {
                    subscriptionId: t,
                    items: n,
                    paymentSourceId: r,
                    renewal: s,
                    currency: u,
                    applyEntitlements: d = !1,
                    analyticsLocations: f,
                    analyticsLocation: m
                } = e;
                null != n && (n = (0, o.coerceExistingItemsToNewItemInterval)(n));
                let _ = {
                    items: null == n ? void 0 : n.map(e => {
                        let {
                            planId: t,
                            ...n
                        } = e;
                        return {
                            ...n,
                            plan_id: t
                        }
                    }),
                    payment_source_id: r,
                    renewal: s,
                    apply_entitlements: d,
                    currency: u
                };
                try {
                    let e = await a.default.patch({
                        url: c.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(t),
                        query: {
                            location: m,
                            location_stack: f
                        },
                        body: _,
                        oldFormErrors: !0
                    });
                    return i.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new l.BillingError(e)
                }
            }
            async function m(e) {
                let {
                    subscriptionId: t,
                    preventFetch: n
                } = e;
                if (n) return null;
                let r = await a.default.get({
                    url: c.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
                    oldFormErrors: !0
                });
                return i.default.createInvoiceFromServer(r.body)
            }

            function _(e, t) {
                let {
                    preventFetch: n = !1
                } = e, [a, l] = (0, r.useState)(null), [i, o] = (0, r.useState)(null), c = (0, s.useStateFromStores)([u.default], () => u.default.getSubscriptions());
                return (0, r.useEffect)(() => {
                    let e = !1;
                    async function r() {
                        try {
                            o(null), l(null);
                            let n = await t();
                            !e && l(n)
                        } catch (t) {
                            !e && o(t)
                        }
                    }
                    return !n && r(), () => {
                        e = !0
                    }
                }, [n, t, c]), [a, i]
            }

            function I(e) {
                if ("subscriptionId" in e && null == e.subscriptionId) {
                    let {
                        subscriptionId: t,
                        ...n
                    } = e;
                    e = n
                }
                let t = (0, r.useCallback)(() => "subscriptionId" in e ? f(e) : "items" in e ? d(e) : null, [JSON.stringify(e)]);
                return _(e, t)
            }

            function E(e) {
                let t = (0, r.useCallback)(() => m(e), [JSON.stringify(e)]);
                return _(e, t)
            }

            function p(e) {
                let t = e.subscriptionPlanPrice;
                return e.discounts.forEach(n => {
                    let r = n.amount / e.quantity;
                    t -= r
                }), t
            }
        },
        968532: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CheckoutV2ChildExperiments: function() {
                    return s
                },
                default: function() {
                    return i
                }
            });
            var r, s, a = n("862205");
            (r = s || (s = {}))[r.NONE = 0] = "NONE", r[r.BROWSER_AUTOFILL = 1] = "BROWSER_AUTOFILL", r[r.MERGE_PLAN_SELECT_TO_REVIEW = 2] = "MERGE_PLAN_SELECT_TO_REVIEW";
            let l = (0, a.createExperiment)({
                id: "2023-08_checkout_v2_parent",
                label: "Checkout V2 Parent",
                kind: "user",
                defaultConfig: {
                    experiment: 0
                },
                treatments: [{
                    id: 1,
                    label: "Browser Autofill",
                    config: {
                        experiment: 1
                    }
                }, {
                    id: 2,
                    label: "Merge Plan Select to Review",
                    config: {
                        experiment: 2
                    }
                }]
            });
            var i = l
        },
        921149: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsPrepaidPaymentPastDue: function() {
                    return f
                }
            });
            var r = n("866227"),
                s = n.n(r),
                a = n("446674"),
                l = n("357957"),
                i = n("10514"),
                u = n("521012"),
                o = n("719923"),
                c = n("49111"),
                d = n("843455");

            function f() {
                let e = (0, a.useStateFromStores)([u.default], () => u.default.getPremiumTypeSubscription()),
                    t = (0, a.useStateFromStores)([i.default], () => null != e && null != e.planIdFromItems ? i.default.get(null == e ? void 0 : e.planIdFromItems) : null),
                    n = (0, a.useStateFromStores)([l.default], () => null != e && null != e.paymentSourceId ? l.default.getPaymentSource(e.paymentSourceId) : null, [e]),
                    r = null != n && d.PREPAID_PAYMENT_SOURCES.has(n.type),
                    f = (null == e ? void 0 : e.status) === c.SubscriptionStatusTypes.PAST_DUE ? s().diff(s(e.currentPeriodStart), "days") : 0;
                return !!(null != e && null != t && (0, o.isPremiumBaseSubscriptionPlan)(t.id)) && r && f >= 0 && f <= (0, o.getBillingGracePeriodDays)(e) && e.status === c.SubscriptionStatusTypes.PAST_DUE && !e.isPurchasedExternally
            }
        },
        279171: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useShouldShowLegacyPricingNotice: function() {
                    return E
                },
                default: function() {
                    return p
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("414456"),
                a = n.n(s),
                l = n("627445"),
                i = n.n(l),
                u = n("423487"),
                o = n("701909"),
                c = n("35188"),
                d = n("391533"),
                f = n("296253"),
                m = n("49111"),
                _ = n("782340"),
                I = n("712109");

            function E() {
                let e = (0, f.default)(),
                    {
                        enabled: t
                    } = c.default.useExperiment({
                        location: "5ebfcf_1"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        enabled: n
                    } = d.default.useExperiment({
                        location: "5ebfcf_2"
                    }, {
                        autoTrackExposure: !1
                    });
                return null != e && ("PL" === e ? t : "TR" === e && n)
            }
            var p = e => {
                var t, n;
                let {
                    fromBoostCancelModal: s,
                    className: l
                } = e, c = (0, f.default)(), d = E();
                if (!d) return null;
                return i(null != c, "Subscription billing country should not be null"), (0, r.jsxs)("div", {
                    className: a(I.noticeRoot, l),
                    children: [(0, r.jsx)("div", {
                        className: I.iconContainer,
                        children: (0, r.jsx)(u.default, {
                            className: I.infoIcon
                        })
                    }), (0, r.jsx)("div", {
                        className: I.text,
                        children: (t = c, n = s, "PL" === t ? n ? _.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : _.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : "TR" === t ? n ? _.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : _.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : n ? _.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : _.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING).format({
                            helpCenterLink: o.default.getArticleURL(m.HelpdeskArticles.LOCALIZED_PRICING)
                        })
                    })]
                })
            }
        },
        824734: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("414456"),
                a = n.n(s),
                l = n("153160"),
                i = n("646718"),
                u = n("782340"),
                o = n("552033");

            function c(e) {
                let {
                    price: t,
                    currency: n,
                    intervalType: s,
                    className: c,
                    intervalCount: d = 1,
                    isPrepaidPaymentSource: f = !1
                } = e, m = (0, l.formatPrice)(t, n), _ = null;
                return s === i.SubscriptionIntervalTypes.YEAR ? _ = u.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
                    price: m
                }) : s === i.SubscriptionIntervalTypes.MONTH && 1 === d ? _ = u.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
                    price: m
                }) : s === i.SubscriptionIntervalTypes.MONTH && d > 1 && (_ = u.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
                    price: m,
                    intervalCount: d
                })), (0, r.jsx)("div", {
                    className: a(o.pricePerInterval, c),
                    "data-testid": "PricePerInterval-".concat(n),
                    children: null == s || f ? (0, r.jsx)("strong", {
                        children: m
                    }) : _
                })
            }
        },
        705820: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                a = n("77078"),
                l = n("850391"),
                i = n("149022"),
                u = n("681060"),
                o = n("570697"),
                c = n("233069"),
                d = n("49111"),
                f = n("782340"),
                m = n("809331");
            let _ = (0, c.createChannelRecord)({
                id: "1",
                type: d.ChannelTypes.DM
            });

            function I(e) {
                let {
                    sectionTitle: t,
                    errors: n,
                    onTextChange: c,
                    pendingText: d,
                    placeholder: I,
                    currentText: E,
                    disabled: p = !1
                } = e, [S, N] = s.useState(null != d ? d : E), [P, T] = s.useState((0, i.toRichValue)(S)), C = s.useRef(!1);
                return s.useEffect(() => {
                    C.current = !0
                }, []), s.useEffect(() => {
                    if (void 0 === d) {
                        let e = (0, i.toRichValue)(E);
                        N(E), T(e)
                    }
                }, [d, E]), (0, r.jsx)("div", {
                    className: m.body,
                    children: (0, r.jsxs)(o.default, {
                        title: t,
                        errors: n,
                        disabled: p,
                        children: [(0, r.jsx)(u.default, {
                            innerClassName: m.textArea,
                            maxCharacterCount: 190,
                            onChange: function(e, t, n) {
                                t !== S && (N(t), T(n), c(t))
                            },
                            placeholder: I,
                            channel: _,
                            textValue: S,
                            richValue: P,
                            type: l.ChatInputTypes.CUSTOM_GIFT,
                            onBlur: () => {
                                C.current = !1
                            },
                            onFocus: () => {
                                C.current = !0
                            },
                            focused: C.current,
                            onSubmit: function() {
                                return new Promise(e => {
                                    e({
                                        shouldClear: !1,
                                        shouldRefocus: !0
                                    })
                                })
                            }
                        }), (0, r.jsx)(a.HiddenVisually, {
                            children: f.default.Messages.MAXIMUM_LENGTH.format({
                                maxLength: 190
                            })
                        })]
                    })
                })
            }
        },
        623003: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983"),
                s = n("884691"),
                a = n("414456"),
                l = n.n(a),
                i = n("849085");
            let u = s.forwardRef(function(e, t) {
                let {
                    isActive: n,
                    children: s
                } = e;
                return (0, r.jsx)("div", {
                    className: l(i.wrapper, {
                        [i.wrapperActive]: n
                    }),
                    ref: t,
                    children: s
                })
            });
            var o = u
        },
        208559: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftAnimationOptions: function() {
                    return T
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                a = n("77078"),
                l = n("642906"),
                i = n("742926"),
                u = n("68238"),
                o = n("659632"),
                c = n("210721"),
                d = n("78345"),
                f = n("53253"),
                m = n("65324"),
                _ = n("563613"),
                I = n("64798"),
                E = n("782340"),
                p = n("734203");
            let S = [d.PremiumGiftStyles.BOX, d.PremiumGiftStyles.CUP, d.PremiumGiftStyles.SNOWGLOBE],
                N = [d.PremiumGiftStyles.STANDARD_BOX, d.PremiumGiftStyles.CAKE, d.PremiumGiftStyles.COFFEE, d.PremiumGiftStyles.CHEST],
                P = () => (0, r.jsxs)("div", {
                    className: p.giftBoxHeaderContainer,
                    children: [(0, r.jsx)(a.Heading, {
                        variant: "heading-deprecated-12/semibold",
                        className: p.giftBoxHeaderText,
                        children: E.default.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX
                    }), (0, r.jsx)(a.Tooltip, {
                        text: E.default.Messages.SEASONAL_GIFTING_INFO_TOOLTIP,
                        position: "top",
                        children: e => (0, r.jsx)(a.Clickable, {
                            ...e,
                            className: p.infoIconContainer,
                            "aria-label": E.default.Messages.SEASONAL_GIFTING_INFO_TOOLTIP,
                            children: (0, r.jsx)(u.default, {
                                className: p.infoIcon
                            })
                        })
                    })]
                }),
                T = e => {
                    let {
                        selectedGiftStyle: t,
                        setSelectedGiftStyle: n,
                        emojiConfetti: u,
                        soundEffect: d,
                        setEmojiConfetti: T,
                        setSoundEffect: C
                    } = e, {
                        giftRecipient: A
                    } = (0, l.usePaymentContext)(), [O, h] = s.useState(!1), R = s.useRef(null), g = (0, a.useRadioGroup)({
                        orientation: "horizontal"
                    }), {
                        enabled: M
                    } = f.default.getCurrentConfig({
                        location: "premiumGiftSelect_GiftAnimationOptions"
                    }), v = (0, o.getGiftExperience)(A, !0, "premiumGiftSelect_GiftAnimationOptions"), x = v !== o.GiftExperience.DEFAULT, y = o.GIFT_EXPERIENCES_WITH_CUSTOM_EMOJI_SOUNDBOARD.has(v), L = null;
                    return M ? L = S : x && (L = N), (0, r.jsxs)("div", {
                        children: [M && (0, r.jsx)(P, {}), x && (0, r.jsxs)("div", {
                            className: p.giftMainAnimation,
                            children: [null != t ? (0, r.jsx)(m.default, {
                                giftStyle: t,
                                defaultAnimationState: c.AnimationState.ACTION,
                                idleAnimationState: c.AnimationState.LOOP,
                                shouldAnimate: !0,
                                className: p.animation
                            }) : (0, r.jsx)(a.Spinner, {
                                className: p.spinner
                            }), y && (0, r.jsxs)("div", {
                                className: p.soundEmojiContainer,
                                children: [(0, r.jsx)("div", {
                                    className: p.sound,
                                    children: (0, r.jsx)(i.default, {
                                        sound: d,
                                        onSelect: e => {
                                            null != C && C(null == e ? void 0 : e)
                                        }
                                    })
                                }), (0, r.jsx)("div", {
                                    className: p.emoji,
                                    children: (0, r.jsx)(_.default, {
                                        setEmojiConfetti: T,
                                        emojiConfetti: null == u ? void 0 : u
                                    })
                                })]
                            })]
                        }), (0, r.jsx)("div", {
                            tabIndex: null != t || O ? void 0 : 0,
                            onFocus: e => {
                                var t;
                                e.target === e.currentTarget && (null === (t = R.current) || void 0 === t || t.focus())
                            },
                            className: p.giftBoxOptionContainer,
                            "aria-label": E.default.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX,
                            ...g,
                            children: null != L && L.map((e, s) => (0, r.jsx)(I.GiftStaticOption, {
                                isSelected: t === e,
                                giftStyle: e,
                                setSelectedGiftStyle: n,
                                ref: 0 === s ? R : null,
                                onFocus: () => h(!0),
                                onBlur: () => h(!1)
                            }, e))
                        }), (0, r.jsx)("div", {
                            className: p.selectPlanDivider
                        })]
                    })
                }
        },
        563613: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007"), n("781738");
            var r = n("37983"),
                s = n("884691"),
                a = n("77078"),
                l = n("86678"),
                i = n("46829"),
                u = n("49111"),
                o = n("958706"),
                c = n("782340"),
                d = n("347609");
            let f = {
                    section: u.AnalyticsSections.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
                    openPopoutType: "gift_effect_emoji_picker"
                },
                m = o.EmojiIntention.GIFT;

            function _(e) {
                let {
                    setEmojiConfetti: t,
                    emojiConfetti: n
                } = e, [u, o] = s.useState(!1), _ = e => (0, r.jsxs)("div", {
                    className: d.customGiftContent,
                    children: [(0, r.jsxs)("div", {
                        className: d.customGiftHeader,
                        children: [(0, r.jsx)(a.Text, {
                            variant: "text-md/bold",
                            children: c.default.Messages.GIFT_SELECT_EMOJI
                        }), (0, r.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            children: c.default.Messages.GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION
                        })]
                    }), e]
                }), I = e => {
                    null != t && (t(e), o(!1))
                };
                return (0, r.jsx)(a.Popout, {
                    shouldShow: u,
                    position: "bottom",
                    align: "left",
                    autoInvert: !1,
                    onRequestClose: () => o(!1),
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, r.jsx)(l.default, {
                            analyticsOverride: f,
                            closePopout: t,
                            onSelectEmoji: I,
                            wrapper: "div",
                            pickerIntention: m,
                            disableEmojiTutorialFlow: !0,
                            renderHeader: _,
                            headerClassName: d.emojiHeader,
                            className: d.emojiList,
                            listHeaderClassName: d.emojiList,
                            searchProps: {
                                accessory: (0, r.jsx)(r.Fragment, {})
                            }
                        })
                    },
                    children: () => (0, r.jsx)("div", {
                        className: d.container,
                        children: (0, r.jsx)(a.Clickable, {
                            className: d.emoji,
                            onClick: () => o(!0),
                            children: (null == n ? void 0 : n.name) == null ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(i.default, {
                                    className: d.emojiIcon,
                                    width: 14,
                                    height: 14
                                }), (0, r.jsx)(a.Text, {
                                    className: d.text,
                                    variant: "text-sm/semibold",
                                    children: c.default.Messages.GIFT_SELECT_EMOJI
                                })]
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(a.Text, {
                                    className: d.textSelected,
                                    variant: "text-sm/semibold",
                                    children: n.optionallyDiverseSequence
                                }), (0, r.jsx)(a.Text, {
                                    className: d.text,
                                    variant: "text-sm/semibold",
                                    children: n.name.replace(/_/g, " ")
                                })]
                            })
                        })
                    })
                })
            }
        },
        64798: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftStaticOption: function() {
                    return m
                }
            });
            var r = n("37983"),
                s = n("884691"),
                a = n("77078"),
                l = n("78345"),
                i = n("107342"),
                u = n("361396"),
                o = n("291059"),
                c = n("356057"),
                d = n("892712");
            let f = {
                    [l.PremiumGiftStyles.STANDARD_BOX]: u,
                    [l.PremiumGiftStyles.CAKE]: o,
                    [l.PremiumGiftStyles.CHEST]: c,
                    [l.PremiumGiftStyles.COFFEE]: d,
                    [l.PremiumGiftStyles.SNOWGLOBE]: "",
                    [l.PremiumGiftStyles.BOX]: "",
                    [l.PremiumGiftStyles.CUP]: "",
                    [l.PremiumGiftStyles.SEASONAL_CAKE]: "",
                    [l.PremiumGiftStyles.SEASONAL_CHEST]: "",
                    [l.PremiumGiftStyles.SEASONAL_COFFEE]: "",
                    [l.PremiumGiftStyles.SEASONAL_STANDARD_BOX]: ""
                },
                m = s.forwardRef(function(e, t) {
                    let {
                        isSelected: n,
                        giftStyle: s,
                        setSelectedGiftStyle: l,
                        onFocus: u,
                        onBlur: o
                    } = e;
                    return (0, r.jsx)(a.Clickable, {
                        innerRef: t,
                        className: i.clickable,
                        onClick: () => l(s),
                        onFocus: u,
                        onBlur: o,
                        children: (0, r.jsx)("img", {
                            style: {
                                width: "100%",
                                height: "100%"
                            },
                            alt: "",
                            src: f[s],
                            className: n ? i.customGiftBoxHighlighted : i.customGiftBox
                        })
                    })
                })
        },
        177998: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("77078"),
                a = n("782340"),
                l = n("816318"),
                i = e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, r.jsx)(s.Anchor, {
                        onClick: t,
                        className: l.link,
                        children: a.default.Messages.BACK
                    })
                }
        },
        570727: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumSwitchPlanSelectBody: function() {
                    return w
                },
                PremiumSwitchPlanSelectFooter: function() {
                    return H
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                a = n("627445"),
                l = n.n(a),
                i = n("446674"),
                u = n("77078"),
                o = n("405932"),
                c = n("798609"),
                d = n("642906"),
                f = n("85336"),
                m = n("883558"),
                _ = n("10514"),
                I = n("521012"),
                E = n("659632"),
                p = n("701909"),
                S = n("773336"),
                N = n("719923"),
                P = n("153160"),
                T = n("916187"),
                C = n("968532"),
                A = n("15733"),
                O = n("154889"),
                h = n("917247"),
                R = n("279171"),
                g = n("883662"),
                M = n("824734"),
                v = n("705820"),
                x = n("208559"),
                y = n("177998"),
                L = n("661128"),
                b = n("26785"),
                j = n("617223"),
                G = n("646718"),
                D = n("49111"),
                U = n("843455"),
                B = n("782340"),
                F = n("33769");

            function w(e) {
                var t, n, a, f, m, I;
                let {
                    premiumSubscription: S,
                    skuId: C,
                    selectedPlanId: y,
                    setSelectedPlanId: L,
                    isGift: w = !1,
                    selectedGiftStyle: H,
                    setSelectedGiftStyle: k,
                    priceOptions: Y,
                    planOptions: W,
                    eligibleForMultiMonthPlans: Z,
                    referralTrialOfferId: V,
                    subscriptionPeriodEnd: K,
                    showTotal: z = !0,
                    customGiftMessage: J,
                    emojiConfetti: X,
                    soundEffect: q,
                    setCustomGiftMessage: Q,
                    setEmojiConfetti: $,
                    setSoundEffect: ee,
                    discountInvoiceItems: et
                } = e, {
                    activeSubscription: en,
                    setSelectedPlanId: er,
                    selectedSkuId: es,
                    giftRecipient: ea,
                    selectedPlan: el,
                    priceOptions: ei
                } = (0, d.usePaymentContext)(), eu = (0, E.isCustomGiftEnabled)(ea), eo = w && (0, E.shouldShowCustomGiftExperience)(ea, !0, "PremiumSwitchPlanSelectBody");
                C = null != C ? C : es, l(void 0 !== (S = null != S ? S : en), "should not be undefined");
                let [ec, ed] = (0, i.useStateFromStoresArray)([_.default], () => [null != S ? _.default.get(S.planId) : null, null != y ? _.default.get(y) : null]), ef = (0, h.usePremiumTrialOffer)(V), em = null == ef ? void 0 : ef.subscription_trial, e_ = (0, O.usePremiumDiscountOffer)(), eI = null == e_ ? void 0 : null === (t = e_.discount) || void 0 === t ? void 0 : t.plan_ids, eE = null != ed ? ed : el, ep = s.useCallback(e => {
                    null != L ? L(e) : er(e)
                }, [L, er]), eS = null != Y ? Y : ei;
                l(null != eS, "Price option has to be set");
                let eN = null != ef && (0, G.SubscriptionTrials)[ef.trial_id].skus.includes(C),
                    eP = null != e_ && W.some(e => null == eI ? void 0 : eI.includes(e)),
                    eT = (0, N.getPrice)(G.SubscriptionPlans.PREMIUM_MONTH_TIER_2, !1, w, eS);
                s.useEffect(() => {
                    Z && T.default.trackExposure({
                        location: "5f89bb_1"
                    })
                }, [Z]);
                let eC = (null == eE ? void 0 : eE.id) != null && W.includes(eE.id);
                s.useEffect(() => {
                    if (!eC) {
                        if (null == ec || w) ep(W[0]);
                        else if (null != ec) {
                            let e = W.find(e => e !== ec.id);
                            null != e && ep(e)
                        }
                    }
                }, [eC, w, W, ec, ep]);
                let eA = !eo && (w || !eN && !eP) && eC && z,
                    eO = (0, u.useRadioGroup)(),
                    eh = (null == eE ? void 0 : eE.id) != null ? (0, N.getPrice)(eE.id, !1, w, eS) : void 0,
                    {
                        ipCountryCode: eR
                    } = (0, A.default)(),
                    eg = "HR" === eR && null != eh && eh.currency === U.CurrencyCodes.EUR,
                    eM = (0, N.isPrepaidPaymentSource)(eS.paymentSourceId),
                    ev = (null == em ? void 0 : em.interval) === G.SubscriptionIntervalTypes.DAY ? B.default.Messages.BILLING_TRIAL_2_WEEK_PERIOD : B.default.Messages.BILLING_TRIAL_30_DAY_PERIOD,
                    ex = !w && (eP || null != em && eN && null != K),
                    ey = null == et ? void 0 : null === (f = et.find(e => e.subscriptionPlanId === G.SubscriptionPlans.PREMIUM_MONTH_TIER_2)) || void 0 === f ? void 0 : null === (a = f.discounts) || void 0 === a ? void 0 : null === (n = a.find(e => e.type === c.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === n ? void 0 : n.amount;
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)("div", {
                        className: eo ? F.stepBodyCustomGift : F.stepBody,
                        children: [(0, r.jsxs)("div", {
                            className: eo ? F.bodyColumnMiddle : void 0,
                            children: [(0, r.jsx)(R.default, {
                                fromBoostCancelModal: !1,
                                className: F.legacyPricingNotice
                            }), eo && null != H && (0, r.jsx)(x.GiftAnimationOptions, {
                                emojiConfetti: X,
                                setEmojiConfetti: $,
                                setSoundEffect: ee,
                                soundEffect: q,
                                selectedGiftStyle: H,
                                setSelectedGiftStyle: k
                            })]
                        }), (0, r.jsxs)("div", {
                            className: eo ? F.bodyColumnRight : void 0,
                            children: [eu && (0, r.jsx)(j.SendGiftToUser, {
                                giftRecipient: ea
                            }), (() => {
                                if (eu && null != Q) return (0, r.jsx)(v.default, {
                                    sectionTitle: B.default.Messages.GIFT_OPTIONAL_MESSAGE,
                                    onTextChange: e => Q(e),
                                    pendingText: J,
                                    currentText: J
                                })
                            })(), null != ec && !w && (0, r.jsx)("div", {
                                className: F.bodyText,
                                children: function(e, t) {
                                    let n = B.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
                                        r = B.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
                                        s = (() => {
                                            switch (e.interval) {
                                                case G.SubscriptionIntervalTypes.YEAR:
                                                    return n;
                                                case G.SubscriptionIntervalTypes.MONTH:
                                                default:
                                                    return r
                                            }
                                        })(),
                                        a = e.skuId;
                                    switch (t) {
                                        case G.PremiumSubscriptionSKUs.TIER_0:
                                            switch (a) {
                                                case G.PremiumSubscriptionSKUs.TIER_1:
                                                    return B.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                                                case G.PremiumSubscriptionSKUs.TIER_2:
                                                    return B.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                                                default:
                                                    return s
                                            }
                                        case G.PremiumSubscriptionSKUs.TIER_1:
                                            switch (a) {
                                                case G.PremiumSubscriptionSKUs.TIER_0:
                                                    return B.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                                                case G.PremiumSubscriptionSKUs.TIER_2:
                                                    return B.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                                                default:
                                                    return s
                                            }
                                        case G.PremiumSubscriptionSKUs.TIER_2:
                                            switch (a) {
                                                case G.PremiumSubscriptionSKUs.TIER_0:
                                                case G.PremiumSubscriptionSKUs.TIER_1:
                                                    return B.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                                                case G.PremiumSubscriptionSKUs.TIER_2:
                                                    return e.interval === G.SubscriptionIntervalTypes.MONTH ? B.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format({
                                                        numFreeGuildSubscriptions: G.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
                                                    }) : s;
                                                default:
                                                    return s
                                            }
                                        default:
                                            return s
                                    }
                                }(ec, C)
                            }), (m = eN, I = eP, eo ? (0, r.jsx)(u.FormTitle, {
                                children: B.default.Messages.GIFT_SUBSCRIPTION_SELECTION
                            }) : ex ? m ? (0, r.jsxs)("div", {
                                children: [(0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: F.trialPlanSelectHeader,
                                    children: B.default.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format({
                                        trialEnd: K,
                                        trialPeriod: ev
                                    })
                                }), (0, r.jsx)("hr", {
                                    className: F.planSelectSeparator
                                })]
                            }) : I && null != ey && null != eT ? (0, r.jsxs)("div", {
                                children: [(0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: F.trialPlanSelectHeader,
                                    children: B.default.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO.format({
                                        discountedPrice: (0, P.formatPrice)(eT.amount - ey, eT.currency),
                                        regularPrice: (0, P.formatPrice)(eT.amount, eT.currency)
                                    })
                                }), (0, r.jsx)("hr", {
                                    className: F.planSelectSeparator
                                })]
                            }) : void 0 : (0, r.jsx)("div", {
                                className: F.selectPlanChooseTitle,
                                children: B.default.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE
                            })), (0, r.jsx)("div", {
                                ...eO,
                                children: W.map(e => (0, r.jsx)(b.default, {
                                    planId: e,
                                    isGift: w,
                                    premiumSubscription: w ? null : null != S ? S : null,
                                    selectPlan: ep,
                                    selected: (null == eE ? void 0 : eE.id) === e,
                                    priceOptions: eS,
                                    shouldShowUpdatedPaymentModal: ex,
                                    isEligibleForDiscount: eP,
                                    discountAmountOff: ey
                                }, e))
                            }), (0, r.jsx)("div", {
                                children: eA && null != eE && null != eh ? (0, r.jsxs)("div", {
                                    children: [(0, r.jsx)("div", {
                                        className: F.selectPlanDivider
                                    }), (0, r.jsx)(g.PremiumInvoiceTableTotalRow, {
                                        label: B.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                                        value: (0, r.jsx)(M.default, {
                                            price: eh.amount,
                                            currency: eh.currency,
                                            intervalType: w ? null : eE.interval,
                                            intervalCount: eE.intervalCount,
                                            isPrepaidPaymentSource: eM
                                        }),
                                        className: F.selectPlanTotalRow
                                    })]
                                }) : null
                            }), eg && (0, r.jsx)(o.default, {
                                message: B.default.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
                                    kunaPriceWithCurrency: (0, P.formatPrice)(7.5345 * eh.amount, U.CurrencyCodes.HRK)
                                })
                            }), !w && !ex && z && (0, r.jsx)(o.default, {
                                message: B.default.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
                                    documentationLink: p.default.getArticleURL(D.HelpdeskArticles.LOCALIZED_PRICING)
                                })
                            })]
                        })]
                    })
                })
            }

            function H(e) {
                let {
                    onStepChange: t,
                    selectedPlanId: n,
                    isGift: s,
                    paymentSources: a,
                    onBackClick: l,
                    showBackButton: i,
                    planOptions: o,
                    shouldRenderUpdatedPaymentModal: c = !1,
                    isTrial: f
                } = e, {
                    paymentSources: m,
                    selectedPlan: _
                } = (0, d.usePaymentContext)();
                return a = null != a ? a : m, n = null != n ? n : null == _ ? void 0 : _.id, (0, r.jsxs)(r.Fragment, {
                    children: [null != n && o.includes(n) ? (0, r.jsx)(k, {
                        paymentSources: a,
                        onStepChange: t,
                        selectedPlanId: n,
                        isGift: s,
                        shouldRenderUpdatedPaymentModal: c,
                        isTrial: f
                    }) : (0, r.jsx)(u.Button, {
                        disabled: !0,
                        children: B.default.Messages.SELECT
                    }), i ? (0, r.jsx)(y.default, {
                        onClick: l
                    }) : null]
                })
            }

            function k(e) {
                let {
                    onStepChange: t,
                    selectedPlanId: n,
                    isGift: s,
                    paymentSources: a,
                    shouldRenderUpdatedPaymentModal: l,
                    isTrial: o
                } = e, c = (0, i.useStateFromStores)([I.default], () => I.default.getPremiumTypeSubscription()), {
                    hasEntitlements: d
                } = (0, L.useSubscriptionEntitlements)(n, s), _ = null != c && null != c.paymentSourceId || Object.keys(a).length > 0 || d && !o;
                var E = l ? B.default.Messages.NEXT : B.default.Messages.SELECT,
                    p = f.Step.ADD_PAYMENT_STEPS;
                return _ ? p = f.Step.REVIEW : (0, S.isDesktop)() && function() {
                    let {
                        experiment: e
                    } = C.default.getCurrentConfig({
                        location: "5f89bb_2"
                    });
                    if (e === C.CheckoutV2ChildExperiments.BROWSER_AUTOFILL) {
                        let {
                            enabled: e
                        } = m.default.getCurrentConfig({
                            location: "5f89bb_3"
                        }, {
                            autoTrackExposure: !0
                        });
                        return e
                    }
                    return !1
                }() && (p = f.Step.AWAITING_BROWSER_CHECKOUT, E = B.default.Messages.CONTINUE_IN_BROWSER), (0, r.jsx)(u.Button, {
                    onClick: () => t(p),
                    children: E
                })
            }
        },
        26785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("414456"),
                a = n.n(s),
                l = n("627445"),
                i = n.n(l),
                u = n("446674"),
                o = n("669491"),
                c = n("77078"),
                d = n("642906"),
                f = n("915639"),
                m = n("10514"),
                _ = n("659632"),
                I = n("719923"),
                E = n("153160"),
                p = n("646718"),
                S = n("782340"),
                N = n("419063");

            function P(e) {
                let {
                    premiumSubscription: t,
                    planId: n,
                    selectPlan: s,
                    selected: l,
                    isGift: P,
                    priceOptions: T,
                    shouldShowUpdatedPaymentModal: C,
                    isEligibleForDiscount: A,
                    discountAmountOff: O
                } = e, h = (0, u.useStateFromStores)([f.default], () => f.default.locale), R = (0, u.useStateFromStores)([m.default], () => m.default.get(n)), {
                    giftRecipient: g
                } = (0, d.usePaymentContext)(), M = P && (0, _.shouldShowCustomGiftExperience)(g, !0, "PremiumSwitchPlanSelectOption");
                i(null != R, "Missing subscriptionPlan");
                let v = null != t && t.planId === n,
                    x = v || n === p.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && null != t && [p.SubscriptionPlans.PREMIUM_YEAR_TIER_0, p.SubscriptionPlans.PREMIUM_YEAR_TIER_1].includes(t.planId),
                    y = p.DISCOUNTS[n],
                    L = (0, I.getPrice)(n, !1, P, T),
                    b = (0, I.isPrepaidPaymentSource)(T.paymentSourceId),
                    j = null != y && !C,
                    G = R.interval === p.SubscriptionIntervalTypes.YEAR ? S.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : S.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
                    D = () => null != y && (0, r.jsx)(c.Text, {
                        tag: "span",
                        variant: "eyebrow",
                        color: "always-white",
                        className: N.planOptionDiscount,
                        children: S.default.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
                            discount: (0, E.formatPercent)(h, y / 100)
                        })
                    }),
                    U = () => R.interval === p.SubscriptionIntervalTypes.YEAR && null != t || j && !v ? R.interval === p.SubscriptionIntervalTypes.YEAR && null != t ? (0, r.jsxs)("span", {
                        className: N.planOptionMonthsFree,
                        children: ["(", S.default.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS, ")"]
                    }) : j && !v ? D() : void 0 : null;
                return (0, r.jsxs)(c.Clickable, {
                    role: M ? "menuitem" : "radio",
                    "aria-checked": l,
                    tabIndex: l ? 0 : -1,
                    focusProps: {
                        offset: {
                            left: -4,
                            right: -4,
                            top: 0,
                            bottom: 0
                        }
                    },
                    onClick: x ? void 0 : () => s(n),
                    className: a(N.planOptionClickableContainer, {
                        [N.selectedPlan]: M && l,
                        [N.selectionBox]: M
                    }),
                    children: [(0, r.jsxs)("div", {
                        className: a(N.planOption, {
                            [N.planOptionDisabled]: x
                        }),
                        children: [(0, r.jsxs)("div", {
                            className: N.planOptionClickable,
                            children: [!M && (0, r.jsx)(c.Checkbox, {
                                readOnly: !0,
                                displayOnly: !0,
                                value: l,
                                shape: c.Checkbox.Shapes.ROUND,
                                color: o.default.unsafe_rawColors.BRAND_500.css,
                                type: c.Checkbox.Types.INVERTED,
                                className: N.planOptionCheckbox
                            }), (0, r.jsxs)("div", {
                                children: [(0, r.jsxs)("div", {
                                    className: a(N.planOptionInterval, {
                                        [N.optionSelected]: l || M,
                                        [N.updatedOptionSelected]: C && (l || M)
                                    }),
                                    children: [(0, I.getIntervalString)(R.interval, P, b, R.intervalCount, M, (0, I.getPremiumType)(R.id)), M && U()]
                                }), M && (0, r.jsx)("div", {
                                    className: N.planOneTimeCost,
                                    children: S.default.Messages.ONE_TIME_CHARGE.format({
                                        currencyAmount: (0, E.formatPrice)(L.amount, L.currency)
                                    })
                                })]
                            }), v && (0, r.jsxs)("span", {
                                className: N.planOptionCurrentPlan,
                                children: ["(", S.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, ")"]
                            }), !M && U()]
                        }), C ? (0, r.jsx)("div", {
                            className: a({
                                [N.optionPriceSelected]: l
                            }),
                            children: S.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                price: (() => {
                                    if (A && null != O) return R.interval === p.SubscriptionIntervalTypes.MONTH ? (0, E.formatPrice)(L.amount - O, L.currency) : (0, E.formatPrice)(L.amount, L.currency);
                                    return (0, E.formatPrice)(0, L.currency, {
                                        maximumFractionDigits: 0
                                    })
                                })()
                            })
                        }) : (0, r.jsx)("div", {
                            className: a({
                                [N.optionSelected]: l || M
                            }),
                            children: (0, E.formatPrice)(L.amount, L.currency)
                        })]
                    }), C && (0, r.jsx)("div", {
                        className: N.planOptionSubtextContainer,
                        children: (0, r.jsx)(c.Text, {
                            variant: "text-md/normal",
                            color: l ? "text-normal" : "interactive-normal",
                            className: a(N.planOptionSubtext, {
                                [N.discountPlanOptionSubtext]: A
                            }),
                            children: A && null != O ? R.interval === p.SubscriptionIntervalTypes.MONTH ? S.default.Messages.BILLING_DISCOUNT_MONTHLY_PRICE.format({
                                discountedPrice: (0, E.formatPrice)(L.amount - O, L.currency),
                                regularPrice: (0, E.formatPrice)(L.amount, L.currency)
                            }) : S.default.Messages.BILLING_YEARLY_PLAN_SAVINGS.format({
                                percent: y
                            }) : G.format({
                                price: (0, E.formatPrice)(L.amount, L.currency)
                            })
                        })
                    })]
                })
            }
        },
        617223: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SendGiftToUser: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("77078"),
                a = n("87657"),
                l = n("158998"),
                i = n("782340"),
                u = n("438269");
            let o = e => {
                let {
                    giftRecipient: t
                } = e;
                return null == t ? null : (0, r.jsxs)("div", {
                    className: u.content,
                    children: [(0, r.jsx)(s.FormTitle, {
                        children: i.default.Messages.FORM_LABEL_SEND_TO
                    }), (0, r.jsxs)("div", {
                        className: u.giftRecipientInfo,
                        children: [(0, r.jsx)(a.default, {
                            user: t,
                            className: u.giftRecipient,
                            size: s.AvatarSizes.SIZE_20
                        }), (0, r.jsx)(s.Heading, {
                            className: u.giftRecipientName,
                            variant: "text-md/normal",
                            children: l.default.getName(t)
                        }), (0, r.jsx)(s.Heading, {
                            className: u.giftRecipientTag,
                            variant: "text-md/normal",
                            children: l.default.getUserTag(t)
                        })]
                    })]
                })
            }
        },
        527866: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return k
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                a = n("627445"),
                l = n.n(a),
                i = n("976979"),
                u = n("446674"),
                o = n("669491"),
                c = n("77078"),
                d = n("335430"),
                f = n("703332"),
                m = n("740055"),
                _ = n("545876"),
                I = n("736978"),
                E = n("642906"),
                p = n("286350"),
                S = n("102492"),
                N = n("176108"),
                P = n("102985"),
                T = n("160299"),
                C = n("10514"),
                A = n("68238"),
                O = n("659632"),
                h = n("719923"),
                R = n("153160"),
                g = n("210721"),
                M = n("809071"),
                v = n("154889"),
                x = n("883662"),
                y = n("623003"),
                L = n("65324"),
                b = n("570727"),
                j = n("146163"),
                G = n("661128"),
                D = n("617223"),
                U = n("646718"),
                B = n("49111"),
                F = n("843455"),
                w = n("782340"),
                H = n("615689");

            function k(e) {
                var t, n, a;
                let k, Y, {
                        selectedPlanId: W,
                        paymentSources: Z,
                        priceOptions: V,
                        currencies: K,
                        onCurrencyChange: z,
                        isGift: J = !1,
                        onPaymentSourceChange: X,
                        handlePaymentSourceAdd: q,
                        setHasAcceptedTerms: Q,
                        legalTermsNodeRef: $,
                        hasLegalTermsFlash: ee,
                        trialId: et,
                        trialFooterMessageOverride: en,
                        reviewWarningMessage: er,
                        metadata: es,
                        purchaseState: ea,
                        hideSubscriptionDetails: el,
                        referralTrialOfferId: ei,
                        isTrial: eu = !1,
                        isDiscount: eo = !1
                    } = e,
                    {
                        isEmbeddedIAP: ec,
                        activeSubscription: ed,
                        selectedSkuId: ef,
                        defaultPlanId: em,
                        selectedGiftStyle: e_,
                        setSelectedGiftStyle: eI,
                        isPremium: eE,
                        giftRecipient: ep,
                        startedPaymentFlowWithPaymentSourcesRef: eS
                    } = (0, E.usePaymentContext)(),
                    eN = (0, v.usePremiumDiscountOffer)(),
                    eP = null == eN ? void 0 : null === (t = eN.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => U.SubscriptionPlanInfo[e].skuId === ef),
                    eT = !J && null != eN && null != ef && eP,
                    eC = (0, u.useStateFromStores)([C.default], () => C.default.get(W));
                l(null != eC, "Missing plan");
                let eA = [{
                        planId: eC.id,
                        quantity: 1
                    }],
                    eO = ea === p.PurchaseState.PURCHASING || ea === p.PurchaseState.COMPLETED,
                    eh = J || eO,
                    [eR, eg] = (0, M.useSubscriptionInvoicePreview)({
                        items: eA,
                        renewal: !1,
                        preventFetch: eh,
                        applyEntitlements: !0,
                        paymentSourceId: V.paymentSourceId,
                        currency: V.currency,
                        trialId: et,
                        metadata: es
                    }),
                    [eM, ev] = (0, M.useSubscriptionInvoicePreview)({
                        items: eA,
                        renewal: !0,
                        preventFetch: eh,
                        trialId: et,
                        paymentSourceId: V.paymentSourceId,
                        currency: V.currency,
                        metadata: es
                    }),
                    [ex, ey] = (0, M.useSubscriptionInvoicePreview)({
                        items: [{
                            planId: U.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
                            quantity: 1
                        }],
                        renewal: !0,
                        preventFetch: !eT,
                        trialId: et,
                        paymentSourceId: V.paymentSourceId,
                        currency: V.currency,
                        metadata: es
                    }),
                    eL = J && (0, O.shouldShowCustomGiftExperience)(ep, !0, "PremiumSubscriptionReview"),
                    eb = null !== (a = null != eg ? eg : ev) && void 0 !== a ? a : ey,
                    ej = (0, u.useStateFromStores)([P.default], () => P.default.enabled),
                    eG = V.paymentSourceId,
                    {
                        hasEntitlements: eD,
                        entitlements: eU
                    } = (0, G.useSubscriptionEntitlements)(eC.id, J),
                    eB = (0, h.isPrepaidPaymentSource)(V.paymentSourceId),
                    eF = (0, S.checkNoPaymentTrialEnabled)(et, eG, W),
                    ew = (0, N.inOneStepSubscriptionCheckout)({
                        isTrial: eu,
                        isGift: J,
                        selectedSkuId: ef,
                        startedPaymentFlowWithPaymentSources: eS.current
                    }),
                    [eH, ek] = s.useState(null == eR ? void 0 : eR.subscriptionPeriodEnd);
                s.useEffect(() => {
                    null == eH && ek(null == eR ? void 0 : eR.subscriptionPeriodEnd)
                }, [null == eR ? void 0 : eR.subscriptionPeriodEnd, eH]);
                let eY = s.useMemo(() => (0, h.getPremiumPlanOptions)({
                        skuId: ef,
                        isPremium: eE,
                        multiMonthPlans: [],
                        currentSubscription: ed,
                        isGift: J,
                        isEligibleForTrial: eu,
                        defaultPlanId: em,
                        defaultToMonthlyPlan: !1
                    }), [ef, ed, J, em, eE, eu]),
                    eW = (0, N.planSwitchLoadingShowSpinner)(ew, eR, eC);
                if (null != eb) {
                    let e = eb.message;
                    return eb.code === I.ErrorCodes.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (e = w.default.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY), (0, r.jsx)(c.FormErrorBlock, {
                        children: e
                    })
                }
                if (J) Y = (0, r.jsx)(j.SubscriptionInvoiceGift, {
                    paymentSourceId: V.paymentSourceId,
                    plan: eC,
                    className: H.invoice,
                    isPrepaidPaymentSource: eB,
                    isCustomGift: eL
                });
                else if (eu && null != eR) Y = (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(x.PremiumInvoiceTableDivider, {
                        negativeMarginTop: !0
                    }), (0, r.jsxs)(x.PremiumInvoiceTable, {
                        className: H.invoice,
                        children: [(0, r.jsxs)("div", {
                            className: H.trialPriceLine,
                            children: [(0, r.jsx)(c.Text, {
                                variant: "text-md/bold",
                                children: w.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
                            }), (0, r.jsx)(c.Text, {
                                variant: "text-md/normal",
                                children: w.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                    price: (0, R.formatPrice)(0, eR.currency, {
                                        maximumFractionDigits: 0
                                    })
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: H.afterTrialPriceLine,
                            children: (0, r.jsx)(j.PremiumTrialInvoiceTableRow, {
                                invoice: eR,
                                plan: eC
                            })
                        })]
                    })]
                });
                else {
                    if (null == eR || null == eM || eW) return (0, r.jsx)("div", {
                        className: H.spinnerWrapper,
                        children: (0, r.jsx)(c.Spinner, {})
                    });
                    eu && eR.subscriptionPeriodEnd !== eM.subscriptionPeriodEnd && (k = eR.subscriptionPeriodEnd), Y = (0, r.jsxs)(x.PremiumInvoiceTable, {
                        className: H.invoice,
                        children: [(0, r.jsx)(x.PremiumInvoiceTableHeader, {
                            children: w.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
                        }), (0, r.jsx)(j.PremiumSubscriptionChangePlanInvoiceRows, {
                            invoice: eR,
                            newPlan: eC,
                            isPrepaidPaymentSource: eB,
                            referralTrialOfferId: ei
                        }), eB ? null : (0, r.jsx)(j.SubscriptionInvoiceFooter, {
                            renewalInvoice: eM,
                            isTrial: eu,
                            priceOptions: V,
                            overrideRenewalDate: k,
                            trialFooterMessageOverride: en,
                            hideSubscriptionDetails: el
                        })]
                    })
                }
                let eZ = i.CountryCodesSets.EEA_COUNTRIES.has(T.default.ipCountryCodeWithFallback),
                    {
                        checkboxLabel: eV,
                        checkboxClassname: eK,
                        checkboxLabelClassname: ez
                    } = function(e, t, n) {
                        let r = null,
                            s = null,
                            a = null;
                        if (e && null != t) {
                            let {
                                intervalType: e,
                                intervalCount: l
                            } = h.default.getIntervalForInvoice(t), i = (0, R.formatRate)((0, R.formatPrice)(t.total, t.currency), e, l), u = null != n ? n : t.subscriptionPeriodEnd;
                            r = w.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
                                termsURL: B.MarketingURLs.TERMS,
                                paidURL: B.MarketingURLs.PAID_TERMS,
                                rate: i,
                                renewalDate: u
                            }), s = H.trialCheckbox, a = H.trialCheckboxLabel
                        }
                        return {
                            checkboxLabel: r,
                            checkboxClassname: s,
                            checkboxLabelClassname: a
                        }
                    }(null != eu && eu, eM, k),
                    eJ = w.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                        planName: eC.name
                    });
                return J && !eL ? eJ = w.default.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : J && eL ? eJ = "" : (0, h.isPremiumSubscriptionPlan)(eC.id) && (eJ = h.default.getBillingReviewSubheader(null, eC)), eF ? null : (0, r.jsxs)("div", {
                    className: H.stepBody,
                    children: [null != er && (0, r.jsxs)("div", {
                        className: H.reviewWarningMessageContainer,
                        children: [(0, r.jsx)(A.default, {
                            color: o.default.unsafe_rawColors.YELLOW_300.css,
                            width: 20,
                            height: 20
                        }), (0, r.jsx)(c.Text, {
                            className: H.reviewWarningMessage,
                            variant: "text-sm/normal",
                            children: er
                        })]
                    }), ew && (0, r.jsxs)("div", {
                        children: [(0, r.jsx)(x.PremiumInvoiceTableDivider, {
                            negativeMarginTop: !0
                        }), (0, r.jsx)(b.PremiumSwitchPlanSelectBody, {
                            isGift: J,
                            selectedGiftStyle: e_,
                            setSelectedGiftStyle: eI,
                            planOptions: eY,
                            eligibleForMultiMonthPlans: !1,
                            referralTrialOfferId: void 0,
                            selectedPlanId: W,
                            subscriptionPeriodEnd: eH,
                            showTotal: !1,
                            discountInvoiceItems: eT ? null == ex ? void 0 : ex.invoiceItems : void 0
                        }), (0, r.jsx)(x.PremiumInvoiceTableDivider, {})]
                    }), !eu && (0, r.jsx)(c.FormTitle, {
                        tag: c.FormTitleTags.H5,
                        children: eJ
                    }), eL && null != e_ && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(L.default, {
                            defaultAnimationState: g.AnimationState.LOOP,
                            giftStyle: e_,
                            shouldAnimate: !0,
                            className: H.giftMainAnimation
                        }), (0, r.jsx)(D.SendGiftToUser, {
                            giftRecipient: ep
                        })]
                    }), Y, (0, r.jsxs)("div", {
                        className: H.paymentSourceWrapper,
                        children: [eu ? (0, r.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H5,
                            className: H.formTitle,
                            children: w.default.Messages.BILLING_STEP_PAYMENT_METHOD
                        }) : (0, r.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H5,
                            children: w.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, r.jsx)(m.default, {
                            paymentSources: Object.values(Z),
                            selectedPaymentSourceId: eG,
                            prependOption: eD && !eu ? {
                                label: w.default.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
                                value: null
                            } : null,
                            onChange: X,
                            onPaymentSourceAdd: q,
                            hidePersonalInformation: ej,
                            isTrial: eu
                        }), eD && null == eG ? (0, r.jsx)("div", {
                            className: H.paymentSourceOptionalWarning,
                            children: w.default.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({
                                months: eU.length
                            })
                        }) : null, eo ? null : (0, r.jsxs)(d.CurrencyWrapper, {
                            currencies: K,
                            className: H.currencyWrapper,
                            children: [(0, r.jsx)(c.FormTitle, {
                                tag: c.FormTitleTags.H5,
                                children: w.default.Messages.PAYMENT_CURRENCY
                            }), (0, r.jsx)(d.default, {
                                selectedCurrency: V.currency,
                                currencies: K,
                                onChange: z
                            })]
                        })]
                    }), (0, r.jsx)(y.default, {
                        isActive: ee,
                        ref: $,
                        children: (0, r.jsx)(_.default, {
                            onChange: Q,
                            forceShow: !0,
                            checkboxLabel: eV,
                            checkboxClassname: eK,
                            checkboxLabelClassname: ez,
                            finePrint: (0, r.jsx)(f.default, {
                                hide: eu || eo,
                                subscriptionPlan: eC,
                                renewalInvoice: eM,
                                isGift: J,
                                paymentSourceType: null === (n = Z[null != eG ? eG : ""]) || void 0 === n ? void 0 : n.type,
                                isEmbeddedIAP: ec,
                                basePrice: (0, h.getPrice)(eC.id, !1, J, V)
                            }),
                            showPricingLink: eC.currency !== F.CurrencyCodes.USD,
                            showWithdrawalWaiver: eZ,
                            disabled: eO,
                            isTrial: eu,
                            isDiscount: eo,
                            subscriptionPlan: eC,
                            isGift: J
                        })
                    })]
                })
            }
        },
        451516: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                a = n("627445"),
                l = n.n(a),
                i = n("446674"),
                u = n("77078"),
                o = n("850068"),
                c = n("685665"),
                d = n("642906"),
                f = n("605886"),
                m = n("286350"),
                _ = n("376641"),
                I = n("102492"),
                E = n("926223"),
                p = n("467292"),
                S = n("622839"),
                N = n("145131"),
                P = n("599110"),
                T = n("719923"),
                C = n("921149"),
                A = n("177998"),
                O = n("661128"),
                h = n("868869"),
                R = n("49111"),
                g = n("717913");

            function M(e) {
                let {
                    premiumSubscription: t,
                    setPurchaseState: n,
                    onBack: a,
                    onNext: M,
                    legalTermsNodeRef: v,
                    flashLegalTerms: x,
                    invoiceError: y,
                    planError: L,
                    onPurchaseError: b,
                    baseAnalyticsData: j,
                    flowStartTime: G,
                    isGift: D = !1,
                    giftStyle: U,
                    customGiftMessage: B,
                    emojiConfetti: F,
                    soundEffect: w,
                    trialId: H,
                    planGroup: k,
                    analyticsLocation: Y,
                    purchaseTokenAuthState: W,
                    openInvoiceId: Z,
                    metadata: V,
                    backButtonEligible: K,
                    disablePurchase: z,
                    isTrial: J = !1
                } = e, {
                    selectedPlan: X,
                    priceOptions: q,
                    setHasAcceptedTerms: Q,
                    setPurchaseError: $,
                    purchaseType: ee,
                    paymentSourceId: et,
                    paymentSources: en,
                    selectedSkuId: er,
                    skusById: es,
                    skuPricePreviewsById: ea,
                    referralCode: el,
                    contextMetadata: ei,
                    giftRecipient: eu
                } = (0, d.usePaymentContext)(), eo = null == X ? void 0 : X.id, ec = (0, I.checkNoPaymentTrialEnabled)(H, q.paymentSourceId, eo), ed = (0, i.useStateFromStores)([E.default], () => E.default.popupCallbackCalled), {
                    analyticsLocations: ef
                } = (0, c.default)(), em = null != et ? en[et] : null, [e_, eI] = s.useState(ec), [eE, ep] = s.useState(!1), {
                    hasEntitlements: eS
                } = (0, O.useSubscriptionEntitlements)(eo, D), eN = (0, T.isPrepaidPaymentSource)(q.paymentSourceId), eP = eS || ec, eT = (0, C.useIsPrepaidPaymentPastDue)(), eC = null, eA = null;
                if (ee === R.PurchaseTypes.ONE_TIME) {
                    var eO;
                    l(null != er, "SKU must be selected for one-time purchases"), l(null != (eC = null !== (eO = es[er]) && void 0 !== eO ? eO : null), "SKU must exist and be fetched.");
                    let e = ea[er],
                        t = null != et ? et : S.NO_PAYMENT_SOURCE;
                    eA = null != e ? e[t] : null
                }
                let eh = async () => {
                    await (0, f.purchaseProduct)({
                        setPurchaseState: n,
                        setHasAcceptedTerms: Q,
                        setIsSubmitting: eI,
                        setPurchaseError: $,
                        hasRedirectURL: eE,
                        setHasRedirectURL: ep,
                        isGift: D,
                        giftStyle: U,
                        baseAnalyticsData: j,
                        analyticsLocation: Y,
                        analyticsLocations: ef,
                        flowStartTime: G,
                        subscriptionPlan: X,
                        planGroup: k,
                        trialId: H,
                        priceOptions: q,
                        paymentSource: em,
                        isPrepaidPaymentPastDue: eT,
                        openInvoiceId: Z,
                        premiumSubscription: t,
                        onNext: M,
                        metadata: V,
                        sku: eC,
                        skuPricePreview: eA,
                        purchaseType: ee,
                        referralCode: el,
                        loadId: ei.loadId,
                        giftRecipient: eu,
                        customMessage: B,
                        emojiConfetti: F,
                        soundEffect: w
                    })
                };
                s.useEffect(() => {
                    let e = async () => {
                        if (!0 === ed) try {
                            if (null == E.default.redirectedPaymentId) return;
                            await (0, o.redirectedPaymentSucceeded)(E.default.redirectedPaymentId), P.default.track(R.AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, {
                                ...j,
                                duration_ms: Date.now() - G,
                                payment_source_type: null == em ? void 0 : em.type
                            }), n(m.PurchaseState.COMPLETED), M()
                        } catch (e) {
                            n(m.PurchaseState.FAIL), b(e), P.default.track(R.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                                ...j,
                                payment_source_id: et,
                                payment_source_type: null == em ? void 0 : em.type,
                                duration_ms: Date.now() - G
                            })
                        } finally {
                            eI(!1), (0, o.resetPaymentIntentId)()
                        } else W === p.PurchaseTokenAuthState.SUCCESS && await eh()
                    };
                    e()
                }, [ed]), s.useEffect(() => {
                    ec && !D && null == t && eh()
                }, [ec, D, t]);
                let eR = null != Z || ee === R.PurchaseTypes.ONE_TIME;
                return ec ? null : (0, r.jsxs)(u.ModalFooter, {
                    align: N.default.Align.CENTER,
                    children: [(0, r.jsx)(h.default, {
                        legalTermsNodeRef: v,
                        invoiceError: y,
                        planError: L,
                        disablePurchase: z,
                        flashLegalTerms: x,
                        isSubmitting: e_,
                        premiumSubscription: t,
                        isGift: D,
                        planGroup: k,
                        isPrepaid: eN,
                        isTrial: J,
                        makePurchase: eh,
                        needsPaymentSource: null == em && !eP
                    }), (0, r.jsx)(_.default, {}), K && !eR ? (0, r.jsx)("div", {
                        className: g.back,
                        children: (0, r.jsx)(A.default, {
                            onClick: a
                        })
                    }) : null]
                })
            }
        },
        891653: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("414456"),
                a = n.n(s),
                l = n("77078"),
                i = n("216422"),
                u = n("782340"),
                o = n("881609");

            function c(e) {
                let {
                    text: t = u.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                    className: n
                } = e;
                return (0, r.jsx)(l.Tooltip, {
                    text: t,
                    children: e => (0, r.jsx)(l.Clickable, {
                        ...e,
                        children: (0, r.jsx)(i.default, {
                            className: a(o.nitroWheel, n)
                        })
                    })
                })
            }
        },
        570697: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("781738");
            var r = n("37983");
            n("884691");
            var s = n("414456"),
                a = n.n(s),
                l = n("65597"),
                i = n("77078"),
                u = n("70723"),
                o = n("254490"),
                c = n("891653"),
                d = n("632892"),
                f = n("646718"),
                m = n("326908");

            function _(e) {
                let {
                    errors: t
                } = e;
                return (0, r.jsx)(r.Fragment, {
                    children: t.map((e, t) => (0, r.jsx)(i.Text, {
                        variant: "text-xs/normal",
                        color: "text-danger",
                        className: m.errorMessage,
                        children: e.replace(/[0-9.,]+ ?kb/g, e => {
                            let t = 1024 * parseInt(e, 10);
                            return isNaN(t) ? e : (0, o.sizeString)(t)
                        })
                    }, t))
                })
            }

            function I(e) {
                let {
                    title: t,
                    titleIcon: n,
                    titleId: s,
                    description: o,
                    children: I,
                    className: E,
                    errors: p,
                    disabled: S = !1,
                    hideDivider: N = !1,
                    showBorder: P = !1,
                    borderType: T,
                    hasBackground: C = !1,
                    forcedDivider: A = !1,
                    showPremiumIcon: O = !1
                } = e, h = (0, l.default)([u.default], () => {
                    let e = u.default.activeSubstep;
                    return null != e && f.PremiumTutorialSubstepsToStepMap[e] === f.PremiumTutorialSteps.PROFILE_CUSTOMIZATION
                });
                return (0, r.jsx)("div", {
                    className: a(m.customizationSection, E, {
                        [m.disabled]: S,
                        [m.hideDivider]: N,
                        [m.showBorder]: P,
                        [m.withDivider]: A
                    }),
                    children: (0, r.jsxs)(d.default, {
                        className: m.customizationSectionBorder,
                        backgroundClassName: m.customizationSectionBackground,
                        isShown: P && !h,
                        type: T,
                        hasBackground: C,
                        children: [(0, r.jsxs)(i.FormTitle, {
                            className: m.title,
                            id: s,
                            children: [t, O && (0, r.jsx)(c.default, {}), n]
                        }), null != o ? (0, r.jsx)(i.FormText, {
                            type: i.FormText.Types.DESCRIPTION,
                            className: m.sectionDescription,
                            children: o
                        }) : null, I, null != p && (0, r.jsx)(_, {
                            errors: p
                        })]
                    })
                })
            }
        },
        632892: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FeatureBorderTypes: function() {
                    return s
                },
                default: function() {
                    return d
                }
            });
            var r, s, a = n("37983"),
                l = n("884691"),
                i = n("414456"),
                u = n.n(i),
                o = n("623682");
            (r = s || (s = {})).PREMIUM = "premium", r.LIMITED = "limited";
            let c = {
                premium: {
                    border: o.premiumFeatureBorder,
                    background: o.premiumBackground
                },
                limited: {
                    border: o.limitedFeatureBorder,
                    background: o.limitedBackground
                }
            };
            var d = l.forwardRef(function(e, t) {
                let {
                    children: n,
                    type: r = "premium",
                    isShown: s,
                    hasBackground: l = !1,
                    className: i,
                    backgroundClassName: d
                } = e;
                if (!s) return (0, a.jsx)(a.Fragment, {
                    children: n
                });
                let {
                    border: f,
                    background: m
                } = c[r];
                return (0, a.jsx)("div", {
                    ref: t,
                    className: u(f, i),
                    children: (0, a.jsx)("div", {
                        className: u(l ? m : o.background, d),
                        children: n
                    })
                })
            })
        },
        742926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                a = n("292915"),
                l = n("77078"),
                i = n("389480"),
                u = n("191191"),
                o = n("782340"),
                c = n("895576");
            let d = [54, 8, 8, 8];

            function f(e) {
                let {
                    onSelect: t,
                    sound: n
                } = e, [f, m] = s.useState(!1);

                function _(e) {
                    m(!1), null == t || t(e)
                }
                let I = e => (0, r.jsxs)("div", {
                    className: c.customGiftHeader,
                    children: [(0, r.jsxs)("div", {
                        className: c.customGiftHeaderText,
                        children: [(0, r.jsx)(l.Text, {
                            variant: "text-md/bold",
                            children: o.default.Messages.GIFT_SELECT_SOUND
                        }), (0, r.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            children: o.default.Messages.GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION
                        })]
                    }), (0, r.jsx)("div", {
                        className: c.searchAndSound,
                        children: e
                    })]
                });
                return (0, r.jsx)(l.Popout, {
                    shouldShow: f,
                    position: "bottom",
                    align: "left",
                    onRequestClose: () => m(!1),
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, r.jsx)(l.Dialog, {
                            children: (0, r.jsx)(u.default, {
                                suppressPlaySound: !0,
                                shouldShowUpsell: !1,
                                guildId: null,
                                channel: null,
                                onClose: t,
                                onSelect: _,
                                analyticsSource: "gift soundboard",
                                soundButtonOverlay: i.SoundButtonOverlay.ADD,
                                listPadding: d,
                                renderHeader: I,
                                defaultSoundsOnly: !0
                            })
                        })
                    },
                    children: () => (0, r.jsx)(l.Clickable, {
                        className: c.sound,
                        onClick: () => m(!0),
                        children: null == n ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(a.SoundboardIcon, {
                                className: c.soundIcon,
                                width: 14,
                                height: 14
                            }), (0, r.jsx)(l.Text, {
                                className: c.text,
                                variant: "text-sm/semibold",
                                children: o.default.Messages.GIFT_SELECT_SOUND
                            })]
                        }) : (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(l.Text, {
                                className: c.textSelected,
                                variant: "text-sm/semibold",
                                children: n.emojiName
                            }), (0, r.jsx)(l.Text, {
                                className: c.text,
                                variant: "text-sm/semibold",
                                children: n.name
                            })]
                        })
                    })
                })
            }

            function m(e) {
                let {
                    sound: t,
                    onSelect: n
                } = e;
                return (0, r.jsx)("div", {
                    className: c.container,
                    children: (0, r.jsx)(f, {
                        onSelect: n,
                        sound: t
                    })
                })
            }
        },
        882641: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EMOJI_BUTTON_SPRING_CONFIG: function() {
                    return _
                },
                default: function() {
                    return I
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                a = n("414456"),
                l = n.n(a),
                i = n("301165"),
                u = n("77078"),
                o = n("913144"),
                c = n("474293"),
                d = n("958706"),
                f = n("782340"),
                m = n("505436");
            let _ = {
                tension: 800,
                friction: 24
            };
            var I = function(e) {
                let {
                    tabIndex: t,
                    className: n,
                    renderButtonContents: a,
                    active: I,
                    onClick: E,
                    "aria-controls": p,
                    focusProps: S
                } = e, [N, P] = s.useState(!1), [T, C] = s.useState(0), A = N || I, O = (0, c.getClass)(m, "emojiButton", A ? "Hovered" : "Normal"), h = function(e) {
                    let t = -e % d.EmojiSprites.PickerPerRow * 22,
                        n = -(22 * Math.floor(e / d.EmojiSprites.PickerPerRow));
                    return {
                        backgroundPosition: "".concat(t, "px ").concat(n, "px"),
                        backgroundSize: "".concat(22 * d.EmojiSprites.PickerPerRow, "px ").concat(22 * Math.ceil(d.EmojiSprites.PickerCount / d.EmojiSprites.PickerPerRow), "px")
                    }
                }(T), R = s.useCallback(() => {
                    if (A) return;
                    let e = Math.floor(Math.random() * d.EmojiSprites.PickerCount);
                    P(!0), C(e), o.default.dispatch({
                        type: "EMOJI_INTERACTION_INITIATED",
                        interaction: d.EmojiInteractionPoint.EmojiButtonMouseEntered
                    })
                }, [A, P, C]), g = s.useCallback(() => {
                    P(!1)
                }, [P]), M = s.useCallback(() => {
                    o.default.dispatch({
                        type: "EMOJI_INTERACTION_INITIATED",
                        interaction: d.EmojiInteractionPoint.EmojiButtonFocused
                    })
                }, []);
                return (0, r.jsx)(u.Button, {
                    look: u.Button.Looks.BLANK,
                    size: u.Button.Sizes.NONE,
                    tabIndex: t,
                    className: l(O, n),
                    onMouseEnter: R,
                    onMouseOver: R,
                    onMouseLeave: g,
                    onFocus: M,
                    onClick: E,
                    "aria-label": f.default.Messages.SELECT_EMOJI,
                    "aria-controls": p,
                    "aria-expanded": I,
                    "aria-haspopup": "dialog",
                    focusProps: S,
                    children: null != a ? a() : (0, r.jsx)(i.Spring, {
                        config: _,
                        to: {
                            value: A ? 1 : 0
                        },
                        children: e => {
                            let {
                                value: t
                            } = e;
                            return (0, r.jsx)(i.animated.div, {
                                className: m.sprite,
                                style: {
                                    ...h,
                                    transform: t.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")")),
                                    filter: t.to(e => "grayscale(".concat(100 - 100 * e, "%)"))
                                }
                            })
                        }
                    })
                })
            }
        },
        834179: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("469563"),
                a = n("763377"),
                l = n("75196"),
                i = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: a,
                        ...i
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: a,
                            fill: s,
                            d: "M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"
                        })
                    })
                }, a.CircleQuestionIcon)
        },
        818643: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("469563"),
                a = n("851298"),
                l = n("75196"),
                i = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        ...a
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6 9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z",
                            fill: s
                        }), (0, r.jsx)("path", {
                            d: "M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z",
                            fill: s
                        })]
                    })
                }, a.ImagePlusIcon)
        },
        100300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("469563"),
                a = n("85941"),
                l = n("75196"),
                i = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: s = "currentColor",
                        ...a
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1.25 0.5H4.25C4.66475 0.5 5 0.836 5 1.25V4.25C5 4.664 4.66475 5 4.25 5H1.25C0.836 5 0.5 4.664 0.5 4.25V1.25C0.5 0.836 0.836 0.5 1.25 0.5ZM1.25 5.75H4.25C4.66475 5.75 5 6.086 5 6.5V9.5C5 9.914 4.66475 10.25 4.25 10.25H1.25C0.836 10.25 0.5 9.914 0.5 9.5V6.5C0.5 6.086 0.836 5.75 1.25 5.75ZM4.25 11H1.25C0.836 11 0.5 11.336 0.5 11.75V14.75C0.5 15.164 0.836 15.5 1.25 15.5H4.25C4.66475 15.5 5 15.164 5 14.75V11.75C5 11.336 4.66475 11 4.25 11ZM6.5 2H15.5V3.5H6.5V2ZM15.5 7.25H6.5V8.75H15.5V7.25ZM6.5 12.5H15.5V14H6.5V12.5Z",
                            fill: s
                        })
                    })
                }, a.ListBulletsIcon)
        },
        548775: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("469563"),
                a = n("645156"),
                l = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: s = "currentColor",
                        className: a,
                        foreground: l
                    } = e;
                    return (0, r.jsx)("svg", {
                        className: a,
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, r.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, r.jsx)("rect", {
                                width: "16",
                                height: "16"
                            }), (0, r.jsx)("polygon", {
                                className: l,
                                fill: s,
                                points: "12 2.32 10.513 2 4 13.68 5.487 14"
                            })]
                        })
                    })
                }, a.SlashIcon)
        },
        575209: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getCurrencyFullName: function() {
                    return s
                }
            });
            var r = n("782340");

            function s(e) {
                switch (e) {
                    case "brl":
                        return r.default.Messages.BRL_NAME;
                    case "pln":
                        return r.default.Messages.PLN_NAME;
                    case "try":
                        return r.default.Messages.TRY_NAME;
                    case "usd":
                        return r.default.Messages.USD_NAME;
                    case "aud":
                        return r.default.Messages.AUD_NAME;
                    case "pen":
                        return r.default.Messages.PEN_NAME;
                    case "php":
                        return r.default.Messages.PHP_NAME;
                    case "ars":
                        return r.default.Messages.ARS_NAME;
                    case "cop":
                        return r.default.Messages.COP_NAME;
                    case "clr":
                        return r.default.Messages.CLR_NAME;
                    case "jpy":
                        return r.default.Messages.JPY_NAME;
                    case "idr":
                        return r.default.Messages.IDR_NAME;
                    case "vnd":
                        return r.default.Messages.VND_NAME;
                    case "thb":
                        return r.default.Messages.THB_NAME;
                    case "myr":
                        return r.default.Messages.MYR_NAME;
                    case "krw":
                        return r.default.Messages.KRW_NAME;
                    case "mxn":
                        return r.default.Messages.MXN_NAME;
                    case "bgn":
                        return r.default.Messages.BGN_NAME;
                    case "czk":
                        return r.default.Messages.CZK_NAME;
                    case "dkk":
                        return r.default.Messages.DKK_NAME;
                    case "huf":
                        return r.default.Messages.HUF_NAME;
                    case "ron":
                        return r.default.Messages.RON_NAME;
                    case "sek":
                        return r.default.Messages.SEK_NAME;
                    case "eur":
                        return r.default.Messages.EUR_NAME;
                    default:
                        return ""
                }
            }
        }
    }
]);