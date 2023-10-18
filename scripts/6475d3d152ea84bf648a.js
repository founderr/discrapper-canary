(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [74714], {
        500996: (e, r, n) => {
            e.exports = n.p + "d1dab93347ab65e2b31d9dc39c9c5a9a.svg"
        },
        19120: (e, r, n) => {
            "use strict";
            n.d(r, {
                Z: () => P
            });
            var t = n(785893),
                o = n(667294),
                c = n(294184),
                s = n.n(c),
                i = n(107364),
                a = n(543151),
                l = n.n(a);

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

            function p(e) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function f(e, r) {
                return !r || "object" !== v(r) && "function" != typeof r ? function(e) {
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
            var m, h, y, v = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function E(e) {
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
                    return f(this, n)
                }
            }! function(e) {
                e.PRIMARY = "primary";
                e.SECONDARY = "secondary";
                e.WARNING = "warning";
                e.ERROR = "error"
            }(m || (m = {}));
            ! function(e) {
                e.SMALL = "small";
                e.LARGE = "large";
                e.NONE = "none"
            }(h || (h = {}));
            var N, j = (d(y = {}, m.PRIMARY, l().colorPrimary), d(y, m.SECONDARY, l().colorSecondary), d(y, m.WARNING, l().colorWarning), d(y, m.ERROR, l().colorError), y),
                O = (d(N = {}, h.SMALL, l().small), d(N, h.LARGE, l().large), d(N, h.NONE, null), N),
                _ = function(e) {
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
                    var r = E(n);

                    function n() {
                        u(this, n);
                        return r.apply(this, arguments)
                    }
                    n.prototype.render = function() {
                        var e = this.props,
                            r = e.icon,
                            n = e.color,
                            o = e.children,
                            c = e.iconSize,
                            a = e.className,
                            u = e.iconClassName;
                        return (0, t.jsxs)(i.Z, {
                            className: s()(l().note, j[n], a),
                            align: i.Z.Align.CENTER,
                            children: [(0, t.jsx)(r, {
                                className: s()(l().icon, O[c], u)
                            }), (0, t.jsx)("div", {
                                children: o
                            })]
                        })
                    };
                    return n
                }(o.PureComponent);
            _.Colors = m;
            _.Sizes = h;
            const P = _
        },
        374714: (e, r, n) => {
            "use strict";
            n.r(r);
            n.d(r, {
                default: () => I
            });
            var t = n(785893),
                o = n(667294),
                c = n(70418),
                s = n(153686),
                i = n(19585),
                a = n(782786),
                l = n(83471),
                u = n(383861),
                d = n(688858),
                p = n(930865),
                f = n(594302),
                b = n(2590),
                m = n(473708),
                h = n(818910),
                y = n.n(h),
                v = n(380203),
                E = n.n(v);

            function N(e, r, n) {
                r in e ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = n;
                return e
            }

            function j(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = null != arguments[r] ? arguments[r] : {},
                        t = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    t.forEach((function(r) {
                        N(e, r, n[r])
                    }))
                }
                return e
            }

            function O(e, r) {
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

            function _(e, r) {
                if (null == e) return {};
                var n, t, o = function(e, r) {
                    if (null == e) return {};
                    var n, t, o = {},
                        c = Object.keys(e);
                    for (t = 0; t < c.length; t++) {
                        n = c[t];
                        r.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (t = 0; t < c.length; t++) {
                        n = c[t];
                        r.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var P = "premium-guild-subscription-upsell-modal-header";

            function g(e) {
                var r = e.title,
                    n = e.subtitle,
                    o = e.image;
                return (0, t.jsxs)("div", {
                    className: y().header,
                    children: [(0, t.jsx)(c.Heading, {
                        variant: "heading-xl/semibold",
                        id: P,
                        color: "header-primary",
                        className: E().marginBottom8,
                        children: r
                    }), (0, t.jsx)(c.Text, {
                        variant: "text-md/normal",
                        className: y().subtitleText,
                        children: n
                    }), o]
                })
            }
            var R = function(e) {
                    var r = e.onClose,
                        n = e.perks,
                        o = e.perkIntro,
                        s = void 0 === o ? m.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER : o,
                        i = e.headerProps;
                    return (0, t.jsxs)("div", {
                        className: y().wrapper,
                        children: [(0, t.jsx)(c.ModalCloseButton, {
                            className: y().closeButton,
                            onClick: function() {
                                r()
                            }
                        }), (0, t.jsx)(S, {
                            headerProps: i,
                            perkIntro: s
                        }), (0, t.jsx)("div", {
                            className: y().perks,
                            children: n.map((function(e, r) {
                                var n = e.icon,
                                    o = e.iconClassName,
                                    c = e.description,
                                    s = e.color;
                                return (0, t.jsx)(d.Z, {
                                    icon: n,
                                    iconClassName: o,
                                    description: c,
                                    color: s
                                }, r)
                            }))
                        })]
                    })
                },
                S = function(e) {
                    var r = e.headerProps,
                        s = e.perkIntro;
                    return (0, t.jsxs)(o.Fragment, {
                        children: [null != r ? (0, t.jsx)(g, j({}, r)) : (0, t.jsx)("img", {
                            className: y().heroImage,
                            src: n(500996),
                            alt: m.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER_IMG_ALT_TEXT
                        }), (0, t.jsx)(c.Text, {
                            variant: "text-md/normal",
                            className: y().heading,
                            children: s
                        })]
                    })
                },
                C = function(e) {
                    var r = e.guild,
                        n = e.targetBoostedGuildTier,
                        o = e.onClose,
                        s = e.analyticsSourceLocation,
                        i = {
                            section: b.jXE.PREMIUM_GUILD_UPSELL_MODAL,
                            object: b.qAy.BUTTON_CTA,
                            objectType: null != n ? (0, p.ge)(n) : null
                        };
                    return (0, t.jsxs)(c.ModalFooter, {
                        className: y().footer,
                        children: [(0, t.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            color: c.Button.Colors.PRIMARY,
                            look: c.Button.Looks.LINK,
                            onClick: function() {
                                o()
                            },
                            children: m.Z.Messages.CLOSE
                        }), (0, t.jsx)(f.Z, {
                            analyticsLocation: i,
                            analyticsSourceLocation: s,
                            guild: r,
                            targetBoostedGuildTier: n,
                            onClose: function() {
                                o()
                            }
                        })]
                    })
                };

            function I(e) {
                var r = e.analyticsSourceLocation,
                    n = e.guild,
                    o = e.targetBoostedGuildTier,
                    d = e.perks,
                    p = e.perkIntro,
                    f = e.headerProps,
                    b = e.onClose,
                    m = _(e, ["analyticsSourceLocation", "guild", "targetBoostedGuildTier", "perks", "perkIntro", "headerProps", "onClose"]),
                    h = (0, i.Z)(s.Z.ACTIVITY_DIRECTORY).AnalyticsLocationProvider;
                return (0, t.jsx)(h, {
                    children: (0, t.jsx)(a.PaymentContextProvider, {
                        activeSubscription: null,
                        stepConfigs: [],
                        skuIDs: [],
                        children: (0, t.jsx)(c.ModalRoot, O(j({}, m), {
                            "aria-labelledby": P,
                            children: (0, t.jsx)(u.Z, {
                                hideBreadcrumbs: !0,
                                body: (0, t.jsx)(R, {
                                    onClose: b,
                                    perks: d,
                                    perkIntro: p,
                                    headerProps: f
                                }),
                                footer: (0, t.jsx)(C, {
                                    guild: n,
                                    targetBoostedGuildTier: o,
                                    onClose: b,
                                    analyticsSourceLocation: r
                                }),
                                steps: [l.h8.PREMIUM_GUILD_UPSELL],
                                currentStep: l.h8.PREMIUM_GUILD_UPSELL
                            })
                        }))
                    })
                })
            }
        },
        128059: (e, r, n) => {
            "use strict";
            n.d(r, {
                Z: () => p
            });
            var t = n(785893),
                o = (n(667294), n(294184)),
                c = n.n(o),
                s = n(669426),
                i = n(644144),
                a = n(782786),
                l = n(83471),
                u = n(441877),
                d = n.n(u);

            function p(e) {
                var r = e.className,
                    n = e.isEligibleForTrial,
                    o = void 0 !== n && n,
                    u = (0, a.usePaymentContext)(),
                    p = u.step,
                    f = u.breadcrumbs,
                    b = u.startedPaymentFlowWithPaymentSourcesRef,
                    m = u.giftRecipient;
                if (null == f || 0 === f.length || (0, i.a8)(m)) return null;
                var h = f.flatMap((function(e) {
                    var r = e.useBreadcrumbLabel();
                    return null != r ? {
                        id: e.id,
                        label: r
                    } : []
                }));
                if (0 === h.length) return null;
                h = h.filter((function(e) {
                    var r = e.id !== l.h8.ADD_PAYMENT_STEPS,
                        n = e.id === l.h8.ADD_PAYMENT_STEPS && !b.current;
                    return !o || o && (r || n)
                }));
                return (0, t.jsx)("div", {
                    className: c()("breadcrumb", d().wrapper, r),
                    children: (0, t.jsx)(s.Z, {
                        activeId: p,
                        breadcrumbs: h
                    })
                })
            }
        },
        383861: (e, r, n) => {
            "use strict";
            n.d(r, {
                Z: () => _
            });
            var t = n(785893),
                o = n(667294),
                c = n(886664),
                s = n(294184),
                i = n.n(s),
                a = n(513328),
                l = n(70418),
                u = n(19120),
                d = n(347365),
                p = n(414094),
                f = n(782786),
                b = n(83471),
                m = (n(128059), n(149096), n(669426)),
                h = n(832520),
                y = n(264628),
                v = n(2590),
                E = n(473708),
                N = n(103749),
                j = n.n(N),
                O = new Set([b.h8.SKU_SELECT, b.h8.AWAITING_AUTHENTICATION, b.h8.AWAITING_PURCHASE_TOKEN_AUTH, b.h8.CONFIRM]);

            function _(e) {
                var r = e.steps,
                    n = e.currentStep,
                    s = e.body,
                    N = e.paymentError,
                    _ = e.header,
                    P = e.footer,
                    g = e.isGift,
                    R = void 0 !== g && g,
                    S = e.giftMessage,
                    C = void 0 === S ? E.Z.Messages.PREMIUM_PAYMENT_IS_GIFT : S,
                    I = e.isSeasonalGift,
                    T = void 0 !== I && I,
                    x = e.hideBreadcrumbs,
                    A = void 0 !== x && x,
                    M = e.isLoading,
                    L = void 0 !== M && M,
                    k = e.purchaseError,
                    D = e.purchaseErrorBlockRef,
                    w = e.planError,
                    B = e.onScroll,
                    Z = e.scrollerClassName,
                    U = e.hasCurrencies,
                    G = void 0 !== U && U,
                    Y = null;
                null != N && null == (0, b.ly)(N) ? Y = N : null != k ? Y = k : null != w && (Y = w);
                var F = null != Y ? Y.message : "";
                if (null != Y && Y instanceof d.HF) {
                    Y.code === p.SM.CARD_DECLINED && G && (F += " ".concat(E.Z.Messages.BILLING_ERROR_TRY_ANOTHER));
                    Y.code === p.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (F = E.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT);
                    Y.code === v.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (F = E.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID)
                }
                var W = (0, f.usePaymentContext)().stripe;
                L = L || null == W;
                var H = o.useRef(new a.V7);
                o.useEffect((function() {
                    var e = H.current;
                    null != W || e.isStarted() ? null != W && e.stop() : e.start(1e4, (function() {
                        var e = new Error("Stripe took too long to load");
                        (0, y.q2)(e)
                    }));
                    return function() {
                        e.stop()
                    }
                }), [W]);
                var q = r.includes(b.h8.PAYMENT_TYPE) ? b.h8.PAYMENT_TYPE : b.h8.ADD_PAYMENT_STEPS;
                return (0, t.jsxs)(c.Elements, {
                    options: v.OBo,
                    stripe: W,
                    children: [_, (0, t.jsxs)("div", {
                        className: i()("paymentModalContent", j().content),
                        children: [R && !T && n !== b.h8.CONFIRM ? (0, t.jsx)(u.Z, {
                            className: j().paymentNote,
                            iconSize: u.Z.Sizes.SMALL,
                            icon: h.Z,
                            color: null == C ? u.Z.Colors.PRIMARY : u.Z.Colors.SECONDARY,
                            children: C
                        }) : null, A ? null : (0, t.jsx)("div", {
                            className: j().breadcrumbsWrapper,
                            children: (0, t.jsx)(m.Z, {
                                activeId: b.Ck.has(n) ? q : n,
                                breadcrumbs: r.filter((function(e) {
                                    return !b.Ck.has(e) && !O.has(e)
                                })).map((function(e) {
                                    return {
                                        id: e,
                                        label: (0, b.DJ)(e)
                                    }
                                }))
                            })
                        }), (0, t.jsxs)("div", {
                            className: j().bodyWrapper,
                            children: [null == Y ? null : (0, t.jsx)("div", {
                                className: j().errorBlockWrapper,
                                children: (0, t.jsx)(l.FormErrorBlock, {
                                    ref: D,
                                    children: F
                                })
                            }), L ? (0, t.jsx)(l.Spinner, {
                                className: j().loadingBlock
                            }) : (0, t.jsx)(l.Sequencer, {
                                className: j().sequencer,
                                staticClassName: j().sequencerStatic,
                                animatedNodeClassName: j().sequencerAnimatedNode,
                                fillParent: !0,
                                step: n,
                                steps: r,
                                sideMargin: 20,
                                children: (0, t.jsx)(l.AdvancedScrollerThin, {
                                    onScroll: B,
                                    className: i()(j().scroller, Z),
                                    children: s
                                })
                            })]
                        })]
                    }), P]
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
                c = n.n(o),
                s = n(739477),
                i = n.n(s);

            function a(e) {
                var r = e.icon,
                    n = e.iconClassName,
                    o = e.description,
                    s = e.color;
                return (0, t.jsxs)("div", {
                    className: i().perkRow,
                    children: [(0, t.jsx)("div", {
                        className: i().perkIconContainer,
                        children: (0, t.jsx)(r, {
                            color: s,
                            className: c()(i().perkIcon, n)
                        })
                    }), (0, t.jsx)("div", {
                        className: i().perkDescription,
                        children: o
                    })]
                })
            }
        },
        669426: (e, r, n) => {
            "use strict";
            n.d(r, {
                Z: () => E
            });
            var t = n(785893),
                o = n(667294),
                c = n(294184),
                s = n.n(c),
                i = n(70418),
                a = n(107364),
                l = n(718831),
                u = n(70821),
                d = n.n(u);

            function p(e, r) {
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

            function b(e) {
                b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return b(e)
            }

            function m(e, r) {
                return !r || "object" !== y(r) && "function" != typeof r ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : r
            }

            function h(e, r) {
                h = Object.setPrototypeOf || function(e, r) {
                    e.__proto__ = r;
                    return e
                };
                return h(e, r)
            }
            var y = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function v(e) {
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
                    var n, t = b(e);
                    if (r) {
                        var o = b(this).constructor;
                        n = Reflect.construct(t, arguments, o)
                    } else n = t.apply(this, arguments);
                    return m(this, n)
                }
            }
            const E = function(e) {
                ! function(e, r) {
                    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(r && r.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    r && h(e, r)
                }(n, e);
                var r = v(n);

                function n() {
                    p(this, n);
                    var e;
                    (e = r.apply(this, arguments)).renderBreadcrumb = function(r, n) {
                        var o, c = e.props,
                            a = c.activeId,
                            u = c.onBreadcrumbClick,
                            p = c.breadcrumbs,
                            b = c.renderCustomBreadcrumb,
                            m = c.separatorClassName,
                            h = r.id === a,
                            y = n === p.length - 1,
                            v = null != b ? b(r, h) : (0, t.jsx)("span", {
                                className: s()(d().breadcrumb, (o = {}, f(o, d().activeBreadcrumb, h), f(o, d().interactiveBreadcrumb, null != u), o)),
                                children: r.label
                            });
                        return (0, t.jsxs)("div", {
                            className: s()(d().breadcrumbWrapper, f({}, d().breadcrumbFinalWrapper, y)),
                            children: [null != u ? (0, t.jsx)(i.Clickable, {
                                tag: "span",
                                onClick: function() {
                                    return e.handleClick(r)
                                },
                                className: d().breadcrumbClickWrapper,
                                children: v
                            }) : v, y ? null : (0, t.jsx)(l.Z, {
                                className: s()(d().breadcrumbArrow, m),
                                direction: l.Z.Directions.RIGHT
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
                        className: s()(d().breadcrumbs, n),
                        children: o
                    })
                };
                return n
            }(o.PureComponent)
        }
    }
]);