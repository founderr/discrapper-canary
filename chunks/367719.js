"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("468194"),
  a = n("477690"),
  s = n("131388"),
  l = n("293810");
let r = (0, i.cssValueToNumber)(a.default.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE),
  u = (0, i.cssValueToNumber)(a.default.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE_MOBILE);

function o() {
  let e = (0, s.default)(l.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY);
  return e ? u : r
}