n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(961675),
    s = n(883429),
    o = n(238349),
    c = n(109434),
    d = n(456269),
    u = n(432771),
    h = n(920303),
    p = n(665149),
    m = n(388032);
function f(e) {
    var t, n;
    let { channel: f } = e,
        g = (0, d.r_)(f),
        C = (0, l.e7)([a.Z], () => a.Z.hasHidden(f.id)),
        x = (0, u.c)(f.id),
        { sortOrder: _, tagFilter: v } = (0, c.H)(f.id),
        I = (0, l.e7)([o.Z, h.Z], () => !!(o.Z.getThreadIds(f.id, _, v).length > 0) || !!(h.Z.getThreads(f.id, _, v).length > 0) || !1, [f.id, _, v]),
        E = f.isMediaChannel();
    if (!g || x || (E && I)) return null;
    let b = ((t = C), (n = E), t ? (n ? m.intl.string(m.t['WP/IEx']) : m.intl.string(m.t.zfq9V1)) : n ? m.intl.string(m.t.p60yFx) : m.intl.string(m.t.SNOqYG));
    return (0, i.jsx)(p.JO, {
        tooltip: b,
        icon: r.CircleInformationIcon,
        onClick: () => s.Z.hideAdminOnboarding(f.id, !C),
        selected: !C
    });
}
