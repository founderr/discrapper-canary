"use strict";
s.r(t), s.d(t, {
  useDefaultGameIdForClan: function() {
    return o
  }
});
var a = s("442837"),
  l = s("430824"),
  n = s("963202"),
  i = s("308083"),
  r = s("981631");

function o(e, t) {
  var s, o;
  let d = null != (o = (0, a.useStateFromStores)([l.default], () => l.default.getGuild(e))) && o.hasFeature(r.GuildFeatures.CLAN) ? o.hasFeature(r.GuildFeatures.CLAN_PILOT_VALORANT) ? i.VALORANT_ID : o.hasFeature(r.GuildFeatures.CLAN_PILOT_GENSHIN) ? i.GENSHIN_ID : null : null,
    u = (0, n.useClanPrepilotExperimentDefaultGameId)(t);
  return null !== (s = null != d ? d : u) && void 0 !== s ? s : i.GENSHIN_ID
}