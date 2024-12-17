n.d(t, {
    x: function () {
        return F;
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
    f = n(286961),
    h = n(572517),
    j = n(104494),
    m = n(639119),
    L = n(642530),
    E = n(381507),
    S = n(314404),
    g = n(594174),
    I = n(509545),
    M = n(669079),
    v = n(63063),
    y = n(74538),
    T = n(987209),
    N = n(563132),
    P = n(409813),
    Z = n(51499),
    A = n(456251),
    U = n(614277),
    O = n(809144),
    R = n(698708),
    k = n(844068),
    b = n(981631),
    w = n(474936),
    B = n(388032),
    H = n(242582);
function F(e) {
    var t, n, s, F;
    let { handleStepChange: G, initialPlanId: D, subscriptionTier: W, trialId: Y, referralTrialOfferId: K, handleClose: V } = e,
        { activeSubscription: X, hasFetchedSubscriptions: Q, paymentSourceId: z, paymentSources: q, selectedSkuId: J, selectedPlan: $, step: ee, defaultPlanId: et, priceOptions: en, isPremium: ei } = (0, N.usePaymentContext)(),
        { isGift: el, giftRecipient: es, giftMessage: er, claimableRewards: ea } = (0, T.wD)(),
        eo = (0, _.a5)($),
        eC = (null === (t = (0, f.Z)()) || void 0 === t ? void 0 : t.planSelectionBanner) != null,
        ed = el && eo && null != ea && ea.length > 0 && eC,
        eu = null != z ? q[z] : null,
        { newPlans: ec } = u.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }),
        ep = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
        ex = !el && null != J && J === w.Si.TIER_2 && null != ep && ep.hasHadPremium() && Q && null == X && (0, u.aQ)(eu),
        e_ = (0, m.N)(K),
        ef = !el && null != e_ && null != J && w.nG[e_.trial_id].skus.includes(J),
        eh = (0, j.Ng)(),
        ej = null == eh ? void 0 : null === (n = eh.discount) || void 0 === n ? void 0 : n.plan_ids.some((e) => w.GP[e].skuId === J),
        em = !el && null != eh && null != J && ej,
        eL = null !== (s = ef || em) && void 0 !== s && s,
        { defaultToMonthlyPlan: eE } = x.k.useExperiment({ location: 'd17fd6_4' }, { autoTrackExposure: !1 }),
        eS = l.useMemo(
            () =>
                (0, y.V7)({
                    skuId: J,
                    isPremium: ei,
                    multiMonthPlans: ex ? ec : [],
                    currentSubscription: X,
                    isGift: el,
                    isEligibleForTrial: ef,
                    defaultPlanId: et,
                    defaultToMonthlyPlan: eE
                }),
            [J, ei, ec, X, ex, el, ef, et, eE]
        ),
        eg = em && eS.includes(w.Xh.PREMIUM_MONTH_TIER_2) ? w.Xh.PREMIUM_MONTH_TIER_2 : eS[0],
        eI = (0, a.e7)([I.Z], () => I.Z.get(eg)),
        eM = [
            {
                planId: null == eI ? void 0 : eI.id,
                quantity: 1
            }
        ],
        [ev, ey] = l.useState(eL),
        [eT, eN] = (0, c.ED)({
            items: eM,
            renewal: !1,
            preventFetch: !eL,
            applyEntitlements: !0,
            trialId: Y,
            paymentSourceId: en.paymentSourceId,
            currency: en.currency
        });
    l.useEffect(() => {
        eL && ey((null == eT ? void 0 : eT.subscriptionPeriodEnd) == null);
    }, [eT, eL]),
        (0, C.Z)(
            'Payment Modal Plan Select Step',
            ev,
            5,
            {
                proratedInvoicePreview: eT,
                proratedInvoiceError: eN,
                isEligibleForOffer: eL
            },
            { tags: { app_context: 'billing' } }
        );
    let eP = null !== (F = null == eN ? void 0 : eN.message) && void 0 !== F ? F : B.intl.string(B.t.R0RpRU),
        eZ = eL && null == eN,
        eA = eL && null != eN,
        eU = eZ && null == X && !!eL && (null == eT ? void 0 : eT.subscriptionPeriodEnd) == null,
        { enabled: eO } = p._.useExperiment({ location: 'PremiumPaymentPlanSelectStep' }, { autoTrackExposure: !1 }),
        eR = !el && (null == eI ? void 0 : eI.skuId) === w.Si.TIER_2 && (null == e_ ? void 0 : e_.referrer_id) != null && eO,
        ek = null;
    return ((ek = eR ? (0, i.jsx)(E.Z, {}) : (0, i.jsx)(L.Z, {})), eU)
        ? (0, i.jsx)(A.Z, {})
        : (r()(null != ee, 'Step should be set'),
          r()(eS.length > 0, 'Premium plan options should be set'),
          (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(O.P, { giftMessage: er }),
                  !(el && (0, M.pO)(es)) && (0, i.jsx)(Z.Z, { isEligibleForTrial: ef }),
                  (0, i.jsxs)(U.C3, {
                      children: [
                          eZ && (0, i.jsx)('hr', { className: H.planSelectSeparatorUpper }),
                          ek,
                          (0, i.jsx)(k.Z, {}),
                          (0, i.jsx)(R.Z, {}),
                          eA
                              ? (0, i.jsx)(o.FormErrorBlock, { children: eP })
                              : (0, i.jsx)(S.O, {
                                    planOptions: eS,
                                    eligibleForMultiMonthPlans: ex,
                                    referralTrialOfferId: K,
                                    selectedPlanId: null == $ ? void 0 : $.id,
                                    subscriptionPeriodEnd: null == eT ? void 0 : eT.subscriptionPeriodEnd,
                                    discountInvoiceItems: em ? (null == eT ? void 0 : eT.invoiceItems) : void 0,
                                    useCompactGiftComponents: ed,
                                    handleClose: V
                                }),
                          eZ &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('hr', { className: H.planSelectSeparatorLower }),
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-xs/normal',
                                          children: B.intl.format(B.t.BHtnqK, { link: v.Z.getArticleURL(b.BhN.PREMIUM_DETAILS_CANCEL_SUB) })
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, i.jsxs)(U.O3, {
                      children: [
                          ed && (0, i.jsx)(h.c, {}),
                          (0, i.jsx)(o.ModalFooter, {
                              justify: d.Z.Justify.BETWEEN,
                              align: d.Z.Align.CENTER,
                              children: (0, i.jsx)(S.y, {
                                  onStepChange: G,
                                  onBackClick: () => G(P.h8.SKU_SELECT),
                                  showBackButton: null == D && null == W,
                                  planOptions: eS,
                                  shouldRenderUpdatedPaymentModal: eZ,
                                  isTrial: ef
                              })
                          })
                      ]
                  })
              ]
          }));
}
