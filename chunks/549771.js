r.d(n, {
    h: function () {
        return _;
    }
});
var i = r(733860);
var a = r(192379),
    s = r(399606),
    o = r(496675),
    l = r(771845),
    u = r(594174),
    c = r(74538),
    d = r(981631),
    f = r(231338);
function _(e, n) {
    var r;
    let i = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
        _ = null !== (r = null == e ? void 0 : e.guild_id) && void 0 !== r ? r : d.lds,
        h = (0, s.e7)([l.ZP], () => l.ZP.getFlattenedGuildIds()),
        p = (0, s.e7)([o.Z], () => null == e || null == e.guild_id || o.Z.can(f.Pl.USE_EXTERNAL_SOUNDS, e));
    return a.useMemo(() => {
        if ((c.ZP.canUseSoundboardEverywhere(i) || !n) && p) {
            let e = '' !== _,
                n = e ? h.filter((e) => e !== _) : h;
            return e && n.unshift(_), n;
        }
        return [_];
    }, [i, n, _, h, p]);
}
