"use strict";
n.r(t), n.d(t, {
  createNonce: function() {
    return a
  }
});
var i = n("709054");
let r = 0,
  s = new i.SnowflakeSequence;

function a() {
  let e = Date.now();
  return r !== e && (s.reset(), r = e), i.default.fromTimestampWithSequence(e, s)
}