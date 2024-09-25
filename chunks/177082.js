var r = n(47120);
var i = n(355467),
    a = n(496929),
    o = n(147913),
    s = n(594174),
    l = n(351402),
    u = n(78839),
    c = n(580130),
    d = n(630388),
    _ = n(74538),
    E = n(474936);
function f(e, t, n) {
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
class h extends o.Z {
    constructor(...e) {
        super(...e),
            f(this, 'actions', {
                POST_CONNECTION_OPEN: () => {
                    this.maybeFetchSubscriptions(), this.maybeFetchCountryCode(), this.maybeFetchMostRecentSubscription();
                }
            }),
            f(this, 'maybeFetchSubscriptions', async () => {
                let e = s.default.getCurrentUser();
                if (_.ZP.isPremium(e)) {
                    !u.ZP.hasFetchedSubscriptions() && (await (0, i.jg)());
                    let e = u.ZP.getPremiumSubscription();
                    (null == e ? void 0 : e.paymentSourceId) == null && !c.Z.applicationIdsFetched.has(E.CL) && (await (0, a.yD)(E.CL));
                }
            }),
            f(this, 'maybeFetchMostRecentSubscription', () => {
                let e = s.default.getCurrentUser();
                null != e && !_.ZP.isPremium(e) && null != e.purchasedFlags && ((0, d.yE)(e.purchasedFlags, E.in.PREMIUM_TIER_1) || (0, d.yE)(e.purchasedFlags, E.in.PREMIUM_TIER_2)) && (0, i.ou)();
            }),
            f(this, 'maybeFetchCountryCode', async () => {
                let e = s.default.getCurrentUser();
                _.ZP.isPremium(e) && !l.Z.ipCountryCodeLoaded && (await this.fetchCountryCode());
            }),
            f(this, 'fetchCountryCode', async () => {
                await (0, i.GE)(), null != l.Z.ipCountryCode && (await (0, i.tZ)());
            });
    }
}
t.Z = new h();
