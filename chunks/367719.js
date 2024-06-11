"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("468194"),
  a = n("477690"),
  s = n("131388"),
  r = n("293810");
let l = (0, i.cssValueToNumber)(a.default.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE),
  u = (0, i.cssValueToNumber)(a.default.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE_MOBILE);

function o() {
  let e = (0, s.default)(r.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY);
  return e ? u : l
}