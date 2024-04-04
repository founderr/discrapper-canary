"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var l = a("735250");
a("470079");
var n = a("481060"),
  u = a("493683"),
  s = a("37234"),
  d = a("314897"),
  r = a("981631"),
  i = a("689938");

function o(e, t) {
  let a = d.default.getId(),
    o = t === r.AppContext.POPOUT;
  return a === e || o ? null : (0, l.jsx)(n.MenuItem, {
    id: "message-user",
    label: i.default.Messages.USER_POPOUT_MESSAGE,
    action: () => {
      u.default.openPrivateChannel(e), (0, s.popLayer)()
    }
  })
}