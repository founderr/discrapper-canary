"use strict";
n.r(t), n.d(t, {
  isPremiumAtLeast: function() {
    return A.isPremiumAtLeast
  },
  isPremium: function() {
    return A.isPremium
  },
  isPremiumExactly: function() {
    return A.isPremiumExactly
  },
  StreamQuality: function() {
    return r
  },
  getPremiumPlanItem: function() {
    return k
  },
  getDefaultPrice: function() {
    return G
  },
  getPrice: function() {
    return x
  },
  experimentalGetPrices: function() {
    return F
  },
  getDiscountIntervalString: function() {
    return V
  },
  getIntervalString: function() {
    return B
  },
  getIntervalStringAsNoun: function() {
    return H
  },
  getPremiumType: function() {
    return j
  },
  getDisplayName: function() {
    return Y
  },
  getDisplayNameFromSku: function() {
    return W
  },
  getTierDisplayName: function() {
    return K
  },
  getDisplayPremiumType: function() {
    return z
  },
  getPremiumTypeDisplayName: function() {
    return q
  },
  getPlanDescriptionFromInvoice: function() {
    return X
  },
  getExternalPlanDisplayName: function() {
    return Z
  },
  getPremiumPlanOptions: function() {
    return J
  },
  getNumPremiumGuildSubscriptions: function() {
    return et
  },
  isPremiumBaseSubscriptionPlan: function() {
    return ei
  },
  isPremiumGuildSubscriptionPlan: function() {
    return er
  },
  isPremiumSubscriptionPlan: function() {
    return es
  },
  getBillingGracePeriodDays: function() {
    return ea
  },
  isPrepaidPaymentSource: function() {
    return eo
  },
  isPremiumGuildSubscriptionCanceled: function() {
    return el
  },
  getPremiumGuildHeaderDescription: function() {
    return eu
  },
  getFormattedPriceForPlan: function() {
    return ec
  },
  getFormattedRateForPlan: function() {
    return ed
  },
  isSubscriptionStatusFailedPayment: function() {
    return eh
  },
  getBillingReviewSubheader: function() {
    return eE
  },
  getIntervalForInvoice: function() {
    return e_
  },
  formatTrialOfferIntervalDuration: function() {
    return em
  },
  formatTrialCtaIntervalDuration: function() {
    return eS
  },
  formatIntervalDuration: function() {
    return eg
  },
  getExternalSubscriptionMethodUrl: function() {
    return eT
  },
  hasPremiumSubscriptionToDisplay: function() {
    return eI
  },
  getItemsFromNewAdditionalPlans: function() {
    return ev
  },
  getItemsWithoutPremiumPlanItem: function() {
    return eC
  },
  getItemsWithUpsertedPlanIdForGroup: function() {
    return eA
  },
  getItemsWithUpsertedPremiumPlanId: function() {
    return eR
  },
  getItemsWithUpsertedPremiumGuildPlan: function() {
    return eN
  },
  coerceExistingItemsToNewItemInterval: function() {
    return ey
  },
  getMaxFileSizeForPremiumType: function() {
    return eO
  },
  getPremiumSkuIdForSubscription: function() {
    return eb
  },
  default: function() {
    return eP
  }
}), n("70102"), n("222007"), n("843762"), n("808653"), n("424973");
var i, r, s, a, o = n("627445"),
  l = n.n(o),
  u = n("866227"),
  c = n.n(u);
n("446674");
var d = n("605250"),
  p = n("432155"),
  h = n("669073"),
  f = n("797647"),
  E = n("697218"),
  _ = n("160299"),
  m = n("357957"),
  S = n("10514"),
  g = n("521012"),
  T = n("745279"),
  I = n("993105"),
  v = n("773336"),
  C = n("886551"),
  A = n("764364"),
  R = n("719923"),
  N = n("153160"),
  y = n("49111"),
  O = n("504593"),
  D = n("646718"),
  b = n("843455"),
  P = n("782340");
let L = {
    PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
    BILLING_HISTORY: "https://support.apple.com/HT201266",
    SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039"
  },
  M = {
    SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
    PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
    BILLING_HISTORY: "https://play.google.com/store/account/orderhistory"
  },
  U = new d.default("PremiumUtils.tsx"),
  w = {
    [D.SubscriptionPlans.NONE_MONTH]: [D.SubscriptionPlans.NONE_YEAR, D.SubscriptionPlans.PREMIUM_YEAR_TIER_2, D.SubscriptionPlans.PREMIUM_MONTH_TIER_2, D.SubscriptionPlans.PREMIUM_YEAR_TIER_1, D.SubscriptionPlans.PREMIUM_MONTH_TIER_1],
    [D.SubscriptionPlans.NONE_YEAR]: [D.SubscriptionPlans.PREMIUM_YEAR_TIER_2, D.SubscriptionPlans.PREMIUM_MONTH_TIER_2, D.SubscriptionPlans.PREMIUM_YEAR_TIER_1, D.SubscriptionPlans.PREMIUM_MONTH_TIER_1],
    [D.SubscriptionPlans.PREMIUM_MONTH_TIER_0]: [D.SubscriptionPlans.PREMIUM_YEAR_TIER_2, D.SubscriptionPlans.PREMIUM_MONTH_TIER_2, D.SubscriptionPlans.PREMIUM_YEAR_TIER_1, D.SubscriptionPlans.PREMIUM_MONTH_TIER_1, D.SubscriptionPlans.PREMIUM_YEAR_TIER_0],
    [D.SubscriptionPlans.PREMIUM_YEAR_TIER_0]: [D.SubscriptionPlans.PREMIUM_YEAR_TIER_2, D.SubscriptionPlans.PREMIUM_MONTH_TIER_2, D.SubscriptionPlans.PREMIUM_YEAR_TIER_1, D.SubscriptionPlans.PREMIUM_MONTH_TIER_1],
    [D.SubscriptionPlans.PREMIUM_MONTH_TIER_1]: [D.SubscriptionPlans.PREMIUM_YEAR_TIER_2, D.SubscriptionPlans.PREMIUM_MONTH_TIER_2, D.SubscriptionPlans.PREMIUM_YEAR_TIER_1],
    [D.SubscriptionPlans.PREMIUM_YEAR_TIER_1]: [D.SubscriptionPlans.PREMIUM_YEAR_TIER_2],
    [D.SubscriptionPlans.PREMIUM_MONTH_TIER_2]: [D.SubscriptionPlans.PREMIUM_YEAR_TIER_2],
    [D.SubscriptionPlans.PREMIUM_YEAR_TIER_2]: [],
    ALL: [D.SubscriptionPlans.NONE_MONTH, D.SubscriptionPlans.NONE_YEAR, D.SubscriptionPlans.PREMIUM_YEAR_TIER_2, D.SubscriptionPlans.PREMIUM_MONTH_TIER_2, D.SubscriptionPlans.PREMIUM_YEAR_TIER_1, D.SubscriptionPlans.PREMIUM_MONTH_TIER_1, D.SubscriptionPlans.PREMIUM_YEAR_TIER_0, D.SubscriptionPlans.PREMIUM_MONTH_TIER_0]
  };

function k(e) {
  return e.items.find(e => D.PREMIUM_PLANS.has(e.planId))
}

function G(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = null !== (t = m.default.defaultPaymentSourceId) && void 0 !== t ? t : void 0,
    s = g.default.getPremiumTypeSubscription();
  return null != s && null != s.paymentSourceId && (r = s.paymentSourceId), x(e, n, i, {
    paymentSourceId: r
  })
}

function x(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
    {
      paymentSourceId: r,
      currency: s
    } = i,
    a = S.default.get(e);
  if (null != a) {
    let i = y.PriceSetAssignmentPurchaseTypes.DEFAULT;
    n ? i = y.PriceSetAssignmentPurchaseTypes.GIFT : t && (i = y.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_1);
    let a = function(e) {
      let {
        paymentSourceId: t,
        purchaseType: n,
        currency: i
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        purchaseType: y.PriceSetAssignmentPurchaseTypes.DEFAULT
      }, r = F(e, {
        paymentSourceId: t,
        purchaseType: n
      });
      return (0 === r.length && U.warn("No prices found for planId: ".concat(e, ", paymentSourceId: ").concat(t, ", purchaseType: ").concat(n)), null != i) ? r.find(e => e.currency === i) : r[0]
    }(e, {
      paymentSourceId: r,
      purchaseType: i,
      currency: s
    });
    if (null == a) {
      let t = Error("Couldn't find price");
      throw (0, T.captureBillingException)(t, {
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
  let o = Error("Plan not found");
  throw (0, T.captureBillingException)(o, {
    tags: {
      planId: e,
      currency: null != s ? s : "unknown"
    },
    extra: {
      ...i,
      isGift: n
    }
  }), o
}(s = i || (i = {})).BUNDLE = "bundle", s.TIER_0 = "tier_0", s.TIER_1 = "tier_1", s.TIER_2 = "tier_2", s.PREMIUM_GUILD = "premium_guild", (a = r || (r = {})).MID = "mid", a.HIGH = "high";

function F(e) {
  let {
    paymentSourceId: t,
    purchaseType: n
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
    purchaseType: y.PriceSetAssignmentPurchaseTypes.DEFAULT
  }, i = function(e, t) {
    let n = S.default.get(e);
    if (null == n) {
      let n = Error("Plan not found");
      throw (0, T.captureBillingException)(n, {
        tags: {
          planId: e,
          purchaseType: t.toString()
        }
      }), n
    }
    if (null == n.prices) throw Error("No prices returned for ".concat(e, ", is your user in the experiment?"));
    let i = n.prices[t];
    if (null == i) throw U.info("Purchase types: ".concat(JSON.stringify(Object.keys(n.prices)))), Error("No prices returned for purchase type ".concat(t, " for plan ").concat(e));
    return i
  }(e, n);
  if (null != t) {
    let r = i.paymentSourcePrices[t];
    if (null == r) {
      U.info("Payment sources IDs: ".concat(JSON.stringify(Object.keys(i.paymentSourcePrices)))), U.info("prices: ".concat(r));
      let s = Error("Missing prices for payment source on subscription plan");
      (0, T.captureBillingException)(s, {
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
    U.info("countryPrices: ".concat(JSON.stringify(i.countryPrices)));
    let t = Error("Missing prices for country");
    throw (0, T.captureBillingException)(t, {
      tags: {
        countryCode: i.countryPrices.countryCode,
        planId: e
      }
    }), t
  }
  return i.countryPrices.prices
}

function V(e) {
  switch (e) {
    case D.DiscountUserUsageLimitIntervalTypes.MONTH:
      return P.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
    case D.DiscountUserUsageLimitIntervalTypes.YEAR:
      return P.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
    case D.DiscountUserUsageLimitIntervalTypes.DAY:
    case D.DiscountUserUsageLimitIntervalTypes.WEEK:
    default:
      throw Error("Unexpected interval")
  }
}

function B(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
    r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
    s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : D.PremiumTypes.TIER_2;
  if (t || n) switch (e) {
    case D.SubscriptionIntervalTypes.MONTH:
      let a = (s === D.PremiumTypes.TIER_0 ? P.default.Messages.BASIC_GIFT_DURATION : P.default.Messages.GIFT_DURATION).format({
        timeInterval: P.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH
      });
      return r ? a : P.default.Messages.PAYMENT_MODAL_ONE_MONTH;
    case D.SubscriptionIntervalTypes.YEAR:
      let o = (s === D.PremiumTypes.TIER_0 ? P.default.Messages.BASIC_GIFT_DURATION : P.default.Messages.GIFT_DURATION).format({
        timeInterval: P.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
      });
      return r ? o : P.default.Messages.PAYMENT_MODAL_ONE_YEAR;
    default:
      throw Error("Unexpected interval")
  }
  switch (e) {
    case D.SubscriptionIntervalTypes.MONTH:
      if (1 !== i) return P.default.Messages.MULTI_MONTHS.format({
        intervalCount: i
      });
      return P.default.Messages.MONTHLY;
    case D.SubscriptionIntervalTypes.YEAR:
      return P.default.Messages.YEARLY;
    default:
      throw Error("Unexpected interval")
  }
}

function H(e) {
  switch (e) {
    case D.SubscriptionIntervalTypes.MONTH:
      return P.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
    case D.SubscriptionIntervalTypes.YEAR:
      return P.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
    default:
      throw Error("Unexpected interval")
  }
}

function j(e) {
  let t = D.SubscriptionPlanInfo[e];
  if (null != t) return t.premiumType;
  let n = Error("Unsupported plan");
  throw (0, T.captureBillingException)(n, {
    tags: {
      planId: e
    }
  }), n
}

function Y(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = arguments.length > 3 ? arguments[3] : void 0;
  switch (e) {
    case D.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
      return t ? P.default.Messages.PREMIUM_PLAN_MONTH_TIER_0_TRIAL_DURATION.format({
        duration: i
      }) : n ? P.default.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_0 : P.default.Messages.PREMIUM_PLAN_MONTH_TIER_0;
    case D.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
      return t ? P.default.Messages.PREMIUM_PLAN_YEAR_TIER_0_TRIAL_DURATION.format({
        duration: i
      }) : n ? P.default.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_0 : P.default.Messages.PREMIUM_PLAN_YEAR_TIER_0;
    case D.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
      return n ? P.default.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_1 : P.default.Messages.PREMIUM_PLAN_MONTH_TIER_1;
    case D.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
      return n ? P.default.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_1 : P.default.Messages.PREMIUM_PLAN_YEAR_TIER_1;
    case D.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
      return t ? P.default.Messages.PREMIUM_PLAN_MONTH_TIER_2_TRIAL_DURATION.format({
        duration: i
      }) : n ? P.default.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_2 : P.default.Messages.PREMIUM_PLAN_MONTH_TIER_2;
    case D.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
      return t ? P.default.Messages.PREMIUM_PLAN_YEAR_TIER_2_TRIAL_DURATION.format({
        duration: i
      }) : n ? P.default.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_2 : P.default.Messages.PREMIUM_PLAN_YEAR_TIER_2;
    case D.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
      return P.default.Messages.PREMIUM_PLAN_3_MONTH_TIER_2;
    case D.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
      return P.default.Messages.PREMIUM_PLAN_6_MONTH_TIER_2;
    case D.SubscriptionPlans.PREMIUM_MONTH_GUILD:
      return n ? P.default.Messages.PREMIUM_GUILD_PLAN_SINGLE_MONTH : P.default.Messages.PREMIUM_GUILD_PLAN_MONTH;
    case D.SubscriptionPlans.PREMIUM_YEAR_GUILD:
      return n ? P.default.Messages.PREMIUM_GUILD_PLAN_SINGLE_YEAR : P.default.Messages.PREMIUM_GUILD_PLAN_YEAR;
    case D.SubscriptionPlans.PREMIUM_3_MONTH_GUILD:
      return P.default.Messages.PREMIUM_GUILD_PLAN_3_MONTH;
    case D.SubscriptionPlans.PREMIUM_6_MONTH_GUILD:
      return P.default.Messages.PREMIUM_GUILD_PLAN_6_MONTH;
    case D.SubscriptionPlans.PREMIUM_MONTH_LEGACY:
      return P.default.Messages.PREMIUM_PLAN_MONTH;
    case D.SubscriptionPlans.PREMIUM_YEAR_LEGACY:
      return P.default.Messages.PREMIUM_PLAN_YEAR
  }
  let r = Error("Unsupported plan");
  throw (0, T.captureBillingException)(r, {
    tags: {
      planId: e
    }
  }), r
}

function W(e) {
  switch (e) {
    case D.PremiumSubscriptionSKUs.TIER_0:
      return P.default.Messages.PREMIUM_TIER_0;
    case D.PremiumSubscriptionSKUs.TIER_1:
      return P.default.Messages.PREMIUM_TIER_1;
    case D.PremiumSubscriptionSKUs.TIER_2:
      return P.default.Messages.PREMIUM_TIER_2
  }
  let t = Error("Unsupported sku");
  throw (0, T.captureBillingException)(t, {
    tags: {
      skuId: e
    }
  }), t
}

function K(e) {
  switch (e) {
    case D.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
    case D.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
      return P.default.Messages.PREMIUM_TIER_0;
    case D.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
    case D.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
      return P.default.Messages.PREMIUM_TIER_1;
    case D.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
    case D.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
    case D.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
    case D.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
      return P.default.Messages.PREMIUM_TIER_2
  }
  let t = Error("Unsupported plan");
  throw (0, T.captureBillingException)(t, {
    tags: {
      planId: e
    }
  }), t
}

function z(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  switch (e) {
    case D.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
    case D.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
      return t ? "Basic" : "Nitro Basic";
    case D.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
    case D.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
      return t ? "Classic" : "Nitro Classic";
    case D.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
    case D.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
    case D.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
    case D.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
      return "Nitro"
  }
  let n = Error("Unsupported plan");
  throw (0, T.captureBillingException)(n, {
    tags: {
      planId: e
    }
  }), n
}

function q(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  switch (e) {
    case D.PremiumTypes.TIER_0:
      return t ? "Basic" : P.default.Messages.PREMIUM_TIER_0;
    case D.PremiumTypes.TIER_1:
      return t ? "Classic" : P.default.Messages.PREMIUM_TIER_1;
    case D.PremiumTypes.TIER_2:
      return P.default.Messages.PREMIUM_TIER_2
  }
}

function Q(e) {
  var t, n;
  let {
    subscription: i,
    planId: r,
    price: s,
    includePremiumGuilds: a,
    hasDiscountApplied: o
  } = e, l = R.default.formatPriceString(R.default.getDefaultPrice(D.SubscriptionPlans.PREMIUM_MONTH_TIER_2), D.SubscriptionIntervalTypes.MONTH), u = ep(i) || null == i.paymentSourceId && !i.isPurchasedExternally && !(null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.hasFreePremium()), c = null != s, d = i.status === y.SubscriptionStatusTypes.UNPAID && null !== i.latestInvoice && (null === (n = i.latestInvoice) || void 0 === n ? void 0 : n.status) === y.InvoiceStatusTypes.OPEN, p = u ? y.SubscriptionStatusTypes.CANCELED : d ? y.SubscriptionStatusTypes.UNPAID : i.status, h = D.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM + (a ? et(i.additionalPlans) : 0);
  switch (r) {
    case D.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
    case D.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
      switch (p) {
        case y.SubscriptionStatusTypes.CANCELED:
          return c ? P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION.format({
            price: s
          }) : P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION_NO_PRICE;
        case y.SubscriptionStatusTypes.ACCOUNT_HOLD:
          return c ? P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD.format({
            price: s
          }) : P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD_NO_PRICE.format();
        case y.SubscriptionStatusTypes.UNPAID:
          return P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_PAYMENT.format();
        default:
          return c ? P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0.format({
            price: s
          }) : P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_NO_PRICE
      }
    case D.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
    case D.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
      switch (p) {
        case y.SubscriptionStatusTypes.CANCELED:
          return c ? P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION.format({
            price: s
          }) : P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION_NO_PRICE;
        case y.SubscriptionStatusTypes.ACCOUNT_HOLD:
          return c ? P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD.format({
            price: s
          }) : P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD_NO_PRICE.format();
        case y.SubscriptionStatusTypes.UNPAID:
          return P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_PAYMENT.format();
        default:
          return c ? P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1.format({
            price: s
          }) : P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_NO_PRICE
      }
    case D.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
    case D.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
    case D.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
    case D.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
      switch (p) {
        case y.SubscriptionStatusTypes.CANCELED:
          return c ? P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION.format({
            price: s,
            num: h
          }) : P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION_NO_PRICE.format({
            num: h
          });
        case y.SubscriptionStatusTypes.ACCOUNT_HOLD:
          return c ? P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD.format({
            price: s,
            num: h
          }) : P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD_NO_PRICE.format({
            num: h
          });
        case y.SubscriptionStatusTypes.UNPAID:
          return P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_PAYMENT.format({
            num: h
          });
        default:
          return o ? P.default.Messages.PREMIUM_TIER_SUBSCRIPTION_DESCRIPTION_AFTER_REDEMPTION.format({
            discountedPrice: s,
            regularPrice: l
          }) : c ? P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2.format({
            price: s,
            num: h
          }) : P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_NO_PRICE.format({
            num: h
          })
      }
    default:
      throw Error("Invalid planId ".concat(r))
  }
}

function X(e) {
  let {
    renewalInvoicePreview: t,
    subscription: n,
    planId: i,
    includePremiumGuilds: r = !1,
    hasDiscountApplied: s = !1
  } = e, a = S.default.get(i);
  return l(null != a, "Missing plan"), Q({
    subscription: n,
    planId: a.id,
    price: function(e, t, n) {
      let i = e.invoiceItems.find(e => {
          let {
            subscriptionPlanId: t
          } = e;
          return t === n.id
        }),
        r = null == i ? x(n.id, !1, !1, {
          paymentSourceId: t.paymentSourceId,
          currency: t.currency
        }).amount : i.amount;
      return (0, N.formatRate)((0, N.formatPrice)(r, e.currency), n.interval, n.intervalCount)
    }(t, n, a),
    includePremiumGuilds: r,
    hasDiscountApplied: s
  })
}

function Z(e) {
  let {
    planId: t,
    additionalPlans: n
  } = e, i = (0, f.isNoneSubscription)(t) ? null : Y(t), r = null == n ? void 0 : n.find(e => {
    let {
      planId: t
    } = e;
    return D.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t)
  }), s = (null == r ? void 0 : r.planId) === D.SubscriptionPlans.PREMIUM_MONTH_GUILD ? P.default.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS_UNFORMATTED : (null == r ? void 0 : r.planId) === D.SubscriptionPlans.PREMIUM_YEAR_GUILD ? P.default.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS_UNFORMATTED : null, a = null == s ? void 0 : s.format({
    num: null == r ? void 0 : r.quantity
  });
  if (null != i && null != a) return P.default.Messages.PREMIUM_WITH_PREMIUM_GUILD_EXTERNAL_PLAN_DESCRIPTION.format({
    premiumDescription: i,
    premiumGuildDescription: a
  });
  if (null != i) return i;
  if (null != a) return a;
  else throw Error("Subscription without premium or premium guild subscription")
}

function J(e) {
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
  let u = void 0 !== o && t === D.SubscriptionPlanInfo[o].skuId ? o : void 0;
  void 0 === u && l && !s && (u = D.PREMIUM_SKU_TO_MONTHLY_PLAN[t]), a && !s && (void 0 === o || l && D.PREMIUM_MONTHLY_PLANS.has(o)) && h.TrialRedemptionDefaultPlanExperiment.trackExposure({
    location: "de805e_1"
  });
  let c = [];
  switch (t) {
    case D.PremiumSubscriptionSKUs.TIER_0:
      c = [D.SubscriptionPlans.PREMIUM_YEAR_TIER_0, D.SubscriptionPlans.PREMIUM_MONTH_TIER_0];
      break;
    case D.PremiumSubscriptionSKUs.TIER_1:
      c = [D.SubscriptionPlans.PREMIUM_MONTH_TIER_1];
      break;
    case D.PremiumSubscriptionSKUs.TIER_2:
      let d = i;
      if (null != r) {
        let e = r.items[0].planId;
        if (D.MULTI_MONTH_PLANS.has(e)) {
          let t = D.SubscriptionPlanInfo[e];
          d = [...(0, D.MULTI_MONTH_PLANS)].filter(e => {
            let n = D.SubscriptionPlanInfo[e];
            return n.interval === t.interval && n.intervalCount === t.intervalCount && n.skuId === D.PremiumSubscriptionSKUs.TIER_2
          })
        } else d = []
      }
      c = [D.SubscriptionPlans.PREMIUM_YEAR_TIER_2, ...d, D.SubscriptionPlans.PREMIUM_MONTH_TIER_2];
      break;
    default:
      throw Error("Unexpected SKU: ".concat(t))
  }
  if (void 0 !== u) {
    let e = c.indexOf(u);
    c.splice(e, 1), c.unshift(u)
  }
  return c
}

function $(e) {
  let t = D.SubscriptionPlanInfo[e];
  if (null == t) {
    let t = Error("Unsupported plan");
    throw (0, T.captureBillingException)(t, {
      tags: {
        planId: e
      }
    }), t
  }
  return t.skuId
}

function ee(e) {
  var t;
  return null == e ? w.ALL : null !== (t = w[e]) && void 0 !== t ? t : []
}

function et(e) {
  let t = S.default.getPlanIdsForSkus([D.PremiumSubscriptionSKUs.GUILD]);
  l(null != t, "Missing guildSubscriptionPlanIds");
  let n = e.find(e => {
    let {
      planId: n
    } = e;
    return t.includes(n)
  });
  return null != n ? n.quantity : 0
}
let en = new Set([D.SubscriptionPlans.NONE_MONTH, D.SubscriptionPlans.NONE_3_MONTH, D.SubscriptionPlans.NONE_6_MONTH, D.SubscriptionPlans.NONE_YEAR, D.SubscriptionPlans.PREMIUM_MONTH_TIER_0, D.SubscriptionPlans.PREMIUM_MONTH_TIER_1, D.SubscriptionPlans.PREMIUM_MONTH_TIER_2, D.SubscriptionPlans.PREMIUM_YEAR_TIER_0, D.SubscriptionPlans.PREMIUM_YEAR_TIER_1, D.SubscriptionPlans.PREMIUM_YEAR_TIER_2, D.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2, D.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2]);

function ei(e) {
  return en.has(e)
}

function er(e) {
  return D.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(e)
}

function es(e) {
  return ei(e) || er(e)
}

function ea(e) {
  var t, n, i;
  if (e.isPurchasedViaApple && (null === (t = e.metadata) || void 0 === t ? void 0 : t.apple_grace_period_expires_date) != null) {
    let t = c(e.metadata.apple_grace_period_expires_date),
      n = c(e.currentPeriodStart);
    return c.duration(t.diff(n)).days()
  }
  if (e.isPurchasedViaGoogle && (null === (n = e.metadata) || void 0 === n ? void 0 : n.google_grace_period_expires_date) != null && (null === (i = e.metadata) || void 0 === i ? void 0 : i.google_original_expires_date) != null) {
    let t = c(e.metadata.google_grace_period_expires_date),
      n = c(e.metadata.google_original_expires_date);
    return c.duration(t.diff(n)).days()
  }
  if (e.isPurchasedExternally || null == e.paymentSourceId) return D.DEFAULT_MAX_GRACE_PERIOD_DAYS;
  return D.PAID_SUBSCRIPTION_MAX_GRACE_PERIOD_DAYS
}

function eo(e) {
  if (null == e) return !1;
  let t = m.default.getPaymentSource(e);
  return null != t && b.PREPAID_PAYMENT_SOURCES.has(t.type)
}

function el(e) {
  return e.isPurchasedExternally ? e.status === y.SubscriptionStatusTypes.CANCELED : function(e) {
    let {
      renewalMutations: t,
      additionalPlans: n,
      status: i
    } = e, r = et(n), s = null != t ? et(t.additionalPlans) : null;
    return 0 === s && 0 !== r ? y.SubscriptionStatusTypes.CANCELED : i
  }(e) === y.SubscriptionStatusTypes.CANCELED
}

function eu(e) {
  let {
    subscription: t,
    user: n,
    price: i,
    renewalInvoicePreview: r
  } = e, {
    planId: s,
    additionalPlans: a
  } = t, o = S.default.get(s);
  l(null != o, "Missing plan");
  let u = et(a),
    c = ef(t.planId, t.paymentSourceId, t.currency, n),
    d = c.amount * u;
  if (null != r) {
    let e = r.invoiceItems.find(e => D.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(e.subscriptionPlanId));
    null != e && (d = e.amount)
  }
  i = null != i ? i : (0, N.formatPrice)(d, t.currency);
  let p = el(t);
  return p ? t.isPurchasedViaGoogle ? P.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION_NO_PRICE.format({
    quantity: u
  }) : P.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION.format({
    quantity: u,
    rate: (0, N.formatRate)(i, o.interval, o.intervalCount)
  }) : t.status === y.SubscriptionStatusTypes.ACCOUNT_HOLD ? t.isPurchasedViaGoogle ? P.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD_NO_PRICE.format({
    quantity: u,
    boostQuantity: u
  }) : P.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD.format({
    quantity: u,
    boostQuantity: u,
    rate: (0, N.formatRate)(i, o.interval, o.intervalCount)
  }) : t.isPurchasedViaGoogle ? P.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_NO_PRICE.format({
    quantity: u
  }) : P.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO.format({
    quantity: u,
    rate: (0, N.formatRate)(i, o.interval, o.intervalCount)
  })
}

function ec(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    r = null != t ? x(e.id, !1, i, t) : G(e.id, !1, i),
    s = (0, N.formatPrice)(r.amount, r.currency);
  return e.currency !== b.CurrencyCodes.USD && !0 === n && (s = s.concat("*")), s
}

function ed(e, t, n) {
  let i = ec(e, t, n);
  return (0, N.formatRate)(i, e.interval, e.intervalCount)
}

function ep(e) {
  let {
    status: t,
    renewalMutations: n
  } = e;
  return t === y.SubscriptionStatusTypes.CANCELED || null != n && (0, f.isNoneSubscription)(n.planId) && !e.isPurchasedExternally
}

function eh(e) {
  return e === y.SubscriptionStatusTypes.PAST_DUE || e === y.SubscriptionStatusTypes.ACCOUNT_HOLD || e === y.SubscriptionStatusTypes.BILLING_RETRY
}

function ef(e, t, n, i) {
  let r = null != t ? {
      paymentSourceId: t,
      currency: n
    } : {
      country: _.default.ipCountryCodeWithFallback,
      currency: n
    },
    s = S.default.get(e);
  if (null == s) {
    let t = Error("Unsupported plan");
    throw (0, T.captureBillingException)(t, {
      tags: {
        planId: e
      }
    }), t
  }
  let a = S.default.getForSkuAndInterval(D.PremiumSubscriptionSKUs.GUILD, s.interval, s.intervalCount);
  if (null == a) {
    let t = Error("Unsupported plan");
    throw (0, T.captureBillingException)(t, {
      tags: {
        planId: e
      }
    }), t
  }
  return x(a.id, (0, A.isPremium)(i), !1, r)
}

function eE(e, t, n) {
  let i = t.id;
  if (null != e) switch (i) {
    case D.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
      return P.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_0;
    case D.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
      return P.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_0;
    case D.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
      return P.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_1;
    case D.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
      return P.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_1;
    case D.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
      return P.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_2;
    case D.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
      return P.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_2
  }
  switch (i) {
    case D.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
      return n ? P.default.Messages.BILLING_SELECT_PLAN : P.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_0;
    case D.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
      return n ? P.default.Messages.BILLING_SELECT_PLAN : P.default.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_0;
    case D.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
      return n ? P.default.Messages.BILLING_SELECT_PLAN : P.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_1;
    case D.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
      return n ? P.default.Messages.BILLING_SELECT_PLAN : P.default.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_1;
    case D.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
      return n ? P.default.Messages.BILLING_SELECT_PLAN : P.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_2;
    case D.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
      return n ? P.default.Messages.BILLING_SELECT_PLAN : P.default.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_2;
    case D.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
    case D.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
      return P.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTHS_TIER_2.format({
        intervalCount: t.intervalCount
      });
    case D.SubscriptionPlans.NONE_MONTH:
    case D.SubscriptionPlans.NONE_YEAR:
    case D.SubscriptionPlans.NONE_3_MONTH:
    case D.SubscriptionPlans.NONE_6_MONTH:
    case D.SubscriptionPlans.PREMIUM_MONTH_GUILD:
    case D.SubscriptionPlans.PREMIUM_YEAR_GUILD:
    case D.SubscriptionPlans.PREMIUM_3_MONTH_GUILD:
    case D.SubscriptionPlans.PREMIUM_6_MONTH_GUILD:
      return P.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
  }
  let r = Error("User is purchasing an unsupported plan");
  throw (0, T.captureBillingException)(r, {
    tags: {
      planId: i
    }
  }), r
}

function e_(e) {
  let t = e.invoiceItems[0].subscriptionPlanId,
    n = S.default.get(t);
  return l(null != n, "Missing subscriptionPlan"), {
    intervalType: n.interval,
    intervalCount: n.intervalCount
  }
}

function em(e) {
  let {
    intervalType: t = D.SubscriptionIntervalTypes.MONTH,
    intervalCount: n = 1,
    capitalize: i = !1
  } = e;
  switch (t) {
    case D.SubscriptionIntervalTypes.DAY:
      if (n >= 7 && n % 7 == 0) return i ? P.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_WEEKS.format({
        weeks: n / 7
      }) : P.default.Messages.PREMIUM_TRIAL_FREE_DURATION_WEEKS.format({
        weeks: n / 7
      });
      return i ? P.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_DAYS.format({
        days: n
      }) : P.default.Messages.PREMIUM_TRIAL_FREE_DURATION_DAYS.format({
        days: n
      });
    case D.SubscriptionIntervalTypes.MONTH:
      return i ? P.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_MONTHS.format({
        months: n
      }) : P.default.Messages.PREMIUM_TRIAL_FREE_DURATION_MONTHS.format({
        months: n
      });
    case D.SubscriptionIntervalTypes.YEAR:
      return i ? P.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_YEARS.format({
        years: n
      }) : P.default.Messages.PREMIUM_TRIAL_FREE_DURATION_YEARS.format({
        years: n
      });
    default:
      throw Error("Unsupported interval duration.")
  }
}

function eS(e) {
  let {
    intervalType: t = D.SubscriptionIntervalTypes.MONTH,
    intervalCount: n = 1
  } = e;
  switch (t) {
    case D.SubscriptionIntervalTypes.DAY:
      if (n >= 7 && n % 7 == 0) return P.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_WEEKS.format({
        weeks: n / 7
      });
      return P.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_DAYS.format({
        days: n
      });
    case D.SubscriptionIntervalTypes.MONTH:
      return P.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_MONTHS.format({
        months: n
      });
    case D.SubscriptionIntervalTypes.YEAR:
      return P.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_YEARS.format({
        years: n
      });
    default:
      throw Error("Unsupported interval duration.")
  }
}

function eg(e) {
  let {
    intervalType: t = D.SubscriptionIntervalTypes.MONTH,
    intervalCount: n = 1,
    capitalize: i = !1
  } = e;
  switch (t) {
    case D.SubscriptionIntervalTypes.DAY:
      if (n >= 7 && n % 7 == 0) return i ? P.default.Messages.DURATION_WEEKS_CAPITALIZE.format({
        weeks: n / 7
      }) : P.default.Messages.DURATION_WEEKS.format({
        weeks: n / 7
      });
      return i ? P.default.Messages.DURATION_DAYS_CAPITALIZE.format({
        days: n
      }) : P.default.Messages.DURATION_DAYS.format({
        days: n
      });
    case D.SubscriptionIntervalTypes.MONTH:
      return i ? P.default.Messages.DURATION_MONTHS_CAPITALIZE.format({
        months: n
      }) : P.default.Messages.DURATION_MONTHS.format({
        months: n
      });
    case D.SubscriptionIntervalTypes.YEAR:
      return i ? P.default.Messages.DURATION_YEARS_CAPITALIZE.format({
        years: n
      }) : P.default.Messages.DURATION_YEARS.format({
        years: n
      });
    default:
      throw Error("Unsupported interval duration.")
  }
}

function eT(e, t) {
  switch (e) {
    case y.PaymentGateways.APPLE_PARTNER:
    case y.PaymentGateways.APPLE:
      return L[t];
    case y.PaymentGateways.GOOGLE:
      return M[t]
  }
  throw Error("Invalid external payment gateway ".concat(e))
}

function eI(e, t) {
  return (0, A.isPremium)(e) || eh(null == t ? void 0 : t.status)
}

function ev(e, t) {
  var n, i;
  let r = [],
    s = null !== (i = null === (n = e.renewalMutations) || void 0 === n ? void 0 : n.items) && void 0 !== i ? i : e.items,
    a = s.find(e => D.PREMIUM_PLANS.has(e.planId));
  return null != a && r.push(a), r.push(...t), r.map(t => {
    for (let n of e.items)
      if (t.planId === n.planId) return {
        ...n,
        ...t
      };
    return t
  })
}

function eC(e) {
  return e.filter(e => !D.PREMIUM_PLANS.has(e.planId))
}

function eA(e, t, n, i) {
  var r, s;
  l(i.has(t), "Expected planId in group");
  let a = !1,
    o = null !== (s = null === (r = e.renewalMutations) || void 0 === r ? void 0 : r.items) && void 0 !== s ? s : e.items,
    u = o.map(e => i.has(e.planId) ? (a = !0, {
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
    null != r && (i.id = r.id), u.push(i)
  }
  return u.filter(e => 0 !== e.quantity)
}

function eR(e, t) {
  return eA(e, t, 1, D.PREMIUM_PLANS)
}

function eN(e, t, n) {
  return eA(e, n, t, D.PREMIUM_GUILD_SUBSCRIPTION_PLANS)
}

function ey(e) {
  var t;
  let n = null !== (t = e.find(e => !("id" in e))) && void 0 !== t ? t : e.find(e => D.PREMIUM_PLANS.has(e.planId));
  if (null != n) {
    let t = S.default.get(n.planId);
    l(null != t, "Missing plan"), e = e.map(e => {
      if (e === n) return e;
      let i = S.default.get(e.planId);
      l(null != i, "Missing plan");
      let r = S.default.getForSkuAndInterval(i.skuId, t.interval, t.intervalCount);
      return l(null != r, "Missing planForInterval"), {
        ...e,
        planId: r.id
      }
    })
  }
  return e
}

function eO(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      useSpace: !0
    },
    n = D.PremiumUserLimits[e].fileSize;
  return (0, I.formatSize)(n / 1024, {
    useKibibytes: !0,
    useSpace: t.useSpace
  })
}

function eD(e) {
  return null == e ? null : e.items.find(e => D.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(e.planId))
}

function eb(e) {
  let t = null != e ? k(e) : null,
    n = null != t ? $(t.planId) : null;
  return n
}
var eP = Object.freeze({
  isNewUser: e => null != e && Date.now() - e.createdAt.getTime() < 2592e6,
  isPremiumAtLeast: A.isPremiumAtLeast,
  isPremium: A.isPremium,
  isPremiumExactly: A.isPremiumExactly,
  getPrice: x,
  getDefaultPrice: G,
  getInterval: function(e) {
    let t = D.SubscriptionPlanInfo[e];
    if (null != t) return {
      intervalType: t.interval,
      intervalCount: t.intervalCount
    };
    let n = Error("Unsupported plan");
    throw (0, T.captureBillingException)(n, {
      tags: {
        planId: e
      }
    }), n
  },
  getIntervalString: B,
  getIntervalStringAsNoun: H,
  getPremiumType: j,
  getDisplayName: Y,
  getDisplayPremiumType: z,
  getPremiumPlanOptions: J,
  getUpgradeEligibilities: ee,
  getPlanDescription: Q,
  isPremiumSku: function(e) {
    return e === D.PremiumSubscriptionSKUs.TIER_0 || e === D.PremiumSubscriptionSKUs.TIER_1 || e === D.PremiumSubscriptionSKUs.TIER_2
  },
  getClosestUpgrade: function(e) {
    let t = D.SubscriptionPlanInfo[e];
    if (null == t) throw Error("Unrecognized plan.");
    let {
      interval: n
    } = t, i = ee(e);
    for (let e of Object.keys(D.SubscriptionPlanInfo)) {
      let {
        interval: t
      } = D.SubscriptionPlanInfo[e];
      if (n === t && i.includes(e)) return e
    }
    return null
  },
  getIntervalMonths: function(e, t) {
    if (e === D.SubscriptionIntervalTypes.MONTH) return t;
    if (e === D.SubscriptionIntervalTypes.YEAR) return 12 * t;
    throw Error("".concat(e, " interval subscription period not implemented"))
  },
  getUserMaxFileSize: C.getUserMaxFileSize,
  getSkuIdForPlan: $,
  getSkuIdForPremiumType: function(e) {
    switch (e) {
      case D.PremiumTypes.TIER_0:
        return D.PremiumSubscriptionSKUs.TIER_0;
      case D.PremiumTypes.TIER_1:
        return D.PremiumSubscriptionSKUs.TIER_1;
      case D.PremiumTypes.TIER_2:
        return D.PremiumSubscriptionSKUs.TIER_2
    }
  },
  getNumIncludedPremiumGuildSubscriptionSlots: function(e) {
    if (j(e) === D.PremiumTypes.TIER_2) return D.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM;
    return 0
  },
  getBillingInformationString: function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = n ? (0, N.formatPrice)(t.invoiceItems.filter(e => D.PREMIUM_TIER_2_PLANS.has(e.subscriptionPlanId)).map(e => e.amount).reduce((e, t) => t + e, 0), t.currency) : (0, N.formatPrice)(t.total, t.currency);
    if (e.status === y.SubscriptionStatusTypes.CANCELED) return P.default.Messages.PREMIUM_SETTINGS_CANCELLED_INFO.format({
      endDate: t.subscriptionPeriodStart
    });
    if (e.status === y.SubscriptionStatusTypes.PAST_DUE) {
      var r, s;
      let t = ea(e),
        n = c(e.currentPeriodStart).add(t, "days");
      return (e.isPurchasedViaGoogle && (null === (r = e.metadata) || void 0 === r ? void 0 : r.google_grace_period_expires_date) != null && (n = c(e.metadata.google_grace_period_expires_date)), e.isPurchasedViaApple && (null === (s = e.metadata) || void 0 === s ? void 0 : s.apple_grace_period_expires_date) != null && (n = c(e.metadata.apple_grace_period_expires_date)), e.isPurchasedExternally) ? P.default.Messages.PREMIUM_SETTINGS_PAST_DUE_INFO_EXTERNAL.format({
        endDate: n,
        paymentGatewayName: b.PaymentGatewayToFriendlyName[e.paymentGateway],
        paymentSourceLink: eT(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")
      }) : P.default.Messages.PREMIUM_SETTINGS_PAST_DUE_INFO.format({
        endDate: c(e.currentPeriodStart).add(t, "days"),
        price: i
      })
    }
    return e.status === y.SubscriptionStatusTypes.ACCOUNT_HOLD ? e.isPurchasedViaGoogle && !(0, v.isAndroid)() ? P.default.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_EXTERNAL.format({
      endDate: c(e.currentPeriodStart).add(D.MAX_ACCOUNT_HOLD_DAYS, "days"),
      paymentGatewayName: b.PaymentGatewayToFriendlyName[e.paymentGateway],
      paymentSourceLink: eT(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")
    }) : P.default.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_PRICE.format({
      endDate: c(e.currentPeriodStart).add(D.MAX_ACCOUNT_HOLD_DAYS, "days"),
      price: i
    }) : function(e) {
      return null != e.paymentSourceId && eo(e.paymentSourceId)
    }(e) ? P.default.Messages.PREMIUM_SETTINGS_PREPAID_THROUGH_DATE.format({
      prepaidEndDate: e.currentPeriodEnd
    }) : e.status === y.SubscriptionStatusTypes.UNPAID ? P.default.Messages.PREMIUM_SETTINGS_PAYMENT_PROCESSING.format({
      maxProcessingTimeInDays: D.MAX_PAYMENT_PROCESSING_TIME_DAYS
    }) : e.isPurchasedExternally ? P.default.Messages.PREMIUM_SETTINGS_RENEWAL_INFO_EXTERNAL.format({
      renewalDate: t.subscriptionPeriodStart,
      paymentGatewayName: b.PaymentGatewayToFriendlyName[e.paymentGateway],
      subscriptionManagementLink: eT(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
    }) : n ? P.default.Messages.PREMIUM_SETTINGS_RENEWAL_INFO_WITH_PLAN.format({
      planName: P.default.Messages.PREMIUM,
      renewalDate: t.subscriptionPeriodStart,
      price: i
    }) : P.default.Messages.PREMIUM_SETTINGS_RENEWAL_INFO.format({
      renewalDate: t.subscriptionPeriodStart,
      price: i
    })
  },
  isNoneSubscription: f.isNoneSubscription,
  getPlanIdFromInvoice: function(e, t) {
    let {
      planId: n
    } = e;
    if (e.status === y.SubscriptionStatusTypes.CANCELED) return n;
    l(null != t, "Expected invoicePreview");
    let i = t.invoiceItems.find(e => {
      let {
        subscriptionPlanId: t
      } = e;
      return ei(t)
    });
    return n = null == i || (0, f.isNoneSubscription)(i.subscriptionPlanId) ? e.planId : null != e.renewalMutations && e.renewalMutations.planId !== e.planId ? e.planId : i.subscriptionPlanId
  },
  getStatusFromInvoice: function(e, t) {
    let {
      status: n
    } = e;
    if (e.status === y.SubscriptionStatusTypes.CANCELED) return n;
    l(null != t, "Expected invoicePreview");
    let i = t.invoiceItems.find(e => {
      let {
        subscriptionPlanId: t
      } = e;
      return ei(t)
    });
    return (null == i || (0, f.isNoneSubscription)(i.subscriptionPlanId)) && (n = y.SubscriptionStatusTypes.CANCELED), n
  },
  isBaseSubscriptionCanceled: ep,
  getPremiumGuildIntervalPrice: ef,
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
  getBillingReviewSubheader: eE,
  getIntervalForInvoice: e_,
  getPremiumPlanItem: k,
  getGuildBoostPlanItem: eD,
  isBoostOnlySubscription: function(e) {
    return null != e && null == k(e) && null != eD(e)
  },
  getPremiumSkuIdForSubscription: eb,
  getPremiumTypeFromSubscription: function(e) {
    if (null != e) {
      let t = k(e);
      if (null != t) return j(t.planId)
    }
  },
  getPremiumTypeFromSubscriptionRenewalMutations: function(e) {
    if (null != e && null != e.renewalMutations) {
      let t = k(e.renewalMutations);
      if (null != t) return j(t.planId)
    }
  },
  getPremiumGradientColor: function(e) {
    switch (e) {
      case D.PremiumTypes.TIER_0:
        return O.Gradients.PREMIUM_TIER_0;
      case D.PremiumTypes.TIER_1:
        return O.Gradients.PREMIUM_TIER_1;
      case D.PremiumTypes.TIER_2:
        return O.Gradients.PREMIUM_TIER_2
    }
  },
  canUseAnimatedEmojis: function(e) {
    return (0, p.canUserUse)(p.ANIMATED_EMOJIS, e)
  },
  canUseEmojisEverywhere: function(e) {
    return (0, p.canUserUse)(p.EMOJIS_EVERYWHERE, e)
  },
  canUseSoundboardEverywhere: function(e) {
    return (0, p.canUserUse)(p.SOUNDBOARD_EVERYWHERE, e)
  },
  canUseCustomCallSounds: function(e) {
    return (0, p.canUserUse)(p.CUSTOM_CALL_SOUNDS, e)
  },
  canUploadLargeFiles: function(e) {
    return (0, p.canUserUse)(p.UPLOAD_LARGE_FILES, e)
  },
  canUseBadges: function(e) {
    return (0, p.canUserUse)(p.PROFILE_BADGES, e)
  },
  canUseHighVideoUploadQuality: function(e) {
    return (0, p.canUserUse)(p.INCREASED_VIDEO_UPLOAD_QUALITY, e)
  },
  canEditDiscriminator: function(e) {
    return (0, p.canUserUse)(p.CUSTOM_DISCRIMINATOR, e)
  },
  hasBoostDiscount: function(e) {
    return (0, p.canUserUse)(p.BOOST_DISCOUNT, e)
  },
  canUseAnimatedAvatar: function(e) {
    return (0, p.canUserUse)(p.ANIMATED_AVATAR, e)
  },
  canUseFancyVoiceChannelReactions: function(e) {
    return (0, p.canUserUse)(p.FANCY_VOICE_CHANNEL_REACTIONS, e)
  },
  canInstallPremiumApplications: function(e) {
    return (0, p.canUserUse)(p.INSTALL_PREMIUM_APPLICATIONS, e)
  },
  canUseIncreasedMessageLength: function(e) {
    return (0, p.canUserUse)(p.INCREASED_MESSAGE_LENGTH, e)
  },
  canUseIncreasedGuildCap: function(e) {
    return (0, p.canUserUse)(p.INCREASED_GUILD_LIMIT, e)
  },
  canRedeemPremiumPerks: function(e) {
    return (0, p.canUserUse)(p.REDEEM_PREMIUM_PERKS, e)
  },
  canUsePremiumProfileCustomization: function(e) {
    return (0, p.canUserUse)(p.PROFILE_PREMIUM_FEATURES, e)
  },
  canUsePremiumAppIcons: function(e) {
    return (0, p.canUserUse)(p.APP_ICONS, e)
  },
  canUsePremiumGuildMemberProfile: function(e) {
    return (0, p.canUserUse)(p.PREMIUM_GUILD_MEMBER_PROFILE, e)
  },
  canUseClientThemes: function(e) {
    return (0, p.canUserUse)(p.CLIENT_THEMES, e)
  },
  canStreamQuality: function(e, t) {
    return "high" === e ? (0, p.canUserUse)(p.STREAM_HIGH_QUALITY, t) : "mid" === e && (0, p.canUserUse)(p.STREAM_MID_QUALITY, t)
  },
  hasFreeBoosts: function(e) {
    return (0, p.canUserUse)(p.FREE_BOOSTS, e)
  },
  canUsePremiumActivities: function(e) {
    return (0, p.canUserUse)(p.HOST_PREMIUM_ACTIVITIES, e)
  },
  canUseCustomStickersEverywhere: function(e) {
    return (0, p.canUserUse)(p.STICKERS_EVERYWHERE, e)
  },
  canUseCustomBackgrounds: function(e) {
    return (0, p.canUserUse)(p.VIDEO_FILTER_ASSETS, e)
  },
  canUseCollectibles: function(e) {
    return (0, p.canUserUse)(p.COLLECTIBLES, e)
  },
  formatPriceString: function(e, t) {
    let n = (0, N.formatPrice)(e.amount, e.currency),
      i = H(t);
    return "".concat(n, "/").concat(i)
  },
  StreamQuality: r
})