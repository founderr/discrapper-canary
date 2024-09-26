let r, i;
var a,
    o = n(392711);
var s = n(442837),
    l = n(570140),
    u = n(358085),
    c = n(729436);
function d(e, t, n) {
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
let _ = [],
    E = [],
    f = !1;
let h = _,
    p = {},
    m = null;
let I = 0,
    T = 300000,
    g = 60000,
    S = 3600000,
    A = (e) => {
        h = (0, o.cloneDeep)(e);
        let t = {};
        h.forEach((e) => {
            if (((t[e.id] = (0, u.isAndroid)() ? (0, c.QE)(e) : e), E.length > 0)) {
                var n;
                t[e.id].config.effects = null !== (n = (0, o.sample)(E)) && void 0 !== n ? n : [];
            }
        }),
            (p = t);
    },
    v = () => {
        f = !0;
    },
    N = (e) => {
        let { profileEffects: t } = e;
        (r = void 0), (i = Date.now() + T), (I = 0), A(0 === t.length ? _ : t), (f = !1);
    },
    O = (e) => {
        let { error: t } = e;
        (r = t), (i = Date.now() + Math.min(g * 2 ** I, S)), ++I, A(_), (f = !1);
    },
    R = (e) => {
        let { id: t } = e;
        m = t;
    },
    C = () => {
        A(_), (m = null), (i = void 0), (f = !1);
    },
    y = (e) => {
        C();
    };
class L extends (a = s.ZP.Store) {
    get isFetching() {
        return f;
    }
    get fetchError() {
        return r;
    }
    get profileEffects() {
        return h;
    }
    get tryItOutId() {
        return m;
    }
    canFetch() {
        return null == i || Date.now() >= i;
    }
    hasFetched() {
        return null != i && null == r;
    }
    getProfileEffectById(e) {
        return null != e ? p[e] : void 0;
    }
}
d(L, 'displayName', 'ProfileEffectStore'),
    (t.Z = new L(l.Z, {
        USER_PROFILE_EFFECTS_FETCH: v,
        USER_PROFILE_EFFECTS_FETCH_SUCCESS: N,
        USER_PROFILE_EFFECTS_FETCH_FAILURE: O,
        PROFILE_EFFECTS_SET_TRY_IT_OUT: R,
        LOGOUT: y
    }));
