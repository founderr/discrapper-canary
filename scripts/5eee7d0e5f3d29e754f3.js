"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [2231], {
        19120: (e, r, n) => {
            n.d(r, {
                Z: () => I
            });
            var t = n(785893),
                o = n(667294),
                i = n(294184),
                c = n.n(i),
                s = n(107364),
                l = n(543151),
                a = n.n(l);

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

            function p(e, r) {
                return !r || "object" !== m(r) && "function" != typeof r ? function(e) {
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
            var E, b, C, m = function(e) {
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
                    var n, t = f(e);
                    if (r) {
                        var o = f(this).constructor;
                        n = Reflect.construct(t, arguments, o)
                    } else n = t.apply(this, arguments);
                    return p(this, n)
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
            }(b || (b = {}));
            var N, y = (d(C = {}, E.PRIMARY, a().colorPrimary), d(C, E.SECONDARY, a().colorSecondary), d(C, E.WARNING, a().colorWarning), d(C, E.ERROR, a().colorError), C),
                h = (d(N = {}, b.SMALL, a().small), d(N, b.LARGE, a().large), d(N, b.NONE, null), N),
                O = function(e) {
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
                    var r = P(n);

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
                            l = e.className,
                            u = e.iconClassName;
                        return (0, t.jsxs)(s.Z, {
                            className: c()(a().note, y[n], l),
                            align: s.Z.Align.CENTER,
                            children: [(0, t.jsx)(r, {
                                className: c()(a().icon, h[i], u)
                            }), (0, t.jsx)("div", {
                                children: o
                            })]
                        })
                    };
                    return n
                }(o.PureComponent);
            O.Colors = E;
            O.Sizes = b;
            const I = O
        },
        128059: (e, r, n) => {
            n.d(r, {
                Z: () => f
            });
            var t = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                c = n(669426),
                s = n(644144),
                l = n(782786),
                a = n(83471),
                u = n(441877),
                d = n.n(u);

            function f(e) {
                var r = e.className,
                    n = e.isEligibleForTrial,
                    o = void 0 !== n && n,
                    u = (0, l.usePaymentContext)(),
                    f = u.step,
                    p = u.breadcrumbs,
                    S = u.startedPaymentFlowWithPaymentSourcesRef,
                    E = u.giftRecipient;
                if (null == p || 0 === p.length || (0, s.a8)(E)) return null;
                var b = p.flatMap((function(e) {
                    var r = e.useBreadcrumbLabel();
                    return null != r ? {
                        id: e.id,
                        label: r
                    } : []
                }));
                if (0 === b.length) return null;
                b = b.filter((function(e) {
                    var r = e.id !== a.h8.ADD_PAYMENT_STEPS,
                        n = e.id === a.h8.ADD_PAYMENT_STEPS && !S.current;
                    return !o || o && (r || n)
                }));
                return (0, t.jsx)("div", {
                    className: i()("breadcrumb", d().wrapper, r),
                    children: (0, t.jsx)(c.Z, {
                        activeId: f,
                        breadcrumbs: b
                    })
                })
            }
        },
        149096: (e, r, n) => {
            n.d(r, {
                ZP: () => E,
                C3: () => b,
                O3: () => C
            });
            var t = n(785893),
                o = n(667294),
                i = n(294184),
                c = n.n(i),
                s = n(441143),
                l = n.n(s),
                a = n(973935),
                u = n(304548),
                d = n(782786),
                f = n(384009),
                p = n.n(f);

            function S(e, r) {
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

            function E(e) {
                var r, n, i, s, a, f = function(e) {
                        return {
                            header: e.header,
                            isLargeModal: e.isLargeModal,
                            stepProps: S(e, ["header", "isLargeModal"])
                        }
                    }(e),
                    E = f.header,
                    b = f.isLargeModal,
                    C = f.stepProps,
                    m = (0,
                        d.usePaymentContext)(),
                    P = m.step,
                    N = m.stepConfigs,
                    y = m.setBodyNode,
                    h = m.setFooterNode,
                    O = m.setModalOverlayNode,
                    I = m.setReadySlideId,
                    M = N.find((function(e) {
                        return e.key === P
                    }));
                o.useEffect((function() {
                    O(null)
                }), [P, O]);
                l()(null != M, "Unknown step for current payment flow.");
                var T, A = null !== (a = null == M || null === (r = M.options) || void 0 === r ? void 0 : r.hideSlider) && void 0 !== a && a,
                    v = null == M || null === (n = M.options) || void 0 === n ? void 0 : n.bodyClassName,
                    R = void 0 !== b && b ? p().sliderBodyLarge : null == M || null === (i = M.options) || void 0 === i ? void 0 : i.sliderBodyClassName;
                return (0, t.jsxs)(t.Fragment, {
                    children: [null === (T = null == M || null === (s = M.options) || void 0 === s ? void 0 : s.renderHeader) || void 0 === T || T ? E : null, M.renderStep(C), null == P || A ? null : (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(u.ModalContent, {
                            className: c()(p().body, v),
                            children: (0, t.jsx)(u.Slides, {
                                activeSlide: P,
                                centered: !1,
                                onSlideReady: function(e) {
                                    return I(e)
                                },
                                children: N.filter((function(e) {
                                    return null != e.key
                                })).map((function(e) {
                                    return (0, t.jsx)(u.Slide, {
                                        id: e.key,
                                        children: (0,
                                            t.jsx)("form", {
                                            className: c()(p().sliderBody, R),
                                            ref: function(e) {
                                                return y(e)
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
                                return h(e)
                            }
                        }), (0, t.jsx)("div", {
                            ref: function(e) {
                                return O(e)
                            }
                        })]
                    })]
                })
            }

            function b(e) {
                var r = e.children,
                    n = (0, d.usePaymentContext)().bodyNode;
                return null == n ? null : a.createPortal(r, n)
            }

            function C(e) {
                var r = e.children,
                    n = (0, d.usePaymentContext)().footerNode;
                return null == n ? null : a.createPortal(r, n)
            }
        },
        383861: (e, r, n) => {
            n.d(r, {
                Z: () => O
            });
            var t = n(785893),
                o = n(667294),
                i = n(886664),
                c = n(294184),
                s = n.n(c),
                l = n(513328),
                a = n(304548),
                u = n(19120),
                d = n(347365),
                f = n(414094),
                p = n(782786),
                S = n(83471),
                E = (n(128059), n(149096), n(669426)),
                b = n(832520),
                C = n(264628),
                m = n(2590),
                P = n(473708),
                N = n(103749),
                y = n.n(N),
                h = new Set([S.h8.SKU_SELECT, S.h8.AWAITING_AUTHENTICATION, S.h8.AWAITING_PURCHASE_TOKEN_AUTH, S.h8.CONFIRM]);

            function O(e) {
                var r = e.steps,
                    n = e.currentStep,
                    c = e.body,
                    N = e.paymentError,
                    O = e.header,
                    I = e.footer,
                    M = e.isGift,
                    T = void 0 !== M && M,
                    A = e.giftMessage,
                    v = void 0 === A ? P.Z.Messages.PREMIUM_PAYMENT_IS_GIFT : A,
                    R = e.isSeasonalGift,
                    j = void 0 !== R && R,
                    g = e.hideBreadcrumbs,
                    _ = void 0 !== g && g,
                    L = e.isLoading,
                    G = void 0 !== L && L,
                    B = e.purchaseError,
                    k = e.purchaseErrorBlockRef,
                    x = e.planError,
                    D = e.onScroll,
                    K = e.scrollerClassName,
                    w = e.hasCurrencies,
                    Z = void 0 !== w && w,
                    U = null;
                null != N && null == (0, S.ly)(N) ? U = N : null != B ? U = B : null != x && (U = x);
                var F = null != U ? U.message : "";
                if (null != U && U instanceof d.HF) {
                    U.code === f.SM.CARD_DECLINED && Z && (F += " ".concat(P.Z.Messages.BILLING_ERROR_TRY_ANOTHER));
                    U.code === f.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (F = P.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT);
                    U.code === m.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (F = P.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID)
                }
                var W = (0, p.usePaymentContext)().stripe;
                G = G || null == W;
                var H = o.useRef(new l.V7);
                o.useEffect((function() {
                    var e = H.current;
                    null != W || e.isStarted() ? null != W && e.stop() : e.start(1e4, (function() {
                        var e = new Error("Stripe took too long to load");
                        (0, C.q2)(e)
                    }));
                    return function() {
                        e.stop()
                    }
                }), [W]);
                var Y = r.includes(S.h8.PAYMENT_TYPE) ? S.h8.PAYMENT_TYPE : S.h8.ADD_PAYMENT_STEPS;
                return (0, t.jsxs)(i.Elements, {
                    options: m.OBo,
                    stripe: W,
                    children: [O, (0, t.jsxs)("div", {
                        className: s()("paymentModalContent", y().content),
                        children: [T && !j && n !== S.h8.CONFIRM ? (0, t.jsx)(u.Z, {
                            className: y().paymentNote,
                            iconSize: u.Z.Sizes.SMALL,
                            icon: b.Z,
                            color: null == v ? u.Z.Colors.PRIMARY : u.Z.Colors.SECONDARY,
                            children: v
                        }) : null, _ ? null : (0, t.jsx)("div", {
                            className: y().breadcrumbsWrapper,
                            children: (0, t.jsx)(E.Z, {
                                activeId: S.Ck.has(n) ? Y : n,
                                breadcrumbs: r.filter((function(e) {
                                    return !S.Ck.has(e) && !h.has(e)
                                })).map((function(e) {
                                    return {
                                        id: e,
                                        label: (0, S.DJ)(e)
                                    }
                                }))
                            })
                        }), (0, t.jsxs)("div", {
                            className: y().bodyWrapper,
                            children: [null == U ? null : (0, t.jsx)("div", {
                                className: y().errorBlockWrapper,
                                children: (0, t.jsx)(a.FormErrorBlock, {
                                    ref: k,
                                    children: F
                                })
                            }), G ? (0, t.jsx)(a.Spinner, {
                                className: y().loadingBlock
                            }) : (0, t.jsx)(a.Sequencer, {
                                className: y().sequencer,
                                staticClassName: y().sequencerStatic,
                                animatedNodeClassName: y().sequencerAnimatedNode,
                                fillParent: !0,
                                step: n,
                                steps: r,
                                sideMargin: 20,
                                children: (0, t.jsx)(a.AdvancedScrollerThin, {
                                    onScroll: D,
                                    className: s()(y().scroller, K),
                                    children: c
                                })
                            })]
                        })]
                    }), I]
                })
            }
        },
        186413: (e, r, n) => {
            n.r(r);
            n.d(r, {
                StickerPackViewAllModalFooter: () => se,
                default: () => ae
            });
            var t = n(785893),
                o = n(667294),
                i = n(294184),
                c = n.n(i),
                s = n(23279),
                l = n.n(s),
                a = n(202351),
                u = n(142643),
                d = n(304548),
                f = n(879913),
                p = n(782786),
                S = n(83471),
                E = n(159895),
                b = n(799066),
                C = n(383861),
                m = n(473903),
                P = n(709189),
                N = n(406493),
                y = n(116094),
                h = n(421281),
                O = n(842715),
                I = n(38736),
                M = Object.freeze({
                    inspectedStickerPosition: {
                        rowIndex: -1,
                        columnIndex: -1
                    }
                }),
                T = (0, I.Z)((function(e) {
                    return M
                })),
                A = T,
                v = function(e, r, n) {
                    T.setState({
                        inspectedStickerPosition: {
                            rowIndex: r,
                            columnIndex: e,
                            source: n
                        }
                    })
                },
                R = function() {
                    v(-1, -1)
                },
                j = n(217544),
                g = n(78551),
                _ = n(513586),
                L = n(965196),
                G = n(958125),
                B = n(473708),
                k = n(354826),
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

            function K(e, r) {
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
            var w = function(e) {
                    var r = e.stickerPack;
                    return (0, t.jsx)("div", {
                        className: x().features,
                        children: (0, _.X_)(r) ? (0, t.jsx)(d.Tooltip, {
                            tooltipClassName: x().featuresTooltip,
                            position: "top",
                            text: B.Z.Messages.STICKER_PICKER_PACK_DETAILS_ANIMATED,
                            children: function(e) {
                                return (0, t.jsx)(G.Z, K(function(e) {
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
                        className: c()(x().header, r),
                        children: [(0, t.jsxs)("div", {
                            className: x().title,
                            children: [(0, t.jsx)(d.Heading, {
                                className: x().heading,
                                variant: "heading-sm/semibold",
                                children: n.name
                            }), (0, t.jsx)(w, {
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
            var F = n(803961),
                W = n(2590),
                H = n(925437),
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
                            c = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(c = (t = n.next()).done); c = !0) {
                                i.push(t.value);
                                if (r && i.length === r) break
                            }
                        } catch (e) {
                            s = !0;
                            o = e
                        } finally {
                            try {
                                c || null == n.return || n.return()
                            } finally {
                                if (s) throw o
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
            var $ = (0, h.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS),
                ee = (0, h.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING),
                re = (0, h.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN),
                ne = $ + 2 * ee,
                te = l()(R, 250),
                oe = function() {
                    te.cancel()
                },
                ie = function(e) {
                    var r = e.visibleRowIndex,
                        n = e.columnIndex;
                    te.cancel();
                    v(n, r, f.u.MOUSE_EVENT)
                },
                ce = function(e) {
                    var r = e.stickerPack,
                        n = e.width,
                        i = e.hasHeaderImage,
                        s = e.isScrolling,
                        l = e.onInspect,
                        a = o.useMemo((function() {
                            return [(0, _.z)(r)]
                        }), [r]),
                        u = A((function(e) {
                            return e.inspectedStickerPosition
                        })),
                        d = (0, j.el)({
                            stickersCategories: a,
                            stickerNodeMargin: re,
                            stickerNodeWidth: ne,
                            listWidth: n
                        }),
                        f = d.rowCountBySection,
                        p = d.stickersGrid,
                        S = d.gutterWidth;
                    return (0, t.jsxs)("div", {
                        className: c()(Y().container, J({}, Y().containerWithHeader, i)),
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
                                    gutterWidth: S,
                                    inspectedStickerPosition: u,
                                    isScrolling: s,
                                    onInspect: l,
                                    rowIndex: r,
                                    stickerDescriptors: p[r],
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
                se = function(e) {
                    var r = e.onClose,
                        n = e.stickerPack;
                    (0, j.fP)();
                    (0, E.Z$)(b.Z);
                    var o = (0, a.e7)([m.default], (function() {
                            return m.default.getCurrentUser()
                        })),
                        i = (0, a.e7)([g.Z], (function() {
                            return g.Z.isPremiumPack(n.id)
                        })),
                        c = O.Z.useExperiment({
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
                        }), i && !(y.ZP.canUseStickersEverywhere(o) || c) && (0,
                            t.jsxs)(P.C, {
                            color: d.Button.Colors.GREEN,
                            type: "submit",
                            innerClassName: Y().premiumButtonInner,
                            onClick: function() {
                                r();
                                (0, F.Z)({
                                    section: W.jXE.STICKER_PACK_VIEW_ALL
                                })
                            },
                            children: [(0, t.jsx)(N.Z, {
                                className: Y().premiumButtonNitroWheel
                            }), B.Z.Messages.STICKER_PACK_AVAILABLE_WITH_PREMIUM]
                        })]
                    })
                },
                le = function(e) {
                    var r = e.stickerPack,
                        n = e.onClose,
                        o = (0, _.sM)(r, 1024);
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

            function ae(e) {
                var r = e.onClose,
                    n = e.stickerPack,
                    i = z(e, ["onClose", "stickerPack"]),
                    c = q(o.useState(null), 2),
                    s = c[0],
                    l = c[1],
                    a = o.useCallback((function(e) {
                        null !== e && l(e.offsetWidth)
                    }), []);
                o.useLayoutEffect((function() {
                    R()
                }), []);
                return (0, t.jsx)(p.PaymentContextProvider, {
                    activeSubscription: null,
                    stepConfigs: [],
                    skuIDs: [],
                    children: (0, t.jsx)(d.ModalRoot, Q(X({}, i), {
                        "aria-labelledby": "sticker-pack-sku-preview-modal",
                        children: (0, t.jsx)(C.Z, {
                            hideBreadcrumbs: !0,
                            body: (0, t.jsx)("div", {
                                ref: a,
                                children: null != s && (0, t.jsx)(ce, {
                                    stickerPack: n,
                                    hasHeaderImage: !0,
                                    onInspect: ie,
                                    width: s
                                })
                            }),
                            footer: (0, t.jsx)(se, {
                                onClose: r,
                                stickerPack: n
                            }),
                            header: (0, t.jsx)(le, {
                                onClose: r,
                                stickerPack: n
                            }),
                            onScroll: te,
                            steps: [S.h8.SKU_PREVIEW],
                            currentStep: S.h8.SKU_PREVIEW
                        })
                    }))
                })
            }
        },
        669426: (e, r, n) => {
            n.d(r, {
                Z: () => P
            });
            var t = n(785893),
                o = n(667294),
                i = n(294184),
                c = n.n(i),
                s = n(304548),
                l = n(107364),
                a = n(718831),
                u = n(70821),
                d = n.n(u);

            function f(e, r) {
                if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, r, n) {
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

            function E(e, r) {
                return !r || "object" !== C(r) && "function" != typeof r ? function(e) {
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
            var C = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function m(e) {
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
                    return E(this, n)
                }
            }
            const P = function(e) {
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
                var r = m(n);

                function n() {
                    f(this, n);
                    var e;
                    (e = r.apply(this, arguments)).renderBreadcrumb = function(r, n) {
                        var o, i = e.props,
                            l = i.activeId,
                            u = i.onBreadcrumbClick,
                            f = i.breadcrumbs,
                            S = i.renderCustomBreadcrumb,
                            E = i.separatorClassName,
                            b = r.id === l,
                            C = n === f.length - 1,
                            m = null != S ? S(r, b) : (0, t.jsx)("span", {
                                className: c()(d().breadcrumb, (o = {}, p(o, d().activeBreadcrumb, b), p(o, d().interactiveBreadcrumb, null != u), o)),
                                children: r.label
                            });
                        return (0, t.jsxs)("div", {
                            className: c()(d().breadcrumbWrapper, p({}, d().breadcrumbFinalWrapper, C)),
                            children: [null != u ? (0, t.jsx)(s.Clickable, {
                                tag: "span",
                                onClick: function() {
                                    return e.handleClick(r)
                                },
                                className: d().breadcrumbClickWrapper,
                                children: m
                            }) : m, C ? null : (0, t.jsx)(a.Z, {
                                className: c()(d().breadcrumbArrow, E),
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
                        className: c()(d().breadcrumbs, n),
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