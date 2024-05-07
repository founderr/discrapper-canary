"use strict";
n.r(t), n.d(t, {
  useClanPrepilotExperimentForGuild: function() {
    return p
  },
  useGuildsEligibleForClanConversion: function() {
    return h
  }
}), n("47120");
var l = n("470079"),
  a = n("392711"),
  s = n.n(a),
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

function h() {
  return (0, i.useStateFromStoresArray)([o.default, u.default], () => s()(o.default.getGuilds()).values().filter(e => f(e, [u.default])).value())
}

function p(e, t) {
  let n = (0, i.useStateFromStores)([u.default], () => e.find(e => f(e, [u.default]))),
    {
      enableClanCreation: a,
      defaultGameId: s
    } = (0, r.useClanPrepilotExperiment)(n, t);
  return l.useMemo(() => ({
    enableClanCreation: a,
    defaultGameId: s
  }), [s, a])
}