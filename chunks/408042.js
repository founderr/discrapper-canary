n(47120), n(653041);
var i, s = n(442837),
  l = n(570140),
  a = n(314897),
  r = n(592125),
  o = n(430824),
  c = n(709054),
  u = n(231873);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let E = {};

function h(e, t) {
  let n = E[e];
  return !(null == n || n.has(t)) && (E[e] = new Set(n.add(t)), !0)
}
class _ extends(i = s.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(a.default, o.Z), E = {}, null != e && c.default.keys(e).forEach(t => {
      let n = e[t];
      null != n && "function" == typeof n[Symbol.iterator] && (E[t] = new Set(n))
    })
  }
  getProgress(e) {
    return E[e]
  }
  hasProgress(e) {
    let t = E[e];
    return null != t && !t.has(u.Rg.DISMISSED)
  }
  getState() {
    return E
  }
}
d(_, "displayName", "GuildProgressStore"), d(_, "persistKey", "GuildProgressStore"), new _(l.Z, {
  CONNECTION_OPEN: function() {
    let e = [];
    c.default.keys(E).forEach(t => {
      E[t].has(u.Rg.COMPLETED) && e.push(t)
    }), e.forEach(e => h(e, u.Rg.DISMISSED))
  },
  GUILD_PROGRESS_INITIALIZE: function(e) {
    let {
      guildId: t
    } = e;
    null == E[t] && (E[t] = new Set), !E[t].has(u.Rg.COMPLETED) && E[t].delete(u.Rg.DISMISSED)
  },
  GUILD_PROGRESS_COMPLETED_SEEN: function(e) {
    let {
      guildId: t
    } = e;
    if (null == E[t]) return !1;
    E[t] = new Set(E[t].add(u.Rg.COMPLETED))
  },
  GUILD_PROGRESS_DISMISS: function(e) {
    let {
      guildId: t
    } = e;
    return h(t, u.Rg.DISMISSED)
  },
  GUILD_CREATE: function(e) {
    let {
      guild: {
        id: t,
        member_count: n
      }
    } = e, i = o.Z.getGuild(t);
    if (null == i) return !1;
    i.ownerId === a.default.getId() && null != E[i.id] && (null != i.icon && E[i.id].add(u.Rg.AVATAR), n > 1 && E[i.id].add(u.Rg.INVITE))
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    return null != t && null != t.guild_id && null != E[t.guild_id] && h(t.guild_id, u.Rg.CHANNEL)
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = !1;
    for (let e of t) null != e && null != e.guild_id && null != E[e.guild_id] && !1 !== h(e.guild_id, u.Rg.CHANNEL) && (n = !0);
    return n
  },
  GUILD_SETTINGS_SUBMIT_SUCCESS: function(e) {
    let {
      guild: t
    } = e;
    return null != t && null != t.id && null != E[t.id] && null != t.icon && h(t.id, u.Rg.AVATAR)
  },
  MESSAGE_CREATE: function(e) {
    var t;
    let {
      channelId: n,
      message: i
    } = e, s = r.Z.getChannel(n);
    return (null === (t = i.author) || void 0 === t ? void 0 : t.id) === a.default.getId() && null != s && null != E[s.guild_id] && h(s.guild_id, u.Rg.MESSAGE)
  },
  GUILD_MEMBER_LIST_UPDATE: function(e) {
    let {
      guildId: t,
      memberCount: n
    } = e;
    return null != E[t] && !!(n > 1) && h(t, u.Rg.INVITE)
  }
})