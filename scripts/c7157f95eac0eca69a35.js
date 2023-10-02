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
                l = n.n(i),
                s = n(107364),
                a = n(543151),
                c = n.n(a);

            function u(e, r) {
                if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e, r, n) {
                r in e ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = n;
                return e
            }

            function E(e) {
                E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return E(e)
            }

            function f(e, r) {
                return !r || "object" !== S(r) && "function" != typeof r ? function(e) {
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
            var T, R, I, S = function(e) {
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
                    var n, t = E(e);
                    if (r) {
                        var o = E(this).constructor;
                        n = Reflect.construct(t, arguments, o)
                    } else n = t.apply(this, arguments);
                    return f(this, n)
                }
            }! function(e) {
                e.PRIMARY = "primary";
                e.SECONDARY = "secondary";
                e.WARNING = "warning";
                e.ERROR = "error"
            }(T || (T = {}));
            ! function(e) {
                e.SMALL = "small";
                e.LARGE = "large";
                e.NONE = "none"
            }(R || (R = {}));
            var _, P = (d(I = {}, T.PRIMARY, c().colorPrimary), d(I, T.SECONDARY, c().colorSecondary), d(I, T.WARNING, c().colorWarning), d(I, T.ERROR, c().colorError), I),
                m = (d(_ = {}, R.SMALL, c().small), d(_, R.LARGE, c().large), d(_, R.NONE, null), _),
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
                        r && p(e, r)
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
                                className: l()(c().icon, m[i], u)
                            }), (0, t.jsx)("div", {
                                children: o
                            })]
                        })
                    };
                    return n
                }(o.PureComponent);
            C.Colors = T;
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
                l = n(818103),
                s = n(669426),
                a = n(644144),
                c = n(782786),
                u = n(83471),
                d = n(473708),
                E = n(441877),
                f = n.n(E);

            function p(e) {
                var r, n = e.className,
                    o = e.isEligibleForTrial,
                    E = void 0 !== o && o,
                    p = (0,
                        c.usePaymentContext)(),
                    T = p.step,
                    R = p.breadcrumbs,
                    I = p.startedPaymentFlowWithPaymentSourcesRef,
                    S = p.isGift,
                    M = p.selectedSkuId,
                    _ = p.giftRecipient;
                if (null == R || 0 === R.length || (0, a.a8)(_)) return null;
                r = (0, l.Wt)({
                    isTrial: E,
                    isGift: S,
                    selectedSkuId: M
                }).enabled ? [{
                    id: u.h8.REVIEW,
                    label: d.Z.Messages.BILLING_STEP_PLAN_AND_PAYMENT
                }] : R.filter((function(e) {
                    var r = e.id !== u.h8.ADD_PAYMENT_STEPS,
                        n = e.id === u.h8.ADD_PAYMENT_STEPS && !I.current;
                    return !E || E && (r || n)
                }));
                return (0, t.jsx)("div", {
                    className: i()("breadcrumb", f().wrapper, n),
                    children: (0, t.jsx)(s.Z, {
                        activeId: T,
                        breadcrumbs: r
                    })
                })
            }
        },
        149096: (e, r, n) => {
            "use strict";
            n.d(r, {
                ZP: () => T,
                C3: () => R,
                O3: () => I
            });
            var t = n(785893),
                o = n(667294),
                i = n(294184),
                l = n.n(i),
                s = n(441143),
                a = n.n(s),
                c = n(973935),
                u = n(304548),
                d = n(782786),
                E = n(384009),
                f = n.n(E);

            function p(e, r) {
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

            function T(e) {
                var r, n, i, s, c, E = function(e) {
                        return {
                            header: e.header,
                            isLargeModal: e.isLargeModal,
                            stepProps: p(e, ["header", "isLargeModal"])
                        }
                    }(e),
                    T = E.header,
                    R = E.isLargeModal,
                    I = E.stepProps,
                    S = (0, d.usePaymentContext)(),
                    M = S.step,
                    _ = S.stepConfigs,
                    P = S.setBodyNode,
                    m = S.setFooterNode,
                    C = S.setModalOverlayNode,
                    N = S.setReadySlideId,
                    h = _.find((function(e) {
                        return e.key === M
                    }));
                o.useEffect((function() {
                    C(null)
                }), [M, C]);
                a()(null != h, "Unknown step for current payment flow.");
                var L, O = null !== (c = null == h || null === (r = h.options) || void 0 === r ? void 0 : r.hideSlider) && void 0 !== c && c,
                    b = null == h || null === (n = h.options) || void 0 === n ? void 0 : n.bodyClassName,
                    A = void 0 !== R && R ? f().sliderBodyLarge : null == h || null === (i = h.options) || void 0 === i ? void 0 : i.sliderBodyClassName;
                return (0, t.jsxs)(t.Fragment, {
                    children: [null === (L = null == h || null === (s = h.options) || void 0 === s ? void 0 : s.renderHeader) || void 0 === L || L ? T : null, h.renderStep(I), null == M || O ? null : (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(u.ModalContent, {
                            className: l()(f().body, b),
                            children: (0, t.jsx)(u.Slides, {
                                activeSlide: M,
                                centered: !1,
                                onSlideReady: function(e) {
                                    return N(e)
                                },
                                children: _.filter((function(e) {
                                    return null != e.key
                                })).map((function(e) {
                                    return (0, t.jsx)(u.Slide, {
                                        id: e.key,
                                        children: (0, t.jsx)("form", {
                                            className: l()(f().sliderBody, A),
                                            ref: function(e) {
                                                return P(e)
                                            },
                                            onSubmit: function(e) {
                                                return e.preventDefault()
                                            }
                                        })
                                    }, e.key)
                                }))
                            })
                        }), (0, t.jsx)("div", {
                            ref: function(e) {
                                return m(e)
                            }
                        }), (0, t.jsx)("div", {
                            ref: function(e) {
                                return C(e)
                            }
                        })]
                    })]
                })
            }

            function R(e) {
                var r = e.children,
                    n = (0, d.usePaymentContext)().bodyNode;
                return null == n ? null : c.createPortal(r, n)
            }

            function I(e) {
                var r = e.children,
                    n = (0, d.usePaymentContext)().footerNode;
                return null == n ? null : c.createPortal(r, n)
            }
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
                o = n(694329),
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
                l = n(694329),
                s = n(159895),
                a = n(884123),
                c = n(203600);
            var u = n(717035);

            function d(e) {
                var r = e.autoTrackExposure,
                    n = e.experiment,
                    d = e.location,
                    E = (0,
                        t.e7)([o.default], (function() {
                        return o.default.getCurrentUser()
                    })),
                    f = (0, u.N)(),
                    p = null != f,
                    T = null != E && (0, l.I5)(E);
                (0, s.Z$)(n);
                var R = n.useExperiment({
                        location: null != d ? d : "1"
                    }, {
                        autoTrackExposure: !T && !p && r
                    }),
                    I = R.enabled,
                    S = R.useExpectedValue,
                    M = R.useLikelihood,
                    _ = (0, t.cj)([a.Z], (function() {
                        var e = a.Z.getState();
                        return {
                            fetched: e.fetched,
                            premiumLikelihood: e.premiumLikelihood
                        }
                    })),
                    P = _.premiumLikelihood,
                    m = _.fetched,
                    C = (0, t.e7)([i.Z], (function() {
                        return i.Z.isLoadedForSKUs([c.Si.TIER_0, c.Si.TIER_2])
                    })),
                    N = !T && I && !p && (S ? !m || !C : !m),
                    h = c.p9.TIER_2;
                if (p) {
                    var L = f.subscription_trial;
                    (null == L ? void 0 : L.sku_id) === c.Si.TIER_0 ? h = c.p9.TIER_0 : (null == L ? void 0 : L.sku_id) === c.Si.TIER_2 && (h = c.p9.TIER_2)
                } else if (!T && !N && I)
                    if (S) {
                        h = function(e, r, n) {
                            return null == e ? c.p9.TIER_2 : e[c.Si.TIER_0] * r > e[c.Si.TIER_2] * n ? c.p9.TIER_0 : c.p9.TIER_2
                        }(P, (0, l.aS)(c.Xh.PREMIUM_MONTH_TIER_0).amount, (0, l.aS)(c.Xh.PREMIUM_MONTH_TIER_2).amount)
                    } else M && (h = function(e) {
                        if (null == e) return c.p9.TIER_0;
                        var r = e[s.Bc],
                            n = e[c.Si.TIER_0],
                            t = e[c.Si.TIER_2];
                        return t > n && t > r ? c.p9.TIER_2 : c.p9.TIER_0
                    }(P));
                return {
                    isLoading: N,
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
                l = n(294184),
                s = n.n(l),
                a = n(513328),
                c = n(304548),
                u = n(19120),
                d = n(347365),
                E = n(414094),
                f = n(782786),
                p = n(83471),
                T = (n(128059), n(149096), n(669426)),
                R = n(832520),
                I = n(264628),
                S = n(2590),
                M = n(473708),
                _ = n(103749),
                P = n.n(_),
                m = new Set([p.h8.SKU_SELECT, p.h8.AWAITING_AUTHENTICATION, p.h8.AWAITING_PURCHASE_TOKEN_AUTH, p.h8.CONFIRM]);

            function C(e) {
                var r = e.steps,
                    n = e.currentStep,
                    l = e.body,
                    _ = e.paymentError,
                    C = e.header,
                    N = e.footer,
                    h = e.isGift,
                    L = void 0 !== h && h,
                    O = e.giftMessage,
                    b = void 0 === O ? M.Z.Messages.PREMIUM_PAYMENT_IS_GIFT : O,
                    A = e.isSeasonalGift,
                    y = void 0 !== A && A,
                    v = e.hideBreadcrumbs,
                    U = void 0 !== v && v,
                    B = e.isLoading,
                    g = void 0 !== B && B,
                    G = e.purchaseError,
                    j = e.purchaseErrorBlockRef,
                    Z = e.planError,
                    x = e.onScroll,
                    D = e.scrollerClassName,
                    K = e.hasCurrencies,
                    F = void 0 !== K && K,
                    k = null;
                null != _ && null == (0, p.ly)(_) ? k = _ : null != G ? k = G : null != Z && (k = Z);
                var w = null != k ? k.message : "";
                if (null != k && k instanceof d.HF) {
                    k.code === E.SM.CARD_DECLINED && F && (w += " ".concat(M.Z.Messages.BILLING_ERROR_TRY_ANOTHER));
                    k.code === E.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (w = M.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT);
                    k.code === S.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (w = M.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID)
                }
                var Y = (0, f.usePaymentContext)().stripe;
                g = g || null == Y;
                var W = o.useRef(new a.V7);
                o.useEffect((function() {
                    var e = W.current;
                    null != Y || e.isStarted() ? null != Y && e.stop() : e.start(1e4, (function() {
                        var e = new Error("Stripe took too long to load");
                        (0, I.q2)(e)
                    }));
                    return function() {
                        e.stop()
                    }
                }), [Y]);
                var H = r.includes(p.h8.PAYMENT_TYPE) ? p.h8.PAYMENT_TYPE : p.h8.ADD_PAYMENT_STEPS;
                return (0, t.jsxs)(i.Elements, {
                    options: S.OBo,
                    stripe: Y,
                    children: [C, (0, t.jsxs)("div", {
                        className: s()("paymentModalContent", P().content),
                        children: [L && !y && n !== p.h8.CONFIRM ? (0, t.jsx)(u.Z, {
                            className: P().paymentNote,
                            iconSize: u.Z.Sizes.SMALL,
                            icon: R.Z,
                            color: null == b ? u.Z.Colors.PRIMARY : u.Z.Colors.SECONDARY,
                            children: b
                        }) : null, U ? null : (0, t.jsx)("div", {
                            className: P().breadcrumbsWrapper,
                            children: (0, t.jsx)(T.Z, {
                                activeId: p.Ck.has(n) ? H : n,
                                breadcrumbs: r.filter((function(e) {
                                    return !p.Ck.has(e) && !m.has(e)
                                })).map((function(e) {
                                    return {
                                        id: e,
                                        label: (0, p.DJ)(e)
                                    }
                                }))
                            })
                        }), (0, t.jsxs)("div", {
                            className: P().bodyWrapper,
                            children: [null == k ? null : (0, t.jsx)("div", {
                                className: P().errorBlockWrapper,
                                children: (0, t.jsx)(c.FormErrorBlock, {
                                    ref: j,
                                    children: w
                                })
                            }), g ? (0, t.jsx)(c.Spinner, {
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
                    }), N]
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
                l = n(739477),
                s = n.n(l);

            function a(e) {
                var r = e.icon,
                    n = e.iconClassName,
                    o = e.description,
                    l = e.color;
                return (0, t.jsxs)("div", {
                    className: s().perkRow,
                    children: [(0,
                        t.jsx)("div", {
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
                a = n(304548),
                c = n(744564),
                u = n(673679),
                d = n(810978),
                E = n(266472),
                f = n(782786),
                p = n(83471),
                T = n(799066),
                R = n(245325),
                I = n(717035),
                S = n(455706),
                M = n(70535),
                _ = n(383861),
                P = n(688858),
                m = n(384411),
                C = n(711531),
                N = n(104681),
                h = n(781453),
                L = n(521798),
                O = n(694329),
                b = n(249052),
                A = n(2590),
                y = n(203600),
                v = n(473708),
                U = n(956855),
                B = n.n(U);

            function g(e, r, n) {
                r in e ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = n;
                return e
            }

            function G(e) {
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

            function j(e, r) {
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

            function Z(e, r) {
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
                        icon: L.Z,
                        iconClassName: B().iconColorPurple,
                        description: v.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
                    }), (0, t.jsx)(P.Z, {
                        icon: N.Z,
                        iconClassName: B().iconColorPink,
                        description: v.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_GUILD_SUBSCRIPTION.format({
                            numGuildSubscriptions: y.cb,
                            discountPercent: (0, b.T3)(r, y.Rr / 100)
                        })
                    }), (0, t.jsx)(P.Z, {
                        icon: h.Z,
                        iconClassName: B().iconColorYellow,
                        description: v.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_PREMIUM_SUBSCRIPTION
                    })]
                })
            };

            function D() {
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(P.Z, {
                        icon: L.Z,
                        iconClassName: B().iconColorPurple,
                        description: v.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
                    }), (0, t.jsx)(P.Z, {
                        icon: h.Z,
                        iconClassName: B().iconColorYellow,
                        description: v.Z.Messages.STICKER_PREMIUM_TIER_0_UPSELL_PERK_PREMIUM_SUBSCRIPTION
                    })]
                })
            }
            var K = function(e) {
                    var r = e.shouldRenderPremiumTrialUpsell,
                        o = e.isTier0Upsell,
                        i = e.isLoading,
                        c = e.price,
                        u = e.onClose,
                        d = (0, s.e7)([m.default], (function() {
                            return m.default.locale
                        }));
                    return (0, t.jsxs)("div", {
                        className: B().wrapper,
                        children: [(0, t.jsx)(a.ModalCloseButton, {
                            onClick: u,
                            className: B().closeButton
                        }), r && (0, t.jsx)(M.dz, {
                            className: B().premiumTrialBadge
                        }), (0, t.jsx)("img", {
                            className: l()(B().heroImage, g({}, B().heroImageWithTrialOffer, r)),
                            src: n(230098),
                            alt: ""
                        }), i ? (0, t.jsx)(a.Spinner, {}) : (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(a.Text, {
                                variant: "text-md/normal",
                                className: B().heading,
                                children: null == c ? (0, t.jsx)(a.Spinner, {
                                    type: a.Spinner.Type.PULSING_ELLIPSIS
                                }) : o ? v.Z.Messages.STICKER_PREMIUM_SUBSCRIPTION_UPSELL_ALERT_TITLE.format({
                                    planName: (0, O.aq)(y.Xh.PREMIUM_MONTH_TIER_0),
                                    monthlyPrice: (0, b.T4)(c.amount, c.currency)
                                }) : v.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_ALERT_TITLE.format({
                                    monthlyPrice: (0, b.T4)(c.amount, c.currency)
                                })
                            }), (0, t.jsx)("div", {
                                className: B().perks,
                                children: o ? (0, t.jsx)(D, {}) : (0, t.jsx)(x, {
                                    locale: d
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
                            section: A.jXE.STICKER_PREMIUM_TIER_2_UPSELL_MODAL
                        };
                    return (0, t.jsxs)(a.ModalFooter, {
                        className: B().footer,
                        children: [(0, t.jsx)(a.Button, {
                            onClick: o,
                            size: a.Button.Sizes.SMALL,
                            color: a.Button.Colors.PRIMARY,
                            look: a.Button.Looks.LINK,
                            children: v.Z.Messages.CLOSE
                        }), (0, t.jsx)(S.Z, {
                            buttonText: r ? n ? v.Z.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : v.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0,
                            premiumModalAnalyticsLocation: i,
                            subscriptionTier: n ? y.Si.TIER_0 : y.Si.TIER_2,
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
                    n = Z(e, ["onClose"]),
                    i = (0, E.V)(),
                    l = (0, s.e7)([C.Z], (function() {
                        return C.Z.hasFetchedPaymentSources
                    })),
                    S = i && l,
                    M = (0, I.N)(),
                    P = (0, R.Z)({
                        autoTrackExposure: S,
                        experiment: T.Z,
                        location: "stickers_upsell"
                    }),
                    m = P.isLoading,
                    N = P.suggestedPremiumType;
                o.useEffect((function() {
                    c.Z.wait((function() {
                        (0, u.tZ)();
                        (0, d.Y2)(null, null, A.JjL.DISCOVERY)
                    }))
                }), []);
                var h = null != M,
                    L = N === y.p9.TIER_0,
                    b = S ? O.ZP.getDefaultPrice(L ? y.Xh.PREMIUM_MONTH_TIER_0 : y.Xh.PREMIUM_MONTH_TIER_2) : null,
                    v = !S || m;
                return (0, t.jsx)(f.PaymentContextProvider, {
                    activeSubscription: null,
                    stepConfigs: [],
                    skuIDs: [],
                    children: (0, t.jsx)(a.ModalRoot, j(G({}, n), {
                        "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
                        children: (0, t.jsx)(_.Z, {
                            hideBreadcrumbs: !0,
                            body: (0, t.jsx)(K, {
                                shouldRenderPremiumTrialUpsell: h,
                                isTier0Upsell: L,
                                isLoading: v,
                                price: b,
                                onClose: r
                            }),
                            footer: (0, t.jsx)(F, {
                                shouldRenderPremiumTrialUpsell: h,
                                isTier0Upsell: L,
                                onClose: r
                            }),
                            steps: [p.h8.PREMIUM_UPSELL],
                            currentStep: p.h8.PREMIUM_UPSELL
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
                s = n(304548),
                a = n(107364),
                c = n(718831),
                u = n(70821),
                d = n.n(u);

            function E(e, r) {
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

            function p(e) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function T(e, r) {
                return !r || "object" !== I(r) && "function" != typeof r ? function(e) {
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
            var I = function(e) {
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
                    var n, t = p(e);
                    if (r) {
                        var o = p(this).constructor;
                        n = Reflect.construct(t, arguments, o)
                    } else n = t.apply(this, arguments);
                    return T(this, n)
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
                    r && R(e, r)
                }(n, e);
                var r = S(n);

                function n() {
                    E(this, n);
                    var e;
                    (e = r.apply(this, arguments)).renderBreadcrumb = function(r, n) {
                        var o, i = e.props,
                            a = i.activeId,
                            u = i.onBreadcrumbClick,
                            E = i.breadcrumbs,
                            p = i.renderCustomBreadcrumb,
                            T = i.separatorClassName,
                            R = r.id === a,
                            I = n === E.length - 1,
                            S = null != p ? p(r, R) : (0, t.jsx)("span", {
                                className: l()(d().breadcrumb, (o = {}, f(o, d().activeBreadcrumb, R), f(o, d().interactiveBreadcrumb, null != u), o)),
                                children: r.label
                            });
                        return (0, t.jsxs)("div", {
                            className: l()(d().breadcrumbWrapper, f({}, d().breadcrumbFinalWrapper, I)),
                            children: [null != u ? (0, t.jsx)(s.Clickable, {
                                tag: "span",
                                onClick: function() {
                                    return e.handleClick(r)
                                },
                                className: d().breadcrumbClickWrapper,
                                children: S
                            }) : S, I ? null : (0, t.jsx)(c.Z, {
                                className: l()(d().breadcrumbArrow, T),
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
                        className: l()(d().breadcrumbs, n),
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