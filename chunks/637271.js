var l, i = n(442837),
  s = n(570140),
  a = n(592125),
  r = n(176505);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = {},
  u = {};
class d extends(l = i.ZP.PersistedStore) {
  initialize(e) {
    var t;
    c = null !== (t = null == e ? void 0 : e.selectedResourceChannelIdByGuildId) && void 0 !== t ? t : {}
  }
  getState() {
    return {
      selectedResourceChannelIdByGuildId: c
    }
  }
  getSelectedResourceChannelId(e) {
    return null == e ? null : c[e]
  }
  getHomeNavigationChannelId(e) {
    var t;
    return null == e ? null : null !== (t = c[e]) && void 0 !== t ? t : u[e]
  }
}
o(d, "displayName", "GuildOnboardingHomeNavigationStore"), o(d, "persistKey", "GuildOnboardingHomeNavigationStore"), t.Z = new d(s.Z, {
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t,
      guildId: n
    } = e;
    if (null == n || t === r.oC.GUILD_HOME) return;
    let l = a.Z.getChannel(t),
      i = c[n],
      s = u[n];
    if (!((null == l ? void 0 : l.isThread()) && (null == l ? void 0 : l.parent_id) != null && [s, i].includes(null == l ? void 0 : l.parent_id))) t !== i && delete c[n], t !== s && delete u[n]
  },
  SELECT_HOME_RESOURCE_CHANNEL: function(e) {
    let {
      channelId: t,
      guildId: n
    } = e;
    null == t ? delete u[n] : c[n] = t, delete u[n]
  },
  SELECT_NEW_MEMBER_ACTION_CHANNEL: function(e) {
    let {
      channelId: t,
      guildId: n
    } = e;
    delete c[n], u[n] = t
  }
})