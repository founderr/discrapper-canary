n.d(t, {
  Bo: function() {
    return s
  },
  Ct: function() {
    return a
  },
  LA: function() {
    return i
  },
  NB: function() {
    return u
  },
  cP: function() {
    return c
  }
});
var r = n(570140);

function c(e, t, n, c, i) {
  r.Z.dispatch({
    type: "SPEAK_TEXT",
    text: e,
    interrupt: t,
    maxLength: n,
    onStart: c,
    onEnd: i
  })
}

function i(e, t) {
  r.Z.dispatch({
    type: "SPEAK_MESSAGE",
    channel: e,
    message: t
  })
}

function s(e, t) {
  r.Z.dispatch({
    type: "SPEAKING_MESSAGE",
    channelId: e,
    messageId: t
  })
}

function u() {
  r.Z.dispatch({
    type: "STOP_SPEAKING"
  })
}

function a(e) {
  r.Z.dispatch({
    type: "SET_TTS_SPEECH_RATE",
    speechRate: e
  })
}