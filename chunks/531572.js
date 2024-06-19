var l, i = n(442837),
  s = n(570140);

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let a = {};
class o extends(l = i.ZP.PersistedStore) {
  initialize(e) {
    null != e && (a = e)
  }
  getState() {
    return a
  }
  getCountForGuild(e) {
    return a[e]
  }
}
r(o, "displayName", "GuildBoostingProgressBarPersistedStore"), r(o, "persistKey", "PremiumGuildProgressBarPersistedStore"), t.Z = new o(s.Z, {
  APPLIED_GUILD_BOOST_COUNT_UPDATE: e => {
    let {
      guildId: t,
      premiumCount: n
    } = e;
    a = {
      ...a,
      [t]: n
    }
  }
})