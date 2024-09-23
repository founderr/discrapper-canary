n.d(t, {
    Rw: function () {
        return B;
    },
    V6: function () {
        return U;
    },
    f9: function () {
        return v;
    },
    g_: function () {
        return b;
    },
    kG: function () {
        return M;
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
    o = n(704215),
    l = n(605236),
    c = n(243778),
    d = n(291175),
    _ = n(621853),
    u = n(594174),
    E = n(78839),
    T = n(111361),
    I = n(471309),
    R = n(474936),
    m = n(689938),
    g = n(888300),
    N = n(665321),
    C = n(256017),
    p = n(126807),
    f = n(432119),
    A = n(205119),
    S = n(145007),
    h = n(937264);
let M = () => {
        var e;
        let t;
        let n = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
            s = (0, i.e7)([_.Z], () => (null != n ? _.Z.getUserProfile(n.id) : null));
        return (
            null == s ||
                null === (e = s.badges) ||
                void 0 === e ||
                e.forEach((e) => {
                    let n = (0, d.gn)(e.id),
                        a = s.premiumSince;
                    null != n && null != a && (t = n);
                }),
            t
        );
    },
    x = () => {
        let e = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
            t = (0, i.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription());
        if (!(0, T.M5)(e, R.p9.TIER_2) || null == t || null == t.premiumSince) return null;
        let n = r()(),
            s = r()(t.premiumSince).add(1, 'day'),
            a = n.diff(s, 'months');
        return Object.entries(R.eG).reduce((e, t) => {
            let [n, s] = t;
            return a >= s ? n : e;
        }, null);
    },
    b = (e) => {
        switch (e) {
            case R.VU.PREMIUM_TENURE_1_MONTH:
                return g;
            case R.VU.PREMIUM_TENURE_3_MONTH:
                return h;
            case R.VU.PREMIUM_TENURE_6_MONTH:
                return f;
            case R.VU.PREMIUM_TENURE_12_MONTH:
                return A;
            case R.VU.PREMIUM_TENURE_24_MONTH:
                return N;
            case R.VU.PREMIUM_TENURE_36_MONTH:
                return C;
            case R.VU.PREMIUM_TENURE_60_MONTH:
                return S;
            case R.VU.PREMIUM_TENURE_72_MONTH:
                return p;
            default:
                return;
        }
    },
    O = () => b(M()),
    v = (e) => {
        switch (e) {
            case R.VU.PREMIUM_TENURE_1_MONTH:
                return m.Z.Messages.TIERED_TENURE_BADGE_BRONZE;
            case R.VU.PREMIUM_TENURE_3_MONTH:
                return m.Z.Messages.TIERED_TENURE_BADGE_SILVER;
            case R.VU.PREMIUM_TENURE_6_MONTH:
                return m.Z.Messages.TIERED_TENURE_BADGE_GOLD;
            case R.VU.PREMIUM_TENURE_12_MONTH:
                return m.Z.Messages.TIERED_TENURE_BADGE_PLATINUM;
            case R.VU.PREMIUM_TENURE_24_MONTH:
                return m.Z.Messages.TIERED_TENURE_BADGE_DIAMOND;
            case R.VU.PREMIUM_TENURE_36_MONTH:
                return m.Z.Messages.TIERED_TENURE_BADGE_EMERALD;
            case R.VU.PREMIUM_TENURE_60_MONTH:
                return m.Z.Messages.TIERED_TENURE_BADGE_RUBY;
            case R.VU.PREMIUM_TENURE_72_MONTH:
                return m.Z.Messages.TIERED_TENURE_BADGE_FIRE;
            default:
                return '';
        }
    },
    P = () => v(M()),
    L = (e) => {
        switch (e) {
            case R.VU.PREMIUM_TENURE_1_MONTH:
            case R.VU.PREMIUM_TENURE_3_MONTH:
            case R.VU.PREMIUM_TENURE_6_MONTH:
                return m.Z.Messages.DURATION_MONTHS_CAPITALIZE.format({ months: R.eG[e] });
            case R.VU.PREMIUM_TENURE_12_MONTH:
            case R.VU.PREMIUM_TENURE_24_MONTH:
            case R.VU.PREMIUM_TENURE_36_MONTH:
            case R.VU.PREMIUM_TENURE_60_MONTH:
                return m.Z.Messages.DURATION_YEARS_CAPITALIZE.format({ years: R.eG[e] / 12 });
            case R.VU.PREMIUM_TENURE_72_MONTH:
                return m.Z.Messages.DURATION_YEARS_CAPITALIZE.format({ years: '6+' });
            default:
                return '';
        }
    },
    Z = () => L(M()),
    D = () => {
        let e = M(),
            t = (0, i.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription());
        return null == e || null == t || null == t.premiumSince ? null : (0, d.RZ)(e, t.premiumSince);
    },
    B = () => ({
        badge: M(),
        image: O(),
        name: P(),
        earnedOnDate: D(),
        tenureRequirement: Z()
    }),
    U = () => {
        let e = x(),
            { enabled: t } = (0, I.Z)(!0),
            [n] = (0, c.US)(t && null != e ? [o.z.WHATS_NEW_TENURE_BADGE_REWARD] : []);
        return n === o.z.WHATS_NEW_TENURE_BADGE_REWARD ? m.Z.Messages.REWARD.toLocaleUpperCase() : null;
    },
    j = () => {
        let e = x(),
            { enabled: t } = (0, I.Z)(),
            [n] = (0, c.US)(t && null != e ? [o.z.WHATS_NEW_TENURE_BADGE_REWARD] : []);
        return s.useCallback(() => {
            n === o.z.WHATS_NEW_TENURE_BADGE_REWARD && (0, l.EW)(n);
        }, [n]);
    };
