"use strict";
a.r(t), a.d(t, {
  useCanSeeSafetyEducationBlockMuteCoachmark: function() {
    return u
  },
  useSafetyEducationAATriggerPoint: function() {
    return d
  }
});
var n = a("399606"),
  s = a("650598"),
  l = a("941129"),
  i = a("594174"),
  r = a("51144"),
  o = a("335865");
let u = () => {
    let e = (0, l.useIsSafetyConsumerEducationBlockMuteEnabled)(),
      t = (0, n.useStateFromStores)([i.default], () => i.default.getCurrentUser()),
      a = (0, o.useUserIsInLargeGuilds)();
    return e && !(0, r.isNewUser)(t) && a
  },
  d = () => (0, s.useIsSafetyConsumerEducationAAEnabled)()