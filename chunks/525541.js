n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(493683),
    s = n(726521),
    a = n(213010),
    o = n(718538),
    c = n(388032);
function u(e) {
    let { otherUserId: t, channel: n, buttonSize: u = l.ButtonSizes.TINY, className: d, buttonText: h, navigateAwayOnReportSuccess: m = !0, onReportClick: p, onReportSubmit: f, onMouseEnter: g, onMouseLeave: C } = e,
        x = (0, a.Q)(t),
        v = (0, o.V)(n.id, t);
    if (!x || null == v) return null;
    let _ = () => {
        null == f || f(), r.Z.closePrivateChannel(n.id, m);
    };
    return (0, i.jsx)(l.Button, {
        className: d,
        size: u,
        color: l.Button.Colors.RED,
        disabled: null == v,
        onClick: () => {
            null == p || p(), (0, s.WL)(v, _);
        },
        onMouseEnter: g,
        onMouseLeave: C,
        children: null != h ? h : c.intl.string(c.t.HHZmDg)
    });
}
