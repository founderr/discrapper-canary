"use strict";
n.r(t), n.d(t, {
  PremiumSwitchPlanSelectBody: function() {
    return W
  },
  PremiumSwitchPlanSelectFooter: function() {
    return Y
  }
}), n("47120");
var i = n("735250"),
  s = n("470079"),
  a = n("512722"),
  l = n.n(a),
  r = n("442837"),
  u = n("481060"),
  o = n("490504"),
  c = n("911969"),
  d = n("620037"),
  m = n("940824"),
  f = n("987209"),
  p = n("598"),
  _ = n("409813"),
  S = n("737143"),
  I = n("509545"),
  E = n("78839"),
  P = n("669079"),
  T = n("63063"),
  N = n("358085"),
  h = n("74538"),
  x = n("937615"),
  v = n("711459"),
  A = n("18376"),
  C = n("847903"),
  g = n("104494"),
  M = n("639119"),
  y = n("55610"),
  R = n("653798"),
  b = n("553797"),
  O = n("927699"),
  L = n("987716"),
  j = n("311821"),
  G = n("459965"),
  D = n("811616"),
  F = n("251660"),
  U = n("474936"),
  w = n("981631"),
  B = n("231338"),
  k = n("689938"),
  H = n("206059");

function W(e) {
  var t, n, a, _;
  let {
    premiumSubscription: S,
    skuId: E,
    selectedPlanId: N,
    setSelectedPlanId: A,
    priceOptions: j,
    planOptions: G,
    eligibleForMultiMonthPlans: W,
    referralTrialOfferId: Y,
    subscriptionPeriodEnd: K,
    showTotal: V = !0,
    discountInvoiceItems: Z,
    handleClose: z
  } = e, {
    activeSubscription: J,
    setSelectedPlanId: X,
    selectedSkuId: q,
    selectedPlan: Q,
    priceOptions: $
  } = (0, p.usePaymentContext)(), {
    isGift: ee,
    giftRecipient: et,
    selectedGiftStyle: en,
    customGiftMessage: ei,
    setCustomGiftMessage: es
  } = (0, f.useGiftContext)(), ea = (0, P.getGiftExperience)(et), el = ee && (0, P.shouldShowCustomGiftExperience)(et), {
    confirmUpsellEnabled: er
  } = (0, d.default)({
    location: "PremiumSwitchPlanSelectBody"
  });
  E = null != E ? E : q, S = null != S ? S : J, l()(void 0 !== S, "should not be undefined");
  let [eu, eo] = (0, r.useStateFromStoresArray)([I.default], () => [null != S ? I.default.get(S.planId) : null, null != N ? I.default.get(N) : null]), ec = (0, M.usePremiumTrialOffer)(Y), ed = null == ec ? void 0 : ec.subscription_trial, em = (0, g.usePremiumDiscountOffer)(), ef = null == em ? void 0 : null === (t = em.discount) || void 0 === t ? void 0 : t.plan_ids, ep = null != eo ? eo : Q, e_ = s.useCallback(e => {
    null != A ? A(e) : X(e)
  }, [A, X]), eS = null != j ? j : $;
  l()(null != eS, "Price option has to be set");
  let eI = null != ec && (0, U.SubscriptionTrials)[ec.trial_id].skus.includes(E),
    eE = null != em && G.some(e => null == ef ? void 0 : ef.includes(e)) && null != em.discount,
    eP = (0, h.getPrice)(U.SubscriptionPlans.PREMIUM_MONTH_TIER_2, !1, ee, eS);
  s.useEffect(() => {
    W && v.default.trackExposure({
      location: "5f89bb_1"
    })
  }, [W]);
  let eT = (null == ep ? void 0 : ep.id) != null && G.includes(ep.id);
  s.useEffect(() => {
    if (!eT) {
      if (null == eu || ee) e_(G[0]);
      else if (null != eu) {
        let e = G.find(e => e !== eu.id);
        null != e && e_(e)
      }
    }
  }, [eT, ee, G, eu, e_]);
  let eN = !el && (ee || !eI && !eE) && eT && V,
    eh = (0, u.useRadioGroup)(),
    ex = (null == ep ? void 0 : ep.id) != null ? (0, h.getPrice)(ep.id, !1, ee, eS) : void 0,
    {
      ipCountryCode: ev
    } = (0, C.default)(),
    eA = "HR" === ev && null != ex && ex.currency === B.CurrencyCodes.EUR,
    eC = (0, h.isPrepaidPaymentSource)(eS.paymentSourceId),
    eg = (null == ed ? void 0 : ed.interval) === U.SubscriptionIntervalTypes.DAY ? k.default.Messages.BILLING_TRIAL_2_WEEK_PERIOD : k.default.Messages.BILLING_TRIAL_30_DAY_PERIOD,
    eM = !ee && (eE || null != ed && eI && null != K),
    ey = null == Z ? void 0 : null === (_ = Z.find(e => e.subscriptionPlanId === U.SubscriptionPlans.PREMIUM_MONTH_TIER_2)) || void 0 === _ ? void 0 : null === (a = _.discounts) || void 0 === a ? void 0 : null === (n = a.find(e => e.type === c.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === n ? void 0 : n.amount;
  return (0, i.jsx)(i.Fragment, {
    children: (0, i.jsxs)("div", {
      className: el ? H.stepBodyCustomGift : H.stepBody,
      children: [(0, i.jsxs)("div", {
        className: el ? H.bodyColumnMiddle : void 0,
        children: [(0, i.jsx)(y.default, {
          fromBoostCancelModal: !1,
          className: H.legacyPricingNotice
        }), el && null != en && (0, i.jsx)(L.GiftAnimationOptions, {})]
      }), (0, i.jsxs)("div", {
        className: el ? H.bodyColumnRight : void 0,
        children: [(0, i.jsx)(F.SendGiftToUser, {
          giftRecipient: et
        }), (() => {
          if (ea === P.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != es) return (0, i.jsx)(O.default, {
            sectionTitle: k.default.Messages.GIFT_OPTIONAL_MESSAGE,
            onTextChange: e => es(e),
            pendingText: ei,
            currentText: ei
          })
        })(), null != eu && !ee && (0, i.jsx)("div", {
          className: H.bodyText,
          children: function(e, t) {
            let n = k.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
              i = k.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
              s = (() => {
                switch (e.interval) {
                  case U.SubscriptionIntervalTypes.YEAR:
                    return n;
                  case U.SubscriptionIntervalTypes.MONTH:
                  default:
                    return i
                }
              })(),
              a = e.skuId;
            switch (t) {
              case U.PremiumSubscriptionSKUs.TIER_0:
                switch (a) {
                  case U.PremiumSubscriptionSKUs.TIER_1:
                    return k.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                  case U.PremiumSubscriptionSKUs.TIER_2:
                    return k.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                  default:
                    return s
                }
              case U.PremiumSubscriptionSKUs.TIER_1:
                switch (a) {
                  case U.PremiumSubscriptionSKUs.TIER_0:
                    return k.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                  case U.PremiumSubscriptionSKUs.TIER_2:
                    return k.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                  default:
                    return s
                }
              case U.PremiumSubscriptionSKUs.TIER_2:
                switch (a) {
                  case U.PremiumSubscriptionSKUs.TIER_0:
                  case U.PremiumSubscriptionSKUs.TIER_1:
                    return k.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                  case U.PremiumSubscriptionSKUs.TIER_2:
                    return e.interval === U.SubscriptionIntervalTypes.MONTH ? k.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format({
                      numFreeGuildSubscriptions: U.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
                    }) : s;
                  default:
                    return s
                }
              default:
                return s
            }
          }(eu, E)
        }), ((e, t, n) => {
          if (el) return (0, i.jsx)(u.FormTitle, {
            children: k.default.Messages.GIFT_SUBSCRIPTION_SELECTION
          });
          if (!eM) return (0, i.jsx)("div", {
            className: H.selectPlanChooseTitle,
            children: k.default.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE
          });
          if (t) {
            let t = (null == e ? void 0 : e.trial_id) === U.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
            return (0, i.jsxs)("div", {
              children: [(0, i.jsx)(u.Text, {
                variant: "text-sm/normal",
                className: H.trialPlanSelectHeader,
                children: t ? k.default.Messages.REFERRAL_PROGRAM_PAYMENT_MODAL_COPY.format({
                  endDate: K
                }) : k.default.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format({
                  trialEnd: K,
                  trialPeriod: eg
                })
              }), (0, i.jsx)("hr", {
                className: H.planSelectSeparator
              })]
            })
          }
          if (n && null != ey && null != eP) return (0, i.jsxs)("div", {
            children: [(0, i.jsx)(u.Text, {
              variant: "text-sm/normal",
              className: H.trialPlanSelectHeader,
              children: k.default.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO_GENERIC.format({
                numMonths: null == em ? void 0 : em.discount.user_usage_limit,
                discountedPrice: (0, x.formatPrice)(eP.amount - ey, eP.currency),
                regularPrice: (0, x.formatPrice)(eP.amount, eP.currency)
              })
            }), (0, i.jsx)("hr", {
              className: H.planSelectSeparator
            })]
          })
        })(ec, eI, eE), (0, i.jsx)("div", {
          ...eh,
          children: G.map(e => (0, i.jsx)(D.default, {
            planId: e,
            premiumSubscription: ee ? null : null != S ? S : null,
            selectPlan: e_,
            selected: (null == ep ? void 0 : ep.id) === e,
            priceOptions: eS,
            shouldShowUpdatedPaymentModal: eM,
            isEligibleForDiscount: eE,
            discountAmountOff: ey
          }, e))
        }), (0, i.jsx)("div", {
          children: eN && null != ep && null != ex ? (0, i.jsxs)("div", {
            children: [(0, i.jsx)("div", {
              className: H.selectPlanDivider
            }), (0, i.jsx)(R.PremiumInvoiceTableTotalRow, {
              label: k.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
              value: (0, i.jsx)(b.default, {
                price: ex.amount,
                currency: ex.currency,
                intervalType: ee ? null : ep.interval,
                intervalCount: ep.intervalCount,
                isPrepaidPaymentSource: eC
              }),
              className: H.selectPlanTotalRow
            })]
          }) : null
        }), eA && (0, i.jsx)(o.default, {
          message: k.default.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
            kunaPriceWithCurrency: (0, x.formatPrice)(7.5345 * ex.amount, B.CurrencyCodes.HRK)
          })
        }), !ee && !eM && V && (0, i.jsx)(o.default, {
          message: k.default.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
            documentationLink: T.default.getArticleURL(w.HelpdeskArticles.LOCALIZED_PRICING)
          })
        }), er && ee && (0, i.jsx)(m.default, {
          onClose: z
        })]
      })]
    })
  })
}

function Y(e) {
  let {
    onStepChange: t,
    selectedPlanId: n,
    paymentSources: s,
    onBackClick: a,
    showBackButton: l,
    planOptions: r,
    shouldRenderUpdatedPaymentModal: o = !1,
    isTrial: c
  } = e, {
    paymentSources: d,
    selectedPlan: m
  } = (0, p.usePaymentContext)(), {
    isGift: _
  } = (0, f.useGiftContext)();
  return s = null != s ? s : d, n = null != n ? n : null == m ? void 0 : m.id, (0, i.jsxs)(i.Fragment, {
    children: [null != n && r.includes(n) ? (0, i.jsx)(K, {
      paymentSources: s,
      onStepChange: t,
      selectedPlanId: n,
      isGift: _,
      shouldRenderUpdatedPaymentModal: o,
      isTrial: c
    }) : (0, i.jsx)(u.Button, {
      disabled: !0,
      children: k.default.Messages.SELECT
    }), l ? (0, i.jsx)(j.default, {
      onClick: a
    }) : null]
  })
}

function K(e) {
  let {
    onStepChange: t,
    selectedPlanId: n,
    isGift: s,
    paymentSources: a,
    shouldRenderUpdatedPaymentModal: l,
    isTrial: o
  } = e, c = (0, r.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()), {
    hasEntitlements: d
  } = (0, G.useSubscriptionEntitlements)(n, s), m = null != c && null != c.paymentSourceId || Object.keys(a).length > 0 || d && !o;
  var f = l ? k.default.Messages.NEXT : k.default.Messages.SELECT,
    p = _.Step.ADD_PAYMENT_STEPS;
  return m ? p = _.Step.REVIEW : (0, N.isDesktop)() && function() {
    let {
      experiment: e
    } = A.default.getCurrentConfig({
      location: "5f89bb_2"
    });
    if (e === A.CheckoutV2ChildExperiments.BROWSER_AUTOFILL) {
      let {
        enabled: e
      } = S.default.getCurrentConfig({
        location: "5f89bb_3"
      }, {
        autoTrackExposure: !0
      });
      return e
    }
    return !1
  }() && (p = _.Step.AWAITING_BROWSER_CHECKOUT, f = k.default.Messages.CONTINUE_IN_BROWSER), (0, i.jsx)(u.Button, {
    onClick: () => t(p),
    children: f
  })
}