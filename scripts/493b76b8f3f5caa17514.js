(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["5433"], {
        48174: function(e, t, n) {
            "use strict";

            function l(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            })
        },
        775560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return l.default
                },
                useStableMemo: function() {
                    return s.default
                },
                useLazyValue: function() {
                    return a.default
                }
            });
            var l = n("14716"),
                s = n("745510"),
                a = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("884691");

            function s() {
                let [, e] = (0, l.useState)({});
                return (0, l.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("884691");
            let s = {};

            function a(e) {
                let t = (0, l.useRef)(s);
                return t.current === s && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("884691"),
                s = n("48174");
            let a = [];

            function r(e, t) {
                let n = (0, l.useRef)(),
                    r = (0, l.useRef)(a);
                return r.current === a ? (n.current = e(), r.current = t) : !(0, s.default)(t, r.current) && (n.current = e(), r.current = t), n.current
            }
        },
        284434: function(e, t, n) {
            "use strict";
            e.exports = n.p + "51063f34b3960c1d5da8.svg"
        },
        315956: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f92a8b5812e2da52a179.svg"
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return s
                },
                popLayer: function() {
                    return a
                },
                popAllLayers: function() {
                    return r
                }
            });
            var l = n("913144");

            function s(e) {
                l.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function a() {
                l.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function r() {
                l.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        79112: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var l = n("872717"),
                s = n("95410"),
                a = n("913144"),
                r = n("211895"),
                i = n("26092"),
                u = n("599110"),
                o = n("315102"),
                d = n("730622"),
                c = n("49111"),
                f = n("191349"),
                h = n("782340"),
                _ = {
                    open() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                openWithoutBackstack: !1
                            };
                        (0, r.default)(e, t, n)
                    },
                    init: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_INIT",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    close() {
                        let e = i.default.onClose;
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), null != e && e()
                    },
                    setSection(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SET_SECTION",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    clearSubsection(e) {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                            forSection: e
                        })
                    },
                    clearScrollPosition(e) {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                            forSection: e
                        })
                    },
                    updateAccount(e) {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                            settings: e
                        })
                    },
                    submitComplete() {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                        })
                    },
                    reset() {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_RESET"
                        })
                    },
                    saveAccountChanges(e, t) {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT"
                        });
                        let {
                            username: n,
                            email: r,
                            emailToken: i,
                            password: _,
                            avatar: S,
                            newPassword: p,
                            discriminator: E
                        } = e, {
                            close: T
                        } = t;
                        return (0, d.default)(e => {
                            let t = {
                                    username: n,
                                    email: r,
                                    email_token: i,
                                    password: _,
                                    avatar: S,
                                    new_password: p,
                                    ...e,
                                    discriminator: null != E && "" !== E ? E : void 0
                                },
                                a = s.default.get(c.DEVICE_TOKEN),
                                u = (0, f.getDevicePushProvider)();
                            null != u && null != a && (t.push_provider = u, t.push_token = a);
                            let o = s.default.get(c.DEVICE_VOIP_TOKEN);
                            return null != f.DEVICE_PUSH_VOIP_PROVIDER && null != o && (t.push_voip_provider = f.DEVICE_PUSH_VOIP_PROVIDER, t.push_voip_token = o), l.default.patch({
                                url: c.Endpoints.ME,
                                oldFormErrors: !0,
                                body: t
                            })
                        }, {
                            checkEnabled: !1,
                            modalProps: {
                                title: h.default.Messages.TWO_FA_CHANGE_ACCOUNT
                            },
                            hooks: {
                                onEarlyClose: () => a.default.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }).then(e => {
                            let t = e.body,
                                n = t.token;
                            return u.default.track(c.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, o.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, a.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), a.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != p && a.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: p
                            }), null != _ && null != p && a.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), T ? this.close() : this.submitComplete(), e
                        }, e => (a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: e.body
                        }), e))
                    }
                }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983"),
                s = n("884691"),
                a = n("414456"),
                r = n.n(a),
                i = n("77078"),
                u = n("782340"),
                o = n("347129");
            class d extends s.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: a,
                        error: d,
                        isLoading: c,
                        maxLength: f,
                        transitionState: h,
                        helpMessage: _,
                        retryPrompt: S,
                        retrySuccessMessage: p
                    } = this.props, {
                        code: E,
                        errorMessage: T,
                        retrySuccess: C
                    } = this.state, g = s.Children.count(a) > 0 ? (0, l.jsx)(i.Card, {
                        type: i.Card.Types.WARNING,
                        className: o.card,
                        children: (0, l.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: a
                        })
                    }) : null, I = null != S ? (0, l.jsxs)(i.Text, {
                        className: r(o.submitText, o.spacing),
                        variant: "text-sm/normal",
                        children: [(0, l.jsx)("br", {}), (0, l.jsx)(i.Clickable, {
                            className: r(o.spacing, o.link),
                            onClick: this.handleRetry,
                            children: (0, l.jsx)(i.Anchor, {
                                children: S
                            })
                        })]
                    }) : null, v = C ? (0, l.jsx)(i.Card, {
                        type: i.Card.Types.SUCCESS,
                        className: o.card,
                        children: (0, l.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: p
                        })
                    }) : null;
                    return (0, l.jsx)(i.ModalRoot, {
                        transitionState: h,
                        children: (0, l.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, l.jsx)(i.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, l.jsxs)(i.ModalContent, {
                                children: [null != _ ? (0, l.jsx)(i.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: o.spacing,
                                    children: _
                                }) : null, g, v, (0, l.jsxs)(i.FormItem, {
                                    title: this.getLabelText(),
                                    className: o.spacing,
                                    children: [(0, l.jsx)(i.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != f ? f : 10,
                                        value: E,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, l.jsx)(i.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: o.error,
                                        children: null != d ? d : T
                                    }) : null, I]
                                })]
                            }), (0, l.jsxs)(i.ModalFooter, {
                                children: [(0, l.jsx)(i.Button, {
                                    type: "submit",
                                    disabled: c || 0 === E.length,
                                    children: null != n ? n : u.default.Messages.CONFIRM
                                }), (0, l.jsx)(i.Button, {
                                    onClick: this.handleCancel,
                                    disabled: c,
                                    look: i.Button.Looks.LINK,
                                    color: i.Button.Colors.PRIMARY,
                                    children: u.default.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    }, this.setRef = e => {
                        this._input = e
                    }, this.getLabelText = () => {
                        var e;
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? u.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : u.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? u.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : u.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
                        var e;
                        return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes()
                    }, this.errorPresent = () => null != this.props.error && "" !== this.props.error || null != this.state.errorMessage && "" !== this.state.errorMessage, this.handleRetry = () => {
                        let {
                            onRetry: e
                        } = this.props;
                        null == e || e().then(() => this.setState({
                            retrySuccess: !0
                        }))
                    }, this.handleSubmit = e => {
                        e.preventDefault();
                        let {
                            handleSubmit: t,
                            onError: n
                        } = this.props;
                        t(this.state.code).catch(e => {
                            null != e.body && (null == n || n(e.body), e.body.message && this.setState({
                                errorMessage: e.body.message
                            }))
                        })
                    }, this.handleCancel = () => {
                        let {
                            onClose: e,
                            handleEarlyClose: t
                        } = this.props;
                        e(), null == t || t()
                    }, this.handleCodeChange = e => {
                        this.setState({
                            code: e
                        })
                    }
                }
            }
            d.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var c = d
        },
        811513: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GroupIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("669491"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M14.5 8a3 3 0 1 0-2.701-4.306c-.202.415.057.87.443 1.124A5.006 5.006 0 0 1 14.379 7.9c.013.058.062.1.121.1ZM18.437 17.271c.154.425.544.729.995.729H20.5a1.5 1.5 0 0 0 1.5-1.5 7.502 7.502 0 0 0-6.502-7.434c-.548-.073-.988.386-1.097.927-.06.301-.148.592-.26.871-.233.579-.054 1.291.472 1.628a9.529 9.529 0 0 1 3.824 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0 1.5 1.5 0 0 1-1.5 1.5.202.202 0 0 1-.196-.159 12.379 12.379 0 0 0-.884-2.543c-.108-.23-.42-.149-.42.105V21.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.097c0-.254-.312-.334-.42-.105-.318.673-.67 1.579-.884 2.543A.202.202 0 0 1 3.5 22 1.5 1.5 0 0 1 2 20.5Z",
                        className: i
                    })
                })
            }
        },
        397659: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HeadphonesSlashIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("669491"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M22.707 2.707a1 1 0 0 0-1.414-1.414l-20 20a1 1 0 1 0 1.414 1.414l20-20ZM17.058 2.941a.478.478 0 0 0-.111-.769A10.954 10.954 0 0 0 12 1C5.925 1 1 5.925 1 12c0 1.78.423 3.46 1.173 4.947a.478.478 0 0 0 .769.111l3.19-3.19c.256-.256.16-.69-.196-.763A4.997 4.997 0 0 0 4.917 13H3.055a9 9 0 0 1 12.662-9.199c.196.09.429.053.582-.1l.76-.76ZM20.199 8.283a.518.518 0 0 1 .1-.582l.76-.76a.478.478 0 0 1 .769.112A10.954 10.954 0 0 1 23 12c0 4.143-2.29 7.75-5.67 9.624-1.272.707-2.73.23-3.55-.742a3.104 3.104 0 0 1-.17-3.782l1.377-1.967A5 5 0 0 1 19.082 13h1.862a8.967 8.967 0 0 0-.746-4.717ZM10.108 17.892c.238-.238.637-.176.728.147.273.97.062 2.04-.616 2.843-.82.973-2.278 1.448-3.55.742a.164.164 0 0 1-.035-.259l3.473-3.473Z",
                        className: i
                    })
                })
            }
        },
        696675: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MicrophoneIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("669491"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Z",
                        className: i
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M6 10a1 1 0 0 0-2 0 8.001 8.001 0 0 0 7 7.938V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.062A8.001 8.001 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z",
                        className: i
                    })]
                })
            }
        },
        780624: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MicrophoneSlashIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("669491"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "m2.707 22.707 20-20a1 1 0 0 0-1.414-1.414l-20 20a1 1 0 1 0 1.414 1.414ZM10.803 17.319c-.216.216-.106.581.197.62V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.062A8.001 8.001 0 0 0 20 10a1 1 0 0 0-2 0 5.976 5.976 0 0 1-1.38 3.828l-.022.027a5.988 5.988 0 0 1-4.274 2.136.524.524 0 0 0-.344.15l-1.177 1.178ZM15.357 4.521c.15-.15.192-.38.084-.562A4 4 0 0 0 8 6v4c-.001.294.03.58.091.857.076.346.498.432.749.181l6.516-6.517ZM5.062 13.985a.473.473 0 0 0 .747.084l.748-.747a.53.53 0 0 0 .087-.614A5.974 5.974 0 0 1 6 10a1 1 0 0 0-2 0c0 1.45.386 2.812 1.062 3.985Z",
                        className: i
                    })
                })
            }
        },
        287083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("669491"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M19.615 18.25c-.335-.364-.35-.914-.079-1.328a9 9 0 1 0-15.072 0c.27.414.256.964-.079 1.328l-.019.02c-.407.442-1.113.428-1.452-.068A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.3-.706 4.436-1.914 6.202-.339.496-1.045.51-1.452.068l-.02-.02Z",
                        className: i
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M16.83 15.233c.428.463 1.176.42 1.454-.145a7 7 0 1 0-12.568 0c.278.565 1.026.608 1.454.145l.054-.06c.304-.329.342-.817.168-1.23a5 5 0 1 1 9.216 0c-.174.413-.136.901.168 1.23l.054.06Z",
                        className: i
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.331 20.03c-.252.725.12 1.5.808 1.84A10.955 10.955 0 0 0 12 23c1.745 0 3.395-.406 4.861-1.13.69-.34 1.06-1.115.808-1.84a6.003 6.003 0 0 0-11.338 0Z",
                        className: i
                    })]
                })
            }
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return r
                },
                getDevicePushProvider: function() {
                    return i
                }
            });
            var l, s, a = n("773336");
            let r = null;

            function i() {
                return (0, a.isAndroid)(), null
            }(l = s || (s = {})).REMINDER = "reminder", l.TOP_MESSAGE_PUSH = "top_messages_push", l.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        244480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                toggleRequestToSpeak: function() {
                    return T
                },
                inviteUserToStage: function() {
                    return C
                },
                audienceAckRequestToSpeak: function() {
                    return g
                },
                moveSelfToAudience: function() {
                    return I
                },
                setUserSuppress: function() {
                    return v
                },
                moveUserToAudience: function() {
                    return A
                },
                setEveryoneRolePermissionAllowed: function() {
                    return N
                },
                startStage: function() {
                    return m
                },
                editStage: function() {
                    return M
                },
                endStage: function() {
                    return O
                }
            });
            var l = n("627445"),
                s = n.n(l),
                a = n("316693"),
                r = n("872717"),
                i = n("450911");
            n("851387");
            var u = n("798609"),
                o = n("716241"),
                d = n("18494"),
                c = n("800762"),
                f = n("991170"),
                h = n("716214"),
                _ = n("230324"),
                S = n("738983"),
                p = n("808422"),
                E = n("49111");

            function T(e, t) {
                let n = e.getGuildId();
                return s(null != n, "This channel cannot be guildless."), t && (0, o.trackWithMetadata)(E.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
                    ...(0, _.getStageChannelMetadata)(e)
                }), r.default.patch({
                    url: E.Endpoints.UPDATE_VOICE_STATE(n),
                    body: {
                        request_to_speak_timestamp: t ? new Date().toISOString() : null,
                        channel_id: e.id
                    }
                })
            }

            function C(e, t) {
                let n = e.getGuildId();
                return s(null != n, "This channel cannot be guildless."), r.default.patch({
                    url: E.Endpoints.UPDATE_VOICE_STATE(n, t),
                    body: {
                        suppress: !1,
                        request_to_speak_timestamp: new Date().toISOString(),
                        channel_id: e.id
                    }
                })
            }

            function g(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = null == e ? void 0 : e.getGuildId();
                s(null != l, "This channel cannot be guildless.");
                let a = c.default.getVoiceStateForChannel(e.id),
                    i = (0, p.getAudienceRequestToSpeakState)(a);
                return i === p.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, o.trackWithMetadata)(E.AnalyticEvents.PROMOTED_TO_SPEAKER, {
                    ...(0, _.getStageChannelMetadata)(e)
                }), r.default.patch({
                    url: E.Endpoints.UPDATE_VOICE_STATE(l),
                    body: {
                        suppress: t,
                        request_to_speak_timestamp: null,
                        channel_id: e.id,
                        ...n ? {
                            silent: n
                        } : {}
                    }
                })
            }

            function I(e) {
                let t = null == e ? void 0 : e.getGuildId();
                return s(null != t, "This channel cannot be guildless."), r.default.patch({
                    url: E.Endpoints.UPDATE_VOICE_STATE(t),
                    body: {
                        suppress: !0,
                        channel_id: e.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function v(e, t, n) {
                let l = e.getGuildId();
                return s(null != l, "This channel cannot be guildless."), r.default.patch({
                    url: E.Endpoints.UPDATE_VOICE_STATE(l, t),
                    body: {
                        suppress: n,
                        channel_id: e.id
                    }
                })
            }

            function A(e, t) {
                if (null == t || null == e) return;
                let n = t.getGuildId();
                return s(null != n, "This channel cannot be guildless."), v(t, e.id, !0), r.default.patch({
                    url: E.Endpoints.UPDATE_VOICE_STATE(n, e.id),
                    body: {
                        suppress: !0,
                        channel_id: t.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function N(e, t, n) {
                let l = e.getGuildId();
                s(null != l, "Channel cannot be guildless");
                let r = e.permissionOverwrites[l],
                    o = {
                        id: l,
                        type: u.PermissionOverwriteType.ROLE,
                        allow: f.default.NONE,
                        deny: f.default.NONE,
                        ...r
                    };
                n ? (o.allow = a.default.add(o.allow, t), o.deny = a.default.remove(o.deny, t)) : (o.allow = a.default.remove(o.allow, t), o.deny = a.default.add(o.deny, t)), i.default.updatePermissionOverwrite(e.id, o)
            }
            async function m(e, t, n, l) {
                if ("" === t) return;
                let s = d.default.getVoiceChannelId() === e.id;
                !s && (0, h.connectToStage)(e);
                let a = await (0, S.startStageInstance)(e.id, t, n, l);
                return g(e, !1, !0), a
            }
            async function M(e, t, n) {
                if ("" === t) return;
                let l = await (0, S.updateStageInstance)(e.id, t, n);
                return l
            }
            async function O(e) {
                await (0, S.endStageInstance)(e.id)
            }
        },
        230324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                summarizeUsernamesParticipating: function() {
                    return c
                },
                getRemoveModeratorTooltipHint: function() {
                    return f
                },
                getStageChannelMetadata: function() {
                    return h
                }
            }), n("917351");
            var l = n("945956"),
                s = n("387111"),
                a = n("991170"),
                r = n("834052"),
                i = n("837979"),
                u = n("49111"),
                o = n("606762"),
                d = n("782340");

            function c(e, t, n, l) {
                let a = t[0],
                    r = s.default.getName(e, n, a),
                    i = null != l ? l : t.length;
                return 1 === i && null != a ? r : null == a ? d.default.Messages.SPEAKING_COUNT.format({
                    count: i
                }) : d.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                    name: r,
                    count: i - 1
                })
            }

            function f(e, t) {
                switch (e) {
                    case o.RowType.OWNER:
                        return d.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
                    case o.RowType.ADMINISTRATOR:
                        return d.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
                    case o.RowType.MEMBER:
                    case o.RowType.ROLE:
                        return t ? d.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : d.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
                    case o.RowType.EMPTY_STATE:
                }
                return null
            }

            function h(e) {
                let t = r.default.getStageInstanceByChannel(e.id);
                return {
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    topic: null == t ? void 0 : t.topic,
                    media_session_id: l.default.getMediaSessionId(),
                    request_to_speak_state: a.default.canEveryoneRole(u.Permissions.REQUEST_TO_SPEAK, e) ? i.RequestToSpeakPermissionStates.EVERYONE : i.RequestToSpeakPermissionStates.NO_ONE,
                    stage_instance_id: null == t ? void 0 : t.id
                }
            }
        },
        738983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startStageInstance: function() {
                    return a
                },
                updateStageInstance: function() {
                    return r
                },
                endStageInstance: function() {
                    return i
                }
            });
            var l = n("872717"),
                s = n("49111");
            async function a(e, t, n, a, r) {
                let i = await l.default.post({
                    url: s.Endpoints.STAGE_INSTANCES,
                    body: {
                        channel_id: e,
                        topic: t,
                        privacy_level: n,
                        guild_scheduled_event_id: r,
                        send_start_notification: a
                    }
                });
                return i.body
            }
            async function r(e, t, n) {
                let a = await l.default.patch({
                    url: s.Endpoints.STAGE_INSTANCE(e),
                    body: {
                        topic: t,
                        privacy_level: n
                    }
                });
                return a.body
            }

            function i(e) {
                return l.default.delete(s.Endpoints.STAGE_INSTANCE(e))
            }
        },
        29846: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BlockedUsersNotice: function() {
                    return E
                },
                BlockedUser: function() {
                    return T
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("446674"),
                a = n("669491"),
                r = n("77078"),
                i = n("272030"),
                u = n("328275"),
                o = n("849467"),
                d = n("258078"),
                c = n("823050"),
                f = n("158998"),
                h = n("325861"),
                _ = n("151642"),
                S = n("782340"),
                p = n("960236");
            let E = e => {
                    let {
                        channelId: t
                    } = e, n = (0, _.useStageBlockedUsersCount)(t);
                    return 0 === n ? null : (0, l.jsxs)("div", {
                        className: p.blockedNotice,
                        children: [(0, l.jsx)(u.default, {
                            className: p.blockedIcon,
                            color: a.default.unsafe_rawColors.RED_400.css
                        }), (0, l.jsx)(r.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: S.default.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format({
                                number: n
                            })
                        }), (0, l.jsx)(r.Clickable, {
                            className: p.blockedButton,
                            onClick: e => {
                                (0, i.openContextMenu)(e, e => (0, l.jsx)(C, {
                                    ...e,
                                    channelId: t
                                }), {
                                    position: "left",
                                    align: "bottom"
                                })
                            },
                            children: S.default.Messages.VIEW_ALL
                        })]
                    })
                },
                T = e => {
                    let {
                        user: t,
                        showStatus: n,
                        speaker: a,
                        channelId: i
                    } = e, u = (0, s.useStateFromStores)([h.default], () => h.default.isModerator(t.id, i)), _ = null;
                    return n && (_ = a ? S.default.Messages.STAGE_SPEAKER : u ? S.default.Messages.STAGE_MODERATOR_TOOLTIP : S.default.Messages.STAGE_AUDIENCE), (0, l.jsxs)("div", {
                        className: p.user,
                        children: [(0, l.jsx)(c.default, {
                            src: t.getAvatarURL(null, 32),
                            size: r.AvatarSizes.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: a ? () => (0, l.jsx)(o.default, {
                                className: p.icon
                            }) : null
                        }, t.id), (0, l.jsxs)("div", {
                            className: p.userInfo,
                            children: [(0, l.jsxs)("div", {
                                className: p.username,
                                children: [(0, l.jsx)(d.default, {
                                    size: n ? d.default.Sizes.SIZE_16 : d.default.Sizes.SIZE_14,
                                    children: f.default.getName(t)
                                }), (0, l.jsx)(d.default, {
                                    size: n ? d.default.Sizes.SIZE_16 : d.default.Sizes.SIZE_14,
                                    color: d.default.Colors.HEADER_SECONDARY,
                                    children: "#".concat(t.discriminator)
                                })]
                            }), (0, l.jsxs)("div", {
                                className: p.username,
                                children: [(0, l.jsx)(r.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-danger",
                                    children: S.default.Messages.BLOCKED
                                }), (0, l.jsxs)(r.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [" ", "| ", _]
                                })]
                            })]
                        })]
                    })
                },
                C = e => {
                    let {
                        channelId: t
                    } = e, n = (0, _.useStageBlockedUsers)(t);
                    return (0, l.jsx)(r.Scroller, {
                        className: p.container,
                        children: n.map(e => {
                            let {
                                user: n
                            } = e;
                            return (0, l.jsx)(T, {
                                user: n,
                                channelId: t
                            }, n.id)
                        })
                    })
                }
        },
        119184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("414456"),
                a = n.n(s),
                r = n("782340"),
                i = n("53061"),
                u = n("284434"),
                o = n("315956");

            function d(e) {
                let {
                    className: t,
                    children: n
                } = e;
                return (0, l.jsxs)("div", {
                    className: a(i.container, t),
                    children: [(0, l.jsx)("img", {
                        alt: r.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: o,
                        className: a(i.sparkleIcon, i.sparkleBottom)
                    }), n, (0, l.jsx)("img", {
                        alt: r.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: u,
                        className: a(i.sparkleIcon, i.sparkleTop)
                    })]
                })
            }
        },
        337649: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("77078"),
                a = n("476765"),
                r = n("849467"),
                i = n("155207"),
                u = n("228427"),
                o = n("244480"),
                d = n("151642"),
                c = n("29846"),
                f = n("119184"),
                h = n("782340"),
                _ = n("262999");

            function S(e) {
                let {
                    channel: t,
                    transitionState: n,
                    onClose: S,
                    ...p
                } = e, E = (0, a.useUID)(), T = (0, d.useStageBlockedUsersCount)(t.id), C = async () => {
                    await (0, o.moveSelfToAudience)(t), S()
                }, g = async () => {
                    await (0, o.audienceAckRequestToSpeak)(t, !1), S()
                };
                return (0, l.jsx)(s.ModalRoot, {
                    transitionState: n,
                    "aria-labelledby": E,
                    ...p,
                    size: s.ModalSize.SMALL,
                    children: (0, l.jsxs)(s.ModalContent, {
                        className: _.content,
                        children: [(0, l.jsx)(f.default, {
                            children: (0, l.jsx)("div", {
                                className: _.stageIconBackground,
                                children: (0, l.jsx)(u.default, {
                                    width: 40,
                                    height: 40,
                                    className: _.stageIcon
                                })
                            })
                        }), (0, l.jsx)(s.Heading, {
                            id: E,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: _.headerTitle,
                            children: h.default.Messages.STAGE_MODERATOR_JOIN_MODAL_TITLE
                        }), (0, l.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: _.headerSubtitle,
                            children: h.default.Messages.STAGE_MODERATOR_JOIN_MODAL_SUBTITLE
                        }), T > 0 && (0, l.jsx)(c.BlockedUsersNotice, {
                            channelId: t.id
                        }), (0, l.jsxs)("div", {
                            className: _.buttonsContainer,
                            children: [(0, l.jsxs)(s.Button, {
                                color: s.Button.Colors.PRIMARY,
                                className: _.button,
                                innerClassName: _.innerButton,
                                onClick: g,
                                children: [(0, l.jsx)("div", {
                                    className: _.icon,
                                    children: (0, l.jsx)(r.default, {
                                        width: 20,
                                        height: 20
                                    })
                                }), h.default.Messages.STAGE_MODERATOR_JOIN_MODAL_JOIN_SPEAKER]
                            }), (0, l.jsxs)(s.Button, {
                                color: s.Button.Colors.PRIMARY,
                                className: _.button,
                                innerClassName: _.innerButton,
                                onClick: C,
                                children: [(0, l.jsx)("div", {
                                    className: _.icon,
                                    children: (0, l.jsx)(i.default, {
                                        width: 20,
                                        height: 20
                                    })
                                }), h.default.Messages.STAGE_MODERATOR_JOIN_MODAL_JOIN_AUDIENCE]
                            })]
                        })]
                    })
                })
            }
        },
        211895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("913144"),
                s = n("54239"),
                a = n("49111");

            function r() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                l.default.dispatch({
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: e,
                    subsection: t,
                    ...n
                }), (0, s.pushLayer)(a.Layers.USER_SETTINGS)
            }
        },
        26092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var l = n("917351"),
                s = n.n(l),
                a = n("446674"),
                r = n("913144"),
                i = n("697218"),
                u = n("49111");
            let o = u.FormStates.CLOSED,
                d = null,
                c = null,
                f = {},
                h = {},
                _ = {},
                S = null,
                p = null,
                E = !1,
                T = !1,
                C = null,
                g = null,
                I = null,
                v = [],
                A = null,
                N = null;

            function m(e) {
                var t, n, l, s, a, r;
                let d = i.default.getCurrentUser();
                if (null == d) return M();
                c = null !== (t = e.section) && void 0 !== t ? t : c, A = null !== (n = e.section) && void 0 !== n ? n : c, null != e.subsection && null != c && (f[c] = e.subsection), null != e.scrollPosition && null != c && (h[c] = e.scrollPosition), T = !!e.openWithoutBackstack, o = u.FormStates.OPEN, _ = {}, p = {
                    ...S = {
                        [u.UserSettingsSections.ACCOUNT]: {
                            userId: d.id,
                            username: d.username,
                            discriminator: d.discriminator,
                            email: d.email,
                            avatar: d.avatar,
                            password: "",
                            newPassword: null,
                            claimed: d.isClaimed()
                        }
                    }
                }, g = null !== (l = e.onClose) && void 0 !== l ? l : null, I = null !== (s = e.analyticsLocation) && void 0 !== s ? s : null, v = null !== (a = e.analyticsLocations) && void 0 !== a ? a : [], N = null !== (r = e.impressionSource) && void 0 !== r ? r : null
            }

            function M() {
                o = u.FormStates.CLOSED, E = !1, S = null, A = null, p = null, d = null, c = null, f = {}, h = {}, g = null, I = null, v = [], N = null
            }

            function O() {
                o = u.FormStates.OPEN, _ = {}
            }
            class R extends a.default.Store {
                initialize() {
                    this.waitFor(i.default)
                }
                hasChanges() {
                    return null != p && null != S && (!!this.isOpen() || C === u.DrawerTabTypes.USER_SETTINGS) && !s.isEqual(p, S)
                }
                isOpen() {
                    return E
                }
                getPreviousSection() {
                    return d
                }
                getSection() {
                    return c
                }
                getSubsection() {
                    return null != c ? f[c] : null
                }
                getScrollPosition() {
                    return null != c ? h[c] : null
                }
                shouldOpenWithoutBackstack() {
                    return T
                }
                getProps() {
                    return {
                        submitting: o === u.FormStates.SUBMITTING,
                        section: c,
                        subsection: null != c ? f[c] : null,
                        scrollPosition: null != c ? h[c] : null,
                        settings: p,
                        errors: _,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: T,
                        analyticsLocation: I,
                        analyticsLocations: v,
                        initialSection: A,
                        impressionSource: N
                    }
                }
                get onClose() {
                    return g
                }
            }
            R.displayName = "UserSettingsModalStore";
            var x = new R(r.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    E = !0, m(e)
                },
                USER_SETTINGS_MODAL_INIT: m,
                USER_SETTINGS_MODAL_CLOSE: M,
                LOGOUT: M,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    o = u.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (o !== u.FormStates.SUBMITTING) return !1;
                    o = u.FormStates.OPEN, c = u.UserSettingsSections.ACCOUNT, _ = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    d = c, c = e.section, I = null, v = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (f[c] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete f[t] : null != c && delete f[c]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete h[t] : null != c && delete h[c]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    let {
                        settings: t
                    } = e;
                    null == p && (p = {});
                    let n = p[u.UserSettingsSections.ACCOUNT];
                    p[u.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: O,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = i.default.getCurrentUser();
                    O(), null != e && (p = {
                        ...S = {
                            [u.UserSettingsSections.ACCOUNT]: {
                                userId: e.id,
                                username: e.username,
                                discriminator: e.discriminator,
                                email: e.email,
                                avatar: e.avatar,
                                password: "",
                                newPassword: null,
                                claimed: e.isClaimed()
                            }
                        }
                    })
                },
                DRAWER_SELECT_TAB: function(e) {
                    return C = e.tab, null == c && C === u.DrawerTabTypes.USER_SETTINGS && m({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return r
                },
                useUID: function() {
                    return i
                },
                UID: function() {
                    return u
                }
            });
            var l = n("995008"),
                s = n.n(l),
                a = n("775560");
            let r = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return s(e)
                },
                i = () => (0, a.useLazyValue)(() => r()),
                u = e => {
                    let {
                        children: t
                    } = e;
                    return t(i())
                }
        },
        328275: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("75196");

            function a(e) {
                let {
                    width: t = 32,
                    height: n = 32,
                    color: a = "currentColor",
                    ...r
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(r),
                    width: t,
                    height: n,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    children: [(0, l.jsx)("clipPath", {
                        children: (0, l.jsx)("path", {
                            d: "m.000183 0h16v16h-16z"
                        })
                    }), (0, l.jsx)("g", {
                        clipPath: "url(#a)",
                        children: (0, l.jsx)("path", {
                            d: "m7.90039 1c-3.9 0-6.999999 3.1-6.999999 7s3.099999 7 6.999999 7c3.90001 0 7.00001-3.1 7.00001-7s-3.2-7-7.00001-7zm0 2.3c.8 0 1.6.3 2.30001.7l-6.40001 6.4c-.3-.7-.6-1.5-.6-2.4 0-2.6 2.1-4.7 4.7-4.7zm0 9.4c-.9 0-1.7-.3-2.4-.7l6.40001-6.4c.4.7.7 1.5.7 2.4-.1 2.6-2.2 4.7-4.70001 4.7z",
                            fill: a
                        })
                    })]
                })
            }
        },
        200639: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("469563"),
                a = n("397659"),
                r = n("75196"),
                i = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: a,
                        ...i
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            d: "M6.16204 15.0065C6.10859 15.0022 6.05455 15 6 15H4V12C4 7.588 7.589 4 12 4C13.4809 4 14.8691 4.40439 16.0599 5.10859L17.5102 3.65835C15.9292 2.61064 14.0346 2 12 2C6.486 2 2 6.485 2 12V19.1685L6.16204 15.0065Z",
                            fill: s
                        }), (0, l.jsx)("path", {
                            d: "M19.725 9.91686C19.9043 10.5813 20 11.2796 20 12V15H18C16.896 15 16 15.896 16 17V20C16 21.104 16.896 22 18 22H20C21.105 22 22 21.104 22 20V12C22 10.7075 21.7536 9.47149 21.3053 8.33658L19.725 9.91686Z",
                            fill: s
                        }), (0, l.jsx)("path", {
                            d: "M3.20101 23.6243L1.7868 22.2101L21.5858 2.41113L23 3.82535L3.20101 23.6243Z",
                            className: a,
                            fill: s
                        })]
                    })
                }, a.HeadphonesSlashIcon)
        },
        849467: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("469563"),
                a = n("696675"),
                r = n("75196"),
                i = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: a,
                        ...i
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z",
                            className: a,
                            fill: s
                        }), (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z",
                            className: a,
                            fill: s
                        })]
                    })
                }, a.MicrophoneIcon)
        },
        97347: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("469563"),
                a = n("780624"),
                r = n("75196"),
                i = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: a,
                        ...i
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            d: "M6.7 11H5C5 12.19 5.34 13.3 5.9 14.28L7.13 13.05C6.86 12.43 6.7 11.74 6.7 11Z",
                            fill: s
                        }), (0, l.jsx)("path", {
                            d: "M9.01 11.085C9.015 11.1125 9.02 11.14 9.02 11.17L15 5.18V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 11.03 9.005 11.0575 9.01 11.085Z",
                            fill: s
                        }), (0, l.jsx)("path", {
                            d: "M11.7237 16.0927L10.9632 16.8531L10.2533 17.5688C10.4978 17.633 10.747 17.6839 11 17.72V22H13V17.72C16.28 17.23 19 14.41 19 11H17.3C17.3 14 14.76 16.1 12 16.1C11.9076 16.1 11.8155 16.0975 11.7237 16.0927Z",
                            fill: s
                        }), (0, l.jsx)("path", {
                            d: "M21 4.27L19.73 3L3 19.73L4.27 21L8.46 16.82L9.69 15.58L11.35 13.92L14.99 10.28L21 4.27Z",
                            className: a,
                            fill: s
                        })]
                    })
                }, a.MicrophoneSlashIcon)
        },
        155207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("469563"),
                a = n("811513"),
                r = n("75196"),
                i = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: a,
                        ...i
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            className: a,
                            fill: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, l.jsx)("path", {
                            className: a,
                            fill: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, l.jsx)("path", {
                            className: a,
                            fill: s,
                            d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                        }), (0, l.jsx)("path", {
                            className: a,
                            fill: s,
                            d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                        })]
                    })
                }, a.GroupIcon)
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("469563"),
                a = n("287083"),
                r = n("75196"),
                i = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: s = "currentColor",
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, r.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: s
                        })
                    })
                }, a.StageIcon)
        },
        823050: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var l, s, a = n("37983"),
                r = n("884691"),
                i = n("414456"),
                u = n.n(i),
                o = n("77078"),
                d = n("200639"),
                c = n("97347"),
                f = n("587974"),
                h = n("989769");
            (l = s || (s = {}))[l.OUTGOING = 0] = "OUTGOING", l[l.INCOMING = 1] = "INCOMING";
            class _ extends r.PureComponent {
                renderStatus() {
                    let {
                        muted: e,
                        deafen: t
                    } = this.props, n = t ? d.default : c.default;
                    return e || t ? (0, a.jsx)(n, {
                        className: h.status
                    }, "status") : null
                }
                renderBorder() {
                    let {
                        speaking: e
                    } = this.props;
                    return (0, a.jsx)("div", {
                        className: u(h.border, {
                            [h.speaking]: e
                        })
                    }, "border")
                }
                renderMask() {
                    let {
                        muted: e,
                        speaking: t,
                        deafen: n
                    } = this.props;
                    return e && t ? (0, a.jsxs)(a.Fragment, {
                        children: [this.renderBorder(), this.renderStatus()]
                    }) : e || n ? (0, a.jsx)(a.Fragment, {
                        children: this.renderStatus()
                    }) : (0, a.jsx)(a.Fragment, {
                        children: this.renderBorder()
                    })
                }
                renderVoiceCallAvatar() {
                    let {
                        src: e,
                        disabled: t,
                        ringing: n,
                        ringingType: l,
                        avatarClassName: r,
                        muted: i,
                        deafen: d,
                        size: c,
                        renderIcon: _
                    } = this.props, S = (0, o.getAvatarSize)(c), p = (0, a.jsx)("img", {
                        src: e,
                        alt: " ",
                        className: u(h.voiceAvatar, r, {
                            [h.ringingOutgoing]: n && l === s.OUTGOING
                        })
                    });
                    if (t) return p;
                    let E = f.MaskIDs.AVATAR_DEFAULT;
                    return null != _ ? E = c === o.AvatarSizes.SIZE_32 ? f.MaskIDs.AVATAR_CALL_ICON_32 : f.MaskIDs.AVATAR_CALL_ICON : (i || d) && (E = f.MaskIDs.AVATAR_VOICE_CALL_80), (0, a.jsxs)("div", {
                        className: h.callAvatarMaskContainer,
                        children: [(0, a.jsxs)(f.default, {
                            className: h.callAvatarMask,
                            width: S,
                            height: S,
                            mask: E,
                            children: [null == _ ? void 0 : _(), p]
                        }), this.renderMask()]
                    })
                }
                render() {
                    let {
                        size: e,
                        onClick: t,
                        style: n,
                        onContextMenu: l,
                        className: r,
                        ringingType: i,
                        ringing: d
                    } = this.props, c = u(h.wrapper, {
                        [h.clickable]: null != t,
                        [h.ringingOutgoing]: d && i === s.OUTGOING,
                        [h.ringingIncoming]: d && i === s.INCOMING
                    }, r), f = (0, o.getAvatarSize)(e), _ = {
                        height: f,
                        width: f,
                        ...n
                    };
                    return (0, a.jsx)("div", {
                        style: _,
                        onContextMenu: l,
                        className: c,
                        children: this.renderVoiceCallAvatar()
                    })
                }
            }
            _.defaultProps = {
                size: o.AvatarSizes.SIZE_80,
                ringingType: s.OUTGOING,
                speaking: !1,
                soundsharing: !1,
                ringing: !1,
                muted: !1,
                deafen: !1,
                hasVideo: !1,
                mirror: !1,
                disabled: !1,
                paused: !1
            }, _.RingingType = s;
            var S = _
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return a
                }
            });
            var l = n("917351"),
                s = n.n(l);
            let a = e => "function" == typeof e ? e() : e;
            s.curry((e, t, n) => a(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let l, s;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("697218"),
                r = n("615931");
            let i = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                l = e.showModal, i = e.updateModalProps, s = n("551042").closeModal
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: a,
                    modalProps: r = {},
                    hooks: {
                        onEarlyClose: u
                    } = {}
                } = e;
                if (null == l) {
                    null == u || u();
                    return
                }
                let d = l(_, c, r);

                function c() {
                    null == u || u()
                }

                function f(e) {
                    s(d), n(e)
                }

                function h(e) {
                    s(d), a(e)
                }

                function _(e) {
                    return i(d, _, c, {
                        ...r,
                        isLoading: !0
                    }), o({
                        promiseFn: t,
                        resolve: f,
                        reject: h,
                        code: e,
                        mfaCodeHandler: S,
                        isModalOpen: !0
                    })
                }

                function S(e) {
                    let {
                        res: t
                    } = e;
                    i(d, _, c, {
                        ...r,
                        error: t.body.message
                    })
                }
            }

            function o(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: l,
                    code: s,
                    mfaCodeHandler: a = u,
                    isModalOpen: r = !1,
                    ...i
                } = e;
                return t(null != s ? {
                    code: s
                } : {}).then(n, e => {
                    var s, u;
                    if (s = e, u = r, s.body && 60008 === s.body.code || u && 429 === s.status) return a({
                        promiseFn: t,
                        resolve: n,
                        reject: l,
                        res: e,
                        ...i
                    });
                    l(e)
                })
            }

            function d(e, t) {
                var n, l;
                let {
                    checkEnabled: s = null !== (l = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== l && l,
                    ...i
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, r.resolveThunk)(s) ? u : o)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...i
                    })
                })
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return i
                },
                updateModalProps: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("551042"),
                a = n("920636");
            let r = (e, t, n) => function(s) {
                return (0, l.jsx)(a.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...s
                })
            };

            function i(e, t, n) {
                return (0, s.openModal)(r(e, t, n), {
                    onCloseCallback: t
                })
            }

            function u(e, t, n, l) {
                return (0, s.updateModal)(e, r(t, n, l))
            }
        }
    }
]);