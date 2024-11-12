n(47120), n(789020), n(177593);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(433517),
    d = n(570140),
    f = n(85521),
    _ = n(630388),
    p = n(780570),
    h = n(314897),
    m = n(981631);
let g = 'LibraryApplicationStore';
function E() {
    var e;
    return null !== (e = c.K.get(g)) && void 0 !== e ? e : {};
}
let v = !1,
    I = {},
    b = {},
    S = new Set(),
    T = {},
    y = {},
    A = !1;
function N() {
    c.K.set(g, {
        ...E(),
        activeLaunchOptionIds: y
    });
}
function C() {
    c.K.set(g, {
        ...E(),
        activeLibraryApplicationBranchIds: T
    });
}
function R(e) {
    for (let t of e) {
        let e = f.Z.createFromServer(t);
        I[(0, p.Tu)(e.id, e.branchId)] = e;
    }
}
function O(e) {
    let { libraryApplication: t } = e,
        n = f.Z.createFromServer(t),
        r = (0, p.Tu)(n.id, n.branchId);
    (I[r] = n), S.delete(r);
}
function D(e, t) {
    var n;
    let r = (0, p.Tu)(e, t);
    return null !== (n = I[r]) && void 0 !== n ? n : b[r];
}
function L() {
    return {
        ...b,
        ...I
    };
}
class x extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(h.default);
        let e = c.K.get(g);
        null != e && (null == e.activeLaunchOptionIds ? N() : (y = e.activeLaunchOptionIds), null == e.activeLibraryApplicationBranchIds ? C() : (T = e.activeLibraryApplicationBranchIds));
    }
    get libraryApplications() {
        return (function (e) {
            let t = L();
            return (
                Object.keys(t).forEach((n) => {
                    !e(t[n]) && delete t[n];
                }),
                t
            );
        })((e) => !e.isHidden());
    }
    getAllLibraryApplications() {
        return L();
    }
    hasLibraryApplication() {
        return Object.keys(L()).length > 0;
    }
    hasApplication(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = D(e, t);
        return !(null == r || (!n && r.isHidden())) && (0, p.Je)(r);
    }
    getLibraryApplication(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = D(e, t);
        return n && null != r ? ((0, p.Je)(r) ? r : null) : r;
    }
    getActiveLibraryApplication(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = T[e];
        if (null != n) {
            var r;
            let i = (0, p.Tu)(e, n),
                a = null !== (r = I[i]) && void 0 !== r ? r : b[i];
            if (null != a && (0, p.Je)(a) && (t || !a.isHidden())) return a;
        }
        let i = L();
        for (let n in i)
            if (i[n].id === e) {
                let e = i[n];
                if ((0, p.Je)(e) && (t || !e.isHidden())) return e;
            }
    }
    isUpdatingFlags(e, t) {
        return S.has((0, p.Tu)(e, t));
    }
    getActiveLaunchOptionId(e, t) {
        return y[(0, p.Tu)(e, t)];
    }
    get fetched() {
        return v;
    }
    get entitledBranchIds() {
        return l()(L())
            .values()
            .filter((e) => (0, p.Je)(e))
            .map((e) => e.branchId)
            .value();
    }
    get hasRemovedLibraryApplicationThisSession() {
        return A;
    }
    whenInitialized(e) {
        this.addConditionalChangeListener(() => {
            if (v) return setImmediate(e), !1;
        });
    }
}
(s = 'LibraryApplicationStore'),
    (a = 'displayName') in (i = x)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new x(d.Z, {
        LOGOUT: function () {
            v = !1;
        },
        LIBRARY_FETCH_SUCCESS: function (e) {
            let { libraryApplications: t } = e;
            (I = {}), R(t), (v = !0);
        },
        SKU_PURCHASE_SUCCESS: function (e) {
            let { libraryApplications: t } = e;
            R(t);
        },
        LIBRARY_APPLICATION_FLAGS_UPDATE_START: function (e) {
            let { applicationId: t, branchId: n, flags: r } = e,
                i = (0, p.Tu)(t, n),
                a = D(t, n);
            null != a && !a.isHidden() && _.yE(r, m.eHb.HIDDEN) && (A = !0), S.add(i);
        },
        LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: O,
        LIBRARY_APPLICATION_UPDATE: O,
        LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE: function (e) {
            let { applicationId: t, branchId: n, launchOptionId: r } = e;
            (y[(0, p.Tu)(t, n)] = r), N();
        },
        LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE: function (e) {
            let { applicationId: t, branchId: n } = e;
            if (T[t] === n) return !1;
            (T[t] = n), C();
        },
        LIBRARY_APPLICATIONS_TEST_MODE_ENABLED: function (e) {
            let { libraryApplications: t } = e;
            for (let e of t) b[(0, p.Tu)(e.id, e.branchId)] = e;
        },
        DEVELOPER_TEST_MODE_RESET: function () {
            b = {};
        }
    }));
