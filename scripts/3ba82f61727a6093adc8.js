(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [91478], {
        483683: (e, t, n) => {
            e.exports = n.p + "72db7a1fbe5d3c861fe63c26f634b5d2.svg"
        },
        63685: (e, t, n) => {
            e.exports = n.p + "a4e25b25c89b862150e6eeb520e67dd5.svg"
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
                Z: () => h
            });
            var r = n(281110),
                o = n(630631),
                i = n(744564),
                l = n(223219),
                c = n(652591),
                u = n(775173),
                s = n(488110),
                a = n(120415),
                f = n(735885),
                p = n(2590),
                d = n(473708);

            function O(e, t, n) {
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
                        O(e, t, n[t])
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
            const h = {
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
                    (0, f.jN)(p.S9g.USER_SETTINGS)
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
                        f = e.email,
                        O = e.emailToken,
                        h = e.password,
                        S = e.avatar,
                        v = e.newPassword,
                        _ = e.discriminator,
                        E = t.close;
                    return (0, s.Z)((function(e) {
                        var t = y(b({
                                username: l,
                                email: f,
                                email_token: O,
                                password: h,
                                avatar: S,
                                new_password: v
                            }, e), {
                                discriminator: null != _ && "" !== _ ? _ : void 0
                            }),
                            n = o.Z.get(p.JkL),
                            i = (0, a.xJ)();
                        if (null != i && null != n) {
                            t.push_provider = i;
                            t.push_token = n
                        }
                        var c = o.Z.get(p.scU);
                        if (null != p.mvA && null != c) {
                            t.push_voip_provider = p.mvA;
                            t.push_voip_token = c
                        }
                        return r.ZP.patch({
                            url: p.ANM.ME,
                            oldFormErrors: !0,
                            body: t
                        })
                    }), {
                        checkEnabled: !1,
                        modalProps: {
                            title: d.Z.Messages.TWO_FA_CHANGE_ACCOUNT
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
                        c.default.track(p.rMx.USER_AVATAR_UPDATED, {
                            animated: (0, u.xR)(t.avatar)
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
                        null != h && null != v && i.Z.dispatch({
                            type: "PASSWORD_UPDATED",
                            userId: t.id
                        });
                        E ? n.close() : n.submitComplete();
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
                Z: () => S
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                l = n.n(i),
                c = n(882723),
                u = n(473708),
                s = n(775823),
                a = n.n(s);

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function d(e, t) {
                return !t || "object" !== b(t) && "function" != typeof t ? function(e) {
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
                    var n, r = p(e);
                    if (t) {
                        var o = p(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }
            var h = function(e) {
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
                }(n, e);
                var t = y(n);

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
                        i = t.actionText,
                        s = t.children,
                        f = t.error,
                        p = t.isLoading,
                        d = t.maxLength,
                        O = t.transitionState,
                        b = t.helpMessage,
                        y = t.retryPrompt,
                        h = t.retrySuccessMessage,
                        S = this.state,
                        v = S.code,
                        _ = S.errorMessage,
                        E = S.retrySuccess,
                        m = o.Children.count(s) > 0 ? (0, r.jsx)(c.Card, {
                            type: c.Card.Types.WARNING,
                            className: a().card,
                            children: (0, r.jsx)(c.Text, {
                                variant: "text-md/normal",
                                children: s
                            })
                        }) : null,
                        g = null != y ? (0, r.jsxs)(c.Text, {
                            className: l()(a().submitText, a().spacing),
                            variant: "text-sm/normal",
                            children: [(0, r.jsx)("br", {}), (0, r.jsx)(c.Clickable, {
                                className: l()(a().spacing, a().link),
                                onClick: this.handleRetry,
                                children: (0, r.jsx)(c.Anchor, {
                                    children: y
                                })
                            })]
                        }) : null,
                        T = E ? (0, r.jsx)(c.Card, {
                            type: c.Card.Types.SUCCESS,
                            className: a().card,
                            children: (0, r.jsx)(c.Text, {
                                variant: "text-md/normal",
                                children: h
                            })
                        }) : null;
                    return (0, r.jsx)(c.ModalRoot, {
                        transitionState: O,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(c.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(c.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: n
                                })
                            }), (0, r.jsxs)(c.ModalContent, {
                                children: [null != b ? (0, r.jsx)(c.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: a().spacing,
                                    children: b
                                }) : null, m, T, (0, r.jsxs)(c.FormItem, {
                                    title: this.getLabelText(),
                                    className: a().spacing,
                                    children: [(0, r.jsx)(c.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != d ? d : 10,
                                        value: v,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(c.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: a().error,
                                        children: null != f ? f : _
                                    }) : null, g]
                                })]
                            }), (0, r.jsxs)(c.ModalFooter, {
                                children: [(0, r.jsx)(c.Button, {
                                    type: "submit",
                                    disabled: p || 0 === v.length,
                                    children: null != i ? i : u.Z.Messages.CONFIRM
                                }), (0, r.jsx)(c.Button, {
                                    onClick: this.handleCancel,
                                    disabled: p,
                                    look: c.Button.Looks.LINK,
                                    color: c.Button.Colors.PRIMARY,
                                    children: u.Z.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                };
                return n
            }(o.PureComponent);
            h.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            const S = h
        },
        832642: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                l = n(473708),
                c = n(347234),
                u = n.n(c),
                s = n(483683),
                a = n.n(s),
                f = n(63685),
                p = n.n(f);

            function d(e) {
                var t = e.className,
                    n = e.children;
                return (0, r.jsxs)("div", {
                    className: i()(u().container, t),
                    children: [(0, r.jsx)("img", {
                        alt: l.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: p(),
                        className: i()(u().sparkleIcon, u().sparkleBottom)
                    }), n, (0, r.jsx)("img", {
                        alt: l.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: a(),
                        className: i()(u().sparkleIcon, u().sparkleTop)
                    })]
                })
            }
        },
        223219: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => Z
            });
            var r = n(496486),
                o = n.n(r),
                i = n(202351),
                l = n(744564),
                c = n(473903),
                u = n(2590);

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
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
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function d(e) {
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

            function O(e, t) {
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
                    var n, r = p(e);
                    if (t) {
                        var o = p(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return O(this, n)
                }
            }
            var S = u.QZA.CLOSED,
                v = null,
                _ = null,
                E = {},
                m = {},
                g = {},
                T = null,
                C = null,
                P = !1,
                j = !1,
                A = null,
                I = null,
                N = null,
                R = [],
                w = null,
                L = null;

            function M(e) {
                var t, n, r, o, i, l, s = c.default.getCurrentUser();
                if (null == s) return U();
                _ = null !== (t = e.section) && void 0 !== t ? t : _;
                w = null !== (n = e.section) && void 0 !== n ? n : _;
                null != e.subsection && null != _ && (E[_] = e.subsection);
                null != e.scrollPosition && null != _ && (m[_] = e.scrollPosition);
                j = !!e.openWithoutBackstack;
                S = u.QZA.OPEN;
                g = {};
                T = f({}, u.oAB.ACCOUNT, {
                    userId: s.id,
                    username: s.username,
                    discriminator: s.discriminator,
                    email: s.email,
                    avatar: s.avatar,
                    password: "",
                    newPassword: null,
                    claimed: s.isClaimed()
                });
                C = d({}, T);
                I = null !== (r = e.onClose) && void 0 !== r ? r : null;
                N = null !== (o = e.analyticsLocation) && void 0 !== o ? o : null;
                R = null !== (i = e.analyticsLocations) && void 0 !== i ? i : [];
                L = null !== (l = e.impressionSource) && void 0 !== l ? l : null
            }

            function U() {
                S = u.QZA.CLOSED;
                P = !1;
                T = null;
                w = null;
                C = null;
                v = null;
                _ = null;
                E = {};
                m = {};
                I = null;
                N = null;
                R = [];
                L = null
            }

            function x() {
                S = u.QZA.OPEN;
                g = {}
            }
            var D = function(e) {
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
                var t = h(n);

                function n() {
                    s(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(c.default)
                };
                r.hasChanges = function() {
                    return null != C && null != T && (!(!this.isOpen() && A !== u.cII.USER_SETTINGS) && !o().isEqual(C, T))
                };
                r.isOpen = function() {
                    return P
                };
                r.getPreviousSection = function() {
                    return v
                };
                r.getSection = function() {
                    return _
                };
                r.getSubsection = function() {
                    return null != _ ? E[_] : null
                };
                r.getScrollPosition = function() {
                    return null != _ ? m[_] : null
                };
                r.shouldOpenWithoutBackstack = function() {
                    return j
                };
                r.getProps = function() {
                    return {
                        submitting: S === u.QZA.SUBMITTING,
                        section: _,
                        subsection: null != _ ? E[_] : null,
                        scrollPosition: null != _ ? m[_] : null,
                        settings: C,
                        errors: g,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: j,
                        analyticsLocation: N,
                        analyticsLocations: R,
                        initialSection: w,
                        impressionSource: L
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        formState: S,
                        previousSection: v,
                        section: _,
                        subsections: E,
                        scrollPositions: m,
                        errors: g,
                        originalSettings: T,
                        settings: C,
                        open: P,
                        openWithoutBackstack: j,
                        tab: A,
                        onClose: I,
                        analyticsLocation: N,
                        analyticsLocations: R,
                        initialSection: w,
                        impressionSource: L
                    }
                };
                ! function(e, t, n) {
                    t && a(e.prototype, t);
                    n && a(e, n)
                }(n, [{
                    key: "onClose",
                    get: function() {
                        return I
                    }
                }]);
                return n
            }(i.ZP.Store);
            D.displayName = "UserSettingsModalStore";
            const Z = new D(l.Z, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    P = !0;
                    M(e)
                },
                USER_SETTINGS_MODAL_INIT: M,
                USER_SETTINGS_MODAL_CLOSE: U,
                LOGOUT: U,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    S = u.QZA.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    if (S !== u.QZA.SUBMITTING) return !1;
                    S = u.QZA.OPEN;
                    _ = u.oAB.ACCOUNT;
                    var t;
                    g = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    v = _;
                    _ = e.section;
                    N = null;
                    var t;
                    R = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [];
                    null != e.subsection && (E[_] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    var t = e.forSection;
                    null != t ? delete E[t] : null != _ && delete E[_]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    var t = e.forSection;
                    null != t ? delete m[t] : null != _ && delete m[_]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    var t = e.settings;
                    null == C && (C = {});
                    var n = C[u.oAB.ACCOUNT];
                    C[u.oAB.ACCOUNT] = d({}, n, t)
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: x,
                USER_SETTINGS_MODAL_RESET: function() {
                    var e = c.default.getCurrentUser();
                    x();
                    if (null != e) {
                        T = f({}, u.oAB.ACCOUNT, {
                            userId: e.id,
                            username: e.username,
                            discriminator: e.discriminator,
                            email: e.email,
                            avatar: e.avatar,
                            password: "",
                            newPassword: null,
                            claimed: e.isClaimed()
                        });
                        C = d({}, T)
                    }
                },
                DRAWER_SELECT_TAB: function(e) {
                    A = e.tab;
                    return null == _ && A === u.cII.USER_SETTINGS && M({
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
                Dt: () => c,
                FG: () => u
            });
            var r = n(873955),
                o = n.n(r),
                i = n(989824),
                l = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return o()(e)
                },
                c = function() {
                    return (0, i.Z)((function() {
                        return l()
                    }))
                },
                u = function(e) {
                    return (0, e.children)(c())
                }
        },
        897749: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
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

            function c(e, t) {
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

            function u(e) {
                var t = e.width,
                    n = void 0 === t ? 40 : t,
                    u = e.height,
                    s = void 0 === u ? 40 : u,
                    a = e.color,
                    f = void 0 === a ? "currentColor" : a,
                    p = c(e, ["width", "height", "color"]);
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
                    viewBox: "0 0 40 40",
                    fill: "none",
                    children: [(0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M37.581 26.6667L40 29.0857L35.7524 33.3333L40 37.581L37.581 40L33.3334 35.7524L29.0857 40L26.6667 37.581L30.9143 33.3333L26.6667 29.0857L29.0857 26.6667L33.3334 30.9143L37.581 26.6667Z",
                        fill: f
                    }), (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M23.3294 21.5042C22.1286 22.3692 21.1773 23.5589 20.6041 24.9448C20.4081 24.981 20.2062 25 20 25C18.1667 25 16.6667 23.5 16.6667 21.6667C16.6667 19.8333 18.1667 18.3333 20 18.3333C21.7789 18.3333 23.244 19.7456 23.3294 21.5042ZM28.1664 20C27.3936 16.1977 24.0293 13.3333 20 13.3333C15.4 13.3333 11.6667 17.0667 11.6667 21.6667C11.6667 23.1833 12.1 24.5833 12.8167 25.8167L10.6334 27.0833C9.70002 25.4833 9.16669 23.6333 9.16669 21.6667C9.16669 15.7 14.0334 10.8333 20 10.8333C25.4001 10.8333 29.8992 14.8197 30.7049 20H28.1664ZM35.7468 20C34.915 12.0346 28.1871 5.83333 20 5.83333C11.25 5.83333 4.16669 12.9167 4.16669 21.6667C4.16669 24.55 4.95002 27.25 6.28335 29.5667L4.13335 30.8167C2.58335 28.1333 1.66669 25 1.66669 21.6667C1.66669 11.55 9.88335 3.33333 20 3.33333C29.5549 3.33333 37.415 10.6628 38.2584 20H35.7468ZM20.0154 27.5C20.0052 27.6654 20 27.8321 20 28V33.3333H14.1667V32.5C14.1667 29.6667 16.5667 27.5 20 27.5C20.0051 27.5 20.0103 27.5 20.0154 27.5Z",
                        fill: f
                    })]
                }))
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

            function c(e) {
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
            var a, f, p = function() {
                    throw new Error("updateModal has not been implemented.")
                },
                d = n(680918);
            a = d.showModal;
            p = d.updateModalProps;
            f = n(264817).Mr;

            function O(e) {
                var t = e.promiseFn,
                    n = e.resolve,
                    r = e.reject,
                    o = e.modalProps,
                    i = void 0 === o ? {} : o,
                    l = e.hooks,
                    s = (void 0 === l ? {} : l).onEarlyClose,
                    d = function() {
                        null == s || s()
                    },
                    O = function(e) {
                        f(S);
                        n(e)
                    },
                    y = function(e) {
                        f(S);
                        r(e)
                    },
                    h = function(e) {
                        var t = e.res;
                        p(S, v, d, u(c({}, i), {
                            error: t.body.message
                        }))
                    };
                if (null != a) var S = a(v, d, i);
                else null == s || s();

                function v(e) {
                    p(S, v, d, u(c({}, i), {
                        isLoading: !0
                    }));
                    return b({
                        promiseFn: t,
                        resolve: O,
                        reject: y,
                        code: e,
                        mfaCodeHandler: h,
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
                    l = void 0 === i ? O : i,
                    u = e.isModalOpen,
                    a = void 0 !== u && u,
                    f = s(e, ["promiseFn", "resolve", "reject", "code", "mfaCodeHandler", "isModalOpen"]);
                return t(null != o ? {
                    code: o
                } : {}).then(n, (function(e) {
                    if (function(e, t) {
                            return e.body && 60008 === e.body.code || t && 429 === e.status
                        }(e, a)) return l(c({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e
                    }, f));
                    r(e)
                }))
            }

            function y(e, t) {
                var n, o, l = null != t ? t : {},
                    u = l.checkEnabled,
                    a = void 0 === u ? null !== (o = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== o && o : u,
                    f = s(l, ["checkEnabled"]);
                return new Promise((function(t, n) {
                    (i(a) ? O : b)(c({
                        promiseFn: e,
                        resolve: t,
                        reject: n
                    }, f))
                }))
            }
        },
        680918: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                showModal: () => u,
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
            var c = function(e, t, n) {
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

            function u(e, t, n) {
                return (0, o.h7)(c(e, t, n), {
                    onCloseCallback: t
                })
            }

            function s(e, t, n, r) {
                return (0, o.o)(e, c(t, n, r))
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
//# sourceMappingURL=3ba82f61727a6093adc8.js.map