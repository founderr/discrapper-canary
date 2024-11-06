t.d(n, {
    H: function () {
        return f;
    }
}),
    t(47120);
var i = t(512722),
    l = t.n(i),
    r = t(570140),
    s = t(355467),
    a = t(159351),
    c = t(366939),
    o = t(16084),
    u = t(255078),
    d = t(626135),
    m = t(74538),
    p = t(45572),
    x = t(981631),
    h = t(474936);
async function f(e) {
    let { setPurchaseState: n, setHasAcceptedTerms: t, setIsSubmitting: i, setPurchaseError: f, hasRedirectURL: v, setHasRedirectURL: g, isGift: S, baseAnalyticsData: E, analyticsLocation: j, analyticsLocations: I, flowStartTime: y, subscriptionPlan: P, planGroup: T, trialId: N, priceOptions: b, paymentSource: _, isPrepaidPaymentPastDue: C, openInvoiceId: A, premiumSubscription: O, onNext: R, metadata: Z, sku: M, skuPricePreview: w, purchaseType: D, referralCode: L, loadId: F, giftInfoOptions: k, invoicePreview: B } = e;
    n(p.A.PURCHASING), t(!0), i(!0), r.Z.wait(a.fw), f(null);
    try {
        let e, t, i;
        if (
            (d.default.track(x.rMx.PAYMENT_FLOW_COMPLETED, {
                ...E,
                subtotal: null == B ? void 0 : B.subtotal,
                tax: null == B ? void 0 : B.tax,
                expected_amount: null == B ? void 0 : B.total,
                expected_currency: null == B ? void 0 : B.currency,
                duration_ms: Date.now() - y
            }),
            v)
        )
            return;
        if (D === x.GZQ.ONE_TIME)
            l()(null != M, 'SKU must exist and be fetched.'),
                l()(null != w, 'SKUPricePreview must exist.'),
                (e = await (0, o.ZZ)(M.applicationId, M.id, {
                    expectedAmount: w.amount,
                    expectedCurrency: w.currency,
                    isGift: S,
                    paymentSource: _,
                    loadId: F,
                    giftInfoOptions: k
                }));
        else if ((l()(null != P, 'Missing subscriptionPlan'), S)) {
            l()(null != B, 'Missing invoicePreview');
            let n = B.total,
                t = B.currency;
            e = await (0, o.ZZ)(h.CL, P.skuId, {
                expectedAmount: n,
                expectedCurrency: t,
                paymentSource: _,
                subscriptionPlanId: P.id,
                isGift: !0,
                loadId: F,
                giftInfoOptions: k
            });
        } else if (C && null != A && null != _ && null != O)
            e = x.Uk1.has(_.type)
                ? await (0, s.G)(O, A, _, b.currency)
                : await (0, s.Mg)(
                      O,
                      {
                          paymentSource: _,
                          currency: b.currency
                      },
                      I,
                      j,
                      F
                  );
        else if (null != O) {
            let n = (0, m.al)(O, P.id, 1, new Set(T)),
                t = {
                    paymentSource: _,
                    currency: b.currency
                };
            O.status === x.O0b.PAUSED ? (t.status = x.O0b.ACTIVE) : (t.items = n), (e = await (0, s.Mg)(O, t, I, j, F));
        } else
            e = await (0, c.Ld)({
                planId: P.id,
                currency: b.currency,
                paymentSource: _,
                trialId: N,
                metadata: Z,
                referralCode: L,
                loadId: F
            });
        if (e.redirectConfirmation) {
            g(null != e.redirectURL);
            return;
        }
        n(p.A.COMPLETED), 'subscription' in e ? (t = null != e.subscription ? u.Z.createFromServer(e.subscription) : null) : 'entitlements' in e && (i = null != e.entitlements ? e.entitlements : void 0), R(t, i);
    } catch (e) {
        n(p.A.FAIL),
            f(e),
            d.default.track(x.rMx.PAYMENT_FLOW_FAILED, {
                ...E,
                payment_error_code: null == e ? void 0 : e.code,
                payment_source_id: null == _ ? void 0 : _.id,
                payment_source_type: null == _ ? void 0 : _.type,
                duration_ms: Date.now() - y
            });
    } finally {
        !v && i(!1);
    }
}
