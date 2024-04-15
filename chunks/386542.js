"use strict";
n.r(t), n.d(t, {
  usePerksDemo: function() {
    return s
  }
});
var l = n("442837"),
  r = n("114064"),
  a = n("485731");

function s(e) {
  var t, n;
  let {
    demos: s,
    activated: i
  } = (0, l.useStateFromStoresObject)([r.default], () => ({
    demos: r.default.getPerksDemos(),
    activated: r.default.getActivated()
  })), u = (0, a.usePerksDemosUIStore)();
  return {
    available: null !== (t = null == s ? void 0 : s[e]) && void 0 !== t && t,
    activated: null !== (n = i[e]) && void 0 !== n && n,
    hqStreamingState: u
  }
}