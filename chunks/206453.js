"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
}), s("70102");
var i = s("37983");
s("884691");
var r = s("784917"),
  a = s("326880"),
  l = s("131777"),
  o = s("49111");

function n(e) {
  let {
    tier: t,
    ...s
  } = e;
  switch (t) {
    case o.BoostedGuildTiers.NONE:
    case o.BoostedGuildTiers.TIER_1:
      return (0, i.jsx)(r.default, {
        ...s
      });
    case o.BoostedGuildTiers.TIER_2:
      return (0, i.jsx)(a.default, {
        ...s
      });
    case o.BoostedGuildTiers.TIER_3:
      return (0, i.jsx)(l.default, {
        ...s
      });
    default:
      throw Error("Not a valid tier type")
  }
}