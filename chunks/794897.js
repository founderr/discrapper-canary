"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
}), n("222007");
var a = n("42203"),
  l = n("525065"),
  s = n("18494"),
  i = n("455079"),
  r = n("8001"),
  d = n("625483"),
  u = n("185496"),
  o = n("689257"),
  c = n("753848"),
  E = n("818697"),
  f = n("875081");
let _ = null,
  g = new d.ExtendedMemoryLru(750, 500),
  h = new u.Lru(15),
  m = !1;
class S extends i.default {
  canEvictOrphans() {
    return m
  }
  saveLimit(e) {
    let t = a.default.getBasicChannel(e);
    return null != t && (0, c.isPrivateChannel)(t) || null != t && g.has(e) ? 25 : 1
  }
  getSaveableChannels() {
    let e = a.default.getChannelIds(null),
      t = e.map(e => ({
        guildId: null,
        channelId: e
      }));
    return r.default.isLowDisk ? null != _ ? [...t, _] : t : [...t, ...g.values()]
  }
  takeSnapshot() {
    return {
      version: S.LATEST_SNAPSHOT_VERSION,
      data: {
        channels: [...g.allValues()].filter(e => !e.fallback),
        penalized: [...h.keys()],
        lastChannel: _
      }
    }
  }
  static mergeSnapshot(e) {
    let t = g,
      n = h;
    for (let n of (g = new d.ExtendedMemoryLru(g.primaryCapacity, g.extendedCapacity), h = new u.Lru(h.capacity), _ = null != _ ? _ : e.lastChannel, [e.channels, t.values()]))
      for (let e of n) !e.fallback && g.put(e.channelId, e);
    for (let t of [e.penalized, n.keys()])
      for (let e of t) h.put(e, null)
  }
  static recordChannel(e) {
    let t = a.default.getBasicChannel(e);
    if (null != t && (0, E.isReadableChannel)(t)) {
      var n;
      let a = {
        guildId: null !== (n = t.guild_id) && void 0 !== n ? n : null,
        channelId: e,
        channelType: t.type
      };
      if (_ = a, g.put(e, a), (0, o.isLimitedChannel)(t)) {
        let t = h.put(e, null);
        null != t && g.delete(e)
      }
    }
  }
  static deleteChannel(e) {
    g.delete(e)
  }
  static deleteGuild(e) {
    for (let t of g.allValues()) t.guildId === e && g.delete(t.channelId)
  }
  static dropUnreachableChannels() {
    for (let e of g.keys()) {
      let t = a.default.getBasicChannel(e);
      !(0, E.isReadableChannel)(t) && S.deleteChannel(e)
    }
  }
  static deleteUnreadableGuildChannels(e) {
    for (let t of g.values()) e === t.guildId && !(0, E.isReadableChannelId)(t.channelId) && S.deleteChannel(t.channelId)
  }
  static replaceLru(e) {
    g = e
  }
  constructor() {
    super(), this.loadCache = () => {
      let e = this.readSnapshot(S.LATEST_SNAPSHOT_VERSION);
      null != e && (m = !0, S.mergeSnapshot(e))
    }, this.registerActionHandlers({
      CACHE_LOADED_LAZY_NO_CACHE: v,
      CACHE_LOADED_LAZY: this.loadCache,
      CHANNEL_DELETE: I,
      CHANNEL_UPDATES: T,
      CONNECTION_OPEN_SUPPLEMENTAL: p,
      GUILD_DELETE: D,
      LOGIN_SUCCESS: O,
      THREAD_DELETE: L,
      THREAD_UPDATE: C
    }), this.waitFor(a.default), this.waitFor(s.default), this.waitFor(l.default), this.syncWith([r.default], () => !0), this.syncWith([s.default], M)
  }
}

function M() {
  let e = s.default.getChannelId();
  null != e && S.recordChannel(e)
}

function p() {
  S.dropUnreachableChannels(), S.replaceLru((0, f.withFallbacks)(g, 1250))
}

function A(e) {
  let t = e.id,
    n = (0, E.isReadableChannel)(e),
    a = s.default.getChannelId();
  n && t === a && S.recordChannel(t), !n && S.deleteChannel(t)
}

function T(e) {
  for (let t of e.channels) A(t)
}

function I(e) {
  S.deleteChannel(e.channel.id)
}

function C(e) {
  A(e.channel)
}

function L(e) {
  S.deleteChannel(e.channel.id)
}

function D(e) {
  return !e.guild.unavailable && (S.deleteGuild(e.guild.id), !0)
}

function O(e) {
  g.clear(), h.clear(), m = !1
}

function v(e) {
  m = !0
}
S.displayName = "SaveableChannelsStore", S.LATEST_SNAPSHOT_VERSION = 1;
var y = new S