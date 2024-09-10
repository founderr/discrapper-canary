n.d(t, {
    Rw: function () {
        return S;
    },
    f9: function () {
        return p;
    },
    g_: function () {
        return N;
    },
    kG: function () {
        return C;
    },
    sf: function () {
        return f;
    }
});
var s = n(442837),
    a = n(291175),
    r = n(621853),
    i = n(594174),
    l = n(78839),
    o = n(474936),
    c = n(689938),
    d = n(888300),
    _ = n(665321),
    u = n(256017),
    E = n(126807),
    T = n(432119),
    I = n(205119),
    R = n(145007),
    g = n(937264);
let C = () => {
        var e;
        let t;
        let n = (0, s.e7)([i.default], () => i.default.getCurrentUser()),
            l = (0, s.e7)([r.Z], () => (null != n ? r.Z.getUserProfile(n.id) : null));
        return (
            null == l ||
                null === (e = l.badges) ||
                void 0 === e ||
                e.forEach((e) => {
                    let n = (0, a.gn)(e.id),
                        s = l.premiumSince;
                    null != n && null != s && (t = n);
                }),
            t
        );
    },
    N = (e) => {
        switch (e) {
            case o.VU.PREMIUM_TENURE_1_MONTH:
                return d;
            case o.VU.PREMIUM_TENURE_3_MONTH:
                return g;
            case o.VU.PREMIUM_TENURE_6_MONTH:
                return T;
            case o.VU.PREMIUM_TENURE_12_MONTH:
                return I;
            case o.VU.PREMIUM_TENURE_24_MONTH:
                return _;
            case o.VU.PREMIUM_TENURE_36_MONTH:
                return u;
            case o.VU.PREMIUM_TENURE_60_MONTH:
                return R;
            case o.VU.PREMIUM_TENURE_72_MONTH:
                return E;
            default:
                return;
        }
    },
    m = () => N(C()),
    p = (e) => {
        switch (e) {
            case o.VU.PREMIUM_TENURE_1_MONTH:
                return c.Z.Messages.TIERED_TENURE_BADGE_BRONZE;
            case o.VU.PREMIUM_TENURE_3_MONTH:
                return c.Z.Messages.TIERED_TENURE_BADGE_SILVER;
            case o.VU.PREMIUM_TENURE_6_MONTH:
                return c.Z.Messages.TIERED_TENURE_BADGE_GOLD;
            case o.VU.PREMIUM_TENURE_12_MONTH:
                return c.Z.Messages.TIERED_TENURE_BADGE_PLATINUM;
            case o.VU.PREMIUM_TENURE_24_MONTH:
                return c.Z.Messages.TIERED_TENURE_BADGE_DIAMOND;
            case o.VU.PREMIUM_TENURE_36_MONTH:
                return c.Z.Messages.TIERED_TENURE_BADGE_EMERALD;
            case o.VU.PREMIUM_TENURE_60_MONTH:
                return c.Z.Messages.TIERED_TENURE_BADGE_RUBY;
            case o.VU.PREMIUM_TENURE_72_MONTH:
                return c.Z.Messages.TIERED_TENURE_BADGE_FIRE;
            default:
                return '';
        }
    },
    A = () => p(C()),
    f = (e) => {
        switch (e) {
            case o.VU.PREMIUM_TENURE_1_MONTH:
            case o.VU.PREMIUM_TENURE_3_MONTH:
            case o.VU.PREMIUM_TENURE_6_MONTH:
                return c.Z.Messages.DURATION_MONTHS_CAPITALIZE.format({ months: o.eG[e] });
            case o.VU.PREMIUM_TENURE_12_MONTH:
            case o.VU.PREMIUM_TENURE_24_MONTH:
            case o.VU.PREMIUM_TENURE_36_MONTH:
            case o.VU.PREMIUM_TENURE_60_MONTH:
                return c.Z.Messages.DURATION_YEARS_CAPITALIZE.format({ years: o.eG[e] / 12 });
            case o.VU.PREMIUM_TENURE_72_MONTH:
                return c.Z.Messages.DURATION_YEARS_CAPITALIZE.format({ years: '6+' });
            default:
                return '';
        }
    },
    M = () => f(C()),
    h = () => {
        let e = C(),
            t = (0, s.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription());
        return null == e || null == t || null == t.premiumSince ? null : (0, a.RZ)(e, t.premiumSince);
    },
    S = () => ({
        badge: C(),
        image: m(),
        name: A(),
        earnedOnDate: h(),
        tenureRequirement: M()
    });
