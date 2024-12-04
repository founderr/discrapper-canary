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
    g = n(474936);
let E = null,
    v = !1;
function I(e) {
    let t = u.Z.createFromServer(e.entitlement);
    (0, m._k)(t)
        ? T({ forceRefresh: !0 })
        : (0, m.YE)(t)
          ? null != h.Z.getTenureRewardStatusForRewardId(t.skuId) &&
            a.Z.dispatch({
                type: 'USER_TENURE_REWARD_STATUS_DELETE',
                tenureRewardIds: [t.skuId]
            })
          : (0, m.km)(t) &&
            (0, o.qg)({
                variantsReturnStyle: (0, l.oj)('TenureRewardManager'),
                location: 'tenure_reward_manager'
            });
}
function T() {
    let { forceRefresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    S();
    let t = d.Z.getForApplication(g.CL),
        n = (0, m.kG)(t),
        r = c.default.getCurrentUser();
    if (!(0, f.M5)(r, g.p9.TIER_2) && null == n) {
        null != r && a.Z.dispatch({ type: 'USER_TENURE_REWARD_STATUS_RESET' });
        return;
    }
    if (!!(0, p.dR)({ location: 'tenure_reward_manager' }))
        if (
            !0 === e ||
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
            })(r)
        )
            b();
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
async function b() {
    if (!v)
        (v = !0),
            await _.V(),
            (v = !1),
            a.Z.wait(() =>
                (function () {
                    if ((S(), h.Z.getFetchState() !== h.M.FETCHED || v)) return;
                    let e = (0, m.GT)();
                    if ((null == e ? void 0 : e.redeemable_at) == null) return;
                    let t = (null == e ? void 0 : e.redeemable_at) != null ? new Date(e.redeemable_at).getTime() - Date.now() : null;
                    null != t && t > 0 && (E = setTimeout(T, t));
                })()
            );
}
function S() {
    clearTimeout(E), (E = null);
}
function y() {
    S();
}
function A() {
    T();
}
class N extends s.Z {
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
                POST_CONNECTION_OPEN: A,
                CONNECTION_CLOSED: y,
                ENTITLEMENT_FETCH_APPLICATION_SUCCESS: () => T(),
                ENTITLEMENT_CREATE: I,
                ENTITLEMENT_UPDATE: () => T(),
                ENTITLEMENT_DELETE: () => T(),
                LOGOUT: S
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
t.Z = new N();
