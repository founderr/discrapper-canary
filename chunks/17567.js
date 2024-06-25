s(47120);
var n = s(710845),
  a = s(314897),
  i = s(430824),
  r = s(411198),
  l = s(625137),
  o = s(287328);
let c = new n.Z("Guilds");
t.Z = new class e {
  async getAsync(e) {
    let t = performance.now(),
      s = await o.Z.guilds(e).getMany(),
      n = performance.now();
    return c.verbose("loaded in ".concat(n - t, "ms (guilds: ").concat(s.length, ")")), s
  }
  async getOneAsync(e, t) {
    return await o.Z.guilds(e).get(t)
  }
  handleBackgroundSync(e, t) {
    for (let s of e.guilds) {
      if ("unavailable" === s.data_mode) return;
      let e = i.Z.getGuild(s.id);
      if (null != e) {
        let n = i.Z.getRoles(s.id);
        this.put(r.cy(r.sp(s, e), "partial" === s.data_mode ? r.EO(s.id, n, s.partial_updates.roles, s.partial_updates.deleted_role_ids) : (0, l.C5)(s.id, s.roles)), t)
      }
    }
  }
  handleConnectionOpen(e, t) {
    for (let s of (this.clear(t), e.guilds)) this.putOne(s, t)
  }
  handleGuildCreate(e, t) {
    this.putOne(e.guild, t)
  }
  handleGuildUpdate(e, t) {
    let s = i.Z.getGuild(e.guild.id),
      n = r.di(e.guild, s);
    this.put(r.cy(n, (0, l.C5)(e.guild.id, e.guild.roles)), t)
  }
  handleGuildDelete(e, t) {
    this.delete(e.guild.id, t)
  }
  handleGuildRoleChange(e, t) {
    let s = i.Z.getGuild(e.guildId),
      n = i.Z.getRoles(e.guildId);
    null != s && this.put(r.cy(s, n), t)
  }
  handleGuildRoleDelete(e, t) {
    let s = i.Z.getGuild(e.guildId),
      n = i.Z.getRoles(e.guildId);
    null != s && this.put(r.cy(s, n), t)
  }
  handleGuildMemberAdd(e, t) {
    if (null != e.joinedAt && e.user.id === a.default.getId()) {
      let s = i.Z.getGuild(e.guildId);
      null != s && this.put(r.cy(s.updateJoinedAt(e.joinedAt), i.Z.getRoles(s.id)), t)
    }
  }
  resetInMemoryState() {}
  putOne(e, t) {
    let s = i.Z.getGuild(e.id),
      n = r.cy(r.wD(e, s), e.roles instanceof Array ? (0, l.C5)(e.id, e.roles) : e.roles);
    this.put(n, t)
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
    var e, t, s;
    e = this, t = "actions", s = {
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
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = s
  }
}