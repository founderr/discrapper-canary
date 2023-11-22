(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["77649"], {
        280968: function(e, t, n) {
            "use strict";
            e.exports = n.p + "21776a8b4fe8087b0bdc.svg"
        },
        392459: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e813b2b634fd928e71ca.svg"
        },
        26245: function(e, t, n) {
            "use strict";
            e.exports = n.p + "da8bcf0d776e8fde9e5b.svg"
        },
        21340: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d008fce672ad7583f06e.svg"
        },
        159548: function(e, t, n) {
            "use strict";
            e.exports = n.p + "8098ac87218ab1d81fe5.svg"
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
                    return a
                },
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("77078"),
                i = n("575209");

            function a(e) {
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
            var l = function(e) {
                let {
                    currencies: t,
                    onChange: n,
                    selectedCurrency: a,
                    className: l,
                    disabled: u = !1
                } = e;
                if (t.length < 2) return null;
                let o = t.map((e, t) => ({
                    key: t,
                    value: e,
                    label: "".concat(e.toUpperCase(), " - ").concat((0, i.getCurrencyFullName)(e))
                }));
                return (0, r.jsx)(s.SingleSelect, {
                    value: a,
                    options: o,
                    onChange: e => {
                        null != e && n(e)
                    },
                    className: l,
                    isDisabled: u
                })
            }
        },
        405932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("77078"),
                i = n("135898"),
                a = function(e) {
                    let {
                        message: t
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: i.warnBlock,
                        children: [(0, r.jsx)("div", {
                            className: i.warnIcon
                        }), (0, r.jsx)(s.Text, {
                            className: i.warnText,
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
                i = n("145131"),
                a = n("782340"),
                l = n("57153");
            let u = e => {
                    let {
                        className: t,
                        isEmailResent: n,
                        resendEmail: i
                    } = e;
                    return (0, r.jsx)("div", {
                        className: t,
                        children: (0, r.jsxs)("div", {
                            className: l.awaitingWrapper,
                            children: [(0, r.jsx)(s.Heading, {
                                variant: "heading-xl/bold",
                                children: a.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_HEADER
                            }), (0, r.jsxs)("p", {
                                children: [(0, r.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    children: a.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL
                                }), (0, r.jsx)("br", {}), (0, r.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    children: a.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_INSTRUCTIONS
                                }), (0, r.jsx)("br", {}), (0, r.jsxs)(s.Text, {
                                    variant: "text-md/normal",
                                    children: [a.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_PROMPT, "\xa0", n ? a.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_SENT : (0, r.jsx)(s.Anchor, {
                                        onClick: i,
                                        children: a.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_ACTION
                                    })]
                                })]
                            })]
                        })
                    })
                },
                o = () => (0, r.jsx)("div", {
                    children: (0, r.jsx)(s.ModalFooter, {
                        justify: i.default.Justify.BETWEEN,
                        align: i.default.Align.CENTER,
                        children: (0, r.jsx)(s.Button, {
                            "data-testid": "continue",
                            color: s.Button.Colors.BRAND,
                            disabled: !0,
                            children: a.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_NEXT_BUTTON
                        })
                    })
                })
        },
        763377: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleQuestionIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: a = "transparent",
                    secondaryColorClass: l = "",
                    color: u = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...c
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, i.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof a ? a : a.css,
                        className: l
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
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM4 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2 20a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM9 3a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2H9ZM8 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM9 19a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H9Z",
                        className: l
                    })
                })
            }
        },
        645156: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M19.117 2a.5.5 0 0 1 .429.757L8.218 21.636a.75.75 0 0 1-.643.364H4.883a.5.5 0 0 1-.429-.757L15.782 2.364A.75.75 0 0 1 16.424 2h2.692Z",
                        clipRule: "evenodd",
                        className: l
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
            var r, s, i, a, l = n("884691"),
                u = n("917351");

            function o(e) {
                return 2 === e || 3 === e ? 1 : 0
            }(i = r || (r = {}))[i.VERTICAL_TOP = 0] = "VERTICAL_TOP", i[i.VERTICAL_BOTTOM = 1] = "VERTICAL_BOTTOM", i[i.HORIZONTAL_LEFT = 2] = "HORIZONTAL_LEFT", i[i.HORIZONTAL_RIGHT = 3] = "HORIZONTAL_RIGHT", (a = s || (s = {}))[a.VERTICAL = 0] = "VERTICAL", a[a.HORIZONTAL = 1] = "HORIZONTAL";
            var c = e => {
                let {
                    initialElementDimension: t,
                    resizableDomNodeRef: n,
                    maxDimension: r,
                    minDimension: s,
                    onElementResize: i,
                    onElementResizeEnd: a,
                    throttleDuration: c = 300,
                    orientation: d,
                    usePointerEvents: f = !1
                } = e, [m, _] = l.useState(!1), E = l.useRef(0), I = l.useRef(null == t ? 0 : t);
                return l.useLayoutEffect(() => {
                    if (!m || null == n.current) return;

                    function e(e) {
                        let t = 1 === o(d) ? e.screenX : e.screenY,
                            n = 0 === d || 2 === d,
                            i = (t - E.current) * (n ? -1 : 1),
                            a = I.current + i;
                        return (0, u.clamp)(a, null != s ? s : 0, null != r ? r : a)
                    }
                    let t = (0, u.throttle)(i, c),
                        l = r => {
                            if (null == n.current) return null;
                            let s = e(r),
                                i = 1 === o(d) ? "width" : "height";
                            n.current.style[i] = "".concat(s, "px"), t(s)
                        },
                        p = t => {
                            _(!1);
                            let n = e(t);
                            i(n), null == a || a(n)
                        },
                        S = f ? "pointerup" : "mouseup",
                        N = f ? "pointermove" : "mousemove",
                        P = n.current.ownerDocument;
                    return P.addEventListener(S, p), P.addEventListener(N, l), () => {
                        P.removeEventListener(S, p), P.removeEventListener(N, l), t.cancel()
                    }
                }, [m, i, s, r, d, n, c, a, f]), l.useCallback(e => {
                    let t = 1 === o(d);
                    null != n.current && (I.current = t ? n.current.offsetWidth : n.current.offsetHeight), E.current = t ? e.screenX : e.screenY, _(!0)
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
                i = n("913144"),
                a = n("850068"),
                l = n("112679"),
                u = n("596523"),
                o = n("465527"),
                c = n("388290"),
                d = n("599110"),
                f = n("745279"),
                m = n("659632"),
                _ = n("719923"),
                E = n("286350"),
                I = n("49111"),
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
                    analyticsLocation: R,
                    analyticsLocations: h,
                    flowStartTime: v,
                    subscriptionPlan: g,
                    planGroup: M,
                    trialId: x,
                    priceOptions: y,
                    paymentSource: L,
                    isPrepaidPaymentPastDue: b,
                    openInvoiceId: j,
                    premiumSubscription: G,
                    onNext: D,
                    metadata: U,
                    sku: B,
                    skuPricePreview: w,
                    purchaseType: F,
                    referralCode: H,
                    loadId: k,
                    giftRecipient: Y,
                    customMessage: W,
                    emojiConfetti: Z,
                    soundEffect: V
                } = e;
                t(E.PurchaseState.PURCHASING), n(!0), r(!0), i.default.wait(l.clearError), N(null);
                try {
                    let e, n, r;
                    if (d.default.track(I.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
                            ...O,
                            duration_ms: Date.now() - v
                        }), P) return;
                    let i = (0, m.getGiftExperience)(Y),
                        l = m.GIFT_EXPERIENCES_WITH_CUSTOM_MESSAGING.has(i),
                        N = m.GIFT_EXPERIENCES_WITH_CUSTOM_EMOJI_SOUNDBOARD.has(i);
                    if (F === I.PurchaseTypes.ONE_TIME) s(null != B, "SKU must exist and be fetched."), s(null != w, "SKUPricePreview must exist."), e = await (0, o.purchaseSKU)(B.applicationId, B.id, {
                        expectedAmount: w.amount,
                        expectedCurrency: w.currency,
                        isGift: C,
                        paymentSource: L,
                        loadId: k,
                        giftStyle: A,
                        recipientId: i !== m.GiftExperience.DEFAULT ? null == Y ? void 0 : Y.id : void 0,
                        customMessage: l ? W : void 0,
                        emojiConfetti: N ? Z : void 0,
                        soundEffect: N ? V : void 0
                    });
                    else if (s(null != g, "Missing subscriptionPlan"), C) {
                        let t = (0, _.getPrice)(g.id, !1, !0, y);
                        if ("usd" === t.currency && (null == L ? void 0 : L.type) === I.PaymentSourceTypes.GCASH) {
                            var K;
                            let e = Error("Invalid USD currency for GCash");
                            (0, f.captureBillingException)(e, {
                                tags: {
                                    paymentSourceId: null !== (K = null == L ? void 0 : L.id) && void 0 !== K ? K : "",
                                    subscriptionPlanId: g.id,
                                    priceOptions: JSON.stringify(y)
                                }
                            })
                        }
                        e = await (0, o.purchaseSKU)(p.PREMIUM_SUBSCRIPTION_APPLICATION, g.skuId, {
                            expectedAmount: t.amount,
                            expectedCurrency: t.currency,
                            paymentSource: L,
                            subscriptionPlanId: g.id,
                            isGift: !0,
                            giftStyle: A,
                            loadId: k,
                            recipientId: i !== m.GiftExperience.DEFAULT ? null == Y ? void 0 : Y.id : void 0,
                            customMessage: l ? W : void 0,
                            emojiConfetti: N ? Z : void 0,
                            soundEffect: N ? V : void 0
                        })
                    } else e = b && null != j && null != L && null != G ? I.PREPAID_PAYMENT_SOURCES.has(L.type) ? await (0, a.payInvoiceManually)(G, j, L, y.currency) : await (0, a.updateSubscription)(G, {
                        paymentSource: L,
                        currency: y.currency
                    }, h, R) : null != G ? await (0, a.updateSubscription)(G, {
                        items: (0, _.getItemsWithUpsertedPlanIdForGroup)(G, g.id, 1, new Set(M)),
                        paymentSource: L,
                        currency: y.currency
                    }, h, R) : await (0, u.subscribe)({
                        planId: g.id,
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
                        duration_ms: Date.now() - v,
                        payment_source_type: null == L ? void 0 : L.type
                    };
                    C && (l && (z.is_custom_message_edited = W !== S.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE), N && (z.is_custom_emoji_sound_available = !0, null != Z && (z.emoji_name = Z.surrogates), null != V && (z.sound_id = V.soundId))), d.default.track(I.AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, z), t(E.PurchaseState.COMPLETED), "subscription" in e ? n = null != e.subscription ? c.default.createFromServer(e.subscription) : null : "entitlements" in e && (r = null != e.entitlements ? e.entitlements : void 0), D(n, r)
                } catch (e) {
                    t(E.PurchaseState.FAIL), N(e), d.default.track(I.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                        ...O,
                        payment_source_id: null == L ? void 0 : L.id,
                        payment_source_type: null == L ? void 0 : L.type,
                        duration_ms: Date.now() - v
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
                    return _
                }
            });
            var r = n("627445"),
                s = n.n(r),
                i = n("775560"),
                a = n("917247"),
                l = n("724522"),
                u = n("599110"),
                o = n("635357"),
                c = n("642906"),
                d = n("85336"),
                f = n("49111"),
                m = n("646718");

            function _(e) {
                let {
                    analyticsData: t,
                    initialPlanId: n,
                    breadcrumbSteps: r,
                    handleStepChange: _,
                    referralTrialOfferId: E,
                    onReturn: I
                } = e, {
                    contextMetadata: p,
                    step: S,
                    paymentSources: N,
                    paymentSourceId: P,
                    setPaymentSourceId: T,
                    purchaseError: C,
                    setPurchaseError: A,
                    purchaseErrorBlockRef: O,
                    paymentAuthenticationState: R,
                    selectedSkuId: h
                } = (0, c.usePaymentContext)(), {
                    isGift: v
                } = (0, o.useGiftContext)(), g = {
                    ...(0, l.useSharedPaymentModal)(),
                    paymentSources: N,
                    paymentSourceId: P,
                    setPaymentSourceId: T,
                    purchaseError: C,
                    setPurchaseError: A,
                    purchaseErrorBlockRef: O,
                    paymentAuthenticationState: R
                }, M = (0, a.usePremiumTrialOffer)(E), x = !v && null != M && null != h && (0, m.SubscriptionTrials)[M.trial_id].skus.includes(h), y = null != I ? I : () => {
                    let e = Object.values(N).length < 1 && null == n ? d.Step.PLAN_SELECT : d.Step.REVIEW;
                    _(e, {
                        trackedFromStep: d.Step.PAYMENT_TYPE
                    })
                };
                s(S, "Step should be set here");
                let L = (0, i.useStableMemo)(() => Date.now(), [S]);
                return (0, l.AddPaymentFlow)({
                    paymentModalArgs: g,
                    initialStep: d.Step.PAYMENT_TYPE,
                    prependSteps: [d.Step.PROMOTION_INFO],
                    appendSteps: [d.Step.REVIEW, d.Step.CONFIRM],
                    breadcrumpSteps: r,
                    currentBreadcrumpStep: S,
                    usePaymentModalStep: !0,
                    onReturn: y,
                    onComplete: e => {
                        _(d.Step.REVIEW, {
                            trackedFromStep: e
                        })
                    },
                    onStepChange: e => {
                        let {
                            currentStep: n,
                            toStep: r
                        } = e, s = Date.now();
                        u.default.track(f.AnalyticEvents.PAYMENT_FLOW_STEP, {
                            ...t,
                            from_step: n,
                            to_step: r,
                            step_duration_ms: s - L,
                            flow_duration_ms: s - p.startTime
                        })
                    },
                    isEligibleForTrial: x
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
                i = n("153727"),
                a = n("650484"),
                l = n("913390");

            function u() {
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(i.default, {}), (0, r.jsx)(a.PaymentPortalBody, {
                        children: (0, r.jsx)(s.AwaitingAuthenticationStepBody, {
                            className: l.awaitingAuthenticationStep
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
                i = n("465527"),
                a = n("50517"),
                l = n("153727"),
                u = n("650484"),
                o = n("199142");

            function c() {
                let [e, t] = s.useState(!1), n = async () => {
                    t(!0), await (0, i.resendPaymentVerificationEmail)()
                };
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(l.default, {}), (0, r.jsx)(u.PaymentPortalBody, {
                        children: (0, r.jsx)(a.AwaitingPurchaseTokenAuthStepBody, {
                            className: o.body,
                            isEmailResent: e,
                            resendEmail: n
                        })
                    }), (0, r.jsx)(u.PaymentPortalFooter, {
                        children: (0, r.jsx)(a.AwaitingPurchaseTokenAuthStepFooter, {})
                    })]
                })
            }
        },
        883558: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
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
            var i = s
        },
        102492: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                checkNoPaymentTrialEnabled: function() {
                    return l
                }
            });
            var r = n("862205"),
                s = n("719923");
            let i = (0, r.createExperiment)({
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
                a = (e, t, n) => {
                    let r = null == n || (0, s.isPremiumBaseSubscriptionPlan)(n);
                    return null != e && null == t && r
                },
                l = (e, t, n) => {
                    let {
                        bypassCheckout: r
                    } = i.useExperiment({
                        location: "aeb070_1"
                    }, {
                        autoTrackExposure: !1
                    }), s = a(e, t, n);
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
                    return E
                }
            }), n("222007"), n("424973");
            var r = n("592861"),
                s = n("988415"),
                i = n("701909"),
                a = n("153160"),
                l = n("49111"),
                u = n("843455"),
                o = n("782340");
            let c = new Set([u.CurrencyCodes.ARS, u.CurrencyCodes.CLP, u.CurrencyCodes.COP]),
                d = new Set([u.CurrencyCodes.USD, u.CurrencyCodes.JPY]),
                f = {
                    [l.PaymentSourceTypes.CARD]: () => o.default.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
                    [l.PaymentSourceTypes.PAYPAL]: () => o.default.Messages.PAYMENT_SOURCE_PAYPAL,
                    [l.PaymentSourceTypes.SOFORT]: () => o.default.Messages.PAYMENT_SOURCE_SOFORT,
                    [l.PaymentSourceTypes.GIROPAY]: () => o.default.Messages.PAYMENT_SOURCE_GIROPAY,
                    [l.PaymentSourceTypes.PRZELEWY24]: () => o.default.Messages.PAYMENT_SOURCE_PRZELEWY24,
                    [l.PaymentSourceTypes.PAYSAFE_CARD]: () => o.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
                    [l.PaymentSourceTypes.GCASH]: () => o.default.Messages.PAYMENT_SOURCE_GCASH,
                    [l.PaymentSourceTypes.GRABPAY_MY]: () => o.default.Messages.PAYMENT_SOURCE_GRABPAY,
                    [l.PaymentSourceTypes.MOMO_WALLET]: () => o.default.Messages.PAYMENT_SOURCE_MOMO_WALLET,
                    [l.PaymentSourceTypes.VENMO]: () => o.default.Messages.PAYMENT_SOURCE_VENMO,
                    [l.PaymentSourceTypes.KAKAOPAY]: () => o.default.Messages.PAYMENT_SOURCE_KAKAOPAY,
                    [l.PaymentSourceTypes.GOPAY_WALLET]: () => o.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
                    [l.PaymentSourceTypes.BANCONTACT]: () => o.default.Messages.PAYMENT_SOURCE_BANCONTACT,
                    [l.PaymentSourceTypes.EPS]: () => o.default.Messages.PAYMENT_SOURCE_EPS,
                    [l.PaymentSourceTypes.IDEAL]: () => o.default.Messages.PAYMENT_SOURCE_IDEAL,
                    [l.PaymentSourceTypes.CASH_APP]: () => o.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY
                },
                m = [l.PaymentSourceTypes.EPS, l.PaymentSourceTypes.BANCONTACT, l.PaymentSourceTypes.IDEAL, l.PaymentSourceTypes.SOFORT, l.PaymentSourceTypes.GIROPAY, l.PaymentSourceTypes.SEPA_DEBIT, l.PaymentSourceTypes.PAYSAFE_CARD],
                _ = (e, t, n, r) => {
                    if (null == e) return "";
                    let i = (0, s.getI18NCountryName)(e);
                    if (t === u.CurrencyCodes.EUR) return n ? o.default.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
                        country: i
                    }) : o.default.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
                        currencyISOCode: t.toUpperCase()
                    });
                    return r ? o.default.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
                        countryName: i
                    }) : o.default.Messages.LOCALIZED_PRICING_NOTICE.format({
                        country: i
                    })
                },
                E = e => {
                    let {
                        localizedPricingPromo: t,
                        subscription: n,
                        forceSingleLine: r = !1,
                        userLocale: _
                    } = e, {
                        countryCode: E,
                        amount: p,
                        currency: S,
                        paymentSourceTypes: N
                    } = t, P = 0 !== N.length, T = I(E), C = (0, a.formatPrice)(p, S, {
                        style: "currency",
                        currency: S,
                        currencyDisplay: "symbol",
                        localeOverride: T
                    }), A = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
                        helpCenterLink: i.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
                        currencyISOCode: S.toUpperCase(),
                        localizedPriceWithCurrencySymbol: C
                    });
                    if (d.has(S) && (A = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
                            helpCenterLink: i.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
                            localizedPriceWithCurrencySymbol: C
                        })), c.has(S) && (A = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
                            helpCenterLink: i.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: S.toUpperCase(),
                            localizedPriceWithCurrencySymbol: C
                        })), null != n && !n.hasPremiumNitroMonthly && (A = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
                            helpCenterLink: i.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: S.toUpperCase()
                        })), S === u.CurrencyCodes.EUR && (A = r ? o.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
                            country: (0, s.getI18NCountryName)(E),
                            currencyISOCode: S.toUpperCase(),
                            helpCenterLink: i.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING)
                        }) : o.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
                            currencyISOCode: S.toUpperCase(),
                            helpCenterLink: i.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING)
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
                            helpCenterLink: i.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
                            paymentMethods: s.format(r)
                        })
                    }
                    return {
                        localizedPricingBannerHeader: o.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
                            country: (0, s.getI18NCountryName)(E)
                        }),
                        localizedPricingBannerBody: A,
                        localizedPricingBannerLinkOnly: o.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
                            helpCenterLink: i.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING)
                        }),
                        localizedPricingBannerSubNotif: P ? void 0 : o.default.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
                    }
                },
                I = e => {
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
                    return a
                },
                isPaymentSourceEligibleForMultiMonthPlans: function() {
                    return u
                }
            }), n("222007");
            var r = n("976979"),
                s = n("862205"),
                i = n("646718"),
                a = (0, s.createExperiment)({
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
                            newPlans: [i.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2, i.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2]
                        }
                    }, {
                        id: 2,
                        label: "3 Month Plan Only",
                        config: {
                            newPlans: [i.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2]
                        }
                    }]
                });
            let l = new Set([r.CountryCodes.US, r.CountryCodes.CA]);

            function u(e) {
                return null == e || l.has(e.country)
            }
        },
        809071: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateSubscriptionInvoicePreview: function() {
                    return f
                },
                useSubscriptionInvoicePreview: function() {
                    return E
                },
                useGetSubscriptionInvoice: function() {
                    return I
                },
                getItemUnitPriceWithDiscount: function() {
                    return p
                }
            }), n("222007");
            var r = n("884691"),
                s = n("446674"),
                i = n("872717"),
                a = n("448993"),
                l = n("195358"),
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
                    let e = await i.default.post({
                        url: c.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
                        body: _,
                        oldFormErrors: !0
                    });
                    return l.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new a.BillingError(e)
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
                    let e = await i.default.patch({
                        url: c.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(t),
                        query: {
                            location: m,
                            location_stack: f
                        },
                        body: _,
                        oldFormErrors: !0
                    });
                    return l.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new a.BillingError(e)
                }
            }
            async function m(e) {
                let {
                    subscriptionId: t,
                    preventFetch: n
                } = e;
                if (n) return null;
                let r = await i.default.get({
                    url: c.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
                    oldFormErrors: !0
                });
                return l.default.createInvoiceFromServer(r.body)
            }

            function _(e, t) {
                let {
                    preventFetch: n = !1
                } = e, [i, a] = (0, r.useState)(null), [l, o] = (0, r.useState)(null), c = (0, s.useStateFromStores)([u.default], () => u.default.getSubscriptions());
                return (0, r.useEffect)(() => {
                    let e = !1;
                    async function r() {
                        try {
                            o(null), a(null);
                            let n = await t();
                            !e && a(n)
                        } catch (t) {
                            !e && o(t)
                        }
                    }
                    return !n && r(), () => {
                        e = !0
                    }
                }, [n, t, c]), [i, l]
            }

            function E(e) {
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

            function I(e) {
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
                    return l
                }
            });
            var r, s, i = n("862205");
            (r = s || (s = {}))[r.NONE = 0] = "NONE", r[r.BROWSER_AUTOFILL = 1] = "BROWSER_AUTOFILL", r[r.MERGE_PLAN_SELECT_TO_REVIEW = 2] = "MERGE_PLAN_SELECT_TO_REVIEW";
            let a = (0, i.createExperiment)({
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
            var l = a
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
                i = n("446674"),
                a = n("357957"),
                l = n("10514"),
                u = n("521012"),
                o = n("719923"),
                c = n("49111"),
                d = n("843455");

            function f() {
                let e = (0, i.useStateFromStores)([u.default], () => u.default.getPremiumTypeSubscription()),
                    t = (0, i.useStateFromStores)([l.default], () => null != e && null != e.planIdFromItems ? l.default.get(null == e ? void 0 : e.planIdFromItems) : null),
                    n = (0, i.useStateFromStores)([a.default], () => null != e && null != e.paymentSourceId ? a.default.getPaymentSource(e.paymentSourceId) : null, [e]),
                    r = null != n && d.PREPAID_PAYMENT_SOURCES.has(n.type),
                    f = (null == e ? void 0 : e.status) === c.SubscriptionStatusTypes.PAST_DUE ? s().diff(s(e.currentPeriodStart), "days") : 0;
                return !!(null != e && null != t && (0, o.isPremiumBaseSubscriptionPlan)(t.id)) && r && f >= 0 && f <= (0, o.getBillingGracePeriodDays)(e) && e.status === c.SubscriptionStatusTypes.PAST_DUE && !e.isPurchasedExternally
            }
        },
        279171: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useShouldShowLegacyPricingNotice: function() {
                    return I
                },
                default: function() {
                    return p
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("414456"),
                i = n.n(s),
                a = n("627445"),
                l = n.n(a),
                u = n("423487"),
                o = n("701909"),
                c = n("35188"),
                d = n("391533"),
                f = n("296253"),
                m = n("49111"),
                _ = n("782340"),
                E = n("712109");

            function I() {
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
                    className: a
                } = e, c = (0, f.default)(), d = I();
                if (!d) return null;
                return l(null != c, "Subscription billing country should not be null"), (0, r.jsxs)("div", {
                    className: i(E.noticeRoot, a),
                    children: [(0, r.jsx)("div", {
                        className: E.iconContainer,
                        children: (0, r.jsx)(u.default, {
                            className: E.infoIcon
                        })
                    }), (0, r.jsx)("div", {
                        className: E.text,
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
                i = n.n(s),
                a = n("153160"),
                l = n("646718"),
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
                } = e, m = (0, a.formatPrice)(t, n), _ = null;
                return s === l.SubscriptionIntervalTypes.YEAR ? _ = u.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
                    price: m
                }) : s === l.SubscriptionIntervalTypes.MONTH && 1 === d ? _ = u.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
                    price: m
                }) : s === l.SubscriptionIntervalTypes.MONTH && d > 1 && (_ = u.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
                    price: m,
                    intervalCount: d
                })), (0, r.jsx)("div", {
                    className: i(o.pricePerInterval, c),
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
                    return E
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                i = n("77078"),
                a = n("850391"),
                l = n("149022"),
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

            function E(e) {
                let {
                    sectionTitle: t,
                    errors: n,
                    onTextChange: c,
                    pendingText: d,
                    placeholder: E,
                    currentText: I,
                    disabled: p = !1
                } = e, [S, N] = s.useState(null != d ? d : I), [P, T] = s.useState((0, l.toRichValue)(S)), C = s.useRef(!1);
                return s.useEffect(() => {
                    C.current = !0
                }, []), s.useEffect(() => {
                    if (void 0 === d) {
                        let e = (0, l.toRichValue)(I);
                        N(I), T(e)
                    }
                }, [d, I]), (0, r.jsx)("div", {
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
                            placeholder: E,
                            channel: _,
                            textValue: S,
                            richValue: P,
                            type: a.ChatInputTypes.CUSTOM_GIFT,
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
                        }), (0, r.jsx)(i.HiddenVisually, {
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
                i = n("414456"),
                a = n.n(i),
                l = n("849085");
            let u = s.forwardRef(function(e, t) {
                let {
                    isActive: n,
                    children: s
                } = e;
                return (0, r.jsx)("div", {
                    className: a(l.wrapper, {
                        [l.wrapperActive]: n
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
                    return N
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                i = n("77078"),
                a = n("635357"),
                l = n("742926"),
                u = n("659632"),
                o = n("210721"),
                c = n("78345"),
                d = n("53253"),
                f = n("65324"),
                m = n("563613"),
                _ = n("64798"),
                E = n("646718"),
                I = n("782340"),
                p = n("734203");
            let S = [c.PremiumGiftStyles.STANDARD_BOX, c.PremiumGiftStyles.CAKE, c.PremiumGiftStyles.COFFEE, c.PremiumGiftStyles.CHEST],
                N = () => {
                    let {
                        giftRecipient: e,
                        selectedGiftStyle: t,
                        setSelectedGiftStyle: n,
                        emojiConfetti: c,
                        soundEffect: N,
                        setEmojiConfetti: P,
                        setSoundEffect: T
                    } = (0, a.useGiftContext)(), [C, A] = s.useState(!1), O = s.useRef(null), R = (0, i.useRadioGroup)({
                        orientation: "horizontal"
                    }), h = (0, u.getGiftExperience)(e, !0, "premiumGiftSelect_GiftAnimationOptions"), v = u.GIFT_EXPERIENCES_WITH_CUSTOM_EMOJI_SOUNDBOARD.has(h), g = h !== u.GiftExperience.DEFAULT, M = (0, d.useIsSeasonalGiftingActive)(), {
                        enabled: x
                    } = d.default.useExperiment({
                        location: "premiumGiftSelect_GiftAnimationOptions"
                    }, {
                        autoTrackExposure: M
                    }), y = null;
                    return g && (y = x ? E.SeasonalGiftStyles2023 : S), (0, r.jsxs)("div", {
                        children: [g && (0, r.jsxs)("div", {
                            className: p.giftMainAnimation,
                            children: [null != t ? (0, r.jsx)(f.default, {
                                giftStyle: t,
                                defaultAnimationState: o.AnimationState.ACTION,
                                idleAnimationState: o.AnimationState.LOOP,
                                shouldAnimate: !0,
                                className: p.animation
                            }) : (0, r.jsx)(i.Spinner, {
                                className: p.spinner
                            }), v && (0, r.jsxs)("div", {
                                className: p.soundEmojiContainer,
                                children: [(0, r.jsx)("div", {
                                    className: p.sound,
                                    children: (0, r.jsx)(l.default, {
                                        sound: N,
                                        onSelect: e => {
                                            null != T && T(null == e ? void 0 : e)
                                        }
                                    })
                                }), (0, r.jsx)("div", {
                                    className: p.emoji,
                                    children: (0, r.jsx)(m.default, {
                                        setEmojiConfetti: P,
                                        emojiConfetti: null == c ? void 0 : c
                                    })
                                })]
                            })]
                        }), (0, r.jsx)("div", {
                            tabIndex: null != t || C ? void 0 : 0,
                            onFocus: e => {
                                var t;
                                e.target === e.currentTarget && (null === (t = O.current) || void 0 === t || t.focus())
                            },
                            className: p.giftBoxOptionContainer,
                            "aria-label": I.default.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX,
                            ...R,
                            children: null != y && y.map((e, s) => (0, r.jsx)(_.GiftStaticOption, {
                                isSelected: t === e,
                                giftStyle: e,
                                setSelectedGiftStyle: n,
                                ref: 0 === s ? O : null,
                                onFocus: () => A(!0),
                                onBlur: () => A(!1)
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
                i = n("77078"),
                a = n("86678"),
                l = n("46829"),
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
                        children: [(0, r.jsx)(i.Text, {
                            variant: "text-md/bold",
                            children: c.default.Messages.GIFT_SELECT_EMOJI
                        }), (0, r.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            children: c.default.Messages.GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION
                        })]
                    }), e]
                }), E = e => {
                    null != t && (t(e), o(!1))
                };
                return (0, r.jsx)(i.Popout, {
                    shouldShow: u,
                    position: "bottom",
                    align: "left",
                    autoInvert: !1,
                    onRequestClose: () => o(!1),
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, r.jsx)(a.default, {
                            analyticsOverride: f,
                            closePopout: t,
                            onSelectEmoji: E,
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
                        children: (0, r.jsx)(i.Clickable, {
                            className: d.emoji,
                            onClick: () => o(!0),
                            children: (null == n ? void 0 : n.name) == null ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(l.default, {
                                    className: d.emojiIcon,
                                    width: 14,
                                    height: 14
                                }), (0, r.jsx)(i.Text, {
                                    className: d.text,
                                    variant: "text-sm/semibold",
                                    children: c.default.Messages.GIFT_SELECT_EMOJI
                                })]
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(i.Text, {
                                    className: d.textSelected,
                                    variant: "text-sm/semibold",
                                    children: n.optionallyDiverseSequence
                                }), (0, r.jsx)(i.Text, {
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
                    return p
                }
            });
            var r = n("37983"),
                s = n("884691"),
                i = n("77078"),
                a = n("78345"),
                l = n("107342"),
                u = n("392459"),
                o = n("26245"),
                c = n("21340"),
                d = n("159548"),
                f = n("361396"),
                m = n("291059"),
                _ = n("356057"),
                E = n("892712");
            let I = {
                    [a.PremiumGiftStyles.STANDARD_BOX]: f,
                    [a.PremiumGiftStyles.CAKE]: m,
                    [a.PremiumGiftStyles.CHEST]: _,
                    [a.PremiumGiftStyles.COFFEE]: E,
                    [a.PremiumGiftStyles.SNOWGLOBE]: "",
                    [a.PremiumGiftStyles.BOX]: "",
                    [a.PremiumGiftStyles.CUP]: "",
                    [a.PremiumGiftStyles.SEASONAL_CAKE]: o,
                    [a.PremiumGiftStyles.SEASONAL_CHEST]: c,
                    [a.PremiumGiftStyles.SEASONAL_COFFEE]: d,
                    [a.PremiumGiftStyles.SEASONAL_STANDARD_BOX]: u
                },
                p = s.forwardRef(function(e, t) {
                    let {
                        isSelected: n,
                        giftStyle: s,
                        setSelectedGiftStyle: a,
                        onFocus: u,
                        onBlur: o
                    } = e;
                    return (0, r.jsx)(i.Clickable, {
                        innerRef: t,
                        className: l.clickable,
                        onClick: () => a(s),
                        onFocus: u,
                        onBlur: o,
                        children: (0, r.jsx)("img", {
                            style: {
                                width: "100%",
                                height: "100%"
                            },
                            alt: "",
                            src: I[s],
                            className: n ? l.customGiftBoxHighlighted : l.customGiftBox
                        })
                    })
                })
        },
        177998: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("77078"),
                i = n("782340"),
                a = n("816318"),
                l = e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, r.jsx)(s.Anchor, {
                        onClick: t,
                        className: a.link,
                        children: i.default.Messages.BACK
                    })
                }
        },
        570727: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumSwitchPlanSelectBody: function() {
                    return H
                },
                PremiumSwitchPlanSelectFooter: function() {
                    return k
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                i = n("627445"),
                a = n.n(i),
                l = n("446674"),
                u = n("77078"),
                o = n("405932"),
                c = n("798609"),
                d = n("635357"),
                f = n("642906"),
                m = n("85336"),
                _ = n("883558"),
                E = n("10514"),
                I = n("521012"),
                p = n("659632"),
                S = n("701909"),
                N = n("773336"),
                P = n("719923"),
                T = n("153160"),
                C = n("916187"),
                A = n("968532"),
                O = n("15733"),
                R = n("154889"),
                h = n("917247"),
                v = n("279171"),
                g = n("883662"),
                M = n("824734"),
                x = n("705820"),
                y = n("208559"),
                L = n("177998"),
                b = n("661128"),
                j = n("26785"),
                G = n("617223"),
                D = n("646718"),
                U = n("49111"),
                B = n("843455"),
                w = n("782340"),
                F = n("33769");

            function H(e) {
                var t, n, i, m, _, I;
                let {
                    premiumSubscription: N,
                    skuId: A,
                    selectedPlanId: L,
                    setSelectedPlanId: b,
                    priceOptions: H,
                    planOptions: k,
                    eligibleForMultiMonthPlans: Y,
                    referralTrialOfferId: W,
                    subscriptionPeriodEnd: Z,
                    showTotal: V = !0,
                    discountInvoiceItems: K
                } = e, {
                    activeSubscription: z,
                    setSelectedPlanId: J,
                    selectedSkuId: X,
                    selectedPlan: q,
                    priceOptions: Q
                } = (0, f.usePaymentContext)(), {
                    isGift: $,
                    giftRecipient: ee,
                    selectedGiftStyle: et,
                    customGiftMessage: en,
                    setCustomGiftMessage: er
                } = (0, d.useGiftContext)(), es = (0, p.isCustomGiftEnabled)(ee), ei = $ && (0, p.shouldShowCustomGiftExperience)(ee, !0, "PremiumSwitchPlanSelectBody");
                A = null != A ? A : X, a(void 0 !== (N = null != N ? N : z), "should not be undefined");
                let [ea, el] = (0, l.useStateFromStoresArray)([E.default], () => [null != N ? E.default.get(N.planId) : null, null != L ? E.default.get(L) : null]), eu = (0, h.usePremiumTrialOffer)(W), eo = null == eu ? void 0 : eu.subscription_trial, ec = (0, R.usePremiumDiscountOffer)(), ed = null == ec ? void 0 : null === (t = ec.discount) || void 0 === t ? void 0 : t.plan_ids, ef = null != el ? el : q, em = s.useCallback(e => {
                    null != b ? b(e) : J(e)
                }, [b, J]), e_ = null != H ? H : Q;
                a(null != e_, "Price option has to be set");
                let eE = null != eu && (0, D.SubscriptionTrials)[eu.trial_id].skus.includes(A),
                    eI = null != ec && k.some(e => null == ed ? void 0 : ed.includes(e)),
                    ep = (0, P.getPrice)(D.SubscriptionPlans.PREMIUM_MONTH_TIER_2, !1, $, e_);
                s.useEffect(() => {
                    Y && C.default.trackExposure({
                        location: "5f89bb_1"
                    })
                }, [Y]);
                let eS = (null == ef ? void 0 : ef.id) != null && k.includes(ef.id);
                s.useEffect(() => {
                    if (!eS) {
                        if (null == ea || $) em(k[0]);
                        else if (null != ea) {
                            let e = k.find(e => e !== ea.id);
                            null != e && em(e)
                        }
                    }
                }, [eS, $, k, ea, em]);
                let eN = !ei && ($ || !eE && !eI) && eS && V,
                    eP = (0, u.useRadioGroup)(),
                    eT = (null == ef ? void 0 : ef.id) != null ? (0, P.getPrice)(ef.id, !1, $, e_) : void 0,
                    {
                        ipCountryCode: eC
                    } = (0, O.default)(),
                    eA = "HR" === eC && null != eT && eT.currency === B.CurrencyCodes.EUR,
                    eO = (0, P.isPrepaidPaymentSource)(e_.paymentSourceId),
                    eR = (null == eo ? void 0 : eo.interval) === D.SubscriptionIntervalTypes.DAY ? w.default.Messages.BILLING_TRIAL_2_WEEK_PERIOD : w.default.Messages.BILLING_TRIAL_30_DAY_PERIOD,
                    eh = !$ && (eI || null != eo && eE && null != Z),
                    ev = null == K ? void 0 : null === (m = K.find(e => e.subscriptionPlanId === D.SubscriptionPlans.PREMIUM_MONTH_TIER_2)) || void 0 === m ? void 0 : null === (i = m.discounts) || void 0 === i ? void 0 : null === (n = i.find(e => e.type === c.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === n ? void 0 : n.amount;
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)("div", {
                        className: ei ? F.stepBodyCustomGift : F.stepBody,
                        children: [(0, r.jsxs)("div", {
                            className: ei ? F.bodyColumnMiddle : void 0,
                            children: [(0, r.jsx)(v.default, {
                                fromBoostCancelModal: !1,
                                className: F.legacyPricingNotice
                            }), ei && null != et && (0, r.jsx)(y.GiftAnimationOptions, {})]
                        }), (0, r.jsxs)("div", {
                            className: ei ? F.bodyColumnRight : void 0,
                            children: [es && (0, r.jsx)(G.SendGiftToUser, {
                                giftRecipient: ee
                            }), (() => {
                                if (es && null != er) return (0, r.jsx)(x.default, {
                                    sectionTitle: w.default.Messages.GIFT_OPTIONAL_MESSAGE,
                                    onTextChange: e => er(e),
                                    pendingText: en,
                                    currentText: en
                                })
                            })(), null != ea && !$ && (0, r.jsx)("div", {
                                className: F.bodyText,
                                children: function(e, t) {
                                    let n = w.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
                                        r = w.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
                                        s = (() => {
                                            switch (e.interval) {
                                                case D.SubscriptionIntervalTypes.YEAR:
                                                    return n;
                                                case D.SubscriptionIntervalTypes.MONTH:
                                                default:
                                                    return r
                                            }
                                        })(),
                                        i = e.skuId;
                                    switch (t) {
                                        case D.PremiumSubscriptionSKUs.TIER_0:
                                            switch (i) {
                                                case D.PremiumSubscriptionSKUs.TIER_1:
                                                    return w.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                                                case D.PremiumSubscriptionSKUs.TIER_2:
                                                    return w.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                                                default:
                                                    return s
                                            }
                                        case D.PremiumSubscriptionSKUs.TIER_1:
                                            switch (i) {
                                                case D.PremiumSubscriptionSKUs.TIER_0:
                                                    return w.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                                                case D.PremiumSubscriptionSKUs.TIER_2:
                                                    return w.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                                                default:
                                                    return s
                                            }
                                        case D.PremiumSubscriptionSKUs.TIER_2:
                                            switch (i) {
                                                case D.PremiumSubscriptionSKUs.TIER_0:
                                                case D.PremiumSubscriptionSKUs.TIER_1:
                                                    return w.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                                                case D.PremiumSubscriptionSKUs.TIER_2:
                                                    return e.interval === D.SubscriptionIntervalTypes.MONTH ? w.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format({
                                                        numFreeGuildSubscriptions: D.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
                                                    }) : s;
                                                default:
                                                    return s
                                            }
                                        default:
                                            return s
                                    }
                                }(ea, A)
                            }), (_ = eE, I = eI, ei ? (0, r.jsx)(u.FormTitle, {
                                children: w.default.Messages.GIFT_SUBSCRIPTION_SELECTION
                            }) : eh ? _ ? (0, r.jsxs)("div", {
                                children: [(0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: F.trialPlanSelectHeader,
                                    children: w.default.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format({
                                        trialEnd: Z,
                                        trialPeriod: eR
                                    })
                                }), (0, r.jsx)("hr", {
                                    className: F.planSelectSeparator
                                })]
                            }) : I && null != ev && null != ep ? (0, r.jsxs)("div", {
                                children: [(0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: F.trialPlanSelectHeader,
                                    children: w.default.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO.format({
                                        discountedPrice: (0, T.formatPrice)(ep.amount - ev, ep.currency),
                                        regularPrice: (0, T.formatPrice)(ep.amount, ep.currency)
                                    })
                                }), (0, r.jsx)("hr", {
                                    className: F.planSelectSeparator
                                })]
                            }) : void 0 : (0, r.jsx)("div", {
                                className: F.selectPlanChooseTitle,
                                children: w.default.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE
                            })), (0, r.jsx)("div", {
                                ...eP,
                                children: k.map(e => (0, r.jsx)(j.default, {
                                    planId: e,
                                    premiumSubscription: $ ? null : null != N ? N : null,
                                    selectPlan: em,
                                    selected: (null == ef ? void 0 : ef.id) === e,
                                    priceOptions: e_,
                                    shouldShowUpdatedPaymentModal: eh,
                                    isEligibleForDiscount: eI,
                                    discountAmountOff: ev
                                }, e))
                            }), (0, r.jsx)("div", {
                                children: eN && null != ef && null != eT ? (0, r.jsxs)("div", {
                                    children: [(0, r.jsx)("div", {
                                        className: F.selectPlanDivider
                                    }), (0, r.jsx)(g.PremiumInvoiceTableTotalRow, {
                                        label: w.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                                        value: (0, r.jsx)(M.default, {
                                            price: eT.amount,
                                            currency: eT.currency,
                                            intervalType: $ ? null : ef.interval,
                                            intervalCount: ef.intervalCount,
                                            isPrepaidPaymentSource: eO
                                        }),
                                        className: F.selectPlanTotalRow
                                    })]
                                }) : null
                            }), eA && (0, r.jsx)(o.default, {
                                message: w.default.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
                                    kunaPriceWithCurrency: (0, T.formatPrice)(7.5345 * eT.amount, B.CurrencyCodes.HRK)
                                })
                            }), !$ && !eh && V && (0, r.jsx)(o.default, {
                                message: w.default.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
                                    documentationLink: S.default.getArticleURL(U.HelpdeskArticles.LOCALIZED_PRICING)
                                })
                            })]
                        })]
                    })
                })
            }

            function k(e) {
                let {
                    onStepChange: t,
                    selectedPlanId: n,
                    paymentSources: s,
                    onBackClick: i,
                    showBackButton: a,
                    planOptions: l,
                    shouldRenderUpdatedPaymentModal: o = !1,
                    isTrial: c
                } = e, {
                    paymentSources: m,
                    selectedPlan: _
                } = (0, f.usePaymentContext)(), {
                    isGift: E
                } = (0, d.useGiftContext)();
                return s = null != s ? s : m, n = null != n ? n : null == _ ? void 0 : _.id, (0, r.jsxs)(r.Fragment, {
                    children: [null != n && l.includes(n) ? (0, r.jsx)(Y, {
                        paymentSources: s,
                        onStepChange: t,
                        selectedPlanId: n,
                        isGift: E,
                        shouldRenderUpdatedPaymentModal: o,
                        isTrial: c
                    }) : (0, r.jsx)(u.Button, {
                        disabled: !0,
                        children: w.default.Messages.SELECT
                    }), a ? (0, r.jsx)(L.default, {
                        onClick: i
                    }) : null]
                })
            }

            function Y(e) {
                let {
                    onStepChange: t,
                    selectedPlanId: n,
                    isGift: s,
                    paymentSources: i,
                    shouldRenderUpdatedPaymentModal: a,
                    isTrial: o
                } = e, c = (0, l.useStateFromStores)([I.default], () => I.default.getPremiumTypeSubscription()), {
                    hasEntitlements: d
                } = (0, b.useSubscriptionEntitlements)(n, s), f = null != c && null != c.paymentSourceId || Object.keys(i).length > 0 || d && !o;
                var E = a ? w.default.Messages.NEXT : w.default.Messages.SELECT,
                    p = m.Step.ADD_PAYMENT_STEPS;
                return f ? p = m.Step.REVIEW : (0, N.isDesktop)() && function() {
                    let {
                        experiment: e
                    } = A.default.getCurrentConfig({
                        location: "5f89bb_2"
                    });
                    if (e === A.CheckoutV2ChildExperiments.BROWSER_AUTOFILL) {
                        let {
                            enabled: e
                        } = _.default.getCurrentConfig({
                            location: "5f89bb_3"
                        }, {
                            autoTrackExposure: !0
                        });
                        return e
                    }
                    return !1
                }() && (p = m.Step.AWAITING_BROWSER_CHECKOUT, E = w.default.Messages.CONTINUE_IN_BROWSER), (0, r.jsx)(u.Button, {
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
                i = n.n(s),
                a = n("627445"),
                l = n.n(a),
                u = n("446674"),
                o = n("669491"),
                c = n("77078"),
                d = n("635357"),
                f = n("915639"),
                m = n("10514"),
                _ = n("659632"),
                E = n("719923"),
                I = n("153160"),
                p = n("646718"),
                S = n("782340"),
                N = n("419063");

            function P(e) {
                let {
                    premiumSubscription: t,
                    planId: n,
                    selectPlan: s,
                    selected: a,
                    priceOptions: P,
                    shouldShowUpdatedPaymentModal: T,
                    isEligibleForDiscount: C,
                    discountAmountOff: A
                } = e, O = (0, u.useStateFromStores)([f.default], () => f.default.locale), R = (0, u.useStateFromStores)([m.default], () => m.default.get(n)), {
                    isGift: h,
                    giftRecipient: v
                } = (0, d.useGiftContext)(), g = h && (0, _.shouldShowCustomGiftExperience)(v, !0, "PremiumSwitchPlanSelectOption");
                l(null != R, "Missing subscriptionPlan");
                let M = null != t && t.planId === n,
                    x = M || n === p.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && null != t && [p.SubscriptionPlans.PREMIUM_YEAR_TIER_0, p.SubscriptionPlans.PREMIUM_YEAR_TIER_1].includes(t.planId),
                    y = p.DISCOUNTS[n],
                    L = (0, E.getPrice)(n, !1, h, P),
                    b = (0, E.isPrepaidPaymentSource)(P.paymentSourceId),
                    j = null != y && !T,
                    G = R.interval === p.SubscriptionIntervalTypes.YEAR ? S.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : S.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
                    D = () => null != y && (0, r.jsx)(c.Text, {
                        tag: "span",
                        variant: "eyebrow",
                        color: "always-white",
                        className: N.planOptionDiscount,
                        children: S.default.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
                            discount: (0, I.formatPercent)(O, y / 100)
                        })
                    }),
                    U = () => R.interval === p.SubscriptionIntervalTypes.YEAR && null != t || j && !M ? R.interval === p.SubscriptionIntervalTypes.YEAR && null != t ? (0, r.jsxs)("span", {
                        className: N.planOptionMonthsFree,
                        children: ["(", S.default.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS, ")"]
                    }) : j && !M ? D() : void 0 : null;
                return (0, r.jsxs)(c.Clickable, {
                    role: g ? "menuitem" : "radio",
                    "aria-checked": a,
                    tabIndex: a ? 0 : -1,
                    focusProps: {
                        offset: {
                            left: -4,
                            right: -4,
                            top: 0,
                            bottom: 0
                        }
                    },
                    onClick: x ? void 0 : () => s(n),
                    className: i(N.planOptionClickableContainer, {
                        [N.selectedPlan]: g && a,
                        [N.selectionBox]: g
                    }),
                    children: [(0, r.jsxs)("div", {
                        className: i(N.planOption, {
                            [N.planOptionDisabled]: x
                        }),
                        children: [(0, r.jsxs)("div", {
                            className: N.planOptionClickable,
                            children: [!g && (0, r.jsx)(c.Checkbox, {
                                readOnly: !0,
                                displayOnly: !0,
                                value: a,
                                shape: c.Checkbox.Shapes.ROUND,
                                color: o.default.unsafe_rawColors.BRAND_500.css,
                                type: c.Checkbox.Types.INVERTED,
                                className: N.planOptionCheckbox
                            }), (0, r.jsxs)("div", {
                                children: [(0, r.jsxs)("div", {
                                    className: i(N.planOptionInterval, {
                                        [N.optionSelected]: a || g,
                                        [N.updatedOptionSelected]: T && (a || g)
                                    }),
                                    children: [(0, E.getIntervalString)(R.interval, h, b, R.intervalCount, g, (0, E.getPremiumType)(R.id)), g && U()]
                                }), g && (0, r.jsx)("div", {
                                    className: N.planOneTimeCost,
                                    children: S.default.Messages.ONE_TIME_CHARGE.format({
                                        currencyAmount: (0, I.formatPrice)(L.amount, L.currency)
                                    })
                                })]
                            }), M && (0, r.jsxs)("span", {
                                className: N.planOptionCurrentPlan,
                                children: ["(", S.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, ")"]
                            }), !g && U()]
                        }), T ? (0, r.jsx)("div", {
                            className: i({
                                [N.optionPriceSelected]: a
                            }),
                            children: S.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                price: (() => {
                                    if (C && null != A) return R.interval === p.SubscriptionIntervalTypes.MONTH ? (0, I.formatPrice)(L.amount - A, L.currency) : (0, I.formatPrice)(L.amount, L.currency);
                                    return (0, I.formatPrice)(0, L.currency, {
                                        maximumFractionDigits: 0
                                    })
                                })()
                            })
                        }) : (0, r.jsx)("div", {
                            className: i({
                                [N.optionSelected]: a || g
                            }),
                            children: (0, I.formatPrice)(L.amount, L.currency)
                        })]
                    }), T && (0, r.jsx)("div", {
                        className: N.planOptionSubtextContainer,
                        children: (0, r.jsx)(c.Text, {
                            variant: "text-md/normal",
                            color: a ? "text-normal" : "interactive-normal",
                            className: i(N.planOptionSubtext, {
                                [N.discountPlanOptionSubtext]: C
                            }),
                            children: C && null != A ? R.interval === p.SubscriptionIntervalTypes.MONTH ? S.default.Messages.BILLING_DISCOUNT_MONTHLY_PRICE.format({
                                discountedPrice: (0, I.formatPrice)(L.amount - A, L.currency),
                                regularPrice: (0, I.formatPrice)(L.amount, L.currency)
                            }) : S.default.Messages.BILLING_YEARLY_PLAN_SAVINGS.format({
                                percent: y
                            }) : G.format({
                                price: (0, I.formatPrice)(L.amount, L.currency)
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
                i = n("87657"),
                a = n("158998"),
                l = n("782340"),
                u = n("438269");
            let o = e => {
                let {
                    giftRecipient: t
                } = e;
                return null == t ? null : (0, r.jsxs)("div", {
                    className: u.content,
                    children: [(0, r.jsx)(s.FormTitle, {
                        children: l.default.Messages.FORM_LABEL_SEND_TO
                    }), (0, r.jsxs)("div", {
                        className: u.giftRecipientInfo,
                        children: [(0, r.jsx)(i.default, {
                            user: t,
                            className: u.giftRecipient,
                            size: s.AvatarSizes.SIZE_20
                        }), (0, r.jsx)(s.Heading, {
                            className: u.giftRecipientName,
                            variant: "text-md/normal",
                            children: a.default.getName(t)
                        }), (0, r.jsx)(s.Heading, {
                            className: u.giftRecipientTag,
                            variant: "text-md/normal",
                            children: a.default.getUserTag(t)
                        })]
                    })]
                })
            }
        },
        527866: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return Y
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                i = n("627445"),
                a = n.n(i),
                l = n("976979"),
                u = n("446674"),
                o = n("669491"),
                c = n("77078"),
                d = n("335430"),
                f = n("703332"),
                m = n("740055"),
                _ = n("545876"),
                E = n("736978"),
                I = n("635357"),
                p = n("642906"),
                S = n("286350"),
                N = n("102492"),
                P = n("176108"),
                T = n("102985"),
                C = n("160299"),
                A = n("10514"),
                O = n("68238"),
                R = n("659632"),
                h = n("719923"),
                v = n("153160"),
                g = n("210721"),
                M = n("809071"),
                x = n("154889"),
                y = n("883662"),
                L = n("623003"),
                b = n("65324"),
                j = n("570727"),
                G = n("146163"),
                D = n("661128"),
                U = n("617223"),
                B = n("646718"),
                w = n("49111"),
                F = n("843455"),
                H = n("782340"),
                k = n("615689");

            function Y(e) {
                var t, n, i;
                let Y, W, {
                        selectedPlanId: Z,
                        paymentSources: V,
                        priceOptions: K,
                        currencies: z,
                        onCurrencyChange: J,
                        onPaymentSourceChange: X,
                        handlePaymentSourceAdd: q,
                        setHasAcceptedTerms: Q,
                        legalTermsNodeRef: $,
                        hasLegalTermsFlash: ee,
                        trialId: et,
                        trialFooterMessageOverride: en,
                        reviewWarningMessage: er,
                        metadata: es,
                        purchaseState: ei,
                        hideSubscriptionDetails: ea,
                        referralTrialOfferId: el,
                        isTrial: eu = !1,
                        isDiscount: eo = !1
                    } = e,
                    {
                        isEmbeddedIAP: ec,
                        activeSubscription: ed,
                        selectedSkuId: ef,
                        defaultPlanId: em,
                        isPremium: e_,
                        startedPaymentFlowWithPaymentSourcesRef: eE
                    } = (0, p.usePaymentContext)(),
                    {
                        isGift: eI,
                        giftRecipient: ep,
                        selectedGiftStyle: eS
                    } = (0, I.useGiftContext)(),
                    eN = (0, x.usePremiumDiscountOffer)(),
                    eP = null == eN ? void 0 : null === (t = eN.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => B.SubscriptionPlanInfo[e].skuId === ef),
                    eT = !eI && null != eN && null != ef && eP,
                    eC = (0, u.useStateFromStores)([A.default], () => A.default.get(Z));
                a(null != eC, "Missing plan");
                let eA = [{
                        planId: eC.id,
                        quantity: 1
                    }],
                    eO = ei === S.PurchaseState.PURCHASING || ei === S.PurchaseState.COMPLETED,
                    eR = eI || eO,
                    [eh, ev] = (0, M.useSubscriptionInvoicePreview)({
                        items: eA,
                        renewal: !1,
                        preventFetch: eR,
                        applyEntitlements: !0,
                        paymentSourceId: K.paymentSourceId,
                        currency: K.currency,
                        trialId: et,
                        metadata: es
                    }),
                    [eg, eM] = (0, M.useSubscriptionInvoicePreview)({
                        items: eA,
                        renewal: !0,
                        preventFetch: eR,
                        trialId: et,
                        paymentSourceId: K.paymentSourceId,
                        currency: K.currency,
                        metadata: es
                    }),
                    [ex, ey] = (0, M.useSubscriptionInvoicePreview)({
                        items: [{
                            planId: B.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
                            quantity: 1
                        }],
                        renewal: !0,
                        preventFetch: !eT,
                        trialId: et,
                        paymentSourceId: K.paymentSourceId,
                        currency: K.currency,
                        metadata: es
                    }),
                    eL = eI && (0, R.shouldShowCustomGiftExperience)(ep, !0, "PremiumSubscriptionReview"),
                    eb = null !== (i = null != ev ? ev : eM) && void 0 !== i ? i : ey,
                    ej = (0, u.useStateFromStores)([T.default], () => T.default.enabled),
                    eG = K.paymentSourceId,
                    {
                        hasEntitlements: eD,
                        entitlements: eU
                    } = (0, D.useSubscriptionEntitlements)(eC.id, eI),
                    eB = (0, h.isPrepaidPaymentSource)(K.paymentSourceId),
                    ew = (0, N.checkNoPaymentTrialEnabled)(et, eG, Z),
                    eF = (0, P.inOneStepSubscriptionCheckout)({
                        isTrial: eu,
                        isGift: eI,
                        selectedSkuId: ef,
                        startedPaymentFlowWithPaymentSources: eE.current
                    }),
                    [eH, ek] = s.useState(null == eh ? void 0 : eh.subscriptionPeriodEnd);
                s.useEffect(() => {
                    null == eH && ek(null == eh ? void 0 : eh.subscriptionPeriodEnd)
                }, [null == eh ? void 0 : eh.subscriptionPeriodEnd, eH]);
                let eY = s.useMemo(() => (0, h.getPremiumPlanOptions)({
                        skuId: ef,
                        isPremium: e_,
                        multiMonthPlans: [],
                        currentSubscription: ed,
                        isGift: eI,
                        isEligibleForTrial: eu,
                        defaultPlanId: em,
                        defaultToMonthlyPlan: !1
                    }), [ef, ed, eI, em, e_, eu]),
                    eW = (0, P.planSwitchLoadingShowSpinner)(eF, eh, eC);
                if (null != eb) {
                    let e = eb.message;
                    return eb.code === E.ErrorCodes.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (e = H.default.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY), (0, r.jsx)(c.FormErrorBlock, {
                        children: e
                    })
                }
                if (eI) W = (0, r.jsx)(G.SubscriptionInvoiceGift, {
                    paymentSourceId: K.paymentSourceId,
                    plan: eC,
                    className: k.invoice,
                    isPrepaidPaymentSource: eB,
                    isCustomGift: eL
                });
                else if (eu && null != eh) W = (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(y.PremiumInvoiceTableDivider, {
                        negativeMarginTop: !0
                    }), (0, r.jsxs)(y.PremiumInvoiceTable, {
                        className: k.invoice,
                        children: [(0, r.jsxs)("div", {
                            className: k.trialPriceLine,
                            children: [(0, r.jsx)(c.Text, {
                                variant: "text-md/bold",
                                children: H.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
                            }), (0, r.jsx)(c.Text, {
                                variant: "text-md/normal",
                                children: H.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                    price: (0, v.formatPrice)(0, eh.currency, {
                                        maximumFractionDigits: 0
                                    })
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: k.afterTrialPriceLine,
                            children: (0, r.jsx)(G.PremiumTrialInvoiceTableRow, {
                                invoice: eh,
                                plan: eC
                            })
                        })]
                    })]
                });
                else {
                    if (null == eh || null == eg || eW) return (0, r.jsx)("div", {
                        className: k.spinnerWrapper,
                        children: (0, r.jsx)(c.Spinner, {})
                    });
                    eu && eh.subscriptionPeriodEnd !== eg.subscriptionPeriodEnd && (Y = eh.subscriptionPeriodEnd), W = (0, r.jsxs)(y.PremiumInvoiceTable, {
                        className: k.invoice,
                        children: [(0, r.jsx)(y.PremiumInvoiceTableHeader, {
                            children: H.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
                        }), (0, r.jsx)(G.PremiumSubscriptionChangePlanInvoiceRows, {
                            invoice: eh,
                            newPlan: eC,
                            isPrepaidPaymentSource: eB,
                            referralTrialOfferId: el
                        }), eB ? null : (0, r.jsx)(G.SubscriptionInvoiceFooter, {
                            renewalInvoice: eg,
                            isTrial: eu,
                            priceOptions: K,
                            overrideRenewalDate: Y,
                            trialFooterMessageOverride: en,
                            hideSubscriptionDetails: ea
                        })]
                    })
                }
                let eZ = l.CountryCodesSets.EEA_COUNTRIES.has(C.default.ipCountryCodeWithFallback),
                    {
                        checkboxLabel: eV,
                        checkboxClassname: eK,
                        checkboxLabelClassname: ez
                    } = function(e, t, n) {
                        let r = null,
                            s = null,
                            i = null;
                        if (e && null != t) {
                            let {
                                intervalType: e,
                                intervalCount: a
                            } = h.default.getIntervalForInvoice(t), l = (0, v.formatRate)((0, v.formatPrice)(t.total, t.currency), e, a), u = null != n ? n : t.subscriptionPeriodEnd;
                            r = H.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
                                termsURL: w.MarketingURLs.TERMS,
                                paidURL: w.MarketingURLs.PAID_TERMS,
                                rate: l,
                                renewalDate: u
                            }), s = k.trialCheckbox, i = k.trialCheckboxLabel
                        }
                        return {
                            checkboxLabel: r,
                            checkboxClassname: s,
                            checkboxLabelClassname: i
                        }
                    }(null != eu && eu, eg, Y),
                    eJ = H.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                        planName: eC.name
                    });
                return eI && !eL ? eJ = H.default.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : eI && eL ? eJ = "" : (0, h.isPremiumSubscriptionPlan)(eC.id) && (eJ = h.default.getBillingReviewSubheader(null, eC)), ew ? null : (0, r.jsxs)("div", {
                    className: k.stepBody,
                    children: [null != er && (0, r.jsxs)("div", {
                        className: k.reviewWarningMessageContainer,
                        children: [(0, r.jsx)(O.default, {
                            color: o.default.unsafe_rawColors.YELLOW_300.css,
                            width: 20,
                            height: 20
                        }), (0, r.jsx)(c.Text, {
                            className: k.reviewWarningMessage,
                            variant: "text-sm/normal",
                            children: er
                        })]
                    }), eF && (0, r.jsxs)("div", {
                        children: [(0, r.jsx)(y.PremiumInvoiceTableDivider, {
                            negativeMarginTop: !0
                        }), (0, r.jsx)(j.PremiumSwitchPlanSelectBody, {
                            planOptions: eY,
                            eligibleForMultiMonthPlans: !1,
                            referralTrialOfferId: void 0,
                            selectedPlanId: Z,
                            subscriptionPeriodEnd: eH,
                            showTotal: !1,
                            discountInvoiceItems: eT ? null == ex ? void 0 : ex.invoiceItems : void 0
                        }), (0, r.jsx)(y.PremiumInvoiceTableDivider, {})]
                    }), !eu && (0, r.jsx)(c.FormTitle, {
                        tag: c.FormTitleTags.H5,
                        children: eJ
                    }), eL && null != eS && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(b.default, {
                            defaultAnimationState: g.AnimationState.LOOP,
                            giftStyle: eS,
                            shouldAnimate: !0,
                            className: k.giftMainAnimation
                        }), (0, r.jsx)(U.SendGiftToUser, {
                            giftRecipient: ep
                        })]
                    }), W, (0, r.jsxs)("div", {
                        className: k.paymentSourceWrapper,
                        children: [eu ? (0, r.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H5,
                            className: k.formTitle,
                            children: H.default.Messages.BILLING_STEP_PAYMENT_METHOD
                        }) : (0, r.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H5,
                            children: H.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, r.jsx)(m.default, {
                            paymentSources: Object.values(V),
                            selectedPaymentSourceId: eG,
                            prependOption: eD && !eu ? {
                                label: H.default.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
                                value: null
                            } : null,
                            onChange: X,
                            onPaymentSourceAdd: q,
                            hidePersonalInformation: ej,
                            isTrial: eu
                        }), eD && null == eG ? (0, r.jsx)("div", {
                            className: k.paymentSourceOptionalWarning,
                            children: H.default.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({
                                months: eU.length
                            })
                        }) : null, eo ? null : (0, r.jsxs)(d.CurrencyWrapper, {
                            currencies: z,
                            className: k.currencyWrapper,
                            children: [(0, r.jsx)(c.FormTitle, {
                                tag: c.FormTitleTags.H5,
                                children: H.default.Messages.PAYMENT_CURRENCY
                            }), (0, r.jsx)(d.default, {
                                selectedCurrency: K.currency,
                                currencies: z,
                                onChange: J
                            })]
                        })]
                    }), (0, r.jsx)(L.default, {
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
                                renewalInvoice: eg,
                                isGift: eI,
                                paymentSourceType: null === (n = V[null != eG ? eG : ""]) || void 0 === n ? void 0 : n.type,
                                isEmbeddedIAP: ec,
                                basePrice: (0, h.getPrice)(eC.id, !1, eI, K)
                            }),
                            showPricingLink: eC.currency !== F.CurrencyCodes.USD,
                            showWithdrawalWaiver: eZ,
                            disabled: eO,
                            isTrial: eu,
                            isDiscount: eo,
                            subscriptionPlan: eC,
                            isGift: eI
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
                i = n("627445"),
                a = n.n(i),
                l = n("446674"),
                u = n("77078"),
                o = n("850068"),
                c = n("685665"),
                d = n("635357"),
                f = n("642906"),
                m = n("605886"),
                _ = n("286350"),
                E = n("376641"),
                I = n("102492"),
                p = n("926223"),
                S = n("467292"),
                N = n("622839"),
                P = n("145131"),
                T = n("599110"),
                C = n("719923"),
                A = n("921149"),
                O = n("177998"),
                R = n("661128"),
                h = n("868869"),
                v = n("49111"),
                g = n("717913");

            function M(e) {
                let {
                    premiumSubscription: t,
                    setPurchaseState: n,
                    onBack: i,
                    onNext: M,
                    legalTermsNodeRef: x,
                    flashLegalTerms: y,
                    invoiceError: L,
                    planError: b,
                    onPurchaseError: j,
                    baseAnalyticsData: G,
                    flowStartTime: D,
                    trialId: U,
                    planGroup: B,
                    analyticsLocation: w,
                    purchaseTokenAuthState: F,
                    openInvoiceId: H,
                    metadata: k,
                    backButtonEligible: Y,
                    disablePurchase: W,
                    isTrial: Z = !1
                } = e, {
                    selectedPlan: V,
                    priceOptions: K,
                    setHasAcceptedTerms: z,
                    setPurchaseError: J,
                    purchaseType: X,
                    paymentSourceId: q,
                    paymentSources: Q,
                    selectedSkuId: $,
                    skusById: ee,
                    skuPricePreviewsById: et,
                    referralCode: en,
                    contextMetadata: er
                } = (0, f.usePaymentContext)(), {
                    isGift: es,
                    selectedGiftStyle: ei,
                    customGiftMessage: ea,
                    emojiConfetti: el,
                    soundEffect: eu,
                    giftRecipient: eo
                } = (0, d.useGiftContext)(), ec = null == V ? void 0 : V.id, ed = (0, I.checkNoPaymentTrialEnabled)(U, K.paymentSourceId, ec), ef = (0, l.useStateFromStores)([p.default], () => p.default.popupCallbackCalled), {
                    analyticsLocations: em
                } = (0, c.default)(), e_ = null != q ? Q[q] : null, [eE, eI] = s.useState(ed), [ep, eS] = s.useState(!1), {
                    hasEntitlements: eN
                } = (0, R.useSubscriptionEntitlements)(ec, es), eP = (0, C.isPrepaidPaymentSource)(K.paymentSourceId), eT = eN || ed, eC = (0, A.useIsPrepaidPaymentPastDue)(), eA = null, eO = null;
                if (X === v.PurchaseTypes.ONE_TIME) {
                    var eR;
                    a(null != $, "SKU must be selected for one-time purchases"), a(null != (eA = null !== (eR = ee[$]) && void 0 !== eR ? eR : null), "SKU must exist and be fetched.");
                    let e = et[$],
                        t = null != q ? q : N.NO_PAYMENT_SOURCE;
                    eO = null != e ? e[t] : null
                }
                let eh = async () => {
                    await (0, m.purchaseProduct)({
                        setPurchaseState: n,
                        setHasAcceptedTerms: z,
                        setIsSubmitting: eI,
                        setPurchaseError: J,
                        hasRedirectURL: ep,
                        setHasRedirectURL: eS,
                        isGift: es,
                        giftStyle: ei,
                        baseAnalyticsData: G,
                        analyticsLocation: w,
                        analyticsLocations: em,
                        flowStartTime: D,
                        subscriptionPlan: V,
                        planGroup: B,
                        trialId: U,
                        priceOptions: K,
                        paymentSource: e_,
                        isPrepaidPaymentPastDue: eC,
                        openInvoiceId: H,
                        premiumSubscription: t,
                        onNext: M,
                        metadata: k,
                        sku: eA,
                        skuPricePreview: eO,
                        purchaseType: X,
                        referralCode: en,
                        loadId: er.loadId,
                        giftRecipient: eo,
                        customMessage: ea,
                        emojiConfetti: el,
                        soundEffect: eu
                    })
                };
                s.useEffect(() => {
                    let e = async () => {
                        if (!0 === ef) try {
                            if (null == p.default.redirectedPaymentId) return;
                            await (0, o.redirectedPaymentSucceeded)(p.default.redirectedPaymentId), T.default.track(v.AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, {
                                ...G,
                                duration_ms: Date.now() - D,
                                payment_source_type: null == e_ ? void 0 : e_.type
                            }), n(_.PurchaseState.COMPLETED), M()
                        } catch (e) {
                            n(_.PurchaseState.FAIL), j(e), T.default.track(v.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                                ...G,
                                payment_source_id: q,
                                payment_source_type: null == e_ ? void 0 : e_.type,
                                duration_ms: Date.now() - D
                            })
                        } finally {
                            eI(!1), (0, o.resetPaymentIntentId)()
                        } else F === S.PurchaseTokenAuthState.SUCCESS && await eh()
                    };
                    e()
                }, [ef]), s.useEffect(() => {
                    ed && !es && null == t && eh()
                }, [ed, es, t]);
                let ev = null != H || X === v.PurchaseTypes.ONE_TIME;
                return ed ? null : (0, r.jsxs)(u.ModalFooter, {
                    align: P.default.Align.CENTER,
                    children: [(0, r.jsx)(h.default, {
                        legalTermsNodeRef: x,
                        invoiceError: L,
                        planError: b,
                        disablePurchase: W,
                        flashLegalTerms: y,
                        isSubmitting: eE,
                        premiumSubscription: t,
                        isGift: es,
                        planGroup: B,
                        isPrepaid: eP,
                        isTrial: Z,
                        makePurchase: eh,
                        needsPaymentSource: null == e_ && !eT
                    }), (0, r.jsx)(E.default, {}), Y && !ev ? (0, r.jsx)("div", {
                        className: g.back,
                        children: (0, r.jsx)(O.default, {
                            onClick: i
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
                i = n.n(s),
                a = n("77078"),
                l = n("216422"),
                u = n("782340"),
                o = n("881609");

            function c(e) {
                let {
                    text: t = u.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                    className: n
                } = e;
                return (0, r.jsx)(a.Tooltip, {
                    text: t,
                    children: e => (0, r.jsx)(a.Clickable, {
                        ...e,
                        children: (0, r.jsx)(l.default, {
                            className: i(o.nitroWheel, n)
                        })
                    })
                })
            }
        },
        570697: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("781738");
            var r = n("37983");
            n("884691");
            var s = n("414456"),
                i = n.n(s),
                a = n("65597"),
                l = n("77078"),
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
                    children: t.map((e, t) => (0, r.jsx)(l.Text, {
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

            function E(e) {
                let {
                    title: t,
                    titleIcon: n,
                    titleId: s,
                    description: o,
                    children: E,
                    className: I,
                    errors: p,
                    disabled: S = !1,
                    hideDivider: N = !1,
                    showBorder: P = !1,
                    borderType: T,
                    hasBackground: C = !1,
                    forcedDivider: A = !1,
                    showPremiumIcon: O = !1
                } = e, R = (0, a.default)([u.default], () => {
                    let e = u.default.activeSubstep;
                    return null != e && f.PremiumTutorialSubstepsToStepMap[e] === f.PremiumTutorialSteps.PROFILE_CUSTOMIZATION
                });
                return (0, r.jsx)("div", {
                    className: i(m.customizationSection, I, {
                        [m.disabled]: S,
                        [m.hideDivider]: N,
                        [m.showBorder]: P,
                        [m.withDivider]: A
                    }),
                    children: (0, r.jsxs)(d.default, {
                        className: m.customizationSectionBorder,
                        backgroundClassName: m.customizationSectionBackground,
                        isShown: P && !R,
                        type: T,
                        hasBackground: C,
                        children: [(0, r.jsxs)(l.FormTitle, {
                            className: m.title,
                            id: s,
                            children: [t, O && (0, r.jsx)(c.default, {}), n]
                        }), null != o ? (0, r.jsx)(l.FormText, {
                            type: l.FormText.Types.DESCRIPTION,
                            className: m.sectionDescription,
                            children: o
                        }) : null, E, null != p && (0, r.jsx)(_, {
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
            var r, s, i = n("37983"),
                a = n("884691"),
                l = n("414456"),
                u = n.n(l),
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
            var d = a.forwardRef(function(e, t) {
                let {
                    children: n,
                    type: r = "premium",
                    isShown: s,
                    hasBackground: a = !1,
                    className: l,
                    backgroundClassName: d
                } = e;
                if (!s) return (0, i.jsx)(i.Fragment, {
                    children: n
                });
                let {
                    border: f,
                    background: m
                } = c[r];
                return (0, i.jsx)("div", {
                    ref: t,
                    className: u(f, l),
                    children: (0, i.jsx)("div", {
                        className: u(a ? m : o.background, d),
                        children: n
                    })
                })
            })
        },
        742926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                i = n("669491"),
                a = n("292915"),
                l = n("77078"),
                u = n("389480"),
                o = n("191191"),
                c = n("782340"),
                d = n("895576");
            let f = [54, 8, 8, 8];

            function m(e) {
                let {
                    onSelect: t,
                    sound: n
                } = e, [m, _] = s.useState(!1);

                function E(e) {
                    _(!1), null == t || t(e)
                }
                let I = e => (0, r.jsxs)("div", {
                    className: d.customGiftHeader,
                    children: [(0, r.jsxs)("div", {
                        className: d.customGiftHeaderText,
                        children: [(0, r.jsx)(l.Text, {
                            variant: "text-md/bold",
                            children: c.default.Messages.GIFT_SELECT_SOUND
                        }), (0, r.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            children: c.default.Messages.GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION
                        })]
                    }), (0, r.jsx)("div", {
                        className: d.searchAndSound,
                        children: e
                    })]
                });
                return (0, r.jsx)(l.Popout, {
                    shouldShow: m,
                    position: "bottom",
                    align: "left",
                    onRequestClose: () => _(!1),
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, r.jsx)(l.Dialog, {
                            children: (0, r.jsx)(o.default, {
                                suppressPlaySound: !0,
                                shouldShowUpsell: !1,
                                guildId: null,
                                channel: null,
                                onClose: t,
                                onSelect: E,
                                analyticsSource: "gift soundboard",
                                soundButtonOverlay: u.SoundButtonOverlay.ADD,
                                listPadding: f,
                                renderHeader: I,
                                defaultSoundsOnly: !0
                            })
                        })
                    },
                    children: () => (0, r.jsx)(l.Clickable, {
                        className: d.sound,
                        onClick: () => _(!0),
                        children: null == n ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(a.SoundboardIcon, {
                                color: i.default.colors.WHITE,
                                className: d.soundIcon,
                                width: 14,
                                height: 14
                            }), (0, r.jsx)(l.Text, {
                                className: d.text,
                                variant: "text-sm/semibold",
                                children: c.default.Messages.GIFT_SELECT_SOUND
                            })]
                        }) : (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(l.Text, {
                                className: d.textSelected,
                                variant: "text-sm/semibold",
                                children: n.emojiName
                            }), (0, r.jsx)(l.Text, {
                                className: d.text,
                                variant: "text-sm/semibold",
                                children: n.name
                            })]
                        })
                    })
                })
            }

            function _(e) {
                let {
                    sound: t,
                    onSelect: n
                } = e;
                return (0, r.jsx)("div", {
                    className: d.container,
                    children: (0, r.jsx)(m, {
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
                    return E
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                i = n("414456"),
                a = n.n(i),
                l = n("301165"),
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
            var E = function(e) {
                let {
                    tabIndex: t,
                    className: n,
                    renderButtonContents: i,
                    active: E,
                    onClick: I,
                    "aria-controls": p,
                    focusProps: S
                } = e, [N, P] = s.useState(!1), [T, C] = s.useState(0), A = N || E, O = (0, c.getClass)(m, "emojiButton", A ? "Hovered" : "Normal"), R = function(e) {
                    let t = -e % d.EmojiSprites.PickerPerRow * 22,
                        n = -(22 * Math.floor(e / d.EmojiSprites.PickerPerRow));
                    return {
                        backgroundPosition: "".concat(t, "px ").concat(n, "px"),
                        backgroundSize: "".concat(22 * d.EmojiSprites.PickerPerRow, "px ").concat(22 * Math.ceil(d.EmojiSprites.PickerCount / d.EmojiSprites.PickerPerRow), "px")
                    }
                }(T), h = s.useCallback(() => {
                    if (A) return;
                    let e = Math.floor(Math.random() * d.EmojiSprites.PickerCount);
                    P(!0), C(e), o.default.dispatch({
                        type: "EMOJI_INTERACTION_INITIATED",
                        interaction: d.EmojiInteractionPoint.EmojiButtonMouseEntered
                    })
                }, [A, P, C]), v = s.useCallback(() => {
                    P(!1)
                }, [P]), g = s.useCallback(() => {
                    o.default.dispatch({
                        type: "EMOJI_INTERACTION_INITIATED",
                        interaction: d.EmojiInteractionPoint.EmojiButtonFocused
                    })
                }, []);
                return (0, r.jsx)(u.Button, {
                    look: u.Button.Looks.BLANK,
                    size: u.Button.Sizes.NONE,
                    tabIndex: t,
                    className: a(O, n),
                    onMouseEnter: h,
                    onMouseOver: h,
                    onMouseLeave: v,
                    onFocus: g,
                    onClick: I,
                    "aria-label": f.default.Messages.SELECT_EMOJI,
                    "aria-controls": p,
                    "aria-expanded": E,
                    "aria-haspopup": "dialog",
                    focusProps: S,
                    children: null != i ? i() : (0, r.jsx)(l.Spring, {
                        config: _,
                        to: {
                            value: A ? 1 : 0
                        },
                        children: e => {
                            let {
                                value: t
                            } = e;
                            return (0, r.jsx)(l.animated.div, {
                                className: m.sprite,
                                style: {
                                    ...R,
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
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("469563"),
                i = n("763377"),
                a = n("75196"),
                l = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: i,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: i,
                            fill: s,
                            d: "M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"
                        })
                    })
                }, i.CircleQuestionIcon, void 0, {
                    size: 24
                })
        },
        818643: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("469563"),
                i = n("851298"),
                a = n("75196"),
                l = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        ...i
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, a.default)(i),
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
                }, i.ImagePlusIcon, void 0, {
                    size: 24
                })
        },
        100300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("469563"),
                i = n("85941"),
                a = n("75196"),
                l = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: s = "currentColor",
                        ...i
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(i),
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
                }, i.ListBulletsIcon, void 0, {
                    size: 16
                })
        },
        548775: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("469563"),
                i = n("645156"),
                a = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: s = "currentColor",
                        className: i,
                        foreground: a
                    } = e;
                    return (0, r.jsx)("svg", {
                        className: i,
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
                                className: a,
                                fill: s,
                                points: "12 2.32 10.513 2 4 13.68 5.487 14"
                            })]
                        })
                    })
                }, i.SlashIcon, void 0, {
                    size: 16
                })
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