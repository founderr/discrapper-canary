"use strict";
n.r(t), n.d(t, {
  usePerksDemo: function() {
    return a
  }
});
var l = n("442837"),
  r = n("114064"),
  s = n("485731");

function a(e) {
  var t, n;
  let {
    demos: a,
    activated: i
  } = (0, l.useStateFromStoresObject)([r.default], () => ({
    demos: r.default.getPerksDemos(),
    activated: r.default.getActivated()
  })), u = (0, s.usePerksDemosUIStore)();
  return {
    available: null !== (t = null == a ? void 0 : a[e]) && void 0 !== t && t,
    activated: null !== (n = i[e]) && void 0 !== n && n,
    hqStreamingState: u
  }
}