var r,
    i = n(47120);
var a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(570140),
    u = n(710845),
    c = n(430824);
function d(e, t, n) {
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
let _ = new u.Z('GuildAvailabilityStore'),
    E = new Set();
function f(e) {
    (E = new Set(e.unavailableGuilds)), e.unavailableGuilds.length > 0 && _.warn(''.concat(e.unavailableGuilds.length, ' guilds are unavailable on connection open: ').concat(e.unavailableGuilds));
}
function h(e) {
    if (!E.has(e.guildId)) return !1;
    E.delete(e.guildId);
}
function p(e) {
    if (E.has(e.guildId)) return !1;
    let t = c.Z.getGuild(e.guildId),
        n = '???';
    null != t && null != t.name && (n = t.name), _.warn('Guild has gone unavailable: '.concat(e.guildId, ' (').concat(n, ')')), E.add(e.guildId);
}
function m(e) {
    if (!E.has(e.guild.id)) return !1;
    E.delete(e.guild.id), _.info('Guild has become available: '.concat(e.guild.id));
}
function I(e) {
    !0 !== e.guild.unavailable && E.delete(e.guild.id);
}
class T extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(c.Z);
    }
    isUnavailable(e) {
        return null != e && E.has(e);
    }
    get totalGuilds() {
        return o().size(c.Z.getGuilds()) + E.size;
    }
    get totalUnavailableGuilds() {
        return E.size;
    }
    get unavailableGuilds() {
        return Array.from(E);
    }
}
d(T, 'displayName', 'GuildAvailabilityStore'),
    (t.Z = new T(l.Z, {
        CONNECTION_OPEN: f,
        OVERLAY_INITIALIZE: f,
        GUILD_UNAVAILABLE: p,
        GUILD_DELETE: I,
        GUILD_CREATE: m,
        GUILD_UPDATE: m,
        GUILD_GEO_RESTRICTED: h
    }));
