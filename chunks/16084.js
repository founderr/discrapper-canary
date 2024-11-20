n.d(e, {
    $N: function () {
        return R;
    },
    ZZ: function () {
        return M;
    },
    df: function () {
        return I;
    },
    pB: function () {
        return y;
    },
    uE: function () {
        return h;
    },
    x2: function () {
        return C;
    },
    xA: function () {
        return f;
    }
}),
    n(411104);
var r = n(311570),
    i = n(544891),
    o = n(570140),
    a = n(881052),
    l = n(128069),
    d = n(34756),
    c = n(115130),
    _ = n(55563),
    s = n(695103),
    u = n(122289),
    E = n(823379),
    p = n(936101),
    b = n(73346),
    S = n(355467),
    A = n(981631);
async function R(t, e, n) {
    if (null == _.Z.get(e)) {
        o.Z.dispatch({
            type: 'SKU_FETCH_START',
            skuId: e
        });
        try {
            let i = s.Z.inTestModeForApplication(t) || c.Z.inDevModeForApplication(t),
                a = {
                    url: i ? A.ANM.STORE_SKU(e) : A.ANM.STORE_PUBLISHED_LISTINGS_SKU(e),
                    rejectWithError: !1
                };
            n === r.v.VARIANTS_GROUP && (a.query = { variants_return_style: n });
            let l = await (0, b.Kb)(a);
            o.Z.dispatch({
                type: 'SKU_FETCH_SUCCESS',
                sku: i ? l.body : l.body.sku
            }),
                !i &&
                    o.Z.dispatch({
                        type: 'STORE_LISTING_FETCH_SUCCESS',
                        storeListing: l.body
                    });
        } catch (t) {
            throw (
                (o.Z.dispatch({
                    type: 'SKU_FETCH_FAIL',
                    skuId: e
                }),
                new d.Z('Failed to fetch SKU '.concat(e)))
            );
        }
    }
}
async function h(t) {
    let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(s.Z.inTestModeForApplication(t) || c.Z.inDevModeForApplication(t)) && e) throw Error('this should only be used in test mode');
    let n = (
        await (0, b.Kb)({
            url: A.ANM.APPLICATION_SKUS(t),
            rejectWithError: !1
        })
    ).body;
    return (
        o.Z.dispatch({
            type: 'SKUS_FETCH_SUCCESS',
            skus: n
        }),
        n
    );
}
async function C(t, e, n, r) {
    let i;
    let d = {
        payment_source_id: n,
        gift: null == r ? void 0 : r.isGift
    };
    (s.Z.inTestModeForApplication(t) || c.Z.inDevModeForApplication(t)) && (d.test_mode = !0),
        o.Z.dispatch({
            type: 'SKU_PURCHASE_PREVIEW_FETCH',
            skuId: e
        });
    try {
        (i = await (0, b.Kb)({
            url: A.ANM.STORE_SKU_PURCHASE(e),
            query: d,
            oldFormErrors: !0,
            rejectWithError: !1
        })),
            o.Z.dispatch({
                type: 'SKU_PURCHASE_PREVIEW_FETCH_SUCCESS',
                skuId: e,
                paymentSourceId: n,
                price: i.body
            });
    } catch (n) {
        o.Z.dispatch({
            type: 'SKU_PURCHASE_PREVIEW_FETCH_FAILURE',
            skuId: e
        });
        let t = n instanceof a.HF ? n : new a.HF(n);
        if (t.code === l.SM.BILLING_BUNDLE_ALREADY_PURCHASED || t.code === l.SM.BILLING_BUNDLE_PARTIALLY_OWNED) throw t;
    }
    return i;
}
let N = { isGift: !1 };
async function M(t, e, n) {
    let {
        paymentSource: r,
        expectedAmount: d,
        expectedCurrency: _,
        analyticsLoadId: b,
        isGift: R,
        giftInfoOptions: h,
        subscriptionPlanId: C,
        loadId: M,
        countryCode: I
    } = {
        ...N,
        ...n
    };
    o.Z.wait(() => {
        o.Z.dispatch({
            type: 'SKU_PURCHASE_START',
            applicationId: t,
            skuId: e
        });
    });
    let f = s.Z.inTestModeForApplication(t) || c.Z.inDevModeForApplication(t);
    try {
        let t = {
            gift: R,
            sku_subscription_plan_id: C,
            gateway_checkout_context: await (0, u.cn)(r),
            load_id: M
        };
        if (f) t.test_mode = !0;
        else {
            if (null != r && ((t.payment_source_id = r.id), (t.payment_source_token = await (0, S.Zv)(r)), A.QL.has(r.type))) {
                let e = await (0, S.EH)(r.type);
                t.return_url = (0, i.K0)() + A.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(r.type, null != e ? e : '', 'success');
            }
            null != d && (t.expected_amount = d), null != _ && (t.expected_currency = _), (t.gift_info_options = h), null != I && (t.country_code = I), (t.purchase_token = (0, p.d)());
        }
        let n = await i.tn.post({
            url: A.ANM.STORE_SKU_PURCHASE(e),
            body: t,
            context: { load_id: b },
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return (
            o.Z.dispatch({
                type: 'SKU_PURCHASE_SUCCESS',
                skuId: e,
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
        let n = i instanceof a.HF ? i : new a.HF(i);
        if (
            ((n.code === l.SM.CONFIRMATION_REQUIRED || n.code === l.SM.AUTHENTICATION_REQUIRED) &&
                o.Z.dispatch({
                    type: 'SKU_PURCHASE_AWAIT_CONFIRMATION',
                    skuId: e,
                    isGift: R
                }),
            o.Z.dispatch({
                type: 'SKU_PURCHASE_FAIL',
                applicationId: t,
                skuId: e,
                error: n
            }),
            n.code !== l.SM.CONFIRMATION_REQUIRED)
        )
            throw n;
        if (!i.body.payment_id) throw (0, S.SQ)('payment id cannot be null on redirected confirmations.');
        return (0, S.sk)(i.body, r);
    }
}
async function I(t) {
    o.Z.wait(() => {
        o.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_REDEEM_START',
            skuId: t
        });
    });
    try {
        let e = (
            await i.tn.post({
                url: A.ANM.USER_REDEEM_VIRTUAL_CURRENCY(t),
                rejectWithError: !1
            })
        ).body;
        return (
            o.Z.dispatch({
                type: 'VIRTUAL_CURRENCY_REDEEM_SUCCESS',
                skuId: t,
                entitlements: e
            }),
            e
        );
    } catch (n) {
        let e = n instanceof a.HF ? n : new a.HF(n);
        o.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_REDEEM_FAIL',
            skuId: t,
            error: e
        });
    }
}
async function f() {
    try {
        let t = { purchase_token: (0, p.d)() };
        return {
            ...(
                await i.tn.post({
                    url: A.ANM.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                    body: t,
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
            ).body
        };
    } catch (t) {
        throw t instanceof a.HF ? t : new a.HF(t);
    }
}
function y() {
    o.Z.dispatch({ type: 'SKU_PURCHASE_CLEAR_ERROR' });
}
