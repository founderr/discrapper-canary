"use strict";
n.r(t), n.d(t, {
  convertGuildToClan: function() {
    return o
  },
  updateClanSettings: function() {
    return u
  }
}), n("47120");
var a = n("392711"),
  s = n("544891"),
  l = n("570140"),
  i = n("924801"),
  r = n("981631");
async function o(e, t) {
  var n, o, u;
  let d = (0, a.uniqWith)(null !== (n = t.primetime) && void 0 !== n ? n : [], a.isEqual),
    c = (0, i.formatTimesForServer)(d);
  try {
    await s.HTTP.put({
        url: r.Endpoints.GUILD_CONVERT_TO_CLAN(e),
        body: {
          clan_tag: t.tag,
          description: t.description,
          play_style: t.playstyle,
          search_terms: Array.from(null !== (o = t.interests) && void 0 !== o ? o : new Set),
          game_application_ids: Array.from((null !== (u = t.selectedGames) && void 0 !== u ? u : new Map).keys()),
          prime_time: c
        }
      }),
      function(e) {
        l.default.dispatch({
          type: "CLAN_SETUP_CLEAR",
          guildId: e
        })
      }(e)
  } catch (e) {
    return e
  }
}

function u(e, t) {
  l.default.dispatch({
    type: "CLAN_SETUP_UPDATE",
    guildId: e,
    updates: t
  })
}