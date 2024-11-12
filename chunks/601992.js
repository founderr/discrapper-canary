n.d(t, {
    R: function () {
        return l;
    }
});
var r = n(442837),
    i = n(570140),
    a = n(271383),
    s = n(9156),
    o = n(594174);
function l(e, t) {
    var n;
    let r = null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
        l = s.ZP.isSuppressEveryoneEnabled(t),
        u = s.ZP.isSuppressRolesEnabled(t),
        c = null != e.mentions && e.mentions.some((e) => e.id === r),
        d = null == t || null == r ? null : a.ZP.getMember(t, r),
        f = null != e.mention_roles && null != d && null != d.roles && e.mention_roles.some((e) => d.roles.includes(e));
    i.Z.dispatch({
        type: 'MESSAGE_NOTIFICATION_SHOWN',
        guildId: t,
        mentioned: c,
        roleMentioned: f && !u,
        everyoneMentioned: !0 === e.mention_everyone && !l
    });
}
let u = null,
    c = null,
    d = null,
    f = null,
    _ = {},
    p = {},
    h = {},
    m = {};
class g extends r.ZP.Store {
    getGlobalStats() {
        let e = (e) => (null == e ? null : Math.floor((Date.now() - e) / 1000));
        return {
            approx_seconds_since_last_notification: e(u),
            approx_seconds_since_last_mention: e(c),
            approx_seconds_since_last_role_mention: e(d),
            approx_seconds_since_last_everyone_mention: e(f)
        };
    }
    getStats(e) {
        let t = (e) => (null == e ? null : Math.floor((Date.now() - e) / 1000));
        return {
            approx_seconds_since_last_notification: t(u),
            approx_seconds_since_last_mention: t(c),
            approx_seconds_since_last_role_mention: t(d),
            approx_seconds_since_last_everyone_mention: t(f),
            approx_seconds_since_last_guild_notification: null == e ? null : t(_[e]),
            approx_seconds_since_last_guild_mention: null == e ? null : t(p[e]),
            approx_seconds_since_last_guild_role_mention: null == e ? null : t(m[e]),
            approx_seconds_since_last_guild_everyone_mention: null == e ? null : t(h[e])
        };
    }
}
t.Z = new g(i.Z, {
    CONNECTION_OPEN: function () {
        let e = (e) => null != e && Date.now() - e < 60000;
        for (let t in (!e(u) && (u = null), !e(c) && (c = null), !e(d) && (d = null), !e(f) && (f = null), _)) !e(_[t]) && delete _[t];
        for (let t in p) !e(p[t]) && delete p[t];
        for (let t in m) !e(m[t]) && delete m[t];
        for (let t in h) !e(h[t]) && delete h[t];
    },
    MESSAGE_NOTIFICATION_SHOWN: function (e) {
        let { guildId: t, mentioned: n, roleMentioned: r, everyoneMentioned: i } = e,
            a = Date.now();
        (u = a), null != t && (_[t] = a), n && ((c = a), null != t && (p[t] = a)), r && ((d = a), null != t && (m[t] = a)), i && ((f = a), null != t && (h[t] = a));
    }
});
