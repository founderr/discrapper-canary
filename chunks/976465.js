n.d(t, {
    Rw: function () {
        return U;
    },
    V6: function () {
        return B;
    },
    f9: function () {
        return P;
    },
    g_: function () {
        return x;
    },
    kG: function () {
        return h;
    },
    sf: function () {
        return L;
    },
    x$: function () {
        return j;
    }
}),
    n(724458),
    n(47120);
var s = n(470079),
    a = n(913527),
    r = n.n(a),
    i = n(442837),
    l = n(704215),
    o = n(605236),
    c = n(243778),
    _ = n(291175),
    d = n(621853),
    E = n(594174),
    u = n(78839),
    T = n(111361),
    I = n(471309),
    R = n(474936),
    g = n(689938),
    N = n(888300),
    m = n(665321),
    C = n(256017),
    A = n(126807),
    f = n(432119),
    p = n(205119),
    M = n(145007),
    S = n(937264);
let h = () => {
        var e;
        let t;
        let n = (0, i.e7)([E.default], () => E.default.getCurrentUser()),
            s = (0, i.e7)([d.Z], () => (null != n ? d.Z.getUserProfile(n.id) : null));
        return (
            null == s ||
                null === (e = s.badges) ||
                void 0 === e ||
                e.forEach((e) => {
                    let n = (0, _.gn)(e.id),
                        a = s.premiumSince;
                    null != n && null != a && (t = n);
                }),
            t
        );
    },
    b = () => {
        let e = (0, i.e7)([E.default], () => E.default.getCurrentUser()),
            t = (0, i.e7)([u.ZP], () => u.ZP.getPremiumTypeSubscription());
        if (!(0, T.M5)(e, R.p9.TIER_2) || null == t || null == t.premiumSince) return null;
        let n = r()(),
            s = r()(t.premiumSince).add(1, 'day'),
            a = n.diff(s, 'months');
        return Object.entries(R.eG).reduce((e, t) => {
            let [n, s] = t;
            return a >= s ? n : e;
        }, null);
    },
    x = (e) => {
        switch (e) {
            case R.VU.PREMIUM_TENURE_1_MONTH:
                return N;
            case R.VU.PREMIUM_TENURE_3_MONTH:
                return S;
            case R.VU.PREMIUM_TENURE_6_MONTH:
                return f;
            case R.VU.PREMIUM_TENURE_12_MONTH:
                return p;
            case R.VU.PREMIUM_TENURE_24_MONTH:
                return m;
            case R.VU.PREMIUM_TENURE_36_MONTH:
                return C;
            case R.VU.PREMIUM_TENURE_60_MONTH:
                return M;
            case R.VU.PREMIUM_TENURE_72_MONTH:
                return A;
            default:
                return;
        }
    },
    O = () => x(h()),
    P = (e) => {
        switch (e) {
            case R.VU.PREMIUM_TENURE_1_MONTH:
                return g.Z.Messages.TIERED_TENURE_BADGE_BRONZE;
            case R.VU.PREMIUM_TENURE_3_MONTH:
                return g.Z.Messages.TIERED_TENURE_BADGE_SILVER;
            case R.VU.PREMIUM_TENURE_6_MONTH:
                return g.Z.Messages.TIERED_TENURE_BADGE_GOLD;
            case R.VU.PREMIUM_TENURE_12_MONTH:
                return g.Z.Messages.TIERED_TENURE_BADGE_PLATINUM;
            case R.VU.PREMIUM_TENURE_24_MONTH:
                return g.Z.Messages.TIERED_TENURE_BADGE_DIAMOND;
            case R.VU.PREMIUM_TENURE_36_MONTH:
                return g.Z.Messages.TIERED_TENURE_BADGE_EMERALD;
            case R.VU.PREMIUM_TENURE_60_MONTH:
                return g.Z.Messages.TIERED_TENURE_BADGE_RUBY;
            case R.VU.PREMIUM_TENURE_72_MONTH:
                return g.Z.Messages.TIERED_TENURE_BADGE_FIRE;
            default:
                return '';
        }
    },
    v = () => P(h()),
    L = (e) => {
        switch (e) {
            case R.VU.PREMIUM_TENURE_1_MONTH:
            case R.VU.PREMIUM_TENURE_3_MONTH:
            case R.VU.PREMIUM_TENURE_6_MONTH:
                return g.Z.Messages.DURATION_MONTHS_CAPITALIZE.format({ months: R.eG[e] });
            case R.VU.PREMIUM_TENURE_12_MONTH:
            case R.VU.PREMIUM_TENURE_24_MONTH:
            case R.VU.PREMIUM_TENURE_36_MONTH:
            case R.VU.PREMIUM_TENURE_60_MONTH:
                return g.Z.Messages.DURATION_YEARS_CAPITALIZE.format({ years: R.eG[e] / 12 });
            case R.VU.PREMIUM_TENURE_72_MONTH:
                return g.Z.Messages.DURATION_YEARS_CAPITALIZE.format({ years: '6+' });
            default:
                return '';
        }
    },
    Z = () => L(h()),
    D = () => {
        let e = h(),
            t = (0, i.e7)([u.ZP], () => u.ZP.getPremiumTypeSubscription());
        return null == e || null == t || null == t.premiumSince ? null : (0, _.RZ)(e, t.premiumSince);
    },
    U = () => ({
        badge: h(),
        image: O(),
        name: v(),
        earnedOnDate: D(),
        tenureRequirement: Z()
    }),
    B = () => {
        let e = b(),
            { enabled: t } = (0, I.Z)(!0),
            [n] = (0, c.US)(t && null != e ? [l.z.WHATS_NEW_TENURE_BADGE_REWARD] : []);
        return n === l.z.WHATS_NEW_TENURE_BADGE_REWARD ? g.Z.Messages.REWARD.toLocaleUpperCase() : null;
    },
    j = () => {
        let e = b(),
            { enabled: t } = (0, I.Z)(),
            [n] = (0, c.US)(t && null != e ? [l.z.WHATS_NEW_TENURE_BADGE_REWARD] : []);
        return s.useCallback(() => {
            n === l.z.WHATS_NEW_TENURE_BADGE_REWARD && (0, o.EW)(n);
        }, [n]);
    };
