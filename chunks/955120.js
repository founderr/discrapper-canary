"use strict";
u.r(n), u.d(n, {
  default: function() {
    return r
  }
});
var a = u("735250");
u("470079");
var s = u("481060"),
  l = u("239091"),
  t = u("299206"),
  c = u("689938");

function r(e) {
  let {
    guildId: n,
    shiftId: u,
    onSelect: r,
    closePopout: d,
    "aria-label": i
  } = e, o = (0, t.default)({
    id: n,
    label: c.default.Messages.COPY_ID_GUILD,
    shiftId: u,
    onSuccess: d
  });
  return (0, a.jsx)(s.Menu, {
    onSelect: r,
    navId: "guild-discovery-context-menu",
    "aria-label": null != i ? i : c.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: l.closeContextMenu,
    children: (0, a.jsx)(s.MenuGroup, {
      children: o
    })
  })
}