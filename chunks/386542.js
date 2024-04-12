"use strict";
l.r(t), l.d(t, {
  usePerksDemo: function() {
    return n
  }
});
var a = l("442837"),
  s = l("114064");

function n(e) {
  var t, l;
  let {
    demos: n,
    activated: i
  } = (0, a.useStateFromStoresObject)([s.default], () => ({
    demos: s.default.getPerksDemos(),
    activated: s.default.getActivated()
  }));
  return {
    available: null !== (t = null == n ? void 0 : n[e]) && void 0 !== t && t,
    activated: null !== (l = i[e]) && void 0 !== l && l
  }
}