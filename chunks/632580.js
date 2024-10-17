s.d(n, {
    H: function () {
        return p;
    }
}),
    s(47120);
var t = s(512722),
    l = s.n(t),
    i = s(570140),
    r = s(355467),
    a = s(976255),
    c = s(366939),
    o = s(16084),
    u = s(255078),
    d = s(626135),
    _ = s(74538),
    m = s(45572),
    I = s(981631),
    E = s(474936);
async function p(e) {
    let { setPurchaseState: n, setHasAcceptedTerms: s, setIsSubmitting: t, setPurchaseError: p, hasRedirectURL: N, setHasRedirectURL: T, isGift: S, baseAnalyticsData: x, analyticsLocation: h, analyticsLocations: P, flowStartTime: f, subscriptionPlan: A, planGroup: v, trialId: M, priceOptions: g, paymentSource: R, isPrepaidPaymentPastDue: L, openInvoiceId: O, premiumSubscription: C, onNext: j, metadata: Z, sku: y, skuPricePreview: b, purchaseType: D, referralCode: G, loadId: U, giftInfoOptions: F, invoicePreview: B } = e;
    n(m.A.PURCHASING), s(!0), t(!0), i.Z.wait(a.fw), p(null);
    try {
        let e, s, t;
        if (
            (d.default.track(I.rMx.PAYMENT_FLOW_COMPLETED, {
                ...x,
                subtotal: null == B ? void 0 : B.subtotal,
                tax: null == B ? void 0 : B.tax,
                expected_amount: null == B ? void 0 : B.total,
                expected_currency: null == B ? void 0 : B.currency,
                duration_ms: Date.now() - f
            }),
            N)
        )
            return;
        if (D === I.GZQ.ONE_TIME)
            l()(null != y, 'SKU must exist and be fetched.'),
                l()(null != b, 'SKUPricePreview must exist.'),
                (e = await (0, o.ZZ)(y.applicationId, y.id, {
                    expectedAmount: b.amount,
                    expectedCurrency: b.currency,
                    isGift: S,
                    paymentSource: R,
                    loadId: U,
                    giftInfoOptions: F
                }));
        else if ((l()(null != A, 'Missing subscriptionPlan'), S)) {
            l()(null != B, 'Missing invoicePreview');
            let n = B.total,
                s = B.currency;
            e = await (0, o.ZZ)(E.CL, A.skuId, {
                expectedAmount: n,
                expectedCurrency: s,
                paymentSource: R,
                subscriptionPlanId: A.id,
                isGift: !0,
                loadId: U,
                giftInfoOptions: F
            });
        } else if (L && null != O && null != R && null != C)
            e = I.Uk1.has(R.type)
                ? await (0, r.G)(C, O, R, g.currency)
                : await (0, r.Mg)(
                      C,
                      {
                          paymentSource: R,
                          currency: g.currency
                      },
                      P,
                      h,
                      U
                  );
        else if (null != C) {
            let n = (0, _.al)(C, A.id, 1, new Set(v)),
                s = {
                    paymentSource: R,
                    currency: g.currency
                };
            C.status === I.O0b.PAUSED ? (s.status = I.O0b.ACTIVE) : (s.items = n), (e = await (0, r.Mg)(C, s, P, h, U));
        } else
            e = await (0, c.Ld)({
                planId: A.id,
                currency: g.currency,
                paymentSource: R,
                trialId: M,
                metadata: Z,
                referralCode: G,
                loadId: U
            });
        if (e.redirectConfirmation) {
            T(null != e.redirectURL);
            return;
        }
        n(m.A.COMPLETED), 'subscription' in e ? (s = null != e.subscription ? u.Z.createFromServer(e.subscription) : null) : 'entitlements' in e && (t = null != e.entitlements ? e.entitlements : void 0), j(s, t);
    } catch (e) {
        n(m.A.FAIL),
            p(e),
            d.default.track(I.rMx.PAYMENT_FLOW_FAILED, {
                ...x,
                payment_error_code: null == e ? void 0 : e.code,
                payment_source_id: null == R ? void 0 : R.id,
                payment_source_type: null == R ? void 0 : R.type,
                duration_ms: Date.now() - f
            });
    } finally {
        !N && t(!1);
    }
}
