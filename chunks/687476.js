n(47120);
var r,
    i,
    a,
    s,
    o = n(149765),
    l = n(442837),
    u = n(570140),
    c = n(271383),
    d = n(430824),
    f = n(594174),
    _ = n(973542),
    h = n(981631);
let p = new Set(),
    m = new Map(),
    g = new Map(),
    E = new Map(),
    v = new Map(),
    I = null;
function S(e) {
    let t = f.default.getCurrentUser(),
        n = d.Z.getGuild(e);
    if (null == n || null == t) return !1;
    let r = new Set(),
        i = new Set(),
        a = new Set();
    if ((v.set(e, n.isOwner(t)), n.hasFeature(h.oNc.ROLE_SUBSCRIPTIONS_ENABLED))) {
        var s, l;
        let u = c.ZP.getMember(e, t.id),
            f = new Set(null !== (s = null == u ? void 0 : u.roles) && void 0 !== s ? s : []),
            p = d.Z.getRoles(n.id);
        for (let t in p) {
            let n = p[t];
            if (((0, _.Z)(n) && (r.add(t), (0, _.h)(n) && (i.add(t), f.has(t) && a.add(t))), f.has(t) && ((l = n), o.e$(l.permissions, h.Plq.ADMINISTRATOR)))) v.set(e, !0);
        }
    }
    return m.set(e, r), E.set(e, a), g.set(e, i), !0;
}
function T() {
    m.clear(), E.clear(), g.clear(), v.clear(), (I = null);
}
function b(e) {
    let {
        guild: { id: t }
    } = e;
    if (null == I) return !1;
    let n = d.Z.getGuild(t);
    if (null == n) return !1;
    let r = n.hasFeature(h.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    if (r && !I.has(t)) {
        let e = new Set(I);
        return e.add(t), (I = e), !0;
    }
    if (!r && I.has(t)) {
        let e = new Set(I);
        return e.delete(t), (I = e), !0;
    }
    return !1;
}
function y(e) {
    let { guildId: t } = e;
    return !!m.has(t) && S(t);
}
class A extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(d.Z);
    }
    getGuildIdsWithPurchasableRoles() {
        return null == I
            ? (function () {
                  let e = d.Z.getGuilds(),
                      t = new Set();
                  for (let n in e) e[n].hasFeature(h.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && t.add(n);
                  return (I = t), t;
              })()
            : I;
    }
    buildRoles(e) {
        !m.has(e) && S(e);
    }
    getSubscriptionRoles(e) {
        var t;
        return this.buildRoles(e), null !== (t = m.get(e)) && void 0 !== t ? t : p;
    }
    getPurchasableSubscriptionRoles(e) {
        var t;
        return this.buildRoles(e), null !== (t = g.get(e)) && void 0 !== t ? t : p;
    }
    getUserSubscriptionRoles(e) {
        var t;
        return this.buildRoles(e), null !== (t = E.get(e)) && void 0 !== t ? t : p;
    }
    getUserIsAdmin(e) {
        var t;
        return this.buildRoles(e), null !== (t = v.get(e)) && void 0 !== t && t;
    }
}
(s = 'SubscriptionRoleStore'),
    (a = 'displayName') in (i = A)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new A(u.Z, {
        CONNECTION_OPEN: T,
        LOGOUT: T,
        GUILD_CREATE: b,
        GUILD_DELETE: function (e) {
            let {
                guild: { id: t }
            } = e;
            if ((null == I ? void 0 : I.has(t)) !== !0) return !1;
            let n = new Set(I);
            n.delete(t), (I = n);
        },
        GUILD_UPDATE: b,
        GUILD_ROLE_CREATE: y,
        GUILD_ROLE_UPDATE: y,
        GUILD_ROLE_DELETE: y,
        GUILD_MEMBER_UPDATE: function (e) {
            let { guildId: t, user: n } = e,
                r = f.default.getCurrentUser();
            return !!(n.id === (null == r ? void 0 : r.id) && m.has(t)) && S(t);
        }
    }));
