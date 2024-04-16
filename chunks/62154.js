"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var l = s("735250");
s("470079");
var a = s("100849"),
  i = s("487922"),
  o = s("620648"),
  n = s("944546"),
  r = s("470900"),
  u = s("228168");

function d(e) {
  let {
    displayProfile: t,
    user: s,
    selectedSection: d,
    autoFocusNote: c,
    onClose: f
  } = e;
  switch (d) {
    case u.UserProfileSections.ACTIVITY:
      return (0, l.jsx)(a.default, {
        user: s
      });
    case u.UserProfileSections.MUTUAL_GUILDS:
      return (0, l.jsx)(r.default, {
        user: s,
        onClose: f
      });
    case u.UserProfileSections.MUTUAL_FRIENDS:
      return (0, l.jsx)(n.default, {
        user: s,
        onClose: f
      });
    case u.UserProfileSections.BOT_DATA_ACCESS:
      return (0, l.jsx)(i.default, {
        user: s
      });
    case u.UserProfileSections.USER_INFO_CONNECTIONS:
    case u.UserProfileSections.USER_INFO:
    default:
      return (0, l.jsx)(o.default, {
        displayProfile: t,
        autoFocusNote: c,
        user: s,
        scrollToConnections: d === u.UserProfileSections.USER_INFO_CONNECTIONS
      })
  }
}