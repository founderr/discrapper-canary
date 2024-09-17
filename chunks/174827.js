t.d(n, {
    x: function () {
        return H;
    }
}),
    t(47120);
var r = t(735250),
    a = t(470079),
    i = t(512722),
    s = t.n(i),
    o = t(399606),
    l = t(481060),
    C = t(975608),
    d = t(600164),
    c = t(711459),
    u = t(374649),
    _ = t(650032),
    p = t(439017),
    f = t(857039),
    h = t(515593),
    x = t(104494),
    L = t(639119),
    I = t(642530),
    g = t(381507),
    E = t(314404),
    m = t(594174),
    M = t(509545),
    T = t(669079),
    N = t(63063),
    b = t(74538),
    j = t(987209),
    S = t(598),
    A = t(409813),
    R = t(51499),
    P = t(456251),
    O = t(614277),
    v = t(809144),
    y = t(698708),
    Z = t(981631),
    B = t(474936),
    U = t(689938),
    k = t(577581);
function H(e) {
    var n, t, i;
    let { handleStepChange: H, initialPlanId: F, subscriptionTier: G, trialId: w, referralTrialOfferId: W, handleClose: D } = e,
        { activeSubscription: Y, hasFetchedSubscriptions: K, paymentSourceId: V, paymentSources: X, selectedSkuId: z, selectedPlan: Q, step: q, defaultPlanId: J, priceOptions: $, isPremium: ee } = (0, S.usePaymentContext)(),
        { isGift: en, giftRecipient: et, giftMessage: er } = (0, j.wD)(),
        ea = null != V ? X[V] : null,
        { newPlans: ei } = c.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }),
        es = (0, o.e7)([m.default], () => m.default.getCurrentUser()),
        eo = !en && null != z && z === B.Si.TIER_2 && null != es && es.hasHadPremium() && K && null == Y && (0, c.aQ)(ea),
        el = (0, L.N)(W),
        eC = !en && null != el && null != z && B.nG[el.trial_id].skus.includes(z),
        ed = (0, x.Ng)(),
        ec = null == ed ? void 0 : null === (n = ed.discount) || void 0 === n ? void 0 : n.plan_ids.some((e) => B.GP[e].skuId === z),
        eu = !en && null != ed && null != z && ec,
        e_ = null !== (t = eC || eu) && void 0 !== t && t,
        { defaultToMonthlyPlan: ep } = p.k.useExperiment({ location: 'd17fd6_4' }, { autoTrackExposure: !1 }),
        ef = a.useMemo(
            () =>
                (0, b.V7)({
                    skuId: z,
                    isPremium: ee,
                    multiMonthPlans: eo ? ei : [],
                    currentSubscription: Y,
                    isGift: en,
                    isEligibleForTrial: eC,
                    defaultPlanId: J,
                    defaultToMonthlyPlan: ep
                }),
            [z, ee, ei, Y, eo, en, eC, J, ep]
        ),
        eh = eu && ef.includes(B.Xh.PREMIUM_MONTH_TIER_2) ? B.Xh.PREMIUM_MONTH_TIER_2 : ef[0],
        ex = (0, o.e7)([M.Z], () => M.Z.get(eh)),
        eL = [
            {
                planId: null == ex ? void 0 : ex.id,
                quantity: 1
            }
        ],
        [eI, eg] = a.useState(e_),
        [eE, em] = (0, u.ED)({
            items: eL,
            renewal: !1,
            preventFetch: !e_,
            applyEntitlements: !0,
            trialId: w,
            paymentSourceId: $.paymentSourceId,
            currency: $.currency
        }),
        eM = (0, f.Z)({ location: 'PremiumGiftPlanSelect' }) && (null == ex ? void 0 : ex.skuId) === B.Si.TIER_2;
    a.useEffect(() => {
        e_ && eg((null == eE ? void 0 : eE.subscriptionPeriodEnd) == null);
    }, [eE, e_]),
        (0, C.Z)(
            'Payment Modal Plan Select Step',
            eI,
            5,
            {
                proratedInvoicePreview: eE,
                proratedInvoiceError: em,
                isEligibleForOffer: e_
            },
            { tags: { app_context: 'billing' } }
        );
    let eT = null !== (i = null == em ? void 0 : em.message) && void 0 !== i ? i : U.Z.Messages.ERROR_GENERIC_TITLE,
        eN = e_ && null == em,
        eb = e_ && null != em,
        ej = eN && null == Y && !!e_ && (null == eE ? void 0 : eE.subscriptionPeriodEnd) == null,
        { enabled: eS } = _._.useExperiment({ location: 'PremiumPaymentPlanSelectStep' }, { autoTrackExposure: !1 }),
        eA = !en && (null == ex ? void 0 : ex.skuId) === B.Si.TIER_2 && (null == el ? void 0 : el.referrer_id) != null && eS,
        eR = null;
    return ((eR = eA ? (0, r.jsx)(g.Z, {}) : (0, r.jsx)(I.Z, {})), ej)
        ? (0, r.jsx)(P.Z, {})
        : (s()(null != q, 'Step should be set'),
          s()(ef.length > 0, 'Premium plan options should be set'),
          (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(v.P, { giftMessage: er }),
                  !(en && (0, T.pO)(et)) && (0, r.jsx)(R.Z, { isEligibleForTrial: eC }),
                  (0, r.jsxs)(O.C3, {
                      children: [
                          eN && (0, r.jsx)('hr', { className: k.planSelectSeparatorUpper }),
                          eR,
                          (0, r.jsx)(y.Z, {}),
                          eb
                              ? (0, r.jsx)(l.FormErrorBlock, { children: eT })
                              : (0, r.jsx)(E.O, {
                                    planOptions: ef,
                                    eligibleForMultiMonthPlans: eo,
                                    referralTrialOfferId: W,
                                    selectedPlanId: null == Q ? void 0 : Q.id,
                                    subscriptionPeriodEnd: null == eE ? void 0 : eE.subscriptionPeriodEnd,
                                    discountInvoiceItems: eu ? (null == eE ? void 0 : eE.invoiceItems) : void 0,
                                    handleClose: D
                                }),
                          eN &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)('hr', { className: k.planSelectSeparatorLower }),
                                      (0, r.jsx)(l.Text, {
                                          variant: 'text-xs/normal',
                                          children: U.Z.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({ link: N.Z.getArticleURL(Z.BhN.PREMIUM_DETAILS_CANCEL_SUB) })
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, r.jsxs)(O.O3, {
                      children: [
                          eM
                              ? (0, r.jsxs)('div', {
                                    className: k.nitroweenFooterBanner,
                                    children: [
                                        (0, r.jsx)(h.Z, { size: l.AvatarSizes.SIZE_40 }),
                                        (0, r.jsx)(l.Text, {
                                            variant: 'text-md/normal',
                                            color: 'always-white',
                                            children: U.Z.Messages.NITROWEEN_DESKTOP_GIFT_PURCHASE_DESCRIPTION
                                        })
                                    ]
                                })
                              : null,
                          (0, r.jsx)(l.ModalFooter, {
                              justify: d.Z.Justify.BETWEEN,
                              align: d.Z.Align.CENTER,
                              children: (0, r.jsx)(E.M, {
                                  onStepChange: H,
                                  onBackClick: () => H(A.h8.SKU_SELECT),
                                  showBackButton: null == F && null == G,
                                  planOptions: ef,
                                  shouldRenderUpdatedPaymentModal: eN,
                                  isTrial: eC
                              })
                          })
                      ]
                  })
              ]
          }));
}
