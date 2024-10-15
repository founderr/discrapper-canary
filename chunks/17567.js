n(47120);
var s = n(710845),
    a = n(314897),
    r = n(271383),
    i = n(430824),
    l = n(411198),
    o = n(625137),
    c = n(287328);
let d = new s.Z('Guilds');
t.Z = new (class e {
    async getAsync(e) {
        let t = performance.now(),
            n = await c.Z.guilds(e).getMany(),
            s = performance.now();
        return d.verbose('loaded in '.concat(s - t, 'ms (guilds: ').concat(n.length, ')')), n;
    }
    async getOneAsync(e, t) {
        return await c.Z.guilds(e).get(t);
    }
    handleBackgroundSync(e, t) {
        for (let n of e.guilds) {
            if ('unavailable' === n.data_mode) return;
            let e = i.Z.getGuild(n.id);
            if (null != e) {
                let s = i.Z.getRoles(n.id),
                    a = 'partial' === n.data_mode ? l.EO(n.id, s, n.partial_updates.roles, n.partial_updates.deleted_role_ids) : (0, o.C5)(n.id, n.roles);
                this.put(
                    l.rk(l.sp(n, e), {
                        roles: a,
                        member: r.ZP.getSelfMember(n.id)
                    }),
                    t
                );
            }
        }
    }
    handleConnectionOpen(e, t) {
        for (let n of (this.clear(t), e.guilds)) this.putOne(n, t);
    }
    handleGuildCreate(e, t) {
        this.putOne(e.guild, t);
    }
    handleGuildUpdate(e, t) {
        let n = i.Z.getGuild(e.guild.id),
            s = l.di(e.guild, n);
        this.put(
            l.rk(s, {
                roles: (0, o.C5)(e.guild.id, e.guild.roles),
                member: r.ZP.getSelfMember(e.guild.id)
            }),
            t
        );
    }
    handleGuildDelete(e, t) {
        this.delete(e.guild.id, t);
    }
    handleGuildRoleChange(e, t) {
        let n = i.Z.getGuild(e.guildId),
            s = i.Z.getRoles(e.guildId);
        null != n &&
            this.put(
                l.rk(n, {
                    roles: {
                        ...s,
                        [e.role.id]: e.role
                    },
                    member: r.ZP.getSelfMember(e.guildId)
                }),
                t
            );
    }
    handleGuildRoleDelete(e, t) {
        let n = i.Z.getGuild(e.guildId);
        if (null != n) {
            let s = { ...i.Z.getRoles(e.guildId) };
            delete s[e.roleId];
            let a = r.ZP.getSelfMember(e.guildId);
            null != a &&
                (a = {
                    ...a,
                    roles: a.roles.filter((t) => t !== e.roleId)
                }),
                this.put(
                    l.rk(n, {
                        roles: s,
                        member: a
                    }),
                    t
                );
        }
    }
    handleGuildMemberAdd(e, t) {
        if (null != e.joinedAt && e.user.id === a.default.getId()) {
            let n = i.Z.getGuild(e.guildId);
            null != n &&
                this.put(
                    l.rk(n.updateJoinedAt(e.joinedAt), {
                        roles: i.Z.getRoles(n.id),
                        member: r.ZP.getSelfMember(n.id)
                    }),
                    t
                );
        }
    }
    handleGuildMemberUpdate(e, t) {
        if (e.user.id !== a.default.getId()) return;
        let n = i.Z.getGuild(e.guildId);
        if (null != n)
            this.put(
                l.rk(n, {
                    member: {
                        roles: e.roles,
                        userId: e.user.id
                    },
                    roles: i.Z.getRoles(n.id)
                }),
                t
            );
    }
    resetInMemoryState() {}
    putOne(e, t) {
        let n = e.members.find((e) => e.user.id === a.default.getId()),
            s = i.Z.getGuild(e.id),
            r = l.rk(l.wD(e, s), {
                roles: e.roles instanceof Array ? (0, o.C5)(e.id, e.roles) : e.roles,
                member:
                    null != n
                        ? {
                              userId: n.user.id,
                              roles: n.roles
                          }
                        : void 0
            });
        this.put(r, t);
    }
    put(e, t) {
        c.Z.guildsTransaction(t).put(e);
    }
    delete(e, t) {
        c.Z.guildsTransaction(t).delete(e);
    }
    clear(e) {
        c.Z.guildsTransaction(e).delete();
    }
    constructor() {
        var e, t, n;
        (e = this),
            (t = 'actions'),
            (n = {
                BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
                CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
                GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                GUILD_MEMBER_ADD: (e, t) => this.handleGuildMemberAdd(e, t),
                GUILD_MEMBER_UPDATE: (e, t) => this.handleGuildMemberUpdate(e, t),
                GUILD_ROLE_CREATE: (e, t) => this.handleGuildRoleChange(e, t),
                GUILD_ROLE_DELETE: (e, t) => this.handleGuildRoleDelete(e, t),
                GUILD_ROLE_UPDATE: (e, t) => this.handleGuildRoleChange(e, t),
                GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
            }),
            t in e
                ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (e[t] = n);
    }
})();
