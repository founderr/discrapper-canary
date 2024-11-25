t.d(n, {
    Z: function () {
        return A;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    r = t(512722),
    s = t.n(r),
    a = t(442837),
    c = t(481060),
    o = t(355467),
    u = t(906732),
    d = t(600164),
    m = t(160913),
    p = t(311821),
    x = t(459965),
    h = t(858987),
    f = t(975060),
    v = t(882712),
    g = t(855775),
    S = t(626135),
    j = t(669079),
    E = t(74538),
    y = t(987209),
    I = t(563132),
    P = t(632580),
    T = t(45572),
    N = t(919778),
    b = t(612853),
    _ = t(981631),
    C = t(374172);
function A(e) {
    let { premiumSubscription: n, setPurchaseState: t, onBack: r, onNext: A, legalTermsNodeRef: O, flashLegalTerms: Z, invoiceError: R, planError: M, onPurchaseError: w, baseAnalyticsData: D, flowStartTime: F, trialId: L, planGroup: k, analyticsLocation: G, purchaseTokenAuthState: U, openInvoiceId: B, metadata: H, backButtonEligible: W, disablePurchase: V, isTrial: Y = !1 } = e,
        { selectedPlan: z, priceOptions: K, setHasAcceptedTerms: X, setPurchaseError: q, purchaseType: J, paymentSourceId: Q, paymentSources: $, selectedSkuId: ee, skusById: en, skuPricePreviewsById: et, referralCode: ei, contextMetadata: el, invoicePreview: er, inReverseTrial: es } = (0, I.usePaymentContext)(),
        { isGift: ea, selectedGiftStyle: ec, customGiftMessage: eo, emojiConfetti: eu, soundEffect: ed, giftRecipient: em } = (0, y.wD)(),
        ep = (0, j.MY)(em),
        ex = {};
    (ex.gift_style = ec), ep === j.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (s()(null != em, 'Gift recipient must be set at purchase review step for these gift options.'), (ex.recipient_id = em.id), (ex.custom_message = eo), (ex.emoji_id = null == eu ? void 0 : eu.id), (ex.emoji_name = (null == eu ? void 0 : eu.id) == null ? (null == eu ? void 0 : eu.surrogates) : void 0), (ex.sound_id = null == ed ? void 0 : ed.soundId));
    let eh = null == z ? void 0 : z.id,
        ef = (0, N.sE)(L, K.paymentSourceId, eh),
        ev = (0, a.e7)([f.Z], () => f.Z.popupCallbackCalled),
        { analyticsLocations: eg } = (0, u.ZP)(),
        eS = null != Q ? $[Q] : null,
        [ej, eE] = l.useState(ef),
        [ey, eI] = l.useState(!1),
        { hasEntitlements: eP } = (0, x.H)(eh, ea),
        eT = (0, E.Ap)(K.paymentSourceId),
        eN = eP || ef,
        eb = (0, m.U)(),
        e_ = null,
        eC = null;
    if (J === _.GZQ.ONE_TIME) {
        var eA;
        s()(null != ee, 'SKU must be selected for one-time purchases'), (e_ = null !== (eA = en[ee]) && void 0 !== eA ? eA : null), s()(null != e_, 'SKU must exist and be fetched.');
        let e = et[ee],
            n = null != Q ? Q : g.c;
        eC = null != e ? e[n] : null;
    }
    let eO = async () => {
        await (0, P.H)({
            setPurchaseState: t,
            setHasAcceptedTerms: X,
            setIsSubmitting: eE,
            setPurchaseError: q,
            hasRedirectURL: ey,
            setHasRedirectURL: eI,
            isGift: ea,
            baseAnalyticsData: D,
            analyticsLocation: G,
            analyticsLocations: eg,
            flowStartTime: F,
            subscriptionPlan: z,
            planGroup: k,
            trialId: L,
            priceOptions: K,
            paymentSource: eS,
            isPrepaidPaymentPastDue: eb,
            openInvoiceId: B,
            premiumSubscription: n,
            onNext: A,
            metadata: H,
            sku: e_,
            skuPricePreview: eC,
            purchaseType: J,
            referralCode: ei,
            loadId: el.loadId,
            giftInfoOptions: ex,
            invoicePreview: er
        });
    };
    l.useEffect(() => {
        (async () => {
            if (!0 === ev)
                try {
                    if (null == f.Z.redirectedPaymentId) return;
                    await (0, o.OP)(f.Z.redirectedPaymentId), t(T.A.COMPLETED), A();
                } catch (e) {
                    t(T.A.FAIL),
                        w(e),
                        S.default.track(_.rMx.PAYMENT_FLOW_FAILED, {
                            ...D,
                            payment_error_code: null == e ? void 0 : e.code,
                            payment_source_id: Q,
                            payment_source_type: null == eS ? void 0 : eS.type,
                            duration_ms: Date.now() - F
                        });
                } finally {
                    eE(!1), (0, o.K2)();
                }
            else U === v.I.SUCCESS && (await eO());
        })();
    }, [ev]),
        l.useEffect(() => {
            ef && !ea && null == n && eO();
        }, [ef, ea, n]);
    let eZ = null != B || (J === _.GZQ.ONE_TIME && !ea);
    return ef
        ? null
        : (0, i.jsxs)(c.ModalFooter, {
              align: d.Z.Align.CENTER,
              children: [
                  (0, i.jsx)(h.Z, {
                      legalTermsNodeRef: O,
                      invoiceError: R,
                      planError: M,
                      disablePurchase: V,
                      flashLegalTerms: Z,
                      isSubmitting: ej,
                      premiumSubscription: n,
                      isGift: ea,
                      planGroup: k,
                      isPrepaid: eT,
                      isTrial: Y,
                      makePurchase: eO,
                      needsPaymentSource: null == eS && !eN,
                      onNext: A,
                      inReverseTrial: es
                  }),
                  (0, i.jsx)(b.Z, {}),
                  W && !eZ
                      ? (0, i.jsx)('div', {
                            className: C.back,
                            children: (0, i.jsx)(p.Z, { onClick: r })
                        })
                      : null
              ]
          });
}
