"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("315102"),
  s = n("606292"),
  i = (e, t, n) => (0, a.getAvatarDecorationURL)({
    avatarDecoration: {
      asset: e
    },
    size: (0, s.getDecorationSizeForAvatarSize)(t),
    canAnimate: n
  })