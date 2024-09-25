var r,
    i = n(47120);
var a = n(789020);
var o = n(177593);
var s = n(392711),
    l = n.n(s),
    u = n(442837),
    c = n(433517),
    d = n(570140),
    _ = n(85521),
    E = n(630388),
    f = n(780570),
    h = n(314897),
    p = n(981631);
function m(e, t, n) {
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
let I = 'LibraryApplicationStore';
function T() {
    var e;
    return null !== (e = c.K.get(I)) && void 0 !== e ? e : {};
}
let g = !1,
    S = {},
    A = {},
    v = new Set(),
    N = {},
    O = {},
    R = !1;
function C() {
    c.K.set(I, {
        ...T(),
        activeLaunchOptionIds: O
    });
}
function y() {
    c.K.set(I, {
        ...T(),
        activeLibraryApplicationBranchIds: N
    });
}
function b(e) {
    for (let t of e) {
        let e = _.Z.createFromServer(t);
        S[(0, f.Tu)(e.id, e.branchId)] = e;
    }
}
function L() {
    g = !1;
}
function D(e) {
    let { libraryApplications: t } = e;
    (S = {}), b(t), (g = !0);
}
function M(e) {
    let { libraryApplications: t } = e;
    b(t);
}
function P(e) {
    let { applicationId: t, branchId: n, flags: r } = e,
        i = (0, f.Tu)(t, n),
        a = F(t, n);
    null != a && !a.isHidden() && E.yE(r, p.eHb.HIDDEN) && (R = !0), v.add(i);
}
function U(e) {
    let { libraryApplication: t } = e,
        n = _.Z.createFromServer(t),
        r = (0, f.Tu)(n.id, n.branchId);
    (S[r] = n), v.delete(r);
}
function w(e) {
    let { applicationId: t, branchId: n, launchOptionId: r } = e;
    (O[(0, f.Tu)(t, n)] = r), C();
}
function x(e) {
    let { applicationId: t, branchId: n } = e;
    if (N[t] === n) return !1;
    (N[t] = n), y();
}
function G(e) {
    let { libraryApplications: t } = e;
    for (let e of t) A[(0, f.Tu)(e.id, e.branchId)] = e;
}
function k() {
    A = {};
}
function B(e) {
    let t = Z();
    return (
        Object.keys(t).forEach((n) => {
            !e(t[n]) && delete t[n];
        }),
        t
    );
}
function F(e, t) {
    var n;
    let r = (0, f.Tu)(e, t);
    return null !== (n = S[r]) && void 0 !== n ? n : A[r];
}
function Z() {
    return {
        ...A,
        ...S
    };
}
class V extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(h.default);
        let e = c.K.get(I);
        null != e && (null == e.activeLaunchOptionIds ? C() : (O = e.activeLaunchOptionIds), null == e.activeLibraryApplicationBranchIds ? y() : (N = e.activeLibraryApplicationBranchIds));
    }
    get libraryApplications() {
        return B((e) => !e.isHidden());
    }
    getAllLibraryApplications() {
        return Z();
    }
    hasLibraryApplication() {
        return Object.keys(Z()).length > 0;
    }
    hasApplication(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = F(e, t);
        return !(null == r || (!n && r.isHidden())) && (0, f.Je)(r);
    }
    getLibraryApplication(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = F(e, t);
        return n && null != r ? ((0, f.Je)(r) ? r : null) : r;
    }
    getActiveLibraryApplication(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = N[e];
        if (null != n) {
            var r;
            let i = (0, f.Tu)(e, n),
                a = null !== (r = S[i]) && void 0 !== r ? r : A[i];
            if (null != a && (0, f.Je)(a) && (t || !a.isHidden())) return a;
        }
        let i = Z();
        for (let n in i)
            if (i[n].id === e) {
                let e = i[n];
                if ((0, f.Je)(e) && (t || !e.isHidden())) return e;
            }
    }
    isUpdatingFlags(e, t) {
        return v.has((0, f.Tu)(e, t));
    }
    getActiveLaunchOptionId(e, t) {
        return O[(0, f.Tu)(e, t)];
    }
    get fetched() {
        return g;
    }
    get entitledBranchIds() {
        return l()(Z())
            .values()
            .filter((e) => (0, f.Je)(e))
            .map((e) => e.branchId)
            .value();
    }
    get hasRemovedLibraryApplicationThisSession() {
        return R;
    }
    whenInitialized(e) {
        this.addConditionalChangeListener(() => {
            if (g) return setImmediate(e), !1;
        });
    }
}
m(V, 'displayName', 'LibraryApplicationStore'),
    (t.Z = new V(d.Z, {
        LOGOUT: L,
        LIBRARY_FETCH_SUCCESS: D,
        SKU_PURCHASE_SUCCESS: M,
        LIBRARY_APPLICATION_FLAGS_UPDATE_START: P,
        LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: U,
        LIBRARY_APPLICATION_UPDATE: U,
        LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE: w,
        LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE: x,
        LIBRARY_APPLICATIONS_TEST_MODE_ENABLED: G,
        DEVELOPER_TEST_MODE_RESET: k
    }));
