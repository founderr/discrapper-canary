n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(442837),
    l = n(931261),
    r = n(9156),
    s = n(398758),
    a = n(981631),
    o = n(176505);
function c(e) {
    var t;
    let n = (0, s.DM)((null == e ? void 0 : e.getGuildId()) != null ? e.guild_id : a.kod),
        c = (0, i.e7)([r.ZP], () => null != e && r.ZP.isChannelRecordOrParentOptedIn(e)),
        u = (0, l.g)(null !== (t = null == e ? void 0 : e.guild_id) && void 0 !== t ? t : a.kod);
    if (null == e) return !1;
    let d = u && e.hasFlag(o.zZ.IS_GUILD_RESOURCE_CHANNEL);
    return n && !d && !c && !e.isThread();
}
