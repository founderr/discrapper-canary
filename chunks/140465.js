n.d(t, {
    Nx: function () {
        return h;
    },
    UV: function () {
        return g;
    },
    WR: function () {
        return T;
    },
    lr: function () {
        return m;
    },
    t7: function () {
        return p;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(913527),
    o = n.n(a),
    s = n(442837),
    l = n(544891),
    u = n(78839),
    c = n(775412),
    d = n(104494),
    _ = n(639119),
    E = n(474936),
    f = n(981631);
function h() {
    let e = (0, _.N)(),
        t = (0, c._O)(),
        n = (0, d.Ng)(),
        r = p();
    return null != e || t || null != n || r;
}
let p = () => {
        var e;
        let t = (0, s.e7)([u.ZP], () => u.ZP.getPremiumTypeSubscription()),
            n = null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.active_discount_expires_at;
        return null != n && o()(Date.now()) <= o()(n);
    },
    m = () => {
        var e;
        let t = (0, s.e7)([u.ZP], () => u.ZP.getPremiumTypeSubscription());
        switch (null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.active_discount_id) {
            case E.dT:
            case E.rB:
                return {
                    duration: 1,
                    percentage: 30
                };
            case E.dB:
            case E.hs:
            case E.RU:
                return {
                    duration: 3,
                    percentage: 30
                };
            case E.ih:
                return {
                    duration: 1,
                    percentage: 40
                };
            case E.gW:
                return {
                    duration: 1,
                    percentage: 20
                };
            case E.Nl:
                return {
                    duration: 1,
                    percentage: 25
                };
            case E.n5:
                return {
                    duration: 1,
                    percentage: 40
                };
            default:
                return;
        }
    },
    I = async () => {
        let e = null;
        try {
            var t;
            let n = await l.tn.post({ url: f.ANM.CHURN_USER_OFFER });
            e = null !== (t = n.body.offer) && void 0 !== t ? t : null;
        } catch (e) {}
        return e;
    },
    T = (e) => {
        let [t, n] = i.useState(!1),
            [r, a] = i.useState(!1),
            [o, s] = i.useState(null);
        if (e)
            return {
                churnUserDiscountOffer: o,
                isFetchingChurnDiscountOffer: r
            };
        let l = () => {
            n(!0), a(!1);
        };
        return (
            !r &&
                !t &&
                (a(!0),
                I()
                    .then((e) => {
                        s(e), l();
                    })
                    .catch((e) => {
                        l();
                    })),
            {
                churnUserDiscountOffer: o,
                isFetchingChurnDiscountOffer: r
            }
        );
    },
    g = () => {
        let e = (0, s.e7)([u.ZP], () => u.ZP.getPremiumTypeSubscription()),
            t = p(),
            n = null !== e && e.hasPremiumNitroMonthly,
            r = null != e && null != e.trialId;
        return n && !r && !t;
    };
