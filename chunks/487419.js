n(47120);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(353926),
    c = n(581883),
    d = n(430824),
    f = n(496675),
    _ = n(709054),
    h = n(533244);
let p = {},
    m = {};
function g() {
    var e;
    let t = null !== (e = c.Z.getGuildsProto()) && void 0 !== e ? e : {},
        n = d.Z.getGuilds(),
        r = _.default.keys(n);
    for (let e of ((m = {}), r))
        m[e] = {
            guildId: e,
            guildName: n[e].name,
            ...t[e]
        };
}
function E(e) {
    return null != e && Object.keys(e).length > 0
        ? {
              raidDetectedAt: e.raid_detected_at,
              dmSpamDetectedAt: e.dm_spam_detected_at,
              dmsDisabledUntil: e.dms_disabled_until,
              invitesDisabledUntil: e.invites_disabled_until
          }
        : null;
}
class v extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, d.Z, f.Z, u.Z), this.syncWith([c.Z, d.Z, f.Z, u.Z], g);
    }
    getGuildIncident(e) {
        return p[e];
    }
    getIncidentsByGuild() {
        return p;
    }
    getGuildAlertSettings() {
        return m;
    }
}
(s = 'GuildIncidentsStore'),
    (a = 'displayName') in (i = v)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new v(l.Z, {
        CONNECTION_OPEN: function (e) {
            for (let n of ((p = {}), e.guilds)) {
                var t;
                let e = E(null === (t = n.properties) || void 0 === t ? void 0 : t.incidents_data);
                null != e && ((0, h.i9)(e) || (0, h.ur)(e)) && (p[n.id] = e);
            }
        },
        GUILD_CREATE: function (e) {
            var t;
            let { guild: n } = e,
                r = E(null === (t = n.properties) || void 0 === t ? void 0 : t.incidents_data);
            null != r && ((0, h.i9)(r) || (0, h.ur)(r)) && (p[n.id] = r);
        },
        GUILD_UPDATE: function (e) {
            let { guild: t } = e,
                n = E(t.incidents_data);
            null != n && ((0, h.i9)(n) || (0, h.ur)(n)) ? (p[t.id] = n) : delete p[t.id];
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            delete p[t.id];
        },
        LOGOUT: function (e) {
            p = {};
        }
    }));
