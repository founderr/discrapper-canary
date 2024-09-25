n.d(t, {
    ED: function () {
        return S;
    },
    Ox: function () {
        return A;
    },
    hz: function () {
        return p;
    },
    o5: function () {
        return g;
    },
    pV: function () {
        return v;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    l = n(544891),
    u = n(881052),
    c = n(146528),
    d = n(78839),
    _ = n(74538),
    E = n(73346),
    f = n(981631);
async function h(e) {
    let { items: t, paymentSourceId: n, trialId: r, code: i, applyEntitlements: a = !1, currency: o, renewal: s, metadata: d } = e,
        E = {
            items: (t = (0, _.gB)(t)).map((e) => {
                let { planId: t, ...n } = e;
                return {
                    ...n,
                    plan_id: t
                };
            }),
            payment_source_id: n,
            trial_id: r,
            code: i,
            apply_entitlements: a,
            currency: o,
            renewal: s,
            metadata: d
        };
    try {
        let e = await l.tn.post({
            url: f.ANM.BILLING_SUBSCRIPTIONS_PREVIEW,
            body: E,
            oldFormErrors: !0
        });
        return c.Z.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new u.HF(e);
    }
}
async function p(e) {
    let { subscriptionId: t, items: n, paymentSourceId: r, renewal: i, currency: a, applyEntitlements: o = !1, analyticsLocations: s, analyticsLocation: d, userDiscountOfferId: E } = e;
    null != n && (n = (0, _.gB)(n));
    let h = {
        items:
            null == n
                ? void 0
                : n.map((e) => {
                      let { planId: t, ...n } = e;
                      return {
                          ...n,
                          plan_id: t
                      };
                  }),
        payment_source_id: r,
        renewal: i,
        apply_entitlements: o,
        currency: a,
        user_discount_offer_id: E
    };
    try {
        let e = await l.tn.patch({
            url: f.ANM.BILLING_SUBSCRIPTION_PREVIEW(t),
            query: {
                location: d,
                location_stack: s
            },
            body: h,
            oldFormErrors: !0
        });
        return c.Z.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new u.HF(e);
    }
}
async function m(e) {
    let { paymentSourceId: t, skuId: n, subscriptionPlanId: r, currency: i, loadId: a } = e;
    o()(n, 'SKU ID is missing for one time purchase gift invoice preview');
    let s = {
        gift: !0,
        payment_source_id: t,
        sku_subscription_plan_id: r,
        currency: i,
        load_id: a
    };
    try {
        let e = await (0, E.Kb)({
            url: f.ANM.STORE_SKU_PURCHASE(n),
            query: s,
            oldFormErrors: !0
        });
        return c.Z.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new u.HF(e);
    }
}
async function I(e) {
    let { subscriptionId: t, preventFetch: n } = e;
    if (n) return null;
    let r = await l.tn.get({
        url: f.ANM.BILLING_SUBSCRIPTION_INVOICE(t),
        oldFormErrors: !0
    });
    return c.Z.createInvoiceFromServer(r.body);
}
function T(e, t) {
    let { preventFetch: n = !1 } = e,
        [r, a] = (0, i.useState)(null),
        [o, l] = (0, i.useState)(null),
        u = (0, s.e7)([d.ZP], () => d.ZP.getSubscriptions());
    return (
        (0, i.useEffect)(() => {
            let e = !1;
            async function r() {
                try {
                    l(null), a(null);
                    let n = await t();
                    !e && a(n);
                } catch (t) {
                    !e && l(t);
                }
            }
            return (
                !n && r(),
                () => {
                    e = !0;
                }
            );
        }, [n, t, u]),
        [r, o]
    );
}
function g(e) {
    let t = (0, i.useCallback)(() => m(e), [JSON.stringify(e)]);
    return T(e, t);
}
function S(e) {
    if ('subscriptionId' in e && null == e.subscriptionId) {
        let { subscriptionId: t, ...n } = e;
        e = n;
    }
    let t = (0, i.useCallback)(() => ('subscriptionId' in e ? p(e) : 'items' in e ? h(e) : null), [JSON.stringify(e)]);
    return T(e, t);
}
function A(e) {
    let t = (0, i.useCallback)(() => I(e), [JSON.stringify(e)]);
    return T(e, t);
}
function v(e) {
    let t = e.subscriptionPlanPrice;
    return (
        e.discounts.forEach((n) => {
            let r = n.amount / e.quantity;
            t -= r;
        }),
        t
    );
}
