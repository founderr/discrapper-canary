"use strict";
n.r(t), n.d(t, {
  isLimitedAccessErrorCode: function() {
    return r
  }
});
var a = n("49111");

function r(e, t) {
  return 403 === e && null != t && t >= a.AbortCodes.GUILD_LIMITED_ACCESS_DEFAULT && t <= a.AbortCodes.GUILD_LIMITED_ACCESS_MAX
}