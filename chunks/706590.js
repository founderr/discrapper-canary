n.d(t, {
    Z: function () {
        return f;
    },
    z: function () {
        return E;
    }
});
var r = n(47120);
var i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(592125),
    l = n(496675),
    u = n(709054),
    c = n(853856),
    d = n(362658),
    _ = n(231338);
function E(e, t, n) {
    let { canShow: r, isFavoritesPerk: i } = d.Z.getCurrentConfig({ location: '7993a7_1' }, { autoTrackExposure: !1 });
    if (i) return !0;
    if (!r) return !1;
    let o = e.getFavoriteChannels();
    if (a().isEmpty(o)) return !1;
    let s = u.default.keys(o).filter((e) => {
        let r = t.getChannel(e);
        return null != r && (!!r.isPrivate() || n.can(_.Pl.VIEW_CHANNEL, r));
    });
    return !a().isEmpty(s) && !0;
}
function f() {
    let { canShow: e, isFavoritesPerk: t } = (0, d.z)('7993a7_2'),
        n = (0, o.e7)([c.Z, s.Z, l.Z], () => e && E(c.Z, s.Z, l.Z));
    return !!t || n;
}
