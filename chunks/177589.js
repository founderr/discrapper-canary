"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var r = s("429928"),
  n = s("36539"),
  i = s("502651"),
  l = s("671071"),
  a = s("322631"),
  u = s("947297");

function o(e) {
  return (0, n.default)(e) ? u.XBOX_APPLICATION_ID_PREFIX + e.name : (0, r.default)(e) && null != e.party && null != e.party.id ? l.SpotifyApplication.id : (0, i.default)(e) && null != e.url ? a.TWITCH_APPLICATION_ID_PREFIX + e.url : null != e.application_id ? e.application_id : null
}