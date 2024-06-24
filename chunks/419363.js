n.d(t, {
  M9: function() {
    return r
  },
  Zh: function() {
    return i
  },
  e6: function() {
    return a
  },
  iq: function() {
    return l
  }
}), n(757143);
var s = n(441729);
let i = null != window.speechSynthesis;

function a(e, t) {
  let n = e.replace(/(https?:\/\/[^\s]+)/g, e => {
    let t = e.match(/^https?:\/\/(?:www\.)?([^/?#]+)(?:[/?#]|$)/i);
    return null != t ? t[1] : ""
  });
  null != t && n.length > t && (n = (n = n.substring(0, t)).substring(0, Math.min(n.length, n.lastIndexOf(" "))));
  let i = new SpeechSynthesisUtterance(n);
  return i.rate = s.Z.speechRate, i
}

function l(e, t) {
  i && (e.voice = t, speechSynthesis.speak(e))
}

function r() {
  i && speechSynthesis.cancel()
}