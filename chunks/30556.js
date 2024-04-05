"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("735250");
s("470079");
var l = s("493683"),
  i = s("974029"),
  n = s("785717"),
  o = s("993409"),
  r = s("689938");

function u(e) {
  let {
    user: t,
    compact: s,
    onClose: u
  } = e, {
    trackUserProfileAction: d
  } = (0, n.useUserProfileAnalyticsContext)();
  return (0, a.jsx)(o.default, {
    icon: i.default,
    text: r.default.Messages.USER_PROFILE_MESSAGE,
    onClick: () => {
      d({
        action: "SEND_MESSAGE"
      }), l.default.openPrivateChannel(t.id), null == u || u()
    },
    compact: s
  })
}