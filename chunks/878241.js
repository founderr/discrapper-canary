"use strict";
n.r(t), n.d(t, {
  useGuildsEligibleForClan: function() {
    return u
  },
  useIsGuildEligibleForClan: function() {
    return d
  }
}), n("47120");
var l = n("470079"),
  a = n("442837"),
  s = n("963202"),
  i = n("430824"),
  r = n("496675");
n("981631");
var o = n("231338");

function u(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = (0, a.useStateFromStoresArray)([i.default], () => Object.values(i.default.getGuilds())),
    {
      guilds: l,
      enableClanCreation: u
    } = (0, s.useAnyClanPrepilotExperiment)(n, e, t);
  return (0, a.useStateFromStoresArray)([r.default], () => u ? l.filter(e => r.default.can(o.Permissions.ADMINISTRATOR, e)) : [])
}

function d(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    a = u(t, n);
  return l.useMemo(() => new Set(a.map(e => e.id)), [a]).has(e)
}