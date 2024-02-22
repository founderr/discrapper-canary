"use strict";
n.r(e), n.d(e, {
  default: function() {
    return c
  }
});
var i = n("37983");
n("884691");
var r = n("77078"),
  o = n("272030"),
  a = n("773336"),
  l = n("447651"),
  u = n("26051"),
  s = n("782340");

function c(t) {
  let {
    src: e,
    onSelect: n
  } = t, c = (0, l.default)(e), d = (0, u.default)(e, null);
  return a.isPlatformEmbedded ? (0, i.jsxs)(r.Menu, {
    navId: "image-context",
    onClose: o.closeContextMenu,
    "aria-label": s.default.Messages.IMAGE_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [(0, i.jsx)(r.MenuGroup, {
      children: c
    }), (0, i.jsx)(r.MenuGroup, {
      children: d
    })]
  }) : null
}