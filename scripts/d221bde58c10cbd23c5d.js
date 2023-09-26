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
                PaymentModal: () => q,
                PaymentPredicateStep: () => J
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
            var P = t(111090),
                E = t(551778),
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
                N = t(344266),
                L = t(717035),
                w = t(882211),
                R = t(301162),
                Z = t(203600),
                k = t(520453),
                G = t(881897),
                D = t.n(G);
            var U = t(28648),
                F = t(149096),
                W = t(2590),
                H = t(473708),
                B = t(175085),
                Y = t.n(B);

            function K(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function V(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function $(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        V(e, n, t[n])
                    }))
                }
                return e
            }

            function z(e, n) {
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

            function Q(e, n) {
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
                    if ("string" == typeof e) return K(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return K(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function q(e) {
                var n = e.analyticsLocations,
                    t = e.analyticsLocation,
                    a = e.analyticsObject,
                    o = e.analyticsSourceLocation,
                    u = e.analyticsSubscriptionType,
                    d = void 0 === u ? W.NYc.PREMIUM : u,
                    p = e.onComplete,
                    m = e.transitionState,
                    S = e.initialPlanId,
                    v = e.giftMessage,
                    A = e.subscriptionTier,
                    j = e.onClose,
                    G = e.trialId,
                    U = e.isGift,
                    B = void 0 !== U && U,
                    K = e.trialFooterMessageOverride,
                    q = e.reviewWarningMessage,
                    J = e.planGroup,
                    X = void 0 === J ? Z.Y1 : J,
                    ee = e.openInvoiceId,
                    ne = e.onSubscriptionConfirmation,
                    te = e.renderPurchaseConfirmation,
                    re = e.postSuccessGuild,
                    ie = e.followupSKUInfo,
                    ae = e.renderHeader,
                    se = e.applicationId,
                    le = e.guildId,
                    oe = e.referralTrialOfferId,
                    ce = e.skuId,
                    ue = e.shakeWhilePurchasing,
                    de = void 0 !== ue && ue,
                    pe = e.isLargeModal,
                    fe = void 0 !== pe && pe,
                    me = e.hideShadow,
                    Se = void 0 !== me && me,
                    ye = (0,
                        g.usePaymentContext)(),
                    he = ye.activitySessionId,
                    Ie = ye.purchaseState,
                    Pe = ye.setPurchaseState,
                    Ee = ye.selectedSkuId,
                    ve = ye.setSelectedSkuId,
                    Te = ye.selectedPlan,
                    be = ye.setSelectedPlanId,
                    _e = ye.setStep,
                    ge = ye.setPurchaseError,
                    Oe = ye.paymentAuthenticationState,
                    Ae = ye.step,
                    je = ye.contextMetadata,
                    xe = ye.purchaseTokenAuthState,
                    Ce = ye.activeSubscription,
                    Me = ye.priceOptions,
                    Ne = ye.hasPaymentSources,
                    Le = ye.purchaseType,
                    we = ye.giftRecipient,
                    Re = Q(i.useState({
                        load_id: je.loadId,
                        payment_type: W.Zuq[Le],
                        location: null != t ? t : a,
                        source: o,
                        subscription_type: d,
                        subscription_plan_id: null == Te ? void 0 : Te.id,
                        is_gift: B,
                        eligible_for_trial: null != G,
                        location_stack: n,
                        sku_id: ce,
                        application_id: se,
                        guild_id: le,
                        payment_modal_version: "v1",
                        activity_session_id: he
                    }), 2),
                    Ze = Re[0],
                    ke = Re[1],
                    Ge = Q(i.useState((0, b.a8)(we) ? H.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : void 0), 2),
                    De = Ge[0],
                    Ue = Ge[1];
                i.useEffect((function() {
                    ke((function(e) {
                        var n = null != Te ? (0, _.aS)(Te.id, !1, B, Me) : void 0;
                        return z($({}, e), {
                            subscription_plan_id: null == Te ? void 0 : Te.id,
                            price: null == n ? void 0 : n.amount,
                            regular_price: null == Te ? void 0 : Te.price,
                            currency: Me.currency,
                            sku_id: Ee
                        })
                    }))
                }), [Te, Ee, B, Me]);
                i.useEffect((function() {
                    T.default.track(W.rMx.PAYMENT_FLOW_STARTED, z($({}, Ze), {
                        has_saved_payment_source: Ne
                    }))
                }), []);
                i.useEffect((function() {
                    be(S);
                    if (null != ce) ve(ce);
                    else if (null != S) {
                        var e;
                        ve(null === (e = E.Z.get(S)) || void 0 === e ? void 0 : e.skuId)
                    }
                }), [be, ve, S, ce]);
                var Fe = (0, l.Z)((function() {
                        return Date.now()
                    }), [Ae]),
                    We = i.useCallback((function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            t = n.trackedFromStep,
                            r = n.analyticsDataOverride,
                            i = n.fulfillment;
                        e === h.h8.CONFIRM && (null == p || p(i));
                        _e(e);
                        ge(null);
                        var a = null != t ? t : Ae,
                            s = Date.now();
                        null !== a ? T.default.track(W.rMx.PAYMENT_FLOW_STEP, z($({}, Ze, r), {
                            from_step: a,
                            to_step: e === h.h8.ADD_PAYMENT_STEPS ? h.h8.PAYMENT_TYPE : e,
                            step_duration_ms: s - Fe,
                            flow_duration_ms: s - je.startTime
                        })) : T.default.track(W.rMx.PAYMENT_FLOW_LOADED, z($({}, Ze), {
                            initial_step: e,
                            has_saved_payment_source: Ne
                        }))
                    }), [Ze, je.startTime, p, ge, _e, Ae, Fe, Ne]),
                    He = i.useMemo((function() {
                        return function() {
                            return null == j ? void 0 : j(Ie === O.A.COMPLETED)
                        }
                    }), [j, Ie]);
                (0, y.bp)(Ae, Oe, We);
                (0, h.dZ)(Ae, Ie, Pe);
                ! function(e, n, t) {
                    i.useEffect((function() {
                        null != e && e !== h.h8.AWAITING_PURCHASE_TOKEN_AUTH && n === I.I.PENDING ? t(h.h8.AWAITING_PURCHASE_TOKEN_AUTH) : e === h.h8.AWAITING_PURCHASE_TOKEN_AUTH && n === I.I.SUCCESS && t(h.h8.REVIEW)
                    }), [e, n, t])
                }(Ae, xe, We);
                (0, f.Z)(He);
                (0, P.w)(Ce, (function() {
                    return j(!1)
                }), B);
                (0, y.D6)(Oe);
                var Be = {
                        initialPlanId: S,
                        giftMessage: v,
                        customGiftMessage: De,
                        setCustomGiftMessage: Ue,
                        subscriptionTier: A,
                        handleStepChange: We,
                        handleClose: He,
                        analyticsData: Ze,
                        setAnalyticsData: ke,
                        trialId: G,
                        trialFooterMessageOverride: K,
                        reviewWarningMessage: q,
                        planGroup: X,
                        openInvoiceId: ee,
                        analyticsLocation: t,
                        onSubscriptionConfirmation: ne,
                        renderPurchaseConfirmation: te,
                        postSuccessGuild: re,
                        followupSKUInfo: ie,
                        referralTrialOfferId: oe
                    },
                    Ye = function(e) {
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
                            P = (0, M.rK)();
                        i.useEffect((function() {
                            P && t && M.ZP.trackExposure({
                                location: "cbdb8c_2"
                            })
                        }), [P, t]);
                        var E = I && P && t && u === Z.Si.TIER_2,
                            v = (E || (0, b.a8)(y)) && d === h.h8.CONFIRM && null != m,
                            T = null != a && null != d,
                            _ = d !== h.h8.SKU_SELECT && null != u,
                            O = (0, L.N)(s),
                            A = !t && null != O && null != u && Z.nG[O.trial_id].skus.includes(u),
                            j = (0, N.N)(),
                            G = null == j || null === (n = j.discount) || void 0 === n ? void 0 : n.plan_ids.some((function(e) {
                                return Z.GP[e].skuId === u
                            })),
                            U = !t && null != j && null != u && G;
                        return i.useMemo((function() {
                            if (null != d) {
                                var e = null;
                                if (v) e = (0, r.jsxs)("div", {
                                    className: D().container,
                                    children: [(0, r.jsx)(w.Z, {
                                        giftStyle: m,
                                        className: D().seasonalGiftBoxHeaderIcon
                                    }), (0, r.jsx)(c.ModalCloseButton, {
                                        onClick: l,
                                        className: D().closeButton
                                    })]
                                });
                                else if (T) e = a(null != p ? p : null, l, d);
                                else if (S === k.GZ.ONE_TIME) e = (0, r.jsx)(C.t, {
                                    step: d,
                                    onClose: l
                                });
                                else if (_) {
                                    x()(u in Z.y7, "invalid sku id: ".concat(u));
                                    e = (0, r.jsx)(R.Z, {
                                        currentStep: null != d ? d : void 0,
                                        purchaseState: f,
                                        premiumType: Z.y7[u],
                                        onClose: l,
                                        useWinterTheme: E,
                                        showTrialBadge: A,
                                        showDiscountBadge: U,
                                        giftRecipient: y
                                    })
                                }
                                return e
                            }
                        }), [E, m, l, f, a, p, u, d, A, U, v, _, T, S, y])
                    }({
                        isGift: B,
                        renderHeader: ae,
                        referralTrialOfferId: oe,
                        handleClose: He
                    });
                return (0, r.jsx)(c.Shaker, {
                    className: Y().shaker,
                    isShaking: de && Ie === O.A.PURCHASING,
                    intensity: 2,
                    children: (0, r.jsx)(c.ModalRoot, {
                        className: s()(Y().root, V({}, Y().withHeader, null != Ye)),
                        transitionState: m,
                        hideShadow: Se,
                        size: fe ? c.ModalSize.LARGE : c.ModalSize.SMALL,
                        children: (0, r.jsx)(F.ZP, $({
                            header: Ye,
                            isLargeModal: fe
                        }, Be))
                    })
                })
            }

            function J(e) {
                var n = e.subscriptionTier,
                    t = e.initialPlanId,
                    a = e.handleStepChange,
                    s = e.referralTrialOfferId,
                    l = (0, g.usePaymentContext)(),
                    c = l.activeSubscription,
                    f = l.blockedPayments,
                    y = l.hasFetchedSubscriptions,
                    I = l.hasFetchedSubscriptionPlans,
                    P = l.currencyLoading,
                    E = l.selectedSkuId,
                    T = l.setSelectedPlanId,
                    b = l.isGift,
                    _ = l.defaultPlanId,
                    O = (0, A.Z)({
                        isGift: b,
                        skuId: E,
                        referralTrialOfferId: s
                    }),
                    j = S.k.getCurrentConfig({
                        location: "055ec5_1"
                    }, {
                        autoTrackExposure: !1
                    }).defaultToMonthlyPlan,
                    x = Q(i.useState(!0), 2),
                    C = x[0],
                    M = x[1],
                    N = (0, o.ZP)([v.Z], (function() {
                        return v.Z.applicationIdsFetched.has(Z.RQ)
                    }));
                i.useEffect((function() {
                    M(!y || !I || P)
                }), [P, I, y]);
                (0, d.Z)("Payment Modal", C, 5, {
                    hasFetchedSubscriptions: y,
                    hasFetchedSubscriptionPlans: I,
                    currencyLoading: P
                }, {
                    tags: {
                        app_context: "billing"
                    }
                });
                i.useEffect((function() {
                    N || (0, u.yD)(Z.RQ);
                    if (!C && !f)
                        if (null != t) a(h.h8.REVIEW);
                        else {
                            var e = (0, m.Wt)({
                                isTrial: O,
                                isGift: b,
                                selectedSkuId: E
                            });
                            if (e.enabled) {
                                var r = (0, m.D3)(e, E, c, _);
                                T(r);
                                a(h.h8.REVIEW)
                            } else a(null != n ? h.h8.PLAN_SELECT : h.h8.SKU_SELECT)
                        }
                }), [c, f, N, t, C, a, n, E, T, j, O, _, b]);
                return C ? (0, r.jsx)(U.Z, {}) : f ? (0, r.jsx)(p.Vq, {}) : null
            }
        },
        366366: (e, n, t) => {
            t.d(n, {
                l: () => ye
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
                P = t(700812),
                E = t(536713),
                v = t(153686),
                T = t(19585),
                b = t(782786),
                _ = t(632826),
                g = t(793461),
                O = t(615796),
                A = t(551778),
                j = t(694329),
                x = t(530562),
                C = t(100749),
                M = t(16703),
                N = t(524450),
                L = t(900547),
                w = t(556663),
                R = t(646875),
                Z = t(2590),
                k = t(473708),
                G = t(231492),
                D = t.n(G),
                U = t(968071),
                F = t.n(U);

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
                    T = e.onInvoiceError,
                    C = e.planGroup,
                    N = e.currencies,
                    R = e.onCurrencyChange,
                    G = e.hasOpenInvoice,
                    D = e.purchaseState,
                    U = (0, b.usePaymentContext)(),
                    W = U.selectedSkuId,
                    H = U.defaultPlanId,
                    B = U.selectedGiftStyle,
                    $ = U.setSelectedGiftStyle,
                    z = U.isGift,
                    Q = U.isPremium,
                    q = l.paymentSourceId,
                    J = (0, S.e7)([A.Z], (function() {
                        return A.Z.get(d)
                    }));
                s()(null != J, "Missing newPlan");
                var X, ee = (0, S.e7)([g.Z], (function() {
                    return g.Z.hidePersonalInformation
                }));
                X = G ? k.Z.Messages.BILLING_PURCHASE_DETAILS_HEADER : (0, j.PV)(d) ? (0, j.W_)(t, J) : k.Z.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                    planName: J.name
                });
                var ne = m.M.EEA_COUNTRIES.has(O.Z.ipCountryCodeWithFallback),
                    te = D === _.A.PURCHASING || D === _.A.COMPLETED,
                    re = (0, c.Wt)({
                        isTrial: !1,
                        isGift: z,
                        selectedSkuId: W
                    }),
                    ie = re.enabled,
                    ae = re.defaultToMonthlyPlan,
                    se = i.useMemo((function() {
                        return (0, j.V7)({
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
                    className: F().stepBody,
                    children: [ie && (0, r.jsxs)("div", {
                        children: [(0, r.jsx)(M.KU, {
                            negativeMarginTop: !0
                        }), (0, r.jsx)(w.O, {
                            isGift: z,
                            selectedGiftStyle: B,
                            setSelectedGiftStyle: $,
                            planOptions: se,
                            eligibleForMultiMonthPlans: !1,
                            selectedPlanId: d,
                            showTotal: !1
                        }), (0, r.jsx)(M.KU, {})]
                    }), (0, r.jsx)(y.FormTitle, {
                        tag: y.FormTitleTags.H5,
                        children: X
                    }), null != t ? G ? (0, r.jsx)(Y, {
                        premiumSubscription: t,
                        onInvoiceError: T,
                        priceOptions: l,
                        preventFetch: !1
                    }) : (0, x.R4)(t, d, C) ? (0, r.jsx)(K, {
                        premiumSubscription: t,
                        newPlan: J,
                        onInvoiceError: T,
                        planGroup: C,
                        priceOptions: l,
                        preventFetch: te
                    }) : (0, r.jsx)(V, {
                        premiumSubscription: t,
                        newPlan: J,
                        planGroup: C,
                        priceOptions: l,
                        preventFetch: te
                    }) : null, (0, r.jsxs)("div", {
                        className: F().paymentSourceWrapper,
                        children: [(0, r.jsx)(y.FormTitle, {
                            tag: y.FormTitleTags.H5,
                            children: k.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, r.jsx)(P.Z, {
                            paymentSources: Object.values(a),
                            selectedPaymentSourceId: q,
                            onChange: o,
                            onPaymentSourceAdd: u,
                            hidePersonalInformation: ee,
                            disabled: te
                        })]
                    }), (0, r.jsxs)(h.b, {
                        currencies: N,
                        className: F().currencyWrapper,
                        children: [(0, r.jsx)(y.FormTitle, {
                            tag: y.FormTitleTags.H5,
                            children: k.Z.Messages.PAYMENT_CURRENCY
                        }), (0, r.jsx)(h.Z, {
                            selectedCurrency: l.currency,
                            currencies: N,
                            onChange: R,
                            disabled: te
                        })]
                    }), (0, r.jsx)(L.Z, {
                        isActive: v,
                        ref: f,
                        children: (0, r.jsx)(E.Z, {
                            onChange: p,
                            finePrint: (0, r.jsx)(I.Z, {
                                subscriptionPlan: J,
                                paymentSourceType: null === (n = a[null != q ? q : ""]) || void 0 === n ? void 0 : n.type
                            }),
                            forceShow: !0,
                            showPricingLink: J.currency !== Z.pKx.USD,
                            showWithdrawalWaiver: ne,
                            disabled: te
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
                var u = (0, j.Ap)(a.paymentSourceId);
                return null != o ? (0, r.jsxs)(M.PO, {
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
                    u = (0, b.usePaymentContext)(),
                    d = u.selectedSkuId,
                    p = u.isGift,
                    f = (0, T.Z)().analyticsLocations,
                    m = (0, j.al)(n, t.id, 1, new Set(s)),
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
                    P = H((0, C.ED)({
                        subscriptionId: n.id,
                        items: m,
                        renewal: !0,
                        paymentSourceId: l.paymentSourceId,
                        currency: l.currency,
                        preventFetch: o,
                        analyticsLocations: f,
                        analyticsLocation: v.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
                    }), 2),
                    E = P[0],
                    _ = P[1],
                    g = null != I ? I : _;
                i.useEffect((function() {
                    a(g)
                }), [a, g]);
                if (null != g) return (0, r.jsx)(y.FormErrorBlock, {
                    children: g.message
                });
                var O = (0, c.Wt)({
                        isTrial: !1,
                        isGift: p,
                        selectedSkuId: d
                    }).enabled,
                    A = (0, c.$g)(O, h, t);
                if (null == h || null == E || A) return (0, r.jsx)(y.Spinner, {
                    className: F().spinner
                });
                var x = (0, j.Ap)(l.paymentSourceId);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(R.hG, {
                        proratedInvoice: h,
                        renewalInvoice: E
                    }), (0, r.jsxs)(M.PO, {
                        className: F().invoice,
                        children: [(0, r.jsx)(M.q9, {
                            children: k.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
                        }), (0, r.jsx)(R.Lu, {
                            invoice: h,
                            newPlan: t,
                            isPrepaidPaymentSource: x
                        }), (0, r.jsx)(R.nd, {
                            premiumSubscription: n,
                            proratedInvoice: h,
                            renewalInvoice: E,
                            isUpdate: !0,
                            isPrepaidPaymentSource: x
                        })]
                    })]
                })
            }

            function V(e) {
                var n, t = e.premiumSubscription,
                    i = e.newPlan,
                    a = e.planGroup,
                    s = e.priceOptions,
                    l = e.preventFetch,
                    o = (0, T.Z)().analyticsLocations,
                    c = H((0, C.ED)({
                        subscriptionId: t.id,
                        items: (0, j.al)(t, i.id, 1, new Set(a)),
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
                n = t.type === Z.NYc.PREMIUM ? (0, j.Gf)(i.id) : i.name;
                var p = (0, j.Ap)(s.paymentSourceId);
                return (0, r.jsxs)("div", {
                    className: F().bodyText,
                    children: [(0, r.jsx)("div", {
                        className: D().renewalInvoiceDate,
                        children: k.Z.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
                            renewalDate: u.subscriptionPeriodStart
                        })
                    }), (0, r.jsxs)(M.PO, {
                        className: F().invoice,
                        children: [(0, r.jsx)(M.q9, {
                            children: k.Z.Messages.PREMIUM_SUBSCRIPTION_UPDATES
                        }), (0, r.jsx)(M.R$, {
                            label: n,
                            value: (0, j.PK)(i, s, !0)
                        }), (0, r.jsx)(N.Z, {
                            invoice: u
                        }), (0, r.jsx)(M.KU, {}), (0, r.jsx)(R.nd, {
                            premiumSubscription: t,
                            renewalInvoice: u,
                            isUpdate: !0,
                            isPrepaidPaymentSource: p
                        })]
                    })]
                })
            }
            var $ = t(83471),
                z = t(881712),
                Q = t(328535),
                q = t(318715),
                J = t(19120),
                X = t(560213),
                ee = t(908434),
                ne = t(325213),
                te = t(750203),
                re = t(856236),
                ie = t(249052),
                ae = t(51496),
                se = t.n(ae);

            function le(e) {
                var n = e.sku,
                    t = e.skuPricePreview;
                s()(null != t.amount, "SKU must have a price set.");
                var i = t.amount - t.tax;
                return !t.tax_inclusive && t.tax > 0 ? (0, r.jsxs)(M.PO, {
                    className: se().invoice,
                    children: [(0, r.jsx)(M.R$, {
                        label: n.name,
                        value: (0, ie.T4)(i, t.currency),
                        className: se().subscriptionCostRow
                    }), (0, r.jsx)(M.R$, {
                        label: k.Z.Messages.PURCHASE_REVIEW_TAX_LABEL,
                        value: (0, ie.T4)(t.tax, t.currency),
                        className: se().subscriptionCostRow
                    }), (0, r.jsx)(M.KU, {}), (0, r.jsx)(M.Ji, {
                        label: k.Z.Messages.BILLING_INVOICE_TOTAL.format(),
                        value: (0, ie.T4)(t.amount, t.currency),
                        className: se().subscriptionCostRow
                    })]
                }) : (0, r.jsx)(M.PO, {
                    className: se().invoice,
                    children: (0, r.jsx)(M.R$, {
                        label: n.name,
                        value: (0, ie.T4)(t.amount, t.currency),
                        className: se().subscriptionCostRow
                    })
                })
            }

            function oe(e) {
                var n = e.application,
                    t = e.sku;
                return !0 !== e.isEmbeddedIAP ? null : (0, r.jsxs)("div", {
                    className: se().skuHeading,
                    children: [(0, r.jsx)(te.Z, {
                        game: n
                    }), (0, r.jsx)(y.Heading, {
                        variant: "heading-lg/bold",
                        className: se().skuHeadingText,
                        children: t.name
                    })]
                })
            }

            function ce(e) {
                var n = e.hasLegalTermsFlash,
                    t = e.legalTermsNodeRef,
                    i = e.onPaymentSourceChange,
                    a = e.handlePaymentSourceAdd,
                    l = (0, b.usePaymentContext)(),
                    o = l.application,
                    c = l.purchaseState,
                    u = l.paymentSources,
                    d = l.paymentSourceId,
                    p = l.setHasAcceptedTerms,
                    f = l.skusById,
                    S = l.skuPricePreviewsById,
                    h = l.selectedSkuId,
                    v = l.isEmbeddedIAP,
                    T = l.purchaseType;
                s()(null != h, "Expected selectedSkuId");
                var A = f[h],
                    j = S[h],
                    x = null != d ? d : ee.c,
                    C = null != j ? j[x] : null;
                s()(null != A, "SKU must exist and be fetched.");
                s()(null != o, "Application must exist.");
                var M = (0, q.ZP)([X.Z, ne.Z], (function() {
                        return ne.Z.inTestModeForApplication(o.id) || X.Z.inDevModeForApplication(o.id)
                    }), [o.id]),
                    N = (0, q.ZP)([g.Z], (function() {
                        return g.Z.enabled
                    })),
                    w = m.M.EEA_COUNTRIES.has(O.Z.ipCountryCodeWithFallback),
                    R = c === _.A.PURCHASING || c === _.A.COMPLETED,
                    G = null != d ? u[d].type : null;
                return (0, r.jsxs)("div", {
                    className: se().stepBody,
                    children: [M && (0, r.jsx)(J.Z, {
                        icon: re.Z,
                        iconSize: J.Z.Sizes.SMALL,
                        color: J.Z.Colors.WARNING,
                        className: se().errorBlock,
                        children: k.Z.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
                    }, "TEST_MODE"), (0, r.jsx)(oe, {
                        application: o,
                        sku: A,
                        isEmbeddedIAP: v
                    }), (0, r.jsx)(y.FormTitle, {
                        tag: y.FormTitleTags.H5,
                        children: k.Z.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
                    }), null == C ? (0, r.jsx)(y.Spinner, {
                        type: y.Spinner.Type.WANDERING_CUBES,
                        className: se().invoiceSpinner
                    }) : (0, r.jsx)(le, {
                        sku: A,
                        skuPricePreview: C
                    }), (0, r.jsxs)("div", {
                        className: se().paymentSourceWrapper,
                        children: [(0, r.jsx)(y.FormTitle, {
                            tag: y.FormTitleTags.H5,
                            children: k.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, r.jsx)(P.Z, {
                            paymentSources: Object.values(u),
                            selectedPaymentSourceId: d,
                            onChange: i,
                            onPaymentSourceAdd: a,
                            hidePersonalInformation: N
                        })]
                    }), (0, r.jsx)(L.Z, {
                        isActive: n,
                        ref: t,
                        children: (0, r.jsx)(E.Z, {
                            onChange: p,
                            forceShow: !0,
                            showWithdrawalWaiver: w,
                            disabled: R,
                            subscriptionPlan: null,
                            finePrintClassname: se().fineprint,
                            purchaseType: T,
                            checkboxLabel: A.productLine === Z.POd.COLLECTIBLES ? k.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_SIMPLE.format({
                                paidURL: Z.EYA.PAID_TERMS
                            }) : void 0,
                            finePrint: (0, r.jsx)(I.Z, {
                                paymentSourceType: G,
                                isEmbeddedIAP: v,
                                purchaseType: T,
                                productLine: A.productLine
                            })
                        })
                    })]
                })
            }
            var ue = t(128059),
                de = t(149096),
                pe = t(203600),
                fe = t(520453);

            function me(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Se(e, n) {
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
                    if ("string" == typeof e) return me(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return me(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ye(e) {
                var n, t = e.handleStepChange,
                    a = e.trialId,
                    m = e.trialFooterMessageOverride,
                    S = e.reviewWarningMessage,
                    y = e.planGroup,
                    h = e.openInvoiceId,
                    I = e.analyticsData,
                    P = e.analyticsLocation,
                    E = e.giftMessage,
                    v = e.customGiftMessage,
                    T = e.referralTrialOfferId,
                    _ = e.initialPlanId,
                    g = e.subscriptionTier,
                    O = (0,
                        b.usePaymentContext)(),
                    A = O.activeSubscription,
                    j = O.setUpdatedSubscription,
                    x = O.contextMetadata,
                    C = O.currencies,
                    M = O.isGift,
                    N = O.paymentSourceId,
                    L = O.paymentSources,
                    w = O.priceOptions,
                    R = O.purchaseError,
                    Z = O.purchaseTokenAuthState,
                    G = O.selectedPlan,
                    D = O.selectedSkuId,
                    U = O.setCurrency,
                    F = O.setPaymentSourceId,
                    W = O.setPurchaseState,
                    H = O.setPurchaseError,
                    Y = O.step,
                    K = O.purchaseState,
                    V = O.isPremium,
                    q = O.selectedGiftStyle,
                    J = O.setHasAcceptedTerms,
                    X = O.purchaseType,
                    ee = O.setEntitlementsGranted;
                s()(null != Y, "Step should be set");
                var ne, te = i.useRef(null),
                    re = Se((0, l.Z)(!1, 500), 2),
                    ie = re[0],
                    ae = re[1],
                    se = null !== (ne = null != a ? a : T) && void 0 !== ne ? ne : null,
                    le = null == se || V && !pe.nG[se].skus.includes(D) ? null : se,
                    oe = (0, d.N)(T),
                    me = (0, u.N)(),
                    ye = {
                        user_trial_offer_id: null == oe ? void 0 : oe.id
                    };
                i.useEffect((function() {
                    null != R && null != te.current && te.current.scrollIntoView({
                        behavior: "smooth"
                    })
                }), [R]);
                var he, Ie = i.useCallback((function(e, n) {
                        j(e);
                        null != n && ee(n);
                        t($.h8.CONFIRM, {
                            fulfillment: {
                                subscription: e,
                                entitlements: n
                            }
                        })
                    }), [t, j, ee]),
                    Pe = null != N ? L[N] : null,
                    Ee = null != G && pe.o4.has(G.id) && null != Pe && !(0, o.aQ)(Pe) ? new Error(k.Z.Messages.BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE) : null,
                    ve = i.useRef(null),
                    Te = Se(i.useState(null), 2),
                    be = Te[0],
                    _e = Te[1],
                    ge = !M && null != oe && null != D && pe.nG[oe.trial_id].skus.includes(D),
                    Oe = null == me || null === (n = me.discount) || void 0 === n ? void 0 : n.plan_ids,
                    Ae = !M && null != me && null != Oe && null != G && Oe.includes(G.id),
                    je = null == _ && null == g,
                    xe = !1;
                if (X === fe.GZ.ONE_TIME) he = (0, r.jsx)(ce, {
                    hasLegalTermsFlash: ie,
                    legalTermsNodeRef: ve,
                    onPaymentSourceChange: function(e) {
                        return F(null != e ? e.id : null)
                    },
                    handlePaymentSourceAdd: function() {
                        return t($.h8.ADD_PAYMENT_STEPS)
                    }
                });
                else if (null == A || M) {
                    s()(null != G, "Expected plan to be selected");
                    xe = (0, c.Wt)({
                        isTrial: ge,
                        isGift: M,
                        selectedSkuId: D
                    }).enabled;
                    he = (0, r.jsx)(p.Z, {
                        selectedPlanId: G.id,
                        isGift: M,
                        paymentSources: L,
                        onPaymentSourceChange: function(e) {
                            return F(null != e ? e.id : null)
                        },
                        priceOptions: w,
                        currencies: C,
                        onCurrencyChange: function(e) {
                            return U(e)
                        },
                        handlePaymentSourceAdd: function() {
                            return t($.h8.ADD_PAYMENT_STEPS)
                        },
                        setHasAcceptedTerms: J,
                        legalTermsNodeRef: ve,
                        hasLegalTermsFlash: ie,
                        trialId: le,
                        trialFooterMessageOverride: m,
                        reviewWarningMessage: S,
                        purchaseState: K,
                        referralTrialOfferId: T,
                        isTrial: ge,
                        isDiscount: Ae
                    })
                } else {
                    s()(null != G, "Expected plan to be selected");
                    xe = (0, c.Wt)({
                        isTrial: ge,
                        isGift: M,
                        selectedSkuId: D
                    }).enabled;
                    he = (0, r.jsx)(B, {
                        premiumSubscription: A,
                        paymentSources: L,
                        priceOptions: w,
                        onPaymentSourceChange: function(e) {
                            F(null != e ? e.id : null)
                        },
                        onPaymentSourceAdd: function() {
                            t($.h8.ADD_PAYMENT_STEPS);
                            F(null)
                        },
                        planId: G.id,
                        setHasAcceptedTerms: J,
                        legalTermsNodeRef: ve,
                        hasLegalTermsFlash: ie,
                        onInvoiceError: function(e) {
                            return _e(e)
                        },
                        planGroup: y,
                        currencies: C,
                        onCurrencyChange: function(e) {
                            return U(e)
                        },
                        hasOpenInvoice: null != h,
                        purchaseState: K
                    })
                }
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(z.P, {
                        giftMessage: E
                    }), (0, r.jsx)(ue.Z, {
                        isEligibleForTrial: ge
                    }), (0, r.jsxs)(de.C3, {
                        children: [(0, r.jsx)(Q.Z, {}), he]
                    }), (0, r.jsx)(de.O3, {
                        children: (0, r.jsx)(f.Z, {
                            premiumSubscription: null != A ? A : null,
                            setPurchaseState: W,
                            onBack: function() {
                                return t(xe ? $.h8.SKU_SELECT : $.h8.PLAN_SELECT)
                            },
                            onNext: Ie,
                            onPurchaseError: function(e) {
                                return H(e)
                            },
                            legalTermsNodeRef: ve,
                            flashLegalTerms: function() {
                                return ae(!0)
                            },
                            invoiceError: be,
                            planError: Ee,
                            analyticsLocation: P,
                            baseAnalyticsData: I,
                            flowStartTime: x.startTime,
                            isGift: M,
                            giftStyle: q,
                            customGiftMessage: v,
                            trialId: le,
                            planGroup: y,
                            purchaseTokenAuthState: Z,
                            openInvoiceId: h,
                            backButtonEligible: xe ? je && V : V,
                            metadata: ye,
                            isTrial: ge,
                            disablePurchase: null != Pe && X === fe.GZ.SUBSCRIPTION && ge && fe.H0.has(Pe.type)
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