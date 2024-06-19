n.d(l, {
  E: function() {
    return i
  },
  Z: function() {
    return s
  }
});
var t = n(729594),
  r = n(981631);

function i(e) {
  return null != e && "open.spotify.com" === e
}

function s(e) {
  var l;
  if (null == e.url || (null === (l = e.provider) || void 0 === l ? void 0 : l.name) !== "Spotify" || e.type !== r.hBH.LINK) return !1;
  try {
    let l = t.parse(e.url, !0).host;
    return i(l)
  } catch (e) {
    return !1
  }
}