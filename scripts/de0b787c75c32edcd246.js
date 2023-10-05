(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [99134], {
        495068: (e, t, n) => {
            e.exports = n.p + "3255f24f5123fd8769d97157e48cb796.svg"
        },
        377236: (e, t, n) => {
            e.exports = n.p + "6cf42ec75591247991e68cfaf7801a29.svg"
        },
        577660: (e, t, n) => {
            e.exports = n.p + "5e7d050aa74c846659708b2d59c72a05.svg"
        },
        246380: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(667294),
                i = n(22176);

            function o(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        o(e, t, n[t])
                    }))
                }
                return e
            }

            function u(e, t) {
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
            const l = function(e, t, n, o, l) {
                var c = (0, r.useRef)(!1);
                (0, r.useEffect)((function() {
                    if (t && !c.current) {
                        c.current = !0;
                        var r = setTimeout((function() {
                            var t = new Error("".concat(e, " is taking too long to load."));
                            i.Z.setExtra({
                                loadingState: o,
                                loadingTimeSeconds: n
                            });
                            i.Z.captureException(t, u(a({}, l), {
                                tags: a({}, null == l ? void 0 : l.tags)
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
                c8: () => P,
                Vq: () => E,
                oQ: () => w
            });
            var r = n(785893),
                i = (n(667294), n(294184)),
                o = n.n(i),
                a = n(795308),
                u = n(575945),
                l = n(304548),
                c = n(74535),
                s = n(818417),
                f = n(348592),
                d = n(387099),
                p = n(2590),
                y = n(473708),
                b = n(858903),
                h = n.n(b),
                m = n(495068),
                v = n.n(m),
                O = n(377236),
                g = n.n(O);

            function S(e) {
                var t = e.className,
                    n = (0,
                        c.ZP)(),
                    i = (0, u.wj)(n) ? v() : g();
                return (0, r.jsxs)("div", {
                    className: o()(h().container, t),
                    children: [(0, r.jsx)(l.Heading, {
                        className: h().header,
                        variant: "heading-xl/semibold",
                        children: y.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER
                    }), (0, r.jsxs)(l.Text, {
                        className: h().description,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: [(0, r.jsx)("p", {
                            children: y.Z.Messages.REGION_BLOCKED_PAYMENTS_BODY
                        }), (0, r.jsx)("p", {
                            children: y.Z.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
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

            function P() {
                return (0, r.jsx)(S, {
                    className: h().settings
                })
            }

            function E() {
                return (0, r.jsx)(S, {
                    className: h().modal
                })
            }

            function w(e) {
                var t = e.className;
                return (0, d.Q)() ? (0, r.jsxs)(l.Card, {
                    className: o()(h().blockedPaymentsWarning, t),
                    type: l.Card.Types.CUSTOM,
                    children: [(0, r.jsx)(s.Z, {
                        className: h().blockedPaymentsWarningIcon,
                        color: a.Z.unsafe_rawColors.YELLOW_300.css
                    }), (0, r.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: y.Z.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
                            helpdeskArticle: f.Z.getArticleURL(p.BhN.BLOCKED_PAYMENTS)
                        })
                    })]
                }) : null
            }
        },
        186451: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var r = n(667294),
                i = n(744564);

            function o(e) {
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
        394166: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => y
            });
            var r = n(785893),
                i = (n(667294), n(673679)),
                o = n(151017),
                a = n(784426),
                u = n(464187),
                l = n(782786),
                c = n(586611),
                s = n(2590);

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e, t) {
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

            function p(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function y(e) {
                var t = e.onClose,
                    n = e.initialPlanId,
                    y = e.analyticsObject,
                    b = e.analyticsLocation,
                    h = e.analyticsLocations,
                    m = e.analyticsSubscriptionType,
                    v = e.renderHeader,
                    O = e.planGroup,
                    g = e.reviewWarningMessage,
                    S = e.applicationId,
                    P = e.guildId,
                    E = e.onComplete,
                    w = e.forcesTransitionToGuild,
                    j = e.skuId,
                    _ = p(e, ["onClose", "initialPlanId", "analyticsObject", "analyticsLocation", "analyticsLocations", "analyticsSubscriptionType", "renderHeader", "planGroup", "reviewWarningMessage", "applicationId", "guildId", "onComplete", "forcesTransitionToGuild", "skuId"]),
                    I = (0, l.usePaymentContext)().subscriptionMetadataRequest;
                return (0, r.jsx)(c.PaymentModal, d(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            f(e, t, n[t])
                        }))
                    }
                    return e
                }({}, _), {
                    initialPlanId: n,
                    skuId: j,
                    onClose: function(e) {
                        t();
                        var n = null == I ? void 0 : I.guild_id;
                        if (e && null != n) {
                            i.jg();
                            (0, o.i1)(n);
                            null == E || E();
                            null == n || !w && u.Z.getGuildId() === n || (0, a.uL)(s.Z5c.CHANNEL(n))
                        }
                    },
                    analyticsLocations: h,
                    analyticsObject: y,
                    analyticsLocation: b,
                    analyticsSubscriptionType: m,
                    renderHeader: v,
                    planGroup: O,
                    reviewWarningMessage: g,
                    applicationId: S,
                    guildId: P,
                    forceNewPaymentModal: !0
                }))
            }
        },
        586611: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                PaymentModal: () => Q,
                PaymentPredicateStep: () => J
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                a = n.n(o),
                u = n(685269),
                l = n(318715),
                c = n(304548),
                s = n(595138),
                f = n(246380),
                d = n(123435),
                p = n(186451),
                y = n(817584),
                b = n(785531),
                h = n(83471),
                m = n(909365);
            var v = n(111090),
                O = n(551778),
                g = n(151367),
                S = n(652591),
                P = n(644144),
                E = n(694329),
                w = n(782786),
                j = n(632826),
                _ = n(268226),
                I = n(510142),
                A = n(441143),
                T = n.n(A),
                C = n(777315),
                k = n(467345),
                x = n(621270),
                M = n(344266),
                R = n(717035),
                N = n(882211),
                D = n(301162),
                L = n(203600),
                Z = n(520453),
                G = n(881897),
                U = n.n(G);
            var F = n(28648),
                W = n(149096),
                B = n(2590),
                Y = n(473708),
                H = n(175085),
                K = n.n(H);

            function V(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function z(e, t, n) {
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
                        z(e, t, n[t])
                    }))
                }
                return e
            }

            function $(e, t) {
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
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
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

            function Q(e) {
                var t = e.analyticsLocations,
                    n = e.analyticsLocation,
                    o = e.analyticsObject,
                    l = e.analyticsSourceLocation,
                    s = e.analyticsSubscriptionType,
                    f = void 0 === s ? B.NYc.PREMIUM : s,
                    d = e.onComplete,
                    y = e.transitionState,
                    g = e.initialPlanId,
                    _ = e.giftMessage,
                    I = e.subscriptionTier,
                    A = e.onClose,
                    G = e.trialId,
                    F = e.isGift,
                    H = void 0 !== F && F,
                    V = e.trialFooterMessageOverride,
                    Q = e.reviewWarningMessage,
                    J = e.planGroup,
                    ee = void 0 === J ? L.Y1 : J,
                    te = e.openInvoiceId,
                    ne = e.onSubscriptionConfirmation,
                    re = e.renderPurchaseConfirmation,
                    ie = e.postSuccessGuild,
                    oe = e.followupSKUInfo,
                    ae = e.renderHeader,
                    ue = e.applicationId,
                    le = e.guildId,
                    ce = e.referralTrialOfferId,
                    se = e.skuId,
                    fe = e.shakeWhilePurchasing,
                    de = void 0 !== fe && fe,
                    pe = e.isLargeModal,
                    ye = void 0 !== pe && pe,
                    be = e.hideShadow,
                    he = void 0 !== be && be,
                    me = e.returnRef,
                    ve = (0,
                        w.usePaymentContext)(),
                    Oe = ve.activitySessionId,
                    ge = ve.purchaseState,
                    Se = ve.setPurchaseState,
                    Pe = ve.selectedSkuId,
                    Ee = ve.setSelectedSkuId,
                    we = ve.selectedPlan,
                    je = ve.setSelectedPlanId,
                    _e = ve.setStep,
                    Ie = ve.setPurchaseError,
                    Ae = ve.paymentAuthenticationState,
                    Te = ve.step,
                    Ce = ve.contextMetadata,
                    ke = ve.purchaseTokenAuthState,
                    xe = ve.activeSubscription,
                    Me = ve.priceOptions,
                    Re = ve.hasPaymentSources,
                    Ne = ve.purchaseType,
                    De = ve.giftRecipient,
                    Le = q(i.useState({
                        load_id: Ce.loadId,
                        payment_type: B.Zuq[Ne],
                        location: null != n ? n : o,
                        source: l,
                        subscription_type: f,
                        subscription_plan_id: null == we ? void 0 : we.id,
                        is_gift: H,
                        eligible_for_trial: null != G,
                        location_stack: t,
                        sku_id: se,
                        application_id: ue,
                        guild_id: le,
                        payment_modal_version: "v1",
                        activity_session_id: Oe
                    }), 2),
                    Ze = Le[0],
                    Ge = Le[1],
                    Ue = q(i.useState((0, P.a8)(De) ? Y.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : void 0), 2),
                    Fe = Ue[0],
                    We = Ue[1];
                i.useEffect((function() {
                    Ge((function(e) {
                        var t = null != we ? (0, E.aS)(we.id, !1, H, Me) : void 0;
                        return $(X({}, e), {
                            subscription_plan_id: null == we ? void 0 : we.id,
                            price: null == t ? void 0 : t.amount,
                            regular_price: null == we ? void 0 : we.price,
                            currency: Me.currency,
                            sku_id: Pe
                        })
                    }))
                }), [we, Pe, H, Me]);
                i.useEffect((function() {
                    S.default.track(B.rMx.PAYMENT_FLOW_STARTED, $(X({}, Ze), {
                        has_saved_payment_source: Re
                    }))
                }), []);
                i.useEffect((function() {
                    je(g);
                    if (null != se) Ee(se);
                    else if (null != g) {
                        var e;
                        Ee(null === (e = O.Z.get(g)) || void 0 === e ? void 0 : e.skuId)
                    }
                }), [je, Ee, g, se]);
                var Be = (0, u.Z)((function() {
                        return Date.now()
                    }), [Te]),
                    Ye = i.useCallback((function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.trackedFromStep,
                            r = t.analyticsDataOverride,
                            i = t.fulfillment;
                        e === h.h8.CONFIRM && (null == d || d(i));
                        _e(e);
                        Ie(null);
                        var o = null != n ? n : Te,
                            a = Date.now();
                        null !== o ? S.default.track(B.rMx.PAYMENT_FLOW_STEP, $(X({}, Ze, r), {
                            from_step: o,
                            to_step: e === h.h8.ADD_PAYMENT_STEPS ? h.h8.PAYMENT_TYPE : e,
                            step_duration_ms: a - Be,
                            flow_duration_ms: a - Ce.startTime
                        })) : S.default.track(B.rMx.PAYMENT_FLOW_LOADED, $(X({}, Ze), {
                            initial_step: e,
                            has_saved_payment_source: Re
                        }))
                    }), [Ze, Ce.startTime, d, Ie, _e, Te, Be, Re]),
                    He = i.useMemo((function() {
                        return function() {
                            return null == A ? void 0 : A(ge === j.A.COMPLETED)
                        }
                    }), [A, ge]);
                (0, b.bp)(Te, Ae, Ye);
                (0, h.dZ)(Te, ge, Se);
                ! function(e, t, n) {
                    i.useEffect((function() {
                        null != e && e !== h.h8.AWAITING_PURCHASE_TOKEN_AUTH && t === m.I.PENDING ? n(h.h8.AWAITING_PURCHASE_TOKEN_AUTH) : e === h.h8.AWAITING_PURCHASE_TOKEN_AUTH && t === m.I.SUCCESS && n(h.h8.REVIEW)
                    }), [e, t, n])
                }(Te, ke, Ye);
                (0, p.Z)(He);
                (0, v.w)(xe, (function() {
                    return A(!1)
                }), H);
                (0, b.D6)(Ae);
                var Ke = {
                        initialPlanId: g,
                        giftMessage: _,
                        customGiftMessage: Fe,
                        setCustomGiftMessage: We,
                        subscriptionTier: I,
                        handleStepChange: Ye,
                        handleClose: He,
                        analyticsData: Ze,
                        setAnalyticsData: Ge,
                        trialId: G,
                        trialFooterMessageOverride: V,
                        reviewWarningMessage: Q,
                        planGroup: ee,
                        openInvoiceId: te,
                        analyticsLocation: n,
                        onSubscriptionConfirmation: ne,
                        renderPurchaseConfirmation: re,
                        postSuccessGuild: ie,
                        followupSKUInfo: oe,
                        referralTrialOfferId: ce
                    },
                    Ve = function(e) {
                        var t, n = e.isGift,
                            o = e.renderHeader,
                            a = e.referralTrialOfferId,
                            u = e.handleClose,
                            l = (0,
                                w.usePaymentContext)(),
                            s = l.selectedSkuId,
                            f = l.step,
                            d = l.selectedPlan,
                            p = l.purchaseState,
                            y = l.selectedGiftStyle,
                            b = l.purchaseType,
                            m = l.giftRecipient,
                            v = x.ZP.useExperiment({
                                location: "cbdb8c_1"
                            }, {
                                autoTrackExposure: !1
                            }).enabled,
                            O = (0, x.rK)();
                        i.useEffect((function() {
                            O && n && x.ZP.trackExposure({
                                location: "cbdb8c_2"
                            })
                        }), [O, n]);
                        var g = v && O && n && s === L.Si.TIER_2,
                            S = (g || (0, P.a8)(m)) && f === h.h8.CONFIRM && null != y,
                            E = null != o && null != f,
                            j = f !== h.h8.SKU_SELECT && null != s,
                            _ = (0, R.N)(a),
                            I = !n && null != _ && null != s && L.nG[_.trial_id].skus.includes(s),
                            A = (0, M.Ng)(),
                            G = null == A || null === (t = A.discount) || void 0 === t ? void 0 : t.plan_ids.some((function(e) {
                                return L.GP[e].skuId === s
                            })),
                            F = !n && null != A && null != s && G;
                        return i.useMemo((function() {
                            if (null != f) {
                                var e = null;
                                if (S) e = (0, r.jsxs)("div", {
                                    className: U().container,
                                    children: [(0, r.jsx)(N.Z, {
                                        defaultAnimationState: k.SR.LOOP,
                                        giftStyle: y,
                                        className: U().seasonalGiftBoxHeaderIcon
                                    }), (0, r.jsx)(c.ModalCloseButton, {
                                        onClick: u,
                                        className: U().closeButton
                                    })]
                                });
                                else if (E) e = o(null != d ? d : null, u, f);
                                else if (b === Z.GZ.ONE_TIME) e = (0, r.jsx)(C.t, {
                                    step: f,
                                    onClose: u
                                });
                                else if (j) {
                                    T()(s in L.y7, "invalid sku id: ".concat(s));
                                    e = (0, r.jsx)(D.Z, {
                                        currentStep: null != f ? f : void 0,
                                        purchaseState: p,
                                        premiumType: L.y7[s],
                                        onClose: u,
                                        useWinterTheme: g,
                                        showTrialBadge: I,
                                        showDiscountBadge: F,
                                        giftRecipient: m
                                    })
                                }
                                return e
                            }
                        }), [g, y, u, p, o, d, s, f, I, F, S, j, E, b, m])
                    }({
                        isGift: H,
                        renderHeader: ae,
                        referralTrialOfferId: ce,
                        handleClose: He
                    });
                return (0, r.jsx)(c.Shaker, {
                    className: K().shaker,
                    isShaking: de && ge === j.A.PURCHASING,
                    intensity: 2,
                    children: (0, r.jsx)(c.ModalRoot, {
                        className: a()(K().root, z({}, K().withHeader, null != Ve)),
                        transitionState: y,
                        hideShadow: he,
                        returnRef: me,
                        size: ye ? c.ModalSize.LARGE : c.ModalSize.SMALL,
                        children: (0, r.jsx)(W.ZP, X({
                            header: Ve,
                            isLargeModal: ye
                        }, Ke))
                    })
                })
            }

            function J(e) {
                var t = e.subscriptionTier,
                    n = e.initialPlanId,
                    o = e.handleStepChange,
                    a = e.referralTrialOfferId,
                    u = (0,
                        w.usePaymentContext)(),
                    c = u.activeSubscription,
                    p = u.blockedPayments,
                    b = u.hasFetchedSubscriptions,
                    m = u.hasFetchedSubscriptionPlans,
                    v = u.currencyLoading,
                    O = u.selectedSkuId,
                    S = u.setSelectedPlanId,
                    P = u.isGift,
                    E = u.defaultPlanId,
                    j = u.startedPaymentFlowWithPaymentSourcesRef.current,
                    A = (0, I.Z)({
                        isGift: P,
                        skuId: O,
                        referralTrialOfferId: a
                    }),
                    T = y.k.getCurrentConfig({
                        location: "055ec5_1"
                    }, {
                        autoTrackExposure: !1
                    }).defaultToMonthlyPlan,
                    C = q(i.useState(!0), 2),
                    k = C[0],
                    x = C[1],
                    M = (0, l.ZP)([g.Z], (function() {
                        return g.Z.applicationIdsFetched.has(L.RQ)
                    }));
                i.useEffect((function() {
                    x(!b || !m || v)
                }), [v, m, b]);
                (0, f.Z)("Payment Modal", k, 5, {
                    hasFetchedSubscriptions: b,
                    hasFetchedSubscriptionPlans: m,
                    currencyLoading: v
                }, {
                    tags: {
                        app_context: "billing"
                    }
                });
                i.useEffect((function() {
                    M || (0, s.yD)(L.RQ);
                    if (!k && !p) {
                        var e = (0, _.Kp)({
                            isTrial: A,
                            isGift: P,
                            selectedSkuId: O,
                            startedPaymentFlowWithPaymentSources: j
                        });
                        if (null != n) o(h.h8.REVIEW);
                        else if (e) {
                            var r = (0, _.nA)(O, c, E);
                            S(r);
                            o(h.h8.REVIEW)
                        } else o(null != t ? h.h8.PLAN_SELECT : h.h8.SKU_SELECT)
                    }
                }), [c, p, M, n, k, o, t, O, S, T, A, E, P, j]);
                return k ? (0, r.jsx)(F.Z, {}) : p ? (0, r.jsx)(d.Vq, {}) : null
            }
        },
        28648: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var r = n(785893),
                i = (n(667294), n(304548)),
                o = n(21045),
                a = n.n(o);

            function u() {
                return (0, r.jsx)(i.Spinner, {
                    className: a().spinner
                })
            }
        },
        268226: (e, t, n) => {
            "use strict";
            n.d(t, {
                Kp: () => o,
                $g: () => a,
                nA: () => u
            });
            var r = n(694329),
                i = n(203600);

            function o(e) {
                var t = e.isTrial,
                    n = e.isGift,
                    r = e.selectedSkuId,
                    o = e.startedPaymentFlowWithPaymentSources;
                return !t && !n && null != r && i.YQ.includes(r) && o
            }

            function a(e, t, n) {
                var r = !1;
                if (e && null != t) {
                    null == t.invoiceItems.find((function(e) {
                        return e.subscriptionPlanId === n.id
                    })) && (r = !0)
                }
                return r
            }

            function u(e, t, n) {
                var o = null != t ? (0, r.Af)(t) : null,
                    a = i.mn[e],
                    u = null != n ? n : a;
                null != o ? u === o.planId && u === i.IW[e] ? u = i.mn[e] : u === o.planId && u === i.mn[e] ? u = i.IW[e] : o.planId !== i.Xh.PREMIUM_YEAR_TIER_0 && o.planId !== i.Xh.PREMIUM_YEAR_TIER_1 || u !== i.Xh.PREMIUM_MONTH_TIER_2 || (u = i.Xh.PREMIUM_YEAR_TIER_2) : u === i.Xh.PREMIUM_YEAR_TIER_1 && (u = i.Xh.PREMIUM_MONTH_TIER_1);
                return u
            }
        },
        510142: (e, t, n) => {
            "use strict";
            n.d(t, {
                T: () => o,
                Z: () => a
            });
            var r = n(717035),
                i = n(203600);

            function o(e) {
                var t = e.userTrialOffer,
                    n = e.isGift,
                    r = e.skuId;
                return !n && null != t && i.nG[t.trial_id].skus.includes(r)
            }

            function a(e) {
                var t = e.isGift,
                    n = e.skuId,
                    o = e.referralTrialOfferId,
                    a = (0, r.N)(o);
                return !t && null != a && i.nG[a.trial_id].skus.includes(n)
            }
        },
        467345: (e, t, n) => {
            "use strict";
            n.d(t, {
                SR: () => d,
                _G: () => h,
                YD: () => m
            });
            var r = n(441143),
                i = n.n(r),
                o = n(761953),
                a = n(720419),
                u = n(30027),
                l = n(61209),
                c = n(644144),
                s = n(69427);

            function f(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }
            var d, p = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1,
                                    r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, u])
                    }
                }
            };
            ! function(e) {
                e.ACTION = "action";
                e.LOOP = "loop";
                e.IDLE = "idle"
            }(d || (d = {}));
            var y, b, h = function(e, t) {
                    var r;
                    switch (e) {
                        case s.Cj.SNOWGLOBE:
                            r = function() {
                                return n.e(92494).then(n.t.bind(n, 292494, 23)).then((function(e) {
                                    return e.default
                                }))
                            };
                            break;
                        case s.Cj.BOX:
                            r = function() {
                                return n.e(45555).then(n.t.bind(n, 245555, 23)).then((function(e) {
                                    return e.default
                                }))
                            };
                            break;
                        case s.Cj.CUP:
                            r = function() {
                                return n.e(21243).then(n.t.bind(n, 421243, 23)).then((function(e) {
                                    return e.default
                                }))
                            };
                            break;
                        case s.Cj.STANDARD_BOX:
                            switch (t) {
                                case d.IDLE:
                                    r = function() {
                                        return n.e(78901).then(n.t.bind(n, 278901, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                case d.LOOP:
                                    r = function() {
                                        return n.e(62252).then(n.t.bind(n, 162252, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                default:
                                    r = function() {
                                        return n.e(12955).then(n.t.bind(n, 112955, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    }
                            }
                            break;
                        case s.Cj.CAKE:
                            switch (t) {
                                case d.IDLE:
                                    r = function() {
                                        return n.e(77455).then(n.t.bind(n, 777455, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                case d.LOOP:
                                    r = function() {
                                        return n.e(96988).then(n.t.bind(n, 896988, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                default:
                                    r = function() {
                                        return n.e(55507).then(n.t.bind(n, 755507, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    }
                            }
                            break;
                        case s.Cj.CHEST:
                            switch (t) {
                                case d.IDLE:
                                    r = function() {
                                        return n.e(67090).then(n.t.bind(n, 54436, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                case d.LOOP:
                                    r = function() {
                                        return n.e(54682).then(n.t.bind(n, 454682, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                default:
                                    r = function() {
                                        return n.e(49537).then(n.t.bind(n, 349537, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    }
                            }
                            break;
                        case s.Cj.COFFEE:
                            switch (t) {
                                case d.IDLE:
                                    r = function() {
                                        return n.e(76803).then(n.t.bind(n, 76803, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                case d.LOOP:
                                    r = function() {
                                        return n.e(1133).then(n.t.bind(n, 101133, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                default:
                                    r = function() {
                                        return n.e(86636).then(n.t.bind(n, 86636, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    }
                            }
                            break;
                        default:
                            r = function() {
                                return Promise.resolve("Error: Invalid giftStyle")
                            }
                    }
                    return r
                },
                m = (b = (y = function(e, t) {
                    var n, r;
                    return p(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                if (null == t) throw new Error("giftCode must be defined");
                                if (null == e) throw new Error("Recipient must be defined");
                                return [4, o.Z.openPrivateChannel(e.id).then((function(e) {
                                    var t = l.Z.getChannel(e);
                                    i()(null != t, "PrivateChannel is null");
                                    if (null == t) throw new Error("Channel must be defined");
                                    return t
                                }))];
                            case 1:
                                n = s.sent();
                                r = (0, c.Nz)(t);
                                return [2, a.Z.sendMessage(n.id, u.ZP.parse(n, r), void 0, {
                                    isGiftLinkSentOnBehalfOfUser: !0
                                })]
                        }
                    }))
                }, function() {
                    var e = this,
                        t = arguments;
                    return new Promise((function(n, r) {
                        var i = y.apply(e, t);

                        function o(e) {
                            f(i, n, r, o, a, "next", e)
                        }

                        function a(e) {
                            f(i, n, r, o, a, "throw", e)
                        }
                        o(void 0)
                    }))
                }), function(e, t) {
                    return b.apply(this, arguments)
                })
        },
        621270: (e, t, n) => {
            "use strict";
            n.d(t, {
                rK: () => d,
                ZP: () => p
            });
            var r = n(667294),
                i = n(730381),
                o = n.n(i),
                a = n(513328),
                u = n(249139);

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function c(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var s = new Date("2023-01-01T07:59:59.000Z"),
                f = o()(s);

            function d() {
                var e = c(r.useState((function() {
                        return f.isAfter(Date.now())
                    })), 2),
                    t = e[0],
                    n = e[1];
                r.useEffect((function() {
                    var e = new a.V7,
                        r = function() {
                            var t = f.diff(Date.now(), "millisecond");
                            null == e || e.start(t, (function() {
                                f.isBefore(Date.now()) ? n(!1) : r()
                            }))
                        };
                    t && r();
                    return function() {
                        return e.stop()
                    }
                }));
                return t
            }
            const p = (0, u.Z)({
                id: "2022-12_seasonal_gifting",
                label: "Seasonal Gifting",
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
            })
        },
        882211: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                i = n(667294),
                o = n(202351),
                a = n(316878),
                u = n(776009),
                l = n(467345),
                c = n(69427);

            function s(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function f(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(e) {
                var t = e.giftStyle,
                    n = e.className,
                    s = e.shouldAnimate,
                    d = void 0 === s || s,
                    p = e.defaultAnimationState,
                    y = e.idleAnimationState,
                    b = (0, o.e7)([a.Z], (function() {
                        return a.Z.useReducedMotion
                    })),
                    h = f(i.useState(p), 2),
                    m = h[0],
                    v = h[1],
                    O = i.useRef((0, l._G)(t, m)),
                    g = f(i.useState(null == y), 2),
                    S = g[0],
                    P = g[1],
                    E = f(i.useState(!1), 2),
                    w = E[0],
                    j = E[1],
                    _ = f(i.useState(-1), 2),
                    I = _[0],
                    A = _[1],
                    T = function() {
                        O.current = (0, l._G)(t, m);
                        A((function(e) {
                            return e + 1
                        }))
                    };
                i.useEffect((function() {
                    null == y && v(p)
                }), [y, p]);
                i.useEffect((function() {
                    null != y && I >= 0 ? function() {
                        P(!1);
                        j(!0);
                        A(-1);
                        v(p)
                    }() : T()
                }), [t, y]);
                i.useEffect((function() {
                    w && null != y || T()
                }), [m]);
                i.useEffect((function() {
                    if (w) {
                        P(null == y);
                        j(!1);
                        T()
                    }
                }), [w]);
                if (!c.Cj.hasOwnProperty(t)) throw new Error("Unexpected giftStyle ".concat(t));
                return (0, r.jsx)(u.Z, {
                    importData: O.current,
                    shouldAnimate: !b && d,
                    className: n,
                    versionKey: I,
                    onComplete: null != y ? function() {
                        if (null != y) {
                            v(y);
                            P(!0)
                        }
                    } : void 0,
                    loop: S
                })
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
                o = n(105783),
                a = n(551778),
                u = n(151367),
                l = n(694329),
                c = n(520453),
                s = n(473708);

            function f(e, t, n) {
                r.useEffect((function() {
                    if (null != e && e.isPurchasedExternally && null != e.paymentGateway && !n) {
                        o.Z.show({
                            title: s.Z.Messages.BILLING_EXTERNAL_HEADER.format({
                                paymentGatewayName: c.Vz[e.paymentGateway]
                            }),
                            body: s.Z.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
                                paymentGatewayName: c.Vz[e.paymentGateway],
                                subscriptionManagementLink: (0, l.JE)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                            }),
                            confirmText: s.Z.Messages.OKAY
                        });
                        t()
                    }
                }), [e])
            }
            var d = [];

            function p(e, t) {
                var n = (0, i.e7)([a.Z], (function() {
                        return null != e ? a.Z.get(e) : null
                    })),
                    o = (0, i.e7)([u.Z], (function() {
                        var e;
                        return null != n && null !== (e = u.Z.getForSku(n.skuId)) && void 0 !== e ? e : d
                    })),
                    c = r.useMemo((function() {
                        return Array.from(o).filter((function(e) {
                            var t = e.parentId,
                                n = e.consumed;
                            return null != t && !n
                        }))
                    }), [o]);
                return {
                    hasEntitlements: !t && null != n && null != c && c.length >= l.ZP.getIntervalMonths(n.interval, n.intervalCount),
                    entitlements: c
                }
            }
        },
        311865: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                a = n.n(o),
                u = n(202351),
                l = n(316878),
                c = n(901654),
                s = n(574075),
                f = n.n(s);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function p(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function y(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function b(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
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

            function v(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function O(e, t) {
                return !t || "object" !== P(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function g(e, t) {
                g = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return g(e, t)
            }

            function S(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var P = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function E(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = h(e);
                    if (t) {
                        var i = h(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return O(this, n)
                }
            }
            var w = function(e, t) {
                    var n, r, i, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function u(o) {
                        return function(u) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < i[1]) {
                                                a.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && a.label < i[2]) {
                                                a.label = i[2];
                                                a.ops.push(o);
                                                break
                                            }
                                            i[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, a)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, u])
                        }
                    }
                },
                j = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && g(e, t)
                    }(i, e);
                    var t = E(i);

                    function i() {
                        y(this, i);
                        var e;
                        (e = t.apply(this, arguments)).animationRef = null;
                        e.currentScene = e.props.nextScene;
                        e.isUnmounted = !1;
                        e.handleLoopComplete = function() {
                            var t = e.props,
                                n = t.onSceneComplete,
                                r = t.nextScene;
                            null != n && n(e.currentScene);
                            e.playScene(r)
                        };
                        e.handleComplete = function() {
                            var t = e.props.onSceneComplete;
                            null != t && t(e.currentScene)
                        };
                        e.handleSetRef = function(t) {
                            e.animationRef = t;
                            var n = e.props.animationRef;
                            null != n && n(t)
                        };
                        return e
                    }
                    var o = i.prototype;
                    o.componentDidMount = function() {
                        var e, t = this;
                        return (e = function() {
                            var e, r, i, o, a, u, l, c, s, f, d;
                            return w(this, (function(p) {
                                switch (p.label) {
                                    case 0:
                                        e = t.props, r = e.importData, i = e.nextScene, o = e.pauseWhileUnfocused, a = e.pause, u = e.isWindowFocused, l = e.useReducedMotion;
                                        return [4, Promise.all([r(), n.e(11248).then(n.t.bind(n, 211248, 23))])];
                                    case 1:
                                        c = S.apply(void 0, [p.sent(), 2]), s = c[0], f = c[1], d = f.default;
                                        if (null == t.animationRef) return [2];
                                        t.animation = d.loadAnimation({
                                            container: t.animationRef,
                                            renderer: "svg",
                                            loop: !0,
                                            autoplay: !0,
                                            animationData: s
                                        });
                                        t.animation.addEventListener("loopComplete", t.handleLoopComplete);
                                        t.animation.addEventListener("complete", t.handleComplete);
                                        t.playScene(i);
                                        (o && !u || a || l) && t.animation.pause();
                                        return [2]
                                }
                            }))
                        }, function() {
                            var t = this,
                                n = arguments;
                            return new Promise((function(r, i) {
                                var o = e.apply(t, n);

                                function a(e) {
                                    p(o, r, i, a, u, "next", e)
                                }

                                function u(e) {
                                    p(o, r, i, a, u, "throw", e)
                                }
                                a(void 0)
                            }))
                        })()
                    };
                    o.componentWillUnmount = function() {
                        this.isUnmounted = !0;
                        if (null != this.animation) {
                            this.animation.destroy();
                            this.animation = void 0
                        }
                    };
                    o.componentDidUpdate = function(e) {
                        var t = this.props,
                            n = t.nextScene,
                            r = t.pauseWhileUnfocused,
                            i = t.pause,
                            o = t.isWindowFocused,
                            a = t.useReducedMotion;
                        n !== this.currentScene && this.shouldForcePlayAfter() && !i && this.playScene(n);
                        null != this.animation && (r && !e.isWindowFocused && o && !a && !0 !== i ? this.animation.play() : (a || r && e.isWindowFocused && !o) && this.animation.pause());
                        if (!e.pause && i) {
                            var u;
                            null === (u = this.animation) || void 0 === u || u.pause()
                        } else if (e.pause && !i && !a) {
                            var l;
                            null === (l = this.animation) || void 0 === l || l.play()
                        }
                        if (e.nextScene !== n && i) {
                            var c;
                            this.playScene(n);
                            null === (c = this.animation) || void 0 === c || c.pause()
                        }
                    };
                    o.shouldForcePlayAfter = function() {
                        return !0 === this.props.sceneSegments[this.currentScene].shouldForcePlayAfter
                    };
                    o.playScene = function(e) {
                        if (!this.isUnmounted) {
                            var t = this.props,
                                n = t.onScenePlay,
                                r = t.sceneSegments,
                                i = t.useReducedMotion,
                                o = r[e],
                                a = r[this.currentScene];
                            null == this.animation || e !== this.currentScene && o.BEG === a.BEG && o.END === a.END || this.animation.playSegments([o.BEG, o.END], !0);
                            this.currentScene = e;
                            null != n && n(this.currentScene);
                            if (i) {
                                var u;
                                null === (u = this.animation) || void 0 === u || u.pause()
                            }
                        }
                    };
                    o.render = function() {
                        return (0, r.jsx)("div", {
                            ref: this.handleSetRef,
                            className: a()(this.props.className, f().wrapper)
                        })
                    };
                    return i
                }(i.PureComponent);
            j.defaultProps = {
                pauseWhileUnfocused: !0,
                pause: !1
            };
            const _ = function(e) {
                var t = e.componentRef,
                    n = v(e, ["componentRef"]),
                    i = (0, u.e7)([c.Z], (function() {
                        return c.Z.isFocused()
                    })),
                    o = (0, u.e7)([l.Z], (function() {
                        return l.Z.useReducedMotion
                    }));
                return (0, r.jsx)(j, m(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            b(e, t, n[t])
                        }))
                    }
                    return e
                }({}, n), {
                    isWindowFocused: i,
                    useReducedMotion: o,
                    ref: t
                }))
            }
        },
        507965: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                i = n(667294),
                o = n(652411);

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
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

            function c(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var s = [n(577660)],
                f = ["#FFFFFF"],
                d = {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: 0,
                            y: 1
                        },
                        maxValue: {
                            x: 3,
                            y: 3
                        }
                    },
                    rotation: {
                        type: "linear-random",
                        minValue: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        maxValue: {
                            x: 0,
                            y: 0,
                            z: 360
                        },
                        minAddValue: {
                            x: 0,
                            y: 0,
                            z: -5
                        },
                        maxAddValue: {
                            x: 0,
                            y: 0,
                            z: 5
                        }
                    },
                    size: {
                        type: "static-random",
                        minValue: 2,
                        maxValue: 6
                    },
                    dragCoefficient: {
                        type: "static",
                        value: {
                            x: .05,
                            y: .05
                        }
                    },
                    opacity: {
                        type: "static",
                        value: .3
                    }
                };

            function p(e) {
                var t = e.className,
                    n = e.firing,
                    a = void 0 === n || n,
                    p = e.wind,
                    y = void 0 === p ? 2 : p,
                    b = c(i.useState(null), 2),
                    h = b[0],
                    m = b[1],
                    v = c(i.useState(null), 2),
                    O = v[0],
                    g = v[1],
                    S = (0, o.uR)(O, h),
                    P = i.useMemo((function() {
                        return new o.qA({
                            wind: y
                        })
                    }), [y]),
                    E = i.useCallback((function() {
                        var e = null == O ? void 0 : O.getCanvas();
                        if (null != e) {
                            var t = e.getBoundingClientRect();
                            S.createConfetti(l(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))));
                                    r.forEach((function(t) {
                                        u(e, t, n[t])
                                    }))
                                }
                                return e
                            }({}, d), {
                                position: {
                                    type: "static-random",
                                    minValue: {
                                        x: -t.width / 2,
                                        y: -6
                                    },
                                    maxValue: {
                                        x: t.width,
                                        y: -6
                                    }
                                }
                            }))
                        }
                    }), [S, O]);
                i.useEffect((function() {
                    var e = a ? setInterval(E, 16.666666666666668) : null;
                    return function() {
                        return clearInterval(e)
                    }
                }), [a, E]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(o.O_, {
                        ref: g,
                        className: t,
                        environment: P
                    }), (0, r.jsx)(o.Ji, {
                        ref: m,
                        colors: f,
                        sprites: s,
                        spriteWidth: 6,
                        spriteHeight: 6
                    })]
                })
            }
        }
    }
]);