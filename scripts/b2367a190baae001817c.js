"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [16273, 54104, 73496], {
        579194: (e, t, n) => {
            n.d(t, {
                FD: () => S,
                Zy: () => O,
                ss: () => g,
                S2: () => E,
                Mn: () => C,
                ol: () => A,
                V3: () => N,
                I5: () => w,
                UZ: () => j,
                cV: () => P,
                J5: () => I,
                b9: () => x,
                si: () => R,
                W3: () => M,
                P6: () => U,
                _V: () => k
            });
            var r = n(281110),
                o = n(630631),
                a = n(575945),
                l = n(744564),
                i = n(784426),
                u = n(652591),
                c = n(775173),
                s = n(488110),
                f = n(120415),
                d = n(84441),
                p = n(2590),
                m = n(473708);

            function y(e, t, n, r, o, a, l) {
                try {
                    var i = e[a](l),
                        u = i.value
                } catch (e) {
                    n(e);
                    return
                }
                i.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function v(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);

                        function l(e) {
                            y(a, r, o, l, i, "next", e)
                        }

                        function i(e) {
                            y(a, r, o, l, i, "throw", e)
                        }
                        l(void 0)
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
            var _ = function(e, t) {
                var n, r, o, a, l = {
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
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                (r = 0, o) && (a = [2 & a[0], o.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            l.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = a;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(a);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                a = t.call(e, l)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
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

            function S() {
                l.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function O() {
                l.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function g(e, t) {
                var n = t ? m.Z.Messages.DELETE_ACCOUNT : m.Z.Messages.DISABLE_ACCOUNT,
                    o = t ? p.ANM.DELETE_ACCOUNT : p.ANM.DISABLE_ACCOUNT;
                return (0, s.Z)((function(t) {
                    return r.ZP.post({
                        url: o,
                        body: h({
                            password: e
                        }, t),
                        oldFormErrors: !0
                    })
                }), {
                    modalProps: {
                        title: n
                    },
                    checkEnabled: !1
                }).then((function() {
                    d.Z.logoutInternal();
                    (0, i.uL)(p.Z5c.DEFAULT_LOGGED_OUT)
                }))
            }

            function E(e) {
                return T.apply(this, arguments)
            }

            function T() {
                return (T = v((function(e) {
                    var t, n, o;
                    return _(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, r.ZP.patch({
                                    url: p.ANM.ME,
                                    oldFormErrors: !0,
                                    body: e
                                })];
                            case 1:
                                t = a.sent();
                                if ((n = t.body).token) {
                                    o = n.token;
                                    delete n.token;
                                    l.Z.dispatch({
                                        type: "UPDATE_TOKEN",
                                        token: o,
                                        userId: n.id
                                    });
                                    null != (null == e ? void 0 : e.password) && null != (null == e ? void 0 : e.new_password) && l.Z.dispatch({
                                        type: "PASSWORD_UPDATED",
                                        userId: n.id
                                    })
                                }
                                l.Z.dispatch({
                                    type: "CURRENT_USER_UPDATE",
                                    user: n
                                });
                                return [2, t]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function C(e) {
                var t = e.username,
                    n = e.discriminator,
                    r = e.email,
                    a = e.emailToken,
                    i = e.password,
                    d = e.avatar,
                    y = e.avatarDecoration,
                    v = e.newPassword,
                    b = e.globalName;
                l.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                });
                return (0, s.Z)((function(e) {
                    var l = h({
                        username: t,
                        email: r,
                        email_token: a,
                        password: i,
                        avatar: d,
                        discriminator: n,
                        global_name: b,
                        new_password: v
                    }, e);
                    null === y && (l.avatar_decoration_id = null);
                    if (null != y) {
                        l.avatar_decoration_id = y.id;
                        l.avatar_decoration_sku_id = y.skuId
                    }
                    var u = o.Z.get(p.JkL),
                        c = (0, f.xJ)();
                    if (null != c && null != u) {
                        l.push_provider = c;
                        l.push_token = u
                    }
                    var s = o.Z.get(p.scU);
                    if (null != p.mvA && null != s) {
                        l.push_voip_provider = p.mvA;
                        l.push_voip_token = s
                    }
                    return E(l)
                }), {
                    checkEnabled: !1,
                    modalProps: {
                        title: m.Z.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: function() {
                            return l.Z.dispatch({
                                type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                                errors: {}
                            })
                        }
                    }
                }).then((function(e) {
                    var t = e.body;
                    u.default.track(p.rMx.USER_AVATAR_UPDATED, {
                        animated: (0, c.xR)(t.avatar)
                    });
                    l.Z.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    });
                    return e
                }), (function(e) {
                    l.Z.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                        errors: e.body
                    });
                    return e
                }))
            }

            function A() {
                return r.ZP.get({
                    url: p.ANM.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function N() {
                return r.ZP.post({
                    url: p.ANM.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function w(e) {
                l.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                });
                null == e ? a.uv.announce(m.Z.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : a.uv.announce(m.Z.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function j(e) {
                l.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function P(e) {
                l.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function I(e) {
                l.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: e
                })
            }

            function x() {
                l.Z.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function R() {
                l.Z.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function M() {
                l.Z.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function U() {
                l.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function k(e) {
                l.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        919244: (e, t, n) => {
            n.d(t, {
                Z: () => h
            });
            var r = n(785893),
                o = n(667294),
                a = n(294184),
                l = n.n(a),
                i = n(882723),
                u = n(473708),
                c = n(775823),
                s = n.n(c);

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return d(e)
            }

            function p(e, t) {
                return !t || "object" !== y(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function m(e, t) {
                m = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return m(e, t)
            }
            var y = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function v(e) {
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
                    var n, r = d(e);
                    if (t) {
                        var o = d(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }
            var b = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && m(e, t)
                }(n, e);
                var t = v(n);

                function n() {
                    f(this, n);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    };
                    e.setRef = function(t) {
                        e._input = t
                    };
                    e.getLabelText = function() {
                        var t;
                        return null !== (t = e.props.label) && void 0 !== t ? t : e.props.disallowBackupCodes ? u.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : u.Z.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    };
                    e.getSupportedCodeTypes = function() {
                        return e.props.disallowBackupCodes ? u.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : u.Z.Messages.TWO_FA_AUTH_CODE
                    };
                    e.getPlaceholder = function() {
                        return e.props.forceNoPlaceholder ? null : null !== (t = e.props.placeholder) && void 0 !== t ? t : e.getSupportedCodeTypes();
                        var t
                    };
                    e.errorPresent = function() {
                        return null != e.props.error && "" !== e.props.error || null != e.state.errorMessage && "" !== e.state.errorMessage
                    };
                    e.handleRetry = function() {
                        var t = e.props.onRetry;
                        null == t || t().then((function() {
                            return e.setState({
                                retrySuccess: !0
                            })
                        }))
                    };
                    e.handleSubmit = function(t) {
                        t.preventDefault();
                        var n = e.props,
                            r = n.handleSubmit,
                            o = n.onError;
                        r(e.state.code).catch((function(t) {
                            if (null != t.body) {
                                null == o || o(t.body);
                                t.body.message && e.setState({
                                    errorMessage: t.body.message
                                })
                            }
                        }))
                    };
                    e.handleCancel = function() {
                        var t = e.props,
                            n = t.onClose,
                            r = t.handleEarlyClose;
                        n();
                        null == r || r()
                    };
                    e.handleCodeChange = function(t) {
                        e.setState({
                            code: t
                        })
                    };
                    return e
                }
                n.prototype.render = function() {
                    var e, t = this.props,
                        n = t.title,
                        a = t.actionText,
                        c = t.children,
                        f = t.error,
                        d = t.isLoading,
                        p = t.maxLength,
                        m = t.transitionState,
                        y = t.helpMessage,
                        v = t.retryPrompt,
                        b = t.retrySuccessMessage,
                        h = this.state,
                        _ = h.code,
                        S = h.errorMessage,
                        O = h.retrySuccess,
                        g = o.Children.count(c) > 0 ? (0, r.jsx)(i.Card, {
                            type: i.Card.Types.WARNING,
                            className: s().card,
                            children: (0, r.jsx)(i.Text, {
                                variant: "text-md/normal",
                                children: c
                            })
                        }) : null,
                        E = null != v ? (0, r.jsxs)(i.Text, {
                            className: l()(s().submitText, s().spacing),
                            variant: "text-sm/normal",
                            children: [(0, r.jsx)("br", {}), (0, r.jsx)(i.Clickable, {
                                className: l()(s().spacing, s().link),
                                onClick: this.handleRetry,
                                children: (0, r.jsx)(i.Anchor, {
                                    children: v
                                })
                            })]
                        }) : null,
                        T = O ? (0, r.jsx)(i.Card, {
                            type: i.Card.Types.SUCCESS,
                            className: s().card,
                            children: (0, r.jsx)(i.Text, {
                                variant: "text-md/normal",
                                children: b
                            })
                        }) : null;
                    return (0, r.jsx)(i.ModalRoot, {
                        transitionState: m,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(i.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: n
                                })
                            }), (0, r.jsxs)(i.ModalContent, {
                                children: [null != y ? (0, r.jsx)(i.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: s().spacing,
                                    children: y
                                }) : null, g, T, (0, r.jsxs)(i.FormItem, {
                                    title: this.getLabelText(),
                                    className: s().spacing,
                                    children: [(0, r.jsx)(i.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != p ? p : 10,
                                        value: _,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(i.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: s().error,
                                        children: null != f ? f : S
                                    }) : null, E]
                                })]
                            }), (0, r.jsxs)(i.ModalFooter, {
                                children: [(0, r.jsx)(i.Button, {
                                    type: "submit",
                                    disabled: d || 0 === _.length,
                                    children: null != a ? a : u.Z.Messages.CONFIRM
                                }), (0, r.jsx)(i.Button, {
                                    onClick: this.handleCancel,
                                    disabled: d,
                                    look: i.Button.Looks.LINK,
                                    color: i.Button.Colors.PRIMARY,
                                    children: u.Z.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                };
                return n
            }(o.PureComponent);
            b.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            const h = b
        },
        854104: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => A
            });
            var r = n(785893),
                o = n(667294),
                a = n(294184),
                l = n.n(a),
                i = n(882723),
                u = n(84441),
                c = n(579194),
                s = n(415879),
                f = n(107364),
                d = n(652591),
                p = n(646161),
                m = n(463473),
                y = n(2590),
                v = n(571680),
                b = n(473708),
                h = n(323379),
                _ = n.n(h);

            function S(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function O(e, t, n, r, o, a, l) {
                try {
                    var i = e[a](l),
                        u = i.value
                } catch (e) {
                    n(e);
                    return
                }
                i.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function g(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, a = [],
                            l = !0,
                            i = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            o = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return S(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var E = function(e, t) {
                var n, r, o, a, l = {
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
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                (r = 0, o) && (a = [2 & a[0], o.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            l.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = a;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(a);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                a = t.call(e, l)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
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

            function T(e) {
                var t = e.email,
                    n = e.setEmail,
                    a = e.claimRequired,
                    d = e.onSuccess,
                    p = e.onClose,
                    h = g(o.useState(), 2),
                    S = h[0],
                    T = h[1],
                    C = g(o.useState(""), 2),
                    A = C[0],
                    N = C[1],
                    w = g(o.useState(""), 2),
                    j = w[0],
                    P = w[1],
                    I = g(o.useState(!1), 2),
                    x = I[0],
                    R = I[1];
                o.useEffect((function() {
                    return s.Z.flowStep(v.MK.ANY, v.mx.CLAIM_ACCOUNT)
                }), []);
                var M, U, k = (U = (M = function(e) {
                    var n, r, o;
                    return E(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                e.preventDefault();
                                R(!0);
                                T("");
                                P("");
                                a.label = 1;
                            case 1:
                                a.trys.push([1, 3, , 4]);
                                return [4, (0, c.S2)({
                                    email: t,
                                    password: A
                                })];
                            case 2:
                                a.sent();
                                R(!1);
                                d();
                                return [3, 4];
                            case 3:
                                (null == (n = a.sent()) || null === (r = n.body) || void 0 === r ? void 0 : r.email) && T(n.body.email);
                                (null == n || null === (o = n.body) || void 0 === o ? void 0 : o.password) && P(n.body.password);
                                R(!1);
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }, function() {
                    var e = this,
                        t = arguments;
                    return new Promise((function(n, r) {
                        var o = M.apply(e, t);

                        function a(e) {
                            O(o, n, r, a, l, "next", e)
                        }

                        function l(e) {
                            O(o, n, r, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }), function(e) {
                    return U.apply(this, arguments)
                });
                return (0, r.jsxs)("div", {
                    className: l()(_().modalLight, (0, m.Q)(y.BRd.LIGHT)),
                    children: [(0, r.jsxs)(i.ModalHeader, {
                        className: _().formHeader,
                        direction: f.Z.Direction.VERTICAL,
                        separator: !1,
                        children: [(0, r.jsx)("div", {
                            className: _().formImage
                        }), (0, r.jsx)(i.Heading, {
                            className: _().formTitle,
                            variant: "heading-xl/semibold",
                            children: b.Z.Messages.FINISH_SIGNING_UP
                        }), (0, r.jsx)(i.Text, {
                            className: _().formBody,
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: a ? b.Z.Messages.CLAIM_ACCOUNT_REQUIRED_BODY : b.Z.Messages.CLAIM_ACCOUNT_BODY_2
                        }), (0, r.jsx)(i.ModalCloseButton, {
                            className: _().closeButton,
                            onClick: p
                        })]
                    }), (0, r.jsx)(i.ModalContent, {
                        children: (0, r.jsxs)("form", {
                            className: _().formContent,
                            onSubmit: k,
                            children: [(0, r.jsx)(i.FormItem, {
                                title: b.Z.Messages.FORM_LABEL_EMAIL,
                                className: _().formItem,
                                children: (0, r.jsx)(i.TextInput, {
                                    value: t,
                                    error: S,
                                    onChange: function(e) {
                                        return n(e)
                                    },
                                    autoFocus: !0
                                })
                            }), (0, r.jsx)(i.FormItem, {
                                title: b.Z.Messages.FORM_LABEL_PASSWORD,
                                className: _().formItem,
                                children: (0, r.jsx)(i.TextInput, {
                                    type: "password",
                                    value: A,
                                    error: j,
                                    onChange: function(e) {
                                        return N(e)
                                    }
                                })
                            }), (0, r.jsx)(i.Button, {
                                type: "submit",
                                size: i.Button.Sizes.LARGE,
                                fullWidth: !0,
                                submitting: x,
                                disabled: 0 === t.length || 0 === A.length,
                                children: b.Z.Messages.CLAIM_ACCOUNT
                            }), a && (0, r.jsx)(i.Button, {
                                className: _().logoutButton,
                                color: i.Button.Colors.PRIMARY,
                                look: i.Button.Looks.LINK,
                                size: i.Button.Sizes.NONE,
                                onClick: function() {
                                    u.Z.logout();
                                    p()
                                },
                                children: b.Z.Messages.LOGOUT
                            })]
                        })
                    })]
                })
            }

            function C(e) {
                var t = e.email,
                    n = e.claimRequired,
                    a = e.onClose,
                    u = function() {
                        window.open((0, p.t3)(), "_blank");
                        d.default.track(y.rMx.DOWNLOAD_APP, {
                            platform: (0, p.DW)(),
                            ptb: !1,
                            released: !0,
                            has_e_mail: !0,
                            referring_location: "Claim Modal",
                            qr_code: !1
                        })
                    },
                    c = n ? b.Z.Messages.CLAIM_ACCOUNT_REQUIRED_EMAIL_TO : b.Z.Messages.CLAIM_ACCOUNT_EMAIL_TO;
                o.useEffect((function() {
                    return s.Z.flowStep(v.MK.ANY, v.mx.CLAIM_ACCOUNT_SUCCESS)
                }), []);
                return (0, r.jsxs)("div", {
                    className: l()(_().modalLight, (0, m.Q)(y.BRd.LIGHT)),
                    children: [(0, r.jsxs)(i.ModalContent, {
                        className: _().successContent,
                        children: [!n && (0,
                            r.jsx)(i.ModalCloseButton, {
                            className: _().closeButton,
                            onClick: a
                        }), (0, r.jsx)("div", {
                            className: _().successImage
                        }), (0, r.jsx)(i.Text, {
                            className: _().successTitle,
                            variant: "text-lg/semibold",
                            children: c.format({
                                email: t
                            })
                        }), (0, r.jsx)(i.Text, {
                            className: _().successPromotion,
                            variant: "text-md/normal",
                            children: b.Z.Messages.CLAIM_ACCOUNT_PROMOTE_APP_2021_04
                        })]
                    }), n ? (0, r.jsx)(i.ModalFooter, {
                        direction: f.Z.Direction.VERTICAL,
                        children: (0, r.jsx)(i.Button, {
                            size: i.Button.Sizes.LARGE,
                            onClick: a,
                            children: b.Z.Messages.OKAY
                        })
                    }) : (0, r.jsx)(i.ModalFooter, {
                        direction: f.Z.Direction.VERTICAL,
                        children: (0, r.jsx)(i.Button, {
                            color: i.Button.Colors.BRAND,
                            size: i.Button.Sizes.LARGE,
                            onClick: u,
                            children: b.Z.Messages.CLAIM_ACCOUNT_GET_APP
                        })
                    })]
                })
            }

            function A(e) {
                var t = e.onClose,
                    n = e.transitionState,
                    a = e.claimRequired,
                    l = void 0 !== a && a,
                    u = g(o.useState(""), 2),
                    c = u[0],
                    s = u[1],
                    f = g(o.useState(!1), 2),
                    d = f[0],
                    p = f[1];
                return d ? (0, r.jsx)(i.ModalRoot, {
                    transitionState: n,
                    children: (0, r.jsx)(C, {
                        email: c,
                        claimRequired: l,
                        onClose: t
                    })
                }) : (0, r.jsx)(i.ModalRoot, {
                    transitionState: n,
                    children: (0, r.jsx)(T, {
                        email: c,
                        setEmail: s,
                        claimRequired: l,
                        onSuccess: function() {
                            return p(!0)
                        },
                        onClose: t
                    })
                })
            }
        },
        571680: (e, t, n) => {
            n.d(t, {
                MK: () => r,
                FF: () => o,
                mx: () => a,
                X2: () => l,
                EW: () => i
            });
            var r, o, a, l, i;
            ! function(e) {
                e.UNKNOWN = "unknown";
                e.ANY = "any";
                e.INVITE = "invite";
                e.ORGANIC = "organic_registration";
                e.ORGANIC_MARKETING = "organic_marketing";
                e.ORGANIC_GUILD_TEMPLATES = "organic_guild_template";
                e.CREATE_GUILD = "create_guild"
            }(r || (r = {}));
            ! function(e) {
                e.AGE_GATE = "age_gate";
                e.AGE_GATE_UNDERAGE = "age_gate_underage"
            }(o || (o = {}));
            ! function(e) {
                e.CLAIM_ACCOUNT = "claim_account";
                e.CLAIM_ACCOUNT_SUCCESS = "claim_account_success"
            }(a || (a = {}));
            ! function(e) {
                e.GUILD_TEMPLATES = "guild_templates";
                e.GUILD_CREATE = "guild_create";
                e.CREATION_INTENT = "creation_intent";
                e.CHANNEL_PROMPT = "channel_prompt";
                e.JOIN_GUILD = "join_guild";
                e.SUCCESS = "create_success"
            }(l || (l = {}));
            ! function(e) {
                e.NUF_STARTED = "nuf_started";
                e.AGE_GATE = "age_gate";
                e.NUF_COMPLETE = "nuf_complete";
                e.HUB_CONNECTION = "hub_connection"
            }(i || (i = {}))
        },
        415879: (e, t, n) => {
            n.d(t, {
                Z: () => g
            });
            var r = n(38736),
                o = n(630631),
                a = n(296602),
                l = n(652591),
                i = n(571680),
                u = n(2590);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        c(e, t, n[t])
                    }))
                }
                return e
            }

            function f(e, t) {
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

            function d(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function p(e) {
                var t = function(e, t) {
                    if ("object" !== m(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== m(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === m(t) ? t : String(t)
            }
            var m = function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                },
                y = "UserFlowAnalyticsStore_current",
                v = "UserFlowAnalyticsStore";
            new a.Z("UserFlowAnalytics");

            function b(e) {
                if (e === i.MK.UNKNOWN) return null;
                var t = o.Z.get("".concat(v, "-").concat(e));
                if (null == t) return null;
                var n = t.version,
                    r = d(t, ["version"]);
                return 1 !== n ? null : r
            }
            var h = (0, r.Z)((function(e, t) {
                return c({
                    flows: {},
                    currentFlow: null
                }, "activeFlow", (function() {
                    var e, n = null !== (e = t().currentFlow) && void 0 !== e ? e : o.Z.get(y);
                    if (null == n) return null;
                    var r = t().flows[n],
                        a = null != r ? r : b(n);
                    return null != (null == a ? void 0 : a.currentStep) ? n : null
                }))
            }));
            h.subscribe((function(e) {
                var t;
                if (null != e) {
                    ! function(e) {
                        if (e.type !== i.MK.UNKNOWN) {
                            var t = "".concat(v, "-").concat(e.type);
                            if (e.ended) {
                                o.Z.remove(t);
                                o.Z.remove(y)
                            } else {
                                o.Z.set("".concat(v, "-").concat(e.type), f(s({}, e), {
                                    version: 1
                                }));
                                o.Z.set(y, e.type)
                            }
                        }
                    }(e);
                    l.default.track(u.rMx.NUO_TRANSITION, {
                        flow_type: e.type,
                        from_step: e.lastStep,
                        to_step: e.currentStep,
                        seconds_on_from_step: "function" != typeof(null === (t = e.lastTimestamp) || void 0 === t ? void 0 : t.getTime) ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1e3
                    }, {
                        flush: !0
                    });
                    if (e.ended) {
                        var n = s({}, h.getState().flows);
                        delete n[e.type];
                        h.setState({
                            flows: n,
                            currentFlow: null
                        })
                    }
                }
            }), (function(e) {
                return null != e.currentFlow ? e.flows[e.currentFlow] : void 0
            }));

            function _(e, t) {
                var n = h.getState().flows,
                    r = n[e],
                    o = d(n, [e].map(p)),
                    a = null != r ? r : b(e);
                if (null != (null == a ? void 0 : a.currentStep)) {
                    if (a.currentStep === t) return;
                    0
                }
                h.setState({
                    flows: f(s({}, o), c({}, e, {
                        type: e,
                        lastStep: null,
                        lastTimestamp: null,
                        currentStep: t,
                        currentTimestamp: new Date,
                        skipped: !1
                    })),
                    currentFlow: e
                })
            }

            function S(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = e;
                if (e === i.MK.ANY) {
                    var o;
                    r = null !== (o = h.getState().activeFlow()) && void 0 !== o ? o : i.MK.UNKNOWN
                }
                var a = h.getState().flows,
                    l = a[r],
                    u = d(a, [r].map(p)),
                    m = null != l ? l : b(r);
                null != m && null != m.currentStep && m.currentStep !== t && h.setState({
                    flows: f(s({}, u), c({}, r, f(s({}, m), {
                        lastStep: m.currentStep,
                        lastTimestamp: m.currentTimestamp,
                        currentStep: t,
                        currentTimestamp: new Date,
                        ended: n
                    }))),
                    currentFlow: r
                })
            }

            function O() {
                return null != h.getState().activeFlow()
            }
            const g = {
                flowStart: _,
                flowStepOrStart: function(e, t) {
                    O() ? S(e, t) : _(e, t)
                },
                flowStep: S,
                hasActiveFlow: O
            }
        },
        646161: (e, t, n) => {
            n.d(t, {
                w4: () => S,
                DW: () => g,
                t3: () => E,
                Gn: () => T
            });
            var r, o = n(131795),
                a = n.n(o),
                l = n(58964),
                i = n(664625),
                u = n(2590);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var s = "Ubuntu",
                f = "Debian",
                d = "Fedora",
                p = "Red Hat",
                m = "SuSE",
                y = "Linux",
                v = "OS X",
                b = "win",
                h = "osx",
                _ = "linux";

            function S(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = t ? "/ptb" : "",
                    o = null != n ? "&format=".concat(n) : "";
                return "".concat(u.fzT.DESKTOP).concat(r, "?platform=").concat(e).concat(o)
            }

            function O() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (r = a().os) || void 0 === r ? void 0 : r.family;
                return null == e ? b : -1 !== e.indexOf(s) || -1 !== e.indexOf(f) || -1 !== e.indexOf(d) || -1 !== e.indexOf(p) || -1 !== e.indexOf(m) || -1 !== e.indexOf(y) ? _ : -1 !== e.indexOf(v) ? h : b
            }

            function g(e) {
                var t;
                return (c(t = {}, b, "Windows"), c(t, h, "Mac"), c(t, _, "Linux"), t)[O(e)]
            }

            function E() {
                var e = O();
                return S(e, !1, e === _ ? "tar.gz" : null)
            }

            function T(e, t, n) {
                var r = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, l.ZP)(null != r ? r : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: i.default.getFingerprint(),
                            attemptId: (0, l.WS)()
                        });
                    case "Android":
                        return (0, l.ZP)(null != r ? r : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: i.default.getFingerprint(),
                            attemptId: (0, l.WS)()
                        });
                    default:
                        return null != r ? r : "https://www.discord.com"
                }
            }
        },
        488110: (e, t, n) => {
            n.d(t, {
                Z: () => v
            });
            var r = n(473903),
                o = n(496486),
                a = function(e) {
                    return "function" == typeof e ? e() : e
                };
            n.n(o)().curry((function(e, t, n) {
                return a(t) ? e(n) : n({})
            }));

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        l(e, t, n[t])
                    }))
                }
                return e
            }

            function u(e, t) {
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

            function c(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var s, f, d = function() {
                    throw new Error("updateModal has not been implemented.")
                },
                p = n(680918);
            s = p.showModal;
            d = p.updateModalProps;
            f = n(264817).Mr;

            function m(e) {
                var t = e.promiseFn,
                    n = e.resolve,
                    r = e.reject,
                    o = e.modalProps,
                    a = void 0 === o ? {} : o,
                    l = e.hooks,
                    c = (void 0 === l ? {} : l).onEarlyClose,
                    p = function() {
                        null == c || c()
                    },
                    m = function(e) {
                        f(h);
                        n(e)
                    },
                    v = function(e) {
                        f(h);
                        r(e)
                    },
                    b = function(e) {
                        var t = e.res;
                        d(h, _, p, u(i({}, a), {
                            error: t.body.message
                        }))
                    };
                if (null != s) var h = s(_, p, a);
                else null == c || c();

                function _(e) {
                    d(h, _, p, u(i({}, a), {
                        isLoading: !0
                    }));
                    return y({
                        promiseFn: t,
                        resolve: m,
                        reject: v,
                        code: e,
                        mfaCodeHandler: b,
                        isModalOpen: !0
                    })
                }
            }

            function y(e) {
                var t = e.promiseFn,
                    n = e.resolve,
                    r = e.reject,
                    o = e.code,
                    a = e.mfaCodeHandler,
                    l = void 0 === a ? m : a,
                    u = e.isModalOpen,
                    s = void 0 !== u && u,
                    f = c(e, ["promiseFn", "resolve", "reject", "code", "mfaCodeHandler", "isModalOpen"]);
                return t(null != o ? {
                    code: o
                } : {}).then(n, (function(e) {
                    if (function(e, t) {
                            return e.body && 60008 === e.body.code || t && 429 === e.status
                        }(e, s)) return l(i({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e
                    }, f));
                    r(e)
                }))
            }

            function v(e, t) {
                var n, o, l = null != t ? t : {},
                    u = l.checkEnabled,
                    s = void 0 === u ? null !== (o = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== o && o : u,
                    f = c(l, ["checkEnabled"]);
                return new Promise((function(t, n) {
                    (a(s) ? m : y)(i({
                        promiseFn: e,
                        resolve: t,
                        reject: n
                    }, f))
                }))
            }
        },
        391438: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(281110),
                o = n(652591);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        a(e, t, n[t])
                    }))
                }
                return e
            }

            function i(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function u(e, t, n) {
                var r = t.trackedActionData,
                    a = i(t, ["trackedActionData"]),
                    u = {
                        url: a.url,
                        request_method: n
                    };
                return new Promise((function(t, n) {
                    e(a).then((function(e) {
                        var n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e));
                        (0, o.trackNetworkAction)(r.event, l({
                            status_code: e.status
                        }, u, n));
                        t(e)
                    })).catch((function(e) {
                        var t, a, i = r.properties;
                        "function" == typeof r.properties && (i = r.properties(e));
                        (0, o.trackNetworkAction)(r.event, l({
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (a = e.body) || void 0 === a ? void 0 : a.message
                        }, u, i));
                        n(e)
                    }))
                }))
            }
            const c = {
                get: function(e) {
                    return u(r.ZP.get, e, "get")
                },
                post: function(e) {
                    return u(r.ZP.post, e, "post")
                },
                put: function(e) {
                    return u(r.ZP.put, e, "put")
                },
                patch: function(e) {
                    return u(r.ZP.patch, e, "patch")
                },
                delete: function(e) {
                    return u(r.ZP.delete, e, "del")
                }
            }
        },
        680918: (e, t, n) => {
            n.r(t);
            n.d(t, {
                showModal: () => u,
                updateModalProps: () => c
            });
            var r = n(785893),
                o = (n(667294), n(264817)),
                a = n(919244);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var i = function(e, t, n) {
                return function(o) {
                    return (0, r.jsx)(a.Z, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                l(e, t, n[t])
                            }))
                        }
                        return e
                    }({
                        handleSubmit: e,
                        handleEarlyClose: t
                    }, n, o))
                }
            };

            function u(e, t, n) {
                return (0, o.h7)(i(e, t, n), {
                    onCloseCallback: t
                })
            }

            function c(e, t, n, r) {
                return (0, o.o)(e, i(t, n, r))
            }
        },
        58964: (e, t, n) => {
            n.d(t, {
                ZP: () => m,
                WS: () => d,
                zS: () => p
            });
            var r = n(131795),
                o = n.n(r),
                a = n(468811),
                l = n.n(a);
            const i = n(426080).Z;

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function c(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function s(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, a = [],
                            l = !0,
                            i = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            o = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var f = "https://discordapp.page.link";

            function d() {
                return l().v4()
            }

            function p(e) {
                if (!e.startsWith(f)) return null;
                try {
                    var t = new URL(e).searchParams,
                        n = t.get("link");
                    if (null == n) return null;
                    var r, o = decodeURIComponent(n),
                        a = new URL(o).searchParams,
                        l = {
                            utmSource: null !== (r = t.get("utm_source")) && void 0 !== r ? r : void 0
                        },
                        i = !0,
                        u = !1,
                        c = void 0;
                    try {
                        for (var d, p = a.entries()[Symbol.iterator](); !(i = (d = p.next()).done); i = !0) {
                            var m = s(d.value, 2),
                                y = m[0],
                                v = m[1];
                            l[y] = v
                        }
                    } catch (e) {
                        u = !0;
                        c = e
                    } finally {
                        try {
                            i || null == p.return || p.return()
                        } finally {
                            if (u) throw c
                        }
                    }
                    return l
                } catch (e) {
                    return null
                }
            }

            function m(e, t) {
                var n = t.utmSource,
                    r = t.androidFallbackLink,
                    a = t.iosFallbackLink,
                    l = c(t, ["utmSource", "androidFallbackLink", "iosFallbackLink"]),
                    u = new URL(e);
                for (var s in l) {
                    var d = l[s];
                    null != d && u.searchParams.set(s, d)
                }
                var p, m, y, v, b, h = encodeURIComponent(u.toString()),
                    _ = encodeURIComponent(i()),
                    S = (y = new RegExp("(".concat(["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)"].join("|"), ")"), "ig"), v = null != (null === o() || void 0 === o() || null === (p = o().ua) || void 0 === p ? void 0 : p.match(y)), b = "Safari" === (null === o() || void 0 === o() ? void 0 : o().name) && !v, "iOS" !== (null === o() || void 0 === o() || null === (m = o().os) || void 0 === m ? void 0 : m.family) || b ? 1 : 0),
                    O = null != r ? encodeURIComponent(r) : null,
                    g = null != a ? encodeURIComponent(a) : null,
                    E = "".concat(f, "/?link=").concat(h, "&utm_source=").concat(n, "&apn=").concat("com.discord", "&isi=").concat(985746746, "&ibi=").concat("com.hammerandchisel.discord", "&sd=").concat(_, "&efr=").concat(S);
                null != O && (E += "&afl=".concat(O));
                null != g && (E += "&ifl=".concat(g));
                return E
            }
        },
        426080: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(805829);

            function o() {
                return r.Z.Messages.DynamicLinks.IOS_APP_PREVIEW_DESCRIPTION
            }
        }
    }
]);