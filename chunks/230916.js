n.d(t, {
    A: function () {
        return _;
    },
    _: function () {
        return E;
    }
});
var r = n(47120);
var i = n(911969),
    a = n(583046),
    o = n(74179),
    s = n(74538),
    l = n(937615),
    u = n(374649),
    c = n(104494),
    d = n(474936);
let _ = (e) => {
        var t, n, r, _;
        let { paymentSourceId: E } = (0, o.Z)({
                isGift: !1,
                activeSubscription: null
            }),
            f = (0, s.Wz)(d.GP[e].skuId),
            { priceOptions: h } = (0, a.Z)({
                activeSubscription: null,
                skuIDs: [f],
                paymentSourceId: E,
                isGift: !1
            }),
            p = null != (0, c.Ng)(),
            [m, I] = (0, u.ED)({
                items: [
                    {
                        planId: e,
                        quantity: 1
                    }
                ],
                renewal: !0,
                preventFetch: !p,
                paymentSourceId: E,
                currency: h.currency
            }),
            T = null == m ? void 0 : null === (_ = m.invoiceItems) || void 0 === _ ? void 0 : null === (r = _.find((t) => t.subscriptionPlanId === e)) || void 0 === r ? void 0 : null === (n = r.discounts) || void 0 === n ? void 0 : null === (t = n.find((e) => e.type === i.eW.SUBSCRIPTION_PLAN)) || void 0 === t ? void 0 : t.amount,
            g = (0, s.aS)(e, !1, !1, h);
        return (0, l.T4)(g.amount - (null != T ? T : 0), g.currency);
    },
    E = (e, t, n) => {
        var r, c, _, E;
        let { paymentSourceId: f } = (0, o.Z)({
                isGift: !1,
                activeSubscription: null
            }),
            h = (0, s.Wz)(d.GP[t].skuId),
            { priceOptions: p } = (0, a.Z)({
                activeSubscription: null,
                skuIDs: [h],
                paymentSourceId: f,
                isGift: !1
            }),
            m = null != n,
            [I, T] = (0, u.ED)({
                subscriptionId: e.id,
                items: [
                    {
                        planId: t,
                        quantity: 1
                    }
                ],
                renewal: !0,
                preventFetch: !m,
                paymentSourceId: f,
                currency: p.currency,
                userDiscountOfferId: null == n ? void 0 : n.id
            }),
            g = null == I ? void 0 : null === (E = I.invoiceItems) || void 0 === E ? void 0 : null === (_ = E.find((e) => e.subscriptionPlanId === t)) || void 0 === _ ? void 0 : null === (c = _.discounts) || void 0 === c ? void 0 : null === (r = c.find((e) => e.type === i.eW.SUBSCRIPTION_PLAN)) || void 0 === r ? void 0 : r.amount,
            S = (0, s.aS)(t, !1, !1, p);
        return (0, l.T4)(S.amount - (null != g ? g : 0), S.currency);
    };
