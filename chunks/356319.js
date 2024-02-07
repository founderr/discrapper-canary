"use strict";
n.r(t), n.d(t, {
  useMenuTriggerState: function() {
    return a
  }
}), n("222007");
var r = n("561291"),
  o = n("884691");

function a(e) {
  let t = (0, r.useOverlayTriggerState)(e),
    [n, a] = (0, o.useState)(null),
    [i, s] = (0, o.useState)([]),
    c = () => {
      s([]), t.close()
    };
  return {
    focusStrategy: n,
    ...t,
    open() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      a(e), t.open()
    },
    toggle() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      a(e), t.toggle()
    },
    close() {
      c()
    },
    UNSTABLE_expandedKeysStack: i,
    UNSTABLE_openSubmenu: (e, t) => {
      s(n => t > n.length ? n : [...n.slice(0, t), e])
    },
    UNSTABLE_closeSubmenu: (e, t) => {
      s(n => n[t] === e ? n.slice(0, t) : n)
    }
  }
}