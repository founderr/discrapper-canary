(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["57060"], {
        78349: function(e, t, n) {
            "use strict";
            n("424973"), e.exports.parse = function(e) {
                var t = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!t) return null;
                t.shift();
                var n = null,
                    r = [];
                t[2] && (n = (a = t[2].split("-")).shift(), r = a);
                var i = [];
                t[5] && (i = t[5].split("-")).shift();
                var s = [];
                if (t[6]) {
                    (a = t[6].split("-")).shift();
                    for (var a, l, o = []; a.length;) {
                        var u = a.shift();
                        1 === u.length ? l ? (s.push({
                            singleton: l,
                            extension: o
                        }), l = u, o = []) : l = u : o.push(u)
                    }
                    s.push({
                        singleton: l,
                        extension: o
                    })
                }
                var d = [];
                t[7] && ((d = t[7].split("-")).shift(), d.shift());
                var c = [];
                return t[8] && (c = t[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: n,
                            extlang: r
                        },
                        script: t[3] || null,
                        region: t[4] || null,
                        variant: i,
                        extension: s,
                        privateuse: d
                    },
                    privateuse: c,
                    grandfathered: {
                        irregular: t[0] || null,
                        regular: t[1] || null
                    }
                }
            }
        },
        448105: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    r = e.length;
                if (r > n) return !1;
                if (r === n) return e === t;
                e: for (var i = 0, s = 0; i < r; i++) {
                    for (var a = e.charCodeAt(i); s < n;)
                        if (t.charCodeAt(s++) === a) continue e;
                    return !1
                }
                return !0
            }
        },
        310013: function(e, t, n) {
            "use strict";
            var r = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                i = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                s = "function" == typeof Object.getOwnPropertySymbols;
            e.exports = function(e, t, n) {
                if ("string" != typeof t) {
                    var a = Object.getOwnPropertyNames(t);
                    s && (a = a.concat(Object.getOwnPropertySymbols(t)));
                    for (var l = 0; l < a.length; ++l)
                        if (!r[a[l]] && !i[a[l]] && (!n || !n[a[l]])) try {
                            e[a[l]] = t[a[l]]
                        } catch (e) {}
                }
                return e
            }
        },
        280968: function(e, t, n) {
            "use strict";
            e.exports = n.p + "21776a8b4fe8087b0bdc.svg"
        },
        144824: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4cbb7212cd1c94d49cdf.svg"
        },
        686570: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4cbb7212cd1c94d49cdf.svg"
        },
        669200: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a426a3ae492eb54ac0f0.svg"
        },
        479125: function(e, t, n) {
            "use strict";
            e.exports = n.p + "2d8dac1dbbc8278bfa86.svg"
        },
        945439: function(e, t, n) {
            "use strict";
            e.exports = n.p + "60e64ec1e28c734051d0.svg"
        },
        465312: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e5fb2c858f851f61c32e.svg"
        },
        405932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                s = n("135898"),
                a = function(e) {
                    let {
                        message: t
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: s.warnBlock,
                        children: [(0, r.jsx)("div", {
                            className: s.warnIcon
                        }), (0, r.jsx)(i.Text, {
                            className: s.warnText,
                            variant: "text-sm/normal",
                            children: t
                        })]
                    })
                }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                s = n("414456"),
                a = n.n(s),
                l = n("77078"),
                o = n("782340"),
                u = n("347129");
            class d extends i.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: s,
                        error: d,
                        isLoading: c,
                        maxLength: f,
                        transitionState: E,
                        helpMessage: _,
                        retryPrompt: I,
                        retrySuccessMessage: p
                    } = this.props, {
                        code: h,
                        errorMessage: R,
                        retrySuccess: m
                    } = this.state, S = i.Children.count(s) > 0 ? (0, r.jsx)(l.Card, {
                        type: l.Card.Types.WARNING,
                        className: u.card,
                        children: (0, r.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: s
                        })
                    }) : null, C = null != I ? (0, r.jsxs)(l.Text, {
                        className: a(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, r.jsx)("br", {}), (0, r.jsx)(l.Clickable, {
                            className: a(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, r.jsx)(l.Anchor, {
                                children: I
                            })
                        })]
                    }) : null, T = m ? (0, r.jsx)(l.Card, {
                        type: l.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, r.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: p
                        })
                    }) : null;
                    return (0, r.jsx)(l.ModalRoot, {
                        transitionState: E,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(l.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(l.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, r.jsxs)(l.ModalContent, {
                                children: [null != _ ? (0, r.jsx)(l.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: _
                                }) : null, S, T, (0, r.jsxs)(l.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, r.jsx)(l.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != f ? f : 10,
                                        value: h,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(l.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != d ? d : R
                                    }) : null, C]
                                })]
                            }), (0, r.jsxs)(l.ModalFooter, {
                                children: [(0, r.jsx)(l.Button, {
                                    type: "submit",
                                    disabled: c || 0 === h.length,
                                    children: null != n ? n : o.default.Messages.CONFIRM
                                }), (0, r.jsx)(l.Button, {
                                    onClick: this.handleCancel,
                                    disabled: c,
                                    look: l.Button.Looks.LINK,
                                    color: l.Button.Colors.PRIMARY,
                                    children: o.default.Messages.CANCEL
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
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? o.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : o.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? o.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : o.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
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
        763377: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleQuestionIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: a = "transparent",
                    secondaryColorClass: l = "",
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...d
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, s.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof a ? a : a.css,
                        className: l
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm-.281-16c-.981 0-1.812.473-2.269 1.14A1 1 0 1 1 7.8 7.01C8.638 5.786 10.095 5 11.719 5c2.495 0 4.656 1.885 4.656 4.375 0 2.103-1.542 3.775-3.524 4.243l.14.993a1 1 0 0 1-1.981.278l-.281-2a1 1 0 0 1 .99-1.139c1.544 0 2.656-1.137 2.656-2.375S13.263 7 11.719 7ZM13 17.875a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Z",
                        clipRule: "evenodd",
                        className: u
                    })]
                })
            }
        },
        457802: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MinusIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        stroke: "string" == typeof a ? a : a.css,
                        strokeLinecap: "round",
                        strokeWidth: "2",
                        d: "M21 12H3",
                        className: l
                    })
                })
            }
        },
        202909: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NitroWheelIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        className: l
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.252A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: l
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                        className: l
                    })]
                })
            }
        },
        424823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlusSmallIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        className: l
                    })
                })
            }
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("773336");
            async function i(e, t) {
                let {
                    default: i
                } = await n.el("572544").then(n.bind(n, "572544")), s = i(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != s) s(null);
                else if (r.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var r, i, s, a;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return r
                },
                BotTagTypes: function() {
                    return i
                }
            }), (s = r || (r = {}))[s.GAME = 1] = "GAME", s[s.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", s[s.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (a = i || (i = {}))[a.BOT = 0] = "BOT", a[a.SERVER = 1] = "SERVER", a[a.SYSTEM_DM = 2] = "SYSTEM_DM", a[a.OFFICIAL = 3] = "OFFICIAL", a[a.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", a[a.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", a[a.AI = 6] = "AI", a[a.REMIX = 7] = "REMIX"
        },
        903016: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("808653"), n("424973");
            var r = n("37983"),
                i = n("884691"),
                s = n("414456"),
                a = n.n(s),
                l = n("446674"),
                o = n("266491"),
                u = n("77078"),
                d = n("345116"),
                c = n("521012"),
                f = n("145131"),
                E = n("965397"),
                _ = n("423487"),
                I = n("782340"),
                p = n("47274");
            class h extends i.PureComponent {
                render() {
                    let {
                        onClose: e
                    } = this.props;
                    return (0, r.jsxs)(u.ModalHeader, {
                        separator: !1,
                        justify: f.default.Justify.BETWEEN,
                        children: [(0, r.jsx)(u.Heading, {
                            variant: "heading-md/semibold",
                            children: this.props.text
                        }), null != e ? (0, r.jsx)(u.ModalCloseButton, {
                            onClick: e
                        }) : null]
                    })
                }
            }

            function R(e) {
                let {
                    imageClass: t,
                    children: n,
                    error: i,
                    onDismissError: s
                } = e;
                return (0, r.jsxs)("div", {
                    className: p.content,
                    children: [(0, r.jsx)("div", {
                        className: a(p.image, t)
                    }), n, (0, r.jsx)(o.default, {
                        children: null != i ? (0, r.jsx)(E.default, {
                            className: p.error,
                            children: (0, r.jsx)(u.FormErrorBlock, {
                                onDismiss: s,
                                children: i.message
                            })
                        }) : null
                    })]
                })
            }
            let m = e => {
                let {
                    canceledCount: t
                } = e, n = (0, l.useStateFromStores)([c.default], () => c.default.getPremiumTypeSubscription());
                return null == n ? null : (0, r.jsxs)("div", {
                    className: p.pendingCancellation,
                    children: [(0, r.jsx)(_.default, {
                        className: p.pendingCancellationIcon
                    }), (0, r.jsx)(u.Text, {
                        variant: "text-md/normal",
                        className: p.pendingCancellationMessage,
                        children: I.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CANCEL_WARNING.format({
                            date: n.currentPeriodEnd,
                            canceledCount: t
                        })
                    })]
                })
            };

            function S(e) {
                let {
                    imageClass: t,
                    blurb: n,
                    guild: i,
                    warning: s,
                    error: a,
                    onDismissError: l,
                    slotCount: o = 1,
                    canceledCount: c = 0
                } = e;
                return (0, r.jsxs)(R, {
                    imageClass: t,
                    error: a,
                    onDismissError: l,
                    children: [(0, r.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: n
                    }), (0, r.jsx)(d.default, {
                        className: p.guildCard,
                        guild: i,
                        subscriptionChange: o
                    }), (0, r.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: s
                    }), c > 0 ? (0, r.jsx)(m, {
                        canceledCount: c
                    }) : null]
                })
            }
            class C extends i.PureComponent {
                render() {
                    let {
                        confirmation: e,
                        confirmationLabel: t,
                        isModifyingSubscription: n,
                        onConfirm: i,
                        onCancel: s
                    } = this.props;
                    return (0, r.jsxs)(u.ModalFooter, {
                        children: [(0, r.jsx)(u.Button, {
                            onClick: i,
                            submitting: n,
                            "aria-label": t,
                            children: e
                        }), (0, r.jsx)(u.Button, {
                            look: u.Button.Looks.LINK,
                            color: u.Button.Colors.PRIMARY,
                            onClick: s,
                            disabled: n,
                            children: I.default.Messages.CANCEL
                        })]
                    })
                }
            }
            class T extends i.PureComponent {
                render() {
                    let {
                        guild: e,
                        header: t,
                        blurb: n,
                        warning: s,
                        confirmation: a,
                        confirmationLabel: l,
                        imageClass: o,
                        error: d,
                        isModifyingSubscription: c,
                        onConfirm: f,
                        onCancel: E,
                        onDismissError: _,
                        canceledCount: I
                    } = this.props;
                    return (0, r.jsxs)(i.Fragment, {
                        children: [(0, r.jsx)(h, {
                            text: t
                        }), (0, r.jsx)(u.ModalContent, {
                            children: (0, r.jsx)(S, {
                                guild: e,
                                blurb: n,
                                warning: s,
                                imageClass: o,
                                error: d,
                                onDismissError: _,
                                canceledCount: I
                            })
                        }), (0, r.jsx)(C, {
                            confirmation: a,
                            confirmationLabel: l,
                            isModifyingSubscription: c,
                            onConfirm: f,
                            onCancel: E
                        })]
                    })
                }
            }
            T.Header = h, T.ApplyBody = S, T.TransferBody = function(e) {
                var t, n;
                let {
                    imageClass: s,
                    blurb: a,
                    fromGuilds: l,
                    toGuild: o,
                    error: c,
                    onDismissError: f,
                    slotCount: E = 1,
                    canceledCount: _ = 0
                } = e, h = i.useRef(l), S = null === (t = h.current) || void 0 === t ? void 0 : t.length, C = null === (n = h.current) || void 0 === n ? void 0 : n.reduce((e, t) => (!e.hasOwnProperty(t.id) && (e[t.id] = []), e[t.id].push(t), e), {});
                return (0, r.jsxs)(R, {
                    imageClass: s,
                    error: c,
                    onDismissError: f,
                    children: [(0, r.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: a
                    }), (0, r.jsx)(u.Text, {
                        variant: "text-xs/bold",
                        className: p.transferGuildCardHeader,
                        children: I.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_FROM_GUILD.format({
                            guildCount: S
                        })
                    }), null != C ? Object.keys(C).map(e => (0, r.jsx)(d.default, {
                        className: p.transferFromGuildCard,
                        guild: C[e][0],
                        subscriptionChange: -1 * C[e].length
                    }, e)) : null, (0, r.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        className: p.transferGuildCardHeader,
                        children: I.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_TO_GUILD.format({
                            slotCount: E
                        })
                    }), (0, r.jsx)("div", {
                        className: p.activeTransferGuildCardBorder,
                        children: (0, r.jsx)(d.default, {
                            className: p.transferToGuildCard,
                            guild: o,
                            subscriptionChange: null != l ? l.length : 1
                        })
                    }), _ > 0 ? (0, r.jsx)(m, {
                        canceledCount: _
                    }) : null]
                })
            }, T.Footer = C;
            var g = T
        },
        247760: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Steps: function() {
                    return r
                },
                default: function() {
                    return L
                }
            }), n("222007");
            var r, i, s = n("37983"),
                a = n("884691"),
                l = n("627445"),
                o = n.n(l),
                u = n("446674"),
                d = n("77078"),
                c = n("583367"),
                f = n("735201"),
                E = n("305961"),
                _ = n("625634"),
                I = n("751433"),
                p = n("599110"),
                h = n("427459"),
                R = n("903016"),
                m = n("936992"),
                S = n("658206"),
                C = n("49111"),
                T = n("782340"),
                g = n("822841");
            (i = r || (r = {})).UNUSED_QUANTITY_SELECT = "UNUSED_QUANTITY_SELECT", i.GUILD_SELECT = "GUILD_SELECT", i.CONFIRM = "CONFIRM", i.SUCCESS = "SUCCESS";
            var L = e => {
                var t, n;
                let {
                    guildBoostSlots: r,
                    selectedGuild: i,
                    locationSection: l,
                    transitionState: L,
                    onClose: N
                } = e, A = (0, h.getAvailableGuildBoostSlots)(_.default.boostSlots);
                o(null != r || null != i, "Must either provide slots or an initial selected guild"), o(!(null == r ? void 0 : r.some(e => e.isOnCooldown())), "If slots are provided, they must not be on cooldown");
                let O = [null == r ? "UNUSED_QUANTITY_SELECT" : null, null == i ? "GUILD_SELECT" : null, "CONFIRM", "SUCCESS"].filter(e => null != e),
                    [v, M] = (0, u.useStateFromStoresArray)([f.default], () => [f.default.isModifyingAppliedBoost, f.default.applyBoostError]),
                    [x, U] = a.useState(""),
                    [D, P] = a.useState(O[0]),
                    [y, B] = a.useState(!1),
                    [F, G] = a.useState(i),
                    [b, j] = a.useState(null != r ? r : A.slice(0, 1)),
                    w = a.useMemo(() => null == b ? [] : b.map(e => {
                        let {
                            premiumGuildSubscription: t
                        } = e;
                        return E.default.getGuild(null == t ? void 0 : t.guildId)
                    }).filter(e => null != e), [b]),
                    V = a.useMemo(() => {
                        var e;
                        return (null == b ? void 0 : null === (e = b[0]) || void 0 === e ? void 0 : e.premiumGuildSubscription) != null
                    }, [b]),
                    H = () => {
                        N("SUCCESS" === D), p.default.track(C.AnalyticEvents.MODAL_DISMISSED, {
                            type: C.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                            location_section: l
                        })
                    },
                    k = {
                        UNUSED_QUANTITY_SELECT: {
                            body: () => (o(!(null == r && 0 === A.length), "Cannot provide no slots if there are no other available slots"), (0, s.jsxs)("div", {
                                className: g.quantitySelectorBody,
                                children: [(0, s.jsx)(d.Heading, {
                                    variant: "heading-md/semibold",
                                    className: g.quantitySelectorHeader,
                                    children: T.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_HEADER
                                }), (0, s.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    className: g.quantitySelectorDescription,
                                    children: T.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_DESCRIPTION
                                }), (0, s.jsxs)("div", {
                                    className: g.quantitySelectorWrapper,
                                    children: [(0, s.jsx)(I.default, {
                                        value: b.length,
                                        onChange: e => j(A.slice(0, e)),
                                        minValue: 1,
                                        maxValue: A.length
                                    }), (0, s.jsx)(d.Text, {
                                        className: g.quantitySelectorLabel,
                                        variant: "text-md/normal",
                                        children: T.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_COUNTER
                                    })]
                                })]
                            })),
                            footer: () => (0, s.jsxs)(d.ModalFooter, {
                                children: [(0, s.jsx)(d.Button, {
                                    onClick: () => P("CONFIRM"),
                                    children: T.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_NEXT
                                }), (0, s.jsx)(d.Button, {
                                    look: d.Button.Looks.LINK,
                                    color: d.Button.Colors.PRIMARY,
                                    onClick: H,
                                    children: T.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_CANCEL
                                })]
                            })
                        },
                        GUILD_SELECT: {
                            header: () => (0, s.jsx)(m.GuildSelectModalHeader, {
                                isTransfer: V,
                                query: x,
                                setQuery: U
                            }),
                            bodyClass: g.selectContent,
                            body: () => (0, s.jsx)(m.GuildSelectModalBody, {
                                onClose: H,
                                onSelectGuild: e => {
                                    G(e), P("CONFIRM")
                                },
                                isTransfer: V,
                                selectedSlotGuilds: w,
                                query: x
                            })
                        },
                        CONFIRM: {
                            body() {
                                if (null == F) return null;
                                let e = b.filter(e => (0, h.isGuildBoostSlotCanceled)(e)).length,
                                    t = b.length,
                                    n = w.length;
                                return V ? (0, s.jsx)(R.default.TransferBody, {
                                    fromGuilds: w,
                                    toGuild: F,
                                    blurb: T.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_BLURB.format({
                                        slotCount: t,
                                        guildCount: n
                                    }),
                                    imageClass: g.transferConfirmImage,
                                    error: y ? M : null,
                                    onDismissError: () => B(!1),
                                    slotCount: t,
                                    canceledCount: e
                                }) : (0, s.jsx)(R.default.ApplyBody, {
                                    guild: F,
                                    blurb: T.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_BLURB,
                                    warning: T.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_COOLDOWN_WARNING.format({
                                        days: C.GUILD_BOOST_APPLY_COOLDOWN_DAYS,
                                        slotCount: t
                                    }),
                                    imageClass: g.confirmImage,
                                    error: y ? M : null,
                                    onDismissError: () => B(!1),
                                    slotCount: t,
                                    canceledCount: e
                                })
                            },
                            footer() {
                                let e = b.length,
                                    t = "CONFIRM" === O[0] ? H : () => P(O[O.indexOf(D) - 1]),
                                    n = async () => {
                                        if (null != F && (null == b ? void 0 : b.length) !== 0) {
                                            o(!b.some(e => e.isOnCooldown()), "Cannot use a premium guild subscription slot while on cooldown");
                                            try {
                                                await Promise.all(b.map(e => {
                                                    let {
                                                        premiumGuildSubscription: t
                                                    } = e;
                                                    return null != t ? (0, c.unapplyFromGuild)(t.guildId, t.id) : Promise.resolve()
                                                })), await (0, c.applyToGuild)(F.id, b.map(e => {
                                                    let {
                                                        id: t
                                                    } = e;
                                                    return t
                                                })), P("SUCCESS")
                                            } catch (e) {
                                                B(!0)
                                            }
                                        }
                                    };
                                return (0, s.jsx)(R.default.Footer, {
                                    confirmation: V ? T.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION.format({
                                        slotCount: e
                                    }) : T.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION.format({
                                        slotCount: e
                                    }),
                                    confirmationLabel: V ? T.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION_LABEL.format({
                                        slotCount: e
                                    }) : T.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION_LABEL.format({
                                        slotCount: e
                                    }),
                                    onConfirm: n,
                                    onCancel: t,
                                    isModifyingSubscription: v
                                })
                            }
                        },
                        SUCCESS: {
                            body: () => (0, s.jsx)(S.GuildBoostingConfirmation, {
                                guild: F,
                                isTransfer: V,
                                guildBoostQuantity: b.length,
                                onClose: H
                            })
                        }
                    };
                a.useEffect(() => {
                    p.default.track(C.AnalyticEvents.OPEN_MODAL, {
                        type: C.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                        location_section: l
                    })
                }, [l]);
                let W = k[D];
                return (0, s.jsxs)(d.ModalRoot, {
                    transitionState: L,
                    className: g.modal,
                    size: d.ModalSize.SMALL,
                    children: [null === (t = W.header) || void 0 === t ? void 0 : t.call(W), (0, s.jsx)(d.ModalContent, {
                        className: W.bodyClass,
                        children: (0, s.jsx)(d.Sequencer, {
                            step: D,
                            steps: O,
                            children: W.body()
                        })
                    }), null === (n = W.footer) || void 0 === n ? void 0 : n.call(W), (0, s.jsx)(d.ModalCloseButton, {
                        className: g.modalCloseButton,
                        onClick: H
                    })]
                })
            }
        },
        936992: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildSelectModalHeader: function() {
                    return S
                },
                GuildSelectModalBody: function() {
                    return C
                },
                default: function() {
                    return T
                }
            }), n("808653"), n("424973"), n("222007");
            var r = n("37983"),
                i = n("884691"),
                s = n("448105"),
                a = n.n(s),
                l = n("446674"),
                o = n("77078"),
                u = n("54239"),
                d = n("393414"),
                c = n("334811"),
                f = n("305961"),
                E = n("677099"),
                _ = n("476263"),
                I = n("810567"),
                p = n("427459"),
                h = n("49111"),
                R = n("782340"),
                m = n("109396");

            function S(e) {
                let {
                    isTransfer: t = !1,
                    setQuery: n,
                    query: i
                } = e;
                return (0, r.jsxs)(o.ModalHeader, {
                    className: m.selectHeaderContainer,
                    children: [(0, r.jsx)(o.Heading, {
                        className: m.selectHeader,
                        variant: "heading-md/semibold",
                        children: t ? R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_TRANSFER_HEADER : R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_HEADER
                    }), (0, r.jsx)(I.default, {
                        size: I.default.Sizes.MEDIUM,
                        placeholder: R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
                        "aria-label": R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
                        className: m.selectSearch,
                        query: i,
                        onChange: n,
                        onClear: () => n("")
                    })]
                })
            }

            function C(e) {
                let {
                    isTransfer: t = !1,
                    selectedSlotGuilds: n,
                    onClose: i,
                    onSelectGuild: s,
                    query: I
                } = e, S = (0, l.useStateFromStores)([E.default], () => E.default.getFlattenedGuildIds()), C = (0, l.useStateFromStoresArray)([f.default], () => S.reduce((e, t) => {
                    let r = f.default.getGuild(t);
                    return null == r || null != n && n.some(e => e.id === t) ? e : ((I.length <= 0 || a(I.toLowerCase(), null == r ? void 0 : r.name.toLowerCase())) && e.push(r), e)
                }, [])), {
                    enabled: T
                } = c.default.useExperiment({
                    location: "5f417c_1"
                }, {
                    autoTrackExposure: !0
                });

                function g() {
                    i(), (0, u.popLayer)(), (0, d.transitionTo)(h.Routes.GUILD_DISCOVERY)
                }
                return (0, r.jsxs)(r.Fragment, {
                    children: [0 === C.length && (0, r.jsx)("div", {
                        className: m.emptyStateWrapper,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: 0 === S.length ? R.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_NON_GUILD_MEMBER.format({
                                publicGuildDirectoryHook: (e, t) => (0, r.jsx)(o.Clickable, {
                                    onClick: g,
                                    tag: "a",
                                    children: e
                                }, t)
                            }) : R.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_GUILD_NOT_FOUND
                        })
                    }), C.map(e => (0, r.jsxs)(o.Clickable, {
                        className: m.selectGuild,
                        onClick: () => {
                            s(e)
                        },
                        children: [(0, r.jsx)(_.default, {
                            className: m.selectGuildIcon,
                            guild: e,
                            size: _.default.Sizes.SMALL
                        }), (0, r.jsxs)("div", {
                            className: m.selectGuildCopy,
                            children: [(0, r.jsx)(o.Text, {
                                className: m.selectGuildName,
                                variant: "text-md/normal",
                                children: e.name
                            }), T && (0, r.jsx)(o.Text, {
                                className: m.selectGuildLevel,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: (0, p.getTierName)(e.premiumTier)
                            })]
                        }), T && (0, r.jsx)(o.Text, {
                            className: m.selectGuildPseudoCta,
                            color: "always-white",
                            variant: "text-sm/medium",
                            children: t ? R.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_HERE : R.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
                        })]
                    }, e.id))]
                })
            }

            function T(e) {
                let {
                    onClose: t,
                    onSelectGuild: n,
                    transitionState: s
                } = e, [a, l] = i.useState("");
                return (0, r.jsxs)(o.ModalRoot, {
                    transitionState: s,
                    className: m.modal,
                    size: o.ModalSize.SMALL,
                    children: [(0, r.jsx)(S, {
                        query: a,
                        setQuery: l
                    }), (0, r.jsx)(o.ModalContent, {
                        className: m.modalContent,
                        children: (0, r.jsx)(C, {
                            onClose: t,
                            onSelectGuild: n,
                            query: a
                        })
                    }), (0, r.jsx)(o.ModalCloseButton, {
                        className: m.modalCloseButton,
                        onClick: t
                    })]
                })
            }
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var r = n("872717"),
                i = n("913144"),
                s = n("479756"),
                a = n("38654"),
                l = n("9294"),
                o = n("26989"),
                u = n("337543"),
                d = n("697218"),
                c = n("49111");
            let f = async (e, t) => {
                let n = null != t ? t : u.default.getInviteKeyForGuildId(e),
                    s = d.default.getCurrentUser(),
                    a = !o.default.isMember(e, null == s ? void 0 : s.id);
                try {
                    let t = await r.default.get({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: a,
                            invite_code: null != n ? (0, l.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: s
                    } = t;
                    return i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: s.version,
                            description: s.description,
                            formFields: s.form_fields,
                            guild: s.guild
                        }
                    }), s
                } catch (t) {
                    i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, E = async (e, t) => {
                let n = await r.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: s
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: s.version,
                        description: s.description,
                        formFields: s.form_fields
                    }
                })
            }, _ = async (e, t) => {
                let n = await r.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: s
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: s.version,
                        description: s.description,
                        formFields: s.form_fields
                    }
                })
            }, I = async (e, t) => {
                await r.default.patch({
                    url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, p = async (e, t) => {
                if (a.default.isFullServerPreview(e)) {
                    (0, s.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await r.default.put({
                            url: c.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: s
                        } = n;
                    return i.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: s
                    }), s
                } catch (e) {
                    throw e
                }
            };
            var h = {
                fetchVerificationForm: f,
                updateVerificationForm: E,
                updateVerificationFormDescription: _,
                enableVerificationForm: I,
                submitVerificationForm: p
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return s
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return a
                },
                MAX_FORM_ELEMENTS: function() {
                    return l
                },
                MAX_NUM_RULES: function() {
                    return o
                },
                MAX_RULE_LENGTH: function() {
                    return u
                },
                MAX_QUESTION_LENGTH: function() {
                    return d
                },
                MAX_NUM_CHOICES: function() {
                    return c
                },
                MAX_CHOICE_LENGTH: function() {
                    return f
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return E
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return _
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return I
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return p
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return h
                }
            }), n("222007");
            var r, i = n("567054");
            i.VerificationFormFieldTypes.VERIFICATION;
            let s = new Set([i.VerificationFormFieldTypes.TERMS]),
                a = new Set([i.VerificationFormFieldTypes.MULTIPLE_CHOICE, i.VerificationFormFieldTypes.TEXT_INPUT, i.VerificationFormFieldTypes.PARAGRAPH]),
                l = 5,
                o = 16,
                u = 300,
                d = 300,
                c = 8,
                f = 150,
                E = 150,
                _ = 1e3,
                I = 300,
                p = "Membership Gating",
                h = "in-app-member-verification";
            (r || (r = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let r;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return i
                }
            }), r = n("453265").default;
            let i = r.openMemberVerificationModal;
            r.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return l
                },
                setHasUnsubmittedChanges: function() {
                    return o
                },
                setShowWarning: function() {
                    return u
                }
            });
            var r = n("308503"),
                i = n("659500"),
                s = n("49111");
            let a = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                l = (0, r.default)(e => a),
                o = e => {
                    l.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                u = e => {
                    l.setState({
                        shouldShowWarning: e
                    }), e && i.ComponentDispatch.dispatch(s.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                s = n("599110"),
                a = n("50926"),
                l = n("347977"),
                o = n("394294"),
                u = n("49111");
            let d = () => {
                    s.default.track(u.AnalyticEvents.MODAL_DISMISSED, {
                        type: o.MEMBER_VERIFICATION_TYPE
                    })
                },
                c = e => {
                    s.default.track(u.AnalyticEvents.OPEN_MODAL, {
                        type: o.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var f = {
                openMemberVerificationModal(e, t) {
                    c(e);
                    let s = async t => {
                        await a.default.submitVerificationForm(e, t)
                    };
                    (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, r.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: s,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (l.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, l.setShowWarning)(!0);
                                        return
                                    }
                                    d()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            d(), l.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, l.setShowWarning)(!0) : (0, i.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && d(), (0, i.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return R
                },
                updateImpersonating: function() {
                    return m
                },
                stopImpersonating: function() {
                    return S
                },
                updateImpersonatedChannels: function() {
                    return T
                },
                updateImpersonatedRoles: function() {
                    return g
                },
                updateImpersonatedData: function() {
                    return L
                }
            }), n("222007");
            var r = n("913144"),
                i = n("716241"),
                s = n("393414"),
                a = n("42203"),
                l = n("923959"),
                o = n("26989"),
                u = n("305961"),
                d = n("957255"),
                c = n("18494"),
                f = n("282109"),
                E = n("599110"),
                _ = n("38654"),
                I = n("507950"),
                p = n("49111"),
                h = n("724210");

            function R(e, t) {
                E.default.track(p.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === I.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), C(e)
            }

            function m(e, t) {
                let n = _.default.getData(e);
                null != n && n.type === t.type && (E.default.track(p.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === I.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), C(e))
            }

            function S(e) {
                r.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function C(e) {
                let t = c.default.getChannelId(e),
                    n = a.default.getChannel(t),
                    r = null != t && (0, h.isStaticChannelRoute)(t);
                if (!r && !d.default.can(p.Permissions.VIEW_CHANNEL, n)) {
                    let t = l.default.getDefaultChannel(e);
                    null != t && (0, s.transitionTo)(p.Routes.CHANNEL(e, t.id))
                }
            }

            function T(e, t, n) {
                let r = new Set(f.default.getOptedInChannels(e));
                t.forEach(e => r.add(e)), n.forEach(e => r.delete(e)), m(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    optInChannels: r
                })
            }

            function g(e, t) {
                let n = u.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...l.default.getSelectableChannelIds(e), ...l.default.getVocalChannelIds(e)],
                        r = Array.from(t);
                    l.default.addConditionalChangeListener(() => {
                        let t = o.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (r.some(e => !t.roles.includes(e))) return !0;
                        let i = [...l.default.getSelectableChannelIds(e), ...l.default.getVocalChannelIds(e)],
                            s = i.filter(e => !n.includes(e));
                        return s.length > 0 && T(e, s, []), !1
                    })
                }(e, t);
                let r = {};
                t.forEach(e => r[e] = n.roles[e]), m(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    roles: r
                })
            }

            function L(e, t) {
                m(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return a
                },
                generateInviteKeyFromExtraData: function() {
                    return l
                },
                parseExtraDataFromInviteKey: function() {
                    return o
                },
                parseInviteCodeFromInviteKey: function() {
                    return u
                }
            }), n("222007");
            var r = n("522632"),
                i = n("833858");
            let s = "event";

            function a(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = r.parse(t);
                        return (0, i.getFirstQueryStringValue)(e[s])
                    } catch (e) {
                        return
                    }
                }(t);
                return l({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function l(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(s, "=").concat(n)
            }

            function o(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let a = r.parse(n),
                    l = (0, i.getFirstQueryStringValue)(a[s]);
                return {
                    baseCode: t,
                    guildScheduledEventId: l
                }
            }

            function u(e) {
                let [t] = e.split("?");
                return t
            }
        },
        809071: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateSubscriptionInvoicePreview: function() {
                    return f
                },
                useSubscriptionInvoicePreview: function() {
                    return I
                },
                useGetSubscriptionInvoice: function() {
                    return p
                },
                getItemUnitPriceWithDiscount: function() {
                    return h
                }
            }), n("222007");
            var r = n("884691"),
                i = n("446674"),
                s = n("872717"),
                a = n("448993"),
                l = n("195358"),
                o = n("521012"),
                u = n("719923"),
                d = n("49111");
            async function c(e) {
                let {
                    items: t,
                    paymentSourceId: n,
                    trialId: r,
                    code: i,
                    applyEntitlements: o = !1,
                    currency: c,
                    renewal: f,
                    metadata: E
                } = e;
                t = (0, u.coerceExistingItemsToNewItemInterval)(t);
                let _ = {
                    items: t.map(e => {
                        let {
                            planId: t,
                            ...n
                        } = e;
                        return {
                            ...n,
                            plan_id: t
                        }
                    }),
                    payment_source_id: n,
                    trial_id: r,
                    code: i,
                    apply_entitlements: o,
                    currency: c,
                    renewal: f,
                    metadata: E
                };
                try {
                    let e = await s.default.post({
                        url: d.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
                        body: _,
                        oldFormErrors: !0
                    });
                    return l.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new a.BillingError(e)
                }
            }
            async function f(e) {
                let {
                    subscriptionId: t,
                    items: n,
                    paymentSourceId: r,
                    renewal: i,
                    currency: o,
                    applyEntitlements: c = !1,
                    analyticsLocations: f,
                    analyticsLocation: E
                } = e;
                null != n && (n = (0, u.coerceExistingItemsToNewItemInterval)(n));
                let _ = {
                    items: null == n ? void 0 : n.map(e => {
                        let {
                            planId: t,
                            ...n
                        } = e;
                        return {
                            ...n,
                            plan_id: t
                        }
                    }),
                    payment_source_id: r,
                    renewal: i,
                    apply_entitlements: c,
                    currency: o
                };
                try {
                    let e = await s.default.patch({
                        url: d.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(t),
                        query: {
                            location: E,
                            location_stack: f
                        },
                        body: _,
                        oldFormErrors: !0
                    });
                    return l.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new a.BillingError(e)
                }
            }
            async function E(e) {
                let {
                    subscriptionId: t,
                    preventFetch: n
                } = e;
                if (n) return null;
                let r = await s.default.get({
                    url: d.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
                    oldFormErrors: !0
                });
                return l.default.createInvoiceFromServer(r.body)
            }

            function _(e, t) {
                let {
                    preventFetch: n = !1
                } = e, [s, a] = (0, r.useState)(null), [l, u] = (0, r.useState)(null), d = (0, i.useStateFromStores)([o.default], () => o.default.getSubscriptions());
                return (0, r.useEffect)(() => {
                    let e = !1;
                    async function r() {
                        try {
                            u(null), a(null);
                            let n = await t();
                            !e && a(n)
                        } catch (t) {
                            !e && u(t)
                        }
                    }
                    return !n && r(), () => {
                        e = !0
                    }
                }, [n, t, d]), [s, l]
            }

            function I(e) {
                if ("subscriptionId" in e && null == e.subscriptionId) {
                    let {
                        subscriptionId: t,
                        ...n
                    } = e;
                    e = n
                }
                let t = (0, r.useCallback)(() => "subscriptionId" in e ? f(e) : "items" in e ? c(e) : null, [JSON.stringify(e)]);
                return _(e, t)
            }

            function p(e) {
                let t = (0, r.useCallback)(() => E(e), [JSON.stringify(e)]);
                return _(e, t)
            }

            function h(e) {
                let t = e.subscriptionPlanPrice;
                return e.discounts.forEach(n => {
                    let r = n.amount / e.quantity;
                    t -= r
                }), t
            }
        },
        179935: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchReferralsRemaining: function() {
                    return o
                },
                checkRecipientEligibility: function() {
                    return u
                },
                createReferralTrial: function() {
                    return d
                },
                resolveReferralTrialOffer: function() {
                    return c
                }
            });
            var r = n("872717"),
                i = n("913144"),
                s = n("819689"),
                a = n("18494"),
                l = n("49111");
            let o = () => (i.default.dispatch({
                    type: "BILLING_REFERRALS_REMAINING_FETCH_START"
                }), r.default.get({
                    url: l.Endpoints.GET_REFERRALS_REMAINING,
                    oldFormErrors: !0
                }).then(e => {
                    i.default.dispatch({
                        type: "BILLING_REFERRALS_REMAINING_FETCH_SUCCESS",
                        referrals_remaining: null != e.body && null != e.body.referrals_remaining ? e.body.referrals_remaining : 0,
                        sent_user_ids: null != e.body && null != e.body.sent_user_ids ? e.body.sent_user_ids : []
                    })
                }, () => {
                    i.default.dispatch({
                        type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL"
                    })
                })),
                u = e => (i.default.dispatch({
                    type: "BILLING_CREATE_REFERRAL_PREVIEW_START",
                    recipientId: e
                }), r.default.post({
                    url: l.Endpoints.CREATE_REFERRAL_PREVIEW(e),
                    oldFormErrors: !0
                }).then(t => {
                    i.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS",
                        recipientId: e,
                        is_eligible: null != t.body && t.body.is_eligible
                    })
                }, () => {
                    i.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_PREVIEW_FAIL",
                        recipientId: e
                    })
                }));
            async function d(e) {
                try {
                    var t;
                    let n = await r.default.post({
                            url: l.Endpoints.CREATE_REFERRAL(e),
                            oldFormErrors: !0
                        }),
                        s = null !== (t = n.body) && void 0 !== t ? t : null;
                    return i.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_SUCCESS",
                        userTrialOffer: s
                    }), {
                        userTrialOffer: s
                    }
                } catch (e) {
                    if (i.default.dispatch({
                            type: "BILLING_CREATE_REFERRAL_FAIL"
                        }), e.body.code === l.AbortCodes.INVALID_MESSAGE_SEND_USER) {
                        let t = a.default.getCurrentlySelectedChannelId();
                        null != t && s.default.sendClydeError(t, e.body.code)
                    }
                }
            }
            async function c(e) {
                try {
                    var t;
                    let n = await r.default.get({
                            url: l.Endpoints.REFERRAL_OFFER_ID_RESOLVE(e),
                            oldFormErrors: !0
                        }),
                        s = null !== (t = n.body) && void 0 !== t ? t : null;
                    return i.default.dispatch({
                        type: "BILLING_REFERRAL_RESOLVE_SUCCESS",
                        userTrialOffer: s
                    }), {
                        userTrialOffer: s
                    }
                } catch (t) {
                    i.default.dispatch({
                        type: "BILLING_REFERRAL_RESOLVE_FAIL",
                        userTrialOfferId: e
                    })
                }
            }
        },
        540692: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            }), n("222007");
            var r = n("637612"),
                i = n("446674"),
                s = n("913144"),
                a = n("697218"),
                l = n("179935"),
                o = n("49111");
            let u = null,
                d = {},
                c = [],
                f = new Set,
                E = !1,
                _ = new Set,
                I = new Set,
                p = {},
                h = 0,
                R = null,
                m = () => !0;

            function S(e) {
                _.add(e)
            }

            function C(e) {
                let {
                    messages: t
                } = e;
                t.forEach(e => T(e))
            }

            function T(e) {
                let t = e.type === r.MessageTypes.PREMIUM_REFERRAL ? e.content : null;
                if (null == t) return !1;
                if (!I.has(t) && !_.has(t)) {
                    var n;
                    n = t, _.add(n), s.default.wait(() => (0, l.resolveReferralTrialOffer)(t).catch(o.NOOP_NULL))
                }
            }
            class g extends i.default.Store {
                initialize() {
                    this.waitFor(a.default), this.syncWith([a.default], m)
                }
                checkAndFetchReferralsRemaining() {
                    null == u && !E && h < 5 && (null == R || R < Date.now()) && (0, l.fetchReferralsRemaining)()
                }
                getReferralsRemaining() {
                    return this.checkAndFetchReferralsRemaining(), u
                }
                getSentUserIds() {
                    return this.checkAndFetchReferralsRemaining(), null == c ? [] : c
                }
                isFetchingReferralsRemaining() {
                    return E
                }
                isFetchingRecipientEligibility(e) {
                    return f.has(e)
                }
                getRecipientEligibility(e) {
                    return void 0 === d[e] && !f.has(e) && (0, l.checkRecipientEligibility)(e), d[e]
                }
                getRelevantUserTrialOffer(e) {
                    return p[e]
                }
                isResolving(e) {
                    return _.has(e)
                }
            }
            g.displayName = "ReferralTrialStore";
            var L = new g(s.default, {
                BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function(e) {
                    let {
                        userTrialOfferId: t,
                        recipientId: n
                    } = e;
                    if (!E && (0, l.fetchReferralsRemaining)(), !f.has(n) && (0, l.checkRecipientEligibility)(n), !_.has(t)) {
                        var r;
                        r = t, _.add(r), s.default.wait(() => (0, l.resolveReferralTrialOffer)(t).catch(o.NOOP_NULL))
                    }
                },
                BILLING_REFERRALS_REMAINING_FETCH_START: function(e) {
                    let {} = e;
                    E = !0
                },
                BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function(e) {
                    let {
                        referrals_remaining: t,
                        sent_user_ids: n
                    } = e;
                    E = !1, u = t, c = n
                },
                BILLING_REFERRALS_REMAINING_FETCH_FAIL: function(e) {
                    let {} = e;
                    E = !1, h += 1, R = Date.now() + 1e3 * Math.pow(2, h)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_START: function(e) {
                    let {
                        recipientId: t
                    } = e;
                    f.add(t)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS: function(e) {
                    let {
                        recipientId: t,
                        is_eligible: n
                    } = e;
                    d[t] = n, f.delete(t)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_FAIL: function(e) {
                    let {
                        recipientId: t
                    } = e;
                    d[t] = !1, f.delete(t)
                },
                BILLING_CREATE_REFERRAL_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    (0, l.fetchReferralsRemaining)(), p[t.id] = t, c = [...c, t.user_id]
                },
                BILLING_REFERRAL_RESOLVE_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    null != t && (_.delete(t.id), I.add(t.id), p[t.id] = t)
                },
                BILLING_REFERRAL_RESOLVE_FAIL: function(e) {
                    let {
                        userTrialOfferId: t
                    } = e;
                    _.delete(t), I.add(t)
                },
                LOAD_MESSAGES_SUCCESS: C,
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    T(t)
                },
                LOAD_MESSAGES_AROUND_SUCCESS: C,
                LOGOUT: function() {
                    u = null, d = {}, c = [], f = new Set, E = !1, _ = new Set, I = new Set, p = {}, h = 0, R = null
                }
            })
        },
        917247: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePremiumTrialOffer: function() {
                    return o
                }
            });
            var r = n("65597"),
                i = n("340412"),
                s = n("540692"),
                a = n("833516"),
                l = n("646718");

            function o(e) {
                var t, n, o, u;
                let d = (0, a.useTrialOffer)(l.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID),
                    c = (0, a.useTrialOffer)(l.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID),
                    f = (0, a.useTrialOffer)(l.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID),
                    E = (0, a.useTrialOffer)(i.default.getAnyOfUserTrialOfferId([l.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID, l.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, l.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID, l.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID])),
                    _ = (0, a.useTrialOffer)(l.PREMIUM_TIER_2_AUTH3_TRIAL_ID),
                    I = (0, r.default)([s.default], () => void 0 === e ? null : s.default.getRelevantUserTrialOffer(e));
                return null !== (u = null !== (o = null !== (n = null !== (t = null != d ? d : I) && void 0 !== t ? t : c) && void 0 !== n ? n : f) && void 0 !== o ? o : E) && void 0 !== u ? u : _
            }
        },
        833516: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hasUserTrialOfferExpired: function() {
                    return u
                },
                useTrialOffer: function() {
                    return d
                }
            }), n("222007");
            var r = n("884691"),
                i = n("446674"),
                s = n("862337"),
                a = n("697218"),
                l = n("340412"),
                o = n("719923");

            function u(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function d(e) {
                let t = (0, i.useStateFromStores)([l.default], () => l.default.getUserTrialOffer(e)),
                    [n, d] = r.useState(u(t)),
                    c = (0, i.useStateFromStores)([a.default], () => (0, o.isPremium)(a.default.getCurrentUser()));
                return r.useEffect(() => {
                    if (null != t && null != t.expires_at) {
                        let e = new s.Timeout,
                            r = () => {
                                let i = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                                null == e || e.start(i, () => {
                                    !n && u(t) ? d(!0) : r()
                                })
                            };
                        return r(), () => e.stop()
                    }
                }, [n, t]), n || c ? null : t
            }
        },
        345116: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r, i = n("37983"),
                s = n("884691"),
                a = n("414456"),
                l = n.n(a),
                o = n("931138"),
                u = n("476263"),
                d = n("206453"),
                c = n("811151"),
                f = n("427459"),
                E = n("804308");
            class _ extends s.PureComponent {
                render() {
                    let {
                        tier: e
                    } = this.props;
                    return (0, i.jsxs)("div", {
                        className: E.tierPill,
                        children: [(0, i.jsx)(o.default, {
                            className: E.tierPillStar,
                            children: (0, i.jsx)(d.default, {
                                tier: e,
                                className: E.tierPillGem
                            })
                        }), (0, f.getTierName)(e)]
                    })
                }
            }
            let I = e => {
                let {
                    subscriptionChange: t,
                    guild: n
                } = e;
                if (0 === t) return null;
                let r = Math.max(n.premiumSubscriberCount + t, 0),
                    s = (0, f.getGuildTierFromAppliedBoostCount)(r, n.id),
                    a = s - (0, f.getGuildTierFromAppliedBoostCount)(n.premiumSubscriberCount, n.id);
                return 0 === a ? null : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(c.default, {
                        className: a > 0 ? E.levelUpIcon : E.levelDownIcon
                    }), (0, i.jsx)(_, {
                        tier: s
                    })]
                })
            };
            r = class extends s.PureComponent {
                render() {
                    let {
                        guild: e,
                        className: t,
                        subscriptionChange: n
                    } = this.props;
                    return (0, i.jsxs)("div", {
                        className: l(E.subscription, t),
                        children: [(0, i.jsx)(u.default, {
                            guild: e,
                            size: u.default.Sizes.LARGE
                        }), (0, i.jsxs)("div", {
                            className: E.subscriptionInfo,
                            children: [(0, i.jsx)("div", {
                                className: E.guildName,
                                children: e.name
                            }), (0, i.jsxs)("div", {
                                className: E.tierInfo,
                                children: [(0, i.jsx)(_, {
                                    tier: e.premiumTier
                                }), (0, i.jsx)(I, {
                                    guild: e,
                                    subscriptionChange: null != n ? n : 0
                                })]
                            })]
                        })]
                    })
                }
            }
        },
        824734: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                s = n.n(i),
                a = n("153160"),
                l = n("646718"),
                o = n("782340"),
                u = n("552033");

            function d(e) {
                let {
                    price: t,
                    currency: n,
                    intervalType: i,
                    className: d,
                    intervalCount: c = 1,
                    isPrepaidPaymentSource: f = !1
                } = e, E = (0, a.formatPrice)(t, n), _ = null;
                return i === l.SubscriptionIntervalTypes.YEAR ? _ = o.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
                    price: E
                }) : i === l.SubscriptionIntervalTypes.MONTH && 1 === c ? _ = o.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
                    price: E
                }) : i === l.SubscriptionIntervalTypes.MONTH && c > 1 && (_ = o.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
                    price: E,
                    intervalCount: c
                })), (0, r.jsx)("div", {
                    className: s(u.pricePerInterval, d),
                    "data-testid": "PricePerInterval-".concat(n),
                    children: null == i || f ? (0, r.jsx)("strong", {
                        children: E
                    }) : _
                })
            }
        },
        623003: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983"),
                i = n("884691"),
                s = n("414456"),
                a = n.n(s),
                l = n("849085");
            let o = i.forwardRef(function(e, t) {
                let {
                    isActive: n,
                    children: i
                } = e;
                return (0, r.jsx)("div", {
                    className: a(l.wrapper, {
                        [l.wrapperActive]: n
                    }),
                    ref: t,
                    children: i
                })
            });
            var u = o
        },
        729912: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SilentMessagesExperiment: function() {
                    return i
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
                kind: "user",
                id: "2023-01_silent_messages",
                label: "Silent Messages",
                defaultConfig: {
                    allowSending: !1
                },
                treatments: [{
                    id: 1,
                    label: "Allow sending @silent messages",
                    config: {
                        allowSending: !0
                    }
                }]
            })
        },
        804888: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SILENT_RE: function() {
                    return s
                },
                canSuppressNotifications: function() {
                    return a
                },
                default: function() {
                    return l
                }
            });
            var r = n("729912");
            let i = "@silent",
                s = new RegExp("^".concat(i, "(\\s|$)"));

            function a() {
                let e = r.SilentMessagesExperiment.getCurrentConfig({
                    location: "456bd9_1"
                }, {
                    autoTrackExposure: !1
                });
                return e.allowSending
            }

            function l(e) {
                return a() && null != e.match(s) ? [!0, e.substring(i.length).trim()] : [!1, e]
            }
        },
        334811: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
                kind: "user",
                id: "2023-04_guild_boosting_settings_redesign",
                label: "Guild Boosting Settings Redesign",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Variant 1",
                    config: {
                        enabled: !0
                    }
                }, {
                    id: 2,
                    label: "Variant 1 international",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var s = i
        },
        917219: function(e, t, n) {
            "use strict";
            var r, i, s, a;
            n.r(t), n.d(t, {
                VideoFilterType: function() {
                    return r
                },
                DefaultVideoBackground: function() {
                    return i
                },
                ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: function() {
                    return l
                },
                DEFAULT_VIDEO_BACKGROUND_SORT: function() {
                    return o
                },
                BLUR_BACKGROUND_OPTION: function() {
                    return u
                },
                BACKGROUND_REPLACEMENT_SIZE: function() {
                    return d
                },
                MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return c
                }
            }), n("808653"), (s = r || (r = {}))[s.BACKGROUND = 0] = "BACKGROUND", (a = i || (i = {}))[a.OPTION_1 = 0] = "OPTION_1", a[a.OPTION_2 = 1] = "OPTION_2", a[a.OPTION_3 = 2] = "OPTION_3", a[a.OPTION_4 = 3] = "OPTION_4", a[a.OPTION_7 = 7] = "OPTION_7", a[a.OPTION_8 = 8] = "OPTION_8", a[a.OPTION_9 = 9] = "OPTION_9", a[a.OPTION_10 = 10] = "OPTION_10";
            let l = [7, 8, 9, 10],
                o = [7, 8, 9, 10, 0, 1, 2, 3].reduce((e, t, n) => ({
                    ...e,
                    [t]: n
                }), {}),
                u = "blur",
                d = {
                    width: 1280,
                    height: 720
                },
                c = 10485760
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("702976");
            var r, i = n("866227"),
                s = n.n(i),
                a = n("666038");
            r = class e extends a.default {
                static createFromServer(t) {
                    var n;
                    return new e({
                        ...t,
                        maxUses: t.max_uses,
                        maxAge: t.max_age,
                        createdAt: s(null !== (n = t.created_at) && void 0 !== n ? n : void 0),
                        targetType: t.target_type,
                        targetUser: t.target_user,
                        targetApplication: t.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = s(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = s(this.createdAt);
                        return e.add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.code = e.code || "", this.temporary = e.temporary || !1, this.revoked = e.revoked || !1, this.uses = e.uses || 0, this.maxUses = e.maxUses || 0, this.maxAge = e.maxAge || 0, this.createdAt = e.createdAt || new Date, this.channel = e.channel, this.guild = e.guild, this.inviter = e.inviter || null, this.targetType = e.targetType || null, this.targetUser = e.targetUser || null, this.targetApplication = e.targetApplication || null, this.type = e.type || null, this.flags = e.flags || 0
                }
            }
        },
        735201: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var r = n("446674"),
                i = n("913144");
            let s = {},
                a = null,
                l = [],
                o = !1,
                u = null,
                d = null;

            function c() {
                o = !0
            }
            class f extends r.default.Store {
                getAppliedGuildBoostsForGuild(e) {
                    return null != s[e] ? s[e].subscriptions : null
                }
                getLastFetchedAtForGuild(e) {
                    return null != s[e] ? s[e].lastFetchedAt : null
                }
                getCurrentUserAppliedBoosts() {
                    return l
                }
                getAppliedGuildBoost(e) {
                    return l.find(t => t.id === e)
                }
                get isModifyingAppliedBoost() {
                    return o
                }
                get applyBoostError() {
                    return u
                }
                get unapplyBoostError() {
                    return d
                }
                get cooldownEndsAt() {
                    return a
                }
            }
            f.displayName = "AppliedGuildBoostStore";
            var E = new f(i.default, {
                GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        appliedBoosts: n
                    } = e;
                    s[t] = {
                        subscriptions: n,
                        lastFetchedAt: Date.now()
                    }
                },
                USER_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
                    let {
                        appliedGuildBoosts: t
                    } = e;
                    l = t
                },
                APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function(e) {
                    let {
                        endsAt: t
                    } = e;
                    a = t
                },
                GUILD_UNAPPLY_BOOST_START: c,
                GUILD_APPLY_BOOST_START: c,
                GUILD_APPLY_BOOST_SUCCESS: function(e) {
                    let {
                        appliedGuildBoost: t
                    } = e, n = new Set(t.map(e => e.id));
                    l = [...t, ...l.filter(e => !n.has(e.id))], u = null, o = !1
                },
                GUILD_APPLY_BOOST_FAIL: function(e) {
                    let {
                        error: t
                    } = e;
                    o = !1, u = t
                },
                GUILD_UNAPPLY_BOOST_SUCCESS: function(e) {
                    let {
                        boostId: t
                    } = e;
                    l = l.filter(e => e.id !== t), o = !1
                },
                GUILD_UNAPPLY_BOOST_FAIL: function(e) {
                    let {
                        error: t
                    } = e;
                    o = !1, d = t
                }
            })
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("702976");
            var r = n("446674"),
                i = n("913144"),
                s = n("9294"),
                a = n("49111");
            let l = {},
                o = {},
                u = {};

            function d(e, t) {
                var n;
                e = null != e ? e : "";
                let r = (0, s.parseExtraDataFromInviteKey)(e),
                    i = l[e],
                    o = null != i ? {
                        state: a.InviteStates.RESOLVING,
                        ...i
                    } : {
                        state: a.InviteStates.RESOLVING,
                        code: r.baseCode
                    };
                t(o), l = {
                    ...l,
                    [e]: o
                }, (null === (n = o.guild) || void 0 === n ? void 0 : n.id) != null && (u = {
                    ...u,
                    [o.guild.id]: e
                })
            }

            function c(e) {
                return d(e.code, t => {
                    t.state = "banned" in e && e.banned ? a.InviteStates.BANNED : a.InviteStates.EXPIRED
                })
            }
            class f extends r.default.Store {
                getInvite(e) {
                    return l[e]
                }
                getInviteError(e) {
                    return o[e]
                }
                getInvites() {
                    return l
                }
                getInviteKeyForGuildId(e) {
                    return u[e]
                }
            }
            f.displayName = "InviteStore";
            var E = new f(i.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, s.parseExtraDataFromInviteKey)(t);
                    l = {
                        ...l,
                        [t]: {
                            code: n.baseCode,
                            state: a.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return d(e.code, t => {
                        var n, r;
                        t.state = a.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: c,
                INSTANT_INVITE_REVOKE_SUCCESS: c,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        t.state = a.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => d(e.code, e => {
                        e.state = a.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        var n, r;
                        t.state = a.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return d(e.code, e => {
                        e.state = a.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return d(e.code, t => {
                        t.state = a.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return o[e.code] = e.error, d(e.code, e => {
                        e.state = a.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return d(e.code, e => {
                        e.state = a.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = a.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = a.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        340412: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007");
            var r = n("446674"),
                i = n("913144"),
                s = n("697218"),
                a = n("719923"),
                l = n("521012"),
                o = n("646718");
            let u = {
                    userOffersLastFetchedAtDate: void 0,
                    userTrialOffers: {},
                    userDiscounts: {}
                },
                d = u;

            function c() {
                d.userTrialOffers = {}, d.userDiscounts = {}, d.userOffersLastFetchedAtDate = void 0
            }
            let f = () => !0;

            function E() {
                let e = l.default.getPremiumTypeSubscription();
                return null != e && (d.userTrialOffers = {}, d.userDiscounts = {}, !0)
            }
            class _ extends r.default.PersistedStore {
                initialize(e) {
                    d = null != e ? e : u, this.waitFor(s.default), this.syncWith([s.default], f), this.syncWith([l.default], E)
                }
                getUserTrialOffer(e) {
                    if (null !== e) return d.userTrialOffers[e]
                }
                getUserDiscount(e) {
                    if (null !== e) return d.userDiscounts[e]
                }
                getAnyOfUserTrialOfferId(e) {
                    for (let t of e)
                        if (null != d.userTrialOffers[t]) return t;
                    return null
                }
                hasFetchedOffer() {
                    return null != d.userOffersLastFetchedAtDate
                }
                shouldFetchOffer() {
                    let e = d.userOffersLastFetchedAtDate;
                    return null == e || Date.now() - 1728e5 > e
                }
                getAlmostExpiringTrialOffers(e) {
                    let t = Object.values(o.SubscriptionTrials).map(e => e.id),
                        n = s.default.getCurrentUser();
                    return (0, a.isPremium)(n) ? [] : Object.values(d.userTrialOffers).filter(n => t.includes(n.trial_id) && null != n.expires_at && null != n.subscription_trial && e.includes(n.subscription_trial.sku_id) && Date.parse(n.expires_at) < Date.now() + o.USER_PREMIUM_SUBSCRIPTION_TRIAL_EXPIRES_APPROACHING_5_DAY_THRESHOLD)
                }
                getAcknowledgedOffers(e) {
                    let t = s.default.getCurrentUser();
                    return (0, a.isPremium)(t) ? [] : Object.values(d.userTrialOffers).filter(t => e.includes(t.trial_id) && null != t.expires_at)
                }
                getUnacknowledgedDiscountOffers() {
                    let e = s.default.getCurrentUser();
                    return (0, a.isPremium)(e) ? [] : Object.values(d.userDiscounts).filter(e => null == e.expires_at)
                }
                getUnacknowledgedOffers(e) {
                    let t = s.default.getCurrentUser();
                    return (0, a.isPremium)(t) ? [] : Object.values(d.userTrialOffers).filter(t => e.includes(t.trial_id) && null == t.expires_at)
                }
                hasAnyUnexpiredOffer() {
                    return Object.values(d.userTrialOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now())
                }
                getState() {
                    return d
                }
                forceReset() {
                    c()
                }
            }
            _.displayName = "UserOfferStore", _.persistKey = "UserOfferStore";
            var I = new _(i.default, {
                BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    null != t ? d.userTrialOffers[t.trial_id] = t : c(), d.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    null != t ? d.userTrialOffers[t.trial_id] = t : d.userTrialOffers = {}, d.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_OFFER_FETCH_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t,
                        userDiscount: n
                    } = e;
                    null == t && null == n && c(), null != t ? (d.userTrialOffers[t.trial_id] = t, d.userDiscounts = {}) : null != n && (d.userDiscounts[n.discount_id] = n, d.userTrialOffers = {}), d.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t,
                        userDiscount: n
                    } = e;
                    null != t ? d.userTrialOffers[t.trial_id] = t : d.userTrialOffers = {}, null != n ? d.userDiscounts[n.discount_id] = n : d.userDiscounts = {}, d.userOffersLastFetchedAtDate = Date.now()
                },
                LOGOUT: c
            })
        },
        971427: function(e, t, n) {
            "use strict";
            let r;
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("424973");
            var i = n("446674"),
                s = n("913144");
            let a = {
                hasAcceptedStoreTerms: !1,
                hasAcceptedEulaIds: []
            };
            class l extends i.default.PersistedStore {
                initialize(e) {
                    r = null != e ? e : a
                }
                getState() {
                    return r
                }
                get hasAcceptedStoreTerms() {
                    return r.hasAcceptedStoreTerms
                }
                hasAcceptedEULA(e) {
                    return r.hasAcceptedEulaIds.includes(e)
                }
            }
            l.displayName = "ApplicationStoreUserSettingsStore", l.persistKey = "ApplicationStoreUserSettingsStore", l.migrations = [e => null == e.hasAcceptedEulaIds ? {
                ...e,
                hasAcceptedEulaIds: []
            } : e];
            var o = new l(s.default, {
                APPLICATION_STORE_ACCEPT_STORE_TERMS: function() {
                    r.hasAcceptedStoreTerms = !0
                },
                APPLICATION_STORE_ACCEPT_EULA: function(e) {
                    let {
                        eulaId: t
                    } = e;
                    if (r.hasAcceptedEulaIds.includes(t)) return !1;
                    r.hasAcceptedEulaIds.push(t)
                }
            })
        },
        931138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("37983"),
                i = n("884691"),
                s = n("414456"),
                a = n.n(s),
                l = n("77078"),
                o = n("760607"),
                u = n("89976");

            function d(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: s,
                    flowerStarClassName: d,
                    ...c
                } = e, f = i.Children.only(t), E = (0, l.useRedesignIconContext)().enabled;
                return (0, r.jsxs)("div", {
                    className: a(u.flowerStarContainer, s),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, r.jsx)(o.default, {
                        ...c,
                        className: a(d, u.flowerStar)
                    }), (0, r.jsx)("div", {
                        className: a(u.childContainer, {
                            [u.redesignIconChildContainer]: E
                        }),
                        children: f
                    })]
                })
            }
        },
        791106: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Gradients: function() {
                    return l
                },
                GradientCssUrls: function() {
                    return o
                },
                default: function() {
                    return p
                }
            });
            var r = n("37983"),
                i = n("884691"),
                s = n("748820"),
                a = n("669491");
            let l = Object.freeze({
                    PREMIUM_TIER_0: (0, s.v4)(),
                    PREMIUM_TIER_1: (0, s.v4)(),
                    PREMIUM_TIER_2: (0, s.v4)(),
                    PREMIUM_GUILD: (0, s.v4)(),
                    PREMIUM_TRIAL_TUTORIAL: (0, s.v4)(),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, s.v4)()
                }),
                o = {
                    PREMIUM_TIER_0: "url(#".concat(l.PREMIUM_TIER_0, ")"),
                    PREMIUM_TIER_1: "url(#".concat(l.PREMIUM_TIER_1, ")"),
                    PREMIUM_TIER_2: "url(#".concat(l.PREMIUM_TIER_2, ")"),
                    PREMIUM_GUILD: "url(#".concat(l.PREMIUM_GUILD, ")"),
                    PREMIUM_TRIAL_TUTORIAL: "url(#".concat(l.PREMIUM_TRIAL_TUTORIAL, ")"),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: "url(#".concat(l.PREMIUM_GUILD_BADGE_V2_BACKGROUND, ")")
                },
                u = () => (0, r.jsxs)("linearGradient", {
                    id: l.PREMIUM_TIER_0,
                    children: [(0, r.jsx)("stop", {
                        offset: ".1762",
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css
                    }), (0, r.jsx)("stop", {
                        offset: "0.5351",
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css
                    })]
                }),
                d = () => (0, r.jsxs)("linearGradient", {
                    id: l.PREMIUM_TIER_1,
                    children: [(0, r.jsx)("stop", {
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css
                    })]
                }),
                c = () => (0, r.jsxs)("linearGradient", {
                    id: l.PREMIUM_TIER_2,
                    children: [(0, r.jsx)("stop", {
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css
                    }), (0, r.jsx)("stop", {
                        offset: "0.502368",
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
                    })]
                }),
                f = () => (0, r.jsxs)("linearGradient", {
                    id: l.PREMIUM_GUILD,
                    children: [(0, r.jsx)("stop", {
                        stopColor: a.default.unsafe_rawColors.GUILD_BOOSTING_BLUE.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: a.default.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css
                    })]
                }),
                E = () => (0, r.jsxs)("linearGradient", {
                    id: l.PREMIUM_TRIAL_TUTORIAL,
                    children: [(0, r.jsx)("stop", {
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                    })]
                }),
                _ = () => (0, r.jsxs)("linearGradient", {
                    id: l.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                    gradientTransform: "rotate(45)",
                    children: [(0, r.jsx)("stop", {
                        offset: "0",
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                    })]
                }),
                I = i.memo(function() {
                    return (0, r.jsxs)("svg", {
                        viewBox: "0 0 1 1",
                        style: {
                            position: "absolute",
                            pointerEvents: "none",
                            top: -1,
                            left: -1,
                            width: 1,
                            height: 1
                        },
                        "aria-hidden": !0,
                        children: [u(), d(), c(), f(), E(), _()]
                    })
                }, () => !0);
            var p = I
        },
        467831: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentAnimationTier0: function() {
                    return S
                },
                PremiumPaymentAnimationTier1: function() {
                    return T
                },
                PremiumPaymentAnimationTier2: function() {
                    return A
                },
                PremiumPaymentGuildAnimation: function() {
                    return D
                }
            }), n("222007");
            var r, i, s, a, l, o, u, d, c = n("37983"),
                f = n("884691"),
                E = n("414456"),
                _ = n.n(E),
                I = n("301165"),
                p = n("458960"),
                h = n("273108"),
                R = n("635233");
            (l = r || (r = {})).NORMAL = "normal", l.SPEED_START = "speed_start", l.SPEED_LOOP = "speed_loop", l.FINISH = "finish", l.IDLE = "idle";
            let m = {
                normal: {
                    BEG: 0,
                    END: 600,
                    shouldForcePlayAfter: !0
                },
                speed_start: {
                    BEG: 601,
                    END: 636
                },
                speed_loop: {
                    BEG: 637,
                    END: 668
                },
                finish: {
                    BEG: 669,
                    END: 870
                },
                idle: {
                    BEG: 871,
                    END: 878
                }
            };
            class S extends f.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case S.Scenes.SPEED_START:
                            return S.Scenes.SPEED_LOOP;
                        case S.Scenes.FINISH:
                            return S.Scenes.IDLE;
                        default:
                            return e
                    }
                }
                importDefault() {
                    return n.el("133541").then(n.t.bind(n, "133541", 19)).then(e => {
                        let {
                            default: t
                        } = e;
                        return t
                    })
                }
                render() {
                    let {
                        className: e,
                        nextScene: t,
                        onScenePlay: n,
                        onSceneComplete: r,
                        pause: i,
                        pauseWhileUnfocused: s
                    } = this.props;
                    return (0, c.jsx)(h.default, {
                        className: _(R.sequencedAnimation, e),
                        importData: this.importDefault,
                        nextScene: i ? "idle" : t,
                        sceneSegments: m,
                        onScenePlay: n,
                        onSceneComplete: r,
                        pauseWhileUnfocused: s,
                        pause: i
                    })
                }
            }
            S.Scenes = r, (o = i || (i = {})).NORMAL = "normal", o.SPEED_START = "speed_start", o.SPEED_LOOP = "speed_loop", o.FINISH = "finish", o.IDLE = "idle";
            let C = {
                normal: {
                    BEG: 0,
                    END: 600,
                    shouldForcePlayAfter: !0
                },
                speed_start: {
                    BEG: 601,
                    END: 636
                },
                speed_loop: {
                    BEG: 637,
                    END: 668
                },
                finish: {
                    BEG: 669,
                    END: 870
                },
                idle: {
                    BEG: 871,
                    END: 878
                }
            };
            class T extends f.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case T.Scenes.SPEED_START:
                            return T.Scenes.SPEED_LOOP;
                        case T.Scenes.FINISH:
                            return T.Scenes.IDLE;
                        default:
                            return e
                    }
                }
                importDefault() {
                    return n.el("549988").then(n.t.bind(n, "549988", 19)).then(e => {
                        let {
                            default: t
                        } = e;
                        return t
                    })
                }
                render() {
                    let {
                        className: e,
                        nextScene: t,
                        onScenePlay: n,
                        onSceneComplete: r,
                        pause: i,
                        pauseWhileUnfocused: s
                    } = this.props;
                    return (0, c.jsx)(h.default, {
                        className: _(R.sequencedAnimation, e),
                        importData: this.importDefault,
                        nextScene: i ? "idle" : t,
                        sceneSegments: C,
                        onScenePlay: n,
                        onSceneComplete: r,
                        pauseWhileUnfocused: s,
                        pause: i
                    })
                }
            }
            T.Scenes = i, (u = s || (s = {})).IDLE_ENTRY = "idle_entry", u.IDLE_LOOP = "idle_loop", u.BOOST_START = "boost_start", u.BOOST_LOOP = "boost_loop", u.BOOST_END = "boost_end", u.VICTORY = "victory", u.ERROR = "error";
            let g = {
                idle_entry: {
                    BEG: 0,
                    END: 50
                },
                idle_loop: {
                    BEG: 50,
                    END: 230,
                    shouldForcePlayAfter: !0
                },
                boost_start: {
                    BEG: 230,
                    END: 275
                },
                boost_loop: {
                    BEG: 275,
                    END: 290
                },
                boost_end: {
                    BEG: 386,
                    END: 455
                },
                victory: {
                    BEG: 470,
                    END: 525
                },
                error: {
                    BEG: 290,
                    END: 375
                }
            };
            class L extends f.PureComponent {
                getStyle(e) {
                    let {
                        animation: t
                    } = this.props;
                    return {
                        transform: [{
                            translateX: t.x.interpolate({
                                inputRange: [0, 1],
                                outputRange: e ? ["100%", "0%"] : ["0%", "-100%"]
                            })
                        }, {
                            translateY: t.y.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["100%", "0%"]
                            })
                        }]
                    }
                }
                render() {
                    let {
                        className: e
                    } = this.props;
                    return (0, c.jsxs)("div", {
                        className: R.panningAnimation,
                        children: [(0, c.jsx)(p.default.div, {
                            className: e,
                            style: this.getStyle(!1)
                        }), (0, c.jsx)(p.default.div, {
                            className: e,
                            style: this.getStyle(!0)
                        })]
                    })
                }
            }
            let N = Object.freeze({
                IDLE_ENTRY: {
                    toValue: 1,
                    duration: 1500
                },
                IDLE_LOOP: {
                    toValue: 1,
                    duration: 6e3,
                    easing: p.default.Easing.linear
                },
                BOOST_START: {
                    toValue: 0,
                    duration: 2e3,
                    delay: 500
                },
                ERROR: {
                    toValue: 1,
                    duration: 1500,
                    delay: 1e3
                }
            });
            class A extends f.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case A.Scenes.IDLE_ENTRY:
                            return A.Scenes.IDLE_LOOP;
                        case A.Scenes.BOOST_START:
                            return A.Scenes.BOOST_LOOP;
                        case A.Scenes.BOOST_END:
                            return A.Scenes.VICTORY;
                        case A.Scenes.VICTORY:
                            return A.Scenes.IDLE_ENTRY;
                        case A.Scenes.ERROR:
                            return A.Scenes.IDLE_LOOP;
                        default:
                            return e
                    }
                }
                componentWillUnmount() {
                    this.didUnmount = !0
                }
                importData() {
                    return n.el("475800").then(n.t.bind(n, "475800", 19)).then(e => {
                        let {
                            default: t
                        } = e;
                        return t
                    })
                }
                animateEntry(e) {
                    p.default.parallel([p.default.timing(this.foregroundAnimation.y, {
                        toValue: e.toValue,
                        duration: e.duration,
                        delay: e.delay || 0
                    }), p.default.timing(this.backgroundAnimation.y, {
                        toValue: e.toValue,
                        duration: 1.2 * e.duration,
                        delay: e.delay || 0
                    })]).start()
                }
                animateIdleEntry() {
                    this.animateEntry(N.IDLE_ENTRY)
                }
                animateError() {
                    this.animateEntry(N.ERROR)
                }
                animateIdleLoop() {
                    this.animateIdleLoopBackground(), this.animateIdleLoopForeground()
                }
                animateBoostStart() {
                    p.default.parallel([p.default.timing(this.foregroundAnimation.y, {
                        toValue: N.BOOST_START.toValue,
                        duration: N.BOOST_START.duration,
                        delay: N.BOOST_START.delay
                    }), p.default.timing(this.backgroundAnimation.y, {
                        toValue: N.BOOST_START.toValue,
                        duration: 1.2 * N.BOOST_START.duration,
                        delay: N.BOOST_START.delay
                    })]).start()
                }
                render() {
                    let {
                        className: e,
                        nextScene: t,
                        pause: n,
                        onSceneComplete: r
                    } = this.props;
                    return (0, c.jsxs)("div", {
                        className: _(R.tier2Animation, e),
                        children: [n ? (0, c.jsx)(c.Fragment, {
                            children: (0, c.jsxs)("div", {
                                className: R.panningAnimation,
                                children: [(0, c.jsx)("div", {
                                    className: R.tier2Background
                                }), (0, c.jsx)("div", {
                                    className: R.tier2Foreground
                                })]
                            })
                        }) : (0, c.jsxs)(c.Fragment, {
                            children: [(0, c.jsx)(L, {
                                className: R.tier2Background,
                                animation: this.backgroundAnimation
                            }), (0, c.jsx)(L, {
                                className: R.tier2Foreground,
                                animation: this.foregroundAnimation
                            })]
                        }), (0, c.jsx)(h.default, {
                            className: R.sequencedAnimation,
                            importData: this.importData,
                            nextScene: n ? "idle_loop" : t,
                            sceneSegments: g,
                            onScenePlay: this.handleScenePlay,
                            onSceneComplete: r,
                            pauseWhileUnfocused: !1,
                            pause: n
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.backgroundAnimation = new p.default.ValueXY({
                        x: 0,
                        y: 0
                    }), this.foregroundAnimation = new p.default.ValueXY({
                        x: 0,
                        y: 0
                    }), this.didUnmount = !1, this.animateIdleLoopBackground = () => {
                        !this.didUnmount && (this.backgroundAnimation.x.setValue(0), p.default.timing(this.backgroundAnimation.x, {
                            toValue: N.IDLE_LOOP.toValue,
                            duration: 1.2 * N.IDLE_LOOP.duration,
                            easing: p.default.Easing.linear
                        }).start(this.animateIdleLoopBackground))
                    }, this.animateIdleLoopForeground = () => {
                        !this.didUnmount && (this.foregroundAnimation.x.setValue(0), p.default.timing(this.foregroundAnimation.x, {
                            toValue: N.IDLE_LOOP.toValue,
                            duration: N.IDLE_LOOP.duration,
                            easing: N.IDLE_LOOP.easing
                        }).start(this.animateIdleLoopForeground))
                    }, this.handleScenePlay = e => {
                        switch (e) {
                            case "idle_entry":
                                this.animateIdleEntry(), this.animateIdleLoop();
                                break;
                            case "error":
                                this.animateError();
                                break;
                            case "boost_start":
                                this.animateBoostStart()
                        }
                        let {
                            onScenePlay: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            A.Scenes = s, (d = a || (a = {})).ENTRY = "entry", d.IDLE = "idle", d.STARS = "stars", d.ERROR = "error", d.SUCCESS = "success";
            let O = {
                    entry: {
                        BEG: 0,
                        END: 180
                    },
                    idle: {
                        BEG: 180,
                        END: 360,
                        shouldForcePlayAfter: !0
                    },
                    stars: {
                        BEG: 180,
                        END: 360,
                        shouldForcePlayAfter: !0
                    },
                    error: {
                        BEG: 360,
                        END: 540
                    },
                    success: {
                        BEG: 540,
                        END: 778
                    }
                },
                v = Object.freeze({
                    WHITE: "#ebf0f7",
                    PINK: "#fa6ef6"
                }),
                M = [{
                    left: 29,
                    top: 100,
                    color: v.WHITE
                }, {
                    left: 245,
                    top: 11,
                    color: v.PINK
                }, {
                    left: 393,
                    top: 22,
                    color: v.WHITE
                }, {
                    left: 74,
                    top: 30,
                    color: v.PINK
                }, {
                    left: 188,
                    top: 9,
                    color: v.WHITE
                }, {
                    left: 379,
                    top: 97,
                    color: v.PINK
                }],
                x = Object.freeze({
                    SCALE_INITIAL: 0,
                    SCALE_MIDDLE: 1,
                    SCALE_END: 0,
                    ROTATE_INITIAL: 0,
                    ROTATE_MIDDLE: 180,
                    ROTATE_END: 360,
                    DELAY_MIN: 200,
                    DELAY_MAX: 500,
                    DELAY_STAGGER: 200,
                    DURATION_MIDDLE: 400,
                    DURATION_END: 250,
                    SIZE_MIN: 7,
                    SIZE_MAX: 15,
                    EASING_MIDDLE: p.default.Easing.bezier(.3, .01, 0, .99),
                    EASING_END: p.default.Easing.bezier(0, -.01, .99, 0)
                });

            function U(e) {
                let {
                    animate: t
                } = e, [n, r] = f.useState(0), i = (0, I.useSprings)(M.length, M.map((e, i) => {
                    let s = i > 0 ? x.DELAY_STAGGER * i + Math.random() * (x.DELAY_MAX - x.DELAY_MIN) + x.DELAY_MIN : 0,
                        a = Math.random() * (x.SIZE_MAX - x.SIZE_MIN) + x.SIZE_MIN;
                    return {
                        from: {
                            scale: x.SCALE_INITIAL,
                            rotate: x.ROTATE_INITIAL,
                            top: e.top,
                            left: e.left,
                            width: a,
                            height: a
                        },
                        to: async e => {
                            t ? (await e({
                                scale: x.SCALE_MIDDLE,
                                rotate: x.ROTATE_MIDDLE,
                                delay: s,
                                config: {
                                    duration: x.DURATION_MIDDLE,
                                    easing: x.EASING_MIDDLE
                                }
                            }), await e({
                                scale: x.SCALE_END,
                                rotate: x.ROTATE_END,
                                config: {
                                    duration: x.DURATION_END,
                                    easing: x.EASING_END
                                }
                            }), await e({
                                scale: x.SCALE_INITIAL,
                                rotate: x.ROTATE_INITIAL,
                                immediate: !0
                            }), i === M.length - 1 && r(n + 1)) : await e({
                                scale: x.SCALE_INITIAL,
                                rotate: x.ROTATE_INITIAL
                            })
                        }
                    }
                }));
                return (0, c.jsx)(c.Fragment, {
                    children: i.map((e, t) => {
                        let n = M[t];
                        return (0, c.jsx)(I.animated.svg, {
                            style: e,
                            className: R.guildStar,
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 12.14 12.24",
                            children: (0, c.jsx)("path", {
                                d: "M5.62 10.22l-4 1.9a1.17 1.17 0 01-1.5-.5 1.7 1.7 0 010-1l1.9-4a.91.91 0 000-1l-1.9-4a1.14 1.14 0 01.5-1.5 1.39 1.39 0 01.9 0l4 1.9a.91.91 0 001 0l4-1.9a1.14 1.14 0 011.5.5 1.39 1.39 0 010 .9l-1.9 4a.91.91 0 000 1l1.9 4a1.17 1.17 0 01-.5 1.5 1.7 1.7 0 01-1 0l-4-1.9a1 1 0 00-.9.1z",
                                fill: n.color
                            })
                        }, t)
                    })
                })
            }
            class D extends f.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case "entry":
                        case "error":
                        case "success":
                            return "idle";
                        default:
                            return e
                    }
                }
                importData() {
                    return n.el("438967").then(n.t.bind(n, "438967", 19)).then(e => {
                        let {
                            default: t
                        } = e;
                        return t
                    })
                }
                render() {
                    let {
                        className: e,
                        nextScene: t,
                        pause: n,
                        onScenePlay: r,
                        onSceneComplete: i,
                        pauseWhileUnfocused: s
                    } = this.props;
                    return (0, c.jsxs)("div", {
                        className: _(R.guildWrapper, e),
                        children: [(0, c.jsx)(h.default, {
                            className: R.guildBackground,
                            importData: this.importData,
                            nextScene: n ? "idle" : t,
                            sceneSegments: O,
                            onScenePlay: r,
                            onSceneComplete: i,
                            pauseWhileUnfocused: s,
                            pause: n
                        }), (0, c.jsx)(U, {
                            animate: !n && "stars" === t
                        })]
                    })
                }
            }
            D.Scenes = a
        },
        273108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                s = n("414456"),
                a = n.n(s),
                l = n("446674"),
                o = n("206230"),
                u = n("471671"),
                d = n("629758");
            class c extends i.PureComponent {
                async componentDidMount() {
                    let {
                        importData: e,
                        nextScene: t,
                        pauseWhileUnfocused: r,
                        pause: i,
                        isWindowFocused: s,
                        useReducedMotion: a
                    } = this.props, [l, {
                        default: o
                    }] = await Promise.all([e(), n.el("230265").then(n.t.bind(n, "230265", 23))]);
                    null != this.animationRef && (this.animation = o.loadAnimation({
                        container: this.animationRef,
                        renderer: "svg",
                        loop: !0,
                        autoplay: !0,
                        animationData: l
                    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.playScene(t), (r && !s || i || a) && this.animation.pause())
                }
                componentWillUnmount() {
                    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
                }
                componentDidUpdate(e) {
                    var t, n, r;
                    let {
                        nextScene: i,
                        pauseWhileUnfocused: s,
                        pause: a,
                        isWindowFocused: l,
                        useReducedMotion: o
                    } = this.props;
                    i !== this.currentScene && this.shouldForcePlayAfter() && !a && this.playScene(i), null != this.animation && (s && !e.isWindowFocused && l && !o && !0 !== a ? this.animation.play() : (o || s && e.isWindowFocused && !l) && this.animation.pause()), !e.pause && a ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !a && !o && (null === (n = this.animation) || void 0 === n || n.play()), e.nextScene !== i && a && (this.playScene(i), null === (r = this.animation) || void 0 === r || r.pause())
                }
                shouldForcePlayAfter() {
                    let {
                        sceneSegments: e
                    } = this.props, t = e[this.currentScene];
                    return !0 === t.shouldForcePlayAfter
                }
                playScene(e) {
                    if (this.isUnmounted) return;
                    let {
                        onScenePlay: t,
                        sceneSegments: n,
                        useReducedMotion: r
                    } = this.props, i = n[e], s = n[this.currentScene];
                    if (null != this.animation && (e === this.currentScene || i.BEG !== s.BEG || i.END !== s.END) && this.animation.playSegments([i.BEG, i.END], !0), this.currentScene = e, null != t && t(this.currentScene), r) {
                        var a;
                        null === (a = this.animation) || void 0 === a || a.pause()
                    }
                }
                render() {
                    return (0, r.jsx)("div", {
                        ref: this.handleSetRef,
                        className: a(this.props.className, d.wrapper)
                    })
                }
                constructor(...e) {
                    super(...e), this.animationRef = null, this.currentScene = this.props.nextScene, this.isUnmounted = !1, this.handleLoopComplete = () => {
                        let {
                            onSceneComplete: e,
                            nextScene: t
                        } = this.props;
                        null != e && e(this.currentScene), this.playScene(t)
                    }, this.handleComplete = () => {
                        let {
                            onSceneComplete: e
                        } = this.props;
                        null != e && e(this.currentScene)
                    }, this.handleSetRef = e => {
                        this.animationRef = e;
                        let {
                            animationRef: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            c.defaultProps = {
                pauseWhileUnfocused: !0,
                pause: !1
            };
            var f = e => {
                let {
                    componentRef: t,
                    ...n
                } = e, i = (0, l.useStateFromStores)([u.default], () => u.default.isFocused()), s = (0, l.useStateFromStores)([o.default], () => o.default.useReducedMotion);
                return (0, r.jsx)(c, {
                    ...n,
                    isWindowFocused: i,
                    useReducedMotion: s,
                    ref: t
                })
            }
        },
        965397: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                s = n("414456"),
                a = n.n(s),
                l = n("458960"),
                o = n("77078"),
                u = n("866893");
            let d = {
                friction: 7,
                tension: 60
            };
            class c extends i.Component {
                componentWillAppear(e) {
                    this.animateTo(1).start(e)
                }
                componentWillEnter(e) {
                    this.animateTo(1).start(e)
                }
                componentWillLeave(e) {
                    let {
                        reducedMotion: t
                    } = this.context;
                    t.enabled ? this.animateTo(0).start(e) : l.default.stagger(250, [this.animateTo(1.3), this.animateTo(0)]).start(e)
                }
                animateTo(e) {
                    return l.default.spring(this.animation, {
                        ...d,
                        toValue: e
                    })
                }
                getAnimatedStyle() {
                    let {
                        reducedMotion: e
                    } = this.context;
                    return l.default.accelerate({
                        opacity: this.animation,
                        transform: e.enabled ? void 0 : [{
                            translateY: this.animation.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["150%", "0%"]
                            })
                        }]
                    })
                }
                render() {
                    let {
                        className: e,
                        children: t
                    } = this.props;
                    return (0, r.jsx)(l.default.div, {
                        className: a(e, u.slider),
                        style: this.getAnimatedStyle(),
                        children: t
                    })
                }
                constructor(...e) {
                    super(...e), this.animation = new l.default.Value(0)
                }
            }
            c.contextType = o.AccessibilityPreferencesContext;
            var f = c
        },
        784917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("75196");

            function s(e) {
                let {
                    width: t = 6,
                    height: n = 11,
                    color: s = "currentColor",
                    foreground: a,
                    ...l
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 6 11",
                    children: (0, r.jsx)("path", {
                        fill: s,
                        className: a,
                        d: "M3 0.625244L0 3.62524V7.62524L3 10.6252L6 7.62524V3.62524L3 0.625244ZM5 7.24524L3 9.24524L1 7.24524V4.04524L3 2.04524L5 4.04524V7.24524Z"
                    })
                })
            }
        },
        326880: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("75196");

            function s(e) {
                let {
                    width: t = 6,
                    height: n = 11,
                    color: s = "currentColor",
                    foreground: a,
                    ...l
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 6 11",
                    children: (0, r.jsxs)("g", {
                        fill: s,
                        fillRule: "evenodd",
                        className: a,
                        children: [(0, r.jsx)("path", {
                            d: "M2 4.42007V6.79007L3 7.79007L4 6.79007V4.42007L3.01 3.42007L2 4.42007Z"
                        }), (0, r.jsx)("path", {
                            d: "M3 0.590088L0 3.59009V7.59009L3 10.5901L6 7.59009V3.59009L3 0.590088ZM5 7.21009L3 9.21009L1 7.21009V4.00009L3 2.00009L5 4.00009V7.21009Z"
                        })]
                    })
                })
            }
        },
        131777: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("75196");

            function s(e) {
                let {
                    width: t = 6,
                    height: n = 11,
                    color: s = "currentColor",
                    foreground: a,
                    ...l
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 6 11",
                    children: (0, r.jsxs)("g", {
                        fill: s,
                        fillRule: "evenodd",
                        className: a,
                        children: [(0, r.jsx)("path", {
                            d: "M3 0.625305L0 3.62531V7.62531L3 10.6253L6 7.62531V3.62531L3 0.625305ZM5 7.24531L3 9.24531L1 7.24531V4.04531L3 2.04531L5 4.04531V7.24531Z"
                        }), (0, r.jsx)("path", {
                            d: "M3.76 4.21526L3 3.45526L2 4.45526V5.97526L3.76 4.21526Z"
                        }), (0, r.jsx)("path", {
                            d: "M2.28003 7.11532L3.00003 7.83532L4.00003 6.83532V5.39532L2.28003 7.11532Z"
                        })]
                    })
                })
            }
        },
        206453: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("70102");
            var r = n("37983");
            n("884691");
            var i = n("784917"),
                s = n("326880"),
                a = n("131777"),
                l = n("49111");

            function o(e) {
                let {
                    tier: t,
                    ...n
                } = e;
                switch (t) {
                    case l.BoostedGuildTiers.NONE:
                    case l.BoostedGuildTiers.TIER_1:
                        return (0, r.jsx)(i.default, {
                            ...n
                        });
                    case l.BoostedGuildTiers.TIER_2:
                        return (0, r.jsx)(s.default, {
                            ...n
                        });
                    case l.BoostedGuildTiers.TIER_3:
                        return (0, r.jsx)(a.default, {
                            ...n
                        });
                    default:
                        throw Error("Not a valid tier type")
                }
            }
        },
        461380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                s = n.n(i),
                a = n("384737"),
                l = n("448052"),
                o = n("748802"),
                u = n("260792"),
                d = n("77078"),
                c = n("75196"),
                f = n("4177");
            let E = {
                    UP: f.directionUp,
                    RIGHT: f.directionRight,
                    DOWN: f.directionDown,
                    LEFT: f.directionLeft
                },
                _ = e => {
                    let {
                        direction: t = E.DOWN,
                        width: n = 24,
                        height: i = 24,
                        color: _ = "currentColor",
                        transition: I = f.transition,
                        className: p,
                        foreground: h,
                        expanded: R,
                        ...m
                    } = e, {
                        enabled: S
                    } = (0, d.useRedesignIconContext)(), C = t;
                    if (!0 === R ? C = E.DOWN : !1 === R && (C = E.RIGHT), S) {
                        let e = {
                            [E.UP]: u.ChevronSmallUpIcon,
                            [E.DOWN]: a.ChevronSmallDownIcon,
                            [E.LEFT]: l.ChevronSmallLeftIcon,
                            [E.RIGHT]: o.ChevronSmallRightIcon
                        } [C];
                        return (0, r.jsx)(e, {
                            ...m,
                            className: p,
                            width: n,
                            height: i,
                            color: _,
                            colorClass: h
                        })
                    }
                    return (0, r.jsx)("svg", {
                        className: s(p, I, C),
                        width: n,
                        height: i,
                        viewBox: "0 0 24 24",
                        ...(0, c.default)(m),
                        children: (0, r.jsx)("path", {
                            className: h,
                            fill: "none",
                            stroke: _,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            _.Directions = E;
            var I = _
        },
        811151: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("75196");

            function s(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = "currentColor",
                    ...a
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, i.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 16 16",
                    children: [(0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.45329 8.53891L3.26217 13.7844C2.95995 14.0719 2.49772 14.0719 2.21328 13.7844C1.92883 13.497 1.92883 13.0299 2.21328 12.7245L6.88884 7.99999L2.21328 3.27543C1.92883 2.988 1.92883 2.50297 2.21328 2.21555C2.49772 1.92812 2.95995 1.92812 3.26217 2.21555L8.45329 7.47903C8.73774 7.76645 8.73774 8.23352 8.45329 8.53891Z",
                        fill: s
                    }), (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.4533 8.53891L9.26217 13.7844C8.95995 14.0719 8.49772 14.0719 8.21328 13.7844C7.92883 13.497 7.92883 13.0299 8.21328 12.7245L12.8888 7.99999L8.21328 3.27543C7.92883 2.988 7.92883 2.50297 8.21328 2.21555C8.49772 1.92812 8.95995 1.92812 9.26217 2.21555L14.4533 7.47903C14.7377 7.76645 14.7377 8.23352 14.4533 8.53891Z",
                        fill: s
                    })]
                })
            }
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("75196"),
                s = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: s = "currentColor",
                        foreground: a,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, r.jsx)("path", {
                            className: a,
                            fill: s,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        118503: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("75196");

            function s(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = "currentColor",
                    foreground: a,
                    ...l
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, i.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 8 12",
                    children: [(0, r.jsx)("path", {
                        d: "M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z",
                        fill: s,
                        className: a
                    }), (0, r.jsx)("path", {
                        d: "M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z",
                        fill: s,
                        className: a
                    })]
                })
            }
        },
        834179: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("763377"),
                a = n("75196"),
                l = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: s,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: s,
                            fill: i,
                            d: "M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"
                        })
                    })
                }, s.CircleQuestionIcon)
        },
        216422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("202909"),
                a = n("75196"),
                l = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        viewBox: s = "0 0 24 24",
                        foreground: l,
                        ...o
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(o),
                        width: t,
                        height: n,
                        viewBox: s,
                        children: (0, r.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, s.NitroWheelIcon)
        },
        151185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("424823"),
                a = n("75196"),
                l = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: s,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            className: s,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, s.PlusSmallIcon)
        },
        342169: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("457802"),
                a = n("75196"),
                l = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: s,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            className: s,
                            d: "M2.66663 7.40747H7.40737H8.59255H8.66663H13.3333V8.59266H8.59255H7.40737H2.66663V7.40747Z"
                        })
                    })
                }, s.MinusIcon)
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return s
                }
            });
            var r = n("917351"),
                i = n.n(r);
            let s = e => "function" == typeof e ? e() : e;
            i.curry((e, t, n) => s(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let r, i;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("70102");
            var s = n("697218"),
                a = n("615931");
            let l = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                r = e.showModal, l = e.updateModalProps, i = n("551042").closeModal
            }

            function o(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: s,
                    modalProps: a = {},
                    hooks: {
                        onEarlyClose: o
                    } = {}
                } = e;
                if (null == r) {
                    null == o || o();
                    return
                }
                let d = r(_, c, a);

                function c() {
                    null == o || o()
                }

                function f(e) {
                    i(d), n(e)
                }

                function E(e) {
                    i(d), s(e)
                }

                function _(e) {
                    return l(d, _, c, {
                        ...a,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: f,
                        reject: E,
                        code: e,
                        mfaCodeHandler: I,
                        isModalOpen: !0
                    })
                }

                function I(e) {
                    let {
                        res: t
                    } = e;
                    l(d, _, c, {
                        ...a,
                        error: t.body.message
                    })
                }
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: r,
                    code: i,
                    mfaCodeHandler: s = o,
                    isModalOpen: a = !1,
                    ...l
                } = e;
                return t(null != i ? {
                    code: i
                } : {}).then(n, e => {
                    var i, o;
                    if (i = e, o = a, i.body && 60008 === i.body.code || o && 429 === i.status) return s({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e,
                        ...l
                    });
                    r(e)
                })
            }

            function d(e, t) {
                var n, r;
                let {
                    checkEnabled: i = null !== (r = null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== r && r,
                    ...l
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, a.resolveThunk)(i) ? o : u)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...l
                    })
                })
            }
        },
        833858: function(e, t, n) {
            "use strict";

            function r(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return r
                }
            })
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return l
                },
                updateModalProps: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                s = n("920636");
            let a = (e, t, n) => function(i) {
                return (0, r.jsx)(s.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...i
                })
            };

            function l(e, t, n) {
                return (0, i.openModal)(a(e, t, n), {
                    onCloseCallback: t
                })
            }

            function o(e, t, n, r) {
                return (0, i.updateModal)(e, a(t, n, r))
            }
        }
    }
]);