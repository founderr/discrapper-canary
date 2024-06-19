n.d(t, {
  a: function() {
    return i
  },
  g: function() {
    return s
  }
});
var l = n(570140);

function i(e, t) {
  l.Z.dispatch({
    guildId: e,
    channelId: t,
    type: "UNREAD_SETTING_NOTICE_CHANNEL_VISIT"
  })
}

function s(e, t) {
  l.Z.dispatch({
    guildId: e,
    channelId: t,
    type: "UNREAD_SETTING_NOTICE_RENDERED"
  })
}