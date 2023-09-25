"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [2231], {
        19120: (e, r, n) => {
            n.d(r, {
                Z: () => M
            });
            var t = n(785893),
                o = n(667294),
                i = n(294184),
                l = n.n(i),
                c = n(107364),
                a = n(350762),
                s = n.n(a);

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

            function f(e) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return f(e)
            }

            function E(e, r) {
                return !r || "object" !== P(r) && "function" != typeof r ? function(e) {
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
            var S, b, I, P = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function C(e) {
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
                    var n, t = f(e);
                    if (r) {
                        var o = f(this).constructor;
                        n = Reflect.construct(t, arguments, o)
                    } else n = t.apply(this, arguments);
                    return E(this, n)
                }
            }! function(e) {
                e.PRIMARY = "primary";
                e.SECONDARY = "secondary";
                e.WARNING = "warning";
                e.ERROR = "error"
            }(S || (S = {}));
            ! function(e) {
                e.SMALL = "small";
                e.LARGE = "large";
                e.NONE = "none"
            }(b || (b = {}));
            var m, N = (d(I = {}, S.PRIMARY, s().colorPrimary), d(I, S.SECONDARY, s().colorSecondary), d(I, S.WARNING, s().colorWarning), d(I, S.ERROR, s().colorError), I),
                T = (d(m = {}, b.SMALL, s().small), d(m, b.LARGE, s().large), d(m, b.NONE, null), m),
                h = function(e) {
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
                    var r = C(n);

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
                        return (0, t.jsxs)(c.Z, {
                            className: l()(s().note, N[n], a),
                            align: c.Z.Align.CENTER,
                            children: [(0, t.jsx)(r, {
                                className: l()(s().icon, T[i], u)
                            }), (0, t.jsx)("div", {
                                children: o
                            })]
                        })
                    };
                    return n
                }(o.PureComponent);
            h.Colors = S;
            h.Sizes = b;
            const M = h
        },
        128059: (e, r, n) => {
            n.d(r, {
                Z: () => p
            });
            var t = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                l = n(818103),
                c = n(669426),
                a = n(644144),
                s = n(782786),
                u = n(83471),
                d = n(473708),
                f = n(14346),
                E = n.n(f);

            function p(e) {
                var r, n = e.className,
                    o = e.isEligibleForTrial,
                    f = void 0 !== o && o,
                    p = (0, s.usePaymentContext)(),
                    S = p.step,
                    b = p.breadcrumbs,
                    I = p.startedPaymentFlowWithPaymentSourcesRef,
                    P = p.isGift,
                    C = p.selectedSkuId,
                    m = p.giftRecipient;
                if (null == b || 0 === b.length || (0, a.a8)(m)) return null;
                r = (0, l.Wt)({
                    isTrial: f,
                    isGift: P,
                    selectedSkuId: C
                }).enabled ? [{
                    id: u.h8.REVIEW,
                    label: d.Z.Messages.BILLING_STEP_PLAN_AND_PAYMENT
                }] : b.filter((function(e) {
                    var r = e.id !== u.h8.ADD_PAYMENT_STEPS,
                        n = e.id === u.h8.ADD_PAYMENT_STEPS && !I.current;
                    return !f || f && (r || n)
                }));
                return (0, t.jsx)("div", {
                    className: i()("breadcrumb", E().wrapper, n),
                    children: (0, t.jsx)(c.Z, {
                        activeId: S,
                        breadcrumbs: r
                    })
                })
            }
        },
        149096: (e, r, n) => {
            n.d(r, {
                ZP: () => S,
                C3: () => b,
                O3: () => I
            });
            var t = n(785893),
                o = n(667294),
                i = n(294184),
                l = n.n(i),
                c = n(441143),
                a = n.n(c),
                s = n(973935),
                u = n(882723),
                d = n(782786),
                f = n(758614),
                E = n.n(f);

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

            function S(e) {
                var r, n, i, c, s, f = function(e) {
                        return {
                            header: e.header,
                            isLargeModal: e.isLargeModal,
                            stepProps: p(e, ["header", "isLargeModal"])
                        }
                    }(e),
                    S = f.header,
                    b = f.isLargeModal,
                    I = f.stepProps,
                    P = (0, d.usePaymentContext)(),
                    C = P.step,
                    m = P.stepConfigs,
                    N = P.setBodyNode,
                    T = P.setFooterNode,
                    h = P.setModalOverlayNode,
                    M = P.setReadySlideId,
                    R = m.find((function(e) {
                        return e.key === C
                    }));
                o.useEffect((function() {
                    h(null)
                }), [C, h]);
                a()(null != R, "Unknown step for current payment flow.");
                var O, y = null !== (s = null == R || null === (r = R.options) || void 0 === r ? void 0 : r.hideSlider) && void 0 !== s && s,
                    A = null == R || null === (n = R.options) || void 0 === n ? void 0 : n.bodyClassName,
                    v = void 0 !== b && b ? E().sliderBodyLarge : null == R || null === (i = R.options) || void 0 === i ? void 0 : i.sliderBodyClassName;
                return (0, t.jsxs)(t.Fragment, {
                    children: [null === (O = null == R || null === (c = R.options) || void 0 === c ? void 0 : c.renderHeader) || void 0 === O || O ? S : null, R.renderStep(I), null == C || y ? null : (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(u.ModalContent, {
                            className: l()(E().body, A),
                            children: (0, t.jsx)(u.Slides, {
                                activeSlide: C,
                                centered: !1,
                                onSlideReady: function(e) {
                                    return M(e)
                                },
                                children: m.filter((function(e) {
                                    return null != e.key
                                })).map((function(e) {
                                    return (0, t.jsx)(u.Slide, {
                                        id: e.key,
                                        children: (0, t.jsx)("form", {
                                            className: l()(E().sliderBody, v),
                                            ref: function(e) {
                                                return N(e)
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
                                return T(e)
                            }
                        }), (0, t.jsx)("div", {
                            ref: function(e) {
                                return h(e)
                            }
                        })]
                    })]
                })
            }

            function b(e) {
                var r = e.children,
                    n = (0, d.usePaymentContext)().bodyNode;
                return null == n ? null : s.createPortal(r, n)
            }

            function I(e) {
                var r = e.children,
                    n = (0, d.usePaymentContext)().footerNode;
                return null == n ? null : s.createPortal(r, n)
            }
        },
        470387: (e, r, n) => {
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
            n.d(r, {
                Wt: () => a,
                $g: () => s,
                D3: () => u
            });
            var t = n(260561),
                o = n(694329),
                i = n(470387),
                l = n(203600),
                c = (0, t.B)({
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
                    return c.getCurrentConfig({
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

            function s(e, r, n) {
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
                    c = null != n ? (0, o.Af)(n) : null,
                    a = i ? l.IW[r] : l.mn[r],
                    s = null != t ? t : a;
                null != c ? s === c.planId && s === l.IW[r] ? s = l.mn[r] : s === c.planId && s === l.mn[r] ? s = l.IW[r] : c.planId !== l.Xh.PREMIUM_YEAR_TIER_0 && c.planId !== l.Xh.PREMIUM_YEAR_TIER_1 || s !== l.Xh.PREMIUM_MONTH_TIER_2 || (s = l.Xh.PREMIUM_YEAR_TIER_2) : s === l.Xh.PREMIUM_YEAR_TIER_1 && (s = l.Xh.PREMIUM_MONTH_TIER_1);
                return s
            }
        },
        383861: (e, r, n) => {
            n.d(r, {
                Z: () => h
            });
            var t = n(785893),
                o = n(667294),
                i = n(886664),
                l = n(294184),
                c = n.n(l),
                a = n(513328),
                s = n(882723),
                u = n(19120),
                d = n(347365),
                f = n(414094),
                E = n(782786),
                p = n(83471),
                S = (n(128059), n(149096), n(669426)),
                b = n(832520),
                I = n(264628),
                P = n(2590),
                C = n(473708),
                m = n(152221),
                N = n.n(m),
                T = new Set([p.h8.SKU_SELECT, p.h8.AWAITING_AUTHENTICATION, p.h8.AWAITING_PURCHASE_TOKEN_AUTH, p.h8.CONFIRM]);

            function h(e) {
                var r = e.steps,
                    n = e.currentStep,
                    l = e.body,
                    m = e.paymentError,
                    h = e.header,
                    M = e.footer,
                    R = e.isGift,
                    O = void 0 !== R && R,
                    y = e.giftMessage,
                    A = void 0 === y ? C.Z.Messages.PREMIUM_PAYMENT_IS_GIFT : y,
                    v = e.isSeasonalGift,
                    _ = void 0 !== v && v,
                    g = e.hideBreadcrumbs,
                    j = void 0 !== g && g,
                    L = e.isLoading,
                    G = void 0 !== L && L,
                    B = e.purchaseError,
                    k = e.purchaseErrorBlockRef,
                    x = e.planError,
                    D = e.onScroll,
                    w = e.scrollerClassName,
                    K = e.hasCurrencies,
                    Z = void 0 !== K && K,
                    U = null;
                null != m && null == (0, p.ly)(m) ? U = m : null != B ? U = B : null != x && (U = x);
                var W = null != U ? U.message : "";
                if (null != U && U instanceof d.HF) {
                    U.code === f.SM.CARD_DECLINED && Z && (W += " ".concat(C.Z.Messages.BILLING_ERROR_TRY_ANOTHER));
                    U.code === f.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (W = C.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT);
                    U.code === P.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (W = C.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID)
                }
                var F = (0, E.usePaymentContext)().stripe;
                G = G || null == F;
                var H = o.useRef(new a.V7);
                o.useEffect((function() {
                    var e = H.current;
                    null != F || e.isStarted() ? null != F && e.stop() : e.start(1e4, (function() {
                        var e = new Error("Stripe took too long to load");
                        (0, I.q2)(e)
                    }));
                    return function() {
                        e.stop()
                    }
                }), [F]);
                var Y = r.includes(p.h8.PAYMENT_TYPE) ? p.h8.PAYMENT_TYPE : p.h8.ADD_PAYMENT_STEPS;
                return (0, t.jsxs)(i.Elements, {
                    options: P.OBo,
                    stripe: F,
                    children: [h, (0, t.jsxs)("div", {
                        className: c()("paymentModalContent", N().content),
                        children: [O && !_ && n !== p.h8.CONFIRM ? (0, t.jsx)(u.Z, {
                            className: N().paymentNote,
                            iconSize: u.Z.Sizes.SMALL,
                            icon: b.Z,
                            color: null == A ? u.Z.Colors.PRIMARY : u.Z.Colors.SECONDARY,
                            children: A
                        }) : null, j ? null : (0, t.jsx)("div", {
                            className: N().breadcrumbsWrapper,
                            children: (0, t.jsx)(S.Z, {
                                activeId: p.Ck.has(n) ? Y : n,
                                breadcrumbs: r.filter((function(e) {
                                    return !p.Ck.has(e) && !T.has(e)
                                })).map((function(e) {
                                    return {
                                        id: e,
                                        label: (0, p.DJ)(e)
                                    }
                                }))
                            })
                        }), (0, t.jsxs)("div", {
                            className: N().bodyWrapper,
                            children: [null == U ? null : (0, t.jsx)("div", {
                                className: N().errorBlockWrapper,
                                children: (0, t.jsx)(s.FormErrorBlock, {
                                    ref: k,
                                    children: W
                                })
                            }), G ? (0, t.jsx)(s.Spinner, {
                                className: N().loadingBlock
                            }) : (0, t.jsx)(s.Sequencer, {
                                className: N().sequencer,
                                staticClassName: N().sequencerStatic,
                                animatedNodeClassName: N().sequencerAnimatedNode,
                                fillParent: !0,
                                step: n,
                                steps: r,
                                sideMargin: 20,
                                children: (0, t.jsx)(s.AdvancedScrollerThin, {
                                    onScroll: D,
                                    className: c()(N().scroller, w),
                                    children: l
                                })
                            })]
                        })]
                    }), M]
                })
            }
        },
        186413: (e, r, n) => {
            n.r(r);
            n.d(r, {
                StickerPackViewAllModalFooter: () => ce,
                default: () => se
            });
            var t = n(785893),
                o = n(667294),
                i = n(294184),
                l = n.n(i),
                c = n(23279),
                a = n.n(c),
                s = n(202351),
                u = n(142643),
                d = n(882723),
                f = n(879913),
                E = n(782786),
                p = n(83471),
                S = n(159895),
                b = n(799066),
                I = n(383861),
                P = n(473903),
                C = n(709189),
                m = n(406493),
                N = n(694329),
                T = n(421281),
                h = n(842715),
                M = n(38736),
                R = Object.freeze({
                    inspectedStickerPosition: {
                        rowIndex: -1,
                        columnIndex: -1
                    }
                }),
                O = (0, M.Z)((function(e) {
                    return R
                })),
                y = O,
                A = function(e, r, n) {
                    O.setState({
                        inspectedStickerPosition: {
                            rowIndex: r,
                            columnIndex: e,
                            source: n
                        }
                    })
                },
                v = function() {
                    A(-1, -1)
                },
                _ = n(217544),
                g = n(78551),
                j = n(513586),
                L = n(965196),
                G = n(958125),
                B = n(473708),
                k = n(781022),
                x = n.n(k);

            function D(e, r, n) {
                r in e ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = n;
                return e
            }

            function w(e, r) {
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
            var K = function(e) {
                    var r = e.stickerPack;
                    return (0, t.jsx)("div", {
                        className: x().features,
                        children: (0, j.X_)(r) ? (0, t.jsx)(d.Tooltip, {
                            tooltipClassName: x().featuresTooltip,
                            position: "top",
                            text: B.Z.Messages.STICKER_PICKER_PACK_DETAILS_ANIMATED,
                            children: function(e) {
                                return (0, t.jsx)(G.Z, w(function(e) {
                                    for (var r = 1; r < arguments.length; r++) {
                                        var n = null != arguments[r] ? arguments[r] : {},
                                            t = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                                        }))));
                                        t.forEach((function(r) {
                                            D(e, r, n[r])
                                        }))
                                    }
                                    return e
                                }({}, e), {
                                    className: x().featureIcon
                                }))
                            }
                        }) : null
                    })
                },
                Z = function(e) {
                    var r = e.className,
                        n = e.stickerPack,
                        o = e.withDescription,
                        i = void 0 !== o && o;
                    return (0, t.jsxs)("div", {
                        className: l()(x().header, r),
                        children: [(0, t.jsxs)("div", {
                            className: x().title,
                            children: [(0, t.jsx)(d.Heading, {
                                className: x().heading,
                                variant: "heading-sm/semibold",
                                children: n.name
                            }), (0, t.jsx)(K, {
                                stickerPack: n
                            })]
                        }), i && null != n.description && (0, t.jsx)(d.Text, {
                            className: x().description,
                            variant: "text-sm/normal",
                            children: n.description
                        }), (0, t.jsx)("div", {
                            className: x().count,
                            children: B.Z.Messages.STICKER_PACK_STICKER_COUNT.format({
                                numStickers: n.stickers.length
                            })
                        })]
                    })
                };
            const U = o.memo(Z);
            var W = n(803961),
                F = n(2590),
                H = n(522411),
                Y = n.n(H);

            function V(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var n = 0, t = new Array(r); n < r; n++) t[n] = e[n];
                return t
            }

            function J(e, r, n) {
                r in e ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = n;
                return e
            }

            function X(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = null != arguments[r] ? arguments[r] : {},
                        t = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    t.forEach((function(r) {
                        J(e, r, n[r])
                    }))
                }
                return e
            }

            function Q(e, r) {
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

            function z(e, r) {
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

            function q(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var t, o, i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (n = n.call(e); !(l = (t = n.next()).done); l = !0) {
                                i.push(t.value);
                                if (r && i.length === r) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return V(e, r);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return V(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var $ = (0, T.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS),
                ee = (0, T.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING),
                re = (0, T.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN),
                ne = $ + 2 * ee,
                te = a()(v, 250),
                oe = function() {
                    te.cancel()
                },
                ie = function(e) {
                    var r = e.visibleRowIndex,
                        n = e.columnIndex;
                    te.cancel();
                    A(n, r, f.u.MOUSE_EVENT)
                },
                le = function(e) {
                    var r = e.stickerPack,
                        n = e.width,
                        i = e.hasHeaderImage,
                        c = e.isScrolling,
                        a = e.onInspect,
                        s = o.useMemo((function() {
                            return [(0, j.z)(r)]
                        }), [r]),
                        u = y((function(e) {
                            return e.inspectedStickerPosition
                        })),
                        d = (0, _.el)({
                            stickersCategories: s,
                            stickerNodeMargin: re,
                            stickerNodeWidth: ne,
                            listWidth: n
                        }),
                        f = d.rowCountBySection,
                        E = d.stickersGrid,
                        p = d.gutterWidth;
                    return (0, t.jsxs)("div", {
                        className: l()(Y().container, J({}, Y().containerWithHeader, i)),
                        children: [(0,
                            t.jsx)(U, {
                            className: Y().header,
                            stickerPack: r,
                            withDescription: !0
                        }, r.id), (0, t.jsx)("div", {
                            onFocus: oe,
                            onBlur: te,
                            onMouseOver: oe,
                            onMouseOut: te,
                            children: function() {
                                if (0 === f.length) return null;
                                for (var e = [], r = 0; r < f[0]; r++) e.push((0, t.jsx)(L.Z, {
                                    enlargeOnInteraction: !0,
                                    preferAnimation: !0,
                                    gutterWidth: p,
                                    inspectedStickerPosition: u,
                                    isScrolling: c,
                                    onInspect: a,
                                    rowIndex: r,
                                    stickerDescriptors: E[r],
                                    stickerPadding: ee,
                                    stickerSize: $,
                                    isDisplayingIndividualStickers: !0,
                                    checkSendability: !1
                                }, r));
                                return e
                            }()
                        })]
                    })
                },
                ce = function(e) {
                    var r = e.onClose,
                        n = e.stickerPack;
                    (0, _.fP)();
                    (0, S.Z$)(b.Z);
                    var o = (0, s.e7)([P.default], (function() {
                            return P.default.getCurrentUser()
                        })),
                        i = (0, s.e7)([g.Z], (function() {
                            return g.Z.isPremiumPack(n.id)
                        })),
                        l = h.Z.useExperiment({
                            location: "a3b7dd_1"
                        }, {
                            autoTrackExposure: !1
                        }).freeStickersEnabled;
                    return (0, t.jsxs)(d.ModalFooter, {
                        className: Y().footer,
                        children: [(0, t.jsx)(d.Anchor, {
                            onClick: r,
                            className: Y().skuPreviewFooterCloseButton,
                            children: B.Z.Messages.CLOSE
                        }), i && !(N.ZP.canUseStickersEverywhere(o) || l) && (0,
                            t.jsxs)(C.C, {
                            color: d.Button.Colors.GREEN,
                            type: "submit",
                            innerClassName: Y().premiumButtonInner,
                            onClick: function() {
                                r();
                                (0, W.Z)({
                                    section: F.jXE.STICKER_PACK_VIEW_ALL
                                })
                            },
                            children: [(0, t.jsx)(m.Z, {
                                className: Y().premiumButtonNitroWheel
                            }), B.Z.Messages.STICKER_PACK_AVAILABLE_WITH_PREMIUM]
                        })]
                    })
                },
                ae = function(e) {
                    var r = e.stickerPack,
                        n = e.onClose,
                        o = (0, j.sM)(r, 1024);
                    return null == o ? null : (0, t.jsxs)(d.ModalHeader, {
                        className: Y().headerWithImage,
                        children: [(0, t.jsx)("div", {
                            role: "image",
                            style: {
                                backgroundImage: "url(".concat(o, ")")
                            },
                            className: Y().backgroundImage
                        }), (0, t.jsx)(d.ModalCloseButton, {
                            className: Y().closeButton,
                            onClick: n
                        })]
                    })
                };

            function se(e) {
                var r = e.onClose,
                    n = e.stickerPack,
                    i = z(e, ["onClose", "stickerPack"]),
                    l = q(o.useState(null), 2),
                    c = l[0],
                    a = l[1],
                    s = o.useCallback((function(e) {
                        null !== e && a(e.offsetWidth)
                    }), []);
                o.useLayoutEffect((function() {
                    v()
                }), []);
                return (0, t.jsx)(E.PaymentContextProvider, {
                    activeSubscription: null,
                    stepConfigs: [],
                    skuIDs: [],
                    children: (0, t.jsx)(d.ModalRoot, Q(X({}, i), {
                        "aria-labelledby": "sticker-pack-sku-preview-modal",
                        children: (0, t.jsx)(I.Z, {
                            hideBreadcrumbs: !0,
                            body: (0, t.jsx)("div", {
                                ref: s,
                                children: null != c && (0, t.jsx)(le, {
                                    stickerPack: n,
                                    hasHeaderImage: !0,
                                    onInspect: ie,
                                    width: c
                                })
                            }),
                            footer: (0, t.jsx)(ce, {
                                onClose: r,
                                stickerPack: n
                            }),
                            header: (0, t.jsx)(ae, {
                                onClose: r,
                                stickerPack: n
                            }),
                            onScroll: te,
                            steps: [p.h8.SKU_PREVIEW],
                            currentStep: p.h8.SKU_PREVIEW
                        })
                    }))
                })
            }
        },
        669426: (e, r, n) => {
            n.d(r, {
                Z: () => C
            });
            var t = n(785893),
                o = n(667294),
                i = n(294184),
                l = n.n(i),
                c = n(882723),
                a = n(107364),
                s = n(718831),
                u = n(49032),
                d = n.n(u);

            function f(e, r) {
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

            function p(e) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function S(e, r) {
                return !r || "object" !== I(r) && "function" != typeof r ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : r
            }

            function b(e, r) {
                b = Object.setPrototypeOf || function(e, r) {
                    e.__proto__ = r;
                    return e
                };
                return b(e, r)
            }
            var I = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function P(e) {
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
                    return S(this, n)
                }
            }
            const C = function(e) {
                ! function(e, r) {
                    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(r && r.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    r && b(e, r)
                }(n, e);
                var r = P(n);

                function n() {
                    f(this, n);
                    var e;
                    (e = r.apply(this, arguments)).renderBreadcrumb = function(r, n) {
                        var o, i = e.props,
                            a = i.activeId,
                            u = i.onBreadcrumbClick,
                            f = i.breadcrumbs,
                            p = i.renderCustomBreadcrumb,
                            S = i.separatorClassName,
                            b = r.id === a,
                            I = n === f.length - 1,
                            P = null != p ? p(r, b) : (0, t.jsx)("span", {
                                className: l()(d().breadcrumb, (o = {}, E(o, d().activeBreadcrumb, b), E(o, d().interactiveBreadcrumb, null != u), o)),
                                children: r.label
                            });
                        return (0, t.jsxs)("div", {
                            className: l()(d().breadcrumbWrapper, E({}, d().breadcrumbFinalWrapper, I)),
                            children: [null != u ? (0, t.jsx)(c.Clickable, {
                                tag: "span",
                                onClick: function() {
                                    return e.handleClick(r)
                                },
                                className: d().breadcrumbClickWrapper,
                                children: P
                            }) : P, I ? null : (0, t.jsx)(s.Z, {
                                className: l()(d().breadcrumbArrow, S),
                                direction: s.Z.Directions.RIGHT
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