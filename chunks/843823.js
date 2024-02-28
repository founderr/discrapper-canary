"use strict";
r.r(t), r.d(t, {
  default: function() {
    return p
  }
}), r("222007");
var a = r("446674"),
  n = r("913144"),
  i = r("27618");
let l = !1,
  o = Object.freeze({
    userAffinities: [],
    affinityUserIds: new Set,
    lastFetched: 0
  }),
  s = Object.freeze({
    userAffinitiesMap: new Map,
    affinityUserIds: new Set
  }),
  c = {
    ...o
  },
  d = {
    ...s
  };

function u() {
  let e = new Map(c.userAffinities.filter(e => {
      let {
        user_id: t
      } = e;
      return !i.default.isBlocked(t)
    }).map(e => [e.user_id, e])),
    t = new Set(e.keys());
  d = {
    userAffinitiesMap: e,
    affinityUserIds: t
  }
}
class h extends a.default.PersistedStore {
  initialize(e) {
    this.waitFor(i.default), null != e && (c.userAffinities = e.userAffinities, c.lastFetched = e.lastFetched, u()), this.syncWith([i.default], u)
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
  getUserAffinity(e) {
    return d.userAffinitiesMap.get(e)
  }
  getUserAffinitiesUserIds() {
    return d.affinityUserIds
  }
}
h.displayName = "UserAffinitiesStore", h.persistKey = "UserAffinitiesStore", h.migrations = [e => null];
var p = new h(n.default, {
  LOAD_USER_AFFINITIES_SUCCESS: function(e) {
    var t;
    let {
      affinities: r
    } = e;
    c.userAffinities = null !== (t = r.user_affinities) && void 0 !== t ? t : [], c.lastFetched = Date.now(), u(), l = !1
  },
  LOAD_USER_AFFINITIES: function() {
    l = !0
  },
  LOAD_USER_AFFINITIES_FAILURE: function() {
    l = !1
  },
  LOGOUT: function() {
    c = {
      ...o
    }, d = {
      ...s
    }
  }
})