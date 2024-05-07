"use strict";
n.r(t), n("47120");
var r = n("470079");
t.default = () => {
  let [e, t] = (0, r.useState)(null);
  return (0, r.useEffect)(() => {
    var e;
    (null === (e = window) || void 0 === e ? void 0 : e.EyeDropper) != null && t(new window.EyeDropper)
  }, []), e
}