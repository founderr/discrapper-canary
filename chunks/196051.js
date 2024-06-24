t.d(n, {
  Bo: function() {
    return r
  },
  Ct: function() {
    return o
  },
  LA: function() {
    return s
  },
  NB: function() {
    return a
  },
  cP: function() {
    return l
  }
});
var i = t(570140);

function l(e, n, t, l, s) {
  i.Z.dispatch({
    type: "SPEAK_TEXT",
    text: e,
    interrupt: n,
    maxLength: t,
    onStart: l,
    onEnd: s
  })
}

function s(e, n) {
  i.Z.dispatch({
    type: "SPEAK_MESSAGE",
    channel: e,
    message: n
  })
}

function r(e, n) {
  i.Z.dispatch({
    type: "SPEAKING_MESSAGE",
    channelId: e,
    messageId: n
  })
}

function a() {
  i.Z.dispatch({
    type: "STOP_SPEAKING"
  })
}

function o(e) {
  i.Z.dispatch({
    type: "SET_TTS_SPEECH_RATE",
    speechRate: e
  })
}