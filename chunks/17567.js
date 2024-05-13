"use strict";
n.r(t), n("47120");
var a = n("710845"),
  s = n("314897"),
  i = n("430824"),
  l = n("411198"),
  r = n("625137"),
  o = n("287328");
let u = new a.default("Guilds");
t.default = new class e {
  async getAsync(e) {
    let t = performance.now(),
      n = await o.default.guilds(e).getMany(),
      a = performance.now();
    return u.verbose("loaded in ".concat(a - t, "ms (guilds: ").concat(n.length, ")")), n
  }
  async getOneAsync(e, t) {
    return await o.default.guilds(e).get(t)
  }
  handleBackgroundSync(e, t) {
    for (let n of e.guilds) {
      if ("unavailable" === n.data_mode) return;
      let e = i.default.getGuild(n.id);
      if (null != e) {
        let a = i.default.getRoles(n.id);
        this.put(l.attachRoles(l.fromBackgroundSync(n, e), "partial" === n.data_mode ? l.filterRoleDeletes(n.id, a, n.partial_updates.roles, n.partial_updates.deleted_role_ids) : (0, r.sortServerRoles)(n.id, n.roles)), t)
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
    let n = i.default.getGuild(e.guild.id),
      a = l.fromServerUpdate(e.guild, n);
    this.put(l.attachRoles(a, (0, r.sortServerRoles)(e.guild.id, e.guild.roles)), t)
  }
  handleGuildDelete(e, t) {
    this.delete(e.guild.id, t)
  }
  handleGuildRoleChange(e, t) {
    let n = i.default.getGuild(e.guildId),
      a = i.default.getRoles(e.guildId);
    null != n && this.put(l.attachRoles(n, a), t)
  }
  handleGuildRoleDelete(e, t) {
    let n = i.default.getGuild(e.guildId),
      a = i.default.getRoles(e.guildId);
    null != n && this.put(l.attachRoles(n, a), t)
  }
  handleGuildMemberAdd(e, t) {
    if (null != e.joinedAt && e.user.id === s.default.getId()) {
      let n = i.default.getGuild(e.guildId);
      null != n && this.put(l.attachRoles(n.updateJoinedAt(e.joinedAt), i.default.getRoles(n.id)), t)
    }
  }
  resetInMemoryState() {}
  putOne(e, t) {
    let n = i.default.getGuild(e.id),
      a = l.attachRoles(l.fromServer(e, n), e.roles instanceof Array ? (0, r.sortServerRoles)(e.id, e.roles) : e.roles);
    this.put(a, t)
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