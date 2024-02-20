"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var i = n("913144"),
  a = n("689988"),
  l = n("271938"),
  s = n("366679"),
  r = n("42203"),
  o = n("18494"),
  u = n("123647"),
  d = n("49111");

function c() {
  ! function() {
    let e = o.default.getVoiceChannelId(),
      t = s.default.bitrate;
    if (null == e) return;
    let n = r.default.getChannel(e);
    if (null != n) t !== n.bitrate && i.default.dispatch({
      type: "SET_CHANNEL_BITRATE",
      bitrate: n.bitrate
    })
  }(), ! function() {
    var e;
    let t = o.default.getVoiceChannelId(),
      n = u.default.mode;
    if (null == t) return;
    let a = r.default.getChannel(t);
    if (null == a) return;
    let l = null !== (e = a.videoQualityMode) && void 0 !== e ? e : d.VideoQualityMode.AUTO;
    n !== l && i.default.dispatch({
      type: "SET_CHANNEL_VIDEO_QUALITY_MODE",
      mode: l
    })
  }()
}

function f(e) {
  let {
    channels: t
  } = e;
  for (let e of t) o.default.getVoiceChannelId() === e.id && c()
}

function E(e) {
  let {
    voiceStates: t
  } = e;
  t.forEach(e => {
    l.default.getSessionId() === e.sessionId && c()
  })
}
class h extends a.default {
  constructor(...e) {
    super(...e), this.actions = {
      CHANNEL_UPDATES: f,
      VOICE_STATE_UPDATES: E
    }
  }
}
var _ = new h