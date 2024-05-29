"use strict";
s.r(t), s("411104");
var a = s("735250");
s("470079");
var r = s("858987"),
  l = s("122289"),
  i = s("63063"),
  n = s("74538"),
  c = s("937615"),
  u = s("296848"),
  o = s("981631"),
  d = s("474936"),
  E = s("689938"),
  _ = s("291225");
t.default = function(e) {
  let t, s, I;
  let {
    subscriptionPlan: L,
    isGift: T,
    isEmbeddedIAP: A,
    renewalInvoice: p,
    paymentSourceType: N,
    hide: M,
    purchaseType: f,
    productLine: R,
    basePrice: S,
    currentSubscription: P
  } = e;
  if (M) return null;
  let h = null == e.planGroup ? [] : e.planGroup;
  if (null != p) {
    let e = n.default.getIntervalForInvoice(p);
    t = e.intervalType, s = e.intervalCount, I = (0, c.formatRate)((0, c.formatPrice)(p.total, p.currency), t, s)
  } else null != L && (t = L.interval, s = L.intervalCount);
  let m = (0, r.getReviewConfirmButtonLabel)({
      purchaseType: f || o.PurchaseTypes.SUBSCRIPTION,
      plan: L,
      premiumSubscription: null == P ? null : P,
      isGift: !!T,
      planGroup: h,
      isPrepaidPaymentSource: !1
    }),
    C = "",
    U = "";
  if (A) {
    if (null != I && (null == p ? void 0 : p.subscriptionPeriodEnd) != null) C = E.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_RATE_AND_RENEWAL.format({
      rate: I,
      renewalDate: p.subscriptionPeriodEnd
    });
    else switch (t) {
      case d.SubscriptionIntervalTypes.MONTH:
        C = 1 === s ? E.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MONTHLY : E.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MULTI_MONTH.format({
          intervalCount: s
        });
        break;
      case d.SubscriptionIntervalTypes.YEAR:
        C = E.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_YEARLY;
        break;
      case void 0:
        U = E.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
          primaryText: m,
          paidURL: o.MarketingURLs.PAID_TERMS
        }), C = E.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE.format({});
        break;
      default:
        throw Error("Unexpected interval: ".concat(t))
    }
  } else if (f === o.PurchaseTypes.ONE_TIME) U = E.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
    primaryText: m,
    paidURL: o.MarketingURLs.PAID_TERMS
  }), C = R === o.SKUProductLines.COLLECTIBLES ? T ? E.default.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_GIFT_PAYMENT : E.default.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_PAYMENT : E.default.Messages.ONE_TIME_PURCHASE_FINE_PRINT;
  else if (null == L || T) switch (T && (U = E.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
      primaryText: m,
      paidURL: o.MarketingURLs.PAID_TERMS
    })), t) {
    case d.SubscriptionIntervalTypes.MONTH:
      C = T ? E.default.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY, C = T ? E.default.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : 1 === s ? E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY : E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MULTI_MONTH.format({
        intervalCount: s
      });
      break;
    case d.SubscriptionIntervalTypes.YEAR:
      C = T ? E.default.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_YEARLY : E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_YEARLY;
      break;
    case void 0:
      C = "";
      break;
    default:
      throw Error("Unexpected interval: ".concat(t))
  } else {
    let e;
    let a = (0, r.getReviewConfirmButtonLabel)({
      purchaseType: o.PurchaseTypes.SUBSCRIPTION,
      plan: L,
      premiumSubscription: null == P ? null : P,
      isGift: !1,
      planGroup: h,
      isPrepaidPaymentSource: !1
    });
    if (null != S && null != t && null != s && (e = (0, c.formatRate)((0, c.formatPrice)(S.amount, S.currency), t, s)), null == e) {
      let e = Error("Missing base rate for legal fine print");
      (0, l.captureBillingException)(e, {
        tags: {
          planId: L.id
        }
      })
    }
    C = (null == P ? void 0 : P.isPaused) ? E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_RESUME.format({
      primaryText: a,
      rate: e,
      paidURL: o.MarketingURLs.PAID_TERMS,
      contactLink: o.MarketingURLs.CONTACT,
      helpdeskArticle: i.default.getArticleURL(o.HelpdeskArticles.BILLING)
    }) : null != P && (0, u.subscriptionCanDowngrade)(P, L.id, h) ? E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PLAN_CHANGE_V2.format({
      primaryText: a,
      rate: e,
      paidURL: o.MarketingURLs.PAID_TERMS,
      contactLink: o.MarketingURLs.CONTACT,
      helpdeskArticle: i.default.getArticleURL(o.HelpdeskArticles.BILLING)
    }) : E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_V2.format({
      primaryText: a,
      rate: e,
      paidURL: o.MarketingURLs.PAID_TERMS,
      contactLink: o.MarketingURLs.CONTACT,
      helpdeskArticle: i.default.getArticleURL(o.HelpdeskArticles.BILLING)
    })
  }
  return (0, a.jsxs)(a.Fragment, {
    children: ["" !== U && (0, a.jsxs)("div", {
      children: [(0, a.jsx)("div", {
        children: U
      }), (0, a.jsx)("div", {
        className: _.divider
      })]
    }), "" !== C && (0, a.jsx)("div", {
      children: C
    }), N === o.PaymentSourceTypes.PAYSAFE_CARD && (0, a.jsx)("div", {
      className: _.paymentSourceNoticeCopy,
      children: E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PAYSAFECARD
    }), N === o.PaymentSourceTypes.SOFORT && (0, a.jsxs)("div", {
      className: _.paymentSourceNoticeCopy,
      children: [E.default.Messages.SOFORT_MANDATE_AGREEMENT, " "]
    })]
  })
}