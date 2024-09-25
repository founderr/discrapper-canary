var r,
    i = n(47120);
var a = n(149765),
    o = n(442837),
    s = n(570140),
    l = n(271383),
    u = n(430824),
    c = n(594174),
    d = n(973542),
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
let f = new Set(),
    h = new Map(),
    p = new Map(),
    m = new Map(),
    I = new Map(),
    T = null;
function g(e) {
    return a.e$(e.permissions, _.Plq.ADMINISTRATOR);
}
function S(e) {
    let t = c.default.getCurrentUser(),
        n = u.Z.getGuild(e);
    if (null == n || null == t) return !1;
    let r = new Set(),
        i = new Set(),
        a = new Set();
    if ((I.set(e, n.isOwner(t)), n.hasFeature(_.oNc.ROLE_SUBSCRIPTIONS_ENABLED))) {
        var o;
        let s = l.ZP.getMember(e, t.id),
            c = new Set(null !== (o = null == s ? void 0 : s.roles) && void 0 !== o ? o : []),
            _ = u.Z.getRoles(n.id);
        for (let t in _) {
            let n = _[t];
            (0, d.Z)(n) && (r.add(t), (0, d.h)(n) && (i.add(t), c.has(t) && a.add(t))), c.has(t) && g(n) && I.set(e, !0);
        }
    }
    return h.set(e, r), m.set(e, a), p.set(e, i), !0;
}
function A() {
    let e = u.Z.getGuilds(),
        t = new Set();
    for (let n in e) e[n].hasFeature(_.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && t.add(n);
    return (T = t), t;
}
function v() {
    h.clear(), m.clear(), p.clear(), I.clear(), (T = null);
}
function N(e) {
    let {
        guild: { id: t }
    } = e;
    if ((null == T ? void 0 : T.has(t)) !== !0) return !1;
    let n = new Set(T);
    n.delete(t), (T = n);
}
function O(e) {
    let {
        guild: { id: t }
    } = e;
    if (null == T) return !1;
    let n = u.Z.getGuild(t);
    if (null == n) return !1;
    let r = n.hasFeature(_.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    if (r && !T.has(t)) {
        let e = new Set(T);
        return e.add(t), (T = e), !0;
    }
    if (!r && T.has(t)) {
        let e = new Set(T);
        return e.delete(t), (T = e), !0;
    }
    return !1;
}
function R(e) {
    let { guildId: t } = e;
    return !!h.has(t) && S(t);
}
function C(e) {
    let { guildId: t, user: n } = e,
        r = c.default.getCurrentUser();
    return !!(n.id === (null == r ? void 0 : r.id) && h.has(t)) && S(t);
}
class y extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(u.Z);
    }
    getGuildIdsWithPurchasableRoles() {
        return null == T ? A() : T;
    }
    buildRoles(e) {
        !h.has(e) && S(e);
    }
    getSubscriptionRoles(e) {
        var t;
        return this.buildRoles(e), null !== (t = h.get(e)) && void 0 !== t ? t : f;
    }
    getPurchasableSubscriptionRoles(e) {
        var t;
        return this.buildRoles(e), null !== (t = p.get(e)) && void 0 !== t ? t : f;
    }
    getUserSubscriptionRoles(e) {
        var t;
        return this.buildRoles(e), null !== (t = m.get(e)) && void 0 !== t ? t : f;
    }
    getUserIsAdmin(e) {
        var t;
        return this.buildRoles(e), null !== (t = I.get(e)) && void 0 !== t && t;
    }
}
E(y, 'displayName', 'SubscriptionRoleStore'),
    (t.Z = new y(s.Z, {
        CONNECTION_OPEN: v,
        LOGOUT: v,
        GUILD_CREATE: O,
        GUILD_DELETE: N,
        GUILD_UPDATE: O,
        GUILD_ROLE_CREATE: R,
        GUILD_ROLE_UPDATE: R,
        GUILD_ROLE_DELETE: R,
        GUILD_MEMBER_UPDATE: C
    }));
