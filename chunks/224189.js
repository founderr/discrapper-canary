r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(812206),
    a = r(307643),
    s = r(973616),
    o = r(592125),
    l = r(566620),
    u = r(969345);
async function c(e, n) {
    var r;
    let c = i.Z.getApplication(e);
    if (d(c)) return c;
    let f = null === (r = o.Z.getChannel(n)) || void 0 === r ? void 0 : r.guild_id,
        { activityConfigs: _, applications: h } = await (0, l.w1)({ guildId: f }),
        p = (0, u.Z)({
            applicationId: e,
            activityConfigs: _,
            applications: h
        });
    if (d(null == p ? void 0 : p.application)) return null == p ? void 0 : p.application;
    {
        let n = await (0, a.UM)(e);
        return s.ZP.createFromServer(n);
    }
}
function d(e) {
    return null != e && null != e.embeddedActivityConfig && !0;
}
