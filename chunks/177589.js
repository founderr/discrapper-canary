"use strict";
i.r(t), i.d(t, {
  default: function() {
    return o
  }
});
var r = i("429928"),
  s = i("36539"),
  n = i("502651"),
  l = i("671071"),
  a = i("322631"),
  u = i("947297");

function o(e) {
  return (0, s.default)(e) ? u.XBOX_APPLICATION_ID_PREFIX + e.name : (0, r.default)(e) && null != e.party && null != e.party.id ? l.SpotifyApplication.id : (0, n.default)(e) && null != e.url ? a.TWITCH_APPLICATION_ID_PREFIX + e.url : null != e.application_id ? e.application_id : null
}