n.d(t, {
    Nx: function () {
        return h;
    },
    UV: function () {
        return v;
    },
    WR: function () {
        return E;
    },
    lr: function () {
        return m;
    },
    t7: function () {
        return p;
    }
}),
    n(47120);
var r = n(192379),
    i = n(913527),
    a = n.n(i),
    s = n(442837),
    o = n(544891),
    l = n(78839),
    u = n(775412),
    c = n(104494),
    d = n(639119),
    f = n(474936),
    _ = n(981631);
function h() {
    let e = (0, d.N)(),
        t = (0, u._O)(),
        n = (0, c.Ng)(),
        r = p();
    return null != e || t || null != n || r;
}
let p = () => {
        var e;
        let t = (0, s.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()),
            n = null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.active_discount_expires_at;
        return null != n && a()(Date.now()) <= a()(n);
    },
    m = () => {
        var e;
        let t = (0, s.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription());
        switch (null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.active_discount_id) {
            case f.dT:
            case f.rB:
                return {
                    duration: 1,
                    percentage: 30
                };
            case f.dB:
            case f.hs:
            case f.RU:
                return {
                    duration: 3,
                    percentage: 30
                };
            case f.ih:
                return {
                    duration: 1,
                    percentage: 40
                };
            case f.gW:
                return {
                    duration: 1,
                    percentage: 20
                };
            case f.Nl:
                return {
                    duration: 1,
                    percentage: 25
                };
            case f.n5:
                return {
                    duration: 1,
                    percentage: 40
                };
            default:
                return;
        }
    },
    g = async () => {
        let e = null;
        try {
            var t;
            let n = await o.tn.post({ url: _.ANM.CHURN_USER_OFFER });
            e = null !== (t = n.body.offer) && void 0 !== t ? t : null;
        } catch (e) {}
        return e;
    },
    E = (e) => {
        let [t, n] = r.useState(!1),
            [i, a] = r.useState(!1),
            [s, o] = r.useState(null);
        if (e)
            return {
                churnUserDiscountOffer: s,
                isFetchingChurnDiscountOffer: i
            };
        let l = () => {
            n(!0), a(!1);
        };
        return (
            !i &&
                !t &&
                (a(!0),
                g()
                    .then((e) => {
                        o(e), l();
                    })
                    .catch((e) => {
                        l();
                    })),
            {
                churnUserDiscountOffer: s,
                isFetchingChurnDiscountOffer: i
            }
        );
    },
    v = () => {
        let e = (0, s.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()),
            t = p(),
            n = null !== e && e.hasPremiumNitroMonthly,
            r = null != e && null != e.trialId;
        return n && !r && !t;
    };
