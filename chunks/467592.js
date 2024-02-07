"use strict";
n.r(e), n.d(e, {
  default: function() {
    return c
  }
});
var i = n("37983");
n("884691");
var r = n("77078"),
  a = n("272030"),
  o = n("773336"),
  l = n("447651"),
  s = n("26051"),
  u = n("782340");

function c(t) {
  let {
    src: e,
    onSelect: n
  } = t, c = (0, l.default)(e), d = (0, s.default)(e, null);
  return o.isPlatformEmbedded ? (0, i.jsxs)(r.Menu, {
    navId: "image-context",
    onClose: a.closeContextMenu,
    "aria-label": u.default.Messages.IMAGE_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [(0, i.jsx)(r.MenuGroup, {
      children: c
    }), (0, i.jsx)(r.MenuGroup, {
      children: d
    })]
  }) : null
}