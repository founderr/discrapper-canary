"use strict";
a.r(t), a.d(t, {
  useGuildsEligibleForClanConversion: function() {
    return c
  }
}), a("47120");
var n = a("392711"),
  s = a.n(n),
  l = a("442837"),
  i = a("134726"),
  r = a("430824"),
  o = a("496675"),
  u = a("981631"),
  d = a("231338");

function c() {
  return (0, l.useStateFromStoresArray)([o.default, r.default], () => s()(r.default.getGuilds()).values().filter(e => !e.hasFeature(u.GuildFeatures.CLAN) && o.default.can(d.Permissions.ADMINISTRATOR, e) && i.ClanGuildExperiment.getCurrentConfig({
    guildId: e.id,
    location: "useEligibleGuildsForClans"
  }).enableClanCreation).value())
}