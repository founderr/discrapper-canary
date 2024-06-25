"use strict";
n(47120), n(789020), n(177593);
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(433517),
  c = n(570140),
  d = n(85521),
  E = n(630388),
  I = n(780570),
  T = n(314897),
  h = n(981631);
let f = "LibraryApplicationStore";

function S() {
  var e;
  return null !== (e = _.K.get(f)) && void 0 !== e ? e : {}
}
let A = !1,
  N = {},
  m = {},
  O = new Set,
  p = {},
  R = {},
  g = !1;

function C() {
  _.K.set(f, {
    ...S(),
    activeLaunchOptionIds: R
  })
}

function v() {
  _.K.set(f, {
    ...S(),
    activeLibraryApplicationBranchIds: p
  })
}

function L(e) {
  for (let t of e) {
    let e = d.Z.createFromServer(t);
    N[(0, I.Tu)(e.id, e.branchId)] = e
  }
}

function D(e) {
  let {
    libraryApplication: t
  } = e, n = d.Z.createFromServer(t), i = (0, I.Tu)(n.id, n.branchId);
  N[i] = n, O.delete(i)
}

function M(e, t) {
  var n;
  let i = (0, I.Tu)(e, t);
  return null !== (n = N[i]) && void 0 !== n ? n : m[i]
}

function P() {
  return {
    ...m,
    ...N
  }
}
class y extends(i = u.ZP.Store) {
  initialize() {
    this.waitFor(T.default);
    let e = _.K.get(f);
    null != e && (null == e.activeLaunchOptionIds ? C() : R = e.activeLaunchOptionIds, null == e.activeLibraryApplicationBranchIds ? v() : p = e.activeLibraryApplicationBranchIds)
  }
  get libraryApplications() {
    return function(e) {
      let t = P();
      return Object.keys(t).forEach(n => {
        !e(t[n]) && delete t[n]
      }), t
    }(e => !e.isHidden())
  }
  getAllLibraryApplications() {
    return P()
  }
  hasLibraryApplication() {
    return Object.keys(P()).length > 0
  }
  hasApplication(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = M(e, t);
    return !(null == i || !n && i.isHidden()) && (0, I.Je)(i)
  }
  getLibraryApplication(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = M(e, t);
    return n && null != i ? (0, I.Je)(i) ? i : null : i
  }
  getActiveLibraryApplication(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = p[e];
    if (null != n) {
      var i;
      let r = (0, I.Tu)(e, n),
        s = null !== (i = N[r]) && void 0 !== i ? i : m[r];
      if (null != s && (0, I.Je)(s) && (t || !s.isHidden())) return s
    }
    let r = P();
    for (let n in r)
      if (r[n].id === e) {
        let e = r[n];
        if ((0, I.Je)(e) && (t || !e.isHidden())) return e
      }
  }
  isUpdatingFlags(e, t) {
    return O.has((0, I.Tu)(e, t))
  }
  getActiveLaunchOptionId(e, t) {
    return R[(0, I.Tu)(e, t)]
  }
  get fetched() {
    return A
  }
  get entitledBranchIds() {
    return l()(P()).values().filter(e => (0, I.Je)(e)).map(e => e.branchId).value()
  }
  get hasRemovedLibraryApplicationThisSession() {
    return g
  }
  whenInitialized(e) {
    this.addConditionalChangeListener(() => {
      if (A) return setImmediate(e), !1
    })
  }
}
o = "LibraryApplicationStore", (s = "displayName") in(r = y) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new y(c.Z, {
  LOGOUT: function() {
    A = !1
  },
  LIBRARY_FETCH_SUCCESS: function(e) {
    let {
      libraryApplications: t
    } = e;
    N = {}, L(t), A = !0
  },
  SKU_PURCHASE_SUCCESS: function(e) {
    let {
      libraryApplications: t
    } = e;
    L(t)
  },
  LIBRARY_APPLICATION_FLAGS_UPDATE_START: function(e) {
    let {
      applicationId: t,
      branchId: n,
      flags: i
    } = e, r = (0, I.Tu)(t, n), s = M(t, n);
    null != s && !s.isHidden() && E.yE(i, h.eHb.HIDDEN) && (g = !0), O.add(r)
  },
  LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: D,
  LIBRARY_APPLICATION_UPDATE: D,
  LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE: function(e) {
    let {
      applicationId: t,
      branchId: n,
      launchOptionId: i
    } = e;
    R[(0, I.Tu)(t, n)] = i, C()
  },
  LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE: function(e) {
    let {
      applicationId: t,
      branchId: n
    } = e;
    if (p[t] === n) return !1;
    p[t] = n, v()
  },
  LIBRARY_APPLICATIONS_TEST_MODE_ENABLED: function(e) {
    let {
      libraryApplications: t
    } = e;
    for (let e of t) m[(0, I.Tu)(e.id, e.branchId)] = e
  },
  DEVELOPER_TEST_MODE_RESET: function() {
    m = {}
  }
})