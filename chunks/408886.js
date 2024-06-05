"use strict";
r.r(t), r("47120");
var s = r("470079");
t.default = () => {
  let [e, t] = (0, s.useState)(null);
  return (0, s.useEffect)(() => {
    var e;
    (null === (e = window) || void 0 === e ? void 0 : e.EyeDropper) != null && t(new window.EyeDropper)
  }, []), e
}