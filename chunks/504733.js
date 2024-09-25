n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(739566),
    o = n(942951),
    s = n(834129),
    l = n(981791),
    u = n(56689);
function c(e) {
    let { message: t, channel: n, compact: c } = e,
        d = (0, a.ZP)(t),
        _ = t.application,
        E = (0, o.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id
        });
    return (0, r.jsx)(s.Z, {
        iconNode: (0, r.jsx)(i.TicketIcon, {
            size: 'md',
            color: 'currentColor',
            className: u.ticketIcon
        }),
        timestamp: t.timestamp,
        compact: c,
        children: (0, l.A)({
            application: _,
            username: d.nick,
            usernameHook: E(d)
        })
    });
}
