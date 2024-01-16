(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["37656"], {
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
        897184: function(e, t, n) {
            "use strict";
            e.exports = n.p + "400abe52c21c39a34b0d.svg"
        },
        990439: function(e, t, n) {
            "use strict";
            e.exports = n.p + "30e1ee80e32cc6659f02.svg"
        },
        999641: function(e, t, n) {
            "use strict";
            e.exports = n.p + "73113affb82e7871d40a.svg"
        },
        74771: function(e, t, n) {
            "use strict";
            e.exports = n.p + "94a8228b586e56215077.svg"
        },
        910549: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f46d6b0cbeeea15ecd81.png"
        },
        559965: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a2c4ffe04406bdb03384.png"
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
            var s = n("37983");
            n("884691");
            var r = n("77078"),
                a = n("575209");

            function l(e) {
                let {
                    currencies: t,
                    className: n,
                    children: r
                } = e;
                return t.length < 2 ? null : (0, s.jsx)("div", {
                    className: n,
                    children: r
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
                let c = t.map((e, t) => ({
                    key: t,
                    value: e,
                    label: "".concat(e.toUpperCase(), " - ").concat((0, a.getCurrencyFullName)(e))
                }));
                return (0, s.jsx)(r.SingleSelect, {
                    value: l,
                    options: c,
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
                    return i
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("225389"),
                a = n("77078"),
                l = n("135898"),
                i = function(e) {
                    let {
                        message: t
                    } = e;
                    return (0, s.jsxs)("div", {
                        className: l.container,
                        children: [(0, s.jsx)(r.CircleInformationIcon, {
                            className: l.icon,
                            width: 20,
                            height: 20,
                            color: a.tokens.colors.TEXT_WARNING
                        }), (0, s.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "header-muted",
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
                    return c
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("77078"),
                a = n("145131"),
                l = n("782340"),
                i = n("57153");
            let u = e => {
                    let {
                        className: t,
                        isEmailResent: n,
                        resendEmail: a
                    } = e;
                    return (0, s.jsx)("div", {
                        className: t,
                        children: (0, s.jsxs)("div", {
                            className: i.awaitingWrapper,
                            children: [(0, s.jsx)(r.Heading, {
                                variant: "heading-xl/bold",
                                children: l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_HEADER
                            }), (0, s.jsxs)("p", {
                                children: [(0, s.jsx)(r.Text, {
                                    variant: "text-md/normal",
                                    children: l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL
                                }), (0, s.jsx)("br", {}), (0, s.jsx)(r.Text, {
                                    variant: "text-md/normal",
                                    children: l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_INSTRUCTIONS
                                }), (0, s.jsx)("br", {}), (0, s.jsxs)(r.Text, {
                                    variant: "text-md/normal",
                                    children: [l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_PROMPT, "\xa0", n ? l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_SENT : (0, s.jsx)(r.Anchor, {
                                        onClick: a,
                                        children: l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_ACTION
                                    })]
                                })]
                            })]
                        })
                    })
                },
                c = () => (0, s.jsx)("div", {
                    children: (0, s.jsx)(r.ModalFooter, {
                        justify: a.default.Justify.BETWEEN,
                        align: a.default.Align.CENTER,
                        children: (0, s.jsx)(r.Button, {
                            "data-testid": "continue",
                            color: r.Button.Colors.BRAND,
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
            var s = n("37983");
            n("884691");
            var r = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: l = "transparent",
                    secondaryColorClass: i = "",
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: c = "",
                    ...o
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, s.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof l ? l : l.css,
                        className: i
                    }), (0, s.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-.28-16c-.98 0-1.81.47-2.27 1.14A1 1 0 1 1 7.8 7.01 4.73 4.73 0 0 1 11.72 5c2.5 0 4.65 1.88 4.65 4.38 0 2.1-1.54 3.77-3.52 4.24l.14 1a1 1 0 0 1-1.98.27l-.28-2a1 1 0 0 1 .99-1.14c1.54 0 2.65-1.14 2.65-2.38 0-1.23-1.1-2.37-2.65-2.37ZM13 17.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z",
                        clipRule: "evenodd",
                        className: c
                    })]
                })
            }
        },
        422244: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ShopIcon: function() {
                    return l
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, s.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M2.63 4.19A3 3 0 0 1 5.53 2H7a1 1 0 0 1 1 1v3.98a3.07 3.07 0 0 1-.3 1.35A2.97 2.97 0 0 1 4.98 10c-2 0-3.44-1.9-2.9-3.83l.55-1.98ZM10 2a1 1 0 0 0-1 1v4a3 3 0 0 0 3 3 3 3 0 0 0 3-2.97V3a1 1 0 0 0-1-1h-4ZM17 2a1 1 0 0 0-1 1v3.98a3.65 3.65 0 0 0 0 .05A2.95 2.95 0 0 0 19.02 10c2 0 3.44-1.9 2.9-3.83l-.55-1.98A3 3 0 0 0 18.47 2H17Z",
                        className: i
                    }), (0, s.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
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
                    return l
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
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
                    return s
                },
                default: function() {
                    return o
                }
            }), n("222007");
            var s, r, a, l, i = n("884691"),
                u = n("917351");

            function c(e) {
                return 2 === e || 3 === e ? 1 : 0
            }(a = s || (s = {}))[a.VERTICAL_TOP = 0] = "VERTICAL_TOP", a[a.VERTICAL_BOTTOM = 1] = "VERTICAL_BOTTOM", a[a.HORIZONTAL_LEFT = 2] = "HORIZONTAL_LEFT", a[a.HORIZONTAL_RIGHT = 3] = "HORIZONTAL_RIGHT", (l = r || (r = {}))[l.VERTICAL = 0] = "VERTICAL", l[l.HORIZONTAL = 1] = "HORIZONTAL";
            var o = e => {
                let {
                    initialElementDimension: t,
                    resizableDomNodeRef: n,
                    maxDimension: s,
                    minDimension: r,
                    onElementResize: a,
                    onElementResizeEnd: l,
                    throttleDuration: o = 300,
                    orientation: d,
                    usePointerEvents: f = !1
                } = e, [m, _] = i.useState(!1), E = i.useRef(0), I = i.useRef(null == t ? 0 : t);
                return i.useLayoutEffect(() => {
                    if (!m || null == n.current) return;

                    function e(e) {
                        let t = 1 === c(d) ? e.screenX : e.screenY,
                            n = 0 === d || 2 === d,
                            a = (t - E.current) * (n ? -1 : 1),
                            l = I.current + a;
                        return (0, u.clamp)(l, null != r ? r : 0, null != s ? s : l)
                    }
                    let t = (0, u.throttle)(a, o),
                        i = s => {
                            if (null == n.current) return null;
                            let r = e(s),
                                a = 1 === c(d) ? "width" : "height";
                            n.current.style[a] = "".concat(r, "px"), t(r)
                        },
                        p = t => {
                            _(!1);
                            let n = e(t);
                            a(n), null == l || l(n)
                        },
                        N = f ? "pointerup" : "mouseup",
                        S = f ? "pointermove" : "mousemove",
                        T = n.current.ownerDocument;
                    return T.addEventListener(N, p), T.addEventListener(S, i), () => {
                        T.removeEventListener(N, p), T.removeEventListener(S, i), t.cancel()
                    }
                }, [m, a, r, s, d, n, o, l, f]), i.useCallback(e => {
                    let t = 1 === c(d);
                    null != n.current && (I.current = t ? n.current.offsetWidth : n.current.offsetHeight), E.current = t ? e.screenX : e.screenY, _(!0)
                }, [d, n])
            }
        },
        837148: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("862205");
            let r = (0, s.createExperiment)({
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
            var a = e => {
                let {
                    location: t,
                    autoTrackExposure: n = !0,
                    trackExposureOptions: s = {}
                } = e;
                return r.useExperiment({
                    location: t
                }, {
                    autoTrackExposure: n,
                    trackExposureOptions: s
                })
            }
        },
        903494: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("422244"),
                a = n("77078"),
                l = n("812204"),
                i = n("685665"),
                u = n("393414"),
                c = n("21526"),
                o = n("49111"),
                d = n("782340"),
                f = n("898689"),
                m = e => {
                    let {
                        onClose: t
                    } = e, {
                        analyticsLocations: n
                    } = (0, i.default)(), m = () => {
                        t(), (0, u.transitionTo)(o.Routes.COLLECTIBLES_SHOP), (0, c.openCollectiblesShop)({
                            openInLayer: !1,
                            analyticsSource: l.default.PREMIUM_PAYMENT_MODAL,
                            analyticsLocations: n
                        })
                    };
                    return (0, s.jsxs)("div", {
                        className: f.container,
                        children: [(0, s.jsx)("div", {
                            className: f.iconBackground,
                            children: (0, s.jsx)(r.ShopIcon, {
                                width: 20,
                                height: 20,
                                color: a.tokens.colors.WHITE
                            })
                        }), (0, s.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "header-primary",
                            children: d.default.Messages.COLLECTIBLES_GIFT_CODE_MODAL_UPSELL.format({
                                checkItOut: e => (0, s.jsx)(a.Clickable, {
                                    className: f.link,
                                    onClick: m,
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
                    return S
                }
            }), n("70102"), n("222007");
            var s = n("627445"),
                r = n.n(s),
                a = n("913144"),
                l = n("850068"),
                i = n("112679"),
                u = n("596523"),
                c = n("465527"),
                o = n("388290"),
                d = n("599110"),
                f = n("745279"),
                m = n("659632"),
                _ = n("719923"),
                E = n("286350"),
                I = n("49111"),
                p = n("646718"),
                N = n("782340");
            async function S(e) {
                let {
                    setPurchaseState: t,
                    setHasAcceptedTerms: n,
                    setIsSubmitting: s,
                    setPurchaseError: S,
                    hasRedirectURL: T,
                    setHasRedirectURL: P,
                    isGift: C,
                    giftStyle: A,
                    baseAnalyticsData: O,
                    analyticsLocation: h,
                    analyticsLocations: R,
                    flowStartTime: g,
                    subscriptionPlan: M,
                    planGroup: v,
                    trialId: x,
                    priceOptions: L,
                    paymentSource: y,
                    isPrepaidPaymentPastDue: b,
                    openInvoiceId: j,
                    premiumSubscription: G,
                    onNext: D,
                    metadata: U,
                    sku: B,
                    skuPricePreview: F,
                    purchaseType: k,
                    referralCode: w,
                    loadId: H,
                    giftRecipient: Y,
                    customMessage: W,
                    emojiConfetti: Z,
                    soundEffect: K
                } = e;
                t(E.PurchaseState.PURCHASING), n(!0), s(!0), a.default.wait(i.clearError), S(null);
                try {
                    let e, n, s;
                    if (d.default.track(I.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
                            ...O,
                            duration_ms: Date.now() - g
                        }), T) return;
                    let a = (0, m.getGiftExperience)(Y),
                        i = m.GIFT_EXPERIENCES_WITH_CUSTOM_MESSAGING.has(a),
                        S = m.GIFT_EXPERIENCES_WITH_CUSTOM_EMOJI_SOUNDBOARD.has(a);
                    if (k === I.PurchaseTypes.ONE_TIME) r(null != B, "SKU must exist and be fetched."), r(null != F, "SKUPricePreview must exist."), e = await (0, c.purchaseSKU)(B.applicationId, B.id, {
                        expectedAmount: F.amount,
                        expectedCurrency: F.currency,
                        isGift: C,
                        paymentSource: y,
                        loadId: H,
                        giftStyle: A,
                        recipientId: a !== m.GiftExperience.DEFAULT ? null == Y ? void 0 : Y.id : void 0,
                        customMessage: i ? W : void 0,
                        emojiConfetti: S ? Z : void 0,
                        soundEffect: S ? K : void 0
                    });
                    else if (r(null != M, "Missing subscriptionPlan"), C) {
                        let t = (0, _.getPrice)(M.id, !1, !0, L);
                        if ("usd" === t.currency && (null == y ? void 0 : y.type) === I.PaymentSourceTypes.GCASH) {
                            var V;
                            let e = Error("Invalid USD currency for GCash");
                            (0, f.captureBillingException)(e, {
                                tags: {
                                    paymentSourceId: null !== (V = null == y ? void 0 : y.id) && void 0 !== V ? V : "",
                                    subscriptionPlanId: M.id,
                                    priceOptions: JSON.stringify(L)
                                }
                            })
                        }
                        e = await (0, c.purchaseSKU)(p.PREMIUM_SUBSCRIPTION_APPLICATION, M.skuId, {
                            expectedAmount: t.amount,
                            expectedCurrency: t.currency,
                            paymentSource: y,
                            subscriptionPlanId: M.id,
                            isGift: !0,
                            giftStyle: A,
                            loadId: H,
                            recipientId: a !== m.GiftExperience.DEFAULT ? null == Y ? void 0 : Y.id : void 0,
                            customMessage: i ? W : void 0,
                            emojiConfetti: S ? Z : void 0,
                            soundEffect: S ? K : void 0
                        })
                    } else e = b && null != j && null != y && null != G ? I.PREPAID_PAYMENT_SOURCES.has(y.type) ? await (0, l.payInvoiceManually)(G, j, y, L.currency) : await (0, l.updateSubscription)(G, {
                        paymentSource: y,
                        currency: L.currency
                    }, R, h) : null != G ? await (0, l.updateSubscription)(G, {
                        items: (0, _.getItemsWithUpsertedPlanIdForGroup)(G, M.id, 1, new Set(v)),
                        paymentSource: y,
                        currency: L.currency
                    }, R, h) : await (0, u.subscribe)({
                        planId: M.id,
                        currency: L.currency,
                        paymentSource: y,
                        trialId: x,
                        metadata: U,
                        referralCode: w,
                        loadId: H
                    });
                    if (e.redirectConfirmation) {
                        P(null != e.redirectURL);
                        return
                    }
                    let z = {
                        ...O,
                        duration_ms: Date.now() - g,
                        payment_source_type: null == y ? void 0 : y.type
                    };
                    C && (i && (z.is_custom_message_edited = W !== N.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE), S && (z.is_custom_emoji_sound_available = !0, null != Z && (z.emoji_name = Z.surrogates), null != K && (z.sound_id = K.soundId))), t(E.PurchaseState.COMPLETED), "subscription" in e ? n = null != e.subscription ? o.default.createFromServer(e.subscription) : null : "entitlements" in e && (s = null != e.entitlements ? e.entitlements : void 0), D(n, s)
                } catch (e) {
                    t(E.PurchaseState.FAIL), S(e), d.default.track(I.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                        ...O,
                        payment_error_code: null == e ? void 0 : e.code,
                        payment_source_id: null == y ? void 0 : y.id,
                        payment_source_type: null == y ? void 0 : y.type,
                        duration_ms: Date.now() - g
                    })
                } finally {
                    !T && s(!1)
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
            var s = n("627445"),
                r = n.n(s),
                a = n("775560"),
                l = n("917247"),
                i = n("724522"),
                u = n("599110"),
                c = n("635357"),
                o = n("642906"),
                d = n("85336"),
                f = n("49111"),
                m = n("646718");

            function _(e) {
                let {
                    analyticsData: t,
                    initialPlanId: n,
                    breadcrumbSteps: s,
                    handleStepChange: _,
                    referralTrialOfferId: E,
                    onReturn: I
                } = e, {
                    contextMetadata: p,
                    step: N,
                    paymentSources: S,
                    paymentSourceId: T,
                    setPaymentSourceId: P,
                    purchaseError: C,
                    setPurchaseError: A,
                    purchaseErrorBlockRef: O,
                    paymentAuthenticationState: h,
                    selectedSkuId: R
                } = (0, o.usePaymentContext)(), {
                    isGift: g
                } = (0, c.useGiftContext)(), M = {
                    ...(0, i.useSharedPaymentModal)(),
                    paymentSources: S,
                    paymentSourceId: T,
                    setPaymentSourceId: P,
                    purchaseError: C,
                    setPurchaseError: A,
                    purchaseErrorBlockRef: O,
                    paymentAuthenticationState: h
                }, v = (0, l.usePremiumTrialOffer)(E), x = !g && null != v && null != R && (0, m.SubscriptionTrials)[v.trial_id].skus.includes(R), L = null != I ? I : () => {
                    let e = Object.values(S).length < 1 && null == n ? d.Step.PLAN_SELECT : d.Step.REVIEW;
                    _(e, {
                        trackedFromStep: d.Step.PAYMENT_TYPE
                    })
                };
                r(N, "Step should be set here");
                let y = (0, a.useStableMemo)(() => Date.now(), [N]);
                return (0, i.AddPaymentFlow)({
                    paymentModalArgs: M,
                    initialStep: d.Step.PAYMENT_TYPE,
                    prependSteps: [d.Step.PROMOTION_INFO],
                    appendSteps: [d.Step.REVIEW, d.Step.CONFIRM],
                    breadcrumpSteps: s,
                    currentBreadcrumpStep: N,
                    usePaymentModalStep: !0,
                    onReturn: L,
                    onComplete: e => {
                        _(d.Step.REVIEW, {
                            trackedFromStep: e
                        })
                    },
                    onStepChange: e => {
                        let {
                            currentStep: n,
                            toStep: s
                        } = e, r = Date.now();
                        u.default.track(f.AnalyticEvents.PAYMENT_FLOW_STEP, {
                            ...t,
                            from_step: n,
                            to_step: s,
                            step_duration_ms: r - y,
                            flow_duration_ms: r - p.startTime
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
            var s = n("37983");
            n("884691");
            var r = n("157009"),
                a = n("153727"),
                l = n("650484"),
                i = n("913390");

            function u() {
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(a.default, {}), (0, s.jsx)(l.PaymentPortalBody, {
                        children: (0, s.jsx)(r.AwaitingAuthenticationStepBody, {
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
                    return o
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                a = n("465527"),
                l = n("50517"),
                i = n("153727"),
                u = n("650484"),
                c = n("199142");

            function o() {
                let [e, t] = r.useState(!1), n = async () => {
                    t(!0), await (0, a.resendPaymentVerificationEmail)()
                };
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(i.default, {}), (0, s.jsx)(u.PaymentPortalBody, {
                        children: (0, s.jsx)(l.AwaitingPurchaseTokenAuthStepBody, {
                            className: c.body,
                            isEmailResent: e,
                            resendEmail: n
                        })
                    }), (0, s.jsx)(u.PaymentPortalFooter, {
                        children: (0, s.jsx)(l.AwaitingPurchaseTokenAuthStepFooter, {})
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
            var s = n("37983"),
                r = n("884691"),
                a = n("627445"),
                l = n.n(a),
                i = n("446674"),
                u = n("77078"),
                c = n("850068"),
                o = n("685665"),
                d = n("921149"),
                f = n("177998"),
                m = n("661128"),
                _ = n("868869"),
                E = n("926223"),
                I = n("467292"),
                p = n("622839"),
                N = n("145131"),
                S = n("599110"),
                T = n("719923"),
                P = n("635357"),
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
                    onBack: a,
                    onNext: v,
                    legalTermsNodeRef: x,
                    flashLegalTerms: L,
                    invoiceError: y,
                    planError: b,
                    onPurchaseError: j,
                    baseAnalyticsData: G,
                    flowStartTime: D,
                    trialId: U,
                    planGroup: B,
                    analyticsLocation: F,
                    purchaseTokenAuthState: k,
                    openInvoiceId: w,
                    metadata: H,
                    backButtonEligible: Y,
                    disablePurchase: W,
                    isTrial: Z = !1
                } = e, {
                    selectedPlan: K,
                    priceOptions: V,
                    setHasAcceptedTerms: z,
                    setPurchaseError: X,
                    purchaseType: J,
                    paymentSourceId: q,
                    paymentSources: Q,
                    selectedSkuId: $,
                    skusById: ee,
                    skuPricePreviewsById: et,
                    referralCode: en,
                    contextMetadata: es
                } = (0, C.usePaymentContext)(), {
                    isGift: er,
                    selectedGiftStyle: ea,
                    customGiftMessage: el,
                    emojiConfetti: ei,
                    soundEffect: eu,
                    giftRecipient: ec
                } = (0, P.useGiftContext)(), eo = null == K ? void 0 : K.id, ed = (0, h.checkNoPaymentTrialEnabled)(U, V.paymentSourceId, eo), ef = (0, i.useStateFromStores)([E.default], () => E.default.popupCallbackCalled), {
                    analyticsLocations: em
                } = (0, o.default)(), e_ = null != q ? Q[q] : null, [eE, eI] = r.useState(ed), [ep, eN] = r.useState(!1), {
                    hasEntitlements: eS
                } = (0, m.useSubscriptionEntitlements)(eo, er), eT = (0, T.isPrepaidPaymentSource)(V.paymentSourceId), eP = eS || ed, eC = (0, d.useIsPrepaidPaymentPastDue)(), eA = null, eO = null;
                if (J === g.PurchaseTypes.ONE_TIME) {
                    var eh;
                    l(null != $, "SKU must be selected for one-time purchases"), l(null != (eA = null !== (eh = ee[$]) && void 0 !== eh ? eh : null), "SKU must exist and be fetched.");
                    let e = et[$],
                        t = null != q ? q : p.NO_PAYMENT_SOURCE;
                    eO = null != e ? e[t] : null
                }
                let eR = async () => {
                    await (0, A.purchaseProduct)({
                        setPurchaseState: n,
                        setHasAcceptedTerms: z,
                        setIsSubmitting: eI,
                        setPurchaseError: X,
                        hasRedirectURL: ep,
                        setHasRedirectURL: eN,
                        isGift: er,
                        giftStyle: ea,
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
                        openInvoiceId: w,
                        premiumSubscription: t,
                        onNext: v,
                        metadata: H,
                        sku: eA,
                        skuPricePreview: eO,
                        purchaseType: J,
                        referralCode: en,
                        loadId: es.loadId,
                        giftRecipient: ec,
                        customMessage: el,
                        emojiConfetti: ei,
                        soundEffect: eu
                    })
                };
                r.useEffect(() => {
                    let e = async () => {
                        if (!0 === ef) try {
                            if (null == E.default.redirectedPaymentId) return;
                            await (0, c.redirectedPaymentSucceeded)(E.default.redirectedPaymentId), n(O.PurchaseState.COMPLETED), v()
                        } catch (e) {
                            n(O.PurchaseState.FAIL), j(e), S.default.track(g.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                                ...G,
                                payment_error_code: null == e ? void 0 : e.code,
                                payment_source_id: q,
                                payment_source_type: null == e_ ? void 0 : e_.type,
                                duration_ms: Date.now() - D
                            })
                        } finally {
                            eI(!1), (0, c.resetPaymentIntentId)()
                        } else k === I.PurchaseTokenAuthState.SUCCESS && await eR()
                    };
                    e()
                }, [ef]), r.useEffect(() => {
                    ed && !er && null == t && eR()
                }, [ed, er, t]);
                let eg = null != w || J === g.PurchaseTypes.ONE_TIME && !er;
                return ed ? null : (0, s.jsxs)(u.ModalFooter, {
                    align: N.default.Align.CENTER,
                    children: [(0, s.jsx)(_.default, {
                        legalTermsNodeRef: x,
                        invoiceError: y,
                        planError: b,
                        disablePurchase: W,
                        flashLegalTerms: L,
                        isSubmitting: eE,
                        premiumSubscription: t,
                        isGift: er,
                        planGroup: B,
                        isPrepaid: eT,
                        isTrial: Z,
                        makePurchase: eR,
                        needsPaymentSource: null == e_ && !eP
                    }), (0, s.jsx)(R.default, {}), Y && !eg ? (0, s.jsx)("div", {
                        className: M.back,
                        children: (0, s.jsx)(f.default, {
                            onClick: a
                        })
                    }) : null]
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
            var s = n("862205");
            let r = (0, s.createExperiment)({
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
            var a = r
        },
        102492: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                checkNoPaymentTrialEnabled: function() {
                    return i
                }
            });
            var s = n("862205"),
                r = n("719923");
            let a = (0, s.createExperiment)({
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
                    let s = null == n || (0, r.isPremiumBaseSubscriptionPlan)(n);
                    return null != e && null == t && s
                },
                i = (e, t, n) => {
                    let {
                        bypassCheckout: s
                    } = a.useExperiment({
                        location: "aeb070_1"
                    }, {
                        autoTrackExposure: !1
                    }), r = l(e, t, n);
                    return s && r
                }
        },
        35188: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var s = (0, n("862205").createExperiment)({
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
            var s = n("592861"),
                r = n("988415"),
                a = n("701909"),
                l = n("153160"),
                i = n("49111"),
                u = n("843455"),
                c = n("782340");
            let o = new Set([u.CurrencyCodes.ARS, u.CurrencyCodes.CLP, u.CurrencyCodes.COP]),
                d = new Set([u.CurrencyCodes.USD, u.CurrencyCodes.JPY]),
                f = {
                    [i.PaymentSourceTypes.CARD]: () => c.default.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
                    [i.PaymentSourceTypes.PAYPAL]: () => c.default.Messages.PAYMENT_SOURCE_PAYPAL,
                    [i.PaymentSourceTypes.SOFORT]: () => c.default.Messages.PAYMENT_SOURCE_SOFORT,
                    [i.PaymentSourceTypes.GIROPAY]: () => c.default.Messages.PAYMENT_SOURCE_GIROPAY,
                    [i.PaymentSourceTypes.PRZELEWY24]: () => c.default.Messages.PAYMENT_SOURCE_PRZELEWY24,
                    [i.PaymentSourceTypes.PAYSAFE_CARD]: () => c.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
                    [i.PaymentSourceTypes.GCASH]: () => c.default.Messages.PAYMENT_SOURCE_GCASH,
                    [i.PaymentSourceTypes.GRABPAY_MY]: () => c.default.Messages.PAYMENT_SOURCE_GRABPAY,
                    [i.PaymentSourceTypes.MOMO_WALLET]: () => c.default.Messages.PAYMENT_SOURCE_MOMO_WALLET,
                    [i.PaymentSourceTypes.VENMO]: () => c.default.Messages.PAYMENT_SOURCE_VENMO,
                    [i.PaymentSourceTypes.KAKAOPAY]: () => c.default.Messages.PAYMENT_SOURCE_KAKAOPAY,
                    [i.PaymentSourceTypes.GOPAY_WALLET]: () => c.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
                    [i.PaymentSourceTypes.BANCONTACT]: () => c.default.Messages.PAYMENT_SOURCE_BANCONTACT,
                    [i.PaymentSourceTypes.EPS]: () => c.default.Messages.PAYMENT_SOURCE_EPS,
                    [i.PaymentSourceTypes.IDEAL]: () => c.default.Messages.PAYMENT_SOURCE_IDEAL,
                    [i.PaymentSourceTypes.CASH_APP]: () => c.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY
                },
                m = [i.PaymentSourceTypes.EPS, i.PaymentSourceTypes.BANCONTACT, i.PaymentSourceTypes.IDEAL, i.PaymentSourceTypes.SOFORT, i.PaymentSourceTypes.GIROPAY, i.PaymentSourceTypes.SEPA_DEBIT, i.PaymentSourceTypes.PAYSAFE_CARD],
                _ = (e, t, n, s) => {
                    if (null == e) return "";
                    let a = (0, r.getI18NCountryName)(e);
                    if (t === u.CurrencyCodes.EUR) return n ? c.default.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
                        country: a
                    }) : c.default.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
                        currencyISOCode: t.toUpperCase()
                    });
                    return s ? c.default.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
                        countryName: a
                    }) : c.default.Messages.LOCALIZED_PRICING_NOTICE.format({
                        country: a
                    })
                },
                E = e => {
                    let {
                        localizedPricingPromo: t,
                        subscription: n,
                        forceSingleLine: s = !1,
                        userLocale: _
                    } = e, {
                        countryCode: E,
                        amount: p,
                        currency: N,
                        paymentSourceTypes: S
                    } = t, T = 0 !== S.length, P = I(E), C = (0, l.formatPrice)(p, N, {
                        style: "currency",
                        currency: N,
                        currencyDisplay: "symbol",
                        localeOverride: P
                    }), A = c.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
                        helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
                        currencyISOCode: N.toUpperCase(),
                        localizedPriceWithCurrencySymbol: C
                    });
                    if (d.has(N) && (A = c.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
                            helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
                            localizedPriceWithCurrencySymbol: C
                        })), o.has(N) && (A = c.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
                            helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: N.toUpperCase(),
                            localizedPriceWithCurrencySymbol: C
                        })), null != n && !n.hasPremiumNitroMonthly && (A = c.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
                            helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: N.toUpperCase()
                        })), N === u.CurrencyCodes.EUR && (A = s ? c.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
                            country: (0, r.getI18NCountryName)(E),
                            currencyISOCode: N.toUpperCase(),
                            helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
                        }) : c.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
                            currencyISOCode: N.toUpperCase(),
                            helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
                        })), T) {
                        let e = m.filter(e => S.includes(e)),
                            t = S.filter(e => !m.includes(e)),
                            n = [...e, ...t],
                            s = n.slice(0, 2).map(e => {
                                var t, n;
                                return null !== (n = null === (t = f[e]) || void 0 === t ? void 0 : t.call(f)) && void 0 !== n ? n : c.default.Messages.PAYMENT_SOURCE_UNKNOWN
                            });
                        S.length >= 3 && s.push(c.default.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
                        let r = new Intl.ListFormat(_, {
                            style: "short",
                            type: "conjunction"
                        });
                        A = c.default.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
                            helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
                            paymentMethods: r.format(s)
                        })
                    }
                    return {
                        localizedPricingBannerHeader: c.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
                            country: (0, r.getI18NCountryName)(E)
                        }),
                        localizedPricingBannerBody: A,
                        localizedPricingBannerLinkOnly: c.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
                            helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
                        }),
                        localizedPricingBannerSubNotif: T ? void 0 : c.default.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
                    }
                },
                I = e => {
                    let t = s.default.find(t => t.alpha2 === e);
                    return null == t ? void 0 : t.localeForICU
                }
        },
        391533: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var s = (0, n("862205").createExperiment)({
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
            var s = n("976979"),
                r = n("862205"),
                a = n("646718"),
                l = (0, r.createExperiment)({
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
            let i = new Set([s.CountryCodes.US, s.CountryCodes.CA]);

            function u(e) {
                return null == e || i.has(e.country)
            }
        },
        968532: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CheckoutV2ChildExperiments: function() {
                    return r
                },
                default: function() {
                    return i
                }
            });
            var s, r, a = n("862205");
            (s = r || (r = {}))[s.NONE = 0] = "NONE", s[s.BROWSER_AUTOFILL = 1] = "BROWSER_AUTOFILL", s[s.MERGE_PLAN_SELECT_TO_REVIEW = 2] = "MERGE_PLAN_SELECT_TO_REVIEW";
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
            var s = n("866227"),
                r = n.n(s),
                a = n("446674"),
                l = n("357957"),
                i = n("10514"),
                u = n("521012"),
                c = n("719923"),
                o = n("49111"),
                d = n("843455");

            function f() {
                let e = (0, a.useStateFromStores)([u.default], () => u.default.getPremiumTypeSubscription()),
                    t = (0, a.useStateFromStores)([i.default], () => null != e && null != e.planIdFromItems ? i.default.get(null == e ? void 0 : e.planIdFromItems) : null),
                    n = (0, a.useStateFromStores)([l.default], () => null != e && null != e.paymentSourceId ? l.default.getPaymentSource(e.paymentSourceId) : null, [e]),
                    s = null != n && d.PREPAID_PAYMENT_SOURCES.has(n.type),
                    f = (null == e ? void 0 : e.status) === o.SubscriptionStatusTypes.PAST_DUE ? r().diff(r(e.currentPeriodStart), "days") : 0;
                return !!(null != e && null != t && (0, c.isPremiumBaseSubscriptionPlan)(t.id)) && s && f >= 0 && f <= (0, c.getBillingGracePeriodDays)(e) && e.status === o.SubscriptionStatusTypes.PAST_DUE && !e.isPurchasedExternally
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
            var s = n("37983");
            n("884691");
            var r = n("414456"),
                a = n.n(r),
                l = n("627445"),
                i = n.n(l),
                u = n("423487"),
                c = n("701909"),
                o = n("35188"),
                d = n("391533"),
                f = n("296253"),
                m = n("49111"),
                _ = n("782340"),
                E = n("712109");

            function I() {
                let e = (0, f.default)(),
                    {
                        enabled: t
                    } = o.default.useExperiment({
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
                    fromBoostCancelModal: r,
                    className: l
                } = e, o = (0, f.default)(), d = I();
                if (!d) return null;
                return i(null != o, "Subscription billing country should not be null"), (0, s.jsxs)("div", {
                    className: a(E.noticeRoot, l),
                    children: [(0, s.jsx)("div", {
                        className: E.iconContainer,
                        children: (0, s.jsx)(u.default, {
                            className: E.infoIcon
                        })
                    }), (0, s.jsx)("div", {
                        className: E.text,
                        children: (t = o, n = r, "PL" === t ? n ? _.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : _.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : "TR" === t ? n ? _.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : _.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : n ? _.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : _.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING).format({
                            helpCenterLink: c.default.getArticleURL(m.HelpdeskArticles.LOCALIZED_PRICING)
                        })
                    })]
                })
            }
        },
        824734: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("414456"),
                a = n.n(r),
                l = n("153160"),
                i = n("646718"),
                u = n("782340"),
                c = n("552033");

            function o(e) {
                let {
                    price: t,
                    currency: n,
                    intervalType: r,
                    className: o,
                    intervalCount: d = 1,
                    isPrepaidPaymentSource: f = !1
                } = e, m = (0, l.formatPrice)(t, n), _ = null;
                return r === i.SubscriptionIntervalTypes.YEAR ? _ = u.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
                    price: m
                }) : r === i.SubscriptionIntervalTypes.MONTH && 1 === d ? _ = u.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
                    price: m
                }) : r === i.SubscriptionIntervalTypes.MONTH && d > 1 && (_ = u.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
                    price: m,
                    intervalCount: d
                })), (0, s.jsx)("div", {
                    className: a(c.pricePerInterval, o),
                    "data-testid": "PricePerInterval-".concat(n),
                    children: null == r || f ? (0, s.jsx)("strong", {
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
                    return N
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                a = n("414456"),
                l = n.n(a),
                i = n("77078"),
                u = n("850391"),
                c = n("149022"),
                o = n("681060"),
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

            function N(e) {
                let {
                    sectionTitle: t,
                    errors: n,
                    onTextChange: a,
                    pendingText: f,
                    placeholder: m,
                    currentText: N,
                    className: S,
                    innerClassName: T,
                    disabled: P = !1,
                    disableThemedBackground: C = !1
                } = e, [A, O] = r.useState(null != f ? f : N), [h, R] = r.useState((0, c.toRichValue)(A)), g = r.useRef(!1);
                return r.useEffect(() => {
                    g.current = !0
                }, []), r.useEffect(() => {
                    if (void 0 === f) {
                        let e = (0, c.toRichValue)(N);
                        O(N), R(e)
                    }
                }, [f, N]), (0, s.jsx)("div", {
                    className: l(E.body, S),
                    children: (0, s.jsxs)(d.default, {
                        title: t,
                        errors: n,
                        disabled: P,
                        children: [(0, s.jsx)(o.default, {
                            innerClassName: l(E.textArea, T),
                            editorClassName: E.editorTextArea,
                            maxCharacterCount: I,
                            onChange: function(e, t, n) {
                                t !== A && (O(t), R(n), a(t))
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
                        }), (0, s.jsx)(i.HiddenVisually, {
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
                    return c
                }
            });
            var s = n("37983"),
                r = n("884691"),
                a = n("414456"),
                l = n.n(a),
                i = n("849085");
            let u = r.forwardRef(function(e, t) {
                let {
                    isActive: n,
                    children: r
                } = e;
                return (0, s.jsx)("div", {
                    className: l(i.wrapper, {
                        [i.wrapperActive]: n
                    }),
                    ref: t,
                    children: r
                })
            });
            var c = u
        },
        889554: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftAnimationOptions: function() {
                    return S
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                a = n("77078"),
                l = n("635357"),
                i = n("742926"),
                u = n("659632"),
                c = n("210721"),
                o = n("78345"),
                d = n("53253"),
                f = n("65324"),
                m = n("563613"),
                _ = n("64798"),
                E = n("646718"),
                I = n("782340"),
                p = n("734203");
            let N = [o.PremiumGiftStyles.STANDARD_BOX, o.PremiumGiftStyles.CAKE, o.PremiumGiftStyles.COFFEE, o.PremiumGiftStyles.CHEST],
                S = () => {
                    let {
                        giftRecipient: e,
                        selectedGiftStyle: t,
                        setSelectedGiftStyle: n,
                        emojiConfetti: o,
                        soundEffect: S,
                        setEmojiConfetti: T,
                        setSoundEffect: P
                    } = (0, l.useGiftContext)(), [C, A] = r.useState(!1), O = r.useRef(null), h = (0, a.useRadioGroup)({
                        orientation: "horizontal"
                    }), R = (0, u.getGiftExperience)(e, !0, "premiumGiftSelect_GiftAnimationOptions"), g = u.GIFT_EXPERIENCES_WITH_CUSTOM_EMOJI_SOUNDBOARD.has(R), M = R !== u.GiftExperience.DEFAULT, v = (0, d.useIsSeasonalGiftingActive)(), {
                        enabled: x
                    } = d.default.useExperiment({
                        location: "premiumGiftSelect_GiftAnimationOptions"
                    }, {
                        autoTrackExposure: v
                    }), L = null;
                    return M && (L = v && x ? E.SeasonalGiftStyles2023 : N), (0, s.jsxs)("div", {
                        children: [M && (0, s.jsxs)("div", {
                            className: p.giftMainAnimation,
                            children: [null != t ? (0, s.jsx)(f.default, {
                                giftStyle: t,
                                defaultAnimationState: c.AnimationState.ACTION,
                                idleAnimationState: c.AnimationState.LOOP,
                                shouldAnimate: !0,
                                className: p.animation
                            }) : (0, s.jsx)(a.Spinner, {
                                className: p.spinner
                            }), g && (0, s.jsxs)("div", {
                                className: p.soundEmojiContainer,
                                children: [(0, s.jsx)("div", {
                                    className: p.sound,
                                    children: (0, s.jsx)(i.default, {
                                        sound: S,
                                        onSelect: e => {
                                            null != P && P(null == e ? void 0 : e)
                                        }
                                    })
                                }), (0, s.jsx)("div", {
                                    className: p.emoji,
                                    children: (0, s.jsx)(m.default, {
                                        setEmojiConfetti: T,
                                        emojiConfetti: null == o ? void 0 : o
                                    })
                                })]
                            })]
                        }), (0, s.jsx)("div", {
                            tabIndex: null != t || C ? void 0 : 0,
                            onFocus: e => {
                                var t;
                                e.target === e.currentTarget && (null === (t = O.current) || void 0 === t || t.focus())
                            },
                            className: p.giftBoxOptionContainer,
                            "aria-label": I.default.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX,
                            ...h,
                            children: null != L && L.map((e, r) => (0, s.jsx)(_.GiftStaticOption, {
                                isSelected: t === e,
                                giftStyle: e,
                                setSelectedGiftStyle: n,
                                ref: 0 === r ? O : null,
                                onFocus: () => A(!0),
                                onBlur: () => A(!1)
                            }, e))
                        }), (0, s.jsx)("div", {
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
            var s = n("37983"),
                r = n("884691"),
                a = n("77078"),
                l = n("86678"),
                i = n("46829"),
                u = n("49111"),
                c = n("958706"),
                o = n("782340"),
                d = n("347609");
            let f = {
                    section: u.AnalyticsSections.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
                    openPopoutType: "gift_effect_emoji_picker"
                },
                m = c.EmojiIntention.GIFT;

            function _(e) {
                let {
                    setEmojiConfetti: t,
                    emojiConfetti: n
                } = e, [u, c] = r.useState(!1), _ = e => (0, s.jsxs)("div", {
                    className: d.customGiftContent,
                    children: [(0, s.jsxs)("div", {
                        className: d.customGiftHeader,
                        children: [(0, s.jsx)(a.Text, {
                            variant: "text-md/bold",
                            children: o.default.Messages.GIFT_SELECT_EMOJI
                        }), (0, s.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            children: o.default.Messages.GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION
                        })]
                    }), e]
                }), E = e => {
                    null != t && (t(e), c(!1))
                };
                return (0, s.jsx)(a.Popout, {
                    shouldShow: u,
                    position: "bottom",
                    align: "left",
                    autoInvert: !1,
                    onRequestClose: () => c(!1),
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, s.jsx)(l.default, {
                            analyticsOverride: f,
                            closePopout: t,
                            onSelectEmoji: E,
                            wrapper: "div",
                            pickerIntention: m,
                            renderHeader: _,
                            headerClassName: d.emojiHeader,
                            className: d.emojiList,
                            listHeaderClassName: d.emojiList,
                            searchProps: {
                                accessory: (0, s.jsx)(s.Fragment, {})
                            }
                        })
                    },
                    children: () => (0, s.jsx)("div", {
                        className: d.container,
                        children: (0, s.jsx)(a.Clickable, {
                            className: d.emoji,
                            onClick: () => c(!0),
                            children: (null == n ? void 0 : n.name) == null ? (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(i.default, {
                                    className: d.emojiIcon,
                                    width: 14,
                                    height: 14
                                }), (0, s.jsx)(a.Text, {
                                    className: d.text,
                                    variant: "text-sm/semibold",
                                    children: o.default.Messages.GIFT_SELECT_EMOJI
                                })]
                            }) : (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(a.Text, {
                                    className: d.textSelected,
                                    variant: "text-sm/semibold",
                                    children: n.optionallyDiverseSequence
                                }), (0, s.jsx)(a.Text, {
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
            var s = n("37983"),
                r = n("884691"),
                a = n("77078"),
                l = n("78345"),
                i = n("203142"),
                u = n("392459"),
                c = n("26245"),
                o = n("21340"),
                d = n("159548"),
                f = n("897184"),
                m = n("990439"),
                _ = n("999641"),
                E = n("74771");
            let I = {
                    [l.PremiumGiftStyles.STANDARD_BOX]: f,
                    [l.PremiumGiftStyles.CAKE]: m,
                    [l.PremiumGiftStyles.CHEST]: _,
                    [l.PremiumGiftStyles.COFFEE]: E,
                    [l.PremiumGiftStyles.SNOWGLOBE]: "",
                    [l.PremiumGiftStyles.BOX]: "",
                    [l.PremiumGiftStyles.CUP]: "",
                    [l.PremiumGiftStyles.SEASONAL_CAKE]: c,
                    [l.PremiumGiftStyles.SEASONAL_CHEST]: o,
                    [l.PremiumGiftStyles.SEASONAL_COFFEE]: d,
                    [l.PremiumGiftStyles.SEASONAL_STANDARD_BOX]: u
                },
                p = r.forwardRef(function(e, t) {
                    let {
                        isSelected: n,
                        giftStyle: r,
                        setSelectedGiftStyle: l,
                        onFocus: u,
                        onBlur: c
                    } = e;
                    return (0, s.jsx)(a.Clickable, {
                        innerRef: t,
                        onClick: () => l(r),
                        onFocus: u,
                        onBlur: c,
                        children: (0, s.jsx)("img", {
                            style: {
                                width: "100%",
                                height: "100%"
                            },
                            alt: "",
                            src: I[r],
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
            var s = n("37983");
            n("884691");
            var r = n("77078"),
                a = n("782340"),
                l = n("816318"),
                i = e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, s.jsx)(r.Anchor, {
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
                    return Y
                },
                PremiumSwitchPlanSelectFooter: function() {
                    return W
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                a = n("627445"),
                l = n.n(a),
                i = n("446674"),
                u = n("77078"),
                c = n("405932"),
                o = n("798609"),
                d = n("837148"),
                f = n("903494"),
                m = n("635357"),
                _ = n("642906"),
                E = n("85336"),
                I = n("883558"),
                p = n("10514"),
                N = n("521012"),
                S = n("659632"),
                T = n("701909"),
                P = n("773336"),
                C = n("719923"),
                A = n("153160"),
                O = n("916187"),
                h = n("968532"),
                R = n("15733"),
                g = n("154889"),
                M = n("917247"),
                v = n("279171"),
                x = n("883662"),
                L = n("824734"),
                y = n("705820"),
                b = n("889554"),
                j = n("177998"),
                G = n("661128"),
                D = n("26785"),
                U = n("617223"),
                B = n("646718"),
                F = n("49111"),
                k = n("843455"),
                w = n("782340"),
                H = n("33769");

            function Y(e) {
                var t, n, a, E, I, N;
                let {
                    premiumSubscription: P,
                    skuId: h,
                    selectedPlanId: j,
                    setSelectedPlanId: G,
                    priceOptions: Y,
                    planOptions: W,
                    eligibleForMultiMonthPlans: Z,
                    referralTrialOfferId: K,
                    subscriptionPeriodEnd: V,
                    showTotal: z = !0,
                    discountInvoiceItems: X,
                    handleClose: J
                } = e, {
                    activeSubscription: q,
                    setSelectedPlanId: Q,
                    selectedSkuId: $,
                    selectedPlan: ee,
                    priceOptions: et
                } = (0, _.usePaymentContext)(), {
                    isGift: en,
                    giftRecipient: es,
                    selectedGiftStyle: er,
                    customGiftMessage: ea,
                    setCustomGiftMessage: el
                } = (0, m.useGiftContext)(), ei = (0, S.isCustomGiftEnabled)(es), eu = en && (0, S.shouldShowCustomGiftExperience)(es, !0, "PremiumSwitchPlanSelectBody"), {
                    confirmUpsellEnabled: ec
                } = (0, d.default)({
                    location: "PremiumSwitchPlanSelectBody"
                });
                h = null != h ? h : $, l(void 0 !== (P = null != P ? P : q), "should not be undefined");
                let [eo, ed] = (0, i.useStateFromStoresArray)([p.default], () => [null != P ? p.default.get(P.planId) : null, null != j ? p.default.get(j) : null]), ef = (0, M.usePremiumTrialOffer)(K), em = null == ef ? void 0 : ef.subscription_trial, e_ = (0, g.usePremiumDiscountOffer)(), eE = null == e_ ? void 0 : null === (t = e_.discount) || void 0 === t ? void 0 : t.plan_ids, eI = null != ed ? ed : ee, ep = r.useCallback(e => {
                    null != G ? G(e) : Q(e)
                }, [G, Q]), eN = null != Y ? Y : et;
                l(null != eN, "Price option has to be set");
                let eS = null != ef && (0, B.SubscriptionTrials)[ef.trial_id].skus.includes(h),
                    eT = null != e_ && W.some(e => null == eE ? void 0 : eE.includes(e)),
                    eP = (0, C.getPrice)(B.SubscriptionPlans.PREMIUM_MONTH_TIER_2, !1, en, eN);
                r.useEffect(() => {
                    Z && O.default.trackExposure({
                        location: "5f89bb_1"
                    })
                }, [Z]);
                let eC = (null == eI ? void 0 : eI.id) != null && W.includes(eI.id);
                r.useEffect(() => {
                    if (!eC) {
                        if (null == eo || en) ep(W[0]);
                        else if (null != eo) {
                            let e = W.find(e => e !== eo.id);
                            null != e && ep(e)
                        }
                    }
                }, [eC, en, W, eo, ep]);
                let eA = !eu && (en || !eS && !eT) && eC && z,
                    eO = (0, u.useRadioGroup)(),
                    eh = (null == eI ? void 0 : eI.id) != null ? (0, C.getPrice)(eI.id, !1, en, eN) : void 0,
                    {
                        ipCountryCode: eR
                    } = (0, R.default)(),
                    eg = "HR" === eR && null != eh && eh.currency === k.CurrencyCodes.EUR,
                    eM = (0, C.isPrepaidPaymentSource)(eN.paymentSourceId),
                    ev = (null == em ? void 0 : em.interval) === B.SubscriptionIntervalTypes.DAY ? w.default.Messages.BILLING_TRIAL_2_WEEK_PERIOD : w.default.Messages.BILLING_TRIAL_30_DAY_PERIOD,
                    ex = !en && (eT || null != em && eS && null != V),
                    eL = null == X ? void 0 : null === (E = X.find(e => e.subscriptionPlanId === B.SubscriptionPlans.PREMIUM_MONTH_TIER_2)) || void 0 === E ? void 0 : null === (a = E.discounts) || void 0 === a ? void 0 : null === (n = a.find(e => e.type === o.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === n ? void 0 : n.amount;
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)("div", {
                        className: eu ? H.stepBodyCustomGift : H.stepBody,
                        children: [(0, s.jsxs)("div", {
                            className: eu ? H.bodyColumnMiddle : void 0,
                            children: [(0, s.jsx)(v.default, {
                                fromBoostCancelModal: !1,
                                className: H.legacyPricingNotice
                            }), eu && null != er && (0, s.jsx)(b.GiftAnimationOptions, {})]
                        }), (0, s.jsxs)("div", {
                            className: eu ? H.bodyColumnRight : void 0,
                            children: [ei && (0, s.jsx)(U.SendGiftToUser, {
                                giftRecipient: es
                            }), (() => {
                                if (ei && null != el) return (0, s.jsx)(y.default, {
                                    sectionTitle: w.default.Messages.GIFT_OPTIONAL_MESSAGE,
                                    onTextChange: e => el(e),
                                    pendingText: ea,
                                    currentText: ea
                                })
                            })(), null != eo && !en && (0, s.jsx)("div", {
                                className: H.bodyText,
                                children: function(e, t) {
                                    let n = w.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
                                        s = w.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
                                        r = (() => {
                                            switch (e.interval) {
                                                case B.SubscriptionIntervalTypes.YEAR:
                                                    return n;
                                                case B.SubscriptionIntervalTypes.MONTH:
                                                default:
                                                    return s
                                            }
                                        })(),
                                        a = e.skuId;
                                    switch (t) {
                                        case B.PremiumSubscriptionSKUs.TIER_0:
                                            switch (a) {
                                                case B.PremiumSubscriptionSKUs.TIER_1:
                                                    return w.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                                                case B.PremiumSubscriptionSKUs.TIER_2:
                                                    return w.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                                                default:
                                                    return r
                                            }
                                        case B.PremiumSubscriptionSKUs.TIER_1:
                                            switch (a) {
                                                case B.PremiumSubscriptionSKUs.TIER_0:
                                                    return w.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                                                case B.PremiumSubscriptionSKUs.TIER_2:
                                                    return w.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                                                default:
                                                    return r
                                            }
                                        case B.PremiumSubscriptionSKUs.TIER_2:
                                            switch (a) {
                                                case B.PremiumSubscriptionSKUs.TIER_0:
                                                case B.PremiumSubscriptionSKUs.TIER_1:
                                                    return w.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                                                case B.PremiumSubscriptionSKUs.TIER_2:
                                                    return e.interval === B.SubscriptionIntervalTypes.MONTH ? w.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format({
                                                        numFreeGuildSubscriptions: B.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
                                                    }) : r;
                                                default:
                                                    return r
                                            }
                                        default:
                                            return r
                                    }
                                }(eo, h)
                            }), (I = eS, N = eT, eu ? (0, s.jsx)(u.FormTitle, {
                                children: w.default.Messages.GIFT_SUBSCRIPTION_SELECTION
                            }) : ex ? I ? (0, s.jsxs)("div", {
                                children: [(0, s.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: H.trialPlanSelectHeader,
                                    children: w.default.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format({
                                        trialEnd: V,
                                        trialPeriod: ev
                                    })
                                }), (0, s.jsx)("hr", {
                                    className: H.planSelectSeparator
                                })]
                            }) : N && null != eL && null != eP ? (0, s.jsxs)("div", {
                                children: [(0, s.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: H.trialPlanSelectHeader,
                                    children: w.default.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO.format({
                                        discountedPrice: (0, A.formatPrice)(eP.amount - eL, eP.currency),
                                        regularPrice: (0, A.formatPrice)(eP.amount, eP.currency)
                                    })
                                }), (0, s.jsx)("hr", {
                                    className: H.planSelectSeparator
                                })]
                            }) : void 0 : (0, s.jsx)("div", {
                                className: H.selectPlanChooseTitle,
                                children: w.default.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE
                            })), (0, s.jsx)("div", {
                                ...eO,
                                children: W.map(e => (0, s.jsx)(D.default, {
                                    planId: e,
                                    premiumSubscription: en ? null : null != P ? P : null,
                                    selectPlan: ep,
                                    selected: (null == eI ? void 0 : eI.id) === e,
                                    priceOptions: eN,
                                    shouldShowUpdatedPaymentModal: ex,
                                    isEligibleForDiscount: eT,
                                    discountAmountOff: eL
                                }, e))
                            }), (0, s.jsx)("div", {
                                children: eA && null != eI && null != eh ? (0, s.jsxs)("div", {
                                    children: [(0, s.jsx)("div", {
                                        className: H.selectPlanDivider
                                    }), (0, s.jsx)(x.PremiumInvoiceTableTotalRow, {
                                        label: w.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                                        value: (0, s.jsx)(L.default, {
                                            price: eh.amount,
                                            currency: eh.currency,
                                            intervalType: en ? null : eI.interval,
                                            intervalCount: eI.intervalCount,
                                            isPrepaidPaymentSource: eM
                                        }),
                                        className: H.selectPlanTotalRow
                                    })]
                                }) : null
                            }), eg && (0, s.jsx)(c.default, {
                                message: w.default.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
                                    kunaPriceWithCurrency: (0, A.formatPrice)(7.5345 * eh.amount, k.CurrencyCodes.HRK)
                                })
                            }), !en && !ex && z && (0, s.jsx)(c.default, {
                                message: w.default.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
                                    documentationLink: T.default.getArticleURL(F.HelpdeskArticles.LOCALIZED_PRICING)
                                })
                            }), ec && en && (0, s.jsx)(f.default, {
                                onClose: J
                            })]
                        })]
                    })
                })
            }

            function W(e) {
                let {
                    onStepChange: t,
                    selectedPlanId: n,
                    paymentSources: r,
                    onBackClick: a,
                    showBackButton: l,
                    planOptions: i,
                    shouldRenderUpdatedPaymentModal: c = !1,
                    isTrial: o
                } = e, {
                    paymentSources: d,
                    selectedPlan: f
                } = (0, _.usePaymentContext)(), {
                    isGift: E
                } = (0, m.useGiftContext)();
                return r = null != r ? r : d, n = null != n ? n : null == f ? void 0 : f.id, (0, s.jsxs)(s.Fragment, {
                    children: [null != n && i.includes(n) ? (0, s.jsx)(Z, {
                        paymentSources: r,
                        onStepChange: t,
                        selectedPlanId: n,
                        isGift: E,
                        shouldRenderUpdatedPaymentModal: c,
                        isTrial: o
                    }) : (0, s.jsx)(u.Button, {
                        disabled: !0,
                        children: w.default.Messages.SELECT
                    }), l ? (0, s.jsx)(j.default, {
                        onClick: a
                    }) : null]
                })
            }

            function Z(e) {
                let {
                    onStepChange: t,
                    selectedPlanId: n,
                    isGift: r,
                    paymentSources: a,
                    shouldRenderUpdatedPaymentModal: l,
                    isTrial: c
                } = e, o = (0, i.useStateFromStores)([N.default], () => N.default.getPremiumTypeSubscription()), {
                    hasEntitlements: d
                } = (0, G.useSubscriptionEntitlements)(n, r), f = null != o && null != o.paymentSourceId || Object.keys(a).length > 0 || d && !c;
                var m = l ? w.default.Messages.NEXT : w.default.Messages.SELECT,
                    _ = E.Step.ADD_PAYMENT_STEPS;
                return f ? _ = E.Step.REVIEW : (0, P.isDesktop)() && function() {
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
                }() && (_ = E.Step.AWAITING_BROWSER_CHECKOUT, m = w.default.Messages.CONTINUE_IN_BROWSER), (0, s.jsx)(u.Button, {
                    onClick: () => t(_),
                    children: m
                })
            }
        },
        26785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("414456"),
                a = n.n(r),
                l = n("627445"),
                i = n.n(l),
                u = n("446674"),
                c = n("669491"),
                o = n("77078"),
                d = n("635357"),
                f = n("915639"),
                m = n("10514"),
                _ = n("659632"),
                E = n("719923"),
                I = n("153160"),
                p = n("646718"),
                N = n("782340"),
                S = n("419063");

            function T(e) {
                let {
                    premiumSubscription: t,
                    planId: n,
                    selectPlan: r,
                    selected: l,
                    priceOptions: T,
                    shouldShowUpdatedPaymentModal: P,
                    isEligibleForDiscount: C,
                    discountAmountOff: A
                } = e, O = (0, u.useStateFromStores)([f.default], () => f.default.locale), h = (0, u.useStateFromStores)([m.default], () => m.default.get(n)), {
                    isGift: R,
                    giftRecipient: g
                } = (0, d.useGiftContext)(), M = R && (0, _.shouldShowCustomGiftExperience)(g, !0, "PremiumSwitchPlanSelectOption");
                i(null != h, "Missing subscriptionPlan");
                let v = null != t && t.planId === n,
                    x = v || n === p.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && null != t && [p.SubscriptionPlans.PREMIUM_YEAR_TIER_0, p.SubscriptionPlans.PREMIUM_YEAR_TIER_1].includes(t.planId),
                    L = p.DISCOUNTS[n],
                    y = (0, E.getPrice)(n, !1, R, T),
                    b = (0, E.isPrepaidPaymentSource)(T.paymentSourceId),
                    j = null != L && !P,
                    G = h.interval === p.SubscriptionIntervalTypes.YEAR ? N.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : N.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
                    D = () => null != L && (0, s.jsx)(o.Text, {
                        tag: "span",
                        variant: "eyebrow",
                        color: "always-white",
                        className: S.planOptionDiscount,
                        children: N.default.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
                            discount: (0, I.formatPercent)(O, L / 100)
                        })
                    }),
                    U = () => h.interval === p.SubscriptionIntervalTypes.YEAR && null != t || j && !v ? h.interval === p.SubscriptionIntervalTypes.YEAR && null != t ? (0, s.jsxs)("span", {
                        className: S.planOptionMonthsFree,
                        children: ["(", N.default.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS, ")"]
                    }) : j && !v ? D() : void 0 : null;
                return (0, s.jsxs)(o.Clickable, {
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
                    onClick: x ? void 0 : () => r(n),
                    className: a(S.planOptionClickableContainer, {
                        [S.selectedPlan]: M && l,
                        [S.selectionBox]: M
                    }),
                    children: [(0, s.jsxs)("div", {
                        className: a(S.planOption, {
                            [S.planOptionDisabled]: x
                        }),
                        children: [(0, s.jsxs)("div", {
                            className: S.planOptionClickable,
                            children: [!M && (0, s.jsx)(o.Checkbox, {
                                readOnly: !0,
                                displayOnly: !0,
                                value: l,
                                shape: o.Checkbox.Shapes.ROUND,
                                color: c.default.unsafe_rawColors.BRAND_500.css,
                                type: o.Checkbox.Types.INVERTED,
                                className: S.planOptionCheckbox
                            }), (0, s.jsxs)("div", {
                                children: [(0, s.jsxs)("div", {
                                    className: a(S.planOptionInterval, {
                                        [S.optionSelected]: l || M,
                                        [S.updatedOptionSelected]: P && (l || M)
                                    }),
                                    children: [(0, E.getIntervalString)(h.interval, R, b, h.intervalCount, M, (0, E.getPremiumType)(h.id)), M && U()]
                                }), M && (0, s.jsx)("div", {
                                    className: S.planOneTimeCost,
                                    children: N.default.Messages.ONE_TIME_CHARGE.format({
                                        currencyAmount: (0, I.formatPrice)(y.amount, y.currency)
                                    })
                                })]
                            }), v && (0, s.jsxs)("span", {
                                className: S.planOptionCurrentPlan,
                                children: ["(", N.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, ")"]
                            }), !M && U()]
                        }), P ? (0, s.jsx)("div", {
                            className: a({
                                [S.optionPriceSelected]: l
                            }),
                            children: N.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                price: (() => {
                                    if (C && null != A) return h.interval === p.SubscriptionIntervalTypes.MONTH ? (0, I.formatPrice)(y.amount - A, y.currency) : (0, I.formatPrice)(y.amount, y.currency);
                                    return (0, I.formatPrice)(0, y.currency, {
                                        maximumFractionDigits: 0
                                    })
                                })()
                            })
                        }) : (0, s.jsx)("div", {
                            className: a({
                                [S.optionSelected]: l || M
                            }),
                            children: (0, I.formatPrice)(y.amount, y.currency)
                        })]
                    }), P && (0, s.jsx)("div", {
                        className: S.planOptionSubtextContainer,
                        children: (0, s.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: l ? "text-normal" : "interactive-normal",
                            className: a(S.planOptionSubtext, {
                                [S.discountPlanOptionSubtext]: C
                            }),
                            children: C && null != A ? h.interval === p.SubscriptionIntervalTypes.MONTH ? N.default.Messages.BILLING_DISCOUNT_MONTHLY_PRICE.format({
                                discountedPrice: (0, I.formatPrice)(y.amount - A, y.currency),
                                regularPrice: (0, I.formatPrice)(y.amount, y.currency)
                            }) : N.default.Messages.BILLING_YEARLY_PLAN_SAVINGS.format({
                                percent: L
                            }) : G.format({
                                price: (0, I.formatPrice)(y.amount, y.currency)
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
                    return c
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("77078"),
                a = n("87657"),
                l = n("158998"),
                i = n("782340"),
                u = n("438269");
            let c = e => {
                let {
                    giftRecipient: t
                } = e;
                return null == t ? null : (0, s.jsxs)("div", {
                    className: u.content,
                    children: [(0, s.jsx)(r.FormTitle, {
                        children: i.default.Messages.FORM_LABEL_SEND_TO
                    }), (0, s.jsxs)("div", {
                        className: u.giftRecipientInfo,
                        children: [(0, s.jsx)(a.default, {
                            user: t,
                            className: u.giftRecipient,
                            size: r.AvatarSizes.SIZE_20
                        }), (0, s.jsx)(r.Heading, {
                            className: u.giftRecipientName,
                            variant: "text-md/normal",
                            children: l.default.getName(t)
                        }), (0, s.jsx)(r.Heading, {
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
                    return Y
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                a = n("627445"),
                l = n.n(a),
                i = n("976979"),
                u = n("446674"),
                c = n("669491"),
                o = n("77078"),
                d = n("335430"),
                f = n("703332"),
                m = n("740055"),
                _ = n("545876"),
                E = n("736978"),
                I = n("635357"),
                p = n("642906"),
                N = n("286350"),
                S = n("102492"),
                T = n("176108"),
                P = n("102985"),
                C = n("160299"),
                A = n("10514"),
                O = n("68238"),
                h = n("659632"),
                R = n("719923"),
                g = n("153160"),
                M = n("210721"),
                v = n("809071"),
                x = n("154889"),
                L = n("883662"),
                y = n("623003"),
                b = n("65324"),
                j = n("570727"),
                G = n("146163"),
                D = n("661128"),
                U = n("617223"),
                B = n("646718"),
                F = n("49111"),
                k = n("843455"),
                w = n("782340"),
                H = n("615689");

            function Y(e) {
                var t, n, a;
                let Y, W, {
                        selectedPlanId: Z,
                        paymentSources: K,
                        priceOptions: V,
                        currencies: z,
                        onCurrencyChange: X,
                        onPaymentSourceChange: J,
                        handlePaymentSourceAdd: q,
                        setHasAcceptedTerms: Q,
                        legalTermsNodeRef: $,
                        hasLegalTermsFlash: ee,
                        trialId: et,
                        trialFooterMessageOverride: en,
                        reviewWarningMessage: es,
                        metadata: er,
                        purchaseState: ea,
                        hideSubscriptionDetails: el,
                        referralTrialOfferId: ei,
                        isTrial: eu = !1,
                        isDiscount: ec = !1,
                        handleClose: eo
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
                        giftRecipient: eN,
                        selectedGiftStyle: eS
                    } = (0, I.useGiftContext)(),
                    eT = (0, x.usePremiumDiscountOffer)(),
                    eP = null == eT ? void 0 : null === (t = eT.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => B.SubscriptionPlanInfo[e].skuId === em),
                    eC = !ep && null != eT && null != em && eP,
                    eA = (0, u.useStateFromStores)([A.default], () => A.default.get(Z));
                l(null != eA, "Missing plan");
                let eO = [{
                        planId: eA.id,
                        quantity: 1
                    }],
                    eh = ea === N.PurchaseState.PURCHASING || ea === N.PurchaseState.COMPLETED,
                    eR = ep || eh,
                    [eg, eM] = (0, v.useSubscriptionInvoicePreview)({
                        items: eO,
                        renewal: !1,
                        preventFetch: eR,
                        applyEntitlements: !0,
                        paymentSourceId: V.paymentSourceId,
                        currency: V.currency,
                        trialId: et,
                        metadata: er
                    }),
                    [ev, ex] = (0, v.useSubscriptionInvoicePreview)({
                        items: eO,
                        renewal: !0,
                        preventFetch: eR,
                        trialId: et,
                        paymentSourceId: V.paymentSourceId,
                        currency: V.currency,
                        metadata: er
                    }),
                    [eL, ey] = (0, v.useSubscriptionInvoicePreview)({
                        items: [{
                            planId: B.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
                            quantity: 1
                        }],
                        renewal: !0,
                        preventFetch: !eC,
                        trialId: et,
                        paymentSourceId: V.paymentSourceId,
                        currency: V.currency,
                        metadata: er
                    }),
                    eb = ep && (0, h.shouldShowCustomGiftExperience)(eN, !0, "PremiumSubscriptionReview"),
                    ej = null !== (a = null != eM ? eM : ex) && void 0 !== a ? a : ey,
                    eG = (0, u.useStateFromStores)([P.default], () => P.default.enabled),
                    eD = V.paymentSourceId,
                    {
                        hasEntitlements: eU,
                        entitlements: eB
                    } = (0, D.useSubscriptionEntitlements)(eA.id, ep),
                    eF = (0, R.isPrepaidPaymentSource)(V.paymentSourceId),
                    ek = (0, S.checkNoPaymentTrialEnabled)(et, eD, Z),
                    ew = (0, T.inOneStepSubscriptionCheckout)({
                        isTrial: eu,
                        isGift: ep,
                        selectedSkuId: em,
                        startedPaymentFlowWithPaymentSources: eI.current
                    }),
                    [eH, eY] = r.useState(null == eg ? void 0 : eg.subscriptionPeriodEnd);
                r.useEffect(() => {
                    null == eH && eY(null == eg ? void 0 : eg.subscriptionPeriodEnd)
                }, [null == eg ? void 0 : eg.subscriptionPeriodEnd, eH]);
                let eW = r.useMemo(() => (0, R.getPremiumPlanOptions)({
                        skuId: em,
                        isPremium: eE,
                        multiMonthPlans: [],
                        currentSubscription: ef,
                        isGift: ep,
                        isEligibleForTrial: eu,
                        defaultPlanId: e_,
                        defaultToMonthlyPlan: !1
                    }), [em, ef, ep, e_, eE, eu]),
                    eZ = (0, T.planSwitchLoadingShowSpinner)(ew, eg, eA);
                if (null != ej) {
                    let e = ej.message;
                    return ej.code === E.ErrorCodes.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (e = w.default.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY), (0, s.jsx)(o.FormErrorBlock, {
                        children: e
                    })
                }
                if (ep) W = (0, s.jsx)(G.SubscriptionInvoiceGift, {
                    paymentSourceId: V.paymentSourceId,
                    plan: eA,
                    className: H.invoice,
                    isPrepaidPaymentSource: eF,
                    isCustomGift: eb
                });
                else if (eu && null != eg) W = (0, s.jsxs)("div", {
                    children: [(0, s.jsx)(L.PremiumInvoiceTableDivider, {
                        negativeMarginTop: !0
                    }), (0, s.jsxs)(L.PremiumInvoiceTable, {
                        className: H.invoice,
                        children: [(0, s.jsxs)("div", {
                            className: H.trialPriceLine,
                            children: [(0, s.jsx)(o.Text, {
                                variant: "text-md/bold",
                                children: w.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
                            }), (0, s.jsx)(o.Text, {
                                variant: "text-md/normal",
                                children: w.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                    price: (0, g.formatPrice)(0, eg.currency, {
                                        maximumFractionDigits: 0
                                    })
                                })
                            })]
                        }), (0, s.jsx)("div", {
                            className: H.afterTrialPriceLine,
                            children: (0, s.jsx)(G.PremiumTrialInvoiceTableRow, {
                                invoice: eg,
                                plan: eA
                            })
                        })]
                    })]
                });
                else {
                    if (null == eg || null == ev || eZ) return (0, s.jsx)("div", {
                        className: H.spinnerWrapper,
                        children: (0, s.jsx)(o.Spinner, {})
                    });
                    eu && eg.subscriptionPeriodEnd !== ev.subscriptionPeriodEnd && (Y = eg.subscriptionPeriodEnd), W = (0, s.jsxs)(L.PremiumInvoiceTable, {
                        className: H.invoice,
                        children: [(0, s.jsx)(L.PremiumInvoiceTableHeader, {
                            children: w.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
                        }), (0, s.jsx)(G.PremiumSubscriptionChangePlanInvoiceRows, {
                            invoice: eg,
                            newPlan: eA,
                            isPrepaidPaymentSource: eF,
                            referralTrialOfferId: ei
                        }), eF ? null : (0, s.jsx)(G.SubscriptionInvoiceFooter, {
                            renewalInvoice: ev,
                            isTrial: eu,
                            priceOptions: V,
                            overrideRenewalDate: Y,
                            trialFooterMessageOverride: en,
                            hideSubscriptionDetails: el
                        })]
                    })
                }
                let eK = i.CountryCodesSets.EEA_COUNTRIES.has(C.default.ipCountryCodeWithFallback),
                    {
                        checkboxLabel: eV,
                        checkboxClassname: ez,
                        checkboxLabelClassname: eX
                    } = function(e, t, n) {
                        let s = null,
                            r = null,
                            a = null;
                        if (e && null != t) {
                            let {
                                intervalType: e,
                                intervalCount: l
                            } = R.default.getIntervalForInvoice(t), i = (0, g.formatRate)((0, g.formatPrice)(t.total, t.currency), e, l), u = null != n ? n : t.subscriptionPeriodEnd;
                            s = w.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
                                termsURL: F.MarketingURLs.TERMS,
                                paidURL: F.MarketingURLs.PAID_TERMS,
                                rate: i,
                                renewalDate: u
                            }), r = H.trialCheckbox, a = H.trialCheckboxLabel
                        }
                        return {
                            checkboxLabel: s,
                            checkboxClassname: r,
                            checkboxLabelClassname: a
                        }
                    }(null != eu && eu, ev, Y),
                    eJ = w.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                        planName: eA.name
                    });
                return ep && !eb ? eJ = w.default.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : ep && eb ? eJ = "" : (0, R.isPremiumSubscriptionPlan)(eA.id) && (eJ = R.default.getBillingReviewSubheader(null, eA)), ek ? null : (0, s.jsxs)("div", {
                    className: H.stepBody,
                    children: [null != es && (0, s.jsxs)("div", {
                        className: H.reviewWarningMessageContainer,
                        children: [(0, s.jsx)(O.default, {
                            color: c.default.unsafe_rawColors.YELLOW_300.css,
                            width: 20,
                            height: 20
                        }), (0, s.jsx)(o.Text, {
                            className: H.reviewWarningMessage,
                            variant: "text-sm/normal",
                            children: es
                        })]
                    }), ew && (0, s.jsxs)("div", {
                        children: [(0, s.jsx)(L.PremiumInvoiceTableDivider, {
                            negativeMarginTop: !0
                        }), (0, s.jsx)(j.PremiumSwitchPlanSelectBody, {
                            planOptions: eW,
                            eligibleForMultiMonthPlans: !1,
                            referralTrialOfferId: void 0,
                            selectedPlanId: Z,
                            subscriptionPeriodEnd: eH,
                            showTotal: !1,
                            discountInvoiceItems: eC ? null == eL ? void 0 : eL.invoiceItems : void 0,
                            handleClose: eo
                        }), (0, s.jsx)(L.PremiumInvoiceTableDivider, {})]
                    }), !eu && (0, s.jsx)(o.FormTitle, {
                        tag: o.FormTitleTags.H5,
                        children: eJ
                    }), eb && null != eS && (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(b.default, {
                            defaultAnimationState: M.AnimationState.LOOP,
                            giftStyle: eS,
                            shouldAnimate: !0,
                            className: H.giftMainAnimation
                        }), (0, s.jsx)(U.SendGiftToUser, {
                            giftRecipient: eN
                        })]
                    }), W, (0, s.jsxs)("div", {
                        className: H.paymentSourceWrapper,
                        children: [eu ? (0, s.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            className: H.formTitle,
                            children: w.default.Messages.BILLING_STEP_PAYMENT_METHOD
                        }) : (0, s.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            children: w.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, s.jsx)(m.default, {
                            paymentSources: Object.values(K),
                            selectedPaymentSourceId: eD,
                            prependOption: eU && !eu ? {
                                label: w.default.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
                                value: null
                            } : null,
                            onChange: J,
                            onPaymentSourceAdd: q,
                            hidePersonalInformation: eG,
                            isTrial: eu
                        }), eU && null == eD ? (0, s.jsx)("div", {
                            className: H.paymentSourceOptionalWarning,
                            children: w.default.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({
                                months: eB.length
                            })
                        }) : null, ec ? null : (0, s.jsxs)(d.CurrencyWrapper, {
                            currencies: z,
                            className: H.currencyWrapper,
                            children: [(0, s.jsx)(o.FormTitle, {
                                tag: o.FormTitleTags.H5,
                                children: w.default.Messages.PAYMENT_CURRENCY
                            }), (0, s.jsx)(d.default, {
                                selectedCurrency: V.currency,
                                currencies: z,
                                onChange: X
                            })]
                        })]
                    }), (0, s.jsx)(y.default, {
                        isActive: ee,
                        ref: $,
                        children: (0, s.jsx)(_.default, {
                            onChange: Q,
                            forceShow: !0,
                            checkboxLabel: eV,
                            checkboxClassname: ez,
                            checkboxLabelClassname: eX,
                            finePrint: null != en ? en : (0, s.jsx)(f.default, {
                                hide: eu || ec,
                                subscriptionPlan: eA,
                                renewalInvoice: ev,
                                isGift: ep,
                                paymentSourceType: null === (n = K[null != eD ? eD : ""]) || void 0 === n ? void 0 : n.type,
                                isEmbeddedIAP: ed,
                                basePrice: (0, R.getPrice)(eA.id, !1, ep, V)
                            }),
                            showPricingLink: eA.currency !== k.CurrencyCodes.USD,
                            showWithdrawalWaiver: eK,
                            disabled: eh,
                            isTrial: eu && null == en,
                            isDiscount: ec,
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
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("414456"),
                a = n.n(r),
                l = n("77078"),
                i = n("216422"),
                u = n("782340"),
                c = n("881609");

            function o(e) {
                let {
                    text: t = u.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                    className: n
                } = e;
                return (0, s.jsx)(l.Tooltip, {
                    text: t,
                    children: e => (0, s.jsx)(l.Clickable, {
                        ...e,
                        children: (0, s.jsx)(i.default, {
                            className: a(c.nitroWheel, n)
                        })
                    })
                })
            }
        },
        570697: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("781738");
            var s = n("37983");
            n("884691");
            var r = n("414456"),
                a = n.n(r),
                l = n("77078"),
                i = n("254490"),
                u = n("891653"),
                c = n("632892"),
                o = n("326908");

            function d(e) {
                let {
                    errors: t
                } = e;
                return (0, s.jsx)(s.Fragment, {
                    children: t.map((e, t) => (0, s.jsx)(l.Text, {
                        variant: "text-xs/normal",
                        color: "text-danger",
                        className: o.errorMessage,
                        children: e.replace(/[0-9.,]+ ?kb/g, e => {
                            let t = 1024 * parseInt(e, 10);
                            return isNaN(t) ? e : (0, i.sizeString)(t)
                        })
                    }, t))
                })
            }

            function f(e) {
                let {
                    title: t,
                    titleIcon: n,
                    titleId: r,
                    description: i,
                    children: f,
                    className: m,
                    errors: _,
                    disabled: E = !1,
                    hideDivider: I = !1,
                    showBorder: p = !1,
                    borderType: N,
                    hasBackground: S = !1,
                    forcedDivider: T = !1,
                    showPremiumIcon: P = !1
                } = e;
                return (0, s.jsx)("div", {
                    className: a(o.customizationSection, m, {
                        [o.disabled]: E,
                        [o.hideDivider]: I,
                        [o.showBorder]: p,
                        [o.withDivider]: T
                    }),
                    children: (0, s.jsxs)(c.default, {
                        className: o.customizationSectionBorder,
                        backgroundClassName: o.customizationSectionBackground,
                        isShown: p,
                        type: N,
                        hasBackground: S,
                        children: [(0, s.jsxs)(l.FormTitle, {
                            className: o.title,
                            id: r,
                            children: [t, P && (0, s.jsx)(u.default, {}), n]
                        }), null != i ? (0, s.jsx)(l.FormText, {
                            type: l.FormText.Types.DESCRIPTION,
                            className: o.sectionDescription,
                            children: i
                        }) : null, f, null != _ && (0, s.jsx)(d, {
                            errors: _
                        })]
                    })
                })
            }
        },
        632892: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FeatureBorderTypes: function() {
                    return r
                },
                default: function() {
                    return d
                }
            });
            var s, r, a = n("37983"),
                l = n("884691"),
                i = n("414456"),
                u = n.n(i),
                c = n("623682");
            (s = r || (r = {})).PREMIUM = "premium", s.LIMITED = "limited";
            let o = {
                premium: {
                    border: c.premiumFeatureBorder,
                    background: c.premiumBackground
                },
                limited: {
                    border: c.limitedFeatureBorder,
                    background: c.limitedBackground
                }
            };
            var d = l.forwardRef(function(e, t) {
                let {
                    children: n,
                    type: s = "premium",
                    isShown: r,
                    hasBackground: l = !1,
                    className: i,
                    backgroundClassName: d
                } = e;
                if (!r) return (0, a.jsx)(a.Fragment, {
                    children: n
                });
                let {
                    border: f,
                    background: m
                } = o[s];
                return (0, a.jsx)("div", {
                    ref: t,
                    className: u(f, i),
                    children: (0, a.jsx)("div", {
                        className: u(l ? m : c.background, d),
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
            var s = n("37983"),
                r = n("884691"),
                a = n("669491"),
                l = n("292915"),
                i = n("77078"),
                u = n("389480"),
                c = n("191191"),
                o = n("782340"),
                d = n("895576");
            let f = [54, 8, 8, 8];

            function m(e) {
                let {
                    onSelect: t,
                    sound: n
                } = e, [m, _] = r.useState(!1);

                function E(e) {
                    _(!1), null == t || t(e)
                }
                let I = e => (0, s.jsxs)("div", {
                    className: d.customGiftHeader,
                    children: [(0, s.jsxs)("div", {
                        className: d.customGiftHeaderText,
                        children: [(0, s.jsx)(i.Text, {
                            variant: "text-md/bold",
                            children: o.default.Messages.GIFT_SELECT_SOUND
                        }), (0, s.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            children: o.default.Messages.GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION
                        })]
                    }), (0, s.jsx)("div", {
                        className: d.searchAndSound,
                        children: e
                    })]
                });
                return (0, s.jsx)(i.Popout, {
                    shouldShow: m,
                    position: "bottom",
                    align: "left",
                    onRequestClose: () => _(!1),
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, s.jsx)(i.Dialog, {
                            children: (0, s.jsx)(c.default, {
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
                    children: () => (0, s.jsx)(i.Clickable, {
                        className: d.sound,
                        onClick: () => _(!0),
                        children: null == n ? (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(l.SoundboardIcon, {
                                color: a.default.colors.WHITE,
                                className: d.soundIcon,
                                width: 14,
                                height: 14
                            }), (0, s.jsx)(i.Text, {
                                className: d.text,
                                variant: "text-sm/semibold",
                                children: o.default.Messages.GIFT_SELECT_SOUND
                            })]
                        }) : (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(i.Text, {
                                className: d.textSelected,
                                variant: "text-sm/semibold",
                                children: n.emojiName
                            }), (0, s.jsx)(i.Text, {
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
                return (0, s.jsx)("div", {
                    className: d.container,
                    children: (0, s.jsx)(m, {
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
            var s = n("37983"),
                r = n("884691"),
                a = n("414456"),
                l = n.n(a),
                i = n("907002"),
                u = n("77078"),
                c = n("913144"),
                o = n("474293"),
                d = n("958706"),
                f = n("782340"),
                m = n("505436");
            let _ = {
                tension: 800,
                friction: 24
            };
            var E = function(e) {
                var t;
                let {
                    tabIndex: n,
                    className: a,
                    renderButtonContents: E,
                    active: I,
                    onClick: p,
                    "aria-controls": N,
                    focusProps: S
                } = e, [T, P] = r.useState(!1), [C, A] = r.useState(50), O = T || I, h = (0, o.getClass)(m, "emojiButton", O ? "Hovered" : "Normal");
                let R = (t = C, {
                        "--custom-emoji-sprite-size": "".concat(24, "px"),
                        "--custom-emoji-sprite-row": Math.floor(t / 20),
                        "--custom-emoji-sprite-col": t % 20
                    }),
                    g = r.useCallback(() => {
                        if (!O) P(!0), A(Math.floor(77 * Math.random())), c.default.dispatch({
                            type: "EMOJI_INTERACTION_INITIATED",
                            interaction: d.EmojiInteractionPoint.EmojiButtonMouseEntered
                        })
                    }, [O, P, A]),
                    M = r.useCallback(() => {
                        P(!1)
                    }, [P]),
                    v = r.useCallback(() => {
                        c.default.dispatch({
                            type: "EMOJI_INTERACTION_INITIATED",
                            interaction: d.EmojiInteractionPoint.EmojiButtonFocused
                        })
                    }, []);
                return (0, s.jsx)(u.Button, {
                    look: u.Button.Looks.BLANK,
                    size: u.Button.Sizes.NONE,
                    tabIndex: n,
                    className: l(h, a),
                    onMouseEnter: g,
                    onMouseOver: g,
                    onMouseLeave: M,
                    onFocus: v,
                    onClick: p,
                    "aria-label": f.default.Messages.SELECT_EMOJI,
                    "aria-controls": N,
                    "aria-expanded": I,
                    "aria-haspopup": "dialog",
                    focusProps: S,
                    children: null != E ? E() : (0, s.jsx)(i.Spring, {
                        config: _,
                        to: {
                            value: O ? 1 : 0
                        },
                        children: e => {
                            let {
                                value: t
                            } = e;
                            return (0, s.jsxs)(i.animated.div, {
                                className: m.spriteContainer,
                                style: {
                                    ...R,
                                    transform: t.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")"))
                                },
                                children: [(0, s.jsx)("div", {
                                    className: l(m.sprite, m.spriteColored, O ? m.active : m.inactive)
                                }), (0, s.jsx)("div", {
                                    className: l(m.sprite, m.spriteGreyscale, O ? m.inactive : m.active)
                                })]
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
            var s = n("37983");
            n("884691");
            var r = n("469563"),
                a = n("763377"),
                l = n("75196"),
                i = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...i
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, l.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            className: a,
                            fill: r,
                            d: "M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"
                        })
                    })
                }, a.CircleQuestionIcon, void 0, {
                    size: 24
                })
        },
        548775: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("469563"),
                a = n("645156"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        className: a,
                        foreground: l
                    } = e;
                    return (0, s.jsx)("svg", {
                        className: a,
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, s.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, s.jsx)("rect", {
                                width: "16",
                                height: "16"
                            }), (0, s.jsx)("polygon", {
                                className: l,
                                fill: r,
                                points: "12 2.32 10.513 2 4 13.68 5.487 14"
                            })]
                        })
                    })
                }, a.SlashIcon, void 0, {
                    size: 16
                })
        },
        575209: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getCurrencyFullName: function() {
                    return r
                }
            });
            var s = n("782340");

            function r(e) {
                switch (e) {
                    case "brl":
                        return s.default.Messages.BRL_NAME;
                    case "pln":
                        return s.default.Messages.PLN_NAME;
                    case "try":
                        return s.default.Messages.TRY_NAME;
                    case "usd":
                        return s.default.Messages.USD_NAME;
                    case "aud":
                        return s.default.Messages.AUD_NAME;
                    case "pen":
                        return s.default.Messages.PEN_NAME;
                    case "php":
                        return s.default.Messages.PHP_NAME;
                    case "ars":
                        return s.default.Messages.ARS_NAME;
                    case "cop":
                        return s.default.Messages.COP_NAME;
                    case "clr":
                        return s.default.Messages.CLR_NAME;
                    case "jpy":
                        return s.default.Messages.JPY_NAME;
                    case "idr":
                        return s.default.Messages.IDR_NAME;
                    case "vnd":
                        return s.default.Messages.VND_NAME;
                    case "thb":
                        return s.default.Messages.THB_NAME;
                    case "myr":
                        return s.default.Messages.MYR_NAME;
                    case "krw":
                        return s.default.Messages.KRW_NAME;
                    case "mxn":
                        return s.default.Messages.MXN_NAME;
                    case "bgn":
                        return s.default.Messages.BGN_NAME;
                    case "czk":
                        return s.default.Messages.CZK_NAME;
                    case "dkk":
                        return s.default.Messages.DKK_NAME;
                    case "huf":
                        return s.default.Messages.HUF_NAME;
                    case "ron":
                        return s.default.Messages.RON_NAME;
                    case "sek":
                        return s.default.Messages.SEK_NAME;
                    case "eur":
                        return s.default.Messages.EUR_NAME;
                    default:
                        return ""
                }
            }
        }
    }
]);