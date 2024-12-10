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
    let { channel: t, buttonSize: n = l.ButtonSizes.TINY, color: d = l.Button.Colors.RED, className: u, onReportClick: h, onReportSubmit: p, onMouseEnter: m, onMouseLeave: f } = e,
        { error: g, loaded: C } = (0, o.a)(t),
        x = t.isDM() ? t.getRecipientId() : null,
        v = (0, s.V)(t.id, x);
    if (null == v && (C || g)) return null;
    let _ = () => {
        null == p || p(), r.Z.closePrivateChannel(t.id);
    };
    return (0, i.jsx)(l.Button, {
        className: u,
        size: n,
        color: d,
        disabled: null == v,
        onClick: (e) => {
            e.stopPropagation(), null == h || h(), null != v && (0, a.WL)(v, _);
        },
        onMouseEnter: m,
        onMouseLeave: f,
        children: c.intl.string(c.t['+78Pfn'])
    });
}
