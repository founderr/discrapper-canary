n.d(t, {
    h: function () {
        return _;
    }
});
var r = n(733860);
var i = n(470079),
    a = n(399606),
    o = n(496675),
    s = n(771845),
    l = n(594174),
    u = n(74538),
    c = n(981631),
    d = n(231338);
function _(e, t) {
    var n;
    let r = (0, a.e7)([l.default], () => l.default.getCurrentUser()),
        _ = null !== (n = null == e ? void 0 : e.guild_id) && void 0 !== n ? n : c.lds,
        E = (0, a.e7)([s.ZP], () => s.ZP.getFlattenedGuildIds()),
        f = (0, a.e7)([o.Z], () => null == e || null == e.guild_id || o.Z.can(d.Pl.USE_EXTERNAL_SOUNDS, e));
    return i.useMemo(() => {
        if ((u.ZP.canUseSoundboardEverywhere(r) || !t) && f) {
            let e = '' !== _,
                t = e ? E.filter((e) => e !== _) : E;
            return e && t.unshift(_), t;
        }
        return [_];
    }, [r, t, _, E, f]);
}
