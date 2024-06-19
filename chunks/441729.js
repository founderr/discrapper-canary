var i, l = t(442837),
  s = t(570140);

function r(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e
}
let a = {
    speechRate: 1,
    currentMessage: null
  },
  o = a;
class u extends(i = l.ZP.DeviceSettingsStore) {
  initialize(e) {
    o = {
      ...a,
      ...null != e ? e : null
    }
  }
  isSpeakingMessage(e, n) {
    let {
      currentMessage: t
    } = o;
    return null !== t && t.channelId === e && t.messageId === n
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
r(u, "displayName", "TTSStore"), r(u, "persistKey", "TTSStore"), r(u, "migrations", []), n.Z = new u(s.Z, __OVERLAY__ ? {} : {
  SPEAKING_MESSAGE: function(e) {
    let {
      messageId: n,
      channelId: t
    } = e;
    o = {
      ...o,
      currentMessage: {
        messageId: n,
        channelId: t
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