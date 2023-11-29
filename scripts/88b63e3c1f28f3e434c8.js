(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["40"], {
        78349: function(e, t, n) {
            "use strict";
            n("424973"), e.exports.parse = function(e) {
                var t = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!t) return null;
                t.shift();
                var n = null,
                    r = [];
                t[2] && (n = (l = t[2].split("-")).shift(), r = l);
                var a = [];
                t[5] && (a = t[5].split("-")).shift();
                var i = [];
                if (t[6]) {
                    (l = t[6].split("-")).shift();
                    for (var l, u, s = []; l.length;) {
                        var o = l.shift();
                        1 === o.length ? u ? (i.push({
                            singleton: u,
                            extension: s
                        }), u = o, s = []) : u = o : s.push(o)
                    }
                    i.push({
                        singleton: u,
                        extension: s
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
                        variant: a,
                        extension: i,
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
        48174: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            })
        },
        775560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return a.default
                },
                useLazyValue: function() {
                    return i.default
                }
            });
            var r = n("14716"),
                a = n("745510"),
                i = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("222007");
            var r = n("884691");

            function a() {
                let [, e] = (0, r.useState)({});
                return (0, r.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("884691");
            let a = {};

            function i(e) {
                let t = (0, r.useRef)(a);
                return t.current === a && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("884691"),
                a = n("48174");
            let i = [];

            function l(e, t) {
                let n = (0, r.useRef)(),
                    l = (0, r.useRef)(i);
                return l.current === i ? (n.current = e(), l.current = t) : !(0, a.default)(t, l.current) && (n.current = e(), l.current = t), n.current
            }
        },
        133457: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchEULA: function() {
                    return l
                }
            });
            var r = n("872717"),
                a = n("913144"),
                i = n("49111");
            async function l(e) {
                let t = await r.default.get({
                    url: i.Endpoints.STORE_EULA(e),
                    oldFormErrors: !0
                });
                a.default.dispatch({
                    type: "EULA_FETCH_SUCCESS",
                    eula: t.body
                })
            }
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return a
                },
                popLayer: function() {
                    return i
                },
                popAllLayers: function() {
                    return l
                }
            });
            var r = n("913144");

            function a(e) {
                r.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function i() {
                r.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function l() {
                r.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        523360: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var r = n("37983"),
                a = n("884691"),
                i = n("446674"),
                l = n("77078"),
                u = n("133457"),
                s = n("784736"),
                o = n("145131"),
                d = n("9074"),
                c = n("782340"),
                f = n("639420");

            function E(e) {
                var t;
                let {
                    eulaId: n,
                    transitionState: E,
                    onClose: p
                } = e, h = (0, i.useStateFromStores)([s.default], () => s.default.getEULA(n));
                a.useEffect(() => {
                    (0, u.fetchEULA)(n)
                }, [n]);
                let _ = null !== (t = null == h ? void 0 : h.name) && void 0 !== t ? t : c.default.Messages.LOADING,
                    g = null != h ? (0, r.jsx)(d.default, {
                        children: h.content,
                        className: f.markdown
                    }) : (0, r.jsx)(l.Spinner, {
                        className: f.spinner
                    });
                return (0, r.jsxs)(l.ModalRoot, {
                    transitionState: E,
                    size: l.ModalSize.SMALL,
                    "aria-label": _,
                    children: [(0, r.jsxs)(l.ModalHeader, {
                        justify: o.default.Justify.BETWEEN,
                        children: [(0, r.jsx)(l.Heading, {
                            variant: "heading-lg/semibold",
                            children: _
                        }), (0, r.jsx)(l.ModalCloseButton, {
                            onClick: p
                        })]
                    }), (0, r.jsx)(l.ModalContent, {
                        children: g
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
                a = n("884691"),
                i = n("414456"),
                l = n.n(i),
                u = n("77078"),
                s = n("782340"),
                o = n("347129");
            class d extends a.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: i,
                        error: d,
                        isLoading: c,
                        maxLength: f,
                        transitionState: E,
                        helpMessage: p,
                        retryPrompt: h,
                        retrySuccessMessage: _
                    } = this.props, {
                        code: g,
                        errorMessage: I,
                        retrySuccess: m
                    } = this.state, v = a.Children.count(i) > 0 ? (0, r.jsx)(u.Card, {
                        type: u.Card.Types.WARNING,
                        className: o.card,
                        children: (0, r.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: i
                        })
                    }) : null, R = null != h ? (0, r.jsxs)(u.Text, {
                        className: l(o.submitText, o.spacing),
                        variant: "text-sm/normal",
                        children: [(0, r.jsx)("br", {}), (0, r.jsx)(u.Clickable, {
                            className: l(o.spacing, o.link),
                            onClick: this.handleRetry,
                            children: (0, r.jsx)(u.Anchor, {
                                children: h
                            })
                        })]
                    }) : null, S = m ? (0, r.jsx)(u.Card, {
                        type: u.Card.Types.SUCCESS,
                        className: o.card,
                        children: (0, r.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: _
                        })
                    }) : null;
                    return (0, r.jsx)(u.ModalRoot, {
                        transitionState: E,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(u.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(u.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, r.jsxs)(u.ModalContent, {
                                children: [null != p ? (0, r.jsx)(u.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: o.spacing,
                                    children: p
                                }) : null, v, S, (0, r.jsxs)(u.FormItem, {
                                    title: this.getLabelText(),
                                    className: o.spacing,
                                    children: [(0, r.jsx)(u.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != f ? f : 10,
                                        value: g,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(u.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: o.error,
                                        children: null != d ? d : I
                                    }) : null, R]
                                })]
                            }), (0, r.jsxs)(u.ModalFooter, {
                                children: [(0, r.jsx)(u.Button, {
                                    type: "submit",
                                    disabled: c || 0 === g.length,
                                    children: null != n ? n : s.default.Messages.CONFIRM
                                }), (0, r.jsx)(u.Button, {
                                    onClick: this.handleCancel,
                                    disabled: c,
                                    look: u.Button.Looks.LINK,
                                    color: u.Button.Colors.PRIMARY,
                                    children: s.default.Messages.CANCEL
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
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? s.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : s.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? s.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : s.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
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
        599417: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r, a = n("872717"),
                i = n("49111"),
                l = n("782340");
            r = class extends a.default.V8APIError {
                constructor(e, t) {
                    super(e, t, null != t ? l.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: i.Links.STATUS,
                        details: "".concat(t)
                    }) : l.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: i.Links.STATUS
                    }))
                }
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r, a = n("872717"),
                i = n("49111"),
                l = n("782340");
            r = class extends a.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? l.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: i.Links.STATUS,
                        details: "".concat(t)
                    }) : l.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: i.Links.STATUS
                    }))
                }
            }
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("773336");
            async function a(e, t) {
                let {
                    default: a
                } = await n.el("572544").then(n.bind(n, "572544")), i = a(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != i) i(null);
                else if (r.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var r, a, i, l;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return r
                },
                BotTagTypes: function() {
                    return a
                }
            }), (i = r || (r = {}))[i.GAME = 1] = "GAME", i[i.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", i[i.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (l = a || (a = {}))[l.BOT = 0] = "BOT", l[l.SERVER = 1] = "SERVER", l[l.SYSTEM_DM = 2] = "SYSTEM_DM", l[l.OFFICIAL = 3] = "OFFICIAL", l[l.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", l[l.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", l[l.AI = 6] = "AI", l[l.REMIX = 7] = "REMIX"
        },
        616265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r = {
                openCreateGuildModal: e => {
                    n.el("297267").then(n.bind(n, "297267")).then(t => {
                        let {
                            openCreateGuildModal: n
                        } = t;
                        return n(e)
                    })
                },
                updateCreateGuildModal: e => {
                    n.el("297267").then(n.bind(n, "297267")).then(t => {
                        let {
                            updateCreateGuildModal: n
                        } = t;
                        return n(e)
                    })
                }
            }
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var r = n("872717"),
                a = n("913144"),
                i = n("479756"),
                l = n("38654"),
                u = n("9294"),
                s = n("26989"),
                o = n("337543"),
                d = n("697218"),
                c = n("49111");
            let f = async (e, t) => {
                let n = null != t ? t : o.default.getInviteKeyForGuildId(e),
                    i = d.default.getCurrentUser(),
                    l = !s.default.isMember(e, null == i ? void 0 : i.id);
                try {
                    let t = await r.default.get({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: l,
                            invite_code: null != n ? (0, u.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: i
                    } = t;
                    return a.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: i.version,
                            description: i.description,
                            formFields: i.form_fields,
                            guild: i.guild
                        }
                    }), i
                } catch (t) {
                    a.default.dispatch({
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
                        body: i
                    } = n;
                a.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: i.version,
                        description: i.description,
                        formFields: i.form_fields
                    }
                })
            }, p = async (e, t) => {
                let n = await r.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: i
                    } = n;
                a.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: i.version,
                        description: i.description,
                        formFields: i.form_fields
                    }
                })
            }, h = async (e, t) => {
                await r.default.patch({
                    url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, _ = async (e, t) => {
                if (l.default.isFullServerPreview(e)) {
                    (0, i.updateImpersonatedData)(e, {
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
                            body: i
                        } = n;
                    return a.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: i
                    }), i
                } catch (e) {
                    throw e
                }
            };
            var g = {
                fetchVerificationForm: f,
                updateVerificationForm: E,
                updateVerificationFormDescription: p,
                enableVerificationForm: h,
                submitVerificationForm: _
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return i
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return l
                },
                MAX_FORM_ELEMENTS: function() {
                    return u
                },
                MAX_NUM_RULES: function() {
                    return s
                },
                MAX_RULE_LENGTH: function() {
                    return o
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
                    return p
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return h
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return _
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return g
                }
            }), n("222007");
            var r, a = n("567054");
            a.VerificationFormFieldTypes.VERIFICATION;
            let i = new Set([a.VerificationFormFieldTypes.TERMS]),
                l = new Set([a.VerificationFormFieldTypes.MULTIPLE_CHOICE, a.VerificationFormFieldTypes.TEXT_INPUT, a.VerificationFormFieldTypes.PARAGRAPH]),
                u = 5,
                s = 16,
                o = 300,
                d = 300,
                c = 8,
                f = 150,
                E = 150,
                p = 1e3,
                h = 300,
                _ = "Membership Gating",
                g = "in-app-member-verification";
            (r || (r = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let r;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return a
                }
            }), r = n("453265").default;
            let a = r.openMemberVerificationModal;
            r.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return u
                },
                setHasUnsubmittedChanges: function() {
                    return s
                },
                setShowWarning: function() {
                    return o
                }
            });
            var r = n("308503"),
                a = n("659500"),
                i = n("49111");
            let l = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                u = (0, r.default)(e => l),
                s = e => {
                    u.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                o = e => {
                    u.setState({
                        shouldShowWarning: e
                    }), e && a.ComponentDispatch.dispatch(i.ComponentActions.EMPHASIZE_NOTICE)
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
            var a = n("551042"),
                i = n("599110"),
                l = n("50926"),
                u = n("347977"),
                s = n("394294"),
                o = n("49111");
            let d = () => {
                    i.default.track(o.AnalyticEvents.MODAL_DISMISSED, {
                        type: s.MEMBER_VERIFICATION_TYPE
                    })
                },
                c = e => {
                    i.default.track(o.AnalyticEvents.OPEN_MODAL, {
                        type: s.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var f = {
                openMemberVerificationModal(e, t) {
                    c(e);
                    let i = async t => {
                        await l.default.submitVerificationForm(e, t)
                    };
                    (0, a.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, r.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: i,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (u.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, u.setShowWarning)(!0);
                                        return
                                    }
                                    d()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: s.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            d(), u.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, u.setShowWarning)(!0) : (0, a.closeModal)(s.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && d(), (0, a.closeModal)(s.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return I
                },
                updateImpersonating: function() {
                    return m
                },
                stopImpersonating: function() {
                    return v
                },
                updateImpersonatedChannels: function() {
                    return S
                },
                updateImpersonatedRoles: function() {
                    return C
                },
                updateImpersonatedData: function() {
                    return A
                }
            }), n("222007");
            var r = n("913144"),
                a = n("716241"),
                i = n("393414"),
                l = n("42203"),
                u = n("923959"),
                s = n("26989"),
                o = n("305961"),
                d = n("957255"),
                c = n("18494"),
                f = n("282109"),
                E = n("599110"),
                p = n("38654"),
                h = n("507950"),
                _ = n("49111"),
                g = n("724210");

            function I(e, t) {
                E.default.track(_.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, a.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === h.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), R(e)
            }

            function m(e, t) {
                let n = p.default.getData(e);
                null != n && n.type === t.type && (E.default.track(_.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, a.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === h.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), R(e))
            }

            function v(e) {
                r.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function R(e) {
                let t = c.default.getChannelId(e),
                    n = l.default.getChannel(t),
                    r = null != t && (0, g.isStaticChannelRoute)(t);
                if (!r && !d.default.can(_.Permissions.VIEW_CHANNEL, n)) {
                    let t = u.default.getDefaultChannel(e);
                    null != t && (0, i.transitionTo)(_.Routes.CHANNEL(e, t.id))
                }
            }

            function S(e, t, n) {
                let r = new Set(f.default.getOptedInChannels(e));
                t.forEach(e => r.add(e)), n.forEach(e => r.delete(e)), m(e, {
                    type: h.ImpersonateType.NEW_MEMBER,
                    optInChannels: r
                })
            }

            function C(e, t) {
                let n = o.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...u.default.getSelectableChannelIds(e), ...u.default.getVocalChannelIds(e)],
                        r = Array.from(t);
                    u.default.addConditionalChangeListener(() => {
                        let t = s.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (r.some(e => !t.roles.includes(e))) return !0;
                        let a = [...u.default.getSelectableChannelIds(e), ...u.default.getVocalChannelIds(e)],
                            i = a.filter(e => !n.includes(e));
                        return i.length > 0 && S(e, i, []), !1
                    })
                }(e, t);
                let r = {};
                t.forEach(e => r[e] = n.roles[e]), m(e, {
                    type: h.ImpersonateType.NEW_MEMBER,
                    roles: r
                })
            }

            function A(e, t) {
                m(e, {
                    type: h.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return l
                },
                generateInviteKeyFromExtraData: function() {
                    return u
                },
                parseExtraDataFromInviteKey: function() {
                    return s
                },
                parseInviteCodeFromInviteKey: function() {
                    return o
                }
            }), n("222007");
            var r = n("522632"),
                a = n("833858");
            let i = "event";

            function l(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = r.parse(t);
                        return (0, a.getFirstQueryStringValue)(e[i])
                    } catch (e) {
                        return
                    }
                }(t);
                return u({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function u(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(i, "=").concat(n)
            }

            function s(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let l = r.parse(n),
                    u = (0, a.getFirstQueryStringValue)(l[i]);
                return {
                    baseCode: t,
                    guildScheduledEventId: u
                }
            }

            function o(e) {
                let [t] = e.split("?");
                return t
            }
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("702976");
            var r, a = n("866227"),
                i = n.n(a),
                l = n("666038");
            r = class e extends l.default {
                static createFromServer(t) {
                    var n;
                    return new e({
                        ...t,
                        maxUses: t.max_uses,
                        maxAge: t.max_age,
                        createdAt: i(null !== (n = t.created_at) && void 0 !== n ? n : void 0),
                        targetType: t.target_type,
                        targetUser: t.target_user,
                        targetApplication: t.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = i(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = i(this.createdAt);
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
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("702976");
            var r = n("446674"),
                a = n("913144"),
                i = n("9294"),
                l = n("49111");
            let u = {},
                s = {},
                o = {};

            function d(e, t) {
                var n;
                e = null != e ? e : "";
                let r = (0, i.parseExtraDataFromInviteKey)(e),
                    a = u[e],
                    s = null != a ? {
                        state: l.InviteStates.RESOLVING,
                        ...a
                    } : {
                        state: l.InviteStates.RESOLVING,
                        code: r.baseCode
                    };
                t(s), u = {
                    ...u,
                    [e]: s
                }, (null === (n = s.guild) || void 0 === n ? void 0 : n.id) != null && (o = {
                    ...o,
                    [s.guild.id]: e
                })
            }

            function c(e) {
                return d(e.code, t => {
                    t.state = "banned" in e && e.banned ? l.InviteStates.BANNED : l.InviteStates.EXPIRED
                })
            }
            class f extends r.default.Store {
                getInvite(e) {
                    return u[e]
                }
                getInviteError(e) {
                    return s[e]
                }
                getInvites() {
                    return u
                }
                getInviteKeyForGuildId(e) {
                    return o[e]
                }
            }
            f.displayName = "InviteStore";
            var E = new f(a.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, i.parseExtraDataFromInviteKey)(t);
                    u = {
                        ...u,
                        [t]: {
                            code: n.baseCode,
                            state: l.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return d(e.code, t => {
                        var n, r;
                        t.state = l.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: c,
                INSTANT_INVITE_REVOKE_SUCCESS: c,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        t.state = l.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => d(e.code, e => {
                        e.state = l.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        var n, r;
                        t.state = l.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return d(e.code, e => {
                        e.state = l.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return d(e.code, t => {
                        t.state = l.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return s[e.code] = e.error, d(e.code, e => {
                        e.state = l.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return d(e.code, e => {
                        e.state = l.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = l.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = l.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        784736: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("446674"),
                a = n("913144");
            let i = {};
            class l extends r.default.Store {
                getEULA(e) {
                    return i[e]
                }
            }
            l.displayName = "EULAStore";
            var u = new l(a.default, {
                EULA_FETCH_SUCCESS: function(e) {
                    let {
                        eula: t
                    } = e;
                    i[t.id] = t
                }
            })
        },
        895530: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("414456"),
                i = n.n(a),
                l = n("813986");

            function u(e) {
                let {
                    children: t,
                    tag: n,
                    className: a
                } = e;
                return n = null != n ? n : "h3", (0, r.jsx)(n, {
                    className: i(l.title, a),
                    children: t
                })
            }
        },
        9074: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var r, a = n("37983"),
                i = n("884691"),
                l = n("414456"),
                u = n.n(l),
                s = n("132710"),
                o = n.n(s),
                d = n("269936"),
                c = n("647374"),
                f = n("47677"),
                E = n("895530"),
                p = n("238165"),
                h = n("862839");
            let _ = new RegExp("https?://".concat(null !== (r = window.GLOBAL_ENV.CDN_HOST) && void 0 !== r ? r : ""));

            function g(e) {
                return "string" == typeof e.content ? e.content : v(e.content)
            }
            let I = {
                    ...o.defaultRules,
                    heading: {
                        ...o.defaultRules.heading,
                        react(e, t, n) {
                            let r = "h".concat(e.level);
                            return (0, a.jsx)(E.default, {
                                tag: r,
                                children: t(e.content, n)
                            }, n.key)
                        }
                    },
                    paragraph: {
                        ...o.defaultRules.paragraph,
                        react: (e, t, n) => (0, a.jsx)("div", {
                            className: p.paragraph,
                            children: t(e.content, n)
                        }, n.key)
                    },
                    strong: {
                        ...o.defaultRules.strong,
                        order: 6
                    },
                    em: {
                        ...o.defaultRules.em,
                        order: 6
                    },
                    u: {
                        ...o.defaultRules.u,
                        order: 5
                    },
                    del: {
                        ...o.defaultRules.del,
                        order: 6
                    },
                    link: {
                        ...c.default,
                        ...(0, f.default)({
                            enableBuildOverrides: !1
                        }),
                        order: 6
                    },
                    blockQuote: {
                        ...o.defaultRules.blockQuote,
                        react: (e, t, n) => (0, a.jsx)("blockquote", {
                            className: p.blockquote,
                            children: g(e)
                        }, n.key)
                    },
                    image: {
                        ...o.defaultRules.image,
                        order: 6,
                        match(e, t, n) {
                            let r = o.defaultRules.image;
                            if (null == r || null == r.match) return !1;
                            let a = r.match(e, t, n);
                            if (null != a && Array.isArray(a) && a.length >= 3) {
                                let e = a[2];
                                if ("string" == typeof e) return null != e.match(_) ? a : null
                            }
                            return !1
                        }
                    },
                    inlineCode: {
                        ...o.defaultRules.inlineCode,
                        order: 6,
                        react: (e, t, n) => (0, a.jsx)("code", {
                            className: p.codeInline,
                            children: g(e)
                        }, n.key)
                    },
                    codeBlock: {
                        ...o.defaultRules.codeBlock,
                        react(e, t, r) {
                            let i = () => (0, a.jsx)("pre", {
                                children: (0, a.jsx)("code", {
                                    className: u(h.scrollbarGhostHairline, "hljs"),
                                    children: g(e)
                                })
                            }, r.key);
                            return (0, a.jsx)(d.LazyLibrary, {
                                createPromise: () => n.el("86256").then(n.bind(n, "86256")),
                                webpackId: "86256",
                                renderFallback: i,
                                render: t => {
                                    if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return i();
                                    {
                                        let n = t.highlight(e.lang, e.content, !0);
                                        return null == n ? i() : (0, a.jsx)("pre", {
                                            children: (0, a.jsx)("code", {
                                                className: u(h.scrollbarGhostHairline, "hljs", n.language),
                                                dangerouslySetInnerHTML: {
                                                    __html: n.value
                                                }
                                            })
                                        }, r.key)
                                    }
                                }
                            }, r.key)
                        }
                    }
                },
                m = o.parserFor(I),
                v = o.reactFor(o.ruleOutput(I, "react"));
            class R extends i.PureComponent {
                render() {
                    let {
                        className: e,
                        children: t,
                        state: n,
                        parser: r,
                        output: i
                    } = this.props, l = r("".concat(t, "\n\n"), {
                        inline: !1,
                        ...n
                    }), s = i(l);
                    return (0, a.jsx)("div", {
                        className: u(p.markdown, e),
                        children: s
                    })
                }
            }
            R.rules = I, R.defaultProps = {
                parser: m,
                output: v
            };
            var S = R
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return l
                },
                copy: function() {
                    return u
                }
            }), n("70102");
            var r = n("281071"),
                a = n("773336"),
                i = n("50885");
            let l = (() => {
                if (a.isPlatformEmbedded) return null != i.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function u(e) {
                return !!l && (a.isPlatformEmbedded ? (i.default.copy(e), !0) : r.copy(e))
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return i
                }
            });
            var r = n("917351"),
                a = n.n(r);
            let i = e => "function" == typeof e ? e() : e;
            a.curry((e, t, n) => i(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let r, a;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("70102");
            var i = n("697218"),
                l = n("615931");
            let u = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                r = e.showModal, u = e.updateModalProps, a = n("551042").closeModal
            }

            function s(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: i,
                    modalProps: l = {},
                    hooks: {
                        onEarlyClose: s
                    } = {}
                } = e;
                if (null == r) {
                    null == s || s();
                    return
                }
                let d = r(p, c, l);

                function c() {
                    null == s || s()
                }

                function f(e) {
                    a(d), n(e)
                }

                function E(e) {
                    a(d), i(e)
                }

                function p(e) {
                    return u(d, p, c, {
                        ...l,
                        isLoading: !0
                    }), o({
                        promiseFn: t,
                        resolve: f,
                        reject: E,
                        code: e,
                        mfaCodeHandler: h,
                        isModalOpen: !0
                    })
                }

                function h(e) {
                    let {
                        res: t
                    } = e;
                    u(d, p, c, {
                        ...l,
                        error: t.body.message
                    })
                }
            }

            function o(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: r,
                    code: a,
                    mfaCodeHandler: i = s,
                    isModalOpen: l = !1,
                    ...u
                } = e;
                return t(null != a ? {
                    code: a
                } : {}).then(n, e => {
                    var a, s;
                    if (a = e, s = l, a.body && 60008 === a.body.code || s && 429 === a.status) return i({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e,
                        ...u
                    });
                    r(e)
                })
            }

            function d(e, t) {
                var n, r;
                let {
                    checkEnabled: a = null !== (r = null === (n = i.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== r && r,
                    ...u
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, l.resolveThunk)(a) ? s : o)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...u
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
        655518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("781738");
            var r = {
                escape: e => e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return u
                },
                updateModalProps: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("551042"),
                i = n("920636");
            let l = (e, t, n) => function(a) {
                return (0, r.jsx)(i.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...a
                })
            };

            function u(e, t, n) {
                return (0, a.openModal)(l(e, t, n), {
                    onCloseCallback: t
                })
            }

            function s(e, t, n, r) {
                return (0, a.updateModal)(e, l(t, n, r))
            }
        },
        281071: function(e, t, n) {
            "use strict";

            function r(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    r = window.getSelection(),
                    a = document.createElement("textarea");
                a.value = e, a.contentEditable = "true", a.style.visibility = "none", t.appendChild(a), n.selectNodeContents(a), null == r || r.removeAllRanges(), null == r || r.addRange(n), a.focus(), a.setSelectionRange(0, e.length);
                let i = document.execCommand("copy");
                return t.removeChild(a), i
            }
            n.r(t), n.d(t, {
                copy: function() {
                    return r
                }
            }), n("70102")
        }
    }
]);