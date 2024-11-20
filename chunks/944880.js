n(47120);
var r = n(913527),
    i = n.n(r),
    a = n(570140),
    s = n(147913),
    o = n(335131),
    l = n(228624),
    u = n(959546),
    c = n(594174),
    d = n(580130),
    f = n(111361),
    _ = n(470918),
    p = n(595878),
    h = n(513785),
    m = n(106255),
    g = n(474936),
    E = n(735825);
let v = null,
    I = !1;
function b(e) {
    let t = u.Z.createFromServer(e.entitlement);
    (0, m._k)(t)
        ? T({ forceRefresh: !0 })
        : (0, m.YE)(t)
          ? null != h.Z.getTenureRewardStatusForRewardId(t.skuId) &&
            a.Z.dispatch({
                type: 'USER_TENURE_REWARD_STATUS_DELETE',
                tenureRewardIds: [t.skuId]
            })
          : (0, m.km)(t) && (0, o.qg)({ variantsReturnStyle: (0, l.oj)('TenureRewardManager') });
}
function T() {
    let { forceRefresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    y();
    let t = d.Z.getForApplication(g.CL),
        n = (0, m.kG)(t),
        r = (0, m.MR)(Array.from(E.uv), t),
        s = c.default.getCurrentUser();
    if (!(0, f.M5)(s, g.p9.TIER_2) && null == n) {
        null != s && a.Z.dispatch({ type: 'USER_TENURE_REWARD_STATUS_RESET' });
        return;
    }
    if (!!(0, p.dR)({ location: 'tenure_reward_manager' }))
        if (
            (!0 === e ||
                (function (e) {
                    if (h.Z.getFetchState() !== h.M.FETCHED) return !0;
                    let t = (0, m.GT)();
                    return (
                        (null != t && null != e && e.id !== t.user_id) ||
                        (function () {
                            let e = h.Z.getState();
                            return null != e.lastFetchTimeMs && Date.now() - e.lastFetchTimeMs > 1209600000;
                        })() ||
                        (function () {
                            let e = (0, m.GT)();
                            return null != e && null != e.redeemable_at && 0 >= i()(e.redeemable_at).diff(i().utc(), 'seconds');
                        })()
                    );
                })(s)) &&
            null == r
        )
            S();
        else {
            let e = d.Z.getForApplication(g.CL);
            if (null == e) return;
            let t = Array.from(e)
                .filter((e) => null != h.Z.getTenureRewardStatusForRewardId(e.skuId))
                .map((e) => e.skuId);
            t.length > 0 &&
                a.Z.dispatch({
                    type: 'USER_TENURE_REWARD_STATUS_DELETE',
                    tenureRewardIds: t
                });
        }
}
async function S() {
    if (!I)
        (I = !0),
            await _.V(),
            (I = !1),
            a.Z.wait(() =>
                (function () {
                    if ((y(), h.Z.getFetchState() !== h.M.FETCHED || I)) return;
                    let e = (0, m.GT)();
                    if ((null == e ? void 0 : e.redeemable_at) == null) return;
                    let t = (null == e ? void 0 : e.redeemable_at) != null ? new Date(e.redeemable_at).getTime() - Date.now() : null;
                    null != t && t > 0 && (v = setTimeout(T, t));
                })()
            );
}
function y() {
    clearTimeout(v), (v = null);
}
function A() {
    y();
}
function N() {
    T();
}
class C extends s.Z {
    forceRefreshIfOutdated() {
        let e = h.Z.getState();
        null != e.lastFetchTimeMs && Date.now() - e.lastFetchTimeMs > 86400000 && T({ forceRefresh: !0 });
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                POST_CONNECTION_OPEN: N,
                CONNECTION_CLOSED: A,
                ENTITLEMENT_FETCH_APPLICATION_SUCCESS: () => T(),
                ENTITLEMENT_CREATE: b,
                ENTITLEMENT_UPDATE: () => T(),
                ENTITLEMENT_DELETE: () => T(),
                LOGOUT: y
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
t.Z = new C();
