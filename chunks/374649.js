n.d(t, {
    ED: function () {
        return E;
    },
    Ox: function () {
        return v;
    },
    hz: function () {
        return _;
    },
    o5: function () {
        return g;
    },
    pV: function () {
        return I;
    }
}),
    n(47120);
var r = n(192379),
    i = n(512722),
    a = n.n(i),
    s = n(544891),
    o = n(881052),
    l = n(146528),
    u = n(74538),
    c = n(73346),
    d = n(981631);
async function f(e) {
    let { items: t, paymentSourceId: n, trialId: r, code: i, applyEntitlements: a = !1, currency: c, renewal: f, metadata: _ } = e,
        p = {
            items: (t = (0, u.gB)(t)).map((e) => {
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
            currency: c,
            renewal: f,
            metadata: _
        };
    try {
        let e = await s.tn.post({
            url: d.ANM.BILLING_SUBSCRIPTIONS_PREVIEW,
            body: p,
            oldFormErrors: !0
        });
        return l.Z.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new o.HF(e);
    }
}
async function _(e) {
    let { subscriptionId: t, items: n, paymentSourceId: r, renewal: i, currency: a, applyEntitlements: c = !1, analyticsLocations: f, analyticsLocation: _, userDiscountOfferId: p } = e;
    null != n && (n = (0, u.gB)(n));
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
        apply_entitlements: c,
        currency: a,
        user_discount_offer_id: p
    };
    try {
        let e = await s.tn.patch({
            url: d.ANM.BILLING_SUBSCRIPTION_PREVIEW(t),
            query: {
                location: _,
                location_stack: f
            },
            body: h,
            oldFormErrors: !0
        });
        return l.Z.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new o.HF(e);
    }
}
async function p(e) {
    let { paymentSourceId: t, skuId: n, subscriptionPlanId: r, currency: i, loadId: s } = e;
    a()(n, 'SKU ID is missing for one time purchase gift invoice preview');
    try {
        let e = await (0, c.Kb)({
            url: d.ANM.STORE_SKU_PURCHASE(n),
            query: {
                gift: !0,
                payment_source_id: t,
                sku_subscription_plan_id: r,
                currency: i,
                load_id: s
            },
            oldFormErrors: !0
        });
        return l.Z.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new o.HF(e);
    }
}
async function h(e) {
    let { subscriptionId: t, preventFetch: n } = e;
    if (n) return null;
    let r = await s.tn.get({
        url: d.ANM.BILLING_SUBSCRIPTION_INVOICE(t),
        oldFormErrors: !0
    });
    return l.Z.createInvoiceFromServer(r.body);
}
function m(e, t) {
    let { preventFetch: n = !1 } = e,
        [i, a] = (0, r.useState)(null),
        [s, o] = (0, r.useState)(null);
    return (
        (0, r.useEffect)(() => {
            let e = !1;
            async function r() {
                try {
                    o(null), a(null);
                    let n = await t();
                    !e && a(n);
                } catch (t) {
                    !e && o(t);
                }
            }
            return (
                !n && r(),
                () => {
                    e = !0;
                }
            );
        }, [n, t]),
        [i, s]
    );
}
function g(e) {
    let t = (0, r.useCallback)(() => p(e), [JSON.stringify(e)]);
    return m(e, t);
}
function E(e) {
    if ('subscriptionId' in e && null == e.subscriptionId) {
        let { subscriptionId: t, ...n } = e;
        e = n;
    }
    let t = (0, r.useCallback)(() => ('subscriptionId' in e ? _(e) : 'items' in e ? f(e) : null), [JSON.stringify(e)]);
    return m(e, t);
}
function v(e) {
    let t = (0, r.useCallback)(() => h(e), [JSON.stringify(e)]);
    return m(e, t);
}
function I(e) {
    let t = e.subscriptionPlanPrice;
    return (
        e.discounts.forEach((n) => {
            let r = n.amount / e.quantity;
            t -= r;
        }),
        t
    );
}
