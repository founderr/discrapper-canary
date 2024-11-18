n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(442837),
    l = n(131704),
    r = n(592125),
    a = n(430824),
    s = n(944486),
    o = n(981631);
function c(e, t) {
    let n = (0, i.e7)([a.Z], () => a.Z.getGuild(t)),
        c = (0, i.e7)([r.Z], () => r.Z.getChannel(e));
    return e === (0, i.e7)([s.Z], () => s.Z.getChannelId(t)) && null != c && null != n && c.getGuildId() === n.id && (0, l.zi)(c.type) && n.hasFeature(o.oNc.WELCOME_SCREEN_ENABLED) && n.hasFeature(o.oNc.COMMUNITY) && !n.hasFeature(o.oNc.GUILD_SERVER_GUIDE);
}
