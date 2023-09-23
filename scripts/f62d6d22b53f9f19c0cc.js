"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [28629], {
        933599: (e, t, r) => {
            r.d(t, {
                Xt: () => o,
                sn: () => i,
                tt: () => u,
                Ow: () => c,
                fw: () => l
            });
            var n = r(744564);

            function o(e) {
                n.Z.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function i(e, t) {
                n.Z.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function u() {
                n.Z.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function c(e, t) {
                n.Z.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function l() {
                n.Z.wait((function() {
                    return n.Z.dispatch({
                        type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                    })
                }))
            }
        },
        388007: (e, t, r) => {
            r.d(t, {
                p: () => o
            });
            var n = r(744564);

            function o() {
                n.Z.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        646461: (e, t, r) => {
            r.d(t, {
                O: () => s
            });
            var n = r(785893),
                o = (r(667294), r(795308)),
                i = r(633878);

            function u(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function c(e, t) {
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

            function l(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            var s = function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    s = e.height,
                    a = void 0 === s ? 24 : s,
                    f = e.color,
                    _ = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    E = e.colorClass,
                    I = void 0 === E ? "" : E,
                    O = l(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            u(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(O)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof _ ? _ : _.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.799 1.169a1 1 0 0 1 1.388.275A3.496 3.496 0 0 0 11.999 16a3.495 3.495 0 0 0 2.912-1.556 1 1 0 0 1 1.662 1.112A5.496 5.496 0 0 1 12 18a5.496 5.496 0 0 1-4.573-2.444A1 1 0 0 1 7.7 14.17Z",
                        clipRule: "evenodd",
                        className: I
                    })
                }))
            }
        },
        39083: (e, t, r) => {
            r.d(t, {
                r: () => s
            });
            var n = r(785893),
                o = (r(667294), r(795308)),
                i = r(633878);

            function u(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function c(e, t) {
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

            function l(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            var s = function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    s = e.height,
                    a = void 0 === s ? 24 : s,
                    f = e.color,
                    _ = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    E = e.colorClass,
                    I = void 0 === E ? "" : E,
                    O = l(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            u(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(O)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof _ ? _ : _.css,
                        fillRule: "evenodd",
                        d: "M13 16V5.414l3.293 3.293a1 1 0 1 0 1.414-1.414l-5-5-.007-.007a.997.997 0 0 0-1.4 0l-.008.008-5 4.999a1 1 0 0 0 1.415 1.414L11 5.414V16a1 1 0 1 0 2 0ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z",
                        clipRule: "evenodd",
                        className: I
                    })
                }))
            }
        },
        662478: (e, t, r) => {
            r.d(t, {
                Z: () => u
            });
            var n = r(667294);

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function i(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            u = !0,
                            c = !1;
                        try {
                            for (r = r.call(e); !(u = (n = r.next()).done); u = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                u || null == r.return || r.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return o(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return o(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(e) {
                var t = i((0, n.useState)(!1), 2),
                    r = t[0],
                    o = t[1],
                    u = (0, n.useRef)(e.current);
                (0, n.useEffect)((function() {
                    u.current = e.current
                }), [e]);
                (0, n.useEffect)((function() {
                    var e = u.current;
                    if (null != e) {
                        var t = function() {
                                return o(!0)
                            },
                            r = function() {
                                return o(!1)
                            };
                        e.addEventListener("mouseenter", t);
                        e.addEventListener("mouseleave", r);
                        return function() {
                            e.removeEventListener("mouseenter", t);
                            e.removeEventListener("mouseleave", r)
                        }
                    }
                }), [u]);
                return r
            }
        },
        57190: (e, t, r) => {
            r.d(t, {
                A: () => y,
                Z: () => d
            });
            var n = r(785893),
                o = (r(667294),
                    r(294184)),
                i = r.n(o),
                u = r(633878),
                c = r(531441),
                l = r(616276),
                s = r(784065),
                a = r.n(s);

            function f(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function _(e) {
                var t = e.className,
                    r = e.children,
                    o = e.forceUseColor,
                    u = void 0 !== o && o,
                    c = e.hideStars;
                return (0, n.jsxs)("span", {
                    className: i()(a().container, t, f({}, a().containerColored, u)),
                    children: [r, c ? null : (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(l.Z, {
                            foreground: a().sparkleStarTopRight
                        }), (0, n.jsx)(l.Z, {
                            foreground: a().sparkleStarRight
                        }), (0, n.jsx)(l.Z, {
                            foreground: a().sparkleStarBottomLeft
                        })]
                    })]
                })
            }
            var E = r(473708),
                I = r(196744),
                O = r.n(I);

            function p(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        p(e, t, r[t])
                    }))
                }
                return e
            }

            function b(e, t) {
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

            function y(e) {
                return (0, n.jsx)("svg", b(T({}, (0, u.Z)(T({}, e))), {
                    width: "25",
                    height: "48",
                    viewBox: "0 0 25 48",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, n.jsx)("path", {
                        d: "M22.6014 22.1003C20.4432 20.6855 18.6067 18.8326 17.2112 16.6618C15.8157 14.4911 14.8925 12.0511 14.5014 9.50028L13.2014 0.700277C13.1553 0.497624 13.0404 0.317179 12.8764 0.189581C12.7123 0.0619821 12.5092 -0.00490199 12.3014 0.000279992C12.1055 -0.00125605 11.9158 0.0691675 11.7683 0.198194C11.6209 0.327221 11.5259 0.505874 11.5014 0.700277L10.1014 9.50028C9.74796 12.0629 8.8402 14.5177 7.44131 16.6938C6.04242 18.8698 4.18605 20.7148 2.00143 22.1003L0.901394 22.8003C0.770775 22.8872 0.665162 23.0067 0.594998 23.1471C0.524833 23.2874 0.49259 23.4436 0.501431 23.6003C0.49259 23.7569 0.524833 23.9132 0.594998 24.0535C0.665162 24.1938 0.770775 24.3134 0.901394 24.4003L2.00143 25.1003C4.18605 26.4857 6.04242 28.3307 7.44131 30.5068C8.8402 32.6828 9.74796 35.1376 10.1014 37.7003L11.5014 46.4003C11.5014 46.6125 11.5857 46.8159 11.7357 46.966C11.8858 47.116 12.0892 47.2003 12.3014 47.2003C12.5238 47.2017 12.7388 47.1207 12.9049 46.973C13.0711 46.8252 13.1767 46.6212 13.2014 46.4003L14.5014 37.7003C14.8925 35.1495 15.8157 32.7095 17.2112 30.5387C18.6067 28.368 20.4432 26.5151 22.6014 25.1003L23.8014 24.4003C24.0329 24.1951 24.1761 23.9085 24.2014 23.6003C24.1761 23.292 24.0329 23.0054 23.8014 22.8003L22.6014 22.1003Z",
                        fill: "currentColor"
                    })
                }))
            }

            function d(e) {
                var t, r = e.className,
                    o = e.forceUseColorForSparkles,
                    u = void 0 !== o && o,
                    l = e.shouldInheritTextColor,
                    s = void 0 !== l && l,
                    a = e.shouldInheritBackgroundColor,
                    f = void 0 !== a && a;
                return (0, n.jsx)(_, {
                    className: r,
                    forceUseColor: u,
                    children: (0, n.jsx)(c.IG, {
                        disableColor: !0,
                        className: i()(O().tag, (t = {}, p(t, O().inheritTextColor, s), p(t, O().inheritBackgroundColor, f), t)),
                        text: E.Z.Messages.NEW
                    })
                })
            }
        },
        276611: (e, t, r) => {
            r.d(t, {
                Z: () => d
            });
            var n = r(785893),
                o = (r(667294), r(468811)),
                i = r.n(o),
                u = r(882723),
                c = r(933599),
                l = r(388007),
                s = r(436145),
                a = r(652591),
                f = r(930948),
                _ = r(2590),
                E = r(203600);

            function I(e, t, r, n, o, i, u) {
                try {
                    var c = e[i](u),
                        l = c.value
                } catch (e) {
                    r(e);
                    return
                }
                c.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function O(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function u(e) {
                            I(i, n, o, u, c, "next", e)
                        }

                        function c(e) {
                            I(i, n, o, u, c, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function p(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function T(e, t) {
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

            function b(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            var y = function(e, t) {
                var r, n, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        n = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = t.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, c])
                    }
                }
            };

            function d(e) {
                var t = null != e ? e : {},
                    o = t.initialPlanId,
                    I = t.followupSKUInfo,
                    d = t.onClose,
                    S = t.onComplete,
                    R = t.onSubscriptionConfirmation,
                    P = t.analyticsLocations,
                    g = t.analyticsObject,
                    v = t.analyticsLocation,
                    h = t.analyticsSourceLocation,
                    M = t.isGift,
                    U = void 0 !== M && M,
                    L = t.giftMessage,
                    D = t.subscriptionTier,
                    m = t.trialId,
                    j = t.postSuccessGuild,
                    N = t.openInvoiceId,
                    C = t.applicationId,
                    w = t.referralTrialOfferId,
                    G = t.giftRecipient,
                    A = !1,
                    Z = i().v4();
                (0, u.openModalLazy)(O((function() {
                    var e, t;
                    return y(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, Promise.all([r.e(40532), r.e(29392), r.e(39685), r.e(47007), r.e(6543), r.e(29342), r.e(92224), r.e(40056), r.e(20637), r.e(96259), r.e(99676), r.e(23626), r.e(97597), r.e(27499), r.e(79913), r.e(19493), r.e(64466), r.e(92465), r.e(45353), r.e(10675), r.e(73727), r.e(52555), r.e(54602), r.e(61953), r.e(6565), r.e(20419), r.e(24251), r.e(3790), r.e(84441), r.e(30027), r.e(94302), r.e(47701), r.e(70535), r.e(82786), r.e(67367), r.e(98847), r.e(31520), r.e(75700), r.e(91406), r.e(52171), r.e(84959), r.e(77579), r.e(73634), r.e(14606), r.e(44832), r.e(24417), r.e(99652), r.e(95839), r.e(30144), r.e(66885), r.e(38039), r.e(93862), r.e(46285), r.e(1162), r.e(4230), r.e(78230), r.e(89984), r.e(56510), r.e(43816), r.e(27059), r.e(24501), r.e(35796), r.e(23827), r.e(25978), r.e(67783), r.e(68929), r.e(53521), r.e(43814), r.e(24777), r.e(70301), r.e(513), r.e(89609), r.e(20440)]).then(r.bind(r, 786763))];
                            case 1:
                                e = i.sent(), t = e.default;
                                return [2, function(e) {
                                    var r = e.onClose,
                                        i = b(e, ["onClose"]);
                                    return (0, n.jsx)(t, T(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var r = null != arguments[t] ? arguments[t] : {},
                                                n = Object.keys(r);
                                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                                            }))));
                                            n.forEach((function(t) {
                                                p(e, t, r[t])
                                            }))
                                        }
                                        return e
                                    }({}, i), {
                                        loadId: Z,
                                        subscriptionTier: D,
                                        skuId: D,
                                        isGift: U,
                                        giftMessage: L,
                                        giftRecipient: G,
                                        initialPlanId: o,
                                        followupSKUInfo: I,
                                        onClose: function(e) {
                                            r();
                                            null == d || d(e);
                                            e && (null == R || R())
                                        },
                                        onComplete: function() {
                                            A = !0;
                                            null == S || S();
                                            if (!U) {
                                                (0, s.Dd)(!0);
                                                (0, s.HY)(!0)
                                            }
                                        },
                                        onSubscriptionConfirmation: R,
                                        analyticsLocations: P,
                                        analyticsObject: g,
                                        analyticsLocation: v,
                                        analyticsSourceLocation: h,
                                        trialId: m,
                                        postSuccessGuild: j,
                                        planGroup: E.Y1,
                                        openInvoiceId: N,
                                        applicationId: C,
                                        referralTrialOfferId: w
                                    }))
                                }]
                        }
                    }))
                })), {
                    modalKey: "payment-modal",
                    onCloseCallback: function() {
                        A || a.default.track(_.rMx.PAYMENT_FLOW_CANCELED, {
                            load_id: Z,
                            payment_type: _.Zuq[_.GZQ.SUBSCRIPTION],
                            location: null != v ? v : g,
                            source: h,
                            subscription_type: _.NYc.PREMIUM,
                            is_gift: U,
                            eligible_for_trial: null != m,
                            application_id: C,
                            location_stack: P
                        });
                        (0, c.fw)();
                        (0, l.p)();
                        null == d || d(A);
                        if (A) {
                            U || f.S.dispatch(_.CkL.PREMIUM_SUBSCRIPTION_CREATED);
                            null == R || R()
                        }
                    },
                    onCloseRequest: _.dG4
                })
            }
        },
        666870: (e, t, r) => {
            r.d(t, {
                _O: () => c,
                se: () => l,
                s6: () => s,
                rT: () => a
            });
            var n = r(202351),
                o = r(473903),
                i = r(536392),
                u = r(203600),
                c = function() {
                    var e = (0, n.e7)([i.Z], (function() {
                        return i.Z.getPremiumTypeSubscription()
                    }));
                    return null != (null == e ? void 0 : e.trialId)
                },
                l = function() {
                    var e;
                    return null != (null === (e = i.Z.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.trialId)
                },
                s = function(e) {
                    return null != (null == e ? void 0 : e.trialId) && (e.trialId === u.i_ || e.trialId === u.Cn || e.trialId === u.Rd || e.trialId === u.a7)
                };

            function a() {
                var e = (0, n.e7)([i.Z], (function() {
                        return i.Z.getPremiumTypeSubscription()
                    })),
                    t = (0, n.e7)([o.default], (function() {
                        return o.default.getCurrentUser()
                    }));
                return null != (null == e ? void 0 : e.trialId) ? null == t ? void 0 : t.premiumType : null
            }
        },
        436145: (e, t, r) => {
            r.d(t, {
                Lt: () => o,
                XL: () => i,
                Rr: () => u,
                HY: () => c,
                Dd: () => l,
                p: () => s
            });
            var n = r(744564),
                o = function() {
                    n.Z.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                i = function() {
                    n.Z.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                u = function() {
                    n.Z.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                c = function(e) {
                    n.Z.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                l = function(e) {
                    n.Z.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                s = function(e) {
                    n.Z.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        775506: (e, t, r) => {
            r.d(t, {
                Z: () => d
            });
            var n = r(202351),
                o = r(744564),
                i = r(536392);

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1;
                    n.configurable = !0;
                    "value" in n && (n.writable = !0);
                    Object.defineProperty(e, n.key, n)
                }
            }

            function l(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function s(e) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
            }

            function a(e, t) {
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

            function f(e, t) {
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function _(e, t) {
                _ = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return _(e, t)
            }
            var E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function I(e) {
                var t = function() {
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
                    var r, n = s(e);
                    if (t) {
                        var o = s(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return f(this, r)
                }
            }
            var O = !1,
                p = {};

            function T(e) {
                var t = e.guildBoostSlot;
                p = a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            l(e, t, r[t])
                        }))
                    }
                    return e
                }({}, p), l({}, t.id, t))
            }

            function b() {
                var e = {},
                    t = !0,
                    r = !1,
                    n = void 0;
                try {
                    for (var o, u = Object.values(p)[Symbol.iterator](); !(t = (o = u.next()).done); t = !0) {
                        var c = o.value;
                        e[c.id] = c;
                        c.subscription = i.Z.getSubscriptionById(c.subscriptionId)
                    }
                } catch (e) {
                    r = !0;
                    n = e
                } finally {
                    try {
                        t || null == u.return || u.return()
                    } finally {
                        if (r) throw n
                    }
                }
                p = e
            }
            var y = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && _(e, t)
                }(r, e);
                var t = I(r);

                function r() {
                    u(this, r);
                    return t.apply(this, arguments)
                }
                var n = r.prototype;
                n.initialize = function() {
                    this.syncWith([i.Z], b)
                };
                n.getGuildBoostSlot = function(e) {
                    return p[e]
                };
                ! function(e, t, r) {
                    t && c(e.prototype, t);
                    r && c(e, r)
                }(r, [{
                    key: "hasFetched",
                    get: function() {
                        return O
                    }
                }, {
                    key: "boostSlots",
                    get: function() {
                        return p
                    }
                }]);
                return r
            }(n.ZP.Store);
            y.displayName = "GuildBoostSlotStore";
            const d = new y(o.Z, {
                GUILD_BOOST_SLOTS_FETCH_SUCCESS: function(e) {
                    var t = e.guildBoostSlots;
                    p = {};
                    t.forEach((function(e) {
                        p[e.id] = e
                    }));
                    O = !0
                },
                GUILD_BOOST_SLOT_UPDATE_SUCCESS: T,
                GUILD_BOOST_SLOT_CREATE: T,
                GUILD_BOOST_SLOT_UPDATE: T,
                LOGOUT: function() {
                    p = {};
                    O = !1
                }
            })
        },
        709189: (e, t, r) => {
            r.d(t, {
                Z: () => U,
                C: () => D
            });
            var n = r(785893),
                o = r(667294),
                i = r(294184),
                u = r.n(i),
                c = r(853158),
                l = r(882723),
                s = r(662478),
                a = r(107364),
                f = r(109994),
                _ = r.n(f);

            function E(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function I(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function O(e) {
                O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return O(e)
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        I(e, t, r[t])
                    }))
                }
                return e
            }

            function T(e, t) {
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

            function b(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function y(e, t) {
                return !t || "object" !== P(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function d(e, t) {
                d = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return d(e, t)
            }
            var S, R, P = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function g(e) {
                var t = function() {
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
                    var r, n = O(e);
                    if (t) {
                        var o = O(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return y(this, r)
                }
            }! function(e) {
                e.DEFAULT = "default";
                e.SMALL = "small"
            }(S || (S = {}));
            var v, h = (I(R = {}, S.DEFAULT, _().shineDefault), I(R, S.SMALL, _().shineSmall), R),
                M = (I(v = {}, S.DEFAULT, _().shineInnerDefault), I(v, S.SMALL, _().shineInnerSmall), v),
                U = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && d(e, t)
                    }(r, e);
                    var t = g(r);

                    function r() {
                        E(this, r);
                        return t.apply(this, arguments)
                    }
                    r.prototype.render = function() {
                        var e = this.props,
                            t = e.className,
                            r = e.shineSize,
                            o = e.shinePaused,
                            i = b(e, ["className", "shineSize", "shinePaused"]);
                        return (0, n.jsx)(c.Z.div, T(p({}, i), {
                            className: u()(_().shineContainer, t, I({}, _().shinePaused, o)),
                            children: (0, n.jsx)(a.Z, {
                                align: a.Z.Align.CENTER,
                                justify: a.Z.Justify.CENTER,
                                className: h[r],
                                children: (0, n.jsx)("div", {
                                    className: M[r]
                                })
                            })
                        }))
                    };
                    return r
                }(o.PureComponent);
            U.defaultProps = {
                shineSize: S.DEFAULT
            };
            var L = function(e) {
                var t = e.children,
                    r = e.className,
                    i = e.disabled,
                    c = e.submitting,
                    a = e.pauseAnimation,
                    f = e.shineSize,
                    E = void 0 === f ? S.DEFAULT : f,
                    I = e.shinePaused,
                    O = e.buttonShineClassName,
                    y = e.onlyShineOnHover,
                    d = b(e, ["children", "className", "disabled", "submitting", "pauseAnimation", "shineSize", "shinePaused", "buttonShineClassName", "onlyShineOnHover"]),
                    R = o.createRef(),
                    P = (0, s.Z)(R),
                    g = !i && !c && !0 !== a && (!y || P);
                return (0, n.jsxs)(l.Button, T(p({
                    buttonRef: R
                }, d), {
                    className: u()(_().shinyButton, r),
                    disabled: i,
                    submitting: c,
                    children: [t, g ? (0, n.jsx)(U, {
                        shinePaused: I,
                        className: u()(_().buttonShine, y ? _().onlyShineOnHover : void 0, O),
                        shineSize: E
                    }) : null]
                }))
            };
            L.ShineSizes = S;
            const D = L
        },
        781453: (e, t, r) => {
            r.d(t, {
                Z: () => a
            });
            var n = r(785893),
                o = (r(667294), r(450520)),
                i = r(646461),
                u = r(633878);

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function l(e, t) {
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

            function s(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const a = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    a = e.color,
                    f = void 0 === a ? "currentColor" : a,
                    _ = e.foreground,
                    E = s(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            c(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, u.Z)(E)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: f,
                        className: _,
                        d: "M12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 6.477 17.523 2 12 2ZM8 6C9.104 6 10 6.896 10 8C10 9.105 9.104 10 8 10C6.896 10 6 9.105 6 8C6 6.896 6.896 6 8 6ZM18 14C18 16.617 15.14 19 12 19C8.86 19 6 16.617 6 14V13H18V14ZM16 10C14.896 10 14 9.105 14 8C14 6.896 14.896 6 16 6C17.104 6 18 6.896 18 8C18 9.105 17.104 10 16 10Z"
                    })
                }))
            }), i.O)
        },
        832520: (e, t, r) => {
            r.d(t, {
                Z: () => E
            });
            var n = r(785893),
                o = (r(667294), r(450520)),
                i = r(795308),
                u = r(633878);

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function l(e, t) {
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

            function s(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function a(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function f(e, t) {
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

            function _(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const E = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    c = e.color,
                    l = void 0 === c ? "currentColor" : c,
                    s = e.foreground,
                    E = _(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            a(e, t, r[t])
                        }))
                    }
                    return e
                }({
                    width: r,
                    height: i
                }, (0, u.Z)(E)), {
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: l,
                        className: s,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    a = void 0 === o ? 24 : o,
                    f = e.color,
                    _ = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    E = e.colorClass,
                    I = void 0 === E ? "" : E,
                    O = s(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            c(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, u.Z)(O)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof _ ? _ : _.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.089A4.089 4.089 0 0 1 12 4.898 4.089 4.089 0 0 1 15.912 2H16a4 4 0 0 1 3.465 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10a2 2 0 0 1 2-2h.535A3.982 3.982 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.088c-.959 0-1.794.652-2.027 1.582L13.281 8H16Zm-5.885-2.418L10.719 8H8a2 2 0 1 1 0-4h.089c.958 0 1.793.652 2.026 1.582ZM3 20a2 2 0 0 0 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20Zm10.5 2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        clipRule: "evenodd",
                        className: I
                    })
                }))
            }))
        },
        217674: (e, t, r) => {
            r.d(t, {
                Z: () => l
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function u(e, t) {
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

            function c(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function l(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    l = e.height,
                    s = void 0 === l ? 24 : l,
                    a = e.color,
                    f = void 0 === a ? "currentColor" : a,
                    _ = e.foreground,
                    E = c(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsxs)("svg", u(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(E)), {
                    width: r,
                    height: s,
                    viewBox: "0 0 8 12",
                    children: [(0, n.jsx)("path", {
                        d: "M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z",
                        fill: f,
                        className: _
                    }), (0, n.jsx)("path", {
                        d: "M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z",
                        fill: f,
                        className: _
                    })]
                }))
            }
        },
        616276: (e, t, r) => {
            r.d(t, {
                Z: () => s
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        i(e, t, r[t])
                    }))
                }
                return e
            }

            function c(e, t) {
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

            function l(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function s(e) {
                var t = e.width,
                    r = void 0 === t ? 14 : t,
                    i = e.height,
                    s = void 0 === i ? 13 : i,
                    a = e.color,
                    f = void 0 === a ? "currentColor" : a,
                    _ = e.foreground,
                    E = l(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", c(u({}, (0, o.Z)(u({}, E))), {
                    width: r,
                    height: s,
                    viewBox: "0 0 ".concat(r, " ").concat(s),
                    className: _,
                    fill: f,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, n.jsx)("path", {
                        d: "M9.30705 8.36284L13.5731 6.46363C13.5889 6.45487 13.6022 6.44203 13.6114 6.42644C13.6206 6.41086 13.6255 6.39309 13.6255 6.375C13.6255 6.35691 13.6206 6.33914 13.6114 6.32356C13.6022 6.30797 13.5889 6.29513 13.5731 6.28637L9.30705 4.38716C9.29358 4.38716 9.28066 4.38183 9.27114 4.37233C9.26162 4.36283 9.25627 4.34995 9.25627 4.33652L7.3518 0.0569762C7.30102 -0.0189921 7.19944 -0.0189921 7.17405 0.0569762L5.26958 4.33652C5.24419 4.36184 5.24419 4.38716 5.2188 4.38716L0.927401 6.28637C0.911525 6.29513 0.898291 6.30797 0.889077 6.32356C0.879862 6.33914 0.875 6.35691 0.875 6.375C0.875 6.39309 0.879862 6.41086 0.889077 6.42644C0.898291 6.44203 0.911525 6.45487 0.927401 6.46363L5.2188 8.36284C5.24419 8.36284 5.24419 8.38816 5.26958 8.41348L7.17405 12.693C7.19944 12.769 7.30102 12.769 7.3518 12.693L9.25627 8.41348C9.25627 8.40005 9.26162 8.38717 9.27114 8.37767C9.28066 8.36817 9.29358 8.36284 9.30705 8.36284Z",
                        fill: "currentColor"
                    })
                }))
            }
        },
        930865: (e, t, r) => {
            r.d(t, {
                Ro: () => y,
                FZ: () => S,
                A3: () => R,
                ig: () => P,
                U2: () => g,
                Je: () => v,
                cP: () => h,
                nW: () => M,
                e9: () => U,
                _p: () => L,
                ge: () => D,
                rF: () => m,
                Fd: () => j,
                xf: () => N,
                tb: () => C,
                f2: () => w,
                vx: () => G,
                aq: () => A,
                Vx: () => Z,
                _k: () => x,
                vn: () => B,
                gZ: () => k,
                Qi: () => V,
                yw: () => H,
                KK: () => Y,
                tl: () => z
            });
            var n, o, i = r(496486),
                u = r.n(i),
                c = r(730381),
                l = r.n(c),
                s = r(775506),
                a = r(536392),
                f = r(452723),
                _ = r(72580),
                E = r(348592),
                I = r(116094),
                O = r(2590),
                p = r(203600),
                T = r(473708);

            function b(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }! function(e) {
                e[e.LEVEL_1 = 1] = "LEVEL_1";
                e[e.LEVEL_2 = 2] = "LEVEL_2";
                e[e.LEVEL_3 = 3] = "LEVEL_3";
                e[e.LEVEL_4 = 4] = "LEVEL_4";
                e[e.LEVEL_5 = 5] = "LEVEL_5";
                e[e.LEVEL_6 = 6] = "LEVEL_6";
                e[e.LEVEL_7 = 7] = "LEVEL_7";
                e[e.LEVEL_8 = 8] = "LEVEL_8";
                e[e.LEVEL_9 = 9] = "LEVEL_9"
            }(n || (n = {}));
            var y;
            Object.freeze((b(o = {}, 1, 1), b(o, 2, 2), b(o, 3, 3), b(o, 4, 6), b(o, 5, 9), b(o, 6, 12), b(o, 7, 15), b(o, 8, 18), b(o, 9, 24), o));
            ! function(e) {
                e[e.EMOJI = 1] = "EMOJI";
                e[e.AUDIO = 2] = "AUDIO";
                e[e.ANIMATED = 3] = "ANIMATED";
                e[e.CUSTOMIZATION = 4] = "CUSTOMIZATION";
                e[e.UPLOAD = 5] = "UPLOAD";
                e[e.VANITY = 6] = "VANITY";
                e[e.STREAM = 7] = "STREAM";
                e[e.STICKER = 8] = "STICKER";
                e[e.CUSTOM_ROLE_ICON = 11] = "CUSTOM_ROLE_ICON";
                e[e.STAGE_VIDEO = 12] = "STAGE_VIDEO";
                e[e.SOUNDBOARD = 13] = "SOUNDBOARD"
            }(y || (y = {}));
            var d = [O.Eu4.NONE, O.Eu4.TIER_1, O.Eu4.TIER_2, O.Eu4.TIER_3],
                S = function(e, t) {
                    var r;
                    return e === O.Eu4.NONE ? O.Eu4.TIER_1 : null === (r = K(t).find((function(t) {
                        return t.tier === e
                    }))) || void 0 === r ? void 0 : r.nextTier
                },
                R = function(e) {
                    return p.$8[e]
                },
                P = function(e) {
                    return p.pH[e]
                },
                g = function(e) {
                    return p._k[e]
                },
                v = function(e) {
                    if (e === O.Eu4.NONE) return p._k[e];
                    var t = d[d.indexOf(e) - 1];
                    return p._k[e] - p._k[t]
                },
                h = function(e) {
                    return [{
                        tier: O.Eu4.TIER_1,
                        title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_1,
                        perks: [{
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                                adding: p.HO[O.Eu4.TIER_1].limits.emoji - p.HO[O.Eu4.NONE].limits.emoji,
                                total: p.HO[O.Eu4.TIER_1].limits.emoji
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_EMOJI,
                            icon: y.EMOJI
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                                adding: P(O.Eu4.TIER_1),
                                total: R(O.Eu4.TIER_1)
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STICKER,
                            icon: y.STICKER
                        }, {
                            title: T.Z.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                                soundCount: v(O.Eu4.TIER_1),
                                totalSoundCount: g(O.Eu4.TIER_1)
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SOUNDBOARD,
                            icon: y.SOUNDBOARD
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                                bitrate: p.HO[O.Eu4.TIER_1].limits.bitrate / 1e3
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_AUDIO_QUALITY,
                            icon: y.AUDIO
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_ANIMATED_GUILD_ICON,
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_ANIMATED_GUILD_ICON.format(),
                            icon: y.ANIMATED
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_SPLASH,
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SPLASH,
                            icon: y.CUSTOMIZATION
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_STREAMING,
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STREAMING,
                            icon: y.STREAM
                        }].filter(_.lm)
                    }, {
                        tier: O.Eu4.TIER_2,
                        title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_2,
                        perks: [{
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                                adding: p.HO[O.Eu4.TIER_2].limits.emoji - p.HO[O.Eu4.TIER_1].limits.emoji,
                                total: p.HO[O.Eu4.TIER_2].limits.emoji
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_EMOJI,
                            icon: y.EMOJI
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                                adding: P(O.Eu4.TIER_2),
                                total: R(O.Eu4.TIER_2)
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STICKER,
                            icon: y.STICKER
                        }, {
                            title: T.Z.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                                soundCount: v(O.Eu4.TIER_2),
                                totalSoundCount: g(O.Eu4.TIER_2)
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_SOUNDBOARD,
                            icon: y.SOUNDBOARD
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                                bitrate: p.HO[O.Eu4.TIER_2].limits.bitrate / 1e3
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_AUDIO_QUALITY,
                            icon: y.AUDIO
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_BANNER,
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_BANNER,
                            icon: y.CUSTOMIZATION
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({
                                fileSize: (0, f.BU)(p.HO[O.Eu4.TIER_2].limits.fileSize / 1024, {
                                    useKibibytes: !0
                                })
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_UPLOAD_LIMIT.format(),
                            icon: y.UPLOAD
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_STREAMING,
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STREAMING,
                            icon: y.STREAM
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_CUSTOM_ROLE_ICONS,
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_CUSTOM_ROLE_ICONS,
                            icon: y.CUSTOM_ROLE_ICON
                        }, e ? {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                                limit: O.eez
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                                limit: O.eez
                            }),
                            icon: y.STAGE_VIDEO
                        } : null].filter(_.lm)
                    }, {
                        tier: O.Eu4.TIER_3,
                        title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_3,
                        perks: [{
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                                adding: p.HO[O.Eu4.TIER_3].limits.emoji - p.HO[O.Eu4.TIER_2].limits.emoji,
                                total: p.HO[O.Eu4.TIER_3].limits.emoji
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_EMOJI,
                            icon: y.EMOJI
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                                adding: P(O.Eu4.TIER_3),
                                total: R(O.Eu4.TIER_3)
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_STICKER,
                            icon: y.STICKER
                        }, {
                            title: T.Z.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                                soundCount: v(O.Eu4.TIER_3),
                                totalSoundCount: g(O.Eu4.TIER_3)
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_SOUNDBOARD,
                            icon: y.SOUNDBOARD
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                                bitrate: p.HO[O.Eu4.TIER_3].limits.bitrate / 1e3
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_AUDIO_QUALITY,
                            icon: y.AUDIO
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_VANITY_URL,
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_VANITY_URL.format({
                                helpdeskArticle: E.Z.getArticleURL(O.BhN.GUILD_VANITY_URL)
                            }),
                            icon: y.VANITY
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({
                                fileSize: (0, f.BU)(p.HO[O.Eu4.TIER_3].limits.fileSize / 1024, {
                                    useKibibytes: !0
                                })
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_UPLOAD_LIMIT.format(),
                            icon: y.UPLOAD
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_ANIMATED_BANNER,
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_ANIMATED_BANNER,
                            icon: y.ANIMATED
                        }, e ? {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                                limit: O.RcX
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                                limit: O.RcX
                            }),
                            icon: y.STAGE_VIDEO
                        } : null].filter(_.lm)
                    }]
                };

            function M(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = t.useLevels,
                    n = void 0 === r || r;
                switch (e) {
                    case O.Eu4.NONE:
                        return n ? T.Z.Messages.PREMIUM_GUILD_TIER_0 : T.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_NONE_NAME;
                    case O.Eu4.TIER_1:
                        return T.Z.Messages.PREMIUM_GUILD_TIER_1;
                    case O.Eu4.TIER_2:
                        return T.Z.Messages.PREMIUM_GUILD_TIER_2;
                    case O.Eu4.TIER_3:
                        return T.Z.Messages.PREMIUM_GUILD_TIER_3;
                    default:
                        throw new Error("Not a valid tier type")
                }
            }

            function U(e) {
                switch (e) {
                    case O.Eu4.NONE:
                        return T.Z.Messages.PREMIUM_GUILD_TIER_0;
                    case O.Eu4.TIER_1:
                        return T.Z.Messages.PREMIUM_GUILD_TIER_1_SHORT;
                    case O.Eu4.TIER_2:
                        return T.Z.Messages.PREMIUM_GUILD_TIER_2_SHORT;
                    case O.Eu4.TIER_3:
                        return T.Z.Messages.PREMIUM_GUILD_TIER_3_SHORT;
                    default:
                        throw new Error("Not a valid tier type")
                }
            }
            var L = u().memoize((function(e) {
                    return p.HO[O.Eu4.TIER_1].features.includes(e) ? O.Eu4.TIER_1 : p.HO[O.Eu4.TIER_2].features.includes(e) ? O.Eu4.TIER_2 : p.HO[O.Eu4.TIER_3].features.includes(e) ? O.Eu4.TIER_3 : null
                })),
                D = function(e) {
                    return e === O.Eu4.NONE ? O.Qqv.NONE : e === O.Eu4.TIER_1 ? O.Qqv.TIER_1 : e === O.Eu4.TIER_2 ? O.Qqv.TIER_2 : e === O.Eu4.TIER_3 ? O.Qqv.TIER_3 : null
                };

            function m(e, t) {
                var r = !0,
                    n = !1,
                    o = void 0;
                try {
                    for (var i, u = K(t)[Symbol.iterator](); !(r = (i = u.next()).done); r = !0) {
                        var c = i.value;
                        if (e >= c.amount) return c.tier
                    }
                } catch (e) {
                    n = !0;
                    o = e
                } finally {
                    try {
                        r || null == u.return || u.return()
                    } finally {
                        if (n) throw o
                    }
                }
                return O.Eu4.NONE
            }

            function j(e, t) {
                var r = !0,
                    n = !1,
                    o = void 0;
                try {
                    for (var i, u = K(t)[Symbol.iterator](); !(r = (i = u.next()).done); r = !0) {
                        var c = i.value;
                        if (e >= c.amount) return c.nextTier
                    }
                } catch (e) {
                    n = !0;
                    o = e
                } finally {
                    try {
                        r || null == u.return || u.return()
                    } finally {
                        if (n) throw o
                    }
                }
                return O.Eu4.TIER_1
            }

            function N(e) {
                var t;
                return null !== (t = l()().diff(l()(e), "months")) && void 0 !== t ? t : 1
            }

            function C(e, t) {
                return null == t || null != e && e >= t
            }

            function w(e, t) {
                return C(e.premiumTier, t)
            }

            function G(e) {
                return u().values(e).filter((function(e) {
                    return e.isAvailable()
                }))
            }

            function A() {
                var e = a.Z.getPremiumTypeSubscription(),
                    t = Object.values(s.Z.boostSlots).reduce((function(e, t) {
                        z(t) && e.numCanceledGuildBoostSlots++;
                        t.isAvailable() && e.numAvailableGuildBoostSlots++;
                        return e
                    }), {
                        numAvailableGuildBoostSlots: 0,
                        numCanceledGuildBoostSlots: 0
                    }),
                    r = t.numAvailableGuildBoostSlots,
                    n = t.numCanceledGuildBoostSlots;
                if (null == e || r > 0) return null;
                if (e.status === O.O0b.PAST_DUE) return T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_PAST_DUE;
                if (e.status === O.O0b.ACCOUNT_HOLD) return T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_ACCOUNT_HOLD;
                if (n > 0) return T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION;
                if (null == e.renewalMutations) return null;
                var o = I.uV(e.renewalMutations.additionalPlans);
                return I.uV(e.additionalPlans) > o ? T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION : T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PLAN
            }

            function Z(e, t) {
                return x(e, t) > 0
            }

            function x(e, t) {
                var r = m(e.length, t),
                    n = B(t)[r],
                    o = e.filter((function(e) {
                        return null != e.endsAt
                    }));
                return n - (e.length - o.length)
            }

            function B(e) {
                return O.oCV
            }

            function K(e) {
                var t = B();
                return [{
                    tier: O.Eu4.TIER_3,
                    amount: t[O.Eu4.TIER_3],
                    nextTier: null
                }, {
                    tier: O.Eu4.TIER_2,
                    amount: t[O.Eu4.TIER_2],
                    nextTier: O.Eu4.TIER_3
                }, {
                    tier: O.Eu4.TIER_1,
                    amount: t[O.Eu4.TIER_1],
                    nextTier: O.Eu4.TIER_2
                }]
            }

            function k(e, t) {
                var r = x(e, t);
                if (r > 0) {
                    var n = function(e) {
                        return e.sort((function(e, t) {
                            return null != e.endsAt && null != t.endsAt ? e.endsAt.getTime() - t.endsAt.getTime() : -1
                        }))
                    }(e).filter((function(e) {
                        return null != e.endsAt
                    }));
                    return n[n.length - r].endsAt
                }
                return null
            }

            function V(e, t) {
                var r = P(t),
                    n = d.indexOf(t);
                if (-1 === n) return 0;
                var o = d[n - 1],
                    i = null != o ? R(o) : 0,
                    u = R(t);
                return Math.max(0, r - e.slice(i, u).length)
            }

            function H(e, t) {
                if (-1 === d.indexOf(t)) return 0;
                var r = g(t);
                return Math.max(0, r - e.length)
            }

            function Y(e, t) {
                var r = e.premiumSubscriberCount,
                    n = B(e.id)[t];
                return Math.max(0, n - r)
            }

            function z(e) {
                var t;
                return (null === (t = e.subscription) || void 0 === t ? void 0 : t.status) === O.O0b.CANCELED || e.canceled
            }
        }
    }
]);