"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var r = n("503438"),
  i = n("802856"),
  a = n("420660"),
  s = n("789407"),
  l = n("630186"),
  u = n("250889");

function o(e) {
  return (0, i.default)(e) ? u.XBOX_APPLICATION_ID_PREFIX + e.name : (0, r.default)(e) && null != e.party && null != e.party.id ? s.SpotifyApplication.id : (0, a.default)(e) && null != e.url ? l.TWITCH_APPLICATION_ID_PREFIX + e.url : null != e.application_id ? e.application_id : null
}