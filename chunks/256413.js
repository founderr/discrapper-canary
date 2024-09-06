n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(442837),
    s = n(931261),
    a = n(9156),
    l = n(398758),
    r = n(981631),
    o = n(176505);
function c(e) {
    var t;
    let n = (0, l.DM)((null == e ? void 0 : e.getGuildId()) != null ? e.guild_id : r.kod),
        c = (0, i.e7)([a.ZP], () => null != e && a.ZP.isChannelRecordOrParentOptedIn(e)),
        u = (0, s.g)(null !== (t = null == e ? void 0 : e.guild_id) && void 0 !== t ? t : r.kod);
    if (null == e) return !1;
    let d = u && e.hasFlag(o.zZ.IS_GUILD_RESOURCE_CHANNEL);
    return n && !d && !c && !e.isThread();
}
