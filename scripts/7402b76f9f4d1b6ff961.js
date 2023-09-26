"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [75651], {
        975651: (t, e, n) => {
            n.r(e);
            n.d(e, {
                default: () => b
            });
            var r = n(785893),
                o = n(667294),
                s = n(304548),
                a = n(473708),
                i = n(691838),
                l = n.n(i);

            function u(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function c(t) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return c(t)
            }

            function d(t, e) {
                return !e || "object" !== p(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function f(t, e) {
                f = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return f(t, e)
            }
            var p = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function h(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = c(t);
                    if (e) {
                        var o = c(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }
            var y = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && f(t, e)
                }(n, t);
                var e = h(n);

                function n() {
                    u(this, n);
                    var t;
                    (t = e.apply(this, arguments)).state = {
                        value: "",
                        error: null,
                        isLoading: !1
                    };
                    t.handleSubmit = function(e) {
                        e.preventDefault();
                        var n = t.state.value,
                            r = t.props,
                            o = r.handleSubmit,
                            s = r.onClose,
                            a = r.onError;
                        t.setState({
                            isLoading: !0
                        });
                        o(n).then((function(t) {
                            return s(null != t ? t : void 0)
                        }), (function(e) {
                            if (null != e.body) {
                                null == a || a(e.body);
                                t.shouldSkipErrorMsgRender(e.body) || (e.body.password ? t.setState({
                                    error: e.body.password,
                                    isLoading: !1
                                }) : e.body.message && t.setState({
                                    error: e.body.message,
                                    isLoading: !1
                                }))
                            }
                        }))
                    };
                    t.shouldSkipErrorMsgRender = function(e) {
                        var n = t.props.skipErrorMsgAbortCode;
                        return null != n && (null == e ? void 0 : e.code) === n
                    };
                    t.handleCancel = function() {
                        (0, t.props.onClose)()
                    };
                    t.handlePasswordChange = function(e) {
                        var n = t.props.onPasswordChange;
                        null == n || n(e);
                        t.setState({
                            value: e
                        })
                    };
                    return t
                }
                n.prototype.render = function() {
                    var t = this.props,
                        e = t.title,
                        n = t.actionText,
                        i = t.children,
                        u = t.transitionState,
                        c = this.state,
                        d = c.error,
                        f = c.isLoading,
                        p = c.value,
                        h = o.Children.count(i) > 0 ? (0, r.jsx)(s.Card, {
                            type: s.Card.Types.WARNING,
                            className: l().card,
                            children: (0, r.jsx)(s.Text, {
                                className: l().warning,
                                variant: "text-md/normal",
                                children: i
                            })
                        }) : null;
                    return (0, r.jsx)(s.ModalRoot, {
                        transitionState: u,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(s.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(s.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: e
                                })
                            }), (0, r.jsxs)(s.ModalContent, {
                                children: [h, (0, r.jsxs)(s.FormItem, {
                                    title: a.Z.Messages.FORM_LABEL_PASSWORD,
                                    className: l().spacing,
                                    children: [(0, r.jsx)(s.TextInput, {
                                        type: "password",
                                        autoComplete: "off",
                                        autoFocus: !0,
                                        value: p,
                                        onChange: this.handlePasswordChange
                                    }), null != d && "" !== d ? (0, r.jsxs)(s.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-danger",
                                        className: l().error,
                                        children: [" ", d, " "]
                                    }) : null]
                                })]
                            }), (0, r.jsxs)(s.ModalFooter, {
                                children: [(0, r.jsx)(s.Button, {
                                    type: "submit",
                                    disabled: f || 0 === p.length,
                                    children: null != n ? n : a.Z.Messages.CONFIRM
                                }), (0, r.jsx)(s.Button, {
                                    onClick: this.handleCancel,
                                    look: s.Button.Looks.LINK,
                                    color: s.Button.Colors.PRIMARY,
                                    children: a.Z.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                };
                return n
            }(o.PureComponent);
            y.key = function() {
                return "password-confirm-modal"
            };
            const b = y
        }
    }
]);