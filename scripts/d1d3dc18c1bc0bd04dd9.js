(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [53931], {
        148114: (e, t, n) => {
            e.exports = n.p + "bb5595916df24bd8cbb6d55ffee02ff9.svg"
        },
        346712: (e, t, n) => {
            e.exports = n.p + "8a7e2e357f5e4ba425acb8cb55727b92.svg"
        },
        483683: (e, t, n) => {
            e.exports = n.p + "72db7a1fbe5d3c861fe63c26f634b5d2.svg"
        },
        63685: (e, t, n) => {
            e.exports = n.p + "a4e25b25c89b862150e6eeb520e67dd5.svg"
        },
        753074: e => {
            "use strict";
            var t = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                n = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                r = "function" == typeof Object.getOwnPropertySymbols;
            e.exports = function(e, o, i) {
                if ("string" != typeof o) {
                    var l = Object.getOwnPropertyNames(o);
                    r && (l = l.concat(Object.getOwnPropertySymbols(o)));
                    for (var a = 0; a < l.length; ++a)
                        if (!(t[l[a]] || n[l[a]] || i && i[l[a]])) try {
                            e[l[a]] = o[l[a]]
                        } catch (e) {}
                }
                return e
            }
        },
        735885: (e, t, n) => {
            "use strict";
            n.d(t, {
                jN: () => o,
                xf: () => i,
                Ou: () => l
            });
            var r = n(744564);

            function o(e) {
                r.Z.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function i() {
                r.Z.dispatch({
                    type: "LAYER_POP"
                })
            }

            function l() {
                r.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        734691: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => O
            });
            var r = n(281110),
                o = n(630631),
                i = n(744564),
                l = n(223219),
                a = n(652591),
                c = n(775173),
                s = n(488110),
                u = n(120415),
                d = n(735885),
                f = n(2590),
                p = n(473708);

            function h(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        h(e, t, n[t])
                    }))
                }
                return e
            }

            function y(e, t) {
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
            const O = {
                open: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            openWithoutBackstack: !1
                        };
                    i.Z.dispatch(b({
                        type: "USER_SETTINGS_MODAL_OPEN",
                        section: e,
                        subsection: t
                    }, n));
                    (0, d.jN)(f.S9g.USER_SETTINGS)
                },
                init: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    i.Z.dispatch(b({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: e,
                        subsection: t
                    }, n))
                },
                close: function() {
                    var e = l.Z.onClose;
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLOSE"
                    });
                    null != e && e()
                },
                setSection: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    i.Z.dispatch(b({
                        type: "USER_SETTINGS_MODAL_SET_SECTION",
                        section: e,
                        subsection: t
                    }, n))
                },
                clearSubsection: function(e) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                        forSection: e
                    })
                },
                clearScrollPosition: function(e) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                        forSection: e
                    })
                },
                updateAccount: function(e) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                        settings: e
                    })
                },
                submitComplete: function() {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                    })
                },
                reset: function() {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_RESET"
                    })
                },
                saveAccountChanges: function(e, t) {
                    var n = this;
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_SUBMIT"
                    });
                    var l = e.username,
                        d = e.email,
                        h = e.emailToken,
                        O = e.password,
                        g = e.avatar,
                        v = e.newPassword,
                        m = e.discriminator,
                        j = t.close;
                    return (0, s.Z)((function(e) {
                        var t = y(b({
                                username: l,
                                email: d,
                                email_token: h,
                                password: O,
                                avatar: g,
                                new_password: v
                            }, e), {
                                discriminator: null != m && "" !== m ? m : void 0
                            }),
                            n = o.Z.get(f.JkL),
                            i = (0, u.xJ)();
                        if (null != i && null != n) {
                            t.push_provider = i;
                            t.push_token = n
                        }
                        var a = o.Z.get(f.scU);
                        if (null != f.mvA && null != a) {
                            t.push_voip_provider = f.mvA;
                            t.push_voip_token = a
                        }
                        return r.ZP.patch({
                            url: f.ANM.ME,
                            oldFormErrors: !0,
                            body: t
                        })
                    }), {
                        checkEnabled: !1,
                        modalProps: {
                            title: p.Z.Messages.TWO_FA_CHANGE_ACCOUNT
                        },
                        hooks: {
                            onEarlyClose: function() {
                                return i.Z.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }
                    }).then((function(e) {
                        var t = e.body,
                            r = t.token;
                        a.default.track(f.rMx.USER_AVATAR_UPDATED, {
                            animated: (0, c.xR)(t.avatar)
                        });
                        delete t.token;
                        i.Z.dispatch({
                            type: "UPDATE_TOKEN",
                            token: r,
                            userId: t.id
                        });
                        i.Z.dispatch({
                            type: "CURRENT_USER_UPDATE",
                            user: t
                        });
                        null != v && i.Z.dispatch({
                            type: "USER_PASSWORD_UPDATE",
                            user: t,
                            newPassword: v
                        });
                        null != O && null != v && i.Z.dispatch({
                            type: "PASSWORD_UPDATED",
                            userId: t.id
                        });
                        j ? n.close() : n.submitComplete();
                        return e
                    }), (function(e) {
                        i.Z.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: e.body
                        });
                        return e
                    }))
                }
            }
        },
        919244: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => g
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                l = n.n(i),
                a = n(882723),
                c = n(473708),
                s = n(775823),
                u = n.n(s);

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return f(e)
            }

            function p(e, t) {
                return !t || "object" !== b(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e, t) {
                h = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return h(e, t)
            }
            var b = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function y(e) {
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
                    var n, r = f(e);
                    if (t) {
                        var o = f(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }
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
                    t && h(e, t)
                }(n, e);
                var t = y(n);

                function n() {
                    d(this, n);
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
                        s = t.children,
                        d = t.error,
                        f = t.isLoading,
                        p = t.maxLength,
                        h = t.transitionState,
                        b = t.helpMessage,
                        y = t.retryPrompt,
                        O = t.retrySuccessMessage,
                        g = this.state,
                        v = g.code,
                        m = g.errorMessage,
                        j = g.retrySuccess,
                        S = o.Children.count(s) > 0 ? (0, r.jsx)(a.Card, {
                            type: a.Card.Types.WARNING,
                            className: u().card,
                            children: (0, r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: s
                            })
                        }) : null,
                        E = null != y ? (0, r.jsxs)(a.Text, {
                            className: l()(u().submitText, u().spacing),
                            variant: "text-sm/normal",
                            children: [(0, r.jsx)("br", {}), (0, r.jsx)(a.Clickable, {
                                className: l()(u().spacing, u().link),
                                onClick: this.handleRetry,
                                children: (0, r.jsx)(a.Anchor, {
                                    children: y
                                })
                            })]
                        }) : null,
                        _ = j ? (0, r.jsx)(a.Card, {
                            type: a.Card.Types.SUCCESS,
                            className: u().card,
                            children: (0, r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: O
                            })
                        }) : null;
                    return (0, r.jsx)(a.ModalRoot, {
                        transitionState: h,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(a.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: n
                                })
                            }), (0, r.jsxs)(a.ModalContent, {
                                children: [null != b ? (0, r.jsx)(a.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u().spacing,
                                    children: b
                                }) : null, S, _, (0, r.jsxs)(a.FormItem, {
                                    title: this.getLabelText(),
                                    className: u().spacing,
                                    children: [(0, r.jsx)(a.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != p ? p : 10,
                                        value: v,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(a.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u().error,
                                        children: null != d ? d : m
                                    }) : null, E]
                                })]
                            }), (0, r.jsxs)(a.ModalFooter, {
                                children: [(0, r.jsx)(a.Button, {
                                    type: "submit",
                                    disabled: f || 0 === v.length,
                                    children: null != i ? i : c.Z.Messages.CONFIRM
                                }), (0, r.jsx)(a.Button, {
                                    onClick: this.handleCancel,
                                    disabled: f,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.PRIMARY,
                                    children: c.Z.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                };
                return n
            }(o.PureComponent);
            O.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            const g = O
        },
        34947: (e, t, n) => {
            "use strict";
            n.d(t, {
                P: () => s
            });
            var r = n(281110),
                o = n(744564),
                i = n(2590);

            function l(e, t, n, r, o, i, l) {
                try {
                    var a = e[i](l),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function a(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            l(i, r, o, a, c, "next", e)
                        }

                        function c(e) {
                            l(i, r, o, a, c, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var c = function(e, t) {
                var n, r, o, i, l = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1],
                                                done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = t.call(e, l)
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
                        }([i, a])
                    }
                }
            };

            function s(e) {
                return u.apply(this, arguments)
            }

            function u() {
                return (u = a((function(e) {
                    var t;
                    return c(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                o.Z.dispatch({
                                    type: "GUILD_POPOUT_FETCH_START",
                                    guildId: e
                                });
                                n.label = 1;
                            case 1:
                                n.trys.push([1, 3, , 4]);
                                return [4, r.ZP.get({
                                    url: i.ANM.GUILD_PREVIEW(e),
                                    oldFormErrors: !0
                                })];
                            case 2:
                                t = n.sent();
                                o.Z.dispatch({
                                    type: "GUILD_POPOUT_FETCH_SUCCESS",
                                    guildId: e,
                                    guild: t.body
                                });
                                return [3, 4];
                            case 3:
                                n.sent();
                                o.Z.dispatch({
                                    type: "GUILD_POPOUT_FETCH_FAILURE",
                                    guildId: e
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        250384: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => v
            });
            var r = n(202351),
                o = n(744564),
                i = n(664625),
                l = n(709992);

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

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
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
            }

            function u(e) {
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

            function d(e, t) {
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

            function f(e, t) {
                return !t || "object" !== b(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function p(e, t) {
                p = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return p(e, t)
            }
            var h, b = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function y(e) {
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
                    var n, r = s(e);
                    if (t) {
                        var o = s(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }! function(e) {
                e.UNSET = "unset";
                e.FETCHING = "fetching";
                e.FAILED = "failed";
                e.SUCCEEDED = "succeeded"
            }(h || (h = {}));
            var O = {
                guilds: {}
            };
            var g = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && p(e, t)
                }(n, e);
                var t = y(n);

                function n() {
                    a(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(i.default)
                };
                r.isFetchingGuild = function(e) {
                    var t = O.guilds[e];
                    return null != t && t.fetchState === h.FETCHING
                };
                r.getGuild = function(e) {
                    var t = O.guilds[e];
                    return null != t ? t.guild : null
                };
                r.hasFetchFailed = function(e) {
                    var t = O.guilds[e];
                    return null != t && t.fetchState === h.FAILED
                };
                r.__getLocalVars = function() {
                    return {
                        GuildPopoutFetchStates: h,
                        guildPopoutsState: O
                    }
                };
                return n
            }(r.ZP.Store);
            g.displayName = "GuildPopoutStore";
            const v = new g(o.Z, {
                GUILD_POPOUT_FETCH_START: function(e) {
                    var t = e.guildId;
                    O.guilds[t] = d(u({}, O.guilds[t]), {
                        fetchState: h.FETCHING
                    })
                },
                GUILD_POPOUT_FETCH_SUCCESS: function(e) {
                    var t = e.guildId,
                        n = e.guild,
                        r = (0, l.PP)(n);
                    O.guilds[t] = d(u({}, O.guilds[t]), {
                        guild: r,
                        fetchState: h.SUCCEEDED
                    })
                },
                GUILD_POPOUT_FETCH_FAILURE: function(e) {
                    var t = e.guildId;
                    O.guilds[t] = d(u({}, O.guilds[t]), {
                        fetchState: h.FAILED
                    })
                }
            })
        },
        38836: (e, t, n) => {
            "use strict";
            n.d(t, {
                SK: () => Z,
                sK: () => M,
                ZP: () => k
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                l = n.n(i),
                a = n(202351),
                c = n(795308),
                s = n(575945),
                u = n(882723),
                d = n(74535),
                f = n(874049),
                p = n(784426),
                h = n(664625),
                b = n(21372),
                y = n(206986),
                O = n(211482),
                g = n(775173),
                v = n(709992),
                m = n(34947),
                j = n(250384),
                S = n(2590),
                E = n(473708),
                _ = n(396259),
                P = n.n(_),
                x = n(148114),
                T = n.n(x),
                C = n(346712),
                I = n.n(C);

            function w(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function N(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function A(e, t) {
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

            function D(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            l = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return w(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var L = 80;

            function R() {
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: P().splashPlaceholder
                    }), (0, r.jsxs)("div", {
                        className: l()(P().body, P().hasSplash),
                        children: [(0, r.jsx)("div", {
                            className: P().iconPlaceholder
                        }), (0, r.jsx)("div", {
                            className: P().headerText,
                            children: (0, r.jsx)("div", {
                                className: P().namePlaceholder
                            })
                        }), (0, r.jsxs)("div", {
                            className: P().memberInfo,
                            children: [(0, r.jsx)("div", {
                                className: P().memberCount,
                                children: (0, r.jsx)("div", {
                                    className: P().memberInfoPlaceholder
                                })
                            }), (0, r.jsx)("div", {
                                className: P().memberCount,
                                children: (0, r.jsx)("div", {
                                    className: P().memberInfoPlaceholder
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: P().viewButtonPlaceholder
                        })]
                    })]
                })
            }

            function Z() {
                var e = (0, d.ZP)();
                return (0, r.jsx)(u.Dialog, {
                    "aria-label": E.Z.Messages.GUILD_UNAVAILABLE_HEADER,
                    className: P().guildPopout,
                    children: (0, r.jsxs)("div", {
                        className: P().body,
                        children: [(0, r.jsx)("img", {
                            src: (0, s.wj)(e) ? T() : I(),
                            className: P().unavailableIcon,
                            width: L,
                            height: L,
                            alt: ""
                        }), (0, r.jsx)(u.Heading, {
                            className: P().unavailableHeader,
                            variant: "heading-md/semibold",
                            children: E.Z.Messages.GUILD_POPOUT_UNAVAILABLE_HEADER
                        }), (0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            children: E.Z.Messages.GUILD_POPOUT_UNAVAILABLE_FLAVOR
                        })]
                    })
                })
            }

            function M(e) {
                var t, n = e.guild,
                    i = e.channelId,
                    s = e.messageId,
                    d = n.name,
                    m = n.id,
                    j = n.discoverySplash,
                    _ = n.icon,
                    x = n.description,
                    T = n.presenceCount,
                    C = n.memberCount,
                    I = n.emojis,
                    w = m,
                    R = (0, a.e7)([h.default], (function() {
                        return h.default.getId()
                    })),
                    Z = (0, a.e7)([b.ZP], (function() {
                        return b.ZP.isMember(w, R)
                    }), [w, R]),
                    M = D(o.useState(!1), 2),
                    k = M[0],
                    U = M[1],
                    G = function(e) {
                        e.stopPropagation();
                        if (Z)(0, p.XU)(w, i, s);
                        else {
                            var t = {
                                page: S.ZY5.GUILD_CHANNEL,
                                section: S.jXE.GUILD_POPOUT,
                                object: S.qAy.CARD
                            };
                            (0, v.Ub)(w, t)
                        }
                        U(!0)
                    },
                    B = g.ZP.getGuildDiscoverySplashURL({
                        id: m,
                        splash: j,
                        size: 250 * (0, f.x_)()
                    }),
                    V = null !== (t = g.ZP.getGuildIconURL({
                        id: m,
                        icon: _,
                        size: L
                    })) && void 0 !== t ? t : void 0,
                    H = I,
                    F = null;
                if (null != H && H.length > 6 && null != I) {
                    var W;
                    H = null !== (W = null == I ? void 0 : I.slice(Math.max((null == I ? void 0 : I.length) - 6, 0))) && void 0 !== W ? W : [];
                    F = I.length - 6
                }
                return (0, r.jsxs)(u.Dialog, {
                    "aria-label": d,
                    className: P().guildPopout,
                    children: [null != B ? (0, r.jsx)("img", {
                        src: B,
                        alt: "",
                        className: P().splashImage
                    }) : null, (0, r.jsxs)("div", {
                        className: l()(P().body, N({}, P().hasSplash, null != B)),
                        children: [(0, r.jsx)("div", {
                            className: l()(N({}, P().iconWithSplash, null != B)),
                            children: (0, r.jsx)(u.Clickable, {
                                onClick: G,
                                children: (0, r.jsx)(O.ZP, {
                                    mask: O.ZP.Masks.SQUIRCLE,
                                    width: 88,
                                    height: 88,
                                    children: (0, r.jsx)("div", {
                                        className: P().iconMask,
                                        children: (0, r.jsx)(O.ZP, {
                                            mask: O.ZP.Masks.SQUIRCLE,
                                            width: L,
                                            height: L,
                                            children: (0, r.jsx)("img", {
                                                src: V,
                                                alt: "",
                                                className: P().avatar
                                            })
                                        })
                                    })
                                })
                            })
                        }), null != d ? (0, r.jsxs)("div", {
                            className: P().guildNameWrapper,
                            children: [(0, r.jsx)(y.Z, {
                                className: P().badge,
                                guild: n,
                                tooltipPosition: "top",
                                tooltipColor: u.Tooltip.Colors.PRIMARY,
                                badgeColor: c.Z.unsafe_rawColors.PRIMARY_500.css
                            }), (0, r.jsx)(u.Text, {
                                variant: "text-md/semibold",
                                className: P().guildName,
                                children: d
                            })]
                        }) : null, null != x ? (0, r.jsx)(u.Text, {
                            color: "header-secondary",
                            className: P().description,
                            variant: "text-sm/normal",
                            children: x
                        }) : null, (0, r.jsxs)("div", {
                            className: P().memberInfo,
                            children: [null != T ? (0, r.jsxs)("div", {
                                className: P().memberCount,
                                children: [(0, r.jsx)("div", {
                                    className: P().dotOnline
                                }), (0, r.jsx)(u.Text, {
                                    variant: "text-xs/normal",
                                    className: P().memberText,
                                    children: E.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                        membersOnline: T
                                    })
                                })]
                            }) : null, null != C ? (0, r.jsxs)("div", {
                                className: P().memberCount,
                                children: [(0, r.jsx)("div", {
                                    className: P().dotOffline
                                }), (0, r.jsx)(u.Text, {
                                    variant: "text-xs/normal",
                                    className: P().memberText,
                                    children: E.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                        count: C
                                    })
                                })]
                            }) : null]
                        })]
                    }), (0,
                        r.jsxs)("div", {
                        className: P().footer,
                        children: [null != H && H.length > 0 ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(u.Heading, {
                                variant: "heading-deprecated-12/semibold",
                                className: P().emojiHeader,
                                color: "header-secondary",
                                children: E.Z.Messages.SERVER_EMOJI
                            }), (0, r.jsxs)("div", {
                                className: l()(P().emojiContainer, N({}, P().withCounter, null != F)),
                                children: [H.map((function(e) {
                                    var t = g.ZP.getEmojiURL({
                                        id: e.id,
                                        animated: !1,
                                        size: 24
                                    });
                                    return (0, r.jsx)(u.Tooltip, {
                                        text: ":".concat(e.name, ":"),
                                        children: function(e) {
                                            return (0, r.jsx)("img", A(function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        r = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                    }))));
                                                    r.forEach((function(t) {
                                                        N(e, t, n[t])
                                                    }))
                                                }
                                                return e
                                            }({}, e), {
                                                width: 24,
                                                height: 24,
                                                src: t,
                                                className: l()(N({}, P().emoji, null == F)),
                                                alt: ""
                                            }))
                                        }
                                    }, e.id)
                                })), null != F ? (0, r.jsx)(u.Heading, {
                                    variant: "heading-deprecated-12/semibold",
                                    className: P().emojiCounter,
                                    color: "header-secondary",
                                    children: "+".concat(F)
                                }) : null]
                            })]
                        }) : null, (0, r.jsx)(u.Button, {
                            look: u.Button.Looks.FILLED,
                            color: u.Button.Colors.BRAND,
                            size: u.Button.Sizes.SMALL,
                            onClick: G,
                            submitting: k,
                            autoFocus: !0,
                            children: E.Z.Messages.GUILD_POPOUT_VIEW_SERVER_BUTTON
                        })]
                    })]
                })
            }

            function k(e) {
                var t = e.guildId,
                    n = e.channelId,
                    i = e.messageId,
                    l = (0, a.cj)([j.Z], (function() {
                        return {
                            guild: j.Z.getGuild(t),
                            loading: j.Z.isFetchingGuild(t),
                            unavailable: j.Z.hasFetchFailed(t)
                        }
                    }), [t]),
                    c = l.loading,
                    s = l.unavailable,
                    d = l.guild;
                o.useEffect((function() {
                    null != d || c || s || (0, m.P)(t)
                }), [d, t, c, s]);
                return c ? (0, r.jsx)(u.Dialog, {
                    "aria-label": E.Z.Messages.LOADING,
                    className: P().guildPopout,
                    children: (0, r.jsx)(R, {})
                }) : null == d || s ? (0, r.jsx)(Z, {}) : (0, r.jsx)(M, {
                    guild: d,
                    channelId: n,
                    messageId: i
                })
            }
        },
        796399: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => O
            });
            var r = n(785893),
                o = n(667294),
                i = n(202351),
                l = n(882723),
                a = n(34947),
                c = n(250384),
                s = n(38836);

            function u(e, t, n, r, o, i, l) {
                try {
                    var a = e[i](l),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function d(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function l(e) {
                            u(i, r, o, l, a, "next", e)
                        }

                        function a(e) {
                            u(i, r, o, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        f(e, t, n[t])
                    }))
                }
                return e
            }

            function h(e, t) {
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

            function b(e, t) {
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
            var y = function(e, t) {
                var n, r, o, i, l = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                        0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = t.call(e, l)
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
                        }([i, a])
                    }
                }
            };

            function O(e) {
                var t = e.guildId,
                    n = e.channelId,
                    u = e.messageId,
                    f = b(e, ["guildId", "channelId", "messageId"]),
                    O = (0, i.cj)([c.Z], (function() {
                        return {
                            guild: c.Z.getGuild(t),
                            unavailable: c.Z.hasFetchFailed(t)
                        }
                    }), [t]),
                    g = O.unavailable,
                    v = O.guild,
                    m = null != v,
                    j = o.useCallback(d((function() {
                        return y(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    e.trys.push([0, 3, , 4]);
                                    return m ? [3, 2] : [4, (0, a.P)(t)];
                                case 1:
                                    e.sent();
                                    e.label = 2;
                                case 2:
                                    return [3, 4];
                                case 3:
                                    e.sent();
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    })), [m, t]);
                return g ? (0, r.jsx)(l.Popout, p({
                    position: "right",
                    renderPopout: function(e) {
                        return (0, r.jsx)(s.SK, {})
                    }
                }, f)) : (0, r.jsx)(l.Popout, p({
                    position: "right",
                    preload: j,
                    renderPopout: function(e) {
                        return null == v ? (0, r.jsx)(r.Fragment, {}) : (0, r.jsx)(s.sK, h(p({}, e), {
                            guild: v,
                            channelId: n,
                            messageId: u
                        }))
                    }
                }, f))
            }
        },
        99539: (e, t, n) => {
            "use strict";
            n.d(t, {
                q: () => a
            });
            var r = n(202351),
                o = n(227202),
                i = n(5544),
                l = n(682776);

            function a(e) {
                var t, n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null;
                return (0, r.Wu)([i.ZP, l.Z], (function() {
                    return i.ZP.getChannels(n)[i.Zb].reduce((function(e, t) {
                        var n = t.channel;
                        if (!n.isGuildStageVoice()) return e;
                        (function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Z;
                            return !!e.isGuildStageVoice() && t.can(o.yP, e)
                        })(t.channel, l.Z) && e.push(n);
                        return e
                    }), [])
                }), [n])
            }
        },
        371188: (e, t, n) => {
            "use strict";
            n.d(t, {
                G3: () => i,
                Ib: () => l,
                ib: () => a,
                ub: () => u,
                v1: () => f,
                me: () => p
            });
            var r = n(730381),
                o = n.n(r),
                i = (n(3155), 365),
                l = i + 1,
                a = function() {
                    var e = o()().add(1, "hour"),
                        t = e.hour();
                    e.minutes() >= 30 && (t += 1);
                    return e.hour(t).minutes(0).seconds(0)
                };
            var c = function(e, t) {
                    return e.format(e.get("years") === t.get("years") ? "ddd MMM Do · LT" : "ddd MMM Do, YYYY · LT")
                },
                s = function(e, t) {
                    return e.diff(t, "days") > 1 ? c(e, t) : e.calendar(t)
                };

            function u(e, t, n) {
                null == n && (n = o()());
                var r = o()(e),
                    i = null != t && "" !== t ? o()(t) : void 0,
                    l = null != t && r.isSame(i, "day");
                return {
                    startDateTimeString: s(r, n),
                    endDateTimeString: null != i ? l ? i.format("LT") : c(i, n) : void 0,
                    currentOrPastEvent: r <= n,
                    upcomingEvent: r <= o()().add(1, "hour"),
                    withinStartWindow: r <= o()().add(15, "minute"),
                    diffMinutes: r.diff(n, "minutes")
                }
            }

            function d(e, t) {
                var n;
                if (null != e) {
                    n = {
                        startDate: o()(e),
                        endDate: void 0
                    };
                    null != t && (n.endDate = o()(t))
                }
                return n
            }

            function f(e) {
                return d(e.scheduledStartTime, e.scheduledEndTime)
            }

            function p(e) {
                return d(e.scheduled_start_time, e.scheduled_end_time)
            }
        },
        497028: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => y
            });
            var r = n(785893),
                o = (n(667294),
                    n(730381)),
                i = n.n(o),
                l = n(882723),
                a = n(127661),
                c = n(553480),
                s = n(371188),
                u = n(473708),
                d = n(250088),
                f = n.n(d);

            function p(e, t, n) {
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
                        p(e, t, n[t])
                    }))
                }
                return e
            }

            function b(e, t) {
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

            function y(e) {
                var t = e.className,
                    n = e.onScheduleChange,
                    o = e.onTimeChange,
                    d = e.timeSelected,
                    p = void 0 === d || d,
                    y = e.schedule,
                    O = e.showEndDate,
                    g = void 0 !== O && O,
                    v = e.requireEndDate,
                    m = void 0 !== v && v,
                    j = e.disableStartDateTime,
                    S = void 0 !== j && j;
                if (null == y) return null;
                var E = null,
                    _ = i()(),
                    P = i()().add(s.G3, "days"),
                    x = i()().add(s.Ib, "days"),
                    T = function(e) {
                        n(b(h({}, y), {
                            endDate: e
                        }))
                    };
                g && (E = null != y.endDate || m ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: f().doubleInput,
                        children: [(0, r.jsx)(l.FormItem, {
                            title: u.Z.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: m,
                            children: (0, r.jsx)(l.DateInput, {
                                value: y.endDate,
                                onSelect: T,
                                minDate: y.startDate,
                                maxDate: x
                            })
                        }), (0, r.jsx)(l.FormItem, {
                            title: u.Z.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: m,
                            children: (0, r.jsx)(l.TimeInput, {
                                value: y.endDate,
                                onChange: T
                            })
                        })]
                    }), m ? null : (0, r.jsx)(l.Button, {
                        onClick: function() {
                            T(void 0)
                        },
                        look: l.Button.Looks.BLANK,
                        size: l.Button.Sizes.MIN,
                        children: (0, r.jsxs)("div", {
                            className: f().link,
                            children: [(0, r.jsx)(a.Z, {
                                width: 17,
                                height: 17,
                                className: f().removeIcon
                            }), (0, r.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: u.Z.Messages.CREATE_EVENT_REMOVE_END_TIME_LABEL
                            })]
                        })
                    })]
                }) : (0, r.jsx)(l.Button, {
                    look: l.Button.Looks.BLANK,
                    size: l.Button.Sizes.MIN,
                    onClick: function() {
                        T(i()(y.startDate).add(1, "hour"))
                    },
                    children: (0, r.jsxs)("div", {
                        className: f().link,
                        children: [(0, r.jsx)(c.Z, {
                            width: 20,
                            height: 20,
                            className: f().addIcon
                        }), (0, r.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            children: u.Z.Messages.CREATE_EVENT_ADD_END_TIME_LABEL
                        })]
                    })
                }));
                return (0, r.jsxs)("div", {
                    className: t,
                    children: [(0, r.jsxs)("div", {
                        className: f().doubleInput,
                        children: [(0, r.jsx)(l.FormItem, {
                            title: u.Z.Messages.CREATE_EVENT_START_DATE_LABEL,
                            required: !0,
                            children: (0, r.jsx)(l.DateInput, {
                                value: y.startDate,
                                onSelect: function(e) {
                                    n(b(h({}, y), {
                                        startDate: e
                                    }))
                                },
                                minDate: _,
                                maxDate: P,
                                disabled: S
                            })
                        }), (0, r.jsx)(l.FormItem, {
                            title: u.Z.Messages.CREATE_EVENT_START_TIME_LABEL,
                            required: !0,
                            children: (0, r.jsx)(l.TimeInput, {
                                value: y.startDate,
                                onChange: function(e) {
                                    if (e.isValid()) {
                                        null == o || o(!0);
                                        n(b(h({}, y), {
                                            startDate: e
                                        }))
                                    }
                                },
                                hideValue: !p,
                                disabled: S
                            })
                        })]
                    }), E]
                })
            }
        },
        173764: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                l = n(882723),
                a = n(961241),
                c = n(473708),
                s = n(549099),
                u = n.n(s);

            function d(e) {
                var t = e.guild,
                    n = e.speakers,
                    o = e.speakerCount,
                    s = e.className,
                    d = n.slice(0, 5),
                    f = d.map((function(e) {
                        var n, o;
                        return (0, r.jsxs)("div", {
                            className: u().speakerContainer,
                            children: [(0, r.jsx)(l.Avatar, {
                                src: null == e || null === (n = e.user) || void 0 === n ? void 0 : n.getAvatarURL(t.id, 20),
                                size: l.AvatarSizes.SIZE_20,
                                className: u().avatar,
                                "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
                            }), (0, r.jsx)("div", {
                                className: u().textInGridContainer,
                                children: (0, r.jsx)(l.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    className: u().textInGrid,
                                    children: null == e ? void 0 : e.userNick
                                })
                            })]
                        }, null == e || null === (o = e.user) || void 0 === o ? void 0 : o.id)
                    })),
                    p = o - d.length;
                return (0, r.jsxs)("div", {
                    className: i()(u().grid, s),
                    children: [f, p > 0 && (0, r.jsxs)("div", {
                        className: u().speakerContainer,
                        children: [(0, r.jsx)("div", {
                            className: u().iconMicrophone,
                            children: (0, r.jsx)(a.Z, {
                                height: 12
                            })
                        }), (0, r.jsx)(l.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: u().textInGrid,
                            children: c.Z.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({
                                count: p
                            })
                        })]
                    })]
                })
            }
        },
        115617: (e, t, n) => {
            "use strict";
            n.d(t, {
                Kw: () => l,
                hv: () => a,
                Po: () => c
            });
            var r = n(744564),
                o = n(652591),
                i = n(2590);

            function l(e) {
                o.default.track(i.rMx.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                });
                r.Z.wait((function() {
                    r.Z.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                }))
            }

            function a(e, t) {
                r.Z.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function c(e) {
                r.Z.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        550254: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => y
            });
            var r = n(202351),
                o = n(744564),
                i = n(113469),
                l = n(199790);

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function s(e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function u(e, t) {
                u = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return u(e, t)
            }
            var d = function(e) {
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
                    var n, r = c(e);
                    if (t) {
                        var o = c(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return s(this, n)
                }
            }
            var p = new Set,
                h = {};
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
                    t && u(e, t)
                }(n, e);
                var t = f(n);

                function n() {
                    a(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    if (null != e) {
                        Array.isArray(e.hiddenHotspots) && (p = new Set(e.hiddenHotspots));
                        null != e.hotspotOverrides && (h = e.hotspotOverrides)
                    }
                };
                r.hasHotspot = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && h[e];
                    return !l.a && (!i.s.isDisallowPopupsSet() && (n || !p.has(e)))
                };
                r.hasHiddenHotspot = function(e) {
                    return p.has(e)
                };
                r.getHotspotOverride = function(e) {
                    return h[e]
                };
                r.getState = function() {
                    return {
                        hiddenHotspots: p,
                        hotspotOverrides: h
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        hiddenHotspots: p,
                        hotspotOverrides: h
                    }
                };
                return n
            }(r.ZP.PersistedStore);
            b.displayName = "HotspotStore";
            b.persistKey = "hotspots";
            b.migrations = [function(e) {
                return {
                    hiddenHotspots: null != e ? e : [],
                    hotspotOverrides: {}
                }
            }];
            const y = new b(o.Z, {
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.hiddenHotspots;
                    p = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    var t = e.location;
                    if (p.has(t)) return !1;
                    p.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    var t = e.location,
                        n = e.enabled;
                    h[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    var t = e.location;
                    if (null == h[t]) return !1;
                    delete h[t]
                }
            })
        },
        442812: (e, t, n) => {
            "use strict";
            n.d(t, {
                w8: () => s,
                Rk: () => u,
                Fd: () => d,
                Io: () => f
            });
            var r = n(202351),
                o = n(664806),
                i = n(82274),
                l = n(808194);

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function c(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            l = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(e, t) {
                return c((0, r.e7)([i.Z], (function() {
                    return [i.Z.getMutableParticipants(e, t), i.Z.getParticipantsVersion(e)]
                }), [e, t], o.Q), 1)[0]
            }

            function u(e, t) {
                return (0, r.e7)([i.Z], (function() {
                    return i.Z.getParticipantCount(e, t)
                }), [e, t])
            }

            function d(e) {
                return c((0, r.e7)([i.Z], (function() {
                    return [i.Z.getMutableRequestToSpeakParticipants(e), i.Z.getRequestToSpeakParticipantsVersion(e)]
                }), [e], o.Q), 1)[0]
            }

            function f(e) {
                return (0, r.e7)([i.Z], (function() {
                    return i.Z.getMutableParticipants(e, l.pV.SPEAKER).filter((function(e) {
                        return e.type === l.Ui.VOICE
                    })).length
                }), [e])
            }
        },
        800455: (e, t, n) => {
            "use strict";
            n.d(t, {
                mv: () => m,
                Xd: () => j
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(795308),
                l = n(882723),
                a = n(971402),
                c = n(742257),
                s = n(961241),
                u = n(98265),
                d = n(661782),
                f = n(749565),
                p = n(933022),
                h = n(426404),
                b = n(473708),
                y = n(555563),
                O = n.n(y);

            function g(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function v(e, t) {
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
            var m = function(e) {
                    var t = e.channelId,
                        n = (0, h._d)(t);
                    if (0 === n) return null;
                    return (0, r.jsxs)("div", {
                        className: O().blockedNotice,
                        children: [(0, r.jsx)(c.Z, {
                            className: O().blockedIcon,
                            color: i.Z.unsafe_rawColors.RED_400.css
                        }), (0,
                            r.jsx)(l.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: b.Z.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format({
                                number: n
                            })
                        }), (0, r.jsx)(l.Clickable, {
                            className: O().blockedButton,
                            onClick: function(e) {
                                (0, a.vq)(e, (function(e) {
                                    return (0, r.jsx)(S, v(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                g(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({}, e), {
                                        channelId: t
                                    }))
                                }), {
                                    position: "left",
                                    align: "bottom"
                                })
                            },
                            children: b.Z.Messages.VIEW_ALL
                        })]
                    })
                },
                j = function(e) {
                    var t = e.user,
                        n = e.showStatus,
                        i = e.speaker,
                        a = e.channelId,
                        c = (0, o.e7)([p.ZP], (function() {
                            return p.ZP.isModerator(t.id, a)
                        })),
                        h = null;
                    n && (h = i ? b.Z.Messages.STAGE_SPEAKER : c ? b.Z.Messages.STAGE_MODERATOR_TOOLTIP : b.Z.Messages.STAGE_AUDIENCE);
                    return (0, r.jsxs)("div", {
                        className: O().user,
                        children: [(0, r.jsx)(d.Z, {
                            src: t.getAvatarURL(null, 32),
                            size: l.AvatarSizes.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: i ? function() {
                                return (0, r.jsx)(s.Z, {
                                    className: O().icon
                                })
                            } : null
                        }, t.id), (0, r.jsxs)("div", {
                            className: O().userInfo,
                            children: [(0, r.jsxs)("div", {
                                className: O().username,
                                children: [(0, r.jsx)(u.Z, {
                                    size: n ? u.Z.Sizes.SIZE_16 : u.Z.Sizes.SIZE_14,
                                    children: f.ZP.getName(t)
                                }), (0, r.jsx)(u.Z, {
                                    size: n ? u.Z.Sizes.SIZE_16 : u.Z.Sizes.SIZE_14,
                                    color: u.Z.Colors.HEADER_SECONDARY,
                                    children: "#".concat(t.discriminator)
                                })]
                            }), (0, r.jsxs)("div", {
                                className: O().username,
                                children: [(0, r.jsx)(l.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-danger",
                                    children: b.Z.Messages.BLOCKED
                                }), (0, r.jsxs)(l.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [" ", "| ", h]
                                })]
                            })]
                        })]
                    })
                },
                S = function(e) {
                    var t = e.channelId,
                        n = (0, h.z)(t);
                    return (0, r.jsx)(l.Scroller, {
                        className: O().container,
                        children: n.map((function(e) {
                            var n = e.user;
                            return (0, r.jsx)(j, {
                                user: n,
                                channelId: t
                            }, n.id)
                        }))
                    })
                }
        },
        832642: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                l = n(473708),
                a = n(347234),
                c = n.n(a),
                s = n(483683),
                u = n.n(s),
                d = n(63685),
                f = n.n(d);

            function p(e) {
                var t = e.className,
                    n = e.children;
                return (0, r.jsxs)("div", {
                    className: i()(c().container, t),
                    children: [(0, r.jsx)("img", {
                        alt: l.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: f(),
                        className: i()(c().sparkleIcon, c().sparkleBottom)
                    }), n, (0, r.jsx)("img", {
                        alt: l.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: u(),
                        className: i()(c().sparkleIcon, c().sparkleTop)
                    })]
                })
            }
        },
        423285: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => Be
            });
            var r = n(785893),
                o = n(667294),
                i = n(202351),
                l = n(882723),
                a = n(567403),
                c = n(443812),
                s = n(516909),
                u = n(766496),
                d = n(832642),
                f = n(473903),
                p = n(794547),
                h = n(472034),
                b = n(491275),
                y = n(422557),
                O = n(348592),
                g = n(773148),
                v = n(442812),
                m = n(808194),
                j = n(294184),
                S = n.n(j),
                E = n(796399),
                _ = n(173764),
                P = n(206986),
                x = n(124251),
                T = n(23727),
                C = n(658705),
                I = n.n(C);
            const w = function(e) {
                var t = e.count,
                    n = e.className;
                return (0, r.jsxs)("div", {
                    className: S()(I().container, n),
                    children: [(0,
                        r.jsx)(T.Z, {
                        width: 12,
                        height: 12,
                        className: I().icon
                    }), (0, r.jsx)(l.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: null != t ? t : 0
                    })]
                })
            };
            var N, A = n(756221),
                D = n.n(A);

            function L(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }! function(e) {
                e[e.UNSPECIFIED = 0] = "UNSPECIFIED";
                e[e.TRENDING = 1] = "TRENDING";
                e[e.PERSONALIZED = 2] = "PERSONALIZED";
                e[e.USER_GUILDS = 3] = "USER_GUILDS";
                e[e.FRIENDS_GUILDS = 4] = "FRIENDS_GUILDS";
                e[e.INTRO_CARD = 5] = "INTRO_CARD";
                e[e.FEATURED = 6] = "FEATURED"
            }(N || (N = {}));

            function R(e) {
                var t = e.guild,
                    n = e.stageInstance,
                    o = e.showGuildPopout,
                    i = e.setShowGuildPopout,
                    a = e.handleGuildNameClick,
                    c = e.source,
                    u = e.speakers,
                    d = e.speakerCount,
                    f = e.audienceCount,
                    p = e.channelName,
                    h = t.id;
                return (0, r.jsx)("div", {
                    className: D().contentContainer,
                    children: (0, r.jsxs)("div", {
                        className: D().headerContainer,
                        children: [(0, r.jsxs)("div", {
                            className: D().guildInfoContainer,
                            children: [(0, r.jsx)(E.Z, {
                                guildId: h,
                                shouldShow: o,
                                onRequestClose: function() {
                                    return i(!1)
                                },
                                children: function() {
                                    return (0, r.jsxs)(l.Clickable, {
                                        className: D().flexContainerRow,
                                        onClick: a,
                                        children: [(0, r.jsx)(x.Z, {
                                            guild: t,
                                            size: x.Z.Sizes.MINI,
                                            className: D().guildIcon
                                        }), (0, r.jsxs)("div", {
                                            className: D().flexContainerRow,
                                            children: [(0, r.jsx)(l.Text, {
                                                color: "header-secondary",
                                                variant: "text-sm/normal",
                                                className: S()(D().guildName, L({}, D().disabled, null == a)),
                                                children: t.name
                                            }), (0, r.jsx)(P.Z, {
                                                guild: t
                                            })]
                                        })]
                                    })
                                }
                            }), (0, r.jsxs)("div", {
                                className: D().rightJustifiedContent,
                                children: [c === N.FEATURED && (0, r.jsx)("div", {
                                    className: D().featuredTag,
                                    children: (0, r.jsx)(l.Text, {
                                        variant: "text-sm/normal",
                                        className: D().featuredTagText,
                                        children: "Featured"
                                    })
                                }), (0, r.jsx)(w, {
                                    count: f,
                                    className: D().audienceCount
                                })]
                            })]
                        }), (0, r.jsx)(l.Text, {
                            color: "header-primary",
                            variant: "text-lg/semibold",
                            className: D().topicText,
                            children: n.topic
                        }), (0, r.jsx)(l.Text, {
                            color: "header-secondary",
                            className: D().description,
                            variant: "text-sm/normal",
                            children: n.description
                        }), (0, r.jsx)(_.Z, {
                            guild: t,
                            speakers: u,
                            speakerCount: d,
                            className: D().speakers
                        }), null != p && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("hr", {
                                className: D().divider
                            }), (0, r.jsxs)("div", {
                                className: D().footer,
                                children: [(0, r.jsx)(s.Z, {
                                    width: 20,
                                    height: 20,
                                    className: D().icon
                                }), (0, r.jsx)(l.Text, {
                                    color: "header-secondary",
                                    className: D().label,
                                    variant: "text-sm/normal",
                                    children: p
                                })]
                            })]
                        })]
                    })
                })
            }
            var Z = n(2590),
                M = n(3155),
                k = n(473708),
                U = n(721637),
                G = n.n(U);

            function B(e) {
                var t = e.icon;
                return (0, r.jsx)("div", {
                    className: G().iconContainer,
                    children: (0, r.jsx)(t, {
                        width: 24,
                        height: 24
                    })
                })
            }

            function V(e) {
                var t = e.icon,
                    n = e.text;
                return (0, r.jsxs)("div", {
                    className: G().listItemContainer,
                    children: [(0, r.jsx)("div", {
                        className: G().listItemIconContainer,
                        children: t
                    }), (0, r.jsx)(l.Text, {
                        className: G().listItemText,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: n
                    })]
                })
            }

            function H(e) {
                var t, n = e.guild,
                    o = e.channel,
                    l = e.stageData,
                    a = (0, i.e7)([f.default], (function() {
                        return f.default.getCurrentUser()
                    }), []),
                    c = {
                        id: "1337",
                        guild_id: n.id,
                        channel_id: o.id,
                        topic: l.topic,
                        description: l.description,
                        privacy_level: null !== (t = l.privacyLevel) && void 0 !== t ? t : M.j8.PUBLIC
                    },
                    s = (0, v.w8)(o.id, m.pV.SPEAKER),
                    u = (0, v.Rk)(o.id, m.pV.AUDIENCE),
                    d = s.slice(0, 5);
                null == d.find((function(e) {
                    var t;
                    return (null === (t = e.user) || void 0 === t ? void 0 : t.id) === (null == a ? void 0 : a.id)
                })) && d.push({
                    user: a,
                    userNick: g.ZP.getName(n.id, o.id, a)
                });
                return (0, r.jsx)("div", {
                    className: G().previewCardContainer,
                    children: (0, r.jsx)("div", {
                        className: G().previewCard,
                        children: (0, r.jsx)(R, {
                            guild: n,
                            stageInstance: c,
                            showGuildPopout: !1,
                            setShowGuildPopout: function() {},
                            source: N.UNSPECIFIED,
                            speakers: d,
                            speakerCount: s.length,
                            audienceCount: Math.max(1337, u),
                            channelName: o.name
                        })
                    })
                })
            }

            function F(e) {
                var t = e.guild,
                    n = e.channel,
                    o = e.stageData,
                    i = e.headerId,
                    a = e.loading,
                    c = e.onNext,
                    s = e.onCancel,
                    u = e.onBack;
                return null == t || null == n || null == o ? null : (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(H, {
                        guild: t,
                        channel: n,
                        stageData: o
                    }), (0, r.jsxs)(l.ModalContent, {
                        className: G().container,
                        children: [(0, r.jsxs)("div", {
                            className: G().header,
                            children: [(0, r.jsx)(l.Heading, {
                                id: i,
                                className: G().title,
                                variant: "heading-xl/semibold",
                                children: k.Z.Messages.START_STAGE_PUBLIC_PREVIEW_TITLE
                            }), (0, r.jsx)(l.Text, {
                                className: G().subtitle,
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: k.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SUBTITLE
                            })]
                        }), (0, r.jsxs)("div", {
                            className: G().list,
                            children: [(0, r.jsx)(V, {
                                icon: (0, r.jsx)(B, {
                                    icon: p.Z
                                }),
                                text: k.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_ONE
                            }), (0, r.jsx)(V, {
                                icon: (0, r.jsx)(B, {
                                    icon: b.Z
                                }),
                                text: k.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_TWO
                            }), (0, r.jsx)(V, {
                                icon: (0, r.jsx)(B, {
                                    icon: h.Z
                                }),
                                text: k.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_THREE
                            }), (0, r.jsx)(V, {
                                icon: (0, r.jsx)(y.Z, {
                                    className: G().badgeIconBackground,
                                    foreground: G().badgeIconForeground,
                                    width: 40,
                                    height: 40
                                }),
                                text: k.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_FOUR.format({
                                    articleURL: O.Z.getArticleURL(Z.BhN.STAGE_CHANNEL_GUIDELINES)
                                })
                            })]
                        })]
                    }), (0, r.jsxs)(l.ModalFooter, {
                        children: [(0, r.jsx)(l.Button, {
                            color: l.Button.Colors.GREEN,
                            onClick: c,
                            submitting: a,
                            children: k.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
                        }), (0, r.jsx)(l.Button, {
                            color: l.Button.Colors.PRIMARY,
                            className: G().cancelButton,
                            onClick: s,
                            children: k.Z.Messages.CANCEL
                        }), (0, r.jsx)(l.Button, {
                            look: l.Button.Looks.LINK,
                            color: l.Button.Colors.LINK,
                            className: G().backButton,
                            onClick: u,
                            size: l.Button.Sizes.MIN,
                            children: k.Z.Messages.BACK
                        })]
                    })]
                })
            }
            var W = n(730381),
                Y = n.n(W),
                z = n(773011),
                K = n(99539),
                q = n(371188),
                Q = n(22637),
                X = n.n(Q);

            function $(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function J(e, t) {
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

            function ee(e) {
                var t = e.sendStartNotification,
                    n = e.setSendStartNotification,
                    o = t ? k.Z.Messages.GUILD_NOTIFY_MEMBERS_ENABLED_NEW : k.Z.Messages.GUILD_NOTIFY_MEMBERS_DISABLED_NEW;
                return (0, r.jsx)("div", {
                    className: X().notificationToggle,
                    children: (0, r.jsx)(l.Checkbox, {
                        type: l.Checkbox.Types.INVERTED,
                        size: 14,
                        className: X().checkbox,
                        value: t,
                        onChange: function() {
                            n(!t)
                        },
                        children: (0, r.jsx)(l.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: (0, r.jsx)(l.Tooltip, {
                                position: "bottom",
                                tooltipClassName: X().tooltip,
                                text: k.Z.Messages.GUILD_NOTIFY_MEMBERS_TOOLTIP_NEW,
                                "aria-label": k.Z.Messages.GUILD_NOTIFY_MEMBERS_TOOLTIP_NEW,
                                children: function(e) {
                                    return (0, r.jsx)("span", J(function(e) {
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
                                    }({}, e), {
                                        children: o
                                    }))
                                }
                            })
                        })
                    })
                })
            }
            var te = n(497028),
                ne = n(550254),
                re = n(840922),
                oe = n(652591),
                ie = n(27851),
                le = n(682776),
                ae = n(520453);

            function ce(e) {
                return (0, i.e7)([le.Z], (function() {
                    return null != e && le.Z.can(ae.Pl.MENTION_EVERYONE, e)
                }), [e])
            }
            var se = n(426404),
                ue = n(800455),
                de = n(79462),
                fe = n(630670),
                pe = n(186315),
                he = n.n(pe);

            function be(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ye(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Oe(e, t) {
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

            function ge(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            l = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return be(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return be(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ve(e) {
                var t = e.stageChannelsInGuild,
                    n = e.channel,
                    o = e.onSelectChannel;
                if (null == o) return null;
                return (0,
                    r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(l.FormItem, {
                        title: k.Z.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL + " asdf",
                        className: he().channelSelectionFormItem,
                        required: !0,
                        children: (0, r.jsx)(l.SearchableSelect, {
                            value: n.id,
                            options: t.map((function(e) {
                                return {
                                    value: e.id,
                                    label: (0, z.F6)(e, f.default, re.Z, !0)
                                }
                            })),
                            onChange: function(e) {
                                var n = t.find((function(t) {
                                    return t.id === e
                                }));
                                null != n && o(n)
                            },
                            renderOptionPrefix: function() {
                                return (0, r.jsx)(s.Z, {
                                    height: 24
                                })
                            }
                        })
                    })
                })
            }

            function me(e) {
                var t, n, a, c, s, d, f = e.channel,
                    p = e.guild,
                    h = e.header,
                    b = e.error,
                    y = e.loading,
                    O = e.onSave,
                    g = e.onEventSave,
                    v = e.onClose,
                    m = e.onSelectChannel,
                    j = e.isEvent,
                    S = void 0 !== j && j,
                    E = e.defaultOptions,
                    _ = e.isSlideReady,
                    P = void 0 === _ || _,
                    x = o.useMemo((function() {
                        return u.Z.getStageInstanceByChannel(f.id)
                    }), [f.id]),
                    T = ge(o.useState(null !== (n = null !== (t = null == E ? void 0 : E.topic) && void 0 !== t ? t : null == x ? void 0 : x.topic) && void 0 !== n ? n : ""), 2),
                    C = T[0],
                    I = T[1],
                    w = ge(o.useState(null !== (a = null == E ? void 0 : E.description) && void 0 !== a ? a : ""), 2),
                    N = w[0],
                    A = w[1],
                    D = ge(o.useState(S), 1)[0],
                    L = ge(o.useState(null !== (c = null == E ? void 0 : E.schedule) && void 0 !== c ? c : {
                        startDate: (0, q.ib)()
                    }), 2),
                    R = L[0],
                    U = L[1],
                    G = ge(o.useState(D && null != (null == E ? void 0 : E.schedule)), 2),
                    B = G[0],
                    V = G[1],
                    H = ce(f),
                    F = function(e) {
                        var t = null == e ? void 0 : e.guild_id,
                            n = (0, i.e7)([ie.Z], (function() {
                                return ie.Z.getMemberCount(t)
                            }), [t]);
                        return null == e || !(null == n || n > 5e4)
                    }(f),
                    W = null == x && H && !D,
                    Q = ge(o.useState(W && F), 2),
                    X = Q[0],
                    $ = Q[1],
                    J = (0, i.e7)([ne.Z], (function() {
                        return ne.Z.hasHotspot(fe.v.LIVE_STAGE_NOTIFICATION_BADGE)
                    })),
                    re = M.j8.GUILD_ONLY,
                    le = ge(o.useState(null !== (d = null !== (s = null == E ? void 0 : E.privacyLevel) && void 0 !== s ? s : null == x ? void 0 : x.privacy_level) && void 0 !== d ? d : re), 1)[0],
                    ae = (0, se._d)(f.id),
                    pe = ge(o.useState(!1), 2),
                    be = pe[0],
                    me = pe[1],
                    je = (0, z.ZP)(f),
                    Se = (0,
                        K.q)(p),
                    Ee = null != m,
                    _e = Se.length > 1;
                o.useEffect((function() {
                    oe.default.track(Z.rMx.START_STAGE_OPENED, {
                        stage_instance_id: null == x ? void 0 : x.id,
                        can_start_public_stage: !1,
                        guild_id: f.guild_id
                    })
                }), []);
                var Pe = function(e) {
                        e.preventDefault();
                        if (le === M.j8.PUBLIC && C.length < 20 && !be) me(!0);
                        else {
                            var t = {
                                topic: C,
                                privacyLevel: le,
                                sendStartNotification: X
                            };
                            if (D) {
                                if (!B) return;
                                null == g || g(Oe(function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                                        }))));
                                        r.forEach((function(t) {
                                            ye(e, t, n[t])
                                        }))
                                    }
                                    return e
                                }({}, t), {
                                    schedule: R,
                                    description: N,
                                    entityType: M.WX.STAGE_INSTANCE
                                }))
                            } else null == O || O(t)
                        }
                    },
                    xe = function(e, t, n) {
                        return n ? {
                            color: l.Button.Colors.BRAND,
                            text: k.Z.Messages.SCHEDULE_EVENT
                        } : t === M.j8.PUBLIC && (null == e ? void 0 : e.privacy_level) !== M.j8.PUBLIC ? {
                            color: l.Button.Colors.BRAND,
                            text: k.Z.Messages.CONTINUE
                        } : null == e ? {
                            color: l.Button.Colors.GREEN,
                            text: k.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
                        } : {
                            color: l.Button.Colors.BRAND,
                            text: k.Z.Messages.SAVE_CHANGES
                        }
                    }(x, le, D),
                    Te = xe.color,
                    Ce = xe.text,
                    Ie = o.useRef(null);
                o.useEffect((function() {
                    var e;
                    P && (null === (e = Ie.current) || void 0 === e || e.focus())
                }), [P]);
                var we = B && null != R.startDate && R.startDate >= Y()();
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(l.ModalContent, {
                        className: he().modalContent,
                        children: [h, (0, r.jsx)("div", {
                            className: he().blockedUsersContainer,
                            children: null == x && ae > 0 && (0, r.jsx)(ue.mv, {
                                channelId: f.id
                            })
                        }), (0, r.jsxs)("form", {
                            onSubmit: Pe,
                            className: he().form,
                            children: [(0, r.jsxs)(l.FormItem, {
                                title: S ? k.Z.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL : k.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_LABEL,
                                className: he().topicFormItem,
                                required: !0,
                                children: [(0, r.jsx)(l.TextInput, {
                                    className: he().textInput,
                                    onChange: function(e) {
                                        return I(e)
                                    },
                                    placeholder: k.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_PLACEHOLDER,
                                    maxLength: de.xA,
                                    value: C,
                                    autoComplete: "off",
                                    inputRef: Ie
                                }), be && (0, r.jsx)(l.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-warning",
                                    className: he().warning,
                                    children: k.Z.Messages.START_STAGE_PUBLIC_SHORT_TOPIC_WARNING
                                }), null != b ? (0, r.jsx)(l.Text, {
                                    color: "text-danger",
                                    variant: "text-xs/normal",
                                    className: he().warning,
                                    children: b.getAnyErrorMessage()
                                }) : null]
                            }), Ee && _e ? (0, r.jsx)(ve, {
                                stageChannelsInGuild: Se,
                                channel: f,
                                onSelectChannel: m
                            }) : null, D && (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(te.Z, {
                                    className: he().formItem,
                                    onScheduleChange: U,
                                    schedule: R,
                                    timeSelected: B,
                                    onTimeChange: V
                                }), null != R.startDate && R.startDate < Y()() ? (0, r.jsx)(l.Text, {
                                    color: "text-danger",
                                    variant: "text-xs/normal",
                                    className: he().warning,
                                    children: k.Z.Messages.GUILD_EVENT_PAST_START_DATE
                                }) : null]
                            }), S && (0, r.jsx)(l.FormItem, {
                                title: k.Z.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
                                className: he().formItem,
                                children: (0, r.jsx)(l.TextArea, {
                                    placeholder: k.Z.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
                                    value: N,
                                    onChange: function(e) {
                                        return A(e)
                                    },
                                    maxLength: M.wm
                                })
                            }), W ? (0, r.jsx)(ee, {
                                sendStartNotification: X,
                                setSendStartNotification: $,
                                showNotificationNewBadge: J
                            }) : null, Ee && !_e ? (0, r.jsx)(l.Text, {
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                className: he().channelSelection,
                                children: k.Z.Messages.START_STAGE_MODAL_SET_TOPIC_HELP_TEXT.format({
                                    stageName: je,
                                    stageHook: function(e, t) {
                                        return (0, r.jsx)("span", {
                                            className: he().channelName,
                                            children: f.name
                                        }, t)
                                    }
                                })
                            }) : null]
                        })]
                    }), (0, r.jsxs)(l.ModalFooter, {
                        children: [(0, r.jsx)(l.Button, {
                            color: Te,
                            onClick: Pe,
                            disabled: "" === C || null == le || S && !we,
                            submitting: y,
                            children: Ce
                        }), (0, r.jsx)(l.Button, {
                            color: l.Button.Colors.PRIMARY,
                            className: he().cancelButton,
                            onClick: v,
                            children: k.Z.Messages.CANCEL
                        })]
                    })]
                })
            }
            var je = n(327499),
                Se = n(116404),
                Ee = n(347365),
                _e = n(115617),
                Pe = n(771575);

            function xe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Te(e, t, n, r, o, i, l) {
                try {
                    var a = e[i](l),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function Ce(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function l(e) {
                            Te(i, r, o, l, a, "next", e)
                        }

                        function a(e) {
                            Te(i, r, o, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function Ie(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            l = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return xe(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return xe(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var we = function(e, t) {
                var n, r, o, i, l = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = t.call(e, l)
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
                        }([i, a])
                    }
                }
            };
            var Ne = n(441143),
                Ae = n.n(Ne);

            function De(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Le(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            l = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return De(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return De(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Re = n(107636),
                Ze = n.n(Re);

            function Me(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ke(e, t) {
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

            function Ue(e, t) {
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

            function Ge(e) {
                var t = e.guild,
                    n = e.channel,
                    o = e.stageInstance,
                    i = e.headerId,
                    a = e.onClose,
                    c = e.loading,
                    u = e.error,
                    f = e.onSave,
                    p = e.defaultOptions,
                    h = e.isSlideReady;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: Ze().content,
                        children: [(0, r.jsx)(d.Z, {
                            children: (0, r.jsx)("div", {
                                className: Ze().stageIconBackground,
                                children: (0, r.jsx)(s.Z, {
                                    width: 32,
                                    height: 32,
                                    className: Ze().stageIcon
                                })
                            })
                        }), (0, r.jsx)(l.Heading, {
                            id: i,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: Ze().headerTitle,
                            children: null == o ? k.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TITLE : k.Z.Messages.EDIT_STAGE_CHANNEL_TITLE
                        }), (0, r.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: Ze().headerSubtitle,
                            children: null == o ? k.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_SUBTITLE : k.Z.Messages.EDIT_STAGE_SUBTITLE
                        })]
                    }), (0, r.jsx)(me, {
                        guild: t,
                        channel: n,
                        onSave: f,
                        error: u,
                        loading: c,
                        onClose: a,
                        defaultOptions: p,
                        isSlideReady: h
                    })]
                })
            }

            function Be(e) {
                var t = e.channel,
                    n = e.onClose,
                    s = e.transitionState,
                    d = Ue(e, ["channel", "onClose", "transitionState"]),
                    f = (0, c.Dt)(),
                    p = (0, i.e7)([a.Z], (function() {
                        return a.Z.getGuild(t.guild_id)
                    })),
                    h = o.useMemo((function() {
                        return u.Z.getStageInstanceByChannel(t.id)
                    }), [t.id]),
                    b = function(e, t) {
                        var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                            i = Ie(o.useState(!1), 2),
                            l = i[0],
                            a = i[1],
                            c = Ie(o.useState(null), 2),
                            s = c[0],
                            d = c[1],
                            f = o.useMemo((function() {
                                return u.Z.getStageInstanceByChannel(null == e ? void 0 : e.id)
                            }), [null == e ? void 0 : e.id]),
                            p = ce(e),
                            h = (n = Ce((function(n) {
                                var o, i, l, c, s, u;
                                return we(this, (function(h) {
                                    switch (h.label) {
                                        case 0:
                                            o = n.topic, i = n.privacyLevel, l = n.sendStartNotification;
                                            if (null == e || "" === o || null == i) return [2];
                                            a(!0);
                                            d(null);
                                            if (null != r) {
                                                je.Z.selectGuild(r);
                                                Se.default.selectVoiceChannel(e.id)
                                            }
                                            h.label = 1;
                                        case 1:
                                            h.trys.push([1, 6, , 7]);
                                            return null == f ? [3, 3] : [4, Pe.Ef(e, o, i)];
                                        case 2:
                                            c = h.sent();
                                            return [3, 5];
                                        case 3:
                                            return [4, Pe.HO(e, o, i, null != l && l)];
                                        case 4:
                                            c = h.sent();
                                            p && _e.Kw(fe.v.LIVE_STAGE_NOTIFICATION_BADGE);
                                            h.label = 5;
                                        case 5:
                                            t(c);
                                            return [3, 7];
                                        case 6:
                                            s = h.sent();
                                            u = new Ee.Hx(s);
                                            d(u);
                                            a(!1);
                                            return [3, 7];
                                        case 7:
                                            return [2]
                                    }
                                }))
                            })), function(e) {
                                return n.apply(this, arguments)
                            });
                        return {
                            loading: l,
                            error: s,
                            onSave: h
                        }
                    }(t, n),
                    y = b.loading,
                    O = b.error,
                    g = b.onSave,
                    v = function(e) {
                        var t = e.stageInstance,
                            n = e.defaultStep,
                            r = e.error,
                            i = e.onSave,
                            l = Le(o.useState(n), 2),
                            a = l[0],
                            c = l[1],
                            s = Le(o.useState(), 2),
                            u = s[0],
                            d = s[1],
                            f = Le(o.useState(null), 2),
                            p = f[0],
                            h = f[1];
                        o.useEffect((function() {
                            null != r && c(de.lv.STAGE_CHANNEL_SETTINGS)
                        }), [r]);
                        return {
                            modalStep: a,
                            setModalStep: c,
                            readySlide: p,
                            handleSlideReady: function(e) {
                                return h(e)
                            },
                            savedOptions: u,
                            handleSettingsSave: function(e) {
                                d(e);
                                e.privacyLevel !== M.j8.PUBLIC || (null == t ? void 0 : t.privacy_level) === M.j8.PUBLIC ? i(e) : c(de.lv.PUBLIC_STAGE_PREVIEW)
                            },
                            handleDelayedSave: function() {
                                Ae()(null != u, "Must have some saved options.");
                                i(u)
                            }
                        }
                    }({
                        stageInstance: h,
                        defaultStep: de.lv.STAGE_CHANNEL_SETTINGS,
                        error: O,
                        onSave: g
                    }),
                    m = v.modalStep,
                    j = v.setModalStep,
                    S = v.readySlide,
                    E = v.handleSlideReady,
                    _ = v.savedOptions,
                    P = v.handleSettingsSave,
                    x = v.handleDelayedSave;
                o.useEffect((function() {
                    null == p && n()
                }), [p, n]);
                return null == p ? null : (0, r.jsx)(l.ModalRoot, ke(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            Me(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    transitionState: s,
                    "aria-labelledby": f
                }, d), {
                    size: l.ModalSize.SMALL,
                    children: (0, r.jsxs)(l.Slides, {
                        activeSlide: m,
                        width: 440,
                        onSlideReady: E,
                        children: [(0, r.jsx)(l.Slide, {
                            id: de.lv.STAGE_CHANNEL_SETTINGS,
                            children: (0, r.jsx)("div", {
                                className: Ze().slideContainer,
                                children: (0, r.jsx)(Ge, {
                                    guild: p,
                                    channel: t,
                                    stageInstance: h,
                                    headerId: f,
                                    onClose: n,
                                    loading: y,
                                    error: O,
                                    onSave: P,
                                    defaultOptions: _,
                                    isSlideReady: S === de.lv.STAGE_CHANNEL_SETTINGS
                                })
                            })
                        }), (0, r.jsx)(l.Slide, {
                            id: de.lv.PUBLIC_STAGE_PREVIEW,
                            children: (0, r.jsx)("div", {
                                className: Ze().slideContainer,
                                children: (0, r.jsx)(F, {
                                    headerId: f,
                                    guild: p,
                                    channel: t,
                                    stageData: _,
                                    loading: y,
                                    onNext: x,
                                    onCancel: n,
                                    onBack: function() {
                                        return j(de.lv.STAGE_CHANNEL_SETTINGS)
                                    }
                                })
                            })
                        })]
                    })
                }))
            }
        },
        223219: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => k
            });
            var r = n(496486),
                o = n.n(r),
                i = n(202351),
                l = n(744564),
                a = n(473903),
                c = n(2590);

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function d(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return f(e)
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        d(e, t, n[t])
                    }))
                }
                return e
            }

            function h(e, t) {
                return !t || "object" !== y(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function b(e, t) {
                b = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return b(e, t)
            }
            var y = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function O(e) {
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
                    var n, r = f(e);
                    if (t) {
                        var o = f(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return h(this, n)
                }
            }
            var g = c.QZA.CLOSED,
                v = null,
                m = null,
                j = {},
                S = {},
                E = {},
                _ = null,
                P = null,
                x = !1,
                T = !1,
                C = null,
                I = null,
                w = null,
                N = [],
                A = null,
                D = null;

            function L(e) {
                var t, n, r, o, i, l, s = a.default.getCurrentUser();
                if (null == s) return R();
                m = null !== (t = e.section) && void 0 !== t ? t : m;
                A = null !== (n = e.section) && void 0 !== n ? n : m;
                null != e.subsection && null != m && (j[m] = e.subsection);
                null != e.scrollPosition && null != m && (S[m] = e.scrollPosition);
                T = !!e.openWithoutBackstack;
                g = c.QZA.OPEN;
                E = {};
                _ = d({}, c.oAB.ACCOUNT, {
                    userId: s.id,
                    username: s.username,
                    discriminator: s.discriminator,
                    email: s.email,
                    avatar: s.avatar,
                    password: "",
                    newPassword: null,
                    claimed: s.isClaimed()
                });
                P = p({}, _);
                I = null !== (r = e.onClose) && void 0 !== r ? r : null;
                w = null !== (o = e.analyticsLocation) && void 0 !== o ? o : null;
                N = null !== (i = e.analyticsLocations) && void 0 !== i ? i : [];
                D = null !== (l = e.impressionSource) && void 0 !== l ? l : null
            }

            function R() {
                g = c.QZA.CLOSED;
                x = !1;
                _ = null;
                A = null;
                P = null;
                v = null;
                m = null;
                j = {};
                S = {};
                I = null;
                w = null;
                N = [];
                D = null
            }

            function Z() {
                g = c.QZA.OPEN;
                E = {}
            }
            var M = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && b(e, t)
                }(n, e);
                var t = O(n);

                function n() {
                    s(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(a.default)
                };
                r.hasChanges = function() {
                    return null != P && null != _ && (!(!this.isOpen() && C !== c.cII.USER_SETTINGS) && !o().isEqual(P, _))
                };
                r.isOpen = function() {
                    return x
                };
                r.getPreviousSection = function() {
                    return v
                };
                r.getSection = function() {
                    return m
                };
                r.getSubsection = function() {
                    return null != m ? j[m] : null
                };
                r.getScrollPosition = function() {
                    return null != m ? S[m] : null
                };
                r.shouldOpenWithoutBackstack = function() {
                    return T
                };
                r.getProps = function() {
                    return {
                        submitting: g === c.QZA.SUBMITTING,
                        section: m,
                        subsection: null != m ? j[m] : null,
                        scrollPosition: null != m ? S[m] : null,
                        settings: P,
                        errors: E,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: T,
                        analyticsLocation: w,
                        analyticsLocations: N,
                        initialSection: A,
                        impressionSource: D
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        formState: g,
                        previousSection: v,
                        section: m,
                        subsections: j,
                        scrollPositions: S,
                        errors: E,
                        originalSettings: _,
                        settings: P,
                        open: x,
                        openWithoutBackstack: T,
                        tab: C,
                        onClose: I,
                        analyticsLocation: w,
                        analyticsLocations: N,
                        initialSection: A,
                        impressionSource: D
                    }
                };
                ! function(e, t, n) {
                    t && u(e.prototype, t);
                    n && u(e, n)
                }(n, [{
                    key: "onClose",
                    get: function() {
                        return I
                    }
                }]);
                return n
            }(i.ZP.Store);
            M.displayName = "UserSettingsModalStore";
            const k = new M(l.Z, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    x = !0;
                    L(e)
                },
                USER_SETTINGS_MODAL_INIT: L,
                USER_SETTINGS_MODAL_CLOSE: R,
                LOGOUT: R,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    g = c.QZA.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    if (g !== c.QZA.SUBMITTING) return !1;
                    g = c.QZA.OPEN;
                    m = c.oAB.ACCOUNT;
                    var t;
                    E = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    v = m;
                    m = e.section;
                    w = null;
                    var t;
                    N = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [];
                    null != e.subsection && (j[m] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    var t = e.forSection;
                    null != t ? delete j[t] : null != m && delete j[m]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    var t = e.forSection;
                    null != t ? delete S[t] : null != m && delete S[m]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    var t = e.settings;
                    null == P && (P = {});
                    var n = P[c.oAB.ACCOUNT];
                    P[c.oAB.ACCOUNT] = p({}, n, t)
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: Z,
                USER_SETTINGS_MODAL_RESET: function() {
                    var e = a.default.getCurrentUser();
                    Z();
                    if (null != e) {
                        _ = d({}, c.oAB.ACCOUNT, {
                            userId: e.id,
                            username: e.username,
                            discriminator: e.discriminator,
                            email: e.email,
                            avatar: e.avatar,
                            password: "",
                            newPassword: null,
                            claimed: e.isClaimed()
                        });
                        P = p({}, _)
                    }
                },
                DRAWER_SELECT_TAB: function(e) {
                    C = e.tab;
                    return null == m && C === c.cII.USER_SETTINGS && L({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        443812: (e, t, n) => {
            "use strict";
            n.d(t, {
                hQ: () => l,
                Dt: () => a,
                FG: () => c
            });
            var r = n(873955),
                o = n.n(r),
                i = n(989824),
                l = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return o()(e)
                },
                a = function() {
                    return (0, i.Z)((function() {
                        return l()
                    }))
                },
                c = function(e) {
                    return (0, e.children)(a())
                }
        },
        127661: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
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

            function a(e, t) {
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

            function c(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    c = e.height,
                    s = void 0 === c ? 24 : c,
                    u = e.color,
                    d = void 0 === u ? "currentColor" : u,
                    f = e.foreground,
                    p = e.backgroundColor,
                    h = a(e, ["width", "height", "color", "foreground", "backgroundColor"]);
                return (0, r.jsxs)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(h)), {
                    width: n,
                    height: s,
                    viewBox: "0 0 14 14",
                    children: [null != p ? (0, r.jsx)("circle", {
                        r: 5,
                        cx: 7,
                        cy: 7,
                        fill: p
                    }) : null, (0, r.jsx)("path", {
                        fill: d,
                        className: f,
                        d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                    })]
                }))
            }
        },
        794547: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
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

            function a(e, t) {
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

            function c(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    c = e.height,
                    s = void 0 === c ? 24 : c,
                    u = e.color,
                    d = void 0 === u ? "currentColor" : u,
                    f = e.className,
                    p = e.foreground,
                    h = a(e, ["width", "height", "color", "className", "foreground"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(h)), {
                    className: f,
                    width: n,
                    height: s,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: p,
                        fill: d,
                        d: "M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"
                    })
                }))
            }
        },
        23727: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
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

            function a(e, t) {
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

            function c(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    c = e.height,
                    s = void 0 === c ? 24 : c,
                    u = e.color,
                    d = void 0 === u ? "currentColor" : u,
                    f = e.foreground,
                    p = a(e, ["width", "height", "color", "foreground"]);
                return (0,
                    r.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(p)), {
                    width: n,
                    height: s,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            d: "M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z",
                            className: f,
                            fill: d
                        })
                    })
                }))
            }
        },
        961241: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
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

            function a(e, t) {
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

            function c(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    c = e.height,
                    s = void 0 === c ? 24 : c,
                    u = e.color,
                    d = void 0 === u ? "currentColor" : u,
                    f = e.foreground,
                    p = a(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(p)), {
                    width: n,
                    height: s,
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z",
                        className: f,
                        fill: d
                    }), (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z",
                        className: f,
                        fill: d
                    })]
                }))
            }
        },
        472034: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
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

            function a(e, t) {
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

            function c(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    c = e.height,
                    s = void 0 === c ? 16 : c,
                    u = e.color,
                    d = void 0 === u ? "currentColor" : u,
                    f = e.foreground,
                    p = a(e, ["width", "height", "color", "foreground"]);
                return (0,
                    r.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(p)), {
                    width: n,
                    height: s,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                        className: f,
                        fill: d
                    })
                }))
            }
        },
        491275: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
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

            function a(e, t) {
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

            function c(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    c = e.height,
                    s = void 0 === c ? 16 : c,
                    u = e.color,
                    d = void 0 === u ? "currentColor" : u,
                    f = e.foreground,
                    p = a(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(p)), {
                    width: n,
                    height: s,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, r.jsx)("path", {
                            fill: d,
                            className: f,
                            fillRule: "nonzero",
                            d: "M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z",
                            transform: "translate(2 4)"
                        }), (0,
                            r.jsx)("path", {
                            d: "M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"
                        })]
                    })
                }))
            }
        },
        553480: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var r = n(785893);
            n(667294);

            function o(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    l = e.color,
                    a = void 0 === l ? "currentColor" : l,
                    c = e.className,
                    s = e.foreground;
                return (0, r.jsx)("svg", {
                    className: c,
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: s,
                        fill: a,
                        d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                    })
                })
            }
        },
        516909: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
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

            function a(e, t) {
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

            function c(e) {
                var t = e.width,
                    n = void 0 === t ? 32 : t,
                    c = e.height,
                    s = void 0 === c ? 32 : c,
                    u = e.color,
                    d = void 0 === u ? "currentColor" : u,
                    f = a(e, ["width", "height", "color"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(f)), {
                    width: n,
                    height: s,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                        fill: d
                    })
                }))
            }
        },
        422557: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
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

            function a(e, t) {
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

            function c(e) {
                var t = e.width,
                    n = void 0 === t ? 32 : t,
                    c = e.height,
                    s = void 0 === c ? 32 : c,
                    u = e.color,
                    d = void 0 === u ? "currentColor" : u,
                    f = e.foreground,
                    p = a(e, ["width", "height", "color", "foreground"]);
                return (0,
                    r.jsxs)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(p)), {
                    width: n,
                    height: s,
                    viewBox: "0 0 32 32",
                    children: [(0, r.jsx)("rect", {
                        width: "32",
                        height: "32",
                        rx: "16",
                        fill: d
                    }), (0, r.jsx)("path", {
                        d: "M23 9.99995C19.56 9.99995 16.826 6.43495 16.799 6.39795C16.421 5.89795 15.579 5.89795 15.201 6.39795C15.174 6.43495 12.44 9.99995 9 9.99995C8.447 9.99995 8 10.4479 8 10.9999V17.9999C8 21.8069 14.764 25.4779 15.534 25.8839C15.68 25.9609 15.84 25.9979 16 25.9979C16.16 25.9979 16.32 25.9599 16.466 25.8839C17.236 25.4779 24 21.8069 24 17.9999V10.9999C24 10.4479 23.553 9.99995 23 9.99995ZM19 19.9999L16 17.9999L13 19.9999L14 16.9999L12 14.9999H15L16 11.9999L17 14.9999H20L18 16.9999L19 19.9999Z",
                        className: f
                    })]
                }))
            }
        },
        709992: (e, t, n) => {
            "use strict";
            n.d(t, {
                P1: () => g,
                sq: () => m,
                Ub: () => j,
                Lq: () => E,
                PP: () => P,
                Zt: () => x,
                Az: () => T,
                IZ: () => I,
                tI: () => w,
                j$: () => N,
                c6: () => A,
                mT: () => D,
                Eg: () => L
            });
            var r = n(817673),
                o = n(281110),
                i = n(327499),
                l = n(944522),
                a = n(784426),
                c = n(934870),
                s = n(27851),
                u = n(567403),
                d = n(652591),
                f = n(2590);

            function p(e, t, n, r, o, i, l) {
                try {
                    var a = e[i](l),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function h(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function l(e) {
                            p(i, r, o, l, a, "next", e)
                        }

                        function a(e) {
                            p(i, r, o, l, a, "throw", e)
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

            function y(e) {
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
            var g, v = function(e, t) {
                var n, r, o, i, l = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = t.call(e, l)
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
                        }([i, a])
                    }
                }
            };
            ! function(e) {
                e.SEARCH = "Search";
                e.RECOMMENDED = "Recommended";
                e.POPULAR = "Popular";
                e.RECOMMENDED_E3 = "Recommended - E3";
                e.HEADER = "Header"
            }(g || (g = {}));
            var m = ">200";

            function j(e, t) {
                return S.apply(this, arguments)
            }

            function S() {
                S = h((function(e, t) {
                    var n, r, o, s, d, f, p, h, b, g, m = arguments;
                    return v(this, (function(v) {
                        switch (v.label) {
                            case 0:
                                n = m.length > 2 && void 0 !== m[2] ? m[2] : {};
                                r = n.channelId, o = n.onSuccess, s = n.joinSource, d = n.loadId,
                                    f = n.setsHistorySnapshot, p = void 0 === f || f;
                                h = (0, a.s1)();
                                p && l.Z.setHistorySnapshot(y({}, h));
                                b = u.Z.getGuild(e);
                                g = {
                                    state: {
                                        analyticsSource: t
                                    }
                                };
                                if (null == b || null == b.joinedAt) return [3, 1];
                                (0, c.X)(e, g);
                                return [3, 4];
                            case 1:
                                return [4, i.Z.joinGuild(e, {
                                    lurker: !0,
                                    source: s,
                                    loadId: d,
                                    lurkLocation: null == t ? void 0 : t.page
                                })];
                            case 2:
                                v.sent();
                                return [4, i.Z.transitionToGuildSync(e, O(y({}, g), {
                                    welcomeModalChannelId: r,
                                    search: h.location.search
                                }), r)];
                            case 3:
                                v.sent();
                                v.label = 4;
                            case 4:
                                null == o || o();
                                return [2]
                        }
                    }))
                }));
                return S.apply(this, arguments)
            }

            function E(e) {
                return _.apply(this, arguments)
            }

            function _() {
                return (_ = h((function(e) {
                    var t, n, r, o, i, l, a;
                    return v(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                t = e.loadId, n = e.guildId, r = e.index, o = e.analyticsContext, i = e.categoryId;
                                "string" == typeof o && o in g && (l = o);
                                a = {
                                    page: f.ZY5.GUILD_DISCOVERY,
                                    object: f.qAy.CARD,
                                    section: l
                                };
                                return [4, j(n, a, {
                                    loadId: t
                                })];
                            case 1:
                                c.sent();
                                C({
                                    loadId: t,
                                    guildId: n,
                                    index: r,
                                    analyticsContext: o,
                                    categoryId: i
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function P(e) {
                return {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    splash: e.splash,
                    banner: e.banner,
                    icon: e.icon,
                    features: new Set(e.features),
                    presenceCount: e.approximate_presence_count,
                    memberCount: e.approximate_member_count,
                    premiumSubscriptionCount: e.premium_subscription_count,
                    preferredLocale: e.preferred_locale,
                    discoverySplash: e.discovery_splash,
                    emojis: e.emojis,
                    emojiCount: e.emoji_count,
                    stickers: e.stickers,
                    stickerCount: e.sticker_count,
                    keywords: e.keywords
                }
            }

            function x(e) {
                var t = e.loadId,
                    n = e.gamesYouPlayGuilds,
                    r = e.allGuilds,
                    o = e.categoryId,
                    i = e.recommendationsSource,
                    l = void 0 === i ? null : i,
                    a = n.length,
                    c = r.length;
                d.default.track(f.rMx.GUILD_DISCOVERY_VIEWED, {
                    load_id: t,
                    num_guilds: a + c,
                    num_guilds_recommended: a,
                    num_guilds_popular: c,
                    recommended_guild_ids: n.map((function(e) {
                        return e.id
                    })),
                    category_id: o,
                    recommendations_source: l
                })
            }

            function T(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                d.default.track(f.rMx.GUILD_DISCOVERY_EXITED, {
                    load_id: e,
                    guild_ids_viewed: t,
                    recommendations_source: n
                })
            }

            function C(e) {
                var t = e.loadId,
                    n = e.guildId,
                    r = e.index,
                    o = e.analyticsContext,
                    i = e.categoryId,
                    l = {
                        page: f.ZY5.GUILD_DISCOVERY,
                        section: o
                    };
                "string" != typeof o && null != o.location && (l = o.location);
                d.default.track(f.rMx.GUILD_DISCOVERY_GUILD_SELECTED, {
                    location: l,
                    guild_id: n,
                    load_id: t,
                    card_index: r,
                    location_object: f.qAy.CARD,
                    category_id: i
                })
            }

            function I(e) {
                d.default.track(f.rMx.SEARCH_CLOSED, {
                    load_id: e
                })
            }

            function w(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                d.default.track(f.rMx.SEARCH_STARTED, {
                    search_type: f.aib.GUILD_DISCOVERY,
                    load_id: e,
                    location: n.location,
                    category_id: t
                })
            }

            function N(e, t, n, r) {
                d.default.track(f.rMx.SEARCH_STARTED, {
                    search_type: f.aib.GUILD_DISCOVERY_TAG,
                    load_id: e,
                    location: {
                        page: f.ZY5.GUILD_DISCOVERY,
                        section: n
                    },
                    category_id: t,
                    guild_id: r
                })
            }

            function A(e) {
                var t = e.loadId,
                    n = e.searchId,
                    r = e.query,
                    o = e.guildResults,
                    i = e.analyticsContext,
                    l = e.categoryId,
                    a = e.isTagSearch;
                d.default.track(f.rMx.SEARCH_RESULT_VIEWED, {
                    search_type: a ? f.aib.GUILD_DISCOVERY_TAG : f.aib.GUILD_DISCOVERY,
                    load_id: t,
                    search_id: n,
                    total_results: void 0 !== o ? o.length : null,
                    guild_ids: void 0 !== o ? o.map((function(e) {
                        return e.id
                    })) : null,
                    query: r,
                    location: i.location,
                    category_id: l
                })
            }

            function D(e) {
                var t = l.Z.getLoadId(e);
                d.default.track(f.rMx.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
                    guild_id: e,
                    load_id: t,
                    guild_size: s.Z.getMemberCount(e)
                })
            }

            function L(e) {
                return R.apply(this, arguments)
            }

            function R() {
                return (R = h((function(e) {
                    var t, n, i, l;
                    return v(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                a.trys.push([0, 2, , 3]);
                                return [4, o.ZP.get({
                                    url: f.ANM.GUILD_DISCOVERY,
                                    query: r.stringify({
                                        guild_ids: e
                                    }),
                                    oldFormErrors: !0
                                })];
                            case 1:
                                i = a.sent();
                                return null == (l = null === (t = i.body) || void 0 === t || null === (n = t.guilds) || void 0 === n ? void 0 : n[0]) ? [2, l] : [2, P(l)];
                            case 2:
                                a.sent();
                                return [2, null];
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        488110: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => y
            });
            var r = n(473903),
                o = n(496486),
                i = function(e) {
                    return "function" == typeof e ? e() : e
                };
            n.n(o)().curry((function(e, t, n) {
                return i(t) ? e(n) : n({})
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

            function a(e) {
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

            function s(e, t) {
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
            var u, d, f = function() {
                    throw new Error("updateModal has not been implemented.")
                },
                p = n(680918);
            u = p.showModal;
            f = p.updateModalProps;
            d = n(264817).Mr;

            function h(e) {
                var t = e.promiseFn,
                    n = e.resolve,
                    r = e.reject,
                    o = e.modalProps,
                    i = void 0 === o ? {} : o,
                    l = e.hooks,
                    s = (void 0 === l ? {} : l).onEarlyClose,
                    p = function() {
                        null == s || s()
                    },
                    h = function(e) {
                        d(g);
                        n(e)
                    },
                    y = function(e) {
                        d(g);
                        r(e)
                    },
                    O = function(e) {
                        var t = e.res;
                        f(g, v, p, c(a({}, i), {
                            error: t.body.message
                        }))
                    };
                if (null != u) var g = u(v, p, i);
                else null == s || s();

                function v(e) {
                    f(g, v, p, c(a({}, i), {
                        isLoading: !0
                    }));
                    return b({
                        promiseFn: t,
                        resolve: h,
                        reject: y,
                        code: e,
                        mfaCodeHandler: O,
                        isModalOpen: !0
                    })
                }
            }

            function b(e) {
                var t = e.promiseFn,
                    n = e.resolve,
                    r = e.reject,
                    o = e.code,
                    i = e.mfaCodeHandler,
                    l = void 0 === i ? h : i,
                    c = e.isModalOpen,
                    u = void 0 !== c && c,
                    d = s(e, ["promiseFn", "resolve", "reject", "code", "mfaCodeHandler", "isModalOpen"]);
                return t(null != o ? {
                    code: o
                } : {}).then(n, (function(e) {
                    if (function(e, t) {
                            return e.body && 60008 === e.body.code || t && 429 === e.status
                        }(e, u)) return l(a({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e
                    }, d));
                    r(e)
                }))
            }

            function y(e, t) {
                var n, o, l = null != t ? t : {},
                    c = l.checkEnabled,
                    u = void 0 === c ? null !== (o = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== o && o : c,
                    d = s(l, ["checkEnabled"]);
                return new Promise((function(t, n) {
                    (i(u) ? h : b)(a({
                        promiseFn: e,
                        resolve: t,
                        reject: n
                    }, d))
                }))
            }
        },
        664806: (e, t, n) => {
            "use strict";
            n.d(t, {
                Q: () => i
            });

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function o(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            l = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return r(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function i(e, t) {
                return o(e, 2)[1] === o(t, 2)[1]
            }
        },
        990554: (e, t, n) => {
            "use strict";
            n.d(t, {
                l: () => o
            });
            var r = n(421281);

            function o(e, t) {
                for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) o[i - 2] = arguments[i];
                var l = o.reduce((function(e, t) {
                        return e + (0, r.De)(t)
                    }), ""),
                    a = "".concat(t).concat(l),
                    c = e[a];
                if (null != c) return c;
                0
            }
        },
        680918: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                showModal: () => c,
                updateModalProps: () => s
            });
            var r = n(785893),
                o = (n(667294), n(264817)),
                i = n(919244);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var a = function(e, t, n) {
                return function(o) {
                    return (0, r.jsx)(i.Z, function(e) {
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

            function c(e, t, n) {
                return (0, o.h7)(a(e, t, n), {
                    onCloseCallback: t
                })
            }

            function s(e, t, n, r) {
                return (0, o.o)(e, a(t, n, r))
            }
        },
        989824: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n(667294),
                o = {};

            function i(e) {
                var t = (0, r.useRef)(o);
                t.current === o && (t.current = e());
                return t.current
            }
        }
    }
]);
//# sourceMappingURL=d1d3dc18c1bc0bd04dd9.js.map