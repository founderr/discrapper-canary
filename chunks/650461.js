"use strict";
n.r(t), n.d(t, {
  newClanProgress: function() {
    return d
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
let u = {};

function d() {
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
class c extends(a = s.default.PersistedStore) {
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
    return u[e]
  }
}
o(c, "displayName", "ClanSetupStore"), o(c, "persistKey", "ClanSetupStore"), t.default = new c(l.default, {
  CLAN_SETUP_UPDATE: function(e) {
    let {
      guildId: t,
      updates: n
    } = e, a = null != u[t] ? u[t] : d();
    u[t] = {
      ...a,
      ...n
    }
  },
  CLAN_SETUP_CLEAR: function(e) {
    let {
      guildId: t
    } = e;
    delete u[t]
  }
})