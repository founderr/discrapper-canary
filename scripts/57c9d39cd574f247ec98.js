"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [23527], {
        902954: (e, n, t) => {
            t.d(n, {
                Z: () => a
            });
            var r = t(202351),
                o = t(711531),
                i = t(536392);

            function a() {
                var e = (0, r.e7)([i.Z], (function() {
                    return i.Z.getPremiumTypeSubscription()
                }));
                return (0, r.e7)([o.Z], (function() {
                    var n;
                    return null != (null == e ? void 0 : e.paymentSourceId) ? null === (n = o.Z.getPaymentSource(e.paymentSourceId)) || void 0 === n ? void 0 : n.country : null
                }))
            }
        },
        668900: (e, n, t) => {
            t.d(n, {
                Z: () => T,
                U: () => d
            });
            var r = t(785893),
                o = (t(667294), t(294184)),
                i = t.n(o),
                a = t(441143),
                l = t.n(a),
                c = t(818417),
                s = t(348592),
                u = t(260561);
            const _ = (0, u.B)({
                    kind: "user",
                    id: "2022-12_localized_pricing_poland_notice",
                    label: "Localized Pricing Poland Notice",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable Poland Notice",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                I = (0, u.B)({
                    kind: "user",
                    id: "2023-05_localized_pricing_turkey_notice",
                    label: "Localized Pricing Turkey Notice",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable Turkey Notice",
                        config: {
                            enabled: !0
                        }
                    }]
                });
            var O = t(902954),
                f = t(2590),
                N = t(473708),
                E = t(516178),
                p = t.n(E);

            function d() {
                var e = (0, O.Z)(),
                    n = _.useExperiment({
                        location: "5ebfcf_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled,
                    t = I.useExperiment({
                        location: "5ebfcf_2"
                    }, {
                        autoTrackExposure: !1
                    }).enabled;
                return null != e && ("PL" === e ? n : "TR" === e && t)
            }

            function y(e, n) {
                return "PL" === e ? n ? N.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : N.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : "TR" === e ? n ? N.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : N.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : n ? N.Z.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : N.Z.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING
            }
            const T = function(e) {
                var n = e.fromBoostCancelModal,
                    t = e.className,
                    o = (0, O.Z)();
                if (!d()) return null;
                l()(null != o, "Subscription billing country should not be null");
                return (0, r.jsxs)("div", {
                    className: i()(p().noticeRoot, t),
                    children: [(0, r.jsx)("div", {
                        className: p().iconContainer,
                        children: (0, r.jsx)(c.Z, {
                            className: p().infoIcon
                        })
                    }), (0, r.jsx)("div", {
                        className: p().text,
                        children: y(o, n).format({
                            helpCenterLink: s.Z.getArticleURL(f.BhN.LOCALIZED_PRICING)
                        })
                    })]
                })
            }
        },
        159330: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => j
            });
            var r = t(785893),
                o = t(667294),
                i = t(202351),
                a = t(575945),
                l = t(304548),
                c = t(665082),
                s = t(74535),
                u = t(153686),
                _ = t(19585),
                I = t(276611),
                O = t(711531),
                f = t(551778),
                N = t(652591),
                E = t(116094),
                p = t(249052),
                d = t(447246),
                y = t(530562),
                T = t(100749),
                P = t(396546),
                C = t(301162),
                m = t(637700),
                L = t(203600),
                R = t(2590),
                S = t(473708),
                b = t(500982),
                M = t.n(b);

            function g(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function A(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function U(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function Z(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function v(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return g(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return g(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const j = function(e) {
                var n = e.daysLeft,
                    t = e.premiumType,
                    b = e.premiumSubscription,
                    g = e.analyticsSource,
                    j = Z(e, ["daysLeft", "premiumType", "premiumSubscription", "analyticsSource"]),
                    G = (0, s.ZP)(),
                    h = v(o.useState(!1), 2),
                    D = h[0],
                    B = h[1],
                    x = (0, _.Z)(u.Z.PREMIUM_UNCANCEL_MODAL).analyticsLocations,
                    Y = (0, i.e7)([O.Z], (function() {
                        return null != (null == b ? void 0 : b.paymentSourceId) ? O.Z.getPaymentSource(b.paymentSourceId) : null
                    }), [b]),
                    k = v((0, T.ED)({
                        subscriptionId: b.id,
                        renewal: !0,
                        analyticsLocations: (0, _.Z)(u.Z.PREMIUM_UNCANCEL_MODAL),
                        analyticsLocation: u.Z.PREMIUM_UNCANCEL_MODAL
                    }), 1)[0],
                    w = E.ZP.getPlanIdFromInvoice(b, k),
                    W = L.GP[w].skuId,
                    H = (0, i.e7)([f.Z], (function() {
                        return (0, y.oE)(w)
                    }), [w]),
                    F = (0, i.e7)([f.Z], (function() {
                        return f.Z.isFetchingForSKU(W)
                    })),
                    K = null != H ? E.ZP.getDefaultPrice(w) : null,
                    z = E.ZP.getInterval(w),
                    V = z.intervalType,
                    $ = z.intervalCount,
                    q = t === L.p9.TIER_1,
                    J = null != K ? (0, p.T4)(K.amount, K.currency) : null;
                o.useEffect((function() {
                    N.default.track(R.rMx.OPEN_MODAL, {
                        type: "Premium Uncancel Winback",
                        source: g
                    })
                }), [g]);
                return (0, r.jsx)(l.ModalRoot, U(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            A(e, n, t[n])
                        }))
                    }
                    return e
                }({}, j), {
                    className: M().modal,
                    children: D ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(C.Z, {
                            premiumType: t,
                            onClose: j.onClose
                        }), (0, r.jsx)(m.Z, {
                            planId: w,
                            onClose: j.onClose,
                            paymentSourceType: null == Y ? void 0 : Y.type
                        })]
                    }) : (0, r.jsx)(P.Z, {
                        premiumType: t,
                        titleText: q ? S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE_TIER_1.format({
                            daysLeft: n
                        }) : S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE.format({
                            daysLeft: n
                        }),
                        subtitleText: q ? S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE_TIER_1.format() : S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE.format(),
                        footer: (0, r.jsxs)("div", {
                            children: [null !== J ? (0, r.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: function(e) {
                                    switch (V) {
                                        case L.rV.YEAR:
                                            return q ? S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY_TIER_1.format({
                                                price: e
                                            }) : S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY.format({
                                                price: e
                                            });
                                        case L.rV.MONTH:
                                            return q ? S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY_TIER_1.format({
                                                price: e
                                            }) : 1 === $ ? S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY.format({
                                                price: e
                                            }) : S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MULTI_MONTH.format({
                                                price: e,
                                                intervalCount: $
                                            });
                                        default:
                                            throw new Error("Unknown interval type ".concat(V))
                                    }
                                }(J)
                            }) : (0, r.jsx)(l.Spinner, {
                                type: l.SpinnerTypes.SPINNING_CIRCLE
                            }), (0, r.jsxs)("div", {
                                className: M().footer,
                                children: [(0, r.jsx)(l.Button, {
                                    disabled: F,
                                    onClick: function() {
                                        if (null != b) {
                                            var e = (0, d.tD)(w, b.currency, null == Y ? void 0 : Y.id);
                                            if (null != Y && Y.id === b.paymentSourceId && e) {
                                                c.O5(b, x, R.Sbl.UNCANCEL_WINBACK_MODAL);
                                                B(!0)
                                            } else {
                                                j.onClose();
                                                (0, I.Z)({
                                                    initialPlanId: w,
                                                    analyticsLocations: x,
                                                    analyticsLocation: R.Sbl.UNCANCEL_WINBACK_MODAL
                                                })
                                            }
                                        }
                                    },
                                    children: S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_KEEP_NITRO
                                }), (0, r.jsx)(l.Button, {
                                    look: l.Button.Looks.LINK,
                                    color: (0, a.wj)(G) ? l.Button.Colors.WHITE : l.Button.Colors.PRIMARY,
                                    onClick: j.onClose,
                                    children: S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_CANCEL
                                })]
                            })]
                        }),
                        stickyFooter: !0,
                        onClose: j.onClose
                    })
                }))
            }
        }
    }
]);