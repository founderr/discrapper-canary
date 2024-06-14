"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("735250");
n("470079");
var u = n("481060"),
  l = n("493683"),
  s = n("592125"),
  i = n("689938");

function r(e, t) {
  let n = s.default.getChannel(e);
  return null == n || n.isMultiUserDM() ? null : (0, a.jsx)(u.MenuItem, {
    id: "close-dm",
    label: i.default.Messages.CLOSE_DM,
    action: () => l.default.closePrivateChannel(e, t)
  })
}