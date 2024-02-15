"use strict";
l.r(t), l.d(t, {
  default: function() {
    return n
  }
});
var a = l("819068");

function n(e, t) {
  if (__OVERLAY__) {
    let e = t.getGame(),
      l = (0, a.getPID)();
    return null == e || null == l ? null : {
      id: e.id,
      pid: l,
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