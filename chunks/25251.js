let r, i;
var a,
    s,
    o,
    l,
    u = n(392711),
    c = n(442837),
    d = n(570140);
let _ = [],
    E = [],
    f = !1;
let h = _,
    p = {},
    I = null;
let m = 0,
    T = (e) => {
        h = (0, u.cloneDeep)(e);
        let t = {};
        h.forEach((e) => {
            if (((t[e.id] = e), E.length > 0)) {
                var n;
                t[e.id].config.effects = null !== (n = (0, u.sample)(E)) && void 0 !== n ? n : [];
            }
        }),
            (p = t);
    },
    S = () => {
        T(_), (I = null), (i = void 0), (f = !1);
    };
class g extends (l = c.ZP.Store) {
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
        return I;
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
(o = 'ProfileEffectStore'),
    (s = 'displayName') in (a = g)
        ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = o),
    (t.Z = new g(d.Z, {
        USER_PROFILE_EFFECTS_FETCH: () => {
            f = !0;
        },
        USER_PROFILE_EFFECTS_FETCH_SUCCESS: (e) => {
            let { profileEffects: t } = e;
            (r = void 0), (i = Date.now() + 300000), (m = 0), T(0 === t.length ? _ : t), (f = !1);
        },
        USER_PROFILE_EFFECTS_FETCH_FAILURE: (e) => {
            let { error: t } = e;
            (r = t), (i = Date.now() + Math.min(60000 * 2 ** m, 3600000)), ++m, T(_), (f = !1);
        },
        PROFILE_EFFECTS_SET_TRY_IT_OUT: (e) => {
            let { id: t } = e;
            I = t;
        },
        LOGOUT: (e) => {
            S();
        }
    }));
