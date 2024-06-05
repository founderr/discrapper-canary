"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("503438"),
  r = n("802856"),
  s = n("420660"),
  o = n("789407"),
  a = n("630186"),
  l = n("250889");

function u(e) {
  return (0, r.default)(e) ? l.XBOX_APPLICATION_ID_PREFIX + e.name : (0, i.default)(e) && null != e.party && null != e.party.id ? o.SpotifyApplication.id : (0, s.default)(e) && null != e.url ? a.TWITCH_APPLICATION_ID_PREFIX + e.url : null != e.application_id ? e.application_id : null
}