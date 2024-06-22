s.d(t, {
  Z: function() {
    return u
  }
});
var a = s(913527),
  n = s.n(a),
  l = s(695346),
  o = s(626135),
  i = s(337953),
  r = s(981631);

function u(e, t, s, a) {
  let u = e.trim();
  if (u.length > 0 || null != t) {
    var c;
    l.Ok.updateSetting({
      text: u.length > 0 ? u : "",
      expiresAtMs: null != s ? String(n()().add((0, i.Z)(s), "ms").toDate().getTime()) : "0",
      emojiId: null != t && null != t.id ? t.id : "0",
      emojiName: null != t ? t.name : ""
    }), o.default.track(r.rMx.CUSTOM_STATUS_UPDATED, {
      location: null != a ? a.location : null,
      emoji_type: null == (c = t) ? null : null != c.id ? "custom" : "unicode",
      text_len: u.length,
      clear_after: null != s ? "".concat(s) : null
    })
  } else l.Ok.updateSetting(void 0)
}