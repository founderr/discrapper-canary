n(47120);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(570140),
    d = n(710845),
    f = n(430824);
let _ = new d.Z('GuildAvailabilityStore'),
    p = new Set();
function h(e) {
    (p = new Set(e.unavailableGuilds)), e.unavailableGuilds.length > 0 && _.warn(''.concat(e.unavailableGuilds.length, ' guilds are unavailable on connection open: ').concat(e.unavailableGuilds));
}
function m(e) {
    if (!p.has(e.guild.id)) return !1;
    p.delete(e.guild.id), _.info('Guild has become available: '.concat(e.guild.id));
}
class g extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(f.Z);
    }
    isUnavailable(e) {
        return null != e && p.has(e);
    }
    get totalGuilds() {
        return l().size(f.Z.getGuilds()) + p.size;
    }
    get totalUnavailableGuilds() {
        return p.size;
    }
    get unavailableGuilds() {
        return Array.from(p);
    }
}
(s = 'GuildAvailabilityStore'),
    (a = 'displayName') in (i = g)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new g(c.Z, {
        CONNECTION_OPEN: h,
        OVERLAY_INITIALIZE: h,
        GUILD_UNAVAILABLE: function (e) {
            if (p.has(e.guildId)) return !1;
            let t = f.Z.getGuild(e.guildId),
                n = '???';
            null != t && null != t.name && (n = t.name), _.warn('Guild has gone unavailable: '.concat(e.guildId, ' (').concat(n, ')')), p.add(e.guildId);
        },
        GUILD_DELETE: function (e) {
            !0 !== e.guild.unavailable && p.delete(e.guild.id);
        },
        GUILD_CREATE: m,
        GUILD_UPDATE: m,
        GUILD_GEO_RESTRICTED: function (e) {
            if (!p.has(e.guildId)) return !1;
            p.delete(e.guildId);
        }
    }));
