n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(442837),
    s = n(131704),
    a = n(592125),
    l = n(430824),
    r = n(944486),
    o = n(981631);
function c(e, t) {
    let n = (0, i.e7)([l.Z], () => l.Z.getGuild(t)),
        c = (0, i.e7)([a.Z], () => a.Z.getChannel(e));
    return e === (0, i.e7)([r.Z], () => r.Z.getChannelId(t)) && null != c && null != n && c.getGuildId() === n.id && (0, s.zi)(c.type) && n.hasFeature(o.oNc.WELCOME_SCREEN_ENABLED) && n.hasFeature(o.oNc.COMMUNITY) && !n.hasFeature(o.oNc.GUILD_SERVER_GUIDE);
}
