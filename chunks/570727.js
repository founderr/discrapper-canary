"use strict";
n.r(t), n.d(t, {
  PremiumSwitchPlanSelectBody: function() {
    return w
  },
  PremiumSwitchPlanSelectFooter: function() {
    return W
  }
}), n("222007");
var s = n("37983"),
  r = n("884691"),
  a = n("627445"),
  l = n.n(a),
  i = n("446674"),
  u = n("77078"),
  c = n("405932"),
  o = n("798609"),
  d = n("837148"),
  f = n("903494"),
  m = n("635357"),
  _ = n("642906"),
  E = n("85336"),
  p = n("883558"),
  I = n("10514"),
  S = n("521012"),
  N = n("659632"),
  P = n("701909"),
  T = n("773336"),
  C = n("719923"),
  A = n("153160"),
  O = n("916187"),
  h = n("968532"),
  R = n("15733"),
  M = n("154889"),
  g = n("917247"),
  x = n("279171"),
  v = n("883662"),
  y = n("824734"),
  L = n("705820"),
  b = n("889554"),
  j = n("177998"),
  G = n("661128"),
  D = n("26785"),
  U = n("617223"),
  B = n("646718"),
  F = n("49111"),
  k = n("843455"),
  Y = n("782340"),
  H = n("291646");

function w(e) {
  var t, n, a, E, p, S;
  let {
    premiumSubscription: T,
    skuId: h,
    selectedPlanId: j,
    setSelectedPlanId: G,
    priceOptions: w,
    planOptions: W,
    eligibleForMultiMonthPlans: Z,
    referralTrialOfferId: K,
    subscriptionPeriodEnd: V,
    showTotal: z = !0,
    discountInvoiceItems: J,
    handleClose: X
  } = e, {
    activeSubscription: q,
    setSelectedPlanId: Q,
    selectedSkuId: $,
    selectedPlan: ee,
    priceOptions: et
  } = (0, _.usePaymentContext)(), {
    isGift: en,
    giftRecipient: es,
    selectedGiftStyle: er,
    customGiftMessage: ea,
    setCustomGiftMessage: el
  } = (0, m.useGiftContext)(), ei = (0, N.getGiftExperience)(es), eu = en && (0, N.shouldShowCustomGiftExperience)(es), {
    confirmUpsellEnabled: ec
  } = (0, d.default)({
    location: "PremiumSwitchPlanSelectBody"
  });
  h = null != h ? h : $, l(void 0 !== (T = null != T ? T : q), "should not be undefined");
  let [eo, ed] = (0, i.useStateFromStoresArray)([I.default], () => [null != T ? I.default.get(T.planId) : null, null != j ? I.default.get(j) : null]), ef = (0, g.usePremiumTrialOffer)(K), em = null == ef ? void 0 : ef.subscription_trial, e_ = (0, M.usePremiumDiscountOffer)(), eE = null == e_ ? void 0 : null === (t = e_.discount) || void 0 === t ? void 0 : t.plan_ids, ep = null != ed ? ed : ee, eI = r.useCallback(e => {
    null != G ? G(e) : Q(e)
  }, [G, Q]), eS = null != w ? w : et;
  l(null != eS, "Price option has to be set");
  let eN = null != ef && (0, B.SubscriptionTrials)[ef.trial_id].skus.includes(h),
    eP = null != e_ && W.some(e => null == eE ? void 0 : eE.includes(e)),
    eT = (0, C.getPrice)(B.SubscriptionPlans.PREMIUM_MONTH_TIER_2, !1, en, eS);
  r.useEffect(() => {
    Z && O.default.trackExposure({
      location: "5f89bb_1"
    })
  }, [Z]);
  let eC = (null == ep ? void 0 : ep.id) != null && W.includes(ep.id);
  r.useEffect(() => {
    if (!eC) {
      if (null == eo || en) eI(W[0]);
      else if (null != eo) {
        let e = W.find(e => e !== eo.id);
        null != e && eI(e)
      }
    }
  }, [eC, en, W, eo, eI]);
  let eA = !eu && (en || !eN && !eP) && eC && z,
    eO = (0, u.useRadioGroup)(),
    eh = (null == ep ? void 0 : ep.id) != null ? (0, C.getPrice)(ep.id, !1, en, eS) : void 0,
    {
      ipCountryCode: eR
    } = (0, R.default)(),
    eM = "HR" === eR && null != eh && eh.currency === k.CurrencyCodes.EUR,
    eg = (0, C.isPrepaidPaymentSource)(eS.paymentSourceId),
    ex = (null == em ? void 0 : em.interval) === B.SubscriptionIntervalTypes.DAY ? Y.default.Messages.BILLING_TRIAL_2_WEEK_PERIOD : Y.default.Messages.BILLING_TRIAL_30_DAY_PERIOD,
    ev = !en && (eP || null != em && eN && null != V),
    ey = null == J ? void 0 : null === (E = J.find(e => e.subscriptionPlanId === B.SubscriptionPlans.PREMIUM_MONTH_TIER_2)) || void 0 === E ? void 0 : null === (a = E.discounts) || void 0 === a ? void 0 : null === (n = a.find(e => e.type === o.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === n ? void 0 : n.amount;
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)("div", {
      className: eu ? H.stepBodyCustomGift : H.stepBody,
      children: [(0, s.jsxs)("div", {
        className: eu ? H.bodyColumnMiddle : void 0,
        children: [(0, s.jsx)(x.default, {
          fromBoostCancelModal: !1,
          className: H.legacyPricingNotice
        }), eu && null != er && (0, s.jsx)(b.GiftAnimationOptions, {})]
      }), (0, s.jsxs)("div", {
        className: eu ? H.bodyColumnRight : void 0,
        children: [(0, s.jsx)(U.SendGiftToUser, {
          giftRecipient: es
        }), (() => {
          if (ei === N.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != el) return (0, s.jsx)(L.default, {
            sectionTitle: Y.default.Messages.GIFT_OPTIONAL_MESSAGE,
            onTextChange: e => el(e),
            pendingText: ea,
            currentText: ea
          })
        })(), null != eo && !en && (0, s.jsx)("div", {
          className: H.bodyText,
          children: function(e, t) {
            let n = Y.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
              s = Y.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
              r = (() => {
                switch (e.interval) {
                  case B.SubscriptionIntervalTypes.YEAR:
                    return n;
                  case B.SubscriptionIntervalTypes.MONTH:
                  default:
                    return s
                }
              })(),
              a = e.skuId;
            switch (t) {
              case B.PremiumSubscriptionSKUs.TIER_0:
                switch (a) {
                  case B.PremiumSubscriptionSKUs.TIER_1:
                    return Y.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                  case B.PremiumSubscriptionSKUs.TIER_2:
                    return Y.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                  default:
                    return r
                }
              case B.PremiumSubscriptionSKUs.TIER_1:
                switch (a) {
                  case B.PremiumSubscriptionSKUs.TIER_0:
                    return Y.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                  case B.PremiumSubscriptionSKUs.TIER_2:
                    return Y.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                  default:
                    return r
                }
              case B.PremiumSubscriptionSKUs.TIER_2:
                switch (a) {
                  case B.PremiumSubscriptionSKUs.TIER_0:
                  case B.PremiumSubscriptionSKUs.TIER_1:
                    return Y.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                  case B.PremiumSubscriptionSKUs.TIER_2:
                    return e.interval === B.SubscriptionIntervalTypes.MONTH ? Y.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format({
                      numFreeGuildSubscriptions: B.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
                    }) : r;
                  default:
                    return r
                }
              default:
                return r
            }
          }(eo, h)
        }), (p = eN, S = eP, eu ? (0, s.jsx)(u.FormTitle, {
          children: Y.default.Messages.GIFT_SUBSCRIPTION_SELECTION
        }) : ev ? p ? (0, s.jsxs)("div", {
          children: [(0, s.jsx)(u.Text, {
            variant: "text-sm/normal",
            className: H.trialPlanSelectHeader,
            children: Y.default.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format({
              trialEnd: V,
              trialPeriod: ex
            })
          }), (0, s.jsx)("hr", {
            className: H.planSelectSeparator
          })]
        }) : S && null != ey && null != eT ? (0, s.jsxs)("div", {
          children: [(0, s.jsx)(u.Text, {
            variant: "text-sm/normal",
            className: H.trialPlanSelectHeader,
            children: Y.default.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO.format({
              discountedPrice: (0, A.formatPrice)(eT.amount - ey, eT.currency),
              regularPrice: (0, A.formatPrice)(eT.amount, eT.currency)
            })
          }), (0, s.jsx)("hr", {
            className: H.planSelectSeparator
          })]
        }) : void 0 : (0, s.jsx)("div", {
          className: H.selectPlanChooseTitle,
          children: Y.default.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE
        })), (0, s.jsx)("div", {
          ...eO,
          children: W.map(e => (0, s.jsx)(D.default, {
            planId: e,
            premiumSubscription: en ? null : null != T ? T : null,
            selectPlan: eI,
            selected: (null == ep ? void 0 : ep.id) === e,
            priceOptions: eS,
            shouldShowUpdatedPaymentModal: ev,
            isEligibleForDiscount: eP,
            discountAmountOff: ey
          }, e))
        }), (0, s.jsx)("div", {
          children: eA && null != ep && null != eh ? (0, s.jsxs)("div", {
            children: [(0, s.jsx)("div", {
              className: H.selectPlanDivider
            }), (0, s.jsx)(v.PremiumInvoiceTableTotalRow, {
              label: Y.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
              value: (0, s.jsx)(y.default, {
                price: eh.amount,
                currency: eh.currency,
                intervalType: en ? null : ep.interval,
                intervalCount: ep.intervalCount,
                isPrepaidPaymentSource: eg
              }),
              className: H.selectPlanTotalRow
            })]
          }) : null
        }), eM && (0, s.jsx)(c.default, {
          message: Y.default.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
            kunaPriceWithCurrency: (0, A.formatPrice)(7.5345 * eh.amount, k.CurrencyCodes.HRK)
          })
        }), !en && !ev && z && (0, s.jsx)(c.default, {
          message: Y.default.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
            documentationLink: P.default.getArticleURL(F.HelpdeskArticles.LOCALIZED_PRICING)
          })
        }), ec && en && (0, s.jsx)(f.default, {
          onClose: X
        })]
      })]
    })
  })
}

function W(e) {
  let {
    onStepChange: t,
    selectedPlanId: n,
    paymentSources: r,
    onBackClick: a,
    showBackButton: l,
    planOptions: i,
    shouldRenderUpdatedPaymentModal: c = !1,
    isTrial: o
  } = e, {
    paymentSources: d,
    selectedPlan: f
  } = (0, _.usePaymentContext)(), {
    isGift: E
  } = (0, m.useGiftContext)();
  return r = null != r ? r : d, n = null != n ? n : null == f ? void 0 : f.id, (0, s.jsxs)(s.Fragment, {
    children: [null != n && i.includes(n) ? (0, s.jsx)(Z, {
      paymentSources: r,
      onStepChange: t,
      selectedPlanId: n,
      isGift: E,
      shouldRenderUpdatedPaymentModal: c,
      isTrial: o
    }) : (0, s.jsx)(u.Button, {
      disabled: !0,
      children: Y.default.Messages.SELECT
    }), l ? (0, s.jsx)(j.default, {
      onClick: a
    }) : null]
  })
}

function Z(e) {
  let {
    onStepChange: t,
    selectedPlanId: n,
    isGift: r,
    paymentSources: a,
    shouldRenderUpdatedPaymentModal: l,
    isTrial: c
  } = e, o = (0, i.useStateFromStores)([S.default], () => S.default.getPremiumTypeSubscription()), {
    hasEntitlements: d
  } = (0, G.useSubscriptionEntitlements)(n, r), f = null != o && null != o.paymentSourceId || Object.keys(a).length > 0 || d && !c;
  var m = l ? Y.default.Messages.NEXT : Y.default.Messages.SELECT,
    _ = E.Step.ADD_PAYMENT_STEPS;
  return f ? _ = E.Step.REVIEW : (0, T.isDesktop)() && function() {
    let {
      experiment: e
    } = h.default.getCurrentConfig({
      location: "5f89bb_2"
    });
    if (e === h.CheckoutV2ChildExperiments.BROWSER_AUTOFILL) {
      let {
        enabled: e
      } = p.default.getCurrentConfig({
        location: "5f89bb_3"
      }, {
        autoTrackExposure: !0
      });
      return e
    }
    return !1
  }() && (_ = E.Step.AWAITING_BROWSER_CHECKOUT, m = Y.default.Messages.CONTINUE_IN_BROWSER), (0, s.jsx)(u.Button, {
    onClick: () => t(_),
    children: m
  })
}