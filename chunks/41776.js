n(47120), n(724458);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(271383),
    c = n(430824),
    d = n(594174),
    f = n(981631);
let _ = [],
    p = {},
    h = null,
    m = null;
function g(e) {
    let t = _.indexOf(e);
    if (t > -1) {
        let n = [..._];
        return n.splice(t, 1), (_ = n), delete p[e], !0;
    }
    return !1;
}
function E(e) {
    return !(e === f.ME || _.includes(e)) && ((_ = [..._, e]), !0);
}
class v extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, d.default);
    }
    setHistorySnapshot(e) {
        h = e;
    }
    getHistorySnapshot() {
        return h;
    }
    lurkingGuildIds() {
        return _;
    }
    mostRecentLurkedGuildId() {
        return 0 === _.length ? null : _[_.length - 1];
    }
    isLurking(e) {
        var t;
        let n = u.ZP.isCurrentUserGuest(e),
            r = null === (t = c.Z.getGuild(e)) || void 0 === t ? void 0 : t.isLurker();
        return !!(!n && r);
    }
    getLurkingSource() {
        return m;
    }
    getLoadId(e) {
        return null != e ? p[e] : null;
    }
}
(s = 'LurkingStore'),
    (a = 'displayName') in (i = v)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new v(l.Z, {
        CONNECTION_OPEN: function () {
            _ = Object.values(c.Z.getGuilds()).reduce((e, t) => (t.isLurker() ? [...e, t.id] : e), []);
        },
        GUILD_JOIN: function (e) {
            let { guildId: t, lurker: n, source: r, directoryChannelId: i, loadId: a } = e;
            if (n) {
                var s, o;
                switch ((E(t), (s = t), null != (o = a) && (p[s] = o), r)) {
                    case f.vtS.MOBILE_GUILD_DISCOVERY:
                        m = { type: f.vtS.MOBILE_GUILD_DISCOVERY };
                        break;
                    case f.vtS.DIRECTORY_ENTRY:
                        m = {
                            type: f.vtS.DIRECTORY_ENTRY,
                            directoryChannelId: i
                        };
                        break;
                    default:
                        m = null;
                }
                return !0;
            }
            return !1;
        },
        GUILD_STOP_LURKING: function (e) {
            let { ignoredGuildIds: t } = e,
                n = (function (e) {
                    let t = new Set([...(null != e ? e : [])]);
                    return [..._].reduce((e, n) => (t.has(n) ? e : g(n) || e), !1);
                })(t);
            return n && ((h = null), (m = null)), n;
        },
        GUILD_STOP_LURKING_FAILURE: function (e) {
            let { lurkingGuildId: t, lurkingSource: n } = e;
            return E(t), (m = n), !0;
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e;
            return !!(null != t.joined_at && _.includes(t.id)) && (g(t.id), (h = null), (m = null), !0);
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            return !!_.includes(t.id) && (g(t.id), (h = null), (m = null), !0);
        },
        GUILD_MEMBER_ADD: function (e) {
            var t;
            let { guildId: n, joinedAt: r, user: i } = e,
                a = i.id === (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
            return !!(a && null != r && _.includes(n)) && (g(n), (h = null), (m = null), !0);
        }
    }));
