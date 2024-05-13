"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var l = n("442837"),
  a = n("553795"),
  u = n("823379"),
  i = n("981631");

function s() {
  return (0, l.useStateFromStoresArray)([a.default], () => [a.default.getAccount(null, i.PlatformTypes.XBOX), a.default.getAccount(null, i.PlatformTypes.PLAYSTATION), a.default.getAccount(null, i.PlatformTypes.PLAYSTATION_STAGING)].filter(u.isNotNullish))
}