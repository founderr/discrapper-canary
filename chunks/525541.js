n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(735250);
n(470079);
var s = n(481060),
    a = n(493683),
    l = n(726521),
    r = n(213010),
    o = n(718538),
    c = n(689938);
function u(e) {
    let { otherUserId: t, channel: n, buttonSize: u = s.ButtonSizes.TINY, className: d, buttonText: h, navigateAwayOnReportSuccess: p = !0, onReportClick: m, onReportSubmit: _, onMouseEnter: f, onMouseLeave: E } = e,
        g = (0, r.Q)(t),
        C = (0, o.V)(n.id, t);
    if (!g || null == C) return null;
    let I = () => {
        null == _ || _(), a.Z.closePrivateChannel(n.id, p);
    };
    return (0, i.jsx)(s.Button, {
        className: d,
        size: u,
        color: s.Button.Colors.RED,
        disabled: null == C,
        onClick: () => {
            null == m || m(), (0, l.WL)(C, I);
        },
        onMouseEnter: f,
        onMouseLeave: E,
        children: null != h ? h : c.Z.Messages.REPORT_SPAM
    });
}
