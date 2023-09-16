(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [73356], {
        336751: (e, t, r) => {
            e.exports = r.p + "983ff3d2eb4a69afbc94645b36da6cf7.svg"
        },
        182765: (e, t, r) => {
            e.exports = r.p + "092b071c3b3141a58787415450c27857.png"
        },
        549933: (e, t, r) => {
            e.exports = r.p + "8bf5f8aa37e778466fa7091c79cd7dbe.png"
        },
        480281: (e, t, r) => {
            "use strict";
            r.d(t, {
                cK: () => b,
                c2: () => _,
                ZP: () => S
            });
            var n = r(785893),
                o = r(667294),
                s = r(101653),
                i = r(841303),
                c = r.n(i);

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
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

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function f(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                t && y(e, t)
            }

            function p(e) {
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
            }

            function d(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) {
                        r = s[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++) {
                        r = s[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function h(e, t) {
                return !t || "object" !== m(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function y(e, t) {
                y = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return y(e, t)
            }
            var b, g, m = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function j(e) {
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
                    var r, n = u(e);
                    if (t) {
                        var o = u(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return h(this, r)
                }
            }! function(e) {
                e.SIZE_40 = "SIZE_40";
                e.SIZE_60 = "SIZE_60"
            }(b || (b = {}));
            var O = Object.freeze((l(g = {}, b.SIZE_40, "size-40"), l(g, b.SIZE_60, "size-60"), g)),
                v = r(182765),
                x = function(e) {
                    f(r, e);
                    var t = j(r);

                    function r() {
                        a(this, r);
                        return t.apply(this, arguments)
                    }
                    r.prototype.render = function() {
                        var e = this.props,
                            t = e.className,
                            r = e.text,
                            o = d(e, ["className", "text"]);
                        return (0, n.jsx)("div", {
                            style: {
                                padding: 8,
                                borderRadius: 4,
                                width: o.size,
                                height: o.size,
                                backgroundColor: o.bgColor
                            },
                            className: t,
                            children: (0,
                                n.jsx)(s.Z, p({
                                value: r,
                                level: "M"
                            }, o))
                        })
                    };
                    return r
                }(o.PureComponent);
            x.defaultProps = {
                size: 128,
                bgColor: "#ffffff",
                fgColor: "#000000"
            };
            var _ = function(e) {
                f(r, e);
                var t = j(r);

                function r() {
                    a(this, r);
                    return t.apply(this, arguments)
                }
                r.prototype.render = function() {
                    var e = this.props.overlaySize,
                        t = O[null != e ? e : b.SIZE_40];
                    return (0, n.jsxs)("div", {
                        className: c().qrCodeContainer,
                        children: [(0, n.jsx)(x, p({}, this.props)), (0, n.jsx)("div", {
                            className: c().qrCodeOverlay,
                            children: (0, n.jsx)("img", {
                                className: c()[t],
                                src: v,
                                alt: ""
                            })
                        })]
                    })
                };
                return r
            }(o.PureComponent);
            _.defaultProps = {
                size: 144,
                bgColor: "#ffffff",
                fgColor: "#000000"
            };
            const S = x
        },
        173356: (e, t, r) => {
            "use strict";
            r.r(t);
            r.d(t, {
                default: () => S
            });
            var n = r(785893),
                o = r(667294),
                s = r(882723),
                i = r(130671),
                c = r(480281),
                a = r(197088),
                l = r(473903),
                u = r(107364),
                f = r(178176),
                p = r(473708),
                d = r(425100),
                h = r.n(d);

            function y(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function b(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function g(e) {
                g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return g(e)
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        b(e, t, r[t])
                    }))
                }
                return e
            }

            function j(e, t) {
                return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function O(e, t) {
                O = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return O(e, t)
            }
            var v = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function x(e) {
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
                    var r, n = g(e);
                    if (t) {
                        var o = g(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return j(this, r)
                }
            }
            var _ = function(e) {
                var t = e.image,
                    r = e.label,
                    o = e.text,
                    i = e.children;
                return (0, n.jsxs)(u.Z, {
                    className: h().spacing,
                    children: [(0, n.jsx)(u.Z, {
                        grow: 0,
                        shrink: 0,
                        basis: "156px",
                        justify: u.Z.Justify.CENTER,
                        className: h().image,
                        children: t
                    }), (0, n.jsx)(u.Z, {
                        direction: u.Z.Direction.VERTICAL,
                        justify: u.Z.Justify.CENTER,
                        children: (0, n.jsxs)("div", {
                            children: [(0, n.jsx)(s.FormTitle, {
                                tag: "h5",
                                className: h().headerSpacing,
                                children: r
                            }), (0, n.jsx)(s.FormText, {
                                type: s.FormText.Types.DESCRIPTION,
                                children: o
                            }), i]
                        })
                    })]
                })
            };
            const S = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && O(e, t)
                }(o, e);
                var t = x(o);

                function o() {
                    y(this, o);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        code: "",
                        totpSecret: (0, f.bV)(),
                        error: null,
                        isVerifying: !1
                    };
                    e.handleCodeChange = function(t) {
                        e.setState({
                            code: t
                        })
                    };
                    e.handleActivate = function(t) {
                        t.preventDefault();
                        var r = e.props,
                            n = r.password,
                            o = r.emailToken,
                            s = e.state,
                            c = s.totpSecret,
                            l = s.code;
                        e.setState({
                            isVerifying: !0
                        });
                        i.Z.enable(m({
                            password: n,
                            code: l,
                            secret: (0, f.Qe)(c)
                        }, (0, a.j)() && {
                            emailToken: o
                        })).then(e.handleActivateSuccess, (function(t) {
                            return e.setState({
                                error: t.body.message,
                                isVerifying: !1
                            })
                        }))
                    };
                    e.handleActivateSuccess = function() {
                        var t = e.props,
                            r = t.onClose,
                            n = t.handleEnableMFASuccess;
                        e.setState({
                            isVerifying: !1
                        });
                        n();
                        null == r || r()
                    };
                    return e
                }
                o.prototype.render = function() {
                    var e, t = this.props,
                        o = t.transitionState,
                        i = t.onClose,
                        a = this.state,
                        d = a.totpSecret,
                        y = a.code,
                        b = a.isVerifying,
                        g = null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.email,
                        m = (0, f.U0)(null != g ? g : "", d),
                        j = (0, n.jsx)("form", {
                            onSubmit: this.handleActivate,
                            children: (0, n.jsxs)(u.Z, {
                                className: h().inputContainer,
                                align: u.Z.Align.START,
                                children: [(0, n.jsx)(s.TextInput, {
                                    value: y,
                                    className: h().input,
                                    placeholder: "000 000",
                                    maxLength: 7,
                                    autoComplete: "one-time-code",
                                    onChange: this.handleCodeChange,
                                    error: this.state.error,
                                    autoFocus: !0
                                }), (0, n.jsx)(u.Z.Child, {
                                    grow: 0,
                                    shrink: 0,
                                    children: (0, n.jsx)(s.Button, {
                                        type: "submit",
                                        submitting: b,
                                        children: p.Z.Messages.TWO_FA_ACTIVATE
                                    })
                                })]
                            })
                        });
                    return (0, n.jsxs)(s.ModalRoot, {
                        transitionState: o,
                        size: s.ModalSize.DYNAMIC,
                        className: h().customWidth,
                        children: [(0, n.jsxs)(s.ModalHeader, {
                            separator: !1,
                            children: [(0, n.jsxs)(u.Z.Child, {
                                grow: 1,
                                shrink: 1,
                                children: [(0, n.jsx)(s.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: p.Z.Messages.TWO_FA_ENABLE
                                }), (0, n.jsx)(s.Text, {
                                    variant: "text-xs/normal",
                                    className: h().subHeader,
                                    children: p.Z.Messages.TWO_FA_ENABLE_SUBHEADER
                                })]
                            }), (0, n.jsx)(u.Z.Child, {
                                grow: 0,
                                children: (0, n.jsx)(s.ModalCloseButton, {
                                    onClick: i
                                })
                            })]
                        }), (0, n.jsxs)(s.ModalContent, {
                            children: [(0, n.jsx)(_, {
                                image: (0, n.jsx)("img", {
                                    alt: "",
                                    src: r(549933),
                                    width: 100,
                                    height: 100
                                }),
                                label: p.Z.Messages.TWO_FA_DOWNLOAD_APP_LABEL,
                                text: p.Z.Messages.TWO_FA_DOWNLOAD_APP_BODY.format({
                                    googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en",
                                    authyURL: "https://www.authy.com/"
                                })
                            }), (0, n.jsx)(s.FormDivider, {
                                className: h().divider
                            }), (0, n.jsx)(_, {
                                image: (0, n.jsx)(c.ZP, {
                                    text: m
                                }),
                                label: p.Z.Messages.TWO_FA_QR_LABEL,
                                text: p.Z.Messages.TWO_FA_QR_BODY,
                                children: (0, n.jsxs)("div", {
                                    className: h().topSpacing,
                                    children: [(0, n.jsx)(s.FormTitle, {
                                        tag: "h5",
                                        className: h().headerSpacing,
                                        children: p.Z.Messages.TWO_FA_KEY
                                    }), (0, n.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        className: h().secret,
                                        selectable: !0,
                                        children: d
                                    })]
                                })
                            }), (0, n.jsx)(s.FormDivider, {
                                className: h().divider
                            }), (0, n.jsx)(_, {
                                image: (0, n.jsx)("img", {
                                    alt: "",
                                    src: r(336751)
                                }),
                                label: p.Z.Messages._TWO_FA_LOGIN_LABEL,
                                text: p.Z.Messages.TWO_FA_LOGIN_BODY,
                                children: j
                            })]
                        })]
                    })
                };
                return o
            }(o.PureComponent)
        }
    }
]);
//# sourceMappingURL=be7e832f1b439648e520.js.map