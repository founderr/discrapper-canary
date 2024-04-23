"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("47120");
var s = n("838085"),
  l = n("73346");

function a(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    [n, a] = (0, s.default)();
  return [n, (null == e ? void 0 : e.application_id) != null && null != a ? (0, l.getAssetURL)(e.application_id, e, a, t ? void 0 : "webp") : void 0]
}