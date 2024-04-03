"use strict";
n.r(t), n.d(t, {
  newClanProgress: function() {
    return f
  }
}), n("47120");
var a, s, l, i, r = n("442837"),
  o = n("570140"),
  u = n("227120"),
  d = n("308083");
let c = {};

function f() {
  return {
    selectedGames: new Map,
    playstyle: d.ClanPlaystyles.NONE,
    interests: new Set,
    description: "",
    tag: "",
    primetime: [{
      day: void 0,
      time: u.ExtendedTimeOptions.MORNING
    }],
    currentStep: d.ClanSetupSteps.GAMES
  }
}
class E extends(a = r.default.Store) {
  getState(e) {
    return c[e]
  }
}
i = "ClanSetupStore", (l = "displayName") in(s = E) ? Object.defineProperty(s, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = i, t.default = new E(o.default, {
  CLAN_SETUP_UPDATE: function(e) {
    let {
      guildId: t,
      updates: n
    } = e, a = null != c[t] ? c[t] : f();
    c[t] = {
      ...a,
      ...n
    }
  },
  CLAN_SETUP_CLEAR: function(e) {
    let {
      guildId: t
    } = e;
    delete c[t]
  }
})