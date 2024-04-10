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
  var n, u, d, c, f;
  let E = (0, a.uniqWith)(null !== (n = t.primetime) && void 0 !== n ? n : [], a.isEqual),
    h = (0, r.formatTimesForServer)(E);
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
        search_terms: Array.from(null !== (d = t.interests) && void 0 !== d ? d : new Set),
        game_application_ids: Array.from((null !== (c = t.selectedGames) && void 0 !== c ? c : new Map).keys()),
        prime_time: h,
        verification_form: {
          form_fields: null !== (f = null === (u = t.verificationForm) || void 0 === u ? void 0 : u.formFields) && void 0 !== f ? f : []
        }
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