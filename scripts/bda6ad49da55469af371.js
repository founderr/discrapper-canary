"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [49518], {
        449518: (E, S, _) => {
            _.d(S, {
                kf: () => n,
                m$: () => D,
                EQ: () => G,
                aC: () => t,
                IG: () => i
            });
            var I = _(396179),
                e = _(785893),
                s = (_(667294), _(70418)),
                R = _(818417),
                O = _(473708),
                T = function(E, S) {
                    return (0, e.jsxs)(s.Text, {
                        color: "text-danger",
                        style: {
                            display: "flex",
                            gap: "4px",
                            margin: "8px 0 4px 0",
                            alignItems: "center"
                        },
                        variant: "text-sm/normal",
                        children: [(0, e.jsx)(R.Z, {
                            width: 14,
                            height: 14
                        }), E]
                    }, S)
                };
            const N = {
                getForumChannelPermissionText: function() {
                    return O.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT_DISABLED.format({
                        warningHook: T
                    })
                }
            };
            var M = function(E, S) {
                return (0, e.jsxs)(s.Text, {
                    color: "text-danger",
                    style: {
                        display: "flex",
                        gap: "4px",
                        margin: "8px 0 4px 0",
                        alignItems: "center"
                    },
                    variant: "text-sm/normal",
                    children: [(0, e.jsx)(R.Z, {
                        width: 14,
                        height: 14
                    }), E]
                }, S)
            };
            const A = {
                getTextInVoiceSendMessageChannelPermissionText: function(E) {
                    return E ? O.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_TIV_DESCRIPTION_TEXT_DISABLED.format({
                        warningHook: M
                    }) : O.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_TEXT
                },
                getTextInVoiceReadMessageHistoryChannelPermissionText: function(E) {
                    return E ? O.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_WITH_TIV_DESCRIPTION_TEXT_DISABLED.format({
                        warningHook: M
                    }) : O.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_TEXT
                }
            };
            var t, D, P = _(348592),
                a = _(2590);

            function C(E, S, _) {
                S in E ? Object.defineProperty(E, S, {
                    value: _,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : E[S] = _;
                return E
            }! function(E) {
                E[E.EMPTY_STATE = 0] = "EMPTY_STATE";
                E[E.ADMINISTRATOR = 1] = "ADMINISTRATOR";
                E[E.ROLE = 2] = "ROLE";
                E[E.OWNER = 3] = "OWNER";
                E[E.MEMBER = 4] = "MEMBER";
                E[E.USER = 5] = "USER";
                E[E.GUILD = 6] = "GUILD"
            }(t || (t = {}));
            ! function(E) {
                E[E.ROLES = 0] = "ROLES";
                E[E.MEMBERS = 1] = "MEMBERS";
                E[E.USERS = 2] = "USERS";
                E[E.GUILDS = 3] = "GUILDS"
            }(D || (D = {}));
            var L, r, G = 20,
                n = "channelPermissionSettingsAdvancedModeOn";
            ! function(E) {
                E.SETTINGS_PAGE = "settings-page";
                E.MEMBERS_LIST = "members-list";
                E.EMPTY_STATE = "empty-state";
                E.CREATE_CHANNEL = "create-channel"
            }(L || (L = {}));
            ! function(E) {
                E.BASIC = "basic";
                E.ADVANCED = "advanced"
            }(r || (r = {}));

            function i(E, S, _, e) {
                var s, R = E.type;
                return C(s = {}, a.Plq.VIEW_CHANNEL.toString(), {
                        title: R === a.d4z.GUILD_CATEGORY ? O.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL : O.Z.Messages.VIEW_CHANNEL,
                        description: function() {
                            if (S) switch (R) {
                                case a.d4z.GUILD_CATEGORY:
                                    return O.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CATEGORY_EVERYONE;
                                case a.d4z.GUILD_VOICE:
                                case a.d4z.GUILD_STAGE_VOICE:
                                    return O.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_VOICE_EVERYONE;
                                default:
                                    return O.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_TEXT_EVERYONE
                            }
                            return R === a.d4z.GUILD_CATEGORY ? O.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CATEGORY : O.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CHANNEL
                        }(),
                        flag: a.Plq.VIEW_CHANNEL
                    }), C(s, a.Plq.MANAGE_CHANNELS.toString(), {
                        title: R === a.d4z.GUILD_CATEGORY ? O.Z.Messages.MANAGE_CHANNELS : O.Z.Messages.MANAGE_CHANNEL,
                        description: function() {
                            switch (R) {
                                case a.d4z.GUILD_CATEGORY:
                                    return O.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_CATEGORY;
                                case a.d4z.GUILD_VOICE:
                                    return O.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_VOICE;
                                case a.d4z.GUILD_STAGE_VOICE:
                                    return O.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_STAGE;
                                default:
                                    return O.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: a.Plq.MANAGE_CHANNELS
                    }), C(s, a.Plq.MANAGE_ROLES.toString(), {
                        title: O.Z.Messages.MANAGE_PERMISSIONS,
                        description: function() {
                            switch (R) {
                                case a.d4z.GUILD_CATEGORY:
                                    return O.Z.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_CATEGORY;
                                case a.d4z.GUILD_STAGE_VOICE:
                                    return O.Z.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_STAGE;
                                default:
                                    return O.Z.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_CHANNEL
                            }
                        }(),
                        flag: a.Plq.MANAGE_ROLES
                    }), C(s, a.Plq.MANAGE_WEBHOOKS.toString(), {
                        title: O.Z.Messages.MANAGE_WEBHOOKS,
                        description: R === a.d4z.GUILD_CATEGORY ? O.Z.Messages.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION_CATEGORY : O.Z.Messages.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION_CHANNEL,
                        flag: a.Plq.MANAGE_WEBHOOKS
                    }), C(s, a.Plq.CREATE_INSTANT_INVITE.toString(), {
                        title: O.Z.Messages.CREATE_INSTANT_INVITE,
                        description: function() {
                            switch (R) {
                                case a.d4z.GUILD_CATEGORY:
                                    return O.Z.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_CATEGORY;
                                case a.d4z.GUILD_VOICE:
                                case a.d4z.GUILD_STAGE_VOICE:
                                    return O.Z.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_VOICE;
                                default:
                                    return O.Z.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: a.Plq.CREATE_INSTANT_INVITE
                    }), C(s, a.Plq.SEND_MESSAGES.toString(), {
                        title: a.TPd.GUILD_THREADS_ONLY.has(R) ? O.Z.Messages.CREATE_FORUM_POSTS : _ && R === a.d4z.GUILD_CATEGORY ? O.Z.Messages.SEND_MESSAGES_AND_CREATE_FORUM_POSTS : O.Z.Messages.SEND_MESSAGES,
                        description: function() {
                            switch (R) {
                                case a.d4z.GUILD_CATEGORY:
                                    return _ ? O.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_CATEGORY : O.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_CATEGORY;
                                case a.d4z.GUILD_FORUM:
                                    return (null == e ? void 0 : e.createPostsDisabled) && !E.isMediaChannel() ? N.getForumChannelPermissionText() : O.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT;
                                case a.d4z.GUILD_MEDIA:
                                    return O.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT;
                                case a.d4z.GUILD_ANNOUNCEMENT:
                                    return O.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_ANNOUNCEMENT.format({
                                        articleURL: P.Z.getArticleURL(a.BhN.ANNOUNCEMENT_CHANNELS)
                                    });
                                case a.d4z.GUILD_VOICE:
                                    return A.getTextInVoiceSendMessageChannelPermissionText(null == e ? void 0 : e.sendMessagesDisabled);
                                default:
                                    return O.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: a.Plq.SEND_MESSAGES
                    }), C(s, a.Plq.EMBED_LINKS.toString(), {
                        title: O.Z.Messages.EMBED_LINKS,
                        description: R === a.d4z.GUILD_CATEGORY ? O.Z.Messages.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION_CATEGORY : O.Z.Messages.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION_TEXT,
                        flag: a.Plq.EMBED_LINKS
                    }), C(s, a.Plq.ATTACH_FILES.toString(), {
                        title: O.Z.Messages.ATTACH_FILES,
                        description: R === a.d4z.GUILD_CATEGORY ? O.Z.Messages.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION_CATEGORY : O.Z.Messages.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION_TEXT,
                        flag: a.Plq.ATTACH_FILES
                    }), C(s, a.Plq.ADD_REACTIONS.toString(), {
                        title: O.Z.Messages.ADD_REACTIONS,
                        description: function() {
                            switch (R) {
                                case a.d4z.GUILD_CATEGORY:
                                    return O.Z.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_CATEGORY;
                                case a.d4z.GUILD_VOICE:
                                    return O.Z.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_TEXT_WITH_VOICE_CHANNEL_EFFECTS;
                                default:
                                    return O.Z.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: a.Plq.ADD_REACTIONS
                    }), C(s, a.Plq.USE_EXTERNAL_EMOJIS.toString(), {
                        title: O.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS,
                        description: R === a.d4z.GUILD_CATEGORY ? O.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION_CATEGORY : O.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION_TEXT,
                        flag: a.Plq.USE_EXTERNAL_EMOJIS
                    }), C(s, a.Plq.USE_EXTERNAL_STICKERS.toString(), {
                        title: O.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS,
                        description: R === a.d4z.GUILD_CATEGORY ? O.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION_CATEGORY : O.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION_TEXT,
                        flag: a.Plq.USE_EXTERNAL_STICKERS
                    }), C(s, a.Plq.MENTION_EVERYONE.toString(), {
                        title: R === a.d4z.GUILD_STAGE_VOICE ? O.Z.Messages.MENTION_EVERYONE_STAGE : O.Z.Messages.MENTION_EVERYONE,
                        description: R === a.d4z.GUILD_CATEGORY ? O.Z.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_CATEGORY : R === a.d4z.GUILD_STAGE_VOICE ? O.Z.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_STAGE : O.Z.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_TEXT,
                        flag: a.Plq.MENTION_EVERYONE
                    }), C(s, a.Plq.MANAGE_MESSAGES.toString(), {
                        title: O.Z.Messages.MANAGE_MESSAGES,
                        description: function() {
                            switch (R) {
                                case a.d4z.GUILD_CATEGORY:
                                    return O.Z.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_CATEGORY;
                                case a.d4z.GUILD_ANNOUNCEMENT:
                                    return O.Z.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_ANNOUNCEMENT.format({
                                        articleURL: P.Z.getArticleURL(a.BhN.ANNOUNCEMENT_CHANNELS)
                                    });
                                default:
                                    return O.Z.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: a.Plq.MANAGE_MESSAGES
                    }), C(s, a.Plq.READ_MESSAGE_HISTORY.toString(), {
                        title: a.TPd.GUILD_THREADS_ONLY.has(R) ? O.Z.Messages.READ_POST_HISTORY : O.Z.Messages.READ_MESSAGE_HISTORY,
                        description: function() {
                            switch (R) {
                                case a.d4z.GUILD_CATEGORY:
                                    return O.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_CATEGORY;
                                case a.d4z.GUILD_VOICE:
                                    return A.getTextInVoiceReadMessageHistoryChannelPermissionText(null == e ? void 0 : e.readMessageHistoryDisabled);
                                case a.d4z.GUILD_FORUM:
                                case a.d4z.GUILD_MEDIA:
                                    return O.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_FORUM_CHANNEL;
                                default:
                                    return O.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: a.Plq.READ_MESSAGE_HISTORY
                    }), C(s, a.Plq.SEND_TTS_MESSAGES.toString(), {
                        title: O.Z.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES,
                        description: R === a.d4z.GUILD_CATEGORY ? O.Z.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION_CATEGORY : O.Z.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION_TEXT,
                        flag: a.Plq.SEND_TTS_MESSAGES
                    }), C(s, a.Plq.USE_APPLICATION_COMMANDS.toString(), {
                        title: O.Z.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS,
                        description: R === a.d4z.GUILD_CATEGORY ? O.Z.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_DESCRIPTION_CATEGORY : O.Z.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_DESCRIPTION_TEXT,
                        flag: a.Plq.USE_APPLICATION_COMMANDS
                    }), C(s, a.Plq.SEND_VOICE_MESSAGES.toString(), {
                        title: O.Z.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE,
                        description: R === a.d4z.GUILD_CATEGORY ? O.Z.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGES_DESCRIPTION_CATEGORY : O.Z.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGES_DESCRIPTION_TEXT,
                        flag: a.Plq.SEND_VOICE_MESSAGES
                    }), C(s, a.Plq.USE_CLYDE_AI.toString(), {
                        title: O.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI,
                        description: R === a.d4z.GUILD_CATEGORY ? O.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION : O.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI_CHANNEL_DESCRIPTION,
                        flag: a.Plq.USE_CLYDE_AI
                    }), C(s, a.Plq.CONNECT.toString(), {
                        title: O.Z.Messages.CONNECT,
                        description: function() {
                            if (S) switch (R) {
                                case a.d4z.GUILD_CATEGORY:
                                    return O.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_CATEGORY_EVERYONE;
                                case a.d4z.GUILD_STAGE_VOICE:
                                    return O.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_STAGE_EVERYONE;
                                case a.d4z.GUILD_TEXT:
                                case a.d4z.GUILD_FORUM:
                                case a.d4z.GUILD_MEDIA:
                                    return O.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_THREADS_EVERYONE;
                                default:
                                    return O.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_VOICE_EVERYONE
                            }
                            switch (R) {
                                case a.d4z.GUILD_CATEGORY:
                                    return O.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_CATEGORY;
                                case a.d4z.GUILD_STAGE_VOICE:
                                    return O.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_STAGE;
                                case a.d4z.GUILD_TEXT:
                                case a.d4z.GUILD_FORUM:
                                case a.d4z.GUILD_MEDIA:
                                    return O.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_THREADS;
                                default:
                                    return O.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: a.Plq.CONNECT
                    }), C(s, a.Plq.SPEAK.toString(), {
                        title: O.Z.Messages.SPEAK,
                        description: function() {
                            switch (R) {
                                case a.d4z.GUILD_CATEGORY:
                                    return O.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_CATEGORY;
                                case a.d4z.GUILD_STAGE_VOICE:
                                    return O.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_STAGE;
                                case a.d4z.GUILD_TEXT:
                                case a.d4z.GUILD_FORUM:
                                case a.d4z.GUILD_MEDIA:
                                    return O.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_THREADS;
                                default:
                                    return O.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: a.Plq.SPEAK
                    }), C(s, a.Plq.STREAM.toString(), {
                        title: O.Z.Messages.VIDEO,
                        description: function() {
                            switch (R) {
                                case a.d4z.GUILD_CATEGORY:
                                    return O.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_CATEGORY;
                                case a.d4z.GUILD_TEXT:
                                case a.d4z.GUILD_FORUM:
                                case a.d4z.GUILD_MEDIA:
                                    return O.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_THREADS;
                                case a.d4z.GUILD_STAGE_VOICE:
                                    return O.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_STAGE;
                                default:
                                    return O.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: a.Plq.STREAM
                    }), C(s, a.Plq.USE_EMBEDDED_ACTIVITIES.toString(), {
                        title: O.Z.Messages.USE_EMBEDDED_ACTIVITIES,
                        description: function() {
                            switch (R) {
                                case a.d4z.GUILD_CATEGORY:
                                    return O.Z.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_CATEGORY;
                                case a.d4z.GUILD_FORUM:
                                case a.d4z.GUILD_MEDIA:
                                    return O.Z.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_THREADS;
                                default:
                                    return O.Z.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_CHANNEL
                            }
                        }(),
                        flag: a.Plq.USE_EMBEDDED_ACTIVITIES
                    }), C(s, a.Plq.USE_SOUNDBOARD.toString(), {
                        title: O.Z.Messages.USE_SOUNDBOARD,
                        description: function() {
                            switch (R) {
                                case a.d4z.GUILD_CATEGORY:
                                    return O.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_CATEGORY.format({
                                        helpCenterArticle: P.Z.getArticleURL(a.BhN.SOUNDBOARD)
                                    });
                                case a.d4z.GUILD_TEXT:
                                case a.d4z.GUILD_FORUM:
                                case a.d4z.GUILD_MEDIA:
                                    return O.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_THREADS.format({
                                        helpCenterArticle: P.Z.getArticleURL(a.BhN.SOUNDBOARD)
                                    });
                                default:
                                    return O.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_VOICE.format({
                                        helpCenterArticle: P.Z.getArticleURL(a.BhN.SOUNDBOARD)
                                    })
                            }
                        }(),
                        flag: a.Plq.USE_SOUNDBOARD
                    }), C(s, a.Plq.USE_EXTERNAL_SOUNDS.toString(), {
                        title: O.Z.Messages.USE_EXTERNAL_SOUNDS,
                        description: O.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_SOUNDS_DESCRIPTION,
                        flag: a.Plq.USE_EXTERNAL_SOUNDS
                    }), C(s, a.Plq.USE_VAD.toString(), {
                        title: O.Z.Messages.USE_VAD,
                        description: function() {
                            switch (R) {
                                case a.d4z.GUILD_CATEGORY:
                                    return O.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_CATEGORY;
                                case a.d4z.GUILD_STAGE_VOICE:
                                    return O.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_STAGE;
                                case a.d4z.GUILD_TEXT:
                                case a.d4z.GUILD_FORUM:
                                case a.d4z.GUILD_MEDIA:
                                    return O.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_THREADS;
                                default:
                                    return O.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: a.Plq.USE_VAD
                    }), C(s, a.Plq.PRIORITY_SPEAKER.toString(), {
                        title: O.Z.Messages.PRIORITY_SPEAKER,
                        description: function() {
                            0;
                            var E = {
                                keybind: O.Z.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
                                onClick: function() {
                                    I.Z.open(a.oAB.KEYBINDS)
                                }
                            };
                            switch (R) {
                                case a.d4z.GUILD_CATEGORY:
                                    return O.Z.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_CATEGORY.format(E);
                                case a.d4z.GUILD_TEXT:
                                case a.d4z.GUILD_FORUM:
                                case a.d4z.GUILD_MEDIA:
                                    return O.Z.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_THREADS.format(E);
                                default:
                                    return O.Z.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_VOICE.format(E)
                            }
                        }(),
                        flag: a.Plq.PRIORITY_SPEAKER
                    }), C(s, a.Plq.MUTE_MEMBERS.toString(), {
                        title: O.Z.Messages.MUTE_MEMBERS,
                        description: function() {
                            switch (R) {
                                case a.d4z.GUILD_CATEGORY:
                                    return O.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_CATEGORY;
                                case a.d4z.GUILD_STAGE_VOICE:
                                    return O.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_STAGE;
                                case a.d4z.GUILD_TEXT:
                                case a.d4z.GUILD_FORUM:
                                case a.d4z.GUILD_MEDIA:
                                    return O.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_THREADS;
                                default:
                                    return O.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: a.Plq.MUTE_MEMBERS
                    }), C(s, a.Plq.DEAFEN_MEMBERS.toString(), {
                        title: O.Z.Messages.DEAFEN_MEMBERS,
                        description: function() {
                            switch (R) {
                                case a.d4z.GUILD_CATEGORY:
                                    return O.Z.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_CATEGORY;
                                case a.d4z.GUILD_TEXT:
                                case a.d4z.GUILD_FORUM:
                                case a.d4z.GUILD_MEDIA:
                                    return O.Z.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_THREADS;
                                default:
                                    return O.Z.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: a.Plq.DEAFEN_MEMBERS
                    }), C(s, a.Plq.MOVE_MEMBERS.toString(), {
                        title: O.Z.Messages.MOVE_MEMBERS,
                        description: function() {
                            switch (R) {
                                case a.d4z.GUILD_CATEGORY:
                                    return O.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_CATEGORY;
                                case a.d4z.GUILD_STAGE_VOICE:
                                    return O.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_STAGE;
                                case a.d4z.GUILD_TEXT:
                                case a.d4z.GUILD_FORUM:
                                case a.d4z.GUILD_MEDIA:
                                    return O.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_THREADS;
                                default:
                                    return O.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: a.Plq.MOVE_MEMBERS
                    }), C(s, a.Plq.REQUEST_TO_SPEAK.toString(), {
                        title: O.Z.Messages.REQUEST_TO_SPEAK,
                        description: R === a.d4z.GUILD_CATEGORY ? O.Z.Messages.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION_CATEGORY : O.Z.Messages.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION_STAGE,
                        flag: a.Plq.REQUEST_TO_SPEAK
                    }), C(s, a.Plq.MANAGE_THREADS.toString(), {
                        title: a.TPd.GUILD_THREADS_ONLY.has(R) ? O.Z.Messages.MANAGE_FORUM_POSTS : _ && R === a.d4z.GUILD_CATEGORY ? O.Z.Messages.MANAGE_THREADS_AND_FORUM_POSTS : O.Z.Messages.MANAGE_THREADS,
                        description: function() {
                            switch (R) {
                                case a.d4z.GUILD_CATEGORY:
                                    return _ ? O.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION_CATEGORY : O.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION_CATEGORY;
                                case a.d4z.GUILD_FORUM:
                                case a.d4z.GUILD_MEDIA:
                                    return O.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION_TEXT;
                                default:
                                    return O.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: a.Plq.MANAGE_THREADS
                    }), C(s, a.Plq.CREATE_PUBLIC_THREADS.toString(), {
                        title: O.Z.Messages.CREATE_PUBLIC_THREADS,
                        description: R === a.d4z.GUILD_CATEGORY ? O.Z.Messages.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION_CATEGORY : O.Z.Messages.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION_TEXT,
                        flag: a.Plq.CREATE_PUBLIC_THREADS
                    }), C(s, a.Plq.CREATE_PRIVATE_THREADS.toString(), {
                        title: O.Z.Messages.CREATE_PRIVATE_THREADS,
                        description: R === a.d4z.GUILD_CATEGORY ? O.Z.Messages.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION_CATEGORY : O.Z.Messages.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION_TEXT,
                        flag: a.Plq.CREATE_PRIVATE_THREADS
                    }),
                    C(s, a.Plq.SEND_MESSAGES_IN_THREADS.toString(), {
                        title: a.TPd.GUILD_THREADS_ONLY.has(R) ? O.Z.Messages.SEND_MESSAGES_IN_FORUM_POSTS : _ && R === a.d4z.GUILD_CATEGORY ? O.Z.Messages.SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS : O.Z.Messages.SEND_MESSAGES_IN_THREADS,
                        description: function() {
                            switch (R) {
                                case a.d4z.GUILD_CATEGORY:
                                    return _ ? O.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION_CATEGORY : O.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION_CATEGORY;
                                case a.d4z.GUILD_FORUM:
                                case a.d4z.GUILD_MEDIA:
                                    return O.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION_TEXT;
                                default:
                                    return O.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: a.Plq.SEND_MESSAGES_IN_THREADS
                    }), C(s, a.Plq.MANAGE_EVENTS.toString(), {
                        title: O.Z.Messages.MANAGE_EVENTS,
                        description: R === a.d4z.GUILD_CATEGORY ? O.Z.Messages.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION_CATEGORY : O.Z.Messages.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION_CHANNEL,
                        flag: a.Plq.MANAGE_EVENTS
                    }), C(s, a.Plq.CREATE_EVENTS.toString(), {
                        title: O.Z.Messages.CREATE_EVENTS,
                        description: R === a.d4z.GUILD_CATEGORY ? O.Z.Messages.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION_CATEGORY : O.Z.Messages.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION_CHANNEL,
                        flag: a.Plq.CREATE_EVENTS
                    }), C(s, a.Plq.SET_VOICE_CHANNEL_STATUS.toString(), {
                        title: O.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE,
                        description: O.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_DESCRIPTION,
                        flag: a.Plq.SET_VOICE_CHANNEL_STATUS
                    }), s
            }
        }
    }
]);