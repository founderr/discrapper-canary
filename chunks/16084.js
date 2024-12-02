n.d(t, {
    $N: function () {
        return E;
    },
    ZZ: function () {
        return b;
    },
    df: function () {
        return S;
    },
    pB: function () {
        return A;
    },
    uE: function () {
        return v;
    },
    x2: function () {
        return I;
    },
    xA: function () {
        return y;
    }
}),
    n(411104);
var r = n(311570),
    i = n(544891),
    a = n(570140),
    s = n(881052),
    o = n(128069),
    l = n(34756),
    u = n(115130),
    c = n(55563),
    d = n(695103),
    f = n(122289),
    _ = n(823379),
    p = n(936101),
    h = n(73346),
    m = n(355467),
    g = n(981631);
async function E(e, t, n) {
    if (null == c.Z.get(t)) {
        a.Z.dispatch({
            type: 'SKU_FETCH_START',
            skuId: t
        });
        try {
            let i = d.Z.inTestModeForApplication(e) || u.Z.inDevModeForApplication(e),
                s = {
                    url: i ? g.ANM.STORE_SKU(t) : g.ANM.STORE_PUBLISHED_LISTINGS_SKU(t),
                    rejectWithError: !1
                };
            n === r.v.VARIANTS_GROUP && (s.query = { variants_return_style: n });
            let o = await (0, h.Kb)(s);
            a.Z.dispatch({
                type: 'SKU_FETCH_SUCCESS',
                sku: i ? o.body : o.body.sku
            }),
                !i &&
                    a.Z.dispatch({
                        type: 'STORE_LISTING_FETCH_SUCCESS',
                        storeListing: o.body
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
async function v(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(d.Z.inTestModeForApplication(e) || u.Z.inDevModeForApplication(e)) && t) throw Error('this should only be used in test mode');
    let n = (
        await (0, h.Kb)({
            url: g.ANM.APPLICATION_SKUS(e),
            rejectWithError: !1
        })
    ).body;
    return (
        a.Z.dispatch({
            type: 'SKUS_FETCH_SUCCESS',
            skus: n
        }),
        n
    );
}
async function I(e, t, n, r) {
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
            url: g.ANM.STORE_SKU_PURCHASE(t),
            query: l,
            oldFormErrors: !0,
            rejectWithError: !1
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
        let e = n instanceof s.HF ? n : new s.HF(n);
        if (e.code === o.SM.BILLING_BUNDLE_ALREADY_PURCHASED || e.code === o.SM.BILLING_BUNDLE_PARTIALLY_OWNED) throw e;
    }
    return i;
}
let T = { isGift: !1 };
async function b(e, t, n) {
    let {
        paymentSource: r,
        expectedAmount: l,
        expectedCurrency: c,
        analyticsLoadId: h,
        isGift: E,
        giftInfoOptions: v,
        subscriptionPlanId: I,
        loadId: b,
        countryCode: S
    } = {
        ...T,
        ...n
    };
    a.Z.wait(() => {
        a.Z.dispatch({
            type: 'SKU_PURCHASE_START',
            applicationId: e,
            skuId: t
        });
    });
    let y = d.Z.inTestModeForApplication(e) || u.Z.inDevModeForApplication(e);
    try {
        let e = {
            gift: E,
            sku_subscription_plan_id: I,
            gateway_checkout_context: await (0, f.cn)(r),
            load_id: b
        };
        if (y) e.test_mode = !0;
        else {
            if (null != r && ((e.payment_source_id = r.id), (e.payment_source_token = await (0, m.Zv)(r)), g.QL.has(r.type))) {
                let t = await (0, m.EH)(r.type);
                e.return_url = (0, i.K0)() + g.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(r.type, null != t ? t : '', 'success');
            }
            null != l && (e.expected_amount = l), null != c && (e.expected_currency = c), (e.gift_info_options = v), null != S && (e.country_code = S), (e.purchase_token = (0, p.d)());
        }
        let n = await i.tn.post({
            url: g.ANM.STORE_SKU_PURCHASE(t),
            body: e,
            context: { load_id: h },
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return (
            a.Z.dispatch({
                type: 'SKU_PURCHASE_SUCCESS',
                skuId: t,
                libraryApplications: null != n.body.library_applications ? n.body.library_applications.filter(_.lm) : [],
                entitlements: n.body.entitlements,
                giftCode: n.body.gift_code
            }),
            {
                ...n.body,
                redirectConfirmation: !1
            }
        );
    } catch (i) {
        let n = i instanceof s.HF ? i : new s.HF(i);
        if (
            ((n.code === o.SM.CONFIRMATION_REQUIRED || n.code === o.SM.AUTHENTICATION_REQUIRED) &&
                a.Z.dispatch({
                    type: 'SKU_PURCHASE_AWAIT_CONFIRMATION',
                    skuId: t,
                    isGift: E
                }),
            a.Z.dispatch({
                type: 'SKU_PURCHASE_FAIL',
                applicationId: e,
                skuId: t,
                error: n
            }),
            n.code !== o.SM.CONFIRMATION_REQUIRED)
        )
            throw n;
        if (!i.body.payment_id) throw (0, m.SQ)('payment id cannot be null on redirected confirmations.');
        return (0, m.sk)(i.body, r);
    }
}
async function S(e) {
    a.Z.wait(() => {
        a.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_REDEEM_START',
            skuId: e
        });
    });
    try {
        let t = (
            await i.tn.post({
                url: g.ANM.USER_REDEEM_VIRTUAL_CURRENCY(e),
                rejectWithError: !1
            })
        ).body;
        return (
            a.Z.dispatch({
                type: 'VIRTUAL_CURRENCY_REDEEM_SUCCESS',
                skuId: e,
                entitlements: t
            }),
            t
        );
    } catch (n) {
        let t = n instanceof s.HF ? n : new s.HF(n);
        a.Z.dispatch({
            type: 'VIRTUAL_CURRENCY_REDEEM_FAIL',
            skuId: e,
            error: t
        });
    }
}
async function y() {
    try {
        let e = { purchase_token: (0, p.d)() };
        return {
            ...(
                await i.tn.post({
                    url: g.ANM.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                    body: e,
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
            ).body
        };
    } catch (e) {
        throw e instanceof s.HF ? e : new s.HF(e);
    }
}
function A() {
    a.Z.dispatch({ type: 'SKU_PURCHASE_CLEAR_ERROR' });
}
