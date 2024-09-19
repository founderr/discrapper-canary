n.d(t, {
    Rw: function () {
        return D;
    },
    V6: function () {
        return U;
    },
    f9: function () {
        return O;
    },
    g_: function () {
        return x;
    },
    kG: function () {
        return S;
    },
    sf: function () {
        return P;
    },
    x$: function () {
        return B;
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
    d = n(291175),
    _ = n(621853),
    u = n(594174),
    E = n(78839),
    T = n(471309),
    I = n(474936),
    R = n(689938),
    m = n(888300),
    g = n(665321),
    N = n(256017),
    C = n(126807),
    p = n(432119),
    A = n(205119),
    f = n(145007),
    h = n(937264);
let S = () => {
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
    M = () => {
        let e = (0, i.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription());
        if (null == e || null == e.premiumSince) return null;
        let t = r()(),
            n = r()(e.premiumSince),
            s = t.diff(n, 'months');
        return Object.entries(I.eG).reduce((e, t) => {
            let [n, a] = t;
            return s >= a ? n : e;
        }, null);
    },
    x = (e) => {
        switch (e) {
            case I.VU.PREMIUM_TENURE_1_MONTH:
                return m;
            case I.VU.PREMIUM_TENURE_3_MONTH:
                return h;
            case I.VU.PREMIUM_TENURE_6_MONTH:
                return p;
            case I.VU.PREMIUM_TENURE_12_MONTH:
                return A;
            case I.VU.PREMIUM_TENURE_24_MONTH:
                return g;
            case I.VU.PREMIUM_TENURE_36_MONTH:
                return N;
            case I.VU.PREMIUM_TENURE_60_MONTH:
                return f;
            case I.VU.PREMIUM_TENURE_72_MONTH:
                return C;
            default:
                return;
        }
    },
    b = () => x(S()),
    O = (e) => {
        switch (e) {
            case I.VU.PREMIUM_TENURE_1_MONTH:
                return R.Z.Messages.TIERED_TENURE_BADGE_BRONZE;
            case I.VU.PREMIUM_TENURE_3_MONTH:
                return R.Z.Messages.TIERED_TENURE_BADGE_SILVER;
            case I.VU.PREMIUM_TENURE_6_MONTH:
                return R.Z.Messages.TIERED_TENURE_BADGE_GOLD;
            case I.VU.PREMIUM_TENURE_12_MONTH:
                return R.Z.Messages.TIERED_TENURE_BADGE_PLATINUM;
            case I.VU.PREMIUM_TENURE_24_MONTH:
                return R.Z.Messages.TIERED_TENURE_BADGE_DIAMOND;
            case I.VU.PREMIUM_TENURE_36_MONTH:
                return R.Z.Messages.TIERED_TENURE_BADGE_EMERALD;
            case I.VU.PREMIUM_TENURE_60_MONTH:
                return R.Z.Messages.TIERED_TENURE_BADGE_RUBY;
            case I.VU.PREMIUM_TENURE_72_MONTH:
                return R.Z.Messages.TIERED_TENURE_BADGE_FIRE;
            default:
                return '';
        }
    },
    v = () => O(S()),
    P = (e) => {
        switch (e) {
            case I.VU.PREMIUM_TENURE_1_MONTH:
            case I.VU.PREMIUM_TENURE_3_MONTH:
            case I.VU.PREMIUM_TENURE_6_MONTH:
                return R.Z.Messages.DURATION_MONTHS_CAPITALIZE.format({ months: I.eG[e] });
            case I.VU.PREMIUM_TENURE_12_MONTH:
            case I.VU.PREMIUM_TENURE_24_MONTH:
            case I.VU.PREMIUM_TENURE_36_MONTH:
            case I.VU.PREMIUM_TENURE_60_MONTH:
                return R.Z.Messages.DURATION_YEARS_CAPITALIZE.format({ years: I.eG[e] / 12 });
            case I.VU.PREMIUM_TENURE_72_MONTH:
                return R.Z.Messages.DURATION_YEARS_CAPITALIZE.format({ years: '6+' });
            default:
                return '';
        }
    },
    L = () => P(S()),
    Z = () => {
        let e = S(),
            t = (0, i.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription());
        return null == e || null == t || null == t.premiumSince ? null : (0, d.RZ)(e, t.premiumSince);
    },
    D = () => ({
        badge: S(),
        image: b(),
        name: v(),
        earnedOnDate: Z(),
        tenureRequirement: L()
    }),
    U = () => {
        let e = M(),
            { enabled: t } = (0, T.Z)(!0),
            [n] = (0, c.US)(t && null != e ? [l.z.WHATS_NEW_TENURE_BADGE_REWARD] : []);
        return n === l.z.WHATS_NEW_TENURE_BADGE_REWARD ? R.Z.Messages.REWARD.toLocaleUpperCase() : null;
    },
    B = () => {
        let e = M(),
            { enabled: t } = (0, T.Z)(),
            [n] = (0, c.US)(t && null != e ? [l.z.WHATS_NEW_TENURE_BADGE_REWARD] : []);
        return s.useCallback(() => {
            n === l.z.WHATS_NEW_TENURE_BADGE_REWARD && (0, o.EW)(n);
        }, [n]);
    };
