n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(239091),
    r = n(299206),
    o = n(388032);
function s(e) {
    let { application: t, onSelect: n } = e,
        s = (0, r.Z)({
            id: t.id,
            label: o.intl.string(o.t['+NP/b2'])
        });
    return (0, i.jsx)(l.Menu, {
        navId: 'activity-shelf-item-context',
        onClose: a.Zy,
        'aria-label': o.intl.string(o.t.WkcHT0),
        onSelect: n,
        children: (0, i.jsx)(l.MenuGroup, { children: s }, 'developer-actions')
    });
}
