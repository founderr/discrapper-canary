i.r(t),
    i.d(t, {
        default: function () {
            return l;
        }
    });
var r = i(200651);
i(192379);
var e = i(481060),
    u = i(239091),
    o = i(299660),
    s = i(517640),
    c = i(388032);
function l(n) {
    let { guild: t, onSelect: i } = n,
        l = (0, s.Z)(t),
        a = (0, o.Z)(t.id);
    return (0, r.jsx)(e.Menu, {
        navId: 'role-subscription-context',
        'aria-label': c.intl.string(c.t.g3KvYG),
        onClose: u.Zy,
        onSelect: i,
        children: (0, r.jsxs)(e.MenuGroup, {
            children: [l, a]
        })
    });
}
