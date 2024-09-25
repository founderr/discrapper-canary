var r,
    i = n(47120);
var a = n(442837),
    o = n(570140),
    s = n(353926),
    l = n(581883),
    u = n(430824),
    c = n(496675),
    d = n(709054),
    _ = n(533244);
function E(e, t, n) {
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
let f = {},
    h = {};
function p() {
    var e;
    let t = null !== (e = l.Z.getGuildsProto()) && void 0 !== e ? e : {},
        n = u.Z.getGuilds(),
        r = d.default.keys(n);
    for (let e of ((h = {}), r))
        h[e] = {
            guildId: e,
            guildName: n[e].name,
            ...t[e]
        };
}
function m(e) {
    return null != e && Object.keys(e).length > 0
        ? {
              raidDetectedAt: e.raid_detected_at,
              dmSpamDetectedAt: e.dm_spam_detected_at,
              dmsDisabledUntil: e.dms_disabled_until,
              invitesDisabledUntil: e.invites_disabled_until
          }
        : null;
}
function I(e) {
    for (let n of ((f = {}), e.guilds)) {
        var t;
        let e = m(null === (t = n.properties) || void 0 === t ? void 0 : t.incidents_data);
        null != e && ((0, _.i9)(e) || (0, _.ur)(e)) && (f[n.id] = e);
    }
}
function T(e) {
    var t;
    let { guild: n } = e,
        r = m(null === (t = n.properties) || void 0 === t ? void 0 : t.incidents_data);
    null != r && ((0, _.i9)(r) || (0, _.ur)(r)) && (f[n.id] = r);
}
function g(e) {
    let { guild: t } = e,
        n = m(t.incidents_data);
    null != n && ((0, _.i9)(n) || (0, _.ur)(n)) ? (f[t.id] = n) : delete f[t.id];
}
function S(e) {
    let { guild: t } = e;
    delete f[t.id];
}
function A(e) {
    f = {};
}
class v extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(l.Z, u.Z, c.Z, s.Z), this.syncWith([l.Z, u.Z, c.Z, s.Z], p);
    }
    getGuildIncident(e) {
        return f[e];
    }
    getIncidentsByGuild() {
        return f;
    }
    getGuildAlertSettings() {
        return h;
    }
}
E(v, 'displayName', 'GuildIncidentsStore'),
    (t.Z = new v(o.Z, {
        CONNECTION_OPEN: I,
        GUILD_CREATE: T,
        GUILD_UPDATE: g,
        GUILD_DELETE: S,
        LOGOUT: A
    }));
