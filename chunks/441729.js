var c,
    i = t(442837),
    a = t(570140);
function o(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
let r = {
        speechRate: 1,
        currentMessage: null
    },
    s = r;
class u extends (c = i.ZP.DeviceSettingsStore) {
    initialize(e) {
        s = {
            ...r,
            ...(null != e ? e : null)
        };
    }
    isSpeakingMessage(e, n) {
        let { currentMessage: t } = s;
        return null !== t && t.channelId === e && t.messageId === n;
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
o(u, 'displayName', 'TTSStore'),
    o(u, 'persistKey', 'TTSStore'),
    o(u, 'migrations', []),
    (n.Z = new u(
        a.Z,
        __OVERLAY__
            ? {}
            : {
                  SPEAKING_MESSAGE: function (e) {
                      let { messageId: n, channelId: t } = e;
                      s = {
                          ...s,
                          currentMessage: {
                              messageId: n,
                              channelId: t
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
