n.d(e, {
    $N: function () {
        return A;
    },
    ZZ: function () {
        return M;
    },
    df: function () {
        return N;
    },
    pB: function () {
        return f;
    },
    uE: function () {
        return R;
    },
    x2: function () {
        return h;
    },
    xA: function () {
        return I;
    }
}),
    n(411104);
var i = n(544891),
    r = n(570140),
    o = n(881052),
    a = n(128069),
    d = n(34756),
    l = n(115130),
    c = n(55563),
    _ = n(695103),
    s = n(122289),
    u = n(823379),
    E = n(936101),
    p = n(73346),
    b = n(355467),
    S = n(981631);
async function A(t, e) {
    if (null == c.Z.get(e)) {
        r.Z.dispatch({
            type: 'SKU_FETCH_START',
            skuId: e
        });
        try {
            let n = _.Z.inTestModeForApplication(t) || l.Z.inDevModeForApplication(t),
                i = await (0, p.Kb)(n ? S.ANM.STORE_SKU(e) : S.ANM.STORE_PUBLISHED_LISTINGS_SKU(e));
            r.Z.dispatch({
                type: 'SKU_FETCH_SUCCESS',
                sku: n ? i.body : i.body.sku
            }),
                !n &&
                    r.Z.dispatch({
                        type: 'STORE_LISTING_FETCH_SUCCESS',
                        storeListing: i.body
                    });
        } catch (t) {
            throw (
                (r.Z.dispatch({
                    type: 'SKU_FETCH_FAIL',
                    skuId: e
                }),
                new d.Z('Failed to fetch SKU '.concat(e)))
            );
        }
    }
}
async function R(t) {
    let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(_.Z.inTestModeForApplication(t) || l.Z.inDevModeForApplication(t)) && e) throw Error('this should only be used in test mode');
    let n = (await (0, p.Kb)(S.ANM.APPLICATION_SKUS(t))).body;
    return (
        r.Z.dispatch({
            type: 'SKUS_FETCH_SUCCESS',
            skus: n
        }),
        n
    );
}
async function h(t, e, n, i) {
    let d;
    let c = {
        payment_source_id: n,
        gift: null == i ? void 0 : i.isGift
    };
    (_.Z.inTestModeForApplication(t) || l.Z.inDevModeForApplication(t)) && (c.test_mode = !0),
        r.Z.dispatch({
            type: 'SKU_PURCHASE_PREVIEW_FETCH',
            skuId: e
        });
    try {
        (d = await (0, p.Kb)({
            url: S.ANM.STORE_SKU_PURCHASE(e),
            query: c,
            oldFormErrors: !0
        })),
            r.Z.dispatch({
                type: 'SKU_PURCHASE_PREVIEW_FETCH_SUCCESS',
                skuId: e,
                paymentSourceId: n,
                price: d.body
            });
    } catch (n) {
        r.Z.dispatch({
            type: 'SKU_PURCHASE_PREVIEW_FETCH_FAILURE',
            skuId: e
        });
        let t = n instanceof o.HF ? n : new o.HF(n);
        if (t.code === a.SM.BILLING_BUNDLE_ALREADY_PURCHASED || t.code === a.SM.BILLING_BUNDLE_PARTIALLY_OWNED) throw t;
    }
    return d;
}
let C = { isGift: !1 };
async function M(t, e, n) {
    let {
        paymentSource: d,
        expectedAmount: c,
        expectedCurrency: p,
        analyticsLoadId: A,
        isGift: R,
        giftInfoOptions: h,
        subscriptionPlanId: M,
        loadId: N,
        countryCode: I
    } = {
        ...C,
        ...n
    };
    r.Z.wait(() => {
        r.Z.dispatch({
            type: 'SKU_PURCHASE_START',
            applicationId: t,
            skuId: e
        });
    });
    let f = _.Z.inTestModeForApplication(t) || l.Z.inDevModeForApplication(t);
    try {
        let t = {
            gift: R,
            sku_subscription_plan_id: M,
            gateway_checkout_context: await (0, s.cn)(d),
            load_id: N
        };
        if (f) t.test_mode = !0;
        else {
            if (null != d && ((t.payment_source_id = d.id), (t.payment_source_token = await (0, b.Zv)(d)), S.QL.has(d.type))) {
                let e = await (0, b.EH)(d.type);
                t.return_url = (0, i.K0)() + S.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(d.type, null != e ? e : '', 'success');
            }
            null != c && (t.expected_amount = c), null != p && (t.expected_currency = p), (t.gift_info_options = h), null != I && (t.country_code = I), (t.purchase_token = (0, E.d)());
        }
        let n = await i.tn.post({
            url: S.ANM.STORE_SKU_PURCHASE(e),
            body: t,
            context: { load_id: A },
            oldFormErrors: !0
        });
        return (
            r.Z.dispatch({
                type: 'SKU_PURCHASE_SUCCESS',
                skuId: e,
                libraryApplications: null != n.body.library_applications ? n.body.library_applications.filter(u.lm) : [],
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
            ((n.code === a.SM.CONFIRMATION_REQUIRED || n.code === a.SM.AUTHENTICATION_REQUIRED) &&
                r.Z.dispatch({
                    type: 'SKU_PURCHASE_AWAIT_CONFIRMATION',
                    skuId: e,
                    isGift: R
                }),
            r.Z.dispatch({
                type: 'SKU_PURCHASE_FAIL',
                applicationId: t,
                skuId: e,
                error: n
            }),
            n.code !== a.SM.CONFIRMATION_REQUIRED)
        )
            throw n;
        if (!i.body.payment_id) throw (0, b.SQ)('payment id cannot be null on redirected confirmations.');
        return (0, b.sk)(i.body, d);
    }
}
async function N(t) {
    r.Z.wait(() => {
        r.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_REDEEM_START',
            skuId: t
        });
    });
    try {
        let e = (await i.tn.post({ url: S.ANM.USER_REDEEM_VIRTUAL_CURRENCY(t) })).body;
        return (
            r.Z.dispatch({
                type: 'VIRTUAL_CURRENCY_REDEEM_SUCCESS',
                skuId: t,
                entitlements: e
            }),
            e
        );
    } catch (n) {
        let e = n instanceof o.HF ? n : new o.HF(n);
        r.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_REDEEM_FAIL',
            skuId: t,
            error: e
        });
    }
}
async function I() {
    try {
        let t = { purchase_token: (0, E.d)() };
        return {
            ...(
                await i.tn.post({
                    url: S.ANM.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                    body: t,
                    oldFormErrors: !0
                })
            ).body
        };
    } catch (t) {
        throw t instanceof o.HF ? t : new o.HF(t);
    }
}
function f() {
    r.Z.dispatch({ type: 'SKU_PURCHASE_CLEAR_ERROR' });
}
