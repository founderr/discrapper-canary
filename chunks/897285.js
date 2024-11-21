n(47120);
var r = n(147913),
    i = n(914010),
    a = n(924301),
    s = n(482241);
let o = {},
    l = new Set(),
    u = async (e) => {
        if (!(0 === a.ZP.getGuildScheduledEventsForGuild(e).length || l.has(e)))
            try {
                await s.Z.getGuildEventsForCurrentUser(e), l.add(e);
            } catch (e) {}
    };
class c extends r.Z {
    async getGuildEventUserCounts(e, t, n) {
        let r = n.filter((n) => null == o[''.concat(e, '-').concat(t, '-').concat(n)] || Date.now() - o[''.concat(e, '-').concat(t, '-').concat(n)] > 1800000);
        if (!(Date.now() - o[''.concat(e, '-').concat(t)] < 1800000) || 0 !== r.length) {
            (o[''.concat(e, '-').concat(t)] = Date.now()), r.forEach((n) => (o[''.concat(e, '-').concat(t, '-').concat(n)] = Date.now()));
            try {
                await s.Z.fetchGuildEventUserCounts(e, t, r);
            } catch (e) {}
        }
    }
    getGuildEventUsers(e, t, n) {
        return s.Z.fetchUsersForGuildEvent(e, t, n);
    }
    getGuildEventsForCurrentUser(e) {
        return u(e);
    }
    async handleConnectionOpen() {
        l.clear(), (o = {}), i.Z.getLastSelectedGuildId();
    }
    handleGuildUnavailable(e) {
        let { guildId: t } = e;
        l.delete(t), delete o[t];
    }
    handleGuildDelete(e) {
        let { guild: t } = e,
            n = t.id;
        l.delete(n), delete o[n];
    }
    handleInviteResolveSuccess(e) {
        var t;
        let { invite: n } = e,
            r = n.guild_scheduled_event,
            i = null === (t = n.guild) || void 0 === t ? void 0 : t.id;
        if (null != r && null != i) u(i);
    }
    async handleChannelSelect(e) {
        let { guildId: t } = e;
        if (null != t)
            for (let e of a.ZP.getGuildScheduledEventsForGuild(t))
                try {
                    await this.getGuildEventUserCounts(t, e.id, []);
                } finally {
                    await new Promise((e) => setTimeout(e, 200 * Math.random() + 50));
                }
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                POST_CONNECTION_OPEN: () => this.handleConnectionOpen(),
                GUILD_DELETE: (e) => this.handleGuildDelete(e),
                GUILD_UNAVAILABLE: (e) => this.handleGuildUnavailable(e),
                INVITE_RESOLVE_SUCCESS: (e) => this.handleInviteResolveSuccess(e),
                CHANNEL_SELECT: (e) => this.handleChannelSelect(e)
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
t.Z = new c();
