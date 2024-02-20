"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var i = n("771281"),
  a = n("773364"),
  l = n("689988"),
  s = n("271938"),
  r = n("50885"),
  o = n("49111");
let u = new Set;

function d(e) {
  switch (e) {
    case a.MediaEngineContextTypes.DEFAULT:
      return i.StoredCrashInformation.VideoMediaSessionId;
    case a.MediaEngineContextTypes.STREAM:
      return i.StoredCrashInformation.StreamMediaSessionId
  }
}

function c(e) {
  var t;
  r.default.setCrashInformation(d(e.context), null !== (t = e.mediaSessionId) && void 0 !== t ? t : null)
}

function f(e) {
  var t;
  let n = (null !== (t = e.channelId) && void 0 !== t ? t : "unknown") + e.context;
  switch (e.state) {
    case o.RTCConnectionStates.RTC_CONNECTED:
      u.add(n), r.default.setCrashInformation(i.StoredCrashInformation.HasRTCConnection, 1);
      break;
    case o.RTCConnectionStates.DISCONNECTED:
      r.default.setCrashInformation(d(e.context), null), u.delete(n), 0 === u.size && ! function() {
        let e = [i.StoredCrashInformation.HasRTCConnection, i.StoredCrashInformation.IsSendingVideo, i.StoredCrashInformation.IsSendingStream, i.StoredCrashInformation.IsReceivingVideo, i.StoredCrashInformation.IsReceivingStream];
        for (let t of e) r.default.setCrashInformation(t, 0)
      }()
  }
}

function E(e) {
  let t = e.userId === s.default.getId(),
    n = null != e.streamId,
    l = null;
  switch (e.context) {
    case a.MediaEngineContextTypes.DEFAULT:
      l = t ? i.StoredCrashInformation.IsSendingVideo : i.StoredCrashInformation.IsReceivingVideo;
      break;
    case a.MediaEngineContextTypes.STREAM:
      l = t ? i.StoredCrashInformation.IsSendingStream : i.StoredCrashInformation.IsReceivingStream
  }
  r.default.setCrashInformation(l, n ? 1 : 0)
}
class h extends l.default {
  constructor(...e) {
    super(...e), this.actions = {
      RTC_CONNECTION_STATE: f,
      RTC_CONNECTION_VIDEO: E,
      MEDIA_SESSION_JOINED: c
    }
  }
}
var _ = new h