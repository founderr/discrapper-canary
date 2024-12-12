r.d(n, {
    VY: function () {
        return l;
    },
    _$: function () {
        return u;
    },
    wt: function () {
        return d;
    }
});
var i = r(411104);
var a = r(149765),
    s = r(981631),
    o = r(388032);
let l = [s.Plq.ADMINISTRATOR, s.Plq.MANAGE_GUILD, s.Plq.MANAGE_ROLES, s.Plq.MANAGE_CHANNELS, s.Plq.KICK_MEMBERS, s.Plq.BAN_MEMBERS, s.Plq.CREATE_INSTANT_INVITE, s.Plq.MANAGE_NICKNAMES, s.Plq.CHANGE_NICKNAME, s.Plq.MANAGE_GUILD_EXPRESSIONS, s.Plq.CREATE_GUILD_EXPRESSIONS, s.Plq.MANAGE_WEBHOOKS, s.Plq.VIEW_AUDIT_LOG, s.Plq.VIEW_CHANNEL, s.Plq.MANAGE_EVENTS, s.Plq.CREATE_EVENTS, s.Plq.MODERATE_MEMBERS, s.Plq.VIEW_GUILD_ANALYTICS, s.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS, s.Plq.USE_EXTERNAL_APPS, s.Plq.SEND_MESSAGES, s.Plq.SEND_MESSAGES_IN_THREADS, s.Plq.CREATE_PUBLIC_THREADS, s.Plq.CREATE_PRIVATE_THREADS, s.Plq.SEND_TTS_MESSAGES, s.Plq.MANAGE_MESSAGES, s.Plq.MANAGE_THREADS, s.Plq.EMBED_LINKS, s.Plq.ATTACH_FILES, s.Plq.READ_MESSAGE_HISTORY, s.Plq.MENTION_EVERYONE, s.Plq.ADD_REACTIONS, s.Plq.USE_EXTERNAL_EMOJIS, s.Plq.USE_EXTERNAL_STICKERS, s.Plq.USE_APPLICATION_COMMANDS, s.Plq.SEND_VOICE_MESSAGES, s.Plq.USE_CLYDE_AI, s.Plq.SEND_POLLS, s.Plq.CONNECT, s.Plq.SPEAK, s.Plq.MUTE_MEMBERS, s.Plq.DEAFEN_MEMBERS, s.Plq.MOVE_MEMBERS, s.Plq.USE_VAD, s.Plq.PRIORITY_SPEAKER, s.Plq.REQUEST_TO_SPEAK, s.Plq.STREAM, s.Plq.USE_EMBEDDED_ACTIVITIES, s.Plq.USE_SOUNDBOARD, s.Plq.USE_EXTERNAL_SOUNDS, s.Plq.SET_VOICE_CHANNEL_STATUS];
function u(e) {
    return Object.values(s.Plq).some((n) => a.e$(e, n) && !l.includes(n));
}
let c = {
    [s.Plq.ADMINISTRATOR.toString()]: () => o.intl.string(o.t.PGvZqa),
    [s.Plq.MANAGE_GUILD.toString()]: () => o.intl.string(o.t.QZRcfH),
    [s.Plq.MANAGE_ROLES.toString()]: () => o.intl.string(o.t['C8d+oK']),
    [s.Plq.MANAGE_CHANNELS.toString()]: () => o.intl.string(o.t['9qLtWl']),
    [s.Plq.KICK_MEMBERS.toString()]: () => o.intl.string(o.t.pBNv6u),
    [s.Plq.BAN_MEMBERS.toString()]: () => o.intl.string(o.t.oTBA7O),
    [s.Plq.CREATE_INSTANT_INVITE.toString()]: () => o.intl.string(o.t.zJrgTE),
    [s.Plq.MANAGE_NICKNAMES.toString()]: () => o.intl.string(o.t['t+Ct5+']),
    [s.Plq.CHANGE_NICKNAME.toString()]: () => o.intl.string(o.t.dilOFx),
    [s.Plq.MANAGE_GUILD_EXPRESSIONS.toString()]: () => o.intl.string(o.t.bbuXIi),
    [s.Plq.CREATE_GUILD_EXPRESSIONS.toString()]: () => o.intl.string(o.t.HarVuL),
    [s.Plq.MANAGE_WEBHOOKS.toString()]: () => o.intl.string(o.t['/ADKmJ']),
    [s.Plq.VIEW_AUDIT_LOG.toString()]: () => o.intl.string(o.t.fZgLpK),
    [s.Plq.VIEW_CHANNEL.toString()]: () => o.intl.string(o.t.uV83ys),
    [s.Plq.SEND_MESSAGES.toString()]: () => o.intl.string(o.t.T32rkJ),
    [s.Plq.SEND_TTS_MESSAGES.toString()]: () => o.intl.string(o.t.Mg7bkp),
    [s.Plq.MANAGE_MESSAGES.toString()]: () => o.intl.string(o.t['6lU9xM']),
    [s.Plq.EMBED_LINKS.toString()]: () => o.intl.string(o.t['969dEB']),
    [s.Plq.ATTACH_FILES.toString()]: () => o.intl.string(o.t['3AS4UF']),
    [s.Plq.READ_MESSAGE_HISTORY.toString()]: () => o.intl.string(o.t.l9ufaW),
    [s.Plq.MENTION_EVERYONE.toString()]: () => o.intl.string(o.t.Y78KGB),
    [s.Plq.ADD_REACTIONS.toString()]: () => o.intl.string(o.t.yEoJAg),
    [s.Plq.USE_EXTERNAL_EMOJIS.toString()]: () => o.intl.string(o.t.BpBGZW),
    [s.Plq.USE_EXTERNAL_STICKERS.toString()]: () => o.intl.string(o.t['UeRs+f']),
    [s.Plq.USE_APPLICATION_COMMANDS.toString()]: () => o.intl.string(o.t.shbR1d),
    [s.Plq.SEND_VOICE_MESSAGES.toString()]: () => o.intl.string(o.t['+8GStb']),
    [s.Plq.CONNECT.toString()]: () => o.intl.string(o.t.S0W8Z2),
    [s.Plq.SPEAK.toString()]: () => o.intl.string(o.t['8w1tIS']),
    [s.Plq.MUTE_MEMBERS.toString()]: () => o.intl.string(o.t['8EI309']),
    [s.Plq.DEAFEN_MEMBERS.toString()]: () => o.intl.string(o.t['9L47Fh']),
    [s.Plq.MOVE_MEMBERS.toString()]: () => o.intl.string(o.t.YtjJPT),
    [s.Plq.USE_VAD.toString()]: () => o.intl.string(o.t['08zAV1']),
    [s.Plq.PRIORITY_SPEAKER.toString()]: () => o.intl.string(o.t.BVK71t),
    [s.Plq.CREATE_PUBLIC_THREADS.toString()]: () => o.intl.string(o.t['25rKnZ']),
    [s.Plq.CREATE_PRIVATE_THREADS.toString()]: () => o.intl.string(o.t.QwbTSU),
    [s.Plq.SEND_MESSAGES_IN_THREADS.toString()]: () => o.intl.string(o.t.fTE74u),
    [s.Plq.MANAGE_THREADS.toString()]: () => o.intl.string(o.t.kEqgr6),
    [s.Plq.MANAGE_EVENTS.toString()]: () => o.intl.string(o.t.HIgA5e),
    [s.Plq.CREATE_EVENTS.toString()]: () => o.intl.string(o.t.qyjZub),
    [s.Plq.MODERATE_MEMBERS.toString()]: () => o.intl.string(o.t['7DgVBg']),
    [s.Plq.REQUEST_TO_SPEAK.toString()]: () => o.intl.string(o.t['5kicT0']),
    [s.Plq.VIEW_GUILD_ANALYTICS.toString()]: () => o.intl.string(o.t.rQJBEx),
    [s.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: () => o.intl.string(o.t['0lTLTk']),
    [s.Plq.STREAM.toString()]: () => o.intl.string(o.t.FlNoSU),
    [s.Plq.USE_EMBEDDED_ACTIVITIES.toString()]: () => o.intl.string(o.t.rLSGen),
    [s.Plq.USE_SOUNDBOARD.toString()]: () => o.intl.string(o.t.Bco7ND),
    [s.Plq.USE_EXTERNAL_SOUNDS.toString()]: () => o.intl.string(o.t.pwaVJy),
    [s.Plq.USE_CLYDE_AI.toString()]: () => o.intl.string(o.t['8eeEZm']),
    [s.Plq.SET_VOICE_CHANNEL_STATUS.toString()]: () => o.intl.string(o.t.VBwkUV),
    [s.Plq.SEND_POLLS.toString()]: () => o.intl.string(o.t.UMQ7W1),
    [s.Plq.USE_EXTERNAL_APPS.toString()]: () => o.intl.string(o.t.TtA5rK)
};
function d(e) {
    let n = c[e.toString()];
    if (null == n) throw Error('Unknown permission. Did you provide a _single_ bit flag? Perm: '.concat(e));
    return n();
}
