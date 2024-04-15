"use strict";
l.r(t), l.d(t, {
  default: function() {
    return o
  }
});
var a = l("735250");
l("470079");
var u = l("481060"),
  n = l("493683"),
  d = l("37234"),
  s = l("314897"),
  r = l("981631"),
  i = l("689938");

function o(e, t) {
  let l = s.default.getId(),
    o = t === r.AppContext.POPOUT;
  return l === e || o ? null : (0, a.jsx)(u.MenuItem, {
    id: "message-user",
    label: i.default.Messages.USER_POPOUT_MESSAGE,
    action: () => {
      n.default.openPrivateChannel(e), (0, d.popLayer)()
    }
  })
}