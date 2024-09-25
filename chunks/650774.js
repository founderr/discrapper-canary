var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
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
let s = {},
    l = {};
function u(e) {
    let { guilds: t } = e;
    (s = {}),
        t.forEach((e) => {
            s[e.id] = e.member_count;
        });
}
function c(e) {
    s = { ...e.guildMemberCounts };
}
function d(e) {
    let { guild: t } = e;
    s[t.id] = t.member_count;
}
function _(e) {
    let { guild: t } = e;
    if (null == s[t.id] && null == l[t.id]) return !1;
    delete s[t.id], delete l[t.id];
}
function E(e) {
    let { guildId: t, memberCount: n, onlineCount: r } = e,
        i = !1;
    return s[t] !== n && ((s[t] = n), (i = !0)), l[t] !== r && ((l[t] = r), (i = !0)), i;
}
function f(e) {
    let { invite: t } = e,
        { guild: n, approximate_presence_count: r } = t;
    if ((null == n ? void 0 : n.id) == null || null == r) return !1;
    l[n.id] = r;
}
function h(e) {
    let { guildId: t, count: n } = e;
    if (null == t || null == n) return !1;
    l[t] = n;
}
class p extends (r = i.ZP.Store) {
    getMemberCounts() {
        return s;
    }
    getMemberCount(e) {
        return null != e ? s[e] : null;
    }
    getOnlineCount(e) {
        return null != e ? l[e] : null;
    }
}
o(p, 'displayName', 'GuildMemberCountStore'),
    (t.Z = new p(a.Z, {
        CONNECTION_OPEN: u,
        OVERLAY_INITIALIZE: c,
        GUILD_CREATE: d,
        GUILD_DELETE: _,
        GUILD_MEMBER_LIST_UPDATE: E,
        INVITE_ACCEPT_SUCCESS: f,
        INVITE_RESOLVE_SUCCESS: f,
        ONLINE_GUILD_MEMBER_COUNT_UPDATE: h
    }));
