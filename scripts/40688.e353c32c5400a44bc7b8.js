(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["40688"], {
        719451: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                InviteResolvingHeader: function() {
                    return m
                },
                default: function() {
                    return S
                }
            }), n("70102");
            var l = n("37983"),
                s = n("884691"),
                a = n("446674"),
                r = n("77078"),
                u = n("770032"),
                o = n("653047"),
                i = n("233069"),
                d = n("813006"),
                c = n("766274"),
                E = n("697218"),
                _ = n("953109"),
                f = n("580357"),
                I = n("124969"),
                h = n("587974"),
                N = n("158998"),
                T = n("49111"),
                p = n("238055"),
                C = n("91366"),
                A = n("782340"),
                g = n("310042");
            let m = () => (0, l.jsxs)(s.Fragment, {
                    children: [(0, l.jsx)(I.Avatar, {
                        src: null,
                        size: r.AvatarSizes.DEPRECATED_SIZE_100,
                        className: g.avatar
                    }), (0, l.jsx)(I.SubTitle, {
                        children: A.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
                    }), (0, l.jsx)(I.Title, {
                        className: g.inviteResolvingGuildName,
                        children: A.default.Messages.LOADING
                    })]
                }),
                O = e => {
                    let {
                        guild: t,
                        user: n,
                        application: s,
                        compact: a
                    } = e;
                    if (null != s) return (0, l.jsx)(_.default, {
                        className: g.appIcon,
                        game: s,
                        size: g.appIconSize
                    });
                    if (null != n) return (0, l.jsx)(I.Avatar, {
                        src: null != n ? n.getAvatarURL(void 0, 80) : null,
                        size: r.AvatarSizes.SIZE_80,
                        className: a ? g.compactAvatar : g.avatar
                    });
                    if (null != t) return (0, l.jsx)(h.default, {
                        mask: h.default.Masks.SQUIRCLE,
                        width: 64,
                        height: 64,
                        className: g.guildIcon,
                        children: (0, l.jsx)(I.GuildIcon, {
                            guild: t,
                            size: I.GuildIcon.Sizes.LARGER,
                            animate: !0
                        })
                    });
                    else return null
                };
            var S = e => {
                var t;
                let n, s, _, {
                        invite: h,
                        disableUser: m = !1,
                        error: S,
                        flatActivityCount: R = !1,
                        isRegister: v = !1
                    } = e,
                    {
                        currentUser: y,
                        multiAccounts: U
                    } = (0, a.useStateFromStoresObject)([u.default, E.default], () => ({
                        currentUser: E.default.getCurrentUser(),
                        multiAccounts: u.default.getUsers()
                    }));
                if (null == h) return null;
                let D = null != h.guild ? new d.default(h.guild) : null,
                    M = null != h.channel ? (0, i.createChannelRecordFromInvite)(h.channel) : null,
                    L = null != h.target_application ? new o.default(h.target_application) : null,
                    P = m || null == h.inviter ? null : new c.default(h.inviter),
                    F = null != h.approximate_member_count && h.approximate_member_count > 100 || null != D && D.hasFeature(T.GuildFeatures.COMMUNITY),
                    x = !F && null != P,
                    V = null,
                    j = !1;
                if (null != D) V = null == P ? A.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN : A.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                    username: N.default.getFormattedName(P)
                }), h.target_type === C.InviteTargetTypes.STREAM && null != h.target_user && (V = A.default.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
                    username: N.default.getFormattedName(h.target_user)
                })), h.target_type === C.InviteTargetTypes.EMBEDDED_APPLICATION && null != h.target_application && (V = null != P ? A.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format({
                    username: N.default.getFormattedName(P)
                }) : A.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY), x && null == L && (n = (0, l.jsx)(I.GuildIcon, {
                    className: g.icon,
                    guild: D,
                    size: I.GuildIcon.Sizes.SMALL
                })), s = D.name, null != L && (s = L.name, _ = (0, l.jsxs)("div", {
                    children: [(0, l.jsx)(I.SubTitle, {
                        className: g.appIn,
                        children: A.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
                    }), (0, l.jsxs)("div", {
                        className: g.guildContainer,
                        children: [(0, l.jsx)(I.GuildIcon, {
                            guild: D,
                            size: I.GuildIcon.Sizes.SMALL
                        }), (0, l.jsx)(r.Text, {
                            tag: "span",
                            variant: "text-lg/normal",
                            color: "header-primary",
                            className: g.appGuildName,
                            children: D.name
                        })]
                    })]
                }));
                else if (null != M) {
                    if (null == P) throw Error("no inviter in group DM invite");
                    let e = N.default.getFormattedName(P);
                    null != M.name && "" !== M.name ? (V = A.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                        username: e
                    }), s = M.name, null != M.icon && (n = (0, l.jsx)(I.ChannelIcon, {
                        channel: M,
                        size: r.AvatarSizes.SIZE_32
                    }))) : (V = A.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM, s = e)
                } else if (null != P) {
                    let e = N.default.getFormattedName(P, !0);
                    s = A.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
                        username: e
                    }), j = !0, _ = null != S ? null : (0, l.jsx)(I.SubTitle, {
                        className: g.directInviteSubTitle,
                        children: v ? A.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format({
                            username: e
                        }) : A.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
                            username: e
                        })
                    })
                }
                return (0, l.jsxs)("div", {
                    className: g.container,
                    children: [(0, l.jsx)(O, {
                        application: L,
                        guild: D,
                        user: x ? P : null,
                        compact: j
                    }), null != S ? (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(I.SubTitle, {
                            children: A.default.Messages.INVITE_MODAL_ERROR_TITLE
                        }), (0, l.jsx)(I.Title, {
                            children: S
                        })]
                    }) : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(I.SubTitle, {
                            children: V
                        }), (0, l.jsxs)(I.Title, {
                            className: g.title,
                            children: [null != D ? (0, l.jsx)(f.default, {
                                guild: D,
                                className: g.guildBadge,
                                tooltipPosition: "left"
                            }) : null, n, s]
                        })]
                    }), _, null != L || j || (null == h ? void 0 : null === (t = h.guild) || void 0 === t ? void 0 : t.id) === p.INVITE_ROUTING_HUB_GUILD_ID ? null : (0, l.jsx)(I.ActivityCount, {
                        className: g.activityCount,
                        online: h.approximate_presence_count,
                        total: h.approximate_member_count,
                        flat: R
                    }), U.length > 1 ? (0, l.jsx)(I.JoiningAs, {
                        user: y
                    }) : null]
                })
            }
        },
        238055: function(e, t, n) {
            "use strict";
            var l, s;
            n.r(t), n.d(t, {
                HubEmailConnectionSteps: function() {
                    return l
                },
                INVITE_ROUTING_HUB_GUILD_ID: function() {
                    return a
                }
            }), (s = l || (l = {})).STUDENT_PROMPT = "STUDENT_PROMPT", s.VERIFY_EMAIL = "VERIFY_EMAIL", s.VERIFY_PIN = "VERIFY_PIN", s.SELECT_SCHOOL = "SELECT_SCHOOL", s.SELECT_SCHOOL_SEARCH = "SELECT_SCHOOL_SEARCH", s.SUBMIT_SCHOOL = "SUBMIT_SCHOOL", s.EMAIL_CONFIRMATION = "EMAIL_CONFIRMATION", s.EMAIL_WAITLIST = "EMAIL_WAITLIST";
            let a = "884924873015689226"
        },
        694787: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                validateMultiAccountTokens: function() {
                    return E
                },
                switchAccount: function() {
                    return _
                },
                removeAccount: function() {
                    return f
                }
            });
            var l = n("171718"),
                s = n("872717"),
                a = n("913144"),
                r = n("437822"),
                u = n("605250"),
                o = n("271938"),
                i = n("770032"),
                d = n("49111");
            let c = new u.default("MultiAccountActionCreators");

            function E() {
                let e = o.default.getId(),
                    t = i.default.getUsers();
                t.forEach(async t => {
                    let n, {
                            id: r
                        } = t,
                        u = l.default.getToken(r);
                    if (null == u || "" === u) {
                        a.default.dispatch({
                            type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
                            userId: r
                        });
                        return
                    }
                    a.default.dispatch({
                        type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
                        userId: r
                    });
                    try {
                        n = await s.default.get({
                            url: d.Endpoints.ME,
                            headers: {
                                authorization: u
                            },
                            retries: 3
                        })
                    } catch (t) {
                        let e = (null == t ? void 0 : t.status) === 401 || (null == t ? void 0 : t.status) === 403;
                        a.default.dispatch({
                            type: e ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                            userId: r
                        });
                        return
                    }
                    a.default.dispatch({
                        type: e === r ? "CURRENT_USER_UPDATE" : "USER_UPDATE",
                        user: n.body
                    }), a.default.dispatch({
                        type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                        userId: r
                    })
                })
            }

            function _(e, t) {
                c.log("Switching account to ".concat(e), {
                    switchSynchronously: t
                });
                let n = l.default.getToken(e);
                return null == n ? (c.log("Switching accounts failed because there was no token"), a.default.dispatch({
                    type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
                    userId: e
                }), Promise.resolve()) : r.default.switchAccountToken(n, t)
            }

            function f(e) {
                a.default.dispatch({
                    type: "MULTI_ACCOUNT_REMOVE_ACCOUNT",
                    userId: e
                })
            }
        },
        927101: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMultiAccountUsers: function() {
                    return o
                }
            });
            var l = n("884691"),
                s = n("446674"),
                a = n("913144"),
                r = n("694787"),
                u = n("770032");

            function o() {
                let e = (0, s.useStateFromStoresObject)([u.default], () => ({
                    isLoading: u.default.getIsValidatingUsers(),
                    multiAccountUsers: u.default.getUsers()
                }));
                return l.useEffect(() => {
                    a.default.wait(() => {
                        r.validateMultiAccountTokens()
                    })
                }, []), e
            }
        },
        165926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setNewUser: function() {
                    return s
                },
                setNewUserFlowCompleted: function() {
                    return a
                }
            });
            var l = n("913144");

            function s(e) {
                l.default.wait(() => l.default.dispatch({
                    type: "NUF_NEW_USER",
                    newUserType: e
                }))
            }

            function a() {
                l.default.wait(() => l.default.dispatch({
                    type: "NUF_COMPLETE"
                }))
            }
        },
        56235: function(e, t, n) {
            "use strict";
            var l, s;
            n.r(t), n.d(t, {
                NewUserTypes: function() {
                    return l
                }
            }), (s = l || (l = {}))[s.MARKETING_UNCLAIMED = 0] = "MARKETING_UNCLAIMED", s[s.INVITE_UNCLAIMED = 1] = "INVITE_UNCLAIMED", s[s.ORGANIC_REGISTERED = 2] = "ORGANIC_REGISTERED", s[s.ORGANIC_REGISTERED_GUILD_TEMPLATE = 3] = "ORGANIC_REGISTERED_GUILD_TEMPLATE"
        },
        878720: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChangePhoneReason: function() {
                    return s
                },
                default: function() {
                    return E
                }
            });
            var l, s, a = n("759843"),
                r = n("872717"),
                u = n("913144"),
                o = n("271938"),
                i = n("840707"),
                d = n("482931"),
                c = n("49111");
            (l = s || (s = {})).USER_ACTION_REQUIRED = "user_action_required", l.USER_SETTINGS_UPDATE = "user_settings_update", l.GUILD_PHONE_REQUIRED = "guild_phone_required", l.MFA_PHONE_UPDATE = "mfa_phone_update", l.CONTACT_SYNC = "contact_sync";
            var E = {
                setCountryCode(e) {
                    u.default.dispatch({
                        type: "PHONE_SET_COUNTRY_CODE",
                        countryCode: e
                    })
                },
                removePhone: (e, t) => r.default.delete({
                    url: c.Endpoints.PHONE,
                    body: {
                        password: e,
                        change_phone_reason: t
                    },
                    oldFormErrors: !0
                }),
                resendCode(e) {
                    let t = {},
                        n = o.default.getFingerprint();
                    return null != n && "" !== n && (t["X-Fingerprint"] = n), r.default.post({
                        url: c.Endpoints.RESEND_PHONE,
                        headers: t,
                        body: {
                            phone: e
                        }
                    })
                },
                beginAddPhone: (e, t) => r.default.post({
                    url: c.Endpoints.PHONE,
                    body: {
                        phone: e,
                        change_phone_reason: t
                    }
                }),
                addPhone: (e, t, n) => r.default.post({
                    url: c.Endpoints.PHONE,
                    body: {
                        phone_token: e,
                        password: t,
                        change_phone_reason: n
                    },
                    oldFormErrors: !0
                }),
                addPhoneWithoutPassword: e => r.default.post({
                    url: c.Endpoints.PHONE_VERIFY_NO_PASSWORD,
                    body: {
                        code: e
                    }
                }),
                beginReverifyPhone: (e, t) => r.default.post({
                    url: c.Endpoints.PHONE_REVERIFY,
                    body: {
                        phone: e,
                        change_phone_reason: t
                    }
                }),
                reverifyPhone: (e, t, n) => r.default.post({
                    url: c.Endpoints.PHONE_REVERIFY,
                    body: {
                        phone_token: e,
                        password: t,
                        change_phone_reason: n
                    },
                    oldFormErrors: !0
                }),
                validatePhoneForSupport: e => r.default.post({
                    url: c.Endpoints.VERIFY_PHONE_FOR_TICKET,
                    body: {
                        token: e
                    },
                    oldFormErrors: !0
                }),
                async verifyPhone(e, t) {
                    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        s = {},
                        r = o.default.getFingerprint();
                    null != r && "" !== r && (s["X-Fingerprint"] = r), l && (s.authorization = "");
                    let E = await i.default.post({
                        url: c.Endpoints.VERIFY_PHONE,
                        headers: s,
                        body: {
                            phone: e,
                            code: t
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: a.NetworkActionNames.USER_VERIFY_PHONE
                        }
                    });
                    return n && u.default.dispatch({
                        type: "MODAL_POP",
                        key: d.PHONE_VERIFICATION_MODAL_KEY
                    }), E.body
                }
            }
        },
        482931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PHONE_VERIFICATION_MODAL_KEY: function() {
                    return l
                },
                PHONE_VERIFICATION_CODE_NUM_DIGITS: function() {
                    return s
                }
            });
            let l = "PHONE_VERIFICATION_MODAL_KEY",
                s = 6
        },
        25033: function(e, t, n) {
            "use strict";
            let l;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var s = n("446674"),
                a = n("913144"),
                r = n("988415");
            let u = (0, r.getDefaultCountryCode)();

            function o(e) {
                var t;
                let {
                    countryCode: n
                } = e;
                null != n && (u = null !== (t = (0, r.getCountryCodeByAlpha2)(n)) && void 0 !== t ? t : (0, r.getDefaultCountryCode)())
            }
            class i extends s.default.DeviceSettingsStore {
                initialize(e) {
                    null != e && (l = e.selectedCountryCode)
                }
                getUserAgnosticState() {
                    return {
                        selectedCountryCode: l
                    }
                }
                getCountryCode() {
                    return null != l ? l : u
                }
            }
            i.displayName = "PhoneStore", i.persistKey = "PhoneStore";
            var d = new i(a.default, {
                PHONE_SET_COUNTRY_CODE: function(e) {
                    let {
                        countryCode: t
                    } = e;
                    l = t
                },
                CONNECTION_OPEN: o,
                SET_LOCATION_METADATA: o
            })
        },
        189613: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("881410");
            var l, s = n("37983"),
                a = n("884691"),
                r = n("414456"),
                u = n.n(r),
                o = n("448105"),
                i = n.n(o),
                d = n("917351"),
                c = n.n(d),
                E = n("592861"),
                _ = n("77078"),
                f = n("988415"),
                I = n("145131"),
                h = n("782340"),
                N = n("803853"),
                T = n("212029");
            l = class extends a.PureComponent {
                renderItems() {
                    let {
                        query: e
                    } = this.state, t = E.default.flatMap((e, t) => {
                        let {
                            alpha2: n,
                            phoneCountryCodes: l,
                            name: a
                        } = e, r = (0, f.getI18NCountryName)(n);
                        return l.map(e => ({
                            key: "".concat(t, "-").concat(e),
                            name: a,
                            translatedName: r,
                            countryData: {
                                name: a,
                                alpha2: n,
                                code: e
                            },
                            children: (0, s.jsxs)(I.default, {
                                className: N.countryItem,
                                justify: I.default.Justify.CENTER,
                                align: I.default.Align.CENTER,
                                children: [(0, s.jsx)(I.default.Child, {
                                    className: N.countryName,
                                    children: r
                                }), (0, s.jsx)(I.default.Child, {
                                    className: N.countryCode,
                                    grow: 0,
                                    shrink: 0,
                                    children: e
                                })]
                            })
                        }))
                    }), n = c(t).filter(t => 0 === e.length || i(e.toLowerCase(), t.name.toLowerCase()) || i(e.toLowerCase(), t.translatedName.toLowerCase())).map(e => (0, a.createElement)(_.PopoutList.Item, {
                        ...e,
                        key: e.key,
                        onClick: () => this.onClick(e.countryData)
                    })).value();
                    return 0 === n.length ? (0, s.jsx)(_.PopoutList.Empty, {
                        children: h.default.Messages.NONE
                    }) : (0, s.jsx)(_.ScrollerAuto, {
                        className: N.phoneFieldScroller,
                        children: n
                    })
                }
                render() {
                    let {
                        className: e
                    } = this.props;
                    return (0, s.jsxs)(_.PopoutList, {
                        className: u(N.phoneFieldPopout, T.elevationBorderLow, e),
                        children: [(0, s.jsx)(_.PopoutList.SearchBar, {
                            query: this.state.query,
                            placeholder: h.default.Messages.SEARCH_COUNTRY,
                            onChange: this.onChangeQuery,
                            onClear: this.onClearQuery,
                            autoComplete: "off"
                        }), (0, s.jsx)(_.PopoutList.Divider, {}), this.renderItems()]
                    })
                }
                constructor(e) {
                    super(e), this.onChangeQuery = e => {
                        this.setState({
                            query: e
                        })
                    }, this.onClearQuery = () => {
                        this.setState({
                            query: ""
                        })
                    }, this.onClick = e => {
                        var t, n;
                        null === (t = (n = this.props).onClick) || void 0 === t || t.call(n, e)
                    }, this.state = {
                        query: ""
                    }
                }
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("65597"),
                a = n("880731");

            function r(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, r = (0, s.default)([a.default], () => a.default.isEnabled({
                    confettiLocation: n
                }));
                return r ? (0, l.jsx)(l.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("884691"),
                s = n("65597"),
                a = n("526887"),
                r = n("880731");

            function u() {
                let {
                    createMultipleConfettiAt: e
                } = l.useContext(a.ConfettiCannonContext), t = (0, s.default)([r.default], () => r.default.getState()), n = l.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), u = l.useMemo(() => ({
                    fire: (l, s, a) => {
                        var r, u;
                        let o = (null == a ? void 0 : a.settings) != null ? {
                                ...t,
                                ...a.settings
                            } : t,
                            i = n(o);
                        e(l, s, i, (null !== (r = null == a ? void 0 : a.count) && void 0 !== r ? r : o.confettiCount) * (null !== (u = null == a ? void 0 : a.countMultiplier) && void 0 !== u ? u : 1), {
                            sprite: null == a ? void 0 : a.sprite
                        })
                    }
                }), [e, n, t]);
                return u
            }
        },
        794538: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007"), n("424973");
            var l = n("37983"),
                s = n("884691"),
                a = n("414456"),
                r = n.n(a),
                u = n("145131"),
                o = n("616389");
            class i extends s.PureComponent {
                render() {
                    let {
                        className: e
                    } = this.props;
                    return (0, l.jsx)("input", {
                        ref: this.setCodeBlockRef,
                        className: r(o.input, e),
                        maxLength: 1,
                        value: null != this.props.code ? this.props.code : void 0,
                        autoFocus: this.props.autoFocus,
                        onKeyDown: this.handleKeyDown,
                        onChange: this.handleChange
                    })
                }
                focus() {
                    var e;
                    null === (e = this._codeBlockRef) || void 0 === e || e.focus()
                }
                blur() {
                    var e;
                    null === (e = this._codeBlockRef) || void 0 === e || e.blur()
                }
                constructor(...e) {
                    super(...e), this.setCodeBlockRef = e => {
                        this._codeBlockRef = e
                    }, this.handleKeyDown = e => {
                        let t = 8 === e.which || 37 === e.which || 39 === e.which,
                            n = e.which >= 48 && e.which <= 57 || e.keyCode >= 96 && e.keyCode <= 105;
                        !t && !n && e.preventDefault();
                        let {
                            onKeyDown: l
                        } = this.props;
                        null == l || l(e)
                    }, this.handleChange = e => {
                        let {
                            onChange: t
                        } = this.props;
                        null == t || t(e.currentTarget.value)
                    }
                }
            }
            i.defaultProps = {
                autoFocus: !1
            };
            class d extends s.PureComponent {
                render() {
                    let {
                        className: e,
                        inputClassName: t
                    } = this.props, {
                        codes: n
                    } = this.state, s = [];
                    for (let e = 0; e < n.length; e++) e === n.length / 2 && s.push((0, l.jsx)("div", {
                        className: o.spacer
                    }, "spacer")), s.push((0, l.jsx)(i, {
                        ref: t => this.setCodeBlockRef(e, t),
                        code: n[e],
                        autoFocus: 0 === e,
                        onChange: t => this.handleChange(e, t),
                        onKeyDown: t => this.handleKeyDown(e, t),
                        className: t
                    }, e));
                    return (0, l.jsx)(u.default, {
                        align: u.default.Align.CENTER,
                        justify: u.default.Justify.CENTER,
                        className: e,
                        children: s
                    })
                }
                setCodeBlockRef(e, t) {
                    this._codeBlockRefs[e] = t
                }
                handleChange(e, t) {
                    this.state.codes[e] = t;
                    let n = this.getCodeOrFirstEmptyIndex();
                    if ("string" == typeof n) this.submit(n);
                    else {
                        let e = this._codeBlockRefs[n];
                        null == e || e.focus()
                    }
                }
                handleKeyDown(e, t) {
                    let {
                        codes: n
                    } = this.state;
                    if (8 === t.which && e > 0 && (null == n[e] || 0 === n[e].length)) {
                        let t = e - 1;
                        n[t] = "";
                        let l = this._codeBlockRefs[t];
                        null == l || l.focus()
                    }
                }
                getCodeOrFirstEmptyIndex() {
                    let {
                        codes: e
                    } = this.state, t = "";
                    for (let n = 0; n < e.length; n++) {
                        if (isNaN(parseInt(e[n]))) return n;
                        t += e[n]
                    }
                    return t
                }
                submit(e) {
                    let {
                        onSubmit: t
                    } = this.props;
                    null == t || t(e)
                }
                constructor(e) {
                    super(e), this._codeBlockRefs = Array(this.props.count), this.state = {
                        codes: Array(e.count)
                    }
                }
            }
            d.defaultProps = {
                count: 6
            };
            var c = d
        }
    }
]);