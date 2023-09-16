(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [38149], {
        460122: (e, t, r) => {
            e.exports = r.p + "fdbcc8efcf1ba7be0df5fa425a5df5b3.svg"
        },
        873994: (e, t, r) => {
            e.exports = r.p + "b2ce83d133a3d9fa54411e732f2fa74c.svg"
        },
        413369: (e, t, r) => {
            e.exports = r.p + "b820b6002cb6ff7c3c2fb123d72c7866.svg"
        },
        132354: (e, t, r) => {
            e.exports = r.p + "a9009aaba5bfab576a517f6915b3c0b6.svg"
        },
        401891: (e, t, r) => {
            e.exports = r.p + "f635c4a27122499651f4eaffb26f40ce.svg"
        },
        573956: (e, t, r) => {
            e.exports = r.p + "df4cda9740d4334304e4b8b20e8b48d9.svg"
        },
        333568: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => c
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
                            c = !0,
                            a = !1;
                        try {
                            for (r = r.call(e); !(c = (n = r.next()).done); c = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                c || null == r.return || r.return()
                            } finally {
                                if (a) throw o
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

            function c(e) {
                var t = i((0, n.useState)((function() {
                        return window.matchMedia(e).matches
                    })), 2),
                    r = t[0],
                    o = t[1];
                (0, n.useEffect)((function() {
                    var t = window.matchMedia(e),
                        r = function(e) {
                            o(null == e ? void 0 : e.matches)
                        };
                    r(t);
                    t.addListener(r);
                    return function() {
                        return t.removeListener(r)
                    }
                }), [e]);
                return r
            }
        },
        297283: (e, t, r) => {
            "use strict";
            r.d(t, {
                i: () => n,
                X: () => o
            });
            var n = "(max-width: 485px)",
                o = "(max-height: 450px)"
        },
        136082: (e, t, r) => {
            "use strict";
            r.d(t, {
                CW: () => y,
                r0: () => O,
                s$: () => m,
                K9: () => j,
                G9: () => h,
                q$: () => g
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                c = r(882723),
                a = r(199722),
                l = r(835530),
                s = r(274822),
                u = r.n(s);

            function f(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        f(e, t, r[t])
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

            function d(e, t) {
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
            var y = function(e) {
                    var t = e.application,
                        r = e.asset,
                        o = e.className,
                        i = d(e, ["application", "asset", "className"]);
                    return (0, n.jsx)(a.Z, p({
                        application: t,
                        size: a.H.MEDIUM,
                        asset: r,
                        className: o
                    }, i))
                },
                O = function(e) {
                    var t = e.children,
                        r = e.className,
                        o = e.id,
                        a = d(e, ["children", "className", "id"]);
                    return (0, n.jsx)(c.Heading, b(p({
                        className: i()(u().header, r),
                        variant: "heading-xl/extrabold",
                        id: o
                    }, a), {
                        children: t
                    }))
                };

            function m() {
                return (0, n.jsx)("hr", {
                    className: u().divider
                })
            }
            var j = function(e) {
                    var t = e.className,
                        r = e.title,
                        o = e.description,
                        i = d(e, ["className", "title", "description"]);
                    return (0, n.jsxs)("div", b(p({
                        className: t
                    }, i), {
                        children: [(0, n.jsx)(c.Heading, {
                            variant: "heading-md/bold",
                            color: "header-primary",
                            children: r
                        }), (0, n.jsx)(c.Heading, {
                            variant: "heading-sm/normal",
                            color: "header-secondary",
                            children: o
                        })]
                    }))
                },
                h = function(e) {
                    var t = e.benefits,
                        r = e.className,
                        o = d(e, ["benefits", "className"]);
                    return (0, n.jsx)("div", b(p({
                        className: i()(u().benefitsContainer, r)
                    }, o), {
                        children: t.map((function(e) {
                            var t, r;
                            return (0, n.jsx)(l.Z, {
                                className: u().benefit,
                                benefit: e
                            }, "".concat(e.ref_type, "-").concat(null === (t = e.emoji) || void 0 === t ? void 0 : t.id, "-").concat(null === (r = e.emoji) || void 0 === r ? void 0 : r.name))
                        }))
                    }))
                },
                g = function(e) {
                    var t = e.children,
                        r = e.className,
                        o = d(e, ["children", "className"]);
                    return (0, n.jsx)("div", b(p({
                        className: i()(u().container, r)
                    }, o), {
                        children: t
                    }))
                }
        },
        199722: (e, t, r) => {
            "use strict";
            r.d(t, {
                H: () => n,
                Z: () => d
            });
            var n, o, i = r(785893),
                c = (r(667294),
                    r(294184)),
                a = r.n(c),
                l = r(775173),
                s = r(534681),
                u = r(47223),
                f = r.n(u);

            function p(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }! function(e) {
                e[e.SMALL = 40] = "SMALL";
                e[e.MEDIUM = 66] = "MEDIUM"
            }(n || (n = {}));
            var b = (p(o = {}, n.SMALL, f().small), p(o, n.MEDIUM, f().medium), o);
            const d = function(e) {
                var t, r = e.application,
                    n = e.size,
                    o = e.asset,
                    c = e.className;
                t = null != o ? (0, s._W)(r.id, o, n) : l.ZP.getApplicationIconURL({
                    id: r.id,
                    icon: r.icon,
                    size: n
                });
                return (0, i.jsx)("img", {
                    alt: "",
                    src: t,
                    className: a()(f().icon, b[n], c)
                })
            }
        },
        777315: (e, t, r) => {
            "use strict";
            r.d(t, {
                t: () => h,
                Oc: () => g,
                xe: () => v
            });
            var n = r(785893),
                o = (r(667294), r(882723)),
                i = r(333568),
                c = r(83471),
                a = r(456893),
                l = r(149096),
                s = r(189865),
                u = r(136082),
                f = r(297283),
                p = r(473708),
                b = r(951416),
                d = r.n(b),
                y = r(401891),
                O = r.n(y),
                m = r(573956),
                j = r.n(m),
                h = function(e) {
                    var t = e.step,
                        r = e.onClose,
                        a = (0, i.Z)(f.X);
                    return t === c.h8.CONFIRM || t === c.h8.BENEFITS ? (0, n.jsx)("div", {}) : (0, n.jsxs)("div", {
                        className: d().headerContainer,
                        children: [!a && (0,
                            n.jsx)("div", {
                            className: d().headerImageContainer,
                            "aria-hidden": "true",
                            children: (0, n.jsx)("img", {
                                src: j(),
                                alt: "",
                                className: d().headerImage
                            })
                        }), (0, n.jsx)(o.Clickable, {
                            className: d().closeContainer,
                            onClick: function() {
                                return r()
                            },
                            "aria-label": p.Z.Messages.CLOSE,
                            children: (0, n.jsx)(s.Z, {
                                className: d().closeIcon
                            })
                        })]
                    })
                },
                g = function(e) {
                    var t = e.listing,
                        r = e.application,
                        o = e.title,
                        i = e.subtitle,
                        c = e.description;
                    return null == r ? null : (0, n.jsx)("div", {
                        className: d().confirmationContainer,
                        children: (0, n.jsxs)(u.q$, {
                            children: [(0, n.jsx)(u.CW, {
                                application: r,
                                asset: t.image_asset
                            }), (0, n.jsx)(u.r0, {
                                children: o
                            }), (0, n.jsx)(u.s$, {}), (0, n.jsx)(u.K9, {
                                title: i,
                                description: c
                            }), (0, n.jsx)(u.G9, {
                                benefits: t.sku_benefits.benefits
                            })]
                        })
                    })
                };

            function v(e) {
                var t = e.listing,
                    r = e.onConfirm,
                    i = e.subscription;
                return (0, n.jsxs)("div", {
                    className: d().purchaseConfirmation,
                    children: [(0, n.jsx)("img", {
                        src: O(),
                        alt: "",
                        width: 300,
                        height: 126
                    }), (0, n.jsx)(o.Heading, {
                        className: d().confirmationTitle,
                        variant: "heading-xl/extrabold",
                        color: "header-primary",
                        children: p.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({
                            tier: t.name
                        })
                    }), (0, n.jsx)(o.Text, {
                        className: d().confirmationSubtitle,
                        variant: "text-md/medium",
                        color: "header-secondary",
                        children: p.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
                            timestamp: null == i ? void 0 : i.currentPeriodEnd
                        })
                    }), (0, n.jsx)(l.O3, {
                        children: (0, n.jsx)(a.Z, {
                            onPrimary: r,
                            primaryCTA: a.g.CONTINUE,
                            primaryText: p.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
                        })
                    })]
                })
            }
        },
        835530: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => f
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                c = r(882723),
                a = r(77413),
                l = r(722095),
                s = r.n(l);

            function u(e) {
                return e.name
            }

            function f(e) {
                var t = e.benefit,
                    r = e.className,
                    o = e.emojiContainerClassName,
                    l = e.showsDescription,
                    f = void 0 === l || l,
                    p = e.nameTextVariant,
                    b = void 0 === p ? "text-md/medium" : p,
                    d = e.nameTextColor,
                    y = void 0 === d ? "header-primary" : d;
                return (0, n.jsxs)("div", {
                    className: i()(s().container, r),
                    children: [null != t.emoji && (0, n.jsx)("div", {
                        className: i()(s().emojiContainer, o),
                        children: (0, n.jsx)(a.Z, {
                            emojiId: t.emoji.id,
                            emojiName: t.emoji.name,
                            animated: t.emoji.animated
                        })
                    }), (0, n.jsxs)("div", {
                        className: s().infoContainer,
                        children: [(0, n.jsx)(c.Text, {
                            variant: b,
                            color: y,
                            className: s().name,
                            children: u(t)
                        }), f && (0, n.jsx)(c.Text, {
                            color: "interactive-normal",
                            variant: "text-sm/normal",
                            children: t.description
                        })]
                    })]
                })
            }
        },
        456893: (e, t, r) => {
            "use strict";
            r.d(t, {
                g: () => n,
                Z: () => O
            });
            var n, o = r(785893),
                i = (r(667294), r(882723)),
                c = r(107364),
                a = r(709189),
                l = r(300615),
                s = r(473708),
                u = r(897013),
                f = r.n(u);

            function p(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function b(e) {
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

            function d(e, t) {
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
            }! function(e) {
                e[e.CONTINUE = 0] = "CONTINUE";
                e[e.UPGRADE = 1] = "UPGRADE";
                e[e.PURCHASE = 2] = "PURCHASE"
            }(n || (n = {}));
            var y = function(e) {
                var t = e.onBack,
                    r = e.backText,
                    u = e.primaryIcon,
                    p = e.primaryCTA,
                    y = e.primaryType,
                    O = e.primaryText,
                    m = e.primaryTooltip,
                    j = e.primaryDisabled,
                    h = e.primarySubmitting,
                    g = e.onPrimary,
                    v = e.secondaryText,
                    P = e.onSecondary;
                return (0, o.jsxs)(i.ModalFooter, {
                    justify: c.Z.Justify.BETWEEN,
                    align: c.Z.Align.CENTER,
                    children: [function() {
                        if (null == p || null == O) return null;
                        var e = p === n.PURCHASE ? a.C : i.Button,
                            t = {
                                innerClassName: f().button,
                                type: y,
                                disabled: j,
                                submitting: h,
                                color: p === n.CONTINUE ? i.Button.Colors.BRAND : i.Button.Colors.GREEN,
                                onClick: g
                            };
                        return null != m ? (0, o.jsx)(i.Tooltip, {
                            text: m,
                            children: function(r) {
                                return (0, o.jsxs)(e, d(b({}, r, t), {
                                    children: [null == u ? null : (0, o.jsx)(u, {
                                        className: f().primaryIcon
                                    }), O]
                                }))
                            }
                        }) : (0, o.jsxs)(e, d(b({}, t), {
                            children: [null == u ? null : (0, o.jsx)(u, {
                                className: f().primaryIcon
                            }), O]
                        }))
                    }(), null == v ? null : (0, o.jsx)(i.Button, {
                        color: i.Button.Colors.PRIMARY,
                        look: i.Button.Looks.LINK,
                        onClick: P,
                        children: v
                    }), (0, o.jsx)(l.Z, {}), null == t ? null : (0, o.jsx)(i.Button, {
                        className: f().back,
                        color: i.Button.Colors.PRIMARY,
                        look: i.Button.Looks.LINK,
                        onClick: t,
                        children: null != r ? r : s.Z.Messages.BACK
                    })]
                })
            };
            y.CTAType = n;
            const O = y
        },
        300615: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => b
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                c = r(882723),
                a = r(97990),
                l = r(473708),
                s = r(791110),
                u = r.n(s),
                f = r(913957),
                p = r.n(f);

            function b() {
                return (0, n.jsxs)("div", {
                    className: i()(u().paymentModalLockIcon, p().flex, p().alignCenter),
                    children: [(0, n.jsx)(a.Z, {
                        className: u().lockIcon,
                        width: 18,
                        height: 18
                    }), (0, n.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        children: l.Z.Messages.BILLING_SECURE
                    })]
                })
            }
        },
        64318: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => m
            });
            var n = r(202351),
                o = r(744564);

            function i(e, t) {
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

            function a(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
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

            function u(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
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
            var p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function b(e) {
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
                    var r, n = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return u(this, r)
                }
            }
            var d, y = {
                hasAcceptedStoreTerms: !1,
                hasAcceptedEulaIds: []
            };
            var O = function(e) {
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
                var t = b(r);

                function r() {
                    i(this, r);
                    return t.apply(this, arguments)
                }
                var n = r.prototype;
                n.initialize = function(e) {
                    d = null != e ? e : y
                };
                n.getState = function() {
                    return d
                };
                n.hasAcceptedEULA = function(e) {
                    return d.hasAcceptedEulaIds.includes(e)
                };
                n.__getLocalVars = function() {
                    return {
                        initialState: y,
                        state: d
                    }
                };
                ! function(e, t, r) {
                    t && c(e.prototype, t);
                    r && c(e, r)
                }(r, [{
                    key: "hasAcceptedStoreTerms",
                    get: function() {
                        return d.hasAcceptedStoreTerms
                    }
                }]);
                return r
            }(n.ZP.PersistedStore);
            O.displayName = "ApplicationStoreUserSettingsStore";
            O.persistKey = "ApplicationStoreUserSettingsStore";
            O.migrations = [function(e) {
                return null == e.hasAcceptedEulaIds ? s(function(e) {
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
                }({}, e), {
                    hasAcceptedEulaIds: []
                }) : e
            }];
            const m = new O(o.Z, {
                APPLICATION_STORE_ACCEPT_STORE_TERMS: function() {
                    d.hasAcceptedStoreTerms = !0
                },
                APPLICATION_STORE_ACCEPT_EULA: function(e) {
                    var t = e.eulaId;
                    if (d.hasAcceptedEulaIds.includes(t)) return !1;
                    d.hasAcceptedEulaIds.push(t)
                }
            })
        },
        641277: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => x
            });
            var n = r(785893),
                o = r(667294),
                i = r(294184),
                c = r.n(i),
                a = r(269116);

            function l(e, t) {
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
                            c = !0,
                            a = !1;
                        try {
                            for (r = r.call(e); !(c = (n = r.next()).done); c = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                c || null == r.return || r.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return l(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return l(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var u = r(124251),
                f = r(633878);

            function p(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
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

            function d(e, t) {
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

            function y(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    c = e.color,
                    a = void 0 === c ? "currentColor" : c,
                    l = e.foreground,
                    s = d(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", b(function(e) {
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
                }({}, (0, f.Z)(s)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 40 40",
                    children: (0, n.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, n.jsx)("path", {
                            className: l,
                            fill: a,
                            fillOpacity: ".8",
                            d: "M21.226 30v-4.154h-3.755V30h3.755zm-.512-8.62c3.67-1.337 5.718-2.959 5.718-6.145 0-3.272-2.36-5.235-6.088-5.235-2.589 0-4.637.825-6.344 2.048l.484 3.3c1.621-1.251 3.47-2.162 5.49-2.162 1.707 0 2.845.854 2.845 2.305 0 1.593-1.08 2.475-3.812 3.442l-.882.342.342 4.523 2.076-.455.171-1.963z"
                        }), (0, n.jsx)("rect", {
                            className: l,
                            width: "38",
                            height: "38",
                            x: "1",
                            y: "1",
                            stroke: a,
                            strokeOpacity: ".4",
                            strokeWidth: "2",
                            rx: "5"
                        }), (0, n.jsx)("circle", {
                            className: l,
                            cx: "7",
                            cy: "7",
                            r: "2",
                            fill: a,
                            fillOpacity: ".4"
                        }), (0, n.jsx)("circle", {
                            className: l,
                            cx: "7",
                            cy: "33",
                            r: "2",
                            fill: a,
                            fillOpacity: ".4"
                        }), (0, n.jsx)("circle", {
                            className: l,
                            cx: "33",
                            cy: "7",
                            r: "2",
                            fill: a,
                            fillOpacity: ".4"
                        }), (0, n.jsx)("circle", {
                            className: l,
                            cx: "33",
                            cy: "33",
                            r: "2",
                            fill: a,
                            fillOpacity: ".4"
                        })]
                    })
                }))
            }
            var O = r(203600),
                m = r(331774),
                j = r.n(m);

            function h(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function g(e, t) {
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

            function v(e, t) {
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
            var P = {
                XSMALL: j().xsmall,
                SMALL: j().small,
                MEDIUM: j().medium,
                LARGE: j().large
            };
            var w = function(e) {
                var t, i = e.game,
                    l = e.guild,
                    f = e.skuId,
                    p = e.pid,
                    b = e.className,
                    d = e.guildClassName,
                    m = e.size,
                    w = void 0 === m ? P.MEDIUM : m,
                    x = v(e, ["game", "guild", "skuId", "pid", "className", "guildClassName", "size"]);
                null != f && (t = function(e) {
                    if (null == e) return null;
                    switch (e) {
                        case O.Si.GUILD:
                            return r(460122);
                        case O.Si.TIER_0:
                            return r(873994);
                        case O.Si.TIER_1:
                            return r(413369);
                        case O.Si.TIER_2:
                        case O.Si.LEGACY:
                            return r(132354);
                        default:
                            return null
                    }
                }(f));
                null != i && null == t && (t = i.getIconURL(function(e) {
                    switch (e) {
                        case P.XSMALL:
                            return 24;
                        case P.SMALL:
                            return 30;
                        case P.MEDIUM:
                            return 40;
                        case P.LARGE:
                            return 60;
                        default:
                            return 80
                    }
                }(w)));
                t = function(e, t) {
                    var r = s(o.useState(), 2),
                        n = r[0],
                        i = r[1];
                    o.useEffect((function() {
                        null != e && null == t ? (0, a.Z)().then((function(t) {
                            null != t && t.identifyGame(e, (function(e, t) {
                                0 === e && null != t.icon && "" !== t.icon && null != t.name && "" !== t.name && i("data:image/png;base64,".concat(t.icon))
                            }))
                        })) : i(void 0)
                    }), [e, t]);
                    return null != t ? t : n
                }(p, t);
                if (null == t && null != l) {
                    var S = function(e) {
                        switch (e) {
                            case P.XSMALL:
                                return u.Z.Sizes.SMALLER;
                            case P.SMALL:
                                return u.Z.Sizes.SMALL;
                            case P.LARGE:
                                return u.Z.Sizes.LARGE;
                            default:
                                return u.Z.Sizes.MEDIUM
                        }
                    }(w);
                    return (0, n.jsx)(u.Z, {
                        className: c()(j().gameIcon, d, b),
                        guild: l,
                        size: S
                    })
                }
                return null == t ? (0, n.jsx)(y, {
                    className: c()(j().gameIcon, w, b)
                }) : (0, n.jsx)("div", g(function(e) {
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
                }({}, x), {
                    className: c()(j().gameIcon, w, b),
                    style: {
                        backgroundImage: "url('".concat(t, "')")
                    }
                }))
            };
            w.Sizes = P;
            const x = w
        },
        386991: (e, t, r) => {
            "use strict";
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

            function a(e, t) {
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
                    r = void 0 === t ? 16 : t,
                    l = e.height,
                    s = void 0 === l ? 16 : l,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    p = e.foreground,
                    b = a(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", c(function(e) {
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
                }({}, (0, o.Z)(b)), {
                    width: r,
                    height: s,
                    viewBox: "0 0 12 12",
                    children: (0, n.jsx)("path", {
                        fill: f,
                        className: p,
                        d: "M6 1C3.243 1 1 3.244 1 6c0 2.758 2.243 5 5 5s5-2.242 5-5c0-2.756-2.243-5-5-5zm0 2.376a.625.625 0 110 1.25.625.625 0 010-1.25zM7.5 8.5h-3v-1h1V6H5V5h1a.5.5 0 01.5.5v2h1v1z"
                    })
                }))
            }
        },
        97990: (e, t, r) => {
            "use strict";
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

            function a(e, t) {
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
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    p = e.foreground,
                    b = a(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", c(function(e) {
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
                }({}, (0, o.Z)(b)), {
                    width: r,
                    height: s,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        className: p,
                        fill: f,
                        id: "a",
                        d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z"
                    })
                }))
            }
        }
    }
]);
//# sourceMappingURL=9bd8bb168305e849fe81.js.map