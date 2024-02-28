"use strict";
l.r(t), l.d(t, {
  default: function() {
    return r
  }
});
var n = l("446674"),
  a = l("47319"),
  s = l("449008"),
  u = l("49111");

function r() {
  return (0, n.useStateFromStoresArray)([a.default], () => [a.default.getAccount(null, u.PlatformTypes.XBOX), a.default.getAccount(null, u.PlatformTypes.PLAYSTATION), a.default.getAccount(null, u.PlatformTypes.PLAYSTATION_STAGING)].filter(s.isNotNullish))
}