"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [21373], {
        579194: (e, t, n) => {
            n.d(t, {
                FD: () => v,
                Zy: () => C,
                ss: () => y,
                S2: () => h,
                Mn: () => b,
                ol: () => I,
                V3: () => g,
                I5: () => U,
                UZ: () => R,
                cV: () => m,
                J5: () => P,
                b9: () => G,
                si: () => D,
                W3: () => j,
                P6: () => w,
                _V: () => M
            });
            var r = n(281110),
                o = n(630631),
                i = n(575945),
                a = n(744564),
                u = n(784426),
                c = n(652591),
                l = n(775173),
                s = n(488110),
                f = n(120415),
                _ = n(84441),
                d = n(2590),
                T = n(473708);

            function E(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function p(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            E(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            E(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function S(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function N(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        S(e, t, n[t])
                    }))
                }
                return e
            }
            var O = function(e, t) {
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
                        }([i, u])
                    }
                }
            };

            function v() {
                a.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function C() {
                a.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function y(e, t) {
                var n = t ? T.Z.Messages.DELETE_ACCOUNT : T.Z.Messages.DISABLE_ACCOUNT,
                    o = t ? d.ANM.DELETE_ACCOUNT : d.ANM.DISABLE_ACCOUNT;
                return (0, s.Z)((function(t) {
                    return r.ZP.post({
                        url: o,
                        body: N({
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
                    _.Z.logoutInternal();
                    (0, u.uL)(d.Z5c.DEFAULT_LOGGED_OUT)
                }))
            }

            function h(e) {
                return A.apply(this, arguments)
            }

            function A() {
                return (A = p((function(e) {
                    var t, n, o;
                    return O(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, r.ZP.patch({
                                    url: d.ANM.ME,
                                    oldFormErrors: !0,
                                    body: e
                                })];
                            case 1:
                                t = i.sent();
                                if ((n = t.body).token) {
                                    o = n.token;
                                    delete n.token;
                                    a.Z.dispatch({
                                        type: "UPDATE_TOKEN",
                                        token: o,
                                        userId: n.id
                                    });
                                    null != (null == e ? void 0 : e.password) && null != (null == e ? void 0 : e.new_password) && a.Z.dispatch({
                                        type: "PASSWORD_UPDATED",
                                        userId: n.id
                                    })
                                }
                                a.Z.dispatch({
                                    type: "CURRENT_USER_UPDATE",
                                    user: n
                                });
                                return [2, t]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function b(e) {
                var t = e.username,
                    n = e.discriminator,
                    r = e.email,
                    i = e.emailToken,
                    u = e.password,
                    _ = e.avatar,
                    E = e.avatarDecoration,
                    p = e.newPassword,
                    S = e.globalName;
                a.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                });
                return (0, s.Z)((function(e) {
                    var a = N({
                        username: t,
                        email: r,
                        email_token: i,
                        password: u,
                        avatar: _,
                        discriminator: n,
                        global_name: S,
                        new_password: p
                    }, e);
                    null === E && (a.avatar_decoration_id = null);
                    if (null != E) {
                        a.avatar_decoration_id = E.id;
                        a.avatar_decoration_sku_id = E.skuId
                    }
                    var c = o.Z.get(d.JkL),
                        l = (0, f.xJ)();
                    if (null != l && null != c) {
                        a.push_provider = l;
                        a.push_token = c
                    }
                    var s = o.Z.get(d.scU);
                    if (null != d.mvA && null != s) {
                        a.push_voip_provider = d.mvA;
                        a.push_voip_token = s
                    }
                    return h(a)
                }), {
                    checkEnabled: !1,
                    modalProps: {
                        title: T.Z.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: function() {
                            return a.Z.dispatch({
                                type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                                errors: {}
                            })
                        }
                    }
                }).then((function(e) {
                    var t = e.body;
                    c.default.track(d.rMx.USER_AVATAR_UPDATED, {
                        animated: (0, l.xR)(t.avatar)
                    });
                    a.Z.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    });
                    return e
                }), (function(e) {
                    a.Z.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                        errors: e.body
                    });
                    return e
                }))
            }

            function I() {
                return r.ZP.get({
                    url: d.ANM.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function g() {
                return r.ZP.post({
                    url: d.ANM.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function U(e) {
                a.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                });
                null == e ? i.uv.announce(T.Z.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : i.uv.announce(T.Z.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function R(e) {
                a.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function m(e) {
                a.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function P(e) {
                a.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: e
                })
            }

            function G() {
                a.Z.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function D() {
                a.Z.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function j() {
                a.Z.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function w() {
                a.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function M(e) {
                a.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        919244: (e, t, n) => {
            n.d(t, {
                Z: () => N
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                u = n(882723),
                c = n(473708),
                l = n(775823),
                s = n.n(l);

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function _(e) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _(e)
            }

            function d(e, t) {
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function T(e, t) {
                T = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return T(e, t)
            }
            var E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function p(e) {
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
                    var n, r = _(e);
                    if (t) {
                        var o = _(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
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
                    t && T(e, t)
                }(n, e);
                var t = p(n);

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
                        return null !== (t = e.props.label) && void 0 !== t ? t : e.props.disallowBackupCodes ? c.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : c.Z.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    };
                    e.getSupportedCodeTypes = function() {
                        return e.props.disallowBackupCodes ? c.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : c.Z.Messages.TWO_FA_AUTH_CODE
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
                        i = t.actionText,
                        l = t.children,
                        f = t.error,
                        _ = t.isLoading,
                        d = t.maxLength,
                        T = t.transitionState,
                        E = t.helpMessage,
                        p = t.retryPrompt,
                        S = t.retrySuccessMessage,
                        N = this.state,
                        O = N.code,
                        v = N.errorMessage,
                        C = N.retrySuccess,
                        y = o.Children.count(l) > 0 ? (0, r.jsx)(u.Card, {
                            type: u.Card.Types.WARNING,
                            className: s().card,
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: l
                            })
                        }) : null,
                        h = null != p ? (0, r.jsxs)(u.Text, {
                            className: a()(s().submitText, s().spacing),
                            variant: "text-sm/normal",
                            children: [(0, r.jsx)("br", {}), (0, r.jsx)(u.Clickable, {
                                className: a()(s().spacing, s().link),
                                onClick: this.handleRetry,
                                children: (0, r.jsx)(u.Anchor, {
                                    children: p
                                })
                            })]
                        }) : null,
                        A = C ? (0, r.jsx)(u.Card, {
                            type: u.Card.Types.SUCCESS,
                            className: s().card,
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: S
                            })
                        }) : null;
                    return (0, r.jsx)(u.ModalRoot, {
                        transitionState: T,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(u.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(u.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: n
                                })
                            }), (0, r.jsxs)(u.ModalContent, {
                                children: [null != E ? (0, r.jsx)(u.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: s().spacing,
                                    children: E
                                }) : null, y, A, (0, r.jsxs)(u.FormItem, {
                                    title: this.getLabelText(),
                                    className: s().spacing,
                                    children: [(0, r.jsx)(u.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != d ? d : 10,
                                        value: O,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(u.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: s().error,
                                        children: null != f ? f : v
                                    }) : null, h]
                                })]
                            }), (0, r.jsxs)(u.ModalFooter, {
                                children: [(0, r.jsx)(u.Button, {
                                    type: "submit",
                                    disabled: _ || 0 === O.length,
                                    children: null != i ? i : c.Z.Messages.CONFIRM
                                }), (0, r.jsx)(u.Button, {
                                    onClick: this.handleCancel,
                                    disabled: _,
                                    look: u.Button.Looks.LINK,
                                    color: u.Button.Colors.PRIMARY,
                                    children: c.Z.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                };
                return n
            }(o.PureComponent);
            S.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            const N = S
        },
        973646: (e, t, n) => {
            n.d(t, {
                P: () => i
            });
            var r = n(882723),
                o = n(473708);

            function i() {
                (0, r.showToast)((0, r.createToast)(o.Z.Messages.USER_SETTINGS_UPDATE_FAILURE, r.ToastType.FAILURE))
            }
        },
        450383: (e, t, n) => {
            n.d(t, {
                Z: () => M
            });
            var r = n(202351),
                o = n(744564),
                i = n(2590);

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function c(e, t) {
                return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function l(e, t) {
                l = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return l(e, t)
            }
            var s = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function f(e) {
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
                    var n, r = u(e);
                    if (t) {
                        var o = u(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            var _, d, T, E, p, S, N, O, v, C, y, h, A, b, I = i.QZA.CLOSED,
                g = {},
                U = !1;

            function R() {
                I = i.QZA.OPEN;
                g = {}
            }

            function m() {
                I = i.QZA.CLOSED;
                g = {}
            }

            function P() {
                G();
                D();
                g = {}
            }

            function G() {
                _ = void 0;
                d = void 0;
                T = void 0;
                E = void 0
            }

            function D() {
                p = void 0;
                S = void 0;
                N = void 0;
                O = void 0;
                v = void 0;
                E = void 0
            }

            function j() {
                y = void 0;
                h = void 0;
                A = void 0;
                b = void 0;
                C = void 0
            }
            var w = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && l(e, t)
                }(n, e);
                var t = f(n);

                function n() {
                    a(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getFormState = function() {
                    return I
                };
                r.getErrors = function() {
                    return g
                };
                r.showNotice = function() {
                    return void 0 !== _ || void 0 !== p || void 0 !== S || void 0 !== N || void 0 !== O || void 0 !== v || void 0 !== T || void 0 !== E || void 0 !== d
                };
                r.getPendingAvatar = function() {
                    return _
                };
                r.getPendingGlobalName = function() {
                    return d
                };
                r.getPendingBanner = function() {
                    return p
                };
                r.getPendingBio = function() {
                    return S
                };
                r.getPendingPronouns = function() {
                    return N
                };
                r.getPendingAccentColor = function() {
                    return O
                };
                r.getPendingThemeColors = function() {
                    return v
                };
                r.getPendingAvatarDecoration = function() {
                    return T
                };
                r.getPendingProfileEffectID = function() {
                    return E
                };
                r.getAllPending = function() {
                    return {
                        pendingAvatar: _,
                        pendingBanner: p,
                        pendingBio: S,
                        pendingPronouns: N,
                        pendingAccentColor: O,
                        pendingThemeColors: v,
                        pendingAvatarDecoration: T,
                        pendingProfileEffectID: E,
                        pendingGlobalName: d
                    }
                };
                r.getTryItOutThemeColors = function() {
                    return C
                };
                r.getTryItOutAvatar = function() {
                    return y
                };
                r.getTryItOutAvatarDecoration = function() {
                    return h
                };
                r.getTryItOutProfileEffectID = function() {
                    return A
                };
                r.getTryItOutBanner = function() {
                    return b
                };
                r.getAllTryItOut = function() {
                    return {
                        tryItOutThemeColors: C,
                        tryItOutAvatar: y,
                        tryItOutAvatarDecoration: h,
                        tryItOutProfileEffectID: A,
                        tryItOutBanner: b
                    }
                };
                r.getIsDisableSubmit = function() {
                    return U
                };
                r.__getLocalVars = function() {
                    return {
                        formState: I,
                        errors: g,
                        pendingAvatar: _,
                        pendingGlobalName: d,
                        pendingAvatarDecoration: T,
                        pendingProfileEffectID: E,
                        pendingBanner: p,
                        pendingBio: S,
                        pendingPronouns: N,
                        pendingAccentColor: O,
                        pendingThemeColors: v,
                        disableSubmit: U,
                        tryItOutThemeColors: C,
                        tryItOutAvatar: y,
                        tryItOutAvatarDecoration: h,
                        tryItOutProfileEffectID: A,
                        tryItOutBanner: b
                    }
                };
                return n
            }(r.ZP.Store);
            w.displayName = "UserSettingsAccountStore";
            const M = new w(o.Z, {
                USER_SETTINGS_ACCOUNT_INIT: R,
                USER_SETTINGS_MODAL_INIT: R,
                USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: R,
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    return e.section === i.oAB.ACCOUNT && R()
                },
                USER_SETTINGS_ACCOUNT_CLOSE: m,
                USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: function() {
                    P();
                    j();
                    m()
                },
                USER_SETTINGS_ACCOUNT_SUBMIT: function() {
                    I = i.QZA.SUBMITTING;
                    g = {}
                },
                USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: function(e) {
                    if (I !== i.QZA.SUBMITTING) return !1;
                    I = i.QZA.OPEN;
                    var t;
                    g = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: function(e) {
                    var t = e.avatar;
                    _ = t;
                    y = void 0
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: function(e) {
                    var t = e.globalName;
                    d = t
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: function(e) {
                    var t = e.avatarDecoration;
                    T = t
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: function(e) {
                    var t = e.profileEffectID;
                    E = t
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: function(e) {
                    var t = e.banner;
                    p = t
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: function(e) {
                    var t = e.bio;
                    S = t
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: function(e) {
                    var t = e.pronouns;
                    N = t
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: function(e) {
                    var t = e.color;
                    O = t
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: function(e) {
                    var t = e.themeColors;
                    v = t
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: function(e) {
                    var t = e.avatar;
                    y = t
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: function(e) {
                    var t = e.avatarDecoration;
                    h = t
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: function(e) {
                    var t = e.profileEffectID;
                    A = t
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: function(e) {
                    var t = e.banner;
                    b = t
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: function(e) {
                    var t = e.themeColors;
                    C = t
                },
                USER_SETTINGS_CLEAR_ERRORS: function() {
                    g = {}
                },
                USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: G,
                USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: D,
                USER_SETTINGS_RESET_ALL_PENDING: P,
                USER_SETTINGS_RESET_ALL_TRY_IT_OUT: j,
                USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: function() {
                    T = void 0
                },
                LOGOUT: function() {
                    _ = void 0
                },
                USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT: function(e) {
                    var t = e.disable;
                    U = t
                }
            })
        },
        488110: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(473903),
                o = n(496486),
                i = function(e) {
                    return "function" == typeof e ? e() : e
                };
            n.n(o)().curry((function(e, t, n) {
                return i(t) ? e(n) : n({})
            }));

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e) {
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

            function c(e, t) {
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

            function l(e, t) {
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
            var s, f, _ = function() {
                    throw new Error("updateModal has not been implemented.")
                },
                d = n(680918);
            s = d.showModal;
            _ = d.updateModalProps;
            f = n(264817).Mr;

            function T(e) {
                var t = e.promiseFn,
                    n = e.resolve,
                    r = e.reject,
                    o = e.modalProps,
                    i = void 0 === o ? {} : o,
                    a = e.hooks,
                    l = (void 0 === a ? {} : a).onEarlyClose,
                    d = function() {
                        null == l || l()
                    },
                    T = function(e) {
                        f(N);
                        n(e)
                    },
                    p = function(e) {
                        f(N);
                        r(e)
                    },
                    S = function(e) {
                        var t = e.res;
                        _(N, O, d, c(u({}, i), {
                            error: t.body.message
                        }))
                    };
                if (null != s) var N = s(O, d, i);
                else null == l || l();

                function O(e) {
                    _(N, O, d, c(u({}, i), {
                        isLoading: !0
                    }));
                    return E({
                        promiseFn: t,
                        resolve: T,
                        reject: p,
                        code: e,
                        mfaCodeHandler: S,
                        isModalOpen: !0
                    })
                }
            }

            function E(e) {
                var t = e.promiseFn,
                    n = e.resolve,
                    r = e.reject,
                    o = e.code,
                    i = e.mfaCodeHandler,
                    a = void 0 === i ? T : i,
                    c = e.isModalOpen,
                    s = void 0 !== c && c,
                    f = l(e, ["promiseFn", "resolve", "reject", "code", "mfaCodeHandler", "isModalOpen"]);
                return t(null != o ? {
                    code: o
                } : {}).then(n, (function(e) {
                    if (function(e, t) {
                            return e.body && 60008 === e.body.code || t && 429 === e.status
                        }(e, s)) return a(u({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e
                    }, f));
                    r(e)
                }))
            }

            function p(e, t) {
                var n, o, a = null != t ? t : {},
                    c = a.checkEnabled,
                    s = void 0 === c ? null !== (o = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== o && o : c,
                    f = l(a, ["checkEnabled"]);
                return new Promise((function(t, n) {
                    (i(s) ? T : E)(u({
                        promiseFn: e,
                        resolve: t,
                        reject: n
                    }, f))
                }))
            }
        },
        680918: (e, t, n) => {
            n.r(t);
            n.d(t, {
                showModal: () => c,
                updateModalProps: () => l
            });
            var r = n(785893),
                o = (n(667294), n(264817)),
                i = n(919244);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var u = function(e, t, n) {
                return function(o) {
                    return (0, r.jsx)(i.Z, function(e) {
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
                    }({
                        handleSubmit: e,
                        handleEarlyClose: t
                    }, n, o))
                }
            };

            function c(e, t, n) {
                return (0, o.h7)(u(e, t, n), {
                    onCloseCallback: t
                })
            }

            function l(e, t, n, r) {
                return (0, o.o)(e, u(t, n, r))
            }
        }
    }
]);
//# sourceMappingURL=9ae2f7a451b35b535d6c.js.map