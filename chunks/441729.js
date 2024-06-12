"use strict";
r.r(t);
var a, i = r("442837"),
  n = r("570140");

function l(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e
}
let o = {
    speechRate: 1,
    currentMessage: null
  },
  c = o;
class s extends(a = i.default.DeviceSettingsStore) {
  initialize(e) {
    c = {
      ...o,
      ...null != e ? e : null
    }
  }
  isSpeakingMessage(e, t) {
    let {
      currentMessage: r
    } = c;
    return null !== r && r.channelId === e && r.messageId === t
  }
  get currentMessage() {
    return c.currentMessage
  }
  get speechRate() {
    return c.speechRate
  }
  getUserAgnosticState() {
    return c
  }
}
l(s, "displayName", "TTSStore"), l(s, "persistKey", "TTSStore"), l(s, "migrations", []), t.default = new s(n.default, __OVERLAY__ ? {} : {
  SPEAKING_MESSAGE: function(e) {
    let {
      messageId: t,
      channelId: r
    } = e;
    c = {
      ...c,
      currentMessage: {
        messageId: t,
        channelId: r
      }
    }
  },
  STOP_SPEAKING: function() {
    c = {
      ...c,
      currentMessage: null
    }
  },
  SET_TTS_SPEECH_RATE: function(e) {
    c = {
      ...c,
      speechRate: e.speechRate
    }
  }
})