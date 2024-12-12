let i, a;
var s,
    o = r(392711);
var l = r(442837),
    u = r(570140);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let d = [],
    f = [],
    _ = !1;
let h = d,
    p = {},
    m = null;
let g = 0,
    E = 300000,
    v = 60000,
    I = 3600000,
    T = (e) => {
        h = (0, o.cloneDeep)(e);
        let n = {};
        h.forEach((e) => {
            if (((n[e.id] = e), f.length > 0)) {
                var r;
                n[e.id].config.effects = null !== (r = (0, o.sample)(f)) && void 0 !== r ? r : [];
            }
        }),
            (p = n);
    },
    b = () => {
        _ = !0;
    },
    y = (e) => {
        let { profileEffects: n } = e;
        (i = void 0), (a = Date.now() + E), (g = 0), T(0 === n.length ? d : n), (_ = !1);
    },
    S = (e) => {
        let { error: n } = e;
        (i = n), (a = Date.now() + Math.min(v * 2 ** g, I)), ++g, T(d), (_ = !1);
    },
    A = (e) => {
        let { id: n } = e;
        m = n;
    },
    N = () => {
        T(d), (m = null), (a = void 0), (_ = !1);
    },
    C = (e) => {
        N();
    };
class R extends (s = l.ZP.Store) {
    get isFetching() {
        return _;
    }
    get fetchError() {
        return i;
    }
    get profileEffects() {
        return h;
    }
    get tryItOutId() {
        return m;
    }
    canFetch() {
        return null == a || Date.now() >= a;
    }
    hasFetched() {
        return null != a && null == i;
    }
    getProfileEffectById(e) {
        return null != e ? p[e] : void 0;
    }
}
c(R, 'displayName', 'ProfileEffectStore'),
    (n.Z = new R(u.Z, {
        USER_PROFILE_EFFECTS_FETCH: b,
        USER_PROFILE_EFFECTS_FETCH_SUCCESS: y,
        USER_PROFILE_EFFECTS_FETCH_FAILURE: S,
        PROFILE_EFFECTS_SET_TRY_IT_OUT: A,
        LOGOUT: C
    }));
