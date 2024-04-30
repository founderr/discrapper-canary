"use strict";
a.r(t), a.d(t, {
  default: function() {
    return i
  }
}), a("47120");
var n = a("442837"),
  s = a("430824"),
  l = a("981631");

function i() {
  return (0, n.useStateFromStores)([s.default], () => Object.entries(s.default.getGuilds()).filter(e => {
    let [t, a] = e;
    return a.hasFeature(l.GuildFeatures.HUB)
  }).map(e => {
    let [t, a] = e;
    return a
  }))
}