"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [64991], {
        464991: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => V
            });
            var r = t(785893),
                a = t(667294),
                i = t(496486),
                o = t.n(i),
                l = t(202351),
                s = t(304548),
                u = t(673679),
                c = t(653224),
                d = t(153686),
                I = t(19585),
                f = t(100749),
                p = t(597175),
                E = t(668900),
                m = t(16703),
                _ = t(509897),
                S = t(646875),
                T = t(775506),
                N = t(551778),
                v = t(536392),
                O = t(107364),
                h = t(930865),
                y = t(116094),
                R = t(249052),
                P = t(263817),
                b = t(203600),
                A = t(520453),
                L = t(473708),
                M = t(67793),
                g = t.n(M);

            function C(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function D(e, n, t, r, a, i, o) {
                try {
                    var l = e[i](o),
                        s = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(s) : Promise.resolve(s).then(r, a)
            }

            function U(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var i = e.apply(n, t);

                        function o(e) {
                            D(i, r, a, o, l, "next", e)
                        }

                        function l(e) {
                            D(i, r, a, o, l, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function x(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, i = [],
                            o = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return C(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return C(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var j, Z = function(e, n) {
                var t, r, a, i, o = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    },
                    "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, i[1])).done) return a;
                                (r = 0, a) && (i = [2 & i[0], a.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        a = i;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                            o.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && o.label < a[1]) {
                                            o.label = a[1];
                                            a = i;
                                            break
                                        }
                                        if (a && o.label < a[2]) {
                                            o.label = a[2];
                                            o.ops.push(i);
                                            break
                                        }
                                        a[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                i = n.call(e, o)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, l])
                    }
                }
            };
            ! function(e) {
                e[e.START = 1] = "START";
                e[e.PREVIEW = 2] = "PREVIEW";
                e[e.CONFIRM = 3] = "CONFIRM"
            }(j || (j = {}));

            function B(e) {
                var n = e.premiumSubscription,
                    t = e.isInventory,
                    a = e.onNext,
                    i = e.onClose;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(s.ModalHeader, {
                        separator: !1,
                        children: [(0, r.jsx)(s.FormTitle, {
                            tag: s.FormTitleTags.H4,
                            children: t ? L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_TITLE_INVENTORY : L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_TITLE_GUILD
                        }), (0, r.jsx)(s.ModalCloseButton, {
                            onClick: i
                        })]
                    }), (0, r.jsxs)(s.ModalContent, {
                        className: g().body,
                        children: [(0, r.jsx)("div", {
                            className: g().cancelImage
                        }), (0, r.jsx)("div", {
                            children: n.isPurchasedExternally && null != n.paymentGateway ? L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_EXTERNAL.format({
                                paymentGatewayName: A.Vz[n.paymentGateway],
                                subscriptionManagementLink: (0, y.JE)(n.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                            }) : t ? L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_INVENTORY.format({
                                endDate: n.currentPeriodEnd
                            }) : L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_GUILD.format({
                                endDate: n.currentPeriodEnd
                            })
                        }), (0, r.jsx)(E.Z, {
                            fromBoostCancelModal: !0
                        })]
                    }), n.isPurchasedExternally ? null : (0, r.jsxs)(s.ModalFooter, {
                        justify: O.Z.Justify.START,
                        children: [(0, r.jsx)(s.Button, {
                            onClick: a,
                            children: L.Z.Messages.NEXT
                        }), (0, r.jsx)(s.Button, {
                            look: s.Button.Looks.LINK,
                            onClick: i,
                            children: L.Z.Messages.CANCEL
                        })]
                    })]
                })
            }

            function G() {
                var e = Object.values(T.Z.boostSlots),
                    n = o().sortBy(e.filter((function(e) {
                        return !(0, h.tl)(e)
                    })), (function(e) {
                        return [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null]
                    }))[0];
                return null != n ? n.id : null
            }

            function w(e, n, t, r) {
                return k.apply(this, arguments)
            }

            function k() {
                return (k = U((function(e, n, t, r) {
                    var a;
                    return Z(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                if (null == (a = null != r ? r : G())) throw new Error("No slot to cancel");
                                return [4, (0, c.pD)(a)];
                            case 1:
                                i.sent();
                                return [4, (0, u.Mg)(e, {
                                    items: (0, y.MY)(e, n)
                                }, t)];
                            case 2:
                                i.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function Y(e) {
                var n, t, i = e.premiumSubscription,
                    o = e.guildBoostSlotId,
                    u = e.onBack,
                    c = e.onNext,
                    E = e.onClose,
                    T = x(a.useState(!1), 2),
                    v = T[0],
                    h = T[1],
                    A = x(a.useMemo((function() {
                        try {
                            return [(0, p.g)(i, -1), !1]
                        } catch (e) {
                            return [
                                [], !0
                            ]
                        }
                    }), [i]), 2),
                    M = A[0],
                    C = A[1];
                a.useEffect((function() {
                    C && E()
                }), [C]);
                var D, j = (0, l.cj)([N.Z], (function() {
                        var e = N.Z.get(i.planId);
                        return {
                            premiumSubscriptionPlan: e,
                            premiumGuildPlan: null != e ? N.Z.getForSkuAndInterval(b.Si.GUILD, e.interval, e.intervalCount) : null
                        }
                    })),
                    B = j.premiumSubscriptionPlan,
                    G = j.premiumGuildPlan,
                    k = (0, I.Z)().analyticsLocations,
                    Y = x((0, f.ED)({
                        subscriptionId: i.id,
                        renewal: !0,
                        currency: i.currency,
                        paymentSourceId: i.paymentSourceId,
                        analyticsLocations: k,
                        analyticsLocation: d.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
                    }), 1)[0],
                    F = null != G ? (0, y.Zx)(i, null !== (D = null === (n = M[0]) || void 0 === n ? void 0 : n.quantity) && void 0 !== D ? D : 0, G.id) : null,
                    V = x((0, f.ED)({
                        subscriptionId: i.id,
                        items: F,
                        renewal: !0,
                        analyticsLocations: k,
                        analyticsLocation: d.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW
                    }), 1)[0];
                if (null == V || null == B || null == G || null == Y) return (0, r.jsx)(s.Spinner, {});
                var H = i.items.some((function(e) {
                        var n = e.planId;
                        return !b.Z1.has(n)
                    })),
                    W = H && null == i.renewalMutations || null != (null === (t = i.renewalMutations) || void 0 === t ? void 0 : t.items.find((function(e) {
                        var n = e.planId;
                        return !b.Z1.has(n)
                    }))),
                    X = M.some((function(e) {
                        var n = e.planId;
                        return b.Z1.has(n)
                    })),
                    q = W || X ? V.total - Y.total : -Y.total,
                    K = B.interval,
                    $ = B.intervalCount;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(P.Z, {
                        onClose: E
                    }), (0, r.jsxs)(s.ModalContent, {
                        className: g().body,
                        children: [(0, r.jsx)("div", {
                            children: L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_PREVIEW.format({
                                endDate: V.subscriptionPeriodStart
                            })
                        }), (0, r.jsxs)(m.PO, {
                            className: g().invoiceTable,
                            children: [(0, r.jsx)(m.q9, {
                                children: L.Z.Messages.PREMIUM_SUBSCRIPTION_UPDATES
                            }), (0, r.jsx)(m.R$, {
                                label: L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_INVOICE_SUBSCRIPTION_CANCELLED.format({
                                    subscriptionCount: 1
                                }),
                                value: (0, R.og)((0, R.T4)(q, i.currency), K, $),
                                className: g().invoiceCancelRow
                            }), null != F && F.length > 0 ? (0, r.jsxs)("div", {
                                children: [(0, r.jsx)(m.KU, {}), (0, r.jsx)(S.nd, {
                                    premiumSubscription: i,
                                    renewalInvoice: V,
                                    isUpdate: !0
                                })]
                            }) : null]
                        })]
                    }), (0, r.jsxs)(s.ModalFooter, {
                        align: O.Z.Align.CENTER,
                        justify: O.Z.Justify.BETWEEN,
                        children: [(0, r.jsx)(s.Button, {
                            color: s.Button.Colors.RED,
                            disabled: v,
                            onClick: U((function() {
                                return Z(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            e.trys.push([0, 2, , 3]);
                                            h(!0);
                                            return [4, w(i, M, k, o)];
                                        case 1:
                                            e.sent();
                                            c();
                                            return [3, 3];
                                        case 2:
                                            e.sent();
                                            h(!1);
                                            return [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                }))
                            })),
                            children: L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BUTTON
                        }), (0, r.jsx)(_.Z, {
                            onClick: u
                        })]
                    })]
                })
            }

            function F(e) {
                var n = e.premiumSubscription,
                    t = e.onClose;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(s.ModalHeader, {
                        separator: !1,
                        children: [(0, r.jsx)(s.FormTitle, {
                            tag: s.FormTitleTags.H4,
                            children: L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CONFIRM_TITLE
                        }), (0, r.jsx)(s.ModalCloseButton, {
                            onClick: t
                        })]
                    }), (0,
                        r.jsxs)(s.ModalContent, {
                        className: g().body,
                        children: [(0, r.jsx)("div", {
                            className: g().cancelImage
                        }), (0, r.jsx)("div", {
                            children: L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CONFIRM_BODY.format({
                                endDate: n.currentPeriodEnd
                            })
                        })]
                    }), (0, r.jsx)(s.ModalFooter, {
                        children: (0, r.jsx)(s.Button, {
                            onClick: t,
                            children: L.Z.Messages.OKAY
                        })
                    })]
                })
            }

            function V(e) {
                var n = e.guildBoostSlot,
                    t = e.transitionState,
                    i = e.onClose;
                a.useEffect((function() {
                    v.Z.hasFetchedSubscriptions() || (0, u.jg)()
                }), []);
                var o, c = (0, l.e7)([v.Z], (function() {
                        return v.Z.getPremiumTypeSubscription()
                    })),
                    f = x(a.useState(j.START), 2),
                    p = f[0],
                    E = f[1],
                    m = (0, I.Z)(d.Z.GUILD_BOOST_CANCELLATION_MODAL).AnalyticsLocationProvider;
                if (null == c) o = (0, r.jsx)(s.ModalContent, {
                    children: (0, r.jsx)(s.Spinner, {})
                });
                else switch (p) {
                    case j.START:
                        o = (0, r.jsx)(B, {
                            premiumSubscription: c,
                            isInventory: null == n.premiumGuildSubscription,
                            onNext: function() {
                                return E(j.PREVIEW)
                            },
                            onClose: i
                        });
                        break;
                    case j.PREVIEW:
                        o = (0, r.jsx)(Y, {
                            premiumSubscription: c,
                            guildBoostSlotId: n.id,
                            onBack: function() {
                                return E(j.START)
                            },
                            onNext: function() {
                                return E(j.CONFIRM)
                            },
                            onClose: i
                        });
                        break;
                    case j.CONFIRM:
                        o = (0, r.jsx)(F, {
                            premiumSubscription: c,
                            onClose: i
                        });
                        break;
                    default:
                        throw new Error("Unexpected step: ".concat(p))
                }
                return (0, r.jsx)(m, {
                    children: (0, r.jsx)(s.ModalRoot, {
                        transitionState: t,
                        children: o
                    })
                })
            }
        },
        263817: (e, n, t) => {
            t.d(n, {
                Z: () => p
            });
            var r = t(785893),
                a = (t(667294), t(202351)),
                i = t(304548),
                o = t(316878),
                l = t(437763),
                s = t(107364),
                u = t(630689),
                c = t(728531),
                d = t.n(c);

            function I(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function f(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, i = [],
                            o = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return I(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return I(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function p(e) {
                var n = e.purchaseState,
                    t = e.currentStep,
                    c = e.onClose,
                    I = f((0, l.z)({
                        purchaseState: n,
                        currentStep: t,
                        initialScene: u.fe.Scenes.ENTRY,
                        purchaseScene: u.fe.Scenes.STARS,
                        errorScene: u.fe.Scenes.ERROR,
                        successScene: u.fe.Scenes.SUCCESS
                    }), 2),
                    p = I[0],
                    E = I[1],
                    m = (0, a.e7)([o.Z], (function() {
                        return o.Z.useReducedMotion
                    }));
                return (0, r.jsxs)(i.ModalHeader, {
                    align: s.Z.Align.START,
                    className: d().header,
                    separator: !1,
                    children: [(0, r.jsx)(u.fe, {
                        className: d().animation,
                        nextScene: p,
                        onScenePlay: function(e) {
                            return E(u.fe.getNextScene(e))
                        },
                        pauseWhileUnfocused: !1,
                        pause: m
                    }), (0, r.jsx)("div", {
                        className: d().headerTitle
                    }), (0, r.jsx)(i.ModalCloseButton, {
                        onClick: c,
                        className: d().closeButton
                    })]
                })
            }
        },
        786483: (e, n, t) => {
            t.d(n, {
                s: () => a
            });
            var r = (0, t(260561).B)({
                id: "2023-05_checkout_terms_of_service",
                label: "Checkout Terms of Service",
                kind: "user",
                defaultConfig: {
                    bucket: 0,
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "remove-checkbox-with-ui-changes",
                    config: {
                        bucket: 1,
                        enabled: !0
                    }
                }, {
                    id: 2,
                    label: "remove-checkbox-only",
                    config: {
                        bucket: 2,
                        enabled: !0
                    }
                }]
            });

            function a(e) {
                var n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    autoTrackExposure: !0
                }).autoTrackExposure;
                return r.getCurrentConfig({
                    location: e
                }, {
                    autoTrackExposure: n
                })
            }
        },
        597175: (e, n, t) => {
            t.d(n, {
                g: () => d
            });
            var r = t(441143),
                a = t.n(r),
                i = t(551778),
                o = t(116094),
                l = t(203600),
                s = t(2590);

            function u(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function c(e) {
                return function(e) {
                    if (Array.isArray(e)) return u(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return u(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return u(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(e, n) {
                var t = i.Z.get(e.planId);
                a()(null != t, "missing premium subscription plan");
                var r = i.Z.getForSkuAndInterval(l.Si.GUILD, t.interval, t.intervalCount);
                a()(null != r, "missing premium guild plan");
                var u = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
                    d = (e.status === s.O0b.CANCELED ? 0 : (0, o.uV)(u)) + n,
                    I = u.filter((function(e) {
                        return e.planId !== r.id
                    }));
                if (d < 0) throw new Error("Invalid adjustment");
                return 0 === d ? I : c(I).concat([{
                    planId: r.id,
                    quantity: d
                }])
            }
        },
        902954: (e, n, t) => {
            t.d(n, {
                Z: () => o
            });
            var r = t(202351),
                a = t(711531),
                i = t(536392);

            function o() {
                var e = (0, r.e7)([i.Z], (function() {
                    return i.Z.getPremiumTypeSubscription()
                }));
                return (0, r.e7)([a.Z], (function() {
                    var n;
                    return null != (null == e ? void 0 : e.paymentSourceId) ? null === (n = a.Z.getPaymentSource(e.paymentSourceId)) || void 0 === n ? void 0 : n.country : null
                }))
            }
        },
        668900: (e, n, t) => {
            t.d(n, {
                Z: () => N,
                U: () => S
            });
            var r = t(785893),
                a = (t(667294), t(294184)),
                i = t.n(a),
                o = t(441143),
                l = t.n(o),
                s = t(818417),
                u = t(348592),
                c = t(260561);
            const d = (0, c.B)({
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
                I = (0, c.B)({
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
            var f = t(902954),
                p = t(2590),
                E = t(473708),
                m = t(516178),
                _ = t.n(m);

            function S() {
                var e = (0, f.Z)(),
                    n = d.useExperiment({
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

            function T(e, n) {
                return "PL" === e ? n ? E.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : E.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : "TR" === e ? n ? E.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : E.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : n ? E.Z.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : E.Z.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING
            }
            const N = function(e) {
                var n = e.fromBoostCancelModal,
                    t = e.className,
                    a = (0, f.Z)();
                if (!S()) return null;
                l()(null != a, "Subscription billing country should not be null");
                return (0, r.jsxs)("div", {
                    className: i()(_().noticeRoot, t),
                    children: [(0, r.jsx)("div", {
                        className: _().iconContainer,
                        children: (0, r.jsx)(s.Z, {
                            className: _().infoIcon
                        })
                    }), (0, r.jsx)("div", {
                        className: _().text,
                        children: T(a, n).format({
                            helpCenterLink: u.Z.getArticleURL(p.BhN.LOCALIZED_PRICING)
                        })
                    })]
                })
            }
        },
        437763: (e, n, t) => {
            t.d(n, {
                z: () => s
            });
            var r = t(667294),
                a = t(83471),
                i = t(632826);

            function o(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function l(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, i = [],
                            o = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return o(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return o(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(e) {
                var n = e.purchaseState,
                    t = e.currentStep,
                    o = e.initialScene,
                    s = e.purchaseScene,
                    u = e.errorScene,
                    c = e.successScene,
                    d = l((0, r.useState)(o), 2),
                    I = d[0],
                    f = d[1];
                (0, r.useEffect)((function() {
                    n === i.A.PURCHASING ? f(s) : n === i.A.FAIL && f(u)
                }), [n, s, u]);
                (0, r.useEffect)((function() {
                    t === a.h8.CONFIRM && f(c)
                }), [t, c]);
                return [I, f]
            }
        },
        16703: (e, n, t) => {
            t.d(n, {
                PO: () => I,
                q9: () => f,
                R$: () => p,
                i$: () => E,
                KU: () => m,
                Ji: () => _,
                HE: () => S
            });
            var r = t(785893),
                a = (t(667294), t(294184)),
                i = t.n(a),
                o = t(73904),
                l = t(249052),
                s = t(473708),
                u = t(846710),
                c = t.n(u);

            function d(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function I(e) {
                var n = e.children,
                    t = e.className;
                return (0, r.jsx)("div", {
                    className: i()(c().table, t),
                    children: n
                })
            }

            function f(e) {
                var n = e.children;
                return (0, r.jsx)("div", {
                    className: c().header,
                    children: n
                })
            }

            function p(e) {
                var n = e.label,
                    t = e.value,
                    a = e.className;
                return (0, r.jsxs)("div", {
                    className: i()(c().row, a),
                    children: [(0, r.jsx)("div", {
                        className: c().rowLabel,
                        children: n
                    }), (0, r.jsx)("div", {
                        className: c().rowAmount,
                        children: t
                    })]
                })
            }

            function E(e) {
                var n = e.label,
                    t = e.value,
                    a = e.discounts,
                    i = e.originalAmount,
                    u = e.interval,
                    d = e.currency,
                    I = e.className,
                    f = e.intervalCount,
                    E = function(e) {
                        return null != a ? a.find((function(n) {
                            return n.type === e
                        })) : null
                    },
                    m = E(o.eW.SUBSCRIPTION_PLAN),
                    _ = E(o.eW.ENTITLEMENT),
                    S = null != m ? Math.floor(m.amount / i * 100) : null,
                    T = (0, l.T4)(i, d);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(p, {
                        label: n,
                        value: (0, r.jsxs)(r.Fragment, {
                            children: [t, null != S ? (0, r.jsxs)("div", {
                                className: c().rowPercentDiscount,
                                children: ["-", S, "%"]
                            }) : null]
                        }),
                        className: I
                    }), null != S ? (0, r.jsxs)("div", {
                        className: c().rowDiscountOriginalPrice,
                        children: ["(", null != u && null != f ? (0, l.og)(T, u, f) : T, ")"]
                    }) : null, null != _ ? (0, r.jsx)("div", {
                        className: c().entitlementDiscountRow,
                        children: s.Z.Messages.BILLING_INVOICE_SUBSCRIPTION_CREDIT_APPLIED
                    }) : null]
                })
            }

            function m(e) {
                var n, t = e.extended,
                    a = void 0 !== t && t,
                    o = e.negativeMarginTop,
                    l = void 0 !== o && o;
                return (0, r.jsx)("div", {
                    className: i()(c().divider, (n = {}, d(n, c().dividerExtended, a), d(n, c().negativeMarginTop, l), n))
                })
            }

            function _(e) {
                var n = e.label,
                    t = e.value,
                    a = e.className;
                return (0, r.jsxs)("div", {
                    className: i()(c().totalRow, a),
                    children: [(0, r.jsx)("div", {
                        className: c().totalLabel,
                        children: n
                    }), (0, r.jsx)("div", {
                        className: c().totalAmount,
                        children: t
                    })]
                })
            }

            function S(e) {
                var n = e.children,
                    t = e.className;
                return (0, r.jsx)("div", {
                    className: i()(c().finePrint, t),
                    children: n
                })
            }
        },
        524450: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(785893),
                a = (t(667294), t(249052)),
                i = t(16703),
                o = t(473708);

            function l(e) {
                var n = e.invoice;
                return n.taxInclusive || n.tax <= 0 ? null : (0, r.jsx)(i.R$, {
                    label: o.Z.Messages.ESTIMATED_TAX_LABEL,
                    value: (0, a.T4)(n.tax, n.currency)
                })
            }
        },
        509897: (e, n, t) => {
            t.d(n, {
                Z: () => s
            });
            var r = t(785893),
                a = (t(667294),
                    t(304548)),
                i = t(473708),
                o = t(241387),
                l = t.n(o);
            const s = function(e) {
                var n = e.onClick;
                return (0, r.jsx)(a.Anchor, {
                    onClick: n,
                    className: l().link,
                    children: i.Z.Messages.BACK
                })
            }
        },
        646875: (e, n, t) => {
            t.d(n, {
                As: () => B,
                By: () => G,
                Lu: () => w,
                hG: () => F,
                nd: () => W,
                e9: () => X,
                yT: () => q
            });
            var r = t(785893),
                a = t(667294),
                i = t(294184),
                o = t.n(i),
                l = t(441143),
                s = t.n(l),
                u = t(202351),
                c = t(304548),
                d = t(73904),
                I = t(153686),
                f = t(19585),
                p = t(786483),
                E = t(551778),
                m = t(718831),
                _ = t(986979),
                S = t(348592),
                T = t(116094),
                N = t(249052),
                v = t(100749),
                O = t(71103),
                h = t(717035),
                y = t(16703),
                R = t(524450),
                P = t(203600),
                b = t(2590),
                A = t(473708),
                L = t(801067),
                M = t.n(L);

            function g(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function C(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function D(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        C(e, n, t[n])
                    }))
                }
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

            function x(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, i = [],
                            o = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (l) throw a
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
            var j = function(e, n) {
                var t;
                return !!(null === (t = e.discounts) || void 0 === t ? void 0 : t.some((function(e) {
                    return e.type === n
                })))
            };

            function Z(e) {
                var n, t = e.invoiceItem,
                    a = e.overrideAmount,
                    i = e.showGuildSubscriptionAdjustmentTooltip,
                    o = e.currency,
                    l = e.className,
                    I = e.isPrepaidPaymentSource,
                    f = e.referralTrialOfferId,
                    p = (0, u.e7)([E.Z], (function() {
                        return E.Z.get(t.subscriptionPlanId)
                    })),
                    m = null === (n = (0, h.N)(f)) || void 0 === n ? void 0 : n.subscription_trial;
                s()(null != p, "Missing subscriptionPlan");
                var S = (0, T.if)({
                        intervalType: null == m ? void 0 : m.interval,
                        intervalCount: null == m ? void 0 : m.interval_count
                    }),
                    v = function(e, n, t, r) {
                        var a = j(e, d.eW.PREMIUM_TRIAL);
                        switch (e.subscriptionPlanId) {
                            case P.Xh.PREMIUM_MONTH_LEGACY:
                            case P.Xh.PREMIUM_YEAR_LEGACY:
                            case P.Xh.PREMIUM_MONTH_TIER_0:
                            case P.Xh.PREMIUM_YEAR_TIER_0:
                            case P.Xh.PREMIUM_MONTH_TIER_1:
                            case P.Xh.PREMIUM_YEAR_TIER_1:
                            case P.Xh.PREMIUM_MONTH_TIER_2:
                            case P.Xh.PREMIUM_YEAR_TIER_2:
                            case P.Xh.PREMIUM_3_MONTH_TIER_2:
                            case P.Xh.PREMIUM_6_MONTH_TIER_2:
                                return (0, T.Gf)(e.subscriptionPlanId, a, t, r);
                            case P.Xh.PREMIUM_3_MONTH_GUILD:
                            case P.Xh.PREMIUM_6_MONTH_GUILD:
                                return A.Z.Messages.PREMIUM_GUILD_NUM_MULTI_MONTHS_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity,
                                    intervalCount: n.intervalCount
                                });
                            case P.Xh.PREMIUM_MONTH_GUILD:
                                return A.Z.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity
                                });
                            case P.Xh.PREMIUM_YEAR_GUILD:
                                return A.Z.Messages.PREMIUM_GUILD_NUM_YEAR_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity
                                })
                        }
                        switch (n.interval) {
                            case P.rV.MONTH:
                                return 1 === n.intervalCount ? A.Z.Messages.MONTHLY_GUILD_SUBSCRIPTION.format({
                                    planName: n.name
                                }) : A.Z.Messages.MULTI_MONTHS_GUILD_SUBSCRIPTION.format({
                                    planName: n.name,
                                    intervalCount: n.intervalCount
                                });
                            case P.rV.YEAR:
                                return A.Z.Messages.YEARLY_GUILD_SUBSCRIPTION.format({
                                    planName: n.name
                                })
                        }
                        throw new Error("Unexpected invoice plan: ".concat(e.subscriptionPlanId))
                    }(t, p, I, S);
                !0 === i && (v = (0, r.jsxs)("div", {
                    className: M().invoiceItemLabelWithIcon,
                    children: [(0, r.jsxs)("div", {
                        children: [v, " "]
                    }), (0, r.jsx)(c.Tooltip, {
                        text: A.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                        "aria-label": A.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT,
                        tooltipClassName: M().invoiceItemTooltip,
                        children: function(e) {
                            return (0, r.jsx)(_.Z, U(D({}, e), {
                                className: M().invoiceItemLabelIcon
                            }))
                        }
                    })]
                }));
                var O = (0, N.T4)(null != a ? a : t.amount, o),
                    R = I ? O : (0, N.og)(O, p.interval, p.intervalCount);
                return (0, r.jsx)(y.i$, {
                    label: v,
                    value: R,
                    originalAmount: t.subscriptionPlanPrice * t.quantity,
                    discounts: t.discounts,
                    interval: p.interval,
                    intervalCount: p.intervalCount,
                    currency: o,
                    className: l
                })
            }

            function B(e) {
                var n = e.label,
                    t = e.tooltipText,
                    a = e.tooltipAriaLabel;
                return (0, r.jsxs)("div", {
                    className: M().invoiceItemLabelWithIcon,
                    children: [n, (0, r.jsx)(c.Tooltip, {
                        clickableOnMobile: !0,
                        text: t,
                        "aria-label": a,
                        tooltipClassName: M().invoiceItemTooltip,
                        children: function(e) {
                            return (0, r.jsx)(_.Z, U(D({}, e), {
                                className: M().invoiceItemLabelIcon
                            }))
                        }
                    })]
                })
            }

            function G(e) {
                var n = e.invoice,
                    t = e.isPrepaidPaymentSource,
                    a = (0, O.j)(n.invoiceItems),
                    i = a.find((function(e) {
                        return !(0, T.Z8)(e.subscriptionPlanId) && e.amount >= 0
                    })),
                    o = a.find((function(e) {
                        return (0, T.Z8)(e.subscriptionPlanId) && e.amount >= 0
                    })),
                    l = (0, u.e7)([E.Z], (function() {
                        return null != o ? E.Z.get(o.subscriptionPlanId) : null
                    })),
                    s = null != o ? o.amount : 0,
                    c = (0, N.T4)(s, n.currency),
                    d = null != l ? (0, N.og)(c, l.interval, l.intervalCount) : 0;
                return (0, r.jsxs)(r.Fragment, {
                    children: [null != i ? (0, r.jsx)(Z, {
                        invoiceItem: i,
                        currency: n.currency,
                        isPrepaidPaymentSource: t
                    }) : null, 0 !== s && null != o && null != l ? (0, r.jsx)(y.R$, {
                        label: A.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_INVOICE_ROW_CONTENT.format({
                            numGuildSubscriptions: o.quantity,
                            planName: (0, T.Gf)(l.id, !1, t)
                        }),
                        value: t ? c : d
                    }) : null, (0, r.jsx)(R.Z, {
                        invoice: n
                    }), (0, r.jsx)(y.KU, {}), (0, r.jsx)(y.Ji, {
                        label: (n.taxInclusive ? t ? A.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : A.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : A.Z.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
                        value: n.currency === b.pKx.USD ? (0, N.T4)(n.total, n.currency) : "".concat((0, N.T4)(n.total, n.currency), "*")
                    })]
                })
            }

            function w(e) {
                var n = e.invoice,
                    t = e.newPlan,
                    a = e.isPrepaidPaymentSource,
                    i = e.referralTrialOfferId,
                    o = (0, O.j)(n.invoiceItems),
                    l = o.find((function(e) {
                        return e.subscriptionPlanId === t.id
                    }));
                s()(null != l, "Expected newPlanInvoiceItem");
                var u, c, I, f, p, E = o.find((function(e) {
                        return !(0, T.Z8)(e.subscriptionPlanId) && e.amount < 0
                    })),
                    m = o.find((function(e) {
                        return null == e.subscriptionPlanId && null != e.discounts && e.discounts.find((function(e) {
                            return e.type === d.eW.PREMIUM_LEGACY_UPGRADE_PROMOTION
                        }))
                    })),
                    _ = j(l, d.eW.PREMIUM_TRIAL),
                    S = (u = l, c = d.eW.SUBSCRIPTION_PLAN, u.subscriptionPlanPrice - (null !== (p = null === (f = null === (I = u.discounts) || void 0 === I ? void 0 : I.find((function(e) {
                        return e.type === c
                    }))) || void 0 === f ? void 0 : f.amount) && void 0 !== p ? p : 0)),
                    v = l.quantity * S,
                    h = l.amount + (null != E ? E.amount : 0) - v + (null != m ? m.amount : 0),
                    L = o.filter((function(e) {
                        return e.subscriptionPlanId === P.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === P.Xh.PREMIUM_YEAR_GUILD
                    })),
                    M = L.reduce((function(e, n) {
                        return e + n.amount
                    }), 0);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(Z, {
                        invoiceItem: l,
                        currency: n.currency,
                        overrideAmount: v,
                        isPrepaidPaymentSource: a,
                        referralTrialOfferId: i
                    }), 0 === h || _ ? null : (0, r.jsx)(y.R$, {
                        label: (0, r.jsx)(B, {
                            label: A.Z.Messages.PREMIUM_SUBSCRIPTION_PLAN_ADJUSTMENT.format({
                                planName: (0, T.PV)(t.id) ? (0, T.aq)(t.id) : t.name
                            }),
                            tooltipText: A.Z.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP
                        }),
                        value: (0, N.T4)(h, n.currency)
                    }), 0 !== M ? (0, r.jsx)(y.R$, {
                        label: (0, r.jsx)(B, {
                            label: A.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT,
                            tooltipText: A.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                            tooltipAriaLabel: A.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT
                        }),
                        value: (0, N.T4)(M, n.currency)
                    }) : null, (0, r.jsx)(R.Z, {
                        invoice: n
                    }), (0, r.jsx)(y.KU, {}), (0, r.jsx)(y.Ji, {
                        label: (n.taxInclusive ? a ? A.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : A.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : A.Z.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
                        value: n.currency === b.pKx.USD ? (0, N.T4)(n.total, n.currency) : "".concat((0, N.T4)(n.total, n.currency), "*")
                    })]
                })
            }

            function k(e) {
                var n = e.slice();
                n.sort((function(e, n) {
                    var t = (0, T.uZ)(e.subscriptionPlanId),
                        r = (0, T.uZ)(n.subscriptionPlanId);
                    return t && !r ? -1 : !t && r ? 1 : 0
                }));
                return n
            }

            function Y(e) {
                return e.filter((function(e) {
                    var n = e.subscriptionPlanId;
                    return n !== P.Xh.NONE_MONTH && n !== P.Xh.NONE_YEAR
                }))
            }

            function F(e) {
                var n = e.proratedInvoice,
                    t = e.renewalInvoice,
                    a = (0, T.dn)(n),
                    i = a.intervalType,
                    o = a.intervalCount,
                    l = (0, T.dn)(t),
                    s = l.intervalType,
                    u = l.intervalCount;
                return i !== s || o !== u || n.subscriptionPeriodEnd.getTime() === t.subscriptionPeriodStart.getTime() ? null : (0, r.jsx)("div", {
                    className: M().subscriptionPeriodResetNotice,
                    children: A.Z.Messages.PREMIUM_SUBSCRIPTION_PERIOD_RESET_NOTICE.format({
                        renewalDate: n.subscriptionPeriodEnd
                    })
                })
            }

            function V(e) {
                var n = e.isUpdate,
                    t = e.currentInvoice,
                    a = e.newInvoice,
                    i = null != t ? (0, O.j)(t.invoiceItems) : null,
                    l = null != t ? (0, T.dn)(t) : null,
                    s = (0, T.dn)(a),
                    u = s.intervalType,
                    c = s.intervalCount,
                    d = null != l && (l.intervalType !== u || l.intervalCount !== c);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(y.KU, {
                        extended: !0
                    }), null != t ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(y.q9, {
                            children: A.Z.Messages.PREMIUM_SUBSCRIPTION_CURRENT_LABEL
                        }), Y(k((0, O.j)(t.invoiceItems))).map((function(e) {
                            return (0, r.jsx)(Z, {
                                invoiceItem: e,
                                currency: t.currency
                            }, e.id)
                        })), (0, r.jsx)(y.KU, {
                            extended: !0
                        })]
                    }) : null, (0, r.jsx)(y.q9, {
                        children: A.Z.Messages.PREMIUM_SUBSCRIPTION_NEW_LABEL
                    }), Y(k((0, O.j)(a.invoiceItems))).map((function(e) {
                        var t = null != i && !i.some((function(n) {
                            return n.subscriptionPlanId === e.subscriptionPlanId && n.quantity === e.quantity
                        }));
                        return (0, r.jsx)(Z, {
                            invoiceItem: e,
                            currency: a.currency,
                            showGuildSubscriptionAdjustmentTooltip: d && (e.subscriptionPlanId === P.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === P.Xh.PREMIUM_YEAR_GUILD || e.subscriptionPlanId === P.Xh.PREMIUM_3_MONTH_GUILD || e.subscriptionPlanId === P.Xh.PREMIUM_6_MONTH_GUILD),
                            className: o()(C({}, M().subscriptionAddedInvoiceItem, !n || t))
                        }, e.id)
                    })), (0, r.jsx)(R.Z, {
                        invoice: a
                    }), (0, r.jsx)(y.KU, {}), (0, r.jsx)(y.R$, {
                        label: A.Z.Messages.PREMIUM_SUBSCRIPTION_NEW_TOTAL,
                        value: (0, N.og)((0, N.T4)(a.total, a.currency), u, c),
                        className: M().subscriptionCostRow
                    })]
                })
            }

            function H(e) {
                var n, t = e.proratedInvoice,
                    a = e.renewalInvoice,
                    i = e.isTrial,
                    o = e.isUpdate,
                    l = e.overrideRenewalDate,
                    s = e.trialFooterMessageOverride,
                    u = null === (n = (0, h.N)()) || void 0 === n ? void 0 : n.subscription_trial,
                    c = (0, T.dn)(a),
                    d = c.intervalType,
                    I = c.intervalCount,
                    f = (0, p.s)("purchase_terms", {
                        autoTrackExposure: !1
                    });
                if (null == t && f.enabled && 1 === f.bucket) return null;
                if (i) {
                    var E = (0, T.if)({
                            intervalType: null == u ? void 0 : u.interval,
                            intervalCount: null == u ? void 0 : u.interval_count
                        }),
                        m = (null == u ? void 0 : u.interval) === P.rV.DAY && (null == u ? void 0 : u.interval_count) < 28 ? 2 : 7;
                    return (0, r.jsx)(r.Fragment, {
                        children: null != s ? s : A.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TRIAL_DURATION.format({
                            duration: E,
                            days: m,
                            contactLink: b.EYA.CONTACT,
                            helpdeskArticle: S.Z.getArticleURL(b.BhN.PREMIUM_TRIAL)
                        })
                    })
                }
                var _ = a.taxInclusive ? A.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER : A.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TAX_EXCLUSIVE;
                return (0, r.jsx)(r.Fragment, {
                    children: _.format({
                        rate: (0, N.og)((0, N.T4)(a.subtotal, a.currency), d, I),
                        renewalDate: null != l ? l : o ? null != t ? t.subscriptionPeriodEnd : a.subscriptionPeriodStart : a.subscriptionPeriodEnd,
                        contactLink: b.EYA.CONTACT,
                        helpdeskArticle: S.Z.getArticleURL(b.BhN.BILLING)
                    })
                })
            }

            function W(e) {
                var n = e.premiumSubscription,
                    t = e.proratedInvoice,
                    i = e.renewalInvoice,
                    o = e.overrideRenewalDate,
                    l = e.isUpdate,
                    s = void 0 !== l && l,
                    u = e.isTrial,
                    d = void 0 !== u && u,
                    p = e.priceOptions,
                    E = void 0 === p ? void 0 : p,
                    _ = e.isPrepaidPaymentSource,
                    S = void 0 !== _ && _,
                    T = e.trialFooterMessageOverride,
                    N = e.hideSubscriptionDetails,
                    O = void 0 !== N && N,
                    h = (0, f.Z)().analyticsLocations,
                    R = D({
                        subscriptionId: null == n ? void 0 : n.id,
                        renewal: !0,
                        preventFetch: !s,
                        analyticsLocatinons: h,
                        analyticsLocation: I.Z.SUBSCRIPTION_INVOICE_FOOTER
                    }, E),
                    P = x((0, v.ED)(R), 1)[0],
                    b = x(a.useState(!1), 2),
                    L = b[0],
                    g = b[1];
                return (0, r.jsxs)(r.Fragment, {
                    children: [S ? null : (0, r.jsx)(y.HE, {
                        children: (0, r.jsx)(H, {
                            proratedInvoice: t,
                            renewalInvoice: i,
                            isTrial: d,
                            isUpdate: s,
                            overrideRenewalDate: o,
                            trialFooterMessageOverride: T
                        })
                    }), !O && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(c.Clickable, {
                            onClick: function() {
                                return g((function(e) {
                                    return !e
                                }))
                            },
                            className: M().subscriptionDetailsToggle,
                            children: [L ? A.Z.Messages.PREMIUM_SUBSCRIPTION_HIDE_DETAILS : A.Z.Messages.PREMIUM_SUBSCRIPTION_SHOW_DETAILS, (0, r.jsx)(m.Z, {
                                direction: L ? m.Z.Directions.UP : m.Z.Directions.DOWN,
                                className: M().subscriptionDetailsToggleCaret
                            })]
                        }), L ? (0, r.jsx)(V, {
                            isUpdate: s,
                            currentInvoice: P,
                            newInvoice: i
                        }) : null]
                    })]
                })
            }

            function X(e) {
                var n, t = e.plan,
                    a = e.className,
                    i = e.paymentSourceId,
                    o = e.isPrepaidPaymentSource,
                    l = void 0 !== o && o,
                    s = e.isCustomGift,
                    u = void 0 !== s && s,
                    d = (0, T.aS)(t.id, !1, !0, {
                        paymentSourceId: i
                    }),
                    I = (0, N.T4)(d.amount, d.currency);
                if (u) switch (t.interval) {
                    case P.rV.MONTH:
                        n = A.Z.Messages.GIFT_DURATION.format({
                            timeInterval: A.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH
                        });
                        break;
                    case P.rV.YEAR:
                        n = A.Z.Messages.GIFT_DURATION.format({
                            timeInterval: A.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
                        })
                } else n = A.Z.Messages.BILLING_INVOICE_GIFT_PLAN.format({
                    planName: (0, T.Gf)(t.id, !1, l)
                });
                return u ? (0, r.jsxs)("div", {
                    className: a,
                    children: [(0,
                        r.jsx)(c.FormTitle, {
                        children: A.Z.Messages.PREMIUM_GIFTING_BUTTON
                    }), (0, r.jsx)(c.Heading, {
                        variant: "text-md/normal",
                        children: "".concat(n, " - ").concat(I)
                    })]
                }) : (0, r.jsx)(y.PO, {
                    className: a,
                    children: (0, r.jsx)(y.R$, {
                        label: n,
                        value: I,
                        className: M().subscriptionCostRow
                    })
                })
            }

            function q(e) {
                var n = e.invoice,
                    t = e.plan,
                    a = (0, O.j)(n.invoiceItems).find((function(e) {
                        return e.subscriptionPlanId === t.id
                    }));
                s()(null != a, "newPlanInvoiceItem can not be null");
                if (t.interval === P.rV.MONTH) return (0, r.jsx)(c.Text, {
                    variant: "text-md/normal",
                    children: A.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL.format({
                        price: (0, N.T4)(a.subscriptionPlanPrice, n.currency)
                    })
                });
                if (t.interval === P.rV.YEAR) return (0, r.jsx)(c.Text, {
                    variant: "text-md/normal",
                    children: A.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL.format({
                        price: (0, N.T4)(a.subscriptionPlanPrice, n.currency)
                    })
                });
                s()(!1, "Invalid interval type")
            }
        },
        630689: (e, n, t) => {
            t.d(n, {
                NQ: () => L,
                HC: () => D,
                Db: () => w,
                fe: () => W
            });
            var r = t(785893),
                a = t(667294),
                i = t(294184),
                o = t.n(i),
                l = t(248088),
                s = t(853158),
                u = t(311865),
                c = t(369689),
                d = t.n(c);

            function I(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function f(e, n, t, r, a, i, o) {
                try {
                    var l = e[i](o),
                        s = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(s) : Promise.resolve(s).then(r, a)
            }

            function p(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function E(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function m(e) {
                m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return m(e)
            }

            function _(e, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                n && T(e, n)
            }

            function S(e, n) {
                return !n || "object" !== v(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function T(e, n) {
                T = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return T(e, n)
            }

            function N(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, i = [],
                            o = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return I(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return I(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var v = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function O(e) {
                var n = function() {
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
                    var t, r = m(e);
                    if (n) {
                        var a = m(this).constructor;
                        t = Reflect.construct(r, arguments, a)
                    } else t = r.apply(this, arguments);
                    return S(this, t)
                }
            }
            var h, y, R = function(e, n) {
                var t, r, a, i, o = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, i[1])).done) return a;
                                (r = 0, a) && (i = [2 & i[0], a.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        a = i;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                            o.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && o.label < a[1]) {
                                            o.label = a[1];
                                            a = i;
                                            break
                                        }
                                        if (a && o.label < a[2]) {
                                            o.label = a[2];
                                            o.ops.push(i);
                                            break
                                        }
                                        a[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                i = n.call(e, o)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, l])
                    }
                }
            };
            ! function(e) {
                e.NORMAL = "normal";
                e.SPEED_START = "speed_start";
                e.SPEED_LOOP = "speed_loop";
                e.FINISH = "finish";
                e.IDLE = "idle"
            }(h || (h = {}));
            var P, b, A = (E(y = {}, h.NORMAL, {
                        BEG: 0,
                        END: 600,
                        shouldForcePlayAfter: !0
                    }),
                    E(y, h.SPEED_START, {
                        BEG: 601,
                        END: 636
                    }), E(y, h.SPEED_LOOP, {
                        BEG: 637,
                        END: 668
                    }), E(y, h.FINISH, {
                        BEG: 669,
                        END: 870
                    }), E(y, h.IDLE, {
                        BEG: 871,
                        END: 878
                    }), y),
                L = function(e) {
                    _(a, e);
                    var n = O(a);

                    function a() {
                        p(this, a);
                        return n.apply(this, arguments)
                    }
                    var i = a.prototype;
                    i.importDefault = function() {
                        return t.e(27608).then(t.t.bind(t, 869059, 23)).then((function(e) {
                            return e.default
                        }))
                    };
                    i.render = function() {
                        var e = this.props,
                            n = e.className,
                            t = e.nextScene,
                            a = e.onScenePlay,
                            i = e.onSceneComplete,
                            l = e.pause,
                            s = e.pauseWhileUnfocused;
                        return (0, r.jsx)(u.Z, {
                            className: o()(d().sequencedAnimation, n),
                            importData: this.importDefault,
                            nextScene: l ? h.IDLE : t,
                            sceneSegments: A,
                            onScenePlay: a,
                            onSceneComplete: i,
                            pauseWhileUnfocused: s,
                            pause: l
                        })
                    };
                    a.getNextScene = function(e) {
                        switch (e) {
                            case a.Scenes.SPEED_START:
                                return a.Scenes.SPEED_LOOP;
                            case a.Scenes.FINISH:
                                return a.Scenes.IDLE;
                            default:
                                return e
                        }
                    };
                    return a
                }(a.PureComponent);
            L.Scenes = h;
            ! function(e) {
                e.NORMAL = "normal";
                e.SPEED_START = "speed_start";
                e.SPEED_LOOP = "speed_loop";
                e.FINISH = "finish";
                e.IDLE = "idle"
            }(P || (P = {}));
            var M, g, C = (E(b = {}, P.NORMAL, {
                    BEG: 0,
                    END: 600,
                    shouldForcePlayAfter: !0
                }), E(b, P.SPEED_START, {
                    BEG: 601,
                    END: 636
                }), E(b, P.SPEED_LOOP, {
                    BEG: 637,
                    END: 668
                }), E(b, P.FINISH, {
                    BEG: 669,
                    END: 870
                }), E(b, P.IDLE, {
                    BEG: 871,
                    END: 878
                }), b),
                D = function(e) {
                    _(a, e);
                    var n = O(a);

                    function a() {
                        p(this, a);
                        return n.apply(this, arguments)
                    }
                    var i = a.prototype;
                    i.importDefault = function() {
                        return t.e(64849).then(t.t.bind(t, 280380, 23)).then((function(e) {
                            return e.default
                        }))
                    };
                    i.render = function() {
                        var e = this.props,
                            n = e.className,
                            t = e.nextScene,
                            a = e.onScenePlay,
                            i = e.onSceneComplete,
                            l = e.pause,
                            s = e.pauseWhileUnfocused;
                        return (0, r.jsx)(u.Z, {
                            className: o()(d().sequencedAnimation, n),
                            importData: this.importDefault,
                            nextScene: l ? P.IDLE : t,
                            sceneSegments: C,
                            onScenePlay: a,
                            onSceneComplete: i,
                            pauseWhileUnfocused: s,
                            pause: l
                        })
                    };
                    a.getNextScene = function(e) {
                        switch (e) {
                            case a.Scenes.SPEED_START:
                                return a.Scenes.SPEED_LOOP;
                            case a.Scenes.FINISH:
                                return a.Scenes.IDLE;
                            default:
                                return e
                        }
                    };
                    return a
                }(a.PureComponent);
            D.Scenes = P;
            ! function(e) {
                e.IDLE_ENTRY = "idle_entry";
                e.IDLE_LOOP = "idle_loop";
                e.BOOST_START = "boost_start";
                e.BOOST_LOOP = "boost_loop";
                e.BOOST_END = "boost_end";
                e.VICTORY = "victory";
                e.ERROR = "error"
            }(M || (M = {}));
            var U, x, j = (E(g = {}, M.IDLE_ENTRY, {
                    BEG: 0,
                    END: 50
                }), E(g, M.IDLE_LOOP, {
                    BEG: 50,
                    END: 230,
                    shouldForcePlayAfter: !0
                }), E(g, M.BOOST_START, {
                    BEG: 230,
                    END: 275
                }), E(g, M.BOOST_LOOP, {
                    BEG: 275,
                    END: 290
                }), E(g, M.BOOST_END, {
                    BEG: 386,
                    END: 455
                }), E(g, M.VICTORY, {
                    BEG: 470,
                    END: 525
                }), E(g, M.ERROR, {
                    BEG: 290,
                    END: 375
                }), g),
                Z = function(e) {
                    _(t, e);
                    var n = O(t);

                    function t() {
                        p(this, t);
                        return n.apply(this, arguments)
                    }
                    var a = t.prototype;
                    a.getStyle = function(e) {
                        var n = this.props.animation;
                        return {
                            transform: [{
                                translateX: n.x.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: e ? ["100%", "0%"] : ["0%", "-100%"]
                                })
                            }, {
                                translateY: n.y.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["100%", "0%"]
                                })
                            }]
                        }
                    };
                    a.render = function() {
                        var e = this.props.className;
                        return (0, r.jsxs)("div", {
                            className: d().panningAnimation,
                            children: [(0, r.jsx)(s.Z.div, {
                                className: e,
                                style: this.getStyle(!1)
                            }), (0, r.jsx)(s.Z.div, {
                                className: e,
                                style: this.getStyle(!0)
                            })]
                        })
                    };
                    return t
                }(a.PureComponent),
                B = Object.freeze({
                    IDLE_ENTRY: {
                        toValue: 1,
                        duration: 1500
                    },
                    IDLE_LOOP: {
                        toValue: 1,
                        duration: 6e3,
                        easing: s.Z.Easing.linear
                    },
                    BOOST_START: {
                        toValue: 0,
                        duration: 2e3,
                        delay: 500
                    },
                    ERROR: {
                        toValue: 1,
                        duration: 1500,
                        delay: 1e3
                    }
                }),
                G = 1.2,
                w = function(e) {
                    _(a, e);
                    var n = O(a);

                    function a() {
                        p(this, a);
                        var e;
                        (e = n.apply(this, arguments)).backgroundAnimation = new s.Z.ValueXY({
                            x: 0,
                            y: 0
                        });
                        e.foregroundAnimation = new s.Z.ValueXY({
                            x: 0,
                            y: 0
                        });
                        e.didUnmount = !1;
                        e.animateIdleLoopBackground = function() {
                            if (!e.didUnmount) {
                                e.backgroundAnimation.x.setValue(0);
                                s.Z.timing(e.backgroundAnimation.x, {
                                    toValue: B.IDLE_LOOP.toValue,
                                    duration: B.IDLE_LOOP.duration * G,
                                    easing: s.Z.Easing.linear
                                }).start(e.animateIdleLoopBackground)
                            }
                        };
                        e.animateIdleLoopForeground = function() {
                            if (!e.didUnmount) {
                                e.foregroundAnimation.x.setValue(0);
                                s.Z.timing(e.foregroundAnimation.x, {
                                    toValue: B.IDLE_LOOP.toValue,
                                    duration: B.IDLE_LOOP.duration,
                                    easing: B.IDLE_LOOP.easing
                                }).start(e.animateIdleLoopForeground)
                            }
                        };
                        e.handleScenePlay = function(n) {
                            switch (n) {
                                case M.IDLE_ENTRY:
                                    e.animateIdleEntry();
                                    e.animateIdleLoop();
                                    break;
                                case M.ERROR:
                                    e.animateError();
                                    break;
                                case M.BOOST_START:
                                    e.animateBoostStart()
                            }
                            var t = e.props.onScenePlay;
                            null != t && t(n)
                        };
                        return e
                    }
                    var i = a.prototype;
                    i.componentWillUnmount = function() {
                        this.didUnmount = !0
                    };
                    i.importData = function() {
                        return t.e(56576).then(t.t.bind(t, 162264, 23)).then((function(e) {
                            return e.default
                        }))
                    };
                    i.animateEntry = function(e) {
                        s.Z.parallel([s.Z.timing(this.foregroundAnimation.y, {
                            toValue: e.toValue,
                            duration: e.duration,
                            delay: e.delay || 0
                        }), s.Z.timing(this.backgroundAnimation.y, {
                            toValue: e.toValue,
                            duration: e.duration * G,
                            delay: e.delay || 0
                        })]).start()
                    };
                    i.animateIdleEntry = function() {
                        this.animateEntry(B.IDLE_ENTRY)
                    };
                    i.animateError = function() {
                        this.animateEntry(B.ERROR)
                    };
                    i.animateIdleLoop = function() {
                        this.animateIdleLoopBackground();
                        this.animateIdleLoopForeground()
                    };
                    i.animateBoostStart = function() {
                        s.Z.parallel([s.Z.timing(this.foregroundAnimation.y, {
                            toValue: B.BOOST_START.toValue,
                            duration: B.BOOST_START.duration,
                            delay: B.BOOST_START.delay
                        }), s.Z.timing(this.backgroundAnimation.y, {
                            toValue: B.BOOST_START.toValue,
                            duration: B.BOOST_START.duration * G,
                            delay: B.BOOST_START.delay
                        })]).start()
                    };
                    i.render = function() {
                        var e = this.props,
                            n = e.className,
                            t = e.nextScene,
                            a = e.pause,
                            i = e.onSceneComplete;
                        return (0, r.jsxs)("div", {
                            className: o()(d().tier2Animation, n),
                            children: [a ? (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsxs)("div", {
                                    className: d().panningAnimation,
                                    children: [(0, r.jsx)("div", {
                                        className: d().tier2Background
                                    }), (0, r.jsx)("div", {
                                        className: d().tier2Foreground
                                    })]
                                })
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(Z, {
                                    className: d().tier2Background,
                                    animation: this.backgroundAnimation
                                }), (0, r.jsx)(Z, {
                                    className: d().tier2Foreground,
                                    animation: this.foregroundAnimation
                                })]
                            }), (0, r.jsx)(u.Z, {
                                className: d().sequencedAnimation,
                                importData: this.importData,
                                nextScene: a ? M.IDLE_LOOP : t,
                                sceneSegments: j,
                                onScenePlay: this.handleScenePlay,
                                onSceneComplete: i,
                                pauseWhileUnfocused: !1,
                                pause: a
                            })]
                        })
                    };
                    a.getNextScene = function(e) {
                        switch (e) {
                            case a.Scenes.IDLE_ENTRY:
                                return a.Scenes.IDLE_LOOP;
                            case a.Scenes.BOOST_START:
                                return a.Scenes.BOOST_LOOP;
                            case a.Scenes.BOOST_END:
                                return a.Scenes.VICTORY;
                            case a.Scenes.VICTORY:
                                return a.Scenes.IDLE_ENTRY;
                            case a.Scenes.ERROR:
                                return a.Scenes.IDLE_LOOP;
                            default:
                                return e
                        }
                    };
                    return a
                }(a.PureComponent);
            w.Scenes = M;
            ! function(e) {
                e.ENTRY = "entry";
                e.IDLE = "idle";
                e.STARS = "stars";
                e.ERROR = "error";
                e.SUCCESS = "success"
            }(U || (U = {}));
            var k = (E(x = {}, U.ENTRY, {
                    BEG: 0,
                    END: 180
                }), E(x, U.IDLE, {
                    BEG: 180,
                    END: 360,
                    shouldForcePlayAfter: !0
                }), E(x, U.STARS, {
                    BEG: 180,
                    END: 360,
                    shouldForcePlayAfter: !0
                }), E(x, U.ERROR, {
                    BEG: 360,
                    END: 540
                }), E(x, U.SUCCESS, {
                    BEG: 540,
                    END: 778
                }), x),
                Y = Object.freeze({
                    WHITE: "#ebf0f7",
                    PINK: "#fa6ef6"
                }),
                F = [{
                    left: 29,
                    top: 100,
                    color: Y.WHITE
                }, {
                    left: 245,
                    top: 11,
                    color: Y.PINK
                }, {
                    left: 393,
                    top: 22,
                    color: Y.WHITE
                }, {
                    left: 74,
                    top: 30,
                    color: Y.PINK
                }, {
                    left: 188,
                    top: 9,
                    color: Y.WHITE
                }, {
                    left: 379,
                    top: 97,
                    color: Y.PINK
                }],
                V = Object.freeze({
                    SCALE_INITIAL: 0,
                    SCALE_MIDDLE: 1,
                    SCALE_END: 0,
                    ROTATE_INITIAL: 0,
                    ROTATE_MIDDLE: 180,
                    ROTATE_END: 360,
                    DELAY_MIN: 200,
                    DELAY_MAX: 500,
                    DELAY_STAGGER: 200,
                    DURATION_MIDDLE: 400,
                    DURATION_END: 250,
                    SIZE_MIN: 7,
                    SIZE_MAX: 15,
                    EASING_MIDDLE: s.Z.Easing.bezier(.3, .01, 0, .99),
                    EASING_END: s.Z.Easing.bezier(0, -.01, .99, 0)
                });

            function H(e) {
                var n = e.animate,
                    t = N(a.useState(0), 2),
                    i = t[0],
                    o = t[1],
                    s = (0, l.useSprings)(F.length, F.map((function(e, t) {
                        var r, a, l = t > 0 ? V.DELAY_STAGGER * t + Math.random() * (V.DELAY_MAX - V.DELAY_MIN) + V.DELAY_MIN : 0,
                            s = Math.random() * (V.SIZE_MAX - V.SIZE_MIN) + V.SIZE_MIN;
                        return {
                            from: {
                                scale: V.SCALE_INITIAL,
                                rotate: V.ROTATE_INITIAL,
                                top: e.top,
                                left: e.left,
                                width: s,
                                height: s
                            },
                            to: (a = (r = function(e) {
                                return R(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return n ? [4, e({
                                                scale: V.SCALE_MIDDLE,
                                                rotate: V.ROTATE_MIDDLE,
                                                delay: l,
                                                config: {
                                                    duration: V.DURATION_MIDDLE,
                                                    easing: V.EASING_MIDDLE
                                                }
                                            })] : [3, 4];
                                        case 1:
                                            r.sent();
                                            return [4, e({
                                                scale: V.SCALE_END,
                                                rotate: V.ROTATE_END,
                                                config: {
                                                    duration: V.DURATION_END,
                                                    easing: V.EASING_END
                                                }
                                            })];
                                        case 2:
                                            r.sent();
                                            return [4, e({
                                                scale: V.SCALE_INITIAL,
                                                rotate: V.ROTATE_INITIAL,
                                                immediate: !0
                                            })];
                                        case 3:
                                            r.sent();
                                            t === F.length - 1 && o(i + 1);
                                            return [3, 6];
                                        case 4:
                                            return [4, e({
                                                scale: V.SCALE_INITIAL,
                                                rotate: V.ROTATE_INITIAL
                                            })];
                                        case 5:
                                            r.sent();
                                            r.label = 6;
                                        case 6:
                                            return [2]
                                    }
                                }))
                            }, function() {
                                var e = this,
                                    n = arguments;
                                return new Promise((function(t, a) {
                                    var i = r.apply(e, n);

                                    function o(e) {
                                        f(i, t, a, o, l, "next", e)
                                    }

                                    function l(e) {
                                        f(i, t, a, o, l, "throw", e)
                                    }
                                    o(void 0)
                                }))
                            }), function(e) {
                                return a.apply(this, arguments)
                            })
                        }
                    })));
                return (0, r.jsx)(r.Fragment, {
                    children: s.map((function(e, n) {
                        var t = F[n];
                        return (0, r.jsx)(l.animated.svg, {
                            style: e,
                            className: d().guildStar,
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 12.14 12.24",
                            children: (0, r.jsx)("path", {
                                d: "M5.62 10.22l-4 1.9a1.17 1.17 0 01-1.5-.5 1.7 1.7 0 010-1l1.9-4a.91.91 0 000-1l-1.9-4a1.14 1.14 0 01.5-1.5 1.39 1.39 0 01.9 0l4 1.9a.91.91 0 001 0l4-1.9a1.14 1.14 0 011.5.5 1.39 1.39 0 010 .9l-1.9 4a.91.91 0 000 1l1.9 4a1.17 1.17 0 01-.5 1.5 1.7 1.7 0 01-1 0l-4-1.9a1 1 0 00-.9.1z",
                                fill: t.color
                            })
                        }, n)
                    }))
                })
            }
            var W = function(e) {
                _(a, e);
                var n = O(a);

                function a() {
                    p(this, a);
                    return n.apply(this, arguments)
                }
                var i = a.prototype;
                i.importData = function() {
                    return t.e(85789).then(t.t.bind(t, 748589, 23)).then((function(e) {
                        return e.default
                    }))
                };
                i.render = function() {
                    var e = this.props,
                        n = e.className,
                        t = e.nextScene,
                        a = e.pause,
                        i = e.onScenePlay,
                        l = e.onSceneComplete,
                        s = e.pauseWhileUnfocused;
                    return (0, r.jsxs)("div", {
                        className: o()(d().guildWrapper, n),
                        children: [(0, r.jsx)(u.Z, {
                            className: d().guildBackground,
                            importData: this.importData,
                            nextScene: a ? U.IDLE : t,
                            sceneSegments: k,
                            onScenePlay: i,
                            onSceneComplete: l,
                            pauseWhileUnfocused: s,
                            pause: a
                        }), (0, r.jsx)(H, {
                            animate: !a && t === U.STARS
                        })]
                    })
                };
                a.getNextScene = function(e) {
                    switch (e) {
                        case U.ENTRY:
                        case U.ERROR:
                        case U.SUCCESS:
                            return U.IDLE;
                        default:
                            return e
                    }
                };
                return a
            }(a.PureComponent);
            W.Scenes = U
        }
    }
]);