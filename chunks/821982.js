"use strict";
a.r(t);
var n = a("768581"),
  s = a("1585");
t.default = (e, t, a) => (0, n.getAvatarDecorationURL)({
  avatarDecoration: {
    asset: e
  },
  size: (0, s.getDecorationSizeForAvatarSize)(t),
  canAnimate: a
})