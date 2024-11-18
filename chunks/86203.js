n.d(t, {
    Z: function () {
        return d;
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
function d(e) {
    let { channel: t, buttonSize: n = l.ButtonSizes.TINY, className: d, onReportClick: u, onReportSubmit: h, onMouseEnter: p, onMouseLeave: m } = e,
        { error: f, loaded: g } = (0, o.a)(t),
        C = t.isDM() ? t.getRecipientId() : null,
        x = (0, s.V)(t.id, C);
    if (null == x && (g || f)) return null;
    let _ = () => {
        null == h || h(), r.Z.closePrivateChannel(t.id);
    };
    return (0, i.jsx)(l.Button, {
        className: d,
        size: n,
        color: l.Button.Colors.RED,
        disabled: null == x,
        onClick: (e) => {
            e.stopPropagation(), null == u || u(), null != x && (0, a.WL)(x, _);
        },
        onMouseEnter: p,
        onMouseLeave: m,
        children: c.intl.string(c.t['+78Pfn'])
    });
}
