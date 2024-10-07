n(47120), n(653041);
var i,
    a,
    s,
    l,
    r = n(392711),
    o = n.n(r),
    c = n(442837),
    d = n(433517),
    u = n(570140),
    _ = n(496929),
    E = n(16084),
    I = n(728345),
    m = n(812206),
    T = n(594190),
    N = n(594174),
    h = n(580130),
    C = n(55563),
    p = n(981631);
let f = 'DetectedOffPlatformPremiumPerksStore',
    g = {},
    A = {},
    S = [];
function M() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of o().values(A)) {
        if (S.includes(t)) continue;
        let i = m.Z.getApplication(n);
        if (null == i) {
            !m.Z.isFetchingApplication(n) && !m.Z.didFetchingApplicationFail(n) && I.ZP.fetchApplication(n);
            continue;
        }
        let a = C.Z.get(t);
        if (null == a) {
            !C.Z.isFetching(t) && !C.Z.didFetchingSkuFail(t) && E.$N(i.id, t);
            continue;
        }
        h.Z.applicationIdsFetching.has(i.id) || h.Z.isEntitledToSku(N.default.getCurrentUser(), t, i.id, i.id) || !a.available
            ? null != g[t] && (delete g[t], (e = !0))
            : ((g[t] = {
                  skuId: t,
                  applicationId: n
              }),
              (e = !0));
    }
    return e;
}
class O extends (i = c.ZP.Store) {
    initialize() {
        var e;
        this.waitFor(T.ZP, C.Z, h.Z), (S = null !== (e = d.K.get(f)) && void 0 !== e ? e : S);
    }
    getDetectedOffPlatformPremiumPerks() {
        return o().values(g);
    }
}
(l = 'DetectedOffPlatformPremiumPerksStore'),
    (s = 'displayName') in (a = O)
        ? Object.defineProperty(a, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = l),
    (t.Z = new O(u.Z, {
        LOGOUT: function () {
            (g = {}), (A = {});
        },
        SKU_FETCH_SUCCESS: M,
        ENTITLEMENT_FETCH_APPLICATION_SUCCESS: M,
        ENTITLEMENT_CREATE: M,
        APPLICATION_FETCH_SUCCESS: M,
        DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
            let { skuId: t } = e;
            if ((delete g[t], S.includes(t))) return !1;
            S.push(t), d.K.set(f, S);
        },
        RUNNING_GAMES_CHANGE: function () {
            let e = !1;
            for (let { id: t, distributor: n } of T.ZP.getRunningGames())
                if (null != t && n !== p.GQo.DISCORD)
                    for (let { skuId: n, applicationId: i } of p.Lg6) {
                        if (!(i !== t || S.includes(n)))
                            null == A[n] &&
                                (!h.Z.applicationIdsFetched.has(i) && !h.Z.applicationIdsFetching.has(i) && null == h.Z.getForSku(n) && _.yD(i),
                                (A[n] = {
                                    skuId: n,
                                    applicationId: i
                                }),
                                (e = !0));
                    }
            return e && M(), e;
        }
    }));
