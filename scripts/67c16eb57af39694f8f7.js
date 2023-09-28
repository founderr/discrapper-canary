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
                o = n(304548),
                u = n(74535),
                c = n(818417),
                f = n(348592),
                d = n(387099),
                p = n(2590),
                E = n(473708),
                _ = n(858903),
                h = n.n(_),
                y = n(495068),
                m = n.n(y),
                v = n(377236),
                O = n.n(v);

            function b(e) {
                var t = e.className,
                    n = (0, u.ZP)(),
                    a = (0, s.wj)(n) ? m() : O();
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
                return (0, r.jsx)(b, {
                    className: h().settings
                })
            }

            function S() {
                return (0, r.jsx)(b, {
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
                PaymentModal: () => $,
                PaymentPredicateStep: () => J
            });
            var r = n(785893),
                a = n(667294),
                i = n(294184),
                l = n.n(i),
                s = n(685269),
                o = n(318715),
                u = n(304548),
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
                O = n(551778),
                b = n(151367),
                g = n(652591),
                S = n(644144),
                I = n(694329),
                P = n(782786),
                T = n(632826),
                M = n(510142),
                N = n(441143),
                A = n.n(N),
                R = n(777315),
                C = n(467345),
                L = n(621270),
                k = n(344266),
                j = n(717035),
                w = n(882211),
                x = n(301162),
                G = n(203600),
                Z = n(520453),
                D = n(881897),
                U = n.n(D);
            var W = n(28648),
                Y = n(149096),
                B = n(2590),
                F = n(473708),
                H = n(175085),
                K = n.n(H);

            function V(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function X(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        X(e, t, n[t])
                    }))
                }
                return e
            }

            function Q(e, t) {
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

            function q(e, t) {
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
                    if ("string" == typeof e) return V(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return V(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function $(e) {
                var t = e.analyticsLocations,
                    n = e.analyticsLocation,
                    i = e.analyticsObject,
                    o = e.analyticsSourceLocation,
                    c = e.analyticsSubscriptionType,
                    f = void 0 === c ? B.NYc.PREMIUM : c,
                    d = e.onComplete,
                    E = e.transitionState,
                    _ = e.initialPlanId,
                    b = e.giftMessage,
                    M = e.subscriptionTier,
                    N = e.onClose,
                    D = e.trialId,
                    W = e.isGift,
                    H = void 0 !== W && W,
                    V = e.trialFooterMessageOverride,
                    $ = e.reviewWarningMessage,
                    J = e.planGroup,
                    ee = void 0 === J ? G.Y1 : J,
                    te = e.openInvoiceId,
                    ne = e.onSubscriptionConfirmation,
                    re = e.renderPurchaseConfirmation,
                    ae = e.postSuccessGuild,
                    ie = e.followupSKUInfo,
                    le = e.renderHeader,
                    se = e.applicationId,
                    oe = e.guildId,
                    ue = e.referralTrialOfferId,
                    ce = e.skuId,
                    fe = e.shakeWhilePurchasing,
                    de = void 0 !== fe && fe,
                    pe = e.isLargeModal,
                    Ee = void 0 !== pe && pe,
                    _e = e.hideShadow,
                    he = void 0 !== _e && _e,
                    ye = (0,
                        P.usePaymentContext)(),
                    me = ye.activitySessionId,
                    ve = ye.purchaseState,
                    Oe = ye.setPurchaseState,
                    be = ye.selectedSkuId,
                    ge = ye.setSelectedSkuId,
                    Se = ye.selectedPlan,
                    Ie = ye.setSelectedPlanId,
                    Pe = ye.setStep,
                    Te = ye.setPurchaseError,
                    Me = ye.paymentAuthenticationState,
                    Ne = ye.step,
                    Ae = ye.contextMetadata,
                    Re = ye.purchaseTokenAuthState,
                    Ce = ye.activeSubscription,
                    Le = ye.priceOptions,
                    ke = ye.hasPaymentSources,
                    je = ye.purchaseType,
                    we = ye.giftRecipient,
                    xe = q(a.useState({
                        load_id: Ae.loadId,
                        payment_type: B.Zuq[je],
                        location: null != n ? n : i,
                        source: o,
                        subscription_type: f,
                        subscription_plan_id: null == Se ? void 0 : Se.id,
                        is_gift: H,
                        eligible_for_trial: null != D,
                        location_stack: t,
                        sku_id: ce,
                        application_id: se,
                        guild_id: oe,
                        payment_modal_version: "v1",
                        activity_session_id: me
                    }), 2),
                    Ge = xe[0],
                    Ze = xe[1],
                    De = q(a.useState((0, S.a8)(we) ? F.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : void 0), 2),
                    Ue = De[0],
                    We = De[1];
                a.useEffect((function() {
                    Ze((function(e) {
                        var t = null != Se ? (0, I.aS)(Se.id, !1, H, Le) : void 0;
                        return Q(z({}, e), {
                            subscription_plan_id: null == Se ? void 0 : Se.id,
                            price: null == t ? void 0 : t.amount,
                            regular_price: null == Se ? void 0 : Se.price,
                            currency: Le.currency,
                            sku_id: be
                        })
                    }))
                }), [Se, be, H, Le]);
                a.useEffect((function() {
                    g.default.track(B.rMx.PAYMENT_FLOW_STARTED, Q(z({}, Ge), {
                        has_saved_payment_source: ke
                    }))
                }), []);
                a.useEffect((function() {
                    Ie(_);
                    if (null != ce) ge(ce);
                    else if (null != _) {
                        var e;
                        ge(null === (e = O.Z.get(_)) || void 0 === e ? void 0 : e.skuId)
                    }
                }), [Ie, ge, _, ce]);
                var Ye = (0, s.Z)((function() {
                        return Date.now()
                    }), [Ne]),
                    Be = a.useCallback((function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.trackedFromStep,
                            r = t.analyticsDataOverride,
                            a = t.fulfillment;
                        e === y.h8.CONFIRM && (null == d || d(a));
                        Pe(e);
                        Te(null);
                        var i = null != n ? n : Ne,
                            l = Date.now();
                        null !== i ? g.default.track(B.rMx.PAYMENT_FLOW_STEP, Q(z({}, Ge, r), {
                            from_step: i,
                            to_step: e === y.h8.ADD_PAYMENT_STEPS ? y.h8.PAYMENT_TYPE : e,
                            step_duration_ms: l - Ye,
                            flow_duration_ms: l - Ae.startTime
                        })) : g.default.track(B.rMx.PAYMENT_FLOW_LOADED, Q(z({}, Ge), {
                            initial_step: e,
                            has_saved_payment_source: ke
                        }))
                    }), [Ge, Ae.startTime, d, Te, Pe, Ne, Ye, ke]),
                    Fe = a.useMemo((function() {
                        return function() {
                            return null == N ? void 0 : N(ve === T.A.COMPLETED)
                        }
                    }), [N, ve]);
                (0, h.bp)(Ne, Me, Be);
                (0, y.dZ)(Ne, ve, Oe);
                ! function(e, t, n) {
                    a.useEffect((function() {
                        null != e && e !== y.h8.AWAITING_PURCHASE_TOKEN_AUTH && t === m.I.PENDING ? n(y.h8.AWAITING_PURCHASE_TOKEN_AUTH) : e === y.h8.AWAITING_PURCHASE_TOKEN_AUTH && t === m.I.SUCCESS && n(y.h8.REVIEW)
                    }), [e, t, n])
                }(Ne, Re, Be);
                (0, p.Z)(Fe);
                (0, v.w)(Ce, (function() {
                    return N(!1)
                }), H);
                (0, h.D6)(Me);
                var He = {
                        initialPlanId: _,
                        giftMessage: b,
                        customGiftMessage: Ue,
                        setCustomGiftMessage: We,
                        subscriptionTier: M,
                        handleStepChange: Be,
                        handleClose: Fe,
                        analyticsData: Ge,
                        setAnalyticsData: Ze,
                        trialId: D,
                        trialFooterMessageOverride: V,
                        reviewWarningMessage: $,
                        planGroup: ee,
                        openInvoiceId: te,
                        analyticsLocation: n,
                        onSubscriptionConfirmation: ne,
                        renderPurchaseConfirmation: re,
                        postSuccessGuild: ae,
                        followupSKUInfo: ie,
                        referralTrialOfferId: ue
                    },
                    Ke = function(e) {
                        var t, n = e.isGift,
                            i = e.renderHeader,
                            l = e.referralTrialOfferId,
                            s = e.handleClose,
                            o = (0,
                                P.usePaymentContext)(),
                            c = o.selectedSkuId,
                            f = o.step,
                            d = o.selectedPlan,
                            p = o.purchaseState,
                            E = o.selectedGiftStyle,
                            _ = o.purchaseType,
                            h = o.giftRecipient,
                            m = L.ZP.useExperiment({
                                location: "cbdb8c_1"
                            }, {
                                autoTrackExposure: !1
                            }).enabled,
                            v = (0, L.rK)();
                        a.useEffect((function() {
                            v && n && L.ZP.trackExposure({
                                location: "cbdb8c_2"
                            })
                        }), [v, n]);
                        var O = m && v && n && c === G.Si.TIER_2,
                            b = (O || (0, S.a8)(h)) && f === y.h8.CONFIRM && null != E,
                            g = null != i && null != f,
                            I = f !== y.h8.SKU_SELECT && null != c,
                            T = (0, j.N)(l),
                            M = !n && null != T && null != c && G.nG[T.trial_id].skus.includes(c),
                            N = (0, k.N)(),
                            D = null == N || null === (t = N.discount) || void 0 === t ? void 0 : t.plan_ids.some((function(e) {
                                return G.GP[e].skuId === c
                            })),
                            W = !n && null != N && null != c && D;
                        return a.useMemo((function() {
                            if (null != f) {
                                var e = null;
                                if (b) e = (0, r.jsxs)("div", {
                                    className: U().container,
                                    children: [(0, r.jsx)(w.Z, {
                                        defaultAnimationState: C.SR.LOOP,
                                        giftStyle: E,
                                        className: U().seasonalGiftBoxHeaderIcon
                                    }), (0, r.jsx)(u.ModalCloseButton, {
                                        onClick: s,
                                        className: U().closeButton
                                    })]
                                });
                                else if (g) e = i(null != d ? d : null, s, f);
                                else if (_ === Z.GZ.ONE_TIME) e = (0, r.jsx)(R.t, {
                                    step: f,
                                    onClose: s
                                });
                                else if (I) {
                                    A()(c in G.y7, "invalid sku id: ".concat(c));
                                    e = (0, r.jsx)(x.Z, {
                                        currentStep: null != f ? f : void 0,
                                        purchaseState: p,
                                        premiumType: G.y7[c],
                                        onClose: s,
                                        useWinterTheme: O,
                                        showTrialBadge: M,
                                        showDiscountBadge: W,
                                        giftRecipient: h
                                    })
                                }
                                return e
                            }
                        }), [O, E, s, p, i, d, c, f, M, W, b, I, g, _, h])
                    }({
                        isGift: H,
                        renderHeader: le,
                        referralTrialOfferId: ue,
                        handleClose: Fe
                    });
                return (0, r.jsx)(u.Shaker, {
                    className: K().shaker,
                    isShaking: de && ve === T.A.PURCHASING,
                    intensity: 2,
                    children: (0, r.jsx)(u.ModalRoot, {
                        className: l()(K().root, X({}, K().withHeader, null != Ke)),
                        transitionState: E,
                        hideShadow: he,
                        size: Ee ? u.ModalSize.LARGE : u.ModalSize.SMALL,
                        children: (0, r.jsx)(Y.ZP, z({
                            header: Ke,
                            isLargeModal: Ee
                        }, He))
                    })
                })
            }

            function J(e) {
                var t = e.subscriptionTier,
                    n = e.initialPlanId,
                    i = e.handleStepChange,
                    l = e.referralTrialOfferId,
                    s = (0,
                        P.usePaymentContext)(),
                    u = s.activeSubscription,
                    p = s.blockedPayments,
                    h = s.hasFetchedSubscriptions,
                    m = s.hasFetchedSubscriptionPlans,
                    v = s.currencyLoading,
                    O = s.selectedSkuId,
                    g = s.setSelectedPlanId,
                    S = s.isGift,
                    I = s.defaultPlanId,
                    T = (0, M.Z)({
                        isGift: S,
                        skuId: O,
                        referralTrialOfferId: l
                    }),
                    N = _.k.getCurrentConfig({
                        location: "055ec5_1"
                    }, {
                        autoTrackExposure: !1
                    }).defaultToMonthlyPlan,
                    A = q(a.useState(!0), 2),
                    R = A[0],
                    C = A[1],
                    L = (0, o.ZP)([b.Z], (function() {
                        return b.Z.applicationIdsFetched.has(G.RQ)
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
                    L || (0, c.yD)(G.RQ);
                    if (!R && !p)
                        if (null != n) i(y.h8.REVIEW);
                        else {
                            var e = (0, E.Wt)({
                                isTrial: T,
                                isGift: S,
                                selectedSkuId: O
                            });
                            if (e.enabled) {
                                var r = (0, E.D3)(e, O, u, I);
                                g(r);
                                i(y.h8.REVIEW)
                            } else i(null != t ? y.h8.PLAN_SELECT : y.h8.SKU_SELECT)
                        }
                }), [u, p, L, n, R, i, t, O, g, N, T, I, S]);
                return R ? (0, r.jsx)(W.Z, {}) : p ? (0, r.jsx)(d.Vq, {}) : null
            }
        },
        28648: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                a = (n(667294), n(304548)),
                i = n(21045),
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
                a = n(694329),
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
                o = n(694329),
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