"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [70301], {
        246380: (e, n, t) => {
            t.d(n, {
                Z: () => o
            });
            var r = t(667294),
                i = t(22176);

            function a(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function s(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        a(e, n, t[n])
                    }))
                }
                return e
            }

            function l(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }
            const o = function(e, n, t, a, o) {
                var c = (0, r.useRef)(!1);
                (0, r.useEffect)((function() {
                    if (n && !c.current) {
                        c.current = !0;
                        var r = setTimeout((function() {
                            var n = new Error("".concat(e, " is taking too long to load."));
                            i.Z.setExtra({
                                loadingState: a,
                                loadingTimeSeconds: t
                            });
                            i.Z.captureException(n, l(s({}, o), {
                                tags: s({}, null == o ? void 0 : o.tags)
                            }))
                        }), 1e3 * t);
                        return function() {
                            clearTimeout(r)
                        }
                    }
                }), [n, t])
            }
        },
        186451: (e, n, t) => {
            t.d(n, {
                Z: () => a
            });
            var r = t(667294),
                i = t(744564);

            function a(e) {
                var n = (0, r.useRef)(e);
                (0, r.useEffect)((function() {
                    n.current = e
                }), [e]);
                (0, r.useEffect)((function() {
                    if (__OVERLAY__) {
                        var e = function(e) {
                            e.locked && n.current()
                        };
                        i.Z.subscribe("OVERLAY_SET_INPUT_LOCKED", e);
                        return function() {
                            i.Z.unsubscribe("OVERLAY_SET_INPUT_LOCKED", e)
                        }
                    }
                }), [])
            }
        },
        586611: (e, n, t) => {
            t.r(n);
            t.d(n, {
                PaymentModal: () => Q,
                PaymentPredicateStep: () => q
            });
            var r = t(785893),
                i = t(667294),
                a = t(294184),
                s = t.n(a),
                l = t(685269),
                o = t(318715),
                c = t(882723),
                u = t(595138),
                d = t(246380),
                p = t(123435),
                f = t(186451),
                m = t(818103),
                S = t(817584),
                y = t(785531),
                h = t(83471),
                I = t(909365);
            var E = t(111090),
                P = t(551778),
                v = t(151367),
                T = t(652591),
                b = t(644144),
                _ = t(694329),
                g = t(782786),
                O = t(632826),
                A = t(510142),
                j = t(441143),
                x = t.n(j),
                C = t(777315),
                M = t(621270),
                N = t(717035),
                L = t(882211),
                w = t(301162),
                R = t(203600),
                Z = t(520453),
                k = t(881897),
                G = t.n(k);
            var D = t(28648),
                U = t(149096),
                F = t(2590),
                W = t(473708),
                H = t(175085),
                B = t.n(H);

            function Y(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function K(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function V(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        K(e, n, t[n])
                    }))
                }
                return e
            }

            function $(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function z(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, a = [],
                            s = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(s = (r = t.next()).done); s = !0) {
                                a.push(r.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                s || null == t.return || t.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Y(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Y(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Q(e) {
                var n = e.analyticsLocations,
                    t = e.analyticsLocation,
                    a = e.analyticsObject,
                    o = e.analyticsSourceLocation,
                    u = e.analyticsSubscriptionType,
                    d = void 0 === u ? F.NYc.PREMIUM : u,
                    p = e.onComplete,
                    m = e.transitionState,
                    S = e.initialPlanId,
                    v = e.giftMessage,
                    A = e.subscriptionTier,
                    j = e.onClose,
                    k = e.trialId,
                    D = e.isGift,
                    H = void 0 !== D && D,
                    Y = e.trialFooterMessageOverride,
                    Q = e.reviewWarningMessage,
                    q = e.planGroup,
                    J = void 0 === q ? R.Y1 : q,
                    X = e.openInvoiceId,
                    ee = e.onSubscriptionConfirmation,
                    ne = e.renderPurchaseConfirmation,
                    te = e.postSuccessGuild,
                    re = e.followupSKUInfo,
                    ie = e.renderHeader,
                    ae = e.applicationId,
                    se = e.guildId,
                    le = e.referralTrialOfferId,
                    oe = e.skuId,
                    ce = e.shakeWhilePurchasing,
                    ue = void 0 !== ce && ce,
                    de = e.isLargeModal,
                    pe = void 0 !== de && de,
                    fe = e.hideShadow,
                    me = void 0 !== fe && fe,
                    Se = (0,
                        g.usePaymentContext)(),
                    ye = Se.activitySessionId,
                    he = Se.purchaseState,
                    Ie = Se.setPurchaseState,
                    Ee = Se.selectedSkuId,
                    Pe = Se.setSelectedSkuId,
                    ve = Se.selectedPlan,
                    Te = Se.setSelectedPlanId,
                    be = Se.setStep,
                    _e = Se.setPurchaseError,
                    ge = Se.paymentAuthenticationState,
                    Oe = Se.step,
                    Ae = Se.contextMetadata,
                    je = Se.purchaseTokenAuthState,
                    xe = Se.activeSubscription,
                    Ce = Se.priceOptions,
                    Me = Se.hasPaymentSources,
                    Ne = Se.purchaseType,
                    Le = Se.giftRecipient,
                    we = z(i.useState({
                        load_id: Ae.loadId,
                        payment_type: F.Zuq[Ne],
                        location: null != t ? t : a,
                        source: o,
                        subscription_type: d,
                        subscription_plan_id: null == ve ? void 0 : ve.id,
                        is_gift: H,
                        eligible_for_trial: null != k,
                        location_stack: n,
                        sku_id: oe,
                        application_id: ae,
                        guild_id: se,
                        payment_modal_version: "v1",
                        activity_session_id: ye
                    }), 2),
                    Re = we[0],
                    Ze = we[1],
                    ke = z(i.useState((0, b.a8)(Le) ? W.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : void 0), 2),
                    Ge = ke[0],
                    De = ke[1];
                i.useEffect((function() {
                    Ze((function(e) {
                        var n = null != ve ? (0, _.aS)(ve.id, !1, H, Ce) : void 0;
                        return $(V({}, e), {
                            subscription_plan_id: null == ve ? void 0 : ve.id,
                            price: null == n ? void 0 : n.amount,
                            regular_price: null == ve ? void 0 : ve.price,
                            currency: Ce.currency,
                            sku_id: Ee
                        })
                    }))
                }), [ve, Ee, H, Ce]);
                i.useEffect((function() {
                    T.default.track(F.rMx.PAYMENT_FLOW_STARTED, $(V({}, Re), {
                        has_saved_payment_source: Me
                    }))
                }), []);
                i.useEffect((function() {
                    Te(S);
                    if (null != oe) Pe(oe);
                    else if (null != S) {
                        var e;
                        Pe(null === (e = P.Z.get(S)) || void 0 === e ? void 0 : e.skuId)
                    }
                }), [Te, Pe, S, oe]);
                var Ue = (0, l.Z)((function() {
                        return Date.now()
                    }), [Oe]),
                    Fe = i.useCallback((function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            t = n.trackedFromStep,
                            r = n.analyticsDataOverride,
                            i = n.fulfillment;
                        e === h.h8.CONFIRM && (null == p || p(i));
                        be(e);
                        _e(null);
                        var a = null != t ? t : Oe,
                            s = Date.now();
                        null !== a ? T.default.track(F.rMx.PAYMENT_FLOW_STEP, $(V({}, Re, r), {
                            from_step: a,
                            to_step: e === h.h8.ADD_PAYMENT_STEPS ? h.h8.PAYMENT_TYPE : e,
                            step_duration_ms: s - Ue,
                            flow_duration_ms: s - Ae.startTime
                        })) : T.default.track(F.rMx.PAYMENT_FLOW_LOADED, $(V({}, Re), {
                            initial_step: e,
                            has_saved_payment_source: Me
                        }))
                    }), [Re, Ae.startTime, p, _e, be, Oe, Ue, Me]),
                    We = i.useMemo((function() {
                        return function() {
                            return null == j ? void 0 : j(he === O.A.COMPLETED)
                        }
                    }), [j, he]);
                (0, y.bp)(Oe, ge, Fe);
                (0, h.dZ)(Oe, he, Ie);
                ! function(e, n, t) {
                    i.useEffect((function() {
                        null != e && e !== h.h8.AWAITING_PURCHASE_TOKEN_AUTH && n === I.I.PENDING ? t(h.h8.AWAITING_PURCHASE_TOKEN_AUTH) : e === h.h8.AWAITING_PURCHASE_TOKEN_AUTH && n === I.I.SUCCESS && t(h.h8.REVIEW)
                    }), [e, n, t])
                }(Oe, je, Fe);
                (0, f.Z)(We);
                (0, E.w)(xe, (function() {
                    return j(!1)
                }), H);
                (0, y.D6)(ge);
                var He = {
                        initialPlanId: S,
                        giftMessage: v,
                        customGiftMessage: Ge,
                        setCustomGiftMessage: De,
                        subscriptionTier: A,
                        handleStepChange: Fe,
                        handleClose: We,
                        analyticsData: Re,
                        setAnalyticsData: Ze,
                        trialId: k,
                        trialFooterMessageOverride: Y,
                        reviewWarningMessage: Q,
                        planGroup: J,
                        openInvoiceId: X,
                        analyticsLocation: t,
                        onSubscriptionConfirmation: ee,
                        renderPurchaseConfirmation: ne,
                        postSuccessGuild: te,
                        followupSKUInfo: re,
                        referralTrialOfferId: le
                    },
                    Be = function(e) {
                        var n = e.isGift,
                            t = e.renderHeader,
                            a = e.referralTrialOfferId,
                            s = e.handleClose,
                            l = (0,
                                g.usePaymentContext)(),
                            o = l.selectedSkuId,
                            u = l.step,
                            d = l.selectedPlan,
                            p = l.purchaseState,
                            f = l.selectedGiftStyle,
                            m = l.purchaseType,
                            S = l.giftRecipient,
                            y = M.ZP.useExperiment({
                                location: "cbdb8c_1"
                            }, {
                                autoTrackExposure: !1
                            }).enabled,
                            I = (0, M.rK)();
                        i.useEffect((function() {
                            I && n && M.ZP.trackExposure({
                                location: "cbdb8c_2"
                            })
                        }), [I, n]);
                        var E = y && I && n && o === R.Si.TIER_2,
                            P = (E || (0, b.a8)(S)) && u === h.h8.CONFIRM && null != f,
                            v = null != t && null != u,
                            T = u !== h.h8.SKU_SELECT && null != o,
                            _ = (0, N.N)(a),
                            O = !n && null != _ && null != o && R.nG[_.trial_id].skus.includes(o);
                        return i.useMemo((function() {
                            if (null != u) {
                                var e = null;
                                if (P) e = (0, r.jsxs)("div", {
                                    className: G().container,
                                    children: [(0, r.jsx)(L.Z, {
                                        giftStyle: f,
                                        className: G().seasonalGiftBoxHeaderIcon
                                    }), (0, r.jsx)(c.ModalCloseButton, {
                                        onClick: s,
                                        className: G().closeButton
                                    })]
                                });
                                else if (v) e = t(null != d ? d : null, s, u);
                                else if (m === Z.GZ.ONE_TIME) e = (0, r.jsx)(C.t, {
                                    step: u,
                                    onClose: s
                                });
                                else if (T) {
                                    x()(o in R.y7, "invalid sku id: ".concat(o));
                                    e = (0, r.jsx)(w.Z, {
                                        currentStep: null != u ? u : void 0,
                                        purchaseState: p,
                                        premiumType: R.y7[o],
                                        onClose: s,
                                        useWinterTheme: E,
                                        showTrialBadge: O,
                                        giftRecipient: S
                                    })
                                }
                                return e
                            }
                        }), [E, f, s, p, t, d, o, u, O, P, T, v, m, S])
                    }({
                        isGift: H,
                        renderHeader: ie,
                        referralTrialOfferId: le,
                        handleClose: We
                    });
                return (0, r.jsx)(c.Shaker, {
                    className: B().shaker,
                    isShaking: ue && he === O.A.PURCHASING,
                    intensity: 2,
                    children: (0, r.jsx)(c.ModalRoot, {
                        className: s()(B().root, K({}, B().withHeader, null != Be)),
                        transitionState: m,
                        hideShadow: me,
                        size: pe ? c.ModalSize.LARGE : c.ModalSize.SMALL,
                        children: (0, r.jsx)(U.ZP, V({
                            header: Be,
                            isLargeModal: pe
                        }, He))
                    })
                })
            }

            function q(e) {
                var n = e.subscriptionTier,
                    t = e.initialPlanId,
                    a = e.handleStepChange,
                    s = e.referralTrialOfferId,
                    l = (0, g.usePaymentContext)(),
                    c = l.activeSubscription,
                    f = l.blockedPayments,
                    y = l.hasFetchedSubscriptions,
                    I = l.hasFetchedSubscriptionPlans,
                    E = l.currencyLoading,
                    P = l.selectedSkuId,
                    T = l.setSelectedPlanId,
                    b = l.isGift,
                    _ = l.defaultPlanId,
                    O = (0, A.Z)({
                        isGift: b,
                        skuId: P,
                        referralTrialOfferId: s
                    }),
                    j = S.k.getCurrentConfig({
                        location: "055ec5_1"
                    }, {
                        autoTrackExposure: !1
                    }).defaultToMonthlyPlan,
                    x = z(i.useState(!0), 2),
                    C = x[0],
                    M = x[1],
                    N = (0,
                        o.ZP)([v.Z], (function() {
                        return v.Z.applicationIdsFetched.has(R.RQ)
                    }));
                i.useEffect((function() {
                    M(!y || !I || E)
                }), [E, I, y]);
                (0, d.Z)("Payment Modal", C, 5, {
                    hasFetchedSubscriptions: y,
                    hasFetchedSubscriptionPlans: I,
                    currencyLoading: E
                }, {
                    tags: {
                        app_context: "billing"
                    }
                });
                i.useEffect((function() {
                    N || (0, u.yD)(R.RQ);
                    if (!C && !f)
                        if (null != t) a(h.h8.REVIEW);
                        else {
                            var e = (0, m.Wt)({
                                isTrial: O,
                                isGift: b,
                                selectedSkuId: P
                            });
                            if (e.enabled) {
                                var r = (0, m.D3)(e, P, c, _);
                                T(r);
                                a(h.h8.REVIEW)
                            } else a(null != n ? h.h8.PLAN_SELECT : h.h8.SKU_SELECT)
                        }
                }), [c, f, N, t, C, a, n, P, T, j, O, _, b]);
                return C ? (0, r.jsx)(D.Z, {}) : f ? (0, r.jsx)(p.Vq, {}) : null
            }
        },
        366366: (e, n, t) => {
            t.d(n, {
                l: () => Se
            });
            var r = t(785893),
                i = t(667294),
                a = t(441143),
                s = t.n(a),
                l = t(898302),
                o = t(471450),
                c = t(818103),
                u = t(717035),
                d = t(16097),
                p = t(682876),
                f = t(197597),
                m = t(202351),
                S = t(882723),
                y = t(415324),
                h = t(152042),
                I = t(700812),
                E = t(536713),
                P = t(153686),
                v = t(19585),
                T = t(782786),
                b = t(632826),
                _ = t(793461),
                g = t(615796),
                O = t(551778),
                A = t(694329),
                j = t(530562),
                x = t(100749),
                C = t(16703),
                M = t(524450),
                N = t(900547),
                L = t(556663),
                w = t(646875),
                R = t(2590),
                Z = t(473708),
                k = t(231492),
                G = t.n(k),
                D = t(968071),
                U = t.n(D);

            function F(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function W(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, a = [],
                            s = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(s = (r = t.next()).done); s = !0) {
                                a.push(r.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                s || null == t.return || t.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return F(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return F(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function H(e) {
                var n, t = e.premiumSubscription,
                    a = e.paymentSources,
                    l = e.priceOptions,
                    o = e.onPaymentSourceChange,
                    u = e.onPaymentSourceAdd,
                    d = e.planId,
                    p = e.setHasAcceptedTerms,
                    P = e.legalTermsNodeRef,
                    v = e.hasLegalTermsFlash,
                    x = e.onInvoiceError,
                    M = e.planGroup,
                    w = e.currencies,
                    k = e.onCurrencyChange,
                    G = e.hasOpenInvoice,
                    D = e.purchaseState,
                    F = (0, T.usePaymentContext)(),
                    W = F.selectedSkuId,
                    H = F.defaultPlanId,
                    V = F.selectedGiftStyle,
                    $ = F.setSelectedGiftStyle,
                    z = F.isGift,
                    Q = F.isPremium,
                    q = l.paymentSourceId,
                    J = (0, m.e7)([O.Z], (function() {
                        return O.Z.get(d)
                    }));
                s()(null != J, "Missing newPlan");
                var X, ee = (0, m.e7)([_.Z], (function() {
                    return _.Z.hidePersonalInformation
                }));
                X = G ? Z.Z.Messages.BILLING_PURCHASE_DETAILS_HEADER : (0, A.PV)(d) ? (0, A.W_)(t, J) : Z.Z.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                    planName: J.name
                });
                var ne = f.M.EEA_COUNTRIES.has(g.Z.ipCountryCodeWithFallback),
                    te = D === b.A.PURCHASING || D === b.A.COMPLETED,
                    re = (0, c.Wt)({
                        isTrial: !1,
                        isGift: z,
                        selectedSkuId: W
                    }),
                    ie = re.enabled,
                    ae = re.defaultToMonthlyPlan,
                    se = i.useMemo((function() {
                        return (0, A.V7)({
                            skuId: W,
                            isPremium: Q,
                            multiMonthPlans: [],
                            currentSubscription: t,
                            isGift: z,
                            isEligibleForTrial: !1,
                            defaultPlanId: H,
                            defaultToMonthlyPlan: ae
                        })
                    }), [W, t, H, Q, z, ae]);
                return (0, r.jsxs)("div", {
                    className: U().stepBody,
                    children: [ie && (0, r.jsxs)("div", {
                        children: [(0, r.jsx)(C.KU, {
                            negativeMarginTop: !0
                        }), (0, r.jsx)(L.O, {
                            isGift: z,
                            selectedGiftStyle: V,
                            setSelectedGiftStyle: $,
                            planOptions: se,
                            eligibleForMultiMonthPlans: !1,
                            selectedPlanId: d,
                            showTotal: !1
                        }), (0, r.jsx)(C.KU, {})]
                    }), (0, r.jsx)(S.FormTitle, {
                        tag: S.FormTitleTags.H5,
                        children: X
                    }), null != t ? G ? (0, r.jsx)(B, {
                        premiumSubscription: t,
                        onInvoiceError: x,
                        priceOptions: l,
                        preventFetch: !1
                    }) : (0, j.R4)(t, d, M) ? (0, r.jsx)(Y, {
                        premiumSubscription: t,
                        newPlan: J,
                        onInvoiceError: x,
                        planGroup: M,
                        priceOptions: l,
                        preventFetch: te
                    }) : (0, r.jsx)(K, {
                        premiumSubscription: t,
                        newPlan: J,
                        planGroup: M,
                        priceOptions: l,
                        preventFetch: te
                    }) : null, (0, r.jsxs)("div", {
                        className: U().paymentSourceWrapper,
                        children: [(0, r.jsx)(S.FormTitle, {
                            tag: S.FormTitleTags.H5,
                            children: Z.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, r.jsx)(I.Z, {
                            paymentSources: Object.values(a),
                            selectedPaymentSourceId: q,
                            onChange: o,
                            onPaymentSourceAdd: u,
                            hidePersonalInformation: ee,
                            disabled: te
                        })]
                    }), (0, r.jsxs)(y.b, {
                        currencies: w,
                        className: U().currencyWrapper,
                        children: [(0, r.jsx)(S.FormTitle, {
                            tag: S.FormTitleTags.H5,
                            children: Z.Z.Messages.PAYMENT_CURRENCY
                        }), (0, r.jsx)(y.Z, {
                            selectedCurrency: l.currency,
                            currencies: w,
                            onChange: k,
                            disabled: te
                        })]
                    }), (0, r.jsx)(N.Z, {
                        isActive: v,
                        ref: P,
                        children: (0, r.jsx)(E.Z, {
                            onChange: p,
                            finePrint: (0, r.jsx)(h.Z, {
                                subscriptionPlan: J,
                                paymentSourceType: null === (n = a[null != q ? q : ""]) || void 0 === n ? void 0 : n.type
                            }),
                            forceShow: !0,
                            showPricingLink: J.currency !== R.pKx.USD,
                            showWithdrawalWaiver: ne,
                            disabled: te
                        })
                    })]
                })
            }

            function B(e) {
                var n = e.premiumSubscription,
                    t = e.onInvoiceError,
                    a = e.priceOptions,
                    s = e.preventFetch,
                    l = W((0, x.Ox)({
                        subscriptionId: n.id,
                        preventFetch: s
                    }), 2),
                    o = l[0],
                    c = l[1];
                i.useEffect((function() {
                    t(c)
                }), [t, c]);
                var u = (0, A.Ap)(a.paymentSourceId);
                return null != o ? (0, r.jsxs)(C.PO, {
                    className: G().invoice,
                    children: [(0, r.jsx)(w.By, {
                        invoice: o,
                        isPrepaidPaymentSource: u
                    }), (0, r.jsx)(w.nd, {
                        premiumSubscription: n,
                        renewalInvoice: o,
                        isUpdate: !0,
                        isPrepaidPaymentSource: u
                    })]
                }) : (0, r.jsx)(S.Spinner, {})
            }

            function Y(e) {
                var n = e.premiumSubscription,
                    t = e.newPlan,
                    a = e.onInvoiceError,
                    s = e.planGroup,
                    l = e.priceOptions,
                    o = e.preventFetch,
                    u = (0, T.usePaymentContext)(),
                    d = u.selectedSkuId,
                    p = u.isGift,
                    f = (0, v.Z)().analyticsLocations,
                    m = (0, A.al)(n, t.id, 1, new Set(s)),
                    y = W((0, x.ED)({
                        subscriptionId: n.id,
                        items: m,
                        renewal: !1,
                        applyEntitlements: !0,
                        paymentSourceId: l.paymentSourceId,
                        currency: l.currency,
                        preventFetch: o,
                        analyticsLocations: f,
                        analyticsLocation: P.Z.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
                    }), 2),
                    h = y[0],
                    I = y[1],
                    E = W((0, x.ED)({
                        subscriptionId: n.id,
                        items: m,
                        renewal: !0,
                        paymentSourceId: l.paymentSourceId,
                        currency: l.currency,
                        preventFetch: o,
                        analyticsLocations: f,
                        analyticsLocation: P.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
                    }), 2),
                    b = E[0],
                    _ = E[1],
                    g = null != I ? I : _;
                i.useEffect((function() {
                    a(g)
                }), [a, g]);
                if (null != g) return (0, r.jsx)(S.FormErrorBlock, {
                    children: g.message
                });
                var O = (0, c.Wt)({
                        isTrial: !1,
                        isGift: p,
                        selectedSkuId: d
                    }).enabled,
                    j = (0, c.$g)(O, h, t);
                if (null == h || null == b || j) return (0, r.jsx)(S.Spinner, {
                    className: U().spinner
                });
                var M = (0, A.Ap)(l.paymentSourceId);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(w.hG, {
                        proratedInvoice: h,
                        renewalInvoice: b
                    }), (0, r.jsxs)(C.PO, {
                        className: U().invoice,
                        children: [(0, r.jsx)(C.q9, {
                            children: Z.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
                        }), (0, r.jsx)(w.Lu, {
                            invoice: h,
                            newPlan: t,
                            isPrepaidPaymentSource: M
                        }), (0, r.jsx)(w.nd, {
                            premiumSubscription: n,
                            proratedInvoice: h,
                            renewalInvoice: b,
                            isUpdate: !0,
                            isPrepaidPaymentSource: M
                        })]
                    })]
                })
            }

            function K(e) {
                var n, t = e.premiumSubscription,
                    i = e.newPlan,
                    a = e.planGroup,
                    s = e.priceOptions,
                    l = e.preventFetch,
                    o = (0, v.Z)().analyticsLocations,
                    c = W((0, x.ED)({
                        subscriptionId: t.id,
                        items: (0, A.al)(t, i.id, 1, new Set(a)),
                        renewal: !0,
                        applyEntitlements: !1,
                        paymentSourceId: s.paymentSourceId,
                        currency: s.currency,
                        preventFetch: l,
                        analyticsLocations: o,
                        analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview"
                    }), 2),
                    u = c[0],
                    d = c[1];
                if (null != d) return (0, r.jsx)(S.FormErrorBlock, {
                    children: d.message
                });
                if (null == u) return (0, r.jsx)("div", {
                    children: (0, r.jsx)(S.Spinner, {})
                });
                n = t.type === R.NYc.PREMIUM ? (0, A.Gf)(i.id) : i.name;
                var p = (0, A.Ap)(s.paymentSourceId);
                return (0, r.jsxs)("div", {
                    className: U().bodyText,
                    children: [(0, r.jsx)("div", {
                        className: G().renewalInvoiceDate,
                        children: Z.Z.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
                            renewalDate: u.subscriptionPeriodStart
                        })
                    }), (0, r.jsxs)(C.PO, {
                        className: U().invoice,
                        children: [(0, r.jsx)(C.q9, {
                            children: Z.Z.Messages.PREMIUM_SUBSCRIPTION_UPDATES
                        }), (0, r.jsx)(C.R$, {
                            label: n,
                            value: (0, A.PK)(i, s, !0)
                        }), (0, r.jsx)(M.Z, {
                            invoice: u
                        }), (0, r.jsx)(C.KU, {}), (0, r.jsx)(w.nd, {
                            premiumSubscription: t,
                            renewalInvoice: u,
                            isUpdate: !0,
                            isPrepaidPaymentSource: p
                        })]
                    })]
                })
            }
            var V = t(83471),
                $ = t(881712),
                z = t(328535),
                Q = t(318715),
                q = t(19120),
                J = t(560213),
                X = t(908434),
                ee = t(325213),
                ne = t(750203),
                te = t(856236),
                re = t(249052),
                ie = t(51496),
                ae = t.n(ie);

            function se(e) {
                var n = e.sku,
                    t = e.skuPricePreview;
                s()(null != t.amount, "SKU must have a price set.");
                var i = t.amount - t.tax;
                return !t.tax_inclusive && t.tax > 0 ? (0, r.jsxs)(C.PO, {
                    className: ae().invoice,
                    children: [(0, r.jsx)(C.R$, {
                        label: n.name,
                        value: (0, re.T4)(i, t.currency),
                        className: ae().subscriptionCostRow
                    }), (0, r.jsx)(C.R$, {
                        label: Z.Z.Messages.PURCHASE_REVIEW_TAX_LABEL,
                        value: (0, re.T4)(t.tax, t.currency),
                        className: ae().subscriptionCostRow
                    }), (0, r.jsx)(C.KU, {}), (0, r.jsx)(C.Ji, {
                        label: Z.Z.Messages.BILLING_INVOICE_TOTAL.format(),
                        value: (0, re.T4)(t.amount, t.currency),
                        className: ae().subscriptionCostRow
                    })]
                }) : (0, r.jsx)(C.PO, {
                    className: ae().invoice,
                    children: (0, r.jsx)(C.R$, {
                        label: n.name,
                        value: (0, re.T4)(t.amount, t.currency),
                        className: ae().subscriptionCostRow
                    })
                })
            }

            function le(e) {
                var n = e.application,
                    t = e.sku;
                return !0 !== e.isEmbeddedIAP ? null : (0, r.jsxs)("div", {
                    className: ae().skuHeading,
                    children: [(0, r.jsx)(ne.Z, {
                        game: n
                    }), (0, r.jsx)(S.Heading, {
                        variant: "heading-lg/bold",
                        className: ae().skuHeadingText,
                        children: t.name
                    })]
                })
            }

            function oe(e) {
                var n = e.hasLegalTermsFlash,
                    t = e.legalTermsNodeRef,
                    i = e.onPaymentSourceChange,
                    a = e.handlePaymentSourceAdd,
                    l = (0, T.usePaymentContext)(),
                    o = l.application,
                    c = l.purchaseState,
                    u = l.paymentSources,
                    d = l.paymentSourceId,
                    p = l.setHasAcceptedTerms,
                    m = l.skusById,
                    y = l.skuPricePreviewsById,
                    P = l.selectedSkuId,
                    v = l.isEmbeddedIAP,
                    O = l.purchaseType;
                s()(null != P, "Expected selectedSkuId");
                var A = m[P],
                    j = y[P],
                    x = null != d ? d : X.c,
                    C = null != j ? j[x] : null;
                s()(null != A, "SKU must exist and be fetched.");
                s()(null != o, "Application must exist.");
                var M = (0, Q.ZP)([J.Z, ee.Z], (function() {
                        return ee.Z.inTestModeForApplication(o.id) || J.Z.inDevModeForApplication(o.id)
                    }), [o.id]),
                    L = (0, Q.ZP)([_.Z], (function() {
                        return _.Z.enabled
                    })),
                    w = f.M.EEA_COUNTRIES.has(g.Z.ipCountryCodeWithFallback),
                    k = c === b.A.PURCHASING || c === b.A.COMPLETED,
                    G = null != d ? u[d].type : null;
                return (0, r.jsxs)("div", {
                    className: ae().stepBody,
                    children: [M && (0, r.jsx)(q.Z, {
                        icon: te.Z,
                        iconSize: q.Z.Sizes.SMALL,
                        color: q.Z.Colors.WARNING,
                        className: ae().errorBlock,
                        children: Z.Z.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
                    }, "TEST_MODE"), (0, r.jsx)(le, {
                        application: o,
                        sku: A,
                        isEmbeddedIAP: v
                    }), (0, r.jsx)(S.FormTitle, {
                        tag: S.FormTitleTags.H5,
                        children: Z.Z.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
                    }), null == C ? (0, r.jsx)(S.Spinner, {
                        type: S.Spinner.Type.WANDERING_CUBES,
                        className: ae().invoiceSpinner
                    }) : (0, r.jsx)(se, {
                        sku: A,
                        skuPricePreview: C
                    }), (0, r.jsxs)("div", {
                        className: ae().paymentSourceWrapper,
                        children: [(0, r.jsx)(S.FormTitle, {
                            tag: S.FormTitleTags.H5,
                            children: Z.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, r.jsx)(I.Z, {
                            paymentSources: Object.values(u),
                            selectedPaymentSourceId: d,
                            onChange: i,
                            onPaymentSourceAdd: a,
                            hidePersonalInformation: L
                        })]
                    }), (0, r.jsx)(N.Z, {
                        isActive: n,
                        ref: t,
                        children: (0, r.jsx)(E.Z, {
                            onChange: p,
                            forceShow: !0,
                            showWithdrawalWaiver: w,
                            disabled: k,
                            subscriptionPlan: null,
                            finePrintClassname: ae().fineprint,
                            purchaseType: O,
                            checkboxLabel: A.productLine === R.POd.COLLECTIBLES ? Z.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_SIMPLE.format({
                                paidURL: R.EYA.PAID_TERMS
                            }) : void 0,
                            finePrint: (0, r.jsx)(h.Z, {
                                paymentSourceType: G,
                                isEmbeddedIAP: v,
                                purchaseType: O,
                                productLine: A.productLine
                            })
                        })
                    })]
                })
            }
            var ce = t(128059),
                ue = t(149096),
                de = t(203600),
                pe = t(520453);

            function fe(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function me(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, a = [],
                            s = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(s = (r = t.next()).done); s = !0) {
                                a.push(r.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                s || null == t.return || t.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return fe(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return fe(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Se(e) {
                var n = e.handleStepChange,
                    t = e.trialId,
                    a = e.trialFooterMessageOverride,
                    f = e.reviewWarningMessage,
                    m = e.planGroup,
                    S = e.openInvoiceId,
                    y = e.analyticsData,
                    h = e.analyticsLocation,
                    I = e.giftMessage,
                    E = e.customGiftMessage,
                    P = e.referralTrialOfferId,
                    v = e.initialPlanId,
                    b = e.subscriptionTier,
                    _ = (0,
                        T.usePaymentContext)(),
                    g = _.activeSubscription,
                    O = _.setUpdatedSubscription,
                    A = _.contextMetadata,
                    j = _.currencies,
                    x = _.isGift,
                    C = _.paymentSourceId,
                    M = _.paymentSources,
                    N = _.priceOptions,
                    L = _.purchaseError,
                    w = _.purchaseTokenAuthState,
                    R = _.selectedPlan,
                    k = _.selectedSkuId,
                    G = _.setCurrency,
                    D = _.setPaymentSourceId,
                    U = _.setPurchaseState,
                    F = _.setPurchaseError,
                    W = _.step,
                    B = _.purchaseState,
                    Y = _.isPremium,
                    K = _.selectedGiftStyle,
                    Q = _.setHasAcceptedTerms,
                    q = _.purchaseType,
                    J = _.setEntitlementsGranted;
                s()(null != W, "Step should be set");
                var X, ee = i.useRef(null),
                    ne = me((0, l.Z)(!1, 500), 2),
                    te = ne[0],
                    re = ne[1],
                    ie = null !== (X = null != t ? t : P) && void 0 !== X ? X : null,
                    ae = null == ie || Y && !de.nG[ie].skus.includes(k) ? null : ie,
                    se = (0, u.N)(P),
                    le = {
                        user_trial_offer_id: null == se ? void 0 : se.id
                    };
                i.useEffect((function() {
                    null != L && null != ee.current && ee.current.scrollIntoView({
                        behavior: "smooth"
                    })
                }), [L]);
                var fe, Se = i.useCallback((function(e, t) {
                        O(e);
                        null != t && J(t);
                        n(V.h8.CONFIRM, {
                            fulfillment: {
                                subscription: e,
                                entitlements: t
                            }
                        })
                    }), [n, O, J]),
                    ye = null != C ? M[C] : null,
                    he = null != R && de.o4.has(R.id) && null != ye && !(0, o.aQ)(ye) ? new Error(Z.Z.Messages.BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE) : null,
                    Ie = i.useRef(null),
                    Ee = me(i.useState(null), 2),
                    Pe = Ee[0],
                    ve = Ee[1],
                    Te = !x && null != se && null != k && de.nG[se.trial_id].skus.includes(k),
                    be = null == v && null == b,
                    _e = !1;
                if (q === pe.GZ.ONE_TIME) fe = (0, r.jsx)(oe, {
                    hasLegalTermsFlash: te,
                    legalTermsNodeRef: Ie,
                    onPaymentSourceChange: function(e) {
                        return D(null != e ? e.id : null)
                    },
                    handlePaymentSourceAdd: function() {
                        return n(V.h8.ADD_PAYMENT_STEPS)
                    }
                });
                else if (null == g || x) {
                    s()(null != R, "Expected plan to be selected");
                    _e = (0, c.Wt)({
                        isTrial: Te,
                        isGift: x,
                        selectedSkuId: k
                    }).enabled;
                    fe = (0, r.jsx)(d.Z, {
                        selectedPlanId: R.id,
                        isGift: x,
                        paymentSources: M,
                        onPaymentSourceChange: function(e) {
                            return D(null != e ? e.id : null)
                        },
                        priceOptions: N,
                        currencies: j,
                        onCurrencyChange: function(e) {
                            return G(e)
                        },
                        handlePaymentSourceAdd: function() {
                            return n(V.h8.ADD_PAYMENT_STEPS)
                        },
                        setHasAcceptedTerms: Q,
                        legalTermsNodeRef: Ie,
                        hasLegalTermsFlash: te,
                        trialId: ae,
                        trialFooterMessageOverride: a,
                        reviewWarningMessage: f,
                        purchaseState: B,
                        referralTrialOfferId: P,
                        isTrial: Te
                    })
                } else {
                    s()(null != R, "Expected plan to be selected");
                    _e = (0, c.Wt)({
                        isTrial: Te,
                        isGift: x,
                        selectedSkuId: k
                    }).enabled;
                    fe = (0, r.jsx)(H, {
                        premiumSubscription: g,
                        paymentSources: M,
                        priceOptions: N,
                        onPaymentSourceChange: function(e) {
                            D(null != e ? e.id : null)
                        },
                        onPaymentSourceAdd: function() {
                            n(V.h8.ADD_PAYMENT_STEPS);
                            D(null)
                        },
                        planId: R.id,
                        setHasAcceptedTerms: Q,
                        legalTermsNodeRef: Ie,
                        hasLegalTermsFlash: te,
                        onInvoiceError: function(e) {
                            return ve(e)
                        },
                        planGroup: m,
                        currencies: j,
                        onCurrencyChange: function(e) {
                            return G(e)
                        },
                        hasOpenInvoice: null != S,
                        purchaseState: B
                    })
                }
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)($.P, {
                        giftMessage: I
                    }), (0, r.jsx)(ce.Z, {
                        isEligibleForTrial: Te
                    }), (0, r.jsxs)(ue.C3, {
                        children: [(0, r.jsx)(z.Z, {}), fe]
                    }), (0, r.jsx)(ue.O3, {
                        children: (0, r.jsx)(p.Z, {
                            premiumSubscription: null != g ? g : null,
                            setPurchaseState: U,
                            onBack: function() {
                                return n(_e ? V.h8.SKU_SELECT : V.h8.PLAN_SELECT)
                            },
                            onNext: Se,
                            onPurchaseError: function(e) {
                                return F(e)
                            },
                            legalTermsNodeRef: Ie,
                            flashLegalTerms: function() {
                                return re(!0)
                            },
                            invoiceError: Pe,
                            planError: he,
                            analyticsLocation: h,
                            baseAnalyticsData: y,
                            flowStartTime: A.startTime,
                            isGift: x,
                            giftStyle: K,
                            customGiftMessage: E,
                            trialId: ae,
                            planGroup: m,
                            purchaseTokenAuthState: w,
                            openInvoiceId: S,
                            backButtonEligible: _e ? be && Y : Y,
                            metadata: le,
                            isTrial: Te,
                            disablePurchase: null != ye && q === pe.GZ.SUBSCRIPTION && Te && pe.H0.has(ye.type)
                        })
                    })]
                })
            }
        },
        881712: (e, n, t) => {
            t.d(n, {
                P: () => d
            });
            var r = t(785893),
                i = (t(667294), t(19120)),
                a = t(832520),
                s = t(644144),
                l = t(782786),
                o = t(473708),
                c = t(169795),
                u = t.n(c);

            function d(e) {
                var n = e.giftMessage,
                    t = void 0 === n ? o.Z.Messages.PREMIUM_PAYMENT_IS_GIFT : n,
                    c = (0, l.usePaymentContext)(),
                    d = c.isGift,
                    p = c.giftRecipient;
                return !1 === d || (0, s.a8)(p) ? null : (0, r.jsx)(i.Z, {
                    className: u().paymentNote,
                    iconSize: i.Z.Sizes.SMALL,
                    icon: a.Z,
                    color: null == t ? i.Z.Colors.PRIMARY : i.Z.Colors.SECONDARY,
                    children: t
                })
            }
        },
        510142: (e, n, t) => {
            t.d(n, {
                T: () => a,
                Z: () => s
            });
            var r = t(717035),
                i = t(203600);

            function a(e) {
                var n = e.userTrialOffer,
                    t = e.isGift,
                    r = e.skuId;
                return !t && null != n && i.nG[n.trial_id].skus.includes(r)
            }

            function s(e) {
                var n = e.isGift,
                    t = e.skuId,
                    a = e.referralTrialOfferId,
                    s = (0, r.N)(a);
                return !n && null != s && i.nG[s.trial_id].skus.includes(t)
            }
        }
    }
]);