r.d(n, {
    V: function () {
        return c;
    }
});
var i = r(819553),
    a = r(931261),
    s = r(592125),
    o = r(984933),
    l = r(944486),
    u = r(176505);
function c(e) {
    var n;
    let r = l.Z.getChannelId(e),
        c = null === (n = o.ZP.getDefaultChannel(e)) || void 0 === n ? void 0 : n.id;
    return (r !== u.oC.GUILD_ONBOARDING || i.ZP.shouldShowOnboarding(e)) && (r !== u.oC.GUILD_HOME || (0, a.s)(e)) && null != s.Z.getChannel(r) ? r : c;
}
