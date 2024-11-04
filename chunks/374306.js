n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    s = n(961675),
    a = n(883429),
    o = n(238349),
    c = n(109434),
    u = n(456269),
    d = n(432771),
    h = n(920303),
    m = n(665149),
    p = n(388032);
function f(e) {
    var t, n;
    let { channel: f } = e,
        g = (0, u.r_)(f),
        C = (0, l.e7)([s.Z], () => s.Z.hasHidden(f.id)),
        x = (0, d.c)(f.id),
        { sortOrder: v, tagFilter: _ } = (0, c.H)(f.id),
        I = (0, l.e7)([o.Z, h.Z], () => !!(o.Z.getThreadIds(f.id, v, _).length > 0) || !!(h.Z.getThreads(f.id, v, _).length > 0) || !1, [f.id, v, _]),
        E = f.isMediaChannel();
    if (!g || x || (E && I)) return null;
    let b = ((t = C), (n = E), t ? (n ? p.intl.string(p.t['WP/IEx']) : p.intl.string(p.t.zfq9V1)) : n ? p.intl.string(p.t.p60yFx) : p.intl.string(p.t.SNOqYG));
    return (0, i.jsx)(m.JO, {
        tooltip: b,
        icon: r.CircleInformationIcon,
        onClick: () => a.Z.hideAdminOnboarding(f.id, !C),
        selected: !C
    });
}
