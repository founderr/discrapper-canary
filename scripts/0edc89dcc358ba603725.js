(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [45716], {
        230098: (e, r, n) => {
            e.exports = n.p + "f5ffd8fdb99601120c834e833a87eda8.svg"
        },
        19120: (e, r, n) => {
            "use strict";
            n.d(r, {
                Z: () => N
            });
            var t = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                l = n(107364),
                s = n(350762),
                c = n.n(s);

            function u(e, r) {
                if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function E(e, r, n) {
                r in e ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = n;
                return e
            }

            function d(e) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return d(e)
            }

            function f(e, r) {
                return !r || "object" !== I(r) && "function" != typeof r ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : r
            }

            function T(e, r) {
                T = Object.setPrototypeOf || function(e, r) {
                    e.__proto__ = r;
                    return e
                };
                return T(e, r)
            }
            var p, R, _, I = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function S(e) {
                var r = function() {
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
                    var n, t = d(e);
                    if (r) {
                        var o = d(this).constructor;
                        n = Reflect.construct(t, arguments, o)
                    } else n = t.apply(this, arguments);
                    return f(this, n)
                }
            }! function(e) {
                e.PRIMARY = "primary";
                e.SECONDARY = "secondary";
                e.WARNING = "warning";
                e.ERROR = "error"
            }(p || (p = {}));
            ! function(e) {
                e.SMALL = "small";
                e.LARGE = "large";
                e.NONE = "none"
            }(R || (R = {}));
            var M, m = (E(_ = {}, p.PRIMARY, c().colorPrimary), E(_, p.SECONDARY, c().colorSecondary), E(_, p.WARNING, c().colorWarning), E(_, p.ERROR, c().colorError), _),
                P = (E(M = {}, R.SMALL, c().small), E(M, R.LARGE, c().large), E(M, R.NONE, null), M),
                C = function(e) {
                    ! function(e, r) {
                        if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(r && r.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        r && T(e, r)
                    }(n, e);
                    var r = S(n);

                    function n() {
                        u(this, n);
                        return r.apply(this, arguments)
                    }
                    n.prototype.render = function() {
                        var e = this.props,
                            r = e.icon,
                            n = e.color,
                            o = e.children,
                            i = e.iconSize,
                            s = e.className,
                            u = e.iconClassName;
                        return (0, t.jsxs)(l.Z, {
                            className: a()(c().note, m[n], s),
                            align: l.Z.Align.CENTER,
                            children: [(0, t.jsx)(r, {
                                className: a()(c().icon, P[i], u)
                            }), (0, t.jsx)("div", {
                                children: o
                            })]
                        })
                    };
                    return n
                }(o.PureComponent);
            C.Colors = p;
            C.Sizes = R;
            const N = C
        },
        128059: (e, r, n) => {
            "use strict";
            n.d(r, {
                Z: () => p
            });
            var t = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                a = n(818103),
                l = n(533151),
                s = n(669426),
                c = n(644144),
                u = n(782786),
                E = n(83471),
                d = n(473708),
                f = n(14346),
                T = n.n(f);

            function p(e) {
                var r, n = e.className,
                    o = e.isEligibleForTrial,
                    f = void 0 !== o && o,
                    p = (0,
                        u.usePaymentContext)(),
                    R = p.step,
                    _ = p.breadcrumbs,
                    I = p.startedPaymentFlowWithPaymentSourcesRef,
                    S = p.isGift,
                    M = p.selectedSkuId,
                    m = p.giftRecipient,
                    P = (0, l.F_)({
                        isTrial: f,
                        isGift: S,
                        startPaymentFlowWithPaymentSource: I.current
                    });
                if (null == _ || 0 === _.length || (0, c.a8)(m)) return null;
                r = P || (0, a.Wt)({
                    isTrial: f,
                    isGift: S,
                    selectedSkuId: M
                }).enabled ? [{
                    id: E.h8.REVIEW,
                    label: d.Z.Messages.BILLING_STEP_PLAN_AND_PAYMENT
                }] : _.filter((function(e) {
                    var r = e.id !== E.h8.ADD_PAYMENT_STEPS,
                        n = e.id === E.h8.ADD_PAYMENT_STEPS && !I.current;
                    return !f || f && (r || n)
                }));
                return (0, t.jsx)("div", {
                    className: i()("breadcrumb", T().wrapper, n),
                    children: (0, t.jsx)(s.Z, {
                        activeId: R,
                        breadcrumbs: r
                    })
                })
            }
        },
        317387: (e, r, n) => {
            "use strict";
            n.d(r, {
                L: () => a
            });
            var t, o, i = n(260561);
            ! function(e) {
                e.Global = "2022-09_premium_tier_0_global"
            }(t || (t = {}));
            ! function(e) {
                e[e.VARIANT_1 = 0] = "VARIANT_1";
                e[e.VARIANT_2 = 1] = "VARIANT_2"
            }(o || (o = {}));
            var a = (0, i.B)({
                kind: "user",
                id: t.Global,
                label: "Premium tier 0 (Global)",
                defaultConfig: {
                    enableTier0: !1
                },
                treatments: [{
                    id: 1,
                    label: "Variant 1",
                    config: {
                        enableTier0: !0,
                        variant: o.VARIANT_1
                    }
                }, {
                    id: 2,
                    label: "Variant 2",
                    config: {
                        enableTier0: !0,
                        variant: o.VARIANT_2
                    }
                }]
            })
        },
        470387: (e, r, n) => {
            "use strict";
            n.d(r, {
                R: () => t,
                Z: () => i
            });
            var t, o = n(260561);
            ! function(e) {
                e[e.NONE = 0] = "NONE";
                e[e.BROWSER_AUTOFILL = 1] = "BROWSER_AUTOFILL";
                e[e.MERGE_PLAN_SELECT_TO_REVIEW = 2] = "MERGE_PLAN_SELECT_TO_REVIEW"
            }(t || (t = {}));
            const i = (0, o.B)({
                id: "2023-08_checkout_v2_parent",
                label: "Checkout V2 Parent",
                kind: "user",
                defaultConfig: {
                    experiment: t.NONE
                },
                treatments: [{
                    id: 1,
                    label: "Browser Autofill",
                    config: {
                        experiment: t.BROWSER_AUTOFILL
                    }
                }, {
                    id: 2,
                    label: "Merge Plan Select to Review",
                    config: {
                        experiment: t.MERGE_PLAN_SELECT_TO_REVIEW
                    }
                }]
            })
        },
        818103: (e, r, n) => {
            "use strict";
            n.d(r, {
                Wt: () => s,
                $g: () => c,
                D3: () => u
            });
            var t = n(260561),
                o = n(116094),
                i = n(470387),
                a = n(203600),
                l = (0, t.B)({
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

            function s(e) {
                var r = e.isTrial,
                    n = e.isGift,
                    t = e.selectedSkuId;
                if (r || n || null == t || !a.YQ.includes(t)) return {
                    enabled: !1,
                    defaultToMonthlyPlan: !1
                };
                if (i.Z.getCurrentConfig({
                        location: "fa931a_1"
                    }).experiment === i.R.MERGE_PLAN_SELECT_TO_REVIEW) {
                    return l.getCurrentConfig({
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

            function c(e, r, n) {
                var t = !1;
                if (e && null != r) {
                    null == r.invoiceItems.find((function(e) {
                        return e.subscriptionPlanId === n.id
                    })) && (t = !0)
                }
                return t
            }

            function u(e, r, n, t) {
                var i = e.defaultToMonthlyPlan,
                    l = null != n ? (0, o.Af)(n) : null,
                    s = i ? a.IW[r] : a.mn[r],
                    c = null != t ? t : s;
                null != l ? c === l.planId && c === a.IW[r] ? c = a.mn[r] : c === l.planId && c === a.mn[r] ? c = a.IW[r] : l.planId !== a.Xh.PREMIUM_YEAR_TIER_0 && l.planId !== a.Xh.PREMIUM_YEAR_TIER_1 || c !== a.Xh.PREMIUM_MONTH_TIER_2 || (c = a.Xh.PREMIUM_YEAR_TIER_2) : c === a.Xh.PREMIUM_YEAR_TIER_1 && (c = a.Xh.PREMIUM_MONTH_TIER_1);
                return c
            }
        },
        533151: (e, r, n) => {
            "use strict";
            n.d(r, {
                F_: () => o,
                Lw: () => i
            });
            var t = (0, n(260561).B)({
                kind: "user",
                id: "2023-06_premium_trial_one_step_checkout",
                label: "Premium Trial One Step Checkout When Having Saved Payment Source",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Combine plan selection and review steps together when having a saved payment source",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function o(e) {
                var r = e.isTrial,
                    n = e.isGift,
                    o = e.startPaymentFlowWithPaymentSource,
                    i = r && !n && o;
                return t.useExperiment({
                    location: "fbec92_1"
                }, {
                    autoTrackExposure: i,
                    disable: !i
                }).enabled
            }

            function i(e) {
                var r = e.isTrial,
                    n = e.isGift,
                    o = e.startPaymentFlowWithPaymentSource,
                    i = r && !n && o;
                return t.getCurrentConfig({
                    location: "fbec92_2"
                }, {
                    autoTrackExposure: i,
                    disable: !i
                }).enabled
            }
        },
        245325: (e, r, n) => {
            "use strict";
            n.d(r, {
                Z: () => d
            });
            var t = n(202351),
                o = n(473903),
                i = n(551778),
                a = n(116094),
                l = n(317387),
                s = n(159895),
                c = n(884123),
                u = n(203600);
            var E = n(717035);

            function d(e) {
                var r = e.autoTrackExposure,
                    n = e.experiment,
                    d = e.location,
                    f = (0, t.e7)([o.default], (function() {
                        return o.default.getCurrentUser()
                    })),
                    T = (0, E.N)(),
                    p = null != T,
                    R = null != f && (0, a.I5)(f);
                (0, s.Z$)(n);
                var _ = l.L.useExperiment({
                        location: "014fbb_1"
                    }, {
                        autoTrackExposure: !1
                    }).enableTier0,
                    I = n.useExperiment({
                        location: null != d ? d : "1"
                    }, {
                        autoTrackExposure: _ && !R && !p && r
                    }),
                    S = I.enabled,
                    M = I.useExpectedValue,
                    m = I.useLikelihood,
                    P = (0, t.cj)([c.Z], (function() {
                        var e = c.Z.getState();
                        return {
                            fetched: e.fetched,
                            premiumLikelihood: e.premiumLikelihood
                        }
                    })),
                    C = P.premiumLikelihood,
                    N = P.fetched,
                    b = (0, t.e7)([i.Z], (function() {
                        return i.Z.isLoadedForSKUs([u.Si.TIER_0, u.Si.TIER_2])
                    })),
                    A = !R && S && _ && !p && (M ? !N || !b : !N),
                    h = u.p9.TIER_2;
                if (_)
                    if (p) {
                        var L = T.subscription_trial;
                        (null == L ? void 0 : L.sku_id) === u.Si.TIER_0 ? h = u.p9.TIER_0 : (null == L ? void 0 : L.sku_id) === u.Si.TIER_2 && (h = u.p9.TIER_2)
                    } else if (!R && !A && S)
                    if (M) {
                        h = function(e, r, n) {
                            return null == e ? u.p9.TIER_2 : e[u.Si.TIER_0] * r > e[u.Si.TIER_2] * n ? u.p9.TIER_0 : u.p9.TIER_2
                        }(C, (0, a.aS)(u.Xh.PREMIUM_MONTH_TIER_0).amount, (0, a.aS)(u.Xh.PREMIUM_MONTH_TIER_2).amount)
                    } else m && (h = function(e) {
                        if (null == e) return u.p9.TIER_0;
                        var r = e[s.Bc],
                            n = e[u.Si.TIER_0],
                            t = e[u.Si.TIER_2];
                        return t > n && t > r ? u.p9.TIER_2 : u.p9.TIER_0
                    }(C));
                return {
                    isLoading: A,
                    suggestedPremiumType: h
                }
            }
        },
        383861: (e, r, n) => {
            "use strict";
            n.d(r, {
                Z: () => C
            });
            var t = n(785893),
                o = n(667294),
                i = n(886664),
                a = n(294184),
                l = n.n(a),
                s = n(513328),
                c = n(882723),
                u = n(19120),
                E = n(347365),
                d = n(414094),
                f = n(782786),
                T = n(83471),
                p = (n(128059), n(149096), n(669426)),
                R = n(799043),
                _ = n(264628),
                I = n(2590),
                S = n(473708),
                M = n(152221),
                m = n.n(M),
                P = new Set([T.h8.SKU_SELECT, T.h8.AWAITING_AUTHENTICATION, T.h8.AWAITING_PURCHASE_TOKEN_AUTH, T.h8.CONFIRM]);

            function C(e) {
                var r = e.steps,
                    n = e.currentStep,
                    a = e.body,
                    M = e.paymentError,
                    C = e.header,
                    N = e.footer,
                    b = e.isGift,
                    A = void 0 !== b && b,
                    h = e.giftMessage,
                    L = void 0 === h ? S.Z.Messages.PREMIUM_PAYMENT_IS_GIFT : h,
                    O = e.isSeasonalGift,
                    v = void 0 !== O && O,
                    y = e.hideBreadcrumbs,
                    U = void 0 !== y && y,
                    G = e.isLoading,
                    g = void 0 !== G && G,
                    B = e.purchaseError,
                    Z = e.purchaseErrorBlockRef,
                    j = e.planError,
                    x = e.onScroll,
                    D = e.scrollerClassName,
                    K = e.hasCurrencies,
                    F = void 0 !== K && K,
                    k = null;
                null != M && null == (0, T.ly)(M) ? k = M : null != B ? k = B : null != j && (k = j);
                var w = null != k ? k.message : "";
                if (null != k && k instanceof E.HF) {
                    k.code === d.SM.CARD_DECLINED && F && (w += " ".concat(S.Z.Messages.BILLING_ERROR_TRY_ANOTHER));
                    k.code === d.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (w = S.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT);
                    k.code === I.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (w = S.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID)
                }
                var W = (0, f.usePaymentContext)().stripe;
                g = g || null == W;
                var Y = o.useRef(new s.V7);
                o.useEffect((function() {
                    var e = Y.current;
                    null != W || e.isStarted() ? null != W && e.stop() : e.start(1e4, (function() {
                        var e = new Error("Stripe took too long to load");
                        (0, _.q2)(e)
                    }));
                    return function() {
                        e.stop()
                    }
                }), [W]);
                var V = r.includes(T.h8.PAYMENT_TYPE) ? T.h8.PAYMENT_TYPE : T.h8.ADD_PAYMENT_STEPS;
                return (0, t.jsxs)(i.Elements, {
                    options: I.OBo,
                    stripe: W,
                    children: [C, (0, t.jsxs)("div", {
                        className: l()("paymentModalContent", m().content),
                        children: [A && !v && n !== T.h8.CONFIRM ? (0, t.jsx)(u.Z, {
                            className: m().paymentNote,
                            iconSize: u.Z.Sizes.SMALL,
                            icon: R.Z,
                            color: null == L ? u.Z.Colors.PRIMARY : u.Z.Colors.SECONDARY,
                            children: L
                        }) : null, U ? null : (0, t.jsx)("div", {
                            className: m().breadcrumbsWrapper,
                            children: (0, t.jsx)(p.Z, {
                                activeId: T.Ck.has(n) ? V : n,
                                breadcrumbs: r.filter((function(e) {
                                    return !T.Ck.has(e) && !P.has(e)
                                })).map((function(e) {
                                    return {
                                        id: e,
                                        label: (0, T.DJ)(e)
                                    }
                                }))
                            })
                        }), (0, t.jsxs)("div", {
                            className: m().bodyWrapper,
                            children: [null == k ? null : (0, t.jsx)("div", {
                                className: m().errorBlockWrapper,
                                children: (0, t.jsx)(c.FormErrorBlock, {
                                    ref: Z,
                                    children: w
                                })
                            }), g ? (0, t.jsx)(c.Spinner, {
                                className: m().loadingBlock
                            }) : (0, t.jsx)(c.Sequencer, {
                                className: m().sequencer,
                                staticClassName: m().sequencerStatic,
                                animatedNodeClassName: m().sequencerAnimatedNode,
                                fillParent: !0,
                                step: n,
                                steps: r,
                                sideMargin: 20,
                                children: (0, t.jsx)(c.AdvancedScrollerThin, {
                                    onScroll: x,
                                    className: l()(m().scroller, D),
                                    children: a
                                })
                            })]
                        })]
                    }), N]
                })
            }
        },
        688858: (e, r, n) => {
            "use strict";
            n.d(r, {
                Z: () => s
            });
            var t = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                a = n(32912),
                l = n.n(a);

            function s(e) {
                var r = e.icon,
                    n = e.iconClassName,
                    o = e.description,
                    a = e.color;
                return (0, t.jsxs)("div", {
                    className: l().perkRow,
                    children: [(0, t.jsx)("div", {
                        className: l().perkIconContainer,
                        children: (0, t.jsx)(r, {
                            color: a,
                            className: i()(l().perkIcon, n)
                        })
                    }), (0, t.jsx)("div", {
                        className: l().perkDescription,
                        children: o
                    })]
                })
            }
        },
        811600: (e, r, n) => {
            "use strict";
            n.r(r);
            n.d(r, {
                default: () => k
            });
            var t = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                l = n(202351),
                s = n(882723),
                c = n(744564),
                u = n(673679),
                E = n(810978),
                d = n(266472),
                f = n(782786),
                T = n(83471),
                p = n(799066),
                R = n(245325),
                _ = n(717035),
                I = n(455706),
                S = n(70535),
                M = n(383861),
                m = n(688858),
                P = n(384411),
                C = n(711531),
                N = n(104681),
                b = n(781453),
                A = n(521798),
                h = n(116094),
                L = n(249052),
                O = n(2590),
                v = n(203600),
                y = n(473708),
                U = n(297793),
                G = n.n(U);

            function g(e, r, n) {
                r in e ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = n;
                return e
            }

            function B(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = null != arguments[r] ? arguments[r] : {},
                        t = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    t.forEach((function(r) {
                        g(e, r, n[r])
                    }))
                }
                return e
            }

            function Z(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        r && (t = t.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        n.push.apply(n, t)
                    }
                    return n
                }(Object(r)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                }));
                return e
            }

            function j(e, r) {
                if (null == e) return {};
                var n, t, o = function(e, r) {
                    if (null == e) return {};
                    var n, t, o = {},
                        i = Object.keys(e);
                    for (t = 0; t < i.length; t++) {
                        n = i[t];
                        r.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (t = 0; t < i.length; t++) {
                        n = i[t];
                        r.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var x = function(e) {
                var r = e.locale;
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(m.Z, {
                        icon: A.Z,
                        iconClassName: G().iconColorPurple,
                        description: y.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
                    }), (0, t.jsx)(m.Z, {
                        icon: N.Z,
                        iconClassName: G().iconColorPink,
                        description: y.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_GUILD_SUBSCRIPTION.format({
                            numGuildSubscriptions: v.cb,
                            discountPercent: (0, L.T3)(r, v.Rr / 100)
                        })
                    }), (0, t.jsx)(m.Z, {
                        icon: b.Z,
                        iconClassName: G().iconColorYellow,
                        description: y.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_PREMIUM_SUBSCRIPTION
                    })]
                })
            };

            function D() {
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(m.Z, {
                        icon: A.Z,
                        iconClassName: G().iconColorPurple,
                        description: y.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
                    }), (0, t.jsx)(m.Z, {
                        icon: b.Z,
                        iconClassName: G().iconColorYellow,
                        description: y.Z.Messages.STICKER_PREMIUM_TIER_0_UPSELL_PERK_PREMIUM_SUBSCRIPTION
                    })]
                })
            }
            var K = function(e) {
                    var r = e.shouldRenderPremiumTrialUpsell,
                        o = e.isTier0Upsell,
                        i = e.isLoading,
                        c = e.price,
                        u = e.onClose,
                        E = (0, l.e7)([P.default], (function() {
                            return P.default.locale
                        }));
                    return (0, t.jsxs)("div", {
                        className: G().wrapper,
                        children: [(0, t.jsx)(s.ModalCloseButton, {
                            onClick: u,
                            className: G().closeButton
                        }), r && (0, t.jsx)(S.dz, {
                            className: G().premiumTrialBadge
                        }), (0, t.jsx)("img", {
                            className: a()(G().heroImage, g({}, G().heroImageWithTrialOffer, r)),
                            src: n(230098),
                            alt: ""
                        }), i ? (0, t.jsx)(s.Spinner, {}) : (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(s.Text, {
                                variant: "text-md/normal",
                                className: G().heading,
                                children: null == c ? (0, t.jsx)(s.Spinner, {
                                    type: s.Spinner.Type.PULSING_ELLIPSIS
                                }) : o ? y.Z.Messages.STICKER_PREMIUM_SUBSCRIPTION_UPSELL_ALERT_TITLE.format({
                                    planName: (0, h.aq)(v.Xh.PREMIUM_MONTH_TIER_0),
                                    monthlyPrice: (0, L.T4)(c.amount, c.currency)
                                }) : y.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_ALERT_TITLE.format({
                                    monthlyPrice: (0, L.T4)(c.amount, c.currency)
                                })
                            }), (0, t.jsx)("div", {
                                className: G().perks,
                                children: o ? (0, t.jsx)(D, {}) : (0, t.jsx)(x, {
                                    locale: E
                                })
                            })]
                        })]
                    })
                },
                F = function(e) {
                    var r = e.shouldRenderPremiumTrialUpsell,
                        n = e.isTier0Upsell,
                        o = e.onClose,
                        i = {
                            section: O.jXE.STICKER_PREMIUM_TIER_2_UPSELL_MODAL
                        };
                    return (0, t.jsxs)(s.ModalFooter, {
                        className: G().footer,
                        children: [(0, t.jsx)(s.Button, {
                            onClick: o,
                            size: s.Button.Sizes.SMALL,
                            color: s.Button.Colors.PRIMARY,
                            look: s.Button.Looks.LINK,
                            children: y.Z.Messages.CLOSE
                        }), (0, t.jsx)(I.Z, {
                            buttonText: r ? n ? y.Z.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : y.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0,
                            premiumModalAnalyticsLocation: i,
                            subscriptionTier: n ? v.Si.TIER_0 : v.Si.TIER_2,
                            size: s.Button.Sizes.SMALL,
                            color: s.Button.Colors.GREEN,
                            onClick: function() {
                                o()
                            }
                        })]
                    })
                };

            function k(e) {
                var r = e.onClose,
                    n = j(e, ["onClose"]),
                    i = (0, d.V)(),
                    a = (0, l.e7)([C.Z], (function() {
                        return C.Z.hasFetchedPaymentSources
                    })),
                    I = i && a,
                    S = (0, _.N)(),
                    m = (0, R.Z)({
                        autoTrackExposure: I,
                        experiment: p.Z,
                        location: "stickers_upsell"
                    }),
                    P = m.isLoading,
                    N = m.suggestedPremiumType;
                o.useEffect((function() {
                    c.Z.wait((function() {
                        (0, u.tZ)();
                        (0, E.Y2)(null, null, O.JjL.DISCOVERY)
                    }))
                }), []);
                var b = null != S,
                    A = N === v.p9.TIER_0,
                    L = I ? h.ZP.getDefaultPrice(A ? v.Xh.PREMIUM_MONTH_TIER_0 : v.Xh.PREMIUM_MONTH_TIER_2) : null,
                    y = !I || P;
                return (0, t.jsx)(f.PaymentContextProvider, {
                    activeSubscription: null,
                    stepConfigs: [],
                    skuIDs: [],
                    children: (0, t.jsx)(s.ModalRoot, Z(B({}, n), {
                        "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
                        children: (0, t.jsx)(M.Z, {
                            hideBreadcrumbs: !0,
                            body: (0, t.jsx)(K, {
                                shouldRenderPremiumTrialUpsell: b,
                                isTier0Upsell: A,
                                isLoading: y,
                                price: L,
                                onClose: r
                            }),
                            footer: (0, t.jsx)(F, {
                                shouldRenderPremiumTrialUpsell: b,
                                isTier0Upsell: A,
                                onClose: r
                            }),
                            steps: [T.h8.PREMIUM_UPSELL],
                            currentStep: T.h8.PREMIUM_UPSELL
                        })
                    }))
                })
            }
        },
        669426: (e, r, n) => {
            "use strict";
            n.d(r, {
                Z: () => S
            });
            var t = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                l = n(882723),
                s = n(107364),
                c = n(718831),
                u = n(49032),
                E = n.n(u);

            function d(e, r) {
                if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e, r, n) {
                r in e ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = n;
                return e
            }

            function T(e) {
                T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return T(e)
            }

            function p(e, r) {
                return !r || "object" !== _(r) && "function" != typeof r ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : r
            }

            function R(e, r) {
                R = Object.setPrototypeOf || function(e, r) {
                    e.__proto__ = r;
                    return e
                };
                return R(e, r)
            }
            var _ = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function I(e) {
                var r = function() {
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
                    var n, t = T(e);
                    if (r) {
                        var o = T(this).constructor;
                        n = Reflect.construct(t, arguments, o)
                    } else n = t.apply(this, arguments);
                    return p(this, n)
                }
            }
            const S = function(e) {
                ! function(e, r) {
                    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(r && r.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    r && R(e, r)
                }(n, e);
                var r = I(n);

                function n() {
                    d(this, n);
                    var e;
                    (e = r.apply(this, arguments)).renderBreadcrumb = function(r, n) {
                        var o, i = e.props,
                            s = i.activeId,
                            u = i.onBreadcrumbClick,
                            d = i.breadcrumbs,
                            T = i.renderCustomBreadcrumb,
                            p = i.separatorClassName,
                            R = r.id === s,
                            _ = n === d.length - 1,
                            I = null != T ? T(r, R) : (0, t.jsx)("span", {
                                className: a()(E().breadcrumb, (o = {}, f(o, E().activeBreadcrumb, R), f(o, E().interactiveBreadcrumb, null != u), o)),
                                children: r.label
                            });
                        return (0, t.jsxs)("div", {
                            className: a()(E().breadcrumbWrapper, f({}, E().breadcrumbFinalWrapper, _)),
                            children: [null != u ? (0, t.jsx)(l.Clickable, {
                                tag: "span",
                                onClick: function() {
                                    return e.handleClick(r)
                                },
                                className: E().breadcrumbClickWrapper,
                                children: I
                            }) : I, _ ? null : (0, t.jsx)(c.Z, {
                                className: a()(E().breadcrumbArrow, p),
                                direction: c.Z.Directions.RIGHT
                            })]
                        }, r.id)
                    };
                    return e
                }
                var o = n.prototype;
                o.handleClick = function(e) {
                    var r = this.props.onBreadcrumbClick;
                    null != r && r(e)
                };
                o.render = function() {
                    var e = this.props,
                        r = e.breadcrumbs,
                        n = e.className,
                        o = r.map(this.renderBreadcrumb);
                    return (0, t.jsx)(s.Z, {
                        justify: s.Z.Justify.START,
                        className: a()(E().breadcrumbs, n),
                        children: o
                    })
                };
                return n
            }(o.PureComponent)
        },
        197597: (e, r, n) => {
            "use strict";
            n.d(r, {
                S: () => t,
                M: () => o
            });
            var t;
            ! function(e) {
                e.AC = "AC";
                e.AD = "AD";
                e.AE = "AE";
                e.AF = "AF";
                e.AG = "AG";
                e.AI = "AI";
                e.AL = "AL";
                e.AM = "AM";
                e.AN = "AN";
                e.AO = "AO";
                e.AR = "AR";
                e.AS = "AS";
                e.AT = "AT";
                e.AU = "AU";
                e.AW = "AW";
                e.AX = "AX";
                e.AZ = "AZ";
                e.BA = "BA";
                e.BB = "BB";
                e.BD = "BD";
                e.BE = "BE";
                e.BF = "BF";
                e.BG = "BG";
                e.BH = "BH";
                e.BI = "BI";
                e.BJ = "BJ";
                e.BM = "BM";
                e.BN = "BN";
                e.BO = "BO";
                e.BR = "BR";
                e.BS = "BS";
                e.BT = "BT";
                e.BW = "BW";
                e.BY = "BY";
                e.BZ = "BZ";
                e.CA = "CA";
                e.CC = "CC";
                e.CD = "CD";
                e.CF = "CF";
                e.CG = "CG";
                e.CH = "CH";
                e.CI = "CI";
                e.CK = "CK";
                e.CL = "CL";
                e.CM = "CM";
                e.CN = "CN";
                e.CO = "CO";
                e.CR = "CR";
                e.CU = "CU";
                e.CV = "CV";
                e.CW = "CW";
                e.CX = "CX";
                e.CY = "CY";
                e.CZ = "CZ";
                e.DE = "DE";
                e.DG = "DG";
                e.DJ = "DJ";
                e.DK = "DK";
                e.DM = "DM";
                e.DO = "DO";
                e.DZ = "DZ";
                e.EC = "EC";
                e.EE = "EE";
                e.EG = "EG";
                e.EL = "EL";
                e.ER = "ER";
                e.ES = "ES";
                e.ET = "ET";
                e.FI = "FI";
                e.FJ = "FJ";
                e.FK = "FK";
                e.FM = "FM";
                e.FO = "FO";
                e.FR = "FR";
                e.GA = "GA";
                e.GB = "GB";
                e.GD = "GD";
                e.GE = "GE";
                e.GF = "GF";
                e.GG = "GG";
                e.GH = "GH";
                e.GI = "GI";
                e.GL = "GL";
                e.GM = "GM";
                e.GN = "GN";
                e.GP = "GP";
                e.GQ = "GQ";
                e.GR = "GR";
                e.GS = "GS";
                e.GT = "GT";
                e.GU = "GU";
                e.GW = "GW";
                e.GY = "GY";
                e.HK = "HK";
                e.HM = "HM";
                e.HN = "HN";
                e.HR = "HR";
                e.HT = "HT";
                e.HU = "HU";
                e.IC = "IC";
                e.ID = "ID";
                e.IE = "IE";
                e.IL = "IL";
                e.IM = "IM";
                e.IN = "IN";
                e.IO = "IO";
                e.IQ = "IQ";
                e.IR = "IR";
                e.IS = "IS";
                e.IT = "IT";
                e.JE = "JE";
                e.JM = "JM";
                e.JO = "JO";
                e.JP = "JP";
                e.KE = "KE";
                e.KG = "KG";
                e.KH = "KH";
                e.KI = "KI";
                e.KM = "KM";
                e.KN = "KN";
                e.KP = "KP";
                e.KR = "KR";
                e.KW = "KW";
                e.KY = "KY";
                e.KZ = "KZ";
                e.LA = "LA";
                e.LB = "LB";
                e.LI = "LI";
                e.LK = "LK";
                e.LR = "LR";
                e.LS = "LS";
                e.LT = "LT";
                e.LU = "LU";
                e.LV = "LV";
                e.LY = "LY";
                e.MA = "MA";
                e.MC = "MC";
                e.MD = "MD";
                e.ME = "ME";
                e.MG = "MG";
                e.MH = "MH";
                e.MI = "MI";
                e.MK = "MK";
                e.ML = "ML";
                e.MM = "MM";
                e.MN = "MN";
                e.MO = "MO";
                e.MP = "MP";
                e.MQ = "MQ";
                e.MR = "MR";
                e.MS = "MS";
                e.MT = "MT";
                e.MU = "MU";
                e.MV = "MV";
                e.MW = "MW";
                e.MX = "MX";
                e.MY = "MY";
                e.MZ = "MZ";
                e.NA = "NA";
                e.NC = "NC";
                e.NE = "NE";
                e.NF = "NF";
                e.NG = "NG";
                e.NI = "NI";
                e.NL = "NL";
                e.NO = "NO";
                e.NP = "NP";
                e.NR = "NR";
                e.NU = "NU";
                e.NZ = "NZ";
                e.OM = "OM";
                e.PA = "PA";
                e.PE = "PE";
                e.PF = "PF";
                e.PG = "PG";
                e.PH = "PH";
                e.PK = "PK";
                e.PL = "PL";
                e.PM = "PM";
                e.PR = "PR";
                e.PS = "PS";
                e.PT = "PT";
                e.PW = "PW";
                e.PY = "PY";
                e.QA = "QA";
                e.RE = "RE";
                e.RO = "RO";
                e.RS = "RS";
                e.RU = "RU";
                e.RW = "RW";
                e.SA = "SA";
                e.SB = "SB";
                e.SC = "SC";
                e.SD = "SD";
                e.SE = "SE";
                e.SG = "SG";
                e.SI = "SI";
                e.SJ = "SJ";
                e.SK = "SK";
                e.SL = "SL";
                e.SM = "SM";
                e.SN = "SN";
                e.SO = "SO";
                e.SR = "SR";
                e.SS = "SS";
                e.SV = "SV";
                e.SX = "SX";
                e.SY = "SY";
                e.SZ = "SZ";
                e.TC = "TC";
                e.TD = "TD";
                e.TG = "TG";
                e.TH = "TH";
                e.TJ = "TJ";
                e.TK = "TK";
                e.TL = "TL";
                e.TM = "TM";
                e.TN = "TN";
                e.TO = "TO";
                e.TP = "TP";
                e.TR = "TR";
                e.TT = "TT";
                e.TV = "TV";
                e.TW = "TW";
                e.TZ = "TZ";
                e.UA = "UA";
                e.UG = "UG";
                e.UK = "UK";
                e.US = "US";
                e.UY = "UY";
                e.UZ = "UZ";
                e.VA = "VA";
                e.VE = "VE";
                e.VG = "VG";
                e.VI = "VI";
                e.VN = "VN";
                e.VU = "VU";
                e.WF = "WF";
                e.WK = "WK";
                e.WS = "WS";
                e.XK = "XK";
                e.YE = "YE";
                e.YT = "YT";
                e.ZA = "ZA";
                e.ZM = "ZM";
                e.ZW = "ZW";
                e.ST = "ST";
                e.BQ = "BQ";
                e.TF = "TF";
                e.VC = "VC";
                e.LC = "LC"
            }(t || (t = {}));
            var o = {
                VAT_EU_COUNTRIES: new Set(["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"]),
                EU_COUNTRIES: new Set(["AD", "AL", "AT", "AX", "BA", "BE", "BG", "BY", "CH", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FO", "FR", "GG", "GR", "HR", "HU", "IC", "IE", "IM", "IT", "JE", "LI", "LT", "LU", "LV", "MC", "MD", "MK", "MT", "NL", "NO", "PL", "PT", "RO", "RU", "SE", "SI", "SJ", "SK", "SM", "UA", "VA"]),
                EEA_COUNTRIES: new Set(["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK"])
            }
        }
    }
]);
//# sourceMappingURL=0edc89dcc358ba603725.js.map