(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [45716], {
        230098: (e, r, n) => {
            e.exports = n.p + "f5ffd8fdb99601120c834e833a87eda8.svg"
        },
        19120: (e, r, n) => {
            "use strict";
            n.d(r, {
                Z: () => L
            });
            var t = n(785893),
                o = n(667294),
                i = n(294184),
                s = n.n(i),
                l = n(107364),
                c = n(543151),
                a = n.n(c);

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

            function S(e) {
                S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return S(e)
            }

            function d(e, r) {
                return !r || "object" !== p(r) && "function" != typeof r ? function(e) {
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
            var f, M, R, p = function(e) {
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
                    var n, t = S(e);
                    if (r) {
                        var o = S(this).constructor;
                        n = Reflect.construct(t, arguments, o)
                    } else n = t.apply(this, arguments);
                    return d(this, n)
                }
            }! function(e) {
                e.PRIMARY = "primary";
                e.SECONDARY = "secondary";
                e.WARNING = "warning";
                e.ERROR = "error"
            }(f || (f = {}));
            ! function(e) {
                e.SMALL = "small";
                e.LARGE = "large";
                e.NONE = "none"
            }(M || (M = {}));
            var C, N = (E(R = {}, f.PRIMARY, a().colorPrimary), E(R, f.SECONDARY, a().colorSecondary), E(R, f.WARNING, a().colorWarning), E(R, f.ERROR, a().colorError), R),
                P = (E(C = {}, M.SMALL, a().small), E(C, M.LARGE, a().large), E(C, M.NONE, null), C),
                A = function(e) {
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
                    var r = I(n);

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
                            c = e.className,
                            u = e.iconClassName;
                        return (0, t.jsxs)(l.Z, {
                            className: s()(a().note, N[n], c),
                            align: l.Z.Align.CENTER,
                            children: [(0, t.jsx)(r, {
                                className: s()(a().icon, P[i], u)
                            }), (0, t.jsx)("div", {
                                children: o
                            })]
                        })
                    };
                    return n
                }(o.PureComponent);
            A.Colors = f;
            A.Sizes = M;
            const L = A
        },
        128059: (e, r, n) => {
            "use strict";
            n.d(r, {
                Z: () => S
            });
            var t = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                s = n(669426),
                l = n(644144),
                c = n(782786),
                a = n(83471),
                u = n(441877),
                E = n.n(u);

            function S(e) {
                var r = e.className,
                    n = e.isEligibleForTrial,
                    o = void 0 !== n && n,
                    u = (0, c.usePaymentContext)(),
                    S = u.step,
                    d = u.breadcrumbs,
                    T = u.startedPaymentFlowWithPaymentSourcesRef,
                    f = u.giftRecipient;
                if (null == d || 0 === d.length || (0, l.a8)(f)) return null;
                var M = d.flatMap((function(e) {
                    var r = e.useBreadcrumbLabel();
                    return null != r ? {
                        id: e.id,
                        label: r
                    } : []
                }));
                if (0 === M.length) return null;
                M = M.filter((function(e) {
                    var r = e.id !== a.h8.ADD_PAYMENT_STEPS,
                        n = e.id === a.h8.ADD_PAYMENT_STEPS && !T.current;
                    return !o || o && (r || n)
                }));
                return (0, t.jsx)("div", {
                    className: i()("breadcrumb", E().wrapper, r),
                    children: (0, t.jsx)(s.Z, {
                        activeId: S,
                        breadcrumbs: M
                    })
                })
            }
        },
        149096: (e, r, n) => {
            "use strict";
            n.d(r, {
                ZP: () => f,
                C3: () => M,
                O3: () => R
            });
            var t = n(785893),
                o = n(667294),
                i = n(294184),
                s = n.n(i),
                l = n(441143),
                c = n.n(l),
                a = n(973935),
                u = n(304548),
                E = n(782786),
                S = n(384009),
                d = n.n(S);

            function T(e, r) {
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

            function f(e) {
                var r, n, i, l, a, S = function(e) {
                        return {
                            header: e.header,
                            isLargeModal: e.isLargeModal,
                            stepProps: T(e, ["header", "isLargeModal"])
                        }
                    }(e),
                    f = S.header,
                    M = S.isLargeModal,
                    R = S.stepProps,
                    p = (0, E.usePaymentContext)(),
                    I = p.step,
                    C = p.stepConfigs,
                    N = p.setBodyNode,
                    P = p.setFooterNode,
                    A = p.setModalOverlayNode,
                    L = p.setReadySlideId,
                    _ = C.find((function(e) {
                        return e.key === I
                    }));
                o.useEffect((function() {
                    A(null)
                }), [I, A]);
                c()(null != _, "Unknown step for current payment flow.");
                var m, O = null !== (a = null == _ || null === (r = _.options) || void 0 === r ? void 0 : r.hideSlider) && void 0 !== a && a,
                    G = null == _ || null === (n = _.options) || void 0 === n ? void 0 : n.bodyClassName,
                    h = void 0 !== M && M ? d().sliderBodyLarge : null == _ || null === (i = _.options) || void 0 === i ? void 0 : i.sliderBodyClassName;
                return (0, t.jsxs)(t.Fragment, {
                    children: [null === (m = null == _ || null === (l = _.options) || void 0 === l ? void 0 : l.renderHeader) || void 0 === m || m ? f : null, _.renderStep(R), null == I || O ? null : (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(u.ModalContent, {
                            className: s()(d().body, G),
                            children: (0,
                                t.jsx)(u.Slides, {
                                activeSlide: I,
                                centered: !1,
                                onSlideReady: function(e) {
                                    return L(e)
                                },
                                children: C.filter((function(e) {
                                    return null != e.key
                                })).map((function(e) {
                                    return (0, t.jsx)(u.Slide, {
                                        id: e.key,
                                        children: (0, t.jsx)("form", {
                                            className: s()(d().sliderBody, h),
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
                                return P(e)
                            }
                        }), (0, t.jsx)("div", {
                            ref: function(e) {
                                return A(e)
                            }
                        })]
                    })]
                })
            }

            function M(e) {
                var r = e.children,
                    n = (0, E.usePaymentContext)().bodyNode;
                return null == n ? null : a.createPortal(r, n)
            }

            function R(e) {
                var r = e.children,
                    n = (0, E.usePaymentContext)().footerNode;
                return null == n ? null : a.createPortal(r, n)
            }
        },
        245325: (e, r, n) => {
            "use strict";
            n.d(r, {
                Z: () => E
            });
            var t = n(202351),
                o = n(473903),
                i = n(551778),
                s = n(116094),
                l = n(159895),
                c = n(884123),
                a = n(203600);
            var u = n(717035);

            function E(e) {
                var r = e.autoTrackExposure,
                    n = e.experiment,
                    E = e.location,
                    S = (0, t.e7)([o.default], (function() {
                        return o.default.getCurrentUser()
                    })),
                    d = (0, u.N)(),
                    T = null != d,
                    f = null != S && (0, s.I5)(S);
                (0,
                    l.Z$)(n);
                var M = n.useExperiment({
                        location: null != E ? E : "1"
                    }, {
                        autoTrackExposure: !f && !T && r
                    }),
                    R = M.enabled,
                    p = M.useExpectedValue,
                    I = M.useLikelihood,
                    C = (0, t.cj)([c.Z], (function() {
                        var e = c.Z.getState();
                        return {
                            fetched: e.fetched,
                            premiumLikelihood: e.premiumLikelihood
                        }
                    })),
                    N = C.premiumLikelihood,
                    P = C.fetched,
                    A = (0, t.e7)([i.Z], (function() {
                        return i.Z.isLoadedForSKUs([a.Si.TIER_0, a.Si.TIER_2])
                    })),
                    L = !f && R && !T && (p ? !P || !A : !P),
                    _ = a.p9.TIER_2;
                if (T) {
                    var m = d.subscription_trial;
                    (null == m ? void 0 : m.sku_id) === a.Si.TIER_0 ? _ = a.p9.TIER_0 : (null == m ? void 0 : m.sku_id) === a.Si.TIER_2 && (_ = a.p9.TIER_2)
                } else if (!f && !L && R)
                    if (p) {
                        _ = function(e, r, n) {
                            return null == e ? a.p9.TIER_2 : e[a.Si.TIER_0] * r > e[a.Si.TIER_2] * n ? a.p9.TIER_0 : a.p9.TIER_2
                        }(N, (0, s.aS)(a.Xh.PREMIUM_MONTH_TIER_0).amount, (0, s.aS)(a.Xh.PREMIUM_MONTH_TIER_2).amount)
                    } else I && (_ = function(e) {
                        if (null == e) return a.p9.TIER_0;
                        var r = e[l.Bc],
                            n = e[a.Si.TIER_0],
                            t = e[a.Si.TIER_2];
                        return t > n && t > r ? a.p9.TIER_2 : a.p9.TIER_0
                    }(N));
                return {
                    isLoading: L,
                    suggestedPremiumType: _
                }
            }
        },
        383861: (e, r, n) => {
            "use strict";
            n.d(r, {
                Z: () => A
            });
            var t = n(785893),
                o = n(667294),
                i = n(886664),
                s = n(294184),
                l = n.n(s),
                c = n(513328),
                a = n(304548),
                u = n(19120),
                E = n(347365),
                S = n(414094),
                d = n(782786),
                T = n(83471),
                f = (n(128059), n(149096), n(669426)),
                M = n(832520),
                R = n(264628),
                p = n(2590),
                I = n(473708),
                C = n(103749),
                N = n.n(C),
                P = new Set([T.h8.SKU_SELECT, T.h8.AWAITING_AUTHENTICATION, T.h8.AWAITING_PURCHASE_TOKEN_AUTH, T.h8.CONFIRM]);

            function A(e) {
                var r = e.steps,
                    n = e.currentStep,
                    s = e.body,
                    C = e.paymentError,
                    A = e.header,
                    L = e.footer,
                    _ = e.isGift,
                    m = void 0 !== _ && _,
                    O = e.giftMessage,
                    G = void 0 === O ? I.Z.Messages.PREMIUM_PAYMENT_IS_GIFT : O,
                    h = e.isSeasonalGift,
                    B = void 0 !== h && h,
                    b = e.hideBreadcrumbs,
                    U = void 0 !== b && b,
                    y = e.isLoading,
                    v = void 0 !== y && y,
                    D = e.purchaseError,
                    Z = e.purchaseErrorBlockRef,
                    K = e.planError,
                    j = e.onScroll,
                    g = e.scrollerClassName,
                    F = e.hasCurrencies,
                    x = void 0 !== F && F,
                    H = null;
                null != C && null == (0, T.ly)(C) ? H = C : null != D ? H = D : null != K && (H = K);
                var Y = null != H ? H.message : "";
                if (null != H && H instanceof E.HF) {
                    H.code === S.SM.CARD_DECLINED && x && (Y += " ".concat(I.Z.Messages.BILLING_ERROR_TRY_ANOTHER));
                    H.code === S.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (Y = I.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT);
                    H.code === p.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (Y = I.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID)
                }
                var W = (0, d.usePaymentContext)().stripe;
                v = v || null == W;
                var w = o.useRef(new c.V7);
                o.useEffect((function() {
                    var e = w.current;
                    null != W || e.isStarted() ? null != W && e.stop() : e.start(1e4, (function() {
                        var e = new Error("Stripe took too long to load");
                        (0, R.q2)(e)
                    }));
                    return function() {
                        e.stop()
                    }
                }), [W]);
                var V = r.includes(T.h8.PAYMENT_TYPE) ? T.h8.PAYMENT_TYPE : T.h8.ADD_PAYMENT_STEPS;
                return (0, t.jsxs)(i.Elements, {
                    options: p.OBo,
                    stripe: W,
                    children: [A, (0, t.jsxs)("div", {
                        className: l()("paymentModalContent", N().content),
                        children: [m && !B && n !== T.h8.CONFIRM ? (0, t.jsx)(u.Z, {
                            className: N().paymentNote,
                            iconSize: u.Z.Sizes.SMALL,
                            icon: M.Z,
                            color: null == G ? u.Z.Colors.PRIMARY : u.Z.Colors.SECONDARY,
                            children: G
                        }) : null, U ? null : (0, t.jsx)("div", {
                            className: N().breadcrumbsWrapper,
                            children: (0, t.jsx)(f.Z, {
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
                            className: N().bodyWrapper,
                            children: [null == H ? null : (0, t.jsx)("div", {
                                className: N().errorBlockWrapper,
                                children: (0, t.jsx)(a.FormErrorBlock, {
                                    ref: Z,
                                    children: Y
                                })
                            }), v ? (0, t.jsx)(a.Spinner, {
                                className: N().loadingBlock
                            }) : (0, t.jsx)(a.Sequencer, {
                                className: N().sequencer,
                                staticClassName: N().sequencerStatic,
                                animatedNodeClassName: N().sequencerAnimatedNode,
                                fillParent: !0,
                                step: n,
                                steps: r,
                                sideMargin: 20,
                                children: (0, t.jsx)(a.AdvancedScrollerThin, {
                                    onScroll: j,
                                    className: l()(N().scroller, g),
                                    children: s
                                })
                            })]
                        })]
                    }), L]
                })
            }
        },
        688858: (e, r, n) => {
            "use strict";
            n.d(r, {
                Z: () => c
            });
            var t = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                s = n(739477),
                l = n.n(s);

            function c(e) {
                var r = e.icon,
                    n = e.iconClassName,
                    o = e.description,
                    s = e.color;
                return (0, t.jsxs)("div", {
                    className: l().perkRow,
                    children: [(0, t.jsx)("div", {
                        className: l().perkIconContainer,
                        children: (0, t.jsx)(r, {
                            color: s,
                            className: i()(l().perkIcon, n)
                        })
                    }), (0,
                        t.jsx)("div", {
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
                default: () => H
            });
            var t = n(785893),
                o = n(667294),
                i = n(294184),
                s = n.n(i),
                l = n(202351),
                c = n(304548),
                a = n(744564),
                u = n(673679),
                E = n(810978),
                S = n(266472),
                d = n(782786),
                T = n(83471),
                f = n(799066),
                M = n(245325),
                R = n(717035),
                p = n(455706),
                I = n(70535),
                C = n(383861),
                N = n(688858),
                P = n(384411),
                A = n(711531),
                L = n(104681),
                _ = n(781453),
                m = n(521798),
                O = n(116094),
                G = n(249052),
                h = n(2590),
                B = n(203600),
                b = n(473708),
                U = n(956855),
                y = n.n(U);

            function v(e, r, n) {
                r in e ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = n;
                return e
            }

            function D(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = null != arguments[r] ? arguments[r] : {},
                        t = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    t.forEach((function(r) {
                        v(e, r, n[r])
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

            function K(e, r) {
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
            var j = function(e) {
                var r = e.locale;
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(N.Z, {
                        icon: m.Z,
                        iconClassName: y().iconColorPurple,
                        description: b.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
                    }), (0, t.jsx)(N.Z, {
                        icon: L.Z,
                        iconClassName: y().iconColorPink,
                        description: b.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_GUILD_SUBSCRIPTION.format({
                            numGuildSubscriptions: B.cb,
                            discountPercent: (0, G.T3)(r, B.Rr / 100)
                        })
                    }), (0, t.jsx)(N.Z, {
                        icon: _.Z,
                        iconClassName: y().iconColorYellow,
                        description: b.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_PREMIUM_SUBSCRIPTION
                    })]
                })
            };

            function g() {
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(N.Z, {
                        icon: m.Z,
                        iconClassName: y().iconColorPurple,
                        description: b.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
                    }), (0, t.jsx)(N.Z, {
                        icon: _.Z,
                        iconClassName: y().iconColorYellow,
                        description: b.Z.Messages.STICKER_PREMIUM_TIER_0_UPSELL_PERK_PREMIUM_SUBSCRIPTION
                    })]
                })
            }
            var F = function(e) {
                    var r = e.shouldRenderPremiumTrialUpsell,
                        o = e.isTier0Upsell,
                        i = e.isLoading,
                        a = e.price,
                        u = e.onClose,
                        E = (0, l.e7)([P.default], (function() {
                            return P.default.locale
                        }));
                    return (0, t.jsxs)("div", {
                        className: y().wrapper,
                        children: [(0, t.jsx)(c.ModalCloseButton, {
                            onClick: u,
                            className: y().closeButton
                        }), r && (0, t.jsx)(I.dz, {
                            className: y().premiumTrialBadge
                        }), (0, t.jsx)("img", {
                            className: s()(y().heroImage, v({}, y().heroImageWithTrialOffer, r)),
                            src: n(230098),
                            alt: ""
                        }), i ? (0, t.jsx)(c.Spinner, {}) : (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(c.Text, {
                                variant: "text-md/normal",
                                className: y().heading,
                                children: null == a ? (0, t.jsx)(c.Spinner, {
                                    type: c.Spinner.Type.PULSING_ELLIPSIS
                                }) : o ? b.Z.Messages.STICKER_PREMIUM_SUBSCRIPTION_UPSELL_ALERT_TITLE.format({
                                    planName: (0, O.aq)(B.Xh.PREMIUM_MONTH_TIER_0),
                                    monthlyPrice: (0, G.T4)(a.amount, a.currency)
                                }) : b.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_ALERT_TITLE.format({
                                    monthlyPrice: (0, G.T4)(a.amount, a.currency)
                                })
                            }), (0, t.jsx)("div", {
                                className: y().perks,
                                children: o ? (0, t.jsx)(g, {}) : (0, t.jsx)(j, {
                                    locale: E
                                })
                            })]
                        })]
                    })
                },
                x = function(e) {
                    var r = e.shouldRenderPremiumTrialUpsell,
                        n = e.isTier0Upsell,
                        o = e.onClose,
                        i = {
                            section: h.jXE.STICKER_PREMIUM_TIER_2_UPSELL_MODAL
                        };
                    return (0, t.jsxs)(c.ModalFooter, {
                        className: y().footer,
                        children: [(0, t.jsx)(c.Button, {
                            onClick: o,
                            size: c.Button.Sizes.SMALL,
                            color: c.Button.Colors.PRIMARY,
                            look: c.Button.Looks.LINK,
                            children: b.Z.Messages.CLOSE
                        }), (0, t.jsx)(p.Z, {
                            buttonText: r ? n ? b.Z.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : b.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0,
                            premiumModalAnalyticsLocation: i,
                            subscriptionTier: n ? B.Si.TIER_0 : B.Si.TIER_2,
                            size: c.Button.Sizes.SMALL,
                            color: c.Button.Colors.GREEN,
                            onClick: function() {
                                o()
                            }
                        })]
                    })
                };

            function H(e) {
                var r = e.onClose,
                    n = K(e, ["onClose"]),
                    i = (0, S.V)(),
                    s = (0, l.e7)([A.Z], (function() {
                        return A.Z.hasFetchedPaymentSources
                    })),
                    p = i && s,
                    I = (0, R.N)(),
                    N = (0, M.Z)({
                        autoTrackExposure: p,
                        experiment: f.Z,
                        location: "stickers_upsell"
                    }),
                    P = N.isLoading,
                    L = N.suggestedPremiumType;
                o.useEffect((function() {
                    a.Z.wait((function() {
                        (0, u.tZ)();
                        (0, E.Y2)(null, null, h.JjL.DISCOVERY)
                    }))
                }), []);
                var _ = null != I,
                    m = L === B.p9.TIER_0,
                    G = p ? O.ZP.getDefaultPrice(m ? B.Xh.PREMIUM_MONTH_TIER_0 : B.Xh.PREMIUM_MONTH_TIER_2) : null,
                    b = !p || P;
                return (0, t.jsx)(d.PaymentContextProvider, {
                    activeSubscription: null,
                    stepConfigs: [],
                    skuIDs: [],
                    children: (0, t.jsx)(c.ModalRoot, Z(D({}, n), {
                        "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
                        children: (0, t.jsx)(C.Z, {
                            hideBreadcrumbs: !0,
                            body: (0, t.jsx)(F, {
                                shouldRenderPremiumTrialUpsell: _,
                                isTier0Upsell: m,
                                isLoading: b,
                                price: G,
                                onClose: r
                            }),
                            footer: (0, t.jsx)(x, {
                                shouldRenderPremiumTrialUpsell: _,
                                isTier0Upsell: m,
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
                Z: () => I
            });
            var t = n(785893),
                o = n(667294),
                i = n(294184),
                s = n.n(i),
                l = n(304548),
                c = n(107364),
                a = n(718831),
                u = n(70821),
                E = n.n(u);

            function S(e, r) {
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

            function T(e) {
                T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return T(e)
            }

            function f(e, r) {
                return !r || "object" !== R(r) && "function" != typeof r ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : r
            }

            function M(e, r) {
                M = Object.setPrototypeOf || function(e, r) {
                    e.__proto__ = r;
                    return e
                };
                return M(e, r)
            }
            var R = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function p(e) {
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
                    return f(this, n)
                }
            }
            const I = function(e) {
                ! function(e, r) {
                    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(r && r.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    r && M(e, r)
                }(n, e);
                var r = p(n);

                function n() {
                    S(this, n);
                    var e;
                    (e = r.apply(this, arguments)).renderBreadcrumb = function(r, n) {
                        var o, i = e.props,
                            c = i.activeId,
                            u = i.onBreadcrumbClick,
                            S = i.breadcrumbs,
                            T = i.renderCustomBreadcrumb,
                            f = i.separatorClassName,
                            M = r.id === c,
                            R = n === S.length - 1,
                            p = null != T ? T(r, M) : (0, t.jsx)("span", {
                                className: s()(E().breadcrumb, (o = {}, d(o, E().activeBreadcrumb, M), d(o, E().interactiveBreadcrumb, null != u), o)),
                                children: r.label
                            });
                        return (0, t.jsxs)("div", {
                            className: s()(E().breadcrumbWrapper, d({}, E().breadcrumbFinalWrapper, R)),
                            children: [null != u ? (0, t.jsx)(l.Clickable, {
                                tag: "span",
                                onClick: function() {
                                    return e.handleClick(r)
                                },
                                className: E().breadcrumbClickWrapper,
                                children: p
                            }) : p, R ? null : (0, t.jsx)(a.Z, {
                                className: s()(E().breadcrumbArrow, f),
                                direction: a.Z.Directions.RIGHT
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
                    return (0, t.jsx)(c.Z, {
                        justify: c.Z.Justify.START,
                        className: s()(E().breadcrumbs, n),
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
                e.AD = "AD";
                e.AE = "AE";
                e.AF = "AF";
                e.AG = "AG";
                e.AI = "AI";
                e.AL = "AL";
                e.AM = "AM";
                e.AO = "AO";
                e.AQ = "AQ";
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
                e.BL = "BL";
                e.BM = "BM";
                e.BN = "BN";
                e.BO = "BO";
                e.BQ = "BQ";
                e.BR = "BR";
                e.BS = "BS";
                e.BT = "BT";
                e.BV = "BV";
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
                e.DJ = "DJ";
                e.DK = "DK";
                e.DM = "DM";
                e.DO = "DO";
                e.DZ = "DZ";
                e.EC = "EC";
                e.EE = "EE";
                e.EG = "EG";
                e.EH = "EH";
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
                e.LC = "LC";
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
                e.MF = "MF";
                e.MG = "MG";
                e.MH = "MH";
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
                e.PN = "PN";
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
                e.SH = "SH";
                e.SI = "SI";
                e.SJ = "SJ";
                e.SK = "SK";
                e.SL = "SL";
                e.SM = "SM";
                e.SN = "SN";
                e.SO = "SO";
                e.SR = "SR";
                e.SS = "SS";
                e.ST = "ST";
                e.SV = "SV";
                e.SX = "SX";
                e.SY = "SY";
                e.SZ = "SZ";
                e.TC = "TC";
                e.TD = "TD";
                e.TF = "TF";
                e.TG = "TG";
                e.TH = "TH";
                e.TJ = "TJ";
                e.TK = "TK";
                e.TL = "TL";
                e.TM = "TM";
                e.TN = "TN";
                e.TO = "TO";
                e.TR = "TR";
                e.TT = "TT";
                e.TV = "TV";
                e.TW = "TW";
                e.TZ = "TZ";
                e.UA = "UA";
                e.UG = "UG";
                e.UM = "UM";
                e.US = "US";
                e.UY = "UY";
                e.UZ = "UZ";
                e.VA = "VA";
                e.VC = "VC";
                e.VE = "VE";
                e.VG = "VG";
                e.VI = "VI";
                e.VN = "VN";
                e.VU = "VU";
                e.WF = "WF";
                e.WS = "WS";
                e.YE = "YE";
                e.YT = "YT";
                e.ZA = "ZA";
                e.ZM = "ZM";
                e.ZW = "ZW";
                e.XK = "XK";
                e.AC = "AC";
                e.AN = "AN";
                e.DG = "DG";
                e.EL = "EL";
                e.IC = "IC";
                e.MI = "MI";
                e.TP = "TP";
                e.WK = "WK"
            }(t || (t = {}));
            var o = {
                NON_STANDARD_CODES: new Set(["AC", "AN", "DG", "EL", "IC", "MI", "TP", "WK", "XK"]),
                ALL: new Set(["AC", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AN", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DG", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "EL", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "IC", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MI", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TP", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WK", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"]),
                US_TERRITORIES: new Set(["AS", "GU", "MP", "PR", "VI"]),
                FRANCE_AND_FRENCH_REGION: new Set(["FR", "GF", "GP", "MQ", "NC", "PF", "PM", "RE", "TF", "WF", "YT"]),
                VAT_EU_COUNTRIES: new Set(["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"]),
                VAT_COUNTRIES: new Set(["AT", "AU", "BE", "BG", "CH", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK"]),
                TAX_DOMESTIC: new Set(["CA", "GB", "US"]),
                EU_COUNTRIES: new Set(["AD", "AL", "AT", "AX", "BA", "BE", "BG", "BY", "CH", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FO", "FR", "GG", "GR", "HR", "HU", "IC", "IE", "IM", "IT", "JE", "LI", "LT", "LU", "LV", "MC", "MD", "MK", "MT", "NL", "NO", "PL", "PT", "RO", "RU", "SE", "SI", "SJ", "SK", "SM", "UA", "VA"]),
                EEA_COUNTRIES: new Set(["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK"]),
                WITHOUT_POSTAL_CODES: new Set(["AE", "AG", "AN", "AO", "AW", "BF", "BI", "BJ", "BM", "BO", "BQ", "BS", "BW", "BZ", "CD", "CF", "CG", "CI", "CK", "CM", "CW", "DJ", "DM", "ER", "FJ", "GA", "GD", "GH", "GM", "GQ", "GY", "HK", "HM", "IE", "JM", "KE", "KI", "KM", "KN", "KP", "LY", "ML", "MO", "MR", "MW", "NA", "NR", "NU", "QA", "RW", "SB", "SC", "SL", "SR", "ST", "SX", "SY", "TD", "TF", "TG", "TK", "TL", "TO", "TV", "UG", "VU", "YE", "ZA", "ZW"]),
                TAX_EXCLUSIVE: new Set(["CA", "US"]),
                TAX_ADDRESS_REQUIRE_POSTAL_CODE: new Set(["CA", "US"])
            }
        }
    }
]);