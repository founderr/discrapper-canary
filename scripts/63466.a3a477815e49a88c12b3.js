(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["63466"], {
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
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("575209");

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
            var i = function(e) {
                let {
                    currencies: t,
                    onChange: n,
                    selectedCurrency: a,
                    className: i,
                    disabled: u = !1
                } = e;
                if (t.length < 2) return null;
                let o = t.map((e, t) => ({
                    key: t,
                    value: e,
                    label: "".concat(e.toUpperCase(), " - ").concat((0, l.getCurrencyFullName)(e))
                }));
                return (0, r.jsx)(s.SingleSelect, {
                    value: a,
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
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("135898"),
                a = function(e) {
                    let {
                        message: t
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: l.warnBlock,
                        children: [(0, r.jsx)("div", {
                            className: l.warnIcon
                        }), (0, r.jsx)(s.Text, {
                            className: l.warnText,
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
                l = n("145131"),
                a = n("782340"),
                i = n("57153");
            let u = e => {
                    let {
                        className: t,
                        isEmailResent: n,
                        resendEmail: l
                    } = e;
                    return (0, r.jsx)("div", {
                        className: t,
                        children: (0, r.jsxs)("div", {
                            className: i.awaitingWrapper,
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
                                        onClick: l,
                                        children: a.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_ACTION
                                    })]
                                })]
                            })]
                        })
                    })
                },
                o = () => (0, r.jsx)("div", {
                    children: (0, r.jsx)(s.ModalFooter, {
                        justify: l.default.Justify.BETWEEN,
                        align: l.default.Align.CENTER,
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
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: a = "transparent",
                    secondaryColorClass: i = "",
                    color: u = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...c
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(c),
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
                        className: i
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-.28-16c-.98 0-1.81.47-2.27 1.14A1 1 0 1 1 7.8 7.01 4.73 4.73 0 0 1 11.72 5c2.5 0 4.65 1.88 4.65 4.38 0 2.1-1.54 3.77-3.52 4.24l.14 1a1 1 0 0 1-1.98.27l-.28-2a1 1 0 0 1 .99-1.14c1.54 0 2.65-1.14 2.65-2.38 0-1.23-1.1-2.37-2.65-2.37ZM13 17.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z",
                        clipRule: "evenodd",
                        className: o
                    })]
                })
            }
        },
        422244: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ShopIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M2.63 4.19A3 3 0 0 1 5.53 2H7a1 1 0 0 1 1 1v3.98a3.07 3.07 0 0 1-.3 1.35A2.97 2.97 0 0 1 4.98 10c-2 0-3.44-1.9-2.9-3.83l.55-1.98ZM10 2a1 1 0 0 0-1 1v4a3 3 0 0 0 3 3 3 3 0 0 0 3-2.97V3a1 1 0 0 0-1-1h-4ZM17 2a1 1 0 0 0-1 1v3.98a3.65 3.65 0 0 0 0 .05A2.95 2.95 0 0 0 19.02 10c2 0 3.44-1.9 2.9-3.83l-.55-1.98A3 3 0 0 0 18.47 2H17Z",
                        className: i
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M21 11.42V19a3 3 0 0 1-3 3h-2.75a.25.25 0 0 1-.25-.25V16a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v5.75c0 .14-.11.25-.25.25H6a3 3 0 0 1-3-3v-7.58c0-.18.2-.3.37-.24a4.46 4.46 0 0 0 4.94-1.1c.1-.12.3-.12.4 0a4.49 4.49 0 0 0 6.58 0c.1-.12.3-.12.4 0a4.45 4.45 0 0 0 4.94 1.1c.17-.07.37.06.37.24Z",
                        className: i
                    })]
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
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M19.12 2a.5.5 0 0 1 .43.76L8.22 21.64a.75.75 0 0 1-.64.36h-2.7a.5.5 0 0 1-.43-.76L15.78 2.36a.75.75 0 0 1 .64-.36h2.7Z",
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
            var r, s, l, a, i = n("884691"),
                u = n("917351");

            function o(e) {
                return 2 === e || 3 === e ? 1 : 0
            }(l = r || (r = {}))[l.VERTICAL_TOP = 0] = "VERTICAL_TOP", l[l.VERTICAL_BOTTOM = 1] = "VERTICAL_BOTTOM", l[l.HORIZONTAL_LEFT = 2] = "HORIZONTAL_LEFT", l[l.HORIZONTAL_RIGHT = 3] = "HORIZONTAL_RIGHT", (a = s || (s = {}))[a.VERTICAL = 0] = "VERTICAL", a[a.HORIZONTAL = 1] = "HORIZONTAL";
            var c = e => {
                let {
                    initialElementDimension: t,
                    resizableDomNodeRef: n,
                    maxDimension: r,
                    minDimension: s,
                    onElementResize: l,
                    onElementResizeEnd: a,
                    throttleDuration: c = 300,
                    orientation: d,
                    usePointerEvents: f = !1
                } = e, [m, _] = i.useState(!1), E = i.useRef(0), I = i.useRef(null == t ? 0 : t);
                return i.useLayoutEffect(() => {
                    if (!m || null == n.current) return;

                    function e(e) {
                        let t = 1 === o(d) ? e.screenX : e.screenY,
                            n = 0 === d || 2 === d,
                            l = (t - E.current) * (n ? -1 : 1),
                            a = I.current + l;
                        return (0, u.clamp)(a, null != s ? s : 0, null != r ? r : a)
                    }
                    let t = (0, u.throttle)(l, c),
                        i = r => {
                            if (null == n.current) return null;
                            let s = e(r),
                                l = 1 === o(d) ? "width" : "height";
                            n.current.style[l] = "".concat(s, "px"), t(s)
                        },
                        p = t => {
                            _(!1);
                            let n = e(t);
                            l(n), null == a || a(n)
                        },
                        S = f ? "pointerup" : "mouseup",
                        N = f ? "pointermove" : "mousemove",
                        P = n.current.ownerDocument;
                    return P.addEventListener(S, p), P.addEventListener(N, i), () => {
                        P.removeEventListener(S, p), P.removeEventListener(N, i), t.cancel()
                    }
                }, [m, l, s, r, d, n, c, a, f]), i.useCallback(e => {
                    let t = 1 === o(d);
                    null != n.current && (I.current = t ? n.current.offsetWidth : n.current.offsetHeight), E.current = t ? e.screenX : e.screenY, _(!0)
                }, [d, n])
            }
        },
        837148: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("862205");
            let s = (0, r.createExperiment)({
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
                    trackExposureOptions: r = {}
                } = e;
                return s.useExperiment({
                    location: t
                }, {
                    autoTrackExposure: n,
                    trackExposureOptions: r
                })
            }
        },
        903494: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("422244"),
                l = n("77078"),
                a = n("812204"),
                i = n("685665"),
                u = n("21526"),
                o = n("782340"),
                c = n("898689"),
                d = e => {
                    let {
                        onClose: t
                    } = e, {
                        analyticsLocations: n
                    } = (0, i.default)(), d = () => {
                        t(), (0, u.openCollectiblesShop)({
                            analyticsSource: a.default.PREMIUM_PAYMENT_MODAL,
                            analyticsLocations: n
                        })
                    };
                    return (0, r.jsxs)("div", {
                        className: c.container,
                        children: [(0, r.jsx)("div", {
                            className: c.iconBackground,
                            children: (0, r.jsx)(s.ShopIcon, {
                                width: 20,
                                height: 20,
                                color: l.tokens.colors.WHITE
                            })
                        }), (0, r.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            color: "header-primary",
                            children: o.default.Messages.COLLECTIBLES_GIFT_CODE_MODAL_UPSELL.format({
                                checkItOut: e => (0, r.jsx)(l.Clickable, {
                                    className: c.link,
                                    onClick: d,
                                    children: e
                                })
                            })
                        })]
                    })
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
                l = n("913144"),
                a = n("850068"),
                i = n("112679"),
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
                    referralCode: k,
                    loadId: H,
                    giftRecipient: Y,
                    customMessage: W,
                    emojiConfetti: Z,
                    soundEffect: K
                } = e;
                t(E.PurchaseState.PURCHASING), n(!0), r(!0), l.default.wait(i.clearError), N(null);
                try {
                    let e, n, r;
                    if (d.default.track(I.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
                            ...O,
                            duration_ms: Date.now() - g
                        }), P) return;
                    let l = (0, m.getGiftExperience)(Y),
                        i = m.GIFT_EXPERIENCES_WITH_CUSTOM_MESSAGING.has(l),
                        N = m.GIFT_EXPERIENCES_WITH_CUSTOM_EMOJI_SOUNDBOARD.has(l);
                    if (w === I.PurchaseTypes.ONE_TIME) s(null != B, "SKU must exist and be fetched."), s(null != F, "SKUPricePreview must exist."), e = await (0, o.purchaseSKU)(B.applicationId, B.id, {
                        expectedAmount: F.amount,
                        expectedCurrency: F.currency,
                        isGift: C,
                        paymentSource: L,
                        loadId: H,
                        giftStyle: A,
                        recipientId: l !== m.GiftExperience.DEFAULT ? null == Y ? void 0 : Y.id : void 0,
                        customMessage: i ? W : void 0,
                        emojiConfetti: N ? Z : void 0,
                        soundEffect: N ? K : void 0
                    });
                    else if (s(null != M, "Missing subscriptionPlan"), C) {
                        let t = (0, _.getPrice)(M.id, !1, !0, y);
                        if ("usd" === t.currency && (null == L ? void 0 : L.type) === I.PaymentSourceTypes.GCASH) {
                            var V;
                            let e = Error("Invalid USD currency for GCash");
                            (0, f.captureBillingException)(e, {
                                tags: {
                                    paymentSourceId: null !== (V = null == L ? void 0 : L.id) && void 0 !== V ? V : "",
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
                            loadId: H,
                            recipientId: l !== m.GiftExperience.DEFAULT ? null == Y ? void 0 : Y.id : void 0,
                            customMessage: i ? W : void 0,
                            emojiConfetti: N ? Z : void 0,
                            soundEffect: N ? K : void 0
                        })
                    } else e = b && null != j && null != L && null != G ? I.PREPAID_PAYMENT_SOURCES.has(L.type) ? await (0, a.payInvoiceManually)(G, j, L, y.currency) : await (0, a.updateSubscription)(G, {
                        paymentSource: L,
                        currency: y.currency
                    }, R, h) : null != G ? await (0, a.updateSubscription)(G, {
                        items: (0, _.getItemsWithUpsertedPlanIdForGroup)(G, M.id, 1, new Set(v)),
                        paymentSource: L,
                        currency: y.currency
                    }, R, h) : await (0, u.subscribe)({
                        planId: M.id,
                        currency: y.currency,
                        paymentSource: L,
                        trialId: x,
                        metadata: U,
                        referralCode: k,
                        loadId: H
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
                    C && (i && (z.is_custom_message_edited = W !== S.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE), N && (z.is_custom_emoji_sound_available = !0, null != Z && (z.emoji_name = Z.surrogates), null != K && (z.sound_id = K.soundId))), t(E.PurchaseState.COMPLETED), "subscription" in e ? n = null != e.subscription ? c.default.createFromServer(e.subscription) : null : "entitlements" in e && (r = null != e.entitlements ? e.entitlements : void 0), D(n, r)
                } catch (e) {
                    t(E.PurchaseState.FAIL), N(e), d.default.track(I.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                        ...O,
                        payment_error_code: null == e ? void 0 : e.code,
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
                    return _
                }
            });
            var r = n("627445"),
                s = n.n(r),
                l = n("775560"),
                a = n("917247"),
                i = n("724522"),
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
                    paymentAuthenticationState: h,
                    selectedSkuId: R
                } = (0, c.usePaymentContext)(), {
                    isGift: g
                } = (0, o.useGiftContext)(), M = {
                    ...(0, i.useSharedPaymentModal)(),
                    paymentSources: N,
                    paymentSourceId: P,
                    setPaymentSourceId: T,
                    purchaseError: C,
                    setPurchaseError: A,
                    purchaseErrorBlockRef: O,
                    paymentAuthenticationState: h
                }, v = (0, a.usePremiumTrialOffer)(E), x = !g && null != v && null != R && (0, m.SubscriptionTrials)[v.trial_id].skus.includes(R), y = null != I ? I : () => {
                    let e = Object.values(N).length < 1 && null == n ? d.Step.PLAN_SELECT : d.Step.REVIEW;
                    _(e, {
                        trackedFromStep: d.Step.PAYMENT_TYPE
                    })
                };
                s(S, "Step should be set here");
                let L = (0, l.useStableMemo)(() => Date.now(), [S]);
                return (0, i.AddPaymentFlow)({
                    paymentModalArgs: M,
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
                l = n("153727"),
                a = n("650484"),
                i = n("913390");

            function u() {
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(l.default, {}), (0, r.jsx)(a.PaymentPortalBody, {
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
                l = n("465527"),
                a = n("50517"),
                i = n("153727"),
                u = n("650484"),
                o = n("199142");

            function c() {
                let [e, t] = s.useState(!1), n = async () => {
                    t(!0), await (0, l.resendPaymentVerificationEmail)()
                };
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(i.default, {}), (0, r.jsx)(u.PaymentPortalBody, {
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
        39065: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                l = n("627445"),
                a = n.n(l),
                i = n("446674"),
                u = n("77078"),
                o = n("850068"),
                c = n("685665"),
                d = n("921149"),
                f = n("177998"),
                m = n("661128"),
                _ = n("868869"),
                E = n("926223"),
                I = n("467292"),
                p = n("622839"),
                S = n("145131"),
                N = n("599110"),
                P = n("719923"),
                T = n("635357"),
                C = n("642906"),
                A = n("605886"),
                O = n("286350"),
                h = n("102492"),
                R = n("376641"),
                g = n("49111"),
                M = n("994770");

            function v(e) {
                let {
                    premiumSubscription: t,
                    setPurchaseState: n,
                    onBack: l,
                    onNext: v,
                    legalTermsNodeRef: x,
                    flashLegalTerms: y,
                    invoiceError: L,
                    planError: b,
                    onPurchaseError: j,
                    baseAnalyticsData: G,
                    flowStartTime: D,
                    trialId: U,
                    planGroup: B,
                    analyticsLocation: F,
                    purchaseTokenAuthState: w,
                    openInvoiceId: k,
                    metadata: H,
                    backButtonEligible: Y,
                    disablePurchase: W,
                    isTrial: Z = !1
                } = e, {
                    selectedPlan: K,
                    priceOptions: V,
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
                } = (0, C.usePaymentContext)(), {
                    isGift: es,
                    selectedGiftStyle: el,
                    customGiftMessage: ea,
                    emojiConfetti: ei,
                    soundEffect: eu,
                    giftRecipient: eo
                } = (0, T.useGiftContext)(), ec = null == K ? void 0 : K.id, ed = (0, h.checkNoPaymentTrialEnabled)(U, V.paymentSourceId, ec), ef = (0, i.useStateFromStores)([E.default], () => E.default.popupCallbackCalled), {
                    analyticsLocations: em
                } = (0, c.default)(), e_ = null != q ? Q[q] : null, [eE, eI] = s.useState(ed), [ep, eS] = s.useState(!1), {
                    hasEntitlements: eN
                } = (0, m.useSubscriptionEntitlements)(ec, es), eP = (0, P.isPrepaidPaymentSource)(V.paymentSourceId), eT = eN || ed, eC = (0, d.useIsPrepaidPaymentPastDue)(), eA = null, eO = null;
                if (X === g.PurchaseTypes.ONE_TIME) {
                    var eh;
                    a(null != $, "SKU must be selected for one-time purchases"), a(null != (eA = null !== (eh = ee[$]) && void 0 !== eh ? eh : null), "SKU must exist and be fetched.");
                    let e = et[$],
                        t = null != q ? q : p.NO_PAYMENT_SOURCE;
                    eO = null != e ? e[t] : null
                }
                let eR = async () => {
                    await (0, A.purchaseProduct)({
                        setPurchaseState: n,
                        setHasAcceptedTerms: z,
                        setIsSubmitting: eI,
                        setPurchaseError: J,
                        hasRedirectURL: ep,
                        setHasRedirectURL: eS,
                        isGift: es,
                        giftStyle: el,
                        baseAnalyticsData: G,
                        analyticsLocation: F,
                        analyticsLocations: em,
                        flowStartTime: D,
                        subscriptionPlan: K,
                        planGroup: B,
                        trialId: U,
                        priceOptions: V,
                        paymentSource: e_,
                        isPrepaidPaymentPastDue: eC,
                        openInvoiceId: k,
                        premiumSubscription: t,
                        onNext: v,
                        metadata: H,
                        sku: eA,
                        skuPricePreview: eO,
                        purchaseType: X,
                        referralCode: en,
                        loadId: er.loadId,
                        giftRecipient: eo,
                        customMessage: ea,
                        emojiConfetti: ei,
                        soundEffect: eu
                    })
                };
                s.useEffect(() => {
                    let e = async () => {
                        if (!0 === ef) try {
                            if (null == E.default.redirectedPaymentId) return;
                            await (0, o.redirectedPaymentSucceeded)(E.default.redirectedPaymentId), n(O.PurchaseState.COMPLETED), v()
                        } catch (e) {
                            n(O.PurchaseState.FAIL), j(e), N.default.track(g.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                                ...G,
                                payment_error_code: null == e ? void 0 : e.code,
                                payment_source_id: q,
                                payment_source_type: null == e_ ? void 0 : e_.type,
                                duration_ms: Date.now() - D
                            })
                        } finally {
                            eI(!1), (0, o.resetPaymentIntentId)()
                        } else w === I.PurchaseTokenAuthState.SUCCESS && await eR()
                    };
                    e()
                }, [ef]), s.useEffect(() => {
                    ed && !es && null == t && eR()
                }, [ed, es, t]);
                let eg = null != k || X === g.PurchaseTypes.ONE_TIME && !es;
                return ed ? null : (0, r.jsxs)(u.ModalFooter, {
                    align: S.default.Align.CENTER,
                    children: [(0, r.jsx)(_.default, {
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
                        makePurchase: eR,
                        needsPaymentSource: null == e_ && !eT
                    }), (0, r.jsx)(R.default, {}), Y && !eg ? (0, r.jsx)("div", {
                        className: M.back,
                        children: (0, r.jsx)(f.default, {
                            onClick: l
                        })
                    }) : null]
                })
            }
        },
        883558: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
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
            var l = s
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
            let l = (0, r.createExperiment)({
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
                i = (e, t, n) => {
                    let {
                        bypassCheckout: r
                    } = l.useExperiment({
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
                l = n("701909"),
                a = n("153160"),
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
                    let l = (0, s.getI18NCountryName)(e);
                    if (t === u.CurrencyCodes.EUR) return n ? o.default.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
                        country: l
                    }) : o.default.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
                        currencyISOCode: t.toUpperCase()
                    });
                    return r ? o.default.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
                        countryName: l
                    }) : o.default.Messages.LOCALIZED_PRICING_NOTICE.format({
                        country: l
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
                        helpCenterLink: l.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
                        currencyISOCode: S.toUpperCase(),
                        localizedPriceWithCurrencySymbol: C
                    });
                    if (d.has(S) && (A = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
                            helpCenterLink: l.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
                            localizedPriceWithCurrencySymbol: C
                        })), c.has(S) && (A = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
                            helpCenterLink: l.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: S.toUpperCase(),
                            localizedPriceWithCurrencySymbol: C
                        })), null != n && !n.hasPremiumNitroMonthly && (A = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
                            helpCenterLink: l.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: S.toUpperCase()
                        })), S === u.CurrencyCodes.EUR && (A = r ? o.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
                            country: (0, s.getI18NCountryName)(E),
                            currencyISOCode: S.toUpperCase(),
                            helpCenterLink: l.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
                        }) : o.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
                            currencyISOCode: S.toUpperCase(),
                            helpCenterLink: l.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
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
                            helpCenterLink: l.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
                            paymentMethods: s.format(r)
                        })
                    }
                    return {
                        localizedPricingBannerHeader: o.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
                            country: (0, s.getI18NCountryName)(E)
                        }),
                        localizedPricingBannerBody: A,
                        localizedPricingBannerLinkOnly: o.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
                            helpCenterLink: l.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
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
                l = n("646718"),
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
                            newPlans: [l.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2, l.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2]
                        }
                    }, {
                        id: 2,
                        label: "3 Month Plan Only",
                        config: {
                            newPlans: [l.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2]
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
                l = n("872717"),
                a = n("448993"),
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
                    let e = await l.default.post({
                        url: c.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
                        body: _,
                        oldFormErrors: !0
                    });
                    return i.default.createInvoiceFromServer(e.body)
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
                    let e = await l.default.patch({
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
                    throw new a.BillingError(e)
                }
            }
            async function m(e) {
                let {
                    subscriptionId: t,
                    preventFetch: n
                } = e;
                if (n) return null;
                let r = await l.default.get({
                    url: c.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
                    oldFormErrors: !0
                });
                return i.default.createInvoiceFromServer(r.body)
            }

            function _(e, t) {
                let {
                    preventFetch: n = !1
                } = e, [l, a] = (0, r.useState)(null), [i, o] = (0, r.useState)(null), c = (0, s.useStateFromStores)([u.default], () => u.default.getSubscriptions());
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
                }, [n, t, c]), [l, i]
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
                    return i
                }
            });
            var r, s, l = n("862205");
            (r = s || (s = {}))[r.NONE = 0] = "NONE", r[r.BROWSER_AUTOFILL = 1] = "BROWSER_AUTOFILL", r[r.MERGE_PLAN_SELECT_TO_REVIEW = 2] = "MERGE_PLAN_SELECT_TO_REVIEW";
            let a = (0, l.createExperiment)({
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
            var i = a
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
                l = n("446674"),
                a = n("357957"),
                i = n("10514"),
                u = n("521012"),
                o = n("719923"),
                c = n("49111"),
                d = n("843455");

            function f() {
                let e = (0, l.useStateFromStores)([u.default], () => u.default.getPremiumTypeSubscription()),
                    t = (0, l.useStateFromStores)([i.default], () => null != e && null != e.planIdFromItems ? i.default.get(null == e ? void 0 : e.planIdFromItems) : null),
                    n = (0, l.useStateFromStores)([a.default], () => null != e && null != e.paymentSourceId ? a.default.getPaymentSource(e.paymentSourceId) : null, [e]),
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
                l = n.n(s),
                a = n("627445"),
                i = n.n(a),
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
                return i(null != c, "Subscription billing country should not be null"), (0, r.jsxs)("div", {
                    className: l(E.noticeRoot, a),
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
                l = n.n(s),
                a = n("153160"),
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
                } = e, m = (0, a.formatPrice)(t, n), _ = null;
                return s === i.SubscriptionIntervalTypes.YEAR ? _ = u.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
                    price: m
                }) : s === i.SubscriptionIntervalTypes.MONTH && 1 === d ? _ = u.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
                    price: m
                }) : s === i.SubscriptionIntervalTypes.MONTH && d > 1 && (_ = u.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
                    price: m,
                    intervalCount: d
                })), (0, r.jsx)("div", {
                    className: l(o.pricePerInterval, c),
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
                CUSTOM_GIFT_MESSAGE_MAX_LENGTH: function() {
                    return I
                },
                default: function() {
                    return S
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                l = n("414456"),
                a = n.n(l),
                i = n("77078"),
                u = n("850391"),
                o = n("149022"),
                c = n("681060"),
                d = n("570697"),
                f = n("233069"),
                m = n("49111"),
                _ = n("782340"),
                E = n("809331");
            let I = 190,
                p = (0, f.createChannelRecord)({
                    id: "1",
                    type: m.ChannelTypes.DM
                });

            function S(e) {
                let {
                    sectionTitle: t,
                    errors: n,
                    onTextChange: l,
                    pendingText: f,
                    placeholder: m,
                    currentText: S,
                    className: N,
                    innerClassName: P,
                    disabled: T = !1,
                    disableThemedBackground: C = !1
                } = e, [A, O] = s.useState(null != f ? f : S), [h, R] = s.useState((0, o.toRichValue)(A)), g = s.useRef(!1);
                return s.useEffect(() => {
                    g.current = !0
                }, []), s.useEffect(() => {
                    if (void 0 === f) {
                        let e = (0, o.toRichValue)(S);
                        O(S), R(e)
                    }
                }, [f, S]), (0, r.jsx)("div", {
                    className: a(E.body, N),
                    children: (0, r.jsxs)(d.default, {
                        title: t,
                        errors: n,
                        disabled: T,
                        children: [(0, r.jsx)(c.default, {
                            innerClassName: a(E.textArea, P),
                            editorClassName: E.editorTextArea,
                            maxCharacterCount: I,
                            onChange: function(e, t, n) {
                                t !== A && (O(t), R(n), l(t))
                            },
                            placeholder: m,
                            channel: p,
                            textValue: A,
                            richValue: h,
                            type: u.ChatInputTypes.CUSTOM_GIFT,
                            onBlur: () => {
                                g.current = !1
                            },
                            onFocus: () => {
                                g.current = !0
                            },
                            focused: g.current,
                            onSubmit: function() {
                                return new Promise(e => {
                                    e({
                                        shouldClear: !1,
                                        shouldRefocus: !0
                                    })
                                })
                            },
                            disableThemedBackground: C
                        }), (0, r.jsx)(i.HiddenVisually, {
                            children: _.default.Messages.MAXIMUM_LENGTH.format({
                                maxLength: I
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
                l = n("414456"),
                a = n.n(l),
                i = n("849085");
            let u = s.forwardRef(function(e, t) {
                let {
                    isActive: n,
                    children: s
                } = e;
                return (0, r.jsx)("div", {
                    className: a(i.wrapper, {
                        [i.wrapperActive]: n
                    }),
                    ref: t,
                    children: s
                })
            });
            var o = u
        },
        889554: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftAnimationOptions: function() {
                    return N
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                l = n("77078"),
                a = n("635357"),
                i = n("742926"),
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
                    } = (0, a.useGiftContext)(), [C, A] = s.useState(!1), O = s.useRef(null), h = (0, l.useRadioGroup)({
                        orientation: "horizontal"
                    }), R = (0, u.getGiftExperience)(e, !0, "premiumGiftSelect_GiftAnimationOptions"), g = u.GIFT_EXPERIENCES_WITH_CUSTOM_EMOJI_SOUNDBOARD.has(R), M = R !== u.GiftExperience.DEFAULT, v = (0, d.useIsSeasonalGiftingActive)(), {
                        enabled: x
                    } = d.default.useExperiment({
                        location: "premiumGiftSelect_GiftAnimationOptions"
                    }, {
                        autoTrackExposure: v
                    }), y = null;
                    return M && (y = x ? E.SeasonalGiftStyles2023 : S), (0, r.jsxs)("div", {
                        children: [M && (0, r.jsxs)("div", {
                            className: p.giftMainAnimation,
                            children: [null != t ? (0, r.jsx)(f.default, {
                                giftStyle: t,
                                defaultAnimationState: o.AnimationState.ACTION,
                                idleAnimationState: o.AnimationState.LOOP,
                                shouldAnimate: !0,
                                className: p.animation
                            }) : (0, r.jsx)(l.Spinner, {
                                className: p.spinner
                            }), g && (0, r.jsxs)("div", {
                                className: p.soundEmojiContainer,
                                children: [(0, r.jsx)("div", {
                                    className: p.sound,
                                    children: (0, r.jsx)(i.default, {
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
                            ...h,
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
                l = n("77078"),
                a = n("86678"),
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
                        children: [(0, r.jsx)(l.Text, {
                            variant: "text-md/bold",
                            children: c.default.Messages.GIFT_SELECT_EMOJI
                        }), (0, r.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            children: c.default.Messages.GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION
                        })]
                    }), e]
                }), E = e => {
                    null != t && (t(e), o(!1))
                };
                return (0, r.jsx)(l.Popout, {
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
                        children: (0, r.jsx)(l.Clickable, {
                            className: d.emoji,
                            onClick: () => o(!0),
                            children: (null == n ? void 0 : n.name) == null ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(i.default, {
                                    className: d.emojiIcon,
                                    width: 14,
                                    height: 14
                                }), (0, r.jsx)(l.Text, {
                                    className: d.text,
                                    variant: "text-sm/semibold",
                                    children: c.default.Messages.GIFT_SELECT_EMOJI
                                })]
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(l.Text, {
                                    className: d.textSelected,
                                    variant: "text-sm/semibold",
                                    children: n.optionallyDiverseSequence
                                }), (0, r.jsx)(l.Text, {
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
                l = n("77078"),
                a = n("78345"),
                i = n("203142"),
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
                    return (0, r.jsx)(l.Clickable, {
                        innerRef: t,
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
                l = n("782340"),
                a = n("816318"),
                i = e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, r.jsx)(s.Anchor, {
                        onClick: t,
                        className: a.link,
                        children: l.default.Messages.BACK
                    })
                }
        },
        570727: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumSwitchPlanSelectBody: function() {
                    return Y
                },
                PremiumSwitchPlanSelectFooter: function() {
                    return W
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                l = n("627445"),
                a = n.n(l),
                i = n("446674"),
                u = n("77078"),
                o = n("405932"),
                c = n("798609"),
                d = n("837148"),
                f = n("903494"),
                m = n("635357"),
                _ = n("642906"),
                E = n("85336"),
                I = n("883558"),
                p = n("10514"),
                S = n("521012"),
                N = n("659632"),
                P = n("701909"),
                T = n("773336"),
                C = n("719923"),
                A = n("153160"),
                O = n("916187"),
                h = n("968532"),
                R = n("15733"),
                g = n("154889"),
                M = n("917247"),
                v = n("279171"),
                x = n("883662"),
                y = n("824734"),
                L = n("705820"),
                b = n("889554"),
                j = n("177998"),
                G = n("661128"),
                D = n("26785"),
                U = n("617223"),
                B = n("646718"),
                F = n("49111"),
                w = n("843455"),
                k = n("782340"),
                H = n("33769");

            function Y(e) {
                var t, n, l, E, I, S;
                let {
                    premiumSubscription: T,
                    skuId: h,
                    selectedPlanId: j,
                    setSelectedPlanId: G,
                    priceOptions: Y,
                    planOptions: W,
                    eligibleForMultiMonthPlans: Z,
                    referralTrialOfferId: K,
                    subscriptionPeriodEnd: V,
                    showTotal: z = !0,
                    discountInvoiceItems: J,
                    handleClose: X
                } = e, {
                    activeSubscription: q,
                    setSelectedPlanId: Q,
                    selectedSkuId: $,
                    selectedPlan: ee,
                    priceOptions: et
                } = (0, _.usePaymentContext)(), {
                    isGift: en,
                    giftRecipient: er,
                    selectedGiftStyle: es,
                    customGiftMessage: el,
                    setCustomGiftMessage: ea
                } = (0, m.useGiftContext)(), ei = (0, N.isCustomGiftEnabled)(er), eu = en && (0, N.shouldShowCustomGiftExperience)(er, !0, "PremiumSwitchPlanSelectBody"), {
                    confirmUpsellEnabled: eo
                } = (0, d.default)({
                    location: "PremiumSwitchPlanSelectBody"
                });
                h = null != h ? h : $, a(void 0 !== (T = null != T ? T : q), "should not be undefined");
                let [ec, ed] = (0, i.useStateFromStoresArray)([p.default], () => [null != T ? p.default.get(T.planId) : null, null != j ? p.default.get(j) : null]), ef = (0, M.usePremiumTrialOffer)(K), em = null == ef ? void 0 : ef.subscription_trial, e_ = (0, g.usePremiumDiscountOffer)(), eE = null == e_ ? void 0 : null === (t = e_.discount) || void 0 === t ? void 0 : t.plan_ids, eI = null != ed ? ed : ee, ep = s.useCallback(e => {
                    null != G ? G(e) : Q(e)
                }, [G, Q]), eS = null != Y ? Y : et;
                a(null != eS, "Price option has to be set");
                let eN = null != ef && (0, B.SubscriptionTrials)[ef.trial_id].skus.includes(h),
                    eP = null != e_ && W.some(e => null == eE ? void 0 : eE.includes(e)),
                    eT = (0, C.getPrice)(B.SubscriptionPlans.PREMIUM_MONTH_TIER_2, !1, en, eS);
                s.useEffect(() => {
                    Z && O.default.trackExposure({
                        location: "5f89bb_1"
                    })
                }, [Z]);
                let eC = (null == eI ? void 0 : eI.id) != null && W.includes(eI.id);
                s.useEffect(() => {
                    if (!eC) {
                        if (null == ec || en) ep(W[0]);
                        else if (null != ec) {
                            let e = W.find(e => e !== ec.id);
                            null != e && ep(e)
                        }
                    }
                }, [eC, en, W, ec, ep]);
                let eA = !eu && (en || !eN && !eP) && eC && z,
                    eO = (0, u.useRadioGroup)(),
                    eh = (null == eI ? void 0 : eI.id) != null ? (0, C.getPrice)(eI.id, !1, en, eS) : void 0,
                    {
                        ipCountryCode: eR
                    } = (0, R.default)(),
                    eg = "HR" === eR && null != eh && eh.currency === w.CurrencyCodes.EUR,
                    eM = (0, C.isPrepaidPaymentSource)(eS.paymentSourceId),
                    ev = (null == em ? void 0 : em.interval) === B.SubscriptionIntervalTypes.DAY ? k.default.Messages.BILLING_TRIAL_2_WEEK_PERIOD : k.default.Messages.BILLING_TRIAL_30_DAY_PERIOD,
                    ex = !en && (eP || null != em && eN && null != V),
                    ey = null == J ? void 0 : null === (E = J.find(e => e.subscriptionPlanId === B.SubscriptionPlans.PREMIUM_MONTH_TIER_2)) || void 0 === E ? void 0 : null === (l = E.discounts) || void 0 === l ? void 0 : null === (n = l.find(e => e.type === c.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === n ? void 0 : n.amount;
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)("div", {
                        className: eu ? H.stepBodyCustomGift : H.stepBody,
                        children: [(0, r.jsxs)("div", {
                            className: eu ? H.bodyColumnMiddle : void 0,
                            children: [(0, r.jsx)(v.default, {
                                fromBoostCancelModal: !1,
                                className: H.legacyPricingNotice
                            }), eu && null != es && (0, r.jsx)(b.GiftAnimationOptions, {})]
                        }), (0, r.jsxs)("div", {
                            className: eu ? H.bodyColumnRight : void 0,
                            children: [ei && (0, r.jsx)(U.SendGiftToUser, {
                                giftRecipient: er
                            }), (() => {
                                if (ei && null != ea) return (0, r.jsx)(L.default, {
                                    sectionTitle: k.default.Messages.GIFT_OPTIONAL_MESSAGE,
                                    onTextChange: e => ea(e),
                                    pendingText: el,
                                    currentText: el
                                })
                            })(), null != ec && !en && (0, r.jsx)("div", {
                                className: H.bodyText,
                                children: function(e, t) {
                                    let n = k.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
                                        r = k.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
                                        s = (() => {
                                            switch (e.interval) {
                                                case B.SubscriptionIntervalTypes.YEAR:
                                                    return n;
                                                case B.SubscriptionIntervalTypes.MONTH:
                                                default:
                                                    return r
                                            }
                                        })(),
                                        l = e.skuId;
                                    switch (t) {
                                        case B.PremiumSubscriptionSKUs.TIER_0:
                                            switch (l) {
                                                case B.PremiumSubscriptionSKUs.TIER_1:
                                                    return k.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                                                case B.PremiumSubscriptionSKUs.TIER_2:
                                                    return k.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                                                default:
                                                    return s
                                            }
                                        case B.PremiumSubscriptionSKUs.TIER_1:
                                            switch (l) {
                                                case B.PremiumSubscriptionSKUs.TIER_0:
                                                    return k.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                                                case B.PremiumSubscriptionSKUs.TIER_2:
                                                    return k.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                                                default:
                                                    return s
                                            }
                                        case B.PremiumSubscriptionSKUs.TIER_2:
                                            switch (l) {
                                                case B.PremiumSubscriptionSKUs.TIER_0:
                                                case B.PremiumSubscriptionSKUs.TIER_1:
                                                    return k.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                                                case B.PremiumSubscriptionSKUs.TIER_2:
                                                    return e.interval === B.SubscriptionIntervalTypes.MONTH ? k.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format({
                                                        numFreeGuildSubscriptions: B.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
                                                    }) : s;
                                                default:
                                                    return s
                                            }
                                        default:
                                            return s
                                    }
                                }(ec, h)
                            }), (I = eN, S = eP, eu ? (0, r.jsx)(u.FormTitle, {
                                children: k.default.Messages.GIFT_SUBSCRIPTION_SELECTION
                            }) : ex ? I ? (0, r.jsxs)("div", {
                                children: [(0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: H.trialPlanSelectHeader,
                                    children: k.default.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format({
                                        trialEnd: V,
                                        trialPeriod: ev
                                    })
                                }), (0, r.jsx)("hr", {
                                    className: H.planSelectSeparator
                                })]
                            }) : S && null != ey && null != eT ? (0, r.jsxs)("div", {
                                children: [(0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: H.trialPlanSelectHeader,
                                    children: k.default.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO.format({
                                        discountedPrice: (0, A.formatPrice)(eT.amount - ey, eT.currency),
                                        regularPrice: (0, A.formatPrice)(eT.amount, eT.currency)
                                    })
                                }), (0, r.jsx)("hr", {
                                    className: H.planSelectSeparator
                                })]
                            }) : void 0 : (0, r.jsx)("div", {
                                className: H.selectPlanChooseTitle,
                                children: k.default.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE
                            })), (0, r.jsx)("div", {
                                ...eO,
                                children: W.map(e => (0, r.jsx)(D.default, {
                                    planId: e,
                                    premiumSubscription: en ? null : null != T ? T : null,
                                    selectPlan: ep,
                                    selected: (null == eI ? void 0 : eI.id) === e,
                                    priceOptions: eS,
                                    shouldShowUpdatedPaymentModal: ex,
                                    isEligibleForDiscount: eP,
                                    discountAmountOff: ey
                                }, e))
                            }), (0, r.jsx)("div", {
                                children: eA && null != eI && null != eh ? (0, r.jsxs)("div", {
                                    children: [(0, r.jsx)("div", {
                                        className: H.selectPlanDivider
                                    }), (0, r.jsx)(x.PremiumInvoiceTableTotalRow, {
                                        label: k.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                                        value: (0, r.jsx)(y.default, {
                                            price: eh.amount,
                                            currency: eh.currency,
                                            intervalType: en ? null : eI.interval,
                                            intervalCount: eI.intervalCount,
                                            isPrepaidPaymentSource: eM
                                        }),
                                        className: H.selectPlanTotalRow
                                    })]
                                }) : null
                            }), eg && (0, r.jsx)(o.default, {
                                message: k.default.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
                                    kunaPriceWithCurrency: (0, A.formatPrice)(7.5345 * eh.amount, w.CurrencyCodes.HRK)
                                })
                            }), !en && !ex && z && (0, r.jsx)(o.default, {
                                message: k.default.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
                                    documentationLink: P.default.getArticleURL(F.HelpdeskArticles.LOCALIZED_PRICING)
                                })
                            }), eo && en && (0, r.jsx)(f.default, {
                                onClose: X
                            })]
                        })]
                    })
                })
            }

            function W(e) {
                let {
                    onStepChange: t,
                    selectedPlanId: n,
                    paymentSources: s,
                    onBackClick: l,
                    showBackButton: a,
                    planOptions: i,
                    shouldRenderUpdatedPaymentModal: o = !1,
                    isTrial: c
                } = e, {
                    paymentSources: d,
                    selectedPlan: f
                } = (0, _.usePaymentContext)(), {
                    isGift: E
                } = (0, m.useGiftContext)();
                return s = null != s ? s : d, n = null != n ? n : null == f ? void 0 : f.id, (0, r.jsxs)(r.Fragment, {
                    children: [null != n && i.includes(n) ? (0, r.jsx)(Z, {
                        paymentSources: s,
                        onStepChange: t,
                        selectedPlanId: n,
                        isGift: E,
                        shouldRenderUpdatedPaymentModal: o,
                        isTrial: c
                    }) : (0, r.jsx)(u.Button, {
                        disabled: !0,
                        children: k.default.Messages.SELECT
                    }), a ? (0, r.jsx)(j.default, {
                        onClick: l
                    }) : null]
                })
            }

            function Z(e) {
                let {
                    onStepChange: t,
                    selectedPlanId: n,
                    isGift: s,
                    paymentSources: l,
                    shouldRenderUpdatedPaymentModal: a,
                    isTrial: o
                } = e, c = (0, i.useStateFromStores)([S.default], () => S.default.getPremiumTypeSubscription()), {
                    hasEntitlements: d
                } = (0, G.useSubscriptionEntitlements)(n, s), f = null != c && null != c.paymentSourceId || Object.keys(l).length > 0 || d && !o;
                var m = a ? k.default.Messages.NEXT : k.default.Messages.SELECT,
                    _ = E.Step.ADD_PAYMENT_STEPS;
                return f ? _ = E.Step.REVIEW : (0, T.isDesktop)() && function() {
                    let {
                        experiment: e
                    } = h.default.getCurrentConfig({
                        location: "5f89bb_2"
                    });
                    if (e === h.CheckoutV2ChildExperiments.BROWSER_AUTOFILL) {
                        let {
                            enabled: e
                        } = I.default.getCurrentConfig({
                            location: "5f89bb_3"
                        }, {
                            autoTrackExposure: !0
                        });
                        return e
                    }
                    return !1
                }() && (_ = E.Step.AWAITING_BROWSER_CHECKOUT, m = k.default.Messages.CONTINUE_IN_BROWSER), (0, r.jsx)(u.Button, {
                    onClick: () => t(_),
                    children: m
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
                l = n.n(s),
                a = n("627445"),
                i = n.n(a),
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
                } = e, O = (0, u.useStateFromStores)([f.default], () => f.default.locale), h = (0, u.useStateFromStores)([m.default], () => m.default.get(n)), {
                    isGift: R,
                    giftRecipient: g
                } = (0, d.useGiftContext)(), M = R && (0, _.shouldShowCustomGiftExperience)(g, !0, "PremiumSwitchPlanSelectOption");
                i(null != h, "Missing subscriptionPlan");
                let v = null != t && t.planId === n,
                    x = v || n === p.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && null != t && [p.SubscriptionPlans.PREMIUM_YEAR_TIER_0, p.SubscriptionPlans.PREMIUM_YEAR_TIER_1].includes(t.planId),
                    y = p.DISCOUNTS[n],
                    L = (0, E.getPrice)(n, !1, R, P),
                    b = (0, E.isPrepaidPaymentSource)(P.paymentSourceId),
                    j = null != y && !T,
                    G = h.interval === p.SubscriptionIntervalTypes.YEAR ? S.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : S.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
                    D = () => null != y && (0, r.jsx)(c.Text, {
                        tag: "span",
                        variant: "eyebrow",
                        color: "always-white",
                        className: N.planOptionDiscount,
                        children: S.default.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
                            discount: (0, I.formatPercent)(O, y / 100)
                        })
                    }),
                    U = () => h.interval === p.SubscriptionIntervalTypes.YEAR && null != t || j && !v ? h.interval === p.SubscriptionIntervalTypes.YEAR && null != t ? (0, r.jsxs)("span", {
                        className: N.planOptionMonthsFree,
                        children: ["(", S.default.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS, ")"]
                    }) : j && !v ? D() : void 0 : null;
                return (0, r.jsxs)(c.Clickable, {
                    role: M ? "menuitem" : "radio",
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
                    className: l(N.planOptionClickableContainer, {
                        [N.selectedPlan]: M && a,
                        [N.selectionBox]: M
                    }),
                    children: [(0, r.jsxs)("div", {
                        className: l(N.planOption, {
                            [N.planOptionDisabled]: x
                        }),
                        children: [(0, r.jsxs)("div", {
                            className: N.planOptionClickable,
                            children: [!M && (0, r.jsx)(c.Checkbox, {
                                readOnly: !0,
                                displayOnly: !0,
                                value: a,
                                shape: c.Checkbox.Shapes.ROUND,
                                color: o.default.unsafe_rawColors.BRAND_500.css,
                                type: c.Checkbox.Types.INVERTED,
                                className: N.planOptionCheckbox
                            }), (0, r.jsxs)("div", {
                                children: [(0, r.jsxs)("div", {
                                    className: l(N.planOptionInterval, {
                                        [N.optionSelected]: a || M,
                                        [N.updatedOptionSelected]: T && (a || M)
                                    }),
                                    children: [(0, E.getIntervalString)(h.interval, R, b, h.intervalCount, M, (0, E.getPremiumType)(h.id)), M && U()]
                                }), M && (0, r.jsx)("div", {
                                    className: N.planOneTimeCost,
                                    children: S.default.Messages.ONE_TIME_CHARGE.format({
                                        currencyAmount: (0, I.formatPrice)(L.amount, L.currency)
                                    })
                                })]
                            }), v && (0, r.jsxs)("span", {
                                className: N.planOptionCurrentPlan,
                                children: ["(", S.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, ")"]
                            }), !M && U()]
                        }), T ? (0, r.jsx)("div", {
                            className: l({
                                [N.optionPriceSelected]: a
                            }),
                            children: S.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                price: (() => {
                                    if (C && null != A) return h.interval === p.SubscriptionIntervalTypes.MONTH ? (0, I.formatPrice)(L.amount - A, L.currency) : (0, I.formatPrice)(L.amount, L.currency);
                                    return (0, I.formatPrice)(0, L.currency, {
                                        maximumFractionDigits: 0
                                    })
                                })()
                            })
                        }) : (0, r.jsx)("div", {
                            className: l({
                                [N.optionSelected]: a || M
                            }),
                            children: (0, I.formatPrice)(L.amount, L.currency)
                        })]
                    }), T && (0, r.jsx)("div", {
                        className: N.planOptionSubtextContainer,
                        children: (0, r.jsx)(c.Text, {
                            variant: "text-md/normal",
                            color: a ? "text-normal" : "interactive-normal",
                            className: l(N.planOptionSubtext, {
                                [N.discountPlanOptionSubtext]: C
                            }),
                            children: C && null != A ? h.interval === p.SubscriptionIntervalTypes.MONTH ? S.default.Messages.BILLING_DISCOUNT_MONTHLY_PRICE.format({
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
                l = n("87657"),
                a = n("158998"),
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
                        children: [(0, r.jsx)(l.default, {
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
                l = n("627445"),
                a = n.n(l),
                i = n("976979"),
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
                h = n("659632"),
                R = n("719923"),
                g = n("153160"),
                M = n("210721"),
                v = n("809071"),
                x = n("154889"),
                y = n("883662"),
                L = n("623003"),
                b = n("65324"),
                j = n("570727"),
                G = n("146163"),
                D = n("661128"),
                U = n("617223"),
                B = n("646718"),
                F = n("49111"),
                w = n("843455"),
                k = n("782340"),
                H = n("615689");

            function Y(e) {
                var t, n, l;
                let Y, W, {
                        selectedPlanId: Z,
                        paymentSources: K,
                        priceOptions: V,
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
                        purchaseState: el,
                        hideSubscriptionDetails: ea,
                        referralTrialOfferId: ei,
                        isTrial: eu = !1,
                        isDiscount: eo = !1,
                        handleClose: ec
                    } = e,
                    {
                        isEmbeddedIAP: ed,
                        activeSubscription: ef,
                        selectedSkuId: em,
                        defaultPlanId: e_,
                        isPremium: eE,
                        startedPaymentFlowWithPaymentSourcesRef: eI
                    } = (0, p.usePaymentContext)(),
                    {
                        isGift: ep,
                        giftRecipient: eS,
                        selectedGiftStyle: eN
                    } = (0, I.useGiftContext)(),
                    eP = (0, x.usePremiumDiscountOffer)(),
                    eT = null == eP ? void 0 : null === (t = eP.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => B.SubscriptionPlanInfo[e].skuId === em),
                    eC = !ep && null != eP && null != em && eT,
                    eA = (0, u.useStateFromStores)([A.default], () => A.default.get(Z));
                a(null != eA, "Missing plan");
                let eO = [{
                        planId: eA.id,
                        quantity: 1
                    }],
                    eh = el === S.PurchaseState.PURCHASING || el === S.PurchaseState.COMPLETED,
                    eR = ep || eh,
                    [eg, eM] = (0, v.useSubscriptionInvoicePreview)({
                        items: eO,
                        renewal: !1,
                        preventFetch: eR,
                        applyEntitlements: !0,
                        paymentSourceId: V.paymentSourceId,
                        currency: V.currency,
                        trialId: et,
                        metadata: es
                    }),
                    [ev, ex] = (0, v.useSubscriptionInvoicePreview)({
                        items: eO,
                        renewal: !0,
                        preventFetch: eR,
                        trialId: et,
                        paymentSourceId: V.paymentSourceId,
                        currency: V.currency,
                        metadata: es
                    }),
                    [ey, eL] = (0, v.useSubscriptionInvoicePreview)({
                        items: [{
                            planId: B.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
                            quantity: 1
                        }],
                        renewal: !0,
                        preventFetch: !eC,
                        trialId: et,
                        paymentSourceId: V.paymentSourceId,
                        currency: V.currency,
                        metadata: es
                    }),
                    eb = ep && (0, h.shouldShowCustomGiftExperience)(eS, !0, "PremiumSubscriptionReview"),
                    ej = null !== (l = null != eM ? eM : ex) && void 0 !== l ? l : eL,
                    eG = (0, u.useStateFromStores)([T.default], () => T.default.enabled),
                    eD = V.paymentSourceId,
                    {
                        hasEntitlements: eU,
                        entitlements: eB
                    } = (0, D.useSubscriptionEntitlements)(eA.id, ep),
                    eF = (0, R.isPrepaidPaymentSource)(V.paymentSourceId),
                    ew = (0, N.checkNoPaymentTrialEnabled)(et, eD, Z),
                    ek = (0, P.inOneStepSubscriptionCheckout)({
                        isTrial: eu,
                        isGift: ep,
                        selectedSkuId: em,
                        startedPaymentFlowWithPaymentSources: eI.current
                    }),
                    [eH, eY] = s.useState(null == eg ? void 0 : eg.subscriptionPeriodEnd);
                s.useEffect(() => {
                    null == eH && eY(null == eg ? void 0 : eg.subscriptionPeriodEnd)
                }, [null == eg ? void 0 : eg.subscriptionPeriodEnd, eH]);
                let eW = s.useMemo(() => (0, R.getPremiumPlanOptions)({
                        skuId: em,
                        isPremium: eE,
                        multiMonthPlans: [],
                        currentSubscription: ef,
                        isGift: ep,
                        isEligibleForTrial: eu,
                        defaultPlanId: e_,
                        defaultToMonthlyPlan: !1
                    }), [em, ef, ep, e_, eE, eu]),
                    eZ = (0, P.planSwitchLoadingShowSpinner)(ek, eg, eA);
                if (null != ej) {
                    let e = ej.message;
                    return ej.code === E.ErrorCodes.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (e = k.default.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY), (0, r.jsx)(c.FormErrorBlock, {
                        children: e
                    })
                }
                if (ep) W = (0, r.jsx)(G.SubscriptionInvoiceGift, {
                    paymentSourceId: V.paymentSourceId,
                    plan: eA,
                    className: H.invoice,
                    isPrepaidPaymentSource: eF,
                    isCustomGift: eb
                });
                else if (eu && null != eg) W = (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(y.PremiumInvoiceTableDivider, {
                        negativeMarginTop: !0
                    }), (0, r.jsxs)(y.PremiumInvoiceTable, {
                        className: H.invoice,
                        children: [(0, r.jsxs)("div", {
                            className: H.trialPriceLine,
                            children: [(0, r.jsx)(c.Text, {
                                variant: "text-md/bold",
                                children: k.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
                            }), (0, r.jsx)(c.Text, {
                                variant: "text-md/normal",
                                children: k.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                    price: (0, g.formatPrice)(0, eg.currency, {
                                        maximumFractionDigits: 0
                                    })
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: H.afterTrialPriceLine,
                            children: (0, r.jsx)(G.PremiumTrialInvoiceTableRow, {
                                invoice: eg,
                                plan: eA
                            })
                        })]
                    })]
                });
                else {
                    if (null == eg || null == ev || eZ) return (0, r.jsx)("div", {
                        className: H.spinnerWrapper,
                        children: (0, r.jsx)(c.Spinner, {})
                    });
                    eu && eg.subscriptionPeriodEnd !== ev.subscriptionPeriodEnd && (Y = eg.subscriptionPeriodEnd), W = (0, r.jsxs)(y.PremiumInvoiceTable, {
                        className: H.invoice,
                        children: [(0, r.jsx)(y.PremiumInvoiceTableHeader, {
                            children: k.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
                        }), (0, r.jsx)(G.PremiumSubscriptionChangePlanInvoiceRows, {
                            invoice: eg,
                            newPlan: eA,
                            isPrepaidPaymentSource: eF,
                            referralTrialOfferId: ei
                        }), eF ? null : (0, r.jsx)(G.SubscriptionInvoiceFooter, {
                            renewalInvoice: ev,
                            isTrial: eu,
                            priceOptions: V,
                            overrideRenewalDate: Y,
                            trialFooterMessageOverride: en,
                            hideSubscriptionDetails: ea
                        })]
                    })
                }
                let eK = i.CountryCodesSets.EEA_COUNTRIES.has(C.default.ipCountryCodeWithFallback),
                    {
                        checkboxLabel: eV,
                        checkboxClassname: ez,
                        checkboxLabelClassname: eJ
                    } = function(e, t, n) {
                        let r = null,
                            s = null,
                            l = null;
                        if (e && null != t) {
                            let {
                                intervalType: e,
                                intervalCount: a
                            } = R.default.getIntervalForInvoice(t), i = (0, g.formatRate)((0, g.formatPrice)(t.total, t.currency), e, a), u = null != n ? n : t.subscriptionPeriodEnd;
                            r = k.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
                                termsURL: F.MarketingURLs.TERMS,
                                paidURL: F.MarketingURLs.PAID_TERMS,
                                rate: i,
                                renewalDate: u
                            }), s = H.trialCheckbox, l = H.trialCheckboxLabel
                        }
                        return {
                            checkboxLabel: r,
                            checkboxClassname: s,
                            checkboxLabelClassname: l
                        }
                    }(null != eu && eu, ev, Y),
                    eX = k.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                        planName: eA.name
                    });
                return ep && !eb ? eX = k.default.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : ep && eb ? eX = "" : (0, R.isPremiumSubscriptionPlan)(eA.id) && (eX = R.default.getBillingReviewSubheader(null, eA)), ew ? null : (0, r.jsxs)("div", {
                    className: H.stepBody,
                    children: [null != er && (0, r.jsxs)("div", {
                        className: H.reviewWarningMessageContainer,
                        children: [(0, r.jsx)(O.default, {
                            color: o.default.unsafe_rawColors.YELLOW_300.css,
                            width: 20,
                            height: 20
                        }), (0, r.jsx)(c.Text, {
                            className: H.reviewWarningMessage,
                            variant: "text-sm/normal",
                            children: er
                        })]
                    }), ek && (0, r.jsxs)("div", {
                        children: [(0, r.jsx)(y.PremiumInvoiceTableDivider, {
                            negativeMarginTop: !0
                        }), (0, r.jsx)(j.PremiumSwitchPlanSelectBody, {
                            planOptions: eW,
                            eligibleForMultiMonthPlans: !1,
                            referralTrialOfferId: void 0,
                            selectedPlanId: Z,
                            subscriptionPeriodEnd: eH,
                            showTotal: !1,
                            discountInvoiceItems: eC ? null == ey ? void 0 : ey.invoiceItems : void 0,
                            handleClose: ec
                        }), (0, r.jsx)(y.PremiumInvoiceTableDivider, {})]
                    }), !eu && (0, r.jsx)(c.FormTitle, {
                        tag: c.FormTitleTags.H5,
                        children: eX
                    }), eb && null != eN && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(b.default, {
                            defaultAnimationState: M.AnimationState.LOOP,
                            giftStyle: eN,
                            shouldAnimate: !0,
                            className: H.giftMainAnimation
                        }), (0, r.jsx)(U.SendGiftToUser, {
                            giftRecipient: eS
                        })]
                    }), W, (0, r.jsxs)("div", {
                        className: H.paymentSourceWrapper,
                        children: [eu ? (0, r.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H5,
                            className: H.formTitle,
                            children: k.default.Messages.BILLING_STEP_PAYMENT_METHOD
                        }) : (0, r.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H5,
                            children: k.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, r.jsx)(m.default, {
                            paymentSources: Object.values(K),
                            selectedPaymentSourceId: eD,
                            prependOption: eU && !eu ? {
                                label: k.default.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
                                value: null
                            } : null,
                            onChange: X,
                            onPaymentSourceAdd: q,
                            hidePersonalInformation: eG,
                            isTrial: eu
                        }), eU && null == eD ? (0, r.jsx)("div", {
                            className: H.paymentSourceOptionalWarning,
                            children: k.default.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({
                                months: eB.length
                            })
                        }) : null, eo ? null : (0, r.jsxs)(d.CurrencyWrapper, {
                            currencies: z,
                            className: H.currencyWrapper,
                            children: [(0, r.jsx)(c.FormTitle, {
                                tag: c.FormTitleTags.H5,
                                children: k.default.Messages.PAYMENT_CURRENCY
                            }), (0, r.jsx)(d.default, {
                                selectedCurrency: V.currency,
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
                            checkboxClassname: ez,
                            checkboxLabelClassname: eJ,
                            finePrint: (0, r.jsx)(f.default, {
                                hide: eu || eo,
                                subscriptionPlan: eA,
                                renewalInvoice: ev,
                                isGift: ep,
                                paymentSourceType: null === (n = K[null != eD ? eD : ""]) || void 0 === n ? void 0 : n.type,
                                isEmbeddedIAP: ed,
                                basePrice: (0, R.getPrice)(eA.id, !1, ep, V)
                            }),
                            showPricingLink: eA.currency !== w.CurrencyCodes.USD,
                            showWithdrawalWaiver: eK,
                            disabled: eh,
                            isTrial: eu,
                            isDiscount: eo,
                            subscriptionPlan: eA,
                            isGift: ep
                        })
                    })]
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
                l = n.n(s),
                a = n("77078"),
                i = n("216422"),
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
                        children: (0, r.jsx)(i.default, {
                            className: l(o.nitroWheel, n)
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
                l = n.n(s),
                a = n("65597"),
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
                } = e, h = (0, a.default)([u.default], () => {
                    let e = u.default.activeSubstep;
                    return null != e && f.PremiumTutorialSubstepsToStepMap[e] === f.PremiumTutorialSteps.PROFILE_CUSTOMIZATION
                });
                return (0, r.jsx)("div", {
                    className: l(m.customizationSection, I, {
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
            var r, s, l = n("37983"),
                a = n("884691"),
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
            var d = a.forwardRef(function(e, t) {
                let {
                    children: n,
                    type: r = "premium",
                    isShown: s,
                    hasBackground: a = !1,
                    className: i,
                    backgroundClassName: d
                } = e;
                if (!s) return (0, l.jsx)(l.Fragment, {
                    children: n
                });
                let {
                    border: f,
                    background: m
                } = c[r];
                return (0, l.jsx)("div", {
                    ref: t,
                    className: u(f, i),
                    children: (0, l.jsx)("div", {
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
                l = n("669491"),
                a = n("292915"),
                i = n("77078"),
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
                        children: [(0, r.jsx)(i.Text, {
                            variant: "text-md/bold",
                            children: c.default.Messages.GIFT_SELECT_SOUND
                        }), (0, r.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            children: c.default.Messages.GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION
                        })]
                    }), (0, r.jsx)("div", {
                        className: d.searchAndSound,
                        children: e
                    })]
                });
                return (0, r.jsx)(i.Popout, {
                    shouldShow: m,
                    position: "bottom",
                    align: "left",
                    onRequestClose: () => _(!1),
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, r.jsx)(i.Dialog, {
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
                    children: () => (0, r.jsx)(i.Clickable, {
                        className: d.sound,
                        onClick: () => _(!0),
                        children: null == n ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(a.SoundboardIcon, {
                                color: l.default.colors.WHITE,
                                className: d.soundIcon,
                                width: 14,
                                height: 14
                            }), (0, r.jsx)(i.Text, {
                                className: d.text,
                                variant: "text-sm/semibold",
                                children: c.default.Messages.GIFT_SELECT_SOUND
                            })]
                        }) : (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(i.Text, {
                                className: d.textSelected,
                                variant: "text-sm/semibold",
                                children: n.emojiName
                            }), (0, r.jsx)(i.Text, {
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
                l = n("414456"),
                a = n.n(l),
                i = n("907002"),
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
                    renderButtonContents: l,
                    active: E,
                    onClick: I,
                    "aria-controls": p,
                    focusProps: S
                } = e, [N, P] = s.useState(!1), [T, C] = s.useState(0), A = N || E, O = (0, c.getClass)(m, "emojiButton", A ? "Hovered" : "Normal"), h = function(e) {
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
                    className: a(O, n),
                    onMouseEnter: R,
                    onMouseOver: R,
                    onMouseLeave: g,
                    onFocus: M,
                    onClick: I,
                    "aria-label": f.default.Messages.SELECT_EMOJI,
                    "aria-controls": p,
                    "aria-expanded": E,
                    "aria-haspopup": "dialog",
                    focusProps: S,
                    children: null != l ? l() : (0, r.jsx)(i.Spring, {
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
                l = n("763377"),
                a = n("75196"),
                i = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: l,
                        ...i
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: l,
                            fill: s,
                            d: "M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"
                        })
                    })
                }, l.CircleQuestionIcon, void 0, {
                    size: 24
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
                l = n("645156"),
                a = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: s = "currentColor",
                        className: l,
                        foreground: a
                    } = e;
                    return (0, r.jsx)("svg", {
                        className: l,
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
                }, l.SlashIcon, void 0, {
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