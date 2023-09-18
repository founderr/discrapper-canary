(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [66058], {
        8395: (e, t, n) => {
            e.exports = n.p + "1fe68f65b459ac02929bb531fead064b.svg"
        },
        674335: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => Eu
            });
            var r = n(785893),
                o = n(667294),
                i = n(202351),
                a = n(882723),
                c = n(238663),
                l = n(260012),
                s = n(26468),
                u = n(93191),
                f = n(337907),
                d = n(567834),
                p = n(10712),
                h = n(801991),
                y = n(366007),
                v = n(329543),
                g = n(211482),
                b = n(294184),
                m = n.n(b),
                O = n(496486),
                S = n.n(O),
                E = n(781995),
                _ = n(450098),
                w = n(125776),
                j = n(993754),
                I = n(458960),
                C = n(582906),
                P = n(784426),
                Z = n(26188),
                T = n.n(Z),
                x = function(e) {
                    var t = e.keybind,
                        n = e.separator,
                        i = e.className;
                    return (0, r.jsx)(r.Fragment, {
                        children: t.map((function(e, a) {
                            return (0, r.jsxs)(o.Fragment, {
                                children: [(0, r.jsx)("span", {
                                    className: m()(T().key, i),
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
                M = n(84438),
                k = n.n(M),
                L = n(518280),
                D = n.n(L);

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

            function U(e, t) {
                return !t || "object" !== z(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function G(e, t) {
                G = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return G(e, t)
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
                    return U(this, n)
                }
            }
            var H, F = function(e) {
                    return e.stopPropagation()
                },
                W = function() {
                    return (0, r.jsx)("div", {
                        className: k().clickBlocker,
                        onClick: F,
                        onMouseEnter: F,
                        onMouseOver: F
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
            var Q = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && G(e, t)
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
                                className: m()(k().body, D().marginTop4),
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
                        className: m()(k().container, (e = {}, V(e, k().themePrimary, o === H.PRIMARY), V(e, k().themeBrand, o === H.BRAND), V(e, k().themeDanger, o === H.DANGER), V(e, k().clickable, null != n && !i), e)),
                        children: [this.renderCloseButton(), this.renderContent(), this.renderFooter(), i ? (0, r.jsx)(W, {}) : null]
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
            Q.ColorSchemes = H;
            Q.defaultProps = {
                maxBodyLines: void 0,
                colorScheme: H.PRIMARY,
                expand: !1,
                disabled: !1
            };
            const J = Q;
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
                ae = n(588938),
                ce = n.n(ae),
                le = n(913957),
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
            var me = ie.t_t.DEFAULT,
                Oe = o.createContext({
                    type: me,
                    opacity: 1
                }),
                Se = o.createContext(void 0),
                Ee = function(e) {
                    var t = e.children,
                        n = e.className,
                        o = he(e, ["children", "className"]);
                    return (0, r.jsx)(Oe.Consumer, {
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
                                        className: m()(n, ce().bar, ce()[oe()(i)]),
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
                                return (0, r.jsx)(Oe.Consumer, {
                                    children: function(i) {
                                        var c = m()(ce().body, ce()[oe()(i.type)], o);
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
                        n = void 0 === t ? me : t,
                        o = e.width,
                        i = e.height,
                        a = e.children,
                        c = e.className,
                        l = e.opacity,
                        s = void 0 === l ? 1 : l,
                        u = e.onClick;
                    return (0, r.jsx)(Oe.Provider, {
                        value: {
                            type: n,
                            opacity: s
                        },
                        children: (0, r.jsx)("div", {
                            className: m()(ce().widget, ce()[oe()(n)], c),
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
                                className: m()(ce().content, n, fe({}, ce().staticSize, !i)),
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
                return (0, r.jsx)(Oe.Consumer, {
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
                            className: m()(ce().icon, fe({}, ce().toggledIconOn, i)),
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
                Pe = n(463473),
                Ze = n(226810),
                Te = n(973935),
                xe = n(809784),
                Ne = n(199731),
                Re = n(513328),
                Ae = n(306472);
            var Me = n(120415),
                ke = n(310126);

            function Le(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function De(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Ve(e) {
                Ve = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Ve(e)
            }

            function Be(e, t) {
                return !t || "object" !== Ge(t) && "function" != typeof t ? Le(e) : t
            }

            function Ue(e, t) {
                Ue = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Ue(e, t)
            }
            var Ge = function(e) {
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
            };

            function He(e) {
                var t = e.clientX,
                    n = e.clientY;
                Ye.x = t;
                Ye.y = n
            }
            var Fe = new Map;

            function We(e, t) {
                if (null == t) {
                    Fe.delete(e);
                    0 === Fe.size && window.removeEventListener("mousemove", He)
                } else {
                    var n = Fe.get(e);
                    if (null != n && (0, Ne.Z)(n.zone, t.zone)) return;
                    0 === Fe.size && window.addEventListener("mousemove", He);
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
                        if (Ke) return;
                        var n = function(e) {
                            var t = Fe.get(e);
                            null != t && t.instance.click()
                        };
                        null === Ae.Z || void 0 === Ae.Z || null === (e = Ae.Z.globalOverlay) || void 0 === e || null === (t = e.setClickZoneCallback) || void 0 === t || t.call(e, n);
                        ke.ZP.requireModule("discord_overlay2").setClickZoneCallback(n);
                        Ke = !0
                    }()
                }
            }
            var Ke = !1;
            var Xe = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Ue(e, t)
                }(n, e);
                var t = ze(n);

                function n() {
                    De(this, n);
                    var e;
                    (e = t.apply(this, arguments)).zone = S().uniqueId("ClickArea");
                    e.interval = new Re.Xp;
                    e.updateZone = function() {
                        var t = (0, Te.findDOMNode)(Le(e));
                        if ((0, xe.k)(t)) {
                            var n = t.getBoundingClientRect(),
                                r = n.left,
                                o = n.top,
                                i = n.right,
                                a = n.bottom;
                            We(e.zone, {
                                instance: Le(e),
                                zone: {
                                    name: e.zone,
                                    left: r,
                                    top: o,
                                    right: i,
                                    bottom: a
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
                    We(this.zone, null)
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
            Xe.defaultProps = {
                observe: !0,
                observeInterval: 1e3
            };
            var Qe = n(970645),
                Je = n.n(Qe);

            function qe(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function $e(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function et(e) {
                et = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return et(e)
            }

            function tt(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                t && rt(e, t)
            }

            function nt(e, t) {
                return !t || "object" !== ot(t) && "function" != typeof t ? qe(e) : t
            }

            function rt(e, t) {
                rt = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return rt(e, t)
            }
            var ot = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function it(e) {
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
                    var n, r = et(e);
                    if (t) {
                        var o = et(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return nt(this, n)
                }
            }

            function at() {
                var e = (0, Ze.QF)(),
                    t = (0, Ze.Ht)();
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
            var ct = function(e) {
                    tt(n, e);
                    var t = it(n);

                    function n() {
                        $e(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            showTrace: !1,
                            busy: !1
                        };
                        e.hideNotification = function() {
                            at();
                            var t = qe(e).notificationTimer;
                            null != t && clearTimeout(t);
                            e.notificationTimer = null
                        };
                        e.handleReload = function(t) {
                            e.setState({
                                busy: !0
                            });
                            at();
                            j.Z.track(ie.rMx.NOTIFICATION_CLICKED, {
                                notif_type: "Overlay Crashed",
                                action_type: "reload"
                            }, !0);
                            t.stopPropagation();
                            setTimeout((function() {
                                return location.reload(!0)
                            }), 200)
                        };
                        e.handleNotificationClick = function(t) {
                            t.stopPropagation();
                            var n = qe(e).notificationTimer;
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
                            notif_type: "Overlay Crashed"
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
                        return null == this.notificationTimer ? null : (0, r.jsx)(Xe, {
                            observe: !1,
                            children: (0, r.jsxs)(a.Clickable, {
                                className: m()((0, Pe.Q)(ie.BRd.DARK), Je().container),
                                onClick: function(e) {
                                    return e.stopPropagation()
                                },
                                children: [(0, r.jsx)(J, {
                                    expand: !0,
                                    colorScheme: H.DANGER,
                                    icon: (0, r.jsx)(ne, {
                                        width: 40,
                                        height: 40,
                                        className: Je().notificationIcon
                                    }),
                                    title: A.Z.Messages.OVERLAY_CRASHED_TITLE,
                                    confirmText: A.Z.Messages.OVERLAY_RELOAD,
                                    onNotificationClick: this.handleNotificationClick,
                                    onConfirmClick: this.handleReload,
                                    onDismissClick: this.hideNotification
                                }), o && null != t ? (0, r.jsxs)(Ie, {
                                    className: Je().stackTrace,
                                    children: [(0, r.jsx)(Ie.Bar, {
                                        children: "Error Details"
                                    }), (0, r.jsx)(Ie.Content, {
                                        className: Je().stackTraceCode,
                                        children: (0, r.jsx)("code", {
                                            className: Je().code,
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
                lt = S().throttle((function() {
                    C.Z.increment({
                        name: w.V.APP_CRASHED,
                        tags: ["reason:".concat(E.v.UNHANDLED_JS_ERROR), "level:".concat(_.c.FATAL)]
                    }, !0)
                }), 100, {
                    trailing: !1
                }),
                st = function(e) {
                    tt(n, e);
                    var t = it(n);

                    function n() {
                        $e(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            error: null,
                            info: null
                        };
                        return e
                    }
                    var o = n.prototype;
                    o.componentDidCatch = function(e, t) {
                        var n = (0, P.s1)().location;
                        this.setState({
                            error: e,
                            info: t
                        });
                        var r = (0, Ze.QF)(),
                            o = (0, Ze.Ht)();
                        (0, I.lW)({
                            type: ie.BmY.DISPATCH,
                            pid: (0, Ze.QF)(),
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
                            return window.addEventListener("click", at)
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
                        lt()
                    };
                    o.render = function() {
                        var e = this.props,
                            t = e.children,
                            n = e.className,
                            o = this.state,
                            i = o.error,
                            a = o.info;
                        return null != i ? (0, r.jsx)(ct, {
                            error: i,
                            info: a
                        }) : (0, r.jsx)("div", {
                            className: n,
                            children: t
                        })
                    };
                    return n
                }(o.PureComponent);
            const ut = st;
            var ft = n(427537),
                dt = n.n(ft),
                pt = n(23279),
                ht = n.n(pt),
                yt = n(618446),
                vt = n.n(yt),
                gt = n(105783),
                bt = n(971402),
                mt = n(72831),
                Ot = n(442921),
                St = n(241166),
                Et = n(173242),
                _t = n(153686),
                wt = n(19585),
                jt = n(866926),
                It = n(944514),
                Ct = n(668403),
                Pt = n(451069),
                Zt = n(177570),
                Tt = n(664625),
                xt = n(61209),
                Nt = n(567403),
                Rt = n(525077),
                At = n(671723),
                Mt = n(715107),
                kt = n(20405),
                Lt = n(375759),
                Dt = n(881532),
                Vt = n(138049),
                Bt = n(674482),
                Ut = n(901654),
                Gt = n(107364),
                zt = (n(786170),
                    n(79251)),
                Yt = n(940060),
                Ht = n(805907),
                Ft = n(597967),
                Wt = n(5544),
                Kt = n(21372),
                Xt = n(682776),
                Qt = n(464187),
                Jt = n(473903);

            function qt(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function $t(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function en(e) {
                en = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return en(e)
            }

            function tn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        $t(e, t, n[t])
                    }))
                }
                return e
            }

            function nn(e, t) {
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

            function rn(e, t) {
                return !t || "object" !== an(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function on(e, t) {
                on = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return on(e, t)
            }
            var an = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function cn(e) {
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
                    var n, r = en(e);
                    if (t) {
                        var o = en(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return rn(this, n)
                }
            }
            var ln = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && on(e, t)
                }(n, e);
                var t = cn(n);

                function n() {
                    qt(this, n);
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
                        (0, Ft.Q)(ie.rMx.GUILD_VIEWED, nn(tn({}, l), {
                            postable_channels: c
                        }))
                    }
                    if (null != r && r !== e.selectedChannel) {
                        var s = (0, Ht.K)(xt.Z.getChannel(r), !0);
                        (0, Ft.Q)(ie.rMx.CHANNEL_OPENED, tn({
                            channel_is_nsfw: o
                        }, s))
                    }
                };
                r.render = function() {
                    return null
                };
                return n
            }(o.Component);
            const sn = i.ZP.connectStores([Qt.Z, Mt.Z, xt.Z, Nt.Z, Jt.default, Bt.Z, Kt.ZP, Wt.ZP, Xt.Z], (function() {
                var e, t, n, r = Qt.Z.getGuildId(),
                    o = Mt.Z.getChannelId(r),
                    i = xt.Z.getChannel(o),
                    a = Nt.Z.getGuild(r),
                    c = Jt.default.getCurrentUser(),
                    l = null !== (t = Wt.ZP.getChannels(null == a ? void 0 : a.id)[Wt.sH]) && void 0 !== t ? t : [],
                    s = l.length > 0 ? l.filter((function(e) {
                        var t = e.channel;
                        return Xt.Z.can(Yt.Z.combine(ie.Plq.SEND_MESSAGES, ie.Plq.VIEW_CHANNEL), t)
                    })).length : 0,
                    u = null != c && null != r && (null !== (n = null === (e = Kt.ZP.getMember(r, c.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== n && n);
                return {
                    selectedGuild: r,
                    selectedChannel: o,
                    isNSFWChannel: null == i ? void 0 : i.nsfw,
                    locked: Bt.Z.isUILocked((0, Ze.QF)()),
                    hasPreviewEnabled: null == a ? void 0 : a.features.has(ie.oNc.PREVIEW_ENABLED),
                    isMemberPending: u,
                    postableChannelCount: s
                }
            }))(ln);
            var un = n(443660),
                fn = n(441143),
                dn = n.n(fn),
                pn = n(468811),
                hn = n.n(pn),
                yn = n(744564),
                vn = n(875700),
                gn = n(537079);

            function bn(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function mn(e, t) {
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

            function On(e) {
                return {
                    trackView: function() {
                        j.Z.track(ie.rMx.NOTIFICATION_VIEWED, e)
                    },
                    trackClick: function(t) {
                        var n = Bt.Z.isInstanceUILocked() ? ie.Sbl.LOCKED_OVERLAY : ie.Sbl.UNLOCKED_OVERLAY;
                        j.Z.track(ie.rMx.NOTIFICATION_CLICKED, mn(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))));
                                r.forEach((function(t) {
                                    bn(e, t, n[t])
                                }))
                            }
                            return e
                        }({}, e), {
                            location: n,
                            action_type: t
                        }))
                    }
                }
            }

            function Sn() {
                var e = Vt.Z.getOverlayKeybind();
                return null != e ? (0, zt.BB)(e.shortcut, !0).split(" + ") : ["???"]
            }
            var En = n(775173);

            function _n(e, t) {
                var n = e.username,
                    o = A.Z.Messages.USER_ACTIVITY_USER_JOIN.format({
                        username: ""
                    }),
                    i = (0, En.ov)(e),
                    a = On({
                        notif_type: "Activity User Join",
                        notif_user_id: e.id,
                        activity_type: ie.mFx.JOIN,
                        activity_name: t.name
                    }),
                    c = a.trackView,
                    l = a.trackClick;
                return {
                    colorScheme: J.ColorSchemes.PRIMARY,
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
            var wn = n(72580),
                jn = n(744530),
                In = n.n(jn);

            function Cn(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a),
                        l = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function Pn(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            Cn(i, r, o, a, c, "next", e)
                        }

                        function c(e) {
                            Cn(i, r, o, a, c, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function Zn(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Tn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Zn(e, t, n[t])
                    }))
                }
                return e
            }

            function xn(e, t) {
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
            var Nn = function(e, t) {
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

            function Rn() {
                return (0, r.jsx)("div", {
                    className: In().footer,
                    children: (0, r.jsx)(a.Button, {
                        color: a.Button.Colors.GREEN,
                        size: a.Button.Sizes.SMALL,
                        className: In().ctaButton,
                        children: A.Z.Messages.OVERLAY_NEWS_GO_LIVE_CTA
                    })
                })
            }
            var An = n(997244),
                Mn = n(621647),
                kn = n(773011),
                Ln = n(840922);
            var Dn = n(57141),
                Vn = n(496916);
            var Bn = n(412732),
                Un = n(716118);
            var Gn = function(e) {
                return X(0, Sn(), A.Z.Messages.OVERLAY_LAUNCH_OPEN_TIP)
            };
            var zn = n(634193),
                Yn = n(334396),
                Hn = n(335072);
            var Fn = n(288263),
                Wn = n(491260),
                Kn = n(436154),
                Xn = n(793461);

            function Qn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Jn(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function qn(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function $n(e) {
                $n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return $n(e)
            }

            function er(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        qn(e, t, n[t])
                    }))
                }
                return e
            }

            function tr(e, t) {
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

            function nr(e, t) {
                return !t || "object" !== cr(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function rr(e, t) {
                rr = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return rr(e, t)
            }

            function or(e) {
                return function(e) {
                    if (Array.isArray(e)) return Qn(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Qn(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Qn(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ir, ar, cr = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function lr(e) {
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
                    var n, r = $n(e);
                    if (t) {
                        var o = $n(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return nr(this, n)
                }
            }! function(e) {
                e[e.GENERIC = 0] = "GENERIC";
                e[e.TEXT = 1] = "TEXT";
                e[e.INCOMING_CALL = 2] = "INCOMING_CALL"
            }(ir || (ir = {}));
            ! function(e) {
                e[e.NORMAL = 0] = "NORMAL";
                e[e.HIGH = 1] = "HIGH";
                e[e.URGENT = 2] = "URGENT"
            }(ar || (ar = {}));
            var sr = 5e3,
                ur = Object.freeze({
                    priority: ar.NORMAL,
                    duration: sr,
                    expirationExternallyManaged: !1,
                    type: ir.GENERIC
                }),
                fr = [],
                dr = function(e, t, n) {
                    var r = t ? ie._1z.TIMED_OUT : ie._1z.DISMISSED;
                    return setTimeout((function() {
                        return j.Z.updateNotificationStatus(e, r)
                    }), null != n ? n : sr)
                };

            function pr(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ie._1z.DISMISSED;
                if (null == e) return !1;
                var n = fr.findIndex((function(t) {
                    return t.id === e
                }));
                if (-1 === n) return !1;
                var r = fr[n];
                clearTimeout(r.timerId);
                fr = or(fr);
                t === ie._1z.DISMISSED ? fr.splice(n, 1) : fr[n] = tr(er({}, r), {
                    status: t
                })
            }

            function hr(e) {
                var t = fr.length;
                return (fr = fr.filter((function(t) {
                    return t.type !== ir.TEXT || t.channelId !== e
                }))).length !== t
            }

            function yr(e) {
                var t = fr.find((function(t) {
                    return t.type === ir.INCOMING_CALL && t.channelId === e
                }));
                return null != t ? t.id : null
            }

            function vr(e, t) {
                var n = er({}, ur, t);
                if (n.priority !== ar.URGENT && !Bt.Z.isInstanceFocused()) return null;
                var r = hn().v4(),
                    o = er({
                        id: r,
                        status: ie._1z.ACTIVE,
                        timerId: dr(r, n.expirationExternallyManaged, n.duration),
                        props: e
                    }, n),
                    i = (fr = or(fr)).findIndex((function(e) {
                        return e.priority <= n.priority
                    })); - 1 === i ? fr.push(o) : fr.splice(i, 0, o);
                if (fr.length > 10) {
                    var a = fr.pop();
                    clearTimeout(a.timerId)
                }
                return r
            }

            function gr(e, t, n) {
                dn()(null != t.activity, "received null message activity");
                if (n.id === Tt.default.getId()) return !1;
                var r, o, i = Lt.Z.getGame();
                if (null == i) return !1;
                switch (t.activity.type) {
                    case ie.mFx.JOIN:
                        if (null == (r = Wn.Z.getApplicationActivity(n.id, i.id)) || null == r.party || r.party.id !== t.activity.party_id) return !1;
                        o = function(e, t, n, r, o) {
                            if (null == t.activity) return null;
                            var i = t.activity.type,
                                a = o.session_id;
                            if (null == a) return null;
                            var c = (0, gn.Xi)(e, t, n),
                                l = c.icon,
                                s = c.title,
                                u = c.body,
                                f = On({
                                    notif_type: "Activity Invite",
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
                                colorScheme: J.ColorSchemes.PRIMARY,
                                icon: l,
                                title: s,
                                body: u,
                                hint: function(e) {
                                    return X(0, Sn(), A.Z.Messages.OVERLAY_UNLOCK_TO_JOIN)
                                },
                                onNotificationShow: function() {
                                    d()
                                },
                                confirmText: A.Z.Messages.JOIN,
                                onConfirmClick: function(o, i) {
                                    vn.Z.join({
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
                        if (null == (r = Kn.Z.getApplicationActivity(i.id)) || null == r.party || r.party.id !== t.activity.party_id) return !1;
                        o = function(e, t, n, r) {
                            var o = t.username,
                                i = A.Z.Messages.USER_ACTIVITY_INVITE_REQUEST_REQUESTED.format({
                                    username: "",
                                    game: n.name
                                }),
                                a = t.getAvatarURL(e.guild_id, 80),
                                c = On({
                                    notif_type: "Activity Invite",
                                    notif_user_id: t.id,
                                    activity_type: ie.mFx.JOIN_REQUEST,
                                    activity_name: n.name
                                }),
                                l = c.trackView,
                                s = c.trackClick;
                            return {
                                colorScheme: J.ColorSchemes.PRIMARY,
                                icon: a,
                                title: o,
                                body: i,
                                hint: function(e) {
                                    return X(0, Sn(), A.Z.Messages.OVERLAY_UNLOCK_TO_ANSWER)
                                },
                                confirmText: A.Z.Messages.USER_ACTIVITY_RESPOND_YEAH,
                                cancelText: A.Z.Messages.USER_ACTIVITY_RESPOND_NOPE,
                                onNotificationShow: function() {
                                    l()
                                },
                                onConfirmClick: function(t, n) {
                                    Dn.Z.sendActivityInvite({
                                        channelId: e.id,
                                        type: ie.mFx.JOIN,
                                        activity: r,
                                        location: Bt.Z.isInstanceUILocked() ? ie.Sbl.LOCKED_OVERLAY : ie.Sbl.UNLOCKED_OVERLAY
                                    });
                                    s("join");
                                    j.Z.updateNotificationStatus(n)
                                },
                                onCancelClick: function(t, n) {
                                    (0, Vn.In)(e.id, !0, !0);
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
                var a = vr(o, {
                    priority: ar.URGENT,
                    expirationExternallyManaged: !0,
                    channelId: e.id
                });
                null != a && dr(a, !1, 3e4);
                return !0
            }

            function br(e) {
                var t = e.channelId,
                    n = e.ringing,
                    r = yr(t);
                if (!n.includes(Tt.default.getId())) return pr(r);
                if (null != r) return !1;
                var o = xt.Z.getChannel(t);
                if (null == o || !o.isPrivate()) return !1;
                if (Kn.Z.getStatus() === ie.Skl.DND) return !1;
                var i = fr.find((function(e) {
                    return e.type === ir.TEXT && e.channelId === t && e.messageType === ie.uaV.CALL
                }));
                null != i && pr(i.id);
                vr(function(e) {
                    var t = (0, kn.F6)(e, Jt.default, Ln.Z),
                        n = A.Z.Messages.OVERLAY_NOTIFICATION_INCOMING_CALL,
                        r = (0, Mn.x)(e),
                        o = On({
                            notif_type: "Incoming Call",
                            notif_user_id: 1 === e.recipients.length ? e.recipients[0] : null,
                            guild_id: e.guild_id,
                            channel_id: e.id,
                            channel_type: e.type
                        }),
                        i = o.trackView,
                        a = o.trackClick;
                    return {
                        colorScheme: J.ColorSchemes.PRIMARY,
                        icon: r,
                        title: t,
                        body: n,
                        hint: function(e) {
                            return X(0, Sn(), A.Z.Messages.OVERLAY_UNLOCK_TO_ANSWER)
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
                            An.Z.stopRinging(e.id);
                            a("decline")
                        },
                        onDismissClick: function() {
                            a("dismiss")
                        }
                    }
                }(o), {
                    priority: ar.HIGH,
                    expirationExternallyManaged: !0,
                    type: ir.INCOMING_CALL,
                    channelId: o.id
                })
            }
            var mr = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && rr(e, t)
                }(n, e);
                var t = lr(n);

                function n() {
                    Jn(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(xt.Z, Jt.default)
                };
                r.getNotifications = function() {
                    return fr
                };
                r.__getLocalVars = function() {
                    return {
                        OverlayNotificationTypes: ir,
                        OverlayNotificationPriorities: ar,
                        NOTIFICATION_TIMEOUT: sr,
                        NEWS_NUDGE_TIMEOUT: 8e3,
                        ACTIVITY_INVITE_DISMISS_TIMEOUT: 3e4,
                        MAX_NOTIFICATIONS: 10,
                        DEFAULT_METADATA: ur,
                        notifications: fr,
                        scheduleTimeout: dr
                    }
                };
                return n
            }(i.ZP.Store);
            mr.displayName = "OverlayNotificationsStore";
            const Or = new mr(yn.Z, __OVERLAY__ ? {
                OVERLAY_UPDATE_NOTIFICATION_STATUS: function(e) {
                    pr(e.notificationId, e.status)
                },
                OVERLAY_MOUNTED: function(e) {
                    var t, o, i, c, l, s, u = e.newsNudge,
                        f = e.goLiveNudge,
                        d = null != f ? function(e) {
                            switch (e.type) {
                                case "go-live":
                                    var t = e.game,
                                        o = e.voiceGuild,
                                        i = On({
                                            notif_type: "Go Live Nudge"
                                        }),
                                        c = i.trackView,
                                        l = i.trackClick;
                                    return {
                                        colorScheme: H.PRIMARY, icon: n(8395), title: null, body: A.Z.Messages.OVERLAY_NEWS_GO_LIVE_BODY.format({
                                            game: t.name,
                                            server: o.toString()
                                        }), hint: function() {
                                            return (0, r.jsx)(Rn, {})
                                        }, renderFooter: function() {
                                            return (0, r.jsx)(Rn, {})
                                        }, onNotificationShow: function() {
                                            c()
                                        }, onNotificationClick: function(e, t) {
                                            l("unlock");
                                            j.Z.updateNotificationStatus(t);
                                            Bt.Z.isInstanceUILocked() && j.Z.setInstanceLocked(!1);
                                            (0, a.openModalLazy)(Pn((function() {
                                                var e, t;
                                                return Nn(this, (function(i) {
                                                    switch (i.label) {
                                                        case 0:
                                                            return [4, Promise.all([n.e(40532), n.e(99656), n.e(47428)]).then(n.bind(n, 699656))];
                                                        case 1:
                                                            e = i.sent(), t = e.default;
                                                            return [2, function(e) {
                                                                return (0, r.jsx)(t, xn(Tn({}, e), {
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
                                case "go-live-2":
                                    var s = e.game,
                                        u = On({
                                            notif_type: "Go Live Non Voice Nudge"
                                        }),
                                        f = u.trackView,
                                        d = u.trackClick;
                                    return {
                                        colorScheme: H.PRIMARY, icon: n(8395), title: null, body: A.Z.Messages.OVERLAY_NEWS_GO_LIVE_BODY_NO_VOICE_CHANNEL.format({
                                            game: s.name
                                        }), hint: function() {
                                            return (0, r.jsx)(Rn, {})
                                        }, renderFooter: function() {
                                            return (0, r.jsx)(Rn, {})
                                        }, onNotificationShow: function() {
                                            f()
                                        }, onNotificationClick: function(e, t) {
                                            d("unlock");
                                            j.Z.updateNotificationStatus(t);
                                            Bt.Z.isInstanceUILocked() && j.Z.setInstanceLocked(!1);
                                            (0, a.openModalLazy)(Pn((function() {
                                                var e, t;
                                                return Nn(this, (function(o) {
                                                    switch (o.label) {
                                                        case 0:
                                                            return [4, Promise.all([n.e(40532), n.e(99656), n.e(47428)]).then(n.bind(n, 699656))];
                                                        case 1:
                                                            e = o.sent(), t = e.default;
                                                            return [2, function(e) {
                                                                return (0, r.jsx)(t, xn(Tn({}, e), {
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
                                    };
                                default:
                                    return (0, wn.vE)(e)
                            }
                        }(f) : (o = null != (t = u) && null != t.icon ? t.icon : n(603008), i = null != t ? t.title : A.Z.Messages.OVERLAY_LAUNCH_TITLE, c = On({
                            notif_type: null != t ? "News Nudge" : "Welcome Nudge"
                        }), l = c.trackView, s = c.trackClick, {
                            colorScheme: null != t ? H.BRAND : H.PRIMARY,
                            icon: o,
                            title: i,
                            body: null != t ? t.body : null,
                            hint: null != t ? t.hint : Gn,
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
                                l()
                            },
                            onNotificationClick: function(e, n) {
                                s("unlock");
                                null == t && j.Z.updateNotificationStatus(n);
                                Bt.Z.isInstanceUILocked() && j.Z.setInstanceLocked(!1)
                            },
                            onDismissClick: function() {
                                s("dismiss")
                            }
                        });
                    vr(d, {
                        priority: ar.URGENT,
                        duration: 8e3
                    })
                },
                OVERLAY_SET_INPUT_LOCKED: function(e) {
                    if (e.locked) return !1;
                    fr = fr.map((function(e) {
                        if (e.status === ie._1z.ACTIVE) {
                            clearTimeout(e.timerId);
                            return tr(er({}, e), {
                                timerId: dr(e.id, e.expirationExternallyManaged)
                            })
                        }
                        return e
                    }))
                },
                MESSAGE_CREATE: function(e) {
                    var t, n, o = e.channelId,
                        i = e.message,
                        a = xt.Z.getChannel(o),
                        c = Jt.default.getUser(i.author.id);
                    if (null == a || null == c) return !1;
                    if ((null === (t = i.activity) || void 0 === t ? void 0 : t.type) === ie.mFx.JOIN || (null === (n = i.activity) || void 0 === n ? void 0 : n.type) === ie.mFx.JOIN_REQUEST) {
                        if (!(0, gn.eF)(i, o, !0, !0)) return !1;
                        var l = gr(a, i, c);
                        if (!1 !== l) return l
                    }
                    if ((!Bt.Z.isInstanceUILocked() || Bt.Z.isPinned(ie.Odu.TEXT)) && o === Mt.Z.getChannelId()) return !1;
                    if (Bt.Z.getTextChatNotificationMode() === ie.Ypu.DISABLED || Xn.Z.disableNotifications || !(0, gn.eF)(i, o)) return !1;
                    vr(function(e, t, n, o) {
                        var i = (0, gn.Xi)(e, t, n),
                            a = i.icon,
                            c = i.title,
                            l = i.body,
                            s = On({
                                notif_type: "Text Chat",
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
                                o && (0, Un.GN)(Bn.Ay, Bn.yk);
                                u()
                            },
                            onNotificationClick: function() {
                                (0, P.uL)(ie.Z5c.CHANNEL(e.guild_id, e.id));
                                f("jump");
                                Bt.Z.isInstanceUILocked() && j.Z.setInstanceLocked(!1)
                            },
                            onDismissClick: function() {
                                f("dismiss")
                            }
                        }
                    }(a, i, c, !Fn.Z.isSoundDisabled(Bn.Ay)), {
                        type: ir.TEXT,
                        channelId: a.id,
                        messageType: i.type
                    })
                },
                CHANNEL_SELECT: function(e) {
                    var t = e.channelId;
                    return null != t && hr(t)
                },
                MESSAGE_ACK: function(e) {
                    return hr(e.channelId)
                },
                CALL_CREATE: br,
                CALL_UPDATE: br,
                CALL_DELETE: function(e) {
                    pr(yr(e.channelId))
                },
                ACTIVITY_USER_ACTION: function(e) {
                    var t, n = e.actionType,
                        r = e.user,
                        o = e.applicationId,
                        i = Lt.Z.getGame();
                    if (null == i || i.id !== o) return !1;
                    if (n === ie.mFx.JOIN) t = _n(r, i);
                    if (null == t) return !1;
                    vr(t, {
                        priority: ar.URGENT,
                        type: ir.GENERIC
                    })
                },
                CLIPS_SAVE_CLIP: function() {
                    vr((e = On({
                        notif_type: "Clips Notification"
                    }), t = e.trackView, n = e.trackClick, {
                        colorScheme: H.PRIMARY,
                        title: A.Z.Messages.CLIPS_NOTIFICATION_TITLE.format({
                            duration: (0, Yn.A)(Hn.Z.getSettings().clipsLength / 1e3, !0)
                        }),
                        icon: (0, r.jsx)(zn.Z, {}),
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
                        var e = On({
                                notif_type: "Clips Reminder Notification"
                            }),
                            t = e.trackView,
                            n = e.trackClick,
                            o = Vt.Z.getKeybindForAction(ie.kg4.SAVE_CLIP);
                        if (null == o) return null;
                        var i = zt.BB(o.shortcut, !0);
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
                            icon: (0, r.jsx)(zn.Z, {}),
                            onNotificationShow: function() {
                                t()
                            },
                            onDismissClick: function() {
                                n("dismiss")
                            }
                        }
                    }();
                    null != t && vr(t)
                }
            } : {});
            var Sr = n(853158),
                Er = n(729710),
                _r = n.n(Er);

            function wr(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function jr(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Ir(e) {
                Ir = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Ir(e)
            }

            function Cr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        jr(e, t, n[t])
                    }))
                }
                return e
            }

            function Pr(e, t) {
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

            function Zr(e, t) {
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

            function Tr(e, t) {
                return !t || "object" !== Nr(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function xr(e, t) {
                xr = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return xr(e, t)
            }
            var Nr = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Rr(e) {
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
                    var n, r = Ir(e);
                    if (t) {
                        var o = Ir(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Tr(this, n)
                }
            }
            var Ar = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && xr(e, t)
                }(n, e);
                var t = Rr(n);

                function n() {
                    wr(this, n);
                    var e;
                    (e = t.apply(this, arguments)).translateX = new Sr.Z.Value(0);
                    e.translateY = new Sr.Z.Value(0);
                    e.scale = new Sr.Z.Value(1);
                    e.opacity = new Sr.Z.Value(1);
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
                        u = Zr(e.props.notification.props, ["onNotificationShow", "onDismissClick", "onNotificationClick", "onConfirmClick", "onCancelClick"]),
                        f = (0, r.jsx)(Sr.Z.div, {
                            className: _r().animationContainer,
                            style: this.getStyle(),
                            children: (0, r.jsx)(J, Pr(Cr({}, u), {
                                onNotificationShow: s && 0 === o ? this.handleNotificationShow : null,
                                onDismissClick: this.handleDismissClick,
                                onNotificationClick: null != a ? this.handleNotificationClick : null,
                                onConfirmClick: null != c ? this.handleConfirmClick : null,
                                onCancelClick: null != l ? this.handleCancelClick : null,
                                expand: !n && 0 === o,
                                disabled: 0 !== o
                            }))
                        });
                    return 0 === o ? (0, r.jsx)(Xe, {
                        observeInterval: 200,
                        children: f
                    }) : f
                };
                return n
            }(o.Component);
            const Mr = Ar;
            var kr = n(583717),
                Lr = n.n(kr);

            function Dr(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Vr(e) {
                Vr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Vr(e)
            }

            function Br(e, t) {
                return !t || "object" !== Gr(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Ur(e, t) {
                Ur = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Ur(e, t)
            }
            var Gr = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function zr(e) {
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
                    var n, r = Vr(e);
                    if (t) {
                        var o = Vr(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Br(this, n)
                }
            }
            var Yr = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Ur(e, t)
                }(n, e);
                var t = zr(n);

                function n() {
                    Dr(this, n);
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
                    return (0, r.jsx)(un.Z, {
                        component: "div",
                        className: m()(Lr().container, Lr()[o]),
                        children: n.map((function(e) {
                            if (i && e.status === ie._1z.TIMED_OUT) return null;
                            a += 1;
                            return (0, r.jsx)(Mr, {
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
            const Hr = i.ZP.connectStores([Or, Bt.Z], (function() {
                return {
                    notifications: Or.getNotifications(),
                    position: Bt.Z.getNotificationPositionMode()
                }
            }))(Yr);
            var Fr = n(477101);

            function Wr(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Kr(e) {
                Kr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Kr(e)
            }

            function Xr(e, t) {
                return !t || "object" !== Jr(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Qr(e, t) {
                Qr = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Qr(e, t)
            }
            var Jr = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function qr(e) {
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
                    var n, r = Kr(e);
                    if (t) {
                        var o = Kr(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Xr(this, n)
                }
            }
            var $r = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Qr(e, t)
                }(n, e);
                var t = qr(n);

                function n() {
                    Wr(this, n);
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
            const eo = $r;
            var to = n(117112),
                no = n(66121),
                ro = n(983530),
                oo = n.n(ro);

            function io(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function ao(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function co(e) {
                co = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return co(e)
            }

            function lo(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        ao(e, t, n[t])
                    }))
                }
                return e
            }

            function so(e, t) {
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

            function uo(e, t) {
                return !t || "object" !== po(t) && "function" != typeof t ? io(e) : t
            }

            function fo(e, t) {
                fo = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return fo(e, t)
            }
            var po = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function ho(e) {
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
                    var n, r = co(e);
                    if (t) {
                        var o = co(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return uo(this, n)
                }
            }
            var yo;
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
            }(yo || (yo = {}));
            var vo = new Set([yo.RESIZE_NORTH, yo.RESIZE_WEST, yo.RESIZE_EAST, yo.RESIZE_SOUTH, yo.RESIZE_NORTH_WEST, yo.RESIZE_NORTH_EAST, yo.RESIZE_SOUTH_WEST, yo.RESIZE_SOUTH_EAST]);

            function go(e, t, n) {
                var r = e.width,
                    o = e.height;
                return {
                    width: "auto" === r ? "auto" : Math.max(t, r),
                    height: "auto" === o ? "auto" : Math.max(n, o)
                }
            }

            function bo(e) {
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

            function mo(e) {
                return "auto" === e || null == e ? "auto" : "".concat(e, "px")
            }

            function Oo(e, t) {
                return {
                    width: "auto" === t.width ? null != e ? e.clientWidth : 0 : t.width,
                    height: "auto" === t.height ? null != e ? e.clientHeight : 0 : t.height
                }
            }

            function So(e, t) {
                var n = t.top,
                    r = t.left,
                    o = t.bottom,
                    i = t.right;
                switch (e) {
                    case yo.RESIZE_EAST:
                    case yo.RESIZE_NORTH_EAST:
                    case yo.RESIZE_NORTH:
                        return {
                            bottom: o, left: r, right: null, top: null
                        };
                    case yo.RESIZE_WEST:
                    case yo.RESIZE_NORTH_WEST:
                        return {
                            bottom: o, right: i, left: null, top: null
                        };
                    case yo.RESIZE_SOUTH_EAST:
                        return {
                            top: n, left: r, bottom: null, right: null
                        };
                    case yo.RESIZE_SOUTH:
                    case yo.RESIZE_SOUTH_WEST:
                        return {
                            top: n, right: i, bottom: null, left: null
                        };
                    default:
                        throw new Error("getOrientedCoords: Invalid orientation: ".concat(e))
                }
            }
            var Eo = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && fo(e, t)
                }(n, e);
                var t = ho(n);

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
                        null != r.ref.current && e.button === ie.AeJ.PRIMARY && t && r.handleOperationStart(yo.MOVE, e.clientX, e.clientY)
                    };
                    r.handleMouseMove = function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        var t = e.clientX,
                            n = e.clientY,
                            o = io(r),
                            i = o.dragState,
                            a = i.startX,
                            c = i.startY,
                            l = o.state,
                            s = l.operation,
                            u = l.operationStarted;
                        if (!(null == s || !u && (f = a, d = c, p = t, h = n, Math.pow(f - p, 2) + Math.pow(d - h, 2)) < 3)) {
                            var f, d, p, h;
                            s === yo.MOVE ? r.handleDragMove(t, n) : vo.has(s) && r.handleResizeMove(t, n)
                        }
                    };
                    r.handleOperationStart = function(e, t, n) {
                        var o = io(r),
                            i = o.ref.current,
                            a = o.props,
                            c = a.active,
                            l = a.container,
                            s = l.maxX,
                            u = l.maxY;
                        if (null != i && c) {
                            var f = Oo(i, r.size),
                                d = f.width,
                                p = f.height,
                                h = (0, no.PY)(r.anchor, s, u, d, p);
                            if (e === yo.MOVE) {
                                var y = function(e) {
                                        var t = e.top;
                                        return {
                                            x: e.left,
                                            y: t
                                        }
                                    }(h),
                                    v = y.x,
                                    g = y.y;
                                r.dragState = so(lo({}, r.dragState), {
                                    startX: t,
                                    startY: n,
                                    offsetX: t - v,
                                    offsetY: n - g
                                })
                            } else {
                                var b = So(e, h);
                                r.setDOMPositions(b);
                                r.dragState = so(lo({}, r.dragState), {
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
                            n(t, o, r.anchor, r.size, Oo(r.ref.current, r.size))
                        } : void 0;
                        if (n) {
                            var a = r.props.container,
                                c = a.maxX,
                                l = a.maxY,
                                s = Oo(r.ref.current, r.size),
                                u = s.width,
                                f = s.height,
                                d = (0, no.PY)(r.anchor, c, l, u, f),
                                p = (0, no.R)(d);
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
                    r.anchor = bo(e.anchor);
                    r.size = go(e.size, e.minSize.width, e.minSize.height);
                    return r
                }
                var i = n.prototype;
                i.shouldComponentUpdate = function(e, t) {
                    return !((0, Ne.Z)(t, this.state) && (0, Ne.Z)(e, this.props, ["anchor", "size", "minSize", "container"]) && (0, Ne.Z)(e.anchor, this.props.anchor) && (0, Ne.Z)(e.size, this.props.size) && (0, Ne.Z)(e.minSize, this.props.minSize) && (0, Ne.Z)(e.container, this.props.container))
                };
                i.componentDidUpdate = function(e, t) {
                    if (null == t.operation) {
                        (0, Ne.Z)(this.props.anchor, e.anchor) || this.setDOMPositions(bo(this.props.anchor));
                        (0, Ne.Z)(this.props.size, e.size) || this.setDOMSize(go(this.props.size, this.props.minSize.width, this.props.minSize.height))
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
                    var b = Oo(r, this.size),
                        m = b.width,
                        O = b.height,
                        S = t - v,
                        E = e - y,
                        _ = (0, no.ou)((0, no.PY)({
                            top: S,
                            left: E,
                            bottom: null,
                            right: null
                        }, c, l, m, O)),
                        w = p ? (0, no.R)(_) : So(yo.RESIZE_SOUTH_EAST, _);
                    this.setDOMPositions(w);
                    if (!g) {
                        null != f && f();
                        this.setState({
                            operationStarted: !0
                        })
                    }
                    null != d && d(i, yo.MOVE, this.anchor, this.size)
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
                        m = y.offsetHeight,
                        O = 0,
                        S = 0;
                    if (null != p) {
                        e = Math.max(Math.min(a, e), l);
                        t = Math.max(Math.min(c, t), s);
                        switch (p) {
                            case yo.RESIZE_EAST:
                            case yo.RESIZE_SOUTH_EAST:
                            case yo.RESIZE_NORTH_EAST:
                                O -= v - e;
                                break;
                            case yo.RESIZE_WEST:
                            case yo.RESIZE_SOUTH_WEST:
                            case yo.RESIZE_NORTH_WEST:
                                O += v - e
                        }
                        switch (p) {
                            case yo.RESIZE_SOUTH:
                            case yo.RESIZE_SOUTH_WEST:
                            case yo.RESIZE_SOUTH_EAST:
                                S -= g - t;
                                break;
                            case yo.RESIZE_NORTH:
                            case yo.RESIZE_NORTH_WEST:
                            case yo.RESIZE_NORTH_EAST:
                                S += g - t
                        }
                        b = Math.max(b + O, o.width);
                        m = Math.max(m + S, o.height);
                        this.setDOMSize({
                            width: b,
                            height: m
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
                        i.style.top = mo(t);
                        i.style.bottom = mo(r);
                        i.style.left = mo(n);
                        i.style.right = mo(o)
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
                        r.style.width = mo(t);
                        r.style.height = mo(n)
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
                                className: m()(oo().resizeNorth, ao({}, oo().resizeNSCursor, a)),
                                onMouseDown: function(t) {
                                    return e.handleResizeMouseDown(t, yo.RESIZE_NORTH)
                                }
                            }), (0, r.jsx)("div", {
                                className: m()(oo().resizeSouth, ao({}, oo().resizeNSCursor, a)),
                                onMouseDown: function(t) {
                                    return e.handleResizeMouseDown(t, yo.RESIZE_SOUTH)
                                }
                            })]
                        }) : null, i ? (0, r.jsxs)(o.Fragment, {
                            children: [(0, r.jsx)("div", {
                                className: m()(oo().resizeEast, ao({}, oo().resizeEWCursor, a)),
                                onMouseDown: function(t) {
                                    return e.handleResizeMouseDown(t, yo.RESIZE_EAST)
                                }
                            }), (0, r.jsx)("div", {
                                className: m()(oo().resizeWest, ao({}, oo().resizeEWCursor, a)),
                                onMouseDown: function(t) {
                                    return e.handleResizeMouseDown(t, yo.RESIZE_WEST)
                                }
                            })]
                        }) : null, i && n ? (0, r.jsxs)(o.Fragment, {
                            children: [(0, r.jsx)("div", {
                                className: m()(oo().resizeNorthWest, ao({}, oo().resizeNWSECursor, a)),
                                onMouseDown: function(t) {
                                    return e.handleResizeMouseDown(t, yo.RESIZE_NORTH_WEST)
                                }
                            }), (0, r.jsx)("div", {
                                className: m()(oo().resizeNorthEast, ao({}, oo().resizeNESWCursor, a)),
                                onMouseDown: function(t) {
                                    return e.handleResizeMouseDown(t, yo.RESIZE_NORTH_EAST)
                                }
                            }), (0, r.jsx)("div", {
                                className: m()(oo().resizeSouthWest, ao({}, oo().resizeNESWCursor, a)),
                                onMouseDown: function(t) {
                                    return e.handleResizeMouseDown(t, yo.RESIZE_SOUTH_WEST)
                                }
                            }), (0, r.jsx)("div", {
                                className: m()(oo().resizeSouthEast, ao({}, oo().resizeNWSECursor, a)),
                                onMouseDown: function(t) {
                                    return e.handleResizeMouseDown(t, yo.RESIZE_SOUTH_EAST)
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
                        style: lo({}, u, s, l, null != d ? {
                            zIndex: 1e3
                        } : void 0, i ? {
                            visibility: "hidden"
                        } : void 0),
                        className: m()((e = {}, ao(e, oo().wrapper, !0), ao(e, oo().operation, p), e)),
                        onMouseDown: this.handleMouseDown,
                        onClick: null != a ? function() {
                            return a(c)
                        } : void 0,
                        children: [o(this.handleOperationStart), this.renderResizeHandles()]
                    })
                };
                return n
            }(o.Component);
            Eo.Operations = yo;
            Eo.defaultProps = {
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
            const _o = Eo;
            var wo = n(945675),
                jo = n(248088),
                Io = n(792640),
                Co = n(933954),
                Po = n(201441),
                Zo = n(453963),
                To = n(63054),
                xo = n(628486),
                No = n(968968),
                Ro = n(996077),
                Ao = n(953727),
                Mo = n(877475),
                ko = n(813869),
                Lo = n(9430),
                Do = n(602397),
                Vo = n(466317),
                Bo = n(630395),
                Uo = n(592618),
                Go = n.n(Uo);

            function zo(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Yo(e) {
                Yo = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Yo(e)
            }

            function Ho(e, t) {
                return !t || "object" !== Ko(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Fo(e, t) {
                Fo = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Fo(e, t)
            }
            var Wo, Ko = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Xo(e) {
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
                    var n, r = Yo(e);
                    if (t) {
                        var o = Yo(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Ho(this, n)
                }
            }! function(e) {
                e.GENERAL = "GENERAL";
                e.VOICE = "VOICE"
            }(Wo || (Wo = {}));

            function Qo() {
                var e = Bt.Z.getNotificationPositionMode(),
                    t = e !== ie._vf.DISABLED,
                    n = Vt.Z.getOverlayKeybind(),
                    r = Vt.Z.getOverlayChatKeybind();
                j.Z.track(ie.rMx.OVERLAY_SETTINGS_UPDATED, {
                    enabled: !0,
                    notifications_enabled: t,
                    notifications_position: t ? e : null,
                    text_notifications_mode: Bt.Z.getTextChatNotificationMode(),
                    text_opacity_slider: Bt.Z.getTextWidgetOpacity(),
                    hotkey: null != n ? (0, zt.BB)(n.shortcut) : null,
                    text_activation_hotkey: null != r ? (0, zt.BB)(r.shortcut) : null
                })
            }
            var Jo = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Fo(e, t)
                }(n, e);
                var t = Xo(n);

                function n() {
                    zo(this, n);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        selectedSection: Wo.GENERAL
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
                        Qo()
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
                    Qo()
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
                    return (0, r.jsxs)(Gt.Z, {
                        direction: Gt.Z.Direction.VERTICAL,
                        grow: 0,
                        shrink: 0,
                        className: Go().header,
                        children: [(0, r.jsxs)(Gt.Z, {
                            children: [(0, r.jsx)(a.FormTitle, {
                                className: Go().headerTitle,
                                tag: "h1",
                                children: A.Z.Messages.OVERLAY_SETTINGS_TITLE
                            }), (0, r.jsx)(a.ModalCloseButton, {
                                className: Go().headerClose,
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
                        className: Go().tabBar,
                        onItemSelect: this.handleSelectSection,
                        children: [(0, r.jsx)(a.TabBar.Item, {
                            id: Wo.GENERAL,
                            className: Go().tabBarItem,
                            children: A.Z.Messages.OVERLAY_SETTINGS_GENERAL_TAB
                        }), (0, r.jsx)(a.TabBar.Item, {
                            id: Wo.VOICE,
                            className: Go().tabBarItem,
                            children: A.Z.Messages.OVERLAY_SETTINGS_VOICE_TAB
                        })]
                    })
                };
                i.renderBody = function() {
                    var e, t = this.state.selectedSection;
                    switch (t) {
                        case Wo.VOICE:
                            e = this.renderVoiceSettings();
                            break;
                        case Wo.GENERAL:
                        default:
                            e = this.renderGeneralSettings()
                    }
                    return (0, r.jsx)(a.ModalContent, {
                        className: Go().content,
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
                            className: D().marginBottom20,
                            children: (0, r.jsx)(Bo.Z, {
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
                            className: D().marginBottom20,
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
                            className: D().marginBottom20,
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
                            className: D().marginBottom20,
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
            const qo = i.ZP.connectStores([Bt.Z], (function() {
                return {
                    avatarSizeMode: Bt.Z.getAvatarSizeMode(),
                    displayNameMode: Bt.Z.getDisplayNameMode(),
                    displayUserMode: Bt.Z.getDisplayUserMode(),
                    notificationPositionMode: Bt.Z.getNotificationPositionMode(),
                    textChatNotificationMode: Bt.Z.getTextChatNotificationMode()
                }
            }))(Jo);
            var $o = n(237682),
                ei = n.n($o);

            function ti(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ni(e, t) {
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
            const ri = function(e) {
                var t, n = e.title,
                    o = e.header,
                    i = e.children,
                    c = e.renderSettings,
                    l = e.onDragStart;
                t = null != n ? (0, r.jsxs)(Ie.Bar, {
                    className: m()(ei().header, ei().draggableStartArea),
                    onMouseDown: l,
                    children: [(0, r.jsx)(Ie.Content, {
                        className: m()(ei().headerTitle, ei().draggableStartArea),
                        dynamicSize: !0,
                        children: n
                    }), (0, r.jsx)(Ie.Content, {
                        children: (0, r.jsx)(a.Popout, {
                            position: "right",
                            renderPopout: null != c ? c : ie.dG4,
                            autoInvert: !1,
                            children: function(e) {
                                return (0, r.jsx)(Ie.Icon, ni(function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                                        }))));
                                        r.forEach((function(t) {
                                            ti(e, t, n[t])
                                        }))
                                    }
                                    return e
                                }({}, e), {
                                    icon: Vo.Z,
                                    label: A.Z.Messages.SETTINGS
                                }))
                            }
                        })
                    })]
                }) : o;
                return (0, r.jsxs)("div", {
                    className: ei().sidebar,
                    children: [t, (0, r.jsx)("div", {
                        className: ei().children,
                        children: i
                    })]
                })
            };
            var oi = n(485911),
                ii = n(819177),
                ai = n.n(ii);

            function ci(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function li(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function si(e) {
                si = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return si(e)
            }

            function ui(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        li(e, t, n[t])
                    }))
                }
                return e
            }

            function fi(e, t) {
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

            function di(e, t) {
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

            function pi(e, t) {
                return !t || "object" !== yi(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function hi(e, t) {
                hi = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return hi(e, t)
            }
            var yi = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function vi(e) {
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
                    var n, r = si(e);
                    if (t) {
                        var o = si(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return pi(this, n)
                }
            }
            var gi = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && hi(e, t)
                }(n, e);
                var t = vi(n);

                function n() {
                    ci(this, n);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        controller: new jo.Controller({
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
                        t = Ao.Z.getGuildDimensions(e).scrollTop;
                    this.setAnimatedValue(null != t ? t : 0)
                };
                o.componentDidUpdate = function(e) {
                    var t = this.props,
                        n = t.guild,
                        r = t.guildId;
                    if (e.guild !== n) {
                        var o = Ao.Z.getGuildDimensions(r).scrollTop;
                        this.setAnimatedValue(null != o ? o : 0)
                    }
                };
                o.renderSettings = function(e) {
                    var t = e.closePopout;
                    return (0, r.jsx)(qo, {
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
                        n = di(e, ["onDragStart"]),
                        o = n.guild,
                        i = this.state,
                        c = i.controller,
                        l = i.renderBanner,
                        s = i.bannerVisible,
                        u = i.communityInfoVisible,
                        f = o.id === oi._ ? Zo.j : Zo.E;
                    return (0, r.jsxs)(ri, {
                        header: (0, r.jsx)(To.ZP, {
                            guild: o,
                            controller: c,
                            renderBanner: l,
                            bannerVisible: s,
                            className: ai().guildHeader,
                            headerClassName: ai().guildHeaderInner,
                            onMouseDown: t,
                            disableBannerAnimation: !1,
                            communityInfoVisible: u,
                            children: (0, r.jsx)(a.Popout, {
                                position: "right",
                                renderPopout: this.renderSettings,
                                children: function(e) {
                                    return (0, r.jsx)(Ie.Icon, ui({
                                        icon: Vo.Z,
                                        label: A.Z.Messages.SETTINGS
                                    }, e))
                                }
                            })
                        }),
                        children: [(0, r.jsx)("div", {
                            className: ai().channelList,
                            children: (0, r.jsx)(f, fi(ui({}, n), {
                                guild: o,
                                disableManageChannels: !0,
                                onScroll: null != o && null != o.banner ? this.handleScroll : null
                            }))
                        }), (0, r.jsx)("section", {
                            className: ai().panels,
                            "aria-label": A.Z.Messages.ACCOUNT_A11Y_LABEL,
                            children: (0, r.jsx)(Io.Z, {
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

            function bi(e) {
                var t, n = e.guildId,
                    o = (0, i.e7)([Nt.Z], (function() {
                        return Nt.Z.getGuild(n)
                    })),
                    a = (0, i.e7)([Wt.ZP], (function() {
                        return Wt.ZP.getChannels(n)
                    })),
                    c = (0, i.e7)([Mo.Z], (function() {
                        return Mo.Z.getCategories(n)
                    })),
                    l = (0, i.cj)([Lo.Z], (function() {
                        return {
                            mutedChannels: Lo.Z.getMutedChannels(n),
                            collapseMuted: Lo.Z.isGuildCollapsed(n)
                        }
                    })),
                    s = l.mutedChannels,
                    u = l.collapseMuted,
                    f = (0, i.e7)([Do.ZP], (function() {
                        return Do.ZP.getVoiceStates(n)
                    })),
                    d = (0, i.e7)([Ro.Z], (function() {
                        return Ro.Z.getCollapsed()
                    })),
                    p = (0, i.e7)([Ao.Z], (function() {
                        return Ao.Z.getGuildDimensions(n)
                    })).scrollTo,
                    h = (0, xo.Z)((function(e) {
                        return e.channelId
                    })),
                    y = (0, i.e7)([Mt.Z], (function() {
                        return Mt.Z.getVoiceChannelId()
                    })),
                    v = (0, i.e7)([Xt.Z], (function() {
                        return Xt.Z.getGuildVersion(n)
                    })),
                    g = (0, i.e7)([No.Z], (function() {
                        return No.Z.version
                    })),
                    b = (0, i.e7)([ko.Z], (function() {
                        return ko.Z.getGuildChangeSentinel(n)
                    })),
                    m = (0, Co.QN)(null == o ? void 0 : o.id),
                    O = (0,
                        Po.gM)(null == o ? void 0 : o.id),
                    S = null !== (t = null == o ? void 0 : o.hasFeature(ie.oNc.COMMUNITY)) && void 0 !== t && t;
                return (0, r.jsx)(gi, {
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
                    embeddedAppsByChannel: m,
                    activeEventsByChannel: O,
                    showNewUnreadsBar: S,
                    optInEnabled: !1
                })
            }
            var mi = n(284952),
                Oi = n(956485),
                Si = n(705652),
                Ei = n.n(Si),
                _i = function() {
                    return (0, Oi.$Z)("DM_SEARCH")
                };

            function wi() {
                var e = (0, i.e7)([Bt.Z], (function() {
                        return Bt.Z.isUILocked((0, Ze.QF)()) ? "true" : "false"
                    })),
                    t = (0, xo.Z)((function(e) {
                        return e.channelId
                    }));
                return (0, r.jsxs)("div", {
                    className: Ei().privateChannels,
                    children: [(0, r.jsx)("div", {
                        className: Ei().searchBar,
                        children: (0, r.jsx)("button", {
                            type: "button",
                            className: Ei().searchBarComponent,
                            onClick: _i,
                            children: A.Z.Messages.DM_SEARCH_PLACEHOLDER
                        })
                    }), (0, r.jsx)(mi.Z, {
                        padding: 8,
                        theme: ie.BRd.DARK,
                        version: e,
                        selectedChannelId: t
                    }), (0, r.jsx)("section", {
                        className: Ei().panels,
                        "aria-label": A.Z.Messages.ACCOUNT_A11Y_LABEL,
                        children: (0, r.jsx)(Io.Z, {
                            guildId: null
                        })
                    })]
                })
            }
            const ji = o.memo(wi);
            var Ii = n(351394),
                Ci = n.n(Ii);

            function Pi(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Zi(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Ti(e) {
                Ti = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Ti(e)
            }

            function xi(e, t) {
                return !t || "object" !== Ri(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Ni(e, t) {
                Ni = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Ni(e, t)
            }
            var Ri = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Ai(e) {
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
                    var n, r = Ti(e);
                    if (t) {
                        var o = Ti(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return xi(this, n)
                }
            }

            function Mi(e) {
                var t = e.closePopout;
                return (0, r.jsx)(qo, {
                    onClose: t
                })
            }
            var ki = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Ni(e, t)
                }(n, e);
                var t = Ai(n);

                function n() {
                    Pi(this, n);
                    var e;
                    (e = t.apply(this, arguments)).onDragStart = function(t) {
                        (0, e.props.dragStart)(yo.MOVE, t.clientX, t.clientY)
                    };
                    return e
                }
                n.prototype.render = function() {
                    var e = this.props,
                        t = e.selectedGuildId,
                        n = e.locked,
                        o = e.contained,
                        i = null != t ? (0, r.jsx)(bi, {
                            guildId: t,
                            onDragStart: this.onDragStart
                        }, t) : (0, r.jsx)(ri, {
                            title: A.Z.Messages.DIRECT_MESSAGES,
                            renderSettings: Mi,
                            onDragStart: this.onDragStart,
                            children: (0, r.jsx)(ji, {})
                        }),
                        a = o ? "div" : Ie;
                    return (0, r.jsxs)(a, {
                        className: m()(Ci().base, Zi({}, Ci().widget, !o)),
                        children: [(0, r.jsx)(wo.Z, {
                            isOverlay: !0,
                            disableAppDownload: !0,
                            isVisible: !n
                        }), i]
                    })
                };
                return n
            }(o.PureComponent);
            ki.defaultProps = {
                contained: !1
            };
            const Li = i.ZP.connectStores([Qt.Z], (function() {
                return {
                    selectedGuildId: Qt.Z.getGuildId()
                }
            }))(ki);
            var Di = n(943469),
                Vi = n(716239),
                Bi = n(224134),
                Ui = n(594411),
                Gi = n(771145),
                zi = n(301011),
                Yi = n(753261),
                Hi = n(531304),
                Fi = n(37707),
                Wi = n(704271),
                Ki = n(428107),
                Xi = n(281808),
                Qi = n(855483),
                Ji = n(341458),
                qi = n(963058),
                $i = n(30027),
                ea = n(455452),
                ta = n(28862),
                na = n(798808),
                ra = n(284610),
                oa = n(747126),
                ia = n(352980),
                aa = n(330484),
                ca = n(930948),
                la = n(476770),
                sa = n(122253);
            var ua = n(116404),
                fa = n(412448),
                da = n(641283),
                pa = n(382060),
                ha = n(610773),
                ya = n(164760),
                va = n(419348),
                ga = n(460490);

            function ba(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ma(e, t) {
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

            function Oa(e, t) {
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

            function Sa(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    a = e.color,
                    c = void 0 === a ? "currentColor" : a,
                    l = e.foreground,
                    s = Oa(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", ma(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            ba(e, t, n[t])
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
            }
            var Ea = n(467853),
                _a = n(552675),
                wa = n(443812);

            function ja(e) {
                switch (e) {
                    case sa.wF.BOTTOM:
                        return sa.wF.BOTTOM;
                    case sa.wF.LOWER:
                        return sa.wF.LOWER;
                    case sa.wF.UPPER:
                        return sa.wF.UPPER;
                    default:
                        return sa.wF.TOP
                }
            }
            var Ia = n(516398),
                Ca = n.n(Ia);

            function Pa(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Za(e) {
                Za = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Za(e)
            }

            function Ta(e, t) {
                return !t || "object" !== Na(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function xa(e, t) {
                xa = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return xa(e, t)
            }
            var Na = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Ra(e) {
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
                    var n, r = Za(e);
                    if (t) {
                        var o = Za(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Ta(this, n)
                }
            }
            var Aa = Object.values(sa.wF).map((function(e) {
                    return 100 * e
                })),
                Ma = (0, wa.hQ)(),
                ka = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && xa(e, t)
                    }(n, e);
                    var t = Ra(n);

                    function n() {
                        Pa(this, n);
                        var e;
                        (e = t.apply(this, arguments)).initialValue = 100 * e.props.opacity;
                        return e
                    }
                    var o = n.prototype;
                    o.handleUpdateBackgroundOpacity = function(e) {
                        j.Z.setTextWidgetOpacity(ja(e / 100));
                        j.Z.track(ie.rMx.OVERLAY_SETTINGS_UPDATED, {
                            text_opacity_slider: e
                        })
                    };
                    o.handlePreviewBackgroundOpacity = function(e) {
                        j.Z.setTextWidgetOpacity(ja(e / 100))
                    };
                    o.render = function() {
                        return (0, r.jsxs)("div", {
                            className: Ca().container,
                            children: [(0, r.jsx)(a.FormTitle, {
                                id: Ma,
                                tag: a.FormTitleTags.H5,
                                className: Ca().title,
                                children: A.Z.Messages.FORM_LABEL_OVERLAY_CHAT_OPACITY
                            }), (0, r.jsx)("div", {
                                className: Ca().sliderContainer,
                                children: (0, r.jsx)(a.Slider, {
                                    mini: !0,
                                    initialValue: this.initialValue,
                                    defaultValue: this.initialValue,
                                    minValue: Aa[0],
                                    maxValue: Aa[Aa.length - 1],
                                    handleSize: 10,
                                    onValueChange: this.handleUpdateBackgroundOpacity,
                                    asValueChanges: this.handlePreviewBackgroundOpacity,
                                    markers: Aa,
                                    onMarkerRender: ie.dG4,
                                    equidistant: !0,
                                    stickToMarkers: !0,
                                    "aria-labelledby": Ma
                                })
                            })]
                        })
                    };
                    return n
                }(o.PureComponent);
            const La = i.ZP.connectStores([Bt.Z], (function() {
                return {
                    opacity: Bt.Z.getTextWidgetOpacity()
                }
            }))(ka);
            var Da = n(648108),
                Va = n.n(Da);

            function Ba(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Ua(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Ga(e) {
                Ga = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Ga(e)
            }

            function za(e, t) {
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

            function Ya(e, t) {
                return !t || "object" !== Fa(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Ha(e, t) {
                Ha = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Ha(e, t)
            }
            var Fa = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Wa(e) {
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
                    var n, r = Ga(e);
                    if (t) {
                        var o = Ga(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Ya(this, n)
                }
            }
            var Ka = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Ha(e, t)
                }(n, e);
                var t = Wa(n);

                function n() {
                    Ba(this, n);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        showOpacitySlider: !1
                    };
                    e.handleClickCall = function(t) {
                        var n = e.props,
                            r = n.channel,
                            o = n.userIsInChannelCall,
                            i = n.channelHasActiveCall;
                        if (i) o ? ua.default.selectVoiceChannel(null) : j.Z.callPrivateChannel(r.id, !1);
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
                            children: [e.renderCallButton(), a ? (0, r.jsx)(fa.Z.Icon, {
                                icon: Sa,
                                tooltip: A.Z.Messages.FORM_LABEL_OVERLAY_CHAT_OPACITY,
                                onClick: e.handleOpenOpacitySettings
                            }) : null, (0, r.jsx)(fa.Z.Icon, {
                                icon: a ? _a.Z : Ea.Z,
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
                    if (!(0,
                            pa.hv)(o.type)) return null;
                    var s = ya.Z,
                        u = !1;
                    if (i)
                        if (c) {
                            e = A.Z.Messages.LEAVE_CALL;
                            s = va.Z
                        } else e = A.Z.Messages.JOIN_CALL;
                    else if (l) {
                        e = A.Z.Messages.CALL_UNAVAILABLE_BLOCKED_USERS;
                        t = a.Tooltip.Colors.RED;
                        u = !0
                    } else e = A.Z.Messages.START_VOICE_CALL;
                    return (0, r.jsx)(fa.Z.Icon, {
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
                        className: Va().opacityHeader,
                        children: [(0, r.jsx)(La, {}), (0, r.jsx)(fa.Z.Icon, {
                            icon: R.Z,
                            onClick: this.handleCloseOpacitySettings,
                            tooltip: A.Z.Messages.CLOSE
                        })]
                    }) : (0, r.jsx)(Ie.Background, {
                        opacityOverride: d,
                        children: (0, r.jsx)("div", {
                            className: m()(t, n, Va().headerContainer),
                            onMouseDown: l,
                            onContextMenu: s,
                            children: (0, r.jsxs)(fa.Z, {
                                guildId: i.guild_id,
                                channelId: i.id,
                                toolbar: this.renderWidgetButtons(),
                                transparent: !0,
                                children: [u || o || f ? null : (0, r.jsx)(ga.Z, {
                                    className: m()(Va().dragIcon, n),
                                    width: 20,
                                    height: 20
                                }), (0, da.ud)({
                                    channel: i,
                                    channelName: a
                                }), o ? null : (0, da.v0)(i, c)]
                            })
                        })
                    })
                };
                return n
            }(o.Component);

            function Xa(e) {
                var t = e.channel,
                    n = za(e, ["channel"]),
                    o = (0, i.e7)([Mt.Z, xt.Z], (function() {
                        var e = Mt.Z.getVoiceChannelId();
                        return xt.Z.getChannel(e)
                    })),
                    a = (0, i.e7)([Nt.Z], (function() {
                        return Nt.Z.getGuild(t.guild_id)
                    })),
                    c = (0, i.e7)([ha.Z], (function() {
                        return ha.Z.isCallActive(t.id)
                    })),
                    l = (0, kn.ZP)(t),
                    s = (0, i.e7)([Ln.Z], (function() {
                        return !(!t.isDM() || null == t.getRecipientId()) && Ln.Z.isBlocked(t.getRecipientId())
                    }));
                return (0, r.jsx)(Ka, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            Ua(e, t, n[t])
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
            var Qa = n(751592),
                Ja = n.n(Qa);

            function qa(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function $a(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a),
                        l = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function ec(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            $a(i, r, o, a, c, "next", e)
                        }

                        function c(e) {
                            $a(i, r, o, a, c, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function tc(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function nc(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function rc(e) {
                rc = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return rc(e)
            }

            function oc(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                t && sc(e, t)
            }

            function ic(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        nc(e, t, n[t])
                    }))
                }
                return e
            }

            function ac(e, t) {
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

            function cc(e, t) {
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

            function lc(e, t) {
                return !t || "object" !== fc(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function sc(e, t) {
                sc = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return sc(e, t)
            }

            function uc(e, t) {
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
                    if ("string" == typeof e) return qa(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return qa(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var fc = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function dc(e) {
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
                    var n, r = rc(e);
                    if (t) {
                        var o = rc(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return lc(this, n)
                }
            }
            var pc = function(e, t) {
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
                hc = sa.wF.TOP,
                yc = function(e) {
                    oc(n, e);
                    var t = dc(n);

                    function n(e) {
                        tc(this, n);
                        var o;
                        (o = t.call(this, e)).draftDidChange = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.props,
                                t = o.state.textValue,
                                n = ra.Z.getDraft(e.channel.id, ra.d.ChannelMessage);
                            t !== n && "" === n && o.setState((0, Qi.eK)(n))
                        };
                        o.handleTextareaKeyDown = function(e) {
                            if (!(e.which !== ie.yXg.ARROW_UP || e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) && 0 === o.state.textValue.length) {
                                e.preventDefault();
                                var t = o.props.channel,
                                    n = ia.Z.getLastEditableMessage(t.id);
                                null != n && Vi.Z.startEditMessage(t.id, n.id, n.content)
                            }
                        };
                        o.handleTextareaChange = function(e, t, n) {
                            var r = o.props.channel.id;
                            Di.Z.changeDraft(r, o.state.textValue, ra.d.ChannelMessage);
                            "" !== t ? Bi.Z.startTyping(r) : Bi.Z.stopTyping(r);
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
                            }) : (0, la.v)({
                                openWarningPopout: function(e) {
                                    return o.setState({
                                        contentWarningProps: e
                                    })
                                },
                                type: Xi.I.OVERLAY,
                                content: t,
                                channel: r
                            }).then((function(e) {
                                var n = e.valid,
                                    c = e.failureReason;
                                if (!n) {
                                    if (c === ie.zYc.SLOWMODE_COOLDOWN) {
                                        ca.S.dispatch(ie.CkL.EMPHASIZE_SLOWMODE_COOLDOWN);
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
                                var l = Vi.Z.getSendMessageOptionsForReply(i);
                                Vi.Z.sendMessage(r.id, $i.ZP.parse(r, t), !0, l);
                                o.setState((0, Qi.H2)());
                                (0, ta.A6)(r.id);
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
                            return (0, r.jsx)(Ji.Z, {
                                className: n,
                                channel: o.props.channel,
                                draftType: ra.d.ChannelMessage,
                                editorTextContent: o.state.textValue,
                                setValue: function(e) {
                                    return o.handleTextareaChange(null, e, (0, Qi.JM)(e))
                                },
                                canShowPremiumTutorial: e,
                                canOnlyUseTextCommands: t
                            })
                        };
                        ra.Z.addChangeListener(o.draftDidChange);
                        var i = ra.Z.getDraft(e.channel.id, ra.d.ChannelMessage);
                        o.state = ac(ic({}, (0, Qi.eK)(i)), {
                            focused: !1,
                            contentWarningProps: null
                        });
                        ca.S.subscribe(ie.CkL.TEXTAREA_FOCUS, o.focusInput);
                        ca.S.subscribe(ie.CkL.TEXTAREA_BLUR, o.blurInput);
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
                        ra.Z.removeChangeListener(this.draftDidChange);
                        ca.S.unsubscribe(ie.CkL.TEXTAREA_FOCUS, this.focusInput);
                        ca.S.unsubscribe(ie.CkL.TEXTAREA_BLUR, this.blurInput)
                    };
                    o.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.channel,
                            o = t.placeholder,
                            i = cc(t, ["channel", "placeholder"]),
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
                                    dn()(null != u, "ConnectedChannelTextArea.render - renderPopout: contentWarningProps cannot be null");
                                    return (0, r.jsx)(Fi.Z, ic({
                                        onClose: t
                                    }, u))
                                },
                                children: function() {
                                    return (0, r.jsx)(qi.Z, ac(ic({}, i), {
                                        renderAttachButton: e.renderAttachButton,
                                        channel: n,
                                        type: Xi.I.OVERLAY,
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
                        return n.isPrivate() ? (0, r.jsx)(zi.Z, {
                            channel: n,
                            children: d
                        }, n.id) : (0, r.jsx)(Yi.Z, {
                            channel: n,
                            children: d
                        }, n.id)
                    };
                    return n
                }(o.Component),
                vc = function(e) {
                    oc(i, e);
                    var t = dc(i);

                    function i() {
                        tc(this, i);
                        var e;
                        (e = t.apply(this, arguments)).handlePin = function() {
                            j.Z.setPinChat(!e.props.pinned)
                        };
                        e.handleContextMenu = function(t) {
                            var o = e.props,
                                i = o.channel,
                                a = o.user;
                            null != i && null != a && (0, bt.jW)(t, ec((function() {
                                var e, t;
                                return pc(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return [4, Promise.all([n.e(40532), n.e(49244), n.e(50865)]).then(n.bind(n, 550865))];
                                        case 1:
                                            e = o.sent(), t = e.default;
                                            return [2, function(e) {
                                                return (0, r.jsx)(t, ac(ic({}, e), {
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
                            (0, e.props.dragStart)(yo.MOVE, t.clientX, t.clientY)
                        };
                        e.resizeDragStart = function(t) {
                            (0, e.props.dragStart)(yo.RESIZE_SOUTH_EAST, t.clientX, t.clientY)
                        };
                        return e
                    }
                    var a = i.prototype;
                    a.componentDidUpdate = function(e) {
                        var t = this.props,
                            n = t.channel,
                            r = t.pinned,
                            o = t.activated;
                        if (null != n) {
                            r !== e.pinned && j.Z.track(ie.rMx.OVERLAY_PIN_TOGGLED, {
                                pinned: r,
                                guild_id: n.guild_id,
                                channel_id: n.id,
                                channel_type: n.type,
                                widget_type: ie.Odu.TEXT
                            });
                            o && !e.activated && j.Z.track(ie.rMx.OVERLAY_UNLOCKED, {
                                channel_id: n.id,
                                channel_type: n.type,
                                guild_id: n.guild_id
                            })
                        }
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
                        h = g && null != a ? (0, r.jsx)(Wi.Z, {
                            guild: a
                        }) : (0, r.jsx)(ea.Z, {
                            channel: t,
                            className: Ja().messages,
                            forceCompact: u,
                            showNewMessagesBar: !v,
                            scrollerClassName: u ? Ja().scroller : void 0,
                            showingSpamBanner: !1,
                            showingQuarantineBanner: !1
                        }, t.id);
                        return (0, r.jsx)(aa.G.Provider, {
                            value: {
                                disableInteractions: u && c && !l,
                                disableAnimations: u && v && !l
                            },
                            children: (0, r.jsxs)(o.Fragment, {
                                children: [!c && !f && (0, r.jsx)(Gi.Z, {
                                    channel: t,
                                    guild: a
                                }), (0, r.jsx)(Ie.Background, {
                                    opacityOverride: c || f ? null : hc,
                                    children: (0, r.jsx)("div", {
                                        className: m()(Ja().messagesContainer, (y = {}, nc(y, Ja().isDragging, d), nc(y, Ja().disableHoverStates, u && c && !l), y)),
                                        children: h
                                    })
                                }), g ? null : (0, r.jsx)("div", {
                                    children: b ? (0, r.jsx)(Ie.Background, {
                                        opacityOverride: c || f ? null : hc,
                                        children: (0, r.jsxs)("div", {
                                            className: Ja().footerContent,
                                            children: [(0, r.jsx)(yc, {
                                                channel: t,
                                                placeholder: n,
                                                isTemporarilyActive: l,
                                                pendingReply: p
                                            }), (0, r.jsx)("div", {
                                                className: Ja().typingWrapper,
                                                children: (0, r.jsx)(Hi.Z, {
                                                    channel: t,
                                                    className: Ja().typing
                                                })
                                            })]
                                        })
                                    }) : (0, r.jsx)("div", {
                                        className: Ja().activateContainer,
                                        children: (0, r.jsx)(Ie.Background, {
                                            opacityOverride: sa.wF.LOWER,
                                            children: (0, r.jsx)("div", {
                                                className: m()(Ja().activateKeybind, Ja().mediumBackgroundOpacity),
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
                                    case sa.wF.BOTTOM:
                                        return sa.ap.LOW;
                                    case sa.wF.LOWER:
                                        return sa.ap.MEDIUM;
                                    case sa.wF.UPPER:
                                        return sa.ap.HIGH;
                                    case sa.wF.TOP:
                                        return sa.ap.FULL;
                                    default:
                                        return
                                }
                            }(c);
                        return (0, r.jsx)(Ie, {
                            className: m()(h, (s = {}, nc(s, Ja().widgetWrapper, !o), nc(s, Ja().widgetWrapperPinned, o), nc(s, Ja().locked, p), nc(s, Ja().inGame, f), nc(s, Ja().inGameActive, d), nc(s, Ja().pinned, o), nc(s, "overlay-unlocked", !n), s)),
                            type: l,
                            opacity: c,
                            children: e
                        })
                    };
                    a.renderContainedWrapper = function(e) {
                        return (0, r.jsx)("div", {
                            className: Ja().contained,
                            children: e
                        })
                    };
                    a.render = function() {
                        var e = this.props,
                            t = e.locked,
                            n = e.channel,
                            i = e.pinned,
                            a = e.isPreviewingInGame,
                            c = e.contained;
                        if (null == n) return null;
                        var l = (0, r.jsxs)(o.Fragment, {
                            children: [(0, r.jsx)(Xa, {
                                draggableClassName: Ja().draggableStartArea,
                                className: Ja().headerDefault,
                                channel: n,
                                locked: t,
                                pinned: i,
                                disableDragIndicator: c,
                                isPreviewingInGame: a,
                                handlePin: this.handlePin,
                                onContextMenu: this.handleContextMenu,
                                onMouseDown: this.moveDragStart
                            }), this.renderContent(), t || a ? null : (0, r.jsx)("div", {
                                className: Ja().resizeIcon,
                                onMouseDown: this.resizeDragStart
                            })]
                        });
                        return c ? this.renderContainedWrapper(l) : this.renderWidgetWrapper(l)
                    };
                    return i
                }(o.PureComponent);

            function gc(e) {
                var t = e.contained,
                    n = void 0 !== t && t,
                    o = cc(e, ["contained"]),
                    a = (0, i.e7)([Qt.Z], (function() {
                        return Qt.Z.getGuildId()
                    })),
                    c = (0, i.e7)([Mt.Z], (function() {
                        return Mt.Z.getChannelId(a)
                    })),
                    l = (0, i.e7)([xt.Z], (function() {
                        return xt.Z.getChannel(c)
                    })),
                    s = (0, i.e7)([Vt.Z], (function() {
                        return Vt.Z.getOverlayChatKeybind()
                    })),
                    u = null != s ? (0, zt.BB)(s.shortcut, !0) : "]",
                    f = uc((0, i.Wu)([Bt.Z], (function() {
                        return [Bt.Z.getTextWidgetOpacity(), Bt.Z.getActiveRegions(), !n && Bt.Z.isPreviewingInGame()]
                    })), 3),
                    d = f[0],
                    p = f[1],
                    h = f[2],
                    y = (0, i.e7)([Nt.Z], (function() {
                        return Nt.Z.getGuild(a)
                    })),
                    v = (0, i.e7)([oa.Z], (function() {
                        return null != a && oa.Z.didAgree(a)
                    })),
                    g = null != l && l.isPrivate() ? l.getRecipientId() : null,
                    b = (0, i.e7)([na.Z], (function() {
                        return null != c ? na.Z.getPendingReply(c) : void 0
                    })),
                    m = (0, i.e7)([Jt.default], (function() {
                        return null != g ? Jt.default.getUser(g) : null
                    })),
                    O = (0, Ki.Z)(l).placeholder;
                return null != l && null != y && ie.TPd.GUILD_THREADS_ONLY.has(l.type) ? (0, r.jsx)(Ui.Z, {}) : (0, r.jsx)(vc, ic({
                    guild: y,
                    channel: l,
                    user: m,
                    opacity: d,
                    nsfwAgree: v,
                    chatKeybind: u,
                    activated: p.has(ie.O0n.TEXT_WIDGET),
                    isPreviewingInGame: h,
                    pendingReply: b,
                    contained: n,
                    placeholder: O
                }, o))
            }
            var bc = n(541004),
                mc = n.n(bc);

            function Oc(e) {
                var t = e.dragStart,
                    n = e.dragging,
                    o = e.pinned,
                    i = e.locked;
                return (0, r.jsxs)(Ie, {
                    className: mc().wrapper,
                    children: [(0, r.jsx)(Li, {
                        contained: !0,
                        dragStart: t,
                        locked: i
                    }), (0, r.jsx)(gc, {
                        dragStart: t,
                        locked: i,
                        pinned: o,
                        dragging: n,
                        contained: !0
                    })]
                })
            }

            function Sc(e) {
                var t;
                return null != e ? {
                    id: e.id,
                    name: null !== (t = e.name) && void 0 !== t ? t : ""
                } : null
            }
            var Ec = n(476020),
                _c = n(959207),
                wc = n(870614),
                jc = n(3862),
                Ic = n(749565),
                Cc = n(795308),
                Pc = n(142643),
                Zc = n(481008),
                Tc = n(473664),
                xc = n(306263),
                Nc = n(974760),
                Rc = n(216299),
                Ac = n(82274),
                Mc = n(808194),
                kc = n(427054),
                Lc = n(555566),
                Dc = n(377128),
                Vc = n(641277),
                Bc = n(796938),
                Uc = n(203742),
                Gc = n(98265),
                zc = n(630781),
                Yc = n(91717),
                Hc = n(664806),
                Fc = n(473727),
                Wc = n(656645),
                Kc = n(216151),
                Xc = n(976010),
                Qc = n(181152),
                Jc = n(407561);

            function qc(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function $c(e) {
                $c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return $c(e)
            }

            function el(e, t) {
                return !t || "object" !== nl(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function tl(e, t) {
                tl = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return tl(e, t)
            }
            var nl = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function rl(e) {
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
                    var n, r = $c(e);
                    if (t) {
                        var o = $c(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return el(this, n)
                }
            }
            var ol = {};

            function il(e) {
                var t = ol[e = null != e ? e : "null"];
                null == t && (t = ol[e] = {
                    state: ie.hes.DISCONNECTED,
                    quality: ie.IE4.UNKNOWN,
                    pings: [],
                    hostname: null,
                    lossRate: null
                });
                return t
            }

            function al(e, t, n) {
                var r = ol[e = null != e ? e : "null"];
                return null != r ? t(r) : n
            }

            function cl(e) {
                var t = e.lobbyId;
                delete ol[t]
            }
            var ll = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && tl(e, t)
                }(n, e);
                var t = rl(n);

                function n() {
                    qc(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getConnectionState = function(e) {
                    return al(e, (function(e) {
                        return e.state
                    }), ie.hes.DISCONNECTED)
                };
                r.getQuality = function(e) {
                    return al(e, (function(e) {
                        return e.quality
                    }), ie.IE4.UNKNOWN)
                };
                r.getHostname = function(e) {
                    return al(e, (function(e) {
                        return e.hostname
                    }), null)
                };
                r.getPings = function(e) {
                    return al(e, (function(e) {
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
                    return al(e, (function(e) {
                        return e.lossRate
                    }), null)
                };
                r.isSecureFramesEnabled = function(e) {
                    return !1
                };
                r.__getLocalVars = function() {
                    return {
                        rtcConnectionStates: ol
                    }
                };
                return n
            }(i.ZP.Store);
            ll.displayName = "OverlayRTCConnectionStore";
            const sl = new ll(yn.Z, {
                OVERLAY_INITIALIZE: function(e) {
                    ol = e.rtcConnectionStates
                },
                RTC_CONNECTION_STATE: function(e) {
                    if (null != e.streamKey) return !1;
                    var t = il(e.lobbyId);
                    t.state = e.state;
                    t.hostname = e.hostname
                },
                RTC_CONNECTION_PING: function(e) {
                    var t = il(e.lobbyId);
                    t.pings = e.pings;
                    t.quality = e.quality
                },
                RTC_CONNECTION_LOSS_RATE: function(e) {
                    il(e.lobbyId).lossRate = e.lossRate
                },
                LOBBY_DELETE: cl,
                LOBBY_DISCONNECT: cl
            });
            var ul = n(23727),
                fl = n(308377),
                dl = n(961241),
                pl = n(554647),
                hl = n(168775),
                yl = n(264721),
                vl = n.n(yl),
                gl = n(58005),
                bl = n.n(gl);

            function ml(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Ol(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Sl(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function El(e) {
                El = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return El(e)
            }

            function _l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Sl(e, t, n[t])
                    }))
                }
                return e
            }

            function wl(e, t) {
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

            function jl(e, t) {
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

            function Il(e, t) {
                return !t || "object" !== Zl(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Cl(e, t) {
                Cl = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Cl(e, t)
            }

            function Pl(e, t) {
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
                    if ("string" == typeof e) return ml(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ml(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Zl = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Tl(e) {
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
                    var n, r = El(e);
                    if (t) {
                        var o = El(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Il(this, n)
                }
            }

            function xl(e) {
                var t = e.lobbyId,
                    n = (0, i.cj)([sl], (function() {
                        return {
                            connectionState: sl.getConnectionState(t),
                            hostname: sl.getHostname(t),
                            averagePing: sl.getAveragePing(t),
                            lastPing: sl.getLastPing(t),
                            pings: sl.getPings(),
                            outboundLossRate: sl.getOutboundLossRate(t),
                            isSecureFramesEnabled: sl.isSecureFramesEnabled(t)
                        }
                    }));
                return (0, r.jsx)(Qc.Z, _l({}, n))
            }
            var Nl = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Cl(e, t)
                }(n, e);
                var t = Tl(n);

                function n() {
                    Ol(this, n);
                    var e;
                    (e = t.apply(this, arguments)).handleToggleSelfMute = function() {
                        var t = e.props.context;
                        Wc.Z.toggleSelfMute({
                            context: t
                        })
                    };
                    e.handleToggleSelfDeaf = function() {
                        var t = e.props.context;
                        Wc.Z.toggleSelfDeaf({
                            context: t
                        })
                    };
                    e.renderPopout = function() {
                        var t = e.props.lobbyId;
                        return (0, r.jsx)(xl, {
                            lobbyId: t
                        })
                    };
                    return e
                }
                var o = n.prototype;
                o.handleDisconnect = function() {
                    ua.default.selectVoiceChannel(null)
                };
                o.renderLobby = function() {
                    return (0, r.jsx)(zc.Z, {
                        className: bl().channel,
                        children: A.Z.Messages.LOBBY
                    })
                };
                o.renderChannelLink = function(e) {
                    var t = this.props.guild,
                        n = (0, kn.F6)(e, Jt.default, Ln.Z),
                        o = null != t ? "".concat(n, " / ").concat(t.name) : n,
                        i = null != t ? t.id : ie.ME;
                    return (0, r.jsx)(Fc.rU, {
                        to: ie.Z5c.CHANNEL(i),
                        onClick: function(t) {
                            t.stopPropagation();
                            Kc.Z.channelListScrollTo(i, e.id)
                        },
                        children: (0, r.jsx)(zc.Z, {
                            className: bl().channel,
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
                        className: m()(n, vl().controls, Sl({}, vl().unpinned, !i)),
                        children: (0, r.jsxs)(Ie.Content, {
                            className: m()(o, vl().content),
                            dynamicSize: !0,
                            children: [(0, r.jsx)("div", {
                                className: bl().inner,
                                children: (0, r.jsx)(a.Popout, {
                                    renderPopout: this.renderPopout,
                                    position: "top",
                                    children: function(t) {
                                        return (0, r.jsx)(a.Clickable, wl(_l({}, t), {
                                            children: (0, r.jsx)(Xc.Z, {
                                                statusTextClassName: bl().statusWithPopout,
                                                quality: s,
                                                lastPing: u,
                                                hasVideo: f,
                                                state: d,
                                                children: null != l ? e.renderChannelLink(l) : e.renderLobby()
                                            })
                                        }))
                                    }
                                })
                            }), (0, r.jsxs)(Gt.Z, {
                                grow: 0,
                                children: [(0, r.jsx)(hl.Z, {
                                    tooltipText: h ? A.Z.Messages.UNMUTE : A.Z.Messages.MUTE,
                                    icon: h ? pl.Z : dl.Z,
                                    iconForeground: h ? vl().strikethrough : null,
                                    onClick: this.handleToggleSelfMute
                                }), (0, r.jsx)(hl.Z, {
                                    tooltipText: p ? A.Z.Messages.UNDEAFEN : A.Z.Messages.DEAFEN,
                                    icon: p ? fl.Z : ul.Z,
                                    onClick: this.handleToggleSelfDeaf,
                                    iconForeground: p ? vl().strikethrough : null
                                }), null == c && (0, r.jsx)(hl.Z, {
                                    tooltipText: A.Z.Messages.DISCONNECT_SELF,
                                    onClick: this.handleDisconnect,
                                    icon: va.Z
                                })]
                            })]
                        })
                    })
                };
                return n
            }(o.PureComponent);

            function Rl(e) {
                var t = e.context,
                    n = e.lobbyId,
                    o = e.channel,
                    a = jl(e, ["context", "lobbyId", "channel"]),
                    c = (0, i.e7)([Nt.Z], (function() {
                        return Nt.Z.getGuild(null == o ? void 0 : o.getGuildId())
                    })),
                    l = (0, i.e7)([Jc.Z], (function() {
                        return null != o && Jc.Z.hasVideo(o.id)
                    })),
                    s = Pl((0, i.Wu)([Rt.Z], (function() {
                        return [Rt.Z.isSelfMute(t) || Rt.Z.isSelfMutedTemporarily(t), Rt.Z.isSelfDeaf(t)]
                    })), 2),
                    u = s[0],
                    f = s[1],
                    d = Pl((0, i.Wu)([sl], (function() {
                        return [sl.getConnectionState(n), sl.getLastPing(n), sl.getQuality(n)]
                    })), 3),
                    p = d[0],
                    h = d[1],
                    y = d[2];
                return (0, r.jsx)(Nl, wl(_l({}, a), {
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
            var Al = n(36256),
                Ml = n(203556),
                kl = n.n(Ml);

            function Ll(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Dl(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a),
                        l = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function Vl(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            Dl(i, r, o, a, c, "next", e)
                        }

                        function c(e) {
                            Dl(i, r, o, a, c, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function Bl(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Ul(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Gl(e) {
                Gl = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Gl(e)
            }

            function zl(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                t && Kl(e, t)
            }

            function Yl(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Ul(e, t, n[t])
                    }))
                }
                return e
            }

            function Hl(e, t) {
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

            function Fl(e, t) {
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

            function Wl(e, t) {
                return !t || "object" !== Ql(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Kl(e, t) {
                Kl = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Kl(e, t)
            }

            function Xl(e, t) {
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
                    if ("string" == typeof e) return Ll(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ll(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Ql = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Jl(e) {
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
                    var n, r = Gl(e);
                    if (t) {
                        var o = Gl(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Wl(this, n)
                }
            }
            var ql = function(e, t) {
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
                $l = function(e) {
                    zl(n, e);
                    var t = Jl(n);

                    function n() {
                        Bl(this, n);
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
                        return v === ie.OYC.ONLY_WHILE_SPEAKING && i && !d ? null : (0, r.jsx)(Yc.Z, {
                            guildId: g,
                            onClick: i ? void 0 : this.handleClick,
                            onContextMenu: i ? void 0 : this.handleContextMenu,
                            className: m()(kl().voiceUserWrapper, (e = {}, Ul(e, kl().faded, !d), Ul(e, kl().interactive, !i), e)),
                            user: u,
                            nick: h,
                            speaking: !1,
                            flipped: o,
                            isStreaming: l,
                            iconClassName: m()(kl().voiceIcon, Ul({}, kl().locked, i)),
                            isWatching: s,
                            size: f,
                            priority: p,
                            deaf: a,
                            mute: c,
                            userNameClassName: m()(kl().username, (t = {}, Ul(t, kl().locked, i), Ul(t, kl().hidden, i && (y === ie.wC$.NEVER || !d && y === ie.wC$.ONLY_WHILE_SPEAKING)), t))
                        })
                    };
                    return n
                }(o.PureComponent);
            $l.defaultProps = {
                size: ie.ipw.LARGE,
                flipped: !1,
                locked: !1,
                speaking: !1,
                isPrioritySpeaker: !1,
                deafened: !1,
                muted: !1
            };

            function es(e) {
                var t = e.context,
                    n = e.user,
                    a = e.voiceState,
                    c = e.guildId,
                    l = Fl(e, ["context", "user", "voiceState", "guildId"]),
                    s = function(e, t, n) {
                        var r = t.isVoiceMuted();
                        r || Tt.default.getId() !== t.userId ? r || (r = n.isLocalMute(t.userId, e)) : r = !n.isEnabled() || n.isSelfMute(e) || n.isSelfMutedTemporarily(e);
                        return r
                    }(t, a, Rt.Z),
                    u = (0, i.e7)([Zt.Z], (function() {
                        return Zt.Z.getCurrentUserActiveStream()
                    })),
                    f = (0, i.Wu)([Zt.Z], (function() {
                        return null != u ? Zt.Z.getViewerIds(u) : []
                    })),
                    d = (0, Tc.Z)({
                        userId: n.id,
                        context: t
                    }),
                    p = (0, i.e7)([Dc.Z], (function() {
                        return Dc.Z.isPrioritySpeaker(n.id, t)
                    })),
                    h = (0,
                        i.e7)([Tt.default, Rt.Z], (function() {
                        return function(e, t) {
                            var n = t.isVoiceDeafened();
                            n || Tt.default.getId() !== t.userId || (n = Rt.Z.isSelfDeaf(e));
                            return n
                        }(t, a)
                    })),
                    y = (0, i.e7)([Zt.Z], (function() {
                        return null != Zt.Z.getStreamForUser(n.id, c)
                    })),
                    v = o.useMemo((function() {
                        return null != u && u.ownerId !== n.id && f.includes(n.id)
                    }), [u, n.id, f]);
                return (0, r.jsx)($l, Hl(Yl({}, l), {
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
            var ts = function(e) {
                zl(o, e);
                var t = Jl(o);

                function o() {
                    Bl(this, o);
                    var e;
                    (e = t.apply(this, arguments)).handleUserContextMenu = function(t, o) {
                        var i = e.props.context;
                        (0, bt.jW)(t, Vl((function() {
                            var e, t;
                            return ql(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(49244), n.e(85572)]).then(n.bind(n, 810848))];
                                    case 1:
                                        e = a.sent(), t = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(t, Hl(Yl({}, e), {
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
                        (0, a.openModalLazy)(Vl((function() {
                            var e, t;
                            return ql(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(64045), n.e(21723)]).then(n.bind(n, 621723))];
                                    case 1:
                                        e = a.sent(), t = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(t, Hl(Yl({}, e), {
                                                mediaEngineContext: o,
                                                title: null != i ? null : c
                                            }))
                                        }]
                                }
                            }))
                        })))
                    };
                    e.handlePin = function() {
                        var t = e.props.id;
                        (0, Fr.xh)(t)
                    };
                    e.handleStopStream = function() {
                        var t = e.props.stream;
                        null != t && Zc.g((0, xc.V9)(t))
                    };
                    return e
                }
                var i = o.prototype;
                i.componentDidUpdate = function(e) {
                    var t = this.props,
                        n = t.pinned,
                        r = t.channel;
                    null != r && n !== e.pinned && j.Z.track(ie.rMx.OVERLAY_PIN_TOGGLED, {
                        pinned: n,
                        guild_id: r.guild_id,
                        channel_id: r.id,
                        channel_type: r.type,
                        widget_type: ie.Odu.VOICE
                    })
                };
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
                            return (0, r.jsx)(es, {
                                guildId: null == u ? void 0 : u.guild_id,
                                user: n,
                                nick: null !== (h = null == f ? void 0 : f.nick) && void 0 !== h ? h : Ic.ZP.getName(n),
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
                        className: m()((e = {}, Ul(e, Pc.Z.VOICE_WIDGET_TOP_MARGIN, l), Ul(e, kl().bottomMargin, l), e)),
                        children: (0, r.jsx)(Yc.e, {
                            className: kl().voiceList,
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
                        className: m()(kl().draggableStartArea, Ul({}, kl().preview, o)),
                        children: [(0, r.jsxs)(Ie.Content, {
                            dynamicSize: !0,
                            className: m()(kl().content, Ul({}, kl().hidden, o)),
                            children: [(0, r.jsx)(ga.Z, {
                                color: Cc.Z.unsafe_rawColors.WHITE_500.css,
                                width: 20,
                                height: 20,
                                className: m()(kl().icon, kl().faded, kl().dragIcon)
                            }), (0,
                                r.jsx)(Bc.Z, {
                                color: Cc.Z.unsafe_rawColors.WHITE_500.css,
                                width: 20,
                                height: 20,
                                className: m()(kl().icon, kl().faded, kl().speakerIcon)
                            }), (0, r.jsx)(Gc.Z, {
                                color: Cc.Z.unsafe_rawColors.PRIMARY_200.css,
                                className: kl().title,
                                children: n
                            })]
                        }), o ? null : (0, r.jsx)(Ie.Icon, {
                            icon: Vo.Z,
                            label: A.Z.Messages.VOICE_SETTINGS,
                            onClick: this.handleOpenVoiceSettings,
                            tooltipPosition: "left",
                            size: 18
                        }), o ? null : (0, r.jsx)(Ie.Icon, {
                            icon: t ? _a.Z : Ea.Z,
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
                    var f, d, p = (0, Nc.Z)(l),
                        h = p.sanitizedTitle,
                        y = p.title;
                    return (0, r.jsx)(Ie.Bar, {
                        className: m()(kl().streamerControls, (d = {}, Ul(d, kl().hidden, o), Ul(d, kl().unpinned, !n), d)),
                        children: (0, r.jsxs)(Ie.Content, {
                            className: kl().streamerContent,
                            dynamicSize: !0,
                            children: [(0, r.jsxs)("div", {
                                className: kl().streamerInner,
                                children: [null != (null == s ? void 0 : s.id) && s.id === (null == c ? void 0 : c.id) ? (0, r.jsx)(Vc.Z, {
                                    className: kl().gameIcon,
                                    game: c
                                }) : (0, r.jsx)(Rc.Z, {
                                    title: h
                                }), (0, r.jsxs)(Gt.Z, {
                                    direction: Gt.Z.Direction.VERTICAL,
                                    justify: Gt.Z.Justify.BETWEEN,
                                    className: kl().streamerInfo,
                                    children: [(0, r.jsx)(a.Text, {
                                        className: kl().streaming,
                                        variant: "text-sm/normal",
                                        children: A.Z.Messages.STATUS_STREAMING
                                    }), (0, r.jsx)(zc.Z, {
                                        children: null !== (f = null == s ? void 0 : s.name) && void 0 !== f ? f : y
                                    })]
                                })]
                            }), (0, r.jsxs)(Gt.Z, {
                                grow: 0,
                                children: [(0, r.jsx)("div", {
                                    className: kl().streamerIconWrapper,
                                    children: (0, r.jsx)(kc.Z, {
                                        stream: u,
                                        iconClassName: kl().streamerIcon,
                                        appContext: ie.IlC.OVERLAY
                                    })
                                }), (0, r.jsx)("div", {
                                    className: kl().streamerIconWrapper,
                                    children: (0, r.jsx)(Lc.Z, {
                                        stream: u,
                                        appContext: ie.IlC.OVERLAY
                                    })
                                }), (0, r.jsx)("div", {
                                    className: kl().streamerIconWrapper,
                                    children: (0, r.jsx)(a.TooltipContainer, {
                                        text: A.Z.Messages.STOP_STREAMING,
                                        children: (0,
                                            r.jsx)(a.Button, {
                                            onClick: this.handleStopStream,
                                            look: a.Button.Looks.BLANK,
                                            size: a.Button.Sizes.NONE,
                                            children: (0, r.jsx)(Uc.Z, {
                                                className: kl().streamerIcon
                                            })
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                };
                i.render = function() {
                    var e = this.props,
                        t = e.context,
                        n = e.lobbyId,
                        o = e.locked,
                        i = e.pinned,
                        a = e.isPreviewingInGame,
                        c = e.sortedVoiceStates,
                        l = e.channel;
                    if (0 === c.length || null == t || null == l) return null;
                    if (o && !i) return null;
                    var s = ie.t_t.UNPINNED;
                    i && (s = ie.t_t.PINNED);
                    a && (s = ie.t_t.IN_GAME_PREVIEW);
                    o && (s = ie.t_t.IN_GAME);
                    return (0, r.jsxs)(Ie, {
                        type: s,
                        width: 280,
                        children: [o ? null : this.renderHeader(), this.renderVoiceUsers(), this.renderStreamerSettings(), o ? null : (0, r.jsx)(Rl, {
                            className: m()(Ul({}, kl().preview, a)),
                            contentClassName: m()(Ul({}, kl().hidden, a)),
                            channel: l,
                            lobbyId: n,
                            context: t,
                            pinned: i
                        })]
                    })
                };
                return o
            }(o.PureComponent);
            ts.defaultProps = {
                context: Al.Yn.DEFAULT
            };

            function ns(e) {
                var t, n = (0, i.e7)([Mt.Z, xt.Z], (function() {
                        return xt.Z.getChannel(Mt.Z.getVoiceChannelId())
                    })),
                    o = (0, kn.ZP)(n),
                    a = function(e) {
                        return Xl((0, i.e7)([Do.ZP, Ac.Z], (function() {
                            return null == e ? [
                                [], -1
                            ] : e.isGuildStageVoice() ? [Ac.Z.getMutableParticipants(e.id, Mc.pV.SPEAKER), Ac.Z.getParticipantsVersion(e.id)] : [Do.ZP.getVoiceStatesForChannel(e), Do.ZP.getVoiceStateVersion(e.getGuildId())]
                        }), [e], Hc.Q), 1)[0]
                    }(n),
                    c = (0, i.e7)([Zt.Z], (function() {
                        return Zt.Z.getStreamerActiveStreamMetadata()
                    })),
                    l = (0, i.cj)([At.ZP, Lt.Z, Zt.Z, Bt.Z, _c.Z], (function() {
                        var e = (0, It.Z)(At.ZP, Lt.Z),
                            t = Zt.Z.getCurrentUserActiveStream();
                        return {
                            displayUserMode: Bt.Z.getDisplayUserMode(),
                            displayNameMode: Bt.Z.getDisplayNameMode(),
                            avatarSizeMode: Bt.Z.getAvatarSizeMode(),
                            application: null != e ? _c.Z.getGameByGameData(e) : null,
                            streamApplication: (null == c ? void 0 : c.pid) === (0, Ze.QF)() ? Sc(e) : null,
                            stream: t
                        }
                    }));
                return (0, r.jsx)(ts, Hl(Yl({}, l, e), {
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
            const rs = i.ZP.connectStores([At.ZP, Lt.Z, Zt.Z, Jt.default, Bt.Z, wc.Z, Ec.Z, jc.Z, _c.Z], (function() {
                var e, t = wc.Z.getLobbiesWithVoice().find((function(e) {
                        return null != Ec.Z.getApplication(e.application_id)
                    })),
                    n = [],
                    r = "";
                if (null != t) {
                    var o = Ec.Z.getApplication(t.application_id);
                    null != (null == o ? void 0 : o.name) && (r = o.name);
                    e = t.application_id;
                    S().each(jc.Z.getVoiceStates(t.id), (function(e) {
                        var t = Jt.default.getUser(e.userId);
                        null != t && n.push({
                            voiceState: e,
                            user: t,
                            nick: t.username,
                            comparator: Ic.ZP.getName(t)
                        })
                    }))
                }
                var i = (0, It.Z)(At.ZP, Lt.Z),
                    a = Zt.Z.getCurrentUserActiveStream(),
                    c = Zt.Z.getStreamerActiveStreamMetadata();
                return {
                    title: r,
                    context: e,
                    sortedVoiceStates: S().sortBy(n, (function(e) {
                        return e.comparator
                    })),
                    lobbyId: null != t ? t.id : void 0,
                    displayUserMode: Bt.Z.getDisplayUserMode(),
                    displayNameMode: Bt.Z.getDisplayNameMode(),
                    avatarSizeMode: Bt.Z.getAvatarSizeMode(),
                    application: null != i ? _c.Z.getGameByGameData(i) : null,
                    streamApplication: Sc(i),
                    stream: a,
                    streamMetadata: c,
                    hasStream: !1
                }
            }))(ts);

            function os(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function is(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function as(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function cs(e) {
                cs = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return cs(e)
            }

            function ls(e, t) {
                return !t || "object" !== fs(t) && "function" != typeof t ? os(e) : t
            }

            function ss(e, t) {
                ss = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return ss(e, t)
            }
            var us, fs = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function ds(e) {
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
                    var n, r = cs(e);
                    if (t) {
                        var o = cs(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return ls(this, n)
                }
            }
            var ps = (as(us = {}, ie.Odu.TEXT, (function(e) {
                    var t = e.dragging,
                        n = e.locked,
                        o = e.pinned,
                        i = e.dragStart;
                    return (0, r.jsx)(gc, {
                        dragStart: i,
                        locked: n,
                        pinned: o,
                        dragging: t
                    })
                })), as(us, ie.Odu.GUILDS, (function(e) {
                    var t = e.locked,
                        n = e.dragStart;
                    return (0, r.jsx)(Li, {
                        dragStart: n,
                        locked: t
                    })
                })), as(us, ie.Odu.VOICE, (function(e) {
                    var t = e.id,
                        n = e.anchor,
                        o = e.isPreviewingInGame,
                        i = e.locked,
                        a = e.pinned;
                    return (0, r.jsx)(ns, {
                        anchor: n,
                        id: t,
                        locked: i,
                        pinned: a,
                        isPreviewingInGame: o
                    })
                })), as(us, ie.Odu.GUILDS_TEXT, (function(e) {
                    var t = e.dragging,
                        n = e.locked,
                        o = e.dragStart;
                    return (0, r.jsx)(Oc, {
                        dragStart: o,
                        dragging: t,
                        locked: n,
                        pinned: !1
                    })
                })), as(us, ie.Odu.LOBBY_VOICE, (function(e) {
                    var t = e.id,
                        n = e.anchor,
                        o = e.isPreviewingInGame,
                        i = e.locked,
                        a = e.pinned;
                    return (0, r.jsx)(rs, {
                        anchor: n,
                        id: t,
                        locked: i,
                        pinned: a,
                        isPreviewingInGame: o
                    })
                })), us),
                hs = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && ss(e, t)
                    }(n, e);
                    var t = ds(n);

                    function n() {
                        is(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            lastLayoutUpdate: null,
                            dragging: !1
                        };
                        e.handleUpdate = function(t, n, r, o, i) {
                            var a = os(e),
                                c = a.props.layoutSize,
                                l = a.state.lastLayoutUpdate;
                            if ((0, Ze.Te)(c)) {
                                var s = (0, no.jL)(r, c),
                                    u = (0, no.Ox)(o, c);
                                (0, Fr.Os)(n);
                                (0, Fr.nv)(n, s, u);
                                var f = t === yo.MOVE,
                                    d = !f,
                                    p = (0, no.PY)(r, c.width, c.height, i.width, i.height);
                                e.setState({
                                    lastLayoutUpdate: {
                                        was_resized: null != l && l.was_resized || d,
                                        was_dragged: null != l && l.was_dragged || f,
                                        widget_type: to.Z.getWidgetType(n),
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
                            (0, Ze.Te)(n) && (0, Fr.Os)(t)
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
                            c = ps[e.type];
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
                            p = (0, no.w_)(f, o),
                            h = (0, no.KR)(d, o),
                            y = n.minSize,
                            v = n.resizeX,
                            g = n.resizeY,
                            b = n.dragAnywhere,
                            m = !i || c,
                            O = !a && !i || s,
                            S = {
                                minX: 0,
                                minY: 0,
                                maxX: o.width,
                                maxY: o.height
                            };
                        return (0, r.jsx)(_o, {
                            id: l,
                            size: p,
                            anchor: h,
                            container: S,
                            minSize: y,
                            hidden: !O,
                            resizeX: v,
                            resizeY: g,
                            style: {
                                zIndex: u
                            },
                            dragAnywhere: b,
                            active: m,
                            onUpdate: this.handleUpdate,
                            onClick: this.handleFocus,
                            onDragStart: this.handleDragStart,
                            onDragEnd: this.handleDragEnd,
                            children: this.renderWidget(t, h, p)
                        })
                    };
                    return n
                }(o.PureComponent),
                ys = i.ZP.connectStores([to.Z, Bt.Z], (function(e) {
                    var t = e.widgetId,
                        n = to.Z.getWidget(t),
                        r = Bt.Z.getActiveRegions();
                    return {
                        widget: n,
                        widgetConfig: null != n ? to.Z.getWidgetConfig(n.type) : null,
                        locked: Bt.Z.isInstanceUILocked(),
                        isPreviewingInGame: Bt.Z.isPreviewingInGame(),
                        isActiveRegion: null != n && r.has(n.type)
                    }
                }))(hs);

            function vs(e, t) {
                return (0, r.jsx)(ys, {
                    widgetId: e,
                    layoutSize: t
                }, e)
            }
            const gs = i.ZP.connectStores([to.Z, Ut.Z], (function() {
                return {
                    layout: to.Z.getLayout(Ze.qU),
                    layoutSize: Ut.Z.windowSize(),
                    renderWidget: vs
                }
            }))(eo);
            var bs = n(751615),
                ms = n(327499),
                Os = n(113512),
                Ss = n(530537);

            function Es(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function _s(e) {
                _s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _s(e)
            }

            function ws(e, t) {
                return !t || "object" !== Is(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function js(e, t) {
                js = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return js(e, t)
            }
            var Is = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Cs(e) {
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
                    var n, r = _s(e);
                    if (t) {
                        var o = _s(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return ws(this, n)
                }
            }
            var Ps = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && js(e, t)
                }(n, e);
                var t = Cs(n);

                function n() {
                    Es(this, n);
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
                        if ((0, Ss.S)(n) && (0, Ss.c)(r)) {
                            ms.Z.selectGuild(n);
                            ua.default.selectChannel({
                                guildId: n,
                                channelId: r,
                                messageId: o
                            })
                        } else(0, P.dL)(ie.Z5c.ME)
                    }
                };
                r.render = function() {
                    return null
                };
                return n
            }(o.Component);
            const Zs = function() {
                return (0, r.jsxs)(bs.rs, {
                    children: [(0, r.jsx)(Os.Z, {
                        path: ie.Z5c.CHANNEL(":guildId", ":channelId?", ":messageId?"),
                        component: Ps
                    }), (0, r.jsx)(Os.Z, {
                        component: Ps
                    })]
                })
            };
            var Ts = n(318715),
                xs = n(9134),
                Ns = n(407761),
                Rs = n(103245),
                As = n(233425),
                Ms = n.n(As);

            function ks(e) {
                var t = e.streamerId,
                    n = e.channelId,
                    i = o.useRef(null),
                    a = (0, Ts.ZP)([Jt.default], (function() {
                        return Jt.default.getCurrentUser()
                    }));
                dn()(null != a, "user cannot be null");
                (0, Rs.Z)(i, a, t, n);
                return (0, r.jsx)("canvas", {
                    className: Ms().canvas,
                    ref: i
                })
            }

            function Ls(e) {
                var t = e.guildId,
                    n = e.channelId,
                    o = e.streamerId,
                    i = xs.Z.useExperiment({
                        guildId: t,
                        location: "f0d1b1_1"
                    }, {
                        autoTrackExposure: !0
                    }).isSharedCanvasEnabled,
                    a = (0, Ts.ZP)([Ns.Z], (function() {
                        return Ns.Z.visibleOverlayCanvas
                    }));
                return i && a ? (0, r.jsx)(ks, {
                    guildId: t,
                    channelId: n,
                    streamerId: o
                }) : null
            }

            function Ds(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Vs(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function Bs(e) {
                Bs = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Bs(e)
            }

            function Us(e, t) {
                return !t || "object" !== zs(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Gs(e, t) {
                Gs = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Gs(e, t)
            }
            var zs = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Ys(e) {
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
                    var n, r = Bs(e);
                    if (t) {
                        var o = Bs(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Us(this, n)
                }
            }
            var Hs = !1,
                Fs = !1;
            var Ws = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Gs(e, t)
                }(n, e);
                var t = Ys(n);

                function n() {
                    Ds(this, n);
                    return t.apply(this, arguments)
                }
                n.prototype.__getLocalVars = function() {
                    return {
                        enabled: Hs,
                        keepOpen: Fs
                    }
                };
                ! function(e, t, n) {
                    t && Vs(e.prototype, t);
                    n && Vs(e, n)
                }(n, [{
                    key: "keepOpen",
                    get: function() {
                        return Fs
                    }
                }, {
                    key: "enabled",
                    get: function() {
                        return Hs
                    }
                }]);
                return n
            }(i.ZP.Store);
            Ws.displayName = "SoundboardOverlayStore";
            const Ks = new Ws(yn.Z, {
                SOUNDBOARD_SET_OVERLAY_ENABLED: function(e) {
                    Hs = e.enabled;
                    e.enabled && (Fs = e.keepOpen)
                }
            });
            var Xs = n(607313),
                Qs = n(25009),
                Js = n(962392),
                qs = n(460214),
                $s = n(411411),
                eu = n.n($s);

            function tu(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function nu(e, t) {
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
                    if ("string" == typeof e) return tu(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return tu(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ru() {
                var e = nu((0, i.Wu)([Ks], (function() {
                        return [Ks.enabled, Ks.keepOpen]
                    })), 2),
                    t = e[0],
                    n = e[1],
                    o = (0, i.e7)([Mt.Z], (function() {
                        return Mt.Z.getVoiceChannelId()
                    })),
                    a = (0, i.e7)([xt.Z], (function() {
                        return xt.Z.getChannel(o)
                    }), [o]),
                    c = null == a ? void 0 : a.getGuildId();
                return t && null != a ? (0, r.jsx)("div", {
                    className: eu().widget,
                    children: (0, r.jsx)(Qs.Z, {
                        width: qs.FW.width,
                        height: qs.FW.height,
                        guildId: c,
                        channel: a,
                        keepOpen: n,
                        onClose: function() {
                            var e = (0, Js.Z)();
                            null != e && (0, Xs.oZ)(e)
                        },
                        analyticsSource: "overlay"
                    })
                }) : null
            }
            var ou = n(892520),
                iu = n.n(ou);

            function au(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a),
                        l = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function cu(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            au(i, r, o, a, c, "next", e)
                        }

                        function c(e) {
                            au(i, r, o, a, c, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function lu(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function su(e) {
                su = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return su(e)
            }

            function uu(e, t) {
                return !t || "object" !== du(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function fu(e, t) {
                fu = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return fu(e, t)
            }
            var du = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function pu(e) {
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
                    var n, r = su(e);
                    if (t) {
                        var o = su(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return uu(this, n)
                }
            }
            var hu = function(e, t) {
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
            var yu = null;

            function vu(e) {
                e.preventDefault()
            }
            Me.FB, 0;

            function gu(e) {
                (0, bt.jW)(e, cu((function() {
                    var e, t;
                    return hu(this, (function(o) {
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
                                                lu(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({}, e))
                                }]
                        }
                    }))
                })))
            }
            var bu = function(e) {
                    var t, n = e.keybind,
                        o = e.onClick,
                        i = e.isPreviewingInGame,
                        c = e.locked,
                        l = c ? a.Clickable : "div";
                    return (0, r.jsx)(l, {
                        className: m()(iu().overlayBackground, (t = {}, lu(t, iu().overlayActive, !c), lu(t, iu().overlayLocked, c), lu(t, iu().previewMode, !c && i), t)),
                        onMouseDown: function(e) {
                            var t = e.currentTarget,
                                n = e.target;
                            e.button === ie.AeJ.PRIMARY && t === n && o()
                        },
                        onContextMenu: gu,
                        children: c ? null : (0, r.jsx)("div", {
                            className: iu().closeContainer,
                            children: (0, r.jsx)(mt.Z, {
                                variant: mt.Z.Variants.BOLD,
                                keybind: n,
                                closeAction: o
                            })
                        })
                    })
                },
                mu = function(e) {
                    return {
                        keyCode: e.keyCode,
                        shiftKey: e.shiftKey,
                        metaKey: e.metaKey,
                        altKey: e.altKey,
                        ctrlKey: e.ctrlKey
                    }
                },
                Ou = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && fu(e, t)
                    }(n, e);
                    var t = pu(n);

                    function n(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        var r;
                        (r = t.call(this, e)).handleWindowResize = ht()((function() {
                            r.forceUpdate()
                        }), 500);
                        r.activeKeyEventShapes = [];
                        r.lockEventShape = (0, zt.d2)(r.props.keybindKeyCodes);
                        r.getActiveKeyEventIndex = function(e) {
                            return r.activeKeyEventShapes.findIndex((function(t) {
                                return vt()(t, e)
                            }))
                        };
                        r.onKeyDownGlobal = function(e) {
                            var t = mu(e),
                                n = r.getActiveKeyEventIndex(t) > -1,
                                o = [16, 17, 18, 91].includes(e.keyCode);
                            n || o || r.activeKeyEventShapes.push(t);
                            if (r.activeKeyEventShapes.length === r.lockEventShape.length && r.lockEventShape.every((function(e) {
                                    return r.activeKeyEventShapes.some((function(t) {
                                        return vt()(e, t)
                                    }))
                                }))) {
                                e.preventDefault();
                                e.stopPropagation()
                            }
                            var i = r.props,
                                a = i.locked,
                                c = i.activeRegions;
                            t.keyCode === dt().codes.esc && a && c.has(ie.O0n.TEXT_WIDGET) && j.Z.deactivateAllRegions()
                        };
                        r.onKeyUpGlobal = function(e) {
                            var t = mu(e),
                                n = r.getActiveKeyEventIndex(t);
                            n > -1 && r.activeKeyEventShapes.splice(n, 1)
                        };
                        var o = e.locked && Bt.Z.isPinned(ie.Odu.TEXT);
                        St.Z.setLayout(o ? Ot.Xq : Ot.Sr);
                        o && St.Z.enable();
                        return r
                    }
                    var o = n.prototype;
                    o.handleLock = function() {
                        (0, a.hasAnyModalOpen)() || Dt.Z.isOpen() || j.Z.setLocked(!0, (0, Ze.QF)())
                    };
                    o.handleDeactivate = function() {
                        j.Z.deactivateAllRegions()
                    };
                    o.componentDidMount = function() {
                        j.Z.startSession();
                        Ct.Z.initialize();
                        Et.Z.initialize();
                        Pt.Z.initialize()
                    };
                    o.componentDidUpdate = function(e) {
                        var t = this.props.initialized;
                        if (t)
                            if (!t || e.initialized) {
                                if (!e.locked && this.props.locked) {
                                    window.addEventListener("contextmenu", vu, !1);
                                    if (null != yu) {
                                        var n = Date.now() - yu;
                                        j.Z.track(ie.rMx.OVERLAY_LOCKED, {
                                            unlocked_duration: n
                                        });
                                        yu = null
                                    }
                                    St.Z.disable();
                                    this.activeKeyEventShapes = [];
                                    if (Bt.Z.isPinned(ie.Odu.TEXT)) {
                                        St.Z.setLayout(Ot.Xq);
                                        St.Z.enable()
                                    }
                                } else if (e.locked && !this.props.locked) {
                                    window.removeEventListener("contextmenu", vu, !1);
                                    if (null == yu) {
                                        yu = Date.now();
                                        j.Z.track(ie.rMx.OVERLAY_UNLOCKED)
                                    }
                                    St.Z.disable();
                                    this.activeKeyEventShapes = [];
                                    St.Z.setLayout(Ot.Sr);
                                    St.Z.enable()
                                }
                                e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, zt.d2)(this.props.keybindKeyCodes))
                            } else this.initialSetup()
                    };
                    o.initialSetup = function() {
                        var e, t = this.props,
                            n = t.connectedToVoice,
                            r = t.locked,
                            o = t.canGoLive,
                            i = t.isStreaming,
                            a = t.voiceGuild,
                            c = t.voiceChannelId,
                            l = t.game;
                        j.Z.track(ie.rMx.OVERLAY_INITIALIZED, {
                            voice_widget_connected: n,
                            text_widget_connected: Bt.Z.isPinned(ie.Odu.TEXT)
                        });
                        o && !i && null != l && (e = n && null != a && null != c ? {
                            type: "go-live",
                            voiceChannelId: c,
                            voiceGuild: a,
                            game: l
                        } : {
                            type: "go-live-2",
                            game: l
                        });
                        j.Z.overlayMounted(null, e);
                        window.addEventListener("resize", this.handleWindowResize);
                        r && window.addEventListener("contextmenu", vu, !1);
                        ke.ZP.blur();
                        if (Me.FB) {
                            var s = ke.ZP.requireModule("discord_overlay2");
                            if (void 0 !== s.setPerfInfoCallback) {
                                s.setPerfInfoCallback((function(e) {
                                    j.Z.track(ie.rMx.OVERLAY_PERF_INFO, e)
                                }));
                                s.broadcastCommand({
                                    message: "set_perf_report_interval",
                                    interval: 9e5
                                })
                            }
                            ke.ZP.on("REQUEST_OPEN_EXTERNAL_URL", (function(e, t) {
                                Bt.Z.getDisableExternalLinkAlert() || t === kt.Z.getLastURL() ? ke.ZP.send("OPEN_EXTERNAL_URL", t) : gt.Z.show({
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
                        this.props.locked && window.removeEventListener("contextmenu", vu, !1);
                        Ct.Z.terminate();
                        Et.Z.terminate();
                        Pt.Z.terminate()
                    };
                    o.renderInvalidSizeMessage = function() {
                        return (0, r.jsx)(Gt.Z, {
                            justify: Gt.Z.Justify.CENTER,
                            align: Gt.Z.Align.CENTER,
                            className: iu().invalidContainer,
                            children: (0, r.jsx)("div", {
                                className: iu().inactiveContainer,
                                children: A.Z.Messages.OVERLAY_TOO_SMALL.format(Ze.FW)
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
                            y = Tt.default.getId();
                        return (0, r.jsxs)("div", {
                            className: iu().overlay,
                            children: [(0,
                                r.jsx)(Zs, {}), a && (0, r.jsx)("header", {
                                className: iu().previewingInGameHeader,
                                children: A.Z.Messages.OVERLAY_IN_GAME_PREVIEW_HEADER
                            }), undefined, (!t || c.has(ie.O0n.TEXT_WIDGET)) && (0, r.jsx)(bu, {
                                locked: t,
                                keybind: n,
                                onClick: t ? this.handleDeactivate : this.handleLock,
                                isPreviewingInGame: a
                            }), (0, Ze.Te)(l) ? (0, r.jsx)(gs, {
                                className: m()((p = {}, lu(p, iu().layoutLocked, t), lu(p, iu().layoutUnlocked, !t), p))
                            }) : t ? null : this.renderInvalidSizeMessage(), (0, r.jsx)(ru, {}), null != s && null != u && (0, r.jsx)(Ls, {
                                streamerId: y,
                                guildId: s.id,
                                channelId: u
                            }), (0, r.jsx)(Hr, {
                                locked: h,
                                keybind: n
                            }), (0, r.jsx)(sn, {})]
                        })
                    };
                    return n
                }(o.Component);

            function Su() {
                var e = (0, i.cj)([Bt.Z], (function() {
                        return {
                            locked: Bt.Z.isUILocked((0, Ze.QF)()),
                            initialized: Bt.Z.initialized,
                            incompatibleApp: Bt.Z.incompatibleApp,
                            activeRegions: Bt.Z.getActiveRegions(),
                            isPreviewingInGame: Bt.Z.isPreviewingInGame()
                        }
                    })),
                    t = e.locked,
                    n = e.initialized,
                    o = e.incompatibleApp,
                    a = e.activeRegions,
                    c = e.isPreviewingInGame,
                    l = (0, i.e7)([Ut.Z], (function() {
                        return Ut.Z.windowSize()
                    })),
                    s = (0,
                        i.e7)([Vt.Z], (function() {
                        return Vt.Z.getOverlayKeybind()
                    })),
                    u = (0, i.e7)([Mt.Z], (function() {
                        return Mt.Z.getVoiceChannelId()
                    })),
                    f = (0, i.e7)([xt.Z], (function() {
                        return xt.Z.getChannel(u)
                    })),
                    d = (0, i.e7)([Nt.Z], (function() {
                        return null != f ? Nt.Z.getGuild(f.guild_id) : null
                    })),
                    p = (0, i.e7)([At.ZP, Lt.Z], (function() {
                        return (0, It.Z)(At.ZP, Lt.Z)
                    })),
                    h = (0, i.e7)([Rt.Z], (function() {
                        return (0, jt.Z)(Rt.Z)
                    })),
                    y = (0, i.e7)([Zt.Z], (function() {
                        return null != Zt.Z.getCurrentUserActiveStream()
                    })),
                    v = (0, wt.Z)(_t.Z.OVERLAY).AnalyticsLocationProvider;
                return (0, r.jsx)(v, {
                    children: (0, r.jsx)(Ou, {
                        locked: t,
                        initialized: n,
                        incompatibleApp: o,
                        activeRegions: a,
                        isPreviewingInGame: c,
                        windowSize: l,
                        keybind: null != s ? (0, zt.BB)(s.shortcut, !0) : "???",
                        keybindKeyCodes: null != s ? s.shortcut : [],
                        connectedToVoice: null != u,
                        voiceChannelId: null != f ? f.id : null,
                        voiceGuild: d,
                        game: p,
                        canGoLive: h,
                        isStreaming: y
                    })
                })
            }
            n(815784), n(173628);
            i.ZP.initialize();
            const Eu = function() {
                o.useEffect((function() {
                    d.Z.initialize();
                    u.Z.initialize();
                    h.Z.init();
                    p.Z.init();
                    return function() {
                        d.Z.terminate();
                        u.Z.terminate()
                    }
                }), []);
                return (0, r.jsxs)(o.Fragment, {
                    children: [(0, r.jsx)(f.Z, {}), (0, r.jsx)(c.Z, {
                        children: (0, r.jsxs)(ut, {
                            children: [(0, r.jsx)(g.Co, {}), (0, r.jsx)(y.ZP, {}), (0, r.jsx)(s.Wu, {
                                appContext: ie.IlC.OVERLAY,
                                renderWindow: window,
                                children: (0, r.jsxs)(v.yP, {
                                    children: [(0, r.jsx)(Su, {}), (0, r.jsx)(a.Modals, {}), (0, r.jsx)(l.Z, {}), (0, r.jsx)(v.Un, {})]
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
                c = n(882723),
                l = n(778613),
                s = n(2590),
                u = n(473708),
                f = n(150814),
                d = n.n(f),
                p = n(518280),
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
                m = function(e) {
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
                O = [s._vf.DISABLED, s._vf.TOP_LEFT, s._vf.TOP_RIGHT, s._vf.BOTTOM_LEFT, s._vf.BOTTOM_RIGHT];

            function S(e) {
                var t = e.position,
                    n = e.onChange,
                    i = g(o.useState((function() {
                        return "notification-position-selector-".concat(b++)
                    })), 1)[0],
                    f = t === s._vf.DISABLED ? u.Z.Messages.OVERLAY_NOTIFICATION_SETTINGS_DISABLED : u.Z.Messages.OVERLAY_NOTIFICATION_SETTINGS_POSITION.format({
                        position: m(t)
                    });
                return (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(c.FocusRing, {
                        within: !0,
                        offset: -2,
                        children: (0, r.jsx)("div", {
                            className: a()(d().wrapper, v({}, d().disabledSelected, t === s._vf.DISABLED)),
                            children: O.map((function(e) {
                                var o;
                                return (0, r.jsxs)("label", {
                                    className: a()((o = {}, v(o, d().selected, e === t), v(o, d().disabled, e === s._vf.DISABLED), v(o, d().topRight, e === s._vf.TOP_RIGHT), v(o, d().topLeft, e === s._vf.TOP_LEFT), v(o, d().bottomRight, e === s._vf.BOTTOM_RIGHT), v(o, d().bottomLeft, e === s._vf.BOTTOM_LEFT), o)),
                                    children: [m(e), e === s._vf.DISABLED ? (0, r.jsx)(l.Z, {
                                        className: d().disabledIcon
                                    }) : null, (0,
                                        r.jsx)("input", {
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
//# sourceMappingURL=501ede3938e24d1de3b0.js.map