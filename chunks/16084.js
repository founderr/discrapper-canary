n.d(e, {
    $N: function () {
        return C;
    },
    ZZ: function () {
        return P;
    },
    pB: function () {
        return d;
    },
    uE: function () {
        return N;
    },
    x2: function () {
        return s;
    },
    xA: function () {
        return U;
    }
}),
    n(411104);
var r = n(544891),
    E = n(570140),
    i = n(881052),
    u = n(128069),
    S = n(34756),
    o = n(115130),
    l = n(55563),
    _ = n(695103),
    A = n(122289),
    a = n(823379),
    T = n(936101),
    I = n(73346),
    c = n(355467),
    R = n(981631);
async function C(t, e) {
    if (null == l.Z.get(e)) {
        E.Z.dispatch({
            type: 'SKU_FETCH_START',
            skuId: e
        });
        try {
            let n = _.Z.inTestModeForApplication(t) || o.Z.inDevModeForApplication(t),
                r = await (0, I.Kb)(n ? R.ANM.STORE_SKU(e) : R.ANM.STORE_PUBLISHED_LISTINGS_SKU(e));
            E.Z.dispatch({
                type: 'SKU_FETCH_SUCCESS',
                sku: n ? r.body : r.body.sku
            }),
                !n &&
                    E.Z.dispatch({
                        type: 'STORE_LISTING_FETCH_SUCCESS',
                        storeListing: r.body
                    });
        } catch (t) {
            throw (
                (E.Z.dispatch({
                    type: 'SKU_FETCH_FAIL',
                    skuId: e
                }),
                new S.Z('Failed to fetch SKU '.concat(e)))
            );
        }
    }
}
async function N(t) {
    let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(_.Z.inTestModeForApplication(t) || o.Z.inDevModeForApplication(t)) && e) throw Error('this should only be used in test mode');
    let n = (await (0, I.Kb)(R.ANM.APPLICATION_SKUS(t))).body;
    return (
        E.Z.dispatch({
            type: 'SKUS_FETCH_SUCCESS',
            skus: n
        }),
        n
    );
}
async function s(t, e, n, r) {
    let S;
    let l = {
        payment_source_id: n,
        gift: null == r ? void 0 : r.isGift
    };
    (_.Z.inTestModeForApplication(t) || o.Z.inDevModeForApplication(t)) && (l.test_mode = !0),
        E.Z.dispatch({
            type: 'SKU_PURCHASE_PREVIEW_FETCH',
            skuId: e
        });
    try {
        (S = await (0, I.Kb)({
            url: R.ANM.STORE_SKU_PURCHASE(e),
            query: l,
            oldFormErrors: !0
        })),
            E.Z.dispatch({
                type: 'SKU_PURCHASE_PREVIEW_FETCH_SUCCESS',
                skuId: e,
                paymentSourceId: n,
                price: S.body
            });
    } catch (n) {
        E.Z.dispatch({
            type: 'SKU_PURCHASE_PREVIEW_FETCH_FAILURE',
            skuId: e
        });
        let t = n instanceof i.HF ? n : new i.HF(n);
        if (t.code === u.SM.BILLING_BUNDLE_ALREADY_PURCHASED || t.code === u.SM.BILLING_BUNDLE_PARTIALLY_OWNED) throw t;
    }
    return S;
}
let M = { isGift: !1 };
async function P(t, e, n) {
    let {
        paymentSource: S,
        expectedAmount: l,
        expectedCurrency: I,
        analyticsLoadId: C,
        isGift: N,
        giftInfoOptions: s,
        subscriptionPlanId: P,
        loadId: U,
        countryCode: d
    } = {
        ...M,
        ...n
    };
    E.Z.wait(() => {
        E.Z.dispatch({
            type: 'SKU_PURCHASE_START',
            applicationId: t,
            skuId: e
        });
    });
    let f = _.Z.inTestModeForApplication(t) || o.Z.inDevModeForApplication(t);
    try {
        let t = {
            gift: N,
            sku_subscription_plan_id: P,
            gateway_checkout_context: await (0, A.cn)(S),
            load_id: U
        };
        if (f) t.test_mode = !0;
        else {
            if (null != S && ((t.payment_source_id = S.id), (t.payment_source_token = await (0, c.Zv)(S)), R.QL.has(S.type))) {
                let e = await (0, c.EH)(S.type);
                t.return_url = (0, r.K0)() + R.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(S.type, null != e ? e : '', 'success');
            }
            null != l && (t.expected_amount = l), null != I && (t.expected_currency = I), (t.gift_info_options = s), null != d && (t.country_code = d), (t.purchase_token = (0, T.d)());
        }
        let n = await r.tn.post({
            url: R.ANM.STORE_SKU_PURCHASE(e),
            body: t,
            context: { load_id: C },
            oldFormErrors: !0
        });
        return (
            E.Z.dispatch({
                type: 'SKU_PURCHASE_SUCCESS',
                skuId: e,
                libraryApplications: null != n.body.library_applications ? n.body.library_applications.filter(a.lm) : [],
                entitlements: n.body.entitlements,
                giftCode: n.body.gift_code
            }),
            {
                ...n.body,
                redirectConfirmation: !1
            }
        );
    } catch (r) {
        let n = r instanceof i.HF ? r : new i.HF(r);
        if (
            ((n.code === u.SM.CONFIRMATION_REQUIRED || n.code === u.SM.AUTHENTICATION_REQUIRED) &&
                E.Z.dispatch({
                    type: 'SKU_PURCHASE_AWAIT_CONFIRMATION',
                    skuId: e,
                    isGift: N
                }),
            E.Z.dispatch({
                type: 'SKU_PURCHASE_FAIL',
                applicationId: t,
                skuId: e,
                error: n
            }),
            n.code !== u.SM.CONFIRMATION_REQUIRED)
        )
            throw n;
        if (!r.body.payment_id) throw (0, c.SQ)('payment id cannot be null on redirected confirmations.');
        return (0, c.sk)(r.body, S);
    }
}
async function U() {
    try {
        let t = { purchase_token: (0, T.d)() };
        return {
            ...(
                await r.tn.post({
                    url: R.ANM.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                    body: t,
                    oldFormErrors: !0
                })
            ).body
        };
    } catch (t) {
        throw t instanceof i.HF ? t : new i.HF(t);
    }
}
function d() {
    E.Z.dispatch({ type: 'SKU_PURCHASE_CLEAR_ERROR' });
}
