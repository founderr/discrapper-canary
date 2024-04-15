"use strict";
let l;
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var r = n("145597");

function a(e, t) {
  if (__OVERLAY__) {
    let e = t.getGame(),
      n = (0, r.getPID)();
    return null == e || null == n ? null : (null == l ? void 0 : l.id) === e.id && (null == l ? void 0 : l.pid) === n ? l : l = {
      id: e.id,
      pid: n,
      pidPath: [],
      nativeProcessObserverId: 0,
      hidden: !1,
      elevated: !1,
      name: e.name,
      lastFocused: 0,
      exePath: "",
      exeName: "",
      cmdLine: "",
      processName: "",
      distributor: null,
      windowHandle: null,
      fullscreenType: 0
    }
  }
  return e.getVisibleGame()
}