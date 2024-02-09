"use strict";
let s;
n.r(t), n.d(t, {
  createSoundForPack: function() {
    return a
  },
  createSound: function() {
    return i
  },
  playSound: function() {
    return c
  }
});
var u = n("870696"),
  o = n("319291"),
  r = n("102985");

function a(e, t) {
  var n;
  let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
    u = (0, o.default)(t);
  return i(null !== (n = u[e]) && void 0 !== n ? n : e, e, s)
}

function i(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
  return new s(e, t, n)
}

function c(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
    s = arguments.length > 2 ? arguments[2] : void 0;
  if (r.default.disableSounds) return;
  let a = (0, o.default)(u.default.getSoundpack()),
    c = i(null !== (t = a[e]) && void 0 !== t ? t : e, e, n);
  return null != s ? c.playWithListener().then(e => {
    e && s()
  }) : c.play(), c
}
s = n("895737").WebAudioSound