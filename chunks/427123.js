var r,
    i = n(47120);
var a = n(653041);
var o = n(392711),
    s = n.n(o),
    l = n(442837),
    u = n(433517),
    c = n(570140),
    d = n(496929),
    _ = n(16084),
    E = n(728345),
    f = n(812206),
    h = n(594190),
    p = n(594174),
    m = n(580130),
    I = n(55563),
    T = n(981631);
function g(e, t, n) {
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
let S = 'DetectedOffPlatformPremiumPerksStore',
    A = {},
    v = {},
    N = [];
function O() {
    let e = !1;
    for (let { id: t, distributor: n } of h.ZP.getRunningGames())
        if (null != t && n !== T.GQo.DISCORD)
            for (let { skuId: n, applicationId: r } of T.Lg6) {
                if (!(r !== t || N.includes(n)))
                    null == v[n] &&
                        (!m.Z.applicationIdsFetched.has(r) && !m.Z.applicationIdsFetching.has(r) && null == m.Z.getForSku(n) && d.yD(r),
                        (v[n] = {
                            skuId: n,
                            applicationId: r
                        }),
                        (e = !0));
            }
    return e && R(), e;
}
function R() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of s().values(v)) {
        if (N.includes(t)) continue;
        let r = f.Z.getApplication(n);
        if (null == r) {
            !f.Z.isFetchingApplication(n) && !f.Z.didFetchingApplicationFail(n) && E.Z.fetchApplication(n);
            continue;
        }
        let i = I.Z.get(t);
        if (null == i) {
            !I.Z.isFetching(t) && !I.Z.didFetchingSkuFail(t) && _.$N(r.id, t);
            continue;
        }
        m.Z.applicationIdsFetching.has(r.id) || m.Z.isEntitledToSku(p.default.getCurrentUser(), t, r.id, r.id) || !i.available
            ? null != A[t] && (delete A[t], (e = !0))
            : ((A[t] = {
                  skuId: t,
                  applicationId: n
              }),
              (e = !0));
    }
    return e;
}
function C(e) {
    let { skuId: t } = e;
    if ((delete A[t], N.includes(t))) return !1;
    N.push(t), u.K.set(S, N);
}
function y() {
    (A = {}), (v = {});
}
class L extends (r = l.ZP.Store) {
    initialize() {
        var e;
        this.waitFor(h.ZP, I.Z, m.Z), (N = null !== (e = u.K.get(S)) && void 0 !== e ? e : N);
    }
    getDetectedOffPlatformPremiumPerks() {
        return s().values(A);
    }
}
g(L, 'displayName', 'DetectedOffPlatformPremiumPerksStore'),
    (t.Z = new L(c.Z, {
        LOGOUT: y,
        SKU_FETCH_SUCCESS: R,
        ENTITLEMENT_FETCH_APPLICATION_SUCCESS: R,
        ENTITLEMENT_CREATE: R,
        APPLICATION_FETCH_SUCCESS: R,
        DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: C,
        RUNNING_GAMES_CHANGE: O
    }));
