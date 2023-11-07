(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["67569"], {
        812952: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return N
                }
            });
            var s, l, n, a, i = r("37983"),
                c = r("884691"),
                o = r("414456"),
                u = r.n(o),
                d = r("145131"),
                S = r("298754");
            (s = n || (n = {})).PRIMARY = "primary", s.SECONDARY = "secondary", s.WARNING = "warning", s.ERROR = "error", (l = a || (a = {})).SMALL = "small", l.LARGE = "large", l.NONE = "none";
            let E = {
                    [n.PRIMARY]: S.colorPrimary,
                    [n.SECONDARY]: S.colorSecondary,
                    [n.WARNING]: S.colorWarning,
                    [n.ERROR]: S.colorError
                },
                m = {
                    [a.SMALL]: S.small,
                    [a.LARGE]: S.large,
                    [a.NONE]: null
                };
            class p extends c.PureComponent {
                render() {
                    let {
                        icon: e,
                        color: t,
                        children: r,
                        iconSize: s,
                        className: l,
                        iconClassName: n
                    } = this.props;
                    return (0, i.jsxs)(d.default, {
                        className: u(S.note, E[t], l),
                        align: d.default.Align.CENTER,
                        children: [(0, i.jsx)(e, {
                            className: u(S.icon, m[s], n)
                        }), (0, i.jsx)("div", {
                            children: r
                        })]
                    })
                }
            }
            p.Colors = n, p.Sizes = a;
            var N = p
        },
        153727: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return u
                }
            }), r("881410");
            var s = r("37983");
            r("884691");
            var l = r("414456"),
                n = r.n(l),
                a = r("454589"),
                i = r("642906"),
                c = r("85336"),
                o = r("109872");

            function u(e) {
                let {
                    className: t,
                    isEligibleForTrial: r = !1
                } = e, {
                    step: l,
                    breadcrumbs: u,
                    startedPaymentFlowWithPaymentSourcesRef: d
                } = (0, i.usePaymentContext)();
                if (null == u || 0 === u.length) return null;
                let S = u.flatMap(e => {
                    let t = e.useBreadcrumbLabel();
                    return null != t ? {
                        id: e.id,
                        label: t
                    } : []
                });
                return 0 === S.length ? null : (S = S.filter(e => {
                    let t = e.id !== c.Step.ADD_PAYMENT_STEPS,
                        s = e.id === c.Step.ADD_PAYMENT_STEPS && !d.current;
                    return !r || r && (t || s)
                }), (0, s.jsx)("div", {
                    className: n("breadcrumb", o.wrapper, t),
                    children: (0, s.jsx)(a.default, {
                        activeId: l,
                        breadcrumbs: S
                    })
                }))
            }
        },
        273619: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return h
                }
            }), r("222007"), r("70102");
            var s = r("37983"),
                l = r("884691"),
                n = r("41092"),
                a = r("414456"),
                i = r.n(a),
                c = r("862337"),
                o = r("77078"),
                u = r("812952"),
                d = r("448993"),
                S = r("736978"),
                E = r("642906"),
                m = r("85336");
            r("153727"), r("650484");
            var p = r("454589"),
                N = r("978679"),
                f = r("745279"),
                C = r("49111"),
                A = r("782340"),
                I = r("129429");
            let _ = new Set([m.Step.SKU_SELECT, m.Step.AWAITING_AUTHENTICATION, m.Step.AWAITING_PURCHASE_TOKEN_AUTH, m.Step.CONFIRM]);

            function h(e) {
                let {
                    steps: t,
                    currentStep: r,
                    body: a,
                    paymentError: h,
                    header: P,
                    footer: T,
                    isGift: R = !1,
                    giftMessage: k = A.default.Messages.PREMIUM_PAYMENT_IS_GIFT,
                    isSeasonalGift: x = !1,
                    hideBreadcrumbs: M = !1,
                    isLoading: b = !1,
                    purchaseError: j,
                    purchaseErrorBlockRef: g,
                    planError: v,
                    onScroll: D,
                    scrollerClassName: O,
                    hasCurrencies: L = !1
                } = e, B = null;
                null != h && null == (0, m.errorToStep)(h) ? B = h : null != j ? B = j : null != v && (B = v);
                let W = null != B ? B.message : "";
                null != B && B instanceof d.BillingError && (B.code === S.ErrorCodes.CARD_DECLINED && L && (W += " ".concat(A.default.Messages.BILLING_ERROR_TRY_ANOTHER)), B.code === S.ErrorCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (W = A.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), B.code === C.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (W = A.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
                let {
                    stripe: K
                } = (0, E.usePaymentContext)();
                b = b || null == K;
                let y = l.useRef(new c.Timeout);
                l.useEffect(() => {
                    let e = y.current;
                    return null != K || e.isStarted() ? null != K && e.stop() : e.start(1e4, () => {
                        let e = Error("Stripe took too long to load");
                        (0, f.captureBillingException)(e)
                    }), () => {
                        e.stop()
                    }
                }, [K]);
                let U = t.includes(m.Step.PAYMENT_TYPE) ? m.Step.PAYMENT_TYPE : m.Step.ADD_PAYMENT_STEPS;
                return (0, s.jsxs)(n.Elements, {
                    options: C.StripeElementsOptions,
                    stripe: K,
                    children: [P, (0, s.jsxs)("div", {
                        className: i("paymentModalContent", I.content),
                        children: [R && !x && r !== m.Step.CONFIRM ? (0, s.jsx)(u.default, {
                            className: I.paymentNote,
                            iconSize: u.default.Sizes.SMALL,
                            icon: N.default,
                            color: null == k ? u.default.Colors.PRIMARY : u.default.Colors.SECONDARY,
                            children: k
                        }) : null, M ? null : (0, s.jsx)("div", {
                            className: I.breadcrumbsWrapper,
                            children: (0, s.jsx)(p.default, {
                                activeId: m.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(r) ? U : r,
                                breadcrumbs: t.filter(e => !m.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(e) && !_.has(e)).map(e => ({
                                    id: e,
                                    label: (0, m.getLabelForStep)(e)
                                }))
                            })
                        }), (0, s.jsxs)("div", {
                            className: I.bodyWrapper,
                            children: [null == B ? null : (0, s.jsx)("div", {
                                className: I.errorBlockWrapper,
                                children: (0, s.jsx)(o.FormErrorBlock, {
                                    ref: g,
                                    children: W
                                })
                            }), b ? (0, s.jsx)(o.Spinner, {
                                className: I.loadingBlock
                            }) : (0, s.jsx)(o.Sequencer, {
                                className: I.sequencer,
                                staticClassName: I.sequencerStatic,
                                animatedNodeClassName: I.sequencerAnimatedNode,
                                fillParent: !0,
                                step: r,
                                steps: t,
                                sideMargin: 20,
                                children: (0, s.jsx)(o.AdvancedScrollerThin, {
                                    onScroll: D,
                                    className: i(I.scroller, O),
                                    children: a
                                })
                            })]
                        })]
                    }), T]
                })
            }
        },
        706189: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useStickerViewAllStore: function() {
                    return a
                },
                setInspectedStickerPosition: function() {
                    return i
                },
                resetInspectedStickerPosition: function() {
                    return c
                }
            });
            var s = r("308503");
            let l = Object.freeze({
                    inspectedStickerPosition: {
                        rowIndex: -1,
                        columnIndex: -1
                    }
                }),
                n = (0, s.default)(e => l),
                a = n,
                i = (e, t, r) => {
                    n.setState({
                        inspectedStickerPosition: {
                            rowIndex: t,
                            columnIndex: e,
                            source: r
                        }
                    })
                },
                c = () => {
                    i(-1, -1)
                }
        },
        656137: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                StickerPackViewAllModalFooter: function() {
                    return y
                },
                default: function() {
                    return Y
                }
            }), r("424973"), r("222007");
            var s = r("37983"),
                l = r("884691"),
                n = r("414456"),
                a = r.n(n),
                i = r("483366"),
                c = r.n(i),
                o = r("446674"),
                u = r("769846"),
                d = r("77078"),
                S = r("246511"),
                E = r("642906"),
                m = r("85336"),
                p = r("716849"),
                N = r("552917"),
                f = r("273619"),
                C = r("181114"),
                A = r("216422"),
                I = r("159885"),
                _ = r("706189"),
                h = r("256860"),
                P = r("364685"),
                T = r("24373"),
                R = r("77162"),
                k = r("770366"),
                x = r("113270"),
                M = r("49111"),
                b = r("782340"),
                j = r("687133");
            let g = (0, I.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS),
                v = (0, I.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING),
                D = (0, I.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN),
                O = g + 2 * v,
                L = c(_.resetInspectedStickerPosition, 250),
                B = () => {
                    L.cancel()
                },
                W = e => {
                    let {
                        visibleRowIndex: t,
                        columnIndex: r
                    } = e;
                    L.cancel(), (0, _.setInspectedStickerPosition)(r, t, S.InspectedExpressionChangeSource.MOUSE_EVENT)
                },
                K = e => {
                    let {
                        stickerPack: t,
                        width: r,
                        hasHeaderImage: n,
                        isScrolling: i,
                        onInspect: c
                    } = e, o = l.useMemo(() => [(0, T.createStickerPackCategory)(t)], [t]), u = (0, _.useStickerViewAllStore)(e => e.inspectedStickerPosition), {
                        rowCountBySection: d,
                        stickersGrid: S,
                        gutterWidth: E
                    } = (0, h.useStickersGrid)({
                        stickersCategories: o,
                        stickerNodeMargin: D,
                        stickerNodeWidth: O,
                        listWidth: r
                    });
                    return (0, s.jsxs)("div", {
                        className: a(j.container, {
                            [j.containerWithHeader]: n
                        }),
                        children: [(0, s.jsx)(k.default, {
                            className: j.header,
                            stickerPack: t,
                            withDescription: !0
                        }, t.id), (0, s.jsx)("div", {
                            onFocus: B,
                            onBlur: L,
                            onMouseOver: B,
                            onMouseOut: L,
                            children: (() => {
                                if (0 === d.length) return null;
                                let e = [];
                                for (let t = 0; t < d[0]; t++) e.push((0, s.jsx)(R.default, {
                                    enlargeOnInteraction: !0,
                                    preferAnimation: !0,
                                    gutterWidth: E,
                                    inspectedStickerPosition: u,
                                    isScrolling: i,
                                    onInspect: c,
                                    rowIndex: t,
                                    stickerDescriptors: S[t],
                                    stickerPadding: v,
                                    stickerSize: g,
                                    isDisplayingIndividualStickers: !0,
                                    checkSendability: !1
                                }, t));
                                return e
                            })()
                        })]
                    })
                },
                y = e => {
                    let {
                        onClose: t,
                        stickerPack: r
                    } = e;
                    (0, h.useFetchStickerPacks)(), (0, p.useMaybeFetchPremiumLikelihood)(N.default);
                    let l = (0, o.useStateFromStores)([P.default], () => P.default.isPremiumPack(r.id));
                    return (0, s.jsxs)(d.ModalFooter, {
                        className: j.footer,
                        children: [(0, s.jsx)(d.Anchor, {
                            onClick: t,
                            className: j.skuPreviewFooterCloseButton,
                            children: b.default.Messages.CLOSE
                        }), l && (0, s.jsxs)(C.default, {
                            color: d.Button.Colors.GREEN,
                            type: "submit",
                            innerClassName: j.premiumButtonInner,
                            onClick: () => {
                                t(), (0, x.default)({
                                    section: M.AnalyticsSections.STICKER_PACK_VIEW_ALL
                                })
                            },
                            children: [(0, s.jsx)(A.default, {
                                className: j.premiumButtonNitroWheel
                            }), b.default.Messages.STICKER_PACK_AVAILABLE_WITH_PREMIUM]
                        })]
                    })
                },
                U = e => {
                    let {
                        stickerPack: t,
                        onClose: r
                    } = e, l = (0, T.getStickerPackBannerAssetUrl)(t, 1024);
                    return null == l ? null : (0, s.jsxs)(d.ModalHeader, {
                        className: j.headerWithImage,
                        children: [(0, s.jsx)("div", {
                            role: "image",
                            style: {
                                backgroundImage: "url(".concat(l, ")")
                            },
                            className: j.backgroundImage
                        }), (0, s.jsx)(d.ModalCloseButton, {
                            className: j.closeButton,
                            onClick: r
                        })]
                    })
                };

            function Y(e) {
                let {
                    onClose: t,
                    stickerPack: r,
                    ...n
                } = e, [a, i] = l.useState(null), c = l.useCallback(e => {
                    null !== e && i(e.offsetWidth)
                }, []);
                return l.useLayoutEffect(() => {
                    (0, _.resetInspectedStickerPosition)()
                }, []), (0, s.jsx)(E.PaymentContextProvider, {
                    activeSubscription: null,
                    stepConfigs: [],
                    skuIDs: [],
                    children: (0, s.jsx)(d.ModalRoot, {
                        ...n,
                        "aria-labelledby": "sticker-pack-sku-preview-modal",
                        children: (0, s.jsx)(f.default, {
                            hideBreadcrumbs: !0,
                            body: (0, s.jsx)("div", {
                                ref: c,
                                children: null != a && (0, s.jsx)(K, {
                                    stickerPack: r,
                                    hasHeaderImage: !0,
                                    onInspect: W,
                                    width: a
                                })
                            }),
                            footer: (0, s.jsx)(y, {
                                onClose: t,
                                stickerPack: r
                            }),
                            header: (0, s.jsx)(U, {
                                onClose: t,
                                stickerPack: r
                            }),
                            onScroll: L,
                            steps: [m.Step.SKU_PREVIEW],
                            currentStep: m.Step.SKU_PREVIEW
                        })
                    })
                })
            }
        },
        770366: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return E
                }
            });
            var s = r("37983"),
                l = r("884691"),
                n = r("414456"),
                a = r.n(n),
                i = r("77078"),
                c = r("132755"),
                o = r("24373"),
                u = r("782340"),
                d = r("436604");
            let S = e => {
                let {
                    stickerPack: t
                } = e;
                return (0, s.jsx)("div", {
                    className: d.features,
                    children: (0, o.isStickerPackAnimated)(t) ? (0, s.jsx)(i.Tooltip, {
                        tooltipClassName: d.featuresTooltip,
                        position: "top",
                        text: u.default.Messages.STICKER_PICKER_PACK_DETAILS_ANIMATED,
                        children: e => (0, s.jsx)(c.default, {
                            ...e,
                            className: d.featureIcon
                        })
                    }) : null
                })
            };
            var E = l.memo(e => {
                let {
                    className: t,
                    stickerPack: r,
                    withDescription: l = !1
                } = e;
                return (0, s.jsxs)("div", {
                    className: a(d.header, t),
                    children: [(0, s.jsxs)("div", {
                        className: d.title,
                        children: [(0, s.jsx)(i.Heading, {
                            className: d.heading,
                            variant: "heading-sm/semibold",
                            children: r.name
                        }), (0, s.jsx)(S, {
                            stickerPack: r
                        })]
                    }), l && null != r.description && (0, s.jsx)(i.Text, {
                        className: d.description,
                        variant: "text-sm/normal",
                        children: r.description
                    }), (0, s.jsx)("div", {
                        className: d.count,
                        children: u.default.Messages.STICKER_PACK_STICKER_COUNT.format({
                            numStickers: r.stickers.length
                        })
                    })]
                })
            })
        },
        454589: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return S
                }
            }), r("222007");
            var s = r("37983"),
                l = r("884691"),
                n = r("414456"),
                a = r.n(n),
                i = r("77078"),
                c = r("145131"),
                o = r("461380"),
                u = r("298619");
            class d extends l.PureComponent {
                handleClick(e) {
                    let {
                        onBreadcrumbClick: t
                    } = this.props;
                    null != t && t(e)
                }
                render() {
                    let {
                        breadcrumbs: e,
                        className: t
                    } = this.props, r = e.map(this.renderBreadcrumb);
                    return (0, s.jsx)(c.default, {
                        justify: c.default.Justify.START,
                        className: a(u.breadcrumbs, t),
                        children: r
                    })
                }
                constructor(...e) {
                    super(...e), this.renderBreadcrumb = (e, t) => {
                        let {
                            activeId: r,
                            onBreadcrumbClick: l,
                            breadcrumbs: n,
                            renderCustomBreadcrumb: c,
                            separatorClassName: d
                        } = this.props, S = e.id === r, E = t === n.length - 1, m = null != c ? c(e, S) : (0, s.jsx)("span", {
                            className: a(u.breadcrumb, {
                                [u.activeBreadcrumb]: S,
                                [u.interactiveBreadcrumb]: null != l
                            }),
                            children: e.label
                        });
                        return (0, s.jsxs)("div", {
                            className: a(u.breadcrumbWrapper, {
                                [u.breadcrumbFinalWrapper]: E
                            }),
                            children: [null != l ? (0, s.jsx)(i.Clickable, {
                                tag: "span",
                                onClick: () => this.handleClick(e),
                                className: u.breadcrumbClickWrapper,
                                children: m
                            }) : m, E ? null : (0, s.jsx)(o.default, {
                                className: a(u.breadcrumbArrow, d),
                                direction: o.default.Directions.RIGHT
                            })]
                        }, e.id)
                    }
                }
            }
            var S = d
        }
    }
]);