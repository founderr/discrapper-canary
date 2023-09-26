"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [60529, 47428], {
        442368: (e, t, E) => {
            E.d(t, {
                kY: () => I,
                Aj: () => o,
                d$: () => O,
                S1: () => R,
                hw: () => u,
                kU: () => l
            });
            var r = E(744564),
                n = E(20170),
                s = E(761953);

            function S(e, t, E, r, n, s, S) {
                try {
                    var _ = e[s](S),
                        a = _.value
                } catch (e) {
                    E(e);
                    return
                }
                _.done ? t(a) : Promise.resolve(a).then(r, n)
            }

            function _(e) {
                return function() {
                    var t = this,
                        E = arguments;
                    return new Promise((function(r, n) {
                        var s = e.apply(t, E);

                        function _(e) {
                            S(s, r, n, _, a, "next", e)
                        }

                        function a(e) {
                            S(s, r, n, _, a, "throw", e)
                        }
                        _(void 0)
                    }))
                }
            }
            var a = function(e, t) {
                var E, r, n, s, S = {
                    label: 0,
                    sent: function() {
                        if (1 & n[0]) throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: _(0),
                    throw: _(1),
                    return: _(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function _(s) {
                    return function(_) {
                        return function(s) {
                            if (E) throw new TypeError("Generator is already executing.");
                            for (; S;) try {
                                if (E = 1, r && (n = 2 & s[0] ? r.return : s[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, s[1])).done) return n;
                                (r = 0,
                                    n) && (s = [2 & s[0], n.value]);
                                switch (s[0]) {
                                    case 0:
                                    case 1:
                                        n = s;
                                        break;
                                    case 4:
                                        S.label++;
                                        return {
                                            value: s[1], done: !1
                                        };
                                    case 5:
                                        S.label++;
                                        r = s[1];
                                        s = [0];
                                        continue;
                                    case 7:
                                        s = S.ops.pop();
                                        S.trys.pop();
                                        continue;
                                    default:
                                        if (!(n = S.trys, n = n.length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            S = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                            S.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && S.label < n[1]) {
                                            S.label = n[1];
                                            n = s;
                                            break
                                        }
                                        if (n && S.label < n[2]) {
                                            S.label = n[2];
                                            S.ops.push(s);
                                            break
                                        }
                                        n[2] && S.ops.pop();
                                        S.trys.pop();
                                        continue
                                }
                                s = t.call(e, S)
                            } catch (e) {
                                s = [6, e];
                                r = 0
                            } finally {
                                E = n = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, _])
                    }
                }
            };

            function I(e, t, E, r) {
                return i.apply(this, arguments)
            }

            function i() {
                return (i = _((function(e, t, E, s) {
                    var S;
                    return a(this, (function(_) {
                        switch (_.label) {
                            case 0:
                                return null == (S = e.getGuildId()) || t !== S ? [3, 2] : [4, (0, n.u)(e, s, E)];
                            case 1:
                                if (!_.sent()) return [2, !1];
                                _.label = 2;
                            case 2:
                                r.Z.dispatch({
                                    type: "CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION",
                                    id: t,
                                    allow: E,
                                    deny: s
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function o(e) {
                r.Z.dispatch({
                    type: "CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION",
                    id: e
                })
            }

            function O(e) {
                r.Z.dispatch({
                    type: "CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE",
                    advancedMode: e
                })
            }

            function R() {
                r.Z.dispatch({
                    type: "CHANNEL_SETTINGS_PERMISSIONS_INIT"
                })
            }

            function u(e, t, E) {
                return l(e, t, [], E)
            }

            function l(e, t, E, n) {
                r.Z.dispatch({
                    type: "CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING"
                });
                return new Promise((function(r) {
                    var n = function() {
                        if (0 === t.length && 0 === E.length) return r();
                        if (t.length > 0) {
                            var S = t.pop();
                            if (null == S) return n();
                            s.Z.updatePermissionOverwrite(e, S).then(n, n)
                        } else {
                            var _ = E.pop();
                            if (null == _) return n();
                            s.Z.clearPermissionOverwrite(e, _).then(n, n)
                        }
                    };
                    n()
                })).then((function() {
                    r.Z.dispatch({
                        type: "CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS",
                        silent: n
                    })
                }))
            }
        },
        449518: (e, t, E) => {
            E.d(t, {
                kf: () => A,
                m$: () => R,
                EQ: () => M,
                aC: () => O,
                IG: () => D
            });
            var r = E(734691),
                n = E(785893),
                s = (E(667294), E(304548)),
                S = E(818417),
                _ = E(473708),
                a = function(e, t) {
                    return (0, n.jsxs)(s.Text, {
                        color: "text-danger",
                        style: {
                            display: "flex",
                            gap: "4px",
                            margin: "8px 0 4px 0",
                            alignItems: "center"
                        },
                        variant: "text-sm/normal",
                        children: [(0, n.jsx)(S.Z, {
                            width: 14,
                            height: 14
                        }), e]
                    }, t)
                };
            const I = {
                getForumChannelPermissionText: function() {
                    return _.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT_DISABLED.format({
                        warningHook: a
                    })
                }
            };
            var i = function(e, t) {
                return (0, n.jsxs)(s.Text, {
                    color: "text-danger",
                    style: {
                        display: "flex",
                        gap: "4px",
                        margin: "8px 0 4px 0",
                        alignItems: "center"
                    },
                    variant: "text-sm/normal",
                    children: [(0, n.jsx)(S.Z, {
                        width: 14,
                        height: 14
                    }), e]
                }, t)
            };
            const o = {
                getTextInVoiceSendMessageChannelPermissionText: function(e) {
                    return e ? _.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_TIV_DESCRIPTION_TEXT_DISABLED.format({
                        warningHook: i
                    }) : _.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_TEXT
                },
                getTextInVoiceReadMessageHistoryChannelPermissionText: function(e) {
                    return e ? _.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_WITH_TIV_DESCRIPTION_TEXT_DISABLED.format({
                        warningHook: i
                    }) : _.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_TEXT
                }
            };
            var O, R, u = E(348592),
                l = E(2590);

            function N(e, t, E) {
                t in e ? Object.defineProperty(e, t, {
                    value: E,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = E;
                return e
            }! function(e) {
                e[e.EMPTY_STATE = 0] = "EMPTY_STATE";
                e[e.ADMINISTRATOR = 1] = "ADMINISTRATOR";
                e[e.ROLE = 2] = "ROLE";
                e[e.OWNER = 3] = "OWNER";
                e[e.MEMBER = 4] = "MEMBER";
                e[e.USER = 5] = "USER";
                e[e.GUILD = 6] = "GUILD"
            }(O || (O = {}));
            ! function(e) {
                e[e.ROLES = 0] = "ROLES";
                e[e.MEMBERS = 1] = "MEMBERS";
                e[e.USERS = 2] = "USERS";
                e[e.GUILDS = 3] = "GUILDS"
            }(R || (R = {}));
            var c, T, M = 20,
                A = "channelPermissionSettingsAdvancedModeOn";
            ! function(e) {
                e.SETTINGS_PAGE = "settings-page";
                e.MEMBERS_LIST = "members-list";
                e.EMPTY_STATE = "empty-state";
                e.CREATE_CHANNEL = "create-channel"
            }(c || (c = {}));
            ! function(e) {
                e.BASIC = "basic";
                e.ADVANCED = "advanced"
            }(T || (T = {}));

            function D(e, t, E, n) {
                var s, S = e.type;
                return N(s = {}, l.Plq.VIEW_CHANNEL.toString(), {
                        title: S === l.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL : _.Z.Messages.VIEW_CHANNEL,
                        description: function() {
                            if (t) switch (S) {
                                case l.d4z.GUILD_CATEGORY:
                                    return _.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CATEGORY_EVERYONE;
                                case l.d4z.GUILD_VOICE:
                                case l.d4z.GUILD_STAGE_VOICE:
                                    return _.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_VOICE_EVERYONE;
                                default:
                                    return _.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_TEXT_EVERYONE
                            }
                            return S === l.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CHANNEL
                        }(),
                        flag: l.Plq.VIEW_CHANNEL
                    }), N(s, l.Plq.MANAGE_CHANNELS.toString(), {
                        title: S === l.d4z.GUILD_CATEGORY ? _.Z.Messages.MANAGE_CHANNELS : _.Z.Messages.MANAGE_CHANNEL,
                        description: function() {
                            switch (S) {
                                case l.d4z.GUILD_CATEGORY:
                                    return _.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_CATEGORY;
                                case l.d4z.GUILD_VOICE:
                                    return _.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_VOICE;
                                case l.d4z.GUILD_STAGE_VOICE:
                                    return _.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_STAGE;
                                default:
                                    return _.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: l.Plq.MANAGE_CHANNELS
                    }), N(s, l.Plq.MANAGE_ROLES.toString(), {
                        title: _.Z.Messages.MANAGE_PERMISSIONS,
                        description: function() {
                            switch (S) {
                                case l.d4z.GUILD_CATEGORY:
                                    return _.Z.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_CATEGORY;
                                case l.d4z.GUILD_STAGE_VOICE:
                                    return _.Z.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_STAGE;
                                default:
                                    return _.Z.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_CHANNEL
                            }
                        }(),
                        flag: l.Plq.MANAGE_ROLES
                    }), N(s, l.Plq.MANAGE_WEBHOOKS.toString(), {
                        title: _.Z.Messages.MANAGE_WEBHOOKS,
                        description: S === l.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION_CHANNEL,
                        flag: l.Plq.MANAGE_WEBHOOKS
                    }), N(s, l.Plq.CREATE_INSTANT_INVITE.toString(), {
                        title: _.Z.Messages.CREATE_INSTANT_INVITE,
                        description: function() {
                            switch (S) {
                                case l.d4z.GUILD_CATEGORY:
                                    return _.Z.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_CATEGORY;
                                case l.d4z.GUILD_VOICE:
                                case l.d4z.GUILD_STAGE_VOICE:
                                    return _.Z.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_VOICE;
                                default:
                                    return _.Z.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: l.Plq.CREATE_INSTANT_INVITE
                    }), N(s, l.Plq.SEND_MESSAGES.toString(), {
                        title: l.TPd.GUILD_THREADS_ONLY.has(S) ? _.Z.Messages.CREATE_FORUM_POSTS : E && S === l.d4z.GUILD_CATEGORY ? _.Z.Messages.SEND_MESSAGES_AND_CREATE_FORUM_POSTS : _.Z.Messages.SEND_MESSAGES,
                        description: function() {
                            switch (S) {
                                case l.d4z.GUILD_CATEGORY:
                                    return E ? _.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_CATEGORY;
                                case l.d4z.GUILD_FORUM:
                                    return (null == n ? void 0 : n.createPostsDisabled) && !e.isMediaChannel() ? I.getForumChannelPermissionText() : _.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT;
                                case l.d4z.GUILD_MEDIA:
                                    return _.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT;
                                case l.d4z.GUILD_ANNOUNCEMENT:
                                    return _.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_ANNOUNCEMENT.format({
                                        articleURL: u.Z.getArticleURL(l.BhN.ANNOUNCEMENT_CHANNELS)
                                    });
                                case l.d4z.GUILD_VOICE:
                                    return o.getTextInVoiceSendMessageChannelPermissionText(null == n ? void 0 : n.sendMessagesDisabled);
                                default:
                                    return _.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: l.Plq.SEND_MESSAGES
                    }), N(s, l.Plq.EMBED_LINKS.toString(), {
                        title: _.Z.Messages.EMBED_LINKS,
                        description: S === l.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION_TEXT,
                        flag: l.Plq.EMBED_LINKS
                    }), N(s, l.Plq.ATTACH_FILES.toString(), {
                        title: _.Z.Messages.ATTACH_FILES,
                        description: S === l.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION_TEXT,
                        flag: l.Plq.ATTACH_FILES
                    }),
                    N(s, l.Plq.ADD_REACTIONS.toString(), {
                        title: _.Z.Messages.ADD_REACTIONS,
                        description: function() {
                            switch (S) {
                                case l.d4z.GUILD_CATEGORY:
                                    return _.Z.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_CATEGORY;
                                case l.d4z.GUILD_VOICE:
                                    return _.Z.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_TEXT_WITH_VOICE_CHANNEL_EFFECTS;
                                default:
                                    return _.Z.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: l.Plq.ADD_REACTIONS
                    }), N(s, l.Plq.USE_EXTERNAL_EMOJIS.toString(), {
                        title: _.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS,
                        description: S === l.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION_TEXT,
                        flag: l.Plq.USE_EXTERNAL_EMOJIS
                    }), N(s, l.Plq.USE_EXTERNAL_STICKERS.toString(), {
                        title: _.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS,
                        description: S === l.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION_TEXT,
                        flag: l.Plq.USE_EXTERNAL_STICKERS
                    }), N(s, l.Plq.MENTION_EVERYONE.toString(), {
                        title: S === l.d4z.GUILD_STAGE_VOICE ? _.Z.Messages.MENTION_EVERYONE_STAGE : _.Z.Messages.MENTION_EVERYONE,
                        description: S === l.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_CATEGORY : S === l.d4z.GUILD_STAGE_VOICE ? _.Z.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_STAGE : _.Z.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_TEXT,
                        flag: l.Plq.MENTION_EVERYONE
                    }), N(s, l.Plq.MANAGE_MESSAGES.toString(), {
                        title: _.Z.Messages.MANAGE_MESSAGES,
                        description: function() {
                            switch (S) {
                                case l.d4z.GUILD_CATEGORY:
                                    return _.Z.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_CATEGORY;
                                case l.d4z.GUILD_ANNOUNCEMENT:
                                    return _.Z.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_ANNOUNCEMENT.format({
                                        articleURL: u.Z.getArticleURL(l.BhN.ANNOUNCEMENT_CHANNELS)
                                    });
                                default:
                                    return _.Z.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: l.Plq.MANAGE_MESSAGES
                    }), N(s, l.Plq.READ_MESSAGE_HISTORY.toString(), {
                        title: l.TPd.GUILD_THREADS_ONLY.has(S) ? _.Z.Messages.READ_POST_HISTORY : _.Z.Messages.READ_MESSAGE_HISTORY,
                        description: function() {
                            switch (S) {
                                case l.d4z.GUILD_CATEGORY:
                                    return _.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_CATEGORY;
                                case l.d4z.GUILD_VOICE:
                                    return o.getTextInVoiceReadMessageHistoryChannelPermissionText(null == n ? void 0 : n.readMessageHistoryDisabled);
                                case l.d4z.GUILD_FORUM:
                                case l.d4z.GUILD_MEDIA:
                                    return _.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_FORUM_CHANNEL;
                                default:
                                    return _.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: l.Plq.READ_MESSAGE_HISTORY
                    }), N(s, l.Plq.SEND_TTS_MESSAGES.toString(), {
                        title: _.Z.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES,
                        description: S === l.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION_TEXT,
                        flag: l.Plq.SEND_TTS_MESSAGES
                    }), N(s, l.Plq.USE_APPLICATION_COMMANDS.toString(), {
                        title: _.Z.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS,
                        description: S === l.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_DESCRIPTION_TEXT,
                        flag: l.Plq.USE_APPLICATION_COMMANDS
                    }), N(s, l.Plq.SEND_VOICE_MESSAGES.toString(), {
                        title: _.Z.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE,
                        description: S === l.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGES_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGES_DESCRIPTION_TEXT,
                        flag: l.Plq.SEND_VOICE_MESSAGES
                    }), N(s, l.Plq.USE_CLYDE_AI.toString(), {
                        title: _.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI,
                        description: S === l.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION : _.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI_CHANNEL_DESCRIPTION,
                        flag: l.Plq.USE_CLYDE_AI
                    }), N(s, l.Plq.CONNECT.toString(), {
                        title: _.Z.Messages.CONNECT,
                        description: function() {
                            if (t) switch (S) {
                                case l.d4z.GUILD_CATEGORY:
                                    return _.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_CATEGORY_EVERYONE;
                                case l.d4z.GUILD_STAGE_VOICE:
                                    return _.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_STAGE_EVERYONE;
                                case l.d4z.GUILD_TEXT:
                                case l.d4z.GUILD_FORUM:
                                case l.d4z.GUILD_MEDIA:
                                    return _.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_THREADS_EVERYONE;
                                default:
                                    return _.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_VOICE_EVERYONE
                            }
                            switch (S) {
                                case l.d4z.GUILD_CATEGORY:
                                    return _.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_CATEGORY;
                                case l.d4z.GUILD_STAGE_VOICE:
                                    return _.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_STAGE;
                                case l.d4z.GUILD_TEXT:
                                case l.d4z.GUILD_FORUM:
                                case l.d4z.GUILD_MEDIA:
                                    return _.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_THREADS;
                                default:
                                    return _.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: l.Plq.CONNECT
                    }), N(s, l.Plq.SPEAK.toString(), {
                        title: _.Z.Messages.SPEAK,
                        description: function() {
                            switch (S) {
                                case l.d4z.GUILD_CATEGORY:
                                    return _.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_CATEGORY;
                                case l.d4z.GUILD_STAGE_VOICE:
                                    return _.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_STAGE;
                                case l.d4z.GUILD_TEXT:
                                case l.d4z.GUILD_FORUM:
                                case l.d4z.GUILD_MEDIA:
                                    return _.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_THREADS;
                                default:
                                    return _.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: l.Plq.SPEAK
                    }), N(s, l.Plq.STREAM.toString(), {
                        title: _.Z.Messages.VIDEO,
                        description: function() {
                            switch (S) {
                                case l.d4z.GUILD_CATEGORY:
                                    return _.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_CATEGORY;
                                case l.d4z.GUILD_TEXT:
                                case l.d4z.GUILD_FORUM:
                                case l.d4z.GUILD_MEDIA:
                                    return _.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_THREADS;
                                case l.d4z.GUILD_STAGE_VOICE:
                                    return _.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_STAGE;
                                default:
                                    return _.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: l.Plq.STREAM
                    }), N(s, l.Plq.USE_EMBEDDED_ACTIVITIES.toString(), {
                        title: _.Z.Messages.USE_EMBEDDED_ACTIVITIES,
                        description: function() {
                            switch (S) {
                                case l.d4z.GUILD_CATEGORY:
                                    return _.Z.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_CATEGORY;
                                case l.d4z.GUILD_FORUM:
                                case l.d4z.GUILD_MEDIA:
                                    return _.Z.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_THREADS;
                                default:
                                    return _.Z.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_CHANNEL
                            }
                        }(),
                        flag: l.Plq.USE_EMBEDDED_ACTIVITIES
                    }), N(s, l.Plq.USE_SOUNDBOARD.toString(), {
                        title: _.Z.Messages.USE_SOUNDBOARD,
                        description: function() {
                            switch (S) {
                                case l.d4z.GUILD_CATEGORY:
                                    return _.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_CATEGORY.format({
                                        helpCenterArticle: u.Z.getArticleURL(l.BhN.SOUNDBOARD)
                                    });
                                case l.d4z.GUILD_TEXT:
                                case l.d4z.GUILD_FORUM:
                                case l.d4z.GUILD_MEDIA:
                                    return _.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_THREADS.format({
                                        helpCenterArticle: u.Z.getArticleURL(l.BhN.SOUNDBOARD)
                                    });
                                default:
                                    return _.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_VOICE.format({
                                        helpCenterArticle: u.Z.getArticleURL(l.BhN.SOUNDBOARD)
                                    })
                            }
                        }(),
                        flag: l.Plq.USE_SOUNDBOARD
                    }), N(s, l.Plq.USE_EXTERNAL_SOUNDS.toString(), {
                        title: _.Z.Messages.USE_EXTERNAL_SOUNDS,
                        description: _.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_SOUNDS_DESCRIPTION,
                        flag: l.Plq.USE_EXTERNAL_SOUNDS
                    }), N(s, l.Plq.USE_VAD.toString(), {
                        title: _.Z.Messages.USE_VAD,
                        description: function() {
                            switch (S) {
                                case l.d4z.GUILD_CATEGORY:
                                    return _.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_CATEGORY;
                                case l.d4z.GUILD_STAGE_VOICE:
                                    return _.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_STAGE;
                                case l.d4z.GUILD_TEXT:
                                case l.d4z.GUILD_FORUM:
                                case l.d4z.GUILD_MEDIA:
                                    return _.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_THREADS;
                                default:
                                    return _.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: l.Plq.USE_VAD
                    }), N(s, l.Plq.PRIORITY_SPEAKER.toString(), {
                        title: _.Z.Messages.PRIORITY_SPEAKER,
                        description: function() {
                            0;
                            var e = {
                                keybind: _.Z.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
                                onClick: function() {
                                    r.Z.open(l.oAB.KEYBINDS)
                                }
                            };
                            switch (S) {
                                case l.d4z.GUILD_CATEGORY:
                                    return _.Z.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_CATEGORY.format(e);
                                case l.d4z.GUILD_TEXT:
                                case l.d4z.GUILD_FORUM:
                                case l.d4z.GUILD_MEDIA:
                                    return _.Z.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_THREADS.format(e);
                                default:
                                    return _.Z.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_VOICE.format(e)
                            }
                        }(),
                        flag: l.Plq.PRIORITY_SPEAKER
                    }), N(s, l.Plq.MUTE_MEMBERS.toString(), {
                        title: _.Z.Messages.MUTE_MEMBERS,
                        description: function() {
                            switch (S) {
                                case l.d4z.GUILD_CATEGORY:
                                    return _.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_CATEGORY;
                                case l.d4z.GUILD_STAGE_VOICE:
                                    return _.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_STAGE;
                                case l.d4z.GUILD_TEXT:
                                case l.d4z.GUILD_FORUM:
                                case l.d4z.GUILD_MEDIA:
                                    return _.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_THREADS;
                                default:
                                    return _.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: l.Plq.MUTE_MEMBERS
                    }), N(s, l.Plq.DEAFEN_MEMBERS.toString(), {
                        title: _.Z.Messages.DEAFEN_MEMBERS,
                        description: function() {
                            switch (S) {
                                case l.d4z.GUILD_CATEGORY:
                                    return _.Z.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_CATEGORY;
                                case l.d4z.GUILD_TEXT:
                                case l.d4z.GUILD_FORUM:
                                case l.d4z.GUILD_MEDIA:
                                    return _.Z.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_THREADS;
                                default:
                                    return _.Z.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: l.Plq.DEAFEN_MEMBERS
                    }), N(s, l.Plq.MOVE_MEMBERS.toString(), {
                        title: _.Z.Messages.MOVE_MEMBERS,
                        description: function() {
                            switch (S) {
                                case l.d4z.GUILD_CATEGORY:
                                    return _.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_CATEGORY;
                                case l.d4z.GUILD_STAGE_VOICE:
                                    return _.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_STAGE;
                                case l.d4z.GUILD_TEXT:
                                case l.d4z.GUILD_FORUM:
                                case l.d4z.GUILD_MEDIA:
                                    return _.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_THREADS;
                                default:
                                    return _.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: l.Plq.MOVE_MEMBERS
                    }), N(s, l.Plq.REQUEST_TO_SPEAK.toString(), {
                        title: _.Z.Messages.REQUEST_TO_SPEAK,
                        description: S === l.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION_STAGE,
                        flag: l.Plq.REQUEST_TO_SPEAK
                    }), N(s, l.Plq.MANAGE_THREADS.toString(), {
                        title: l.TPd.GUILD_THREADS_ONLY.has(S) ? _.Z.Messages.MANAGE_FORUM_POSTS : E && S === l.d4z.GUILD_CATEGORY ? _.Z.Messages.MANAGE_THREADS_AND_FORUM_POSTS : _.Z.Messages.MANAGE_THREADS,
                        description: function() {
                            switch (S) {
                                case l.d4z.GUILD_CATEGORY:
                                    return E ? _.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION_CATEGORY;
                                case l.d4z.GUILD_FORUM:
                                case l.d4z.GUILD_MEDIA:
                                    return _.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION_TEXT;
                                default:
                                    return _.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: l.Plq.MANAGE_THREADS
                    }), N(s, l.Plq.CREATE_PUBLIC_THREADS.toString(), {
                        title: _.Z.Messages.CREATE_PUBLIC_THREADS,
                        description: S === l.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION_TEXT,
                        flag: l.Plq.CREATE_PUBLIC_THREADS
                    }), N(s, l.Plq.CREATE_PRIVATE_THREADS.toString(), {
                        title: _.Z.Messages.CREATE_PRIVATE_THREADS,
                        description: S === l.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION_TEXT,
                        flag: l.Plq.CREATE_PRIVATE_THREADS
                    }), N(s, l.Plq.SEND_MESSAGES_IN_THREADS.toString(), {
                        title: l.TPd.GUILD_THREADS_ONLY.has(S) ? _.Z.Messages.SEND_MESSAGES_IN_FORUM_POSTS : E && S === l.d4z.GUILD_CATEGORY ? _.Z.Messages.SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS : _.Z.Messages.SEND_MESSAGES_IN_THREADS,
                        description: function() {
                            switch (S) {
                                case l.d4z.GUILD_CATEGORY:
                                    return E ? _.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION_CATEGORY;
                                case l.d4z.GUILD_FORUM:
                                case l.d4z.GUILD_MEDIA:
                                    return _.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION_TEXT;
                                default:
                                    return _.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: l.Plq.SEND_MESSAGES_IN_THREADS
                    }), N(s, l.Plq.MANAGE_EVENTS.toString(), {
                        title: _.Z.Messages.MANAGE_EVENTS,
                        description: S === l.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION_CHANNEL,
                        flag: l.Plq.MANAGE_EVENTS
                    }), N(s, l.Plq.CREATE_EVENTS.toString(), {
                        title: _.Z.Messages.CREATE_EVENTS,
                        description: S === l.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION_CHANNEL,
                        flag: l.Plq.CREATE_EVENTS
                    }),
                    N(s, l.Plq.SET_VOICE_CHANNEL_STATUS.toString(), {
                        title: _.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE,
                        description: _.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_DESCRIPTION,
                        flag: l.Plq.SET_VOICE_CHANNEL_STATUS
                    }), s
            }
        },
        1477: (e, t, E) => {
            E.d(t, {
                GJ: () => T,
                X0: () => A,
                W: () => D,
                aq: () => f,
                pM: () => C,
                ik: () => g,
                Wx: () => L,
                kA: () => G,
                RZ: () => p,
                iI: () => y,
                cR: () => m,
                zB: () => b,
                yv: () => w,
                _A: () => V,
                $e: () => H,
                Yh: () => Y,
                Yk: () => z,
                RD: () => B,
                nT: () => q,
                $7: () => j,
                Tj: () => x
            });
            var r = E(940060),
                n = E(547308),
                s = E(442368),
                S = E(73904),
                _ = E(382060),
                a = E(21372),
                I = E(473903),
                i = E(176758),
                o = E(72580),
                O = E(563135),
                R = E(749565),
                u = E(449518),
                l = E(2590),
                N = E(473708);

            function c(e, t, E) {
                t in e ? Object.defineProperty(e, t, {
                    value: E,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = E;
                return e
            }

            function T(e) {
                return r.Z.has(e.permissions, l.Plq.ADMINISTRATOR)
            }

            function M(e) {
                return r.Z.has(e.permissions, l.Plq.ADMINISTRATOR) ? u.aC.ADMINISTRATOR : u.aC.ROLE
            }

            function A(e) {
                var t, E = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = M(e);
                return {
                    rowType: r,
                    colorString: null !== (t = e.colorString) && void 0 !== t ? t : (0, n.Rf)(l.p6O),
                    name: e.name,
                    id: e.id,
                    disabled: T(e) || E,
                    key: "".concat(r, ":").concat(e.id),
                    tags: e.tags
                }
            }

            function D(e, t) {
                var E = T(e) ? 0 : 1,
                    r = T(t) ? 0 : 1;
                return E !== r ? E - r : t.position - e.position
            }

            function f() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_ROLES;
                return [{
                    rowType: u.aC.EMPTY_STATE,
                    colorString: (0, n.Rf)(l.p6O),
                    name: e,
                    disabled: !0,
                    id: "EMPTY_STATE"
                }]
            }

            function P(e, t, E, n) {
                var s = I.default.getCurrentUser();
                if (null == s) return !1;
                if (null == e) return s.id !== t;
                var S = e.permissionOverwrites[t];
                null != (null == n ? void 0 : n[t]) && (S = n[t]);
                return null == S || !r.Z.has(S.allow, E)
            }

            function C(e, t) {
                return e === t
            }

            function d(e, t) {
                return !C(e.id, t.id)
            }

            function g(e, t, E) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {
                    return !0
                };
                return null == e.roles ? [] : Object.values(e.roles).filter((function(n) {
                    return !T(n) && P(t, n.id, E) && d(e, n) && r(n.name)
                })).sort(D).map((function(e) {
                    return A(e)
                }))
            }

            function L(e, t, E) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {
                    return !0
                };
                return null == e.roles ? [] : Object.values(e.roles).filter((function(r) {
                    return !T(r) && P(t, r.id, E) && d(e, r) && n(r.name)
                })).sort(D).map((function(e) {
                    return A(e, r.Z.has(e.permissions, E))
                }))
            }

            function G(e, t, E, r) {
                var n = [];
                if (null == e.roles) return n;
                n = function(e, t, E, r) {
                    return Object.values(e.roles).filter((function(n) {
                        return T(n) || !P(t, n.id, E, r) && d(e, n)
                    }))
                }(e, t, E, r).sort(D).map((function(e) {
                    return A(e)
                }));
                return 0 === n.length ? f(N.Z.Messages.CHANNEL_PERMISSIONS_NO_ROLES) : n
            }

            function p(e, t, E, n) {
                var s = [];
                if (null == e.roles) return s;
                s = function(e, t, E, n) {
                    return Object.values(e.roles).filter((function(s) {
                        var S;
                        return T(s) || !P(t, s.id, E, n) && d(e, s) || r.Z.has(r.Z.combine(s.permissions, null === (S = t.permissionOverwrites[s.id]) || void 0 === S ? void 0 : S.allow), E)
                    }))
                }(e, t, E, n).sort(D).map((function(e) {
                    return A(e, r.Z.has(e.permissions, E))
                }));
                return 0 === s.length ? f(N.Z.Messages.CHANNEL_PERMISSIONS_NO_ROLES) : s
            }

            function U(e, t) {
                var E;
                return null !== (E = a.ZP.getNick(t.id, e.id)) && void 0 !== E ? E : R.ZP.getName(e)
            }

            function h(e, t) {
                return t.isOwner(e)
            }

            function Z(e, t) {
                var E, r = function(e, t) {
                    return t.isOwner(e) ? u.aC.OWNER : u.aC.MEMBER
                }(e, t);
                return {
                    rowType: r,
                    name: U(e, t),
                    nickname: null !== (E = a.ZP.getNick(t.id, e.id)) && void 0 !== E ? E : null,
                    username: R.ZP.getName(e),
                    id: e.id,
                    avatarURL: e.getAvatarURL(t.id, 24),
                    bot: e.bot,
                    verifiedBot: e.isVerifiedBot(),
                    disabled: h(e, t),
                    key: "".concat(r, ":").concat(e.id)
                }
            }

            function v(e, t) {
                return e.rowType !== t.rowType ? e.rowType - t.rowType : e.name.toLocaleLowerCase().localeCompare(t.name.toLocaleLowerCase())
            }

            function y(e, t, E, r) {
                var n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() {
                    return !0
                };
                return e.map(I.default.getUser).filter(o.lm).filter((function(e) {
                    return !E.isOwner(e) && P(t, e.id, r) && (n(U(e, E)) || n(e.username) || n(e.discriminator))
                })).map((function(e) {
                    return Z(e, E)
                })).sort(v)
            }

            function m(e, t, E, r, n) {
                return function(e, t, E, r, n) {
                    return e.map(I.default.getUser).filter(o.lm).filter((function(e) {
                        return !P(t, e.id, r, n) || h(e, E)
                    }))
                }(e, t, E, r, n).map((function(e) {
                    return Z(e, E)
                })).sort(v)
            }

            function b(e, t) {
                switch (e) {
                    case u.aC.ROLE:
                        return N.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_ROLE;
                    case u.aC.OWNER:
                        return N.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_OWNER;
                    case u.aC.ADMINISTRATOR:
                        return N.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_ADMINISTRATOR;
                    case u.aC.MEMBER:
                        return t ? N.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_MEMBER : null;
                    case u.aC.USER:
                        return N.Z.Messages.USER;
                    case u.aC.GUILD:
                        return N.Z.Messages.SERVER;
                    case u.aC.EMPTY_STATE:
                        return null
                }
            }

            function w(e) {
                switch (e) {
                    case u.aC.ROLE:
                        return N.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP;
                    case u.aC.OWNER:
                        return N.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
                    case u.aC.ADMINISTRATOR:
                        return N.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
                    case u.aC.MEMBER:
                        return N.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP;
                    case u.aC.EMPTY_STATE:
                    default:
                        return null
                }
            }

            function V(e, t, E) {
                var n = e.permissionOverwrites[e.guild_id];
                null == n && (n = O.ZP.makeEveryoneOverwrite(e.guild_id));
                var s = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var E = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(E);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(E).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(E, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            c(e, t, E[t])
                        }))
                    }
                    return e
                }({}, n);
                s.deny = r.Z.remove(s.deny, t);
                s.allow = r.Z.remove(s.allow, t);
                E || (s.deny = r.Z.add(s.deny, t));
                return s
            }

            function H(e, t, E) {
                var r = V(e, t, E);
                (0, s.kY)(e, r.id, r.allow, r.deny)
            }

            function Y(e, t) {
                var E = I.default.getCurrentUser();
                if (null != E) {
                    var n = e.permissionOverwrites[E.id];
                    if (null == n) {
                        var _ = {
                            id: E.id,
                            type: S.BN.MEMBER,
                            allow: r.Z.add(O.ZP.NONE, t),
                            deny: O.ZP.NONE
                        };
                        (0, s.hw)(e.id, [_], !0)
                    } else {
                        var a = n.allow,
                            i = n.deny;
                        a = r.Z.add(a, t);
                        (0, s.kY)(e, n.id, a, i)
                    }
                }
            }

            function z(e, t) {
                if (null == e) return !1;
                var E = e.permissionOverwrites[e.guild_id];
                null != (null == t ? void 0 : t[e.guild_id]) && (E = t[e.guild_id]);
                return null != E && r.Z.has(E.deny, e.accessPermissions)
            }

            function B(e) {
                var t = Object.keys(e.roles);
                return 0 !== t.length && (1 !== t.length || t[0] !== e.id)
            }

            function q(e, t, E) {
                return e === l.d4z.GUILD_TEXT || e === l.d4z.GUILD_ANNOUNCEMENT ? t : !(0, _.bw)(e) && e !== l.d4z.GUILD_CATEGORY || t && E
            }

            function j(e) {
                switch (e) {
                    case l.d4z.GUILD_TEXT:
                    case l.d4z.GUILD_ANNOUNCEMENT:
                        return N.Z.Messages.PRIVATE_TEXT_CHANNEL_CREATION_PERMISSION_MISSING_HINT.format();
                    case l.d4z.GUILD_VOICE:
                        return N.Z.Messages.PRIVATE_VOICE_CHANNEL_CREATION_PERMISSION_MISSING_HINT.format();
                    case l.d4z.GUILD_CATEGORY:
                        return N.Z.Messages.PRIVATE_CATEGORY_CREATION_PERMISSION_MISSING_HINT.format();
                    default:
                        return null
                }
            }

            function x(e, t) {
                var E = [];
                Object.values(e).forEach((function(e) {
                    var r = e.row;
                    null != r.id && "" !== r.id && (r.rowType === u.aC.ROLE ? E.push((0, i.rX)(r.id, t)) : r.rowType === u.aC.MEMBER && E.push((0, i.jZ)(r.id, t)))
                }));
                return E
            }
        },
        647428: (e, t, E) => {
            E.d(t, {
                Z: () => D
            });
            var r = E(202351),
                n = E(744564),
                s = E(120415),
                S = E(310126),
                _ = new Set(["nvidia"]);
            var a = E(236625),
                I = E.n(a);
            var i = function(e, t, E) {
                t in e ? Object.defineProperty(e, t, {
                    value: E,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = E;
                return e
            }({}, s.AB.WINDOWS, {
                nvidia: ">=397.93.0"
            });

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function O(e, t) {
                for (var E = 0; E < t.length; E++) {
                    var r = t[E];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function R(e) {
                R = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return R(e)
            }

            function u(e, t) {
                return !t || "object" !== N(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function l(e, t) {
                l = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return l(e, t)
            }
            var N = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function c(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var E, r = R(e);
                    if (t) {
                        var n = R(this).constructor;
                        E = Reflect.construct(r, arguments, n)
                    } else E = r.apply(this, arguments);
                    return u(this, E)
                }
            }
            var T = !1,
                M = !0;
            var A = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && l(e, t)
                }(E, e);
                var t = c(E);

                function E() {
                    o(this, E);
                    return t.apply(this, arguments)
                }
                var r = E.prototype;
                r.initialize = function() {
                    var e = this;
                    s.FB && !__OVERLAY__ && S.ZP.getGPUDriverVersions().then((function(t) {
                        T = function(e) {
                            var t = i[(0, s.Xf)()];
                            if (null == t) return !1;
                            var E, r, n, S = !0,
                                _ = !1,
                                a = void 0;
                            try {
                                for (var o, O = Object.keys(e)[Symbol.iterator](); !(S = (o = O.next()).done); S = !0) {
                                    var R = o.value,
                                        u = e[R],
                                        l = t[R];
                                    if (null != u && null != l && null == u.error) {
                                        var N = (r = void 0, n = void 0, "".concat(null !== (r = (E = u).major) && void 0 !== r ? r : 0, ".").concat(null !== (n = E.minor) && void 0 !== n ? n : 0, ".0"));
                                        if (!I().satisfies(N, l)) return !0
                                    }
                                }
                            } catch (e) {
                                _ = !0;
                                a = e
                            } finally {
                                try {
                                    S || null == O.return || O.return()
                                } finally {
                                    if (_) throw a
                                }
                            }
                            return !1
                        }(t);
                        M = function(e) {
                            var t = !0,
                                E = !1,
                                r = void 0;
                            try {
                                for (var n, s = Object.keys(e)[Symbol.iterator](); !(t = (n = s.next()).done); t = !0) {
                                    var S = n.value,
                                        a = e[S];
                                    if (null != a && null == a.error && _.has(S)) return !0
                                }
                            } catch (e) {
                                E = !0;
                                r = e
                            } finally {
                                try {
                                    t || null == s.return || s.return()
                                } finally {
                                    if (E) throw r
                                }
                            }
                            return !1
                        }(t);
                        e.emitChange()
                    }))
                };
                r.getState = function() {
                    return {
                        GPUDriversOutdated: T,
                        canUseHardwareAcceleration: M
                    }
                };
                ! function(e, t, E) {
                    t && O(e.prototype, t);
                    E && O(e, E)
                }(E, [{
                    key: "GPUDriversOutdated",
                    get: function() {
                        return T
                    }
                }, {
                    key: "canUseHardwareAcceleration",
                    get: function() {
                        return M
                    }
                }]);
                return E
            }(r.ZP.Store);
            A.displayName = "StreamingCapabilitiesStore";
            const D = new A(n.Z, {
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.streamingCapabilitiesStoreState;
                    T = t.GPUDriversOutdated;
                    M = t.canUseHardwareAcceleration
                }
            })
        },
        20170: (e, t, E) => {
            E.d(t, {
                C: () => T,
                u: () => f
            });
            var r = E(940060),
                n = E(105783),
                s = E(703790),
                S = E(567403),
                _ = E(888236),
                a = E(404741),
                I = E(185219),
                i = E(322008),
                o = E(2590),
                O = E(473708);

            function R(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var E = 0, r = new Array(t); E < t; E++) r[E] = e[E];
                return r
            }

            function u(e, t, E, r, n, s, S) {
                try {
                    var _ = e[s](S),
                        a = _.value
                } catch (e) {
                    E(e);
                    return
                }
                _.done ? t(a) : Promise.resolve(a).then(r, n)
            }

            function l(e) {
                return function() {
                    var t = this,
                        E = arguments;
                    return new Promise((function(r, n) {
                        var s = e.apply(t, E);

                        function S(e) {
                            u(s, r, n, S, _, "next", e)
                        }

                        function _(e) {
                            u(s, r, n, S, _, "throw", e)
                        }
                        S(void 0)
                    }))
                }
            }

            function N(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var E = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != E) {
                        var r, n, s = [],
                            S = !0,
                            _ = !1;
                        try {
                            for (E = E.call(e); !(S = (r = E.next()).done); S = !0) {
                                s.push(r.value);
                                if (t && s.length === t) break
                            }
                        } catch (e) {
                            _ = !0;
                            n = e
                        } finally {
                            try {
                                S || null == E.return || E.return()
                            } finally {
                                if (_) throw n
                            }
                        }
                        return s
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return R(e, t);
                    var E = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === E && e.constructor && (E = e.constructor.name);
                    if ("Map" === E || "Set" === E) return Array.from(E);
                    if ("Arguments" === E || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E)) return R(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var c = function(e, t) {
                var E, r, n, s, S = {
                    label: 0,
                    sent: function() {
                        if (1 & n[0]) throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: _(0),
                    throw: _(1),
                    return: _(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function _(s) {
                    return function(_) {
                        return function(s) {
                            if (E) throw new TypeError("Generator is already executing.");
                            for (; S;) try {
                                if (E = 1, r && (n = 2 & s[0] ? r.return : s[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, s[1])).done) return n;
                                (r = 0, n) && (s = [2 & s[0], n.value]);
                                switch (s[0]) {
                                    case 0:
                                    case 1:
                                        n = s;
                                        break;
                                    case 4:
                                        S.label++;
                                        return {
                                            value: s[1], done: !1
                                        };
                                    case 5:
                                        S.label++;
                                        r = s[1];
                                        s = [0];
                                        continue;
                                    case 7:
                                        s = S.ops.pop();
                                        S.trys.pop();
                                        continue;
                                    default:
                                        if (!(n = S.trys, n = n.length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            S = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                            S.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && S.label < n[1]) {
                                            S.label = n[1];
                                            n = s;
                                            break
                                        }
                                        if (n && S.label < n[2]) {
                                            S.label = n[2];
                                            S.ops.push(s);
                                            break
                                        }
                                        n[2] && S.ops.pop();
                                        S.trys.pop();
                                        continue
                                }
                                s = t.call(e, S)
                            } catch (e) {
                                s = [6, e];
                                r = 0
                            } finally {
                                E = n = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, _])
                    }
                }
            };

            function T(e, t) {
                return M.apply(this, arguments)
            }

            function M() {
                return (M = l((function(e, t) {
                    return c(this, (function(E) {
                        switch (E.label) {
                            case 0:
                                return null == e ? [2, !0] : [4, A(e, t, {
                                    removingView: !0,
                                    removingChat: !0
                                })];
                            case 1:
                                return [2, E.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function A(e, t, E) {
                return D.apply(this, arguments)
            }

            function D() {
                return (D = l((function(e, t, E) {
                    var r, n, s, O, R, u, l, T, M;
                    return c(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return null == (n = S.Z.getGuild(e)) ? [2, !0] : (s = null != n && (null === (r = n.features) || void 0 === r ? void 0 : r.has(o.oNc.GUILD_ONBOARDING))) ? s && a.Z.shouldFetchPrompts(e) ? [4, (0, _.eM)(e)] : [3, 2] : [2, !0];
                            case 1:
                                c.sent();
                                c.label = 2;
                            case 2:
                                O = a.Z.getDefaultChannelIds(e);
                                R = N((0, I.d9)(e, O), 2), u = R[0], l = R[1];
                                if (!O.includes(t)) return [2, !0];
                                T = E.removingView && l.length - 1 < i.md;
                                M = (E.removingChat || E.removingView) && u.length - 1 < i.X;
                                return [2, !T && !M]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function f(e, t, E) {
                return P.apply(this, arguments)
            }

            function P() {
                return (P = l((function(e, t, E) {
                    var S, _, a, I;
                    return c(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                if (null == (S = e.getGuildId())) return [2, !0];
                                null != E && (t = r.Z.filter(t, r.Z.invert(E)));
                                _ = e.permissionOverwrites[S];
                                a = null != _ ? r.Z.filter(_.deny, r.Z.invert(_.allow)) : r.Z.deserialize(0);
                                I = {
                                    removingView: r.Z.has(t, o.Plq.VIEW_CHANNEL) && !r.Z.has(a, o.Plq.VIEW_CHANNEL),
                                    removingChat: !1
                                };
                                e.isForumLikeChannel() ? I.removingChat = r.Z.has(t, o.Plq.SEND_MESSAGES_IN_THREADS) && !r.Z.has(a, o.Plq.SEND_MESSAGES_IN_THREADS) : I.removingChat = r.Z.has(t, o.Plq.SEND_MESSAGES) && !r.Z.has(a, o.Plq.SEND_MESSAGES);
                                return I.removingChat || I.removingView ? [4, A(S, e.id, I)] : [2, !0];
                            case 1:
                                if (!i.sent()) {
                                    n.Z.show({
                                        title: O.Z.Messages.CANNOT_CHANGE_CHANNEL_PERMS,
                                        body: O.Z.Messages.ONBOARDING_CHANNEL_THRESHOLD_WARNING.format({
                                            onClick: function() {
                                                n.Z.close();
                                                s.Z.open(S, o.pNK.ONBOARDING)
                                            }
                                        })
                                    });
                                    return [2, !1]
                                }
                                return [2, !0]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        96606: (e, t, E) => {
            E.d(t, {
                u: () => G,
                Z: () => Z
            });
            var r = E(785893),
                n = E(667294),
                s = E(294184),
                S = E.n(s),
                _ = E(441143),
                a = E.n(_),
                I = E(304548),
                i = E(736626),
                o = E(668929),
                O = E(722406),
                R = E(473903),
                u = E(755914),
                l = E(442535),
                N = E(211482),
                c = E(427215),
                T = E.n(c);

            function M(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function A(e, t, E) {
                t in e ? Object.defineProperty(e, t, {
                    value: E,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = E;
                return e
            }

            function D(e) {
                D = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return D(e)
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var E = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(E);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(E).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(E, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        A(e, t, E[t])
                    }))
                }
                return e
            }

            function P(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var E = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        E.push.apply(E, r)
                    }
                    return E
                }(Object(t)).forEach((function(E) {
                    Object.defineProperty(e, E, Object.getOwnPropertyDescriptor(t, E))
                }));
                return e
            }

            function C(e, t) {
                return !t || "object" !== g(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function d(e, t) {
                d = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return d(e, t)
            }
            var g = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function L(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var E, r = D(e);
                    if (t) {
                        var n = D(this).constructor;
                        E = Reflect.construct(r, arguments, n)
                    } else E = r.apply(this, arguments);
                    return C(this, E)
                }
            }
            var G = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function p(e, t) {
                var E = e instanceof O.Z ? e : null != e ? e.user : null;
                return null != E ? E.id : "user-".concat(t)
            }

            function U() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G.SIZE_24;
                switch (e) {
                    case G.SIZE_16:
                        return T().size16;
                    case G.SIZE_24:
                        return T().size24;
                    case G.SIZE_32:
                        return T().size32;
                    case G.SIZE_56:
                        return T().size56;
                    default:
                        return T().size24
                }
            }
            var h = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && d(e, t)
                }(E, e);
                var t = L(E);

                function E() {
                    M(this, E);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        popoutUserId: null
                    };
                    e._ref = n.createRef();
                    e.defaultRenderUser = function(t, E, n) {
                        var s = e.props,
                            S = s.showUserPopout,
                            _ = s.guildId,
                            a = s.size;
                        if (null == t) {
                            if (e.props.showDefaultAvatarsForNullUsers) {
                                var i = (null != n ? n : 0) % l.Z.DEFAULT_AVATARS.length,
                                    o = l.Z.DEFAULT_AVATARS[i];
                                return (0, r.jsx)("img", {
                                    src: o,
                                    alt: "",
                                    className: T().avatar
                                })
                            }
                            return (0, r.jsx)("div", {
                                className: T().emptyUser
                            })
                        }
                        var O = (0, r.jsx)("img", {
                            src: t.getAvatarURL(_, a),
                            alt: t.username,
                            className: T().avatar
                        }, t.id);
                        return S ? (0, r.jsx)(I.Clickable, {
                            className: T().clickableAvatar,
                            onClick: function() {
                                null != e._ref.current && null != t && e.setState({
                                    popoutUserId: t.id
                                })
                            },
                            tabIndex: -1,
                            children: O
                        }, t.id) : O
                    };
                    return e
                }
                var s = E.prototype;
                s.renderUsers = function() {
                    for (var e = this.props, t = e.users, E = e.max, n = e.renderUser, s = void 0 === n ? this.defaultRenderUser : n, S = e.size, _ = e.extraDetail, a = [], I = t.length === E ? t.length : E - 1, i = this.renderMoreUsers(I), o = 0; o < I && o < t.length;) {
                        var O, R = null == i && null == _ && o === t.length - 1,
                            u = s(t[o], R, o);
                        a.push(R ? (0, r.jsx)("div", {
                            className: T().avatarContainer,
                            children: u
                        }, p(null !== (O = t[o]) && void 0 !== O ? O : null, o)) : (0, r.jsx)(N.ZP, {
                            className: T().avatarContainerMasked,
                            height: S,
                            width: S,
                            mask: N.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: u
                        }, p(t[o], o)));
                        o++
                    }
                    null != _ ? a.push(_) : null != i && a.push(i);
                    return a
                };
                s.renderMoreUsers = function(e) {
                    var t = this.props,
                        E = t.max,
                        s = t.count,
                        S = t.hideMoreUsers,
                        _ = t.renderMoreUsers,
                        a = t.users,
                        I = Math.min(e, a.length);
                    if (!S)
                        if (null != s) {
                            if (s >= E) return (0, r.jsx)(n.Fragment, {
                                children: _("".concat(E, "+"), E)
                            }, "more-users");
                            if (s > a.length) {
                                var i = s - a.length;
                                return (0, r.jsx)(n.Fragment, {
                                    children: _("+".concat(i), i)
                                }, "more-users")
                            }
                        } else if (I < a.length) {
                        var o = Math.min(a.length - I, 99);
                        return (0, r.jsx)(n.Fragment, {
                            children: _("+".concat(o), o)
                        }, "more-users")
                    }
                };
                s.renderIcon = function() {
                    return this.props.renderIcon ? (0, r.jsx)(u.Z, {
                        foreground: T().foreground,
                        className: T().icon
                    }) : null
                };
                s.render = function() {
                    var e = this,
                        t = this.props,
                        E = t.className,
                        n = t.size,
                        s = t.users,
                        _ = t.guildId,
                        O = t.showUserPopout,
                        u = t.useFallbackUserForPopout,
                        l = this.state.popoutUserId,
                        N = s.find((function(e) {
                            return null != e && e.id === l
                        })),
                        c = u && null == R.default.getUser(l);
                    return (0, r.jsx)(I.Popout, {
                        position: "right",
                        preload: null == N ? void 0 : function() {
                            return (0, i.Z)(N.id, N.getAvatarURL(_, 80), {
                                guildId: _
                            })
                        },
                        shouldShow: !0 === O && null != l,
                        fixed: !0,
                        renderPopout: function(t) {
                            a()(null != l, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null");
                            return (0, r.jsx)(o.Z, P(f(P(f({}, e.props), {
                                user: c && null != N ? N : void 0
                            }), t), {
                                userId: l,
                                guildId: e.props.guildId
                            }))
                        },
                        onRequestClose: function() {
                            return e.setState({
                                popoutUserId: null
                            })
                        },
                        children: function(t) {
                            return (0, r.jsxs)("div", P(f({
                                className: S()(E, T().container, U(n)),
                                ref: e._ref
                            }, t), {
                                children: [e.renderIcon(), e.renderUsers()]
                            }))
                        }
                    })
                };
                return E
            }(n.PureComponent);
            h.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, r.jsx)("div", {
                        className: T().moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: G.SIZE_24
            };
            const Z = h
        },
        15086: (e, t, E) => {
            E.d(t, {
                Z: () => a
            });
            var r = E(441143),
                n = E.n(r),
                s = E(496486),
                S = E.n(s),
                _ = E(36256);

            function a(e, t, E) {
                var r = window.DiscordNative;
                n()(null != r, "Can't get desktop sources outside of native app");
                E = null != E ? E : {
                    width: 150,
                    height: 150
                };
                var s = [];
                if ((t = null != t ? t : [_.vA.WINDOW, _.vA.SCREEN]).includes(_.vA.SCREEN) && e.supports(_.AN.SCREEN_PREVIEWS)) {
                    s.push(e.getScreenPreviews(E.width, E.height));
                    t = t.filter((function(e) {
                        return e !== _.vA.SCREEN
                    }))
                }
                if (t.includes(_.vA.WINDOW) && e.supports(_.AN.WINDOW_PREVIEWS)) {
                    s.push(e.getWindowPreviews(E.width, E.height));
                    t = t.filter((function(e) {
                        return e !== _.vA.WINDOW
                    }))
                }
                0 !== t.length && s.push(r.desktopCapture.getDesktopCaptureSources({
                    types: t,
                    thumbnailSize: E
                }));
                return Promise.all(s).then((function(e) {
                    return S().flatten(e)
                }))
            }
        }
    }
]);