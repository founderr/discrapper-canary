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
    h = n(717401),
    f = n(572517),
    _ = n(104494),
    j = n(639119),
    L = n(642530),
    m = n(381507),
    g = n(314404),
    E = n(594174),
    S = n(509545),
    y = n(669079),
    M = n(63063),
    Z = n(74538),
    I = n(987209),
    v = n(563132),
    P = n(409813),
    T = n(51499),
    N = n(456251),
    A = n(614277),
    U = n(809144),
    b = n(698708),
    k = n(981631),
    R = n(474936),
    O = n(388032),
    w = n(242582);
function H(e) {
    var t, n, s;
    let { handleStepChange: H, initialPlanId: B, subscriptionTier: F, trialId: G, referralTrialOfferId: W, handleClose: D } = e,
        { activeSubscription: Y, hasFetchedSubscriptions: K, paymentSourceId: V, paymentSources: X, selectedSkuId: Q, selectedPlan: z, step: q, defaultPlanId: J, priceOptions: $, isPremium: ee } = (0, v.usePaymentContext)(),
        { isGift: et, giftRecipient: en, giftMessage: ei, claimableRewards: el } = (0, I.wD)(),
        es = (0, h.a5)(z),
        er = et && es && null != el && el.length > 0,
        ea = null != V ? X[V] : null,
        { newPlans: eo } = u.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }),
        eC = (0, a.e7)([E.default], () => E.default.getCurrentUser()),
        ed = !et && null != Q && Q === R.Si.TIER_2 && null != eC && eC.hasHadPremium() && K && null == Y && (0, u.aQ)(ea),
        eu = (0, j.N)(W),
        ec = !et && null != eu && null != Q && R.nG[eu.trial_id].skus.includes(Q),
        ep = (0, _.Ng)(),
        ex = null == ep ? void 0 : null === (t = ep.discount) || void 0 === t ? void 0 : t.plan_ids.some((e) => R.GP[e].skuId === Q),
        eh = !et && null != ep && null != Q && ex,
        ef = null !== (n = ec || eh) && void 0 !== n && n,
        { defaultToMonthlyPlan: e_ } = x.k.useExperiment({ location: 'd17fd6_4' }, { autoTrackExposure: !1 }),
        ej = l.useMemo(
            () =>
                (0, Z.V7)({
                    skuId: Q,
                    isPremium: ee,
                    multiMonthPlans: ed ? eo : [],
                    currentSubscription: Y,
                    isGift: et,
                    isEligibleForTrial: ec,
                    defaultPlanId: J,
                    defaultToMonthlyPlan: e_
                }),
            [Q, ee, eo, Y, ed, et, ec, J, e_]
        ),
        eL = eh && ej.includes(R.Xh.PREMIUM_MONTH_TIER_2) ? R.Xh.PREMIUM_MONTH_TIER_2 : ej[0],
        em = (0, a.e7)([S.Z], () => S.Z.get(eL)),
        eg = [
            {
                planId: null == em ? void 0 : em.id,
                quantity: 1
            }
        ],
        [eE, eS] = l.useState(ef),
        [ey, eM] = (0, c.ED)({
            items: eg,
            renewal: !1,
            preventFetch: !ef,
            applyEntitlements: !0,
            trialId: G,
            paymentSourceId: $.paymentSourceId,
            currency: $.currency
        });
    l.useEffect(() => {
        ef && eS((null == ey ? void 0 : ey.subscriptionPeriodEnd) == null);
    }, [ey, ef]),
        (0, C.Z)(
            'Payment Modal Plan Select Step',
            eE,
            5,
            {
                proratedInvoicePreview: ey,
                proratedInvoiceError: eM,
                isEligibleForOffer: ef
            },
            { tags: { app_context: 'billing' } }
        );
    let eZ = null !== (s = null == eM ? void 0 : eM.message) && void 0 !== s ? s : O.intl.string(O.t.R0RpRU),
        eI = ef && null == eM,
        ev = ef && null != eM,
        eP = eI && null == Y && !!ef && (null == ey ? void 0 : ey.subscriptionPeriodEnd) == null,
        { enabled: eT } = p._.useExperiment({ location: 'PremiumPaymentPlanSelectStep' }, { autoTrackExposure: !1 }),
        eN = !et && (null == em ? void 0 : em.skuId) === R.Si.TIER_2 && (null == eu ? void 0 : eu.referrer_id) != null && eT,
        eA = null;
    return ((eA = eN ? (0, i.jsx)(m.Z, {}) : (0, i.jsx)(L.Z, {})), eP)
        ? (0, i.jsx)(N.Z, {})
        : (r()(null != q, 'Step should be set'),
          r()(ej.length > 0, 'Premium plan options should be set'),
          (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(U.P, { giftMessage: ei }),
                  !(et && (0, y.pO)(en)) && (0, i.jsx)(T.Z, { isEligibleForTrial: ec }),
                  (0, i.jsxs)(A.C3, {
                      children: [
                          eI && (0, i.jsx)('hr', { className: w.planSelectSeparatorUpper }),
                          eA,
                          (0, i.jsx)(b.Z, {}),
                          ev
                              ? (0, i.jsx)(o.FormErrorBlock, { children: eZ })
                              : (0, i.jsx)(g.O, {
                                    planOptions: ej,
                                    eligibleForMultiMonthPlans: ed,
                                    referralTrialOfferId: W,
                                    selectedPlanId: null == z ? void 0 : z.id,
                                    subscriptionPeriodEnd: null == ey ? void 0 : ey.subscriptionPeriodEnd,
                                    discountInvoiceItems: eh ? (null == ey ? void 0 : ey.invoiceItems) : void 0,
                                    handleClose: D
                                }),
                          eI &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('hr', { className: w.planSelectSeparatorLower }),
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-xs/normal',
                                          children: O.intl.format(O.t.BHtnqK, { link: M.Z.getArticleURL(k.BhN.PREMIUM_DETAILS_CANCEL_SUB) })
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, i.jsxs)(A.O3, {
                      children: [
                          er && (0, i.jsx)(f.c, {}),
                          (0, i.jsx)(o.ModalFooter, {
                              justify: d.Z.Justify.BETWEEN,
                              align: d.Z.Align.CENTER,
                              children: (0, i.jsx)(g.y, {
                                  onStepChange: H,
                                  onBackClick: () => H(P.h8.SKU_SELECT),
                                  showBackButton: null == B && null == F,
                                  planOptions: ej,
                                  shouldRenderUpdatedPaymentModal: eI,
                                  isTrial: ec
                              })
                          })
                      ]
                  })
              ]
          }));
}
