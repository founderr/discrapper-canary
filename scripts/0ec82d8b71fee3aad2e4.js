"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [69839], {
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
                (0,
                    n.useEffect)((function() {
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
                A: () => d,
                Z: () => S
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                u = r(633878),
                c = r(531441),
                l = r(616276),
                a = r(784065),
                s = r.n(a);

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
                    className: i()(s().container, t, f({}, s().containerColored, u)),
                    children: [r, c ? null : (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(l.Z, {
                            foreground: s().sparkleStarTopRight
                        }), (0, n.jsx)(l.Z, {
                            foreground: s().sparkleStarRight
                        }), (0, n.jsx)(l.Z, {
                            foreground: s().sparkleStarBottomLeft
                        })]
                    })]
                })
            }
            var E = r(473708),
                I = r(196744),
                p = r.n(I);

            function O(e, t, r) {
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
                        O(e, t, r[t])
                    }))
                }
                return e
            }

            function R(e, t) {
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

            function d(e) {
                return (0, n.jsx)("svg", R(T({}, (0, u.Z)(T({}, e))), {
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

            function S(e) {
                var t, r = e.className,
                    o = e.forceUseColorForSparkles,
                    u = void 0 !== o && o,
                    l = e.shouldInheritTextColor,
                    a = void 0 !== l && l,
                    s = e.shouldInheritBackgroundColor,
                    f = void 0 !== s && s;
                return (0, n.jsx)(_, {
                    className: r,
                    forceUseColor: u,
                    children: (0, n.jsx)(c.IG, {
                        disableColor: !0,
                        className: i()(p().tag, (t = {}, O(t, p().inheritTextColor, a), O(t, p().inheritBackgroundColor, f), t)),
                        text: E.Z.Messages.NEW
                    })
                })
            }
        },
        276611: (e, t, r) => {
            r.d(t, {
                Z: () => S
            });
            var n = r(785893),
                o = (r(667294), r(468811)),
                i = r.n(o),
                u = r(882723),
                c = r(933599),
                l = r(388007),
                a = r(436145),
                s = r(652591),
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

            function p(e) {
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

            function O(e, t, r) {
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

            function R(e, t) {
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
            var d = function(e, t) {
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

            function S(e) {
                var t = null != e ? e : {},
                    o = t.initialPlanId,
                    I = t.followupSKUInfo,
                    S = t.onClose,
                    y = t.onComplete,
                    b = t.onSubscriptionConfirmation,
                    L = t.analyticsLocations,
                    h = t.analyticsObject,
                    P = t.analyticsLocation,
                    g = t.analyticsSourceLocation,
                    v = t.isGift,
                    U = void 0 !== v && v,
                    M = t.giftMessage,
                    D = t.subscriptionTier,
                    m = t.trialId,
                    N = t.postSuccessGuild,
                    A = t.openInvoiceId,
                    C = t.applicationId,
                    G = t.referralTrialOfferId,
                    w = t.giftRecipient,
                    j = !1,
                    Z = i().v4();
                (0, u.openModalLazy)(p((function() {
                    var e, t;
                    return d(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, Promise.all([r.e(40532), r.e(29342), r.e(92224), r.e(20637), r.e(96259), r.e(40056), r.e(99676), r.e(79730), r.e(23626), r.e(24251), r.e(3790), r.e(84441), r.e(30027), r.e(94302), r.e(47701), r.e(70535), r.e(98847), r.e(75700), r.e(67367), r.e(96956), r.e(52171), r.e(77579), r.e(91406), r.e(49096), r.e(56356), r.e(24417), r.e(39813), r.e(14606), r.e(95839), r.e(30144), r.e(66885), r.e(86159), r.e(38039), r.e(46285), r.e(78230), r.e(16361), r.e(822), r.e(27059), r.e(4230), r.e(38149), r.e(24501), r.e(85004), r.e(86611), r.e(25978), r.e(67783), r.e(68929), r.e(80062), r.e(42745), r.e(32790), r.e(513), r.e(59362), r.e(26050)]).then(r.bind(r, 786763))];
                            case 1:
                                e = i.sent(), t = e.default;
                                return [2, function(e) {
                                    var r = e.onClose,
                                        i = R(e, ["onClose"]);
                                    return (0, n.jsx)(t, T(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var r = null != arguments[t] ? arguments[t] : {},
                                                n = Object.keys(r);
                                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                                            }))));
                                            n.forEach((function(t) {
                                                O(e, t, r[t])
                                            }))
                                        }
                                        return e
                                    }({}, i), {
                                        loadId: Z,
                                        subscriptionTier: D,
                                        skuId: D,
                                        isGift: U,
                                        giftMessage: M,
                                        giftRecipient: w,
                                        initialPlanId: o,
                                        followupSKUInfo: I,
                                        onClose: function(e) {
                                            r();
                                            null == S || S(e);
                                            e && (null == b || b())
                                        },
                                        onComplete: function() {
                                            j = !0;
                                            null == y || y();
                                            if (!U) {
                                                (0, a.Dd)(!0);
                                                (0, a.HY)(!0)
                                            }
                                        },
                                        onSubscriptionConfirmation: b,
                                        analyticsLocations: L,
                                        analyticsObject: h,
                                        analyticsLocation: P,
                                        analyticsSourceLocation: g,
                                        trialId: m,
                                        postSuccessGuild: N,
                                        planGroup: E.Y1,
                                        openInvoiceId: A,
                                        applicationId: C,
                                        referralTrialOfferId: G
                                    }))
                                }]
                        }
                    }))
                })), {
                    modalKey: "payment-modal",
                    onCloseCallback: function() {
                        j || s.default.track(_.rMx.PAYMENT_FLOW_CANCELED, {
                            load_id: Z,
                            payment_type: _.Zuq[_.GZQ.SUBSCRIPTION],
                            location: null != P ? P : h,
                            source: g,
                            subscription_type: _.NYc.PREMIUM,
                            is_gift: U,
                            eligible_for_trial: null != m,
                            application_id: C,
                            location_stack: L
                        });
                        (0, c.fw)();
                        (0, l.p)();
                        null == S || S(j);
                        if (j) {
                            U || f.S.dispatch(_.CkL.PREMIUM_SUBSCRIPTION_CREATED);
                            null == b || b()
                        }
                    },
                    onCloseRequest: _.dG4
                })
            }
        },
        666870: (e, t, r) => {
            r.d(t, {
                _O: () => l,
                se: () => a,
                s6: () => s,
                o5: () => f,
                rT: () => _
            });
            var n = r(202351),
                o = r(473903),
                i = r(536392),
                u = r(717035),
                c = r(203600),
                l = function() {
                    var e = (0, n.e7)([i.Z], (function() {
                        return i.Z.getPremiumTypeSubscription()
                    }));
                    return null != (null == e ? void 0 : e.trialId)
                },
                a = function() {
                    var e;
                    return null != (null === (e = i.Z.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.trialId)
                },
                s = function(e) {
                    return null != (null == e ? void 0 : e.trialId) && (e.trialId === c.i_ || e.trialId === c.Cn || e.trialId === c.Rd || e.trialId === c.a7)
                };

            function f() {
                var e = (0, u.N)(),
                    t = l();
                return null != e || t
            }

            function _() {
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
                p: () => a
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
                a = function(e) {
                    n.Z.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        176087: (e, t, r) => {
            r.d(t, {
                C$: () => f,
                Ve: () => _,
                Eo: () => E,
                IB: () => p
            });
            var n = r(281110),
                o = r(744564),
                i = r(716239),
                u = r(715107),
                c = r(2590);

            function l(e, t, r, n, o, i, u) {
                try {
                    var c = e[i](u),
                        l = c.value
                } catch (e) {
                    r(e);
                    return
                }
                c.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function a(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function u(e) {
                            l(i, n, o, u, c, "next", e)
                        }

                        function c(e) {
                            l(i, n, o, u, c, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var s = function(e, t) {
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
                },
                f = function() {
                    o.Z.dispatch({
                        type: "BILLING_REFERRALS_REMAINING_FETCH_START"
                    });
                    return n.ZP.get({
                        url: c.ANM.GET_REFERRALS_REMAINING,
                        oldFormErrors: !0
                    }).then((function(e) {
                        o.Z.dispatch({
                            type: "BILLING_REFERRALS_REMAINING_FETCH_SUCCESS",
                            referrals_remaining: null != e.body && null != e.body.referrals_remaining ? e.body.referrals_remaining : 0,
                            sent_user_ids: null != e.body && null != e.body.sent_user_ids ? e.body.sent_user_ids : []
                        })
                    }), (function() {
                        o.Z.dispatch({
                            type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL"
                        })
                    }))
                },
                _ = function(e) {
                    o.Z.dispatch({
                        type: "BILLING_CREATE_REFERRAL_PREVIEW_START",
                        recipientId: e
                    });
                    return n.ZP.post({
                        url: c.ANM.CREATE_REFERRAL_PREVIEW(e),
                        oldFormErrors: !0
                    }).then((function(t) {
                        o.Z.dispatch({
                            type: "BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS",
                            recipientId: e,
                            is_eligible: null != t.body && t.body.is_eligible
                        })
                    }), (function() {
                        o.Z.dispatch({
                            type: "BILLING_CREATE_REFERRAL_PREVIEW_FAIL",
                            recipientId: e
                        })
                    }))
                };

            function E(e) {
                return I.apply(this, arguments)
            }

            function I() {
                return (I = a((function(e) {
                    var t, r, l, a, f;
                    return s(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                s.trys.push([0, 2, , 3]);
                                return [4, n.ZP.post({
                                    url: c.ANM.CREATE_REFERRAL(e),
                                    oldFormErrors: !0
                                })];
                            case 1:
                                t = s.sent();
                                l = null !== (r = t.body) && void 0 !== r ? r : null;
                                o.Z.dispatch({
                                    type: "BILLING_CREATE_REFERRAL_SUCCESS",
                                    userTrialOffer: l
                                });
                                return [2, {
                                    userTrialOffer: l
                                }];
                            case 2:
                                a = s.sent();
                                o.Z.dispatch({
                                    type: "BILLING_CREATE_REFERRAL_FAIL"
                                });
                                a.body.code === c.evJ.INVALID_MESSAGE_SEND_USER && null != (f = u.Z.getCurrentlySelectedChannelId()) && i.Z.sendClydeError(f, a.body.code);
                                return [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function p(e) {
                return O.apply(this, arguments)
            }

            function O() {
                return (O = a((function(e) {
                    var t, r, i;
                    return s(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                u.trys.push([0, 2, , 3]);
                                return [4, n.ZP.get({
                                    url: c.ANM.REFERRAL_OFFER_ID_RESOLVE(e),
                                    oldFormErrors: !0
                                })];
                            case 1:
                                t = u.sent();
                                i = null !== (r = t.body) && void 0 !== r ? r : null;
                                o.Z.dispatch({
                                    type: "BILLING_REFERRAL_RESOLVE_SUCCESS",
                                    userTrialOffer: i
                                });
                                return [2, {
                                    userTrialOffer: i
                                }];
                            case 2:
                                u.sent();
                                o.Z.dispatch({
                                    type: "BILLING_REFERRAL_RESOLVE_FAIL",
                                    userTrialOfferId: e
                                });
                                return [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        672798: (e, t, r) => {
            r.d(t, {
                Z: () => A
            });
            var n = r(141780),
                o = r(202351),
                i = r(744564),
                u = r(473903),
                c = r(176087),
                l = r(2590);

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return f(e)
            }

            function _(e, t) {
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function E(e, t) {
                E = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return E(e, t)
            }

            function I(e) {
                throw e
            }

            function p(e) {
                return function(e) {
                    if (Array.isArray(e)) return a(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return a(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return a(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var O = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function T(e) {
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
                    var r, n = f(e);
                    if (t) {
                        var o = f(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return _(this, r)
                }
            }
            var R = null,
                d = {},
                S = [],
                y = new Set,
                b = !1,
                L = new Set,
                h = new Set,
                P = {},
                g = 0,
                v = null;
            var U = function() {
                return !0
            };

            function M(e) {
                L.add(e)
            }

            function D(e) {
                e.messages.forEach((function(e) {
                    return m(e)
                }))
            }

            function m(e) {
                var t = e.type === n.u.PREMIUM_REFERRAL ? e.content : null;
                if (null == t) return !1;
                if (!h.has(t) && !L.has(t)) {
                    M(t);
                    i.Z.wait((function() {
                        return (0, c.IB)(t).catch(l.VqG)
                    }))
                }
            }
            var N = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && E(e, t)
                }(r, e);
                var t = T(r);

                function r() {
                    s(this, r);
                    return t.apply(this, arguments)
                }
                var n = r.prototype;
                n.initialize = function() {
                    this.waitFor(u.default);
                    this.syncWith([u.default], U)
                };
                n.checkAndFetchReferralsRemaining = function() {
                    null == R && !b && g < 5 && (null == v || v < Date.now()) && (0, c.C$)()
                };
                n.getReferralsRemaining = function() {
                    this.checkAndFetchReferralsRemaining();
                    return R
                };
                n.getSentUserIds = function() {
                    this.checkAndFetchReferralsRemaining();
                    return null == S ? [] : S
                };
                n.isFetchingReferralsRemaining = function() {
                    return b
                };
                n.isFetchingRecipientEligibility = function(e) {
                    return y.has(e)
                };
                n.getRecipientEligibility = function(e) {
                    void 0 !== d[e] || y.has(e) || (0, c.Ve)(e);
                    return d[e]
                };
                n.getRelevantUserTrialOffer = function(e) {
                    return P[e]
                };
                n.isResolving = function(e) {
                    return L.has(e)
                };
                n.__getLocalVars = function() {
                    return {
                        MAX_RETRIES: 5,
                        referralsRemaining: R,
                        recipientEligibility: d,
                        sentUserIds: S,
                        recipientFetching: y,
                        referralsRemainingFetching: b,
                        offerIdResolving: L,
                        resolvedOfferIds: h,
                        relevantReferralTrialOffers: P,
                        retries: g,
                        retryAfter: v,
                        emitChanges: U
                    }
                };
                return r
            }(o.ZP.Store);
            N.displayName = "ReferralTrialStore";
            const A = new N(i.Z, {
                BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function(e) {
                    var t = e.userTrialOfferId,
                        r = e.recipientId;
                    b || (0, c.C$)();
                    y.has(r) || (0, c.Ve)(r);
                    if (!L.has(t)) {
                        M(t);
                        i.Z.wait((function() {
                            return (0, c.IB)(t).catch(l.VqG)
                        }))
                    }
                },
                BILLING_REFERRALS_REMAINING_FETCH_START: function(e) {
                    e = null !== e ? e : I(new TypeError("Cannot destructure undefined"));
                    b = !0
                },
                BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function(e) {
                    var t = e.referrals_remaining,
                        r = e.sent_user_ids;
                    b = !1;
                    R = t;
                    S = r
                },
                BILLING_REFERRALS_REMAINING_FETCH_FAIL: function(e) {
                    e = null !== e ? e : I(new TypeError("Cannot destructure undefined"));
                    b = !1;
                    g += 1;
                    v = Date.now() + 1e3 * Math.pow(2, g)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_START: function(e) {
                    var t = e.recipientId;
                    y.add(t)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS: function(e) {
                    var t = e.recipientId,
                        r = e.is_eligible;
                    d[t] = r;
                    y.delete(t)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_FAIL: function(e) {
                    var t = e.recipientId;
                    d[t] = !1;
                    y.delete(t)
                },
                BILLING_CREATE_REFERRAL_SUCCESS: function(e) {
                    var t = e.userTrialOffer;
                    (0, c.C$)();
                    P[t.id] = t;
                    S = p(S).concat([t.user_id])
                },
                BILLING_REFERRAL_RESOLVE_SUCCESS: function(e) {
                    var t = e.userTrialOffer;
                    if (null != t) {
                        L.delete(t.id);
                        h.add(t.id);
                        P[t.id] = t
                    }
                },
                BILLING_REFERRAL_RESOLVE_FAIL: function(e) {
                    var t = e.userTrialOfferId;
                    L.delete(t);
                    h.add(t)
                },
                LOAD_MESSAGES_SUCCESS: D,
                MESSAGE_CREATE: function(e) {
                    m(e.message)
                },
                LOAD_MESSAGES_AROUND_SUCCESS: D,
                LOGOUT: function() {
                    R = null;
                    d = {};
                    S = [];
                    y = new Set;
                    b = !1;
                    L = new Set;
                    h = new Set;
                    P = {};
                    g = 0;
                    v = null
                }
            })
        },
        717035: (e, t, r) => {
            r.d(t, {
                N: () => l
            });
            var n = r(318715),
                o = r(432065),
                i = r(672798),
                u = r(4572),
                c = r(203600);

            function l(e) {
                var t, r, l, a = (0, u.w)(c.i_),
                    s = (0, u.w)(c.Cn),
                    f = (0, u.w)(o.Z.getAnyOfUserTrialOfferId([c.wh, c.AU, c.TL, c.ET])),
                    _ = (0, u.w)(c.C2),
                    E = (0, n.ZP)([i.Z], (function() {
                        return void 0 === e ? null : i.Z.getRelevantUserTrialOffer(e)
                    }));
                return null !== (l = null !== (r = null !== (t = null != E ? E : a) && void 0 !== t ? t : s) && void 0 !== r ? r : f) && void 0 !== l ? l : _
            }
        },
        4572: (e, t, r) => {
            r.d(t, {
                B: () => f,
                w: () => _
            });
            var n = r(667294),
                o = r(202351),
                i = r(513328),
                u = r(473903),
                c = r(432065),
                l = r(116094);

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function s(e, t) {
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
                    if ("string" == typeof e) return a(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return a(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function _(e) {
                var t = (0, o.e7)([c.Z], (function() {
                        return c.Z.getUserTrialOffer(e)
                    })),
                    r = s(n.useState(f(t)), 2),
                    a = r[0],
                    _ = r[1],
                    E = (0, o.e7)([u.default], (function() {
                        return (0, l.I5)(u.default.getCurrentUser())
                    }));
                n.useEffect((function() {
                    if (null != t && null != t.expires_at) {
                        var e = new i.V7,
                            r = function() {
                                var n = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                                null == e || e.start(n, (function() {
                                    !a && f(t) ? _(!0) : r()
                                }))
                            };
                        r();
                        return function() {
                            return e.stop()
                        }
                    }
                }), [a, t]);
                return a || E ? null : t
            }
        },
        775506: (e, t, r) => {
            r.d(t, {
                Z: () => S
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

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function s(e, t) {
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
                    var r, n = a(e);
                    if (t) {
                        var o = a(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return f(this, r)
                }
            }
            var p = !1,
                O = {};

            function T(e) {
                var t = e.guildBoostSlot;
                O = s(function(e) {
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
                }({}, O), l({}, t.id, t))
            }

            function R() {
                var e = {},
                    t = !0,
                    r = !1,
                    n = void 0;
                try {
                    for (var o, u = Object.values(O)[Symbol.iterator](); !(t = (o = u.next()).done); t = !0) {
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
                O = e
            }
            var d = function(e) {
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
                    this.syncWith([i.Z], R)
                };
                n.getGuildBoostSlot = function(e) {
                    return O[e]
                };
                n.__getLocalVars = function() {
                    return {
                        hasFetched: p,
                        guildBoostSlots: O
                    }
                };
                ! function(e, t, r) {
                    t && c(e.prototype, t);
                    r && c(e, r)
                }(r, [{
                    key: "hasFetched",
                    get: function() {
                        return p
                    }
                }, {
                    key: "boostSlots",
                    get: function() {
                        return O
                    }
                }]);
                return r
            }(n.ZP.Store);
            d.displayName = "GuildBoostSlotStore";
            const S = new d(o.Z, {
                GUILD_BOOST_SLOTS_FETCH_SUCCESS: function(e) {
                    var t = e.guildBoostSlots;
                    O = {};
                    t.forEach((function(e) {
                        O[e.id] = e
                    }));
                    p = !0
                },
                GUILD_BOOST_SLOT_UPDATE_SUCCESS: T,
                GUILD_BOOST_SLOT_CREATE: T,
                GUILD_BOOST_SLOT_UPDATE: T,
                LOGOUT: function() {
                    O = {};
                    p = !1
                }
            })
        },
        432065: (e, t, r) => {
            r.d(t, {
                Z: () => y
            });
            var n = r(202351),
                o = r(744564),
                i = r(473903),
                u = r(116094),
                c = r(536392);

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function s(e, t) {
                return !t || "object" !== _(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function f(e, t) {
                f = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return f(e, t)
            }
            var _ = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function E(e) {
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
                    var r, n = a(e);
                    if (t) {
                        var o = a(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return s(this, r)
                }
            }
            var I = 1728e5,
                p = {
                    userTrialOffersLastFetchedAtDate: void 0,
                    userTrialOffers: {}
                },
                O = p;

            function T() {
                O.userTrialOffers = {};
                O.userTrialOffersLastFetchedAtDate = void 0
            }
            var R = function() {
                return !0
            };

            function d() {
                if (null != c.Z.getPremiumTypeSubscription()) {
                    O.userTrialOffers = {};
                    return !0
                }
                return !1
            }
            var S = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && f(e, t)
                }(r, e);
                var t = E(r);

                function r() {
                    l(this, r);
                    return t.apply(this, arguments)
                }
                var n = r.prototype;
                n.initialize = function(e) {
                    O = null != e ? e : p;
                    this.waitFor(i.default);
                    this.syncWith([i.default], R);
                    this.syncWith([c.Z], d)
                };
                n.getUserTrialOffer = function(e) {
                    if (null !== e) return O.userTrialOffers[e]
                };
                n.getAnyOfUserTrialOfferId = function(e) {
                    var t = !0,
                        r = !1,
                        n = void 0;
                    try {
                        for (var o, i = e[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                            var u = o.value;
                            if (null != O.userTrialOffers[u]) return u
                        }
                    } catch (e) {
                        r = !0;
                        n = e
                    } finally {
                        try {
                            t || null == i.return || i.return()
                        } finally {
                            if (r) throw n
                        }
                    }
                    return null
                };
                n.hasFetchedOffer = function() {
                    return null != O.userTrialOffersLastFetchedAtDate
                };
                n.shouldFetchOffer = function() {
                    var e = O.userTrialOffersLastFetchedAtDate;
                    return null == e || Date.now() - I > e
                };
                n.getAcknowledgedOffers = function(e) {
                    var t = i.default.getCurrentUser();
                    return (0, u.I5)(t) ? [] : Object.values(O.userTrialOffers).filter((function(t) {
                        return e.includes(t.trial_id) && null != t.expires_at
                    }))
                };
                n.getUnacknowledgedOffers = function(e) {
                    var t = i.default.getCurrentUser();
                    return (0, u.I5)(t) ? [] : Object.values(O.userTrialOffers).filter((function(t) {
                        return e.includes(t.trial_id) && null == t.expires_at
                    }))
                };
                n.hasAnyUnexpiredOffer = function() {
                    return Object.values(O.userTrialOffers).some((function(e) {
                        return null == e.expires_at || Date.parse(e.expires_at) > Date.now()
                    }))
                };
                n.getState = function() {
                    return O
                };
                n.forceReset = function() {
                    T()
                };
                n.__getLocalVars = function() {
                    return {
                        CACHE_DAYS_EXPIRING: I,
                        initialState: p,
                        state: O,
                        emitChanges: R
                    }
                };
                return r
            }(n.ZP.PersistedStore);
            S.displayName = "UserTrialStore";
            S.persistKey = "UserTrialStore";
            const y = new S(o.Z, {
                BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: function(e) {
                    var t = e.userTrialOffer;
                    null != t ? O.userTrialOffers[t.trial_id] = t : T();
                    O.userTrialOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
                    var t = e.userTrialOffer;
                    O.userTrialOffers[t.trial_id] = t;
                    O.userTrialOffersLastFetchedAtDate = Date.now()
                },
                LOGOUT: T
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
                a = r(662478),
                s = r(107364),
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

            function p(e) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function O(e) {
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

            function R(e, t) {
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

            function d(e, t) {
                return !t || "object" !== L(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function S(e, t) {
                S = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return S(e, t)
            }
            var y, b, L = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function h(e) {
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
                    var r, n = p(e);
                    if (t) {
                        var o = p(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return d(this, r)
                }
            }! function(e) {
                e.DEFAULT = "default";
                e.SMALL = "small"
            }(y || (y = {}));
            var P, g = (I(b = {}, y.DEFAULT, _().shineDefault), I(b, y.SMALL, _().shineSmall), b),
                v = (I(P = {}, y.DEFAULT, _().shineInnerDefault), I(P, y.SMALL, _().shineInnerSmall), P),
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
                        t && S(e, t)
                    }(r, e);
                    var t = h(r);

                    function r() {
                        E(this, r);
                        return t.apply(this, arguments)
                    }
                    r.prototype.render = function() {
                        var e = this.props,
                            t = e.className,
                            r = e.shineSize,
                            o = e.shinePaused,
                            i = R(e, ["className", "shineSize", "shinePaused"]);
                        return (0, n.jsx)(c.Z.div, T(O({}, i), {
                            className: u()(_().shineContainer, t, I({}, _().shinePaused, o)),
                            children: (0, n.jsx)(s.Z, {
                                align: s.Z.Align.CENTER,
                                justify: s.Z.Justify.CENTER,
                                className: g[r],
                                children: (0, n.jsx)("div", {
                                    className: v[r]
                                })
                            })
                        }))
                    };
                    return r
                }(o.PureComponent);
            U.defaultProps = {
                shineSize: y.DEFAULT
            };
            var M = function(e) {
                var t = e.children,
                    r = e.className,
                    i = e.disabled,
                    c = e.submitting,
                    s = e.pauseAnimation,
                    f = e.shineSize,
                    E = void 0 === f ? y.DEFAULT : f,
                    I = e.shinePaused,
                    p = e.buttonShineClassName,
                    d = e.onlyShineOnHover,
                    S = R(e, ["children", "className", "disabled", "submitting", "pauseAnimation", "shineSize", "shinePaused", "buttonShineClassName", "onlyShineOnHover"]),
                    b = o.createRef(),
                    L = (0, a.Z)(b),
                    h = !i && !c && !0 !== s && (!d || L);
                return (0, n.jsxs)(l.Button, T(O({
                    buttonRef: b
                }, S), {
                    className: u()(_().shinyButton, r),
                    disabled: i,
                    submitting: c,
                    children: [t, h ? (0, n.jsx)(U, {
                        shinePaused: I,
                        className: u()(_().buttonShine, d ? _().onlyShineOnHover : void 0, p),
                        shineSize: E
                    }) : null]
                }))
            };
            M.ShineSizes = y;
            const D = M
        },
        781453: (e, t, r) => {
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
                    a = void 0 === l ? 24 : l,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    _ = e.foreground,
                    E = c(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", u(function(e) {
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
                    height: a,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: f,
                        className: _,
                        d: "M12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 6.477 17.523 2 12 2ZM8 6C9.104 6 10 6.896 10 8C10 9.105 9.104 10 8 10C6.896 10 6 9.105 6 8C6 6.896 6.896 6 8 6ZM18 14C18 16.617 15.14 19 12 19C8.86 19 6 16.617 6 14V13H18V14ZM16 10C14.896 10 14 9.105 14 8C14 6.896 14.896 6 16 6C17.104 6 18 6.896 18 8C18 9.105 17.104 10 16 10Z"
                    })
                }))
            }
        },
        799043: (e, t, r) => {
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
                    a = void 0 === l ? 24 : l,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    _ = e.foreground,
                    E = c(e, ["width", "height", "color", "foreground"]);
                return (0,
                    n.jsx)("svg", u(function(e) {
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
                }({
                    width: r,
                    height: a
                }, (0, o.Z)(E)), {
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: f,
                        className: _,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                    })
                }))
            }
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
                    a = void 0 === l ? 24 : l,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
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
                    height: a,
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
                Z: () => a
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

            function a(e) {
                var t = e.width,
                    r = void 0 === t ? 14 : t,
                    i = e.height,
                    a = void 0 === i ? 13 : i,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    _ = e.foreground,
                    E = l(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", c(u({}, (0, o.Z)(u({}, E))), {
                    width: r,
                    height: a,
                    viewBox: "0 0 ".concat(r, " ").concat(a),
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
                Ro: () => d,
                FZ: () => y,
                A3: () => b,
                ig: () => L,
                U2: () => h,
                Je: () => P,
                cP: () => g,
                nW: () => v,
                e9: () => U,
                _p: () => M,
                ge: () => D,
                rF: () => m,
                Fd: () => N,
                xf: () => A,
                tb: () => C,
                f2: () => G,
                vx: () => w,
                aq: () => j,
                Vx: () => Z,
                _k: () => B,
                vn: () => x,
                gZ: () => K,
                Qi: () => V,
                yw: () => k,
                KK: () => H,
                tl: () => Y
            });
            var n, o, i = r(496486),
                u = r.n(i),
                c = r(730381),
                l = r.n(c),
                a = r(775506),
                s = r(536392),
                f = r(452723),
                _ = r(72580),
                E = r(348592),
                I = r(116094),
                p = r(2590),
                O = r(203600),
                T = r(473708);

            function R(e, t, r) {
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
            var d;
            Object.freeze((R(o = {}, 1, 1), R(o, 2, 2), R(o, 3, 3), R(o, 4, 6), R(o, 5, 9), R(o, 6, 12), R(o, 7, 15), R(o, 8, 18), R(o, 9, 24), o));
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
            }(d || (d = {}));
            var S = [p.Eu4.NONE, p.Eu4.TIER_1, p.Eu4.TIER_2, p.Eu4.TIER_3],
                y = function(e, t) {
                    var r;
                    return e === p.Eu4.NONE ? p.Eu4.TIER_1 : null === (r = F(t).find((function(t) {
                        return t.tier === e
                    }))) || void 0 === r ? void 0 : r.nextTier
                },
                b = function(e) {
                    return O.$8[e]
                },
                L = function(e) {
                    return O.pH[e]
                },
                h = function(e) {
                    return O._k[e]
                },
                P = function(e) {
                    if (e === p.Eu4.NONE) return O._k[e];
                    var t = S[S.indexOf(e) - 1];
                    return O._k[e] - O._k[t]
                },
                g = function(e) {
                    return [{
                        tier: p.Eu4.TIER_1,
                        title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_1,
                        perks: [{
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                                adding: O.HO[p.Eu4.TIER_1].limits.emoji - O.HO[p.Eu4.NONE].limits.emoji,
                                total: O.HO[p.Eu4.TIER_1].limits.emoji
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_EMOJI,
                            icon: d.EMOJI
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                                adding: L(p.Eu4.TIER_1),
                                total: b(p.Eu4.TIER_1)
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STICKER,
                            icon: d.STICKER
                        }, {
                            title: T.Z.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                                soundCount: P(p.Eu4.TIER_1),
                                totalSoundCount: h(p.Eu4.TIER_1)
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SOUNDBOARD,
                            icon: d.SOUNDBOARD
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                                bitrate: O.HO[p.Eu4.TIER_1].limits.bitrate / 1e3
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_AUDIO_QUALITY,
                            icon: d.AUDIO
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_ANIMATED_GUILD_ICON,
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_ANIMATED_GUILD_ICON.format(),
                            icon: d.ANIMATED
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_SPLASH,
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SPLASH,
                            icon: d.CUSTOMIZATION
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_STREAMING,
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STREAMING,
                            icon: d.STREAM
                        }].filter(_.lm)
                    }, {
                        tier: p.Eu4.TIER_2,
                        title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_2,
                        perks: [{
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                                adding: O.HO[p.Eu4.TIER_2].limits.emoji - O.HO[p.Eu4.TIER_1].limits.emoji,
                                total: O.HO[p.Eu4.TIER_2].limits.emoji
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_EMOJI,
                            icon: d.EMOJI
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                                adding: L(p.Eu4.TIER_2),
                                total: b(p.Eu4.TIER_2)
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STICKER,
                            icon: d.STICKER
                        }, {
                            title: T.Z.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                                soundCount: P(p.Eu4.TIER_2),
                                totalSoundCount: h(p.Eu4.TIER_2)
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_SOUNDBOARD,
                            icon: d.SOUNDBOARD
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                                bitrate: O.HO[p.Eu4.TIER_2].limits.bitrate / 1e3
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_AUDIO_QUALITY,
                            icon: d.AUDIO
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_BANNER,
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_BANNER,
                            icon: d.CUSTOMIZATION
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({
                                fileSize: (0, f.BU)(O.HO[p.Eu4.TIER_2].limits.fileSize / 1024, {
                                    useKibibytes: !0
                                })
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_UPLOAD_LIMIT.format(),
                            icon: d.UPLOAD
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_STREAMING,
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STREAMING,
                            icon: d.STREAM
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_CUSTOM_ROLE_ICONS,
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_CUSTOM_ROLE_ICONS,
                            icon: d.CUSTOM_ROLE_ICON
                        }, e ? {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                                limit: p.eez
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                                limit: p.eez
                            }),
                            icon: d.STAGE_VIDEO
                        } : null].filter(_.lm)
                    }, {
                        tier: p.Eu4.TIER_3,
                        title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_3,
                        perks: [{
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                                adding: O.HO[p.Eu4.TIER_3].limits.emoji - O.HO[p.Eu4.TIER_2].limits.emoji,
                                total: O.HO[p.Eu4.TIER_3].limits.emoji
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_EMOJI,
                            icon: d.EMOJI
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                                adding: L(p.Eu4.TIER_3),
                                total: b(p.Eu4.TIER_3)
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_STICKER,
                            icon: d.STICKER
                        }, {
                            title: T.Z.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                                soundCount: P(p.Eu4.TIER_3),
                                totalSoundCount: h(p.Eu4.TIER_3)
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_SOUNDBOARD,
                            icon: d.SOUNDBOARD
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                                bitrate: O.HO[p.Eu4.TIER_3].limits.bitrate / 1e3
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_AUDIO_QUALITY,
                            icon: d.AUDIO
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_VANITY_URL,
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_VANITY_URL.format({
                                helpdeskArticle: E.Z.getArticleURL(p.BhN.GUILD_VANITY_URL)
                            }),
                            icon: d.VANITY
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({
                                fileSize: (0, f.BU)(O.HO[p.Eu4.TIER_3].limits.fileSize / 1024, {
                                    useKibibytes: !0
                                })
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_UPLOAD_LIMIT.format(),
                            icon: d.UPLOAD
                        }, {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_ANIMATED_BANNER,
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_ANIMATED_BANNER,
                            icon: d.ANIMATED
                        }, e ? {
                            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                                limit: p.RcX
                            }),
                            description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                                limit: p.RcX
                            }),
                            icon: d.STAGE_VIDEO
                        } : null].filter(_.lm)
                    }]
                };

            function v(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = t.useLevels,
                    n = void 0 === r || r;
                switch (e) {
                    case p.Eu4.NONE:
                        return n ? T.Z.Messages.PREMIUM_GUILD_TIER_0 : T.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_NONE_NAME;
                    case p.Eu4.TIER_1:
                        return T.Z.Messages.PREMIUM_GUILD_TIER_1;
                    case p.Eu4.TIER_2:
                        return T.Z.Messages.PREMIUM_GUILD_TIER_2;
                    case p.Eu4.TIER_3:
                        return T.Z.Messages.PREMIUM_GUILD_TIER_3;
                    default:
                        throw new Error("Not a valid tier type")
                }
            }

            function U(e) {
                switch (e) {
                    case p.Eu4.NONE:
                        return T.Z.Messages.PREMIUM_GUILD_TIER_0;
                    case p.Eu4.TIER_1:
                        return T.Z.Messages.PREMIUM_GUILD_TIER_1_SHORT;
                    case p.Eu4.TIER_2:
                        return T.Z.Messages.PREMIUM_GUILD_TIER_2_SHORT;
                    case p.Eu4.TIER_3:
                        return T.Z.Messages.PREMIUM_GUILD_TIER_3_SHORT;
                    default:
                        throw new Error("Not a valid tier type")
                }
            }
            var M = u().memoize((function(e) {
                    return O.HO[p.Eu4.TIER_1].features.includes(e) ? p.Eu4.TIER_1 : O.HO[p.Eu4.TIER_2].features.includes(e) ? p.Eu4.TIER_2 : O.HO[p.Eu4.TIER_3].features.includes(e) ? p.Eu4.TIER_3 : null
                })),
                D = function(e) {
                    return e === p.Eu4.NONE ? p.Qqv.NONE : e === p.Eu4.TIER_1 ? p.Qqv.TIER_1 : e === p.Eu4.TIER_2 ? p.Qqv.TIER_2 : e === p.Eu4.TIER_3 ? p.Qqv.TIER_3 : null
                };

            function m(e, t) {
                var r = !0,
                    n = !1,
                    o = void 0;
                try {
                    for (var i, u = F(t)[Symbol.iterator](); !(r = (i = u.next()).done); r = !0) {
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
                return p.Eu4.NONE
            }

            function N(e, t) {
                var r = !0,
                    n = !1,
                    o = void 0;
                try {
                    for (var i, u = F(t)[Symbol.iterator](); !(r = (i = u.next()).done); r = !0) {
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
                return p.Eu4.TIER_1
            }

            function A(e) {
                var t;
                return null !== (t = l()().diff(l()(e), "months")) && void 0 !== t ? t : 1
            }

            function C(e, t) {
                return null == t || null != e && e >= t
            }

            function G(e, t) {
                return C(e.premiumTier, t)
            }

            function w(e) {
                return u().values(e).filter((function(e) {
                    return e.isAvailable()
                }))
            }

            function j() {
                var e = s.Z.getPremiumTypeSubscription(),
                    t = Object.values(a.Z.boostSlots).reduce((function(e, t) {
                        Y(t) && e.numCanceledGuildBoostSlots++;
                        t.isAvailable() && e.numAvailableGuildBoostSlots++;
                        return e
                    }), {
                        numAvailableGuildBoostSlots: 0,
                        numCanceledGuildBoostSlots: 0
                    }),
                    r = t.numAvailableGuildBoostSlots,
                    n = t.numCanceledGuildBoostSlots;
                if (null == e || r > 0) return null;
                if (e.status === p.O0b.PAST_DUE) return T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_PAST_DUE;
                if (e.status === p.O0b.ACCOUNT_HOLD) return T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_ACCOUNT_HOLD;
                if (n > 0) return T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION;
                if (null == e.renewalMutations) return null;
                var o = I.uV(e.renewalMutations.additionalPlans);
                return I.uV(e.additionalPlans) > o ? T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION : T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PLAN
            }

            function Z(e, t) {
                return B(e, t) > 0
            }

            function B(e, t) {
                var r = m(e.length, t),
                    n = x(t)[r],
                    o = e.filter((function(e) {
                        return null != e.endsAt
                    }));
                return n - (e.length - o.length)
            }

            function x(e) {
                return p.oCV
            }

            function F(e) {
                var t = x();
                return [{
                    tier: p.Eu4.TIER_3,
                    amount: t[p.Eu4.TIER_3],
                    nextTier: null
                }, {
                    tier: p.Eu4.TIER_2,
                    amount: t[p.Eu4.TIER_2],
                    nextTier: p.Eu4.TIER_3
                }, {
                    tier: p.Eu4.TIER_1,
                    amount: t[p.Eu4.TIER_1],
                    nextTier: p.Eu4.TIER_2
                }]
            }

            function K(e, t) {
                var r = B(e, t);
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
                var r = L(t),
                    n = S.indexOf(t);
                if (-1 === n) return 0;
                var o = S[n - 1],
                    i = null != o ? b(o) : 0,
                    u = b(t);
                return Math.max(0, r - e.slice(i, u).length)
            }

            function k(e, t) {
                if (-1 === S.indexOf(t)) return 0;
                var r = h(t);
                return Math.max(0, r - e.length)
            }

            function H(e, t) {
                var r = e.premiumSubscriberCount,
                    n = x(e.id)[t];
                return Math.max(0, n - r)
            }

            function Y(e) {
                var t;
                return (null === (t = e.subscription) || void 0 === t ? void 0 : t.status) === p.O0b.CANCELED || e.canceled
            }
        }
    }
]);
//# sourceMappingURL=0ec82d8b71fee3aad2e4.js.map