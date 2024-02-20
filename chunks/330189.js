"use strict";
a.r(t), a.d(t, {
  default: function() {
    return N
  }
});
var s = a("37983");
a("884691");
var n = a("819855"),
  l = a("77078"),
  i = a("841098"),
  r = a("701909"),
  o = a("719923"),
  u = a("153160"),
  c = a("478968"),
  d = a("510928"),
  _ = a("646718"),
  m = a("49111"),
  f = a("782340"),
  I = a("217668"),
  E = a("940420"),
  C = a("591726"),
  N = function(e) {
    let {
      premiumSubscription: t,
      premiumType: a,
      onClose: N,
      userDiscountOffer: p
    } = e, M = (0, i.default)(), R = (0, n.isThemeDark)(M) ? E : C, T = (0, c.useChurnDiscountedPrice)(t, _.SubscriptionPlans.PREMIUM_MONTH_TIER_2, p), L = (0, o.getPrice)(_.SubscriptionPlans.PREMIUM_MONTH_TIER_2), P = (0, u.formatPrice)(L.amount, L.currency);
    return null == p ? null : (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(d.default, {
        premiumType: a,
        onClose: N
      }), (0, s.jsx)(l.ModalContent, {
        className: I.body,
        children: (0, s.jsxs)("div", {
          className: I.confirmDiscountContent,
          children: [(0, s.jsx)(l.Heading, {
            variant: "heading-xl/bold",
            children: f.default.Messages.CHURN_DISCOUNT_CONFIRM_HEADER.format({
              percent: p.discount.amount
            })
          }), (0, s.jsxs)("div", {
            className: I.confirmDiscountDescription,
            children: [(0, s.jsx)("img", {
              alt: "",
              src: R,
              className: I.confirmDiscountIcon
            }), (0, s.jsx)(l.Text, {
              variant: "text-sm/medium",
              children: f.default.Messages.CHURN_DISCOUNT_CONFIRM_DESCRIPTION.format({
                percent: p.discount.amount,
                numMonths: p.discount.user_usage_limit,
                price: P
              })
            })]
          }), (0, s.jsx)("div", {
            className: I.confirmDiscountLegalese,
            children: (0, s.jsx)(l.Text, {
              variant: "text-xs/semibold",
              className: I.confirmDiscountLegaleseText,
              children: f.default.Messages.CHURN_DISCOUNT_CONFIRM_LEGALESE.format({
                discountedPrice: T,
                billingPeriod: (0, o.getDiscountIntervalString)(p.discount.user_usage_limit_interval),
                numMonths: p.discount.user_usage_limit,
                fullPrice: P,
                helpdeskArticle: r.default.getArticleURL(m.HelpdeskArticles.PAID_TERMS)
              })
            })
          }), (0, s.jsxs)("div", {
            className: I.confirmDiscountButtons,
            children: [(0, s.jsx)(l.Button, {
              look: l.ButtonLooks.LINK,
              onClick: () => N(),
              children: f.default.Messages.CHURN_DISCOUNT_NEVERMIND
            }), (0, s.jsx)(l.Button, {
              size: l.ButtonSizes.SMALL,
              children: f.default.Messages.CHURN_DISCOUNT_CONFIRM_DISCOUNT
            })]
          })]
        })
      })]
    })
  }