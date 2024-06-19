n(47120);
var s = n(710845),
  a = n(314897),
  i = n(430824),
  l = n(411198),
  r = n(625137),
  o = n(287328);
let c = new s.Z("Guilds");
t.Z = new class e {
  async getAsync(e) {
    let t = performance.now(),
      n = await o.Z.guilds(e).getMany(),
      s = performance.now();
    return c.verbose("loaded in ".concat(s - t, "ms (guilds: ").concat(n.length, ")")), n
  }
  async getOneAsync(e, t) {
    return await o.Z.guilds(e).get(t)
  }
  handleBackgroundSync(e, t) {
    for (let n of e.guilds) {
      if ("unavailable" === n.data_mode) return;
      let e = i.Z.getGuild(n.id);
      if (null != e) {
        let s = i.Z.getRoles(n.id);
        this.put(l.cy(l.sp(n, e), "partial" === n.data_mode ? l.EO(n.id, s, n.partial_updates.roles, n.partial_updates.deleted_role_ids) : (0, r.C5)(n.id, n.roles)), t)
      }
    }
  }
  handleConnectionOpen(e, t) {
    for (let n of (this.clear(t), e.guilds)) this.putOne(n, t)
  }
  handleGuildCreate(e, t) {
    this.putOne(e.guild, t)
  }
  handleGuildUpdate(e, t) {
    let n = i.Z.getGuild(e.guild.id),
      s = l.di(e.guild, n);
    this.put(l.cy(s, (0, r.C5)(e.guild.id, e.guild.roles)), t)
  }
  handleGuildDelete(e, t) {
    this.delete(e.guild.id, t)
  }
  handleGuildRoleChange(e, t) {
    let n = i.Z.getGuild(e.guildId),
      s = i.Z.getRoles(e.guildId);
    null != n && this.put(l.cy(n, s), t)
  }
  handleGuildRoleDelete(e, t) {
    let n = i.Z.getGuild(e.guildId),
      s = i.Z.getRoles(e.guildId);
    null != n && this.put(l.cy(n, s), t)
  }
  handleGuildMemberAdd(e, t) {
    if (null != e.joinedAt && e.user.id === a.default.getId()) {
      let n = i.Z.getGuild(e.guildId);
      null != n && this.put(l.cy(n.updateJoinedAt(e.joinedAt), i.Z.getRoles(n.id)), t)
    }
  }
  resetInMemoryState() {}
  putOne(e, t) {
    let n = i.Z.getGuild(e.id),
      s = l.cy(l.wD(e, n), e.roles instanceof Array ? (0, r.C5)(e.id, e.roles) : e.roles);
    this.put(s, t)
  }
  put(e, t) {
    o.Z.guildsTransaction(t).put(e)
  }
  delete(e, t) {
    o.Z.guildsTransaction(t).delete(e)
  }
  clear(e) {
    o.Z.guildsTransaction(e).delete()
  }
  constructor() {
    var e, t, n;
    e = this, t = "actions", n = {
      BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
      CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
      GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
      GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
      GUILD_MEMBER_ADD: (e, t) => this.handleGuildMemberAdd(e, t),
      GUILD_ROLE_CREATE: (e, t) => this.handleGuildRoleChange(e, t),
      GUILD_ROLE_DELETE: (e, t) => this.handleGuildRoleDelete(e, t),
      GUILD_ROLE_UPDATE: (e, t) => this.handleGuildRoleChange(e, t),
      GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
    }, t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n
  }
}