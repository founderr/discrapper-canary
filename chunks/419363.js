s.d(t, {
  M9: function() {
    return l
  },
  Zh: function() {
    return a
  },
  e6: function() {
    return i
  },
  iq: function() {
    return r
  }
}), s(757143);
var n = s(441729);
let a = null != window.speechSynthesis;

function i(e, t) {
  let s = e.replace(/(https?:\/\/[^\s]+)/g, e => {
    let t = e.match(/^https?:\/\/(?:www\.)?([^/?#]+)(?:[/?#]|$)/i);
    return null != t ? t[1] : ""
  });
  null != t && s.length > t && (s = (s = s.substring(0, t)).substring(0, Math.min(s.length, s.lastIndexOf(" "))));
  let a = new SpeechSynthesisUtterance(s);
  return a.rate = n.Z.speechRate, a
}

function r(e, t) {
  a && (e.voice = t, speechSynthesis.speak(e))
}

function l() {
  a && speechSynthesis.cancel()
}