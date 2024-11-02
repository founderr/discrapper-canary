e.r(t),
    e.d(t, {
        default: function () {
            return s;
        }
    });
var l = e(200651);
e(192379);
var r = e(481060),
    u = e(239091),
    i = e(714447),
    a = e(439827),
    o = e(388032);
function s(n) {
    let { guildId: t, onSelect: e, onPickerClose: s } = n,
        c = (0, a.Z)(t, s),
        d = (0, i.Z)();
    return (0, l.jsx)(r.Menu, {
        navId: 'user-context',
        onClose: u.Zy,
        'aria-label': o.intl.string(o.t.liqwPD),
        className: 'context-menu',
        onSelect: e,
        children: (0, l.jsxs)(r.MenuGroup, {
            children: [d, c]
        })
    });
}
