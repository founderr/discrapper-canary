"use strict";
n(47120);
var i = n(592125),
  r = n(650774),
  s = n(944486),
  o = n(412788),
  a = n(368321),
  l = n(553245),
  u = n(143806),
  _ = n(814074),
  c = n(582142),
  d = n(989263),
  E = n(872261);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let T = null,
  h = new l.b(750, 500),
  f = new u.S(15),
  S = !1;
class A extends o.Z {
  initialize() {
    this.waitFor(i.Z), this.waitFor(s.Z), this.waitFor(r.Z), this.syncWith([a.Z], () => !0), this.syncWith([s.Z], N)
  }
  loadCache() {
    let e = this.readSnapshot(A.LATEST_SNAPSHOT_VERSION);
    null != e && (S = !0, A.mergeSnapshot(e))
  }
  canEvictOrphans() {
    return S
  }
  saveLimit(e) {
    let t = i.Z.getBasicChannel(e);
    return null != t && (0, c.p)(t) || null != t && h.has(e) ? 25 : 1
  }
  getSaveableChannels() {
    let e = i.Z.getChannelIds(null).map(e => ({
      guildId: null,
      channelId: e
    }));
    return a.Z.isLowDisk ? null != T ? [...e, T] : e : [...e, ...h.values()]
  }
  takeSnapshot() {
    return {
      version: A.LATEST_SNAPSHOT_VERSION,
      data: {
        channels: [...h.allValues()].filter(e => !e.fallback),
        penalized: [...f.keys()],
        lastChannel: T
      }
    }
  }
  static mergeSnapshot(e) {
    let t = h,
      n = f;
    for (let n of (h = new l.b(h.primaryCapacity, h.extendedCapacity), f = new u.S(f.capacity), T = null != T ? T : e.lastChannel, [e.channels, t.values()]))
      for (let e of n) !e.fallback && h.put(e.channelId, e);
    for (let t of [e.penalized, n.keys()])
      for (let e of t) f.put(e, null)
  }
  static recordChannel(e) {
    let t = i.Z.getBasicChannel(e);
    if (null != t && (0, d.v)(t)) {
      var n;
      let i = {
        guildId: null !== (n = t.guild_id) && void 0 !== n ? n : null,
        channelId: e,
        channelType: t.type
      };
      T = i, h.put(e, i), (0, _.Hr)(t) && null != f.put(e, null) && h.delete(e)
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
      let t = i.Z.getBasicChannel(e);
      !(0, d.v)(t) && A.deleteChannel(e)
    }
  }
  static deleteUnreadableGuildChannels(e) {
    for (let t of h.values()) e === t.guildId && !(0, d.$)(t.channelId) && A.deleteChannel(t.channelId)
  }
  static replaceLru(e) {
    h = e
  }
  constructor() {
    super({
      CACHE_LOADED_LAZY_NO_CACHE: D,
      CACHE_LOADED_LAZY: () => this.loadCache(),
      CHANNEL_DELETE: p,
      CHANNEL_UPDATES: R,
      CONNECTION_OPEN_SUPPLEMENTAL: m,
      GUILD_DELETE: v,
      LOGIN_SUCCESS: L,
      THREAD_DELETE: C,
      THREAD_UPDATE: g
    })
  }
}

function N() {
  let e = s.Z.getChannelId();
  null != e && A.recordChannel(e)
}

function m() {
  A.dropUnreachableChannels(), A.replaceLru((0, E.J)(h, 1250))
}

function O(e) {
  let t = e.id,
    n = (0, d.v)(e),
    i = s.Z.getChannelId();
  n && t === i && A.recordChannel(t), !n && A.deleteChannel(t)
}

function R(e) {
  for (let t of e.channels) O(t)
}

function p(e) {
  A.deleteChannel(e.channel.id)
}

function g(e) {
  O(e.channel)
}

function C(e) {
  A.deleteChannel(e.channel.id)
}

function v(e) {
  return !e.guild.unavailable && (A.deleteGuild(e.guild.id), !0)
}

function L(e) {
  h.clear(), f.clear(), S = !1
}

function D(e) {
  S = !0
}
I(A, "displayName", "SaveableChannelsStore"), I(A, "LATEST_SNAPSHOT_VERSION", 1), t.ZP = new A