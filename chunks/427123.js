n(47120), n(653041);
var i,
    r,
    l,
    a,
    o = n(392711),
    s = n.n(o),
    c = n(442837),
    u = n(433517),
    d = n(570140),
    m = n(496929),
    f = n(16084),
    h = n(728345),
    p = n(812206),
    g = n(594190),
    _ = n(594174),
    C = n(580130),
    E = n(55563),
    I = n(981631);
let x = 'DetectedOffPlatformPremiumPerksStore',
    v = {},
    N = {},
    T = [];
function S() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of s().values(N)) {
        if (T.includes(t)) continue;
        let i = p.Z.getApplication(n);
        if (null == i) {
            !p.Z.isFetchingApplication(n) && !p.Z.didFetchingApplicationFail(n) && h.ZP.fetchApplication(n);
            continue;
        }
        let r = E.Z.get(t);
        if (null == r) {
            !E.Z.isFetching(t) && !E.Z.didFetchingSkuFail(t) && f.$N(i.id, t);
            continue;
        }
        C.Z.applicationIdsFetching.has(i.id) || C.Z.isEntitledToSku(_.default.getCurrentUser(), t, i.id, i.id) || !r.available
            ? null != v[t] && (delete v[t], (e = !0))
            : ((v[t] = {
                  skuId: t,
                  applicationId: n
              }),
              (e = !0));
    }
    return e;
}
class b extends (i = c.ZP.Store) {
    initialize() {
        var e;
        this.waitFor(g.ZP, E.Z, C.Z), (T = null !== (e = u.K.get(x)) && void 0 !== e ? e : T);
    }
    getDetectedOffPlatformPremiumPerks() {
        return s().values(v);
    }
}
(a = 'DetectedOffPlatformPremiumPerksStore'),
    (l = 'displayName') in (r = b)
        ? Object.defineProperty(r, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = a),
    (t.Z = new b(d.Z, {
        LOGOUT: function () {
            (v = {}), (N = {});
        },
        SKU_FETCH_SUCCESS: S,
        ENTITLEMENT_FETCH_APPLICATION_SUCCESS: S,
        ENTITLEMENT_CREATE: S,
        APPLICATION_FETCH_SUCCESS: S,
        DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
            let { skuId: t } = e;
            if ((delete v[t], T.includes(t))) return !1;
            T.push(t), u.K.set(x, T);
        },
        RUNNING_GAMES_CHANGE: function () {
            let e = !1;
            for (let { id: t, distributor: n } of g.ZP.getRunningGames())
                if (null != t && n !== I.GQo.DISCORD)
                    for (let { skuId: n, applicationId: i } of I.Lg6) {
                        if (!(i !== t || T.includes(n)))
                            null == N[n] &&
                                (!C.Z.applicationIdsFetched.has(i) && !C.Z.applicationIdsFetching.has(i) && null == C.Z.getForSku(n) && m.yD(i),
                                (N[n] = {
                                    skuId: n,
                                    applicationId: i
                                }),
                                (e = !0));
                    }
            return e && S(), e;
        }
    }));
