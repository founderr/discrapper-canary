"use strict";
n.r(t), n.d(t, {
  setSpeechRate: function() {
    return r
  },
  speakMessage: function() {
    return i
  },
  speakText: function() {
    return l
  },
  speakingMessage: function() {
    return s
  },
  stopSpeaking: function() {
    return a
  }
});
var u = n("570140");

function l(e, t, n, l, i) {
  u.default.dispatch({
    type: "SPEAK_TEXT",
    text: e,
    interrupt: t,
    maxLength: n,
    onStart: l,
    onEnd: i
  })
}

function i(e, t) {
  u.default.dispatch({
    type: "SPEAK_MESSAGE",
    channel: e,
    message: t
  })
}

function s(e, t) {
  u.default.dispatch({
    type: "SPEAKING_MESSAGE",
    channelId: e,
    messageId: t
  })
}

function a() {
  u.default.dispatch({
    type: "STOP_SPEAKING"
  })
}

function r(e) {
  u.default.dispatch({
    type: "SET_TTS_SPEECH_RATE",
    speechRate: e
  })
}