let r;
n(47120);
var i,
    a,
    s,
    o,
    l = n(442837),
    u = n(902704),
    c = n(570140),
    d = n(601964),
    f = n(411198),
    _ = n(625137),
    p = n(709054),
    h = n(314897),
    m = n(981631),
    g = n(647086);
let E = {},
    v = {},
    I = !1,
    b = [];
function T(e) {
    for (let t of ((v = {}), (E = {}), (r = 0), e)) r++, (v[t.id] = f.cL(t)), (E[t.id] = t.roles);
}
function S(e) {
    let { guildId: t, role: n } = e,
        r = E[t],
        i = _.CL(n),
        a = null == r ? void 0 : r[i.id];
    if (null != a && (0, u.Z)(i, a)) return !1;
    (r = {
        ...r,
        [n.id]: _.CL(n)
    }),
        (r = _.iw(t, Object.values(r))),
        (E[t] = r);
}
let y = Object.freeze({});
class A extends (i = l.ZP.Store) {
    getGuild(e) {
        return null == e ? void 0 : e === m.I_8 ? g.g : v[e];
    }
    getGuilds() {
        return v;
    }
    getGuildIds() {
        return p.default.keys(v);
    }
    getGuildCount() {
        return r;
    }
    isLoaded() {
        return I;
    }
    getGeoRestrictedGuilds() {
        return b;
    }
    getAllGuildsRoles() {
        return E;
    }
    getRoles(e) {
        var t;
        return null !== (t = E[e]) && void 0 !== t ? t : y;
    }
    getRole(e, t) {
        var n;
        return null === (n = E[e]) || void 0 === n ? void 0 : n[t];
    }
}
(o = 'GuildStore'),
    (s = 'displayName') in (a = A)
        ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = o),
    (t.Z = new A(c.Z, {
        BACKGROUND_SYNC: function (e) {
            for (let n of e.guilds) {
                var t;
                let e = v[n.id];
                if (null == e || 'unavailable' === n.data_mode) return;
                (v[n.id] = f.sp(n, e)), (E[n.id] = 'partial' === n.data_mode ? f.EO(n.id, null !== (t = E[n.id]) && void 0 !== t ? t : y, n.partial_updates.roles, n.partial_updates.deleted_role_ids) : _.C5(n.id, n.roles));
            }
            r = Object.keys(v).length;
        },
        CONNECTION_OPEN: function (e) {
            I = !0;
            let t = v;
            (v = {}),
                (E = {}),
                (r = 0),
                e.guilds.forEach((e) => {
                    r++, (v[e.id] = f.wD(e, t[e.id])), (E[e.id] = e.roles instanceof Array ? _.C5(e.id, e.roles) : e.roles);
                });
            let n = !1;
            if (b.length !== e.geoRestrictedGuilds.length) n = !0;
            else
                for (let t = 0; t < e.geoRestrictedGuilds.length; t++)
                    if (!(0, u.Z)(b[t], e.geoRestrictedGuilds[t])) {
                        n = !0;
                        break;
                    }
            n && (b = e.geoRestrictedGuilds);
        },
        OVERLAY_INITIALIZE: function (e) {
            var t;
            (v = {}),
                (E = {}),
                (r = 0),
                null === (t = e.guilds) ||
                    void 0 === t ||
                    t.forEach((e) => {
                        r++, (v[e.id] = new d.ZP(e));
                    }),
                (E = e.allGuildsRoles);
        },
        CACHE_LOADED: function (e) {
            T(e.guilds);
        },
        CACHE_LOADED_LAZY: function (e) {
            if (0 === e.guilds.length) return !1;
            T(e.guilds);
        },
        GUILD_CREATE: function (e) {
            let t = f.wD(e.guild, v[e.guild.id]);
            null == v[t.id] && r++,
                (v = {
                    ...v,
                    [t.id]: t
                }),
                (E[t.id] = e.guild.roles instanceof Array ? _.C5(t.id, e.guild.roles) : e.guild.roles);
        },
        GUILD_UPDATE: function (e) {
            let t = f.di(e.guild, v[e.guild.id]);
            null == v[t.id] && r++,
                (v = {
                    ...v,
                    [t.id]: t
                }),
                (E[t.id] = _.C5(t.id, e.guild.roles));
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e,
                n = b.findIndex((e) => e.id === t.id);
            if (-1 !== n) {
                b.splice(n, 1), (b = [...b]);
                return;
            }
            if (null == v[t.id] || t.unavailable) return !1;
            (v = { ...v }), delete v[t.id], (E[t.id] = void 0), r--;
        },
        GUILD_ROLE_CREATE: S,
        GUILD_ROLE_UPDATE: S,
        GUILD_ROLE_DELETE: function (e) {
            let { guildId: t, roleId: n } = e,
                r = E[t];
            if (null == r) return !1;
            (r = { ...r }), delete r[n], (E[t] = r);
        },
        GUILD_MEMBER_ADD: function (e) {
            let { guildId: t, joinedAt: n, user: r } = e,
                i = h.default.getId(),
                a = v[t];
            if (i !== r.id || null == a) return !1;
            let s = 'string' == typeof n ? new Date(n) : n;
            if (s === a.joinedAt || null == s) return !1;
            v = {
                ...v,
                [t]: a.updateJoinedAt(s)
            };
        },
        GUILD_SETTINGS_SUBMIT_SUCCESS: function () {
            return !0;
        },
        GUILD_GEO_RESTRICTED: function (e) {
            b = [
                ...b,
                {
                    id: e.guildId,
                    name: e.name,
                    icon: e.icon,
                    unavailable: !0,
                    geo_restricted: !0
                }
            ];
        }
    }));
