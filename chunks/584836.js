"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var a = n("735250");
n("470079");
var l = n("481060"),
  i = n("37234"),
  u = n("434404"),
  r = n("981631"),
  d = n("689938");

function s(e, t) {
  return t === r.AppContext.POPOUT ? null : (0, a.jsx)(l.MenuItem, {
    id: "nav-server-settings",
    label: d.default.Messages.SERVER_SETTINGS,
    action: () => {
      (0, i.popLayer)(), u.default.open(e, r.GuildSettingsSections.MODERATION)
    }
  })
}