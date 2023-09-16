"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [64991], {
        464991: (e, n, r) => {
            r.r(n);
            r.d(n, {
                default: () => V
            });
            var t = r(785893),
                i = r(667294),
                a = r(496486),
                o = r.n(a),
                l = r(202351),
                s = r(882723),
                u = r(673679),
                c = r(653224),
                I = r(153686),
                d = r(19585),
                f = r(100749),
                _ = r(597175),
                v = r(668900),
                m = r(16703),
                p = r(509897),
                T = r(646875),
                N = r(775506),
                E = r(551778),
                M = r(536392),
                S = r(107364),
                P = r(930865),
                R = r(116094),
                b = r(249052),
                y = r(263817),
                C = r(203600),
                O = r(520453),
                h = r(473708),
                L = r(766216),
                U = r.n(L);

            function A(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function g(e, n, r, t, i, a, o) {
                try {
                    var l = e[a](o),
                        s = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? n(s) : Promise.resolve(s).then(t, i)
            }

            function x(e) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise((function(t, i) {
                        var a = e.apply(n, r);

                        function o(e) {
                            g(a, t, i, o, l, "next", e)
                        }

                        function l(e) {
                            g(a, t, i, o, l, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function j(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, i, a = [],
                            o = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(o = (t = r.next()).done); o = !0) {
                                a.push(t.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return A(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return A(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Z, D = function(e, n) {
                var r, t, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    },
                    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                function l(a) {
                    return function(l) {
                        return function(a) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, t && (i = 2 & a[0] ? t.return : a[0] ? t.throw || ((i = t.return) && i.call(t), 0) : t.next) && !(i = i.call(t, a[1])).done) return i;
                                (t = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        t = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = n.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                t = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, l])
                    }
                }
            };
            ! function(e) {
                e[e.START = 1] = "START";
                e[e.PREVIEW = 2] = "PREVIEW";
                e[e.CONFIRM = 3] = "CONFIRM"
            }(Z || (Z = {}));

            function G(e) {
                var n = e.premiumSubscription,
                    r = e.isInventory,
                    i = e.onNext,
                    a = e.onClose;
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsxs)(s.ModalHeader, {
                        separator: !1,
                        children: [(0, t.jsx)(s.FormTitle, {
                            tag: s.FormTitleTags.H4,
                            children: r ? h.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_TITLE_INVENTORY : h.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_TITLE_GUILD
                        }), (0, t.jsx)(s.ModalCloseButton, {
                            onClick: a
                        })]
                    }), (0, t.jsxs)(s.ModalContent, {
                        className: U().body,
                        children: [(0, t.jsx)("div", {
                            className: U().cancelImage
                        }), (0, t.jsx)("div", {
                            children: n.isPurchasedExternally && null != n.paymentGateway ? h.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_EXTERNAL.format({
                                paymentGatewayName: O.Vz[n.paymentGateway],
                                subscriptionManagementLink: (0, R.JE)(n.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                            }) : r ? h.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_INVENTORY.format({
                                endDate: n.currentPeriodEnd
                            }) : h.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_GUILD.format({
                                endDate: n.currentPeriodEnd
                            })
                        }), (0, t.jsx)(v.Z, {
                            fromBoostCancelModal: !0
                        })]
                    }), n.isPurchasedExternally ? null : (0, t.jsxs)(s.ModalFooter, {
                        justify: S.Z.Justify.START,
                        children: [(0, t.jsx)(s.Button, {
                            onClick: i,
                            children: h.Z.Messages.NEXT
                        }), (0, t.jsx)(s.Button, {
                            look: s.Button.Looks.LINK,
                            onClick: a,
                            children: h.Z.Messages.CANCEL
                        })]
                    })]
                })
            }

            function w() {
                var e = Object.values(N.Z.boostSlots),
                    n = o().sortBy(e.filter((function(e) {
                        return !(0, P.tl)(e)
                    })), (function(e) {
                        return [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null]
                    }))[0];
                return null != n ? n.id : null
            }

            function B(e, n, r, t) {
                return k.apply(this, arguments)
            }

            function k() {
                return (k = x((function(e, n, r, t) {
                    var i;
                    return D(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                if (null == (i = null != t ? t : w())) throw new Error("No slot to cancel");
                                return [4, (0, c.pD)(i)];
                            case 1:
                                a.sent();
                                return [4, (0, u.Mg)(e, {
                                    items: (0, R.MY)(e, n)
                                }, r)];
                            case 2:
                                a.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function Y(e) {
                var n, r, a = e.premiumSubscription,
                    o = e.guildBoostSlotId,
                    u = e.onBack,
                    c = e.onNext,
                    v = e.onClose,
                    N = j(i.useState(!1), 2),
                    M = N[0],
                    P = N[1],
                    O = j(i.useMemo((function() {
                        try {
                            return [(0, _.g)(a, -1), !1]
                        } catch (e) {
                            return [
                                [], !0
                            ]
                        }
                    }), [a]), 2),
                    L = O[0],
                    A = O[1];
                i.useEffect((function() {
                    A && v()
                }), [A]);
                var g, Z = (0, l.cj)([E.Z], (function() {
                        var e = E.Z.get(a.planId);
                        return {
                            premiumSubscriptionPlan: e,
                            premiumGuildPlan: null != e ? E.Z.getForSkuAndInterval(C.Si.GUILD, e.interval, e.intervalCount) : null
                        }
                    })),
                    G = Z.premiumSubscriptionPlan,
                    w = Z.premiumGuildPlan,
                    k = (0, d.Z)().analyticsLocations,
                    Y = j((0, f.ED)({
                        subscriptionId: a.id,
                        renewal: !0,
                        currency: a.currency,
                        paymentSourceId: a.paymentSourceId,
                        analyticsLocations: k,
                        analyticsLocation: I.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
                    }), 1)[0],
                    F = null != w ? (0, R.Zx)(a, null !== (g = null === (n = L[0]) || void 0 === n ? void 0 : n.quantity) && void 0 !== g ? g : 0, w.id) : null,
                    V = j((0, f.ED)({
                        subscriptionId: a.id,
                        items: F,
                        renewal: !0,
                        analyticsLocations: k,
                        analyticsLocation: I.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW
                    }), 1)[0];
                if (null == V || null == G || null == w || null == Y) return (0, t.jsx)(s.Spinner, {});
                var X = a.items.some((function(e) {
                        var n = e.planId;
                        return !C.Z1.has(n)
                    })),
                    H = X && null == a.renewalMutations || null != (null === (r = a.renewalMutations) || void 0 === r ? void 0 : r.items.find((function(e) {
                        var n = e.planId;
                        return !C.Z1.has(n)
                    }))),
                    W = L.some((function(e) {
                        var n = e.planId;
                        return C.Z1.has(n)
                    })),
                    q = H || W ? V.total - Y.total : -Y.total,
                    $ = G.interval,
                    J = G.intervalCount;
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(y.Z, {
                        onClose: v
                    }), (0, t.jsxs)(s.ModalContent, {
                        className: U().body,
                        children: [(0, t.jsx)("div", {
                            children: h.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_PREVIEW.format({
                                endDate: V.subscriptionPeriodStart
                            })
                        }), (0, t.jsxs)(m.PO, {
                            className: U().invoiceTable,
                            children: [(0, t.jsx)(m.q9, {
                                children: h.Z.Messages.PREMIUM_SUBSCRIPTION_UPDATES
                            }), (0, t.jsx)(m.R$, {
                                label: h.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_INVOICE_SUBSCRIPTION_CANCELLED.format({
                                    subscriptionCount: 1
                                }),
                                value: (0, b.og)((0, b.T4)(q, a.currency), $, J),
                                className: U().invoiceCancelRow
                            }), null != F && F.length > 0 ? (0, t.jsxs)("div", {
                                children: [(0, t.jsx)(m.KU, {}), (0, t.jsx)(T.nd, {
                                    premiumSubscription: a,
                                    renewalInvoice: V,
                                    isUpdate: !0
                                })]
                            }) : null]
                        })]
                    }), (0, t.jsxs)(s.ModalFooter, {
                        align: S.Z.Align.CENTER,
                        justify: S.Z.Justify.BETWEEN,
                        children: [(0, t.jsx)(s.Button, {
                            color: s.Button.Colors.RED,
                            disabled: M,
                            onClick: x((function() {
                                return D(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            e.trys.push([0, 2, , 3]);
                                            P(!0);
                                            return [4, B(a, L, k, o)];
                                        case 1:
                                            e.sent();
                                            c();
                                            return [3, 3];
                                        case 2:
                                            e.sent();
                                            P(!1);
                                            return [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                }))
                            })),
                            children: h.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BUTTON
                        }), (0, t.jsx)(p.Z, {
                            onClick: u
                        })]
                    })]
                })
            }

            function F(e) {
                var n = e.premiumSubscription,
                    r = e.onClose;
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsxs)(s.ModalHeader, {
                        separator: !1,
                        children: [(0, t.jsx)(s.FormTitle, {
                            tag: s.FormTitleTags.H4,
                            children: h.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CONFIRM_TITLE
                        }), (0, t.jsx)(s.ModalCloseButton, {
                            onClick: r
                        })]
                    }), (0,
                        t.jsxs)(s.ModalContent, {
                        className: U().body,
                        children: [(0, t.jsx)("div", {
                            className: U().cancelImage
                        }), (0, t.jsx)("div", {
                            children: h.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CONFIRM_BODY.format({
                                endDate: n.currentPeriodEnd
                            })
                        })]
                    }), (0, t.jsx)(s.ModalFooter, {
                        children: (0, t.jsx)(s.Button, {
                            onClick: r,
                            children: h.Z.Messages.OKAY
                        })
                    })]
                })
            }

            function V(e) {
                var n = e.guildBoostSlot,
                    r = e.transitionState,
                    a = e.onClose;
                i.useEffect((function() {
                    M.Z.hasFetchedSubscriptions() || (0, u.jg)()
                }), []);
                var o, c = (0, l.e7)([M.Z], (function() {
                        return M.Z.getPremiumTypeSubscription()
                    })),
                    f = j(i.useState(Z.START), 2),
                    _ = f[0],
                    v = f[1],
                    m = (0, d.Z)(I.Z.GUILD_BOOST_CANCELLATION_MODAL).AnalyticsLocationProvider;
                if (null == c) o = (0, t.jsx)(s.ModalContent, {
                    children: (0, t.jsx)(s.Spinner, {})
                });
                else switch (_) {
                    case Z.START:
                        o = (0, t.jsx)(G, {
                            premiumSubscription: c,
                            isInventory: null == n.premiumGuildSubscription,
                            onNext: function() {
                                return v(Z.PREVIEW)
                            },
                            onClose: a
                        });
                        break;
                    case Z.PREVIEW:
                        o = (0, t.jsx)(Y, {
                            premiumSubscription: c,
                            guildBoostSlotId: n.id,
                            onBack: function() {
                                return v(Z.START)
                            },
                            onNext: function() {
                                return v(Z.CONFIRM)
                            },
                            onClose: a
                        });
                        break;
                    case Z.CONFIRM:
                        o = (0, t.jsx)(F, {
                            premiumSubscription: c,
                            onClose: a
                        });
                        break;
                    default:
                        throw new Error("Unexpected step: ".concat(_))
                }
                return (0, t.jsx)(m, {
                    children: (0, t.jsx)(s.ModalRoot, {
                        transitionState: r,
                        children: o
                    })
                })
            }
        },
        263817: (e, n, r) => {
            r.d(n, {
                Z: () => _
            });
            var t = r(785893),
                i = (r(667294), r(202351)),
                a = r(882723),
                o = r(316878),
                l = r(437763),
                s = r(107364),
                u = r(630689),
                c = r(171634),
                I = r.n(c);

            function d(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function f(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, i, a = [],
                            o = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(o = (t = r.next()).done); o = !0) {
                                a.push(t.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _(e) {
                var n = e.purchaseState,
                    r = e.currentStep,
                    c = e.onClose,
                    d = f((0, l.z)({
                        purchaseState: n,
                        currentStep: r,
                        initialScene: u.fe.Scenes.ENTRY,
                        purchaseScene: u.fe.Scenes.STARS,
                        errorScene: u.fe.Scenes.ERROR,
                        successScene: u.fe.Scenes.SUCCESS
                    }), 2),
                    _ = d[0],
                    v = d[1],
                    m = (0, i.e7)([o.Z], (function() {
                        return o.Z.useReducedMotion
                    }));
                return (0, t.jsxs)(a.ModalHeader, {
                    align: s.Z.Align.START,
                    className: I().header,
                    separator: !1,
                    children: [(0, t.jsx)(u.fe, {
                        className: I().animation,
                        nextScene: _,
                        onScenePlay: function(e) {
                            return v(u.fe.getNextScene(e))
                        },
                        pauseWhileUnfocused: !1,
                        pause: m
                    }), (0, t.jsx)("div", {
                        className: I().headerTitle
                    }), (0, t.jsx)(a.ModalCloseButton, {
                        onClick: c,
                        className: I().closeButton
                    })]
                })
            }
        },
        597175: (e, n, r) => {
            r.d(n, {
                g: () => I
            });
            var t = r(441143),
                i = r.n(t),
                a = r(551778),
                o = r(116094),
                l = r(203600),
                s = r(2590);

            function u(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function c(e) {
                return function(e) {
                    if (Array.isArray(e)) return u(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return u(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return u(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function I(e, n) {
                var r = a.Z.get(e.planId);
                i()(null != r, "missing premium subscription plan");
                var t = a.Z.getForSkuAndInterval(l.Si.GUILD, r.interval, r.intervalCount);
                i()(null != t, "missing premium guild plan");
                var u = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
                    I = (e.status === s.O0b.CANCELED ? 0 : (0, o.uV)(u)) + n,
                    d = u.filter((function(e) {
                        return e.planId !== t.id
                    }));
                if (I < 0) throw new Error("Invalid adjustment");
                return 0 === I ? d : c(d).concat([{
                    planId: t.id,
                    quantity: I
                }])
            }
        },
        902954: (e, n, r) => {
            r.d(n, {
                Z: () => o
            });
            var t = r(202351),
                i = r(711531),
                a = r(536392);

            function o() {
                var e = (0, t.e7)([a.Z], (function() {
                    return a.Z.getPremiumTypeSubscription()
                }));
                return (0, t.e7)([i.Z], (function() {
                    var n;
                    return null != (null == e ? void 0 : e.paymentSourceId) ? null === (n = i.Z.getPaymentSource(e.paymentSourceId)) || void 0 === n ? void 0 : n.country : null
                }))
            }
        },
        668900: (e, n, r) => {
            r.d(n, {
                Z: () => E,
                U: () => T
            });
            var t = r(785893),
                i = (r(667294), r(294184)),
                a = r.n(i),
                o = r(441143),
                l = r.n(o),
                s = r(265367),
                u = r(348592),
                c = r(260561);
            const I = (0, c.B)({
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
                d = (0, c.B)({
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
            var f = r(902954),
                _ = r(2590),
                v = r(473708),
                m = r(407156),
                p = r.n(m);

            function T() {
                var e = (0, f.Z)(),
                    n = I.useExperiment({
                        location: "5ebfcf_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled,
                    r = d.useExperiment({
                        location: "5ebfcf_2"
                    }, {
                        autoTrackExposure: !1
                    }).enabled;
                return null != e && ("PL" === e ? n : "TR" === e && r)
            }

            function N(e, n) {
                return "PL" === e ? n ? v.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : v.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : "TR" === e ? n ? v.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : v.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : n ? v.Z.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : v.Z.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING
            }
            const E = function(e) {
                var n = e.fromBoostCancelModal,
                    r = e.className,
                    i = (0, f.Z)();
                if (!T()) return null;
                l()(null != i, "Subscription billing country should not be null");
                return (0, t.jsxs)("div", {
                    className: a()(p().noticeRoot, r),
                    children: [(0, t.jsx)("div", {
                        className: p().iconContainer,
                        children: (0, t.jsx)(s.Z, {
                            className: p().infoIcon
                        })
                    }), (0, t.jsx)("div", {
                        className: p().text,
                        children: N(i, n).format({
                            helpCenterLink: u.Z.getArticleURL(_.BhN.LOCALIZED_PRICING)
                        })
                    })]
                })
            }
        },
        437763: (e, n, r) => {
            r.d(n, {
                z: () => s
            });
            var t = r(667294),
                i = r(83471),
                a = r(632826);

            function o(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function l(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, i, a = [],
                            o = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(o = (t = r.next()).done); o = !0) {
                                a.push(t.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return o(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return o(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(e) {
                var n = e.purchaseState,
                    r = e.currentStep,
                    o = e.initialScene,
                    s = e.purchaseScene,
                    u = e.errorScene,
                    c = e.successScene,
                    I = l((0, t.useState)(o), 2),
                    d = I[0],
                    f = I[1];
                (0, t.useEffect)((function() {
                    n === a.A.PURCHASING ? f(s) : n === a.A.FAIL && f(u)
                }), [n, s, u]);
                (0, t.useEffect)((function() {
                    r === i.h8.CONFIRM && f(c)
                }), [r, c]);
                return [d, f]
            }
        },
        16703: (e, n, r) => {
            r.d(n, {
                PO: () => d,
                q9: () => f,
                R$: () => _,
                i$: () => v,
                KU: () => m,
                Ji: () => p,
                HE: () => T
            });
            var t = r(785893),
                i = (r(667294), r(294184)),
                a = r.n(i),
                o = r(73904),
                l = r(249052),
                s = r(473708),
                u = r(884092),
                c = r.n(u);

            function I(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function d(e) {
                var n = e.children,
                    r = e.className;
                return (0, t.jsx)("div", {
                    className: a()(c().table, r),
                    children: n
                })
            }

            function f(e) {
                var n = e.children;
                return (0, t.jsx)("div", {
                    className: c().header,
                    children: n
                })
            }

            function _(e) {
                var n = e.label,
                    r = e.value,
                    i = e.className;
                return (0, t.jsxs)("div", {
                    className: a()(c().row, i),
                    children: [(0, t.jsx)("div", {
                        className: c().rowLabel,
                        children: n
                    }), (0, t.jsx)("div", {
                        className: c().rowAmount,
                        children: r
                    })]
                })
            }

            function v(e) {
                var n = e.label,
                    r = e.value,
                    i = e.discounts,
                    a = e.originalAmount,
                    u = e.interval,
                    I = e.currency,
                    d = e.className,
                    f = e.intervalCount,
                    v = function(e) {
                        return null != i ? i.find((function(n) {
                            return n.type === e
                        })) : null
                    },
                    m = v(o.eW.SUBSCRIPTION_PLAN),
                    p = v(o.eW.ENTITLEMENT),
                    T = null != m ? Math.floor(m.amount / a * 100) : null,
                    N = (0, l.T4)(a, I);
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(_, {
                        label: n,
                        value: (0, t.jsxs)(t.Fragment, {
                            children: [r, null != T ? (0, t.jsxs)("div", {
                                className: c().rowPercentDiscount,
                                children: ["-", T, "%"]
                            }) : null]
                        }),
                        className: d
                    }), null != T ? (0, t.jsxs)("div", {
                        className: c().rowDiscountOriginalPrice,
                        children: ["(", null != u && null != f ? (0, l.og)(N, u, f) : N, ")"]
                    }) : null, null != p ? (0, t.jsx)("div", {
                        className: c().entitlementDiscountRow,
                        children: s.Z.Messages.BILLING_INVOICE_SUBSCRIPTION_CREDIT_APPLIED
                    }) : null]
                })
            }

            function m(e) {
                var n, r = e.extended,
                    i = void 0 !== r && r,
                    o = e.negativeMarginTop,
                    l = void 0 !== o && o;
                return (0, t.jsx)("div", {
                    className: a()(c().divider, (n = {}, I(n, c().dividerExtended, i),
                        I(n, c().negativeMarginTop, l), n))
                })
            }

            function p(e) {
                var n = e.label,
                    r = e.value,
                    i = e.className;
                return (0, t.jsxs)("div", {
                    className: a()(c().totalRow, i),
                    children: [(0, t.jsx)("div", {
                        className: c().totalLabel,
                        children: n
                    }), (0, t.jsx)("div", {
                        className: c().totalAmount,
                        children: r
                    })]
                })
            }

            function T(e) {
                var n = e.children,
                    r = e.className;
                return (0, t.jsx)("div", {
                    className: a()(c().finePrint, r),
                    children: n
                })
            }
        },
        524450: (e, n, r) => {
            r.d(n, {
                Z: () => l
            });
            var t = r(785893),
                i = (r(667294), r(249052)),
                a = r(16703),
                o = r(473708);

            function l(e) {
                var n = e.invoice;
                return n.taxInclusive || n.tax <= 0 ? null : (0, t.jsx)(a.R$, {
                    label: o.Z.Messages.ESTIMATED_TAX_LABEL,
                    value: (0, i.T4)(n.tax, n.currency)
                })
            }
        },
        509897: (e, n, r) => {
            r.d(n, {
                Z: () => s
            });
            var t = r(785893),
                i = (r(667294), r(882723)),
                a = r(473708),
                o = r(362601),
                l = r.n(o);
            const s = function(e) {
                var n = e.onClick;
                return (0, t.jsx)(i.Anchor, {
                    onClick: n,
                    className: l().link,
                    children: a.Z.Messages.BACK
                })
            }
        },
        646875: (e, n, r) => {
            r.d(n, {
                As: () => D,
                By: () => G,
                Lu: () => w,
                hG: () => Y,
                nd: () => X,
                e9: () => H,
                yT: () => W
            });
            var t = r(785893),
                i = r(667294),
                a = r(294184),
                o = r.n(a),
                l = r(441143),
                s = r.n(l),
                u = r(202351),
                c = r(882723),
                I = r(73904),
                d = r(153686),
                f = r(19585),
                _ = r(551778),
                v = r(718831),
                m = r(771966),
                p = r(348592),
                T = r(116094),
                N = r(249052),
                E = r(100749),
                M = r(71103),
                S = r(717035),
                P = r(16703),
                R = r(524450),
                b = r(203600),
                y = r(2590),
                C = r(473708),
                O = r(154342),
                h = r.n(O);

            function L(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function U(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function A(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    t.forEach((function(n) {
                        U(e, n, r[n])
                    }))
                }
                return e
            }

            function g(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        r.push.apply(r, t)
                    }
                    return r
                }(Object(n)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
                }));
                return e
            }

            function x(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, i, a = [],
                            o = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(o = (t = r.next()).done); o = !0) {
                                a.push(t.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return L(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return L(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var j = function(e, n) {
                var r;
                return !!(null === (r = e.discounts) || void 0 === r ? void 0 : r.some((function(e) {
                    return e.type === n
                })))
            };

            function Z(e) {
                var n, r = e.invoiceItem,
                    i = e.overrideAmount,
                    a = e.showGuildSubscriptionAdjustmentTooltip,
                    o = e.currency,
                    l = e.className,
                    d = e.isPrepaidPaymentSource,
                    f = e.referralTrialOfferId,
                    v = (0, u.e7)([_.Z], (function() {
                        return _.Z.get(r.subscriptionPlanId)
                    })),
                    p = null === (n = (0, S.N)(f)) || void 0 === n ? void 0 : n.subscription_trial;
                s()(null != v, "Missing subscriptionPlan");
                var E = (0, T.if)({
                        intervalType: null == p ? void 0 : p.interval,
                        intervalCount: null == p ? void 0 : p.interval_count
                    }),
                    M = function(e, n, r, t) {
                        var i = j(e, I.eW.PREMIUM_TRIAL);
                        switch (e.subscriptionPlanId) {
                            case b.Xh.PREMIUM_MONTH_LEGACY:
                            case b.Xh.PREMIUM_YEAR_LEGACY:
                            case b.Xh.PREMIUM_MONTH_TIER_0:
                            case b.Xh.PREMIUM_YEAR_TIER_0:
                            case b.Xh.PREMIUM_MONTH_TIER_1:
                            case b.Xh.PREMIUM_YEAR_TIER_1:
                            case b.Xh.PREMIUM_MONTH_TIER_2:
                            case b.Xh.PREMIUM_YEAR_TIER_2:
                            case b.Xh.PREMIUM_3_MONTH_TIER_2:
                            case b.Xh.PREMIUM_6_MONTH_TIER_2:
                                return (0, T.Gf)(e.subscriptionPlanId, i, r, t);
                            case b.Xh.PREMIUM_3_MONTH_GUILD:
                            case b.Xh.PREMIUM_6_MONTH_GUILD:
                                return C.Z.Messages.PREMIUM_GUILD_NUM_MULTI_MONTHS_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity,
                                    intervalCount: n.intervalCount
                                });
                            case b.Xh.PREMIUM_MONTH_GUILD:
                                return C.Z.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity
                                });
                            case b.Xh.PREMIUM_YEAR_GUILD:
                                return C.Z.Messages.PREMIUM_GUILD_NUM_YEAR_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity
                                })
                        }
                        switch (n.interval) {
                            case b.rV.MONTH:
                                return 1 === n.intervalCount ? C.Z.Messages.MONTHLY_GUILD_SUBSCRIPTION.format({
                                    planName: n.name
                                }) : C.Z.Messages.MULTI_MONTHS_GUILD_SUBSCRIPTION.format({
                                    planName: n.name,
                                    intervalCount: n.intervalCount
                                });
                            case b.rV.YEAR:
                                return C.Z.Messages.YEARLY_GUILD_SUBSCRIPTION.format({
                                    planName: n.name
                                })
                        }
                        throw new Error("Unexpected invoice plan: ".concat(e.subscriptionPlanId))
                    }(r, v, d, E);
                !0 === a && (M = (0, t.jsxs)("div", {
                    className: h().invoiceItemLabelWithIcon,
                    children: [(0, t.jsxs)("div", {
                        children: [M, " "]
                    }), (0, t.jsx)(c.Tooltip, {
                        text: C.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                        "aria-label": C.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT,
                        tooltipClassName: h().invoiceItemTooltip,
                        children: function(e) {
                            return (0, t.jsx)(m.Z, g(A({}, e), {
                                className: h().invoiceItemLabelIcon
                            }))
                        }
                    })]
                }));
                var R = (0, N.T4)(null != i ? i : r.amount, o),
                    y = d ? R : (0, N.og)(R, v.interval, v.intervalCount);
                return (0, t.jsx)(P.i$, {
                    label: M,
                    value: y,
                    originalAmount: r.subscriptionPlanPrice * r.quantity,
                    discounts: r.discounts,
                    interval: v.interval,
                    intervalCount: v.intervalCount,
                    currency: o,
                    className: l
                })
            }

            function D(e) {
                var n = e.label,
                    r = e.tooltipText,
                    i = e.tooltipAriaLabel;
                return (0, t.jsxs)("div", {
                    className: h().invoiceItemLabelWithIcon,
                    children: [n, (0, t.jsx)(c.Tooltip, {
                        clickableOnMobile: !0,
                        text: r,
                        "aria-label": i,
                        tooltipClassName: h().invoiceItemTooltip,
                        children: function(e) {
                            return (0, t.jsx)(m.Z, g(A({}, e), {
                                className: h().invoiceItemLabelIcon
                            }))
                        }
                    })]
                })
            }

            function G(e) {
                var n = e.invoice,
                    r = e.isPrepaidPaymentSource,
                    i = (0, M.j)(n.invoiceItems),
                    a = i.find((function(e) {
                        return !(0, T.Z8)(e.subscriptionPlanId) && e.amount >= 0
                    })),
                    o = i.find((function(e) {
                        return (0, T.Z8)(e.subscriptionPlanId) && e.amount >= 0
                    })),
                    l = (0, u.e7)([_.Z], (function() {
                        return null != o ? _.Z.get(o.subscriptionPlanId) : null
                    })),
                    s = null != o ? o.amount : 0,
                    c = (0, N.T4)(s, n.currency),
                    I = null != l ? (0, N.og)(c, l.interval, l.intervalCount) : 0;
                return (0, t.jsxs)(t.Fragment, {
                    children: [null != a ? (0, t.jsx)(Z, {
                        invoiceItem: a,
                        currency: n.currency,
                        isPrepaidPaymentSource: r
                    }) : null, 0 !== s && null != o && null != l ? (0, t.jsx)(P.R$, {
                        label: C.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_INVOICE_ROW_CONTENT.format({
                            numGuildSubscriptions: o.quantity,
                            planName: (0, T.Gf)(l.id, !1, r)
                        }),
                        value: r ? c : I
                    }) : null, (0, t.jsx)(R.Z, {
                        invoice: n
                    }), (0,
                        t.jsx)(P.KU, {}), (0, t.jsx)(P.Ji, {
                        label: (n.taxInclusive ? r ? C.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : C.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : C.Z.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
                        value: n.currency === y.pKx.USD ? (0, N.T4)(n.total, n.currency) : "".concat((0, N.T4)(n.total, n.currency), "*")
                    })]
                })
            }

            function w(e) {
                var n = e.invoice,
                    r = e.newPlan,
                    i = e.isPrepaidPaymentSource,
                    a = e.referralTrialOfferId,
                    o = (0, M.j)(n.invoiceItems),
                    l = o.find((function(e) {
                        return e.subscriptionPlanId === r.id
                    }));
                s()(null != l, "Expected newPlanInvoiceItem");
                var u = o.find((function(e) {
                        return !(0, T.Z8)(e.subscriptionPlanId) && e.amount < 0
                    })),
                    c = o.find((function(e) {
                        return null == e.subscriptionPlanId && null != e.discounts && e.discounts.find((function(e) {
                            return e.type === I.eW.PREMIUM_LEGACY_UPGRADE_PROMOTION
                        }))
                    })),
                    d = j(l, I.eW.PREMIUM_TRIAL),
                    f = l.quantity * l.subscriptionPlanPrice,
                    _ = l.amount + (null != u ? u.amount : 0) - f + (null != c ? c.amount : 0),
                    v = o.filter((function(e) {
                        return e.subscriptionPlanId === b.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === b.Xh.PREMIUM_YEAR_GUILD
                    })).reduce((function(e, n) {
                        return e + n.amount
                    }), 0);
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(Z, {
                        invoiceItem: l,
                        currency: n.currency,
                        overrideAmount: f,
                        isPrepaidPaymentSource: i,
                        referralTrialOfferId: a
                    }), 0 === _ || d ? null : (0, t.jsx)(P.R$, {
                        label: (0, t.jsx)(D, {
                            label: C.Z.Messages.PREMIUM_SUBSCRIPTION_PLAN_ADJUSTMENT.format({
                                planName: (0, T.PV)(r.id) ? (0, T.aq)(r.id) : r.name
                            }),
                            tooltipText: C.Z.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP
                        }),
                        value: (0, N.T4)(_, n.currency)
                    }), 0 !== v ? (0, t.jsx)(P.R$, {
                        label: (0, t.jsx)(D, {
                            label: C.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT,
                            tooltipText: C.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                            tooltipAriaLabel: C.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT
                        }),
                        value: (0, N.T4)(v, n.currency)
                    }) : null, (0, t.jsx)(R.Z, {
                        invoice: n
                    }), (0, t.jsx)(P.KU, {}), (0, t.jsx)(P.Ji, {
                        label: (n.taxInclusive ? i ? C.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : C.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : C.Z.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
                        value: n.currency === y.pKx.USD ? (0, N.T4)(n.total, n.currency) : "".concat((0, N.T4)(n.total, n.currency), "*")
                    })]
                })
            }

            function B(e) {
                var n = e.slice();
                n.sort((function(e, n) {
                    var r = (0, T.uZ)(e.subscriptionPlanId),
                        t = (0, T.uZ)(n.subscriptionPlanId);
                    return r && !t ? -1 : !r && t ? 1 : 0
                }));
                return n
            }

            function k(e) {
                return e.filter((function(e) {
                    var n = e.subscriptionPlanId;
                    return n !== b.Xh.NONE_MONTH && n !== b.Xh.NONE_YEAR
                }))
            }

            function Y(e) {
                var n = e.proratedInvoice,
                    r = e.renewalInvoice,
                    i = (0, T.dn)(n),
                    a = i.intervalType,
                    o = i.intervalCount,
                    l = (0, T.dn)(r),
                    s = l.intervalType,
                    u = l.intervalCount;
                return a !== s || o !== u || n.subscriptionPeriodEnd.getTime() === r.subscriptionPeriodStart.getTime() ? null : (0, t.jsx)("div", {
                    className: h().subscriptionPeriodResetNotice,
                    children: C.Z.Messages.PREMIUM_SUBSCRIPTION_PERIOD_RESET_NOTICE.format({
                        renewalDate: n.subscriptionPeriodEnd
                    })
                })
            }

            function F(e) {
                var n = e.isUpdate,
                    r = e.currentInvoice,
                    i = e.newInvoice,
                    a = null != r ? (0, M.j)(r.invoiceItems) : null,
                    l = null != r ? (0, T.dn)(r) : null,
                    s = (0, T.dn)(i),
                    u = s.intervalType,
                    c = s.intervalCount,
                    I = null != l && (l.intervalType !== u || l.intervalCount !== c);
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(P.KU, {
                        extended: !0
                    }), null != r ? (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(P.q9, {
                            children: C.Z.Messages.PREMIUM_SUBSCRIPTION_CURRENT_LABEL
                        }), k(B((0, M.j)(r.invoiceItems))).map((function(e) {
                            return (0, t.jsx)(Z, {
                                invoiceItem: e,
                                currency: r.currency
                            }, e.id)
                        })), (0, t.jsx)(P.KU, {
                            extended: !0
                        })]
                    }) : null, (0, t.jsx)(P.q9, {
                        children: C.Z.Messages.PREMIUM_SUBSCRIPTION_NEW_LABEL
                    }), k(B((0, M.j)(i.invoiceItems))).map((function(e) {
                        var r = null != a && !a.some((function(n) {
                            return n.subscriptionPlanId === e.subscriptionPlanId && n.quantity === e.quantity
                        }));
                        return (0, t.jsx)(Z, {
                            invoiceItem: e,
                            currency: i.currency,
                            showGuildSubscriptionAdjustmentTooltip: I && (e.subscriptionPlanId === b.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === b.Xh.PREMIUM_YEAR_GUILD || e.subscriptionPlanId === b.Xh.PREMIUM_3_MONTH_GUILD || e.subscriptionPlanId === b.Xh.PREMIUM_6_MONTH_GUILD),
                            className: o()(U({}, h().subscriptionAddedInvoiceItem, !n || r))
                        }, e.id)
                    })), (0, t.jsx)(R.Z, {
                        invoice: i
                    }), (0, t.jsx)(P.KU, {}), (0, t.jsx)(P.R$, {
                        label: C.Z.Messages.PREMIUM_SUBSCRIPTION_NEW_TOTAL,
                        value: (0, N.og)((0, N.T4)(i.total, i.currency), u, c),
                        className: h().subscriptionCostRow
                    })]
                })
            }

            function V(e) {
                var n, r = e.proratedInvoice,
                    i = e.renewalInvoice,
                    a = e.isTrial,
                    o = e.isUpdate,
                    l = e.overrideRenewalDate,
                    s = e.trialFooterMessageOverride,
                    u = null === (n = (0, S.N)()) || void 0 === n ? void 0 : n.subscription_trial,
                    c = (0, T.dn)(i),
                    I = c.intervalType,
                    d = c.intervalCount;
                if (a) {
                    var f = (0, T.if)({
                            intervalType: null == u ? void 0 : u.interval,
                            intervalCount: null == u ? void 0 : u.interval_count
                        }),
                        _ = (null == u ? void 0 : u.interval) === b.rV.DAY && (null == u ? void 0 : u.interval_count) < 28 ? 2 : 7;
                    return (0, t.jsx)(t.Fragment, {
                        children: null != s ? s : C.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TRIAL_DURATION.format({
                            duration: f,
                            days: _,
                            contactLink: y.EYA.CONTACT,
                            helpdeskArticle: p.Z.getArticleURL(y.BhN.PREMIUM_TRIAL)
                        })
                    })
                }
                var v = i.taxInclusive ? C.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER : C.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TAX_EXCLUSIVE;
                return (0, t.jsx)(t.Fragment, {
                    children: v.format({
                        rate: (0, N.og)((0, N.T4)(i.subtotal, i.currency), I, d),
                        renewalDate: null != l ? l : o ? null != r ? r.subscriptionPeriodEnd : i.subscriptionPeriodStart : i.subscriptionPeriodEnd,
                        contactLink: y.EYA.CONTACT,
                        helpdeskArticle: p.Z.getArticleURL(y.BhN.BILLING)
                    })
                })
            }

            function X(e) {
                var n = e.premiumSubscription,
                    r = e.proratedInvoice,
                    a = e.renewalInvoice,
                    o = e.overrideRenewalDate,
                    l = e.isUpdate,
                    s = void 0 !== l && l,
                    u = e.isTrial,
                    I = void 0 !== u && u,
                    _ = e.priceOptions,
                    m = void 0 === _ ? void 0 : _,
                    p = e.isPrepaidPaymentSource,
                    T = void 0 !== p && p,
                    N = e.trialFooterMessageOverride,
                    M = e.hideSubscriptionDetails,
                    S = void 0 !== M && M,
                    R = (0, f.Z)().analyticsLocations,
                    b = A({
                        subscriptionId: null == n ? void 0 : n.id,
                        renewal: !0,
                        preventFetch: !s,
                        analyticsLocatinons: R,
                        analyticsLocation: d.Z.SUBSCRIPTION_INVOICE_FOOTER
                    }, m),
                    y = x((0, E.ED)(b), 1)[0],
                    O = x(i.useState(!1), 2),
                    L = O[0],
                    U = O[1];
                return (0, t.jsxs)(t.Fragment, {
                    children: [T ? null : (0, t.jsx)(P.HE, {
                        children: (0, t.jsx)(V, {
                            proratedInvoice: r,
                            renewalInvoice: a,
                            isTrial: I,
                            isUpdate: s,
                            overrideRenewalDate: o,
                            trialFooterMessageOverride: N
                        })
                    }), !S && (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsxs)(c.Clickable, {
                            onClick: function() {
                                return U((function(e) {
                                    return !e
                                }))
                            },
                            className: h().subscriptionDetailsToggle,
                            children: [L ? C.Z.Messages.PREMIUM_SUBSCRIPTION_HIDE_DETAILS : C.Z.Messages.PREMIUM_SUBSCRIPTION_SHOW_DETAILS, (0, t.jsx)(v.Z, {
                                direction: L ? v.Z.Directions.UP : v.Z.Directions.DOWN,
                                className: h().subscriptionDetailsToggleCaret
                            })]
                        }), L ? (0, t.jsx)(F, {
                            isUpdate: s,
                            currentInvoice: y,
                            newInvoice: a
                        }) : null]
                    })]
                })
            }

            function H(e) {
                var n = e.plan,
                    r = e.className,
                    i = e.paymentSourceId,
                    a = e.isPrepaidPaymentSource,
                    o = void 0 !== a && a,
                    l = (0, T.aS)(n.id, !1, !0, {
                        paymentSourceId: i
                    });
                return (0, t.jsx)(P.PO, {
                    className: r,
                    children: (0,
                        t.jsx)(P.R$, {
                        label: C.Z.Messages.BILLING_INVOICE_GIFT_PLAN.format({
                            planName: (0, T.Gf)(n.id, !1, o)
                        }),
                        value: (0, N.T4)(l.amount, l.currency),
                        className: h().subscriptionCostRow
                    })
                })
            }

            function W(e) {
                var n = e.invoice,
                    r = e.plan,
                    i = (0, M.j)(n.invoiceItems).find((function(e) {
                        return e.subscriptionPlanId === r.id
                    }));
                s()(null != i, "newPlanInvoiceItem can not be null");
                if (r.interval === b.rV.MONTH) return (0, t.jsx)(c.Text, {
                    variant: "text-md/normal",
                    children: C.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL.format({
                        price: (0, N.T4)(i.subscriptionPlanPrice, n.currency)
                    })
                });
                if (r.interval === b.rV.YEAR) return (0, t.jsx)(c.Text, {
                    variant: "text-md/normal",
                    children: C.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL.format({
                        price: (0, N.T4)(i.subscriptionPlanPrice, n.currency)
                    })
                });
                s()(!1, "Invalid interval type")
            }
        }
    }
]);
//# sourceMappingURL=439760c7a1a952263bc2.js.map