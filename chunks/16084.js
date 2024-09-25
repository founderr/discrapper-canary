n.d(t, {
    $N: function () {
        return I;
    },
    ZZ: function () {
        return A;
    },
    pB: function () {
        return N;
    },
    uE: function () {
        return T;
    },
    x2: function () {
        return g;
    },
    xA: function () {
        return v;
    }
});
var r = n(411104);
var i = n(544891),
    a = n(570140),
    o = n(881052),
    s = n(128069),
    l = n(34756),
    u = n(115130),
    c = n(55563),
    d = n(695103),
    _ = n(122289),
    E = n(823379),
    f = n(936101),
    h = n(73346),
    p = n(355467),
    m = n(981631);
async function I(e, t) {
    if (null == c.Z.get(t)) {
        a.Z.dispatch({
            type: 'SKU_FETCH_START',
            skuId: t
        });
        try {
            let n = d.Z.inTestModeForApplication(e) || u.Z.inDevModeForApplication(e),
                r = await (0, h.Kb)(n ? m.ANM.STORE_SKU(t) : m.ANM.STORE_PUBLISHED_LISTINGS_SKU(t));
            a.Z.dispatch({
                type: 'SKU_FETCH_SUCCESS',
                sku: n ? r.body : r.body.sku
            }),
                !n &&
                    a.Z.dispatch({
                        type: 'STORE_LISTING_FETCH_SUCCESS',
                        storeListing: r.body
                    });
        } catch (e) {
            throw (
                (a.Z.dispatch({
                    type: 'SKU_FETCH_FAIL',
                    skuId: t
                }),
                new l.Z('Failed to fetch SKU '.concat(t)))
            );
        }
    }
}
async function T(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(d.Z.inTestModeForApplication(e) || u.Z.inDevModeForApplication(e)) && t) throw Error('this should only be used in test mode');
    let n = (await (0, h.Kb)(m.ANM.APPLICATION_SKUS(e))).body;
    return (
        a.Z.dispatch({
            type: 'SKUS_FETCH_SUCCESS',
            skus: n
        }),
        n
    );
}
async function g(e, t, n, r) {
    let i;
    let l = {
        payment_source_id: n,
        gift: null == r ? void 0 : r.isGift
    };
    (d.Z.inTestModeForApplication(e) || u.Z.inDevModeForApplication(e)) && (l.test_mode = !0),
        a.Z.dispatch({
            type: 'SKU_PURCHASE_PREVIEW_FETCH',
            skuId: t
        });
    try {
        (i = await (0, h.Kb)({
            url: m.ANM.STORE_SKU_PURCHASE(t),
            query: l,
            oldFormErrors: !0
        })),
            a.Z.dispatch({
                type: 'SKU_PURCHASE_PREVIEW_FETCH_SUCCESS',
                skuId: t,
                paymentSourceId: n,
                price: i.body
            });
    } catch (n) {
        a.Z.dispatch({
            type: 'SKU_PURCHASE_PREVIEW_FETCH_FAILURE',
            skuId: t
        });
        let e = n instanceof o.HF ? n : new o.HF(n);
        if (e.code === s.SM.BILLING_BUNDLE_ALREADY_PURCHASED || e.code === s.SM.BILLING_BUNDLE_PARTIALLY_OWNED) throw e;
    }
    return i;
}
let S = { isGift: !1 };
async function A(e, t, n) {
    let {
        paymentSource: r,
        expectedAmount: l,
        expectedCurrency: c,
        analyticsLoadId: h,
        isGift: I,
        giftInfoOptions: T,
        subscriptionPlanId: g,
        loadId: A,
        countryCode: v
    } = {
        ...S,
        ...n
    };
    a.Z.wait(() => {
        a.Z.dispatch({
            type: 'SKU_PURCHASE_START',
            applicationId: e,
            skuId: t
        });
    });
    let N = d.Z.inTestModeForApplication(e) || u.Z.inDevModeForApplication(e);
    try {
        let e = {
            gift: I,
            sku_subscription_plan_id: g,
            gateway_checkout_context: await (0, _.cn)(r),
            load_id: A
        };
        if (N) e.test_mode = !0;
        else {
            if (null != r && ((e.payment_source_id = r.id), (e.payment_source_token = await (0, p.Zv)(r)), m.QL.has(r.type))) {
                let t = await (0, p.EH)(r.type);
                e.return_url = (0, i.K0)() + m.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(r.type, null != t ? t : '', 'success');
            }
            null != l && (e.expected_amount = l), null != c && (e.expected_currency = c), (e.gift_info_options = T), null != v && (e.country_code = v), (e.purchase_token = (0, f.d)());
        }
        let n = await i.tn.post({
            url: m.ANM.STORE_SKU_PURCHASE(t),
            body: e,
            context: { load_id: h },
            oldFormErrors: !0
        });
        return (
            a.Z.dispatch({
                type: 'SKU_PURCHASE_SUCCESS',
                skuId: t,
                libraryApplications: null != n.body.library_applications ? n.body.library_applications.filter(E.lm) : [],
                entitlements: n.body.entitlements,
                giftCode: n.body.gift_code
            }),
            {
                ...n.body,
                redirectConfirmation: !1
            }
        );
    } catch (i) {
        let n = i instanceof o.HF ? i : new o.HF(i);
        if (
            ((n.code === s.SM.CONFIRMATION_REQUIRED || n.code === s.SM.AUTHENTICATION_REQUIRED) &&
                a.Z.dispatch({
                    type: 'SKU_PURCHASE_AWAIT_CONFIRMATION',
                    skuId: t,
                    isGift: I
                }),
            n.code !== s.SM.CONFIRMATION_REQUIRED)
        )
            throw (
                (a.Z.dispatch({
                    type: 'SKU_PURCHASE_FAIL',
                    applicationId: e,
                    skuId: t,
                    error: n
                }),
                n)
            );
        if (!i.body.payment_id) throw (0, p.SQ)('payment id cannot be null on redirected confirmations.');
        return (0, p.sk)(i.body, r);
    }
}
async function v() {
    try {
        let e = { purchase_token: (0, f.d)() };
        return {
            ...(
                await i.tn.post({
                    url: m.ANM.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                    body: e,
                    oldFormErrors: !0
                })
            ).body
        };
    } catch (e) {
        throw e instanceof o.HF ? e : new o.HF(e);
    }
}
function N() {
    a.Z.dispatch({ type: 'SKU_PURCHASE_CLEAR_ERROR' });
}
