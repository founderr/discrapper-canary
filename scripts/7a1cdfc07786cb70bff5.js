"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [86413], {
        19120: (e, r, t) => {
            t.d(r, {
                Z: () => N
            });
            var n = t(785893),
                o = t(667294),
                c = t(294184),
                i = t.n(c),
                s = t(107364),
                a = t(543151),
                l = t.n(a);

            function u(e, r) {
                if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function d(e) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return d(e)
            }

            function p(e, r) {
                return !r || "object" !== E(r) && "function" != typeof r ? function(e) {
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
            var m, h, y, E = function(e) {
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
                    var t, n = d(e);
                    if (r) {
                        var o = d(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return p(this, t)
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
            var O, P = (f(y = {}, m.PRIMARY, l().colorPrimary), f(y, m.SECONDARY, l().colorSecondary), f(y, m.WARNING, l().colorWarning), f(y, m.ERROR, l().colorError), y),
                S = (f(O = {}, h.SMALL, l().small), f(O, h.LARGE, l().large), f(O, h.NONE, null), O),
                j = function(e) {
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
                    }(t, e);
                    var r = v(t);

                    function t() {
                        u(this, t);
                        return r.apply(this, arguments)
                    }
                    t.prototype.render = function() {
                        var e = this.props,
                            r = e.icon,
                            t = e.color,
                            o = e.children,
                            c = e.iconSize,
                            a = e.className,
                            u = e.iconClassName;
                        return (0, n.jsxs)(s.Z, {
                            className: i()(l().note, P[t], a),
                            align: s.Z.Align.CENTER,
                            children: [(0, n.jsx)(r, {
                                className: i()(l().icon, S[c], u)
                            }), (0, n.jsx)("div", {
                                children: o
                            })]
                        })
                    };
                    return t
                }(o.PureComponent);
            j.Colors = m;
            j.Sizes = h;
            const N = j
        },
        128059: (e, r, t) => {
            t.d(r, {
                Z: () => d
            });
            var n = t(785893),
                o = (t(667294), t(294184)),
                c = t.n(o),
                i = t(669426),
                s = t(644144),
                a = t(782786),
                l = t(83471),
                u = t(441877),
                f = t.n(u);

            function d(e) {
                var r = e.className,
                    t = e.isEligibleForTrial,
                    o = void 0 !== t && t,
                    u = (0, a.usePaymentContext)(),
                    d = u.step,
                    p = u.breadcrumbs,
                    b = u.startedPaymentFlowWithPaymentSourcesRef,
                    m = u.giftRecipient;
                if (null == p || 0 === p.length || (0, s.a8)(m)) return null;
                var h = p.flatMap((function(e) {
                    var r = e.useBreadcrumbLabel();
                    return null != r ? {
                        id: e.id,
                        label: r
                    } : []
                }));
                if (0 === h.length) return null;
                h = h.filter((function(e) {
                    var r = e.id !== l.h8.ADD_PAYMENT_STEPS,
                        t = e.id === l.h8.ADD_PAYMENT_STEPS && !b.current;
                    return !o || o && (r || t)
                }));
                return (0, n.jsx)("div", {
                    className: c()("breadcrumb", f().wrapper, r),
                    children: (0, n.jsx)(i.Z, {
                        activeId: d,
                        breadcrumbs: h
                    })
                })
            }
        },
        383861: (e, r, t) => {
            t.d(r, {
                Z: () => j
            });
            var n = t(785893),
                o = t(667294),
                c = t(886664),
                i = t(294184),
                s = t.n(i),
                a = t(513328),
                l = t(70418),
                u = t(19120),
                f = t(347365),
                d = t(414094),
                p = t(782786),
                b = t(83471),
                m = (t(128059), t(149096), t(669426)),
                h = t(832520),
                y = t(264628),
                E = t(2590),
                v = t(473708),
                O = t(103749),
                P = t.n(O),
                S = new Set([b.h8.SKU_SELECT, b.h8.AWAITING_AUTHENTICATION, b.h8.AWAITING_PURCHASE_TOKEN_AUTH, b.h8.CONFIRM]);

            function j(e) {
                var r = e.steps,
                    t = e.currentStep,
                    i = e.body,
                    O = e.paymentError,
                    j = e.header,
                    N = e.footer,
                    g = e.isGift,
                    C = void 0 !== g && g,
                    _ = e.giftMessage,
                    I = void 0 === _ ? v.Z.Messages.PREMIUM_PAYMENT_IS_GIFT : _,
                    k = e.isSeasonalGift,
                    R = void 0 !== k && k,
                    A = e.hideBreadcrumbs,
                    x = void 0 !== A && A,
                    T = e.isLoading,
                    w = void 0 !== T && T,
                    M = e.purchaseError,
                    D = e.purchaseErrorBlockRef,
                    Z = e.planError,
                    B = e.onScroll,
                    L = e.scrollerClassName,
                    W = e.hasCurrencies,
                    K = void 0 !== W && W,
                    U = null;
                null != O && null == (0, b.ly)(O) ? U = O : null != M ? U = M : null != Z && (U = Z);
                var G = null != U ? U.message : "";
                if (null != U && U instanceof f.HF) {
                    U.code === d.SM.CARD_DECLINED && K && (G += " ".concat(v.Z.Messages.BILLING_ERROR_TRY_ANOTHER));
                    U.code === d.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (G = v.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT);
                    U.code === E.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (G = v.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID)
                }
                var F = (0, p.usePaymentContext)().stripe;
                w = w || null == F;
                var Y = o.useRef(new a.V7);
                o.useEffect((function() {
                    var e = Y.current;
                    null != F || e.isStarted() ? null != F && e.stop() : e.start(1e4, (function() {
                        var e = new Error("Stripe took too long to load");
                        (0, y.q2)(e)
                    }));
                    return function() {
                        e.stop()
                    }
                }), [F]);
                var H = r.includes(b.h8.PAYMENT_TYPE) ? b.h8.PAYMENT_TYPE : b.h8.ADD_PAYMENT_STEPS;
                return (0, n.jsxs)(c.Elements, {
                    options: E.OBo,
                    stripe: F,
                    children: [j, (0, n.jsxs)("div", {
                        className: s()("paymentModalContent", P().content),
                        children: [C && !R && t !== b.h8.CONFIRM ? (0, n.jsx)(u.Z, {
                            className: P().paymentNote,
                            iconSize: u.Z.Sizes.SMALL,
                            icon: h.Z,
                            color: null == I ? u.Z.Colors.PRIMARY : u.Z.Colors.SECONDARY,
                            children: I
                        }) : null, x ? null : (0, n.jsx)("div", {
                            className: P().breadcrumbsWrapper,
                            children: (0, n.jsx)(m.Z, {
                                activeId: b.Ck.has(t) ? H : t,
                                breadcrumbs: r.filter((function(e) {
                                    return !b.Ck.has(e) && !S.has(e)
                                })).map((function(e) {
                                    return {
                                        id: e,
                                        label: (0, b.DJ)(e)
                                    }
                                }))
                            })
                        }), (0, n.jsxs)("div", {
                            className: P().bodyWrapper,
                            children: [null == U ? null : (0, n.jsx)("div", {
                                className: P().errorBlockWrapper,
                                children: (0, n.jsx)(l.FormErrorBlock, {
                                    ref: D,
                                    children: G
                                })
                            }), w ? (0, n.jsx)(l.Spinner, {
                                className: P().loadingBlock
                            }) : (0, n.jsx)(l.Sequencer, {
                                className: P().sequencer,
                                staticClassName: P().sequencerStatic,
                                animatedNodeClassName: P().sequencerAnimatedNode,
                                fillParent: !0,
                                step: t,
                                steps: r,
                                sideMargin: 20,
                                children: (0, n.jsx)(l.AdvancedScrollerThin, {
                                    onScroll: B,
                                    className: s()(P().scroller, L),
                                    children: i
                                })
                            })]
                        })]
                    }), N]
                })
            }
        },
        186413: (e, r, t) => {
            t.r(r);
            t.d(r, {
                StickerPackViewAllModalFooter: () => se,
                default: () => le
            });
            var n = t(785893),
                o = t(667294),
                c = t(294184),
                i = t.n(c),
                s = t(23279),
                a = t.n(s),
                l = t(202351),
                u = t(142643),
                f = t(70418),
                d = t(879913),
                p = t(782786),
                b = t(83471),
                m = t(159895),
                h = t(799066),
                y = t(383861),
                E = t(473903),
                v = t(709189),
                O = t(406493),
                P = t(116094),
                S = t(421281),
                j = t(842715),
                N = t(38736),
                g = Object.freeze({
                    inspectedStickerPosition: {
                        rowIndex: -1,
                        columnIndex: -1
                    }
                }),
                C = (0, N.Z)((function(e) {
                    return g
                })),
                _ = C,
                I = function(e, r, t) {
                    C.setState({
                        inspectedStickerPosition: {
                            rowIndex: r,
                            columnIndex: e,
                            source: t
                        }
                    })
                },
                k = function() {
                    I(-1, -1)
                },
                R = t(217544),
                A = t(78551),
                x = t(513586),
                T = t(965196),
                w = t(958125),
                M = t(473708),
                D = t(354826),
                Z = t.n(D);

            function B(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function L(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }
            var W = function(e) {
                    var r = e.stickerPack;
                    return (0, n.jsx)("div", {
                        className: Z().features,
                        children: (0, x.X_)(r) ? (0, n.jsx)(f.Tooltip, {
                            tooltipClassName: Z().featuresTooltip,
                            position: "top",
                            text: M.Z.Messages.STICKER_PICKER_PACK_DETAILS_ANIMATED,
                            children: function(e) {
                                return (0, n.jsx)(w.Z, L(function(e) {
                                    for (var r = 1; r < arguments.length; r++) {
                                        var t = null != arguments[r] ? arguments[r] : {},
                                            n = Object.keys(t);
                                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                                        }))));
                                        n.forEach((function(r) {
                                            B(e, r, t[r])
                                        }))
                                    }
                                    return e
                                }({}, e), {
                                    className: Z().featureIcon
                                }))
                            }
                        }) : null
                    })
                },
                K = function(e) {
                    var r = e.className,
                        t = e.stickerPack,
                        o = e.withDescription,
                        c = void 0 !== o && o;
                    return (0, n.jsxs)("div", {
                        className: i()(Z().header, r),
                        children: [(0, n.jsxs)("div", {
                            className: Z().title,
                            children: [(0, n.jsx)(f.Heading, {
                                className: Z().heading,
                                variant: "heading-sm/semibold",
                                children: t.name
                            }), (0, n.jsx)(W, {
                                stickerPack: t
                            })]
                        }), c && null != t.description && (0, n.jsx)(f.Text, {
                            className: Z().description,
                            variant: "text-sm/normal",
                            children: t.description
                        }), (0, n.jsx)("div", {
                            className: Z().count,
                            children: M.Z.Messages.STICKER_PACK_STICKER_COUNT.format({
                                numStickers: t.stickers.length
                            })
                        })]
                    })
                };
            const U = o.memo(K);
            var G = t(803961),
                F = t(2590),
                Y = t(925437),
                H = t.n(Y);

            function V(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function z(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function q(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    n.forEach((function(r) {
                        z(e, r, t[r])
                    }))
                }
                return e
            }

            function J(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function X(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) {
                        t = c[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < c.length; n++) {
                        t = c[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function $(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var n, o, c = [],
                            i = !0,
                            s = !1;
                        try {
                            for (t = t.call(e); !(i = (n = t.next()).done); i = !0) {
                                c.push(n.value);
                                if (r && c.length === r) break
                            }
                        } catch (e) {
                            s = !0;
                            o = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return c
                    }
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return V(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return V(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Q = (0, S.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS),
                ee = (0, S.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING),
                re = (0, S.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN),
                te = Q + 2 * ee,
                ne = a()(k, 250),
                oe = function() {
                    ne.cancel()
                },
                ce = function(e) {
                    var r = e.visibleRowIndex,
                        t = e.columnIndex;
                    ne.cancel();
                    I(t, r, d.u.MOUSE_EVENT)
                },
                ie = function(e) {
                    var r = e.stickerPack,
                        t = e.width,
                        c = e.hasHeaderImage,
                        s = e.isScrolling,
                        a = e.onInspect,
                        l = o.useMemo((function() {
                            return [(0, x.z)(r)]
                        }), [r]),
                        u = _((function(e) {
                            return e.inspectedStickerPosition
                        })),
                        f = (0, R.el)({
                            stickersCategories: l,
                            stickerNodeMargin: re,
                            stickerNodeWidth: te,
                            listWidth: t
                        }),
                        d = f.rowCountBySection,
                        p = f.stickersGrid,
                        b = f.gutterWidth;
                    return (0, n.jsxs)("div", {
                        className: i()(H().container, z({}, H().containerWithHeader, c)),
                        children: [(0,
                            n.jsx)(U, {
                            className: H().header,
                            stickerPack: r,
                            withDescription: !0
                        }, r.id), (0, n.jsx)("div", {
                            onFocus: oe,
                            onBlur: ne,
                            onMouseOver: oe,
                            onMouseOut: ne,
                            children: function() {
                                if (0 === d.length) return null;
                                for (var e = [], r = 0; r < d[0]; r++) e.push((0, n.jsx)(T.Z, {
                                    enlargeOnInteraction: !0,
                                    preferAnimation: !0,
                                    gutterWidth: b,
                                    inspectedStickerPosition: u,
                                    isScrolling: s,
                                    onInspect: a,
                                    rowIndex: r,
                                    stickerDescriptors: p[r],
                                    stickerPadding: ee,
                                    stickerSize: Q,
                                    isDisplayingIndividualStickers: !0,
                                    checkSendability: !1
                                }, r));
                                return e
                            }()
                        })]
                    })
                },
                se = function(e) {
                    var r = e.onClose,
                        t = e.stickerPack;
                    (0, R.fP)();
                    (0, m.Z$)(h.Z);
                    var o = (0, l.e7)([E.default], (function() {
                            return E.default.getCurrentUser()
                        })),
                        c = (0, l.e7)([A.Z], (function() {
                            return A.Z.isPremiumPack(t.id)
                        })),
                        i = j.Z.useExperiment({
                            location: "a3b7dd_1"
                        }, {
                            autoTrackExposure: !1
                        }).freeStickersEnabled;
                    return (0, n.jsxs)(f.ModalFooter, {
                        className: H().footer,
                        children: [(0, n.jsx)(f.Anchor, {
                            onClick: r,
                            className: H().skuPreviewFooterCloseButton,
                            children: M.Z.Messages.CLOSE
                        }), c && !(P.ZP.canUseStickersEverywhere(o) || i) && (0,
                            n.jsxs)(v.C, {
                            color: f.Button.Colors.GREEN,
                            type: "submit",
                            innerClassName: H().premiumButtonInner,
                            onClick: function() {
                                r();
                                (0, G.Z)({
                                    section: F.jXE.STICKER_PACK_VIEW_ALL
                                })
                            },
                            children: [(0, n.jsx)(O.Z, {
                                className: H().premiumButtonNitroWheel
                            }), M.Z.Messages.STICKER_PACK_AVAILABLE_WITH_PREMIUM]
                        })]
                    })
                },
                ae = function(e) {
                    var r = e.stickerPack,
                        t = e.onClose,
                        o = (0, x.sM)(r, 1024);
                    return null == o ? null : (0, n.jsxs)(f.ModalHeader, {
                        className: H().headerWithImage,
                        children: [(0, n.jsx)("div", {
                            role: "image",
                            style: {
                                backgroundImage: "url(".concat(o, ")")
                            },
                            className: H().backgroundImage
                        }), (0, n.jsx)(f.ModalCloseButton, {
                            className: H().closeButton,
                            onClick: t
                        })]
                    })
                };

            function le(e) {
                var r = e.onClose,
                    t = e.stickerPack,
                    c = X(e, ["onClose", "stickerPack"]),
                    i = $(o.useState(null), 2),
                    s = i[0],
                    a = i[1],
                    l = o.useCallback((function(e) {
                        null !== e && a(e.offsetWidth)
                    }), []);
                o.useLayoutEffect((function() {
                    k()
                }), []);
                return (0, n.jsx)(p.PaymentContextProvider, {
                    activeSubscription: null,
                    stepConfigs: [],
                    skuIDs: [],
                    children: (0, n.jsx)(f.ModalRoot, J(q({}, c), {
                        "aria-labelledby": "sticker-pack-sku-preview-modal",
                        children: (0, n.jsx)(y.Z, {
                            hideBreadcrumbs: !0,
                            body: (0, n.jsx)("div", {
                                ref: l,
                                children: null != s && (0, n.jsx)(ie, {
                                    stickerPack: t,
                                    hasHeaderImage: !0,
                                    onInspect: ce,
                                    width: s
                                })
                            }),
                            footer: (0, n.jsx)(se, {
                                onClose: r,
                                stickerPack: t
                            }),
                            header: (0, n.jsx)(ae, {
                                onClose: r,
                                stickerPack: t
                            }),
                            onScroll: ne,
                            steps: [b.h8.SKU_PREVIEW],
                            currentStep: b.h8.SKU_PREVIEW
                        })
                    }))
                })
            }
        },
        669426: (e, r, t) => {
            t.d(r, {
                Z: () => v
            });
            var n = t(785893),
                o = t(667294),
                c = t(294184),
                i = t.n(c),
                s = t(70418),
                a = t(107364),
                l = t(718831),
                u = t(70821),
                f = t.n(u);

            function d(e, r) {
                if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
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
                    var t, n = b(e);
                    if (r) {
                        var o = b(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return m(this, t)
                }
            }
            const v = function(e) {
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
                }(t, e);
                var r = E(t);

                function t() {
                    d(this, t);
                    var e;
                    (e = r.apply(this, arguments)).renderBreadcrumb = function(r, t) {
                        var o, c = e.props,
                            a = c.activeId,
                            u = c.onBreadcrumbClick,
                            d = c.breadcrumbs,
                            b = c.renderCustomBreadcrumb,
                            m = c.separatorClassName,
                            h = r.id === a,
                            y = t === d.length - 1,
                            E = null != b ? b(r, h) : (0, n.jsx)("span", {
                                className: i()(f().breadcrumb, (o = {}, p(o, f().activeBreadcrumb, h), p(o, f().interactiveBreadcrumb, null != u), o)),
                                children: r.label
                            });
                        return (0, n.jsxs)("div", {
                            className: i()(f().breadcrumbWrapper, p({}, f().breadcrumbFinalWrapper, y)),
                            children: [null != u ? (0, n.jsx)(s.Clickable, {
                                tag: "span",
                                onClick: function() {
                                    return e.handleClick(r)
                                },
                                className: f().breadcrumbClickWrapper,
                                children: E
                            }) : E, y ? null : (0, n.jsx)(l.Z, {
                                className: i()(f().breadcrumbArrow, m),
                                direction: l.Z.Directions.RIGHT
                            })]
                        }, r.id)
                    };
                    return e
                }
                var o = t.prototype;
                o.handleClick = function(e) {
                    var r = this.props.onBreadcrumbClick;
                    null != r && r(e)
                };
                o.render = function() {
                    var e = this.props,
                        r = e.breadcrumbs,
                        t = e.className,
                        o = r.map(this.renderBreadcrumb);
                    return (0, n.jsx)(a.Z, {
                        justify: a.Z.Justify.START,
                        className: i()(f().breadcrumbs, t),
                        children: o
                    })
                };
                return t
            }(o.PureComponent)
        }
    }
]);