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
    return s
  },
  getPremiumPlanItem: function() {
    return w
  },
  getPrice: function() {
    return V
  },
  experimentalGetPrices: function() {
    return G
  },
  getIntervalString: function() {
    return F
  },
  getIntervalStringAsNoun: function() {
    return x
  },
  getPremiumType: function() {
    return B
  },
  getDisplayName: function() {
    return H
  },
  getDisplayNameFromSku: function() {
    return Y
  },
  getTierDisplayName: function() {
    return j
  },
  getDisplayPremiumType: function() {
    return W
  },
  getPremiumTypeDisplayName: function() {
    return K
  },
  getPlanDescriptionFromInvoice: function() {
    return q
  },
  getExternalPlanDisplayName: function() {
    return X
  },
  getPremiumPlanOptions: function() {
    return Q
  },
  getNumPremiumGuildSubscriptions: function() {
    return $
  },
  isPremiumBaseSubscriptionPlan: function() {
    return et
  },
  isPremiumGuildSubscriptionPlan: function() {
    return en
  },
  isPremiumSubscriptionPlan: function() {
    return ei
  },
  getBillingGracePeriodDays: function() {
    return es
  },
  isPrepaidPaymentSource: function() {
    return er
  },
  isPremiumGuildSubscriptionCanceled: function() {
    return ea
  },
  getPremiumGuildHeaderDescription: function() {
    return eo
  },
  getFormattedPriceForPlan: function() {
    return el
  },
  getFormattedRateForPlan: function() {
    return eu
  },
  isSubscriptionStatusFailedPayment: function() {
    return ec
  },
  getBillingReviewSubheader: function() {
    return e_
  },
  getIntervalForInvoice: function() {
    return eh
  },
  formatTrialOfferIntervalDuration: function() {
    return eg
  },
  formatTrialCtaIntervalDuration: function() {
    return em
  },
  formatIntervalDuration: function() {
    return eE
  },
  getExternalSubscriptionMethodUrl: function() {
    return ep
  },
  hasPremiumSubscriptionToDisplay: function() {
    return ev
  },
  getItemsFromNewAdditionalPlans: function() {
    return eS
  },
  getItemsWithoutPremiumPlanItem: function() {
    return eT
  },
  getItemsWithUpsertedPlanIdForGroup: function() {
    return eI
  },
  getItemsWithUpsertedPremiumPlanId: function() {
    return eC
  },
  getItemsWithUpsertedPremiumGuildPlan: function() {
    return eA
  },
  coerceExistingItemsToNewItemInterval: function() {
    return ey
  },
  getMaxFileSizeForPremiumType: function() {
    return eN
  },
  getPremiumSkuIdForSubscription: function() {
    return eO
  },
  default: function() {
    return eD
  }
}), n("70102"), n("222007"), n("843762"), n("808653"), n("424973");
var i, s, r, a, o = n("627445"),
  l = n.n(o),
  u = n("866227"),
  d = n.n(u);
n("446674");
var c = n("605250"),
  f = n("432155"),
  _ = n("669073"),
  h = n("797647"),
  g = n("697218"),
  m = n("160299"),
  E = n("357957"),
  p = n("10514"),
  v = n("521012"),
  S = n("745279"),
  T = n("993105"),
  I = n("773336"),
  C = n("886551"),
  A = n("764364"),
  y = n("153160"),
  N = n("49111"),
  R = n("504593"),
  O = n("646718"),
  D = n("843455"),
  P = n("782340");
let b = {
    PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
    BILLING_HISTORY: "https://support.apple.com/HT201266",
    SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039"
  },
  L = {
    SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
    PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
    BILLING_HISTORY: "https://play.google.com/store/account/orderhistory"
  },
  M = new c.default("PremiumUtils.tsx"),
  U = {
    [O.SubscriptionPlans.NONE_MONTH]: [O.SubscriptionPlans.NONE_YEAR, O.SubscriptionPlans.PREMIUM_YEAR_TIER_2, O.SubscriptionPlans.PREMIUM_MONTH_TIER_2, O.SubscriptionPlans.PREMIUM_YEAR_TIER_1, O.SubscriptionPlans.PREMIUM_MONTH_TIER_1],
    [O.SubscriptionPlans.NONE_YEAR]: [O.SubscriptionPlans.PREMIUM_YEAR_TIER_2, O.SubscriptionPlans.PREMIUM_MONTH_TIER_2, O.SubscriptionPlans.PREMIUM_YEAR_TIER_1, O.SubscriptionPlans.PREMIUM_MONTH_TIER_1],
    [O.SubscriptionPlans.PREMIUM_MONTH_TIER_0]: [O.SubscriptionPlans.PREMIUM_YEAR_TIER_2, O.SubscriptionPlans.PREMIUM_MONTH_TIER_2, O.SubscriptionPlans.PREMIUM_YEAR_TIER_1, O.SubscriptionPlans.PREMIUM_MONTH_TIER_1, O.SubscriptionPlans.PREMIUM_YEAR_TIER_0],
    [O.SubscriptionPlans.PREMIUM_YEAR_TIER_0]: [O.SubscriptionPlans.PREMIUM_YEAR_TIER_2, O.SubscriptionPlans.PREMIUM_MONTH_TIER_2, O.SubscriptionPlans.PREMIUM_YEAR_TIER_1, O.SubscriptionPlans.PREMIUM_MONTH_TIER_1],
    [O.SubscriptionPlans.PREMIUM_MONTH_TIER_1]: [O.SubscriptionPlans.PREMIUM_YEAR_TIER_2, O.SubscriptionPlans.PREMIUM_MONTH_TIER_2, O.SubscriptionPlans.PREMIUM_YEAR_TIER_1],
    [O.SubscriptionPlans.PREMIUM_YEAR_TIER_1]: [O.SubscriptionPlans.PREMIUM_YEAR_TIER_2],
    [O.SubscriptionPlans.PREMIUM_MONTH_TIER_2]: [O.SubscriptionPlans.PREMIUM_YEAR_TIER_2],
    [O.SubscriptionPlans.PREMIUM_YEAR_TIER_2]: [],
    ALL: [O.SubscriptionPlans.NONE_MONTH, O.SubscriptionPlans.NONE_YEAR, O.SubscriptionPlans.PREMIUM_YEAR_TIER_2, O.SubscriptionPlans.PREMIUM_MONTH_TIER_2, O.SubscriptionPlans.PREMIUM_YEAR_TIER_1, O.SubscriptionPlans.PREMIUM_MONTH_TIER_1, O.SubscriptionPlans.PREMIUM_YEAR_TIER_0, O.SubscriptionPlans.PREMIUM_MONTH_TIER_0]
  };

function w(e) {
  return e.items.find(e => O.PREMIUM_PLANS.has(e.planId))
}

function k(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    s = null !== (t = E.default.defaultPaymentSourceId) && void 0 !== t ? t : void 0,
    r = v.default.getPremiumTypeSubscription();
  return null != r && null != r.paymentSourceId && (s = r.paymentSourceId), V(e, n, i, {
    paymentSourceId: s
  })
}

function V(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
    {
      paymentSourceId: s,
      currency: r
    } = i,
    a = p.default.get(e);
  if (null != a) {
    let i = N.PriceSetAssignmentPurchaseTypes.DEFAULT;
    n ? i = N.PriceSetAssignmentPurchaseTypes.GIFT : t && (i = N.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_1);
    let a = function(e) {
      let {
        paymentSourceId: t,
        purchaseType: n,
        currency: i
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        purchaseType: N.PriceSetAssignmentPurchaseTypes.DEFAULT
      }, s = G(e, {
        paymentSourceId: t,
        purchaseType: n
      });
      return (0 === s.length && M.warn("No prices found for planId: ".concat(e, ", paymentSourceId: ").concat(t, ", purchaseType: ").concat(n)), null != i) ? s.find(e => e.currency === i) : s[0]
    }(e, {
      paymentSourceId: s,
      purchaseType: i,
      currency: r
    });
    if (null == a) {
      let t = Error("Couldn't find price");
      throw (0, S.captureBillingException)(t, {
        extra: {
          paymentSourceId: s
        },
        tags: {
          purchaseType: i.toString(),
          planId: e,
          currency: null != r ? r : "unknown"
        }
      }), t
    }
    return a
  }
  let o = Error("Plan not found");
  throw (0, S.captureBillingException)(o, {
    tags: {
      planId: e,
      currency: null != r ? r : "unknown"
    },
    extra: {
      ...i,
      isGift: n
    }
  }), o
}(r = i || (i = {})).BUNDLE = "bundle", r.TIER_0 = "tier_0", r.TIER_1 = "tier_1", r.TIER_2 = "tier_2", r.PREMIUM_GUILD = "premium_guild", (a = s || (s = {})).MID = "mid", a.HIGH = "high";

function G(e) {
  let {
    paymentSourceId: t,
    purchaseType: n
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
    purchaseType: N.PriceSetAssignmentPurchaseTypes.DEFAULT
  }, i = function(e, t) {
    let n = p.default.get(e);
    if (null == n) {
      let n = Error("Plan not found");
      throw (0, S.captureBillingException)(n, {
        tags: {
          planId: e,
          purchaseType: t.toString()
        }
      }), n
    }
    if (null == n.prices) throw Error("No prices returned for ".concat(e, ", is your user in the experiment?"));
    let i = n.prices[t];
    if (null == i) throw M.info("Purchase types: ".concat(JSON.stringify(Object.keys(n.prices)))), Error("No prices returned for purchase type ".concat(t, " for plan ").concat(e));
    return i
  }(e, n);
  if (null != t) {
    let s = i.paymentSourcePrices[t];
    if (null == s) {
      M.info("Payment sources IDs: ".concat(JSON.stringify(Object.keys(i.paymentSourcePrices)))), M.info("prices: ".concat(s));
      let r = Error("Missing prices for payment source on subscription plan");
      (0, S.captureBillingException)(r, {
        extra: {
          paymentSourceId: t
        },
        tags: {
          purchaseType: n.toString(),
          planId: e
        }
      })
    } else if (0 !== s.length) return s
  }
  if (null == i.countryPrices.prices) {
    M.info("countryPrices: ".concat(JSON.stringify(i.countryPrices)));
    let t = Error("Missing prices for country");
    throw (0, S.captureBillingException)(t, {
      tags: {
        countryCode: i.countryPrices.countryCode,
        planId: e
      }
    }), t
  }
  return i.countryPrices.prices
}

function F(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
    s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
    r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : O.PremiumTypes.TIER_2;
  if (t || n) switch (e) {
    case O.SubscriptionIntervalTypes.MONTH:
      let a = (r === O.PremiumTypes.TIER_0 ? P.default.Messages.BASIC_GIFT_DURATION : P.default.Messages.GIFT_DURATION).format({
        timeInterval: P.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH
      });
      return s ? a : P.default.Messages.PAYMENT_MODAL_ONE_MONTH;
    case O.SubscriptionIntervalTypes.YEAR:
      let o = (r === O.PremiumTypes.TIER_0 ? P.default.Messages.BASIC_GIFT_DURATION : P.default.Messages.GIFT_DURATION).format({
        timeInterval: P.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
      });
      return s ? o : P.default.Messages.PAYMENT_MODAL_ONE_YEAR;
    default:
      throw Error("Unexpected interval")
  }
  switch (e) {
    case O.SubscriptionIntervalTypes.MONTH:
      if (1 !== i) return P.default.Messages.MULTI_MONTHS.format({
        intervalCount: i
      });
      return P.default.Messages.MONTHLY;
    case O.SubscriptionIntervalTypes.YEAR:
      return P.default.Messages.YEARLY;
    default:
      throw Error("Unexpected interval")
  }
}

function x(e) {
  switch (e) {
    case O.SubscriptionIntervalTypes.MONTH:
      return P.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
    case O.SubscriptionIntervalTypes.YEAR:
      return P.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
    default:
      throw Error("Unexpected interval")
  }
}

function B(e) {
  let t = O.SubscriptionPlanInfo[e];
  if (null != t) return t.premiumType;
  let n = Error("Unsupported plan");
  throw (0, S.captureBillingException)(n, {
    tags: {
      planId: e
    }
  }), n
}

function H(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = arguments.length > 3 ? arguments[3] : void 0;
  switch (e) {
    case O.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
      return t ? P.default.Messages.PREMIUM_PLAN_MONTH_TIER_0_TRIAL_DURATION.format({
        duration: i
      }) : n ? P.default.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_0 : P.default.Messages.PREMIUM_PLAN_MONTH_TIER_0;
    case O.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
      return t ? P.default.Messages.PREMIUM_PLAN_YEAR_TIER_0_TRIAL_DURATION.format({
        duration: i
      }) : n ? P.default.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_0 : P.default.Messages.PREMIUM_PLAN_YEAR_TIER_0;
    case O.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
      return n ? P.default.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_1 : P.default.Messages.PREMIUM_PLAN_MONTH_TIER_1;
    case O.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
      return n ? P.default.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_1 : P.default.Messages.PREMIUM_PLAN_YEAR_TIER_1;
    case O.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
      return t ? P.default.Messages.PREMIUM_PLAN_MONTH_TIER_2_TRIAL_DURATION.format({
        duration: i
      }) : n ? P.default.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_2 : P.default.Messages.PREMIUM_PLAN_MONTH_TIER_2;
    case O.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
      return t ? P.default.Messages.PREMIUM_PLAN_YEAR_TIER_2_TRIAL_DURATION.format({
        duration: i
      }) : n ? P.default.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_2 : P.default.Messages.PREMIUM_PLAN_YEAR_TIER_2;
    case O.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
      return P.default.Messages.PREMIUM_PLAN_3_MONTH_TIER_2;
    case O.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
      return P.default.Messages.PREMIUM_PLAN_6_MONTH_TIER_2;
    case O.SubscriptionPlans.PREMIUM_MONTH_GUILD:
      return n ? P.default.Messages.PREMIUM_GUILD_PLAN_SINGLE_MONTH : P.default.Messages.PREMIUM_GUILD_PLAN_MONTH;
    case O.SubscriptionPlans.PREMIUM_YEAR_GUILD:
      return n ? P.default.Messages.PREMIUM_GUILD_PLAN_SINGLE_YEAR : P.default.Messages.PREMIUM_GUILD_PLAN_YEAR;
    case O.SubscriptionPlans.PREMIUM_3_MONTH_GUILD:
      return P.default.Messages.PREMIUM_GUILD_PLAN_3_MONTH;
    case O.SubscriptionPlans.PREMIUM_6_MONTH_GUILD:
      return P.default.Messages.PREMIUM_GUILD_PLAN_6_MONTH;
    case O.SubscriptionPlans.PREMIUM_MONTH_LEGACY:
      return P.default.Messages.PREMIUM_PLAN_MONTH;
    case O.SubscriptionPlans.PREMIUM_YEAR_LEGACY:
      return P.default.Messages.PREMIUM_PLAN_YEAR
  }
  let s = Error("Unsupported plan");
  throw (0, S.captureBillingException)(s, {
    tags: {
      planId: e
    }
  }), s
}

function Y(e) {
  switch (e) {
    case O.PremiumSubscriptionSKUs.TIER_0:
      return P.default.Messages.PREMIUM_TIER_0;
    case O.PremiumSubscriptionSKUs.TIER_1:
      return P.default.Messages.PREMIUM_TIER_1;
    case O.PremiumSubscriptionSKUs.TIER_2:
      return P.default.Messages.PREMIUM_TIER_2
  }
  let t = Error("Unsupported sku");
  throw (0, S.captureBillingException)(t, {
    tags: {
      skuId: e
    }
  }), t
}

function j(e) {
  switch (e) {
    case O.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
    case O.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
      return P.default.Messages.PREMIUM_TIER_0;
    case O.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
    case O.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
      return P.default.Messages.PREMIUM_TIER_1;
    case O.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
    case O.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
    case O.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
    case O.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
      return P.default.Messages.PREMIUM_TIER_2
  }
  let t = Error("Unsupported plan");
  throw (0, S.captureBillingException)(t, {
    tags: {
      planId: e
    }
  }), t
}

function W(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  switch (e) {
    case O.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
    case O.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
      return t ? "Basic" : "Nitro Basic";
    case O.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
    case O.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
      return t ? "Classic" : "Nitro Classic";
    case O.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
    case O.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
    case O.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
    case O.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
      return "Nitro"
  }
  let n = Error("Unsupported plan");
  throw (0, S.captureBillingException)(n, {
    tags: {
      planId: e
    }
  }), n
}

function K(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  switch (e) {
    case O.PremiumTypes.TIER_0:
      return t ? "Basic" : P.default.Messages.PREMIUM_TIER_0;
    case O.PremiumTypes.TIER_1:
      return t ? "Classic" : P.default.Messages.PREMIUM_TIER_1;
    case O.PremiumTypes.TIER_2:
      return P.default.Messages.PREMIUM_TIER_2
  }
}

function z(e) {
  var t, n;
  let {
    subscription: i,
    planId: s,
    price: r,
    includePremiumGuilds: a
  } = e, o = ed(i) || null == i.paymentSourceId && !i.isPurchasedExternally && !(null === (t = g.default.getCurrentUser()) || void 0 === t ? void 0 : t.hasFreePremium()), l = null != r, u = i.status === N.SubscriptionStatusTypes.UNPAID && null !== i.latestInvoice && (null === (n = i.latestInvoice) || void 0 === n ? void 0 : n.status) === N.InvoiceStatusTypes.OPEN, d = o ? N.SubscriptionStatusTypes.CANCELED : u ? N.SubscriptionStatusTypes.UNPAID : i.status, c = O.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM + (a ? $(i.additionalPlans) : 0);
  switch (s) {
    case O.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
    case O.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
      switch (d) {
        case N.SubscriptionStatusTypes.CANCELED:
          return l ? P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION.format({
            price: r
          }) : P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION_NO_PRICE;
        case N.SubscriptionStatusTypes.ACCOUNT_HOLD:
          return l ? P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD.format({
            price: r
          }) : P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD_NO_PRICE.format();
        case N.SubscriptionStatusTypes.UNPAID:
          return P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_PAYMENT.format();
        default:
          return l ? P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0.format({
            price: r
          }) : P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_NO_PRICE
      }
    case O.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
    case O.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
      switch (d) {
        case N.SubscriptionStatusTypes.CANCELED:
          return l ? P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION.format({
            price: r
          }) : P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION_NO_PRICE;
        case N.SubscriptionStatusTypes.ACCOUNT_HOLD:
          return l ? P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD.format({
            price: r
          }) : P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD_NO_PRICE.format();
        case N.SubscriptionStatusTypes.UNPAID:
          return P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_PAYMENT.format();
        default:
          return l ? P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1.format({
            price: r
          }) : P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_NO_PRICE
      }
    case O.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
    case O.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
    case O.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
    case O.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
      switch (d) {
        case N.SubscriptionStatusTypes.CANCELED:
          return l ? P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION.format({
            price: r,
            num: c
          }) : P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION_NO_PRICE.format({
            num: c
          });
        case N.SubscriptionStatusTypes.ACCOUNT_HOLD:
          return l ? P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD.format({
            price: r,
            num: c
          }) : P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD_NO_PRICE.format({
            num: c
          });
        case N.SubscriptionStatusTypes.UNPAID:
          return P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_PAYMENT.format({
            num: c
          });
        default:
          return l ? P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2.format({
            price: r,
            num: c
          }) : P.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_NO_PRICE.format({
            num: c
          })
      }
    default:
      throw Error("Invalid planId ".concat(s))
  }
}

function q(e) {
  let {
    renewalInvoicePreview: t,
    subscription: n,
    planId: i,
    includePremiumGuilds: s = !1
  } = e, r = p.default.get(i);
  return l(null != r, "Missing plan"), z({
    subscription: n,
    planId: r.id,
    price: function(e, t, n) {
      let i = e.invoiceItems.find(e => {
          let {
            subscriptionPlanId: t
          } = e;
          return t === n.id
        }),
        s = null == i ? V(n.id, !1, !1, {
          paymentSourceId: t.paymentSourceId,
          currency: t.currency
        }).amount : i.amount;
      return (0, y.formatRate)((0, y.formatPrice)(s, e.currency), n.interval, n.intervalCount)
    }(t, n, r),
    includePremiumGuilds: s
  })
}

function X(e) {
  let {
    planId: t,
    additionalPlans: n
  } = e, i = (0, h.isNoneSubscription)(t) ? null : H(t), s = null == n ? void 0 : n.find(e => {
    let {
      planId: t
    } = e;
    return O.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t)
  }), r = (null == s ? void 0 : s.planId) === O.SubscriptionPlans.PREMIUM_MONTH_GUILD ? P.default.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS_UNFORMATTED : (null == s ? void 0 : s.planId) === O.SubscriptionPlans.PREMIUM_YEAR_GUILD ? P.default.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS_UNFORMATTED : null, a = null == r ? void 0 : r.format({
    num: null == s ? void 0 : s.quantity
  });
  if (null != i && null != a) return P.default.Messages.PREMIUM_WITH_PREMIUM_GUILD_EXTERNAL_PLAN_DESCRIPTION.format({
    premiumDescription: i,
    premiumGuildDescription: a
  });
  if (null != i) return i;
  if (null != a) return a;
  else throw Error("Subscription without premium or premium guild subscription")
}

function Q(e) {
  let {
    skuId: t,
    isPremium: n,
    multiMonthPlans: i,
    currentSubscription: s,
    isGift: r,
    isEligibleForTrial: a,
    defaultPlanId: o,
    defaultToMonthlyPlan: l
  } = e;
  if (null == t || !n) return [];
  let u = void 0 !== o && t === O.SubscriptionPlanInfo[o].skuId ? o : void 0;
  void 0 === u && l && !r && (u = O.PREMIUM_SKU_TO_MONTHLY_PLAN[t]), a && !r && (void 0 === o || l && O.PREMIUM_MONTHLY_PLANS.has(o)) && _.TrialRedemptionDefaultPlanExperiment.trackExposure({
    location: "de805e_1"
  });
  let d = [];
  switch (t) {
    case O.PremiumSubscriptionSKUs.TIER_0:
      d = [O.SubscriptionPlans.PREMIUM_YEAR_TIER_0, O.SubscriptionPlans.PREMIUM_MONTH_TIER_0];
      break;
    case O.PremiumSubscriptionSKUs.TIER_1:
      d = [O.SubscriptionPlans.PREMIUM_MONTH_TIER_1];
      break;
    case O.PremiumSubscriptionSKUs.TIER_2:
      let c = i;
      if (null != s) {
        let e = s.items[0].planId;
        if (O.MULTI_MONTH_PLANS.has(e)) {
          let t = O.SubscriptionPlanInfo[e];
          c = [...(0, O.MULTI_MONTH_PLANS)].filter(e => {
            let n = O.SubscriptionPlanInfo[e];
            return n.interval === t.interval && n.intervalCount === t.intervalCount && n.skuId === O.PremiumSubscriptionSKUs.TIER_2
          })
        } else c = []
      }
      d = [O.SubscriptionPlans.PREMIUM_YEAR_TIER_2, ...c, O.SubscriptionPlans.PREMIUM_MONTH_TIER_2];
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

function Z(e) {
  let t = O.SubscriptionPlanInfo[e];
  if (null == t) {
    let t = Error("Unsupported plan");
    throw (0, S.captureBillingException)(t, {
      tags: {
        planId: e
      }
    }), t
  }
  return t.skuId
}

function J(e) {
  var t;
  return null == e ? U.ALL : null !== (t = U[e]) && void 0 !== t ? t : []
}

function $(e) {
  let t = p.default.getPlanIdsForSkus([O.PremiumSubscriptionSKUs.GUILD]);
  l(null != t, "Missing guildSubscriptionPlanIds");
  let n = e.find(e => {
    let {
      planId: n
    } = e;
    return t.includes(n)
  });
  return null != n ? n.quantity : 0
}
let ee = new Set([O.SubscriptionPlans.NONE_MONTH, O.SubscriptionPlans.NONE_3_MONTH, O.SubscriptionPlans.NONE_6_MONTH, O.SubscriptionPlans.NONE_YEAR, O.SubscriptionPlans.PREMIUM_MONTH_TIER_0, O.SubscriptionPlans.PREMIUM_MONTH_TIER_1, O.SubscriptionPlans.PREMIUM_MONTH_TIER_2, O.SubscriptionPlans.PREMIUM_YEAR_TIER_0, O.SubscriptionPlans.PREMIUM_YEAR_TIER_1, O.SubscriptionPlans.PREMIUM_YEAR_TIER_2, O.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2, O.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2]);

function et(e) {
  return ee.has(e)
}

function en(e) {
  return O.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(e)
}

function ei(e) {
  return et(e) || en(e)
}

function es(e) {
  var t, n, i;
  if (e.isPurchasedViaApple && (null === (t = e.metadata) || void 0 === t ? void 0 : t.apple_grace_period_expires_date) != null) {
    let t = d(e.metadata.apple_grace_period_expires_date),
      n = d(e.currentPeriodStart);
    return d.duration(t.diff(n)).days()
  }
  if (e.isPurchasedViaGoogle && (null === (n = e.metadata) || void 0 === n ? void 0 : n.google_grace_period_expires_date) != null && (null === (i = e.metadata) || void 0 === i ? void 0 : i.google_original_expires_date) != null) {
    let t = d(e.metadata.google_grace_period_expires_date),
      n = d(e.metadata.google_original_expires_date);
    return d.duration(t.diff(n)).days()
  }
  if (e.isPurchasedExternally || null == e.paymentSourceId) return O.DEFAULT_MAX_GRACE_PERIOD_DAYS;
  return O.PAID_SUBSCRIPTION_MAX_GRACE_PERIOD_DAYS
}

function er(e) {
  if (null == e) return !1;
  let t = E.default.getPaymentSource(e);
  return null != t && D.PREPAID_PAYMENT_SOURCES.has(t.type)
}

function ea(e) {
  return e.isPurchasedExternally ? e.status === N.SubscriptionStatusTypes.CANCELED : function(e) {
    let {
      renewalMutations: t,
      additionalPlans: n,
      status: i
    } = e, s = $(n), r = null != t ? $(t.additionalPlans) : null;
    return 0 === r && 0 !== s ? N.SubscriptionStatusTypes.CANCELED : i
  }(e) === N.SubscriptionStatusTypes.CANCELED
}

function eo(e) {
  let {
    subscription: t,
    user: n,
    price: i,
    renewalInvoicePreview: s
  } = e, {
    planId: r,
    additionalPlans: a
  } = t, o = p.default.get(r);
  l(null != o, "Missing plan");
  let u = $(a),
    d = ef(t.planId, t.paymentSourceId, t.currency, n),
    c = d.amount * u;
  if (null != s) {
    let e = s.invoiceItems.find(e => O.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(e.subscriptionPlanId));
    null != e && (c = e.amount)
  }
  i = null != i ? i : (0, y.formatPrice)(c, t.currency);
  let f = ea(t);
  return f ? t.isPurchasedViaGoogle ? P.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION_NO_PRICE.format({
    quantity: u
  }) : P.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION.format({
    quantity: u,
    rate: (0, y.formatRate)(i, o.interval, o.intervalCount)
  }) : t.status === N.SubscriptionStatusTypes.ACCOUNT_HOLD ? t.isPurchasedViaGoogle ? P.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD_NO_PRICE.format({
    quantity: u,
    boostQuantity: u
  }) : P.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD.format({
    quantity: u,
    boostQuantity: u,
    rate: (0, y.formatRate)(i, o.interval, o.intervalCount)
  }) : t.isPurchasedViaGoogle ? P.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_NO_PRICE.format({
    quantity: u
  }) : P.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO.format({
    quantity: u,
    rate: (0, y.formatRate)(i, o.interval, o.intervalCount)
  })
}

function el(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    s = null != t ? V(e.id, !1, i, t) : k(e.id, !1, i),
    r = (0, y.formatPrice)(s.amount, s.currency);
  return e.currency !== D.CurrencyCodes.USD && !0 === n && (r = r.concat("*")), r
}

function eu(e, t, n) {
  let i = el(e, t, n);
  return (0, y.formatRate)(i, e.interval, e.intervalCount)
}

function ed(e) {
  let {
    status: t,
    renewalMutations: n
  } = e;
  return t === N.SubscriptionStatusTypes.CANCELED || null != n && (0, h.isNoneSubscription)(n.planId) && !e.isPurchasedExternally
}

function ec(e) {
  return e === N.SubscriptionStatusTypes.PAST_DUE || e === N.SubscriptionStatusTypes.ACCOUNT_HOLD || e === N.SubscriptionStatusTypes.BILLING_RETRY
}

function ef(e, t, n, i) {
  let s = null != t ? {
      paymentSourceId: t,
      currency: n
    } : {
      country: m.default.ipCountryCodeWithFallback,
      currency: n
    },
    r = p.default.get(e);
  if (null == r) {
    let t = Error("Unsupported plan");
    throw (0, S.captureBillingException)(t, {
      tags: {
        planId: e
      }
    }), t
  }
  let a = p.default.getForSkuAndInterval(O.PremiumSubscriptionSKUs.GUILD, r.interval, r.intervalCount);
  if (null == a) {
    let t = Error("Unsupported plan");
    throw (0, S.captureBillingException)(t, {
      tags: {
        planId: e
      }
    }), t
  }
  return V(a.id, (0, A.isPremium)(i), !1, s)
}

function e_(e, t, n) {
  let i = t.id;
  if (null != e) switch (i) {
    case O.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
      return P.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_0;
    case O.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
      return P.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_0;
    case O.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
      return P.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_1;
    case O.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
      return P.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_1;
    case O.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
      return P.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_2;
    case O.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
      return P.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_2
  }
  switch (i) {
    case O.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
      return n ? P.default.Messages.BILLING_SELECT_PLAN : P.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_0;
    case O.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
      return n ? P.default.Messages.BILLING_SELECT_PLAN : P.default.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_0;
    case O.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
      return n ? P.default.Messages.BILLING_SELECT_PLAN : P.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_1;
    case O.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
      return n ? P.default.Messages.BILLING_SELECT_PLAN : P.default.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_1;
    case O.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
      return n ? P.default.Messages.BILLING_SELECT_PLAN : P.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_2;
    case O.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
      return n ? P.default.Messages.BILLING_SELECT_PLAN : P.default.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_2;
    case O.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
    case O.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
      return P.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTHS_TIER_2.format({
        intervalCount: t.intervalCount
      });
    case O.SubscriptionPlans.NONE_MONTH:
    case O.SubscriptionPlans.NONE_YEAR:
    case O.SubscriptionPlans.NONE_3_MONTH:
    case O.SubscriptionPlans.NONE_6_MONTH:
    case O.SubscriptionPlans.PREMIUM_MONTH_GUILD:
    case O.SubscriptionPlans.PREMIUM_YEAR_GUILD:
    case O.SubscriptionPlans.PREMIUM_3_MONTH_GUILD:
    case O.SubscriptionPlans.PREMIUM_6_MONTH_GUILD:
      return P.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
  }
  let s = Error("User is purchasing an unsupported plan");
  throw (0, S.captureBillingException)(s, {
    tags: {
      planId: i
    }
  }), s
}

function eh(e) {
  let t = e.invoiceItems[0].subscriptionPlanId,
    n = p.default.get(t);
  return l(null != n, "Missing subscriptionPlan"), {
    intervalType: n.interval,
    intervalCount: n.intervalCount
  }
}

function eg(e) {
  let {
    intervalType: t = O.SubscriptionIntervalTypes.MONTH,
    intervalCount: n = 1,
    capitalize: i = !1
  } = e;
  switch (t) {
    case O.SubscriptionIntervalTypes.DAY:
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
    case O.SubscriptionIntervalTypes.MONTH:
      return i ? P.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_MONTHS.format({
        months: n
      }) : P.default.Messages.PREMIUM_TRIAL_FREE_DURATION_MONTHS.format({
        months: n
      });
    case O.SubscriptionIntervalTypes.YEAR:
      return i ? P.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_YEARS.format({
        years: n
      }) : P.default.Messages.PREMIUM_TRIAL_FREE_DURATION_YEARS.format({
        years: n
      });
    default:
      throw Error("Unsupported interval duration.")
  }
}

function em(e) {
  let {
    intervalType: t = O.SubscriptionIntervalTypes.MONTH,
    intervalCount: n = 1
  } = e;
  switch (t) {
    case O.SubscriptionIntervalTypes.DAY:
      if (n >= 7 && n % 7 == 0) return P.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_WEEKS.format({
        weeks: n / 7
      });
      return P.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_DAYS.format({
        days: n
      });
    case O.SubscriptionIntervalTypes.MONTH:
      return P.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_MONTHS.format({
        months: n
      });
    case O.SubscriptionIntervalTypes.YEAR:
      return P.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_YEARS.format({
        years: n
      });
    default:
      throw Error("Unsupported interval duration.")
  }
}

function eE(e) {
  let {
    intervalType: t = O.SubscriptionIntervalTypes.MONTH,
    intervalCount: n = 1,
    capitalize: i = !1
  } = e;
  switch (t) {
    case O.SubscriptionIntervalTypes.DAY:
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
    case O.SubscriptionIntervalTypes.MONTH:
      return i ? P.default.Messages.DURATION_MONTHS_CAPITALIZE.format({
        months: n
      }) : P.default.Messages.DURATION_MONTHS.format({
        months: n
      });
    case O.SubscriptionIntervalTypes.YEAR:
      return i ? P.default.Messages.DURATION_YEARS_CAPITALIZE.format({
        years: n
      }) : P.default.Messages.DURATION_YEARS.format({
        years: n
      });
    default:
      throw Error("Unsupported interval duration.")
  }
}

function ep(e, t) {
  switch (e) {
    case N.PaymentGateways.APPLE_PARTNER:
    case N.PaymentGateways.APPLE:
      return b[t];
    case N.PaymentGateways.GOOGLE:
      return L[t]
  }
  throw Error("Invalid external payment gateway ".concat(e))
}

function ev(e, t) {
  return (0, A.isPremium)(e) || ec(null == t ? void 0 : t.status)
}

function eS(e, t) {
  var n, i;
  let s = [],
    r = null !== (i = null === (n = e.renewalMutations) || void 0 === n ? void 0 : n.items) && void 0 !== i ? i : e.items,
    a = r.find(e => O.PREMIUM_PLANS.has(e.planId));
  return null != a && s.push(a), s.push(...t), s.map(t => {
    for (let n of e.items)
      if (t.planId === n.planId) return {
        ...n,
        ...t
      };
    return t
  })
}

function eT(e) {
  return e.filter(e => !O.PREMIUM_PLANS.has(e.planId))
}

function eI(e, t, n, i) {
  var s, r;
  l(i.has(t), "Expected planId in group");
  let a = !1,
    o = null !== (r = null === (s = e.renewalMutations) || void 0 === s ? void 0 : s.items) && void 0 !== r ? r : e.items,
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
      s = e.items.find(e => e.planId === t);
    null != s && (i.id = s.id), u.push(i)
  }
  return u.filter(e => 0 !== e.quantity)
}

function eC(e, t) {
  return eI(e, t, 1, O.PREMIUM_PLANS)
}

function eA(e, t, n) {
  return eI(e, n, t, O.PREMIUM_GUILD_SUBSCRIPTION_PLANS)
}

function ey(e) {
  var t;
  let n = null !== (t = e.find(e => !("id" in e))) && void 0 !== t ? t : e.find(e => O.PREMIUM_PLANS.has(e.planId));
  if (null != n) {
    let t = p.default.get(n.planId);
    l(null != t, "Missing plan"), e = e.map(e => {
      if (e === n) return e;
      let i = p.default.get(e.planId);
      l(null != i, "Missing plan");
      let s = p.default.getForSkuAndInterval(i.skuId, t.interval, t.intervalCount);
      return l(null != s, "Missing planForInterval"), {
        ...e,
        planId: s.id
      }
    })
  }
  return e
}

function eN(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      useSpace: !0
    },
    n = O.PremiumUserLimits[e].fileSize;
  return (0, T.formatSize)(n / 1024, {
    useKibibytes: !0,
    useSpace: t.useSpace
  })
}

function eR(e) {
  return null == e ? null : e.items.find(e => O.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(e.planId))
}

function eO(e) {
  let t = null != e ? w(e) : null,
    n = null != t ? Z(t.planId) : null;
  return n
}
var eD = Object.freeze({
  isNewUser: e => null != e && Date.now() - e.createdAt.getTime() < 2592e6,
  isPremiumAtLeast: A.isPremiumAtLeast,
  isPremium: A.isPremium,
  isPremiumExactly: A.isPremiumExactly,
  getPrice: V,
  getDefaultPrice: k,
  getInterval: function(e) {
    let t = O.SubscriptionPlanInfo[e];
    if (null != t) return {
      intervalType: t.interval,
      intervalCount: t.intervalCount
    };
    let n = Error("Unsupported plan");
    throw (0, S.captureBillingException)(n, {
      tags: {
        planId: e
      }
    }), n
  },
  getIntervalString: F,
  getIntervalStringAsNoun: x,
  getPremiumType: B,
  getDisplayName: H,
  getDisplayPremiumType: W,
  getPremiumPlanOptions: Q,
  getUpgradeEligibilities: J,
  getPlanDescription: z,
  isPremiumSku: function(e) {
    return e === O.PremiumSubscriptionSKUs.TIER_0 || e === O.PremiumSubscriptionSKUs.TIER_1 || e === O.PremiumSubscriptionSKUs.TIER_2
  },
  getClosestUpgrade: function(e) {
    let t = O.SubscriptionPlanInfo[e];
    if (null == t) throw Error("Unrecognized plan.");
    let {
      interval: n
    } = t, i = J(e);
    for (let e of Object.keys(O.SubscriptionPlanInfo)) {
      let {
        interval: t
      } = O.SubscriptionPlanInfo[e];
      if (n === t && i.includes(e)) return e
    }
    return null
  },
  getIntervalMonths: function(e, t) {
    if (e === O.SubscriptionIntervalTypes.MONTH) return t;
    if (e === O.SubscriptionIntervalTypes.YEAR) return 12 * t;
    throw Error("".concat(e, " interval subscription period not implemented"))
  },
  getUserMaxFileSize: C.getUserMaxFileSize,
  getSkuIdForPlan: Z,
  getSkuIdForPremiumType: function(e) {
    switch (e) {
      case O.PremiumTypes.TIER_0:
        return O.PremiumSubscriptionSKUs.TIER_0;
      case O.PremiumTypes.TIER_1:
        return O.PremiumSubscriptionSKUs.TIER_1;
      case O.PremiumTypes.TIER_2:
        return O.PremiumSubscriptionSKUs.TIER_2
    }
  },
  getNumIncludedPremiumGuildSubscriptionSlots: function(e) {
    if (B(e) === O.PremiumTypes.TIER_2) return O.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM;
    return 0
  },
  getBillingInformationString: function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = n ? (0, y.formatPrice)(t.invoiceItems.filter(e => O.PREMIUM_TIER_2_PLANS.has(e.subscriptionPlanId)).map(e => e.amount).reduce((e, t) => t + e, 0), t.currency) : (0, y.formatPrice)(t.total, t.currency);
    if (e.status === N.SubscriptionStatusTypes.CANCELED) return P.default.Messages.PREMIUM_SETTINGS_CANCELLED_INFO.format({
      endDate: t.subscriptionPeriodStart
    });
    if (e.status === N.SubscriptionStatusTypes.PAST_DUE) {
      var s, r;
      let t = es(e),
        n = d(e.currentPeriodStart).add(t, "days");
      return (e.isPurchasedViaGoogle && (null === (s = e.metadata) || void 0 === s ? void 0 : s.google_grace_period_expires_date) != null && (n = d(e.metadata.google_grace_period_expires_date)), e.isPurchasedViaApple && (null === (r = e.metadata) || void 0 === r ? void 0 : r.apple_grace_period_expires_date) != null && (n = d(e.metadata.apple_grace_period_expires_date)), e.isPurchasedExternally) ? P.default.Messages.PREMIUM_SETTINGS_PAST_DUE_INFO_EXTERNAL.format({
        endDate: n,
        paymentGatewayName: D.PaymentGatewayToFriendlyName[e.paymentGateway],
        paymentSourceLink: ep(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")
      }) : P.default.Messages.PREMIUM_SETTINGS_PAST_DUE_INFO.format({
        endDate: d(e.currentPeriodStart).add(t, "days"),
        price: i
      })
    }
    return e.status === N.SubscriptionStatusTypes.ACCOUNT_HOLD ? e.isPurchasedViaGoogle && !(0, I.isAndroid)() ? P.default.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_EXTERNAL.format({
      endDate: d(e.currentPeriodStart).add(O.MAX_ACCOUNT_HOLD_DAYS, "days"),
      paymentGatewayName: D.PaymentGatewayToFriendlyName[e.paymentGateway],
      paymentSourceLink: ep(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")
    }) : P.default.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_PRICE.format({
      endDate: d(e.currentPeriodStart).add(O.MAX_ACCOUNT_HOLD_DAYS, "days"),
      price: i
    }) : function(e) {
      return null != e.paymentSourceId && er(e.paymentSourceId)
    }(e) ? P.default.Messages.PREMIUM_SETTINGS_PREPAID_THROUGH_DATE.format({
      prepaidEndDate: e.currentPeriodEnd
    }) : e.status === N.SubscriptionStatusTypes.UNPAID ? P.default.Messages.PREMIUM_SETTINGS_PAYMENT_PROCESSING.format({
      maxProcessingTimeInDays: O.MAX_PAYMENT_PROCESSING_TIME_DAYS
    }) : e.isPurchasedExternally ? P.default.Messages.PREMIUM_SETTINGS_RENEWAL_INFO_EXTERNAL.format({
      renewalDate: t.subscriptionPeriodStart,
      paymentGatewayName: D.PaymentGatewayToFriendlyName[e.paymentGateway],
      subscriptionManagementLink: ep(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
    }) : n ? P.default.Messages.PREMIUM_SETTINGS_RENEWAL_INFO_WITH_PLAN.format({
      planName: P.default.Messages.PREMIUM,
      renewalDate: t.subscriptionPeriodStart,
      price: i
    }) : P.default.Messages.PREMIUM_SETTINGS_RENEWAL_INFO.format({
      renewalDate: t.subscriptionPeriodStart,
      price: i
    })
  },
  isNoneSubscription: h.isNoneSubscription,
  getPlanIdFromInvoice: function(e, t) {
    let {
      planId: n
    } = e;
    if (e.status === N.SubscriptionStatusTypes.CANCELED) return n;
    l(null != t, "Expected invoicePreview");
    let i = t.invoiceItems.find(e => {
      let {
        subscriptionPlanId: t
      } = e;
      return et(t)
    });
    return n = null == i || (0, h.isNoneSubscription)(i.subscriptionPlanId) ? e.planId : null != e.renewalMutations && e.renewalMutations.planId !== e.planId ? e.planId : i.subscriptionPlanId
  },
  getStatusFromInvoice: function(e, t) {
    let {
      status: n
    } = e;
    if (e.status === N.SubscriptionStatusTypes.CANCELED) return n;
    l(null != t, "Expected invoicePreview");
    let i = t.invoiceItems.find(e => {
      let {
        subscriptionPlanId: t
      } = e;
      return et(t)
    });
    return (null == i || (0, h.isNoneSubscription)(i.subscriptionPlanId)) && (n = N.SubscriptionStatusTypes.CANCELED), n
  },
  isBaseSubscriptionCanceled: ed,
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
  getBillingReviewSubheader: e_,
  getIntervalForInvoice: eh,
  getPremiumPlanItem: w,
  getGuildBoostPlanItem: eR,
  isBoostOnlySubscription: function(e) {
    return null != e && null == w(e) && null != eR(e)
  },
  getPremiumSkuIdForSubscription: eO,
  getPremiumTypeFromSubscription: function(e) {
    if (null != e) {
      let t = w(e);
      if (null != t) return B(t.planId)
    }
  },
  getPremiumTypeFromSubscriptionRenewalMutations: function(e) {
    if (null != e && null != e.renewalMutations) {
      let t = w(e.renewalMutations);
      if (null != t) return B(t.planId)
    }
  },
  getPremiumGradientColor: function(e) {
    switch (e) {
      case O.PremiumTypes.TIER_0:
        return R.Gradients.PREMIUM_TIER_0;
      case O.PremiumTypes.TIER_1:
        return R.Gradients.PREMIUM_TIER_1;
      case O.PremiumTypes.TIER_2:
        return R.Gradients.PREMIUM_TIER_2
    }
  },
  canUseAnimatedEmojis: function(e) {
    return (0, f.canUserUse)(f.ANIMATED_EMOJIS, e)
  },
  canUseEmojisEverywhere: function(e) {
    return (0, f.canUserUse)(f.EMOJIS_EVERYWHERE, e)
  },
  canUseSoundboardEverywhere: function(e) {
    return (0, f.canUserUse)(f.SOUNDBOARD_EVERYWHERE, e)
  },
  canUseCustomCallSounds: function(e) {
    return (0, f.canUserUse)(f.CUSTOM_CALL_SOUNDS, e)
  },
  canUploadLargeFiles: function(e) {
    return (0, f.canUserUse)(f.UPLOAD_LARGE_FILES, e)
  },
  canUseBadges: function(e) {
    return (0, f.canUserUse)(f.PROFILE_BADGES, e)
  },
  canUseHighVideoUploadQuality: function(e) {
    return (0, f.canUserUse)(f.INCREASED_VIDEO_UPLOAD_QUALITY, e)
  },
  canEditDiscriminator: function(e) {
    return (0, f.canUserUse)(f.CUSTOM_DISCRIMINATOR, e)
  },
  hasBoostDiscount: function(e) {
    return (0, f.canUserUse)(f.BOOST_DISCOUNT, e)
  },
  canUseAnimatedAvatar: function(e) {
    return (0, f.canUserUse)(f.ANIMATED_AVATAR, e)
  },
  canUseFancyVoiceChannelReactions: function(e) {
    return (0, f.canUserUse)(f.FANCY_VOICE_CHANNEL_REACTIONS, e)
  },
  canInstallPremiumApplications: function(e) {
    return (0, f.canUserUse)(f.INSTALL_PREMIUM_APPLICATIONS, e)
  },
  canUseIncreasedMessageLength: function(e) {
    return (0, f.canUserUse)(f.INCREASED_MESSAGE_LENGTH, e)
  },
  canUseIncreasedGuildCap: function(e) {
    return (0, f.canUserUse)(f.INCREASED_GUILD_LIMIT, e)
  },
  canRedeemPremiumPerks: function(e) {
    return (0, f.canUserUse)(f.REDEEM_PREMIUM_PERKS, e)
  },
  canUsePremiumProfileCustomization: function(e) {
    return (0, f.canUserUse)(f.PROFILE_PREMIUM_FEATURES, e)
  },
  canUsePremiumAppIcons: function(e) {
    return (0, f.canUserUse)(f.APP_ICONS, e)
  },
  canUsePremiumGuildMemberProfile: function(e) {
    return (0, f.canUserUse)(f.PREMIUM_GUILD_MEMBER_PROFILE, e)
  },
  canUseClientThemes: function(e) {
    return (0, f.canUserUse)(f.CLIENT_THEMES, e)
  },
  canStreamQuality: function(e, t) {
    return "high" === e ? (0, f.canUserUse)(f.STREAM_HIGH_QUALITY, t) : "mid" === e && (0, f.canUserUse)(f.STREAM_MID_QUALITY, t)
  },
  hasFreeBoosts: function(e) {
    return (0, f.canUserUse)(f.FREE_BOOSTS, e)
  },
  canUsePremiumActivities: function(e) {
    return (0, f.canUserUse)(f.HOST_PREMIUM_ACTIVITIES, e)
  },
  canUseCustomStickersEverywhere: function(e) {
    return (0, f.canUserUse)(f.STICKERS_EVERYWHERE, e)
  },
  canUseCustomBackgrounds: function(e) {
    return (0, f.canUserUse)(f.VIDEO_FILTER_ASSETS, e)
  },
  canUseCollectibles: function(e) {
    return (0, f.canUserUse)(f.COLLECTIBLES, e)
  },
  formatPriceString: function(e, t) {
    let n = (0, y.formatPrice)(e.amount, e.currency),
      i = x(t);
    return "".concat(n, "/").concat(i)
  },
  StreamQuality: s
})