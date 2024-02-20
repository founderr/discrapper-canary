"use strict";
n.r(t), n.d(t, {
  getChannelIdForGuildTransition: function() {
    return f
  },
  transitionToGuild: function() {
    return E
  }
});
var i = n("650033"),
  r = n("471706"),
  s = n("290886"),
  a = n("21121"),
  o = n("934306"),
  l = n("42203"),
  u = n("923959"),
  c = n("18494"),
  d = n("393414"),
  p = n("49111"),
  h = n("724210");

function f(e) {
  var t;
  let n = c.default.getChannelId(e),
    i = null === (t = u.default.getDefaultChannel(e)) || void 0 === t ? void 0 : t.id;
  if (n === h.StaticChannelRoute.GUILD_ONBOARDING && !r.default.shouldShowOnboarding(e) || n === h.StaticChannelRoute.GUILD_HOME && !(0, s.canSeeOnboardingHome)(e)) return i;
  let a = l.default.getChannel(n);
  return null == a || a.isGuildVocal() ? i : n
}

function E(e, t) {
  let n = !(0, a.isInMainTabsExperiment)() || (0, o.shouldHandleNewPanelsRoute)(e) || i.default.get("navigate_to_last_channel") ? f(e) : void 0;
  (0, d.transitionTo)(p.Routes.CHANNEL(e, n), {
    navigationReplace: (0, o.shouldHandleNewPanelsRoute)(e) || i.default.get("navigate_to_last_channel"),
    ...t
  })
}