(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["81264"], {
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return l
                },
                popLayer: function() {
                    return s
                },
                popAllLayers: function() {
                    return a
                }
            });
            var r = n("913144");

            function l(e) {
                r.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function s() {
                r.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function a() {
                r.default.dispatch({
                    type: "LAYER_POP_ALL"
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
                l = n("884691"),
                s = n("414456"),
                a = n.n(s),
                o = n("77078"),
                i = n("782340"),
                u = n("347129");
            class d extends l.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: s,
                        error: d,
                        isLoading: c,
                        maxLength: f,
                        transitionState: h,
                        helpMessage: p,
                        retryPrompt: g,
                        retrySuccessMessage: m
                    } = this.props, {
                        code: C,
                        errorMessage: v,
                        retrySuccess: E
                    } = this.state, y = l.Children.count(s) > 0 ? (0, r.jsx)(o.Card, {
                        type: o.Card.Types.WARNING,
                        className: u.card,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: s
                        })
                    }) : null, x = null != g ? (0, r.jsxs)(o.Text, {
                        className: a(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, r.jsx)("br", {}), (0, r.jsx)(o.Clickable, {
                            className: a(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, r.jsx)(o.Anchor, {
                                children: g
                            })
                        })]
                    }) : null, _ = E ? (0, r.jsx)(o.Card, {
                        type: o.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: m
                        })
                    }) : null;
                    return (0, r.jsx)(o.ModalRoot, {
                        transitionState: h,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(o.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(o.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, r.jsxs)(o.ModalContent, {
                                children: [null != p ? (0, r.jsx)(o.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: p
                                }) : null, y, _, (0, r.jsxs)(o.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, r.jsx)(o.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != f ? f : 10,
                                        value: C,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(o.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != d ? d : v
                                    }) : null, x]
                                })]
                            }), (0, r.jsxs)(o.ModalFooter, {
                                children: [(0, r.jsx)(o.Button, {
                                    type: "submit",
                                    disabled: c || 0 === C.length,
                                    children: null != n ? n : i.default.Messages.CONFIRM
                                }), (0, r.jsx)(o.Button, {
                                    onClick: this.handleCancel,
                                    disabled: c,
                                    look: o.Button.Looks.LINK,
                                    color: o.Button.Colors.PRIMARY,
                                    children: i.default.Messages.CANCEL
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
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? i.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : i.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? i.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : i.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
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
        704426: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ArrowSmallRightIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("669491"),
                s = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...i
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, s.default)(i),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsx)("path", {
                        d: "M20.7071 12.7071C21.0976 12.3166 21.0976 11.6834 20.7071 11.2929L15.7071 6.29289C15.3166 5.90237 14.6834 5.90237 14.2929 6.29289C13.9024 6.68342 13.9024 7.31658 14.2929 7.70711L17.5858 11L4 11C3.44771 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13L17.5858 13L14.2929 16.2929C13.9024 16.6834 13.9024 17.3166 14.2929 17.7071C14.6834 18.0976 15.3166 18.0976 15.7071 17.7071L20.7071 12.7071Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: o
                    })
                })
            }
        },
        35647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IdIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("669491"),
                s = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...i
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, s.default)(i),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, r.jsx)("path", {
                        d: "M15.2979 14.48C14.8405 14.928 14.2199 15.152 13.4359 15.152H12.0499V9.18803H13.4359C14.2199 9.18803 14.8405 9.41203 15.2979 9.86003C15.7552 10.308 15.9839 11.078 15.9839 12.17C15.9839 13.262 15.7552 14.032 15.2979 14.48Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: o
                    }), (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5ZM6 17H8.044V7.34003H6V17ZM10.0059 7.34003V17H13.4359C14.9012 17 16.0305 16.5847 16.8239 15.754C17.6265 14.9234 18.0279 13.7287 18.0279 12.17C18.0279 10.6114 17.6265 9.41669 16.8239 8.58603C16.0305 7.75536 14.9012 7.34003 13.4359 7.34003H10.0059Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: o
                    })]
                })
            }
        },
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("77078"),
                s = n("845579"),
                a = n("662255"),
                o = n("306160");

            function i(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: i,
                    shiftId: u,
                    showIconFirst: d
                } = e, c = s.DeveloperMode.useSetting();
                if (__OVERLAY__ || !c || !o.SUPPORTS_COPY) return null;
                let f = "devmode-copy-id-".concat(t);
                return (0, r.jsx)(l.MenuItem, {
                    id: f,
                    label: n,
                    action: function(e) {
                        let n = null != u && e.shiftKey ? u : t;
                        (0, o.copy)(n), null == i || i()
                    },
                    icon: a.default,
                    showIconFirst: d
                }, f)
            }
        },
        893455: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("77078"),
                a = n("592407"),
                o = n("479756"),
                i = n("507950"),
                u = n("957255"),
                d = n("538137"),
                c = n("49111"),
                f = n("782340");

            function h(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.GuildSettingsSections.ROLES,
                    h = (0, l.useStateFromStores)([u.default], () => u.default.canImpersonateRole(e, t));
                return h ? (0, r.jsx)(s.MenuItem, {
                    id: "view-as-role",
                    label: f.default.Messages.VIEW_AS_ROLE,
                    icon: d.default,
                    action: () => {
                        a.default.close(), (0, o.startImpersonating)(e.id, {
                            type: i.ImpersonateType.ROLES,
                            roles: {
                                [t.id]: t
                            },
                            returnToSection: n
                        })
                    }
                }, "view-as-role") : null
            }
        },
        178521: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("424973");
            var r = n("37983");
            n("884691");
            var l = n("77078"),
                s = n("272030"),
                a = n("861370"),
                o = n("893455"),
                i = n("49111"),
                u = n("782340");

            function d(e) {
                let {
                    role: t,
                    guild: n,
                    onSelect: d
                } = e, c = [], f = (0, o.default)(n, t, i.GuildSettingsSections.INTEGRATIONS);
                null != f && c.push(f);
                let h = (0, a.default)({
                    id: t.id,
                    label: u.default.Messages.COPY_ID_ROLE
                });
                return (null != h && c.push(h), 0 === c.length) ? null : (0, r.jsx)(l.Menu, {
                    navId: "guild-integrations-permission-role-context",
                    "aria-label": u.default.Messages.GUILD_ROLE_ACTIONS_MENU_LABEL,
                    onClose: s.closeContextMenu,
                    onSelect: d,
                    children: c
                })
            }
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return v
                },
                updateImpersonating: function() {
                    return E
                },
                stopImpersonating: function() {
                    return y
                },
                updateImpersonatedChannels: function() {
                    return _
                },
                updateImpersonatedRoles: function() {
                    return T
                },
                updateImpersonatedData: function() {
                    return I
                }
            }), n("222007");
            var r = n("913144"),
                l = n("716241"),
                s = n("393414"),
                a = n("42203"),
                o = n("923959"),
                i = n("26989"),
                u = n("305961"),
                d = n("957255"),
                c = n("18494"),
                f = n("282109"),
                h = n("599110"),
                p = n("38654"),
                g = n("507950"),
                m = n("49111"),
                C = n("724210");

            function v(e, t) {
                h.default.track(m.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, l.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === g.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), x(e)
            }

            function E(e, t) {
                let n = p.default.getData(e);
                null != n && n.type === t.type && (h.default.track(m.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, l.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === g.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), x(e))
            }

            function y(e) {
                r.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function x(e) {
                let t = c.default.getChannelId(e),
                    n = a.default.getChannel(t),
                    r = null != t && (0, C.isStaticChannelRoute)(t);
                if (!r && !d.default.can(m.Permissions.VIEW_CHANNEL, n)) {
                    let t = o.default.getDefaultChannel(e);
                    null != t && (0, s.transitionTo)(m.Routes.CHANNEL(e, t.id))
                }
            }

            function _(e, t, n) {
                let r = new Set(f.default.getOptedInChannels(e));
                t.forEach(e => r.add(e)), n.forEach(e => r.delete(e)), E(e, {
                    type: g.ImpersonateType.NEW_MEMBER,
                    optInChannels: r
                })
            }

            function T(e, t) {
                let n = u.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                        r = Array.from(t);
                    o.default.addConditionalChangeListener(() => {
                        let t = i.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (r.some(e => !t.roles.includes(e))) return !0;
                        let l = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                            s = l.filter(e => !n.includes(e));
                        return s.length > 0 && _(e, s, []), !1
                    })
                }(e, t);
                let r = {};
                t.forEach(e => r[e] = n.roles[e]), E(e, {
                    type: g.ImpersonateType.NEW_MEMBER,
                    roles: r
                })
            }

            function I(e, t) {
                E(e, {
                    type: g.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("702976");
            var r, l = n("866227"),
                s = n.n(l),
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
        246053: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Directions: function() {
                    return r
                },
                default: function() {
                    return c
                }
            }), n("70102");
            var r, l, s = n("37983");
            n("884691");
            var a = n("414456"),
                o = n.n(a),
                i = n("75196"),
                u = n("741460");
            (l = r || (r = {})).LEFT = "LEFT", l.RIGHT = "RIGHT", l.UP = "UP", l.DOWN = "DOWN", l.UP_LEFT = "UP_LEFT", l.DOWN_RIGHT = "DOWN_RIGHT";
            let d = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = "currentColor",
                    direction: l,
                    foreground: a,
                    className: d,
                    title: c,
                    ...f
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, i.default)(f),
                    width: t,
                    height: n,
                    className: o(d, function(e) {
                        switch (e) {
                            case "LEFT":
                                return u.left;
                            case "RIGHT":
                                return u.right;
                            case "UP":
                                return null;
                            case "DOWN":
                                return u.down;
                            case "UP_LEFT":
                                return u.upLeft;
                            case "DOWN_RIGHT":
                                return u.downRight;
                            default:
                                throw Error("Invalid Direction ".concat(e))
                        }
                    }(l)),
                    viewBox: "0 0 24 24",
                    children: [null != c ? (0, s.jsx)("title", {
                        children: c
                    }) : null, (0, s.jsx)("polygon", {
                        className: a,
                        fill: r,
                        fillRule: "nonzero",
                        points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"
                    })]
                })
            };
            d.Directions = r;
            var c = d
        },
        538137: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("469563"),
                s = n("704426"),
                a = n("246053"),
                o = (0, l.replaceIcon)(function(e) {
                    return (0, r.jsx)(a.default, {
                        ...e,
                        direction: a.default.Directions.RIGHT
                    })
                }, s.ArrowSmallRightIcon)
        },
        662255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("469563"),
                s = n("35647"),
                a = n("75196"),
                o = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: s,
                        ...o
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: s,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                        })
                    })
                }, s.IdIcon, void 0, {
                    size: 24
                })
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return a
                },
                copy: function() {
                    return o
                }
            }), n("70102");
            var r = n("281071"),
                l = n("773336"),
                s = n("50885");
            let a = (() => {
                if (l.isPlatformEmbedded) return null != s.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function o(e) {
                return !!a && (l.isPlatformEmbedded ? (s.default.copy(e), !0) : r.copy(e))
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return s
                }
            });
            var r = n("917351"),
                l = n.n(r);
            let s = e => "function" == typeof e ? e() : e;
            l.curry((e, t, n) => s(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let r, l;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("70102");
            var s = n("697218"),
                a = n("615931");
            let o = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                r = e.showModal, o = e.updateModalProps, l = n("551042").closeModal
            }

            function i(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: s,
                    modalProps: a = {},
                    hooks: {
                        onEarlyClose: i
                    } = {}
                } = e;
                if (null == r) {
                    null == i || i();
                    return
                }
                let d = r(p, c, a);

                function c() {
                    null == i || i()
                }

                function f(e) {
                    l(d), n(e)
                }

                function h(e) {
                    l(d), s(e)
                }

                function p(e) {
                    return o(d, p, c, {
                        ...a,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: f,
                        reject: h,
                        code: e,
                        mfaCodeHandler: g,
                        isModalOpen: !0
                    })
                }

                function g(e) {
                    let {
                        res: t
                    } = e;
                    o(d, p, c, {
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
                    code: l,
                    mfaCodeHandler: s = i,
                    isModalOpen: a = !1,
                    ...o
                } = e;
                return t(null != l ? {
                    code: l
                } : {}).then(n, e => {
                    var l, i;
                    if (l = e, i = a, l.body && 60008 === l.body.code || i && 429 === l.status) return s({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e,
                        ...o
                    });
                    r(e)
                })
            }

            function d(e, t) {
                var n, r;
                let {
                    checkEnabled: l = null !== (r = null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== r && r,
                    ...o
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, a.resolveThunk)(l) ? i : u)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...o
                    })
                })
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return o
                },
                updateModalProps: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("551042"),
                s = n("920636");
            let a = (e, t, n) => function(l) {
                return (0, r.jsx)(s.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...l
                })
            };

            function o(e, t, n) {
                return (0, l.openModal)(a(e, t, n), {
                    onCloseCallback: t
                })
            }

            function i(e, t, n, r) {
                return (0, l.updateModal)(e, a(t, n, r))
            }
        },
        281071: function(e, t, n) {
            "use strict";

            function r(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    r = window.getSelection(),
                    l = document.createElement("textarea");
                l.value = e, l.contentEditable = "true", l.style.visibility = "none", t.appendChild(l), n.selectNodeContents(l), null == r || r.removeAllRanges(), null == r || r.addRange(n), l.focus(), l.setSelectionRange(0, e.length);
                let s = document.execCommand("copy");
                return t.removeChild(l), s
            }
            n.r(t), n.d(t, {
                copy: function() {
                    return r
                }
            }), n("70102")
        }
    }
]);