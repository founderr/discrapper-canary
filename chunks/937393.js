"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var l = n("442837"),
  a = n("553795"),
  i = n("823379"),
  u = n("981631");

function s() {
  return (0, l.useStateFromStoresArray)([a.default], () => [a.default.getAccount(null, u.PlatformTypes.XBOX), a.default.getAccount(null, u.PlatformTypes.PLAYSTATION), a.default.getAccount(null, u.PlatformTypes.PLAYSTATION_STAGING)].filter(i.isNotNullish))
}