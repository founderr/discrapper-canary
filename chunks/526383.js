"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("47120");
var a = n("442837"),
  s = n("430824"),
  i = n("981631");

function l() {
  return (0, a.useStateFromStores)([s.default], () => Object.entries(s.default.getGuilds()).filter(e => {
    let [t, n] = e;
    return n.hasFeature(i.GuildFeatures.HUB)
  }).map(e => {
    let [t, n] = e;
    return n
  }))
}