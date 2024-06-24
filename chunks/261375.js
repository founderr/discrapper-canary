n(47120), n(653041);
var s = n(768433),
  i = n(710845),
  a = n(38618),
  l = n(131704),
  r = n(314897),
  c = n(592125),
  o = n(430824),
  d = n(496675),
  u = n(386438),
  E = n(287328),
  _ = n(458772);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let T = new i.Z("GuildBasicChannels");

function I(e, t) {
  return null == e || e.type !== t.type || e.parent_id !== t.parent_id || d.Z.computeBasicPermissions(e) !== d.Z.computeBasicPermissions(t)
}
t.Z = new class e {
  async getAsync(e) {
    let t = performance.now(),
      [n, s] = await Promise.all([E.Z.basicChannels(e).getKvEntries(), E.Z.syncedBasicChannels(e).getKvEntries()]),
      i = performance.now() - t,
      [a, l] = function(e) {
        let t = [],
          n = [];
        for (let [s, i] of e)(i ? t : n).push(s);
        return [t, n]
      }(s),
      r = new Set(a);
    return this.synced = r, T.verbose("loaded in ".concat(i, "ms (guilds: ").concat(n.length, ", synced: ").concat(r.size, " unsynced: ").concat(l.length, ")")), {
      all: n,
      stale: l,
      channels: n.filter(e => {
        let [t, n] = e;
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
    for (let n of e.channels.filter(e => null != e.guild_id)) I(c.Z.getBasicChannel(n.id), n) && this.unsync(n.guild_id, t)
  }
  handleBackgroundSync(e, t) {
    for (let a of e.guilds) switch (a.data_mode) {
      case "unavailable":
        break;
      case "partial":
        var n, s, i;
        let e = e => (0, l.q_)(e, a.id);
        this.onGuildUpdate(a.id, null !== (s = null === (n = a.partial_updates.channels) || void 0 === n ? void 0 : n.map(e)) && void 0 !== s ? s : [], null !== (i = a.partial_updates.deleted_channel_ids) && void 0 !== i ? i : [], t);
        break;
      default:
        this.onGuildSync(a.id, t)
    }
  }
  handleConnectionOpen(e, t) {
    for (let n of e.guilds) this.handleOneGuildCreate(n, t)
  }
  async handlePostConnectionOpen() {
    let e = a.Z.lastTimeConnectedChanged(),
      t = E.Z.database();
    if (null == this.synced || null == t || !(0, s.O)()) return;
    let n = o.Z.getGuildIds(),
      i = n.filter(e => !this.synced.has(e));
    for (let s of (T.verbose("scheduling basic_channel optimstic writes (guilds: ".concat(i.length, ")")), n)) {
      if (null == this.synced || t !== E.Z.database() || e !== a.Z.lastTimeConnectedChanged()) break;
      if (!this.synced.has(s)) {
        T.verbose("optimstically writing basic_channels (guild: ".concat(s, ")"));
        try {
          await c.o.loadGuildIds([s]), await t.transaction(e => this.syncOne(s, e), "handlePostConnectionOpen")
        } catch (e) {
          T.warn("couldn't optimstically write basic_channel:", e);
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
    let n = e.role,
      s = o.Z.getRole(e.guildId, n.id);
    (null == s || n.permissions !== s.permissions) && this.unsync(e.guildId, t)
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
  onGuildUpdate(e, t, n, s) {
    (n.length > 0 || t.some(e => I(c.Z.getBasicChannel(e.id), e))) && this.unsync(e, s)
  }
  onGuildSync(e, t) {
    this.unsync(e, t)
  }
  delete(e, t) {
    this.unsync(e, t), E.Z.basicChannelsTransaction(t).delete(e), E.Z.syncedBasicChannelsTransaction(t).delete(e)
  }
  unsync(e, t) {
    var n;
    null === (n = this.synced) || void 0 === n || n.delete(e), E.Z.basicChannelsTransaction(t).delete(e), E.Z.syncedBasicChannelsTransaction(t).put(e, !1), _.Z.invalidate(e)
  }
  sync(e) {
    T.verbose("Starting to write all basic channels");
    let t = performance.now(),
      n = {
        written: 0,
        skipped: 0
      };
    for (let t of o.Z.getGuildIds()) this.syncOne(t, e) ? n.written++ : n.skipped++;
    let s = performance.now() - t;
    T.verbose("".concat(n.written, " basic_channel guilds submitted (took: ").concat(s, "ms, skipped: ").concat(n.skipped, " guilds)"))
  }
  syncOne(e, t) {
    var n, s;
    return !(null == o.Z.getGuild(e) || (null === (n = this.synced) || void 0 === n ? void 0 : n.has(e))) && (null === (s = this.synced) || void 0 === s || s.add(e), E.Z.basicChannelsTransaction(t).put(e, function(e) {
      return Object.values(c.Z.getMutableGuildChannelsForGuild(e)).map(e => ({
        id: e.id,
        type: e.type,
        guild_id: e.guild_id,
        parent_id: e.parent_id,
        basicPermissions: u.Z.asBasicFlag(d.Z.computePermissions(e))
      }))
    }(e)), E.Z.syncedBasicChannelsTransaction(t).put(e, !0), !0)
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