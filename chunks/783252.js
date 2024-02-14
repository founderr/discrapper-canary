"use strict";
E.r(_), E.d(_, {
  default: function() {
    return A
  }
}), E("222007");
var t = E("913144"),
  o = E("689988"),
  n = E("271938"),
  a = E("366679"),
  i = E("42203"),
  r = E("18494"),
  I = E("123647"),
  T = E("49111");

function s() {
  ! function() {
    let e = r.default.getVoiceChannelId(),
      _ = a.default.bitrate;
    if (null == e) return;
    let E = i.default.getChannel(e);
    if (null != E) _ !== E.bitrate && t.default.dispatch({
      type: "SET_CHANNEL_BITRATE",
      bitrate: E.bitrate
    })
  }(), ! function() {
    var e;
    let _ = r.default.getVoiceChannelId(),
      E = I.default.mode;
    if (null == _) return;
    let o = i.default.getChannel(_);
    if (null == o) return;
    let n = null !== (e = o.videoQualityMode) && void 0 !== e ? e : T.VideoQualityMode.AUTO;
    E !== n && t.default.dispatch({
      type: "SET_CHANNEL_VIDEO_QUALITY_MODE",
      mode: n
    })
  }()
}

function S(e) {
  let {
    channels: _
  } = e;
  for (let e of _) r.default.getVoiceChannelId() === e.id && s()
}

function N(e) {
  let {
    voiceStates: _
  } = e;
  _.forEach(e => {
    n.default.getSessionId() === e.sessionId && s()
  })
}
class O extends o.default {
  constructor(...e) {
    super(...e), this.actions = {
      CHANNEL_UPDATES: S,
      VOICE_STATE_UPDATES: N
    }
  }
}
var A = new O