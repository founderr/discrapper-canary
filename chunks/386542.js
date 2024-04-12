"use strict";
l.r(t), l.d(t, {
  usePerksDemo: function() {
    return i
  }
});
var a = l("442837"),
  s = l("114064"),
  n = l("485731");

function i(e) {
  var t, l;
  let {
    demos: i,
    activated: r
  } = (0, a.useStateFromStoresObject)([s.default], () => ({
    demos: s.default.getPerksDemos(),
    activated: s.default.getActivated()
  })), u = (0, n.usePerksDemosUIStore)();
  return {
    available: null !== (t = null == i ? void 0 : i[e]) && void 0 !== t && t,
    activated: null !== (l = r[e]) && void 0 !== l && l,
    hqStreamingState: u
  }
}