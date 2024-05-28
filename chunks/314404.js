"use strict";
n.r(t), n.d(t, {
  PremiumSwitchPlanSelectBody: function() {
    return k
  },
  PremiumSwitchPlanSelectFooter: function() {
    return W
  }
}), n("47120");
var i = n("735250"),
  l = n("470079"),
  s = n("512722"),
  a = n.n(s),
  r = n("442837"),
  u = n("481060"),
  o = n("581308"),
  c = n("911969"),
  d = n("620037"),
  m = n("940824"),
  p = n("987209"),
  f = n("598"),
  S = n("409813"),
  I = n("737143"),
  _ = n("509545"),
  P = n("78839"),
  E = n("669079"),
  T = n("63063"),
  v = n("358085"),
  h = n("74538"),
  N = n("937615"),
  x = n("711459"),
  A = n("847903"),
  y = n("104494"),
  C = n("639119"),
  R = n("55610"),
  b = n("653798"),
  g = n("553797"),
  O = n("927699"),
  M = n("987716"),
  L = n("311821"),
  j = n("459965"),
  G = n("811616"),
  U = n("251660"),
  D = n("474936"),
  w = n("981631"),
  F = n("231338"),
  B = n("689938"),
  H = n("147305");

function k(e) {
  var t, n, s, S, I, P, v, L;
  let {
    premiumSubscription: j,
    skuId: k,
    selectedPlanId: W,
    setSelectedPlanId: Y,
    priceOptions: K,
    planOptions: V,
    eligibleForMultiMonthPlans: z,
    referralTrialOfferId: Z,
    subscriptionPeriodEnd: X,
    showTotal: J = !0,
    discountInvoiceItems: q,
    handleClose: Q
  } = e, {
    activeSubscription: $,
    setSelectedPlanId: ee,
    selectedSkuId: et,
    selectedPlan: en,
    priceOptions: ei,
    annualDiscountInvoicePreview: el
  } = (0, f.usePaymentContext)(), {
    isGift: es,
    giftRecipient: ea,
    selectedGiftStyle: er,
    customGiftMessage: eu,
    setCustomGiftMessage: eo
  } = (0, p.useGiftContext)(), ec = (0, E.getGiftExperience)(ea), ed = es && (0, E.shouldShowCustomGiftExperience)(ea), {
    confirmUpsellEnabled: em
  } = (0, d.default)({
    location: "PremiumSwitchPlanSelectBody"
  });
  k = null != k ? k : et, j = null != j ? j : $, a()(void 0 !== j, "should not be undefined");
  let [ep, ef] = (0, r.useStateFromStoresArray)([_.default], () => [null != j ? _.default.get(j.planId) : null, null != W ? _.default.get(W) : null]), eS = (0, C.usePremiumTrialOffer)(Z), eI = null == eS ? void 0 : eS.subscription_trial, e_ = (0, y.usePremiumDiscountOffer)(), eP = (0, y.usePremiumAnnualDiscountOffer)(), eE = null == e_ ? void 0 : null === (t = e_.discount) || void 0 === t ? void 0 : t.plan_ids, eT = null != ef ? ef : en, ev = l.useCallback(e => {
    null != Y ? Y(e) : ee(e)
  }, [Y, ee]), eh = null != K ? K : ei;
  a()(null != eh, "Price option has to be set");
  let eN = null != eS && (0, D.SubscriptionTrials)[eS.trial_id].skus.includes(k),
    ex = null != e_ && V.some(e => null == eE ? void 0 : eE.includes(e)) && null != e_.discount,
    eA = null == eS && (null == eP ? void 0 : eP.discount) != null && (null == el ? void 0 : el.invoiceItems) != null && V.some(e => {
      var t, n;
      return null == eP ? void 0 : null === (n = eP.discount) || void 0 === n ? void 0 : null === (t = n.plan_ids) || void 0 === t ? void 0 : t.includes(e)
    }),
    ey = (0, h.getPrice)(D.SubscriptionPlans.PREMIUM_MONTH_TIER_2, !1, es, eh),
    eC = (0, h.getPrice)(D.SubscriptionPlans.PREMIUM_YEAR_TIER_2, !1, es, eh);
  l.useEffect(() => {
    z && x.default.trackExposure({
      location: "5f89bb_1"
    })
  }, [z]);
  let eR = (null == eT ? void 0 : eT.id) != null && V.includes(eT.id);
  l.useEffect(() => {
    if (!eR) {
      if (null == ep || es) ev(V[0]);
      else if (null != ep) {
        let e = V.find(e => e !== ep.id);
        null != e && ev(e)
      }
    }
  }, [eR, es, V, ep, ev]);
  let eb = !ed && (es || !eN && !ex && !eA) && eR && J,
    eg = (0, u.useRadioGroup)(),
    eO = (null == eT ? void 0 : eT.id) != null ? (0, h.getPrice)(eT.id, !1, es, eh) : void 0,
    {
      ipCountryCode: eM
    } = (0, A.default)(),
    eL = "HR" === eM && null != eO && eO.currency === F.CurrencyCodes.EUR,
    ej = (0, h.isPrepaidPaymentSource)(eh.paymentSourceId),
    eG = (null == eI ? void 0 : eI.interval) === D.SubscriptionIntervalTypes.DAY ? B.default.Messages.BILLING_TRIAL_2_WEEK_PERIOD : B.default.Messages.BILLING_TRIAL_30_DAY_PERIOD,
    eU = !es && (ex || eA || null != eI && eN && null != X),
    eD = null == q ? void 0 : null === (S = q.find(e => e.subscriptionPlanId === D.SubscriptionPlans.PREMIUM_MONTH_TIER_2)) || void 0 === S ? void 0 : null === (s = S.discounts) || void 0 === s ? void 0 : null === (n = s.find(e => e.type === c.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === n ? void 0 : n.amount,
    ew = null == el ? void 0 : null === (L = el.invoiceItems) || void 0 === L ? void 0 : null === (v = L.find(e => e.subscriptionPlanId === D.SubscriptionPlans.PREMIUM_YEAR_TIER_2)) || void 0 === v ? void 0 : null === (P = v.discounts) || void 0 === P ? void 0 : null === (I = P.find(e => e.type === c.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === I ? void 0 : I.amount;
  return (0, i.jsx)(i.Fragment, {
    children: (0, i.jsxs)("div", {
      className: ed ? H.stepBodyCustomGift : H.stepBody,
      children: [(0, i.jsxs)("div", {
        className: ed ? H.bodyColumnMiddle : void 0,
        children: [(0, i.jsx)(R.default, {
          fromBoostCancelModal: !1,
          className: H.legacyPricingNotice
        }), ed && null != er && (0, i.jsx)(M.GiftAnimationOptions, {})]
      }), (0, i.jsxs)("div", {
        className: ed ? H.bodyColumnRight : void 0,
        children: [(0, i.jsx)(U.SendGiftToUser, {
          giftRecipient: ea
        }), (() => {
          if (ec === E.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != eo) return (0, i.jsx)(O.default, {
            sectionTitle: B.default.Messages.GIFT_OPTIONAL_MESSAGE,
            onTextChange: e => eo(e),
            pendingText: eu,
            currentText: eu
          })
        })(), null != ep && !es && null == ew && (0, i.jsx)("div", {
          className: H.bodyText,
          children: function(e, t) {
            let n = B.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
              i = B.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
              l = (() => {
                switch (e.interval) {
                  case D.SubscriptionIntervalTypes.YEAR:
                    return n;
                  case D.SubscriptionIntervalTypes.MONTH:
                  default:
                    return i
                }
              })(),
              s = e.skuId;
            switch (t) {
              case D.PremiumSubscriptionSKUs.TIER_0:
                switch (s) {
                  case D.PremiumSubscriptionSKUs.TIER_1:
                    return B.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                  case D.PremiumSubscriptionSKUs.TIER_2:
                    return B.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                  default:
                    return l
                }
              case D.PremiumSubscriptionSKUs.TIER_1:
                switch (s) {
                  case D.PremiumSubscriptionSKUs.TIER_0:
                    return B.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                  case D.PremiumSubscriptionSKUs.TIER_2:
                    return B.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                  default:
                    return l
                }
              case D.PremiumSubscriptionSKUs.TIER_2:
                switch (s) {
                  case D.PremiumSubscriptionSKUs.TIER_0:
                  case D.PremiumSubscriptionSKUs.TIER_1:
                    return B.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                  case D.PremiumSubscriptionSKUs.TIER_2:
                    return e.interval === D.SubscriptionIntervalTypes.MONTH ? B.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format({
                      numFreeGuildSubscriptions: D.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
                    }) : l;
                  default:
                    return l
                }
              default:
                return l
            }
          }(ep, k)
        }), ((e, t, n, l) => {
          if (ed) return (0, i.jsx)(u.FormTitle, {
            children: B.default.Messages.GIFT_SUBSCRIPTION_SELECTION
          });
          if (!eU) return (0, i.jsx)("div", {
            className: H.selectPlanChooseTitle,
            children: B.default.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE
          });
          if (t) {
            let t = (null == e ? void 0 : e.trial_id) === D.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
            return (0, i.jsxs)("div", {
              children: [(0, i.jsx)(u.Text, {
                variant: "text-sm/normal",
                className: H.trialPlanSelectHeader,
                children: t ? B.default.Messages.REFERRAL_PROGRAM_PAYMENT_MODAL_COPY.format({
                  endDate: X
                }) : B.default.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format({
                  trialEnd: X,
                  trialPeriod: eG
                })
              }), (0, i.jsx)("hr", {
                className: H.planSelectSeparator
              })]
            })
          }
          return n && null != eD && null != ey && W === D.SubscriptionPlans.PREMIUM_MONTH_TIER_2 ? (0, i.jsxs)("div", {
            children: [(0, i.jsx)(u.Text, {
              variant: "text-sm/normal",
              className: H.trialPlanSelectHeader,
              children: B.default.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO_GENERIC.format({
                numMonths: null == e_ ? void 0 : e_.discount.user_usage_limit,
                discountedPrice: (0, N.formatPrice)(ey.amount - eD, ey.currency),
                regularPrice: (0, N.formatPrice)(ey.amount, ey.currency)
              })
            }), (0, i.jsx)("hr", {
              className: H.planSelectSeparator
            })]
          }) : l && null != ew && null != eC && W === D.SubscriptionPlans.PREMIUM_YEAR_TIER_2 ? (0, i.jsxs)("div", {
            children: [(0, i.jsx)(u.Text, {
              variant: "text-sm/normal",
              className: H.trialPlanSelectHeader,
              children: B.default.Messages.BILLING_ANNUAL_DISCOUNT_PAYMENT_MODAL_INFO.format({
                discountedPrice: (0, N.formatPrice)(eC.amount - ew, eC.currency),
                regularPrice: (0, N.formatPrice)(eC.amount, eC.currency)
              })
            }), (0, i.jsx)("hr", {
              className: H.planSelectSeparator
            })]
          }) : void 0
        })(eS, eN, ex, eA), (0, i.jsx)("div", {
          ...eg,
          children: V.map(e => (0, i.jsx)(G.default, {
            planId: e,
            premiumSubscription: es ? null : null != j ? j : null,
            selectPlan: ev,
            selected: (null == eT ? void 0 : eT.id) === e,
            priceOptions: eh,
            shouldShowUpdatedPaymentModal: eU,
            isEligibleForDiscount: ex,
            discountAmountOff: eD,
            isEligibleForAnnualDiscount: eA,
            annualDiscountAmountOff: ew,
            isEligibleForTrial: eN
          }, e))
        }), (0, i.jsx)("div", {
          children: eb && null != eT && null != eO ? (0, i.jsxs)("div", {
            children: [(0, i.jsx)("div", {
              className: H.selectPlanDivider
            }), (0, i.jsx)(b.PremiumInvoiceTableTotalRow, {
              label: B.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
              value: (0, i.jsx)(g.default, {
                price: eO.amount,
                currency: eO.currency,
                intervalType: es ? null : eT.interval,
                intervalCount: eT.intervalCount,
                isPrepaidPaymentSource: ej
              }),
              className: H.selectPlanTotalRow
            })]
          }) : null
        }), eL && (0, i.jsx)(o.default, {
          message: B.default.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
            kunaPriceWithCurrency: (0, N.formatPrice)(7.5345 * eO.amount, F.CurrencyCodes.HRK)
          })
        }), !es && !eU && J && (0, i.jsx)(o.default, {
          message: B.default.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
            documentationLink: T.default.getArticleURL(w.HelpdeskArticles.LOCALIZED_PRICING)
          })
        }), em && es && (0, i.jsx)(m.default, {
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
    paymentSources: l,
    onBackClick: s,
    showBackButton: a,
    planOptions: r,
    shouldRenderUpdatedPaymentModal: o = !1,
    isTrial: c
  } = e, {
    paymentSources: d,
    selectedPlan: m
  } = (0, f.usePaymentContext)(), {
    isGift: S
  } = (0, p.useGiftContext)();
  return l = null != l ? l : d, n = null != n ? n : null == m ? void 0 : m.id, (0, i.jsxs)(i.Fragment, {
    children: [null != n && r.includes(n) ? (0, i.jsx)(Y, {
      paymentSources: l,
      onStepChange: t,
      selectedPlanId: n,
      isGift: S,
      shouldRenderUpdatedPaymentModal: o,
      isTrial: c
    }) : (0, i.jsx)(u.Button, {
      disabled: !0,
      children: B.default.Messages.SELECT
    }), a ? (0, i.jsx)(L.default, {
      onClick: s
    }) : null]
  })
}

function Y(e) {
  let {
    onStepChange: t,
    selectedPlanId: n,
    isGift: l,
    paymentSources: s,
    shouldRenderUpdatedPaymentModal: a,
    isTrial: o
  } = e, c = (0, r.useStateFromStores)([P.default], () => P.default.getPremiumTypeSubscription()), {
    hasEntitlements: d
  } = (0, j.useSubscriptionEntitlements)(n, l), m = null != c && null != c.paymentSourceId || Object.keys(s).length > 0 || d && !o;
  var p = a ? B.default.Messages.NEXT : B.default.Messages.SELECT,
    f = S.Step.ADD_PAYMENT_STEPS;
  return m ? f = S.Step.REVIEW : (0, v.isDesktop)() && function() {
    let {
      enabled: e
    } = I.default.getCurrentConfig({
      location: "5f89bb_3"
    }, {
      autoTrackExposure: !0
    });
    return e
  }() && (f = S.Step.AWAITING_BROWSER_CHECKOUT, p = B.default.Messages.CONTINUE_IN_BROWSER), (0, i.jsx)(u.Button, {
    onClick: () => t(f),
    children: p
  })
}