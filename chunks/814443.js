"use strict";
n(47120);
var i, r = n(442837),
  s = n(570140),
  o = n(699516);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let l = !1,
  u = Object.freeze({
    userAffinities: [],
    affinityUserIds: new Set,
    lastFetched: 0
  }),
  _ = Object.freeze({
    userAffinitiesMap: new Map,
    affinityUserIds: new Set
  }),
  c = {
    ...u
  },
  d = {
    ..._
  };

function E() {
  let e = new Map(c.userAffinities.filter(e => {
      let {
        user_id: t
      } = e;
      return !o.Z.isBlocked(t)
    }).map(e => [e.user_id, e])),
    t = new Set(e.keys());
  d = {
    userAffinitiesMap: e,
    affinityUserIds: t
  }
}
class I extends(i = r.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(o.Z), null != e && (c.userAffinities = e.userAffinities, c.lastFetched = e.lastFetched, E()), this.syncWith([o.Z], E)
  }
  needsRefresh() {
    return Date.now() - c.lastFetched > 864e5
  }
  getFetching() {
    return l
  }
  getState() {
    return c
  }
  getUserAffinities() {
    return c.userAffinities
  }
  getUserAffinitiesMap() {
    return d.userAffinitiesMap
  }
  getUserAffinity(e) {
    return d.userAffinitiesMap.get(e)
  }
  getUserAffinitiesUserIds() {
    return d.affinityUserIds
  }
}
a(I, "displayName", "UserAffinitiesStore"), a(I, "persistKey", "UserAffinitiesStore"), a(I, "migrations", [e => null]), t.Z = new I(s.Z, {
  LOAD_USER_AFFINITIES_SUCCESS: function(e) {
    var t;
    let {
      affinities: n
    } = e;
    c.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [], c.lastFetched = Date.now(), E(), l = !1
  },
  LOAD_USER_AFFINITIES: function() {
    l = !0
  },
  LOAD_USER_AFFINITIES_FAILURE: function() {
    l = !1
  },
  LOGOUT: function() {
    c = {
      ...u
    }, d = {
      ..._
    }
  }
})