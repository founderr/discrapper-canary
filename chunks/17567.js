"use strict";
a.r(t), a("47120");
var n = a("710845"),
  s = a("314897"),
  l = a("430824"),
  i = a("411198"),
  r = a("625137"),
  o = a("287328");
let u = new n.default("Guilds");
t.default = new class e {
  async getAsync(e) {
    let t = performance.now(),
      a = await o.default.guilds(e).getMany(),
      n = performance.now();
    return u.verbose("loaded in ".concat(n - t, "ms (guilds: ").concat(a.length, ")")), a
  }
  async getOneAsync(e, t) {
    return await o.default.guilds(e).get(t)
  }
  handleBackgroundSync(e, t) {
    for (let a of e.guilds) {
      if ("unavailable" === a.data_mode) return;
      let e = l.default.getGuild(a.id);
      if (null != e) {
        let n = l.default.getRoles(a.id);
        this.put(i.attachRoles(i.fromBackgroundSync(a, e), "partial" === a.data_mode ? i.filterRoleDeletes(a.id, n, a.partial_updates.roles, a.partial_updates.deleted_role_ids) : (0, r.sortServerRoles)(a.id, a.roles)), t)
      }
    }
  }
  handleConnectionOpen(e, t) {
    for (let a of (this.clear(t), e.guilds)) this.putOne(a, t)
  }
  handleGuildCreate(e, t) {
    this.putOne(e.guild, t)
  }
  handleGuildUpdate(e, t) {
    let a = l.default.getGuild(e.guild.id),
      n = i.fromServerUpdate(e.guild, a);
    this.put(i.attachRoles(n, (0, r.sortServerRoles)(e.guild.id, e.guild.roles)), t)
  }
  handleGuildDelete(e, t) {
    this.delete(e.guild.id, t)
  }
  handleGuildRoleChange(e, t) {
    let a = l.default.getGuild(e.guildId),
      n = l.default.getRoles(e.guildId);
    null != a && this.put(i.attachRoles(a, n), t)
  }
  handleGuildRoleDelete(e, t) {
    let a = l.default.getGuild(e.guildId),
      n = l.default.getRoles(e.guildId);
    null != a && this.put(i.attachRoles(a, n), t)
  }
  handleGuildMemberAdd(e, t) {
    if (null != e.joinedAt && e.user.id === s.default.getId()) {
      let a = l.default.getGuild(e.guildId);
      null != a && this.put(i.attachRoles(a.updateJoinedAt(e.joinedAt), l.default.getRoles(a.id)), t)
    }
  }
  resetInMemoryState() {}
  putOne(e, t) {
    let a = l.default.getGuild(e.id),
      n = i.attachRoles(i.fromServer(e, a), e.roles instanceof Array ? (0, r.sortServerRoles)(e.id, e.roles) : e.roles);
    this.put(n, t)
  }
  put(e, t) {
    o.default.guildsTransaction(t).put(e)
  }
  delete(e, t) {
    o.default.guildsTransaction(t).delete(e)
  }
  clear(e) {
    o.default.guildsTransaction(e).delete()
  }
  constructor() {
    var e, t, a;
    e = this, t = "actions", a = {
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
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = a
  }
}