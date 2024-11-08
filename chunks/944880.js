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
    h = n(106255),
    p = n(474936),
    m = n(735825);
let g = null,
    E = !1;
function v(e) {
    let t = o.Z.createFromServer(e.entitlement);
    (0, h._k)(t)
        ? I({ forceRefresh: !0 })
        : (0, h.YE)(t) &&
          null != _.Z.getTenureRewardStatusForRewardId(t.skuId) &&
          a.Z.dispatch({
              type: 'USER_TENURE_REWARD_STATUS_DELETE',
              tenureRewardIds: [t.skuId]
          });
}
function I() {
    let { forceRefresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    b();
    let t = u.Z.getForApplication(p.CL),
        n = (0, h.kG)(t),
        r = (0, h.MR)([m.Ft.FREE_GUILD_BOOST_1_MONTH, m.Ft.FREE_GUILD_BOOST_3_MONTHS], t),
        s = l.default.getCurrentUser();
    if (!(0, c.M5)(s, p.p9.TIER_2) && null == n) {
        null != s && a.Z.dispatch({ type: 'USER_TENURE_REWARD_STATUS_RESET' });
        return;
    }
    if (!!(0, f.dR)({ location: 'tenure_reward_manager' }))
        if (
            (!0 === e ||
                (function (e) {
                    if (_.Z.getFetchState() !== _.M.FETCHED) return !0;
                    let t = (0, h.LA)();
                    return (
                        (null != t && null != e && e.id !== t.user_id) ||
                        (function () {
                            let e = _.Z.getState();
                            return null != e.lastFetchTimeMs && Date.now() - e.lastFetchTimeMs > 1209600000;
                        })() ||
                        (function () {
                            var e;
                            let t = null !== (e = _.Z.getTenureRewardStatusForRewardId(m.Ft.FREE_GUILD_BOOST_1_MONTH)) && void 0 !== e ? e : _.Z.getTenureRewardStatusForRewardId(m.Ft.FREE_GUILD_BOOST_3_MONTHS);
                            return null != t && null != t.redeemable_at && 0 >= i()(t.redeemable_at).diff(i().utc(), 'seconds');
                        })()
                    );
                })(s)) &&
            null == r
        )
            S();
        else {
            let e = u.Z.getForApplication(p.CL);
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
async function S() {
    if (!E)
        (E = !0),
            await d.V(),
            (E = !1),
            a.Z.wait(() =>
                (function () {
                    var e;
                    if ((b(), _.Z.getFetchState() !== _.M.FETCHED || E)) return;
                    let t = null !== (e = _.Z.getTenureRewardStatusForRewardId(m.Ft.FREE_GUILD_BOOST_1_MONTH)) && void 0 !== e ? e : _.Z.getTenureRewardStatusForRewardId(m.Ft.FREE_GUILD_BOOST_3_MONTHS);
                    if ((null == t ? void 0 : t.redeemable_at) == null) return;
                    let n = (null == t ? void 0 : t.redeemable_at) != null ? new Date(t.redeemable_at).getTime() - Date.now() : null;
                    null != n && n > 0 && (g = setTimeout(I, n));
                })()
            );
}
function b() {
    clearTimeout(g), (g = null);
}
function T() {
    b();
}
function y() {
    I();
}
class A extends s.Z {
    forceRefreshIfOutdated() {
        let e = _.Z.getState();
        null != e.lastFetchTimeMs && Date.now() - e.lastFetchTimeMs > 86400000 && I({ forceRefresh: !0 });
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                POST_CONNECTION_OPEN: y,
                CONNECTION_CLOSED: T,
                ENTITLEMENT_FETCH_APPLICATION_SUCCESS: () => I(),
                ENTITLEMENT_CREATE: v,
                ENTITLEMENT_UPDATE: () => I(),
                ENTITLEMENT_DELETE: () => I(),
                LOGOUT: b
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
