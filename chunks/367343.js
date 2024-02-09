"use strict";
i.r(t), i.d(t, {
  default: function() {
    return o
  }
});
var r = i("37983");
i("884691");
var n = i("77078"),
  a = i("272030"),
  s = i("702495"),
  u = i("782340");

function o(e) {
  let {
    target: t,
    onSelect: i
  } = e, o = (0, s.default)({
    type: t.getAttribute("data-type"),
    id: t.getAttribute("data-id"),
    name: t.getAttribute("data-name"),
    isInExpressionPicker: !0
  });
  return (0, r.jsx)(n.Menu, {
    navId: "expression-picker",
    onClose: a.closeContextMenu,
    "aria-label": u.default.Messages.EXPRESSION_PICKER_ACTIONS_MENU_LABEL,
    onSelect: i,
    className: "context-menu",
    children: (0, r.jsx)(n.MenuGroup, {
      children: o
    })
  })
}