n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(239091),
    o = n(299206),
    u = n(388032);
function a(e) {
    let { application: t, onSelect: n } = e,
        a = (0, o.Z)({
            id: t.id,
            label: u.intl.string(u.t['+NP/b2'])
        });
    return (0, i.jsx)(l.Menu, {
        navId: 'activity-shelf-item-context',
        onClose: r.Zy,
        'aria-label': u.intl.string(u.t.WkcHT0),
        onSelect: n,
        children: (0, i.jsx)(l.MenuGroup, { children: a }, 'developer-actions')
    });
}
