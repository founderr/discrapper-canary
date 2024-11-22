n(47120), n(653041);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(846519),
    d = n(570140),
    f = n(274616),
    _ = n(57513),
    p = n(51025),
    h = n(812206),
    m = n(283595),
    g = n(417363),
    E = n(391690),
    v = n(70956),
    I = n(780570),
    b = n(804739);
let T = new Set(),
    S = {},
    y = new Set(),
    A = {},
    N = new Set(),
    C = {},
    R = 10 * v.Z.Millis.MINUTE,
    O = 6 * v.Z.Millis.HOUR,
    D = 10 * v.Z.Millis.MINUTE,
    L = new c.V7();
function x(e) {
    L.start(e + Math.random() * R, f.o);
}
function w() {
    if (!(0, b.Q)()) return !1;
    let e = m.Z.entitledBranchIds,
        t = [];
    for (let n of e) !C.hasOwnProperty(n) && ((C[n] = null), t.push(n));
    if (0 === t.length) return !1;
    d.Z.wait(() => f.o(t));
}
function M(e, t) {
    if (null != S[t] && E.Z.shouldBeInstalled(e, t)) {
        let n = S[t],
            r = n.manifestIds,
            i = g.Z.getState(e, t);
        null != i &&
            i.shouldPatch &&
            (i.buildId !== n.id || !l().isEqual(i.manifestIds, r)) &&
            d.Z.wait(() => {
                let i = h.Z.getApplication(e);
                null != i ? (N.delete((0, I.Tu)(e, t)), (0, p.li)(i, t, n.id, r, !0)) : N.add((0, I.Tu)(e, t));
            });
    }
}
function P() {
    L.stop();
}
class k extends (r = u.ZP.Store) {
    initialize() {
        this.syncWith([m.Z], w), this.waitFor(g.Z, m.Z, h.Z);
    }
    getTargetBuildId(e, t) {
        return null == S[t] ? null : S[t].id;
    }
    getTargetManifests(e, t) {
        return null == S[t] ? null : S[t].manifestIds;
    }
    hasNoBuild(e, t) {
        return y.has(t);
    }
    isFetching(e, t) {
        return T.has(t);
    }
    needsToFetchBuildSize(e) {
        return !A.hasOwnProperty(e);
    }
    getBuildSize(e) {
        return A[e];
    }
}
(s = 'ApplicationBuildStore'),
    (a = 'displayName') in (i = k)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new k(d.Z, {
        CONNECTION_OPEN: function () {
            return x(O), w();
        },
        GAMES_DATABASE_UPDATE: function () {
            if (!(0, b.Q)()) return !1;
            for (let e of N) {
                let { applicationId: t, branchId: n } = (0, I.CP)(e);
                null != h.Z.getApplication(t) && (N.delete(e), M(t, n));
            }
        },
        APPLICATION_BUILD_FETCH_START: function (e) {
            let { branchId: t } = e;
            T.add(t);
        },
        APPLICATION_BUILD_FETCH_SUCCESS: function (e) {
            let { applicationId: t, branchId: n, locale: r, build: i } = e;
            T.delete(n);
            let a = i.manifests.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                s = i.id;
            y.delete(n),
                (S[n] = {
                    id: s,
                    applicationId: t,
                    branchId: n,
                    locale: r,
                    manifestIds: a
                }),
                M(t, n);
        },
        APPLICATION_BUILD_NOT_FOUND: function (e) {
            let { branchId: t } = e;
            T.delete(t), y.add(t);
        },
        APPLICATION_BUILD_SIZE_FETCH_START: function (e) {
            let { buildId: t } = e;
            !A.hasOwnProperty(t) && (A[t] = null);
        },
        APPLICATION_BUILD_SIZE_FETCH_SUCCESS: function (e) {
            let { buildId: t, sizeKB: n } = e;
            A[t] = n;
        },
        APPLICATION_BUILD_SIZE_FETCH_FAIL: function (e) {
            let { buildId: t } = e;
            null == A[t] && delete A[t];
        },
        APPLICATION_BRANCHES_FETCH_SUCCESS: function (e) {
            let { branches: t } = e,
                n = {};
            for (let e in m.Z.libraryApplications) {
                let t = m.Z.libraryApplications[e];
                n[t.branchId] = t;
            }
            for (let e of t) {
                let { id: t, liveBuildId: r } = e;
                if (r !== C[t]) {
                    let e = n[t];
                    null != e && d.Z.wait(() => _.l(e.id, e.branchId, !0));
                }
                C[t] = r;
            }
            x(O);
        },
        APPLICATION_BRANCHES_FETCH_FAIL: function () {
            x(D);
        },
        CONNECTION_CLOSED: P,
        LOGOUT: P,
        SKU_PURCHASE_SUCCESS: function (e) {
            let { entitlements: t } = e;
            if (!(0, b.Q)()) return !1;
            let n = new Set();
            for (let e of t) n.add(e.application_id);
            for (let e in m.Z.libraryApplications) {
                let t = m.Z.libraryApplications[e];
                n.has(t.id) && (0, I.Je)(t) && d.Z.wait(() => _.l(t.id, t.branchId));
            }
        }
    }));
