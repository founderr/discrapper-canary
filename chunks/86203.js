n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(493683),
    a = n(726521),
    s = n(718538),
    o = n(868807),
    c = n(388032);
function u(e) {
    let { channel: t, buttonSize: n = l.ButtonSizes.TINY, className: u, onReportClick: d, onReportSubmit: h, onMouseEnter: m, onMouseLeave: p } = e,
        { error: f, loaded: g } = (0, o.a)(t),
        C = t.isDM() ? t.getRecipientId() : null,
        x = (0, s.V)(t.id, C);
    if (null == x && (g || f)) return null;
    let v = () => {
        null == h || h(), r.Z.closePrivateChannel(t.id);
    };
    return (0, i.jsx)(l.Button, {
        className: u,
        size: n,
        color: l.Button.Colors.RED,
        disabled: null == x,
        onClick: (e) => {
            e.stopPropagation(), null == d || d(), null != x && (0, a.WL)(x, v);
        },
        onMouseEnter: m,
        onMouseLeave: p,
        children: c.intl.string(c.t['+78Pfn'])
    });
}
