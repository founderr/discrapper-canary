(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [66058], {
        8395: (e, t, n) => {
            e.exports = n.p + "1fe68f65b459ac02929bb531fead064b.svg"
        },
        826046: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => xu
            });
            var r = n(785893),
                o = n(667294),
                i = n(202351),
                a = n(304548),
                c = n(260012),
                l = n(26468),
                s = n(93191),
                u = n(337907),
                f = n(120007),
                d = n(567834),
                p = n(10712),
                h = n(801991),
                y = n(366007),
                v = n(329543),
                g = n(211482),
                b = n(294184),
                O = n.n(b),
                m = n(496486),
                S = n.n(m),
                E = n(781995),
                _ = n(450098),
                w = n(125776),
                j = n(993754),
                I = n(458960),
                C = n(582906),
                Z = n(784426),
                P = n(996810),
                T = n.n(P),
                x = function(e) {
                    var t = e.keybind,
                        n = e.separator,
                        i = e.className;
                    return (0, r.jsx)(r.Fragment, {
                        children: t.map((function(e, a) {
                            return (0, r.jsxs)(o.Fragment, {
                                children: [(0, r.jsx)("span", {
                                    className: O()(T().key, i),
                                    children: e
                                }), a === t.length - 1 ? void 0 : n]
                            }, a)
                        }))
                    })
                };
            x.defaultProps = {
                separator: "+"
            };
            const N = x;
            var R = n(189865),
                A = n(473708),
                M = n(959454),
                k = n.n(M),
                D = n(380203),
                L = n.n(D);

            function V(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function B(e) {
                B = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return B(e)
            }

            function G(e, t) {
                return !t || "object" !== z(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function U(e, t) {
                U = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return U(e, t)
            }
            var z = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Y(e) {
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
                    var n, r = B(e);
                    if (t) {
                        var o = B(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return G(this, n)
                }
            }
            var H, W = function(e) {
                    return e.stopPropagation()
                },
                F = function() {
                    return (0, r.jsx)("div", {
                        className: k().clickBlocker,
                        onClick: W,
                        onMouseEnter: W,
                        onMouseOver: W
                    })
                },
                K = function() {
                    return (0, r.jsx)("div", {
                        className: k().divider
                    })
                },
                X = function(e, t, n) {
                    return (0, r.jsx)("div", {
                        className: k().keybindMessage,
                        children: n.format({
                            keybind: t,
                            keybindHook: function(e, n) {
                                return (0, r.jsx)(N, {
                                    keybind: t,
                                    className: k().keybind
                                }, n)
                            }
                        })
                    })
                };
            ! function(e) {
                e.PRIMARY = "PRIMARY";
                e.BRAND = "BRAND";
                e.DANGER = "DANGER"
            }(H || (H = {}));
            var J = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && U(e, t)
                }(n, e);
                var t = Y(n);

                function n(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = t.call(this, e)).handleDismiss = function(e) {
                        e.stopPropagation();
                        var t = r.props.onDismissClick;
                        null == t || t(e)
                    };
                    r.handleConfirmClick = function(e) {
                        e.stopPropagation();
                        var t = r.props.onConfirmClick;
                        null == t || t(e)
                    };
                    r.handleCancelClick = function(e) {
                        e.stopPropagation();
                        var t = r.props.onCancelClick;
                        null == t || t(e)
                    };
                    r.handleMouseEnter = function() {
                        r.props.disabled || r.setState({
                            expanded: !0
                        })
                    };
                    var o = e.expand;
                    r.state = {
                        expanded: o
                    };
                    return r
                }
                var i = n.prototype;
                i.componentDidMount = function() {
                    var e = this.props.onNotificationShow;
                    null == e || e()
                };
                i.componentDidUpdate = function(e) {
                    var t = this.props.onNotificationShow;
                    null != t && null == e.onNotificationShow && t()
                };
                i.renderCloseButton = function() {
                    return (0, r.jsx)(a.Button, {
                        look: a.Button.Looks.BLANK,
                        size: a.Button.Sizes.NONE,
                        onClick: this.handleDismiss,
                        className: k().dismissButton,
                        "aria-label": A.Z.Messages.NOTIFICATION_DISMISS,
                        children: (0, r.jsx)(R.Z, {
                            width: 16,
                            height: 16,
                            className: k().dismissIcon
                        })
                    })
                };
                i.renderHint = function() {
                    var e = this.props,
                        t = e.hint,
                        n = e.colorScheme,
                        i = this.state.expanded;
                    if (null == t) return null;
                    if ("function" == typeof t) {
                        var a = t(i, n);
                        return null != a ? (0, r.jsxs)(o.Fragment, {
                            children: [(0, r.jsx)(K, {}), a]
                        }, "hint-custom") : null
                    }
                    return (0,
                        r.jsxs)(o.Fragment, {
                        children: [(0, r.jsx)(K, {}), (0, r.jsx)("div", {
                            className: "string" == typeof t ? k().hintText : void 0,
                            children: t
                        }, "hint-text")]
                    }, "hint-text")
                };
                i.renderFooter = function() {
                    var e = this.props,
                        t = e.renderFooter,
                        n = e.cancelText,
                        i = e.confirmText,
                        c = e.onConfirmClick,
                        l = e.onCancelClick,
                        s = e.hint,
                        u = e.colorScheme,
                        f = this.state.expanded;
                    if (!f) return null != s ? this.renderHint() : null;
                    if (null != t) {
                        var d = t(f, u);
                        return null != d ? (0, r.jsxs)(o.Fragment, {
                            children: [(0, r.jsx)(K, {}), d]
                        }, "footer-custom-content") : null
                    }
                    if (null != c || null != l) {
                        var p = a.Button.Colors.GREEN,
                            h = a.Button.Colors.PRIMARY,
                            y = a.Button.Looks.FILLED;
                        switch (u) {
                            case H.DANGER:
                            case H.BRAND:
                                p = h = a.Button.Colors.WHITE;
                                y = a.Button.Looks.OUTLINED
                        }
                        return (0, r.jsxs)(o.Fragment, {
                            children: [(0, r.jsx)(K, {}), (0, r.jsxs)("div", {
                                className: k().buttonContainer,
                                children: [null != c ? (0, r.jsx)(a.Button, {
                                    fullWidth: !0,
                                    size: a.Button.Sizes.SMALL,
                                    color: p,
                                    onClick: this.handleConfirmClick,
                                    className: k().button,
                                    innerClassName: k().innerText,
                                    children: null != i ? i : A.Z.Messages.OKAY
                                }) : null, null != l ? (0, r.jsx)(a.Button, {
                                    fullWidth: !0,
                                    size: a.Button.Sizes.SMALL,
                                    look: y,
                                    color: h,
                                    onClick: this.handleCancelClick,
                                    className: k().button,
                                    children: null != n ? n : A.Z.Messages.CANCEL
                                }) : null]
                            })]
                        }, "footer-button-content")
                    }
                    return this.renderHint()
                };
                i.renderIcon = function() {
                    var e = this.props.icon;
                    return null == e ? null : "string" == typeof e ? (0, r.jsx)(a.Avatar, {
                        src: e,
                        size: a.AvatarSizes.SIZE_40,
                        className: k().avatar,
                        "aria-hidden": !0
                    }) : (0, r.jsx)("div", {
                        className: k().avatar,
                        children: e
                    })
                };
                i.renderContent = function() {
                    var e = this.props,
                        t = e.body,
                        n = e.title,
                        o = e.maxBodyLines;
                    return (0, r.jsxs)("div", {
                        className: k().content,
                        children: [this.renderIcon(), (0, r.jsxs)("div", {
                            className: k().details,
                            children: [(0, r.jsx)("div", {
                                className: k().title,
                                children: n
                            }), null != t ? (0, r.jsx)("div", {
                                className: O()(k().body, L().marginTop4),
                                style: {
                                    WebkitLineClamp: o,
                                    lineClamp: o
                                },
                                children: t
                            }) : null]
                        })]
                    })
                };
                i.render = function() {
                    var e, t = this.props,
                        n = t.onNotificationClick,
                        o = t.colorScheme,
                        i = t.disabled,
                        c = this.state.expanded,
                        l = null != n ? a.Clickable : "div";
                    return (0, r.jsxs)(l, {
                        onMouseOver: c ? null : this.handleMouseEnter,
                        onFocus: c ? null : this.handleMouseEnter,
                        onClick: n,
                        className: O()(k().container, (e = {}, V(e, k().themePrimary, o === H.PRIMARY), V(e, k().themeBrand, o === H.BRAND), V(e, k().themeDanger, o === H.DANGER), V(e, k().clickable, null != n && !i), e)),
                        children: [this.renderCloseButton(), this.renderContent(), this.renderFooter(), i ? (0, r.jsx)(F, {}) : null]
                    })
                };
                n.getDerivedStateFromProps = function(e, t) {
                    var n = e.expand;
                    return !t.expanded && n ? {
                        expanded: !0
                    } : null
                };
                return n
            }(o.PureComponent);
            J.ColorSchemes = H;
            J.defaultProps = {
                maxBodyLines: void 0,
                colorScheme: H.PRIMARY,
                expand: !1,
                disabled: !1
            };
            const Q = J;
            var q = n(633878);

            function $(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ee(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function te(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function ne(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    a = e.color,
                    c = void 0 === a ? "currentColor" : a,
                    l = e.foreground,
                    s = te(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", ee(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            $(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, q.Z)(s)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 430 430",
                    children: (0, r.jsx)("path", {
                        className: l,
                        color: c,
                        d: "M187.9,308.1c17.9-13.5,43-13.7,61.1-0.3c1.9,1.3,2.4,4,1.1,5.8s-3.7,2.3-5.6,0.9l-0.3-0.3 c-15.1-11.3-36.3-11.2-51.3,0.1c-0.8,0.5-1.6,0.8-2.4,0.8c-1.2,0-2.4-0.5-3.2-1.6C185.8,312,186.2,309.3,187.9,308.1 M124.4,236 c11.7,0,21.3,9.4,21.3,21.1s-9.4,21.1-21.1,21.1c-11.7,0-21.1-9.4-21.1-21.1C103.1,245.6,112.7,236,124.4,236 M315,236 c11.7,0,21.3,9.4,21.3,21.3c0,11.7-9.4,21.1-21.1,21.1s-21.1-9.4-21.1-21.1C294,245.6,303.5,236,315,236 M347.8,307.2 c2-0.3,4-0.7,6-1.2c2.3-0.5,4.4,0.7,5,2.9c0.7,2.1-0.7,4.4-2.8,5c-2.3,0.7-4.6,1.1-7,1.3c-0.1,0-0.3,0-0.5,0c-2,0-3.7-1.5-4-3.6 C344.1,309.7,345.7,307.6,347.8,307.2 M128.1,87.2l-0.3,0.1c-14.3,5.8-23.6,19.5-23.6,35.1c0,8.5,2.9,16.6,8.5,23.5 c0,0,0,0.1,0.1,0.1l0,0c0.1,0.1,11.3,15.3,31.4,16.9c2.3,0.1,3.9,2.1,3.7,4.4c-0.1,2.1-2,3.7-4,3.7c-0.1,0-0.3,0-0.3,0 c-18.9-1.5-30.8-12.8-35.3-17.8l-4.6,1.7c-0.1,0.1-0.3,0.1-0.5,0.3c-25.6,9.6-42.2,32.1-42.2,57.5c0,10.6,3.1,21.1,8.6,30.4 c0.7,1.1,0.8,2.3,0.4,3.3c-0.3,1.2-1.2,2-2.3,2.5C36.2,263.1,16,293.6,16,327c0,47.6,39.9,86.2,88.9,86.2c32.4,0,68-6.2,106.1-18.5 c3.1-1.3,39.5-16.7,91.1-14.5c2.3,0.1,4,2,3.9,4.3c-0.1,2.3-1.9,4.1-4.3,3.9c-35.6-1.6-64,5.7-78.1,10.4 c26.2,9.6,63.8,14.5,111.7,14.5c43.3,0,78.6-35.2,78.6-78.6c0-20.3-8-39.7-22.1-54.3c-3.2,7.6-10.2,20.2-23.2,28.2 c-0.7,0.4-1.3,0.7-2.1,0.7c-1.3,0-2.7-0.7-3.5-1.9c-1.2-1.9-0.5-4.4,1.3-5.6c16.2-10,21.8-28.7,22.1-29.6 c4.1-17.7,2.4-35.6-4.9-53.3c-4.1-10-10.1-19-17.8-26.8c-1.5-1.6-13.5-11.3-13.5-11.3c-3.6,6.9-12.8,19-33.6,23.6 c-0.3,0-0.5,0.1-0.8,0.1c-1.9,0-3.6-1.3-4-3.2c-0.5-2.3,0.9-4.4,3.1-4.8c23.9-5.2,29.2-21.7,29.6-22.7c3.5-13,2.3-26.4-3.5-39.6 c-8.2-18.9-25.9-32.7-47.4-37.2c-3.5,5.2-12.8,16.1-31.6,20.3c-0.3,0.1-0.7,0.1-0.9,0.1c-1.9,0-3.6-1.3-4-3.2 c-0.5-2.3,0.8-4.4,3.1-4.9c20.2-4.6,27.2-17.7,27.8-18.7c2.8-6.4,2.8-13.7,0.3-21.4c-4.6-14.1-15.9-16.9-31.6-20.9 c-16.9-4.1-37.6-9.3-55.7-31.5c-15.7,10.9-30.8,33.3-29,50.7c1.1,9.8,7.4,16.9,19,20.9c2.1,0.8,3.2,3.1,2.5,5.2 c-0.8,2.1-3.1,3.2-5.2,2.5c-11.8-4.1-18.1-10.5-21.4-17C167,79.1,141.9,80.6,128.1,87.2z"
                    })
                }))
            }
            var re = n(968929),
                oe = n.n(re),
                ie = n(2590),
                ae = n(660044),
                ce = n.n(ae),
                le = n(3066),
                se = n.n(le);

            function ue(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function fe(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function de(e) {
                de = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return de(e)
            }

            function pe(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function he(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function ye(e, t) {
                return !t || "object" !== ge(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function ve(e, t) {
                ve = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return ve(e, t)
            }
            var ge = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function be(e) {
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
                    var n, r = de(e);
                    if (t) {
                        var o = de(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return ye(this, n)
                }
            }
            var Oe = ie.t_t.DEFAULT,
                me = o.createContext({
                    type: Oe,
                    opacity: 1
                }),
                Se = o.createContext(void 0),
                Ee = function(e) {
                    var t = e.children,
                        n = e.className,
                        o = he(e, ["children", "className"]);
                    return (0, r.jsx)(me.Consumer, {
                        children: function(e) {
                            var i = e.type;
                            return (0, r.jsx)(Se.Consumer, {
                                children: function(e) {
                                    return (0, r.jsx)("div", pe(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                fe(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({
                                        className: O()(n, ce().bar, ce()[oe()(i)]),
                                        style: e
                                    }, o), {
                                        children: t
                                    }))
                                }
                            })
                        }
                    })
                },
                _e = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && ve(e, t)
                    }(n, e);
                    var t = be(n);

                    function n() {
                        ue(this, n);
                        return t.apply(this, arguments)
                    }
                    n.prototype.render = function() {
                        var e = this.props,
                            t = e.disableScroll,
                            n = e.children,
                            o = e.className;
                        return (0, r.jsx)(Se.Consumer, {
                            children: function(e) {
                                return (0, r.jsx)(me.Consumer, {
                                    children: function(i) {
                                        var c = O()(ce().body, ce()[oe()(i.type)], o);
                                        return t ? (0, r.jsx)("div", {
                                            className: c,
                                            style: e,
                                            children: n
                                        }) : (0, r.jsx)(a.Scroller, {
                                            fade: !0,
                                            className: c,
                                            children: n
                                        })
                                    }
                                })
                            }
                        })
                    };
                    return n
                }(o.PureComponent);
            _e.defaultProps = {
                disableScroll: !1
            };
            var we = function(e) {
                    var t = e.type,
                        n = void 0 === t ? Oe : t,
                        o = e.width,
                        i = e.height,
                        a = e.children,
                        c = e.className,
                        l = e.opacity,
                        s = void 0 === l ? 1 : l,
                        u = e.onClick;
                    return (0, r.jsx)(me.Provider, {
                        value: {
                            type: n,
                            opacity: s
                        },
                        children: (0, r.jsx)("div", {
                            className: O()(ce().widget, ce()[oe()(n)], c),
                            style: {
                                width: o,
                                height: i
                            },
                            onClick: u,
                            children: a
                        })
                    })
                },
                je = function(e) {
                    var t = e.children,
                        n = e.className,
                        o = e.dynamicSize,
                        i = void 0 !== o && o;
                    return (0,
                        r.jsx)(Se.Consumer, {
                        children: function(e) {
                            return (0, r.jsx)("div", {
                                className: O()(ce().content, n, fe({}, ce().staticSize, !i)),
                                style: e,
                                children: t
                            })
                        }
                    })
                };
            we.Background = function(e) {
                var t = e.children,
                    n = e.opacityOverride;
                if (null == t) return null;
                var i = [Ee, _e, je];
                return (0, r.jsx)(me.Consumer, {
                    children: function(e) {
                        var a = e.opacity,
                            c = {
                                backgroundColor: "rgba(54, 57, 63, ".concat("" + (null != n ? n : a), ")")
                            };
                        if ("string" == typeof t.type) {
                            var l = {
                                style: c
                            };
                            return o.cloneElement(t, l)
                        }
                        if (i.includes(t.type)) return (0, r.jsx)(Se.Provider, {
                            value: c,
                            children: t
                        });
                        var s = t.type.displayName;
                        throw new Error("Widget.Background cannot be wrapped around ".concat(s, ". Pass a DOM node or one of ").concat(i.map((function(e) {
                            return "Widget." + e.name
                        })).join(",")))
                    }
                })
            };
            we.Body = _e;
            we.Content = je;
            we.Icon = function(e) {
                var t = e.icon,
                    n = e.label,
                    o = e.onClick,
                    i = e.isActive,
                    c = e.tooltipPosition,
                    l = void 0 === c ? "top" : c,
                    s = e.size,
                    u = void 0 === s ? 20 : s,
                    f = e.isTutorial,
                    d = void 0 !== f && f;
                return (0, r.jsx)(a.Tooltip, {
                    text: d ? (0, r.jsx)("div", {
                        className: ce().tutorialTip,
                        children: n
                    }) : n,
                    "aria-label": n,
                    position: l,
                    forceOpen: d,
                    color: d ? a.Tooltip.Colors.BRAND : a.Tooltip.Colors.BLACK,
                    children: function(e) {
                        var c = e.onMouseEnter,
                            l = e.onMouseLeave;
                        return (0, r.jsx)(a.Button, {
                            look: a.Button.Looks.BLANK,
                            size: a.Button.Sizes.NONE,
                            onClick: o,
                            onMouseEnter: c,
                            onMouseLeave: l,
                            className: O()(ce().icon, fe({}, ce().toggledIconOn, i)),
                            innerClassName: se().flexCenter,
                            "aria-label": n,
                            children: (0, r.jsx)(t, {
                                width: u,
                                height: u,
                                role: "img"
                            })
                        })
                    }
                })
            };
            we.Bar = Ee;
            const Ie = we;
            var Ce = n(22176),
                Ze = n(463473),
                Pe = n(226810),
                Te = n(973935),
                xe = n(809784),
                Ne = n(199731),
                Re = n(513328),
                Ae = n(306472);
            var Me = n(120415),
                ke = n(310126);

            function De(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function Le(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Ve(e) {
                Ve = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Ve(e)
            }

            function Be(e, t) {
                return !t || "object" !== Ue(t) && "function" != typeof t ? De(e) : t
            }

            function Ge(e, t) {
                Ge = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Ge(e, t)
            }
            var Ue = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function ze(e) {
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
                    var n, r = Ve(e);
                    if (t) {
                        var o = Ve(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Be(this, n)
                }
            }
            var Ye = {
                    x: 0,
                    y: 0
                },
                He = !1;

            function We(e) {
                var t = e.clientX,
                    n = e.clientY;
                He = !0;
                Ye.x = t;
                Ye.y = n
            }
            var Fe = new Map;

            function Ke(e, t) {
                if (null == t) {
                    Fe.delete(e);
                    if (0 === Fe.size) {
                        window.removeEventListener("mousemove", We);
                        He = !1
                    }
                } else {
                    var n = Fe.get(e);
                    if (null != n && (0, Ne.Z)(n.zone, t.zone)) return;
                    0 === Fe.size && window.addEventListener("mousemove", We);
                    Fe.set(e, t)
                }
                if (Me.FB) {
                    var r, o;
                    null === Ae.Z || void 0 === Ae.Z || null === (r = Ae.Z.globalOverlay) || void 0 === r || null === (o = r.setClickZones) || void 0 === o || o.call(r, Array.from(Fe.values()).map((function(e) {
                        var t = e.zone;
                        return {
                            name: t.name,
                            x: t.left,
                            y: t.top,
                            width: t.right - t.left,
                            height: t.bottom - t.top
                        }
                    })));
                    ke.ZP.requireModule("discord_overlay2").broadcastCommand({
                        message: "set_click_zones",
                        zones: Array.from(Fe.values()).map((function(e) {
                            return e.zone
                        }))
                    });
                    ! function() {
                        var e, t;
                        if (Xe) return;
                        var n = function(e, t, n) {
                            var r = Fe.get(e);
                            if (null != r) {
                                if (!He) {
                                    Ye.x = t;
                                    Ye.y = n
                                }
                                r.instance.click()
                            }
                        };
                        null === Ae.Z || void 0 === Ae.Z || null === (e = Ae.Z.globalOverlay) || void 0 === e || null === (t = e.setClickZoneCallback) || void 0 === t || t.call(e, n);
                        ke.ZP.requireModule("discord_overlay2").setClickZoneCallback(n);
                        Xe = !0
                    }()
                }
            }
            var Xe = !1;
            var Je = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Ge(e, t)
                }(n, e);
                var t = ze(n);

                function n() {
                    Le(this, n);
                    var e;
                    (e = t.apply(this, arguments)).zone = S().uniqueId("ClickArea");
                    e.interval = new Re.Xp;
                    e.updateZone = function() {
                        var t = (0, Te.findDOMNode)(De(e));
                        if ((0, xe.k)(t)) {
                            var n = t.getBoundingClientRect(),
                                r = n.left,
                                o = n.top,
                                i = n.right,
                                a = n.bottom;
                            Ke(e.zone, {
                                instance: De(e),
                                zone: {
                                    name: e.zone,
                                    left: Math.ceil(r),
                                    top: Math.ceil(o),
                                    right: Math.ceil(i),
                                    bottom: Math.ceil(a)
                                }
                            })
                        }
                    };
                    return e
                }
                var r = n.prototype;
                r.componentDidMount = function() {
                    this.props.observe ? this.observeZone() : this.updateZone()
                };
                r.componentWillUnmount = function() {
                    this.interval.stop();
                    Ke(this.zone, null)
                };
                r.componentDidUpdate = function(e) {
                    var t = this.props.observe;
                    t !== e.observe && (t ? this.observeZone() : this.interval.stop())
                };
                r.render = function() {
                    return o.Children.only(this.props.children)
                };
                r.observeZone = function() {
                    this.updateZone();
                    this.interval.start(this.props.observeInterval, this.updateZone)
                };
                r.click = function() {
                    var e, t, n;
                    ! function(e, t, n) {
                        var r = document.elementFromPoint(t, n);
                        if (null == r) throw new Error;
                        r.dispatchEvent(e)
                    }((e = "click", t = Ye.x, n = Ye.y, new MouseEvent(e, {
                        screenX: t,
                        screenY: n,
                        clientX: t,
                        clientY: n,
                        bubbles: !0,
                        view: window
                    })), Ye.x, Ye.y)
                };
                return n
            }(o.PureComponent);
            Je.defaultProps = {
                observe: !0,
                observeInterval: 1e3
            };
            var Qe = n(122253),
                qe = n(77159),
                $e = n.n(qe);

            function et(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function tt(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function nt(e) {
                nt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return nt(e)
            }

            function rt(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                t && it(e, t)
            }

            function ot(e, t) {
                return !t || "object" !== at(t) && "function" != typeof t ? et(e) : t
            }

            function it(e, t) {
                it = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return it(e, t)
            }
            var at = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function ct(e) {
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
                    var n, r = nt(e);
                    if (t) {
                        var o = nt(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return ot(this, n)
                }
            }

            function lt() {
                var e = (0, Pe.QF)(),
                    t = (0, Pe.Ht)();
                (0, I.lW)({
                    type: ie.BmY.DISPATCH,
                    pid: e,
                    token: t,
                    payloads: [{
                        type: "OVERLAY_SET_INPUT_LOCKED",
                        locked: !0,
                        pid: e
                    }]
                })
            }
            var st = function(e) {
                    rt(n, e);
                    var t = ct(n);

                    function n() {
                        tt(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            showTrace: !1,
                            busy: !1
                        };
                        e.hideNotification = function() {
                            lt();
                            var t = et(e).notificationTimer;
                            null != t && clearTimeout(t);
                            e.notificationTimer = null
                        };
                        e.handleReload = function(t) {
                            e.setState({
                                busy: !0
                            });
                            lt();
                            j.Z.track(ie.rMx.NOTIFICATION_CLICKED, {
                                notif_type: Qe.n0.OverlayCrashed,
                                action_type: "reload"
                            }, !0);
                            t.stopPropagation();
                            setTimeout((function() {
                                return location.reload(!0)
                            }), 200)
                        };
                        e.handleNotificationClick = function(t) {
                            t.stopPropagation();
                            var n = et(e).notificationTimer;
                            null != n && clearTimeout(n);
                            t.shiftKey && e.setState({
                                showTrace: !0
                            })
                        };
                        return e
                    }
                    var o = n.prototype;
                    o.componentDidMount = function() {
                        this.notificationTimer = setTimeout(this.hideNotification, 1e4);
                        j.Z.track(ie.rMx.NOTIFICATION_VIEWED, {
                            notif_type: Qe.n0.OverlayCrashed
                        })
                    };
                    o.componentWillUnmount = function() {
                        var e = this.notificationTimer;
                        null != e && clearTimeout(e)
                    };
                    o.render = function() {
                        var e = this.props,
                            t = e.info,
                            n = e.error,
                            o = this.state.showTrace;
                        return null == this.notificationTimer ? null : (0, r.jsx)(Je, {
                            observe: !1,
                            children: (0, r.jsxs)(a.Clickable, {
                                className: O()((0, Ze.Q)(ie.BRd.DARK), $e().container),
                                onClick: function(e) {
                                    return e.stopPropagation()
                                },
                                children: [(0, r.jsx)(Q, {
                                    expand: !0,
                                    colorScheme: H.DANGER,
                                    icon: (0, r.jsx)(ne, {
                                        width: 40,
                                        height: 40,
                                        className: $e().notificationIcon
                                    }),
                                    title: A.Z.Messages.OVERLAY_CRASHED_TITLE,
                                    confirmText: A.Z.Messages.OVERLAY_RELOAD,
                                    onNotificationClick: this.handleNotificationClick,
                                    onConfirmClick: this.handleReload,
                                    onDismissClick: this.hideNotification
                                }), o && null != t ? (0, r.jsxs)(Ie, {
                                    className: $e().stackTrace,
                                    children: [(0, r.jsx)(Ie.Bar, {
                                        children: "Error Details"
                                    }), (0, r.jsx)(Ie.Content, {
                                        className: $e().stackTraceCode,
                                        children: (0, r.jsx)("code", {
                                            className: $e().code,
                                            children: (0, r.jsx)("pre", {
                                                children: n.stack
                                            })
                                        })
                                    })]
                                }) : null]
                            })
                        })
                    };
                    return n
                }(o.PureComponent),
                ut = S().throttle((function() {
                    C.Z.increment({
                        name: w.V.APP_CRASHED,
                        tags: ["reason:".concat(E.v.UNHANDLED_JS_ERROR), "level:".concat(_.c.FATAL)]
                    }, !0)
                }), 100, {
                    trailing: !1
                }),
                ft = function(e) {
                    rt(n, e);
                    var t = ct(n);

                    function n() {
                        tt(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            error: null,
                            info: null
                        };
                        return e
                    }
                    var o = n.prototype;
                    o.componentDidCatch = function(e, t) {
                        var n = (0, Z.s1)().location;
                        this.setState({
                            error: e,
                            info: t
                        });
                        var r = (0, Pe.QF)(),
                            o = (0, Pe.Ht)();
                        (0, I.lW)({
                            type: ie.BmY.DISPATCH,
                            pid: (0, Pe.QF)(),
                            token: o,
                            payloads: [{
                                type: "OVERLAY_CRASHED",
                                pid: r
                            }, {
                                type: "OVERLAY_SET_INPUT_LOCKED",
                                locked: !0,
                                pid: r
                            }]
                        });
                        setImmediate((function() {
                            return window.addEventListener("click", lt)
                        }));
                        var i = Ce.Z.captureCrash(e, {
                            extra: t
                        });
                        j.Z.track(ie.rMx.APP_CRASHED, {
                            path: n.pathname,
                            extra: t,
                            error_message: e.message,
                            error_stack: e.stack,
                            sentry_issue_id: i
                        });
                        ut()
                    };
                    o.render = function() {
                        var e = this.props,
                            t = e.children,
                            n = e.className,
                            o = this.state,
                            i = o.error,
                            a = o.info;
                        return null != i ? (0, r.jsx)(st, {
                            error: i,
                            info: a
                        }) : (0, r.jsx)("div", {
                            className: n,
                            children: t
                        })
                    };
                    return n
                }(o.PureComponent);
            const dt = ft;
            var pt = n(427537),
                ht = n.n(pt),
                yt = n(23279),
                vt = n.n(yt),
                gt = n(618446),
                bt = n.n(gt),
                Ot = n(105783),
                mt = n(971402),
                St = n(72831),
                Et = n(442921),
                _t = n(241166),
                wt = n(173242),
                jt = n(153686),
                It = n(19585),
                Ct = n(907078),
                Zt = n(813844),
                Pt = n(866926),
                Tt = n(944514),
                xt = n(668403),
                Nt = n(451069),
                Rt = n(177570),
                At = n(664625),
                Mt = n(61209),
                kt = n(567403),
                Dt = n(973469),
                Lt = n(671723),
                Vt = n(715107),
                Bt = n(20405),
                Gt = n(375759),
                Ut = n(881532),
                zt = n(138049),
                Yt = n(674482),
                Ht = n(901654),
                Wt = n(107364),
                Ft = (n(786170), n(79251)),
                Kt = n(940060),
                Xt = n(805907),
                Jt = n(597967),
                Qt = n(5544),
                qt = n(21372),
                $t = n(682776),
                en = n(464187),
                tn = n(473903);

            function nn(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function rn(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function on(e) {
                on = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return on(e)
            }

            function an(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        rn(e, t, n[t])
                    }))
                }
                return e
            }

            function cn(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function ln(e, t) {
                return !t || "object" !== un(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function sn(e, t) {
                sn = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return sn(e, t)
            }
            var un = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function fn(e) {
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
                    var n, r = on(e);
                    if (t) {
                        var o = on(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return ln(this, n)
                }
            }
            var dn = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && sn(e, t)
                }(n, e);
                var t = fn(n);

                function n() {
                    nn(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.componentDidUpdate = function(e) {
                    if (this.props.locked) return null;
                    var t = this.props,
                        n = t.selectedGuild,
                        r = t.selectedChannel,
                        o = t.isNSFWChannel,
                        i = t.isMemberPending,
                        a = t.hasPreviewEnabled,
                        c = t.postableChannelCount;
                    if (n !== e.selectedGuild || i && !e.isMemberPending) {
                        var l = i ? {
                            is_pending: i,
                            preview_enabled: a
                        } : {};
                        (0, Jt.Q)(ie.rMx.GUILD_VIEWED, cn(an({}, l), {
                            postable_channels: c
                        }))
                    }
                    if (null != r && r !== e.selectedChannel) {
                        var s = (0, Xt.K)(Mt.Z.getChannel(r), !0);
                        (0, Jt.Q)(ie.rMx.CHANNEL_OPENED, an({
                            channel_is_nsfw: o
                        }, s))
                    }
                };
                r.render = function() {
                    return null
                };
                return n
            }(o.Component);
            const pn = i.ZP.connectStores([en.Z, Vt.Z, Mt.Z, kt.Z, tn.default, Yt.Z, qt.ZP, Qt.ZP, $t.Z], (function() {
                var e, t, n, r = en.Z.getGuildId(),
                    o = Vt.Z.getChannelId(r),
                    i = Mt.Z.getChannel(o),
                    a = kt.Z.getGuild(r),
                    c = tn.default.getCurrentUser(),
                    l = null !== (t = Qt.ZP.getChannels(null == a ? void 0 : a.id)[Qt.sH]) && void 0 !== t ? t : [],
                    s = l.length > 0 ? l.filter((function(e) {
                        var t = e.channel;
                        return $t.Z.can(Kt.Z.combine(ie.Plq.SEND_MESSAGES, ie.Plq.VIEW_CHANNEL), t)
                    })).length : 0,
                    u = null != c && null != r && (null !== (n = null === (e = qt.ZP.getMember(r, c.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== n && n);
                return {
                    selectedGuild: r,
                    selectedChannel: o,
                    isNSFWChannel: null == i ? void 0 : i.nsfw,
                    locked: Yt.Z.isUILocked((0, Pe.QF)()),
                    hasPreviewEnabled: null == a ? void 0 : a.features.has(ie.oNc.PREVIEW_ENABLED),
                    isMemberPending: u,
                    postableChannelCount: s
                }
            }))(dn);
            var hn = n(443660),
                yn = n(441143),
                vn = n.n(yn),
                gn = n(228721),
                bn = n(744564),
                On = n(875700),
                mn = n(537079);

            function Sn(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function En(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function _n(e, t) {
                return {
                    trackView: function() {
                        j.Z.track(ie.rMx.NOTIFICATION_VIEWED, t);
                        j.Z.notificationEvent(e, Qe.bv.Viewed)
                    },
                    trackClick: function(n) {
                        var r = Yt.Z.isInstanceUILocked() ? ie.Sbl.LOCKED_OVERLAY : ie.Sbl.UNLOCKED_OVERLAY;
                        j.Z.track(ie.rMx.NOTIFICATION_CLICKED, En(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))));
                                r.forEach((function(t) {
                                    Sn(e, t, n[t])
                                }))
                            }
                            return e
                        }({}, t), {
                            location: r,
                            action_type: n
                        }));
                        j.Z.notificationEvent(e, Qe.bv.Clicked)
                    }
                }
            }

            function wn() {
                var e = zt.Z.getOverlayKeybind();
                return null != e ? (0, Ft.BB)(e.shortcut, !0).split(" + ") : ["???"]
            }
            var jn = n(775173);

            function In(e, t) {
                var n = e.username,
                    o = A.Z.Messages.USER_ACTIVITY_USER_JOIN.format({
                        username: ""
                    }),
                    i = (0,
                        jn.ov)(e),
                    a = _n(Qe.n0.ActivityUserJoin, {
                        notif_type: Qe.n0.ActivityUserJoin,
                        notif_user_id: e.id,
                        activity_type: ie.mFx.JOIN,
                        activity_name: t.name
                    }),
                    c = a.trackView,
                    l = a.trackClick;
                return {
                    colorScheme: Q.ColorSchemes.PRIMARY,
                    icon: i,
                    title: n,
                    body: o,
                    hint: function(e) {
                        return t = A.Z.Messages.USER_ACTIVITY_USER_JOIN_HINT, (0, r.jsx)("div", {
                            className: k().hintSubtleText,
                            children: t
                        });
                        var t
                    },
                    onNotificationShow: function() {
                        c()
                    },
                    onDismissClick: function() {
                        l("dismiss")
                    }
                }
            }
            var Cn = n(346411),
                Zn = n.n(Cn);

            function Pn(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a),
                        l = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function Tn(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            Pn(i, r, o, a, c, "next", e)
                        }

                        function c(e) {
                            Pn(i, r, o, a, c, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function xn(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Nn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        xn(e, t, n[t])
                    }))
                }
                return e
            }

            function Rn(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var An = function(e, t) {
                var n, r, o, i, a = {
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
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
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

            function Mn() {
                return (0, r.jsx)("div", {
                    className: Zn().footer,
                    children: (0, r.jsx)(a.Button, {
                        color: a.Button.Colors.GREEN,
                        size: a.Button.Sizes.SMALL,
                        className: Zn().ctaButton,
                        children: A.Z.Messages.OVERLAY_NEWS_GO_LIVE_CTA
                    })
                })
            }
            var kn = n(997244),
                Dn = n(621647),
                Ln = n(773011),
                Vn = n(840922);
            var Bn = n(57141),
                Gn = n(496916);
            var Un = n(412732),
                zn = n(716118);
            var Yn = function(e) {
                return X(0, wn(), A.Z.Messages.OVERLAY_LAUNCH_OPEN_TIP)
            };

            function Hn(e) {
                var t = e.type,
                    o = function(e, t) {
                        if (t.type === Qe.nc.NEWS) {
                            var n, r, o, i, a, c, l, s;
                            return {
                                icon: null !== (a = null === (n = t.news) || void 0 === n ? void 0 : n.icon) && void 0 !== a ? a : e.icon,
                                title: null !== (c = null === (r = t.news) || void 0 === r ? void 0 : r.title) && void 0 !== c ? c : e.title,
                                body: null !== (l = null === (o = t.news) || void 0 === o ? void 0 : o.body) && void 0 !== l ? l : e.body,
                                hint: null !== (s = null === (i = t.news) || void 0 === i ? void 0 : i.hint) && void 0 !== s ? s : e.hint,
                                colorScheme: null != t.news ? H.BRAND : e.colorScheme,
                                notifType: null != t.news ? Qe.n0.NewsNudge : e.notifType
                            }
                        }
                        return e
                    }({
                        icon: n(603008),
                        title: A.Z.Messages.OVERLAY_LAUNCH_TITLE,
                        body: null,
                        hint: Yn,
                        colorScheme: H.PRIMARY,
                        notifType: Qe.n0.WelcomeNudge
                    }, e),
                    i = o.icon,
                    a = o.title,
                    c = o.body,
                    l = o.hint,
                    s = o.colorScheme,
                    u = o.notifType,
                    f = _n(u, {
                        notif_type: u
                    }),
                    d = f.trackView,
                    p = f.trackClick;
                return {
                    colorScheme: s,
                    icon: i,
                    title: a,
                    body: c,
                    hint: l,
                    renderFooter: function() {
                        return (0, r.jsx)("div", {
                            style: {
                                textAlign: "center",
                                padding: 2
                            },
                            children: A.Z.Messages.OVERLAY_CLICK_TO_UNLOCK
                        })
                    },
                    onNotificationShow: function() {
                        d()
                    },
                    onNotificationClick: function(e, n) {
                        p("unlock");
                        t === Qe.nc.NEWS && j.Z.updateNotificationStatus(n);
                        Yt.Z.isInstanceUILocked() && j.Z.setInstanceLocked(!1)
                    },
                    onDismissClick: function() {
                        p("dismiss")
                    }
                }
            }
            var Wn = n(481008),
                Fn = n(803257),
                Kn = n(415298);
            var Xn = n(149779),
                Jn = n(334396),
                Qn = n(335072);
            var qn = n(288263),
                $n = n(491260),
                er = n(436154),
                tr = n(793461);

            function nr(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function rr(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function or(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ir(e) {
                ir = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return ir(e)
            }

            function ar(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        or(e, t, n[t])
                    }))
                }
                return e
            }

            function cr(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function lr(e, t) {
                return !t || "object" !== pr(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function sr(e, t) {
                sr = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return sr(e, t)
            }

            function ur(e) {
                return function(e) {
                    if (Array.isArray(e)) return nr(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return nr(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return nr(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var fr, dr, pr = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function hr(e) {
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
                    var n, r = ir(e);
                    if (t) {
                        var o = ir(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return lr(this, n)
                }
            }! function(e) {
                e[e.GENERIC = 0] = "GENERIC";
                e[e.TEXT = 1] = "TEXT";
                e[e.INCOMING_CALL = 2] = "INCOMING_CALL"
            }(fr || (fr = {}));
            ! function(e) {
                e[e.NORMAL = 0] = "NORMAL";
                e[e.HIGH = 1] = "HIGH";
                e[e.URGENT = 2] = "URGENT"
            }(dr || (dr = {}));
            var yr = Object.freeze({
                    priority: dr.NORMAL,
                    duration: 5e3,
                    expirationExternallyManaged: !1,
                    type: fr.GENERIC
                }),
                vr = [],
                gr = function(e, t, n) {
                    var r = t ? ie._1z.TIMED_OUT : ie._1z.DISMISSED;
                    return setTimeout((function() {
                        return j.Z.updateNotificationStatus(e, r)
                    }), null != n ? n : 5e3)
                };

            function br(e) {
                switch (e.type) {
                    case Qe.nc.BROADCAST:
                        return t = e.game, o = _n(Qe.n0.StartBroadcastNotification, {
                            notif_type: Qe.n0.StartBroadcastNotification
                        }), i = o.trackView, c = o.trackClick, {
                            colorScheme: H.PRIMARY,
                            title: null,
                            body: A.Z.Messages.START_BROADCAST_NOTIFICATION_BODY,
                            icon: (0, r.jsx)(Fn.Z, {}),
                            renderFooter: function() {
                                return (0, r.jsx)(a.Button, {
                                    color: a.Button.Colors.GREEN,
                                    size: a.Button.Sizes.SMALL,
                                    fullWidth: !0,
                                    children: A.Z.Messages.START_BROADCAST_NOTIFICATION_CTA
                                })
                            },
                            onNotificationShow: function() {
                                i()
                            },
                            onNotificationClick: function(e, n) {
                                c("unlock");
                                j.Z.updateNotificationStatus(n);
                                j.Z.setInstanceLocked(!1);
                                (0, Kn.X)(A.Z.Messages.START_BROADCASTING, A.Z.Messages.START_BROADCASTING_CTA, (function() {
                                    (0, Wn.tE)({
                                        pid: t.pid
                                    })
                                }))
                            },
                            onDismissClick: function() {
                                c("dismiss")
                            }
                        };
                    case Qe.nc.GO_LIVE_VOICE:
                    case Qe.nc.GO_LIVE_NON_VOICE:
                        return function(e) {
                            switch (e.type) {
                                case Qe.nc.GO_LIVE_VOICE:
                                    var t = e.game,
                                        o = e.voiceGuild,
                                        i = _n(Qe.n0.GoLiveNudge, {
                                            notif_type: Qe.n0.GoLiveNudge
                                        }),
                                        c = i.trackView,
                                        l = i.trackClick;
                                    return {
                                        colorScheme: H.PRIMARY, icon: n(8395), title: null, body: A.Z.Messages.OVERLAY_NEWS_GO_LIVE_BODY.format({
                                            game: t.name,
                                            server: o.toString()
                                        }), hint: function() {
                                            return (0, r.jsx)(Mn, {})
                                        }, renderFooter: function() {
                                            return (0, r.jsx)(Mn, {})
                                        }, onNotificationShow: function() {
                                            c()
                                        }, onNotificationClick: function(e, t) {
                                            l("unlock");
                                            j.Z.updateNotificationStatus(t);
                                            j.Z.setInstanceLocked(!1);
                                            (0, a.openModalLazy)(Tn((function() {
                                                var e, t;
                                                return An(this, (function(i) {
                                                    switch (i.label) {
                                                        case 0:
                                                            return [4, Promise.all([n.e(40532), n.e(69521), n.e(47428)]).then(n.bind(n, 369521))];
                                                        case 1:
                                                            e = i.sent(), t = e.default;
                                                            return [2, function(e) {
                                                                return (0, r.jsx)(t, Rn(Nn({}, e), {
                                                                    selectSource: !1,
                                                                    guildId: o.id,
                                                                    analyticsLocation: ie.Sbl.OVERLAY_NUDGE
                                                                }))
                                                            }]
                                                    }
                                                }))
                                            })))
                                        }, onDismissClick: function() {
                                            l("dismiss")
                                        }
                                    };
                                case Qe.nc.GO_LIVE_NON_VOICE:
                                    var s = e.game,
                                        u = _n(Qe.n0.GoLiveNonVoiceNudge, {
                                            notif_type: Qe.n0.GoLiveNonVoiceNudge
                                        }),
                                        f = u.trackView,
                                        d = u.trackClick;
                                    return {
                                        colorScheme: H.PRIMARY, icon: n(8395), title: null, body: A.Z.Messages.OVERLAY_NEWS_GO_LIVE_BODY_NO_VOICE_CHANNEL.format({
                                                game: s.name
                                            }), hint: function() {
                                                return (0, r.jsx)(Mn, {})
                                            }, renderFooter: function() {
                                                return (0, r.jsx)(Mn, {})
                                            },
                                            onNotificationShow: function() {
                                                f()
                                            }, onNotificationClick: function(e, t) {
                                                d("unlock");
                                                j.Z.updateNotificationStatus(t);
                                                j.Z.setInstanceLocked(!1);
                                                (0, a.openModalLazy)(Tn((function() {
                                                    var e, t;
                                                    return An(this, (function(o) {
                                                        switch (o.label) {
                                                            case 0:
                                                                return [4, Promise.all([n.e(40532), n.e(69521), n.e(47428)]).then(n.bind(n, 369521))];
                                                            case 1:
                                                                e = o.sent(), t = e.default;
                                                                return [2, function(e) {
                                                                    return (0, r.jsx)(t, Rn(Nn({}, e), {
                                                                        selectSource: !1,
                                                                        selectGuild: !0,
                                                                        analyticsLocation: ie.Sbl.OVERLAY_NUDGE
                                                                    }))
                                                                }]
                                                        }
                                                    }))
                                                })))
                                            }, onDismissClick: function() {
                                                d("dismiss")
                                            }
                                    }
                            }
                        }(e);
                    case Qe.nc.NEWS:
                    default:
                        return Hn(e)
                }
                var t, o, i, c
            }

            function Or(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ie._1z.DISMISSED;
                if (null == e) return !1;
                var n = vr.findIndex((function(t) {
                    return t.id === e
                }));
                if (-1 === n) return !1;
                var r = vr[n];
                clearTimeout(r.timerId);
                vr = ur(vr);
                t === ie._1z.DISMISSED ? vr.splice(n, 1) : vr[n] = cr(ar({}, r), {
                    status: t
                })
            }

            function mr(e) {
                var t = vr.length;
                return (vr = vr.filter((function(t) {
                    return t.type !== fr.TEXT || t.channelId !== e
                }))).length !== t
            }

            function Sr(e) {
                var t = vr.find((function(t) {
                    return t.type === fr.INCOMING_CALL && t.channelId === e
                }));
                return null != t ? t.id : null
            }

            function Er(e, t) {
                var n = ar({}, yr, t);
                if (n.priority !== dr.URGENT && !Yt.Z.isInstanceFocused()) return null;
                var r = (0, gn.Z)(),
                    o = ar({
                        id: r,
                        status: ie._1z.ACTIVE,
                        timerId: gr(r, n.expirationExternallyManaged, n.duration),
                        props: e
                    }, n),
                    i = (vr = ur(vr)).findIndex((function(e) {
                        return e.priority <= n.priority
                    })); - 1 === i ? vr.push(o) : vr.splice(i, 0, o);
                if (vr.length > 10) {
                    var a = vr.pop();
                    clearTimeout(a.timerId)
                }
                return r
            }

            function _r(e, t, n) {
                vn()(null != t.activity, "received null message activity");
                if (n.id === At.default.getId()) return !1;
                var r, o, i = Gt.Z.getGame();
                if (null == i) return !1;
                switch (t.activity.type) {
                    case ie.mFx.JOIN:
                        if (null == (r = $n.Z.getApplicationActivity(n.id, i.id)) || null == r.party || r.party.id !== t.activity.party_id) return !1;
                        o = function(e, t, n, r, o) {
                            if (null == t.activity) return null;
                            var i = t.activity.type,
                                a = o.session_id;
                            if (null == a) return null;
                            var c = (0,
                                    mn.Xi)(e, t, n),
                                l = c.icon,
                                s = c.title,
                                u = c.body,
                                f = _n(Qe.n0.ActivityInvite, {
                                    notif_type: Qe.n0.ActivityInvite,
                                    notif_user_id: n.id,
                                    message_id: t.id,
                                    message_type: t.type,
                                    guild_id: e.guild_id,
                                    channel_id: e.id,
                                    channel_type: e.type,
                                    activity_type: i,
                                    activity_name: o.name
                                }),
                                d = f.trackView,
                                p = f.trackClick;
                            return {
                                colorScheme: Q.ColorSchemes.PRIMARY,
                                icon: l,
                                title: s,
                                body: u,
                                hint: function(e) {
                                    return X(0, wn(), A.Z.Messages.OVERLAY_UNLOCK_TO_JOIN)
                                },
                                onNotificationShow: function() {
                                    d()
                                },
                                confirmText: A.Z.Messages.JOIN,
                                onConfirmClick: function(o, i) {
                                    On.Z.join({
                                        userId: n.id,
                                        sessionId: a,
                                        applicationId: r.id,
                                        channelId: e.id,
                                        messageId: t.id
                                    });
                                    j.Z.updateNotificationStatus(i);
                                    p("join")
                                },
                                onDismissClick: function() {
                                    p("dismiss")
                                }
                            }
                        }(e, t, n, i, r);
                        break;
                    case ie.mFx.JOIN_REQUEST:
                        if (null == (r = er.Z.getApplicationActivity(i.id)) || null == r.party || r.party.id !== t.activity.party_id) return !1;
                        o = function(e, t, n, r) {
                            var o = t.username,
                                i = A.Z.Messages.USER_ACTIVITY_INVITE_REQUEST_REQUESTED.format({
                                    username: "",
                                    game: n.name
                                }),
                                a = t.getAvatarURL(e.guild_id, 80),
                                c = _n(Qe.n0.ActivityInvite, {
                                    notif_type: Qe.n0.ActivityInvite,
                                    notif_user_id: t.id,
                                    activity_type: ie.mFx.JOIN_REQUEST,
                                    activity_name: n.name
                                }),
                                l = c.trackView,
                                s = c.trackClick;
                            return {
                                colorScheme: Q.ColorSchemes.PRIMARY,
                                icon: a,
                                title: o,
                                body: i,
                                hint: function(e) {
                                    return X(0, wn(), A.Z.Messages.OVERLAY_UNLOCK_TO_ANSWER)
                                },
                                confirmText: A.Z.Messages.USER_ACTIVITY_RESPOND_YEAH,
                                cancelText: A.Z.Messages.USER_ACTIVITY_RESPOND_NOPE,
                                onNotificationShow: function() {
                                    l()
                                },
                                onConfirmClick: function(t, n) {
                                    Bn.Z.sendActivityInvite({
                                        channelId: e.id,
                                        type: ie.mFx.JOIN,
                                        activity: r,
                                        location: Yt.Z.isInstanceUILocked() ? ie.Sbl.LOCKED_OVERLAY : ie.Sbl.UNLOCKED_OVERLAY
                                    });
                                    s("join");
                                    j.Z.updateNotificationStatus(n)
                                },
                                onCancelClick: function(t, n) {
                                    (0, Gn.In)(e.id, !0, !0);
                                    j.Z.updateNotificationStatus(n);
                                    s("decline")
                                },
                                onDismissClick: function() {
                                    s("dismiss")
                                }
                            }
                        }(e, n, i, r)
                }
                if (null == o) return !1;
                var a = Er(o, {
                    priority: dr.URGENT,
                    expirationExternallyManaged: !0,
                    channelId: e.id
                });
                null != a && gr(a, !1, 3e4);
                return !0
            }

            function wr(e) {
                var t = e.channelId,
                    n = e.ringing,
                    r = Sr(t);
                if (!n.includes(At.default.getId())) return Or(r);
                if (null != r) return !1;
                var o = Mt.Z.getChannel(t);
                if (null == o || !o.isPrivate()) return !1;
                if (er.Z.getStatus() === ie.Skl.DND) return !1;
                var i = vr.find((function(e) {
                    return e.type === fr.TEXT && e.channelId === t && e.messageType === ie.uaV.CALL
                }));
                null != i && Or(i.id);
                Er(function(e) {
                    var t = (0, Ln.F6)(e, tn.default, Vn.Z),
                        n = A.Z.Messages.OVERLAY_NOTIFICATION_INCOMING_CALL,
                        r = (0, Dn.x)(e),
                        o = _n(Qe.n0.IncomingCall, {
                            notif_type: Qe.n0.IncomingCall,
                            notif_user_id: 1 === e.recipients.length ? e.recipients[0] : null,
                            guild_id: e.guild_id,
                            channel_id: e.id,
                            channel_type: e.type
                        }),
                        i = o.trackView,
                        a = o.trackClick;
                    return {
                        colorScheme: Q.ColorSchemes.PRIMARY,
                        icon: r,
                        title: t,
                        body: n,
                        hint: function(e) {
                            return X(0, wn(), A.Z.Messages.OVERLAY_UNLOCK_TO_ANSWER)
                        },
                        confirmText: A.Z.Messages.JOIN_CALL,
                        cancelText: A.Z.Messages.DECLINE,
                        onNotificationShow: function() {
                            i()
                        },
                        onConfirmClick: function() {
                            j.Z.callPrivateChannel(e.id);
                            a("join");
                            j.Z.track(ie.rMx.VOICE_CHANNEL_SELECTED, {
                                location: "Overlay Notificaiton",
                                guild_id: null,
                                channel_id: e.id,
                                video_enabled: !1
                            })
                        },
                        onCancelClick: function() {
                            kn.Z.stopRinging(e.id);
                            a("decline")
                        },
                        onDismissClick: function() {
                            a("dismiss")
                        }
                    }
                }(o), {
                    priority: dr.HIGH,
                    expirationExternallyManaged: !0,
                    type: fr.INCOMING_CALL,
                    channelId: o.id
                })
            }
            var jr = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && sr(e, t)
                }(n, e);
                var t = hr(n);

                function n() {
                    rr(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(Mt.Z, tn.default)
                };
                r.getNotifications = function() {
                    return vr
                };
                return n
            }(i.ZP.Store);
            jr.displayName = "OverlayNotificationsStore";
            const Ir = new jr(bn.Z, __OVERLAY__ ? {
                OVERLAY_UPDATE_NOTIFICATION_STATUS: function(e) {
                    Or(e.notificationId, e.status)
                },
                OVERLAY_MOUNTED: function(e) {
                    var t = br(e.nudge);
                    null != t && Er(t, {
                        priority: dr.URGENT,
                        duration: 8e3
                    })
                },
                OVERLAY_SET_INPUT_LOCKED: function(e) {
                    if (e.locked) return !1;
                    vr = vr.map((function(e) {
                        if (e.status === ie._1z.ACTIVE) {
                            clearTimeout(e.timerId);
                            return cr(ar({}, e), {
                                timerId: gr(e.id, e.expirationExternallyManaged)
                            })
                        }
                        return e
                    }))
                },
                MESSAGE_CREATE: function(e) {
                    var t, n, o = e.channelId,
                        i = e.message,
                        a = Mt.Z.getChannel(o),
                        c = tn.default.getUser(i.author.id);
                    if (null == a || null == c) return !1;
                    if ((null === (t = i.activity) || void 0 === t ? void 0 : t.type) === ie.mFx.JOIN || (null === (n = i.activity) || void 0 === n ? void 0 : n.type) === ie.mFx.JOIN_REQUEST) {
                        if (!(0, mn.eF)(i, o, !0, !0)) return !1;
                        var l = _r(a, i, c);
                        if (!1 !== l) return l
                    }
                    if ((!Yt.Z.isInstanceUILocked() || Yt.Z.isPinned(ie.Odu.TEXT)) && o === Vt.Z.getChannelId()) return !1;
                    if (Yt.Z.getTextChatNotificationMode() === ie.Ypu.DISABLED || tr.Z.disableNotifications || !(0, mn.eF)(i, o)) return !1;
                    Er(function(e, t, n, o) {
                        var i = (0, mn.Xi)(e, t, n),
                            a = i.icon,
                            c = i.title,
                            l = i.body,
                            s = _n(Qe.n0.TextChat, {
                                notif_type: Qe.n0.TextChat,
                                notif_user_id: t.author.id,
                                message_id: t.id,
                                message_type: t.type,
                                guild_id: e.guild_id,
                                channel_id: e.id,
                                channel_type: e.type
                            }),
                            u = s.trackView,
                            f = s.trackClick;
                        return {
                            colorScheme: H.PRIMARY,
                            icon: a,
                            title: c,
                            body: l,
                            renderFooter: function(e) {
                                return e ? (0, r.jsx)("div", {
                                    style: {
                                        textAlign: "center"
                                    },
                                    children: A.Z.Messages.OVERLAY_CLICK_TO_JUMP_TO_CHANNEL
                                }) : null
                            },
                            maxBodyLines: 2,
                            onNotificationShow: function() {
                                o && (0, zn.GN)(Un.Ay, Un.yk);
                                u()
                            },
                            onNotificationClick: function() {
                                (0, Z.uL)(ie.Z5c.CHANNEL(e.guild_id, e.id));
                                f("jump");
                                Yt.Z.isInstanceUILocked() && j.Z.setInstanceLocked(!1)
                            },
                            onDismissClick: function() {
                                f("dismiss")
                            }
                        }
                    }(a, i, c, !qn.Z.isSoundDisabled(Un.Ay)), {
                        type: fr.TEXT,
                        channelId: a.id,
                        messageType: i.type
                    })
                },
                CHANNEL_SELECT: function(e) {
                    var t = e.channelId;
                    return null != t && mr(t)
                },
                MESSAGE_ACK: function(e) {
                    return mr(e.channelId)
                },
                CALL_CREATE: wr,
                CALL_UPDATE: wr,
                CALL_DELETE: function(e) {
                    Or(Sr(e.channelId))
                },
                ACTIVITY_USER_ACTION: function(e) {
                    var t, n = e.actionType,
                        r = e.user,
                        o = e.applicationId,
                        i = Gt.Z.getGame();
                    if (null == i || i.id !== o) return !1;
                    if (n === ie.mFx.JOIN) t = In(r, i);
                    if (null == t) return !1;
                    Er(t, {
                        priority: dr.URGENT,
                        type: fr.GENERIC
                    })
                },
                CLIPS_SAVE_CLIP: function() {
                    Er((e = _n(Qe.n0.ClipsNotification, {
                        notif_type: Qe.n0.ClipsNotification
                    }), t = e.trackView, n = e.trackClick, {
                        colorScheme: H.PRIMARY,
                        title: A.Z.Messages.CLIPS_NOTIFICATION_TITLE.format({
                            duration: (0, Jn.A)(Qn.Z.getSettings().clipsLength / 1e3, !0)
                        }),
                        icon: (0, r.jsx)(Xn.Z, {}),
                        onNotificationShow: function() {
                            t()
                        },
                        onDismissClick: function() {
                            n("dismiss")
                        }
                    }));
                    var e, t, n
                },
                STREAM_START: function(e) {
                    var t = function() {
                        var e = _n(Qe.n0.ClipsReminderNotification, {
                                notif_type: Qe.n0.ClipsReminderNotification
                            }),
                            t = e.trackView,
                            n = e.trackClick,
                            o = zt.Z.getKeybindForAction(ie.kg4.SAVE_CLIP);
                        if (null == o) return null;
                        var i = Ft.BB(o.shortcut, !0);
                        return {
                            colorScheme: H.PRIMARY,
                            title: A.Z.Messages.CLIPS_REMINDER_NOTIFICATION_TITLE.format({
                                keybind: i,
                                keybindHook: function() {
                                    return (0, r.jsx)("span", {
                                        style: {
                                            display: "inline-block"
                                        },
                                        children: (0, r.jsx)(a.KeyCombo, {
                                            shortcut: i
                                        })
                                    })
                                }
                            }),
                            icon: (0, r.jsx)(Xn.Z, {}),
                            onNotificationShow: function() {
                                t()
                            },
                            onDismissClick: function() {
                                n("dismiss")
                            }
                        }
                    }();
                    null != t && Er(t)
                }
            } : {});
            var Cr = n(853158),
                Zr = n(586865),
                Pr = n.n(Zr);

            function Tr(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function xr(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Nr(e) {
                Nr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Nr(e)
            }

            function Rr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        xr(e, t, n[t])
                    }))
                }
                return e
            }

            function Ar(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function Mr(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function kr(e, t) {
                return !t || "object" !== Lr(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Dr(e, t) {
                Dr = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Dr(e, t)
            }
            var Lr = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Vr(e) {
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
                    var n, r = Nr(e);
                    if (t) {
                        var o = Nr(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return kr(this, n)
                }
            }
            var Br = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Dr(e, t)
                }(n, e);
                var t = Vr(n);

                function n() {
                    Tr(this, n);
                    var e;
                    (e = t.apply(this, arguments)).translateX = new Cr.Z.Value(0);
                    e.translateY = new Cr.Z.Value(0);
                    e.scale = new Cr.Z.Value(1);
                    e.opacity = new Cr.Z.Value(1);
                    e.state = {
                        animatedIn: !1
                    };
                    e.handleNotificationShow = function() {
                        var t = e.props.notification,
                            n = t.id;
                        (0, t.props.onNotificationShow)(n)
                    };
                    e.handleDismissClick = function(t) {
                        var n = e.props.notification,
                            r = n.id,
                            o = n.props.onDismissClick;
                        j.Z.updateNotificationStatus(r);
                        null != o && o(t, r)
                    };
                    e.handleNotificationClick = function(t) {
                        var n = e.props.notification,
                            r = n.id,
                            o = n.props.onNotificationClick;
                        null != o && o(t, r)
                    };
                    e.handleConfirmClick = function(t) {
                        var n = e.props.notification,
                            r = n.id,
                            o = n.props.onConfirmClick;
                        null != o && o(t, r)
                    };
                    e.handleCancelClick = function(t) {
                        var n = e.props.notification,
                            r = n.id,
                            o = n.props.onCancelClick;
                        null != o && o(t, r)
                    };
                    e.handleAnimationEnd = function() {
                        e.state.animatedIn || e.setState({
                            animatedIn: !0
                        })
                    };
                    return e
                }
                var o = n.prototype;
                o.componentWillAppear = function(e) {
                    var t = this.props.index;
                    e();
                    this.animateTo(t)
                };
                o.componentWillEnter = function(e) {
                    var t = this.props.index;
                    e();
                    this.animateTo(t)
                };
                o.componentWillLeave = function(e) {
                    var t = this.props.index;
                    this.animateTo(t, e)
                };
                o.componentDidUpdate = function(e) {
                    var t = this.props.index;
                    e.index !== t && this.animateTo(t)
                };
                o.animateTo = function(e, t) {
                    var n, r, o, i, a = this,
                        c = a.opacity,
                        l = a.scale,
                        s = a.translateX,
                        u = a.translateY;
                    switch (e) {
                        case 0:
                            r = 0;
                            o = 1;
                            i = 1;
                            break;
                        case 1:
                            r = .3;
                            o = .6;
                            i = .98;
                            break;
                        case 2:
                            r = .6;
                            o = .3;
                            i = .95;
                            break;
                        default:
                            r = .6;
                            o = 0;
                            i = .93
                    }
                    if (null != t) {
                        0 === e ? i = 1.1 : r = 1.3;
                        o = 0;
                        n = t
                    } else n = this.handleAnimationEnd;
                    s.setValue(1);
                    u.setValue(r);
                    l.setValue(i);
                    c.setValue(o);
                    n()
                };
                o.getStyle = function() {
                    var e, t, n, r, o, i = this,
                        a = i.opacity,
                        c = i.scale,
                        l = i.translateX,
                        s = i.translateY,
                        u = i.props,
                        f = u.position,
                        d = u.zIndex;
                    switch (f) {
                        case ie._vf.TOP_LEFT:
                        case ie._vf.BOTTOM_LEFT:
                            e = "-100%";
                            t = 0;
                            break;
                        default:
                            n = 0;
                            e = "100%"
                    }
                    switch (f) {
                        case ie._vf.BOTTOM_LEFT:
                        case ie._vf.BOTTOM_RIGHT:
                            r = 0;
                            break;
                        default:
                            o = 0
                    }
                    return {
                        left: t,
                        right: n,
                        bottom: r,
                        top: o,
                        zIndex: d,
                        opacity: a,
                        transform: [{
                            translateX: l.interpolate({
                                inputRange: [0, 1],
                                outputRange: [e, "0%"]
                            })
                        }, {
                            translateY: s.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0px", "20px"]
                            })
                        }, {
                            scale: c
                        }]
                    }
                };
                o.render = function() {
                    var e = this,
                        t = e.props,
                        n = t.locked,
                        o = t.index,
                        i = t.notification.props,
                        a = (i.onNotificationShow, i.onDismissClick,
                            i.onNotificationClick),
                        c = i.onConfirmClick,
                        l = i.onCancelClick,
                        s = e.state.animatedIn,
                        u = Mr(e.props.notification.props, ["onNotificationShow", "onDismissClick", "onNotificationClick", "onConfirmClick", "onCancelClick"]),
                        f = (0, r.jsx)(Cr.Z.div, {
                            className: Pr().animationContainer,
                            style: this.getStyle(),
                            children: (0, r.jsx)(Q, Ar(Rr({}, u), {
                                onNotificationShow: s && 0 === o ? this.handleNotificationShow : null,
                                onDismissClick: this.handleDismissClick,
                                onNotificationClick: null != a ? this.handleNotificationClick : null,
                                onConfirmClick: null != c ? this.handleConfirmClick : null,
                                onCancelClick: null != l ? this.handleCancelClick : null,
                                expand: !n && 0 === o,
                                disabled: 0 !== o
                            }))
                        });
                    return 0 === o ? (0, r.jsx)(Je, {
                        observeInterval: 200,
                        children: f
                    }) : f
                };
                return n
            }(o.Component);
            const Gr = Br;
            var Ur = n(347371),
                zr = n.n(Ur);

            function Yr(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Hr(e) {
                Hr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Hr(e)
            }

            function Wr(e, t) {
                return !t || "object" !== Kr(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Fr(e, t) {
                Fr = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Fr(e, t)
            }
            var Kr = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Xr(e) {
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
                    var n, r = Hr(e);
                    if (t) {
                        var o = Hr(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Wr(this, n)
                }
            }
            var Jr = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Fr(e, t)
                }(n, e);
                var t = Xr(n);

                function n() {
                    Yr(this, n);
                    return t.apply(this, arguments)
                }
                n.prototype.render = function() {
                    var e = this.props,
                        t = e.keybind,
                        n = e.notifications,
                        o = e.position,
                        i = e.locked;
                    if (o === ie._vf.DISABLED) return null;
                    var a = -1;
                    return (0, r.jsx)(hn.Z, {
                        component: "div",
                        className: O()(zr().container, zr()[o]),
                        children: n.map((function(e) {
                            if (i && e.status === ie._1z.TIMED_OUT) return null;
                            a += 1;
                            return (0, r.jsx)(Gr, {
                                index: a,
                                zIndex: 100 - a,
                                position: o,
                                notification: e,
                                keybind: t,
                                locked: i
                            }, e.id)
                        }))
                    })
                };
                return n
            }(o.Component);
            const Qr = i.ZP.connectStores([Ir, Yt.Z], (function() {
                return {
                    notifications: Ir.getNotifications(),
                    position: Yt.Z.getNotificationPositionMode()
                }
            }))(Jr);
            var qr = n(477101);

            function $r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function eo(e) {
                eo = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return eo(e)
            }

            function to(e, t) {
                return !t || "object" !== ro(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function no(e, t) {
                no = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return no(e, t)
            }
            var ro = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function oo(e) {
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
                    var n, r = eo(e);
                    if (t) {
                        var o = eo(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return to(this, n)
                }
            }
            var io = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && no(e, t)
                }(n, e);
                var t = oo(n);

                function n() {
                    $r(this, n);
                    return t.apply(this, arguments)
                }
                n.prototype.render = function() {
                    var e = this.props,
                        t = e.layout,
                        n = e.layoutSize,
                        o = e.className,
                        i = e.renderWidget;
                    return null != t ? (0, r.jsx)("div", {
                        className: o,
                        style: {
                            width: n.width,
                            height: n.height
                        },
                        children: t.widgets.map((function(e) {
                            return i(e, n)
                        }))
                    }) : null
                };
                return n
            }(o.PureComponent);
            const ao = io;
            var co = n(117112),
                lo = n(66121),
                so = n(843116),
                uo = n.n(so);

            function fo(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function po(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ho(e) {
                ho = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return ho(e)
            }

            function yo(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        po(e, t, n[t])
                    }))
                }
                return e
            }

            function vo(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function go(e, t) {
                return !t || "object" !== Oo(t) && "function" != typeof t ? fo(e) : t
            }

            function bo(e, t) {
                bo = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return bo(e, t)
            }
            var Oo = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function mo(e) {
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
                    var n, r = ho(e);
                    if (t) {
                        var o = ho(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return go(this, n)
                }
            }
            var So;
            ! function(e) {
                e.MOVE = "MOVE";
                e.RESIZE_NORTH = "RESIZE_NORTH";
                e.RESIZE_WEST = "RESIZE_WEST";
                e.RESIZE_EAST = "RESIZE_EAST";
                e.RESIZE_SOUTH = "RESIZE_SOUTH";
                e.RESIZE_NORTH_WEST = "RESIZE_NORTH_WEST";
                e.RESIZE_NORTH_EAST = "RESIZE_NORTH_EAST";
                e.RESIZE_SOUTH_WEST = "RESIZE_SOUTH_WEST";
                e.RESIZE_SOUTH_EAST = "RESIZE_SOUTH_EAST"
            }(So || (So = {}));
            var Eo = new Set([So.RESIZE_NORTH, So.RESIZE_WEST, So.RESIZE_EAST, So.RESIZE_SOUTH, So.RESIZE_NORTH_WEST, So.RESIZE_NORTH_EAST, So.RESIZE_SOUTH_WEST, So.RESIZE_SOUTH_EAST]);

            function _o(e, t, n) {
                var r = e.width,
                    o = e.height;
                return {
                    width: "auto" === r ? "auto" : Math.max(t, r),
                    height: "auto" === o ? "auto" : Math.max(n, o)
                }
            }

            function wo(e) {
                var t = e.top,
                    n = e.left,
                    r = e.bottom,
                    o = e.right;
                null == n && null == o && (n = 0);
                null != n && null != o && (o = null);
                null == t && null == r && (t = 0);
                null != t && null != r && (r = null);
                return {
                    top: t,
                    left: n,
                    bottom: r,
                    right: o
                }
            }

            function jo(e) {
                return "auto" === e || null == e ? "auto" : "".concat(e, "px")
            }

            function Io(e, t) {
                return {
                    width: "auto" === t.width ? null != e ? e.clientWidth : 0 : t.width,
                    height: "auto" === t.height ? null != e ? e.clientHeight : 0 : t.height
                }
            }

            function Co(e, t) {
                var n = t.top,
                    r = t.left,
                    o = t.bottom,
                    i = t.right;
                switch (e) {
                    case So.RESIZE_EAST:
                    case So.RESIZE_NORTH_EAST:
                    case So.RESIZE_NORTH:
                        return {
                            bottom: o, left: r, right: null, top: null
                        };
                    case So.RESIZE_WEST:
                    case So.RESIZE_NORTH_WEST:
                        return {
                            bottom: o, right: i, left: null, top: null
                        };
                    case So.RESIZE_SOUTH_EAST:
                        return {
                            top: n, left: r, bottom: null, right: null
                        };
                    case So.RESIZE_SOUTH:
                    case So.RESIZE_SOUTH_WEST:
                        return {
                            top: n, right: i, bottom: null, left: null
                        };
                    default:
                        throw new Error("getOrientedCoords: Invalid orientation: ".concat(e))
                }
            }
            var Zo = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && bo(e, t)
                }(n, e);
                var t = mo(n);

                function n(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = t.call(this, e)).ref = o.createRef();
                    r.dragState = {
                        startX: 0,
                        startY: 0,
                        offsetX: 0,
                        offsetY: 0,
                        offsetWidth: 0,
                        offsetHeight: 0
                    };
                    r.state = {
                        operation: null,
                        operationStarted: !1
                    };
                    r.handleMouseDown = function(e) {
                        e.stopPropagation();
                        var t = r.props.dragAnywhere;
                        null != r.ref.current && e.button === ie.AeJ.PRIMARY && t && r.handleOperationStart(So.MOVE, e.clientX, e.clientY)
                    };
                    r.handleMouseMove = function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        var t = e.clientX,
                            n = e.clientY,
                            o = fo(r),
                            i = o.dragState,
                            a = i.startX,
                            c = i.startY,
                            l = o.state,
                            s = l.operation,
                            u = l.operationStarted;
                        if (!(null == s || !u && (f = a, d = c, p = t, h = n, Math.pow(f - p, 2) + Math.pow(d - h, 2)) < 3)) {
                            var f, d, p, h;
                            s === So.MOVE ? r.handleDragMove(t, n) : Eo.has(s) && r.handleResizeMove(t, n)
                        }
                    };
                    r.handleOperationStart = function(e, t, n) {
                        var o = fo(r),
                            i = o.ref.current,
                            a = o.props,
                            c = a.active,
                            l = a.container,
                            s = l.maxX,
                            u = l.maxY;
                        if (null != i && c) {
                            var f = Io(i, r.size),
                                d = f.width,
                                p = f.height,
                                h = (0, lo.PY)(r.anchor, s, u, d, p);
                            if (e === So.MOVE) {
                                var y = function(e) {
                                        var t = e.top;
                                        return {
                                            x: e.left,
                                            y: t
                                        }
                                    }(h),
                                    v = y.x,
                                    g = y.y;
                                r.dragState = vo(yo({}, r.dragState), {
                                    startX: t,
                                    startY: n,
                                    offsetX: t - v,
                                    offsetY: n - g
                                })
                            } else {
                                var b = Co(e, h);
                                r.setDOMPositions(b);
                                r.dragState = vo(yo({}, r.dragState), {
                                    startX: t,
                                    startY: n,
                                    offsetWidth: d,
                                    offsetHeight: p
                                })
                            }
                            r.setState({
                                operation: e,
                                operationStarted: !1
                            }, (function() {
                                window.addEventListener("mousemove", r.handleMouseMove);
                                window.addEventListener("mouseup", r.handleOperationEnd)
                            }))
                        }
                    };
                    r.handleOperationEnd = function() {
                        var e = r.state,
                            t = e.operation,
                            n = e.operationStarted,
                            o = r.props.onDragEnd;
                        window.removeEventListener("mousemove", r.handleMouseMove);
                        window.removeEventListener("mouseup", r.handleOperationEnd);
                        var i = n ? function() {
                            var e = r.props,
                                n = e.onUpdate,
                                o = e.id;
                            n(t, o, r.anchor, r.size, Io(r.ref.current, r.size))
                        } : void 0;
                        if (n) {
                            var a = r.props.container,
                                c = a.maxX,
                                l = a.maxY,
                                s = Io(r.ref.current, r.size),
                                u = s.width,
                                f = s.height,
                                d = (0, lo.PY)(r.anchor, c, l, u, f),
                                p = (0, lo.R)(d);
                            r.setDOMPositions(p);
                            r.setDOMSize({
                                width: u,
                                height: f
                            });
                            null != o && o()
                        }
                        r.setState({
                            operation: null,
                            operationStarted: !1
                        }, i)
                    };
                    r.anchor = wo(e.anchor);
                    r.size = _o(e.size, e.minSize.width, e.minSize.height);
                    return r
                }
                var i = n.prototype;
                i.shouldComponentUpdate = function(e, t) {
                    return !((0, Ne.Z)(t, this.state) && (0, Ne.Z)(e, this.props, ["anchor", "size", "minSize", "container"]) && (0, Ne.Z)(e.anchor, this.props.anchor) && (0, Ne.Z)(e.size, this.props.size) && (0, Ne.Z)(e.minSize, this.props.minSize) && (0, Ne.Z)(e.container, this.props.container))
                };
                i.componentDidUpdate = function(e, t) {
                    if (null == t.operation) {
                        (0, Ne.Z)(this.props.anchor, e.anchor) || this.setDOMPositions(wo(this.props.anchor));
                        (0, Ne.Z)(this.props.size, e.size) || this.setDOMSize(_o(this.props.size, this.props.minSize.width, this.props.minSize.height))
                    }
                };
                i.componentWillUnmount = function() {
                    this.handleOperationEnd()
                };
                i.handleResizeMouseDown = function(e, t) {
                    var n = e.clientX,
                        r = e.clientY;
                    e.stopPropagation();
                    this.handleOperationStart(t, n, r)
                };
                i.handleDragMove = function(e, t) {
                    var n = this,
                        r = n.ref.current,
                        o = n.props,
                        i = o.id,
                        a = o.container,
                        c = a.maxX,
                        l = a.maxY,
                        s = a.minX,
                        u = a.minY,
                        f = o.onDragStart,
                        d = o.onDrag,
                        p = o.snapOrientation,
                        h = n.dragState,
                        y = h.offsetX,
                        v = h.offsetY,
                        g = n.state.operationStarted;
                    if (null == r) return null;
                    e = Math.max(Math.min(c, e), s);
                    t = Math.max(Math.min(l, t), u);
                    var b = Io(r, this.size),
                        O = b.width,
                        m = b.height,
                        S = t - v,
                        E = e - y,
                        _ = (0, lo.ou)((0, lo.PY)({
                            top: S,
                            left: E,
                            bottom: null,
                            right: null
                        }, c, l, O, m)),
                        w = p ? (0, lo.R)(_) : Co(So.RESIZE_SOUTH_EAST, _);
                    this.setDOMPositions(w);
                    if (!g) {
                        null != f && f();
                        this.setState({
                            operationStarted: !0
                        })
                    }
                    null != d && d(i, So.MOVE, this.anchor, this.size)
                };
                i.handleResizeMove = function(e, t) {
                    var n = this.props,
                        r = n.id,
                        o = n.minSize,
                        i = n.container,
                        a = i.maxX,
                        c = i.maxY,
                        l = i.minX,
                        s = i.minY,
                        u = n.onDragStart,
                        f = n.onDrag,
                        d = this.state,
                        p = d.operation,
                        h = d.operationStarted,
                        y = this.dragState,
                        v = y.startX,
                        g = y.startY,
                        b = y.offsetWidth,
                        O = y.offsetHeight,
                        m = 0,
                        S = 0;
                    if (null != p) {
                        e = Math.max(Math.min(a, e), l);
                        t = Math.max(Math.min(c, t), s);
                        switch (p) {
                            case So.RESIZE_EAST:
                            case So.RESIZE_SOUTH_EAST:
                            case So.RESIZE_NORTH_EAST:
                                m -= v - e;
                                break;
                            case So.RESIZE_WEST:
                            case So.RESIZE_SOUTH_WEST:
                            case So.RESIZE_NORTH_WEST:
                                m += v - e
                        }
                        switch (p) {
                            case So.RESIZE_SOUTH:
                            case So.RESIZE_SOUTH_WEST:
                            case So.RESIZE_SOUTH_EAST:
                                S -= g - t;
                                break;
                            case So.RESIZE_NORTH:
                            case So.RESIZE_NORTH_WEST:
                            case So.RESIZE_NORTH_EAST:
                                S += g - t
                        }
                        b = Math.max(b + m, o.width);
                        O = Math.max(O + S, o.height);
                        this.setDOMSize({
                            width: b,
                            height: O
                        });
                        if (!h) {
                            null != u && u();
                            this.setState({
                                operationStarted: !0
                            })
                        }
                        null != f && f(r, p, this.anchor, this.size)
                    }
                };
                i.setDOMPositions = function(e) {
                    var t = e.top,
                        n = e.left,
                        r = e.bottom,
                        o = e.right,
                        i = this.ref.current;
                    this.anchor = {
                        top: t,
                        left: n,
                        bottom: r,
                        right: o
                    };
                    if (null != i) {
                        i.style.top = jo(t);
                        i.style.bottom = jo(r);
                        i.style.left = jo(n);
                        i.style.right = jo(o)
                    }
                };
                i.setDOMSize = function(e) {
                    var t = e.width,
                        n = e.height,
                        r = this.ref.current;
                    t = "auto" === this.size.width ? "auto" : t;
                    n = "auto" === this.size.height ? "auto" : n;
                    this.size = {
                        width: t,
                        height: n
                    };
                    if (null != r) {
                        r.style.width = jo(t);
                        r.style.height = jo(n)
                    }
                };
                i.renderResizeHandles = function() {
                    var e = this,
                        t = this.props,
                        n = t.resizeY,
                        i = t.resizeX,
                        a = t.active;
                    return (0, r.jsxs)(o.Fragment, {
                        children: [n ? (0, r.jsxs)(o.Fragment, {
                            children: [(0, r.jsx)("div", {
                                className: O()(uo().resizeNorth, po({}, uo().resizeNSCursor, a)),
                                onMouseDown: function(t) {
                                    return e.handleResizeMouseDown(t, So.RESIZE_NORTH)
                                }
                            }), (0, r.jsx)("div", {
                                className: O()(uo().resizeSouth, po({}, uo().resizeNSCursor, a)),
                                onMouseDown: function(t) {
                                    return e.handleResizeMouseDown(t, So.RESIZE_SOUTH)
                                }
                            })]
                        }) : null, i ? (0, r.jsxs)(o.Fragment, {
                            children: [(0, r.jsx)("div", {
                                className: O()(uo().resizeEast, po({}, uo().resizeEWCursor, a)),
                                onMouseDown: function(t) {
                                    return e.handleResizeMouseDown(t, So.RESIZE_EAST)
                                }
                            }), (0, r.jsx)("div", {
                                className: O()(uo().resizeWest, po({}, uo().resizeEWCursor, a)),
                                onMouseDown: function(t) {
                                    return e.handleResizeMouseDown(t, So.RESIZE_WEST)
                                }
                            })]
                        }) : null, i && n ? (0, r.jsxs)(o.Fragment, {
                            children: [(0, r.jsx)("div", {
                                className: O()(uo().resizeNorthWest, po({}, uo().resizeNWSECursor, a)),
                                onMouseDown: function(t) {
                                    return e.handleResizeMouseDown(t, So.RESIZE_NORTH_WEST)
                                }
                            }), (0, r.jsx)("div", {
                                className: O()(uo().resizeNorthEast, po({}, uo().resizeNESWCursor, a)),
                                onMouseDown: function(t) {
                                    return e.handleResizeMouseDown(t, So.RESIZE_NORTH_EAST)
                                }
                            }), (0, r.jsx)("div", {
                                className: O()(uo().resizeSouthWest, po({}, uo().resizeNESWCursor, a)),
                                onMouseDown: function(t) {
                                    return e.handleResizeMouseDown(t, So.RESIZE_SOUTH_WEST)
                                }
                            }), (0, r.jsx)("div", {
                                className: O()(uo().resizeSouthEast, po({}, uo().resizeNWSECursor, a)),
                                onMouseDown: function(t) {
                                    return e.handleResizeMouseDown(t, So.RESIZE_SOUTH_EAST)
                                }
                            })]
                        }) : null]
                    })
                };
                i.render = function() {
                    var e, t = this,
                        n = t.props,
                        o = n.children,
                        i = n.hidden,
                        a = n.onClick,
                        c = n.id,
                        l = n.style,
                        s = t.size,
                        u = t.anchor,
                        f = t.state,
                        d = f.operation,
                        p = f.operationStarted;
                    return (0, r.jsxs)("div", {
                        ref: this.ref,
                        style: yo({}, u, s, l, null != d ? {
                            zIndex: 1e3
                        } : void 0, i ? {
                            visibility: "hidden"
                        } : void 0),
                        className: O()((e = {}, po(e, uo().wrapper, !0), po(e, uo().operation, p), e)),
                        onMouseDown: this.handleMouseDown,
                        onClick: null != a ? function() {
                            return a(c)
                        } : void 0,
                        children: [o(this.handleOperationStart), this.renderResizeHandles()]
                    })
                };
                return n
            }(o.Component);
            Zo.Operations = So;
            Zo.defaultProps = {
                snapOrientation: !0,
                minSize: {
                    width: 0,
                    height: 0
                },
                container: {
                    minX: 0,
                    minY: 0,
                    maxX: 1 / 0,
                    maxY: 1 / 0
                },
                resizeX: !0,
                resizeY: !0,
                hidden: !1,
                dragAnywhere: !0,
                active: !0
            };
            const Po = Zo;
            var To = n(244153),
                xo = n(248088),
                No = n(933954),
                Ro = n(201441),
                Ao = n(439829),
                Mo = n(63054),
                ko = n(846394),
                Do = n(628486),
                Lo = n(968968),
                Vo = n(996077),
                Bo = n(953727),
                Go = n(877475),
                Uo = n(813869),
                zo = n(9430),
                Yo = n(602397),
                Ho = n(466317),
                Wo = n(630395),
                Fo = n(790257),
                Ko = n.n(Fo);

            function Xo(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Jo(e) {
                Jo = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Jo(e)
            }

            function Qo(e, t) {
                return !t || "object" !== ei(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function qo(e, t) {
                qo = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return qo(e, t)
            }
            var $o, ei = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function ti(e) {
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
                    var n, r = Jo(e);
                    if (t) {
                        var o = Jo(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Qo(this, n)
                }
            }! function(e) {
                e.GENERAL = "GENERAL";
                e.VOICE = "VOICE"
            }($o || ($o = {}));

            function ni() {
                var e = Yt.Z.getNotificationPositionMode(),
                    t = e !== ie._vf.DISABLED,
                    n = zt.Z.getOverlayKeybind(),
                    r = zt.Z.getOverlayChatKeybind();
                j.Z.track(ie.rMx.OVERLAY_SETTINGS_UPDATED, {
                    enabled: !0,
                    notifications_enabled: t,
                    notifications_position: t ? e : null,
                    text_notifications_mode: Yt.Z.getTextChatNotificationMode(),
                    text_opacity_slider: Yt.Z.getTextWidgetOpacity(),
                    hotkey: null != n ? (0, Ft.BB)(n.shortcut) : null,
                    text_activation_hotkey: null != r ? (0, Ft.BB)(r.shortcut) : null
                })
            }
            var ri = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && qo(e, t)
                }(n, e);
                var t = ti(n);

                function n() {
                    Xo(this, n);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        selectedSection: $o.GENERAL
                    };
                    e.handleSelectSection = function(t) {
                        e.setState({
                            selectedSection: t
                        })
                    };
                    e.handleToggleTextChatNotifications = function() {
                        var t = ie.Ypu.ENABLED,
                            n = ie.Ypu.DISABLED,
                            r = e.props.textChatNotificationMode === t ? n : t;
                        j.Z.setTextChatNotificationMode(r);
                        ni()
                    };
                    return e
                }
                var i = n.prototype;
                i.componentDidMount = function() {
                    j.Z.track(ie.rMx.SETTINGS_PANE_VIEWED, {
                        settings_type: "overlay",
                        destination_pane: "OVERLAY SETTINGS",
                        origin_pane: null
                    })
                };
                i.handleChangeNotificationPositionMode = function(e, t) {
                    j.Z.setNotificationPositionMode(t);
                    ni()
                };
                i.handleChangeAvatarSizeMode = function(e) {
                    var t = e.value;
                    j.Z.setAvatarSizeMode(t)
                };
                i.handleChangeDisplayNameMode = function(e) {
                    var t = e.value;
                    j.Z.setDisplayNameMode(t)
                };
                i.handleChangeDisplayUserMode = function(e) {
                    var t = e.value;
                    j.Z.setDisplayUserMode(t)
                };
                i.renderHeader = function() {
                    return (0, r.jsxs)(Wt.Z, {
                        direction: Wt.Z.Direction.VERTICAL,
                        grow: 0,
                        shrink: 0,
                        className: Ko().header,
                        children: [(0, r.jsxs)(Wt.Z, {
                            children: [(0, r.jsx)(a.FormTitle, {
                                className: Ko().headerTitle,
                                tag: "h1",
                                children: A.Z.Messages.OVERLAY_SETTINGS_TITLE
                            }), (0, r.jsx)(a.ModalCloseButton, {
                                className: Ko().headerClose,
                                onClick: this.props.onClose
                            })]
                        }), this.renderTabBar()]
                    })
                };
                i.renderTabBar = function() {
                    var e = this.state.selectedSection;
                    return (0, r.jsxs)(a.TabBar, {
                        selectedItem: e,
                        type: "top",
                        className: Ko().tabBar,
                        onItemSelect: this.handleSelectSection,
                        children: [(0, r.jsx)(a.TabBar.Item, {
                            id: $o.GENERAL,
                            className: Ko().tabBarItem,
                            children: A.Z.Messages.OVERLAY_SETTINGS_GENERAL_TAB
                        }), (0, r.jsx)(a.TabBar.Item, {
                            id: $o.VOICE,
                            className: Ko().tabBarItem,
                            children: A.Z.Messages.OVERLAY_SETTINGS_VOICE_TAB
                        })]
                    })
                };
                i.renderBody = function() {
                    var e, t = this.state.selectedSection;
                    switch (t) {
                        case $o.VOICE:
                            e = this.renderVoiceSettings();
                            break;
                        case $o.GENERAL:
                        default:
                            e = this.renderGeneralSettings()
                    }
                    return (0, r.jsx)(a.ModalContent, {
                        className: Ko().content,
                        children: e
                    }, t)
                };
                i.renderGeneralSettings = function() {
                    var e = this.props,
                        t = e.textChatNotificationMode,
                        n = e.notificationPositionMode,
                        i = n !== ie._vf.DISABLED;
                    return (0, r.jsxs)(o.Fragment, {
                        children: [(0, r.jsx)(a.FormItem, {
                            title: A.Z.Messages.FORM_LABEL_NOTIFICATION_POSITION,
                            className: L().marginBottom20,
                            children: (0, r.jsx)(Wo.Z, {
                                position: n,
                                onChange: this.handleChangeNotificationPositionMode
                            })
                        }), (0, r.jsx)(a.FormSwitch, {
                            value: i && t === ie.Ypu.ENABLED,
                            onChange: this.handleToggleTextChatNotifications,
                            disabled: !i,
                            hideBorder: !0,
                            children: A.Z.Messages.FORM_LABEL_OVERLAY_TEXT_CHAT_NOTIFICATIONS
                        })]
                    })
                };
                i.renderVoiceSettings = function() {
                    var e = this.props,
                        t = e.avatarSizeMode,
                        n = e.displayNameMode,
                        i = e.displayUserMode;
                    return (0, r.jsxs)(o.Fragment, {
                        children: [(0, r.jsx)(a.FormItem, {
                            title: A.Z.Messages.FORM_LABEL_AVATAR_SIZE,
                            className: L().marginBottom20,
                            children: (0, r.jsx)(a.RadioGroup, {
                                onChange: this.handleChangeAvatarSizeMode,
                                options: [{
                                    value: ie.ipw.LARGE,
                                    name: A.Z.Messages.AVATAR_SIZE_OPTION_LARGE
                                }, {
                                    value: ie.ipw.SMALL,
                                    name: A.Z.Messages.AVATAR_SIZE_OPTION_SMALL
                                }],
                                value: t,
                                size: a.RadioGroup.Sizes.SMALL
                            })
                        }), (0, r.jsx)(a.FormItem, {
                            title: A.Z.Messages.FORM_LABEL_DISPLAY_NAMES,
                            className: L().marginBottom20,
                            children: (0, r.jsx)(a.RadioGroup, {
                                onChange: this.handleChangeDisplayNameMode,
                                options: [{
                                    value: ie.wC$.ALWAYS,
                                    name: A.Z.Messages.DISPLAY_OPTION_ALWAYS
                                }, {
                                    value: ie.wC$.ONLY_WHILE_SPEAKING,
                                    name: A.Z.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING
                                }, {
                                    value: ie.wC$.NEVER,
                                    name: A.Z.Messages.DISPLAY_OPTION_NEVER
                                }],
                                value: n,
                                size: a.RadioGroup.Sizes.SMALL
                            })
                        }), (0, r.jsx)(a.FormItem, {
                            title: A.Z.Messages.FORM_LABEL_DISPLAY_USERS,
                            className: L().marginBottom20,
                            children: (0, r.jsx)(a.RadioGroup, {
                                onChange: this.handleChangeDisplayUserMode,
                                options: [{
                                    value: ie.OYC.ALWAYS,
                                    name: A.Z.Messages.DISPLAY_OPTION_ALWAYS
                                }, {
                                    value: ie.OYC.ONLY_WHILE_SPEAKING,
                                    name: A.Z.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING
                                }],
                                value: i,
                                size: a.RadioGroup.Sizes.SMALL
                            })
                        })]
                    })
                };
                i.render = function() {
                    return (0, r.jsxs)(a.ModalRoot, {
                        "aria-label": A.Z.Messages.OVERLAY_SETTINGS_TITLE,
                        transitionState: a.ModalTransitionState.ENTERED,
                        children: [this.renderHeader(), this.renderBody()]
                    })
                };
                return n
            }(o.PureComponent);
            const oi = i.ZP.connectStores([Yt.Z], (function() {
                return {
                    avatarSizeMode: Yt.Z.getAvatarSizeMode(),
                    displayNameMode: Yt.Z.getDisplayNameMode(),
                    displayUserMode: Yt.Z.getDisplayUserMode(),
                    notificationPositionMode: Yt.Z.getNotificationPositionMode(),
                    textChatNotificationMode: Yt.Z.getTextChatNotificationMode()
                }
            }))(ri);
            var ii = n(386638),
                ai = n.n(ii);

            function ci(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function li(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            const si = function(e) {
                var t, n = e.title,
                    o = e.header,
                    i = e.children,
                    c = e.renderSettings,
                    l = e.onDragStart;
                t = null != n ? (0, r.jsxs)(Ie.Bar, {
                    className: O()(ai().header, ai().draggableStartArea),
                    onMouseDown: l,
                    children: [(0, r.jsx)(Ie.Content, {
                        className: O()(ai().headerTitle, ai().draggableStartArea),
                        dynamicSize: !0,
                        children: n
                    }), (0, r.jsx)(Ie.Content, {
                        children: (0, r.jsx)(a.Popout, {
                            position: "right",
                            renderPopout: null != c ? c : ie.dG4,
                            autoInvert: !1,
                            children: function(e) {
                                return (0, r.jsx)(Ie.Icon, li(function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                                        }))));
                                        r.forEach((function(t) {
                                            ci(e, t, n[t])
                                        }))
                                    }
                                    return e
                                }({}, e), {
                                    icon: Ho.Z,
                                    label: A.Z.Messages.SETTINGS
                                }))
                            }
                        })
                    })]
                }) : o;
                return (0, r.jsxs)("div", {
                    className: ai().sidebar,
                    children: [t, (0, r.jsx)("div", {
                        className: ai().children,
                        children: i
                    })]
                })
            };
            var ui = n(485911),
                fi = n(329132),
                di = n.n(fi);

            function pi(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function hi(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function yi(e) {
                yi = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return yi(e)
            }

            function vi(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        hi(e, t, n[t])
                    }))
                }
                return e
            }

            function gi(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function bi(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function Oi(e, t) {
                return !t || "object" !== Si(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function mi(e, t) {
                mi = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return mi(e, t)
            }
            var Si = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Ei(e) {
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
                    var n, r = yi(e);
                    if (t) {
                        var o = yi(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Oi(this, n)
                }
            }
            var _i = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && mi(e, t)
                }(n, e);
                var t = Ei(n);

                function n() {
                    pi(this, n);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        controller: new xo.Controller({
                            value: 1,
                            immediate: !0
                        }),
                        renderBanner: !1,
                        bannerVisible: !1,
                        communityInfoVisible: !1
                    };
                    e.handleScroll = function(t) {
                        var n = t.scrollTop;
                        e.setAnimatedValue(n)
                    };
                    return e
                }
                var o = n.prototype;
                o.componentDidMount = function() {
                    var e = this.props.guildId,
                        t = Bo.Z.getGuildDimensions(e).scrollTop;
                    this.setAnimatedValue(null != t ? t : 0)
                };
                o.componentDidUpdate = function(e) {
                    var t = this.props,
                        n = t.guild,
                        r = t.guildId;
                    if (e.guild !== n) {
                        var o = Bo.Z.getGuildDimensions(r).scrollTop;
                        this.setAnimatedValue(null != o ? o : 0)
                    }
                };
                o.renderSettings = function(e) {
                    var t = e.closePopout;
                    return (0, r.jsx)(oi, {
                        onClose: t
                    })
                };
                o.setAnimatedValue = function(e) {
                    var t = this.props.guild,
                        n = null == t ? void 0 : t.hasCommunityInfoSubheader();
                    null == t || null == t.banner && !n || (null != t.banner ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForCommunityInfo(e))
                };
                o.setAnimatedValueForBanner = function(e) {
                    var t = this.state,
                        n = t.renderBanner,
                        r = t.communityInfoVisible,
                        o = t.bannerVisible,
                        i = t.controller;
                    (e >= 54 && o || e < 54 && !o) && (o = !o);
                    (e >= 78 && !n || e < 78 && n) && (n = !n);
                    r = o;
                    n === this.state.renderBanner && o === this.state.bannerVisible && r === this.state.communityInfoVisible || this.setState({
                        renderBanner: n,
                        bannerVisible: o,
                        communityInfoVisible: r
                    });
                    i.update({
                        value: Math.min(1, Math.max(0, 1 - e / 78)),
                        immediate: !0
                    }).start()
                };
                o.setAnimatedValueForCommunityInfo = function(e) {
                    var t = this.state,
                        n = t.communityInfoVisible,
                        r = t.controller;
                    (e >= 20 && n || e < 20 && !n) && this.setState({
                        communityInfoVisible: !n
                    });
                    r.update({
                        value: Math.min(1, Math.max(0, 1 - e / 20)),
                        immediate: !0
                    }).start()
                };
                o.render = function() {
                    var e = this.props,
                        t = e.onDragStart,
                        n = bi(e, ["onDragStart"]),
                        o = n.guild,
                        i = this.state,
                        c = i.controller,
                        l = i.renderBanner,
                        s = i.bannerVisible,
                        u = i.communityInfoVisible,
                        f = o.id === ui._ ? Ao.j : Ao.E;
                    return (0, r.jsxs)(si, {
                        header: (0, r.jsx)(Mo.ZP, {
                            guild: o,
                            controller: c,
                            renderBanner: l,
                            bannerVisible: s,
                            className: di().guildHeader,
                            headerClassName: di().guildHeaderInner,
                            onMouseDown: t,
                            disableBannerAnimation: !1,
                            communityInfoVisible: u,
                            children: (0, r.jsx)(a.Popout, {
                                position: "right",
                                renderPopout: this.renderSettings,
                                children: function(e) {
                                    return (0, r.jsx)(Ie.Icon, vi({
                                        icon: Ho.Z,
                                        label: A.Z.Messages.SETTINGS
                                    }, e))
                                }
                            })
                        }),
                        children: [(0, r.jsx)("div", {
                            className: di().channelList,
                            children: (0, r.jsx)(f, gi(vi({}, n), {
                                guild: o,
                                disableManageChannels: !0,
                                onScroll: null != o && null != o.banner ? this.handleScroll : null
                            }))
                        }), (0, r.jsx)("section", {
                            className: di().panels,
                            "aria-label": A.Z.Messages.ACCOUNT_A11Y_LABEL,
                            children: (0, r.jsx)(ko.Z, {
                                guildId: o.id
                            })
                        })]
                    })
                };
                n.getDerivedStateFromProps = function(e) {
                    var t = e.guild;
                    return null == t || null == t.banner ? {
                        renderBanner: !1,
                        bannerVisible: !1
                    } : null
                };
                return n
            }(o.PureComponent);

            function wi(e) {
                var t, n = e.guildId,
                    o = (0, i.e7)([kt.Z], (function() {
                        return kt.Z.getGuild(n)
                    })),
                    a = (0, i.e7)([Qt.ZP], (function() {
                        return Qt.ZP.getChannels(n)
                    })),
                    c = (0, i.e7)([Go.Z], (function() {
                        return Go.Z.getCategories(n)
                    })),
                    l = (0, i.cj)([zo.Z], (function() {
                        return {
                            mutedChannels: zo.Z.getMutedChannels(n),
                            collapseMuted: zo.Z.isGuildCollapsed(n)
                        }
                    })),
                    s = l.mutedChannels,
                    u = l.collapseMuted,
                    f = (0, i.e7)([Yo.ZP], (function() {
                        return Yo.ZP.getVoiceStates(n)
                    })),
                    d = (0, i.e7)([Vo.Z], (function() {
                        return Vo.Z.getCollapsed()
                    })),
                    p = (0, i.e7)([Bo.Z], (function() {
                        return Bo.Z.getGuildDimensions(n)
                    })).scrollTo,
                    h = (0, Do.Z)((function(e) {
                        return e.channelId
                    })),
                    y = (0, i.e7)([Vt.Z], (function() {
                        return Vt.Z.getVoiceChannelId()
                    })),
                    v = (0, i.e7)([$t.Z], (function() {
                        return $t.Z.getGuildVersion(n)
                    })),
                    g = (0, i.e7)([Lo.Z], (function() {
                        return Lo.Z.version
                    })),
                    b = (0, i.e7)([Uo.Z], (function() {
                        return Uo.Z.getGuildChangeSentinel(n)
                    })),
                    O = (0, No.QN)(null == o ? void 0 : o.id),
                    m = (0,
                        Ro.gM)(null == o ? void 0 : o.id),
                    S = null !== (t = null == o ? void 0 : o.hasFeature(ie.oNc.COMMUNITY)) && void 0 !== t && t;
                return (0, r.jsx)(_i, {
                    guildId: n,
                    guild: o,
                    channels: a,
                    categories: c,
                    mutedChannels: s,
                    scrollToChannel: p,
                    selectedChannelId: h,
                    selectedVoiceChannelId: y,
                    voiceStates: f,
                    collapsedChannels: d,
                    collapseMuted: u,
                    guildReadStateSentinel: b,
                    permissionVersion: v,
                    categoryCollapseVersion: g,
                    embeddedAppsByChannel: O,
                    activeEventsByChannel: m,
                    showNewUnreadsBar: S,
                    optInEnabled: !1
                })
            }
            var ji = n(284952),
                Ii = n(956485),
                Ci = n(47254),
                Zi = n.n(Ci),
                Pi = function() {
                    return (0, Ii.$Z)("DM_SEARCH")
                };

            function Ti() {
                var e = (0, i.e7)([Yt.Z], (function() {
                        return Yt.Z.isUILocked((0, Pe.QF)()) ? "true" : "false"
                    })),
                    t = (0, Do.Z)((function(e) {
                        return e.channelId
                    }));
                return (0, r.jsxs)("div", {
                    className: Zi().privateChannels,
                    children: [(0, r.jsx)("div", {
                        className: Zi().searchBar,
                        children: (0, r.jsx)("button", {
                            type: "button",
                            className: Zi().searchBarComponent,
                            onClick: Pi,
                            children: A.Z.Messages.DM_SEARCH_PLACEHOLDER
                        })
                    }), (0, r.jsx)(ji.Z, {
                        padding: 8,
                        theme: ie.BRd.DARK,
                        version: e,
                        selectedChannelId: t
                    }), (0, r.jsx)("section", {
                        className: Zi().panels,
                        "aria-label": A.Z.Messages.ACCOUNT_A11Y_LABEL,
                        children: (0, r.jsx)(ko.Z, {
                            guildId: null
                        })
                    })]
                })
            }
            const xi = o.memo(Ti);
            var Ni = n(865037),
                Ri = n.n(Ni);

            function Ai(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Mi(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ki(e) {
                ki = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return ki(e)
            }

            function Di(e, t) {
                return !t || "object" !== Vi(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Li(e, t) {
                Li = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Li(e, t)
            }
            var Vi = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Bi(e) {
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
                    var n, r = ki(e);
                    if (t) {
                        var o = ki(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Di(this, n)
                }
            }

            function Gi(e) {
                var t = e.closePopout;
                return (0, r.jsx)(oi, {
                    onClose: t
                })
            }
            var Ui = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Li(e, t)
                }(n, e);
                var t = Bi(n);

                function n() {
                    Ai(this, n);
                    var e;
                    (e = t.apply(this, arguments)).onDragStart = function(t) {
                        (0, e.props.dragStart)(So.MOVE, t.clientX, t.clientY)
                    };
                    return e
                }
                n.prototype.render = function() {
                    var e = this.props,
                        t = e.selectedGuildId,
                        n = e.locked,
                        o = e.contained,
                        i = null != t ? (0, r.jsx)(wi, {
                            guildId: t,
                            onDragStart: this.onDragStart
                        }, t) : (0, r.jsx)(si, {
                            title: A.Z.Messages.DIRECT_MESSAGES,
                            renderSettings: Gi,
                            onDragStart: this.onDragStart,
                            children: (0, r.jsx)(xi, {})
                        }),
                        a = o ? "div" : Ie;
                    return (0, r.jsxs)(a, {
                        className: O()(Ri().base, Mi({}, Ri().widget, !o)),
                        children: [(0, r.jsx)(To.Z, {
                            isOverlay: !0,
                            disableAppDownload: !0,
                            isVisible: !n
                        }), i]
                    })
                };
                return n
            }(o.PureComponent);
            Ui.defaultProps = {
                contained: !1
            };
            const zi = i.ZP.connectStores([en.Z], (function() {
                return {
                    selectedGuildId: en.Z.getGuildId()
                }
            }))(Ui);
            var Yi = n(943469),
                Hi = n(720419),
                Wi = n(224134),
                Fi = n(531304),
                Ki = n(37707),
                Xi = n(704271),
                Ji = n(428107),
                Qi = n(451851),
                qi = n(926197),
                $i = n(163216),
                ea = n(878826),
                ta = n(281808),
                na = n(855483),
                ra = n(341458),
                oa = n(863979),
                ia = n(30027),
                aa = n(295851),
                ca = n(28862),
                la = n(798808),
                sa = n(284610),
                ua = n(747126),
                fa = n(352980),
                da = n(330484),
                pa = n(930948),
                ha = n(476770);

            function ya(e, t) {
                var n, r, o = Gt.Z.getGame();
                bn.Z.dispatch({
                    type: "OVERLAY_WIDGET_CHANGED",
                    gameName: null !== (n = null == o ? void 0 : o.name) && void 0 !== n ? n : null,
                    gameId: null !== (r = null == o ? void 0 : o.id) && void 0 !== r ? r : null,
                    widgetType: e.widget,
                    visible: t,
                    locked: e.locked,
                    pinned: e.pinned
                })
            }
            var va = n(116404),
                ga = n(412448),
                ba = n(641283),
                Oa = n(382060),
                ma = n(610773),
                Sa = n(96964),
                Ea = n(523130),
                _a = n(551943),
                wa = n(168075),
                ja = n(795308);

            function Ia(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Ca(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function Za(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function Pa(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Ta(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function xa(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const Na = (0, wa.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    a = e.color,
                    c = void 0 === a ? "currentColor" : a,
                    l = e.foreground,
                    s = xa(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", Ta(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            Pa(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, q.Z)(s)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: c,
                        className: l,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M21 2H3C1.897 2 1 2.898 1 4V6H23V4C23 2.898 22.103 2 21 2ZM13 12H15V14H13V12ZM11 12H13V10H15V12H17V14H15V16H13V14H11V12ZM9 12H11V10H9V12ZM9 14V12H7V10H5V12H7V14H5V16H7V18H9V16H11V18H13V16H11V14H9ZM9 14V16H7V14H9ZM17 16V14H19V16H17ZM17 16H15V18H17V16ZM17 12H19V10H17V12ZM3 22C1.897 22 1 21.103 1 20V7H23V20C23 21.103 22.103 22 21 22H3Z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    a = e.color,
                    c = void 0 === a ? ja.Z.colors.INTERACTIVE_NORMAL : a,
                    l = e.colorClass,
                    s = void 0 === l ? "" : l,
                    u = Za(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", Ca(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            Ia(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, q.Z)(u)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof c ? c : c.css,
                        fillRule: "evenodd",
                        d: "M4 3a3 3 0 0 0-3 3v2a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a3 3 0 0 0-3-3H4Zm-2 8a1 1 0 0 0-1 1v6a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1H2Zm3-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4 9v-2H5v2h2Zm2 0H7v2H5v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h-2v-2h2v-2h-2v2h-2v-2h-2v2h-2v-2H9v2Zm0 0h2v2H9v-2Zm4 0v2h2v-2h-2Z",
                        clipRule: "evenodd",
                        className: s
                    })
                }))
            }));
            var Ra = n(193176),
                Aa = n(550140),
                Ma = n(443812);

            function ka(e) {
                switch (e) {
                    case Qe.wF.BOTTOM:
                        return Qe.wF.BOTTOM;
                    case Qe.wF.LOWER:
                        return Qe.wF.LOWER;
                    case Qe.wF.UPPER:
                        return Qe.wF.UPPER;
                    default:
                        return Qe.wF.TOP
                }
            }
            var Da = n(545262),
                La = n.n(Da);

            function Va(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Ba(e) {
                Ba = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Ba(e)
            }

            function Ga(e, t) {
                return !t || "object" !== za(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Ua(e, t) {
                Ua = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Ua(e, t)
            }
            var za = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Ya(e) {
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
                    var n, r = Ba(e);
                    if (t) {
                        var o = Ba(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Ga(this, n)
                }
            }
            var Ha = Object.values(Qe.wF).map((function(e) {
                    return 100 * e
                })),
                Wa = (0, Ma.hQ)(),
                Fa = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && Ua(e, t)
                    }(n, e);
                    var t = Ya(n);

                    function n() {
                        Va(this, n);
                        var e;
                        (e = t.apply(this, arguments)).initialValue = 100 * e.props.opacity;
                        return e
                    }
                    var o = n.prototype;
                    o.handleUpdateBackgroundOpacity = function(e) {
                        j.Z.setTextWidgetOpacity(ka(e / 100));
                        j.Z.track(ie.rMx.OVERLAY_SETTINGS_UPDATED, {
                            text_opacity_slider: e
                        })
                    };
                    o.handlePreviewBackgroundOpacity = function(e) {
                        j.Z.setTextWidgetOpacity(ka(e / 100))
                    };
                    o.render = function() {
                        return (0, r.jsxs)("div", {
                            className: La().container,
                            children: [(0, r.jsx)(a.FormTitle, {
                                id: Wa,
                                tag: a.FormTitleTags.H5,
                                className: La().title,
                                children: A.Z.Messages.FORM_LABEL_OVERLAY_CHAT_OPACITY
                            }), (0, r.jsx)("div", {
                                className: La().sliderContainer,
                                children: (0, r.jsx)(a.Slider, {
                                    mini: !0,
                                    initialValue: this.initialValue,
                                    defaultValue: this.initialValue,
                                    minValue: Ha[0],
                                    maxValue: Ha[Ha.length - 1],
                                    handleSize: 10,
                                    onValueChange: this.handleUpdateBackgroundOpacity,
                                    asValueChanges: this.handlePreviewBackgroundOpacity,
                                    markers: Ha,
                                    onMarkerRender: ie.dG4,
                                    equidistant: !0,
                                    stickToMarkers: !0,
                                    "aria-labelledby": Wa
                                })
                            })]
                        })
                    };
                    return n
                }(o.PureComponent);
            const Ka = i.ZP.connectStores([Yt.Z], (function() {
                return {
                    opacity: Yt.Z.getTextWidgetOpacity()
                }
            }))(Fa);
            var Xa = n(973337),
                Ja = n.n(Xa);

            function Qa(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function qa(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function $a(e) {
                $a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return $a(e)
            }

            function ec(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function tc(e, t) {
                return !t || "object" !== rc(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function nc(e, t) {
                nc = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return nc(e, t)
            }
            var rc = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function oc(e) {
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
                    var n, r = $a(e);
                    if (t) {
                        var o = $a(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return tc(this, n)
                }
            }
            var ic = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && nc(e, t)
                }(n, e);
                var t = oc(n);

                function n() {
                    Qa(this, n);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        showOpacitySlider: !1
                    };
                    e.handleClickCall = function(t) {
                        var n = e.props,
                            r = n.channel,
                            o = n.userIsInChannelCall,
                            i = n.channelHasActiveCall;
                        if (i) o ? va.default.selectVoiceChannel(null) : j.Z.callPrivateChannel(r.id, !1);
                        else {
                            var a = !i && !t.shiftKey;
                            j.Z.callPrivateChannel(r.id, a)
                        }
                    };
                    e.handleOpenOpacitySettings = function() {
                        var t = e.props.pinned;
                        e.setState({
                            showOpacitySlider: !0
                        });
                        t && j.Z.setPreviewInGameMode(!0)
                    };
                    e.handleCloseOpacitySettings = function() {
                        var t = e.props.pinned;
                        e.setState({
                            showOpacitySlider: !1
                        });
                        t && j.Z.setPreviewInGameMode(!1)
                    };
                    e.handleMouseDown = function(t) {
                        var n = e.props.onMouseDown;
                        null != n && n(t)
                    };
                    e.renderWidgetButtons = function() {
                        var t = e.props,
                            n = t.locked,
                            i = t.handlePin,
                            a = t.pinned,
                            c = a ? A.Z.Messages.OVERLAY_WIDGET_HIDE_IN_GAME : A.Z.Messages.OVERLAY_WIDGET_SHOW_IN_GAME;
                        return n ? null : (0, r.jsxs)(o.Fragment, {
                            children: [e.renderCallButton(), a ? (0, r.jsx)(ga.Z.Icon, {
                                icon: Na,
                                tooltip: A.Z.Messages.FORM_LABEL_OVERLAY_CHAT_OPACITY,
                                onClick: e.handleOpenOpacitySettings
                            }) : null, (0, r.jsx)(ga.Z.Icon, {
                                icon: a ? Aa.Z : Ra.Z,
                                tooltip: c,
                                selected: a,
                                onClick: i
                            })]
                        })
                    };
                    return e
                }
                var i = n.prototype;
                i.componentDidUpdate = function() {
                    this.props.locked && this.state.showOpacitySlider && this.setState({
                        showOpacitySlider: !1
                    })
                };
                i.renderCallButton = function() {
                    var e, t, n = this.props,
                        o = n.channel,
                        i = n.channelHasActiveCall,
                        c = n.userIsInChannelCall,
                        l = n.isBlocked;
                    if (!(0, Oa.hv)(o.type)) return null;
                    var s = Sa.Z,
                        u = !1;
                    if (i)
                        if (c) {
                            e = A.Z.Messages.LEAVE_CALL;
                            s = Ea.Z
                        } else e = A.Z.Messages.JOIN_CALL;
                    else if (l) {
                        e = A.Z.Messages.CALL_UNAVAILABLE_BLOCKED_USERS;
                        t = a.Tooltip.Colors.RED;
                        u = !0
                    } else e = A.Z.Messages.START_VOICE_CALL;
                    return (0, r.jsx)(ga.Z.Icon, {
                        icon: s,
                        tooltip: e,
                        onClick: this.handleClickCall,
                        tooltipColor: t,
                        disabled: u
                    })
                };
                i.render = function() {
                    var e = this.props,
                        t = e.className,
                        n = e.draggableClassName,
                        o = e.locked,
                        i = e.channel,
                        a = e.channelName,
                        c = e.guild,
                        l = e.onMouseDown,
                        s = e.onContextMenu,
                        u = e.isPreviewingInGame,
                        f = e.disableDragIndicator,
                        d = o || u ? null : 1;
                    return this.state.showOpacitySlider && !o ? (0, r.jsxs)(Ie.Bar, {
                        className: Ja().opacityHeader,
                        children: [(0, r.jsx)(Ka, {}), (0, r.jsx)(ga.Z.Icon, {
                            icon: R.Z,
                            onClick: this.handleCloseOpacitySettings,
                            tooltip: A.Z.Messages.CLOSE
                        })]
                    }) : (0, r.jsx)(Ie.Background, {
                        opacityOverride: d,
                        children: (0, r.jsx)("div", {
                            className: O()(t, n, Ja().headerContainer),
                            onMouseDown: l,
                            onContextMenu: s,
                            children: (0, r.jsxs)(ga.Z, {
                                guildId: i.guild_id,
                                channelId: i.id,
                                toolbar: this.renderWidgetButtons(),
                                transparent: !0,
                                children: [u || o || f ? null : (0, r.jsx)(_a.Z, {
                                    className: O()(Ja().dragIcon, n),
                                    width: 20,
                                    height: 20
                                }), (0, ba.ud)({
                                    channel: i,
                                    channelName: a
                                }), o ? null : (0, ba.v0)(i, c)]
                            })
                        })
                    })
                };
                return n
            }(o.Component);

            function ac(e) {
                var t = e.channel,
                    n = ec(e, ["channel"]),
                    o = (0, i.e7)([Vt.Z, Mt.Z], (function() {
                        var e = Vt.Z.getVoiceChannelId();
                        return Mt.Z.getChannel(e)
                    })),
                    a = (0, i.e7)([kt.Z], (function() {
                        return kt.Z.getGuild(t.guild_id)
                    })),
                    c = (0, i.e7)([ma.Z], (function() {
                        return ma.Z.isCallActive(t.id)
                    })),
                    l = (0, Ln.ZP)(t),
                    s = (0, i.e7)([Vn.Z], (function() {
                        return !(!t.isDM() || null == t.getRecipientId()) && Vn.Z.isBlocked(t.getRecipientId())
                    }));
                return (0, r.jsx)(ic, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            qa(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    channel: t,
                    channelName: l,
                    guild: a,
                    channelHasActiveCall: c,
                    userIsInChannelCall: null != o && o.id === t.id,
                    isBlocked: s
                }, n))
            }
            var cc = n(672975),
                lc = n.n(cc);

            function sc(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function uc(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a),
                        l = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function fc(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            uc(i, r, o, a, c, "next", e)
                        }

                        function c(e) {
                            uc(i, r, o, a, c, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function dc(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function pc(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function hc(e) {
                hc = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return hc(e)
            }

            function yc(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                t && mc(e, t)
            }

            function vc(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        pc(e, t, n[t])
                    }))
                }
                return e
            }

            function gc(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function bc(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function Oc(e, t) {
                return !t || "object" !== Ec(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function mc(e, t) {
                mc = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return mc(e, t)
            }

            function Sc(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            c = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return sc(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return sc(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Ec = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function _c(e) {
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
                    var n, r = hc(e);
                    if (t) {
                        var o = hc(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Oc(this, n)
                }
            }
            var wc = function(e, t) {
                    var n, r, o, i, a = {
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
                        },
                        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                    function c(i) {
                        return function(c) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2];
                                                a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
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
                jc = Qe.wF.TOP,
                Ic = function(e) {
                    yc(n, e);
                    var t = _c(n);

                    function n(e) {
                        dc(this, n);
                        var o;
                        (o = t.call(this, e)).draftDidChange = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.props,
                                t = o.state.textValue,
                                n = sa.Z.getDraft(e.channel.id, sa.d.ChannelMessage);
                            t !== n && "" === n && o.setState((0, na.eK)(n))
                        };
                        o.handleTextareaKeyDown = function(e) {
                            if (!(e.which !== ie.yXg.ARROW_UP || e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) && 0 === o.state.textValue.length) {
                                e.preventDefault();
                                var t = o.props.channel,
                                    n = fa.Z.getLastEditableMessage(t.id);
                                null != n && Hi.Z.startEditMessage(t.id, n.id, n.content)
                            }
                        };
                        o.handleTextareaChange = function(e, t, n) {
                            var r = o.props.channel.id;
                            Yi.Z.changeDraft(r, o.state.textValue, sa.d.ChannelMessage);
                            "" !== t ? Wi.Z.startTyping(r) : Wi.Z.stopTyping(r);
                            o.setState({
                                textValue: t,
                                richValue: n
                            })
                        };
                        o.handleSendMessage = function(e) {
                            var t = e.value,
                                n = o.props,
                                r = n.channel,
                                i = n.pendingReply,
                                a = n.isTemporarilyActive;
                            return 0 === t.length ? Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            }) : (0, ha.v)({
                                openWarningPopout: function(e) {
                                    return o.setState({
                                        contentWarningProps: e
                                    })
                                },
                                type: ta.I.OVERLAY,
                                content: t,
                                channel: r
                            }).then((function(e) {
                                var n = e.valid,
                                    c = e.failureReason;
                                if (!n) {
                                    if (c === ie.zYc.SLOWMODE_COOLDOWN) {
                                        pa.S.dispatch(ie.CkL.EMPHASIZE_SLOWMODE_COOLDOWN);
                                        return {
                                            shouldClear: !1,
                                            shouldRefocus: !0
                                        }
                                    }
                                    return {
                                        shouldClear: !1,
                                        shouldRefocus: !1
                                    }
                                }
                                var l = Hi.Z.getSendMessageOptionsForReply(i);
                                Hi.Z.sendMessage(r.id, ia.ZP.parse(r, t), !0, l);
                                o.setState((0, na.H2)());
                                (0, ca.A6)(r.id);
                                if (a) {
                                    j.Z.deactivateAllRegions();
                                    return {
                                        shouldClear: !1,
                                        shouldRefocus: !1
                                    }
                                }
                                return {
                                    shouldClear: !0,
                                    shouldRefocus: !0
                                }
                            }))
                        };
                        o.focusInput = function() {
                            o.setState({
                                focused: !0
                            })
                        };
                        o.blurInput = function() {
                            o.setState({
                                focused: !1
                            })
                        };
                        o.renderAttachButton = function(e, t, n) {
                            return (0, r.jsx)(ra.Z, {
                                className: n,
                                channel: o.props.channel,
                                draftType: sa.d.ChannelMessage,
                                editorTextContent: o.state.textValue,
                                setValue: function(e) {
                                    return o.handleTextareaChange(null, e, (0, na.JM)(e))
                                },
                                canShowPremiumTutorial: e,
                                canOnlyUseTextCommands: t
                            })
                        };
                        sa.Z.addChangeListener(o.draftDidChange);
                        var i = sa.Z.getDraft(e.channel.id, sa.d.ChannelMessage);
                        o.state = gc(vc({}, (0, na.eK)(i)), {
                            focused: !1,
                            contentWarningProps: null
                        });
                        pa.S.subscribe(ie.CkL.TEXTAREA_FOCUS, o.focusInput);
                        pa.S.subscribe(ie.CkL.TEXTAREA_BLUR, o.blurInput);
                        return o
                    }
                    var o = n.prototype;
                    o.componentDidUpdate = function(e) {
                        e.channel.id !== this.props.channel.id && this.draftDidChange(this.props);
                        (this.props.channel !== e.channel || this.props.isTemporarilyActive && !e.isTemporarilyActive) && this.setState({
                            focused: !0
                        })
                    };
                    o.componentWillUnmount = function() {
                        sa.Z.removeChangeListener(this.draftDidChange);
                        pa.S.unsubscribe(ie.CkL.TEXTAREA_FOCUS, this.focusInput);
                        pa.S.unsubscribe(ie.CkL.TEXTAREA_BLUR, this.blurInput)
                    };
                    o.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.channel,
                            o = t.placeholder,
                            i = bc(t, ["channel", "placeholder"]),
                            c = this.state,
                            l = c.focused,
                            s = c.textValue,
                            u = c.contentWarningProps,
                            f = c.richValue,
                            d = (0, r.jsx)(a.Popout, {
                                position: "top",
                                onRequestClose: function() {
                                    var t;
                                    null == u || null === (t = u.onCancel) || void 0 === t || t.call(u);
                                    e.setState({
                                        contentWarningProps: null
                                    })
                                },
                                shouldShow: null != u,
                                renderPopout: function(e) {
                                    var t = e.closePopout;
                                    vn()(null != u, "ConnectedChannelTextArea.render - renderPopout: contentWarningProps cannot be null");
                                    return (0, r.jsx)(Ki.Z, vc({
                                        onClose: t
                                    }, u))
                                },
                                children: function() {
                                    return (0, r.jsx)(oa.Z, gc(vc({}, i), {
                                        renderAttachButton: e.renderAttachButton,
                                        channel: n,
                                        type: ta.I.OVERLAY,
                                        onFocus: function() {
                                            return e.setState({
                                                focused: !0
                                            })
                                        },
                                        onBlur: function() {
                                            return e.setState({
                                                focused: !1
                                            })
                                        },
                                        placeholder: o,
                                        textValue: s,
                                        richValue: f,
                                        onSubmit: e.handleSendMessage,
                                        onChange: e.handleTextareaChange,
                                        onKeyDown: e.handleTextareaKeyDown,
                                        focused: l
                                    }))
                                }
                            });
                        return n.isPrivate() ? (0, r.jsx)($i.Z, {
                            channel: n,
                            children: d
                        }, n.id) : (0, r.jsx)(ea.Z, {
                            channel: n,
                            children: d
                        }, n.id)
                    };
                    return n
                }(o.Component),
                Cc = function(e) {
                    yc(i, e);
                    var t = _c(i);

                    function i() {
                        dc(this, i);
                        var e;
                        (e = t.apply(this, arguments)).handlePin = function() {
                            var t, n, r, o = !e.props.pinned;
                            j.Z.track(ie.rMx.OVERLAY_PIN_TOGGLED, {
                                pinned: o,
                                guild_id: null === (t = e.props.channel) || void 0 === t ? void 0 : t.guild_id,
                                channel_id: null === (n = e.props.channel) || void 0 === n ? void 0 : n.id,
                                channel_type: null === (r = e.props.channel) || void 0 === r ? void 0 : r.type,
                                widget_type: ie.Odu.TEXT
                            });
                            j.Z.setPinChat(o)
                        };
                        e.handleContextMenu = function(t) {
                            var o = e.props,
                                i = o.channel,
                                a = o.user;
                            null != i && null != a && (0, mt.jW)(t, fc((function() {
                                var e, t;
                                return wc(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return [4, Promise.all([n.e(40532), n.e(49244), n.e(50865)]).then(n.bind(n, 550865))];
                                        case 1:
                                            e = o.sent(), t = e.default;
                                            return [2, function(e) {
                                                return (0, r.jsx)(t, gc(vc({}, e), {
                                                    user: a,
                                                    channelSelected: !0,
                                                    channel: i
                                                }))
                                            }]
                                    }
                                }))
                            })))
                        };
                        e.moveDragStart = function(t) {
                            (0, e.props.dragStart)(So.MOVE, t.clientX, t.clientY)
                        };
                        e.resizeDragStart = function(t) {
                            (0, e.props.dragStart)(So.RESIZE_SOUTH_EAST, t.clientX, t.clientY)
                        };
                        return e
                    }
                    var a = i.prototype;
                    a.componentDidUpdate = function(e) {
                        var t = this.props,
                            n = t.channel,
                            r = t.activated;
                        e.locked === this.props.locked && e.pinned === this.props.pinned && this.shouldDisplay(e) === this.shouldDisplay() || ya(this.props, this.shouldDisplay());
                        null != n && r && !e.activated && j.Z.track(ie.rMx.OVERLAY_UNLOCKED, {
                            channel_id: n.id,
                            channel_type: n.type,
                            guild_id: n.guild_id
                        })
                    };
                    a.componentDidMount = function() {
                        ya(this.props, this.shouldDisplay())
                    };
                    a.getOpacity = function() {
                        var e = this.props,
                            t = e.locked,
                            n = e.activated,
                            r = e.opacity,
                            o = e.isPreviewingInGame;
                        return t && !n || o ? r / 100 : n || !t ? Math.min(1, (r + 25) / 100) : 1
                    };
                    a.renderContent = function() {
                        var e = this.props,
                            t = e.channel,
                            n = e.placeholder,
                            i = e.nsfwAgree,
                            a = e.guild,
                            c = e.locked,
                            l = e.activated,
                            s = e.chatKeybind,
                            u = e.pinned,
                            f = e.isPreviewingInGame,
                            d = e.dragging,
                            p = e.pendingReply;
                        if (null == t) return null;
                        var h, y, v = c || f,
                            g = !i && null != t && t.isNSFW(),
                            b = !v || l;
                        h = g && null != a ? (0, r.jsx)(Xi.Z, {
                            guild: a
                        }) : (0, r.jsx)(aa.Z, {
                            channel: t,
                            className: lc().messages,
                            forceCompact: u,
                            showNewMessagesBar: !v,
                            scrollerClassName: u ? lc().scroller : void 0,
                            showingSpamBanner: !1,
                            showingQuarantineBanner: !1
                        }, t.id);
                        return (0, r.jsx)(da.G.Provider, {
                            value: {
                                disableInteractions: u && c && !l,
                                disableAnimations: u && v && !l
                            },
                            children: (0, r.jsxs)(o.Fragment, {
                                children: [!c && !f && (0, r.jsx)(qi.Z, {
                                    channel: t,
                                    guild: a
                                }), (0, r.jsx)(Ie.Background, {
                                    opacityOverride: c || f ? null : jc,
                                    children: (0, r.jsx)("div", {
                                        className: O()(lc().messagesContainer, (y = {}, pc(y, lc().isDragging, d), pc(y, lc().disableHoverStates, u && c && !l), y)),
                                        children: h
                                    })
                                }), g ? null : (0, r.jsx)("div", {
                                    children: b ? (0, r.jsx)(Ie.Background, {
                                        opacityOverride: c || f ? null : jc,
                                        children: (0, r.jsxs)("div", {
                                            className: lc().footerContent,
                                            children: [(0, r.jsx)(Ic, {
                                                channel: t,
                                                placeholder: n,
                                                isTemporarilyActive: l,
                                                pendingReply: p
                                            }), (0, r.jsx)("div", {
                                                className: lc().typingWrapper,
                                                children: (0, r.jsx)(Fi.Z, {
                                                    channel: t,
                                                    className: lc().typing
                                                })
                                            })]
                                        })
                                    }) : (0, r.jsx)("div", {
                                        className: lc().activateContainer,
                                        children: (0, r.jsx)(Ie.Background, {
                                            opacityOverride: Qe.wF.LOWER,
                                            children: (0, r.jsx)("div", {
                                                className: O()(lc().activateKeybind, lc().mediumBackgroundOpacity),
                                                children: null != t.name && t.name.length > 0 ? A.Z.Messages.OVERLAY_CHANNEL_CHAT_HOTKEY.format({
                                                    keybind: s,
                                                    channelName: t.isMultiUserDM() ? t.name : "#".concat(t.name)
                                                }) : A.Z.Messages.OVERLAY_USER_CHAT_HOTKEY.format({
                                                    keybind: s
                                                })
                                            })
                                        })
                                    })
                                })]
                            })
                        })
                    };
                    a.renderWidgetWrapper = function(e) {
                        var t = this.props,
                            n = t.locked,
                            o = t.pinned,
                            i = t.activated,
                            a = t.isPreviewingInGame,
                            c = t.opacity,
                            l = ie.t_t.UNPINNED;
                        i ? l = ie.t_t.IN_GAME_ACTIVE : o && n || a ? l = ie.t_t.IN_GAME_TEXT : o && (l = ie.t_t.PINNED);
                        var s, u = n && !i || a,
                            f = o && (u || i),
                            d = o && i,
                            p = o && u && !i,
                            h = function(e) {
                                switch (e) {
                                    case Qe.wF.BOTTOM:
                                        return Qe.ap.LOW;
                                    case Qe.wF.LOWER:
                                        return Qe.ap.MEDIUM;
                                    case Qe.wF.UPPER:
                                        return Qe.ap.HIGH;
                                    case Qe.wF.TOP:
                                        return Qe.ap.FULL;
                                    default:
                                        return
                                }
                            }(c);
                        return (0, r.jsx)(Ie, {
                            className: O()(h, (s = {}, pc(s, lc().widgetWrapper, !o), pc(s, lc().widgetWrapperPinned, o), pc(s, lc().locked, p), pc(s, lc().inGame, f), pc(s, lc().inGameActive, d), pc(s, lc().pinned, o), pc(s, "overlay-unlocked", !n), s)),
                            type: l,
                            opacity: c,
                            children: e
                        })
                    };
                    a.renderContainedWrapper = function(e) {
                        return (0, r.jsx)("div", {
                            className: lc().contained,
                            children: e
                        })
                    };
                    a.shouldDisplay = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
                        return null != e.channel
                    };
                    a.render = function() {
                        var e = this.props,
                            t = e.locked,
                            n = e.channel,
                            i = e.pinned,
                            a = e.isPreviewingInGame,
                            c = e.contained;
                        if (null == n || !this.shouldDisplay()) return null;
                        var l = (0, r.jsxs)(o.Fragment, {
                            children: [(0, r.jsx)(ac, {
                                draggableClassName: lc().draggableStartArea,
                                className: lc().headerDefault,
                                channel: n,
                                locked: t,
                                pinned: i,
                                disableDragIndicator: c,
                                isPreviewingInGame: a,
                                handlePin: this.handlePin,
                                onContextMenu: this.handleContextMenu,
                                onMouseDown: this.moveDragStart
                            }), this.renderContent(), t || a ? null : (0, r.jsx)("div", {
                                className: lc().resizeIcon,
                                onMouseDown: this.resizeDragStart
                            })]
                        });
                        return c ? this.renderContainedWrapper(l) : this.renderWidgetWrapper(l)
                    };
                    return i
                }(o.PureComponent);

            function Zc(e) {
                var t = e.contained,
                    n = void 0 !== t && t,
                    o = bc(e, ["contained"]),
                    a = (0, i.e7)([en.Z], (function() {
                        return en.Z.getGuildId()
                    })),
                    c = (0, i.e7)([Vt.Z], (function() {
                        return Vt.Z.getChannelId(a)
                    })),
                    l = (0, i.e7)([Mt.Z], (function() {
                        return Mt.Z.getChannel(c)
                    })),
                    s = (0, i.e7)([zt.Z], (function() {
                        return zt.Z.getOverlayChatKeybind()
                    })),
                    u = null != s ? (0, Ft.BB)(s.shortcut, !0) : "]",
                    f = Sc((0, i.Wu)([Yt.Z], (function() {
                        return [Yt.Z.getTextWidgetOpacity(), Yt.Z.getActiveRegions(), !n && Yt.Z.isPreviewingInGame()]
                    })), 3),
                    d = f[0],
                    p = f[1],
                    h = f[2],
                    y = (0, i.e7)([kt.Z], (function() {
                        return kt.Z.getGuild(a)
                    })),
                    v = (0, i.e7)([ua.Z], (function() {
                        return null != a && ua.Z.didAgree(a)
                    })),
                    g = null != l && l.isPrivate() ? l.getRecipientId() : null,
                    b = (0, i.e7)([la.Z], (function() {
                        return null != c ? la.Z.getPendingReply(c) : void 0
                    })),
                    O = (0, i.e7)([tn.default], (function() {
                        return null != g ? tn.default.getUser(g) : null
                    })),
                    m = (0, Ji.Z)(l).placeholder;
                return null != l && null != y && ie.TPd.GUILD_THREADS_ONLY.has(l.type) ? (0, r.jsx)(Qi.Z, {}) : (0, r.jsx)(Cc, vc({
                    guild: y,
                    channel: l,
                    user: O,
                    opacity: d,
                    nsfwAgree: v,
                    chatKeybind: u,
                    activated: p.has(ie.O0n.TEXT_WIDGET),
                    isPreviewingInGame: h,
                    pendingReply: b,
                    contained: n,
                    placeholder: m,
                    widget: ie.Odu.TEXT
                }, o))
            }
            var Pc = n(244764),
                Tc = n.n(Pc);

            function xc(e) {
                var t = e.dragStart,
                    n = e.dragging,
                    o = e.pinned,
                    i = e.locked;
                return (0, r.jsxs)(Ie, {
                    className: Tc().wrapper,
                    children: [(0, r.jsx)(zi, {
                        contained: !0,
                        dragStart: t,
                        locked: i
                    }), (0, r.jsx)(Zc, {
                        dragStart: t,
                        locked: i,
                        pinned: o,
                        dragging: n,
                        contained: !0
                    })]
                })
            }

            function Nc(e) {
                var t;
                return null != e ? {
                    id: e.id,
                    name: null !== (t = e.name) && void 0 !== t ? t : ""
                } : null
            }
            var Rc = n(476020),
                Ac = n(959207),
                Mc = n(870614),
                kc = n(3862),
                Dc = n(749565),
                Lc = n(142643),
                Vc = n(473664),
                Bc = n(306263),
                Gc = n(974760),
                Uc = n(216299),
                zc = n(82274),
                Yc = n(808194),
                Hc = n(427054),
                Wc = n(555566),
                Fc = n(377128),
                Kc = n(750203),
                Xc = n(755914),
                Jc = n(849126),
                Qc = n(98265),
                qc = n(630781),
                $c = n(91717),
                el = n(664806),
                tl = n(473727),
                nl = n(656645),
                rl = n(216151),
                ol = n(2725),
                il = n(181152),
                al = n(407561);

            function cl(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function ll(e) {
                ll = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return ll(e)
            }

            function sl(e, t) {
                return !t || "object" !== fl(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function ul(e, t) {
                ul = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return ul(e, t)
            }
            var fl = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function dl(e) {
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
                    var n, r = ll(e);
                    if (t) {
                        var o = ll(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return sl(this, n)
                }
            }
            var pl = {};

            function hl(e) {
                var t = pl[e = null != e ? e : "null"];
                null == t && (t = pl[e] = {
                    state: ie.hes.DISCONNECTED,
                    quality: ie.IE4.UNKNOWN,
                    pings: [],
                    hostname: null,
                    lossRate: null
                });
                return t
            }

            function yl(e, t, n) {
                var r = pl[e = null != e ? e : "null"];
                return null != r ? t(r) : n
            }

            function vl(e) {
                var t = e.lobbyId;
                delete pl[t]
            }
            var gl = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && ul(e, t)
                }(n, e);
                var t = dl(n);

                function n() {
                    cl(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getConnectionState = function(e) {
                    return yl(e, (function(e) {
                        return e.state
                    }), ie.hes.DISCONNECTED)
                };
                r.getQuality = function(e) {
                    return yl(e, (function(e) {
                        return e.quality
                    }), ie.IE4.UNKNOWN)
                };
                r.getHostname = function(e) {
                    return yl(e, (function(e) {
                        return e.hostname
                    }), null)
                };
                r.getPings = function(e) {
                    return yl(e, (function(e) {
                        return e.pings
                    }), [])
                };
                r.getAveragePing = function(e) {
                    var t = this.getPings(e);
                    return 0 === t.length ? 0 : t.reduce((function(e, t) {
                        return e + t.value
                    }), 0) / t.length
                };
                r.getLastPing = function(e) {
                    var t, n = this.getPings(e);
                    return 0 === n.length ? 0 : null === (t = n[n.length - 1]) || void 0 === t ? void 0 : t.value
                };
                r.getOutboundLossRate = function(e) {
                    return yl(e, (function(e) {
                        return e.lossRate
                    }), null)
                };
                r.isSecureFramesEnabled = function(e) {
                    return !1
                };
                return n
            }(i.ZP.Store);
            gl.displayName = "OverlayRTCConnectionStore";
            const bl = new gl(bn.Z, {
                OVERLAY_INITIALIZE: function(e) {
                    pl = e.rtcConnectionStates
                },
                RTC_CONNECTION_STATE: function(e) {
                    if (null != e.streamKey) return !1;
                    var t = hl(e.lobbyId);
                    t.state = e.state;
                    t.hostname = e.hostname
                },
                RTC_CONNECTION_PING: function(e) {
                    var t = hl(e.lobbyId);
                    t.pings = e.pings;
                    t.quality = e.quality
                },
                RTC_CONNECTION_LOSS_RATE: function(e) {
                    hl(e.lobbyId).lossRate = e.lossRate
                },
                LOBBY_DELETE: vl,
                LOBBY_DISCONNECT: vl
            });
            var Ol = n(23727),
                ml = n(308377),
                Sl = n(961241),
                El = n(554647),
                _l = n(168775),
                wl = n(679805),
                jl = n.n(wl),
                Il = n(760624),
                Cl = n.n(Il);

            function Zl(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Pl(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Tl(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function xl(e) {
                xl = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return xl(e)
            }

            function Nl(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Tl(e, t, n[t])
                    }))
                }
                return e
            }

            function Rl(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function Al(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function Ml(e, t) {
                return !t || "object" !== Ll(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function kl(e, t) {
                kl = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return kl(e, t)
            }

            function Dl(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            c = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Zl(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Zl(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Ll = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Vl(e) {
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
                    var n, r = xl(e);
                    if (t) {
                        var o = xl(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Ml(this, n)
                }
            }

            function Bl(e) {
                var t = e.lobbyId,
                    n = (0, i.cj)([bl], (function() {
                        return {
                            connectionState: bl.getConnectionState(t),
                            hostname: bl.getHostname(t),
                            averagePing: bl.getAveragePing(t),
                            lastPing: bl.getLastPing(t),
                            pings: bl.getPings(),
                            outboundLossRate: bl.getOutboundLossRate(t),
                            isSecureFramesEnabled: bl.isSecureFramesEnabled(t)
                        }
                    }));
                return (0, r.jsx)(il.Z, Nl({}, n))
            }
            var Gl = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && kl(e, t)
                }(n, e);
                var t = Vl(n);

                function n() {
                    Pl(this, n);
                    var e;
                    (e = t.apply(this, arguments)).handleToggleSelfMute = function() {
                        var t = e.props.context;
                        nl.Z.toggleSelfMute({
                            context: t
                        })
                    };
                    e.handleToggleSelfDeaf = function() {
                        var t = e.props.context;
                        nl.Z.toggleSelfDeaf({
                            context: t
                        })
                    };
                    e.renderPopout = function() {
                        var t = e.props.lobbyId;
                        return (0, r.jsx)(Bl, {
                            lobbyId: t
                        })
                    };
                    return e
                }
                var o = n.prototype;
                o.handleDisconnect = function() {
                    va.default.selectVoiceChannel(null)
                };
                o.renderLobby = function() {
                    return (0, r.jsx)(qc.Z, {
                        className: Cl().channel,
                        children: A.Z.Messages.LOBBY
                    })
                };
                o.renderChannelLink = function(e) {
                    var t = this.props.guild,
                        n = (0, Ln.F6)(e, tn.default, Vn.Z),
                        o = null != t ? "".concat(n, " / ").concat(t.name) : n,
                        i = null != t ? t.id : ie.ME;
                    return (0, r.jsx)(tl.rU, {
                        to: ie.Z5c.CHANNEL(i),
                        onClick: function(t) {
                            t.stopPropagation();
                            rl.Z.channelListScrollTo(i, e.id)
                        },
                        children: (0, r.jsx)(qc.Z, {
                            className: Cl().channel,
                            children: o
                        })
                    })
                };
                o.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.className,
                        o = t.contentClassName,
                        i = t.pinned,
                        c = t.lobbyId,
                        l = t.channel,
                        s = t.quality,
                        u = t.lastPing,
                        f = t.hasVideo,
                        d = t.connectionState,
                        p = t.deaf,
                        h = t.mute;
                    return null == l && null == c ? null : (0, r.jsx)(Ie.Bar, {
                        className: O()(n, jl().controls, Tl({}, jl().unpinned, !i)),
                        children: (0, r.jsxs)(Ie.Content, {
                            className: O()(o, jl().content),
                            dynamicSize: !0,
                            children: [(0, r.jsx)("div", {
                                className: Cl().inner,
                                children: (0, r.jsx)(a.Popout, {
                                    renderPopout: this.renderPopout,
                                    position: "top",
                                    children: function(t) {
                                        return (0, r.jsx)(a.Clickable, Rl(Nl({}, t), {
                                            children: (0, r.jsx)(ol.Z, {
                                                statusTextClassName: Cl().statusWithPopout,
                                                quality: s,
                                                lastPing: u,
                                                hasVideo: f,
                                                state: d,
                                                children: null != l ? e.renderChannelLink(l) : e.renderLobby()
                                            })
                                        }))
                                    }
                                })
                            }), (0, r.jsxs)(Wt.Z, {
                                grow: 0,
                                children: [(0, r.jsx)(_l.Z, {
                                    tooltipText: h ? A.Z.Messages.UNMUTE : A.Z.Messages.MUTE,
                                    icon: h ? El.Z : Sl.Z,
                                    iconForeground: h ? jl().strikethrough : null,
                                    onClick: this.handleToggleSelfMute
                                }), (0, r.jsx)(_l.Z, {
                                    tooltipText: p ? A.Z.Messages.UNDEAFEN : A.Z.Messages.DEAFEN,
                                    icon: p ? ml.Z : Ol.Z,
                                    onClick: this.handleToggleSelfDeaf,
                                    iconForeground: p ? jl().strikethrough : null
                                }), null == c && (0, r.jsx)(_l.Z, {
                                    tooltipText: A.Z.Messages.DISCONNECT_SELF,
                                    onClick: this.handleDisconnect,
                                    icon: Ea.Z
                                })]
                            })]
                        })
                    })
                };
                return n
            }(o.PureComponent);

            function Ul(e) {
                var t = e.context,
                    n = e.lobbyId,
                    o = e.channel,
                    a = Al(e, ["context", "lobbyId", "channel"]),
                    c = (0, i.e7)([kt.Z], (function() {
                        return kt.Z.getGuild(null == o ? void 0 : o.getGuildId())
                    })),
                    l = (0, i.e7)([al.Z], (function() {
                        return null != o && al.Z.hasVideo(o.id)
                    })),
                    s = Dl((0, i.Wu)([Dt.Z], (function() {
                        return [Dt.Z.isSelfMute(t) || Dt.Z.isSelfMutedTemporarily(t), Dt.Z.isSelfDeaf(t)]
                    })), 2),
                    u = s[0],
                    f = s[1],
                    d = Dl((0,
                        i.Wu)([bl], (function() {
                        return [bl.getConnectionState(n), bl.getLastPing(n), bl.getQuality(n)]
                    })), 3),
                    p = d[0],
                    h = d[1],
                    y = d[2];
                return (0, r.jsx)(Gl, Rl(Nl({}, a), {
                    context: t,
                    lobbyId: n,
                    channel: o,
                    guild: c,
                    hasVideo: l,
                    mute: u,
                    deaf: f,
                    connectionState: p,
                    lastPing: h,
                    quality: y
                }))
            }
            var zl = n(36256),
                Yl = n(566827),
                Hl = n.n(Yl);

            function Wl(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Fl(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a),
                        l = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function Kl(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            Fl(i, r, o, a, c, "next", e)
                        }

                        function c(e) {
                            Fl(i, r, o, a, c, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function Xl(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Jl(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Ql(e) {
                Ql = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Ql(e)
            }

            function ql(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                t && rs(e, t)
            }

            function $l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Jl(e, t, n[t])
                    }))
                }
                return e
            }

            function es(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function ts(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function ns(e, t) {
                return !t || "object" !== is(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function rs(e, t) {
                rs = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return rs(e, t)
            }

            function os(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            c = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Wl(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Wl(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var is = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function as(e) {
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
                    var n, r = Ql(e);
                    if (t) {
                        var o = Ql(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return ns(this, n)
                }
            }
            var cs = function(e, t) {
                    var n, r, o, i, a = {
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
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2];
                                                a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
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
                ls = function(e) {
                    ql(n, e);
                    var t = as(n);

                    function n() {
                        Xl(this, n);
                        var e;
                        (e = t.apply(this, arguments)).handleClick = function(t) {
                            var n = e.props,
                                r = n.onClick,
                                o = n.user;
                            null != r && r(t, o)
                        };
                        e.handleContextMenu = function(t) {
                            var n = e.props,
                                r = n.onContextMenu,
                                o = n.user;
                            null != r && r(t, o)
                        };
                        return e
                    }
                    n.prototype.render = function() {
                        var e, t, n = this.props,
                            o = n.flipped,
                            i = n.locked,
                            a = n.deafened,
                            c = n.muted,
                            l = n.streaming,
                            s = n.watching,
                            u = n.user,
                            f = n.size,
                            d = n.speaking,
                            p = n.isPrioritySpeaker,
                            h = n.nick,
                            y = n.displayNameMode,
                            v = n.displayUserMode,
                            g = n.guildId;
                        return v === ie.OYC.ONLY_WHILE_SPEAKING && i && !d ? null : (0, r.jsx)($c.Z, {
                            guildId: g,
                            onClick: i ? void 0 : this.handleClick,
                            onContextMenu: i ? void 0 : this.handleContextMenu,
                            className: O()(Hl().voiceUserWrapper, (e = {}, Jl(e, Hl().faded, !d), Jl(e, Hl().interactive, !i), e)),
                            user: u,
                            nick: h,
                            speaking: !1,
                            flipped: o,
                            isStreaming: l,
                            iconClassName: O()(Hl().voiceIcon, Jl({}, Hl().locked, i)),
                            isWatching: s,
                            size: f,
                            priority: p,
                            deaf: a,
                            mute: c,
                            userNameClassName: O()(Hl().username, (t = {}, Jl(t, Hl().locked, i), Jl(t, Hl().hidden, i && (y === ie.wC$.NEVER || !d && y === ie.wC$.ONLY_WHILE_SPEAKING)), t))
                        })
                    };
                    return n
                }(o.PureComponent);
            ls.defaultProps = {
                size: ie.ipw.LARGE,
                flipped: !1,
                locked: !1,
                speaking: !1,
                isPrioritySpeaker: !1,
                deafened: !1,
                muted: !1
            };

            function ss(e) {
                var t = e.context,
                    n = e.user,
                    a = e.voiceState,
                    c = e.guildId,
                    l = ts(e, ["context", "user", "voiceState", "guildId"]),
                    s = function(e, t, n) {
                        var r = t.isVoiceMuted();
                        r || At.default.getId() !== t.userId ? r || (r = n.isLocalMute(t.userId, e)) : r = !n.isEnabled() || n.isSelfMute(e) || n.isSelfMutedTemporarily(e);
                        return r
                    }(t, a, Dt.Z),
                    u = (0, i.e7)([Rt.Z], (function() {
                        return Rt.Z.getCurrentUserActiveStream()
                    })),
                    f = (0, i.Wu)([Rt.Z], (function() {
                        return null != u ? Rt.Z.getViewerIds(u) : []
                    })),
                    d = (0, Vc.Z)({
                        userId: n.id,
                        context: t
                    }),
                    p = (0, i.e7)([Fc.Z], (function() {
                        return Fc.Z.isPrioritySpeaker(n.id, t)
                    })),
                    h = (0, i.e7)([At.default, Dt.Z], (function() {
                        return function(e, t) {
                            var n = t.isVoiceDeafened();
                            n || At.default.getId() !== t.userId || (n = Dt.Z.isSelfDeaf(e));
                            return n
                        }(t, a)
                    })),
                    y = (0, i.e7)([Rt.Z], (function() {
                        return null != Rt.Z.getStreamForUser(n.id, c)
                    })),
                    v = o.useMemo((function() {
                        return null != u && u.ownerId !== n.id && f.includes(n.id)
                    }), [u, n.id, f]);
                return (0, r.jsx)(ls, es($l({}, l), {
                    muted: s,
                    context: t,
                    user: n,
                    speaking: d,
                    isPrioritySpeaker: p,
                    deafened: h,
                    streaming: y,
                    watching: v,
                    guildId: c
                }))
            }
            var us = function(e) {
                ql(o, e);
                var t = as(o);

                function o() {
                    Xl(this, o);
                    var e;
                    (e = t.apply(this, arguments)).handleUserContextMenu = function(t, o) {
                        var i = e.props.context;
                        (0, mt.jW)(t, Kl((function() {
                            var e, t;
                            return cs(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(49244), n.e(85572)]).then(n.bind(n, 810848))];
                                    case 1:
                                        e = a.sent(), t = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(t, es($l({}, e), {
                                                user: o,
                                                showMediaItems: !0,
                                                mediaEngineContext: i
                                            }))
                                        }]
                                }
                            }))
                        })))
                    };
                    e.handleOpenVoiceSettings = function() {
                        var t = e.props,
                            o = t.context,
                            i = t.channel,
                            c = t.title;
                        (0, a.openModalLazy)(Kl((function() {
                            var e, t;
                            return cs(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(64045), n.e(21723)]).then(n.bind(n, 621723))];
                                    case 1:
                                        e = a.sent(), t = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(t, es($l({}, e), {
                                                mediaEngineContext: o,
                                                title: null != i ? null : c
                                            }))
                                        }]
                                }
                            }))
                        })))
                    };
                    e.handlePin = function() {
                        var t, n, r, o = !e.props.pinned;
                        j.Z.track(ie.rMx.OVERLAY_PIN_TOGGLED, {
                            pinned: o,
                            guild_id: null === (t = e.props.channel) || void 0 === t ? void 0 : t.guild_id,
                            channel_id: null === (n = e.props.channel) || void 0 === n ? void 0 : n.id,
                            channel_type: null === (r = e.props.channel) || void 0 === r ? void 0 : r.type,
                            widget_type: ie.Odu.VOICE
                        });
                        var i = e.props.id;
                        (0, qr.xh)(i)
                    };
                    e.handleStopStream = function() {
                        var t = e.props.stream;
                        null != t && Wn.g((0, Bc.V9)(t))
                    };
                    return e
                }
                var i = o.prototype;
                i.renderVoiceUsers = function() {
                    var e, t = this,
                        n = this.props,
                        o = n.context,
                        i = n.sortedVoiceStates,
                        a = n.displayNameMode,
                        c = n.displayUserMode,
                        l = n.locked,
                        s = n.isPreviewingInGame,
                        u = n.channel,
                        f = n.anchor,
                        d = n.avatarSizeMode,
                        p = null != f.right,
                        h = i.map((function(e) {
                            var n = e.user,
                                i = e.voiceState,
                                f = e.member;
                            if (null == n || null == u || null == o) return null;
                            var h, y = l || s;
                            return (0, r.jsx)(ss, {
                                guildId: null == u ? void 0 : u.guild_id,
                                user: n,
                                nick: null !== (h = null == f ? void 0 : f.nick) && void 0 !== h ? h : Dc.ZP.getName(n),
                                channel: u,
                                flipped: p,
                                voiceState: i,
                                displayNameMode: a,
                                displayUserMode: c,
                                size: d,
                                locked: y,
                                onContextMenu: t.handleUserContextMenu,
                                onClick: t.handleUserContextMenu,
                                context: o
                            }, n.id)
                        }));
                    return (0, r.jsx)(Ie.Body, {
                        className: O()((e = {}, Jl(e, Lc.Z.VOICE_WIDGET_TOP_MARGIN, l), Jl(e, Hl().bottomMargin, l), e)),
                        children: (0, r.jsx)($c.e, {
                            className: Hl().voiceList,
                            children: h
                        })
                    })
                };
                i.renderHeader = function() {
                    var e = this.props,
                        t = e.pinned,
                        n = e.title,
                        o = e.isPreviewingInGame;
                    return (0, r.jsxs)(Ie.Bar, {
                        className: O()(Hl().draggableStartArea, Jl({}, Hl().preview, o)),
                        children: [(0, r.jsxs)(Ie.Content, {
                            dynamicSize: !0,
                            className: O()(Hl().content, Jl({}, Hl().hidden, o)),
                            children: [(0, r.jsx)(_a.Z, {
                                color: ja.Z.unsafe_rawColors.WHITE_500.css,
                                width: 20,
                                height: 20,
                                className: O()(Hl().icon, Hl().faded, Hl().dragIcon)
                            }), (0, r.jsx)(Xc.Z, {
                                color: ja.Z.unsafe_rawColors.WHITE_500.css,
                                width: 20,
                                height: 20,
                                className: O()(Hl().icon, Hl().faded, Hl().speakerIcon)
                            }), (0, r.jsx)(Qc.Z, {
                                color: ja.Z.unsafe_rawColors.PRIMARY_200.css,
                                className: Hl().title,
                                children: n
                            })]
                        }), o ? null : (0, r.jsx)(Ie.Icon, {
                            icon: Ho.Z,
                            label: A.Z.Messages.VOICE_SETTINGS,
                            onClick: this.handleOpenVoiceSettings,
                            tooltipPosition: "left",
                            size: 18
                        }), o ? null : (0, r.jsx)(Ie.Icon, {
                            icon: t ? Aa.Z : Ra.Z,
                            label: t ? A.Z.Messages.OVERLAY_WIDGET_HIDE_IN_GAME : A.Z.Messages.OVERLAY_WIDGET_SHOW_IN_GAME,
                            onClick: this.handlePin,
                            tooltipPosition: "left",
                            size: 18,
                            isActive: t
                        })]
                    })
                };
                i.renderStreamerSettings = function() {
                    var e = this.props,
                        t = e.locked,
                        n = e.pinned,
                        o = e.isPreviewingInGame,
                        i = e.channel,
                        c = e.application,
                        l = e.streamMetadata,
                        s = e.streamApplication,
                        u = e.stream;
                    if (t || null == u || null == i) return null;
                    var f, d, p = (0, Gc.Z)(l),
                        h = p.sanitizedTitle,
                        y = p.title;
                    return (0, r.jsx)(Ie.Bar, {
                        className: O()(Hl().streamerControls, (d = {}, Jl(d, Hl().hidden, o), Jl(d, Hl().unpinned, !n), d)),
                        children: (0, r.jsxs)(Ie.Content, {
                            className: Hl().streamerContent,
                            dynamicSize: !0,
                            children: [(0, r.jsxs)("div", {
                                className: Hl().streamerInner,
                                children: [null != (null == s ? void 0 : s.id) && s.id === (null == c ? void 0 : c.id) ? (0, r.jsx)(Kc.Z, {
                                    className: Hl().gameIcon,
                                    game: c
                                }) : (0, r.jsx)(Uc.Z, {
                                    title: h
                                }), (0, r.jsxs)(Wt.Z, {
                                    direction: Wt.Z.Direction.VERTICAL,
                                    justify: Wt.Z.Justify.BETWEEN,
                                    className: Hl().streamerInfo,
                                    children: [(0, r.jsx)(a.Text, {
                                        className: Hl().streaming,
                                        variant: "text-sm/normal",
                                        children: A.Z.Messages.STATUS_STREAMING
                                    }), (0, r.jsx)(qc.Z, {
                                        children: null !== (f = null == s ? void 0 : s.name) && void 0 !== f ? f : y
                                    })]
                                })]
                            }), (0, r.jsxs)(Wt.Z, {
                                grow: 0,
                                children: [(0, r.jsx)("div", {
                                    className: Hl().streamerIconWrapper,
                                    children: (0, r.jsx)(Hc.Z, {
                                        stream: u,
                                        iconClassName: Hl().streamerIcon,
                                        appContext: ie.IlC.OVERLAY
                                    })
                                }), (0, r.jsx)("div", {
                                    className: Hl().streamerIconWrapper,
                                    children: (0,
                                        r.jsx)(Wc.Z, {
                                        stream: u,
                                        appContext: ie.IlC.OVERLAY
                                    })
                                }), (0, r.jsx)("div", {
                                    className: Hl().streamerIconWrapper,
                                    children: (0, r.jsx)(a.TooltipContainer, {
                                        text: A.Z.Messages.STOP_STREAMING,
                                        children: (0, r.jsx)(a.Button, {
                                            onClick: this.handleStopStream,
                                            look: a.Button.Looks.BLANK,
                                            size: a.Button.Sizes.NONE,
                                            children: (0, r.jsx)(Jc.Z, {
                                                className: Hl().streamerIcon
                                            })
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                };
                i.componentDidMount = function() {
                    ya(this.props, this.shouldDisplay())
                };
                i.componentDidUpdate = function(e) {
                    e.locked === this.props.locked && e.pinned === this.props.pinned && this.shouldDisplay(e) === this.shouldDisplay() || ya(this.props, this.shouldDisplay())
                };
                i.shouldDisplay = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        t = e.context,
                        n = e.locked,
                        r = e.pinned,
                        o = e.sortedVoiceStates,
                        i = e.channel;
                    return 0 !== o.length && null != t && null != i && !(n && !r)
                };
                i.render = function() {
                    var e = this.props,
                        t = e.context,
                        n = e.lobbyId,
                        o = e.locked,
                        i = e.pinned,
                        a = e.isPreviewingInGame,
                        c = e.channel;
                    if (null == c || null == t || !this.shouldDisplay()) return null;
                    var l = ie.t_t.UNPINNED;
                    i && (l = ie.t_t.PINNED);
                    a && (l = ie.t_t.IN_GAME_PREVIEW);
                    o && (l = ie.t_t.IN_GAME);
                    return (0, r.jsxs)(Ie, {
                        type: l,
                        width: 280,
                        children: [o ? null : this.renderHeader(), this.renderVoiceUsers(), this.renderStreamerSettings(), o ? null : (0, r.jsx)(Ul, {
                            className: O()(Jl({}, Hl().preview, a)),
                            contentClassName: O()(Jl({}, Hl().hidden, a)),
                            channel: c,
                            lobbyId: n,
                            context: t,
                            pinned: i
                        })]
                    })
                };
                return o
            }(o.PureComponent);
            us.defaultProps = {
                context: zl.Yn.DEFAULT
            };

            function fs(e) {
                var t, n = (0, i.e7)([Vt.Z, Mt.Z], (function() {
                        return Mt.Z.getChannel(Vt.Z.getVoiceChannelId())
                    })),
                    o = (0, Ln.ZP)(n),
                    a = function(e) {
                        return os((0, i.e7)([Yo.ZP, zc.Z], (function() {
                            return null == e ? [
                                [], -1
                            ] : e.isGuildStageVoice() ? [zc.Z.getMutableParticipants(e.id, Yc.pV.SPEAKER), zc.Z.getParticipantsVersion(e.id)] : [Yo.ZP.getVoiceStatesForChannel(e), Yo.ZP.getVoiceStateVersion(e.getGuildId())]
                        }), [e], el.Q), 1)[0]
                    }(n),
                    c = (0, i.e7)([Rt.Z], (function() {
                        return Rt.Z.getStreamerActiveStreamMetadata()
                    })),
                    l = (0, i.cj)([Lt.ZP, Gt.Z, Rt.Z, Yt.Z, Ac.Z], (function() {
                        var e = (0,
                                Tt.Z)(Lt.ZP, Gt.Z),
                            t = Rt.Z.getCurrentUserActiveStream();
                        return {
                            displayUserMode: Yt.Z.getDisplayUserMode(),
                            displayNameMode: Yt.Z.getDisplayNameMode(),
                            avatarSizeMode: Yt.Z.getAvatarSizeMode(),
                            application: null != e ? Ac.Z.getGameByGameData(e) : null,
                            streamApplication: (null == c ? void 0 : c.pid) === (0, Pe.QF)() ? Nc(e) : null,
                            stream: t
                        }
                    }));
                return (0, r.jsx)(us, es($l({}, l, e), {
                    sortedVoiceStates: a,
                    channel: n,
                    title: null != o ? o : "",
                    streamMetadata: c,
                    streamApplication: null !== (t = l.streamApplication) && void 0 !== t ? t : {
                        id: null,
                        name: null == c ? void 0 : c.sourceName
                    }
                }))
            }
            const ds = i.ZP.connectStores([Lt.ZP, Gt.Z, Rt.Z, tn.default, Yt.Z, Mc.Z, Rc.Z, kc.Z, Ac.Z], (function() {
                var e, t = Mc.Z.getLobbiesWithVoice().find((function(e) {
                        return null != Rc.Z.getApplication(e.application_id)
                    })),
                    n = [],
                    r = "";
                if (null != t) {
                    var o = Rc.Z.getApplication(t.application_id);
                    null != (null == o ? void 0 : o.name) && (r = o.name);
                    e = t.application_id;
                    S().each(kc.Z.getVoiceStates(t.id), (function(e) {
                        var t = tn.default.getUser(e.userId);
                        null != t && n.push({
                            voiceState: e,
                            user: t,
                            nick: t.username,
                            comparator: Dc.ZP.getName(t)
                        })
                    }))
                }
                var i = (0, Tt.Z)(Lt.ZP, Gt.Z),
                    a = Rt.Z.getCurrentUserActiveStream(),
                    c = Rt.Z.getStreamerActiveStreamMetadata();
                return {
                    title: r,
                    context: e,
                    sortedVoiceStates: S().sortBy(n, (function(e) {
                        return e.comparator
                    })),
                    lobbyId: null != t ? t.id : void 0,
                    displayUserMode: Yt.Z.getDisplayUserMode(),
                    displayNameMode: Yt.Z.getDisplayNameMode(),
                    avatarSizeMode: Yt.Z.getAvatarSizeMode(),
                    application: null != i ? Ac.Z.getGameByGameData(i) : null,
                    streamApplication: Nc(i),
                    stream: a,
                    streamMetadata: c,
                    hasStream: !1
                }
            }))(us);

            function ps(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function hs(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function ys(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function vs(e) {
                vs = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return vs(e)
            }

            function gs(e, t) {
                return !t || "object" !== ms(t) && "function" != typeof t ? ps(e) : t
            }

            function bs(e, t) {
                bs = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return bs(e, t)
            }
            var Os, ms = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Ss(e) {
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
                    var n, r = vs(e);
                    if (t) {
                        var o = vs(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return gs(this, n)
                }
            }
            var Es = (ys(Os = {}, ie.Odu.TEXT, (function(e) {
                    var t = e.dragging,
                        n = e.locked,
                        o = e.pinned,
                        i = e.dragStart;
                    return (0, r.jsx)(Zc, {
                        dragStart: i,
                        locked: n,
                        pinned: o,
                        dragging: t
                    })
                })), ys(Os, ie.Odu.GUILDS, (function(e) {
                    var t = e.locked,
                        n = e.dragStart;
                    return (0, r.jsx)(zi, {
                        dragStart: n,
                        locked: t
                    })
                })), ys(Os, ie.Odu.VOICE, (function(e) {
                    var t = e.id,
                        n = e.anchor,
                        o = e.isPreviewingInGame,
                        i = e.locked,
                        a = e.pinned;
                    return (0, r.jsx)(fs, {
                        anchor: n,
                        id: t,
                        locked: i,
                        pinned: a,
                        widget: ie.Odu.VOICE,
                        isPreviewingInGame: o
                    })
                })), ys(Os, ie.Odu.GUILDS_TEXT, (function(e) {
                    var t = e.dragging,
                        n = e.locked,
                        o = e.dragStart;
                    return (0, r.jsx)(xc, {
                        dragStart: o,
                        dragging: t,
                        locked: n,
                        pinned: !1
                    })
                })), ys(Os, ie.Odu.LOBBY_VOICE, (function(e) {
                    var t = e.id,
                        n = e.anchor,
                        o = e.isPreviewingInGame,
                        i = e.locked,
                        a = e.pinned;
                    return (0, r.jsx)(ds, {
                        anchor: n,
                        id: t,
                        locked: i,
                        pinned: a,
                        widget: ie.Odu.LOBBY_VOICE,
                        isPreviewingInGame: o
                    })
                })), Os),
                _s = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && bs(e, t)
                    }(n, e);
                    var t = Ss(n);

                    function n() {
                        hs(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            lastLayoutUpdate: null,
                            dragging: !1
                        };
                        e.handleUpdate = function(t, n, r, o, i) {
                            var a = ps(e),
                                c = a.props.layoutSize,
                                l = a.state.lastLayoutUpdate;
                            if ((0, Pe.Te)(c)) {
                                var s = (0, lo.jL)(r, c),
                                    u = (0, lo.Ox)(o, c);
                                (0, qr.Os)(n);
                                (0, qr.nv)(n, s, u);
                                var f = t === So.MOVE,
                                    d = !f,
                                    p = (0, lo.PY)(r, c.width, c.height, i.width, i.height);
                                e.setState({
                                    lastLayoutUpdate: {
                                        was_resized: null != l && l.was_resized || d,
                                        was_dragged: null != l && l.was_dragged || f,
                                        widget_type: co.Z.getWidgetType(n),
                                        window_width: c.width,
                                        window_height: c.height,
                                        widget_width: i.width,
                                        widget_height: i.height,
                                        widget_left: p.left,
                                        widget_top: p.top
                                    }
                                })
                            }
                        };
                        e.handleFocus = function(t) {
                            var n = e.props.layoutSize;
                            (0, Pe.Te)(n) && (0, qr.Os)(t)
                        };
                        e.handleDragStart = function() {
                            var t = e.props.widget;
                            if (null != t) {
                                t.pinned && j.Z.setPreviewInGameMode(!0);
                                e.setState({
                                    dragging: !0
                                })
                            }
                        };
                        e.handleDragEnd = function() {
                            var t = e.props.widget;
                            if (null != t) {
                                t.pinned && j.Z.setPreviewInGameMode(!1);
                                e.setState({
                                    dragging: !1
                                })
                            }
                        };
                        return e
                    }
                    var o = n.prototype;
                    o.componentDidUpdate = function(e) {
                        if (this.props.locked && !e.locked && null != this.state.lastLayoutUpdate) {
                            j.Z.track(ie.rMx.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate);
                            this.setState({
                                lastLayoutUpdate: null
                            })
                        }
                    };
                    o.renderWidget = function(e, t, n) {
                        var r = this.props,
                            o = r.locked,
                            i = r.isPreviewingInGame,
                            a = this.state.dragging,
                            c = Es[e.type];
                        if (null == c) throw new Error("OverlayLayout: Widget does not exist in WidgetMap");
                        return function(r) {
                            return c({
                                id: e.id,
                                locked: o,
                                pinned: e.pinned,
                                dragging: a,
                                isPreviewingInGame: i,
                                anchor: t,
                                size: n,
                                dragStart: r
                            })
                        }
                    };
                    o.render = function() {
                        var e = this.props,
                            t = e.widget,
                            n = e.widgetConfig,
                            o = e.layoutSize,
                            i = e.locked,
                            a = e.isPreviewingInGame,
                            c = e.isActiveRegion;
                        if (null == t || null == n) return null;
                        var l = t.id,
                            s = t.pinned,
                            u = t.zIndex,
                            f = t.size,
                            d = t.anchor,
                            p = (0, lo.w_)(f, o),
                            h = (0, lo.KR)(d, o),
                            y = n.minSize,
                            v = n.resizeX,
                            g = n.resizeY,
                            b = n.dragAnywhere,
                            O = !i || c,
                            m = !a && !i || s,
                            S = {
                                minX: 0,
                                minY: 0,
                                maxX: o.width,
                                maxY: o.height
                            };
                        return (0, r.jsx)(Po, {
                            id: l,
                            size: p,
                            anchor: h,
                            container: S,
                            minSize: y,
                            hidden: !m,
                            resizeX: v,
                            resizeY: g,
                            style: {
                                zIndex: u
                            },
                            dragAnywhere: b,
                            active: O,
                            onUpdate: this.handleUpdate,
                            onClick: this.handleFocus,
                            onDragStart: this.handleDragStart,
                            onDragEnd: this.handleDragEnd,
                            children: this.renderWidget(t, h, p)
                        })
                    };
                    return n
                }(o.PureComponent),
                ws = i.ZP.connectStores([co.Z, Yt.Z], (function(e) {
                    var t = e.widgetId,
                        n = co.Z.getWidget(t),
                        r = Yt.Z.getActiveRegions();
                    return {
                        widget: n,
                        widgetConfig: null != n ? co.Z.getWidgetConfig(n.type) : null,
                        locked: Yt.Z.isInstanceUILocked(),
                        isPreviewingInGame: Yt.Z.isPreviewingInGame(),
                        isActiveRegion: null != n && r.has(n.type)
                    }
                }))(_s);

            function js(e, t) {
                return (0, r.jsx)(ws, {
                    widgetId: e,
                    layoutSize: t
                }, e)
            }
            const Is = i.ZP.connectStores([co.Z, Ht.Z], (function() {
                return {
                    layout: co.Z.getLayout(Pe.qU),
                    layoutSize: Ht.Z.windowSize(),
                    renderWidget: js
                }
            }))(ao);
            var Cs = n(751615),
                Zs = n(327499),
                Ps = n(113512),
                Ts = n(530537);

            function xs(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Ns(e) {
                Ns = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Ns(e)
            }

            function Rs(e, t) {
                return !t || "object" !== Ms(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function As(e, t) {
                As = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return As(e, t)
            }
            var Ms = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function ks(e) {
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
                    var n, r = Ns(e);
                    if (t) {
                        var o = Ns(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Rs(this, n)
                }
            }
            var Ds = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && As(e, t)
                }(n, e);
                var t = ks(n);

                function n() {
                    xs(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.componentDidUpdate = function(e) {
                    var t = this.props.location;
                    t.pathname + t.search !== e.location.pathname + e.location.search && this.checkGuildAndChannel()
                };
                r.checkGuildAndChannel = function() {
                    var e = this.props.match;
                    if (null != e) {
                        var t = function(e) {
                                var t = e.params,
                                    n = t.guildId,
                                    r = t.channelId,
                                    o = t.messageId;
                                return {
                                    guildId: null != n && "" !== n ? n : ie.ME,
                                    channelId: r,
                                    messageId: o
                                }
                            }(e),
                            n = t.guildId,
                            r = t.channelId,
                            o = t.messageId;
                        if ((0, Ts.S)(n) && (0, Ts.c)(r)) {
                            Zs.Z.selectGuild(n);
                            va.default.selectChannel({
                                guildId: n,
                                channelId: r,
                                messageId: o
                            })
                        } else(0, Z.dL)(ie.Z5c.ME)
                    }
                };
                r.render = function() {
                    return null
                };
                return n
            }(o.Component);
            const Ls = function() {
                return (0, r.jsxs)(Cs.rs, {
                    children: [(0, r.jsx)(Ps.Z, {
                        path: ie.Z5c.CHANNEL(":guildId", ":channelId?", ":messageId?"),
                        component: Ds
                    }), (0, r.jsx)(Ps.Z, {
                        component: Ds
                    })]
                })
            };
            var Vs = n(318715),
                Bs = n(9134),
                Gs = n(407761),
                Us = n(103245),
                zs = n(817145),
                Ys = n.n(zs);

            function Hs(e) {
                var t = e.streamerId,
                    n = e.channelId,
                    i = o.useRef(null),
                    a = (0, Vs.ZP)([tn.default], (function() {
                        return tn.default.getCurrentUser()
                    }));
                vn()(null != a, "user cannot be null");
                (0,
                    Us.Z)(i, a, t, n);
                return (0, r.jsx)("canvas", {
                    className: Ys().canvas,
                    ref: i
                })
            }

            function Ws(e) {
                var t = e.guildId,
                    n = e.channelId,
                    o = e.streamerId,
                    i = Bs.Z.useExperiment({
                        guildId: t,
                        location: "f0d1b1_1"
                    }, {
                        autoTrackExposure: !0
                    }).isSharedCanvasEnabled,
                    a = (0, Vs.ZP)([Gs.Z], (function() {
                        return Gs.Z.visibleOverlayCanvas
                    }));
                return i && a ? (0, r.jsx)(Hs, {
                    guildId: t,
                    channelId: n,
                    streamerId: o
                }) : null
            }

            function Fs(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Ks(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function Xs(e) {
                Xs = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Xs(e)
            }

            function Js(e, t) {
                return !t || "object" !== qs(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Qs(e, t) {
                Qs = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Qs(e, t)
            }
            var qs = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function $s(e) {
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
                    var n, r = Xs(e);
                    if (t) {
                        var o = Xs(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Js(this, n)
                }
            }
            var eu = !1,
                tu = !1;
            var nu = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Qs(e, t)
                }(n, e);
                var t = $s(n);

                function n() {
                    Fs(this, n);
                    return t.apply(this, arguments)
                }! function(e, t, n) {
                    t && Ks(e.prototype, t);
                    n && Ks(e, n)
                }(n, [{
                    key: "keepOpen",
                    get: function() {
                        return tu
                    }
                }, {
                    key: "enabled",
                    get: function() {
                        return eu
                    }
                }]);
                return n
            }(i.ZP.Store);
            nu.displayName = "SoundboardOverlayStore";
            const ru = new nu(bn.Z, {
                SOUNDBOARD_SET_OVERLAY_ENABLED: function(e) {
                    eu = e.enabled;
                    if (e.enabled) {
                        var t;
                        tu = null !== (t = e.keepOpen) && void 0 !== t && t
                    }
                }
            });
            var ou = n(607313),
                iu = n(25009),
                au = n(962392),
                cu = n(460214),
                lu = n(111629),
                su = n.n(lu);

            function uu(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function fu(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            c = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return uu(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return uu(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function du() {
                var e = fu((0, i.Wu)([ru], (function() {
                        return [ru.enabled, ru.keepOpen]
                    })), 2),
                    t = e[0],
                    n = e[1],
                    o = (0, i.e7)([Vt.Z], (function() {
                        return Vt.Z.getVoiceChannelId()
                    })),
                    a = (0, i.e7)([Mt.Z], (function() {
                        return Mt.Z.getChannel(o)
                    }), [o]),
                    c = null == a ? void 0 : a.getGuildId();
                return t && null != a ? (0, r.jsx)("div", {
                    className: su().widget,
                    children: (0, r.jsx)(iu.Z, {
                        width: cu.FW.width,
                        height: cu.FW.height,
                        guildId: c,
                        channel: a,
                        keepOpen: n,
                        onClose: function() {
                            var e = (0, au.Z)();
                            null != e && (0, ou.oZ)(e)
                        },
                        analyticsSource: "overlay"
                    })
                }) : null
            }
            var pu = n(12242),
                hu = n.n(pu);

            function yu(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a),
                        l = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function vu(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            yu(i, r, o, a, c, "next", e)
                        }

                        function c(e) {
                            yu(i, r, o, a, c, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function gu(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function bu(e) {
                bu = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return bu(e)
            }

            function Ou(e, t) {
                return !t || "object" !== Su(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function mu(e, t) {
                mu = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return mu(e, t)
            }
            var Su = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Eu(e) {
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
                    var n, r = bu(e);
                    if (t) {
                        var o = bu(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Ou(this, n)
                }
            }
            var _u = function(e, t) {
                var n, r, o, i, a = {
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
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
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
            i.ZP.PersistedStore.disableWrites = __OVERLAY__;
            i.ZP.initialize();
            var wu = null;

            function ju(e) {
                e.preventDefault()
            }
            Me.FB, 0;

            function Iu(e) {
                (0, mt.jW)(e, vu((function() {
                    var e, t;
                    return _u(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, n.e(70623).then(n.bind(n, 870623))];
                            case 1:
                                e = o.sent(), t = e.default;
                                return [2, function(e) {
                                    return (0, r.jsx)(t, function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                gu(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({}, e))
                                }]
                        }
                    }))
                })))
            }
            var Cu = function(e) {
                    var t, n = e.keybind,
                        o = e.onClick,
                        i = e.isPreviewingInGame,
                        c = e.locked,
                        l = c ? a.Clickable : "div";
                    return (0, r.jsx)(l, {
                        className: O()(hu().overlayBackground, (t = {}, gu(t, hu().overlayActive, !c), gu(t, hu().overlayLocked, c), gu(t, hu().previewMode, !c && i), t)),
                        onMouseDown: function(e) {
                            var t = e.currentTarget,
                                n = e.target;
                            e.button === ie.AeJ.PRIMARY && t === n && o()
                        },
                        onContextMenu: Iu,
                        children: c ? null : (0, r.jsx)("div", {
                            className: hu().closeContainer,
                            children: (0, r.jsx)(St.Z, {
                                variant: St.Z.Variants.BOLD,
                                keybind: n,
                                closeAction: o
                            })
                        })
                    })
                },
                Zu = function(e) {
                    return {
                        keyCode: e.keyCode,
                        shiftKey: e.shiftKey,
                        metaKey: e.metaKey,
                        altKey: e.altKey,
                        ctrlKey: e.ctrlKey
                    }
                },
                Pu = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && mu(e, t)
                    }(n, e);
                    var t = Eu(n);

                    function n(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        var r;
                        (r = t.call(this, e)).handleWindowResize = vt()((function() {
                            r.forceUpdate()
                        }), 500);
                        r.activeKeyEventShapes = [];
                        r.lockEventShape = (0, Ft.d2)(r.props.keybindKeyCodes);
                        r.getActiveKeyEventIndex = function(e) {
                            return r.activeKeyEventShapes.findIndex((function(t) {
                                return bt()(t, e)
                            }))
                        };
                        r.onKeyDownGlobal = function(e) {
                            var t = Zu(e),
                                n = r.getActiveKeyEventIndex(t) > -1,
                                o = [16, 17, 18, 91].includes(e.keyCode);
                            n || o || r.activeKeyEventShapes.push(t);
                            if (r.activeKeyEventShapes.length === r.lockEventShape.length && r.lockEventShape.every((function(e) {
                                    return r.activeKeyEventShapes.some((function(t) {
                                        return bt()(e, t)
                                    }))
                                }))) {
                                e.preventDefault();
                                e.stopPropagation()
                            }
                            var i = r.props,
                                a = i.locked,
                                c = i.activeRegions;
                            t.keyCode === ht().codes.esc && a && c.has(ie.O0n.TEXT_WIDGET) && j.Z.deactivateAllRegions()
                        };
                        r.onKeyUpGlobal = function(e) {
                            var t = Zu(e),
                                n = r.getActiveKeyEventIndex(t);
                            n > -1 && r.activeKeyEventShapes.splice(n, 1)
                        };
                        var o = e.locked && Yt.Z.isPinned(ie.Odu.TEXT);
                        _t.Z.setLayout(o ? Et.Xq : Et.Sr);
                        o && _t.Z.enable();
                        return r
                    }
                    var o = n.prototype;
                    o.handleLock = function() {
                        (0, a.hasAnyModalOpen)() || Ut.Z.isOpen() || j.Z.setLocked(!0, (0, Pe.QF)())
                    };
                    o.handleDeactivate = function() {
                        j.Z.deactivateAllRegions()
                    };
                    o.componentDidMount = function() {
                        j.Z.startSession();
                        xt.Z.initialize();
                        wt.Z.initialize();
                        Nt.Z.initialize()
                    };
                    o.componentDidUpdate = function(e) {
                        var t = this.props.initialized;
                        if (t)
                            if (!t || e.initialized) {
                                if (!e.locked && this.props.locked) {
                                    window.addEventListener("contextmenu", ju, !1);
                                    if (null != wu) {
                                        var n = Date.now() - wu;
                                        j.Z.track(ie.rMx.OVERLAY_LOCKED, {
                                            unlocked_duration: n
                                        });
                                        wu = null
                                    }
                                    _t.Z.disable();
                                    this.activeKeyEventShapes = [];
                                    if (Yt.Z.isPinned(ie.Odu.TEXT)) {
                                        _t.Z.setLayout(Et.Xq);
                                        _t.Z.enable()
                                    }
                                } else if (e.locked && !this.props.locked) {
                                    window.removeEventListener("contextmenu", ju, !1);
                                    if (null == wu) {
                                        wu = Date.now();
                                        j.Z.track(ie.rMx.OVERLAY_UNLOCKED)
                                    }
                                    _t.Z.disable();
                                    this.activeKeyEventShapes = [];
                                    _t.Z.setLayout(Et.Sr);
                                    _t.Z.enable()
                                }
                                e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, Ft.d2)(this.props.keybindKeyCodes))
                            } else this.initialSetup()
                    };
                    o.initialSetup = function() {
                        var e = this.props,
                            t = e.connectedToVoice,
                            n = e.locked,
                            r = e.canGoLive,
                            o = e.isStreaming,
                            i = e.voiceGuild,
                            a = e.voiceChannelId,
                            c = e.game,
                            l = e.canStartBroadcast,
                            s = e.canBroadcast;
                        j.Z.track(ie.rMx.OVERLAY_INITIALIZED, {
                            voice_widget_connected: t,
                            text_widget_connected: Yt.Z.isPinned(ie.Odu.TEXT)
                        });
                        var u = r && !o && null != c,
                            f = t && null != i && null != a,
                            d = {
                                type: Qe.nc.WELCOME
                            };
                        if (u && !t && l) {
                            Ct.Z.trackExposure({
                                location: "overlay_notification"
                            });
                            s && (d = {
                                type: Qe.nc.BROADCAST,
                                game: c
                            })
                        } else u && f ? d = {
                            type: Qe.nc.GO_LIVE_VOICE,
                            game: c,
                            voiceChannelId: a,
                            voiceGuild: i
                        } : u && (d = {
                            type: Qe.nc.GO_LIVE_NON_VOICE,
                            game: c
                        });
                        j.Z.overlayMounted(d);
                        window.addEventListener("resize", this.handleWindowResize);
                        n && window.addEventListener("contextmenu", ju, !1);
                        if (Me.FB) {
                            var p = ke.ZP.requireModule("discord_overlay2");
                            if (void 0 !== p.setPerfInfoCallback) {
                                p.setPerfInfoCallback((function(e) {
                                    j.Z.track(ie.rMx.OVERLAY_PERF_INFO, e)
                                }));
                                p.broadcastCommand({
                                    message: "set_perf_report_interval",
                                    interval: 9e5
                                })
                            }
                            ke.ZP.on("REQUEST_OPEN_EXTERNAL_URL", (function(e, t) {
                                Yt.Z.getDisableExternalLinkAlert() || t === Bt.Z.getLastURL() ? ke.ZP.send("OPEN_EXTERNAL_URL", t) : Ot.Z.show({
                                    title: A.Z.Messages.OVERLAY_LINK_ALERT_TITLE,
                                    body: A.Z.Messages.OVERLAY_LINK_ALERT_BODY,
                                    secondaryConfirmText: A.Z.Messages.OVERLAY_LINK_ALERT_SECONDARY,
                                    confirmText: A.Z.Messages.CONTINUE,
                                    cancelText: A.Z.Messages.CANCEL,
                                    onConfirmSecondary: function() {
                                        j.Z.disableExternalLinkAlert();
                                        ke.ZP.send("OPEN_EXTERNAL_URL", t)
                                    },
                                    onConfirm: function() {
                                        return ke.ZP.send("OPEN_EXTERNAL_URL", t)
                                    }
                                })
                            }))
                        }
                        window.addEventListener("keydown", this.onKeyDownGlobal, !0);
                        window.addEventListener("keyup", this.onKeyUpGlobal, !0)
                    };
                    o.componentWillUnmount = function() {
                        window.removeEventListener("resize", this.handleWindowResize);
                        window.removeEventListener("keydown", this.onKeyDownGlobal, !0);
                        window.removeEventListener("keyup", this.onKeyUpGlobal, !0);
                        this.props.locked && window.removeEventListener("contextmenu", ju, !1);
                        xt.Z.terminate();
                        wt.Z.terminate();
                        Nt.Z.terminate()
                    };
                    o.renderInvalidSizeMessage = function() {
                        return (0, r.jsx)(Wt.Z, {
                            justify: Wt.Z.Justify.CENTER,
                            align: Wt.Z.Align.CENTER,
                            className: hu().invalidContainer,
                            children: (0, r.jsx)("div", {
                                className: hu().inactiveContainer,
                                children: A.Z.Messages.OVERLAY_TOO_SMALL.format(Pe.FW)
                            })
                        })
                    };
                    o.render = function() {
                        var e = this.props,
                            t = e.locked,
                            n = e.keybind,
                            o = e.incompatibleApp,
                            i = e.initialized,
                            a = e.isPreviewingInGame,
                            c = e.activeRegions,
                            l = e.windowSize,
                            s = e.voiceGuild,
                            u = e.voiceChannelId,
                            f = l.width,
                            d = l.height;
                        if (0 === f || 0 === d || o || !i) return null;
                        var p, h = t || a,
                            y = At.default.getId();
                        return (0, r.jsxs)("div", {
                            className: hu().overlay,
                            children: [(0, r.jsx)(Ls, {}), a && (0, r.jsx)("header", {
                                className: hu().previewingInGameHeader,
                                children: A.Z.Messages.OVERLAY_IN_GAME_PREVIEW_HEADER
                            }), undefined, (!t || c.has(ie.O0n.TEXT_WIDGET)) && (0, r.jsx)(Cu, {
                                locked: t,
                                keybind: n,
                                onClick: t ? this.handleDeactivate : this.handleLock,
                                isPreviewingInGame: a
                            }), (0, Pe.Te)(l) ? (0, r.jsx)(Is, {
                                className: O()((p = {}, gu(p, hu().layoutLocked, t), gu(p, hu().layoutUnlocked, !t), p))
                            }) : t ? null : this.renderInvalidSizeMessage(), (0, r.jsx)(du, {}), null != s && null != u && (0, r.jsx)(Ws, {
                                streamerId: y,
                                guildId: s.id,
                                channelId: u
                            }), (0, r.jsx)(Qr, {
                                locked: h,
                                keybind: n
                            }), (0, r.jsx)(pn, {})]
                        })
                    };
                    return n
                }(o.Component);

            function Tu() {
                var e = (0, i.cj)([Yt.Z], (function() {
                        return {
                            locked: Yt.Z.isUILocked((0, Pe.QF)()),
                            initialized: Yt.Z.initialized,
                            incompatibleApp: Yt.Z.incompatibleApp,
                            activeRegions: Yt.Z.getActiveRegions(),
                            isPreviewingInGame: Yt.Z.isPreviewingInGame()
                        }
                    })),
                    t = e.locked,
                    n = e.initialized,
                    o = e.incompatibleApp,
                    a = e.activeRegions,
                    c = e.isPreviewingInGame,
                    l = (0, i.e7)([Ht.Z], (function() {
                        return Ht.Z.windowSize()
                    })),
                    s = (0, i.e7)([zt.Z], (function() {
                        return zt.Z.getOverlayKeybind()
                    })),
                    u = (0, i.e7)([Vt.Z], (function() {
                        return Vt.Z.getVoiceChannelId()
                    })),
                    f = (0, i.e7)([Mt.Z], (function() {
                        return Mt.Z.getChannel(u)
                    })),
                    d = (0, i.e7)([kt.Z], (function() {
                        return null != f ? kt.Z.getGuild(f.guild_id) : null
                    })),
                    p = (0, i.e7)([Lt.ZP, Gt.Z], (function() {
                        return (0, Tt.Z)(Lt.ZP, Gt.Z)
                    })),
                    h = (0, i.e7)([Dt.Z], (function() {
                        return (0, Pt.Z)(Dt.Z)
                    })),
                    y = Ct.Z.useExperiment({
                        location: "overlay"
                    }, {
                        autoTrackExposure: !1
                    }).canBroadcast,
                    v = (0, Zt.Z)() && null != p,
                    g = (0, i.e7)([Rt.Z], (function() {
                        return null != Rt.Z.getCurrentUserActiveStream()
                    })),
                    b = (0, It.Z)(jt.Z.OVERLAY).AnalyticsLocationProvider;
                return (0, r.jsx)(b, {
                    children: (0, r.jsx)(Pu, {
                        locked: t,
                        initialized: n,
                        incompatibleApp: o,
                        activeRegions: a,
                        isPreviewingInGame: c,
                        windowSize: l,
                        keybind: null != s ? (0, Ft.BB)(s.shortcut, !0) : "???",
                        keybindKeyCodes: null != s ? s.shortcut : [],
                        connectedToVoice: null != u,
                        voiceChannelId: null != f ? f.id : null,
                        voiceGuild: d,
                        game: p,
                        canGoLive: h,
                        isStreaming: g,
                        canBroadcast: y,
                        canStartBroadcast: v
                    })
                })
            }
            n(815784), n(173628);
            i.ZP.initialize();
            const xu = function() {
                o.useEffect((function() {
                    d.Z.initialize();
                    s.Z.initialize();
                    h.Z.init();
                    p.Z.init();
                    return function() {
                        d.Z.terminate();
                        s.Z.terminate()
                    }
                }), []);
                return (0, r.jsxs)(o.Fragment, {
                    children: [(0,
                        r.jsx)(u.Z, {}), (0, r.jsx)(f.Z, {
                        children: (0, r.jsxs)(dt, {
                            children: [(0, r.jsx)(g.Co, {}), (0, r.jsx)(y.ZP, {}), (0, r.jsx)(l.Wu, {
                                appContext: ie.IlC.OVERLAY,
                                renderWindow: window,
                                children: (0, r.jsxs)(v.yP, {
                                    children: [(0, r.jsx)(Tu, {}), (0, r.jsx)(a.Modals, {}), (0, r.jsx)(c.Z, {}), (0, r.jsx)(v.Un, {})]
                                })
                            })]
                        })
                    })]
                })
            }
        },
        630395: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => E
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                c = n(304548),
                l = n(778613),
                s = n(2590),
                u = n(473708),
                f = n(115479),
                d = n.n(f),
                p = n(380203),
                h = n.n(p);

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function v(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function g(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            c = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return y(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var b = 0,
                O = function(e) {
                    switch (e) {
                        case s._vf.TOP_LEFT:
                            return u.Z.Messages.OVERLAY_NOTIFICATIONS_TOP_LEFT;
                        case s._vf.TOP_RIGHT:
                            return u.Z.Messages.OVERLAY_NOTIFICATIONS_TOP_RIGHT;
                        case s._vf.BOTTOM_LEFT:
                            return u.Z.Messages.OVERLAY_NOTIFICATIONS_BOTTOM_LEFT;
                        case s._vf.BOTTOM_RIGHT:
                            return u.Z.Messages.OVERLAY_NOTIFICATIONS_BOTTOM_RIGHT;
                        default:
                            return u.Z.Messages.OVERLAY_NOTIFICATIONS_DISABLED
                    }
                },
                m = [s._vf.DISABLED, s._vf.TOP_LEFT, s._vf.TOP_RIGHT, s._vf.BOTTOM_LEFT, s._vf.BOTTOM_RIGHT];

            function S(e) {
                var t = e.position,
                    n = e.onChange,
                    i = g(o.useState((function() {
                        return "notification-position-selector-".concat(b++)
                    })), 1)[0],
                    f = t === s._vf.DISABLED ? u.Z.Messages.OVERLAY_NOTIFICATION_SETTINGS_DISABLED : u.Z.Messages.OVERLAY_NOTIFICATION_SETTINGS_POSITION.format({
                        position: O(t)
                    });
                return (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(c.FocusRing, {
                        within: !0,
                        offset: -2,
                        children: (0, r.jsx)("div", {
                            className: a()(d().wrapper, v({}, d().disabledSelected, t === s._vf.DISABLED)),
                            children: m.map((function(e) {
                                var o;
                                return (0, r.jsxs)("label", {
                                    className: a()((o = {}, v(o, d().selected, e === t), v(o, d().disabled, e === s._vf.DISABLED), v(o, d().topRight, e === s._vf.TOP_RIGHT), v(o, d().topLeft, e === s._vf.TOP_LEFT), v(o, d().bottomRight, e === s._vf.BOTTOM_RIGHT), v(o, d().bottomLeft, e === s._vf.BOTTOM_LEFT), o)),
                                    children: [O(e), e === s._vf.DISABLED ? (0, r.jsx)(l.Z, {
                                        className: d().disabledIcon
                                    }) : null, (0, r.jsx)("input", {
                                        type: "radio",
                                        name: i,
                                        value: e,
                                        onChange: function(t) {
                                            return n(t, e)
                                        },
                                        className: d().hiddenInput
                                    })]
                                }, e)
                            }))
                        })
                    }), (0, r.jsx)(c.FormText, {
                        type: c.FormTextTypes.DESCRIPTION,
                        className: h().marginTop8,
                        children: f
                    })]
                })
            }
            S.Positions = s._vf;
            const E = S
        },
        334396: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => a
            });
            var r = n(730381),
                o = n.n(r),
                i = n(473708);

            function a(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Z.Messages.FORM_LABEL_OFF,
                    r = o().duration(e, "seconds");
                return r.days() > 0 ? (t ? i.Z.Messages.DURATION_DAYS_SHORT : i.Z.Messages.DURATION_DAYS).format({
                    days: r.days()
                }) : r.hours() > 0 ? (t ? i.Z.Messages.DURATION_HOURS_SHORT : i.Z.Messages.DURATION_HOURS).format({
                    hours: r.hours()
                }) : r.minutes() > 0 ? (t ? i.Z.Messages.DURATION_MINUTES_SHORT : i.Z.Messages.DURATION_MINUTES).format({
                    minutes: r.minutes()
                }) : e > 0 ? (t ? i.Z.Messages.DURATION_SECONDS_SHORT : i.Z.Messages.DURATION_SECONDS).format({
                    seconds: r.seconds()
                }) : t ? i.Z.Messages.FORM_LABEL_OFF : n
            }
        }
    }
]);