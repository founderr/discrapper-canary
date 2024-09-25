n.d(t, {
    J: function () {
        return c;
    }
});
var r = n(47120);
var i = n(592125),
    a = n(771845),
    o = n(553245),
    s = n(814074),
    l = n(989263),
    u = n(981631);
function c(e, t) {
    if (e.totalLength >= t) return e;
    let n = new o.b(e.primaryCapacity, e.extendedCapacity),
        r = t - e.totalLength;
    for (let t of a.ZP.getGuildFolders()) for (let a of t.guildIds) for (let t of Object.values(i.Z.getMutableBasicGuildChannelsForGuild(a))) if ((d(t) && (0, l.v)(t) && !(0, s.Hr)(t) && _(a, t, n), n.totalLength >= r)) return E(n, e);
    return E(n, e);
}
function d(e) {
    return e.type === u.d4z.DM || e.type === u.d4z.GROUP_DM || e.type === u.d4z.GUILD_TEXT;
}
function _(e, t, n) {
    !n.hasExtended(t.id) &&
        n.put(t.id, {
            guildId: e,
            channelId: t.id,
            channelType: t.type,
            fallback: !0
        });
}
function E(e, t) {
    for (let [n, r] of t.allEntries()) e.put(n, r);
    return e;
}
