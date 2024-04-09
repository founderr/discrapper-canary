"use strict";
n.r(t), n.d(t, {
  convertGuildToClan: function() {
    return u
  },
  updateClanSettings: function() {
    return d
  }
}), n("47120");
var a = n("392711"),
  s = n("544891"),
  l = n("570140"),
  i = n("479531"),
  r = n("924801"),
  o = n("981631");
async function u(e, t) {
  var n, u, d;
  let c = (0, a.uniqWith)(null !== (n = t.primetime) && void 0 !== n ? n : [], a.isEqual),
    f = (0, r.formatTimesForServer)(c);
  l.default.dispatch({
    type: "CLAN_SETUP_SUBMIT",
    guildId: e
  });
  try {
    await s.HTTP.put({
      url: o.Endpoints.GUILD_CONVERT_TO_CLAN(e),
      body: {
        tag: t.tag,
        description: t.description,
        play_style: t.playstyle,
        search_terms: Array.from(null !== (u = t.interests) && void 0 !== u ? u : new Set),
        game_application_ids: Array.from((null !== (d = t.selectedGames) && void 0 !== d ? d : new Map).keys()),
        prime_time: f
      }
    }), l.default.dispatch({
      type: "CLAN_SETUP_SUCCESS",
      guildId: e
    })
  } catch (t) {
    throw l.default.dispatch({
      type: "CLAN_SETUP_ERROR",
      guildId: e,
      error: new i.default(t)
    }), t
  }
}

function d(e, t) {
  l.default.dispatch({
    type: "CLAN_SETUP_UPDATE",
    guildId: e,
    updates: t
  })
}