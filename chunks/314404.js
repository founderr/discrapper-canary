"use strict";
n.r(t), n.d(t, {
  PremiumSwitchPlanSelectBody: function() {
    return B
  },
  PremiumSwitchPlanSelectFooter: function() {
    return k
  }
}), n("47120");
var i = n("735250"),
  s = n("470079"),
  l = n("512722"),
  a = n.n(l),
  r = n("442837"),
  u = n("481060"),
  o = n("581308"),
  c = n("911969"),
  d = n("620037"),
  m = n("940824"),
  f = n("987209"),
  p = n("598"),
  S = n("409813"),
  _ = n("509545"),
  I = n("78839"),
  P = n("669079"),
  E = n("63063"),
  T = n("74538"),
  N = n("937615"),
  v = n("711459"),
  h = n("847903"),
  x = n("104494"),
  A = n("639119"),
  y = n("55610"),
  C = n("653798"),
  g = n("553797"),
  M = n("927699"),
  R = n("987716"),
  b = n("311821"),
  L = n("459965"),
  O = n("811616"),
  j = n("251660"),
  G = n("474936"),
  D = n("981631"),
  U = n("231338"),
  F = n("689938"),
  w = n("147305");

function B(e) {
  var t, n, l, S, I, b, L, B;
  let {
    premiumSubscription: k,
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
    giftRecipient: ea,
    selectedGiftStyle: er,
    customGiftMessage: eu,
    setCustomGiftMessage: eo
  } = (0, f.useGiftContext)(), ec = (0, P.getGiftExperience)(ea), ed = el && (0, P.shouldShowCustomGiftExperience)(ea), {
    confirmUpsellEnabled: em
  } = (0, d.default)({
    location: "PremiumSwitchPlanSelectBody"
  });
  H = null != H ? H : et, k = null != k ? k : $, a()(void 0 !== k, "should not be undefined");
  let [ef, ep] = (0, r.useStateFromStoresArray)([_.default], () => [null != k ? _.default.get(k.planId) : null, null != W ? _.default.get(W) : null]), eS = (0, A.usePremiumTrialOffer)(z), e_ = null == eS ? void 0 : eS.subscription_trial, eI = (0, x.usePremiumDiscountOffer)(), eP = (0, x.usePremiumAnnualDiscountOffer)(), eE = null == eI ? void 0 : null === (t = eI.discount) || void 0 === t ? void 0 : t.plan_ids, eT = null != ep ? ep : en, eN = s.useCallback(e => {
    null != Y ? Y(e) : ee(e)
  }, [Y, ee]), ev = null != K ? K : ei;
  a()(null != ev, "Price option has to be set");
  let eh = null != eS && (0, G.SubscriptionTrials)[eS.trial_id].skus.includes(H),
    ex = null != eI && V.some(e => null == eE ? void 0 : eE.includes(e)) && null != eI.discount,
    eA = null == eS && (null == eP ? void 0 : eP.discount) != null && (null == es ? void 0 : es.invoiceItems) != null && V.some(e => {
      var t, n;
      return null == eP ? void 0 : null === (n = eP.discount) || void 0 === n ? void 0 : null === (t = n.plan_ids) || void 0 === t ? void 0 : t.includes(e)
    }),
    ey = (0, T.getPrice)(G.SubscriptionPlans.PREMIUM_MONTH_TIER_2, !1, el, ev),
    eC = (0, T.getPrice)(G.SubscriptionPlans.PREMIUM_YEAR_TIER_2, !1, el, ev);
  s.useEffect(() => {
    Z && v.default.trackExposure({
      location: "5f89bb_1"
    })
  }, [Z]);
  let eg = (null == eT ? void 0 : eT.id) != null && V.includes(eT.id);
  s.useEffect(() => {
    if (!eg) {
      if (null == ef || el) eN(V[0]);
      else if (null != ef) {
        let e = V.find(e => e !== ef.id);
        null != e && eN(e)
      }
    }
  }, [eg, el, V, ef, eN]);
  let eM = !ed && (el || !eh && !ex && !eA) && eg && X,
    eR = (0, u.useRadioGroup)(),
    eb = (null == eT ? void 0 : eT.id) != null ? (0, T.getPrice)(eT.id, !1, el, ev) : void 0,
    {
      ipCountryCode: eL
    } = (0, h.default)(),
    eO = "HR" === eL && null != eb && eb.currency === U.CurrencyCodes.EUR,
    ej = (0, T.isPrepaidPaymentSource)(ev.paymentSourceId),
    eG = (null == e_ ? void 0 : e_.interval) === G.SubscriptionIntervalTypes.DAY ? F.default.Messages.BILLING_TRIAL_2_WEEK_PERIOD : F.default.Messages.BILLING_TRIAL_30_DAY_PERIOD,
    eD = !el && (ex || eA || null != e_ && eh && null != J),
    eU = null == q ? void 0 : null === (S = q.find(e => e.subscriptionPlanId === G.SubscriptionPlans.PREMIUM_MONTH_TIER_2)) || void 0 === S ? void 0 : null === (l = S.discounts) || void 0 === l ? void 0 : null === (n = l.find(e => e.type === c.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === n ? void 0 : n.amount,
    eF = null == es ? void 0 : null === (B = es.invoiceItems) || void 0 === B ? void 0 : null === (L = B.find(e => e.subscriptionPlanId === G.SubscriptionPlans.PREMIUM_YEAR_TIER_2)) || void 0 === L ? void 0 : null === (b = L.discounts) || void 0 === b ? void 0 : null === (I = b.find(e => e.type === c.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === I ? void 0 : I.amount;
  return (0, i.jsx)(i.Fragment, {
    children: (0, i.jsxs)("div", {
      className: ed ? w.stepBodyCustomGift : w.stepBody,
      children: [(0, i.jsxs)("div", {
        className: ed ? w.bodyColumnMiddle : void 0,
        children: [(0, i.jsx)(y.default, {
          fromBoostCancelModal: !1,
          className: w.legacyPricingNotice
        }), ed && null != er && (0, i.jsx)(R.GiftAnimationOptions, {})]
      }), (0, i.jsxs)("div", {
        className: ed ? w.bodyColumnRight : void 0,
        children: [(0, i.jsx)(j.SendGiftToUser, {
          giftRecipient: ea
        }), (() => {
          if (ec === P.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != eo) return (0, i.jsx)(M.default, {
            sectionTitle: F.default.Messages.GIFT_OPTIONAL_MESSAGE,
            onTextChange: e => eo(e),
            pendingText: eu,
            currentText: eu
          })
        })(), null != ef && !el && null == eF && (0, i.jsx)("div", {
          className: w.bodyText,
          children: function(e, t) {
            let n = F.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
              i = F.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
              s = (() => {
                switch (e.interval) {
                  case G.SubscriptionIntervalTypes.YEAR:
                    return n;
                  case G.SubscriptionIntervalTypes.MONTH:
                  default:
                    return i
                }
              })(),
              l = e.skuId;
            switch (t) {
              case G.PremiumSubscriptionSKUs.TIER_0:
                switch (l) {
                  case G.PremiumSubscriptionSKUs.TIER_1:
                    return F.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                  case G.PremiumSubscriptionSKUs.TIER_2:
                    return F.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                  default:
                    return s
                }
              case G.PremiumSubscriptionSKUs.TIER_1:
                switch (l) {
                  case G.PremiumSubscriptionSKUs.TIER_0:
                    return F.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                  case G.PremiumSubscriptionSKUs.TIER_2:
                    return F.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                  default:
                    return s
                }
              case G.PremiumSubscriptionSKUs.TIER_2:
                switch (l) {
                  case G.PremiumSubscriptionSKUs.TIER_0:
                  case G.PremiumSubscriptionSKUs.TIER_1:
                    return F.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                  case G.PremiumSubscriptionSKUs.TIER_2:
                    return e.interval === G.SubscriptionIntervalTypes.MONTH ? F.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format({
                      numFreeGuildSubscriptions: G.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
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
            children: F.default.Messages.GIFT_SUBSCRIPTION_SELECTION
          });
          if (!eD) return (0, i.jsx)("div", {
            className: w.selectPlanChooseTitle,
            children: F.default.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE
          });
          if (t) {
            let t = (null == e ? void 0 : e.trial_id) === G.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
            return (0, i.jsxs)("div", {
              children: [(0, i.jsx)(u.Text, {
                variant: "text-sm/normal",
                className: w.trialPlanSelectHeader,
                children: t ? F.default.Messages.REFERRAL_PROGRAM_PAYMENT_MODAL_COPY.format({
                  endDate: J
                }) : F.default.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format({
                  trialEnd: J,
                  trialPeriod: eG
                })
              }), (0, i.jsx)("hr", {
                className: w.planSelectSeparator
              })]
            })
          }
          return n && null != eU && null != ey && W === G.SubscriptionPlans.PREMIUM_MONTH_TIER_2 ? (0, i.jsxs)("div", {
            children: [(0, i.jsx)(u.Text, {
              variant: "text-sm/normal",
              className: w.trialPlanSelectHeader,
              children: F.default.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO_GENERIC.format({
                numMonths: null == eI ? void 0 : eI.discount.user_usage_limit,
                discountedPrice: (0, N.formatPrice)(ey.amount - eU, ey.currency),
                regularPrice: (0, N.formatPrice)(ey.amount, ey.currency)
              })
            }), (0, i.jsx)("hr", {
              className: w.planSelectSeparator
            })]
          }) : s && null != eF && null != eC && W === G.SubscriptionPlans.PREMIUM_YEAR_TIER_2 ? (0, i.jsxs)("div", {
            children: [(0, i.jsx)(u.Text, {
              variant: "text-sm/normal",
              className: w.trialPlanSelectHeader,
              children: F.default.Messages.BILLING_ANNUAL_DISCOUNT_PAYMENT_MODAL_INFO.format({
                discountedPrice: (0, N.formatPrice)(eC.amount - eF, eC.currency),
                regularPrice: (0, N.formatPrice)(eC.amount, eC.currency)
              })
            }), (0, i.jsx)("hr", {
              className: w.planSelectSeparator
            })]
          }) : void 0
        })(eS, eh, ex, eA), (0, i.jsx)("div", {
          ...eR,
          children: V.map(e => (0, i.jsx)(O.default, {
            planId: e,
            premiumSubscription: el ? null : null != k ? k : null,
            selectPlan: eN,
            selected: (null == eT ? void 0 : eT.id) === e,
            priceOptions: ev,
            shouldShowUpdatedPaymentModal: eD,
            isEligibleForDiscount: ex,
            discountAmountOff: eU,
            isEligibleForAnnualDiscount: eA,
            annualDiscountAmountOff: eF,
            isEligibleForTrial: eh
          }, e))
        }), (0, i.jsx)("div", {
          children: eM && null != eT && null != eb ? (0, i.jsxs)("div", {
            children: [(0, i.jsx)("div", {
              className: w.selectPlanDivider
            }), (0, i.jsx)(C.PremiumInvoiceTableTotalRow, {
              label: F.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
              value: (0, i.jsx)(g.default, {
                price: eb.amount,
                currency: eb.currency,
                intervalType: el ? null : eT.interval,
                intervalCount: eT.intervalCount,
                isPrepaidPaymentSource: ej
              }),
              className: w.selectPlanTotalRow
            })]
          }) : null
        }), eO && (0, i.jsx)(o.default, {
          message: F.default.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
            kunaPriceWithCurrency: (0, N.formatPrice)(7.5345 * eb.amount, U.CurrencyCodes.HRK)
          })
        }), !el && !eD && X && (0, i.jsx)(o.default, {
          message: F.default.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
            documentationLink: E.default.getArticleURL(D.HelpdeskArticles.LOCALIZED_PRICING)
          })
        }), em && el && (0, i.jsx)(m.default, {
          onClose: Q
        })]
      })]
    })
  })
}

function k(e) {
  let {
    onStepChange: t,
    selectedPlanId: n,
    paymentSources: s,
    onBackClick: l,
    showBackButton: a,
    planOptions: r,
    shouldRenderUpdatedPaymentModal: o = !1,
    isTrial: c
  } = e, {
    paymentSources: d,
    selectedPlan: m
  } = (0, p.usePaymentContext)(), {
    isGift: S
  } = (0, f.useGiftContext)();
  return s = null != s ? s : d, n = null != n ? n : null == m ? void 0 : m.id, (0, i.jsxs)(i.Fragment, {
    children: [null != n && r.includes(n) ? (0, i.jsx)(H, {
      paymentSources: s,
      onStepChange: t,
      selectedPlanId: n,
      isGift: S,
      shouldRenderUpdatedPaymentModal: o,
      isTrial: c
    }) : (0, i.jsx)(u.Button, {
      disabled: !0,
      children: F.default.Messages.SELECT
    }), a ? (0, i.jsx)(b.default, {
      onClick: l
    }) : null]
  })
}

function H(e) {
  let {
    onStepChange: t,
    selectedPlanId: n,
    isGift: s,
    paymentSources: l,
    shouldRenderUpdatedPaymentModal: a,
    isTrial: o
  } = e, c = (0, r.useStateFromStores)([I.default], () => I.default.getPremiumTypeSubscription()), {
    hasEntitlements: d
  } = (0, L.useSubscriptionEntitlements)(n, s), m = null != c && null != c.paymentSourceId || Object.keys(l).length > 0 || d && !o;
  var f = a ? F.default.Messages.NEXT : F.default.Messages.SELECT,
    p = S.Step.ADD_PAYMENT_STEPS;
  return m && (p = S.Step.REVIEW), (0, i.jsx)(u.Button, {
    onClick: () => t(p),
    children: f
  })
}