"use strict";
n.r(t), n.d(t, {
  getGuildEligibilityForRecentlyOnlineExperiment: function() {
    return a
  }
});
var i = n("358085"),
  r = n("280234"),
  s = n("480384");

function a(e) {
  if (!(0, i.isDesktop)()) return {
    isRecentlyOnlineUIEnabled: !1,
    shouldPrioritizeSubscription: !1
  };
  let {
    allowPrioritySubscriptions: t,
    isRecentlyOnlineEnabled: n
  } = r.default.getCurrentConfig({
    location: "guild-subscriptions-store"
  }, {
    autoTrackExposure: !1
  });
  if (!n && !t) return {
    isRecentlyOnlineUIEnabled: !1,
    shouldPrioritizeSubscription: !1
  };
  let a = s.default.getPriorityGuilds().includes(e);
  return {
    isRecentlyOnlineUIEnabled: a && n,
    shouldPrioritizeSubscription: a && t
  }
}