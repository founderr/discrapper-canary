"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007"), n("424973");
var i = n("917351"),
  r = n.n(i),
  s = n("446674"),
  a = n("862337"),
  o = n("913144"),
  l = n("157552"),
  u = n("71313"),
  c = n("190017"),
  d = n("299285"),
  p = n("686470"),
  h = n("535974"),
  f = n("98328"),
  E = n("718517"),
  _ = n("964889"),
  m = n("602043");
let S = new Set,
  g = {},
  T = new Set,
  I = {},
  v = new Set,
  C = {},
  A = 10 * E.default.Millis.MINUTE,
  R = 6 * E.default.Millis.HOUR,
  N = 10 * E.default.Millis.MINUTE,
  y = new a.Timeout;

function O(e) {
  y.start(e + Math.random() * A, l.fetchBranches)
}

function D() {
  if (!(0, m.isSupportedPlatform)()) return !1;
  let e = p.default.entitledBranchIds,
    t = [];
  for (let n of e) !C.hasOwnProperty(n) && (C[n] = null, t.push(n));
  if (0 === t.length) return !1;
  o.default.wait(() => l.fetchBranches(t))
}

function b(e, t) {
  if (null != g[t] && f.default.shouldBeInstalled(e, t)) {
    let n = g[t],
      i = n.manifestIds,
      s = h.default.getState(e, t);
    null != s && s.shouldPatch && (s.buildId !== n.id || !r.isEqual(s.manifestIds, i)) && o.default.wait(() => {
      let r = d.default.getApplication(e);
      null != r ? (v.delete((0, _.getComboId)(e, t)), (0, c.updateApplication)(r, t, n.id, i, !0)) : v.add((0, _.getComboId)(e, t))
    })
  }
}

function P() {
  y.stop()
}
class L extends s.default.Store {
  initialize() {
    this.syncWith([p.default], D), this.waitFor(h.default, p.default, d.default)
  }
  getTargetBuildId(e, t) {
    return null == g[t] ? null : g[t].id
  }
  getTargetManifests(e, t) {
    return null == g[t] ? null : g[t].manifestIds
  }
  hasNoBuild(e, t) {
    return T.has(t)
  }
  isFetching(e, t) {
    return S.has(t)
  }
  needsToFetchBuildSize(e) {
    return !I.hasOwnProperty(e)
  }
  getBuildSize(e) {
    return I[e]
  }
}
L.displayName = "ApplicationBuildStore";
var M = new L(o.default, {
  CONNECTION_OPEN: function() {
    return O(R), D()
  },
  GAMES_DATABASE_UPDATE: function() {
    if (!(0, m.isSupportedPlatform)()) return !1;
    for (let e of v) {
      let {
        applicationId: t,
        branchId: n
      } = (0, _.convertComboId)(e), i = d.default.getApplication(t);
      null != i && (v.delete(e), b(t, n))
    }
  },
  APPLICATION_BUILD_FETCH_START: function(e) {
    let {
      branchId: t
    } = e;
    S.add(t)
  },
  APPLICATION_BUILD_FETCH_SUCCESS: function(e) {
    let {
      applicationId: t,
      branchId: n,
      locale: i,
      build: r
    } = e;
    S.delete(n);
    let s = r.manifests.map(e => {
        let {
          id: t
        } = e;
        return t
      }),
      a = r.id;
    T.delete(n), g[n] = {
      id: a,
      applicationId: t,
      branchId: n,
      locale: i,
      manifestIds: s
    }, b(t, n)
  },
  APPLICATION_BUILD_NOT_FOUND: function(e) {
    let {
      branchId: t
    } = e;
    S.delete(t), T.add(t)
  },
  APPLICATION_BUILD_SIZE_FETCH_START: function(e) {
    let {
      buildId: t
    } = e;
    !I.hasOwnProperty(t) && (I[t] = null)
  },
  APPLICATION_BUILD_SIZE_FETCH_SUCCESS: function(e) {
    let {
      buildId: t,
      sizeKB: n
    } = e;
    I[t] = n
  },
  APPLICATION_BUILD_SIZE_FETCH_FAIL: function(e) {
    let {
      buildId: t
    } = e;
    null == I[t] && delete I[t]
  },
  APPLICATION_BRANCHES_FETCH_SUCCESS: function(e) {
    let {
      branches: t
    } = e, n = {};
    for (let e in p.default.libraryApplications) {
      let t = p.default.libraryApplications[e];
      n[t.branchId] = t
    }
    for (let e of t) {
      let {
        id: t,
        liveBuildId: i
      } = e, r = C[t];
      if (i !== r) {
        let e = n[t];
        null != e && o.default.wait(() => u.fetchLiveBuild(e.id, e.branchId, !0))
      }
      C[t] = i
    }
    O(R)
  },
  APPLICATION_BRANCHES_FETCH_FAIL: function() {
    O(N)
  },
  CONNECTION_CLOSED: P,
  LOGOUT: P,
  SKU_PURCHASE_SUCCESS: function(e) {
    let {
      entitlements: t
    } = e;
    if (!(0, m.isSupportedPlatform)()) return !1;
    let n = new Set;
    for (let e of t) n.add(e.application_id);
    for (let e in p.default.libraryApplications) {
      let t = p.default.libraryApplications[e];
      n.has(t.id) && (0, _.isUserEntitledToLibraryApplication)(t) && o.default.wait(() => u.fetchLiveBuild(t.id, t.branchId))
    }
  }
})