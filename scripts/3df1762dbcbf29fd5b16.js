(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["39688"], {
        376507: function(e, t, n) {
            "use strict";

            function i(e) {
                let t = "==".slice(0, (4 - e.length % 4) % 4),
                    n = e.replace(/-/g, "+").replace(/_/g, "/") + t,
                    i = atob(n),
                    r = new ArrayBuffer(i.length),
                    l = new Uint8Array(r);
                for (let e = 0; e < i.length; e++) l[e] = i.charCodeAt(e);
                return r
            }

            function r(e) {
                let t = new Uint8Array(e),
                    n = "";
                for (let e of t) n += String.fromCharCode(e);
                let i = btoa(n),
                    r = i.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
                return r
            }
            n.r(t), n.d(t, {
                create: function() {
                    return N
                },
                get: function() {
                    return f
                }
            });
            var l = "copy",
                a = "convert";

            function u(e, t, n) {
                if (t === l) return n;
                if (t === a) return e(n);
                if (t instanceof Array) return n.map(n => u(e, t[0], n));
                if (t instanceof Object) {
                    let i = {};
                    for (let [r, l] of Object.entries(t)) {
                        if (l.derive) {
                            let e = l.derive(n);
                            void 0 !== e && (n[r] = e)
                        }
                        if (!(r in n)) {
                            if (l.required) throw Error("Missing key: ".concat(r));
                            continue
                        }
                        if (null == n[r]) {
                            i[r] = null;
                            continue
                        }
                        i[r] = u(e, l.schema, n[r])
                    }
                    return i
                }
            }

            function o(e, t) {
                return {
                    required: !0,
                    schema: e,
                    derive: t
                }
            }

            function s(e) {
                return {
                    required: !0,
                    schema: e
                }
            }

            function _(e) {
                return {
                    required: !1,
                    schema: e
                }
            }
            var E = {
                    type: s(l),
                    id: s(a),
                    transports: _(l)
                },
                c = {
                    appid: _(l),
                    appidExclude: _(l),
                    credProps: _(l)
                },
                d = {
                    appid: _(l),
                    appidExclude: _(l),
                    credProps: _(l)
                },
                T = {
                    publicKey: s({
                        rp: s(l),
                        user: s({
                            id: s(a),
                            name: s(l),
                            displayName: s(l)
                        }),
                        challenge: s(a),
                        pubKeyCredParams: s(l),
                        timeout: _(l),
                        excludeCredentials: _([E]),
                        authenticatorSelection: _(l),
                        attestation: _(l),
                        extensions: _(c)
                    }),
                    signal: _(l)
                },
                I = {
                    type: s(l),
                    id: s(l),
                    rawId: s(a),
                    authenticatorAttachment: _(l),
                    response: s({
                        clientDataJSON: s(a),
                        attestationObject: s(a),
                        transports: o(l, e => {
                            var t;
                            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
                        })
                    }),
                    clientExtensionResults: o(d, e => e.getClientExtensionResults())
                },
                S = {
                    mediation: _(l),
                    publicKey: s({
                        challenge: s(a),
                        timeout: _(l),
                        rpId: _(l),
                        allowCredentials: _([E]),
                        userVerification: _(l),
                        extensions: _(c)
                    }),
                    signal: _(l)
                },
                A = {
                    type: s(l),
                    id: s(l),
                    rawId: s(a),
                    authenticatorAttachment: _(l),
                    response: s({
                        clientDataJSON: s(a),
                        authenticatorData: s(a),
                        signature: s(a),
                        userHandle: s(a)
                    }),
                    clientExtensionResults: o(d, e => e.getClientExtensionResults())
                };
            async function N(e) {
                let t = await navigator.credentials.create(u(i, T, e));
                return u(r, I, t)
            }
            async function f(e) {
                let t = await navigator.credentials.get(u(i, S, e));
                return u(r, A, t)
            }
        },
        666020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return l
                },
                unsubscribeMembers: function() {
                    return a
                },
                subscribeChannel: function() {
                    return u
                },
                subscribeChannelDimensions: function() {
                    return o
                }
            });
            var i = n("913144"),
                r = n("696605");

            function l(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function a(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function u(e, t, n) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: e,
                    channelId: t,
                    ranges: n
                })
            }

            function o(e) {
                let {
                    guildId: t,
                    channelId: n,
                    y: i,
                    height: l,
                    rowHeight: a
                } = e;

                function o(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / a)) + t)
                }
                let s = [];

                function _(e) {
                    let t = e + (r.MINIMUM_RANGE - 1);
                    return s.push([e, t]), t + 1
                }
                let E = o(.5 * l),
                    c = o(i, -E),
                    d = o(i + l, E);
                for (c > 0 && (c = Math.max(_(0), c)), c = Math.floor(c / r.MINIMUM_RANGE) * r.MINIMUM_RANGE; c <= d;) c = _(c);
                u(t, n, s)
            }
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return r
                },
                popLayer: function() {
                    return l
                },
                popAllLayers: function() {
                    return a
                }
            });
            var i = n("913144");

            function r(e) {
                i.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function l() {
                i.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function a() {
                i.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        152584: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                accountDetailsInit: function() {
                    return I
                },
                accountDetailsClose: function() {
                    return S
                },
                disableAccount: function() {
                    return A
                },
                saveAccountRequest: function() {
                    return N
                },
                saveAccountChanges: function() {
                    return f
                },
                getHarvestStatus: function() {
                    return p
                },
                requestHarvest: function() {
                    return O
                },
                setPendingAvatar: function() {
                    return C
                },
                setPendingGlobalNameName: function() {
                    return R
                },
                setPendingAvatarDecoration: function() {
                    return L
                },
                setPendingProfileEffectID: function() {
                    return m
                },
                clearErrors: function() {
                    return U
                },
                resetPendingAccountChanges: function() {
                    return M
                },
                resetAllPending: function() {
                    return h
                },
                resetAndCloseUserProfileForm: function() {
                    return P
                },
                setDisableSubmit: function() {
                    return g
                }
            });
            var i = n("872717"),
                r = n("95410"),
                l = n("819855"),
                a = n("913144"),
                u = n("393414"),
                o = n("599110"),
                s = n("315102"),
                _ = n("730622"),
                E = n("437822"),
                c = n("49111"),
                d = n("191349"),
                T = n("782340");

            function I() {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function S() {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function A(e, t) {
                let n = t ? T.default.Messages.DELETE_ACCOUNT : T.default.Messages.DISABLE_ACCOUNT,
                    r = t ? c.Endpoints.DELETE_ACCOUNT : c.Endpoints.DISABLE_ACCOUNT;
                return (0, _.default)(t => i.default.post({
                    url: r,
                    body: {
                        password: e,
                        ...t
                    },
                    oldFormErrors: !0
                }), {
                    modalProps: {
                        title: n
                    },
                    checkEnabled: !1
                }).then(() => {
                    E.default.logoutInternal(), (0, u.transitionTo)(c.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function N(e) {
                let t = await i.default.patch({
                        url: c.Endpoints.ME,
                        oldFormErrors: !0,
                        body: e
                    }),
                    n = t.body;
                if (n.token) {
                    let t = n.token;
                    delete n.token, a.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: t,
                        userId: n.id
                    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && a.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return a.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), t
            }

            function f(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: i,
                    emailToken: l,
                    password: u,
                    avatar: E,
                    avatarDecoration: I,
                    newPassword: S,
                    globalName: A
                } = e;
                return a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, _.default)(e => {
                    let a = {
                        username: t,
                        email: i,
                        email_token: l,
                        password: u,
                        avatar: E,
                        discriminator: n,
                        global_name: A,
                        new_password: S,
                        ...e
                    };
                    null === I && (a.avatar_decoration_id = null), null != I && (a.avatar_decoration_id = I.id, a.avatar_decoration_sku_id = I.skuId);
                    let o = r.default.get(c.DEVICE_TOKEN),
                        s = (0, d.getDevicePushProvider)();
                    null != s && null != o && (a.push_provider = s, a.push_token = o);
                    let _ = r.default.get(c.DEVICE_VOIP_TOKEN);
                    return null != d.DEVICE_PUSH_VOIP_PROVIDER && null != _ && (a.push_voip_provider = d.DEVICE_PUSH_VOIP_PROVIDER, a.push_voip_token = _), N(a)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: T.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => a.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return o.default.track(c.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, s.isAnimatedIconHash)(t.avatar)
                    }), a.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function p() {
                return i.default.get({
                    url: c.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function O() {
                return i.default.post({
                    url: c.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function C(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? l.AccessibilityAnnouncer.announce(T.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : l.AccessibilityAnnouncer.announce(T.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function R(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function L(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function m(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: e
                })
            }

            function U() {
                a.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function M() {
                a.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function h() {
                a.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function P() {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function g(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        79112: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var i = n("872717"),
                r = n("95410"),
                l = n("913144"),
                a = n("211895"),
                u = n("26092"),
                o = n("599110"),
                s = n("315102"),
                _ = n("730622"),
                E = n("49111"),
                c = n("191349"),
                d = n("782340"),
                T = {
                    open() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                openWithoutBackstack: !1
                            };
                        (0, a.default)(e, t, n)
                    },
                    init: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_INIT",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    close() {
                        let e = u.default.onClose;
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), null != e && e()
                    },
                    setSection(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SET_SECTION",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    clearSubsection(e) {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                            forSection: e
                        })
                    },
                    clearScrollPosition(e) {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                            forSection: e
                        })
                    },
                    updateAccount(e) {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                            settings: e
                        })
                    },
                    submitComplete() {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                        })
                    },
                    reset() {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_RESET"
                        })
                    },
                    saveAccountChanges(e, t) {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT"
                        });
                        let {
                            username: n,
                            email: a,
                            emailToken: u,
                            password: T,
                            avatar: I,
                            newPassword: S,
                            discriminator: A
                        } = e, {
                            close: N
                        } = t;
                        return (0, _.default)(e => {
                            let t = {
                                    username: n,
                                    email: a,
                                    email_token: u,
                                    password: T,
                                    avatar: I,
                                    new_password: S,
                                    ...e,
                                    discriminator: null != A && "" !== A ? A : void 0
                                },
                                l = r.default.get(E.DEVICE_TOKEN),
                                o = (0, c.getDevicePushProvider)();
                            null != o && null != l && (t.push_provider = o, t.push_token = l);
                            let s = r.default.get(E.DEVICE_VOIP_TOKEN);
                            return null != c.DEVICE_PUSH_VOIP_PROVIDER && null != s && (t.push_voip_provider = c.DEVICE_PUSH_VOIP_PROVIDER, t.push_voip_token = s), i.default.patch({
                                url: E.Endpoints.ME,
                                oldFormErrors: !0,
                                body: t
                            })
                        }, {
                            checkEnabled: !1,
                            modalProps: {
                                title: d.default.Messages.TWO_FA_CHANGE_ACCOUNT
                            },
                            hooks: {
                                onEarlyClose: () => l.default.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }).then(e => {
                            let t = e.body,
                                n = t.token;
                            return o.default.track(E.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, s.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, l.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), l.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != S && l.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: S
                            }), null != T && null != S && l.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), N ? this.close() : this.submitComplete(), e
                        }, e => (l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: e.body
                        }), e))
                    }
                }
        },
        901582: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("748820"),
                a = n("599110"),
                u = n("117362"),
                o = n("49111");
            class s extends r.Component {
                renderProvider(e) {
                    var t, n;
                    let {
                        section: r,
                        page: l,
                        object: u,
                        objectType: o,
                        children: s
                    } = this.props, _ = this.mergeLocation(e.location, this.getLocation(l, r, u, o)), E = this.getContext(_, null !== (t = this._loadDate) && void 0 !== t ? t : e.loadDate, null !== (n = this._loadId) && void 0 !== n ? n : e.loadId);
                    return (0, i.jsx)(a.AnalyticsContext.Provider, {
                        value: E,
                        children: s
                    })
                }
                render() {
                    let {
                        context: e
                    } = this.props;
                    return null != e ? this.renderProvider(e) : (0, i.jsx)(a.AnalyticsContext.Consumer, {
                        children: e => this.renderProvider(e)
                    })
                }
                constructor(e) {
                    super(e), this._loadId = null, this._loadDate = this.props.root ? Date.now() : null, this.getLocation = (0, u.cachedFunction)((e, t, n, i) => {
                        let r = {};
                        return null != e && (r.page = e), null != t && (r.section = t), null != n && (r.object = n), null != i && (r.objectType = i), r
                    }), this.mergeLocation = (0, u.cachedFunction)((e, t) => ({
                        ...e,
                        ...t
                    })), this.getContext = (0, u.cachedFunction)((e, t, n) => ({
                        location: e,
                        loadDate: t,
                        loadId: n
                    })), null != e.loadId ? this._loadId = e.loadId : e.root && (this._loadId = (0, l.v4)())
                }
            }
            s.Pages = o.AnalyticsPages, s.Sections = o.AnalyticsSections, s.Objects = o.AnalyticsObjects, s.ObjectTypes = o.AnalyticsObjectTypes, s.defaultProps = {
                root: !1
            }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                a = n.n(l),
                u = n("77078"),
                o = n("782340"),
                s = n("347129");
            class _ extends r.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: l,
                        error: _,
                        isLoading: E,
                        maxLength: c,
                        transitionState: d,
                        helpMessage: T,
                        retryPrompt: I,
                        retrySuccessMessage: S
                    } = this.props, {
                        code: A,
                        errorMessage: N,
                        retrySuccess: f
                    } = this.state, p = r.Children.count(l) > 0 ? (0, i.jsx)(u.Card, {
                        type: u.Card.Types.WARNING,
                        className: s.card,
                        children: (0, i.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: l
                        })
                    }) : null, O = null != I ? (0, i.jsxs)(u.Text, {
                        className: a(s.submitText, s.spacing),
                        variant: "text-sm/normal",
                        children: [(0, i.jsx)("br", {}), (0, i.jsx)(u.Clickable, {
                            className: a(s.spacing, s.link),
                            onClick: this.handleRetry,
                            children: (0, i.jsx)(u.Anchor, {
                                children: I
                            })
                        })]
                    }) : null, C = f ? (0, i.jsx)(u.Card, {
                        type: u.Card.Types.SUCCESS,
                        className: s.card,
                        children: (0, i.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: S
                        })
                    }) : null;
                    return (0, i.jsx)(u.ModalRoot, {
                        transitionState: d,
                        children: (0, i.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, i.jsx)(u.ModalHeader, {
                                separator: !1,
                                children: (0, i.jsx)(u.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, i.jsxs)(u.ModalContent, {
                                children: [null != T ? (0, i.jsx)(u.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: s.spacing,
                                    children: T
                                }) : null, p, C, (0, i.jsxs)(u.FormItem, {
                                    title: this.getLabelText(),
                                    className: s.spacing,
                                    children: [(0, i.jsx)(u.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != c ? c : 10,
                                        value: A,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, i.jsx)(u.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: s.error,
                                        children: null != _ ? _ : N
                                    }) : null, O]
                                })]
                            }), (0, i.jsxs)(u.ModalFooter, {
                                children: [(0, i.jsx)(u.Button, {
                                    type: "submit",
                                    disabled: E || 0 === A.length,
                                    children: null != n ? n : o.default.Messages.CONFIRM
                                }), (0, i.jsx)(u.Button, {
                                    onClick: this.handleCancel,
                                    disabled: E,
                                    look: u.Button.Looks.LINK,
                                    color: u.Button.Colors.PRIMARY,
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
            _.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var E = _
        },
        838446: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("901582");

            function l(e, t) {
                return function(n) {
                    return (0, i.jsx)(r.default, {
                        page: t.page,
                        section: t.section,
                        object: t.object,
                        objectType: t.objectType,
                        children: (0, i.jsx)(e, {
                            ...n
                        })
                    })
                }
            }
        },
        158534: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("685665");

            function l(e, t) {
                return function(n) {
                    let {
                        AnalyticsLocationProvider: l
                    } = (0, r.default)(t);
                    return (0, i.jsx)(l, {
                        children: (0, i.jsx)(e, {
                            ...n
                        })
                    })
                }
            }
        },
        35647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IdIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M15.298 14.48c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        className: u
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Z",
                        clipRule: "evenodd",
                        className: u
                    })]
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return l
                }
            });
            var i = n("884691"),
                r = n("599110");
            let l = () => i.useContext(r.AnalyticsContext)
        },
        750560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return u
                }
            }), n("37983");
            var i = n("884691"),
                r = n("917351"),
                l = n.n(r);
            n("233736");
            var a = n("666020");

            function u(e) {
                i.useEffect(() => (l.forEach(e, (e, t) => (0, a.subscribeMembers)(t, e)), () => {
                    l.forEach(e, (e, t) => (0, a.unsubscribeMembers)(t, e))
                }), [e])
            }
        },
        812204: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), (i = r || (r = {})).POPOUT_WINDOW = "popout window", i.OVERLAY = "overlay", i.NOTICE = "notice", i.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", i.BADGE = "badge", i.USER_SETTINGS = "user settings", i.USER_SETTINGS_MENU = "user settings menu", i.ACCOUNT = "account", i.TEXT_AND_IMAGES = "text and images", i.GUILD_SETTINGS = "guild settings", i.OVERVIEW = "overview", i.STICKERS = "stickers", i.VANITY_URL = "vanity url", i.PREMIUM_MARKETING = "premium marketing", i.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", i.PREMIUM_PAYMENT_MODAL = "premium payment modal", i.PREMIUM_UPSELL_ALERT = "premium upsell alert", i.PREMIUM_UPSELL_MODAL = "premium upsell modal", i.PREMIUM_SETTINGS = "premium settings", i.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", i.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", i.CHANNEL_CALL = "channel call", i.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", i.RTC_PANEL = "rtc panel", i.SOUNDBOARD_BUTTON = "soundboard button", i.SOUNDBOARD_POPOUT = "soundboard popout", i.SOUNDBOARD_WHEEL = "soundboard wheel", i.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", i.GIFT_BUTTON = "gift button", i.EXPRESSION_SUGGESTIONS = "expression suggestions", i.EMOJI_PICKER = "emoji picker", i.STICKER_PICKER = "sticker picker", i.STICKER_POPOUT = "sticker popout", i.PREMIUM_UPSELL = "premium upsell", i.EMPTY_STATE = "empty state", i.SUBSCRIPTION_DETAILS = "subscription details", i.SUBSCRIPTION_HEADER = "subscription header", i.ACCOUNT_CREDIT_BANNER = "account credit banner", i.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", i.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", i.STREAM_QUALITY_INDICATOR = "stream quality indicator", i.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", i.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", i.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", i.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", i.RPC = "rpc", i.BILLING_STANDALONE = "billing standalone", i.GUILD_CHANNEL_LIST = "guild channel list", i.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", i.STICKER_MESSAGE = "sticker message", i.CHANNEL_TEXT_AREA = "channel text area", i.HEADER_BAR = "header bar", i.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", i.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", i.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", i.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", i.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", i.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", i.GUILD_HEADER = "guild header", i.GUILD_BANNER = "guild banner", i.GUILD_BANNER_NOTICE = "guild banner notice", i.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", i.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", i.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", i.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", i.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", i.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", i.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", i.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", i.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", i.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", i.GUILDS_LIST = "guilds list", i.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", i.ACTIVITY_DIRECTORY = "activity directory", i.ACTIVITY_TILE = "activity tile", i.ACTIVITY_UPSELL = "activity upsell", i.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", i.INSTANT_INVITE_MODAL = "instant invite modal", i.IMAGE_CROPPING_MODAL = "image cropping modal", i.GIF_PICKER = "gif picker", i.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", i.INVITE_MODAL = "invite modal", i.INVITE_EMBED = "invite embed", i.NEW_GUILD_BUTTON = "new guild button", i.CHARACTER_COUNT = "character count", i.DM_CHANNEL = "dm channel", i.GUILD_CHANNEL = "guild channel", i.FORUM_CHANNEL = "forum channel", i.FILE_UPLOAD_POPOUT = "file upload popout", i.EMOJI = "emoji", i.PROFILE = "profile", i.PROFILE_MODAL = "profile modal", i.PROFILE_POPOUT = "profile popout", i.GUILD_PROFILE = "guild profile", i.EDIT_AVATAR = "edit avatar", i.EDIT_BANNER = "edit banner", i.CHAT_INPUT = "chat input", i.CREATE_THREAD = "create thread", i.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", i.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", i.SELECT_IMAGE_MODAL = "select image modal", i.VIDEO_BACKGROUND_OPTIONS = "video background options", i.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", i.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", i.CAMERA_PREVIEW = "camera preview", i.HOME_PAGE_PREMIUM_TAB = "home page premium tab", i.HOME_PAGE_SHOP_TAB = "home page shop tab", i.PREMIUM_MARKETING_SURFACE = "premium marketing surface", i.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", i.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", i.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", i.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", i.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", i.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", i.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", i.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", i.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", i.PREMIUM_MARKETING_FEATURE = "premium marketing feature", i.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", i.PREMIUM_MARKETING_FOOTER = "premium marketing footer", i.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", i.CHANNEL_CALL_ACTION_BAR = "channel call action bar", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", i.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", i.VOICE_CONTROL_TRAY = "voice control tray", i.ACTIVE_NOW_COLUMN = "active now column", i.CONTEXT_MENU = "context menu", i.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", i.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", i.CHANNEL_CATEGORY_MENU = "channel category menu", i.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", i.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", i.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", i.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", i.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", i.CHANNEL_TITLE_MENU = "channel title menu", i.GROUP_DM_MENU = "group dm menu", i.AUDIT_LOG_USER_MENU = "audit log user menu", i.BANNED_USER_MENU = "banned user menu", i.DM_USER_MENU = "dm user menu", i.GROUP_DM_USER_MENU = "group dm user menu", i.GUILD_CHANNEL_USER_MENU = "guild channel user menu", i.GUILD_MODERATION_USER_MENU = "guild moderation user menu", i.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", i.GUILD_SETTINGS_USER_MENU = "guild settings user menu", i.GUILD_USER_MENU = "guild user menu", i.THREAD_USER_MENU = "thread user menu", i.USER_GENERIC_MENU = "user generic menu", i.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", i.VOICE_ACTION_SHEET = "voice action sheet", i.FOCUSED_VOICE_CONTROLS = "focused voice controls", i.MASKED_LINK = "masked link", i.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", i.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", i.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", i.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", i.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", i.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", i.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", i.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", i.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", i.ACCOUNT_PROFILE_POPOUT = "account profile popout", i.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", i.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", i.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", i.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", i.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", i.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", i.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", i.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", i.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", i.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", i.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", i.STAGE_VIDEO_LIMIT = "stage video limit", i.ACTIVITIES_MINI_SHELF = "activities mini shelf", i.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", i.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", i.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", i.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", i.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", i.APP_ICON_EDITOR = "app icon editor", i.CLIENT_THEMES_EDITOR = "client themes editor", i.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", i.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", i.SHARE_NITRO_EMBED = "share nitro embed", i.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", i.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", i.REFERRAL_TRIALS_POPOUT = "referral trials popout", i.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", i.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", i.ACTIVITY_BOOKMARK = "activity bookmark", i.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", i.ACTIVITY_DETAIL_PAGE = "activity detail page", i.ACTIVITIES_PAGE = "activities page", i.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", i.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", i.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", i.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", i.ACTIVITIES_HAPPENING_NOW = "activities happening now", i.MEDIA_VIEWER = "media viewer", i.MESSAGE_LONG_PRESS_MENU = "message long press menu", i.COLLECTIBLES_SHOP = "collectibles shop", i.COLLECTIBLES_SHOP_CARD = "collectibles shop card", i.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", i.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", i.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", i.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", i.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", i.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", i.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", i.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", i.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", i.PREMIUM_BILLING_INFO = "premium billing info", i.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", i.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", i.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", i.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", i.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", i.PREMIUM_PLAN_SELECT = "premium_plan_select", i.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", i.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", i.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", i.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", i.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", i.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", i.MEMBER_SAFETY_PAGE = "member safety page", i.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", i.GUILD_MEMBER_MOD_VIEW = "guild member mod view", i.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", i.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", i.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", i.GUILD_SHOP_PAGE = "guild shop page", i.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", i.MESSAGE_REMIX_TAG = "message remix tag", i.MESSAGE_REMIX_BUTTON = "message remix button", i.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", i.CLIPS_SETTINGS = "clips settings", i.CLIPS_GALLERY = "clips gallery", i.CLIPS_GALLERY_ITEM = "clips gallery item", i.CLIPS_EDITOR = "clips editor", i.CLIPS_SHARE_MODAL = "clips share modal", i.CHANNEL_ATTACH_BUTTON = "channel attach button", i.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", i.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", i.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", i.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", i.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", i.GUILD_EVENT_CARD = "guild event card", i.EVENT_SETTINGS = "event settings";
            var i, r, l = r
        },
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("845579"),
                a = n("662255"),
                u = n("306160");

            function o(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: o,
                    shiftId: s,
                    showIconFirst: _
                } = e, E = l.DeveloperMode.useSetting();
                if (__OVERLAY__ || !E || !u.SUPPORTS_COPY) return null;
                let c = "devmode-copy-id-".concat(t);
                return (0, i.jsx)(r.MenuItem, {
                    id: c,
                    label: n,
                    action: function(e) {
                        let n = null != s && e.shiftKey ? s : t;
                        (0, u.copy)(n), null == o || o()
                    },
                    icon: a.default,
                    showIconFirst: _
                }, c)
            }
        },
        406043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCurrentUserCommunicationDisabled: function() {
                    return u
                },
                default: function() {
                    return _
                },
                userCommunicationDisabled: function() {
                    return E
                }
            });
            var i = n("446674"),
                r = n("26989"),
                l = n("697218"),
                a = n("509");

            function u(e) {
                let t = (0, i.useStateFromStores)([l.default], () => l.default.getCurrentUser());
                return _(null == t ? void 0 : t.id, e)
            }

            function o(e, t, n) {
                return null != t && null != e ? n.getMember(t, e) : null
            }

            function s(e) {
                var t;
                return [null !== (t = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== t ? t : null, (0, a.isMemberCommunicationDisabled)(e)]
            }

            function _(e, t) {
                let n = (0, i.useStateFromStores)([r.default], () => o(e, t, r.default), [t, e]);
                return s(n)
            }

            function E(e, t) {
                let n = o(e, t, r.default);
                return s(n)
            }
        },
        929423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return u
                },
                setCurrentGuild: function() {
                    return o
                },
                initGuildIdentitySettings: function() {
                    return s
                },
                closeGuildIdentitySettings: function() {
                    return _
                },
                resetAndCloseGuildIdentityForm: function() {
                    return E
                },
                setPendingAvatar: function() {
                    return c
                },
                setPendingBanner: function() {
                    return d
                },
                setPendingBio: function() {
                    return T
                },
                setPendingPronouns: function() {
                    return I
                },
                setPendingNickname: function() {
                    return S
                },
                setPendingThemeColors: function() {
                    return A
                },
                resetPendingMemberChanges: function() {
                    return N
                },
                resetPendingProfileChanges: function() {
                    return f
                },
                resetAllPending: function() {
                    return p
                },
                clearErrors: function() {
                    return O
                },
                setDisableSubmit: function() {
                    return C
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("54239"),
                a = n("49111");
            async function u(e, t) {
                let {
                    nick: n,
                    avatar: l
                } = t;
                if (null == e) throw Error("Need guildId");
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await i.default.patch({
                        url: a.Endpoints.SET_GUILD_MEMBER(e),
                        body: {
                            nick: n,
                            avatar: l
                        },
                        oldFormErrors: !0
                    });
                    return r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), r.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: t.body,
                        guildId: e
                    }), t
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: t.body
                    })
                }
            }

            function o(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function s(e, t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function _() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, l.popLayer)()
            }

            function E() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function c(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function d(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function T(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function I(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function S(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function A(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function N() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function f() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function p() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function O() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function C(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let i, r, l, a, u, o, s, _, E;
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var c = n("446674"),
                d = n("913144"),
                T = n("49111");
            let I = T.FormStates.CLOSED,
                S = {},
                A = !1;

            function N() {
                I = T.FormStates.CLOSED, S = {}, s = null, _ = void 0, E = []
            }

            function f() {
                p(), O(), S = {}, I = T.FormStates.OPEN
            }

            function p() {
                i = void 0, u = void 0
            }

            function O() {
                r = void 0, l = void 0, a = void 0, o = void 0
            }
            class C extends c.default.Store {
                getFormState() {
                    return I
                }
                getErrors() {
                    return S
                }
                showNotice() {
                    return void 0 !== i || void 0 !== r || void 0 !== l || void 0 !== a || void 0 !== u || void 0 !== o
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return r
                }
                getPendingBio() {
                    return l
                }
                getPendingNickname() {
                    return u
                }
                getPendingPronouns() {
                    return a
                }
                getPendingAccentColor() {
                    return u
                }
                getPendingThemeColors() {
                    return o
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: r,
                        pendingBio: l,
                        pendingPronouns: a,
                        pendingNickname: u,
                        pendingThemeColors: o
                    }
                }
                getGuild() {
                    return s
                }
                getSource() {
                    return _
                }
                getAnalyticsLocations() {
                    return E
                }
                getIsDisableSubmit() {
                    return A
                }
            }
            C.displayName = "GuildIdentitySettingsStore";
            var R = new C(d.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    s = e.guild, I = T.FormStates.OPEN, S = {}, _ = e.source, E = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: N,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    f(), N()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    s = e.guild, S = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    I = T.FormStates.SUBMITTING, S = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (I !== T.FormStates.SUBMITTING) return !1;
                    I = T.FormStates.OPEN, S = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    I = T.FormStates.OPEN, S = e.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    i = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    r = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
                    let {
                        bio: t
                    } = e;
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    a = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
                    let {
                        nickname: t
                    } = e;
                    u = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    o = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: p,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: O,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: f,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: f,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    S = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    A = t
                }
            })
        },
        130037: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTrackMemberSearchUsed: function() {
                    return T
                },
                useTrackMemberFilterRolesUsed: function() {
                    return I
                },
                MemberSafetyFlagType: function() {
                    return l
                },
                useTrackMemberFilterSafetyFlagsUsed: function() {
                    return S
                },
                ModerationActionType: function() {
                    return a
                },
                useTrackModerationAction: function() {
                    return A
                }
            });
            var i, r, l, a, u = n("884691"),
                o = n("812204"),
                s = n("716241"),
                _ = n("271938"),
                E = n("599110"),
                c = n("49111");

            function d(e, t, n) {
                var i;
                let r = {
                    ...t,
                    ...(0, s.collectGuildAnalyticsMetadata)(null !== (i = t.guild_id) && void 0 !== i ? i : n)
                };
                E.default.track(e, r)
            }

            function T(e) {
                let t = u.useCallback(t => {
                    ! function(e) {
                        let t = {
                            guild_id: e,
                            location: o.default.MEMBER_SAFETY_PAGE
                        };
                        d(c.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, t)
                    }(e)
                }, [e]);
                return t
            }

            function I(e) {
                let t = u.useCallback(t => {
                    ! function(e, t) {
                        let n = {
                            selected_role_count: t.size,
                            guild_id: e,
                            location: o.default.MEMBER_SAFETY_PAGE
                        };
                        d(c.AnalyticEvents.MOD_DASH_FILTER_ROLES, n)
                    }(e, t)
                }, [e]);
                return t
            }(i = l || (l = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", i.COMMUNICATION_DISABLED = "communication_disabled";

            function S(e) {
                let t = u.useCallback(t => {
                    ! function(e, t) {
                        let n = {
                            flag_type: t,
                            guild_id: e,
                            location: o.default.MEMBER_SAFETY_PAGE
                        };
                        d(c.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, n)
                    }(e, t)
                }, [e]);
                return t
            }

            function A(e, t) {
                let {
                    location: n,
                    targetUserId: i,
                    targets: r
                } = t, l = u.useCallback(t => {
                    let l = {
                        action_type: t,
                        mod_user_id: _.default.getId(),
                        guild_id: e,
                        location: n,
                        target_user_id: null != i ? i : void 0,
                        targets: null != r ? r : void 0
                    };
                    d(c.AnalyticEvents.MODERATION_ACTION, l)
                }, [e, n, i, r]);
                return l
            }(r = a || (a = {})).BAN = "ban", r.KICK = "kick", r.MUTE = "mute", r.TIMEOUT = "timeout", r.ADD_ROLE = "add_role", r.REMOVE_ROLE = "remove_role", r.COPY_ID = "copy_id", r.CHANGE_NICKNAME = "change_nickname"
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return N
                },
                updateImpersonating: function() {
                    return f
                },
                stopImpersonating: function() {
                    return p
                },
                updateImpersonatedChannels: function() {
                    return C
                },
                updateImpersonatedRoles: function() {
                    return R
                },
                updateImpersonatedData: function() {
                    return L
                }
            });
            var i = n("913144"),
                r = n("716241"),
                l = n("393414"),
                a = n("42203"),
                u = n("923959"),
                o = n("26989"),
                s = n("305961"),
                _ = n("957255"),
                E = n("18494"),
                c = n("282109"),
                d = n("599110"),
                T = n("38654"),
                I = n("507950"),
                S = n("49111"),
                A = n("724210");

            function N(e, t) {
                d.default.track(S.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === I.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), O(e)
            }

            function f(e, t) {
                let n = T.default.getData(e);
                null != n && n.type === t.type && (d.default.track(S.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === I.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), O(e))
            }

            function p(e) {
                i.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function O(e) {
                let t = E.default.getChannelId(e),
                    n = a.default.getChannel(t),
                    i = null != t && (0, A.isStaticChannelRoute)(t);
                if (!i && !_.default.can(S.Permissions.VIEW_CHANNEL, n)) {
                    let t = u.default.getDefaultChannel(e);
                    null != t && (0, l.transitionTo)(S.Routes.CHANNEL(e, t.id))
                }
            }

            function C(e, t, n) {
                let i = new Set(c.default.getOptedInChannels(e));
                t.forEach(e => i.add(e)), n.forEach(e => i.delete(e)), f(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    optInChannels: i
                })
            }

            function R(e, t) {
                let n = s.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...u.default.getSelectableChannelIds(e), ...u.default.getVocalChannelIds(e)],
                        i = Array.from(t);
                    u.default.addConditionalChangeListener(() => {
                        let t = o.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (i.some(e => !t.roles.includes(e))) return !0;
                        let r = [...u.default.getSelectableChannelIds(e), ...u.default.getVocalChannelIds(e)],
                            l = r.filter(e => !n.includes(e));
                        return l.length > 0 && C(e, l, []), !1
                    })
                }(e, t);
                let i = {};
                t.forEach(e => i[e] = n.roles[e]), f(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    roles: i
                })
            }

            function L(e, t) {
                f(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        906932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAvatarsWithGuilds: function() {
                    return o
                },
                setNewPendingUserBio: function() {
                    return s
                },
                setNewPendingAvatar: function() {
                    return _
                },
                setNewPendingAvatarDecoration: function() {
                    return E
                },
                setNewPendingProfileEffectID: function() {
                    return c
                },
                getProfilePreviewField: function() {
                    return d
                },
                showRemoveAvatar: function() {
                    return T
                },
                showRemoveBanner: function() {
                    return I
                }
            });
            var i = n("884691"),
                r = n("152584"),
                l = n("234251"),
                a = n("783142"),
                u = n("26989");

            function o(e) {
                return i.useMemo(() => {
                    let t = u.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let r in t) {
                        var i;
                        let l = t[r],
                            a = null === (i = l[e]) || void 0 === i ? void 0 : i.avatar;
                        null != a && (null == n[a] && (n[a] = []), n[a].push(r))
                    }
                    return null != n ? Object.entries(n).map(e => e[1][0]) : []
                }, [e])
            }

            function s(e, t) {
                (0, a.setPendingBio)(e === t ? void 0 : e)
            }

            function _(e, t) {
                (0, r.setPendingAvatar)(e === t ? void 0 : e)
            }

            function E(e, t) {
                if ((0, l.isEqualAvatarDecoration)(e, null != t ? t : null)) {
                    (0, r.setPendingAvatarDecoration)(void 0);
                    return
                }(0, r.setPendingAvatarDecoration)(e)
            }

            function c(e, t) {
                if (e === t) {
                    (0, r.setPendingProfileEffectID)(void 0);
                    return
                }(0, r.setPendingProfileEffectID)(e)
            }

            function d(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (null != e) return "" === e ? {
                    value: i ? n : null,
                    isUsingGuildValue: !1
                } : {
                    value: e,
                    isUsingGuildValue: i
                };
                return null != t && "" !== t ? {
                    value: t,
                    isUsingGuildValue: !0
                } : {
                    value: n,
                    isUsingGuildValue: !1
                }
            }

            function T(e, t) {
                return void 0 === e ? null != t : null != e
            }

            function I(e, t) {
                return void 0 === e ? null != t : null != e
            }
        },
        38766: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("884691"),
                r = n("79112"),
                l = n("685665"),
                a = n("929423");
            n("424562");
            var u = n("49111"),
                o = n("397336");

            function s(e) {
                let {
                    guild: t,
                    scrollPosition: n,
                    analyticsLocation: s,
                    analyticsLocations: _,
                    openWithoutBackstack: E = !1
                } = e, {
                    analyticsLocations: c
                } = (0, l.default)(), d = (0, i.useCallback)(() => {
                    null != t && (0, a.initGuildIdentitySettings)(t, null != _ ? _ : c), r.default.open(u.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? o.ProfileCustomizationSubsection.GUILD : o.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: s,
                        analyticsLocations: _,
                        openWithoutBackstack: E
                    })
                }, [t, n, s, _, E, c]);
                return d
            }
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return a
                },
                getDevicePushProvider: function() {
                    return u
                }
            });
            var i, r, l = n("773336");
            let a = null;

            function u() {
                return (0, l.isAndroid)(), null
            }(i = r || (r = {})).REMINDER = "reminder", i.TOP_MESSAGE_PUSH = "top_messages_push", i.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        467940: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("446674"),
                a = n("77078"),
                u = n("272030"),
                o = n("838446"),
                s = n("158534"),
                _ = n("997289"),
                E = n("812204"),
                c = n("685665"),
                d = n("861370"),
                T = n("230947"),
                I = n("130037"),
                S = n("26989"),
                A = n("800762"),
                N = n("300925"),
                f = n("489836"),
                p = n("421602"),
                O = n("459870"),
                C = n("325882"),
                R = n("625187"),
                L = n("806179"),
                m = n("97508"),
                U = n("49111"),
                M = n("782340"),
                h = (0, s.default)((0, o.default)(function(e) {
                    var t;
                    let {
                        user: n,
                        guildId: o,
                        channelId: s,
                        context: U,
                        onSelect: h,
                        moderationAlertId: P,
                        analyticsLocation: g,
                        analyticsLocations: D,
                        onCloseContextMenu: G
                    } = e, {
                        analyticsLocations: v
                    } = (0, c.default)(E.default.CONTEXT_MENU), y = (0, _.useAnalyticsContext)(), b = null !== (t = null == D ? void 0 : D[0]) && void 0 !== t ? t : v[0], B = (0, I.useTrackModerationAction)(o, {
                        location: b,
                        targetUserId: n.id
                    }), F = (0, l.useStateFromStores)([A.default], () => {
                        var e;
                        return null !== (e = A.default.getUserVoiceChannelId(o, n.id)) && void 0 !== e ? e : void 0
                    }, [o, n.id]), H = r.useCallback(() => {
                        B(I.ModerationActionType.COPY_ID)
                    }, [B]), V = (0, l.useStateFromStores)([S.default], () => S.default.isMember(o, n.id), [o, n.id]), x = (0, L.default)(n.id, o), k = (0, p.default)(n.id, U), w = (0, T.default)({
                        guildId: o,
                        userId: n.id,
                        analyticsLocation: null != g ? g : y.location,
                        analyticsLocations: [b],
                        context: U
                    }), Y = (0, f.default)(n, b), K = (0, N.default)(n, o, null != s ? s : F, b), j = (0, C.default)(s, P), W = (0, R.default)(n, o), X = (0, m.default)(n.id, o, !1, b), q = (0, d.default)({
                        id: n.id,
                        label: M.default.Messages.COPY_ID_USER,
                        onSuccess: H
                    }), Z = (0, O.default)(n, o), J = !!(null == n ? void 0 : n.isNonUserBot());
                    return (0, i.jsxs)(a.Menu, {
                        navId: "user-context",
                        onClose: () => {
                            (0, u.closeContextMenu)(), null == G || G()
                        },
                        "aria-label": M.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: h,
                        children: [!J && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)(a.MenuGroup, {
                                children: [x, k]
                            }), (0, i.jsxs)(a.MenuGroup, {
                                children: [w, Y]
                            }), V && (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(a.MenuGroup, {
                                    children: K
                                }), (0, i.jsxs)(a.MenuGroup, {
                                    children: [X, Z]
                                })]
                            }), null != P ? j : null, null != W ? (0, i.jsx)(a.MenuGroup, {
                                children: W
                            }) : null]
                        }), (0, i.jsx)(a.MenuGroup, {
                            children: q
                        })]
                    })
                }, {
                    object: U.AnalyticsObjects.CONTEXT_MENU
                }), [E.default.CONTEXT_MENU, E.default.GUILD_MODERATION_USER_MENU])
        },
        489836: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("446674"),
                l = n("77078"),
                a = n("736964"),
                u = n("27618"),
                o = n("697218"),
                s = n("49111"),
                _ = n("782340");

            function E(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ContextMenu",
                    {
                        id: n
                    } = e,
                    E = (0, r.useStateFromStores)([o.default], () => {
                        var e;
                        return (null === (e = o.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === n
                    }, [n]),
                    c = (0, r.useStateFromStores)([u.default], () => u.default.isBlocked(n), [n]);
                if (E) return null;

                function d() {
                    a.default.addRelationship({
                        userId: n,
                        context: {
                            location: t
                        },
                        type: s.RelationshipTypes.BLOCKED
                    })
                }
                return (0, i.jsx)(l.MenuItem, {
                    id: "block",
                    label: c ? _.default.Messages.UNBLOCK : _.default.Messages.BLOCK,
                    action: () => c ? a.default.unblockUser(n, {
                        location: t
                    }) : (0, l.openModal)(t => (0, i.jsx)(l.ConfirmModal, {
                        header: _.default.Messages.CONFIRM_USER_BLOCK_TITLE.format({
                            name: e.username
                        }),
                        confirmText: _.default.Messages.BLOCK,
                        cancelText: _.default.Messages.CANCEL,
                        onConfirm: d,
                        ...t,
                        children: (0, i.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: _.default.Messages.CONFIRM_USER_BLOCK_BODY.format({
                                name: e.username
                            })
                        })
                    }))
                })
            }
        },
        421602: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("450911"),
                a = n("54239"),
                u = n("271938"),
                o = n("49111"),
                s = n("782340");

            function _(e, t) {
                let n = u.default.getId(),
                    _ = t === o.AppContext.POPOUT;
                return n === e || _ ? null : (0, i.jsx)(r.MenuItem, {
                    id: "message-user",
                    label: s.default.Messages.USER_POPOUT_MESSAGE,
                    action: () => {
                        l.default.openPrivateChannel(e), (0, a.popLayer)()
                    }
                })
            }
        },
        459870: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("446674"),
                l = n("77078"),
                a = n("851387"),
                u = n("987317"),
                o = n("679653"),
                s = n("271938"),
                _ = n("42203"),
                E = n("923959"),
                c = n("26989"),
                d = n("305961"),
                T = n("957255"),
                I = n("27618"),
                S = n("697218"),
                A = n("800762"),
                N = n("404008"),
                f = n("991170"),
                p = n("49111"),
                O = n("782340");

            function C(e, t) {
                let n = (0, r.useStateFromStores)([E.default], () => E.default.getChannels(t)[E.GUILD_VOCAL_CHANNELS_KEY], [t]),
                    C = (0, r.useStateFromStores)([A.default, _.default], () => {
                        let n = A.default.getUserVoiceChannelId(t, e.id);
                        return _.default.getChannel(n)
                    }, [t, e.id]),
                    R = (0, r.useStateFromStores)([c.default], () => c.default.isGuestOrLurker(t, e.id), [t, e.id]);
                if (R || null == C) return null;
                let L = e.id === s.default.getId();
                if (!L && !T.default.can(p.Permissions.MOVE_MEMBERS, C)) return null;
                let m = n.filter(t => {
                    let {
                        channel: n
                    } = t;
                    return n.id !== C.id && (L ? T.default.can(p.Permissions.CONNECT, n) && !(0, N.isChannelFull)(n, A.default, d.default) : T.default.can(p.Permissions.MOVE_MEMBERS, n) && (T.default.can(p.Permissions.CONNECT, n) || f.default.can({
                        permission: p.Permissions.CONNECT,
                        user: e,
                        context: n
                    })) && !(0, N.isChannelFull)(n, A.default, d.default))
                });
                return 0 === m.length ? null : (0, i.jsx)(l.MenuItem, {
                    id: "voice-move",
                    label: O.default.Messages.MOVE_TO,
                    children: m.map(n => {
                        let {
                            channel: r
                        } = n;
                        return (0, i.jsx)(l.MenuItem, {
                            id: r.id,
                            action: () => {
                                var n;
                                return n = r, void(e.id === s.default.getId() ? u.default.selectVoiceChannel(n.id) : a.default.setChannel(t, e.id, n.id))
                            },
                            label: (0, o.computeChannelName)(r, S.default, I.default)
                        }, r.id)
                    })
                })
            }
        },
        325882: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("446674"),
                l = n("77078"),
                a = n("228944"),
                u = n("201131"),
                o = n("702873"),
                s = n("42203"),
                _ = n("377253"),
                E = n("957255"),
                c = n("49111"),
                d = n("782340");

            function T(e, t) {
                let n = (0, r.useStateFromStores)([E.default], () => null != e && E.default.canWithPartialContext(c.Permissions.MANAGE_MESSAGES, {
                        channelId: e
                    }), [e]),
                    T = (0, r.useStateFromStores)([s.default], () => s.default.getChannel(e), [e]),
                    I = (0, r.useStateFromStores)([_.default], () => null != e && null != t ? _.default.getMessage(e, t) : null),
                    S = (0, u.useAutomodAlertActions)(null != I ? I : null);
                if (null == T || null == I) return null;
                let A = null != S && S.actions.hasOwnProperty(a.AutomodAlertActionType.SET_COMPLETED) ? a.AutomodAlertActionType.UNSET_COMPLETED : a.AutomodAlertActionType.SET_COMPLETED,
                    N = A === a.AutomodAlertActionType.SET_COMPLETED ? d.default.Messages.GUILD_AUTOMOD_ALERT_SET_COMPLETED : d.default.Messages.GUILD_AUTOMOD_ALERT_UNSET_COMPLETED;
                return n && null != t ? (0, i.jsx)(l.MenuItem, {
                    id: "mark-automod-alert-completed",
                    label: N,
                    action: () => {
                        (0, o.executeAlertAction)(t, T, A)
                    }
                }, "mark-automod-alert-completed") : null
            }
        },
        625187: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("446674"),
                l = n("77078"),
                a = n("305961"),
                u = n("697218"),
                o = n("782340");

            function s(e, t) {
                let s = (0, r.useStateFromStores)([u.default], () => u.default.getCurrentUser()),
                    _ = (0, r.useStateFromStores)([a.default], () => a.default.getGuild(t));
                return null == _ || null == s || e.id === _.ownerId || e.bot || !_.isOwnerWithRequiredMfaLevel(s) ? null : (0, i.jsx)(l.MenuItem, {
                    id: "transfer-ownership",
                    color: "danger",
                    label: o.default.Messages.TRANSFER_OWNERSHIP,
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("878551").then(n.bind(n, "878551"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            guild: _,
                            fromUser: s,
                            toUser: e
                        })
                    })
                })
            }
        },
        806179: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("77078"),
                a = n("244201"),
                u = n("401642"),
                o = n("599110"),
                s = n("49111"),
                _ = n("782340");

            function E(e, t, n) {
                let E = r.useContext(o.AnalyticsContext),
                    c = (0, a.useWindowDispatch)();
                return (0, i.jsx)(l.MenuItem, {
                    id: "user-profile",
                    label: _.default.Messages.PROFILE,
                    action: () => {
                        (0, u.openUserProfileModal)({
                            userId: e,
                            guildId: null != t ? t : void 0,
                            channelId: null != n ? n : void 0,
                            analyticsLocation: E.location
                        }), c.dispatch(s.ComponentActions.POPOUT_CLOSE)
                    }
                })
            }
        },
        783142: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveProfileChanges: function() {
                    return d
                },
                handleProfileAccessibilityTooltipViewed: function() {
                    return T
                },
                resetPendingProfileChanges: function() {
                    return I
                },
                setPendingBanner: function() {
                    return S
                },
                setPendingBio: function() {
                    return A
                },
                setPendingPronouns: function() {
                    return N
                },
                setPendingAccentColor: function() {
                    return f
                },
                setPendingThemeColors: function() {
                    return p
                },
                setTryItOutAvatar: function() {
                    return O
                },
                setTryItOutAvatarDecoration: function() {
                    return C
                },
                setTryItOutBanner: function() {
                    return R
                },
                setTryItOutThemeColors: function() {
                    return L
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("448993"),
                a = n("884351"),
                u = n("845579"),
                o = n("697218"),
                s = n("599110"),
                _ = n("49111"),
                E = n("646718");

            function c(e) {
                s.default.track(_.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: e,
                    feature_tier: E.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function d(e, t) {
                var n, s;
                let E = null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == E) return;
                let c = u.UseLegacyChatInput.getSetting();
                null != e.bio && c && (e.bio = a.default.parse(void 0, e.bio).content);
                try {
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: E
                    });
                    let n = await i.default.patch({
                        url: null != t ? _.Endpoints.GUILD_PROFILE(t, _.ME) : _.Endpoints.USER_PROFILE(_.ME),
                        body: e
                    });
                    if (n.ok) {
                        let e = null === (s = n.body.profile_effect) || void 0 === s ? void 0 : s.id;
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: E,
                            profileEffectID: e,
                            ...n.body
                        })
                    } else {
                        let e = new l.APIError(n);
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: e
                        })
                    }
                    return n
                } catch (t) {
                    let e = new l.APIError(t);
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_FAILURE",
                        errors: {},
                        apiError: e
                    })
                }
            }

            function T() {
                r.default.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function I() {
                r.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function S(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function A(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: e
                })
            }

            function N(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function f(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: e
                })
            }

            function p(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function O(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: e
                }), c(E.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function C(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: e
                }), c(E.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function R(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: e
                }), c(E.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function L(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: e
                }), c(E.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        401642: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openUserProfileModal: function() {
                    return o
                },
                closeUserProfileModal: function() {
                    return s
                }
            });
            var i = n("913144"),
                r = n("327037"),
                l = n("697218"),
                a = n("506885"),
                u = n("49111");

            function o(e) {
                let {
                    userId: t,
                    section: n,
                    guildId: o = u.ME,
                    channelId: s,
                    friendToken: _,
                    autoFocusNote: E,
                    analyticsLocation: c
                } = e, d = l.default.getUser(t), T = o !== u.ME ? o : void 0;
                if (null == d) return (0, r.fetchProfile)(t, {
                    friendToken: _,
                    guildId: T
                }).then(() => {
                    i.default.dispatch({
                        type: "USER_PROFILE_MODAL_OPEN",
                        userId: t,
                        section: n,
                        guildId: o,
                        channelId: s,
                        friendToken: _,
                        autoFocusNote: E,
                        analyticsLocation: c
                    })
                });
                (0, a.default)(t, d.getAvatarURL(void 0, 80), {
                    withMutualGuilds: !0,
                    friendToken: _,
                    guildId: T
                }), i.default.dispatch({
                    type: "USER_PROFILE_MODAL_OPEN",
                    userId: t,
                    section: n,
                    guildId: o,
                    channelId: s,
                    friendToken: _,
                    autoFocusNote: E,
                    analyticsLocation: c
                })
            }

            function s() {
                i.default.dispatch({
                    type: "USER_PROFILE_MODAL_CLOSE"
                })
            }
        },
        211895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("913144"),
                r = n("54239"),
                l = n("49111");

            function a() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                i.default.dispatch({
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: e,
                    subsection: t,
                    ...n
                }), (0, r.pushLayer)(l.Layers.USER_SETTINGS)
            }
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("866227"),
                r = n.n(i),
                l = n("666038");
            class a extends l.default {
                static createFromServer(e) {
                    var t;
                    return new a({
                        ...e,
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: r(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = r(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = r(this.createdAt);
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
        26092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            });
            var i = n("917351"),
                r = n.n(i),
                l = n("446674"),
                a = n("913144"),
                u = n("697218"),
                o = n("49111");
            let s = o.FormStates.CLOSED,
                _ = null,
                E = null,
                c = {},
                d = {},
                T = {},
                I = null,
                S = null,
                A = !1,
                N = !1,
                f = null,
                p = null,
                O = null,
                C = [],
                R = null,
                L = null;

            function m(e) {
                var t, n, i, r, l, a;
                let _ = u.default.getCurrentUser();
                if (null == _) return U();
                E = null !== (t = e.section) && void 0 !== t ? t : E, R = null !== (n = e.section) && void 0 !== n ? n : E, null != e.subsection && null != E && (c[E] = e.subsection), null != e.scrollPosition && null != E && (d[E] = e.scrollPosition), N = !!e.openWithoutBackstack, s = o.FormStates.OPEN, T = {}, S = {
                    ...I = {
                        [o.UserSettingsSections.ACCOUNT]: {
                            userId: _.id,
                            username: _.username,
                            discriminator: _.discriminator,
                            email: _.email,
                            avatar: _.avatar,
                            password: "",
                            newPassword: null,
                            claimed: _.isClaimed()
                        }
                    }
                }, p = null !== (i = e.onClose) && void 0 !== i ? i : null, O = null !== (r = e.analyticsLocation) && void 0 !== r ? r : null, C = null !== (l = e.analyticsLocations) && void 0 !== l ? l : [], L = null !== (a = e.impressionSource) && void 0 !== a ? a : null
            }

            function U() {
                s = o.FormStates.CLOSED, A = !1, I = null, R = null, S = null, _ = null, E = null, c = {}, d = {}, p = null, O = null, C = [], L = null
            }

            function M() {
                s = o.FormStates.OPEN, T = {}
            }
            class h extends l.default.Store {
                initialize() {
                    this.waitFor(u.default)
                }
                hasChanges() {
                    return null != S && null != I && (!!this.isOpen() || f === o.DrawerTabTypes.USER_SETTINGS) && !r.isEqual(S, I)
                }
                isOpen() {
                    return A
                }
                getPreviousSection() {
                    return _
                }
                getSection() {
                    return E
                }
                getSubsection() {
                    return null != E ? c[E] : null
                }
                getScrollPosition() {
                    return null != E ? d[E] : null
                }
                shouldOpenWithoutBackstack() {
                    return N
                }
                getProps() {
                    return {
                        submitting: s === o.FormStates.SUBMITTING,
                        section: E,
                        subsection: null != E ? c[E] : null,
                        scrollPosition: null != E ? d[E] : null,
                        settings: S,
                        errors: T,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: N,
                        analyticsLocation: O,
                        analyticsLocations: C,
                        initialSection: R,
                        impressionSource: L
                    }
                }
                get onClose() {
                    return p
                }
            }
            h.displayName = "UserSettingsModalStore";
            var P = new h(a.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    A = !0, m(e)
                },
                USER_SETTINGS_MODAL_INIT: m,
                USER_SETTINGS_MODAL_CLOSE: U,
                LOGOUT: U,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    s = o.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (s !== o.FormStates.SUBMITTING) return !1;
                    s = o.FormStates.OPEN, E = o.UserSettingsSections.ACCOUNT, T = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    _ = E, E = e.section, O = null, C = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (c[E] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete c[t] : null != E && delete c[E]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete d[t] : null != E && delete d[E]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    let {
                        settings: t
                    } = e;
                    null == S && (S = {});
                    let n = S[o.UserSettingsSections.ACCOUNT];
                    S[o.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: M,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = u.default.getCurrentUser();
                    M(), null != e && (S = {
                        ...I = {
                            [o.UserSettingsSections.ACCOUNT]: {
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
                    return f = e.tab, null == E && f === o.DrawerTabTypes.USER_SETTINGS && m({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        662255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("35647"),
                a = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                        })
                    })
                }, l.IdIcon)
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return a
                },
                copy: function() {
                    return u
                }
            });
            var i = n("281071"),
                r = n("773336"),
                l = n("50885");
            let a = (() => {
                if (r.isPlatformEmbedded) return null != l.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function u(e) {
                return !!a && (r.isPlatformEmbedded ? (l.default.copy(e), !0) : i.copy(e))
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return l
                }
            });
            var i = n("917351"),
                r = n.n(i);
            let l = e => "function" == typeof e ? e() : e;
            r.curry((e, t, n) => l(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let i, r;
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var l = n("697218"),
                a = n("615931");
            let u = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                i = e.showModal, u = e.updateModalProps, r = n("551042").closeModal
            }

            function o(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: l,
                    modalProps: a = {},
                    hooks: {
                        onEarlyClose: o
                    } = {}
                } = e;
                if (null == i) {
                    null == o || o();
                    return
                }
                let _ = i(T, E, a);

                function E() {
                    null == o || o()
                }

                function c(e) {
                    r(_), n(e)
                }

                function d(e) {
                    r(_), l(e)
                }

                function T(e) {
                    return u(_, T, E, {
                        ...a,
                        isLoading: !0
                    }), s({
                        promiseFn: t,
                        resolve: c,
                        reject: d,
                        code: e,
                        mfaCodeHandler: I,
                        isModalOpen: !0
                    })
                }

                function I(e) {
                    let {
                        res: t
                    } = e;
                    u(_, T, E, {
                        ...a,
                        error: t.body.message
                    })
                }
            }

            function s(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: i,
                    code: r,
                    mfaCodeHandler: l = o,
                    isModalOpen: a = !1,
                    ...u
                } = e;
                return t(null != r ? {
                    code: r
                } : {}).then(n, e => {
                    var r, o;
                    if (r = e, o = a, r.body && 60008 === r.body.code || o && 429 === r.status) return l({
                        promiseFn: t,
                        resolve: n,
                        reject: i,
                        res: e,
                        ...u
                    });
                    i(e)
                })
            }

            function _(e, t) {
                var n, i;
                let {
                    checkEnabled: r = null !== (i = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i,
                    ...u
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, a.resolveThunk)(r) ? o : s)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...u
                    })
                })
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return u
                },
                updateModalProps: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                l = n("920636");
            let a = (e, t, n) => function(r) {
                return (0, i.jsx)(l.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...r
                })
            };

            function u(e, t, n) {
                return (0, r.openModal)(a(e, t, n), {
                    onCloseCallback: t
                })
            }

            function o(e, t, n, i) {
                return (0, r.updateModal)(e, a(t, n, i))
            }
        },
        281071: function(e, t, n) {
            "use strict";

            function i(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    i = window.getSelection(),
                    r = document.createElement("textarea");
                r.value = e, r.contentEditable = "true", r.style.visibility = "none", t.appendChild(r), n.selectNodeContents(r), null == i || i.removeAllRanges(), null == i || i.addRange(n), r.focus(), r.setSelectionRange(0, e.length);
                let l = document.execCommand("copy");
                return t.removeChild(r), l
            }
            n.r(t), n.d(t, {
                copy: function() {
                    return i
                }
            })
        }
    }
]);