"use strict";
n.r(t), n.d(t, {
  StreamQuality: function() {
    return r
  },
  castPremiumSubscriptionAsSkuId: function() {
    return ew
  },
  coerceExistingItemsToNewItemInterval: function() {
    return eP
  },
  experimentalGetPrices: function() {
    return j
  },
  formatIntervalDuration: function() {
    return eC
  },
  formatTrialCtaIntervalDuration: function() {
    return eO
  },
  formatTrialOfferIntervalDuration: function() {
    return ep
  },
  getBillingGracePeriodDaysAndExpiresDate: function() {
    return e_
  },
  getBillingReviewSubheader: function() {
    return em
  },
  getDefaultPrice: function() {
    return H
  },
  getDiscountIntervalString: function() {
    return W
  },
  getDisplayName: function() {
    return Q
  },
  getDisplayNameFromSku: function() {
    return X
  },
  getDisplayPremiumType: function() {
    return J
  },
  getExternalPlanDisplayName: function() {
    return en
  },
  getExternalSubscriptionMethodUrl: function() {
    return eR
  },
  getFormattedPriceForPlan: function() {
    return eT
  },
  getFormattedRateForPlan: function() {
    return ef
  },
  getIntervalForInvoice: function() {
    return eN
  },
  getIntervalString: function() {
    return K
  },
  getIntervalStringAsNoun: function() {
    return z
  },
  getItemsFromNewAdditionalPlans: function() {
    return eL
  },
  getItemsWithUpsertedPlanIdForGroup: function() {
    return eD
  },
  getItemsWithUpsertedPremiumGuildPlan: function() {
    return ey
  },
  getItemsWithUpsertedPremiumPlanId: function() {
    return eM
  },
  getItemsWithoutPremiumPlanItem: function() {
    return ev
  },
  getMaxFileSizeForPremiumType: function() {
    return eU
  },
  getNumPremiumGuildSubscriptions: function() {
    return ea
  },
  getPlanDescriptionFromInvoice: function() {
    return et
  },
  getPremiumGuildHeaderDescription: function() {
    return eI
  },
  getPremiumPlanItem: function() {
    return F
  },
  getPremiumPlanOptions: function() {
    return ei
  },
  getPremiumSkuIdForSubscription: function() {
    return eG
  },
  getPremiumType: function() {
    return Z
  },
  getPremiumTypeDisplayName: function() {
    return $
  },
  getPrice: function() {
    return Y
  },
  getTierDisplayName: function() {
    return q
  },
  hasPremiumSubscriptionToDisplay: function() {
    return eg
  },
  isPremium: function() {
    return D.isPremium
  },
  isPremiumAtLeast: function() {
    return D.isPremiumAtLeast
  },
  isPremiumBaseSubscriptionPlan: function() {
    return el
  },
  isPremiumExactly: function() {
    return D.isPremiumExactly
  },
  isPremiumGuildSubscriptionCanceled: function() {
    return eE
  },
  isPremiumGuildSubscriptionPlan: function() {
    return eu
  },
  isPremiumSubscriptionPlan: function() {
    return ed
  },
  isPrepaidPaymentSource: function() {
    return ec
  },
  isSubscriptionStatusFailedPayment: function() {
    return eh
  }
}), n("411104"), n("47120"), n("733860"), n("724458"), n("653041");
var i, r, s, a, o = n("512722"),
  l = n.n(o),
  u = n("913527"),
  d = n.n(u),
  _ = n("848246");
n("442837");
var c = n("782568"),
  E = n("710845"),
  I = n("114064"),
  T = n("803905"),
  f = n("424082"),
  S = n("439017"),
  h = n("301766"),
  A = n("594174"),
  m = n("351402"),
  N = n("853872"),
  p = n("509545"),
  O = n("78839"),
  C = n("122289"),
  R = n("55935"),
  g = n("424218"),
  L = n("358085"),
  v = n("380684"),
  D = n("111361"),
  M = n("74538"),
  y = n("937615"),
  P = n("981631"),
  U = n("334431"),
  b = n("474936"),
  G = n("231338"),
  w = n("689938");
let k = {
    PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
    BILLING_HISTORY: "https://support.apple.com/HT201266",
    SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039"
  },
  B = {
    SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
    PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
    BILLING_HISTORY: "https://play.google.com/store/account/orderhistory"
  },
  V = new E.default("PremiumUtils.tsx"),
  x = {
    [b.SubscriptionPlans.NONE_MONTH]: [b.SubscriptionPlans.NONE_YEAR, b.SubscriptionPlans.PREMIUM_YEAR_TIER_2, b.SubscriptionPlans.PREMIUM_MONTH_TIER_2, b.SubscriptionPlans.PREMIUM_YEAR_TIER_1, b.SubscriptionPlans.PREMIUM_MONTH_TIER_1],
    [b.SubscriptionPlans.NONE_YEAR]: [b.SubscriptionPlans.PREMIUM_YEAR_TIER_2, b.SubscriptionPlans.PREMIUM_MONTH_TIER_2, b.SubscriptionPlans.PREMIUM_YEAR_TIER_1, b.SubscriptionPlans.PREMIUM_MONTH_TIER_1],
    [b.SubscriptionPlans.PREMIUM_MONTH_TIER_0]: [b.SubscriptionPlans.PREMIUM_YEAR_TIER_2, b.SubscriptionPlans.PREMIUM_MONTH_TIER_2, b.SubscriptionPlans.PREMIUM_YEAR_TIER_1, b.SubscriptionPlans.PREMIUM_MONTH_TIER_1, b.SubscriptionPlans.PREMIUM_YEAR_TIER_0],
    [b.SubscriptionPlans.PREMIUM_YEAR_TIER_0]: [b.SubscriptionPlans.PREMIUM_YEAR_TIER_2, b.SubscriptionPlans.PREMIUM_MONTH_TIER_2, b.SubscriptionPlans.PREMIUM_YEAR_TIER_1, b.SubscriptionPlans.PREMIUM_MONTH_TIER_1],
    [b.SubscriptionPlans.PREMIUM_MONTH_TIER_1]: [b.SubscriptionPlans.PREMIUM_YEAR_TIER_2, b.SubscriptionPlans.PREMIUM_MONTH_TIER_2, b.SubscriptionPlans.PREMIUM_YEAR_TIER_1],
    [b.SubscriptionPlans.PREMIUM_YEAR_TIER_1]: [b.SubscriptionPlans.PREMIUM_YEAR_TIER_2],
    [b.SubscriptionPlans.PREMIUM_MONTH_TIER_2]: [b.SubscriptionPlans.PREMIUM_YEAR_TIER_2],
    [b.SubscriptionPlans.PREMIUM_YEAR_TIER_2]: [],
    ALL: [b.SubscriptionPlans.NONE_MONTH, b.SubscriptionPlans.NONE_YEAR, b.SubscriptionPlans.PREMIUM_YEAR_TIER_2, b.SubscriptionPlans.PREMIUM_MONTH_TIER_2, b.SubscriptionPlans.PREMIUM_YEAR_TIER_1, b.SubscriptionPlans.PREMIUM_MONTH_TIER_1, b.SubscriptionPlans.PREMIUM_YEAR_TIER_0, b.SubscriptionPlans.PREMIUM_MONTH_TIER_0]
  };

function F(e) {
  return e.items.find(e => b.PREMIUM_PLANS.has(e.planId))
}

function H(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = null !== (t = N.default.defaultPaymentSourceId) && void 0 !== t ? t : void 0,
    s = O.default.getPremiumTypeSubscription();
  return null != s && null != s.paymentSourceId && (r = s.paymentSourceId), Y(e, n, i, {
    paymentSourceId: r
  })
}

function Y(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
    {
      paymentSourceId: r,
      currency: s
    } = i;
  if (null != p.default.get(e)) {
    let i = P.PriceSetAssignmentPurchaseTypes.DEFAULT;
    n ? i = P.PriceSetAssignmentPurchaseTypes.GIFT : t && (i = P.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_1);
    let a = function(e) {
      let {
        paymentSourceId: t,
        purchaseType: n,
        currency: i
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        purchaseType: P.PriceSetAssignmentPurchaseTypes.DEFAULT
      }, r = j(e, {
        paymentSourceId: t,
        purchaseType: n
      });
      return (0 === r.length && V.warn("No prices found for planId: ".concat(e, ", paymentSourceId: ").concat(t, ", purchaseType: ").concat(n)), null != i) ? r.find(e => e.currency === i) : r[0]
    }(e, {
      paymentSourceId: r,
      purchaseType: i,
      currency: s
    });
    if (null == a) {
      let t = Error("Couldn't find price");
      throw (0, C.captureBillingException)(t, {
        extra: {
          paymentSourceId: r
        },
        tags: {
          purchaseType: i.toString(),
          planId: e,
          currency: null != s ? s : "unknown"
        }
      }), t
    }
    return a
  }
  let a = Error("Plan not found");
  throw (0, C.captureBillingException)(a, {
    tags: {
      planId: e,
      currency: null != s ? s : "unknown"
    },
    extra: {
      ...i,
      isGift: n
    }
  }), a
}(s = i || (i = {})).BUNDLE = "bundle", s.TIER_0 = "tier_0", s.TIER_1 = "tier_1", s.TIER_2 = "tier_2", s.PREMIUM_GUILD = "premium_guild", (a = r || (r = {})).MID = "mid", a.HIGH = "high";

function j(e) {
  let {
    paymentSourceId: t,
    purchaseType: n
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
    purchaseType: P.PriceSetAssignmentPurchaseTypes.DEFAULT
  }, i = function(e, t) {
    let n = p.default.get(e);
    if (null == n) {
      let n = Error("Plan not found");
      throw (0, C.captureBillingException)(n, {
        tags: {
          planId: e,
          purchaseType: t.toString()
        }
      }), n
    }
    if (null == n.prices) throw Error("No prices returned for ".concat(e, ", is your user in the experiment?"));
    let i = n.prices[t];
    if (null == i) throw V.info("Purchase types: ".concat(JSON.stringify(Object.keys(n.prices)))), Error("No prices returned for purchase type ".concat(t, " for plan ").concat(e));
    return i
  }(e, n);
  if (null != t) {
    let r = i.paymentSourcePrices[t];
    if (null == r) {
      V.info("Payment sources IDs: ".concat(JSON.stringify(Object.keys(i.paymentSourcePrices)))), V.info("prices: ".concat(r));
      let s = Error("Missing prices for payment source on subscription plan");
      (0, C.captureBillingException)(s, {
        extra: {
          paymentSourceId: t
        },
        tags: {
          purchaseType: n.toString(),
          planId: e
        }
      })
    } else if (0 !== r.length) return r
  }
  if (null == i.countryPrices.prices) {
    V.info("countryPrices: ".concat(JSON.stringify(i.countryPrices)));
    let t = Error("Missing prices for country");
    throw (0, C.captureBillingException)(t, {
      tags: {
        countryCode: i.countryPrices.countryCode,
        planId: e
      }
    }), t
  }
  return i.countryPrices.prices
}

function W(e) {
  switch (e) {
    case b.DiscountUserUsageLimitIntervalTypes.MONTH:
      return w.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
    case b.DiscountUserUsageLimitIntervalTypes.YEAR:
      return w.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
    case b.DiscountUserUsageLimitIntervalTypes.DAY:
    case b.DiscountUserUsageLimitIntervalTypes.WEEK:
    default:
      throw Error("Unexpected interval")
  }
}

function K(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
    r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
    s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : b.PremiumTypes.TIER_2;
  if (t || n) switch (e) {
    case b.SubscriptionIntervalTypes.MONTH:
      let a = (s === b.PremiumTypes.TIER_0 ? w.default.Messages.BASIC_GIFT_DURATION : w.default.Messages.GIFT_DURATION).format({
        timeInterval: w.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH
      });
      return r ? a : w.default.Messages.PAYMENT_MODAL_ONE_MONTH;
    case b.SubscriptionIntervalTypes.YEAR:
      let o = (s === b.PremiumTypes.TIER_0 ? w.default.Messages.BASIC_GIFT_DURATION : w.default.Messages.GIFT_DURATION).format({
        timeInterval: w.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
      });
      return r ? o : w.default.Messages.PAYMENT_MODAL_ONE_YEAR;
    default:
      throw Error("Unexpected interval")
  }
  switch (e) {
    case b.SubscriptionIntervalTypes.MONTH:
      if (1 !== i) return w.default.Messages.MULTI_MONTHS.format({
        intervalCount: i
      });
      return w.default.Messages.MONTHLY;
    case b.SubscriptionIntervalTypes.YEAR:
      return w.default.Messages.YEARLY;
    default:
      throw Error("Unexpected interval")
  }
}

function z(e) {
  switch (e) {
    case b.SubscriptionIntervalTypes.MONTH:
      return w.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
    case b.SubscriptionIntervalTypes.YEAR:
      return w.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
    default:
      throw Error("Unexpected interval")
  }
}

function Z(e) {
  let t = b.SubscriptionPlanInfo[e];
  if (null != t) return t.premiumType;
  let n = Error("Unsupported plan");
  throw (0, C.captureBillingException)(n, {
    tags: {
      planId: e
    }
  }), n
}

function Q(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = arguments.length > 3 ? arguments[3] : void 0;
  switch (e) {
    case b.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
      return t ? w.default.Messages.PREMIUM_PLAN_MONTH_TIER_0_TRIAL_DURATION.format({
        duration: i
      }) : n ? w.default.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_0 : w.default.Messages.PREMIUM_PLAN_MONTH_TIER_0;
    case b.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
      return t ? w.default.Messages.PREMIUM_PLAN_YEAR_TIER_0_TRIAL_DURATION.format({
        duration: i
      }) : n ? w.default.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_0 : w.default.Messages.PREMIUM_PLAN_YEAR_TIER_0;
    case b.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
      return n ? w.default.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_1 : w.default.Messages.PREMIUM_PLAN_MONTH_TIER_1;
    case b.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
      return n ? w.default.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_1 : w.default.Messages.PREMIUM_PLAN_YEAR_TIER_1;
    case b.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
      return t ? w.default.Messages.PREMIUM_PLAN_MONTH_TIER_2_TRIAL_DURATION.format({
        duration: i
      }) : n ? w.default.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_2 : w.default.Messages.PREMIUM_PLAN_MONTH_TIER_2;
    case b.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
      return t ? w.default.Messages.PREMIUM_PLAN_YEAR_TIER_2_TRIAL_DURATION.format({
        duration: i
      }) : n ? w.default.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_2 : w.default.Messages.PREMIUM_PLAN_YEAR_TIER_2;
    case b.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
      return w.default.Messages.PREMIUM_PLAN_3_MONTH_TIER_2;
    case b.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
      return w.default.Messages.PREMIUM_PLAN_6_MONTH_TIER_2;
    case b.SubscriptionPlans.PREMIUM_MONTH_GUILD:
      return n ? w.default.Messages.PREMIUM_GUILD_PLAN_SINGLE_MONTH : w.default.Messages.PREMIUM_GUILD_PLAN_MONTH;
    case b.SubscriptionPlans.PREMIUM_YEAR_GUILD:
      return n ? w.default.Messages.PREMIUM_GUILD_PLAN_SINGLE_YEAR : w.default.Messages.PREMIUM_GUILD_PLAN_YEAR;
    case b.SubscriptionPlans.PREMIUM_3_MONTH_GUILD:
      return w.default.Messages.PREMIUM_GUILD_PLAN_3_MONTH;
    case b.SubscriptionPlans.PREMIUM_6_MONTH_GUILD:
      return w.default.Messages.PREMIUM_GUILD_PLAN_6_MONTH;
    case b.SubscriptionPlans.PREMIUM_MONTH_LEGACY:
      return w.default.Messages.PREMIUM_PLAN_MONTH;
    case b.SubscriptionPlans.PREMIUM_YEAR_LEGACY:
      return w.default.Messages.PREMIUM_PLAN_YEAR
  }
  let r = Error("Unsupported plan");
  throw (0, C.captureBillingException)(r, {
    tags: {
      planId: e
    }
  }), r
}

function X(e) {
  switch (e) {
    case b.PremiumSubscriptionSKUs.TIER_0:
      return w.default.Messages.PREMIUM_TIER_0;
    case b.PremiumSubscriptionSKUs.TIER_1:
      return w.default.Messages.PREMIUM_TIER_1;
    case b.PremiumSubscriptionSKUs.TIER_2:
      return w.default.Messages.PREMIUM_TIER_2
  }
  let t = Error("Unsupported sku");
  throw (0, C.captureBillingException)(t, {
    tags: {
      skuId: e
    }
  }), t
}

function q(e) {
  switch (e) {
    case b.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
    case b.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
      return w.default.Messages.PREMIUM_TIER_0;
    case b.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
    case b.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
      return w.default.Messages.PREMIUM_TIER_1;
    case b.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
    case b.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
    case b.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
    case b.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
      return w.default.Messages.PREMIUM_TIER_2
  }
  let t = Error("Unsupported plan");
  throw (0, C.captureBillingException)(t, {
    tags: {
      planId: e
    }
  }), t
}

function J(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  switch (e) {
    case b.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
    case b.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
      return t ? "Basic" : "Nitro Basic";
    case b.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
    case b.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
      return t ? "Classic" : "Nitro Classic";
    case b.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
    case b.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
    case b.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
    case b.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
      return "Nitro"
  }
  let n = Error("Unsupported plan");
  throw (0, C.captureBillingException)(n, {
    tags: {
      planId: e
    }
  }), n
}

function $(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  switch (e) {
    case b.PremiumTypes.TIER_0:
      return t ? "Basic" : w.default.Messages.PREMIUM_TIER_0;
    case b.PremiumTypes.TIER_1:
      return t ? "Classic" : w.default.Messages.PREMIUM_TIER_1;
    case b.PremiumTypes.TIER_2:
      return w.default.Messages.PREMIUM_TIER_2
  }
}

function ee(e) {
  var t, n, i, r, s, a, o, l, u, _;
  let {
    subscription: E,
    planId: I,
    price: T,
    includePremiumGuilds: S,
    hasDiscountApplied: h,
    activeDiscountInfo: m,
    renewalInvoicePreview: N
  } = e, p = b.SubscriptionPlanInfo[I], O = M.default.formatPriceString(M.default.getDefaultPrice(p.id), p.interval), {
    annualDiscountPercentage: C
  } = (0, f.getAnnualDiscountsExperimentConfig)("PremiumUtils"), g = eS(E) || null == E.paymentSourceId && !E.isPurchasedExternally && !(null === (t = A.default.getCurrentUser()) || void 0 === t ? void 0 : t.hasFreePremium()), L = null != T, v = E.status === P.SubscriptionStatusTypes.UNPAID && null !== E.latestInvoice && (null === (n = E.latestInvoice) || void 0 === n ? void 0 : n.status) === P.InvoiceStatusTypes.OPEN, D = g ? P.SubscriptionStatusTypes.CANCELED : v ? P.SubscriptionStatusTypes.UNPAID : E.status, y = null === (s = null !== (r = null == N ? void 0 : N.taxInclusive) && void 0 !== r ? r : null === (i = E.latestInvoice) || void 0 === i ? void 0 : i.taxInclusive) || void 0 === s || s, U = b.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM + (S ? ea(E.additionalPlans) : 0);
  switch (I) {
    case b.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
    case b.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
      switch (D) {
        case P.SubscriptionStatusTypes.CANCELED:
          return L ? y ? w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION.format({
            price: T
          }) : w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
            price: T
          }) : w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION_NO_PRICE;
        case P.SubscriptionStatusTypes.ACCOUNT_HOLD:
          return L ? y ? w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD.format({
            price: T
          }) : w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
            price: T
          }) : w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD_NO_PRICE.format();
        case P.SubscriptionStatusTypes.UNPAID:
          return w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_PAYMENT.format();
        case P.SubscriptionStatusTypes.PAUSE_PENDING:
          let G = null != E.pauseEndsAt ? d()(E.pauseEndsAt).diff(E.currentPeriodEnd, "days") : null;
          return null != G ? w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
            pauseDate: E.currentPeriodEnd,
            pauseDuration: G
          }) : w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({
            pauseDate: E.currentPeriodEnd
          });
        case P.SubscriptionStatusTypes.PAUSED:
          return w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({
            resumeDate: E.pauseEndsAt
          });
        case P.SubscriptionStatusTypes.PAST_DUE:
          return w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_PAST_DUE_WITH_HC_LINK.format({
            endDate: (0, R.dateFormat)(e_(E).expiresDate, "LL"),
            onClick: () => {
              (0, c.default)("https://support.discord.com/hc/articles/23082866222871")
            }
          });
        default:
          return L ? y ? w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0.format({
            price: T
          }) : w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_TAX_EXCLUSIVE.format({
            price: T
          }) : w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_NO_PRICE
      }
    case b.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
    case b.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
      switch (D) {
        case P.SubscriptionStatusTypes.CANCELED:
          return L ? y ? w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION.format({
            price: T
          }) : w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
            price: T
          }) : w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION_NO_PRICE;
        case P.SubscriptionStatusTypes.ACCOUNT_HOLD:
          return L ? y ? w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD.format({
            price: T
          }) : w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
            price: T
          }) : w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD_NO_PRICE.format();
        case P.SubscriptionStatusTypes.UNPAID:
          return w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_PAYMENT.format();
        case P.SubscriptionStatusTypes.PAUSE_PENDING:
          let k = null != E.pauseEndsAt ? d()(E.pauseEndsAt).diff(E.currentPeriodEnd, "days") : null;
          return null != k ? w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
            pauseDate: E.currentPeriodEnd,
            pauseDuration: k
          }) : w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({
            pauseDate: E.currentPeriodEnd
          });
        case P.SubscriptionStatusTypes.PAUSED:
          return w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({
            resumeDate: E.pauseEndsAt
          });
        case P.SubscriptionStatusTypes.PAST_DUE:
          return w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_PAST_DUE_WITH_HC_LINK.format({
            endDate: (0, R.dateFormat)(e_(E).expiresDate, "LL"),
            onClick: () => {
              (0, c.default)("https://support.discord.com/hc/articles/23082866222871")
            }
          });
        default:
          return L ? y ? w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1.format({
            price: T
          }) : w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_TAX_EXCLUSIVE.format({
            price: T
          }) : w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_NO_PRICE
      }
    case b.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
    case b.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
    case b.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
    case b.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
      switch (D) {
        case P.SubscriptionStatusTypes.CANCELED:
          return L ? y ? w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION.format({
            price: T,
            num: U
          }) : w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
            price: T,
            num: U
          }) : w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION_NO_PRICE.format({
            num: U
          });
        case P.SubscriptionStatusTypes.ACCOUNT_HOLD:
          return L ? y ? w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD.format({
            price: T,
            num: U
          }) : w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
            price: T,
            num: U
          }) : w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD_NO_PRICE.format({
            num: U
          });
        case P.SubscriptionStatusTypes.UNPAID:
          return w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_PAYMENT.format({
            num: U
          });
        case P.SubscriptionStatusTypes.PAUSE_PENDING:
          let B = null != E.pauseEndsAt ? d()(E.pauseEndsAt).diff(E.currentPeriodEnd, "days") : null;
          return null != B ? w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
            pauseDate: E.currentPeriodEnd,
            pauseDuration: B
          }) : w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({
            pauseDate: E.currentPeriodEnd
          });
        case P.SubscriptionStatusTypes.PAUSED:
          return w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({
            resumeDate: E.pauseEndsAt
          });
        case P.SubscriptionStatusTypes.BILLING_RETRY:
          return w.default.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO.format({
            endDate: d()(E.currentPeriodStart).add(b.PAID_SUBSCRIPTION_MAX_BILLING_RETRY_DAYS, "days")
          });
        case P.SubscriptionStatusTypes.PAST_DUE:
          return w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_PAST_DUE_WITH_HC_LINK.format({
            endDate: (0, R.dateFormat)(e_(E).expiresDate, "LL"),
            onClick: () => {
              (0, c.default)("https://support.discord.com/hc/articles/23082866222871")
            }
          });
        default:
          return h ? I === b.SubscriptionPlans.PREMIUM_YEAR_TIER_2 ? w.default.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
            percent: null !== (a = null == m ? void 0 : m.percentage) && void 0 !== a ? a : C,
            regularPrice: O
          }) : y ? w.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
            percent: null !== (o = null == m ? void 0 : m.percentage) && void 0 !== o ? o : b.DISCOUNT_PERCENTAGE_FALLBACK,
            regularPrice: O,
            numMonths: null !== (l = null == m ? void 0 : m.duration) && void 0 !== l ? l : b.DISCOUNT_DURATION_FALLBACK
          }) : w.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC_TAX_EXCLUSIVE.format({
            percent: null !== (u = null == m ? void 0 : m.percentage) && void 0 !== u ? u : b.DISCOUNT_PERCENTAGE_FALLBACK,
            regularPrice: O,
            numMonths: null !== (_ = null == m ? void 0 : m.duration) && void 0 !== _ ? _ : b.DISCOUNT_DURATION_FALLBACK
          }) : L ? y ? w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2.format({
            price: T,
            num: U
          }) : w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_TAX_EXCLUSIVE.format({
            price: T,
            num: U
          }) : w.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_NO_PRICE.format({
            num: U
          })
      }
    default:
      throw Error("Invalid planId ".concat(I))
  }
}

function et(e) {
  let {
    renewalInvoicePreview: t,
    subscription: n,
    planId: i,
    includePremiumGuilds: r = !1,
    hasDiscountApplied: s = !1,
    activeDiscountInfo: a
  } = e, o = p.default.get(i);
  return l()(null != o, "Missing plan"), ee({
    subscription: n,
    planId: o.id,
    price: function(e, t, n) {
      let i = e.invoiceItems.find(e => {
          let {
            subscriptionPlanId: t
          } = e;
          return t === n.id
        }),
        r = null == i ? Y(n.id, !1, !1, {
          paymentSourceId: t.paymentSourceId,
          currency: t.currency
        }).amount : i.amount;
      return (0, y.formatRate)((0, y.formatPrice)(r, e.currency), n.interval, n.intervalCount)
    }(t, n, o),
    includePremiumGuilds: r,
    hasDiscountApplied: s,
    activeDiscountInfo: a,
    renewalInvoicePreview: t
  })
}

function en(e) {
  let {
    planId: t,
    additionalPlans: n
  } = e, i = (0, h.isNoneSubscription)(t) ? null : Q(t), r = null == n ? void 0 : n.find(e => {
    let {
      planId: t
    } = e;
    return b.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t)
  }), s = (null == r ? void 0 : r.planId) === b.SubscriptionPlans.PREMIUM_MONTH_GUILD ? w.default.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS_UNFORMATTED : (null == r ? void 0 : r.planId) === b.SubscriptionPlans.PREMIUM_YEAR_GUILD ? w.default.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS_UNFORMATTED : null, a = null == s ? void 0 : s.format({
    num: null == r ? void 0 : r.quantity
  });
  if (null != i && null != a) return w.default.Messages.PREMIUM_WITH_PREMIUM_GUILD_EXTERNAL_PLAN_DESCRIPTION.format({
    premiumDescription: i,
    premiumGuildDescription: a
  });
  if (null != i) return i;
  if (null != a) return a;
  else throw Error("Subscription without premium or premium guild subscription")
}

function ei(e) {
  let {
    skuId: t,
    isPremium: n,
    multiMonthPlans: i,
    currentSubscription: r,
    isGift: s,
    isEligibleForTrial: a,
    defaultPlanId: o,
    defaultToMonthlyPlan: l
  } = e;
  if (null == t || !n) return [];
  let u = void 0 !== o && t === b.SubscriptionPlanInfo[o].skuId ? o : void 0;
  void 0 === u && l && !s && (u = b.PREMIUM_SKU_TO_MONTHLY_PLAN[t]), a && !s && (void 0 === o || l && b.PREMIUM_MONTHLY_PLANS.has(o)) && S.TrialRedemptionDefaultPlanExperiment.trackExposure({
    location: "de805e_1"
  });
  let d = [];
  switch (t) {
    case b.PremiumSubscriptionSKUs.TIER_0:
      d = [b.SubscriptionPlans.PREMIUM_YEAR_TIER_0, b.SubscriptionPlans.PREMIUM_MONTH_TIER_0];
      break;
    case b.PremiumSubscriptionSKUs.TIER_1:
      d = [b.SubscriptionPlans.PREMIUM_MONTH_TIER_1];
      break;
    case b.PremiumSubscriptionSKUs.TIER_2:
      let _ = i;
      if (null != r) {
        let e = r.items[0].planId;
        if (b.MULTI_MONTH_PLANS.has(e)) {
          let t = b.SubscriptionPlanInfo[e];
          _ = [...(0, b.MULTI_MONTH_PLANS)].filter(e => {
            let n = b.SubscriptionPlanInfo[e];
            return n.interval === t.interval && n.intervalCount === t.intervalCount && n.skuId === b.PremiumSubscriptionSKUs.TIER_2
          })
        } else _ = []
      }
      d = [b.SubscriptionPlans.PREMIUM_YEAR_TIER_2, ..._, b.SubscriptionPlans.PREMIUM_MONTH_TIER_2];
      break;
    default:
      throw Error("Unexpected SKU: ".concat(t))
  }
  if (void 0 !== u) {
    let e = d.indexOf(u);
    d.splice(e, 1), d.unshift(u)
  }
  return d
}

function er(e) {
  let t = b.SubscriptionPlanInfo[e];
  if (null == t) {
    let t = Error("Unsupported plan");
    throw (0, C.captureBillingException)(t, {
      tags: {
        planId: e
      }
    }), t
  }
  return t.skuId
}

function es(e) {
  var t;
  return null == e ? x.ALL : null !== (t = x[e]) && void 0 !== t ? t : []
}

function ea(e) {
  let t = p.default.getPlanIdsForSkus([ew(b.PremiumSubscriptionSKUs.GUILD)]);
  l()(null != t, "Missing guildSubscriptionPlanIds");
  let n = e.find(e => {
    let {
      planId: n
    } = e;
    return t.includes(n)
  });
  return null != n ? n.quantity : 0
}
let eo = new Set([b.SubscriptionPlans.NONE_MONTH, b.SubscriptionPlans.NONE_3_MONTH, b.SubscriptionPlans.NONE_6_MONTH, b.SubscriptionPlans.NONE_YEAR, b.SubscriptionPlans.PREMIUM_MONTH_TIER_0, b.SubscriptionPlans.PREMIUM_MONTH_TIER_1, b.SubscriptionPlans.PREMIUM_MONTH_TIER_2, b.SubscriptionPlans.PREMIUM_YEAR_TIER_0, b.SubscriptionPlans.PREMIUM_YEAR_TIER_1, b.SubscriptionPlans.PREMIUM_YEAR_TIER_2, b.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2, b.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2]);

function el(e) {
  return eo.has(e)
}

function eu(e) {
  return b.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(e)
}

function ed(e) {
  return el(e) || eu(e)
}

function e_(e) {
  var t, n, i, r, s;
  if (e.isPurchasedViaApple && (null === (t = e.metadata) || void 0 === t ? void 0 : t.apple_grace_period_expires_date) != null) {
    let t = d()(e.metadata.apple_grace_period_expires_date);
    return {
      days: d().duration(t.diff(e.currentPeriodStart)).days(),
      expiresDate: t
    }
  }
  if (e.isPurchasedViaGoogle && (null === (n = e.metadata) || void 0 === n ? void 0 : n.google_grace_period_expires_date) != null && (null === (i = e.metadata) || void 0 === i ? void 0 : i.google_original_expires_date) != null) {
    let t = d()(e.metadata.google_grace_period_expires_date),
      n = d()(e.metadata.google_original_expires_date);
    return {
      days: d().duration(t.diff(n)).days(),
      expiresDate: t
    }
  }
  if (e.isPurchasedExternally) {
    let t = e.isPurchasedViaApple ? b.DEFAULT_APPLE_GRACE_PERIOD_DAYS : b.DEFAULT_GOOGLE_GRACE_PERIOD_DAYS;
    return {
      days: t,
      expiresDate: d()(e.currentPeriodStart).add(t, "days")
    }
  }
  if ((null === (r = e.metadata) || void 0 === r ? void 0 : r.grace_period_expires_date) != null) return {
    days: d()(null === (s = e.metadata) || void 0 === s ? void 0 : s.grace_period_expires_date).diff(e.currentPeriodStart, "days"),
    expiresDate: d()(e.metadata.grace_period_expires_date)
  };
  {
    let t = null == e.paymentSourceId ? b.DEFAULT_MAX_GRACE_PERIOD_DAYS : b.PAID_SUBSCRIPTION_MAX_GRACE_PERIOD_DAYS;
    return {
      days: t,
      expiresDate: d()(e.currentPeriodStart).add(t, "days")
    }
  }
}

function ec(e) {
  if (null == e) return !1;
  let t = N.default.getPaymentSource(e);
  return null != t && G.PREPAID_PAYMENT_SOURCES.has(t.type)
}

function eE(e) {
  return e.isPurchasedExternally ? e.status === P.SubscriptionStatusTypes.CANCELED : function(e) {
    let {
      renewalMutations: t,
      additionalPlans: n,
      status: i
    } = e, r = ea(n);
    return 0 === (null != t ? ea(t.additionalPlans) : null) && 0 !== r ? P.SubscriptionStatusTypes.CANCELED : i
  }(e) === P.SubscriptionStatusTypes.CANCELED
}

function eI(e) {
  var t, n, i;
  let {
    subscription: r,
    user: s,
    price: a,
    renewalInvoicePreview: o
  } = e, {
    planId: u,
    additionalPlans: d
  } = r, _ = p.default.get(u);
  l()(null != _, "Missing plan");
  let c = ea(d),
    E = eA(r.planId, r.paymentSourceId, r.currency, s).amount * c;
  if (null != o) {
    let e = o.invoiceItems.find(e => b.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(e.subscriptionPlanId));
    null != e && (E = e.amount)
  }
  a = null != a ? a : (0, y.formatPrice)(E, r.currency);
  let I = null === (i = null !== (n = null == o ? void 0 : o.taxInclusive) && void 0 !== n ? n : null === (t = r.latestInvoice) || void 0 === t ? void 0 : t.taxInclusive) || void 0 === i || i;
  if (eE(r)) return r.isPurchasedViaGoogle ? w.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION_NO_PRICE.format({
    quantity: c
  }) : I ? w.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION.format({
    quantity: c,
    rate: (0, y.formatRate)(a, _.interval, _.intervalCount)
  }) : w.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
    quantity: c,
    rate: (0, y.formatRate)(a, _.interval, _.intervalCount)
  });
  switch (r.status) {
    case P.SubscriptionStatusTypes.ACCOUNT_HOLD:
      return r.isPurchasedViaGoogle ? w.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD_NO_PRICE.format({
        quantity: c,
        boostQuantity: c
      }) : I ? w.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD.format({
        quantity: c,
        boostQuantity: c,
        rate: (0, y.formatRate)(a, _.interval, _.intervalCount)
      }) : w.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
        quantity: c,
        boostQuantity: c,
        rate: (0, y.formatRate)(a, _.interval, _.intervalCount)
      });
    case P.SubscriptionStatusTypes.PAUSE_PENDING:
    case P.SubscriptionStatusTypes.PAUSED:
      return w.default.Messages.GUILD_BOOSTING_DISABLED_HEADER;
    default:
      return r.isPurchasedViaGoogle ? w.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_NO_PRICE.format({
        quantity: c
      }) : I ? w.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO.format({
        quantity: c,
        rate: (0, y.formatRate)(a, _.interval, _.intervalCount)
      }) : w.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_TAX_EXCLUSIVE.format({
        quantity: c,
        rate: (0, y.formatRate)(a, _.interval, _.intervalCount)
      })
  }
}

function eT(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    r = null != t ? Y(e.id, !1, i, t) : H(e.id, !1, i),
    s = (0, y.formatPrice)(r.amount, r.currency);
  return e.currency !== G.CurrencyCodes.USD && !0 === n && (s = s.concat("*")), s
}

function ef(e, t, n) {
  let i = eT(e, t, n);
  return (0, y.formatRate)(i, e.interval, e.intervalCount)
}

function eS(e) {
  let {
    status: t,
    renewalMutations: n
  } = e;
  return t === P.SubscriptionStatusTypes.CANCELED || null != n && (0, h.isNoneSubscription)(n.planId) && !e.isPurchasedExternally
}

function eh(e) {
  return e === P.SubscriptionStatusTypes.PAST_DUE || e === P.SubscriptionStatusTypes.ACCOUNT_HOLD || e === P.SubscriptionStatusTypes.BILLING_RETRY
}

function eA(e, t, n, i) {
  let r = null != t ? {
      paymentSourceId: t,
      currency: n
    } : {
      country: m.default.ipCountryCodeWithFallback,
      currency: n
    },
    s = p.default.get(e);
  if (null == s) {
    let t = Error("Unsupported plan");
    throw (0, C.captureBillingException)(t, {
      tags: {
        planId: e
      }
    }), t
  }
  let a = p.default.getForSkuAndInterval(ew(b.PremiumSubscriptionSKUs.GUILD), s.interval, s.intervalCount);
  if (null == a) {
    let t = Error("Unsupported plan");
    throw (0, C.captureBillingException)(t, {
      tags: {
        planId: e
      }
    }), t
  }
  return Y(a.id, (0, D.isPremium)(i), !1, r)
}

function em(e, t, n) {
  let i = t.id;
  if (null != e) switch (i) {
    case b.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
      return w.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_0;
    case b.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
      return w.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_0;
    case b.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
      return w.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_1;
    case b.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
      return w.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_1;
    case b.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
      return w.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_2;
    case b.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
      return w.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_2
  }
  switch (i) {
    case b.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
      return n ? w.default.Messages.BILLING_SELECT_PLAN : w.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_0;
    case b.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
      return n ? w.default.Messages.BILLING_SELECT_PLAN : w.default.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_0;
    case b.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
      return n ? w.default.Messages.BILLING_SELECT_PLAN : w.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_1;
    case b.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
      return n ? w.default.Messages.BILLING_SELECT_PLAN : w.default.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_1;
    case b.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
      return n ? w.default.Messages.BILLING_SELECT_PLAN : w.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_2;
    case b.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
      return n ? w.default.Messages.BILLING_SELECT_PLAN : w.default.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_2;
    case b.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
    case b.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
      return w.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTHS_TIER_2.format({
        intervalCount: t.intervalCount
      });
    case b.SubscriptionPlans.NONE_MONTH:
    case b.SubscriptionPlans.NONE_YEAR:
    case b.SubscriptionPlans.NONE_3_MONTH:
    case b.SubscriptionPlans.NONE_6_MONTH:
    case b.SubscriptionPlans.PREMIUM_MONTH_GUILD:
    case b.SubscriptionPlans.PREMIUM_YEAR_GUILD:
    case b.SubscriptionPlans.PREMIUM_3_MONTH_GUILD:
    case b.SubscriptionPlans.PREMIUM_6_MONTH_GUILD:
      return w.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
  }
  let r = Error("User is purchasing an unsupported plan");
  throw (0, C.captureBillingException)(r, {
    tags: {
      planId: i
    }
  }), r
}

function eN(e) {
  let t = e.invoiceItems[0].subscriptionPlanId,
    n = p.default.get(t);
  return l()(null != n, "Missing subscriptionPlan"), {
    intervalType: n.interval,
    intervalCount: n.intervalCount
  }
}

function ep(e) {
  let {
    intervalType: t = b.SubscriptionIntervalTypes.MONTH,
    intervalCount: n = 1,
    capitalize: i = !1
  } = e;
  switch (t) {
    case b.SubscriptionIntervalTypes.DAY:
      if (n >= 7 && n % 7 == 0) return i ? w.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_WEEKS.format({
        weeks: n / 7
      }) : w.default.Messages.PREMIUM_TRIAL_FREE_DURATION_WEEKS.format({
        weeks: n / 7
      });
      return i ? w.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_DAYS.format({
        days: n
      }) : w.default.Messages.PREMIUM_TRIAL_FREE_DURATION_DAYS.format({
        days: n
      });
    case b.SubscriptionIntervalTypes.MONTH:
      return i ? w.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_MONTHS.format({
        months: n
      }) : w.default.Messages.PREMIUM_TRIAL_FREE_DURATION_MONTHS.format({
        months: n
      });
    case b.SubscriptionIntervalTypes.YEAR:
      return i ? w.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_YEARS.format({
        years: n
      }) : w.default.Messages.PREMIUM_TRIAL_FREE_DURATION_YEARS.format({
        years: n
      });
    default:
      throw Error("Unsupported interval duration.")
  }
}

function eO(e) {
  let {
    intervalType: t = b.SubscriptionIntervalTypes.MONTH,
    intervalCount: n = 1
  } = e;
  switch (t) {
    case b.SubscriptionIntervalTypes.DAY:
      if (n >= 7 && n % 7 == 0) return w.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_WEEKS.format({
        weeks: n / 7
      });
      return w.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_DAYS.format({
        days: n
      });
    case b.SubscriptionIntervalTypes.MONTH:
      return w.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_MONTHS.format({
        months: n
      });
    case b.SubscriptionIntervalTypes.YEAR:
      return w.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_YEARS.format({
        years: n
      });
    default:
      throw Error("Unsupported interval duration.")
  }
}

function eC(e) {
  let {
    intervalType: t = b.SubscriptionIntervalTypes.MONTH,
    intervalCount: n = 1,
    capitalize: i = !1
  } = e;
  switch (t) {
    case b.SubscriptionIntervalTypes.DAY:
      if (n >= 7 && n % 7 == 0) return i ? w.default.Messages.DURATION_WEEKS_CAPITALIZE.format({
        weeks: n / 7
      }) : w.default.Messages.DURATION_WEEKS.format({
        weeks: n / 7
      });
      return i ? w.default.Messages.DURATION_DAYS_CAPITALIZE.format({
        days: n
      }) : w.default.Messages.DURATION_DAYS.format({
        days: n
      });
    case b.SubscriptionIntervalTypes.MONTH:
      return i ? w.default.Messages.DURATION_MONTHS_CAPITALIZE.format({
        months: n
      }) : w.default.Messages.DURATION_MONTHS.format({
        months: n
      });
    case b.SubscriptionIntervalTypes.YEAR:
      return i ? w.default.Messages.DURATION_YEARS_CAPITALIZE.format({
        years: n
      }) : w.default.Messages.DURATION_YEARS.format({
        years: n
      });
    default:
      throw Error("Unsupported interval duration.")
  }
}

function eR(e, t) {
  switch (e) {
    case P.PaymentGateways.APPLE_PARTNER:
    case P.PaymentGateways.APPLE:
      return k[t];
    case P.PaymentGateways.GOOGLE:
      return B[t]
  }
  throw Error("Invalid external payment gateway ".concat(e))
}

function eg(e, t) {
  return (0, D.isPremium)(e) || eh(null == t ? void 0 : t.status)
}

function eL(e, t) {
  var n, i;
  let r = [],
    s = (null !== (i = null === (n = e.renewalMutations) || void 0 === n ? void 0 : n.items) && void 0 !== i ? i : e.items).find(e => b.PREMIUM_PLANS.has(e.planId));
  return null != s && r.push(s), r.push(...t), r.map(t => {
    for (let n of e.items)
      if (t.planId === n.planId) return {
        ...n,
        ...t
      };
    return t
  })
}

function ev(e) {
  return e.filter(e => !b.PREMIUM_PLANS.has(e.planId))
}

function eD(e, t, n, i) {
  var r, s;
  l()(i.has(t), "Expected planId in group");
  let a = !1,
    o = (null !== (s = null === (r = e.renewalMutations) || void 0 === r ? void 0 : r.items) && void 0 !== s ? s : e.items).map(e => i.has(e.planId) ? (a = !0, {
      ...e,
      quantity: n,
      planId: t
    }) : e);
  if (!a) {
    let i = {
        planId: t,
        quantity: n
      },
      r = e.items.find(e => e.planId === t);
    null != r && (i.id = r.id), o.push(i)
  }
  return o.filter(e => 0 !== e.quantity)
}

function eM(e, t) {
  return eD(e, t, 1, b.PREMIUM_PLANS)
}

function ey(e, t, n) {
  return eD(e, n, t, b.PREMIUM_GUILD_SUBSCRIPTION_PLANS)
}

function eP(e) {
  var t;
  let n = null !== (t = e.find(e => !("id" in e))) && void 0 !== t ? t : e.find(e => b.PREMIUM_PLANS.has(e.planId));
  if (null != n) {
    let t = p.default.get(n.planId);
    l()(null != t, "Missing plan"), e = e.map(e => {
      if (e === n) return e;
      let i = p.default.get(e.planId);
      l()(null != i, "Missing plan");
      let r = p.default.getForSkuAndInterval(i.skuId, t.interval, t.intervalCount);
      return l()(null != r, "Missing planForInterval"), {
        ...e,
        planId: r.id
      }
    })
  }
  return e
}

function eU(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      useSpace: !0
    },
    n = b.PremiumUserLimits[e].fileSize;
  return (0, g.formatSize)(n / 1024, {
    useKibibytes: !0,
    useSpace: t.useSpace
  })
}

function eb(e) {
  return null == e ? null : e.items.find(e => b.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(e.planId))
}

function eG(e) {
  let t = null != e ? F(e) : null;
  return null != t ? er(t.planId) : null
}

function ew(e) {
  return e
}
t.default = Object.freeze({
  isNewUser: e => null != e && Date.now() - e.createdAt.getTime() < 2592e6,
  isPremiumAtLeast: D.isPremiumAtLeast,
  isPremium: D.isPremium,
  isPremiumExactly: D.isPremiumExactly,
  getPrice: Y,
  getDefaultPrice: H,
  getInterval: function(e) {
    let t = b.SubscriptionPlanInfo[e];
    if (null != t) return {
      intervalType: t.interval,
      intervalCount: t.intervalCount
    };
    let n = Error("Unsupported plan");
    throw (0, C.captureBillingException)(n, {
      tags: {
        planId: e
      }
    }), n
  },
  getIntervalString: K,
  getIntervalStringAsNoun: z,
  getPremiumType: Z,
  getDisplayName: Q,
  getDisplayPremiumType: J,
  getPremiumPlanOptions: ei,
  getUpgradeEligibilities: es,
  getPlanDescription: ee,
  isPremiumSku: function(e) {
    return e === b.PremiumSubscriptionSKUs.TIER_0 || e === b.PremiumSubscriptionSKUs.TIER_1 || e === b.PremiumSubscriptionSKUs.TIER_2
  },
  getClosestUpgrade: function(e) {
    let t = b.SubscriptionPlanInfo[e];
    if (null == t) throw Error("Unrecognized plan.");
    let {
      interval: n
    } = t, i = es(e);
    for (let e of Object.keys(b.SubscriptionPlanInfo)) {
      let {
        interval: t
      } = b.SubscriptionPlanInfo[e];
      if (n === t && i.includes(e)) return e
    }
    return null
  },
  getIntervalMonths: function(e, t) {
    if (e === b.SubscriptionIntervalTypes.MONTH) return t;
    if (e === b.SubscriptionIntervalTypes.YEAR) return 12 * t;
    throw Error("".concat(e, " interval subscription period not implemented"))
  },
  getUserMaxFileSize: v.getUserMaxFileSize,
  getSkuIdForPlan: er,
  getSkuIdForPremiumType: function(e) {
    switch (e) {
      case b.PremiumTypes.TIER_0:
        return b.PremiumSubscriptionSKUs.TIER_0;
      case b.PremiumTypes.TIER_1:
        return b.PremiumSubscriptionSKUs.TIER_1;
      case b.PremiumTypes.TIER_2:
        return b.PremiumSubscriptionSKUs.TIER_2
    }
  },
  getNumIncludedPremiumGuildSubscriptionSlots: function(e) {
    if (Z(e) === b.PremiumTypes.TIER_2) return b.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM;
    return 0
  },
  getBillingInformationString: function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = n ? (0, y.formatPrice)(t.invoiceItems.filter(e => b.PREMIUM_TIER_2_PLANS.has(e.subscriptionPlanId)).map(e => e.amount).reduce((e, t) => t + e, 0), t.currency) : (0, y.formatPrice)(t.total, t.currency);
    if (e.status === P.SubscriptionStatusTypes.CANCELED) return w.default.Messages.PREMIUM_SETTINGS_CANCELLED_INFO.format({
      endDate: t.subscriptionPeriodStart
    });
    if (e.status === P.SubscriptionStatusTypes.PAUSE_PENDING) return w.default.Messages.PREMIUM_SETTINGS_PAUSE_PENDING_INFO.format({
      pauseDate: e.currentPeriodEnd,
      resumeDate: e.pauseEndsAt
    });
    if (e.status === P.SubscriptionStatusTypes.PAUSED) return null == e.pauseEndsAt ? n ? w.default.Messages.PREMIUM_SETTINGS_PAUSED_INFO_WITH_PLAN.format({
      planName: w.default.Messages.PREMIUM,
      price: i
    }) : w.default.Messages.PREMIUM_SETTINGS_PAUSED_INFO : n ? w.default.Messages.PREMIUM_SETTINGS_PAUSE_ENDS_AT_INFO_WITH_PLAN.format({
      planName: w.default.Messages.PREMIUM,
      resumeDate: e.pauseEndsAt,
      price: i
    }) : w.default.Messages.PREMIUM_SETTINGS_PAUSE_ENDS_AT_INFO.format({
      resumeDate: e.pauseEndsAt
    });
    else if (e.status === P.SubscriptionStatusTypes.PAST_DUE) {
      var r, s;
      let t = e_(e).expiresDate;
      return (e.isPurchasedViaGoogle && (null === (r = e.metadata) || void 0 === r ? void 0 : r.google_grace_period_expires_date) != null && (t = d()(e.metadata.google_grace_period_expires_date)), e.isPurchasedViaApple && (null === (s = e.metadata) || void 0 === s ? void 0 : s.apple_grace_period_expires_date) != null && (t = d()(e.metadata.apple_grace_period_expires_date)), e.isPurchasedExternally) ? w.default.Messages.PREMIUM_SETTINGS_PAST_DUE_INFO_EXTERNAL.format({
        endDate: t,
        paymentGatewayName: G.PaymentGatewayToFriendlyName[e.paymentGateway],
        paymentSourceLink: eR(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")
      }) : w.default.Messages.PREMIUM_SETTINGS_PAST_DUE_INFO.format({
        endDate: t,
        price: i
      })
    } else return e.status === P.SubscriptionStatusTypes.BILLING_RETRY ? w.default.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_PRICE.format({
      endDate: d()(e.currentPeriodStart).add(b.PAID_SUBSCRIPTION_MAX_BILLING_RETRY_DAYS, "days"),
      price: i
    }) : e.status === P.SubscriptionStatusTypes.ACCOUNT_HOLD ? e.isPurchasedViaGoogle && !(0, L.isAndroid)() ? w.default.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_EXTERNAL.format({
      endDate: d()(e.currentPeriodStart).add(b.MAX_ACCOUNT_HOLD_DAYS, "days"),
      paymentGatewayName: G.PaymentGatewayToFriendlyName[e.paymentGateway],
      paymentSourceLink: eR(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")
    }) : w.default.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_PRICE.format({
      endDate: d()(e.currentPeriodStart).add(b.MAX_ACCOUNT_HOLD_DAYS, "days"),
      price: i
    }) : function(e) {
      return null != e.paymentSourceId && ec(e.paymentSourceId)
    }(e) ? w.default.Messages.PREMIUM_SETTINGS_PREPAID_THROUGH_DATE.format({
      prepaidEndDate: e.currentPeriodEnd
    }) : e.status === P.SubscriptionStatusTypes.UNPAID ? w.default.Messages.PREMIUM_SETTINGS_PAYMENT_PROCESSING.format({
      maxProcessingTimeInDays: b.MAX_PAYMENT_PROCESSING_TIME_DAYS
    }) : e.isPurchasedExternally ? w.default.Messages.PREMIUM_SETTINGS_RENEWAL_INFO_EXTERNAL.format({
      renewalDate: t.subscriptionPeriodStart,
      paymentGatewayName: G.PaymentGatewayToFriendlyName[e.paymentGateway],
      subscriptionManagementLink: eR(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
    }) : n ? w.default.Messages.PREMIUM_SETTINGS_RENEWAL_INFO_WITH_PLAN.format({
      planName: w.default.Messages.PREMIUM,
      renewalDate: t.subscriptionPeriodStart,
      price: i
    }) : w.default.Messages.PREMIUM_SETTINGS_RENEWAL_INFO.format({
      renewalDate: t.subscriptionPeriodStart,
      price: i
    })
  },
  isNoneSubscription: h.isNoneSubscription,
  getPlanIdFromInvoice: function(e, t) {
    let {
      planId: n
    } = e;
    if (e.status === P.SubscriptionStatusTypes.CANCELED || e.status === P.SubscriptionStatusTypes.PAUSE_PENDING) return n;
    l()(null != t, "Expected invoicePreview");
    let i = t.invoiceItems.find(e => {
      let {
        subscriptionPlanId: t
      } = e;
      return el(t)
    });
    return n = null == i || (0, h.isNoneSubscription)(i.subscriptionPlanId) ? e.planId : null != e.renewalMutations && e.renewalMutations.planId !== e.planId ? e.planId : i.subscriptionPlanId
  },
  getStatusFromInvoice: function(e, t) {
    let {
      status: n
    } = e;
    if (e.status === P.SubscriptionStatusTypes.CANCELED || e.status === P.SubscriptionStatusTypes.PAUSE_PENDING) return n;
    l()(null != t, "Expected invoicePreview");
    let i = t.invoiceItems.find(e => {
      let {
        subscriptionPlanId: t
      } = e;
      return el(t)
    });
    return (null == i || (0, h.isNoneSubscription)(i.subscriptionPlanId)) && (n = P.SubscriptionStatusTypes.CANCELED), n
  },
  isBaseSubscriptionCanceled: eS,
  getPremiumGuildIntervalPrice: eA,
  hasAccountCredit: function(e) {
    return null != e && 0 !== e.size && Array.from(e).some(e => {
      let {
        subscriptionPlanId: t,
        parentId: n,
        consumed: i
      } = e;
      return null != t && null != n && !i
    })
  },
  getBillingReviewSubheader: em,
  getIntervalForInvoice: eN,
  getPremiumPlanItem: F,
  getGuildBoostPlanItem: eb,
  isBoostOnlySubscription: function(e) {
    return null != e && null == F(e) && null != eb(e)
  },
  getPremiumSkuIdForSubscription: eG,
  getPremiumTypeFromSubscription: function(e) {
    if (null != e) {
      let t = F(e);
      if (null != t) return Z(t.planId)
    }
  },
  getPremiumTypeFromSubscriptionRenewalMutations: function(e) {
    if (null != e && null != e.renewalMutations) {
      let t = F(e.renewalMutations);
      if (null != t) return Z(t.planId)
    }
  },
  getPremiumGradientColor: function(e) {
    switch (e) {
      case b.PremiumTypes.TIER_0:
        return U.Gradients.PREMIUM_TIER_0;
      case b.PremiumTypes.TIER_1:
        return U.Gradients.PREMIUM_TIER_1;
      case b.PremiumTypes.TIER_2:
        return U.Gradients.PREMIUM_TIER_2
    }
  },
  castPremiumSubscriptionAsSkuId: ew,
  canUseAnimatedEmojis: function(e) {
    return (0, T.canUserUse)(T.ANIMATED_EMOJIS, e)
  },
  canUseEmojisEverywhere: function(e) {
    return (0, T.canUserUse)(T.EMOJIS_EVERYWHERE, e)
  },
  canUseSoundboardEverywhere: function(e) {
    return (0, T.canUserUse)(T.SOUNDBOARD_EVERYWHERE, e)
  },
  canUseCustomCallSounds: function(e) {
    return (0, T.canUserUse)(T.CUSTOM_CALL_SOUNDS, e)
  },
  canUploadLargeFiles: function(e) {
    return (0, T.canUserUse)(T.UPLOAD_LARGE_FILES, e)
  },
  canUseBadges: function(e) {
    return (0, T.canUserUse)(T.PROFILE_BADGES, e)
  },
  canUseHighVideoUploadQuality: function(e) {
    return (0, T.canUserUse)(T.INCREASED_VIDEO_UPLOAD_QUALITY, e)
  },
  canEditDiscriminator: function(e) {
    return (0, T.canUserUse)(T.CUSTOM_DISCRIMINATOR, e)
  },
  hasBoostDiscount: function(e) {
    return (0, T.canUserUse)(T.BOOST_DISCOUNT, e)
  },
  canUseAnimatedAvatar: function(e) {
    return (0, T.canUserUse)(T.ANIMATED_AVATAR, e)
  },
  canUseFancyVoiceChannelReactions: function(e) {
    return (0, T.canUserUse)(T.FANCY_VOICE_CHANNEL_REACTIONS, e)
  },
  canInstallPremiumApplications: function(e) {
    return (0, T.canUserUse)(T.INSTALL_PREMIUM_APPLICATIONS, e)
  },
  canUseIncreasedMessageLength: function(e) {
    return (0, T.canUserUse)(T.INCREASED_MESSAGE_LENGTH, e)
  },
  canUseIncreasedGuildCap: function(e) {
    return (0, T.canUserUse)(T.INCREASED_GUILD_LIMIT, e)
  },
  canRedeemPremiumPerks: function(e) {
    return (0, T.canUserUse)(T.REDEEM_PREMIUM_PERKS, e)
  },
  canUsePremiumProfileCustomization: function(e) {
    return (0, T.canUserUse)(T.PROFILE_PREMIUM_FEATURES, e)
  },
  canUsePremiumAppIcons: function(e) {
    return (0, T.canUserUse)(T.APP_ICONS, e)
  },
  canUsePremiumGuildMemberProfile: function(e) {
    return (0, T.canUserUse)(T.PREMIUM_GUILD_MEMBER_PROFILE, e)
  },
  canUseClientThemes: function(e) {
    return (0, T.canUserUse)(T.CLIENT_THEMES, e)
  },
  canStreamQuality: function(e, t) {
    return !! function(e) {
      var t;
      let n = I.default.getPerksDemos();
      return null !== (t = null == n ? void 0 : n[e]) && void 0 !== t && t
    }(_.EntitlementFeatureNames.STREAM_HIGH_QUALITY) || ("high" === e ? (0, T.canUserUse)(T.STREAM_HIGH_QUALITY, t) : "mid" === e && (0, T.canUserUse)(T.STREAM_MID_QUALITY, t))
  },
  hasFreeBoosts: function(e) {
    return (0, T.canUserUse)(T.FREE_BOOSTS, e)
  },
  canUseCustomStickersEverywhere: function(e) {
    return (0, T.canUserUse)(T.STICKERS_EVERYWHERE, e)
  },
  canUseCustomBackgrounds: function(e) {
    return (0, T.canUserUse)(T.VIDEO_FILTER_ASSETS, e)
  },
  canUseCollectibles: function(e) {
    return (0, T.canUserUse)(T.COLLECTIBLES, e)
  },
  canUseCustomNotificationSounds: function(e) {
    return (0, T.canUserUse)(T.CUSTOM_NOTIFICATION_SOUNDS, e)
  },
  formatPriceString: function(e, t) {
    let n = (0, y.formatPrice)(e.amount, e.currency),
      i = z(t);
    return "".concat(n, "/").concat(i)
  },
  StreamQuality: r
})