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
    u = n(689938);
function a(e) {
    let { application: t, onSelect: n } = e,
        a = (0, o.Z)({
            id: t.id,
            label: u.Z.Messages.COPY_ID_APP
        });
    return (0, i.jsx)(l.Menu, {
        navId: 'activity-shelf-item-context',
        onClose: r.Zy,
        'aria-label': u.Z.Messages.ACTIVITY_SHELF_ITEM_ACTIONS_MENU_LABEL,
        onSelect: n,
        children: (0, i.jsx)(l.MenuGroup, { children: a }, 'developer-actions')
    });
}
