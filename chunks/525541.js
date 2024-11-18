n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(493683),
    r = n(726521),
    s = n(213010),
    o = n(718538),
    c = n(388032);
function d(e) {
    let { otherUserId: t, channel: n, buttonSize: d = l.ButtonSizes.TINY, className: u, buttonText: h, navigateAwayOnReportSuccess: p = !0, onReportClick: m, onReportSubmit: f, onMouseEnter: g, onMouseLeave: C } = e,
        x = (0, s.Q)(t),
        _ = (0, o.V)(n.id, t);
    if (!x || null == _) return null;
    let v = () => {
        null == f || f(), a.Z.closePrivateChannel(n.id, p);
    };
    return (0, i.jsx)(l.Button, {
        className: u,
        size: d,
        color: l.Button.Colors.RED,
        disabled: null == _,
        onClick: () => {
            null == m || m(), (0, r.WL)(_, v);
        },
        onMouseEnter: g,
        onMouseLeave: C,
        children: null != h ? h : c.intl.string(c.t.HHZmDg)
    });
}
