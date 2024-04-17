"use strict";
i.r(t), i.d(t, {
  default: function() {
    return d
  }
});
var n = i("735250");
i("470079");
var s = i("442837"),
  a = i("481060"),
  u = i("888369"),
  l = i("181945"),
  o = i("689938");

function d(e, t) {
  let i = e.id,
    d = (0, s.useStateFromStores)([u.default], () => u.default.getGuildHasUnreadIgnoreMuted(i), [i]);
  return (0, n.jsx)(a.MenuItem, {
    id: "mark-guild-read",
    label: o.default.Messages.MARK_AS_READ,
    icon: void 0,
    action: () => (0, l.default)([i], t.section),
    disabled: !d
  })
}