n.d(t, {
  GO: function() {
    return i
  },
  K7: function() {
    return l
  },
  xm: function() {
    return a
  }
});
var s = n(570140);

function i(e) {
  s.Z.dispatch({
    type: "BOOSTED_GUILD_GRACE_PERIOD_NOTICE_DISMISS",
    guildId: e
  })
}

function l(e) {
  s.Z.dispatch({
    type: "PUBLIC_UPSELL_NOTICE_DISMISS",
    guildId: e
  })
}

function a(e) {
  s.Z.dispatch({
    type: "MAX_MEMBER_COUNT_NOTICE_DISMISS",
    guildId: e
  })
}