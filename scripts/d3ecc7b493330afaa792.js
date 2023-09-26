"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [71575], {
        449518: (E, e, S) => {
            S.d(e, {
                kf: () => C,
                m$: () => r,
                EQ: () => P,
                aC: () => a,
                IG: () => c
            });
            var _ = S(734691),
                s = S(785893),
                I = (S(667294), S(304548)),
                t = S(818417),
                R = S(473708),
                O = function(E, e) {
                    return (0, s.jsxs)(I.Text, {
                        color: "text-danger",
                        style: {
                            display: "flex",
                            gap: "4px",
                            margin: "8px 0 4px 0",
                            alignItems: "center"
                        },
                        variant: "text-sm/normal",
                        children: [(0, s.jsx)(t.Z, {
                            width: 14,
                            height: 14
                        }), E]
                    }, e)
                };
            const n = {
                getForumChannelPermissionText: function() {
                    return R.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT_DISABLED.format({
                        warningHook: O
                    })
                }
            };
            var T = function(E, e) {
                return (0, s.jsxs)(I.Text, {
                    color: "text-danger",
                    style: {
                        display: "flex",
                        gap: "4px",
                        margin: "8px 0 4px 0",
                        alignItems: "center"
                    },
                    variant: "text-sm/normal",
                    children: [(0, s.jsx)(t.Z, {
                        width: 14,
                        height: 14
                    }), E]
                }, e)
            };
            const N = {
                getTextInVoiceSendMessageChannelPermissionText: function(E) {
                    return E ? R.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_TIV_DESCRIPTION_TEXT_DISABLED.format({
                        warningHook: T
                    }) : R.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_TEXT
                },
                getTextInVoiceReadMessageHistoryChannelPermissionText: function(E) {
                    return E ? R.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_WITH_TIV_DESCRIPTION_TEXT_DISABLED.format({
                        warningHook: T
                    }) : R.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_TEXT
                }
            };
            var a, r, M = S(348592),
                A = S(2590);

            function i(E, e, S) {
                e in E ? Object.defineProperty(E, e, {
                    value: S,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : E[e] = S;
                return E
            }! function(E) {
                E[E.EMPTY_STATE = 0] = "EMPTY_STATE";
                E[E.ADMINISTRATOR = 1] = "ADMINISTRATOR";
                E[E.ROLE = 2] = "ROLE";
                E[E.OWNER = 3] = "OWNER";
                E[E.MEMBER = 4] = "MEMBER";
                E[E.USER = 5] = "USER";
                E[E.GUILD = 6] = "GUILD"
            }(a || (a = {}));
            ! function(E) {
                E[E.ROLES = 0] = "ROLES";
                E[E.MEMBERS = 1] = "MEMBERS";
                E[E.USERS = 2] = "USERS";
                E[E.GUILDS = 3] = "GUILDS"
            }(r || (r = {}));
            var D, l, P = 20,
                C = "channelPermissionSettingsAdvancedModeOn";
            ! function(E) {
                E.SETTINGS_PAGE = "settings-page";
                E.MEMBERS_LIST = "members-list";
                E.EMPTY_STATE = "empty-state";
                E.CREATE_CHANNEL = "create-channel"
            }(D || (D = {}));
            ! function(E) {
                E.BASIC = "basic";
                E.ADVANCED = "advanced"
            }(l || (l = {}));

            function c(E, e, S, s) {
                var I, t = E.type;
                return i(I = {}, A.Plq.VIEW_CHANNEL.toString(), {
                        title: t === A.d4z.GUILD_CATEGORY ? R.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL : R.Z.Messages.VIEW_CHANNEL,
                        description: function() {
                            if (e) switch (t) {
                                case A.d4z.GUILD_CATEGORY:
                                    return R.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CATEGORY_EVERYONE;
                                case A.d4z.GUILD_VOICE:
                                case A.d4z.GUILD_STAGE_VOICE:
                                    return R.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_VOICE_EVERYONE;
                                default:
                                    return R.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_TEXT_EVERYONE
                            }
                            return t === A.d4z.GUILD_CATEGORY ? R.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CATEGORY : R.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CHANNEL
                        }(),
                        flag: A.Plq.VIEW_CHANNEL
                    }), i(I, A.Plq.MANAGE_CHANNELS.toString(), {
                        title: t === A.d4z.GUILD_CATEGORY ? R.Z.Messages.MANAGE_CHANNELS : R.Z.Messages.MANAGE_CHANNEL,
                        description: function() {
                            switch (t) {
                                case A.d4z.GUILD_CATEGORY:
                                    return R.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_CATEGORY;
                                case A.d4z.GUILD_VOICE:
                                    return R.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_VOICE;
                                case A.d4z.GUILD_STAGE_VOICE:
                                    return R.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_STAGE;
                                default:
                                    return R.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: A.Plq.MANAGE_CHANNELS
                    }), i(I, A.Plq.MANAGE_ROLES.toString(), {
                        title: R.Z.Messages.MANAGE_PERMISSIONS,
                        description: function() {
                            switch (t) {
                                case A.d4z.GUILD_CATEGORY:
                                    return R.Z.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_CATEGORY;
                                case A.d4z.GUILD_STAGE_VOICE:
                                    return R.Z.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_STAGE;
                                default:
                                    return R.Z.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_CHANNEL
                            }
                        }(),
                        flag: A.Plq.MANAGE_ROLES
                    }), i(I, A.Plq.MANAGE_WEBHOOKS.toString(), {
                        title: R.Z.Messages.MANAGE_WEBHOOKS,
                        description: t === A.d4z.GUILD_CATEGORY ? R.Z.Messages.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION_CATEGORY : R.Z.Messages.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION_CHANNEL,
                        flag: A.Plq.MANAGE_WEBHOOKS
                    }), i(I, A.Plq.CREATE_INSTANT_INVITE.toString(), {
                        title: R.Z.Messages.CREATE_INSTANT_INVITE,
                        description: function() {
                            switch (t) {
                                case A.d4z.GUILD_CATEGORY:
                                    return R.Z.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_CATEGORY;
                                case A.d4z.GUILD_VOICE:
                                case A.d4z.GUILD_STAGE_VOICE:
                                    return R.Z.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_VOICE;
                                default:
                                    return R.Z.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: A.Plq.CREATE_INSTANT_INVITE
                    }), i(I, A.Plq.SEND_MESSAGES.toString(), {
                        title: A.TPd.GUILD_THREADS_ONLY.has(t) ? R.Z.Messages.CREATE_FORUM_POSTS : S && t === A.d4z.GUILD_CATEGORY ? R.Z.Messages.SEND_MESSAGES_AND_CREATE_FORUM_POSTS : R.Z.Messages.SEND_MESSAGES,
                        description: function() {
                            switch (t) {
                                case A.d4z.GUILD_CATEGORY:
                                    return S ? R.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_CATEGORY : R.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_CATEGORY;
                                case A.d4z.GUILD_FORUM:
                                    return (null == s ? void 0 : s.createPostsDisabled) && !E.isMediaChannel() ? n.getForumChannelPermissionText() : R.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT;
                                case A.d4z.GUILD_MEDIA:
                                    return R.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT;
                                case A.d4z.GUILD_ANNOUNCEMENT:
                                    return R.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_ANNOUNCEMENT.format({
                                        articleURL: M.Z.getArticleURL(A.BhN.ANNOUNCEMENT_CHANNELS)
                                    });
                                case A.d4z.GUILD_VOICE:
                                    return N.getTextInVoiceSendMessageChannelPermissionText(null == s ? void 0 : s.sendMessagesDisabled);
                                default:
                                    return R.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: A.Plq.SEND_MESSAGES
                    }), i(I, A.Plq.EMBED_LINKS.toString(), {
                        title: R.Z.Messages.EMBED_LINKS,
                        description: t === A.d4z.GUILD_CATEGORY ? R.Z.Messages.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION_CATEGORY : R.Z.Messages.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION_TEXT,
                        flag: A.Plq.EMBED_LINKS
                    }), i(I, A.Plq.ATTACH_FILES.toString(), {
                        title: R.Z.Messages.ATTACH_FILES,
                        description: t === A.d4z.GUILD_CATEGORY ? R.Z.Messages.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION_CATEGORY : R.Z.Messages.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION_TEXT,
                        flag: A.Plq.ATTACH_FILES
                    }), i(I, A.Plq.ADD_REACTIONS.toString(), {
                        title: R.Z.Messages.ADD_REACTIONS,
                        description: function() {
                            switch (t) {
                                case A.d4z.GUILD_CATEGORY:
                                    return R.Z.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_CATEGORY;
                                case A.d4z.GUILD_VOICE:
                                    return R.Z.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_TEXT_WITH_VOICE_CHANNEL_EFFECTS;
                                default:
                                    return R.Z.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: A.Plq.ADD_REACTIONS
                    }), i(I, A.Plq.USE_EXTERNAL_EMOJIS.toString(), {
                        title: R.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS,
                        description: t === A.d4z.GUILD_CATEGORY ? R.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION_CATEGORY : R.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION_TEXT,
                        flag: A.Plq.USE_EXTERNAL_EMOJIS
                    }), i(I, A.Plq.USE_EXTERNAL_STICKERS.toString(), {
                        title: R.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS,
                        description: t === A.d4z.GUILD_CATEGORY ? R.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION_CATEGORY : R.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION_TEXT,
                        flag: A.Plq.USE_EXTERNAL_STICKERS
                    }), i(I, A.Plq.MENTION_EVERYONE.toString(), {
                        title: t === A.d4z.GUILD_STAGE_VOICE ? R.Z.Messages.MENTION_EVERYONE_STAGE : R.Z.Messages.MENTION_EVERYONE,
                        description: t === A.d4z.GUILD_CATEGORY ? R.Z.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_CATEGORY : t === A.d4z.GUILD_STAGE_VOICE ? R.Z.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_STAGE : R.Z.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_TEXT,
                        flag: A.Plq.MENTION_EVERYONE
                    }), i(I, A.Plq.MANAGE_MESSAGES.toString(), {
                        title: R.Z.Messages.MANAGE_MESSAGES,
                        description: function() {
                            switch (t) {
                                case A.d4z.GUILD_CATEGORY:
                                    return R.Z.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_CATEGORY;
                                case A.d4z.GUILD_ANNOUNCEMENT:
                                    return R.Z.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_ANNOUNCEMENT.format({
                                        articleURL: M.Z.getArticleURL(A.BhN.ANNOUNCEMENT_CHANNELS)
                                    });
                                default:
                                    return R.Z.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: A.Plq.MANAGE_MESSAGES
                    }), i(I, A.Plq.READ_MESSAGE_HISTORY.toString(), {
                        title: A.TPd.GUILD_THREADS_ONLY.has(t) ? R.Z.Messages.READ_POST_HISTORY : R.Z.Messages.READ_MESSAGE_HISTORY,
                        description: function() {
                            switch (t) {
                                case A.d4z.GUILD_CATEGORY:
                                    return R.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_CATEGORY;
                                case A.d4z.GUILD_VOICE:
                                    return N.getTextInVoiceReadMessageHistoryChannelPermissionText(null == s ? void 0 : s.readMessageHistoryDisabled);
                                case A.d4z.GUILD_FORUM:
                                case A.d4z.GUILD_MEDIA:
                                    return R.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_FORUM_CHANNEL;
                                default:
                                    return R.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: A.Plq.READ_MESSAGE_HISTORY
                    }), i(I, A.Plq.SEND_TTS_MESSAGES.toString(), {
                        title: R.Z.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES,
                        description: t === A.d4z.GUILD_CATEGORY ? R.Z.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION_CATEGORY : R.Z.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION_TEXT,
                        flag: A.Plq.SEND_TTS_MESSAGES
                    }), i(I, A.Plq.USE_APPLICATION_COMMANDS.toString(), {
                        title: R.Z.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS,
                        description: t === A.d4z.GUILD_CATEGORY ? R.Z.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_DESCRIPTION_CATEGORY : R.Z.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_DESCRIPTION_TEXT,
                        flag: A.Plq.USE_APPLICATION_COMMANDS
                    }), i(I, A.Plq.SEND_VOICE_MESSAGES.toString(), {
                        title: R.Z.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE,
                        description: t === A.d4z.GUILD_CATEGORY ? R.Z.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGES_DESCRIPTION_CATEGORY : R.Z.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGES_DESCRIPTION_TEXT,
                        flag: A.Plq.SEND_VOICE_MESSAGES
                    }), i(I, A.Plq.USE_CLYDE_AI.toString(), {
                        title: R.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI,
                        description: t === A.d4z.GUILD_CATEGORY ? R.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION : R.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI_CHANNEL_DESCRIPTION,
                        flag: A.Plq.USE_CLYDE_AI
                    }), i(I, A.Plq.CONNECT.toString(), {
                        title: R.Z.Messages.CONNECT,
                        description: function() {
                            if (e) switch (t) {
                                case A.d4z.GUILD_CATEGORY:
                                    return R.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_CATEGORY_EVERYONE;
                                case A.d4z.GUILD_STAGE_VOICE:
                                    return R.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_STAGE_EVERYONE;
                                case A.d4z.GUILD_TEXT:
                                case A.d4z.GUILD_FORUM:
                                case A.d4z.GUILD_MEDIA:
                                    return R.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_THREADS_EVERYONE;
                                default:
                                    return R.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_VOICE_EVERYONE
                            }
                            switch (t) {
                                case A.d4z.GUILD_CATEGORY:
                                    return R.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_CATEGORY;
                                case A.d4z.GUILD_STAGE_VOICE:
                                    return R.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_STAGE;
                                case A.d4z.GUILD_TEXT:
                                case A.d4z.GUILD_FORUM:
                                case A.d4z.GUILD_MEDIA:
                                    return R.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_THREADS;
                                default:
                                    return R.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: A.Plq.CONNECT
                    }), i(I, A.Plq.SPEAK.toString(), {
                        title: R.Z.Messages.SPEAK,
                        description: function() {
                            switch (t) {
                                case A.d4z.GUILD_CATEGORY:
                                    return R.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_CATEGORY;
                                case A.d4z.GUILD_STAGE_VOICE:
                                    return R.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_STAGE;
                                case A.d4z.GUILD_TEXT:
                                case A.d4z.GUILD_FORUM:
                                case A.d4z.GUILD_MEDIA:
                                    return R.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_THREADS;
                                default:
                                    return R.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: A.Plq.SPEAK
                    }), i(I, A.Plq.STREAM.toString(), {
                        title: R.Z.Messages.VIDEO,
                        description: function() {
                            switch (t) {
                                case A.d4z.GUILD_CATEGORY:
                                    return R.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_CATEGORY;
                                case A.d4z.GUILD_TEXT:
                                case A.d4z.GUILD_FORUM:
                                case A.d4z.GUILD_MEDIA:
                                    return R.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_THREADS;
                                case A.d4z.GUILD_STAGE_VOICE:
                                    return R.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_STAGE;
                                default:
                                    return R.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: A.Plq.STREAM
                    }), i(I, A.Plq.USE_EMBEDDED_ACTIVITIES.toString(), {
                        title: R.Z.Messages.USE_EMBEDDED_ACTIVITIES,
                        description: function() {
                            switch (t) {
                                case A.d4z.GUILD_CATEGORY:
                                    return R.Z.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_CATEGORY;
                                case A.d4z.GUILD_FORUM:
                                case A.d4z.GUILD_MEDIA:
                                    return R.Z.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_THREADS;
                                default:
                                    return R.Z.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_CHANNEL
                            }
                        }(),
                        flag: A.Plq.USE_EMBEDDED_ACTIVITIES
                    }), i(I, A.Plq.USE_SOUNDBOARD.toString(), {
                        title: R.Z.Messages.USE_SOUNDBOARD,
                        description: function() {
                            switch (t) {
                                case A.d4z.GUILD_CATEGORY:
                                    return R.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_CATEGORY.format({
                                        helpCenterArticle: M.Z.getArticleURL(A.BhN.SOUNDBOARD)
                                    });
                                case A.d4z.GUILD_TEXT:
                                case A.d4z.GUILD_FORUM:
                                case A.d4z.GUILD_MEDIA:
                                    return R.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_THREADS.format({
                                        helpCenterArticle: M.Z.getArticleURL(A.BhN.SOUNDBOARD)
                                    });
                                default:
                                    return R.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_VOICE.format({
                                        helpCenterArticle: M.Z.getArticleURL(A.BhN.SOUNDBOARD)
                                    })
                            }
                        }(),
                        flag: A.Plq.USE_SOUNDBOARD
                    }), i(I, A.Plq.USE_EXTERNAL_SOUNDS.toString(), {
                        title: R.Z.Messages.USE_EXTERNAL_SOUNDS,
                        description: R.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_SOUNDS_DESCRIPTION,
                        flag: A.Plq.USE_EXTERNAL_SOUNDS
                    }), i(I, A.Plq.USE_VAD.toString(), {
                        title: R.Z.Messages.USE_VAD,
                        description: function() {
                            switch (t) {
                                case A.d4z.GUILD_CATEGORY:
                                    return R.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_CATEGORY;
                                case A.d4z.GUILD_STAGE_VOICE:
                                    return R.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_STAGE;
                                case A.d4z.GUILD_TEXT:
                                case A.d4z.GUILD_FORUM:
                                case A.d4z.GUILD_MEDIA:
                                    return R.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_THREADS;
                                default:
                                    return R.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: A.Plq.USE_VAD
                    }), i(I, A.Plq.PRIORITY_SPEAKER.toString(), {
                        title: R.Z.Messages.PRIORITY_SPEAKER,
                        description: function() {
                            0;
                            var E = {
                                keybind: R.Z.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
                                onClick: function() {
                                    _.Z.open(A.oAB.KEYBINDS)
                                }
                            };
                            switch (t) {
                                case A.d4z.GUILD_CATEGORY:
                                    return R.Z.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_CATEGORY.format(E);
                                case A.d4z.GUILD_TEXT:
                                case A.d4z.GUILD_FORUM:
                                case A.d4z.GUILD_MEDIA:
                                    return R.Z.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_THREADS.format(E);
                                default:
                                    return R.Z.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_VOICE.format(E)
                            }
                        }(),
                        flag: A.Plq.PRIORITY_SPEAKER
                    }), i(I, A.Plq.MUTE_MEMBERS.toString(), {
                        title: R.Z.Messages.MUTE_MEMBERS,
                        description: function() {
                            switch (t) {
                                case A.d4z.GUILD_CATEGORY:
                                    return R.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_CATEGORY;
                                case A.d4z.GUILD_STAGE_VOICE:
                                    return R.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_STAGE;
                                case A.d4z.GUILD_TEXT:
                                case A.d4z.GUILD_FORUM:
                                case A.d4z.GUILD_MEDIA:
                                    return R.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_THREADS;
                                default:
                                    return R.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: A.Plq.MUTE_MEMBERS
                    }), i(I, A.Plq.DEAFEN_MEMBERS.toString(), {
                        title: R.Z.Messages.DEAFEN_MEMBERS,
                        description: function() {
                            switch (t) {
                                case A.d4z.GUILD_CATEGORY:
                                    return R.Z.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_CATEGORY;
                                case A.d4z.GUILD_TEXT:
                                case A.d4z.GUILD_FORUM:
                                case A.d4z.GUILD_MEDIA:
                                    return R.Z.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_THREADS;
                                default:
                                    return R.Z.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: A.Plq.DEAFEN_MEMBERS
                    }), i(I, A.Plq.MOVE_MEMBERS.toString(), {
                        title: R.Z.Messages.MOVE_MEMBERS,
                        description: function() {
                            switch (t) {
                                case A.d4z.GUILD_CATEGORY:
                                    return R.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_CATEGORY;
                                case A.d4z.GUILD_STAGE_VOICE:
                                    return R.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_STAGE;
                                case A.d4z.GUILD_TEXT:
                                case A.d4z.GUILD_FORUM:
                                case A.d4z.GUILD_MEDIA:
                                    return R.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_THREADS;
                                default:
                                    return R.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: A.Plq.MOVE_MEMBERS
                    }), i(I, A.Plq.REQUEST_TO_SPEAK.toString(), {
                        title: R.Z.Messages.REQUEST_TO_SPEAK,
                        description: t === A.d4z.GUILD_CATEGORY ? R.Z.Messages.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION_CATEGORY : R.Z.Messages.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION_STAGE,
                        flag: A.Plq.REQUEST_TO_SPEAK
                    }), i(I, A.Plq.MANAGE_THREADS.toString(), {
                        title: A.TPd.GUILD_THREADS_ONLY.has(t) ? R.Z.Messages.MANAGE_FORUM_POSTS : S && t === A.d4z.GUILD_CATEGORY ? R.Z.Messages.MANAGE_THREADS_AND_FORUM_POSTS : R.Z.Messages.MANAGE_THREADS,
                        description: function() {
                            switch (t) {
                                case A.d4z.GUILD_CATEGORY:
                                    return S ? R.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION_CATEGORY : R.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION_CATEGORY;
                                case A.d4z.GUILD_FORUM:
                                case A.d4z.GUILD_MEDIA:
                                    return R.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION_TEXT;
                                default:
                                    return R.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: A.Plq.MANAGE_THREADS
                    }), i(I, A.Plq.CREATE_PUBLIC_THREADS.toString(), {
                        title: R.Z.Messages.CREATE_PUBLIC_THREADS,
                        description: t === A.d4z.GUILD_CATEGORY ? R.Z.Messages.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION_CATEGORY : R.Z.Messages.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION_TEXT,
                        flag: A.Plq.CREATE_PUBLIC_THREADS
                    }), i(I, A.Plq.CREATE_PRIVATE_THREADS.toString(), {
                        title: R.Z.Messages.CREATE_PRIVATE_THREADS,
                        description: t === A.d4z.GUILD_CATEGORY ? R.Z.Messages.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION_CATEGORY : R.Z.Messages.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION_TEXT,
                        flag: A.Plq.CREATE_PRIVATE_THREADS
                    }),
                    i(I, A.Plq.SEND_MESSAGES_IN_THREADS.toString(), {
                        title: A.TPd.GUILD_THREADS_ONLY.has(t) ? R.Z.Messages.SEND_MESSAGES_IN_FORUM_POSTS : S && t === A.d4z.GUILD_CATEGORY ? R.Z.Messages.SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS : R.Z.Messages.SEND_MESSAGES_IN_THREADS,
                        description: function() {
                            switch (t) {
                                case A.d4z.GUILD_CATEGORY:
                                    return S ? R.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION_CATEGORY : R.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION_CATEGORY;
                                case A.d4z.GUILD_FORUM:
                                case A.d4z.GUILD_MEDIA:
                                    return R.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION_TEXT;
                                default:
                                    return R.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: A.Plq.SEND_MESSAGES_IN_THREADS
                    }), i(I, A.Plq.MANAGE_EVENTS.toString(), {
                        title: R.Z.Messages.MANAGE_EVENTS,
                        description: t === A.d4z.GUILD_CATEGORY ? R.Z.Messages.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION_CATEGORY : R.Z.Messages.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION_CHANNEL,
                        flag: A.Plq.MANAGE_EVENTS
                    }), i(I, A.Plq.CREATE_EVENTS.toString(), {
                        title: R.Z.Messages.CREATE_EVENTS,
                        description: t === A.d4z.GUILD_CATEGORY ? R.Z.Messages.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION_CATEGORY : R.Z.Messages.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION_CHANNEL,
                        flag: A.Plq.CREATE_EVENTS
                    }), i(I, A.Plq.SET_VOICE_CHANNEL_STATUS.toString(), {
                        title: R.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE,
                        description: R.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_DESCRIPTION,
                        flag: A.Plq.SET_VOICE_CHANNEL_STATUS
                    }), I
            }
        },
        771575: (E, e, S) => {
            S.d(e, {
                Q1: () => o,
                _0: () => L,
                RK: () => G,
                yi: () => g,
                DT: () => d,
                hz: () => U,
                Pq: () => f,
                HO: () => Z,
                Ef: () => h,
                NZ: () => V
            });
            var _ = S(441143),
                s = S.n(_),
                I = S(940060),
                t = S(281110),
                R = S(761953),
                O = (S(327499), S(73904)),
                n = S(396043),
                T = S(715107),
                N = S(407561),
                a = S(563135),
                r = S(915840),
                M = S(68537),
                A = S(341971),
                i = S(525261),
                D = S(2590);

            function l(E, e, S, _, s, I, t) {
                try {
                    var R = E[I](t),
                        O = R.value
                } catch (E) {
                    S(E);
                    return
                }
                R.done ? e(O) : Promise.resolve(O).then(_, s)
            }

            function P(E) {
                return function() {
                    var e = this,
                        S = arguments;
                    return new Promise((function(_, s) {
                        var I = E.apply(e, S);

                        function t(E) {
                            l(I, _, s, t, R, "next", E)
                        }

                        function R(E) {
                            l(I, _, s, t, R, "throw", E)
                        }
                        t(void 0)
                    }))
                }
            }

            function C(E, e, S) {
                e in E ? Object.defineProperty(E, e, {
                    value: S,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : E[e] = S;
                return E
            }

            function c(E) {
                for (var e = 1; e < arguments.length; e++) {
                    var S = null != arguments[e] ? arguments[e] : {},
                        _ = Object.keys(S);
                    "function" == typeof Object.getOwnPropertySymbols && (_ = _.concat(Object.getOwnPropertySymbols(S).filter((function(E) {
                        return Object.getOwnPropertyDescriptor(S, E).enumerable
                    }))));
                    _.forEach((function(e) {
                        C(E, e, S[e])
                    }))
                }
                return E
            }
            var u = function(E, e) {
                var S, _, s, I, t = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0]) throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return I = {
                    next: R(0),
                    throw: R(1),
                    return: R(2)
                }, "function" == typeof Symbol && (I[Symbol.iterator] = function() {
                    return this
                }), I;

                function R(I) {
                    return function(R) {
                        return function(I) {
                            if (S) throw new TypeError("Generator is already executing.");
                            for (; t;) try {
                                if (S = 1,
                                    _ && (s = 2 & I[0] ? _.return : I[0] ? _.throw || ((s = _.return) && s.call(_), 0) : _.next) && !(s = s.call(_, I[1])).done) return s;
                                (_ = 0, s) && (I = [2 & I[0], s.value]);
                                switch (I[0]) {
                                    case 0:
                                    case 1:
                                        s = I;
                                        break;
                                    case 4:
                                        t.label++;
                                        return {
                                            value: I[1], done: !1
                                        };
                                    case 5:
                                        t.label++;
                                        _ = I[1];
                                        I = [0];
                                        continue;
                                    case 7:
                                        I = t.ops.pop();
                                        t.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = t.trys, s = s.length > 0 && s[s.length - 1]) && (6 === I[0] || 2 === I[0])) {
                                            t = 0;
                                            continue
                                        }
                                        if (3 === I[0] && (!s || I[1] > s[0] && I[1] < s[3])) {
                                            t.label = I[1];
                                            break
                                        }
                                        if (6 === I[0] && t.label < s[1]) {
                                            t.label = s[1];
                                            s = I;
                                            break
                                        }
                                        if (s && t.label < s[2]) {
                                            t.label = s[2];
                                            t.ops.push(I);
                                            break
                                        }
                                        s[2] && t.ops.pop();
                                        t.trys.pop();
                                        continue
                                }
                                I = e.call(E, t)
                            } catch (E) {
                                I = [6, E];
                                _ = 0
                            } finally {
                                S = s = 0
                            }
                            if (5 & I[0]) throw I[1];
                            return {
                                value: I[0] ? I[1] : void 0,
                                done: !0
                            }
                        }([I, R])
                    }
                }
            };

            function o(E, e) {
                var S = E.getGuildId();
                s()(null != S, "This channel cannot be guildless.");
                e && (0, n.yw)(D.rMx.REQUEST_TO_SPEAK_INITIATED, c({}, (0, M.s$)(E)));
                return t.ZP.patch({
                    url: D.ANM.UPDATE_VOICE_STATE(S),
                    body: {
                        request_to_speak_timestamp: e ? (new Date).toISOString() : null,
                        channel_id: E.id
                    }
                })
            }

            function L(E, e) {
                var S = E.getGuildId();
                s()(null != S, "This channel cannot be guildless.");
                return t.ZP.patch({
                    url: D.ANM.UPDATE_VOICE_STATE(S, e),
                    body: {
                        suppress: !1,
                        request_to_speak_timestamp: (new Date).toISOString(),
                        channel_id: E.id
                    }
                })
            }

            function G(E, e) {
                var S = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    _ = null == E ? void 0 : E.getGuildId();
                s()(null != _, "This channel cannot be guildless.");
                var I = N.Z.getVoiceStateForChannel(E.id),
                    R = (0, i.gf)(I);
                R !== i.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || e || (0, n.yw)(D.rMx.PROMOTED_TO_SPEAKER, c({}, (0, M.s$)(E)));
                return t.ZP.patch({
                    url: D.ANM.UPDATE_VOICE_STATE(_),
                    body: c({
                        suppress: e,
                        request_to_speak_timestamp: null,
                        channel_id: E.id
                    }, S ? {
                        silent: S
                    } : {})
                })
            }

            function g(E) {
                var e = null == E ? void 0 : E.getGuildId();
                s()(null != e, "This channel cannot be guildless.");
                return t.ZP.patch({
                    url: D.ANM.UPDATE_VOICE_STATE(e),
                    body: {
                        suppress: !0,
                        channel_id: E.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function d(E, e, S) {
                var _ = E.getGuildId();
                s()(null != _, "This channel cannot be guildless.");
                return t.ZP.patch({
                    url: D.ANM.UPDATE_VOICE_STATE(_, e),
                    body: {
                        suppress: S,
                        channel_id: E.id
                    }
                })
            }

            function U(E, e) {
                if (null != e && null != E) {
                    var S = e.getGuildId();
                    s()(null != S, "This channel cannot be guildless.");
                    d(e, E.id, !0);
                    return t.ZP.patch({
                        url: D.ANM.UPDATE_VOICE_STATE(S, E.id),
                        body: {
                            suppress: !0,
                            channel_id: e.id,
                            self_video: !1,
                            self_stream: !1
                        }
                    })
                }
            }

            function f(E, e, S) {
                var _ = E.getGuildId();
                s()(null != _, "Channel cannot be guildless");
                var t = E.permissionOverwrites[_],
                    n = c({
                        id: _,
                        type: O.BN.ROLE,
                        allow: a.ZP.NONE,
                        deny: a.ZP.NONE
                    }, t);
                if (S) {
                    n.allow = I.Z.add(n.allow, e);
                    n.deny = I.Z.remove(n.deny, e)
                } else {
                    n.allow = I.Z.remove(n.allow, e);
                    n.deny = I.Z.add(n.deny, e)
                }
                R.Z.updatePermissionOverwrite(E.id, n)
            }

            function Z(E, e, S, _) {
                return p.apply(this, arguments)
            }

            function p() {
                return (p = P((function(E, e, S, _) {
                    var s;
                    return u(this, (function(I) {
                        switch (I.label) {
                            case 0:
                                if ("" === e) return [2];
                                T.Z.getVoiceChannelId() === E.id || (0, r.TM)(E);
                                return [4, (0, A.me)(E.id, e, S, _)];
                            case 1:
                                s = I.sent();
                                G(E, !1, !0);
                                return [2, s]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function h(E, e, S) {
                return Y.apply(this, arguments)
            }

            function Y() {
                return (Y = P((function(E, e, S) {
                    return u(this, (function(_) {
                        switch (_.label) {
                            case 0:
                                return "" === e ? [2] : [4, (0, A.Dk)(E.id, e, S)];
                            case 1:
                                return [2, _.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function V(E) {
                return H.apply(this, arguments)
            }

            function H() {
                return (H = P((function(E) {
                    return u(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, (0, A.Ix)(E.id)];
                            case 1:
                                e.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        68537: (E, e, S) => {
            S.d(e, {
                ER: () => N,
                kk: () => a,
                s$: () => r
            });
            S(496486);
            var _ = S(563367),
                s = S(773148),
                I = S(563135),
                t = S(766496),
                R = S(79462),
                O = S(2590),
                n = S(449518),
                T = S(473708);

            function N(E, e, S, _) {
                var I = e[0],
                    t = s.ZP.getName(E, S, I),
                    R = null != _ ? _ : e.length;
                return 1 === R && null != I ? t : null == I ? T.Z.Messages.SPEAKING_COUNT.format({
                    count: R
                }) : T.Z.Messages.USER_SUMMARY_WITH_OTHERS.format({
                    name: t,
                    count: R - 1
                })
            }

            function a(E, e) {
                switch (E) {
                    case n.aC.OWNER:
                        return T.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
                    case n.aC.ADMINISTRATOR:
                        return T.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
                    case n.aC.MEMBER:
                    case n.aC.ROLE:
                        return e ? T.Z.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : T.Z.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
                    case n.aC.EMPTY_STATE:
                        return null
                }
                return null
            }

            function r(E) {
                var e = t.Z.getStageInstanceByChannel(E.id);
                return {
                    channel_id: E.id,
                    guild_id: E.guild_id,
                    topic: null == e ? void 0 : e.topic,
                    media_session_id: _.Z.getMediaSessionId(),
                    request_to_speak_state: I.ZP.canEveryoneRole(O.Plq.REQUEST_TO_SPEAK, E) ? R.BM.EVERYONE : R.BM.NO_ONE,
                    stage_instance_id: null == e ? void 0 : e.id
                }
            }
        },
        341971: (E, e, S) => {
            S.d(e, {
                me: () => O,
                Dk: () => T,
                Ix: () => a
            });
            var _ = S(281110),
                s = S(2590);

            function I(E, e, S, _, s, I, t) {
                try {
                    var R = E[I](t),
                        O = R.value
                } catch (E) {
                    S(E);
                    return
                }
                R.done ? e(O) : Promise.resolve(O).then(_, s)
            }

            function t(E) {
                return function() {
                    var e = this,
                        S = arguments;
                    return new Promise((function(_, s) {
                        var t = E.apply(e, S);

                        function R(E) {
                            I(t, _, s, R, O, "next", E)
                        }

                        function O(E) {
                            I(t, _, s, R, O, "throw", E)
                        }
                        R(void 0)
                    }))
                }
            }
            var R = function(E, e) {
                var S, _, s, I, t = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0]) throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return I = {
                    next: R(0),
                    throw: R(1),
                    return: R(2)
                }, "function" == typeof Symbol && (I[Symbol.iterator] = function() {
                    return this
                }), I;

                function R(I) {
                    return function(R) {
                        return function(I) {
                            if (S) throw new TypeError("Generator is already executing.");
                            for (; t;) try {
                                if (S = 1, _ && (s = 2 & I[0] ? _.return : I[0] ? _.throw || ((s = _.return) && s.call(_), 0) : _.next) && !(s = s.call(_, I[1])).done) return s;
                                (_ = 0, s) && (I = [2 & I[0], s.value]);
                                switch (I[0]) {
                                    case 0:
                                    case 1:
                                        s = I;
                                        break;
                                    case 4:
                                        t.label++;
                                        return {
                                            value: I[1], done: !1
                                        };
                                    case 5:
                                        t.label++;
                                        _ = I[1];
                                        I = [0];
                                        continue;
                                    case 7:
                                        I = t.ops.pop();
                                        t.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = t.trys, s = s.length > 0 && s[s.length - 1]) && (6 === I[0] || 2 === I[0])) {
                                            t = 0;
                                            continue
                                        }
                                        if (3 === I[0] && (!s || I[1] > s[0] && I[1] < s[3])) {
                                            t.label = I[1];
                                            break
                                        }
                                        if (6 === I[0] && t.label < s[1]) {
                                            t.label = s[1];
                                            s = I;
                                            break
                                        }
                                        if (s && t.label < s[2]) {
                                            t.label = s[2];
                                            t.ops.push(I);
                                            break
                                        }
                                        s[2] && t.ops.pop();
                                        t.trys.pop();
                                        continue
                                }
                                I = e.call(E, t)
                            } catch (E) {
                                I = [6, E];
                                _ = 0
                            } finally {
                                S = s = 0
                            }
                            if (5 & I[0]) throw I[1];
                            return {
                                value: I[0] ? I[1] : void 0,
                                done: !0
                            }
                        }([I, R])
                    }
                }
            };

            function O(E, e, S, _, s) {
                return n.apply(this, arguments)
            }

            function n() {
                return (n = t((function(E, e, S, I, t) {
                    return R(this, (function(R) {
                        switch (R.label) {
                            case 0:
                                return [4, _.ZP.post({
                                    url: s.ANM.STAGE_INSTANCES,
                                    body: {
                                        channel_id: E,
                                        topic: e,
                                        privacy_level: S,
                                        guild_scheduled_event_id: t,
                                        send_start_notification: I
                                    }
                                })];
                            case 1:
                                return [2, R.sent().body]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function T(E, e, S) {
                return N.apply(this, arguments)
            }

            function N() {
                return (N = t((function(E, e, S) {
                    return R(this, (function(I) {
                        switch (I.label) {
                            case 0:
                                return [4, _.ZP.patch({
                                    url: s.ANM.STAGE_INSTANCE(E),
                                    body: {
                                        topic: e,
                                        privacy_level: S
                                    }
                                })];
                            case 1:
                                return [2, I.sent().body]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function a(E) {
                return _.ZP.delete(s.ANM.STAGE_INSTANCE(E))
            }
        }
    }
]);