"use strict";
a.r(t), a.d(t, {
  useDefaultGameIdForClan: function() {
    return o
  }
});
var n = a("442837"),
  r = a("430824"),
  i = a("963202"),
  s = a("308083"),
  l = a("981631");

function o(e, t) {
  var a, o;
  let d = (0, n.useStateFromStores)([r.default], () => r.default.getGuild(e));
  let c = null != (o = d) && o.hasFeature(l.GuildFeatures.CLAN) ? o.hasFeature(l.GuildFeatures.CLAN_PILOT_VALORANT) ? s.VALORANT_ID : o.hasFeature(l.GuildFeatures.CLAN_PILOT_GENSHIN) ? s.GENSHIN_ID : null : null,
    {
      defaultGameId: u
    } = (0, i.useClanPrepilotExperiment)(d, t);
  return null !== (a = null != c ? c : u) && void 0 !== a ? a : s.GENSHIN_ID
}