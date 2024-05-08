"use strict";
n.r(t), n.d(t, {
  useGuildsEligibleForClanConversion: function() {
    return d
  },
  useIsGuildEligibleForClanConversion: function() {
    return c
  }
}), n("47120");
var l = n("470079"),
  a = n("442837"),
  s = n("963202"),
  i = n("430824"),
  r = n("496675"),
  o = n("981631"),
  u = n("231338");

function d(e) {
  let t = (0, a.useStateFromStoresArray)([i.default], () => Object.values(i.default.getGuilds())),
    {
      guilds: n,
      enableClanCreation: l
    } = (0, s.useAnyClanPrepilotExperiment)(t, e);
  return (0, a.useStateFromStoresArray)([r.default], () => l ? n.filter(e => (function(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default];
    return !e.hasFeature(o.GuildFeatures.CLAN) && t.can(u.Permissions.ADMINISTRATOR, e)
  })(e, [r.default])) : [])
}

function c(e, t) {
  let n = d(t);
  return l.useMemo(() => new Set(n.map(e => e.id)), [n]).has(e)
}