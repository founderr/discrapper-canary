(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["84729"], {
        666020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return u
                },
                unsubscribeMembers: function() {
                    return r
                },
                subscribeChannel: function() {
                    return l
                },
                subscribeChannelDimensions: function() {
                    return o
                }
            }), n("424973");
            var i = n("913144"),
                a = n("696605");

            function u(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function r(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function l(e, t, n) {
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
                    height: u,
                    rowHeight: r
                } = e;

                function o(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / r)) + t)
                }
                let s = [];

                function d(e) {
                    let t = e + (a.MINIMUM_RANGE - 1);
                    return s.push([e, t]), t + 1
                }
                let c = o(.5 * u),
                    E = o(i, -c),
                    I = o(i + u, c);
                for (E > 0 && (E = Math.max(d(0), E)), E = Math.floor(E / a.MINIMUM_RANGE) * a.MINIMUM_RANGE; E <= I;) E = d(E);
                l(t, n, s)
            }
        },
        713841: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("913144"),
                a = n("592407"),
                u = n("482391"),
                r = n("611183"),
                l = {
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
                            }), await u.updateApplicationCommandPermissions({
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
                            }), await a.default.updateIntegration(e, t.id, t.expire_behavior, t.expire_grace_period, t.enable_emoticons), i.default.dispatch({
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
                            }), await r.default.update(e, t.id, t), i.default.dispatch({
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
        352674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("913144"),
                a = {
                    startTyping(e) {
                        i.default.dispatch({
                            type: "TYPING_START_LOCAL",
                            channelId: e
                        })
                    },
                    stopTyping(e) {
                        i.default.dispatch({
                            type: "TYPING_STOP_LOCAL",
                            channelId: e
                        })
                    }
                }
        },
        611183: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("917351"),
                a = n.n(i),
                u = n("872717"),
                r = n("913144"),
                l = n("49111");
            let o = ["Spidey Bot", "Captain Hook"];
            var s = {
                fetchForGuild(e) {
                    r.default.dispatch({
                        type: "WEBHOOKS_FETCHING",
                        guildId: e
                    }), u.default.get({
                        url: l.Endpoints.GUILD_WEBHOOKS(e),
                        oldFormErrors: !0
                    }).then(t => {
                        let {
                            body: n
                        } = t;
                        return r.default.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: e,
                            webhooks: n
                        })
                    }).catch(t => {
                        let {
                            body: n
                        } = t;
                        r.default.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: e,
                            error: n.message
                        })
                    })
                },
                fetchForChannel(e, t) {
                    r.default.dispatch({
                        type: "WEBHOOKS_FETCHING",
                        guildId: e,
                        channelId: t
                    }), u.default.get({
                        url: l.Endpoints.CHANNEL_WEBHOOKS(t),
                        oldFormErrors: !0
                    }).then(n => {
                        let {
                            body: i
                        } = n;
                        return r.default.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: e,
                            channelId: t,
                            webhooks: i
                        })
                    })
                },
                create: (e, t, n) => (null == n && (n = o[a.random(0, o.length - 1)]), u.default.post({
                    url: l.Endpoints.CHANNEL_WEBHOOKS(t),
                    body: {
                        name: n
                    },
                    oldFormErrors: !0
                }).then(t => {
                    let {
                        body: n
                    } = t;
                    return r.default.dispatch({
                        type: "WEBHOOK_CREATE",
                        guildId: e,
                        webhook: n
                    }), n
                })),
                delete: (e, t) => u.default.delete({
                    url: l.Endpoints.WEBHOOK(t),
                    oldFormErrors: !0
                }).then(() => {
                    r.default.dispatch({
                        type: "WEBHOOK_DELETE",
                        guildId: e,
                        webhookId: t
                    })
                }),
                update: (e, t, n) => u.default.patch({
                    url: l.Endpoints.WEBHOOK(t),
                    body: n,
                    oldFormErrors: !0
                }).then(t => {
                    let {
                        body: n
                    } = t;
                    return r.default.dispatch({
                        type: "WEBHOOK_UPDATE",
                        guildId: e,
                        webhook: n
                    }), n
                })
            }
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("669491"),
                u = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, u.default)(o),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5ZM17.7863 5.37403C17.8815 5.20737 17.7612 5 17.5692 5H14.4352C14.1661 5 13.9176 5.14421 13.7841 5.3779L6.21373 18.626C6.1185 18.7926 6.23884 19 6.43079 19H9.56476C9.8339 19 10.0824 18.8558 10.2159 18.6221L17.7863 5.37403Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: l
                    })
                })
            }
        },
        750560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return l
                }
            }), n("37983");
            var i = n("884691"),
                a = n("917351"),
                u = n.n(a);
            n("233736");
            var r = n("666020");

            function l(e) {
                i.useEffect(() => (u.forEach(e, (e, t) => (0, r.subscribeMembers)(t, e)), () => {
                    u.forEach(e, (e, t) => (0, r.unsubscribeMembers)(t, e))
                }), [e])
            }
        },
        991630: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                u = n("414456"),
                r = n.n(u),
                l = n("587974"),
                o = n("315102"),
                s = n("524768"),
                d = n("616674"),
                c = n("363577");

            function E(e) {
                let {
                    section: t,
                    isSelected: n,
                    width: u,
                    height: E,
                    className: I,
                    selectable: f = !1,
                    onFocus: T,
                    onBlur: _,
                    onMouseOver: S,
                    onMouseLeave: N,
                    ...p
                } = e, [A, C] = a.useState(!1), m = a.useCallback(() => {
                    C(!0), null == T || T()
                }, [T]), M = a.useCallback(() => {
                    C(!1), null == _ || _()
                }, [_]), h = a.useCallback(() => {
                    C(!0), null == S || S()
                }, [S]), O = a.useCallback(() => {
                    C(!1), null == N || N()
                }, [N]), D = a.useMemo(() => {
                    if (t.type === s.ApplicationCommandSectionType.APPLICATION) {
                        var e;
                        return o.default.getApplicationIconURL({
                            id: t.id,
                            icon: t.icon,
                            bot: null === (e = t.application) || void 0 === e ? void 0 : e.bot,
                            botIconFirst: !0,
                            size: u
                        })
                    }
                    return c
                }, [t, u]);
                return (0, i.jsx)("div", {
                    ...p,
                    className: r(d.wrapper, I, {
                        [d.selectable]: f,
                        [d.selected]: f && n
                    }),
                    onFocus: m,
                    onBlur: M,
                    onMouseOver: h,
                    onMouseLeave: O,
                    children: (0, i.jsx)(l.default, {
                        className: d.mask,
                        mask: f && (n || A) ? l.MaskIDs.SQUIRCLE : l.MaskIDs.AVATAR_DEFAULT,
                        width: u,
                        height: E,
                        children: (0, i.jsx)("img", {
                            alt: "",
                            className: d.icon,
                            style: {
                                width: u,
                                height: E
                            },
                            src: D
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
            var a = n("414456"),
                u = n.n(a),
                r = n("83910"),
                l = n("93393"),
                o = n("317041"),
                s = n("749296");
            let d = e => {
                switch (e.id) {
                    case o.BuiltInSectionId.BUILT_IN:
                        return r.default;
                    case o.BuiltInSectionId.FRECENCY:
                        return l.default;
                    default:
                        return
                }
            };

            function c(e) {
                let {
                    section: t,
                    className: n,
                    width: a,
                    height: r,
                    padding: l,
                    isSelected: o,
                    selectable: c = !1,
                    ...E
                } = e, I = d(t);
                return (0, i.jsx)("div", {
                    className: u(s.wrapper, n, {
                        [s.selectable]: c,
                        [s.selected]: c && o
                    }),
                    style: {
                        width: a,
                        height: r,
                        padding: null != l ? l : 0
                    },
                    children: null != I ? (0, i.jsx)(I, {
                        className: s.icon,
                        width: a,
                        height: r,
                        ...E
                    }) : null
                })
            }
        },
        355263: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getIconComponent: function() {
                    return l
                },
                pxToRem: function() {
                    return o
                },
                getCommandQuery: function() {
                    return s
                }
            });
            var i = n("524768"),
                a = n("991630"),
                u = n("943161"),
                r = n("317041");
            let l = e => e.type === i.ApplicationCommandSectionType.BUILT_IN ? u.default : a.default;

            function o(e) {
                return "".concat(e / 16, "rem")
            }

            function s(e, t) {
                let n = t,
                    i = !1,
                    a = t.indexOf(":");
                if (a >= 0) {
                    let e = t.lastIndexOf(" ", a);
                    e >= 0 ? (t = t.substring(0, e), i = !0) : t = t.substring(0, a)
                } else t = t.substring(0, t.length);
                let u = t.split(" ", r.MAX_SUBCOMMAND_LEVEL + 1);
                return u.length > r.MAX_SUBCOMMAND_LEVEL && (i = !0, u.pop()), t = u.join(" "), (n.length > t.length || t.endsWith(" ")) && (i = !0, t = t.trimEnd()), {
                    text: t,
                    parts: u,
                    hasSpaceTerminator: i
                }
            }
        },
        633043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078"),
                u = n("850572"),
                r = () => (0, i.jsx)("div", {
                    className: u.loadingWrapper,
                    children: (0, i.jsx)(a.Dots, {
                        dotRadius: 4,
                        themed: !0
                    })
                })
        },
        337026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2023-03_apps_in_gdms",
                label: "Apps in GDMs",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show apps in gdm",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        201155: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useShowApplicationInGDM: function() {
                    return r
                }
            });
            var i = n("65597"),
                a = n("42203"),
                u = n("337026");

            function r(e) {
                let t = (0, i.default)([a.default], () => a.default.getChannel(e)),
                    {
                        enabled: n
                    } = u.default.useExperiment({
                        location: "baec9c_1"
                    });
                return n && function(e) {
                    return null != e && (!!e.isMultiUserDM() || !!e.isDM() && !e.isSystemDM() && null == e.rawRecipients.find(e => e.bot))
                }(t)
            }
        },
        219352: function(e, t, n) {
            "use strict";
            var i, a;
            n.r(t), n.d(t, {
                SelfStreamAndVideoAlertType: function() {
                    return i
                }
            }), (a = i || (i = {}))[a.STREAM = 0] = "STREAM", a[a.VIDEO = 1] = "VIDEO"
        },
        301603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("446674"),
                a = n("629109"),
                u = n("271938"),
                r = n("42887"),
                l = n("49111"),
                o = n("353927");

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.MediaEngineContextTypes.DEFAULT,
                    n = (0, i.useStateFromStores)([u.default], () => u.default.getId()),
                    s = (0, i.useStateFromStores)([r.default], () => r.default.supports(o.Features.DISABLE_VIDEO) && r.default.isVideoEnabled()),
                    d = (0, i.useStateFromStores)([r.default], () => r.default.isLocalVideoDisabled(n, t), [n, t]),
                    c = null == e || e === n;
                return [c && (s || d), d, e => {
                    let i = e ? l.VideoToggleState.DISABLED : l.VideoToggleState.MANUAL_ENABLED;
                    a.default.setDisableLocalVideo(n, i, t)
                }]
            }
        },
        632616: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("452804"),
                u = n("135230"),
                r = n("219352"),
                l = n("782340");

            function o(e) {
                let {
                    type: t,
                    onConfirm: n,
                    ...o
                } = e, s = t === r.SelfStreamAndVideoAlertType.STREAM ? l.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : l.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, d = t === r.SelfStreamAndVideoAlertType.STREAM ? l.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : l.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
                return (0, i.jsx)(u.default, {
                    confirmText: l.default.Messages.CONFIRM,
                    secondaryConfirmText: l.default.Messages.DONT_ASK_AGAIN,
                    title: s,
                    cancelText: l.default.Messages.CANCEL,
                    onConfirm: n,
                    onConfirmSecondary: () => {
                        a.default.updatedUnsyncedSettings({
                            disableHideSelfStreamAndVideoConfirmationAlert: !0
                        }), n()
                    },
                    body: d,
                    ...o
                })
            }
        },
        243288: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                u = n("77078"),
                r = n("255397"),
                l = n("191145"),
                o = n("782340");

            function s(e) {
                let t = (0, a.useStateFromStores)([l.default], () => l.default.getVoiceParticipantsHidden(e));
                return (0, i.jsx)(u.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: o.default.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !t,
                    action: () => r.default.toggleVoiceParticipantsHidden(e, !t)
                })
            }
        },
        321135: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                u = n("77078"),
                r = n("168973"),
                l = n("301603"),
                o = n("632616"),
                s = n("219352"),
                d = n("353927"),
                c = n("782340");

            function E(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.MediaEngineContextTypes.DEFAULT,
                    [n, E, I] = (0, l.default)(e, t),
                    f = (0, a.useStateFromStores)([r.default], () => r.default.disableHideSelfStreamAndVideoConfirmationAlert);
                return n ? (0, i.jsx)(u.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: c.default.Messages.SHOW_SELF_VIDEO,
                    checked: !E,
                    action: () => {
                        if (f || E) return I(!E);
                        (0, u.openModal)(e => (0, i.jsx)(o.default, {
                            ...e,
                            type: s.SelfStreamAndVideoAlertType.VIDEO,
                            onConfirm: () => I(!E)
                        }))
                    }
                }) : null
            }
        },
        873254: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                u = n("77078"),
                r = n("648911"),
                l = n("271938"),
                o = n("42887"),
                s = n("782340"),
                d = n("431024");

            function c(e) {
                let t = (0, u.useModalContext)(),
                    c = (0, a.useStateFromStores)([o.default], () => o.default.isVideoEnabled()),
                    E = (0, a.useStateFromStores)([l.default], () => l.default.getId() === e),
                    I = (0, r.default)();
                return (!c || I) && E ? (0, i.jsx)(u.MenuItem, {
                    id: "change-video-background",
                    label: (0, i.jsx)("div", {
                        className: d.item,
                        children: c ? s.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : s.default.Messages.CAMERA_PREVIEW_MENU_ITEM
                    }),
                    action: function() {
                        (0, u.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("381736").then(n.bind(n, "381736"));
                            return t => (0, i.jsx)(e, {
                                ...t,
                                videoEnabled: c
                            })
                        }, {
                            modalKey: "camera-preview",
                            contextKey: t
                        })
                    }
                }) : null
            }
        },
        149022: function(e, t, n) {
            "use strict";

            function i() {
                return {
                    textValue: "",
                    richValue: [{
                        type: "line",
                        children: [{
                            text: ""
                        }]
                    }]
                }
            }

            function a(e) {
                return {
                    textValue: e,
                    richValue: r(e)
                }
            }
            n.r(t), n.d(t, {
                createEmptyState: function() {
                    return i
                },
                createState: function() {
                    return a
                },
                toRichValue: function() {
                    return r
                },
                voidToOptionValue: function() {
                    return l
                }
            }), n("70102");
            let u = Object.freeze([Object.freeze({
                type: "line",
                children: Object.freeze([Object.freeze({
                    text: ""
                })])
            })]);

            function r(e) {
                return "" !== e ? e.split("\n").map(e => ({
                    type: "line",
                    children: [{
                        text: e
                    }]
                })) : u
            }

            function l(e) {
                switch (e.type) {
                    case "userMention":
                        return {
                            type: "userMention", userId: e.userId
                        };
                    case "channelMention":
                        return {
                            type: "channelMention", channelId: e.channelId
                        };
                    case "staticRouteLink":
                        return {
                            type: "staticRouteLink", channelId: e.channelId
                        };
                    case "soundboard":
                        return {
                            type: "soundboard", soundId: e.soundId
                        };
                    case "roleMention":
                        return {
                            type: "roleMention", roleId: e.roleId
                        };
                    case "textMention":
                        return {
                            type: "textMention", text: e.name
                        };
                    case "emoji":
                        return {
                            type: "emoji", name: e.emoji.name, surrogate: e.emoji.surrogate
                        };
                    case "customEmoji":
                        return {
                            type: "customEmoji", emojiId: e.emoji.emojiId, name: e.emoji.name, animated: e.emoji.animated
                        };
                    case "testInlineVoid":
                        throw Error("Unable to convert test types")
                }
                return null
            }
        },
        235275: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsDMsToClydeEnabled: function() {
                    return o
                }
            });
            var i = n("446674"),
                a = n("862205"),
                u = n("305961"),
                r = n("980215");
            let l = (0, a.createExperiment)({
                kind: "user",
                id: "2023-05_clyde_ai_dm",
                label: "DMs to Clyde",
                defaultConfig: {
                    isDMsToClydeEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "enable dms to clyde",
                    config: {
                        isDMsToClydeEnabled: !0
                    }
                }]
            });

            function o() {
                let {
                    isDMsToClydeEnabled: e
                } = l.useExperiment({
                    location: "dbd3ac_1"
                }, {
                    autoTrackExposure: !1
                }), t = (0, i.useStateFromStoresArray)([u.default], () => u.default.getGuildIds()), n = t.some(e => (0, r.getClydeExperimentEnabled)(u.default.getGuild(e)));
                return e && n
            }
        },
        497660: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983"),
                a = n("884691"),
                u = n("446674"),
                r = n("77078"),
                l = n("713841"),
                o = n("592407"),
                s = n("305961"),
                d = n("957255"),
                c = n("49111"),
                E = n("782340"),
                I = n("460856");

            function f(e, t, n) {
                let f = s.default.getGuild(t),
                    T = (0, u.useStateFromStores)([d.default], () => null != f ? d.default.can(c.Permissions.MANAGE_GUILD, f) : null),
                    _ = a.useCallback(() => {
                        o.default.open(t, c.GuildSettingsSections.INTEGRATIONS), l.default.setSection(c.IntegrationSettingsSections.APPLICATION, e.id)
                    }, [e.id, t]),
                    S = n === c.AppContext.POPOUT;
                return e.bot && T && !S ? (0, i.jsx)(r.MenuItem, {
                    id: "manage-integration",
                    label: (0, i.jsx)("div", {
                        className: I.labelWrapper,
                        children: (0, i.jsx)("span", {
                            className: I.label,
                            children: E.default.Messages.MANAGE_INTEGRATION
                        })
                    }),
                    action: _
                }) : null
            }
        },
        406043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCurrentUserCommunicationDisabled: function() {
                    return l
                },
                default: function() {
                    return d
                },
                userCommunicationDisabled: function() {
                    return c
                }
            });
            var i = n("446674"),
                a = n("26989"),
                u = n("697218"),
                r = n("509");

            function l(e) {
                let t = (0, i.useStateFromStores)([u.default], () => u.default.getCurrentUser());
                return d(null == t ? void 0 : t.id, e)
            }

            function o(e, t, n) {
                return null != t && null != e ? n.getMember(t, e) : null
            }

            function s(e) {
                var t;
                return [null !== (t = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== t ? t : null, (0, r.isMemberCommunicationDisabled)(e)]
            }

            function d(e, t) {
                let n = (0, i.useStateFromStores)([a.default], () => o(e, t, a.default), [t, e]);
                return s(n)
            }

            function c(e, t) {
                let n = o(e, t, a.default);
                return s(n)
            }
        },
        929423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return l
                },
                setCurrentGuild: function() {
                    return o
                },
                initGuildIdentitySettings: function() {
                    return s
                },
                closeGuildIdentitySettings: function() {
                    return d
                },
                resetAndCloseGuildIdentityForm: function() {
                    return c
                },
                setPendingAvatar: function() {
                    return E
                },
                setPendingBanner: function() {
                    return I
                },
                setPendingBio: function() {
                    return f
                },
                setPendingPronouns: function() {
                    return T
                },
                setPendingNickname: function() {
                    return _
                },
                setPendingThemeColors: function() {
                    return S
                },
                resetPendingMemberChanges: function() {
                    return N
                },
                resetPendingProfileChanges: function() {
                    return p
                },
                resetAllPending: function() {
                    return A
                },
                clearErrors: function() {
                    return C
                },
                setDisableSubmit: function() {
                    return m
                }
            }), n("70102");
            var i = n("872717"),
                a = n("913144"),
                u = n("54239"),
                r = n("49111");
            async function l(e, t) {
                let {
                    nick: n,
                    avatar: u
                } = t;
                if (null == e) throw Error("Need guildId");
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await i.default.patch({
                        url: r.Endpoints.SET_GUILD_MEMBER(e),
                        body: {
                            nick: n,
                            avatar: u
                        },
                        oldFormErrors: !0
                    });
                    return a.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), a.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: t.body,
                        guildId: e
                    }), t
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), a.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: t.body
                    })
                }
            }

            function o(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function s(e, t) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function d() {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, u.popLayer)()
            }

            function c() {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function E(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function I(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function f(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function T(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function _(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function S(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function N() {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function p() {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function A() {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function C() {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function m(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let i, a, u, r, l, o, s, d, c;
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var E = n("446674"),
                I = n("913144"),
                f = n("49111");
            let T = f.FormStates.CLOSED,
                _ = {},
                S = !1;

            function N() {
                T = f.FormStates.CLOSED, _ = {}, s = null, d = void 0, c = []
            }

            function p() {
                A(), C(), _ = {}, T = f.FormStates.OPEN
            }

            function A() {
                i = void 0, l = void 0
            }

            function C() {
                a = void 0, u = void 0, r = void 0, o = void 0
            }
            class m extends E.default.Store {
                getFormState() {
                    return T
                }
                getErrors() {
                    return _
                }
                showNotice() {
                    return void 0 !== i || void 0 !== a || void 0 !== u || void 0 !== r || void 0 !== l || void 0 !== o
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return a
                }
                getPendingBio() {
                    return u
                }
                getPendingNickname() {
                    return l
                }
                getPendingPronouns() {
                    return r
                }
                getPendingAccentColor() {
                    return l
                }
                getPendingThemeColors() {
                    return o
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: a,
                        pendingBio: u,
                        pendingPronouns: r,
                        pendingNickname: l,
                        pendingThemeColors: o
                    }
                }
                getGuild() {
                    return s
                }
                getSource() {
                    return d
                }
                getAnalyticsLocations() {
                    return c
                }
                getIsDisableSubmit() {
                    return S
                }
            }
            m.displayName = "GuildIdentitySettingsStore";
            var M = new m(I.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    s = e.guild, T = f.FormStates.OPEN, _ = {}, d = e.source, c = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: N,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    p(), N()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    s = e.guild, _ = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    T = f.FormStates.SUBMITTING, _ = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (T !== f.FormStates.SUBMITTING) return !1;
                    T = f.FormStates.OPEN, _ = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    T = f.FormStates.OPEN, _ = e.errors
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
                    a = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
                    let {
                        bio: t
                    } = e;
                    u = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    r = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
                    let {
                        nickname: t
                    } = e;
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    o = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: A,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: C,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: p,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: p,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    _ = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    S = t
                }
            })
        },
        130037: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTrackMemberSearchUsed: function() {
                    return f
                },
                useTrackMemberFilterRolesUsed: function() {
                    return T
                },
                MemberSafetyFlagType: function() {
                    return u
                },
                useTrackMemberFilterSafetyFlagsUsed: function() {
                    return _
                },
                ModerationActionType: function() {
                    return r
                },
                useTrackModerationAction: function() {
                    return S
                },
                trackMembersPageViewed: function() {
                    return N
                }
            });
            var i, a, u, r, l = n("884691"),
                o = n("812204"),
                s = n("716241"),
                d = n("271938"),
                c = n("599110"),
                E = n("49111");

            function I(e, t, n) {
                var i;
                let a = {
                    ...t,
                    ...(0, s.collectGuildAnalyticsMetadata)(null !== (i = t.guild_id) && void 0 !== i ? i : n)
                };
                c.default.track(e, a)
            }

            function f(e) {
                let t = l.useCallback(t => {
                    ! function(e) {
                        let t = {
                            guild_id: e,
                            location: o.default.MEMBER_SAFETY_PAGE
                        };
                        I(E.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, t)
                    }(e)
                }, [e]);
                return t
            }

            function T(e) {
                let t = l.useCallback(t => {
                    ! function(e, t) {
                        let n = {
                            selected_role_count: t.size,
                            guild_id: e,
                            location: o.default.MEMBER_SAFETY_PAGE
                        };
                        I(E.AnalyticEvents.MOD_DASH_FILTER_ROLES, n)
                    }(e, t)
                }, [e]);
                return t
            }(i = u || (u = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", i.COMMUNICATION_DISABLED = "communication_disabled";

            function _(e) {
                let t = l.useCallback(t => {
                    ! function(e, t) {
                        let n = {
                            flag_type: t,
                            guild_id: e,
                            location: o.default.MEMBER_SAFETY_PAGE
                        };
                        I(E.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, n)
                    }(e, t)
                }, [e]);
                return t
            }

            function S(e, t) {
                let {
                    location: n,
                    targetUserId: i,
                    targets: a
                } = t, u = l.useCallback(t => {
                    let u = {
                        action_type: t,
                        mod_user_id: d.default.getId(),
                        guild_id: e,
                        location: n,
                        target_user_id: null != i ? i : void 0,
                        targets: null != a ? a : void 0
                    };
                    I(E.AnalyticEvents.MODERATION_ACTION, u)
                }, [e, n, i, a]);
                return u
            }

            function N(e, t) {
                I(E.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
                    guild_id: e,
                    location: t
                })
            }(a = r || (r = {})).BAN = "ban", a.KICK = "kick", a.MUTE = "mute", a.TIMEOUT = "timeout", a.ADD_ROLE = "add_role", a.REMOVE_ROLE = "remove_role", a.COPY_ID = "copy_id", a.CHANGE_NICKNAME = "change_nickname"
        },
        482391: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearIntegrationPermissions: function() {
                    return o
                },
                editPermissions: function() {
                    return s
                },
                getApplicationCommands: function() {
                    return d
                },
                getApplicationCommandPermissions: function() {
                    return c
                },
                initIntegrationPermissions: function() {
                    return E
                },
                resetPermissions: function() {
                    return I
                },
                updateApplicationCommandPermissions: function() {
                    return f
                }
            });
            var i = n("872717"),
                a = n("913144"),
                u = n("507217"),
                r = n("389153"),
                l = n("49111");

            function o() {
                a.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR"
                })
            }

            function s(e, t, n) {
                a.default.dispatch({
                    applicationId: e,
                    commandId: t,
                    permissions: n,
                    type: "INTEGRATION_PERMISSION_SETTINGS_EDIT"
                })
            }

            function d(e, t) {
                i.default.get(l.Endpoints.GUILD_COMMANDS_FOR_APPLICATION(e, t)).then(n => {
                    a.default.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
                        applicationId: t,
                        commands: n.body.application_commands,
                        guildId: e,
                        permissions: n.body.permissions
                    })
                }, () => {
                    a.default.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",
                        applicationId: t
                    })
                })
            }
            async function c(e, t, n) {
                let u = [];
                try {
                    let a = await i.default.get(l.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n));
                    a.ok && (u = a.body.permissions)
                } catch (i) {
                    if (404 !== i.status) {
                        a.default.dispatch({
                            type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
                            applicationId: e,
                            commandId: n,
                            guildId: t
                        });
                        return
                    }
                }
                a.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                    applicationId: e,
                    commandId: n,
                    guildId: t,
                    permissions: u
                })
            }

            function E(e) {
                a.default.dispatch({
                    applicationId: e,
                    type: "INTEGRATION_PERMISSION_SETTINGS_INIT"
                })
            }

            function I(e) {
                a.default.dispatch({
                    commandId: e,
                    type: "INTEGRATION_PERMISSION_SETTINGS_RESET"
                })
            }
            async function f(e) {
                let {
                    applicationId: t,
                    commandId: n,
                    defaultEveryoneValue: i,
                    defaultEverywhereValue: l,
                    guildId: o,
                    permissions: s
                } = e, d = n === t ? function(e, t, n, i) {
                    if (!n || !i) return t;
                    let a = {
                        [e]: n,
                        [(0, r.allChannelsSentinel)(e)]: i
                    };
                    return t.filter(e => {
                        let t = a[e.id];
                        return null == t || e.permission !== t
                    })
                }(o, s, i, l) : s, c = await u.updateApplicationGuildCommandPermissions(t, o, n, d);
                c.ok && a.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                    applicationId: t,
                    commandId: n,
                    guildId: o,
                    permissions: c.body.permissions
                })
            }
        },
        274800: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                queueInteractionComponentState: function() {
                    return r
                },
                addQueued: function() {
                    return l
                },
                setFailed: function() {
                    return o
                },
                fetchMessageInteractionData: function() {
                    return s
                }
            });
            var i = n("872717"),
                a = n("913144"),
                u = n("49111");

            function r(e, t, n, i) {
                a.default.dispatch({
                    type: "QUEUE_INTERACTION_COMPONENT_STATE",
                    messageId: e,
                    nonce: t,
                    state: n,
                    indices: i
                })
            }

            function l(e, t) {
                let {
                    data: n,
                    messageId: i,
                    onCreate: u,
                    onSuccess: r,
                    onFailure: l
                } = t;
                a.default.dispatch({
                    type: "INTERACTION_QUEUE",
                    data: n,
                    nonce: e,
                    messageId: i,
                    onCreate: u,
                    onSuccess: r,
                    onFailure: l
                })
            }

            function o(e, t, n) {
                a.default.dispatch({
                    type: "INTERACTION_FAILURE",
                    nonce: e,
                    errorMessage: n,
                    errorCode: t
                })
            }
            async function s(e, t) {
                let n = await i.default.get({
                    url: u.Endpoints.MESSAGE_INTERACTION_DATA(e, t),
                    oldFormErrors: !0
                });
                if (n.ok) {
                    let i = n.body;
                    a.default.dispatch({
                        type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",
                        channelId: e,
                        messageId: t,
                        interactionData: i
                    })
                }
            }
        },
        809810: function(e, t, n) {
            "use strict";
            let i, a;
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007");
            var u = n("446674"),
                r = n("913144"),
                l = n("798609"),
                o = n("42203"),
                s = n("3765");
            let d = {},
                c = {},
                E = {};

            function I(e) {
                delete d[e];
                let t = E[e];
                null != t && delete c[t], delete E[e]
            }
            class f extends u.default.Store {
                getInteraction(e) {
                    let t = c[e.id];
                    return null != t ? d[t] : null
                }
                getMessageInteractionStates() {
                    let e = {};
                    for (let [t, n] of Object.entries(d)) {
                        let i = E[t];
                        null != i && (e[i] = n.state)
                    }
                    return e
                }
                canQueueInteraction(e, t) {
                    let n = c[e];
                    return (null == n || null == d[n] || d[n].state === s.InteractionState.FAILED) && (null == d[t] || d[t].state === s.InteractionState.FAILED) && !0
                }
                getIFrameModalApplicationId() {
                    return a
                }
                getIFrameModalKey() {
                    return i
                }
            }
            f.displayName = "InteractionStore";
            var T = new f(r.default, {
                LOGOUT: function() {
                    d = {}, c = {}, E = {}
                },
                INTERACTION_QUEUE: function(e) {
                    let {
                        nonce: t,
                        messageId: n,
                        data: i,
                        onCreate: a,
                        onCancel: u,
                        onSuccess: r,
                        onFailure: l
                    } = e;
                    null != n && (c[n] = t, E[t] = n), d[t] = {
                        state: s.InteractionState.QUEUED,
                        data: i,
                        onCreate: a,
                        onCancel: u,
                        onSuccess: r,
                        onFailure: l
                    }
                },
                INTERACTION_CREATE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        interactionId: i
                    } = e;
                    if (null == n) return !1;
                    let a = d[n];
                    if (null == a || a.state !== s.InteractionState.QUEUED) return !1;
                    a.state = s.InteractionState.CREATED, null === (t = a.onCreate) || void 0 === t || t.call(a, i)
                },
                INTERACTION_SUCCESS: function(e) {
                    var t;
                    let {
                        nonce: n
                    } = e;
                    if (null == n) return !1;
                    let i = d[n];
                    if (null == i) return !1;
                    null === (t = i.onSuccess) || void 0 === t || t.call(i), I(n)
                },
                INTERACTION_FAILURE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        errorCode: i,
                        errorMessage: a
                    } = e;
                    if (null == n) return !1;
                    let u = d[n];
                    if (null == u) return !1;
                    null === (t = u.onFailure) || void 0 === t || t.call(u, i, a), u.data.interactionType === l.InteractionTypes.APPLICATION_COMMAND ? I(n) : d[n] = {
                        ...u,
                        state: s.InteractionState.FAILED,
                        errorCode: i,
                        errorMessage: a
                    }
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    if (null == t.nonce) return !1;
                    {
                        var n;
                        let e = d[t.nonce];
                        if (null == e) return !1;
                        null === (n = e.onSuccess) || void 0 === n || n.call(e), I(t.nonce)
                    }
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e, n = o.default.getChannel(t);
                    if (null == n) return !1;
                    for (let [e, t] of Object.entries(d)) t.state === s.InteractionState.FAILED && I(e)
                },
                INTERACTION_IFRAME_MODAL_CREATE: function(e) {
                    let {
                        application: t
                    } = e;
                    a = t.id
                },
                INTERACTION_IFRAME_MODAL_CLOSE: function() {
                    i = void 0, a = void 0
                },
                INTERACTION_IFRAME_MODAL_KEY_CREATE: function(e) {
                    let {
                        modalKey: t
                    } = e;
                    i = t
                }
            })
        },
        3765: function(e, t, n) {
            "use strict";
            var i, a;
            n.r(t), n.d(t, {
                InteractionState: function() {
                    return i
                }
            }), (a = i || (i = {}))[a.QUEUED = 0] = "QUEUED", a[a.CREATED = 1] = "CREATED", a[a.FAILED = 2] = "FAILED"
        },
        752598: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInteractionTimeoutTimestamp: function() {
                    return S
                },
                executeMessageComponentInteraction: function() {
                    return N
                },
                handleInteractionResponse: function() {
                    return A
                },
                InteractionStatusViewState: function() {
                    return i
                },
                getInteractionStatusViewState: function() {
                    return C
                },
                canRetryInteractionData: function() {
                    return m
                }
            }), n("222007");
            var i, a, u = n("249654"),
                r = n("872717"),
                l = n("913144"),
                o = n("819689"),
                s = n("798609"),
                d = n("263024"),
                c = n("271938"),
                E = n("274800"),
                I = n("809810"),
                f = n("3765"),
                T = n("606981"),
                _ = n("49111");

            function S(e) {
                return null == e || "" === e || Number.isNaN(e) ? Date.now() : u.default.extractTimestamp(e) + 9e5
            }
            let N = async e => {
                let {
                    componentType: t,
                    messageId: n,
                    messageFlags: i,
                    customId: a,
                    indices: l,
                    applicationId: o,
                    channelId: f,
                    guildId: T,
                    localState: S
                } = e, N = u.default.fromTimestamp(Date.now());
                if (!I.default.canQueueInteraction(n, N)) return;
                await d.default.unarchiveThreadIfNecessary(f), (0, E.addQueued)(N, {
                    messageId: n,
                    data: {
                        interactionType: s.InteractionTypes.MESSAGE_COMPONENT,
                        customId: a,
                        indices: l
                    },
                    onFailure: (e, t) => p(f, e, t)
                }), null != S && (0, E.queueInteractionComponentState)(n, N, S, l);
                let C = {
                    type: s.InteractionTypes.MESSAGE_COMPONENT,
                    nonce: N,
                    guild_id: T,
                    channel_id: f,
                    message_flags: i,
                    message_id: n,
                    application_id: o,
                    session_id: c.default.getSessionId(),
                    data: {
                        component_type: t,
                        custom_id: a,
                        ... function(e) {
                            if (null == e) return null;
                            if (e.type === s.ComponentType.STRING_SELECT || e.type === s.ComponentType.INPUT_TEXT) return e;
                            let t = e.selectedOptions.map(e => e.value);
                            return {
                                type: e.type,
                                values: t
                            }
                        }(S)
                    }
                };
                await r.default.post({
                    url: _.Endpoints.INTERACTIONS,
                    body: C,
                    timeout: 3e3
                }, e => {
                    A(N, f, T, e)
                })
            }, p = (e, t, n) => {
                null == n && null != t && o.default.sendClydeError(e, t)
            }, A = (e, t, n, i) => {
                if (!i.ok) {
                    if (!i.hasErr) {
                        var a;
                        if (i.status >= 400 && i.status < 500 && i.body) {
                            if (i.body.code === _.AbortCodes.INVALID_FORM_BODY && i.body.errors) {
                                let a = (0, T.getFirstSkemaError)(i.body.errors);
                                null != a && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === a.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === a.code) && l.default.dispatch({
                                    type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                                    channelId: t,
                                    guildId: n
                                }), (0, E.setFailed)(e, void 0, null == a ? void 0 : a.message);
                                return
                            }(0, E.setFailed)(e, void 0, i.body.message);
                            return
                        }(0, E.setFailed)(e, null === (a = i.body) || void 0 === a ? void 0 : a.code);
                        return
                    }(0, E.setFailed)(e)
                }
            };
            (a = i || (i = {}))[a.SENDING = 0] = "SENDING", a[a.CREATED = 1] = "CREATED", a[a.FAILED = 2] = "FAILED", a[a.TIMED_OUT = 3] = "TIMED_OUT";
            let C = (e, t) => {
                var n;
                let i = null == t ? void 0 : t.state,
                    a = e.state === _.MessageStates.SENT && S(e.id) < Date.now();
                let r = e.state === _.MessageStates.SEND_FAILED && (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : u.default.extractTimestamp(n) + 3e3) < Date.now(),
                    l = (null == t ? void 0 : t.data.interactionType) === s.InteractionTypes.APPLICATION_COMMAND,
                    o = e.isCommandType();
                if (l && i === f.InteractionState.QUEUED || o && e.state === _.MessageStates.SENDING && null != t) return 0;
                if (l && i === f.InteractionState.CREATED || e.hasFlag(_.MessageFlags.LOADING) && !a) return 1;
                if (null != e.interaction && e.hasFlag(_.MessageFlags.LOADING) && a) return 3;
                else if (null != e.interaction && !e.hasFlag(_.MessageFlags.LOADING) && r) return 3;
                else if (o && e.state === _.MessageStates.SEND_FAILED) return 2
            };

            function m(e) {
                let t = e.options;
                for (;
                    (null == t ? void 0 : t.length) === 1 && (t[0].type === s.ApplicationCommandOptionType.SUB_COMMAND_GROUP || t[0].type === s.ApplicationCommandOptionType.SUB_COMMAND);) t = t[0].options;
                for (let e of null != t ? t : [])
                    if (e.type === s.ApplicationCommandOptionType.ATTACHMENT) return !1;
                return !0
            }
        },
        606981: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getFirstSkemaError: function() {
                    return a
                }
            }), n("222007");
            let i = "_errors";

            function a(e) {
                return function e(t, n) {
                    let a = t[i];
                    if (null != a && Array.isArray(a)) return a[0];
                    for (let [a, u] of Object.entries(t))
                        if (a !== i && null != u && "object" == typeof u) return e(u, null != n ? n : a);
                    return null
                }(e, void 0)
            }
        },
        970755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchApplicationsShelf: function() {
                    return o
                },
                fetchPrivateChannelIntegrations: function() {
                    return s
                },
                deletePrivateChannelIntegration: function() {
                    return d
                }
            }), n("70102"), n("746379");
            var i = n("981980"),
                a = n("872717"),
                u = n("913144");
            n("253981");
            var r = n("140596"),
                l = n("49111");
            n("843455"), n("782340");

            function o() {
                r.default.getApplicationsShelfFetchState() === r.FetchState.NOT_FETCHED && (u.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_START"
                }), a.default.get(l.Endpoints.APPLICATIONS_SHELF).then(e => u.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_SUCCESS",
                    applications: e.body.applications
                })).catch(e => u.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_FAIL"
                })))
            }

            function s(e) {
                let t = new i.default(1e3, 5e3);
                u.default.dispatch({
                    type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START",
                    channelId: e
                }), a.default.get({
                    url: l.Endpoints.CHANNEL_INTEGRATIONS(e),
                    backoff: t,
                    retries: 10
                }).then(t => {
                    u.default.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS",
                        channelId: e,
                        integrations: t.body
                    })
                }).catch(() => {
                    u.default.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL",
                        channelId: e
                    })
                })
            }

            function d(e, t) {
                return a.default.delete(l.Endpoints.CHANNEL_INTEGRATION(e, t)).then(e => {
                    var t;
                    if (null === (t = e.body) || void 0 === t ? void 0 : t.message) throw Error(e.body.message)
                })
            }
        },
        252063: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePrivateChannelIntegrationState: function() {
                    return s
                }
            }), n("222007");
            var i = n("884691"),
                a = n("446674"),
                u = n("201155"),
                r = n("21121"),
                l = n("970755"),
                o = n("140596");

            function s(e) {
                let {
                    channelId: t
                } = e;
                (0, r.useInMainTabsExperiment)();
                let n = (0, u.useShowApplicationInGDM)(t),
                    {
                        installedIntegrations: s,
                        applicationsShelf: d,
                        integrationsFetchState: c,
                        applicationsShelfFetchState: E
                    } = (0, a.useStateFromStoresObject)([o.default], () => ({
                        installedIntegrations: o.default.getIntegrations(t),
                        applicationsShelf: o.default.getApplicationsShelf(),
                        integrationsFetchState: o.default.getIntegrationsFetchState(t),
                        applicationsShelfFetchState: o.default.getApplicationsShelfFetchState()
                    }));
                i.useEffect(() => {
                    n && ((c === o.FetchState.NOT_FETCHED || c === o.FetchState.FETCH_FAILED) && (0, l.fetchPrivateChannelIntegrations)(t), (E === o.FetchState.NOT_FETCHED || E === o.FetchState.FETCH_FAILED) && (0, l.fetchApplicationsShelf)())
                }, [n, t, c, E]);
                let I = new Set(s.map(e => e.application.id)),
                    f = d.filter(e => !I.has(e.id));
                return {
                    installedIntegrations: s,
                    availableApplications: f,
                    applicationsShelf: d,
                    fetched: c !== o.FetchState.NOT_FETCHED && c !== o.FetchState.FETCHING && E !== o.FetchState.NOT_FETCHED && E !== o.FetchState.FETCHING,
                    appsInGDMEnabled: n
                }
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
                a = n("79112"),
                u = n("685665"),
                r = n("929423");
            n("424562");
            var l = n("49111"),
                o = n("397336");

            function s(e) {
                let {
                    guild: t,
                    scrollPosition: n,
                    analyticsLocation: s,
                    analyticsLocations: d,
                    openWithoutBackstack: c = !1
                } = e, {
                    analyticsLocations: E
                } = (0, u.default)(), I = (0, i.useCallback)(() => {
                    null != t && (0, r.initGuildIdentitySettings)(t, null != d ? d : E), a.default.open(l.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? o.ProfileCustomizationSubsection.GUILD : o.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: s,
                        analyticsLocations: d,
                        openWithoutBackstack: c
                    })
                }, [t, n, s, d, c, E]);
                return I
            }
        },
        85166: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                u = n("77078"),
                r = n("42203"),
                l = n("305961"),
                o = n("957255"),
                s = n("697218"),
                d = n("244480"),
                c = n("325861"),
                E = n("49111"),
                I = n("782340");

            function f(e, t, n) {
                var f;
                let T = r.default.getChannel(n),
                    _ = (0, a.useStateFromStores)([l.default], () => l.default.getGuild(t), [t]),
                    S = (0, a.useStateFromStores)([c.default], () => c.default.getPermissionsForUser(e.id, n), [n, e.id]),
                    N = (null === (f = s.default.getCurrentUser()) || void 0 === f ? void 0 : f.id) === e.id,
                    p = (0, a.useStateFromStores)([o.default], () => null != n && o.default.canWithPartialContext(E.Permissions.MUTE_MEMBERS, {
                        channelId: n
                    }), [n]);
                return null != T && null != _ && (p || N) && S.speaker ? (0, i.jsx)(u.MenuItem, {
                    id: "audience",
                    label: N ? I.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : I.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
                    action: () => {
                        N ? (0, d.moveSelfToAudience)(T) : (0, d.moveUserToAudience)(e, T)
                    }
                }) : null
            }
        },
        834247: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return B
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078"),
                u = n("272030"),
                r = n("838446"),
                l = n("158534"),
                o = n("798609"),
                s = n("846883"),
                d = n("812204"),
                c = n("243288"),
                E = n("321135"),
                I = n("873254"),
                f = n("235275"),
                T = n("861370"),
                _ = n("230947"),
                S = n("497660"),
                N = n("726750"),
                p = n("85166"),
                A = n("170990"),
                C = n("304582"),
                m = n("72057"),
                M = n("300925"),
                h = n("563816"),
                O = n("489836"),
                D = n("406703"),
                G = n("502533"),
                g = n("314838"),
                y = n("383161"),
                R = n("421602"),
                L = n("459870"),
                U = n("692986"),
                v = n("806179"),
                b = n("97508"),
                F = n("816106"),
                P = n("623879"),
                x = n("49111"),
                H = n("782340"),
                B = (0, l.default)((0, r.default)(function(e) {
                    let {
                        user: t,
                        guildId: n,
                        channel: r,
                        showMediaItems: l = !1,
                        showChatItems: d = !0,
                        showChannelCallItems: B = !1,
                        showModalItems: j = !0,
                        showStageChannelItems: V = !1,
                        context: w,
                        onSelect: k,
                        onHeightUpdate: Y
                    } = e, W = (0, v.default)(t.id, n, r.id), K = (0, y.default)(t, n, w), Q = (0, R.default)(t.id, w), z = (0, P.default)(t.id), X = (0, D.default)(t, w), Z = (0, m.default)({
                        user: t,
                        guildId: n,
                        context: w
                    }), q = (0, C.default)(t), J = (0, F.default)(t.id), $ = (0, U.default)(t.id), ee = (0, _.default)({
                        guildId: n,
                        userId: t.id,
                        analyticsLocation: {
                            page: x.AnalyticsPages.GUILD_CHANNEL,
                            section: x.AnalyticsSections.CHAT_USERNAME,
                            object: x.AnalyticsObjects.CONTEXT_MENU_ITEM
                        },
                        context: w
                    }), et = (0, g.default)(t, n), en = (0, s.default)(null, t), ei = (0, A.default)(t), ea = (0, O.default)(t), eu = (0, M.default)(t, n, r.id), er = (0, b.default)(t.id, n), el = (0, L.default)(t, n), eo = (0, T.default)({
                        id: t.id,
                        label: H.default.Messages.COPY_ID_USER
                    }), es = (0, G.default)(t.id, r.id), ed = (0, E.default)(t.id), ec = (0, c.default)(r.id), eE = (0, N.default)(t), eI = (0, p.default)(t, n, r.id), ef = (0, h.default)({
                        commandType: o.ApplicationCommandType.USER,
                        commandTargetId: t.id,
                        channel: r,
                        guildId: n,
                        onShow: Y
                    }), eT = (0, I.default)(t.id), e_ = (0, S.default)(t, n, w), eS = t.isNonUserBot(), eN = t.isClyde(), ep = (0, f.useIsDMsToClydeEnabled)();
                    return (0, i.jsxs)(a.Menu, {
                        navId: "user-context",
                        onClose: u.closeContextMenu,
                        "aria-label": H.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: k,
                        children: [!eS && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)(a.MenuGroup, {
                                children: [eE, V && eI]
                            }), (0, i.jsxs)(a.MenuGroup, {
                                children: [j && W, d && K, Q, X, j && Z, j && q, z]
                            }), l && (0, i.jsx)(a.MenuGroup, {
                                children: J
                            }), (0, i.jsx)(a.MenuGroup, {
                                children: j && en
                            }), (0, i.jsxs)(a.MenuGroup, {
                                children: [l && $, l && es, j && ee, ef, e_, j && et, ei, j && ea, B && eT]
                            }), (0, i.jsx)(a.MenuGroup, {
                                children: eu
                            }), (0, i.jsxs)(a.MenuGroup, {
                                children: [er, el]
                            }), B && (0, i.jsxs)(a.MenuGroup, {
                                children: [ec, ed]
                            })]
                        }), eN && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)(a.MenuGroup, {
                                children: [j && W, ep && Q]
                            }), (0, i.jsx)(a.MenuGroup, {
                                children: eu
                            })]
                        }), (0, i.jsx)(a.MenuGroup, {
                            children: eo
                        })]
                    })
                }, {
                    object: x.AnalyticsObjects.CONTEXT_MENU
                }), [d.default.CONTEXT_MENU, d.default.GUILD_CHANNEL_USER_MENU])
        },
        563816: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("37983"),
                a = n("884691"),
                u = n("627445"),
                r = n.n(u),
                l = n("446674"),
                o = n("77078"),
                s = n("240249"),
                d = n("524768"),
                c = n("389153"),
                E = n("916565"),
                I = n("355263"),
                f = n("633043"),
                T = n("305961"),
                _ = n("317041"),
                S = n("782340"),
                N = n("205735"),
                p = e => {
                    let {
                        commandType: t,
                        commandTargetId: n,
                        channel: u,
                        guildId: p,
                        onShow: A
                    } = e, C = a.useRef(!1), m = a.useRef(0), M = (0, l.useStateFromStores)([T.default], () => T.default.getGuild(null != p ? p : u.guild_id)), {
                        hasMoreAfter: h,
                        scrollDown: O,
                        sectionDescriptors: D,
                        commands: G,
                        placeholders: g
                    } = s.useDiscovery(u, {
                        commandType: t
                    }, {
                        placeholderCount: _.CONTEXT_MENU_PLACEHOLDER_COUNT,
                        limit: _.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
                    }), {
                        visibleCommands: y,
                        sections: R
                    } = a.useMemo(() => {
                        let e = G.concat(g),
                            t = {};
                        return D.forEach(e => {
                            t[e.id] = e
                        }), {
                            visibleCommands: e,
                            sections: t
                        }
                    }, [G, D, g]), L = a.useMemo(() => (0, c.canUseContextMenuCommands)(u, y.length, s.getCommandTypeCount(u, t, null == M ? void 0 : M.applicationCommandCounts)), [u, t, y.length, null == M ? void 0 : M.applicationCommandCounts]);
                    a.useEffect(() => {
                        L !== C.current && (L && (null == A || A()), C.current = L)
                    }, [L, A]), a.useEffect(() => {
                        U(m.current)
                    }, [y]);
                    let U = a.useCallback(e => {
                            h && e + 500 > 34 * y.length - 40 && O(), m.current = e
                        }, [h, O, y]),
                        v = a.useCallback(e => {
                            if (e.inputType === d.ApplicationCommandInputType.PLACEHOLDER) return (0, i.jsx)(o.MenuItem, {
                                id: "menu-command-".concat(e.id),
                                render: () => (0, i.jsx)(f.default, {})
                            }, "menu-command-".concat(e.id));
                            r(null != u, "menu item should not show if channel is null");
                            let t = R[e.applicationId],
                                a = null != t ? (0, I.getIconComponent)(t) : void 0;
                            return (0, i.jsx)(o.MenuItem, {
                                id: e.id,
                                label: e.displayName,
                                showIconFirst: !0,
                                icon: () => null != a ? (0, i.jsx)(a, {
                                    channel: u,
                                    section: t,
                                    width: 18,
                                    height: 18,
                                    selectable: !1
                                }) : null,
                                action: () => {
                                    (0, E.default)({
                                        command: e,
                                        optionValues: {},
                                        context: {
                                            channel: u,
                                            guild: M
                                        },
                                        commandTargetId: n
                                    })
                                }
                            }, e.id)
                        }, [u, M, n, R]);
                    return L && (0, i.jsx)(o.MenuItem, {
                        id: "apps",
                        label: S.default.Messages.APPS,
                        onChildrenScroll: U,
                        childRowHeight: 34,
                        listClassName: N.list,
                        disabled: 0 === y.length,
                        children: y.map(v)
                    })
                }
        },
        383161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                mentionUser: function() {
                    return f
                },
                default: function() {
                    return T
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                u = n("77078"),
                r = n("352674"),
                l = n("42203"),
                o = n("957255"),
                s = n("18494"),
                d = n("659500"),
                c = n("158998"),
                E = n("49111"),
                I = n("782340");

            function f(e, t) {
                let {
                    id: n
                } = e, i = "@".concat(c.default.getUserTag(e, {
                    decoration: "never"
                }));
                d.ComponentDispatch.dispatchToLastSubscribed(E.ComponentActions.INSERT_TEXT, {
                    plainText: i,
                    rawText: "<@".concat(n, ">")
                }), null != t && r.default.startTyping(t)
            }

            function T(e, t, n) {
                let [r, d] = (0, a.useStateFromStoresArray)([s.default, l.default, o.default], () => {
                    let e = s.default.getChannelId(t),
                        n = l.default.getChannel(e),
                        i = null != n && (n.isMultiUserDM() || o.default.can(E.Permissions.SEND_MESSAGES, n));
                    return [e, i]
                }, [t]), c = n === E.AppContext.POPOUT;
                return !d || c ? null : (0, i.jsx)(u.MenuItem, {
                    id: "mention",
                    label: I.default.Messages.MENTION,
                    action: function() {
                        f(e, r)
                    }
                })
            }
        },
        648911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("446674"),
                a = n("42887"),
                u = n("512244");

            function r() {
                return (0, i.useStateFromStores)([a.default], () => (0, u.default)(a.default))
            }
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("469563"),
                u = n("926001"),
                r = n("75196"),
                l = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: u,
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: u,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, u.SlashBoxIcon, void 0, {
                    size: 24
                })
        },
        93393: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("469563"),
                u = n("503420"),
                r = n("75196"),
                l = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: n = 20,
                        color: a = "currentColor",
                        foreground: u,
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 20 20",
                        children: (0, i.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, i.jsx)("path", {
                                className: u,
                                fill: a,
                                d: "M9.99999 1.66675C5.39699 1.66675 1.66666 5.39708 1.66666 10.0001C1.66666 14.6031 5.39699 18.3334 9.99999 18.3334C14.603 18.3334 18.3333 14.6031 18.3333 10.0001C18.3333 5.39708 14.603 1.66675 9.99999 1.66675ZM9.99999 4.66675C10.3685 4.66675 10.6667 4.96493 10.6667 5.33342V9.61475L13.8021 11.4272C14.1211 11.6108 14.2252 12.0145 14.0416 12.3335C13.8581 12.6525 13.4544 12.7567 13.1354 12.5731L9.73937 10.6148C9.71333 10.6043 9.68989 10.5874 9.66646 10.5731C9.46724 10.4572 9.33312 10.2463 9.33312 10.0002V5.3335C9.33312 4.965 9.6315 4.66675 9.99999 4.66675Z"
                            })
                        })
                    })
                }, u.ClockIcon, void 0, {
                    size: 20
                })
        }
    }
]);