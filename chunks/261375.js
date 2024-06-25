s(47120), s(653041);
var n = s(768433),
  a = s(710845),
  i = s(38618),
  r = s(131704),
  l = s(314897),
  o = s(592125),
  c = s(430824),
  E = s(496675),
  _ = s(386438),
  u = s(287328),
  d = s(458772);

function T(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let I = new a.Z("GuildBasicChannels");

function R(e, t) {
  return null == e || e.type !== t.type || e.parent_id !== t.parent_id || E.Z.computeBasicPermissions(e) !== E.Z.computeBasicPermissions(t)
}
t.Z = new class e {
  async getAsync(e) {
    let t = performance.now(),
      [s, n] = await Promise.all([u.Z.basicChannels(e).getKvEntries(), u.Z.syncedBasicChannels(e).getKvEntries()]),
      a = performance.now() - t,
      [i, r] = function(e) {
        let t = [],
          s = [];
        for (let [n, a] of e)(a ? t : s).push(n);
        return [t, s]
      }(n),
      l = new Set(i);
    return this.synced = l, I.verbose("loaded in ".concat(a, "ms (guilds: ").concat(s.length, ", synced: ").concat(l.size, " unsynced: ").concat(r.length, ")")), {
      all: s,
      stale: r,
      channels: s.filter(e => {
        let [t, s] = e;
        return l.has(t)
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
    for (let s of e.channels.filter(e => null != e.guild_id)) R(o.Z.getBasicChannel(s.id), s) && this.unsync(s.guild_id, t)
  }
  handleBackgroundSync(e, t) {
    for (let i of e.guilds) switch (i.data_mode) {
      case "unavailable":
        break;
      case "partial":
        var s, n, a;
        let e = e => (0, r.q_)(e, i.id);
        this.onGuildUpdate(i.id, null !== (n = null === (s = i.partial_updates.channels) || void 0 === s ? void 0 : s.map(e)) && void 0 !== n ? n : [], null !== (a = i.partial_updates.deleted_channel_ids) && void 0 !== a ? a : [], t);
        break;
      default:
        this.onGuildSync(i.id, t)
    }
  }
  handleConnectionOpen(e, t) {
    for (let s of e.guilds) this.handleOneGuildCreate(s, t)
  }
  async handlePostConnectionOpen() {
    let e = i.Z.lastTimeConnectedChanged(),
      t = u.Z.database();
    if (null == this.synced || null == t || !(0, n.O)()) return;
    let s = c.Z.getGuildIds(),
      a = s.filter(e => !this.synced.has(e));
    for (let n of (I.verbose("scheduling basic_channel optimstic writes (guilds: ".concat(a.length, ")")), s)) {
      if (null == this.synced || t !== u.Z.database() || e !== i.Z.lastTimeConnectedChanged()) break;
      if (!this.synced.has(n)) {
        I.verbose("optimstically writing basic_channels (guild: ".concat(n, ")"));
        try {
          await o.o.loadGuildIds([n]), await t.transaction(e => this.syncOne(n, e), "handlePostConnectionOpen")
        } catch (e) {
          I.warn("couldn't optimstically write basic_channel:", e);
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
      n = c.Z.getRole(e.guildId, s.id);
    (null == n || s.permissions !== n.permissions) && this.unsync(e.guildId, t)
  }
  handleGuildMemberUpdate(e, t) {
    e.user.id === l.default.getId() && this.unsync(e.guildId, t)
  }
  handleWriteCaches(e, t) {
    this.sync(t)
  }
  resetInMemoryState() {
    this.synced = null
  }
  onGuildUpdate(e, t, s, n) {
    (s.length > 0 || t.some(e => R(o.Z.getBasicChannel(e.id), e))) && this.unsync(e, n)
  }
  onGuildSync(e, t) {
    this.unsync(e, t)
  }
  delete(e, t) {
    this.unsync(e, t), u.Z.basicChannelsTransaction(t).delete(e), u.Z.syncedBasicChannelsTransaction(t).delete(e)
  }
  unsync(e, t) {
    var s;
    null === (s = this.synced) || void 0 === s || s.delete(e), u.Z.basicChannelsTransaction(t).delete(e), u.Z.syncedBasicChannelsTransaction(t).put(e, !1), d.Z.invalidate(e)
  }
  sync(e) {
    I.verbose("Starting to write all basic channels");
    let t = performance.now(),
      s = {
        written: 0,
        skipped: 0
      };
    for (let t of c.Z.getGuildIds()) this.syncOne(t, e) ? s.written++ : s.skipped++;
    let n = performance.now() - t;
    I.verbose("".concat(s.written, " basic_channel guilds submitted (took: ").concat(n, "ms, skipped: ").concat(s.skipped, " guilds)"))
  }
  syncOne(e, t) {
    var s, n;
    return !(null == c.Z.getGuild(e) || (null === (s = this.synced) || void 0 === s ? void 0 : s.has(e))) && (null === (n = this.synced) || void 0 === n || n.add(e), u.Z.basicChannelsTransaction(t).put(e, function(e) {
      return Object.values(o.Z.getMutableGuildChannelsForGuild(e)).map(e => ({
        id: e.id,
        type: e.type,
        guild_id: e.guild_id,
        parent_id: e.parent_id,
        basicPermissions: _.Z.asBasicFlag(E.Z.computePermissions(e))
      }))
    }(e)), u.Z.syncedBasicChannelsTransaction(t).put(e, !0), !0)
  }
  constructor() {
    T(this, "synced", null), T(this, "actions", {
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