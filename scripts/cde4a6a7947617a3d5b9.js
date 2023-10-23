"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [86611], {
        246380: (e, t, n) => {
            n.d(t, {
                Z: () => u
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

            function o(e) {
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
            const u = function(e, t, n, i, u) {
                var l = (0, r.useRef)(!1);
                (0, r.useEffect)((function() {
                    if (t && !l.current) {
                        l.current = !0;
                        var r = setTimeout((function() {
                            var t = new Error("".concat(e, " is taking too long to load."));
                            a.Z.setExtra({
                                loadingState: i,
                                loadingTimeSeconds: n
                            });
                            a.Z.captureException(t, s(o({}, u), {
                                tags: o({}, null == u ? void 0 : u.tags)
                            }))
                        }), 1e3 * n);
                        return function() {
                            clearTimeout(r)
                        }
                    }
                }), [t, n])
            }
        },
        186451: (e, t, n) => {
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
            n.r(t);
            n.d(t, {
                PaymentModal: () => q,
                PaymentPredicateStep: () => J
            });
            var r = n(785893),
                a = n(667294),
                i = n(294184),
                o = n.n(i),
                s = n(685269),
                u = n(318715),
                l = n(70418),
                c = n(595138),
                f = n(246380),
                d = n(123435),
                p = n(186451),
                h = n(817584),
                S = n(344266),
                y = n(785531),
                m = n(83471),
                C = n(909365);
            var L = n(111090),
                v = n(551778),
                b = n(151367),
                g = n(652591),
                E = n(644144),
                O = n(116094),
                I = n(782786),
                T = n(632826),
                _ = n(268226),
                P = n(510142),
                N = n(441143),
                M = n.n(N),
                j = n(777315),
                A = n(467345),
                w = n(621270),
                R = n(717035),
                x = n(882211),
                Z = n(301162),
                k = n(203600),
                D = n(520453),
                G = n(881897),
                F = n.n(G);
            var H = n(28648),
                U = n(149096),
                B = n(2590),
                W = n(473708),
                Y = n(175085),
                z = n.n(Y);

            function K(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function V(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Q(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        V(e, t, n[t])
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

            function $(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            a = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return K(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return K(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function q(e) {
                var t = e.analyticsLocations,
                    n = e.analyticsLocation,
                    i = e.analyticsObject,
                    u = e.analyticsSourceLocation,
                    c = e.analyticsSubscriptionType,
                    f = void 0 === c ? B.NYc.PREMIUM : c,
                    d = e.onComplete,
                    h = e.transitionState,
                    b = e.initialPlanId,
                    _ = e.giftMessage,
                    P = e.subscriptionTier,
                    N = e.onClose,
                    G = e.trialId,
                    H = e.isGift,
                    Y = void 0 !== H && H,
                    K = e.trialFooterMessageOverride,
                    q = e.reviewWarningMessage,
                    J = e.planGroup,
                    ee = void 0 === J ? k.Y1 : J,
                    te = e.openInvoiceId,
                    ne = e.onSubscriptionConfirmation,
                    re = e.renderPurchaseConfirmation,
                    ae = e.postSuccessGuild,
                    ie = e.followupSKUInfo,
                    oe = e.renderHeader,
                    se = e.applicationId,
                    ue = e.guildId,
                    le = e.referralTrialOfferId,
                    ce = e.skuId,
                    fe = e.shakeWhilePurchasing,
                    de = void 0 !== fe && fe,
                    pe = e.isLargeModal,
                    he = void 0 !== pe && pe,
                    Se = e.hideShadow,
                    ye = void 0 !== Se && Se,
                    me = e.returnRef,
                    Ce = (0,
                        I.usePaymentContext)(),
                    Le = Ce.activitySessionId,
                    ve = Ce.purchaseState,
                    be = Ce.setPurchaseState,
                    ge = Ce.selectedSkuId,
                    Ee = Ce.setSelectedSkuId,
                    Oe = Ce.selectedPlan,
                    Ie = Ce.setSelectedPlanId,
                    Te = Ce.setStep,
                    _e = Ce.setPurchaseError,
                    Pe = Ce.paymentAuthenticationState,
                    Ne = Ce.step,
                    Me = Ce.contextMetadata,
                    je = Ce.purchaseTokenAuthState,
                    Ae = Ce.activeSubscription,
                    we = Ce.priceOptions,
                    Re = Ce.hasPaymentSources,
                    xe = Ce.purchaseType,
                    Ze = Ce.giftRecipient,
                    ke = (0, S.Ng)(),
                    De = null != P && !Y && (0, S.Wp)(ke, P),
                    Ge = $(a.useState({
                        load_id: Me.loadId,
                        payment_type: B.Zuq[xe],
                        location: null != n ? n : i,
                        source: u,
                        subscription_type: f,
                        subscription_plan_id: null == Oe ? void 0 : Oe.id,
                        is_gift: Y,
                        eligible_for_trial: null != G,
                        location_stack: t,
                        sku_id: ce,
                        application_id: se,
                        guild_id: ue,
                        payment_modal_version: "v1",
                        activity_session_id: Le,
                        eligible_for_discount: De
                    }), 2),
                    Fe = Ge[0],
                    He = Ge[1],
                    Ue = $(a.useState((0, E.a8)(Ze) ? W.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : void 0), 2),
                    Be = Ue[0],
                    We = Ue[1];
                a.useEffect((function() {
                    He((function(e) {
                        var t = null != Oe ? (0, O.aS)(Oe.id, !1, Y, we) : void 0;
                        return X(Q({}, e), {
                            subscription_plan_id: null == Oe ? void 0 : Oe.id,
                            price: null == t ? void 0 : t.amount,
                            regular_price: null == Oe ? void 0 : Oe.price,
                            currency: we.currency,
                            sku_id: ge
                        })
                    }))
                }), [Oe, ge, Y, we]);
                a.useEffect((function() {
                    g.default.track(B.rMx.PAYMENT_FLOW_STARTED, X(Q({}, Fe), {
                        has_saved_payment_source: Re
                    }))
                }), []);
                a.useEffect((function() {
                    Ie(b);
                    if (null != ce) Ee(ce);
                    else if (null != b) {
                        var e;
                        Ee(null === (e = v.Z.get(b)) || void 0 === e ? void 0 : e.skuId)
                    }
                }), [Ie, Ee, b, ce]);
                var Ye = (0, s.Z)((function() {
                        return Date.now()
                    }), [Ne]),
                    ze = a.useCallback((function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.trackedFromStep,
                            r = t.analyticsDataOverride,
                            a = t.fulfillment;
                        e === m.h8.CONFIRM && (null == d || d(a));
                        Te(e);
                        _e(null);
                        var i = null != n ? n : Ne,
                            o = Date.now();
                        null !== i ? g.default.track(B.rMx.PAYMENT_FLOW_STEP, X(Q({}, Fe, r), {
                            from_step: i,
                            to_step: e === m.h8.ADD_PAYMENT_STEPS ? m.h8.PAYMENT_TYPE : e,
                            step_duration_ms: o - Ye,
                            flow_duration_ms: o - Me.startTime
                        })) : g.default.track(B.rMx.PAYMENT_FLOW_LOADED, X(Q({}, Fe), {
                            initial_step: e,
                            has_saved_payment_source: Re
                        }))
                    }), [Fe, Me.startTime, d, _e, Te, Ne, Ye, Re]),
                    Ke = a.useMemo((function() {
                        return function() {
                            return null == N ? void 0 : N(ve === T.A.COMPLETED)
                        }
                    }), [N, ve]);
                (0, y.bp)(Ne, Pe, ze);
                (0, m.dZ)(Ne, ve, be);
                ! function(e, t, n) {
                    a.useEffect((function() {
                        null != e && e !== m.h8.AWAITING_PURCHASE_TOKEN_AUTH && t === C.I.PENDING ? n(m.h8.AWAITING_PURCHASE_TOKEN_AUTH) : e === m.h8.AWAITING_PURCHASE_TOKEN_AUTH && t === C.I.SUCCESS && n(m.h8.REVIEW)
                    }), [e, t, n])
                }(Ne, je, ze);
                (0, p.Z)(Ke);
                (0, L.w)(Ae, (function() {
                    return N(!1)
                }), Y);
                (0, y.D6)(Pe);
                var Ve = {
                        initialPlanId: b,
                        giftMessage: _,
                        customGiftMessage: Be,
                        setCustomGiftMessage: We,
                        subscriptionTier: P,
                        handleStepChange: ze,
                        handleClose: Ke,
                        analyticsData: Fe,
                        setAnalyticsData: He,
                        trialId: G,
                        trialFooterMessageOverride: K,
                        reviewWarningMessage: q,
                        planGroup: ee,
                        openInvoiceId: te,
                        analyticsLocation: n,
                        onSubscriptionConfirmation: ne,
                        renderPurchaseConfirmation: re,
                        postSuccessGuild: ae,
                        followupSKUInfo: ie,
                        referralTrialOfferId: le
                    },
                    Qe = function(e) {
                        var t, n = e.isGift,
                            i = e.renderHeader,
                            o = e.referralTrialOfferId,
                            s = e.handleClose,
                            u = (0, I.usePaymentContext)(),
                            c = u.selectedSkuId,
                            f = u.step,
                            d = u.selectedPlan,
                            p = u.purchaseState,
                            h = u.selectedGiftStyle,
                            y = u.purchaseType,
                            C = u.giftRecipient,
                            L = w.ZP.useExperiment({
                                location: "cbdb8c_1"
                            }, {
                                autoTrackExposure: !1
                            }).enabled,
                            v = (0, w.rK)();
                        a.useEffect((function() {
                            v && n && w.ZP.trackExposure({
                                location: "cbdb8c_2"
                            })
                        }), [v, n]);
                        var b = L && v && n && c === k.Si.TIER_2,
                            g = (b || (0, E.a8)(C)) && f === m.h8.CONFIRM && null != h,
                            O = null != i && null != f,
                            T = f !== m.h8.SKU_SELECT && null != c,
                            _ = (0, R.N)(o),
                            P = !n && null != _ && null != c && k.nG[_.trial_id].skus.includes(c),
                            N = (0, S.Ng)(),
                            G = null == N || null === (t = N.discount) || void 0 === t ? void 0 : t.plan_ids.some((function(e) {
                                return k.GP[e].skuId === c
                            })),
                            H = !n && null != N && null != c && G;
                        return a.useMemo((function() {
                            if (null != f) {
                                var e = null;
                                if (g) e = (0, r.jsxs)("div", {
                                    className: F().container,
                                    children: [(0, r.jsx)(x.Z, {
                                        defaultAnimationState: A.SR.LOOP,
                                        giftStyle: h,
                                        className: F().seasonalGiftBoxHeaderIcon
                                    }), (0, r.jsx)(l.ModalCloseButton, {
                                        onClick: s,
                                        className: F().closeButton
                                    })]
                                });
                                else if (O) e = i(null != d ? d : null, s, f);
                                else if (y === D.GZ.ONE_TIME) e = (0, r.jsx)(j.t, {
                                    step: f,
                                    onClose: s
                                });
                                else if (T) {
                                    M()(c in k.y7, "invalid sku id: ".concat(c));
                                    e = (0, r.jsx)(Z.Z, {
                                        currentStep: null != f ? f : void 0,
                                        purchaseState: p,
                                        premiumType: k.y7[c],
                                        onClose: s,
                                        useWinterTheme: b,
                                        showTrialBadge: P,
                                        showDiscountBadge: H,
                                        giftRecipient: C
                                    })
                                }
                                return e
                            }
                        }), [b, h, s, p, i, d, c, f, P, H, g, T, O, y, C])
                    }({
                        isGift: Y,
                        renderHeader: oe,
                        referralTrialOfferId: le,
                        handleClose: Ke
                    });
                return (0, r.jsx)(l.Shaker, {
                    className: z().shaker,
                    isShaking: de && ve === T.A.PURCHASING,
                    intensity: 2,
                    children: (0, r.jsx)(l.ModalRoot, {
                        className: o()(z().root, V({}, z().withHeader, null != Qe)),
                        transitionState: h,
                        hideShadow: ye,
                        returnRef: me,
                        size: he ? l.ModalSize.LARGE : l.ModalSize.SMALL,
                        children: (0, r.jsx)(U.ZP, Q({
                            header: Qe,
                            isLargeModal: he
                        }, Ve))
                    })
                })
            }

            function J(e) {
                var t = e.subscriptionTier,
                    n = e.initialPlanId,
                    i = e.handleStepChange,
                    o = e.referralTrialOfferId,
                    s = e.handleClose,
                    l = (0,
                        I.usePaymentContext)(),
                    p = l.activeSubscription,
                    S = l.blockedPayments,
                    y = l.hasFetchedSubscriptions,
                    C = l.hasFetchedSubscriptionPlans,
                    L = l.currencyLoading,
                    v = l.selectedSkuId,
                    g = l.setSelectedPlanId,
                    E = l.isGift,
                    O = l.defaultPlanId,
                    T = l.startedPaymentFlowWithPaymentSourcesRef.current,
                    N = (0, P.Z)({
                        isGift: E,
                        skuId: v,
                        referralTrialOfferId: o
                    }),
                    M = h.k.getCurrentConfig({
                        location: "055ec5_1"
                    }, {
                        autoTrackExposure: !1
                    }).defaultToMonthlyPlan,
                    j = $(a.useState(!0), 2),
                    A = j[0],
                    w = j[1],
                    R = (0, u.ZP)([b.Z], (function() {
                        return b.Z.applicationIdsFetched.has(k.RQ)
                    }));
                a.useEffect((function() {
                    w(!y || !C || L)
                }), [L, C, y]);
                (0, f.Z)("Payment Modal", A, 5, {
                    hasFetchedSubscriptions: y,
                    hasFetchedSubscriptionPlans: C,
                    currencyLoading: L
                }, {
                    tags: {
                        app_context: "billing"
                    }
                });
                a.useEffect((function() {
                    R || (0, c.yD)(k.RQ);
                    if (!A && !S) {
                        var e = (0, _.Kp)({
                            isTrial: N,
                            isGift: E,
                            selectedSkuId: v,
                            startedPaymentFlowWithPaymentSources: T
                        });
                        if (null != n) i(m.h8.REVIEW);
                        else if (e) {
                            var r = (0, _.nA)(v, p, O);
                            g(r);
                            i(m.h8.REVIEW)
                        } else i(null != t ? m.h8.PLAN_SELECT : m.h8.SKU_SELECT)
                    }
                }), [p, S, R, n, A, i, t, v, g, M, N, O, E, T]);
                return A ? (0, r.jsx)(H.Z, {}) : S ? (0, r.jsx)(d.Vq, {
                    onClose: s
                }) : null
            }
        },
        28648: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                a = (n(667294), n(70418)),
                i = n(21045),
                o = n.n(i);

            function s() {
                return (0, r.jsx)(a.Spinner, {
                    className: o().spinner
                })
            }
        },
        268226: (e, t, n) => {
            n.d(t, {
                $g: () => o,
                Kp: () => i,
                nA: () => s
            });
            var r = n(116094),
                a = n(203600);

            function i(e) {
                var t = e.isTrial,
                    n = e.isGift,
                    r = e.selectedSkuId,
                    i = e.startedPaymentFlowWithPaymentSources;
                return !t && !n && null != r && a.YQ.includes(r) && i
            }

            function o(e, t, n) {
                var r = !1;
                if (e && null != t) {
                    null == t.invoiceItems.find((function(e) {
                        return e.subscriptionPlanId === n.id
                    })) && (r = !0)
                }
                return r
            }

            function s(e, t, n) {
                var i = null != t ? (0, r.Af)(t) : null,
                    o = a.mn[e],
                    s = null != n ? n : o;
                null != i ? s === i.planId && s === a.IW[e] ? s = a.mn[e] : s === i.planId && s === a.mn[e] ? s = a.IW[e] : i.planId !== a.Xh.PREMIUM_YEAR_TIER_0 && i.planId !== a.Xh.PREMIUM_YEAR_TIER_1 || s !== a.Xh.PREMIUM_MONTH_TIER_2 || (s = a.Xh.PREMIUM_YEAR_TIER_2) : s === a.Xh.PREMIUM_YEAR_TIER_1 && (s = a.Xh.PREMIUM_MONTH_TIER_1);
                return s
            }
        },
        510142: (e, t, n) => {
            n.d(t, {
                T: () => i,
                Z: () => o
            });
            var r = n(717035),
                a = n(203600);

            function i(e) {
                var t = e.userTrialOffer,
                    n = e.isGift,
                    r = e.skuId;
                return !n && null != t && a.nG[t.trial_id].skus.includes(r)
            }

            function o(e) {
                var t = e.isGift,
                    n = e.skuId,
                    i = e.referralTrialOfferId,
                    o = (0, r.N)(i);
                return !t && null != o && a.nG[o.trial_id].skus.includes(n)
            }
        },
        437763: (e, t, n) => {
            n.d(t, {
                z: () => u
            });
            var r = n(667294),
                a = n(83471),
                i = n(632826);

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function s(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            a = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(e) {
                var t = e.purchaseState,
                    n = e.currentStep,
                    o = e.initialScene,
                    u = e.purchaseScene,
                    l = e.errorScene,
                    c = e.successScene,
                    f = s((0, r.useState)(o), 2),
                    d = f[0],
                    p = f[1];
                (0, r.useEffect)((function() {
                    t === i.A.PURCHASING ? p(u) : t === i.A.FAIL && p(l)
                }), [t, u, l]);
                (0, r.useEffect)((function() {
                    n === a.h8.CONFIRM && p(c)
                }), [n, c]);
                return [d, p]
            }
        },
        301162: (e, t, n) => {
            n.d(t, {
                Z: () => U
            });
            var r = n(785893),
                a = (n(667294), n(294184)),
                i = n.n(a),
                o = n(202351),
                s = n(70418),
                u = n(316878),
                l = n(83471),
                c = n(644144),
                f = n(69427),
                d = n(107364),
                p = n(318586),
                h = n(874414),
                S = n(633878);

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function m(e, t) {
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

            function C(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (a[n] = e[n])
                    }
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                    }
                }
                return a
            }

            function L(e) {
                var t = e.width,
                    n = void 0 === t ? 143 : t,
                    a = e.height,
                    i = void 0 === a ? 41 : a,
                    o = e.color,
                    s = void 0 === o ? "currentColor" : o,
                    u = e.foreground,
                    l = C(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", m(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            y(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, S.Z)(l)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 143 41",
                    children: [(0, r.jsx)("title", {
                        children: "Nitro Classic"
                    }), (0, r.jsx)("g", {
                        fill: s,
                        className: u,
                        fillRule: "evenodd",
                        "aria-hidden": !0,
                        children: (0, r.jsx)("path", {
                            d: "M98.4808161 8.67851957L97.2236004 17.1425324C96.9366613 19.1428254 94.6742302 20.0716236 92.5917164 20.0716236 90.6527882 20.0716236 88.7494953 19.1428254 89.0007991 17.3214804L90.2578987 8.67851957C90.5449539 6.7854799 92.807385 5.82123843 94.8897827 5.82123843 96.9722965 5.82123843 98.7678712 6.7854799 98.4808161 8.67851957M95.8844352.00380986213L95.8851317 0 82.3544217 0C82.0087483 0 81.715309.252259053 81.6652804.592375835L81.0074795 5.06376857C80.9459594 5.48181435 81.2717838 5.85668169 81.6965047 5.85668169L84.1674077 5.85668169C84.4160419 5.85668169 84.5858606 6.10882529 84.4882409 6.33626252 84.1799439 7.05517195 83.9553375 7.83561644 83.8305561 8.67851957L82.5733404 17.3214804C81.7473459 23.1071601 86.5954788 26 91.8735561 26 97.4035177 26 102.825761 23.1071601 103.651756 17.3214804L104.908275 8.67851957C105.717903 3.00713572 101.040981.115796719 95.8844352.00380986213M15.296869 11.3489531L15.3645208 15.4968998C15.3658783 15.5821668 15.3090871 15.6571606 15.2271809 15.6781634L15.2270678 15.6781634 13.8302517 10.6749217C13.8282154 10.6672739 13.8256134 10.6598544 13.8224457 10.6525491L9.48877489.415833402C9.38198017.163685177 9.13637494 0 8.86452355 0L3.95343718 0C3.6148391 0 3.32805455.251805788 3.28121873.590019998L.00667092325 24.2202696C-.050459726 24.632222.26664366 25 .678889375 25L5.57119616 25C5.91024677 25 6.19737071 24.7475093 6.24364088 24.4086103L7.52608254 15.0207974C7.52732697 15.0116657 7.52789262 15.0023057 7.52777949 14.9930599L7.45775202 10.1692555 7.5975807 10.1340986 9.06465052 15.1374545C9.06679999 15.1445315 9.06928885 15.1516085 9.07223023 15.1584573L13.1252256 24.587591C13.2328122 24.8379129 13.4775124 25 13.7478931 25L19.045884 25C19.3844821 25 19.6712667 24.7481942 19.7181025 24.40998L22.9933291.779730433C23.0504597.367777991 22.7333563 0 22.3211106 0L17.4621772 0C17.1236922 0 16.8369077.251577496 16.7899587.589791707L15.298566 11.3204166C15.2973215 11.3298907 15.2967559 11.3393648 15.296869 11.3489531M24.7126791 25L29.8497922 25C30.205243 25 30.5063014 24.7483072 30.5554684 24.4099773L33.9929971.779733993C34.0529712.36777967 33.7200849 0 33.2873209 0L28.1502078 0C27.7948757 0 27.4938173.251692791 27.4445316.590022692L24.0070029 24.220266C23.9470288 24.6322203 24.2799151 25 24.7126791 25M37.6698384.584862647L37.0075033 4.99943007C36.9456869 5.41217371 37.2736994 5.78240055 37.7012724 5.78240055L42.9904877 5.78240055C43.4157236 5.78240055 43.7430349 6.14863787 43.6850747 6.55955773L41.1933721 24.2228428C41.1354119 24.6337627 41.4627233 25 41.8879592 25L47.0155637 25C47.3658955 25 47.6624739 24.7477488 47.7101508 24.4093241L50.2545552 6.37307648C50.3022321 6.03453779 50.5988105 5.78240055 50.9491423 5.78240055L56.6358988 5.78240055C56.9838934 5.78240055 57.2791864 5.53345492 57.3296679 5.1975379L57.9924704.782970478C58.0544036.370226832 57.7263911 0 57.2987013 0L38.3636075 0C38.0156128 0 37.7202029.248945629 37.6698384.584862647M73.4002223 8.72158326C73.2199776 10.1691878 72.0692022 11.6169065 70.0902313 11.6169065L67.1170073 11.6169065C66.6926763 11.6169065 66.3664914 11.2480995 66.4261466 10.8356886L67.0554915 6.48511303C67.104332 6.147468 67.3988868 5.89657424 67.7463521 5.89657424L70.9177291 5.89657424C72.8244858 5.89657424 73.5797693 7.20309382 73.4002223 8.72158326M71.6373126 0L62.0638753 0C61.7158285 0 61.4210412.251692791 61.3727821.590022692L58.0068571 24.220266C57.9481322 24.6322203 58.2740844 25 58.697834 25L63.7988762 25C64.1473881 25 64.4425243 24.7475082 64.4900856 24.4086076L65.4806177 17.3505938C65.5044565 17.1812005 65.6519083 17.0549546 65.8262224 17.0549546L66.4819644 17.0549546C66.6009259 17.0549546 66.7117473 17.1144249 66.7758214 17.2128191L71.6474295 24.6843852C71.775694 24.8810595 71.9971043 25 72.2350273 25L78.5355692 25C79.0999096 25 79.4307459 24.3765324 79.1072357 23.9225722L73.9950299 16.7493848C73.8724635 16.5773661 73.935491 16.3380012 74.1277133 16.245885 77.3914221 14.6802531 79.2866664 13.0763822 79.911476 8.61554126 80.6303618 2.75412411 76.8897603 0 71.6373126 0M5.93350799 37.6155526L7.71275643 38.4952518C7.80947956 38.5430729 7.84912249 38.6602491 7.80130141 38.7569722 7.79608029 38.7675325 7.78991472 38.7775989 7.78288005 38.7870484 7.78288005 38.7870484 7.78288005 38.7870484 7.78288005 38.7870484 6.5023978 40.5070853 5.02480222 41 3.72982215 41 1.63490599 41-.294225433 39.7760989.0373440313 37.3434066L.549769566 33.6565934C.88133903 31.239011 3.1721826 30 5.31231277 30 6.56433391 30 7.99499405 30.5097346 8.63332448 32.2132515 8.63332448 32.2132515 8.63332448 32.2132515 8.63332448 32.2132515L8.63332448 32.2132515C8.68451961 32.3498763 8.61597686 32.5022247 8.4797766 32.5545387L6.63222277 33.2642011C6.50733795 33.312169 6.36596186 33.2651964 6.29461441 33.1520298 6.29461441 33.1520298 6.29461441 33.1520298 6.29461441 33.1520298 6.00467959 32.6921544 5.44749743 32.4931319 4.89031528 32.4931319 4.12167697 32.5082418 3.35303867 32.9313187 3.2475393 33.6565934L2.73511376 37.3434066C2.62961439 38.0384615 3.29275331 38.4766484 4.04632028 38.4766484 4.60310978 38.4766484 5.22108254 38.2435573 5.60253663 37.6999958 5.60253663 37.6999958 5.60253663 37.6999958 5.60253663 37.6999958L5.60253663 37.6999958C5.67690475 37.5940233 5.81746419 37.5581537 5.93351807 37.6155322zM59.2832028 37.6155526L61.0624512 38.4952518C61.1591744 38.5430729 61.1988173 38.6602491 61.1509962 38.7569722 61.1457751 38.7675325 61.1396095 38.7775989 61.1325749 38.7870484 61.1325749 38.7870484 61.1325749 38.7870484 61.1325749 38.7870484 59.8520926 40.5070853 58.374497 41 57.079517 41 54.9846008 41 53.0554694 39.7760989 53.3870388 37.3434066L53.8994644 33.6565934C54.2310338 31.239011 56.5218774 30 58.6620076 30 59.9140287 30 61.3446889 30.5097346 61.9830193 32.2132515 61.9830193 32.2132515 61.9830193 32.2132515 61.9830193 32.2132515L61.9830193 32.2132515C62.0342144 32.3498763 61.9656717 32.5022247 61.8294714 32.5545387L59.9819176 33.2642011C59.8570328 33.312169 59.7156567 33.2651964 59.6443092 33.1520298 59.6443092 33.1520298 59.6443092 33.1520298 59.6443092 33.1520298 59.3543744 32.6921544 58.7971922 32.4931319 58.2400101 32.4931319 57.4713718 32.5082418 56.7027335 32.9313187 56.5972341 33.6565934L56.0848086 37.3434066C55.9793092 38.0384615 56.6424481 38.4766484 57.3960151 38.4766484 57.9528046 38.4766484 58.5707773 38.2435573 58.9522314 37.6999958 58.9522314 37.6999958 58.9522314 37.6999958 58.9522314 37.6999958L58.9522314 37.6999958C59.0265995 37.5940233 59.167159 37.5581537 59.2832129 37.6155322zM9.55137248 40.2798328L10.9039613 30.5820306C10.9384202 30.3349668 11.1497126 30.1510989 11.3991679 30.1510989L13.1015272 30.1510989C13.3776695 30.1510989 13.6015272 30.3749565 13.6015272 30.6510989 13.6015272 30.6744353 13.5998934 30.6977431 13.5966378 30.7208514L12.6268238 37.6046981C12.5883006 37.8781402 12.7787399 38.131038 13.052182 38.1695612 13.0752902 38.1728168 13.0985981 38.1744505 13.1219345 38.1744505L16.3149254 38.1744505C16.5910678 38.1744505 16.8149254 38.3983082 16.8149254 38.6744505 16.8149254 38.6968642 16.8134183 38.7192526 16.8104143 38.7414641L16.5839494 40.4159146C16.55041 40.6639006 16.3387043 40.8489011 16.0884606 40.8489011L10.0465791 40.8489011C9.7704367 40.8489011 9.54657907 40.6250435 9.54657907 40.3489011 9.54657907 40.3257952 9.54818071 40.3027171 9.55137248 40.2798328zM25.2618169 30.5450857L27.365844 40.2428879C27.4243935 40.5127519 27.2530892 40.7789836 26.9832252 40.8375331 26.9483937 40.8450901 26.9128539 40.8489011 26.877212 40.8489011L25.017712 40.8489011C24.7774965 40.8489011 24.5712291 40.6780766 24.5264688 40.4420682L24.273859 39.1101296C24.2290987 38.8741212 24.0228313 38.7032967 23.7826158 38.7032967L21.6737234 38.7032967C21.475839 38.7032967 21.2965724 38.8200012 21.2164933 39.0009587L20.5304477 40.5512391C20.4503686 40.7321966 20.2711021 40.8489011 20.0732176 40.8489011L18.3049929 40.8489011C18.0288505 40.8489011 17.8049929 40.6250435 17.8049929 40.3489011 17.8049929 40.2729821 17.8222812 40.1980599 17.8555465 40.1298168L22.5827762 30.4320146C22.6665559 30.2601425 22.8410184 30.1510989 23.0322226 30.1510989L24.773185 30.1510989C25.0084749 30.1510989 25.2119293 30.3151453 25.2618169 30.5450857zM22.2977121 36.3008242L23.895274 36.3008242 23.5787759 33.1730769 23.4732765 33.1730769 22.2977121 36.3008242zM28.4615085 38.7933304L29.6600776 37.7982307C29.867419 37.6260869 30.1698805 37.6329436 30.3692081 37.8143064 30.3692081 37.8143064 30.3692081 37.8143064 30.3692081 37.8143064 30.8626279 38.2632556 31.5697924 38.4917582 32.2174996 38.4917582 32.9409239 38.4917582 33.5739201 38.2348901 33.6794195 37.6758242 33.7999902 37.010989 32.8655672 36.7239011 32.0065008 36.603022 30.3335822 36.331044 28.8264482 34.9862637 29.2032317 32.9615385 29.6101579 30.7706044 31.5392893 30 33.4985634 30 34.6675402 30 35.7629615 30.294974 36.6410928 31.3393989 36.6410928 31.3393989 36.6410928 31.3393989 36.6410928 31.3393989L36.6410928 31.3393989C36.7911777 31.5179057 36.7681372 31.784282 36.5896304 31.9343669 36.5796762 31.9427362 36.5693406 31.9506412 36.5586568 31.9580566L35.2852973 32.8418354C35.1082978 32.964687 34.8717504 32.9572254 34.7028454 32.8234627 34.7028454 32.8234627 34.7028454 32.8234627 34.7028454 32.8234627 34.2644214 32.476257 33.6924031 32.3091824 33.1820653 32.2967033 32.503855 32.2815934 31.9311441 32.5384615 31.8708588 33.0824176 31.7955021 33.7019231 32.3380703 33.9739011 33.1519226 34.1552198 35.0056973 34.5027473 36.8142581 35.2129121 36.3169039 37.8722527 35.925049 39.9574176 34.1164883 41 31.8105734 41 30.6586546 41 29.2630198 40.4746703 28.4016401 39.4349963 28.4016401 39.4349963 28.4016401 39.4349963 28.4016401 39.4349963L28.4016401 39.4349963C28.2411035 39.2412306 28.2678891 38.9540435 28.4614898 38.7933078zM38.3784498 38.7933304L39.5770189 37.7982307C39.7843603 37.6260869 40.0868217 37.6329436 40.2861493 37.8143064 40.2861493 37.8143064 40.2861493 37.8143064 40.2861493 37.8143064 40.7795691 38.2632556 41.4867336 38.4917582 42.1344408 38.4917582 42.8578651 38.4917582 43.4908613 38.2348901 43.5963607 37.6758242 43.7169314 37.010989 42.7825084 36.7239011 41.9234421 36.603022 40.2505234 36.331044 38.7433895 34.9862637 39.120173 32.9615385 39.5270991 30.7706044 41.4562305 30 43.4155046 30 44.5844814 30 45.6799028 30.294974 46.558034 31.3393989 46.558034 31.3393989 46.558034 31.3393989 46.558034 31.3393989L46.558034 31.3393989C46.708119 31.5179057 46.6850785 31.784282 46.5065716 31.9343669 46.4966174 31.9427362 46.4862819 31.9506412 46.4755981 31.9580566L45.2022385 32.8418354C45.025239 32.964687 44.7886916 32.9572254 44.6197866 32.8234627 44.6197866 32.8234627 44.6197866 32.8234627 44.6197866 32.8234627 44.1813626 32.476257 43.6093444 32.3091824 43.0990065 32.2967033 42.4207963 32.2815934 41.8480854 32.5384615 41.7878 33.0824176 41.7124433 33.7019231 42.2550115 33.9739011 43.0688638 34.1552198 44.9226386 34.5027473 46.7311993 35.2129121 46.2338451 37.8722527 45.8419903 39.9574176 44.0334296 41 41.7275147 41 40.5755958 41 39.179961 40.4746703 38.3185814 39.4349963 38.3185814 39.4349963 38.3185814 39.4349963 38.3185814 39.4349963L38.3185814 39.4349963C38.1580447 39.2412306 38.1848304 38.9540435 38.378431 38.7933078zM51.984237 30.7201672L50.6316481 40.4179694C50.5971892 40.6650332 50.3858968 40.8489011 50.1364415 40.8489011L48.4483514 40.8489011C48.1722091 40.8489011 47.9483514 40.6250435 47.9483514 40.3489011 47.9483514 40.3257952 47.9499531 40.3027171 47.9531448 40.2798328L49.3057337 30.5820306C49.3401926 30.3349668 49.551485 30.1510989 49.8009403 30.1510989L51.4890304 30.1510989C51.7651728 30.1510989 51.9890304 30.3749565 51.9890304 30.6510989 51.9890304 30.6742048 51.9874287 30.6972829 51.984237 30.7201672z"
                        })
                    })]
                }))
            }

            function v(e) {
                var t = e.className;
                return (0, r.jsxs)("svg", {
                    width: "135",
                    height: "32",
                    viewBox: "0 0 135 32",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: t,
                    children: [(0, r.jsx)("path", {
                        d: "M2.17332 27.8901L6.92419 26.1319C7.02527 26.044 7.02527 25.9561 6.92419 25.9561L2.17332 24.1099L0.050529 20.0659C0.050529 19.978 -0.0505667 19.978 -0.15165 20.0659L-2.17332 24.1099H-2.27438L-6.92419 25.9561C-7.02527 25.9561 -7.02527 26.044 -6.92419 26.1319L-2.27438 27.8901H-2.17332L-0.15165 31.9341C-0.0505667 32.022 0.050529 32.022 0.050529 31.9341L2.17332 27.8901Z",
                        fill: "#F2F3F5"
                    }), (0, r.jsx)("path", {
                        d: "M6.7581 18.6026L4.04332 17.5769C3.98556 17.5256 3.98556 17.4744 4.04332 17.4744L6.7581 16.3974L7.97113 14.0385C7.97113 13.9872 8.0289 13.9872 8.08666 14.0385L9.2419 16.3974H9.29964L11.9567 17.4744C12.0144 17.4744 12.0144 17.5256 11.9567 17.5769L9.29964 18.6026H9.2419L8.08666 20.9615C8.0289 21.0128 7.97113 21.0128 7.97113 20.9615L6.7581 18.6026Z",
                        fill: "#F2F3F5"
                    }), (0, r.jsx)("path", {
                        d: "M129.758 12.6026L127.043 11.5769C126.986 11.5256 126.986 11.4744 127.043 11.4744L129.758 10.3974L130.971 8.03846C130.971 7.98718 131.029 7.98718 131.087 8.03846L132.242 10.3974H132.3L134.957 11.4744C135.014 11.4744 135.014 11.5256 134.957 11.5769L132.3 12.6026H132.242L131.087 14.9615C131.029 15.0128 130.971 15.0128 130.971 14.9615L129.758 12.6026Z",
                        fill: "#F2F3F5"
                    }), (0, r.jsx)("path", {
                        d: "M116.482 7.2326L112.07 5.62087C111.977 5.54029 111.977 5.45972 112.07 5.45972L116.482 3.7674L118.453 0.0604396C118.453 -0.0201465 118.547 -0.0201465 118.641 0.0604396L120.518 3.7674H120.612L124.93 5.45972C125.023 5.45972 125.023 5.54029 124.93 5.62087L120.612 7.2326H120.518L118.641 10.9396C118.547 11.0201 118.453 11.0201 118.453 10.9396L116.482 7.2326Z",
                        fill: "#F2F3F5"
                    })]
                })
            }
            var b = n(507965),
                g = n(116094),
                E = n(575641),
                O = n(344266),
                I = n(203600),
                T = n(473708),
                _ = n(187205),
                P = n.n(_);

            function N(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function M(e, t) {
                var n = g.ZP.getDefaultPrice(e),
                    r = g.ZP.getInterval(e).intervalType,
                    a = (0, E.T4)(n.amount, n.currency);
                if (t) return a;
                switch (r) {
                    case I.rV.MONTH:
                        return T.Z.Messages.BILLING_PRICE_PER_MONTH.format({
                            price: a
                        });
                    case I.rV.YEAR:
                        return T.Z.Messages.BILLING_PRICE_PER_YEAR.format({
                            price: a
                        })
                }
            }
            var j = function(e) {
                var t = e.isTier0,
                    n = e.discountAmount;
                return (0, r.jsx)("div", {
                    className: P().trialBadgeContainer,
                    children: (0, r.jsx)(s.Text, {
                        variant: "text-xs/bold",
                        className: i()(P().trialOfferText, N({}, P().tier0TrialOffer, t)),
                        children: void 0 !== n ? T.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                            percent: n
                        }) : T.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT
                    })
                })
            };
            const A = function(e) {
                var t, n, a = e.hideCloseButton,
                    l = void 0 !== a && a,
                    c = e.hideCloseOnFullScreen,
                    S = e.shouldShowPrice,
                    y = e.plan,
                    m = e.renderAnimation,
                    C = e.onClose,
                    g = e.isGift,
                    E = e.upgradeToPremiumType,
                    T = e.headerTheme,
                    _ = void 0 === T ? f.nL.DEFAULT : T,
                    A = e.className,
                    w = e.showTrialBadge,
                    R = void 0 !== w && w,
                    x = e.showDiscountBadge,
                    Z = void 0 !== x && x,
                    k = E === I.p9.TIER_2;
                n = E === I.p9.TIER_0 ? h.Z : E === I.p9.TIER_1 ? L : p.Z;
                var D, G = (0, o.e7)([u.Z], (function() {
                        return u.Z.useReducedMotion
                    })),
                    F = (0, O.Ng)(),
                    H = null == F || null === (t = F.discount) || void 0 === t ? void 0 : t.amount;
                return (0, r.jsxs)("div", {
                    "aria-hidden": !0,
                    className: i()((D = {}, N(D, P().headerBackground, !k), N(D, _ === f.nL.WINTER ? P().tier2HeaderBackgroundWinterTheme : P().tier2HeaderBackground, k), D), A),
                    children: [G || _ !== f.nL.WINTER ? null : (0, r.jsx)(b.Z, {
                        className: P().snow,
                        wind: 5
                    }), (R || Z) && (0, r.jsx)(v, {
                        className: P().trialBadgeSparkles
                    }), m(), (0, r.jsxs)(d.Z, {
                        align: d.Z.Align.START,
                        justify: d.Z.Justify.BETWEEN,
                        className: P().headerTop,
                        children: [(0, r.jsxs)("div", {
                            children: [(0, r.jsx)(n, {
                                className: i()(P().headerIcon, N({}, P().nonTier2, !k))
                            }), (R || Z) && (0, r.jsx)(j, {
                                isTier0: E === I.p9.TIER_0,
                                discountAmount: Z ? H : void 0
                            })]
                        }), !l && (0, r.jsx)(s.ModalCloseButton, {
                            hideOnFullscreen: c,
                            onClick: C,
                            className: P().closeButton
                        })]
                    }), S && null != y ? (0, r.jsx)("div", {
                        className: P().price,
                        children: M(y, g)
                    }) : null]
                })
            };
            var w = n(630689),
                R = n(437763);

            function x(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Z(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            a = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return x(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return x(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function k(e) {
                var t = e.currentStep,
                    n = e.purchaseState,
                    a = e.className,
                    i = e.pause,
                    o = Z((0, R.z)({
                        purchaseState: n,
                        currentStep: t,
                        initialScene: w.NQ.Scenes.NORMAL,
                        purchaseScene: w.NQ.Scenes.SPEED_START,
                        errorScene: w.NQ.Scenes.NORMAL,
                        successScene: w.NQ.Scenes.FINISH
                    }), 2),
                    s = o[0],
                    u = o[1];
                return (0, r.jsx)(w.NQ, {
                    className: a,
                    nextScene: s,
                    onScenePlay: function(e) {
                        return u(w.NQ.getNextScene(e))
                    },
                    pauseWhileUnfocused: !1,
                    pause: i
                })
            }

            function D(e) {
                var t = e.currentStep,
                    n = e.purchaseState,
                    a = e.className,
                    i = e.pause,
                    o = Z((0, R.z)({
                        purchaseState: n,
                        currentStep: t,
                        initialScene: w.HC.Scenes.NORMAL,
                        purchaseScene: w.HC.Scenes.SPEED_START,
                        errorScene: w.HC.Scenes.NORMAL,
                        successScene: w.HC.Scenes.FINISH
                    }), 2),
                    s = o[0],
                    u = o[1];
                return (0, r.jsx)(w.HC, {
                    className: a,
                    nextScene: s,
                    onScenePlay: function(e) {
                        return u(w.HC.getNextScene(e))
                    },
                    pauseWhileUnfocused: !1,
                    pause: i
                })
            }

            function G(e) {
                var t = e.currentStep,
                    n = e.purchaseState,
                    a = e.className,
                    i = e.pause,
                    o = Z((0, R.z)({
                        purchaseState: n,
                        currentStep: t,
                        initialScene: w.Db.Scenes.IDLE_ENTRY,
                        purchaseScene: w.Db.Scenes.BOOST_START,
                        errorScene: w.Db.Scenes.ERROR,
                        successScene: w.Db.Scenes.BOOST_END
                    }), 2),
                    s = o[0],
                    u = o[1];
                return (0, r.jsx)(w.Db, {
                    className: a,
                    nextScene: s,
                    onScenePlay: function(e) {
                        return u(w.Db.getNextScene(e))
                    },
                    pauseWhileUnfocused: !1,
                    pause: i
                })
            }
            var F = n(950452),
                H = n.n(F);

            function U(e) {
                var t = e.currentStep,
                    n = e.className,
                    a = e.purchaseState,
                    d = e.premiumType,
                    p = e.useWinterTheme,
                    h = void 0 !== p && p,
                    S = e.onClose,
                    y = e.hideCloseButton,
                    m = e.showTrialBadge,
                    C = e.showDiscountBadge,
                    L = e.giftRecipient,
                    v = (0, o.e7)([u.Z], (function() {
                        return u.Z.useReducedMotion
                    })),
                    b = h ? f.nL.WINTER : f.nL.DEFAULT;
                return (0, c.a8)(L) && t !== l.h8.CONFIRM ? (0, r.jsxs)(s.ModalHeader, {
                    className: H().modalHeaderCustomGift,
                    separator: !1,
                    children: [(0, r.jsx)("div", {
                        className: H().giftNitroInfo,
                        children: (0, r.jsx)(s.Heading, {
                            variant: "heading-lg/semibold",
                            children: function() {
                                switch (t) {
                                    case l.h8.PLAN_SELECT:
                                        return T.Z.Messages.GIFT_NITRO_ACTION;
                                    case l.h8.ADD_PAYMENT_STEPS:
                                        return T.Z.Messages.PAYMENT_METHOD_SELECTION;
                                    case l.h8.REVIEW:
                                        return T.Z.Messages.GIFT_PURCHASE_REVIEW;
                                    default:
                                        return T.Z.Messages.GIFT_NITRO_ACTION
                                }
                            }()
                        })
                    }), (0, r.jsx)(s.ModalCloseButton, {
                        onClick: S,
                        className: H().closeButton
                    })]
                }) : (0, r.jsx)(s.ModalHeader, {
                    className: i()(H().modalHeader, n),
                    separator: !1,
                    children: (0, r.jsx)(A, {
                        hideCloseOnFullScreen: !0,
                        hideCloseButton: y,
                        shouldShowPrice: !0,
                        upgradeToPremiumType: d,
                        renderAnimation: function() {
                            return d === I.p9.TIER_0 ? (0, r.jsx)(k, {
                                className: H().headerAnimation,
                                currentStep: t,
                                purchaseState: a,
                                pause: v
                            }) : d === I.p9.TIER_1 ? (0, r.jsx)(D, {
                                className: H().headerAnimation,
                                currentStep: t,
                                purchaseState: a,
                                pause: v
                            }) : (0, r.jsx)(G, {
                                className: H().headerAnimation,
                                currentStep: t,
                                purchaseState: a,
                                pause: v
                            })
                        },
                        plan: null,
                        isGift: !1,
                        className: H().header,
                        onClose: S,
                        headerTheme: b,
                        showTrialBadge: m,
                        showDiscountBadge: C
                    })
                })
            }
        },
        111090: (e, t, n) => {
            n.d(t, {
                H: () => p,
                w: () => f
            });
            var r = n(667294),
                a = n(202351),
                i = n(105783),
                o = n(551778),
                s = n(151367),
                u = n(116094),
                l = n(520453),
                c = n(473708);

            function f(e, t, n) {
                r.useEffect((function() {
                    if (null != e && e.isPurchasedExternally && null != e.paymentGateway && !n) {
                        i.Z.show({
                            title: c.Z.Messages.BILLING_EXTERNAL_HEADER.format({
                                paymentGatewayName: l.Vz[e.paymentGateway]
                            }),
                            body: c.Z.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
                                paymentGatewayName: l.Vz[e.paymentGateway],
                                subscriptionManagementLink: (0, u.JE)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                            }),
                            confirmText: c.Z.Messages.OKAY
                        });
                        t()
                    }
                }), [e])
            }
            var d = [];

            function p(e, t) {
                var n = (0, a.e7)([o.Z], (function() {
                        return null != e ? o.Z.get(e) : null
                    })),
                    i = (0, a.e7)([s.Z], (function() {
                        var e;
                        return null != n && null !== (e = s.Z.getForSku(n.skuId)) && void 0 !== e ? e : d
                    })),
                    l = r.useMemo((function() {
                        return Array.from(i).filter((function(e) {
                            var t = e.parentId,
                                n = e.consumed;
                            return null != t && !n
                        }))
                    }), [i]);
                return {
                    hasEntitlements: !t && null != n && null != l && l.length >= u.ZP.getIntervalMonths(n.interval, n.intervalCount),
                    entitlements: l
                }
            }
        }
    }
]);