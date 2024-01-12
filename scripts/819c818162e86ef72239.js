(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["3471"], {
        243704: function(e, r, l) {
            "use strict";
            e.exports = l.p + "6418419524dd1e583beb.svg"
        },
        812952: function(e, r, l) {
            "use strict";
            l.r(r), l.d(r, {
                default: function() {
                    return E
                }
            });
            var n, t, s, a, o = l("37983"),
                i = l("884691"),
                c = l("414456"),
                d = l.n(c),
                u = l("145131"),
                p = l("298754");
            (n = s || (s = {})).PRIMARY = "primary", n.SECONDARY = "secondary", n.WARNING = "warning", n.ERROR = "error", (t = a || (a = {})).SMALL = "small", t.LARGE = "large", t.NONE = "none";
            let m = {
                    primary: p.colorPrimary,
                    secondary: p.colorSecondary,
                    warning: p.colorWarning,
                    error: p.colorError
                },
                f = {
                    small: p.small,
                    large: p.large,
                    none: null
                };
            class h extends i.PureComponent {
                render() {
                    let {
                        icon: e,
                        color: r,
                        children: l,
                        iconSize: n,
                        className: t,
                        iconClassName: s
                    } = this.props;
                    return (0, o.jsxs)(u.default, {
                        className: d(p.note, m[r], t),
                        align: u.default.Align.CENTER,
                        children: [(0, o.jsx)(e, {
                            className: d(p.icon, f[n], s)
                        }), (0, o.jsx)("div", {
                            children: l
                        })]
                    })
                }
            }
            h.Colors = s, h.Sizes = a;
            var E = h
        },
        874642: function(e, r, l) {
            "use strict";
            l.r(r), l.d(r, {
                default: function() {
                    return v
                }
            });
            var n = l("37983"),
                t = l("884691"),
                s = l("77078"),
                a = l("812204"),
                o = l("685665"),
                i = l("642906"),
                c = l("85336"),
                d = l("273619"),
                u = l("674158"),
                p = l("427459"),
                m = l("617917"),
                f = l("49111"),
                h = l("782340"),
                E = l("315706"),
                N = l("926622");
            let S = "premium-guild-subscription-upsell-modal-header";

            function x(e) {
                let {
                    title: r,
                    subtitle: l,
                    image: t
                } = e;
                return (0, n.jsxs)("div", {
                    className: E.header,
                    children: [(0, n.jsx)(s.Heading, {
                        variant: "heading-xl/semibold",
                        id: S,
                        color: "header-primary",
                        className: N.marginBottom8,
                        children: r
                    }), (0, n.jsx)(s.Text, {
                        variant: "text-md/normal",
                        className: E.subtitleText,
                        children: l
                    }), t]
                })
            }
            let C = e => {
                    let {
                        onClose: r,
                        perks: l,
                        perkIntro: t = h.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER,
                        headerProps: a
                    } = e;
                    return (0, n.jsxs)("div", {
                        className: E.wrapper,
                        children: [(0, n.jsx)(s.ModalCloseButton, {
                            className: E.closeButton,
                            onClick: () => {
                                r()
                            }
                        }), (0, n.jsx)(T, {
                            headerProps: a,
                            perkIntro: t
                        }), (0, n.jsx)("div", {
                            className: E.perks,
                            children: l.map((e, r) => {
                                let {
                                    icon: l,
                                    iconClassName: t,
                                    description: s,
                                    color: a
                                } = e;
                                return (0, n.jsx)(u.default, {
                                    icon: l,
                                    iconClassName: t,
                                    description: s,
                                    color: a
                                }, r)
                            })
                        })]
                    })
                },
                T = e => {
                    let {
                        headerProps: r,
                        perkIntro: a
                    } = e;
                    return (0, n.jsxs)(t.Fragment, {
                        children: [null != r ? (0, n.jsx)(x, {
                            ...r
                        }) : (0, n.jsx)("img", {
                            className: E.heroImage,
                            src: l("243704"),
                            alt: h.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER_IMG_ALT_TEXT
                        }), (0, n.jsx)(s.Text, {
                            variant: "text-md/normal",
                            className: E.heading,
                            children: a
                        })]
                    })
                },
                _ = e => {
                    let {
                        guild: r,
                        targetBoostedGuildTier: l,
                        onClose: t,
                        analyticsSourceLocation: a
                    } = e, o = {
                        section: f.AnalyticsSections.PREMIUM_GUILD_UPSELL_MODAL,
                        object: f.AnalyticsObjects.BUTTON_CTA,
                        objectType: null != l ? (0, p.boostedGuildTierToAnalyticsObjectType)(l) : null
                    };
                    return (0, n.jsxs)(s.ModalFooter, {
                        className: E.footer,
                        children: [(0, n.jsx)(s.Button, {
                            size: s.Button.Sizes.SMALL,
                            color: s.Button.Colors.PRIMARY,
                            look: s.Button.Looks.LINK,
                            onClick: () => {
                                t()
                            },
                            children: h.default.Messages.CLOSE
                        }), (0, n.jsx)(m.default, {
                            analyticsLocation: o,
                            analyticsSourceLocation: a,
                            guild: r,
                            targetBoostedGuildTier: l,
                            onClose: () => {
                                t()
                            }
                        })]
                    })
                };

            function v(e) {
                let {
                    analyticsSourceLocation: r,
                    guild: l,
                    targetBoostedGuildTier: t,
                    perks: u,
                    perkIntro: p,
                    headerProps: m,
                    onClose: f,
                    ...h
                } = e, {
                    AnalyticsLocationProvider: E
                } = (0, o.default)(a.default.ACTIVITY_DIRECTORY);
                return (0, n.jsx)(E, {
                    children: (0, n.jsx)(i.PaymentContextProvider, {
                        activeSubscription: null,
                        stepConfigs: [],
                        skuIDs: [],
                        children: (0, n.jsx)(s.ModalRoot, {
                            ...h,
                            "aria-labelledby": S,
                            children: (0, n.jsx)(d.default, {
                                hideBreadcrumbs: !0,
                                body: (0, n.jsx)(C, {
                                    onClose: f,
                                    perks: u,
                                    perkIntro: p,
                                    headerProps: m
                                }),
                                footer: (0, n.jsx)(_, {
                                    guild: l,
                                    targetBoostedGuildTier: t,
                                    onClose: f,
                                    analyticsSourceLocation: r
                                }),
                                steps: [c.Step.PREMIUM_GUILD_UPSELL],
                                currentStep: c.Step.PREMIUM_GUILD_UPSELL
                            })
                        })
                    })
                })
            }
        },
        153727: function(e, r, l) {
            "use strict";
            l.r(r), l.d(r, {
                default: function() {
                    return d
                }
            }), l("881410");
            var n = l("37983");
            l("884691");
            var t = l("414456"),
                s = l.n(t),
                a = l("454589"),
                o = l("642906"),
                i = l("85336"),
                c = l("109872");

            function d(e) {
                let {
                    className: r,
                    isEligibleForTrial: l = !1
                } = e, {
                    step: t,
                    breadcrumbs: d,
                    startedPaymentFlowWithPaymentSourcesRef: u
                } = (0, o.usePaymentContext)();
                if (null == d || 0 === d.length) return null;
                let p = d.flatMap(e => {
                    let r = e.useBreadcrumbLabel();
                    return null != r ? {
                        id: e.id,
                        label: r
                    } : []
                });
                return 0 === p.length ? null : (p = p.filter(e => {
                    let r = e.id !== i.Step.ADD_PAYMENT_STEPS,
                        n = e.id === i.Step.ADD_PAYMENT_STEPS && !u.current;
                    return !l || l && (r || n)
                }), (0, n.jsx)("div", {
                    className: s("breadcrumb", c.wrapper, r),
                    children: (0, n.jsx)(a.default, {
                        activeId: t,
                        breadcrumbs: p
                    })
                }))
            }
        },
        650484: function(e, r, l) {
            "use strict";
            l.r(r), l.d(r, {
                default: function() {
                    return f
                },
                PaymentPortalBody: function() {
                    return h
                },
                PaymentPortalFooter: function() {
                    return E
                }
            });
            var n = l("37983"),
                t = l("884691"),
                s = l("414456"),
                a = l.n(s),
                o = l("627445"),
                i = l.n(o),
                c = l("817736"),
                d = l.n(c),
                u = l("77078"),
                p = l("642906"),
                m = l("990893");

            function f(e) {
                var r, l, s, o, c, d;
                let {
                    header: f,
                    isLargeModal: h,
                    stepProps: E
                } = function(e) {
                    let {
                        header: r,
                        isLargeModal: l,
                        ...n
                    } = e;
                    return {
                        header: r,
                        isLargeModal: l,
                        stepProps: n
                    }
                }(e), {
                    step: N,
                    stepConfigs: S,
                    setBodyNode: x,
                    setFooterNode: C,
                    setModalOverlayNode: T,
                    setReadySlideId: _
                } = (0, p.usePaymentContext)(), v = S.find(e => e.key === N);
                t.useEffect(() => {
                    T(null)
                }, [N, T]), i(null != v, "Unknown step for current payment flow.");
                let I = null !== (c = null == v ? void 0 : null === (r = v.options) || void 0 === r ? void 0 : r.hideSlider) && void 0 !== c && c,
                    j = null == v ? void 0 : null === (l = v.options) || void 0 === l ? void 0 : l.bodyClassName,
                    P = void 0 !== h && h ? m.sliderBodyLarge : null == v ? void 0 : null === (s = v.options) || void 0 === s ? void 0 : s.sliderBodyClassName;
                return (0, n.jsxs)(n.Fragment, {
                    children: [null === (d = null == v ? void 0 : null === (o = v.options) || void 0 === o ? void 0 : o.renderHeader) || void 0 === d || d ? f : null, v.renderStep(E), null == N || I ? null : (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(u.ModalContent, {
                            className: a(m.body, j),
                            children: (0, n.jsx)(u.Slides, {
                                activeSlide: N,
                                centered: !1,
                                onSlideReady: e => _(e),
                                children: S.filter(e => null != e.key).map(e => (0, n.jsx)(u.Slide, {
                                    id: e.key,
                                    children: (0, n.jsx)("form", {
                                        className: a(m.sliderBody, P),
                                        ref: e => x(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, n.jsx)("div", {
                            ref: e => C(e)
                        }), (0, n.jsx)("div", {
                            ref: e => T(e)
                        })]
                    })]
                })
            }

            function h(e) {
                let {
                    children: r
                } = e, {
                    bodyNode: l
                } = (0, p.usePaymentContext)();
                return null == l ? null : d.createPortal(r, l)
            }

            function E(e) {
                let {
                    children: r
                } = e, {
                    footerNode: l
                } = (0, p.usePaymentContext)();
                return null == l ? null : d.createPortal(r, l)
            }
        },
        273619: function(e, r, l) {
            "use strict";
            l.r(r), l.d(r, {
                default: function() {
                    return _
                }
            }), l("222007"), l("70102");
            var n = l("37983"),
                t = l("884691"),
                s = l("41092"),
                a = l("414456"),
                o = l.n(a),
                i = l("862337"),
                c = l("77078"),
                d = l("812952"),
                u = l("448993"),
                p = l("736978"),
                m = l("642906"),
                f = l("85336");
            l("153727"), l("650484");
            var h = l("454589"),
                E = l("978679"),
                N = l("745279"),
                S = l("49111"),
                x = l("782340"),
                C = l("129429");
            let T = new Set([f.Step.SKU_SELECT, f.Step.AWAITING_AUTHENTICATION, f.Step.AWAITING_PURCHASE_TOKEN_AUTH, f.Step.CONFIRM]);

            function _(e) {
                let {
                    steps: r,
                    currentStep: l,
                    body: a,
                    paymentError: _,
                    header: v,
                    footer: I,
                    isGift: j = !1,
                    giftMessage: P = x.default.Messages.PREMIUM_PAYMENT_IS_GIFT,
                    hideBreadcrumbs: A = !1,
                    isLoading: R = !1,
                    purchaseError: L,
                    purchaseErrorBlockRef: M,
                    planError: b,
                    onScroll: g,
                    scrollerClassName: D,
                    hasCurrencies: y = !1
                } = e, k = null;
                null != _ && null == (0, f.errorToStep)(_) ? k = _ : null != L ? k = L : null != b && (k = b);
                let B = null != k ? k.message : "";
                null != k && k instanceof u.BillingError && (k.code === p.ErrorCodes.CARD_DECLINED && y && (B += " ".concat(x.default.Messages.BILLING_ERROR_TRY_ANOTHER)), k.code === p.ErrorCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (B = x.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), k.code === S.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (B = x.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
                let {
                    stripe: U
                } = (0, m.usePaymentContext)();
                R = R || null == U;
                let O = t.useRef(new i.Timeout);
                t.useEffect(() => {
                    let e = O.current;
                    return null != U || e.isStarted() ? null != U && e.stop() : e.start(1e4, () => {
                        let e = Error("Stripe took too long to load");
                        (0, N.captureBillingException)(e)
                    }), () => {
                        e.stop()
                    }
                }, [U]);
                let G = r.includes(f.Step.PAYMENT_TYPE) ? f.Step.PAYMENT_TYPE : f.Step.ADD_PAYMENT_STEPS;
                return (0, n.jsxs)(s.Elements, {
                    options: S.StripeElementsOptions,
                    stripe: U,
                    children: [v, (0, n.jsxs)("div", {
                        className: o("paymentModalContent", C.content),
                        children: [j && l !== f.Step.CONFIRM ? (0, n.jsx)(d.default, {
                            className: C.paymentNote,
                            iconSize: d.default.Sizes.SMALL,
                            icon: E.default,
                            color: null == P ? d.default.Colors.PRIMARY : d.default.Colors.SECONDARY,
                            children: P
                        }) : null, A ? null : (0, n.jsx)("div", {
                            className: C.breadcrumbsWrapper,
                            children: (0, n.jsx)(h.default, {
                                activeId: f.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(l) ? G : l,
                                breadcrumbs: r.filter(e => !f.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(e) && !T.has(e)).map(e => ({
                                    id: e,
                                    label: (0, f.getLabelForStep)(e)
                                }))
                            })
                        }), (0, n.jsxs)("div", {
                            className: C.bodyWrapper,
                            children: [null == k ? null : (0, n.jsx)("div", {
                                className: C.errorBlockWrapper,
                                children: (0, n.jsx)(c.FormErrorBlock, {
                                    ref: M,
                                    children: B
                                })
                            }), R ? (0, n.jsx)(c.Spinner, {
                                className: C.loadingBlock
                            }) : (0, n.jsx)(c.Sequencer, {
                                className: C.sequencer,
                                staticClassName: C.sequencerStatic,
                                animatedNodeClassName: C.sequencerAnimatedNode,
                                fillParent: !0,
                                step: l,
                                steps: r,
                                sideMargin: 20,
                                children: (0, n.jsx)(c.AdvancedScrollerThin, {
                                    onScroll: g,
                                    className: o(C.scroller, D),
                                    children: a
                                })
                            })]
                        })]
                    }), I]
                })
            }
        },
        674158: function(e, r, l) {
            "use strict";
            l.r(r), l.d(r, {
                default: function() {
                    return o
                }
            });
            var n = l("37983");
            l("884691");
            var t = l("414456"),
                s = l.n(t),
                a = l("288264");

            function o(e) {
                let {
                    icon: r,
                    iconClassName: l,
                    description: t,
                    color: o
                } = e;
                return (0, n.jsxs)("div", {
                    className: a.perkRow,
                    children: [(0, n.jsx)("div", {
                        className: a.perkIconContainer,
                        children: (0, n.jsx)(r, {
                            color: o,
                            className: s(a.perkIcon, l)
                        })
                    }), (0, n.jsx)("div", {
                        className: a.perkDescription,
                        children: t
                    })]
                })
            }
        },
        454589: function(e, r, l) {
            "use strict";
            l.r(r), l.d(r, {
                default: function() {
                    return p
                }
            }), l("222007");
            var n = l("37983"),
                t = l("884691"),
                s = l("414456"),
                a = l.n(s),
                o = l("77078"),
                i = l("145131"),
                c = l("461380"),
                d = l("298619");
            class u extends t.PureComponent {
                handleClick(e) {
                    let {
                        onBreadcrumbClick: r
                    } = this.props;
                    null != r && r(e)
                }
                render() {
                    let {
                        breadcrumbs: e,
                        className: r
                    } = this.props, l = e.map(this.renderBreadcrumb);
                    return (0, n.jsx)(i.default, {
                        justify: i.default.Justify.START,
                        className: a(d.breadcrumbs, r),
                        children: l
                    })
                }
                constructor(...e) {
                    super(...e), this.renderBreadcrumb = (e, r) => {
                        let {
                            activeId: l,
                            onBreadcrumbClick: t,
                            breadcrumbs: s,
                            renderCustomBreadcrumb: i,
                            separatorClassName: u
                        } = this.props, p = e.id === l, m = r === s.length - 1, f = null != i ? i(e, p) : (0, n.jsx)("span", {
                            className: a(d.breadcrumb, {
                                [d.activeBreadcrumb]: p,
                                [d.interactiveBreadcrumb]: null != t
                            }),
                            children: e.label
                        });
                        return (0, n.jsxs)("div", {
                            className: a(d.breadcrumbWrapper, {
                                [d.breadcrumbFinalWrapper]: m
                            }),
                            children: [null != t ? (0, n.jsx)(o.Clickable, {
                                tag: "span",
                                onClick: () => this.handleClick(e),
                                className: d.breadcrumbClickWrapper,
                                children: f
                            }) : f, m ? null : (0, n.jsx)(c.default, {
                                className: a(d.breadcrumbArrow, u),
                                direction: c.default.Directions.RIGHT
                            })]
                        }, e.id)
                    }
                }
            }
            var p = u
        },
        461380: function(e, r, l) {
            "use strict";
            l.r(r), l.d(r, {
                default: function() {
                    return h
                }
            });
            var n = l("37983");
            l("884691");
            var t = l("414456"),
                s = l.n(t),
                a = l("384737"),
                o = l("448052"),
                i = l("748802"),
                c = l("260792"),
                d = l("77078"),
                u = l("75196"),
                p = l("4177");
            let m = {
                    UP: p.directionUp,
                    RIGHT: p.directionRight,
                    DOWN: p.directionDown,
                    LEFT: p.directionLeft
                },
                f = e => {
                    let {
                        direction: r = m.DOWN,
                        width: l = 24,
                        height: t = 24,
                        color: f = "currentColor",
                        transition: h = p.transition,
                        className: E,
                        foreground: N,
                        expanded: S,
                        ...x
                    } = e, {
                        enabled: C
                    } = (0, d.useRedesignIconContext)(), T = r;
                    if (!0 === S ? T = m.DOWN : !1 === S && (T = m.RIGHT), C) {
                        let e = {
                            [m.UP]: c.ChevronSmallUpIcon,
                            [m.DOWN]: a.ChevronSmallDownIcon,
                            [m.LEFT]: o.ChevronSmallLeftIcon,
                            [m.RIGHT]: i.ChevronSmallRightIcon
                        } [T];
                        return (0, n.jsx)(e, {
                            ...x,
                            className: E,
                            width: l,
                            height: t,
                            color: f,
                            colorClass: N
                        })
                    }
                    return (0, n.jsx)("svg", {
                        className: s(E, h, T),
                        width: l,
                        height: t,
                        viewBox: "0 0 24 24",
                        ...(0, u.default)(x),
                        children: (0, n.jsx)("path", {
                            className: N,
                            fill: "none",
                            stroke: f,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            f.Directions = m;
            var h = f
        }
    }
]);