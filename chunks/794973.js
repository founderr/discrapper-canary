"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var a = n("735250");
n("470079");
var u = n("481060"),
  i = n("493683"),
  r = n("592125"),
  l = n("689938");

function s(e, t) {
  let n = r.default.getChannel(e);
  return null == n || n.isMultiUserDM() ? null : (0, a.jsx)(u.MenuItem, {
    id: "close-dm",
    label: l.default.Messages.CLOSE_DM,
    action: () => i.default.closePrivateChannel(e, t)
  })
}