"use strict";
n.d(t, {
  Sc: function() {
    return E
  },
  UP: function() {
    return I
  },
  Zx: function() {
    return c
  },
  _s: function() {
    return d
  }
}), n(47120);
var i = n(570140),
  r = n(339085),
  s = n(592125),
  o = n(19780),
  a = n(944486),
  l = n(626135),
  u = n(106301),
  _ = n(981631);

function c(e, t) {
  var n;
  if (null == e) {
    E(t);
    return
  }
  i.Z.dispatch({
    type: "UPDATE_HANG_STATUS",
    status: e,
    saveAsDefault: t
  }), l.default.track(_.rMx.SET_HANG_STATUS, {
    status_type: e,
    channel_id: a.Z.getVoiceChannelId(),
    guild_id: null === (n = s.Z.getChannel(a.Z.getVoiceChannelId())) || void 0 === n ? void 0 : n.guild_id,
    media_session_id: o.Z.getMediaSessionId()
  })
}

function d(e, t, n) {
  var r;
  if ("" === e || null == t) {
    E(n);
    return
  }
  i.Z.dispatch({
    type: "UPDATE_HANG_STATUS_CUSTOM",
    emoji: t,
    status: e,
    saveAsDefault: n
  }), l.default.track(_.rMx.SET_HANG_STATUS, {
    status_type: e,
    channel_id: a.Z.getVoiceChannelId(),
    guild_id: null === (r = s.Z.getChannel(a.Z.getVoiceChannelId())) || void 0 === r ? void 0 : r.guild_id,
    media_session_id: o.Z.getMediaSessionId()
  })
}

function E(e) {
  var t;
  i.Z.dispatch({
    type: "CLEAR_HANG_STATUS",
    saveAsDefault: e
  }), l.default.track(_.rMx.CLEAR_HANG_STATUS, {
    channel_id: a.Z.getVoiceChannelId(),
    guild_id: null === (t = s.Z.getChannel(a.Z.getVoiceChannelId())) || void 0 === t ? void 0 : t.guild_id,
    media_session_id: o.Z.getMediaSessionId()
  })
}

function I() {
  let e = [u.Z.getCustomHangStatus(), ...u.Z.getRecentCustomStatuses()].filter(e => {
    var t;
    return null != e && null != e.emoji && (null === (t = e.emoji) || void 0 === t ? void 0 : t.id) != null && null == r.Z.getCustomEmojiById(e.emoji.id)
  });
  e.length > 0 && i.Z.dispatch({
    type: "DELETE_INVALID_HANG_STATUSES",
    statuses: e
  })
}