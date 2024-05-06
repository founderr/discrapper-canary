"use strict";
n.r(t), n.d(t, {
  useGuildsEligibleForClanConversion: function() {
    return E
  },
  useIsGuildEligibleForClanConversion: function() {
    return h
  }
}), n("47120");
var a = n("470079"),
  s = n("392711"),
  l = n.n(s),
  i = n("442837"),
  r = n("963202"),
  o = n("430824"),
  u = n("496675"),
  d = n("981631"),
  c = n("231338");

function f(e) {
  let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [u.default];
  return !e.hasFeature(d.GuildFeatures.CLAN) && t.can(c.Permissions.ADMINISTRATOR, e) && (0, r.isClanPrepilotExperimentEnabled)(e, "useEligibleGuildsForClans")
}

function E() {
  return (0, i.useStateFromStoresArray)([o.default, u.default], () => l()(o.default.getGuilds()).values().filter(e => f(e, [u.default])).value())
}

function h(e) {
  let t = (0, i.useStateFromStores)([u.default], () => f(e, [u.default])),
    {
      enableClanCreation: n,
      defaultGameId: s
    } = (0, r.useClanPrepilotExperiment)(e, "useEligibleGuildsForClans");
  return a.useMemo(() => t ? {
    enableClanCreation: n,
    defaultGameId: s
  } : {
    enableClanCreation: !1,
    defaultGameId: null
  }, [s, n, t])
}