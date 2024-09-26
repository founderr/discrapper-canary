var r,
    i = n(47120);
var a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(570140),
    u = n(314897),
    c = n(699516),
    d = n(885110),
    _ = n(981631);
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
function p(e, t) {
    var n;
    return (null !== (n = f[e]) && void 0 !== n ? n : {})[t];
}
function m(e, t) {
    let n = p(e, t);
    if (null == n) return;
    let r = f[e];
    delete r[t], o().isEmpty(r) && delete f[e];
    let i = h[n];
    null != i && (i.delete(e), 0 === i.size && delete h[n]);
}
function I(e, t, n) {
    var r;
    let i = f[e];
    if ((null == i && (i = f[e] = {}), (i[t] = n), c.Z.isBlocked(e))) return;
    let a = null !== (r = h[n]) && void 0 !== r ? r : new Set();
    (h[n] = a), a.add(e);
}
function T(e, t, n, r) {
    let i = n.find((e) => null != e.party && e.party.id),
        a = null != i && null != i.party ? i.party.id : null,
        o = p(t, e);
    if (null == a || r === _.Skl.OFFLINE) return null != o && (m(t, e), void 0);
    if (null != o) {
        if (o === a) return !1;
        m(t, e);
    }
    I(t, e, a);
}
function g(e) {
    let { guilds: t, presences: n } = e,
        r = !1;
    for (let { user: e, status: t, activities: i } of n) null != e && !1 !== T(_.ME, e.id, i, t) && (r = !0);
    for (let e of t) !1 !== A({ guild: e }) && (r = !0);
    return r;
}
function S(e) {
    let { parties: t, userParties: n } = e;
    (h = {}), (f = { ...n }), Object.keys(t).forEach((e) => (h[e] = new Set(t[e])));
}
function A(e) {
    let { guild: t } = e,
        n = !1;
    for (let { user: e, status: r, activities: i } of t.presences) !1 !== T(t.id, e.id, i, r) && (n = !0);
    return n;
}
function v(e) {
    let { presences: t } = e,
        n = !1;
    for (let { user: e, activities: r } of t) null != e && !1 !== T(_.ME, e.id, r) && (n = !0);
    return n;
}
function N(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let { guildId: t, user: n, status: r, activities: i } = e;
            return T(null != t ? t : _.ME, n.id, i, r);
        })
        .some((e) => e);
}
function O(e) {
    let { guildId: t, members: n } = e;
    return C(
        t,
        n.map((e) => e.presence)
    );
}
function R(e) {
    let { guildId: t, addedMembers: n } = e;
    return (
        null != n &&
        C(
            t,
            n.map((e) => e.presence)
        )
    );
}
function C(e, t) {
    let n = !1;
    return (
        t.forEach((t) => {
            null != t && T(e, t.user.id, t.activities, t.status) && (n = !0);
        }),
        n
    );
}
function y() {
    let e = u.default.getId(),
        t = d.Z.getActivities();
    return T(_.ME, e, t);
}
function L(e) {
    let { relationship: t } = e;
    if (!c.Z.isBlocked(t.id)) return !1;
    let n = f[t.id];
    if (null == n) return !1;
    for (let e of o().values(n)) {
        let n = h[e];
        null != n && n.delete(t.id);
    }
}
function b(e) {
    let { relationship: t } = e,
        n = f[t.id];
    if (null == n) return !1;
    for (let e of o().values(n)) {
        let n = h[e];
        null != n && n.add(t.id);
    }
}
class D extends (r = s.ZP.Store) {
    initialize() {
        this.syncWith([d.Z], y), this.waitFor(d.Z, c.Z);
    }
    getParty(e) {
        return null != e && null != h[e] ? h[e] : null;
    }
    getUserParties() {
        return f;
    }
    getParties() {
        return h;
    }
}
E(D, 'displayName', 'GamePartyStore'),
    (t.Z = new D(l.Z, {
        CONNECTION_OPEN_SUPPLEMENTAL: g,
        OVERLAY_INITIALIZE: S,
        GUILD_CREATE: A,
        PRESENCES_REPLACE: v,
        PRESENCE_UPDATES: N,
        THREAD_MEMBER_LIST_UPDATE: O,
        THREAD_MEMBERS_UPDATE: R,
        RELATIONSHIP_ADD: L,
        RELATIONSHIP_REMOVE: b
    }));
