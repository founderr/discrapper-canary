var i = r(47120);
var a = r(913527),
    s = r.n(a),
    o = r(570140),
    l = r(147913),
    u = r(335131),
    c = r(228624),
    d = r(959546),
    f = r(594174),
    _ = r(580130),
    h = r(111361),
    p = r(470918),
    m = r(595878),
    g = r(513785),
    E = r(106255),
    v = r(474936);
function I(e, n, r) {
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
let T = null,
    b = !1,
    y = 1209600000,
    S = 86400000;
function A(e) {
    let n = d.Z.createFromServer(e.entitlement);
    (0, E._k)(n)
        ? N({ forceRefresh: !0 })
        : (0, E.YE)(n)
          ? null != g.Z.getTenureRewardStatusForRewardId(n.skuId) &&
            o.Z.dispatch({
                type: 'USER_TENURE_REWARD_STATUS_DELETE',
                tenureRewardIds: [n.skuId]
            })
          : (0, E.km)(n) &&
            (0, u.qg)({
                variantsReturnStyle: (0, c.oj)('TenureRewardManager'),
                location: 'tenure_reward_manager'
            });
}
function N() {
    let { forceRefresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    x();
    let n = _.Z.getForApplication(v.CL),
        r = (0, E.kG)(n),
        i = f.default.getCurrentUser();
    if (!(0, h.M5)(i, v.p9.TIER_2) && null == r) {
        null != i && o.Z.dispatch({ type: 'USER_TENURE_REWARD_STATUS_RESET' });
        return;
    }
    if (!!(0, m.dR)({ location: 'tenure_reward_manager' }))
        if (!0 === e || O(i)) L();
        else {
            let e = _.Z.getForApplication(v.CL);
            if (null == e) return;
            let n = Array.from(e)
                .filter((e) => null != g.Z.getTenureRewardStatusForRewardId(e.skuId))
                .map((e) => e.skuId);
            n.length > 0 &&
                o.Z.dispatch({
                    type: 'USER_TENURE_REWARD_STATUS_DELETE',
                    tenureRewardIds: n
                });
        }
}
function C() {
    let e = g.Z.getState();
    return null != e.lastFetchTimeMs && Date.now() - e.lastFetchTimeMs > y;
}
function R() {
    let e = (0, E.GT)();
    return null != e && null != e.redeemable_at && 0 >= s()(e.redeemable_at).diff(s().utc(), 'seconds');
}
function O(e) {
    if (g.Z.getFetchState() !== g.M.FETCHED) return !0;
    let n = (0, E.GT)();
    return (null != n && null != e && e.id !== n.user_id) || C() || R();
}
function D() {
    if ((x(), g.Z.getFetchState() !== g.M.FETCHED || b)) return;
    let e = (0, E.GT)();
    if ((null == e ? void 0 : e.redeemable_at) == null) return;
    let n = (null == e ? void 0 : e.redeemable_at) != null ? new Date(e.redeemable_at).getTime() - Date.now() : null;
    null != n && n > 0 && (T = setTimeout(N, n));
}
async function L() {
    if (!b) (b = !0), await p.V(), (b = !1), o.Z.wait(() => D());
}
function x() {
    clearTimeout(T), (T = null);
}
function w() {
    x();
}
function P() {
    N();
}
class M extends l.Z {
    forceRefreshIfOutdated() {
        let e = g.Z.getState();
        null != e.lastFetchTimeMs && Date.now() - e.lastFetchTimeMs > S && N({ forceRefresh: !0 });
    }
    constructor(...e) {
        super(...e),
            I(this, 'actions', {
                POST_CONNECTION_OPEN: P,
                CONNECTION_CLOSED: w,
                ENTITLEMENT_FETCH_APPLICATION_SUCCESS: () => N(),
                ENTITLEMENT_CREATE: A,
                ENTITLEMENT_UPDATE: () => N(),
                ENTITLEMENT_DELETE: () => N(),
                LOGOUT: x
            });
    }
}
n.Z = new M();
