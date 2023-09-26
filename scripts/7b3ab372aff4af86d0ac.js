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
                PaymentModal: () => q,
                PaymentPredicateStep: () => $
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
                b = n(551778),
                O = n(151367),
                g = n(652591),
                S = n(644144),
                I = n(694329),
                P = n(782786),
                T = n(632826),
                M = n(510142),
                N = n(441143),
                A = n.n(N),
                R = n(777315),
                C = n(621270),
                k = n(344266),
                L = n(717035),
                j = n(882211),
                w = n(301162),
                x = n(203600),
                G = n(520453),
                Z = n(881897),
                D = n.n(Z);
            var U = n(28648),
                W = n(149096),
                Y = n(2590),
                B = n(473708),
                F = n(175085),
                H = n.n(F);

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

            function X(e) {
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

            function z(e, t) {
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

            function Q(e, t) {
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
                    o = e.analyticsSourceLocation,
                    c = e.analyticsSubscriptionType,
                    f = void 0 === c ? Y.NYc.PREMIUM : c,
                    d = e.onComplete,
                    E = e.transitionState,
                    _ = e.initialPlanId,
                    O = e.giftMessage,
                    M = e.subscriptionTier,
                    N = e.onClose,
                    Z = e.trialId,
                    U = e.isGift,
                    F = void 0 !== U && U,
                    K = e.trialFooterMessageOverride,
                    q = e.reviewWarningMessage,
                    $ = e.planGroup,
                    J = void 0 === $ ? x.Y1 : $,
                    ee = e.openInvoiceId,
                    te = e.onSubscriptionConfirmation,
                    ne = e.renderPurchaseConfirmation,
                    re = e.postSuccessGuild,
                    ae = e.followupSKUInfo,
                    ie = e.renderHeader,
                    le = e.applicationId,
                    se = e.guildId,
                    oe = e.referralTrialOfferId,
                    ue = e.skuId,
                    ce = e.shakeWhilePurchasing,
                    fe = void 0 !== ce && ce,
                    de = e.isLargeModal,
                    pe = void 0 !== de && de,
                    Ee = e.hideShadow,
                    _e = void 0 !== Ee && Ee,
                    he = (0,
                        P.usePaymentContext)(),
                    ye = he.activitySessionId,
                    me = he.purchaseState,
                    ve = he.setPurchaseState,
                    be = he.selectedSkuId,
                    Oe = he.setSelectedSkuId,
                    ge = he.selectedPlan,
                    Se = he.setSelectedPlanId,
                    Ie = he.setStep,
                    Pe = he.setPurchaseError,
                    Te = he.paymentAuthenticationState,
                    Me = he.step,
                    Ne = he.contextMetadata,
                    Ae = he.purchaseTokenAuthState,
                    Re = he.activeSubscription,
                    Ce = he.priceOptions,
                    ke = he.hasPaymentSources,
                    Le = he.purchaseType,
                    je = he.giftRecipient,
                    we = Q(a.useState({
                        load_id: Ne.loadId,
                        payment_type: Y.Zuq[Le],
                        location: null != n ? n : i,
                        source: o,
                        subscription_type: f,
                        subscription_plan_id: null == ge ? void 0 : ge.id,
                        is_gift: F,
                        eligible_for_trial: null != Z,
                        location_stack: t,
                        sku_id: ue,
                        application_id: le,
                        guild_id: se,
                        payment_modal_version: "v1",
                        activity_session_id: ye
                    }), 2),
                    xe = we[0],
                    Ge = we[1],
                    Ze = Q(a.useState((0, S.a8)(je) ? B.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : void 0), 2),
                    De = Ze[0],
                    Ue = Ze[1];
                a.useEffect((function() {
                    Ge((function(e) {
                        var t = null != ge ? (0, I.aS)(ge.id, !1, F, Ce) : void 0;
                        return z(X({}, e), {
                            subscription_plan_id: null == ge ? void 0 : ge.id,
                            price: null == t ? void 0 : t.amount,
                            regular_price: null == ge ? void 0 : ge.price,
                            currency: Ce.currency,
                            sku_id: be
                        })
                    }))
                }), [ge, be, F, Ce]);
                a.useEffect((function() {
                    g.default.track(Y.rMx.PAYMENT_FLOW_STARTED, z(X({}, xe), {
                        has_saved_payment_source: ke
                    }))
                }), []);
                a.useEffect((function() {
                    Se(_);
                    if (null != ue) Oe(ue);
                    else if (null != _) {
                        var e;
                        Oe(null === (e = b.Z.get(_)) || void 0 === e ? void 0 : e.skuId)
                    }
                }), [Se, Oe, _, ue]);
                var We = (0, s.Z)((function() {
                        return Date.now()
                    }), [Me]),
                    Ye = a.useCallback((function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.trackedFromStep,
                            r = t.analyticsDataOverride,
                            a = t.fulfillment;
                        e === y.h8.CONFIRM && (null == d || d(a));
                        Ie(e);
                        Pe(null);
                        var i = null != n ? n : Me,
                            l = Date.now();
                        null !== i ? g.default.track(Y.rMx.PAYMENT_FLOW_STEP, z(X({}, xe, r), {
                            from_step: i,
                            to_step: e === y.h8.ADD_PAYMENT_STEPS ? y.h8.PAYMENT_TYPE : e,
                            step_duration_ms: l - We,
                            flow_duration_ms: l - Ne.startTime
                        })) : g.default.track(Y.rMx.PAYMENT_FLOW_LOADED, z(X({}, xe), {
                            initial_step: e,
                            has_saved_payment_source: ke
                        }))
                    }), [xe, Ne.startTime, d, Pe, Ie, Me, We, ke]),
                    Be = a.useMemo((function() {
                        return function() {
                            return null == N ? void 0 : N(me === T.A.COMPLETED)
                        }
                    }), [N, me]);
                (0, h.bp)(Me, Te, Ye);
                (0, y.dZ)(Me, me, ve);
                ! function(e, t, n) {
                    a.useEffect((function() {
                        null != e && e !== y.h8.AWAITING_PURCHASE_TOKEN_AUTH && t === m.I.PENDING ? n(y.h8.AWAITING_PURCHASE_TOKEN_AUTH) : e === y.h8.AWAITING_PURCHASE_TOKEN_AUTH && t === m.I.SUCCESS && n(y.h8.REVIEW)
                    }), [e, t, n])
                }(Me, Ae, Ye);
                (0, p.Z)(Be);
                (0, v.w)(Re, (function() {
                    return N(!1)
                }), F);
                (0, h.D6)(Te);
                var Fe = {
                        initialPlanId: _,
                        giftMessage: O,
                        customGiftMessage: De,
                        setCustomGiftMessage: Ue,
                        subscriptionTier: M,
                        handleStepChange: Ye,
                        handleClose: Be,
                        analyticsData: xe,
                        setAnalyticsData: Ge,
                        trialId: Z,
                        trialFooterMessageOverride: K,
                        reviewWarningMessage: q,
                        planGroup: J,
                        openInvoiceId: ee,
                        analyticsLocation: n,
                        onSubscriptionConfirmation: te,
                        renderPurchaseConfirmation: ne,
                        postSuccessGuild: re,
                        followupSKUInfo: ae,
                        referralTrialOfferId: oe
                    },
                    He = function(e) {
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
                            m = C.ZP.useExperiment({
                                location: "cbdb8c_1"
                            }, {
                                autoTrackExposure: !1
                            }).enabled,
                            v = (0, C.rK)();
                        a.useEffect((function() {
                            v && n && C.ZP.trackExposure({
                                location: "cbdb8c_2"
                            })
                        }), [v, n]);
                        var b = m && v && n && c === x.Si.TIER_2,
                            O = (b || (0, S.a8)(h)) && f === y.h8.CONFIRM && null != E,
                            g = null != i && null != f,
                            I = f !== y.h8.SKU_SELECT && null != c,
                            T = (0, L.N)(l),
                            M = !n && null != T && null != c && x.nG[T.trial_id].skus.includes(c),
                            N = (0, k.N)(),
                            Z = null == N || null === (t = N.discount) || void 0 === t ? void 0 : t.plan_ids.some((function(e) {
                                return x.GP[e].skuId === c
                            })),
                            U = !n && null != N && null != c && Z;
                        return a.useMemo((function() {
                            if (null != f) {
                                var e = null;
                                if (O) e = (0, r.jsxs)("div", {
                                    className: D().container,
                                    children: [(0, r.jsx)(j.Z, {
                                        giftStyle: E,
                                        className: D().seasonalGiftBoxHeaderIcon
                                    }), (0, r.jsx)(u.ModalCloseButton, {
                                        onClick: s,
                                        className: D().closeButton
                                    })]
                                });
                                else if (g) e = i(null != d ? d : null, s, f);
                                else if (_ === G.GZ.ONE_TIME) e = (0, r.jsx)(R.t, {
                                    step: f,
                                    onClose: s
                                });
                                else if (I) {
                                    A()(c in x.y7, "invalid sku id: ".concat(c));
                                    e = (0, r.jsx)(w.Z, {
                                        currentStep: null != f ? f : void 0,
                                        purchaseState: p,
                                        premiumType: x.y7[c],
                                        onClose: s,
                                        useWinterTheme: b,
                                        showTrialBadge: M,
                                        showDiscountBadge: U,
                                        giftRecipient: h
                                    })
                                }
                                return e
                            }
                        }), [b, E, s, p, i, d, c, f, M, U, O, I, g, _, h])
                    }({
                        isGift: F,
                        renderHeader: ie,
                        referralTrialOfferId: oe,
                        handleClose: Be
                    });
                return (0, r.jsx)(u.Shaker, {
                    className: H().shaker,
                    isShaking: fe && me === T.A.PURCHASING,
                    intensity: 2,
                    children: (0, r.jsx)(u.ModalRoot, {
                        className: l()(H().root, V({}, H().withHeader, null != He)),
                        transitionState: E,
                        hideShadow: _e,
                        size: pe ? u.ModalSize.LARGE : u.ModalSize.SMALL,
                        children: (0, r.jsx)(W.ZP, X({
                            header: He,
                            isLargeModal: pe
                        }, Fe))
                    })
                })
            }

            function $(e) {
                var t = e.subscriptionTier,
                    n = e.initialPlanId,
                    i = e.handleStepChange,
                    l = e.referralTrialOfferId,
                    s = (0, P.usePaymentContext)(),
                    u = s.activeSubscription,
                    p = s.blockedPayments,
                    h = s.hasFetchedSubscriptions,
                    m = s.hasFetchedSubscriptionPlans,
                    v = s.currencyLoading,
                    b = s.selectedSkuId,
                    g = s.setSelectedPlanId,
                    S = s.isGift,
                    I = s.defaultPlanId,
                    T = (0, M.Z)({
                        isGift: S,
                        skuId: b,
                        referralTrialOfferId: l
                    }),
                    N = _.k.getCurrentConfig({
                        location: "055ec5_1"
                    }, {
                        autoTrackExposure: !1
                    }).defaultToMonthlyPlan,
                    A = Q(a.useState(!0), 2),
                    R = A[0],
                    C = A[1],
                    k = (0, o.ZP)([O.Z], (function() {
                        return O.Z.applicationIdsFetched.has(x.RQ)
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
                    k || (0, c.yD)(x.RQ);
                    if (!R && !p)
                        if (null != n) i(y.h8.REVIEW);
                        else {
                            var e = (0, E.Wt)({
                                isTrial: T,
                                isGift: S,
                                selectedSkuId: b
                            });
                            if (e.enabled) {
                                var r = (0, E.D3)(e, b, u, I);
                                g(r);
                                i(y.h8.REVIEW)
                            } else i(null != t ? y.h8.PLAN_SELECT : y.h8.SKU_SELECT)
                        }
                }), [u, p, k, n, R, i, t, b, g, N, T, I, S]);
                return R ? (0, r.jsx)(U.Z, {}) : p ? (0, r.jsx)(d.Vq, {}) : null
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
                    i = (0,
                        a.e7)([s.Z], (function() {
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