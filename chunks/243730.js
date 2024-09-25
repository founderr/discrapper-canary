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
let s = 120000,
    l = {},
    u = {};
function c(e) {
    let { guildId: t, roleMemberCount: n } = e;
    (l[t] = n), (u[t] = Date.now());
}
function d(e) {
    let { guildId: t, roleId: n, count: r } = e,
        i = l[t];
    if (null == i) return !1;
    i[n] = r;
}
function _(e) {
    let { guildId: t, roleId: n, added: r } = e,
        i = l[t];
    if (null == i || null == i[n]) return !1;
    let a = Object.keys(r).length;
    i[n] += a;
}
function E(e) {
    let { guildId: t, roleId: n } = e,
        r = l[t];
    if (null == r || null == r[n]) return !1;
    r[n] = r[n] + 1;
}
function f(e) {
    let { guildId: t, roleId: n } = e,
        r = l[t];
    if (null == r || null == r[n]) return !1;
    r[n] = Math.max(r[n] - 1, 0);
}
function h(e) {
    let { guildId: t, role: n } = e;
    null == l[t] && (l[t] = {}), (l[t][n.id] = 0);
}
function p(e) {
    let { guild: t } = e;
    delete l[t.id], delete u[t.id];
}
class m extends (r = i.ZP.Store) {
    getRoleMemberCount(e) {
        return null != e ? l[e] : null;
    }
    shouldFetch(e) {
        if (null == e) return !1;
        let t = u[e];
        return null == t || Date.now() - t > s;
    }
}
o(m, 'displayName', 'GuildRoleMemberCountStore'),
    (t.Z = new m(a.Z, {
        GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: c,
        GUILD_ROLE_MEMBER_COUNT_UPDATE: d,
        GUILD_ROLE_MEMBER_BULK_ADD: _,
        GUILD_ROLE_MEMBER_ADD: E,
        GUILD_ROLE_MEMBER_REMOVE: f,
        GUILD_ROLE_CREATE: h,
        GUILD_DELETE: p
    }));
