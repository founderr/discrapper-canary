var i,
    a = r(47120);
var s = r(724458);
var o = r(442837),
    l = r(570140),
    u = r(271383),
    c = r(430824),
    d = r(594174),
    f = r(981631);
function _(e, n, r) {
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
let h = [],
    p = {},
    m = null,
    g = null;
function E(e) {
    let n = new Set([...(null != e ? e : [])]);
    return [...h].reduce((e, r) => (n.has(r) ? e : v(r) || e), !1);
}
function v(e) {
    let n = h.indexOf(e);
    if (n > -1) {
        let r = [...h];
        return r.splice(n, 1), (h = r), delete p[e], !0;
    }
    return !1;
}
function I(e) {
    return !(e === f.ME || h.includes(e)) && ((h = [...h, e]), !0);
}
function T(e, n) {
    null != n && (p[e] = n);
}
function b(e) {
    let { guildId: n, lurker: r, source: i, directoryChannelId: a, loadId: s } = e;
    if (r) {
        switch ((I(n), T(n, s), i)) {
            case f.vtS.MOBILE_GUILD_DISCOVERY:
                g = { type: f.vtS.MOBILE_GUILD_DISCOVERY };
                break;
            case f.vtS.DIRECTORY_ENTRY:
                g = {
                    type: f.vtS.DIRECTORY_ENTRY,
                    directoryChannelId: a
                };
                break;
            default:
                g = null;
        }
        return !0;
    }
    return !1;
}
function y(e) {
    let { guild: n } = e;
    return !!(null != n.joined_at && h.includes(n.id)) && (v(n.id), (m = null), (g = null), !0);
}
function S(e) {
    var n;
    let { guildId: r, joinedAt: i, user: a } = e,
        s = a.id === (null === (n = d.default.getCurrentUser()) || void 0 === n ? void 0 : n.id),
        o = null == i;
    return !!(s && !o && h.includes(r)) && (v(r), (m = null), (g = null), !0);
}
function A(e) {
    let { guild: n } = e;
    return !!h.includes(n.id) && (v(n.id), (m = null), (g = null), !0);
}
function N(e) {
    let { ignoredGuildIds: n } = e,
        r = E(n);
    return r && ((m = null), (g = null)), r;
}
function C(e) {
    let { lurkingGuildId: n, lurkingSource: r } = e;
    return I(n), (g = r), !0;
}
function R() {
    h = Object.values(c.Z.getGuilds()).reduce((e, n) => (n.isLurker() ? [...e, n.id] : e), []);
}
class O extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, d.default);
    }
    setHistorySnapshot(e) {
        m = e;
    }
    getHistorySnapshot() {
        return m;
    }
    lurkingGuildIds() {
        return h;
    }
    mostRecentLurkedGuildId() {
        return 0 === h.length ? null : h[h.length - 1];
    }
    isLurking(e) {
        var n;
        let r = u.ZP.isCurrentUserGuest(e),
            i = null === (n = c.Z.getGuild(e)) || void 0 === n ? void 0 : n.isLurker();
        return !!(!r && i);
    }
    getLurkingSource() {
        return g;
    }
    getLoadId(e) {
        return null != e ? p[e] : null;
    }
}
_(O, 'displayName', 'LurkingStore'),
    (n.Z = new O(l.Z, {
        CONNECTION_OPEN: R,
        GUILD_JOIN: b,
        GUILD_STOP_LURKING: N,
        GUILD_STOP_LURKING_FAILURE: C,
        GUILD_CREATE: y,
        GUILD_DELETE: A,
        GUILD_MEMBER_ADD: S
    }));
