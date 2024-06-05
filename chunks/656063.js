"use strict";
r.r(t), r.d(t, {
  default: function() {
    return c
  }
});
var s = r("503438"),
  i = r("802856"),
  n = r("420660"),
  l = r("789407"),
  a = r("630186"),
  o = r("250889");

function c(e) {
  return (0, i.default)(e) ? o.XBOX_APPLICATION_ID_PREFIX + e.name : (0, s.default)(e) && null != e.party && null != e.party.id ? l.SpotifyApplication.id : (0, n.default)(e) && null != e.url ? a.TWITCH_APPLICATION_ID_PREFIX + e.url : null != e.application_id ? e.application_id : null
}