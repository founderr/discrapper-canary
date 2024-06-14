"use strict";
s.r(t), s.d(t, {
  cancelAll: function() {
    return r
  },
  createUtterance: function() {
    return l
  },
  speakUtterance: function() {
    return i
  },
  supported: function() {
    return a
  }
}), s("757143");
var n = s("441729");
let a = null != window.speechSynthesis;

function l(e, t) {
  let s = e.replace(/(https?:\/\/[^\s]+)/g, e => {
    let t = e.match(/^https?:\/\/(?:www\.)?([^/?#]+)(?:[/?#]|$)/i);
    return null != t ? t[1] : ""
  });
  null != t && s.length > t && (s = (s = s.substring(0, t)).substring(0, Math.min(s.length, s.lastIndexOf(" "))));
  let a = new SpeechSynthesisUtterance(s);
  return a.rate = n.default.speechRate, a
}

function i(e, t) {
  a && (e.voice = t, speechSynthesis.speak(e))
}

function r() {
  a && speechSynthesis.cancel()
}