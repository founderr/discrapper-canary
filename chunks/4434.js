"use strict";
t.r(n), t.d(n, {
  GuildBoostingConfirmation: function() {
    return en
  },
  GuildBoostingPlanSelect: function() {
    return z
  },
  GuildBoostingReview: function() {
    return ee
  }
}), t("653041"), t("47120"), t("724458");
var i = t("735250"),
  a = t("470079"),
  l = t("120356"),
  s = t.n(l),
  r = t("512722"),
  u = t.n(r),
  o = t("742280"),
  c = t("442837"),
  d = t("692547"),
  I = t("481060"),
  S = t("224550"),
  m = t("581308"),
  _ = t("275850"),
  P = t("672971"),
  p = t("100527"),
  T = t("906732"),
  f = t("374649"),
  E = t("591548"),
  N = t("847903"),
  U = t("639119"),
  R = t("53900"),
  C = t("653798"),
  L = t("553797"),
  O = t("741245"),
  v = t("314182"),
  A = t("42818"),
  M = t("900683"),
  y = t("706454"),
  g = t("430824"),
  D = t("246946"),
  x = t("594174"),
  b = t("351402"),
  G = t("853872"),
  h = t("509545"),
  j = t("672752"),
  B = t("300395"),
  H = t("709586"),
  w = t("759231"),
  F = t("267642"),
  W = t("63063"),
  k = t("930153"),
  Y = t("74538"),
  V = t("937615"),
  K = t("588797"),
  q = t("981631"),
  J = t("474936"),
  Q = t("231338"),
  X = t("689938"),
  Z = t("404307");

function z(e) {
  var n, t;
  let {
    guildId: a,
    premiumSubscriptionPlan: l,
    numGuildBoosts: r,
    setNumGuildBoosts: o,
    setForceDisableSubmitButton: S,
    premiumSubscription: _,
    onClickPremiumSubscriptionLink: P,
    existingAvailableSlots: E = [],
    priceOptions: C
  } = e, O = (0, R.default)(), v = l.interval, A = l.intervalCount, D = (0, c.useStateFromStores)([h.default], () => h.default.getForSkuAndInterval((0, Y.castPremiumSubscriptionAsSkuId)(J.PremiumSubscriptionSKUs.GUILD), v, A)), b = (0, c.useStateFromStores)([x.default], () => x.default.getCurrentUser()), G = (0, c.useStateFromStores)([g.default], () => g.default.getGuild(a), [a]);
  u()(null != D, "Missing guildBoostingSubscriptionPlan"), u()(null != G, "Unknown guild: ".concat(a));
  let B = [{
      planId: D.id,
      quantity: 1
    }],
    z = null == _ ? void 0 : _.items.find(e => e.planId === J.SubscriptionPlans.PREMIUM_MONTH_TIER_2 || e.planId === J.SubscriptionPlans.PREMIUM_YEAR_TIER_2);
  null != z && B.push(z);
  let $ = null == _ ? void 0 : _.items.find(e => e.planId === J.SubscriptionPlans.PREMIUM_MONTH_GUILD || e.planId === J.SubscriptionPlans.PREMIUM_YEAR_GUILD),
    {
      enabled: ee
    } = K.default.useExperiment({
      location: "32b64a_1"
    }),
    en = !ee || null == O || !J.LegacyPricingCountries.has(O) || null == $,
    {
      analyticsLocations: et
    } = (0, T.default)(),
    [ei, ea] = (0, f.useSubscriptionInvoicePreview)({
      subscriptionId: null == _ ? void 0 : _.id,
      items: B,
      renewal: !0,
      paymentSourceId: null == _ ? void 0 : _.paymentSourceId,
      currency: C.currency,
      preventFetch: en,
      analyticsLocations: et,
      analyticsLocation: p.default.GUILD_BOOSTING_PLAN_SELECT
    }),
    el = !en && null == ei && null == ea,
    es = (null === (t = (0, U.usePremiumTrialOffer)()) || void 0 === t ? void 0 : null === (n = t.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === J.PremiumSubscriptionSKUs.TIER_2,
    er = Y.default.hasBoostDiscount(b) && null != D.premiumUserPrice,
    eu = null == ei ? void 0 : ei.invoiceItems.find(e => e.subscriptionPlanId === D.id),
    eo = null != eu ? {
      amount: eu.amount,
      tax: 0,
      taxInclusive: !0,
      currency: C.currency
    } : Y.default.getPrice(D.id, er, !1, C),
    ec = r * eo.amount,
    ed = Y.default.hasBoostDiscount(b) && null != _ ? X.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_FOOTER_DISCOUNT.format({
      planName: Y.default.getDisplayPremiumType(_.planId)
    }) : (es ? X.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_FOOTER_UPSELL_TRIAL_VARIANT : X.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_FOOTER_UPSELL).format({
      onPremiumSubscriptionClick: P,
      discountPercentage: (0, k.formatPercent)(y.default.locale, J.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100),
      freeSubscriptionCount: J.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
    }),
    eI = E.filter(e => (0, F.isGuildBoostSlotCanceled)(e)).length,
    eS = (0, Y.isPrepaidPaymentSource)(C.paymentSourceId),
    {
      ipCountryCode: em
    } = (0, N.default)(),
    e_ = "HR" === em && eo.currency === Q.CurrencyCodes.EUR;
  return S(el), (0, i.jsxs)("div", {
    className: Z.planSelectStep,
    children: [(0, i.jsx)("div", {
      className: s()(Z.planSelectText, Z.bodyText),
      children: X.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_STEP_SELECT_DESCRIPTION
    }), E.length > 0 ? (0, i.jsxs)("div", {
      className: Z.existingSlotNotice,
      children: [(0, i.jsx)(H.default, {
        className: Z.existingSlotIcon,
        color: d.default.unsafe_rawColors.GUILD_BOOSTING_PINK.css
      }), (0, i.jsxs)("div", {
        children: [X.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_UNUSED_SLOT_NOTICE.format({
          slotCount: E.length
        }), eI > 0 && null != _ ? (0, i.jsx)(I.Tooltip, {
          text: X.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CANCEL_WARNING.format({
            canceledCount: eI,
            date: _.currentPeriodEnd
          }),
          children: e => (0, i.jsx)(w.default, {
            ...e,
            className: Z.existingSlotTooltipWarningIcon,
            color: d.default.unsafe_rawColors.YELLOW_300.css
          })
        }) : null]
      })]
    }) : null, (0, i.jsxs)("div", {
      className: Z.planSelectRow,
      children: [(0, i.jsxs)("div", {
        className: Z.planSelectorWrapper,
        children: [(0, i.jsx)(I.NumberInputStepper, {
          value: r,
          onChange: e => o(e),
          className: Z.__invalid_planSelector,
          minValue: 1,
          maxValue: 30
        }), (0, i.jsx)("div", {
          className: Z.planSelectorLabel,
          children: eS ? function(e) {
            let {
              intervalType: n,
              intervalCount: t = 1
            } = e;
            return n === J.SubscriptionIntervalTypes.YEAR ? X.default.Messages.PREMIUM_GUILD_PLAN_SINGLE_YEAR : n === J.SubscriptionIntervalTypes.MONTH && 1 === t ? X.default.Messages.PREMIUM_GUILD_PLAN_SINGLE_MONTH : null
          }({
            intervalType: v,
            intervalCount: A
          }) : X.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_COUNTER
        })]
      }), (0, i.jsx)("div", {
        className: s()(Z.planSelectorPreviewPrice, {
          [Z.loadingSpinner]: el
        }),
        children: el ? (0, i.jsx)(I.Spinner, {}) : eS ? (0, V.formatPrice)(eo.amount, eo.currency) : function(e) {
          let {
            amount: n,
            currency: t,
            intervalType: i,
            intervalCount: a = 1
          } = e, l = (0, V.formatPrice)(n, t);
          if (i === J.SubscriptionIntervalTypes.YEAR) return X.default.Messages.BILLING_PRICE_PER_YEAR_EACH.format({
            price: l
          });
          if (i === J.SubscriptionIntervalTypes.MONTH && 1 === a) return X.default.Messages.BILLING_PRICE_PER_MONTH_EACH.format({
            price: l
          });
          if (i === J.SubscriptionIntervalTypes.MONTH && a > 1) return X.default.Messages.BILLING_PRICE_PER_MULTI_MONTH_EACH.format({
            price: l
          });
          return null
        }({
          intervalType: v,
          intervalCount: A,
          amount: eo.amount,
          currency: eo.currency
        })
      })]
    }), (0, i.jsx)("div", {
      className: Z.planSelectDivider
    }), (0, i.jsxs)("div", {
      className: Z.planSelectRow,
      children: [(0, i.jsx)("div", {
        className: Z.planSelectorSubtotal,
        children: X.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBTOTAL
      }), (0, i.jsx)("div", {
        className: s()(Z.__invalid_planSelectorSubtotalPrice, {
          [Z.loadingSpinner]: el
        }),
        children: el ? (0, i.jsx)(I.Spinner, {}) : (0, i.jsx)(L.default, {
          price: ec,
          currency: eo.currency,
          intervalType: v,
          intervalCount: A,
          isPrepaidPaymentSource: eS
        })
      })]
    }), e_ && (0, i.jsx)(m.default, {
      message: X.default.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
        kunaPriceWithCurrency: (0, V.formatPrice)(7.5345 * ec, Q.CurrencyCodes.HRK)
      })
    }), (0, i.jsx)(m.default, {
      message: X.default.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
        documentationLink: W.default.getArticleURL(q.HelpdeskArticles.LOCALIZED_PRICING)
      })
    }), (0, i.jsx)(M.default, {
      text: ed,
      color: j.GradientCssUrls.PREMIUM_TIER_2
    })]
  })
}

function $(e) {
  let {
    premiumSubscription: n,
    premiumSubscriptionPlan: t,
    proratedInvoicePreview: a,
    renewalInvoicePreview: l,
    priceOptions: s
  } = e, r = t.interval, o = t.intervalCount, d = (0, c.useStateFromStores)([h.default], () => h.default.getForSkuAndInterval((0, Y.castPremiumSubscriptionAsSkuId)(J.PremiumSubscriptionSKUs.GUILD), r, o));
  u()(null != d, "Missing guildBoostingSubscriptionPlan");
  let I = e => (0, E.coalesceInvoiceItems)(a.invoiceItems).find(n => J.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(n.subscriptionPlanId) && e(n)),
    S = I(e => e.amount >= 0);
  u()(null != S, "Missing guild boosting invoice item");
  let m = I(e => e.amount < 0),
    _ = null != m ? S.quantity - m.quantity : S.quantity,
    P = a.invoiceItems.filter(e => (0, Y.isPremiumBaseSubscriptionPlan)(e.subscriptionPlanId)),
    p = P.reduce((e, n) => e + n.amount, 0),
    T = (0, f.getItemUnitPriceWithDiscount)(S) * _,
    N = (0, V.formatPrice)(T, a.currency),
    U = (0, V.formatRate)(N, r, o),
    R = (0, V.formatPrice)(a.total, a.currency) + (a.currency !== Q.CurrencyCodes.USD ? "*" : ""),
    L = a.total - T - p,
    O = S.discounts.map(e => {
      let n = e.amount / S.quantity;
      return {
        ...e,
        amount: n * _
      }
    }),
    v = (0, Y.isPrepaidPaymentSource)(s.paymentSourceId);
  return (0, i.jsxs)(i.Fragment, {
    children: [v ? null : (0, i.jsx)(A.SubscriptionPeriodResetNotice, {
      proratedInvoice: a,
      renewalInvoice: l
    }), (0, i.jsxs)(C.PremiumInvoiceTable, {
      children: [(0, i.jsx)(C.PremiumInvoiceTableHeader, {
        children: X.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_PURCHASE_DETAILS_HEADER
      }), (0, i.jsx)(C.PremiumInvoiceDiscountedTableRow, {
        label: X.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_INVOICE_ROW_CONTENT.format({
          numGuildSubscriptions: _,
          planName: (0, Y.getDisplayName)(d.id, !1, v)
        }),
        value: v ? N : U,
        discounts: O,
        originalAmount: S.subscriptionPlanPrice * _,
        currency: a.currency,
        interval: d.interval,
        intervalCount: d.intervalCount
      }), 0 !== p ? (0, i.jsx)(C.PremiumInvoiceTableRow, {
        label: (0, i.jsx)(A.PremiumInvoiceLabelWithAdjustment, {
          label: X.default.Messages.PREMIUM_SUBSCRIPTION_PLAN_ADJUSTMENT.format({
            planName: (0, Y.getTierDisplayName)(P[0].subscriptionPlanId)
          }),
          tooltipText: X.default.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP
        }),
        value: (0, V.formatPrice)(p, a.currency)
      }) : null, 0 !== L ? (0, i.jsx)(C.PremiumInvoiceTableRow, {
        label: (0, i.jsx)(A.PremiumInvoiceLabelWithAdjustment, {
          label: X.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT,
          tooltipText: X.default.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP
        }),
        value: (0, V.formatPrice)(L, a.currency)
      }) : null, (0, i.jsx)(C.PremiumInvoiceTableDivider, {}), (0, i.jsx)(C.PremiumInvoiceTableTotalRow, {
        label: (a.taxInclusive ? v ? X.default.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : X.default.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : X.default.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
        value: R
      }), null != n ? (0, i.jsx)(A.SubscriptionInvoiceFooter, {
        premiumSubscription: n,
        proratedInvoice: a,
        renewalInvoice: l,
        isUpdate: !0,
        isPrepaidPaymentSource: v
      }) : (0, i.jsx)(A.SubscriptionInvoiceFooter, {
        renewalInvoice: l,
        priceOptions: s,
        isPrepaidPaymentSource: v
      })]
    })]
  })
}

function ee(e) {
  var n, t;
  let a, l, {
      paymentSources: s,
      priceOptions: r,
      currentPremiumSubscription: u,
      premiumSubscriptionPaymentSourceId: d,
      premiumSubscriptionPlan: m,
      newAdditionalPlans: E,
      onPaymentSourceChange: N,
      onPaymentSourceAdd: U,
      onPurchaseTermsChange: R,
      legalTermsNodeRef: C,
      hasLegalTermsFlash: L
    } = e,
    O = r.paymentSourceId,
    A = (0, c.useStateFromStores)([G.default], () => null != d ? G.default.getPaymentSource(d) : null),
    M = (0, c.useStateFromStores)([D.default], () => D.default.hidePersonalInformation);
  a = null != u ? (0, Y.getItemsWithUpsertedPremiumGuildPlan)(u, E[0].quantity, E[0].planId) : E;
  let {
    analyticsLocations: y
  } = (0, T.default)(), [g] = (0, f.useSubscriptionInvoicePreview)({
    subscriptionId: null == u ? void 0 : u.id,
    items: a,
    renewal: !1,
    applyEntitlements: !0,
    paymentSourceId: O,
    currency: r.currency,
    analyticsLocations: y,
    analyticsLocation: p.default.GUILD_BOOSTING_REVIEW_PRORATED
  }), [x] = (0, f.useSubscriptionInvoicePreview)({
    subscriptionId: null == u ? void 0 : u.id,
    items: a,
    renewal: !0,
    paymentSourceId: O,
    currency: r.currency,
    analyticsLocations: y,
    analyticsLocation: p.default.GUILD_BOOSTING_REVIEW_RENEWAL
  });
  null != x && (l = {
    amount: x.total,
    currency: x.currency,
    tax: x.tax,
    taxInclusive: x.taxInclusive
  });
  let h = o.CountryCodesSets.EEA_COUNTRIES.has(b.default.ipCountryCodeWithFallback);
  return (0, i.jsxs)("div", {
    className: Z.reviewStep,
    children: [null != g && null != x ? (0, i.jsx)($, {
      premiumSubscription: u,
      premiumSubscriptionPlan: m,
      proratedInvoicePreview: g,
      renewalInvoicePreview: x,
      priceOptions: r
    }) : null, (0, i.jsxs)("div", {
      className: Z.paymentSourceWrapper,
      children: [(0, i.jsx)(I.FormTitle, {
        tag: I.FormTitleTags.H5,
        children: X.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
      }), null != d ? null != A ? (0, i.jsx)(I.TooltipContainer, {
        text: X.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_PAYMENT_SOURCE_TOOLTIP,
        children: (0, i.jsx)(_.default, {
          paymentSources: [A],
          selectedPaymentSourceId: A.id,
          hidePersonalInformation: M,
          disabled: !0
        })
      }) : (0, i.jsx)("div", {
        children: (0, i.jsx)(I.Spinner, {})
      }) : (0, i.jsx)(_.default, {
        paymentSources: Object.values(s),
        selectedPaymentSourceId: O,
        onChange: N,
        onPaymentSourceAdd: U,
        hidePersonalInformation: M
      })]
    }), (0, i.jsx)(v.default, {
      isActive: L,
      ref: C,
      children: null != l && (0, i.jsx)(P.default, {
        onChange: R,
        forceShow: !0,
        finePrint: (0, i.jsx)(S.default, {
          subscriptionPlan: m,
          paymentSourceType: null === (n = s[null != O ? O : ""]) || void 0 === n ? void 0 : n.type,
          basePrice: l
        }),
        showPricingLink: (null !== (t = null == g ? void 0 : g.currency) && void 0 !== t ? t : Q.CurrencyCodes.USD) !== Q.CurrencyCodes.USD,
        showWithdrawalWaiver: h,
        subscriptionPlan: m
      })
    })]
  })
}

function en(e) {
  let n, {
      onClose: t,
      guild: l,
      guildBoostQuantity: s,
      isTransfer: r = !1,
      withAnimation: u = !0,
      paymentSourceType: o
    } = e,
    {
      theme: c
    } = (0, I.useThemeContext)(),
    [d, S] = a.useState(B.PremiumPaymentGuildAnimation.Scenes.ENTRY),
    [m, _] = a.useState(!1);
  return n = r ? null == l ? X.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_TRANSFERRED_DESCRIPTION_GENERIC_GUILD.format() : X.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_TRANSFERRED_DESCRIPTION.format({
    guildName: l.name
  }) : null == l ? X.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_ACTIVATED_DESCRIPTION_GENERIC_GUILD.format({
    guildSubscriptionQuantity: s
  }) : X.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_ACTIVATED_DESCRIPTION.format({
    guildName: l.name,
    guildSubscriptionQuantity: s
  }), (0, i.jsxs)("div", {
    className: Z.confirmationContainer,
    children: [u ? (0, i.jsx)(B.PremiumPaymentGuildAnimation, {
      className: Z.confirmationAnimation,
      nextScene: d,
      onScenePlay: e => {
        if (!m) switch (e) {
          case B.PremiumPaymentGuildAnimation.Scenes.ENTRY:
            return S(B.PremiumPaymentGuildAnimation.Scenes.IDLE);
          case B.PremiumPaymentGuildAnimation.Scenes.IDLE:
            return S(B.PremiumPaymentGuildAnimation.Scenes.SUCCESS);
          case B.PremiumPaymentGuildAnimation.Scenes.SUCCESS:
            return _(!0), S(B.PremiumPaymentGuildAnimation.Scenes.IDLE)
        }
      },
      pauseWhileUnfocused: !1
    }) : null, (0, i.jsx)(O.default, {
      className: Z.confirmationUpgradedBanner,
      theme: c,
      premiumType: J.PremiumTypes.TIER_2,
      type: Q.DELAYED_PAYMENTS.has(null != o ? o : Q.PaymentSourceTypes.UNKNOWN) ? O.default.Types.PREMIUM_PAYMENT_STARTED : O.default.Types.GUILD_BOOST_APPLIED
    }), (0, i.jsx)("div", {
      className: Z.confirmationText,
      children: n
    }), (0, i.jsx)(I.Button, {
      onClick: t,
      children: X.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_ACTIVATED_CLOSE_BUTTON
    })]
  })
}