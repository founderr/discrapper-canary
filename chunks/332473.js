"use strict";
n.r(t), n.d(t, {
  isEligibleForPomelo: function() {
    return i
  },
  useIsEligibleForPomelo: function() {
    return r
  }
});
var s = n("399606"),
  l = n("594174"),
  a = n("918505");
let i = () => o(l.default.getCurrentUser(), (0, a.getPomeloEligibility)()),
  r = () => o((0, s.useStateFromStores)([l.default], () => l.default.getCurrentUser()), (0, a.usePomeloEligibility)());

function o(e, t) {
  return !(null == e || e.isPomelo()) && !!e.hasVerifiedEmailOrPhone() && !!t && !0
}