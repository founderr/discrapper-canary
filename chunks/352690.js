"use strict";
E.r(_), E.d(_, {
  default: function() {
    return A
  }
}), E("222007");
var t = E("771281"),
  o = E("773364"),
  n = E("689988"),
  a = E("271938"),
  r = E("50885"),
  i = E("49111");
let I = new Set;

function T(e) {
  switch (e) {
    case o.MediaEngineContextTypes.DEFAULT:
      return t.StoredCrashInformation.VideoMediaSessionId;
    case o.MediaEngineContextTypes.STREAM:
      return t.StoredCrashInformation.StreamMediaSessionId
  }
}

function s(e) {
  var _;
  r.default.setCrashInformation(T(e.context), null !== (_ = e.mediaSessionId) && void 0 !== _ ? _ : null)
}

function S(e) {
  var _;
  let E = (null !== (_ = e.channelId) && void 0 !== _ ? _ : "unknown") + e.context;
  switch (e.state) {
    case i.RTCConnectionStates.RTC_CONNECTED:
      I.add(E), r.default.setCrashInformation(t.StoredCrashInformation.HasRTCConnection, 1);
      break;
    case i.RTCConnectionStates.DISCONNECTED:
      r.default.setCrashInformation(T(e.context), null), I.delete(E), 0 === I.size && ! function() {
        let e = [t.StoredCrashInformation.HasRTCConnection, t.StoredCrashInformation.IsSendingVideo, t.StoredCrashInformation.IsSendingStream, t.StoredCrashInformation.IsReceivingVideo, t.StoredCrashInformation.IsReceivingStream];
        for (let _ of e) r.default.setCrashInformation(_, 0)
      }()
  }
}

function N(e) {
  let _ = e.userId === a.default.getId(),
    E = null != e.streamId,
    n = null;
  switch (e.context) {
    case o.MediaEngineContextTypes.DEFAULT:
      n = _ ? t.StoredCrashInformation.IsSendingVideo : t.StoredCrashInformation.IsReceivingVideo;
      break;
    case o.MediaEngineContextTypes.STREAM:
      n = _ ? t.StoredCrashInformation.IsSendingStream : t.StoredCrashInformation.IsReceivingStream
  }
  r.default.setCrashInformation(n, E ? 1 : 0)
}
class O extends n.default {
  constructor(...e) {
    super(...e), this.actions = {
      RTC_CONNECTION_STATE: S,
      RTC_CONNECTION_VIDEO: N,
      MEDIA_SESSION_JOINED: s
    }
  }
}
var A = new O