r.d(n, {
    R: function () {
        return u;
    }
});
var i = r(442837),
    a = r(570140),
    s = r(271383),
    o = r(9156),
    l = r(594174);
function u(e, n) {
    var r;
    let i = null === (r = l.default.getCurrentUser()) || void 0 === r ? void 0 : r.id,
        u = o.ZP.isSuppressEveryoneEnabled(n),
        c = o.ZP.isSuppressRolesEnabled(n),
        d = null != e.mentions && e.mentions.some((e) => e.id === i),
        f = null == n || null == i ? null : s.ZP.getMember(n, i),
        _ = null != e.mention_roles && null != f && null != f.roles && e.mention_roles.some((e) => f.roles.includes(e));
    a.Z.dispatch({
        type: 'MESSAGE_NOTIFICATION_SHOWN',
        guildId: n,
        mentioned: d,
        roleMentioned: _ && !c,
        everyoneMentioned: !0 === e.mention_everyone && !u
    });
}
let c = null,
    d = null,
    f = null,
    _ = null,
    h = {},
    p = {},
    m = {},
    g = {};
function E() {
    let e = (e) => null != e && Date.now() - e < 60000;
    for (let n in (!e(c) && (c = null), !e(d) && (d = null), !e(f) && (f = null), !e(_) && (_ = null), h)) !e(h[n]) && delete h[n];
    for (let n in p) !e(p[n]) && delete p[n];
    for (let n in g) !e(g[n]) && delete g[n];
    for (let n in m) !e(m[n]) && delete m[n];
}
function v(e) {
    let { guildId: n, mentioned: r, roleMentioned: i, everyoneMentioned: a } = e,
        s = Date.now();
    (c = s), null != n && (h[n] = s), r && ((d = s), null != n && (p[n] = s)), i && ((f = s), null != n && (g[n] = s)), a && ((_ = s), null != n && (m[n] = s));
}
class I extends i.ZP.Store {
    getGlobalStats() {
        let e = (e) => (null == e ? null : Math.floor((Date.now() - e) / 1000));
        return {
            approx_seconds_since_last_notification: e(c),
            approx_seconds_since_last_mention: e(d),
            approx_seconds_since_last_role_mention: e(f),
            approx_seconds_since_last_everyone_mention: e(_)
        };
    }
    getStats(e) {
        let n = (e) => (null == e ? null : Math.floor((Date.now() - e) / 1000));
        return {
            approx_seconds_since_last_notification: n(c),
            approx_seconds_since_last_mention: n(d),
            approx_seconds_since_last_role_mention: n(f),
            approx_seconds_since_last_everyone_mention: n(_),
            approx_seconds_since_last_guild_notification: null == e ? null : n(h[e]),
            approx_seconds_since_last_guild_mention: null == e ? null : n(p[e]),
            approx_seconds_since_last_guild_role_mention: null == e ? null : n(g[e]),
            approx_seconds_since_last_guild_everyone_mention: null == e ? null : n(m[e])
        };
    }
}
n.Z = new I(a.Z, {
    CONNECTION_OPEN: E,
    MESSAGE_NOTIFICATION_SHOWN: v
});
