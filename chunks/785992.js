"use strict";
l.r(t), l.d(t, {
  default: function() {
    return i
  },
  isSpotifySpecialEmbedHost: function() {
    return s
  }
});
var n = l("729594"),
  r = l("981631");

function s(e) {
  return null != e && "open.spotify.com" === e
}

function i(e) {
  var t;
  if (null == e.url || (null === (t = e.provider) || void 0 === t ? void 0 : t.name) !== "Spotify" || e.type !== r.MessageEmbedTypes.LINK) return !1;
  try {
    let t = n.parse(e.url, !0).host;
    return s(t)
  } catch (e) {
    return !1
  }
}