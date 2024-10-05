n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(735250);
n(470079);
var a = n(481060),
    s = n(835473),
    l = n(739566),
    r = n(942951),
    o = n(834129),
    c = n(689938),
    d = n(828972);
function u(e) {
    let { message: t, channel: n, compact: u } = e,
        _ = (0, l.ZP)(t),
        E = (0, r.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id
        })(_),
        I = (0, s.q)(t.applicationId);
    if (null == I) return null;
    let m = c.Z.Messages.SYSTEM_MESSAGE_CHANNEL_LINKED_TO_LOBBY.format({
        username: t.author.username,
        usernameHook: E,
        applicationName: I.name,
        helpdeskArticle: '#'
    });
    return (0, i.jsx)(o.Z, {
        iconNode: (0, i.jsx)(a.RefreshIcon, {
            size: 'sm',
            color: a.tokens.colors.STATUS_POSITIVE
        }),
        timestamp: t.timestamp,
        compact: u,
        contentClassName: d.systemMessage,
        children: m
    });
}
