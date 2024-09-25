var r,
    i = n(47120);
var a = n(626135),
    o = n(591759),
    s = n(777754),
    l = n(754688),
    u = n(981631);
!(function (e) {
    (e.MESSAGE = 'Discord Message Link'), (e.CHANNEL = 'Discord Channel Link'), (e.SERVER_INVITE = 'Discord Server Invite'), (e.GIFT = 'Discord Gift Link'), (e.UNKNOWN = 'Unknown');
})(r || (r = {}));
let c = [
    (e) => (s.Z.isInvite(e) ? 'Discord Server Invite' : null),
    (e) => {
        let t = o.Z.safeParseWithQuery(e);
        if (null == t) return null;
        let n = (0, l.Qj)(t.path);
        return null == n
            ? null
            : d({
                  guildId: n.guildId,
                  channelId: n.channelId,
                  messageId: n.messageId
              });
    }
];
function d(e) {
    return null != e.guildId && null != e.channelId && null != e.messageId ? 'Discord Message Link' : null != e.guildId && null != e.channelId ? 'Discord Channel Link' : 'Unknown';
}
function _(e) {
    for (let t of c) {
        let n = t(e);
        if (null != n) return n;
    }
    return 'Unknown';
}
function E(e, t) {
    return null == t && null == e ? 'Unknown' : null == t ? _(e) : d(t);
}
function f(e) {
    a.default.track(u.rMx.LINK_CLICKED, {
        is_discord_link: !0,
        discord_link_type: d(e)
    });
}
function h(e, t) {
    if (null == e && null == t) return;
    let n = o.Z.isDiscordUrl(e, !0) || null != t;
    a.default.track(u.rMx.LINK_CLICKED, {
        is_discord_link: n,
        discord_link_type: n ? E(e, t) : null
    });
}
function p(e) {
    let { messageId: t, channelId: n, guildId: r, sourceChannelId: i, sourceGuildId: o } = e;
    a.default.track(u.rMx.ANNOUNCEMENT_MESSAGE_LINK_CLICKED, {
        message_id: t,
        channel_id: n,
        guild_id: r,
        source_channel_id: i,
        source_guild_id: o
    });
}
t.Z = {
    trackDiscordLinkClicked: f,
    trackLinkClicked: h,
    trackAnnouncementMessageLinkClicked: p
};
