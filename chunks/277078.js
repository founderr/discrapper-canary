n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(592125),
    i = n(496675),
    a = n(594174),
    s = n(74538),
    o = n(710111),
    l = n(231338);
function u(e, t) {
    let n = r.Z.getChannel(t);
    if ((null == e ? void 0 : e.guildId) === o.X8 || (null == e ? void 0 : e.guildId) === (null == n ? void 0 : n.guild_id)) return !0;
    let u = s.ZP.canUseSoundboardEverywhere(a.default.getCurrentUser());
    return (null == n || null == n.guild_id || i.Z.can(l.Pl.USE_EXTERNAL_SOUNDS, n)) && u;
}
