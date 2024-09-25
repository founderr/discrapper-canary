n.d(t, {
    VY: function () {
        return s;
    },
    _$: function () {
        return l;
    },
    wt: function () {
        return c;
    }
});
var r = n(411104);
var i = n(149765),
    a = n(981631),
    o = n(689938);
let s = [a.Plq.ADMINISTRATOR, a.Plq.MANAGE_GUILD, a.Plq.MANAGE_ROLES, a.Plq.MANAGE_CHANNELS, a.Plq.KICK_MEMBERS, a.Plq.BAN_MEMBERS, a.Plq.CREATE_INSTANT_INVITE, a.Plq.MANAGE_NICKNAMES, a.Plq.CHANGE_NICKNAME, a.Plq.MANAGE_GUILD_EXPRESSIONS, a.Plq.CREATE_GUILD_EXPRESSIONS, a.Plq.MANAGE_WEBHOOKS, a.Plq.VIEW_AUDIT_LOG, a.Plq.VIEW_CHANNEL, a.Plq.MANAGE_EVENTS, a.Plq.CREATE_EVENTS, a.Plq.MODERATE_MEMBERS, a.Plq.VIEW_GUILD_ANALYTICS, a.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS, a.Plq.USE_EXTERNAL_APPS, a.Plq.SEND_MESSAGES, a.Plq.SEND_MESSAGES_IN_THREADS, a.Plq.CREATE_PUBLIC_THREADS, a.Plq.CREATE_PRIVATE_THREADS, a.Plq.SEND_TTS_MESSAGES, a.Plq.MANAGE_MESSAGES, a.Plq.MANAGE_THREADS, a.Plq.EMBED_LINKS, a.Plq.ATTACH_FILES, a.Plq.READ_MESSAGE_HISTORY, a.Plq.MENTION_EVERYONE, a.Plq.ADD_REACTIONS, a.Plq.USE_EXTERNAL_EMOJIS, a.Plq.USE_EXTERNAL_STICKERS, a.Plq.USE_APPLICATION_COMMANDS, a.Plq.SEND_VOICE_MESSAGES, a.Plq.USE_CLYDE_AI, a.Plq.SEND_POLLS, a.Plq.CONNECT, a.Plq.SPEAK, a.Plq.MUTE_MEMBERS, a.Plq.DEAFEN_MEMBERS, a.Plq.MOVE_MEMBERS, a.Plq.USE_VAD, a.Plq.PRIORITY_SPEAKER, a.Plq.REQUEST_TO_SPEAK, a.Plq.STREAM, a.Plq.USE_EMBEDDED_ACTIVITIES, a.Plq.USE_SOUNDBOARD, a.Plq.USE_EXTERNAL_SOUNDS, a.Plq.SET_VOICE_CHANNEL_STATUS];
function l(e) {
    return Object.values(a.Plq).some((t) => i.e$(e, t) && !s.includes(t));
}
let u = {
    [a.Plq.ADMINISTRATOR.toString()]: () => o.Z.Messages.ADMINISTRATOR,
    [a.Plq.MANAGE_GUILD.toString()]: () => o.Z.Messages.MANAGE_SERVER,
    [a.Plq.MANAGE_ROLES.toString()]: () => o.Z.Messages.MANAGE_ROLES,
    [a.Plq.MANAGE_CHANNELS.toString()]: () => o.Z.Messages.MANAGE_CHANNELS,
    [a.Plq.KICK_MEMBERS.toString()]: () => o.Z.Messages.KICK_MEMBERS,
    [a.Plq.BAN_MEMBERS.toString()]: () => o.Z.Messages.BAN_MEMBERS,
    [a.Plq.CREATE_INSTANT_INVITE.toString()]: () => o.Z.Messages.CREATE_INSTANT_INVITE,
    [a.Plq.MANAGE_NICKNAMES.toString()]: () => o.Z.Messages.MANAGE_NICKNAMES,
    [a.Plq.CHANGE_NICKNAME.toString()]: () => o.Z.Messages.CHANGE_NICKNAME,
    [a.Plq.MANAGE_GUILD_EXPRESSIONS.toString()]: () => o.Z.Messages.MANAGE_EXPRESSIONS,
    [a.Plq.CREATE_GUILD_EXPRESSIONS.toString()]: () => o.Z.Messages.CREATE_EXPRESSIONS,
    [a.Plq.MANAGE_WEBHOOKS.toString()]: () => o.Z.Messages.MANAGE_WEBHOOKS,
    [a.Plq.VIEW_AUDIT_LOG.toString()]: () => o.Z.Messages.VIEW_AUDIT_LOG,
    [a.Plq.VIEW_CHANNEL.toString()]: () => o.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL,
    [a.Plq.SEND_MESSAGES.toString()]: () => o.Z.Messages.SEND_MESSAGES,
    [a.Plq.SEND_TTS_MESSAGES.toString()]: () => o.Z.Messages.SEND_TTS_MESSAGES,
    [a.Plq.MANAGE_MESSAGES.toString()]: () => o.Z.Messages.MANAGE_MESSAGES,
    [a.Plq.EMBED_LINKS.toString()]: () => o.Z.Messages.EMBED_LINKS,
    [a.Plq.ATTACH_FILES.toString()]: () => o.Z.Messages.ATTACH_FILES,
    [a.Plq.READ_MESSAGE_HISTORY.toString()]: () => o.Z.Messages.READ_MESSAGE_HISTORY,
    [a.Plq.MENTION_EVERYONE.toString()]: () => o.Z.Messages.MENTION_EVERYONE,
    [a.Plq.ADD_REACTIONS.toString()]: () => o.Z.Messages.ADD_REACTIONS,
    [a.Plq.USE_EXTERNAL_EMOJIS.toString()]: () => o.Z.Messages.USE_EXTERNAL_EMOJIS,
    [a.Plq.USE_EXTERNAL_STICKERS.toString()]: () => o.Z.Messages.USE_EXTERNAL_STICKERS,
    [a.Plq.USE_APPLICATION_COMMANDS.toString()]: () => o.Z.Messages.USE_APPLICATION_COMMANDS,
    [a.Plq.SEND_VOICE_MESSAGES.toString()]: () => o.Z.Messages.SEND_VOICE_MESSAGE,
    [a.Plq.CONNECT.toString()]: () => o.Z.Messages.CONNECT,
    [a.Plq.SPEAK.toString()]: () => o.Z.Messages.SPEAK,
    [a.Plq.MUTE_MEMBERS.toString()]: () => o.Z.Messages.MUTE_MEMBERS,
    [a.Plq.DEAFEN_MEMBERS.toString()]: () => o.Z.Messages.DEAFEN_MEMBERS,
    [a.Plq.MOVE_MEMBERS.toString()]: () => o.Z.Messages.MOVE_MEMBERS,
    [a.Plq.USE_VAD.toString()]: () => o.Z.Messages.USE_VAD,
    [a.Plq.PRIORITY_SPEAKER.toString()]: () => o.Z.Messages.PRIORITY_SPEAKER,
    [a.Plq.CREATE_PUBLIC_THREADS.toString()]: () => o.Z.Messages.CREATE_PUBLIC_THREADS,
    [a.Plq.CREATE_PRIVATE_THREADS.toString()]: () => o.Z.Messages.CREATE_PRIVATE_THREADS,
    [a.Plq.SEND_MESSAGES_IN_THREADS.toString()]: () => o.Z.Messages.SEND_MESSAGES_IN_THREADS,
    [a.Plq.MANAGE_THREADS.toString()]: () => o.Z.Messages.MANAGE_THREADS,
    [a.Plq.MANAGE_EVENTS.toString()]: () => o.Z.Messages.MANAGE_EVENTS,
    [a.Plq.CREATE_EVENTS.toString()]: () => o.Z.Messages.CREATE_EVENTS,
    [a.Plq.MODERATE_MEMBERS.toString()]: () => o.Z.Messages.MODERATE_MEMBERS_PERMISSION_INTERNAL,
    [a.Plq.REQUEST_TO_SPEAK.toString()]: () => o.Z.Messages.REQUEST_TO_SPEAK,
    [a.Plq.VIEW_GUILD_ANALYTICS.toString()]: () => o.Z.Messages.VIEW_GUILD_ANALYTICS,
    [a.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: () => o.Z.Messages.VIEW_CREATOR_MONETIZATION_ANALYTICS,
    [a.Plq.STREAM.toString()]: () => o.Z.Messages.VIDEO,
    [a.Plq.USE_EMBEDDED_ACTIVITIES.toString()]: () => o.Z.Messages.USE_EMBEDDED_ACTIVITIES,
    [a.Plq.USE_SOUNDBOARD.toString()]: () => o.Z.Messages.USE_SOUNDBOARD,
    [a.Plq.USE_EXTERNAL_SOUNDS.toString()]: () => o.Z.Messages.USE_EXTERNAL_SOUNDS,
    [a.Plq.USE_CLYDE_AI.toString()]: () => o.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI,
    [a.Plq.SET_VOICE_CHANNEL_STATUS.toString()]: () => o.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE,
    [a.Plq.SEND_POLLS.toString()]: () => o.Z.Messages.ROLE_PERMISSIONS_SEND_POLLS,
    [a.Plq.USE_EXTERNAL_APPS.toString()]: () => o.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_APPS
};
function c(e) {
    let t = u[e.toString()];
    if (null == t) throw Error('Unknown permission. Did you provide a _single_ bit flag? Perm: '.concat(e));
    return t();
}
