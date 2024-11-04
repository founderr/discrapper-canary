n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(442837),
    l = n(199902),
    r = n(314897),
    s = n(858340),
    a = n(959457),
    o = n(557457),
    c = n(614963),
    u = n(981631);
function d(e) {
    let t = (0, o.Wc)(e),
        n = e.stream.guildId,
        d = e.stream.ownerId;
    return (0, i.e7)(
        [a.Z, s.Z, r.default, l.Z],
        () => {
            if (null == d) return null;
            let e = d === r.default.getId();
            if (!e && null == l.Z.getActiveStreamForUser(d, n)) return null;
            let i = e && null != s.Z.getHookError(u.K3D.SOUND);
            return (0, c.Z)(a.Z.getQuality(), a.Z.getStatsHistory(n, d, e), i, t);
        },
        [t, n, d]
    );
}
