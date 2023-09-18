"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [86611], {
        246380: (e, t, r) => {
            r.d(t, {
                Z: () => c
            });
            var n = r(667294),
                a = r(22176);

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        i(e, t, r[t])
                    }))
                }
                return e
            }

            function s(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }
            const c = function(e, t, r, i, c) {
                var u = (0, n.useRef)(!1);
                (0, n.useEffect)((function() {
                    if (t && !u.current) {
                        u.current = !0;
                        var n = setTimeout((function() {
                            var t = new Error("".concat(e, " is taking too long to load."));
                            a.Z.setExtra({
                                loadingState: i,
                                loadingTimeSeconds: r
                            });
                            a.Z.captureException(t, s(o({}, c), {
                                tags: o({}, null == c ? void 0 : c.tags)
                            }))
                        }), 1e3 * r);
                        return function() {
                            clearTimeout(n)
                        }
                    }
                }), [t, r])
            }
        },
        186451: (e, t, r) => {
            r.d(t, {
                Z: () => i
            });
            var n = r(667294),
                a = r(744564);

            function i(e) {
                var t = (0, n.useRef)(e);
                (0, n.useEffect)((function() {
                    t.current = e
                }), [e]);
                (0, n.useEffect)((function() {
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
        586611: (e, t, r) => {
            r.r(t);
            r.d(t, {
                PaymentModal: () => $,
                PaymentPredicateStep: () => q
            });
            var n = r(785893),
                a = r(667294),
                i = r(294184),
                o = r.n(i),
                s = r(685269),
                c = r(318715),
                u = r(882723),
                l = r(595138),
                f = r(246380),
                d = r(123435),
                p = r(186451),
                h = r(818103),
                S = r(533151),
                y = r(817584),
                L = r(785531),
                C = r(83471),
                m = r(909365);
            var b = r(111090),
                v = r(551778),
                g = r(151367),
                O = r(652591),
                E = r(644144),
                T = r(116094),
                I = r(782786),
                _ = r(632826),
                P = r(510142),
                N = r(441143),
                j = r.n(N),
                A = r(777315),
                M = r(621270),
                w = r(717035),
                x = r(882211),
                R = r(301162),
                Z = r(203600),
                k = r(520453),
                D = r(452726),
                G = r.n(D);
            var F = r(28648),
                H = r(149096),
                W = r(2590),
                U = r(473708),
                B = r(786958),
                z = r.n(B);

            function Y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function V(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function K(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        V(e, t, r[t])
                    }))
                }
                return e
            }

            function Q(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function X(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, a, i = [],
                            o = !0,
                            s = !1;
                        try {
                            for (r = r.call(e); !(o = (n = r.next()).done); o = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            a = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Y(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Y(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function $(e) {
                var t = e.analyticsLocations,
                    r = e.analyticsLocation,
                    i = e.analyticsObject,
                    c = e.analyticsSourceLocation,
                    l = e.analyticsSubscriptionType,
                    f = void 0 === l ? W.NYc.PREMIUM : l,
                    d = e.onComplete,
                    h = e.transitionState,
                    S = e.initialPlanId,
                    y = e.giftMessage,
                    g = e.subscriptionTier,
                    P = e.onClose,
                    N = e.trialId,
                    D = e.isGift,
                    F = void 0 !== D && D,
                    B = e.trialFooterMessageOverride,
                    Y = e.reviewWarningMessage,
                    $ = e.planGroup,
                    q = void 0 === $ ? Z.Y1 : $,
                    J = e.openInvoiceId,
                    ee = e.onSubscriptionConfirmation,
                    te = e.renderPurchaseConfirmation,
                    re = e.postSuccessGuild,
                    ne = e.followupSKUInfo,
                    ae = e.renderHeader,
                    ie = e.applicationId,
                    oe = e.guildId,
                    se = e.referralTrialOfferId,
                    ce = e.skuId,
                    ue = e.shakeWhilePurchasing,
                    le = void 0 !== ue && ue,
                    fe = e.isLargeModal,
                    de = void 0 !== fe && fe,
                    pe = (0,
                        I.usePaymentContext)(),
                    he = pe.activitySessionId,
                    Se = pe.purchaseState,
                    ye = pe.setPurchaseState,
                    Le = pe.selectedSkuId,
                    Ce = pe.setSelectedSkuId,
                    me = pe.selectedPlan,
                    be = pe.setSelectedPlanId,
                    ve = pe.setStep,
                    ge = pe.setPurchaseError,
                    Oe = pe.paymentAuthenticationState,
                    Ee = pe.step,
                    Te = pe.contextMetadata,
                    Ie = pe.purchaseTokenAuthState,
                    _e = pe.activeSubscription,
                    Pe = pe.priceOptions,
                    Ne = pe.hasPaymentSources,
                    je = pe.purchaseType,
                    Ae = pe.giftRecipient,
                    Me = X(a.useState({
                        load_id: Te.loadId,
                        payment_type: W.Zuq[je],
                        location: null != r ? r : i,
                        source: c,
                        subscription_type: f,
                        subscription_plan_id: null == me ? void 0 : me.id,
                        is_gift: F,
                        eligible_for_trial: null != N,
                        location_stack: t,
                        sku_id: ce,
                        application_id: ie,
                        guild_id: oe,
                        payment_modal_version: "v1",
                        activity_session_id: he
                    }), 2),
                    we = Me[0],
                    xe = Me[1],
                    Re = X(a.useState((0, E.a8)(Ae) ? U.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : void 0), 2),
                    Ze = Re[0],
                    ke = Re[1];
                a.useEffect((function() {
                    xe((function(e) {
                        var t = null != me ? (0, T.aS)(me.id, !1, F, Pe) : void 0;
                        return Q(K({}, e), {
                            subscription_plan_id: null == me ? void 0 : me.id,
                            price: null == t ? void 0 : t.amount,
                            regular_price: null == me ? void 0 : me.price,
                            currency: Pe.currency,
                            sku_id: Le
                        })
                    }))
                }), [me, Le, F, Pe]);
                a.useEffect((function() {
                    O.default.track(W.rMx.PAYMENT_FLOW_STARTED, Q(K({}, we), {
                        has_saved_payment_source: Ne
                    }))
                }), []);
                a.useEffect((function() {
                    be(S);
                    if (null != ce) Ce(ce);
                    else if (null != S) {
                        var e;
                        Ce(null === (e = v.Z.get(S)) || void 0 === e ? void 0 : e.skuId)
                    }
                }), [be, Ce, S, ce]);
                var De = (0, s.Z)((function() {
                        return Date.now()
                    }), [Ee]),
                    Ge = a.useCallback((function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = t.trackedFromStep,
                            n = t.analyticsDataOverride,
                            a = t.fulfillment;
                        e === C.h8.CONFIRM && (null == d || d(a));
                        ve(e);
                        ge(null);
                        var i = null != r ? r : Ee,
                            o = Date.now();
                        null !== i ? O.default.track(W.rMx.PAYMENT_FLOW_STEP, Q(K({}, we, n), {
                            from_step: i,
                            to_step: e === C.h8.ADD_PAYMENT_STEPS ? C.h8.PAYMENT_TYPE : e,
                            step_duration_ms: o - De,
                            flow_duration_ms: o - Te.startTime
                        })) : O.default.track(W.rMx.PAYMENT_FLOW_LOADED, Q(K({}, we), {
                            initial_step: e,
                            has_saved_payment_source: Ne
                        }))
                    }), [we, Te.startTime, d, ge, ve, Ee, De, Ne]),
                    Fe = a.useMemo((function() {
                        return function() {
                            return null == P ? void 0 : P(Se === _.A.COMPLETED)
                        }
                    }), [P, Se]);
                (0, L.bp)(Ee, Oe, Ge);
                (0, C.dZ)(Ee, Se, ye);
                ! function(e, t, r) {
                    a.useEffect((function() {
                        null != e && e !== C.h8.AWAITING_PURCHASE_TOKEN_AUTH && t === m.I.PENDING ? r(C.h8.AWAITING_PURCHASE_TOKEN_AUTH) : e === C.h8.AWAITING_PURCHASE_TOKEN_AUTH && t === m.I.SUCCESS && r(C.h8.REVIEW)
                    }), [e, t, r])
                }(Ee, Ie, Ge);
                (0, p.Z)(Fe);
                (0, b.w)(_e, (function() {
                    return P(!1)
                }), F);
                (0, L.D6)(Oe);
                var He = {
                        initialPlanId: S,
                        giftMessage: y,
                        customGiftMessage: Ze,
                        setCustomGiftMessage: ke,
                        subscriptionTier: g,
                        handleStepChange: Ge,
                        handleClose: Fe,
                        analyticsData: we,
                        setAnalyticsData: xe,
                        trialId: N,
                        trialFooterMessageOverride: B,
                        reviewWarningMessage: Y,
                        planGroup: q,
                        openInvoiceId: J,
                        analyticsLocation: r,
                        onSubscriptionConfirmation: ee,
                        renderPurchaseConfirmation: te,
                        postSuccessGuild: re,
                        followupSKUInfo: ne,
                        referralTrialOfferId: se
                    },
                    We = function(e) {
                        var t = e.isGift,
                            r = e.renderHeader,
                            i = e.referralTrialOfferId,
                            o = e.handleClose,
                            s = (0,
                                I.usePaymentContext)(),
                            c = s.selectedSkuId,
                            u = s.step,
                            l = s.selectedPlan,
                            f = s.purchaseState,
                            d = s.selectedGiftStyle,
                            p = s.purchaseType,
                            h = s.giftRecipient,
                            S = M.ZP.useExperiment({
                                location: "cbdb8c_1"
                            }, {
                                autoTrackExposure: !1
                            }).enabled,
                            y = (0, M.rK)();
                        a.useEffect((function() {
                            y && t && M.ZP.trackExposure({
                                location: "cbdb8c_2"
                            })
                        }), [y, t]);
                        var L = S && y && t && c === Z.Si.TIER_2,
                            m = (L || (0, E.a8)(h)) && u === C.h8.CONFIRM && null != d,
                            b = null != r && null != u,
                            v = u !== C.h8.SKU_SELECT && null != c,
                            g = (0, w.N)(i),
                            O = !t && null != g && null != c && Z.nG[g.trial_id].skus.includes(c);
                        return a.useMemo((function() {
                            if (null != u) {
                                var e = null;
                                if (m) e = (0, n.jsx)(x.Z, {
                                    giftStyle: d,
                                    className: G().seasonalGiftBoxHeaderIcon
                                });
                                else if (b) e = r(null != l ? l : null, o, u);
                                else if (p === k.GZ.ONE_TIME) e = (0, n.jsx)(A.t, {
                                    step: u,
                                    onClose: o
                                });
                                else if (v) {
                                    j()(c in Z.y7, "invalid sku id: ".concat(c));
                                    e = (0, n.jsx)(R.Z, {
                                        currentStep: null != u ? u : void 0,
                                        purchaseState: f,
                                        premiumType: Z.y7[c],
                                        onClose: o,
                                        useWinterTheme: L,
                                        showTrialBadge: O
                                    })
                                }
                                return e
                            }
                        }), [L, d, o, f, r, l, c, u, O, m, v, b, p])
                    }({
                        isGift: F,
                        renderHeader: ae,
                        referralTrialOfferId: se,
                        handleClose: Fe
                    });
                return (0, n.jsx)(u.Shaker, {
                    className: z().shaker,
                    isShaking: le && Se === _.A.PURCHASING,
                    intensity: 2,
                    children: (0, n.jsx)(u.ModalRoot, {
                        className: o()(z().root, V({}, z().withHeader, null != We)),
                        transitionState: h,
                        size: de ? u.ModalSize.LARGE : u.ModalSize.SMALL,
                        children: (0, n.jsx)(H.ZP, K({
                            header: We,
                            isLargeModal: de
                        }, He))
                    })
                })
            }

            function q(e) {
                var t = e.subscriptionTier,
                    r = e.initialPlanId,
                    i = e.handleStepChange,
                    o = e.referralTrialOfferId,
                    s = (0, I.usePaymentContext)(),
                    u = s.activeSubscription,
                    p = s.blockedPayments,
                    L = s.hasFetchedSubscriptions,
                    m = s.hasFetchedSubscriptionPlans,
                    b = s.currencyLoading,
                    v = s.selectedSkuId,
                    O = s.setSelectedPlanId,
                    E = s.startedPaymentFlowWithPaymentSourcesRef,
                    T = s.isGift,
                    _ = s.defaultPlanId,
                    N = (0, P.Z)({
                        isGift: T,
                        skuId: v,
                        referralTrialOfferId: o
                    }),
                    j = (0, S.F_)({
                        isTrial: N,
                        isGift: T,
                        startPaymentFlowWithPaymentSource: E.current
                    }),
                    A = y.k.getCurrentConfig({
                        location: "055ec5_1"
                    }, {
                        autoTrackExposure: !1
                    }).defaultToMonthlyPlan,
                    M = X(a.useState(!0), 2),
                    w = M[0],
                    x = M[1],
                    R = (0, c.ZP)([g.Z], (function() {
                        return g.Z.applicationIdsFetched.has(Z.RQ)
                    }));
                a.useEffect((function() {
                    x(!L || !m || b)
                }), [b, m, L]);
                (0, f.Z)("Payment Modal", w, 5, {
                    hasFetchedSubscriptions: L,
                    hasFetchedSubscriptionPlans: m,
                    currencyLoading: b
                }, {
                    tags: {
                        app_context: "billing"
                    }
                });
                a.useEffect((function() {
                    R || (0, l.yD)(Z.RQ);
                    if (!w && !p)
                        if (null != r) i(C.h8.REVIEW);
                        else if (j) {
                        var e = v;
                        O(A ? Z.IW[e] : Z.mn[e]);
                        i(C.h8.REVIEW)
                    } else {
                        var n = (0, h.Wt)({
                            isTrial: N,
                            isGift: T,
                            selectedSkuId: v
                        });
                        if (n.enabled) {
                            var a = (0, h.D3)(n, v, u, _);
                            O(a);
                            i(C.h8.REVIEW)
                        } else i(null != t ? C.h8.PLAN_SELECT : C.h8.SKU_SELECT)
                    }
                }), [u, p, R, r, w, i, t, v, O, j, A, N, _, T]);
                return w ? (0, n.jsx)(F.Z, {}) : p ? (0, n.jsx)(d.Vq, {}) : null
            }
        },
        28648: (e, t, r) => {
            r.d(t, {
                Z: () => s
            });
            var n = r(785893),
                a = (r(667294), r(882723)),
                i = r(24193),
                o = r.n(i);

            function s() {
                return (0, n.jsx)(a.Spinner, {
                    className: o().spinner
                })
            }
        },
        510142: (e, t, r) => {
            r.d(t, {
                T: () => i,
                Z: () => o
            });
            var n = r(717035),
                a = r(203600);

            function i(e) {
                var t = e.userTrialOffer,
                    r = e.isGift,
                    n = e.skuId;
                return !r && null != t && a.nG[t.trial_id].skus.includes(n)
            }

            function o(e) {
                var t = e.isGift,
                    r = e.skuId,
                    i = e.referralTrialOfferId,
                    o = (0, n.N)(i);
                return !t && null != o && a.nG[o.trial_id].skus.includes(r)
            }
        },
        437763: (e, t, r) => {
            r.d(t, {
                z: () => c
            });
            var n = r(667294),
                a = r(83471),
                i = r(632826);

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function s(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, a, i = [],
                            o = !0,
                            s = !1;
                        try {
                            for (r = r.call(e); !(o = (n = r.next()).done); o = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            a = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return o(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return o(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c(e) {
                var t = e.purchaseState,
                    r = e.currentStep,
                    o = e.initialScene,
                    c = e.purchaseScene,
                    u = e.errorScene,
                    l = e.successScene,
                    f = s((0, n.useState)(o), 2),
                    d = f[0],
                    p = f[1];
                (0, n.useEffect)((function() {
                    t === i.A.PURCHASING ? p(c) : t === i.A.FAIL && p(u)
                }), [t, c, u]);
                (0, n.useEffect)((function() {
                    r === a.h8.CONFIRM && p(l)
                }), [r, l]);
                return [d, p]
            }
        },
        301162: (e, t, r) => {
            r.d(t, {
                Z: () => H
            });
            var n = r(785893),
                a = (r(667294), r(294184)),
                i = r.n(a),
                o = r(202351),
                s = r(882723),
                c = r(316878),
                u = r(83471),
                l = r(644144),
                f = r(69427),
                d = r(107364),
                p = r(318586),
                h = r(874414),
                S = r(633878);

            function y(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function L(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function C(e, t) {
                if (null == e) return {};
                var r, n, a = function(e, t) {
                    if (null == e) return {};
                    var r, n, a = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (a[r] = e[r])
                    }
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                    }
                }
                return a
            }

            function m(e) {
                var t = e.width,
                    r = void 0 === t ? 143 : t,
                    a = e.height,
                    i = void 0 === a ? 41 : a,
                    o = e.color,
                    s = void 0 === o ? "currentColor" : o,
                    c = e.foreground,
                    u = C(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsxs)("svg", L(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            y(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, S.Z)(u)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 143 41",
                    children: [(0, n.jsx)("title", {
                        children: "Nitro Classic"
                    }), (0, n.jsx)("g", {
                        fill: s,
                        className: c,
                        fillRule: "evenodd",
                        "aria-hidden": !0,
                        children: (0, n.jsx)("path", {
                            d: "M98.4808161 8.67851957L97.2236004 17.1425324C96.9366613 19.1428254 94.6742302 20.0716236 92.5917164 20.0716236 90.6527882 20.0716236 88.7494953 19.1428254 89.0007991 17.3214804L90.2578987 8.67851957C90.5449539 6.7854799 92.807385 5.82123843 94.8897827 5.82123843 96.9722965 5.82123843 98.7678712 6.7854799 98.4808161 8.67851957M95.8844352.00380986213L95.8851317 0 82.3544217 0C82.0087483 0 81.715309.252259053 81.6652804.592375835L81.0074795 5.06376857C80.9459594 5.48181435 81.2717838 5.85668169 81.6965047 5.85668169L84.1674077 5.85668169C84.4160419 5.85668169 84.5858606 6.10882529 84.4882409 6.33626252 84.1799439 7.05517195 83.9553375 7.83561644 83.8305561 8.67851957L82.5733404 17.3214804C81.7473459 23.1071601 86.5954788 26 91.8735561 26 97.4035177 26 102.825761 23.1071601 103.651756 17.3214804L104.908275 8.67851957C105.717903 3.00713572 101.040981.115796719 95.8844352.00380986213M15.296869 11.3489531L15.3645208 15.4968998C15.3658783 15.5821668 15.3090871 15.6571606 15.2271809 15.6781634L15.2270678 15.6781634 13.8302517 10.6749217C13.8282154 10.6672739 13.8256134 10.6598544 13.8224457 10.6525491L9.48877489.415833402C9.38198017.163685177 9.13637494 0 8.86452355 0L3.95343718 0C3.6148391 0 3.32805455.251805788 3.28121873.590019998L.00667092325 24.2202696C-.050459726 24.632222.26664366 25 .678889375 25L5.57119616 25C5.91024677 25 6.19737071 24.7475093 6.24364088 24.4086103L7.52608254 15.0207974C7.52732697 15.0116657 7.52789262 15.0023057 7.52777949 14.9930599L7.45775202 10.1692555 7.5975807 10.1340986 9.06465052 15.1374545C9.06679999 15.1445315 9.06928885 15.1516085 9.07223023 15.1584573L13.1252256 24.587591C13.2328122 24.8379129 13.4775124 25 13.7478931 25L19.045884 25C19.3844821 25 19.6712667 24.7481942 19.7181025 24.40998L22.9933291.779730433C23.0504597.367777991 22.7333563 0 22.3211106 0L17.4621772 0C17.1236922 0 16.8369077.251577496 16.7899587.589791707L15.298566 11.3204166C15.2973215 11.3298907 15.2967559 11.3393648 15.296869 11.3489531M24.7126791 25L29.8497922 25C30.205243 25 30.5063014 24.7483072 30.5554684 24.4099773L33.9929971.779733993C34.0529712.36777967 33.7200849 0 33.2873209 0L28.1502078 0C27.7948757 0 27.4938173.251692791 27.4445316.590022692L24.0070029 24.220266C23.9470288 24.6322203 24.2799151 25 24.7126791 25M37.6698384.584862647L37.0075033 4.99943007C36.9456869 5.41217371 37.2736994 5.78240055 37.7012724 5.78240055L42.9904877 5.78240055C43.4157236 5.78240055 43.7430349 6.14863787 43.6850747 6.55955773L41.1933721 24.2228428C41.1354119 24.6337627 41.4627233 25 41.8879592 25L47.0155637 25C47.3658955 25 47.6624739 24.7477488 47.7101508 24.4093241L50.2545552 6.37307648C50.3022321 6.03453779 50.5988105 5.78240055 50.9491423 5.78240055L56.6358988 5.78240055C56.9838934 5.78240055 57.2791864 5.53345492 57.3296679 5.1975379L57.9924704.782970478C58.0544036.370226832 57.7263911 0 57.2987013 0L38.3636075 0C38.0156128 0 37.7202029.248945629 37.6698384.584862647M73.4002223 8.72158326C73.2199776 10.1691878 72.0692022 11.6169065 70.0902313 11.6169065L67.1170073 11.6169065C66.6926763 11.6169065 66.3664914 11.2480995 66.4261466 10.8356886L67.0554915 6.48511303C67.104332 6.147468 67.3988868 5.89657424 67.7463521 5.89657424L70.9177291 5.89657424C72.8244858 5.89657424 73.5797693 7.20309382 73.4002223 8.72158326M71.6373126 0L62.0638753 0C61.7158285 0 61.4210412.251692791 61.3727821.590022692L58.0068571 24.220266C57.9481322 24.6322203 58.2740844 25 58.697834 25L63.7988762 25C64.1473881 25 64.4425243 24.7475082 64.4900856 24.4086076L65.4806177 17.3505938C65.5044565 17.1812005 65.6519083 17.0549546 65.8262224 17.0549546L66.4819644 17.0549546C66.6009259 17.0549546 66.7117473 17.1144249 66.7758214 17.2128191L71.6474295 24.6843852C71.775694 24.8810595 71.9971043 25 72.2350273 25L78.5355692 25C79.0999096 25 79.4307459 24.3765324 79.1072357 23.9225722L73.9950299 16.7493848C73.8724635 16.5773661 73.935491 16.3380012 74.1277133 16.245885 77.3914221 14.6802531 79.2866664 13.0763822 79.911476 8.61554126 80.6303618 2.75412411 76.8897603 0 71.6373126 0M5.93350799 37.6155526L7.71275643 38.4952518C7.80947956 38.5430729 7.84912249 38.6602491 7.80130141 38.7569722 7.79608029 38.7675325 7.78991472 38.7775989 7.78288005 38.7870484 7.78288005 38.7870484 7.78288005 38.7870484 7.78288005 38.7870484 6.5023978 40.5070853 5.02480222 41 3.72982215 41 1.63490599 41-.294225433 39.7760989.0373440313 37.3434066L.549769566 33.6565934C.88133903 31.239011 3.1721826 30 5.31231277 30 6.56433391 30 7.99499405 30.5097346 8.63332448 32.2132515 8.63332448 32.2132515 8.63332448 32.2132515 8.63332448 32.2132515L8.63332448 32.2132515C8.68451961 32.3498763 8.61597686 32.5022247 8.4797766 32.5545387L6.63222277 33.2642011C6.50733795 33.312169 6.36596186 33.2651964 6.29461441 33.1520298 6.29461441 33.1520298 6.29461441 33.1520298 6.29461441 33.1520298 6.00467959 32.6921544 5.44749743 32.4931319 4.89031528 32.4931319 4.12167697 32.5082418 3.35303867 32.9313187 3.2475393 33.6565934L2.73511376 37.3434066C2.62961439 38.0384615 3.29275331 38.4766484 4.04632028 38.4766484 4.60310978 38.4766484 5.22108254 38.2435573 5.60253663 37.6999958 5.60253663 37.6999958 5.60253663 37.6999958 5.60253663 37.6999958L5.60253663 37.6999958C5.67690475 37.5940233 5.81746419 37.5581537 5.93351807 37.6155322zM59.2832028 37.6155526L61.0624512 38.4952518C61.1591744 38.5430729 61.1988173 38.6602491 61.1509962 38.7569722 61.1457751 38.7675325 61.1396095 38.7775989 61.1325749 38.7870484 61.1325749 38.7870484 61.1325749 38.7870484 61.1325749 38.7870484 59.8520926 40.5070853 58.374497 41 57.079517 41 54.9846008 41 53.0554694 39.7760989 53.3870388 37.3434066L53.8994644 33.6565934C54.2310338 31.239011 56.5218774 30 58.6620076 30 59.9140287 30 61.3446889 30.5097346 61.9830193 32.2132515 61.9830193 32.2132515 61.9830193 32.2132515 61.9830193 32.2132515L61.9830193 32.2132515C62.0342144 32.3498763 61.9656717 32.5022247 61.8294714 32.5545387L59.9819176 33.2642011C59.8570328 33.312169 59.7156567 33.2651964 59.6443092 33.1520298 59.6443092 33.1520298 59.6443092 33.1520298 59.6443092 33.1520298 59.3543744 32.6921544 58.7971922 32.4931319 58.2400101 32.4931319 57.4713718 32.5082418 56.7027335 32.9313187 56.5972341 33.6565934L56.0848086 37.3434066C55.9793092 38.0384615 56.6424481 38.4766484 57.3960151 38.4766484 57.9528046 38.4766484 58.5707773 38.2435573 58.9522314 37.6999958 58.9522314 37.6999958 58.9522314 37.6999958 58.9522314 37.6999958L58.9522314 37.6999958C59.0265995 37.5940233 59.167159 37.5581537 59.2832129 37.6155322zM9.55137248 40.2798328L10.9039613 30.5820306C10.9384202 30.3349668 11.1497126 30.1510989 11.3991679 30.1510989L13.1015272 30.1510989C13.3776695 30.1510989 13.6015272 30.3749565 13.6015272 30.6510989 13.6015272 30.6744353 13.5998934 30.6977431 13.5966378 30.7208514L12.6268238 37.6046981C12.5883006 37.8781402 12.7787399 38.131038 13.052182 38.1695612 13.0752902 38.1728168 13.0985981 38.1744505 13.1219345 38.1744505L16.3149254 38.1744505C16.5910678 38.1744505 16.8149254 38.3983082 16.8149254 38.6744505 16.8149254 38.6968642 16.8134183 38.7192526 16.8104143 38.7414641L16.5839494 40.4159146C16.55041 40.6639006 16.3387043 40.8489011 16.0884606 40.8489011L10.0465791 40.8489011C9.7704367 40.8489011 9.54657907 40.6250435 9.54657907 40.3489011 9.54657907 40.3257952 9.54818071 40.3027171 9.55137248 40.2798328zM25.2618169 30.5450857L27.365844 40.2428879C27.4243935 40.5127519 27.2530892 40.7789836 26.9832252 40.8375331 26.9483937 40.8450901 26.9128539 40.8489011 26.877212 40.8489011L25.017712 40.8489011C24.7774965 40.8489011 24.5712291 40.6780766 24.5264688 40.4420682L24.273859 39.1101296C24.2290987 38.8741212 24.0228313 38.7032967 23.7826158 38.7032967L21.6737234 38.7032967C21.475839 38.7032967 21.2965724 38.8200012 21.2164933 39.0009587L20.5304477 40.5512391C20.4503686 40.7321966 20.2711021 40.8489011 20.0732176 40.8489011L18.3049929 40.8489011C18.0288505 40.8489011 17.8049929 40.6250435 17.8049929 40.3489011 17.8049929 40.2729821 17.8222812 40.1980599 17.8555465 40.1298168L22.5827762 30.4320146C22.6665559 30.2601425 22.8410184 30.1510989 23.0322226 30.1510989L24.773185 30.1510989C25.0084749 30.1510989 25.2119293 30.3151453 25.2618169 30.5450857zM22.2977121 36.3008242L23.895274 36.3008242 23.5787759 33.1730769 23.4732765 33.1730769 22.2977121 36.3008242zM28.4615085 38.7933304L29.6600776 37.7982307C29.867419 37.6260869 30.1698805 37.6329436 30.3692081 37.8143064 30.3692081 37.8143064 30.3692081 37.8143064 30.3692081 37.8143064 30.8626279 38.2632556 31.5697924 38.4917582 32.2174996 38.4917582 32.9409239 38.4917582 33.5739201 38.2348901 33.6794195 37.6758242 33.7999902 37.010989 32.8655672 36.7239011 32.0065008 36.603022 30.3335822 36.331044 28.8264482 34.9862637 29.2032317 32.9615385 29.6101579 30.7706044 31.5392893 30 33.4985634 30 34.6675402 30 35.7629615 30.294974 36.6410928 31.3393989 36.6410928 31.3393989 36.6410928 31.3393989 36.6410928 31.3393989L36.6410928 31.3393989C36.7911777 31.5179057 36.7681372 31.784282 36.5896304 31.9343669 36.5796762 31.9427362 36.5693406 31.9506412 36.5586568 31.9580566L35.2852973 32.8418354C35.1082978 32.964687 34.8717504 32.9572254 34.7028454 32.8234627 34.7028454 32.8234627 34.7028454 32.8234627 34.7028454 32.8234627 34.2644214 32.476257 33.6924031 32.3091824 33.1820653 32.2967033 32.503855 32.2815934 31.9311441 32.5384615 31.8708588 33.0824176 31.7955021 33.7019231 32.3380703 33.9739011 33.1519226 34.1552198 35.0056973 34.5027473 36.8142581 35.2129121 36.3169039 37.8722527 35.925049 39.9574176 34.1164883 41 31.8105734 41 30.6586546 41 29.2630198 40.4746703 28.4016401 39.4349963 28.4016401 39.4349963 28.4016401 39.4349963 28.4016401 39.4349963L28.4016401 39.4349963C28.2411035 39.2412306 28.2678891 38.9540435 28.4614898 38.7933078zM38.3784498 38.7933304L39.5770189 37.7982307C39.7843603 37.6260869 40.0868217 37.6329436 40.2861493 37.8143064 40.2861493 37.8143064 40.2861493 37.8143064 40.2861493 37.8143064 40.7795691 38.2632556 41.4867336 38.4917582 42.1344408 38.4917582 42.8578651 38.4917582 43.4908613 38.2348901 43.5963607 37.6758242 43.7169314 37.010989 42.7825084 36.7239011 41.9234421 36.603022 40.2505234 36.331044 38.7433895 34.9862637 39.120173 32.9615385 39.5270991 30.7706044 41.4562305 30 43.4155046 30 44.5844814 30 45.6799028 30.294974 46.558034 31.3393989 46.558034 31.3393989 46.558034 31.3393989 46.558034 31.3393989L46.558034 31.3393989C46.708119 31.5179057 46.6850785 31.784282 46.5065716 31.9343669 46.4966174 31.9427362 46.4862819 31.9506412 46.4755981 31.9580566L45.2022385 32.8418354C45.025239 32.964687 44.7886916 32.9572254 44.6197866 32.8234627 44.6197866 32.8234627 44.6197866 32.8234627 44.6197866 32.8234627 44.1813626 32.476257 43.6093444 32.3091824 43.0990065 32.2967033 42.4207963 32.2815934 41.8480854 32.5384615 41.7878 33.0824176 41.7124433 33.7019231 42.2550115 33.9739011 43.0688638 34.1552198 44.9226386 34.5027473 46.7311993 35.2129121 46.2338451 37.8722527 45.8419903 39.9574176 44.0334296 41 41.7275147 41 40.5755958 41 39.179961 40.4746703 38.3185814 39.4349963 38.3185814 39.4349963 38.3185814 39.4349963 38.3185814 39.4349963L38.3185814 39.4349963C38.1580447 39.2412306 38.1848304 38.9540435 38.378431 38.7933078zM51.984237 30.7201672L50.6316481 40.4179694C50.5971892 40.6650332 50.3858968 40.8489011 50.1364415 40.8489011L48.4483514 40.8489011C48.1722091 40.8489011 47.9483514 40.6250435 47.9483514 40.3489011 47.9483514 40.3257952 47.9499531 40.3027171 47.9531448 40.2798328L49.3057337 30.5820306C49.3401926 30.3349668 49.551485 30.1510989 49.8009403 30.1510989L51.4890304 30.1510989C51.7651728 30.1510989 51.9890304 30.3749565 51.9890304 30.6510989 51.9890304 30.6742048 51.9874287 30.6972829 51.984237 30.7201672z"
                        })
                    })]
                }))
            }

            function b(e) {
                var t = e.className;
                return (0, n.jsxs)("svg", {
                    width: "135",
                    height: "32",
                    viewBox: "0 0 135 32",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: t,
                    children: [(0, n.jsx)("path", {
                        d: "M2.17332 27.8901L6.92419 26.1319C7.02527 26.044 7.02527 25.9561 6.92419 25.9561L2.17332 24.1099L0.050529 20.0659C0.050529 19.978 -0.0505667 19.978 -0.15165 20.0659L-2.17332 24.1099H-2.27438L-6.92419 25.9561C-7.02527 25.9561 -7.02527 26.044 -6.92419 26.1319L-2.27438 27.8901H-2.17332L-0.15165 31.9341C-0.0505667 32.022 0.050529 32.022 0.050529 31.9341L2.17332 27.8901Z",
                        fill: "#F2F3F5"
                    }), (0, n.jsx)("path", {
                        d: "M6.7581 18.6026L4.04332 17.5769C3.98556 17.5256 3.98556 17.4744 4.04332 17.4744L6.7581 16.3974L7.97113 14.0385C7.97113 13.9872 8.0289 13.9872 8.08666 14.0385L9.2419 16.3974H9.29964L11.9567 17.4744C12.0144 17.4744 12.0144 17.5256 11.9567 17.5769L9.29964 18.6026H9.2419L8.08666 20.9615C8.0289 21.0128 7.97113 21.0128 7.97113 20.9615L6.7581 18.6026Z",
                        fill: "#F2F3F5"
                    }), (0, n.jsx)("path", {
                        d: "M129.758 12.6026L127.043 11.5769C126.986 11.5256 126.986 11.4744 127.043 11.4744L129.758 10.3974L130.971 8.03846C130.971 7.98718 131.029 7.98718 131.087 8.03846L132.242 10.3974H132.3L134.957 11.4744C135.014 11.4744 135.014 11.5256 134.957 11.5769L132.3 12.6026H132.242L131.087 14.9615C131.029 15.0128 130.971 15.0128 130.971 14.9615L129.758 12.6026Z",
                        fill: "#F2F3F5"
                    }), (0, n.jsx)("path", {
                        d: "M116.482 7.2326L112.07 5.62087C111.977 5.54029 111.977 5.45972 112.07 5.45972L116.482 3.7674L118.453 0.0604396C118.453 -0.0201465 118.547 -0.0201465 118.641 0.0604396L120.518 3.7674H120.612L124.93 5.45972C125.023 5.45972 125.023 5.54029 124.93 5.62087L120.612 7.2326H120.518L118.641 10.9396C118.547 11.0201 118.453 11.0201 118.453 10.9396L116.482 7.2326Z",
                        fill: "#F2F3F5"
                    })]
                })
            }
            var v = r(507965),
                g = r(116094),
                O = r(249052),
                E = r(203600),
                T = r(473708),
                I = r(189532),
                _ = r.n(I);

            function P(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function N(e, t) {
                var r = g.ZP.getDefaultPrice(e),
                    n = g.ZP.getInterval(e).intervalType,
                    a = (0, O.T4)(r.amount, r.currency);
                if (t) return a;
                switch (n) {
                    case E.rV.MONTH:
                        return T.Z.Messages.BILLING_PRICE_PER_MONTH.format({
                            price: a
                        });
                    case E.rV.YEAR:
                        return T.Z.Messages.BILLING_PRICE_PER_YEAR.format({
                            price: a
                        })
                }
            }
            var j = function(e) {
                var t = e.isTier0;
                return (0, n.jsx)("div", {
                    className: _().trialBadgeContainer,
                    children: (0, n.jsx)(s.Text, {
                        variant: "text-xs/bold",
                        className: i()(_().trialOfferText, P({}, _().tier0TrialOffer, t)),
                        children: T.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT
                    })
                })
            };
            const A = function(e) {
                var t, r = e.hideCloseButton,
                    a = void 0 !== r && r,
                    u = e.hideCloseOnFullScreen,
                    l = e.shouldShowPrice,
                    S = e.plan,
                    y = e.renderAnimation,
                    L = e.onClose,
                    C = e.isGift,
                    g = e.upgradeToPremiumType,
                    O = e.headerTheme,
                    T = void 0 === O ? f.nL.DEFAULT : O,
                    I = e.className,
                    A = e.showTrialBadge,
                    M = void 0 !== A && A,
                    w = g === E.p9.TIER_2;
                t = g === E.p9.TIER_0 ? h.Z : g === E.p9.TIER_1 ? m : p.Z;
                var x, R = (0, o.e7)([c.Z], (function() {
                    return c.Z.useReducedMotion
                }));
                return (0, n.jsxs)("div", {
                    "aria-hidden": !0,
                    className: i()((x = {}, P(x, _().headerBackground, !w), P(x, T === f.nL.WINTER ? _().tier2HeaderBackgroundWinterTheme : _().tier2HeaderBackground, w), x), I),
                    children: [R || T !== f.nL.WINTER ? null : (0, n.jsx)(v.Z, {
                        className: _().snow,
                        wind: 5
                    }), M && (0, n.jsx)(b, {
                        className: _().trialBadgeSparkles
                    }), y(), (0, n.jsxs)(d.Z, {
                        align: d.Z.Align.START,
                        justify: d.Z.Justify.BETWEEN,
                        className: _().headerTop,
                        children: [(0, n.jsxs)("div", {
                            children: [(0, n.jsx)(t, {
                                className: i()(_().headerIcon, P({}, _().nonTier2, !w))
                            }), M && (0, n.jsx)(j, {
                                isTier0: g === E.p9.TIER_0
                            })]
                        }), !a && (0, n.jsx)(s.ModalCloseButton, {
                            hideOnFullscreen: u,
                            onClick: L,
                            className: _().closeButton
                        })]
                    }), l && null != S ? (0, n.jsx)("div", {
                        className: _().price,
                        children: N(S, C)
                    }) : null]
                })
            };
            var M = r(630689),
                w = r(437763);

            function x(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function R(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, a, i = [],
                            o = !0,
                            s = !1;
                        try {
                            for (r = r.call(e); !(o = (n = r.next()).done); o = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            a = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return x(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return x(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Z(e) {
                var t = e.currentStep,
                    r = e.purchaseState,
                    a = e.className,
                    i = e.pause,
                    o = R((0, w.z)({
                        purchaseState: r,
                        currentStep: t,
                        initialScene: M.NQ.Scenes.NORMAL,
                        purchaseScene: M.NQ.Scenes.SPEED_START,
                        errorScene: M.NQ.Scenes.NORMAL,
                        successScene: M.NQ.Scenes.FINISH
                    }), 2),
                    s = o[0],
                    c = o[1];
                return (0, n.jsx)(M.NQ, {
                    className: a,
                    nextScene: s,
                    onScenePlay: function(e) {
                        return c(M.NQ.getNextScene(e))
                    },
                    pauseWhileUnfocused: !1,
                    pause: i
                })
            }

            function k(e) {
                var t = e.currentStep,
                    r = e.purchaseState,
                    a = e.className,
                    i = e.pause,
                    o = R((0, w.z)({
                        purchaseState: r,
                        currentStep: t,
                        initialScene: M.HC.Scenes.NORMAL,
                        purchaseScene: M.HC.Scenes.SPEED_START,
                        errorScene: M.HC.Scenes.NORMAL,
                        successScene: M.HC.Scenes.FINISH
                    }), 2),
                    s = o[0],
                    c = o[1];
                return (0, n.jsx)(M.HC, {
                    className: a,
                    nextScene: s,
                    onScenePlay: function(e) {
                        return c(M.HC.getNextScene(e))
                    },
                    pauseWhileUnfocused: !1,
                    pause: i
                })
            }

            function D(e) {
                var t = e.currentStep,
                    r = e.purchaseState,
                    a = e.className,
                    i = e.pause,
                    o = R((0, w.z)({
                        purchaseState: r,
                        currentStep: t,
                        initialScene: M.Db.Scenes.IDLE_ENTRY,
                        purchaseScene: M.Db.Scenes.BOOST_START,
                        errorScene: M.Db.Scenes.ERROR,
                        successScene: M.Db.Scenes.BOOST_END
                    }), 2),
                    s = o[0],
                    c = o[1];
                return (0, n.jsx)(M.Db, {
                    className: a,
                    nextScene: s,
                    onScenePlay: function(e) {
                        return c(M.Db.getNextScene(e))
                    },
                    pauseWhileUnfocused: !1,
                    pause: i
                })
            }
            var G = r(937452),
                F = r.n(G);

            function H(e) {
                var t = e.currentStep,
                    r = e.className,
                    a = e.purchaseState,
                    d = e.premiumType,
                    p = e.useWinterTheme,
                    h = void 0 !== p && p,
                    S = e.onClose,
                    y = e.hideCloseButton,
                    L = e.showTrialBadge,
                    C = (0, o.e7)([c.Z], (function() {
                        return c.Z.useReducedMotion
                    })),
                    m = h ? f.nL.WINTER : f.nL.DEFAULT;
                return (0, l.a8)(undefined) && t !== u.h8.CONFIRM ? (0, n.jsx)(s.ModalHeader, {
                    className: F().modalHeaderCustomGift,
                    separator: !1,
                    children: (0, n.jsx)("div", {
                        className: F().giftNitroInfo,
                        children: (0, n.jsx)(s.Heading, {
                            variant: "heading-lg/semibold",
                            children: function() {
                                switch (t) {
                                    case u.h8.PLAN_SELECT:
                                        return T.Z.Messages.GIFT_NITRO_ACTION;
                                    case u.h8.ADD_PAYMENT_STEPS:
                                        return T.Z.Messages.PAYMENT_METHOD_SELECTION;
                                    case u.h8.REVIEW:
                                        return T.Z.Messages.GIFT_PURCHASE_REVIEW;
                                    default:
                                        return T.Z.Messages.GIFT_NITRO_ACTION
                                }
                            }()
                        })
                    })
                }) : (0, n.jsx)(s.ModalHeader, {
                    className: i()(F().modalHeader, r),
                    separator: !1,
                    children: (0, n.jsx)(A, {
                        hideCloseOnFullScreen: !0,
                        hideCloseButton: y,
                        shouldShowPrice: !0,
                        upgradeToPremiumType: d,
                        renderAnimation: function() {
                            return d === E.p9.TIER_0 ? (0, n.jsx)(Z, {
                                className: F().headerAnimation,
                                currentStep: t,
                                purchaseState: a,
                                pause: C
                            }) : d === E.p9.TIER_1 ? (0, n.jsx)(k, {
                                className: F().headerAnimation,
                                currentStep: t,
                                purchaseState: a,
                                pause: C
                            }) : (0, n.jsx)(D, {
                                className: F().headerAnimation,
                                currentStep: t,
                                purchaseState: a,
                                pause: C
                            })
                        },
                        plan: null,
                        isGift: !1,
                        className: F().header,
                        onClose: S,
                        headerTheme: m,
                        showTrialBadge: L
                    })
                })
            }
        },
        111090: (e, t, r) => {
            r.d(t, {
                w: () => f,
                H: () => p
            });
            var n = r(667294),
                a = r(202351),
                i = r(105783),
                o = r(551778),
                s = r(151367),
                c = r(116094),
                u = r(520453),
                l = r(473708);

            function f(e, t, r) {
                n.useEffect((function() {
                    if (null != e && e.isPurchasedExternally && null != e.paymentGateway && !r) {
                        i.Z.show({
                            title: l.Z.Messages.BILLING_EXTERNAL_HEADER.format({
                                paymentGatewayName: u.Vz[e.paymentGateway]
                            }),
                            body: l.Z.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
                                paymentGatewayName: u.Vz[e.paymentGateway],
                                subscriptionManagementLink: (0, c.JE)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                            }),
                            confirmText: l.Z.Messages.OKAY
                        });
                        t()
                    }
                }), [e])
            }
            var d = [];

            function p(e, t) {
                var r = (0, a.e7)([o.Z], (function() {
                        return null != e ? o.Z.get(e) : null
                    })),
                    i = (0, a.e7)([s.Z], (function() {
                        var e;
                        return null != r && null !== (e = s.Z.getForSku(r.skuId)) && void 0 !== e ? e : d
                    })),
                    u = n.useMemo((function() {
                        return Array.from(i).filter((function(e) {
                            var t = e.parentId,
                                r = e.consumed;
                            return null != t && !r
                        }))
                    }), [i]);
                return {
                    hasEntitlements: !t && null != r && null != u && u.length >= c.ZP.getIntervalMonths(r.interval, r.intervalCount),
                    entitlements: u
                }
            }
        }
    }
]);
//# sourceMappingURL=0042ae8e766802dd6330.js.map