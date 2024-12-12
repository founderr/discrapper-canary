var i,
    a = r(47120);
var s = r(392711),
    o = r.n(s),
    l = r(442837),
    u = r(570140),
    c = r(537986),
    d = r(592125),
    f = r(271383);
function _(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let h = new c.Z(f.ZP.isMember, (e, n) => {
    u.Z.dispatch({
        type: 'GUILD_MEMBERS_REQUEST',
        guildIds: [e],
        userIds: n
    });
});
function p() {
    h.reset();
}
function m(e) {
    let { chunks: n } = e;
    for (let e of n)
        e.members.forEach((n) => {
            h.acknowledge(e.guildId, n.user.id);
        }),
            null != e.notFound && e.notFound.forEach((n) => h.acknowledge(e.guildId, n));
    return !1;
}
function g() {
    return h.requestUnacknowledged(), !1;
}
function E(e, n) {
    return h.request(e, n), !1;
}
function v(e, n) {
    return (
        n.forEach((n) => {
            let { author: r, mentions: i } = n;
            null != r && E(e, r.id), null == i || i.forEach((n) => E(e, n.id));
        }),
        !1
    );
}
function I(e) {
    let { channelId: n, messages: r } = e,
        i = d.Z.getChannel(n);
    return null != i && null != i.guild_id && v(i.guild_id, r);
}
function T(e) {
    let { guildId: n, messages: r } = e;
    return null != n && v(n, o().flatten(r));
}
class b extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, f.ZP);
    }
    requestMember(e, n) {
        E(e, n);
    }
}
_(b, 'displayName', 'GuildMemberRequesterStore'),
    (n.Z = new b(u.Z, {
        CONNECTION_CLOSED: p,
        CONNECTION_OPEN: p,
        CONNECTION_RESUMED: g,
        GUILD_MEMBERS_CHUNK_BATCH: m,
        SEARCH_FINISH: T,
        MOD_VIEW_SEARCH_FINISH: T,
        LOCAL_MESSAGES_LOADED: I,
        LOAD_MESSAGES_SUCCESS: I,
        LOAD_MESSAGES_AROUND_SUCCESS: I,
        LOAD_PINNED_MESSAGES_SUCCESS: I,
        LOAD_RECENT_MENTIONS_SUCCESS: I
    }));
