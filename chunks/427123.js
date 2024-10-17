n(47120), n(653041);
var i,
    a,
    s,
    r,
    l = n(392711),
    o = n.n(l),
    c = n(442837),
    u = n(433517),
    d = n(570140),
    _ = n(496929),
    E = n(16084),
    I = n(728345),
    m = n(812206),
    T = n(594190),
    f = n(594174),
    h = n(580130),
    N = n(55563),
    p = n(981631);
let C = 'DetectedOffPlatformPremiumPerksStore',
    g = {},
    S = {},
    A = [];
function x() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of o().values(S)) {
        if (A.includes(t)) continue;
        let i = m.Z.getApplication(n);
        if (null == i) {
            !m.Z.isFetchingApplication(n) && !m.Z.didFetchingApplicationFail(n) && I.ZP.fetchApplication(n);
            continue;
        }
        let a = N.Z.get(t);
        if (null == a) {
            !N.Z.isFetching(t) && !N.Z.didFetchingSkuFail(t) && E.$N(i.id, t);
            continue;
        }
        h.Z.applicationIdsFetching.has(i.id) || h.Z.isEntitledToSku(f.default.getCurrentUser(), t, i.id, i.id) || !a.available
            ? null != g[t] && (delete g[t], (e = !0))
            : ((g[t] = {
                  skuId: t,
                  applicationId: n
              }),
              (e = !0));
    }
    return e;
}
class R extends (i = c.ZP.Store) {
    initialize() {
        var e;
        this.waitFor(T.ZP, N.Z, h.Z), (A = null !== (e = u.K.get(C)) && void 0 !== e ? e : A);
    }
    getDetectedOffPlatformPremiumPerks() {
        return o().values(g);
    }
}
(r = 'DetectedOffPlatformPremiumPerksStore'),
    (s = 'displayName') in (a = R)
        ? Object.defineProperty(a, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = r),
    (t.Z = new R(d.Z, {
        LOGOUT: function () {
            (g = {}), (S = {});
        },
        SKU_FETCH_SUCCESS: x,
        ENTITLEMENT_FETCH_APPLICATION_SUCCESS: x,
        ENTITLEMENT_CREATE: x,
        APPLICATION_FETCH_SUCCESS: x,
        DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
            let { skuId: t } = e;
            if ((delete g[t], A.includes(t))) return !1;
            A.push(t), u.K.set(C, A);
        },
        RUNNING_GAMES_CHANGE: function () {
            let e = !1;
            for (let { id: t, distributor: n } of T.ZP.getRunningGames())
                if (null != t && n !== p.GQo.DISCORD)
                    for (let { skuId: n, applicationId: i } of p.Lg6) {
                        if (!(i !== t || A.includes(n)))
                            null == S[n] &&
                                (!h.Z.applicationIdsFetched.has(i) && !h.Z.applicationIdsFetching.has(i) && null == h.Z.getForSku(n) && _.yD(i),
                                (S[n] = {
                                    skuId: n,
                                    applicationId: i
                                }),
                                (e = !0));
                    }
            return e && x(), e;
        }
    }));
