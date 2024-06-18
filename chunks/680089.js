"use strict";
n(47120);
var i, r = n(442837),
  s = n(570140),
  o = n(823379),
  a = n(592125),
  l = n(486472),
  u = n(984933),
  _ = n(981631);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let d = {},
  E = 0;

function I() {
  E += 1
}

function T(e) {
  if (null == d[e]) return !1;
  delete d[e]
}
class h extends(i = r.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(a.Z, l.Z), this.removeChangeListener(I), this.addChangeListener(I), d = null != e ? e : {}
  }
  getState() {
    return d
  }
  isCollapsed(e) {
    return null != e && "null" !== e && !!d[e] && d[e]
  }
  getCollapsedCategories() {
    return d
  }
  get version() {
    return E
  }
}
c(h, "displayName", "CategoryCollapseStore"), c(h, "persistKey", "collapsedCategories"), t.Z = new h(s.Z, {
  CONNECTION_OPEN: function(e) {
    for (let t of (!e.userGuildSettings.partial && (d = {}), e.userGuildSettings.entries))
      if (null != t.channel_overrides)
        for (let e of t.channel_overrides) e.collapsed ? d[e.channel_id] = !0 : delete d[e.channel_id]
  },
  USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
    let {
      userGuildSettings: t
    } = e, n = new Set(t.map(e => e.guild_id).filter(o.lm));
    for (let e in d) {
      let t = a.Z.getChannel(e);
      null != t && null != t.guild_id && n.has(t.guild_id) && delete d[t.id]
    }
    for (let e of t)
      for (let t of e.channel_overrides) t.collapsed && (d[t.channel_id] = !0)
  },
  CATEGORY_COLLAPSE: function(e) {
    let {
      id: t
    } = e;
    if (d[t]) return !1;
    d[t] = !0
  },
  CATEGORY_EXPAND: function(e) {
    let {
      id: t
    } = e;
    return T(t)
  },
  CATEGORY_COLLAPSE_ALL: function(e) {
    let {
      guildId: t
    } = e;
    u.ZP.getChannels(t)[_.d4z.GUILD_CATEGORY].forEach(e => {
      let {
        channel: t
      } = e;
      "null" !== t.id && (d[t.id] = !0)
    })
  },
  CATEGORY_EXPAND_ALL: function(e) {
    let {
      guildId: t
    } = e;
    u.ZP.getChannels(t)[_.d4z.GUILD_CATEGORY].forEach(e => {
      let {
        channel: t
      } = e;
      delete d[t.id]
    })
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: {
        id: t
      }
    } = e;
    return T(t)
  }
})