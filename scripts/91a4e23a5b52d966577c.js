(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [45716], {
        230098: (e, r, n) => {
            e.exports = n.p + "f5ffd8fdb99601120c834e833a87eda8.svg"
        },
        19120: (e, r, n) => {
            "use strict";
            n.d(r, {
                Z: () => _
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
            var T, S, R, I = function(e) {
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
            }(T || (T = {}));
            ! function(e) {
                e.SMALL = "small";
                e.LARGE = "large";
                e.NONE = "none"
            }(S || (S = {}));
            var m, C = (d(R = {}, T.PRIMARY, a().colorPrimary), d(R, T.SECONDARY, a().colorSecondary), d(R, T.WARNING, a().colorWarning), d(R, T.ERROR, a().colorError), R),
                P = (d(m = {}, S.SMALL, a().small), d(m, S.LARGE, a().large), d(m, S.NONE, null), m),
                N = function(e) {
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
                            c = e.className,
                            u = e.iconClassName;
                        return (0, t.jsxs)(l.Z, {
                            className: s()(a().note, C[n], c),
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
            N.Colors = T;
            N.Sizes = S;
            const _ = N
        },
        128059: (e, r, n) => {
            "use strict";
            n.d(r, {
                Z: () => f
            });
            var t = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                s = n(669426),
                l = n(644144),
                c = n(782786),
                a = n(83471),
                u = n(441877),
                d = n.n(u);

            function f(e) {
                var r = e.className,
                    n = e.isEligibleForTrial,
                    o = void 0 !== n && n,
                    u = (0, c.usePaymentContext)(),
                    f = u.step,
                    E = u.breadcrumbs,
                    p = u.startedPaymentFlowWithPaymentSourcesRef,
                    T = u.giftRecipient;
                if (null == E || 0 === E.length || (0, l.a8)(T)) return null;
                var S = E.flatMap((function(e) {
                    var r = e.useBreadcrumbLabel();
                    return null != r ? {
                        id: e.id,
                        label: r
                    } : []
                }));
                if (0 === S.length) return null;
                S = S.filter((function(e) {
                    var r = e.id !== a.h8.ADD_PAYMENT_STEPS,
                        n = e.id === a.h8.ADD_PAYMENT_STEPS && !p.current;
                    return !o || o && (r || n)
                }));
                return (0, t.jsx)("div", {
                    className: i()("breadcrumb", d().wrapper, r),
                    children: (0, t.jsx)(s.Z, {
                        activeId: f,
                        breadcrumbs: S
                    })
                })
            }
        },
        149096: (e, r, n) => {
            "use strict";
            n.d(r, {
                ZP: () => T,
                C3: () => S,
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
                d = n(782786),
                f = n(384009),
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

            function T(e) {
                var r, n, i, l, a, f = function(e) {
                        return {
                            header: e.header,
                            isLargeModal: e.isLargeModal,
                            stepProps: p(e, ["header", "isLargeModal"])
                        }
                    }(e),
                    T = f.header,
                    S = f.isLargeModal,
                    R = f.stepProps,
                    I = (0, d.usePaymentContext)(),
                    M = I.step,
                    m = I.stepConfigs,
                    C = I.setBodyNode,
                    P = I.setFooterNode,
                    N = I.setModalOverlayNode,
                    _ = I.setReadySlideId,
                    h = m.find((function(e) {
                        return e.key === M
                    }));
                o.useEffect((function() {
                    N(null)
                }), [M, N]);
                c()(null != h, "Unknown step for current payment flow.");
                var L, O = null !== (a = null == h || null === (r = h.options) || void 0 === r ? void 0 : r.hideSlider) && void 0 !== a && a,
                    b = null == h || null === (n = h.options) || void 0 === n ? void 0 : n.bodyClassName,
                    y = void 0 !== S && S ? E().sliderBodyLarge : null == h || null === (i = h.options) || void 0 === i ? void 0 : i.sliderBodyClassName;
                return (0, t.jsxs)(t.Fragment, {
                    children: [null === (L = null == h || null === (l = h.options) || void 0 === l ? void 0 : l.renderHeader) || void 0 === L || L ? T : null, h.renderStep(R), null == M || O ? null : (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(u.ModalContent, {
                            className: s()(E().body, b),
                            children: (0,
                                t.jsx)(u.Slides, {
                                activeSlide: M,
                                centered: !1,
                                onSlideReady: function(e) {
                                    return _(e)
                                },
                                children: m.filter((function(e) {
                                    return null != e.key
                                })).map((function(e) {
                                    return (0, t.jsx)(u.Slide, {
                                        id: e.key,
                                        children: (0, t.jsx)("form", {
                                            className: s()(E().sliderBody, y),
                                            ref: function(e) {
                                                return C(e)
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
                                return N(e)
                            }
                        })]
                    })]
                })
            }

            function S(e) {
                var r = e.children,
                    n = (0, d.usePaymentContext)().bodyNode;
                return null == n ? null : a.createPortal(r, n)
            }

            function R(e) {
                var r = e.children,
                    n = (0, d.usePaymentContext)().footerNode;
                return null == n ? null : a.createPortal(r, n)
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
                s = n(116094),
                l = n(159895),
                c = n(884123),
                a = n(203600);
            var u = n(717035);

            function d(e) {
                var r = e.autoTrackExposure,
                    n = e.experiment,
                    d = e.location,
                    f = (0, t.e7)([o.default], (function() {
                        return o.default.getCurrentUser()
                    })),
                    E = (0, u.N)(),
                    p = null != E,
                    T = null != f && (0, s.I5)(f);
                (0,
                    l.Z$)(n);
                var S = n.useExperiment({
                        location: null != d ? d : "1"
                    }, {
                        autoTrackExposure: !T && !p && r
                    }),
                    R = S.enabled,
                    I = S.useExpectedValue,
                    M = S.useLikelihood,
                    m = (0, t.cj)([c.Z], (function() {
                        var e = c.Z.getState();
                        return {
                            fetched: e.fetched,
                            premiumLikelihood: e.premiumLikelihood
                        }
                    })),
                    C = m.premiumLikelihood,
                    P = m.fetched,
                    N = (0, t.e7)([i.Z], (function() {
                        return i.Z.isLoadedForSKUs([a.Si.TIER_0, a.Si.TIER_2])
                    })),
                    _ = !T && R && !p && (I ? !P || !N : !P),
                    h = a.p9.TIER_2;
                if (p) {
                    var L = E.subscription_trial;
                    (null == L ? void 0 : L.sku_id) === a.Si.TIER_0 ? h = a.p9.TIER_0 : (null == L ? void 0 : L.sku_id) === a.Si.TIER_2 && (h = a.p9.TIER_2)
                } else if (!T && !_ && R)
                    if (I) {
                        h = function(e, r, n) {
                            return null == e ? a.p9.TIER_2 : e[a.Si.TIER_0] * r > e[a.Si.TIER_2] * n ? a.p9.TIER_0 : a.p9.TIER_2
                        }(C, (0, s.aS)(a.Xh.PREMIUM_MONTH_TIER_0).amount, (0, s.aS)(a.Xh.PREMIUM_MONTH_TIER_2).amount)
                    } else M && (h = function(e) {
                        if (null == e) return a.p9.TIER_0;
                        var r = e[l.Bc],
                            n = e[a.Si.TIER_0],
                            t = e[a.Si.TIER_2];
                        return t > n && t > r ? a.p9.TIER_2 : a.p9.TIER_0
                    }(C));
                return {
                    isLoading: _,
                    suggestedPremiumType: h
                }
            }
        },
        383861: (e, r, n) => {
            "use strict";
            n.d(r, {
                Z: () => N
            });
            var t = n(785893),
                o = n(667294),
                i = n(886664),
                s = n(294184),
                l = n.n(s),
                c = n(513328),
                a = n(304548),
                u = n(19120),
                d = n(347365),
                f = n(414094),
                E = n(782786),
                p = n(83471),
                T = (n(128059), n(149096), n(669426)),
                S = n(832520),
                R = n(264628),
                I = n(2590),
                M = n(473708),
                m = n(103749),
                C = n.n(m),
                P = new Set([p.h8.SKU_SELECT, p.h8.AWAITING_AUTHENTICATION, p.h8.AWAITING_PURCHASE_TOKEN_AUTH, p.h8.CONFIRM]);

            function N(e) {
                var r = e.steps,
                    n = e.currentStep,
                    s = e.body,
                    m = e.paymentError,
                    N = e.header,
                    _ = e.footer,
                    h = e.isGift,
                    L = void 0 !== h && h,
                    O = e.giftMessage,
                    b = void 0 === O ? M.Z.Messages.PREMIUM_PAYMENT_IS_GIFT : O,
                    y = e.isSeasonalGift,
                    A = void 0 !== y && y,
                    v = e.hideBreadcrumbs,
                    j = void 0 !== v && v,
                    U = e.isLoading,
                    B = void 0 !== U && U,
                    G = e.purchaseError,
                    g = e.purchaseErrorBlockRef,
                    Z = e.planError,
                    x = e.onScroll,
                    D = e.scrollerClassName,
                    K = e.hasCurrencies,
                    F = void 0 !== K && K,
                    k = null;
                null != m && null == (0, p.ly)(m) ? k = m : null != G ? k = G : null != Z && (k = Z);
                var w = null != k ? k.message : "";
                if (null != k && k instanceof d.HF) {
                    k.code === f.SM.CARD_DECLINED && F && (w += " ".concat(M.Z.Messages.BILLING_ERROR_TRY_ANOTHER));
                    k.code === f.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (w = M.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT);
                    k.code === I.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (w = M.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID)
                }
                var Y = (0, E.usePaymentContext)().stripe;
                B = B || null == Y;
                var H = o.useRef(new c.V7);
                o.useEffect((function() {
                    var e = H.current;
                    null != Y || e.isStarted() ? null != Y && e.stop() : e.start(1e4, (function() {
                        var e = new Error("Stripe took too long to load");
                        (0, R.q2)(e)
                    }));
                    return function() {
                        e.stop()
                    }
                }), [Y]);
                var W = r.includes(p.h8.PAYMENT_TYPE) ? p.h8.PAYMENT_TYPE : p.h8.ADD_PAYMENT_STEPS;
                return (0, t.jsxs)(i.Elements, {
                    options: I.OBo,
                    stripe: Y,
                    children: [N, (0, t.jsxs)("div", {
                        className: l()("paymentModalContent", C().content),
                        children: [L && !A && n !== p.h8.CONFIRM ? (0, t.jsx)(u.Z, {
                            className: C().paymentNote,
                            iconSize: u.Z.Sizes.SMALL,
                            icon: S.Z,
                            color: null == b ? u.Z.Colors.PRIMARY : u.Z.Colors.SECONDARY,
                            children: b
                        }) : null, j ? null : (0, t.jsx)("div", {
                            className: C().breadcrumbsWrapper,
                            children: (0, t.jsx)(T.Z, {
                                activeId: p.Ck.has(n) ? W : n,
                                breadcrumbs: r.filter((function(e) {
                                    return !p.Ck.has(e) && !P.has(e)
                                })).map((function(e) {
                                    return {
                                        id: e,
                                        label: (0, p.DJ)(e)
                                    }
                                }))
                            })
                        }), (0, t.jsxs)("div", {
                            className: C().bodyWrapper,
                            children: [null == k ? null : (0, t.jsx)("div", {
                                className: C().errorBlockWrapper,
                                children: (0, t.jsx)(a.FormErrorBlock, {
                                    ref: g,
                                    children: w
                                })
                            }), B ? (0, t.jsx)(a.Spinner, {
                                className: C().loadingBlock
                            }) : (0, t.jsx)(a.Sequencer, {
                                className: C().sequencer,
                                staticClassName: C().sequencerStatic,
                                animatedNodeClassName: C().sequencerAnimatedNode,
                                fillParent: !0,
                                step: n,
                                steps: r,
                                sideMargin: 20,
                                children: (0, t.jsx)(a.AdvancedScrollerThin, {
                                    onScroll: x,
                                    className: l()(C().scroller, D),
                                    children: s
                                })
                            })]
                        })]
                    }), _]
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
                default: () => k
            });
            var t = n(785893),
                o = n(667294),
                i = n(294184),
                s = n.n(i),
                l = n(202351),
                c = n(304548),
                a = n(744564),
                u = n(673679),
                d = n(810978),
                f = n(266472),
                E = n(782786),
                p = n(83471),
                T = n(799066),
                S = n(245325),
                R = n(717035),
                I = n(455706),
                M = n(70535),
                m = n(383861),
                C = n(688858),
                P = n(384411),
                N = n(711531),
                _ = n(104681),
                h = n(781453),
                L = n(521798),
                O = n(116094),
                b = n(249052),
                y = n(2590),
                A = n(203600),
                v = n(473708),
                j = n(956855),
                U = n.n(j);

            function B(e, r, n) {
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
                        B(e, r, n[r])
                    }))
                }
                return e
            }

            function g(e, r) {
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
                    children: [(0, t.jsx)(C.Z, {
                        icon: L.Z,
                        iconClassName: U().iconColorPurple,
                        description: v.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
                    }), (0, t.jsx)(C.Z, {
                        icon: _.Z,
                        iconClassName: U().iconColorPink,
                        description: v.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_GUILD_SUBSCRIPTION.format({
                            numGuildSubscriptions: A.cb,
                            discountPercent: (0, b.T3)(r, A.Rr / 100)
                        })
                    }), (0, t.jsx)(C.Z, {
                        icon: h.Z,
                        iconClassName: U().iconColorYellow,
                        description: v.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_PREMIUM_SUBSCRIPTION
                    })]
                })
            };

            function D() {
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(C.Z, {
                        icon: L.Z,
                        iconClassName: U().iconColorPurple,
                        description: v.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
                    }), (0, t.jsx)(C.Z, {
                        icon: h.Z,
                        iconClassName: U().iconColorYellow,
                        description: v.Z.Messages.STICKER_PREMIUM_TIER_0_UPSELL_PERK_PREMIUM_SUBSCRIPTION
                    })]
                })
            }
            var K = function(e) {
                    var r = e.shouldRenderPremiumTrialUpsell,
                        o = e.isTier0Upsell,
                        i = e.isLoading,
                        a = e.price,
                        u = e.onClose,
                        d = (0, l.e7)([P.default], (function() {
                            return P.default.locale
                        }));
                    return (0, t.jsxs)("div", {
                        className: U().wrapper,
                        children: [(0, t.jsx)(c.ModalCloseButton, {
                            onClick: u,
                            className: U().closeButton
                        }), r && (0, t.jsx)(M.dz, {
                            className: U().premiumTrialBadge
                        }), (0, t.jsx)("img", {
                            className: s()(U().heroImage, B({}, U().heroImageWithTrialOffer, r)),
                            src: n(230098),
                            alt: ""
                        }), i ? (0, t.jsx)(c.Spinner, {}) : (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(c.Text, {
                                variant: "text-md/normal",
                                className: U().heading,
                                children: null == a ? (0, t.jsx)(c.Spinner, {
                                    type: c.Spinner.Type.PULSING_ELLIPSIS
                                }) : o ? v.Z.Messages.STICKER_PREMIUM_SUBSCRIPTION_UPSELL_ALERT_TITLE.format({
                                    planName: (0, O.aq)(A.Xh.PREMIUM_MONTH_TIER_0),
                                    monthlyPrice: (0, b.T4)(a.amount, a.currency)
                                }) : v.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_ALERT_TITLE.format({
                                    monthlyPrice: (0, b.T4)(a.amount, a.currency)
                                })
                            }), (0, t.jsx)("div", {
                                className: U().perks,
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
                            section: y.jXE.STICKER_PREMIUM_TIER_2_UPSELL_MODAL
                        };
                    return (0, t.jsxs)(c.ModalFooter, {
                        className: U().footer,
                        children: [(0, t.jsx)(c.Button, {
                            onClick: o,
                            size: c.Button.Sizes.SMALL,
                            color: c.Button.Colors.PRIMARY,
                            look: c.Button.Looks.LINK,
                            children: v.Z.Messages.CLOSE
                        }), (0, t.jsx)(I.Z, {
                            buttonText: r ? n ? v.Z.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : v.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0,
                            premiumModalAnalyticsLocation: i,
                            subscriptionTier: n ? A.Si.TIER_0 : A.Si.TIER_2,
                            size: c.Button.Sizes.SMALL,
                            color: c.Button.Colors.GREEN,
                            onClick: function() {
                                o()
                            }
                        })]
                    })
                };

            function k(e) {
                var r = e.onClose,
                    n = Z(e, ["onClose"]),
                    i = (0, f.V)(),
                    s = (0, l.e7)([N.Z], (function() {
                        return N.Z.hasFetchedPaymentSources
                    })),
                    I = i && s,
                    M = (0, R.N)(),
                    C = (0, S.Z)({
                        autoTrackExposure: I,
                        experiment: T.Z,
                        location: "stickers_upsell"
                    }),
                    P = C.isLoading,
                    _ = C.suggestedPremiumType;
                o.useEffect((function() {
                    a.Z.wait((function() {
                        (0, u.tZ)();
                        (0, d.Y2)(null, null, y.JjL.DISCOVERY)
                    }))
                }), []);
                var h = null != M,
                    L = _ === A.p9.TIER_0,
                    b = I ? O.ZP.getDefaultPrice(L ? A.Xh.PREMIUM_MONTH_TIER_0 : A.Xh.PREMIUM_MONTH_TIER_2) : null,
                    v = !I || P;
                return (0, t.jsx)(E.PaymentContextProvider, {
                    activeSubscription: null,
                    stepConfigs: [],
                    skuIDs: [],
                    children: (0, t.jsx)(c.ModalRoot, g(G({}, n), {
                        "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
                        children: (0, t.jsx)(m.Z, {
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
                s = n.n(i),
                l = n(304548),
                c = n(107364),
                a = n(718831),
                u = n(70821),
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

            function T(e, r) {
                return !r || "object" !== R(r) && "function" != typeof r ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : r
            }

            function S(e, r) {
                S = Object.setPrototypeOf || function(e, r) {
                    e.__proto__ = r;
                    return e
                };
                return S(e, r)
            }
            var R = function(e) {
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
                    r && S(e, r)
                }(n, e);
                var r = I(n);

                function n() {
                    f(this, n);
                    var e;
                    (e = r.apply(this, arguments)).renderBreadcrumb = function(r, n) {
                        var o, i = e.props,
                            c = i.activeId,
                            u = i.onBreadcrumbClick,
                            f = i.breadcrumbs,
                            p = i.renderCustomBreadcrumb,
                            T = i.separatorClassName,
                            S = r.id === c,
                            R = n === f.length - 1,
                            I = null != p ? p(r, S) : (0, t.jsx)("span", {
                                className: s()(d().breadcrumb, (o = {}, E(o, d().activeBreadcrumb, S), E(o, d().interactiveBreadcrumb, null != u), o)),
                                children: r.label
                            });
                        return (0, t.jsxs)("div", {
                            className: s()(d().breadcrumbWrapper, E({}, d().breadcrumbFinalWrapper, R)),
                            children: [null != u ? (0, t.jsx)(l.Clickable, {
                                tag: "span",
                                onClick: function() {
                                    return e.handleClick(r)
                                },
                                className: d().breadcrumbClickWrapper,
                                children: I
                            }) : I, R ? null : (0, t.jsx)(a.Z, {
                                className: s()(d().breadcrumbArrow, T),
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
                        className: s()(d().breadcrumbs, n),
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