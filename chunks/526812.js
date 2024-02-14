"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007");
var l = n("446674"),
  a = n("913144");
let s = new Set;
class i extends l.default.PersistedStore {
  initialize(e) {
    null != e && (s = new Set(e))
  }
  hasHidden(e) {
    return s.has(e)
  }
  getState() {
    return s
  }
}
i.displayName = "ForumChannelAdminOnboardingGuideStore", i.persistKey = "ForumChannelAdminOnboardingGuideStore";
var r = new i(a.default, {
  ADMIN_ONBOARDING_GUIDE_HIDE: function(e) {
    let {
      channelId: t,
      hide: n
    } = e;
    n ? s.add(t) : s.delete(t)
  }
})