n.d(t, {
    ED: function () {
        return T;
    },
    Ox: function () {
        return g;
    },
    hz: function () {
        return f;
    },
    o5: function () {
        return I;
    },
    pV: function () {
        return S;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(512722),
    o = n.n(a),
    s = n(544891),
    l = n(881052),
    u = n(146528),
    c = n(74538),
    d = n(73346),
    _ = n(981631);
async function E(e) {
    let { items: t, paymentSourceId: n, trialId: r, code: i, applyEntitlements: a = !1, currency: o, renewal: d, metadata: E } = e,
        f = {
            items: (t = (0, c.gB)(t)).map((e) => {
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
            renewal: d,
            metadata: E
        };
    try {
        let e = await s.tn.post({
            url: _.ANM.BILLING_SUBSCRIPTIONS_PREVIEW,
            body: f,
            oldFormErrors: !0
        });
        return u.Z.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new l.HF(e);
    }
}
async function f(e) {
    let { subscriptionId: t, items: n, paymentSourceId: r, renewal: i, currency: a, applyEntitlements: o = !1, analyticsLocations: d, analyticsLocation: E, userDiscountOfferId: f } = e;
    null != n && (n = (0, c.gB)(n));
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
        user_discount_offer_id: f
    };
    try {
        let e = await s.tn.patch({
            url: _.ANM.BILLING_SUBSCRIPTION_PREVIEW(t),
            query: {
                location: E,
                location_stack: d
            },
            body: h,
            oldFormErrors: !0
        });
        return u.Z.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new l.HF(e);
    }
}
async function h(e) {
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
        let e = await (0, d.Kb)({
            url: _.ANM.STORE_SKU_PURCHASE(n),
            query: s,
            oldFormErrors: !0
        });
        return u.Z.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new l.HF(e);
    }
}
async function p(e) {
    let { subscriptionId: t, preventFetch: n } = e;
    if (n) return null;
    let r = await s.tn.get({
        url: _.ANM.BILLING_SUBSCRIPTION_INVOICE(t),
        oldFormErrors: !0
    });
    return u.Z.createInvoiceFromServer(r.body);
}
function m(e, t) {
    let { preventFetch: n = !1 } = e,
        [r, a] = (0, i.useState)(null),
        [o, s] = (0, i.useState)(null);
    return (
        (0, i.useEffect)(() => {
            let e = !1;
            async function r() {
                try {
                    s(null), a(null);
                    let n = await t();
                    !e && a(n);
                } catch (t) {
                    !e && s(t);
                }
            }
            return (
                !n && r(),
                () => {
                    e = !0;
                }
            );
        }, [n, t]),
        [r, o]
    );
}
function I(e) {
    let t = (0, i.useCallback)(() => h(e), [JSON.stringify(e)]);
    return m(e, t);
}
function T(e) {
    if ('subscriptionId' in e && null == e.subscriptionId) {
        let { subscriptionId: t, ...n } = e;
        e = n;
    }
    let t = (0, i.useCallback)(() => ('subscriptionId' in e ? f(e) : 'items' in e ? E(e) : null), [JSON.stringify(e)]);
    return m(e, t);
}
function g(e) {
    let t = (0, i.useCallback)(() => p(e), [JSON.stringify(e)]);
    return m(e, t);
}
function S(e) {
    let t = e.subscriptionPlanPrice;
    return (
        e.discounts.forEach((n) => {
            let r = n.amount / e.quantity;
            t -= r;
        }),
        t
    );
}
