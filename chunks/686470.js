"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n("222007"), n("702976"), n("860677");
var i = n("917351"),
  r = n.n(i),
  s = n("446674"),
  a = n("95410"),
  o = n("913144"),
  l = n("370999"),
  u = n("568734"),
  c = n("964889"),
  d = n("271938"),
  p = n("49111");
let h = "LibraryApplicationStore";

function f() {
  var e;
  return null !== (e = a.default.get(h)) && void 0 !== e ? e : {}
}
let E = !1,
  _ = {},
  m = {},
  S = new Set,
  g = {},
  T = {},
  I = !1;

function v() {
  a.default.set(h, {
    ...f(),
    activeLaunchOptionIds: T
  })
}

function C() {
  a.default.set(h, {
    ...f(),
    activeLibraryApplicationBranchIds: g
  })
}

function A(e) {
  for (let t of e) {
    let e = l.default.createFromServer(t),
      n = (0, c.getComboId)(e.id, e.branchId);
    _[n] = e
  }
}

function R(e) {
  let {
    libraryApplication: t
  } = e, n = l.default.createFromServer(t), i = (0, c.getComboId)(n.id, n.branchId);
  _[i] = n, S.delete(i)
}

function N(e, t) {
  var n;
  let i = (0, c.getComboId)(e, t);
  return null !== (n = _[i]) && void 0 !== n ? n : m[i]
}

function y() {
  return {
    ...m,
    ..._
  }
}
class O extends s.default.Store {
  initialize() {
    this.waitFor(d.default);
    let e = a.default.get(h);
    null != e && (null == e.activeLaunchOptionIds ? v() : T = e.activeLaunchOptionIds, null == e.activeLibraryApplicationBranchIds ? C() : g = e.activeLibraryApplicationBranchIds)
  }
  get libraryApplications() {
    return function(e) {
      let t = y();
      return Object.keys(t).forEach(n => {
        !e(t[n]) && delete t[n]
      }), t
    }(e => !e.isHidden())
  }
  getAllLibraryApplications() {
    return y()
  }
  hasLibraryApplication() {
    return Object.keys(y()).length > 0
  }
  hasApplication(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = N(e, t);
    return !(null == i || !n && i.isHidden()) && (0, c.isUserEntitledToLibraryApplication)(i)
  }
  getLibraryApplication(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = N(e, t);
    return n && null != i ? (0, c.isUserEntitledToLibraryApplication)(i) ? i : null : i
  }
  getActiveLibraryApplication(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = g[e];
    if (null != n) {
      var i;
      let r = (0, c.getComboId)(e, n),
        s = null !== (i = _[r]) && void 0 !== i ? i : m[r];
      if (null != s && (0, c.isUserEntitledToLibraryApplication)(s) && (t || !s.isHidden())) return s
    }
    let r = y();
    for (let n in r)
      if (r[n].id === e) {
        let e = r[n];
        if ((0, c.isUserEntitledToLibraryApplication)(e) && (t || !e.isHidden())) return e
      }
  }
  isUpdatingFlags(e, t) {
    return S.has((0, c.getComboId)(e, t))
  }
  getActiveLaunchOptionId(e, t) {
    return T[(0, c.getComboId)(e, t)]
  }
  get fetched() {
    return E
  }
  get entitledBranchIds() {
    return r(y()).values().filter(e => (0, c.isUserEntitledToLibraryApplication)(e)).map(e => e.branchId).value()
  }
  get hasRemovedLibraryApplicationThisSession() {
    return I
  }
  whenInitialized(e) {
    this.addConditionalChangeListener(() => {
      if (E) return setImmediate(e), !1
    })
  }
}
O.displayName = "LibraryApplicationStore";
var D = new O(o.default, {
  LOGOUT: function() {
    E = !1
  },
  LIBRARY_FETCH_SUCCESS: function(e) {
    let {
      libraryApplications: t
    } = e;
    _ = {}, A(t), E = !0
  },
  SKU_PURCHASE_SUCCESS: function(e) {
    let {
      libraryApplications: t
    } = e;
    A(t)
  },
  LIBRARY_APPLICATION_FLAGS_UPDATE_START: function(e) {
    let {
      applicationId: t,
      branchId: n,
      flags: i
    } = e, r = (0, c.getComboId)(t, n), s = N(t, n);
    null != s && !s.isHidden() && u.hasFlag(i, p.LibraryApplicationFlags.HIDDEN) && (I = !0), S.add(r)
  },
  LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: R,
  LIBRARY_APPLICATION_UPDATE: R,
  LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE: function(e) {
    let {
      applicationId: t,
      branchId: n,
      launchOptionId: i
    } = e;
    T[(0, c.getComboId)(t, n)] = i, v()
  },
  LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE: function(e) {
    let {
      applicationId: t,
      branchId: n
    } = e;
    if (g[t] === n) return !1;
    g[t] = n, C()
  },
  LIBRARY_APPLICATIONS_TEST_MODE_ENABLED: function(e) {
    let {
      libraryApplications: t
    } = e;
    for (let e of t) {
      let t = (0, c.getComboId)(e.id, e.branchId);
      m[t] = e
    }
  },
  DEVELOPER_TEST_MODE_RESET: function() {
    m = {}
  }
})