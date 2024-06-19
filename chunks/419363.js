n.d(t, {
  M9: function() {
    return r
  },
  Zh: function() {
    return a
  },
  e6: function() {
    return i
  },
  iq: function() {
    return l
  }
}), n(757143);
var s = n(441729);
let a = null != window.speechSynthesis;

function i(e, t) {
  let n = e.replace(/(https?:\/\/[^\s]+)/g, e => {
    let t = e.match(/^https?:\/\/(?:www\.)?([^/?#]+)(?:[/?#]|$)/i);
    return null != t ? t[1] : ""
  });
  null != t && n.length > t && (n = (n = n.substring(0, t)).substring(0, Math.min(n.length, n.lastIndexOf(" "))));
  let a = new SpeechSynthesisUtterance(n);
  return a.rate = s.Z.speechRate, a
}

function l(e, t) {
  a && (e.voice = t, speechSynthesis.speak(e))
}

function r() {
  a && speechSynthesis.cancel()
}