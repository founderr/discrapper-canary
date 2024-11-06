n(47120);
var r,
    i,
    a,
    s,
    o = n(658722),
    l = n.n(o),
    u = n(392711),
    c = n.n(u),
    d = n(913527),
    f = n.n(d),
    _ = n(442837),
    h = n(570140),
    p = n(812206),
    m = n(594190),
    g = n(592745),
    E = n(706454),
    v = n(757266),
    I = n(77498),
    S = n(283595),
    T = n(246946),
    b = n(230307),
    y = n(799777),
    A = n(417363),
    N = n(941128),
    C = n(70956),
    R = n(251625),
    O = n(823379),
    D = n(780570),
    L = n(358085),
    x = n(998502),
    w = n(804739),
    M = n(7956),
    P = n(981631);
let k = f()().subtract(1, 'week'),
    U = [],
    G = '',
    B = !1;
function Z(e, t) {
    return e.application.name.localeCompare(t.application.name, E.default.locale, { sensitivity: 'base' });
}
let F = {
        [P.iEv.NAME]: Z,
        [P.iEv.PLATFORM]: (e, t, n) => {
            let r = e.libraryApplication.getDistributor(),
                i = t.libraryApplication.getDistributor();
            return r === i ? (n === P.sHY.DESCENDING ? -1 : 1) * Z(e, t) : null == r ? 1 : null == i ? -1 : r.localeCompare(i);
        },
        [P.iEv.LAST_PLAYED]: (e, t) => (e.isNew && !t.isNew ? -1 : !e.isNew && t.isNew ? 1 : e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1),
        [P.iEv.ACTIONS]: null
    },
    V = (0, R.oH)((e) => e.filter((e) => null != e.libraryApplication && e.shouldShowInLibrary)),
    H = (0, R.oH)((e) => e.filter((e) => null != e.libraryApplication && A.Z.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId))),
    j = (0, R.oH)((e, t) => e.filter((e) => l()(t.toLowerCase(), e.application.name.toLowerCase()))),
    Y = (0, R.oH)((e, t, n, r) => {
        let i = F[t];
        if (null == i) return e;
        let a = [...e].sort(i);
        return n === P.sHY.DESCENDING ? a.reverse() : a;
    }),
    W = (0, R.oH)((e) => e.filter((e) => null != e.libraryApplication && e.libraryApplication.isHidden()));
function K(e, t) {
    let n = b.Z.getCurrentUserStatisticsForApplication(e.id);
    if (null != n) return new Date(n.last_played_at).getTime();
    let r = t[e.id];
    return null != r ? r : 0;
}
function z() {
    let e = new Set(m.ZP.getRunningVerifiedApplicationIds()),
        t = {},
        n = new Set(),
        r = m.ZP.getGamesSeen(!1, !1).map((e) => {
            let n = I.Z.getGameByGameData(e);
            return null != n ? ((t[n.id] = e.lastFocused * C.Z.Millis.SECOND), n.id) : null;
        }),
        i = Object.values(S.Z.getAllLibraryApplications())
            .map((r) =>
                (function (e, t, n, r, i) {
                    var a, s;
                    if (!i && t.has(e.id)) return null;
                    let o = p.Z.getApplication(e.id);
                    if (null == o) return null;
                    let l = K(o, n);
                    if ((t.add(e.id), !(0, D.Je)(e) && !A.Z.isInstalled(e.id, e.branchId))) return null;
                    return {
                        key: ''.concat(e.id, '-').concat(e.branchId),
                        application: o,
                        libraryApplication: e,
                        lastPlayed: l,
                        supportsCloudSync: null != e && A.Z.supportsCloudSync(e.id, e.branchId),
                        isNew: ((a = e), (s = l), null != a && f()(a.createdAt).isAfter(k) && 0 === s),
                        isLaunching: g.Z.launchingGames.has(e.id),
                        isRunning: r.has(e.id),
                        isLaunchable: (0, w.t)({
                            LibraryApplicationStore: S.Z,
                            LaunchableGameStore: g.Z,
                            DispatchApplicationStore: A.Z,
                            ConnectedAppsStore: v.Z,
                            applicationId: e.id,
                            branchId: e.branchId
                        }),
                        isUpdatingFlags: S.Z.isUpdatingFlags(e.id, e.branchId),
                        shouldShowInLibrary: (0, D.d0)(o, e, T.Z),
                        defaultAction: (0, M.i)(e, A.Z, N.Z)
                    };
                })(r, n, t, e, !0)
            )
            .filter(O.lm),
        a = [
            ...r
                .map((r) =>
                    (function (e, t, n, r) {
                        let i = null != e ? p.Z.getApplication(e) : null;
                        if (null == i || null == e || t.has(e)) return null;
                        let a = K(i, n);
                        return (
                            t.add(e),
                            {
                                key: e,
                                application: i,
                                lastPlayed: a,
                                supportsCloudSync: !1,
                                isNew: !1,
                                isLaunching: g.Z.launchingGames.has(e),
                                isRunning: r.has(e),
                                isLaunchable: (0, w.t)({
                                    LibraryApplicationStore: S.Z,
                                    LaunchableGameStore: g.Z,
                                    DispatchApplicationStore: A.Z,
                                    ConnectedAppsStore: v.Z,
                                    applicationId: e,
                                    branchId: null
                                }),
                                isUpdatingFlags: !1,
                                shouldShowInLibrary: !1,
                                libraryApplication: null,
                                defaultAction: null
                            }
                        );
                    })(r, n, t, e)
                )
                .filter(O.lm),
            ...i
        ].sort((e, t) => (e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1));
    return (
        (B = null != I.Z.lastFetched && S.Z.fetched),
        !c().isEqual(a, U) &&
            ((U = a),
            L.isPlatformEmbedded &&
                x.ZP.setSystemTrayApplications(
                    H(U)
                        .map((e) => e.application)
                        .slice(0, 5)
                ),
            !0)
    );
}
class q extends (r = _.ZP.Store) {
    initialize() {
        this.syncWith([p.Z, I.Z, g.Z, m.ZP, A.Z, N.Z, S.Z, b.Z, T.Z, v.Z], z, 200), this.syncWith([y.Z, E.default], () => !0);
    }
    get applicationFilterQuery() {
        return G;
    }
    get applicationViewItems() {
        return U;
    }
    get launchableApplicationViewItems() {
        return H(U);
    }
    get libraryApplicationViewItems() {
        return V(U);
    }
    get filteredLibraryApplicationViewItems() {
        return j(this.libraryApplicationViewItems, G);
    }
    get sortedFilteredLibraryApplicationViewItems() {
        return Y(this.filteredLibraryApplicationViewItems, y.Z.sortKey, y.Z.sortDirection, E.default.locale);
    }
    get hiddenLibraryApplicationViewItems() {
        return W(U);
    }
    get hasFetchedApplications() {
        return B;
    }
}
(s = 'ApplicationViewStore'),
    (a = 'displayName') in (i = q)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new q(h.Z, {
        LIBRARY_APPLICATION_FILTER_UPDATE: function (e) {
            let { query: t } = e;
            G = t;
        }
    }));
