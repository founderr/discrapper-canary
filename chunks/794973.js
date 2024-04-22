"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("735250");
n("470079");
var u = n("481060"),
  i = n("493683"),
  l = n("592125"),
  s = n("689938");

function r(e, t) {
  let n = l.default.getChannel(e);
  return null == n || n.isMultiUserDM() ? null : (0, a.jsx)(u.MenuItem, {
    id: "close-dm",
    label: s.default.Messages.CLOSE_DM,
    action: () => i.default.closePrivateChannel(e, t)
  })
}