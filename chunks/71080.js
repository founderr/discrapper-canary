n.d(t, {
    EQ: function () {
        return E;
    },
    IG: function () {
        return h;
    },
    aC: function () {
        return r;
    },
    kf: function () {
        return f;
    },
    m$: function () {
        return i;
    }
});
var r,
    i,
    a,
    o,
    s = n(230711),
    l = n(197062),
    u = n(727866),
    c = n(63063),
    d = n(981631),
    _ = n(689938);
!(function (e) {
    (e[(e.EMPTY_STATE = 0)] = 'EMPTY_STATE'), (e[(e.ADMINISTRATOR = 1)] = 'ADMINISTRATOR'), (e[(e.ROLE = 2)] = 'ROLE'), (e[(e.OWNER = 3)] = 'OWNER'), (e[(e.MEMBER = 4)] = 'MEMBER'), (e[(e.USER = 5)] = 'USER'), (e[(e.GUILD = 6)] = 'GUILD');
})(r || (r = {})),
    !(function (e) {
        (e[(e.ROLES = 0)] = 'ROLES'), (e[(e.MEMBERS = 1)] = 'MEMBERS'), (e[(e.USERS = 2)] = 'USERS'), (e[(e.GUILDS = 3)] = 'GUILDS');
    })(i || (i = {}));
let E = 20,
    f = 'channelPermissionSettingsAdvancedModeOn';
function h(e, t, n, r) {
    let i = e.type;
    return {
        [d.Plq.VIEW_CHANNEL.toString()]: {
            title: i === d.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL : _.Z.Messages.VIEW_CHANNEL,
            description: (() => {
                if (t)
                    switch (i) {
                        case d.d4z.GUILD_CATEGORY:
                            return _.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CATEGORY_EVERYONE;
                        case d.d4z.GUILD_VOICE:
                        case d.d4z.GUILD_STAGE_VOICE:
                            return _.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_VOICE_EVERYONE;
                        default:
                            return _.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_TEXT_EVERYONE;
                    }
                return i === d.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CHANNEL;
            })(),
            flag: d.Plq.VIEW_CHANNEL
        },
        [d.Plq.MANAGE_CHANNELS.toString()]: {
            title: i === d.d4z.GUILD_CATEGORY ? _.Z.Messages.MANAGE_CHANNELS : _.Z.Messages.MANAGE_CHANNEL,
            description: (() => {
                switch (i) {
                    case d.d4z.GUILD_CATEGORY:
                        return _.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_CATEGORY;
                    case d.d4z.GUILD_VOICE:
                        return _.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_VOICE;
                    case d.d4z.GUILD_STAGE_VOICE:
                        return _.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_STAGE;
                    default:
                        return _.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_TEXT;
                }
            })(),
            flag: d.Plq.MANAGE_CHANNELS
        },
        [d.Plq.MANAGE_ROLES.toString()]: {
            title: _.Z.Messages.MANAGE_PERMISSIONS,
            description: (() => {
                switch (i) {
                    case d.d4z.GUILD_CATEGORY:
                        return _.Z.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_CATEGORY;
                    case d.d4z.GUILD_STAGE_VOICE:
                        return _.Z.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_STAGE;
                    default:
                        return _.Z.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_CHANNEL;
                }
            })(),
            flag: d.Plq.MANAGE_ROLES
        },
        [d.Plq.MANAGE_WEBHOOKS.toString()]: {
            title: _.Z.Messages.MANAGE_WEBHOOKS,
            description: i === d.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION_CHANNEL,
            flag: d.Plq.MANAGE_WEBHOOKS
        },
        [d.Plq.CREATE_INSTANT_INVITE.toString()]: {
            title: _.Z.Messages.CREATE_INSTANT_INVITE,
            description: (() => {
                switch (i) {
                    case d.d4z.GUILD_CATEGORY:
                        return _.Z.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_CATEGORY;
                    case d.d4z.GUILD_VOICE:
                    case d.d4z.GUILD_STAGE_VOICE:
                        return _.Z.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_VOICE;
                    default:
                        return _.Z.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_TEXT;
                }
            })(),
            flag: d.Plq.CREATE_INSTANT_INVITE
        },
        [d.Plq.SEND_MESSAGES.toString()]: {
            title: d.TPd.GUILD_THREADS_ONLY.has(i) ? _.Z.Messages.CREATE_FORUM_POSTS : n && i === d.d4z.GUILD_CATEGORY ? _.Z.Messages.SEND_MESSAGES_AND_CREATE_FORUM_POSTS : _.Z.Messages.SEND_MESSAGES,
            description: (() => {
                switch (i) {
                    case d.d4z.GUILD_CATEGORY:
                        return n ? _.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_CATEGORY;
                    case d.d4z.GUILD_FORUM:
                        return (null == r ? void 0 : r.createPostsDisabled) && !e.isMediaChannel() ? l.Z.getForumChannelPermissionText() : _.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT;
                    case d.d4z.GUILD_MEDIA:
                        return _.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT;
                    case d.d4z.GUILD_ANNOUNCEMENT:
                        return _.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_ANNOUNCEMENT.format({ articleURL: c.Z.getArticleURL(d.BhN.ANNOUNCEMENT_CHANNELS) });
                    case d.d4z.GUILD_VOICE:
                        return u.Z.getTextInVoiceSendMessageChannelPermissionText(null == r ? void 0 : r.sendMessagesDisabled);
                    default:
                        return _.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_TEXT;
                }
            })(),
            flag: d.Plq.SEND_MESSAGES
        },
        [d.Plq.EMBED_LINKS.toString()]: {
            title: _.Z.Messages.EMBED_LINKS,
            description: i === d.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION_TEXT,
            flag: d.Plq.EMBED_LINKS
        },
        [d.Plq.ATTACH_FILES.toString()]: {
            title: _.Z.Messages.ATTACH_FILES,
            description: i === d.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION_TEXT,
            flag: d.Plq.ATTACH_FILES
        },
        [d.Plq.ADD_REACTIONS.toString()]: {
            title: _.Z.Messages.ADD_REACTIONS,
            description: (() => {
                switch (i) {
                    case d.d4z.GUILD_CATEGORY:
                        return _.Z.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_CATEGORY;
                    case d.d4z.GUILD_VOICE:
                        return _.Z.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_TEXT_WITH_VOICE_CHANNEL_EFFECTS;
                    default:
                        return _.Z.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_TEXT;
                }
            })(),
            flag: d.Plq.ADD_REACTIONS
        },
        [d.Plq.USE_EXTERNAL_EMOJIS.toString()]: {
            title: _.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS,
            description: i === d.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION_TEXT,
            flag: d.Plq.USE_EXTERNAL_EMOJIS
        },
        [d.Plq.USE_EXTERNAL_STICKERS.toString()]: {
            title: _.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS,
            description: i === d.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION_TEXT,
            flag: d.Plq.USE_EXTERNAL_STICKERS
        },
        [d.Plq.MENTION_EVERYONE.toString()]: {
            title: i === d.d4z.GUILD_STAGE_VOICE ? _.Z.Messages.MENTION_EVERYONE_STAGE : _.Z.Messages.MENTION_EVERYONE,
            description: i === d.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_CATEGORY : i === d.d4z.GUILD_STAGE_VOICE ? _.Z.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_STAGE : _.Z.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_TEXT,
            flag: d.Plq.MENTION_EVERYONE
        },
        [d.Plq.MANAGE_MESSAGES.toString()]: {
            title: _.Z.Messages.MANAGE_MESSAGES,
            description: (() => {
                switch (i) {
                    case d.d4z.GUILD_CATEGORY:
                        return _.Z.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_CATEGORY;
                    case d.d4z.GUILD_ANNOUNCEMENT:
                        return _.Z.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_ANNOUNCEMENT.format({ articleURL: c.Z.getArticleURL(d.BhN.ANNOUNCEMENT_CHANNELS) });
                    default:
                        return _.Z.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_TEXT;
                }
            })(),
            flag: d.Plq.MANAGE_MESSAGES
        },
        [d.Plq.READ_MESSAGE_HISTORY.toString()]: {
            title: d.TPd.GUILD_THREADS_ONLY.has(i) ? _.Z.Messages.READ_POST_HISTORY : _.Z.Messages.READ_MESSAGE_HISTORY,
            description: (() => {
                switch (i) {
                    case d.d4z.GUILD_CATEGORY:
                        return _.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_CATEGORY;
                    case d.d4z.GUILD_VOICE:
                        return u.Z.getTextInVoiceReadMessageHistoryChannelPermissionText(null == r ? void 0 : r.readMessageHistoryDisabled);
                    case d.d4z.GUILD_FORUM:
                    case d.d4z.GUILD_MEDIA:
                        return _.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_FORUM_CHANNEL;
                    default:
                        return _.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_TEXT;
                }
            })(),
            flag: d.Plq.READ_MESSAGE_HISTORY
        },
        [d.Plq.SEND_TTS_MESSAGES.toString()]: {
            title: _.Z.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES,
            description: i === d.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION_TEXT,
            flag: d.Plq.SEND_TTS_MESSAGES
        },
        [d.Plq.USE_APPLICATION_COMMANDS.toString()]: {
            title: _.Z.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS,
            description: i === d.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_DESCRIPTION_TEXT,
            flag: d.Plq.USE_APPLICATION_COMMANDS
        },
        [d.Plq.SEND_VOICE_MESSAGES.toString()]: {
            title: _.Z.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE,
            description: i === d.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGES_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGES_DESCRIPTION_TEXT,
            flag: d.Plq.SEND_VOICE_MESSAGES
        },
        [d.Plq.SEND_POLLS.toString()]: {
            title: _.Z.Messages.ROLE_PERMISSIONS_SEND_POLLS,
            description: i === d.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_SEND_POLLS_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_SEND_POLLS_DESCRIPTION_TEXT,
            flag: d.Plq.SEND_POLLS
        },
        [d.Plq.USE_CLYDE_AI.toString()]: {
            title: _.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI,
            description: i === d.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION : _.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI_CHANNEL_DESCRIPTION,
            flag: d.Plq.USE_CLYDE_AI
        },
        [d.Plq.CONNECT.toString()]: {
            title: _.Z.Messages.CONNECT,
            description: (() => {
                if (t)
                    switch (i) {
                        case d.d4z.GUILD_CATEGORY:
                            return _.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_CATEGORY_EVERYONE;
                        case d.d4z.GUILD_STAGE_VOICE:
                            return _.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_STAGE_EVERYONE;
                        case d.d4z.GUILD_TEXT:
                        case d.d4z.GUILD_FORUM:
                        case d.d4z.GUILD_MEDIA:
                            return _.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_THREADS_EVERYONE;
                        default:
                            return _.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_VOICE_EVERYONE;
                    }
                switch (i) {
                    case d.d4z.GUILD_CATEGORY:
                        return _.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_CATEGORY;
                    case d.d4z.GUILD_STAGE_VOICE:
                        return _.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_STAGE;
                    case d.d4z.GUILD_TEXT:
                    case d.d4z.GUILD_FORUM:
                    case d.d4z.GUILD_MEDIA:
                        return _.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_THREADS;
                    default:
                        return _.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_VOICE;
                }
            })(),
            flag: d.Plq.CONNECT
        },
        [d.Plq.SPEAK.toString()]: {
            title: _.Z.Messages.SPEAK,
            description: (() => {
                switch (i) {
                    case d.d4z.GUILD_CATEGORY:
                        return _.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_CATEGORY;
                    case d.d4z.GUILD_STAGE_VOICE:
                        return _.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_STAGE;
                    case d.d4z.GUILD_TEXT:
                    case d.d4z.GUILD_FORUM:
                    case d.d4z.GUILD_MEDIA:
                        return _.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_THREADS;
                    default:
                        return _.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_VOICE;
                }
            })(),
            flag: d.Plq.SPEAK
        },
        [d.Plq.STREAM.toString()]: {
            title: _.Z.Messages.VIDEO,
            description: (() => {
                switch (i) {
                    case d.d4z.GUILD_CATEGORY:
                        return _.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_CATEGORY;
                    case d.d4z.GUILD_TEXT:
                    case d.d4z.GUILD_FORUM:
                    case d.d4z.GUILD_MEDIA:
                        return _.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_THREADS;
                    case d.d4z.GUILD_STAGE_VOICE:
                        return _.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_STAGE;
                    default:
                        return _.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_VOICE;
                }
            })(),
            flag: d.Plq.STREAM
        },
        [d.Plq.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: _.Z.Messages.USE_EMBEDDED_ACTIVITIES,
            description: (() => {
                switch (i) {
                    case d.d4z.GUILD_CATEGORY:
                        return _.Z.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_CATEGORY;
                    case d.d4z.GUILD_FORUM:
                    case d.d4z.GUILD_MEDIA:
                        return _.Z.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_THREADS;
                    default:
                        return _.Z.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_CHANNEL;
                }
            })(),
            flag: d.Plq.USE_EMBEDDED_ACTIVITIES
        },
        [d.Plq.USE_EXTERNAL_APPS.toString()]: {
            title: _.Z.Messages.USE_EXTERNAL_APPS,
            description: (() => {
                switch (i) {
                    case d.d4z.GUILD_CATEGORY:
                        return _.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_APPS_DESCRIPTION_CATEGORY;
                    case d.d4z.GUILD_FORUM:
                    case d.d4z.GUILD_MEDIA:
                        return _.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_APPS_DESCRIPTION_THREADS;
                    default:
                        return _.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_APPS_DESCRIPTION_CHANNEL;
                }
            })(),
            flag: d.Plq.USE_EXTERNAL_APPS
        },
        [d.Plq.USE_SOUNDBOARD.toString()]: {
            title: _.Z.Messages.USE_SOUNDBOARD,
            description: (() => {
                switch (i) {
                    case d.d4z.GUILD_CATEGORY:
                        return _.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_CATEGORY.format({ helpCenterArticle: c.Z.getArticleURL(d.BhN.SOUNDBOARD) });
                    case d.d4z.GUILD_TEXT:
                    case d.d4z.GUILD_FORUM:
                    case d.d4z.GUILD_MEDIA:
                        return _.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_THREADS.format({ helpCenterArticle: c.Z.getArticleURL(d.BhN.SOUNDBOARD) });
                    default:
                        return _.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_VOICE.format({ helpCenterArticle: c.Z.getArticleURL(d.BhN.SOUNDBOARD) });
                }
            })(),
            flag: d.Plq.USE_SOUNDBOARD
        },
        [d.Plq.USE_EXTERNAL_SOUNDS.toString()]: {
            title: _.Z.Messages.USE_EXTERNAL_SOUNDS,
            description: _.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_SOUNDS_DESCRIPTION,
            flag: d.Plq.USE_EXTERNAL_SOUNDS
        },
        [d.Plq.USE_VAD.toString()]: {
            title: _.Z.Messages.USE_VAD,
            description: (() => {
                switch (i) {
                    case d.d4z.GUILD_CATEGORY:
                        return _.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_CATEGORY;
                    case d.d4z.GUILD_STAGE_VOICE:
                        return _.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_STAGE;
                    case d.d4z.GUILD_TEXT:
                    case d.d4z.GUILD_FORUM:
                    case d.d4z.GUILD_MEDIA:
                        return _.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_THREADS;
                    default:
                        return _.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_VOICE;
                }
            })(),
            flag: d.Plq.USE_VAD
        },
        [d.Plq.PRIORITY_SPEAKER.toString()]: {
            title: _.Z.Messages.PRIORITY_SPEAKER,
            description: (() => {
                let e = {
                    keybind: _.Z.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
                    onClick: () => {
                        s.Z.open(d.oAB.KEYBINDS);
                    }
                };
                switch (i) {
                    case d.d4z.GUILD_CATEGORY:
                        return _.Z.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_CATEGORY.format(e);
                    case d.d4z.GUILD_TEXT:
                    case d.d4z.GUILD_FORUM:
                    case d.d4z.GUILD_MEDIA:
                        return _.Z.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_THREADS.format(e);
                    default:
                        return _.Z.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_VOICE.format(e);
                }
            })(),
            flag: d.Plq.PRIORITY_SPEAKER
        },
        [d.Plq.MUTE_MEMBERS.toString()]: {
            title: _.Z.Messages.MUTE_MEMBERS,
            description: (() => {
                switch (i) {
                    case d.d4z.GUILD_CATEGORY:
                        return _.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_CATEGORY;
                    case d.d4z.GUILD_STAGE_VOICE:
                        return _.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_STAGE;
                    case d.d4z.GUILD_TEXT:
                    case d.d4z.GUILD_FORUM:
                    case d.d4z.GUILD_MEDIA:
                        return _.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_THREADS;
                    default:
                        return _.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_VOICE;
                }
            })(),
            flag: d.Plq.MUTE_MEMBERS
        },
        [d.Plq.DEAFEN_MEMBERS.toString()]: {
            title: _.Z.Messages.DEAFEN_MEMBERS,
            description: (() => {
                switch (i) {
                    case d.d4z.GUILD_CATEGORY:
                        return _.Z.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_CATEGORY;
                    case d.d4z.GUILD_TEXT:
                    case d.d4z.GUILD_FORUM:
                    case d.d4z.GUILD_MEDIA:
                        return _.Z.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_THREADS;
                    default:
                        return _.Z.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_VOICE;
                }
            })(),
            flag: d.Plq.DEAFEN_MEMBERS
        },
        [d.Plq.MOVE_MEMBERS.toString()]: {
            title: _.Z.Messages.MOVE_MEMBERS,
            description: (() => {
                switch (i) {
                    case d.d4z.GUILD_CATEGORY:
                        return _.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_CATEGORY;
                    case d.d4z.GUILD_STAGE_VOICE:
                        return _.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_STAGE;
                    case d.d4z.GUILD_TEXT:
                    case d.d4z.GUILD_FORUM:
                    case d.d4z.GUILD_MEDIA:
                        return _.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_THREADS;
                    default:
                        return _.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_VOICE;
                }
            })(),
            flag: d.Plq.MOVE_MEMBERS
        },
        [d.Plq.REQUEST_TO_SPEAK.toString()]: {
            title: _.Z.Messages.REQUEST_TO_SPEAK,
            description: i === d.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION_STAGE,
            flag: d.Plq.REQUEST_TO_SPEAK
        },
        [d.Plq.MANAGE_THREADS.toString()]: {
            title: d.TPd.GUILD_THREADS_ONLY.has(i) ? _.Z.Messages.MANAGE_FORUM_POSTS : n && i === d.d4z.GUILD_CATEGORY ? _.Z.Messages.MANAGE_THREADS_AND_FORUM_POSTS : _.Z.Messages.MANAGE_THREADS,
            description: (() => {
                switch (i) {
                    case d.d4z.GUILD_CATEGORY:
                        return n ? _.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION_CATEGORY;
                    case d.d4z.GUILD_FORUM:
                    case d.d4z.GUILD_MEDIA:
                        return _.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION_TEXT;
                    default:
                        return _.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION_TEXT;
                }
            })(),
            flag: d.Plq.MANAGE_THREADS
        },
        [d.Plq.CREATE_PUBLIC_THREADS.toString()]: {
            title: _.Z.Messages.CREATE_PUBLIC_THREADS,
            description: i === d.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION_TEXT,
            flag: d.Plq.CREATE_PUBLIC_THREADS
        },
        [d.Plq.CREATE_PRIVATE_THREADS.toString()]: {
            title: _.Z.Messages.CREATE_PRIVATE_THREADS,
            description: i === d.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION_TEXT,
            flag: d.Plq.CREATE_PRIVATE_THREADS
        },
        [d.Plq.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: d.TPd.GUILD_THREADS_ONLY.has(i) ? _.Z.Messages.SEND_MESSAGES_IN_FORUM_POSTS : n && i === d.d4z.GUILD_CATEGORY ? _.Z.Messages.SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS : _.Z.Messages.SEND_MESSAGES_IN_THREADS,
            description: (() => {
                switch (i) {
                    case d.d4z.GUILD_CATEGORY:
                        return n ? _.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION_CATEGORY;
                    case d.d4z.GUILD_FORUM:
                    case d.d4z.GUILD_MEDIA:
                        return _.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION_TEXT;
                    default:
                        return _.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION_TEXT;
                }
            })(),
            flag: d.Plq.SEND_MESSAGES_IN_THREADS
        },
        [d.Plq.MANAGE_EVENTS.toString()]: {
            title: _.Z.Messages.MANAGE_EVENTS,
            description: i === d.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION_CHANNEL,
            flag: d.Plq.MANAGE_EVENTS
        },
        [d.Plq.CREATE_EVENTS.toString()]: {
            title: _.Z.Messages.CREATE_EVENTS,
            description: i === d.d4z.GUILD_CATEGORY ? _.Z.Messages.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION_CATEGORY : _.Z.Messages.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION_CHANNEL,
            flag: d.Plq.CREATE_EVENTS
        },
        [d.Plq.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: _.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE,
            description: _.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_DESCRIPTION,
            flag: d.Plq.SET_VOICE_CHANNEL_STATUS
        }
    };
}
!(function (e) {
    (e.SETTINGS_PAGE = 'settings-page'), (e.MEMBERS_LIST = 'members-list'), (e.EMPTY_STATE = 'empty-state'), (e.CREATE_CHANNEL = 'create-channel');
})(a || (a = {})),
    !(function (e) {
        (e.BASIC = 'basic'), (e.ADVANCED = 'advanced');
    })(o || (o = {}));
