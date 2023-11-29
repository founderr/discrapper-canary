(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["31662"], {
        437140: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("70102");
            var l = n("759843"),
                i = n("627929"),
                a = n("913144"),
                s = n("81732"),
                r = n("282109"),
                d = n("840707"),
                u = n("519705"),
                o = n("49111"),
                c = n("397336"),
                f = {
                    createChannel(e) {
                        let {
                            guildId: t,
                            type: n,
                            name: f,
                            permissionOverwrites: C = [],
                            bitrate: E,
                            userLimit: h,
                            parentId: _,
                            skuId: g,
                            branchId: v
                        } = e;
                        a.default.dispatch({
                            type: "CREATE_CHANNEL_MODAL_SUBMIT"
                        });
                        let p = {
                            type: n,
                            name: f,
                            permission_overwrites: C
                        };
                        if (null != E && E !== o.BITRATE_DEFAULT && (p.bitrate = E), null != h && h > 0 && (p.user_limit = h), null != _ && (p.parent_id = _), n === o.ChannelTypes.GUILD_STORE) {
                            if (null == g) throw Error("Unexpected missing SKU");
                            p.sku_id = g, p.branch_id = v
                        }
                        return d.default.post({
                            url: o.Endpoints.GUILD_CHANNELS(t),
                            body: p,
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: l.NetworkActionNames.CHANNEL_CREATE,
                                properties: e => {
                                    var t, n;
                                    return (0, i.exact)({
                                        is_private: C.length > 0,
                                        channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                                        channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                                    })
                                }
                            }
                        }).then(e => (r.default.isOptInEnabled(t) && u.default.updateChannelOverrideSettings(t, e.body.id, {
                            flags: c.ChannelNotificationSettingsFlags.OPT_IN_ENABLED
                        }), s.default.checkGuildTemplateDirty(t), e), e => {
                            throw a.default.dispatch({
                                type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                                errors: e.body
                            }), e
                        })
                    },
                    createRoleSubscriptionTemplateChannel: (e, t, n, a) => d.default.post({
                        url: o.Endpoints.GUILD_CHANNELS(e),
                        body: {
                            name: t,
                            type: n,
                            topic: a
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: l.NetworkActionNames.CHANNEL_CREATE,
                            properties: e => {
                                var t, n;
                                return (0, i.exact)({
                                    is_private: !0,
                                    channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                                    channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                                })
                            }
                        }
                    })
                }
        },
        519705: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007"), n("702976");
            var l = n("872717"),
                i = n("819855"),
                a = n("913144"),
                s = n("679428"),
                r = n("282109"),
                d = n("568734"),
                u = n("34676"),
                o = n("49111"),
                c = n("397336"),
                f = n("782340"),
                C = {
                    open(e) {
                        a.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
                            guildId: e
                        })
                    },
                    close() {
                        a.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                        })
                    },
                    updateGuildNotificationSettings(e, t, n) {
                        let l = (0, u.getCurrentGuildSettings)(e);
                        s.default.saveUserGuildSettings(e, t), a.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, u.trackGuildNotificationSettingsUpdate)(e, t, l, n)
                    },
                    updateGuildAndChannelNotificationSettings(e, t, n) {
                        let l = Object.keys(t.channel_overrides),
                            i = (0, u.getCurrentGuildSettings)(e),
                            r = (0, u.getManyCurrentChannelSettings)(e, l);
                        s.default.saveUserGuildSettings(e, t), a.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, u.trackGuildNotificationSettingsUpdate)(e, t, i, n), Object.keys(t.channel_overrides).forEach(l => {
                            let i = r.get(l);
                            (0, u.trackChannelNotificationSettingsUpdate)(e, l, t.channel_overrides[l], i, n)
                        })
                    },
                    updateGuildNotificationSettingsBulk(e, t) {
                        let n = Object.keys(e),
                            l = (0, u.getManyCurrentGuildSettings)(n);
                        s.default.saveUserGuildSettingsBulk(e), Object.entries(e).forEach(e => {
                            let [n, i] = e, s = l.get(n);
                            a.default.dispatch({
                                type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                                guildId: n,
                                settings: i
                            }), (0, u.trackGuildNotificationSettingsUpdate)(n, i, s, t)
                        })
                    },
                    updateChannelOverrideSettings(e, t, n, l) {
                        let r = (0, u.getCurrentChannelSettings)(e, t);
                        s.default.saveUserGuildSettings(e, {
                            channel_overrides: {
                                [t]: n
                            }
                        }), a.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                            guildId: e,
                            channelId: t,
                            settings: n
                        }), i.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED), (0, u.trackChannelNotificationSettingsUpdate)(e, t, n, r, l)
                    },
                    updateChannelOverrideSettingsBulk(e, t, n) {
                        let l = Object.keys(t),
                            i = (0, u.getManyCurrentChannelSettings)(e, l);
                        s.default.saveUserGuildSettings(e, {
                            channel_overrides: t
                        }), a.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                            guildId: e,
                            overrides: t
                        }), Object.keys(t).forEach(l => (0, u.trackChannelNotificationSettingsUpdate)(e, l, t[l], i.get(l), n))
                    },
                    setForumThreadsCreated(e, t) {
                        let n = t ? c.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON : c.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
                            l = t ? c.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF : c.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
                            i = r.default.getChannelFlags(e);
                        this.updateChannelOverrideSettings(e.guild_id, e.id, {
                            flags: i & ~l | n
                        })
                    },
                    setAccountFlag(e, t) {
                        let n = r.default.accountNotificationSettings.flags,
                            i = (0, d.setFlag)(n, e, t);
                        l.default.patch({
                            url: o.Endpoints.ACCOUNT_NOTIFICATION_SETTINGS,
                            body: {
                                flags: i
                            }
                        })
                    }
                }
        },
        811513: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GroupIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...d
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, a.default)(d),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M14.5 8C16.1569 8 17.5 6.65685 17.5 5C17.5 3.34315 16.1569 2 14.5 2C13.3114 2 12.2843 2.69119 11.7986 3.69355C11.5972 4.10932 11.8557 4.56448 12.2419 4.81816C13.3081 5.51868 14.0904 6.61601 14.3786 7.90013C14.3915 7.95754 14.4412 8 14.5 8Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M18.4373 17.2714C18.5906 17.6957 18.9807 18 19.4319 18H20.5C21.3284 18 22 17.3284 22 16.5C22 12.6961 19.1681 9.55362 15.4976 9.06577C14.9501 8.993 14.5104 9.45209 14.4013 9.99348C14.3406 10.2944 14.253 10.5855 14.1409 10.8641C13.9082 11.4429 14.0871 12.1554 14.6125 12.4916C16.3621 13.6108 17.7205 15.2876 18.4373 17.2714Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M12.5 9C12.5 10.6569 11.1569 12 9.5 12C7.84315 12 6.5 10.6569 6.5 9C6.5 7.34315 7.84315 6 9.5 6C11.1569 6 12.5 7.34315 12.5 9Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M2 20.5C2 16.3579 5.35786 13 9.5 13C13.6421 13 17 16.3579 17 20.5C17 21.3284 16.3284 22 15.5 22C15.4055 22 15.3242 21.9334 15.3038 21.841C15.0908 20.8768 14.7383 19.9711 14.42 19.2977C14.3117 19.0685 14 19.149 14 19.4026V21.5C14 21.7761 13.7761 22 13.5 22H5.5C5.22386 22 5 21.7761 5 21.5V19.4026C5 19.149 4.6883 19.0685 4.57996 19.2977C4.26174 19.9711 3.90923 20.8768 3.69619 21.841C3.6758 21.9334 3.59454 22 3.5 22C2.67157 22 2 21.3284 2 20.5Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: r
                    })]
                })
            }
        },
        696675: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MicrophoneIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...d
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, a.default)(d),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M12 2C9.79086 2 8 3.79086 8 6V10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10V6C16 3.79086 14.2091 2 12 2Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M6 10C6 9.44772 5.55228 9 5 9C4.44772 9 4 9.44772 4 10C4 14.0796 7.05369 17.446 11 17.9381V20H9C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22H15C15.5523 22 16 21.5523 16 21C16 20.4477 15.5523 20 15 20H13V17.9381C16.9463 17.446 20 14.0796 20 10C20 9.44772 19.5523 9 19 9C18.4477 9 18 9.44772 18 10C18 13.3137 15.3137 16 12 16C8.68629 16 6 13.3137 6 10Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: r
                    })]
                })
            }
        },
        304983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MoreHorizontalIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...d
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(d),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12ZM22 12C22 13.1046 21.1046 14 20 14C18.8954 14 18 13.1046 18 12C18 10.8954 18.8954 10 20 10C21.1046 10 22 10.8954 22 12Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: r
                    })
                })
            }
        },
        651072: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("862205");
            let i = (0, l.createExperiment)({
                kind: "guild",
                id: "2023-09_recurring_events",
                label: "Allows guild to create recurring events",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Recurring Events are enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var a = i
        },
        374860: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                navigateToEvent: function() {
                    return c
                },
                postStartActions: function() {
                    return f
                }
            });
            var l = n("627445"),
                i = n.n(l),
                a = n("987317"),
                s = n("244480"),
                r = n("716214"),
                d = n("42203"),
                u = n("945956"),
                o = n("745049");
            async function c(e, t) {
                let {
                    entity_type: n
                } = e;
                switch (n) {
                    case o.GuildScheduledEventEntityTypes.STAGE_INSTANCE: {
                        let t = u.default.getChannelId(),
                            n = d.default.getChannel(e.channel_id);
                        i(null != n, "could not find channel"), t !== n.id && (await r.connectToStage(n, !0), await r.navigateToStage(n, null, !1)), await (0, s.audienceAckRequestToSpeak)(n, !1, !0);
                        break
                    }
                    case o.GuildScheduledEventEntityTypes.VOICE: {
                        let t = u.default.getChannelId(),
                            n = d.default.getChannel(e.channel_id);
                        i(null != n, "could not find channel"), t !== n.id && a.default.selectVoiceChannel(n.id)
                    }
                }
            }

            function f(e, t) {
                let {
                    entity_type: n
                } = e;
                switch (n) {
                    case o.GuildScheduledEventEntityTypes.STAGE_INSTANCE:
                    case o.GuildScheduledEventEntityTypes.VOICE:
                    case o.GuildScheduledEventEntityTypes.EXTERNAL:
                        null == t || t()
                }
                return Promise.resolve()
            }
        },
        495829: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                preStartEventActions: function() {
                    return E
                },
                setEventAsActive: function() {
                    return h
                }
            }), n("424973"), n("222007"), n("70102");
            var l = n("627445"),
                i = n.n(l),
                a = n("437140"),
                s = n("738983"),
                r = n("233069"),
                d = n("42203"),
                u = n("305961"),
                o = n("322224"),
                c = n("745049"),
                f = n("49111");
            async function C(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                    l = [];
                l.push(...n);
                let i = await a.default.createChannel({
                    guildId: e.id,
                    type: f.ChannelTypes.GUILD_STAGE_VOICE,
                    name: t.substring(0, 100),
                    permissionOverwrites: l
                });
                if (null == i || 201 !== i.status) throw Error("Can't create channel for event");
                return (0, r.createChannelRecordFromServer)(i.body)
            }
            async function E(e, t) {
                let {
                    entity_type: n
                } = e;
                if (n === c.GuildScheduledEventEntityTypes.STAGE_INSTANCE) {
                    let n = await
                    function(e, t) {
                        let {
                            guild_id: n,
                            channel_id: l
                        } = e, i = u.default.getGuild(n);
                        if (null == i) return Promise.resolve(null);
                        let a = d.default.getChannel(l);
                        return null == a ? C(i, e.name, t) : Promise.resolve(a)
                    }(e, t);
                    i(null != n, "could not find or create channel")
                }
            }
            async function h(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        channel_id: n,
                        entity_type: l,
                        name: a,
                        id: r,
                        guild_id: d
                    } = e;
                switch (l) {
                    case c.GuildScheduledEventEntityTypes.STAGE_INSTANCE:
                        i(null != n, "channel_id is required"), await (0, s.startStageInstance)(n, a, c.GuildScheduledEventPrivacyLevel.GUILD_ONLY, t, r);
                        break;
                    case c.GuildScheduledEventEntityTypes.VOICE:
                        i(null != n, "channel_id is required"), await o.default.startEvent(r, d);
                        break;
                    case c.GuildScheduledEventEntityTypes.EXTERNAL:
                        await o.default.startEvent(r, d)
                }
            }
        },
        883310: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var l = n("884691"),
                i = n("448993"),
                a = n("374860"),
                s = n("495829");
            let r = {
                onSuccess: () => {},
                permissionOverwrites: []
            };

            function d() {
                let [e, t] = l.useState(!1), [n, d] = l.useState(null);
                return [async function e(e, n) {
                    let {
                        onSuccess: l = r.onSuccess,
                        permissionOverwrites: u = r.permissionOverwrites
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
                    t(!0);
                    try {
                        await s.preStartEventActions(e, u), await s.setEventAsActive(e, n), await (0, a.navigateToEvent)(e, l), await (0, a.postStartActions)(e, l), t(!1)
                    } catch (n) {
                        let e = new i.APIError(n);
                        d(e), t(!1)
                    }
                    t(!1)
                }, {
                    loading: e,
                    error: n
                }]
            }
        },
        617347: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildEventBodyImageLocation: function() {
                    return i
                },
                default: function() {
                    return P
                }
            });
            var l, i, a = n("37983"),
                s = n("884691"),
                r = n("414456"),
                d = n.n(r),
                u = n("446674"),
                o = n("77078"),
                c = n("812204"),
                f = n("685665"),
                C = n("656038"),
                E = n("419830"),
                h = n("817963"),
                _ = n("957255"),
                g = n("476263"),
                v = n("718550"),
                p = n("398604"),
                S = n("651072"),
                T = n("1339"),
                N = n("613767"),
                A = n("822516"),
                I = n("707916"),
                m = n("255050"),
                y = n("400271"),
                R = n("427554"),
                O = n("644189"),
                x = n("29913"),
                L = n("745049"),
                G = n("49111"),
                M = n("782340"),
                w = n("955614");

            function U(e) {
                let {
                    channel: t,
                    onClick: n
                } = e, {
                    canManageAllEvents: l
                } = (0, h.useManageResourcePermissions)(t), i = (0, u.useStateFromStores)([_.default], () => !t.isGuildVocal() || _.default.can(G.Permissions.CONNECT, t), [t]), r = s.useMemo(() => (0, C.default)(t), [t]), c = (0, E.getChannelIconComponent)(t);
                return (0, a.jsx)(o.Tooltip, {
                    text: M.default.Messages.GUILD_EVENT_CANNOT_CONNECT,
                    shouldShow: !i && null != n,
                    children: e => (0, a.jsxs)(o.Clickable, {
                        ...e,
                        className: d(w.inline, w.channelContainer, {
                            [w.channelContainerEnabled]: i && null != n,
                            [w.channelContainerDisabled]: !i && null != n
                        }),
                        onClick: n,
                        children: [(0, a.jsx)(o.Tooltip, {
                            text: M.default.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                            shouldShow: l && r && i && null != n,
                            children: e => null != c ? (0, a.jsx)(c, {
                                ...e,
                                width: 20,
                                height: 20,
                                className: w.icon
                            }) : null
                        }), (0, a.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            className: w.channelLocation,
                            children: t.name
                        })]
                    })
                })
            }

            function k(e) {
                let {
                    guild: t,
                    channel: n,
                    onJoinClick: l,
                    handleLocationClick: i,
                    location: s,
                    isExternal: r,
                    isHub: u
                } = e;
                if (u) return null == t ? (0, a.jsx)("div", {}) : (0, a.jsxs)("div", {
                    className: w.inline,
                    children: [(0, a.jsx)(g.default, {
                        className: w.guildIcon,
                        size: g.default.Sizes.MINI,
                        active: !0,
                        guild: t
                    }), (0, a.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: null == t ? void 0 : t.name
                    })]
                });
                return null != n ? (0, a.jsx)(U, {
                    channel: n,
                    onClick: l
                }) : (0, a.jsxs)(o.Clickable, {
                    className: w.inline,
                    onClick: i,
                    children: [(0, a.jsx)(v.default, {
                        height: 20,
                        width: 20,
                        className: d(w.channelContainer, w.icon)
                    }), (0, a.jsx)(o.Text, {
                        className: r ? w.externalLocation : w.channelLocation,
                        variant: "text-sm/normal",
                        children: (0, T.guildEventDetailsParser)(s, !0)
                    })]
                })
            }

            function P(e) {
                var t;
                let {
                    className: n,
                    guild: l,
                    channel: i,
                    creator: s,
                    name: r,
                    entityType: C,
                    description: E,
                    imageLocation: h = 0,
                    imageSource: _,
                    isActive: g,
                    isUserLurking: v,
                    isJoined: T = !1,
                    isMember: G = !1,
                    isHub: M = !1,
                    speakers: U,
                    speakerCount: P,
                    rsvped: j,
                    canInvite: D,
                    location: b,
                    truncate: V,
                    onContextMenu: H,
                    onJoinClick: F,
                    onJoinGuildClick: B,
                    onGoToGuildClick: Z,
                    onRsvpClick: Y,
                    onStartClick: q,
                    onInviteClick: z,
                    onEndClick: K,
                    onClick: W,
                    isNew: X,
                    guildEventId: J,
                    eventPreview: Q,
                    recurrenceRule: $,
                    recurrenceId: ee
                } = e, et = (0, N.isChannelPublic)(i, C), en = C === L.GuildScheduledEventEntityTypes.EXTERNAL, {
                    analyticsLocations: el
                } = (0, f.default)(c.default.GUILD_EVENT_CARD), {
                    enabled: ei
                } = S.default.useExperiment({
                    guildId: null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : "",
                    location: el[0]
                }, {
                    autoTrackExposure: !1
                }), ea = (0, u.useStateFromStores)([p.default], () => p.default.getGuildScheduledEvent(J)), es = [];
                if (null != $ && null != ea) {
                    let e = (0, A.getRRule)($);
                    es = (0, A.generateNextRecurrences)(4, e, new Date(ea.scheduled_start_time))
                }
                let er = ei && es.length > 0;
                return (0, a.jsxs)(o.ClickableContainer, {
                    "aria-label": r,
                    onClick: () => null == W ? void 0 : W(ee),
                    onContextMenu: H,
                    className: d(w.card, {
                        [w.joined]: T,
                        [w.lurking]: v
                    }, n),
                    children: [(0, a.jsxs)("div", {
                        className: d(w.padding, {
                            [w.isRecurring]: er
                        }),
                        children: [0 === h && (0, a.jsx)(m.default, {
                            source: _
                        }), (0, a.jsx)(y.default, {
                            creator: s,
                            name: r,
                            description: E,
                            imageSource: 1 === h ? _ : null,
                            truncate: V,
                            guildId: null == l ? void 0 : l.id,
                            isHub: M,
                            isNew: X,
                            guildEventId: J,
                            eventPreview: Q,
                            recurrenceId: ee
                        }), g && null != l && null != U && P > 0 && (0, a.jsx)(x.default, {
                            guild: l,
                            speakers: U,
                            speakerCount: P,
                            className: w.spacing
                        }), (0, a.jsx)("hr", {
                            className: w.divider
                        }), (0, a.jsxs)("div", {
                            className: d(w.inline, w.footer),
                            children: [(0, a.jsx)(k, {
                                guild: l,
                                channel: i,
                                onJoinClick: F,
                                handleLocationClick: en ? e => e.stopPropagation() : void 0,
                                location: b,
                                isExternal: en,
                                isHub: M
                            }), M ? (0, a.jsx)(O.default, {
                                isActive: g,
                                isUserLurking: v,
                                isMember: G,
                                rsvped: j,
                                onRsvpClick: Y,
                                onJoinGuildClick: B,
                                onGoToGuildClick: Z,
                                guildName: null == l ? void 0 : l.name,
                                canInvite: D,
                                isChannelPublic: et,
                                onInviteClick: z
                            }) : (0, a.jsx)(I.default, {
                                entityType: C,
                                isJoined: T,
                                isActive: g,
                                isUserLurking: v,
                                rsvped: j,
                                canInvite: D,
                                isChannelPublic: et,
                                onContextMenu: H,
                                onJoinClick: F,
                                onRsvpClick: Y,
                                onStartClick: q,
                                onInviteClick: z,
                                onEndClick: K
                            })]
                        }), er && (0, a.jsx)("hr", {
                            className: w.divider
                        })]
                    }), er && (0, a.jsx)(R.default, {
                        guildId: null == l ? void 0 : l.id,
                        recurrenceRule: $,
                        guildEventId: J,
                        onRecurrenceClick: W
                    })]
                })
            }(l = i || (i = {}))[l.BANNER = 0] = "BANNER", l[l.THUMBNAIL = 1] = "THUMBNAIL"
        },
        29913: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                a = n.n(i),
                s = n("77078"),
                r = n("849467"),
                d = n("782340"),
                u = n("130221");

            function o(e) {
                let {
                    guild: t,
                    speakers: n,
                    speakerCount: i,
                    className: o
                } = e, c = n.slice(0, 5), f = c.map(e => {
                    var n, i;
                    return (0, l.jsxs)("div", {
                        className: u.speakerContainer,
                        children: [(0, l.jsx)(s.Avatar, {
                            src: null == e ? void 0 : null === (n = e.user) || void 0 === n ? void 0 : n.getAvatarURL(t.id, 20),
                            size: s.AvatarSizes.SIZE_20,
                            className: u.avatar,
                            "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
                        }), (0, l.jsx)("div", {
                            className: u.textInGridContainer,
                            children: (0, l.jsx)(s.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                className: u.textInGrid,
                                children: null == e ? void 0 : e.userNick
                            })
                        })]
                    }, null == e ? void 0 : null === (i = e.user) || void 0 === i ? void 0 : i.id)
                }), C = i - c.length;
                return (0, l.jsxs)("div", {
                    className: a(u.grid, o),
                    children: [f, C > 0 && (0, l.jsxs)("div", {
                        className: u.speakerContainer,
                        children: [(0, l.jsx)("div", {
                            className: u.iconMicrophone,
                            children: (0, l.jsx)(r.default, {
                                height: 12
                            })
                        }), (0, l.jsx)(s.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: u.textInGrid,
                            children: d.default.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({
                                count: C
                            })
                        })]
                    })]
                })
            }
        },
        298843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                a = n("414456"),
                s = n.n(a),
                r = n("446674"),
                d = n("77078"),
                u = n("267567"),
                o = n("817963"),
                c = n("534471"),
                f = n("42203"),
                C = n("305961"),
                E = n("476765"),
                h = n("794352"),
                _ = n("883310"),
                g = n("93550"),
                v = n("617347"),
                p = n("745049"),
                S = n("782340"),
                T = n("823020");

            function N(e) {
                var t;
                let {
                    transitionState: n,
                    event: a,
                    onSuccess: N,
                    onClose: A
                } = e, I = (0, E.useUID)(), {
                    guild_id: m,
                    privacy_level: y
                } = a, R = (0, r.useStateFromStores)([f.default], () => f.default.getChannel(a.channel_id), [a]), O = (0, r.useStateFromStores)([C.default], () => C.default.getGuild(m), [m]), {
                    canManageGuildEvent: x
                } = (0, o.useManageResourcePermissions)(null != R ? R : O), L = x(a), G = (0, r.useStateFromStores)([u.default], () => u.default.isLurking(m), [m]), M = a.entity_type === p.GuildScheduledEventEntityTypes.STAGE_INSTANCE, [w, U] = i.useState(M), [k, {
                    loading: P,
                    error: j
                }] = (0, _.default)();
                if (!L) return null;
                let D = y === p.GuildScheduledEventPrivacyLevel.PUBLIC ? S.default.Messages.STAGE_INSTANCE_PRIVACY_TYPE_PUBLIC_LABEL : S.default.Messages.STAGE_INSTANCE_PRIVACY_TYPE_PRIVATE_LABEL,
                    b = () => {
                        null == N || N(), A(), (0, c.setIsOnStartStageScreen)(!1)
                    },
                    V = async () => {
                        await k(a, w, {
                            onSuccess: b
                        })
                    };
                return (0, l.jsx)(d.ModalRoot, {
                    transitionState: n,
                    "aria-labelledby": I,
                    children: (0, l.jsxs)(d.ModalContent, {
                        className: T.content,
                        children: [(0, l.jsx)("div", {
                            className: T.previewCard,
                            children: (0, l.jsx)(v.default, {
                                guild: O,
                                channel: R,
                                name: a.name,
                                description: null !== (t = a.description) && void 0 !== t ? t : void 0,
                                imageSource: (0, g.default)(a),
                                isActive: !1,
                                isUserLurking: G,
                                speakers: [],
                                speakerCount: 0,
                                rsvped: !0,
                                guildEventId: a.id
                            })
                        }), (0, l.jsx)(d.Text, {
                            color: "header-secondary",
                            className: T.privacyLevel,
                            variant: "text-sm/normal",
                            children: S.default.Messages.START_EVENT_CONFIRMATION.format({
                                privacyLevel: D,
                                privacyLevelHook: (e, t) => y !== p.GuildScheduledEventPrivacyLevel.PUBLIC ? null : (0, l.jsxs)("div", {
                                    className: T.privacyLevel,
                                    children: [(0, l.jsx)(h.default, {
                                        width: 16,
                                        height: 16,
                                        className: T.publicIcon
                                    }), (0, l.jsx)(d.Text, {
                                        variant: "text-sm/normal",
                                        children: e
                                    })]
                                }, t)
                            })
                        }), (0, l.jsx)(d.Heading, {
                            variant: "heading-xl/semibold",
                            className: T.header,
                            children: a.name
                        }), M && (0, l.jsx)(d.Checkbox, {
                            className: T.verticalSpacing,
                            type: d.Checkbox.Types.INVERTED,
                            value: w,
                            onChange: e => {
                                let {
                                    currentTarget: t
                                } = e;
                                return U(t.checked)
                            },
                            children: (0, l.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                children: S.default.Messages.GUILD_NOTIFY_MEMBERS_DESKTOP
                            })
                        }), (0, l.jsxs)("div", {
                            className: s(T.inline, T.buttons, T.verticalSpacing),
                            children: [(0, l.jsx)(d.Button, {
                                color: d.Button.Colors.PRIMARY,
                                onClick: () => {
                                    A()
                                },
                                className: s(T.button, T.spacing),
                                children: S.default.Messages.STAGE_BLOCKED_USERS_CANCEL
                            }), (0, l.jsx)(d.Button, {
                                color: d.Button.Colors.GREEN,
                                onClick: V,
                                submitting: P,
                                className: T.button,
                                children: S.default.Messages.START_EVENT
                            })]
                        }), null != j && null != j.getAnyErrorMessage() ? (0, l.jsx)(d.Text, {
                            color: "text-danger",
                            variant: "text-sm/normal",
                            className: T.errorMessage,
                            children: j.getAnyErrorMessage()
                        }) : null]
                    })
                })
            }
        },
        244480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                toggleRequestToSpeak: function() {
                    return v
                },
                inviteUserToStage: function() {
                    return p
                },
                audienceAckRequestToSpeak: function() {
                    return S
                },
                moveSelfToAudience: function() {
                    return T
                },
                setUserSuppress: function() {
                    return N
                },
                moveUserToAudience: function() {
                    return A
                },
                setEveryoneRolePermissionAllowed: function() {
                    return I
                },
                startStage: function() {
                    return m
                },
                editStage: function() {
                    return y
                },
                endStage: function() {
                    return R
                }
            });
            var l = n("627445"),
                i = n.n(l),
                a = n("316693"),
                s = n("872717"),
                r = n("450911");
            n("851387");
            var d = n("798609"),
                u = n("716241"),
                o = n("18494"),
                c = n("800762"),
                f = n("991170"),
                C = n("716214"),
                E = n("230324"),
                h = n("738983"),
                _ = n("808422"),
                g = n("49111");

            function v(e, t) {
                let n = e.getGuildId();
                return i(null != n, "This channel cannot be guildless."), t && (0, u.trackWithMetadata)(g.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
                    ...(0, E.getStageChannelMetadata)(e)
                }), s.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(n),
                    body: {
                        request_to_speak_timestamp: t ? new Date().toISOString() : null,
                        channel_id: e.id
                    }
                })
            }

            function p(e, t) {
                let n = e.getGuildId();
                return i(null != n, "This channel cannot be guildless."), s.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(n, t),
                    body: {
                        suppress: !1,
                        request_to_speak_timestamp: new Date().toISOString(),
                        channel_id: e.id
                    }
                })
            }

            function S(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = null == e ? void 0 : e.getGuildId();
                i(null != l, "This channel cannot be guildless.");
                let a = c.default.getVoiceStateForChannel(e.id),
                    r = (0, _.getAudienceRequestToSpeakState)(a);
                return r === _.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, u.trackWithMetadata)(g.AnalyticEvents.PROMOTED_TO_SPEAKER, {
                    ...(0, E.getStageChannelMetadata)(e)
                }), s.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(l),
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

            function T(e) {
                let t = null == e ? void 0 : e.getGuildId();
                return i(null != t, "This channel cannot be guildless."), s.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(t),
                    body: {
                        suppress: !0,
                        channel_id: e.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function N(e, t, n) {
                let l = e.getGuildId();
                return i(null != l, "This channel cannot be guildless."), s.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(l, t),
                    body: {
                        suppress: n,
                        channel_id: e.id
                    }
                })
            }

            function A(e, t) {
                if (null == t || null == e) return;
                let n = t.getGuildId();
                return i(null != n, "This channel cannot be guildless."), N(t, e.id, !0), s.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(n, e.id),
                    body: {
                        suppress: !0,
                        channel_id: t.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function I(e, t, n) {
                let l = e.getGuildId();
                i(null != l, "Channel cannot be guildless");
                let s = e.permissionOverwrites[l],
                    u = {
                        id: l,
                        type: d.PermissionOverwriteType.ROLE,
                        allow: f.default.NONE,
                        deny: f.default.NONE,
                        ...s
                    };
                n ? (u.allow = a.default.add(u.allow, t), u.deny = a.default.remove(u.deny, t)) : (u.allow = a.default.remove(u.allow, t), u.deny = a.default.add(u.deny, t)), r.default.updatePermissionOverwrite(e.id, u)
            }
            async function m(e, t, n, l) {
                if ("" === t) return;
                let i = o.default.getVoiceChannelId() === e.id;
                !i && (0, C.connectToStage)(e);
                let a = await (0, h.startStageInstance)(e.id, t, n, l);
                return S(e, !1, !0), a
            }
            async function y(e, t, n) {
                if ("" === t) return;
                let l = await (0, h.updateStageInstance)(e.id, t, n);
                return l
            }
            async function R(e) {
                await (0, h.endStageInstance)(e.id)
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
                    return C
                }
            }), n("808653"), n("222007"), n("917351");
            var l = n("945956"),
                i = n("387111"),
                a = n("991170"),
                s = n("834052"),
                r = n("837979"),
                d = n("49111"),
                u = n("606762"),
                o = n("782340");

            function c(e, t, n, l) {
                let a = t[0],
                    s = i.default.getName(e, n, a),
                    r = null != l ? l : t.length;
                return 1 === r && null != a ? s : null == a ? o.default.Messages.SPEAKING_COUNT.format({
                    count: r
                }) : o.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                    name: s,
                    count: r - 1
                })
            }

            function f(e, t) {
                switch (e) {
                    case u.RowType.OWNER:
                        return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
                    case u.RowType.ADMINISTRATOR:
                        return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
                    case u.RowType.MEMBER:
                    case u.RowType.ROLE:
                        return t ? o.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : o.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
                    case u.RowType.EMPTY_STATE:
                }
                return null
            }

            function C(e) {
                let t = s.default.getStageInstanceByChannel(e.id);
                return {
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    topic: null == t ? void 0 : t.topic,
                    media_session_id: l.default.getMediaSessionId(),
                    request_to_speak_state: a.default.canEveryoneRole(d.Permissions.REQUEST_TO_SPEAK, e) ? r.RequestToSpeakPermissionStates.EVERYONE : r.RequestToSpeakPermissionStates.NO_ONE,
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
                    return s
                },
                endStageInstance: function() {
                    return r
                }
            });
            var l = n("872717"),
                i = n("49111");
            async function a(e, t, n, a, s) {
                let r = await l.default.post({
                    url: i.Endpoints.STAGE_INSTANCES,
                    body: {
                        channel_id: e,
                        topic: t,
                        privacy_level: n,
                        guild_scheduled_event_id: s,
                        send_start_notification: a
                    }
                });
                return r.body
            }
            async function s(e, t, n) {
                let a = await l.default.patch({
                    url: i.Endpoints.STAGE_INSTANCE(e),
                    body: {
                        topic: t,
                        privacy_level: n
                    }
                });
                return a.body
            }

            function r(e) {
                return l.default.delete(i.Endpoints.STAGE_INSTANCE(e))
            }
        },
        679428: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("424973"), n("222007");
            var l = n("917351"),
                i = n.n(l),
                a = n("872717"),
                s = n("689988"),
                r = n("605250"),
                d = n("870691"),
                u = n("42203"),
                o = n("49111");
            let c = {},
                f = new r.default("UserGuildSettingsManager"),
                C = 0;

            function E() {
                c = {
                    ...d.default.getCollapsedCategories()
                }
            }

            function h() {
                !__OVERLAY__ && (clearTimeout(C), C = setTimeout(() => _(), 15e3))
            }
            async function _(e, t) {
                await g(null != t ? {
                    [null != e ? e : o.ME]: t
                } : {})
            }
            async function g(e) {
                clearTimeout(C);
                let t = 0 !== Object.keys(e).length,
                    n = d.default.getCollapsedCategories(),
                    l = function() {
                        let e = {},
                            t = d.default.getCollapsedCategories();
                        for (let n in t) t[n] !== c[n] && (e[n] = !0);
                        for (let n in c) t[n] !== c[n] && (e[n] = !0);
                        return e
                    }();
                for (let i in l) {
                    let l = u.default.getChannel(i);
                    null != l && null != l.guild_id && (!(l.guild_id in e) && (e[l.guild_id] = {}), null == e[l.guild_id].channel_overrides && (e[l.guild_id].channel_overrides = {}), e[l.guild_id].channel_overrides[l.id] = {
                        ...e[l.guild_id].channel_overrides[l.id],
                        collapsed: l.id in n
                    }, t = !0)
                }
                if (!t) return;
                c = {
                    ...n
                };
                let s = i.map(e, (e, t) => ({
                    guildId: t,
                    updates: e,
                    attempts: 0
                }));
                for (; s.length > 0;) {
                    let e = s.shift();
                    if (e.guildId !== o.FAVORITES) try {
                        await a.default.patch({
                            url: o.Endpoints.USER_GUILD_SETTINGS(e.guildId),
                            body: e.updates
                        }), await v(1e3)
                    } catch (t) {
                        f.error(t), e.attempts += 1, e.attempts < 3 && s.push(e), await v(5e3)
                    }
                }
            }

            function v(e) {
                return new Promise(t => setTimeout(t, e + Math.ceil(e * Math.random())))
            }

            function p() {
                c = {
                    ...d.default.getCollapsedCategories()
                }
            }
            class S extends s.default {
                constructor(...e) {
                    super(...e), this.actions = {
                        CATEGORY_COLLAPSE: h,
                        CATEGORY_EXPAND: h,
                        CATEGORY_COLLAPSE_ALL: h,
                        CATEGORY_EXPAND_ALL: h,
                        POST_CONNECTION_OPEN: E,
                        USER_GUILD_SETTINGS_FULL_UPDATE: p
                    }, this.saveUserGuildSettings = _, this.saveUserGuildSettingsBulk = g
                }
            }
            var T = new S
        },
        870691: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var l = n("446674"),
                i = n("913144"),
                a = n("449008"),
                s = n("42203"),
                r = n("341542"),
                d = n("923959"),
                u = n("49111");
            let o = {},
                c = 0;

            function f() {
                c += 1
            }

            function C(e) {
                if (null == o[e]) return !1;
                delete o[e]
            }
            class E extends l.default.PersistedStore {
                initialize(e) {
                    this.waitFor(s.default, r.default), this.removeChangeListener(f), this.addChangeListener(f), o = null != e ? e : {}
                }
                getState() {
                    return o
                }
                isCollapsed(e) {
                    return null != e && "null" !== e && !!o[e] && o[e]
                }
                getCollapsedCategories() {
                    return o
                }
                get version() {
                    return c
                }
            }
            E.displayName = "CategoryCollapseStore", E.persistKey = "collapsedCategories";
            var h = new E(i.default, {
                CONNECTION_OPEN: function(e) {
                    for (let t of (!e.userGuildSettings.partial && (o = {}), e.userGuildSettings.entries))
                        if (null != t.channel_overrides)
                            for (let e of t.channel_overrides) e.collapsed ? o[e.channel_id] = !0 : delete o[e.channel_id]
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    let {
                        userGuildSettings: t
                    } = e, n = new Set(t.map(e => e.guild_id).filter(a.isNotNullish));
                    for (let e in o) {
                        let t = s.default.getChannel(e);
                        null != t && null != t.guild_id && n.has(t.guild_id) && delete o[t.id]
                    }
                    for (let e of t)
                        for (let t of e.channel_overrides) t.collapsed && (o[t.channel_id] = !0)
                },
                CATEGORY_COLLAPSE: function(e) {
                    let {
                        id: t
                    } = e;
                    if (o[t]) return !1;
                    o[t] = !0
                },
                CATEGORY_EXPAND: function(e) {
                    let {
                        id: t
                    } = e;
                    return C(t)
                },
                CATEGORY_COLLAPSE_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    d.default.getChannels(t)[u.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        "null" !== t.id && (o[t.id] = !0)
                    })
                },
                CATEGORY_EXPAND_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    d.default.getChannels(t)[u.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        delete o[t.id]
                    })
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: {
                            id: t
                        }
                    } = e;
                    return C(t)
                }
            })
        },
        849467: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("696675"),
                s = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...r
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, s.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z",
                            className: a,
                            fill: i
                        }), (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z",
                            className: a,
                            fill: i
                        })]
                    })
                }, a.MicrophoneIcon, void 0, {
                    size: 24
                })
        },
        433487: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("304983"),
                s = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: i,
                            className: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"
                        })
                    })
                }, a.MoreHorizontalIcon, void 0, {
                    size: 24
                })
        },
        155207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("811513"),
                s = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...r
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, s.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            className: a,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, l.jsx)("path", {
                            className: a,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, l.jsx)("path", {
                            className: a,
                            fill: i,
                            d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                        }), (0, l.jsx)("path", {
                            className: a,
                            fill: i,
                            d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                        })]
                    })
                }, a.GroupIcon, void 0, {
                    size: 24
                })
        },
        794352: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("521590"),
                s = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        className: a,
                        foreground: r,
                        ...d
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(d),
                        className: a,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: r,
                            fill: i,
                            d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z"
                        })
                    })
                }, a.GlobeEarthIcon, void 0, {
                    size: 24
                })
        }
    }
]);