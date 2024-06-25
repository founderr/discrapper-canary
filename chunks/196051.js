n.d(t, {
  Bo: function() {
    return a
  },
  Ct: function() {
    return o
  },
  LA: function() {
    return l
  },
  NB: function() {
    return r
  },
  cP: function() {
    return i
  }
});
var s = n(570140);

function i(e, t, n, i, l) {
  s.Z.dispatch({
    type: "SPEAK_TEXT",
    text: e,
    interrupt: t,
    maxLength: n,
    onStart: i,
    onEnd: l
  })
}

function l(e, t) {
  s.Z.dispatch({
    type: "SPEAK_MESSAGE",
    channel: e,
    message: t
  })
}

function a(e, t) {
  s.Z.dispatch({
    type: "SPEAKING_MESSAGE",
    channelId: e,
    messageId: t
  })
}

function r() {
  s.Z.dispatch({
    type: "STOP_SPEAKING"
  })
}

function o(e) {
  s.Z.dispatch({
    type: "SET_TTS_SPEECH_RATE",
    speechRate: e
  })
}