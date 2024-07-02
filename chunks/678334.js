s.d(n, {
    Z: function () {
        return R;
    }
}), s(47120);
var l = s(735250), t = s(470079), i = s(512722), r = s.n(i), a = s(442837), c = s(481060), o = s(355467), u = s(906732), d = s(160913), _ = s(311821), m = s(459965), E = s(858987), I = s(975060), p = s(882712), N = s(855775), T = s(285952), S = s(626135), x = s(669079), h = s(74538), P = s(987209), f = s(598), A = s(632580), v = s(45572), M = s(919778), g = s(612853), C = s(981631), O = s(248317);
function R(e) {
    let {
            premiumSubscription: n,
            setPurchaseState: s,
            onBack: i,
            onNext: R,
            legalTermsNodeRef: L,
            flashLegalTerms: j,
            invoiceError: y,
            planError: Z,
            onPurchaseError: b,
            baseAnalyticsData: D,
            flowStartTime: G,
            trialId: U,
            planGroup: F,
            analyticsLocation: B,
            purchaseTokenAuthState: w,
            openInvoiceId: H,
            metadata: k,
            backButtonEligible: W,
            disablePurchase: Y,
            isTrial: K = !1
        } = e, {
            selectedPlan: V,
            priceOptions: z,
            setHasAcceptedTerms: X,
            setPurchaseError: J,
            purchaseType: q,
            paymentSourceId: Q,
            paymentSources: $,
            selectedSkuId: ee,
            skusById: en,
            skuPricePreviewsById: es,
            referralCode: el,
            contextMetadata: et,
            invoicePreview: ei
        } = (0, f.usePaymentContext)(), {
            isGift: er,
            selectedGiftStyle: ea,
            customGiftMessage: ec,
            emojiConfetti: eo,
            soundEffect: eu,
            giftRecipient: ed
        } = (0, P.wD)(), e_ = (0, x.MY)(ed), em = {};
    em.gift_style = ea, e_ === x.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (r()(null != ed, 'Gift recipient must be set at purchase review step for these gift options.'), em.recipient_id = ed.id, em.custom_message = ec, em.emoji_id = null == eo ? void 0 : eo.id, em.emoji_name = (null == eo ? void 0 : eo.id) == null ? null == eo ? void 0 : eo.surrogates : void 0, em.sound_id = null == eu ? void 0 : eu.soundId);
    let eE = null == V ? void 0 : V.id, eI = (0, M.sE)(U, z.paymentSourceId, eE), ep = (0, a.e7)([I.Z], () => I.Z.popupCallbackCalled), {analyticsLocations: eN} = (0, u.ZP)(), eT = null != Q ? $[Q] : null, [eS, ex] = t.useState(eI), [eh, eP] = t.useState(!1), {hasEntitlements: ef} = (0, m.H)(eE, er), eA = (0, h.Ap)(z.paymentSourceId), ev = ef || eI, eM = (0, d.U)(), eg = null, eC = null;
    if (q === C.GZQ.ONE_TIME) {
        var eO;
        r()(null != ee, 'SKU must be selected for one-time purchases'), eg = null !== (eO = en[ee]) && void 0 !== eO ? eO : null, r()(null != eg, 'SKU must exist and be fetched.');
        let e = es[ee], n = null != Q ? Q : N.c;
        eC = null != e ? e[n] : null;
    }
    let eR = async () => {
        await (0, A.H)({
            setPurchaseState: s,
            setHasAcceptedTerms: X,
            setIsSubmitting: ex,
            setPurchaseError: J,
            hasRedirectURL: eh,
            setHasRedirectURL: eP,
            isGift: er,
            baseAnalyticsData: D,
            analyticsLocation: B,
            analyticsLocations: eN,
            flowStartTime: G,
            subscriptionPlan: V,
            planGroup: F,
            trialId: U,
            priceOptions: z,
            paymentSource: eT,
            isPrepaidPaymentPastDue: eM,
            openInvoiceId: H,
            premiumSubscription: n,
            onNext: R,
            metadata: k,
            sku: eg,
            skuPricePreview: eC,
            purchaseType: q,
            referralCode: el,
            loadId: et.loadId,
            giftInfoOptions: em,
            invoicePreview: ei
        });
    };
    t.useEffect(() => {
        (async () => {
            if (!0 === ep)
                try {
                    if (null == I.Z.redirectedPaymentId)
                        return;
                    await (0, o.OP)(I.Z.redirectedPaymentId), s(v.A.COMPLETED), R();
                } catch (e) {
                    s(v.A.FAIL), b(e), S.default.track(C.rMx.PAYMENT_FLOW_FAILED, {
                        ...D,
                        payment_error_code: null == e ? void 0 : e.code,
                        payment_source_id: Q,
                        payment_source_type: null == eT ? void 0 : eT.type,
                        duration_ms: Date.now() - G
                    });
                } finally {
                    ex(!1), (0, o.K2)();
                }
            else
                w === p.I.SUCCESS && await eR();
        })();
    }, [ep]), t.useEffect(() => {
        eI && !er && null == n && eR();
    }, [
        eI,
        er,
        n
    ]);
    let eL = null != H || q === C.GZQ.ONE_TIME && !er;
    return eI ? null : (0, l.jsxs)(c.ModalFooter, {
        align: T.Z.Align.CENTER,
        children: [
            (0, l.jsx)(E.Z, {
                legalTermsNodeRef: L,
                invoiceError: y,
                planError: Z,
                disablePurchase: Y,
                flashLegalTerms: j,
                isSubmitting: eS,
                premiumSubscription: n,
                isGift: er,
                planGroup: F,
                isPrepaid: eA,
                isTrial: K,
                makePurchase: eR,
                needsPaymentSource: null == eT && !ev
            }),
            (0, l.jsx)(g.Z, {}),
            W && !eL ? (0, l.jsx)('div', {
                className: O.back,
                children: (0, l.jsx)(_.Z, { onClick: i })
            }) : null
        ]
    });
}
