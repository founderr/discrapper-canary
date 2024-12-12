r.d(n, {
    J: function () {
        return d;
    }
});
var i = r(47120);
var a = r(592125),
    s = r(771845),
    o = r(553245),
    l = r(814074),
    u = r(989263),
    c = r(981631);
function d(e, n) {
    if (e.totalLength >= n) return e;
    let r = new o.b(e.primaryCapacity, e.extendedCapacity),
        i = n - e.totalLength;
    for (let n of s.ZP.getGuildFolders()) for (let s of n.guildIds) for (let n of Object.values(a.Z.getMutableBasicGuildChannelsForGuild(s))) if ((f(n) && (0, u.v)(n) && !(0, l.Hr)(n) && _(s, n, r), r.totalLength >= i)) return h(r, e);
    return h(r, e);
}
function f(e) {
    return e.type === c.d4z.DM || e.type === c.d4z.GROUP_DM || e.type === c.d4z.GUILD_TEXT;
}
function _(e, n, r) {
    !r.hasExtended(n.id) &&
        r.put(n.id, {
            guildId: e,
            channelId: n.id,
            channelType: n.type,
            fallback: !0
        });
}
function h(e, n) {
    for (let [r, i] of n.allEntries()) e.put(r, i);
    return e;
}
