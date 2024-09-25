let r;
var i,
    a = n(47120);
var o = n(442837),
    s = n(902704),
    l = n(570140),
    u = n(601964),
    c = n(411198),
    d = n(625137),
    _ = n(709054),
    E = n(314897),
    f = n(981631),
    h = n(647086);
function p(e, t, n) {
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
let m = {},
    I = {},
    T = !1,
    g = [];
function S(e) {
    T = !0;
    let t = I;
    (I = {}),
        (m = {}),
        (r = 0),
        e.guilds.forEach((e) => {
            r++, (I[e.id] = c.wD(e, t[e.id])), (m[e.id] = e.roles instanceof Array ? d.C5(e.id, e.roles) : e.roles);
        });
    let n = !1;
    if (g.length !== e.geoRestrictedGuilds.length) n = !0;
    else
        for (let t = 0; t < e.geoRestrictedGuilds.length; t++)
            if (!(0, s.Z)(g[t], e.geoRestrictedGuilds[t])) {
                n = !0;
                break;
            }
    n && (g = e.geoRestrictedGuilds);
}
function A(e) {
    for (let n of e.guilds) {
        var t;
        let e = I[n.id];
        if (null == e || 'unavailable' === n.data_mode) return;
        (I[n.id] = c.sp(n, e)), (m[n.id] = 'partial' === n.data_mode ? c.EO(n.id, null !== (t = m[n.id]) && void 0 !== t ? t : w, n.partial_updates.roles, n.partial_updates.deleted_role_ids) : d.C5(n.id, n.roles));
    }
    r = Object.keys(I).length;
}
function v(e) {
    for (let t of ((I = {}), (m = {}), (r = 0), e)) r++, (I[t.id] = c.cL(t)), (m[t.id] = t.roles);
}
function N(e) {
    v(e.guilds);
}
function O(e) {
    if (0 === e.guilds.length) return !1;
    v(e.guilds);
}
function R(e) {
    var t;
    (I = {}),
        (m = {}),
        (r = 0),
        null === (t = e.guilds) ||
            void 0 === t ||
            t.forEach((e) => {
                r++, (I[e.id] = new u.ZP(e));
            }),
        (m = e.allGuildsRoles);
}
function C(e) {
    let t = c.wD(e.guild, I[e.guild.id]);
    null == I[t.id] && r++,
        (I = {
            ...I,
            [t.id]: t
        }),
        (m[t.id] = e.guild.roles instanceof Array ? d.C5(t.id, e.guild.roles) : e.guild.roles);
}
function y(e) {
    let t = c.di(e.guild, I[e.guild.id]);
    null == I[t.id] && r++,
        (I = {
            ...I,
            [t.id]: t
        }),
        (m[t.id] = d.C5(t.id, e.guild.roles));
}
function b(e) {
    g = [
        ...g,
        {
            id: e.guildId,
            name: e.name,
            icon: e.icon,
            unavailable: !0,
            geo_restricted: !0
        }
    ];
}
function L(e) {
    let { guild: t } = e,
        n = g.findIndex((e) => e.id === t.id);
    if (-1 !== n) {
        g.splice(n, 1), (g = [...g]);
        return;
    }
    if (null == I[t.id] || t.unavailable) return !1;
    (I = { ...I }), delete I[t.id], (m[t.id] = void 0), r--;
}
function D(e) {
    let { guildId: t, role: n } = e,
        r = m[t],
        i = d.CL(n),
        a = null == r ? void 0 : r[i.id];
    if (null != a && (0, s.Z)(i, a)) return !1;
    (r = {
        ...r,
        [n.id]: d.CL(n)
    }),
        (r = d.iw(t, Object.values(r))),
        (m[t] = r);
}
function M(e) {
    let { guildId: t, roleId: n } = e,
        r = m[t];
    if (null == r) return !1;
    (r = { ...r }), delete r[n], (m[t] = r);
}
function P(e) {
    let { guildId: t, joinedAt: n, user: r } = e,
        i = E.default.getId(),
        a = I[t];
    if (i !== r.id || null == a) return !1;
    let o = 'string' == typeof n ? new Date(n) : n;
    if (o === a.joinedAt || null == o) return !1;
    I = {
        ...I,
        [t]: a.updateJoinedAt(o)
    };
}
function U() {
    return !0;
}
let w = Object.freeze({});
class x extends (i = o.ZP.Store) {
    getGuild(e) {
        return null == e ? void 0 : e === f.I_8 ? h.g : I[e];
    }
    getGuilds() {
        return I;
    }
    getGuildIds() {
        return _.default.keys(I);
    }
    getGuildCount() {
        return r;
    }
    isLoaded() {
        return T;
    }
    getGeoRestrictedGuilds() {
        return g;
    }
    getAllGuildsRoles() {
        return m;
    }
    getRoles(e) {
        var t;
        return null !== (t = m[e]) && void 0 !== t ? t : w;
    }
    getRole(e, t) {
        var n;
        return null === (n = m[e]) || void 0 === n ? void 0 : n[t];
    }
}
p(x, 'displayName', 'GuildStore'),
    (t.Z = new x(l.Z, {
        BACKGROUND_SYNC: A,
        CONNECTION_OPEN: S,
        OVERLAY_INITIALIZE: R,
        CACHE_LOADED: N,
        CACHE_LOADED_LAZY: O,
        GUILD_CREATE: C,
        GUILD_UPDATE: y,
        GUILD_DELETE: L,
        GUILD_ROLE_CREATE: D,
        GUILD_ROLE_UPDATE: D,
        GUILD_ROLE_DELETE: M,
        GUILD_MEMBER_ADD: P,
        GUILD_SETTINGS_SUBMIT_SUCCESS: U,
        GUILD_GEO_RESTRICTED: b
    }));
