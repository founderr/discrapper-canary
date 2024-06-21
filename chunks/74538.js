"use strict";
n.d(t, {
  Af: function() {
    return V
  },
  Ap: function() {
    return ec
  },
  CY: function() {
    return Z
  },
  Gf: function() {
    return z
  },
  I5: function() {
    return L.I5
  },
  JE: function() {
    return ep
  },
  JP: function() {
    return Y
  },
  L7: function() {
    return j
  },
  M5: function() {
    return L.M5
  },
  MY: function() {
    return eC
  },
  PK: function() {
    return eT
  },
  PV: function() {
    return eu
  },
  Px: function() {
    return J
  },
  Qo: function() {
    return eg
  },
  Rd: function() {
    return K
  },
  Ro: function() {
    return eG
  },
  Rt: function() {
    return eO
  },
  T4: function() {
    return F
  },
  U2: function() {
    return r
  },
  Ue: function() {
    return ev
  },
  V7: function() {
    return en
  },
  W_: function() {
    return eN
  },
  Wz: function() {
    return ew
  },
  XK: function() {
    return eD
  },
  Z8: function() {
    return el
  },
  Zx: function() {
    return eM
  },
  a5: function() {
    return em
  },
  aS: function() {
    return H
  },
  al: function() {
    return eL
  },
  aq: function() {
    return X
  },
  bt: function() {
    return eE
  },
  dn: function() {
    return eA
  },
  eP: function() {
    return W
  },
  gB: function() {
    return eP
  },
  gq: function() {
    return Q
  },
  gy: function() {
    return eI
  },
  if: function() {
    return eR
  },
  jP: function() {
    return q
  },
  k5: function() {
    return eb
  },
  lY: function() {
    return e_
  },
  qV: function() {
    return ee
  },
  uV: function() {
    return es
  },
  uZ: function() {
    return ea
  },
  v6: function() {
    return ed
  },
  v9: function() {
    return ey
  },
  yd: function() {
    return L.yd
  },
  zL: function() {
    return et
  },
  zV: function() {
    return eS
  }
}), n(411104), n(47120), n(733860), n(724458), n(653041);
var i, r, s, o, a = n(512722),
  l = n.n(a),
  u = n(913527),
  _ = n.n(u),
  c = n(848246);
n(442837);
var d = n(782568),
  E = n(710845),
  I = n(114064),
  T = n(803905),
  h = n(439017),
  S = n(301766),
  f = n(594174),
  N = n(351402),
  A = n(853872),
  m = n(509545),
  O = n(78839),
  R = n(122289),
  p = n(55935),
  g = n(424218),
  C = n(358085),
  v = n(380684),
  L = n(111361),
  D = n(74538),
  M = n(937615),
  P = n(981631),
  y = n(334431),
  U = n(474936),
  b = n(231338),
  G = n(689938);
let w = {
    PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
    BILLING_HISTORY: "https://support.apple.com/HT201266",
    SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039"
  },
  B = {
    SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
    PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
    BILLING_HISTORY: "https://play.google.com/store/account/orderhistory"
  },
  k = new E.Z("PremiumUtils.tsx"),
  x = {
    [U.Xh.NONE_MONTH]: [U.Xh.NONE_YEAR, U.Xh.PREMIUM_YEAR_TIER_2, U.Xh.PREMIUM_MONTH_TIER_2, U.Xh.PREMIUM_YEAR_TIER_1, U.Xh.PREMIUM_MONTH_TIER_1],
    [U.Xh.NONE_YEAR]: [U.Xh.PREMIUM_YEAR_TIER_2, U.Xh.PREMIUM_MONTH_TIER_2, U.Xh.PREMIUM_YEAR_TIER_1, U.Xh.PREMIUM_MONTH_TIER_1],
    [U.Xh.PREMIUM_MONTH_TIER_0]: [U.Xh.PREMIUM_YEAR_TIER_2, U.Xh.PREMIUM_MONTH_TIER_2, U.Xh.PREMIUM_YEAR_TIER_1, U.Xh.PREMIUM_MONTH_TIER_1, U.Xh.PREMIUM_YEAR_TIER_0],
    [U.Xh.PREMIUM_YEAR_TIER_0]: [U.Xh.PREMIUM_YEAR_TIER_2, U.Xh.PREMIUM_MONTH_TIER_2, U.Xh.PREMIUM_YEAR_TIER_1, U.Xh.PREMIUM_MONTH_TIER_1],
    [U.Xh.PREMIUM_MONTH_TIER_1]: [U.Xh.PREMIUM_YEAR_TIER_2, U.Xh.PREMIUM_MONTH_TIER_2, U.Xh.PREMIUM_YEAR_TIER_1],
    [U.Xh.PREMIUM_YEAR_TIER_1]: [U.Xh.PREMIUM_YEAR_TIER_2],
    [U.Xh.PREMIUM_MONTH_TIER_2]: [U.Xh.PREMIUM_YEAR_TIER_2],
    [U.Xh.PREMIUM_YEAR_TIER_2]: [],
    ALL: [U.Xh.NONE_MONTH, U.Xh.NONE_YEAR, U.Xh.PREMIUM_YEAR_TIER_2, U.Xh.PREMIUM_MONTH_TIER_2, U.Xh.PREMIUM_YEAR_TIER_1, U.Xh.PREMIUM_MONTH_TIER_1, U.Xh.PREMIUM_YEAR_TIER_0, U.Xh.PREMIUM_MONTH_TIER_0]
  };

function V(e) {
  return e.items.find(e => U.dJ.has(e.planId))
}

function Z(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = null !== (t = A.Z.defaultPaymentSourceId) && void 0 !== t ? t : void 0,
    s = O.ZP.getPremiumTypeSubscription();
  return null != s && null != s.paymentSourceId && (r = s.paymentSourceId), H(e, n, i, {
    paymentSourceId: r
  })
}

function H(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
    {
      paymentSourceId: r,
      currency: s
    } = i;
  if (null != m.Z.get(e)) {
    let i = P.tuJ.DEFAULT;
    n ? i = P.tuJ.GIFT : t && (i = P.tuJ.PREMIUM_TIER_1);
    let o = function(e) {
      let {
        paymentSourceId: t,
        purchaseType: n,
        currency: i
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        purchaseType: P.tuJ.DEFAULT
      }, r = F(e, {
        paymentSourceId: t,
        purchaseType: n
      });
      return (0 === r.length && k.warn("No prices found for planId: ".concat(e, ", paymentSourceId: ").concat(t, ", purchaseType: ").concat(n)), null != i) ? r.find(e => e.currency === i) : r[0]
    }(e, {
      paymentSourceId: r,
      purchaseType: i,
      currency: s
    });
    if (null == o) {
      let t = Error("Couldn't find price");
      throw (0, R.q2)(t, {
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
    return o
  }
  let o = Error("Plan not found");
  throw (0, R.q2)(o, {
    tags: {
      planId: e,
      currency: null != s ? s : "unknown"
    },
    extra: {
      ...i,
      isGift: n
    }
  }), o
}(s = i || (i = {})).BUNDLE = "bundle", s.TIER_0 = "tier_0", s.TIER_1 = "tier_1", s.TIER_2 = "tier_2", s.PREMIUM_GUILD = "premium_guild", (o = r || (r = {})).MID = "mid", o.HIGH = "high";

function F(e) {
  let {
    paymentSourceId: t,
    purchaseType: n
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
    purchaseType: P.tuJ.DEFAULT
  }, i = function(e, t) {
    let n = m.Z.get(e);
    if (null == n) {
      let n = Error("Plan not found");
      throw (0, R.q2)(n, {
        tags: {
          planId: e,
          purchaseType: t.toString()
        }
      }), n
    }
    if (null == n.prices) throw Error("No prices returned for ".concat(e, ", is your user in the experiment?"));
    let i = n.prices[t];
    if (null == i) throw k.info("Purchase types: ".concat(JSON.stringify(Object.keys(n.prices)))), Error("No prices returned for purchase type ".concat(t, " for plan ").concat(e));
    return i
  }(e, n);
  if (null != t) {
    let r = i.paymentSourcePrices[t];
    if (null == r) {
      k.info("Payment sources IDs: ".concat(JSON.stringify(Object.keys(i.paymentSourcePrices)))), k.info("prices: ".concat(r));
      let s = Error("Missing prices for payment source on subscription plan");
      (0, R.q2)(s, {
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
    k.info("countryPrices: ".concat(JSON.stringify(i.countryPrices)));
    let t = Error("Missing prices for country");
    throw (0, R.q2)(t, {
      tags: {
        countryCode: i.countryPrices.countryCode,
        planId: e
      }
    }), t
  }
  return i.countryPrices.prices
}

function Y(e) {
  switch (e) {
    case U.EA.MONTH:
      return G.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
    case U.EA.YEAR:
      return G.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
    case U.EA.DAY:
    case U.EA.WEEK:
    default:
      throw Error("Unexpected interval")
  }
}

function j(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
    r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
    s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : U.p9.TIER_2;
  if (t || n) switch (e) {
    case U.rV.MONTH:
      let o = (s === U.p9.TIER_0 ? G.Z.Messages.BASIC_GIFT_DURATION : G.Z.Messages.GIFT_DURATION).format({
        timeInterval: G.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH
      });
      return r ? o : G.Z.Messages.PAYMENT_MODAL_ONE_MONTH;
    case U.rV.YEAR:
      let a = (s === U.p9.TIER_0 ? G.Z.Messages.BASIC_GIFT_DURATION : G.Z.Messages.GIFT_DURATION).format({
        timeInterval: G.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
      });
      return r ? a : G.Z.Messages.PAYMENT_MODAL_ONE_YEAR;
    default:
      throw Error("Unexpected interval")
  }
  switch (e) {
    case U.rV.MONTH:
      if (1 !== i) return G.Z.Messages.MULTI_MONTHS.format({
        intervalCount: i
      });
      return G.Z.Messages.MONTHLY;
    case U.rV.YEAR:
      return G.Z.Messages.YEARLY;
    default:
      throw Error("Unexpected interval")
  }
}

function W(e) {
  switch (e) {
    case U.rV.MONTH:
      return G.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
    case U.rV.YEAR:
      return G.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
    default:
      throw Error("Unexpected interval")
  }
}

function K(e) {
  let t = U.GP[e];
  if (null != t) return t.premiumType;
  let n = Error("Unsupported plan");
  throw (0, R.q2)(n, {
    tags: {
      planId: e
    }
  }), n
}

function z(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = arguments.length > 3 ? arguments[3] : void 0;
  switch (e) {
    case U.Xh.PREMIUM_MONTH_TIER_0:
      return t ? G.Z.Messages.PREMIUM_PLAN_MONTH_TIER_0_TRIAL_DURATION.format({
        duration: i
      }) : n ? G.Z.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_0 : G.Z.Messages.PREMIUM_PLAN_MONTH_TIER_0;
    case U.Xh.PREMIUM_YEAR_TIER_0:
      return t ? G.Z.Messages.PREMIUM_PLAN_YEAR_TIER_0_TRIAL_DURATION.format({
        duration: i
      }) : n ? G.Z.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_0 : G.Z.Messages.PREMIUM_PLAN_YEAR_TIER_0;
    case U.Xh.PREMIUM_MONTH_TIER_1:
      return n ? G.Z.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_1 : G.Z.Messages.PREMIUM_PLAN_MONTH_TIER_1;
    case U.Xh.PREMIUM_YEAR_TIER_1:
      return n ? G.Z.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_1 : G.Z.Messages.PREMIUM_PLAN_YEAR_TIER_1;
    case U.Xh.PREMIUM_MONTH_TIER_2:
      return t ? G.Z.Messages.PREMIUM_PLAN_MONTH_TIER_2_TRIAL_DURATION.format({
        duration: i
      }) : n ? G.Z.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_2 : G.Z.Messages.PREMIUM_PLAN_MONTH_TIER_2;
    case U.Xh.PREMIUM_YEAR_TIER_2:
      return t ? G.Z.Messages.PREMIUM_PLAN_YEAR_TIER_2_TRIAL_DURATION.format({
        duration: i
      }) : n ? G.Z.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_2 : G.Z.Messages.PREMIUM_PLAN_YEAR_TIER_2;
    case U.Xh.PREMIUM_3_MONTH_TIER_2:
      return G.Z.Messages.PREMIUM_PLAN_3_MONTH_TIER_2;
    case U.Xh.PREMIUM_6_MONTH_TIER_2:
      return G.Z.Messages.PREMIUM_PLAN_6_MONTH_TIER_2;
    case U.Xh.PREMIUM_MONTH_GUILD:
      return n ? G.Z.Messages.PREMIUM_GUILD_PLAN_SINGLE_MONTH : G.Z.Messages.PREMIUM_GUILD_PLAN_MONTH;
    case U.Xh.PREMIUM_YEAR_GUILD:
      return n ? G.Z.Messages.PREMIUM_GUILD_PLAN_SINGLE_YEAR : G.Z.Messages.PREMIUM_GUILD_PLAN_YEAR;
    case U.Xh.PREMIUM_3_MONTH_GUILD:
      return G.Z.Messages.PREMIUM_GUILD_PLAN_3_MONTH;
    case U.Xh.PREMIUM_6_MONTH_GUILD:
      return G.Z.Messages.PREMIUM_GUILD_PLAN_6_MONTH;
    case U.Xh.PREMIUM_MONTH_LEGACY:
      return G.Z.Messages.PREMIUM_PLAN_MONTH;
    case U.Xh.PREMIUM_YEAR_LEGACY:
      return G.Z.Messages.PREMIUM_PLAN_YEAR
  }
  let r = Error("Unsupported plan");
  throw (0, R.q2)(r, {
    tags: {
      planId: e
    }
  }), r
}

function q(e) {
  switch (e) {
    case U.Si.TIER_0:
      return G.Z.Messages.PREMIUM_TIER_0;
    case U.Si.TIER_1:
      return G.Z.Messages.PREMIUM_TIER_1;
    case U.Si.TIER_2:
      return G.Z.Messages.PREMIUM_TIER_2
  }
  let t = Error("Unsupported sku");
  throw (0, R.q2)(t, {
    tags: {
      skuId: e
    }
  }), t
}

function X(e) {
  switch (e) {
    case U.Xh.PREMIUM_MONTH_TIER_0:
    case U.Xh.PREMIUM_YEAR_TIER_0:
      return G.Z.Messages.PREMIUM_TIER_0;
    case U.Xh.PREMIUM_MONTH_TIER_1:
    case U.Xh.PREMIUM_YEAR_TIER_1:
      return G.Z.Messages.PREMIUM_TIER_1;
    case U.Xh.PREMIUM_MONTH_TIER_2:
    case U.Xh.PREMIUM_3_MONTH_TIER_2:
    case U.Xh.PREMIUM_6_MONTH_TIER_2:
    case U.Xh.PREMIUM_YEAR_TIER_2:
      return G.Z.Messages.PREMIUM_TIER_2
  }
  let t = Error("Unsupported plan");
  throw (0, R.q2)(t, {
    tags: {
      planId: e
    }
  }), t
}

function Q(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  switch (e) {
    case U.Xh.PREMIUM_MONTH_TIER_0:
    case U.Xh.PREMIUM_YEAR_TIER_0:
      return t ? "Basic" : "Nitro Basic";
    case U.Xh.PREMIUM_MONTH_TIER_1:
    case U.Xh.PREMIUM_YEAR_TIER_1:
      return t ? "Classic" : "Nitro Classic";
    case U.Xh.PREMIUM_MONTH_TIER_2:
    case U.Xh.PREMIUM_YEAR_TIER_2:
    case U.Xh.PREMIUM_3_MONTH_TIER_2:
    case U.Xh.PREMIUM_6_MONTH_TIER_2:
      return "Nitro"
  }
  let n = Error("Unsupported plan");
  throw (0, R.q2)(n, {
    tags: {
      planId: e
    }
  }), n
}

function J(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  switch (e) {
    case U.p9.TIER_0:
      return t ? "Basic" : G.Z.Messages.PREMIUM_TIER_0;
    case U.p9.TIER_1:
      return t ? "Classic" : G.Z.Messages.PREMIUM_TIER_1;
    case U.p9.TIER_2:
      return G.Z.Messages.PREMIUM_TIER_2
  }
}

function $(e) {
  var t, n, i, r, s, o, a, l, u, c;
  let {
    subscription: E,
    planId: I,
    price: T,
    includePremiumGuilds: h,
    hasDiscountApplied: S,
    activeDiscountInfo: N,
    renewalInvoicePreview: A
  } = e, m = U.GP[I], O = D.ZP.formatPriceString(D.ZP.getDefaultPrice(m.id), m.interval), R = eh(E) || null == E.paymentSourceId && !E.isPurchasedExternally && !(null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.hasFreePremium()), g = null != T, C = E.status === P.O0b.UNPAID && null !== E.latestInvoice && (null === (n = E.latestInvoice) || void 0 === n ? void 0 : n.status) === P.hUK.OPEN, v = R ? P.O0b.CANCELED : C ? P.O0b.UNPAID : E.status, L = null === (s = null !== (r = null == A ? void 0 : A.taxInclusive) && void 0 !== r ? r : null === (i = E.latestInvoice) || void 0 === i ? void 0 : i.taxInclusive) || void 0 === s || s, M = U.cb + (h ? es(E.additionalPlans) : 0);
  switch (I) {
    case U.Xh.PREMIUM_MONTH_TIER_0:
    case U.Xh.PREMIUM_YEAR_TIER_0:
      switch (v) {
        case P.O0b.CANCELED:
          return g ? L ? G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION.format({
            price: T
          }) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
            price: T
          }) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION_NO_PRICE;
        case P.O0b.ACCOUNT_HOLD:
          return g ? L ? G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD.format({
            price: T
          }) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
            price: T
          }) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD_NO_PRICE.format();
        case P.O0b.UNPAID:
          return G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_PAYMENT.format();
        case P.O0b.PAUSE_PENDING:
          let y = null != E.pauseEndsAt ? _()(E.pauseEndsAt).diff(E.currentPeriodEnd, "days") : null;
          return null != y ? G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
            pauseDate: E.currentPeriodEnd,
            pauseDuration: y
          }) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({
            pauseDate: E.currentPeriodEnd
          });
        case P.O0b.PAUSED:
          return G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({
            resumeDate: E.pauseEndsAt
          });
        case P.O0b.PAST_DUE:
          return G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_PAST_DUE_WITH_HC_LINK.format({
            endDate: (0, p.vc)(e_(E).expiresDate, "LL"),
            onClick: () => {
              (0, d.Z)("https://support.discord.com/hc/articles/23082866222871")
            }
          });
        default:
          return g ? L ? G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0.format({
            price: T
          }) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_TAX_EXCLUSIVE.format({
            price: T
          }) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_NO_PRICE
      }
    case U.Xh.PREMIUM_MONTH_TIER_1:
    case U.Xh.PREMIUM_YEAR_TIER_1:
      switch (v) {
        case P.O0b.CANCELED:
          return g ? L ? G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION.format({
            price: T
          }) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
            price: T
          }) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION_NO_PRICE;
        case P.O0b.ACCOUNT_HOLD:
          return g ? L ? G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD.format({
            price: T
          }) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
            price: T
          }) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD_NO_PRICE.format();
        case P.O0b.UNPAID:
          return G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_PAYMENT.format();
        case P.O0b.PAUSE_PENDING:
          let b = null != E.pauseEndsAt ? _()(E.pauseEndsAt).diff(E.currentPeriodEnd, "days") : null;
          return null != b ? G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
            pauseDate: E.currentPeriodEnd,
            pauseDuration: b
          }) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({
            pauseDate: E.currentPeriodEnd
          });
        case P.O0b.PAUSED:
          return G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({
            resumeDate: E.pauseEndsAt
          });
        case P.O0b.PAST_DUE:
          return G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_PAST_DUE_WITH_HC_LINK.format({
            endDate: (0, p.vc)(e_(E).expiresDate, "LL"),
            onClick: () => {
              (0, d.Z)("https://support.discord.com/hc/articles/23082866222871")
            }
          });
        default:
          return g ? L ? G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1.format({
            price: T
          }) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_TAX_EXCLUSIVE.format({
            price: T
          }) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_NO_PRICE
      }
    case U.Xh.PREMIUM_MONTH_TIER_2:
    case U.Xh.PREMIUM_YEAR_TIER_2:
    case U.Xh.PREMIUM_3_MONTH_TIER_2:
    case U.Xh.PREMIUM_6_MONTH_TIER_2:
      switch (v) {
        case P.O0b.CANCELED:
          return g ? L ? G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION.format({
            price: T,
            num: M
          }) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
            price: T,
            num: M
          }) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION_NO_PRICE.format({
            num: M
          });
        case P.O0b.ACCOUNT_HOLD:
          return g ? L ? G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD.format({
            price: T,
            num: M
          }) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
            price: T,
            num: M
          }) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD_NO_PRICE.format({
            num: M
          });
        case P.O0b.UNPAID:
          return G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_PAYMENT.format({
            num: M
          });
        case P.O0b.PAUSE_PENDING:
          let w = null != E.pauseEndsAt ? _()(E.pauseEndsAt).diff(E.currentPeriodEnd, "days") : null;
          return null != w ? G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
            pauseDate: E.currentPeriodEnd,
            pauseDuration: w
          }) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({
            pauseDate: E.currentPeriodEnd
          });
        case P.O0b.PAUSED:
          return G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({
            resumeDate: E.pauseEndsAt
          });
        case P.O0b.BILLING_RETRY:
          return G.Z.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO.format({
            endDate: _()(E.currentPeriodStart).add(U.A5, "days")
          });
        case P.O0b.PAST_DUE:
          return G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_PAST_DUE_WITH_HC_LINK.format({
            endDate: (0, p.vc)(e_(E).expiresDate, "LL"),
            onClick: () => {
              (0, d.Z)("https://support.discord.com/hc/articles/23082866222871")
            }
          });
        default:
          return S ? I === U.Xh.PREMIUM_YEAR_TIER_2 ? G.Z.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
            percent: null !== (o = null == N ? void 0 : N.percentage) && void 0 !== o ? o : U.Bo,
            regularPrice: O
          }) : L ? G.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
            percent: null !== (a = null == N ? void 0 : N.percentage) && void 0 !== a ? a : U.M_,
            regularPrice: O,
            numMonths: null !== (l = null == N ? void 0 : N.duration) && void 0 !== l ? l : U.rt
          }) : G.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC_TAX_EXCLUSIVE.format({
            percent: null !== (u = null == N ? void 0 : N.percentage) && void 0 !== u ? u : U.M_,
            regularPrice: O,
            numMonths: null !== (c = null == N ? void 0 : N.duration) && void 0 !== c ? c : U.rt
          }) : g ? L ? G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2.format({
            price: T,
            num: M
          }) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_TAX_EXCLUSIVE.format({
            price: T,
            num: M
          }) : G.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_NO_PRICE.format({
            num: M
          })
      }
    default:
      throw Error("Invalid planId ".concat(I))
  }
}

function ee(e) {
  let {
    renewalInvoicePreview: t,
    subscription: n,
    planId: i,
    includePremiumGuilds: r = !1,
    hasDiscountApplied: s = !1,
    activeDiscountInfo: o
  } = e, a = m.Z.get(i);
  return l()(null != a, "Missing plan"), $({
    subscription: n,
    planId: a.id,
    price: function(e, t, n) {
      let i = e.invoiceItems.find(e => {
          let {
            subscriptionPlanId: t
          } = e;
          return t === n.id
        }),
        r = null == i ? H(n.id, !1, !1, {
          paymentSourceId: t.paymentSourceId,
          currency: t.currency
        }).amount : i.amount;
      return (0, M.og)((0, M.T4)(r, e.currency), n.interval, n.intervalCount)
    }(t, n, a),
    includePremiumGuilds: r,
    hasDiscountApplied: s,
    activeDiscountInfo: o,
    renewalInvoicePreview: t
  })
}

function et(e) {
  let {
    planId: t,
    additionalPlans: n
  } = e, i = (0, S.Q0)(t) ? null : z(t), r = null == n ? void 0 : n.find(e => {
    let {
      planId: t
    } = e;
    return U.Z1.has(t)
  }), s = (null == r ? void 0 : r.planId) === U.Xh.PREMIUM_MONTH_GUILD ? G.Z.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS_UNFORMATTED : (null == r ? void 0 : r.planId) === U.Xh.PREMIUM_YEAR_GUILD ? G.Z.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS_UNFORMATTED : null, o = null == s ? void 0 : s.format({
    num: null == r ? void 0 : r.quantity
  });
  if (null != i && null != o) return G.Z.Messages.PREMIUM_WITH_PREMIUM_GUILD_EXTERNAL_PLAN_DESCRIPTION.format({
    premiumDescription: i,
    premiumGuildDescription: o
  });
  if (null != i) return i;
  if (null != o) return o;
  else throw Error("Subscription without premium or premium guild subscription")
}

function en(e) {
  let {
    skuId: t,
    isPremium: n,
    multiMonthPlans: i,
    currentSubscription: r,
    isGift: s,
    isEligibleForTrial: o,
    defaultPlanId: a,
    defaultToMonthlyPlan: l
  } = e;
  if (null == t || !n) return [];
  let u = void 0 !== a && t === U.GP[a].skuId ? a : void 0;
  void 0 === u && l && !s && (u = U.IW[t]), o && !s && (void 0 === a || l && U.No.has(a)) && h.k.trackExposure({
    location: "de805e_1"
  });
  let _ = [];
  switch (t) {
    case U.Si.TIER_0:
      _ = [U.Xh.PREMIUM_YEAR_TIER_0, U.Xh.PREMIUM_MONTH_TIER_0];
      break;
    case U.Si.TIER_1:
      _ = [U.Xh.PREMIUM_MONTH_TIER_1];
      break;
    case U.Si.TIER_2:
      let c = i;
      if (null != r) {
        let e = r.items[0].planId;
        if (U.o4.has(e)) {
          let t = U.GP[e];
          c = [...U.o4].filter(e => {
            let n = U.GP[e];
            return n.interval === t.interval && n.intervalCount === t.intervalCount && n.skuId === U.Si.TIER_2
          })
        } else c = []
      }
      _ = [U.Xh.PREMIUM_YEAR_TIER_2, ...c, U.Xh.PREMIUM_MONTH_TIER_2];
      break;
    default:
      throw Error("Unexpected SKU: ".concat(t))
  }
  if (void 0 !== u) {
    let e = _.indexOf(u);
    _.splice(e, 1), _.unshift(u)
  }
  return _
}

function ei(e) {
  let t = U.GP[e];
  if (null == t) {
    let t = Error("Unsupported plan");
    throw (0, R.q2)(t, {
      tags: {
        planId: e
      }
    }), t
  }
  return t.skuId
}

function er(e) {
  var t;
  return null == e ? x.ALL : null !== (t = x[e]) && void 0 !== t ? t : []
}

function es(e) {
  let t = m.Z.getPlanIdsForSkus([ew(U.Si.GUILD)]);
  l()(null != t, "Missing guildSubscriptionPlanIds");
  let n = e.find(e => {
    let {
      planId: n
    } = e;
    return t.includes(n)
  });
  return null != n ? n.quantity : 0
}
let eo = new Set([U.Xh.NONE_MONTH, U.Xh.NONE_3_MONTH, U.Xh.NONE_6_MONTH, U.Xh.NONE_YEAR, U.Xh.PREMIUM_MONTH_TIER_0, U.Xh.PREMIUM_MONTH_TIER_1, U.Xh.PREMIUM_MONTH_TIER_2, U.Xh.PREMIUM_YEAR_TIER_0, U.Xh.PREMIUM_YEAR_TIER_1, U.Xh.PREMIUM_YEAR_TIER_2, U.Xh.PREMIUM_3_MONTH_TIER_2, U.Xh.PREMIUM_6_MONTH_TIER_2]);

function ea(e) {
  return eo.has(e)
}

function el(e) {
  return U.Z1.has(e)
}

function eu(e) {
  return ea(e) || el(e)
}

function e_(e) {
  var t, n, i, r, s;
  if (e.isPurchasedViaApple && (null === (t = e.metadata) || void 0 === t ? void 0 : t.apple_grace_period_expires_date) != null) {
    let t = _()(e.metadata.apple_grace_period_expires_date);
    return {
      days: _().duration(t.diff(e.currentPeriodStart)).days(),
      expiresDate: t
    }
  }
  if (e.isPurchasedViaGoogle && (null === (n = e.metadata) || void 0 === n ? void 0 : n.google_grace_period_expires_date) != null && (null === (i = e.metadata) || void 0 === i ? void 0 : i.google_original_expires_date) != null) {
    let t = _()(e.metadata.google_grace_period_expires_date),
      n = _()(e.metadata.google_original_expires_date);
    return {
      days: _().duration(t.diff(n)).days(),
      expiresDate: t
    }
  }
  if (e.isPurchasedExternally) {
    let t = e.isPurchasedViaApple ? U.$7 : U.Ue;
    return {
      days: t,
      expiresDate: _()(e.currentPeriodStart).add(t, "days")
    }
  }
  if ((null === (r = e.metadata) || void 0 === r ? void 0 : r.grace_period_expires_date) != null) return {
    days: _()(null === (s = e.metadata) || void 0 === s ? void 0 : s.grace_period_expires_date).diff(e.currentPeriodStart, "days"),
    expiresDate: _()(e.metadata.grace_period_expires_date)
  };
  {
    let t = null == e.paymentSourceId ? U.UA : U.zp;
    return {
      days: t,
      expiresDate: _()(e.currentPeriodStart).add(t, "days")
    }
  }
}

function ec(e) {
  if (null == e) return !1;
  let t = A.Z.getPaymentSource(e);
  return null != t && b.Uk.has(t.type)
}

function ed(e) {
  return e.isPurchasedExternally ? e.status === P.O0b.CANCELED : function(e) {
    let {
      renewalMutations: t,
      additionalPlans: n,
      status: i
    } = e, r = es(n);
    return 0 === (null != t ? es(t.additionalPlans) : null) && 0 !== r ? P.O0b.CANCELED : i
  }(e) === P.O0b.CANCELED
}

function eE(e) {
  var t, n, i;
  let {
    subscription: r,
    user: s,
    price: o,
    renewalInvoicePreview: a
  } = e, {
    planId: u,
    additionalPlans: _
  } = r, c = m.Z.get(u);
  l()(null != c, "Missing plan");
  let d = es(_),
    E = ef(r.planId, r.paymentSourceId, r.currency, s).amount * d;
  if (null != a) {
    let e = a.invoiceItems.find(e => U.Z1.has(e.subscriptionPlanId));
    null != e && (E = e.amount)
  }
  o = null != o ? o : (0, M.T4)(E, r.currency);
  let I = null === (i = null !== (n = null == a ? void 0 : a.taxInclusive) && void 0 !== n ? n : null === (t = r.latestInvoice) || void 0 === t ? void 0 : t.taxInclusive) || void 0 === i || i;
  if (ed(r)) return r.isPurchasedViaGoogle ? G.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION_NO_PRICE.format({
    quantity: d
  }) : I ? G.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION.format({
    quantity: d,
    rate: (0, M.og)(o, c.interval, c.intervalCount)
  }) : G.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
    quantity: d,
    rate: (0, M.og)(o, c.interval, c.intervalCount)
  });
  switch (r.status) {
    case P.O0b.ACCOUNT_HOLD:
      return r.isPurchasedViaGoogle ? G.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD_NO_PRICE.format({
        quantity: d,
        boostQuantity: d
      }) : I ? G.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD.format({
        quantity: d,
        boostQuantity: d,
        rate: (0, M.og)(o, c.interval, c.intervalCount)
      }) : G.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
        quantity: d,
        boostQuantity: d,
        rate: (0, M.og)(o, c.interval, c.intervalCount)
      });
    case P.O0b.PAUSE_PENDING:
    case P.O0b.PAUSED:
      return G.Z.Messages.GUILD_BOOSTING_DISABLED_HEADER;
    default:
      return r.isPurchasedViaGoogle ? G.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_NO_PRICE.format({
        quantity: d
      }) : I ? G.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO.format({
        quantity: d,
        rate: (0, M.og)(o, c.interval, c.intervalCount)
      }) : G.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_TAX_EXCLUSIVE.format({
        quantity: d,
        rate: (0, M.og)(o, c.interval, c.intervalCount)
      })
  }
}

function eI(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    r = null != t ? H(e.id, !1, i, t) : Z(e.id, !1, i),
    s = (0, M.T4)(r.amount, r.currency);
  return e.currency !== b.pK.USD && !0 === n && (s = s.concat("*")), s
}

function eT(e, t, n) {
  let i = eI(e, t, n);
  return (0, M.og)(i, e.interval, e.intervalCount)
}

function eh(e) {
  let {
    status: t,
    renewalMutations: n
  } = e;
  return t === P.O0b.CANCELED || null != n && (0, S.Q0)(n.planId) && !e.isPurchasedExternally
}

function eS(e) {
  return e === P.O0b.PAST_DUE || e === P.O0b.ACCOUNT_HOLD || e === P.O0b.BILLING_RETRY
}

function ef(e, t, n, i) {
  let r = null != t ? {
      paymentSourceId: t,
      currency: n
    } : {
      country: N.Z.ipCountryCodeWithFallback,
      currency: n
    },
    s = m.Z.get(e);
  if (null == s) {
    let t = Error("Unsupported plan");
    throw (0, R.q2)(t, {
      tags: {
        planId: e
      }
    }), t
  }
  let o = m.Z.getForSkuAndInterval(ew(U.Si.GUILD), s.interval, s.intervalCount);
  if (null == o) {
    let t = Error("Unsupported plan");
    throw (0, R.q2)(t, {
      tags: {
        planId: e
      }
    }), t
  }
  return H(o.id, (0, L.I5)(i), !1, r)
}

function eN(e, t, n) {
  let i = t.id;
  if (null != e) switch (i) {
    case U.Xh.PREMIUM_MONTH_TIER_0:
      return G.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_0;
    case U.Xh.PREMIUM_YEAR_TIER_0:
      return G.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_0;
    case U.Xh.PREMIUM_MONTH_TIER_1:
      return G.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_1;
    case U.Xh.PREMIUM_YEAR_TIER_1:
      return G.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_1;
    case U.Xh.PREMIUM_MONTH_TIER_2:
      return G.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_2;
    case U.Xh.PREMIUM_YEAR_TIER_2:
      return G.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_2
  }
  switch (i) {
    case U.Xh.PREMIUM_MONTH_TIER_0:
      return n ? G.Z.Messages.BILLING_SELECT_PLAN : G.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_0;
    case U.Xh.PREMIUM_YEAR_TIER_0:
      return n ? G.Z.Messages.BILLING_SELECT_PLAN : G.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_0;
    case U.Xh.PREMIUM_MONTH_TIER_1:
      return n ? G.Z.Messages.BILLING_SELECT_PLAN : G.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_1;
    case U.Xh.PREMIUM_YEAR_TIER_1:
      return n ? G.Z.Messages.BILLING_SELECT_PLAN : G.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_1;
    case U.Xh.PREMIUM_MONTH_TIER_2:
      return n ? G.Z.Messages.BILLING_SELECT_PLAN : G.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_2;
    case U.Xh.PREMIUM_YEAR_TIER_2:
      return n ? G.Z.Messages.BILLING_SELECT_PLAN : G.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_2;
    case U.Xh.PREMIUM_3_MONTH_TIER_2:
    case U.Xh.PREMIUM_6_MONTH_TIER_2:
      return G.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTHS_TIER_2.format({
        intervalCount: t.intervalCount
      });
    case U.Xh.NONE_MONTH:
    case U.Xh.NONE_YEAR:
    case U.Xh.NONE_3_MONTH:
    case U.Xh.NONE_6_MONTH:
    case U.Xh.PREMIUM_MONTH_GUILD:
    case U.Xh.PREMIUM_YEAR_GUILD:
    case U.Xh.PREMIUM_3_MONTH_GUILD:
    case U.Xh.PREMIUM_6_MONTH_GUILD:
      return G.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
  }
  let r = Error("User is purchasing an unsupported plan");
  throw (0, R.q2)(r, {
    tags: {
      planId: i
    }
  }), r
}

function eA(e) {
  let t = e.invoiceItems[0].subscriptionPlanId,
    n = m.Z.get(t);
  return l()(null != n, "Missing subscriptionPlan"), {
    intervalType: n.interval,
    intervalCount: n.intervalCount
  }
}

function em(e) {
  let {
    intervalType: t = U.rV.MONTH,
    intervalCount: n = 1,
    capitalize: i = !1
  } = e;
  switch (t) {
    case U.rV.DAY:
      if (n >= 7 && n % 7 == 0) return i ? G.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_WEEKS.format({
        weeks: n / 7
      }) : G.Z.Messages.PREMIUM_TRIAL_FREE_DURATION_WEEKS.format({
        weeks: n / 7
      });
      return i ? G.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_DAYS.format({
        days: n
      }) : G.Z.Messages.PREMIUM_TRIAL_FREE_DURATION_DAYS.format({
        days: n
      });
    case U.rV.MONTH:
      return i ? G.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_MONTHS.format({
        months: n
      }) : G.Z.Messages.PREMIUM_TRIAL_FREE_DURATION_MONTHS.format({
        months: n
      });
    case U.rV.YEAR:
      return i ? G.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_YEARS.format({
        years: n
      }) : G.Z.Messages.PREMIUM_TRIAL_FREE_DURATION_YEARS.format({
        years: n
      });
    default:
      throw Error("Unsupported interval duration.")
  }
}

function eO(e) {
  let {
    intervalType: t = U.rV.MONTH,
    intervalCount: n = 1
  } = e;
  switch (t) {
    case U.rV.DAY:
      if (n >= 7 && n % 7 == 0) return G.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_WEEKS.format({
        weeks: n / 7
      });
      return G.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_DAYS.format({
        days: n
      });
    case U.rV.MONTH:
      return G.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_MONTHS.format({
        months: n
      });
    case U.rV.YEAR:
      return G.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_YEARS.format({
        years: n
      });
    default:
      throw Error("Unsupported interval duration.")
  }
}

function eR(e) {
  let {
    intervalType: t = U.rV.MONTH,
    intervalCount: n = 1,
    capitalize: i = !1
  } = e;
  switch (t) {
    case U.rV.DAY:
      if (n >= 7 && n % 7 == 0) return i ? G.Z.Messages.DURATION_WEEKS_CAPITALIZE.format({
        weeks: n / 7
      }) : G.Z.Messages.DURATION_WEEKS.format({
        weeks: n / 7
      });
      return i ? G.Z.Messages.DURATION_DAYS_CAPITALIZE.format({
        days: n
      }) : G.Z.Messages.DURATION_DAYS.format({
        days: n
      });
    case U.rV.MONTH:
      return i ? G.Z.Messages.DURATION_MONTHS_CAPITALIZE.format({
        months: n
      }) : G.Z.Messages.DURATION_MONTHS.format({
        months: n
      });
    case U.rV.YEAR:
      return i ? G.Z.Messages.DURATION_YEARS_CAPITALIZE.format({
        years: n
      }) : G.Z.Messages.DURATION_YEARS.format({
        years: n
      });
    default:
      throw Error("Unsupported interval duration.")
  }
}

function ep(e, t) {
  switch (e) {
    case P.gg$.APPLE_PARTNER:
    case P.gg$.APPLE:
      return w[t];
    case P.gg$.GOOGLE:
      return B[t]
  }
  throw Error("Invalid external payment gateway ".concat(e))
}

function eg(e, t) {
  return (0, L.I5)(e) || eS(null == t ? void 0 : t.status)
}

function eC(e, t) {
  var n, i;
  let r = [],
    s = (null !== (i = null === (n = e.renewalMutations) || void 0 === n ? void 0 : n.items) && void 0 !== i ? i : e.items).find(e => U.dJ.has(e.planId));
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
  return e.filter(e => !U.dJ.has(e.planId))
}

function eL(e, t, n, i) {
  var r, s;
  l()(i.has(t), "Expected planId in group");
  let o = !1,
    a = (null !== (s = null === (r = e.renewalMutations) || void 0 === r ? void 0 : r.items) && void 0 !== s ? s : e.items).map(e => i.has(e.planId) ? (o = !0, {
      ...e,
      quantity: n,
      planId: t
    }) : e);
  if (!o) {
    let i = {
        planId: t,
        quantity: n
      },
      r = e.items.find(e => e.planId === t);
    null != r && (i.id = r.id), a.push(i)
  }
  return a.filter(e => 0 !== e.quantity)
}

function eD(e, t) {
  return eL(e, t, 1, U.dJ)
}

function eM(e, t, n) {
  return eL(e, n, t, U.Z1)
}

function eP(e) {
  var t;
  let n = null !== (t = e.find(e => !("id" in e))) && void 0 !== t ? t : e.find(e => U.dJ.has(e.planId));
  if (null != n) {
    let t = m.Z.get(n.planId);
    l()(null != t, "Missing plan"), e = e.map(e => {
      if (e === n) return e;
      let i = m.Z.get(e.planId);
      l()(null != i, "Missing plan");
      let r = m.Z.getForSkuAndInterval(i.skuId, t.interval, t.intervalCount);
      return l()(null != r, "Missing planForInterval"), {
        ...e,
        planId: r.id
      }
    })
  }
  return e
}

function ey(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      useSpace: !0
    },
    n = U.a1[e].fileSize;
  return (0, g.BU)(n / 1024, {
    useKibibytes: !0,
    useSpace: t.useSpace
  })
}

function eU(e) {
  return null == e ? null : e.items.find(e => U.Z1.has(e.planId))
}

function eb(e) {
  let t = null != e ? V(e) : null;
  return null != t ? ei(t.planId) : null
}

function eG(e) {
  var t;
  return null !== (t = I.Z.getActivated()[e]) && void 0 !== t && t
}

function ew(e) {
  return e
}
t.ZP = Object.freeze({
  isNewUser: e => null != e && Date.now() - e.createdAt.getTime() < 2592e6,
  isPremiumAtLeast: L.yd,
  isPremium: L.I5,
  isPremiumExactly: L.M5,
  getPrice: H,
  getDefaultPrice: Z,
  getInterval: function(e) {
    let t = U.GP[e];
    if (null != t) return {
      intervalType: t.interval,
      intervalCount: t.intervalCount
    };
    let n = Error("Unsupported plan");
    throw (0, R.q2)(n, {
      tags: {
        planId: e
      }
    }), n
  },
  getIntervalString: j,
  getIntervalStringAsNoun: W,
  getPremiumType: K,
  getDisplayName: z,
  getDisplayPremiumType: Q,
  getPremiumPlanOptions: en,
  getUpgradeEligibilities: er,
  getPlanDescription: $,
  isPremiumSku: function(e) {
    return e === U.Si.TIER_0 || e === U.Si.TIER_1 || e === U.Si.TIER_2
  },
  getClosestUpgrade: function(e) {
    let t = U.GP[e];
    if (null == t) throw Error("Unrecognized plan.");
    let {
      interval: n
    } = t, i = er(e);
    for (let e of Object.keys(U.GP)) {
      let {
        interval: t
      } = U.GP[e];
      if (n === t && i.includes(e)) return e
    }
    return null
  },
  getIntervalMonths: function(e, t) {
    if (e === U.rV.MONTH) return t;
    if (e === U.rV.YEAR) return 12 * t;
    throw Error("".concat(e, " interval subscription period not implemented"))
  },
  getUserMaxFileSize: v.h,
  getSkuIdForPlan: ei,
  getSkuIdForPremiumType: function(e) {
    switch (e) {
      case U.p9.TIER_0:
        return U.Si.TIER_0;
      case U.p9.TIER_1:
        return U.Si.TIER_1;
      case U.p9.TIER_2:
        return U.Si.TIER_2
    }
  },
  getNumIncludedPremiumGuildSubscriptionSlots: function(e) {
    if (K(e) === U.p9.TIER_2) return U.cb;
    return 0
  },
  getBillingInformationString: function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = n ? (0, M.T4)(t.invoiceItems.filter(e => U.UD.has(e.subscriptionPlanId)).map(e => e.amount).reduce((e, t) => t + e, 0), t.currency) : (0, M.T4)(t.total, t.currency);
    if (e.status === P.O0b.CANCELED) return G.Z.Messages.PREMIUM_SETTINGS_CANCELLED_INFO.format({
      endDate: t.subscriptionPeriodStart
    });
    if (e.status === P.O0b.PAUSE_PENDING) return G.Z.Messages.PREMIUM_SETTINGS_PAUSE_PENDING_INFO.format({
      pauseDate: e.currentPeriodEnd,
      resumeDate: e.pauseEndsAt
    });
    if (e.status === P.O0b.PAUSED) return null == e.pauseEndsAt ? n ? G.Z.Messages.PREMIUM_SETTINGS_PAUSED_INFO_WITH_PLAN.format({
      planName: G.Z.Messages.PREMIUM,
      price: i
    }) : G.Z.Messages.PREMIUM_SETTINGS_PAUSED_INFO : n ? G.Z.Messages.PREMIUM_SETTINGS_PAUSE_ENDS_AT_INFO_WITH_PLAN.format({
      planName: G.Z.Messages.PREMIUM,
      resumeDate: e.pauseEndsAt,
      price: i
    }) : G.Z.Messages.PREMIUM_SETTINGS_PAUSE_ENDS_AT_INFO.format({
      resumeDate: e.pauseEndsAt
    });
    else if (e.status === P.O0b.PAST_DUE) {
      var r, s;
      let t = e_(e).expiresDate;
      return (e.isPurchasedViaGoogle && (null === (r = e.metadata) || void 0 === r ? void 0 : r.google_grace_period_expires_date) != null && (t = _()(e.metadata.google_grace_period_expires_date)), e.isPurchasedViaApple && (null === (s = e.metadata) || void 0 === s ? void 0 : s.apple_grace_period_expires_date) != null && (t = _()(e.metadata.apple_grace_period_expires_date)), e.isPurchasedExternally) ? G.Z.Messages.PREMIUM_SETTINGS_PAST_DUE_INFO_EXTERNAL.format({
        endDate: t,
        paymentGatewayName: b.Vz[e.paymentGateway],
        paymentSourceLink: ep(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")
      }) : G.Z.Messages.PREMIUM_SETTINGS_PAST_DUE_INFO.format({
        endDate: t,
        price: i
      })
    } else if (e.status === P.O0b.BILLING_RETRY) return G.Z.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_PRICE.format({
      endDate: _()(e.currentPeriodStart).add(U.A5, "days"),
      price: i
    });
    else if (e.status === P.O0b.ACCOUNT_HOLD) return e.isPurchasedViaGoogle && !(0, C.isAndroid)() ? G.Z.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_EXTERNAL.format({
      endDate: _()(e.currentPeriodStart).add(U.gh, "days"),
      paymentGatewayName: b.Vz[e.paymentGateway],
      paymentSourceLink: ep(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")
    }) : G.Z.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_PRICE.format({
      endDate: _()(e.currentPeriodStart).add(U.gh, "days"),
      price: i
    });
    else return function(e) {
      return null != e.paymentSourceId && ec(e.paymentSourceId)
    }(e) ? G.Z.Messages.PREMIUM_SETTINGS_PREPAID_THROUGH_DATE.format({
      prepaidEndDate: e.currentPeriodEnd
    }) : e.status === P.O0b.UNPAID ? G.Z.Messages.PREMIUM_SETTINGS_PAYMENT_PROCESSING.format({
      maxProcessingTimeInDays: U.Rg
    }) : e.isPurchasedExternally ? G.Z.Messages.PREMIUM_SETTINGS_RENEWAL_INFO_EXTERNAL.format({
      renewalDate: t.subscriptionPeriodStart,
      paymentGatewayName: b.Vz[e.paymentGateway],
      subscriptionManagementLink: ep(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
    }) : n ? G.Z.Messages.PREMIUM_SETTINGS_RENEWAL_INFO_WITH_PLAN.format({
      planName: G.Z.Messages.PREMIUM,
      renewalDate: t.subscriptionPeriodStart,
      price: i
    }) : G.Z.Messages.PREMIUM_SETTINGS_RENEWAL_INFO.format({
      renewalDate: t.subscriptionPeriodStart,
      price: i
    })
  },
  isNoneSubscription: S.Q0,
  getPlanIdFromInvoice: function(e, t) {
    let {
      planId: n
    } = e;
    if (e.status === P.O0b.CANCELED || e.status === P.O0b.PAUSE_PENDING) return n;
    l()(null != t, "Expected invoicePreview");
    let i = t.invoiceItems.find(e => {
      let {
        subscriptionPlanId: t
      } = e;
      return ea(t)
    });
    return n = null == i || (0, S.Q0)(i.subscriptionPlanId) ? e.planId : null != e.renewalMutations && e.renewalMutations.planId !== e.planId ? e.planId : i.subscriptionPlanId
  },
  getStatusFromInvoice: function(e, t) {
    let {
      status: n
    } = e;
    if (e.status === P.O0b.CANCELED || e.status === P.O0b.PAUSE_PENDING) return n;
    l()(null != t, "Expected invoicePreview");
    let i = t.invoiceItems.find(e => {
      let {
        subscriptionPlanId: t
      } = e;
      return ea(t)
    });
    return (null == i || (0, S.Q0)(i.subscriptionPlanId)) && (n = P.O0b.CANCELED), n
  },
  isBaseSubscriptionCanceled: eh,
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
  getBillingReviewSubheader: eN,
  getIntervalForInvoice: eA,
  getPremiumPlanItem: V,
  getGuildBoostPlanItem: eU,
  isBoostOnlySubscription: function(e) {
    return null != e && null == V(e) && null != eU(e)
  },
  getPremiumSkuIdForSubscription: eb,
  getPremiumTypeFromSubscription: function(e) {
    if (null != e) {
      let t = V(e);
      if (null != t) return K(t.planId)
    }
  },
  getPremiumTypeFromSubscriptionRenewalMutations: function(e) {
    if (null != e && null != e.renewalMutations) {
      let t = V(e.renewalMutations);
      if (null != t) return K(t.planId)
    }
  },
  getPremiumGradientColor: function(e) {
    switch (e) {
      case U.p9.TIER_0:
        return y.Rj.PREMIUM_TIER_0;
      case U.p9.TIER_1:
        return y.Rj.PREMIUM_TIER_1;
      case U.p9.TIER_2:
        return y.Rj.PREMIUM_TIER_2
    }
  },
  castPremiumSubscriptionAsSkuId: ew,
  canUseAnimatedEmojis: function(e) {
    return (0, T.ks)(T.g_, e)
  },
  canUseEmojisEverywhere: function(e) {
    return (0, T.ks)(T.m_, e)
  },
  canUseSoundboardEverywhere: function(e) {
    return (0, T.ks)(T._y, e)
  },
  canUseCustomCallSounds: function(e) {
    return (0, T.ks)(T.tj, e)
  },
  canUploadLargeFiles: function(e) {
    return (0, T.ks)(T.EQ, e)
  },
  canUseBadges: function(e) {
    return (0, T.ks)(T.Pl, e)
  },
  canUseHighVideoUploadQuality: function(e) {
    return (0, T.ks)(T.wN, e)
  },
  canEditDiscriminator: function(e) {
    return (0, T.ks)(T._G, e)
  },
  hasBoostDiscount: function(e) {
    return (0, T.ks)(T.j4, e)
  },
  canUseAnimatedAvatar: function(e) {
    return (0, T.ks)(T.lX, e)
  },
  canUseFancyVoiceChannelReactions: function(e) {
    return (0, T.ks)(T.Uw, e)
  },
  canInstallPremiumApplications: function(e) {
    return (0, T.ks)(T.zm, e)
  },
  canUseIncreasedMessageLength: function(e) {
    return (0, T.ks)(T.zZ, e)
  },
  canUseIncreasedGuildCap: function(e) {
    return (0, T.ks)(T.do, e)
  },
  canRedeemPremiumPerks: function(e) {
    return (0, T.ks)(T.ZE, e)
  },
  canUsePremiumProfileCustomization: function(e) {
    return (0, T.ks)(T.Ej, e)
  },
  canUsePremiumAppIcons: function(e) {
    return (0, T.ks)(T.Ct, e)
  },
  canUsePremiumGuildMemberProfile: function(e) {
    return (0, T.ks)(T.O1, e)
  },
  canUseClientThemes: function(e) {
    return (0, T.ks)(T.uw, e)
  },
  canStreamQuality: function(e, t) {
    return !!eG(c.q.STREAM_HIGH_QUALITY) || ("high" === e ? (0, T.ks)(T.O8, t) : "mid" === e && (0, T.ks)(T.g7, t))
  },
  hasFreeBoosts: function(e) {
    return (0, T.ks)(T.$0, e)
  },
  canUseCustomStickersEverywhere: function(e) {
    return (0, T.ks)(T.ME, e)
  },
  canUseCustomBackgrounds: function(e) {
    return (0, T.ks)(T.AN, e)
  },
  canUseCollectibles: function(e) {
    return (0, T.ks)(T._O, e)
  },
  canUseCustomNotificationSounds: function(e) {
    return (0, T.ks)(T.qH, e)
  },
  formatPriceString: function(e, t) {
    let n = (0, M.T4)(e.amount, e.currency),
      i = W(t);
    return "".concat(n, "/").concat(i)
  },
  StreamQuality: r
})