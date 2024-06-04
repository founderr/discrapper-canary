"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("735250");
n("470079");
var s = n("300284"),
  l = n("185403"),
  i = n("785717"),
  r = n("537387"),
  o = n("689938");

function u(e) {
  let {
    onClose: t
  } = e, {
    trackUserProfileAction: n
  } = (0, i.useUserProfileAnalyticsContext)(), u = (0, s.default)();
  return (0, a.jsx)(r.default, {
    icon: l.default,
    text: o.default.Messages.EDIT_PROFILE,
    onClick: () => {
      n({
        action: "EDIT_PROFILE"
      }), null == t || t(), u()
    }
  })
}