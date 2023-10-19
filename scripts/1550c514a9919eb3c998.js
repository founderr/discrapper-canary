(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [11600], {
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
                s = n(294184),
                i = n.n(s),
                c = n(107364),
                l = n(543151),
                a = n.n(l);

            function u(e, r) {
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

            function d(e, r) {
                return !r || "object" !== R(r) && "function" != typeof r ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : r
            }

            function m(e, r) {
                m = Object.setPrototypeOf || function(e, r) {
                    e.__proto__ = r;
                    return e
                };
                return m(e, r)
            }
            var E, _, b, R = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function h(e) {
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
                    return d(this, n)
                }
            }! function(e) {
                e.PRIMARY = "primary";
                e.SECONDARY = "secondary";
                e.WARNING = "warning";
                e.ERROR = "error"
            }(E || (E = {}));
            ! function(e) {
                e.SMALL = "small";
                e.LARGE = "large";
                e.NONE = "none"
            }(_ || (_ = {}));
            var P, T = (f(b = {}, E.PRIMARY, a().colorPrimary), f(b, E.SECONDARY, a().colorSecondary), f(b, E.WARNING, a().colorWarning), f(b, E.ERROR, a().colorError), b),
                y = (f(P = {}, _.SMALL, a().small), f(P, _.LARGE, a().large), f(P, _.NONE, null), P),
                I = function(e) {
                    ! function(e, r) {
                        if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(r && r.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        r && m(e, r)
                    }(n, e);
                    var r = h(n);

                    function n() {
                        u(this, n);
                        return r.apply(this, arguments)
                    }
                    n.prototype.render = function() {
                        var e = this.props,
                            r = e.icon,
                            n = e.color,
                            o = e.children,
                            s = e.iconSize,
                            l = e.className,
                            u = e.iconClassName;
                        return (0, t.jsxs)(c.Z, {
                            className: i()(a().note, T[n], l),
                            align: c.Z.Align.CENTER,
                            children: [(0, t.jsx)(r, {
                                className: i()(a().icon, y[s], u)
                            }), (0, t.jsx)("div", {
                                children: o
                            })]
                        })
                    };
                    return n
                }(o.PureComponent);
            I.Colors = E;
            I.Sizes = _;
            const N = I
        },
        128059: (e, r, n) => {
            "use strict";
            n.d(r, {
                Z: () => p
            });
            var t = n(785893),
                o = (n(667294), n(294184)),
                s = n.n(o),
                i = n(669426),
                c = n(644144),
                l = n(782786),
                a = n(83471),
                u = n(441877),
                f = n.n(u);

            function p(e) {
                var r = e.className,
                    n = e.isEligibleForTrial,
                    o = void 0 !== n && n,
                    u = (0, l.usePaymentContext)(),
                    p = u.step,
                    d = u.breadcrumbs,
                    m = u.startedPaymentFlowWithPaymentSourcesRef,
                    E = u.giftRecipient;
                if (null == d || 0 === d.length || (0, c.a8)(E)) return null;
                var _ = d.flatMap((function(e) {
                    var r = e.useBreadcrumbLabel();
                    return null != r ? {
                        id: e.id,
                        label: r
                    } : []
                }));
                if (0 === _.length) return null;
                _ = _.filter((function(e) {
                    var r = e.id !== a.h8.ADD_PAYMENT_STEPS,
                        n = e.id === a.h8.ADD_PAYMENT_STEPS && !m.current;
                    return !o || o && (r || n)
                }));
                return (0, t.jsx)("div", {
                    className: s()("breadcrumb", f().wrapper, r),
                    children: (0, t.jsx)(i.Z, {
                        activeId: p,
                        breadcrumbs: _
                    })
                })
            }
        },
        383861: (e, r, n) => {
            "use strict";
            n.d(r, {
                Z: () => I
            });
            var t = n(785893),
                o = n(667294),
                s = n(886664),
                i = n(294184),
                c = n.n(i),
                l = n(513328),
                a = n(70418),
                u = n(19120),
                f = n(347365),
                p = n(414094),
                d = n(782786),
                m = n(83471),
                E = (n(128059), n(149096), n(669426)),
                _ = n(832520),
                b = n(264628),
                R = n(2590),
                h = n(473708),
                P = n(103749),
                T = n.n(P),
                y = new Set([m.h8.SKU_SELECT, m.h8.AWAITING_AUTHENTICATION, m.h8.AWAITING_PURCHASE_TOKEN_AUTH, m.h8.CONFIRM]);

            function I(e) {
                var r = e.steps,
                    n = e.currentStep,
                    i = e.body,
                    P = e.paymentError,
                    I = e.header,
                    N = e.footer,
                    S = e.isGift,
                    v = void 0 !== S && S,
                    C = e.giftMessage,
                    O = void 0 === C ? h.Z.Messages.PREMIUM_PAYMENT_IS_GIFT : C,
                    j = e.isSeasonalGift,
                    M = void 0 !== j && j,
                    g = e.hideBreadcrumbs,
                    x = void 0 !== g && g,
                    L = e.isLoading,
                    A = void 0 !== L && L,
                    U = e.purchaseError,
                    Z = e.purchaseErrorBlockRef,
                    w = e.planError,
                    k = e.onScroll,
                    B = e.scrollerClassName,
                    D = e.hasCurrencies,
                    Y = void 0 !== D && D,
                    G = null;
                null != P && null == (0, m.ly)(P) ? G = P : null != U ? G = U : null != w && (G = w);
                var F = null != G ? G.message : "";
                if (null != G && G instanceof f.HF) {
                    G.code === p.SM.CARD_DECLINED && Y && (F += " ".concat(h.Z.Messages.BILLING_ERROR_TRY_ANOTHER));
                    G.code === p.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (F = h.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT);
                    G.code === R.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (F = h.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID)
                }
                var K = (0, d.usePaymentContext)().stripe;
                A = A || null == K;
                var W = o.useRef(new l.V7);
                o.useEffect((function() {
                    var e = W.current;
                    null != K || e.isStarted() ? null != K && e.stop() : e.start(1e4, (function() {
                        var e = new Error("Stripe took too long to load");
                        (0, b.q2)(e)
                    }));
                    return function() {
                        e.stop()
                    }
                }), [K]);
                var H = r.includes(m.h8.PAYMENT_TYPE) ? m.h8.PAYMENT_TYPE : m.h8.ADD_PAYMENT_STEPS;
                return (0, t.jsxs)(s.Elements, {
                    options: R.OBo,
                    stripe: K,
                    children: [I, (0, t.jsxs)("div", {
                        className: c()("paymentModalContent", T().content),
                        children: [v && !M && n !== m.h8.CONFIRM ? (0, t.jsx)(u.Z, {
                            className: T().paymentNote,
                            iconSize: u.Z.Sizes.SMALL,
                            icon: _.Z,
                            color: null == O ? u.Z.Colors.PRIMARY : u.Z.Colors.SECONDARY,
                            children: O
                        }) : null, x ? null : (0, t.jsx)("div", {
                            className: T().breadcrumbsWrapper,
                            children: (0, t.jsx)(E.Z, {
                                activeId: m.Ck.has(n) ? H : n,
                                breadcrumbs: r.filter((function(e) {
                                    return !m.Ck.has(e) && !y.has(e)
                                })).map((function(e) {
                                    return {
                                        id: e,
                                        label: (0, m.DJ)(e)
                                    }
                                }))
                            })
                        }), (0, t.jsxs)("div", {
                            className: T().bodyWrapper,
                            children: [null == G ? null : (0, t.jsx)("div", {
                                className: T().errorBlockWrapper,
                                children: (0, t.jsx)(a.FormErrorBlock, {
                                    ref: Z,
                                    children: F
                                })
                            }), A ? (0, t.jsx)(a.Spinner, {
                                className: T().loadingBlock
                            }) : (0, t.jsx)(a.Sequencer, {
                                className: T().sequencer,
                                staticClassName: T().sequencerStatic,
                                animatedNodeClassName: T().sequencerAnimatedNode,
                                fillParent: !0,
                                step: n,
                                steps: r,
                                sideMargin: 20,
                                children: (0, t.jsx)(a.AdvancedScrollerThin, {
                                    onScroll: k,
                                    className: c()(T().scroller, B),
                                    children: i
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
                Z: () => l
            });
            var t = n(785893),
                o = (n(667294), n(294184)),
                s = n.n(o),
                i = n(739477),
                c = n.n(i);

            function l(e) {
                var r = e.icon,
                    n = e.iconClassName,
                    o = e.description,
                    i = e.color;
                return (0, t.jsxs)("div", {
                    className: c().perkRow,
                    children: [(0, t.jsx)("div", {
                        className: c().perkIconContainer,
                        children: (0, t.jsx)(r, {
                            color: i,
                            className: s()(c().perkIcon, n)
                        })
                    }), (0, t.jsx)("div", {
                        className: c().perkDescription,
                        children: o
                    })]
                })
            }
        },
        811600: (e, r, n) => {
            "use strict";
            n.r(r);
            n.d(r, {
                default: () => G
            });
            var t = n(785893),
                o = n(667294),
                s = n(294184),
                i = n.n(s),
                c = n(202351),
                l = n(70418),
                a = n(744564),
                u = n(673679),
                f = n(810978),
                p = n(266472),
                d = n(782786),
                m = n(83471),
                E = n(799066),
                _ = n(245325),
                b = n(717035),
                R = n(455706),
                h = n(70535),
                P = n(383861),
                T = n(688858),
                y = n(384411),
                I = n(711531),
                N = n(104681),
                S = n(781453),
                v = n(521798),
                C = n(116094),
                O = n(575641),
                j = n(2590),
                M = n(203600),
                g = n(473708),
                x = n(956855),
                L = n.n(x);

            function A(e, r, n) {
                r in e ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = n;
                return e
            }

            function U(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = null != arguments[r] ? arguments[r] : {},
                        t = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    t.forEach((function(r) {
                        A(e, r, n[r])
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

            function w(e, r) {
                if (null == e) return {};
                var n, t, o = function(e, r) {
                    if (null == e) return {};
                    var n, t, o = {},
                        s = Object.keys(e);
                    for (t = 0; t < s.length; t++) {
                        n = s[t];
                        r.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (t = 0; t < s.length; t++) {
                        n = s[t];
                        r.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var k = function(e) {
                var r = e.locale;
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(T.Z, {
                        icon: v.Z,
                        iconClassName: L().iconColorPurple,
                        description: g.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
                    }), (0, t.jsx)(T.Z, {
                        icon: N.Z,
                        iconClassName: L().iconColorPink,
                        description: g.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_GUILD_SUBSCRIPTION.format({
                            numGuildSubscriptions: M.cb,
                            discountPercent: (0, O.T3)(r, M.Rr / 100)
                        })
                    }), (0, t.jsx)(T.Z, {
                        icon: S.Z,
                        iconClassName: L().iconColorYellow,
                        description: g.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_PREMIUM_SUBSCRIPTION
                    })]
                })
            };

            function B() {
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(T.Z, {
                        icon: v.Z,
                        iconClassName: L().iconColorPurple,
                        description: g.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
                    }), (0, t.jsx)(T.Z, {
                        icon: S.Z,
                        iconClassName: L().iconColorYellow,
                        description: g.Z.Messages.STICKER_PREMIUM_TIER_0_UPSELL_PERK_PREMIUM_SUBSCRIPTION
                    })]
                })
            }
            var D = function(e) {
                    var r = e.shouldRenderPremiumTrialUpsell,
                        o = e.isTier0Upsell,
                        s = e.isLoading,
                        a = e.price,
                        u = e.onClose,
                        f = (0, c.e7)([y.default], (function() {
                            return y.default.locale
                        }));
                    return (0, t.jsxs)("div", {
                        className: L().wrapper,
                        children: [(0, t.jsx)(l.ModalCloseButton, {
                            onClick: u,
                            className: L().closeButton
                        }), r && (0, t.jsx)(h.dz, {
                            className: L().premiumTrialBadge
                        }), (0, t.jsx)("img", {
                            className: i()(L().heroImage, A({}, L().heroImageWithTrialOffer, r)),
                            src: n(230098),
                            alt: ""
                        }), s ? (0, t.jsx)(l.Spinner, {}) : (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(l.Text, {
                                variant: "text-md/normal",
                                className: L().heading,
                                children: null == a ? (0, t.jsx)(l.Spinner, {
                                    type: l.Spinner.Type.PULSING_ELLIPSIS
                                }) : o ? g.Z.Messages.STICKER_PREMIUM_SUBSCRIPTION_UPSELL_ALERT_TITLE.format({
                                    planName: (0, C.aq)(M.Xh.PREMIUM_MONTH_TIER_0),
                                    monthlyPrice: (0, O.T4)(a.amount, a.currency)
                                }) : g.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_ALERT_TITLE.format({
                                    monthlyPrice: (0, O.T4)(a.amount, a.currency)
                                })
                            }), (0, t.jsx)("div", {
                                className: L().perks,
                                children: o ? (0, t.jsx)(B, {}) : (0, t.jsx)(k, {
                                    locale: f
                                })
                            })]
                        })]
                    })
                },
                Y = function(e) {
                    var r = e.shouldRenderPremiumTrialUpsell,
                        n = e.isTier0Upsell,
                        o = e.onClose,
                        s = {
                            section: j.jXE.STICKER_PREMIUM_TIER_2_UPSELL_MODAL
                        };
                    return (0, t.jsxs)(l.ModalFooter, {
                        className: L().footer,
                        children: [(0, t.jsx)(l.Button, {
                            onClick: o,
                            size: l.Button.Sizes.SMALL,
                            color: l.Button.Colors.PRIMARY,
                            look: l.Button.Looks.LINK,
                            children: g.Z.Messages.CLOSE
                        }), (0, t.jsx)(R.Z, {
                            buttonText: r ? n ? g.Z.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : g.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0,
                            premiumModalAnalyticsLocation: s,
                            subscriptionTier: n ? M.Si.TIER_0 : M.Si.TIER_2,
                            size: l.Button.Sizes.SMALL,
                            color: l.Button.Colors.GREEN,
                            onClick: function() {
                                o()
                            }
                        })]
                    })
                };

            function G(e) {
                var r = e.onClose,
                    n = w(e, ["onClose"]),
                    s = (0, p.V)(),
                    i = (0, c.e7)([I.Z], (function() {
                        return I.Z.hasFetchedPaymentSources
                    })),
                    R = s && i,
                    h = (0, b.N)(),
                    T = (0, _.Z)({
                        autoTrackExposure: R,
                        experiment: E.Z,
                        location: "stickers_upsell"
                    }),
                    y = T.isLoading,
                    N = T.suggestedPremiumType;
                o.useEffect((function() {
                    a.Z.wait((function() {
                        (0, u.tZ)();
                        (0, f.Y2)(null, null, j.JjL.DISCOVERY)
                    }))
                }), []);
                var S = null != h,
                    v = N === M.p9.TIER_0,
                    O = R ? C.ZP.getDefaultPrice(v ? M.Xh.PREMIUM_MONTH_TIER_0 : M.Xh.PREMIUM_MONTH_TIER_2) : null,
                    g = !R || y;
                return (0, t.jsx)(d.PaymentContextProvider, {
                    activeSubscription: null,
                    stepConfigs: [],
                    skuIDs: [],
                    children: (0, t.jsx)(l.ModalRoot, Z(U({}, n), {
                        "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
                        children: (0,
                            t.jsx)(P.Z, {
                            hideBreadcrumbs: !0,
                            body: (0, t.jsx)(D, {
                                shouldRenderPremiumTrialUpsell: S,
                                isTier0Upsell: v,
                                isLoading: g,
                                price: O,
                                onClose: r
                            }),
                            footer: (0, t.jsx)(Y, {
                                shouldRenderPremiumTrialUpsell: S,
                                isTier0Upsell: v,
                                onClose: r
                            }),
                            steps: [m.h8.PREMIUM_UPSELL],
                            currentStep: m.h8.PREMIUM_UPSELL
                        })
                    }))
                })
            }
        },
        669426: (e, r, n) => {
            "use strict";
            n.d(r, {
                Z: () => h
            });
            var t = n(785893),
                o = n(667294),
                s = n(294184),
                i = n.n(s),
                c = n(70418),
                l = n(107364),
                a = n(718831),
                u = n(70821),
                f = n.n(u);

            function p(e, r) {
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

            function m(e) {
                m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return m(e)
            }

            function E(e, r) {
                return !r || "object" !== b(r) && "function" != typeof r ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : r
            }

            function _(e, r) {
                _ = Object.setPrototypeOf || function(e, r) {
                    e.__proto__ = r;
                    return e
                };
                return _(e, r)
            }
            var b = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function R(e) {
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
                    var n, t = m(e);
                    if (r) {
                        var o = m(this).constructor;
                        n = Reflect.construct(t, arguments, o)
                    } else n = t.apply(this, arguments);
                    return E(this, n)
                }
            }
            const h = function(e) {
                ! function(e, r) {
                    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(r && r.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    r && _(e, r)
                }(n, e);
                var r = R(n);

                function n() {
                    p(this, n);
                    var e;
                    (e = r.apply(this, arguments)).renderBreadcrumb = function(r, n) {
                        var o, s = e.props,
                            l = s.activeId,
                            u = s.onBreadcrumbClick,
                            p = s.breadcrumbs,
                            m = s.renderCustomBreadcrumb,
                            E = s.separatorClassName,
                            _ = r.id === l,
                            b = n === p.length - 1,
                            R = null != m ? m(r, _) : (0, t.jsx)("span", {
                                className: i()(f().breadcrumb, (o = {}, d(o, f().activeBreadcrumb, _), d(o, f().interactiveBreadcrumb, null != u), o)),
                                children: r.label
                            });
                        return (0, t.jsxs)("div", {
                            className: i()(f().breadcrumbWrapper, d({}, f().breadcrumbFinalWrapper, b)),
                            children: [null != u ? (0, t.jsx)(c.Clickable, {
                                tag: "span",
                                onClick: function() {
                                    return e.handleClick(r)
                                },
                                className: f().breadcrumbClickWrapper,
                                children: R
                            }) : R, b ? null : (0, t.jsx)(a.Z, {
                                className: i()(f().breadcrumbArrow, E),
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
                    return (0, t.jsx)(l.Z, {
                        justify: l.Z.Justify.START,
                        className: i()(f().breadcrumbs, n),
                        children: o
                    })
                };
                return n
            }(o.PureComponent)
        }
    }
]);