"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
});
var s = l("735250");
l("470079");
var i = l("493683"),
  a = l("974029"),
  n = l("785717"),
  o = l("993409"),
  r = l("689938");

function u(e) {
  let {
    user: t,
    compact: l,
    onClose: u
  } = e, {
    trackUserProfileAction: d
  } = (0, n.useUserProfileAnalyticsContext)();
  return (0, s.jsx)(o.default, {
    icon: a.default,
    text: r.default.Messages.USER_PROFILE_MESSAGE,
    onClick: () => {
      d({
        action: "SEND_MESSAGE"
      }), i.default.openPrivateChannel(t.id), null == u || u()
    },
    compact: l
  })
}