"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var n = s("468194"),
  i = s("477690"),
  l = s("131388"),
  a = s("293810");
let r = (0, n.cssValueToNumber)(i.default.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE),
  u = (0, n.cssValueToNumber)(i.default.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE_MOBILE);

function o() {
  let e = (0, l.default)(a.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY);
  return e ? u : r
}