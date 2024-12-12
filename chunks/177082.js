var i = r(47120);
var a = r(355467),
    s = r(496929),
    o = r(147913),
    l = r(594174),
    u = r(351402),
    c = r(78839),
    d = r(580130),
    f = r(630388),
    _ = r(74538),
    h = r(474936);
function p(e, n, r) {
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
class m extends o.Z {
    constructor(...e) {
        super(...e),
            p(this, 'actions', {
                POST_CONNECTION_OPEN: () => {
                    this.maybeFetchSubscriptions(), this.maybeFetchCountryCode(), this.maybeFetchMostRecentSubscription();
                }
            }),
            p(this, 'maybeFetchSubscriptions', async () => {
                let e = l.default.getCurrentUser();
                if (_.ZP.isPremium(e)) {
                    !c.ZP.hasFetchedSubscriptions() && (await (0, a.jg)());
                    let e = c.ZP.getPremiumSubscription();
                    (null == e ? void 0 : e.paymentSourceId) == null && !d.Z.applicationIdsFetched.has(h.CL) && (await (0, s.yD)(h.CL));
                }
            }),
            p(this, 'maybeFetchMostRecentSubscription', () => {
                let e = l.default.getCurrentUser();
                null != e && !_.ZP.isPremium(e) && null != e.purchasedFlags && ((0, f.yE)(e.purchasedFlags, h.in.PREMIUM_TIER_1) || (0, f.yE)(e.purchasedFlags, h.in.PREMIUM_TIER_2)) && (0, a.ou)();
            }),
            p(this, 'maybeFetchCountryCode', async () => {
                let e = l.default.getCurrentUser();
                _.ZP.isPremium(e) && !u.Z.ipCountryCodeLoaded && (await this.fetchCountryCode());
            }),
            p(this, 'fetchCountryCode', async () => {
                await (0, a.GE)(), null != u.Z.ipCountryCode && (await (0, a.tZ)());
            });
    }
}
n.Z = new m();
