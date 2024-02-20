"use strict";
n.r(t), n.d(t, {
  coercePlatformTypeToConsoleType: function() {
    return l
  }
});
var i = n("171644"),
  a = n("49111");

function l(e) {
  switch (e) {
    case a.PlatformTypes.XBOX:
      return i.GameConsoleTypes.XBOX;
    case a.PlatformTypes.PLAYSTATION:
    case a.PlatformTypes.PLAYSTATION_STAGING:
      return i.GameConsoleTypes.PLAYSTATION;
    default:
      return null
  }
}