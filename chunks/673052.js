n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(835473),
    a = n(739566),
    o = n(942951),
    s = n(834129),
    c = n(388032),
    u = n(845778);
function d(e) {
    let { message: t, channel: n, compact: d } = e,
        m = (0, a.ZP)(t),
        h = (0, o.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id
        })(m),
        f = (0, l.q)(t.applicationId);
    if (null == f) return null;
    let p = c.intl.format(c.t.fwn2Mz, {
        username: t.author.username,
        usernameHook: h,
        applicationName: f.name,
        helpdeskArticle: '#'
    });
    return (0, i.jsx)(s.Z, {
        iconNode: (0, i.jsx)(r.RefreshIcon, {
            size: 'sm',
            color: r.tokens.colors.STATUS_POSITIVE
        }),
        timestamp: t.timestamp,
        compact: d,
        contentClassName: u.systemMessage,
        children: p
    });
}
