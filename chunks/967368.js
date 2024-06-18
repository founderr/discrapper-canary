"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(65154);
let _ = u.dX;
class c extends(o = a.ZP.Store) {
  get bitrate() {
    return _
  }
}
s = "BitRateStore", (r = "displayName") in(i = c) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new c(l.Z, {
  SET_CHANNEL_BITRATE: function(e) {
    _ = e.bitrate
  }
})