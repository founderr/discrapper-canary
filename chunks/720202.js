n(47120);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(570140),
    d = n(537986),
    f = n(592125),
    _ = n(271383);
let h = new d.Z(_.ZP.isMember, (e, t) => {
    c.Z.dispatch({
        type: 'GUILD_MEMBERS_REQUEST',
        guildIds: [e],
        userIds: t
    });
});
function p() {
    h.reset();
}
function m(e, t) {
    return h.request(e, t), !1;
}
function g(e, t) {
    return (
        t.forEach((t) => {
            let { author: n, mentions: r } = t;
            null != n && m(e, n.id), null == r || r.forEach((t) => m(e, t.id));
        }),
        !1
    );
}
function E(e) {
    let { channelId: t, messages: n } = e,
        r = f.Z.getChannel(t);
    return null != r && null != r.guild_id && g(r.guild_id, n);
}
function v(e) {
    let { guildId: t, messages: n } = e;
    return null != t && g(t, l().flatten(n));
}
class I extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, _.ZP);
    }
    requestMember(e, t) {
        m(e, t);
    }
}
(s = 'GuildMemberRequesterStore'),
    (a = 'displayName') in (i = I)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new I(c.Z, {
        CONNECTION_CLOSED: p,
        CONNECTION_OPEN: p,
        CONNECTION_RESUMED: function () {
            return h.requestUnacknowledged(), !1;
        },
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {
            let { chunks: t } = e;
            for (let e of t)
                e.members.forEach((t) => {
                    h.acknowledge(e.guildId, t.user.id);
                }),
                    null != e.notFound && e.notFound.forEach((t) => h.acknowledge(e.guildId, t));
            return !1;
        },
        SEARCH_FINISH: v,
        MOD_VIEW_SEARCH_FINISH: v,
        LOCAL_MESSAGES_LOADED: E,
        LOAD_MESSAGES_SUCCESS: E,
        LOAD_MESSAGES_AROUND_SUCCESS: E,
        LOAD_PINNED_MESSAGES_SUCCESS: E,
        LOAD_RECENT_MENTIONS_SUCCESS: E
    }));
