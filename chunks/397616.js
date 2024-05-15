"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var l = a("735250");
a("470079");
var u = a("442837"),
  d = a("481060"),
  s = a("493683"),
  n = a("592125"),
  i = a("594174"),
  r = a("689938");

function o(e, t) {
  let a = (0, u.useStateFromStores)([i.default], () => i.default.getCurrentUser(), []),
    o = (0, u.useStateFromStores)([n.default], () => n.default.getChannel(t), [t]);
  return null == o || o.isOwner(e) || null == a || !o.isOwner(a.id) ? null : (0, l.jsx)(d.MenuItem, {
    id: "remove",
    label: r.default.Messages.REMOVE_FROM_GROUP,
    action: () => s.default.removeRecipient(t, e),
    color: "danger"
  })
}