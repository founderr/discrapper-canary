(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [86611], {
        495068: (e, t, n) => {
            e.exports = n.p + "3255f24f5123fd8769d97157e48cb796.svg"
        },
        377236: (e, t, n) => {
            e.exports = n.p + "6cf42ec75591247991e68cfaf7801a29.svg"
        },
        246380: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var r = n(667294),
                a = n(22176);

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        i(e, t, n[t])
                    }))
                }
                return e
            }

            function s(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            const o = function(e, t, n, i, o) {
                var u = (0, r.useRef)(!1);
                (0, r.useEffect)((function() {
                    if (t && !u.current) {
                        u.current = !0;
                        var r = setTimeout((function() {
                            var t = new Error("".concat(e, " is taking too long to load."));
                            a.Z.setExtra({
                                loadingState: i,
                                loadingTimeSeconds: n
                            });
                            a.Z.captureException(t, s(l({}, o), {
                                tags: l({}, null == o ? void 0 : o.tags)
                            }))
                        }), 1e3 * n);
                        return function() {
                            clearTimeout(r)
                        }
                    }
                }), [t, n])
            }
        },
        123435: (e, t, n) => {
            "use strict";
            n.d(t, {
                c8: () => g,
                Vq: () => S,
                oQ: () => I
            });
            var r = n(785893),
                a = (n(667294), n(294184)),
                i = n.n(a),
                l = n(795308),
                s = n(575945),
                o = n(882723),
                u = n(74535),
                c = n(818417),
                f = n(348592),
                d = n(387099),
                p = n(2590),
                E = n(473708),
                _ = n(14373),
                h = n.n(_),
                y = n(495068),
                m = n.n(y),
                v = n(377236),
                b = n.n(v);

            function O(e) {
                var t = e.className,
                    n = (0, u.ZP)(),
                    a = (0, s.wj)(n) ? m() : b();
                return (0, r.jsxs)("div", {
                    className: i()(h().container, t),
                    children: [(0, r.jsx)(o.Heading, {
                        className: h().header,
                        variant: "heading-xl/semibold",
                        children: E.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER
                    }), (0, r.jsxs)(o.Text, {
                        className: h().description,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: [(0, r.jsx)("p", {
                            children: E.Z.Messages.REGION_BLOCKED_PAYMENTS_BODY
                        }), (0, r.jsx)("p", {
                            children: E.Z.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
                                helpdeskArticle: f.Z.getArticleURL(p.BhN.BLOCKED_PAYMENTS)
                            })
                        })]
                    }), (0, r.jsx)("img", {
                        src: a,
                        className: h().splashImage,
                        alt: "Blocked Payments"
                    })]
                })
            }

            function g() {
                return (0, r.jsx)(O, {
                    className: h().settings
                })
            }

            function S() {
                return (0, r.jsx)(O, {
                    className: h().modal
                })
            }

            function I(e) {
                var t = e.className;
                return (0, d.Q)() ? (0, r.jsxs)(o.Card, {
                    className: i()(h().blockedPaymentsWarning, t),
                    type: o.Card.Types.CUSTOM,
                    children: [(0, r.jsx)(c.Z, {
                        className: h().blockedPaymentsWarningIcon,
                        color: l.Z.unsafe_rawColors.YELLOW_300.css
                    }), (0, r.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        children: E.Z.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
                            helpdeskArticle: f.Z.getArticleURL(p.BhN.BLOCKED_PAYMENTS)
                        })
                    })]
                }) : null
            }
        },
        186451: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n(667294),
                a = n(744564);

            function i(e) {
                var t = (0, r.useRef)(e);
                (0, r.useEffect)((function() {
                    t.current = e
                }), [e]);
                (0, r.useEffect)((function() {
                    if (__OVERLAY__) {
                        var e = function(e) {
                            e.locked && t.current()
                        };
                        a.Z.subscribe("OVERLAY_SET_INPUT_LOCKED", e);
                        return function() {
                            a.Z.unsubscribe("OVERLAY_SET_INPUT_LOCKED", e)
                        }
                    }
                }), [])
            }
        },
        586611: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                PaymentModal: () => Q,
                PaymentPredicateStep: () => q
            });
            var r = n(785893),
                a = n(667294),
                i = n(294184),
                l = n.n(i),
                s = n(685269),
                o = n(318715),
                u = n(882723),
                c = n(595138),
                f = n(246380),
                d = n(123435),
                p = n(186451),
                E = n(818103),
                _ = n(817584),
                h = n(785531),
                y = n(83471),
                m = n(909365);
            var v = n(111090),
                b = n(551778),
                O = n(151367),
                g = n(652591),
                S = n(644144),
                I = n(116094),
                T = n(782786),
                P = n(632826),
                M = n(510142),
                N = n(441143),
                A = n.n(N),
                R = n(777315),
                C = n(621270),
                L = n(717035),
                j = n(882211),
                k = n(301162),
                w = n(203600),
                x = n(520453),
                G = n(452726),
                Z = n.n(G);
            var D = n(28648),
                U = n(149096),
                W = n(2590),
                Y = n(473708),
                B = n(786958),
                F = n.n(B);

            function H(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function K(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function V(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        K(e, t, n[t])
                    }))
                }
                return e
            }

            function X(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function z(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [],
                            l = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            a = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return H(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return H(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Q(e) {
                var t = e.analyticsLocations,
                    n = e.analyticsLocation,
                    i = e.analyticsObject,
                    o = e.analyticsSourceLocation,
                    c = e.analyticsSubscriptionType,
                    f = void 0 === c ? W.NYc.PREMIUM : c,
                    d = e.onComplete,
                    E = e.transitionState,
                    _ = e.initialPlanId,
                    O = e.giftMessage,
                    M = e.subscriptionTier,
                    N = e.onClose,
                    G = e.trialId,
                    D = e.isGift,
                    B = void 0 !== D && D,
                    H = e.trialFooterMessageOverride,
                    Q = e.reviewWarningMessage,
                    q = e.planGroup,
                    $ = void 0 === q ? w.Y1 : q,
                    J = e.openInvoiceId,
                    ee = e.onSubscriptionConfirmation,
                    te = e.renderPurchaseConfirmation,
                    ne = e.postSuccessGuild,
                    re = e.followupSKUInfo,
                    ae = e.renderHeader,
                    ie = e.applicationId,
                    le = e.guildId,
                    se = e.referralTrialOfferId,
                    oe = e.skuId,
                    ue = e.shakeWhilePurchasing,
                    ce = void 0 !== ue && ue,
                    fe = e.isLargeModal,
                    de = void 0 !== fe && fe,
                    pe = e.hideShadow,
                    Ee = void 0 !== pe && pe,
                    _e = (0,
                        T.usePaymentContext)(),
                    he = _e.activitySessionId,
                    ye = _e.purchaseState,
                    me = _e.setPurchaseState,
                    ve = _e.selectedSkuId,
                    be = _e.setSelectedSkuId,
                    Oe = _e.selectedPlan,
                    ge = _e.setSelectedPlanId,
                    Se = _e.setStep,
                    Ie = _e.setPurchaseError,
                    Te = _e.paymentAuthenticationState,
                    Pe = _e.step,
                    Me = _e.contextMetadata,
                    Ne = _e.purchaseTokenAuthState,
                    Ae = _e.activeSubscription,
                    Re = _e.priceOptions,
                    Ce = _e.hasPaymentSources,
                    Le = _e.purchaseType,
                    je = _e.giftRecipient,
                    ke = z(a.useState({
                        load_id: Me.loadId,
                        payment_type: W.Zuq[Le],
                        location: null != n ? n : i,
                        source: o,
                        subscription_type: f,
                        subscription_plan_id: null == Oe ? void 0 : Oe.id,
                        is_gift: B,
                        eligible_for_trial: null != G,
                        location_stack: t,
                        sku_id: oe,
                        application_id: ie,
                        guild_id: le,
                        payment_modal_version: "v1",
                        activity_session_id: he
                    }), 2),
                    we = ke[0],
                    xe = ke[1],
                    Ge = z(a.useState((0, S.a8)(je) ? Y.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : void 0), 2),
                    Ze = Ge[0],
                    De = Ge[1];
                a.useEffect((function() {
                    xe((function(e) {
                        var t = null != Oe ? (0, I.aS)(Oe.id, !1, B, Re) : void 0;
                        return X(V({}, e), {
                            subscription_plan_id: null == Oe ? void 0 : Oe.id,
                            price: null == t ? void 0 : t.amount,
                            regular_price: null == Oe ? void 0 : Oe.price,
                            currency: Re.currency,
                            sku_id: ve
                        })
                    }))
                }), [Oe, ve, B, Re]);
                a.useEffect((function() {
                    g.default.track(W.rMx.PAYMENT_FLOW_STARTED, X(V({}, we), {
                        has_saved_payment_source: Ce
                    }))
                }), []);
                a.useEffect((function() {
                    ge(_);
                    if (null != oe) be(oe);
                    else if (null != _) {
                        var e;
                        be(null === (e = b.Z.get(_)) || void 0 === e ? void 0 : e.skuId)
                    }
                }), [ge, be, _, oe]);
                var Ue = (0, s.Z)((function() {
                        return Date.now()
                    }), [Pe]),
                    We = a.useCallback((function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.trackedFromStep,
                            r = t.analyticsDataOverride,
                            a = t.fulfillment;
                        e === y.h8.CONFIRM && (null == d || d(a));
                        Se(e);
                        Ie(null);
                        var i = null != n ? n : Pe,
                            l = Date.now();
                        null !== i ? g.default.track(W.rMx.PAYMENT_FLOW_STEP, X(V({}, we, r), {
                            from_step: i,
                            to_step: e === y.h8.ADD_PAYMENT_STEPS ? y.h8.PAYMENT_TYPE : e,
                            step_duration_ms: l - Ue,
                            flow_duration_ms: l - Me.startTime
                        })) : g.default.track(W.rMx.PAYMENT_FLOW_LOADED, X(V({}, we), {
                            initial_step: e,
                            has_saved_payment_source: Ce
                        }))
                    }), [we, Me.startTime, d, Ie, Se, Pe, Ue, Ce]),
                    Ye = a.useMemo((function() {
                        return function() {
                            return null == N ? void 0 : N(ye === P.A.COMPLETED)
                        }
                    }), [N, ye]);
                (0, h.bp)(Pe, Te, We);
                (0, y.dZ)(Pe, ye, me);
                ! function(e, t, n) {
                    a.useEffect((function() {
                        null != e && e !== y.h8.AWAITING_PURCHASE_TOKEN_AUTH && t === m.I.PENDING ? n(y.h8.AWAITING_PURCHASE_TOKEN_AUTH) : e === y.h8.AWAITING_PURCHASE_TOKEN_AUTH && t === m.I.SUCCESS && n(y.h8.REVIEW)
                    }), [e, t, n])
                }(Pe, Ne, We);
                (0, p.Z)(Ye);
                (0, v.w)(Ae, (function() {
                    return N(!1)
                }), B);
                (0, h.D6)(Te);
                var Be = {
                        initialPlanId: _,
                        giftMessage: O,
                        customGiftMessage: Ze,
                        setCustomGiftMessage: De,
                        subscriptionTier: M,
                        handleStepChange: We,
                        handleClose: Ye,
                        analyticsData: we,
                        setAnalyticsData: xe,
                        trialId: G,
                        trialFooterMessageOverride: H,
                        reviewWarningMessage: Q,
                        planGroup: $,
                        openInvoiceId: J,
                        analyticsLocation: n,
                        onSubscriptionConfirmation: ee,
                        renderPurchaseConfirmation: te,
                        postSuccessGuild: ne,
                        followupSKUInfo: re,
                        referralTrialOfferId: se
                    },
                    Fe = function(e) {
                        var t = e.isGift,
                            n = e.renderHeader,
                            i = e.referralTrialOfferId,
                            l = e.handleClose,
                            s = (0,
                                T.usePaymentContext)(),
                            o = s.selectedSkuId,
                            c = s.step,
                            f = s.selectedPlan,
                            d = s.purchaseState,
                            p = s.selectedGiftStyle,
                            E = s.purchaseType,
                            _ = s.giftRecipient,
                            h = C.ZP.useExperiment({
                                location: "cbdb8c_1"
                            }, {
                                autoTrackExposure: !1
                            }).enabled,
                            m = (0, C.rK)();
                        a.useEffect((function() {
                            m && t && C.ZP.trackExposure({
                                location: "cbdb8c_2"
                            })
                        }), [m, t]);
                        var v = h && m && t && o === w.Si.TIER_2,
                            b = (v || (0, S.a8)(_)) && c === y.h8.CONFIRM && null != p,
                            O = null != n && null != c,
                            g = c !== y.h8.SKU_SELECT && null != o,
                            I = (0, L.N)(i),
                            P = !t && null != I && null != o && w.nG[I.trial_id].skus.includes(o);
                        return a.useMemo((function() {
                            if (null != c) {
                                var e = null;
                                if (b) e = (0, r.jsxs)("div", {
                                    className: Z().container,
                                    children: [(0, r.jsx)(j.Z, {
                                        giftStyle: p,
                                        className: Z().seasonalGiftBoxHeaderIcon
                                    }), (0, r.jsx)(u.ModalCloseButton, {
                                        onClick: l,
                                        className: Z().closeButton
                                    })]
                                });
                                else if (O) e = n(null != f ? f : null, l, c);
                                else if (E === x.GZ.ONE_TIME) e = (0, r.jsx)(R.t, {
                                    step: c,
                                    onClose: l
                                });
                                else if (g) {
                                    A()(o in w.y7, "invalid sku id: ".concat(o));
                                    e = (0, r.jsx)(k.Z, {
                                        currentStep: null != c ? c : void 0,
                                        purchaseState: d,
                                        premiumType: w.y7[o],
                                        onClose: l,
                                        useWinterTheme: v,
                                        showTrialBadge: P,
                                        giftRecipient: _
                                    })
                                }
                                return e
                            }
                        }), [v, p, l, d, n, f, o, c, P, b, g, O, E, _])
                    }({
                        isGift: B,
                        renderHeader: ae,
                        referralTrialOfferId: se,
                        handleClose: Ye
                    });
                return (0, r.jsx)(u.Shaker, {
                    className: F().shaker,
                    isShaking: ce && ye === P.A.PURCHASING,
                    intensity: 2,
                    children: (0, r.jsx)(u.ModalRoot, {
                        className: l()(F().root, K({}, F().withHeader, null != Fe)),
                        transitionState: E,
                        hideShadow: Ee,
                        size: de ? u.ModalSize.LARGE : u.ModalSize.SMALL,
                        children: (0, r.jsx)(U.ZP, V({
                            header: Fe,
                            isLargeModal: de
                        }, Be))
                    })
                })
            }

            function q(e) {
                var t = e.subscriptionTier,
                    n = e.initialPlanId,
                    i = e.handleStepChange,
                    l = e.referralTrialOfferId,
                    s = (0, T.usePaymentContext)(),
                    u = s.activeSubscription,
                    p = s.blockedPayments,
                    h = s.hasFetchedSubscriptions,
                    m = s.hasFetchedSubscriptionPlans,
                    v = s.currencyLoading,
                    b = s.selectedSkuId,
                    g = s.setSelectedPlanId,
                    S = s.isGift,
                    I = s.defaultPlanId,
                    P = (0, M.Z)({
                        isGift: S,
                        skuId: b,
                        referralTrialOfferId: l
                    }),
                    N = _.k.getCurrentConfig({
                        location: "055ec5_1"
                    }, {
                        autoTrackExposure: !1
                    }).defaultToMonthlyPlan,
                    A = z(a.useState(!0), 2),
                    R = A[0],
                    C = A[1],
                    L = (0,
                        o.ZP)([O.Z], (function() {
                        return O.Z.applicationIdsFetched.has(w.RQ)
                    }));
                a.useEffect((function() {
                    C(!h || !m || v)
                }), [v, m, h]);
                (0, f.Z)("Payment Modal", R, 5, {
                    hasFetchedSubscriptions: h,
                    hasFetchedSubscriptionPlans: m,
                    currencyLoading: v
                }, {
                    tags: {
                        app_context: "billing"
                    }
                });
                a.useEffect((function() {
                    L || (0, c.yD)(w.RQ);
                    if (!R && !p)
                        if (null != n) i(y.h8.REVIEW);
                        else {
                            var e = (0, E.Wt)({
                                isTrial: P,
                                isGift: S,
                                selectedSkuId: b
                            });
                            if (e.enabled) {
                                var r = (0, E.D3)(e, b, u, I);
                                g(r);
                                i(y.h8.REVIEW)
                            } else i(null != t ? y.h8.PLAN_SELECT : y.h8.SKU_SELECT)
                        }
                }), [u, p, L, n, R, i, t, b, g, N, P, I, S]);
                return R ? (0, r.jsx)(D.Z, {}) : p ? (0, r.jsx)(d.Vq, {}) : null
            }
        },
        28648: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                a = (n(667294), n(882723)),
                i = n(24193),
                l = n.n(i);

            function s() {
                return (0, r.jsx)(a.Spinner, {
                    className: l().spinner
                })
            }
        },
        510142: (e, t, n) => {
            "use strict";
            n.d(t, {
                T: () => i,
                Z: () => l
            });
            var r = n(717035),
                a = n(203600);

            function i(e) {
                var t = e.userTrialOffer,
                    n = e.isGift,
                    r = e.skuId;
                return !n && null != t && a.nG[t.trial_id].skus.includes(r)
            }

            function l(e) {
                var t = e.isGift,
                    n = e.skuId,
                    i = e.referralTrialOfferId,
                    l = (0, r.N)(i);
                return !t && null != l && a.nG[l.trial_id].skus.includes(n)
            }
        },
        470387: (e, t, n) => {
            "use strict";
            n.d(t, {
                R: () => r,
                Z: () => i
            });
            var r, a = n(260561);
            ! function(e) {
                e[e.NONE = 0] = "NONE";
                e[e.BROWSER_AUTOFILL = 1] = "BROWSER_AUTOFILL";
                e[e.MERGE_PLAN_SELECT_TO_REVIEW = 2] = "MERGE_PLAN_SELECT_TO_REVIEW"
            }(r || (r = {}));
            const i = (0, a.B)({
                id: "2023-08_checkout_v2_parent",
                label: "Checkout V2 Parent",
                kind: "user",
                defaultConfig: {
                    experiment: r.NONE
                },
                treatments: [{
                    id: 1,
                    label: "Browser Autofill",
                    config: {
                        experiment: r.BROWSER_AUTOFILL
                    }
                }, {
                    id: 2,
                    label: "Merge Plan Select to Review",
                    config: {
                        experiment: r.MERGE_PLAN_SELECT_TO_REVIEW
                    }
                }]
            })
        },
        818103: (e, t, n) => {
            "use strict";
            n.d(t, {
                Wt: () => o,
                $g: () => u,
                D3: () => c
            });
            var r = n(260561),
                a = n(116094),
                i = n(470387),
                l = n(203600),
                s = (0, r.B)({
                    id: "2023-07_move_plan_select_to_review",
                    label: "Move plan select to review step",
                    kind: "user",
                    defaultConfig: {
                        enabled: !1,
                        defaultToMonthlyPlan: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enabled with monthly default",
                        config: {
                            enabled: !0,
                            defaultToMonthlyPlan: !0
                        }
                    }, {
                        id: 2,
                        label: "Enabled with yearly default",
                        config: {
                            enabled: !0,
                            defaultToMonthlyPlan: !1
                        }
                    }]
                });

            function o(e) {
                var t = e.isTrial,
                    n = e.isGift,
                    r = e.selectedSkuId;
                if (t || n || null == r || !l.YQ.includes(r)) return {
                    enabled: !1,
                    defaultToMonthlyPlan: !1
                };
                if (i.Z.getCurrentConfig({
                        location: "fa931a_1"
                    }).experiment === i.R.MERGE_PLAN_SELECT_TO_REVIEW) {
                    return s.getCurrentConfig({
                        location: "fa931a_2"
                    }, {
                        autoTrackExposure: !0
                    })
                }
                return {
                    enabled: !1,
                    defaultToMonthlyPlan: !1
                }
            }

            function u(e, t, n) {
                var r = !1;
                if (e && null != t) {
                    null == t.invoiceItems.find((function(e) {
                        return e.subscriptionPlanId === n.id
                    })) && (r = !0)
                }
                return r
            }

            function c(e, t, n, r) {
                var i = e.defaultToMonthlyPlan,
                    s = null != n ? (0, a.Af)(n) : null,
                    o = i ? l.IW[t] : l.mn[t],
                    u = null != r ? r : o;
                null != s ? u === s.planId && u === l.IW[t] ? u = l.mn[t] : u === s.planId && u === l.mn[t] ? u = l.IW[t] : s.planId !== l.Xh.PREMIUM_YEAR_TIER_0 && s.planId !== l.Xh.PREMIUM_YEAR_TIER_1 || u !== l.Xh.PREMIUM_MONTH_TIER_2 || (u = l.Xh.PREMIUM_YEAR_TIER_2) : u === l.Xh.PREMIUM_YEAR_TIER_1 && (u = l.Xh.PREMIUM_MONTH_TIER_1);
                return u
            }
        },
        111090: (e, t, n) => {
            "use strict";
            n.d(t, {
                w: () => f,
                H: () => p
            });
            var r = n(667294),
                a = n(202351),
                i = n(105783),
                l = n(551778),
                s = n(151367),
                o = n(116094),
                u = n(520453),
                c = n(473708);

            function f(e, t, n) {
                r.useEffect((function() {
                    if (null != e && e.isPurchasedExternally && null != e.paymentGateway && !n) {
                        i.Z.show({
                            title: c.Z.Messages.BILLING_EXTERNAL_HEADER.format({
                                paymentGatewayName: u.Vz[e.paymentGateway]
                            }),
                            body: c.Z.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
                                paymentGatewayName: u.Vz[e.paymentGateway],
                                subscriptionManagementLink: (0, o.JE)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                            }),
                            confirmText: c.Z.Messages.OKAY
                        });
                        t()
                    }
                }), [e])
            }
            var d = [];

            function p(e, t) {
                var n = (0, a.e7)([l.Z], (function() {
                        return null != e ? l.Z.get(e) : null
                    })),
                    i = (0, a.e7)([s.Z], (function() {
                        var e;
                        return null != n && null !== (e = s.Z.getForSku(n.skuId)) && void 0 !== e ? e : d
                    })),
                    u = r.useMemo((function() {
                        return Array.from(i).filter((function(e) {
                            var t = e.parentId,
                                n = e.consumed;
                            return null != t && !n
                        }))
                    }), [i]);
                return {
                    hasEntitlements: !t && null != n && null != u && u.length >= o.ZP.getIntervalMonths(n.interval, n.intervalCount),
                    entitlements: u
                }
            }
        },
        685269: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n(667294);
            var a = [];

            function i(e, t) {
                var n = (0, r.useRef)(),
                    i = (0, r.useRef)(a);
                if (i.current === a) {
                    n.current = e();
                    i.current = t
                } else if (! function(e, t) {
                        if (e.length !== t.length) return !1;
                        for (var n = 0; n < t.length && n < e.length; n++)
                            if (!Object.is(e[n], t[n])) return !1;
                        return !0
                    }(t, i.current)) {
                    n.current = e();
                    i.current = t
                }
                return n.current
            }
        }
    }
]);