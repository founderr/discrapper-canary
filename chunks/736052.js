n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(789020);
var i = n(399606),
    l = n(592125),
    r = n(630388),
    a = n(637271),
    s = n(931261),
    o = n(981631),
    c = n(176505);
function d(e) {
    var t;
    let n = (0, i.e7)([l.Z], () => l.Z.getChannel(e)),
        d = null != n && (0, r.yE)(n.flags, c.zZ.IS_GUILD_RESOURCE_CHANNEL),
        u = (0, i.e7)([a.Z], () => a.Z.getSelectedResourceChannelId(null == n ? void 0 : n.guild_id)),
        h = (0, s.g)(null !== (t = null == n ? void 0 : n.guild_id) && void 0 !== t ? t : o.lds);
    return null != n && h && d && u === n.id;
}
