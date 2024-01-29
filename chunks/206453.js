"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("70102");
var l = n("37983");
n("884691");
var i = n("784917"),
  s = n("326880"),
  r = n("131777"),
  o = n("49111");

function a(e) {
  let {
    tier: t,
    ...n
  } = e;
  switch (t) {
    case o.BoostedGuildTiers.NONE:
    case o.BoostedGuildTiers.TIER_1:
      return (0, l.jsx)(i.default, {
        ...n
      });
    case o.BoostedGuildTiers.TIER_2:
      return (0, l.jsx)(s.default, {
        ...n
      });
    case o.BoostedGuildTiers.TIER_3:
      return (0, l.jsx)(r.default, {
        ...n
      });
    default:
      throw Error("Not a valid tier type")
  }
}