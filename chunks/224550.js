"use strict";
a.r(t), a("411104");
var n = a("735250");
a("470079");
var r = a("858987"),
  s = a("122289"),
  i = a("63063"),
  l = a("74538"),
  o = a("937615"),
  u = a("296848"),
  c = a("981631"),
  d = a("474936"),
  I = a("689938"),
  _ = a("291225");
t.default = function(e) {
  let t, a, T;
  let {
    subscriptionPlan: f,
    isGift: p,
    isEmbeddedIAP: P,
    renewalInvoice: m,
    paymentSourceType: E,
    hide: A,
    purchaseType: S,
    productLine: N,
    basePrice: R,
    currentSubscription: M
  } = e;
  if (A) return null;
  let b = null == e.planGroup ? [] : e.planGroup;
  if (null != m) {
    let e = l.default.getIntervalForInvoice(m);
    t = e.intervalType, a = e.intervalCount, T = (0, o.formatRate)((0, o.formatPrice)(m.total, m.currency), t, a)
  } else null != f && (t = f.interval, a = f.intervalCount);
  let v = (0, r.getReviewConfirmButtonLabel)({
      purchaseType: S || c.PurchaseTypes.SUBSCRIPTION,
      plan: f,
      premiumSubscription: null == M ? null : M,
      isGift: !!p,
      planGroup: b,
      isPrepaidPaymentSource: !1
    }),
    L = "",
    C = "";
  if (P) {
    if (null != T && (null == m ? void 0 : m.subscriptionPeriodEnd) != null) L = I.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_RATE_AND_RENEWAL.format({
      rate: T,
      renewalDate: m.subscriptionPeriodEnd
    });
    else switch (t) {
      case d.SubscriptionIntervalTypes.MONTH:
        L = 1 === a ? I.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MONTHLY : I.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MULTI_MONTH.format({
          intervalCount: a
        });
        break;
      case d.SubscriptionIntervalTypes.YEAR:
        L = I.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_YEARLY;
        break;
      case void 0:
        C = I.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
          primaryText: v,
          paidURL: c.MarketingURLs.PAID_TERMS
        }), L = I.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE.format({});
        break;
      default:
        throw Error("Unexpected interval: ".concat(t))
    }
  } else if (S === c.PurchaseTypes.ONE_TIME) C = I.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
    primaryText: v,
    paidURL: c.MarketingURLs.PAID_TERMS
  }), L = N === c.SKUProductLines.COLLECTIBLES ? p ? I.default.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_GIFT_PAYMENT : I.default.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_PAYMENT : I.default.Messages.ONE_TIME_PURCHASE_FINE_PRINT;
  else if (null == f || p) switch (p && (C = I.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
      primaryText: v,
      paidURL: c.MarketingURLs.PAID_TERMS
    })), t) {
    case d.SubscriptionIntervalTypes.MONTH:
      L = p ? I.default.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : I.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY, L = p ? I.default.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : 1 === a ? I.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY : I.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MULTI_MONTH.format({
        intervalCount: a
      });
      break;
    case d.SubscriptionIntervalTypes.YEAR:
      L = p ? I.default.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_YEARLY : I.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_YEARLY;
      break;
    case void 0:
      L = "";
      break;
    default:
      throw Error("Unexpected interval: ".concat(t))
  } else {
    let e;
    let n = (0, r.getReviewConfirmButtonLabel)({
      purchaseType: c.PurchaseTypes.SUBSCRIPTION,
      plan: f,
      premiumSubscription: null == M ? null : M,
      isGift: !1,
      planGroup: b,
      isPrepaidPaymentSource: !1
    });
    if (null != R && null != t && null != a && (e = (0, o.formatRate)((0, o.formatPrice)(R.amount, R.currency), t, a)), null == e) {
      let e = Error("Missing base rate for legal fine print");
      (0, s.captureBillingException)(e, {
        tags: {
          planId: f.id
        }
      })
    }
    L = (null == M ? void 0 : M.isPaused) ? I.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_RESUME.format({
      primaryText: n,
      rate: e,
      paidURL: c.MarketingURLs.PAID_TERMS,
      contactLink: c.MarketingURLs.CONTACT,
      helpdeskArticle: i.default.getArticleURL(c.HelpdeskArticles.BILLING)
    }) : null != M && (0, u.subscriptionCanDowngrade)(M, f.id, b) ? I.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PLAN_CHANGE_V2.format({
      primaryText: n,
      rate: e,
      paidURL: c.MarketingURLs.PAID_TERMS,
      contactLink: c.MarketingURLs.CONTACT,
      helpdeskArticle: i.default.getArticleURL(c.HelpdeskArticles.BILLING)
    }) : I.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_V2.format({
      primaryText: n,
      rate: e,
      paidURL: c.MarketingURLs.PAID_TERMS,
      contactLink: c.MarketingURLs.CONTACT,
      helpdeskArticle: i.default.getArticleURL(c.HelpdeskArticles.BILLING)
    })
  }
  return (0, n.jsxs)(n.Fragment, {
    children: ["" !== C && (0, n.jsxs)("div", {
      children: [(0, n.jsx)("div", {
        children: C
      }), (0, n.jsx)("div", {
        className: _.divider
      })]
    }), "" !== L && (0, n.jsx)("div", {
      children: L
    }), E === c.PaymentSourceTypes.PAYSAFE_CARD && (0, n.jsx)("div", {
      className: _.paymentSourceNoticeCopy,
      children: I.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PAYSAFECARD
    }), E === c.PaymentSourceTypes.SOFORT && (0, n.jsxs)("div", {
      className: _.paymentSourceNoticeCopy,
      children: [I.default.Messages.SOFORT_MANDATE_AGREEMENT, " "]
    })]
  })
}