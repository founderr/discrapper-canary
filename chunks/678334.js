s.d(n, {
    Z: function () {
        return O;
    }
}),
    s(47120);
var t = s(735250),
    l = s(470079),
    i = s(512722),
    r = s.n(i),
    a = s(442837),
    c = s(481060),
    o = s(355467),
    u = s(906732),
    d = s(600164),
    _ = s(160913),
    m = s(311821),
    I = s(459965),
    E = s(858987),
    p = s(975060),
    N = s(882712),
    T = s(855775),
    S = s(626135),
    x = s(669079),
    h = s(74538),
    P = s(987209),
    f = s(598),
    A = s(632580),
    v = s(45572),
    M = s(919778),
    g = s(612853),
    R = s(981631),
    L = s(38569);
function O(e) {
    let { premiumSubscription: n, setPurchaseState: s, onBack: i, onNext: O, legalTermsNodeRef: C, flashLegalTerms: j, invoiceError: Z, planError: y, onPurchaseError: b, baseAnalyticsData: D, flowStartTime: G, trialId: U, planGroup: F, analyticsLocation: B, purchaseTokenAuthState: w, openInvoiceId: H, metadata: k, backButtonEligible: W, disablePurchase: Y, isTrial: V = !1 } = e,
        { selectedPlan: K, priceOptions: z, setHasAcceptedTerms: X, setPurchaseError: J, purchaseType: q, paymentSourceId: Q, paymentSources: $, selectedSkuId: ee, skusById: en, skuPricePreviewsById: es, referralCode: et, contextMetadata: el, invoicePreview: ei, inReverseTrial: er } = (0, f.usePaymentContext)(),
        { isGift: ea, selectedGiftStyle: ec, customGiftMessage: eo, emojiConfetti: eu, soundEffect: ed, giftRecipient: e_ } = (0, P.wD)(),
        em = (0, x.MY)(e_),
        eI = {};
    (eI.gift_style = ec), em === x.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (r()(null != e_, 'Gift recipient must be set at purchase review step for these gift options.'), (eI.recipient_id = e_.id), (eI.custom_message = eo), (eI.emoji_id = null == eu ? void 0 : eu.id), (eI.emoji_name = (null == eu ? void 0 : eu.id) == null ? (null == eu ? void 0 : eu.surrogates) : void 0), (eI.sound_id = null == ed ? void 0 : ed.soundId));
    let eE = null == K ? void 0 : K.id,
        ep = (0, M.sE)(U, z.paymentSourceId, eE),
        eN = (0, a.e7)([p.Z], () => p.Z.popupCallbackCalled),
        { analyticsLocations: eT } = (0, u.ZP)(),
        eS = null != Q ? $[Q] : null,
        [ex, eh] = l.useState(ep),
        [eP, ef] = l.useState(!1),
        { hasEntitlements: eA } = (0, I.H)(eE, ea),
        ev = (0, h.Ap)(z.paymentSourceId),
        eM = eA || ep,
        eg = (0, _.U)(),
        eR = null,
        eL = null;
    if (q === R.GZQ.ONE_TIME) {
        var eO;
        r()(null != ee, 'SKU must be selected for one-time purchases'), (eR = null !== (eO = en[ee]) && void 0 !== eO ? eO : null), r()(null != eR, 'SKU must exist and be fetched.');
        let e = es[ee],
            n = null != Q ? Q : T.c;
        eL = null != e ? e[n] : null;
    }
    let eC = async () => {
        await (0, A.H)({
            setPurchaseState: s,
            setHasAcceptedTerms: X,
            setIsSubmitting: eh,
            setPurchaseError: J,
            hasRedirectURL: eP,
            setHasRedirectURL: ef,
            isGift: ea,
            baseAnalyticsData: D,
            analyticsLocation: B,
            analyticsLocations: eT,
            flowStartTime: G,
            subscriptionPlan: K,
            planGroup: F,
            trialId: U,
            priceOptions: z,
            paymentSource: eS,
            isPrepaidPaymentPastDue: eg,
            openInvoiceId: H,
            premiumSubscription: n,
            onNext: O,
            metadata: k,
            sku: eR,
            skuPricePreview: eL,
            purchaseType: q,
            referralCode: et,
            loadId: el.loadId,
            giftInfoOptions: eI,
            invoicePreview: ei
        });
    };
    l.useEffect(() => {
        (async () => {
            if (!0 === eN)
                try {
                    if (null == p.Z.redirectedPaymentId) return;
                    await (0, o.OP)(p.Z.redirectedPaymentId), s(v.A.COMPLETED), O();
                } catch (e) {
                    s(v.A.FAIL),
                        b(e),
                        S.default.track(R.rMx.PAYMENT_FLOW_FAILED, {
                            ...D,
                            payment_error_code: null == e ? void 0 : e.code,
                            payment_source_id: Q,
                            payment_source_type: null == eS ? void 0 : eS.type,
                            duration_ms: Date.now() - G
                        });
                } finally {
                    eh(!1), (0, o.K2)();
                }
            else w === N.I.SUCCESS && (await eC());
        })();
    }, [eN]),
        l.useEffect(() => {
            ep && !ea && null == n && eC();
        }, [ep, ea, n]);
    let ej = null != H || (q === R.GZQ.ONE_TIME && !ea);
    return ep
        ? null
        : (0, t.jsxs)(c.ModalFooter, {
              align: d.Z.Align.CENTER,
              children: [
                  (0, t.jsx)(E.Z, {
                      legalTermsNodeRef: C,
                      invoiceError: Z,
                      planError: y,
                      disablePurchase: Y,
                      flashLegalTerms: j,
                      isSubmitting: ex,
                      premiumSubscription: n,
                      isGift: ea,
                      planGroup: F,
                      isPrepaid: ev,
                      isTrial: V,
                      makePurchase: eC,
                      needsPaymentSource: null == eS && !eM,
                      onNext: O,
                      inReverseTrial: er
                  }),
                  (0, t.jsx)(g.Z, {}),
                  W && !ej
                      ? (0, t.jsx)('div', {
                            className: L.back,
                            children: (0, t.jsx)(m.Z, { onClick: i })
                        })
                      : null
              ]
          });
}
