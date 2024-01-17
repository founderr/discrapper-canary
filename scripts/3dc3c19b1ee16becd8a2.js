(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["56845"], {
        713841: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("913144"),
                l = n("592407"),
                a = n("482391"),
                s = n("611183"),
                r = {
                    init() {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_INIT"
                        })
                    },
                    setSection(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_SET_SECTION",
                            section: e,
                            sectionId: t
                        })
                    },
                    startEditingCommandPermissions(e) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_START_EDITING_COMMAND",
                            commandId: e
                        })
                    },
                    stopEditingCommandPermissions(e) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_STOP_EDITING_COMMAND",
                            commandId: e
                        })
                    },
                    startEditingIntegration(e) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_START_EDITING_INTEGRATION",
                            integrationId: e
                        })
                    },
                    stopEditingIntegration() {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION"
                        })
                    },
                    updateIntegration(e) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_UPDATE_INTEGRATION",
                            settings: e
                        })
                    },
                    startEditingWebhook(e) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_START_EDITING_WEBHOOK",
                            webhookId: e
                        })
                    },
                    stopEditingWebhook() {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK"
                        })
                    },
                    updateWebhook(e) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_UPDATE_WEBHOOK",
                            settings: e
                        })
                    },
                    async saveApplicationPermissions(e, t, n) {
                        try {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SUBMITTING"
                            }), await a.updateApplicationCommandPermissions({
                                applicationId: e,
                                commandId: e,
                                defaultEveryoneValue: !0,
                                defaultEverywhereValue: !0,
                                guildId: t,
                                permissions: n
                            }), i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                            })
                        } catch (e) {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                errors: e.body
                            })
                        }
                    },
                    async saveIntegration(e, t) {
                        try {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SUBMITTING"
                            }), await l.default.updateIntegration(e, t.id, t.expire_behavior, t.expire_grace_period, t.enable_emoticons), i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                            })
                        } catch (e) {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                errors: e.body
                            })
                        }
                    },
                    async saveWebhook(e, t) {
                        try {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SUBMITTING"
                            }), await s.default.update(e, t.id, t), i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                            })
                        } catch (e) {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                errors: e.body
                            })
                        }
                    }
                }
        },
        611183: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("917351"),
                l = n.n(i),
                a = n("872717"),
                s = n("913144"),
                r = n("49111");
            let u = ["Spidey Bot", "Captain Hook"];
            var d = {
                fetchForGuild(e) {
                    s.default.dispatch({
                        type: "WEBHOOKS_FETCHING",
                        guildId: e
                    }), a.default.get({
                        url: r.Endpoints.GUILD_WEBHOOKS(e),
                        oldFormErrors: !0
                    }).then(t => {
                        let {
                            body: n
                        } = t;
                        return s.default.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: e,
                            webhooks: n
                        })
                    }).catch(t => {
                        let {
                            body: n
                        } = t;
                        s.default.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: e,
                            error: n.message
                        })
                    })
                },
                fetchForChannel(e, t) {
                    s.default.dispatch({
                        type: "WEBHOOKS_FETCHING",
                        guildId: e,
                        channelId: t
                    }), a.default.get({
                        url: r.Endpoints.CHANNEL_WEBHOOKS(t),
                        oldFormErrors: !0
                    }).then(n => {
                        let {
                            body: i
                        } = n;
                        return s.default.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: e,
                            channelId: t,
                            webhooks: i
                        })
                    })
                },
                create: (e, t, n) => (null == n && (n = u[l.random(0, u.length - 1)]), a.default.post({
                    url: r.Endpoints.CHANNEL_WEBHOOKS(t),
                    body: {
                        name: n
                    },
                    oldFormErrors: !0
                }).then(t => {
                    let {
                        body: n
                    } = t;
                    return s.default.dispatch({
                        type: "WEBHOOK_CREATE",
                        guildId: e,
                        webhook: n
                    }), n
                })),
                delete: (e, t) => a.default.delete({
                    url: r.Endpoints.WEBHOOK(t),
                    oldFormErrors: !0
                }).then(() => {
                    s.default.dispatch({
                        type: "WEBHOOK_DELETE",
                        guildId: e,
                        webhookId: t
                    })
                }),
                update: (e, t, n) => a.default.patch({
                    url: r.Endpoints.WEBHOOK(t),
                    body: n,
                    oldFormErrors: !0
                }).then(t => {
                    let {
                        body: n
                    } = t;
                    return s.default.dispatch({
                        type: "WEBHOOK_UPDATE",
                        guildId: e,
                        webhook: n
                    }), n
                })
            }
        },
        35647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IdIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                a = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",
                        className: r
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z",
                        clipRule: "evenodd",
                        className: r
                    })]
                })
            }
        },
        991630: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007");
            var i = n("37983"),
                l = n("884691"),
                a = n("414456"),
                s = n.n(a),
                r = n("587974"),
                u = n("315102"),
                d = n("524768"),
                o = n("616674"),
                c = n("363577");

            function I(e) {
                let {
                    section: t,
                    isSelected: n,
                    width: a,
                    height: I,
                    className: p,
                    selectable: T = !1,
                    onFocus: E,
                    onBlur: f,
                    onMouseOver: N,
                    onMouseLeave: S,
                    ..._
                } = e, [h, m] = l.useState(!1), O = l.useCallback(() => {
                    m(!0), null == E || E()
                }, [E]), A = l.useCallback(() => {
                    m(!1), null == f || f()
                }, [f]), C = l.useCallback(() => {
                    m(!0), null == N || N()
                }, [N]), G = l.useCallback(() => {
                    m(!1), null == S || S()
                }, [S]), v = l.useMemo(() => {
                    if (t.type === d.ApplicationCommandSectionType.APPLICATION) {
                        var e;
                        return u.default.getApplicationIconURL({
                            id: t.id,
                            icon: t.icon,
                            bot: null === (e = t.application) || void 0 === e ? void 0 : e.bot,
                            botIconFirst: !0,
                            size: a
                        })
                    }
                    return c
                }, [t, a]);
                return (0, i.jsx)("div", {
                    ..._,
                    className: s(o.wrapper, p, {
                        [o.selectable]: T,
                        [o.selected]: T && n
                    }),
                    onFocus: O,
                    onBlur: A,
                    onMouseOver: C,
                    onMouseLeave: G,
                    children: (0, i.jsx)(r.default, {
                        className: o.mask,
                        mask: T && (n || h) ? r.MaskIDs.SQUIRCLE : r.MaskIDs.AVATAR_DEFAULT,
                        width: a,
                        height: I,
                        children: (0, i.jsx)("img", {
                            alt: "",
                            className: o.icon,
                            style: {
                                width: a,
                                height: I
                            },
                            src: v
                        })
                    })
                })
            }
        },
        943161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                a = n.n(l),
                s = n("83910"),
                r = n("93393"),
                u = n("317041"),
                d = n("749296");
            let o = e => {
                switch (e.id) {
                    case u.BuiltInSectionId.BUILT_IN:
                        return s.default;
                    case u.BuiltInSectionId.FRECENCY:
                        return r.default;
                    default:
                        return
                }
            };

            function c(e) {
                let {
                    section: t,
                    className: n,
                    width: l,
                    height: s,
                    padding: r,
                    isSelected: u,
                    selectable: c = !1,
                    ...I
                } = e, p = o(t);
                return (0, i.jsx)("div", {
                    className: a(d.wrapper, n, {
                        [d.selectable]: c,
                        [d.selected]: c && u
                    }),
                    style: {
                        width: l,
                        height: s,
                        padding: null != r ? r : 0
                    },
                    children: null != p ? (0, i.jsx)(p, {
                        className: d.icon,
                        width: l,
                        height: s,
                        ...I
                    }) : null
                })
            }
        },
        355263: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getIconComponent: function() {
                    return r
                },
                pxToRem: function() {
                    return u
                },
                getCommandQuery: function() {
                    return d
                }
            });
            var i = n("524768"),
                l = n("991630"),
                a = n("943161"),
                s = n("317041");
            let r = e => e.type === i.ApplicationCommandSectionType.BUILT_IN ? a.default : l.default;

            function u(e) {
                return "".concat(e / 16, "rem")
            }

            function d(e, t) {
                let n = t,
                    i = !1,
                    l = t.indexOf(":");
                if (l >= 0) {
                    let e = t.lastIndexOf(" ", l);
                    e >= 0 ? (t = t.substring(0, e), i = !0) : t = t.substring(0, l)
                } else t = t.substring(0, t.length);
                let a = t.split(" ", s.MAX_SUBCOMMAND_LEVEL + 1);
                return a.length > s.MAX_SUBCOMMAND_LEVEL && (i = !0, a.pop()), t = a.join(" "), (n.length > t.length || t.endsWith(" ")) && (i = !0, t = t.trimEnd()), {
                    text: t,
                    parts: a,
                    hasSpaceTerminator: i
                }
            }
        },
        633043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078"),
                a = n("850572"),
                s = () => (0, i.jsx)("div", {
                    className: a.loadingWrapper,
                    children: (0, i.jsx)(l.Dots, {
                        dotRadius: 4,
                        themed: !0
                    })
                })
        },
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078"),
                a = n("845579"),
                s = n("662255"),
                r = n("306160");

            function u(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: u,
                    shiftId: d,
                    showIconFirst: o
                } = e, c = a.DeveloperMode.useSetting();
                if (__OVERLAY__ || !c || !r.SUPPORTS_COPY) return null;
                let I = "devmode-copy-id-".concat(t);
                return (0, i.jsx)(l.MenuItem, {
                    id: I,
                    label: n,
                    action: function(e) {
                        let n = null != d && e.shiftKey ? d : t;
                        (0, r.copy)(n), null == u || u()
                    },
                    icon: s.default,
                    showIconFirst: o
                }, I)
            }
        },
        823026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("424973");
            var i = n("37983"),
                l = n("884691"),
                a = n("446674"),
                s = n("77078"),
                r = n("713841"),
                u = n("79112"),
                d = n("988721"),
                o = n("592407"),
                c = n("305961"),
                I = n("957255"),
                p = n("49111"),
                T = n("782340");

            function E(e) {
                let {
                    user: t,
                    guildId: n,
                    channel: E,
                    context: f
                } = e, N = c.default.getGuild(n), S = (0, a.useStateFromStores)([I.default], () => null != N ? I.default.can(p.Permissions.MANAGE_GUILD, N) : null), _ = (0, d.useContextIndexState)(E, !0, !0), h = (0, d.useUserIndexState)(!0, !0), {
                    isUserApp: m,
                    isGuildApp: O
                } = l.useMemo(() => {
                    var e, n, i, l;
                    if ((null == t ? void 0 : t.id) == null) return {
                        isGuildApp: !1,
                        isUserApp: !1
                    };
                    let a = Object.values(null !== (i = null === (e = _.result) || void 0 === e ? void 0 : e.sections) && void 0 !== i ? i : {}),
                        s = Object.values(null !== (l = null === (n = h.result) || void 0 === n ? void 0 : n.sections) && void 0 !== l ? l : {});
                    return {
                        isGuildApp: a.some(e => {
                            var n;
                            return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
                        }),
                        isUserApp: s.some(e => {
                            var n;
                            return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
                        })
                    }
                }, [_, h, null == t ? void 0 : t.id]), A = l.useCallback(() => {
                    (null == N ? void 0 : N.id) != null && (o.default.open(N.id, p.GuildSettingsSections.INTEGRATIONS), r.default.setSection(p.IntegrationSettingsSections.APPLICATION, null == t ? void 0 : t.id))
                }, [null == t ? void 0 : t.id, null == N ? void 0 : N.id]), C = l.useCallback(() => {
                    u.default.open(p.UserSettingsSections.AUTHORIZED_APPS)
                }, []), G = f === p.AppContext.POPOUT;
                if (!(null == t ? void 0 : t.bot) || !S || G || !O && !m) return null;
                let v = [];
                return O && v.push((0, i.jsx)(s.MenuItem, {
                    id: "manage-integration",
                    label: T.default.Messages.MANAGE_INTEGRATION,
                    action: A
                }, "manage-integration")), m && v.push((0, i.jsx)(s.MenuItem, {
                    id: "manage-authorized-app",
                    label: T.default.Messages.MANAGE_AUTHORIZED_APP,
                    action: C
                }, "manage-authorized-app")), v
            }
        },
        482391: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearIntegrationPermissions: function() {
                    return u
                },
                editPermissions: function() {
                    return d
                },
                getApplicationCommands: function() {
                    return o
                },
                getApplicationCommandPermissions: function() {
                    return c
                },
                initIntegrationPermissions: function() {
                    return I
                },
                resetPermissions: function() {
                    return p
                },
                updateApplicationCommandPermissions: function() {
                    return T
                }
            });
            var i = n("872717"),
                l = n("913144"),
                a = n("507217"),
                s = n("389153"),
                r = n("49111");

            function u() {
                l.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR"
                })
            }

            function d(e, t, n) {
                l.default.dispatch({
                    applicationId: e,
                    commandId: t,
                    permissions: n,
                    type: "INTEGRATION_PERMISSION_SETTINGS_EDIT"
                })
            }

            function o(e, t) {
                i.default.get(r.Endpoints.GUILD_COMMANDS_FOR_APPLICATION(e, t)).then(n => {
                    l.default.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
                        applicationId: t,
                        commands: n.body.application_commands,
                        guildId: e,
                        permissions: n.body.permissions
                    })
                }, () => {
                    l.default.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",
                        applicationId: t
                    })
                })
            }
            async function c(e, t, n) {
                let a = [];
                try {
                    let l = await i.default.get(r.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n));
                    l.ok && (a = l.body.permissions)
                } catch (i) {
                    if (404 !== i.status) {
                        l.default.dispatch({
                            type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
                            applicationId: e,
                            commandId: n,
                            guildId: t
                        });
                        return
                    }
                }
                l.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                    applicationId: e,
                    commandId: n,
                    guildId: t,
                    permissions: a
                })
            }

            function I(e) {
                l.default.dispatch({
                    applicationId: e,
                    type: "INTEGRATION_PERMISSION_SETTINGS_INIT"
                })
            }

            function p(e) {
                l.default.dispatch({
                    commandId: e,
                    type: "INTEGRATION_PERMISSION_SETTINGS_RESET"
                })
            }
            async function T(e) {
                let {
                    applicationId: t,
                    commandId: n,
                    defaultEveryoneValue: i,
                    defaultEverywhereValue: r,
                    guildId: u,
                    permissions: d
                } = e, o = n === t ? function(e, t, n, i) {
                    if (!n || !i) return t;
                    let l = {
                        [e]: n,
                        [(0, s.allChannelsSentinel)(e)]: i
                    };
                    return t.filter(e => {
                        let t = l[e.id];
                        return null == t || e.permission !== t
                    })
                }(u, d, i, r) : d, c = await a.updateApplicationGuildCommandPermissions(t, u, n, o);
                c.ok && l.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                    applicationId: t,
                    commandId: n,
                    guildId: u,
                    permissions: c.body.permissions
                })
            }
        },
        385065: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("118810"),
                a = n("77078"),
                s = n("272030"),
                r = n("798609"),
                u = n("861370"),
                d = n("152298"),
                o = n("26051"),
                c = n("667358"),
                I = n("563816"),
                p = n("518155"),
                T = n("718381"),
                E = n("875834"),
                f = n("782340");

            function N(e) {
                var t;
                let n, N, S, {
                        channel: _,
                        message: h,
                        target: m,
                        attachment: O,
                        onSelect: A,
                        onHeightUpdate: C
                    } = e,
                    G = m;
                if (null != O) N = n = O.url;
                else
                    for (;
                        (0, l.isElement)(G);)(0, l.isElement)(G, HTMLImageElement) && null != G.src && (N = G.src), (0, l.isElement)(G, HTMLAnchorElement) && null != G.href && (n = G.href, S = G.textContent), G = G.parentNode;
                let v = null === (t = document.getSelection()) || void 0 === t ? void 0 : t.toString(),
                    M = (0, d.default)(v),
                    R = (0, c.default)(v),
                    g = (0, I.default)({
                        commandType: r.ApplicationCommandType.MESSAGE,
                        commandTargetId: h.id,
                        channel: _,
                        guildId: void 0,
                        onHeightUpdate: C
                    }),
                    y = (0, E.default)(h, _),
                    P = (0, p.default)(h, _),
                    x = (0, T.default)(h, _),
                    b = (0, o.default)(null != n ? n : N, S),
                    D = (0, u.default)({
                        id: h.id,
                        label: f.default.Messages.COPY_ID_MESSAGE,
                        shiftId: "".concat(h.channel_id, "-").concat(h.id)
                    });
                return (0, i.jsxs)(a.Menu, {
                    navId: "message",
                    onClose: s.closeContextMenu,
                    "aria-label": f.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
                    onSelect: A,
                    children: [(0, i.jsx)(a.MenuGroup, {
                        children: M
                    }), (0, i.jsx)(a.MenuGroup, {
                        children: R
                    }), (0, i.jsxs)(a.MenuGroup, {
                        children: [g, y, P, x]
                    }), (0, i.jsx)(a.MenuGroup, {
                        children: b
                    }), (0, i.jsx)(a.MenuGroup, {
                        children: D
                    })]
                })
            }
        },
        563816: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("37983"),
                l = n("884691"),
                a = n("627445"),
                s = n.n(a),
                r = n("446674"),
                u = n("77078"),
                d = n("240249"),
                o = n("916565"),
                c = n("355263"),
                I = n("633043"),
                p = n("823026"),
                T = n("305961"),
                E = n("697218"),
                f = n("317041"),
                N = n("782340"),
                S = n("205735"),
                _ = e => {
                    let t, {
                            commandType: n,
                            commandTargetId: a,
                            channel: _,
                            guildId: h,
                            onHeightUpdate: m,
                            context: O
                        } = e,
                        A = (0, r.useStateFromStores)([T.default], () => T.default.getGuild(null != h ? h : _.guild_id)),
                        C = (0, r.useStateFromStores)([E.default], () => E.default.getUser(a)),
                        G = (0, p.default)({
                            user: C,
                            guildId: null == A ? void 0 : A.id,
                            channel: _,
                            context: O
                        }),
                        {
                            commands: v,
                            sectionDescriptors: M,
                            loading: R
                        } = d.useDiscovery(_, {
                            commandType: n
                        }, {
                            limit: f.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
                        }),
                        {
                            sections: g
                        } = l.useMemo(() => {
                            let e = {};
                            return M.forEach(t => {
                                e[t.id] = t
                            }), {
                                sections: e
                            }
                        }, [M]),
                        y = l.useRef(R.current);
                    l.useEffect(() => {
                        R.current !== y.current && (y.current = R.current, null == m || m())
                    }, [R, m]);
                    let P = l.useCallback(e => {
                        s(null != _, "menu item should not show if channel is null");
                        let t = g[e.applicationId],
                            n = null != t ? (0, c.getIconComponent)(t) : void 0;
                        return (0, i.jsx)(u.MenuItem, {
                            id: e.id,
                            label: e.displayName,
                            showIconFirst: !0,
                            icon: () => null != n ? (0, i.jsx)(n, {
                                channel: _,
                                section: t,
                                width: 18,
                                height: 18,
                                selectable: !1
                            }) : null,
                            action: () => {
                                (0, o.default)({
                                    command: e,
                                    optionValues: {},
                                    context: {
                                        channel: _,
                                        guild: A
                                    },
                                    commandTargetId: a
                                })
                            }
                        }, e.id)
                    }, [_, A, a, g]);
                    return R.current ? t = (0, i.jsx)(u.MenuItem, {
                        id: "menu-commands-placeholder",
                        render: () => (0, i.jsx)(I.default, {}),
                        disabled: !0
                    }, "menu-commands-placeholder") : (t = 0 === v.length ? (0, i.jsx)(u.MenuItem, {
                        id: "menu-commands-empty",
                        label: N.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                        disabled: !0
                    }, "menu-commands-empty") : v.map(P), null != G && (t = (0, i.jsxs)(i.Fragment, {
                        children: [t, (0, i.jsx)(u.MenuSeparator, {}, "separator"), G]
                    }))), (0, i.jsx)(u.MenuItem, {
                        id: "apps",
                        label: N.default.Messages.APPS,
                        listClassName: S.list,
                        children: t
                    })
                }
        },
        555158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HelpMessageTypes: function() {
                    return l
                },
                default: function() {
                    return T
                }
            });
            var i, l, a = n("37983");
            n("884691");
            var s = n("414456"),
                r = n.n(s),
                u = n("77078"),
                d = n("36694"),
                o = n("381546"),
                c = n("68238"),
                I = n("423487"),
                p = n("557296");
            (i = l || (l = {}))[i.WARNING = 0] = "WARNING", i[i.INFO = 1] = "INFO", i[i.ERROR = 2] = "ERROR", i[i.POSITIVE = 3] = "POSITIVE";
            var T = function(e) {
                let {
                    children: t,
                    messageType: n,
                    className: i,
                    textColor: l = "text-normal",
                    textVariant: s = "text-sm/medium"
                } = e, T = function(e) {
                    switch (e) {
                        case 0:
                            return I.default;
                        case 1:
                            return c.default;
                        case 2:
                            return o.default;
                        case 3:
                            return d.default
                    }
                }(n), E = function(e) {
                    switch (e) {
                        case 0:
                            return p.warning;
                        case 1:
                            return p.info;
                        case 2:
                            return p.error;
                        case 3:
                            return p.positive
                    }
                }(n);
                return (0, a.jsxs)("div", {
                    className: r(p.container, E, i),
                    children: [(0, a.jsx)("div", {
                        className: p.iconDiv,
                        children: (0, a.jsx)(T, {
                            className: p.icon
                        })
                    }), (0, a.jsx)(u.Text, {
                        className: p.text,
                        color: l,
                        variant: s,
                        children: t
                    })]
                })
            }
        },
        822332: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("37983"),
                l = n("884691"),
                a = n("414456"),
                s = n.n(a),
                r = n("77078"),
                u = n("782340"),
                d = n("440318");
            let o = {
                BLOCK: d.block,
                INLINE: d.inline
            };
            class c extends l.PureComponent {
                render() {
                    let {
                        children: e,
                        className: t,
                        textClassName: n,
                        type: l = o.BLOCK,
                        style: a
                    } = this.props;
                    return (0, i.jsxs)("div", {
                        className: s(t, l),
                        style: a,
                        children: [(0, i.jsxs)(r.Text, {
                            variant: "text-sm/bold",
                            tag: "div",
                            color: "text-positive",
                            className: d.pro,
                            children: [u.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
                        }), (0, i.jsx)(r.Text, {
                            className: s(d.tip, n),
                            variant: "text-sm/normal",
                            children: e
                        })]
                    })
                }
            }
            c.Types = o;
            var I = c
        },
        662255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                a = n("35647"),
                s = n("75196"),
                r = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...r
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: a,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                        })
                    })
                }, a.IdIcon, void 0, {
                    size: 24
                })
        }
    }
]);