"use strict";
n.r(l), n.d(l, {
  default: function() {
    return t
  }
}), n("222007");
var r = n("884691"),
  t = () => {
    let [e, l] = (0, r.useState)(null);
    return (0, r.useEffect)(() => {
      var e;
      (null === (e = window) || void 0 === e ? void 0 : e.EyeDropper) != null && l(new window.EyeDropper)
    }, []), e
  }