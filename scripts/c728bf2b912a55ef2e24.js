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
                PaymentModal: () => J,
                PaymentPredicateStep: () => X
            });
            var r = t(785893),
                i = t(667294),
                a = t(294184),
                s = t.n(a),
                l = t(685269),
                o = t(318715),
                c = t(304548),
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
                b = t(652591),
                T = t(644144),
                _ = t(694329),
                g = t(782786),
                A = t(632826),
                O = t(510142),
                x = t(441143),
                j = t.n(x),
                C = t(777315),
                N = t(467345),
                M = t(621270),
                L = t(344266),
                w = t(717035),
                R = t(882211),
                Z = t(301162),
                G = t(203600),
                k = t(520453),
                D = t(881897),
                F = t.n(D);
            var U = t(28648),
                W = t(149096),
                H = t(2590),
                B = t(473708),
                Y = t(175085),
                K = t.n(Y);

            function V(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function $(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function z(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        $(e, n, t[n])
                    }))
                }
                return e
            }

            function Q(e, n) {
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

            function q(e, n) {
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
                    if ("string" == typeof e) return V(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return V(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function J(e) {
                var n = e.analyticsLocations,
                    t = e.analyticsLocation,
                    a = e.analyticsObject,
                    o = e.analyticsSourceLocation,
                    u = e.analyticsSubscriptionType,
                    d = void 0 === u ? H.NYc.PREMIUM : u,
                    p = e.onComplete,
                    m = e.transitionState,
                    S = e.initialPlanId,
                    v = e.giftMessage,
                    O = e.subscriptionTier,
                    x = e.onClose,
                    D = e.trialId,
                    U = e.isGift,
                    Y = void 0 !== U && U,
                    V = e.trialFooterMessageOverride,
                    J = e.reviewWarningMessage,
                    X = e.planGroup,
                    ee = void 0 === X ? G.Y1 : X,
                    ne = e.openInvoiceId,
                    te = e.onSubscriptionConfirmation,
                    re = e.renderPurchaseConfirmation,
                    ie = e.postSuccessGuild,
                    ae = e.followupSKUInfo,
                    se = e.renderHeader,
                    le = e.applicationId,
                    oe = e.guildId,
                    ce = e.referralTrialOfferId,
                    ue = e.skuId,
                    de = e.shakeWhilePurchasing,
                    pe = void 0 !== de && de,
                    fe = e.isLargeModal,
                    me = void 0 !== fe && fe,
                    Se = e.hideShadow,
                    ye = void 0 !== Se && Se,
                    he = (0,
                        g.usePaymentContext)(),
                    Ie = he.activitySessionId,
                    Ee = he.purchaseState,
                    Pe = he.setPurchaseState,
                    ve = he.selectedSkuId,
                    be = he.setSelectedSkuId,
                    Te = he.selectedPlan,
                    _e = he.setSelectedPlanId,
                    ge = he.setStep,
                    Ae = he.setPurchaseError,
                    Oe = he.paymentAuthenticationState,
                    xe = he.step,
                    je = he.contextMetadata,
                    Ce = he.purchaseTokenAuthState,
                    Ne = he.activeSubscription,
                    Me = he.priceOptions,
                    Le = he.hasPaymentSources,
                    we = he.purchaseType,
                    Re = he.giftRecipient,
                    Ze = q(i.useState({
                        load_id: je.loadId,
                        payment_type: H.Zuq[we],
                        location: null != t ? t : a,
                        source: o,
                        subscription_type: d,
                        subscription_plan_id: null == Te ? void 0 : Te.id,
                        is_gift: Y,
                        eligible_for_trial: null != D,
                        location_stack: n,
                        sku_id: ue,
                        application_id: le,
                        guild_id: oe,
                        payment_modal_version: "v1",
                        activity_session_id: Ie
                    }), 2),
                    Ge = Ze[0],
                    ke = Ze[1],
                    De = q(i.useState((0, T.a8)(Re) ? B.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : void 0), 2),
                    Fe = De[0],
                    Ue = De[1];
                i.useEffect((function() {
                    ke((function(e) {
                        var n = null != Te ? (0, _.aS)(Te.id, !1, Y, Me) : void 0;
                        return Q(z({}, e), {
                            subscription_plan_id: null == Te ? void 0 : Te.id,
                            price: null == n ? void 0 : n.amount,
                            regular_price: null == Te ? void 0 : Te.price,
                            currency: Me.currency,
                            sku_id: ve
                        })
                    }))
                }), [Te, ve, Y, Me]);
                i.useEffect((function() {
                    b.default.track(H.rMx.PAYMENT_FLOW_STARTED, Q(z({}, Ge), {
                        has_saved_payment_source: Le
                    }))
                }), []);
                i.useEffect((function() {
                    _e(S);
                    if (null != ue) be(ue);
                    else if (null != S) {
                        var e;
                        be(null === (e = P.Z.get(S)) || void 0 === e ? void 0 : e.skuId)
                    }
                }), [_e, be, S, ue]);
                var We = (0, l.Z)((function() {
                        return Date.now()
                    }), [xe]),
                    He = i.useCallback((function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            t = n.trackedFromStep,
                            r = n.analyticsDataOverride,
                            i = n.fulfillment;
                        e === h.h8.CONFIRM && (null == p || p(i));
                        ge(e);
                        Ae(null);
                        var a = null != t ? t : xe,
                            s = Date.now();
                        null !== a ? b.default.track(H.rMx.PAYMENT_FLOW_STEP, Q(z({}, Ge, r), {
                            from_step: a,
                            to_step: e === h.h8.ADD_PAYMENT_STEPS ? h.h8.PAYMENT_TYPE : e,
                            step_duration_ms: s - We,
                            flow_duration_ms: s - je.startTime
                        })) : b.default.track(H.rMx.PAYMENT_FLOW_LOADED, Q(z({}, Ge), {
                            initial_step: e,
                            has_saved_payment_source: Le
                        }))
                    }), [Ge, je.startTime, p, Ae, ge, xe, We, Le]),
                    Be = i.useMemo((function() {
                        return function() {
                            return null == x ? void 0 : x(Ee === A.A.COMPLETED)
                        }
                    }), [x, Ee]);
                (0, y.bp)(xe, Oe, He);
                (0, h.dZ)(xe, Ee, Pe);
                ! function(e, n, t) {
                    i.useEffect((function() {
                        null != e && e !== h.h8.AWAITING_PURCHASE_TOKEN_AUTH && n === I.I.PENDING ? t(h.h8.AWAITING_PURCHASE_TOKEN_AUTH) : e === h.h8.AWAITING_PURCHASE_TOKEN_AUTH && n === I.I.SUCCESS && t(h.h8.REVIEW)
                    }), [e, n, t])
                }(xe, Ce, He);
                (0, f.Z)(Be);
                (0, E.w)(Ne, (function() {
                    return x(!1)
                }), Y);
                (0, y.D6)(Oe);
                var Ye = {
                        initialPlanId: S,
                        giftMessage: v,
                        customGiftMessage: Fe,
                        setCustomGiftMessage: Ue,
                        subscriptionTier: O,
                        handleStepChange: He,
                        handleClose: Be,
                        analyticsData: Ge,
                        setAnalyticsData: ke,
                        trialId: D,
                        trialFooterMessageOverride: V,
                        reviewWarningMessage: J,
                        planGroup: ee,
                        openInvoiceId: ne,
                        analyticsLocation: t,
                        onSubscriptionConfirmation: te,
                        renderPurchaseConfirmation: re,
                        postSuccessGuild: ie,
                        followupSKUInfo: ae,
                        referralTrialOfferId: ce
                    },
                    Ke = function(e) {
                        var n, t = e.isGift,
                            a = e.renderHeader,
                            s = e.referralTrialOfferId,
                            l = e.handleClose,
                            o = (0,
                                g.usePaymentContext)(),
                            u = o.selectedSkuId,
                            d = o.step,
                            p = o.selectedPlan,
                            f = o.purchaseState,
                            m = o.selectedGiftStyle,
                            S = o.purchaseType,
                            y = o.giftRecipient,
                            I = M.ZP.useExperiment({
                                location: "cbdb8c_1"
                            }, {
                                autoTrackExposure: !1
                            }).enabled,
                            E = (0, M.rK)();
                        i.useEffect((function() {
                            E && t && M.ZP.trackExposure({
                                location: "cbdb8c_2"
                            })
                        }), [E, t]);
                        var P = I && E && t && u === G.Si.TIER_2,
                            v = (P || (0, T.a8)(y)) && d === h.h8.CONFIRM && null != m,
                            b = null != a && null != d,
                            _ = d !== h.h8.SKU_SELECT && null != u,
                            A = (0, w.N)(s),
                            O = !t && null != A && null != u && G.nG[A.trial_id].skus.includes(u),
                            x = (0, L.Ng)(),
                            D = null == x || null === (n = x.discount) || void 0 === n ? void 0 : n.plan_ids.some((function(e) {
                                return G.GP[e].skuId === u
                            })),
                            U = !t && null != x && null != u && D;
                        return i.useMemo((function() {
                            if (null != d) {
                                var e = null;
                                if (v) e = (0, r.jsxs)("div", {
                                    className: F().container,
                                    children: [(0, r.jsx)(R.Z, {
                                        defaultAnimationState: N.SR.LOOP,
                                        giftStyle: m,
                                        className: F().seasonalGiftBoxHeaderIcon
                                    }), (0, r.jsx)(c.ModalCloseButton, {
                                        onClick: l,
                                        className: F().closeButton
                                    })]
                                });
                                else if (b) e = a(null != p ? p : null, l, d);
                                else if (S === k.GZ.ONE_TIME) e = (0, r.jsx)(C.t, {
                                    step: d,
                                    onClose: l
                                });
                                else if (_) {
                                    j()(u in G.y7, "invalid sku id: ".concat(u));
                                    e = (0, r.jsx)(Z.Z, {
                                        currentStep: null != d ? d : void 0,
                                        purchaseState: f,
                                        premiumType: G.y7[u],
                                        onClose: l,
                                        useWinterTheme: P,
                                        showTrialBadge: O,
                                        showDiscountBadge: U,
                                        giftRecipient: y
                                    })
                                }
                                return e
                            }
                        }), [P, m, l, f, a, p, u, d, O, U, v, _, b, S, y])
                    }({
                        isGift: Y,
                        renderHeader: se,
                        referralTrialOfferId: ce,
                        handleClose: Be
                    });
                return (0, r.jsx)(c.Shaker, {
                    className: K().shaker,
                    isShaking: pe && Ee === A.A.PURCHASING,
                    intensity: 2,
                    children: (0, r.jsx)(c.ModalRoot, {
                        className: s()(K().root, $({}, K().withHeader, null != Ke)),
                        transitionState: m,
                        hideShadow: ye,
                        size: me ? c.ModalSize.LARGE : c.ModalSize.SMALL,
                        children: (0, r.jsx)(W.ZP, z({
                            header: Ke,
                            isLargeModal: me
                        }, Ye))
                    })
                })
            }

            function X(e) {
                var n = e.subscriptionTier,
                    t = e.initialPlanId,
                    a = e.handleStepChange,
                    s = e.referralTrialOfferId,
                    l = (0,
                        g.usePaymentContext)(),
                    c = l.activeSubscription,
                    f = l.blockedPayments,
                    y = l.hasFetchedSubscriptions,
                    I = l.hasFetchedSubscriptionPlans,
                    E = l.currencyLoading,
                    P = l.selectedSkuId,
                    b = l.setSelectedPlanId,
                    T = l.isGift,
                    _ = l.defaultPlanId,
                    A = (0, O.Z)({
                        isGift: T,
                        skuId: P,
                        referralTrialOfferId: s
                    }),
                    x = S.k.getCurrentConfig({
                        location: "055ec5_1"
                    }, {
                        autoTrackExposure: !1
                    }).defaultToMonthlyPlan,
                    j = q(i.useState(!0), 2),
                    C = j[0],
                    N = j[1],
                    M = (0, o.ZP)([v.Z], (function() {
                        return v.Z.applicationIdsFetched.has(G.RQ)
                    }));
                i.useEffect((function() {
                    N(!y || !I || E)
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
                    M || (0, u.yD)(G.RQ);
                    if (!C && !f)
                        if (null != t) a(h.h8.REVIEW);
                        else {
                            var e = (0, m.Wt)({
                                isTrial: A,
                                isGift: T,
                                selectedSkuId: P
                            });
                            if (e.enabled) {
                                var r = (0, m.D3)(e, P, c, _);
                                b(r);
                                a(h.h8.REVIEW)
                            } else a(null != n ? h.h8.PLAN_SELECT : h.h8.SKU_SELECT)
                        }
                }), [c, f, M, t, C, a, n, P, b, x, A, _, T]);
                return C ? (0, r.jsx)(U.Z, {}) : f ? (0, r.jsx)(p.Vq, {}) : null
            }
        },
        366366: (e, n, t) => {
            t.d(n, {
                l: () => he
            });
            var r = t(785893),
                i = t(667294),
                a = t(441143),
                s = t.n(a),
                l = t(898302),
                o = t(471450),
                c = t(818103),
                u = t(344266),
                d = t(717035),
                p = t(16097),
                f = t(682876),
                m = t(197597),
                S = t(202351),
                y = t(304548),
                h = t(415324),
                I = t(152042),
                E = t(700812),
                P = t(536713),
                v = t(153686),
                b = t(19585),
                T = t(782786),
                _ = t(632826),
                g = t(793461),
                A = t(615796),
                O = t(551778),
                x = t(694329),
                j = t(530562),
                C = t(100749),
                N = t(16703),
                M = t(524450),
                L = t(900547),
                w = t(128034),
                R = t(646875),
                Z = t(2590),
                G = t(473708),
                k = t(231492),
                D = t.n(k),
                F = t(968071),
                U = t.n(F);

            function W(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function H(e, n) {
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
                    if ("string" == typeof e) return W(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return W(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function B(e) {
                var n, t = e.premiumSubscription,
                    a = e.paymentSources,
                    l = e.priceOptions,
                    o = e.onPaymentSourceChange,
                    u = e.onPaymentSourceAdd,
                    d = e.planId,
                    p = e.setHasAcceptedTerms,
                    f = e.legalTermsNodeRef,
                    v = e.hasLegalTermsFlash,
                    b = e.onInvoiceError,
                    C = e.planGroup,
                    M = e.currencies,
                    R = e.onCurrencyChange,
                    k = e.hasOpenInvoice,
                    D = e.purchaseState,
                    F = (0, T.usePaymentContext)(),
                    W = F.selectedSkuId,
                    H = F.defaultPlanId,
                    B = F.selectedGiftStyle,
                    z = F.setSelectedGiftStyle,
                    Q = F.isGift,
                    q = F.isPremium,
                    J = l.paymentSourceId,
                    X = (0, S.e7)([O.Z], (function() {
                        return O.Z.get(d)
                    }));
                s()(null != X, "Missing newPlan");
                var ee, ne = (0, S.e7)([g.Z], (function() {
                    return g.Z.hidePersonalInformation
                }));
                ee = k ? G.Z.Messages.BILLING_PURCHASE_DETAILS_HEADER : (0, x.PV)(d) ? (0, x.W_)(t, X) : G.Z.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                    planName: X.name
                });
                var te = m.M.EEA_COUNTRIES.has(A.Z.ipCountryCodeWithFallback),
                    re = D === _.A.PURCHASING || D === _.A.COMPLETED,
                    ie = (0, c.Wt)({
                        isTrial: !1,
                        isGift: Q,
                        selectedSkuId: W
                    }),
                    ae = ie.enabled,
                    se = ie.defaultToMonthlyPlan,
                    le = i.useMemo((function() {
                        return (0, x.V7)({
                            skuId: W,
                            isPremium: q,
                            multiMonthPlans: [],
                            currentSubscription: t,
                            isGift: Q,
                            isEligibleForTrial: !1,
                            defaultPlanId: H,
                            defaultToMonthlyPlan: se
                        })
                    }), [W, t, H, q, Q, se]);
                return (0, r.jsxs)("div", {
                    className: U().stepBody,
                    children: [ae && (0, r.jsxs)("div", {
                        children: [(0, r.jsx)(N.KU, {
                            negativeMarginTop: !0
                        }), (0, r.jsx)(w.O, {
                            isGift: Q,
                            selectedGiftStyle: B,
                            setSelectedGiftStyle: z,
                            planOptions: le,
                            eligibleForMultiMonthPlans: !1,
                            selectedPlanId: d,
                            showTotal: !1
                        }), (0, r.jsx)(N.KU, {})]
                    }), (0, r.jsx)(y.FormTitle, {
                        tag: y.FormTitleTags.H5,
                        children: ee
                    }), null != t ? k ? (0, r.jsx)(Y, {
                        premiumSubscription: t,
                        onInvoiceError: b,
                        priceOptions: l,
                        preventFetch: !1
                    }) : (0, j.R4)(t, d, C) ? (0, r.jsx)(K, {
                        premiumSubscription: t,
                        newPlan: X,
                        onInvoiceError: b,
                        planGroup: C,
                        priceOptions: l,
                        preventFetch: re
                    }) : (0, r.jsx)($, {
                        premiumSubscription: t,
                        newPlan: X,
                        planGroup: C,
                        priceOptions: l,
                        preventFetch: re
                    }) : null, (0, r.jsxs)("div", {
                        className: U().paymentSourceWrapper,
                        children: [(0, r.jsx)(y.FormTitle, {
                            tag: y.FormTitleTags.H5,
                            children: G.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, r.jsx)(E.Z, {
                            paymentSources: Object.values(a),
                            selectedPaymentSourceId: J,
                            onChange: o,
                            onPaymentSourceAdd: u,
                            hidePersonalInformation: ne,
                            disabled: re
                        })]
                    }), (0, r.jsxs)(h.b, {
                        currencies: M,
                        className: U().currencyWrapper,
                        children: [(0, r.jsx)(y.FormTitle, {
                            tag: y.FormTitleTags.H5,
                            children: G.Z.Messages.PAYMENT_CURRENCY
                        }), (0, r.jsx)(h.Z, {
                            selectedCurrency: l.currency,
                            currencies: M,
                            onChange: R,
                            disabled: re
                        })]
                    }), (0, r.jsx)(L.Z, {
                        isActive: v,
                        ref: f,
                        children: null != t && (0, j.R4)(t, d, C) ? (0, r.jsx)(V, {
                            premiumSubscription: t,
                            newPlan: X,
                            onInvoiceError: b,
                            planGroup: C,
                            priceOptions: l,
                            preventFetch: re,
                            disabled: re,
                            isEEA: te,
                            paymentSources: a,
                            setHasAcceptedTerms: p
                        }) : (0, r.jsx)(P.Z, {
                            onChange: p,
                            finePrint: (0, r.jsx)(I.Z, {
                                subscriptionPlan: X,
                                paymentSourceType: null === (n = a[null != J ? J : ""]) || void 0 === n ? void 0 : n.type,
                                basePrice: (0, x.aS)(X.id, !1, Q, l),
                                currentSubscription: t,
                                planGroup: C
                            }),
                            forceShow: !0,
                            showPricingLink: X.currency !== Z.pKx.USD,
                            showWithdrawalWaiver: te,
                            disabled: re,
                            subscriptionPlan: X,
                            currentSubscription: t,
                            planGroup: C
                        })
                    })]
                })
            }

            function Y(e) {
                var n = e.premiumSubscription,
                    t = e.onInvoiceError,
                    a = e.priceOptions,
                    s = e.preventFetch,
                    l = H((0, C.Ox)({
                        subscriptionId: n.id,
                        preventFetch: s
                    }), 2),
                    o = l[0],
                    c = l[1];
                i.useEffect((function() {
                    t(c)
                }), [t, c]);
                var u = (0, x.Ap)(a.paymentSourceId);
                return null != o ? (0, r.jsxs)(N.PO, {
                    className: D().invoice,
                    children: [(0, r.jsx)(R.By, {
                        invoice: o,
                        isPrepaidPaymentSource: u
                    }), (0, r.jsx)(R.nd, {
                        premiumSubscription: n,
                        renewalInvoice: o,
                        isUpdate: !0,
                        isPrepaidPaymentSource: u
                    })]
                }) : (0, r.jsx)(y.Spinner, {})
            }

            function K(e) {
                var n = e.premiumSubscription,
                    t = e.newPlan,
                    a = e.onInvoiceError,
                    s = e.planGroup,
                    l = e.priceOptions,
                    o = e.preventFetch,
                    u = (0, T.usePaymentContext)(),
                    d = u.selectedSkuId,
                    p = u.isGift,
                    f = (0, b.Z)().analyticsLocations,
                    m = (0, x.al)(n, t.id, 1, new Set(s)),
                    S = H((0, C.ED)({
                        subscriptionId: n.id,
                        items: m,
                        renewal: !1,
                        applyEntitlements: !0,
                        paymentSourceId: l.paymentSourceId,
                        currency: l.currency,
                        preventFetch: o,
                        analyticsLocations: f,
                        analyticsLocation: v.Z.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
                    }), 2),
                    h = S[0],
                    I = S[1],
                    E = H((0, C.ED)({
                        subscriptionId: n.id,
                        items: m,
                        renewal: !0,
                        paymentSourceId: l.paymentSourceId,
                        currency: l.currency,
                        preventFetch: o,
                        analyticsLocations: f,
                        analyticsLocation: v.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
                    }), 2),
                    P = E[0],
                    _ = E[1],
                    g = null != I ? I : _;
                i.useEffect((function() {
                    a(g)
                }), [a, g]);
                if (null != g) return (0, r.jsx)(y.FormErrorBlock, {
                    children: g.message
                });
                var A = (0, c.Wt)({
                        isTrial: !1,
                        isGift: p,
                        selectedSkuId: d
                    }).enabled,
                    O = (0, c.$g)(A, h, t);
                if (null == h || null == P || O) return (0, r.jsx)(y.Spinner, {
                    className: U().spinner
                });
                var j = (0, x.Ap)(l.paymentSourceId);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(R.hG, {
                        proratedInvoice: h,
                        renewalInvoice: P
                    }), (0, r.jsxs)(N.PO, {
                        className: U().invoice,
                        children: [(0, r.jsx)(N.q9, {
                            children: G.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
                        }), (0, r.jsx)(R.Lu, {
                            invoice: h,
                            newPlan: t,
                            isPrepaidPaymentSource: j
                        }), (0, r.jsx)(R.nd, {
                            premiumSubscription: n,
                            proratedInvoice: h,
                            renewalInvoice: P,
                            isUpdate: !0,
                            isPrepaidPaymentSource: j
                        })]
                    })]
                })
            }

            function V(e) {
                var n, t, a, s = e.premiumSubscription,
                    l = e.newPlan,
                    o = e.onInvoiceError,
                    c = e.planGroup,
                    u = e.priceOptions,
                    d = e.preventFetch,
                    p = e.disabled,
                    f = e.isEEA,
                    m = e.paymentSources,
                    S = e.setHasAcceptedTerms,
                    h = (0, b.Z)().analyticsLocations,
                    E = (0, x.al)(s, l.id, 1, new Set(c)),
                    T = H((0, C.ED)({
                        subscriptionId: s.id,
                        items: E,
                        renewal: !0,
                        paymentSourceId: u.paymentSourceId,
                        currency: u.currency,
                        preventFetch: d,
                        analyticsLocations: h,
                        analyticsLocation: v.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
                    }), 2),
                    _ = T[0],
                    g = T[1];
                i.useEffect((function() {
                    o(g)
                }), [o, g]);
                if (null != g) return (0,
                    r.jsx)(y.FormErrorBlock, {
                    children: g.message
                });
                null != _ && (t = {
                    amount: _.total,
                    currency: _.currency,
                    tax: _.tax,
                    taxInclusive: _.taxInclusive
                });
                return null == t ? null : (0, r.jsx)(P.Z, {
                    onChange: S,
                    finePrint: (0, r.jsx)(I.Z, {
                        subscriptionPlan: l,
                        paymentSourceType: null === (n = m[null !== (a = u.paymentSourceId) && void 0 !== a ? a : ""]) || void 0 === n ? void 0 : n.type,
                        basePrice: t,
                        currentSubscription: s,
                        planGroup: c
                    }),
                    forceShow: !0,
                    showPricingLink: l.currency !== Z.pKx.USD,
                    showWithdrawalWaiver: f,
                    disabled: p,
                    subscriptionPlan: l,
                    currentSubscription: s,
                    planGroup: c
                })
            }

            function $(e) {
                var n, t = e.premiumSubscription,
                    i = e.newPlan,
                    a = e.planGroup,
                    s = e.priceOptions,
                    l = e.preventFetch,
                    o = (0, b.Z)().analyticsLocations,
                    c = H((0, C.ED)({
                        subscriptionId: t.id,
                        items: (0, x.al)(t, i.id, 1, new Set(a)),
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
                if (null != d) return (0, r.jsx)(y.FormErrorBlock, {
                    children: d.message
                });
                if (null == u) return (0, r.jsx)("div", {
                    children: (0, r.jsx)(y.Spinner, {})
                });
                n = t.type === Z.NYc.PREMIUM ? (0, x.Gf)(i.id) : i.name;
                var p = (0, x.Ap)(s.paymentSourceId);
                return (0, r.jsxs)("div", {
                    className: U().bodyText,
                    children: [(0, r.jsx)("div", {
                        className: D().renewalInvoiceDate,
                        children: G.Z.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
                            renewalDate: u.subscriptionPeriodStart
                        })
                    }), (0, r.jsxs)(N.PO, {
                        className: U().invoice,
                        children: [(0, r.jsx)(N.q9, {
                            children: G.Z.Messages.PREMIUM_SUBSCRIPTION_UPDATES
                        }), (0, r.jsx)(N.R$, {
                            label: n,
                            value: (0, x.PK)(i, s, !0)
                        }), (0, r.jsx)(M.Z, {
                            invoice: u
                        }), (0, r.jsx)(N.KU, {}), (0, r.jsx)(R.nd, {
                            premiumSubscription: t,
                            renewalInvoice: u,
                            isUpdate: !0,
                            isPrepaidPaymentSource: p
                        })]
                    })]
                })
            }
            var z = t(83471),
                Q = t(881712),
                q = t(328535),
                J = t(318715),
                X = t(19120),
                ee = t(560213),
                ne = t(908434),
                te = t(325213),
                re = t(750203),
                ie = t(856236),
                ae = t(249052),
                se = t(51496),
                le = t.n(se);

            function oe(e) {
                var n = e.sku,
                    t = e.skuPricePreview;
                s()(null != t.amount, "SKU must have a price set.");
                var i = t.amount - t.tax;
                return !t.tax_inclusive && t.tax > 0 ? (0, r.jsxs)(N.PO, {
                    className: le().invoice,
                    children: [(0, r.jsx)(N.R$, {
                        label: n.name,
                        value: (0, ae.T4)(i, t.currency),
                        className: le().subscriptionCostRow
                    }), (0, r.jsx)(N.R$, {
                        label: G.Z.Messages.PURCHASE_REVIEW_TAX_LABEL,
                        value: (0, ae.T4)(t.tax, t.currency),
                        className: le().subscriptionCostRow
                    }), (0, r.jsx)(N.KU, {}), (0, r.jsx)(N.Ji, {
                        label: G.Z.Messages.BILLING_INVOICE_TOTAL.format(),
                        value: (0, ae.T4)(t.amount, t.currency),
                        className: le().subscriptionCostRow
                    })]
                }) : (0, r.jsx)(N.PO, {
                    className: le().invoice,
                    children: (0, r.jsx)(N.R$, {
                        label: n.name,
                        value: (0, ae.T4)(t.amount, t.currency),
                        className: le().subscriptionCostRow
                    })
                })
            }

            function ce(e) {
                var n = e.application,
                    t = e.sku;
                return !0 !== e.isEmbeddedIAP ? null : (0, r.jsxs)("div", {
                    className: le().skuHeading,
                    children: [(0, r.jsx)(re.Z, {
                        game: n
                    }), (0, r.jsx)(y.Heading, {
                        variant: "heading-lg/bold",
                        className: le().skuHeadingText,
                        children: t.name
                    })]
                })
            }

            function ue(e) {
                var n = e.hasLegalTermsFlash,
                    t = e.legalTermsNodeRef,
                    i = e.onPaymentSourceChange,
                    a = e.handlePaymentSourceAdd,
                    l = (0,
                        T.usePaymentContext)(),
                    o = l.application,
                    c = l.purchaseState,
                    u = l.paymentSources,
                    d = l.paymentSourceId,
                    p = l.setHasAcceptedTerms,
                    f = l.skusById,
                    S = l.skuPricePreviewsById,
                    h = l.selectedSkuId,
                    v = l.isEmbeddedIAP,
                    b = l.purchaseType;
                s()(null != h, "Expected selectedSkuId");
                var O = f[h],
                    x = S[h],
                    j = null != d ? d : ne.c,
                    C = null != x ? x[j] : null;
                s()(null != O, "SKU must exist and be fetched.");
                s()(null != o, "Application must exist.");
                var N = (0, J.ZP)([ee.Z, te.Z], (function() {
                        return te.Z.inTestModeForApplication(o.id) || ee.Z.inDevModeForApplication(o.id)
                    }), [o.id]),
                    M = (0, J.ZP)([g.Z], (function() {
                        return g.Z.enabled
                    })),
                    w = m.M.EEA_COUNTRIES.has(A.Z.ipCountryCodeWithFallback),
                    R = c === _.A.PURCHASING || c === _.A.COMPLETED,
                    k = null != d ? u[d].type : null;
                return (0, r.jsxs)("div", {
                    className: le().stepBody,
                    children: [N && (0, r.jsx)(X.Z, {
                        icon: ie.Z,
                        iconSize: X.Z.Sizes.SMALL,
                        color: X.Z.Colors.WARNING,
                        className: le().errorBlock,
                        children: G.Z.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
                    }, "TEST_MODE"), (0, r.jsx)(ce, {
                        application: o,
                        sku: O,
                        isEmbeddedIAP: v
                    }), (0, r.jsx)(y.FormTitle, {
                        tag: y.FormTitleTags.H5,
                        children: G.Z.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
                    }), null == C ? (0, r.jsx)(y.Spinner, {
                        type: y.Spinner.Type.WANDERING_CUBES,
                        className: le().invoiceSpinner
                    }) : (0, r.jsx)(oe, {
                        sku: O,
                        skuPricePreview: C
                    }), (0, r.jsxs)("div", {
                        className: le().paymentSourceWrapper,
                        children: [(0, r.jsx)(y.FormTitle, {
                            tag: y.FormTitleTags.H5,
                            children: G.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, r.jsx)(E.Z, {
                            paymentSources: Object.values(u),
                            selectedPaymentSourceId: d,
                            onChange: i,
                            onPaymentSourceAdd: a,
                            hidePersonalInformation: M
                        })]
                    }), (0, r.jsx)(L.Z, {
                        isActive: n,
                        ref: t,
                        children: (0, r.jsx)(P.Z, {
                            onChange: p,
                            forceShow: !0,
                            showWithdrawalWaiver: w,
                            disabled: R,
                            subscriptionPlan: null,
                            finePrintClassname: le().fineprint,
                            purchaseType: b,
                            checkboxLabel: O.productLine === Z.POd.COLLECTIBLES ? G.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_SIMPLE.format({
                                paidURL: Z.EYA.PAID_TERMS
                            }) : void 0,
                            finePrint: (0, r.jsx)(I.Z, {
                                paymentSourceType: k,
                                isEmbeddedIAP: v,
                                purchaseType: b,
                                productLine: O.productLine
                            })
                        })
                    })]
                })
            }
            var de = t(128059),
                pe = t(149096),
                fe = t(203600),
                me = t(520453);

            function Se(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function ye(e, n) {
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
                    if ("string" == typeof e) return Se(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Se(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function he(e) {
                var n, t = e.handleStepChange,
                    a = e.trialId,
                    m = e.trialFooterMessageOverride,
                    S = e.reviewWarningMessage,
                    y = e.planGroup,
                    h = e.openInvoiceId,
                    I = e.analyticsData,
                    E = e.analyticsLocation,
                    P = e.giftMessage,
                    v = e.customGiftMessage,
                    b = e.referralTrialOfferId,
                    _ = e.initialPlanId,
                    g = e.subscriptionTier,
                    A = (0, T.usePaymentContext)(),
                    O = A.activeSubscription,
                    x = A.setUpdatedSubscription,
                    j = A.contextMetadata,
                    C = A.currencies,
                    N = A.isGift,
                    M = A.paymentSourceId,
                    L = A.paymentSources,
                    w = A.priceOptions,
                    R = A.purchaseError,
                    Z = A.purchaseTokenAuthState,
                    k = A.selectedPlan,
                    D = A.selectedSkuId,
                    F = A.setCurrency,
                    U = A.setPaymentSourceId,
                    W = A.setPurchaseState,
                    H = A.setPurchaseError,
                    Y = A.step,
                    K = A.purchaseState,
                    V = A.isPremium,
                    $ = A.selectedGiftStyle,
                    J = A.setHasAcceptedTerms,
                    X = A.purchaseType,
                    ee = A.setEntitlementsGranted;
                s()(null != Y, "Step should be set");
                var ne, te = i.useRef(null),
                    re = ye((0,
                        l.Z)(!1, 500), 2),
                    ie = re[0],
                    ae = re[1],
                    se = null !== (ne = null != a ? a : b) && void 0 !== ne ? ne : null,
                    le = null == se || V && !fe.nG[se].skus.includes(D) ? null : se,
                    oe = (0, d.N)(b),
                    ce = (0, u.Ng)(),
                    Se = {
                        user_trial_offer_id: null == oe ? void 0 : oe.id
                    };
                i.useEffect((function() {
                    null != R && null != te.current && te.current.scrollIntoView({
                        behavior: "smooth"
                    })
                }), [R]);
                var he, Ie = i.useCallback((function(e, n) {
                        x(e);
                        null != n && ee(n);
                        t(z.h8.CONFIRM, {
                            fulfillment: {
                                subscription: e,
                                entitlements: n
                            }
                        })
                    }), [t, x, ee]),
                    Ee = null != M ? L[M] : null,
                    Pe = null != k && fe.o4.has(k.id) && null != Ee && !(0, o.aQ)(Ee) ? new Error(G.Z.Messages.BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE) : null,
                    ve = i.useRef(null),
                    be = ye(i.useState(null), 2),
                    Te = be[0],
                    _e = be[1],
                    ge = !N && null != oe && null != D && fe.nG[oe.trial_id].skus.includes(D),
                    Ae = null == ce || null === (n = ce.discount) || void 0 === n ? void 0 : n.plan_ids,
                    Oe = !N && null != ce && null != Ae && null != k && Ae.includes(k.id),
                    xe = null == _ && null == g,
                    je = !1;
                if (X === me.GZ.ONE_TIME) he = (0, r.jsx)(ue, {
                    hasLegalTermsFlash: ie,
                    legalTermsNodeRef: ve,
                    onPaymentSourceChange: function(e) {
                        return U(null != e ? e.id : null)
                    },
                    handlePaymentSourceAdd: function() {
                        return t(z.h8.ADD_PAYMENT_STEPS)
                    }
                });
                else if (null == O || N) {
                    s()(null != k, "Expected plan to be selected");
                    je = (0, c.Wt)({
                        isTrial: ge,
                        isGift: N,
                        selectedSkuId: D
                    }).enabled;
                    he = (0, r.jsx)(p.Z, {
                        selectedPlanId: k.id,
                        isGift: N,
                        paymentSources: L,
                        onPaymentSourceChange: function(e) {
                            return U(null != e ? e.id : null)
                        },
                        priceOptions: w,
                        currencies: C,
                        onCurrencyChange: function(e) {
                            return F(e)
                        },
                        handlePaymentSourceAdd: function() {
                            return t(z.h8.ADD_PAYMENT_STEPS)
                        },
                        setHasAcceptedTerms: J,
                        legalTermsNodeRef: ve,
                        hasLegalTermsFlash: ie,
                        trialId: le,
                        trialFooterMessageOverride: m,
                        reviewWarningMessage: S,
                        purchaseState: K,
                        referralTrialOfferId: b,
                        isTrial: ge,
                        isDiscount: Oe
                    })
                } else {
                    s()(null != k, "Expected plan to be selected");
                    je = (0, c.Wt)({
                        isTrial: ge,
                        isGift: N,
                        selectedSkuId: D
                    }).enabled;
                    he = (0, r.jsx)(B, {
                        premiumSubscription: O,
                        paymentSources: L,
                        priceOptions: w,
                        onPaymentSourceChange: function(e) {
                            U(null != e ? e.id : null)
                        },
                        onPaymentSourceAdd: function() {
                            t(z.h8.ADD_PAYMENT_STEPS);
                            U(null)
                        },
                        planId: k.id,
                        setHasAcceptedTerms: J,
                        legalTermsNodeRef: ve,
                        hasLegalTermsFlash: ie,
                        onInvoiceError: function(e) {
                            return _e(e)
                        },
                        planGroup: y,
                        currencies: C,
                        onCurrencyChange: function(e) {
                            return F(e)
                        },
                        hasOpenInvoice: null != h,
                        purchaseState: K
                    })
                }
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(Q.P, {
                        giftMessage: P
                    }), (0, r.jsx)(de.Z, {
                        isEligibleForTrial: ge
                    }), (0, r.jsxs)(pe.C3, {
                        children: [(0, r.jsx)(q.Z, {}), he]
                    }), (0, r.jsx)(pe.O3, {
                        children: (0, r.jsx)(f.Z, {
                            premiumSubscription: null != O ? O : null,
                            setPurchaseState: W,
                            onBack: function() {
                                return t(je ? z.h8.SKU_SELECT : z.h8.PLAN_SELECT)
                            },
                            onNext: Ie,
                            onPurchaseError: function(e) {
                                return H(e)
                            },
                            legalTermsNodeRef: ve,
                            flashLegalTerms: function() {
                                return ae(!0)
                            },
                            invoiceError: Te,
                            planError: Pe,
                            analyticsLocation: E,
                            baseAnalyticsData: I,
                            flowStartTime: j.startTime,
                            isGift: N,
                            giftStyle: $,
                            customGiftMessage: v,
                            trialId: le,
                            planGroup: y,
                            purchaseTokenAuthState: Z,
                            openInvoiceId: h,
                            backButtonEligible: je ? xe && V : V,
                            metadata: Se,
                            isTrial: ge,
                            disablePurchase: null != Ee && X === me.GZ.SUBSCRIPTION && ge && me.H0.has(Ee.type)
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