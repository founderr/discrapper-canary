var i,
    a = r(47120);
var s = r(149765),
    o = r(442837),
    l = r(570140),
    u = r(271383),
    c = r(430824),
    d = r(594174),
    f = r(973542),
    _ = r(981631);
function h(e, n, r) {
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
let p = new Set(),
    m = new Map(),
    g = new Map(),
    E = new Map(),
    v = new Map(),
    I = null;
function T(e) {
    return s.e$(e.permissions, _.Plq.ADMINISTRATOR);
}
function b(e) {
    let n = d.default.getCurrentUser(),
        r = c.Z.getGuild(e);
    if (null == r || null == n) return !1;
    let i = new Set(),
        a = new Set(),
        s = new Set();
    if ((v.set(e, r.isOwner(n)), r.hasFeature(_.oNc.ROLE_SUBSCRIPTIONS_ENABLED))) {
        var o;
        let l = u.ZP.getMember(e, n.id),
            d = new Set(null !== (o = null == l ? void 0 : l.roles) && void 0 !== o ? o : []),
            _ = c.Z.getRoles(r.id);
        for (let n in _) {
            let r = _[n];
            (0, f.Z)(r) && (i.add(n), (0, f.h)(r) && (a.add(n), d.has(n) && s.add(n))), d.has(n) && T(r) && v.set(e, !0);
        }
    }
    return m.set(e, i), E.set(e, s), g.set(e, a), !0;
}
function y() {
    let e = c.Z.getGuilds(),
        n = new Set();
    for (let r in e) e[r].hasFeature(_.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && n.add(r);
    return (I = n), n;
}
function S() {
    m.clear(), E.clear(), g.clear(), v.clear(), (I = null);
}
function A(e) {
    let {
        guild: { id: n }
    } = e;
    if ((null == I ? void 0 : I.has(n)) !== !0) return !1;
    let r = new Set(I);
    r.delete(n), (I = r);
}
function N(e) {
    let {
        guild: { id: n }
    } = e;
    if (null == I) return !1;
    let r = c.Z.getGuild(n);
    if (null == r) return !1;
    let i = r.hasFeature(_.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    if (i && !I.has(n)) {
        let e = new Set(I);
        return e.add(n), (I = e), !0;
    }
    if (!i && I.has(n)) {
        let e = new Set(I);
        return e.delete(n), (I = e), !0;
    }
    return !1;
}
function C(e) {
    let { guildId: n } = e;
    return !!m.has(n) && b(n);
}
function R(e) {
    let { guildId: n, user: r } = e,
        i = d.default.getCurrentUser();
    return !!(r.id === (null == i ? void 0 : i.id) && m.has(n)) && b(n);
}
class O extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(c.Z);
    }
    getGuildIdsWithPurchasableRoles() {
        return null == I ? y() : I;
    }
    buildRoles(e) {
        !m.has(e) && b(e);
    }
    getSubscriptionRoles(e) {
        var n;
        return this.buildRoles(e), null !== (n = m.get(e)) && void 0 !== n ? n : p;
    }
    getPurchasableSubscriptionRoles(e) {
        var n;
        return this.buildRoles(e), null !== (n = g.get(e)) && void 0 !== n ? n : p;
    }
    getUserSubscriptionRoles(e) {
        var n;
        return this.buildRoles(e), null !== (n = E.get(e)) && void 0 !== n ? n : p;
    }
    getUserIsAdmin(e) {
        var n;
        return this.buildRoles(e), null !== (n = v.get(e)) && void 0 !== n && n;
    }
}
h(O, 'displayName', 'SubscriptionRoleStore'),
    (n.Z = new O(l.Z, {
        CONNECTION_OPEN: S,
        LOGOUT: S,
        GUILD_CREATE: N,
        GUILD_DELETE: A,
        GUILD_UPDATE: N,
        GUILD_ROLE_CREATE: C,
        GUILD_ROLE_UPDATE: C,
        GUILD_ROLE_DELETE: C,
        GUILD_MEMBER_UPDATE: R
    }));
