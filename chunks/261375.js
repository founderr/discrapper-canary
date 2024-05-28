"use strict";
s.r(t), s("47120"), s("653041");
var a = s("768433"),
  n = s("710845"),
  l = s("38618"),
  i = s("131704"),
  r = s("314897"),
  u = s("592125"),
  o = s("430824"),
  d = s("496675"),
  c = s("386438"),
  E = s("287328"),
  _ = s("458772");

function f(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let h = new n.default("GuildBasicChannels");

function m(e, t) {
  return null == e || e.type !== t.type || e.parent_id !== t.parent_id || d.default.computeBasicPermissions(e) !== d.default.computeBasicPermissions(t)
}
t.default = new class e {
  async getAsync(e) {
    let t = performance.now(),
      [s, a] = await Promise.all([E.default.basicChannels(e).getKvEntries(), E.default.syncedBasicChannels(e).getKvEntries()]),
      n = performance.now() - t,
      [l, i] = function(e) {
        let t = [],
          s = [];
        for (let [a, n] of e)(n ? t : s).push(a);
        return [t, s]
      }(a),
      r = new Set(l);
    return this.synced = r, h.verbose("loaded in ".concat(n, "ms (guilds: ").concat(s.length, ", synced: ").concat(r.size, " unsynced: ").concat(i.length, ")")), {
      all: s,
      stale: i,
      channels: s.filter(e => {
        let [t, s] = e;
        return r.has(t)
      })
    }
  }
  handleChannelCreate(e, t) {
    null != e.channel.guild_id && this.unsync(e.channel.guild_id, t)
  }
  handleChannelDelete(e, t) {
    null != e.channel.guild_id && this.unsync(e.channel.guild_id, t)
  }
  handleChannelUpdates(e, t) {
    for (let s of e.channels.filter(e => null != e.guild_id)) m(u.default.getBasicChannel(s.id), s) && this.unsync(s.guild_id, t)
  }
  handleBackgroundSync(e, t) {
    for (let l of e.guilds) switch (l.data_mode) {
      case "unavailable":
        break;
      case "partial":
        var s, a, n;
        let e = e => (0, i.createChannelRecordFromServer)(e, l.id);
        this.onGuildUpdate(l.id, null !== (a = null === (s = l.partial_updates.channels) || void 0 === s ? void 0 : s.map(e)) && void 0 !== a ? a : [], null !== (n = l.partial_updates.deleted_channel_ids) && void 0 !== n ? n : [], t);
        break;
      default:
        this.onGuildSync(l.id, t)
    }
  }
  handleConnectionOpen(e, t) {
    for (let s of e.guilds) this.handleOneGuildCreate(s, t)
  }
  async handlePostConnectionOpen() {
    let e = l.default.lastTimeConnectedChanged(),
      t = E.default.database();
    if (null == this.synced || null == t || !(0, a.isCacheEnabled)()) return;
    let s = o.default.getGuildIds(),
      n = s.filter(e => !this.synced.has(e));
    for (let a of (h.verbose("scheduling basic_channel optimstic writes (guilds: ".concat(n.length, ")")), s)) {
      if (null == this.synced || t !== E.default.database() || e !== l.default.lastTimeConnectedChanged()) break;
      if (!this.synced.has(a)) {
        h.verbose("optimstically writing basic_channels (guild: ".concat(a, ")"));
        try {
          await u.ChannelLoader.loadGuildIds([a]), await t.transaction(e => this.syncOne(a, e), "handlePostConnectionOpen")
        } catch (e) {
          h.warn("couldn't optimstically write basic_channel:", e);
          return
        }
        await new Promise(e => setTimeout(e, 1e3))
      }
    }
  }
  handleGuildCreate(e, t) {
    this.handleOneGuildCreate(e.guild, t)
  }
  handleOneGuildCreate(e, t) {
    null != e.channelUpdates ? this.onGuildUpdate(e.id, e.channelUpdates.writes, e.channelUpdates.deletes, t) : this.onGuildSync(e.id, t)
  }
  handleGuildUpdate(e, t) {
    this.unsync(e.guild.id, t)
  }
  handleGuildDelete(e, t) {
    !0 !== e.guild.unavailable && this.delete(e.guild.id, t)
  }
  handleGuildRoleUpdate(e, t) {
    let s = e.role,
      a = o.default.getRole(e.guildId, s.id);
    (null == a || s.permissions !== a.permissions) && this.unsync(e.guildId, t)
  }
  handleGuildMemberUpdate(e, t) {
    e.user.id === r.default.getId() && this.unsync(e.guildId, t)
  }
  handleWriteCaches(e, t) {
    this.sync(t)
  }
  resetInMemoryState() {
    this.synced = null
  }
  onGuildUpdate(e, t, s, a) {
    (s.length > 0 || t.some(e => m(u.default.getBasicChannel(e.id), e))) && this.unsync(e, a)
  }
  onGuildSync(e, t) {
    this.unsync(e, t)
  }
  delete(e, t) {
    this.unsync(e, t), E.default.basicChannelsTransaction(t).delete(e), E.default.syncedBasicChannelsTransaction(t).delete(e)
  }
  unsync(e, t) {
    var s;
    null === (s = this.synced) || void 0 === s || s.delete(e), E.default.basicChannelsTransaction(t).delete(e), E.default.syncedBasicChannelsTransaction(t).put(e, !1), _.default.invalidate(e)
  }
  sync(e) {
    h.verbose("Starting to write all basic channels");
    let t = performance.now(),
      s = {
        written: 0,
        skipped: 0
      };
    for (let t of o.default.getGuildIds()) this.syncOne(t, e) ? s.written++ : s.skipped++;
    let a = performance.now() - t;
    h.verbose("".concat(s.written, " basic_channel guilds submitted (took: ").concat(a, "ms, skipped: ").concat(s.skipped, " guilds)"))
  }
  syncOne(e, t) {
    var s, a;
    return !(null == o.default.getGuild(e) || (null === (s = this.synced) || void 0 === s ? void 0 : s.has(e))) && (null === (a = this.synced) || void 0 === a || a.add(e), E.default.basicChannelsTransaction(t).put(e, function(e) {
      return Object.values(u.default.getMutableGuildChannelsForGuild(e)).map(e => ({
        id: e.id,
        type: e.type,
        guild_id: e.guild_id,
        parent_id: e.parent_id,
        basicPermissions: c.default.asBasicFlag(d.default.computePermissions(e))
      }))
    }(e)), E.default.syncedBasicChannelsTransaction(t).put(e, !0), !0)
  }
  constructor() {
    f(this, "synced", null), f(this, "actions", {
      BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
      CHANNEL_CREATE: (e, t) => this.handleChannelCreate(e, t),
      CHANNEL_DELETE: (e, t) => this.handleChannelDelete(e, t),
      CHANNEL_UPDATES: (e, t) => this.handleChannelUpdates(e, t),
      CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
      GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
      GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
      GUILD_MEMBER_UPDATE: (e, t) => this.handleGuildMemberUpdate(e, t),
      GUILD_ROLE_UPDATE: (e, t) => this.handleGuildRoleUpdate(e, t),
      GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t),
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
      WRITE_CACHES: (e, t) => this.handleWriteCaches(e, t)
    })
  }
}