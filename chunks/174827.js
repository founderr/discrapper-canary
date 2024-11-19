n.d(t, {
    x: function () {
        return R;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    s = n(512722),
    r = n.n(s),
    C = n(399606),
    a = n(481060),
    o = n(975608),
    d = n(600164),
    u = n(711459),
    c = n(374649),
    p = n(650032),
    x = n(439017),
    _ = n(857039),
    h = n(515593),
    f = n(104494),
    j = n(639119),
    L = n(642530),
    m = n(381507),
    g = n(314404),
    E = n(594174),
    S = n(509545),
    y = n(669079),
    M = n(63063),
    Z = n(74538),
    P = n(987209),
    I = n(563132),
    T = n(409813),
    v = n(51499),
    A = n(456251),
    U = n(614277),
    N = n(809144),
    k = n(698708),
    b = n(981631),
    w = n(474936),
    O = n(388032),
    H = n(427830);
function R(e) {
    var t, n, s;
    let { handleStepChange: R, initialPlanId: B, subscriptionTier: F, trialId: G, referralTrialOfferId: W, handleClose: Y } = e,
        { activeSubscription: D, hasFetchedSubscriptions: V, paymentSourceId: K, paymentSources: X, selectedSkuId: Q, selectedPlan: q, step: z, defaultPlanId: J, priceOptions: $, isPremium: ee } = (0, I.usePaymentContext)(),
        { isGift: et, giftRecipient: en, giftMessage: ei } = (0, P.wD)(),
        el = null != K ? X[K] : null,
        { newPlans: es } = u.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }),
        er = (0, C.e7)([E.default], () => E.default.getCurrentUser()),
        eC = !et && null != Q && Q === w.Si.TIER_2 && null != er && er.hasHadPremium() && V && null == D && (0, u.aQ)(el),
        ea = (0, j.N)(W),
        eo = !et && null != ea && null != Q && w.nG[ea.trial_id].skus.includes(Q),
        ed = (0, f.Ng)(),
        eu = null == ed ? void 0 : null === (t = ed.discount) || void 0 === t ? void 0 : t.plan_ids.some((e) => w.GP[e].skuId === Q),
        ec = !et && null != ed && null != Q && eu,
        ep = null !== (n = eo || ec) && void 0 !== n && n,
        { defaultToMonthlyPlan: ex } = x.k.useExperiment({ location: 'd17fd6_4' }, { autoTrackExposure: !1 }),
        e_ = l.useMemo(
            () =>
                (0, Z.V7)({
                    skuId: Q,
                    isPremium: ee,
                    multiMonthPlans: eC ? es : [],
                    currentSubscription: D,
                    isGift: et,
                    isEligibleForTrial: eo,
                    defaultPlanId: J,
                    defaultToMonthlyPlan: ex
                }),
            [Q, ee, es, D, eC, et, eo, J, ex]
        ),
        eh = ec && e_.includes(w.Xh.PREMIUM_MONTH_TIER_2) ? w.Xh.PREMIUM_MONTH_TIER_2 : e_[0],
        ef = (0, C.e7)([S.Z], () => S.Z.get(eh)),
        ej = [
            {
                planId: null == ef ? void 0 : ef.id,
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
        eS = (0, _.Z)({ location: 'PremiumGiftPlanSelect' }) && (null == ef ? void 0 : ef.skuId) === w.Si.TIER_2;
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
    let ey = null !== (s = null == eE ? void 0 : eE.message) && void 0 !== s ? s : O.intl.string(O.t.R0RpRU),
        eM = ep && null == eE,
        eZ = ep && null != eE,
        eP = eM && null == D && !!ep && (null == eg ? void 0 : eg.subscriptionPeriodEnd) == null,
        { enabled: eI } = p._.useExperiment({ location: 'PremiumPaymentPlanSelectStep' }, { autoTrackExposure: !1 }),
        eT = !et && (null == ef ? void 0 : ef.skuId) === w.Si.TIER_2 && (null == ea ? void 0 : ea.referrer_id) != null && eI,
        ev = null;
    return ((ev = eT ? (0, i.jsx)(m.Z, {}) : (0, i.jsx)(L.Z, {})), eP)
        ? (0, i.jsx)(A.Z, {})
        : (r()(null != z, 'Step should be set'),
          r()(e_.length > 0, 'Premium plan options should be set'),
          (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(N.P, { giftMessage: ei }),
                  !(et && (0, y.pO)(en)) && (0, i.jsx)(v.Z, { isEligibleForTrial: eo }),
                  (0, i.jsxs)(U.C3, {
                      children: [
                          eM && (0, i.jsx)('hr', { className: H.planSelectSeparatorUpper }),
                          ev,
                          (0, i.jsx)(k.Z, {}),
                          eZ
                              ? (0, i.jsx)(a.FormErrorBlock, { children: ey })
                              : (0, i.jsx)(g.O, {
                                    planOptions: e_,
                                    eligibleForMultiMonthPlans: eC,
                                    referralTrialOfferId: W,
                                    selectedPlanId: null == q ? void 0 : q.id,
                                    subscriptionPeriodEnd: null == eg ? void 0 : eg.subscriptionPeriodEnd,
                                    discountInvoiceItems: ec ? (null == eg ? void 0 : eg.invoiceItems) : void 0,
                                    handleClose: Y
                                }),
                          eM &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('hr', { className: H.planSelectSeparatorLower }),
                                      (0, i.jsx)(a.Text, {
                                          variant: 'text-xs/normal',
                                          children: O.intl.format(O.t.BHtnqK, { link: M.Z.getArticleURL(b.BhN.PREMIUM_DETAILS_CANCEL_SUB) })
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, i.jsxs)(U.O3, {
                      children: [
                          eS
                              ? (0, i.jsxs)('div', {
                                    className: H.nitroweenFooterBanner,
                                    children: [
                                        (0, i.jsx)(h.Z, { size: a.AvatarSizes.SIZE_40 }),
                                        (0, i.jsx)(a.Text, {
                                            variant: 'text-md/normal',
                                            color: 'always-white',
                                            children: O.intl.string(O.t['5vzYv7'])
                                        })
                                    ]
                                })
                              : null,
                          (0, i.jsx)(a.ModalFooter, {
                              justify: d.Z.Justify.BETWEEN,
                              align: d.Z.Align.CENTER,
                              children: (0, i.jsx)(g.M, {
                                  onStepChange: R,
                                  onBackClick: () => R(T.h8.SKU_SELECT),
                                  showBackButton: null == B && null == F,
                                  planOptions: e_,
                                  shouldRenderUpdatedPaymentModal: eM,
                                  isTrial: eo
                              })
                          })
                      ]
                  })
              ]
          }));
}
