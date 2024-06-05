"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var n = s("735250");
s("470079");
var a = s("481060"),
  l = s("665906"),
  i = s("827104"),
  u = s("50284"),
  d = s("689938");

function r(e, t) {
  return (0, l.useIsActiveChannelOrUnarchivableThread)(t) ? (0, n.jsx)(a.MenuItem, {
    id: "mark-unread",
    label: d.default.Messages.MARK_UNREAD,
    action: () => (0, u.default)(t.id, e.id),
    icon: i.default
  }) : null
}