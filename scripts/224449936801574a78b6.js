"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [31028], {
        100749: (t, e, n) => {
            n.d(e, {
                hz: () => w,
                ED: () => j,
                Ox: () => _,
                pV: () => E
            });
            var r = n(667294),
                i = n(202351),
                o = n(281110),
                u = n(347365),
                a = n(370459),
                c = n(536392),
                l = n(116094),
                s = n(2590);

            function f(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function p(t, e, n, r, i, o, u) {
                try {
                    var a = t[o](u),
                        c = a.value
                } catch (t) {
                    n(t);
                    return
                }
                a.done ? e(c) : Promise.resolve(c).then(r, i)
            }

            function y(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = t.apply(e, n);

                        function u(t) {
                            p(o, r, i, u, a, "next", t)
                        }

                        function a(t) {
                            p(o, r, i, u, a, "throw", t)
                        }
                        u(void 0)
                    }))
                }
            }

            function b(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function d(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        b(t, e, n[e])
                    }))
                }
                return t
            }

            function h(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function v(t, e) {
                if (null == t) return {};
                var n, r, i = function(t, e) {
                    if (null == t) return {};
                    var n, r, i = {},
                        o = Object.keys(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || (i[n] = t[n])
                    }
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                    }
                }
                return i
            }

            function m(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (e && o.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            i = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return f(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var O = function(t, e) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = e.call(t, u)
                            } catch (t) {
                                o = [6, t];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };

            function g() {
                return (g = y((function(t) {
                    var e, n, r, i, c, f, p, y, b, m, g, w;
                    return O(this, (function(O) {
                        switch (O.label) {
                            case 0:
                                e = t.items, n = t.paymentSourceId, r = t.trialId, i = t.code, c = t.applyEntitlements, f = void 0 !== c && c, p = t.currency, y = t.renewal, b = t.metadata;
                                e = (0, l.gB)(e);
                                m = {
                                    items: e.map((function(t) {
                                        var e = t.planId;
                                        return h(d({}, v(t, ["planId"])), {
                                            plan_id: e
                                        })
                                    })),
                                    payment_source_id: n,
                                    trial_id: r,
                                    code: i,
                                    apply_entitlements: f,
                                    currency: p,
                                    renewal: y,
                                    metadata: b
                                };
                                O.label = 1;
                            case 1:
                                O.trys.push([1, 3, , 4]);
                                return [4, o.ZP.post({
                                    url: s.ANM.BILLING_SUBSCRIPTIONS_PREVIEW,
                                    body: m,
                                    oldFormErrors: !0
                                })];
                            case 2:
                                g = O.sent();
                                return [2, a.Z.createInvoiceFromServer(g.body)];
                            case 3:
                                w = O.sent();
                                throw new u.HF(w);
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function w(t) {
                return I.apply(this, arguments)
            }

            function I() {
                return (I = y((function(t) {
                    var e, n, r, i, c, f, p, y, b, m, g, w;
                    return O(this, (function(O) {
                        switch (O.label) {
                            case 0:
                                e = t.subscriptionId, n = t.items, r = t.paymentSourceId, i = t.renewal, c = t.currency,
                                    f = t.applyEntitlements, p = void 0 !== f && f, y = t.analyticsLocations, b = t.analyticsLocation;
                                null != n && (n = (0, l.gB)(n));
                                m = {
                                    items: null == n ? void 0 : n.map((function(t) {
                                        var e = t.planId;
                                        return h(d({}, v(t, ["planId"])), {
                                            plan_id: e
                                        })
                                    })),
                                    payment_source_id: r,
                                    renewal: i,
                                    apply_entitlements: p,
                                    currency: c
                                };
                                O.label = 1;
                            case 1:
                                O.trys.push([1, 3, , 4]);
                                return [4, o.ZP.patch({
                                    url: s.ANM.BILLING_SUBSCRIPTION_PREVIEW(e),
                                    query: {
                                        location: b,
                                        location_stack: y
                                    },
                                    body: m,
                                    oldFormErrors: !0
                                })];
                            case 2:
                                g = O.sent();
                                return [2, a.Z.createInvoiceFromServer(g.body)];
                            case 3:
                                w = O.sent();
                                throw new u.HF(w);
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function S() {
                return (S = y((function(t) {
                    var e, n;
                    return O(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                e = t.subscriptionId;
                                return t.preventFetch ? [2, null] : [4, o.ZP.get({
                                    url: s.ANM.BILLING_SUBSCRIPTION_INVOICE(e),
                                    oldFormErrors: !0
                                })];
                            case 1:
                                n = r.sent();
                                return [2, a.Z.createInvoiceFromServer(n.body)]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function P(t, e) {
                var n = t.preventFetch,
                    o = void 0 !== n && n,
                    u = m((0,
                        r.useState)(null), 2),
                    a = u[0],
                    l = u[1],
                    s = m((0, r.useState)(null), 2),
                    f = s[0],
                    p = s[1],
                    b = (0, i.e7)([c.Z], (function() {
                        return c.Z.getSubscriptions()
                    }));
                (0, r.useEffect)((function() {
                    var t = !1;

                    function n() {
                        return (n = y((function() {
                            var n, r;
                            return O(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        i.trys.push([0, 2, , 3]);
                                        p(null);
                                        l(null);
                                        return [4, e()];
                                    case 1:
                                        n = i.sent();
                                        t || l(n);
                                        return [3, 3];
                                    case 2:
                                        r = i.sent();
                                        t || p(r);
                                        return [3, 3];
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))).apply(this, arguments)
                    }
                    o || function() {
                        n.apply(this, arguments)
                    }();
                    return function() {
                        t = !0
                    }
                }), [o, e, b]);
                return [a, f]
            }

            function j(t) {
                if ("subscriptionId" in t && null == t.subscriptionId) {
                    t.subscriptionId;
                    var e = v(t, ["subscriptionId"]);
                    t = e
                }
                var n = (0, r.useCallback)((function() {
                    return "subscriptionId" in t ? w(t) : "items" in t ? function(t) {
                        return g.apply(this, arguments)
                    }(t) : null
                }), [JSON.stringify(t)]);
                return P(t, n)
            }

            function _(t) {
                var e = (0, r.useCallback)((function() {
                    return function(t) {
                        return S.apply(this, arguments)
                    }(t)
                }), [JSON.stringify(t)]);
                return P(t, e)
            }

            function E(t) {
                var e = t.subscriptionPlanPrice;
                t.discounts.forEach((function(n) {
                    var r = n.amount / t.quantity;
                    e -= r
                }));
                return e
            }
        },
        741338: (t, e, n) => {
            n.d(e, {
                Z: () => r
            });
            const r = (0, n(260561).B)({
                kind: "user",
                id: "2023-04_guild_boosting_settings_redesign",
                label: "Guild Boosting Settings Redesign",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Variant 1",
                    config: {
                        enabled: !0
                    }
                }, {
                    id: 2,
                    label: "Variant 1 international",
                    config: {
                        enabled: !0
                    }
                }]
            })
        }
    }
]);
//# sourceMappingURL=224449936801574a78b6.js.map