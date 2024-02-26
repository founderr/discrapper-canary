"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var l = n("446674"),
  i = n("913144"),
  a = n("27618");
let s = !1,
  r = Object.freeze({
    userAffinities: [],
    affinityUserIds: new Set,
    lastFetched: 0
  }),
  u = Object.freeze({
    userAffinitiesMap: new Map,
    affinityUserIds: new Set
  }),
  o = {
    ...r
  },
  d = {
    ...u
  };

function c() {
  let e = new Map(o.userAffinities.filter(e => {
      let {
        user_id: t
      } = e;
      return !a.default.isBlocked(t)
    }).map(e => [e.user_id, e])),
    t = new Set(e.keys());
  d = {
    userAffinitiesMap: e,
    affinityUserIds: t
  }
}
class f extends l.default.PersistedStore {
  initialize(e) {
    this.waitFor(a.default), null != e && (o.userAffinities = e.userAffinities, o.lastFetched = e.lastFetched, c()), this.syncWith([a.default], c)
  }
  needsRefresh() {
    return Date.now() - o.lastFetched > 864e5
  }
  getFetching() {
    return s
  }
  getState() {
    return o
  }
  getUserAffinities() {
    return o.userAffinities
  }
  getUserAffinity(e) {
    return d.userAffinitiesMap.get(e)
  }
  getUserAffinitiesUserIds() {
    return d.affinityUserIds
  }
}
f.displayName = "UserAffinitiesStore", f.persistKey = "UserAffinitiesStore", f.migrations = [e => null];
var h = new f(i.default, {
  LOAD_USER_AFFINITIES_SUCCESS: function(e) {
    var t;
    let {
      affinities: n
    } = e;
    o.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [], o.lastFetched = Date.now(), c(), s = !1
  },
  LOAD_USER_AFFINITIES: function() {
    s = !0
  },
  LOAD_USER_AFFINITIES_FAILURE: function() {
    s = !1
  },
  LOGOUT: function() {
    o = {
      ...r
    }, d = {
      ...u
    }
  }
})