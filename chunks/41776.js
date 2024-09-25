var r,
    i = n(47120);
var a = n(724458);
var o = n(442837),
    s = n(570140),
    l = n(271383),
    u = n(430824),
    c = n(594174),
    d = n(981631);
function _(e, t, n) {
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
let E = [],
    f = {},
    h = null,
    p = null;
function m(e) {
    let t = new Set([...(null != e ? e : [])]);
    return [...E].reduce((e, n) => (t.has(n) ? e : I(n) || e), !1);
}
function I(e) {
    let t = E.indexOf(e);
    if (t > -1) {
        let n = [...E];
        return n.splice(t, 1), (E = n), delete f[e], !0;
    }
    return !1;
}
function T(e) {
    return !(e === d.ME || E.includes(e)) && ((E = [...E, e]), !0);
}
function g(e, t) {
    null != t && (f[e] = t);
}
function S(e) {
    let { guildId: t, lurker: n, source: r, directoryChannelId: i, loadId: a } = e;
    if (n) {
        switch ((T(t), g(t, a), r)) {
            case d.vtS.MOBILE_GUILD_DISCOVERY:
                p = { type: d.vtS.MOBILE_GUILD_DISCOVERY };
                break;
            case d.vtS.DIRECTORY_ENTRY:
                p = {
                    type: d.vtS.DIRECTORY_ENTRY,
                    directoryChannelId: i
                };
                break;
            default:
                p = null;
        }
        return !0;
    }
    return !1;
}
function A(e) {
    let { guild: t } = e;
    return !!(null != t.joined_at && E.includes(t.id)) && (I(t.id), (h = null), (p = null), !0);
}
function v(e) {
    var t;
    let { guildId: n, joinedAt: r, user: i } = e,
        a = i.id === (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
        o = null == r;
    return !!(a && !o && E.includes(n)) && (I(n), (h = null), (p = null), !0);
}
function N(e) {
    let { guild: t } = e;
    return !!E.includes(t.id) && (I(t.id), (h = null), (p = null), !0);
}
function O(e) {
    let { ignoredGuildIds: t } = e,
        n = m(t);
    return n && ((h = null), (p = null)), n;
}
function R(e) {
    let { lurkingGuildId: t, lurkingSource: n } = e;
    return T(t), (p = n), !0;
}
function C() {
    E = Object.values(u.Z.getGuilds()).reduce((e, t) => (t.isLurker() ? [...e, t.id] : e), []);
}
class y extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, c.default);
    }
    setHistorySnapshot(e) {
        h = e;
    }
    getHistorySnapshot() {
        return h;
    }
    lurkingGuildIds() {
        return E;
    }
    mostRecentLurkedGuildId() {
        return 0 === E.length ? null : E[E.length - 1];
    }
    isLurking(e) {
        var t;
        let n = l.ZP.isCurrentUserGuest(e),
            r = null === (t = u.Z.getGuild(e)) || void 0 === t ? void 0 : t.isLurker();
        return !!(!n && r);
    }
    getLurkingSource() {
        return p;
    }
    getLoadId(e) {
        return null != e ? f[e] : null;
    }
}
_(y, 'displayName', 'LurkingStore'),
    (t.Z = new y(s.Z, {
        CONNECTION_OPEN: C,
        GUILD_JOIN: S,
        GUILD_STOP_LURKING: O,
        GUILD_STOP_LURKING_FAILURE: R,
        GUILD_CREATE: A,
        GUILD_DELETE: N,
        GUILD_MEMBER_ADD: v
    }));
