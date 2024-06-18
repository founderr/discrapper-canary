"use strict";
n(47120);
var i, r, s, o, a = n(149765),
  l = n(442837),
  u = n(570140),
  _ = n(271383),
  c = n(430824),
  d = n(594174),
  E = n(973542),
  I = n(981631);
let T = new Set,
  h = new Map,
  S = new Map,
  f = new Map,
  N = new Map,
  A = null;

function m(e) {
  let t = d.default.getCurrentUser(),
    n = c.Z.getGuild(e);
  if (null == n || null == t) return !1;
  let i = new Set,
    r = new Set,
    s = new Set;
  if (N.set(e, n.isOwner(t)), n.hasFeature(I.oNc.ROLE_SUBSCRIPTIONS_ENABLED)) {
    var o, l;
    let u = _.ZP.getMember(e, t.id),
      d = new Set(null !== (o = null == u ? void 0 : u.roles) && void 0 !== o ? o : []),
      T = c.Z.getRoles(n.id);
    for (let t in T) {
      ;
      let n = T[t];
      if ((0, E.Z)(n) && (i.add(t), (0, E.h)(n) && (r.add(t), d.has(t) && s.add(t))), d.has(t) && (l = n, a.e$(l.permissions, I.Plq.ADMINISTRATOR))) N.set(e, !0)
    }
  }
  return h.set(e, i), f.set(e, s), S.set(e, r), !0
}

function O() {
  h.clear(), f.clear(), S.clear(), N.clear(), A = null
}

function R(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  if (null == A) return !1;
  let n = c.Z.getGuild(t);
  if (null == n) return !1;
  let i = n.hasFeature(I.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
  if (i && !A.has(t)) {
    let e = new Set(A);
    return e.add(t), A = e, !0
  }
  if (!i && A.has(t)) {
    let e = new Set(A);
    return e.delete(t), A = e, !0
  }
  return !1
}

function p(e) {
  let {
    guildId: t
  } = e;
  return !!h.has(t) && m(t)
}
class g extends(i = l.ZP.Store) {
  initialize() {
    this.waitFor(c.Z)
  }
  getGuildIdsWithPurchasableRoles() {
    return null == A ? function() {
      let e = c.Z.getGuilds(),
        t = new Set;
      for (let n in e) e[n].hasFeature(I.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && t.add(n);
      return A = t, t
    }() : A
  }
  buildRoles(e) {
    !h.has(e) && m(e)
  }
  getSubscriptionRoles(e) {
    var t;
    return this.buildRoles(e), null !== (t = h.get(e)) && void 0 !== t ? t : T
  }
  getPurchasableSubscriptionRoles(e) {
    var t;
    return this.buildRoles(e), null !== (t = S.get(e)) && void 0 !== t ? t : T
  }
  getUserSubscriptionRoles(e) {
    var t;
    return this.buildRoles(e), null !== (t = f.get(e)) && void 0 !== t ? t : T
  }
  getUserIsAdmin(e) {
    var t;
    return this.buildRoles(e), null !== (t = N.get(e)) && void 0 !== t && t
  }
}
o = "SubscriptionRoleStore", (s = "displayName") in(r = g) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new g(u.Z, {
  CONNECTION_OPEN: O,
  LOGOUT: O,
  GUILD_CREATE: R,
  GUILD_DELETE: function(e) {
    let {
      guild: {
        id: t
      }
    } = e;
    if ((null == A ? void 0 : A.has(t)) !== !0) return !1;
    let n = new Set(A);
    n.delete(t), A = n
  },
  GUILD_UPDATE: R,
  GUILD_ROLE_CREATE: p,
  GUILD_ROLE_UPDATE: p,
  GUILD_ROLE_DELETE: p,
  GUILD_MEMBER_UPDATE: function(e) {
    let {
      guildId: t,
      user: n
    } = e, i = d.default.getCurrentUser();
    return !!(n.id === (null == i ? void 0 : i.id) && h.has(t)) && m(t)
  }
})