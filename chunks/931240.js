"use strict";
n.r(t), n.d(t, {
  convertGuildToClan: function() {
    return i
  },
  updateClanSettings: function() {
    return r
  }
}), n("47120");
var a = n("544891"),
  s = n("570140"),
  l = n("981631");
async function i(e, t) {
  var n, s;
  await a.HTTP.put({
    url: l.Endpoints.GUILD_CONVERT_TO_CLAN(e),
    body: {
      clan_tag: t.tag,
      description: t.description,
      play_style: t.playstyle,
      search_terms: Array.from(null !== (n = t.interests) && void 0 !== n ? n : new Set),
      game_application_ids: Array.from(null !== (s = t.selectedGames) && void 0 !== s ? s : new Set)
    }
  })
}

function r(e, t) {
  s.default.dispatch({
    type: "CLAN_SETUP_UPDATE",
    guildId: e,
    updates: t
  })
}