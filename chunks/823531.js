n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(735250);
n(470079);
var l = n(481060),
    r = n(239091),
    a = n(299206),
    o = n(689938);
function u(e) {
    let { application: t, onSelect: n } = e,
        u = (0, a.Z)({
            id: t.id,
            label: o.Z.Messages.COPY_ID_APP
        });
    return (0, i.jsx)(l.Menu, {
        navId: 'activity-shelf-item-context',
        onClose: r.Zy,
        'aria-label': o.Z.Messages.ACTIVITY_SHELF_ITEM_ACTIONS_MENU_LABEL,
        onSelect: n,
        children: (0, i.jsx)(l.MenuGroup, { children: u }, 'developer-actions')
    });
}
