n.d(t, {
    Z: function () {
        return u;
    }
});
var l = n(192379),
    i = n(106351),
    r = n(399606),
    s = n(447003),
    a = n(592125),
    o = n(984933),
    d = n(823379);
function u(e) {
    let t = (0, r.Wu)([o.ZP], () => o.ZP.getVocalChannelIds(e)),
        n = (0, r.Wu)([a.Z], () => t.map((e) => a.Z.getChannel(e)).filter(d.lm), [t]);
    return l.useMemo(() => n.filter((e) => !(0, s.Z)(e) && e.type === i.d.GUILD_VOICE), [n]);
}
