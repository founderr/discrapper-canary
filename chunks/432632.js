"use strict";
n.r(t), n.d(t, {
  useDefaultGameIdForClan: function() {
    return o
  }
});
var a = n("442837"),
  r = n("430824"),
  s = n("963202"),
  i = n("308083"),
  l = n("981631");

function o(e, t) {
  var n, o;
  let c = (0, a.useStateFromStores)([r.default], () => r.default.getGuild(e));
  let d = null != (o = c) && o.hasFeature(l.GuildFeatures.CLAN) ? o.hasFeature(l.GuildFeatures.CLAN_PILOT_VALORANT) ? i.VALORANT_ID : o.hasFeature(l.GuildFeatures.CLAN_PILOT_GENSHIN) ? i.GENSHIN_ID : null : null,
    {
      defaultGameId: u
    } = (0, s.useClanPrepilotExperimentForGuild)({
      guild: c,
      location: t,
      includeConverted: !1
    });
  return null !== (n = null != d ? d : u) && void 0 !== n ? n : i.GENSHIN_ID
}