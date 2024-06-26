"use strict";
n(47120);
var i, r, s, o, a = n(658722),
  l = n.n(a),
  u = n(392711),
  _ = n.n(u),
  c = n(913527),
  d = n.n(c),
  E = n(442837),
  I = n(570140),
  T = n(812206),
  h = n(594190),
  f = n(592745),
  S = n(706454),
  N = n(757266),
  A = n(77498),
  m = n(283595),
  O = n(246946),
  p = n(230307),
  R = n(799777),
  g = n(417363),
  C = n(941128),
  v = n(70956),
  L = n(251625),
  D = n(823379),
  M = n(780570),
  P = n(358085),
  y = n(998502),
  U = n(804739),
  b = n(7956),
  G = n(981631);
let w = d()().subtract(1, "week"),
  x = [],
  B = "",
  k = !1;

function V(e, t) {
  return e.application.name.localeCompare(t.application.name, S.default.locale, {
    sensitivity: "base"
  })
}
let Z = {
    [G.iEv.NAME]: V,
    [G.iEv.PLATFORM]: (e, t, n) => {
      let i = e.libraryApplication.getDistributor(),
        r = t.libraryApplication.getDistributor();
      return i === r ? (n === G.sHY.DESCENDING ? -1 : 1) * V(e, t) : null == i ? 1 : null == r ? -1 : i.localeCompare(r)
    },
    [G.iEv.LAST_PLAYED]: (e, t) => e.isNew && !t.isNew ? -1 : !e.isNew && t.isNew ? 1 : e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1,
    [G.iEv.ACTIONS]: null
  },
  H = (0, L.oH)(e => e.filter(e => null != e.libraryApplication && e.shouldShowInLibrary)),
  F = (0, L.oH)(e => e.filter(e => null != e.libraryApplication && g.Z.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId))),
  Y = (0, L.oH)((e, t) => e.filter(e => l()(t.toLowerCase(), e.application.name.toLowerCase()))),
  j = (0, L.oH)((e, t, n, i) => {
    let r = Z[t];
    if (null == r) return e;
    let s = [...e].sort(r);
    return n === G.sHY.DESCENDING ? s.reverse() : s
  }),
  W = (0, L.oH)(e => e.filter(e => null != e.libraryApplication && e.libraryApplication.isHidden()));

function K(e, t) {
  let n = p.Z.getCurrentUserStatisticsForApplication(e.id);
  if (null != n) return new Date(n.last_played_at).getTime();
  let i = t[e.id];
  return null != i ? i : 0
}

function z() {
  let e = new Set(h.ZP.getRunningVerifiedApplicationIds()),
    t = {},
    n = new Set,
    i = h.ZP.getGamesSeen(!1, !1).map(e => {
      let n = A.Z.getGameByGameData(e);
      return null != n ? (t[n.id] = e.lastFocused * v.Z.Millis.SECOND, n.id) : null
    }),
    r = Object.values(m.Z.getAllLibraryApplications()).map(i => (function(e, t, n, i, r) {
      var s, o;
      if (!r && t.has(e.id)) return null;
      let a = T.Z.getApplication(e.id);
      if (null == a) return null;
      let l = K(a, n);
      if (t.add(e.id), !(0, M.Je)(e) && !g.Z.isInstalled(e.id, e.branchId)) return null;
      return {
        key: "".concat(e.id, "-").concat(e.branchId),
        application: a,
        libraryApplication: e,
        lastPlayed: l,
        supportsCloudSync: null != e && g.Z.supportsCloudSync(e.id, e.branchId),
        isNew: (s = e, o = l, null != s && d()(s.createdAt).isAfter(w) && 0 === o),
        isLaunching: f.Z.launchingGames.has(e.id),
        isRunning: i.has(e.id),
        isLaunchable: (0, U.t)({
          LibraryApplicationStore: m.Z,
          LaunchableGameStore: f.Z,
          DispatchApplicationStore: g.Z,
          ConnectedAppsStore: N.Z,
          applicationId: e.id,
          branchId: e.branchId
        }),
        isUpdatingFlags: m.Z.isUpdatingFlags(e.id, e.branchId),
        shouldShowInLibrary: (0, M.d0)(a, e, O.Z),
        defaultAction: (0, b.i)(e, g.Z, C.Z)
      }
    })(i, n, t, e, !0)).filter(D.lm),
    s = [...i.map(i => (function(e, t, n, i) {
      let r = null != e ? T.Z.getApplication(e) : null;
      if (null == r || null == e || t.has(e)) return null;
      let s = K(r, n);
      return t.add(e), {
        key: e,
        application: r,
        lastPlayed: s,
        supportsCloudSync: !1,
        isNew: !1,
        isLaunching: f.Z.launchingGames.has(e),
        isRunning: i.has(e),
        isLaunchable: (0, U.t)({
          LibraryApplicationStore: m.Z,
          LaunchableGameStore: f.Z,
          DispatchApplicationStore: g.Z,
          ConnectedAppsStore: N.Z,
          applicationId: e,
          branchId: null
        }),
        isUpdatingFlags: !1,
        shouldShowInLibrary: !1,
        libraryApplication: null,
        defaultAction: null
      }
    })(i, n, t, e)).filter(D.lm), ...r].sort((e, t) => e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1);
  return k = null != A.Z.lastFetched && m.Z.fetched, !_().isEqual(s, x) && (x = s, P.isPlatformEmbedded && y.ZP.setSystemTrayApplications(F(x).map(e => e.application).slice(0, 5)), !0)
}
class q extends(i = E.ZP.Store) {
  initialize() {
    this.syncWith([T.Z, A.Z, f.Z, h.ZP, g.Z, C.Z, m.Z, p.Z, O.Z, N.Z], z, 200), this.syncWith([R.Z, S.default], () => !0)
  }
  get applicationFilterQuery() {
    return B
  }
  get applicationViewItems() {
    return x
  }
  get launchableApplicationViewItems() {
    return F(x)
  }
  get libraryApplicationViewItems() {
    return H(x)
  }
  get filteredLibraryApplicationViewItems() {
    return Y(this.libraryApplicationViewItems, B)
  }
  get sortedFilteredLibraryApplicationViewItems() {
    return j(this.filteredLibraryApplicationViewItems, R.Z.sortKey, R.Z.sortDirection, S.default.locale)
  }
  get hiddenLibraryApplicationViewItems() {
    return W(x)
  }
  get hasFetchedApplications() {
    return k
  }
}
o = "ApplicationViewStore", (s = "displayName") in(r = q) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new q(I.Z, {
  LIBRARY_APPLICATION_FILTER_UPDATE: function(e) {
    let {
      query: t
    } = e;
    B = t
  }
})