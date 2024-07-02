t.d(n, {
    x: function () {
        return H;
    }
}), t(47120);
var i = t(735250), r = t(470079), o = t(512722), a = t.n(o), s = t(399606), l = t(481060), d = t(975608), c = t(711459), C = t(374649), u = t(650032), _ = t(439017), p = t(104494), f = t(639119), x = t(642530), h = t(248042), b = t(381507), g = t(314404), m = t(594174), I = t(509545), L = t(285952), E = t(669079), M = t(63063), T = t(74538), N = t(987209), S = t(598), j = t(409813), A = t(51499), O = t(456251), R = t(614277), P = t(809144), y = t(698708), v = t(981631), B = t(474936), k = t(689938), Z = t(255784);
function H(e) {
    var n, t, o;
    let {
            handleStepChange: H,
            initialPlanId: U,
            subscriptionTier: F,
            trialId: w,
            referralTrialOfferId: G,
            handleClose: W
        } = e, {
            activeSubscription: D,
            hasFetchedSubscriptions: Y,
            paymentSourceId: K,
            paymentSources: V,
            selectedSkuId: X,
            selectedPlan: z,
            step: Q,
            defaultPlanId: q,
            priceOptions: J,
            isPremium: $
        } = (0, S.usePaymentContext)(), {
            isGift: ee,
            giftRecipient: en,
            giftMessage: et
        } = (0, N.wD)(), ei = null != K ? V[K] : null, {newPlans: er} = c.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }), eo = (0, s.e7)([m.default], () => m.default.getCurrentUser()), ea = !ee && null != X && X === B.Si.TIER_2 && null != eo && eo.hasHadPremium() && Y && null == D && (0, c.aQ)(ei), es = (0, f.N)(G), el = !ee && null != es && null != X && B.nG[es.trial_id].skus.includes(X), ed = (0, p.Ng)(), ec = null == ed ? void 0 : null === (n = ed.discount) || void 0 === n ? void 0 : n.plan_ids.some(e => B.GP[e].skuId === X), eC = !ee && null != ed && null != X && ec, eu = null !== (t = el || eC) && void 0 !== t && t, {defaultToMonthlyPlan: e_} = _.k.useExperiment({ location: 'd17fd6_4' }, { autoTrackExposure: !1 }), ep = r.useMemo(() => (0, T.V7)({
            skuId: X,
            isPremium: $,
            multiMonthPlans: ea ? er : [],
            currentSubscription: D,
            isGift: ee,
            isEligibleForTrial: el,
            defaultPlanId: q,
            defaultToMonthlyPlan: e_
        }), [
            X,
            $,
            er,
            D,
            ea,
            ee,
            el,
            q,
            e_
        ]), ef = eC && ep.includes(B.Xh.PREMIUM_MONTH_TIER_2) ? B.Xh.PREMIUM_MONTH_TIER_2 : ep[0], ex = (0, s.e7)([I.Z], () => I.Z.get(ef)), eh = [{
                planId: null == ex ? void 0 : ex.id,
                quantity: 1
            }], [eb, eg] = r.useState(eu), [em, eI] = (0, C.ED)({
            items: eh,
            renewal: !1,
            preventFetch: !eu,
            applyEntitlements: !0,
            trialId: w,
            paymentSourceId: J.paymentSourceId,
            currency: J.currency
        });
    r.useEffect(() => {
        eu && eg((null == em ? void 0 : em.subscriptionPeriodEnd) == null);
    }, [
        em,
        eu
    ]), (0, d.Z)('Payment Modal Plan Select Step', eb, 5, {
        proratedInvoicePreview: em,
        proratedInvoiceError: eI,
        isEligibleForOffer: eu
    }, { tags: { app_context: 'billing' } });
    let eL = null !== (o = null == eI ? void 0 : eI.message) && void 0 !== o ? o : k.Z.Messages.ERROR_GENERIC_TITLE, eE = eu && null == eI, eM = eu && null != eI, eT = eE && null == D && !!eu && (null == em ? void 0 : em.subscriptionPeriodEnd) == null, {enabled: eN} = u._.useExperiment({ location: 'PremiumPaymentPlanSelectStep' }, { autoTrackExposure: !1 }), eS = !ee && (null == ex ? void 0 : ex.skuId) === B.Si.TIER_2 && (null == es ? void 0 : es.referrer_id) != null && eN, ej = (0, h.Vi)() && !ee && (null == ex ? void 0 : ex.skuId) === B.Si.TIER_2, eA = null;
    return (eS ? eA = (0, i.jsx)(b.Z, {}) : ej && (eA = (0, i.jsx)(x.Z, {})), eT) ? (0, i.jsx)(O.Z, {}) : (a()(null != Q, 'Step should be set'), a()(ep.length > 0, 'Premium plan options should be set'), (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(P.P, { giftMessage: et }),
            !(ee && (0, E.pO)(en)) && (0, i.jsx)(A.Z, { isEligibleForTrial: el }),
            (0, i.jsxs)(R.C3, {
                children: [
                    eE && (0, i.jsx)('hr', { className: Z.planSelectSeparatorUpper }),
                    eA,
                    (0, i.jsx)(y.Z, {}),
                    eM ? (0, i.jsx)(l.FormErrorBlock, { children: eL }) : (0, i.jsx)(g.O, {
                        planOptions: ep,
                        eligibleForMultiMonthPlans: ea,
                        referralTrialOfferId: G,
                        selectedPlanId: null == z ? void 0 : z.id,
                        subscriptionPeriodEnd: null == em ? void 0 : em.subscriptionPeriodEnd,
                        discountInvoiceItems: eC ? null == em ? void 0 : em.invoiceItems : void 0,
                        handleClose: W
                    }),
                    eE && (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('hr', { className: Z.planSelectSeparatorLower }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-xs/normal',
                                children: k.Z.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({ link: M.Z.getArticleURL(v.BhN.PREMIUM_DETAILS_CANCEL_SUB) })
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(R.O3, {
                children: (0, i.jsx)(l.ModalFooter, {
                    justify: L.Z.Justify.BETWEEN,
                    align: L.Z.Align.CENTER,
                    children: (0, i.jsx)(g.M, {
                        onStepChange: H,
                        onBackClick: () => H(j.h8.SKU_SELECT),
                        showBackButton: null == U && null == F,
                        planOptions: ep,
                        shouldRenderUpdatedPaymentModal: eE,
                        isTrial: el
                    })
                })
            })
        ]
    }));
}
