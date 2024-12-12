r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(592125),
    a = r(496675),
    s = r(594174),
    o = r(74538),
    l = r(710111),
    u = r(231338);
function c(e, n) {
    let r = i.Z.getChannel(n);
    if ((null == e ? void 0 : e.guildId) === l.X8 || (null == e ? void 0 : e.guildId) === (null == r ? void 0 : r.guild_id)) return !0;
    let c = o.ZP.canUseSoundboardEverywhere(s.default.getCurrentUser());
    return (null == r || null == r.guild_id || a.Z.can(u.Pl.USE_EXTERNAL_SOUNDS, r)) && c;
}
