(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["97610"], {
        69448: function(t, e, n) {
            "use strict";
            t.exports = n.p + "f6da6e7ed1d57e445d0e.svg"
        },
        713841: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var i = n("913144"),
                a = n("592407"),
                s = n("482391"),
                r = n("611183"),
                l = {
                    init() {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_INIT"
                        })
                    },
                    setSection(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_SET_SECTION",
                            section: t,
                            sectionId: e
                        })
                    },
                    startEditingCommandPermissions(t) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_START_EDITING_COMMAND",
                            commandId: t
                        })
                    },
                    stopEditingCommandPermissions(t) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_STOP_EDITING_COMMAND",
                            commandId: t
                        })
                    },
                    startEditingIntegration(t) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_START_EDITING_INTEGRATION",
                            integrationId: t
                        })
                    },
                    stopEditingIntegration() {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION"
                        })
                    },
                    updateIntegration(t) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_UPDATE_INTEGRATION",
                            settings: t
                        })
                    },
                    startEditingWebhook(t) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_START_EDITING_WEBHOOK",
                            webhookId: t
                        })
                    },
                    stopEditingWebhook() {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK"
                        })
                    },
                    updateWebhook(t) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_UPDATE_WEBHOOK",
                            settings: t
                        })
                    },
                    async saveApplicationPermissions(t, e, n) {
                        try {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SUBMITTING"
                            }), await s.updateApplicationCommandPermissions({
                                applicationId: t,
                                commandId: t,
                                defaultEveryoneValue: !0,
                                defaultEverywhereValue: !0,
                                guildId: e,
                                permissions: n
                            }), i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                            })
                        } catch (t) {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                errors: t.body
                            })
                        }
                    },
                    async saveIntegration(t, e) {
                        try {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SUBMITTING"
                            }), await a.default.updateIntegration(t, e.id, e.expire_behavior, e.expire_grace_period, e.enable_emoticons), i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                            })
                        } catch (t) {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                errors: t.body
                            })
                        }
                    },
                    async saveWebhook(t, e) {
                        try {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SUBMITTING"
                            }), await r.default.update(t, e.id, e), i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                            })
                        } catch (t) {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                errors: t.body
                            })
                        }
                    }
                }
        },
        611183: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return d
                }
            });
            var i = n("917351"),
                a = n.n(i),
                s = n("872717"),
                r = n("913144"),
                l = n("49111");
            let u = ["Spidey Bot", "Captain Hook"];
            var d = {
                fetchForGuild(t) {
                    r.default.dispatch({
                        type: "WEBHOOKS_FETCHING",
                        guildId: t
                    }), s.default.get({
                        url: l.Endpoints.GUILD_WEBHOOKS(t),
                        oldFormErrors: !0
                    }).then(e => {
                        let {
                            body: n
                        } = e;
                        return r.default.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: t,
                            webhooks: n
                        })
                    }).catch(e => {
                        let {
                            body: n
                        } = e;
                        r.default.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: t,
                            error: n.message
                        })
                    })
                },
                fetchForChannel(t, e) {
                    r.default.dispatch({
                        type: "WEBHOOKS_FETCHING",
                        guildId: t,
                        channelId: e
                    }), s.default.get({
                        url: l.Endpoints.CHANNEL_WEBHOOKS(e),
                        oldFormErrors: !0
                    }).then(n => {
                        let {
                            body: i
                        } = n;
                        return r.default.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: t,
                            channelId: e,
                            webhooks: i
                        })
                    })
                },
                create: (t, e, n) => (null == n && (n = u[a.random(0, u.length - 1)]), s.default.post({
                    url: l.Endpoints.CHANNEL_WEBHOOKS(e),
                    body: {
                        name: n
                    },
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: n
                    } = e;
                    return r.default.dispatch({
                        type: "WEBHOOK_CREATE",
                        guildId: t,
                        webhook: n
                    }), n
                })),
                delete: (t, e) => s.default.delete({
                    url: l.Endpoints.WEBHOOK(e),
                    oldFormErrors: !0
                }).then(() => {
                    r.default.dispatch({
                        type: "WEBHOOK_DELETE",
                        guildId: t,
                        webhookId: e
                    })
                }),
                update: (t, e, n) => s.default.patch({
                    url: l.Endpoints.WEBHOOK(e),
                    body: n,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: n
                    } = e;
                    return r.default.dispatch({
                        type: "WEBHOOK_UPDATE",
                        guildId: t,
                        webhook: n
                    }), n
                })
            }
        },
        35647: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                IdIcon: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let r = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = t;
                return (0, i.jsxs)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",
                        className: l
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z",
                        clipRule: "evenodd",
                        className: l
                    })]
                })
            }
        },
        991630: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return I
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                s = n("414456"),
                r = n.n(s),
                l = n("587974"),
                u = n("315102"),
                d = n("524768"),
                o = n("616674"),
                c = n("363577");

            function I(t) {
                let {
                    section: e,
                    isSelected: n,
                    width: s,
                    height: I,
                    className: T,
                    selectable: E = !1,
                    onFocus: p,
                    onBlur: N,
                    onMouseOver: f,
                    onMouseLeave: S,
                    ..._
                } = t, [h, O] = a.useState(!1), A = a.useCallback(() => {
                    O(!0), null == p || p()
                }, [p]), m = a.useCallback(() => {
                    O(!1), null == N || N()
                }, [N]), G = a.useCallback(() => {
                    O(!0), null == f || f()
                }, [f]), C = a.useCallback(() => {
                    O(!1), null == S || S()
                }, [S]), R = a.useMemo(() => {
                    if (e.type === d.ApplicationCommandSectionType.APPLICATION) {
                        var t;
                        return u.default.getApplicationIconURL({
                            id: e.id,
                            icon: e.icon,
                            bot: null === (t = e.application) || void 0 === t ? void 0 : t.bot,
                            botIconFirst: !0,
                            size: s
                        })
                    }
                    return c
                }, [e, s]);
                return (0, i.jsx)("div", {
                    ..._,
                    className: r(o.wrapper, T, {
                        [o.selectable]: E,
                        [o.selected]: E && n
                    }),
                    onFocus: A,
                    onBlur: m,
                    onMouseOver: G,
                    onMouseLeave: C,
                    children: (0, i.jsx)(l.default, {
                        className: o.mask,
                        mask: E && (n || h) ? l.MaskIDs.SQUIRCLE : l.MaskIDs.AVATAR_DEFAULT,
                        width: s,
                        height: I,
                        children: (0, i.jsx)("img", {
                            alt: "",
                            className: o.icon,
                            style: {
                                width: s,
                                height: I
                            },
                            src: R
                        })
                    })
                })
            }
        },
        943161: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                r = n("83910"),
                l = n("93393"),
                u = n("317041"),
                d = n("749296");
            let o = t => {
                switch (t.id) {
                    case u.BuiltInSectionId.BUILT_IN:
                        return r.default;
                    case u.BuiltInSectionId.FRECENCY:
                        return l.default;
                    default:
                        return
                }
            };

            function c(t) {
                let {
                    section: e,
                    className: n,
                    width: a,
                    height: r,
                    padding: l,
                    isSelected: u,
                    selectable: c = !1,
                    ...I
                } = t, T = o(e);
                return (0, i.jsx)("div", {
                    className: s(d.wrapper, n, {
                        [d.selectable]: c,
                        [d.selected]: c && u
                    }),
                    style: {
                        width: a,
                        height: r,
                        padding: null != l ? l : 0
                    },
                    children: null != T ? (0, i.jsx)(T, {
                        className: d.icon,
                        width: a,
                        height: r,
                        ...I
                    }) : null
                })
            }
        },
        355263: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getIconComponent: function() {
                    return l
                },
                pxToRem: function() {
                    return u
                },
                getCommandQuery: function() {
                    return d
                }
            });
            var i = n("524768"),
                a = n("991630"),
                s = n("943161"),
                r = n("317041");
            let l = t => t.type === i.ApplicationCommandSectionType.BUILT_IN ? s.default : a.default;

            function u(t) {
                return "".concat(t / 16, "rem")
            }

            function d(t, e) {
                let n = e,
                    i = !1,
                    a = e.indexOf(":");
                if (a >= 0) {
                    let t = e.lastIndexOf(" ", a);
                    t >= 0 ? (e = e.substring(0, t), i = !0) : e = e.substring(0, a)
                } else e = e.substring(0, e.length);
                let s = e.split(" ", r.MAX_SUBCOMMAND_LEVEL + 1);
                return s.length > r.MAX_SUBCOMMAND_LEVEL && (i = !0, s.pop()), e = s.join(" "), (n.length > e.length || e.endsWith(" ")) && (i = !0, e = e.trimEnd()), {
                    text: e,
                    parts: s,
                    hasSpaceTerminator: i
                }
            }
        },
        861370: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("845579"),
                r = n("662255"),
                l = n("306160");

            function u(t) {
                let {
                    id: e,
                    label: n,
                    onSuccess: u,
                    shiftId: d,
                    showIconFirst: o
                } = t, c = s.DeveloperMode.useSetting();
                if (__OVERLAY__ || !c || !l.SUPPORTS_COPY) return null;
                let I = "devmode-copy-id-".concat(e);
                return (0, i.jsx)(a.MenuItem, {
                    id: I,
                    label: n,
                    action: function(t) {
                        let n = null != d && t.shiftKey ? d : e;
                        (0, l.copy)(n), null == u || u()
                    },
                    icon: r.default,
                    showIconFirst: o
                }, I)
            }
        },
        482391: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
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
                    return T
                },
                updateApplicationCommandPermissions: function() {
                    return E
                }
            });
            var i = n("872717"),
                a = n("913144"),
                s = n("507217"),
                r = n("389153"),
                l = n("49111");

            function u() {
                a.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR"
                })
            }

            function d(t, e, n) {
                a.default.dispatch({
                    applicationId: t,
                    commandId: e,
                    permissions: n,
                    type: "INTEGRATION_PERMISSION_SETTINGS_EDIT"
                })
            }

            function o(t, e) {
                i.default.get(l.Endpoints.GUILD_COMMANDS_FOR_APPLICATION(t, e)).then(n => {
                    a.default.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
                        applicationId: e,
                        commands: n.body.application_commands,
                        guildId: t,
                        permissions: n.body.permissions
                    })
                }, () => {
                    a.default.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",
                        applicationId: e
                    })
                })
            }
            async function c(t, e, n) {
                let s = [];
                try {
                    let a = await i.default.get(l.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(t, e, n));
                    a.ok && (s = a.body.permissions)
                } catch (i) {
                    if (404 !== i.status) {
                        a.default.dispatch({
                            type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
                            applicationId: t,
                            commandId: n,
                            guildId: e
                        });
                        return
                    }
                }
                a.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                    applicationId: t,
                    commandId: n,
                    guildId: e,
                    permissions: s
                })
            }

            function I(t) {
                a.default.dispatch({
                    applicationId: t,
                    type: "INTEGRATION_PERMISSION_SETTINGS_INIT"
                })
            }

            function T(t) {
                a.default.dispatch({
                    commandId: t,
                    type: "INTEGRATION_PERMISSION_SETTINGS_RESET"
                })
            }
            async function E(t) {
                let {
                    applicationId: e,
                    commandId: n,
                    defaultEveryoneValue: i,
                    defaultEverywhereValue: l,
                    guildId: u,
                    permissions: d
                } = t, o = n === e ? function(t, e, n, i) {
                    if (!n || !i) return e;
                    let a = {
                        [t]: n,
                        [(0, r.allChannelsSentinel)(t)]: i
                    };
                    return e.filter(t => {
                        let e = a[t.id];
                        return null == e || t.permission !== e
                    })
                }(u, d, i, l) : d, c = await s.updateApplicationGuildCommandPermissions(e, u, n, o);
                c.ok && a.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                    applicationId: e,
                    commandId: n,
                    guildId: u,
                    permissions: c.body.permissions
                })
            }
        },
        385065: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("118810"),
                s = n("77078"),
                r = n("272030"),
                l = n("798609"),
                u = n("861370"),
                d = n("152298"),
                o = n("26051"),
                c = n("667358"),
                I = n("563816"),
                T = n("518155"),
                E = n("718381"),
                p = n("875834"),
                N = n("782340");

            function f(t) {
                var e;
                let n, f, S, {
                        channel: _,
                        message: h,
                        target: O,
                        attachment: A,
                        onSelect: m,
                        onHeightUpdate: G
                    } = t,
                    C = O;
                if (null != A) f = n = A.url;
                else
                    for (;
                        (0, a.isElement)(C);)(0, a.isElement)(C, HTMLImageElement) && null != C.src && (f = C.src), (0, a.isElement)(C, HTMLAnchorElement) && null != C.href && (n = C.href, S = C.textContent), C = C.parentNode;
                let R = null === (e = document.getSelection()) || void 0 === e ? void 0 : e.toString(),
                    y = (0, d.default)(R),
                    M = (0, c.default)(R),
                    g = (0, I.default)({
                        commandType: l.ApplicationCommandType.MESSAGE,
                        commandTargetId: h.id,
                        channel: _,
                        guildId: void 0,
                        onHeightUpdate: G
                    }),
                    v = (0, p.default)(h, _),
                    P = (0, T.default)(h, _),
                    H = (0, E.default)(h, _),
                    x = (0, o.default)(null != n ? n : f, S),
                    b = (0, u.default)({
                        id: h.id,
                        label: N.default.Messages.COPY_ID_MESSAGE,
                        shiftId: "".concat(h.channel_id, "-").concat(h.id)
                    });
                return (0, i.jsxs)(s.Menu, {
                    navId: "message",
                    onClose: r.closeContextMenu,
                    "aria-label": N.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
                    onSelect: m,
                    children: [(0, i.jsx)(s.MenuGroup, {
                        children: y
                    }), (0, i.jsx)(s.MenuGroup, {
                        children: M
                    }), (0, i.jsxs)(s.MenuGroup, {
                        children: [g, v, P, H]
                    }), (0, i.jsx)(s.MenuGroup, {
                        children: x
                    }), (0, i.jsx)(s.MenuGroup, {
                        children: b
                    })]
                })
            }
        },
        555158: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                HelpMessageTypes: function() {
                    return a
                },
                default: function() {
                    return E
                }
            });
            var i, a, s = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                u = n("77078"),
                d = n("36694"),
                o = n("381546"),
                c = n("68238"),
                I = n("423487"),
                T = n("557296");
            (i = a || (a = {}))[i.WARNING = 0] = "WARNING", i[i.INFO = 1] = "INFO", i[i.ERROR = 2] = "ERROR", i[i.POSITIVE = 3] = "POSITIVE";
            var E = function(t) {
                let {
                    children: e,
                    messageType: n,
                    className: i,
                    textColor: a = "text-normal",
                    textVariant: r = "text-sm/medium"
                } = t, E = function(t) {
                    switch (t) {
                        case 0:
                            return I.default;
                        case 1:
                            return c.default;
                        case 2:
                            return o.default;
                        case 3:
                            return d.default
                    }
                }(n), p = function(t) {
                    switch (t) {
                        case 0:
                            return T.warning;
                        case 1:
                            return T.info;
                        case 2:
                            return T.error;
                        case 3:
                            return T.positive
                    }
                }(n);
                return (0, s.jsxs)("div", {
                    className: l(T.container, p, i),
                    children: [(0, s.jsx)("div", {
                        className: T.iconDiv,
                        children: (0, s.jsx)(E, {
                            className: T.icon
                        })
                    }), (0, s.jsx)(u.Text, {
                        className: T.text,
                        color: a,
                        variant: r,
                        children: e
                    })]
                })
            }
        },
        662255: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("35647"),
                r = n("75196"),
                l = (0, a.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...l
                    } = t;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(l),
                        width: e,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: s,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                        })
                    })
                }, s.IdIcon, void 0, {
                    size: 24
                })
        }
    }
]);