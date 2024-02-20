"use strict";
n.r(t), n.d(t, {
  getChannelIdForGuildTransition: function() {
    return p
  },
  transitionToGuild: function() {
    return h
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
  f = n("49111"),
  E = n("724210");

function p(e) {
  var t;
  let n = c.default.getChannelId(e),
    i = null === (t = u.default.getDefaultChannel(e)) || void 0 === t ? void 0 : t.id;
  if (n === E.StaticChannelRoute.GUILD_ONBOARDING && !r.default.shouldShowOnboarding(e) || n === E.StaticChannelRoute.GUILD_HOME && !(0, s.canSeeOnboardingHome)(e)) return i;
  let a = l.default.getChannel(n);
  return null == a || a.isGuildVocal() ? i : n
}

function h(e, t) {
  let n = !(0, a.isInMainTabsExperiment)() || (0, o.shouldHandleNewPanelsRoute)(e) || i.default.get("navigate_to_last_channel") ? p(e) : void 0;
  (0, d.transitionTo)(f.Routes.CHANNEL(e, n), {
    navigationReplace: (0, o.shouldHandleNewPanelsRoute)(e) || i.default.get("navigate_to_last_channel"),
    ...t
  })
}