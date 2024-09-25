t.d(n, {
    H: function () {
        return f;
    }
}),
    t(47120);
var i = t(512722),
    a = t.n(i),
    r = t(570140),
    s = t(355467),
    l = t(976255),
    o = t(366939),
    c = t(16084),
    u = t(255078),
    d = t(626135),
    _ = t(74538),
    p = t(45572),
    m = t(981631),
    I = t(474936);
async function f(e) {
    let { setPurchaseState: n, setHasAcceptedTerms: t, setIsSubmitting: i, setPurchaseError: f, hasRedirectURL: E, setHasRedirectURL: x, isGift: N, baseAnalyticsData: S, analyticsLocation: T, analyticsLocations: h, flowStartTime: b, subscriptionPlan: g, planGroup: P, trialId: v, priceOptions: A, paymentSource: M, isPrepaidPaymentPastDue: C, openInvoiceId: y, premiumSubscription: R, onNext: O, metadata: L, sku: j, skuPricePreview: Z, purchaseType: D, referralCode: w, loadId: B, giftInfoOptions: G, invoicePreview: F } = e;
    n(p.A.PURCHASING), t(!0), i(!0), r.Z.wait(l.fw), f(null);
    try {
        let e, t, i;
        if (
            (d.default.track(m.rMx.PAYMENT_FLOW_COMPLETED, {
                ...S,
                subtotal: null == F ? void 0 : F.subtotal,
                tax: null == F ? void 0 : F.tax,
                expected_amount: null == F ? void 0 : F.total,
                expected_currency: null == F ? void 0 : F.currency,
                duration_ms: Date.now() - b
            }),
            E)
        )
            return;
        if (D === m.GZQ.ONE_TIME)
            a()(null != j, 'SKU must exist and be fetched.'),
                a()(null != Z, 'SKUPricePreview must exist.'),
                (e = await (0, c.ZZ)(j.applicationId, j.id, {
                    expectedAmount: Z.amount,
                    expectedCurrency: Z.currency,
                    isGift: N,
                    paymentSource: M,
                    loadId: B,
                    giftInfoOptions: G
                }));
        else if ((a()(null != g, 'Missing subscriptionPlan'), N)) {
            a()(null != F, 'Missing invoicePreview');
            let n = F.total,
                t = F.currency;
            e = await (0, c.ZZ)(I.CL, g.skuId, {
                expectedAmount: n,
                expectedCurrency: t,
                paymentSource: M,
                subscriptionPlanId: g.id,
                isGift: !0,
                loadId: B,
                giftInfoOptions: G
            });
        } else if (C && null != y && null != M && null != R)
            e = m.Uk1.has(M.type)
                ? await (0, s.G)(R, y, M, A.currency)
                : await (0, s.Mg)(
                      R,
                      {
                          paymentSource: M,
                          currency: A.currency
                      },
                      h,
                      T,
                      B
                  );
        else if (null != R) {
            let n = (0, _.al)(R, g.id, 1, new Set(P)),
                t = {
                    paymentSource: M,
                    currency: A.currency
                };
            R.status === m.O0b.PAUSED ? (t.status = m.O0b.ACTIVE) : (t.items = n), (e = await (0, s.Mg)(R, t, h, T, B));
        } else
            e = await (0, o.Ld)({
                planId: g.id,
                currency: A.currency,
                paymentSource: M,
                trialId: v,
                metadata: L,
                referralCode: w,
                loadId: B
            });
        if (e.redirectConfirmation) {
            x(null != e.redirectURL);
            return;
        }
        n(p.A.COMPLETED), 'subscription' in e ? (t = null != e.subscription ? u.Z.createFromServer(e.subscription) : null) : 'entitlements' in e && (i = null != e.entitlements ? e.entitlements : void 0), O(t, i);
    } catch (e) {
        n(p.A.FAIL),
            f(e),
            d.default.track(m.rMx.PAYMENT_FLOW_FAILED, {
                ...S,
                payment_error_code: null == e ? void 0 : e.code,
                payment_source_id: null == M ? void 0 : M.id,
                payment_source_type: null == M ? void 0 : M.type,
                duration_ms: Date.now() - b
            });
    } finally {
        !E && i(!1);
    }
}
