"use strict";
s.r(t), s("47120");
var n = s("710845"),
  a = s("314897"),
  l = s("430824"),
  i = s("411198"),
  r = s("625137"),
  o = s("287328");
let u = new n.default("Guilds");
t.default = new class e {
  async getAsync(e) {
    let t = performance.now(),
      s = await o.default.guilds(e).getMany(),
      n = performance.now();
    return u.verbose("loaded in ".concat(n - t, "ms (guilds: ").concat(s.length, ")")), s
  }
  async getOneAsync(e, t) {
    return await o.default.guilds(e).get(t)
  }
  handleBackgroundSync(e, t) {
    for (let s of e.guilds) {
      if ("unavailable" === s.data_mode) return;
      let e = l.default.getGuild(s.id);
      if (null != e) {
        let n = l.default.getRoles(s.id);
        this.put(i.attachRoles(i.fromBackgroundSync(s, e), "partial" === s.data_mode ? i.filterRoleDeletes(s.id, n, s.partial_updates.roles, s.partial_updates.deleted_role_ids) : (0, r.sortServerRoles)(s.id, s.roles)), t)
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
    let s = l.default.getGuild(e.guild.id),
      n = i.fromServerUpdate(e.guild, s);
    this.put(i.attachRoles(n, (0, r.sortServerRoles)(e.guild.id, e.guild.roles)), t)
  }
  handleGuildDelete(e, t) {
    this.delete(e.guild.id, t)
  }
  handleGuildRoleChange(e, t) {
    let s = l.default.getGuild(e.guildId),
      n = l.default.getRoles(e.guildId);
    null != s && this.put(i.attachRoles(s, n), t)
  }
  handleGuildRoleDelete(e, t) {
    let s = l.default.getGuild(e.guildId),
      n = l.default.getRoles(e.guildId);
    null != s && this.put(i.attachRoles(s, n), t)
  }
  handleGuildMemberAdd(e, t) {
    if (null != e.joinedAt && e.user.id === a.default.getId()) {
      let s = l.default.getGuild(e.guildId);
      null != s && this.put(i.attachRoles(s.updateJoinedAt(e.joinedAt), l.default.getRoles(s.id)), t)
    }
  }
  resetInMemoryState() {}
  putOne(e, t) {
    let s = l.default.getGuild(e.id),
      n = i.attachRoles(i.fromServer(e, s), e.roles instanceof Array ? (0, r.sortServerRoles)(e.id, e.roles) : e.roles);
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