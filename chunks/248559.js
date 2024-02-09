"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
}), s("222007");
var n = s("884691"),
  l = () => {
    let [e, t] = (0, n.useState)(null);
    return (0, n.useEffect)(() => {
      var e;
      (null === (e = window) || void 0 === e ? void 0 : e.EyeDropper) != null && t(new window.EyeDropper)
    }, []), e
  }