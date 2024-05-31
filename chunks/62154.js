"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
});
var s = l("735250");
l("470079");
var a = l("543595"),
  i = l("100849"),
  n = l("487922"),
  r = l("620648"),
  o = l("944546"),
  u = l("470900"),
  d = l("228168");

function c(e) {
  let {
    displayProfile: t,
    user: l,
    selectedSection: c,
    autoFocusNote: f,
    onClose: S
  } = e;
  switch (c) {
    case d.UserProfileSections.ACTIVITY:
      return (0, s.jsx)(i.default, {
        user: l,
        type: a.Types.PROFILE_V2
      });
    case d.UserProfileSections.MUTUAL_GUILDS:
      return (0, s.jsx)(u.default, {
        user: l,
        onClose: S
      });
    case d.UserProfileSections.MUTUAL_FRIENDS:
      return (0, s.jsx)(o.default, {
        user: l,
        onClose: S
      });
    case d.UserProfileSections.BOT_DATA_ACCESS:
      return (0, s.jsx)(n.default, {
        user: l
      });
    case d.UserProfileSections.USER_INFO_CONNECTIONS:
    case d.UserProfileSections.USER_INFO:
    default:
      return (0, s.jsx)(r.default, {
        displayProfile: t,
        autoFocusNote: f,
        user: l,
        scrollToConnections: c === d.UserProfileSections.USER_INFO_CONNECTIONS
      })
  }
}