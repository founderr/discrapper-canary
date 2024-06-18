"use strict";
var i, s, l, o, a = n(442837),
  r = n(570140);
let c = !1,
  d = !1;
class u extends(o = a.ZP.Store) {
  get keepOpen() {
    return d
  }
  get enabled() {
    return c
  }
}
l = "SoundboardOverlayStore", (s = "displayName") in(i = u) ? Object.defineProperty(i, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[s] = l, t.Z = new u(r.Z, {
  SOUNDBOARD_SET_OVERLAY_ENABLED: function(e) {
    if (c = e.enabled, e.enabled) {
      var t;
      d = null !== (t = e.keepOpen) && void 0 !== t && t
    }
  }
})