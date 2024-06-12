"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("735250");
n("470079");
var i = n("442837"),
  l = n("481060"),
  s = n("904245"),
  r = n("665906"),
  u = n("314897"),
  o = n("185403"),
  d = n("418476"),
  c = n("689938");

function f(e, t) {
  let n = (0, i.useStateFromStores)([u.default], () => u.default.getId()),
    f = (0, r.useIsActiveChannelOrUnarchivableThread)(t),
    M = (0, r.useIsNonModInLockedThread)(t);
  return (0, d.default)(e, n) && f && !M ? (0, a.jsx)(l.MenuItem, {
    id: "edit",
    label: c.default.Messages.EDIT_MESSAGE,
    action: () => s.default.startEditMessage(t.id, e.id, e.content),
    icon: o.default
  }) : null
}