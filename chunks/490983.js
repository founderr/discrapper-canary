var r,
    i = n(47120);
var a = n(658722),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    u = n(913527),
    c = n.n(u),
    d = n(442837),
    _ = n(570140),
    E = n(812206),
    f = n(594190),
    h = n(592745),
    p = n(706454),
    m = n(757266),
    I = n(77498),
    T = n(283595),
    g = n(246946),
    S = n(230307),
    A = n(799777),
    v = n(417363),
    N = n(941128),
    O = n(70956),
    R = n(251625),
    C = n(823379),
    y = n(780570),
    b = n(358085),
    L = n(998502),
    D = n(804739),
    M = n(7956),
    P = n(981631);
function U(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let w = 5,
    x = c()().subtract(1, 'week'),
    G = [],
    k = '',
    B = !1;
function F(e, t) {
    return e.application.name.localeCompare(t.application.name, p.default.locale, { sensitivity: 'base' });
}
function Z(e, t) {
    return null != e && c()(e.createdAt).isAfter(x) && 0 === t;
}
let V = {
        [P.iEv.NAME]: F,
        [P.iEv.PLATFORM]: (e, t, n) => {
            let r = e.libraryApplication.getDistributor(),
                i = t.libraryApplication.getDistributor();
            return r === i ? (n === P.sHY.DESCENDING ? -1 : 1) * F(e, t) : null == r ? 1 : null == i ? -1 : r.localeCompare(i);
        },
        [P.iEv.LAST_PLAYED]: (e, t) => (e.isNew && !t.isNew ? -1 : !e.isNew && t.isNew ? 1 : e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1),
        [P.iEv.ACTIONS]: null
    },
    H = (0, R.oH)((e) => e.filter((e) => null != e.libraryApplication && e.shouldShowInLibrary)),
    Y = (0, R.oH)((e) => e.filter((e) => null != e.libraryApplication && v.Z.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId))),
    j = (0, R.oH)((e, t) => e.filter((e) => o()(t.toLowerCase(), e.application.name.toLowerCase()))),
    W = (0, R.oH)((e, t, n, r) => {
        let i = V[t];
        if (null == i) return e;
        let a = [...e].sort(i);
        return n === P.sHY.DESCENDING ? a.reverse() : a;
    }),
    K = (0, R.oH)((e) => e.filter((e) => null != e.libraryApplication && e.libraryApplication.isHidden()));
function z(e, t) {
    let n = S.Z.getCurrentUserStatisticsForApplication(e.id);
    if (null != n) return new Date(n.last_played_at).getTime();
    let r = t[e.id];
    return null != r ? r : 0;
}
function q(e) {
    let { query: t } = e;
    k = t;
}
function Q(e, t, n, r, i) {
    if (!i && t.has(e.id)) return null;
    let a = E.Z.getApplication(e.id);
    if (null == a) return null;
    let o = z(a, n);
    return (t.add(e.id), (0, y.Je)(e) || v.Z.isInstalled(e.id, e.branchId))
        ? {
              key: ''.concat(e.id, '-').concat(e.branchId),
              application: a,
              libraryApplication: e,
              lastPlayed: o,
              supportsCloudSync: null != e && v.Z.supportsCloudSync(e.id, e.branchId),
              isNew: Z(e, o),
              isLaunching: h.Z.launchingGames.has(e.id),
              isRunning: r.has(e.id),
              isLaunchable: (0, D.t)({
                  LibraryApplicationStore: T.Z,
                  LaunchableGameStore: h.Z,
                  DispatchApplicationStore: v.Z,
                  ConnectedAppsStore: m.Z,
                  applicationId: e.id,
                  branchId: e.branchId
              }),
              isUpdatingFlags: T.Z.isUpdatingFlags(e.id, e.branchId),
              shouldShowInLibrary: (0, y.d0)(a, e, g.Z),
              defaultAction: (0, M.i)(e, v.Z, N.Z)
          }
        : null;
}
function X(e, t, n, r) {
    let i = null != e ? E.Z.getApplication(e) : null;
    if (null == i || null == e || t.has(e)) return null;
    let a = z(i, n);
    return (
        t.add(e),
        {
            key: e,
            application: i,
            lastPlayed: a,
            supportsCloudSync: !1,
            isNew: !1,
            isLaunching: h.Z.launchingGames.has(e),
            isRunning: r.has(e),
            isLaunchable: (0, D.t)({
                LibraryApplicationStore: T.Z,
                LaunchableGameStore: h.Z,
                DispatchApplicationStore: v.Z,
                ConnectedAppsStore: m.Z,
                applicationId: e,
                branchId: null
            }),
            isUpdatingFlags: !1,
            shouldShowInLibrary: !1,
            libraryApplication: null,
            defaultAction: null
        }
    );
}
function $() {
    let e = new Set(f.ZP.getRunningVerifiedApplicationIds()),
        t = {},
        n = new Set(),
        r = f.ZP.getGamesSeen(!1, !1).map((e) => {
            let n = I.Z.getGameByGameData(e);
            return null != n ? ((t[n.id] = e.lastFocused * O.Z.Millis.SECOND), n.id) : null;
        }),
        i = Object.values(T.Z.getAllLibraryApplications())
            .map((r) => Q(r, n, t, e, !0))
            .filter(C.lm),
        a = [...r.map((r) => X(r, n, t, e)).filter(C.lm), ...i].sort((e, t) => (e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1));
    return (
        (B = null != I.Z.lastFetched && T.Z.fetched),
        !l().isEqual(a, G) &&
            ((G = a),
            b.isPlatformEmbedded &&
                L.ZP.setSystemTrayApplications(
                    Y(G)
                        .map((e) => e.application)
                        .slice(0, w)
                ),
            !0)
    );
}
class J extends (r = d.ZP.Store) {
    initialize() {
        this.syncWith([E.Z, I.Z, h.Z, f.ZP, v.Z, N.Z, T.Z, S.Z, g.Z, m.Z], $, 200), this.syncWith([A.Z, p.default], () => !0);
    }
    get applicationFilterQuery() {
        return k;
    }
    get applicationViewItems() {
        return G;
    }
    get launchableApplicationViewItems() {
        return Y(G);
    }
    get libraryApplicationViewItems() {
        return H(G);
    }
    get filteredLibraryApplicationViewItems() {
        return j(this.libraryApplicationViewItems, k);
    }
    get sortedFilteredLibraryApplicationViewItems() {
        return W(this.filteredLibraryApplicationViewItems, A.Z.sortKey, A.Z.sortDirection, p.default.locale);
    }
    get hiddenLibraryApplicationViewItems() {
        return K(G);
    }
    get hasFetchedApplications() {
        return B;
    }
}
U(J, 'displayName', 'ApplicationViewStore'), (t.Z = new J(_.Z, { LIBRARY_APPLICATION_FILTER_UPDATE: q }));
