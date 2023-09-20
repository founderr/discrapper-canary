(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [45716], {
        230098: (e, r, n) => {
            e.exports = n.p + "f5ffd8fdb99601120c834e833a87eda8.svg"
        },
        19120: (e, r, n) => {
            "use strict";
            n.d(r, {
                Z: () => C
            });
            var t = n(785893),
                o = n(667294),
                i = n(294184),
                l = n.n(i),
                s = n(107364),
                a = n(350762),
                c = n.n(a);

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
                return !r || "object" !== _(r) && "function" != typeof r ? function(e) {
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
            var R, p, I, _ = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function M(e) {
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
            }(R || (R = {}));
            ! function(e) {
                e.SMALL = "small";
                e.LARGE = "large";
                e.NONE = "none"
            }(p || (p = {}));
            var S, P = (E(I = {}, R.PRIMARY, c().colorPrimary), E(I, R.SECONDARY, c().colorSecondary), E(I, R.WARNING, c().colorWarning), E(I, R.ERROR, c().colorError), I),
                N = (E(S = {}, p.SMALL, c().small), E(S, p.LARGE, c().large), E(S, p.NONE, null), S),
                m = function(e) {
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
                    var r = M(n);

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
                            a = e.className,
                            u = e.iconClassName;
                        return (0, t.jsxs)(s.Z, {
                            className: l()(c().note, P[n], a),
                            align: s.Z.Align.CENTER,
                            children: [(0, t.jsx)(r, {
                                className: l()(c().icon, N[i], u)
                            }), (0, t.jsx)("div", {
                                children: o
                            })]
                        })
                    };
                    return n
                }(o.PureComponent);
            m.Colors = R;
            m.Sizes = p;
            const C = m
        },
        128059: (e, r, n) => {
            "use strict";
            n.d(r, {
                Z: () => T
            });
            var t = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                l = n(818103),
                s = n(669426),
                a = n(644144),
                c = n(782786),
                u = n(83471),
                E = n(473708),
                d = n(14346),
                f = n.n(d);

            function T(e) {
                var r, n = e.className,
                    o = e.isEligibleForTrial,
                    d = void 0 !== o && o,
                    T = (0,
                        c.usePaymentContext)(),
                    R = T.step,
                    p = T.breadcrumbs,
                    I = T.startedPaymentFlowWithPaymentSourcesRef,
                    _ = T.isGift,
                    M = T.selectedSkuId,
                    S = T.giftRecipient;
                if (null == p || 0 === p.length || (0, a.a8)(S)) return null;
                r = (0, l.Wt)({
                    isTrial: d,
                    isGift: _,
                    selectedSkuId: M
                }).enabled ? [{
                    id: u.h8.REVIEW,
                    label: E.Z.Messages.BILLING_STEP_PLAN_AND_PAYMENT
                }] : p.filter((function(e) {
                    var r = e.id !== u.h8.ADD_PAYMENT_STEPS,
                        n = e.id === u.h8.ADD_PAYMENT_STEPS && !I.current;
                    return !d || d && (r || n)
                }));
                return (0, t.jsx)("div", {
                    className: i()("breadcrumb", f().wrapper, n),
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
                L: () => l
            });
            var t, o, i = n(260561);
            ! function(e) {
                e.Global = "2022-09_premium_tier_0_global"
            }(t || (t = {}));
            ! function(e) {
                e[e.VARIANT_1 = 0] = "VARIANT_1";
                e[e.VARIANT_2 = 1] = "VARIANT_2"
            }(o || (o = {}));
            var l = (0, i.B)({
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
                Wt: () => a,
                $g: () => c,
                D3: () => u
            });
            var t = n(260561),
                o = n(116094),
                i = n(470387),
                l = n(203600),
                s = (0, t.B)({
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

            function a(e) {
                var r = e.isTrial,
                    n = e.isGift,
                    t = e.selectedSkuId;
                if (r || n || null == t || !l.YQ.includes(t)) return {
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
                    s = null != n ? (0, o.Af)(n) : null,
                    a = i ? l.IW[r] : l.mn[r],
                    c = null != t ? t : a;
                null != s ? c === s.planId && c === l.IW[r] ? c = l.mn[r] : c === s.planId && c === l.mn[r] ? c = l.IW[r] : s.planId !== l.Xh.PREMIUM_YEAR_TIER_0 && s.planId !== l.Xh.PREMIUM_YEAR_TIER_1 || c !== l.Xh.PREMIUM_MONTH_TIER_2 || (c = l.Xh.PREMIUM_YEAR_TIER_2) : c === l.Xh.PREMIUM_YEAR_TIER_1 && (c = l.Xh.PREMIUM_MONTH_TIER_1);
                return c
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
                l = n(116094),
                s = n(317387),
                a = n(159895),
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
                    R = null != T,
                    p = null != f && (0, l.I5)(f);
                (0, a.Z$)(n);
                var I = s.L.useExperiment({
                        location: "014fbb_1"
                    }, {
                        autoTrackExposure: !1
                    }).enableTier0,
                    _ = n.useExperiment({
                        location: null != d ? d : "1"
                    }, {
                        autoTrackExposure: I && !p && !R && r
                    }),
                    M = _.enabled,
                    S = _.useExpectedValue,
                    P = _.useLikelihood,
                    N = (0, t.cj)([c.Z], (function() {
                        var e = c.Z.getState();
                        return {
                            fetched: e.fetched,
                            premiumLikelihood: e.premiumLikelihood
                        }
                    })),
                    m = N.premiumLikelihood,
                    C = N.fetched,
                    A = (0, t.e7)([i.Z], (function() {
                        return i.Z.isLoadedForSKUs([u.Si.TIER_0, u.Si.TIER_2])
                    })),
                    b = !p && M && I && !R && (S ? !C || !A : !C),
                    L = u.p9.TIER_2;
                if (I)
                    if (R) {
                        var h = T.subscription_trial;
                        (null == h ? void 0 : h.sku_id) === u.Si.TIER_0 ? L = u.p9.TIER_0 : (null == h ? void 0 : h.sku_id) === u.Si.TIER_2 && (L = u.p9.TIER_2)
                    } else if (!p && !b && M)
                    if (S) {
                        L = function(e, r, n) {
                            return null == e ? u.p9.TIER_2 : e[u.Si.TIER_0] * r > e[u.Si.TIER_2] * n ? u.p9.TIER_0 : u.p9.TIER_2
                        }(m, (0, l.aS)(u.Xh.PREMIUM_MONTH_TIER_0).amount, (0, l.aS)(u.Xh.PREMIUM_MONTH_TIER_2).amount)
                    } else P && (L = function(e) {
                        if (null == e) return u.p9.TIER_0;
                        var r = e[a.Bc],
                            n = e[u.Si.TIER_0],
                            t = e[u.Si.TIER_2];
                        return t > n && t > r ? u.p9.TIER_2 : u.p9.TIER_0
                    }(m));
                return {
                    isLoading: b,
                    suggestedPremiumType: L
                }
            }
        },
        383861: (e, r, n) => {
            "use strict";
            n.d(r, {
                Z: () => m
            });
            var t = n(785893),
                o = n(667294),
                i = n(886664),
                l = n(294184),
                s = n.n(l),
                a = n(513328),
                c = n(882723),
                u = n(19120),
                E = n(347365),
                d = n(414094),
                f = n(782786),
                T = n(83471),
                R = (n(128059), n(149096), n(669426)),
                p = n(799043),
                I = n(264628),
                _ = n(2590),
                M = n(473708),
                S = n(152221),
                P = n.n(S),
                N = new Set([T.h8.SKU_SELECT, T.h8.AWAITING_AUTHENTICATION, T.h8.AWAITING_PURCHASE_TOKEN_AUTH, T.h8.CONFIRM]);

            function m(e) {
                var r = e.steps,
                    n = e.currentStep,
                    l = e.body,
                    S = e.paymentError,
                    m = e.header,
                    C = e.footer,
                    A = e.isGift,
                    b = void 0 !== A && A,
                    L = e.giftMessage,
                    h = void 0 === L ? M.Z.Messages.PREMIUM_PAYMENT_IS_GIFT : L,
                    O = e.isSeasonalGift,
                    v = void 0 !== O && O,
                    y = e.hideBreadcrumbs,
                    U = void 0 !== y && y,
                    G = e.isLoading,
                    B = void 0 !== G && G,
                    g = e.purchaseError,
                    Z = e.purchaseErrorBlockRef,
                    j = e.planError,
                    x = e.onScroll,
                    D = e.scrollerClassName,
                    K = e.hasCurrencies,
                    F = void 0 !== K && K,
                    k = null;
                null != S && null == (0, T.ly)(S) ? k = S : null != g ? k = g : null != j && (k = j);
                var Y = null != k ? k.message : "";
                if (null != k && k instanceof E.HF) {
                    k.code === d.SM.CARD_DECLINED && F && (Y += " ".concat(M.Z.Messages.BILLING_ERROR_TRY_ANOTHER));
                    k.code === d.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (Y = M.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT);
                    k.code === _.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (Y = M.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID)
                }
                var W = (0, f.usePaymentContext)().stripe;
                B = B || null == W;
                var w = o.useRef(new a.V7);
                o.useEffect((function() {
                    var e = w.current;
                    null != W || e.isStarted() ? null != W && e.stop() : e.start(1e4, (function() {
                        var e = new Error("Stripe took too long to load");
                        (0, I.q2)(e)
                    }));
                    return function() {
                        e.stop()
                    }
                }), [W]);
                var V = r.includes(T.h8.PAYMENT_TYPE) ? T.h8.PAYMENT_TYPE : T.h8.ADD_PAYMENT_STEPS;
                return (0, t.jsxs)(i.Elements, {
                    options: _.OBo,
                    stripe: W,
                    children: [m, (0, t.jsxs)("div", {
                        className: s()("paymentModalContent", P().content),
                        children: [b && !v && n !== T.h8.CONFIRM ? (0, t.jsx)(u.Z, {
                            className: P().paymentNote,
                            iconSize: u.Z.Sizes.SMALL,
                            icon: p.Z,
                            color: null == h ? u.Z.Colors.PRIMARY : u.Z.Colors.SECONDARY,
                            children: h
                        }) : null, U ? null : (0, t.jsx)("div", {
                            className: P().breadcrumbsWrapper,
                            children: (0, t.jsx)(R.Z, {
                                activeId: T.Ck.has(n) ? V : n,
                                breadcrumbs: r.filter((function(e) {
                                    return !T.Ck.has(e) && !N.has(e)
                                })).map((function(e) {
                                    return {
                                        id: e,
                                        label: (0, T.DJ)(e)
                                    }
                                }))
                            })
                        }), (0, t.jsxs)("div", {
                            className: P().bodyWrapper,
                            children: [null == k ? null : (0, t.jsx)("div", {
                                className: P().errorBlockWrapper,
                                children: (0, t.jsx)(c.FormErrorBlock, {
                                    ref: Z,
                                    children: Y
                                })
                            }), B ? (0, t.jsx)(c.Spinner, {
                                className: P().loadingBlock
                            }) : (0, t.jsx)(c.Sequencer, {
                                className: P().sequencer,
                                staticClassName: P().sequencerStatic,
                                animatedNodeClassName: P().sequencerAnimatedNode,
                                fillParent: !0,
                                step: n,
                                steps: r,
                                sideMargin: 20,
                                children: (0, t.jsx)(c.AdvancedScrollerThin, {
                                    onScroll: x,
                                    className: s()(P().scroller, D),
                                    children: l
                                })
                            })]
                        })]
                    }), C]
                })
            }
        },
        688858: (e, r, n) => {
            "use strict";
            n.d(r, {
                Z: () => a
            });
            var t = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                l = n(32912),
                s = n.n(l);

            function a(e) {
                var r = e.icon,
                    n = e.iconClassName,
                    o = e.description,
                    l = e.color;
                return (0, t.jsxs)("div", {
                    className: s().perkRow,
                    children: [(0, t.jsx)("div", {
                        className: s().perkIconContainer,
                        children: (0, t.jsx)(r, {
                            color: l,
                            className: i()(s().perkIcon, n)
                        })
                    }), (0, t.jsx)("div", {
                        className: s().perkDescription,
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
                l = n.n(i),
                s = n(202351),
                a = n(882723),
                c = n(744564),
                u = n(673679),
                E = n(810978),
                d = n(266472),
                f = n(782786),
                T = n(83471),
                R = n(799066),
                p = n(245325),
                I = n(717035),
                _ = n(455706),
                M = n(70535),
                S = n(383861),
                P = n(688858),
                N = n(384411),
                m = n(711531),
                C = n(104681),
                A = n(781453),
                b = n(521798),
                L = n(116094),
                h = n(249052),
                O = n(2590),
                v = n(203600),
                y = n(473708),
                U = n(297793),
                G = n.n(U);

            function B(e, r, n) {
                r in e ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = n;
                return e
            }

            function g(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = null != arguments[r] ? arguments[r] : {},
                        t = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    t.forEach((function(r) {
                        B(e, r, n[r])
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
                    children: [(0, t.jsx)(P.Z, {
                        icon: b.Z,
                        iconClassName: G().iconColorPurple,
                        description: y.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
                    }), (0, t.jsx)(P.Z, {
                        icon: C.Z,
                        iconClassName: G().iconColorPink,
                        description: y.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_GUILD_SUBSCRIPTION.format({
                            numGuildSubscriptions: v.cb,
                            discountPercent: (0, h.T3)(r, v.Rr / 100)
                        })
                    }), (0, t.jsx)(P.Z, {
                        icon: A.Z,
                        iconClassName: G().iconColorYellow,
                        description: y.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_PREMIUM_SUBSCRIPTION
                    })]
                })
            };

            function D() {
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(P.Z, {
                        icon: b.Z,
                        iconClassName: G().iconColorPurple,
                        description: y.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
                    }), (0, t.jsx)(P.Z, {
                        icon: A.Z,
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
                        E = (0, s.e7)([N.default], (function() {
                            return N.default.locale
                        }));
                    return (0, t.jsxs)("div", {
                        className: G().wrapper,
                        children: [(0, t.jsx)(a.ModalCloseButton, {
                            onClick: u,
                            className: G().closeButton
                        }), r && (0, t.jsx)(M.dz, {
                            className: G().premiumTrialBadge
                        }), (0, t.jsx)("img", {
                            className: l()(G().heroImage, B({}, G().heroImageWithTrialOffer, r)),
                            src: n(230098),
                            alt: ""
                        }), i ? (0, t.jsx)(a.Spinner, {}) : (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(a.Text, {
                                variant: "text-md/normal",
                                className: G().heading,
                                children: null == c ? (0, t.jsx)(a.Spinner, {
                                    type: a.Spinner.Type.PULSING_ELLIPSIS
                                }) : o ? y.Z.Messages.STICKER_PREMIUM_SUBSCRIPTION_UPSELL_ALERT_TITLE.format({
                                    planName: (0, L.aq)(v.Xh.PREMIUM_MONTH_TIER_0),
                                    monthlyPrice: (0, h.T4)(c.amount, c.currency)
                                }) : y.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_ALERT_TITLE.format({
                                    monthlyPrice: (0, h.T4)(c.amount, c.currency)
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
                    return (0, t.jsxs)(a.ModalFooter, {
                        className: G().footer,
                        children: [(0, t.jsx)(a.Button, {
                            onClick: o,
                            size: a.Button.Sizes.SMALL,
                            color: a.Button.Colors.PRIMARY,
                            look: a.Button.Looks.LINK,
                            children: y.Z.Messages.CLOSE
                        }), (0, t.jsx)(_.Z, {
                            buttonText: r ? n ? y.Z.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : y.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0,
                            premiumModalAnalyticsLocation: i,
                            subscriptionTier: n ? v.Si.TIER_0 : v.Si.TIER_2,
                            size: a.Button.Sizes.SMALL,
                            color: a.Button.Colors.GREEN,
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
                    l = (0, s.e7)([m.Z], (function() {
                        return m.Z.hasFetchedPaymentSources
                    })),
                    _ = i && l,
                    M = (0, I.N)(),
                    P = (0, p.Z)({
                        autoTrackExposure: _,
                        experiment: R.Z,
                        location: "stickers_upsell"
                    }),
                    N = P.isLoading,
                    C = P.suggestedPremiumType;
                o.useEffect((function() {
                    c.Z.wait((function() {
                        (0, u.tZ)();
                        (0, E.Y2)(null, null, O.JjL.DISCOVERY)
                    }))
                }), []);
                var A = null != M,
                    b = C === v.p9.TIER_0,
                    h = _ ? L.ZP.getDefaultPrice(b ? v.Xh.PREMIUM_MONTH_TIER_0 : v.Xh.PREMIUM_MONTH_TIER_2) : null,
                    y = !_ || N;
                return (0, t.jsx)(f.PaymentContextProvider, {
                    activeSubscription: null,
                    stepConfigs: [],
                    skuIDs: [],
                    children: (0, t.jsx)(a.ModalRoot, Z(g({}, n), {
                        "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
                        children: (0,
                            t.jsx)(S.Z, {
                            hideBreadcrumbs: !0,
                            body: (0, t.jsx)(K, {
                                shouldRenderPremiumTrialUpsell: A,
                                isTier0Upsell: b,
                                isLoading: y,
                                price: h,
                                onClose: r
                            }),
                            footer: (0, t.jsx)(F, {
                                shouldRenderPremiumTrialUpsell: A,
                                isTier0Upsell: b,
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
                Z: () => M
            });
            var t = n(785893),
                o = n(667294),
                i = n(294184),
                l = n.n(i),
                s = n(882723),
                a = n(107364),
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

            function R(e, r) {
                return !r || "object" !== I(r) && "function" != typeof r ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : r
            }

            function p(e, r) {
                p = Object.setPrototypeOf || function(e, r) {
                    e.__proto__ = r;
                    return e
                };
                return p(e, r)
            }
            var I = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function _(e) {
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
                    return R(this, n)
                }
            }
            const M = function(e) {
                ! function(e, r) {
                    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(r && r.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    r && p(e, r)
                }(n, e);
                var r = _(n);

                function n() {
                    d(this, n);
                    var e;
                    (e = r.apply(this, arguments)).renderBreadcrumb = function(r, n) {
                        var o, i = e.props,
                            a = i.activeId,
                            u = i.onBreadcrumbClick,
                            d = i.breadcrumbs,
                            T = i.renderCustomBreadcrumb,
                            R = i.separatorClassName,
                            p = r.id === a,
                            I = n === d.length - 1,
                            _ = null != T ? T(r, p) : (0, t.jsx)("span", {
                                className: l()(E().breadcrumb, (o = {}, f(o, E().activeBreadcrumb, p), f(o, E().interactiveBreadcrumb, null != u), o)),
                                children: r.label
                            });
                        return (0, t.jsxs)("div", {
                            className: l()(E().breadcrumbWrapper, f({}, E().breadcrumbFinalWrapper, I)),
                            children: [null != u ? (0, t.jsx)(s.Clickable, {
                                tag: "span",
                                onClick: function() {
                                    return e.handleClick(r)
                                },
                                className: E().breadcrumbClickWrapper,
                                children: _
                            }) : _, I ? null : (0, t.jsx)(c.Z, {
                                className: l()(E().breadcrumbArrow, R),
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
                    return (0, t.jsx)(a.Z, {
                        justify: a.Z.Justify.START,
                        className: l()(E().breadcrumbs, n),
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