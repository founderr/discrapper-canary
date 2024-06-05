"use strict";
r.r(t), r.d(t, {
  setSpeechRate: function() {
    return c
  },
  speakMessage: function() {
    return n
  },
  speakText: function() {
    return i
  },
  speakingMessage: function() {
    return l
  },
  stopSpeaking: function() {
    return o
  }
});
var a = r("570140");

function i(e, t, r, i, n) {
  a.default.dispatch({
    type: "SPEAK_TEXT",
    text: e,
    interrupt: t,
    maxLength: r,
    onStart: i,
    onEnd: n
  })
}

function n(e, t) {
  a.default.dispatch({
    type: "SPEAK_MESSAGE",
    channel: e,
    message: t
  })
}

function l(e, t) {
  a.default.dispatch({
    type: "SPEAKING_MESSAGE",
    channelId: e,
    messageId: t
  })
}

function o() {
  a.default.dispatch({
    type: "STOP_SPEAKING"
  })
}

function c(e) {
  a.default.dispatch({
    type: "SET_TTS_SPEECH_RATE",
    speechRate: e
  })
}