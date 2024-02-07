"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("70102");
var s = n("37983");
n("884691");
var r = n("784917"),
  l = n("326880"),
  a = n("131777"),
  i = n("49111");

function o(e) {
  let {
    tier: t,
    ...n
  } = e;
  switch (t) {
    case i.BoostedGuildTiers.NONE:
    case i.BoostedGuildTiers.TIER_1:
      return (0, s.jsx)(r.default, {
        ...n
      });
    case i.BoostedGuildTiers.TIER_2:
      return (0, s.jsx)(l.default, {
        ...n
      });
    case i.BoostedGuildTiers.TIER_3:
      return (0, s.jsx)(a.default, {
        ...n
      });
    default:
      throw Error("Not a valid tier type")
  }
}