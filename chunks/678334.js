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
    m = t(717401),
    p = t(160913),
    x = t(311821),
    h = t(459965),
    f = t(858987),
    v = t(975060),
    E = t(882712),
    g = t(855775),
    S = t(626135),
    j = t(669079),
    y = t(74538),
    I = t(987209),
    P = t(563132),
    T = t(632580),
    N = t(45572),
    b = t(919778),
    C = t(612853),
    _ = t(981631),
    O = t(374172);
function A(e) {
    let { premiumSubscription: n, setPurchaseState: t, onBack: r, onNext: A, legalTermsNodeRef: Z, flashLegalTerms: R, invoiceError: w, planError: M, onPurchaseError: L, baseAnalyticsData: k, flowStartTime: F, trialId: D, planGroup: U, analyticsLocation: B, purchaseTokenAuthState: G, openInvoiceId: H, metadata: W, backButtonEligible: V, disablePurchase: K, isTrial: z = !1 } = e,
        { selectedPlan: Y, priceOptions: X, setHasAcceptedTerms: q, setPurchaseError: J, purchaseType: Q, paymentSourceId: $, paymentSources: ee, selectedSkuId: en, skusById: et, skuPricePreviewsById: ei, referralCode: el, contextMetadata: er, invoicePreview: es, inReverseTrial: ea } = (0, P.usePaymentContext)(),
        { isGift: ec, selectedGiftStyle: eo, customGiftMessage: eu, emojiConfetti: ed, soundEffect: em, giftRecipient: ep, selectedGiftingPromotionReward: ex } = (0, I.wD)(),
        eh = (0, m.a5)(Y),
        ef = (0, j.MY)(ep),
        ev = {};
    (ev.gift_style = eo), (ev.reward_sku_ids = eh && (null == ex ? void 0 : ex.skuId) != null ? [null == ex ? void 0 : ex.skuId] : []), ef === j.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (s()(null != ep, 'Gift recipient must be set at purchase review step for these gift options.'), (ev.recipient_id = ep.id), (ev.custom_message = eu), (ev.emoji_id = null == ed ? void 0 : ed.id), (ev.emoji_name = (null == ed ? void 0 : ed.id) == null ? (null == ed ? void 0 : ed.surrogates) : void 0), (ev.sound_id = null == em ? void 0 : em.soundId));
    let eE = null == Y ? void 0 : Y.id,
        eg = (0, b.sE)(D, X.paymentSourceId, eE),
        eS = (0, a.e7)([v.Z], () => v.Z.popupCallbackCalled),
        { analyticsLocations: ej } = (0, u.ZP)(),
        ey = null != $ ? ee[$] : null,
        [eI, eP] = l.useState(eg),
        [eT, eN] = l.useState(!1),
        { hasEntitlements: eb } = (0, h.H)(eE, ec),
        eC = (0, y.Ap)(X.paymentSourceId),
        e_ = eb || eg,
        eO = (0, p.U)(),
        eA = null,
        eZ = null;
    if (Q === _.GZQ.ONE_TIME) {
        var eR;
        s()(null != en, 'SKU must be selected for one-time purchases'), (eA = null !== (eR = et[en]) && void 0 !== eR ? eR : null), s()(null != eA, 'SKU must exist and be fetched.');
        let e = ei[en],
            n = null != $ ? $ : g.c;
        eZ = null != e ? e[n] : null;
    }
    let ew = async () => {
        await (0, T.H)({
            setPurchaseState: t,
            setHasAcceptedTerms: q,
            setIsSubmitting: eP,
            setPurchaseError: J,
            hasRedirectURL: eT,
            setHasRedirectURL: eN,
            isGift: ec,
            baseAnalyticsData: k,
            analyticsLocation: B,
            analyticsLocations: ej,
            flowStartTime: F,
            subscriptionPlan: Y,
            planGroup: U,
            trialId: D,
            priceOptions: X,
            paymentSource: ey,
            isPrepaidPaymentPastDue: eO,
            openInvoiceId: H,
            premiumSubscription: n,
            onNext: A,
            metadata: W,
            sku: eA,
            skuPricePreview: eZ,
            purchaseType: Q,
            referralCode: el,
            loadId: er.loadId,
            giftInfoOptions: ev,
            invoicePreview: es
        });
    };
    l.useEffect(() => {
        (async () => {
            if (!0 === eS)
                try {
                    if (null == v.Z.redirectedPaymentId) return;
                    await (0, o.OP)(v.Z.redirectedPaymentId), t(N.A.COMPLETED), A();
                } catch (e) {
                    t(N.A.FAIL),
                        L(e),
                        S.default.track(_.rMx.PAYMENT_FLOW_FAILED, {
                            ...k,
                            payment_error_code: null == e ? void 0 : e.code,
                            payment_source_id: $,
                            payment_source_type: null == ey ? void 0 : ey.type,
                            duration_ms: Date.now() - F
                        });
                } finally {
                    eP(!1), (0, o.K2)();
                }
            else G === E.I.SUCCESS && (await ew());
        })();
    }, [eS]),
        l.useEffect(() => {
            eg && !ec && null == n && ew();
        }, [eg, ec, n]);
    let eM = null != H || (Q === _.GZQ.ONE_TIME && !ec);
    return eg
        ? null
        : (0, i.jsxs)(c.ModalFooter, {
              align: d.Z.Align.CENTER,
              children: [
                  (0, i.jsx)(f.Z, {
                      legalTermsNodeRef: Z,
                      invoiceError: w,
                      planError: M,
                      disablePurchase: K,
                      flashLegalTerms: R,
                      isSubmitting: eI,
                      premiumSubscription: n,
                      isGift: ec,
                      planGroup: U,
                      isPrepaid: eC,
                      isTrial: z,
                      makePurchase: ew,
                      needsPaymentSource: null == ey && !e_,
                      onNext: A,
                      inReverseTrial: ea
                  }),
                  (0, i.jsx)(C.Z, {}),
                  V && !eM
                      ? (0, i.jsx)('div', {
                            className: O.back,
                            children: (0, i.jsx)(x.Z, { onClick: r })
                        })
                      : null
              ]
          });
}
