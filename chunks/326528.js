n.d(t, {
    b: function () {
        return u;
    }
});
var i = n(481060),
    s = n(358085),
    r = n(394644),
    l = n(295545),
    a = n(168308),
    o = n(726985),
    c = n(332325),
    d = n(388032);
function u() {
    let e = (0, a.bC)(),
        t = (0, r.Gj)(o.s6.GAMES);
    return (function (e, t, n) {
        var r;
        let l = ((r = e),
        [
            {
                id: c.Z.MY_GAMES,
                title: d.intl.string(d.t['5DMgp6']),
                icon: i.DpadIcon,
                predicate: () => !s.isPlatformEmbedded,
                setting: o.s6.GAMES_MY_GAMES
            },
            {
                id: c.Z.CLIPS,
                title: d.intl.string(d.t.z2jK6e),
                icon: i.ClipsIcon,
                setting: o.s6.GAMES_CLIPS
            },
            {
                id: c.Z.OVERLAY,
                title: d.intl.string(d.t.bNqkDw),
                icon: i.ScreenSystemRequirementsIcon,
                predicate: () => !r,
                setting: o.s6.GAMES_OVERLAY
            },
            {
                id: c.Z.ACTIVITY_PRIVACY,
                title: d.intl.string(d.t.Cq98yM),
                icon: i.FlashIcon,
                setting: o.s6.GAMES_ACTIVITY_PRIVACY
            }
        ]).filter((e) => null == e.predicate || !e.predicate());
        if (t && null != n && n.size > 0) {
            let e = l.filter((e) => n.has(e.setting));
            return e.length > 0 ? e : l;
        }
        return l;
    })(e, (0, l.eA)({ location: 'settings' }), t);
}
