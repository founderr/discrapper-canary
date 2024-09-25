var r = n(47120);
var i = n(147913),
    a = n(57132),
    o = n(914010),
    s = n(924301),
    l = n(482241);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let c = {},
    d = new Set(),
    _ = 1800000,
    E = async (e) => {
        if (!(0 === s.ZP.getGuildScheduledEventsForGuild(e).length || d.has(e)))
            try {
                await l.Z.getGuildEventsForCurrentUser(e), d.add(e);
            } catch (e) {}
    };
class f extends i.Z {
    async getGuildEventUserCounts(e, t, n) {
        let r = n.filter((n) => null == c[''.concat(e, '-').concat(t, '-').concat(n)] || Date.now() - c[''.concat(e, '-').concat(t, '-').concat(n)] > _);
        if (!(Date.now() - c[''.concat(e, '-').concat(t)] < _) || 0 !== r.length) {
            (c[''.concat(e, '-').concat(t)] = Date.now()), r.forEach((n) => (c[''.concat(e, '-').concat(t, '-').concat(n)] = Date.now()));
            try {
                await l.Z.fetchGuildEventUserCounts(e, t, r);
            } catch (e) {}
        }
    }
    getGuildEventUsers(e, t, n) {
        return l.Z.fetchUsersForGuildEvent(e, t, n);
    }
    getGuildEventsForCurrentUser(e) {
        return E(e);
    }
    async handleConnectionOpen() {
        d.clear(), (c = {});
        let e = (0, a.cn)(),
            t = o.Z.getLastSelectedGuildId();
        if (e && null != t) for (let e of s.ZP.getGuildScheduledEventsForGuild(t)) await this.getGuildEventUserCounts(t, e.id, []), await new Promise((e) => setTimeout(e, 200 * Math.random() + 50));
    }
    handleGuildUnavailable(e) {
        let { guildId: t } = e;
        d.delete(t), delete c[t];
    }
    handleGuildDelete(e) {
        let { guild: t } = e,
            n = t.id;
        d.delete(n), delete c[n];
    }
    handleInviteResolveSuccess(e) {
        var t;
        let { invite: n } = e,
            r = n.guild_scheduled_event,
            i = null === (t = n.guild) || void 0 === t ? void 0 : t.id;
        if (null != r && null != i) E(i);
    }
    async handleChannelSelect(e) {
        let { guildId: t } = e;
        if (null != t)
            for (let e of s.ZP.getGuildScheduledEventsForGuild(t))
                try {
                    await this.getGuildEventUserCounts(t, e.id, []);
                } finally {
                    await new Promise((e) => setTimeout(e, 200 * Math.random() + 50));
                }
    }
    constructor(...e) {
        super(...e),
            u(this, 'actions', {
                POST_CONNECTION_OPEN: () => this.handleConnectionOpen(),
                GUILD_DELETE: (e) => this.handleGuildDelete(e),
                GUILD_UNAVAILABLE: (e) => this.handleGuildUnavailable(e),
                INVITE_RESOLVE_SUCCESS: (e) => this.handleInviteResolveSuccess(e),
                CHANNEL_SELECT: (e) => this.handleChannelSelect(e)
            });
    }
}
t.Z = new f();
