"use strict";
n.r(t);
var u, l = n("442837"),
  i = n("570140");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let a = {
    speechRate: 1,
    currentMessage: null
  },
  r = a;
class d extends(u = l.default.DeviceSettingsStore) {
  initialize(e) {
    r = {
      ...a,
      ...null != e ? e : null
    }
  }
  isSpeakingMessage(e, t) {
    let {
      currentMessage: n
    } = r;
    return null !== n && n.channelId === e && n.messageId === t
  }
  get currentMessage() {
    return r.currentMessage
  }
  get speechRate() {
    return r.speechRate
  }
  getUserAgnosticState() {
    return r
  }
}
s(d, "displayName", "TTSStore"), s(d, "persistKey", "TTSStore"), s(d, "migrations", []), t.default = new d(i.default, __OVERLAY__ ? {} : {
  SPEAKING_MESSAGE: function(e) {
    let {
      messageId: t,
      channelId: n
    } = e;
    r = {
      ...r,
      currentMessage: {
        messageId: t,
        channelId: n
      }
    }
  },
  STOP_SPEAKING: function() {
    r = {
      ...r,
      currentMessage: null
    }
  },
  SET_TTS_SPEECH_RATE: function(e) {
    r = {
      ...r,
      speechRate: e.speechRate
    }
  }
})