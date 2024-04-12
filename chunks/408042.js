"use strict";
a.r(t), a("47120"), a("653041");
var n, s = a("442837"),
  l = a("570140"),
  i = a("314897"),
  r = a("592125"),
  o = a("430824"),
  u = a("709054"),
  d = a("231873");

function c(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let f = {};

function E(e, t) {
  let a = f[e];
  return !(null == a || a.has(t)) && (f[e] = new Set(a.add(t)), !0)
}
class h extends(n = s.default.PersistedStore) {
  initialize(e) {
    this.waitFor(i.default, o.default), f = {}, null != e && u.default.keys(e).forEach(t => {
      let a = e[t];
      null != a && "function" == typeof a[Symbol.iterator] && (f[t] = new Set(a))
    })
  }
  getProgress(e) {
    return f[e]
  }
  hasProgress(e) {
    let t = f[e];
    return null != t && !t.has(d.Steps.DISMISSED)
  }
  getState() {
    return f
  }
}
c(h, "displayName", "GuildProgressStore"), c(h, "persistKey", "GuildProgressStore"), new h(l.default, {
  CONNECTION_OPEN: function() {
    let e = [];
    u.default.keys(f).forEach(t => {
      f[t].has(d.Steps.COMPLETED) && e.push(t)
    }), e.forEach(e => E(e, d.Steps.DISMISSED))
  },
  GUILD_PROGRESS_INITIALIZE: function(e) {
    let {
      guildId: t
    } = e;
    null == f[t] && (f[t] = new Set), !f[t].has(d.Steps.COMPLETED) && f[t].delete(d.Steps.DISMISSED)
  },
  GUILD_PROGRESS_COMPLETED_SEEN: function(e) {
    let {
      guildId: t
    } = e;
    if (null == f[t]) return !1;
    f[t] = new Set(f[t].add(d.Steps.COMPLETED))
  },
  GUILD_PROGRESS_DISMISS: function(e) {
    let {
      guildId: t
    } = e;
    return E(t, d.Steps.DISMISSED)
  },
  GUILD_CREATE: function(e) {
    let {
      guild: {
        id: t,
        member_count: a
      }
    } = e, n = o.default.getGuild(t);
    if (null == n) return !1;
    n.ownerId === i.default.getId() && null != f[n.id] && (null != n.icon && f[n.id].add(d.Steps.AVATAR), a > 1 && f[n.id].add(d.Steps.INVITE))
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    return null != t && null != t.guild_id && null != f[t.guild_id] && E(t.guild_id, d.Steps.CHANNEL)
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, a = !1;
    for (let e of t) null != e && null != e.guild_id && null != f[e.guild_id] && !1 !== E(e.guild_id, d.Steps.CHANNEL) && (a = !0);
    return a
  },
  GUILD_SETTINGS_SUBMIT_SUCCESS: function(e) {
    let {
      guild: t
    } = e;
    return null != t && null != t.id && null != f[t.id] && null != t.icon && E(t.id, d.Steps.AVATAR)
  },
  MESSAGE_CREATE: function(e) {
    var t;
    let {
      channelId: a,
      message: n
    } = e, s = r.default.getChannel(a);
    return (null === (t = n.author) || void 0 === t ? void 0 : t.id) === i.default.getId() && null != s && null != f[s.guild_id] && E(s.guild_id, d.Steps.MESSAGE)
  },
  GUILD_MEMBER_LIST_UPDATE: function(e) {
    let {
      guildId: t,
      memberCount: a
    } = e;
    return null != f[t] && !!(a > 1) && E(t, d.Steps.INVITE)
  }
})