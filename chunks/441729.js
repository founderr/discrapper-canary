var s, i = n(442837),
  l = n(570140);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let r = {
    speechRate: 1,
    currentMessage: null
  },
  o = r;
class c extends(s = i.ZP.DeviceSettingsStore) {
  initialize(e) {
    o = {
      ...r,
      ...null != e ? e : null
    }
  }
  isSpeakingMessage(e, t) {
    let {
      currentMessage: n
    } = o;
    return null !== n && n.channelId === e && n.messageId === t
  }
  get currentMessage() {
    return o.currentMessage
  }
  get speechRate() {
    return o.speechRate
  }
  getUserAgnosticState() {
    return o
  }
}
a(c, "displayName", "TTSStore"), a(c, "persistKey", "TTSStore"), a(c, "migrations", []), t.Z = new c(l.Z, __OVERLAY__ ? {} : {
  SPEAKING_MESSAGE: function(e) {
    let {
      messageId: t,
      channelId: n
    } = e;
    o = {
      ...o,
      currentMessage: {
        messageId: t,
        channelId: n
      }
    }
  },
  STOP_SPEAKING: function() {
    o = {
      ...o,
      currentMessage: null
    }
  },
  SET_TTS_SPEECH_RATE: function(e) {
    o = {
      ...o,
      speechRate: e.speechRate
    }
  }
})