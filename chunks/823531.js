l.d(n, {
  Z: function() {
    return o
  }
});
var t = l(735250);
l(470079);
var i = l(481060),
  a = l(239091),
  s = l(299206),
  r = l(689938);

function o(e) {
  let {
    application: n,
    onSelect: l
  } = e, o = (0, s.Z)({
    id: n.id,
    label: r.Z.Messages.COPY_ID
  });
  return (0, t.jsx)(i.Menu, {
    navId: "activity-shelf-item-context",
    onClose: a.Zy,
    "aria-label": r.Z.Messages.ACTIVITY_SHELF_ITEM_ACTIONS_MENU_LABEL,
    onSelect: l,
    children: (0, t.jsx)(i.MenuGroup, {
      children: o
    }, "developer-actions")
  })
}