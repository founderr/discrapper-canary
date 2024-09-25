var r,
    i = n(47120);
var a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(570140),
    u = n(601635),
    c = n(592125),
    d = n(271383);
function _(e, t, n) {
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
let E = new u.Z(d.ZP.isMember, (e, t) => {
    l.Z.dispatch({
        type: 'GUILD_MEMBERS_REQUEST',
        guildIds: [e],
        userIds: t
    });
});
function f() {
    E.reset();
}
function h(e) {
    let { chunks: t } = e;
    for (let e of t)
        e.members.forEach((t) => {
            E.acknowledge(e.guildId, t.user.id);
        }),
            null != e.notFound && e.notFound.forEach((t) => E.acknowledge(e.guildId, t));
    return !1;
}
function p() {
    return E.requestUnacknowledged(), !1;
}
function m(e, t) {
    return E.request(e, t), !1;
}
function I(e, t) {
    return (
        t.forEach((t) => {
            let { author: n, mentions: r } = t;
            null != n && m(e, n.id), null == r || r.forEach((t) => m(e, t.id));
        }),
        !1
    );
}
function T(e) {
    let { channelId: t, messages: n } = e,
        r = c.Z.getChannel(t);
    return null != r && null != r.guild_id && I(r.guild_id, n);
}
function g(e) {
    let { guildId: t, messages: n } = e;
    return null != t && I(t, o().flatten(n));
}
class S extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, d.ZP);
    }
    requestMember(e, t) {
        m(e, t);
    }
}
_(S, 'displayName', 'GuildMemberRequesterStore'),
    (t.Z = new S(l.Z, {
        CONNECTION_CLOSED: f,
        CONNECTION_OPEN: f,
        CONNECTION_RESUMED: p,
        GUILD_MEMBERS_CHUNK_BATCH: h,
        SEARCH_FINISH: g,
        MOD_VIEW_SEARCH_FINISH: g,
        LOCAL_MESSAGES_LOADED: T,
        LOAD_MESSAGES_SUCCESS: T,
        LOAD_MESSAGES_AROUND_SUCCESS: T,
        LOAD_PINNED_MESSAGES_SUCCESS: T,
        LOAD_RECENT_MENTIONS_SUCCESS: T
    }));
