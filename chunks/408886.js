"use strict";
A.r(t), A("47120");
var a = A("470079");
t.default = () => {
  let [e, t] = (0, a.useState)(null);
  return (0, a.useEffect)(() => {
    var e;
    (null === (e = window) || void 0 === e ? void 0 : e.EyeDropper) != null && t(new window.EyeDropper)
  }, []), e
}