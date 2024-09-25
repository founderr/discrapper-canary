var r = n(47120);
var i = n(913527),
    a = n.n(i),
    o = n(570140),
    s = n(147913),
    l = n(959546),
    u = n(594174),
    c = n(580130),
    d = n(111361),
    _ = n(470918),
    E = n(595878),
    f = n(513785),
    h = n(106255),
    p = n(474936),
    m = n(735825);
function I(e, t, n) {
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
let T = null,
    g = !1,
    S = 1209600000,
    A = 86400000;
function v(e) {
    let t = l.Z.createFromServer(e.entitlement);
    (0, h._k)(t)
        ? N({ forceRefresh: !0 })
        : (0, h.YE)(t) &&
          null != f.Z.getTenureRewardStatusForRewardId(t.skuId) &&
          o.Z.dispatch({
              type: 'USER_TENURE_REWARD_STATUS_DELETE',
              tenureRewardIds: [t.skuId]
          });
}
function N() {
    let { forceRefresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    L();
    let t = c.Z.getForApplication(p.CL),
        n = (0, h.kG)(t),
        r = (0, h.MR)([m.Ft.FREE_GUILD_BOOST_1_MONTH, m.Ft.FREE_GUILD_BOOST_3_MONTHS], t),
        i = u.default.getCurrentUser();
    if (!(0, d.M5)(i, p.p9.TIER_2) && null == n) {
        null != i && o.Z.dispatch({ type: 'USER_TENURE_REWARD_STATUS_RESET' });
        return;
    }
    if (!!(0, E.dR)({ location: 'tenure_reward_manager' }))
        if ((!0 === e || C(i)) && null == r) b();
        else {
            let e = c.Z.getForApplication(p.CL);
            if (null == e) return;
            let t = Array.from(e)
                .filter((e) => null != f.Z.getTenureRewardStatusForRewardId(e.skuId))
                .map((e) => e.skuId);
            t.length > 0 &&
                o.Z.dispatch({
                    type: 'USER_TENURE_REWARD_STATUS_DELETE',
                    tenureRewardIds: t
                });
        }
}
function O() {
    let e = f.Z.getState();
    return null != e.lastFetchTimeMs && Date.now() - e.lastFetchTimeMs > S;
}
function R() {
    var e;
    let t = null !== (e = f.Z.getTenureRewardStatusForRewardId(m.Ft.FREE_GUILD_BOOST_1_MONTH)) && void 0 !== e ? e : f.Z.getTenureRewardStatusForRewardId(m.Ft.FREE_GUILD_BOOST_3_MONTHS);
    return null != t && null != t.redeemable_at && 0 >= a()(t.redeemable_at).diff(a().utc(), 'seconds');
}
function C(e) {
    if (f.Z.getFetchState() !== f.M.FETCHED) return !0;
    let t = (0, h.LA)();
    return (null != t && null != e && e.id !== t.user_id) || O() || R();
}
function y() {
    var e;
    if ((L(), f.Z.getFetchState() !== f.M.FETCHED || g)) return;
    let t = null !== (e = f.Z.getTenureRewardStatusForRewardId(m.Ft.FREE_GUILD_BOOST_1_MONTH)) && void 0 !== e ? e : f.Z.getTenureRewardStatusForRewardId(m.Ft.FREE_GUILD_BOOST_3_MONTHS);
    if ((null == t ? void 0 : t.redeemable_at) == null) return;
    let n = (null == t ? void 0 : t.redeemable_at) != null ? new Date(t.redeemable_at).getTime() - Date.now() : null;
    null != n && n > 0 && (T = setTimeout(N, n));
}
async function b() {
    if (!g) (g = !0), await _.V(), (g = !1), o.Z.wait(() => y());
}
function L() {
    clearTimeout(T), (T = null);
}
function D() {
    L();
}
function M() {
    N();
}
class P extends s.Z {
    forceRefreshIfOutdated() {
        let e = f.Z.getState();
        null != e.lastFetchTimeMs && Date.now() - e.lastFetchTimeMs > A && N({ forceRefresh: !0 });
    }
    constructor(...e) {
        super(...e),
            I(this, 'actions', {
                POST_CONNECTION_OPEN: M,
                CONNECTION_CLOSED: D,
                ENTITLEMENT_FETCH_APPLICATION_SUCCESS: () => N(),
                ENTITLEMENT_CREATE: v,
                ENTITLEMENT_UPDATE: () => N(),
                ENTITLEMENT_DELETE: () => N(),
                LOGOUT: L
            });
    }
}
t.Z = new P();
