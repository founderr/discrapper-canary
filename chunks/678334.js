t.d(n, {
    Z: function () {
        return y;
    }
}),
    t(47120);
var i = t(735250),
    a = t(470079),
    r = t(512722),
    s = t.n(r),
    l = t(442837),
    o = t(481060),
    c = t(355467),
    u = t(906732),
    d = t(600164),
    _ = t(160913),
    p = t(311821),
    m = t(459965),
    I = t(858987),
    f = t(975060),
    E = t(882712),
    x = t(855775),
    N = t(626135),
    S = t(669079),
    T = t(74538),
    h = t(987209),
    b = t(598),
    g = t(632580),
    P = t(45572),
    v = t(919778),
    A = t(612853),
    M = t(981631),
    C = t(38569);
function y(e) {
    let { premiumSubscription: n, setPurchaseState: t, onBack: r, onNext: y, legalTermsNodeRef: R, flashLegalTerms: O, invoiceError: L, planError: j, onPurchaseError: Z, baseAnalyticsData: D, flowStartTime: w, trialId: B, planGroup: G, analyticsLocation: F, purchaseTokenAuthState: U, openInvoiceId: k, metadata: H, backButtonEligible: W, disablePurchase: Y, isTrial: V = !1 } = e,
        { selectedPlan: K, priceOptions: z, setHasAcceptedTerms: X, setPurchaseError: q, purchaseType: J, paymentSourceId: Q, paymentSources: $, selectedSkuId: ee, skusById: en, skuPricePreviewsById: et, referralCode: ei, contextMetadata: ea, invoicePreview: er, inReverseTrial: es } = (0, b.usePaymentContext)(),
        { isGift: el, selectedGiftStyle: eo, customGiftMessage: ec, emojiConfetti: eu, soundEffect: ed, giftRecipient: e_ } = (0, h.wD)(),
        ep = (0, S.MY)(e_),
        em = {};
    (em.gift_style = eo), ep === S.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (s()(null != e_, 'Gift recipient must be set at purchase review step for these gift options.'), (em.recipient_id = e_.id), (em.custom_message = ec), (em.emoji_id = null == eu ? void 0 : eu.id), (em.emoji_name = (null == eu ? void 0 : eu.id) == null ? (null == eu ? void 0 : eu.surrogates) : void 0), (em.sound_id = null == ed ? void 0 : ed.soundId));
    let eI = null == K ? void 0 : K.id,
        ef = (0, v.sE)(B, z.paymentSourceId, eI),
        eE = (0, l.e7)([f.Z], () => f.Z.popupCallbackCalled),
        { analyticsLocations: ex } = (0, u.ZP)(),
        eN = null != Q ? $[Q] : null,
        [eS, eT] = a.useState(ef),
        [eh, eb] = a.useState(!1),
        { hasEntitlements: eg } = (0, m.H)(eI, el),
        eP = (0, T.Ap)(z.paymentSourceId),
        ev = eg || ef,
        eA = (0, _.U)(),
        eM = null,
        eC = null;
    if (J === M.GZQ.ONE_TIME) {
        var ey;
        s()(null != ee, 'SKU must be selected for one-time purchases'), (eM = null !== (ey = en[ee]) && void 0 !== ey ? ey : null), s()(null != eM, 'SKU must exist and be fetched.');
        let e = et[ee],
            n = null != Q ? Q : x.c;
        eC = null != e ? e[n] : null;
    }
    let eR = async () => {
        await (0, g.H)({
            setPurchaseState: t,
            setHasAcceptedTerms: X,
            setIsSubmitting: eT,
            setPurchaseError: q,
            hasRedirectURL: eh,
            setHasRedirectURL: eb,
            isGift: el,
            baseAnalyticsData: D,
            analyticsLocation: F,
            analyticsLocations: ex,
            flowStartTime: w,
            subscriptionPlan: K,
            planGroup: G,
            trialId: B,
            priceOptions: z,
            paymentSource: eN,
            isPrepaidPaymentPastDue: eA,
            openInvoiceId: k,
            premiumSubscription: n,
            onNext: y,
            metadata: H,
            sku: eM,
            skuPricePreview: eC,
            purchaseType: J,
            referralCode: ei,
            loadId: ea.loadId,
            giftInfoOptions: em,
            invoicePreview: er
        });
    };
    a.useEffect(() => {
        (async () => {
            if (!0 === eE)
                try {
                    if (null == f.Z.redirectedPaymentId) return;
                    await (0, c.OP)(f.Z.redirectedPaymentId), t(P.A.COMPLETED), y();
                } catch (e) {
                    t(P.A.FAIL),
                        Z(e),
                        N.default.track(M.rMx.PAYMENT_FLOW_FAILED, {
                            ...D,
                            payment_error_code: null == e ? void 0 : e.code,
                            payment_source_id: Q,
                            payment_source_type: null == eN ? void 0 : eN.type,
                            duration_ms: Date.now() - w
                        });
                } finally {
                    eT(!1), (0, c.K2)();
                }
            else U === E.I.SUCCESS && (await eR());
        })();
    }, [eE]),
        a.useEffect(() => {
            ef && !el && null == n && eR();
        }, [ef, el, n]);
    let eO = null != k || (J === M.GZQ.ONE_TIME && !el);
    return ef
        ? null
        : (0, i.jsxs)(o.ModalFooter, {
              align: d.Z.Align.CENTER,
              children: [
                  (0, i.jsx)(I.Z, {
                      legalTermsNodeRef: R,
                      invoiceError: L,
                      planError: j,
                      disablePurchase: Y,
                      flashLegalTerms: O,
                      isSubmitting: eS,
                      premiumSubscription: n,
                      isGift: el,
                      planGroup: G,
                      isPrepaid: eP,
                      isTrial: V,
                      makePurchase: eR,
                      needsPaymentSource: null == eN && !ev,
                      onNext: y,
                      inReverseTrial: es
                  }),
                  (0, i.jsx)(A.Z, {}),
                  W && !eO
                      ? (0, i.jsx)('div', {
                            className: C.back,
                            children: (0, i.jsx)(p.Z, { onClick: r })
                        })
                      : null
              ]
          });
}
