"use strict";
n.r(e), n.d(e, {
  default: function() {
    return s
  }
});
var i = n("37983");
n("884691");
var r = n("77078"),
  o = n("272030"),
  u = n("773336"),
  l = n("26051"),
  a = n("782340");

function s(t) {
  let {
    href: e,
    textContent: n,
    onSelect: s
  } = t, c = (0, l.default)(e, n);
  return u.isPlatformEmbedded && null != c ? (0, i.jsx)(r.Menu, {
    navId: "image-context",
    onClose: o.closeContextMenu,
    "aria-label": a.default.Messages.IMAGE_ACTIONS_MENU_LABEL,
    onSelect: s,
    children: (0, i.jsx)(r.MenuGroup, {
      children: c
    })
  }) : null
}