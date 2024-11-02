t.r(n),
    t.d(n, {
        default: function () {
            return o;
        }
    });
var u = t(200651);
t(192379);
var i = t(481060),
    r = t(239091),
    c = t(410575),
    s = t(416977),
    d = t(778123),
    a = t(981631),
    l = t(388032);
function o(e) {
    let { guildId: n, analyticsContext: t, onSelect: o } = e,
        h = (0, s.Z)(n),
        v = (0, d.Z)(n);
    return (0, u.jsx)(c.Z, {
        context: t,
        object: a.qAy.CONTEXT_MENU,
        children: (0, u.jsxs)(i.Menu, {
            navId: 'user-context',
            onClose: r.Zy,
            'aria-label': l.intl.string(l.t.liqwPD),
            onSelect: o,
            children: [(0, u.jsx)(i.MenuGroup, { children: h }), (0, u.jsx)(i.MenuGroup, { children: v })]
        })
    });
}
