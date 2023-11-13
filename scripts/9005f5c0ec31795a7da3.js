(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["34435"], {
        437140: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("70102");
            var i = n("759843"),
                l = n("627929"),
                a = n("913144"),
                s = n("81732"),
                d = n("282109"),
                u = n("840707"),
                r = n("519705"),
                o = n("49111"),
                c = n("397336"),
                f = {
                    createChannel(e) {
                        let {
                            guildId: t,
                            type: n,
                            name: f,
                            permissionOverwrites: E = [],
                            bitrate: _,
                            userLimit: h,
                            parentId: p,
                            skuId: g,
                            branchId: S
                        } = e;
                        a.default.dispatch({
                            type: "CREATE_CHANNEL_MODAL_SUBMIT"
                        });
                        let C = {
                            type: n,
                            name: f,
                            permission_overwrites: E
                        };
                        if (null != _ && _ !== o.BITRATE_DEFAULT && (C.bitrate = _), null != h && h > 0 && (C.user_limit = h), null != p && (C.parent_id = p), n === o.ChannelTypes.GUILD_STORE) {
                            if (null == g) throw Error("Unexpected missing SKU");
                            C.sku_id = g, C.branch_id = S
                        }
                        return u.default.post({
                            url: o.Endpoints.GUILD_CHANNELS(t),
                            body: C,
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: i.NetworkActionNames.CHANNEL_CREATE,
                                properties: e => {
                                    var t, n;
                                    return (0, l.exact)({
                                        is_private: E.length > 0,
                                        channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                                        channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                                    })
                                }
                            }
                        }).then(e => (d.default.isOptInEnabled(t) && r.default.updateChannelOverrideSettings(t, e.body.id, {
                            flags: c.ChannelNotificationSettingsFlags.OPT_IN_ENABLED
                        }), s.default.checkGuildTemplateDirty(t), e), e => {
                            throw a.default.dispatch({
                                type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                                errors: e.body
                            }), e
                        })
                    },
                    createRoleSubscriptionTemplateChannel: (e, t, n, a) => u.default.post({
                        url: o.Endpoints.GUILD_CHANNELS(e),
                        body: {
                            name: t,
                            type: n,
                            topic: a
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: i.NetworkActionNames.CHANNEL_CREATE,
                            properties: e => {
                                var t, n;
                                return (0, l.exact)({
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
                    return f
                }
            }), n("222007");
            var i = n("866227"),
                l = n.n(i),
                a = n("819855"),
                s = n("913144"),
                d = n("679428"),
                u = n("282109"),
                r = n("34676"),
                o = n("397336"),
                c = n("782340"),
                f = {
                    open(e) {
                        s.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
                            guildId: e
                        })
                    },
                    close() {
                        s.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                        })
                    },
                    updateGuildNotificationSettings(e, t, n) {
                        let i = (0, r.getCurrentGuildSettings)(e);
                        d.default.saveUserGuildSettings(e, t), s.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, r.trackGuildNotificationSettingsUpdate)(e, t, i, n)
                    },
                    updateGuildAndChannelNotificationSettings(e, t, n) {
                        let i = Object.keys(t.channel_overrides),
                            l = (0, r.getCurrentGuildSettings)(e),
                            a = (0, r.getManyCurrentChannelSettings)(e, i);
                        d.default.saveUserGuildSettings(e, t), s.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, r.trackGuildNotificationSettingsUpdate)(e, t, l, n), Object.keys(t.channel_overrides).forEach(i => {
                            let l = a.get(i);
                            (0, r.trackChannelNotificationSettingsUpdate)(e, i, t.channel_overrides[i], l, n)
                        })
                    },
                    updateGuildNotificationSettingsBulk(e, t) {
                        let n = Object.keys(e),
                            i = (0, r.getManyCurrentGuildSettings)(n);
                        d.default.saveUserGuildSettingsBulk(e), Object.entries(e).forEach(e => {
                            let [n, l] = e, a = i.get(n);
                            s.default.dispatch({
                                type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                                guildId: n,
                                settings: l
                            }), (0, r.trackGuildNotificationSettingsUpdate)(n, l, a, t)
                        })
                    },
                    updateChannelOverrideSettings(e, t, n, i) {
                        let l = (0, r.getCurrentChannelSettings)(e, t);
                        d.default.saveUserGuildSettings(e, {
                            channel_overrides: {
                                [t]: n
                            }
                        }), s.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                            guildId: e,
                            channelId: t,
                            settings: n
                        }), a.AccessibilityAnnouncer.announce(c.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED), (0, r.trackChannelNotificationSettingsUpdate)(e, t, n, l, i)
                    },
                    updateChannelOverrideSettingsBulk(e, t, n) {
                        let i = Object.keys(t),
                            l = (0, r.getManyCurrentChannelSettings)(e, i);
                        d.default.saveUserGuildSettings(e, {
                            channel_overrides: t
                        }), s.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                            guildId: e,
                            overrides: t
                        }), Object.keys(t).forEach(i => (0, r.trackChannelNotificationSettingsUpdate)(e, i, t[i], l.get(i), n))
                    },
                    setForumThreadsCreated(e, t) {
                        let n = t ? o.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON : o.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
                            i = t ? o.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF : o.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
                            l = u.default.getChannelFlags(e);
                        this.updateChannelOverrideSettings(e.guild_id, e.id, {
                            flags: l & ~i | n
                        })
                    },
                    handleCheckboxChange: function(e, t, n, i) {
                        s.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: i.id,
                            profile: e,
                            updatedSettings: {
                                [t]: n
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleSelectChange: function(e, t, n, i) {
                        s.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: i.id,
                            profile: e,
                            updatedSettings: {
                                [t]: n
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleMuteConfigChange: function(e, t, n) {
                        let i = t > 0 ? l().add(t, "second").toISOString() : null;
                        s.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: n.id,
                            profile: "MUTED",
                            updatedSettings: {
                                [e]: {
                                    selected_time_window: t,
                                    end_time: i
                                }
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleHighlightsChange: function(e, t, n) {
                        s.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: n.id,
                            profile: e,
                            updatedSettings: {
                                notifyHighlights: t
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleProfileChange: function(e, t) {
                        s.default.dispatch({
                            type: "GUILD_SET_NOTIFICATION_PROFILE",
                            guildId: t.id,
                            profile: e.value,
                            handleUpdate: this.updateGuildNotificationSettings
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
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                a = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: d = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M14.5 8a3 3 0 1 0-2.701-4.306c-.202.415.057.87.443 1.124A5.006 5.006 0 0 1 14.379 7.9c.013.058.062.1.121.1ZM18.437 17.271c.154.425.544.729.995.729H20.5a1.5 1.5 0 0 0 1.5-1.5 7.502 7.502 0 0 0-6.502-7.434c-.548-.073-.988.386-1.097.927-.06.301-.148.592-.26.871-.233.579-.054 1.291.472 1.628a9.529 9.529 0 0 1 3.824 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0 1.5 1.5 0 0 1-1.5 1.5.202.202 0 0 1-.196-.159 12.379 12.379 0 0 0-.884-2.543c-.108-.23-.42-.149-.42.105V21.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.097c0-.254-.312-.334-.42-.105-.318.673-.67 1.579-.884 2.543A.202.202 0 0 1 3.5 22 1.5 1.5 0 0 1 2 20.5Z",
                        className: d
                    })
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
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                a = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: d = "",
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
                        d: "M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Z",
                        className: d
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M6 10a1 1 0 0 0-2 0 8.001 8.001 0 0 0 7 7.938V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.062A8.001 8.001 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z",
                        className: d
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
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                a = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: d = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
                        clipRule: "evenodd",
                        className: d
                    })
                })
            }
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
            var i = n("627445"),
                l = n.n(i),
                a = n("987317"),
                s = n("244480"),
                d = n("716214"),
                u = n("42203"),
                r = n("945956"),
                o = n("745049");
            async function c(e, t) {
                let {
                    entity_type: n
                } = e;
                switch (n) {
                    case o.GuildScheduledEventEntityTypes.STAGE_INSTANCE: {
                        let t = r.default.getChannelId(),
                            n = u.default.getChannel(e.channel_id);
                        l(null != n, "could not find channel"), t !== n.id && (await d.connectToStage(n, !0), await d.navigateToStage(n, null, !1)), await (0, s.audienceAckRequestToSpeak)(n, !1, !0);
                        break
                    }
                    case o.GuildScheduledEventEntityTypes.VOICE: {
                        let t = r.default.getChannelId(),
                            n = u.default.getChannel(e.channel_id);
                        l(null != n, "could not find channel"), t !== n.id && a.default.selectVoiceChannel(n.id)
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
                    return _
                },
                setEventAsActive: function() {
                    return h
                }
            }), n("424973"), n("222007"), n("70102");
            var i = n("627445"),
                l = n.n(i),
                a = n("437140"),
                s = n("738983"),
                d = n("233069"),
                u = n("42203"),
                r = n("305961"),
                o = n("322224"),
                c = n("745049"),
                f = n("49111");
            async function E(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                    i = [];
                i.push(...n);
                let l = await a.default.createChannel({
                    guildId: e.id,
                    type: f.ChannelTypes.GUILD_STAGE_VOICE,
                    name: t.substring(0, 100),
                    permissionOverwrites: i
                });
                if (null == l || 201 !== l.status) throw Error("Can't create channel for event");
                return (0, d.createChannelRecordFromServer)(l.body)
            }
            async function _(e, t) {
                let {
                    entity_type: n
                } = e;
                if (n === c.GuildScheduledEventEntityTypes.STAGE_INSTANCE) {
                    let n = await
                    function(e, t) {
                        let {
                            guild_id: n,
                            channel_id: i
                        } = e, l = r.default.getGuild(n);
                        if (null == l) return Promise.resolve(null);
                        let a = u.default.getChannel(i);
                        return null == a ? E(l, e.name, t) : Promise.resolve(a)
                    }(e, t);
                    l(null != n, "could not find or create channel")
                }
            }
            async function h(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        channel_id: n,
                        entity_type: i,
                        name: a,
                        id: d,
                        guild_id: u
                    } = e;
                switch (i) {
                    case c.GuildScheduledEventEntityTypes.STAGE_INSTANCE:
                        l(null != n, "channel_id is required"), await (0, s.startStageInstance)(n, a, c.GuildScheduledEventPrivacyLevel.GUILD_ONLY, t, d);
                        break;
                    case c.GuildScheduledEventEntityTypes.VOICE:
                        l(null != n, "channel_id is required"), await o.default.startEvent(d, u);
                        break;
                    case c.GuildScheduledEventEntityTypes.EXTERNAL:
                        await o.default.startEvent(d, u)
                }
            }
        },
        883310: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("222007");
            var i = n("884691"),
                l = n("448993"),
                a = n("374860"),
                s = n("495829");
            let d = {
                onSuccess: () => {},
                permissionOverwrites: []
            };

            function u() {
                let [e, t] = i.useState(!1), [n, u] = i.useState(null);
                return [async function e(e, n) {
                    let {
                        onSuccess: i = d.onSuccess,
                        permissionOverwrites: r = d.permissionOverwrites
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d;
                    t(!0);
                    try {
                        await s.preStartEventActions(e, r), await s.setEventAsActive(e, n), await (0, a.navigateToEvent)(e, i), await (0, a.postStartActions)(e, i), t(!1)
                    } catch (n) {
                        let e = new l.APIError(n);
                        u(e), t(!1)
                    }
                    t(!1)
                }, {
                    loading: e,
                    error: n
                }]
            }
        },
        298843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007");
            var i = n("37983"),
                l = n("884691"),
                a = n("414456"),
                s = n.n(a),
                d = n("446674"),
                u = n("77078"),
                r = n("267567"),
                o = n("817963"),
                c = n("534471"),
                f = n("42203"),
                E = n("305961"),
                _ = n("476765"),
                h = n("794352"),
                p = n("883310"),
                g = n("93550"),
                S = n("617347"),
                C = n("745049"),
                T = n("782340"),
                v = n("823020");

            function N(e) {
                var t;
                let {
                    transitionState: n,
                    event: a,
                    onSuccess: N,
                    onClose: A
                } = e, I = (0, _.useUID)(), {
                    guild_id: y,
                    privacy_level: O
                } = a, R = (0, d.useStateFromStores)([f.default], () => f.default.getChannel(a.channel_id), [a]), m = (0, d.useStateFromStores)([E.default], () => E.default.getGuild(y), [y]), {
                    canManageGuildEvent: G
                } = (0, o.useManageResourcePermissions)(null != R ? R : m), L = G(a), M = (0, d.useStateFromStores)([r.default], () => r.default.isLurking(y), [y]), U = a.entity_type === C.GuildScheduledEventEntityTypes.STAGE_INSTANCE, [w, D] = l.useState(U), [P, {
                    loading: x,
                    error: b
                }] = (0, p.default)();
                if (!L) return null;
                let k = O === C.GuildScheduledEventPrivacyLevel.PUBLIC ? T.default.Messages.STAGE_INSTANCE_PRIVACY_TYPE_PUBLIC_LABEL : T.default.Messages.STAGE_INSTANCE_PRIVACY_TYPE_PRIVATE_LABEL,
                    V = () => {
                        null == N || N(), A(), (0, c.setIsOnStartStageScreen)(!1)
                    },
                    H = async () => {
                        await P(a, w, {
                            onSuccess: V
                        })
                    };
                return (0, i.jsx)(u.ModalRoot, {
                    transitionState: n,
                    "aria-labelledby": I,
                    children: (0, i.jsxs)(u.ModalContent, {
                        className: v.content,
                        children: [(0, i.jsx)("div", {
                            className: v.previewCard,
                            children: (0, i.jsx)(S.default, {
                                guild: m,
                                channel: R,
                                name: a.name,
                                description: null !== (t = a.description) && void 0 !== t ? t : void 0,
                                imageSource: (0, g.default)(a),
                                isActive: !1,
                                isUserLurking: M,
                                speakers: [],
                                speakerCount: 0,
                                rsvped: !0,
                                guildEventId: a.id
                            })
                        }), (0, i.jsx)(u.Text, {
                            color: "header-secondary",
                            className: v.privacyLevel,
                            variant: "text-sm/normal",
                            children: T.default.Messages.START_EVENT_CONFIRMATION.format({
                                privacyLevel: k,
                                privacyLevelHook: (e, t) => O !== C.GuildScheduledEventPrivacyLevel.PUBLIC ? null : (0, i.jsxs)("div", {
                                    className: v.privacyLevel,
                                    children: [(0, i.jsx)(h.default, {
                                        width: 16,
                                        height: 16,
                                        className: v.publicIcon
                                    }), (0, i.jsx)(u.Text, {
                                        variant: "text-sm/normal",
                                        children: e
                                    })]
                                }, t)
                            })
                        }), (0, i.jsx)(u.Heading, {
                            variant: "heading-xl/semibold",
                            className: v.header,
                            children: a.name
                        }), U && (0, i.jsx)(u.Checkbox, {
                            className: v.verticalSpacing,
                            type: u.Checkbox.Types.INVERTED,
                            value: w,
                            onChange: e => {
                                let {
                                    currentTarget: t
                                } = e;
                                return D(t.checked)
                            },
                            children: (0, i.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                children: T.default.Messages.GUILD_NOTIFY_MEMBERS_DESKTOP
                            })
                        }), (0, i.jsxs)("div", {
                            className: s(v.inline, v.buttons, v.verticalSpacing),
                            children: [(0, i.jsx)(u.Button, {
                                color: u.Button.Colors.PRIMARY,
                                onClick: () => {
                                    A()
                                },
                                className: s(v.button, v.spacing),
                                children: T.default.Messages.STAGE_BLOCKED_USERS_CANCEL
                            }), (0, i.jsx)(u.Button, {
                                color: u.Button.Colors.GREEN,
                                onClick: H,
                                submitting: x,
                                className: v.button,
                                children: T.default.Messages.START_EVENT
                            })]
                        }), null != b && null != b.getAnyErrorMessage() ? (0, i.jsx)(u.Text, {
                            color: "text-danger",
                            variant: "text-sm/normal",
                            className: v.errorMessage,
                            children: b.getAnyErrorMessage()
                        }) : null]
                    })
                })
            }
        },
        244480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                toggleRequestToSpeak: function() {
                    return S
                },
                inviteUserToStage: function() {
                    return C
                },
                audienceAckRequestToSpeak: function() {
                    return T
                },
                moveSelfToAudience: function() {
                    return v
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
                    return y
                },
                editStage: function() {
                    return O
                },
                endStage: function() {
                    return R
                }
            });
            var i = n("627445"),
                l = n.n(i),
                a = n("316693"),
                s = n("872717"),
                d = n("450911");
            n("851387");
            var u = n("798609"),
                r = n("716241"),
                o = n("18494"),
                c = n("800762"),
                f = n("991170"),
                E = n("716214"),
                _ = n("230324"),
                h = n("738983"),
                p = n("808422"),
                g = n("49111");

            function S(e, t) {
                let n = e.getGuildId();
                return l(null != n, "This channel cannot be guildless."), t && (0, r.trackWithMetadata)(g.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
                    ...(0, _.getStageChannelMetadata)(e)
                }), s.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(n),
                    body: {
                        request_to_speak_timestamp: t ? new Date().toISOString() : null,
                        channel_id: e.id
                    }
                })
            }

            function C(e, t) {
                let n = e.getGuildId();
                return l(null != n, "This channel cannot be guildless."), s.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(n, t),
                    body: {
                        suppress: !1,
                        request_to_speak_timestamp: new Date().toISOString(),
                        channel_id: e.id
                    }
                })
            }

            function T(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = null == e ? void 0 : e.getGuildId();
                l(null != i, "This channel cannot be guildless.");
                let a = c.default.getVoiceStateForChannel(e.id),
                    d = (0, p.getAudienceRequestToSpeakState)(a);
                return d === p.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, r.trackWithMetadata)(g.AnalyticEvents.PROMOTED_TO_SPEAKER, {
                    ...(0, _.getStageChannelMetadata)(e)
                }), s.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(i),
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

            function v(e) {
                let t = null == e ? void 0 : e.getGuildId();
                return l(null != t, "This channel cannot be guildless."), s.default.patch({
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
                let i = e.getGuildId();
                return l(null != i, "This channel cannot be guildless."), s.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(i, t),
                    body: {
                        suppress: n,
                        channel_id: e.id
                    }
                })
            }

            function A(e, t) {
                if (null == t || null == e) return;
                let n = t.getGuildId();
                return l(null != n, "This channel cannot be guildless."), N(t, e.id, !0), s.default.patch({
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
                let i = e.getGuildId();
                l(null != i, "Channel cannot be guildless");
                let s = e.permissionOverwrites[i],
                    r = {
                        id: i,
                        type: u.PermissionOverwriteType.ROLE,
                        allow: f.default.NONE,
                        deny: f.default.NONE,
                        ...s
                    };
                n ? (r.allow = a.default.add(r.allow, t), r.deny = a.default.remove(r.deny, t)) : (r.allow = a.default.remove(r.allow, t), r.deny = a.default.add(r.deny, t)), d.default.updatePermissionOverwrite(e.id, r)
            }
            async function y(e, t, n, i) {
                if ("" === t) return;
                let l = o.default.getVoiceChannelId() === e.id;
                !l && (0, E.connectToStage)(e);
                let a = await (0, h.startStageInstance)(e.id, t, n, i);
                return T(e, !1, !0), a
            }
            async function O(e, t, n) {
                if ("" === t) return;
                let i = await (0, h.updateStageInstance)(e.id, t, n);
                return i
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
                    return E
                }
            }), n("808653"), n("222007"), n("917351");
            var i = n("945956"),
                l = n("387111"),
                a = n("991170"),
                s = n("834052"),
                d = n("837979"),
                u = n("49111"),
                r = n("606762"),
                o = n("782340");

            function c(e, t, n, i) {
                let a = t[0],
                    s = l.default.getName(e, n, a),
                    d = null != i ? i : t.length;
                return 1 === d && null != a ? s : null == a ? o.default.Messages.SPEAKING_COUNT.format({
                    count: d
                }) : o.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                    name: s,
                    count: d - 1
                })
            }

            function f(e, t) {
                switch (e) {
                    case r.RowType.OWNER:
                        return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
                    case r.RowType.ADMINISTRATOR:
                        return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
                    case r.RowType.MEMBER:
                    case r.RowType.ROLE:
                        return t ? o.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : o.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
                    case r.RowType.EMPTY_STATE:
                }
                return null
            }

            function E(e) {
                let t = s.default.getStageInstanceByChannel(e.id);
                return {
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    topic: null == t ? void 0 : t.topic,
                    media_session_id: i.default.getMediaSessionId(),
                    request_to_speak_state: a.default.canEveryoneRole(u.Permissions.REQUEST_TO_SPEAK, e) ? d.RequestToSpeakPermissionStates.EVERYONE : d.RequestToSpeakPermissionStates.NO_ONE,
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
                    return d
                }
            });
            var i = n("872717"),
                l = n("49111");
            async function a(e, t, n, a, s) {
                let d = await i.default.post({
                    url: l.Endpoints.STAGE_INSTANCES,
                    body: {
                        channel_id: e,
                        topic: t,
                        privacy_level: n,
                        guild_scheduled_event_id: s,
                        send_start_notification: a
                    }
                });
                return d.body
            }
            async function s(e, t, n) {
                let a = await i.default.patch({
                    url: l.Endpoints.STAGE_INSTANCE(e),
                    body: {
                        topic: t,
                        privacy_level: n
                    }
                });
                return a.body
            }

            function d(e) {
                return i.default.delete(l.Endpoints.STAGE_INSTANCE(e))
            }
        },
        679428: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("424973"), n("222007");
            var i = n("917351"),
                l = n.n(i),
                a = n("872717"),
                s = n("689988"),
                d = n("605250"),
                u = n("870691"),
                r = n("42203"),
                o = n("49111");
            let c = {},
                f = new d.default("UserGuildSettingsManager"),
                E = 0;

            function _() {
                c = {
                    ...u.default.getCollapsedCategories()
                }
            }

            function h() {
                !__OVERLAY__ && (clearTimeout(E), E = setTimeout(() => p(), 15e3))
            }
            async function p(e, t) {
                await g(null != t ? {
                    [null != e ? e : o.ME]: t
                } : {})
            }
            async function g(e) {
                clearTimeout(E);
                let t = 0 !== Object.keys(e).length,
                    n = u.default.getCollapsedCategories(),
                    i = function() {
                        let e = {},
                            t = u.default.getCollapsedCategories();
                        for (let n in t) t[n] !== c[n] && (e[n] = !0);
                        for (let n in c) t[n] !== c[n] && (e[n] = !0);
                        return e
                    }();
                for (let l in i) {
                    let i = r.default.getChannel(l);
                    null != i && null != i.guild_id && (!(i.guild_id in e) && (e[i.guild_id] = {}), null == e[i.guild_id].channel_overrides && (e[i.guild_id].channel_overrides = {}), e[i.guild_id].channel_overrides[i.id] = {
                        ...e[i.guild_id].channel_overrides[i.id],
                        collapsed: i.id in n
                    }, t = !0)
                }
                if (!t) return;
                c = {
                    ...n
                };
                let s = l.map(e, (e, t) => ({
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
                        }), await S(1e3)
                    } catch (t) {
                        f.error(t), e.attempts += 1, e.attempts < 3 && s.push(e), await S(5e3)
                    }
                }
            }

            function S(e) {
                return new Promise(t => setTimeout(t, e + Math.ceil(e * Math.random())))
            }

            function C() {
                c = {
                    ...u.default.getCollapsedCategories()
                }
            }
            class T extends s.default {
                constructor(...e) {
                    super(...e), this.actions = {
                        CATEGORY_COLLAPSE: h,
                        CATEGORY_EXPAND: h,
                        CATEGORY_COLLAPSE_ALL: h,
                        CATEGORY_EXPAND_ALL: h,
                        POST_CONNECTION_OPEN: _,
                        USER_GUILD_SETTINGS_FULL_UPDATE: C
                    }, this.saveUserGuildSettings = p, this.saveUserGuildSettingsBulk = g
                }
            }
            var v = new T
        },
        870691: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var i = n("446674"),
                l = n("913144"),
                a = n("449008"),
                s = n("42203"),
                d = n("341542"),
                u = n("923959"),
                r = n("49111");
            let o = {},
                c = 0;

            function f() {
                c += 1
            }

            function E(e) {
                if (null == o[e]) return !1;
                delete o[e]
            }
            class _ extends i.default.PersistedStore {
                initialize(e) {
                    this.waitFor(s.default, d.default), this.removeChangeListener(f), this.addChangeListener(f), o = null != e ? e : {}
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
            _.displayName = "CategoryCollapseStore", _.persistKey = "collapsedCategories";
            var h = new _(l.default, {
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
                    return E(t)
                },
                CATEGORY_COLLAPSE_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    u.default.getChannels(t)[r.ChannelTypes.GUILD_CATEGORY].forEach(e => {
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
                    u.default.getChannels(t)[r.ChannelTypes.GUILD_CATEGORY].forEach(e => {
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
                    return E(t)
                }
            })
        },
        849467: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                a = n("696675"),
                s = n("75196"),
                d = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...d
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, s.default)(d),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z",
                            className: a,
                            fill: l
                        }), (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z",
                            className: a,
                            fill: l
                        })]
                    })
                }, a.MicrophoneIcon)
        },
        433487: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                a = n("304983"),
                s = n("75196"),
                d = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...d
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(d),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: l,
                            className: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"
                        })
                    })
                }, a.MoreHorizontalIcon)
        },
        155207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                a = n("811513"),
                s = n("75196"),
                d = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...d
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, s.default)(d),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, i.jsx)("path", {
                            className: a,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, i.jsx)("path", {
                            className: a,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, i.jsx)("path", {
                            className: a,
                            fill: l,
                            d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                        }), (0, i.jsx)("path", {
                            className: a,
                            fill: l,
                            d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                        })]
                    })
                }, a.GroupIcon)
        },
        794352: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                a = n("521590"),
                s = n("75196"),
                d = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        className: a,
                        foreground: d,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(u),
                        className: a,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: d,
                            fill: l,
                            d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z"
                        })
                    })
                }, a.GlobeEarthIcon)
        }
    }
]);