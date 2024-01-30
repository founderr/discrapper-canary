"use strict";
let s;
n.r(t), n.d(t, {
  createSoundForPack: function() {
    return r
  },
  createSound: function() {
    return a
  },
  playSound: function() {
    return c
  }
});
var u = n("870696"),
  o = n("319291"),
  i = n("102985");

function r(e, t) {
  var n;
  let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
    u = (0, o.default)(t);
  return a(null !== (n = u[e]) && void 0 !== n ? n : e, e, s)
}

function a(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
  return new s(e, t, n)
}

function c(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
    s = arguments.length > 2 ? arguments[2] : void 0;
  if (i.default.disableSounds) return;
  let r = (0, o.default)(u.default.getSoundpack()),
    c = a(null !== (t = r[e]) && void 0 !== t ? t : e, e, n);
  return null != s ? c.playWithListener().then(e => {
    e && s()
  }) : c.play(), c
}
s = n("895737").WebAudioSound