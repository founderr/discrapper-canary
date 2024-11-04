n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    s = n(471445),
    a = n(456269),
    o = n(660189),
    c = n(257511),
    u = n(967128),
    d = n(388032),
    h = n(4953);
function m(e) {
    var t;
    let { channel: n } = e,
        m = (0, a.eV)(n),
        { firstMessage: p } = (0, l.cj)([o.Z], () => o.Z.getMessage(n.id)),
        f = new Set((0, a.kn)(n, m)),
        g = null !== (t = (0, s.KS)(n)) && void 0 !== t ? t : r.ChatIcon;
    return (0, i.jsxs)(u.ZP, {
        channelId: n.id,
        className: h.container,
        children: [
            (0, i.jsx)('div', {
                className: h.iconWrapper,
                children: (0, i.jsx)(g, {
                    className: h.icon,
                    strokeWidth: 1.75
                })
            }),
            (0, i.jsx)(u.Ot, {
                className: h.header,
                children: n.name
            }),
            null == p &&
                (0, i.jsx)(r.Text, {
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    children: d.intl.string(d.t.mE3KJC)
                }),
            (0, i.jsx)(c.Z, { appliedTags: f })
        ]
    });
}
