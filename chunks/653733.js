"use strict";
n.r(t), n.d(t, {
  isGuildEligibleForRecentlyOnlineExperiment: function() {
    return a
  }
});
var i = n("358085"),
  r = n("280234"),
  s = n("480384");

function a(e) {
  if (!(0, i.isDesktop)()) return !1;
  let {
    isGuildMemberListEnabled: t
  } = r.default.getCurrentConfig({
    location: "guild-subscriptions-store"
  }, {
    autoTrackExposure: !1
  });
  return !!t && s.default.getPriorityGuilds().includes(e)
}