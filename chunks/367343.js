"use strict";
i.r(t), i.d(t, {
  default: function() {
    return u
  }
});
var n = i("37983");
i("884691");
var r = i("77078"),
  a = i("272030"),
  s = i("702495"),
  o = i("782340");

function u(e) {
  let {
    target: t,
    onSelect: i
  } = e, u = (0, s.default)({
    type: t.getAttribute("data-type"),
    id: t.getAttribute("data-id"),
    name: t.getAttribute("data-name"),
    isInExpressionPicker: !0
  });
  return (0, n.jsx)(r.Menu, {
    navId: "expression-picker",
    onClose: a.closeContextMenu,
    "aria-label": o.default.Messages.EXPRESSION_PICKER_ACTIONS_MENU_LABEL,
    onSelect: i,
    className: "context-menu",
    children: (0, n.jsx)(r.MenuGroup, {
      children: u
    })
  })
}