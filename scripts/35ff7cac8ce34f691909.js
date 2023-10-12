"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [64427], {
        659646: (e, t, r) => {
            r.d(t, {
                L: () => u,
                C: () => i
            });
            var n = r(289283),
                o = r(658025),
                a = r(2590),
                u = function(e) {
                    return [a.HeQ.CARD, a.HeQ.VENMO].includes(e.type) && "US" === e.country ? n.tq ? o.ZP.Layouts.SETTINGS_US_MOBILE : o.ZP.Layouts.SETTINGS_US : e.type === a.HeQ.CARD && "US" !== e.country ? n.tq ? o.ZP.Layouts.SETTINGS_INTL_MOBILE : o.ZP.Layouts.SETTINGS_INTL : n.tq ? o.ZP.Layouts.SETTINGS_INTL_NO_NAME_MOBILE : o.ZP.Layouts.SETTINGS_INTL_NO_NAME
                },
                i = n.tq ? o.ZP.Layouts.SETTINGS_US_MOBILE : o.ZP.Layouts.SETTINGS_US
        },
        464427: (e, t, r) => {
            r.r(t);
            r.d(t, {
                triggerBrowserDownload: () => g,
                default: () => L
            });
            var n = r(785893),
                o = r(667294),
                a = r(281110),
                u = r(304548),
                i = r(658025),
                l = r(539381),
                c = r(659646),
                s = r(2590),
                y = r(473708),
                f = r(786909),
                p = r.n(f);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function b(e, t, r, n, o, a, u) {
                try {
                    var i = e[a](u),
                        l = i.value
                } catch (e) {
                    r(e);
                    return
                }
                i.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function O(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var a = e.apply(t, r);

                        function u(e) {
                            b(a, n, o, u, i, "next", e)
                        }

                        function i(e) {
                            b(a, n, o, u, i, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function h(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        h(e, t, r[t])
                    }))
                }
                return e
            }

            function m(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function I(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) {
                        r = a[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) {
                        r = a[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function _(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, a = [],
                            u = !0,
                            i = !1;
                        try {
                            for (r = r.call(e); !(u = (n = r.next()).done); u = !0) {
                                a.push(n.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            o = e
                        } finally {
                            try {
                                u || null == r.return || r.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var N = function(e, t) {
                var r, n, o, a, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function i(a) {
                    return function(i) {
                        return function(a) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                                (n = 0, o) && (a = [2 & a[0], o.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        n = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            u.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = a;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(a);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                a = t.call(e, u)
                            } catch (e) {
                                a = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, i])
                    }
                }
            };

            function g(e, t) {
                var r = URL.createObjectURL(t),
                    n = document.createElement("a");
                n.href = r;
                n.download = "receipt_".concat(e, ".pdf");
                document.body.appendChild(n);
                n.click();
                document.body.removeChild(n);
                URL.revokeObjectURL(r)
            }

            function v(e, t, r) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = O((function(e, t, r) {
                    var n, o, u;
                    return N(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                n = s.ANM.BILLING_INVOICE_PDF;
                                o = t ? {
                                    name: r.name,
                                    line_1: r.line1,
                                    line_2: r.line2,
                                    city: r.city,
                                    state: r.state,
                                    postal_code: r.postalCode,
                                    country: r.country
                                } : null;
                                return [4, a.ZP.post({
                                    url: n,
                                    body: {
                                        payment_id: e,
                                        billing_address_override: t ? o : null
                                    },
                                    oldFormErrors: !0,
                                    binary: !0
                                })];
                            case 1:
                                u = i.sent();
                                g(e, u.body);
                                return [2, !0]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function L(e) {
                var t = e.payment,
                    r = e.paymentSource,
                    a = I(e, ["payment", "paymentSource"]),
                    s = {
                        name: "",
                        line1: "",
                        line2: "",
                        city: "",
                        postalCode: "",
                        state: "",
                        country: r.country
                    },
                    f = _(o.useState(s), 2),
                    d = f[0],
                    b = f[1],
                    h = _(o.useState(!1), 2),
                    g = h[0],
                    E = h[1],
                    L = _(o.useState(!1), 2),
                    j = L[0],
                    w = L[1],
                    P = _(o.useState(!1), 2),
                    T = P[0],
                    D = P[1],
                    C = _(o.useState(""), 2),
                    A = C[0],
                    M = C[1];

                function x() {
                    x = O((function() {
                        var e, t, r, n, o, a;
                        return N(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    D(!0);
                                    u.label = 1;
                                case 1:
                                    u.trys.push([1, 3, 5, 6]);
                                    return [4, v(G, g, d)];
                                case 2:
                                    u.sent();
                                    return [3, 6];
                                case 3:
                                    return [4, (e = u.sent()).body.text()];
                                case 4:
                                    t = u.sent();
                                    r = JSON.parse(t);
                                    n = new l.Z(m(S({}, e), {
                                        body: r
                                    }));
                                    a = null !== (o = n.getAnyErrorMessage()) && void 0 !== o ? o : y.Z.Messages.BILLING_DOWNLOAD_INVOICE_PDF_BUTTON_ERROR;
                                    M(a);
                                    return [3, 6];
                                case 5:
                                    D(!1);
                                    return [7];
                                case 6:
                                    return [2]
                            }
                        }))
                    }));
                    return x.apply(this, arguments)
                }
                var R = c.C,
                    G = t.id,
                    Z = (0, n.jsx)("div", {
                        children: (0, n.jsx)(u.FormSwitch, {
                            value: g,
                            note: y.Z.Messages.BILLING_DOWNLOAD_INVOICE_ADDRESS_OVERRIDE_DESCRIPTION,
                            onChange: E,
                            children: y.Z.Messages.BILLING_DOWNLOAD_INVOICE_ADDRESS_OVERRIDE_TOGGLE
                        })
                    }),
                    B = g ? (0, n.jsx)(i.ZP, m(S({}, d), {
                        mode: i.ZP.Modes.CREATE,
                        layout: R,
                        onBillingAddressChange: function(e, t) {
                            b(e);
                            w(t)
                        },
                        error: null
                    })) : null;
                return (0, n.jsxs)(u.ModalRoot, m(S({
                    className: p().modal,
                    size: u.ModalSize.DYNAMIC
                }, a), {
                    children: [(0, n.jsx)(u.ModalHeader, {
                        separator: !1,
                        children: (0, n.jsx)(u.Heading, {
                            variant: "heading-lg/semibold",
                            children: y.Z.Messages.BILLING_DOWNLOAD_INVOICE
                        })
                    }), (0, n.jsxs)(u.ModalContent, {
                        className: p().body,
                        children: [Z, B]
                    }), (0, n.jsxs)(u.ModalFooter, {
                        children: [(0, n.jsx)(u.Button, {
                            type: "submit",
                            color: u.Button.Colors.GREEN,
                            disabled: g && !j,
                            onClick: function() {
                                return x.apply(this, arguments)
                            },
                            submitting: T,
                            autoFocus: !0,
                            children: y.Z.Messages.BILLING_DOWNLOAD_INVOICE_PDF_BUTTON
                        }), (0, n.jsx)(u.Text, {
                            color: "text-danger",
                            className: p().error,
                            variant: "text-sm/semibold",
                            children: A
                        })]
                    })]
                }))
            }
        }
    }
]);