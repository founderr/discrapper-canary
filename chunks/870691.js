"use strict";
n.r(e), n.d(e, {
  default: function() {
    return _
  }
}), n("222007");
var i = n("446674"),
  r = n("913144"),
  l = n("449008"),
  s = n("42203"),
  a = n("341542"),
  o = n("923959"),
  u = n("49111");
let c = {},
  d = 0;

function f() {
  d += 1
}

function h(t) {
  if (null == c[t]) return !1;
  delete c[t]
}
class p extends i.default.PersistedStore {
  initialize(t) {
    this.waitFor(s.default, a.default), this.removeChangeListener(f), this.addChangeListener(f), c = null != t ? t : {}
  }
  getState() {
    return c
  }
  isCollapsed(t) {
    return null != t && "null" !== t && !!c[t] && c[t]
  }
  getCollapsedCategories() {
    return c
  }
  get version() {
    return d
  }
}
p.displayName = "CategoryCollapseStore", p.persistKey = "collapsedCategories";
var _ = new p(r.default, {
  CONNECTION_OPEN: function(t) {
    for (let e of (!t.userGuildSettings.partial && (c = {}), t.userGuildSettings.entries))
      if (null != e.channel_overrides)
        for (let t of e.channel_overrides) t.collapsed ? c[t.channel_id] = !0 : delete c[t.channel_id]
  },
  USER_GUILD_SETTINGS_FULL_UPDATE: function(t) {
    let {
      userGuildSettings: e
    } = t, n = new Set(e.map(t => t.guild_id).filter(l.isNotNullish));
    for (let t in c) {
      let e = s.default.getChannel(t);
      null != e && null != e.guild_id && n.has(e.guild_id) && delete c[e.id]
    }
    for (let t of e)
      for (let e of t.channel_overrides) e.collapsed && (c[e.channel_id] = !0)
  },
  CATEGORY_COLLAPSE: function(t) {
    let {
      id: e
    } = t;
    if (c[e]) return !1;
    c[e] = !0
  },
  CATEGORY_EXPAND: function(t) {
    let {
      id: e
    } = t;
    return h(e)
  },
  CATEGORY_COLLAPSE_ALL: function(t) {
    let {
      guildId: e
    } = t;
    o.default.getChannels(e)[u.ChannelTypes.GUILD_CATEGORY].forEach(t => {
      let {
        channel: e
      } = t;
      "null" !== e.id && (c[e.id] = !0)
    })
  },
  CATEGORY_EXPAND_ALL: function(t) {
    let {
      guildId: e
    } = t;
    o.default.getChannels(e)[u.ChannelTypes.GUILD_CATEGORY].forEach(t => {
      let {
        channel: e
      } = t;
      delete c[e.id]
    })
  },
  CHANNEL_DELETE: function(t) {
    let {
      channel: {
        id: e
      }
    } = t;
    return h(e)
  }
})