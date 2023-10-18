"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [83097], {
        283097: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => O
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(70418),
                c = n(265508),
                u = n(473903),
                s = n(107364),
                a = n(473708),
                l = n(374207),
                f = n.n(l);

            function p(e, t, n, r, o, i, c) {
                try {
                    var u = e[i](c),
                        s = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function d(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function c(e) {
                            p(i, r, o, c, u, "next", e)
                        }

                        function u(e) {
                            p(i, r, o, c, u, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function b(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var y = function(e, t) {
                var n, r, o, i, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            c.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(i);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                i = t.call(e, c)
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
                        }([i, u])
                    }
                }
            };

            function h(e) {
                var t = e.onClose,
                    s = function() {
                        null == t || t()
                    },
                    l = function() {
                        s();
                        (0, i.openModalLazy)(d((function() {
                            var e, t;
                            return y(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(71379), n.e(73646)]).then(n.bind(n, 171379))];
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
                                                        b(e, t, n[t])
                                                    }))
                                                }
                                                return e
                                            }({}, e))
                                        }]
                                }
                            }))
                        })))
                    },
                    f = (0, o.e7)([u.default], (function() {
                        return u.default.getCurrentUser()
                    }));
                return null == (null == f ? void 0 : f.email) ? (0, r.jsx)(i.Button, {
                    onClick: l,
                    color: i.Button.Colors.BRAND,
                    look: i.Button.Looks.FILLED,
                    children: a.Z.Messages.ADD_EMAIL_SHORT
                }) : (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(i.Button, {
                        onClick: l,
                        color: i.Button.Colors.PRIMARY,
                        look: i.Button.Looks.LINK,
                        children: a.Z.Messages.CHANGE_EMAIL_SHORT
                    }), (0, r.jsx)(c.Z, {
                        color: i.Button.Colors.BRAND,
                        onClick: s
                    })]
                })
            }
            const O = function(e) {
                var t = e.onClose,
                    n = e.transitionState;
                return (0, r.jsxs)(i.ModalRoot, {
                    transitionState: n,
                    children: [(0, r.jsx)(i.ModalHeader, {
                        children: (0, r.jsx)(i.FormTitle, {
                            tag: i.FormTitleTags.H4,
                            children: a.Z.Messages.PREMIUM_NOT_VERIFIED
                        })
                    }), (0, r.jsxs)(i.ModalContent, {
                        children: [(0, r.jsx)("div", {
                            className: f().imageUnverified
                        }), (0, r.jsx)(i.Text, {
                            variant: "text-md/normal",
                            className: f().message,
                            children: a.Z.Messages.PREMIUM_NOT_VERIFIED_BODY
                        })]
                    }), (0, r.jsx)(i.ModalFooter, {
                        children: (0, r.jsx)(s.Z, {
                            justify: s.Z.Justify.END,
                            children: (0, r.jsx)(h, {
                                onClose: t
                            })
                        })
                    })]
                })
            }
        },
        265508: (e, t, n) => {
            n.d(t, {
                Z: () => R
            });
            var r = n(785893),
                o = n(667294),
                i = n(441143),
                c = n.n(i),
                u = n(202351),
                s = n(70418),
                a = n(84441),
                l = n(895303),
                f = n(473903),
                p = n(473708);

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function b(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        b(e, t, n[t])
                    }))
                }
                return e
            }

            function O(e, t) {
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

            function m(e, t) {
                return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function j(e, t) {
                j = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return j(e, t)
            }
            var v = function(e) {
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
                    var n, r = y(e);
                    if (t) {
                        var o = y(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return m(this, n)
                }
            }
            var E = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && j(e, t)
                }(n, e);
                var t = g(n);

                function n() {
                    d(this, n);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        isSendingVerificationEmail: !1
                    };
                    e.handleResendVerification = function() {
                        var t = e.props,
                            n = t.currentUser,
                            o = t.onClick;
                        null == o || o();
                        e.setState({
                            isSendingVerificationEmail: !0
                        }, (function() {
                            a.Z.verifyResend().then((function() {
                                return (0, s.openModal)((function(e) {
                                    return (0, r.jsx)(s.ConfirmModal, O(h({
                                        header: p.Z.Messages.VERIFICATION_EMAIL_TITLE,
                                        confirmText: p.Z.Messages.OKAY,
                                        confirmButtonColor: s.Button.Colors.BRAND
                                    }, e), {
                                        children: (0, r.jsx)(s.Text, {
                                            variant: "text-md/normal",
                                            children: p.Z.Messages.VERIFICATION_EMAIL_BODY.format({
                                                email: n.email
                                            })
                                        })
                                    }))
                                }))
                            })).catch((function(e) {
                                var t = e.body,
                                    n = p.Z.Messages.VERIFICATION_EMAIL_ERROR_BODY;
                                null != t && t.email && (n = t.email);
                                (0, s.openModal)((function(e) {
                                    return (0, r.jsx)(l.default, h({
                                        title: p.Z.Messages.VERIFICATION_EMAIL_ERROR_TITLE,
                                        body: n
                                    }, e))
                                }))
                            })).then((function() {
                                return e.setState({
                                    isSendingVerificationEmail: !1
                                })
                            }))
                        }))
                    };
                    return e
                }
                n.prototype.render = function() {
                    var e = this.props,
                        t = e.color,
                        n = e.look,
                        o = e.size;
                    return (0, r.jsx)(s.Button, {
                        look: n,
                        size: o,
                        color: t,
                        disabled: this.state.isSendingVerificationEmail,
                        onClick: this.handleResendVerification,
                        children: p.Z.Messages.RESEND_VERIFICATION_EMAIL
                    })
                };
                return n
            }(o.Component);
            E.defaultProps = {
                size: s.Button.Sizes.MEDIUM,
                color: s.Button.Colors.BRAND
            };
            const R = u.ZP.connectStores([f.default], (function() {
                var e = f.default.getCurrentUser();
                c()(null != e, "ResendEmailVerificationButton: currentUser cannot be undefined");
                return {
                    currentUser: e
                }
            }))(E)
        }
    }
]);