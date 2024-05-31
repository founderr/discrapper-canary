"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
});
var s = l("735250");
l("470079");
var a = l("493683"),
  i = l("974029"),
  n = l("785717"),
  r = l("993409"),
  o = l("689938");

function u(e) {
  let {
    user: t,
    compact: l,
    onClose: u
  } = e, {
    trackUserProfileAction: d
  } = (0, n.useUserProfileAnalyticsContext)();
  return (0, s.jsx)(r.default, {
    icon: i.default,
    text: o.default.Messages.USER_PROFILE_MESSAGE,
    onClick: () => {
      d({
        action: "SEND_MESSAGE"
      }), a.default.openPrivateChannel(t.id), null == u || u()
    },
    compact: l
  })
}