"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var i = n("446674"),
  l = n("913144"),
  r = n("449008"),
  o = n("42203"),
  a = n("341542"),
  s = n("923959"),
  u = n("49111");
let c = {},
  d = 0;

function f() {
  d += 1
}

function E(e) {
  if (null == c[e]) return !1;
  delete c[e]
}
class p extends i.default.PersistedStore {
  initialize(e) {
    this.waitFor(o.default, a.default), this.removeChangeListener(f), this.addChangeListener(f), c = null != e ? e : {}
  }
  getState() {
    return c
  }
  isCollapsed(e) {
    return null != e && "null" !== e && !!c[e] && c[e]
  }
  getCollapsedCategories() {
    return c
  }
  get version() {
    return d
  }
}
p.displayName = "CategoryCollapseStore", p.persistKey = "collapsedCategories";
var h = new p(l.default, {
  CONNECTION_OPEN: function(e) {
    for (let t of (!e.userGuildSettings.partial && (c = {}), e.userGuildSettings.entries))
      if (null != t.channel_overrides)
        for (let e of t.channel_overrides) e.collapsed ? c[e.channel_id] = !0 : delete c[e.channel_id]
  },
  USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
    let {
      userGuildSettings: t
    } = e, n = new Set(t.map(e => e.guild_id).filter(r.isNotNullish));
    for (let e in c) {
      let t = o.default.getChannel(e);
      null != t && null != t.guild_id && n.has(t.guild_id) && delete c[t.id]
    }
    for (let e of t)
      for (let t of e.channel_overrides) t.collapsed && (c[t.channel_id] = !0)
  },
  CATEGORY_COLLAPSE: function(e) {
    let {
      id: t
    } = e;
    if (c[t]) return !1;
    c[t] = !0
  },
  CATEGORY_EXPAND: function(e) {
    let {
      id: t
    } = e;
    return E(t)
  },
  CATEGORY_COLLAPSE_ALL: function(e) {
    let {
      guildId: t
    } = e;
    s.default.getChannels(t)[u.ChannelTypes.GUILD_CATEGORY].forEach(e => {
      let {
        channel: t
      } = e;
      "null" !== t.id && (c[t.id] = !0)
    })
  },
  CATEGORY_EXPAND_ALL: function(e) {
    let {
      guildId: t
    } = e;
    s.default.getChannels(t)[u.ChannelTypes.GUILD_CATEGORY].forEach(e => {
      let {
        channel: t
      } = e;
      delete c[t.id]
    })
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: {
        id: t
      }
    } = e;
    return E(t)
  }
})