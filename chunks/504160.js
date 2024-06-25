n.d(t, {
  L_: function() {
    return l
  },
  _6: function() {
    return a
  },
  ji: function() {
    return i
  }
});
var s = n(570140);

function i(e) {
  let {
    eventId: t,
    stageId: n
  } = e;
  (null != t || null != n) && s.Z.dispatch({
    type: "LIVE_CHANNEL_NOTICE_HIDE",
    eventId: t,
    stageId: n
  })
}

function l(e) {
  s.Z.dispatch({
    type: "UPCOMING_GUILD_EVENT_NOTICE_HIDE",
    eventId: e
  })
}

function a(e) {
  s.Z.dispatch({
    type: "UPCOMING_GUILD_EVENT_NOTICE_SEEN",
    guildEventId: e
  })
}