var i, s = n(442837),
  l = n(570140),
  a = n(267642),
  r = n(981631);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = {};
c = {
  lastDismissedGracePeriods: {},
  isVisible: {}
};
class u extends(i = s.ZP.PersistedStore) {
  initialize(e) {
    null != e && (c = e)
  }
  getLastDismissedGracePeriodForGuild(e) {
    return null != c.lastDismissedGracePeriods[e] ? c.lastDismissedGracePeriods[e] : null
  }
  isVisible(e) {
    return null != e && null != c.isVisible[e] && c.isVisible[e]
  }
  getState() {
    return c
  }
}
o(u, "displayName", "GuildBoostingGracePeriodNoticeStore"), o(u, "persistKey", "PremiumGuildGracePeriodNoticeStore"), o(u, "migrations", [e => ({
  ...e,
  lastDismissedGracePeriods: null != e ? {
    ...e.lastDismissedGracePeriods
  } : {},
  isVisible: {}
})]), t.Z = new u(l.Z, {
  GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      appliedBoosts: n
    } = e, i = null != c.lastDismissedGracePeriods[t] ? c.lastDismissedGracePeriods[t] : null, s = null != i && Date.now() - i <= r.Dge, l = null != n && !s && (0, a.Vx)(n, t);
    c = {
      ...c,
      isVisible: {
        ...c.isVisible,
        [t]: l
      }
    }
  },
  BOOSTED_GUILD_GRACE_PERIOD_NOTICE_DISMISS: function(e) {
    let t = e.guildId;
    c = {
      ...c,
      lastDismissedGracePeriods: {
        ...c.lastDismissedGracePeriods,
        [t]: Date.now()
      },
      isVisible: {
        ...c.isVisible,
        [t]: !1
      }
    }
  }
})