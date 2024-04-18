"use strict";
a.r(t), a("47120"), a("653041");
var n = a("768433"),
  s = a("710845"),
  l = a("38618"),
  i = a("131704"),
  r = a("314897"),
  o = a("592125"),
  u = a("430824"),
  d = a("496675"),
  c = a("386438"),
  f = a("287328"),
  E = a("458772");

function h(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let _ = new s.default("GuildBasicChannels");

function C(e, t) {
  return null == e || e.type !== t.type || e.parent_id !== t.parent_id || d.default.computeBasicPermissions(e) !== d.default.computeBasicPermissions(t)
}
t.default = new class e {
  async getAsync(e) {
    let t = performance.now(),
      [a, n] = await Promise.all([f.default.basicChannels(e).getKvEntries(), f.default.syncedBasicChannels(e).getKvEntries()]),
      s = performance.now() - t,
      [l, i] = function(e) {
        let t = [],
          a = [];
        for (let [n, s] of e)(s ? t : a).push(n);
        return [t, a]
      }(n),
      r = new Set(l);
    return this.synced = r, _.verbose("loaded in ".concat(s, "ms (guilds: ").concat(a.length, ", synced: ").concat(r.size, " unsynced: ").concat(i.length, ")")), {
      all: a,
      stale: i,
      channels: a.filter(e => {
        let [t, a] = e;
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
    for (let a of e.channels.filter(e => null != e.guild_id)) C(o.default.getBasicChannel(a.id), a) && this.unsync(a.guild_id, t)
  }
  handleBackgroundSync(e, t) {
    for (let l of e.guilds) switch (l.data_mode) {
      case "unavailable":
        break;
      case "partial":
        var a, n, s;
        let e = e => (0, i.createChannelRecordFromServer)(e, l.id);
        this.onGuildUpdate(l.id, null !== (n = null === (a = l.partial_updates.channels) || void 0 === a ? void 0 : a.map(e)) && void 0 !== n ? n : [], null !== (s = l.partial_updates.deleted_channel_ids) && void 0 !== s ? s : [], t);
        break;
      default:
        this.onGuildSync(l.id, t)
    }
  }
  handleConnectionOpen(e, t) {
    for (let a of e.guilds) this.handleOneGuildCreate(a, t)
  }
  async handlePostConnectionOpen() {
    let e = l.default.lastTimeConnectedChanged(),
      t = f.default.database();
    if (null == this.synced || null == t || !(0, n.isCacheEnabled)()) return;
    let a = u.default.getGuildIds(),
      s = a.filter(e => !this.synced.has(e));
    for (let n of (_.verbose("scheduling basic_channel optimstic writes (guilds: ".concat(s.length, ")")), a)) {
      if (null == this.synced || t !== f.default.database() || e !== l.default.lastTimeConnectedChanged()) break;
      if (!this.synced.has(n)) {
        _.verbose("optimstically writing basic_channels (guild: ".concat(n, ")"));
        try {
          await o.ChannelLoader.loadGuildIds([n]), await t.transaction(e => this.syncOne(n, e), "handlePostConnectionOpen")
        } catch (e) {
          _.warn("couldn't optimstically write basic_channel:", e);
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
    let a = e.role,
      n = u.default.getRole(e.guildId, a.id);
    (null == n || a.permissions !== n.permissions) && this.unsync(e.guildId, t)
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
  onGuildUpdate(e, t, a, n) {
    (a.length > 0 || t.some(e => C(o.default.getBasicChannel(e.id), e))) && this.unsync(e, n)
  }
  onGuildSync(e, t) {
    this.unsync(e, t)
  }
  delete(e, t) {
    this.unsync(e, t), f.default.basicChannelsTransaction(t).delete(e), f.default.syncedBasicChannelsTransaction(t).delete(e)
  }
  unsync(e, t) {
    var a;
    null === (a = this.synced) || void 0 === a || a.delete(e), f.default.basicChannelsTransaction(t).delete(e), f.default.syncedBasicChannelsTransaction(t).put(e, !1), E.default.invalidate(e)
  }
  sync(e) {
    _.verbose("Starting to write all basic channels");
    let t = performance.now(),
      a = {
        written: 0,
        skipped: 0
      };
    for (let t of u.default.getGuildIds()) this.syncOne(t, e) ? a.written++ : a.skipped++;
    let n = performance.now() - t;
    _.verbose("".concat(a.written, " basic_channel guilds submitted (took: ").concat(n, "ms, skipped: ").concat(a.skipped, " guilds)"))
  }
  syncOne(e, t) {
    var a, n;
    return !(null == u.default.getGuild(e) || (null === (a = this.synced) || void 0 === a ? void 0 : a.has(e))) && (null === (n = this.synced) || void 0 === n || n.add(e), f.default.basicChannelsTransaction(t).put(e, function(e) {
      return Object.values(o.default.getMutableGuildChannelsForGuild(e)).map(e => ({
        id: e.id,
        type: e.type,
        guild_id: e.guild_id,
        parent_id: e.parent_id,
        basicPermissions: c.default.asBasicFlag(d.default.computePermissions(e))
      }))
    }(e)), f.default.syncedBasicChannelsTransaction(t).put(e, !0), !0)
  }
  constructor() {
    h(this, "synced", null), h(this, "actions", {
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