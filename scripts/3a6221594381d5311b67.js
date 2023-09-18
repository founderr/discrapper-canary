(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [62790], {
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
                Ou: () => c
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

            function c() {
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
                c = n(223219),
                l = n(652591),
                s = n(775173),
                u = n(488110),
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
                    var e = c.Z.onClose;
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
                    var c = e.username,
                        f = e.email,
                        O = e.emailToken,
                        h = e.password,
                        v = e.avatar,
                        S = e.newPassword,
                        g = e.discriminator,
                        m = t.close;
                    return (0, u.Z)((function(e) {
                        var t = y(b({
                                username: c,
                                email: f,
                                email_token: O,
                                password: h,
                                avatar: v,
                                new_password: S
                            }, e), {
                                discriminator: null != g && "" !== g ? g : void 0
                            }),
                            n = o.Z.get(p.JkL),
                            i = (0, a.xJ)();
                        if (null != i && null != n) {
                            t.push_provider = i;
                            t.push_token = n
                        }
                        var l = o.Z.get(p.scU);
                        if (null != p.mvA && null != l) {
                            t.push_voip_provider = p.mvA;
                            t.push_voip_token = l
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
                        l.default.track(p.rMx.USER_AVATAR_UPDATED, {
                            animated: (0, s.xR)(t.avatar)
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
                        null != S && i.Z.dispatch({
                            type: "USER_PASSWORD_UPDATE",
                            user: t,
                            newPassword: S
                        });
                        null != h && null != S && i.Z.dispatch({
                            type: "PASSWORD_UPDATED",
                            userId: t.id
                        });
                        m ? n.close() : n.submitComplete();
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
                Z: () => v
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                c = n.n(i),
                l = n(882723),
                s = n(473708),
                u = n(775823),
                a = n.n(u);

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
                        return null !== (t = e.props.label) && void 0 !== t ? t : e.props.disallowBackupCodes ? s.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : s.Z.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    };
                    e.getSupportedCodeTypes = function() {
                        return e.props.disallowBackupCodes ? s.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : s.Z.Messages.TWO_FA_AUTH_CODE
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
                        u = t.children,
                        f = t.error,
                        p = t.isLoading,
                        d = t.maxLength,
                        O = t.transitionState,
                        b = t.helpMessage,
                        y = t.retryPrompt,
                        h = t.retrySuccessMessage,
                        v = this.state,
                        S = v.code,
                        g = v.errorMessage,
                        m = v.retrySuccess,
                        j = o.Children.count(u) > 0 ? (0, r.jsx)(l.Card, {
                            type: l.Card.Types.WARNING,
                            className: a().card,
                            children: (0, r.jsx)(l.Text, {
                                variant: "text-md/normal",
                                children: u
                            })
                        }) : null,
                        E = null != y ? (0, r.jsxs)(l.Text, {
                            className: c()(a().submitText, a().spacing),
                            variant: "text-sm/normal",
                            children: [(0, r.jsx)("br", {}), (0, r.jsx)(l.Clickable, {
                                className: c()(a().spacing, a().link),
                                onClick: this.handleRetry,
                                children: (0, r.jsx)(l.Anchor, {
                                    children: y
                                })
                            })]
                        }) : null,
                        _ = m ? (0, r.jsx)(l.Card, {
                            type: l.Card.Types.SUCCESS,
                            className: a().card,
                            children: (0, r.jsx)(l.Text, {
                                variant: "text-md/normal",
                                children: h
                            })
                        }) : null;
                    return (0, r.jsx)(l.ModalRoot, {
                        transitionState: O,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(l.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(l.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: n
                                })
                            }), (0, r.jsxs)(l.ModalContent, {
                                children: [null != b ? (0, r.jsx)(l.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: a().spacing,
                                    children: b
                                }) : null, j, _, (0, r.jsxs)(l.FormItem, {
                                    title: this.getLabelText(),
                                    className: a().spacing,
                                    children: [(0, r.jsx)(l.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != d ? d : 10,
                                        value: S,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(l.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: a().error,
                                        children: null != f ? f : g
                                    }) : null, E]
                                })]
                            }), (0, r.jsxs)(l.ModalFooter, {
                                children: [(0, r.jsx)(l.Button, {
                                    type: "submit",
                                    disabled: p || 0 === S.length,
                                    children: null != i ? i : s.Z.Messages.CONFIRM
                                }), (0, r.jsx)(l.Button, {
                                    onClick: this.handleCancel,
                                    disabled: p,
                                    look: l.Button.Looks.LINK,
                                    color: l.Button.Colors.PRIMARY,
                                    children: s.Z.Messages.CANCEL
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
            const v = h
        },
        800455: (e, t, n) => {
            "use strict";
            n.d(t, {
                mv: () => g,
                Xd: () => m
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(795308),
                c = n(882723),
                l = n(971402),
                s = n(742257),
                u = n(961241),
                a = n(98265),
                f = n(661782),
                p = n(749565),
                d = n(933022),
                O = n(426404),
                b = n(473708),
                y = n(555563),
                h = n.n(y);

            function v(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function S(e, t) {
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
            var g = function(e) {
                    var t = e.channelId,
                        n = (0, O._d)(t);
                    if (0 === n) return null;
                    return (0, r.jsxs)("div", {
                        className: h().blockedNotice,
                        children: [(0, r.jsx)(s.Z, {
                            className: h().blockedIcon,
                            color: i.Z.unsafe_rawColors.RED_400.css
                        }), (0, r.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: b.Z.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format({
                                number: n
                            })
                        }), (0, r.jsx)(c.Clickable, {
                            className: h().blockedButton,
                            onClick: function(e) {
                                (0, l.vq)(e, (function(e) {
                                    return (0, r.jsx)(j, S(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                v(e, t, n[t])
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
                m = function(e) {
                    var t = e.user,
                        n = e.showStatus,
                        i = e.speaker,
                        l = e.channelId,
                        s = (0, o.e7)([d.ZP], (function() {
                            return d.ZP.isModerator(t.id, l)
                        })),
                        O = null;
                    n && (O = i ? b.Z.Messages.STAGE_SPEAKER : s ? b.Z.Messages.STAGE_MODERATOR_TOOLTIP : b.Z.Messages.STAGE_AUDIENCE);
                    return (0, r.jsxs)("div", {
                        className: h().user,
                        children: [(0, r.jsx)(f.Z, {
                            src: t.getAvatarURL(null, 32),
                            size: c.AvatarSizes.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: i ? function() {
                                return (0, r.jsx)(u.Z, {
                                    className: h().icon
                                })
                            } : null
                        }, t.id), (0, r.jsxs)("div", {
                            className: h().userInfo,
                            children: [(0, r.jsxs)("div", {
                                className: h().username,
                                children: [(0, r.jsx)(a.Z, {
                                    size: n ? a.Z.Sizes.SIZE_16 : a.Z.Sizes.SIZE_14,
                                    children: p.ZP.getName(t)
                                }), (0, r.jsx)(a.Z, {
                                    size: n ? a.Z.Sizes.SIZE_16 : a.Z.Sizes.SIZE_14,
                                    color: a.Z.Colors.HEADER_SECONDARY,
                                    children: "#".concat(t.discriminator)
                                })]
                            }), (0, r.jsxs)("div", {
                                className: h().username,
                                children: [(0, r.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-danger",
                                    children: b.Z.Messages.BLOCKED
                                }), (0, r.jsxs)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [" ", "| ", O]
                                })]
                            })]
                        })]
                    })
                },
                j = function(e) {
                    var t = e.channelId,
                        n = (0, O.z)(t);
                    return (0, r.jsx)(c.Scroller, {
                        className: h().container,
                        children: n.map((function(e) {
                            var n = e.user;
                            return (0, r.jsx)(m, {
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
                Z: () => d
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                c = n(473708),
                l = n(347234),
                s = n.n(l),
                u = n(483683),
                a = n.n(u),
                f = n(63685),
                p = n.n(f);

            function d(e) {
                var t = e.className,
                    n = e.children;
                return (0, r.jsxs)("div", {
                    className: i()(s().container, t),
                    children: [(0, r.jsx)("img", {
                        alt: c.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: p(),
                        className: i()(s().sparkleIcon, s().sparkleBottom)
                    }), n, (0, r.jsx)("img", {
                        alt: c.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: a(),
                        className: i()(s().sparkleIcon, s().sparkleTop)
                    })]
                })
            }
        },
        270897: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => j
            });
            var r = n(785893),
                o = (n(667294), n(882723)),
                i = n(443812),
                c = n(961241),
                l = n(363582),
                s = n(516909),
                u = n(771575),
                a = n(426404),
                f = n(800455),
                p = n(832642),
                d = n(473708),
                O = n(271466),
                b = n.n(O);

            function y(e, t, n, r, o, i, c) {
                try {
                    var l = e[i](c),
                        s = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function h(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function c(e) {
                            y(i, r, o, c, l, "next", e)
                        }

                        function l(e) {
                            y(i, r, o, c, l, "throw", e)
                        }
                        c(void 0)
                    }))
                }
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

            function S(e, t) {
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

            function g(e, t) {
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
            var m = function(e, t) {
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
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
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
                        }([i, l])
                    }
                }
            };

            function j(e) {
                var t, n = e.channel,
                    O = e.transitionState,
                    y = e.onClose,
                    j = g(e, ["channel", "transitionState", "onClose"]),
                    E = (0, i.Dt)(),
                    _ = (0, a._d)(n.id),
                    C = (t = h((function() {
                        return m(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, (0, u.yi)(n)];
                                case 1:
                                    e.sent();
                                    y();
                                    return [2]
                            }
                        }))
                    })), function() {
                        return t.apply(this, arguments)
                    }),
                    P = function() {
                        var e = h((function() {
                            return m(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, (0, u.RK)(n, !1)];
                                    case 1:
                                        e.sent();
                                        y();
                                        return [2]
                                }
                            }))
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return (0, r.jsx)(o.ModalRoot, S(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            v(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    transitionState: O,
                    "aria-labelledby": E
                }, j), {
                    size: o.ModalSize.SMALL,
                    children: (0, r.jsxs)(o.ModalContent, {
                        className: b().content,
                        children: [(0, r.jsx)(p.Z, {
                            children: (0, r.jsx)("div", {
                                className: b().stageIconBackground,
                                children: (0, r.jsx)(s.Z, {
                                    width: 40,
                                    height: 40,
                                    className: b().stageIcon
                                })
                            })
                        }), (0, r.jsx)(o.Heading, {
                            id: E,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: b().headerTitle,
                            children: d.Z.Messages.STAGE_MODERATOR_JOIN_MODAL_TITLE
                        }), (0, r.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: b().headerSubtitle,
                            children: d.Z.Messages.STAGE_MODERATOR_JOIN_MODAL_SUBTITLE
                        }), _ > 0 && (0, r.jsx)(f.mv, {
                            channelId: n.id
                        }), (0, r.jsxs)("div", {
                            className: b().buttonsContainer,
                            children: [(0, r.jsxs)(o.Button, {
                                color: o.Button.Colors.PRIMARY,
                                className: b().button,
                                innerClassName: b().innerButton,
                                onClick: P,
                                children: [(0, r.jsx)("div", {
                                    className: b().icon,
                                    children: (0, r.jsx)(c.Z, {
                                        width: 20,
                                        height: 20
                                    })
                                }), d.Z.Messages.STAGE_MODERATOR_JOIN_MODAL_JOIN_SPEAKER]
                            }), (0, r.jsxs)(o.Button, {
                                color: o.Button.Colors.PRIMARY,
                                className: b().button,
                                innerClassName: b().innerButton,
                                onClick: C,
                                children: [(0, r.jsx)("div", {
                                    className: b().icon,
                                    children: (0, r.jsx)(l.Z, {
                                        width: 20,
                                        height: 20
                                    })
                                }), d.Z.Messages.STAGE_MODERATOR_JOIN_MODAL_JOIN_AUDIENCE]
                            })]
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
                c = n(744564),
                l = n(473903),
                s = n(2590);

            function u(e, t) {
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
            var v = s.QZA.CLOSED,
                S = null,
                g = null,
                m = {},
                j = {},
                E = {},
                _ = null,
                C = null,
                P = !1,
                T = !1,
                w = null,
                N = null,
                x = null,
                A = [],
                I = null,
                R = null;

            function M(e) {
                var t, n, r, o, i, c, u = l.default.getCurrentUser();
                if (null == u) return Z();
                g = null !== (t = e.section) && void 0 !== t ? t : g;
                I = null !== (n = e.section) && void 0 !== n ? n : g;
                null != e.subsection && null != g && (m[g] = e.subsection);
                null != e.scrollPosition && null != g && (j[g] = e.scrollPosition);
                T = !!e.openWithoutBackstack;
                v = s.QZA.OPEN;
                E = {};
                _ = f({}, s.oAB.ACCOUNT, {
                    userId: u.id,
                    username: u.username,
                    discriminator: u.discriminator,
                    email: u.email,
                    avatar: u.avatar,
                    password: "",
                    newPassword: null,
                    claimed: u.isClaimed()
                });
                C = d({}, _);
                N = null !== (r = e.onClose) && void 0 !== r ? r : null;
                x = null !== (o = e.analyticsLocation) && void 0 !== o ? o : null;
                A = null !== (i = e.analyticsLocations) && void 0 !== i ? i : [];
                R = null !== (c = e.impressionSource) && void 0 !== c ? c : null
            }

            function Z() {
                v = s.QZA.CLOSED;
                P = !1;
                _ = null;
                I = null;
                C = null;
                S = null;
                g = null;
                m = {};
                j = {};
                N = null;
                x = null;
                A = [];
                R = null
            }

            function D() {
                v = s.QZA.OPEN;
                E = {}
            }
            var L = function(e) {
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
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(l.default)
                };
                r.hasChanges = function() {
                    return null != C && null != _ && (!(!this.isOpen() && w !== s.cII.USER_SETTINGS) && !o().isEqual(C, _))
                };
                r.isOpen = function() {
                    return P
                };
                r.getPreviousSection = function() {
                    return S
                };
                r.getSection = function() {
                    return g
                };
                r.getSubsection = function() {
                    return null != g ? m[g] : null
                };
                r.getScrollPosition = function() {
                    return null != g ? j[g] : null
                };
                r.shouldOpenWithoutBackstack = function() {
                    return T
                };
                r.getProps = function() {
                    return {
                        submitting: v === s.QZA.SUBMITTING,
                        section: g,
                        subsection: null != g ? m[g] : null,
                        scrollPosition: null != g ? j[g] : null,
                        settings: C,
                        errors: E,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: T,
                        analyticsLocation: x,
                        analyticsLocations: A,
                        initialSection: I,
                        impressionSource: R
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        formState: v,
                        previousSection: S,
                        section: g,
                        subsections: m,
                        scrollPositions: j,
                        errors: E,
                        originalSettings: _,
                        settings: C,
                        open: P,
                        openWithoutBackstack: T,
                        tab: w,
                        onClose: N,
                        analyticsLocation: x,
                        analyticsLocations: A,
                        initialSection: I,
                        impressionSource: R
                    }
                };
                ! function(e, t, n) {
                    t && a(e.prototype, t);
                    n && a(e, n)
                }(n, [{
                    key: "onClose",
                    get: function() {
                        return N
                    }
                }]);
                return n
            }(i.ZP.Store);
            L.displayName = "UserSettingsModalStore";
            const k = new L(c.Z, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    P = !0;
                    M(e)
                },
                USER_SETTINGS_MODAL_INIT: M,
                USER_SETTINGS_MODAL_CLOSE: Z,
                LOGOUT: Z,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    v = s.QZA.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    if (v !== s.QZA.SUBMITTING) return !1;
                    v = s.QZA.OPEN;
                    g = s.oAB.ACCOUNT;
                    var t;
                    E = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    S = g;
                    g = e.section;
                    x = null;
                    var t;
                    A = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [];
                    null != e.subsection && (m[g] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    var t = e.forSection;
                    null != t ? delete m[t] : null != g && delete m[g]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    var t = e.forSection;
                    null != t ? delete j[t] : null != g && delete j[g]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    var t = e.settings;
                    null == C && (C = {});
                    var n = C[s.oAB.ACCOUNT];
                    C[s.oAB.ACCOUNT] = d({}, n, t)
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: D,
                USER_SETTINGS_MODAL_RESET: function() {
                    var e = l.default.getCurrentUser();
                    D();
                    if (null != e) {
                        _ = f({}, s.oAB.ACCOUNT, {
                            userId: e.id,
                            username: e.username,
                            discriminator: e.discriminator,
                            email: e.email,
                            avatar: e.avatar,
                            password: "",
                            newPassword: null,
                            claimed: e.isClaimed()
                        });
                        C = d({}, _)
                    }
                },
                DRAWER_SELECT_TAB: function(e) {
                    w = e.tab;
                    return null == g && w === s.cII.USER_SETTINGS && M({
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
                hQ: () => c,
                Dt: () => l,
                FG: () => s
            });
            var r = n(873955),
                o = n.n(r),
                i = n(989824),
                c = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return o()(e)
                },
                l = function() {
                    return (0, i.Z)((function() {
                        return c()
                    }))
                },
                s = function(e) {
                    return (0, e.children)(l())
                }
        },
        961241: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
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

            function s(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    s = e.height,
                    u = void 0 === s ? 24 : s,
                    a = e.color,
                    f = void 0 === a ? "currentColor" : a,
                    p = e.foreground,
                    d = l(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", c(function(e) {
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
                }({}, (0, o.Z)(d)), {
                    width: n,
                    height: u,
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z",
                        className: p,
                        fill: f
                    }), (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z",
                        className: p,
                        fill: f
                    })]
                }))
            }
        },
        363582: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
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

            function s(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    s = e.height,
                    u = void 0 === s ? 24 : s,
                    a = e.color,
                    f = void 0 === a ? "currentColor" : a,
                    p = e.foreground,
                    d = l(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", c(function(e) {
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
                }({}, (0, o.Z)(d)), {
                    width: n,
                    height: u,
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        className: p,
                        fill: f,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                    }), (0, r.jsx)("path", {
                        className: p,
                        fill: f,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                    }), (0, r.jsx)("path", {
                        className: p,
                        fill: f,
                        d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                    }), (0, r.jsx)("path", {
                        className: p,
                        fill: f,
                        d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                    })]
                }))
            }
        },
        516909: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
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

            function s(e) {
                var t = e.width,
                    n = void 0 === t ? 32 : t,
                    s = e.height,
                    u = void 0 === s ? 32 : s,
                    a = e.color,
                    f = void 0 === a ? "currentColor" : a,
                    p = l(e, ["width", "height", "color"]);
                return (0, r.jsx)("svg", c(function(e) {
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
                    height: u,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                        fill: f
                    })
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

            function c(e, t, n) {
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
                        c(e, t, n[t])
                    }))
                }
                return e
            }

            function s(e, t) {
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

            function u(e, t) {
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
                    c = e.hooks,
                    u = (void 0 === c ? {} : c).onEarlyClose,
                    d = function() {
                        null == u || u()
                    },
                    O = function(e) {
                        f(v);
                        n(e)
                    },
                    y = function(e) {
                        f(v);
                        r(e)
                    },
                    h = function(e) {
                        var t = e.res;
                        p(v, S, d, s(l({}, i), {
                            error: t.body.message
                        }))
                    };
                if (null != a) var v = a(S, d, i);
                else null == u || u();

                function S(e) {
                    p(v, S, d, s(l({}, i), {
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
                    c = void 0 === i ? O : i,
                    s = e.isModalOpen,
                    a = void 0 !== s && s,
                    f = u(e, ["promiseFn", "resolve", "reject", "code", "mfaCodeHandler", "isModalOpen"]);
                return t(null != o ? {
                    code: o
                } : {}).then(n, (function(e) {
                    if (function(e, t) {
                            return e.body && 60008 === e.body.code || t && 429 === e.status
                        }(e, a)) return c(l({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e
                    }, f));
                    r(e)
                }))
            }

            function y(e, t) {
                var n, o, c = null != t ? t : {},
                    s = c.checkEnabled,
                    a = void 0 === s ? null !== (o = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== o && o : s,
                    f = u(c, ["checkEnabled"]);
                return new Promise((function(t, n) {
                    (i(a) ? O : b)(l({
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
                showModal: () => s,
                updateModalProps: () => u
            });
            var r = n(785893),
                o = (n(667294), n(264817)),
                i = n(919244);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var l = function(e, t, n) {
                return function(o) {
                    return (0, r.jsx)(i.Z, function(e) {
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
                    }({
                        handleSubmit: e,
                        handleEarlyClose: t
                    }, n, o))
                }
            };

            function s(e, t, n) {
                return (0, o.h7)(l(e, t, n), {
                    onCloseCallback: t
                })
            }

            function u(e, t, n, r) {
                return (0, o.o)(e, l(t, n, r))
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
//# sourceMappingURL=3a6221594381d5311b67.js.map