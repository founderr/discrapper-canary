"use strict";
n.r(t), n.d(t, {
  newClanProgress: function() {
    return f
  }
}), n("47120");
var a, s = n("442837"),
  l = n("570140"),
  i = n("227120"),
  r = n("308083");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let u = {},
  d = !1,
  c = {};

function f() {
  return {
    selectedGames: new Map,
    playstyle: r.ClanPlaystyles.NONE,
    interests: new Set,
    description: "",
    tag: "",
    primetime: [{
      day: void 0,
      time: i.ExtendedTimeOptions.MORNING
    }],
    currentStep: r.ClanSetupSteps.GAMES
  }
}
class E extends(a = s.default.PersistedStore) {
  initialize(e) {
    if (null != e)
      for (let n in e.progressByGuild) {
        var t;
        u[n] = (t = e.progressByGuild[n], {
          selectedGames: new Map(Object.entries(t.selectedGames)),
          playstyle: t.playstyle,
          interests: new Set(t.interests),
          description: t.description,
          tag: t.tag,
          primetime: t.primetime,
          currentStep: t.currentStep
        })
      }
  }
  getState() {
    let e = {};
    for (let n in u) {
      var t;
      e[n] = {
        selectedGames: Object.fromEntries((t = u[n]).selectedGames.entries()),
        playstyle: t.playstyle,
        interests: Array.from(t.interests),
        description: t.description,
        tag: t.tag,
        primetime: t.primetime,
        currentStep: t.currentStep
      }
    }
    return {
      progressByGuild: e
    }
  }
  getStateForGuild(e) {
    return {
      progress: u[e],
      errors: c[e],
      submitting: d
    }
  }
}
o(E, "displayName", "ClanSetupStore"), o(E, "persistKey", "ClanSetupStore"), t.default = new E(l.default, {
  CLAN_SETUP_UPDATE: function(e) {
    let {
      guildId: t,
      updates: n
    } = e, a = null != u[t] ? u[t] : f();
    if (u[t] = {
        ...a,
        ...n
      }, null != c[t])
      for (let e in n) delete c[t][e]
  },
  CLAN_SETUP_SUBMIT: function(e) {
    let {
      guildId: t
    } = e;
    d = !0, delete c[t]
  },
  CLAN_SETUP_SUCCESS: function(e) {
    let {
      guildId: t
    } = e;
    d = !1, delete u[t], delete c[t]
  },
  CLAN_SETUP_ERROR: function(e) {
    let {
      guildId: t,
      error: n
    } = e;
    d = !1, c[t] = {
      selectedGames: n.getFirstFieldErrorMessage("game_application_ids"),
      playstyle: n.getFirstFieldErrorMessage("play_style"),
      description: n.getFirstFieldErrorMessage("description"),
      interests: n.getFirstFieldErrorMessage("search_terms"),
      tag: n.getFirstFieldErrorMessage("tag"),
      primetime: n.getFirstFieldErrorMessage("prime_time")
    }
  }
})