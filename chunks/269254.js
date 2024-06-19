n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  u = n(239091),
  l = n(519110),
  r = n(689938);

function o(e) {
  let {
    target: t,
    onSelect: n
  } = e, o = (0, l.Z)({
    type: t.getAttribute("data-type"),
    id: t.getAttribute("data-id"),
    name: t.getAttribute("data-name"),
    isInExpressionPicker: !0
  });
  return (0, i.jsx)(a.Menu, {
    navId: "expression-picker",
    onClose: u.Zy,
    "aria-label": r.Z.Messages.EXPRESSION_PICKER_ACTIONS_MENU_LABEL,
    onSelect: n,
    className: "context-menu",
    children: (0, i.jsx)(a.MenuGroup, {
      children: o
    })
  })
}