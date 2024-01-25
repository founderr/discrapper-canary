"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("429928"),
  n = s("36539"),
  r = s("502651"),
  i = s("671071"),
  l = s("322631"),
  u = s("947297");

function o(e) {
  return (0, n.default)(e) ? u.XBOX_APPLICATION_ID_PREFIX + e.name : (0, a.default)(e) && null != e.party && null != e.party.id ? i.SpotifyApplication.id : (0, r.default)(e) && null != e.url ? l.TWITCH_APPLICATION_ID_PREFIX + e.url : null != e.application_id ? e.application_id : null
}