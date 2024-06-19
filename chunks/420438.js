n(47120);
var l, i = n(442837),
  s = n(570140);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let r = {};
class o extends(l = i.ZP.PersistedStore) {
  initialize(e) {
    for (let t in e) {
      let n = e[t];
      r[t] = new Set(n)
    }
  }
  hasViewedPrompt(e, t) {
    let n = r[t];
    return null != n && (!!n.has(e) || !1)
  }
  getState() {
    return r
  }
}
a(o, "displayName", "GuildPromptsStore"), a(o, "persistKey", "GuildPromptsStore"), t.Z = new o(s.Z, {
  GUILD_PROMPT_VIEWED: function(e) {
    let {
      prompt: t,
      guildId: n
    } = e, l = r[n];
    return null == l ? (r[n] = new Set, r[n].add(t), !0) : !l.has(t) && (l.add(t), !0)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    return null != r[t.id] && !t.unavailable && (delete r[t.id], !0)
  }
})