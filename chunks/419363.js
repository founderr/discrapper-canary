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
    return n
  }
}), s("757143");
var a = s("441729");
let n = null != window.speechSynthesis;

function l(e, t) {
  let s = e.replace(/(https?:\/\/[^\s]+)/g, e => {
    let t = e.match(/^https?:\/\/(?:www\.)?([^/?#]+)(?:[/?#]|$)/i);
    return null != t ? t[1] : ""
  });
  null != t && s.length > t && (s = (s = s.substring(0, t)).substring(0, Math.min(s.length, s.lastIndexOf(" "))));
  let n = new SpeechSynthesisUtterance(s);
  return n.rate = a.default.speechRate, n
}

function i(e, t) {
  n && (e.voice = t, speechSynthesis.speak(e))
}

function r() {
  n && speechSynthesis.cancel()
}