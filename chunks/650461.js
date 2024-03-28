"use strict";
n.r(t), n.d(t, {
  newClanProgress: function() {
    return c
  }
}), n("47120");
var a, s, l, i, r = n("442837"),
  o = n("570140"),
  u = n("308083");
let d = {};

function c() {
  return {
    selectedGames: new Set,
    playstyle: u.ClanPlaystyles.NONE,
    interests: new Set,
    description: "",
    tag: ""
  }
}
class f extends(a = r.default.Store) {
  getState(e) {
    return d[e]
  }
}
i = "ClanSetupStore", (l = "displayName") in(s = f) ? Object.defineProperty(s, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = i, t.default = new f(o.default, {
  CLAN_SETUP_UPDATE: function(e) {
    let {
      guildId: t,
      updates: n
    } = e, a = null != d[t] ? d[t] : c();
    d[t] = {
      ...a,
      ...n
    }
  },
  CLAN_SETUP_CLEAR: function(e) {
    let {
      guildId: t
    } = e;
    delete d[t]
  }
})