n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(835473),
    o = n(739566),
    s = n(942951),
    l = n(834129),
    u = n(689938),
    c = n(828972);
function d(e) {
    let { message: t, channel: n, compact: d } = e,
        _ = (0, o.ZP)(t),
        E = (0, s.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id
        })(_),
        f = (0, a.q)(t.applicationId);
    if (null == f) return null;
    let h = u.Z.Messages.SYSTEM_MESSAGE_CHANNEL_LINKED_TO_LOBBY.format({
        username: t.author.username,
        usernameHook: E,
        applicationName: f.name,
        helpdeskArticle: '#'
    });
    return (0, r.jsx)(l.Z, {
        iconNode: (0, r.jsx)(i.RefreshIcon, {
            size: 'sm',
            color: i.tokens.colors.STATUS_POSITIVE
        }),
        timestamp: t.timestamp,
        compact: d,
        contentClassName: c.systemMessage,
        children: h
    });
}
