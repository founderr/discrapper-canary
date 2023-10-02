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
                c8: () => S,
                Vq: () => P,
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

            function E(e) {
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

            function S() {
                return (0, r.jsx)(E, {
                    className: h().settings
                })
            }

            function P() {
                return (0, r.jsx)(E, {
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
                    E = e.applicationId,
                    S = e.guildId,
                    P = e.onComplete,
                    w = e.forcesTransitionToGuild,
                    _ = e.skuId,
                    j = p(e, ["onClose", "initialPlanId", "analyticsObject", "analyticsLocation", "analyticsLocations", "analyticsSubscriptionType", "renderHeader", "planGroup", "reviewWarningMessage", "applicationId", "guildId", "onComplete", "forcesTransitionToGuild", "skuId"]),
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
                }({}, j), {
                    initialPlanId: n,
                    skuId: _,
                    onClose: function(e) {
                        t();
                        var n = null == I ? void 0 : I.guild_id;
                        if (e && null != n) {
                            i.jg();
                            (0, o.i1)(n);
                            null == P || P();
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
                    applicationId: E,
                    guildId: S,
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
                y = n(818103),
                b = n(817584),
                h = n(785531),
                m = n(83471),
                v = n(909365);
            var O = n(111090),
                g = n(551778),
                E = n(151367),
                S = n(652591),
                P = n(644144),
                w = n(694329),
                _ = n(782786),
                j = n(632826),
                I = n(510142),
                T = n(441143),
                A = n.n(T),
                C = n(777315),
                M = n(467345),
                k = n(621270),
                x = n(344266),
                R = n(717035),
                N = n(882211),
                L = n(301162),
                D = n(203600),
                G = n(520453),
                Z = n(881897),
                U = n.n(Z);
            var W = n(28648),
                F = n(149096),
                B = n(2590),
                V = n(473708),
                Y = n(175085),
                H = n.n(Y);

            function K(e, t) {
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
                    if ("string" == typeof e) return K(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return K(e, t)
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
                    b = e.initialPlanId,
                    E = e.giftMessage,
                    I = e.subscriptionTier,
                    T = e.onClose,
                    Z = e.trialId,
                    W = e.isGift,
                    Y = void 0 !== W && W,
                    K = e.trialFooterMessageOverride,
                    Q = e.reviewWarningMessage,
                    J = e.planGroup,
                    ee = void 0 === J ? D.Y1 : J,
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
                    me = (0,
                        _.usePaymentContext)(),
                    ve = me.activitySessionId,
                    Oe = me.purchaseState,
                    ge = me.setPurchaseState,
                    Ee = me.selectedSkuId,
                    Se = me.setSelectedSkuId,
                    Pe = me.selectedPlan,
                    we = me.setSelectedPlanId,
                    _e = me.setStep,
                    je = me.setPurchaseError,
                    Ie = me.paymentAuthenticationState,
                    Te = me.step,
                    Ae = me.contextMetadata,
                    Ce = me.purchaseTokenAuthState,
                    Me = me.activeSubscription,
                    ke = me.priceOptions,
                    xe = me.hasPaymentSources,
                    Re = me.purchaseType,
                    Ne = me.giftRecipient,
                    Le = q(i.useState({
                        load_id: Ae.loadId,
                        payment_type: B.Zuq[Re],
                        location: null != n ? n : o,
                        source: l,
                        subscription_type: f,
                        subscription_plan_id: null == Pe ? void 0 : Pe.id,
                        is_gift: Y,
                        eligible_for_trial: null != Z,
                        location_stack: t,
                        sku_id: se,
                        application_id: ue,
                        guild_id: le,
                        payment_modal_version: "v1",
                        activity_session_id: ve
                    }), 2),
                    De = Le[0],
                    Ge = Le[1],
                    Ze = q(i.useState((0, P.a8)(Ne) ? V.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : void 0), 2),
                    Ue = Ze[0],
                    We = Ze[1];
                i.useEffect((function() {
                    Ge((function(e) {
                        var t = null != Pe ? (0, w.aS)(Pe.id, !1, Y, ke) : void 0;
                        return $(X({}, e), {
                            subscription_plan_id: null == Pe ? void 0 : Pe.id,
                            price: null == t ? void 0 : t.amount,
                            regular_price: null == Pe ? void 0 : Pe.price,
                            currency: ke.currency,
                            sku_id: Ee
                        })
                    }))
                }), [Pe, Ee, Y, ke]);
                i.useEffect((function() {
                    S.default.track(B.rMx.PAYMENT_FLOW_STARTED, $(X({}, De), {
                        has_saved_payment_source: xe
                    }))
                }), []);
                i.useEffect((function() {
                    we(b);
                    if (null != se) Se(se);
                    else if (null != b) {
                        var e;
                        Se(null === (e = g.Z.get(b)) || void 0 === e ? void 0 : e.skuId)
                    }
                }), [we, Se, b, se]);
                var Fe = (0, u.Z)((function() {
                        return Date.now()
                    }), [Te]),
                    Be = i.useCallback((function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.trackedFromStep,
                            r = t.analyticsDataOverride,
                            i = t.fulfillment;
                        e === m.h8.CONFIRM && (null == d || d(i));
                        _e(e);
                        je(null);
                        var o = null != n ? n : Te,
                            a = Date.now();
                        null !== o ? S.default.track(B.rMx.PAYMENT_FLOW_STEP, $(X({}, De, r), {
                            from_step: o,
                            to_step: e === m.h8.ADD_PAYMENT_STEPS ? m.h8.PAYMENT_TYPE : e,
                            step_duration_ms: a - Fe,
                            flow_duration_ms: a - Ae.startTime
                        })) : S.default.track(B.rMx.PAYMENT_FLOW_LOADED, $(X({}, De), {
                            initial_step: e,
                            has_saved_payment_source: xe
                        }))
                    }), [De, Ae.startTime, d, je, _e, Te, Fe, xe]),
                    Ve = i.useMemo((function() {
                        return function() {
                            return null == T ? void 0 : T(Oe === j.A.COMPLETED)
                        }
                    }), [T, Oe]);
                (0, h.bp)(Te, Ie, Be);
                (0, m.dZ)(Te, Oe, ge);
                ! function(e, t, n) {
                    i.useEffect((function() {
                        null != e && e !== m.h8.AWAITING_PURCHASE_TOKEN_AUTH && t === v.I.PENDING ? n(m.h8.AWAITING_PURCHASE_TOKEN_AUTH) : e === m.h8.AWAITING_PURCHASE_TOKEN_AUTH && t === v.I.SUCCESS && n(m.h8.REVIEW)
                    }), [e, t, n])
                }(Te, Ce, Be);
                (0, p.Z)(Ve);
                (0, O.w)(Me, (function() {
                    return T(!1)
                }), Y);
                (0, h.D6)(Ie);
                var Ye = {
                        initialPlanId: b,
                        giftMessage: E,
                        customGiftMessage: Ue,
                        setCustomGiftMessage: We,
                        subscriptionTier: I,
                        handleStepChange: Be,
                        handleClose: Ve,
                        analyticsData: De,
                        setAnalyticsData: Ge,
                        trialId: Z,
                        trialFooterMessageOverride: K,
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
                    He = function(e) {
                        var t, n = e.isGift,
                            o = e.renderHeader,
                            a = e.referralTrialOfferId,
                            u = e.handleClose,
                            l = (0,
                                _.usePaymentContext)(),
                            s = l.selectedSkuId,
                            f = l.step,
                            d = l.selectedPlan,
                            p = l.purchaseState,
                            y = l.selectedGiftStyle,
                            b = l.purchaseType,
                            h = l.giftRecipient,
                            v = k.ZP.useExperiment({
                                location: "cbdb8c_1"
                            }, {
                                autoTrackExposure: !1
                            }).enabled,
                            O = (0, k.rK)();
                        i.useEffect((function() {
                            O && n && k.ZP.trackExposure({
                                location: "cbdb8c_2"
                            })
                        }), [O, n]);
                        var g = v && O && n && s === D.Si.TIER_2,
                            E = (g || (0, P.a8)(h)) && f === m.h8.CONFIRM && null != y,
                            S = null != o && null != f,
                            w = f !== m.h8.SKU_SELECT && null != s,
                            j = (0, R.N)(a),
                            I = !n && null != j && null != s && D.nG[j.trial_id].skus.includes(s),
                            T = (0, x.Ng)(),
                            Z = null == T || null === (t = T.discount) || void 0 === t ? void 0 : t.plan_ids.some((function(e) {
                                return D.GP[e].skuId === s
                            })),
                            W = !n && null != T && null != s && Z;
                        return i.useMemo((function() {
                            if (null != f) {
                                var e = null;
                                if (E) e = (0, r.jsxs)("div", {
                                    className: U().container,
                                    children: [(0, r.jsx)(N.Z, {
                                        defaultAnimationState: M.SR.LOOP,
                                        giftStyle: y,
                                        className: U().seasonalGiftBoxHeaderIcon
                                    }), (0, r.jsx)(c.ModalCloseButton, {
                                        onClick: u,
                                        className: U().closeButton
                                    })]
                                });
                                else if (S) e = o(null != d ? d : null, u, f);
                                else if (b === G.GZ.ONE_TIME) e = (0, r.jsx)(C.t, {
                                    step: f,
                                    onClose: u
                                });
                                else if (w) {
                                    A()(s in D.y7, "invalid sku id: ".concat(s));
                                    e = (0, r.jsx)(L.Z, {
                                        currentStep: null != f ? f : void 0,
                                        purchaseState: p,
                                        premiumType: D.y7[s],
                                        onClose: u,
                                        useWinterTheme: g,
                                        showTrialBadge: I,
                                        showDiscountBadge: W,
                                        giftRecipient: h
                                    })
                                }
                                return e
                            }
                        }), [g, y, u, p, o, d, s, f, I, W, E, w, S, b, h])
                    }({
                        isGift: Y,
                        renderHeader: ae,
                        referralTrialOfferId: ce,
                        handleClose: Ve
                    });
                return (0, r.jsx)(c.Shaker, {
                    className: H().shaker,
                    isShaking: de && Oe === j.A.PURCHASING,
                    intensity: 2,
                    children: (0, r.jsx)(c.ModalRoot, {
                        className: a()(H().root, z({}, H().withHeader, null != He)),
                        transitionState: y,
                        hideShadow: he,
                        size: ye ? c.ModalSize.LARGE : c.ModalSize.SMALL,
                        children: (0, r.jsx)(F.ZP, X({
                            header: He,
                            isLargeModal: ye
                        }, Ye))
                    })
                })
            }

            function J(e) {
                var t = e.subscriptionTier,
                    n = e.initialPlanId,
                    o = e.handleStepChange,
                    a = e.referralTrialOfferId,
                    u = (0,
                        _.usePaymentContext)(),
                    c = u.activeSubscription,
                    p = u.blockedPayments,
                    h = u.hasFetchedSubscriptions,
                    v = u.hasFetchedSubscriptionPlans,
                    O = u.currencyLoading,
                    g = u.selectedSkuId,
                    S = u.setSelectedPlanId,
                    P = u.isGift,
                    w = u.defaultPlanId,
                    j = (0, I.Z)({
                        isGift: P,
                        skuId: g,
                        referralTrialOfferId: a
                    }),
                    T = b.k.getCurrentConfig({
                        location: "055ec5_1"
                    }, {
                        autoTrackExposure: !1
                    }).defaultToMonthlyPlan,
                    A = q(i.useState(!0), 2),
                    C = A[0],
                    M = A[1],
                    k = (0, l.ZP)([E.Z], (function() {
                        return E.Z.applicationIdsFetched.has(D.RQ)
                    }));
                i.useEffect((function() {
                    M(!h || !v || O)
                }), [O, v, h]);
                (0, f.Z)("Payment Modal", C, 5, {
                    hasFetchedSubscriptions: h,
                    hasFetchedSubscriptionPlans: v,
                    currencyLoading: O
                }, {
                    tags: {
                        app_context: "billing"
                    }
                });
                i.useEffect((function() {
                    k || (0, s.yD)(D.RQ);
                    if (!C && !p)
                        if (null != n) o(m.h8.REVIEW);
                        else {
                            var e = (0, y.Wt)({
                                isTrial: j,
                                isGift: P,
                                selectedSkuId: g
                            });
                            if (e.enabled) {
                                var r = (0, y.D3)(e, g, c, w);
                                S(r);
                                o(m.h8.REVIEW)
                            } else o(null != t ? m.h8.PLAN_SELECT : m.h8.SKU_SELECT)
                        }
                }), [c, p, k, n, C, o, t, g, S, T, j, w, P]);
                return C ? (0, r.jsx)(W.Z, {}) : p ? (0, r.jsx)(d.Vq, {}) : null
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
                                return n.e(87430).then(n.t.bind(n, 887430, 19)).then((function(e) {
                                    return e.default
                                }))
                            };
                            break;
                        case s.Cj.BOX:
                            r = function() {
                                return n.e(85318).then(n.t.bind(n, 785318, 19)).then((function(e) {
                                    return e.default
                                }))
                            };
                            break;
                        case s.Cj.CUP:
                            r = function() {
                                return n.e(58525).then(n.t.bind(n, 158525, 19)).then((function(e) {
                                    return e.default
                                }))
                            };
                            break;
                        case s.Cj.STANDARD_BOX:
                            switch (t) {
                                case d.IDLE:
                                    r = function() {
                                        return n.e(83376).then(n.t.bind(n, 83376, 19)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                case d.LOOP:
                                    r = function() {
                                        return n.e(21171).then(n.t.bind(n, 21171, 19)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                default:
                                    r = function() {
                                        return n.e(52216).then(n.t.bind(n, 252216, 19)).then((function(e) {
                                            return e.default
                                        }))
                                    }
                            }
                            break;
                        case s.Cj.CAKE:
                            switch (t) {
                                case d.IDLE:
                                    r = function() {
                                        return n.e(91642).then(n.t.bind(n, 691642, 19)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                case d.LOOP:
                                    r = function() {
                                        return n.e(24333).then(n.t.bind(n, 24333, 19)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                default:
                                    r = function() {
                                        return n.e(60652).then(n.t.bind(n, 60652, 19)).then((function(e) {
                                            return e.default
                                        }))
                                    }
                            }
                            break;
                        case s.Cj.CHEST:
                            switch (t) {
                                case d.IDLE:
                                    r = function() {
                                        return n.e(84894).then(n.t.bind(n, 384894, 19)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                case d.LOOP:
                                    r = function() {
                                        return n.e(86438).then(n.t.bind(n, 886438, 19)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                default:
                                    r = function() {
                                        return n.e(59218).then(n.t.bind(n, 459218, 19)).then((function(e) {
                                            return e.default
                                        }))
                                    }
                            }
                            break;
                        case s.Cj.COFFEE:
                            switch (t) {
                                case d.IDLE:
                                    r = function() {
                                        return n.e(99146).then(n.t.bind(n, 999146, 19)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                case d.LOOP:
                                    r = function() {
                                        return n.e(57495).then(n.t.bind(n, 557495, 19)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                default:
                                    r = function() {
                                        return n.e(62800).then(n.t.bind(n, 362800, 19)).then((function(e) {
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
        470387: (e, t, n) => {
            "use strict";
            n.d(t, {
                R: () => r,
                Z: () => o
            });
            var r, i = n(260561);
            ! function(e) {
                e[e.NONE = 0] = "NONE";
                e[e.BROWSER_AUTOFILL = 1] = "BROWSER_AUTOFILL";
                e[e.MERGE_PLAN_SELECT_TO_REVIEW = 2] = "MERGE_PLAN_SELECT_TO_REVIEW"
            }(r || (r = {}));
            const o = (0, i.B)({
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
                Wt: () => l,
                $g: () => c,
                D3: () => s
            });
            var r = n(260561),
                i = n(694329),
                o = n(470387),
                a = n(203600),
                u = (0, r.B)({
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

            function l(e) {
                var t = e.isTrial,
                    n = e.isGift,
                    r = e.selectedSkuId;
                if (t || n || null == r || !a.YQ.includes(r)) return {
                    enabled: !1,
                    defaultToMonthlyPlan: !1
                };
                if (o.Z.getCurrentConfig({
                        location: "fa931a_1"
                    }).experiment === o.R.MERGE_PLAN_SELECT_TO_REVIEW) {
                    return u.getCurrentConfig({
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

            function c(e, t, n) {
                var r = !1;
                if (e && null != t) {
                    null == t.invoiceItems.find((function(e) {
                        return e.subscriptionPlanId === n.id
                    })) && (r = !0)
                }
                return r
            }

            function s(e, t, n, r) {
                var o = e.defaultToMonthlyPlan,
                    u = null != n ? (0, i.Af)(n) : null,
                    l = o ? a.IW[t] : a.mn[t],
                    c = null != r ? r : l;
                null != u ? c === u.planId && c === a.IW[t] ? c = a.mn[t] : c === u.planId && c === a.mn[t] ? c = a.IW[t] : u.planId !== a.Xh.PREMIUM_YEAR_TIER_0 && u.planId !== a.Xh.PREMIUM_YEAR_TIER_1 || c !== a.Xh.PREMIUM_MONTH_TIER_2 || (c = a.Xh.PREMIUM_YEAR_TIER_2) : c === a.Xh.PREMIUM_YEAR_TIER_1 && (c = a.Xh.PREMIUM_MONTH_TIER_1);
                return c
            }
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
                    y = (0, o.e7)([a.Z], (function() {
                        return a.Z.useReducedMotion
                    })),
                    b = i.useRef((0, l._G)(t, p)),
                    h = f(i.useState(-1), 2),
                    m = h[0],
                    v = h[1];
                i.useEffect((function() {
                    b.current = (0, l._G)(t, p);
                    v((function(e) {
                        return e + 1
                    }))
                }), [t]);
                i.useEffect((function() {
                    b.current = (0, l._G)(t, p);
                    v((function(e) {
                        return e + 1
                    }))
                }), [p]);
                if (!c.Cj.hasOwnProperty(t)) throw new Error("Unexpected giftStyle ".concat(t));
                return (0, r.jsx)(u.Z, {
                    importData: b.current,
                    shouldAnimate: !y && d,
                    className: n,
                    versionKey: m
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
                Z: () => j
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
                return !t || "object" !== S(t) && "function" != typeof t ? function(e) {
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

            function E(e, t) {
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
            var S = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function P(e) {
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
                _ = function(e) {
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
                    var t = P(i);

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
                                        c = E.apply(void 0, [p.sent(), 2]), s = c[0], f = c[1], d = f.default;
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
            _.defaultProps = {
                pauseWhileUnfocused: !0,
                pause: !1
            };
            const j = function(e) {
                var t = e.componentRef,
                    n = v(e, ["componentRef"]),
                    i = (0, u.e7)([c.Z], (function() {
                        return c.Z.isFocused()
                    })),
                    o = (0, u.e7)([l.Z], (function() {
                        return l.Z.useReducedMotion
                    }));
                return (0, r.jsx)(_, m(function(e) {
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
                    E = (0, o.uR)(O, h),
                    S = i.useMemo((function() {
                        return new o.qA({
                            wind: y
                        })
                    }), [y]),
                    P = i.useCallback((function() {
                        var e = null == O ? void 0 : O.getCanvas();
                        if (null != e) {
                            var t = e.getBoundingClientRect();
                            E.createConfetti(l(function(e) {
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
                    }), [E, O]);
                i.useEffect((function() {
                    var e = a ? setInterval(P, 16.666666666666668) : null;
                    return function() {
                        return clearInterval(e)
                    }
                }), [a, P]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(o.O_, {
                        ref: g,
                        className: t,
                        environment: S
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