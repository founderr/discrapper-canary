(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["62210"], {
        234997: function(e, t, n) {
            "use strict";
            e.exports = n.p + "870ce21aeffa60252eb0.svg"
        },
        917798: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MobilePhoneControllerIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...d
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M5 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h1.18c.3 0 .54.26.5.56l-.37 2.94c-.07.6-.01 1.18.16 1.7.11.38-.14.8-.52.8H8a3 3 0 0 1-3-3V4Z",
                        className: u
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M14.02 15c-1.15 0-2.13.86-2.27 2l-.46 3.7a2.05 2.05 0 0 0 4.04.65l.17-.85h3l.17.85a2.05 2.05 0 0 0 4.04-.65l-.46-3.7a2.29 2.29 0 0 0-2.27-2h-5.96Z",
                        className: u
                    })]
                })
            }
        },
        843624: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VOICE_CHANNEL_STATUS_MODAL_KEY: function() {
                    return h
                },
                default: function() {
                    return C
                }
            }), n("222007"), n("781738");
            var i = n("37983"),
                a = n("884691"),
                l = n("65597"),
                s = n("77078"),
                u = n("18054"),
                d = n("207273"),
                r = n("850391"),
                o = n("149022"),
                c = n("681060"),
                f = n("945956"),
                S = n("145131"),
                E = n("599110"),
                _ = n("49111"),
                N = n("782340"),
                g = n("447365");
            let h = "VoiceChannelStatusModal";

            function C(e) {
                let {
                    channel: t,
                    transitionState: n,
                    onClose: C
                } = e, T = (0, l.default)([d.default], () => d.default.getChannelStatus(t)), I = (0, l.default)([f.default], () => f.default.getMediaSessionId()), [O, A] = a.useState(null != T ? T : ""), [L, M] = a.useState(!1), [m, v] = a.useState(null);
                a.useEffect(() => {
                    E.default.track(_.AnalyticEvents.OPEN_MODAL, {
                        type: "Voice Channel Topic Modal",
                        guild_id: t.guild_id
                    })
                }, [t.guild_id]);
                let p = async e => {
                    O === T && C(), null == e || e.preventDefault(), v(null), M(!0);
                    let n = O.length,
                        i = O.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length;
                    await u.default.updateVoiceChannelStatus(t.id, O).then(e => {
                        204 === e.status ? (E.default.track(_.AnalyticEvents.VOICE_CHANNEL_TOPIC_SET, {
                            guild_id: t.guild_id,
                            channel_id: t.id,
                            media_session_id: I,
                            raw_length: n,
                            text_length: i
                        }), C()) : v(e.body.message)
                    }, e => {
                        v(e.body.message)
                    }), M(!1)
                }, [G, U] = a.useState((0, o.toRichValue)(O));
                return (0, i.jsx)("form", {
                    onSubmit: p,
                    className: g.form,
                    children: (0, i.jsxs)(s.ModalRoot, {
                        transitionState: n,
                        size: s.ModalSize.SMALL,
                        children: [(0, i.jsxs)(s.ModalContent, {
                            children: [(0, i.jsxs)(s.ModalHeader, {
                                direction: S.default.Direction.VERTICAL,
                                className: g.modalHeader,
                                separator: !1,
                                children: [(0, i.jsx)(s.ModalCloseButton, {
                                    className: g.closeButton,
                                    onClick: C
                                }), (0, i.jsx)("div", {
                                    className: g.headerImage
                                }), (0, i.jsx)(s.FormTitle, {
                                    tag: "h1",
                                    className: g.title,
                                    children: N.default.Messages.VOICE_CHANNEL_STATUS_MODAL_TITLE
                                }), (0, i.jsx)(s.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: N.default.Messages.VOICE_CHANNEL_STATUS_MODAL_SUBTITLE
                                })]
                            }), (0, i.jsxs)(s.FormSection, {
                                className: g.inputSection,
                                title: N.default.Messages.VOICE_CHANNEL_STATUS,
                                children: [(0, i.jsx)(c.default, {
                                    innerClassName: g.textArea,
                                    textValue: O,
                                    richValue: G,
                                    placeholder: N.default.Messages.VOICE_CHANNEL_STATUS_MODAL_PREFILL_CHANNEL.format({
                                        channelName: t.name
                                    }),
                                    focused: !0,
                                    channel: t,
                                    onChange: (e, t, n) => {
                                        A(t), U(n)
                                    },
                                    onSubmit: () => (p(), Promise.resolve({
                                        shouldClear: !1,
                                        shouldRefocus: !0
                                    })),
                                    type: r.ChatInputTypes.VOICE_CHANNEL_STATUS,
                                    canMentionRoles: !1,
                                    canMentionChannels: !1,
                                    allowNewLines: !1,
                                    parentModalKey: h,
                                    maxCharacterCount: 500,
                                    showRemainingCharsAfterCount: 250,
                                    emojiPickerCloseOnModalOuterClick: !0
                                }), null != m ? (0, i.jsx)(s.FormErrorBlock, {
                                    className: g.error,
                                    children: m
                                }) : null]
                            })]
                        }), (0, i.jsxs)(s.ModalFooter, {
                            justify: S.default.Justify.BETWEEN,
                            direction: S.default.Direction.HORIZONTAL,
                            children: [(0, i.jsx)(s.Button, {
                                color: s.Button.Colors.PRIMARY,
                                onClick: C,
                                children: N.default.Messages.CANCEL
                            }), (0, i.jsx)(s.Button, {
                                onClick: p,
                                submitting: L,
                                className: g.button,
                                disabled: O.length > 500,
                                children: N.default.Messages.VOICE_CHANNEL_STATUS_MODAL_SET_STATUS
                            })]
                        })]
                    })
                })
            }
        },
        458574: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("281071"),
                l = n("65597"),
                s = n("77078"),
                u = n("867965"),
                d = n("42203"),
                r = n("404008"),
                o = n("49111"),
                c = n("782340");

            function f(e, t, n) {
                let f = (0, l.default)([d.default], () => d.default.getChannel(e.parent_id));
                return (0, i.jsx)(s.MenuItem, {
                    id: "channel-copy-link",
                    label: c.default.Messages.COPY_LINK,
                    action: () => {
                        e.isForumPost() && (0, u.trackForumPostLinkCopied)({
                            postId: e.id,
                            location: {
                                section: o.AnalyticsSections.CONTEXT_MENU
                            }
                        }), (0, a.copy)((0, r.getChannelLinkToCopy)(e, f, t, n))
                    }
                })
            }
        },
        308798: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                l = n("77078"),
                s = n("18054"),
                u = n("819689"),
                d = n("430475"),
                r = n("610730"),
                o = n("271938"),
                c = n("957255"),
                f = n("49111"),
                S = n("782340");

            function E(e) {
                let t = e.isForumPost(),
                    E = (0, a.useStateFromStores)([o.default], () => e.isOwner(o.default.getId()), [e]),
                    {
                        canManageChannel: _,
                        canAccessChannel: N
                    } = (0, a.useStateFromStoresObject)([c.default], () => ({
                        canAccessChannel: c.default.can(e.accessPermissions, e),
                        canManageChannel: c.default.can(e.isThread() ? f.Permissions.MANAGE_THREADS : f.Permissions.MANAGE_CHANNELS, e)
                    }), [e]),
                    g = (0, a.useStateFromStores)([r.default], () => {
                        var t;
                        return null !== (t = r.default.getCount(e.id)) && void 0 !== t ? t : 0
                    }, [e.id]),
                    {
                        firstMessage: h
                    } = (0, a.useStateFromStores)([d.default], () => d.default.getMessage(e.id), [e.id]),
                    C = t && (_ || E && g < 1),
                    T = t && E && !_ && g > 0 && null != h;
                return N && (_ || C || T) ? (0, i.jsx)(l.MenuItem, {
                    id: "delete-channel",
                    label: (() => {
                        if (e.type === f.ChannelTypes.GUILD_CATEGORY) return S.default.Messages.DELETE_CATEGORY;
                        if (e.isForumPost()) return C ? S.default.Messages.DELETE_FORUM_POST : S.default.Messages.DELETE_MESSAGE;
                        if (e.isThread()) return S.default.Messages.DELETE_THREAD;
                        return S.default.Messages.DELETE_CHANNEL
                    })(),
                    color: "danger",
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("575351").then(n.bind(n, "575351"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            onConfirm: () => {
                                n.onClose(), T ? u.default.deleteMessage(e.id, e.id) : s.default.deleteChannel(e.id)
                            },
                            channel: e
                        })
                    })
                }) : null
            }
        },
        625399: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                },
                useChannelNotificationCustomSettingsItem: function() {
                    return g
                }
            }), n("222007"), n("702976");
            var i = n("37983"),
                a = n("884691"),
                l = n("77078"),
                s = n("519705"),
                u = n("437756"),
                d = n("277796"),
                r = n("507313"),
                o = n("282109"),
                c = n("34676"),
                f = n("49111"),
                S = n("133335"),
                E = n("397336"),
                _ = n("782340");

            function N(e) {
                let t = (0, u.useChannelPresetSettings)(e),
                    n = (0, u.useChannelPresetInheritance)(e),
                    s = t.preset === r.Presets.CUSTOM && !n.inherited,
                    [d, o] = a.useState(s),
                    [c, S] = a.useState(!1),
                    E = c ? r.Presets.CUSTOM : t.preset,
                    N = g(e, () => S(!1));
                if (e.type === f.ChannelTypes.GUILD_VOICE) return null;
                let h = "parent" === n.inheritedFrom ? _.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : _.default.Messages.FORM_LABEL_DEFAULT;
                return e.type === f.ChannelTypes.GUILD_STAGE_VOICE ? (0, i.jsxs)(l.MenuItem, {
                    id: "channel_notification_settings",
                    label: _.default.Messages.NOTIFICATIONS,
                    children: [(0, i.jsx)(l.MenuRadioItem, {
                        id: "cns_default",
                        label: h,
                        checked: n.inherited,
                        group: "channel_notification_settings",
                        subtext: t.notification === f.UserNotificationSettings.NO_MESSAGES ? _.default.Messages.FORM_LABEL_NOTHING : _.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                        action: () => (0, u.updateChannelToGuildDefault)(e.guild_id, e.id)
                    }), (0, i.jsx)(l.MenuRadioItem, {
                        id: "cns_only_mention",
                        group: "channel_notification_settings",
                        checked: !n.inherited && t.notification !== f.UserNotificationSettings.NO_MESSAGES,
                        label: _.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                        action: () => (0, u.updateChannelNotificationSetting)(e.guild_id, e.id, f.UserNotificationSettings.ONLY_MENTIONS)
                    }), (0, i.jsx)(l.MenuRadioItem, {
                        id: "cns_no_message",
                        group: "channel_notification_settings",
                        label: _.default.Messages.FORM_LABEL_NOTHING,
                        checked: !n.inherited && t.notification === f.UserNotificationSettings.NO_MESSAGES,
                        action: () => (0, u.updateChannelNotificationSetting)(e.guild_id, e.id, f.UserNotificationSettings.NO_MESSAGES)
                    })]
                }) : (0, i.jsxs)(l.MenuItem, {
                    id: "channel_notification_settings",
                    label: _.default.Messages.NOTIFICATIONS,
                    children: [(0, i.jsx)(l.MenuRadioItem, {
                        id: "cns_default",
                        label: h,
                        group: "channel_notification_settings",
                        checked: n.inherited && !c,
                        subtext: n.inheritedPreset,
                        action: () => ((0, u.updateChannelToGuildDefault)(e.guild_id, e.id), S(!1))
                    }), (0, i.jsx)(l.MenuRadioItem, {
                        id: "cns_everything",
                        group: "channel_notification_settings",
                        label: _.default.Messages.NOTIFICATION_PRESET_1,
                        checked: !n.inherited && E === r.Presets.ALL_MESSAGES,
                        action: () => ((0, u.updateChannelPreset)(e.guild_id, e.id, r.Presets.ALL_MESSAGES), S(!1))
                    }), (0, i.jsx)(l.MenuRadioItem, {
                        id: "cns_essentials",
                        group: "channel_notification_settings",
                        label: _.default.Messages.NOTIFICATION_PRESET_2,
                        checked: !n.inherited && E === r.Presets.MENTIONS,
                        action: () => ((0, u.updateChannelPreset)(e.guild_id, e.id, r.Presets.MENTIONS), S(!1))
                    }), (0, i.jsx)(l.MenuRadioItem, {
                        id: "cns_nothing",
                        group: "channel_notification_settings",
                        label: _.default.Messages.NOTIFICATION_PRESET_3,
                        checked: !n.inherited && E === r.Presets.NOTHING,
                        action: () => ((0, u.updateChannelPreset)(e.guild_id, e.id, r.Presets.NOTHING), S(!1))
                    }), (0, i.jsx)(l.MenuRadioItem, {
                        id: "cns_custom",
                        group: "channel_notification_settings",
                        label: _.default.Messages.NOTIFICATION_PRESET_CUSTOM,
                        checked: c || !n.inherited && E === r.Presets.CUSTOM,
                        action: () => (o(!0), S(!0))
                    }), (d || s) && N]
                })
            }

            function g(e, t) {
                let {
                    notification: n,
                    unread: a
                } = (0, u.useChannelPresetSettings)(e), r = e => {
                    e(), t()
                }, N = t => {
                    let n = {
                        message_notifications: t
                    };
                    t === f.UserNotificationSettings.ALL_MESSAGES && a !== S.UnreadSetting.ALL_MESSAGES && (n.flags = (0, d.withChannelUnreadFlags)(o.default.getChannelIdFlags(e.guild_id, e.id), E.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES)), s.default.updateChannelOverrideSettings(e.guild_id, e.id, n, c.NotificationLabel.notifications(t))
                };
                return (0, i.jsxs)(l.MenuGroup, {
                    children: [(0, i.jsxs)(l.MenuItem, {
                        id: "unread_setting",
                        label: "Unread Badges",
                        children: [(0, i.jsx)(l.MenuRadioItem, {
                            id: "unread_setting_all_messages",
                            group: "unread_setting",
                            checked: a === S.UnreadSetting.ALL_MESSAGES,
                            label: _.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                            action: () => r(() => (0, u.updateChannelUnreadSetting)(e.guild_id, e.id, S.UnreadSetting.ALL_MESSAGES))
                        }), (0, i.jsx)(l.MenuRadioItem, {
                            id: "unread_setting_mention_only",
                            group: "unread_setting",
                            checked: a === S.UnreadSetting.ONLY_MENTIONS,
                            label: _.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                            disabled: a !== S.UnreadSetting.ONLY_MENTIONS && n === f.UserNotificationSettings.ALL_MESSAGES,
                            subtext: a !== S.UnreadSetting.ONLY_MENTIONS && n === f.UserNotificationSettings.ALL_MESSAGES ? _.default.Messages.NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED : void 0,
                            action: () => r(() => (0, u.updateChannelUnreadSetting)(e.guild_id, e.id, S.UnreadSetting.ONLY_MENTIONS))
                        })]
                    }, "unread_setting"), (0, i.jsxs)(l.MenuItem, {
                        id: "push_settings",
                        label: _.default.Messages.NOTIFICATIONS,
                        children: [(0, i.jsx)(l.MenuRadioItem, {
                            group: "notification-preset",
                            id: "push_settings_everything",
                            label: _.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                            checked: n === f.UserNotificationSettings.ALL_MESSAGES,
                            subtext: a !== S.UnreadSetting.ALL_MESSAGES && n !== f.UserNotificationSettings.ALL_MESSAGES ? _.default.Messages.NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING : void 0,
                            action: () => r(() => N(f.UserNotificationSettings.ALL_MESSAGES))
                        }), (0, i.jsx)(l.MenuRadioItem, {
                            group: "notification-preset",
                            id: "push_settings_everything_mention",
                            checked: n === f.UserNotificationSettings.ONLY_MENTIONS,
                            label: _.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                            action: () => r(() => N(f.UserNotificationSettings.ONLY_MENTIONS))
                        }), (0, i.jsx)(l.MenuRadioItem, {
                            group: "notification-preset",
                            id: "push_settings_everything_nothing",
                            label: _.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
                            checked: n === f.UserNotificationSettings.NO_MESSAGES,
                            action: () => r(() => N(f.UserNotificationSettings.NO_MESSAGES))
                        })]
                    }, "push_settings")]
                })
            }
        },
        962199: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007");
            var i = n("917351"),
                a = n.n(i),
                l = n("446674"),
                s = n("913144"),
                u = n("398604"),
                d = n("813006"),
                r = n("730647");
            let o = !1,
                c = {},
                f = {},
                S = {},
                E = e => (S[e.guild_scheduled_event.id] = new d.default(e.guild_scheduled_event.guild), f[e.guild_scheduled_event.id] = e.guild_scheduled_event, {
                    channelId: e.directory_channel_id,
                    scheduledEventId: e.entity_id,
                    type: r.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT,
                    authorId: e.author_id,
                    createdAt: e.created_at
                });
            class _ extends l.default.Store {
                isFetching() {
                    return o
                }
                getEventDirectoryEntries(e) {
                    if (null != e) return c[e]
                }
                getCachedGuildByEventId(e) {
                    var t;
                    return null !== (t = S[e]) && void 0 !== t ? t : void 0
                }
                getCachedGuildScheduledEventById(e) {
                    var t;
                    return null !== (t = f[e]) && void 0 !== t ? t : void 0
                }
            }
            _.displayName = "EventDirectoryStore";
            var N = new _(s.default, {
                EVENT_DIRECTORY_FETCH_START: function() {
                    o = !0
                },
                EVENT_DIRECTORY_FETCH_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        entries: n
                    } = e;
                    o = !1;
                    let i = a.sortBy([...n], [function(e) {
                            return (0, u.scheduledEventSort)(e.guild_scheduled_event)
                        }]),
                        l = a.map(i, E);
                    c[t] = l
                },
                EVENT_DIRECTORY_FETCH_FAILURE: function() {
                    o = !1
                }
            })
        },
        889486: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                handoffRemote: function() {
                    return o
                }
            });
            var i = n("627445"),
                a = n.n(i),
                l = n("629109"),
                s = n("987317"),
                u = n("42887"),
                d = n("700507"),
                r = n("780338");

            function o(e, t) {
                var n;
                let i = null !== (n = e.sessionId) && void 0 !== n ? n : "";
                (0, d.remoteDisconnect)(i), (0, d.disconnectRemote)();
                let o = null != t ? t : e.channelId;
                a(null != o, "attempted to transfer to unknown channel"), e.selfMute !== u.default.isSelfMute() && l.default.toggleSelfMute(), e.selfDeaf !== u.default.isSelfDeaf() && l.default.toggleSelfDeaf(), (0, r.default)(o, "discord_client", i), s.default.selectVoiceChannel(o, !1)
            }
        },
        261552: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("446674"),
                a = n("271938"),
                l = n("800762"),
                s = n("76393");

            function u() {
                let e = (0, i.useStateFromStores)([a.default], () => a.default.getId()),
                    t = (0, i.useStateFromStores)([s.default], () => s.default.getRemoteSessionId());
                return (0, i.useStateFromStores)([l.default], () => {
                    var n;
                    return null !== (n = l.default.getVoiceStateForSession(e, t)) && void 0 !== n ? n : void 0
                })
            }
        },
        742898: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("446674"),
                a = n("47319"),
                l = n("449008"),
                s = n("49111");

            function u() {
                return (0, i.useStateFromStoresArray)([a.default], () => [a.default.getAccount(null, s.PlatformTypes.XBOX), a.default.getAccount(null, s.PlatformTypes.PLAYSTATION), a.default.getAccount(null, s.PlatformTypes.PLAYSTATION_STAGING)].filter(l.isNotNullish))
            }
        },
        424024: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("303800"),
                a = n("998564"),
                l = n("420145"),
                s = n("171644");

            function u(e) {
                return null != e ? e === s.GameConsoleTypes.XBOX ? l.default : a.default : i.default
            }
        },
        379304: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("65597"),
                l = n("77078"),
                s = n("926994"),
                u = n("495194"),
                d = n("945956"),
                r = n("800762"),
                o = n("889486"),
                c = n("261552"),
                f = n("742898"),
                S = n("424024"),
                E = n("49111"),
                _ = n("782340");

            function N(e) {
                let t = (0, a.default)([d.default], () => d.default.getChannelId() === e.id),
                    N = (0, c.default)(),
                    g = (null == N ? void 0 : N.channelId) === e.id,
                    h = (0, u.useIsVoiceChannelLocked)(e) && !e.isPrivate(),
                    C = (0, u.default)(e),
                    T = (0, a.default)([r.default], () => r.default.isInChannel(e.id)),
                    I = !T && C || h,
                    O = (0, f.default)();
                if (!g && 0 === O.length) return null;
                let A = t => {
                    if (!t.twoWayLink || t.revoked) {
                        (0, s.default)(t.type, "Console Transfer Item");
                        return
                    }
                    t.type === E.PlatformTypes.XBOX ? (0, l.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("613895").then(n.bind(n, "613895"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            channel: e
                        })
                    }) : (t.type === E.PlatformTypes.PLAYSTATION || t.type === E.PlatformTypes.PLAYSTATION_STAGING) && (0, l.openModalLazy)(async () => {
                        let {
                            default: a
                        } = await n.el("962512").then(n.bind(n, "962512"));
                        return n => (0, i.jsx)(a, {
                            ...n,
                            platform: t.type,
                            channel: e
                        })
                    })
                };
                return (0, i.jsx)(i.Fragment, {
                    children: g ? (0, i.jsx)(l.MenuItem, {
                        label: _.default.Messages.TRANSFER_VOICE_TO_DEVICE,
                        id: "handoff",
                        action: () => {
                            (0, o.handoffRemote)(N)
                        },
                        icon: (0, S.default)(void 0),
                        disabled: I
                    }) : O.map(e => (0, i.jsx)(l.MenuItem, {
                        id: "transfer-".concat(e.type, "-").concat(e.id),
                        label: function(e, t) {
                            if (e === E.PlatformTypes.XBOX) return t ? _.default.Messages.TRANSFER_VOICE_TO_XBOX : _.default.Messages.JOIN_ON_XBOX;
                            if (e === E.PlatformTypes.PLAYSTATION) return t ? _.default.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE : _.default.Messages.CONSOLE_PLAYSTATION_JOIN_VOICE;
                            if (e === E.PlatformTypes.PLAYSTATION_STAGING) return t ? _.default.Messages.CONSOLE_PLAYSTATION_STAGING_TRANSFER_VOICE : _.default.Messages.CONSOLE_PLAYSTATION_STAGING_JOIN_VOICE
                        }(e.type, t),
                        action: () => A(e),
                        icon: (0, S.default)(e.type),
                        disabled: I
                    }, e.id))
                })
            }
        },
        49129: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getNextShownUpcomingEventNoticeType: function() {
                    return u
                }
            });
            var i = n("866227"),
                a = n.n(i),
                l = n("249654"),
                s = n("745049");

            function u(e, t, n, i) {
                let u = a(),
                    d = new Date(e.scheduled_start_time).getTime(),
                    r = {
                        start: d - s.EVENT_STARTING_SOON_WINDOW_MILLISECONDS,
                        end: d
                    };
                if (u.isBetween(r.start, r.end)) {
                    if (null != t) {
                        let e = a(t),
                            n = e.isBetween(r.start, r.end),
                            l = e.isBetween(a(d).subtract(s.ACKED_RECENTLY_WINDOW_DAYS, "days"), d);
                        return n || l && !i ? void 0 : s.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
                    }
                    return s.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
                }
                let o = l.default.extractTimestamp(e.id),
                    c = Math.min((null != n ? n : o) + s.NEW_EVENT_WINDOW_MILLISECONDS, d),
                    f = u.isBetween(o, c);
                if (f && null == t && !i) return s.UpcomingGuildEventNoticeTypes.NEW_EVENT
            }
        },
        431934: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var i = n("446674"),
                a = n("913144"),
                l = n("271938"),
                s = n("398604"),
                u = n("49129"),
                d = n("745049");
            let r = {},
                o = {};

            function c(e) {
                let t = {
                    ...r
                };
                delete t[e], r = t;
                let n = {
                    ...o
                };
                delete n[e], o = n
            }
            class f extends i.default.PersistedStore {
                initialize(e) {
                    if (null != e) {
                        var t, n;
                        r = null !== (t = e.upcomingEventDismissals) && void 0 !== t ? t : {}, o = null !== (n = e.upcomingEventSeenTimestamps) && void 0 !== n ? n : {}
                    }
                }
                getGuildEventNoticeDismissalTime(e) {
                    return r[e]
                }
                getAllEventDismissals() {
                    return r
                }
                getUpcomingNoticeSeenTime(e) {
                    return o[e]
                }
                getAllUpcomingNoticeSeenTimes() {
                    return o
                }
                getState() {
                    return {
                        upcomingEventDismissals: r,
                        upcomingEventSeenTimestamps: o
                    }
                }
            }
            f.displayName = "UpcomingEventNoticesStore", f.persistKey = "UpcomingEventNotices";
            var S = new f(a.default, {
                UPCOMING_GUILD_EVENT_NOTICE_HIDE: function(e) {
                    let {
                        eventId: t
                    } = e, n = {
                        ...r
                    };
                    n[t] = Date.now(), r = n
                },
                GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e;
                    (t.status === d.GuildScheduledEventStatus.CANCELED || t.status === d.GuildScheduledEventStatus.COMPLETED) && c(t.id)
                },
                GUILD_SCHEDULED_EVENT_DELETE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e;
                    c(t.id)
                },
                GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
                    let {
                        userId: t,
                        guildEventId: n
                    } = e, i = l.default.getId();
                    if (t !== i) return;
                    let a = s.default.getGuildScheduledEvent(n);
                    if (null == a || a.status !== d.GuildScheduledEventStatus.SCHEDULED) return;
                    let c = r[n];
                    if (null != c) return;
                    let f = o[n],
                        S = (0, u.getNextShownUpcomingEventNoticeType)(a, void 0, f, !1);
                    if (S === d.UpcomingGuildEventNoticeTypes.NEW_EVENT) {
                        let e = {
                            ...r
                        };
                        e[n] = Date.now(), r = e
                    }
                },
                UPCOMING_GUILD_EVENT_NOTICE_SEEN: function(e) {
                    let {
                        guildEventId: t
                    } = e, n = {
                        ...o
                    };
                    n[t] = Date.now(), o = n
                }
            })
        },
        534222: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                },
                useActiveEvent: function() {
                    return T
                },
                useActiveEventsByChannel: function() {
                    return I
                },
                useGuildUpcomingEventsNotice: function() {
                    return O
                },
                useGuildActiveEvent: function() {
                    return A
                },
                useGuildChannelScheduledEvents: function() {
                    return L
                },
                useFirstActiveEventChannel: function() {
                    return M
                },
                useImminentUpcomingGuildEvents: function() {
                    return m
                }
            }), n("222007"), n("808653");
            var i = n("884691"),
                a = n("446674"),
                l = n("962199"),
                s = n("42203"),
                u = n("923959"),
                d = n("305961"),
                r = n("957255"),
                o = n("449008"),
                c = n("398604"),
                f = n("49129"),
                S = n("431934"),
                E = n("466148"),
                _ = n("822516"),
                N = n("745049"),
                g = n("49111");
            let h = [];

            function C(e, t) {
                return (0, a.useStateFromStoresArray)([d.default, l.default, c.default, r.default, s.default, u.default], () => {
                    let n = d.default.getGuild(e);
                    if (null == n) return h;
                    let i = n.hasFeature(g.GuildFeatures.HUB);
                    if (i) {
                        var a, f;
                        let e = null === (a = u.default.getDefaultChannel(n.id)) || void 0 === a ? void 0 : a.id,
                            t = null !== (f = l.default.getEventDirectoryEntries(e)) && void 0 !== f ? f : [];
                        return t.map(e => {
                            let t = e.scheduledEventId,
                                n = c.default.getGuildScheduledEvent(t);
                            return null != n ? n : l.default.getCachedGuildScheduledEventById(t)
                        }).filter(o.isNotNullish)
                    }
                    let S = c.default.getGuildScheduledEventsByIndex(null != t ? t : c.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(n.id));
                    return S.filter(e => {
                        let t = e.channel_id;
                        if (null == t) return !0;
                        let n = s.default.getChannel(t);
                        return r.default.can(g.Permissions.VIEW_CHANNEL, n)
                    })
                }, [t, e])
            }

            function T(e) {
                return (0, a.useStateFromStores)([c.default, s.default, r.default], () => {
                    let t = s.default.getChannel(e);
                    if (!r.default.can(g.Permissions.VIEW_CHANNEL, t)) return null;
                    let n = null == t ? void 0 : t.guild_id;
                    if (null == n) return null;
                    let i = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e));
                    return i.length > 0 ? i[0] : null
                }, [e])
            }

            function I(e) {
                let t = (0, a.useStateFromStoresArray)([c.default], () => c.default.getGuildScheduledEventsForGuild(e), [e]),
                    n = i.useMemo(() => {
                        let e = new Map;
                        return t.forEach(t => {
                            let n = t.channel_id;
                            null != n && e.set(n, t)
                        }), e
                    }, [t]);
                return n
            }

            function O(e) {
                var t, n;
                let i = (t = e, (0, a.useStateFromStoresArray)([c.default, s.default, r.default], () => {
                        let e = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(t));
                        return e.filter(e => {
                            if (e.entity_type === N.GuildScheduledEventEntityTypes.NONE || e.status !== N.GuildScheduledEventStatus.SCHEDULED) return !1;
                            if (null == e.channel_id) return !0;
                            let t = s.default.getChannel(e.channel_id);
                            return r.default.can(g.Permissions.VIEW_CHANNEL, t)
                        })
                    }, [t])),
                    l = (0, a.useStateFromStoresObject)([S.default], () => S.default.getAllEventDismissals()),
                    u = (0, a.useStateFromStoresObject)([S.default], () => S.default.getAllUpcomingNoticeSeenTimes()),
                    d = (0, a.useStateFromStoresObject)([c.default], () => null == i ? {} : i.reduce((e, t) => {
                        let n = (0, _.getNextRecurrenceIdInEvent)(t);
                        return {
                            ...e,
                            [t.id]: c.default.isInterestedInEventRecurrence(t.id, n)
                        }
                    }, {}), [i]);
                if (null != i && null != d)
                    for (let e = 0; e < i.length; e++) {
                        ;
                        let t = i[e],
                            a = l[t.id],
                            s = u[t.id],
                            r = null !== (n = d[t.id]) && void 0 !== n && n,
                            o = (0, f.getNextShownUpcomingEventNoticeType)(t, a, s, r);
                        if (null != o) return {
                            upcomingEvent: t,
                            noticeType: o
                        }
                    }
            }

            function A(e) {
                return (0, a.useStateFromStores)([c.default, s.default, r.default], () => {
                    let t = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e));
                    return t.find(e => {
                        if (e.entity_type === N.GuildScheduledEventEntityTypes.NONE || !(0, c.isGuildScheduledEventActive)(e)) return !1;
                        if (null == e.channel_id) return !0;
                        let t = s.default.getChannel(e.channel_id);
                        return r.default.can(g.Permissions.VIEW_CHANNEL, t)
                    })
                }, [e])
            }

            function L(e) {
                return (0, a.useStateFromStores)([c.default], () => c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e])
            }

            function M(e) {
                return (0, a.useStateFromStores)([s.default, c.default], () => {
                    let t = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)).find(e => {
                        let t = s.default.getChannel(e.channel_id);
                        return null != t
                    });
                    return s.default.getChannel(null == t ? void 0 : t.channel_id)
                }, [e])
            }

            function m(e) {
                let [t, n] = i.useState(() => Date.now());
                i.useEffect(() => {
                    let e = setInterval(() => {
                        n(Date.now())
                    }, 9e5);
                    return () => clearInterval(e)
                }, []);
                let l = (0, a.useStateFromStores)([c.default], () => null == e ? [] : c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e, t]),
                    s = i.useMemo(() => l.filter(e => {
                        let {
                            startTime: t,
                            endTime: n
                        } = (0, E.getEventSchedule)(e), {
                            withinStartWindow: i,
                            diffMinutes: a
                        } = (0, _.getEventTimeData)(t.toISOString(), null == n ? void 0 : n.toISOString());
                        return e.status !== N.GuildScheduledEventStatus.ACTIVE && i && a < 15
                    }), [l]);
                return s
            }
        },
        437756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useChannelPresetSettings: function() {
                    return E
                },
                useChannelPresetInheritance: function() {
                    return _
                },
                updateChannelPreset: function() {
                    return N
                },
                updateChannelToGuildDefault: function() {
                    return g
                },
                updateChannelUnreadSetting: function() {
                    return h
                },
                updateChannelNotificationSetting: function() {
                    return C
                }
            }), n("222007");
            var i = n("65597"),
                a = n("519705"),
                l = n("42203"),
                s = n("282109"),
                u = n("34676"),
                d = n("47495"),
                r = n("277796"),
                o = n("507313"),
                c = n("49111"),
                f = n("133335"),
                S = n("397336");

            function E(e) {
                let t = (0, i.default)([s.default], () => s.default.resolveUnreadSetting(e)),
                    n = (0, i.default)([s.default], () => s.default.resolvedMessageNotifications(e));
                return {
                    unread: t,
                    notification: n,
                    preset: (0, o.presetFromSettings)(t, n)
                }
            }

            function _(e) {
                let t = (0, i.useStateFromStoresArray)([s.default], () => (0, d.filterOverrides)(s.default.getChannelOverrides(e.guild_id), {
                        ignoreMute: !0,
                        ignoreUnreadSetting: !1,
                        ignoreNotificationSetting: !1
                    })),
                    [n, a] = (0, i.useStateFromStoresArray)([s.default, l.default], () => {
                        let n = l.default.getChannel(e.parent_id);
                        return null != n && t.includes(n.id) ? ["parent", (0, o.presetName)((0, o.presetFromSettings)(s.default.resolveUnreadSetting(n), s.default.resolvedMessageNotifications(n)))] : ["guild", (0, o.presetName)((0, o.presetFromSettings)(s.default.getGuildUnreadSetting(e.guild_id), s.default.getMessageNotifications(e.guild_id)))]
                    }, [e.guild_id, e.parent_id, t]);
                return {
                    inherited: !t.includes(e.id),
                    inheritedFrom: n,
                    inheritedPreset: a
                }
            }

            function N(e, t, n) {
                let i = s.default.getChannelIdFlags(e, t);
                n === o.Presets.ALL_MESSAGES ? a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: c.UserNotificationSettings.ALL_MESSAGES,
                    flags: (0, r.withChannelUnreadFlags)(i, S.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES)
                }, u.NotificationLabels.PresetAll) : n === o.Presets.MENTIONS ? a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: c.UserNotificationSettings.ONLY_MENTIONS,
                    flags: (0, r.withChannelUnreadFlags)(i, S.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, u.NotificationLabels.PresetMentions) : n === o.Presets.NOTHING && a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: c.UserNotificationSettings.NO_MESSAGES,
                    flags: (0, r.withChannelUnreadFlags)(i, S.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, u.NotificationLabels.PresetNothing)
            }

            function g(e, t) {
                a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: c.UserNotificationSettings.NULL,
                    flags: (0, r.resetChannelUnreadFlags)(s.default.getChannelIdFlags(e, t))
                }, u.NotificationLabels.PresetDefault)
            }

            function h(e, t, n) {
                let i = s.default.getChannelIdFlags(e, t);
                a.default.updateChannelOverrideSettings(e, t, {
                    flags: (0, r.withChannelUnreadFlags)(i, n === f.UnreadSetting.ALL_MESSAGES ? S.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES : S.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, u.NotificationLabel.unreads(n))
            }

            function C(e, t, n) {
                a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: n
                }, u.NotificationLabel.notifications(n))
            }
        },
        507313: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Presets: function() {
                    return i
                },
                presetFromSettings: function() {
                    return r
                },
                presetName: function() {
                    return o
                }
            }), n("794252");
            var i, a, l = n("506838"),
                s = n("49111"),
                u = n("133335"),
                d = n("782340");

            function r(e, t) {
                return (0, l.match)([t, e]).with([s.UserNotificationSettings.ALL_MESSAGES, u.UnreadSetting.ALL_MESSAGES], () => "all_messages").with([s.UserNotificationSettings.ONLY_MENTIONS, u.UnreadSetting.UNSET], () => "mentions").with([s.UserNotificationSettings.ONLY_MENTIONS, u.UnreadSetting.ONLY_MENTIONS], () => "mentions").with([s.UserNotificationSettings.NO_MESSAGES, u.UnreadSetting.UNSET], () => "nothing").with([s.UserNotificationSettings.NO_MESSAGES, u.UnreadSetting.ONLY_MENTIONS], () => "nothing").otherwise(() => "custom")
            }

            function o(e) {
                return (0, l.match)(e).with("all_messages", () => d.default.Messages.NOTIFICATION_PRESET_1).with("mentions", () => d.default.Messages.NOTIFICATION_PRESET_2).with("nothing", () => d.default.Messages.NOTIFICATION_PRESET_3).with("custom", () => d.default.Messages.NOTIFICATION_PRESET_CUSTOM).exhaustive()
            }(a = i || (i = {})).ALL_MESSAGES = "all_messages", a.MENTIONS = "mentions", a.NOTHING = "nothing", a.CUSTOM = "custom"
        },
        495194: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsVoiceChannelLocked: function() {
                    return r
                },
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                a = n("305961"),
                l = n("957255"),
                s = n("800762"),
                u = n("404008"),
                d = n("843455");

            function r(e) {
                return (0, i.useStateFromStores)([l.default], () => null == e || !l.default.can(d.Permissions.CONNECT, e), [e])
            }

            function o(e) {
                return (0, i.useStateFromStores)([s.default, a.default], () => (0, u.isChannelFull)(e, s.default, a.default))
            }
        },
        303800: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                l = n("748820"),
                s = n("469563"),
                u = n("917798"),
                d = n("75196"),
                r = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: s = "currentColor",
                        foreground: u,
                        ...r
                    } = e, [o] = a.useState(() => (0, l.v4)());
                    return (0, i.jsxs)("svg", {
                        ...(0, d.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, i.jsx)("g", {
                            clipPath: "url(".concat(o, ")"),
                            children: (0, i.jsx)("path", {
                                className: u,
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M4.83075 2H13.2444C14.817 2 16.0751 3.13475 15.9965 4.55319V11H14.5025V4.69504H3.57264V18.8085H6V22H4.83075C3.25811 22 2 20.8652 2 19.4468V4.55319C2 3.13475 3.25811 2 4.83075 2Z",
                                fill: s
                            })
                        }), (0, i.jsx)("path", {
                            d: "M10.5646 13H19.4354C20.5365 13 21.4507 13.7808 21.5303 14.7893L21.9965 20.6997C22.0492 21.3677 21.5021 21.9485 20.7746 21.9968C20.7429 21.9989 20.7111 22 20.6792 22C19.8442 22 19.1157 21.4795 18.9105 20.7363L18.5495 19.4286H11.4504L11.0894 20.7363C10.8842 21.4795 10.1557 22 9.3207 22C8.5913 22 8 21.4571 8 20.7873C8 20.7581 8.00115 20.7289 8.00345 20.6997L8.46966 14.7893C8.5492 13.7808 9.46342 13 10.5646 13Z",
                            className: u,
                            fill: s
                        }), (0, i.jsx)("defs", {
                            children: (0, i.jsx)("clipPath", {
                                id: o,
                                children: (0, i.jsx)("rect", {
                                    width: "14",
                                    height: "21",
                                    fill: s,
                                    transform: "translate(2 2)"
                                })
                            })
                        })]
                    })
                }, u.MobilePhoneControllerIcon, void 0, {
                    size: 16
                })
        },
        998564: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("75196");

            function l(e) {
                let {
                    width: t = 18,
                    height: n = 18,
                    color: l = "currentColor",
                    foreground: s,
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 18 18",
                    children: (0, i.jsx)("path", {
                        className: s,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M17.7516 12.8667C17.4035 13.3058 16.5507 13.6191 16.5507 13.6191L10.2065 15.8979V14.2173L14.8754 12.5538C15.4052 12.364 15.4866 12.0956 15.0559 11.9547C14.6261 11.8135 13.8477 11.854 13.3175 12.0446L10.2065 13.1403V11.3962L10.3858 11.3355C10.3858 11.3355 11.2848 11.0173 12.5488 10.8773C13.8129 10.738 15.3607 10.8963 16.5758 11.3569C17.9451 11.7896 18.0993 12.4275 17.7516 12.8667ZM10.8104 10.005V5.70728C10.8104 5.20255 10.7173 4.73788 10.2437 4.60633C9.88107 4.49017 9.65602 4.82693 9.65602 5.33126V16.0938L6.75349 15.1726V2.34009C7.9876 2.56918 9.78554 3.11075 10.7521 3.43658C13.2102 4.2805 14.0436 5.33085 14.0436 7.69748C14.0436 10.0042 12.6197 10.8785 10.8104 10.005ZM1.42767 14.0417C0.0219393 13.6458 -0.212012 12.8209 0.428722 12.3457C1.02089 11.907 2.02793 11.5767 2.02793 11.5767L6.18966 10.0969V11.7839L3.19485 12.8557C2.66583 13.0456 2.58447 13.3143 3.01432 13.4552C3.44458 13.596 4.22334 13.556 4.75317 13.3657L6.18966 12.8444V14.3537C6.09859 14.3699 5.997 14.3861 5.90309 14.4019C4.4662 14.6367 2.9358 14.5387 1.42767 14.0417Z",
                        fill: l
                    })
                })
            }
        },
        420145: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("75196");

            function l(e) {
                let {
                    width: t = 16,
                    height: n = 16,
                    color: l = "currentColor",
                    foreground: s,
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 60 60",
                    children: (0, i.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, i.jsx)("path", {
                            className: s,
                            fill: l,
                            d: "M8.95185131,8.62650012 L8.92775494,8.65059649 C3.20486729,14.2891468 -0.0119979765,21.9758886 5.02080018e-05,29.9999795 C-0.0119979765,36.56624 2.14462705,42.9517778 6.13257613,48.1686417 C6.16872068,48.2168345 6.24100979,48.252979 6.28920253,48.2168345 C6.33739527,48.1806899 6.34944345,48.120449 6.32534708,48.0602081 C4.03619202,40.9879237 15.722931,23.8433572 21.7711196,16.6626392 C21.795216,16.6385428 21.8193124,16.6144465 21.8193124,16.5783019 C21.8193124,16.5421573 21.795216,16.5060128 21.7590715,16.4819164 C11.6024519,6.37348961 8.8795622,8.68674104 8.92775494,8.65059649 M51.048208,8.62650012 L51.0723044,8.65059649 C56.795192,14.2770987 60.0000091,21.9758886 59.9879609,29.9999795 C60.0000091,36.56624 57.8433841,42.9517778 53.855435,48.1686417 C53.8192905,48.2168345 53.7470014,48.252979 53.6988086,48.2168345 C53.6506159,48.1806899 53.6506159,48.120449 53.6626641,48.0602081 C55.9518191,40.9879237 44.2650801,23.831309 38.2289397,16.650591 C38.2048433,16.6264946 38.180747,16.6023983 38.180747,16.5662537 C38.180747,16.518061 38.2048433,16.4939646 38.2409879,16.4698682 C48.4096556,6.36144143 51.0964008,8.68674104 51.0602562,8.65059649 M30.0000297,0 C36.0482183,0 41.0361667,1.66264946 45.626525,4.38553917 C45.6867659,4.40963554 45.6988141,4.48192464 45.6747177,4.53011738 C45.6506214,4.57831012 45.5903804,4.5903583 45.5301395,4.57831012 C39.7229146,3.32529893 30.8915953,8.33734369 30.0602706,8.84336744 C30.0361742,8.85541562 30.024126,8.86746381 30.0000297,8.86746381 C29.9759333,8.86746381 29.9518369,8.85541562 29.9397887,8.84336744 C27.7229228,7.56625988 19.5663019,3.28915437 14.4217271,4.61445467 C14.3614862,4.62650286 14.3012452,4.61445467 14.2771489,4.56626193 C14.2530525,4.50602101 14.2771489,4.44578009 14.3253416,4.42168372 C18.9156999,1.66264946 23.9638892,0 30.0000297,0 M30.0000297,24.0602245 C30.0361742,24.0602245 30.0723188,24.0843209 30.0964151,24.1084172 C39.0723126,30.9397379 54.4337479,47.8071962 49.7470041,52.5782773 L49.7590523,52.5662291 L49.7590523,52.5782773 L49.7470041,52.5782773 C44.2771283,57.3734547 37.2650849,60.0120071 30.0000297,59.9999589 C22.7349744,60.0120071 15.7108828,57.3734547 10.2530552,52.5782773 L10.2410071,52.5662291 L10.2530552,52.5782773 C5.56631146,47.8071962 20.9277467,30.9276897 29.9036442,24.1084172 C29.9156924,24.0843209 29.9638851,24.0602245 30.0000297,24.0602245"
                        })
                    })
                })
            }
        }
    }
]);