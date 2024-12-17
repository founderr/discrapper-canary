n.d(t, {
    x: function () {
        return H;
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
    _ = n(717401),
    h = n(572517),
    f = n(104494),
    j = n(639119),
    m = n(642530),
    L = n(381507),
    E = n(314404),
    S = n(594174),
    g = n(509545),
    I = n(669079),
    M = n(63063),
    v = n(74538),
    y = n(987209),
    T = n(563132),
    N = n(409813),
    P = n(51499),
    Z = n(456251),
    A = n(614277),
    U = n(809144),
    O = n(698708),
    R = n(844068),
    k = n(981631),
    b = n(474936),
    w = n(388032),
    B = n(242582);
function H(e) {
    var t, n, s;
    let { handleStepChange: H, initialPlanId: F, subscriptionTier: G, trialId: D, referralTrialOfferId: W, handleClose: Y } = e,
        { activeSubscription: K, hasFetchedSubscriptions: V, paymentSourceId: X, paymentSources: Q, selectedSkuId: z, selectedPlan: q, step: J, defaultPlanId: $, priceOptions: ee, isPremium: et } = (0, T.usePaymentContext)(),
        { isGift: en, giftRecipient: ei, giftMessage: el, claimableRewards: es } = (0, y.wD)(),
        er = (0, _.a5)(q),
        ea = en && er && null != es && es.length > 0,
        eo = null != X ? Q[X] : null,
        { newPlans: eC } = u.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }),
        ed = (0, a.e7)([S.default], () => S.default.getCurrentUser()),
        eu = !en && null != z && z === b.Si.TIER_2 && null != ed && ed.hasHadPremium() && V && null == K && (0, u.aQ)(eo),
        ec = (0, j.N)(W),
        ep = !en && null != ec && null != z && b.nG[ec.trial_id].skus.includes(z),
        ex = (0, f.Ng)(),
        e_ = null == ex ? void 0 : null === (t = ex.discount) || void 0 === t ? void 0 : t.plan_ids.some((e) => b.GP[e].skuId === z),
        eh = !en && null != ex && null != z && e_,
        ef = null !== (n = ep || eh) && void 0 !== n && n,
        { defaultToMonthlyPlan: ej } = x.k.useExperiment({ location: 'd17fd6_4' }, { autoTrackExposure: !1 }),
        em = l.useMemo(
            () =>
                (0, v.V7)({
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
        eL = eh && em.includes(b.Xh.PREMIUM_MONTH_TIER_2) ? b.Xh.PREMIUM_MONTH_TIER_2 : em[0],
        eE = (0, a.e7)([g.Z], () => g.Z.get(eL)),
        eS = [
            {
                planId: null == eE ? void 0 : eE.id,
                quantity: 1
            }
        ],
        [eg, eI] = l.useState(ef),
        [eM, ev] = (0, c.ED)({
            items: eS,
            renewal: !1,
            preventFetch: !ef,
            applyEntitlements: !0,
            trialId: D,
            paymentSourceId: ee.paymentSourceId,
            currency: ee.currency
        });
    l.useEffect(() => {
        ef && eI((null == eM ? void 0 : eM.subscriptionPeriodEnd) == null);
    }, [eM, ef]),
        (0, C.Z)(
            'Payment Modal Plan Select Step',
            eg,
            5,
            {
                proratedInvoicePreview: eM,
                proratedInvoiceError: ev,
                isEligibleForOffer: ef
            },
            { tags: { app_context: 'billing' } }
        );
    let ey = null !== (s = null == ev ? void 0 : ev.message) && void 0 !== s ? s : w.intl.string(w.t.R0RpRU),
        eT = ef && null == ev,
        eN = ef && null != ev,
        eP = eT && null == K && !!ef && (null == eM ? void 0 : eM.subscriptionPeriodEnd) == null,
        { enabled: eZ } = p._.useExperiment({ location: 'PremiumPaymentPlanSelectStep' }, { autoTrackExposure: !1 }),
        eA = !en && (null == eE ? void 0 : eE.skuId) === b.Si.TIER_2 && (null == ec ? void 0 : ec.referrer_id) != null && eZ,
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
                          eT && (0, i.jsx)('hr', { className: B.planSelectSeparatorUpper }),
                          eU,
                          (0, i.jsx)(R.Z, {}),
                          (0, i.jsx)(O.Z, {}),
                          eN
                              ? (0, i.jsx)(o.FormErrorBlock, { children: ey })
                              : (0, i.jsx)(E.O, {
                                    planOptions: em,
                                    eligibleForMultiMonthPlans: eu,
                                    referralTrialOfferId: W,
                                    selectedPlanId: null == q ? void 0 : q.id,
                                    subscriptionPeriodEnd: null == eM ? void 0 : eM.subscriptionPeriodEnd,
                                    discountInvoiceItems: eh ? (null == eM ? void 0 : eM.invoiceItems) : void 0,
                                    handleClose: Y
                                }),
                          eT &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('hr', { className: B.planSelectSeparatorLower }),
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-xs/normal',
                                          children: w.intl.format(w.t.BHtnqK, { link: M.Z.getArticleURL(k.BhN.PREMIUM_DETAILS_CANCEL_SUB) })
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, i.jsxs)(A.O3, {
                      children: [
                          ea && (0, i.jsx)(h.c, {}),
                          (0, i.jsx)(o.ModalFooter, {
                              justify: d.Z.Justify.BETWEEN,
                              align: d.Z.Align.CENTER,
                              children: (0, i.jsx)(E.y, {
                                  onStepChange: H,
                                  onBackClick: () => H(N.h8.SKU_SELECT),
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
