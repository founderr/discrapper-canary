var r, c = n(442837),
  i = n(570140);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let u = {
    speechRate: 1,
    currentMessage: null
  },
  a = u;
class S extends(r = c.ZP.DeviceSettingsStore) {
  initialize(e) {
    a = {
      ...u,
      ...null != e ? e : null
    }
  }
  isSpeakingMessage(e, t) {
    let {
      currentMessage: n
    } = a;
    return null !== n && n.channelId === e && n.messageId === t
  }
  get currentMessage() {
    return a.currentMessage
  }
  get speechRate() {
    return a.speechRate
  }
  getUserAgnosticState() {
    return a
  }
}
s(S, "displayName", "TTSStore"), s(S, "persistKey", "TTSStore"), s(S, "migrations", []), t.Z = new S(i.Z, __OVERLAY__ ? {} : {
  SPEAKING_MESSAGE: function(e) {
    let {
      messageId: t,
      channelId: n
    } = e;
    a = {
      ...a,
      currentMessage: {
        messageId: t,
        channelId: n
      }
    }
  },
  STOP_SPEAKING: function() {
    a = {
      ...a,
      currentMessage: null
    }
  },
  SET_TTS_SPEECH_RATE: function(e) {
    a = {
      ...a,
      speechRate: e.speechRate
    }
  }
})