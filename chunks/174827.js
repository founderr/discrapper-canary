n.d(s, {
    x: function () {
        return F;
    }
}),
    n(47120);
var t = n(735250),
    l = n(470079),
    i = n(512722),
    C = n.n(i),
    r = n(399606),
    a = n(481060),
    o = n(975608),
    _ = n(600164),
    d = n(711459),
    u = n(374649),
    c = n(650032),
    p = n(439017),
    x = n(857039),
    L = n(515593),
    I = n(104494),
    E = n(639119),
    h = n(642530),
    f = n(381507),
    M = n(314404),
    T = n(594174),
    N = n(509545),
    j = n(669079),
    A = n(63063),
    S = n(74538),
    g = n(987209),
    P = n(598),
    R = n(409813),
    m = n(51499),
    O = n(456251),
    Z = n(614277),
    y = n(809144),
    U = n(698708),
    H = n(981631),
    G = n(474936),
    B = n(689938),
    v = n(577581);
function F(e) {
    var s, n, i;
    let { handleStepChange: F, initialPlanId: b, subscriptionTier: k, trialId: w, referralTrialOfferId: W, handleClose: D } = e,
        { activeSubscription: Y, hasFetchedSubscriptions: K, paymentSourceId: X, paymentSources: V, selectedSkuId: Q, selectedPlan: z, step: q, defaultPlanId: J, priceOptions: $, isPremium: ee } = (0, P.usePaymentContext)(),
        { isGift: es, giftRecipient: en, giftMessage: et } = (0, g.wD)(),
        el = null != X ? V[X] : null,
        { newPlans: ei } = d.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }),
        eC = (0, r.e7)([T.default], () => T.default.getCurrentUser()),
        er = !es && null != Q && Q === G.Si.TIER_2 && null != eC && eC.hasHadPremium() && K && null == Y && (0, d.aQ)(el),
        ea = (0, E.N)(W),
        eo = !es && null != ea && null != Q && G.nG[ea.trial_id].skus.includes(Q),
        e_ = (0, I.Ng)(),
        ed = null == e_ ? void 0 : null === (s = e_.discount) || void 0 === s ? void 0 : s.plan_ids.some((e) => G.GP[e].skuId === Q),
        eu = !es && null != e_ && null != Q && ed,
        ec = null !== (n = eo || eu) && void 0 !== n && n,
        { defaultToMonthlyPlan: ep } = p.k.useExperiment({ location: 'd17fd6_4' }, { autoTrackExposure: !1 }),
        ex = l.useMemo(
            () =>
                (0, S.V7)({
                    skuId: Q,
                    isPremium: ee,
                    multiMonthPlans: er ? ei : [],
                    currentSubscription: Y,
                    isGift: es,
                    isEligibleForTrial: eo,
                    defaultPlanId: J,
                    defaultToMonthlyPlan: ep
                }),
            [Q, ee, ei, Y, er, es, eo, J, ep]
        ),
        eL = eu && ex.includes(G.Xh.PREMIUM_MONTH_TIER_2) ? G.Xh.PREMIUM_MONTH_TIER_2 : ex[0],
        eI = (0, r.e7)([N.Z], () => N.Z.get(eL)),
        eE = [
            {
                planId: null == eI ? void 0 : eI.id,
                quantity: 1
            }
        ],
        [eh, ef] = l.useState(ec),
        [eM, eT] = (0, u.ED)({
            items: eE,
            renewal: !1,
            preventFetch: !ec,
            applyEntitlements: !0,
            trialId: w,
            paymentSourceId: $.paymentSourceId,
            currency: $.currency
        }),
        eN = (0, x.Z)({ location: 'PremiumGiftPlanSelect' }) && (null == eI ? void 0 : eI.skuId) === G.Si.TIER_2;
    l.useEffect(() => {
        ec && ef((null == eM ? void 0 : eM.subscriptionPeriodEnd) == null);
    }, [eM, ec]),
        (0, o.Z)(
            'Payment Modal Plan Select Step',
            eh,
            5,
            {
                proratedInvoicePreview: eM,
                proratedInvoiceError: eT,
                isEligibleForOffer: ec
            },
            { tags: { app_context: 'billing' } }
        );
    let ej = null !== (i = null == eT ? void 0 : eT.message) && void 0 !== i ? i : B.Z.Messages.ERROR_GENERIC_TITLE,
        eA = ec && null == eT,
        eS = ec && null != eT,
        eg = eA && null == Y && !!ec && (null == eM ? void 0 : eM.subscriptionPeriodEnd) == null,
        { enabled: eP } = c._.useExperiment({ location: 'PremiumPaymentPlanSelectStep' }, { autoTrackExposure: !1 }),
        eR = !es && (null == eI ? void 0 : eI.skuId) === G.Si.TIER_2 && (null == ea ? void 0 : ea.referrer_id) != null && eP,
        em = null;
    return ((em = eR ? (0, t.jsx)(f.Z, {}) : (0, t.jsx)(h.Z, {})), eg)
        ? (0, t.jsx)(O.Z, {})
        : (C()(null != q, 'Step should be set'),
          C()(ex.length > 0, 'Premium plan options should be set'),
          (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(y.P, { giftMessage: et }),
                  !(es && (0, j.pO)(en)) && (0, t.jsx)(m.Z, { isEligibleForTrial: eo }),
                  (0, t.jsxs)(Z.C3, {
                      children: [
                          eA && (0, t.jsx)('hr', { className: v.planSelectSeparatorUpper }),
                          em,
                          (0, t.jsx)(U.Z, {}),
                          eS
                              ? (0, t.jsx)(a.FormErrorBlock, { children: ej })
                              : (0, t.jsx)(M.O, {
                                    planOptions: ex,
                                    eligibleForMultiMonthPlans: er,
                                    referralTrialOfferId: W,
                                    selectedPlanId: null == z ? void 0 : z.id,
                                    subscriptionPeriodEnd: null == eM ? void 0 : eM.subscriptionPeriodEnd,
                                    discountInvoiceItems: eu ? (null == eM ? void 0 : eM.invoiceItems) : void 0,
                                    handleClose: D
                                }),
                          eA &&
                              (0, t.jsxs)(t.Fragment, {
                                  children: [
                                      (0, t.jsx)('hr', { className: v.planSelectSeparatorLower }),
                                      (0, t.jsx)(a.Text, {
                                          variant: 'text-xs/normal',
                                          children: B.Z.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({ link: A.Z.getArticleURL(H.BhN.PREMIUM_DETAILS_CANCEL_SUB) })
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, t.jsxs)(Z.O3, {
                      children: [
                          eN
                              ? (0, t.jsxs)('div', {
                                    className: v.nitroweenFooterBanner,
                                    children: [
                                        (0, t.jsx)(L.Z, { size: a.AvatarSizes.SIZE_40 }),
                                        (0, t.jsx)(a.Text, {
                                            variant: 'text-md/normal',
                                            color: 'always-white',
                                            children: B.Z.Messages.NITROWEEN_DESKTOP_GIFT_PURCHASE_DESCRIPTION
                                        })
                                    ]
                                })
                              : null,
                          (0, t.jsx)(a.ModalFooter, {
                              justify: _.Z.Justify.BETWEEN,
                              align: _.Z.Align.CENTER,
                              children: (0, t.jsx)(M.M, {
                                  onStepChange: F,
                                  onBackClick: () => F(R.h8.SKU_SELECT),
                                  showBackButton: null == b && null == k,
                                  planOptions: ex,
                                  shouldRenderUpdatedPaymentModal: eA,
                                  isTrial: eo
                              })
                          })
                      ]
                  })
              ]
          }));
}
