"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var l = n("446674"),
  i = n("913144"),
  a = n("449008"),
  u = n("42203"),
  r = n("341542"),
  d = n("923959"),
  o = n("49111");
let s = {},
  E = 0;

function c() {
  E += 1
}

function C(e) {
  if (null == s[e]) return !1;
  delete s[e]
}
class f extends l.default.PersistedStore {
  initialize(e) {
    this.waitFor(u.default, r.default), this.removeChangeListener(c), this.addChangeListener(c), s = null != e ? e : {}
  }
  getState() {
    return s
  }
  isCollapsed(e) {
    return null != e && "null" !== e && !!s[e] && s[e]
  }
  getCollapsedCategories() {
    return s
  }
  get version() {
    return E
  }
}
f.displayName = "CategoryCollapseStore", f.persistKey = "collapsedCategories";
var _ = new f(i.default, {
  CONNECTION_OPEN: function(e) {
    for (let t of (!e.userGuildSettings.partial && (s = {}), e.userGuildSettings.entries))
      if (null != t.channel_overrides)
        for (let e of t.channel_overrides) e.collapsed ? s[e.channel_id] = !0 : delete s[e.channel_id]
  },
  USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
    let {
      userGuildSettings: t
    } = e, n = new Set(t.map(e => e.guild_id).filter(a.isNotNullish));
    for (let e in s) {
      let t = u.default.getChannel(e);
      null != t && null != t.guild_id && n.has(t.guild_id) && delete s[t.id]
    }
    for (let e of t)
      for (let t of e.channel_overrides) t.collapsed && (s[t.channel_id] = !0)
  },
  CATEGORY_COLLAPSE: function(e) {
    let {
      id: t
    } = e;
    if (s[t]) return !1;
    s[t] = !0
  },
  CATEGORY_EXPAND: function(e) {
    let {
      id: t
    } = e;
    return C(t)
  },
  CATEGORY_COLLAPSE_ALL: function(e) {
    let {
      guildId: t
    } = e;
    d.default.getChannels(t)[o.ChannelTypes.GUILD_CATEGORY].forEach(e => {
      let {
        channel: t
      } = e;
      "null" !== t.id && (s[t.id] = !0)
    })
  },
  CATEGORY_EXPAND_ALL: function(e) {
    let {
      guildId: t
    } = e;
    d.default.getChannels(t)[o.ChannelTypes.GUILD_CATEGORY].forEach(e => {
      let {
        channel: t
      } = e;
      delete s[t.id]
    })
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: {
        id: t
      }
    } = e;
    return C(t)
  }
})