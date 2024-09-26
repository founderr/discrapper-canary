var r,
    i = n(47120);
var a = n(653041);
var o = n(392711),
    s = n.n(o),
    l = n(442837),
    u = n(846519),
    c = n(570140),
    d = n(274616),
    _ = n(57513),
    E = n(51025),
    f = n(812206),
    h = n(283595),
    p = n(417363),
    m = n(391690),
    I = n(70956),
    T = n(780570),
    g = n(804739);
function S(e, t, n) {
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
let A = new Set(),
    v = {},
    N = new Set(),
    O = {},
    R = new Set(),
    C = {},
    y = 10 * I.Z.Millis.MINUTE,
    L = 6 * I.Z.Millis.HOUR,
    b = 10 * I.Z.Millis.MINUTE,
    D = new u.V7();
function M(e) {
    D.start(e + Math.random() * y, d.o);
}
function P() {
    return M(L), U();
}
function U() {
    if (!(0, g.Q)()) return !1;
    let e = h.Z.entitledBranchIds,
        t = [];
    for (let n of e) !C.hasOwnProperty(n) && ((C[n] = null), t.push(n));
    if (0 === t.length) return !1;
    c.Z.wait(() => d.o(t));
}
function w() {
    if (!(0, g.Q)()) return !1;
    for (let e of R) {
        let { applicationId: t, branchId: n } = (0, T.CP)(e);
        null != f.Z.getApplication(t) && (R.delete(e), x(t, n));
    }
}
function x(e, t) {
    if (null != v[t] && m.Z.shouldBeInstalled(e, t)) {
        let n = v[t],
            r = n.manifestIds,
            i = p.Z.getState(e, t);
        null != i &&
            i.shouldPatch &&
            (i.buildId !== n.id || !s().isEqual(i.manifestIds, r)) &&
            c.Z.wait(() => {
                let i = f.Z.getApplication(e);
                null != i ? (R.delete((0, T.Tu)(e, t)), (0, E.li)(i, t, n.id, r, !0)) : R.add((0, T.Tu)(e, t));
            });
    }
}
function G(e) {
    let { branchId: t } = e;
    A.add(t);
}
function k(e) {
    let { applicationId: t, branchId: n, locale: r, build: i } = e;
    A.delete(n);
    let a = i.manifests.map((e) => {
            let { id: t } = e;
            return t;
        }),
        o = i.id;
    N.delete(n),
        (v[n] = {
            id: o,
            applicationId: t,
            branchId: n,
            locale: r,
            manifestIds: a
        }),
        x(t, n);
}
function B(e) {
    let { branchId: t } = e;
    A.delete(t), N.add(t);
}
function F(e) {
    let { buildId: t } = e;
    !O.hasOwnProperty(t) && (O[t] = null);
}
function Z(e) {
    let { buildId: t, sizeKB: n } = e;
    O[t] = n;
}
function V(e) {
    let { buildId: t } = e;
    null == O[t] && delete O[t];
}
function H(e) {
    let { branches: t } = e,
        n = {};
    for (let e in h.Z.libraryApplications) {
        let t = h.Z.libraryApplications[e];
        n[t.branchId] = t;
    }
    for (let e of t) {
        let { id: t, liveBuildId: r } = e;
        if (r !== C[t]) {
            let e = n[t];
            null != e && c.Z.wait(() => _.l(e.id, e.branchId, !0));
        }
        C[t] = r;
    }
    M(L);
}
function Y() {
    M(b);
}
function j() {
    D.stop();
}
function W(e) {
    let { entitlements: t } = e;
    if (!(0, g.Q)()) return !1;
    let n = new Set();
    for (let e of t) n.add(e.application_id);
    for (let e in h.Z.libraryApplications) {
        let t = h.Z.libraryApplications[e];
        n.has(t.id) && (0, T.Je)(t) && c.Z.wait(() => _.l(t.id, t.branchId));
    }
}
class K extends (r = l.ZP.Store) {
    initialize() {
        this.syncWith([h.Z], U), this.waitFor(p.Z, h.Z, f.Z);
    }
    getTargetBuildId(e, t) {
        return null == v[t] ? null : v[t].id;
    }
    getTargetManifests(e, t) {
        return null == v[t] ? null : v[t].manifestIds;
    }
    hasNoBuild(e, t) {
        return N.has(t);
    }
    isFetching(e, t) {
        return A.has(t);
    }
    needsToFetchBuildSize(e) {
        return !O.hasOwnProperty(e);
    }
    getBuildSize(e) {
        return O[e];
    }
}
S(K, 'displayName', 'ApplicationBuildStore'),
    (t.Z = new K(c.Z, {
        CONNECTION_OPEN: P,
        GAMES_DATABASE_UPDATE: w,
        APPLICATION_BUILD_FETCH_START: G,
        APPLICATION_BUILD_FETCH_SUCCESS: k,
        APPLICATION_BUILD_NOT_FOUND: B,
        APPLICATION_BUILD_SIZE_FETCH_START: F,
        APPLICATION_BUILD_SIZE_FETCH_SUCCESS: Z,
        APPLICATION_BUILD_SIZE_FETCH_FAIL: V,
        APPLICATION_BRANCHES_FETCH_SUCCESS: H,
        APPLICATION_BRANCHES_FETCH_FAIL: Y,
        CONNECTION_CLOSED: j,
        LOGOUT: j,
        SKU_PURCHASE_SUCCESS: W
    }));
