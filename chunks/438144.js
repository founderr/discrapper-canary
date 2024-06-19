n.d(t, {
  M: function() {
    return s
  },
  s: function() {
    return i
  }
});
var l = n(570140);

function i(e) {
  l.Z.dispatch({
    type: "VOICE_CATEGORY_EXPAND",
    guildId: e,
    expand: !0
  })
}

function s(e) {
  l.Z.dispatch({
    type: "VOICE_CATEGORY_COLLAPSE",
    guildId: e,
    expand: !1
  })
}