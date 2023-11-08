(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["20615"], {
        506264: function(t, e, n) {
            var Symbol = n("626849").Symbol;
            t.exports = Symbol
        },
        60297: function(t, e, n) {
            var Symbol = n("506264"),
                r = n("754892"),
                i = n("19797"),
                o = Symbol ? Symbol.toStringTag : void 0;
            t.exports = function(t) {
                return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : o && o in Object(t) ? r(t) : i(t)
            }
        },
        306551: function(t, e, n) {
            n("781738");
            var r = n("84927"),
                i = /^\s+/;
            t.exports = function(t) {
                return t ? t.slice(0, r(t) + 1).replace(i, "") : t
            }
        },
        571255: function(t, e, n) {
            var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
            t.exports = r
        },
        754892: function(t, e, n) {
            var Symbol = n("506264"),
                r = Object.prototype,
                i = r.hasOwnProperty,
                o = r.toString,
                a = Symbol ? Symbol.toStringTag : void 0;
            t.exports = function(t) {
                var e = i.call(t, a),
                    n = t[a];
                try {
                    t[a] = void 0;
                    var r = !0
                } catch (t) {}
                var u = o.call(t);
                return r && (e ? t[a] = n : delete t[a]), u
            }
        },
        19797: function(t, e, n) {
            var r = Object.prototype.toString;
            t.exports = function(t) {
                return r.call(t)
            }
        },
        626849: function(t, e, n) {
            n("854508");
            var r = n("571255"),
                i = "object" == typeof self && self && self.Object === Object && self,
                o = r || i || Function("return this")();
            t.exports = o
        },
        84927: function(t, e, n) {
            var r = /\s/;
            t.exports = function(t) {
                for (var e = t.length; e-- && r.test(t.charAt(e)););
                return e
            }
        },
        478098: function(t, e, n) {
            n("70102");
            var r = n("952133"),
                i = n("645942"),
                o = n("261497"),
                a = Math.max,
                u = Math.min;
            t.exports = function(t, e, n) {
                var c, l, s, f, d, p, E = 0,
                    S = !1,
                    _ = !1,
                    T = !0;
                if ("function" != typeof t) throw TypeError("Expected a function");

                function v(e) {
                    var n = c,
                        r = l;
                    return c = l = void 0, E = e, f = t.apply(r, n)
                }
                e = o(e) || 0, r(n) && (S = !!n.leading, s = (_ = "maxWait" in n) ? a(o(n.maxWait) || 0, e) : s, T = "trailing" in n ? !!n.trailing : T);

                function P(t) {
                    var n = t - p,
                        r = t - E;
                    return void 0 === p || n >= e || n < 0 || _ && r >= s
                }

                function x() {
                    var t, n, r, o, a = i();
                    if (P(a)) return m(a);
                    d = setTimeout(x, (n = (t = a) - p, r = t - E, o = e - n, _ ? u(o, s - r) : o))
                }

                function m(t) {
                    return (d = void 0, T && c) ? v(t) : (c = l = void 0, f)
                }

                function N() {
                    var t, n = i(),
                        r = P(n);
                    if (c = arguments, l = this, p = n, r) {
                        if (void 0 === d) {
                            ;
                            return E = t = p, d = setTimeout(x, e), S ? v(t) : f
                        }
                        if (_) return clearTimeout(d), d = setTimeout(x, e), v(p)
                    }
                    return void 0 === d && (d = setTimeout(x, e)), f
                }
                return N.cancel = function() {
                    void 0 !== d && clearTimeout(d), E = 0, c = p = l = d = void 0
                }, N.flush = function() {
                    return void 0 === d ? f : m(i())
                }, N
            }
        },
        952133: function(t, e, n) {
            t.exports = function(t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e)
            }
        },
        346173: function(t, e, n) {
            t.exports = function(t) {
                return null != t && "object" == typeof t
            }
        },
        501870: function(t, e, n) {
            var r = n("60297"),
                i = n("346173");
            t.exports = function(t) {
                return "symbol" == typeof t || i(t) && "[object Symbol]" == r(t)
            }
        },
        645942: function(t, e, n) {
            var r = n("626849");
            t.exports = function() {
                return r.Date.now()
            }
        },
        229042: function(t, e, n) {
            n("70102");
            var r = n("478098"),
                i = n("952133");
            t.exports = function(t, e, n) {
                var o = !0,
                    a = !0;
                if ("function" != typeof t) throw TypeError("Expected a function");
                return i(n) && (o = "leading" in n ? !!n.leading : o, a = "trailing" in n ? !!n.trailing : a), r(t, e, {
                    leading: o,
                    maxWait: e,
                    trailing: a
                })
            }
        },
        261497: function(t, e, n) {
            var r = n("306551"),
                i = n("952133"),
                o = n("501870"),
                a = 0 / 0,
                u = /^[-+]0x[0-9a-f]+$/i,
                c = /^0b[01]+$/i,
                l = /^0o[0-7]+$/i,
                s = parseInt;
            t.exports = function(t) {
                if ("number" == typeof t) return t;
                if (o(t)) return a;
                if (i(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = i(e) ? e + "" : e
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = r(t);
                var n = c.test(t);
                return n || l.test(t) ? s(t.slice(2), n ? 2 : 8) : u.test(t) ? a : +t
            }
        },
        87657: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var r = n("37983"),
                i = n("884691"),
                o = n("77078"),
                a = n("390236"),
                u = i.memo(function(t) {
                    var e, n, u, c;
                    let {
                        user: l,
                        size: s = o.AvatarSizes.SIZE_32,
                        animate: f = !1,
                        "aria-hidden": d = !1,
                        ...p
                    } = t, E = i.useContext(a.default);
                    return (0, r.jsx)(o.Avatar, {
                        src: (e = l, n = (0, o.getAvatarSize)(s), u = f, c = E, e.getAvatarURL(c, n, u)),
                        size: s,
                        "aria-label": d ? void 0 : l.username,
                        "aria-hidden": d,
                        ...p
                    })
                })
        },
        7127: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                PaymentModalConfirmStep: function() {
                    return d
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("627445"),
                o = n.n(i),
                a = n("77078"),
                u = n("642906"),
                c = n("367767"),
                l = n("650484"),
                s = n("782340"),
                f = n("966425");

            function d(t) {
                let {
                    handleClose: e
                } = t, {
                    skusById: n,
                    selectedSkuId: i,
                    application: d
                } = (0, u.usePaymentContext)();
                o(null != i, "Expected selectedSkuId"), o(null != d, "Expected application");
                let p = n[i];
                o(null != p, "Expected sku");
                let E = s.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
                    applicationName: d.name,
                    itemName: p.name
                });
                return (0, r.jsxs)(l.PaymentPortalBody, {
                    children: [(0, r.jsx)(c.default, {}), (0, r.jsxs)("div", {
                        className: f.confirmation,
                        children: [(0, r.jsx)(a.Heading, {
                            variant: "heading-xxl/bold",
                            className: f.confirmationHeader,
                            children: "Success!"
                        }), (0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: E
                        }), (0, r.jsx)("div", {
                            className: f.divider
                        }), (0, r.jsx)(a.Button, {
                            onClick: e,
                            children: s.default.Messages.CLOSE
                        })]
                    })]
                })
            }
        },
        292215: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG: function() {
                    return d
                },
                ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG: function() {
                    return p
                },
                REVIEW_STEP_CONFIG: function() {
                    return _
                },
                ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function() {
                    return T
                },
                SHARED_STEP_CONFIGS: function() {
                    return v
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("357957"),
                o = n("85336"),
                a = n("262683"),
                u = n("946359"),
                c = n("724269"),
                l = n("7127"),
                s = n("99836"),
                f = n("217796");
            let d = {
                    key: null,
                    renderStep: t => (0, r.jsx)(f.OneTimePaymentPredicateStep, {
                        ...t
                    })
                },
                p = {
                    key: o.Step.ADD_PAYMENT_STEPS,
                    renderStep: t => (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(a.PaymentModalAddPaymentStep, {
                            ...t,
                            breadcrumbSteps: [o.Step.ADD_PAYMENT_STEPS, o.Step.REVIEW, o.Step.CONFIRM],
                            onReturn: () => {
                                let e = i.default.paymentSources;
                                0 === Object.keys(e).length ? t.handleClose() : t.handleStepChange(o.Step.REVIEW, {
                                    trackedFromStep: o.Step.ADD_PAYMENT_STEPS
                                })
                            }
                        })
                    }),
                    options: {
                        renderHeader: !0
                    }
                },
                E = {
                    key: o.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                    renderStep: () => (0, r.jsx)(c.default, {})
                },
                S = {
                    key: o.Step.AWAITING_AUTHENTICATION,
                    renderStep: () => (0, r.jsx)(u.default, {})
                },
                _ = {
                    key: o.Step.REVIEW,
                    renderStep: t => (0, r.jsx)(s.PaymentModalReviewStep, {
                        ...t
                    })
                },
                T = {
                    key: o.Step.CONFIRM,
                    renderStep: t => (0, r.jsx)(l.PaymentModalConfirmStep, {
                        ...t
                    })
                },
                v = [E, S]
        },
        217796: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                OneTimePaymentPredicateStep: function() {
                    return l
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                o = n("245187"),
                a = n("642906"),
                u = n("85336"),
                c = n("628738");

            function l(t) {
                let {
                    handleStepChange: e,
                    handleClose: n
                } = t, {
                    blockedPayments: l,
                    hasFetchedSkus: s,
                    paymentSources: f,
                    hasFetchedPaymentSources: d,
                    application: p
                } = (0, a.usePaymentContext)(), [E, S] = i.useState(!0);
                return (i.useEffect(() => {
                    let t = null != p;
                    s && d && t && S(!1)
                }, [s, d, p]), i.useEffect(() => {
                    !E && !l && (0 === Object.keys(f).length ? e(u.Step.ADD_PAYMENT_STEPS) : e(u.Step.REVIEW))
                }, [E, l, e, f]), E) ? (0, r.jsx)(c.default, {}) : l ? (0, r.jsx)(o.BlockedPaymentsContentModal, {
                    onClose: n
                }) : null
            }
        },
        405314: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                STANDARD_ONE_TIME_PAYMENT_STEPS: function() {
                    return f
                },
                default: function() {
                    return d
                }
            }), n("222007");
            var r = n("37983");
            n("884691");
            var i = n("812204"),
                o = n("685665"),
                a = n("642906"),
                u = n("385179"),
                c = n("292215"),
                l = n("843455");

            function s(t) {
                let {
                    onClose: e,
                    onComplete: n,
                    transitionState: i,
                    loadId: c,
                    applicationId: l,
                    skuId: s
                } = t, {} = (0, a.usePaymentContext)(), {
                    analyticsLocations: f
                } = (0, o.default)();
                return (0, r.jsx)(u.PaymentModal, {
                    onClose: e,
                    onComplete: n,
                    loadId: c,
                    applicationId: l,
                    skuId: s,
                    initialPlanId: null,
                    analyticsLocations: f,
                    transitionState: i
                })
            }
            let f = [c.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, c.ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG, ...c.SHARED_STEP_CONFIGS, c.REVIEW_STEP_CONFIG, c.ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG];

            function d(t) {
                let {
                    applicationId: e,
                    skuId: n,
                    analyticsLocations: u
                } = t, {
                    AnalyticsLocationProvider: c
                } = (0, o.default)(u, i.default.PREMIUM_PAYMENT_MODAL);
                return (0, r.jsx)(c, {
                    children: (0, r.jsx)(a.PaymentContextProvider, {
                        stepConfigs: f,
                        applicationId: e,
                        skuIDs: [n],
                        activeSubscription: null,
                        purchaseType: l.PurchaseTypes.ONE_TIME,
                        children: (0, r.jsx)(s, {
                            ...t
                        })
                    })
                })
            }
        }
    }
]);