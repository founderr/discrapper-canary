"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var a = n("446674"),
  l = n("913144"),
  s = n("42203"),
  i = n("525065"),
  r = n("18494"),
  d = n("8001"),
  u = n("625483"),
  o = n("185496"),
  c = n("689257"),
  E = n("753848"),
  f = n("818697"),
  _ = n("875081");
let g = null,
  h = new u.ExtendedMemoryLru(750, 500),
  m = new o.Lru(15),
  S = !1;
class M extends a.default.Store {
  initialize() {
    this.waitFor(s.default), this.waitFor(r.default), this.waitFor(i.default), this.syncWith([d.default], () => !0), this.syncWith([r.default], p)
  }
  canEvictOrphans() {
    return S
  }
  saveLimit(e) {
    let t = s.default.getBasicChannel(e);
    return null != t && (0, E.isPrivateChannel)(t) || null != t && h.has(e) ? 25 : 1
  }
  getSaveableChannels() {
    let e = s.default.getChannelIds(null),
      t = e.map(e => ({
        guildId: null,
        channelId: e
      }));
    return d.default.isLowDisk ? null != g ? [...t, g] : t : [...t, ...h.values()]
  }
  toSnapshot() {
    return {
      v: 1,
      channels: [...h.allValues()].filter(e => !e.fallback),
      penalized: [...m.keys()],
      lastChannel: g
    }
  }
  static mergeSnapshot(e) {
    let t = h,
      n = m;
    for (let n of (h = new u.ExtendedMemoryLru(h.primaryCapacity, h.extendedCapacity), m = new o.Lru(m.capacity), g = null != g ? g : e.lastChannel, [e.channels, t.values()]))
      for (let e of n) !e.fallback && h.put(e.channelId, e);
    for (let t of [e.penalized, n.keys()])
      for (let e of t) m.put(e, null)
  }
  static recordChannel(e) {
    let t = s.default.getBasicChannel(e);
    if (null != t && (0, f.isReadableChannel)(t)) {
      var n;
      let a = {
        guildId: null !== (n = t.guild_id) && void 0 !== n ? n : null,
        channelId: e,
        channelType: t.type
      };
      if (g = a, h.put(e, a), (0, c.isLimitedChannel)(t)) {
        let t = m.put(e, null);
        null != t && h.delete(e)
      }
    }
  }
  static deleteChannel(e) {
    h.delete(e)
  }
  static deleteGuild(e) {
    for (let t of h.allValues()) t.guildId === e && h.delete(t.channelId)
  }
  static dropUnreachableChannels() {
    for (let e of h.keys()) {
      let t = s.default.getBasicChannel(e);
      !(0, f.isReadableChannel)(t) && M.deleteChannel(e)
    }
  }
  static deleteUnreadableGuildChannels(e) {
    for (let t of h.values()) e === t.guildId && !(0, f.isReadableChannelId)(t.channelId) && M.deleteChannel(t.channelId)
  }
  static replaceLru(e) {
    h = e
  }
}

function p() {
  let e = r.default.getChannelId();
  null != e && M.recordChannel(e)
}

function A(e) {
  let t = e.id,
    n = (0, f.isReadableChannel)(e),
    a = r.default.getChannelId();
  n && t === a && M.recordChannel(t), !n && M.deleteChannel(t)
}
var I = new M(l.default, {
  CACHE_LOADED_LAZY_NO_CACHE: function(e) {
    S = !0
  },
  CACHE_LOADED_LAZY: function(e) {
    S = !0, null != e.saveableChannels && M.mergeSnapshot(e.saveableChannels)
  },
  CHANNEL_DELETE: function(e) {
    M.deleteChannel(e.channel.id)
  },
  CHANNEL_UPDATES: function(e) {
    for (let t of e.channels) A(t)
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function() {
    M.dropUnreachableChannels(), M.replaceLru((0, _.withFallbacks)(h, 1250))
  },
  GUILD_DELETE: function(e) {
    return !e.guild.unavailable && (M.deleteGuild(e.guild.id), !0)
  },
  LOGIN_SUCCESS: function(e) {
    h.clear(), m.clear(), S = !1
  },
  THREAD_DELETE: function(e) {
    M.deleteChannel(e.channel.id)
  },
  THREAD_UPDATE: function(e) {
    A(e.channel)
  }
})