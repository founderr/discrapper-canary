"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007");
var l = n("446674"),
  a = n("913144");
let s = {};
class i extends l.default.PersistedStore {
  initialize(e) {
    for (let t in e) {
      let n = e[t];
      s[t] = new Set(n)
    }
  }
  hasViewedPrompt(e, t) {
    let n = s[t];
    return null != n && (!!n.has(e) || !1)
  }
  getState() {
    return s
  }
}
i.displayName = "GuildPromptsStore", i.persistKey = "GuildPromptsStore";
var r = new i(a.default, {
  GUILD_PROMPT_VIEWED: function(e) {
    let {
      prompt: t,
      guildId: n
    } = e, l = s[n];
    return null == l ? (s[n] = new Set, s[n].add(t), !0) : !l.has(t) && (l.add(t), !0)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    return null != s[t.id] && !t.unavailable && (delete s[t.id], !0)
  }
})