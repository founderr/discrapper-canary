n.d(t, {
    x: function () {
        return B;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    s = n(512722),
    r = n.n(s),
    a = n(399606),
    o = n(481060),
    C = n(975608),
    d = n(600164),
    u = n(711459),
    c = n(374649),
    p = n(650032),
    x = n(439017),
    h = n(717401),
    f = n(572517),
    _ = n(104494),
    j = n(639119),
    m = n(642530),
    L = n(381507),
    g = n(314404),
    E = n(594174),
    S = n(509545),
    I = n(669079),
    M = n(63063),
    y = n(74538),
    v = n(987209),
    T = n(563132),
    N = n(409813),
    P = n(51499),
    Z = n(456251),
    A = n(614277),
    U = n(809144),
    k = n(698708),
    O = n(844068),
    R = n(981631),
    b = n(474936),
    w = n(388032),
    H = n(242582);
function B(e) {
    var t, n, s;
    let { handleStepChange: B, initialPlanId: F, subscriptionTier: G, trialId: D, referralTrialOfferId: W, handleClose: Y } = e,
        { activeSubscription: K, hasFetchedSubscriptions: V, paymentSourceId: X, paymentSources: Q, selectedSkuId: z, selectedPlan: q, step: J, defaultPlanId: $, priceOptions: ee, isPremium: et } = (0, T.usePaymentContext)(),
        { isGift: en, giftRecipient: ei, giftMessage: el, claimableRewards: es } = (0, v.wD)(),
        er = (0, h.a5)(q),
        ea = en && er && null != es && es.length > 0,
        eo = null != X ? Q[X] : null,
        { newPlans: eC } = u.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }),
        ed = (0, a.e7)([E.default], () => E.default.getCurrentUser()),
        eu = !en && null != z && z === b.Si.TIER_2 && null != ed && ed.hasHadPremium() && V && null == K && (0, u.aQ)(eo),
        ec = (0, j.N)(W),
        ep = !en && null != ec && null != z && b.nG[ec.trial_id].skus.includes(z),
        ex = (0, _.Ng)(),
        eh = null == ex ? void 0 : null === (t = ex.discount) || void 0 === t ? void 0 : t.plan_ids.some((e) => b.GP[e].skuId === z),
        ef = !en && null != ex && null != z && eh,
        e_ = null !== (n = ep || ef) && void 0 !== n && n,
        { defaultToMonthlyPlan: ej } = x.k.useExperiment({ location: 'd17fd6_4' }, { autoTrackExposure: !1 }),
        em = l.useMemo(
            () =>
                (0, y.V7)({
                    skuId: z,
                    isPremium: et,
                    multiMonthPlans: eu ? eC : [],
                    currentSubscription: K,
                    isGift: en,
                    isEligibleForTrial: ep,
                    defaultPlanId: $,
                    defaultToMonthlyPlan: ej
                }),
            [z, et, eC, K, eu, en, ep, $, ej]
        ),
        eL = ef && em.includes(b.Xh.PREMIUM_MONTH_TIER_2) ? b.Xh.PREMIUM_MONTH_TIER_2 : em[0],
        eg = (0, a.e7)([S.Z], () => S.Z.get(eL)),
        eE = [
            {
                planId: null == eg ? void 0 : eg.id,
                quantity: 1
            }
        ],
        [eS, eI] = l.useState(e_),
        [eM, ey] = (0, c.ED)({
            items: eE,
            renewal: !1,
            preventFetch: !e_,
            applyEntitlements: !0,
            trialId: D,
            paymentSourceId: ee.paymentSourceId,
            currency: ee.currency
        });
    l.useEffect(() => {
        e_ && eI((null == eM ? void 0 : eM.subscriptionPeriodEnd) == null);
    }, [eM, e_]),
        (0, C.Z)(
            'Payment Modal Plan Select Step',
            eS,
            5,
            {
                proratedInvoicePreview: eM,
                proratedInvoiceError: ey,
                isEligibleForOffer: e_
            },
            { tags: { app_context: 'billing' } }
        );
    let ev = null !== (s = null == ey ? void 0 : ey.message) && void 0 !== s ? s : w.intl.string(w.t.R0RpRU),
        eT = e_ && null == ey,
        eN = e_ && null != ey,
        eP = eT && null == K && !!e_ && (null == eM ? void 0 : eM.subscriptionPeriodEnd) == null,
        { enabled: eZ } = p._.useExperiment({ location: 'PremiumPaymentPlanSelectStep' }, { autoTrackExposure: !1 }),
        eA = !en && (null == eg ? void 0 : eg.skuId) === b.Si.TIER_2 && (null == ec ? void 0 : ec.referrer_id) != null && eZ,
        eU = null;
    return ((eU = eA ? (0, i.jsx)(L.Z, {}) : (0, i.jsx)(m.Z, {})), eP)
        ? (0, i.jsx)(Z.Z, {})
        : (r()(null != J, 'Step should be set'),
          r()(em.length > 0, 'Premium plan options should be set'),
          (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(U.P, { giftMessage: el }),
                  !(en && (0, I.pO)(ei)) && (0, i.jsx)(P.Z, { isEligibleForTrial: ep }),
                  (0, i.jsxs)(A.C3, {
                      children: [
                          eT && (0, i.jsx)('hr', { className: H.planSelectSeparatorUpper }),
                          eU,
                          (0, i.jsx)(O.Z, {}),
                          (0, i.jsx)(k.Z, {}),
                          eN
                              ? (0, i.jsx)(o.FormErrorBlock, { children: ev })
                              : (0, i.jsx)(g.O, {
                                    planOptions: em,
                                    eligibleForMultiMonthPlans: eu,
                                    referralTrialOfferId: W,
                                    selectedPlanId: null == q ? void 0 : q.id,
                                    subscriptionPeriodEnd: null == eM ? void 0 : eM.subscriptionPeriodEnd,
                                    discountInvoiceItems: ef ? (null == eM ? void 0 : eM.invoiceItems) : void 0,
                                    handleClose: Y
                                }),
                          eT &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('hr', { className: H.planSelectSeparatorLower }),
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-xs/normal',
                                          children: w.intl.format(w.t.BHtnqK, { link: M.Z.getArticleURL(R.BhN.PREMIUM_DETAILS_CANCEL_SUB) })
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, i.jsxs)(A.O3, {
                      children: [
                          ea && (0, i.jsx)(f.c, {}),
                          (0, i.jsx)(o.ModalFooter, {
                              justify: d.Z.Justify.BETWEEN,
                              align: d.Z.Align.CENTER,
                              children: (0, i.jsx)(g.y, {
                                  onStepChange: B,
                                  onBackClick: () => B(N.h8.SKU_SELECT),
                                  showBackButton: null == F && null == G,
                                  planOptions: em,
                                  shouldRenderUpdatedPaymentModal: eT,
                                  isTrial: ep
                              })
                          })
                      ]
                  })
              ]
          }));
}
