"use strict";
a.r(t), a.d(t, {
  useCanSeeSafetyEducationReportingCoachmark: function() {
    return o
  }
});
var n = a("399606"),
  s = a("826004"),
  l = a("594174"),
  i = a("51144"),
  r = a("335865");
let o = () => {
  let e = (0, s.useIsSafetyConsumerEducationReportingEnabled)(),
    t = (0, n.useStateFromStores)([l.default], () => l.default.getCurrentUser()),
    a = (0, r.useUserIsInLargeGuilds)();
  return e && !(0, i.isNewUser)(t) && a
}