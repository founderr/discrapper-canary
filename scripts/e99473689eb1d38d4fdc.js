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
                i = n(22176);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        a(e, t, n[t])
                    }))
                }
                return e
            }

            function l(e, t) {
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
            const o = function(e, t, n, a, o) {
                var u = (0, r.useRef)(!1);
                (0, r.useEffect)((function() {
                    if (t && !u.current) {
                        u.current = !0;
                        var r = setTimeout((function() {
                            var t = new Error("".concat(e, " is taking too long to load."));
                            i.Z.setExtra({
                                loadingState: a,
                                loadingTimeSeconds: n
                            });
                            i.Z.captureException(t, l(s({}, o), {
                                tags: s({}, null == o ? void 0 : o.tags)
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
                c8: () => O,
                Vq: () => I,
                oQ: () => P
            });
            var r = n(785893),
                i = (n(667294), n(294184)),
                a = n.n(i),
                s = n(795308),
                l = n(575945),
                o = n(304548),
                u = n(74535),
                c = n(818417),
                f = n(348592),
                d = n(387099),
                p = n(2590),
                E = n(473708),
                y = n(858903),
                h = n.n(y),
                m = n(495068),
                _ = n.n(m),
                v = n(377236),
                S = n.n(v);

            function g(e) {
                var t = e.className,
                    n = (0, u.ZP)(),
                    i = (0, l.wj)(n) ? _() : S();
                return (0, r.jsxs)("div", {
                    className: a()(h().container, t),
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
                        src: i,
                        className: h().splashImage,
                        alt: "Blocked Payments"
                    })]
                })
            }

            function O() {
                return (0, r.jsx)(g, {
                    className: h().settings
                })
            }

            function I() {
                return (0, r.jsx)(g, {
                    className: h().modal
                })
            }

            function P(e) {
                var t = e.className;
                return (0, d.Q)() ? (0, r.jsxs)(o.Card, {
                    className: a()(h().blockedPaymentsWarning, t),
                    type: o.Card.Types.CUSTOM,
                    children: [(0, r.jsx)(c.Z, {
                        className: h().blockedPaymentsWarningIcon,
                        color: s.Z.unsafe_rawColors.YELLOW_300.css
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
                Z: () => a
            });
            var r = n(667294),
                i = n(744564);

            function a(e) {
                var t = (0, r.useRef)(e);
                (0, r.useEffect)((function() {
                    t.current = e
                }), [e]);
                (0, r.useEffect)((function() {
                    if (__OVERLAY__) {
                        var e = function(e) {
                            e.locked && t.current()
                        };
                        i.Z.subscribe("OVERLAY_SET_INPUT_LOCKED", e);
                        return function() {
                            i.Z.unsubscribe("OVERLAY_SET_INPUT_LOCKED", e)
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
                i = n(667294),
                a = n(294184),
                s = n.n(a),
                l = n(685269),
                o = n(318715),
                u = n(304548),
                c = n(595138),
                f = n(246380),
                d = n(123435),
                p = n(186451),
                E = n(817584),
                y = n(785531),
                h = n(83471),
                m = n(909365);
            var _ = n(111090),
                v = n(551778),
                S = n(151367),
                g = n(652591),
                O = n(644144),
                I = n(116094),
                P = n(782786),
                b = n(632826),
                T = n(268226),
                M = n(510142),
                A = n(441143),
                N = n.n(A),
                R = n(777315),
                j = n(467345),
                k = n(621270),
                w = n(344266),
                C = n(717035),
                x = n(882211),
                L = n(301162),
                Z = n(203600),
                G = n(520453),
                D = n(881897),
                U = n.n(D);
            var Y = n(28648),
                W = n(149096),
                F = n(2590),
                H = n(473708),
                K = n(175085),
                B = n.n(K);

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
                        var r, i, a = [],
                            s = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
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
                    a = e.analyticsObject,
                    o = e.analyticsSourceLocation,
                    c = e.analyticsSubscriptionType,
                    f = void 0 === c ? F.NYc.PREMIUM : c,
                    d = e.onComplete,
                    E = e.transitionState,
                    S = e.initialPlanId,
                    T = e.giftMessage,
                    M = e.subscriptionTier,
                    A = e.onClose,
                    D = e.trialId,
                    Y = e.isGift,
                    K = void 0 !== Y && Y,
                    V = e.trialFooterMessageOverride,
                    $ = e.reviewWarningMessage,
                    J = e.planGroup,
                    ee = void 0 === J ? Z.Y1 : J,
                    te = e.openInvoiceId,
                    ne = e.onSubscriptionConfirmation,
                    re = e.renderPurchaseConfirmation,
                    ie = e.postSuccessGuild,
                    ae = e.followupSKUInfo,
                    se = e.renderHeader,
                    le = e.applicationId,
                    oe = e.guildId,
                    ue = e.referralTrialOfferId,
                    ce = e.skuId,
                    fe = e.shakeWhilePurchasing,
                    de = void 0 !== fe && fe,
                    pe = e.isLargeModal,
                    Ee = void 0 !== pe && pe,
                    ye = e.hideShadow,
                    he = void 0 !== ye && ye,
                    me = e.returnRef,
                    _e = (0,
                        P.usePaymentContext)(),
                    ve = _e.activitySessionId,
                    Se = _e.purchaseState,
                    ge = _e.setPurchaseState,
                    Oe = _e.selectedSkuId,
                    Ie = _e.setSelectedSkuId,
                    Pe = _e.selectedPlan,
                    be = _e.setSelectedPlanId,
                    Te = _e.setStep,
                    Me = _e.setPurchaseError,
                    Ae = _e.paymentAuthenticationState,
                    Ne = _e.step,
                    Re = _e.contextMetadata,
                    je = _e.purchaseTokenAuthState,
                    ke = _e.activeSubscription,
                    we = _e.priceOptions,
                    Ce = _e.hasPaymentSources,
                    xe = _e.purchaseType,
                    Le = _e.giftRecipient,
                    Ze = q(i.useState({
                        load_id: Re.loadId,
                        payment_type: F.Zuq[xe],
                        location: null != n ? n : a,
                        source: o,
                        subscription_type: f,
                        subscription_plan_id: null == Pe ? void 0 : Pe.id,
                        is_gift: K,
                        eligible_for_trial: null != D,
                        location_stack: t,
                        sku_id: ce,
                        application_id: le,
                        guild_id: oe,
                        payment_modal_version: "v1",
                        activity_session_id: ve
                    }), 2),
                    Ge = Ze[0],
                    De = Ze[1],
                    Ue = q(i.useState((0, O.a8)(Le) ? H.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : void 0), 2),
                    Ye = Ue[0],
                    We = Ue[1];
                i.useEffect((function() {
                    De((function(e) {
                        var t = null != Pe ? (0, I.aS)(Pe.id, !1, K, we) : void 0;
                        return Q(z({}, e), {
                            subscription_plan_id: null == Pe ? void 0 : Pe.id,
                            price: null == t ? void 0 : t.amount,
                            regular_price: null == Pe ? void 0 : Pe.price,
                            currency: we.currency,
                            sku_id: Oe
                        })
                    }))
                }), [Pe, Oe, K, we]);
                i.useEffect((function() {
                    g.default.track(F.rMx.PAYMENT_FLOW_STARTED, Q(z({}, Ge), {
                        has_saved_payment_source: Ce
                    }))
                }), []);
                i.useEffect((function() {
                    be(S);
                    if (null != ce) Ie(ce);
                    else if (null != S) {
                        var e;
                        Ie(null === (e = v.Z.get(S)) || void 0 === e ? void 0 : e.skuId)
                    }
                }), [be, Ie, S, ce]);
                var Fe = (0, l.Z)((function() {
                        return Date.now()
                    }), [Ne]),
                    He = i.useCallback((function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.trackedFromStep,
                            r = t.analyticsDataOverride,
                            i = t.fulfillment;
                        e === h.h8.CONFIRM && (null == d || d(i));
                        Te(e);
                        Me(null);
                        var a = null != n ? n : Ne,
                            s = Date.now();
                        null !== a ? g.default.track(F.rMx.PAYMENT_FLOW_STEP, Q(z({}, Ge, r), {
                            from_step: a,
                            to_step: e === h.h8.ADD_PAYMENT_STEPS ? h.h8.PAYMENT_TYPE : e,
                            step_duration_ms: s - Fe,
                            flow_duration_ms: s - Re.startTime
                        })) : g.default.track(F.rMx.PAYMENT_FLOW_LOADED, Q(z({}, Ge), {
                            initial_step: e,
                            has_saved_payment_source: Ce
                        }))
                    }), [Ge, Re.startTime, d, Me, Te, Ne, Fe, Ce]),
                    Ke = i.useMemo((function() {
                        return function() {
                            return null == A ? void 0 : A(Se === b.A.COMPLETED)
                        }
                    }), [A, Se]);
                (0, y.bp)(Ne, Ae, He);
                (0, h.dZ)(Ne, Se, ge);
                ! function(e, t, n) {
                    i.useEffect((function() {
                        null != e && e !== h.h8.AWAITING_PURCHASE_TOKEN_AUTH && t === m.I.PENDING ? n(h.h8.AWAITING_PURCHASE_TOKEN_AUTH) : e === h.h8.AWAITING_PURCHASE_TOKEN_AUTH && t === m.I.SUCCESS && n(h.h8.REVIEW)
                    }), [e, t, n])
                }(Ne, je, He);
                (0, p.Z)(Ke);
                (0, _.w)(ke, (function() {
                    return A(!1)
                }), K);
                (0, y.D6)(Ae);
                var Be = {
                        initialPlanId: S,
                        giftMessage: T,
                        customGiftMessage: Ye,
                        setCustomGiftMessage: We,
                        subscriptionTier: M,
                        handleStepChange: He,
                        handleClose: Ke,
                        analyticsData: Ge,
                        setAnalyticsData: De,
                        trialId: D,
                        trialFooterMessageOverride: V,
                        reviewWarningMessage: $,
                        planGroup: ee,
                        openInvoiceId: te,
                        analyticsLocation: n,
                        onSubscriptionConfirmation: ne,
                        renderPurchaseConfirmation: re,
                        postSuccessGuild: ie,
                        followupSKUInfo: ae,
                        referralTrialOfferId: ue
                    },
                    Ve = function(e) {
                        var t, n = e.isGift,
                            a = e.renderHeader,
                            s = e.referralTrialOfferId,
                            l = e.handleClose,
                            o = (0,
                                P.usePaymentContext)(),
                            c = o.selectedSkuId,
                            f = o.step,
                            d = o.selectedPlan,
                            p = o.purchaseState,
                            E = o.selectedGiftStyle,
                            y = o.purchaseType,
                            m = o.giftRecipient,
                            _ = k.ZP.useExperiment({
                                location: "cbdb8c_1"
                            }, {
                                autoTrackExposure: !1
                            }).enabled,
                            v = (0, k.rK)();
                        i.useEffect((function() {
                            v && n && k.ZP.trackExposure({
                                location: "cbdb8c_2"
                            })
                        }), [v, n]);
                        var S = _ && v && n && c === Z.Si.TIER_2,
                            g = (S || (0, O.a8)(m)) && f === h.h8.CONFIRM && null != E,
                            I = null != a && null != f,
                            b = f !== h.h8.SKU_SELECT && null != c,
                            T = (0, C.N)(s),
                            M = !n && null != T && null != c && Z.nG[T.trial_id].skus.includes(c),
                            A = (0, w.Ng)(),
                            D = null == A || null === (t = A.discount) || void 0 === t ? void 0 : t.plan_ids.some((function(e) {
                                return Z.GP[e].skuId === c
                            })),
                            Y = !n && null != A && null != c && D;
                        return i.useMemo((function() {
                            if (null != f) {
                                var e = null;
                                if (g) e = (0, r.jsxs)("div", {
                                    className: U().container,
                                    children: [(0, r.jsx)(x.Z, {
                                        defaultAnimationState: j.SR.LOOP,
                                        giftStyle: E,
                                        className: U().seasonalGiftBoxHeaderIcon
                                    }), (0, r.jsx)(u.ModalCloseButton, {
                                        onClick: l,
                                        className: U().closeButton
                                    })]
                                });
                                else if (I) e = a(null != d ? d : null, l, f);
                                else if (y === G.GZ.ONE_TIME) e = (0, r.jsx)(R.t, {
                                    step: f,
                                    onClose: l
                                });
                                else if (b) {
                                    N()(c in Z.y7, "invalid sku id: ".concat(c));
                                    e = (0, r.jsx)(L.Z, {
                                        currentStep: null != f ? f : void 0,
                                        purchaseState: p,
                                        premiumType: Z.y7[c],
                                        onClose: l,
                                        useWinterTheme: S,
                                        showTrialBadge: M,
                                        showDiscountBadge: Y,
                                        giftRecipient: m
                                    })
                                }
                                return e
                            }
                        }), [S, E, l, p, a, d, c, f, M, Y, g, b, I, y, m])
                    }({
                        isGift: K,
                        renderHeader: se,
                        referralTrialOfferId: ue,
                        handleClose: Ke
                    });
                return (0, r.jsx)(u.Shaker, {
                    className: B().shaker,
                    isShaking: de && Se === b.A.PURCHASING,
                    intensity: 2,
                    children: (0, r.jsx)(u.ModalRoot, {
                        className: s()(B().root, X({}, B().withHeader, null != Ve)),
                        transitionState: E,
                        hideShadow: he,
                        returnRef: me,
                        size: Ee ? u.ModalSize.LARGE : u.ModalSize.SMALL,
                        children: (0, r.jsx)(W.ZP, z({
                            header: Ve,
                            isLargeModal: Ee
                        }, Be))
                    })
                })
            }

            function J(e) {
                var t = e.subscriptionTier,
                    n = e.initialPlanId,
                    a = e.handleStepChange,
                    s = e.referralTrialOfferId,
                    l = (0,
                        P.usePaymentContext)(),
                    u = l.activeSubscription,
                    p = l.blockedPayments,
                    y = l.hasFetchedSubscriptions,
                    m = l.hasFetchedSubscriptionPlans,
                    _ = l.currencyLoading,
                    v = l.selectedSkuId,
                    g = l.setSelectedPlanId,
                    O = l.isGift,
                    I = l.defaultPlanId,
                    b = l.startedPaymentFlowWithPaymentSourcesRef.current,
                    A = (0, M.Z)({
                        isGift: O,
                        skuId: v,
                        referralTrialOfferId: s
                    }),
                    N = E.k.getCurrentConfig({
                        location: "055ec5_1"
                    }, {
                        autoTrackExposure: !1
                    }).defaultToMonthlyPlan,
                    R = q(i.useState(!0), 2),
                    j = R[0],
                    k = R[1],
                    w = (0, o.ZP)([S.Z], (function() {
                        return S.Z.applicationIdsFetched.has(Z.RQ)
                    }));
                i.useEffect((function() {
                    k(!y || !m || _)
                }), [_, m, y]);
                (0, f.Z)("Payment Modal", j, 5, {
                    hasFetchedSubscriptions: y,
                    hasFetchedSubscriptionPlans: m,
                    currencyLoading: _
                }, {
                    tags: {
                        app_context: "billing"
                    }
                });
                i.useEffect((function() {
                    w || (0, c.yD)(Z.RQ);
                    if (!j && !p) {
                        var e = (0, T.Kp)({
                            isTrial: A,
                            isGift: O,
                            selectedSkuId: v,
                            startedPaymentFlowWithPaymentSources: b
                        });
                        if (null != n) a(h.h8.REVIEW);
                        else if (e) {
                            var r = (0, T.nA)(v, u, I);
                            g(r);
                            a(h.h8.REVIEW)
                        } else a(null != t ? h.h8.PLAN_SELECT : h.h8.SKU_SELECT)
                    }
                }), [u, p, w, n, j, a, t, v, g, N, A, I, O, b]);
                return j ? (0, r.jsx)(Y.Z, {}) : p ? (0, r.jsx)(d.Vq, {}) : null
            }
        },
        28648: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                i = (n(667294), n(304548)),
                a = n(21045),
                s = n.n(a);

            function l() {
                return (0, r.jsx)(i.Spinner, {
                    className: s().spinner
                })
            }
        },
        268226: (e, t, n) => {
            "use strict";
            n.d(t, {
                Kp: () => a,
                $g: () => s,
                nA: () => l
            });
            var r = n(116094),
                i = n(203600);

            function a(e) {
                var t = e.isTrial,
                    n = e.isGift,
                    r = e.selectedSkuId,
                    a = e.startedPaymentFlowWithPaymentSources;
                return !t && !n && null != r && i.YQ.includes(r) && a
            }

            function s(e, t, n) {
                var r = !1;
                if (e && null != t) {
                    null == t.invoiceItems.find((function(e) {
                        return e.subscriptionPlanId === n.id
                    })) && (r = !0)
                }
                return r
            }

            function l(e, t, n) {
                var a = null != t ? (0, r.Af)(t) : null,
                    s = i.mn[e],
                    l = null != n ? n : s;
                null != a ? l === a.planId && l === i.IW[e] ? l = i.mn[e] : l === a.planId && l === i.mn[e] ? l = i.IW[e] : a.planId !== i.Xh.PREMIUM_YEAR_TIER_0 && a.planId !== i.Xh.PREMIUM_YEAR_TIER_1 || l !== i.Xh.PREMIUM_MONTH_TIER_2 || (l = i.Xh.PREMIUM_YEAR_TIER_2) : l === i.Xh.PREMIUM_YEAR_TIER_1 && (l = i.Xh.PREMIUM_MONTH_TIER_1);
                return l
            }
        },
        510142: (e, t, n) => {
            "use strict";
            n.d(t, {
                T: () => a,
                Z: () => s
            });
            var r = n(717035),
                i = n(203600);

            function a(e) {
                var t = e.userTrialOffer,
                    n = e.isGift,
                    r = e.skuId;
                return !n && null != t && i.nG[t.trial_id].skus.includes(r)
            }

            function s(e) {
                var t = e.isGift,
                    n = e.skuId,
                    a = e.referralTrialOfferId,
                    s = (0, r.N)(a);
                return !t && null != s && i.nG[s.trial_id].skus.includes(n)
            }
        },
        111090: (e, t, n) => {
            "use strict";
            n.d(t, {
                w: () => f,
                H: () => p
            });
            var r = n(667294),
                i = n(202351),
                a = n(105783),
                s = n(551778),
                l = n(151367),
                o = n(116094),
                u = n(520453),
                c = n(473708);

            function f(e, t, n) {
                r.useEffect((function() {
                    if (null != e && e.isPurchasedExternally && null != e.paymentGateway && !n) {
                        a.Z.show({
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
                var n = (0, i.e7)([s.Z], (function() {
                        return null != e ? s.Z.get(e) : null
                    })),
                    a = (0, i.e7)([l.Z], (function() {
                        var e;
                        return null != n && null !== (e = l.Z.getForSku(n.skuId)) && void 0 !== e ? e : d
                    })),
                    u = r.useMemo((function() {
                        return Array.from(a).filter((function(e) {
                            var t = e.parentId,
                                n = e.consumed;
                            return null != t && !n
                        }))
                    }), [a]);
                return {
                    hasEntitlements: !t && null != n && null != u && u.length >= o.ZP.getIntervalMonths(n.interval, n.intervalCount),
                    entitlements: u
                }
            }
        },
        685269: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n(667294);
            var i = [];

            function a(e, t) {
                var n = (0, r.useRef)(),
                    a = (0, r.useRef)(i);
                if (a.current === i) {
                    n.current = e();
                    a.current = t
                } else if (! function(e, t) {
                        if (e.length !== t.length) return !1;
                        for (var n = 0; n < t.length && n < e.length; n++)
                            if (!Object.is(e[n], t[n])) return !1;
                        return !0
                    }(t, a.current)) {
                    n.current = e();
                    a.current = t
                }
                return n.current
            }
        }
    }
]);