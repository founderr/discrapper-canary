"use strict";
a.r(t), a.d(t, {
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
    return s
  }
}), a("757143");
var n = a("441729");
let s = null != window.speechSynthesis;

function l(e, t) {
  let a = e.replace(/(https?:\/\/[^\s]+)/g, e => {
    let t = e.match(/^https?:\/\/(?:www\.)?([^/?#]+)(?:[/?#]|$)/i);
    return null != t ? t[1] : ""
  });
  null != t && a.length > t && (a = (a = a.substring(0, t)).substring(0, Math.min(a.length, a.lastIndexOf(" "))));
  let s = new SpeechSynthesisUtterance(a);
  return s.rate = n.default.speechRate, s
}

function i(e, t) {
  s && (e.voice = t, speechSynthesis.speak(e))
}

function r() {
  s && speechSynthesis.cancel()
}