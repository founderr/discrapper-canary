let i;
var a,
    s = r(47120);
var o = r(442837),
    l = r(902704),
    u = r(570140),
    c = r(601964),
    d = r(411198),
    f = r(625137),
    _ = r(709054),
    h = r(314897),
    p = r(981631),
    m = r(647086);
function g(e, n, r) {
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
let E = {},
    v = {},
    I = !1,
    T = [];
function b(e) {
    I = !0;
    let n = v;
    (v = {}),
        (E = {}),
        (i = 0),
        e.guilds.forEach((e) => {
            i++, (v[e.id] = d.wD(e, n[e.id])), (E[e.id] = e.roles instanceof Array ? f.C5(e.id, e.roles) : e.roles);
        });
    let r = !1;
    if (T.length !== e.geoRestrictedGuilds.length) r = !0;
    else
        for (let n = 0; n < e.geoRestrictedGuilds.length; n++)
            if (!(0, l.Z)(T[n], e.geoRestrictedGuilds[n])) {
                r = !0;
                break;
            }
    r && (T = e.geoRestrictedGuilds);
}
function y(e) {
    for (let r of e.guilds) {
        var n;
        let e = v[r.id];
        if (null == e || 'unavailable' === r.data_mode) return;
        (v[r.id] = d.sp(r, e)), (E[r.id] = 'partial' === r.data_mode ? d.EO(r.id, null !== (n = E[r.id]) && void 0 !== n ? n : k, r.partial_updates.roles, r.partial_updates.deleted_role_ids) : f.C5(r.id, r.roles));
    }
    i = Object.keys(v).length;
}
function S(e) {
    for (let n of ((v = {}), (E = {}), (i = 0), e)) i++, (v[n.id] = d.cL(n)), (E[n.id] = n.roles);
}
function A(e) {
    S(e.guilds);
}
function N(e) {
    if (0 === e.guilds.length) return !1;
    S(e.guilds);
}
function C(e) {
    var n;
    (v = {}),
        (E = {}),
        (i = 0),
        null === (n = e.guilds) ||
            void 0 === n ||
            n.forEach((e) => {
                i++, (v[e.id] = new c.ZP(e));
            }),
        (E = e.allGuildsRoles);
}
function R(e) {
    let n = d.wD(e.guild, v[e.guild.id]);
    null == v[n.id] && i++,
        (v = {
            ...v,
            [n.id]: n
        }),
        (E[n.id] = e.guild.roles instanceof Array ? f.C5(n.id, e.guild.roles) : e.guild.roles);
}
function O(e) {
    let n = d.di(e.guild, v[e.guild.id]);
    null == v[n.id] && i++,
        (v = {
            ...v,
            [n.id]: n
        }),
        (E[n.id] = f.C5(n.id, e.guild.roles));
}
function D(e) {
    T = [
        ...T,
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
    let { guild: n } = e,
        r = T.findIndex((e) => e.id === n.id);
    if (-1 !== r) {
        T.splice(r, 1), (T = [...T]);
        return;
    }
    if (null == v[n.id] || n.unavailable) return !1;
    (v = { ...v }), delete v[n.id], (E[n.id] = void 0), i--;
}
function x(e) {
    let { guildId: n, role: r } = e,
        i = E[n],
        a = f.CL(r),
        s = null == i ? void 0 : i[a.id];
    if (null != s && (0, l.Z)(a, s)) return !1;
    (i = {
        ...i,
        [r.id]: f.CL(r)
    }),
        (i = f.iw(n, Object.values(i))),
        (E[n] = i);
}
function w(e) {
    let { guildId: n, roleId: r } = e,
        i = E[n];
    if (null == i) return !1;
    (i = { ...i }), delete i[r], (E[n] = i);
}
function P(e) {
    let { guildId: n, joinedAt: r, user: i } = e,
        a = h.default.getId(),
        s = v[n];
    if (a !== i.id || null == s) return !1;
    let o = 'string' == typeof r ? new Date(r) : r;
    if (o === s.joinedAt || null == o) return !1;
    v = {
        ...v,
        [n]: s.updateJoinedAt(o)
    };
}
function M() {
    return !0;
}
let k = Object.freeze({});
class U extends (a = o.ZP.Store) {
    getGuild(e) {
        return null == e ? void 0 : e === p.I_8 ? m.g : v[e];
    }
    getGuilds() {
        return v;
    }
    getGuildIds() {
        return _.default.keys(v);
    }
    getGuildCount() {
        return i;
    }
    isLoaded() {
        return I;
    }
    getGeoRestrictedGuilds() {
        return T;
    }
    getAllGuildsRoles() {
        return E;
    }
    getRoles(e) {
        var n;
        return null !== (n = E[e]) && void 0 !== n ? n : k;
    }
    getRole(e, n) {
        var r;
        return null === (r = E[e]) || void 0 === r ? void 0 : r[n];
    }
}
g(U, 'displayName', 'GuildStore'),
    (n.Z = new U(u.Z, {
        BACKGROUND_SYNC: y,
        CONNECTION_OPEN: b,
        OVERLAY_INITIALIZE: C,
        CACHE_LOADED: A,
        CACHE_LOADED_LAZY: N,
        GUILD_CREATE: R,
        GUILD_UPDATE: O,
        GUILD_DELETE: L,
        GUILD_ROLE_CREATE: x,
        GUILD_ROLE_UPDATE: x,
        GUILD_ROLE_DELETE: w,
        GUILD_MEMBER_ADD: P,
        GUILD_SETTINGS_SUBMIT_SUCCESS: M,
        GUILD_GEO_RESTRICTED: D
    }));
