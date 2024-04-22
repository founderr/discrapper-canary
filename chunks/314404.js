"use strict";
n.r(t), n.d(t, {
  PremiumSwitchPlanSelectBody: function() {
    return H
  },
  PremiumSwitchPlanSelectFooter: function() {
    return W
  }
}), n("47120");
var i = n("735250"),
  s = n("470079"),
  l = n("512722"),
  r = n.n(l),
  a = n("442837"),
  u = n("481060"),
  o = n("581308"),
  c = n("911969"),
  d = n("620037"),
  m = n("940824"),
  f = n("987209"),
  p = n("598"),
  I = n("409813"),
  _ = n("737143"),
  S = n("509545"),
  P = n("78839"),
  E = n("669079"),
  T = n("63063"),
  v = n("358085"),
  N = n("74538"),
  h = n("937615"),
  x = n("711459"),
  A = n("847903"),
  y = n("104494"),
  g = n("639119"),
  C = n("55610"),
  M = n("653798"),
  R = n("553797"),
  b = n("927699"),
  L = n("987716"),
  O = n("311821"),
  j = n("459965"),
  G = n("811616"),
  D = n("251660"),
  U = n("474936"),
  w = n("981631"),
  F = n("231338"),
  B = n("689938"),
  k = n("206059");

function H(e) {
  var t, n, l, I, _, P, v, O;
  let {
    premiumSubscription: j,
    skuId: H,
    selectedPlanId: W,
    setSelectedPlanId: Y,
    priceOptions: K,
    planOptions: V,
    eligibleForMultiMonthPlans: Z,
    referralTrialOfferId: z,
    subscriptionPeriodEnd: J,
    showTotal: X = !0,
    discountInvoiceItems: q,
    handleClose: Q
  } = e, {
    activeSubscription: $,
    setSelectedPlanId: ee,
    selectedSkuId: et,
    selectedPlan: en,
    priceOptions: ei,
    annualDiscountInvoicePreview: es
  } = (0, p.usePaymentContext)(), {
    isGift: el,
    giftRecipient: er,
    selectedGiftStyle: ea,
    customGiftMessage: eu,
    setCustomGiftMessage: eo
  } = (0, f.useGiftContext)(), ec = (0, E.getGiftExperience)(er), ed = el && (0, E.shouldShowCustomGiftExperience)(er), {
    confirmUpsellEnabled: em
  } = (0, d.default)({
    location: "PremiumSwitchPlanSelectBody"
  });
  H = null != H ? H : et, j = null != j ? j : $, r()(void 0 !== j, "should not be undefined");
  let [ef, ep] = (0, a.useStateFromStoresArray)([S.default], () => [null != j ? S.default.get(j.planId) : null, null != W ? S.default.get(W) : null]), eI = (0, g.usePremiumTrialOffer)(z), e_ = null == eI ? void 0 : eI.subscription_trial, eS = (0, y.usePremiumDiscountOffer)(), eP = (0, y.usePremiumAnnualDiscountOffer)(), eE = null == eS ? void 0 : null === (t = eS.discount) || void 0 === t ? void 0 : t.plan_ids, eT = null != ep ? ep : en, ev = s.useCallback(e => {
    null != Y ? Y(e) : ee(e)
  }, [Y, ee]), eN = null != K ? K : ei;
  r()(null != eN, "Price option has to be set");
  let eh = null != eI && (0, U.SubscriptionTrials)[eI.trial_id].skus.includes(H),
    ex = null != eS && V.some(e => null == eE ? void 0 : eE.includes(e)) && null != eS.discount,
    eA = null == eI && (null == eP ? void 0 : eP.discount) != null && (null == es ? void 0 : es.invoiceItems) != null && V.some(e => {
      var t, n;
      return null == eP ? void 0 : null === (n = eP.discount) || void 0 === n ? void 0 : null === (t = n.plan_ids) || void 0 === t ? void 0 : t.includes(e)
    }),
    ey = (0, N.getPrice)(U.SubscriptionPlans.PREMIUM_MONTH_TIER_2, !1, el, eN),
    eg = (0, N.getPrice)(U.SubscriptionPlans.PREMIUM_YEAR_TIER_2, !1, el, eN);
  s.useEffect(() => {
    Z && x.default.trackExposure({
      location: "5f89bb_1"
    })
  }, [Z]);
  let eC = (null == eT ? void 0 : eT.id) != null && V.includes(eT.id);
  s.useEffect(() => {
    if (!eC) {
      if (null == ef || el) ev(V[0]);
      else if (null != ef) {
        let e = V.find(e => e !== ef.id);
        null != e && ev(e)
      }
    }
  }, [eC, el, V, ef, ev]);
  let eM = !ed && (el || !eh && !ex && !eA) && eC && X,
    eR = (0, u.useRadioGroup)(),
    eb = (null == eT ? void 0 : eT.id) != null ? (0, N.getPrice)(eT.id, !1, el, eN) : void 0,
    {
      ipCountryCode: eL
    } = (0, A.default)(),
    eO = "HR" === eL && null != eb && eb.currency === F.CurrencyCodes.EUR,
    ej = (0, N.isPrepaidPaymentSource)(eN.paymentSourceId),
    eG = (null == e_ ? void 0 : e_.interval) === U.SubscriptionIntervalTypes.DAY ? B.default.Messages.BILLING_TRIAL_2_WEEK_PERIOD : B.default.Messages.BILLING_TRIAL_30_DAY_PERIOD,
    eD = !el && (ex || eA || null != e_ && eh && null != J),
    eU = null == q ? void 0 : null === (I = q.find(e => e.subscriptionPlanId === U.SubscriptionPlans.PREMIUM_MONTH_TIER_2)) || void 0 === I ? void 0 : null === (l = I.discounts) || void 0 === l ? void 0 : null === (n = l.find(e => e.type === c.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === n ? void 0 : n.amount,
    ew = null == es ? void 0 : null === (O = es.invoiceItems) || void 0 === O ? void 0 : null === (v = O.find(e => e.subscriptionPlanId === U.SubscriptionPlans.PREMIUM_YEAR_TIER_2)) || void 0 === v ? void 0 : null === (P = v.discounts) || void 0 === P ? void 0 : null === (_ = P.find(e => e.type === c.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === _ ? void 0 : _.amount;
  return (0, i.jsx)(i.Fragment, {
    children: (0, i.jsxs)("div", {
      className: ed ? k.stepBodyCustomGift : k.stepBody,
      children: [(0, i.jsxs)("div", {
        className: ed ? k.bodyColumnMiddle : void 0,
        children: [(0, i.jsx)(C.default, {
          fromBoostCancelModal: !1,
          className: k.legacyPricingNotice
        }), ed && null != ea && (0, i.jsx)(L.GiftAnimationOptions, {})]
      }), (0, i.jsxs)("div", {
        className: ed ? k.bodyColumnRight : void 0,
        children: [(0, i.jsx)(D.SendGiftToUser, {
          giftRecipient: er
        }), (() => {
          if (ec === E.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != eo) return (0, i.jsx)(b.default, {
            sectionTitle: B.default.Messages.GIFT_OPTIONAL_MESSAGE,
            onTextChange: e => eo(e),
            pendingText: eu,
            currentText: eu
          })
        })(), null != ef && !el && null == ew && (0, i.jsx)("div", {
          className: k.bodyText,
          children: function(e, t) {
            let n = B.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
              i = B.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
              s = (() => {
                switch (e.interval) {
                  case U.SubscriptionIntervalTypes.YEAR:
                    return n;
                  case U.SubscriptionIntervalTypes.MONTH:
                  default:
                    return i
                }
              })(),
              l = e.skuId;
            switch (t) {
              case U.PremiumSubscriptionSKUs.TIER_0:
                switch (l) {
                  case U.PremiumSubscriptionSKUs.TIER_1:
                    return B.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                  case U.PremiumSubscriptionSKUs.TIER_2:
                    return B.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                  default:
                    return s
                }
              case U.PremiumSubscriptionSKUs.TIER_1:
                switch (l) {
                  case U.PremiumSubscriptionSKUs.TIER_0:
                    return B.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                  case U.PremiumSubscriptionSKUs.TIER_2:
                    return B.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                  default:
                    return s
                }
              case U.PremiumSubscriptionSKUs.TIER_2:
                switch (l) {
                  case U.PremiumSubscriptionSKUs.TIER_0:
                  case U.PremiumSubscriptionSKUs.TIER_1:
                    return B.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                  case U.PremiumSubscriptionSKUs.TIER_2:
                    return e.interval === U.SubscriptionIntervalTypes.MONTH ? B.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format({
                      numFreeGuildSubscriptions: U.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
                    }) : s;
                  default:
                    return s
                }
              default:
                return s
            }
          }(ef, H)
        }), ((e, t, n, s) => {
          if (ed) return (0, i.jsx)(u.FormTitle, {
            children: B.default.Messages.GIFT_SUBSCRIPTION_SELECTION
          });
          if (!eD) return (0, i.jsx)("div", {
            className: k.selectPlanChooseTitle,
            children: B.default.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE
          });
          if (t) {
            let t = (null == e ? void 0 : e.trial_id) === U.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
            return (0, i.jsxs)("div", {
              children: [(0, i.jsx)(u.Text, {
                variant: "text-sm/normal",
                className: k.trialPlanSelectHeader,
                children: t ? B.default.Messages.REFERRAL_PROGRAM_PAYMENT_MODAL_COPY.format({
                  endDate: J
                }) : B.default.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format({
                  trialEnd: J,
                  trialPeriod: eG
                })
              }), (0, i.jsx)("hr", {
                className: k.planSelectSeparator
              })]
            })
          }
          return n && null != eU && null != ey && W === U.SubscriptionPlans.PREMIUM_MONTH_TIER_2 ? (0, i.jsxs)("div", {
            children: [(0, i.jsx)(u.Text, {
              variant: "text-sm/normal",
              className: k.trialPlanSelectHeader,
              children: B.default.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO_GENERIC.format({
                numMonths: null == eS ? void 0 : eS.discount.user_usage_limit,
                discountedPrice: (0, h.formatPrice)(ey.amount - eU, ey.currency),
                regularPrice: (0, h.formatPrice)(ey.amount, ey.currency)
              })
            }), (0, i.jsx)("hr", {
              className: k.planSelectSeparator
            })]
          }) : s && null != ew && null != eg && W === U.SubscriptionPlans.PREMIUM_YEAR_TIER_2 ? (0, i.jsxs)("div", {
            children: [(0, i.jsx)(u.Text, {
              variant: "text-sm/normal",
              className: k.trialPlanSelectHeader,
              children: B.default.Messages.BILLING_ANNUAL_DISCOUNT_PAYMENT_MODAL_INFO.format({
                discountedPrice: (0, h.formatPrice)(eg.amount - ew, eg.currency),
                regularPrice: (0, h.formatPrice)(eg.amount, eg.currency)
              })
            }), (0, i.jsx)("hr", {
              className: k.planSelectSeparator
            })]
          }) : void 0
        })(eI, eh, ex, eA), (0, i.jsx)("div", {
          ...eR,
          children: V.map(e => (0, i.jsx)(G.default, {
            planId: e,
            premiumSubscription: el ? null : null != j ? j : null,
            selectPlan: ev,
            selected: (null == eT ? void 0 : eT.id) === e,
            priceOptions: eN,
            shouldShowUpdatedPaymentModal: eD,
            isEligibleForDiscount: ex,
            discountAmountOff: eU,
            isEligibleForAnnualDiscount: eA,
            annualDiscountAmountOff: ew,
            isEligibleForTrial: eh
          }, e))
        }), (0, i.jsx)("div", {
          children: eM && null != eT && null != eb ? (0, i.jsxs)("div", {
            children: [(0, i.jsx)("div", {
              className: k.selectPlanDivider
            }), (0, i.jsx)(M.PremiumInvoiceTableTotalRow, {
              label: B.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
              value: (0, i.jsx)(R.default, {
                price: eb.amount,
                currency: eb.currency,
                intervalType: el ? null : eT.interval,
                intervalCount: eT.intervalCount,
                isPrepaidPaymentSource: ej
              }),
              className: k.selectPlanTotalRow
            })]
          }) : null
        }), eO && (0, i.jsx)(o.default, {
          message: B.default.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
            kunaPriceWithCurrency: (0, h.formatPrice)(7.5345 * eb.amount, F.CurrencyCodes.HRK)
          })
        }), !el && !eD && X && (0, i.jsx)(o.default, {
          message: B.default.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
            documentationLink: T.default.getArticleURL(w.HelpdeskArticles.LOCALIZED_PRICING)
          })
        }), em && el && (0, i.jsx)(m.default, {
          onClose: Q
        })]
      })]
    })
  })
}

function W(e) {
  let {
    onStepChange: t,
    selectedPlanId: n,
    paymentSources: s,
    onBackClick: l,
    showBackButton: r,
    planOptions: a,
    shouldRenderUpdatedPaymentModal: o = !1,
    isTrial: c
  } = e, {
    paymentSources: d,
    selectedPlan: m
  } = (0, p.usePaymentContext)(), {
    isGift: I
  } = (0, f.useGiftContext)();
  return s = null != s ? s : d, n = null != n ? n : null == m ? void 0 : m.id, (0, i.jsxs)(i.Fragment, {
    children: [null != n && a.includes(n) ? (0, i.jsx)(Y, {
      paymentSources: s,
      onStepChange: t,
      selectedPlanId: n,
      isGift: I,
      shouldRenderUpdatedPaymentModal: o,
      isTrial: c
    }) : (0, i.jsx)(u.Button, {
      disabled: !0,
      children: B.default.Messages.SELECT
    }), r ? (0, i.jsx)(O.default, {
      onClick: l
    }) : null]
  })
}

function Y(e) {
  let {
    onStepChange: t,
    selectedPlanId: n,
    isGift: s,
    paymentSources: l,
    shouldRenderUpdatedPaymentModal: r,
    isTrial: o
  } = e, c = (0, a.useStateFromStores)([P.default], () => P.default.getPremiumTypeSubscription()), {
    hasEntitlements: d
  } = (0, j.useSubscriptionEntitlements)(n, s), m = null != c && null != c.paymentSourceId || Object.keys(l).length > 0 || d && !o;
  var f = r ? B.default.Messages.NEXT : B.default.Messages.SELECT,
    p = I.Step.ADD_PAYMENT_STEPS;
  return m ? p = I.Step.REVIEW : (0, v.isDesktop)() && function() {
    let {
      enabled: e
    } = _.default.getCurrentConfig({
      location: "5f89bb_3"
    }, {
      autoTrackExposure: !0
    });
    return e
  }() && (p = I.Step.AWAITING_BROWSER_CHECKOUT, f = B.default.Messages.CONTINUE_IN_BROWSER), (0, i.jsx)(u.Button, {
    onClick: () => t(p),
    children: f
  })
}