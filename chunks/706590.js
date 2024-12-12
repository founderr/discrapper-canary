r.d(n, {
    Z: function () {
        return p;
    },
    z: function () {
        return h;
    }
});
var i = r(47120);
var a = r(392711),
    s = r.n(a),
    o = r(442837),
    l = r(592125),
    u = r(496675),
    c = r(709054),
    d = r(853856),
    f = r(362658),
    _ = r(231338);
function h(e, n, r) {
    let { canShow: i, isFavoritesPerk: a } = f.Z.getCurrentConfig({ location: 'isFavoritesGuildVisible' }, { autoTrackExposure: !1 });
    if (a) return !0;
    if (!i) return !1;
    let o = e.getFavoriteChannels();
    if (s().isEmpty(o)) return !1;
    let l = c.default.keys(o).filter((e) => {
        let i = n.getChannel(e);
        return null != i && (!!i.isPrivate() || r.can(_.Pl.VIEW_CHANNEL, i));
    });
    return !s().isEmpty(l) && !0;
}
function p() {
    let { canShow: e, isFavoritesPerk: n } = (0, f.z)('useIsFavoritesGuildVisible'),
        r = (0, o.e7)([d.Z, l.Z, u.Z], () => e && h(d.Z, l.Z, u.Z));
    return !!n || r;
}
