"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var n = s("503438"),
  r = s("802856"),
  a = s("420660"),
  u = s("789407"),
  i = s("630186"),
  l = s("250889");

function E(e) {
  return (0, r.default)(e) ? l.XBOX_APPLICATION_ID_PREFIX + e.name : (0, n.default)(e) && null != e.party && null != e.party.id ? u.SpotifyApplication.id : (0, a.default)(e) && null != e.url ? i.TWITCH_APPLICATION_ID_PREFIX + e.url : null != e.application_id ? e.application_id : null
}