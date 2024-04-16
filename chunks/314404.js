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
  a = n("512722"),
  r = n.n(a),
  l = n("442837"),
  u = n("481060"),
  o = n("581308"),
  c = n("911969"),
  d = n("620037"),
  m = n("940824"),
  f = n("987209"),
  p = n("598"),
  S = n("409813"),
  _ = n("737143"),
  I = n("509545"),
  E = n("78839"),
  P = n("669079"),
  T = n("63063"),
  N = n("358085"),
  h = n("74538"),
  v = n("937615"),
  x = n("711459"),
  A = n("847903"),
  C = n("104494"),
  g = n("639119"),
  y = n("55610"),
  M = n("653798"),
  R = n("553797"),
  b = n("927699"),
  L = n("987716"),
  O = n("311821"),
  j = n("459965"),
  G = n("811616"),
  D = n("251660"),
  U = n("474936"),
  F = n("981631"),
  w = n("231338"),
  B = n("689938"),
  k = n("206059");

function H(e) {
  var t, n, a, S;
  let {
    premiumSubscription: _,
    skuId: E,
    selectedPlanId: N,
    setSelectedPlanId: O,
    priceOptions: j,
    planOptions: H,
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
  } = (0, f.useGiftContext)(), ea = (0, P.getGiftExperience)(et), er = ee && (0, P.shouldShowCustomGiftExperience)(et), {
    confirmUpsellEnabled: el
  } = (0, d.default)({
    location: "PremiumSwitchPlanSelectBody"
  });
  E = null != E ? E : q, _ = null != _ ? _ : J, r()(void 0 !== _, "should not be undefined");
  let [eu, eo] = (0, l.useStateFromStoresArray)([I.default], () => [null != _ ? I.default.get(_.planId) : null, null != N ? I.default.get(N) : null]), ec = (0, g.usePremiumTrialOffer)(Y), ed = null == ec ? void 0 : ec.subscription_trial, em = (0, C.usePremiumDiscountOffer)(), ef = null == em ? void 0 : null === (t = em.discount) || void 0 === t ? void 0 : t.plan_ids, ep = null != eo ? eo : Q, eS = s.useCallback(e => {
    null != O ? O(e) : X(e)
  }, [O, X]), e_ = null != j ? j : $;
  r()(null != e_, "Price option has to be set");
  let eI = null != ec && (0, U.SubscriptionTrials)[ec.trial_id].skus.includes(E),
    eE = null != em && H.some(e => null == ef ? void 0 : ef.includes(e)) && null != em.discount,
    eP = (0, h.getPrice)(U.SubscriptionPlans.PREMIUM_MONTH_TIER_2, !1, ee, e_);
  s.useEffect(() => {
    W && x.default.trackExposure({
      location: "5f89bb_1"
    })
  }, [W]);
  let eT = (null == ep ? void 0 : ep.id) != null && H.includes(ep.id);
  s.useEffect(() => {
    if (!eT) {
      if (null == eu || ee) eS(H[0]);
      else if (null != eu) {
        let e = H.find(e => e !== eu.id);
        null != e && eS(e)
      }
    }
  }, [eT, ee, H, eu, eS]);
  let eN = !er && (ee || !eI && !eE) && eT && V,
    eh = (0, u.useRadioGroup)(),
    ev = (null == ep ? void 0 : ep.id) != null ? (0, h.getPrice)(ep.id, !1, ee, e_) : void 0,
    {
      ipCountryCode: ex
    } = (0, A.default)(),
    eA = "HR" === ex && null != ev && ev.currency === w.CurrencyCodes.EUR,
    eC = (0, h.isPrepaidPaymentSource)(e_.paymentSourceId),
    eg = (null == ed ? void 0 : ed.interval) === U.SubscriptionIntervalTypes.DAY ? B.default.Messages.BILLING_TRIAL_2_WEEK_PERIOD : B.default.Messages.BILLING_TRIAL_30_DAY_PERIOD,
    ey = !ee && (eE || null != ed && eI && null != K),
    eM = null == Z ? void 0 : null === (S = Z.find(e => e.subscriptionPlanId === U.SubscriptionPlans.PREMIUM_MONTH_TIER_2)) || void 0 === S ? void 0 : null === (a = S.discounts) || void 0 === a ? void 0 : null === (n = a.find(e => e.type === c.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === n ? void 0 : n.amount;
  return (0, i.jsx)(i.Fragment, {
    children: (0, i.jsxs)("div", {
      className: er ? k.stepBodyCustomGift : k.stepBody,
      children: [(0, i.jsxs)("div", {
        className: er ? k.bodyColumnMiddle : void 0,
        children: [(0, i.jsx)(y.default, {
          fromBoostCancelModal: !1,
          className: k.legacyPricingNotice
        }), er && null != en && (0, i.jsx)(L.GiftAnimationOptions, {})]
      }), (0, i.jsxs)("div", {
        className: er ? k.bodyColumnRight : void 0,
        children: [(0, i.jsx)(D.SendGiftToUser, {
          giftRecipient: et
        }), (() => {
          if (ea === P.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != es) return (0, i.jsx)(b.default, {
            sectionTitle: B.default.Messages.GIFT_OPTIONAL_MESSAGE,
            onTextChange: e => es(e),
            pendingText: ei,
            currentText: ei
          })
        })(), null != eu && !ee && (0, i.jsx)("div", {
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
              a = e.skuId;
            switch (t) {
              case U.PremiumSubscriptionSKUs.TIER_0:
                switch (a) {
                  case U.PremiumSubscriptionSKUs.TIER_1:
                    return B.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                  case U.PremiumSubscriptionSKUs.TIER_2:
                    return B.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                  default:
                    return s
                }
              case U.PremiumSubscriptionSKUs.TIER_1:
                switch (a) {
                  case U.PremiumSubscriptionSKUs.TIER_0:
                    return B.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                  case U.PremiumSubscriptionSKUs.TIER_2:
                    return B.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                  default:
                    return s
                }
              case U.PremiumSubscriptionSKUs.TIER_2:
                switch (a) {
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
          }(eu, E)
        }), ((e, t, n) => {
          if (er) return (0, i.jsx)(u.FormTitle, {
            children: B.default.Messages.GIFT_SUBSCRIPTION_SELECTION
          });
          if (!ey) return (0, i.jsx)("div", {
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
                  endDate: K
                }) : B.default.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format({
                  trialEnd: K,
                  trialPeriod: eg
                })
              }), (0, i.jsx)("hr", {
                className: k.planSelectSeparator
              })]
            })
          }
          if (n && null != eM && null != eP) return (0, i.jsxs)("div", {
            children: [(0, i.jsx)(u.Text, {
              variant: "text-sm/normal",
              className: k.trialPlanSelectHeader,
              children: B.default.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO_GENERIC.format({
                numMonths: null == em ? void 0 : em.discount.user_usage_limit,
                discountedPrice: (0, v.formatPrice)(eP.amount - eM, eP.currency),
                regularPrice: (0, v.formatPrice)(eP.amount, eP.currency)
              })
            }), (0, i.jsx)("hr", {
              className: k.planSelectSeparator
            })]
          })
        })(ec, eI, eE), (0, i.jsx)("div", {
          ...eh,
          children: H.map(e => (0, i.jsx)(G.default, {
            planId: e,
            premiumSubscription: ee ? null : null != _ ? _ : null,
            selectPlan: eS,
            selected: (null == ep ? void 0 : ep.id) === e,
            priceOptions: e_,
            shouldShowUpdatedPaymentModal: ey,
            isEligibleForDiscount: eE,
            discountAmountOff: eM
          }, e))
        }), (0, i.jsx)("div", {
          children: eN && null != ep && null != ev ? (0, i.jsxs)("div", {
            children: [(0, i.jsx)("div", {
              className: k.selectPlanDivider
            }), (0, i.jsx)(M.PremiumInvoiceTableTotalRow, {
              label: B.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
              value: (0, i.jsx)(R.default, {
                price: ev.amount,
                currency: ev.currency,
                intervalType: ee ? null : ep.interval,
                intervalCount: ep.intervalCount,
                isPrepaidPaymentSource: eC
              }),
              className: k.selectPlanTotalRow
            })]
          }) : null
        }), eA && (0, i.jsx)(o.default, {
          message: B.default.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
            kunaPriceWithCurrency: (0, v.formatPrice)(7.5345 * ev.amount, w.CurrencyCodes.HRK)
          })
        }), !ee && !ey && V && (0, i.jsx)(o.default, {
          message: B.default.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
            documentationLink: T.default.getArticleURL(F.HelpdeskArticles.LOCALIZED_PRICING)
          })
        }), el && ee && (0, i.jsx)(m.default, {
          onClose: z
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
    onBackClick: a,
    showBackButton: r,
    planOptions: l,
    shouldRenderUpdatedPaymentModal: o = !1,
    isTrial: c
  } = e, {
    paymentSources: d,
    selectedPlan: m
  } = (0, p.usePaymentContext)(), {
    isGift: S
  } = (0, f.useGiftContext)();
  return s = null != s ? s : d, n = null != n ? n : null == m ? void 0 : m.id, (0, i.jsxs)(i.Fragment, {
    children: [null != n && l.includes(n) ? (0, i.jsx)(Y, {
      paymentSources: s,
      onStepChange: t,
      selectedPlanId: n,
      isGift: S,
      shouldRenderUpdatedPaymentModal: o,
      isTrial: c
    }) : (0, i.jsx)(u.Button, {
      disabled: !0,
      children: B.default.Messages.SELECT
    }), r ? (0, i.jsx)(O.default, {
      onClick: a
    }) : null]
  })
}

function Y(e) {
  let {
    onStepChange: t,
    selectedPlanId: n,
    isGift: s,
    paymentSources: a,
    shouldRenderUpdatedPaymentModal: r,
    isTrial: o
  } = e, c = (0, l.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()), {
    hasEntitlements: d
  } = (0, j.useSubscriptionEntitlements)(n, s), m = null != c && null != c.paymentSourceId || Object.keys(a).length > 0 || d && !o;
  var f = r ? B.default.Messages.NEXT : B.default.Messages.SELECT,
    p = S.Step.ADD_PAYMENT_STEPS;
  return m ? p = S.Step.REVIEW : (0, N.isDesktop)() && function() {
    let {
      enabled: e
    } = _.default.getCurrentConfig({
      location: "5f89bb_3"
    }, {
      autoTrackExposure: !0
    });
    return e
  }() && (p = S.Step.AWAITING_BROWSER_CHECKOUT, f = B.default.Messages.CONTINUE_IN_BROWSER), (0, i.jsx)(u.Button, {
    onClick: () => t(p),
    children: f
  })
}