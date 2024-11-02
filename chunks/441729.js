var i,
    r = n(442837),
    l = n(570140);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let o = {
        speechRate: 1,
        currentMessage: null
    },
    s = o;
class c extends (i = r.ZP.DeviceSettingsStore) {
    initialize(e) {
        s = {
            ...o,
            ...(null != e ? e : null)
        };
    }
    isSpeakingMessage(e, t) {
        let { currentMessage: n } = s;
        return null !== n && n.channelId === e && n.messageId === t;
    }
    get currentMessage() {
        return s.currentMessage;
    }
    get speechRate() {
        return s.speechRate;
    }
    getUserAgnosticState() {
        return s;
    }
}
a(c, 'displayName', 'TTSStore'),
    a(c, 'persistKey', 'TTSStore'),
    a(c, 'migrations', []),
    (t.Z = new c(
        l.Z,
        __OVERLAY__
            ? {}
            : {
                  SPEAKING_MESSAGE: function (e) {
                      let { messageId: t, channelId: n } = e;
                      s = {
                          ...s,
                          currentMessage: {
                              messageId: t,
                              channelId: n
                          }
                      };
                  },
                  STOP_SPEAKING: function () {
                      s = {
                          ...s,
                          currentMessage: null
                      };
                  },
                  SET_TTS_SPEECH_RATE: function (e) {
                      s = {
                          ...s,
                          speechRate: e.speechRate
                      };
                  }
              }
    ));
