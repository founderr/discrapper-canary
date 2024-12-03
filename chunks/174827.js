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
    C = n(481060),
    o = n(975608),
    d = n(600164),
    u = n(711459),
    c = n(374649),
    p = n(650032),
    x = n(439017),
    h = n(857039),
    f = n(515593),
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
    k = n(698708),
    b = n(981631),
    O = n(474936),
    R = n(388032),
    w = n(242582);
function H(e) {
    var t, n, s;
    let { handleStepChange: H, initialPlanId: B, subscriptionTier: F, trialId: G, referralTrialOfferId: W, handleClose: D } = e,
        { activeSubscription: Y, hasFetchedSubscriptions: V, paymentSourceId: K, paymentSources: X, selectedSkuId: Q, selectedPlan: z, step: q, defaultPlanId: J, priceOptions: $, isPremium: ee } = (0, v.usePaymentContext)(),
        { isGift: et, giftRecipient: en, giftMessage: ei } = (0, I.wD)(),
        el = null != K ? X[K] : null,
        { newPlans: es } = u.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }),
        er = (0, a.e7)([E.default], () => E.default.getCurrentUser()),
        ea = !et && null != Q && Q === O.Si.TIER_2 && null != er && er.hasHadPremium() && V && null == Y && (0, u.aQ)(el),
        eC = (0, j.N)(W),
        eo = !et && null != eC && null != Q && O.nG[eC.trial_id].skus.includes(Q),
        ed = (0, _.Ng)(),
        eu = null == ed ? void 0 : null === (t = ed.discount) || void 0 === t ? void 0 : t.plan_ids.some((e) => O.GP[e].skuId === Q),
        ec = !et && null != ed && null != Q && eu,
        ep = null !== (n = eo || ec) && void 0 !== n && n,
        { defaultToMonthlyPlan: ex } = x.k.useExperiment({ location: 'd17fd6_4' }, { autoTrackExposure: !1 }),
        eh = l.useMemo(
            () =>
                (0, Z.V7)({
                    skuId: Q,
                    isPremium: ee,
                    multiMonthPlans: ea ? es : [],
                    currentSubscription: Y,
                    isGift: et,
                    isEligibleForTrial: eo,
                    defaultPlanId: J,
                    defaultToMonthlyPlan: ex
                }),
            [Q, ee, es, Y, ea, et, eo, J, ex]
        ),
        ef = ec && eh.includes(O.Xh.PREMIUM_MONTH_TIER_2) ? O.Xh.PREMIUM_MONTH_TIER_2 : eh[0],
        e_ = (0, a.e7)([S.Z], () => S.Z.get(ef)),
        ej = [
            {
                planId: null == e_ ? void 0 : e_.id,
                quantity: 1
            }
        ],
        [eL, em] = l.useState(ep),
        [eg, eE] = (0, c.ED)({
            items: ej,
            renewal: !1,
            preventFetch: !ep,
            applyEntitlements: !0,
            trialId: G,
            paymentSourceId: $.paymentSourceId,
            currency: $.currency
        }),
        eS = (0, h.Z)({ location: 'PremiumGiftPlanSelect' }) && (null == e_ ? void 0 : e_.skuId) === O.Si.TIER_2;
    l.useEffect(() => {
        ep && em((null == eg ? void 0 : eg.subscriptionPeriodEnd) == null);
    }, [eg, ep]),
        (0, o.Z)(
            'Payment Modal Plan Select Step',
            eL,
            5,
            {
                proratedInvoicePreview: eg,
                proratedInvoiceError: eE,
                isEligibleForOffer: ep
            },
            { tags: { app_context: 'billing' } }
        );
    let ey = null !== (s = null == eE ? void 0 : eE.message) && void 0 !== s ? s : R.intl.string(R.t.R0RpRU),
        eM = ep && null == eE,
        eZ = ep && null != eE,
        eI = eM && null == Y && !!ep && (null == eg ? void 0 : eg.subscriptionPeriodEnd) == null,
        { enabled: ev } = p._.useExperiment({ location: 'PremiumPaymentPlanSelectStep' }, { autoTrackExposure: !1 }),
        eP = !et && (null == e_ ? void 0 : e_.skuId) === O.Si.TIER_2 && (null == eC ? void 0 : eC.referrer_id) != null && ev,
        eT = null;
    return ((eT = eP ? (0, i.jsx)(m.Z, {}) : (0, i.jsx)(L.Z, {})), eI)
        ? (0, i.jsx)(N.Z, {})
        : (r()(null != q, 'Step should be set'),
          r()(eh.length > 0, 'Premium plan options should be set'),
          (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(U.P, { giftMessage: ei }),
                  !(et && (0, y.pO)(en)) && (0, i.jsx)(T.Z, { isEligibleForTrial: eo }),
                  (0, i.jsxs)(A.C3, {
                      children: [
                          eM && (0, i.jsx)('hr', { className: w.planSelectSeparatorUpper }),
                          eT,
                          (0, i.jsx)(k.Z, {}),
                          eZ
                              ? (0, i.jsx)(C.FormErrorBlock, { children: ey })
                              : (0, i.jsx)(g.O, {
                                    planOptions: eh,
                                    eligibleForMultiMonthPlans: ea,
                                    referralTrialOfferId: W,
                                    selectedPlanId: null == z ? void 0 : z.id,
                                    subscriptionPeriodEnd: null == eg ? void 0 : eg.subscriptionPeriodEnd,
                                    discountInvoiceItems: ec ? (null == eg ? void 0 : eg.invoiceItems) : void 0,
                                    handleClose: D
                                }),
                          eM &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('hr', { className: w.planSelectSeparatorLower }),
                                      (0, i.jsx)(C.Text, {
                                          variant: 'text-xs/normal',
                                          children: R.intl.format(R.t.BHtnqK, { link: M.Z.getArticleURL(b.BhN.PREMIUM_DETAILS_CANCEL_SUB) })
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, i.jsxs)(A.O3, {
                      children: [
                          eS
                              ? (0, i.jsxs)('div', {
                                    className: w.nitroweenFooterBanner,
                                    children: [
                                        (0, i.jsx)(f.Z, { size: C.AvatarSizes.SIZE_40 }),
                                        (0, i.jsx)(C.Text, {
                                            variant: 'text-md/normal',
                                            color: 'always-white',
                                            children: R.intl.string(R.t['5vzYv7'])
                                        })
                                    ]
                                })
                              : null,
                          (0, i.jsx)(C.ModalFooter, {
                              justify: d.Z.Justify.BETWEEN,
                              align: d.Z.Align.CENTER,
                              children: (0, i.jsx)(g.y, {
                                  onStepChange: H,
                                  onBackClick: () => H(P.h8.SKU_SELECT),
                                  showBackButton: null == B && null == F,
                                  planOptions: eh,
                                  shouldRenderUpdatedPaymentModal: eM,
                                  isTrial: eo
                              })
                          })
                      ]
                  })
              ]
          }));
}
