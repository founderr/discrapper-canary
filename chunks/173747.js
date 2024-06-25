"use strict";
n(47120), n(653041);
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(846519),
  c = n(570140),
  d = n(274616),
  E = n(57513),
  I = n(51025),
  T = n(812206),
  h = n(283595),
  f = n(417363),
  S = n(391690),
  A = n(70956),
  N = n(780570),
  m = n(804739);
let O = new Set,
  p = {},
  R = new Set,
  g = {},
  C = new Set,
  v = {},
  L = 10 * A.Z.Millis.MINUTE,
  D = 6 * A.Z.Millis.HOUR,
  M = 10 * A.Z.Millis.MINUTE,
  P = new _.V7;

function y(e) {
  P.start(e + Math.random() * L, d.o)
}

function U() {
  if (!(0, m.Q)()) return !1;
  let e = h.Z.entitledBranchIds,
    t = [];
  for (let n of e) !v.hasOwnProperty(n) && (v[n] = null, t.push(n));
  if (0 === t.length) return !1;
  c.Z.wait(() => d.o(t))
}

function b(e, t) {
  if (null != p[t] && S.Z.shouldBeInstalled(e, t)) {
    let n = p[t],
      i = n.manifestIds,
      r = f.Z.getState(e, t);
    null != r && r.shouldPatch && (r.buildId !== n.id || !l().isEqual(r.manifestIds, i)) && c.Z.wait(() => {
      let r = T.Z.getApplication(e);
      null != r ? (C.delete((0, N.Tu)(e, t)), (0, I.li)(r, t, n.id, i, !0)) : C.add((0, N.Tu)(e, t))
    })
  }
}

function G() {
  P.stop()
}
class w extends(i = u.ZP.Store) {
  initialize() {
    this.syncWith([h.Z], U), this.waitFor(f.Z, h.Z, T.Z)
  }
  getTargetBuildId(e, t) {
    return null == p[t] ? null : p[t].id
  }
  getTargetManifests(e, t) {
    return null == p[t] ? null : p[t].manifestIds
  }
  hasNoBuild(e, t) {
    return R.has(t)
  }
  isFetching(e, t) {
    return O.has(t)
  }
  needsToFetchBuildSize(e) {
    return !g.hasOwnProperty(e)
  }
  getBuildSize(e) {
    return g[e]
  }
}
o = "ApplicationBuildStore", (s = "displayName") in(r = w) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new w(c.Z, {
  CONNECTION_OPEN: function() {
    return y(D), U()
  },
  GAMES_DATABASE_UPDATE: function() {
    if (!(0, m.Q)()) return !1;
    for (let e of C) {
      let {
        applicationId: t,
        branchId: n
      } = (0, N.CP)(e);
      null != T.Z.getApplication(t) && (C.delete(e), b(t, n))
    }
  },
  APPLICATION_BUILD_FETCH_START: function(e) {
    let {
      branchId: t
    } = e;
    O.add(t)
  },
  APPLICATION_BUILD_FETCH_SUCCESS: function(e) {
    let {
      applicationId: t,
      branchId: n,
      locale: i,
      build: r
    } = e;
    O.delete(n);
    let s = r.manifests.map(e => {
        let {
          id: t
        } = e;
        return t
      }),
      o = r.id;
    R.delete(n), p[n] = {
      id: o,
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
    O.delete(t), R.add(t)
  },
  APPLICATION_BUILD_SIZE_FETCH_START: function(e) {
    let {
      buildId: t
    } = e;
    !g.hasOwnProperty(t) && (g[t] = null)
  },
  APPLICATION_BUILD_SIZE_FETCH_SUCCESS: function(e) {
    let {
      buildId: t,
      sizeKB: n
    } = e;
    g[t] = n
  },
  APPLICATION_BUILD_SIZE_FETCH_FAIL: function(e) {
    let {
      buildId: t
    } = e;
    null == g[t] && delete g[t]
  },
  APPLICATION_BRANCHES_FETCH_SUCCESS: function(e) {
    let {
      branches: t
    } = e, n = {};
    for (let e in h.Z.libraryApplications) {
      let t = h.Z.libraryApplications[e];
      n[t.branchId] = t
    }
    for (let e of t) {
      let {
        id: t,
        liveBuildId: i
      } = e;
      if (i !== v[t]) {
        let e = n[t];
        null != e && c.Z.wait(() => E.l(e.id, e.branchId, !0))
      }
      v[t] = i
    }
    y(D)
  },
  APPLICATION_BRANCHES_FETCH_FAIL: function() {
    y(M)
  },
  CONNECTION_CLOSED: G,
  LOGOUT: G,
  SKU_PURCHASE_SUCCESS: function(e) {
    let {
      entitlements: t
    } = e;
    if (!(0, m.Q)()) return !1;
    let n = new Set;
    for (let e of t) n.add(e.application_id);
    for (let e in h.Z.libraryApplications) {
      let t = h.Z.libraryApplications[e];
      n.has(t.id) && (0, N.Je)(t) && c.Z.wait(() => E.l(t.id, t.branchId))
    }
  }
})