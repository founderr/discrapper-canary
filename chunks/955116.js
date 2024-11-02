e.r(t),
    e.d(t, {
        default: function () {
            return c;
        }
    });
var i = e(200651),
    r = e(481060),
    u = e(239091),
    a = e(299206),
    s = e(388032);
function c(n) {
    let { tag: t } = n;
    return (0, i.jsx)(r.Menu, {
        navId: 'forum-tag',
        onClose: u.Zy,
        'aria-label': s.intl.string(s.t.AzTwio),
        onSelect: void 0,
        className: 'context-menu',
        children: (0, i.jsx)(r.MenuGroup, {
            children: (0, a.Z)({
                id: t.id,
                label: s.intl.string(s.t['8VG6IS'])
            })
        })
    });
}
