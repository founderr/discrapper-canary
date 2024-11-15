n(47120);
var r = n(913527),
    i = n.n(r),
    a = n(570140),
    s = n(147913),
    o = n(959546),
    l = n(594174),
    u = n(580130),
    c = n(111361),
    d = n(470918),
    f = n(595878),
    _ = n(513785),
    p = n(106255),
    h = n(474936),
    m = n(735825);
let g = null,
    E = !1;
function v(e) {
    let t = o.Z.createFromServer(e.entitlement);
    (0, p._k)(t)
        ? b({ forceRefresh: !0 })
        : (0, p.YE)(t) &&
          null != _.Z.getTenureRewardStatusForRewardId(t.skuId) &&
          a.Z.dispatch({
              type: 'USER_TENURE_REWARD_STATUS_DELETE',
              tenureRewardIds: [t.skuId]
          });
}
function b() {
    let { forceRefresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    S();
    let t = u.Z.getForApplication(h.CL),
        n = (0, p.kG)(t),
        r = (0, p.MR)(Array.from(m.uv), t),
        s = l.default.getCurrentUser();
    if (!(0, c.M5)(s, h.p9.TIER_2) && null == n) {
        null != s && a.Z.dispatch({ type: 'USER_TENURE_REWARD_STATUS_RESET' });
        return;
    }
    if (!!(0, f.dR)({ location: 'tenure_reward_manager' }))
        if (
            (!0 === e ||
                (function (e) {
                    if (_.Z.getFetchState() !== _.M.FETCHED) return !0;
                    let t = (0, p.GT)();
                    return (
                        (null != t && null != e && e.id !== t.user_id) ||
                        (function () {
                            let e = _.Z.getState();
                            return null != e.lastFetchTimeMs && Date.now() - e.lastFetchTimeMs > 1209600000;
                        })() ||
                        (function () {
                            let e = (0, p.GT)();
                            return null != e && null != e.redeemable_at && 0 >= i()(e.redeemable_at).diff(i().utc(), 'seconds');
                        })()
                    );
                })(s)) &&
            null == r
        )
            I();
        else {
            let e = u.Z.getForApplication(h.CL);
            if (null == e) return;
            let t = Array.from(e)
                .filter((e) => null != _.Z.getTenureRewardStatusForRewardId(e.skuId))
                .map((e) => e.skuId);
            t.length > 0 &&
                a.Z.dispatch({
                    type: 'USER_TENURE_REWARD_STATUS_DELETE',
                    tenureRewardIds: t
                });
        }
}
async function I() {
    if (!E)
        (E = !0),
            await d.V(),
            (E = !1),
            a.Z.wait(() =>
                (function () {
                    if ((S(), _.Z.getFetchState() !== _.M.FETCHED || E)) return;
                    let e = (0, p.GT)();
                    if ((null == e ? void 0 : e.redeemable_at) == null) return;
                    let t = (null == e ? void 0 : e.redeemable_at) != null ? new Date(e.redeemable_at).getTime() - Date.now() : null;
                    null != t && t > 0 && (g = setTimeout(b, t));
                })()
            );
}
function S() {
    clearTimeout(g), (g = null);
}
function T() {
    S();
}
function y() {
    b();
}
class A extends s.Z {
    forceRefreshIfOutdated() {
        let e = _.Z.getState();
        null != e.lastFetchTimeMs && Date.now() - e.lastFetchTimeMs > 86400000 && b({ forceRefresh: !0 });
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                POST_CONNECTION_OPEN: y,
                CONNECTION_CLOSED: T,
                ENTITLEMENT_FETCH_APPLICATION_SUCCESS: () => b(),
                ENTITLEMENT_CREATE: v,
                ENTITLEMENT_UPDATE: () => b(),
                ENTITLEMENT_DELETE: () => b(),
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
t.Z = new A();
