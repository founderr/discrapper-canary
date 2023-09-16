"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [27979], {
        427979: (E, S, _) => {
            _.d(S, {
                WW: () => P,
                s4: () => M,
                zO: () => i,
                Ny: () => D,
                vq: () => C,
                WV: () => n,
                aW: () => r,
                FX: () => e,
                kv: () => o,
                uu: () => s,
                _u: () => L
            });
            var I = _(520453);

            function A(E, S, _) {
                S in E ? Object.defineProperty(E, S, {
                    value: _,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : E[S] = _;
                return E
            }

            function N(E) {
                var S = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                S || (E.permissions = E.permissions.filter((function(E) {
                    return !E.isExperimental
                })));
                return E
            }

            function R(E, S) {
                return E.map((function(E) {
                    return S[E.toString()]
                }))
            }

            function P(E, S) {
                var _;
                return A(_ = {}, I.Pl.VIEW_CHANNEL.toString(), {
                        title: E.ROLE_PERMISSIONS_VIEW_CHANNEL,
                        description: E.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION,
                        flag: I.Pl.VIEW_CHANNEL
                    }), A(_, I.Pl.MANAGE_CHANNELS.toString(), {
                        title: E.MANAGE_CHANNELS,
                        description: E.ROLE_PERMISSIONS_MANAGE_CHANNELS_DESCRIPTION,
                        flag: I.Pl.MANAGE_CHANNELS
                    }), A(_, I.Pl.MANAGE_ROLES.toString(), {
                        title: E.MANAGE_ROLES,
                        description: E.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION,
                        flag: I.Pl.MANAGE_ROLES
                    }), A(_, I.Pl.MANAGE_GUILD_EXPRESSIONS.toString(), {
                        title: E.MANAGE_EXPRESSIONS,
                        description: E.ROLE_PERMISSIONS_MANAGE_EXPRESSIONS_DESCRIPTION,
                        flag: I.Pl.MANAGE_GUILD_EXPRESSIONS
                    }), A(_, I.Pl.CREATE_GUILD_EXPRESSIONS.toString(), {
                        title: E.CREATE_EXPRESSIONS,
                        description: E.ROLE_PERMISSIONS_CREATE_EXPRESSIONS_DESCRIPTION,
                        flag: I.Pl.CREATE_GUILD_EXPRESSIONS
                    }), A(_, I.Pl.VIEW_AUDIT_LOG.toString(), {
                        title: E.VIEW_AUDIT_LOG,
                        description: E.ROLE_PERMISSIONS_VIEW_AUDIT_LOG_DESCRIPTION,
                        flag: I.Pl.VIEW_AUDIT_LOG
                    }), A(_, I.Pl.VIEW_GUILD_ANALYTICS.toString(), {
                        title: E.VIEW_GUILD_ANALYTICS,
                        description: E.ROLE_PERMISSIONS_VIEW_GUILD_ANALYTICS_DESCRIPTION,
                        flag: I.Pl.VIEW_GUILD_ANALYTICS
                    }), A(_, I.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString(), {
                        title: E.VIEW_CREATOR_MONETIZATION_ANALYTICS,
                        description: E.ROLE_PERMISSIONS_VIEW_CREATOR_MONETIZATION_ANALYTICS_DESCRIPTION,
                        flag: I.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS
                    }),
                    A(_, I.Pl.MANAGE_WEBHOOKS.toString(), {
                        title: E.MANAGE_WEBHOOKS,
                        description: E.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION,
                        flag: I.Pl.MANAGE_WEBHOOKS
                    }), A(_, I.Pl.MANAGE_GUILD.toString(), {
                        title: E.MANAGE_SERVER,
                        description: E.ROLE_PERMISSIONS_MANAGE_SERVER_DESCRIPTION,
                        flag: I.Pl.MANAGE_GUILD
                    }), A(_, I.Pl.CREATE_INSTANT_INVITE.toString(), {
                        title: E.CREATE_INSTANT_INVITE,
                        description: E.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION,
                        flag: I.Pl.CREATE_INSTANT_INVITE
                    }), A(_, I.Pl.CHANGE_NICKNAME.toString(), {
                        title: E.CHANGE_NICKNAME,
                        description: E.ROLE_PERMISSIONS_CHANGE_NICKNAME_DESCRIPTION,
                        flag: I.Pl.CHANGE_NICKNAME
                    }), A(_, I.Pl.MANAGE_NICKNAMES.toString(), {
                        title: E.MANAGE_NICKNAMES,
                        description: E.ROLE_PERMISSIONS_MANAGE_NICKNAMES_DESCRIPTION,
                        flag: I.Pl.MANAGE_NICKNAMES
                    }), A(_, I.Pl.KICK_MEMBERS.toString(), {
                        title: S.showMembershipManualApprovalPermissions ? E.KICK_MEMBERS_AND_REVIEW_APPLICATIONS : E.KICK_MEMBERS,
                        description: S.showMembershipManualApprovalPermissions ? E.ROLE_PERMISSIONS_KICK_MEMBERS_AND_REVIEW_APPLICATION_DESCRIPTION : E.ROLE_PERMISSIONS_KICK_MEMBERS_DESCRIPTION,
                        flag: I.Pl.KICK_MEMBERS
                    }), A(_, I.Pl.BAN_MEMBERS.toString(), {
                        title: E.BAN_MEMBERS,
                        description: E.ROLE_PERMISSIONS_BAN_MEMBERS_DESCRIPTION,
                        flag: I.Pl.BAN_MEMBERS
                    }), A(_, I.Pl.MODERATE_MEMBERS.toString(), {
                        title: E.MODERATE_MEMBER,
                        description: E.ROLE_PERMISSIONS_MODERATE_MEMBER_DESCRIPTION,
                        flag: I.Pl.MODERATE_MEMBERS
                    }), A(_, I.Pl.SEND_MESSAGES.toString(), {
                        title: S.showForumPermissions ? E.SEND_MESSAGES_AND_CREATE_FORUM_POSTS : E.SEND_MESSAGES,
                        description: S.showForumPermissions ? E.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION : E.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION,
                        flag: I.Pl.SEND_MESSAGES
                    }), A(_, I.Pl.EMBED_LINKS.toString(), {
                        title: E.EMBED_LINKS,
                        description: E.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION,
                        flag: I.Pl.EMBED_LINKS
                    }), A(_, I.Pl.ATTACH_FILES.toString(), {
                        title: E.ATTACH_FILES,
                        description: E.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION,
                        flag: I.Pl.ATTACH_FILES
                    }), A(_, I.Pl.ADD_REACTIONS.toString(), {
                        title: E.ADD_REACTIONS,
                        description: E.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION,
                        flag: I.Pl.ADD_REACTIONS
                    }), A(_, I.Pl.USE_EXTERNAL_EMOJIS.toString(), {
                        title: E.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS,
                        description: E.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION,
                        flag: I.Pl.USE_EXTERNAL_EMOJIS
                    }), A(_, I.Pl.USE_EXTERNAL_STICKERS.toString(), {
                        title: E.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS,
                        description: E.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION,
                        flag: I.Pl.USE_EXTERNAL_STICKERS
                    }), A(_, I.Pl.MENTION_EVERYONE.toString(), {
                        title: E.MENTION_EVERYONE,
                        description: E.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION,
                        flag: I.Pl.MENTION_EVERYONE
                    }), A(_, I.Pl.MANAGE_MESSAGES.toString(), {
                        title: E.MANAGE_MESSAGES,
                        description: E.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION,
                        flag: I.Pl.MANAGE_MESSAGES
                    }), A(_, I.Pl.READ_MESSAGE_HISTORY.toString(), {
                        title: E.READ_MESSAGE_HISTORY,
                        description: E.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION,
                        flag: I.Pl.READ_MESSAGE_HISTORY
                    }), A(_, I.Pl.SEND_TTS_MESSAGES.toString(), {
                        title: E.ROLE_PERMISSIONS_SEND_TTS_MESSAGES,
                        description: E.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION,
                        flag: I.Pl.SEND_TTS_MESSAGES
                    }), A(_, I.Pl.USE_APPLICATION_COMMANDS.toString(), {
                        title: E.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS,
                        description: E.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_GUILD_DESCRIPTION,
                        flag: I.Pl.USE_APPLICATION_COMMANDS
                    }), A(_, I.Pl.SEND_VOICE_MESSAGES.toString(), {
                        title: E.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE,
                        description: E.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE_GUILD_DESCRIPTION,
                        flag: I.Pl.SEND_VOICE_MESSAGES
                    }), A(_, I.Pl.USE_CLYDE_AI.toString(), {
                        title: E.ROLE_PERMISSIONS_USE_CLYDE_AI,
                        description: E.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION,
                        flag: I.Pl.USE_CLYDE_AI
                    }), A(_, I.Pl.CONNECT.toString(), {
                        title: E.CONNECT,
                        description: E.ROLE_PERMISSIONS_CONNECT_DESCRIPTION,
                        flag: I.Pl.CONNECT
                    }), A(_, I.Pl.SPEAK.toString(), {
                        title: E.SPEAK,
                        description: E.ROLE_PERMISSIONS_SPEAK_DESCRIPTION,
                        flag: I.Pl.SPEAK
                    }), A(_, I.Pl.STREAM.toString(), {
                        title: E.VIDEO,
                        description: E.ROLE_PERMISSIONS_STREAM_DESCRIPTION,
                        flag: I.Pl.STREAM
                    }), A(_, I.Pl.USE_EMBEDDED_ACTIVITIES.toString(), {
                        title: E.USE_EMBEDDED_ACTIVITIES,
                        description: E.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION,
                        flag: I.Pl.USE_EMBEDDED_ACTIVITIES
                    }), A(_, I.Pl.USE_SOUNDBOARD.toString(), {
                        title: E.USE_SOUNDBOARD,
                        description: (null == S ? void 0 : S.SOUNDBOARD_DESCRIPTION) || E.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION,
                        flag: I.Pl.USE_SOUNDBOARD
                    }), A(_, I.Pl.USE_EXTERNAL_SOUNDS.toString(), {
                        title: E.USE_EXTERNAL_SOUNDS,
                        description: E.ROLE_PERMISSIONS_USE_EXTERNAL_SOUNDS_DESCRIPTION,
                        flag: I.Pl.USE_EXTERNAL_SOUNDS
                    }), A(_, I.Pl.USE_VAD.toString(), {
                        title: E.USE_VAD,
                        description: E.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION,
                        flag: I.Pl.USE_VAD
                    }), A(_, I.Pl.PRIORITY_SPEAKER.toString(), {
                        title: E.PRIORITY_SPEAKER,
                        description: (null == S ? void 0 : S.PRIORITY_SPEAKER_DESCRIPTION) || E.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION,
                        flag: I.Pl.PRIORITY_SPEAKER
                    }), A(_, I.Pl.MUTE_MEMBERS.toString(), {
                        title: E.MUTE_MEMBERS,
                        description: E.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION,
                        flag: I.Pl.MUTE_MEMBERS
                    }), A(_, I.Pl.DEAFEN_MEMBERS.toString(), {
                        title: E.DEAFEN_MEMBERS,
                        description: E.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION,
                        flag: I.Pl.DEAFEN_MEMBERS
                    }), A(_, I.Pl.MOVE_MEMBERS.toString(), {
                        title: E.MOVE_MEMBERS,
                        description: E.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION,
                        flag: I.Pl.MOVE_MEMBERS
                    }), A(_, I.Pl.REQUEST_TO_SPEAK.toString(), {
                        title: E.REQUEST_TO_SPEAK,
                        description: E.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION,
                        flag: I.Pl.REQUEST_TO_SPEAK,
                        isExperimental: !0
                    }), A(_, I.Pl.ADMINISTRATOR.toString(), {
                        title: E.ADMINISTRATOR,
                        description: "string" == typeof E.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION ? E.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION : E.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION.format(),
                        flag: I.Pl.ADMINISTRATOR
                    }), A(_, I.Pl.MANAGE_EVENTS.toString(), {
                        title: E.MANAGE_EVENTS,
                        description: E.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION,
                        flag: I.Pl.MANAGE_EVENTS
                    }), A(_, I.Pl.CREATE_EVENTS.toString(), {
                        title: E.CREATE_EVENTS,
                        description: E.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION,
                        flag: I.Pl.CREATE_EVENTS
                    }), A(_, I.Pl.MANAGE_THREADS.toString(), {
                        title: S.showForumPermissions ? E.MANAGE_THREADS_AND_FORUM_POSTS : E.MANAGE_THREADS,
                        description: S.showForumPermissions ? E.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION : E.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION,
                        flag: I.Pl.MANAGE_THREADS
                    }), A(_, I.Pl.CREATE_PUBLIC_THREADS.toString(), {
                        title: E.CREATE_PUBLIC_THREADS,
                        description: E.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION,
                        flag: I.Pl.CREATE_PUBLIC_THREADS
                    }), A(_, I.Pl.CREATE_PRIVATE_THREADS.toString(), {
                        title: E.CREATE_PRIVATE_THREADS,
                        description: E.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION,
                        flag: I.Pl.CREATE_PRIVATE_THREADS
                    }), A(_, I.Pl.SEND_MESSAGES_IN_THREADS.toString(), {
                        title: S.showForumPermissions ? E.SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS : E.SEND_MESSAGES_IN_THREADS,
                        description: S.showForumPermissions ? E.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION : E.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION,
                        flag: I.Pl.SEND_MESSAGES_IN_THREADS
                    }), A(_, I.Pl.USE_CLYDE_AI.toString(), {
                        title: E.ROLE_PERMISSIONS_USE_CLYDE_AI,
                        description: E.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION,
                        flag: I.Pl.USE_CLYDE_AI
                    }), A(_, I.Pl.SET_VOICE_CHANNEL_STATUS.toString(), {
                        title: E.VOICE_CHANNEL_STATUS_PERMISSION_TITLE,
                        description: E.VOICE_CHANNEL_STATUS_PERMISSION_DESCRIPTION,
                        flag: I.Pl.SET_VOICE_CHANNEL_STATUS
                    }), _
            }

            function O(E, S, _) {
                var A = [I.Pl.VIEW_CHANNEL, I.Pl.MANAGE_CHANNELS, I.Pl.MANAGE_ROLES, I.Pl.CREATE_GUILD_EXPRESSIONS, I.Pl.MANAGE_GUILD_EXPRESSIONS, I.Pl.VIEW_AUDIT_LOG, I.Pl.VIEW_GUILD_ANALYTICS];
                _.showCreatorMonetizationAnalyticsPermission && A.push(I.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS);
                A.push(I.Pl.MANAGE_WEBHOOKS);
                A.push(I.Pl.MANAGE_GUILD);
                return N({
                    title: S.ROLE_PERMISSIONS_SECTION_GENERAL_GUILD,
                    permissions: R(A, E)
                })
            }

            function T(E, S) {
                var _ = [I.Pl.CREATE_INSTANT_INVITE, I.Pl.CHANGE_NICKNAME, I.Pl.MANAGE_NICKNAMES, I.Pl.KICK_MEMBERS, I.Pl.BAN_MEMBERS, I.Pl.MODERATE_MEMBERS];
                return N({
                    title: S.ROLE_PERMISSIONS_SECTION_MEMBERSHIP,
                    permissions: R(_, E)
                })
            }

            function t(E, S, _) {
                var A = [I.Pl.SEND_MESSAGES, I.Pl.SEND_MESSAGES_IN_THREADS, I.Pl.CREATE_PUBLIC_THREADS, I.Pl.CREATE_PRIVATE_THREADS, I.Pl.EMBED_LINKS, I.Pl.ATTACH_FILES, I.Pl.ADD_REACTIONS, I.Pl.USE_EXTERNAL_EMOJIS, I.Pl.USE_EXTERNAL_STICKERS, I.Pl.MENTION_EVERYONE, I.Pl.MANAGE_MESSAGES, I.Pl.MANAGE_THREADS, I.Pl.READ_MESSAGE_HISTORY, I.Pl.SEND_TTS_MESSAGES, I.Pl.USE_APPLICATION_COMMANDS, I.Pl.SEND_VOICE_MESSAGES, I.Pl.USE_CLYDE_AI];
                _.showClydeAIPermissions || (A = A.filter((function(E) {
                    return E !== I.Pl.USE_CLYDE_AI
                })));
                return N({
                    title: S.ROLE_PERMISSIONS_SECTION_TEXT,
                    permissions: R(A, E)
                })
            }

            function l(E, S, _) {
                var A = [I.Pl.CONNECT, I.Pl.SPEAK, I.Pl.STREAM, I.Pl.USE_EMBEDDED_ACTIVITIES, I.Pl.USE_SOUNDBOARD, I.Pl.USE_EXTERNAL_SOUNDS, I.Pl.USE_VAD, I.Pl.PRIORITY_SPEAKER, I.Pl.MUTE_MEMBERS, I.Pl.DEAFEN_MEMBERS, I.Pl.MOVE_MEMBERS];
                _.showVoiceChannelStatusPermission && A.push(I.Pl.SET_VOICE_CHANNEL_STATUS);
                return N({
                    title: S.ROLE_PERMISSIONS_SECTION_VOICE,
                    permissions: R(A, E)
                })
            }

            function M(E, S) {
                var _ = P(E, S),
                    A = [O(_, E, S), T(_, E), t(_, E, S), l(_, E, S)];
                S.showStageChannelPermissions && A.push(function(E, S, _) {
                    return N({
                        title: S.ROLE_PERMISSIONS_SECTION_STAGE,
                        permissions: R([I.Pl.REQUEST_TO_SPEAK], E)
                    }, _.showExperimental)
                }(_, E, S));
                A.push(function(E, S, _) {
                    return N({
                        title: S.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS,
                        permissions: R([I.Pl.CREATE_EVENTS, I.Pl.MANAGE_EVENTS], E)
                    }, _.showExperimental)
                }(_, E, S));
                A.push(function(E, S) {
                    return N({
                        title: S.ROLE_PERMISSIONS_SECTION_ADVANCED,
                        permissions: R([I.Pl.ADMINISTRATOR], E)
                    })
                }(_, E));
                return A
            }

            function i(E, S) {
                var _ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    showManageWebhooks: !0
                };
                return {
                    title: S,
                    permissions: R((null == _ ? void 0 : _.showManageWebhooks) ? [I.Pl.VIEW_CHANNEL, I.Pl.MANAGE_CHANNELS, I.Pl.MANAGE_ROLES, I.Pl.MANAGE_WEBHOOKS] : [I.Pl.VIEW_CHANNEL, I.Pl.MANAGE_CHANNELS, I.Pl.MANAGE_ROLES], E)
                }
            }

            function D(E, S) {
                return {
                    title: S,
                    permissions: R([I.Pl.CREATE_INSTANT_INVITE], E)
                }
            }

            function C(E, S, _) {
                var A = [I.Pl.SEND_MESSAGES, I.Pl.SEND_MESSAGES_IN_THREADS, I.Pl.CREATE_PUBLIC_THREADS, I.Pl.CREATE_PRIVATE_THREADS, I.Pl.EMBED_LINKS, I.Pl.ATTACH_FILES, I.Pl.ADD_REACTIONS, I.Pl.USE_EXTERNAL_EMOJIS, I.Pl.USE_EXTERNAL_STICKERS, I.Pl.MENTION_EVERYONE, I.Pl.MANAGE_MESSAGES, I.Pl.MANAGE_THREADS, I.Pl.READ_MESSAGE_HISTORY, I.Pl.SEND_TTS_MESSAGES, I.Pl.USE_APPLICATION_COMMANDS, I.Pl.SEND_VOICE_MESSAGES, I.Pl.USE_CLYDE_AI, I.Pl.USE_EMBEDDED_ACTIVITIES];
                _.showPrivateThreads && _.showCreateThreads || (A = A.filter((function(E) {
                    return E !== I.Pl.CREATE_PRIVATE_THREADS
                })));
                _.showCreateThreads || (A = A.filter((function(E) {
                    return E !== I.Pl.CREATE_PUBLIC_THREADS
                })));
                _.showClydeAIPermissions || (A = A.filter((function(E) {
                    return E !== I.Pl.USE_CLYDE_AI
                })));
                return {
                    title: S,
                    description: _.sectionDescription,
                    permissions: R(A, E)
                }
            }

            function n(E, S, _) {
                var A = [I.Pl.CONNECT, I.Pl.SPEAK, I.Pl.STREAM, I.Pl.USE_EMBEDDED_ACTIVITIES, I.Pl.USE_SOUNDBOARD, I.Pl.USE_EXTERNAL_SOUNDS, I.Pl.USE_VAD, I.Pl.PRIORITY_SPEAKER, I.Pl.MUTE_MEMBERS, I.Pl.DEAFEN_MEMBERS, I.Pl.MOVE_MEMBERS];
                _.showVoiceChannelStatusPermission && A.push(I.Pl.SET_VOICE_CHANNEL_STATUS);
                return {
                    title: S,
                    permissions: R(A, E)
                }
            }

            function r(E, S, _) {
                var A = [I.Pl.SEND_MESSAGES, I.Pl.EMBED_LINKS, I.Pl.ATTACH_FILES, I.Pl.ADD_REACTIONS, I.Pl.USE_EXTERNAL_EMOJIS, I.Pl.USE_EXTERNAL_STICKERS, I.Pl.MENTION_EVERYONE, I.Pl.MANAGE_MESSAGES, I.Pl.READ_MESSAGE_HISTORY, I.Pl.SEND_TTS_MESSAGES, I.Pl.USE_APPLICATION_COMMANDS];
                return {
                    title: S,
                    description: _.sectionDescription,
                    permissions: R(A, E)
                }
            }

            function e(E, S, _) {
                return {
                    title: S,
                    permissions: R(_ ? [I.Pl.CONNECT, I.Pl.STREAM, I.Pl.MUTE_MEMBERS, I.Pl.MOVE_MEMBERS] : [I.Pl.CONNECT, I.Pl.MUTE_MEMBERS, I.Pl.MOVE_MEMBERS], E)
                }
            }

            function o(E, S) {
                return {
                    title: S,
                    permissions: R([I.Pl.REQUEST_TO_SPEAK, I.Pl.MENTION_EVERYONE], E)
                }
            }

            function s(E, S) {
                return {
                    title: S,
                    permissions: R([I.Pl.CREATE_EVENTS, I.Pl.MANAGE_EVENTS], E)
                }
            }

            function L(E) {
                return null == E ? E : "string" == typeof E ? E.trim() : "function" == typeof E.format ? E.format() : E
            }
        }
    }
]);
//# sourceMappingURL=0b205cd6ca6a9c4c8527.js.map