"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("906732"),
  i = n("785717"),
  r = n("171368"),
  o = n("689938"),
  u = n("788463");

function d(e) {
  let {
    user: t,
    channelId: n
  } = e, {
    analyticsLocations: d
  } = (0, s.default)(), {
    trackUserProfileAction: c
  } = (0, i.useUserProfileAnalyticsContext)();
  return (0, a.jsx)("footer", {
    className: u.footer,
    children: (0, a.jsx)(l.Button, {
      fullWidth: !0,
      size: l.Button.Sizes.LARGE,
      look: l.Button.Looks.BLANK,
      color: u.buttonColor,
      onClick: () => {
        c({
          action: "PRESS_VIEW_PROFILE"
        }), (0, r.openUserProfileModal)({
          sourceAnalyticsLocations: d,
          userId: t.id,
          channelId: n
        })
      },
      children: o.default.Messages.VIEW_FULL_PROFILE
    })
  })
}